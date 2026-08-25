import { ChevronDown, Leaf, ArrowDown } from 'lucide-react'
import useReveal from '../hooks/useReveal'

export default function Hero() {
  const [ref, visible] = useReveal()

  const scrollToNext = () => {
    const next = document.getElementById('chapter-1')
    if (next) next.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-forest px-6 py-24 text-center"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            'radial-gradient(120% 80% at 50% 0%, rgba(16,185,129,0.18) 0%, rgba(15,46,28,0) 55%), radial-gradient(80% 60% at 80% 100%, rgba(16,185,129,0.10) 0%, rgba(15,46,28,0) 60%)',
        }}
      />
      <div className="relative z-10 flex max-w-5xl flex-col items-center gap-7">
        <span
          className={`inline-flex items-center gap-2 rounded-full border border-emerald/30 bg-emerald/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-mint transition-all duration-700 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <Leaf className="h-4 w-4" /> Kampanye Edukasi Lingkungan
        </span>

        <h1
          className={`font-serif text-4xl font-extrabold leading-[1.08] text-cream transition-all duration-700 delay-100 sm:text-6xl md:text-7xl ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          Napas Kalimantan Sedang Tercekik:{' '}
          <span className="text-emerald">Pahami, Lindungi, Suarakan.</span>
        </h1>

        <p
          className={`max-w-2xl text-base text-zinc-400 transition-all duration-700 delay-200 sm:text-xl ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          Eksplorasi interaktif perjalanan hutan hujan dan lahan gambut terbesar
          Nusantara.
        </p>

        <button
          onClick={scrollToNext}
          className={`group mt-2 inline-flex items-center gap-2 rounded-full bg-emerald px-7 py-4 text-base font-bold text-forest shadow-lg shadow-emerald/20 transition-all duration-300 hover:scale-105 hover:bg-mint ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          Mulai Membaca Narasi
          <ArrowDown className="h-5 w-5 animate-scroll-bounce" />
        </button>
      </div>

      <button
        onClick={scrollToNext}
        aria-label="Scroll ke bawah"
        className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-zinc-500 transition-colors hover:text-mint"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <span className="flex h-10 w-6 justify-center rounded-full border-2 border-zinc-600 pt-1.5">
          <ChevronDown className="h-4 w-4 animate-scroll-bounce" />
        </span>
      </button>
    </section>
  )
}
