"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  Dumbbell,
  Sparkles,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { Reveal } from "./Reveal";

const benefits = [
  { title: "Daily Energy Support", icon: Zap },
  { title: "Male Vitality", icon: Sparkles },
  { title: "Enhanced Endurance", icon: Dumbbell },
  { title: "Mental Focus & Mood", icon: Brain },
];

function GoldDivider() {
  return (
    <motion.div
      aria-hidden
      className="relative my-8 flex w-full max-w-[520px] items-center gap-4"
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-jintian-showcase-gold/70" />
      <span className="h-1.5 w-1.5 rotate-45 border border-jintian-showcase-gold/80 bg-jintian-showcase-gold/20" />
      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-jintian-showcase-gold/70" />
    </motion.div>
  );
}

function DiscoverButton() {
  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.02, borderColor: "rgba(200, 155, 90, 0.75)" }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group inline-flex items-center gap-3.5 rounded-full border border-jintian-showcase-gold/45 bg-jintian-black/40 px-8 py-[18px] shadow-[0_18px_40px_-12px_rgba(0,0,0,0.55)] backdrop-blur-sm"
    >
      <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-jintian-showcase-text">
        Discover More
      </span>
      <ArrowRight
        className="h-4 w-4 text-jintian-showcase-gold transition duration-300 group-hover:translate-x-0.5"
        strokeWidth={1.25}
      />
    </motion.button>
  );
}

export function ProductSection() {
  return (
    <section
      id="shop"
      className="relative min-h-[820px] overflow-hidden bg-jintian-showcase-bg text-jintian-showcase-text"
    >
      {/* Cinematic atmosphere */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_72%_42%,rgba(200,155,90,0.14),transparent_58%),radial-gradient(ellipse_80%_60%_at_50%_120%,rgba(0,0,0,0.45),transparent_55%)]"
        animate={{ opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_42%,rgba(0,0,0,0.55)_100%)]"
      />
      <motion.div
        aria-hidden
        className="grain-overlay pointer-events-none absolute inset-0 opacity-[0.22] mix-blend-overlay"
      />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-[8%] top-[22%] h-[min(52vw,520px)] w-[min(52vw,520px)] rounded-full bg-[radial-gradient(circle_at_center,rgba(200,155,90,0.22),rgba(106,58,31,0.08)_45%,transparent_68%)] blur-3xl"
        animate={{ scale: [1, 1.04, 1], opacity: [0.7, 0.95, 0.7] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="relative z-10 mx-auto flex min-h-[min(820px,calc(100svh-4rem))] max-w-[1440px] flex-col px-6 pb-0 pt-16 sm:px-10 md:px-16 md:pt-20 lg:px-20 lg:pt-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <motion.div
          className="grid flex-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-8%" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          {/* Left — copy */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] },
              },
            }}
            className="order-2 flex flex-col justify-center lg:order-1 lg:py-8"
          >
            <h2 className="font-display text-[clamp(2.75rem,6.5vw,6.75rem)] font-semibold leading-[0.95] tracking-[-0.02em] text-jintian-showcase-gold">
              NU-PREP ERX
            </h2>
            <p className="mt-5 font-sans text-[10px] font-semibold uppercase tracking-[0.32em] text-jintian-showcase-text/85 sm:text-[11px]">
              Vitality to Perform When It Matters Most
            </p>
            <GoldDivider />
            <p className="max-w-[520px] font-sans text-[15px] font-normal leading-[1.85] text-jintian-showcase-text/90 md:text-base">
              NU-PREP ERX combines clinically studied PHYSTA&reg; Tongkat Ali
              and BIORESUM&reg; to support energy, vitality, endurance, and
              confidence for modern men.
            </p>
            <div className="mt-10">
              <DiscoverButton />
            </div>
          </motion.div>

          {/* Right — product showcase */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 28 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] },
              },
            }}
            className="order-1 relative flex min-h-[360px] items-end justify-center lg:order-2 lg:min-h-[520px]"
          >
            <motion.div
              aria-hidden
              className="absolute bottom-[18%] left-1/2 h-[min(42vw,280px)] w-[min(70vw,420px)] -translate-x-1/2 rounded-full bg-black/50 blur-3xl"
            />

            {/* Bronze pedestal */}
            <motion.div
              aria-hidden
              className="absolute bottom-[6%] left-1/2 z-0 h-16 w-[min(52vw,280px)] -translate-x-1/2 rounded-b-full bg-gradient-to-b from-jintian-showcase-bronze via-[#4a2818] to-[#2a140c] shadow-[0_24px_60px_-8px_rgba(0,0,0,0.65)] md:h-20 md:w-[320px]"
              style={{
                clipPath: "ellipse(50% 100% at 50% 100%)",
              }}
            />
            <motion.div
              aria-hidden
              className="absolute bottom-[14%] left-1/2 z-[1] h-3 w-[min(48vw,260px)] -translate-x-1/2 rounded-full bg-jintian-showcase-gold/25 blur-md"
            />

            {/* Scattered tablets */}
            {[0, 1, 2, 3].map((i) => (
              <motion.span
                key={i}
                aria-hidden
                className="absolute z-[2] h-2.5 w-5 rounded-full bg-gradient-to-br from-[#8a5a32] to-[#5c3820] shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]"
                style={{
                  bottom: `${8 + (i % 2) * 4}%`,
                  left: `${28 + i * 14}%`,
                  rotate: `${-18 + i * 12}deg`,
                }}
                animate={{ y: [0, -2, 0] }}
                transition={{
                  duration: 5 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3,
                }}
              />
            ))}

            <motion.div
              className="relative z-[3] mx-auto w-full max-w-[min(100%,480px)]"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="relative aspect-[4/5] w-full sm:aspect-[5/6]">
                <Image
                  src="/products/nu-prep-erx.png"
                  alt="NU-PREP ERX supplement bottle on premium pedestal"
                  fill
                  className="object-contain object-bottom drop-shadow-[0_40px_80px_rgba(0,0,0,0.55)]"
                  sizes="(max-width: 1024px) 90vw, 480px"
                  priority
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_50%_35%,rgba(200,155,90,0.12),transparent_70%)]"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom benefits bar */}
        <Reveal y={16} className="mt-10 border-t border-jintian-showcase-gold/25 md:mt-6">
          <div className="grid grid-cols-2 gap-8 py-10 md:grid-cols-4 md:gap-0 md:py-12">
            {benefits.map((b, i) => (
              <div
                key={b.title}
                className={`flex flex-col items-center gap-4 px-4 text-center md:px-6 ${
                  i > 0 ? "md:border-l md:border-jintian-showcase-gold/20" : ""
                }`}
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-jintian-showcase-gold/35 text-jintian-showcase-gold">
                  <b.icon className="h-4 w-4" strokeWidth={1.15} />
                </span>
                <p className="font-sans text-[9px] font-medium uppercase leading-relaxed tracking-[0.2em] text-jintian-showcase-text/85 sm:text-[10px]">
                  {b.title}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </motion.div>
    </section>
  );
}
