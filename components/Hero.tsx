"use client";

import { motion, useReducedMotion } from "framer-motion";
import Reveal from "./Reveal";

const metrics = [
  { value: "260", unit: "mi", label: "Range" },
  { value: "40", unit: "min", label: "80% Charge" },
  { value: "300", unit: "Ah", label: "Energy Storage" },
  { value: "700", unit: "lb", label: "Payload" },
];

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-paper"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1553260168-69b041873e65?auto=format&fit=crop&w=2400&q=80"
          alt="Kei truck"
          className="h-full w-full object-cover opacity-[0.55]"
          style={{ filter: "grayscale(1) brightness(1.05) contrast(1.05)" }}
        />
        {/* Soften image into the paper background */}
        <div className="absolute inset-0 bg-gradient-to-b from-paper/30 via-paper/15 to-paper" />
        <div className="absolute inset-0 bg-gradient-to-r from-paper/60 via-transparent to-paper/30" />
      </div>

      {/* Floating tag — top-left */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        className="absolute left-6 top-32 hidden items-center gap-3 md:left-14 md:flex"
      >
        <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-brass" />
        <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-graphite">
          Atelier No. 04 · Build in Progress
        </span>
      </motion.div>

      {/* Vertical year marker — right */}
      <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 md:right-14 md:block">
        <div className="flex flex-col items-center gap-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-ash [writing-mode:vertical-rl]">
            Est · Two Thousand Twenty Four
          </span>
          <span className="h-24 w-px bg-gradient-to-b from-transparent via-ink/25 to-transparent" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pb-28 pt-44 md:px-14 md:pb-36 md:pt-48">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-11">
            <Reveal>
              <p className="mb-12 font-mono text-[10px] uppercase tracking-[0.4em] text-brass">
                ◊ &nbsp; Solar Electrified Kei Series · Mk IV
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="font-display text-[12vw] font-semibold uppercase leading-[1.04] tracking-engineered text-ink md:text-[7.6vw] lg:text-[6.4vw]">
                Power the future.
                <br />
                <span className="text-graphite">Sustain the craft.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.35}>
              <div className="mt-20 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="#process"
                  className="group relative inline-flex items-center justify-center gap-4 overflow-hidden bg-ink px-10 py-5 font-display text-[10px] font-medium uppercase tracking-[0.3em] text-paper transition-all hover:bg-obsidian"
                >
                  <span className="relative z-10">Explore the Build</span>
                  <span className="relative z-10 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
                <a
                  href="#quote"
                  className="group inline-flex items-center justify-center gap-4 border border-ink/25 bg-transparent px-10 py-5 font-display text-[10px] font-medium uppercase tracking-[0.3em] text-ink transition-all hover:border-brass hover:bg-brass/5"
                >
                  Request a Quote
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Quick Specs Bar — single airy horizontal row */}
      <motion.div
        initial={{ opacity: 0, y: reduce ? 0 : 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 border-t border-ink/8 bg-paper/80 backdrop-blur-md"
      >
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 md:grid-cols-4">
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className={`relative flex flex-col items-start gap-3 px-6 py-10 md:px-12 md:py-12 ${
                i > 0 ? "md:border-l md:border-stone/60" : ""
              } ${i === 1 || i === 3 ? "border-l border-stone/60 md:border-l" : ""} ${
                i >= 2 ? "border-t border-stone/60 md:border-t-0" : ""
              }`}
            >
              <span className="font-mono text-[9px] uppercase tracking-[0.32em] text-ash">
                {m.label}
              </span>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-5xl font-medium tracking-engineered text-ink md:text-6xl">
                  {m.value}
                </span>
                <span className="font-mono text-xs lowercase tracking-[0.18em] text-graphite">
                  {m.unit}
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
