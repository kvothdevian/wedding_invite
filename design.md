# Design System — Sneha & Akhil | Winter Mountain Shaadi
> Character: Playful / Festive — Maximalist Indian + Winter Mountain. For Himalayan November wedding where haldi warmth meets snow air.
> Job: Deliver invite + all info + RSVP in <30s on WhatsApp (375px), still ceremonial on desktop.
> References: 01-hero maximalist floral arch + mountain silhouette vibe, 02-dense schedule cards, 03-gallery ornate grid

## 1. Character & Point of View
- **Archetype:** Playful / Festive pushed to Maximalist (festive density + ornament, not minimal). Maximalist Indian needs elaborate execution: ornate floral borders, block-print motifs, arch frames, layered textures.
- **Personality:** warm, celebratory, alpine — haldi brightness against icy mountain slate, maximalist but controlled.
- **Winter twist:** Hotel Mystic Mountain Nagarkot — Himalayan venue. We encode mountains via: slate/ice/snow palette, layered ridge silhouettes in hero, pine accents, subtle snow grain. Floral border stays but winterized (marigold + pine + snowflake micro-motif).
- **Signature Element:** Floral border as ornate frame — double-line border with corner marigold clusters + tiny mountain ridge repeating motif. Oversized background watermark: ह (ह) ligature + mountain outline behind names. One bold, rest quiet.
- **Anti-Slop Guards:** No Inter-for-display, no purple gradient, no glass-blur default, no cream-terracotta generic — we use warm snow paper + slate-ice contrast. No decorative 01/02/03; labels encode truth: "Haldi • Subah" etc.
- **Inspiration Steal:** Indian block-print density + Nagarkot ridge layering + editorial serif hierarchy

## 2. Palette — @theme OKLCH (6, named, Signal <10%)
> All tokens in src/styles/theme.css
- Paper: oklch(0.98 0.012 75) #FFFBF2 — warm snow base (page bg)
- Snow: oklch(0.96 0.015 240) #F0F4F8 — icy panel bg
- Ink: oklch(0.22 0.02 30) #2B1B14 — text, headers
- Slate: oklch(0.35 0.035 245) #2F3D4E — mountain slate, nav, footer
- Haldi: oklch(0.83 0.14 85) #E8A415 — marigold borders, dividers
- Sindoor: oklch(0.58 0.19 28) #C13B2A — Signal <10% — RSVP CTA only
- Pine: oklch(0.48 0.08 150) #3A6B4A — winter pine accent
- Ice: oklch(0.72 0.09 220) #7BAFD4 — ice blue accent, mountain highlights
- Border: oklch(0.92 0.015 75) #EDE6DA — hairlines
- Rule: Sindoor only on primary RSVP; hover reduces L by 0.05. Haldi for ornamental frames.

## 3. Typography (3 roles, scale 1.25 Major Third)
- **Display:** Cormorant Garamond, 52-80px, 600-700, tracking -0.02em — names hero only, with restraint. Supports Latin + Devanagari fallback via Mukta.
- **Body:** Plus Jakarta Sans, 16px/1.6, 400/500 — details, schedule copy
- **Mono/Data + Hindi:** JetBrains Mono 12-13px + Mukta — dates, times, eyebrow labels, Hinglish phrases ("Padharo", "Shaadi", "Sangeet Raat")
- Scale: 13 / 16 / 20 / 25 / 31 / 39 / 48 / 64 / 80
- Anti-pattern banned: Inter-for-both, Roboto, Arial

## 4. Layout & Structure
- Grid: 12-col, max-w 1200, gutters 24px
- Wireframe:
  ```
  [Ornate top border: floral + mountain ridge repeating SVG, 28px]
  [Nav: slate text, names left serif, links Schedule/Venue, CTA Sindoor pill — hairline bottom]
  [Hero: centered arch frame with floral corners, mountain ridge layers behind, snow grain
         Eyebrow mono: "SNEHA & AKHIL — NAGARKOT • NOV 20-21, 2026"
         Display stacked: Sneha & Akhil (ampersand watermark)
         Hinglish sub + countdown pills (days/hours)
         CTA row: [RSVP Karo — sindoor] + [View Location — outline]
  ]
  [Story: 2-col, left serif quote with pine divider, right body]
  [Schedule: 4 dense cards — 2x2 on desktop, 1-col mobile, ornate Haldi border top accent, pine icon]
  [Venue: split — map embed left, details right, slate feature box for Alpine info]
  [Gallery: 3×2 bleed grid, ornate borders, hover zoom]
  [RSVP: snow panel, centered card, sindoor CTA -> Google Form placeholder]
  [Footer: slate bg, ice text, marigold dividers, editable contacts]
  ```
- Density: Dense maximalist but breathing — 24px gaps, not uniform 64px. Marketplace-dense for cards.
- Radius / Shadow: 14px card, soft shadow only on hover 0 16px 48px
- Motion: Page-load stagger 80ms per section (CSS), mountain parallax subtle, respects reduced-motion, no scroll-jacking

## 5. Content Voice
- Plain verbs, sentence case, Hinglish mix: "Haldi • Subah 11 baje", "Sangeet Raat — 5 PM", "Baaraat — 11:30 AM", "Padharo sa!"
- Empty state: invitation, not mood. Errors explain fix.

## 6. Theme.css Path
- `src/styles/theme.css` @theme block mirrors above. Import via `src/index.css`: `@import "./styles/theme.css";` then `@import "tailwindcss";` order handled.

## 7. Quality Gates
- Responsive 375/768/1440 (Playwright viewports), keyboard focus visible (ring sindoor), reduced-motion respected, contrast APCA pass (ink on paper, snow on slate), CLS clean (aspect ratios on gallery)
