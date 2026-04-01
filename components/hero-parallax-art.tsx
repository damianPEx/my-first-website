"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

/** Scroll down → image drifts up slightly (lags foreground). Tweak for more/less float. */
const PARALLAX_Y = -0.16;
const ROTATE_X = 0.018;
const MAX_ROTATE = 3.5;
const PERSPECTIVE = 1400;
const TRANSLATE_Z = -36;

export function HeroParallaxArt({ children }: { children: ReactNode }) {
  const raf = useRef<number>(0);
  const [transform, setTransform] = useState(
    `perspective(${PERSPECTIVE}px) translateY(0px) rotateX(0deg) translateZ(${TRANSLATE_Z}px)`
  );

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const update = () => {
      raf.current = 0;
      const y = window.scrollY;
      const ty = y * PARALLAX_Y;
      const rx = Math.min(MAX_ROTATE, y * ROTATE_X);
      setTransform(
        `perspective(${PERSPECTIVE}px) translateY(${ty}px) rotateX(${rx}deg) translateZ(${TRANSLATE_Z}px)`
      );
    };

    const onScroll = () => {
      if (raf.current) return;
      raf.current = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf.current) window.cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 select-none overflow-visible opacity-[0.2] sm:opacity-[0.24]"
      aria-hidden
      style={{ perspective: `${PERSPECTIVE}px` }}
    >
      {/* Anchor below vertical centre so the art sits lower in the hero */}
      <div className="absolute left-1/2 top-[76%] -translate-x-1/2 -translate-y-1/2 sm:top-[73%] lg:top-[72%]">
        <div
          className="will-change-transform"
          style={{
            transform,
            transformStyle: "preserve-3d",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
