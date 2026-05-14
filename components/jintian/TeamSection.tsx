"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Reveal } from "./Reveal";

const portraits = [
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
];

const founders = [
  {
    name: "John Doe",
    role: "Founder & CEO",
    bio: "Leads product vision with a focus on clinical integrity and modern performance rituals.",
  },
  {
    name: "John Doe",
    role: "Founder & CEO",
    bio: "Champions transparent sourcing and long-term partnerships with research-led suppliers.",
  },
  {
    name: "John Doe",
    role: "Founder & CEO",
    bio: "Builds the brand experience — cinematic storytelling with quiet, confident luxury.",
  },
];

export function TeamSection() {
  return (
    <section className="relative overflow-hidden bg-jintian-cream pb-24 pt-8 md:pb-32 md:pt-10 lg:pb-40">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 text-jintian-mahogany/12">
        <svg
          className="h-full w-full"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          aria-hidden
        >
          <motion.path
            d="M0,64 C240,20 480,110 720,64 C960,18 1200,108 1440,56 L1440,120 L0,120 Z"
            fill="currentColor"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 pt-16 md:px-10 md:pt-20 lg:px-14">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl text-jintian-mahogany md:text-4xl">
            A Team Driven by Purpose
          </h2>
          <p className="mt-4 font-sans text-sm font-medium leading-relaxed text-jintian-black/68 md:text-[15px]">
            A dedicated team driven by innovation, performance, and commitment.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {founders.map((f, i) => (
            <Reveal key={i} delay={0.06 * i}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="overflow-hidden rounded-3xl border border-white/60 bg-white/55 shadow-luxury backdrop-blur-md"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={portraits[i] ?? portraits[0]}
                    alt=""
                    fill
                    className="object-cover transition duration-700 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-jintian-mahogany/55 via-transparent to-transparent" />
                </div>
                <div className="space-y-3 px-6 py-7">
                  <p className="text-[11px] font-semibold uppercase tracking-label text-jintian-mahogany/70">
                    {f.role}
                  </p>
                  <h3 className="font-serif text-2xl text-jintian-mahogany">{f.name}</h3>
                  <p className="font-sans text-xs font-medium leading-relaxed text-jintian-black/65 md:text-sm">
                    {f.bio}
                  </p>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
