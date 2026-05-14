"use client";

import { motion } from "framer-motion";
import { Globe2, Lightbulb } from "lucide-react";
import Image from "next/image";
import { Reveal } from "./Reveal";

const features = [
  {
    title: "Global Impact",
    body: "Building transparent wellness standards that travel worldwide.",
    icon: Globe2,
  },
  {
    title: "Innovation Forward",
    body: "Marrying advanced research with nature-led formulation design.",
    icon: Lightbulb,
  },
];

export function VisionSection() {
  return (
    <section className="relative overflow-hidden bg-jintian-cream py-24 md:py-32 lg:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 h-[480px] w-[480px] bg-[radial-gradient(circle_at_center,rgba(184,149,106,0.12),transparent_65%)]"
      />

      <div className="relative z-10 mx-auto grid max-w-[1200px] items-center gap-14 px-6 md:grid-cols-2 md:gap-20 md:px-10 lg:px-14">
        <Reveal className="order-2 md:order-1">
          <div className="relative mx-auto max-w-md md:mx-0">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
              className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/60 bg-jintian-black shadow-luxury"
            >
              <Image
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80"
                alt="Luxury still life with hourglass mood"
                fill
                className="object-cover opacity-90"
                sizes="(max-width: 768px) 100vw, 420px"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-jintian-mahogany/55 via-transparent to-jintian-bronze/25 mix-blend-multiply" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />

              <motion.div
                aria-hidden
                className="absolute -right-6 bottom-10 h-24 w-24 rounded-full border border-white/25 bg-white/10 blur-sm"
                animate={{ opacity: [0.35, 0.7, 0.35] }}
                transition={{ duration: 6, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </Reveal>

        <div className="order-1 space-y-8 md:order-2">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-label text-jintian-mahogany/75">
              Our Vision
            </p>
            <h2 className="mt-5 max-w-xl font-serif text-3xl leading-[1.15] text-jintian-mahogany md:text-4xl lg:text-[2.65rem]">
              To become a world-class brand that empowers men through science and
              transparency.
            </h2>
          </Reveal>

          <div className="grid gap-4">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={0.06 * i}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="flex items-start gap-4 rounded-2xl border border-white/60 bg-white/50 p-5 shadow-glass backdrop-blur-md"
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
        </div>
      </div>
    </section>
  );
}
