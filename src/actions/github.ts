"use server";

import { githubResponseType } from "@/components/common/GithubContributionsGrid";
import axios from "axios";

export async function fetchContributions() {
  try {
    const GITHUB_GRAPHQL_URL = "https://api.github.com/graphql";
    const accessToken = process.env.GITHUB_ACCESS_TOKEN;
    if (!accessToken) {
      throw new Error("No Access Token");
    }
    const query = `
    query {
      viewer {
        contributionsCollection {
          contributionCalendar {
            weeks {
              contributionDays {
                date
                contributionCount
              }
            }
          }
        }
      }
    }
`;

    const response = await axios.post(
      GITHUB_GRAPHQL_URL,
      { query },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      },
    );

    const data:githubResponseType =
      response.data.data.viewer.contributionsCollection.contributionCalendar
        .weeks;

    return data;
  } catch (err) {
    return {
      error: "No Access Token",
    };
  }
}
