import { useEffect, useState } from 'react'
import Hero from './components/Hero'
import Chapter1 from './components/Chapter1'
import Chapter2 from './components/Chapter2'
import Chapter3 from './components/Chapter3'
import Chapter4 from './components/Chapter4'
import Chapter5 from './components/Chapter5'
import { Leaf } from 'lucide-react'

function ScrollProgress() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight)
      setProgress(Math.min(100, Math.max(0, scrolled * 100)))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <div className="fixed inset-x-0 top-0 z-50 h-1 bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-emerald via-mint to-ember transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

export default function App() {
  return (
    <div className="bg-charcoal text-cream">
      <ScrollProgress />
      <header className="fixed inset-x-0 top-0 z-40 flex items-center justify-between px-6 py-4 sm:px-10">
        <a
          href="#hero"
          className="flex items-center gap-2 font-serif text-lg font-bold text-cream"
        >
          <Leaf className="h-5 w-5 text-emerald" />
          Save Hutan Kalimantan
        </a>
        <a
          href="#chapter-5"
          className="rounded-full bg-emerald/15 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-mint transition-colors hover:bg-emerald hover:text-forest sm:text-sm"
        >
          Ambil Aksi
        </a>
      </header>

      <main>
        <Hero />
        <Chapter1 />
        <Chapter2 />
        <Chapter3 />
        <Chapter4 />
        <Chapter5 />
      </main>

      <footer className="bg-[#08231a] px-6 py-10 text-center text-sm text-zinc-500">
        <p className="font-serif text-base text-cream">
          Save Hutan Kalimantan — Pahami, Lindungi, Suarakan.
        </p>
        <p className="mt-2">
          Kampanye edukasi lingkungan. Data ilustratif untuk tujuan advokasi.
        </p>
      </footer>
    </div>
  )
}
