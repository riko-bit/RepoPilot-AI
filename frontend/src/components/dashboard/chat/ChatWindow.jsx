import ChatMessage from "./ChatMessage";

function ChatWindow({ messages }) {
  return (
    <div className="space-y-6">

      {messages.map((message, index) => (

        <ChatMessage
          key={index}
          role={message.role}
          content={message.content}
        />

      ))}

    </div>
  );
}

export default ChatWindow;