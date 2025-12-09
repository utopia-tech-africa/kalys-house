import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const UsernameModal = ({
  setUsername,
  closeModal,
}: {
  setUsername: (username: string) => void;
  closeModal: () => void;
}) => {
  const [tempName, setTempName] = useState("");

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-gray-900 p-6 rounded shadow-lg w-[300px] flex flex-col gap-4 relative">
        {/* X Close Button */}
        <Button
          variant="brand"
          size="sm"
          onClick={closeModal}
          className="absolute top-2 right-2 text-gray-400 hover:text-white transition w-8 h-8 flex items-center justify-center rounded-full"
        >
          ✕
        </Button>

        <h2 className="text-white text-lg font-bold">Enter Username</h2>

        <Input
          type="text"
          placeholder="Your name"
          className="font-poppins text-sm"
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
