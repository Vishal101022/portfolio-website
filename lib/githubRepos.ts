// Api that fetches latest repos from github
import { Octokit } from "@octokit/core";

export const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  pushed_at: Date;
}

async function GetRepos(): Promise<Repository[]> {
  //console.log("Inside GetRepos function");
  const response = await octokit.request("GET /users/{owner}/repos", {
    owner: "Vishal101022",
    headers: {
      Accept: "application/vnd.github.v3+json",
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  const repos: Repository[] = response.data
    .map((repo: any) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      html_url: repo.html_url,
      pushed_at: repo.pushed_at,
    }))
    .filter(
      (repo: Repository) => new Date(repo.pushed_at) > new Date("2023-11-01")
    );
  return repos;
}

export default GetRepos;
