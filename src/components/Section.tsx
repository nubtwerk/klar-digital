import { type HTMLAttributes, type ReactNode } from "react";

type SectionVariant = "white" | "gray";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  variant?: SectionVariant;
  children: ReactNode;
  className?: string;
  id?: string;
}

const variantStyles: Record<SectionVariant, string> = {
  white: "bg-background",
  gray: "bg-surface",
};

export default function Section({
  variant = "white",
  children,
  className = "",
  id,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={[
        "w-full py-12 md:py-16",
        variantStyles[variant],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </section>
  );
}
