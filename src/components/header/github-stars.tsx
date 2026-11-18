import { config } from "@/data/config";
import { getGithubStars } from "@/lib/github-stars";
import { GitHubStarsButton } from "../ui/shadcn-io/github-stars-button";

export default async function GitHubStars({ className }: { className?: string }) {
  if (!config.githubUsername || !config.githubRepo) return null;

  // null = repo missing, github outage or rate limit: just hide the button
  const stars = await getGithubStars();
  if (stars === null) return null;

  return (
    <GitHubStarsButton
      username={config.githubUsername}
      repo={config.githubRepo}
      stars={stars}
      className={className}
    />
  );
}
