'use client';

import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "motion/react";
import React from "react";

interface Props {
  imageUrl?: string;
  className?: string;
  alt?: string;
  children?: React.ReactNode;
}

export default function BgFrame({ imageUrl, className, alt = "Laboratory frame", children }: Props) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={cn(
        "relative bg-[#101217] border border-[#292C33] overflow-hidden p-1.5 rounded-lg",
        className
      )}
    >
      {/* Corner Crosshairs */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#668CFF]/50 z-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#668CFF]/50 z-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#668CFF]/50 z-20 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#668CFF]/50 z-20 pointer-events-none" />

      {imageUrl ? (
        <img
          src={imageUrl}
          alt={alt}
          className="w-full h-auto object-cover rounded"
        />
      ) : (
        children
      )}
    </motion.div>
  );
}
