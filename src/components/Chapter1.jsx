import { useEffect, useRef, useState } from 'react'
import { Trees, Bird, Globe2, Sparkles } from 'lucide-react'
import useReveal from '../hooks/useReveal'

const stats = [
  {
    icon: Trees,
    value: 40.5,
    suffix: ' Juta Hektar',
    unit: 'Luas Hutan Tropis & Gambut',
    desc: 'Hutan hujan dan lahan gambut Kalimantan menyingkap keanekaragaman hayati tertinggi di Nusantara.',
    decimals: 1,
  },
  {
    icon: Bird,
    value: 3000,
    suffix: '+ Spesies',
    unit: 'Spesies Endemik',
    desc: 'Orangutan, Bekantan, dan Enggang adalah sebagian dari ribuan makhluk yang memanggil hutan ini rumah.',
    decimals: 0,
  },
  {
    icon: Globe2,
    value: null,
    display: 'Miliaran Ton',
    unit: 'Cadangan Karbon Raksasa',
    desc: 'Lapisan gambut menyimpan miliaran ton karbon global yang menjaga keseimbangan iklim dunia.',
    decimals: 0,
  },
]

function useCountUp(target, active, decimals) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!active || target == null) return
    let raf
    const start = performance.now()
    const duration = 1400
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setVal(target * eased)
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, active])
  return decimals ? val.toFixed(decimals) : Math.round(val).toLocaleString('id-ID')
}

function StatCard({ stat, active }) {
  const Icon = stat.icon
  const counted = useCountUp(stat.value, active, stat.decimals)
  return (
    <div className="group relative flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/[0.07] p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-emerald/40 hover:bg-white/[0.12]">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald/15 text-emerald transition-colors group-hover:bg-emerald group-hover:text-forest">
        <Icon className="h-7 w-7" />
      </div>
      <div className="font-serif text-4xl font-extrabold text-mint sm:text-5xl">
        {stat.display ?? counted}
        {stat.suffix && <span className="text-2xl">{stat.suffix}</span>}
      </div>
      <div className="text-sm font-bold uppercase tracking-wide text-emerald">
        {stat.unit}
      </div>
      <p className="text-sm leading-relaxed text-zinc-400">{stat.desc}</p>
    </div>
  )
}

export default function Chapter1() {
  const [ref, visible] = useReveal()
  return (
    <section
      id="chapter-1"
      ref={ref}
      className="bg-forest px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div
          className={`mb-14 max-w-3xl transition-all duration-700 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <span className="text-sm font-bold uppercase tracking-[0.3em] text-emerald">
            Bab 1
          </span>
          <h2 className="mt-3 font-serif text-4xl font-extrabold text-cream sm:text-5xl">
            Jantung Zamrud Khatulistiwa
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Ekosistem hutan hujan dan lahan gambut Kalimantan adalah paru-paru
            sekaligus cadangan karbon raksasa Nusantara.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((s, i) => (
            <div
              key={s.unit}
              className={`transition-all duration-700 ${
                visible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <StatCard stat={s} active={visible} />
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center gap-2 text-sm text-zinc-500">
          <Sparkles className="h-4 w-4 text-emerald" />
          Ketuk atau arahkan kartu untuk melihat detailnya.
        </div>
      </div>
    </section>
  )
}
