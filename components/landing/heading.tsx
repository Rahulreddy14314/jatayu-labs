import { cn } from "@/lib/utils";
import React from "react";

export default function Heading({
  className,
  children,
  as = "h2",
  variant = "medium",
}: {
  className?: string;
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3";
  variant?: "big" | "medium" | "small" | "none";
}) {
  const Tag = as;
  const variants = {
    big: "text-4xl sm:text-6xl lg:text-[76px] font-normal leading-[0.95] tracking-tight text-[#F4F4F0]",
    medium: "text-2xl sm:text-3xl lg:text-4xl font-normal leading-tight tracking-tight text-[#F4F4F0]",
    small: "text-lg sm:text-xl font-normal text-[#F4F4F0]",
    none: "",
  };
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
