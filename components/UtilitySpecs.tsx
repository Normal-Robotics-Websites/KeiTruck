import Reveal from "./Reveal";

function OutletIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden
    >
      <circle cx="16" cy="16" r="13" />
      <rect x="11" y="9" width="2" height="7" />
      <rect x="19" y="9" width="2" height="7" />
      <circle cx="16" cy="22" r="1.6" />
    </svg>
  );
}

function ToolIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden
    >
      <path d="M6 26 L20 12 M20 12 L24 8 L26 10 L22 14 L20 12 Z" />
      <path d="M4 28 L8 24" />
      <path d="M14 18 L18 22" />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden
    >
      <path d="M18 4 L8 18 L15 18 L13 28 L24 13 L17 13 L18 4 Z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden
    >
      <circle cx="16" cy="16" r="6" />
      <path d="M16 3 V7 M16 25 V29 M3 16 H7 M25 16 H29 M6.5 6.5 L9.3 9.3 M22.7 22.7 L25.5 25.5 M6.5 25.5 L9.3 22.7 M22.7 9.3 L25.5 6.5" />
    </svg>
  );
}

const cells = [
  {
    span: "md:col-span-2 md:row-span-2",
    title: "3 × 120V",
    sub: "Weatherproof Bed Outlets",
    body: "Pure sine-wave power. Run a chop saw, an inverter welder, and the espresso machine — simultaneously, anywhere.",
    icon: <OutletIcon />,
    accent: true,
  },
  {
    title: "30A",
    sub: "Continuous Draw",
    body: "Sustained heavy-tool load with thermal headroom for the long workday.",
    icon: <BoltIcon />,
  },
  {
    title: "IP67",
    sub: "Sealed Connectors",
    body: "Rated for rain, dust, and the back-of-the-truck reality.",
    icon: <ToolIcon />,
  },
  {
    title: "400W",
    sub: "Solar Replenishment",
    body: "Roof-mounted monocrystalline array tops the pack while you work.",
    icon: <SunIcon />,
  },
  {
    title: "Silent",
    sub: "Site-Approved",
    body: "Below 35 dB at idle. Welcome on every residential, hospital, and film set in the country.",
    icon: <BoltIcon />,
  },
];

export default function UtilitySpecs() {
  return (
    <section
      id="utility"
      className="relative overflow-hidden border-t border-ink/8 bg-paper py-44 md:py-64"
    >
      <div className="relative mx-auto max-w-[1440px] px-6 md:px-14">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-brass" />
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-brass">
              03 — Grid-Free
            </span>
          </div>
          <h2 className="mt-10 max-w-4xl font-display text-4xl font-semibold uppercase leading-[1.06] tracking-engineered text-ink md:text-6xl">
            The truck
            <br />
            <span className="text-graphite">is the outlet.</span>
          </h2>
          <p className="mt-12 max-w-xl text-base leading-[1.8] text-graphite">
            Three weatherproof 120V outlets are built directly into the bed
            rail. The truck becomes your generator — cleaner, quieter, and
            already where you needed to be.
          </p>
        </Reveal>

        {/* Bento grid — soft dividers */}
        <div className="mt-28 grid auto-rows-[minmax(220px,1fr)] grid-cols-1 gap-px overflow-hidden border border-stone/60 bg-stone/60 md:grid-cols-4">
          {cells.map((c, i) => (
            <Reveal
              key={c.title + i}
              delay={i * 0.06}
              className={c.span ?? ""}
            >
              <div
                className={`group relative flex h-full flex-col justify-between bg-bone p-10 transition-colors duration-500 hover:bg-paper ${
                  c.accent ? "md:p-16" : ""
                }`}
              >
                <div className="text-graphite transition-colors group-hover:text-brass">
                  {c.icon}
                </div>

                <div className="mt-12">
                  <div className="flex items-baseline gap-3">
                    <span
                      className={`font-display font-semibold uppercase tracking-engineered text-ink ${
                        c.accent ? "text-6xl md:text-7xl" : "text-3xl md:text-4xl"
                      }`}
                    >
                      {c.title}
                    </span>
                  </div>
                  <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.3em] text-brass">
                    {c.sub}
                  </p>
                  {c.body && (
                    <p
                      className={`mt-5 leading-[1.7] text-graphite ${
                        c.accent ? "max-w-md text-base" : "text-sm"
                      }`}
                    >
                      {c.body}
                    </p>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
