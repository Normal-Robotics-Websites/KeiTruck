interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className ?? ""}`}>
      <svg
        viewBox="0 0 40 40"
        className="h-7 w-7 text-ink"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <circle
          cx="20"
          cy="20"
          r="18.5"
          stroke="currentColor"
          strokeWidth="0.8"
          opacity="0.35"
        />
        <path
          d="M12 12 L12 28 M12 20 L20 12 M12 20 L20 28 M24 12 L24 28 M24 20 L32 20"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="square"
        />
      </svg>
      <div className="flex flex-col leading-none">
        <span className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-ink">
          Kei//Works
        </span>
        <span className="mt-1.5 font-mono text-[9px] uppercase tracking-[0.32em] text-brass">
          Solar · Electric · Atelier
        </span>
      </div>
    </div>
  );
}
