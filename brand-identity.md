# Klar Digital — Brand Identity & Visual Direction

## Brand Foundation

### Name
**Klar Digital** — "Klar" is Norwegian for "clear" / "ready." It signals the core brand promise: clarity, readiness, and no-nonsense delivery.

### Brand Values
1. **Simplicity** — Strip away the unnecessary. Every element earns its place.
2. **Clarity** — Communication is direct, visual hierarchy is obvious, no jargon.
3. **Speed** — Fast delivery, fast websites, fast decisions.
4. **Professionalism** — Polished but approachable. Never corporate, never sloppy.

### Target Perception
- Trustworthy and competent
- Modern but not trendy
- Affordable but not cheap
- Scandinavian-clean with warmth

### Brand Voice
- Direct and confident, not aggressive
- Helpful, not salesy
- Use plain language — write for a local gym owner, not a tech audience
- Short sentences. Active voice. Clear benefits.

---

## Color Palette

### Primary Colors

| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| **Primary** | Deep Navy | `#0F2B46` | Headlines, nav, footer backgrounds, primary text |
| **Accent** | Signal Blue | `#2563EB` | CTAs, links, interactive elements, highlights |
| **Background** | Snow White | `#FAFBFC` | Page backgrounds, card backgrounds |

### Secondary Colors

| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| **Warm Accent** | Amber | `#F59E0B` | Badges, pricing highlights, attention markers |
| **Success** | Forest Green | `#059669` | Confirmation states, positive indicators |
| **Subtle** | Cool Gray | `#64748B` | Secondary text, captions, metadata |
| **Border** | Light Gray | `#E2E8F0` | Dividers, card borders, input borders |

### Dark Mode (optional future)

| Role | Color | Hex |
|------|-------|-----|
| **Background** | Charcoal | `#0F172A` |
| **Surface** | Dark Slate | `#1E293B` |
| **Text** | Soft White | `#F1F5F9` |

### Color Rules
- Maximum 2-3 colors per page section. Never use all colors simultaneously.
- Signal Blue is reserved for clickable/interactive elements only.
- Amber is used sparingly — max 1-2 instances per page for emphasis.
- Text on colored backgrounds must pass WCAG AA contrast (4.5:1 minimum).
- Gradients: subtle only. `#0F2B46` to `#1E3A5F` for hero backgrounds is acceptable. No rainbow gradients.

---

## Typography

### Font Stack

| Role | Font | Weight | Fallback |
|------|------|--------|----------|
| **Headings** | Inter | 700 (Bold), 600 (Semi-Bold) | system-ui, sans-serif |
| **Body** | Inter | 400 (Regular), 500 (Medium) | system-ui, sans-serif |
| **Mono/Code** | JetBrains Mono | 400 | monospace |

**Why Inter:** Free, open-source, designed for screens, excellent readability at small sizes, wide language support (including Norwegian characters), variable font for performance. Available via Google Fonts.

### Type Scale

| Element | Size (desktop) | Size (mobile) | Weight | Line Height |
|---------|---------------|---------------|--------|-------------|
| H1 — Page title | 48px / 3rem | 32px / 2rem | 700 | 1.1 |
| H2 — Section title | 36px / 2.25rem | 28px / 1.75rem | 700 | 1.2 |
| H3 — Subsection | 24px / 1.5rem | 20px / 1.25rem | 600 | 1.3 |
| H4 — Card title | 20px / 1.25rem | 18px / 1.125rem | 600 | 1.4 |
| Body — Default | 16px / 1rem | 16px / 1rem | 400 | 1.6 |
| Body — Large | 18px / 1.125rem | 16px / 1rem | 400 | 1.6 |
| Small / Caption | 14px / 0.875rem | 14px / 0.875rem | 400 | 1.5 |
| Button | 16px / 1rem | 16px / 1rem | 600 | 1 |

### Typography Rules
- Max 3 font weights per page (typically 400, 600, 700).
- Line length: 60-75 characters for body text (use `max-width: 65ch`).
- No all-caps except for small labels/badges (and even then, use `letter-spacing: 0.05em`).
- Headings: tight line-height (1.1-1.3). Body: generous (1.5-1.6).

