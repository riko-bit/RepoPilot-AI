import { useState } from "react";

import { Send } from "lucide-react";

function ChatInput({ onSend, loading }) {
  const [question, setQuestion] = useState("");

  function handleSubmit() {
    if (!question.trim()) return;

    onSend(question);

    setQuestion("");
  }

  return (
    <div className="mt-8 flex gap-4">

      <input
        value={question}
        onChange={(e) =>
          setQuestion(e.target.value)
        }
        placeholder="Ask anything about this repository..."
        className="flex-1 rounded-2xl border border-zinc-800 bg-zinc-900 px-6 py-4 text-white outline-none focus:border-indigo-500"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSubmit();
          }
        }}
      />

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="rounded-2xl bg-indigo-600 px-6 text-white transition hover:bg-indigo-500 disabled:opacity-50"
      >
        <Send size={20} />
      </button>

    </div>
  );
}

export default ChatInput;