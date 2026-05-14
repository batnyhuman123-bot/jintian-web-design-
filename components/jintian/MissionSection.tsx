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
      y: -20,
      ease: "none",
      scrollTrigger: {
        trigger: root.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.85,
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
      className="relative overflow-hidden border-t border-jintian-black/[0.06] bg-jintian-cream py-32 md:py-44 lg:py-52"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-24 h-[min(100vw,480px)] w-[min(100vw,480px)] bg-[radial-gradient(circle_at_center,rgba(66,13,9,0.04),transparent_70%)]"
      />

      <div className="relative z-10 mx-auto grid max-w-[1120px] items-start gap-20 px-8 md:grid-cols-2 md:gap-x-16 md:gap-y-0 lg:gap-x-24 lg:px-16">
        <div className="relative md:pt-6">
          <Reveal>
            <p className="text-[10px] font-medium uppercase tracking-label text-jintian-black/45">
              Our Mission
            </p>
            <h2 className="mt-8 max-w-lg font-serif text-[2rem] leading-[1.12] tracking-editorial text-jintian-mahogany md:text-[2.35rem] lg:text-[2.5rem]">
              We exist to help men perform at their best.
            </h2>
            <p className="mt-10 max-w-md font-sans text-[14px] font-normal leading-[1.8] text-jintian-black/65">
              We are committed to creating premium wellness products backed by
              science, quality ingredients, and daily consistency.
            </p>
          </Reveal>
        </div>

        <div className="relative">
          <div className="grid gap-3">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={0.05 * i}>
                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="flex items-start gap-5 rounded-lg border border-jintian-black/[0.08] bg-white/70 px-6 py-5 shadow-editorial"
                >
                  <span className="mt-0.5 text-jintian-mahogany/90">
                    <f.icon className="h-5 w-5" strokeWidth={1} />
                  </span>
                  <div>
                    <p className="text-sm font-medium tracking-wide text-jintian-mahogany">
                      {f.title}
                    </p>
                    <p className="mt-2 font-sans text-[13px] font-normal leading-relaxed text-jintian-black/60">
                      {f.body}
                    </p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>

          <div
            ref={visual}
            className="relative mx-auto mt-16 max-w-md md:absolute md:-right-4 md:bottom-0 md:mt-0 md:max-w-[min(100%,380px)] lg:-right-8"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-md border border-jintian-black/[0.08] bg-jintian-cream shadow-editorial">
              <Image
                src="https://images.unsplash.com/photo-1532187861976-deb9a115fada?auto=format&fit=crop&w=900&q=80"
                alt="Scientific botanical study"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 380px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-jintian-cream/95 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
