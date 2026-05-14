"use client";

import gsap from "gsap";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLayoutEffect, useRef } from "react";

function FloatingParticles() {
  const seeds = Array.from({ length: 28 }, (_, i) => ({
    id: i,
    x: `${(i * 37) % 100}%`,
    y: `${(i * 23) % 100}%`,
    delay: (i % 8) * 0.15,
    duration: 10 + (i % 5),
  }));
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {seeds.map((p) => (
        <motion.span
          key={p.id}
          className="absolute h-1 w-1 rounded-full bg-white/25"
          style={{ left: p.x, top: p.y }}
          animate={{ y: [0, -18, 0], opacity: [0.15, 0.55, 0.15] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      <motion.div
        className="absolute -left-1/4 top-1/3 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_65%)] blur-3xl"
        animate={{ rotate: [0, 8, 0], scale: [1, 1.04, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

export function HeroSection() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-anim",
        { y: 48, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.11,
          duration: 1.05,
          ease: "power3.out",
          delay: 0.15,
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
      <FloatingParticles />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-7rem)] max-w-4xl flex-col items-center justify-center px-6 pb-28 text-center md:px-10">
        <p className="hero-anim opacity-0 font-sans text-[11px] font-medium uppercase tracking-label text-white/70">
          Our Story
        </p>
        <h1 className="hero-anim opacity-0 mt-6 font-serif text-4xl leading-[1.08] text-balance sm:text-5xl md:text-6xl lg:text-[4.25rem]">
          Built for Energy, Strength &amp; Confidence
        </h1>
        <p className="hero-anim opacity-0 mt-8 max-w-2xl font-sans text-sm font-medium leading-relaxed text-white/78 md:text-base">
          What started as a mission to improve everyday performance has grown
          into a wellness brand focused on vitality, strength, and confidence
          for modern men.
        </p>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-medium uppercase tracking-label text-white/55"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <span>Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5" strokeWidth={1.25} />
        </motion.span>
      </motion.div>
    </section>
  );
}
