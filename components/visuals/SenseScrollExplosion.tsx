'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform, useReducedMotion } from 'motion/react';
import { Layers, Activity, Zap, Cpu, Compass, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

export function SenseScrollExplosion() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 75,
    damping: 22,
    mass: 0.5,
  });

  // Track live numeric scroll progress for HUD readout
  const [progressPct, setProgressPct] = useState(0);

  useEffect(() => {
    const unsubscribe = smoothProgress.on('change', (latest) => {
      setProgressPct(Math.min(100, Math.max(0, Math.round(latest * 100))));
    });
    return () => unsubscribe();
  }, [smoothProgress]);

  // LAYER A: BACKDROP CROSSFADES
  const beltOpacity = useTransform(smoothProgress, [0, 0.22, 0.32], [0.65, 0.65, 0]);
  const beltScale = useTransform(smoothProgress, [0, 0.3], [1, 1.08]);

  const teardownOpacity = useTransform(smoothProgress, [0.26, 0.34, 0.68, 0.76], [0, 0.7, 0.7, 0]);
  const neuroloopOpacity = useTransform(smoothProgress, [0.68, 0.78, 1], [0, 0.75, 0.75]);

  // LAYER B: 3D HARDWARE POD SEPARATION TRANSFORMS
  // Pod Component 01: Outer Tactile Cap & Cobalt LED Arc
  const c1X = useTransform(smoothProgress, [0.08, 0.75], [0, -260]);
  const c1Z = useTransform(smoothProgress, [0.08, 0.75], [0, 110]);
  const c1RotY = useTransform(smoothProgress, [0.08, 0.75], [-15, -32]);
  const pin1Opacity = useTransform(smoothProgress, [0.15, 0.22, 0.75, 0.82], [0, 1, 1, 0]);

  // Pod Component 02: Cylindrical LRA / ERM Haptic Motor
  const c2X = useTransform(smoothProgress, [0.08, 0.75], [0, -130]);
  const c2Z = useTransform(smoothProgress, [0.08, 0.75], [0, 55]);
  const c2RotY = useTransform(smoothProgress, [0.08, 0.75], [-15, -28]);
  const pin2Opacity = useTransform(smoothProgress, [0.25, 0.32, 0.75, 0.82], [0, 1, 1, 0]);

  // Pod Component 03: Internal Carrier Ring
  const c3X = useTransform(smoothProgress, [0.08, 0.75], [0, 0]);
  const c3Z = useTransform(smoothProgress, [0.08, 0.75], [0, 10]);
  const c3RotY = useTransform(smoothProgress, [0.08, 0.75], [-15, -24]);
  const pin3Opacity = useTransform(smoothProgress, [0.35, 0.42, 0.75, 0.82], [0, 1, 1, 0]);

  // Pod Component 04: ESP32 Control Unit PCB
  const c4X = useTransform(smoothProgress, [0.08, 0.75], [0, 135]);
  const c4Z = useTransform(smoothProgress, [0.08, 0.75], [0, -45]);
  const c4RotY = useTransform(smoothProgress, [0.08, 0.75], [-15, -20]);
  const pin4Opacity = useTransform(smoothProgress, [0.45, 0.52, 0.75, 0.82], [0, 1, 1, 0]);

  // Pod Component 05: LiPo Cell & Strap Housing
  const c5X = useTransform(smoothProgress, [0.08, 0.75], [0, 270]);
  const c5Z = useTransform(smoothProgress, [0.08, 0.75], [0, -100]);
  const c5RotY = useTransform(smoothProgress, [0.08, 0.75], [-15, -16]);
  const pin5Opacity = useTransform(smoothProgress, [0.55, 0.62, 0.75, 0.82], [0, 1, 1, 0]);

  // Axial Laser Line Opacity
  const axisLineOpacity = useTransform(smoothProgress, [0.08, 0.16, 0.75, 0.82], [0, 0.85, 0.85, 0]);

  // Stage overall opacity: fades smoothly when near bottom collaboration form
  const stageFade = useTransform(smoothProgress, [0.88, 0.98], [1, 0.2]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none">
      {/* =========================================================================
          LAYER A: DYNAMIC SCROLL-DRIVEN OPTICAL BACKDROP CROSSFADE
         ========================================================================= */}
      {/* 1. Assembled Belt Stage (Scroll 0.00 -> 0.30) */}
      <motion.div
        style={{
          opacity: beltOpacity,
          scale: beltScale,
        }}
        className="absolute inset-0 bg-[url('/images/sense-hardware-grid.jpg')] bg-[length:162%_202%] bg-[position:0%_0%] bg-no-repeat"
      />

      {/* 2. Exploded Teardown Stage (Scroll 0.30 -> 0.70) */}
      <motion.div
        style={{
          opacity: teardownOpacity,
        }}
        className="absolute inset-0 bg-[url('/images/sense-hardware-grid.jpg')] bg-[length:265%_202%] bg-[position:100%_0%] bg-no-repeat"
      />

      {/* 3. SENSE NeuroLoop Closed-Loop Stage (Scroll 0.70 -> 1.00) */}
      <motion.div
        style={{
          opacity: neuroloopOpacity,
        }}
        className="absolute inset-0 bg-[url('/images/sense-neuroloop.jpg')] bg-cover bg-center bg-no-repeat"
      />

      {/* Optical Vignette & Dark Tinting Overlays (Maintains Text Readability) */}
      <div className="absolute inset-0 bg-[#050608]/75 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-transparent to-[#050608]/90 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(37,84,255,0.18)_0%,transparent_60%)] pointer-events-none" />

      {/* =========================================================================
          LAYER B: THE 5-PART INTERACTIVE 3D HARDWARE POD THAT OPENS AS YOU SCROLL
         ========================================================================= */}
      <motion.div
        style={{ opacity: stageFade }}
        className="absolute inset-0 flex items-center justify-center lg:justify-end lg:pr-24"
      >
        <div
          className="relative w-[340px] sm:w-[460px] h-[340px] sm:h-[460px] flex items-center justify-center"
          style={{
            perspective: 1400,
          }}
        >
          {/* Main 3D Preserve Stage */}
          <div
            className="relative w-full h-full flex items-center justify-center"
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Axial Laser Guide Line Through Pod Centers */}
            <motion.div
              style={{ opacity: axisLineOpacity }}
              className="absolute w-[680px] h-[1px] bg-gradient-to-r from-transparent via-[#668CFF] to-transparent pointer-events-none z-10"
            >
              <div className="absolute inset-0 border-t border-dashed border-[#668CFF]/60" />
              {/* Traveling Acid Lime Data Pulse */}
              <motion.div
                animate={shouldReduceMotion ? false : { x: [-300, 300] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'linear' }}
                className="w-8 h-[2px] bg-[#D4FF00] shadow-[0_0_8px_#D4FF00]"
              />
            </motion.div>

            {/* COMPONENT 01: Outer Matte-Black Tactile Cap & Cobalt LED Arc */}
            <motion.div
              style={
                shouldReduceMotion
                  ? {}
                  : {
                      x: c1X,
                      z: c1Z,
                      rotateY: c1RotY,
                      transformStyle: 'preserve-3d',
                    }
              }
              className="absolute z-50 flex items-center justify-center"
            >
              {/* Physical Cap Disc */}
              <div className="relative w-36 h-36 rounded-full bg-gradient-to-br from-[#1A1D24] via-[#0E1015] to-[#050608] border-2 border-white/[0.16] shadow-[0_20px_50px_rgba(0,0,0,0.9),inset_0_2px_4px_rgba(255,255,255,0.25)] flex items-center justify-center">
                {/* Cobalt LED Arc Indicator */}
                <div className="absolute inset-2.5 rounded-full border-t-2 border-r-2 border-[#668CFF] shadow-[0_0_15px_#668CFF] opacity-90" />
                {/* Center Tactile Dimple */}
                <div className="w-12 h-12 rounded-full bg-[#07080A] border border-[#292C33] shadow-inner flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#668CFF] shadow-[0_0_6px_#668CFF]" />
                </div>
              </div>

              {/* Callout Pin 01 */}
              <motion.div
                style={{ opacity: pin1Opacity }}
                className="absolute -top-16 -left-20 pointer-events-auto"
              >
                <div className="px-3 py-1.5 rounded-lg bg-[#090A0C]/95 border border-[#668CFF]/50 shadow-xl backdrop-blur-md text-[10px] font-mono text-[#F4F4F0] whitespace-nowrap space-y-0.5">
                  <div className="text-[#668CFF] font-semibold">01 // TACTILE CAP &amp; LED ARC</div>
                  <div className="text-[#92969F] text-[9px]">Directional visual + skin-contact interface</div>
                </div>
                <div className="w-[1px] h-6 bg-[#668CFF]/60 ml-6" />
              </motion.div>
            </motion.div>

            {/* COMPONENT 02: Cylindrical LRA / ERM Haptic Actuator Motor */}
            <motion.div
              style={
                shouldReduceMotion
                  ? {}
                  : {
                      x: c2X,
                      z: c2Z,
                      rotateY: c2RotY,
                      transformStyle: 'preserve-3d',
                    }
              }
              className="absolute z-40 flex items-center justify-center"
            >
              {/* Motor Cylinder */}
              <div className="relative w-28 h-28 rounded-full bg-gradient-to-r from-[#D0D4DC] via-[#92969F] to-[#50545C] border border-white/30 shadow-[0_15px_40px_rgba(0,0,0,0.85)] flex items-center justify-center">
                {/* Brass Center Rotor Shaft */}
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-200 via-amber-400 to-amber-700 border border-amber-300 shadow-md flex items-center justify-center">
                  <Zap className="w-3.5 h-3.5 text-[#050608]" />
                </div>
                {/* Vibration Pulse Rings */}
                <span className="absolute inset-0 rounded-full border border-[#D4FF00] animate-ping opacity-30" />
              </div>

              {/* Callout Pin 02 */}
              <motion.div
                style={{ opacity: pin2Opacity }}
                className="absolute -bottom-16 -left-16 pointer-events-auto"
              >
                <div className="w-[1px] h-6 bg-[#D4FF00]/60 ml-6" />
                <div className="px-3 py-1.5 rounded-lg bg-[#090A0C]/95 border border-[#D4FF00]/50 shadow-xl backdrop-blur-md text-[10px] font-mono text-[#F4F4F0] whitespace-nowrap space-y-0.5">
                  <div className="text-[#D4FF00] font-semibold">02 // HAPTIC ACTUATOR</div>
                  <div className="text-[#92969F] text-[9px]">High-torque directional vibration module (4 directions)</div>
                </div>
              </motion.div>
            </motion.div>

            {/* COMPONENT 03: Internal Acoustic Isolation Carrier Ring */}
            <motion.div
              style={
                shouldReduceMotion
                  ? {}
                  : {
                      x: c3X,
                      z: c3Z,
                      rotateY: c3RotY,
                      transformStyle: 'preserve-3d',
                    }
              }
              className="absolute z-30 flex items-center justify-center"
            >
              <div className="w-32 h-32 rounded-full border-4 border-[#292C33] bg-[#0E1015]/80 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.8)] flex items-center justify-center">
                <div className="w-20 h-20 rounded-full border border-dashed border-[#668CFF]/40" />
                {/* Contact Pins */}
                <div className="absolute top-2 w-1.5 h-1.5 rounded-full bg-amber-400" />
                <div className="absolute bottom-2 w-1.5 h-1.5 rounded-full bg-amber-400" />
                <div className="absolute left-2 w-1.5 h-1.5 rounded-full bg-amber-400" />
                <div className="absolute right-2 w-1.5 h-1.5 rounded-full bg-amber-400" />
              </div>

              {/* Callout Pin 03 */}
              <motion.div
                style={{ opacity: pin3Opacity }}
                className="absolute -top-16 pointer-events-auto"
              >
                <div className="px-3 py-1.5 rounded-lg bg-[#090A0C]/95 border border-[#668CFF]/50 shadow-xl backdrop-blur-md text-[10px] font-mono text-[#F4F4F0] whitespace-nowrap space-y-0.5">
                  <div className="text-[#668CFF] font-semibold">03 // ISOLATION CARRIER</div>
                  <div className="text-[#92969F] text-[9px]">Couples vibration energy directly into waist axis</div>
                </div>
                <div className="w-[1px] h-6 bg-[#668CFF]/60 mx-auto" />
              </motion.div>
            </motion.div>

            {/* COMPONENT 04: Custom ESP32 Control Unit PCB */}
            <motion.div
              style={
                shouldReduceMotion
                  ? {}
                  : {
                      x: c4X,
                      z: c4Z,
                      rotateY: c4RotY,
                      transformStyle: 'preserve-3d',
                    }
              }
              className="absolute z-20 flex items-center justify-center"
            >
              <div className="relative w-32 h-32 rounded-xl bg-gradient-to-br from-[#0D1F17] via-[#091510] to-[#050608] border-2 border-emerald-500/40 shadow-[0_15px_40px_rgba(0,0,0,0.9)] flex items-center justify-center p-3">
                {/* Silver ESP32 RF Shield */}
                <div className="w-16 h-18 rounded bg-gradient-to-br from-[#C4C8D0] via-[#888C95] to-[#4A4E56] border border-white/40 shadow-inner flex flex-col items-center justify-center p-1 text-[7px] font-mono text-[#050608] font-bold">
                  <span>ESP32</span>
                  <Cpu className="w-3.5 h-3.5 my-0.5" />
                  <span>BLE 5.3</span>
                </div>
                {/* SMD Circuit traces */}
                <div className="absolute top-2 right-2 flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-300" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#668CFF]" />
                </div>
              </div>

              {/* Callout Pin 04 */}
              <motion.div
                style={{ opacity: pin4Opacity }}
                className="absolute -bottom-16 -right-16 pointer-events-auto"
              >
                <div className="w-[1px] h-6 bg-[#668CFF]/60 ml-6" />
                <div className="px-3 py-1.5 rounded-lg bg-[#090A0C]/95 border border-[#668CFF]/50 shadow-xl backdrop-blur-md text-[10px] font-mono text-[#F4F4F0] whitespace-nowrap space-y-0.5">
                  <div className="text-[#668CFF] font-semibold">04 // CONTROL UNIT (ESP32)</div>
                  <div className="text-[#92969F] text-[9px]">Wireless BLE signal decoding &amp; PWM synthesis</div>
                </div>
              </motion.div>
            </motion.div>

            {/* COMPONENT 05: LiPo Cell & Ballistic Strap Housing */}
            <motion.div
              style={
                shouldReduceMotion
                  ? {}
                  : {
                      x: c5X,
                      z: c5Z,
                      rotateY: c5RotY,
                      transformStyle: 'preserve-3d',
                    }
              }
              className="absolute z-10 flex items-center justify-center"
            >
              <div className="relative w-36 h-36 rounded-2xl bg-[#090A0C] border-2 border-[#292C33] shadow-[0_20px_60px_rgba(0,0,0,0.95)] flex items-center justify-center p-3">
                {/* LiPo Pouch Cell */}
                <div className="w-20 h-28 rounded bg-gradient-to-br from-[#E2E5EC] via-[#A0A4AE] to-[#60646E] border border-white/20 shadow-md flex flex-col items-center justify-between py-2 text-[6px] font-mono text-[#050608]">
                  <span className="font-bold">3.7V LiPo</span>
                  <div className="w-4 h-1 bg-amber-500 rounded-full" />
                  <span>500mAh</span>
                </div>
                {/* Strap Clips */}
                <div className="absolute -left-3 h-14 w-3 bg-[#1A1D24] rounded-l border-y border-l border-[#292C33]" />
                <div className="absolute -right-3 h-14 w-3 bg-[#1A1D24] rounded-r border-y border-r border-[#292C33]" />
              </div>

              {/* Callout Pin 05 */}
              <motion.div
                style={{ opacity: pin5Opacity }}
                className="absolute -top-16 -right-20 pointer-events-auto"
              >
                <div className="px-3 py-1.5 rounded-lg bg-[#090A0C]/95 border border-[#D4FF00]/50 shadow-xl backdrop-blur-md text-[10px] font-mono text-[#F4F4F0] whitespace-nowrap space-y-0.5">
                  <div className="text-[#D4FF00] font-semibold">05 // LiPo CELL &amp; STRAP MOUNT</div>
                  <div className="text-[#92969F] text-[9px]">Modular snap-in power &amp; adjustable comfort fit</div>
                </div>
                <div className="w-[1px] h-6 bg-[#D4FF00]/60 ml-6" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* =========================================================================
          LIVE SCROLL TEARDOWN PROGRESS HUD BAR (BOTTOM OF SCREEN)
         ========================================================================= */}
      <div className="absolute bottom-6 inset-x-4 sm:inset-x-8 max-w-4xl mx-auto pointer-events-auto z-40">
        <div className="p-3 sm:p-3.5 rounded-2xl optical-glass border border-white/[0.12] shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-[2px] bg-[#D4FF00] shadow-[0_0_6px_#D4FF00] animate-pulse" />
            <span className="text-[#F4F4F0] font-semibold uppercase tracking-wider text-[11px]">
              PROTOTYPE TEARDOWN STATE:
            </span>
            <span className="text-[#668CFF] text-[11px]">
              {progressPct < 25
                ? 'ASSEMBLED ISOMETRIC BELT'
                : progressPct < 75
                ? 'EXPLODED 5-PART MODULE TEARDOWN'
                : 'SENSE NEUROLOOP CLOSED-LOOP ARCHITECTURE'}
            </span>
          </div>

          {/* Dynamic Progress Bar */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <span className="text-[10px] text-[#92969F]">0%</span>
            <div className="relative w-full sm:w-48 h-2 rounded-full bg-[#101217] border border-[#292C33] overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#668CFF] via-[#2554FF] to-[#D4FF00] transition-all duration-150"
                style={{ width: `${progressPct}%` }}
              />
            </div>
            <span className="text-[10px] text-[#D4FF00] font-bold w-9 text-right">{progressPct}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
