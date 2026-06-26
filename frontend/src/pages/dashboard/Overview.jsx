import Header from "../../components/dashboard/Header";
import StatsCards from "../../components/dashboard/StatsCards";
import SummaryCard from "../../components/dashboard/SummaryCard";
import LargestFiles from "../../components/dashboard/LargestFiles";

import { useRepo } from "../../context/RepoContext";

import {
  ChevronRight,
} from "lucide-react";

function Overview() {

  const { analysis } = useRepo();

  if (!analysis) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-3xl font-bold text-white">
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

    <div className="text-white">

      <div className="mx-auto max-w-7xl px-8 py-12">

        <Header repository={repository} />

        <StatsCards
          totalFiles={summary.total_files}
          totalLines={summary.total_lines}
          totalLanguages={languageNames.length}
          totalChunks={analysis.chunks_indexed}
        />

        <div className="mt-10 grid gap-8 xl:grid-cols-2">

          <SummaryCard
            summary={summary}
          />

          <LargestFiles
            files={summary.largest_files}
          />

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
                className="rounded-xl border border-zinc-800 p-5 transition hover:border-indigo-500/40 hover:bg-zinc-800"
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

      </div>

    </div>

  );

}

export default Overview;