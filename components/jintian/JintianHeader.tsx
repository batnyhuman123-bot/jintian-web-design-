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
          backgroundColor:
            scrolled || open ? "rgba(0,0,0,0.52)" : "rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={cn(
          "fixed inset-x-0 top-0 z-[80] border-b backdrop-blur-0 transition-[backdrop-filter,border-color] duration-500",
          scrolled || open
            ? "border-white/[0.12] backdrop-blur-xl"
            : "border-white/[0.08]",
        )}
      >
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/[0.15] transition-opacity duration-500",
            scrolled || open ? "opacity-100" : "opacity-40",
          )}
        />
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-5 md:px-10 lg:px-14">
          <Link
            href="#top"
            className="font-serif text-lg tracking-[0.16em] text-white md:text-xl"
            onClick={() => setOpen(false)}
          >
            JINTIAN
          </Link>

          <nav className="hidden items-center gap-12 text-[10px] font-medium uppercase tracking-nav text-white/80 md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="nav-underline font-sans transition-colors duration-300 hover:text-white"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1 text-white/85 md:gap-4">
            <button
              type="button"
              aria-label="Account"
              className="hidden rounded-sm p-2 transition duration-300 hover:bg-white/10 hover:text-white md:inline-flex"
            >
              <User className="h-[18px] w-[18px]" strokeWidth={1} />
            </button>
            <button
              type="button"
              aria-label="Cart"
              className="hidden rounded-sm p-2 transition duration-300 hover:bg-white/10 hover:text-white md:inline-flex"
            >
              <ShoppingBag className="h-[18px] w-[18px]" strokeWidth={1} />
            </button>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              className="inline-flex rounded-sm p-2 transition duration-300 hover:bg-white/10 hover:text-white md:hidden"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? (
                <X className="h-5 w-5" strokeWidth={1} />
              ) : (
                <Menu className="h-5 w-5" strokeWidth={1} />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-x-0 top-[73px] z-[75] border-b border-white/10 bg-jintian-black/85 px-8 py-8 backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col divide-y divide-white/10 text-[11px] font-medium uppercase tracking-nav text-white/90">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="py-4 font-sans transition hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <div className="mt-6 flex gap-2 border-t border-white/10 pt-6 text-white/90">
              <button
                type="button"
                aria-label="Account"
                className="border border-white/15 p-3"
              >
                <User className="h-5 w-5" strokeWidth={1} />
              </button>
              <button
                type="button"
                aria-label="Cart"
                className="border border-white/15 p-3"
              >
                <ShoppingBag className="h-5 w-5" strokeWidth={1} />
              </button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
