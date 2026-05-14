"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Leaf, Mountain, Sun } from "lucide-react";
import Image from "next/image";
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
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-3%", "4%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-jintian-cream py-32 md:py-44 lg:py-52"
    >
      <motion.div style={{ y }} className="pointer-events-none absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2000&q=80"
          alt=""
          fill
          className="object-cover opacity-[0.14] saturate-[0.55]"
          sizes="100vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-jintian-cream via-jintian-cream/92 to-jintian-cream" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-[1120px] px-8 md:px-12 lg:px-16">
        <Reveal className="text-center">
          <h2 className="font-serif text-5xl tracking-[0.22em] text-jintian-mahogany sm:text-6xl md:text-7xl">
            JINTIAN
          </h2>
          <p className="mx-auto mt-8 max-w-md font-sans text-[13px] font-normal leading-relaxed tracking-wide text-jintian-black/60 md:text-sm">
            JINTIAN means &ldquo;Today&rdquo; in Mandarin
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-20 max-w-2xl">
          <div className="flex items-center gap-6 md:gap-10">
            <span className="h-px flex-1 bg-jintian-black/[0.1]" />
            <p className="shrink text-center font-serif text-xl italic leading-snug text-jintian-mahogany md:text-2xl">
              &ldquo;Today is where strength begins&rdquo;
            </p>
            <span className="h-px flex-1 bg-jintian-black/[0.1]" />
          </div>
        </Reveal>

        <div className="mt-24 grid gap-8 md:grid-cols-3 md:gap-10 lg:gap-12">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={0.06 * i}>
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
                className={cn(
                  "flex h-full flex-col border border-jintian-black/[0.08] bg-white/50 p-9 shadow-card backdrop-blur-[2px]",
                  "rounded-lg md:rounded-md",
                )}
              >
                <div className="mb-8 inline-flex w-fit border border-jintian-black/[0.08] bg-jintian-cream/80 p-3.5 text-jintian-mahogany">
                  <c.icon className="h-5 w-5" strokeWidth={1} />
                </div>
                <p className="text-[10px] font-medium uppercase tracking-label text-jintian-black/50">
                  {c.title}
                </p>
                <p className="mt-4 font-sans text-[13px] font-normal leading-[1.75] text-jintian-black/70">
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
