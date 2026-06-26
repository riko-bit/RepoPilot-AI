import { useEffect, useState } from "react";

import Header from "../../components/dashboard/Header";

import { useRepo } from "../../context/RepoContext";
import api from "../../services/api";

import {
  Shield,
  Loader2,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";

function Security() {
  const { analysis, repoUrl } = useRepo();

  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadSecurityReport() {
      try {
        const response = await api.post("/security-agent", {
          repo_url: repoUrl,
        });

        setReport(response.data);
      } catch (err) {
        console.error(err);
        setError("Failed to analyze repository security.");
      } finally {
        setLoading(false);
      }
    }

    loadSecurityReport();
  }, [repoUrl]);

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
            <Shield size={24} />
          </div>

          <div>

            <h1 className="text-3xl font-bold text-white">
              Security Analysis
            </h1>

            <p className="text-zinc-400">
              Automated security scan of the repository.
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

          <>

            <div className="mb-8 grid grid-cols-2 gap-6">

              <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6">

                <p className="text-zinc-400">
                  Repository
                </p>

                <h2 className="mt-2 text-3xl font-bold text-white">
                  {report.repository}
                </h2>

              </div>

              <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6">

                <p className="text-zinc-400">
                  Issues Found
                </p>

                <h2 className="mt-2 text-3xl font-bold text-white">
                  {report.issues_found}
                </h2>

              </div>

            </div>

            {report.issues_found === 0 ? (

              <div className="flex items-center gap-3 rounded-xl border border-green-600 bg-green-600/10 p-6 text-green-400">

                <CheckCircle2 size={24} />

                <span className="text-lg">
                  No security issues were detected.
                </span>

              </div>

            ) : (

              <div className="space-y-4">

                {report.issues.map((issue, index) => (

                  <div
                    key={index}
                    className="rounded-xl border border-zinc-800 bg-zinc-950 p-6"
                  >

                    <div className="flex items-center gap-3">

                      <AlertTriangle className="text-yellow-400" />

                      <h3 className="text-xl font-semibold text-white">
                        {issue.issue}
                      </h3>

                    </div>

                    <div className="mt-4 space-y-2 text-zinc-300">

                      <p>
                        <strong>Severity:</strong>{" "}
                        {issue.severity}
                      </p>

                      <p>
                        <strong>File:</strong>{" "}
                        {issue.file}
                      </p>

                      <p>
                        <strong>Matches:</strong>{" "}
                        {issue.matches_found}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            )}

          </>

        )}

      </div>

    </div>
  );
}

export default Security;