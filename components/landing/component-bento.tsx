'use client';

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, AlertCircle, Dna, Cpu, Layers, Radio, Sparkles, Zap } from "lucide-react";
import Heading from "./heading";
import SubHeading from "./subheading";
import Container from "./container";
import { cn } from "@/lib/utils";

const oiNodes = [
  {
    step: "01",
    title: "Neural Organoid Culture",
    label: "3D In-Vitro Wetware Substrate",
    icon: Dna,
    question: "How can biological neural dynamics be computationally represented without flattening non-linear functional variability?",
    description: "3D in-vitro cerebral neural cultures exhibiting spontaneous rhythmic burst dynamics and stimulus-evoked field potentials.",
    protocol: "Living Neural Substrate // Field Potentials 10–100 μV",
    bottleneck: "Finite wetware viability windows and batch-to-batch biological non-determinism.",
    color: "#10F5A0",
  },
  {
    step: "02",
    title: "High-Density MEA Interface",
    label: "Bidirectional Bio-Electronic Transduction",
    icon: Layers,
    question: "What spatial and temporal electrode configurations minimize tissue impedance while isolating single-unit action potentials?",
    description: "High-density CMOS Multielectrode Array (HD-MEA) delivering patterned micro-stimulation pulses (μA) and recording extracellular field potentials.",
    protocol: "30 kHz Sampling // 1,024–4,096 Electrodes // ±500 μV",
    bottleneck: "Signal-to-noise ratio drift due to cellular encapsulation and electrode impedance changes.",
    color: "#10F5A0",
  },
  {
    step: "03",
    title: "Bio-Bus Signal Acquisition",
    label: "Hardware Digitization & Framing",
    icon: Radio,
    question: "How do we distinguish authentic action potentials from electromagnetic noise and thermal fluctuations?",
    description: "Sub-microvolt low-noise instrumentation front-end performing bandpass filtering (300Hz–3kHz), spike sorting, and telemetry streaming.",
    protocol: "24-bit Delta-Sigma ADC // < 2.5 ms Roundtrip // Standardized Framing",
    bottleneck: "Analog front-end power density limits and thermal dissipation near temperature-sensitive tissue.",
    color: "#10F5A0",
  },
  {
    step: "04",
    title: "Reproducibility & Closed-Loop",
    label: "Hybrid Computational Analysis",
    icon: Cpu,
    question: "What formal benchmark primitives can verify authentic adaptive computation versus stochastic resonance?",
    description: "Spatiotemporal spike-train representation, closed-loop stimulation feedback, and reproducible open benchmark datasets.",
    protocol: "100 GbE Digital Stream // Quantized Spikes // Closed-loop < 15 ms",
    bottleneck: "Absence of universally standardized biological benchmark datasets for computational verification.",
    color: "#10F5A0",
  },
];

