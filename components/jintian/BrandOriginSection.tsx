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
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "8%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-jintian-cream py-28 md:py-36 lg:py-44"
    >
      <motion.div style={{ y }} className="pointer-events-none absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2000&q=80"
          alt=""
          fill
          className="object-cover opacity-[0.22] saturate-[0.65]"
          sizes="100vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-jintian-cream via-jintian-cream/85 to-jintian-cream" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#FAF7F2_70%)]" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 md:px-10 lg:px-14">
        <Reveal className="text-center">
          <h2 className="font-serif text-5xl tracking-[0.2em] text-jintian-mahogany sm:text-6xl md:text-7xl">
            JINTIAN
          </h2>
          <p className="mt-5 font-sans text-sm font-medium text-jintian-black/70 md:text-base">
            JINTIAN means &ldquo;Today&rdquo; in Mandarin
          </p>
        </Reveal>

        <Reveal delay={0.08} className="mx-auto mt-14 max-w-xl">
          <div className="flex items-center gap-4">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-jintian-mahogany/35" />
            <p className="text-center font-serif text-xl italic text-jintian-mahogany md:text-2xl">
              &ldquo;Today is where strength begins&rdquo;
            </p>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-jintian-mahogany/35" />
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3 md:gap-8">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={0.06 * i}>
              <motion.div
                whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                style={{ transformStyle: "preserve-3d" }}
                className={cn(
                  "group relative h-full overflow-hidden rounded-2xl border border-white/60 bg-white/25 p-8 shadow-luxury backdrop-blur-xl",
                  "before:pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/40 before:to-transparent before:opacity-0 before:transition-opacity before:duration-500 group-hover:before:opacity-100",
                )}
              >
                <div className="mb-6 inline-flex rounded-full border border-jintian-mahogany/15 bg-jintian-mahogany/5 p-4 text-jintian-mahogany shadow-[0_0_40px_-8px_rgba(184,149,106,0.55)] transition group-hover:shadow-[0_0_48px_-6px_rgba(184,149,106,0.85)]">
                  <c.icon className="h-6 w-6" strokeWidth={1.15} />
                </div>
                <p className="text-[11px] font-semibold uppercase tracking-label text-jintian-mahogany/80">
                  {c.title}
                </p>
                <p className="mt-3 font-sans text-sm font-medium leading-relaxed text-jintian-black/75">
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
