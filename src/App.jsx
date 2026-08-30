import { useEffect, useState } from 'react'
import { HaldiDivider } from './components/EventIcons'

const BASE = import.meta.env.BASE_URL
const pngMap = {
  haldi: `${BASE}event-cards/Haldi.png`,
  sangeet: `${BASE}event-cards/Sangeet.png`,
  baaraat: `${BASE}event-cards/Baarat.png`,
  reception: `${BASE}event-cards/Weeding Reception.png`,
  ganesh: `${BASE}event-cards/Ganesh.png`,
  logo: `${BASE}event-cards/Logo.png`,
}

const events = [
  {
    id: 'haldi',
    label: 'Haldi • Subah',
    title: 'Haldi',
    time: '11:00 AM',
    date: '20 Nov 2026 — Friday',
    desc: 'Haldi, laughter & marigold showers. Wear yellows — let’s get messy.',
    tag: 'Day 1 • Morning',
    png: pngMap.haldi,
  },
  {
    id: 'sangeet',
    label: 'Sangeet • Shaam',
    title: 'Sangeet Raat',
    time: '5:00 PM',
    date: '20 Nov 2026 — Friday',
    desc: 'Music, dance & winter bonfire over the Nagarkot ridge. Bring your moves.',
    tag: 'Day 1 • Evening',
    png: pngMap.sangeet,
  },
  {
    id: 'baaraat',
    label: 'Baaraat • Savera',
    title: 'Baaraat',
    time: '11:30 AM',
    date: '21 Nov 2026 — Saturday',
    desc: 'The groom arrives — dhol, cheers & Himalayan views. Don’t be late.',
    tag: 'Day 2 • Morning',
    png: pngMap.baaraat,
  },
  {
    id: 'reception',
    label: 'Reception • Dawat',
    title: 'Wedding Reception',
    time: '2:00 PM',
    date: '21 Nov 2026 — Saturday',
    desc: 'Pheras, feast & celebration under winter sky. Swagat chha — the big one.',
    tag: 'Day 2 • Afternoon',
    png: pngMap.reception,
  },
]

function useCountdown(target) {
  const [now, setNow] = useState(() => Date.now())
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [])
  const diff = Math.max(0, target - now)
  const d = Math.floor(diff / 86400000)
  const h = Math.floor((diff % 86400000) / 3600000)
  const m = Math.floor((diff % 3600000) / 60000)
  const s = Math.floor((diff % 60000) / 1000)
  return { d, h, m, s }
}

function MountainRidges({ compact = false }) {
  return (
    <svg viewBox={`0 0 1200 ${compact ? 100 : 160}`} className={`absolute inset-x-0 bottom-0 w-full ${compact ? 'h-[72px]' : 'h-[100px] md:h-[120px]'} pointer-events-none select-none`} preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 80 L140 38 L260 58 L340 32 L470 56 L560 26 L680 48 L780 18 L880 44 L980 28 L1080 52 L1200 34 L1200 100 L0 100 Z" fill="var(--color-slate)" opacity="0.06" />
      <path d="M0 100 L0 66 L110 34 L210 50 L300 26 L420 48 L510 22 L640 42 L730 18 L850 40 L950 24 L1060 48 L1140 34 L1200 42 L1200 100 Z" fill="var(--color-slate)" opacity="0.92" />
      <path d="M110 34 L132 52 L120 57 L102 46 Z" fill="white" opacity="0.95" />
      <path d="M300 26 L322 46 L310 50 L292 38 Z" fill="white" opacity="0.95" />
      <path d="M510 22 L532 42 L520 46 L502 34 Z" fill="white" opacity="0.95" />
      <path d="M730 18 L752 38 L740 42 L722 30 Z" fill="white" opacity="0.92" />
      <path d="M950 24 L970 38 L960 42 L940 32 Z" fill="white" opacity="0.9" />
    </svg>
  )
}

