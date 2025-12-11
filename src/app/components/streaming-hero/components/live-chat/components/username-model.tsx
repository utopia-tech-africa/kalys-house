import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Smile } from "lucide-react";
import EmojiPicker from "emoji-picker-react";

export const UsernameModal = ({
  setUsername,
  closeModal,
}: {
  setUsername: (username: string) => void;
  closeModal: () => void;
}) => {
  const [tempName, setTempName] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-gray-900 p-6 rounded-2xl shadow-lg min-w-[300px] max-h-[calc(100dvh-100px)] flex flex-col gap-4 relative">
        {/* X Close Button */}
        <Button
          variant="brand"
          size="sm"
          onClick={closeModal}
          className="absolute top-2 right-2 text-white transition w-8 h-8 flex items-center justify-center rounded-full"
        >
          ✕
        </Button>

        <h2 className="text-white text-lg font-bold">Enter Username</h2>

        {/* Emoji Picker Dropdown */}
        {showEmojiPicker && (
          <EmojiPicker
            width="fit-content"
            onEmojiClick={(emoji) => {
              setTempName((prev) => prev + emoji.emoji);
            }}
          />
        )}

        <div className="flex-1 flex gap-2  p-2 items-center rounded-2xl bg-white/40">
          {/* Message Input */}
          <Input
            type="text"
            placeholder="Your name"
            className="font-poppins text-sm"
            value={tempName}
            onChange={(e) => setTempName(e.target.value)}
            onFocus={() => setShowEmojiPicker(false)}
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
