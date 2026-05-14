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
    <section className="relative overflow-hidden border-t border-jintian-black/[0.06] bg-jintian-cream py-32 md:py-44 lg:py-52">
      <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-center px-8 lg:px-16">
        <div className="h-px w-full max-w-[1120px] bg-jintian-black/[0.08]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-8 lg:px-16">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[10px] font-medium uppercase tracking-label text-jintian-black/45">
            Ingredients
          </p>
          <h2 className="mt-8 font-serif text-[2rem] leading-[1.15] tracking-editorial text-jintian-mahogany md:text-4xl lg:text-[2.65rem]">
            Backed By Science. Inspired By Nature.
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <motion.article
              whileHover={{ y: -2 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group overflow-hidden rounded-md border border-jintian-black/[0.1] bg-jintian-black/[0.02] shadow-editorial"
            >
              <div className="relative aspect-[4/5] sm:aspect-[16/11] lg:aspect-[4/5]">
                <Image
                  src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1200&q=85"
                  alt="PHYSTA Tongkat Ali roots"
                  fill
                  className="object-cover transition duration-[1.2s] ease-out group-hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-jintian-mahogany/80 via-jintian-mahogany/15 to-transparent" />
                <div className="absolute left-6 top-6 border border-white/25 bg-jintian-black/35 px-3 py-1.5 text-[9px] font-medium uppercase tracking-label text-white backdrop-blur-sm">
                  <span className="inline-flex items-center gap-2">
                    <ShieldCheck className="h-3 w-3 text-white/90" strokeWidth={1} />
                    Clinically Studied
                  </span>
                </div>
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-[10px] font-medium uppercase tracking-label text-white/60">
                    Featured Ingredient
                  </p>
                  <h3 className="mt-3 font-serif text-2xl text-white md:text-3xl">
                    PHYSTA&reg; Tongkat Ali
                  </h3>
                </div>
              </div>
            </motion.article>
          </Reveal>

          <Reveal delay={0.08}>
            <motion.article
              whileHover={{ y: -2 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group overflow-hidden rounded-md border border-jintian-black/[0.1] bg-jintian-black/[0.02] shadow-editorial"
            >
              <div className="relative aspect-[4/5] sm:aspect-[16/11] lg:aspect-[4/5]">
                <Image
                  src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1200&q=85"
                  alt="BIOKESUM Kesum leaf botanical"
                  fill
                  className="object-cover transition duration-[1.2s] ease-out group-hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-jintian-mahogany/78 via-jintian-black/5 to-transparent" />
                <div className="absolute left-6 top-6 border border-white/25 bg-jintian-black/35 px-3 py-1.5 text-[9px] font-medium uppercase tracking-label text-white backdrop-blur-sm">
                  <span className="inline-flex items-center gap-2">
                    <Leaf className="h-3 w-3 text-white/90" strokeWidth={1} />
                    Botanical Traceable
                  </span>
                </div>
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-[10px] font-medium uppercase tracking-label text-white/60">
                    Featured Ingredient
                  </p>
                  <h3 className="mt-3 font-serif text-2xl text-white md:text-3xl">
                    BIOKESUM&reg; Kesum Leaf
                  </h3>
                </div>
              </div>
            </motion.article>
          </Reveal>
        </div>

        <div className="mt-20 border border-jintian-black/[0.08] bg-white/50 py-6">
          <div className="flex w-max animate-marquee items-center gap-16 whitespace-nowrap px-10 md:gap-20">
            {row.map((item, idx) => (
              <div
                key={`${item.label}-${idx}`}
                className="inline-flex items-center gap-4 text-jintian-mahogany"
              >
                <span className="inline-flex border border-jintian-black/[0.1] bg-white p-2.5 text-jintian-mahogany">
                  <item.icon className="h-3.5 w-3.5" strokeWidth={1} />
                </span>
                <span className="text-[10px] font-medium uppercase tracking-label text-jintian-black/55">
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
