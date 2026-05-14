"use client";

import { motion, useMotionValue, useSpring, useScroll } from "framer-motion";
import { useEffect } from "react";

/** Minimal global layer: soft cursor bloom + static grain + hairline scroll progress */
export function PageChrome() {
  const { scrollYProgress } = useScroll();
  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);
  const springX = useSpring(glowX, { stiffness: 50, damping: 28, mass: 0.8 });
  const springY = useSpring(glowY, { stiffness: 50, damping: 28, mass: 0.8 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      glowX.set(e.clientX);
      glowY.set(e.clientY);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [glowX, glowY]);

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[40] mix-blend-overlay"
        style={{ opacity: 0.22 }}
      >
        <motion.div
          className="absolute h-[min(70vw,520px)] w-[min(70vw,520px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.07),transparent_68%)] blur-3xl"
          style={{ left: springX, top: springY }}
        />
      </motion.div>

      <div
        aria-hidden
        className="grain-overlay pointer-events-none fixed inset-0 z-[55] opacity-50 mix-blend-multiply"
      />

      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 right-0 top-0 z-[70] h-px origin-left bg-jintian-mahogany/90"
        style={{ scaleX: scrollYProgress }}
      />
    </>
  );
}
