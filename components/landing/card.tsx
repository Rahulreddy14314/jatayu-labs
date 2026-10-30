'use client';

import { cn } from "@/lib/utils";
import React, { useRef } from "react";

interface CardProps {
  className?: string;
  children: React.ReactNode;
  auraColor?: string;
}

export default function Card({
  className,
  children,
  auraColor = "rgba(102, 140, 255, 0.4)",
}: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      style={{ "--card-aura": auraColor } as React.CSSProperties}
      className={cn(
        "metallic-border ambient-beam cryo-glass rounded-2xl p-6 transition-all duration-300 relative group overflow-hidden",
        className,
      )}
    >
      {/* Subtle interior radar circle */}
      <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full border border-dashed border-[#292C33]/50 pointer-events-none group-hover:border-[#668CFF]/20 transition-colors" />

      {/* Children content */}
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </div>
  );
}
