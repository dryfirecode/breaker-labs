import type { Metadata } from "next";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Security Signal",
};

const pastIssues = [
  {
    title: "The AI Security Blind Spots Nobody's Talking About",
    date: "March 2026",
    href: "https://securitysignal.substack.com",
  },
  {
    title: "Threat Intel That Actually Matters This Quarter",
    date: "February 2026",
    href: "https://securitysignal.substack.com",
  },
  {
    title: "Why Your Detection Engineering Is Failing",
    date: "January 2026",
    href: "https://securitysignal.substack.com",
  },
  {
    title: "2025 in Review: What the Security Industry Got Wrong",
    date: "December 2025",
    href: "https://securitysignal.substack.com",
  },
];

export default function SignalPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="px-6 pb-16 pt-32"
        style={{ background: "var(--signal-fade)" }}
      >
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-extrabold text-white md:text-5xl">
            Security Signal
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-cloud">
            Cybersecurity analysis you can actually use. Threat intel, AI
            security research, and practical takes &mdash; delivered to your
            inbox.
          </p>
        </div>
      </section>

      {/* What You Get */}
      <section className="bg-obsidian px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-3xl font-bold text-white">
            What You Get
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Threat Intel",
                desc: "The threats that actually matter, not the ones that get the most clicks. Real analysis of what's happening in the wild.",
              },
              {
                title: "AI Security",
                desc: "LLM vulnerabilities, prompt injection, model security — the attack surface nobody's watching closely enough.",
              },
              {
                title: "Practical Playbooks",
                desc: "Detection engineering, incident response, and security operations strategies you can implement today.",
              },
              {
                title: "Build Updates",
                desc: "What I'm building, breaking, and shipping in the SaaS Factory and across Breaker Labs.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-graphite bg-midnight p-6"
              >
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-steel">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-graphite bg-midnight p-6">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-6">
              <div>
                <span className="text-sm font-medium text-fog">Cadence:</span>
                <span className="ml-2 text-white">Weekly / Bi-weekly</span>
              </div>
              <div>
                <span className="text-sm font-medium text-fog">For:</span>
                <span className="ml-2 text-white">
                  Security practitioners, engineers, and leaders who want signal
                  over noise
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe */}
      <section className="bg-mist px-6 py-24">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-bold text-ink">
            Subscribe to Security Signal
          </h2>
          <p className="mt-4 text-graphite">
            Join security practitioners who want real analysis, not recycled
            headlines. Free. No spam. Unsubscribe anytime.
          </p>
          <div className="mt-8 flex justify-center">
            <NewsletterForm />
          </div>
        </div>
      </section>

      {/* Past Issues */}
      <section className="bg-obsidian px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-3xl font-bold text-white">Past Issues</h2>
          <div className="space-y-4">
            {pastIssues.map((issue) => (
              <a
                key={issue.title}
                href={issue.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-2xl border border-graphite bg-midnight p-6 transition-all duration-200 hover:border-signal/50 hover:scale-[1.01]"
              >
                <div>
                  <h3 className="font-semibold text-white">{issue.title}</h3>
                  <span className="text-sm text-fog">{issue.date}</span>
                </div>
                <svg
                  className="h-5 w-5 shrink-0 text-signal"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
