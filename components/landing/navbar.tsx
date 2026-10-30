'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Search, Command } from "lucide-react";
import { cn } from "@/lib/utils";

export function JatayuMonogram({ className }: { className?: string }) {
  return (
    <span className={cn("inline-grid place-items-center text-[#668CFF] w-6 h-6 shrink-0", className)} aria-hidden="true">
      <svg viewBox="0 0 28 28" fill="none" className="w-full h-full">
        <path
          d="M4 21.5 13.5 4l3.2 7.2L24 7.5l-5.7 9.1-7.1-3.2L4 21.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="m11.2 13.4 5.5-2.2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </span>
  );
}

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
    { name: "Project SENSE", desc: "Wearable Spatial Interface", href: "/projects/sense", track: "Prototype" },
    { name: "Bio-Bus", desc: "Organoid Intelligence Interface", href: "/projects/bio-bus", track: "Research" },
    { name: "Uploaded Intelligence", desc: "Cognitive Memory Systems", href: "/projects/uploaded-intelligence", track: "Concept" },
    { name: "SkillSynthesis", desc: "Employability Intelligence AI", href: "/projects/skillsynthesis", track: "Product" },
    { name: "Research Map", desc: "Interconnected Frontier Map", href: "/research", track: "Map" },
    { name: "Lab Log", desc: "Empirical Workbench Feed", href: "/journal", track: "Log" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
          scrolled
            ? "bg-[#090A0C]/80 backdrop-blur-xl border-[#292C33] shadow-[0_10px_30px_rgba(0,0,0,0.5)] py-3"
            : "bg-transparent border-transparent py-5"
        )}
      >
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Logo & Wordmark */}
          <Link
            href="/"
            className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.18em] text-[#F4F4F0] hover:text-[#668CFF] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#668CFF]"
          >
            <JatayuMonogram />
            <span className="font-heading">JATAYU LABS</span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-wider text-[#92969F]">
            {navLinks.map(({ label, href }) => {
              const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
              return (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "py-1 transition-colors hover:text-[#F4F4F0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#668CFF]",
                    isActive ? "text-[#F4F4F0] font-semibold border-b border-[#668CFF]" : ""
                  )}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Raycast-style ⌘K button & Collaborate link */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => setPaletteOpen(true)}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#292C33] bg-[#101217]/80 text-[11px] font-mono text-[#92969F] hover:text-[#F4F4F0] hover:border-[#668CFF]/50 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#668CFF]"
              aria-label="Open command palette"
            >
              <Search className="w-3.5 h-3.5 text-[#668CFF]" />
              <span>Lab Index</span>
              <kbd className="px-1.5 py-0.5 rounded bg-[#090A0C] border border-[#292C33] text-[9px] text-[#92969F]">⌘K</kbd>
            </button>

            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#292C33] bg-[#101217] text-[11px] font-mono text-[#F4F4F0] hover:border-[#668CFF] hover:text-[#668CFF] transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Collaborate</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#668CFF]" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#92969F] hover:text-[#F4F4F0] p-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#668CFF]"
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
          <div className="md:hidden border-b border-[#292C33] bg-[#090A0C]/95 backdrop-blur-xl px-6 py-4 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setPaletteOpen(true);
              }}
              className="flex items-center justify-between w-full py-2 text-xs font-mono text-[#668CFF] border-b border-[#292C33]/60"
            >
              <span>Search Lab Index</span>
              <kbd className="px-1.5 py-0.5 rounded bg-[#101217] border border-[#292C33] text-[9px]">⌘K</kbd>
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
                className="btn-primary flex items-center justify-center gap-2 w-full py-2.5 rounded text-xs font-semibold"
              >
                <span className="text-[#090A0C]">Collaborator Intake &rarr;</span>
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* ⌘K Command Palette Modal */}
      {paletteOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-start justify-center pt-24 px-4"
          onClick={() => setPaletteOpen(false)}
        >
          <div
            className="w-full max-w-lg cryo-glass rounded-xl border border-[#292C33] shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[#292C33] bg-[#090A0C]/90">
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
                QUICK DIRECTORY
              </div>
              {quickJumpItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setPaletteOpen(false)}
                  className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-[#668CFF]/10 border border-transparent hover:border-[#668CFF]/30 transition-colors text-xs group"
                >
                  <div>
                    <span className="text-[#F4F4F0] font-medium block">{item.name}</span>
                    <span className="text-[11px] text-[#92969F]">{item.desc}</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#101217] border border-[#292C33] text-[#668CFF]">
                    {item.track}
                  </span>
                </Link>
              ))}
            </div>

            <div className="px-4 py-2.5 border-t border-[#292C33] bg-[#090A0C] flex items-center justify-between text-[10px] font-mono text-[#92969F]">
              <span>Jatayu Labs Directory</span>
              <span>↑↓ Navigate &middot; ↵ Select</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
