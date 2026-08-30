// Block-print style icons — hand drawn feel, 1.4 stroke, per design.md
// Ganesh + 4 event icons + small marigold divider
export function GaneshIcon({ size = 56 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true" className="shrink-0">
      {/* halo */}
      <circle cx="32" cy="32" r="30" fill="none" stroke="var(--color-haldi)" strokeWidth="1.1" opacity="0.35" />
      <circle cx="32" cy="32" r="26" fill="none" stroke="var(--color-haldi)" strokeWidth="0.7" opacity="0.18" strokeDasharray="2 3" />
      {/* head */}
      <path d="M22 18 C22 10 42 10 42 18 C42 22 38 26 32 27 C26 26 22 22 22 18 Z" fill="var(--color-snow)" stroke="var(--color-ink)" strokeWidth="1.3" strokeLinejoin="round" />
      {/* ears */}
      <path d="M22 16 C14 14 12 24 20 26" fill="var(--color-snow)" stroke="var(--color-ink)" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M42 16 C50 14 52 24 44 26" fill="var(--color-snow)" stroke="var(--color-ink)" strokeWidth="1.2" strokeLinecap="round" />
      {/* trunk */}
      <path d="M32 27 C30 32 28 36 31 40 C33 42 36 42 37 38" fill="none" stroke="var(--color-ink)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M31 40 C30 41 32 43 34 42" fill="none" stroke="var(--color-ink)" strokeWidth="1" opacity="0.7" />
      {/* eyes + tilak */}
      <circle cx="28.5" cy="20.5" r="1.7" fill="var(--color-ink)" />
      <circle cx="35.5" cy="20.5" r="1.7" fill="var(--color-ink)" />
      <path d="M32 15 L32 19" stroke="var(--color-sindoor)" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="32" cy="14.5" r="1.6" fill="var(--color-sindoor)" />
      {/* modak */}
      <path d="M28 48 C28 44 36 44 36 48 L32 52 Z" fill="var(--color-haldi)" stroke="var(--color-ink)" strokeWidth="1.1" />
      {/* blessings hands */}
      <path d="M18 34 C14 36 12 40 16 43 L20 41" fill="none" stroke="var(--color-ink)" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M46 34 C50 36 52 40 48 43 L44 41" fill="none" stroke="var(--color-ink)" strokeWidth="1.2" strokeLinecap="round" />
      {/* base lotus */}
      <path d="M24 52 C24 56 40 56 40 52" fill="none" stroke="var(--color-pine)" strokeWidth="1" opacity="0.7" />
      <path d="M28 54 C28 57 36 57 36 54" fill="none" stroke="var(--color-pine)" strokeWidth="0.8" opacity="0.5" />
    </svg>
  )
}

export function HaldiIcon({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" aria-hidden="true">
      {/* bowl */}
      <path d="M4 16 C4 20 8 23 14 23 C20 23 24 20 24 16" fill="var(--color-snow)" stroke="var(--color-ink)" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M6 16 L22 16" stroke="var(--color-border)" strokeWidth="0.9" />
      {/* haldi paste */}
      <ellipse cx="14" cy="16.5" rx="7.5" ry="3.2" fill="var(--color-haldi)" opacity="0.95" />
      <circle cx="14" cy="15.5" r="1.2" fill="var(--color-haldi)" opacity="0.6" />
      {/* sun rays */}
      <g stroke="var(--color-haldi)" strokeWidth="1" strokeLinecap="round" opacity="0.85">
        <path d="M14 3 L14 6.5" />
        <path d="M8.5 6 L10.5 8.5" />
        <path d="M19.5 6 L17.5 8.5" />
        <path d="M5.5 11 L8 12.5" />
        <path d="M22.5 11 L20 12.5" />
      </g>
      <circle cx="14" cy="3.5" r="1.6" fill="white" stroke="var(--color-haldi)" strokeWidth="1" />
      {/* marigold dots */}
      <circle cx="8" cy="16.5" r="1.3" fill="var(--color-haldi)" opacity="0.55" />
      <circle cx="20" cy="16.5" r="1" fill="var(--color-haldi)" opacity="0.45" />
    </svg>
  )
}

