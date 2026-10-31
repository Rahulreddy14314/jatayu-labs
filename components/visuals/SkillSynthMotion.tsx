'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'
import {
  Mic,
  Activity,
  Users,
  Award,
  Sparkles,
  BarChart2,
  CheckCircle2,
  Sliders,
  Volume2
} from 'lucide-react'
import { cn } from '@/lib/utils'

type ModuleType = 'public-speaking' | 'group-discussion'

export function SkillSynthMotion({ className }: { className?: string }) {
  const [activeModule, setActiveModule] = useState<ModuleType>('public-speaking')
  const [audioBars, setAudioBars] = useState<number[]>([40, 65, 30, 85, 95, 55, 75, 45, 60, 80, 50, 70])
  const [wpm, setWpm] = useState(138)
  const shouldReduceMotion = useReducedMotion()

  // Real-time audio waveform simulation
  useEffect(() => {
    if (shouldReduceMotion) return
    const interval = setInterval(() => {
      setAudioBars(
        Array.from({ length: 12 }, () => Math.floor(Math.random() * 65) + 25)
      )
      setWpm(Math.floor(Math.random() * 12) + 132)
    }, 450)
    return () => clearInterval(interval)
  }, [shouldReduceMotion])

  // Radar chart polygon points
  // Public speaking: high delivery/pacing/structure, lower interjection
  // Group discussion: high active listening/interjection timing/consensus, moderate structure
  const radarPoints =
    activeModule === 'public-speaking'
      ? '150,40 220,90 200,190 100,190 80,90'
      : '150,70 230,120 180,210 120,210 70,120'

  return (
    <div
      style={{ ['--card-aura' as string]: '#FF9E3B' }}
      className={cn(
        'metallic-border ambient-beam cryo-glass rounded-2xl overflow-hidden shadow-2xl transition-all duration-300',
        className
      )}
    >
      {/* Titlebar with Module Status */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between px-5 py-3.5 border-b border-[#292C33] bg-[#090A0C]/90 gap-3">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF9E3B] animate-pulse" />
          <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#FF9E3B] font-semibold">
            SKILLSYNTH // CONVERSATIONAL INTELLIGENCE ENGINE
          </span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-[#FF9E3B]/30 text-[#FF9E3B] bg-[#FF9E3B]/10 hidden md:inline-block">
            Product Development
          </span>
        </div>

        {/* Module Switcher Pills */}
        <div className="flex items-center gap-1.5 bg-[#101217] p-1 rounded-lg border border-[#292C33]">
          <button
            type="button"
            onClick={() => setActiveModule('public-speaking')}
            className={cn(
              'px-3 py-1 text-[11px] font-mono rounded transition-colors',
              activeModule === 'public-speaking'
                ? 'bg-[#FF9E3B]/20 text-[#FF9E3B] font-semibold'
                : 'text-[#92969F] hover:text-[#F4F4F0]'
            )}
          >
            Public Speaking Module
          </button>
          <button
            type="button"
            onClick={() => setActiveModule('group-discussion')}
            className={cn(
              'px-3 py-1 text-[11px] font-mono rounded transition-colors',
              activeModule === 'group-discussion'
                ? 'bg-[#FF9E3B]/20 text-[#FF9E3B] font-semibold'
                : 'text-[#92969F] hover:text-[#F4F4F0]'
            )}
          >
            Group Discussion Module
          </button>
        </div>
      </div>

      <div className="p-6 md:p-8 space-y-6">
        {/* Real-time Acoustic & Rubric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left: Morphing Radar Chart Graphic */}
          <div className="lg:col-span-5 relative h-[300px] rounded-xl bg-[#090A0C]/90 border border-[#292C33] flex items-center justify-center p-4 overflow-hidden">
            <svg className="w-full h-full max-w-[280px] max-h-[280px]" viewBox="0 0 300 260">
              {/* Radar Background Polygon Webs */}
              <polygon points="150,20 250,90 215,220 85,220 50,90" stroke="#292C33" strokeWidth="1" fill="none" />
              <polygon points="150,50 220,105 195,190 105,190 80,105" stroke="#292C33" strokeWidth="1" fill="none" />
              <polygon points="150,85 190,120 175,160 125,160 110,120" stroke="#292C33" strokeWidth="1" fill="none" />

              {/* Spider Axes */}
              <line x1="150" y1="130" x2="150" y2="20" stroke="#292C33" strokeWidth="1" />
              <line x1="150" y1="130" x2="250" y2="90" stroke="#292C33" strokeWidth="1" />
              <line x1="150" y1="130" x2="215" y2="220" stroke="#292C33" strokeWidth="1" />
              <line x1="150" y1="130" x2="85" y2="220" stroke="#292C33" strokeWidth="1" />
              <line x1="150" y1="130" x2="50" y2="90" stroke="#292C33" strokeWidth="1" />

              {/* Dynamic Animated Evaluation Polygon */}
              <motion.polygon
                points={radarPoints}
                stroke="#FF9E3B"
                strokeWidth="2"
                fill="rgba(255, 158, 59, 0.25)"
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              />

              {/* Metric Axis Labels */}
              <text x="150" y="14" textAnchor="middle" fill="#F4F4F0" fontSize="9" fontFamily="monospace">
                CLARITY / VOCAL
              </text>
              <text x="256" y="94" textAnchor="start" fill="#F4F4F0" fontSize="9" fontFamily="monospace">
                PACING
              </text>
              <text x="220" y="235" textAnchor="start" fill="#F4F4F0" fontSize="9" fontFamily="monospace">
                STRUCTURE
              </text>
              <text x="80" y="235" textAnchor="end" fill="#F4F4F0" fontSize="9" fontFamily="monospace">
                ARGUMENTATION
              </text>
              <text x="44" y="94" textAnchor="end" fill="#F4F4F0" fontSize="9" fontFamily="monospace">
                LISTENING
              </text>
            </svg>

            <div className="absolute top-3 left-3 text-[9px] font-mono text-[#92969F]">
              <span>RADAR EVALUATION</span>
            </div>
          </div>

          {/* Right: Live Telemetry, Acoustic Waveform, & Linguistic Tokens */}
          <div className="lg:col-span-7 space-y-4">
            {/* Live Audio Ingest Waveform Bar */}
            <div className="p-4 rounded-xl bg-[#101217] border border-[#292C33] space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#92969F] flex items-center gap-1.5">
                  <Mic className="w-3.5 h-3.5 text-[#FF9E3B]" /> Live Audio Ingest Feed
                </span>
                <span className="text-[#FF9E3B] font-semibold">{wpm} WPM (Optimal 130–150)</span>
              </div>

              {/* 12-Bar Moving Audio Spectrum */}
              <div className="h-14 flex items-end justify-between gap-1.5 px-2 bg-[#090A0C] rounded-lg p-2 border border-[#292C33]/60">
                {audioBars.map((height, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: `${height}%` }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="flex-1 rounded-sm bg-gradient-to-t from-[#FF9E3B]/40 to-[#FF9E3B]"
                  />
                ))}
              </div>
            </div>

            {/* Tokenized Linguistic Rubric Breakdown */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <div className="p-3 rounded-lg bg-[#101217] border border-[#292C33]">
                <span className="block text-[9px] font-mono text-[#92969F] uppercase">Clarity Score</span>
                <span className="text-sm font-mono text-[#F4F4F0] font-bold">88 / 100</span>
                <span className="text-[9px] font-mono text-emerald-400 block mt-0.5">+4% vs Cohort</span>
              </div>
              <div className="p-3 rounded-lg bg-[#101217] border border-[#292C33]">
                <span className="block text-[9px] font-mono text-[#92969F] uppercase">Filler Ratio</span>
                <span className="text-sm font-mono text-[#FF9E3B] font-bold">1.4%</span>
                <span className="text-[9px] font-mono text-[#92969F] block mt-0.5">Below Threshold</span>
              </div>
              <div className="p-3 rounded-lg bg-[#101217] border border-[#292C33]">
                <span className="block text-[9px] font-mono text-[#92969F] uppercase">Cadence</span>
                <span className="text-sm font-mono text-[#F4F4F0] font-bold">Steady</span>
                <span className="text-[9px] font-mono text-[#92969F] block mt-0.5">Natural Pauses</span>
              </div>
              <div className="p-3 rounded-lg bg-[#101217] border border-[#292C33]">
                <span className="block text-[9px] font-mono text-[#92969F] uppercase">Confidence</span>
                <span className="text-sm font-mono text-[#FF9E3B] font-bold">High</span>
                <span className="text-[9px] font-mono text-emerald-400 block mt-0.5">Objective ML</span>
              </div>
            </div>

            {/* Live Detected Conversational Insight */}
            <div className="p-4 rounded-xl bg-[#090A0C] border border-[#292C33]">
              <div className="flex items-center justify-between text-[10px] font-mono text-[#92969F] mb-1">
                <span>ACTIVE COGNITIVE RUBRIC</span>
                <span className="text-[#FF9E3B]">
                  {activeModule === 'public-speaking' ? 'Monologue Cadence' : 'Turn-Taking Dynamics'}
                </span>
              </div>
              <p className="text-xs text-[#F4F4F0] leading-relaxed m-0">
                {activeModule === 'public-speaking'
                  ? 'Strong topic introduction with balanced pitch modulation. Minor recommendation: increase pause duration prior to transition into supporting data points.'
                  : 'Balanced interjection timing with high respectful concession index. Demonstrated active listening synthesis before offering counter-perspectives.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
