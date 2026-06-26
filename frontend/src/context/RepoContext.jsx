import { createContext, useContext, useState } from "react";

const RepoContext = createContext();

export function RepoProvider({ children }) {
  const [repoUrl, setRepoUrl] = useState("");

  const [analysis, setAnalysis] = useState(null);

  const [loading, setLoading] = useState(false);

  const value = {
    repoUrl,
    setRepoUrl,

    analysis,
    setAnalysis,

    loading,
    setLoading,
  };

  return (
    <RepoContext.Provider value={value}>
      {children}
    </RepoContext.Provider>
  );
}

export function useRepo() {
  return useContext(RepoContext);
}