export function SangeetIcon({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" aria-hidden="true">
      {/* dhol */}
      <ellipse cx="14" cy="14.5" rx="8.5" ry="6.5" fill="var(--color-snow)" stroke="var(--color-ink)" strokeWidth="1.3" />
      <path d="M6 12.5 L22 12.5" stroke="var(--color-ink)" strokeWidth="0.9" opacity="0.35" />
      <path d="M8 14.5 L20 14.5" stroke="var(--color-pine)" strokeWidth="1" opacity="0.7" />
      <circle cx="14" cy="14.5" r="2" fill="white" stroke="var(--color-pine)" strokeWidth="0.9" />
      {/* straps */}
      <path d="M10 8.5 L10 20.5" stroke="var(--color-ink)" strokeWidth="0.8" opacity="0.5" />
      <path d="M18 8.5 L18 20.5" stroke="var(--color-ink)" strokeWidth="0.8" opacity="0.5" />
      {/* sticks */}
      <path d="M5 6 L7.5 9" stroke="var(--color-ink)" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M23 7 L21 9.5" stroke="var(--color-ink)" strokeWidth="1.2" strokeLinecap="round" />
      {/* bonfire flick */}
      <path d="M14 22 C12.5 20 13.5 18.5 14 17.5 C14.5 18.5 15.5 20 14 22 Z" fill="var(--color-haldi)" stroke="var(--color-sindoor)" strokeWidth="0.7" />
      {/* music notes */}
      <g fill="var(--color-pine)" opacity="0.85">
        <circle cx="21.5" cy="6.5" r="1.4" />
        <path d="M22.8 6.5 L22.8 3.5 L24.5 3.2" fill="none" stroke="var(--color-pine)" strokeWidth="0.9" strokeLinecap="round" />
      </g>
    </svg>
  )
}

export function BaaraatIcon({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" aria-hidden="true">
      {/* horse head simplified block-print */}
      <path d="M7 18 C6 14 9 9 13.5 8.5 C16 8 18.5 9.5 19 12.5 L17 14.5 L18.5 18.5 L14 20.5 L9.5 19.5 Z" fill="var(--color-snow)" stroke="var(--color-ink)" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M13.5 8.5 C11 6.5 10 4.5 11 3.5 C12.5 4.5 14 6 14.5 8" fill="none" stroke="var(--color-ink)" strokeWidth="1" strokeLinecap="round" />
      <circle cx="15.5" cy="12" r="1.1" fill="var(--color-ink)" />
      {/* sehra / garland */}
      <path d="M9.5 11 C8 11.5 7 13 7.5 15" fill="none" stroke="var(--color-haldi)" strokeWidth="1" strokeLinecap="round" />
      <circle cx="7.5" cy="15.5" r="0.9" fill="var(--color-haldi)" />
      {/* mountain ridge behind */}
      <path d="M3 21 L7 17 L11 19.5 L15 16 L19 18.5 L23 16 L25 18 L25 21 Z" fill="var(--color-slate)" opacity="0.12" stroke="var(--color-slate)" strokeWidth="0.7" />
      <path d="M7 17 L9 18.5 L8 19 Z" fill="white" opacity="0.9" />
      {/* dhol echo dots */}
      <circle cx="20.5" cy="8.5" r="1" fill="var(--color-ice)" opacity="0.7" />
    </svg>
  )
}

export function ReceptionIcon({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" aria-hidden="true">
      {/* overlapping rings */}
      <circle cx="11.5" cy="12.5" r="5.2" fill="none" stroke="var(--color-ink)" strokeWidth="1.3" />
      <circle cx="16.5" cy="12.5" r="5.2" fill="none" stroke="var(--color-ink)" strokeWidth="1.3" />
      <circle cx="11.5" cy="12.5" r="1.1" fill="var(--color-haldi)" opacity="0.9" />
      <circle cx="16.5" cy="12.5" r="1.1" fill="var(--color-haldi)" opacity="0.9" />
      {/* garland */}
      <path d="M6.5 16.5 C8 19 11 20 14 20 C17 20 20 19 21.5 16.5" fill="none" stroke="var(--color-haldi)" strokeWidth="1.1" strokeLinecap="round" />
      <circle cx="7" cy="16.8" r="1" fill="var(--color-haldi)" opacity="0.7" />
      <circle cx="21" cy="16.8" r="1" fill="var(--color-haldi)" opacity="0.7" />
      {/* banquet line */}
      <path d="M5 21 L23 21" stroke="var(--color-slate)" strokeWidth="0.9" opacity="0.25" />
      <path d="M9 21 L9 18 M14 21 L14 17.5 M19 21 L19 18" stroke="var(--color-pine)" strokeWidth="0.8" opacity="0.5" strokeLinecap="round" />
    </svg>
  )
}

export function HaldiDivider() {
  return (
    <div className="flex items-center justify-center gap-3 py-6" aria-hidden="true">
      <span className="h-px w-12 md:w-20 bg-border" />
      <span className="w-1.5 h-1.5 rounded-full bg-haldi rotate-45" />
      <span className="w-8 h-px bg-haldi/40" />
      <span className="text-haldi text-[14px] leading-none">❋</span>
      <span className="w-8 h-px bg-haldi/40" />
      <span className="w-1.5 h-1.5 rounded-full bg-haldi rotate-45" />
      <span className="h-px w-12 md:w-20 bg-border" />
    </div>
  )
}
