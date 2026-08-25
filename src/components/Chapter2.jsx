import { useCallback, useRef, useState } from 'react'
import { Flame, Layers, Wind, AlertTriangle } from 'lucide-react'
import useReveal from '../hooks/useReveal'

function LushScene() {
  return (
    <div className="absolute inset-0">
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, #0c3a26 0%, #16512f 45%, #1f7a3d 100%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            'radial-gradient(60% 50% at 30% 80%, rgba(110,231,183,0.35), transparent 70%), radial-gradient(50% 40% at 75% 60%, rgba(16,185,129,0.3), transparent 70%)',
        }}
      />
      <svg className="absolute inset-x-0 bottom-0 h-1/2 w-full" viewBox="0 0 400 200" preserveAspectRatio="none">
        <path d="M0 200 Q 60 120 120 160 T 260 150 T 400 170 L400 200Z" fill="#0a2c1c" opacity="0.8" />
        <path d="M0 200 Q 90 150 180 175 T 400 185 L400 200Z" fill="#061f14" />
      </svg>
    </div>
  )
}

function FireScene() {
  return (
    <div className="absolute inset-0">
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, #18181b 0%, #3f1d10 55%, #7c2d12 100%)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(55% 45% at 50% 75%, rgba(234,88,12,0.85), rgba(185,28,28,0.35) 50%, transparent 75%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-60 mix-blend-screen"
        style={{
          background:
            'repeating-linear-gradient(115deg, transparent 0 18px, rgba(255,120,40,0.18) 18px 22px)',
        }}
      />
    </div>
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
      {/* AFTER (fire) full */}
      <FireScene />
      {/* BEFORE (lush) clipped to left */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <LushScene />
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
