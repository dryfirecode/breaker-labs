import Link from "next/link";

type ButtonProps = {
  variant?: "primary" | "ghost";
  href?: string;
  type?: "button" | "submit";
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
};

export default function Button({
  variant = "primary",
  href,
  type = "button",
  children,
  className = "",
  disabled,
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold text-[15px] tracking-wide rounded-[10px] px-8 py-3.5 transition-all duration-200 cursor-pointer";

  const variants = {
    primary:
      "bg-forge text-white hover:bg-orange-600 hover:shadow-lg hover:shadow-forge/20",
    ghost:
      "border-2 border-signal text-signal hover:bg-signal hover:text-white",
  };

  const cls = `${base} ${variants[variant]} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={cls} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
