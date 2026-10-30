'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'motion/react'
import { ArrowUpRight, Compass, Dna, Brain, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface ResearchNode {
  id: string
  x: number
  y: number
  name: string
  domain: string
  focus: string
  slug: string
  stage: string
  auraColor: string
  icon: React.ElementType
}

const nodes: ResearchNode[] = [
  {
    id: 'sense',
    x: 20,
    y: 30,
    name: 'Project SENSE',
    domain: 'Human-Computer Interaction',
    focus: 'Spatial tactile interfaces & wearable somatic communication',
    slug: '/projects/sense',
    stage: 'Prototype direction',
    auraColor: '#00F0FF',
    icon: Compass,
  },
  {
    id: 'bio-bus',
    x: 75,
    y: 22,
    name: 'Bio-Bus',
    domain: 'Biological Computing & Organoid Intelligence',
    focus: 'Electrophysiological signal representation & MEA biocomputing',
    slug: '/projects/bio-bus',
    stage: 'Research phase',
    auraColor: '#10F5A0',
    icon: Dna,
  },
  {
    id: 'uploaded',
    x: 32,
    y: 75,
    name: 'Uploaded Intelligence',
    domain: 'Cognition & Memory Representation',
    focus: 'Episodic memory structures & personal semantic knowledge graphs',
    slug: '/projects/uploaded-intelligence',
    stage: 'Concept exploration',
    auraColor: '#B87BFF',
    icon: Brain,
  },
  {
    id: 'skill',
    x: 80,
    y: 72,
    name: 'SkillSynthesis',
    domain: 'Human Capability & Employability',
    focus: 'Multi-modal conversational intelligence & human skill expansion',
    slug: '/projects/skillsynthesis',
    stage: 'Product development',
    auraColor: '#FF9E3B',
    icon: Sparkles,
  },
]

export function ResearchMap() {
  const [activeId, setActiveId] = useState('bio-bus')
  const shouldReduceMotion = useReducedMotion()
  const activeNode = nodes.find((n) => n.id === activeId) ?? nodes[1]
  const ActiveIcon = activeNode.icon

  return (
    <div
      style={{ ['--card-aura' as string]: activeNode.auraColor }}
      className="research-map grid grid-cols-1 lg:grid-cols-12 metallic-border ambient-beam cryo-glass rounded-2xl overflow-hidden my-10 shadow-2xl"
    >
      {/* Interactive Map Visual */}
      <div className="lg:col-span-7 relative min-h-[420px] lg:min-h-[480px] bg-[#090A0C] p-6 overflow-hidden flex items-center justify-center">
        {/* Subtle background coordinate grid */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#668CFF 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        {/* Dynamic SVG Connective Vectors */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
          <line
            x1="20%"
            y1="30%"
            x2="75%"
            y2="22%"
            stroke="#668CFF"
            strokeWidth="1.2"
            strokeDasharray="4 4"
            opacity="0.35"
          />
          <line
            x1="75%"
            y1="22%"
            x2="80%"
            y2="72%"
            stroke="#668CFF"
            strokeWidth="1.2"
            strokeDasharray="4 4"
            opacity="0.35"
          />
          <line
            x1="80%"
            y1="72%"
            x2="32%"
            y2="75%"
            stroke="#668CFF"
            strokeWidth="1.2"
            strokeDasharray="4 4"
            opacity="0.35"
          />
          <line
            x1="32%"
            y1="75%"
            x2="20%"
            y2="30%"
            stroke="#668CFF"
            strokeWidth="1.2"
            strokeDasharray="4 4"
            opacity="0.35"
          />
          <line
            x1="20%"
            y1="30%"
            x2="80%"
            y2="72%"
            stroke="#668CFF"
            strokeWidth="1"
            opacity="0.15"
          />
          <line
            x1="75%"
            y1="22%"
            x2="32%"
            y2="75%"
            stroke="#668CFF"
            strokeWidth="1"
            opacity="0.15"
          />
        </svg>

        {/* Nodes */}
        {nodes.map((node) => {
          const isSelected = activeId === node.id
          const NodeIcon = node.icon
          return (
            <button
              key={node.id}
              onClick={() => setActiveId(node.id)}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#668CFF] rounded-full p-2 transition-transform duration-200"
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              aria-label={`Select ${node.name}`}
            >
              <div className="relative flex items-center gap-2.5">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 border"
                  style={{
                    backgroundColor: isSelected ? node.auraColor : '#101217',
                    borderColor: isSelected ? node.auraColor : '#292C33',
                    color: isSelected ? '#090A0C' : '#92969F',
                    boxShadow: isSelected ? `0 0 25px ${node.auraColor}` : undefined,
                  }}
                >
                  <NodeIcon className="w-4 h-4" />
                </div>
                <div className="hidden sm:block text-left">
                  <span
                    className={cn(
                      "block text-xs font-medium tracking-tight transition-colors",
                      isSelected ? "text-[#F4F4F0] font-semibold" : "text-[#92969F] group-hover:text-[#F4F4F0]"
                    )}
                  >
                    {node.name}
                  </span>
                  <span className="block text-[10px] font-mono" style={{ color: node.auraColor }}>
                    {node.stage}
                  </span>
                </div>
              </div>
            </button>
          )
        })}

        <div className="absolute bottom-4 left-4 text-[10px] font-mono text-[#92969F] uppercase tracking-widest pointer-events-none">
          SYSTEM INTERCONNECT // 04 ACTIVE DOMAINS
        </div>
      </div>

      {/* Selected Node Details Panel */}
      <div className="lg:col-span-5 p-8 sm:p-10 border-t lg:border-t-0 lg:border-l border-[#292C33] flex flex-col justify-between bg-[#101217]/90">
        <div>
          <div className="flex items-center justify-between mb-4">
            <span
              className="text-[11px] font-mono uppercase tracking-[0.2em] font-semibold"
              style={{ color: activeNode.auraColor }}
            >
              INTERSECTION POINT
            </span>
            <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full border border-[#292C33] bg-[#090A0C] text-[#92969F]">
              {activeNode.stage}
            </span>
          </div>

          <div className="flex items-center gap-3.5 mb-4">
            <div
              className="w-10 h-10 rounded-xl border flex items-center justify-center"
              style={{
                color: activeNode.auraColor,
                borderColor: `${activeNode.auraColor}40`,
                backgroundColor: `${activeNode.auraColor}15`,
              }}
            >
              <ActiveIcon className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xl font-normal text-[#F4F4F0] m-0">{activeNode.name}</h4>
              <p className="text-xs font-mono text-[#92969F] m-0">{activeNode.domain}</p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#92969F] leading-relaxed mt-4">
            {activeNode.focus}
          </p>

          <div className="mt-6 pt-6 border-t border-[#292C33]/60 space-y-2.5 text-xs text-[#92969F]">
            <div className="flex items-center justify-between">
              <span>Domain Classification</span>
              <span className="text-[#F4F4F0] font-mono">{activeNode.domain}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Methodology</span>
              <span className="text-[#F4F4F0] font-mono">Hardware &middot; Wetware &middot; AI</span>
            </div>
          </div>
        </div>

        <div className="pt-6 mt-6 border-t border-[#292C33]">
          <Link
            href={activeNode.slug}
            className="btn-primary group inline-flex items-center justify-between w-full px-5 py-3 rounded-lg font-mono text-xs font-semibold"
          >
            <span className="text-[#090A0C]">Explore {activeNode.name} specification</span>
            <ArrowUpRight className="w-4 h-4 ml-1 text-[#090A0C] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
