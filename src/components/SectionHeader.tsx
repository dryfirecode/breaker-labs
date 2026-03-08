type SectionHeaderProps = {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  labelColor?: string;
};

export default function SectionHeader({
  label,
  title,
  description,
  align = "center",
  labelColor = "text-signal",
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}>
      {label && (
        <span
          className={`text-[13px] font-medium uppercase tracking-widest ${labelColor}`}
        >
          {label}
        </span>
      )}
      <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-steel mx-auto text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
