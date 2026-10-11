---
name: "Abderrahmane El Hihi — Engineering Viewing Desk"
description: "A bilingual software portfolio with a cobalt inspection stage and open editorial reading surfaces."
colors:
  paper: "#f5f3ec"
  ink: "#171b25"
  blue: "#234bea"
  muted: "#58606c"
  line: "#c8cbc9"
  blue-tint: "#dce3ff"
  white: "#fff"
typography:
  display:
    fontFamily: "Menbere, sans-serif"
    fontSize: "clamp(54px, 6.2vw, 88px)"
    fontWeight: 700
    lineHeight: 1.06
    letterSpacing: "-0.04em"
  headline-about:
    fontFamily: "Menbere, sans-serif"
    fontSize: "clamp(36px, 4.8vw, 64px)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.035em"
  headline-research:
    fontFamily: "Menbere, sans-serif"
    fontSize: "clamp(36px, 4.3vw, 56px)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.035em"
  headline-contact:
    fontFamily: "Menbere, sans-serif"
    fontSize: "clamp(40px, 6.2vw, 88px)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.04em"
  project-title:
    fontFamily: "Menbere, sans-serif"
    fontSize: "clamp(24px, 2.7vw, 38px)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Menbere, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.65
  intro:
    fontFamily: "Menbere, sans-serif"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: 1.45
  label:
    fontFamily: "DM Mono, monospace"
    fontSize: "12px"
    fontWeight: 400
  stack:
    fontFamily: "DM Mono, monospace"
    fontSize: "10px"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  square: "0px"
  control: "4px"
  language-button: "20px"
  language-group: "24px"
spacing:
  tight: "8px"
  inline: "12px"
  inset-mobile: "16px"
  gutter-mobile: "20px"
  group: "24px"
  gutter-tablet: "28px"
  stack: "32px"
  gutter-desktop: "40px"
  broad: "48px"
  section-mobile: "64px"
  column-wide: "80px"
  section-desktop: "96px"
components:
  project-button:
    textColor: "{colors.blue-tint}"
    rounded: "{rounded.control}"
    padding: "12px 16px"
  project-button-selected:
    backgroundColor: "{colors.white}"
    textColor: "{colors.blue}"
    rounded: "{rounded.control}"
    padding: "12px 16px"
  language-button:
    textColor: "{colors.ink}"
    rounded: "{rounded.language-button}"
  language-button-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.language-button}"
  case-action:
    textColor: "{colors.white}"
    rounded: "{rounded.square}"
    padding: "10px 0"
  text-link:
    rounded: "{rounded.square}"
    padding: "6px 0"
  close-case:
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "10px"
  artifact-surface:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
  experience-row:
    padding: "28px 0"
    textColor: "{colors.ink}"
---

# Design System: Abderrahmane El Hihi — Engineering Viewing Desk

## Overview

**Creative North Star: "The Engineering Viewing Desk"**

A warm paper reading field meets a saturated cobalt inspection stage. Large, compact lettering establishes the engineer's identity; the project controls couple a visible software artifact with its implementation context. The same visual language continues through open ruled experience rows, research columns and a full cobalt contact spread.

The system is precise and direct, with asymmetric desktop composition and an image-first mobile flow. English and French share the hierarchy. This record describes the completed code-led build; no approved page composition supplied visual authority. Source truth is `src/styles.css`, `src/App.jsx`, `src/Lower.jsx`, built `dist/index.html`, and `dist/assets/favicon.svg`. Desktop and French mobile captures corroborate the composition. The prior Contact Sheet identity is superseded only in this redesign branch.

**Key Characteristics:**

- Warm paper and ink reading surfaces with full-strength cobalt activity planes.
- Monumental Menbere identity, readable Menbere prose and restrained DM Mono metadata.
- Asymmetric artifact inspection that becomes image-first on mobile.
- Open ruled chronology and research columns rather than enclosed reading cards.
- One brief artifact reveal, native selection states and visible keyboard focus.

## Colors

Frontmatter owns the normative palette. One saturated primary color organizes activity; warm and cool neutrals separate reading, metadata and rules.

### Primary

- **Inspection Cobalt** (`blue`): project stage, contact spread, surname, selected gallery labels, hover accents, focus outlines and text selection.
- **Cobalt Mist** (`blue-tint`): secondary copy and metadata on cobalt surfaces.

### Neutral

- **Warm Paper** (`paper`): page ground and artifact frame.
- **Deep Ink** (`ink`): principal text, selected language pill and strong research rules.
- **Quiet Slate** (`muted`): dates, secondary reading copy, captions and footnotes.
- **Soft Rule** (`line`): header, language group and editorial separators.
- **White** (`white`): text and focus on cobalt; active project control background.

