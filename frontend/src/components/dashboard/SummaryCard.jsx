function SummaryCard({ summary }) {

  const largestFile =
    summary.largest_files?.[0];

  return (

    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">

      <h2 className="mb-8 text-2xl font-bold text-white">
        Repository Summary
      </h2>

      <div className="grid gap-6 md:grid-cols-2">

        <div>

          <p className="text-sm text-zinc-500">
            Total Files
          </p>

          <h3 className="mt-2 text-3xl font-bold text-white">
            {summary.total_files}
          </h3>

        </div>

        <div>

          <p className="text-sm text-zinc-500">
            Total Lines
          </p>

          <h3 className="mt-2 text-3xl font-bold text-white">
            {summary.total_lines}
          </h3>

        </div>

        <div>

          <p className="text-sm text-zinc-500">
            Repository Size
          </p>

          <h3 className="mt-2 text-3xl font-bold text-white">
            {(summary.total_size_bytes / 1024).toFixed(2)} KB
          </h3>

        </div>

        <div>

          <p className="text-sm text-zinc-500">
            Largest File
          </p>

          <h3 className="mt-2 text-lg font-semibold text-indigo-400">
            {largestFile?.name || "-"}
          </h3>

        </div>

      </div>

    </div>

  );

}

export default SummaryCard;