import { Trees, Wind, ThermometerSun, ArrowRight } from 'lucide-react'
import useReveal from '../hooks/useReveal'

const steps = [
  {
    n: '1',
    icon: Trees,
    title: 'Degradasi Habitat',
    desc: 'Orangutan, bekantan, dan ratusan spesies kehilangan rumah saat kanopi hutan lenyap.',
  },
  {
    n: '2',
    icon: Wind,
    title: 'Krisis Kualitas Udara',
    desc: "ISPU menyentuh level 'Sangat Tidak Sehat'. PM2.5 merusak paru anak-anak dan lansia.",
  },
  {
    n: '3',
    icon: ThermometerSun,
    title: 'Peningkatan Emisi Global',
    desc: 'Karbon gambut yang terbakar mempercepat krisis iklim yang dirasakan seluruh dunia.',
  },
]

export default function Chapter4() {
  const [ref, visible] = useReveal()
  return (
    <section
      id="chapter-4"
      ref={ref}
      className="bg-sage px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div
          className={`mb-14 max-w-3xl transition-all duration-700 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <span className="text-sm font-bold uppercase tracking-[0.3em] text-mint">
            Bab 4
          </span>
          <h2 className="mt-3 font-serif text-4xl font-extrabold text-cream sm:text-5xl">
            Dampak Nyata pada Manusia & Satwa
          </h2>
          <p className="mt-4 text-lg text-[#d1fae5]">
            Asap dan kehilangan hutan tak berhenti di pohon. Ini rantai krisis
            yang menyentuh kehidupan kita setiap hari.
          </p>
        </div>

        <div className="grid items-stretch gap-5 md:grid-cols-3">
          {steps.map((s, i) => {
            const Icon = s.icon
            return (
              <div key={s.n} className="relative">
                <div
                  className={`flex h-full flex-col gap-4 rounded-3xl border border-white/15 bg-white/[0.10] p-8 backdrop-blur-sm transition-all duration-700 hover:-translate-y-1.5 hover:bg-white/[0.16] ${
                    visible
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-mint text-base font-extrabold text-sage">
                      {s.n}
                    </span>
                    <Icon className="h-8 w-8 text-mint" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-cream">
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#d1fae5]">
                    {s.desc}
                  </p>
                </div>
                {i < steps.length - 1 && (
                  <ArrowRight className="absolute -right-4 top-1/2 hidden h-7 w-7 -translate-y-1/2 text-mint md:block" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
