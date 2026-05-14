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

const springConfig: SpringOptions = { stiffness: 280, damping: 22, mass: 0.4 };

const benefits = [
  { title: "Daily Energy Support", icon: Flame },
  { title: "Male Vitality", icon: SparklesIcon },
  { title: "Enhanced Endurance", icon: Dumbbell },
  { title: "Mental Focus & Mood", icon: Brain },
];

function MagneticDiscoverButton() {
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
    x.set((e.clientX - (r.left + r.width / 2)) * 0.22);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.22);
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
    }, 650);
  };

  return (
    <motion.button
      ref={ref}
      type="button"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={onClick}
      style={{ x: sx, y: sy }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-jintian-mahogany px-10 py-3.5 text-[11px] font-semibold uppercase tracking-label text-white shadow-[0_22px_60px_-14px_rgba(66,13,9,0.65)] ring-1 ring-white/10 transition-[box-shadow] duration-500 hover:shadow-[0_28px_70px_-10px_rgba(184,149,106,0.45)]"
    >
      <span className="relative z-10">Discover More</span>
      <ArrowRight
        className="relative z-10 h-4 w-4 text-jintian-bronze transition group-hover:translate-x-1"
        strokeWidth={1.5}
      />
      {ripples.map((r) => (
        <motion.span
          key={r.id}
          initial={{ scale: 0, opacity: 0.55 }}
          animate={{ scale: 5, opacity: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="pointer-events-none absolute h-16 w-16 rounded-full bg-white/35"
          style={{ left: r.x - 32, top: r.y - 32 }}
        />
      ))}
    </motion.button>
  );
}

export function ProductSection() {
  return (
    <section
      id="shop"
      className="relative overflow-hidden bg-jintian-cream py-24 md:py-32 lg:py-40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-24 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(184,149,106,0.18),transparent_62%)] blur-3xl"
      />

      <div className="relative z-10 mx-auto grid max-w-[1200px] items-center gap-14 px-6 md:grid-cols-2 md:gap-16 md:px-10 lg:px-14">
        <Reveal className="relative mx-auto w-full max-w-md md:mx-0">
          <motion.div
            whileHover={{ rotateY: 4, rotateX: -4 }}
            transition={{ type: "spring", stiffness: 120, damping: 16 }}
            style={{ perspective: 1200 }}
            className="relative aspect-[3/4] w-full"
          >
            <div className="absolute inset-x-10 bottom-6 h-10 rounded-full bg-black/15 blur-2xl" />
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              className="relative h-full w-full"
              whileHover={{ rotate: -1.5 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=900&q=80"
                alt="NU-PREP ERX amber glass bottle"
                fill
                className="object-contain drop-shadow-[0_40px_80px_rgba(66,13,9,0.35)]"
                sizes="(max-width: 768px) 90vw, 440px"
                priority
              />
            </motion.div>

            <motion.div
              aria-hidden
              className="pointer-events-none absolute -left-4 top-10 h-16 w-28 rotate-[-18deg] rounded-full bg-emerald-700/25 blur-xl"
              animate={{ y: [0, -12, 0], opacity: [0.45, 0.75, 0.45] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -right-2 bottom-24 h-20 w-24 rotate-[12deg] rounded-full bg-emerald-600/20 blur-xl"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-label text-jintian-mahogany/75">
              Men&apos;s Vitality Formula
            </p>
            <h2 className="mt-4 font-serif text-4xl text-jintian-mahogany md:text-5xl">
              NU-PREP ERX
            </h2>
            <p className="mt-4 font-serif text-lg text-jintian-black/80 md:text-xl">
              Vitality to Perform When It Matters Most
            </p>
            <p className="mt-6 max-w-lg font-sans text-sm font-medium leading-relaxed text-jintian-black/72 md:text-[15px]">
              NU-PREP ERX combines clinically studied PHYSTA&reg; Tongkat Ali
              and BIOKESUM&reg; to support energy, vitality, endurance, and
              confidence for modern men.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-4">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={0.05 * i}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="flex items-start gap-3 rounded-2xl border border-white/60 bg-white/55 p-4 shadow-glass backdrop-blur-md"
                >
                  <span className="inline-flex rounded-full border border-jintian-mahogany/10 bg-jintian-mahogany/5 p-2.5 text-jintian-mahogany">
                    <b.icon className="h-4 w-4" strokeWidth={1.25} />
                  </span>
                  <p className="pt-0.5 text-xs font-semibold leading-snug text-jintian-mahogany md:text-[13px]">
                    {b.title}
                  </p>
                </motion.div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15} className="mt-10">
            <MagneticDiscoverButton />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