The implementation also uses local utility colors for preview chrome, gallery grounds, scrollbar and cobalt rules; these remain component details rather than expanded brand primitives. Sidecar tonal strips are synthesized OKLCH display aids, not additional shipped colors. The SVG favicon uses the same cobalt with a white geometric letterform.

**The Activity Plane Rule.** Cobalt can fill the inspection and contact surfaces; on the paper reading field it marks identity, interaction and selection.

## Typography

**Display and Body Font:** Menbere, self-hosted regular and bold, with sans-serif fallback.

**Label/Mono Font:** DM Mono, self-hosted regular, with monospace fallback.

The name and primary headings use compact tracking and bold weight. Prose keeps a generous line height; dates, technology stacks and actual capture counts use restrained monospace. Font files are `/assets/menbere-regular.ttf`, `/assets/menbere-bold.ttf` and `/assets/dm-mono-regular.ttf`, loaded with `font-display: swap`. Numeric forms are tabular; synthetic font styles are disabled.

### Hierarchy

- **Display:** the frontmatter identity token governs desktop. At 1100px and below it becomes `clamp(48px, 6.7vw, 74px)`; at 760px and below it becomes `clamp(42px, 11.5vw, 72px)`; at 370px and below it is `40px`. The mobile value is fluid, not a fixed 48px promise.
- **Headlines:** about and research use their frontmatter tokens, becoming `40px` on mobile. Contact becomes `44px`, then `40px` at the narrow breakpoint. About, research and contact headings are bounded respectively by `14ch`, `17ch` and `18ch` on desktop; mobile about uses `15ch`.
- **Project title:** the frontmatter title becomes `28px` at 1100px and below, then `26px` at 760px and below. Case section titles use `40px` desktop and `30px` mobile.
- **Body:** case prose uses the body token, becoming `15px` on mobile. About prose is `18px` desktop and `16px` mobile; research introduction is `17px` and `15px`. Experience and research item prose is `14px`; mobile experience is `13px`. Supporting reading commonly stops at `60–70ch`.
- **Intro:** the frontmatter intro becomes `17px` at tablet and mobile; mobile has a `28ch` maximum. The compact profession line is bold `16px` desktop and `14px` mobile.
- **Metadata:** the frontmatter label is the baseline; project stacks use the smaller stack token. Research stacks use `11px`; mobile dates and capture counts use `10px`. Ordinary navigation and project selectors use Menbere, not monospace.

**The Reading Face Rule.** Keep prose and controls in Menbere; reserve DM Mono for concise dates, stacks, counts and small technical annotations.

## Layout

Shared page gutters use the frontmatter desktop gutter, becoming the tablet gutter at 1100px, the mobile gutter at 760px and `16px` at 370px. At 1600px and above, the gutter is `max(40px, calc((100vw - 1440px) / 2))`, centering the main surfaces around a 1440px content span. Contact fills the viewport width and applies the shared gutter as internal padding.

The header is a horizontal row with a bottom rule (`96px` high desktop, `76px` mobile). Desktop introduction uses `1.55fr 1fr`, a `70px` gap and `64px` top / `54px` bottom margins. Tablet uses `1.6fr 1fr` and a `36px` gap. Mobile becomes one column with a `24px` gap and `40px` top / `32px` bottom margins.

The desktop viewing desk has `28px` side padding; its context/output grid is `minmax(220px, .65fr) minmax(0, 1.75fr)` with a `40px` gap. At tablet the context becomes a fixed `220px` column with a `28px` gap. At mobile the desk has `16px` inset, flex column flow, and the artifact comes before context. Project buttons remain three visible equal-width controls. The context becomes a two-column title/action row with full-width prose and stack; at 370px it becomes one column.

Default content section padding is the desktop section token, reduced to the mobile section token. About has additional breathing room (`136px` top desktop, `88px` mobile). About and research introductions use `1.15fr 1fr` with `100px` gap, reduced to `60px` at tablet and one column / `28px` gap on mobile. Experience uses `220px 1fr 1.25fr` and `36px` gaps; tablet uses `170px 1fr 1.1fr` and `24px`. Research uses three open columns with `48px` gaps. These, education, case detail and evidence grids become one column at mobile.

The gallery has eight thumbnail columns on desktop, four at tablet and two at mobile. Gap is `12px`, then `8px` mobile. Image stages center the original capture; they do not stretch it to an arbitrary card shape. Long email text can wrap anywhere within its row.

**The Inspection Order Rule.** Mobile places the selected artifact before its implementation context and keeps the three project choices visible.

## Elevation & Depth

Ordinary reading surfaces remain flat, separated by single-pixel rules. The inspection artifact has one soft blue shadow (`0 24px 40px #09267740`); it distinguishes the output plane from the cobalt desk. Preview toolbar and gallery grounds use muted tonal layers. The shadow is stationary, not a hover lift.

**The Artifact Depth Rule.** Keep shadow elevation on the inspected software frame; open editorial content relies on type, space and rules.

