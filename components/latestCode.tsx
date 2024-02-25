"use client";
import { useState, useEffect } from "react";
import GetRepos from "@/lib/githubRepos";
import RepoCard from "./ui/repoCard";

interface RepoData {
  id: number;
  name: string;
  description: string;
  html_url: string;
}

export default function LatestCode() {
  const [latestRepos, setLatestRepos] = useState<RepoData[]>([]);

  useEffect(() => {
    async function fetchData() {
      const repos = await GetRepos();
      setLatestRepos(repos);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl  px-10 lg:-mt-10 gap-y-20">
        {latestRepos &&
          latestRepos.map((repo) => (
            <RepoCard key={repo.id} latestRepo={repo} />
          ))}
      </div>
    </>
  );
}
