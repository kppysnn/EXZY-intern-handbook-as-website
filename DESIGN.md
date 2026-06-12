---
name: EXZY Intern Handbook
description: The official intern handbook for EXZY Co., Ltd. — everything a new intern needs, in one place.
colors:
  exzy-teal: "#66C5C5"
  exzy-navy: "#004081"
  ink: "#001122"
  body: "#505050"
  slate: "#586782"
  bluegray: "#929EB4"
  muted: "#626262"
  bg: "#F8F9FA"
  surface-2: "#F2F6F8"
  line: "#D0D6DF"
  footer-bg: "#001122"
  warning: "#FFCC00"
  success: "#82C566"
  error: "#F3554F"
typography:
  display:
    fontFamily: "'Noto Sans Thai Local', 'Noto Sans Thai', 'Poppins', system-ui, sans-serif"
    fontSize: "clamp(2.125rem, 4.8vw, 3.5rem)"
    fontWeight: 700
    lineHeight: 1.6
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "'Noto Sans Thai Local', 'Noto Sans Thai', 'Poppins', system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 4vw, 2.75rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  title:
    fontFamily: "'Noto Sans Thai Local', 'Noto Sans Thai', 'Poppins', system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.4
  body:
    fontFamily: "'Noto Sans Thai Local', 'Noto Sans Thai', 'Poppins', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "'Noto Sans Thai Local', 'Noto Sans Thai', 'Poppins', system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.08em"
rounded:
  sm: "8px"
  md: "14px"
  lg: "22px"
  full: "999px"
spacing:
  sm: "14px"
  md: "22px"
  lg: "28px"
  xl: "48px"
  section: "90px"
components:
  button-primary:
    backgroundColor: "linear-gradient(135deg, #66C5C5 0%, #2A8DA8 45%, #004080 100%)"
    textColor: "#FFFFFF"
    rounded: "{rounded.full}"
    padding: "14px 24px"
  button-primary-hover:
    backgroundColor: "linear-gradient(135deg, #66C5C5 0%, #2A8DA8 45%, #004080 100%)"
    textColor: "#FFFFFF"
    rounded: "{rounded.full}"
    padding: "14px 24px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "14px 24px"
  button-ghost-hover:
    backgroundColor: "rgba(102,197,197,0.10)"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "14px 24px"
  card-default:
    backgroundColor: "{colors.bg}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  input-default:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.ink}"
    rounded: "10px"
    padding: "11px 14px"
  input-focus:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.ink}"
    rounded: "10px"
    padding: "11px 14px"
  badge-teal:
    backgroundColor: "rgba(102,197,197,0.12)"
    textColor: "{colors.exzy-teal}"
    rounded: "{rounded.full}"
    padding: "9px 14px"
---

# Design System: EXZY Intern Handbook

## 1. Overview

**Creative North Star: "The Company Style Companion"**

This design system reads like a well-produced internal brand book that actually respects the reader. It is warm without being promotional, structured without being bureaucratic. The target feeling: a prepared senior colleague handed you this on your first day and said "everything you need is in here." Nothing is hidden behind jargon. Nothing is padded with filler.

The system serves a specific moment: a new intern, first week, scanning for a fast answer while already slightly anxious. Every surface decision bends toward legibility, scannable hierarchy, and calm confidence. The EXZY brand speaks through typography weight and the CI palette (teal, navy, white) — not through decoration or animation flourish. Thai is the primary reading language; the system is tuned for it.

The system rejects two failure modes by name. First: the over-designed SaaS landing page (hero metrics, gradient card blasts, marketing cadence in every heading). Second: the plain-docs wall of text (no hierarchy, no visual identity, no reason to trust the source). Between those two failure modes lives this system: branded, structured, and designed for a specific person in a specific moment.

**Key Characteristics:**
- Bilingual (Thai primary, English secondary) — Noto Sans Thai at every size, every weight
- Flat-by-default elevation; navy-tinted state shadows appear only in response to interaction
- EXZY CI colors used with restraint — teal as signal, navy as structure, white as ground
- Tactile, reliable components — buttons and cards have weight and respond to touch
- Handbook chapter structure reflected in visual hierarchy (numbered chapters, section identities)

