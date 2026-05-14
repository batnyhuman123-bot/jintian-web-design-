"use client";

import { motion } from "framer-motion";
import {
  Award,
  FlaskConical,
  Leaf,
  Microscope,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import { Reveal } from "./Reveal";

const trust = [
  { label: "Clinically Studied", icon: Microscope },
  { label: "Natural Ingredients", icon: Leaf },
  { label: "Patented Formula", icon: FlaskConical },
  { label: "Premium Quality", icon: Award },
];

export function IngredientsSection() {
  const row = [...trust, ...trust];

  return (
    <section className="relative overflow-hidden bg-jintian-cream py-24 md:py-32 lg:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-jintian-bronze/40 to-transparent"
      />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 md:px-10 lg:px-14">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl leading-tight text-jintian-mahogany md:text-4xl lg:text-[2.6rem]">
            Backed By Science. Inspired By Nature.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <Reveal>
            <motion.article
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="group relative overflow-hidden rounded-3xl border border-white/60 bg-white/45 shadow-luxury backdrop-blur-xl"
            >
              <div className="relative aspect-[16/11]">
                <Image
                  src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1200&q=80"
                  alt="PHYSTA Tongkat Ali roots"
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-jintian-mahogany/75 via-jintian-mahogany/10 to-transparent" />
                <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/35 bg-black/30 px-3 py-1 text-[10px] font-semibold uppercase tracking-label text-white backdrop-blur-md">
                  <ShieldCheck className="h-3.5 w-3.5 text-jintian-bronze" />
                  Clinically Studied
                </div>
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-[11px] font-semibold uppercase tracking-label text-white/75">
                    Featured Ingredient
                  </p>
                  <h3 className="mt-1 font-serif text-2xl text-white md:text-3xl">
                    PHYSTA&reg; Tongkat Ali
                  </h3>
                </div>
              </div>
            </motion.article>
          </Reveal>

          <Reveal delay={0.06}>
            <motion.article
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="group relative overflow-hidden rounded-3xl border border-white/60 bg-white/45 shadow-luxury backdrop-blur-xl"
            >
              <div className="relative aspect-[16/11]">
                <Image
                  src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1200&q=80"
                  alt="BIOKESUM Kesum leaf botanical"
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-jintian-mahogany/75 via-emerald-900/10 to-transparent" />
                <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/35 bg-black/30 px-3 py-1 text-[10px] font-semibold uppercase tracking-label text-white backdrop-blur-md">
                  <Leaf className="h-3.5 w-3.5 text-jintian-bronze" />
                  Botanical Traceable
                </div>
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-[11px] font-semibold uppercase tracking-label text-white/75">
                    Featured Ingredient
                  </p>
                  <h3 className="mt-1 font-serif text-2xl text-white md:text-3xl">
                    BIOKESUM&reg; Kesum Leaf
                  </h3>
                </div>
              </div>
            </motion.article>
          </Reveal>
        </div>

        <div className="mt-14 overflow-hidden rounded-2xl border border-jintian-mahogany/10 bg-jintian-mahogany/[0.03] py-5">
          <div className="flex w-max animate-marquee items-center gap-12 whitespace-nowrap px-6">
            {row.map((item, idx) => (
              <div
                key={`${item.label}-${idx}`}
                className="inline-flex items-center gap-3 text-jintian-mahogany"
              >
                <span className="inline-flex rounded-full border border-jintian-bronze/35 bg-white/60 p-2.5 shadow-sm">
                  <item.icon className="h-4 w-4" strokeWidth={1.2} />
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-label">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
