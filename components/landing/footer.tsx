'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Container from './container';
import { JatayuMonogram } from './navbar';
import { projects } from '@/lib/projects';

export default function Footer() {
  return (
    <footer className="border-t border-[#292C33] bg-[#090A0C] text-[#92969F] text-xs py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-[#292C33]">
          {/* Col 1: Wordmark & Statement */}
          <div className="md:col-span-5 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 text-xs font-semibold tracking-[0.18em] text-[#F4F4F0] hover:text-[#668CFF] transition-colors"
            >
              <JatayuMonogram />
              <span className="font-heading">JATAYU LABS</span>
            </Link>

            <p className="text-xs text-[#92969F] leading-relaxed max-w-sm">
              Building technologies at the edge of human potential across human-computer interaction, biological intelligence, and human capability.
            </p>

            <div className="pt-2 flex items-center gap-2 font-mono text-[11px] text-[#92969F]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Independent Frontier Technology &amp; Research Lab</span>
            </div>
          </div>

          {/* Col 2, 3, 4: Links */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#668CFF] mb-3">
                Portfolio
              </div>
              <ul className="space-y-2.5">
                {projects.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/projects/${p.slug}`}
                      className="hover:text-[#F4F4F0] transition-colors"
                    >
                      {p.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#668CFF] mb-3">
                Exploration
              </div>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/projects" className="hover:text-[#F4F4F0] transition-colors">
                    All Projects
                  </Link>
                </li>
                <li>
                  <Link href="/research" className="hover:text-[#F4F4F0] transition-colors">
                    Research Map &amp; OI
                  </Link>
                </li>
                <li>
                  <Link href="/journal" className="hover:text-[#F4F4F0] transition-colors">
                    Lab Log &amp; Benchmarks
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-[#F4F4F0] transition-colors">
                    About the Lab
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#668CFF] mb-3">
                Engage
              </div>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/contact" className="hover:text-[#F4F4F0] transition-colors">
                    Collaborate
                  </Link>
                </li>
                <li>
                  <a
                    href="mailto:hello@jatayulabs.com"
                    className="hover:text-[#F4F4F0] transition-colors"
                  >
                    hello@jatayulabs.com
                  </a>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-[#F4F4F0] transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono uppercase tracking-widest text-[#92969F]">
          <div>&copy; {new Date().getFullYear()} Jatayu Labs. All rights reserved.</div>
          <div>No fabricated metrics &middot; Transparent research milestones</div>
        </div>
      </Container>
    </footer>
  );
}
