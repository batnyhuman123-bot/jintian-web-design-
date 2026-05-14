"use client";

import { motion, useMotionValue, useSpring, useScroll } from "framer-motion";
import { useEffect } from "react";

export function PageChrome() {
  const { scrollYProgress } = useScroll();
  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);
  const springX = useSpring(glowX, { stiffness: 120, damping: 22, mass: 0.35 });
  const springY = useSpring(glowY, { stiffness: 120, damping: 22, mass: 0.35 });

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
        className="pointer-events-none fixed inset-0 z-[45] mix-blend-soft-light"
        style={{ opacity: 0.55 }}
      >
        <motion.div
          className="absolute h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(184,149,106,0.14),transparent_62%)] blur-3xl"
          style={{ left: springX, top: springY }}
        />
      </motion.div>

      <div
        aria-hidden
        className="grain-overlay pointer-events-none fixed inset-0 z-[60] animate-grain opacity-70 mix-blend-multiply"
      />

      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 right-0 top-0 z-[70] h-[2px] origin-left bg-gradient-to-r from-jintian-bronze via-white/80 to-jintian-bronze"
        style={{ scaleX: scrollYProgress }}
      />
    </>
  );
}
