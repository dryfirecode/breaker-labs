import type { Metadata } from "next";
import PostCard from "@/components/PostCard";

export const metadata: Metadata = {
  title: "Build Log",
};

const posts = [
  {
    title: "The Agentic SOC Is Coming. So Are the Attacks Designed to Break It.",
    date: "March 8, 2026",
    excerpt:
      "AI is going from co-pilot to co-worker in security operations. But prompt injection, data poisoning, and model hijacking are the new attack categories.",
    category: "AI" as const,
    href: "https://securitysignal.substack.com/p/the-agentic-soc-is-coming-so-are",
  },
  {
    title: "Your AI Agent's Plugins Could Be Malware. Nobody's Checking.",
    date: "March 1, 2026",
    excerpt:
      "341 malicious skills found in a single AI agent marketplace. We've seen this movie before with npm and Docker Hub. The sequel is worse.",
    category: "AI" as const,
    href: "https://securitysignal.substack.com/p/your-ai-agents-plugins-could-be-malware",
  },
  {
    title: "Google Just Published a Scoreboard of How Nation-States Are Weaponizing AI.",
    date: "February 22, 2026",
    excerpt:
      "Google's GTIG AI Threat Tracker reveals Iran, North Korea, China, and Russia are using Gemini for recon, phishing, malware generation, and model theft.",
    category: "Security" as const,
    href: "https://securitysignal.substack.com/p/google-just-published-a-scoreboard",
  },
  {
    title: "A Nation-State Just Deepfaked a CEO on Zoom. Here's the Full Kill Chain.",
    date: "February 13, 2026",
    excerpt:
      "North Korea's UNC1069 is using AI-generated video, compromised Telegram accounts, and commercial AI tools to build a new kind of social engineering.",
    category: "Security" as const,
    href: "https://securitysignal.substack.com/p/a-nation-state-just-deepfaked-a-ceo",
  },
  {
    title: "Prompt Injection Isn't a Bug. It's Language Working as Designed.",
    date: "February 11, 2026",
    excerpt:
      "And a new research paper just proved why no one is ever going to fix it.",
    category: "AI" as const,
    href: "https://securitysignal.substack.com/p/prompt-injection-isnt-a-bug-its-language",
  },
  {
    title: "Ring's \"Search Party\" Isn't About Finding Dogs. It's About Building the Surveillance Network No One Voted For.",
    date: "February 10, 2026",
    excerpt:
      "Amazon just ran a Super Bowl ad normalizing neighborhood-wide AI scanning. And 125 million people watched it happen.",
    category: "Security" as const,
    href: "https://securitysignal.substack.com/p/rings-search-party-isnt-about-finding",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-midnight px-6 pb-16 pt-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-extrabold text-white md:text-5xl">
            Build Log
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-steel">
            What&apos;s getting built, what&apos;s breaking, and what I&apos;m
            learning along the way. Building in public, for real.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="bg-obsidian px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.title} {...post} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-steel">
              These posts are from{" "}
              <a
                href="https://securitysignal.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-signal underline underline-offset-2 hover:text-white"
              >
                Security Signal
              </a>
              , my cybersecurity and AI security newsletter on Substack.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
