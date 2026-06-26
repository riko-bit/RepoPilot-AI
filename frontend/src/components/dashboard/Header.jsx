import { FolderGit2, RefreshCw } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { useRepo } from "../../context/RepoContext";

function Header({ repository }) {

  const navigate = useNavigate();

  const {
    setAnalysis,
    setRepoUrl
  } = useRepo();

  function handleAnalyzeAnotherRepo() {

    setAnalysis(null);

    setRepoUrl("");

    navigate("/");

  }

  return (

    <div className="mb-10 flex items-center justify-between">

      <div className="flex items-center gap-4">

        <div className="rounded-2xl bg-indigo-600 p-4">

          <FolderGit2 size={28} />

        </div>

        <div>

          <h1 className="text-4xl font-bold text-white">

            {repository.repo_name}

          </h1>

          <p className="mt-1 text-zinc-400">

            {repository.local_path}

          </p>

        </div>

      </div>

      <button
        onClick={handleAnalyzeAnotherRepo}
        className="
          flex
          items-center
          gap-2
          rounded-xl
          border
          border-zinc-700
          bg-zinc-900
          px-5
          py-3
          text-zinc-300
          transition
          hover:bg-zinc-800
        "
      >

        <RefreshCw size={18} />

        Analyze Another Repo

      </button>

    </div>

  );

}

export default Header;