import { useEffect, useState } from "react";

import Header from "../../components/dashboard/Header";

import { useRepo } from "../../context/RepoContext";
import api from "../../services/api";

import { Zap, Loader2 } from "lucide-react";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function Performance() {

  const { analysis } = useRepo();

  const [report, setReport] = useState("");

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {

    async function loadPerformance() {

      try {

        const response = await api.get("/performance-agent");

        setReport(response.data.performance_report);

      }

      catch (err) {

        console.error(err);

        setError("Failed to generate performance report.");

      }

      finally {

        setLoading(false);

      }

    }

    loadPerformance();

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

            <Zap size={24} />

          </div>

          <div>

            <h1 className="text-3xl font-bold text-white">

              Performance Analysis

            </h1>

            <p className="text-zinc-400">

              AI generated repository performance analysis.

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

                {report}

              </ReactMarkdown>

            </article>

          </div>

        )}

      </div>

    </div>

  );

}

export default Performance;