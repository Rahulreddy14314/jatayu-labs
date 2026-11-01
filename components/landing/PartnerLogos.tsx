'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface PartnerLogoProps {
  id: string;
  className?: string;
}

export function PartnerLogo({ id, className }: PartnerLogoProps) {
  return (
    <div
      className={cn(
        "h-28 w-full rounded-xl bg-[#06070A] border border-white/[0.07] flex items-center justify-center p-4 mb-5 relative overflow-hidden group-hover:border-[#668CFF]/40 transition-colors shadow-inner select-none",
        className
      )}
    >
      {/* 1. DraperU Logo */}
      {id === 'draperu' && (
        <div className="relative flex items-center justify-center w-full h-full">
          <svg viewBox="0 0 160 160" className="w-20 h-20 drop-shadow-[0_4px_12px_rgba(56,182,255,0.35)]" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Heraldic Shield Contour with Lightning Bolt Notch at Top-Left */}
            <path
              d="M80 18 C115 18 140 32 140 68 C140 108 108 138 80 148 C52 138 20 108 20 68 C20 48 30 35 48 26 L56 36 L44 48 L68 44 L48 68 C48 68 62 46 62 38 L54 30 C62 23 71 18 80 18 Z"
              fill="#38B6FF"
            />
            {/* Bold Classic Serif "D" Centered */}
            <text
              x="83"
              y="98"
              textAnchor="middle"
              fontFamily="Georgia, Cambria, 'Times New Roman', serif"
              fontSize="64"
              fontWeight="900"
              fill="#050608"
            >
              D
            </text>
          </svg>
        </div>
      )}

      {/* 2. T-Hub Logo */}
      {id === 'thub' && (
        <div className="relative flex items-center justify-center w-full h-full">
          <svg viewBox="0 0 220 90" className="w-44 h-16" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Left Lowercase "t" in Grey */}
            <path
              d="M24 24 V44 C24 50 28 54 34 54 H40"
              stroke="#7A8086"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 34 H36"
              stroke="#7A8086"
              strokeWidth="6"
              strokeLinecap="round"
            />

            {/* Connecting Dash "-" in Grey */}
            <path
              d="M48 45 H60"
              stroke="#7A8086"
              strokeWidth="6"
              strokeLinecap="round"
            />

            {/* Top Semi-Circle Arc in T-Hub Orange-Red (#F04E23) */}
            <path
              d="M66 45 C66 22 84 6 112 6 C140 6 158 22 158 45"
              stroke="#F04E23"
              strokeWidth="6"
              strokeLinecap="round"
            />

            {/* Bottom Semi-Circle Arc in Grey (#7A8086) */}
            <path
              d="M66 45 C66 68 84 84 112 84 C140 84 158 68 158 45"
              stroke="#7A8086"
              strokeWidth="6"
              strokeLinecap="round"
            />

            {/* Connected "hub" Lettering in Orange-Red (#F04E23) */}
            {/* "h" */}
            <path
              d="M84 26 V62 M84 44 C84 37 91 33 97 33 C103 33 106 37 106 43 V62"
              stroke="#F04E23"
              strokeWidth="5.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* "u" */}
            <path
              d="M117 35 V53 C117 59 122 62 127 62 C132 62 137 59 137 53 V35"
              stroke="#F04E23"
              strokeWidth="5.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* "b" */}
            <path
              d="M148 26 V62 M148 44 C152 38 160 38 165 43 C170 48 170 56 165 60 C160 64 152 64 148 58"
              stroke="#F04E23"
              strokeWidth="5.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}

      {/* 3. Google for Startups Logo */}
      {id === 'google' && (
        <div className="relative flex flex-col items-center justify-center w-full h-full text-center">
          {/* Authentic 4-Color "Google" Wordmark */}
          <div className="flex items-center text-2xl sm:text-3xl font-heading font-medium tracking-tight">
            <span style={{ color: '#4285F4' }}>G</span>
            <span style={{ color: '#EA4335' }}>o</span>
            <span style={{ color: '#FBBC05' }}>o</span>
            <span style={{ color: '#4285F4' }}>g</span>
            <span style={{ color: '#34A853' }}>l</span>
            <span style={{ color: '#EA4335' }}>e</span>
          </div>
          {/* Clean Geometric "for Startups" Subtext */}
          <div className="text-xs sm:text-sm font-sans font-normal tracking-wide text-[#9AA0A6] mt-0.5">
            for Startups
          </div>
        </div>
      )}

      {/* 4. OpenAI for Startups Logo */}
      {id === 'openai' && (
        <div className="relative w-full h-full rounded-lg overflow-hidden flex flex-col items-center justify-center p-3">
          {/* Atmospheric Aurora Gradient Mesh Backdrop */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/25 via-rose-500/20 to-amber-300/20 opacity-80" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#06070A_95%)]" />

          {/* Centered OpenAI Knot + Wordmark */}
          <div className="relative z-10 flex items-center gap-2">
            {/* 6-Loop Interlocking Blossom Knot */}
            <svg viewBox="0 0 100 100" className="w-7 h-7 text-white drop-shadow-md" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M50 15 C56 15 62 18 66 24 L78 45 C82 51 82 59 78 65 L66 86 C62 92 56 95 50 95" />
              <path d="M78 45 C82 51 82 59 78 65 L66 86 C62 92 56 95 50 95 L25 80 C19 76 16 70 16 63" />
              <path d="M66 86 C62 92 56 95 50 95 L25 80 C19 76 16 70 16 63 L16 37 C16 30 19 24 25 20" />
              <path d="M25 80 C19 76 16 70 16 63 L16 37 C16 30 19 24 25 20 L50 5 C56 5 62 8 66 14" />
              <path d="M16 37 C16 30 19 24 25 20 L50 5 C56 5 62 8 66 14 L78 35 C82 41 82 49 78 55" />
              <path d="M50 5 C56 5 62 8 66 14 L78 35 C82 41 82 49 78 55 L78 65" />
              <circle cx="50" cy="50" r="10" strokeWidth="5" />
            </svg>

            <span className="text-sm sm:text-base font-sans font-semibold text-white tracking-tight flex items-center gap-1.5">
              <span>OpenAI</span>
              <span className="text-[#FF4A6E] text-xs">♥</span>
              <span>Startups</span>
            </span>
          </div>

          <div className="relative z-10 text-[9px] font-mono text-white/70 mt-1">
            up to $100K in compute credits
          </div>
        </div>
      )}

      {/* 5. Claude for Startups Logo */}
      {id === 'claude' && (
        <div className="relative w-full h-full bg-[#111827] rounded-lg border border-white/[0.05] p-3 flex items-center justify-center gap-3.5">
          {/* Anthropic's 12-Ray Asymmetric Terracotta Starburst */}
          <div className="relative w-9 h-9 shrink-0 flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full" fill="#D97757">
              {/* 12 Radiant Rays with Authentic Tapered Geometry */}
              <rect x="46" y="2" width="8" height="42" rx="4" transform="rotate(0 50 50)" />
              <rect x="46" y="2" width="8" height="42" rx="4" transform="rotate(30 50 50)" />
              <rect x="46" y="2" width="8" height="42" rx="4" transform="rotate(60 50 50)" />
              <rect x="46" y="2" width="8" height="42" rx="4" transform="rotate(90 50 50)" />
              <rect x="46" y="2" width="8" height="42" rx="4" transform="rotate(120 50 50)" />
              <rect x="46" y="2" width="8" height="42" rx="4" transform="rotate(150 50 50)" />
              <rect x="46" y="2" width="8" height="42" rx="4" transform="rotate(180 50 50)" />
              <rect x="46" y="2" width="8" height="42" rx="4" transform="rotate(210 50 50)" />
              <rect x="46" y="2" width="8" height="42" rx="4" transform="rotate(240 50 50)" />
              <rect x="46" y="2" width="8" height="42" rx="4" transform="rotate(270 50 50)" />
              <rect x="46" y="2" width="8" height="42" rx="4" transform="rotate(300 50 50)" />
              <rect x="46" y="2" width="8" height="42" rx="4" transform="rotate(330 50 50)" />
            </svg>
          </div>

          {/* Typography Lockup */}
          <div className="flex flex-col">
            <div className="text-base sm:text-lg font-heading font-bold text-white tracking-tight leading-tight">
              Claude
            </div>
            <div className="text-xs font-sans text-[#94A3B8] font-normal leading-tight">
              for Startups
            </div>
            {/* Terracotta Horizontal Accent Rule */}
            <div className="h-[2px] w-14 bg-[#D97757] rounded-full mt-1.5 opacity-90" />
          </div>
        </div>
      )}

      {/* 6. E-Cell IIT Bombay Logo */}
      {id === 'ecell' && (
        <div className="relative flex flex-col items-center justify-center w-full h-full text-center">
          {/* Stacked Block "E" Emblem */}
          <svg viewBox="0 0 100 64" className="w-10 h-7 text-[#F4F4F0] mb-1.5" fill="currentColor">
            {/* Top Floating Bar */}
            <rect x="15" y="4" width="70" height="10" rx="2" />
            {/* C-Shaped Main Block (Vertical spine + top/bottom arms) */}
            <path d="M15 20 H85 V30 H32 V36 H85 V46 H15 Z" />
            {/* Bottom Bar */}
            <rect x="15" y="52" width="70" height="10" rx="2" />
          </svg>

          {/* Lowercase "e-cell" */}
          <div className="text-base font-heading font-bold text-[#F4F4F0] tracking-tight leading-none">
            e-cell
          </div>

          {/* Wide-Tracked "IIT BOMBAY" */}
          <div className="text-[8px] font-mono tracking-[0.25em] text-[#92969F] uppercase mt-1">
            IIT BOMBAY
          </div>
        </div>
      )}
    </div>
  );
}
