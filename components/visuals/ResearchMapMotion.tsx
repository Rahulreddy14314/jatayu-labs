'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'motion/react'
import {
  Compass,
  Dna,
  Brain,
  Sparkles,
  ArrowUpRight,
  Layers,
  Activity,
  AlertCircle
} from 'lucide-react'
import { cn } from '@/lib/utils'

export interface ResearchNode {
  id: string
  name: string
  domain: string
  stage: string
  role: string
  slug: string
  auraColor: string
  cx: number
  cy: number
  icon: React.ElementType
  question: string
  intersections: string[]
}

const NODES: ResearchNode[] = [
  {
    id: 'sense',
    name: 'Project SENSE',
    domain: 'Human-Computer Interaction',
    stage: 'Prototype direction',
    role: 'Wearable tactile & EEG closed-loop interface',
    slug: '/projects/sense',
    auraColor: '#00F0FF',
    cx: 180,
    cy: 130,
    icon: Compass,
    question: 'How can waist-worn vibrotactile patterns encode spatial direction and machine status with lower cognitive burden than visual screens?',
    intersections: ['bio-bus', 'skillsynth'],
  },
  {
    id: 'bio-bus',
    name: 'Bio-Bus',
    domain: 'Biological Computing & Organoid Intelligence',
    stage: 'Research phase',
    role: 'Wetware-to-silicon acquisition bus',
    slug: '/projects/bio-bus',
    auraColor: '#10F5A0',
    cx: 580,
    cy: 110,
    icon: Dna,
    question: 'How can living neural organoid extracellular field potentials be standardized into low-noise, reproducible computational event frames?',
    intersections: ['sense', 'uploaded'],
  },
  {
    id: 'uploaded',
    name: 'Uploaded Intelligence',
    domain: 'Cognitive Technology',
    stage: 'Concept exploration',
    role: 'Structured episodic memory & knowledge graphs',
    slug: '/projects/uploaded-intelligence',
    auraColor: '#B87BFF',
    cx: 560,
    cy: 330,
    icon: Brain,
    question: 'Where is the empirical mathematical boundary between personal autobiographical memory lattices and speculative whole-brain biological emulation?',
    intersections: ['bio-bus', 'skillsynth'],
  },
  {
    id: 'skillsynth',
    name: 'SkillSynth',
    domain: 'Employability AI & Human Capability',
    stage: 'Product development',
    role: 'Conversational soft-skills telemetry platform',
    slug: '/projects/skillsynth',
    auraColor: '#FF9E3B',
    cx: 190,
    cy: 340,
    icon: Sparkles,
    question: 'How can acoustic cadence, argument structure, and turn-taking dynamics be objectively scored without demographic or regional accent bias?',
    intersections: ['sense', 'uploaded'],
  },
]

