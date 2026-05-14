"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  type SpringOptions,
} from "framer-motion";
import {
  ArrowRight,
  Brain,
  Dumbbell,
  Flame,
  Sparkles as SparklesIcon,
} from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { Reveal } from "./Reveal";

const springConfig: SpringOptions = { stiffness: 120, damping: 28, mass: 0.55 };

const benefits = [
  { title: "Daily Energy Support", icon: Flame },
  { title: "Male Vitality", icon: SparklesIcon },
  { title: "Enhanced Endurance", icon: Dumbbell },
  { title: "Mental Focus & Mood", icon: Brain },
];

function DiscoverButton() {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, springConfig);
  const sy = useSpring(y, springConfig);
  const [ripples, setRipples] = useState<
    { id: number; x: number; y: number }[]
  >([]);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.1);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.1);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const id = Date.now();
    setRipples((prev) => [
      ...prev,
      { id, x: e.clientX - r.left, y: e.clientY - r.top },
    ]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((p) => p.id !== id));
    }, 550);
  };

  return (
    <motion.button
      ref={ref}
      type="button"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={onClick}
      style={{ x: sx, y: sy }}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-white/10 bg-jintian-mahogany px-11 py-3.5 text-[10px] font-medium uppercase tracking-label text-white shadow-editorial transition-[box-shadow] duration-500 hover:shadow-lift"
    >
      <span className="relative z-10">Discover More</span>
      <ArrowRight
        className="relative z-10 h-4 w-4 text-white/80 transition duration-500 group-hover:translate-x-0.5"
        strokeWidth={1.25}
      />
      {ripples.map((r) => (
        <motion.span
          key={r.id}
          initial={{ scale: 0, opacity: 0.35 }}
          animate={{ scale: 4.5, opacity: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="pointer-events-none absolute h-14 w-14 rounded-full bg-white/25"
          style={{ left: r.x - 28, top: r.y - 28 }}
        />
      ))}
    </motion.button>
  );
}

export function ProductSection() {
  return (
    <section
      id="shop"
      className="relative overflow-hidden border-t border-jintian-black/[0.06] bg-jintian-cream py-32 md:py-44 lg:py-52"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-[min(90vw,560px)] w-[min(90vw,560px)] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(66,13,9,0.05),transparent_68%)] blur-3xl"
      />

      <div className="relative z-10 mx-auto grid max-w-[1200px] items-center gap-16 px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24 lg:px-16">
        <Reveal className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none">
          <motion.div
            initial={false}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative aspect-[4/5] w-full md:aspect-[5/6]"
          >
            <div className="absolute inset-x-[12%] bottom-[8%] h-8 rounded-full bg-jintian-black/[0.07] blur-2xl" />
            <div className="relative h-full w-full">
              <Image
                src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1100&q=85"
                alt="NU-PREP ERX amber glass bottle"
                fill
                className="object-contain object-bottom drop-shadow-[0_28px_60px_rgba(66,13,9,0.18)]"
                sizes="(max-width: 1024px) 90vw, 55vw"
                priority
              />
            </div>
          </motion.div>
        </Reveal>

        <div className="lg:py-4">
          <Reveal>
            <p className="text-[10px] font-medium uppercase tracking-label text-jintian-black/45">
              Men&apos;s Vitality Formula
            </p>
            <h2 className="mt-8 font-serif text-4xl tracking-editorial text-jintian-mahogany md:text-5xl lg:text-[3.25rem]">
              NU-PREP ERX
            </h2>
            <p className="mt-6 font-serif text-lg font-normal leading-snug text-jintian-black/75 md:text-xl">
              Vitality to Perform When It Matters Most
            </p>
            <p className="mt-8 max-w-md font-sans text-[14px] font-normal leading-[1.8] text-jintian-black/62">
              NU-PREP ERX combines clinically studied PHYSTA&reg; Tongkat Ali and
              BIOKESUM&reg; to support energy, vitality, endurance, and confidence
              for modern men.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-3 md:gap-4">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={0.05 * i}>
                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="flex flex-col gap-3 rounded-md border border-jintian-black/[0.08] bg-white/80 px-5 py-5 shadow-editorial"
                >
                  <span className="text-jintian-mahogany/85">
                    <b.icon className="h-4 w-4" strokeWidth={1} />
                  </span>
                  <p className="text-[12px] font-medium leading-snug tracking-wide text-jintian-mahogany md:text-[13px]">
                    {b.title}
                  </p>
                </motion.div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.12} className="mt-14">
            <DiscoverButton />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