## 2. Colors: The EXZY CI Palette

EXZY's CI colors are used directly. Teal is the live signal; navy is the structural anchor; white is the reading ground. No new saturated accents; identity comes from these three.

### Primary
- **EXZY Teal** (`#66C5C5`): The primary accent ("live signal"). Hover states, active navigation indicators, badge backgrounds and text, focus rings (`outline: 3px solid rgba(102,197,197,0.58)`), thin decorative underlines/accents, and the leading color of the brand gradient. Its translucent form (`--cyan-soft: rgba(102,197,197,0.14)`, `--sec-soft: rgba(102,197,197,0.10)`) tints surfaces on interaction, callouts, and soft backgrounds.

### Secondary
- **EXZY Navy** (`#004081`): The structural anchor. Icon/badge/block fills, gradient terminal, shadow tints (`rgba(0,64,129,...)`), deep high-emphasis text. The gradient `linear-gradient(135deg, #66C5C5 0%, #004081 100%)` (token `--grad`) is the brand's only gradient — used exclusively on the primary button, hero CTA, and the welcome card's primary action.

### Tertiary
- **Warning** (`#FFCC00`): Caution/notice states (callout-warn, badges). Never the default text or surface color.
- **Success** (`#82C566`): Confirmation states only.
- **Error** (`#F3554F`): Validation error text and destructive-state indicators beneath form fields.

### Neutral
- **Ink** (`#001122`): The deepest text/surface tone — heading text, footer background, dark hero/card surfaces. Token `--ci-ink`.
- **Body** (`#505050`): All running body text. Token `--ci-body`.
- **Slate** (`#586782`): Secondary/supporting text — lead copy, card descriptions, sub-labels. Token `--ci-slate`.
- **Bluegray** (`#929EB4`): Tertiary muted text and inactive/guest indicators. Token `--ci-bluegray`.
- **Muted** (`#626262`): Captions, subtitles, subdued labels — darkened from the CI's `#707070` to clear WCAG AA (4.6:1) on the `#F8F9FA` background. Always verify 4.5:1 contrast against the background in use.
- **Background** (`#F8F9FA`): Page background and default surface. Off-white with a cool cast; aliased as `--surface`.
- **Surface-2** (`#F2F6F8`): Component and inner-card background tint.
- **Line** (`#D0D6DF`): Default border for cards, inputs, and dividers. Soft variant: `rgba(208,214,223,0.72)`.
- **Footer / Dark Surfaces** (`#001122`): Deep-navy/ink surfaces (footer, dark hero cards, wifi network cards). Body text on these surfaces uses translucent off-white (`rgba(248,249,250, .5–.72)`) tuned to clear 4.5:1 against `#001122`.

### Named Rules
**The One Gradient Rule.** The teal-to-navy gradient (`--grad: linear-gradient(135deg, #66C5C5 0%, #004081 100%)`) appears in exactly three places: `.btn-primary`, `.btn-cta-hero`, and `.welcome-primary`. It is the brand's most saturated visual signal, and its rarity is what makes it land. Prohibited on backgrounds, cards, text, icons, badges, and any other surface — use solid `--ci-teal` (thin accents/underlines) or `--ci-navy` (icon/badge/block fills) instead.

**The CI Anchor Rule.** Do not add new saturated accent colors without a specific semantic role (error, warning, category label). The teal-and-navy pair is the identity. A third accent dilutes it.

## 3. Typography

**Primary Font:** Noto Sans Thai Local / Noto Sans Thai (with Poppins as Latin fallback)

**Character:** A single family across all roles. Noto Sans Thai is engineered for Thai readability and covers all Thai copy. Poppins extends the stack for Latin-heavy headings and English copy. No serif, no mono in the main reading flow. One family per script outperforms three competing typefaces on a bilingual surface.