export function ResearchMapMotion({ className }: { className?: string }) {
  const [selectedId, setSelectedId] = useState<string>('sense')
  const shouldReduceMotion = useReducedMotion()

  const activeNode = NODES.find((n) => n.id === selectedId) || NODES[0]
  const NodeIcon = activeNode.icon

  return (
    <div
      style={{ ['--card-aura' as string]: activeNode.auraColor }}
      className={cn(
        'metallic-border ambient-beam cryo-glass rounded-2xl overflow-hidden shadow-2xl transition-all duration-300',
        className
      )}
    >
      {/* Titlebar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between px-5 py-3.5 border-b border-[#292C33] bg-[#090A0C]/90 gap-3">
        <div className="flex items-center gap-2.5">
          <span
            className="w-2.5 h-2.5 rounded-full animate-pulse"
            style={{ backgroundColor: activeNode.auraColor }}
          />
          <span
            className="text-[11px] font-mono uppercase tracking-[0.18em] font-semibold"
            style={{ color: activeNode.auraColor }}
          >
            INTERACTIVE RESEARCH MATRIX // 04 CONVERGING DOMAINS
          </span>
        </div>

        <span className="text-[10px] font-mono text-[#92969F]">
          Click any domain node to inspect research intersections
        </span>
      </div>

      <div className="p-6 md:p-8 space-y-6">
        {/* Interactive 2D SVG Graph Plane */}
        <div className="relative h-[380px] sm:h-[420px] rounded-xl bg-[#090A0C]/90 border border-[#292C33] overflow-hidden">
          {/* Subtle Radial Mesh */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#668CFF 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />

          <svg className="w-full h-full" viewBox="0 0 760 450">
            {/* Cross-Domain Interconnection Lines */}
            <g stroke="#292C33" strokeWidth="1.5">
              {/* SENSE -> Bio-Bus */}
              <line x1="180" y1="130" x2="580" y2="110" />
              {/* Bio-Bus -> Uploaded */}
              <line x1="580" y1="110" x2="560" y2="330" />
              {/* Uploaded -> SkillSynth */}
              <line x1="560" y1="330" x2="190" y2="340" />
              {/* SkillSynth -> SENSE */}
              <line x1="190" y1="340" x2="180" y2="130" />
              {/* Diagonal: SENSE -> Uploaded */}
              <line x1="180" y1="130" x2="560" y2="330" strokeDasharray="4 4" strokeOpacity="0.4" />
              {/* Diagonal: Bio-Bus -> SkillSynth */}
              <line x1="580" y1="110" x2="190" y2="340" strokeDasharray="4 4" strokeOpacity="0.4" />
            </g>

            {/* Highlighted active node connections */}
            {activeNode.intersections.map((targetId) => {
              const target = NODES.find((n) => n.id === targetId)
              if (!target) return null
              return (
                <g key={targetId}>
                  <line
                    x1={activeNode.cx}
                    y1={activeNode.cy}
                    x2={target.cx}
                    y2={target.cy}
                    stroke={activeNode.auraColor}
                    strokeWidth="2"
                    strokeOpacity="0.7"
                  />
                  {!shouldReduceMotion && (
                    <motion.circle
                      r="3.5"
                      fill={activeNode.auraColor}
                      animate={{
                        cx: [activeNode.cx, target.cx],
                        cy: [activeNode.cy, target.cy],
                        opacity: [0, 1, 0],
                      }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  )}
                </g>
              )
            })}

            {/* Central Convergence Core Badge */}
            <g transform="translate(380, 225)">
              <circle r="42" fill="#101217" stroke="#292C33" strokeWidth="1" />
              <circle r="36" fill="none" stroke="#668CFF" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
              <text textAnchor="middle" y="-4" fill="#F4F4F0" fontSize="10" fontFamily="monospace" fontWeight="bold">
                JATAYU
              </text>
              <text textAnchor="middle" y="10" fill="#668CFF" fontSize="8" fontFamily="monospace">
                CORE LAB
              </text>
            </g>

            {/* Interactive Domain Nodes */}
            {NODES.map((node) => {
              const isSelected = selectedId === node.id
              const IconComponent = node.icon

              return (
                <g
                  key={node.id}
                  transform={`translate(${node.cx}, ${node.cy})`}
                  onClick={() => setSelectedId(node.id)}
                  className="cursor-pointer group"
                >
                  {/* Outer Pulsing Aura Ring */}
                  {isSelected && (
                    <circle
                      r="42"
                      fill="none"
                      stroke={node.auraColor}
                      strokeWidth="1.5"
                      opacity="0.4"
                      className="animate-ping"
                    />
                  )}

                  {/* Node Background Disc */}
                  <circle
                    r="32"
                    fill={isSelected ? '#101217' : '#090A0C'}
                    stroke={isSelected ? node.auraColor : '#292C33'}
                    strokeWidth={isSelected ? '2' : '1.5'}
                    className="transition-all duration-300 group-hover:scale-105"
                  />

                  {/* Node Icon or Symbol */}
                  <foreignObject x="-14" y="-14" width="28" height="28" className="pointer-events-none">
                    <div className="w-full h-full flex items-center justify-center">
                      <IconComponent
                        className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
                        style={{ color: node.auraColor }}
                      />
                    </div>
                  </foreignObject>

                  {/* Text Label Below Node */}
                  <text
                    y="48"
                    textAnchor="middle"
                    fill={isSelected ? '#F4F4F0' : '#92969F'}
                    fontSize="11"
                    fontFamily="monospace"
                    fontWeight={isSelected ? 'bold' : 'normal'}
                    className="select-none"
                  >
                    {node.name}
                  </text>
                  <text
                    y="60"
                    textAnchor="middle"
                    fill={node.auraColor}
                    fontSize="9"
                    fontFamily="monospace"
                    className="select-none"
                  >
                    {node.stage}
                  </text>
                </g>
              )
            })}
          </svg>
        </div>

        {/* Selected Domain Inspection Panel */}
        <div className="p-6 rounded-xl bg-[#101217] border border-[#292C33] flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <span
                className="text-[10px] font-mono uppercase tracking-[0.2em] font-semibold"
                style={{ color: activeNode.auraColor }}
              >
                {activeNode.domain}
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-[#292C33] bg-[#090A0C] text-[#92969F]">
                {activeNode.role}
              </span>
            </div>

            <h4 className="text-xl font-normal text-[#F4F4F0] m-0">
              {activeNode.name}
            </h4>

            <p className="text-xs sm:text-sm text-[#92969F] mt-2 leading-relaxed m-0">
              <strong className="text-[#F4F4F0]">Primary Research Question: </strong>
              {activeNode.question}
            </p>
          </div>

          <Link
            href={activeNode.slug}
            className="btn-primary group px-5 py-2.5 rounded-lg text-xs font-semibold shrink-0"
          >
            <span className="text-[#090A0C]">Open {activeNode.name} Dossier</span>
            <ArrowUpRight className="w-4 h-4 text-[#090A0C] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