function PageFrame({ children }) {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 border-x border-haldi/20 hidden lg:block" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-haldi/30" aria-hidden="true" />
      {children}
    </div>
  )
}

export default function App() {
  const target = new Date('2026-11-20T11:00:00+05:45').getTime()
  const { d, h, m, s } = useCountdown(target)
  const [menuOpen, setMenuOpen] = useState(false)
  const [showSplash, setShowSplash] = useState(true)
  const [splashVisible, setSplashVisible] = useState(false)
  const [splashExiting, setSplashExiting] = useState(false)

  // Splash — smooth enter + 2.5s hold (3.15s total with fade)
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) { setShowSplash(false); return }
    // lock scroll while splash is up
    document.documentElement.style.overflow = 'hidden'
    // trigger enter transition next frame
    const enterId = requestAnimationFrame(() => requestAnimationFrame(() => setSplashVisible(true)))
    const t1 = setTimeout(() => setSplashExiting(true), 2500)
    const t2 = setTimeout(() => {
      setShowSplash(false)
      document.documentElement.style.overflow = ''
    }, 3150)
    return () => {
      cancelAnimationFrame(enterId)
      clearTimeout(t1); clearTimeout(t2)
      document.documentElement.style.overflow = ''
    }
  }, [])

  // allow manual skip — same smooth exit
  const dismissSplash = () => {
    if (splashExiting) return
    setSplashExiting(true)
    setTimeout(() => {
      setShowSplash(false)
      document.documentElement.style.overflow = ''
    }, 650)
  }

  return (
    <div className="min-h-screen bg-paper text-ink antialiased overflow-x-hidden">
      {/* Splash Loader — first thing: Logo + Sneha & Akhil + date — smooth 1.4s hold */}
      {showSplash && (
        <div
          onClick={dismissSplash}
          className={`fixed inset-0 z-[100] bg-paper flex flex-col items-center justify-center px-6 text-center will-change-[opacity] ${splashExiting ? 'opacity-0 pointer-events-none' : splashVisible ? 'opacity-100' : 'opacity-0'} ${splashExiting ? 'duration-[650ms] ease-[cubic-bezier(0.4,0,0.2,1)]' : 'duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)]'} transition-opacity`}
          aria-hidden={!showSplash}
          role="dialog"
          aria-label="Welcome — Sneha and Akhil wedding"
          style={{ transitionProperty: 'opacity' }}
        >
          {/* soft vignette for depth */}
          <div className={`absolute inset-0 bg-gradient-to-b from-snow/40 via-transparent to-snow/20 pointer-events-none transition-opacity duration-700 ${splashVisible && !splashExiting ? 'opacity-100' : 'opacity-0'}`} aria-hidden="true" />
          <div
            className={`flex flex-col items-center max-w-[420px] w-full will-change-transform transition-all ${splashExiting ? 'duration-[650ms] ease-[cubic-bezier(0.4,0,0.2,1)] opacity-0 -translate-y-2 scale-[0.98]' : splashVisible ? 'duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] opacity-100 translate-y-0 scale-100' : 'duration-[700ms] opacity-0 translate-y-2 scale-[0.98]'}`}
          >
            <p
              className={`font-mono text-[12px] md:text-[13px] tracking-[0.14em] text-pine font-medium transition-all will-change-transform ${splashVisible && !splashExiting ? 'opacity-100 translate-y-0 delay-[80ms] duration-[600ms]' : 'opacity-0 translate-y-1'} ${splashExiting ? 'opacity-0 -translate-y-1 duration-[400ms]' : ''}`}
              style={{ fontFamily: 'Mukta, Noto Serif Devanagari, sans-serif' }}
            >
              श्री गणेशाय नमः
            </p>
            <div className={`mt-3 transition-all will-change-transform ${splashVisible && !splashExiting ? 'opacity-100 scale-100 delay-[140ms] duration-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)]' : 'opacity-0 scale-95'} ${splashExiting ? 'opacity-0 scale-95 duration-[400ms]' : ''}`}>
              <img src={pngMap.logo} alt="Sneha and Akhil logo" className="w-[88px] h-[88px] md:w-[108px] md:h-[108px] object-contain mx-auto drop-shadow-[0_4px_12px_rgba(0,0,0,0.06)]" />
            </div>
            <h1 className={`mt-5 font-display font-bold leading-[0.9] tracking-[-0.03em] text-[32px] md:text-[40px] text-ink will-change-transform transition-all ${splashVisible && !splashExiting ? 'opacity-100 translate-y-0 delay-[220ms] duration-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)]' : 'opacity-0 translate-y-2'} ${splashExiting ? 'opacity-0 -translate-y-1 duration-[400ms]' : ''}`}>
              Sneha <span className="text-haldi font-light">&</span> Akhil
            </h1>
            <div className={`mt-3 h-px bg-haldi mx-auto will-change-transform transition-all ${splashVisible && !splashExiting ? 'w-12 opacity-100 delay-[360ms] duration-[600ms]' : 'w-0 opacity-0'} ${splashExiting ? 'w-0 opacity-0 duration-[300ms]' : ''}`} />
            <p className={`mt-3 font-mono text-[11px] tracking-[0.2em] text-slate font-medium will-change-transform transition-all ${splashVisible && !splashExiting ? 'opacity-100 translate-y-0 delay-[420ms] duration-[600ms]' : 'opacity-0 translate-y-1'} ${splashExiting ? 'opacity-0 duration-[300ms]' : ''}`}>NOV 20–21, 2026 • HOTEL MYSTIC MOUNTAIN • NAGARKOT</p>
            <p className={`mt-2 font-mono text-[10px] tracking-[0.16em] text-muted will-change-transform transition-all ${splashVisible && !splashExiting ? 'opacity-100 translate-y-0 delay-[480ms] duration-[600ms]' : 'opacity-0 translate-y-1'} ${splashExiting ? 'opacity-0 duration-[300ms]' : ''}`}>WINTER MOUNTAIN SHAADI • 2 DAYS • 4 EVENTS</p>
            <button
              onClick={(e) => { e.stopPropagation(); dismissSplash() }}
              className={`mt-8 font-mono text-[11px] tracking-[0.16em] border rounded-full px-4 py-1.5 bg-snow transition-all will-change-transform ${splashVisible && !splashExiting ? 'opacity-60 hover:opacity-100 hover:text-ink border-border delay-[560ms] duration-[500ms] translate-y-0' : 'opacity-0 translate-y-1'} ${splashExiting ? 'opacity-0 duration-[300ms]' : ''}`}
            >
              Enter →
            </button>
          </div>
          <div className={`absolute bottom-0 inset-x-0 h-[64px] pointer-events-none will-change-transform transition-all ${splashVisible && !splashExiting ? 'opacity-90 translate-y-0 delay-[300ms] duration-[700ms]' : 'opacity-0 translate-y-4'} ${splashExiting ? 'opacity-0 translate-y-4 duration-[500ms]' : ''}`}>
            <MountainRidges compact />
          </div>
        </div>
      )}
      {/* Nav */}
      <header className="sticky top-0 z-30 bg-paper/92 backdrop-blur border-b border-border">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 h-[60px] flex items-center justify-between gap-4">
          <a href="#" className="flex items-center gap-2.5">
            <img src={pngMap.logo} alt="Sneha & Akhil logo" className="w-8 h-8 md:w-9 md:h-9 object-contain rounded-full border border-border bg-white p-0.5" />
            <span className="font-display text-[19px] tracking-tight leading-none">Sneha <span className="text-haldi font-light">&</span> Akhil</span>
            <span className="hidden lg:inline font-mono text-[10px] tracking-[0.16em] text-muted ml-1">NOV 20–21 • NAGARKOT</span>
          </a>
          <nav className="hidden md:flex items-center gap-5 text-[13px] font-medium">
            <a href="#schedule" className="hover:text-sindoor transition-colors">Schedule</a>
            <a href="#venue" className="hover:text-sindoor transition-colors">Venue</a>
            <a href="#gallery" className="hover:text-sindoor transition-colors">Gallery</a>
            <a href="#rsvp" className="inline-flex items-center gap-1.5 bg-sindoor text-white px-4 py-2 rounded-full font-semibold hover:brightness-[0.96]">RSVP Karo →</a>
          </nav>
          <button className="md:hidden w-9 h-9 grid place-items-center border border-border rounded-full" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">{menuOpen ? '✕' : '≡'}</button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-border bg-paper px-4 py-3 flex flex-col gap-2 text-[14px]">
            <a href="#schedule" onClick={() => setMenuOpen(false)} className="py-1.5">Schedule</a>
            <a href="#venue" onClick={() => setMenuOpen(false)} className="py-1.5">Venue — Hotel Mystic Mountain</a>
            <a href="#gallery" onClick={() => setMenuOpen(false)} className="py-1.5">Gallery</a>
            <a href="#rsvp" onClick={() => setMenuOpen(false)} className="mt-2 inline-flex justify-center bg-sindoor text-white px-4 py-2.5 rounded-full font-semibold">RSVP Karo</a>
          </div>
        )}
      </header>

      <PageFrame>
        <div className="hidden md:flex h-6 items-center justify-center gap-3 border-b border-border bg-snow text-[10px] font-mono tracking-[0.18em] text-muted">
          <span>❈</span> WINTER MOUNTAIN SHAADI • HOTEL MYSTIC MOUNTAIN • NAGARKOT <span>❈</span>
        </div>

        {/* HERO — full-bleed editorial */}
        <section className="relative bg-paper overflow-hidden">
          <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-slate) 1px, transparent 0)`, backgroundSize: '26px 26px' }} aria-hidden="true" />
          <div className="relative mx-auto max-w-[1200px] px-4 md:px-6">
            {/* Ganesh */}
            <div className="flex flex-col items-center pt-10 md:pt-14">
              <img src={pngMap.ganesh} alt="Shri Ganesh" className="w-[84px] h-[84px] md:w-[96px] md:h-[96px] object-contain drop-shadow-sm" />
              <p className="font-mono text-[10px] tracking-[0.2em] text-muted mt-2">श्री गणेशाय नमः • Shri Ganeshaya Namah</p>
              <p className="font-mono text-[10px] tracking-[0.14em] text-pine mt-1">— auspicious beginnings —</p>
            </div>

            <div className="text-center mt-6 md:mt-8 pb-8">
              <p className="font-mono text-[11px] tracking-[0.2em] text-pine font-medium">TOGETHER WITH OUR FAMILIES • हमारे परिवारों के साथ</p>
              <h1 className="mt-3 font-display font-bold leading-[0.88] tracking-[-0.03em]">
                <span className="block text-[56px] md:text-[84px]">Sneha</span>
                <span className="flex items-center justify-center gap-3 md:gap-4 -mt-1">
                  <span className="h-px w-10 md:w-16 bg-haldi" />
                  <span className="font-display font-light italic text-haldi text-[46px] md:text-[68px]">&</span>
                  <span className="h-px w-10 md:w-16 bg-haldi" />
                </span>
                <span className="block text-[56px] md:text-[84px] -mt-1.5">Akhil</span>
              </h1>
              <p className="mx-auto mt-4 max-w-[560px] text-[16px] md:text-[17px] leading-relaxed text-ink/75">
                Swagat chha — you’re warmly invited. Two days of haldi, sangeet & Himalayan celebration at Hotel Mystic Mountain, Nagarkot. Winter air, warm hearts.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-2.5">
                <a href="#rsvp" className="inline-flex items-center gap-2 bg-sindoor text-white px-6 py-3 rounded-full font-semibold text-[14px] hover:brightness-[0.97]">RSVP Karo →</a>
                <a href="#venue" className="inline-flex items-center gap-2 border border-border bg-white px-5 py-3 rounded-full font-semibold text-[13px]">View location — Nagarkot</a>
              </div>

              <div className="mt-8 flex flex-wrap justify-center divide-x divide-border border-y border-border bg-snow/60 backdrop-blur-sm">
                {[
                  { v: String(d).padStart(2, '0'), l: 'Din' },
                  { v: String(h).padStart(2, '0'), l: 'Ghante' },
                  { v: String(m).padStart(2, '0'), l: 'Minute' },
                  { v: String(s).padStart(2, '0'), l: 'Second' },
                ].map((x) => (
                  <div key={x.l} className="px-6 md:px-8 py-3 text-center min-w-[84px]">
                    <div className="font-mono text-[26px] font-bold leading-none">{x.v}</div>
                    <div className="font-mono text-[10px] tracking-[0.16em] text-muted mt-1">{x.l}</div>
                  </div>
                ))}
              </div>
              <p className="font-mono text-[10px] tracking-[0.14em] text-muted mt-2">COUNTDOWN TO HALDI • 20 NOV 11:00 AM IST</p>
            </div>
          </div>
          <div className="relative h-[86px] md:h-[100px] border-y border-border bg-snow overflow-hidden">
            <MountainRidges compact />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-white border border-border rounded-full px-3.5 py-1.5 font-mono text-[10px] tracking-[0.16em] text-slate shadow-sm">▲ NAGARKOT RIDGE • 2,175M • WINTER HIMALAYA ▲</span>
            </div>
          </div>
        </section>

        {/* STORY — continuous */}
        <section className="bg-paper border-b border-border">
          <div className="mx-auto max-w-[1200px] px-4 md:px-6 py-12 md:py-16">
            <div className="grid md:grid-cols-[0.95fr_1.4fr] gap-8 md:gap-12 items-start">
              <div className="md:sticky md:top-[72px]">
                <p className="font-mono text-[11px] tracking-[0.2em] text-pine">OUR STORY • हमारी कहानी</p>
                <blockquote className="mt-3 font-display text-[34px] md:text-[40px] leading-[0.95] tracking-tight">
                  Delhi lights,
                  <br />Nagarkot skies<span className="text-haldi">.</span>
                </blockquote>
                <div className="mt-4 h-px w-16 bg-haldi" />
                <div className="mt-5 flex gap-6 font-mono text-[12px]">
                  <span><span className="font-display text-[20px] leading-none text-ink">2</span> <span className="text-muted tracking-wide">days</span></span>
                  <span><span className="font-display text-[20px] leading-none text-ink">4</span> <span className="text-muted tracking-wide">events</span></span>
                  <span><span className="font-display text-[20px] leading-none text-ink">1</span> <span className="text-muted tracking-wide">ridge</span></span>
                </div>
              </div>
              <div className="border-l border-border pl-6 md:pl-10">
                <p className="font-mono text-[11px] tracking-[0.16em] text-muted">A NOTE FROM SNEHA & AKHIL</p>
                <p className="mt-3 text-[16px] leading-relaxed text-ink/80">
                  We met in Delhi — metro rides, late-night chai, and a city that never agreed on weather. Now we’re taking that story to the ridge: winter air at 2,175m, marigold where you expected snow, and all our people in one place. Same us, higher altitude.
                </p>
                <p className="mt-3 text-[16px] leading-relaxed text-ink/80">
                  Nagarkot in November is crisp — carry a shawl for evenings. Garam chai will be waiting. Swagat chha, with love and layers.
                </p>
                <div className="mt-6 flex flex-wrap gap-2 font-mono text-[11px]">
                  <span className="inline-flex items-center gap-1.5 border border-border rounded-full px-3 py-1.5 bg-snow">Festive Indian • warm layers</span>
                  <span className="inline-flex items-center gap-1.5 border border-border rounded-full px-3 py-1.5 bg-snow">Winter mountain • 6–20°C</span>
                  <span className="inline-flex items-center gap-1.5 border border-border rounded-full px-3 py-1.5 bg-snow">Himalayan ridge • Nagarkot</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SCHEDULE — continuous timeline, PNG when toggled */}
        <section id="schedule" className="bg-snow border-b border-border">
          <div className="mx-auto max-w-[1200px] px-4 md:px-6 py-10 md:py-14">
            <div className="flex items-end justify-between gap-4 flex-wrap">
              <div>
                <p className="font-mono text-[11px] tracking-[0.2em] text-pine">SCHEDULE • कार्यक्रम</p>
                <h2 className="font-display text-[32px] md:text-[40px] leading-none tracking-tight mt-1">Chaaron jashn, ek pahad</h2>
                <p className="text-[14px] text-muted mt-2">All events at Hotel Mystic Mountain, Nagarkot — same ridge, no shuttles needed.</p>
              </div>
              <p className="hidden md:block font-mono text-[11px] tracking-[0.12em] text-muted">— Hotel Mystic Mountain • Same venue —</p>
            </div>

            <div className="mt-8 border-y border-border bg-paper divide-y divide-border">
              {events.map((e) => (
                <div key={e.id} className="grid grid-cols-[72px_1fr] md:grid-cols-[96px_1fr_160px] gap-0 items-stretch group hover:bg-snow/40 transition-colors">
                  <div className="flex items-center justify-center border-r border-border bg-snow/30 p-2">
                    <img src={e.png} alt={e.title} className="w-[64px] h-[64px] md:w-[72px] md:h-[72px] object-contain" loading="lazy" />
                  </div>
                  <div className="px-5 md:px-7 py-6">
                    <p className="font-mono text-[10px] tracking-[0.16em] text-muted">{e.tag} • {e.label}</p>
                    <h3 className="font-display text-[22px] md:text-[24px] leading-none tracking-tight mt-1">{e.title}</h3>
                    <p className="text-[14px] leading-relaxed text-ink/70 mt-2">{e.desc}</p>
                    <p className="font-mono text-[11px] tracking-[0.12em] text-muted mt-2">Hotel Mystic Mountain • Nagarkot</p>
                  </div>
                  <div className="hidden md:flex flex-col justify-center border-l border-border px-6 py-6 bg-snow/20">
                    <p className="font-mono text-[11px] tracking-[0.12em] text-muted">{e.date}</p>
                    <p className="font-mono text-[18px] font-bold leading-none mt-1">{e.time}</p>
                    <p className="font-mono text-[10px] tracking-[0.14em] text-muted mt-1">IST • Nagarkot</p>
                  </div>
                  <div className="col-span-2 md:hidden px-5 pb-4 -mt-2 flex items-center gap-2">
                    <span className="font-mono text-[13px] font-semibold">{e.time}</span>
                    <span className="font-mono text-[11px] text-muted">• {e.date}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 border border-dashed border-haldi/40 bg-haldi/5 px-4 py-3 flex flex-wrap gap-2 items-center text-[13px]">
              <span className="font-mono text-[11px] tracking-[0.14em] font-semibold">❄ WINTER TIP:</span>
              <span className="text-ink/70">Days sunny (20°C) — nights 6°C. Bring shawl/jacket for Sangeet bonfire & Reception.</span>
            </div>
          </div>
        </section>

        {/* VENUE */}
        <section id="venue" className="bg-paper border-b border-border">
          <div className="mx-auto max-w-[1200px] grid lg:grid-cols-[1.25fr_0.95fr]">
            <div className="relative min-h-[380px] lg:min-h-[520px] border-b lg:border-b-0 lg:border-r border-border bg-snow">
              <iframe
                title="Hotel Mystic Mountain Nagarkot map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.682!2d85.5217498!3d27.6985941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb070fa97aec7f%3A0xee2da932468f8157!2sHotel%20Mystic%20Mountain%20Nagarkot!5e0!3m2!1sen!2snp!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 380 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute top-4 left-4 bg-white border border-border px-3 py-1.5 font-mono text-[11px] tracking-[0.12em] font-semibold">HOTEL MYSTIC MOUNTAIN • NAGARKOT</div>
            </div>
            <div className="px-6 md:px-8 py-8 md:py-10">
              <p className="font-mono text-[11px] tracking-[0.2em] text-pine">VENUE • स्थान</p>
              <h3 className="font-display text-[28px] leading-none tracking-tight mt-1">Hotel Mystic Mountain</h3>
              <p className="font-mono text-[11px] tracking-[0.12em] text-muted mt-1">Nagarkot, Nepal • 2,175m • Himalayan ridge</p>
              <p className="mt-4 text-[14.5px] leading-relaxed text-ink/75">Ridge-top resort with Annapurna & Everest views on clear winter mornings. All 4 events on same lawns/banquet — no venue hopping.</p>
              <div className="mt-5 border border-border bg-snow px-4 py-4">
                <p className="font-mono text-[11px] tracking-[0.12em] text-muted">ADDRESS</p>
                <p className="text-[14px] mt-1">Hotel Mystic Mountain, Nagarkot — 32km east of Kathmandu. Approx 1.5 hrs drive.</p>
                <a href="https://maps.app.goo.gl/6fckijyR1bK4TYcy6" target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-2 bg-slate text-white px-4 py-2 rounded-full text-[13px] font-semibold">Open in Maps ↗</a>
              </div>
              <ul className="mt-5 space-y-2 font-mono text-[12px] text-ink/70">
                <li>▸ Festive Indian + warm layer (shawl/pashmina for evenings)</li>
                <li>▸ Parking • Shuttle from Kathmandu on request</li>
                <li>▸ Winter sunrise 6:30 AM — don’t miss ridge views</li>
              </ul>
            </div>
          </div>
        </section>

        {/* GALLERY — continuous bleed with haldi dividers */}
        <section id="gallery" className="bg-paper border-b border-border">
          <div className="mx-auto max-w-[1200px] px-4 md:px-6 pt-10 pb-0">
            <p className="font-mono text-[11px] tracking-[0.2em] text-pine">GALLERY • तस्वीरें</p>
            <h2 className="font-display text-[30px] md:text-[38px] leading-none tracking-tight mt-1">Pahad, phool & pyaar</h2>
            <p className="font-mono text-[11px] tracking-[0.12em] text-muted mt-2">Placeholders — replace with your photos in public/ • Haldi divider below</p>
          </div>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-0 border-y border-haldi/40 divide-x divide-y divide-haldi/20 bg-haldi/10">
            {[
              'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
              'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80',
              'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80',
              'https://images.unsplash.com/photo-1520854221256-589c72ea5d78?w=800&q=80',
              'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=800&q=80',
              'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80&sat=-100',
            ].map((src, i) => (
              <div key={i} className="relative aspect-[4/3] overflow-hidden bg-snow group">
                <img src={src} alt={`placeholder ${i + 1}`} className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform duration-700" loading="lazy" />
                <div className="absolute top-2 left-2 bg-slate/85 text-white rounded-full px-2 py-1 font-mono text-[10px] tracking-[0.1em]">▲ NAGARKOT</div>
              </div>
            ))}
          </div>
          <HaldiDivider />
        </section>

        {/* RSVP */}
        <section id="rsvp" className="bg-snow border-b border-border">
          <div className="mx-auto max-w-[1200px] px-4 md:px-6 py-10 md:py-14 text-center">
            <p className="font-mono text-[11px] tracking-[0.2em] text-pine">RSVP • कृपया बताएं</p>
            <h2 className="font-display text-[32px] md:text-[42px] leading-none tracking-tight mt-2">Aap aa rahe hain?</h2>
            <p className="mx-auto mt-3 max-w-[520px] text-[15px] leading-relaxed text-ink/70">Tell us you’re coming — one form for all 4 events. 2 minutes, no login. We’ll share transport groups on WhatsApp.</p>
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); alert('Google Form — replace href with your form URL when ready.') }}
                className="inline-flex items-center justify-center gap-2 bg-sindoor text-white px-7 py-3 rounded-full font-semibold text-[15px] hover:brightness-[0.97]"
              >
                RSVP Karo — Google Form ↗
              </a>
              <span className="inline-flex items-center justify-center border border-border bg-white px-4 py-2 rounded-full font-mono text-[11px] tracking-[0.12em] text-muted">Link added by you later</span>
            </div>
            <p className="font-mono text-[11px] tracking-[0.12em] text-muted mt-3">Or WhatsApp hosts — numbers in footer ↓</p>
          </div>
        </section>
      </PageFrame>

      <footer className="bg-slate text-snow">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 py-10">
          <div className="grid md:grid-cols-[1.4fr_0.9fr_0.9fr] gap-8">
            <div>
              <p className="font-display text-[24px] leading-none">Sneha & Akhil</p>
              <p className="font-mono text-[11px] tracking-[0.14em] text-ice mt-1">WINTER MOUNTAIN SHAADI • NAGARKOT 2026</p>
              <p className="text-[13px] leading-relaxed text-snow/70 mt-3 max-w-[420px]">Thank you for celebrating with us on the ridge — your presence is the gift. For help, reach hosts below. Swagat chha, with love and warm layers.</p>
              <div className="mt-4 inline-flex items-center gap-2 border border-white/15 bg-white/5 px-3 py-1.5 rounded-full font-mono text-[11px] tracking-[0.12em]">#SnehaWedsAkhil • #NagarkotShaadi</div>
            </div>
            <div>
              <p className="font-mono text-[11px] tracking-[0.14em] text-ice">CONTACTS • संपर्क</p>
              <p className="font-mono text-[10px] tracking-[0.12em] text-snow/50 mt-1">Editable — replace placeholders</p>
              <div className="mt-3 space-y-3 text-[13px]">
                <div className="border border-white/10 bg-white/5 p-3">
                  <p className="font-semibold text-white">Sneha’s family</p>
                  <p className="font-mono text-[12px] text-snow/70">Name — +91 98XXX XXXXX</p>
                  <p className="font-mono text-[12px] text-snow/70">Name — +91 98XXX XXXXX</p>
                </div>
                <div className="border border-white/10 bg-white/5 p-3">
                  <p className="font-semibold text-white">Akhil’s family</p>
                  <p className="font-mono text-[12px] text-snow/70">Name — +91 98XXX XXXXX</p>
                  <p className="font-mono text-[12px] text-snow/70">Name — +91 98XXX XXXXX</p>
                </div>
              </div>
            </div>
            <div>
              <p className="font-mono text-[11px] tracking-[0.14em] text-ice">DETAILS</p>
              <ul className="mt-3 space-y-2 text-[13px] leading-relaxed text-snow/70">
                <li>📍 Hotel Mystic Mountain — <a className="underline decoration-ice/40 hover:text-white" href="https://maps.app.goo.gl/6fckijyR1bK4TYcy6" target="_blank" rel="noreferrer">Maps ↗</a></li>
                <li>❄ 6–20°C — carry shawl</li>
                <li>🕚 Haldi 11 AM → Sangeet 5 PM → Baaraat 11:30 AM → Reception 2 PM</li>
                <li>💌 RSVP via Google Form</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 font-mono text-[11px] tracking-[0.12em] text-snow/50">
            <span>© 2026 Sneha & Akhil • Dhanyabad • Nagarkot</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-haldi" /> Vite + React + Tailwind v4 • PNG build</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