### Hierarchy
- **Display** (700, clamp(34px → 56px), line-height 1.6, tracking -0.01em): Hero and primary page headings. Line-height 1.6 minimum; Thai tone marks require clearance above the base character.
- **Headline** (700, clamp(30px → 44px), line-height 1.2, tracking -0.02em): Section titles. Tighter line-height at large sizes is intentional.
- **Title** (700, 20px, line-height 1.35–1.4): Card headings, modal titles, sub-section labels.
- **Lead** (400, 17px, line-height 1.7, color Body Secondary `#3A4757`): Hero sub-copy and section intros. Max-width 540px.
- **Body** (400, 16px, line-height 1.75): All running text. 1.75 is the floor; do not reduce below 1.65 for Thai.
- **Small** (400–500, 13–14.5px, line-height 1.5–1.75): Card descriptions, link descriptions, footer body.
- **Label** (700, 11–12px, uppercase, tracking 0.08em): Badges, chips, category markers, nav sub-labels. Reserved for identifiers of ≤4 words; prohibited on body copy.

### Named Rules
**The Thai Line-Height Rule.** Body text never below 1.65; headings never below 1.2 for Thai. Tone marks (mai ek, mai tho, etc.) stack above the base glyph and collide with the line above at tighter settings.

**The Single Family Rule.** One family covers all type roles. Do not introduce a second family without a concrete voice justification. Poppins is the Latin fallback, not a parallel display system.

## 4. Elevation

Flat by default. Surfaces have no ambient shadow at rest. Depth is a state response: hover lifts a card with a navy-tinted shadow; active presses it back down; focused inputs receive a teal glow ring. Every shadow in the system uses `rgba(0, 64, 129, ...)` (navy) or `rgba(0, 17, 34, ...)` (ink) as its tint, not pure black. Navy-tinted shadows stay visually continuous with the brand palette.

### Shadow Vocabulary (live tokens in `css/design-system.css`)
- **`--shadow-sm`** (`0 1px 2px rgba(0,64,129,0.04), 0 1px 1px rgba(0,17,34,0.02)`): Resting state for very small elevated elements. Used sparingly.
- **`--shadow-md`** (`0 4px 14px rgba(0,64,129,0.07)`): Card hover lift, dropdowns. Never applied at rest on static cards.
- **`--shadow-lg`** (`0 16px 34px rgba(0,64,129,0.10)`): Modals, overlays, the deepest floating surfaces.
- **Focus Ring** (`outline: 3px solid rgba(102,197,197,0.58); outline-offset: 3px`): Input/interactive focus-visible state via `.u-focus-ring`. Teal-tinted outline, not a box-shadow ring.

### Named Rules
**The State-Shadow Rule.** Shadows communicate state, not decoration. Flat at rest. Lifted on hover. Floating on overlay. Applying a shadow to a static, non-interactive surface is prohibited.

## 5. Components

### Buttons
Tactile and reliable. Fully rounded by CI convention. Respond to hover with micro-lift and deepened shadow. Arrow icons animate `translateX(3px)` on hover — standard for all CTA buttons.

- **Shape:** 999px (fully rounded — CI identity, non-negotiable).
- **Primary:** `--grad` background, `#F8F9FA` text, button shadow `0 8px 24px rgba(0,64,129,0.22)` plus an inset highlight. A diagonal sheen sweeps across on hover (`::after` translateX, transform-only).
- **Primary Hover:** `translateY(-1px)`, shadow deepens to `0 12px 30px rgba(0,64,129,0.28)`, `filter: brightness(1.04)`.
- **Ghost:** Transparent, ink text, `border: 1px solid rgba(0,64,129,0.22)`. Hover: teal-tint background `rgba(102,197,197,0.10)`, border shifts to `#66C5C5`.

### Cards / Containers
- **Corner Style:** Gently curved (14px, `--radius`). Large containers use 22px (`--radius-lg`). Inner link items use 18px.
- **Background:** `--ci-bg` (`#F8F9FA`) by default, `--surface-2` (`#F2F6F8`) for inner/component tints; creates a layering effect without elevation.
- **Elevation:** Flat at rest. On hover: lift + `--shadow-md`/`--shadow-lg` + border shifts toward `rgba(102,197,197,...)`.
- **Border:** `1px solid var(--ci-line)` (`#D0D6DF`) at rest. The teal border accent on hover is the primary interactive signal for cards.
- **Padding:** 28px default. Compact variants (inner items) use 16–22px.

