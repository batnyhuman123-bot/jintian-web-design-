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
    <section className="relative overflow-hidden border-t border-jintian-black/[0.06] bg-jintian-cream py-32 md:py-44 lg:py-52">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-0 h-[min(100vw,520px)] w-[min(100vw,520px)] bg-[radial-gradient(circle_at_center,rgba(66,13,9,0.04),transparent_72%)]"
      />

      <div className="relative z-10 mx-auto grid max-w-[1120px] items-start gap-20 px-8 md:grid-cols-2 md:gap-x-20 lg:gap-x-28 lg:px-16">
        <Reveal className="order-2 md:order-1">
          <div className="relative mx-auto max-w-md md:mx-0">
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative aspect-[3/4] overflow-hidden rounded-md border border-jintian-black/[0.1] bg-jintian-black shadow-editorial"
            >
              <Image
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80"
                alt="Luxury still life with hourglass mood"
                fill
                className="object-cover opacity-[0.92]"
                sizes="(max-width: 768px) 100vw, 420px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-jintian-black/50 via-transparent to-transparent" />
            </motion.div>
          </div>
        </Reveal>

        <div className="order-1 space-y-12 md:order-2 md:pt-6">
          <Reveal>
            <p className="text-[10px] font-medium uppercase tracking-label text-jintian-black/45">
              Our Vision
            </p>
            <h2 className="mt-8 max-w-xl font-serif text-[2rem] leading-[1.12] tracking-editorial text-jintian-mahogany md:text-[2.35rem] lg:text-[2.45rem]">
              To become a world-class brand that empowers men through science and
              transparency.
            </h2>
          </Reveal>

          <div className="grid gap-3">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={0.06 * i}>
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
        </div>
      </div>
    </section>
  );
}
