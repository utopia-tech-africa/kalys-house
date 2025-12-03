"use client";

export const LiveChat = () => {
  return (
    <div className="w-full h-full rounded-lg bg-black/70 p-4 text-white overflow-auto">
      <h3 className="text-xl font-semibold mb-4">Live Chat</h3>
      <div className="flex flex-col gap-3">
        {/* Placeholder for chat messages */}
        <p className="text-sm opacity-70">Chat integration coming soon...</p>
      </div>
      <input
        type="text"
        placeholder="Type a message..."
        className="mt-4 w-full p-2 rounded bg-gray-800 text-white outline-none"
      />
    </div>
  );
};
