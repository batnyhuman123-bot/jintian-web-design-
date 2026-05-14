"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Mail } from "lucide-react";
import Link from "next/link";

const quick = [
  { href: "#shop", label: "Shop" },
  { href: "#quiz", label: "Take Quiz" },
  { href: "#story", label: "Our Story" },
  { href: "#blog", label: "Blog" },
];

function FooterParticles() {
  const seeds = Array.from({ length: 22 }, (_, i) => ({
    id: i,
    left: `${(i * 53) % 100}%`,
    top: `${(i * 31) % 100}%`,
    delay: (i % 6) * 0.12,
  }));
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {seeds.map((p) => (
        <motion.span
          key={p.id}
          className="absolute h-1 w-1 rounded-full bg-white/20"
          style={{ left: p.left, top: p.top }}
          animate={{ opacity: [0.1, 0.45, 0.1], y: [0, -12, 0] }}
          transition={{
            duration: 8 + (p.id % 4),
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export function FooterSection() {
  return (
    <footer className="relative overflow-hidden bg-footer-depth text-white">
      <FooterParticles />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_55%)]" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 py-20 md:px-10 md:py-24 lg:px-14">
        <div id="quiz" className="scroll-mt-32" />
        <div id="blog" className="scroll-mt-32" />
        <div className="grid gap-12 md:grid-cols-3 md:gap-10">
          <div>
            <p className="font-serif text-3xl tracking-[0.2em] md:text-4xl">JINTIAN</p>
            <p className="mt-5 max-w-sm font-sans text-sm font-medium leading-relaxed text-white/72">
              Premium men&apos;s wellness crafted with clinical discipline and a
              nature-first philosophy — for energy, strength, and quiet
              confidence.
            </p>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-label text-white/55">
              Quick Links
            </p>
            <ul className="mt-5 space-y-3 font-sans text-sm font-medium text-white/85">
              {quick.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="group inline-flex items-center gap-2 transition hover:text-white"
                  >
                    <span className="text-jintian-bronze transition group-hover:translate-x-0.5">
                      →
                    </span>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-label text-white/55">
              Stay Connected
            </p>
            <div className="mt-5 flex items-center gap-4">
              <Link
                href="https://instagram.com"
                aria-label="Instagram"
                className="inline-flex rounded-full border border-white/15 bg-white/5 p-3 transition hover:border-jintian-bronze/60 hover:bg-white/10 hover:shadow-[0_0_30px_-6px_rgba(184,149,106,0.55)]"
              >
                <Instagram className="h-5 w-5" strokeWidth={1.2} />
              </Link>
              <Link
                href="https://facebook.com"
                aria-label="Facebook"
                className="inline-flex rounded-full border border-white/15 bg-white/5 p-3 transition hover:border-jintian-bronze/60 hover:bg-white/10 hover:shadow-[0_0_30px_-6px_rgba(184,149,106,0.55)]"
              >
                <Facebook className="h-5 w-5" strokeWidth={1.2} />
              </Link>
              <Link
                href="mailto:hello@jintian.com"
                aria-label="Email"
                className="inline-flex rounded-full border border-white/15 bg-white/5 p-3 transition hover:border-jintian-bronze/60 hover:bg-white/10 hover:shadow-[0_0_30px_-6px_rgba(184,149,106,0.55)]"
              >
                <Mail className="h-5 w-5" strokeWidth={1.2} />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} JINTIAN. All rights reserved.</p>
          <div className="flex flex-wrap gap-6 font-medium">
            <Link href="#" className="transition hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="transition hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
