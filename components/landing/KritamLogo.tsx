'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface KritamLogoProps {
  className?: string;
  iconClassName?: string;
  showWordmark?: boolean;
  layout?: 'horizontal' | 'vertical';
  useRawImage?: boolean;
}

export function KritamEmblem({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0 select-none", className)}
    >
      {/* 1. Outer Orbital Ring with varying stroke weight */}
      <path
        d="M50 12 A38 38 0 1 0 50 88"
        stroke="#F4F4F0"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M50 12 A38 38 0 0 1 82 70"
        stroke="#F4F4F0"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* 2. Four Planetary / Orbital Nodes */}
      {/* Top Pole Node */}
      <circle cx="50" cy="12" r="4" fill="#F4F4F0" />
      {/* Bottom Pole Node */}
      <circle cx="50" cy="88" r="4" fill="#F4F4F0" />
      {/* Left Orbital Node (~9 o'clock) */}
      <circle cx="16" cy="61" r="3.2" fill="#F4F4F0" />
      {/* Upper-Right Orbital Node (~2 o'clock) */}
      <circle cx="80" cy="28" r="2.8" fill="#668CFF" />

      {/* 3. Polar Meridian Axis Line */}
      <line x1="50" y1="5" x2="50" y2="24" stroke="#F4F4F0" strokeWidth="1.6" />
      <line x1="50" y1="60" x2="50" y2="95" stroke="#F4F4F0" strokeWidth="1.6" />

      {/* 4. Sharp 4-Point Compass Star (✦) Above Center on the Polar Axis */}
      <path
        d="M50 19 C51.5 27 52 28.5 60 30 C52 31.5 51.5 33 50 41 C48.5 33 48 31.5 40 30 C48 28.5 48.5 27 50 19 Z"
        fill="#D4FF00"
      />

      {/* 5. Central Geometric Futuristic 'K' Monogram */}
      {/* Beveled Vertical Left Stem */}
      <path
        d="M37 32 L44 38 L44 57 L37 66 Z"
        fill="#F4F4F0"
      />
      {/* Dynamic Sweeping Orbital Trajectory Blade (Lower-Left to Upper-Right) */}
      <path
        d="M34 68 Q54 36 92 28 Q62 39 34 68 Z"
        fill="#F4F4F0"
      />
      {/* Tapered Diagonal Lower-Right Blade */}
      <path
        d="M51 49 L87 81 L57 57 Z"
        fill="#F4F4F0"
      />
    </svg>
  );
}

export function KritamLogo({
  className,
  iconClassName = "w-7 h-7",
  showWordmark = true,
  layout = 'horizontal',
  useRawImage = false,
}: KritamLogoProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 select-none",
        layout === 'vertical' && "flex-col text-center gap-2",
        className
      )}
    >
      {/* Emblem */}
      {useRawImage ? (
        <img
          src="/images/kritam-logo.png"
          alt="Kritam Labs Logo"
          className={cn("invert mix-blend-screen object-contain", iconClassName)}
        />
      ) : (
        <KritamEmblem className={iconClassName} />
      )}

      {/* Wordmark */}
      {showWordmark && (
        <div className={cn("flex flex-col", layout === 'vertical' ? "items-center" : "items-start")}>
          <div className="flex items-center tracking-[0.24em] font-heading font-bold text-[#F4F4F0] text-sm sm:text-base leading-none">
            <span>KRIT</span>
            <span className="text-[#668CFF]">Λ</span>
            <span>M</span>
            <span className="ml-2 font-normal text-[#92969F] text-xs tracking-[0.2em]">LABS</span>
          </div>
          {layout === 'vertical' && (
            <div className="flex items-center justify-center gap-2 mt-1.5 w-full">
              <span className="h-[1px] w-8 bg-gradient-to-r from-transparent to-[#292C33]" />
              <span className="text-[9px] font-mono tracking-[0.28em] text-[#92969F] uppercase">
                FRONTIER TECH
              </span>
              <span className="h-[1px] w-8 bg-gradient-to-l from-transparent to-[#292C33]" />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default KritamLogo;
