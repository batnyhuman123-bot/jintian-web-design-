"use client";

import gsap from "gsap";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLayoutEffect, useRef } from "react";

/** Sparse, slow dust — editorial calm, not “particle UI” */
function AmbientDust() {
  const seeds = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    x: `${10 + (i * 79) % 80}%`,
    y: `${15 + (i * 47) % 70}%`,
    delay: i * 0.4,
    duration: 14 + (i % 4) * 2,
  }));
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {seeds.map((p) => (
        <motion.span
          key={p.id}
          className="absolute h-px w-px rounded-full bg-white/30"
          style={{ left: p.x, top: p.y }}
          animate={{ y: [0, -10, 0], opacity: [0.12, 0.28, 0.12] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export function HeroSection() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-anim",
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.14,
          duration: 1.15,
          ease: "power2.out",
          delay: 0.2,
        },
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="story"
      className="relative isolate min-h-[100svh] overflow-hidden bg-mahogany-depth pt-28 text-white"
    >
      <div className="pointer-events-none absolute inset-0 bg-hero-radial" />
      <AmbientDust />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-6rem)] max-w-[42rem] flex-col items-center justify-center px-8 pb-32 pt-12 text-center md:max-w-[48rem] md:px-12 lg:max-w-[52rem]">
        <p className="hero-anim opacity-0 font-sans text-[10px] font-medium uppercase tracking-label text-white/55">
          Our Story
        </p>
        <h1 className="hero-anim opacity-0 mt-10 font-serif text-[2.65rem] leading-[1.06] tracking-editorial text-balance sm:text-5xl md:mt-12 md:text-6xl lg:text-[4.5rem] lg:leading-[1.04]">
          Built for Energy, Strength &amp; Confidence
        </h1>
        <p className="hero-anim opacity-0 mt-10 max-w-xl font-sans text-[15px] font-normal leading-[1.75] text-white/72 md:text-base md:leading-[1.8]">
          What started as a mission to improve everyday performance has grown
          into a wellness brand focused on vitality, strength, and confidence for
          modern men.
        </p>
      </div>

      <motion.div
        className="absolute bottom-12 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-medium uppercase tracking-label text-white/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
      >
        <span>Scroll</span>
        <motion.span
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-4 w-4" strokeWidth={1} />
        </motion.span>
      </motion.div>
    </section>
  );
}
