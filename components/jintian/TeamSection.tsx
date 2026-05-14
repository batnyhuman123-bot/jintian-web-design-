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
    <section className="relative overflow-hidden border-t border-jintian-black/[0.06] bg-jintian-cream pb-32 pt-24 md:pb-44 md:pt-28 lg:pb-52">
      <div className="relative z-10 mx-auto max-w-[1120px] px-8 lg:px-16">
        <Reveal className="mx-auto max-w-xl text-center">
          <p className="text-[10px] font-medium uppercase tracking-label text-jintian-black/45">
            Team
          </p>
          <h2 className="mt-8 font-serif text-[2rem] tracking-editorial text-jintian-mahogany md:text-4xl">
            A Team Driven by Purpose
          </h2>
          <p className="mx-auto mt-6 max-w-md font-sans text-[14px] font-normal leading-[1.8] text-jintian-black/60">
            A dedicated team driven by innovation, performance, and commitment.
          </p>
        </Reveal>

        <div className="mt-20 grid gap-10 md:grid-cols-3 md:gap-8 lg:gap-10">
          {founders.map((f, i) => (
            <Reveal key={i} delay={0.07 * i}>
              <motion.article
                whileHover={{ y: -3 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="flex flex-col border border-jintian-black/[0.1] bg-white/60 shadow-editorial"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={portraits[i] ?? portraits[0]}
                    alt=""
                    fill
                    className="object-cover transition duration-[1.1s] ease-out hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-jintian-black/25 via-transparent to-transparent" />
                </div>
                <div className="flex flex-1 flex-col px-7 py-8">
                  <p className="text-[10px] font-medium uppercase tracking-label text-jintian-black/45">
                    {f.role}
                  </p>
                  <h3 className="mt-4 font-serif text-2xl tracking-editorial text-jintian-mahogany">
                    {f.name}
                  </h3>
                  <p className="mt-4 font-sans text-[13px] font-normal leading-[1.75] text-jintian-black/60">
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
