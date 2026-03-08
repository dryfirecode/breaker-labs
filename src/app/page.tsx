import Button from "@/components/Button";
import SectionHeader from "@/components/SectionHeader";
import NewsletterForm from "@/components/NewsletterForm";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient relative flex min-h-screen items-center justify-center px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
            Break it down.{" "}
            <span className="text-signal">Build it up.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-cloud md:text-xl">
            Breaker Labs is where cybersecurity research, AI security, and SaaS
            products get built. No theory. Real work, shipped.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/products">See What&apos;s Shipping</Button>
            <Button href="/signal" variant="ghost">
              Read Security Signal
            </Button>
          </div>
        </div>

        {/* Subtle geometric accent */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-signal/5 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-forge/5 blur-3xl" />
        </div>
      </section>

      {/* Three Pillars */}
      <section className="bg-obsidian px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            label="What happens here"
            title="Three pillars. One workshop."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {/* Security Signal */}
            <Link href="/signal">
              <div className="group rounded-2xl border border-graphite bg-midnight p-8 transition-all duration-200 hover:scale-[1.02] hover:border-signal/50">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-signal/15">
                  <svg className="h-6 w-6 text-signal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">
                  Security Signal
                </h3>
                <p className="text-steel">
                  Cybersecurity takes you can actually use. Threat intel, AI
                  security, and practical playbooks delivered to your inbox.
                </p>
                <span className="mt-4 inline-block text-sm font-medium text-signal group-hover:underline">
                  Subscribe &rarr;
                </span>
              </div>
            </Link>

            {/* SaaS Factory */}
            <Link href="/products">
              <div className="group rounded-2xl border border-graphite bg-midnight p-8 transition-all duration-200 hover:scale-[1.02] hover:border-forge/50">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-forge/15">
                  <svg className="h-6 w-6 text-forge" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">
                  SaaS Factory
                </h3>
                <p className="text-steel">
                  Real products getting built and shipped. Employee retention
                  tools, AI knowledge systems, and more in the pipeline.
                </p>
                <span className="mt-4 inline-block text-sm font-medium text-forge group-hover:underline">
                  View Products &rarr;
                </span>
              </div>
            </Link>

            {/* About JD */}
            <Link href="/about">
              <div className="group rounded-2xl border border-graphite bg-midnight p-8 transition-all duration-200 hover:scale-[1.02] hover:border-vault/50">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-vault/15">
                  <svg className="h-6 w-6 text-vault" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">
                  About JD
                </h3>
                <p className="text-steel">
                  Cybersecurity practitioner, AI security researcher, and
                  builder. From coal country to cutting code.
                </p>
                <span className="mt-4 inline-block text-sm font-medium text-vault group-hover:underline">
                  Learn More &rarr;
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-mist px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-ink md:text-4xl">
            Get the Signal
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-graphite">
            Real cybersecurity analysis, AI security insights, and build updates.
            No spam. No fluff. Just signal.
          </p>
          <div className="mt-8 flex justify-center">
            <NewsletterForm />
          </div>
        </div>
      </section>
    </>
  );
}
