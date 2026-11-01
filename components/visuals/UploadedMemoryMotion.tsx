'use client'

import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'
import {
  Brain,
  Layers,
  Sparkles,
  GitBranch,
  ShieldAlert,
  AlertCircle,
  HelpCircle,
  Info
} from 'lucide-react'
import { cn } from '@/lib/utils'

type InspectionMode = 'episodic' | 'connectome' | 'boundary'

export function UploadedMemoryMotion({ className }: { className?: string }) {
  const [mode, setMode] = useState<InspectionMode>('episodic')
  const [selectedNode, setSelectedNode] = useState<'left' | 'right' | null>('left')
  const shouldReduceMotion = useReducedMotion()

  return (
    <div
      style={{ ['--card-aura' as string]: '#B87BFF' }}
      className={cn(
        'metallic-border ambient-beam cryo-glass rounded-2xl overflow-hidden shadow-2xl transition-all duration-300',
        className
      )}
    >
      {/* Titlebar with Mandatory Concept Badge */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between px-5 py-3.5 border-b border-[#292C33] bg-[#090A0C]/90 gap-3">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#B87BFF] animate-pulse" />
          <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#B87BFF] font-semibold">
            UPLOADED INTELLIGENCE // COGNITIVE RECONSTRUCTION
          </span>
        </div>

        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider text-[#B87BFF] bg-[#B87BFF]/10 border border-[#B87BFF]/30">
          <AlertCircle className="w-3 h-3" /> Conceptual Visual — Concept Exploration
        </span>
      </div>

      <div className="p-6 md:p-8 space-y-6">
        {/* Inspection Mode Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#292C33]">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#92969F] mr-1">
              Inspection View:
            </span>
            {[
              { id: 'episodic', label: 'Episodic Vector Encoding' },
              { id: 'connectome', label: 'Connectome Topology' },
              { id: 'boundary', label: 'Cognitive Boundary Analysis' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setMode(tab.id as InspectionMode)}
                className={cn(
                  'px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 border',
                  mode === tab.id
                    ? 'bg-[#B87BFF]/15 text-[#B87BFF] border-[#B87BFF]/50 font-semibold shadow-[0_0_12px_rgba(184,123,255,0.25)]'
                    : 'bg-[#101217] text-[#92969F] border-[#292C33] hover:text-[#F4F4F0] hover:border-[#92969F]/40'
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <span className="text-[10px] font-mono text-[#92969F]">
            State-Space Lattice // Latent Dim: 1024
          </span>
        </div>

        {/* Dual-Hemisphere Interactive Network Diagram */}
        <div className="relative h-[340px] sm:h-[380px] rounded-xl bg-[#090A0C]/90 border border-[#292C33] p-4 flex flex-col justify-between overflow-hidden">
          {/* Subtle Grid Matrix */}
          <div className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#B87BFF 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />

          {/* Central Demarcation Boundary Line */}
          <div className="absolute inset-y-6 left-1/2 -translate-x-1/2 w-px border-r border-dashed border-[#B87BFF]/40 flex flex-col items-center justify-center">
            <span className="px-2 py-1 rounded bg-[#101217] border border-[#B87BFF]/40 text-[9px] font-mono uppercase tracking-widest text-[#B87BFF] transform rotate-90 my-auto shadow-lg">
              Theoretical Boundary
            </span>
          </div>

          {/* Graph Nodes SVG Plane with Animated Traveling Synaptic Packets */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {/* Left Cluster Edges (Episodic Graph) */}
            <path id="edge-l1" d="M 120 180 Q 160 120 220 140" stroke="#B87BFF" strokeOpacity="0.4" strokeWidth="1.5" fill="none" />
            <path id="edge-l2" d="M 120 180 Q 170 240 230 220" stroke="#B87BFF" strokeOpacity="0.4" strokeWidth="1.5" fill="none" />
            <path id="edge-l3" d="M 220 140 L 230 220" stroke="#B87BFF" strokeOpacity="0.3" strokeWidth="1" fill="none" />

            {/* Right Cluster Edges (Speculative Emulation) */}
            <path id="edge-r1" d="M 440 140 Q 500 120 540 180" stroke="#92969F" strokeDasharray="3 3" strokeOpacity="0.3" strokeWidth="1.5" fill="none" />
            <path id="edge-r2" d="M 430 220 Q 490 240 540 180" stroke="#92969F" strokeDasharray="3 3" strokeOpacity="0.3" strokeWidth="1.5" fill="none" />

            {/* Traveling Data Pulse Circle on Left Graph */}
            {!shouldReduceMotion && (
              <motion.circle
                r="3"
                fill="#B87BFF"
                animate={{
                  offsetDistance: ['0%', '100%'],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{ offsetPath: "path('M 120 180 Q 160 120 220 140 L 230 220 Q 170 240 120 180')" }}
              />
            )}
          </svg>

          {/* Dual Hemisphere Titles */}
          <div className="grid grid-cols-2 gap-4 relative z-10 text-center sm:text-left px-2 sm:px-6 pt-2">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-[#B87BFF] font-semibold block">
                LEFT HEMISPHERE // VERIFIED FOCUS
              </span>
              <h4 className="text-sm sm:text-base font-normal text-[#F4F4F0] m-0">
                Episodic Memory Graphs &amp; Semantic Modelling
              </h4>
            </div>

            <div className="text-right">
              <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-[#92969F] font-semibold block">
                RIGHT HEMISPHERE // THEORETICAL BOUNDARY
              </span>
              <h4 className="text-sm sm:text-base font-normal text-[#92969F] m-0">
                Speculative Whole-Brain Emulation
              </h4>
            </div>
          </div>

          {/* Interactive Cluster Interactive Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10 px-2 sm:px-6">
            {/* Left Cluster Card */}
            <div
              onClick={() => setSelectedNode('left')}
              className={cn(
                'p-4 rounded-xl border transition-all cursor-pointer bg-[#101217]/90',
                selectedNode === 'left'
                  ? 'border-[#B87BFF] shadow-[0_0_20px_rgba(184,123,255,0.25)]'
                  : 'border-[#292C33] hover:border-[#B87BFF]/50'
              )}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-[#B87BFF] font-semibold">
                  Structured Memory Lattices
                </span>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-[#B87BFF]/10 text-[#B87BFF] border border-[#B87BFF]/30">
                  Empirical Science
                </span>
              </div>
              <p className="text-xs text-[#92969F] leading-relaxed m-0">
                Formalizing temporal episodic events, subjective decision heuristics, and associative knowledge graphs into searchable, privacy-preserving digital schemas.
              </p>
            </div>

            {/* Right Cluster Card */}
            <div
              onClick={() => setSelectedNode('right')}
              className={cn(
                'p-4 rounded-xl border transition-all cursor-pointer bg-[#101217]/90',
                selectedNode === 'right'
                  ? 'border-[#92969F] shadow-[0_0_20px_rgba(146,150,159,0.2)]'
                  : 'border-[#292C33] hover:border-[#92969F]/50'
              )}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-[#92969F] font-semibold">
                  Whole-Brain Substrate Emulation
                </span>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 text-[#92969F] border border-white/10">
                  Theoretical Frontier
                </span>
              </div>
              <p className="text-xs text-[#92969F] leading-relaxed m-0">
                Exploring theoretical biophysical requirements, connectome fidelity limits, and thermodynamic bounds. Explicitly separated from current deployable software.
              </p>
            </div>
          </div>

          {/* Bottom Telemetry Strip */}
          <div className="flex items-center justify-between text-[10px] font-mono text-[#92969F] pt-2 px-2 sm:px-6 relative z-10 border-t border-[#292C33]/60">
            <span>Schema: Multimodal Episodic Lattice (JSON-LD)</span>
            <span className="text-[#B87BFF]">Biological Neural Copying: Strictly Out of Scope</span>
          </div>
        </div>

        {/* Selected Context Callout */}
        <div className="p-5 rounded-xl bg-[#101217] border border-[#292C33] flex items-start gap-3">
          <Info className="w-5 h-5 text-[#B87BFF] shrink-0 mt-0.5" />
          <div className="text-xs text-[#92969F] space-y-1">
            <span className="font-mono text-[#F4F4F0] uppercase tracking-wider font-semibold block">
              Ethical &amp; Scientific Position (Kritam Labs Brief)
            </span>
            <p className="m-0 leading-relaxed">
              Kritam Labs does not claim to upload biological consciousness. Our research establishes mathematically sound, verifiable representations of personal reasoning and autobiographical memory to prevent digital context loss across generations.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
