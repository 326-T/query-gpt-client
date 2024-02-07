import { Chat } from "@/types/chat";

export default function ChatBox({ chats }: { chats: Chat[] }) {
  return (
    <div className="block mt-10 space-y-5">
      {chats.map((chat, index) => (
        <div className="chat chat-end">
          <div key={index} className="chat-bubble">
            <p className="body-large">{chat.message}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
