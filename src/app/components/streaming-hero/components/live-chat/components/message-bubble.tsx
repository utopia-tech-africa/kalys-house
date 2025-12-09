import dayjs from "dayjs";
import { Message } from "../live-chat";

export const MessageBubble = ({
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