## Shapes

Main planes and artifact frames have square corners. Small project and case-close controls use the frontmatter control radius. Language choice is a rounded group containing rounded buttons. Thin separators do most of the structuring. Rounded phone or application UI corners inside screenshots are image content and do not define the portfolio's container geometry.

Icons are inline stroked SVG with a common `24px` base size, `1.5` stroke and round ends/joins; component-specific sizes range from `14px` to `42px`. No external icon font is required.

## Components

### Navigation and language choice

The ink AEH wordmark has a cobalt dot and a `36px` desktop / `28px` mobile size. Text navigation is `15px` desktop / `12px` mobile and turns cobalt on hover. On mobile only the navigation arrow disappears; the links remain visible. The EN/FR group has a single-pixel rule, `4px` desktop / `2px` mobile inset and minimum button sizes of `42 × 34px` desktop / `32 × 32px` mobile. The selected pill has ink fill and paper text; hover is cobalt with white text. Native buttons expose `aria-pressed`. Language persists in local storage when available and updates the document language and title.

### Project choice and inspection artifact

Project buttons use the frontmatter variants and a `44px` minimum height. Selected state is white with cobalt text; inactive text is Cobalt Mist. Hover uses `#153ed5` with white text. The inline arrow is revealed for selected or hovered controls. Selection changes the artifact, project title, summary, stack and case action together and closes any expanded case.

The output frame has a small ruled toolbar. Desktop artifact height is `clamp(280px, 32vw, 455px)`, tablet is `350px`, and large desktop is `480px`. Mobile NexaERP uses `aspect-ratio: 1.44`; mobile illustrated interfaces use `300px` height. NexaERP's desk preview fills and crops from the top, while illustrated mobile previews are contained. This preview crop does not govern full-size gallery images.

A changed project frame reveals through `clip-path: inset(0 0 100% 0)` to `inset(0)` over `0.65s`, using `cubic-bezier(.16, 1, .3, 1)`. The final artifact is visible without animation. Loading and unavailable-image messages are real status states with an original-file route on failure. The interface labels distinguish original test captures from illustrative mobile studies.

### Buttons and text links

Actions are compact type with inline SVG arrows. The white case action uses a bottom rule (`#91a7ff`), expands its gap from `28px` to `36px` on hover, and transitions over `0.2s` with the same easing. Mobile starts with an `8px` gap and smaller type. Paper text links turn cobalt and underline on hover; on contact they retain white. Text links have a `36px` minimum height; CV downloads have `44px`.

The close-case control has a light border and the frontmatter inset; hover fills it ink with white text. Opening an inline case scrolls to and focuses its heading section; closing restores focus to the case trigger. The case itself has no reveal animation.

Keyboard focus is a `2px` cobalt outline with `5px` offset for buttons, links and focusable sections; within the viewing desk and contact it is white. A hidden skip link becomes visible on keyboard focus. Disabled buttons use wait cursor and `0.6` opacity.

### Capture gallery

Native thumbnail buttons expose pressed state and control the main capture. Selected labels and their bottom rule become cobalt. Gallery selection updates the original file, caption and actual `01 / 08` count; the figure caption is a polite live region. Full-size image and text links open the original. Thumbnail crops are fixed-height, top-aligned; the main image is contained, with `760px` maximum height desktop and `620px` mobile.

### Editorial rows and contact

Experience and education are unboxed, ruled grids with muted dates and prose. Research items use a stronger ink top rule, regular-weight titles and cobalt technical stacks. They become stacked reading blocks at mobile.

The cobalt contact spread pairs a monumental headline with a full-width email row and small contact/CV routes. Its arrow turns from `-35deg` to upright on hover without a defined transition. Clipboard feedback occupies a persistent minimum-height `24px` status area, with the message derived from the current language.

Reduced-motion preference disables every animation and transition and removes smooth scrolling. Case scrolling also respects that preference. No perpetual motion is present.

## Do's and Don'ts

### Do:

- **Do** use warm paper for reading and cobalt for the inspection and contact activity planes.
- **Do** keep Menbere prose readable and DM Mono metadata concise.
- **Do** preserve image-first mobile inspection and visible project choices.
- **Do** use open ruled reading rows and the artifact's single soft shadow.
- **Do** preserve visible focus, actual pressed states and reduced-motion behavior.
- **Do** keep capture labels, provenance and original-file access connected to the displayed artifact.

### Don't:

- **Don't** revive the superseded charcoal, orange or film-perforation identity in this branch.
- **Don't** turn screenshot-internal colors, shadows or device corners into portfolio tokens.
- **Don't** apply the preview crop to the full-size evidence gallery.
- **Don't** expand project stacks or dates into decorative terminal prose.
- **Don't** invent input fields, unimplemented control states or claims of verified project outcomes.
