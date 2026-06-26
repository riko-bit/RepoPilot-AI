import { useEffect, useState } from "react";

import Header from "../../components/dashboard/Header";

import { useRepo } from "../../context/RepoContext";
import api from "../../services/api";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { BookOpen, Loader2 } from "lucide-react";

function Documentation() {
  const { analysis } = useRepo();

  const [documentation, setDocumentation] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadDocumentation() {
      try {
        const response = await api.get("/docs-agent");

        setDocumentation(response.data.documentation);
      } catch (err) {
        console.error(err);
        setError("Failed to generate documentation.");
      } finally {
        setLoading(false);
      }
    }

    loadDocumentation();
  }, []);

  if (!analysis) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-950 text-3xl font-bold text-white">
        No Repository Loaded
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-8 py-12">

      <Header repository={analysis.repository} />

      <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-900 p-8">

        <div className="mb-8 flex items-center gap-4">

          <div className="rounded-xl bg-indigo-600 p-3">
            <BookOpen
              size={24}
              className="text-white"
            />
          </div>

          <div>

            <h1 className="text-3xl font-bold text-white">
              Documentation
            </h1>

            <p className="text-zinc-400">
              AI generated repository documentation.
            </p>

          </div>

        </div>

        {loading ? (

          <div className="flex justify-center py-20">

            <Loader2
              size={40}
              className="animate-spin text-indigo-500"
            />

          </div>

        ) : error ? (

          <div className="rounded-xl border border-red-500 bg-red-500/10 p-6 text-red-400">
            {error}
          </div>

        ) : (

          <div
            className="
              prose
              prose-invert
              prose-zinc
              max-w-none
              rounded-xl
              border
              border-zinc-800
              bg-zinc-950
              p-8
            "
          >

            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
            >
              {documentation}
            </ReactMarkdown>

          </div>

        )}

      </div>

    </div>
  );
}

export default Documentation;