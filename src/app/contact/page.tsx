import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
};

const socials = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/yourprofile",
    description: "Professional network",
  },
  {
    label: "GitHub",
    href: "https://github.com/dryfirecode",
    description: "Code and projects",
  },
  {
    label: "Substack",
    href: "https://securitysignal.substack.com",
    description: "Security Signal newsletter",
  },
  {
    label: "X / Twitter",
    href: "https://x.com",
    description: "Short-form takes",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-midnight px-6 pb-16 pt-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-extrabold text-white md:text-5xl">
            Get in Touch
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-steel">
            Have a question, want to collaborate, or just want to say hey?
            Drop a message.
          </p>
        </div>
      </section>

      {/* Contact Split */}
      <section className="bg-obsidian px-6 py-24">
        <div className="mx-auto grid max-w-4xl gap-12 md:grid-cols-2">
          {/* Form */}
          <div>
            <h2 className="mb-6 text-2xl font-bold text-white">
              Send a Message
            </h2>
            <ContactForm />
          </div>

          {/* Social Links */}
          <div>
            <h2 className="mb-6 text-2xl font-bold text-white">
              Find Me Elsewhere
            </h2>
            <p className="mb-8 text-steel">
              I&apos;m most active on LinkedIn and Substack. For code and
              projects, check GitHub.
            </p>
            <div className="space-y-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-graphite bg-midnight p-5 transition-all duration-200 hover:border-signal/50 hover:scale-[1.01]"
                >
                  <div>
                    <h3 className="font-semibold text-white">{social.label}</h3>
                    <p className="text-sm text-steel">{social.description}</p>
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
        </div>
      </section>
    </>
  );
}
