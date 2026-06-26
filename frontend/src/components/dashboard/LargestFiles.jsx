function LargestFiles({ files }) {

  return (

    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">

      <h2 className="mb-8 text-2xl font-bold text-white">
        Largest Files
      </h2>

      <div className="space-y-5">

        {files.map((file) => (

          <div
            key={file.path}
            className="flex items-center justify-between rounded-xl border border-zinc-800 p-5 hover:border-indigo-500/30"
          >

            <div>

              <h3 className="font-semibold text-white">
                {file.name}
              </h3>

              <p className="text-sm text-zinc-500">
                {file.language}
              </p>

            </div>

            <div className="text-right">

              <p className="text-white">
                {file.lines} lines
              </p>

              <p className="text-zinc-500">
                {(file.size / 1024).toFixed(2)} KB
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}

export default LargestFiles;