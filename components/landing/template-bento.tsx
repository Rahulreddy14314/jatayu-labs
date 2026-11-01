'use client';

import { useRef } from 'react';
import { motion, useReducedMotion } from "motion/react";
import Heading from "./heading";
import SubHeading from "./subheading";
import Container from "./container";
import { Hammer, Compass, RotateCcw, Users } from "lucide-react";

const pillars = [
  {
    number: "01",
    title: "Build",
    icon: Hammer,
    body: "Make tangible things early. Put working prototypes into the physical world where their properties, limits, and failures can be measured objectively.",
  },
  {
    number: "02",
    title: "Explore",
    icon: Compass,
    body: "Ask rigorous questions at the edge of what is currently understood. Ground ambitious long-term questions in empirical scientific methods.",
  },
  {
    number: "03",
    title: "Iterate",
    icon: RotateCcw,
    body: "Use evidence, including documented failure, to make the next version more resilient, capable, and genuinely useful to people.",
  },
  {
    number: "04",
    title: "Collaborate",
    icon: Users,
    body: "Partner with researchers, domain specialists, and early institutions who bring different methodologies and lived experience.",
  },
];

function PillarCard({ pillar }: { pillar: typeof pillars[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = pillar.icon;

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
      style={{ ['--card-aura' as string]: '#668CFF' }}
      className="group relative optical-glass optical-glass-interactive p-8 rounded-2xl flex flex-col justify-between min-h-[280px] shadow-lg transition-all duration-300"
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-mono font-semibold text-[#668CFF] px-2.5 py-0.5 rounded-full border border-[#668CFF]/30 bg-[#668CFF]/10">
          {pillar.number}
        </span>
        <div className="w-9 h-9 rounded-lg bg-[#090A0C] border border-[#292C33] flex items-center justify-center text-[#92969F] group-hover:text-[#668CFF] group-hover:border-[#668CFF]/50 transition-colors">
          <Icon className="w-4 h-4" />
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-normal text-[#F4F4F0] mb-3 group-hover:text-white transition-colors">
          {pillar.title}
        </h3>
        <p className="text-xs sm:text-sm text-[#92969F] leading-relaxed m-0">
          {pillar.body}
        </p>
      </div>
    </div>
  );
}

export default function TemplateBento() {
  return (
    <section className="py-24 border-b border-[#292C33] bg-[#050608] relative">
      <Container className="relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 pb-6 border-b border-[#292C33]">
          <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#668CFF] mb-2">
            SECTION 04 // METHODOLOGY &amp; CULTURE
          </div>
          <Heading as="h2" variant="medium" className="text-3xl sm:text-5xl font-normal text-[#F4F4F0] m-0">
            Our Approach &mdash; <em>Build &middot; Explore &middot; Iterate &middot; Collaborate</em>
          </Heading>
          <SubHeading variant="medium" className="mt-4 text-[#92969F]">
            Kritam Labs brings hardware engineering, software development, and exploratory research together to tackle difficult problems with care, clarity, and momentum.
          </SubHeading>
        </div>

        {/* 4-Card Architectural Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <PillarCard key={pillar.title} pillar={pillar} />
          ))}
        </div>
      </Container>
    </section>
  );
}
