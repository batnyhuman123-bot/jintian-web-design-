"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { BadgeCheck, FlaskConical, Sparkles } from "lucide-react";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { Reveal } from "./Reveal";

const features = [
  {
    title: "Real Results",
    body: "Formulations designed for measurable daily performance.",
    icon: Sparkles,
  },
  {
    title: "Quality Ingredients",
    body: "Clinically studied botanicals with transparent sourcing.",
    icon: FlaskConical,
  },
  {
    title: "Built for Confidence",
    body: "A ritual that supports focus, mood, and presence.",
    icon: BadgeCheck,
  },
];

export function MissionSection() {
  const root = useRef<HTMLElement>(null);
  const visual = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = visual.current;
    if (!el) return;

    const tween = gsap.to(el, {
      y: -36,
      rotate: -1.5,
      ease: "none",
      scrollTrigger: {
        trigger: root.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.1,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <section
      ref={root}
      className="relative overflow-hidden bg-jintian-cream py-24 md:py-32 lg:py-40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-10 h-[420px] w-[420px] bg-[radial-gradient(circle_at_center,rgba(66,13,9,0.06),transparent_68%)]"
      />
      <div
        aria-hidden
        className="grain-overlay pointer-events-none absolute inset-0 opacity-40 mix-blend-multiply"
      />

      <div className="relative z-10 mx-auto grid max-w-[1200px] items-center gap-14 px-6 md:grid-cols-2 md:gap-16 md:px-10 lg:px-14">
        <div className="relative">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-10 top-1/2 h-72 w-72 -translate-y-1/2 opacity-[0.07]"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath fill='%23420D09' d='M50 5c8 12 20 22 20 38a20 20 0 11-40 0c0-16 12-26 20-38z'/%3E%3C/svg%3E\")",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          />
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-label text-jintian-mahogany/75">
              Our Mission
            </p>
            <h2 className="mt-5 max-w-xl font-serif text-3xl leading-[1.15] text-jintian-mahogany md:text-4xl lg:text-[2.75rem]">
              We exist to help men perform at their best.
            </h2>
            <p className="mt-6 max-w-md font-sans text-sm font-medium leading-relaxed text-jintian-black/72 md:text-[15px]">
              We are committed to creating premium wellness products backed by
              science, quality ingredients, and daily consistency.
            </p>
          </Reveal>
        </div>

        <div className="relative">
          <div className="grid gap-4 sm:grid-cols-1">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={0.05 * i}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 320, damping: 24 }}
                  className="flex items-start gap-4 rounded-2xl border border-white/60 bg-white/55 p-5 shadow-glass backdrop-blur-md"
                >
                  <span className="mt-0.5 inline-flex rounded-full border border-jintian-mahogany/10 bg-jintian-mahogany/5 p-3 text-jintian-mahogany">
                    <f.icon className="h-5 w-5" strokeWidth={1.2} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-jintian-mahogany">
                      {f.title}
                    </p>
                    <p className="mt-1 font-sans text-xs font-medium leading-relaxed text-jintian-black/65 md:text-sm">
                      {f.body}
                    </p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>

          <div
            ref={visual}
            className="pointer-events-none relative mx-auto mt-10 max-w-md md:absolute md:-right-6 md:bottom-[-4rem] md:mt-0 md:max-w-sm"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/50 bg-gradient-to-br from-white/80 to-jintian-cream shadow-luxury">
              <Image
                src="https://images.unsplash.com/photo-1532187861976-deb9a115fada?auto=format&fit=crop&w=900&q=80"
                alt="Scientific botanical study"
                fill
                className="object-cover mix-blend-multiply"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-jintian-cream/90 via-transparent to-transparent" />
              <motion.div
                className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/70 bg-white/35 shadow-[0_0_60px_-10px_rgba(184,149,106,0.5)] backdrop-blur-md"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
