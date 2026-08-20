"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaPaperPlane } from "react-icons/fa6";
import { io, Socket } from "socket.io-client";
import axios from "axios";

import EmojiPicker from "emoji-picker-react";
import { ErrorModal } from "./components/error-modal";
import { UsernameModal } from "./components/username-model";
import { MessageBubble } from "./components/message-bubble";
import { Smile } from "lucide-react";

export interface Message {
  id?: string;
  username: string;
  userId: string;
  message: string;
  createdAt?: string;
  timestamp?: string;
  system?: boolean; // for system messages like user joined
}

interface UserInfo {
  username: string;
  userId: string;
}

const STREAM_ID = "main-stream"; // hardcoded stream ID

// ---------------- LiveChat Component ---------------- //
export const LiveChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [showUsernameModal, setShowUsernameModal] = useState(false);
  const [errorModal, setErrorModal] = useState<string | null>(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const socketRef = useRef<Socket | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // ---------------- Load username from localStorage ---------------- //
  useEffect(() => {
    const stored = localStorage.getItem("chat_userInfo");
    if (!stored) return;

    try {
      const parsed = JSON.parse(stored);

      // Guard against corrupted storage
      if (!parsed.username || !parsed.userId) {
        localStorage.removeItem("chat_userInfo");
        return;
      }

      setUserInfo(parsed);
    } catch {
      localStorage.removeItem("chat_userInfo");
    }
  }, []);

  // ---------------- Save username to localStorage ---------------- //
  const handleSetUsername = (name: string) => {
    const newUser: UserInfo = {
      username: name,
      userId: Math.random().toString(36).substring(2, 10),
    };

    setUserInfo(newUser);
    localStorage.setItem("chat_userInfo", JSON.stringify(newUser));
    setShowUsernameModal(false);

    // Join immediately after setting name
    if (socketRef.current) {
      socketRef.current.emit("register", { username: newUser.username });

      socketRef.current.emit("join_room", {
        streamId: STREAM_ID,
        username: newUser.username,
        userId: newUser.userId,
      });
    }
  };

  // ---------------- Leave room and clear username ---------------- //
  const leaveRoom = () => {
    if (socketRef.current && userInfo) {
      socketRef.current.emit("leave_room", {
        streamId: STREAM_ID,
        username: userInfo.username,
      });
    }

    localStorage.removeItem("chat_userInfo");
    setUserInfo(null); // user becomes a read-only viewer but still connected
  };

  // ---------------- Fetch historical messages ---------------- //
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/saved-messages?streamId=${STREAM_ID}`
        );
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
    const socket = io(process.env.NEXT_PUBLIC_API_URL!, {
      autoConnect: true,
    });

    socketRef.current = socket;

    const stored = localStorage.getItem("chat_userInfo");

    if (stored) {
      const parsed: UserInfo = JSON.parse(stored);

      // Validate loaded data
      if (parsed.username && parsed.userId) {
        setUserInfo(parsed);

        socket.emit("register", { username: parsed.username });

        // 👇 FIXED: this caused your crash before
        socket.emit("join_room", {
          streamId: STREAM_ID,
          username: parsed.username,
          userId: parsed.userId,
        });
      }
    }

    // socket.on("joined_room", (data) =>
    //   console.log("Joined room:", data.roomId)
    // );

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
          userId: msg.userId,
          message: msg.message,
          timestamp: msg.timestamp,
          system: true,
        },
      ])
    );

    // Receive system messages (user left)
    socket.on("user_left", (msg: Message) =>
      setMessages((prev) => [
        ...prev,
        {
          username: msg.username,
          userId: msg.userId,
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
  }, []);

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

    // If not registered → ask for username
    if (!userInfo) {
      setShowUsernameModal(true);
      return;
    }

    socketRef.current?.emit("send_message", {
      username: userInfo.username,
      userId: userInfo.userId,
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
      <div className="relative w-full h-[440px] rounded-lg bg-black/40 backdrop-blur-[100px] p-4 text-white flex flex-col justify-between overflow-hidden">
        <h3 className="text-xl text-center border-b border-[#B4B4B44D] pb-2">
          STREAM CHAT
        </h3>
        {userInfo ? (
          <Button
            onClick={leaveRoom}
            className="absolute right-4 top-4 text-sm w-fit px-2 py-1 my-auto rounded-sm"
          >
            Leave Chat
          </Button>
        ) : (
          <Button
            onClick={() => setShowUsernameModal(true)}
            className="absolute right-4 top-4 text-sm w-fit px-2 py-1 my-auto rounded-sm bg-blue-600"
          >
            Join Chat
          </Button>
        )}

        <div
          className="flex-1 overflow-y-auto mt-2 pr-1 space-y-2 font-poppins text-sm"
          style={{ scrollBehavior: "smooth" }}
        >
          {messages.map((msg, idx) => (
            <MessageBubble
              key={idx}
              msg={msg}
              currentUserId={userInfo?.userId || null}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="flex border-t border-[#B4B4B44D] pt-2 gap-2 items-center relative">
          {/* Emoji Picker Dropdown */}
          {showEmojiPicker && (
            <div className="absolute bottom-12 left-0 z-50">
              <EmojiPicker
                onEmojiClick={(emoji) => {
                  setInputMessage((prev) => prev + emoji.emoji);
                }}
              />
            </div>
          )}

          <div className="flex-1 flex gap-2  p-2 items-center rounded bg-white/40">
            {/* Message Input */}
            <input
              type="text"
              className="w-full text-white outline-none font-poppins text-sm"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              onFocus={() => setShowEmojiPicker(false)}
              placeholder="Type your message..."
            />
            {/* Emoji Toggle Button */}
            <button
              className={`size-fit h-fit cursor-pointer ${showEmojiPicker && "rounded-full bg-blue-700 text-white"}`}
              onClick={() => setShowEmojiPicker((prev) => !prev)}
            >
              <Smile />
            </button>
          </div>

          <Button
            className="w-[42px] rounded h-9 flex items-center justify-center"
            onClick={() => {
              handleSend();
              setShowEmojiPicker(false);
            }}
          >
            <FaPaperPlane />
          </Button>
        </div>
      </div>

      {/* ---------------- Username Modal ---------------- */}
      {showUsernameModal && (
        <UsernameModal
          setUsername={handleSetUsername}
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
