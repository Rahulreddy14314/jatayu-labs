'use client'

import { useState } from 'react'
import { useActionState } from 'react'
import { ArrowUpRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import { submitCollaboratorIntake, type IntakeState } from '@/app/actions/intake'
import { cn } from "@/lib/utils"

const initialState: IntakeState = {
  ok: false,
  message: '',
}

const PROJECT_TRACKS = [
  { id: 'General', label: 'General Lab', color: '#668CFF' },
  { id: 'Project SENSE', label: 'Project SENSE', color: '#00F0FF' },
  { id: 'Bio-Bus (Organoid Intelligence)', label: 'Bio-Bus / OI', color: '#10F5A0' },
  { id: 'Uploaded Intelligence', label: 'Uploaded Intelligence', color: '#B87BFF' },
  { id: 'SkillSynthesis', label: 'SkillSynthesis', color: '#FF9E3B' },
] as const;

export function CollabForm({ defaultProject = 'General' }: { defaultProject?: string }) {
  const [state, formAction, isPending] = useActionState(submitCollaboratorIntake, initialState)
  const [selectedTrack, setSelectedTrack] = useState<string>(defaultProject)

  return (
    <form action={formAction} className="space-y-5">
      {/* Honeypot field (hidden from real users) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="honeypot">Leave blank</label>
        <input type="text" id="honeypot" name="honeypot" tabIndex={-1} autoComplete="off" />
      </div>

      {/* Track Pill Selector */}
      <div>
        <label className="block text-[11px] font-mono uppercase tracking-wider text-[#92969F] mb-2">
          Project Track Selection
        </label>
        <div className="flex flex-wrap gap-2">
          {PROJECT_TRACKS.map((track) => {
            const isSelected = selectedTrack === track.id;
            return (
              <button
                key={track.id}
                type="button"
                onClick={() => setSelectedTrack(track.id)}
                className={cn(
                  "px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 border",
                  isSelected
                    ? "bg-[#101217] text-[#F4F4F0] border-[currentColor] shadow-[0_0_15px_rgba(102,140,255,0.2)] font-semibold"
                    : "bg-[#090A0C] border-[#292C33] text-[#92969F] hover:text-[#F4F4F0] hover:border-[#668CFF]/40"
                )}
                style={{ color: isSelected ? track.color : undefined }}
              >
                {track.label}
              </button>
            );
          })}
        </div>
        <input type="hidden" name="projectInterest" value={selectedTrack} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[11px] font-mono uppercase tracking-wider text-[#92969F] mb-1.5">
            Your Name *
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Dr. Ellen Ochoa"
            className="w-full bg-[#090A0C] border border-[#292C33] rounded-lg px-3.5 py-2.5 text-sm text-[#F4F4F0] placeholder-[#92969F]/40 focus:outline-none focus:border-[#668CFF] focus:ring-1 focus:ring-[#668CFF] transition-colors"
          />
          {state.errors?.name && (
            <p className="text-xs text-rose-400 mt-1 font-mono">{state.errors.name[0]}</p>
          )}
        </div>

        <div>
          <label className="block text-[11px] font-mono uppercase tracking-wider text-[#92969F] mb-1.5">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="name@institute.org"
            className="w-full bg-[#090A0C] border border-[#292C33] rounded-lg px-3.5 py-2.5 text-sm text-[#F4F4F0] placeholder-[#92969F]/40 focus:outline-none focus:border-[#668CFF] focus:ring-1 focus:ring-[#668CFF] transition-colors"
          />
          {state.errors?.email && (
            <p className="text-xs text-rose-400 mt-1 font-mono">{state.errors.email[0]}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[11px] font-mono uppercase tracking-wider text-[#92969F] mb-1.5">
            Organization / Lab (Optional)
          </label>
          <input
            type="text"
            name="organization"
            placeholder="Institute, University, or Company"
            className="w-full bg-[#090A0C] border border-[#292C33] rounded-lg px-3.5 py-2.5 text-sm text-[#F4F4F0] placeholder-[#92969F]/40 focus:outline-none focus:border-[#668CFF] focus:ring-1 focus:ring-[#668CFF] transition-colors"
          />
        </div>

        <div>
          <label className="block text-[11px] font-mono uppercase tracking-wider text-[#92969F] mb-1.5">
            Stakeholder Category *
          </label>
          <select
            name="category"
            defaultValue="Researcher"
            required
            className="w-full bg-[#090A0C] border border-[#292C33] rounded-lg px-3.5 py-2.5 text-sm text-[#F4F4F0] focus:outline-none focus:border-[#668CFF] focus:ring-1 focus:ring-[#668CFF] transition-colors"
          >
            <option value="Researcher">Researcher</option>
            <option value="Engineer">Engineer</option>
            <option value="Industrial Partner">Industrial Partner</option>
            <option value="Institution">Institution</option>
            <option value="Early Customer">Early Customer</option>
            <option value="Prospective Team Member">Prospective Team Member</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-[11px] font-mono uppercase tracking-wider text-[#92969F] mb-1.5">
          Collaboration Context or Problem Scope * (min. 20 chars)
        </label>
        <textarea
          name="message"
          required
          rows={4}
          placeholder="Describe your research background, technical proposal, or problem you want to explore..."
          className="w-full bg-[#090A0C] border border-[#292C33] rounded-lg px-3.5 py-2.5 text-sm text-[#F4F4F0] placeholder-[#92969F]/40 focus:outline-none focus:border-[#668CFF] focus:ring-1 focus:ring-[#668CFF] transition-colors resize-y"
        />
        {state.errors?.message && (
          <p className="text-xs text-rose-400 mt-1 font-mono">{state.errors.message[0]}</p>
        )}
      </div>

      <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <button
          type="submit"
          disabled={isPending}
          className="btn-primary group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-mono text-xs uppercase tracking-wider font-semibold disabled:opacity-50"
        >
          {isPending ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin text-[#090A0C]" />
              <span className="text-[#090A0C]">Transmitting...</span>
            </>
          ) : (
            <>
              <span className="text-[#090A0C]">Transmit Inquiry</span>
              <ArrowUpRight className="w-4 h-4 text-[#090A0C] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </>
          )}
        </button>

        <p className="text-[11px] text-[#92969F] font-mono">
          Encrypted &middot; Strictly zero spam &middot; <a href="/privacy" className="text-[#668CFF] underline">Privacy</a>
        </p>
      </div>

      {state.message && (
        <div
          className={`p-4 rounded-xl border text-xs flex items-start gap-2.5 ${
            state.ok
              ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-200'
              : 'bg-rose-950/30 border-rose-500/40 text-rose-200'
          }`}
        >
          {state.ok ? (
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          ) : (
            <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
          )}
          <span>{state.message}</span>
        </div>
      )}
    </form>
  )
}
