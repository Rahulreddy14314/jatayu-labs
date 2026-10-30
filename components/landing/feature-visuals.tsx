'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, Compass, Radio, Activity, ShieldCheck } from 'lucide-react';
import { cn } from "@/lib/utils";

export function TactileRingVisual() {
  const [activeActuator, setActiveActuator] = useState<number | null>(0);
  const shouldReduceMotion = useReducedMotion();

  // 8 actuators around a 360 degree ring
  const actuators = [
    { deg: 0, label: 'N // 000°', desc: 'Forward Heading Vector' },
    { deg: 45, label: 'NE // 045°', desc: 'Right Forward Bearing' },
    { deg: 90, label: 'E // 090°', desc: 'Lateral Right Vector' },
    { deg: 135, label: 'SE // 135°', desc: 'Right Aft Bearing' },
    { deg: 180, label: 'S // 180°', desc: 'Aft / Proximity Reverse' },
    { deg: 225, label: 'SW // 225°', desc: 'Left Aft Bearing' },
    { deg: 270, label: 'W // 270°', desc: 'Lateral Left Vector' },
    { deg: 315, label: 'NW // 315°', desc: 'Left Forward Bearing' },
  ];

  const selected = activeActuator !== null ? actuators[activeActuator] : actuators[0];

  return (
    <div
      style={{ ['--card-aura' as string]: '#00F0FF' }}
      className="relative w-full h-[380px] metallic-border ambient-beam cryo-glass rounded-2xl p-6 flex flex-col justify-between overflow-hidden"
    >
      {/* Background Radar / Polar Grid */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-25">
        <div className="w-[280px] h-[280px] rounded-full border border-[#00F0FF]/40" />
        <div className="w-[200px] h-[200px] rounded-full border border-dashed border-[#00F0FF]/30" />
        <div className="w-[120px] h-[120px] rounded-full border border-[#00F0FF]/40" />
        <div className="absolute w-[300px] h-px bg-[#292C33]" />
        <div className="absolute h-[300px] w-px bg-[#292C33]" />
      </div>

      <div className="flex items-center justify-between text-[10px] font-mono z-10">
        <span className="text-[#00F0FF] flex items-center gap-1.5 font-semibold">
          <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse" />
          <span>AXIAL HAPTIC MOTOR ARRAY</span>
        </span>
        <span className="text-[#92969F]">8-CHANNEL ERM/LRA MATRIX</span>
      </div>

      {/* Center Tactile Actuator Hub */}
      <div className="relative w-[240px] h-[240px] mx-auto flex items-center justify-center z-10">
        {/* Center Indicator */}
        <div className="w-16 h-16 rounded-full bg-[#101217] border border-[#00F0FF]/50 flex flex-col items-center justify-center text-center p-2 shadow-[0_0_25px_rgba(0,240,255,0.25)]">
          <Compass className="w-4 h-4 text-[#00F0FF] mb-0.5 animate-spin" style={{ animationDuration: '18s' }} />
          <span className="text-[9px] font-mono text-[#F4F4F0] leading-none">IMU</span>
        </div>

        {/* 8 Radial Buttons */}
        {actuators.map((item, index) => {
          const angleRad = (item.deg - 90) * (Math.PI / 180);
          const radius = 95; // px from center
          const x = Math.round(radius * Math.cos(angleRad));
          const y = Math.round(radius * Math.sin(angleRad));
          const isActive = activeActuator === index;

          return (
            <button
              key={item.deg}
              onClick={() => setActiveActuator(index)}
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
              className={cn(
                "absolute w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00F0FF]",
                isActive
                  ? "bg-[#00F0FF] text-[#090A0C] scale-125 shadow-[0_0_20px_#00F0FF]"
                  : "bg-[#101217] text-[#92969F] border border-[#292C33] hover:border-[#00F0FF] hover:scale-110"
              )}
              aria-label={`Actuator ${item.label}`}
            >
              <span className="text-[9px] font-mono font-bold">{index + 1}</span>
            </button>
          );
        })}
      </div>

      {/* Selected Channel Readout */}
      <div className="bg-[#090A0C] border border-[#292C33] rounded-lg p-3 flex items-center justify-between text-xs z-10">
        <div>
          <span className="text-[10px] font-mono text-[#00F0FF] uppercase mr-2">{selected.label}</span>
          <span className="text-[#92969F]">{selected.desc}</span>
        </div>
        <span className="text-[10px] font-mono text-emerald-400 font-semibold">&lt; 14.8 ms Latency</span>
      </div>
    </div>
  );
}

export function PrototypeVisualFrame() {
  return (
    <div
      style={{ ['--card-aura' as string]: '#00F0FF' }}
      className="relative w-full h-[380px] metallic-border ambient-beam cryo-glass rounded-2xl overflow-hidden p-6 flex flex-col justify-between"
    >
      <div className="focus-scan" />
      <div className="focus-device">
        <div className="device-line" />
        <div className="device-dot" />
        <div className="device-label">SENSE / REV. 03</div>
      </div>

      <div className="relative z-10 flex items-center justify-between">
        <span className="text-[10px] font-mono text-[#92969F] uppercase tracking-wider bg-[#090A0C]/80 px-2.5 py-1 rounded border border-[#292C33]">
          PHYSICAL HARDWARE TESTBENCH
        </span>
        <span className="text-[10px] font-mono text-[#00F0FF] bg-[#00F0FF]/10 px-2.5 py-1 rounded border border-[#00F0FF]/40 font-semibold">
          PROTOTYPE DIRECTION
        </span>
      </div>

      <div className="relative z-10 bg-[#090A0C]/90 p-4 rounded-xl border border-[#292C33] backdrop-blur-md space-y-1">
        <div className="text-[10px] font-mono text-[#00F0FF]">REVISION 03 ENCLOSURE &middot; BENCH TESTING</div>
        <p className="text-xs text-[#F4F4F0] m-0 leading-relaxed">
          Flexible silicone acoustic-damped enclosure housing 8 spatial vibrotactile actuators with low-latency Bluetooth LE 5.3 bridge.
        </p>
      </div>
    </div>
  );
}
