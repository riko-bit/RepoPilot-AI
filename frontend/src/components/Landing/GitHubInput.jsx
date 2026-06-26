import { useState } from "react";

import { motion } from "framer-motion";

import {
  Code2,
  ArrowRight
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

import api from "../../services/api";

import { useRepo } from "../../context/RepoContext";

function GitHubInput() {

  const navigate = useNavigate();

  const {
    setRepoUrl,
    setAnalysis,
    setLoading
  } = useRepo();

  const [url, setUrl] = useState("");

  async function handleAnalyze() {

    if (!url.trim()) {

      toast.error(
        "Please enter a GitHub repository URL."
      );

      return;

    }

    try {

      setLoading(true);

      setRepoUrl(url);

      navigate("/loading");

      const response = await api.post(
        "/analyze",
        {
          repo_url: url
        }
      );

      setAnalysis(
        response.data
      );

      navigate("/dashboard");

    }

    catch (error) {

      console.error(error);

      toast.error(
        "Failed to analyze repository."
      );

      navigate("/");

    }

    finally {

      setLoading(false);

    }

  }

  return (

    <motion.div

      initial={{
        opacity: 0,
        y: 40
      }}

      animate={{
        opacity: 1,
        y: 0
      }}

      transition={{
        delay: 0.4,
        duration: 0.8
      }}

      className="mt-16 w-full max-w-4xl"

    >

      <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-3 backdrop-blur-xl shadow-2xl shadow-black/40">

        <div className="flex flex-col gap-3 md:flex-row">

          <div className="flex flex-1 items-center gap-3 rounded-2xl bg-zinc-950 px-5 py-4">

            <Code2

              size={22}

              className="text-zinc-500"

            />

            <input

              type="text"

              value={url}

              onChange={(e) =>
                setUrl(
                  e.target.value
                )
              }

              placeholder="https://github.com/username/repository"

              className="w-full bg-transparent text-white outline-none placeholder:text-zinc-500"

            />

          </div>

          <button

            onClick={handleAnalyze}

            className="flex items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-indigo-500"

          >

            Analyze

            <ArrowRight
              size={18}
            />

          </button>

        </div>

      </div>

    </motion.div>

  );

}

export default GitHubInput;