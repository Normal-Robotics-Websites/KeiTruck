import Reveal from "./Reveal";

export default function Vision() {
  return (
    <section
      id="vision"
      className="relative overflow-hidden border-t border-ink/8 bg-paper py-44 md:py-64"
    >
      <div className="relative mx-auto grid max-w-[1440px] gap-16 px-6 md:px-14 lg:grid-cols-12 lg:gap-32">
        <div className="lg:col-span-4">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-brass" />
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-brass">
                01 — The Vision
              </span>
            </div>
            <h2 className="mt-12 font-display text-4xl font-semibold uppercase leading-[1.08] tracking-engineered text-ink md:text-5xl">
              Take the grid
              <br />
              <span className="text-graphite">with you.</span>
            </h2>
          </Reveal>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <Reveal delay={0.15}>
            <p className="font-display text-2xl font-light leading-[1.4] text-ink md:text-3xl">
              We transform vintage Kei trucks into sophisticated,
              solar-powered electric vehicles that act as your mobile power
              station.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="mt-12 max-w-xl text-base leading-[1.8] text-graphite">
              Zero exhaust. Zero noise. Infinite capability for the modern
              craftsman. Every chassis is hand-stripped, every cell hand-laid,
              every panel torque-checked against a single standard — yours.
            </p>
          </Reveal>

          <Reveal delay={0.45}>
            <div className="mt-20 grid grid-cols-3 gap-8 border-t border-stone/60 pt-12">
              {[
                { k: "Zero", v: "Tailpipe Emissions" },
                { k: "Hand-built", v: "in Vermont" },
                { k: "Lifetime", v: "Powertrain Support" },
              ].map((f) => (
                <div key={f.v}>
                  <div className="font-display text-2xl font-medium uppercase tracking-engineered text-ink md:text-3xl">
                    {f.k}
                  </div>
                  <div className="mt-3 font-mono text-[9px] uppercase tracking-[0.3em] text-brass">
                    {f.v}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
