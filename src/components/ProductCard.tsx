import Link from "next/link";

type ProductCardProps = {
  name: string;
  description: string;
  status: "Shipping" | "Building" | "Idea";
  tags: string[];
  href?: string;
};

const statusStyles = {
  Shipping: "bg-signal/15 text-signal",
  Building: "bg-forge/15 text-forge",
  Idea: "bg-fog/15 text-fog",
};

const hoverBorders = {
  Shipping: "hover:border-signal/50",
  Building: "hover:border-forge/50",
  Idea: "hover:border-fog/50",
};

export default function ProductCard({
  name,
  description,
  status,
  tags,
  href,
}: ProductCardProps) {
  const content = (
    <div
      className={`rounded-2xl border border-graphite bg-midnight p-6 transition-all duration-200 hover:scale-[1.02] hover:shadow-lg ${hoverBorders[status]}`}
    >
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-xl font-semibold text-white">{name}</h3>
        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${statusStyles[status]}`}
        >
          {status}
        </span>
      </div>
      <p className="mb-4 text-steel">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-obsidian px-3 py-1 text-xs text-fog"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </Link>
    );
  }

  return content;
}
