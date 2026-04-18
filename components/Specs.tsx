import Reveal from "./Reveal";

const groups = [
  {
    head: "Powertrain",
    rows: [
      ["Motor", "PMSM · 80 kW Peak"],
      ["Torque", "240 Nm @ 0 rpm"],
      ["Top Speed", "75 mph"],
      ["Drive", "Single-Speed Reduction"],
    ],
  },
  {
    head: "Energy Storage",
    rows: [
      ["Capacity", "300 Ah · 28.8 kWh"],
      ["Chemistry", "NMC w/ LFP option"],
      ["Thermal", "Active Liquid"],
      ["Range", "260 mi · WLTP-est."],
    ],
  },
  {
    head: "Charging",
    rows: [
      ["DC Fast", "CCS1 · 50 kW"],
      ["AC L2", "J1772 · 11.5 kW"],
      ["Solar", "400 W Mono Si"],
      ["80% SoC", "40 minutes"],
    ],
  },
  {
    head: "Utility",
    rows: [
      ["Bed Outlets", "3 × 120V · 30A"],
      ["Inverter", "5 kW · Pure Sine"],
      ["Payload", "700 lb"],
      ["Bed", "Stainless Skid Plate"],
    ],
  },
];

export default function Specs() {
  return (
    <section
      id="specs"
      className="relative overflow-hidden border-t border-ink/8 bg-bone py-44 md:py-64"
    >
      <div className="relative mx-auto max-w-[1440px] px-6 md:px-14">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-brass" />
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-brass">
              04 — Technical Dossier
            </span>
          </div>
          <h2 className="mt-10 max-w-3xl font-display text-4xl font-semibold uppercase leading-[1.06] tracking-engineered text-ink md:text-6xl">
            Specifications.
          </h2>
        </Reveal>

        <div className="mt-24 grid gap-px overflow-hidden border border-stone/60 bg-stone/60 md:grid-cols-2 lg:grid-cols-4">
          {groups.map((g, i) => (
            <Reveal key={g.head} delay={i * 0.07}>
              <div className="h-full bg-bone p-10 md:p-12">
                <h3 className="font-mono text-[10px] uppercase tracking-[0.32em] text-brass">
                  {g.head}
                </h3>
                <dl className="mt-12 space-y-6">
                  {g.rows.map(([k, v]) => (
                    <div
                      key={k}
                      className="flex items-baseline justify-between gap-4 border-b border-stone/50 pb-4 last:border-0"
                    >
                      <dt className="font-mono text-[10px] uppercase tracking-[0.24em] text-ash">
                        {k}
                      </dt>
                      <dd className="text-right font-display text-sm font-medium uppercase tracking-engineered text-ink">
                        {v}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
