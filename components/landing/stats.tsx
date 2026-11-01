'use client';

import Link from 'next/link';
import { ArrowUpRight, Compass, Dna, Brain, Sparkles } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import Container from './container';
import { cn } from "@/lib/utils";
import type { MaturityStage } from '@/lib/projects';

interface InitiativeItem {
  id: string;
  name: string;
  domain: string;
  role: string;
  stage: MaturityStage;
  slug: string;
  auraColor: string;
  icon: React.ElementType;
}

const initiatives: InitiativeItem[] = [
  {
    id: 'sense',
    name: 'Project SENSE',
    domain: 'Wearable Interface',
    role: 'Wearable haptic belt',
    stage: 'Prototype direction',
    slug: '/projects/sense',
    auraColor: '#668CFF',
    icon: Compass,
  },
  {
    id: 'bio-bus',
    name: 'Bio-Bus (OI)',
    domain: 'Biological Computing',
    role: 'Hardware wetware interface',
    stage: 'Research phase',
    slug: '/projects/bio-bus',
    auraColor: '#2554FF',
    icon: Dna,
  },
  {
    id: 'uploaded',
    name: 'Uploaded Intelligence',
    domain: 'Cognitive Technology',
    role: 'Personal memory representations',
    stage: 'Concept exploration',
    slug: '/projects/uploaded-intelligence',
    auraColor: '#668CFF',
    icon: Brain,
  },
  {
    id: 'skill',
    name: 'SkillSynth',
    domain: 'Employability AI',
    role: 'AI conversational engine',
    stage: 'Product development',
    slug: '/projects/skillsynth',
    auraColor: '#2554FF',
    icon: Sparkles,
  },
];

export default function Stats() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="border-b border-[#292C33] bg-[#050608] py-16">
      <Container>
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono">
          <span className="uppercase tracking-[0.2em] text-[#668CFF] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00] shadow-[0_0_6px_#D4FF00]" />
            FRONTIER MATURITY &amp; ARCHITECTURE MATRIX
          </span>
          <span className="text-[#92969F]">TRANSPARENT TAXONOMY // ZERO FAKE METRICS</span>
        </div>

        {/* 4-Column Optical-Glass Status Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {initiatives.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.id}
                href={item.slug}
                className="group block optical-glass optical-glass-interactive rounded-xl p-6 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4FF00]"
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-9 h-9 rounded-lg bg-[#090A0C] border border-[#292C33] flex items-center justify-center transition-colors group-hover:border-[currentColor]"
                    style={{ color: item.auraColor }}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <ArrowUpRight
                    className="w-4 h-4 text-[#92969F] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    style={{ color: item.auraColor }}
                  />
                </div>

                <div className="space-y-1">
                  <div className="text-[10px] font-mono uppercase text-[#92969F] tracking-wider">
                    {item.domain}
                  </div>
                  <h3 className="text-lg font-normal text-[#F4F4F0] m-0 transition-colors group-hover:text-white">
                    {item.name}
                  </h3>
                </div>

                <div className="mt-5 pt-4 border-t border-[#292C33]/60 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider rounded-full border border-[#292C33] bg-[#090A0C] text-[#F4F4F0]">
                    <span
                      className="w-1.5 h-1.5 rounded-full animate-pulse"
                      style={{
                        backgroundColor: item.auraColor,
                        boxShadow: `0 0 10px ${item.auraColor}`,
                      }}
                    />
                    {item.stage}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
