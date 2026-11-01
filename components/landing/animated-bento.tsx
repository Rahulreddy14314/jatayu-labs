'use client';

import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Compass, Dna, Brain, Sparkles } from "lucide-react";
import Heading from "./heading";
import SubHeading from "./subheading";
import Container from "./container";
import { ProjectCardVisual } from "./ProjectCardVisual";
import { projects, type Project, type MaturityStage } from "@/lib/projects";
import { cn } from "@/lib/utils";

const stageStyles: Record<MaturityStage, { border: string; text: string; bg: string; dot: string }> = {
  'Prototype direction': {
    border: 'border-[#668CFF]/40',
    text: 'text-[#668CFF]',
    bg: 'bg-[#668CFF]/10',
    dot: 'bg-[#D4FF00]',
  },
  'Product development': {
    border: 'border-[#668CFF]/40',
    text: 'text-[#668CFF]',
    bg: 'bg-[#668CFF]/10',
    dot: 'bg-[#D4FF00]',
  },
  'Research phase': {
    border: 'border-[#668CFF]/40',
    text: 'text-[#668CFF]',
    bg: 'bg-[#668CFF]/10',
    dot: 'bg-[#D4FF00]',
  },
  'Concept exploration': {
    border: 'border-[#668CFF]/40',
    text: 'text-[#668CFF]',
    bg: 'bg-[#668CFF]/10',
    dot: 'bg-[#668CFF]',
  },
};

function ProjectBentoCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const style = stageStyles[project.stage];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#668CFF] rounded-2xl"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        whileHover={shouldReduceMotion ? {} : { y: -4 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        style={{ ['--card-aura' as string]: project.auraColor }}
        className="h-full flex flex-col justify-between optical-glass optical-glass-interactive rounded-2xl overflow-hidden shadow-xl border border-white/[0.08] hover:border-white/20 hover:border-t-white/35 transition-all duration-300"
      >
        <ProjectCardVisual project={project} />

        <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow space-y-6">
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#92969F]">
                {project.domain}
              </span>
              <span
                className={cn(
                  "inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider rounded-full border",
                  style.border,
                  style.text,
                  style.bg
                )}
              >
                <span className={cn("w-1.5 h-1.5 rounded-full", style.dot)} />
                {project.stage}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-normal text-[#F4F4F0] flex items-center justify-between gap-2 m-0 group-hover:text-white transition-colors">
              <span>{project.name}</span>
              <ArrowUpRight
                className="w-4 h-4 text-[#92969F] transition-all duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                style={{ color: project.auraColor }}
              />
            </h3>

            <p className="mt-3 text-xs sm:text-sm text-[#92969F] leading-relaxed line-clamp-2 m-0">
              {project.summary}
            </p>
          </div>

          <div className="pt-4 border-t border-[#292C33]/60 flex items-center justify-between text-xs text-[#92969F]">
            <span className="font-mono text-[10px] text-[#92969F]">ROLE // {project.role}</span>
            <span
              className="text-xs font-mono transition-colors group-hover:underline flex items-center gap-1"
              style={{ color: project.auraColor }}
            >
              <span>Inspect specification</span>
              <span>&rarr;</span>
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

export default function AnimatedBento() {
  return (
    <section className="py-24 border-b border-[#292C33] bg-[#050608]">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 pb-6 border-b border-[#292C33]">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#668CFF] mb-2">
              SECTION 03 // PROJECT PORTFOLIO
            </div>
            <Heading as="h2" variant="medium" className="text-3xl sm:text-5xl font-normal text-[#F4F4F0] m-0">
              Four Directions. <em className="text-[#92969F] font-normal italic font-serif">One Ambition.</em>
            </Heading>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#668CFF] hover:underline"
          >
            <span>View Full Portfolio Matrix</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 2x2 Interactive Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectBentoCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
