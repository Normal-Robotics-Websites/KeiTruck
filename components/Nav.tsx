"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";

const links = [
  { href: "#vision", label: "Vision" },
  { href: "#process", label: "Process" },
  { href: "#utility", label: "Utility" },
  { href: "#specs", label: "Specifications" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-ink/8 bg-paper/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-6 md:px-14 md:py-7">
        <a href="#top" className="text-ink">
          <Logo />
        </a>

        <nav className="hidden items-center gap-14 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative font-display text-[10px] font-medium uppercase tracking-[0.3em] text-graphite transition-colors hover:text-ink"
            >
              {l.label}
              <span className="absolute -bottom-2 left-0 h-px w-0 bg-brass transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href="#quote"
          className="group hidden items-center gap-3 border border-ink/20 bg-transparent px-6 py-2.5 font-display text-[10px] font-medium uppercase tracking-[0.28em] text-ink transition-all hover:border-brass hover:bg-brass hover:text-paper md:flex"
        >
          Configure
          <span className="transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </a>
      </div>
    </header>
  );
}
