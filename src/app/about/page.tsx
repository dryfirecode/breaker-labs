import type { Metadata } from "next";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "About",
};

const experience = [
  {
    company: "Breaker Labs LLC",
    role: "Owner & CEO",
    period: "2026 – Present",
    highlights: [
      "Building a focused portfolio of micro-SaaS products",
      "Lean validated ideas, AI-assisted development, fast iteration",
      "Shipping real products that solve real operational problems",
    ],
  },
  {
    company: "Arctic Wolf",
    role: "Principal Sales Engineer",
    period: "2018 – 2026",
    highlights: [
      "Technical advisor across the full sales cycle for organizations of all sizes",
      "Translating complex security concepts for technical and executive audiences",
      "Speaking at cybersecurity conferences and creating educational content",
    ],
  },
  {
    company: "Sandvine",
    role: "Senior Sales Engineer",
    period: "2012 – 2018",
    highlights: [
      "Designed and presented technical solutions for network visibility and policy control",
      "Supported Tier 1 accounts across the Eastern US",
      "Partnered with sales teams to navigate complex enterprise deals",
    ],
  },
  {
    company: "DigitalBridge & Coretel",
    role: "Network Engineer",
    period: "2007 – 2012",
    highlights: [
      "Managed network infrastructure and operations",
      "Built the hands-on engineering foundation for a career in cybersecurity",
    ],
  },
];

const skills = [
  {
    category: "Cybersecurity",
    items: [
      "Threat Detection & Response",
      "Security Architecture",
      "Managed Detection & Response",
      "Network Security",
      "Cloud Security",
      "SIEM/SOAR",
    ],
  },
  {
    category: "AI & Speaking",
    items: [
      "AI Security",
      "LLM Security",
      "Prompt Injection Defense",
      "Public Speaking",
      "Conference Presentations",
      "Content Creation",
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
              I spent nearly 8 years as a Principal Sales Engineer at Arctic
              Wolf, helping organizations understand and defend against
              real-world threats. Before that, over a decade as a network
              engineer &mdash; so I know what it looks like when things break
              and what it takes to keep them running. Now I&apos;m building
              SaaS products, writing Security Signal (my cybersecurity
              newsletter), speaking at conferences like FutureCon, and
              making AI security concepts click for people who aren&apos;t
              neck-deep in threat intel every day.
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
          <Button href="https://linkedin.com/in/johnwdavies" variant="ghost">
            Connect on LinkedIn
          </Button>
        </div>
      </section>
    </>
  );
}
