'use client';

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import Container from './container';
import { PartnerLogo } from './PartnerLogos';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface EcosystemPartner {
  id: string;
  name: string;
  highlightTag: string;
  description: string;
}

const PARTNERS: EcosystemPartner[] = [
  {
    id: 'draperu',
    name: 'DraperU',
    highlightTag: 'VENTURE FELLOWSHIP',
    description: 'Silicon Valley frontier tech venture acceleration & global ecosystem fellowship.',
  },
  {
    id: 'thub',
    name: 'T-Hub',
    highlightTag: 'INNOVATION ECOSYSTEM',
    description: 'Premier deep-tech incubator partnership and hardware prototyping lab ecosystem.',
  },
  {
    id: 'google',
    name: 'Google for Startups',
    highlightTag: 'AI INFRASTRUCTURE',
    description: 'Enterprise AI computing clusters, cloud foundation, and Gemini developer support.',
  },
  {
    id: 'openai',
    name: 'OpenAI for Startups',
    highlightTag: 'FRONTIER MODELS',
    description: 'Advanced reasoning models, multimodal embeddings, and API infrastructure.',
  },
  {
    id: 'claude',
    name: 'Claude for Startups',
    highlightTag: 'ANTHROPIC TRACK',
    description: 'Constitutional AI models, extended context windows, and safety benchmarks.',
  },
  {
    id: 'ecell',
    name: 'E-Cell IIT Bombay',
    highlightTag: 'VENTURE MENTORSHIP',
    description: 'Academic venture mentorship, premier faculty advisory, and research network.',
  },
];

export default function EcosystemStrip() {
  const shouldReduceMotion = useReducedMotion();

  // Duplicate items 3 times for a continuous, seamless infinite loop
  const marqueePartners = [...PARTNERS, ...PARTNERS, ...PARTNERS];

  return (
    <section className="pt-12 pb-20 border-b border-[#292C33] bg-[#050608] relative overflow-hidden">
      {/* Background Ambient Cobalt Radial Light Dome */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[360px] bg-[#2554FF]/[0.05] blur-[160px] pointer-events-none rounded-full" />

      {/* Grid Hairlines Floor */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #668CFF 1px, transparent 1px), linear-gradient(to bottom, #668CFF 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <Container className="relative z-10 mb-10">
        {/* Section Eyebrow & Headline */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00] shadow-[0_0_6px_#D4FF00]" />
            <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#92969F]">
              02 // ECOSYSTEM, FELLOWSHIP &amp; ACCELERATOR NETWORK
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-normal text-[#F4F4F0] tracking-tight leading-[1.05] m-0 font-heading">
            Supported, mentored, and accelerated across{' '}
            <em className="text-[#92969F] font-normal italic font-serif">global frontier ecosystems.</em>
          </h2>

          <p className="mt-3.5 text-sm sm:text-base text-[#92969F] leading-relaxed m-0">
            Jatayu Labs partners with leading technological programs, venture fellowships, and institutional incubators to stress-test our hardware, AI, and biocomputing architectures.
          </p>
        </div>
      </Container>

      {/* FULL-WIDTH SLOW-MOVING FLOATING PARTNER MARQUEE */}
      <div
        className="relative w-full overflow-hidden py-4 select-none"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
        }}
      >
        <div
          className={cn(
            "flex w-max gap-6 px-6",
            shouldReduceMotion ? "" : "animate-infinite-glide"
          )}
        >
          {marqueePartners.map((partner, index) => {
            return (
              <motion.div
                key={`${partner.id}-${index}`}
                animate={shouldReduceMotion ? {} : { y: [0, -7, 0] }}
                transition={{
                  duration: 4.5 + (index % 3) * 0.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: (index % 6) * 0.4,
                }}
                className="w-[310px] sm:w-[340px] shrink-0 optical-glass optical-glass-interactive p-6 rounded-2xl relative border border-[#292C33] hover:border-[#668CFF]/60 transition-colors shadow-xl group flex flex-col justify-between"
              >
                <div>
                  {/* Top Row: Category Tag on Left + Crosshair on Right */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4FF00] font-semibold">
                      {partner.highlightTag}
                    </span>
                    <span className="text-[10px] font-mono text-[#92969F]/40 group-hover:text-[#D4FF00] transition-colors">
                      +
                    </span>
                  </div>

                  {/* Logo Showcase Window */}
                  <PartnerLogo id={partner.id} />

                  {/* Partner Title & Divider */}
                  <h3 className="text-xl font-heading font-medium text-[#F4F4F0] group-hover:text-white transition-colors m-0 mb-3">
                    {partner.name}
                  </h3>
                  <div className="h-px w-full bg-[#292C33] mb-3 group-hover:bg-[#668CFF]/30 transition-colors" />

                  {/* Description */}
                  <p className="text-xs text-[#92969F] leading-relaxed line-clamp-2 m-0">
                    {partner.description}
                  </p>
                </div>

                {/* Bottom Row: Active Status Indicator */}
                <div className="pt-4 mt-5 border-t border-[#292C33]/60 flex items-center justify-between text-[10px] font-mono text-[#92969F]">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00] animate-pulse shadow-[0_0_6px_#D4FF00]" />
                    <span>ACTIVE TRACK</span>
                  </span>
                  <span className="text-[#668CFF] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-0.5">
                    <span>Ecosystem</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
