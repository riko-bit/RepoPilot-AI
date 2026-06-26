import { LoaderCircle } from "lucide-react";

function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 text-white">
      <LoaderCircle
        className="mb-6 animate-spin text-indigo-400"
        size={70}
      />

      <h1 className="text-4xl font-bold">
        Analyzing Repository...
      </h1>

      <p className="mt-4 text-zinc-400">
        AI agents are understanding your repository.
      </p>
    </div>
  );
}

export default Loading;