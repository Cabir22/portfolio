
import { cacheLife } from "next/cache";
import { config } from "@/data/config";

// unauthenticated github api = 60 req/hr per ip; 5min cache -> ~12 req/hr
// returns null on failure instead of throwing: an error thrown inside
// "use cache" escapes the caller's try/catch during prerender and fails the
// build (e.g. repo not pushed yet, rate limit). null is cached for 5min too.
export async function getGithubStars(): Promise<number | null> {
  "use cache";
  cacheLife({ stale: 300, revalidate: 300 });

  try {
    const res = await fetch(
      `https://api.github.com/repos/${config.githubUsername}/${config.githubRepo}`,
      { headers: { Accept: "application/vnd.github+json" } },
    );
    if (!res.ok) {
      console.error(`GitHub API responded with ${res.status}`);
      return null;
    }
    const data = await res.json();
    return typeof data.stargazers_count === "number" ? data.stargazers_count : null;
  } catch (err) {
    console.error(err);
    return null;
  }
}
