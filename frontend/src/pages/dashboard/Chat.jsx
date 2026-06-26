import { useState } from "react";

import ChatWindow from "../../components/dashboard/chat/ChatWindow";
import ChatInput from "../../components/dashboard/chat/ChatInput";

import api from "../../services/api";

import { useRepo } from "../../context/RepoContext";

function Chat() {

  const {
    repoUrl
  } = useRepo();

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hello! I'm RepoPilot AI.\n\nAsk me anything about this repository."
    }
  ]);

  const [loading, setLoading] = useState(false);

  async function handleSend(question) {

    const userMessage = {
      role: "user",
      content: question
    };

    setMessages((previous) => [
      ...previous,
      userMessage
    ]);

    setLoading(true);

    try {

      const response = await api.post(
        "/ask",
        {
          repo_url: repoUrl,
          question
        }
      );

      const assistantMessage = {
        role: "assistant",
        content:
          response.data.answer ??
          JSON.stringify(response.data, null, 2)
      };

      setMessages((previous) => [
        ...previous,
        assistantMessage
      ]);

    }

    catch (error) {

      console.error(error);

      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          content:
            "Sorry, I couldn't answer that question."
        }
      ]);

    }

    finally {

      setLoading(false);

    }

  }

  return (

    <div className="mx-auto flex h-screen max-w-7xl flex-col px-8 py-10">

      <div>

        <h1 className="text-4xl font-bold text-white">
          Repository Chat
        </h1>

        <p className="mt-2 text-zinc-500">
          Ask questions about the analyzed repository.
        </p>

      </div>

      <div
        className="
          mt-8
          flex-1
          overflow-y-auto
          rounded-2xl
          border
          border-zinc-800
          bg-zinc-950
          p-8
        "
      >

        <ChatWindow
          messages={messages}
        />

      </div>

      <ChatInput
        onSend={handleSend}
        loading={loading}
      />

    </div>

  );

}

export default Chat;