import { Sticker, FileBarChart, Smartphone, MessageCircle, Twitter, Hash } from 'lucide-react'
import useReveal from '../hooks/useReveal'

const SHARE_TEXT =
  'Napas Kalimantan sedang tercekik. Pahami, lindungi, suarakan. Pelajari fakta kebakaran hutan & lahan gambut di kampanye Save Hutan Kalimantan.'
const SHARE_URL = 'https://savehutankalimantan.id'

const downloads = [
  { icon: Sticker, title: 'Digital Stickers', desc: '12 stiker satwa Kalimantan untuk WhatsApp & Telegram.' },
  { icon: FileBarChart, title: 'Infographic Pack', desc: 'Fakta Karhutla siap bagikan dalam satu PDF ringkas.' },
  { icon: Smartphone, title: 'IG Story Templates', desc: '10 template Story bertema #SaveHutanKalimantan.' },
]

export default function Chapter5() {
  const [ref, visible] = useReveal()

  const waLink = `https://wa.me/?text=${encodeURIComponent(SHARE_TEXT + ' ' + SHARE_URL)}`
  const xLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    SHARE_TEXT,
  )}&url=${encodeURIComponent(SHARE_URL)}&hashtags=SaveHutanKalimantan`

  return (
    <section
      id="chapter-5"
      ref={ref}
      className="relative overflow-hidden px-6 py-24 sm:py-32"
      style={{
        background:
          'linear-gradient(160deg, #103a29 0%, #0f2e1c 55%, #08231a 100%)',
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            'radial-gradient(70% 60% at 50% 0%, rgba(110,231,183,0.18), transparent 70%)',
        }}
      />
      <div className="relative mx-auto max-w-6xl">
        <div
          className={`mb-14 text-center transition-all duration-700 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <span className="text-sm font-bold uppercase tracking-[0.3em] text-mint">
            Bab 5 · Amplifikasi
          </span>
          <h2 className="mx-auto mt-3 max-w-3xl font-serif text-4xl font-extrabold text-cream sm:text-5xl">
            Amplifikasi & Toolkit Digital
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#d1fae5]">
            Suara kamu adalah bagian dari narasi ini. Unduh materi gratis dan
            sebarkan ke lingkaran terdekatmu.
          </p>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          {downloads.map((d, i) => {
            const Icon = d.icon
            return (
              <div
                key={d.title}
                className={`flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/[0.08] p-7 transition-all duration-700 hover:-translate-y-1.5 hover:border-mint/40 ${
                  visible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <Icon className="h-9 w-9 text-mint" />
                <h3 className="font-serif text-xl font-bold text-cream">
                  {d.title}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-[#d1fae5]">
                  {d.desc}
                </p>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="inline-flex items-center justify-center rounded-full bg-mint px-5 py-3 text-sm font-bold text-sage transition-colors hover:bg-emerald"
                >
                  Unduh Gratis
                </a>
              </div>
            )
          })}
        </div>

        <div
          className={`flex flex-col items-center gap-5 transition-all duration-700 delay-100 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <span className="text-sm uppercase tracking-widest text-[#d1fae5]">
            Sebarkan dalam 1 klik
          </span>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-[#25D366] px-7 py-4 font-bold text-[#0c3a29] transition-transform hover:scale-105"
            >
              <MessageCircle className="h-5 w-5" />
              Bagikan ke WhatsApp
            </a>
            <a
              href={xLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-cream px-7 py-4 font-bold text-charcoal transition-transform hover:scale-105"
            >
              <Twitter className="h-5 w-5" />
              Thread di X / Twitter
            </a>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <span className="flex items-center gap-2 font-serif text-3xl font-extrabold text-mint sm:text-4xl">
            <Hash className="h-7 w-7" />
            SaveHutanKalimantan
          </span>
        </div>
      </div>
    </section>
  )
}
