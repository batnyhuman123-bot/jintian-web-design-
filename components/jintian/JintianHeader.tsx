"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, ShoppingBag, User, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#shop", label: "Shop" },
  { href: "#quiz", label: "Take Quiz" },
  { href: "#story", label: "Our Story" },
  { href: "#blog", label: "Blog" },
];

export function JintianHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={false}
        animate={{
          backgroundColor: scrolled || open ? "rgba(0,0,0,0.58)" : "rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-[80] border-b backdrop-blur-0 transition-[backdrop-filter,border-color] duration-500",
          scrolled || open
            ? "border-jintian-bronze/40 backdrop-blur-xl"
            : "border-white/10",
        )}
      >
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-jintian-bronze/80 to-transparent transition-opacity duration-500",
            scrolled || open ? "opacity-100" : "opacity-30",
          )}
        />
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-5 md:px-10 lg:px-14">
          <Link
            href="#top"
            className="font-serif text-xl tracking-[0.18em] text-white md:text-2xl"
            onClick={() => setOpen(false)}
          >
            JINTIAN
          </Link>

          <nav className="hidden items-center gap-10 text-[11px] font-medium uppercase tracking-nav text-white/90 md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="nav-underline font-sans transition-colors hover:text-white"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 text-white/90 md:gap-5">
            <button
              type="button"
              aria-label="Account"
              className="hidden rounded-full p-2 transition hover:bg-white/10 hover:text-white md:inline-flex"
            >
              <User className="h-5 w-5" strokeWidth={1.25} />
            </button>
            <button
              type="button"
              aria-label="Cart"
              className="hidden rounded-full p-2 transition hover:bg-white/10 hover:text-white md:inline-flex"
            >
              <ShoppingBag className="h-5 w-5" strokeWidth={1.25} />
            </button>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              className="inline-flex rounded-full p-2 transition hover:bg-white/10 hover:text-white md:hidden"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? (
                <X className="h-5 w-5" strokeWidth={1.25} />
              ) : (
                <Menu className="h-5 w-5" strokeWidth={1.25} />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[73px] z-[75] border-b border-white/10 bg-black/80 px-6 py-6 backdrop-blur-2xl md:hidden"
          >
            <nav className="flex flex-col gap-4 text-[12px] font-semibold uppercase tracking-nav text-white/90">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="border-b border-white/10 py-3 font-sans transition hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <div className="mt-4 flex gap-3 text-white/90">
              <button
                type="button"
                aria-label="Account"
                className="rounded-full border border-white/15 p-3"
              >
                <User className="h-5 w-5" strokeWidth={1.25} />
              </button>
              <button
                type="button"
                aria-label="Cart"
                className="rounded-full border border-white/15 p-3"
              >
                <ShoppingBag className="h-5 w-5" strokeWidth={1.25} />
              </button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
