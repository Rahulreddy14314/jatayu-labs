import Navbar from '@/components/landing/navbar'
import Footer from '@/components/landing/footer'
import { SectionLabel } from '@/components/site'
import { ShieldCheck, Lock, EyeOff, Server } from 'lucide-react'

export const metadata = {
  title: 'Privacy Policy | Jatayu Labs',
  description: 'Plainly stated data privacy and subscriber policy for Jatayu Labs.',
}

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="shell max-w-[1240px] mx-auto px-6 md:px-8 py-16 relative">
        <section className="page-hero border-b border-[#292C33] pb-12 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#292C33] bg-[#101217] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#668CFF]" />
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#92969F]">
              LEGAL &amp; GOVERNANCE
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-normal text-[#F4F4F0] tracking-tight leading-[1] mb-6">
            Privacy,<br />
            <em className="text-[#92969F] font-normal italic font-serif">plainly stated.</em>
          </h1>

          <p className="text-base sm:text-lg text-[#92969F] max-w-2xl leading-relaxed">
            We collect only what is necessary to communicate with collaborators, partners, and researchers. We never sell or monetize personal data.
          </p>
        </section>

        <section className="py-8 space-y-12 max-w-3xl">
          <div>
            <SectionLabel index="01">Information We Collect</SectionLabel>
            <div className="mt-4 space-y-3 text-sm text-[#92969F] leading-relaxed">
              <p className="m-0">
                When you submit an inquiry through our Collaborator Intake form, we collect your name, email address, optional organization name, stakeholder category, project interest, and message content.
              </p>
              <p className="m-0">
                If you subscribe to Lab Log updates or research dispatches, we store only your verified email address.
              </p>
            </div>
          </div>

          <div>
            <SectionLabel index="02">How We Use Your Data</SectionLabel>
            <div className="mt-4 space-y-3 text-sm text-[#92969F] leading-relaxed">
              <p className="m-0">
                Information submitted through our intake pipeline is used solely to:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs">
                <li>Evaluate project collaboration fit and respond to technical proposals.</li>
                <li>Coordinate pilot deployments for Project SENSE and SkillSynthesis.</li>
                <li>Send occasional, requested research updates and Lab Log publications.</li>
              </ul>
            </div>
          </div>

          <div>
            <SectionLabel index="03">Data Protection &amp; Retention</SectionLabel>
            <div className="mt-4 space-y-3 text-sm text-[#92969F] leading-relaxed">
              <p className="m-0">
                We do not employ third-party advertising trackers or behavioral tracking cookies. Inquiry data is retained only for the duration of the collaborative evaluation or active partnership.
              </p>
              <p className="m-0">
                You may request complete deletion of your contact records or unsubscribe from updates at any time by emailing <a href="mailto:hello@jatayulabs.com" className="text-[#668CFF] underline">hello@jatayulabs.com</a>.
              </p>
            </div>
          </div>

          <div
            style={{ ['--card-aura' as string]: '#668CFF' }}
            className="metallic-border ambient-beam cryo-glass p-6 sm:p-7 rounded-2xl flex items-start gap-4 shadow-lg"
          >
            <Lock className="w-5 h-5 text-[#668CFF] shrink-0 mt-0.5" />
            <div className="text-xs text-[#92969F] leading-relaxed">
              <strong className="text-[#F4F4F0] block mb-1">Zero Third-Party Data Monetization</strong>
              Jatayu Labs does not sell, rent, lease, or trade personal contact information to any data brokers or commercial advertisers under any circumstances.
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
