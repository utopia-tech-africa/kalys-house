"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaPaperPlane } from "react-icons/fa6";
import { io, Socket } from "socket.io-client";
import axios from "axios";
import dayjs from "dayjs";

interface Message {
  id?: string;
  username: string;
  message: string;
  createdAt?: string;
  timestamp?: string;
  system?: boolean; // for system messages like user joined
}

const STREAM_ID = "main-stream"; // hardcoded stream ID

// ---------------- MessageBubble Component ---------------- //
const MessageBubble = ({
  msg,
  currentUser,
}: {
  msg: Message;
  currentUser: string | null;
}) => {
  const isCurrentUser = msg.username === currentUser && !msg.system;
  const isSystemMessage = msg.system;

  return (
    <div className={`flex ${isCurrentUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[70%] p-2 rounded-lg wrap-break-word ${
          isSystemMessage
            ? " text-white italic text-sm text-center w-full border-b"
            : isCurrentUser
              ? "bg-blue-600 text-white"
              : "bg-gray-800 text-white"
        }`}
      >
        {!isSystemMessage && (
          <div className="text-xs opacity-70 mb-1">
            {msg.username} •{" "}
            {dayjs(msg.createdAt || msg.timestamp).format("HH:mm")}
          </div>
        )}
        <div>{msg.message}</div>
      </div>
    </div>
  );
};

// ---------------- UsernameModal Component ---------------- //
const UsernameModal = ({
  setUsername,
  closeModal,
}: {
  setUsername: (username: string) => void;
  closeModal: () => void;
}) => {
  const [tempName, setTempName] = useState("");
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-gray-900 p-6 rounded shadow-lg w-[300px] flex flex-col gap-4">
        <h2 className="text-white text-lg font-bold">Enter Username</h2>
        <Input
          type="text"
          placeholder="Your name"
          value={tempName}
          onChange={(e) => setTempName(e.target.value)}
        />
        <Button
          onClick={() => {
            if (!tempName.trim()) return;
            setUsername(tempName.trim());
            closeModal();
          }}
        >
          Join Chat
        </Button>
      </div>
    </div>
  );
};

// ---------------- ErrorModal Component ---------------- //
const ErrorModal = ({
  message,
  closeModal,
}: {
  message: string;
  closeModal: () => void;
}) => (
  <div
    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
    onClick={closeModal}
  >
    <div className="bg-red-700 p-4 rounded shadow-lg text-white w-[300px] text-center">
      <p>{message}</p>
      <Button className="mt-2" onClick={closeModal}>
        Close
      </Button>
    </div>
  </div>
);

// ---------------- LiveChat Component ---------------- //
export const LiveChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [username, setUsername] = useState<string | null>(null);
  const [showUsernameModal, setShowUsernameModal] = useState(false);
  const [errorModal, setErrorModal] = useState<string | null>(null);

  const socketRef = useRef<Socket | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // ---------------- Fetch historical messages ---------------- //
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/saved-messages?streamId=${STREAM_ID}`
        );
        // Mark all previous messages as non-system
        const savedMessages = res.data.savedMessages.map((msg: Message) => ({
          ...msg,
          system: false,
        }));
        setMessages(savedMessages);
      } catch (err) {
        console.error("Failed to fetch messages", err);
        setErrorModal("Failed to load previous messages.");
      }
    };
    fetchMessages();
  }, []);

  // ---------------- Initialize socket ---------------- //
  useEffect(() => {
    if (!username) return;

    const socket = io(process.env.NEXT_PUBLIC_API_URL!);
    socketRef.current = socket;

    socket.emit("register", { username });
    socket.emit("join_room", { streamId: STREAM_ID, username });

    socket.on("joined_room", (data) =>
      console.log("Joined room:", data.roomId)
    );

    // Receive normal chat messages
    socket.on("receive_message", (msg: Message) =>
      setMessages((prev) => [...prev, { ...msg, system: false }])
    );

    // Receive system messages (user joined)
    socket.on("user_joined", (msg: Message) =>
      setMessages((prev) => [
        ...prev,
        {
          username: msg.username,
          message: msg.message,
          timestamp: msg.timestamp,
          system: true,
        },
      ])
    );

    socket.on("error_message", (err: { error: string }) =>
      setErrorModal(err.error)
    );

    return () => {
      socket.disconnect();
    };
  }, [username]);

  // ---------------- Auto-scroll ---------------- //
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // ---------------- Send message ---------------- //
  const handleSend = () => {
    if (!inputMessage.trim()) return;

    if (!username) {
      setShowUsernameModal(true);
      return;
    }

    socketRef.current?.emit("send_message", {
      username,
      message: inputMessage.trim(),
    });

    setInputMessage("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <>
      {/* ---------------- Chat Box ---------------- */}
      <div className="w-full h-[440px] rounded-lg bg-black/40 backdrop-blur-[100px] p-4 text-white flex flex-col justify-between overflow-hidden">
        <h3 className="text-xl text-center border-b border-[#B4B4B44D] pb-2">
          STREAM CHAT
        </h3>

        <div className="flex-1 overflow-y-auto mt-2 pr-1 space-y-2 font-poppins text-sm">
          {messages.map((msg, idx) => (
            <MessageBubble key={idx} msg={msg} currentUser={username} />
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="flex border-t border-[#B4B4B44D] pt-2 gap-2">
          <Input
            type="text"
            className="w-full p-3 rounded bg-white/40 text-white outline-none"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
          />
          <Button
            className="w-[42px] rounded h-9 flex items-center justify-center"
            onClick={handleSend}
          >
            <FaPaperPlane />
          </Button>
        </div>
      </div>

      {/* ---------------- Username Modal ---------------- */}
      {showUsernameModal && (
        <UsernameModal
          setUsername={setUsername}
          closeModal={() => setShowUsernameModal(false)}
        />
      )}

      {/* ---------------- Error Modal ---------------- */}
      {errorModal && (
        <ErrorModal
          message={errorModal}
          closeModal={() => setErrorModal(null)}
        />
      )}
    </>
  );
};
