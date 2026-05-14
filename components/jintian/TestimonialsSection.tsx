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
    }, 6400);
    return () => window.clearInterval(id);
  }, []);

  const prev = () =>
    setIndex((i) => (i - 1 + reviews.length) % reviews.length);
  const next = () => setIndex((i) => (i + 1) % reviews.length);

  return (
    <section className="relative overflow-hidden border-t border-jintian-black/[0.06] bg-jintian-cream py-32 md:py-44 lg:py-52">
      <div className="mx-auto max-w-[960px] px-8 lg:px-16">
        <Reveal className="text-center">
          <p className="text-[10px] font-medium uppercase tracking-label text-jintian-black/45">
            Reviews
          </p>
          <h2 className="mt-8 font-serif text-[2rem] tracking-editorial text-jintian-mahogany md:text-4xl">
            What Our Customers Say
          </h2>
        </Reveal>

        <div className="relative mt-20">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={prev}
            className="absolute left-0 top-1/2 z-20 hidden -translate-y-1/2 border border-jintian-black/[0.1] bg-jintian-cream/90 p-2.5 text-jintian-mahogany transition duration-300 hover:bg-white md:inline-flex"
          >
            <ChevronLeft className="h-4 w-4" strokeWidth={1} />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={next}
            className="absolute right-0 top-1/2 z-20 hidden -translate-y-1/2 border border-jintian-black/[0.1] bg-jintian-cream/90 p-2.5 text-jintian-mahogany transition duration-300 hover:bg-white md:inline-flex"
          >
            <ChevronRight className="h-4 w-4" strokeWidth={1} />
          </button>

          <div className="mx-auto max-w-2xl overflow-hidden md:px-14">
            <AnimatePresence mode="wait">
              <motion.div
                key={reviews[index].name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="border border-jintian-black/[0.1] bg-jintian-cream/90 px-10 py-12 shadow-editorial md:px-12 md:py-14"
              >
                <div className="flex items-center gap-1 text-jintian-mahogany/50">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-3.5 w-3.5 fill-jintian-mahogany/25 text-jintian-mahogany/35"
                      strokeWidth={1}
                    />
                  ))}
                </div>
                <p className="mt-8 font-serif text-xl leading-[1.65] text-jintian-mahogany md:text-2xl md:leading-[1.55]">
                  &ldquo;{reviews[index].quote}&rdquo;
                </p>
                <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-jintian-black/[0.08] pt-8">
                  <span className="font-sans text-[13px] font-medium text-jintian-black/75">
                    {reviews[index].name}
                  </span>
                  <span className="inline-flex items-center gap-2 border border-jintian-black/[0.1] bg-white/80 px-3 py-1 text-[9px] font-medium uppercase tracking-label text-jintian-black/55">
                    <span className="h-1 w-1 rounded-full bg-jintian-mahogany" />
                    Verified Customer
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-10 flex justify-center gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className={cn(
                  "h-1 rounded-full transition-all duration-500",
                  i === index
                    ? "w-10 bg-jintian-mahogany"
                    : "w-1 bg-jintian-black/20 hover:bg-jintian-black/35",
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
