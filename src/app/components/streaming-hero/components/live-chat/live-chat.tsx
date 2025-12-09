"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaPaperPlane } from "react-icons/fa6";
import { io, Socket } from "socket.io-client";
import axios from "axios";

import { ErrorModal } from "./components/error-modal";
import { UsernameModal } from "./components/username-model";
import { MessageBubble } from "./components/message-bubble";

export interface Message {
  id?: string;
  username: string;
  message: string;
  createdAt?: string;
  timestamp?: string;
  system?: boolean; // for system messages like user joined
}

const STREAM_ID = "main-stream"; // hardcoded stream ID

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
    const container = messagesEndRef.current?.parentElement;
    if (!container) return;

    container.scrollTo({
      top: container.scrollHeight,
      behavior: "smooth",
    });
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

        <div
          className="flex-1 overflow-y-auto mt-2 pr-1 space-y-2 font-poppins text-sm"
          style={{ scrollBehavior: "smooth" }}
        >
          {messages.map((msg, idx) => (
            <MessageBubble key={idx} msg={msg} currentUser={username} />
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="flex border-t border-[#B4B4B44D] pt-2 gap-2">
          <Input
            type="text"
            className="w-full p-3 rounded bg-white/40 text-white outline-none font-poppins text-sm"
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
