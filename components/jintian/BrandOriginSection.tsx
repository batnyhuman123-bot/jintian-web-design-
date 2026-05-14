"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Leaf, Mountain, Sun } from "lucide-react";
import { useRef } from "react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

const cards = [
  {
    title: "Today",
    icon: Sun,
    body: "Be present. Make intentional choices.",
  },
  {
    title: "Strength",
    icon: Mountain,
    body: "Build discipline. Push your limits. Grow daily.",
  },
  {
    title: "Transformation",
    icon: Leaf,
    body: "Small steps today. Stronger tomorrow. Better for life.",
  },
];

export function BrandOriginSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const wordmarkY = useTransform(scrollYProgress, [0, 0.45, 1], [18, 0, -14]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-jintian-cream py-28 md:py-36 lg:py-44"
    >
      {/* Soft studio lighting — brand palette only */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_-10%,rgba(255,255,255,0.55),transparent_52%),radial-gradient(ellipse_70%_45%_at_80%_100%,rgba(66,13,9,0.04),transparent_55%)]"
      />
      <div
        aria-hidden
        className="grain-overlay pointer-events-none absolute inset-0 opacity-[0.35] mix-blend-multiply"
      />

      <div className="relative z-10 mx-auto w-full max-w-[min(100%,1440px)] px-6 sm:px-10 lg:px-16 xl:px-20">
        {/* Top label — editorial top-left */}
        <Reveal y={10} className="w-full">
          <div className="inline-flex flex-col items-start gap-2.5">
            <p className="font-sans text-[10px] font-medium uppercase tracking-[0.14em] text-jintian-mahogany">
              OUR STORY
            </p>
            <span className="h-px w-9 bg-jintian-mahogany/90" aria-hidden />
          </div>
        </Reveal>

        {/* Hero wordmark — typography as the visual */}
        <Reveal y={20} className="mt-10 w-full md:mt-14 lg:mt-16">
          <motion.h2
            style={{ y: wordmarkY }}
            className="w-full text-center font-serif font-normal tracking-[0.18em] text-jintian-mahogany antialiased sm:tracking-[0.2em] md:tracking-[0.22em] lg:tracking-[0.24em]"
          >
            <span className="block text-[clamp(3.25rem,16.5vw,13.5rem)] leading-[0.92]">
              JINTIAN
            </span>
          </motion.h2>
        </Reveal>

        <Reveal y={12} delay={0.06} className="mx-auto mt-12 max-w-xl text-center md:mt-14 lg:mt-16">
          <p className="font-sans text-[13px] font-medium leading-relaxed text-jintian-black/50 md:text-sm">
            JINTIAN means{" "}
            <span className="font-medium text-jintian-mahogany">&ldquo;Today&rdquo;</span>{" "}
            in Mandarin
          </p>
        </Reveal>

        {/* Quote — warm metallic hairlines (reads like campaign gold, built from mahogany + cream) */}
        <Reveal y={12} delay={0.1} className="mx-auto mt-14 max-w-3xl md:mt-16 lg:mt-20">
          <div className="flex items-center justify-center gap-5 sm:gap-8 md:gap-10">
            <span
              className="h-px min-w-[2.5rem] flex-1 max-w-[6rem] bg-gradient-to-r from-transparent via-jintian-mahogany/35 to-jintian-mahogany/55 sm:max-w-[8rem]"
              aria-hidden
            />
            <p className="shrink text-center font-serif text-lg font-normal italic leading-snug tracking-[0.02em] text-jintian-mahogany sm:text-xl md:text-2xl">
              &ldquo;Today is where strength begins&rdquo;
            </p>
            <span
              className="h-px min-w-[2.5rem] flex-1 max-w-[6rem] bg-gradient-to-l from-transparent via-jintian-mahogany/35 to-jintian-mahogany/55 sm:max-w-[8rem]"
              aria-hidden
            />
          </div>
        </Reveal>

        <Reveal y={10} delay={0.12} className="mx-auto mt-12 text-center md:mt-14">
          <p className="font-serif text-[11px] font-normal uppercase tracking-[0.32em] text-jintian-mahogany sm:text-xs sm:tracking-[0.36em] md:tracking-[0.4em]">
            START YOUR JOURNEY TODAY.
          </p>
        </Reveal>

        {/* Feature cards */}
        <div className="mx-auto mt-20 grid max-w-6xl gap-6 sm:mt-24 md:mt-28 md:grid-cols-3 md:gap-8 lg:mt-32 lg:gap-10">
          {cards.map((c, i) => (
            <Reveal key={c.title} y={16} delay={0.08 + i * 0.06}>
              <motion.div
                initial={false}
                animate={{ y: [0, -2.5, 0] }}
                transition={{
                  duration: 9 + i * 0.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.4,
                }}
                whileHover={{ y: -6 }}
                className={cn(
                  "group relative flex h-full min-h-[280px] flex-col items-center rounded-2xl border border-jintian-black/[0.06] bg-white/65 px-8 py-10 text-center shadow-[0_1px_0_rgba(255,255,255,0.85)_inset,0_18px_48px_-28px_rgba(0,0,0,0.08)] backdrop-blur-sm transition-shadow duration-500 md:min-h-[300px] md:px-10 md:py-12 lg:rounded-[1.25rem]",
                  "hover:border-jintian-black/[0.1] hover:shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_28px_56px_-24px_rgba(66,13,9,0.12)]",
                )}
              >
                <span
                  className="mb-8 inline-flex text-jintian-mahogany transition-[filter,transform] duration-500 group-hover:scale-[1.04] group-hover:drop-shadow-[0_0_20px_rgba(66,13,9,0.18)]"
                  aria-hidden
                >
                  <c.icon className="h-7 w-7" strokeWidth={1} />
                </span>
                <p className="font-serif text-sm font-normal uppercase tracking-[0.28em] text-jintian-mahogany">
                  {c.title}
                </p>
                <span
                  className="mt-3 h-px w-10 bg-gradient-to-r from-transparent via-jintian-mahogany/45 to-transparent"
                  aria-hidden
                />
                <p className="mt-6 max-w-[14rem] font-sans text-[13px] font-medium leading-[1.75] text-jintian-black/55">
                  {c.body}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
