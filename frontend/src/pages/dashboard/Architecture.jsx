import { useEffect, useState } from "react";

import Header from "../../components/dashboard/Header";

import { useRepo } from "../../context/RepoContext";
import api from "../../services/api";

import { Boxes, Loader2 } from "lucide-react";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function Architecture() {
  const { analysis } = useRepo();

  const [architecture, setArchitecture] = useState("");

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    async function loadArchitecture() {
      try {
        const response = await api.get("/architecture-agent");

        setArchitecture(response.data.architecture);
      } catch (err) {
        console.error(err);

        setError("Failed to generate architecture.");
      } finally {
        setLoading(false);
      }
    }

    loadArchitecture();
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

            <Boxes size={24} />

          </div>

          <div>

            <h1 className="text-3xl font-bold text-white">
              Architecture
            </h1>

            <p className="text-zinc-400">
              AI generated repository architecture analysis.
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

          <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-8">

            <article className="prose prose-invert max-w-none">

              <ReactMarkdown remarkPlugins={[remarkGfm]}>

                {architecture}

              </ReactMarkdown>

            </article>

          </div>

        )}

      </div>

    </div>
  );
}

export default Architecture;