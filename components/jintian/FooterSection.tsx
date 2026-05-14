"use client";

import { Facebook, Instagram, Mail } from "lucide-react";
import Link from "next/link";

const quick = [
  { href: "#shop", label: "Shop" },
  { href: "#quiz", label: "Take Quiz" },
  { href: "#story", label: "Our Story" },
  { href: "#blog", label: "Blog" },
];

export function FooterSection() {
  return (
    <footer className="relative overflow-hidden bg-footer-depth text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,255,255,0.06),transparent_55%)]" />

      <div className="relative z-10 mx-auto max-w-[1120px] px-8 py-24 md:py-28 lg:px-16">
        <div id="quiz" className="scroll-mt-32" />
        <div id="blog" className="scroll-mt-32" />

        <div className="grid gap-16 border-b border-white/[0.12] pb-16 md:grid-cols-12 md:gap-12 md:pb-20">
          <div className="md:col-span-5">
            <p className="font-serif text-3xl tracking-[0.18em] md:text-[2.125rem]">
              JINTIAN
            </p>
            <p className="mt-8 max-w-sm font-sans text-[14px] font-normal leading-[1.85] text-white/65">
              Premium men&apos;s wellness crafted with clinical discipline and a
              nature-first philosophy — for energy, strength, and quiet
              confidence.
            </p>
          </div>

          <div className="md:col-span-3 md:border-l md:border-white/[0.1] md:pl-10">
            <p className="text-[10px] font-medium uppercase tracking-label text-white/45">
              Quick Links
            </p>
            <ul className="mt-6 space-y-4 font-sans text-[13px] font-normal text-white/80">
              {quick.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="inline-flex items-baseline gap-2 transition duration-300 hover:text-white"
                  >
                    <span className="text-white/35" aria-hidden>
                      —
                    </span>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 md:border-l md:border-white/[0.1] md:pl-10">
            <p className="text-[10px] font-medium uppercase tracking-label text-white/45">
              Stay Connected
            </p>
            <div className="mt-6 flex items-center gap-3">
              <Link
                href="https://instagram.com"
                aria-label="Instagram"
                className="inline-flex border border-white/20 p-2.5 text-white/85 transition duration-300 hover:border-white/40 hover:text-white"
              >
                <Instagram className="h-4 w-4" strokeWidth={1} />
              </Link>
              <Link
                href="https://facebook.com"
                aria-label="Facebook"
                className="inline-flex border border-white/20 p-2.5 text-white/85 transition duration-300 hover:border-white/40 hover:text-white"
              >
                <Facebook className="h-4 w-4" strokeWidth={1} />
              </Link>
              <Link
                href="mailto:hello@jintian.com"
                aria-label="Email"
                className="inline-flex border border-white/20 p-2.5 text-white/85 transition duration-300 hover:border-white/40 hover:text-white"
              >
                <Mail className="h-4 w-4" strokeWidth={1} />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-6 text-[11px] text-white/45 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} JINTIAN. All rights reserved.</p>
          <div className="flex flex-wrap gap-8">
            <Link href="#" className="transition duration-300 hover:text-white/80">
              Privacy Policy
            </Link>
            <Link href="#" className="transition duration-300 hover:text-white/80">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
