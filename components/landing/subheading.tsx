import { cn } from "@/lib/utils";
import React from "react";

export default function SubHeading({
  children,
  as = "p",
  variant = "medium",
  className,
}: {
  children: React.ReactNode;
  as?: "p" | "h3" | "h2" | "span" | "div";
  variant?: "small" | "medium" | "big";
  className?: string;
}) {
  const variants = {
    big: "text-base sm:text-lg text-[#92969F] leading-relaxed",
    medium: "text-sm sm:text-base text-[#92969F] leading-relaxed",
    small: "text-xs font-mono text-[#92969F] tracking-wide",
  };
  const Tag = as;

  return (
    <Tag
      className={cn(
        variants[variant],
        className,
      )}
    >
      {children}
    </Tag>
  );
}
