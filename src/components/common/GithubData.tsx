import { fetchContributions, fetchRepoData } from "@/actions/github";
import GithubContributionsGrid from "./GithubContributionsGrid";

export type githubResponseType = {
  contributionDays: {
    date: string;
    contributionCount: number;
  }[];
}[];

export default async function GithubData() {
  const contributionsResponse = await fetchContributions();
  const repositoryDataResponse = await fetchRepoData([
    "Minimal-Portfolio-Template",
    "url-shortener",
  ]);

  if (!contributionsResponse.data || !repositoryDataResponse.data) {
    return <div>Missing Credentials to fetch the data</div>;
  }

  return (
    <div>
      <GithubContributionsGrid weeks={contributionsResponse.data} />
    </div>
  );
}