---

## Logo Direction

### Primary Mark
A clean wordmark: **Klar** in Inter Bold, with "Digital" in Inter Regular or Medium, slightly smaller or lighter weight. No icon/symbol — the name is the brand.

**Variations:**
1. **Full:** `Klar Digital` — used in headers, business cards, invoices
2. **Short:** `Klar` — used in favicon, small spaces, social avatars
3. **Favicon:** `K` lettermark in Deep Navy on white, or white on Deep Navy

### Logo Specs
- Primary color: Deep Navy (`#0F2B46`) on light backgrounds
- Reversed: White (`#FFFFFF`) on dark/navy backgrounds
- Minimum clear space: height of the "K" on all sides
- Minimum size: 80px wide (full mark), 24px (favicon)
- Never stretch, rotate, add effects, or place on busy backgrounds

### Logo Don'ts
- No gradients on the wordmark
- No drop shadows
- No outlined/stroked versions
- No color variations beyond navy and white

---

## Imagery & Photography Style

### Photo Direction
- **Style:** Natural, bright, slightly warm. Real businesses, real people.
- **Subjects:** Local business owners at work, storefronts, laptops showing websites, collaborative moments
- **Lighting:** Natural daylight preferred. Clean, not moody.
- **Composition:** Clean backgrounds, subject in focus, minimal clutter
- **Color grading:** Slightly warm whites, desaturated backgrounds, subject pops

### Stock Photo Guidelines
- Prefer: Unsplash, Pexels (free, high quality)
- Avoid: Obviously staged corporate photos, excessive diversity casting that feels forced, "person pointing at screen" cliches
- Always choose photos that feel like they could be from a Norwegian small town

### Illustration & Icons
- **Icon style:** Lucide icons (open-source, consistent, clean line style)
- **Icon weight:** 1.5px-2px stroke
- **Icon size:** 24px default, 20px in compact UI, 32px-48px for feature highlights
- No filled icons — line style only for consistency
- Custom illustrations: only if needed, use simple flat style with brand colors

---

## Layout & Spacing

### Grid System
- 12-column grid on desktop (max-width: 1280px, centered)
- 4-column on tablet
- 1-column stacked on mobile
- Gutters: 24px (desktop), 16px (mobile)
- Page margins: 64px (desktop), 24px (tablet), 16px (mobile)

### Spacing Scale (8px base)

| Token | Value | Usage |
|-------|-------|-------|
| `xs` | 4px | Tight gaps (icon-to-label) |
| `sm` | 8px | Inline spacing, small gaps |
| `md` | 16px | Default component padding |
| `lg` | 24px | Card padding, section element gaps |
| `xl` | 32px | Between component groups |
| `2xl` | 48px | Section padding (mobile) |
| `3xl` | 64px | Section padding (desktop) |
| `4xl` | 96px | Hero section vertical padding |

### Layout Rules
- All spacing uses the 8px grid. No arbitrary values.
- Sections alternate between white (`#FAFBFC`) and very light gray (`#F1F5F9`) backgrounds for rhythm.
- Cards: 16-24px padding, 8px border-radius, subtle border (`#E2E8F0`) or very light shadow (`0 1px 3px rgba(0,0,0,0.08)`).
- Buttons: 12px vertical / 24px horizontal padding, 8px border-radius, 600 weight text.

---

## Component Patterns

### Buttons

| Type | Background | Text | Border | Usage |
|------|-----------|------|--------|-------|
| **Primary** | Signal Blue `#2563EB` | White | none | Main CTA — one per section max |
| **Secondary** | Transparent | Deep Navy | 1px Deep Navy | Secondary actions |
| **Ghost** | Transparent | Signal Blue | none | Tertiary actions, nav links |

- Hover: darken background 10% or add subtle shadow
- Border-radius: 8px
- Min height: 44px (touch target)
- No uppercase button text

### Cards
- White background, 1px border `#E2E8F0`, 8px radius
- Or: subtle shadow `0 1px 3px rgba(0,0,0,0.08)` instead of border
- Padding: 24px
- Hover (if interactive): lift shadow `0 4px 12px rgba(0,0,0,0.1)`

