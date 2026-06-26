import { Bot } from "lucide-react";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-900/70 bg-zinc-950/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600">
            <Bot size={20} className="text-white" />
          </div>

          <div>
            <h1 className="text-lg font-bold text-white">
              RepoPilot AI
            </h1>

            <p className="text-xs text-zinc-500">
              Repository Intelligence
            </p>
          </div>
        </div>

        <nav className="hidden items-center gap-8 text-sm md:flex">
          <button className="text-zinc-400 transition hover:text-white">
            Features
          </button>

          <button className="text-zinc-400 transition hover:text-white">
            Documentation
          </button>

          <button className="text-zinc-400 transition hover:text-white">
            GitHub
          </button>

          <button className="rounded-xl bg-indigo-600 px-5 py-2 font-medium text-white transition hover:bg-indigo-500">
            Analyze Repo
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;