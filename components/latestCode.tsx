"use client";
import { useState, useEffect } from "react";
import GetRepos from "@/lib/githubRepos";
import RepoCard from "./ui/repoCard";
import Button from "./ui/button";
import { userData } from "@/lib/data";
import Loading from "./ui/loading";
interface RepoData {
  id: number;
  name: string;
  description: string;
  html_url: string;
}

export default function LatestCode() {
  const [latestRepos, setLatestRepos] = useState<RepoData[]>([]);
  /* manual loading state because react suspense doesn't work on useEffect*/
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      try {
        const repos = await GetRepos();
        setLatestRepos(repos);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <section className="py-10">
        <h1 className="text-2xl md:text-4xl font-semibold  pb-5 text-gray-800 dark:text-gray-200">
          Latest Code
        </h1>
        {isLoading ? (
          <Loading />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-20">
            {latestRepos &&
              latestRepos.map((repo) => (
                <RepoCard key={repo.id} latestRepo={repo} />
              ))}
          </div>
        )}
        <div className="flex justify-center pt-5">
          {/* button */}
          <Button text={"View Github"} url={userData.socialLinks.github} />
        </div>
      </section>
    </>
  );
}