### Forms
- Input height: 44px minimum
- Border: 1px `#E2E8F0`, 8px radius
- Focus ring: 2px Signal Blue outline
- Labels above inputs, 8px gap
- Error text in red below input, 4px gap

---

## Motion & Animation

### Principles
- Motion is functional, not decorative
- Every animation must have a purpose: guide attention, confirm action, smooth transition
- Users who prefer reduced motion (`prefers-reduced-motion`) see no animations

### Timing
- **Micro-interactions** (hover, focus): 150ms ease-out
- **Transitions** (page, section reveals): 300ms ease-out
- **Entrance animations** (scroll-triggered): 400ms ease-out, stagger 50ms between items

### Approved Animations
- Fade-in-up on scroll (sections, cards) — translate 16px, opacity 0 to 1
- Button hover: background color shift, subtle scale (1.02)
- Card hover: lift shadow
- Page transitions: fade (300ms)

### Not Allowed
- Parallax scrolling (performance, accessibility concerns)
- Auto-playing carousels
- Bouncing or pulsing elements
- Any animation longer than 500ms

---

## Responsive Breakpoints

| Name | Width | Layout |
|------|-------|--------|
| **Mobile** | < 640px | Single column, stacked |
| **Tablet** | 640px - 1024px | 2 columns, condensed nav |
| **Desktop** | 1024px - 1280px | Full layout, sidebar where needed |
| **Wide** | > 1280px | Centered container, max 1280px |

### Mobile-First Rules
- Design for mobile first, enhance for larger screens
- Navigation collapses to hamburger below 1024px
- Touch targets: minimum 44x44px
- No hover-dependent interactions on mobile
- Images: serve responsive sizes via `srcset`

---

## Accessibility Standards

- WCAG 2.1 AA compliance minimum
- Color contrast: 4.5:1 for normal text, 3:1 for large text
- All images have descriptive `alt` text
- Keyboard navigation works for all interactive elements
- Focus indicators are visible (2px Signal Blue ring)
- Form inputs have associated labels
- Error messages are descriptive and linked to inputs
- Skip-to-content link on every page

---

## File & Asset Conventions

### Naming
- Files: `kebab-case` (e.g., `hero-background.webp`, `icon-phone.svg`)
- CSS variables: `--color-primary`, `--spacing-lg`, `--font-heading`
- Components: `PascalCase` (e.g., `HeroSection`, `PricingCard`)

### Image Formats
- Photos: WebP (with JPEG fallback), quality 80
- Icons/logos: SVG
- Favicon: SVG + PNG fallback (32x32, 180x180 apple-touch)

### Performance Targets
- Lighthouse Performance: > 90
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Total page weight: < 500KB (excluding cached fonts)
- Font loading: `font-display: swap`, preload critical weights

---

## CSS Custom Properties (Design Tokens)

```css
:root {
  /* Colors */
  --color-primary: #0F2B46;
  --color-accent: #2563EB;
  --color-background: #FAFBFC;
  --color-warm: #F59E0B;
  --color-success: #059669;
  --color-text: #0F2B46;
  --color-text-secondary: #64748B;
  --color-border: #E2E8F0;
  --color-surface: #F1F5F9;

  /* Typography */
  --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  /* Spacing */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 64px;
  --space-4xl: 96px;

  /* Borders */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.08);
  --shadow-md: 0 4px 12px rgba(0,0,0,0.1);
  --shadow-lg: 0 8px 24px rgba(0,0,0,0.12);

  /* Transitions */
  --transition-fast: 150ms ease-out;
  --transition-base: 300ms ease-out;
  --transition-slow: 400ms ease-out;
}
```

---

## Quick Reference Card

| Element | Spec |
|---------|------|
| Primary color | Deep Navy `#0F2B46` |
| Accent color | Signal Blue `#2563EB` |
| Background | Snow White `#FAFBFC` |
| Font | Inter (Google Fonts) |
| Heading weight | 700 Bold |
| Body weight | 400 Regular |
| Base spacing | 8px grid |
| Border radius | 8px default |
| Max content width | 1280px |
| Min touch target | 44px |
| Lighthouse target | > 90 |
