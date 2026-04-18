import Reveal from "./Reveal";

const phases = [
  {
    n: "01",
    title: "The Stripping",
    sub: "Restoration · Disassembly",
    body: "Every combustion artifact is removed by hand. Frame is media-blasted, treated, and re-aligned to factory tolerances before any new system is introduced.",
    tags: ["Frame", "Body", "Drivetrain"],
  },
  {
    n: "02",
    title: "The Heart",
    sub: "Motor · MCU Integration",
    body: "A high-performance permanent-magnet electric motor is mated to a custom adapter. Motor Control Unit is calibrated for low-end torque on grade and silent jobsite operation.",
    tags: ["80kW Motor", "MCU", "Throttle Map"],
  },
  {
    n: "03",
    title: "The Energy",
    sub: "Battery · Charging",
    body: "Custom NMC pack with active liquid thermal management. CCS1 fast-charge port and an integrated J1772 inlet — recharge anywhere, deploy everywhere.",
    tags: ["LFP/NMC", "CCS1", "J1772"],
  },
  {
    n: "04",
    title: "The Array",
    sub: "Solar · Inverter Stack",
    body: "Walkable monocrystalline array bonded to a brushed aluminum canopy. Pure sine-wave inverters split traction reserves from the on-board grid for true mobile power.",
    tags: ["Mono Si", "Pure Sine", "MPPT"],
  },
];

export default function BuildProcess() {
  return (
    <section
      id="process"
      className="relative overflow-hidden border-t border-ink/8 bg-bone py-44 md:py-64"
    >
      <div className="relative mx-auto max-w-[1440px] px-6 md:px-14">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-12 md:flex-row md:items-end">
            <div>
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-brass" />
                <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-brass">
                  02 — The Process
                </span>
              </div>
              <h2 className="mt-10 max-w-3xl font-display text-4xl font-semibold uppercase leading-[1.06] tracking-engineered text-ink md:text-6xl">
                Four phases.
                <br />
                <span className="text-graphite">One standard.</span>
              </h2>
            </div>
            <p className="max-w-sm text-base leading-[1.8] text-graphite">
              An average build occupies the atelier for nine months. Every
              client is invited to walk the floor at each phase transition.
            </p>
          </div>
        </Reveal>

        {/* Phase grid — soft dividers */}
        <div className="mt-28 grid gap-px overflow-hidden border border-stone/60 bg-stone/60 md:grid-cols-2">
          {phases.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.08}>
              <article className="group relative h-full bg-bone p-12 transition-colors duration-500 hover:bg-paper md:p-16">
                <div className="flex items-start justify-between">
                  <span className="font-display text-7xl font-light tracking-engineered text-ink/15 transition-colors duration-500 group-hover:text-brass/40 md:text-8xl">
                    {p.n}
                  </span>
                  <span className="mt-4 font-mono text-[9px] uppercase tracking-[0.32em] text-ash">
                    Phase
                  </span>
                </div>

                <div className="mt-14">
                  <p className="font-mono text-[9px] uppercase tracking-[0.32em] text-brass">
                    {p.sub}
                  </p>
                  <h3 className="mt-4 font-display text-3xl font-semibold uppercase tracking-engineered text-ink md:text-4xl">
                    {p.title}
                  </h3>
                  <p className="mt-6 max-w-md text-base leading-[1.8] text-graphite">
                    {p.body}
                  </p>
                </div>

                <div className="mt-12 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="border border-stone/80 bg-paper/60 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.24em] text-graphite"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <span className="absolute inset-x-12 bottom-0 h-px origin-left scale-x-0 bg-brass transition-transform duration-700 group-hover:scale-x-100 md:inset-x-16" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