### Badges / Chips
- **Teal variant:** `--cyan-soft` (`rgba(102,197,197,0.14)`) bg, `#66C5C5` text, 999px radius, Label scale.
- **Navy variant:** `--navy-soft` (`rgba(0,64,129,0.10)`) bg, `#004081` text. Used for feature/highlighted states.
- **Interactive chip / link-pill:** `--ci-bg` background, ink text, `1px solid var(--ci-line)`. Hover lifts with `--shadow-md`.

### Inputs / Fields
- **Default:** `--ci-bg` background, `1px solid var(--ci-line)` border, 10px radius, `padding: 11px 14px`, ink text.
- **Focus:** Border shifts to `#66C5C5`; focus-visible outline `3px solid rgba(102,197,197,0.58)` via `.u-focus-ring`.
- **Error:** Error text below field, `#F3554F`, weight 500.
- **Disabled:** `opacity: 0.5` as default until explicitly designed.

### Navigation
- **Style:** Sticky, 72px height (`--nav-h`). Frosted glass on scroll/over content. The glass treatment is structural here; the nav is always present above content.
- **Items:** Weight 500, ink-toned label. Hover: ink color + `rgba(102,197,197,0.10)` bg, rounded.
- **Dropdowns:** `--ci-bg` background, `--ci-line` border, 14px radius, `--shadow-lg`, fade-in entrance.
- **Mobile:** Burger icon collapses the nav into a `position: absolute` panel anchored with `left: 0; right: 0` below `--nav-h` (≤1100px breakpoint).

### Handbook Index (Signature Component)
The homepage table of contents: numbered chapters, colored semantic dot (teal for orientation, amber for company, blue for policy, purple for resources, pink for showcase), chapter label, optional badge, and a right-arrow. Each row is a full-width link. The numbered sequence is content-driven; these numbers carry real chapter information, not decorative scaffolding.

## 6. Do's and Don'ts

### Do:
- **Do** use the CI palette exactly as defined in `css/design-system.css`: `--ci-teal #66C5C5`, `--ci-navy #004081`, `--ci-ink #001122`, `--ci-bg #F8F9FA`. These are brand assets, not starting points.
- **Do** set body line-height at 1.75. Thai rendering requires it; reducing it is a readability defect, not a design choice.
- **Do** use navy-tinted shadows (`rgba(0, 64, 129, ...)`) at all elevation levels. Black shadows look generic and break the brand color continuity.
- **Do** let card borders shift to the teal accent on hover — this is the system's primary card interaction signal.
- **Do** cap body copy line lengths at 65–75ch. Long unbroken Thai lines at full viewport width are hard to scan.
- **Do** use `text-wrap: balance` on h1–h3. Thai headings with tone marks break awkwardly without it.
- **Do** keep the primary gradient exclusive to the primary CTA button and hero. Its rarity is the point.

### Don't:
- **Don't** design this like a SaaS landing page: no hero metric grids, no gradient card carousels, no "empower / transform / seamless" marketing copy. This is a guide, not a sales pitch.
- **Don't** design it like plain documentation: no pages without visual hierarchy, no sections without brand identity, no wall-of-text layouts.
- **Don't** add a new saturated accent without a semantic role. The teal-navy pair is the identity.
- **Don't** use `border-left` or `border-right` greater than 1px as a colored accent stripe on cards or callouts. Use background tints, full borders, or leading icons instead.
- **Don't** use `background-clip: text` gradient text on headings. Use a single solid color; emphasis via weight and size.
- **Don't** reduce body line-height below 1.65 for Thai text. Thai tone marks collide with the line above at tighter settings.
- **Don't** apply the glassmorphism blur treatment to regular cards or content sections. It belongs only on the sticky nav, where it has a structural reason.
- **Don't** use tiny uppercase tracked labels above every section heading as default scaffolding. Section identity comes from content structure; kicker repetition is AI grammar.
