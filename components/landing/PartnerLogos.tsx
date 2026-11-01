'use client';

import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface PartnerLogoProps {
  id: string;
  className?: string;
}

const partnerLogosData: Record<string, { src: string; alt: string }> = {
  draperu: { src: '/images/partners/draperu.png', alt: 'DraperU Logo' },
  thub: { src: '/images/partners/thub.png', alt: 'T-Hub Logo' },
  google: { src: '/images/partners/google.png', alt: 'Google for Startups Logo' },
  openai: { src: '/images/partners/openai.png', alt: 'OpenAI for Startups Logo' },
  claude: { src: '/images/partners/claude.png', alt: 'Claude for Startups Logo' },
  ecell: { src: '/images/partners/ecell.png', alt: 'E-Cell IIT Bombay Logo' },
};

export function PartnerLogo({ id, className }: PartnerLogoProps) {
  const logo = partnerLogosData[id] || { src: '/images/partners/draperu.png', alt: 'Partner Logo' };

  return (
    <div
      className={cn(
        "h-28 w-full rounded-xl bg-[#06070A] border border-white/[0.07] flex items-center justify-center p-4 mb-5 relative overflow-hidden group-hover:border-[#668CFF]/40 transition-colors shadow-inner select-none",
        className
      )}
    >
      <div className="relative h-16 w-full flex items-center justify-center">
        <Image
          src={logo.src}
          alt={logo.alt}
          fill
          className="object-contain filter brightness-105 contrast-105"
          sizes="(max-width: 768px) 100vw, 300px"
          priority={id === 'draperu' || id === 'thub'}
        />
      </div>
    </div>
  );
}

export default PartnerLogo;
