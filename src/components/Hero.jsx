import { useEffect, useRef, useState } from 'react'
import { Leaf } from 'lucide-react'
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
      ref={ref}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-forest px-6 py-24 text-center"
    >
      <div className="relative z-10 flex max-w-[1040px] flex-col items-center gap-7">
        <span
          className={`inline-flex items-center gap-2.5 rounded-full bg-white/10 px-4 py-2.5 text-[13px] font-semibold tracking-[2px] text-mint transition-all duration-700 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <Leaf className="h-4 w-4 text-mint" /> Kampanye Edukasi Lingkungan
        </span>

        <h1
          className={`font-serif text-4xl font-extrabold leading-[1.08] text-cream transition-all duration-700 delay-100 sm:text-6xl lg:text-[68px] ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          Napas Kalimantan Sedang Tercekik: Pahami, Lindungi, Suarakan.
        </h1>

        <p
          className={`max-w-[680px] text-base text-zinc-400 transition-all duration-700 delay-200 sm:text-xl ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          Eksplorasi interaktif perjalanan hutan hujan dan lahan gambut terbesar
          Nusantara.
        </p>

        <button
          onClick={scrollToNext}
          className={`mt-2 rounded-full bg-emerald px-7 py-4 text-base font-bold text-forest transition-all duration-300 hover:scale-105 hover:bg-mint ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          Mulai Membaca Narasi ↓
        </button>
      </div>

      <button
        onClick={scrollToNext}
        aria-label="Scroll ke bawah"
        className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-zinc-500 transition-colors hover:text-mint"
      >
        <span className="flex h-10 w-6 justify-center rounded-[14px] border-2 border-mint/70 pt-2">
          <span className="h-2 w-1 animate-scroll-bounce rounded-full bg-mint" />
        </span>
        <span className="text-xs text-zinc-500">Scroll</span>
      </button>
    </section>
  )
}