export default function ComponentBento() {
  const [selectedNode, setSelectedNode] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const current = oiNodes[selectedNode];

  return (
    <section className="py-24 border-b border-[#292C33] bg-[#090A0C] relative">
      {/* Ambient Wetware Emerald Glow */}
      <div className="absolute top-1/3 right-1/4 w-[550px] h-[350px] bg-[#10F5A0]/[0.035] blur-[150px] pointer-events-none rounded-full" />

      <Container className="relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-[#292C33]">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#10F5A0]">
                BIOLOGICAL COMPUTING // BIO-BUS &amp; ORGANOID INTELLIGENCE
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider rounded-full border border-[#10F5A0]/40 text-[#10F5A0] bg-[#10F5A0]/10 font-semibold">
                <AlertCircle className="w-3.5 h-3.5" /> Conceptual Visual &mdash; Research Phase
              </span>
            </div>
            <Heading as="h2" variant="medium" className="text-3xl sm:text-5xl font-normal text-[#F4F4F0] m-0">
              Organoid Intelligence (OI) <em>Signal Pipeline</em>
            </Heading>
            <SubHeading variant="medium" className="mt-2 text-[#92969F]">
              Investigating how conventional computing systems could interface with experiments in biological computing.
            </SubHeading>
          </div>

          <Link
            href="/projects/bio-bus"
            className="btn-primary group px-5 py-2.5 rounded-lg text-xs font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#10F5A0]"
          >
            <span className="text-[#090A0C]">Explore the research / Research collaboration</span>
            <ArrowUpRight className="w-4 h-4 text-[#090A0C] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* 4-Node Interactive Bento Pipeline with Connected Line */}
        <div className="relative mb-8">
          {/* Subtle connecting connector line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#10F5A0]/30 to-transparent pointer-events-none transform -translate-y-1/2" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
            {oiNodes.map((node, index) => {
              const Icon = node.icon;
              const isSelected = selectedNode === index;

              return (
                <button
                  key={node.step}
                  onClick={() => setSelectedNode(index)}
                  style={{ ['--card-aura' as string]: '#10F5A0' }}
                  className={cn(
                    "metallic-border ambient-beam cryo-glass p-6 rounded-2xl text-left transition-all duration-300 relative focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#10F5A0]",
                    isSelected
                      ? "border-[#10F5A0] shadow-[0_0_25px_rgba(16,245,160,0.18)]"
                      : "hover:border-[#10F5A0]/40"
                  )}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-semibold text-[#10F5A0]">{node.step}</span>
                    <div
                      className={cn(
                        "w-7 h-7 rounded-md flex items-center justify-center transition-colors",
                        isSelected ? "bg-[#10F5A0] text-[#090A0C]" : "bg-[#090A0C] text-[#92969F]"
                      )}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="text-sm font-medium text-[#F4F4F0] mb-1">{node.title}</div>
                  <div className="text-[11px] font-mono text-[#92969F] truncate">{node.label}</div>

                  {isSelected && (
                    <motion.div
                      layoutId={shouldReduceMotion ? undefined : "active-oi-pill"}
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#10F5A0]"
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Stage Detail Readout */}
        <div
          style={{ ['--card-aura' as string]: '#10F5A0' }}
          className="metallic-border ambient-beam cryo-glass p-8 sm:p-10 rounded-2xl shadow-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-5">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#10F5A0] block mb-1">
                  STAGE {current.step} // SCIENTIFIC INQUIRY
                </span>
                <h3 className="text-2xl sm:text-3xl font-normal text-[#F4F4F0] m-0">
                  {current.title}
                </h3>
              </div>

              <div className="p-4 rounded-xl border border-[#292C33] bg-[#090A0C] space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#10F5A0]">
                  RESEARCH QUESTION
                </span>
                <p className="text-sm text-[#F4F4F0] italic m-0">
                  &ldquo;{current.question}&rdquo;
                </p>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#92969F] block mb-1">
                  SYSTEM ARCHITECTURE
                </span>
                <p className="text-xs sm:text-sm text-[#92969F] leading-relaxed m-0">
                  {current.description}
                </p>
              </div>

              <div className="p-3.5 rounded-lg border border-amber-500/30 bg-amber-950/10 text-xs text-amber-300 font-mono flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5" />
                <span>
                  <strong>Known Biological Limitation:</strong> {current.bottleneck}
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#090A0C] border border-[#292C33] rounded-xl p-6 space-y-4">
              <div className="text-[10px] font-mono text-[#92969F] uppercase tracking-wider flex items-center justify-between">
                <span>SIGNAL REPRESENTATION</span>
                <span className="text-[#10F5A0]">&bull; ACTIVE</span>
              </div>

              <div className="p-3.5 rounded-lg border border-[#292C33] bg-[#101217]">
                <div className="text-[10px] font-mono text-[#92969F]">SPECIFICATION</div>
                <div className="text-xs font-mono text-[#10F5A0] font-semibold mt-1">
                  {current.protocol}
                </div>
              </div>

              <div className="text-[11px] text-[#92969F] leading-relaxed">
                Standardized framing protocol allows computational algorithms to analyze spike trains without damaging in-vitro cellular viability.
              </div>

              <div className="pt-2 border-t border-[#292C33]">
                <Link
                  href="/projects/bio-bus"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[#F4F4F0] hover:text-[#10F5A0] transition-colors"
                >
                  <span>View Bio-Bus System Diagram</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#10F5A0]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
