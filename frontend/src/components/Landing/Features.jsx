import {
  FileText,
  ShieldCheck,
  Gauge,
  Boxes,
  WandSparkles,
  MessageSquare,
} from "lucide-react";

import { motion } from "framer-motion";

const features = [
  {
    icon: FileText,
    title: "AI Documentation",
    description:
      "Generate complete repository documentation automatically.",
  },
  {
    icon: ShieldCheck,
    title: "Security Audit",
    description:
      "Detect vulnerabilities and security risks using AI.",
  },
  {
    icon: Gauge,
    title: "Performance",
    description:
      "Find bottlenecks and optimize application performance.",
  },
  {
    icon: Boxes,
    title: "Architecture",
    description:
      "Understand project structure and software design.",
  },
  {
    icon: WandSparkles,
    title: "Refactoring",
    description:
      "Receive clean code suggestions and improvements.",
  },
  {
    icon: MessageSquare,
    title: "Repository Chat",
    description:
      "Ask questions about any repository using RAG.",
  },
];

function Features() {
  return (
    <section className="mt-24 w-full max-w-7xl">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-7 backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/40"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600/20">
                <Icon
                  size={28}
                  className="text-indigo-400"
                />
              </div>

              <h3 className="mb-3 text-xl font-semibold text-white">
                {feature.title}
              </h3>

              <p className="leading-7 text-zinc-400">
                {feature.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Features;