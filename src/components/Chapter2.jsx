import { useCallback, useRef, useState } from 'react'
import { Flame, Layers, Wind, AlertTriangle } from 'lucide-react'
import useReveal from '../hooks/useReveal'

function SceneImage({ src, alt, className }) {
  return (
    <img
      src={src}
      alt={alt}
      draggable={false}
      className={`absolute inset-0 h-full w-full object-cover ${className || ''}`}
    />
  )
}

function BeforeAfterSlider() {
  const [pos, setPos] = useState(50)
  const trackRef = useRef(null)
  const dragging = useRef(false)

  const updateFromClientX = useCallback((clientX) => {
    const el = trackRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.max(0, Math.min(100, pct)))
  }, [])

  const onPointerDown = (e) => {
    dragging.current = true
    e.currentTarget.setPointerCapture?.(e.pointerId)
    updateFromClientX(e.clientX)
  }
  const onPointerMove = (e) => {
    if (!dragging.current) return
    updateFromClientX(e.clientX)
  }
  const onPointerUp = () => {
    dragging.current = false
  }

  return (
    <div
      ref={trackRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      className="relative h-[340px] w-full cursor-ew-resize select-none overflow-hidden rounded-3xl border border-white/10 sm:h-[460px]"
    >
      {/* AFTER (smoldering peat) full */}
      <SceneImage src="/images/after.jpg" alt="Lahan gambut terbakar di bawah tanah" />
      {/* BEFORE (lush green) clipped to left */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <SceneImage src="/images/before.jpg" alt="Hutan gambut tropis yang lembap dan hijau" />
      </div>

      {/* Labels */}
      <span className="absolute left-4 top-4 rounded-lg bg-black/55 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-mint">
        Sebelum · Gambut Lembap
      </span>
      <span className="absolute right-4 top-4 rounded-lg bg-black/55 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-ember">
        Sesudah · Api Bawah Tanah
      </span>

      {/* Divider + knob */}
      <div
        className="absolute top-0 z-10 h-full w-0.5 bg-cream"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-ember bg-cream text-forest shadow-lg">
          <Flame className="h-5 w-5" />
        </div>
      </div>
    </div>
  )
}

const anatomy = [
  {
    icon: Layers,
    title: 'Terbakar dari Dalam',
    desc: 'Gambut adalah tumpukan bahan organik padat. Api merayap di bawah permukaan tanpa nyala besar, sehingga nyaris mustahil dipadamkan.',
  },
  {
    icon: AlertTriangle,
    title: 'Karbon Padat',
    desc: 'Lapisan setebal 10+ meter menyimpan karbon ribuan tahun. Bila terbakar, CO₂ dilepas dalam jumlah yang luar biasa besar.',
  },
  {
    icon: Wind,
    title: 'Asap Beracun',
    desc: 'Pembakaran lambat memunculkan kabut asap PM2.5 yang menyengat mata dan paru hingga melintasi batas negara.',
  },
]

export default function Chapter2() {
  const [ref, visible] = useReveal()
  return (
    <section
      id="chapter-2"
      ref={ref}
      className="bg-charcoal px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div
          className={`mb-12 max-w-3xl transition-all duration-700 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <span className="text-sm font-bold uppercase tracking-[0.3em] text-ember">
            Bab 2
          </span>
          <h2 className="mt-3 font-serif text-4xl font-extrabold text-cream sm:text-5xl">
            Mengapa Gambut Terbakar Berbulan-bulan?
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Gambut menyimpan karbon dalam lapisan tebal di bawah permukaan. Saat
            mengering, ia terbakar dari dalam — tak terlihat, namun mengepulkan
            asap beracun berbulan-bulan.
          </p>
        </div>

        <div
          className={`mb-14 transition-all duration-700 delay-100 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <BeforeAfterSlider />
          <p className="mt-3 text-center text-sm text-zinc-500">
            Seret garis pemisah untuk membandingkan gambut lembap dengan api
            bawah tanah.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {anatomy.map((a, i) => {
            const Icon = a.icon
            return (
              <div
                key={a.title}
                className={`rounded-2xl border border-white/10 bg-slate-smoke/60 p-7 transition-all duration-700 hover:border-ember/40 ${
                  visible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <Icon className="mb-4 h-8 w-8 text-ember" />
                <h3 className="mb-2 font-serif text-xl font-bold text-cream">
                  {a.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-300">{a.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
