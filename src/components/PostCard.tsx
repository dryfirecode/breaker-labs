import Link from "next/link";

type PostCardProps = {
  title: string;
  date: string;
  excerpt: string;
  category: "Build Log" | "Security" | "AI" | "Product Update";
  href: string;
};

const categoryStyles = {
  "Build Log": "bg-forge/15 text-forge",
  Security: "bg-signal/15 text-signal",
  AI: "bg-vault/15 text-vault",
  "Product Update": "bg-pulse/15 text-pulse",
};

export default function PostCard({
  title,
  date,
  excerpt,
  category,
  href,
}: PostCardProps) {
  const isExternal = href.startsWith("http");

  return (
    <Link
      href={href}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <div className="rounded-2xl border border-graphite bg-midnight p-6 transition-all duration-200 hover:scale-[1.02] hover:border-signal/50 hover:shadow-lg">
        <div className="mb-3 flex items-center gap-3">
          <span
            className={`rounded-full px-3 py-1 text-xs font-medium ${categoryStyles[category]}`}
          >
            {category}
          </span>
          <span className="text-[13px] text-fog">{date}</span>
        </div>
        <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
        <p className="text-steel">{excerpt}</p>
      </div>
    </Link>
  );
}
