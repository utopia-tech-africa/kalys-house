"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaPaperPlane } from "react-icons/fa6";

export const LiveChat = () => {
  return (
    <div className="w-full h-[440px] rounded-lg bg-black/40 backdrop-blur-[100px] p-4 text-white flex flex-col justify-between overflow-hidden">
      <h3 className="text-xl text-center border-b border-[#B4B4B44D] pb-2">
        STREAM CHAT
      </h3>

      <div className="flex-1 overflow-y-auto mt-2 pr-1">
        {/* messages would go here */}
      </div>

      <div className="flex border-t border-[#B4B4B44D] pt-2 gap-2">
        <Input
          type="text"
          className="w-full p-3 rounded bg-white/40 text-white outline-none"
        />
        <Button className="w-[42px] rounded h-9 flex items-center justify-center">
          <FaPaperPlane />
        </Button>
      </div>
    </div>
  );
};
