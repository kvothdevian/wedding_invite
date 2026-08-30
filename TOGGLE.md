# Toggle back to previous build

Two ways to revert:

1. **Quick rename (no git needed):**
```bash
cd wedding-invite
Copy-Item src/App.prev.jsx src/App.jsx -Force
Copy-Item src/components/EventIcons.prev.jsx src/components/EventIcons.jsx -Force
npm run build
```

2. **Runtime toggle (already in App.jsx):**
- Header dev bar has two switches:
  - `PNG Cards ↔ SVG Icons` (uses `public/event-cards/*.png` vs block-print SVGs)
  - `Hero image` on/off (semi-transparent placeholder behind hero)
- State is in `useState` with `localStorage` persistence — no reload needed. Default is PNG + hero ON for client preview.
- Previous SVG build remains in `src/components/EventIcons.jsx` — never deleted.

Previous screenshots preserved in `screenshots/iteration-0*.png`.
