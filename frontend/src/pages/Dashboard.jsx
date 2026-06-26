import DashboardLayout from "../components/dashboard/DashboardLayout";
import Header from "../components/dashboard/Header";

import { useRepo } from "../context/RepoContext";

import {
  Files,
  Boxes,
  FileCode2,
  ChevronRight,
} from "lucide-react";

function Dashboard() {
  const { analysis } = useRepo();

  if (!analysis) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center text-white text-3xl font-bold">
        No Repository Loaded
      </div>
    );
  }

  const repository = analysis.repository;
  const summary = analysis.summary;

  const languageNames = Object.keys(summary.languages || {});
  const treeEntries = Object.entries(analysis.repository_tree || []);
  const files = analysis.files || [];

  return (
    <DashboardLayout>

      <div className="text-white">

        <div className="mx-auto max-w-7xl px-8 py-12">

          {/* Header */}

          <Header repository={repository} />

          {/* Stats */}

          <div className="grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

              <Files className="mb-4 text-indigo-400" />

              <h2 className="text-4xl font-bold">
                {summary.total_files}
              </h2>

              <p className="mt-2 text-zinc-400">
                Files
              </p>

            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

              <Boxes className="mb-4 text-indigo-400" />

              <h2 className="text-4xl font-bold">
                {analysis.chunks_indexed}
              </h2>

              <p className="mt-2 text-zinc-400">
                Indexed Chunks
              </p>

            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

              <FileCode2 className="mb-4 text-indigo-400" />

              <h2 className="text-4xl font-bold">
                {languageNames.length}
              </h2>

              <p className="mt-2 text-zinc-400">
                Languages
              </p>

            </div>

          </div>

          {/* Languages */}

          <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-900 p-8">

            <h2 className="mb-6 text-2xl font-bold">
              Languages
            </h2>

            <div className="flex flex-wrap gap-3">

              {languageNames.map((language) => (

                <span
                  key={language}
                  className="rounded-full bg-indigo-600 px-4 py-2"
                >
                  {language}
                </span>

              ))}

            </div>

          </div>

          {/* Repository Tree */}

          <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-900 p-8">

            <h2 className="mb-6 text-2xl font-bold">
              Repository Structure
            </h2>

            <div className="space-y-4">

              {treeEntries.map(([folder, folderFiles]) => (

                <div
                  key={folder}
                  className="rounded-xl border border-zinc-800 p-4"
                >

                  <h3 className="font-semibold text-indigo-400">
                    {folder}
                  </h3>

                  <div className="mt-3 space-y-2">

                    {folderFiles.map((file) => (

                      <div
                        key={file}
                        className="flex items-center gap-2 text-zinc-300"
                      >

                        <ChevronRight size={16} />

                        {file}

                      </div>

                    ))}

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* Parsed Files */}

          <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-900 p-8">

            <h2 className="mb-6 text-2xl font-bold">
              Parsed Files
            </h2>

            <div className="space-y-4">

              {files.map((file) => (

                <div
                  key={file.path}
                  className="rounded-xl border border-zinc-800 p-5"
                >

                  <div className="text-lg font-semibold">
                    {file.name}
                  </div>

                  <div className="mt-2 text-zinc-400">
                    {file.language}
                  </div>

                  <div className="text-zinc-500">
                    {file.lines} lines
                  </div>

                  <div className="text-zinc-500">
                    {(file.size / 1024).toFixed(2)} KB
                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* Raw Summary */}

          <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-900 p-8">

            <h2 className="mb-6 text-2xl font-bold">
              Repository Summary
            </h2>

            <pre className="overflow-auto whitespace-pre-wrap text-zinc-300">
              {JSON.stringify(summary, null, 2)}
            </pre>

          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}

export default Dashboard;