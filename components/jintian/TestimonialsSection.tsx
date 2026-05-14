"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

const reviews = [
  {
    quote:
      "Noticeable energy without the crash. The ritual feels premium — exactly what I wanted.",
    name: "Marcus L.",
  },
  {
    quote:
      "Clean formulation and real transparency. It’s become part of my morning performance stack.",
    name: "Daniel K.",
  },
  {
    quote:
      "Subtle confidence boost across long workdays. The brand experience matches the product.",
    name: "Ethan R.",
  },
];

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % reviews.length);
    }, 5200);
    return () => window.clearInterval(id);
  }, []);

  const prev = () =>
    setIndex((i) => (i - 1 + reviews.length) % reviews.length);
  const next = () => setIndex((i) => (i + 1) % reviews.length);

  return (
    <section className="relative overflow-hidden bg-jintian-cream py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-[1100px] px-6 md:px-10 lg:px-14">
        <Reveal className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-label text-jintian-mahogany/70">
            Reviews
          </p>
          <h2 className="mt-4 font-serif text-3xl text-jintian-mahogany md:text-4xl">
            What Our Customers Say
          </h2>
        </Reveal>

        <div className="relative mt-14">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={prev}
            className="absolute left-0 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-jintian-mahogany/15 bg-white/70 p-3 text-jintian-mahogany shadow-md backdrop-blur-md transition hover:border-jintian-bronze/50 hover:shadow-lg md:inline-flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={next}
            className="absolute right-0 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-jintian-mahogany/15 bg-white/70 p-3 text-jintian-mahogany shadow-md backdrop-blur-md transition hover:border-jintian-bronze/50 hover:shadow-lg md:inline-flex"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="mx-auto max-w-3xl overflow-hidden md:px-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={reviews[index].name}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-3xl border border-white/60 bg-white/45 p-8 shadow-luxury backdrop-blur-xl md:p-10"
              >
                <div className="flex items-center gap-1 text-jintian-bronze">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-jintian-bronze/90 text-jintian-bronze"
                    />
                  ))}
                </div>
                <p className="mt-6 font-serif text-xl leading-relaxed text-jintian-mahogany md:text-2xl">
                  &ldquo;{reviews[index].quote}&rdquo;
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <span className="font-sans text-sm font-semibold text-jintian-black/80">
                    {reviews[index].name}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-jintian-mahogany/10 bg-jintian-mahogany/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-label text-jintian-mahogany">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Verified Customer
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className={cn(
                  "h-2 rounded-full transition-all",
                  i === index
                    ? "w-8 bg-jintian-mahogany"
                    : "w-2 bg-jintian-mahogany/25 hover:bg-jintian-mahogany/45",
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
