import type { Metadata } from "next";
import PostCard from "@/components/PostCard";

export const metadata: Metadata = {
  title: "Build Log",
};

const posts = [
  {
    title: "Why I Started Breaker Labs",
    date: "March 2026",
    excerpt:
      "Coal breakers, cybersecurity, and building in public. The origin story of Breaker Labs and what I'm trying to build.",
    category: "Build Log" as const,
    href: "#",
  },
  {
    title: "Building in Public: Month 1",
    date: "March 2026",
    excerpt:
      "First month of building the SaaS Factory. What shipped, what broke, and what I learned about building products solo.",
    category: "Build Log" as const,
    href: "#",
  },
  {
    title: "The AI Security Landscape Nobody's Watching",
    date: "February 2026",
    excerpt:
      "LLM vulnerabilities, prompt injection at scale, and why the AI security surface is growing faster than most teams realize.",
    category: "AI" as const,
    href: "#",
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
              More posts coming soon. This is a build log &mdash; it grows as
              the work progresses.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
