import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Products",
};

const products = [
  {
    name: "TurnOverflow",
    description:
      "Scheduling and coordination for short-term rental cleaners. Never miss a turnover again.",
    status: "Building" as const,
    tags: ["Next.js", "Supabase", "Scheduling", "PropTech"],
    href: "https://www.turnoverflow.app",
  },
  {
    name: "Take The Points",
    description:
      "Sports game outcome predictions powered by data. Smarter picks, backed by the numbers.",
    status: "Building" as const,
    tags: ["Next.js", "Supabase", "AI/ML", "Sports"],
    href: "https://www.takethepoints.ai",
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-midnight px-6 pb-16 pt-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-extrabold text-white md:text-5xl">
            What&apos;s Shipping
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-steel">
            Real products being built and shipped. No vaporware. If
            it&apos;s here, it&apos;s getting worked on.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="bg-obsidian px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6 md:grid-cols-2">
            {products.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-midnight px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-white">
            Want to follow the build?
          </h2>
          <p className="mt-3 text-steel">
            I write about the process &mdash; what ships, what breaks, and what
            I learn along the way.
          </p>
          <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/blog">Read the Build Log</Button>
            <Button href="/signal" variant="ghost">
              Get Security Signal
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
