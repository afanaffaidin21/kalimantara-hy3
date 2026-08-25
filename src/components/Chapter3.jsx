import { useState } from 'react'
import { Plus, Minus, ShieldAlert, CheckCircle2 } from 'lucide-react'
import useReveal from '../hooks/useReveal'

const items = [
  {
    myth: 'Kebakaran murni bencana alam akibat kemarau.',
    fact: '99% Karhutla dipicu oleh aktivitas pengeringan kanal & pembukaan lahan non-berkelanjutan.',
  },
  {
    myth: 'Kabut asap hanya masalah lokal Kalimantan.',
    fact: 'Partikel PM2.5 menyebar lintas pulau dan negara, memicu krisis iklim global.',
  },
]

export default function Chapter3() {
  const [ref, visible] = useReveal()
  const [open, setOpen] = useState(0)

  return (
    <section
      id="chapter-3"
      ref={ref}
      className="bg-charcoal px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-4xl">
        <div
          className={`mb-12 text-center transition-all duration-700 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <span className="text-sm font-bold uppercase tracking-[0.3em] text-ember">
            Bab 3
          </span>
          <h2 className="mt-3 font-serif text-4xl font-extrabold text-cream sm:text-5xl">
            Mitos vs. Fakta
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-400">
            Patahkan narasi keliru. Ketuk setiap kartu untuk membuka fakta di
            balik kebakaran hutan Kalimantan.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          {items.map((it, i) => {
            const isOpen = open === i
            return (
              <div
                key={i}
                className={`overflow-hidden rounded-2xl border transition-all duration-500 ${
                  isOpen
                    ? 'border-ember/50 bg-slate-smoke'
                    : 'border-white/10 bg-slate-smoke/50'
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center gap-4 px-6 py-6 text-left sm:px-8"
                  aria-expanded={isOpen}
                >
                  <span className="shrink-0 rounded-full bg-ember px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-cream">
                    Mitos
                  </span>
                  <span className="flex-1 font-serif text-lg font-semibold text-cream sm:text-xl">
                    {it.myth}
                  </span>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-mint">
                    {isOpen ? (
                      <Minus className="h-5 w-5" />
                    ) : (
                      <Plus className="h-5 w-5" />
                    )}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="mx-6 mb-6 rounded-2xl border border-emerald/30 bg-[#10231a] p-6 sm:mx-8">
                      <div className="mb-2 flex items-center gap-2 text-mint">
                        <CheckCircle2 className="h-5 w-5" />
                        <span className="text-xs font-extrabold uppercase tracking-[0.2em]">
                          Fakta
                        </span>
                      </div>
                      <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
                        {it.fact}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-zinc-500">
          <ShieldAlert className="h-4 w-4 text-ember" />
          Pengetahuan adalah benteng pertama pelindungan hutan.
        </div>
      </div>
    </section>
  )
}
