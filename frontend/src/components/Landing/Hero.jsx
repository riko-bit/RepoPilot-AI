import { motion } from "framer-motion";

import GitHubInput from "./GitHubInput";
import Features from "./Features";

function Hero() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      className="mx-auto flex max-w-7xl flex-col items-center text-center"
    >
      <span className="mb-5 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-5 py-2 text-sm text-indigo-300">
        AI-Powered Repository Intelligence
      </span>

      <h1 className="max-w-6xl text-6xl font-extrabold leading-tight tracking-tight text-white md:text-7xl">
        Understand Any
        <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
          {" "}
          GitHub Repository{" "}
        </span>
        in Seconds
      </h1>

      <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400 md:text-xl">
        Analyze repositories with AI agents for documentation,
        architecture, security, performance, refactoring,
        and intelligent repository chat powered by RAG.
      </p>

      <GitHubInput />

      <Features />
    </motion.div>
  );
}

export default Hero;