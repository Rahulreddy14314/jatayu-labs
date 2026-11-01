'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Search, Command } from "lucide-react";
import { cn } from "@/lib/utils";
import { JatayuLogo } from "./JatayuLogo";

export { JatayuLogo as JatayuMonogram };

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setPaletteOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navLinks = [
    { label: "Projects", href: "/projects" },
    { label: "Research", href: "/research" },
    { label: "Journal", href: "/journal" },
    { label: "About", href: "/about" },
    { label: "Collaborate", href: "/contact" },
  ];

  const quickJumpItems = [
    { name: "Project SENSE", desc: "Wearable Tactile & EEG Loop", href: "/projects/sense", track: "Prototype" },
    { name: "Bio-Bus", desc: "Organoid Intelligence Interface", href: "/projects/bio-bus", track: "Research" },
    { name: "Uploaded Intelligence", desc: "Cognitive Memory Lattices", href: "/projects/uploaded-intelligence", track: "Concept" },
    { name: "SkillSynth", desc: "Conversational Intelligence AI", href: "/projects/skillsynth", track: "Product" },
    { name: "Research Matrix", desc: "4-Domain Converging Network", href: "/research", track: "Matrix" },
    { name: "Lab Log Feed", desc: "Empirical Workbench Dispatches", href: "/journal", track: "Dispatches" },
  ];

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-[100] pointer-events-none pt-4 pb-8 bg-gradient-to-b from-[#050608] via-[#050608]/90 to-transparent">
        <div className="mx-auto max-w-6xl px-4 pointer-events-auto">
          <nav
            aria-label="Primary Navigation"
            className="relative z-[101] flex flex-col rounded-full px-5 sm:px-7 py-3 bg-[#090A0C]/95 backdrop-blur-2xl border border-white/[0.12] border-t-white/[0.22] shadow-[0_20px_50px_rgba(0,0,0,0.95),0_0_30px_rgba(37,84,255,0.12)]"
          >
            <div className="flex items-center justify-between gap-4 w-full">
              {/* Brand Logo & Wide-Tracked Wordmark */}
              <Link
                href="/"
                className="flex items-center gap-3 shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4FF00] rounded-lg"
              >
                <JatayuLogo className="w-6 h-6" />
                <span className="tracking-[0.22em] font-heading font-semibold text-xs sm:text-sm text-[#F4F4F0] hover:text-white transition-colors">
                  JATAYU LABS
                </span>
              </Link>

              {/* Desktop Navigation Links */}
              <div className="hidden md:flex items-center gap-6 lg:gap-8 text-xs font-mono tracking-wider text-[#92969F]">
                {navLinks.map(({ label, href }) => {
                  const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
                  return (
                    <Link
                      key={href}
                      href={href}
                      className={cn(
                        "py-1 transition-colors hover:text-[#F4F4F0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4FF00]",
                        isActive ? "text-[#F4F4F0] font-semibold border-b border-[#D4FF00]" : ""
                      )}
                    >
                      {label}
                    </Link>
                  );
                })}
              </div>

              {/* Right Action: Telemetry Indicator + ⌘K + Collaborate */}
              <div className="hidden lg:flex items-center gap-3.5">
                {/* Surgical Acid Lime Live Telemetry Indicator */}
                <div className="flex items-center gap-2 text-[10px] font-mono tracking-wider text-[#92969F] px-3 py-1 rounded-full bg-[#050608]/80 border border-[#292C33]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00] animate-pulse" />
                  <span>LAB TELEMETRY: <strong className="text-[#F4F4F0] font-semibold">ACTIVE</strong></span>
                </div>

                {/* ⌘K Trigger */}
                <button
                  type="button"
                  onClick={() => setPaletteOpen(true)}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#292C33] bg-[#050608]/60 text-[11px] font-mono text-[#92969F] hover:text-[#F4F4F0] hover:border-[#668CFF] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4FF00]"
                  aria-label="Open command palette"
                >
                  <Search className="w-3.5 h-3.5 text-[#668CFF]" />
                  <kbd className="px-1.5 py-0.5 rounded bg-[#090A0C] border border-[#292C33] text-[9px] text-[#92969F]">⌘K</kbd>
                </button>

                {/* Sleek Glass CTA */}
                <Link
                  href="/contact"
                  className="btn-secondary group px-4 py-1.5 text-xs font-mono font-medium text-[#F4F4F0]"
                >
                  <span>Collaborate</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#668CFF] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-[#92969F] hover:text-[#F4F4F0] p-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4FF00]"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-[#F4F4F0]" />
                ) : (
                  <Menu className="w-5 h-5 text-[#F4F4F0]" />
                )}
              </button>
            </div>

            {/* Mobile Drawer */}
            {mobileMenuOpen && (
              <div className="md:hidden mt-4 pt-4 border-t border-[#292C33] px-2 space-y-3 w-full">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setPaletteOpen(true);
                  }}
                  className="flex items-center justify-between w-full py-2 text-xs font-mono text-[#668CFF] border-b border-[#292C33]/60"
                >
                  <span>Search Lab Index</span>
                  <kbd className="px-1.5 py-0.5 rounded bg-[#050608] border border-[#292C33] text-[9px]">⌘K</kbd>
                </button>

                {navLinks.map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm text-[#92969F] hover:text-[#F4F4F0] border-b border-[#292C33]/50 last:border-b-0"
                  >
                    <span>{label}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#668CFF]" />
                  </Link>
                ))}

                <div className="pt-2">
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="btn-primary flex items-center justify-center gap-2 w-full py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider shadow-md hover:bg-[#D4FF00]"
                    style={{ backgroundColor: '#F4F4F0', color: '#050608' }}
                  >
                    <span className="font-semibold text-[#050608]" style={{ color: '#050608' }}>Collaborate &rarr;</span>
                  </Link>
                </div>
              </div>
            )}
          </nav>
        </div>
      </header>

      {/* ⌘K Command Palette Modal */}
      {paletteOpen && (
        <div
          className="fixed inset-0 z-[150] bg-black/80 backdrop-blur-md flex items-start justify-center pt-24 px-4"
          onClick={() => setPaletteOpen(false)}
        >
          <div
            className="w-full max-w-lg optical-glass rounded-2xl border border-white/10 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[#292C33] bg-[#050608]/90">
              <Search className="w-4 h-4 text-[#668CFF]" />
              <input
                type="text"
                autoFocus
                placeholder="Search lab initiatives, research nodes, telemetry..."
                className="bg-transparent border-0 text-sm text-[#F4F4F0] placeholder-[#92969F]/50 focus:outline-none w-full"
              />
              <kbd className="text-[10px] font-mono text-[#92969F] bg-[#101217] border border-[#292C33] px-1.5 py-0.5 rounded">
                ESC
              </kbd>
            </div>

            <div className="p-2 max-h-80 overflow-y-auto space-y-1">
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#92969F] px-3 py-1.5">
                LAB INITIATIVES &amp; VECTORS
              </div>
              {quickJumpItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setPaletteOpen(false)}
                  className="flex items-center justify-between px-3 py-2 rounded-xl hover:bg-[#668CFF]/10 border border-transparent hover:border-[#668CFF]/30 transition-colors text-xs group"
                >
                  <div>
                    <span className="text-[#F4F4F0] font-medium block">{item.name}</span>
                    <span className="text-[11px] text-[#92969F]">{item.desc}</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#050608] border border-[#292C33] text-[#668CFF]">
                    {item.track}
                  </span>
                </Link>
              ))}
            </div>

            <div className="px-4 py-2.5 border-t border-[#292C33] bg-[#050608] flex items-center justify-between text-[10px] font-mono text-[#92969F]">
              <span>Jatayu Labs Directory</span>
              <span>↑↓ Navigate &middot; ↵ Select</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
