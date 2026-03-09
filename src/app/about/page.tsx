import type { Metadata } from "next";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "About",
};

const experience = [
  {
    company: "Arctic Wolf",
    role: "Principal Security Engineer",
    period: "Current",
    highlights: [
      "Leading security engineering initiatives across detection and response",
      "Building AI-driven security tooling and automation",
      "Mentoring engineering teams on secure development practices",
    ],
  },
  {
    company: "Previous Roles",
    role: "Security Engineering & Leadership",
    period: "10+ years",
    highlights: [
      "Built and led security operations teams",
      "Designed threat detection and incident response programs",
      "Developed security tooling and automation at scale",
    ],
  },
];

const skills = [
  {
    category: "Cybersecurity",
    items: [
      "Threat Detection & Response",
      "Security Engineering",
      "Incident Response",
      "Vulnerability Management",
      "Cloud Security",
      "SIEM/SOAR",
    ],
  },
  {
    category: "AI & ML",
    items: [
      "AI Security",
      "LLM Security",
      "Prompt Injection Defense",
      "ML Ops",
      "AI-powered Tooling",
    ],
  },
  {
    category: "Development",
    items: [
      "TypeScript / JavaScript",
      "Python",
      "React / Next.js",
      "Node.js",
      "PostgreSQL",
      "AWS / Vercel / Supabase",
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-midnight px-6 pb-16 pt-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-extrabold text-white md:text-5xl">
            About Breaker Labs
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-steel">
            The workshop where security research meets real products.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-obsidian px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-3xl font-bold text-white">The Story</h2>
          <div className="space-y-6 text-lg leading-relaxed text-cloud">
            <p>
              I grew up in coal country &mdash; Northeastern Pennsylvania, where
              massive coal breakers still stand like industrial monuments. These
              structures did one thing: take raw material, break it down, process
              it, and turn it into something useful.
            </p>
            <p>
              That&apos;s what Breaker Labs is. I take complex problems in
              cybersecurity and AI security, break them down to the fundamentals,
              and build something real from the pieces. No hand-waving. No
              theory for theory&apos;s sake. Real analysis, real products, real
              results.
            </p>
            <p>
              By day, I&apos;m a Principal Security Engineer at Arctic Wolf,
              working on detection and response at scale. Outside of that,
              I&apos;m building SaaS products, writing Security Signal (my
              cybersecurity newsletter), and researching AI security threats
              that most people aren&apos;t paying attention to yet.
            </p>
            <p>
              Breaker Labs is the umbrella for all of it &mdash; a workshop, not
              a showroom. Everything here is either shipped, being built, or
              being broken down so it can be rebuilt better.
            </p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="bg-midnight px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-12 text-3xl font-bold text-white">Experience</h2>
          <div className="space-y-8">
            {experience.map((exp) => (
              <div
                key={exp.company}
                className="rounded-2xl border border-graphite bg-obsidian p-6"
              >
                <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {exp.role}
                    </h3>
                    <p className="text-signal">{exp.company}</p>
                  </div>
                  <span className="text-sm text-fog">{exp.period}</span>
                </div>
                <ul className="space-y-2">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-steel">
                      <span className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="bg-obsidian px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-12 text-3xl font-bold text-white">Skills</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {skills.map((group) => (
              <div
                key={group.category}
                className="rounded-2xl border border-graphite bg-midnight p-6"
              >
                <h3 className="mb-4 text-lg font-semibold text-white">
                  {group.category}
                </h3>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-steel">
                      <span className="block h-1 w-1 rounded-full bg-signal" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-midnight px-6 py-16">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center sm:flex-row sm:justify-center">
          <Button href="/contact">Get in Touch</Button>
          <Button href="https://linkedin.com/in/yourprofile" variant="ghost">
            Connect on LinkedIn
          </Button>
        </div>
      </section>
    </>
  );
}
