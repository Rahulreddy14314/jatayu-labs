import Navbar from '@/components/landing/navbar'
import Footer from '@/components/landing/footer'
import { SectionLabel } from '@/components/site'
import { CollabForm } from '@/components/collab-form'
import { ArrowUpRight, Mail, MapPin, ShieldCheck } from 'lucide-react'

export const metadata = {
  title: 'Collaborate | Jatayu Labs',
  description: 'Collaborator intake and inquiry routing for Jatayu Labs.',
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="shell max-w-[1240px] mx-auto px-6 md:px-8 py-16 relative">
        <section className="page-hero border-b border-[#292C33] pb-12 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#292C33] bg-[#101217] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#668CFF]" />
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#92969F]">
              COLLABORATOR INTAKE
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-normal text-[#F4F4F0] tracking-tight leading-[1] mb-6">
            Bring us a<br />
            <em className="text-[#92969F] font-normal italic font-serif">difficult problem.</em>
          </h1>

          <p className="text-base sm:text-lg text-[#92969F] max-w-2xl leading-relaxed">
            We collaborate with researchers, engineers, industrial partners, institutions, and early customers across our four core initiatives.
          </p>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start py-6">
          {/* Left Column: Direct channels and descriptions */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <SectionLabel index="01">Inquiry Tracks</SectionLabel>
              <div className="space-y-4 mt-4 text-xs text-[#92969F]">
                <div
                  style={{ ['--card-aura' as string]: '#10F5A0' }}
                  className="metallic-border ambient-beam cryo-glass p-5 rounded-2xl"
                >
                  <h4 className="text-sm font-medium text-[#F4F4F0] mb-1 flex items-center justify-between">
                    <span>Research Collaboration</span>
                    <span className="text-[10px] font-mono text-[#10F5A0]">Bio-Bus (OI)</span>
                  </h4>
                  <p className="m-0 leading-relaxed text-xs">
                    Organoid intelligence (OI), biological computing interfaces, and cognitive representation modeling.
                  </p>
                </div>

                <div
                  style={{ ['--card-aura' as string]: '#00F0FF' }}
                  className="metallic-border ambient-beam cryo-glass p-5 rounded-2xl"
                >
                  <h4 className="text-sm font-medium text-[#F4F4F0] mb-1 flex items-center justify-between">
                    <span>Industrial &amp; Pilot Partnerships</span>
                    <span className="text-[10px] font-mono text-[#00F0FF]">Project SENSE</span>
                  </h4>
                  <p className="m-0 leading-relaxed text-xs">
                    Deploying Project SENSE waist-worn tactile navigation in high-noise, industrial, or assistive environments.
                  </p>
                </div>

                <div
                  style={{ ['--card-aura' as string]: '#FF9E3B' }}
                  className="metallic-border ambient-beam cryo-glass p-5 rounded-2xl"
                >
                  <h4 className="text-sm font-medium text-[#F4F4F0] mb-1 flex items-center justify-between">
                    <span>Institutional Pilots</span>
                    <span className="text-[10px] font-mono text-[#FF9E3B]">SkillSynthesis</span>
                  </h4>
                  <p className="m-0 leading-relaxed text-xs">
                    University career centers and training academies exploring SkillSynthesis employability intelligence.
                  </p>
                </div>
              </div>
            </div>

            <div
              style={{ ['--card-aura' as string]: '#668CFF' }}
              className="metallic-border ambient-beam cryo-glass p-6 rounded-2xl space-y-3"
            >
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#668CFF] font-semibold">
                DIRECT INBOX
              </div>
              <p className="text-xs text-[#92969F] leading-relaxed m-0">
                Prefer direct correspondence? Our engineering and research core monitors this inbox continuously:
              </p>
              <a
                href="mailto:hello@jatayulabs.com"
                className="inline-flex items-center gap-2 text-sm text-[#F4F4F0] hover:text-[#668CFF] font-mono transition-colors pt-1"
              >
                <Mail className="w-4 h-4 text-[#668CFF]" /> hello@jatayulabs.com <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Intake Form */}
          <div
            style={{ ['--card-aura' as string]: '#668CFF' }}
            className="lg:col-span-7 metallic-border ambient-beam cryo-glass p-6 sm:p-9 rounded-2xl shadow-2xl"
          >
            <div className="mb-6 pb-4 border-b border-[#292C33]">
              <h3 className="text-xl font-normal text-[#F4F4F0] m-0">Collaborator Intake</h3>
              <p className="text-xs text-[#92969F] mt-1 m-0">
                Submissions are reviewed directly by the appropriate project team.
              </p>
            </div>
            <CollabForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
