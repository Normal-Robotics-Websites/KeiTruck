import Reveal from "./Reveal";

export default function Quote() {
  return (
    <section
      id="quote"
      className="relative overflow-hidden border-t border-ink/8 bg-paper py-44 md:py-64"
    >
      <div className="relative mx-auto max-w-[1440px] px-6 md:px-14">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-32">
          <div className="lg:col-span-6">
            <Reveal>
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-brass" />
                <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-brass">
                  Commission
                </span>
              </div>
              <h2 className="mt-10 font-display text-4xl font-semibold uppercase leading-[1.06] tracking-engineered text-ink md:text-6xl">
                Begin your
                <br />
                <span className="text-graphite">build.</span>
              </h2>
              <p className="mt-12 max-w-md text-base leading-[1.8] text-graphite">
                Each commission begins with a fitting. We'll match donor
                chassis, configure powertrain to your terrain, and walk you
                through the cell stack on a private floor visit.
              </p>

              <div className="mt-16 grid gap-10 border-t border-stone/60 pt-12 sm:grid-cols-2">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-ash">
                    Atelier
                  </p>
                  <p className="mt-3 font-display text-base font-semibold uppercase tracking-engineered text-ink">
                    Burlington, VT
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-ash">
                    Inquiries
                  </p>
                  <p className="mt-3 font-display text-base font-semibold uppercase tracking-engineered text-ink">
                    build@kei.works
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <Reveal delay={0.15}>
              <form className="border border-stone/60 bg-bone p-10 md:p-14">
                <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-brass">
                  Configuration Request
                </p>

                {[
                  { label: "Name", type: "text", id: "name" },
                  { label: "Email", type: "email", id: "email" },
                  { label: "Region · Use Case", type: "text", id: "region" },
                ].map((f) => (
                  <div key={f.id} className="mt-10">
                    <label
                      htmlFor={f.id}
                      className="font-mono text-[9px] uppercase tracking-[0.3em] text-ash"
                    >
                      {f.label}
                    </label>
                    <input
                      id={f.id}
                      type={f.type}
                      className="mt-3 w-full border-0 border-b border-stone bg-transparent pb-3 font-display text-base font-medium uppercase tracking-engineered text-ink outline-none transition-colors placeholder:text-ash/60 focus:border-brass"
                    />
                  </div>
                ))}

                <button
                  type="button"
                  className="group mt-14 inline-flex w-full items-center justify-between bg-ink px-8 py-5 font-display text-[10px] font-medium uppercase tracking-[0.3em] text-paper transition-all hover:bg-obsidian"
                >
                  Reserve a Build Slot
                  <span className="text-brass transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
