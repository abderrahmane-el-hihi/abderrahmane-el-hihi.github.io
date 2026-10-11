---
name: "Abderrahmane El Hihi — Contact Sheet"
description: "An inspectable, bilingual portfolio of software engineering work."
colors:
  charcoal: "#171918"
  paper: "#e6e5df"
  accent: "#ff6042"
  muted: "#b0b2aa"
  line: "#51564f"
  sprocket: "#3a3e39"
typography:
  display:
    fontFamily: "Archivo Black, Menbere, sans-serif"
    fontSize: "6.8cqw"
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Menbere, sans-serif"
    fontSize: "clamp(40px, 4.4vw, 68px)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Menbere, sans-serif"
    fontSize: "25px"
    fontWeight: 700
  body:
    fontFamily: "Menbere, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "DM Mono, monospace"
    fontSize: "13px"
    fontWeight: 400
  project-title:
    fontFamily: "Menbere, sans-serif"
    fontSize: "2.28cqw"
    fontWeight: 700
    lineHeight: 1.1
  hero-summary:
    fontFamily: "DM Mono, monospace"
    fontSize: "0.9cqw"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  square: "0px"
spacing:
  inline: "12px"
  column: "20px"
  section-gap: "28px"
  row: "30px"
  group: "40px"
  section-mobile: "55px"
  section-desktop: "80px"
  gutter-mobile: "22px"
  gutter-small: "16px"
components:
  text-link:
    textColor: "{colors.accent}"
    rounded: "{rounded.square}"
    padding: "0 0 7px"
  case-action:
    textColor: "{colors.accent}"
    rounded: "{rounded.square}"
    padding: "0"
  language-button:
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "0 0.25cqw"
  language-button-selected:
    textColor: "{colors.accent}"
    rounded: "{rounded.square}"
  project-frame-mobile:
    backgroundColor: "{colors.charcoal}"
    textColor: "{colors.paper}"
    rounded: "{rounded.square}"
    padding: "{spacing.inline}"
  experience-row:
    textColor: "{colors.paper}"
    padding: "30px 0"
---

# Design System: Abderrahmane El Hihi — Contact Sheet

## Overview

**Creative North Star: "The Contact Sheet"**

A dark photographic work surface gathers software interfaces into one inspectable body of work. Large, dense lettering establishes the engineer’s identity; numbered square frames, restrained captions and fine rules make the projects easy to compare. The visible material is charcoal with a faint field texture, warm paper text and a concentrated orange selection signal.

The same world continues below the sheet through open editorial rows rather than enclosed cards. English and French share the hierarchy. At narrow widths, the sheet unfolds vertically into individually outlined projects, and the prose returns to a comfortable reading face.

**Key Characteristics:**

- Charcoal field, warm paper type and orange interaction cues.
- Square frames, numbered work and thin structural rules.
- A heavy display name, readable prose and monospaced metadata.
- Flat surfaces with restrained reveal and arrow motion.
- Vertical reading and project flow on mobile.

## Colors

The palette pairs warm neutrals with one vivid interaction color. Frontmatter is the normative color inventory.

### Primary

- **Selection Orange** (`accent`): selected frames, the work navigation marker, language state, project index, links, focus outline and selection highlight.

### Neutral

- **Charcoal Field** (`charcoal`): continuous page background and dark selection text.
- **Warm Paper** (`paper`): principal reading text and the revealed skip link.
- **Quiet Ash** (`muted`): dates, technology lists, footnotes, provenance captions and secondary metadata.
- **Film Rule** (`line`): navigation divisions, frame outlines and editorial row separators.
- **Sprocket Grey** (`sprocket`): desktop film perforations.

**The Selection Signal Rule.** Orange identifies interaction, selection or indexing; it does not fill the ordinary content surface.

## Typography

**Display Font:** Archivo Black, with Menbere and sans-serif fallbacks. The self-hosted display file is subset for the portfolio name, rather than a general-purpose multilingual display font.

**Body Font:** Menbere, self-hosted regular and bold.

**Label/Mono Font:** DM Mono, self-hosted regular, with monospace fallback.

The name is dense and graphic. Menbere carries section headings, titles and narrative text; DM Mono makes dates, indexes, technology and controls feel like annotations on a sheet.

### Hierarchy

- **Display:** the name uses the frontmatter desktop token above 1100px. At 801–1100px it uses `6.5cqw`; at 800px and below it wraps at `clamp(42px, 10.3vw, 78px)` with `1.02` line height.
- **Headline:** the frontmatter headline governs the about, research and contact headings. Mobile fixes these at `42px`, with a `15ch` maximum on the headings that need it. The open case title is `64px` desktop and `42px` mobile.
- **Title:** research row titles use the frontmatter title; experience titles use `20px`; subsection titles use `24px`. The sheet project title becomes `32px` on mobile.
- **Body:** experience and research prose uses the frontmatter body and becomes `16px` on mobile. Introductory prose is `23px / 1.55`, reduced to `18px` on mobile; detail and research introductions use `20px / 1.6`. Reading text commonly stops at `55ch`.
- **Label:** dates and technical annotations use the frontmatter label. Hero captions scale with their container (`0.86cqw`), becoming `12px` on mobile; smaller trailing frame metadata is `10px` on mobile.
- **Hero summary:** the monospaced desktop summary uses the frontmatter token, bounded by `39cqw`; mobile changes to Menbere at `17px / 1.65`.

**The Reading Face Rule.** Keep extended prose in Menbere on mobile; use DM Mono for concise metadata and the desktop sheet summary.

## Layout

The desktop hero is a measured composition with a `1536 / 1024` aspect ratio. Its percentage-positioned regions come from the approved scaffold; these coordinates belong to this surface, rather than a reusable page grid. The frame border grid uses `2.36fr 1fr 1.285fr` with a `0.72cqw` gap. The hero is centered and capped at `1700px` on larger screens.

Below the hero, sections share `3.65%` horizontal margins and the desktop section spacing token. Introductory and case-study content commonly uses two equal columns with an `8%` gap. Experience rows use `22% 28% 1fr`; research rows use `31% 1fr 22%`. Their separators and row spacing make a continuous editorial list.

From 801px through 1100px, the hero retains its sheet organization with a `760px` minimum height and explicit small-type overrides. At 800px and below, positioned hero regions enter normal vertical flow, project borders become individual containers, the film perforations disappear, and content grids become one column. Mobile uses the mobile gutter and section spacing tokens. At 370px and below, gutters reduce to the small gutter token. Navigation and secondary links can wrap; long email text can wrap within the available width.

**The Unfolded Sheet Rule.** On mobile, preserve the project order and vertical reading flow instead of adding a horizontal reel.

## Elevation & Depth

There are no box shadows in the implemented interface. Depth comes from the continuous charcoal field, fine outlines, contrast between the interface images and their surrounding sheet, and a subtle background raster. The hero field has `0.18` opacity on desktop and `0.12` on mobile. Project images brighten to `1.06` on hover; the selected outline changes color rather than moving or gaining elevation.

**The Flat Field Rule.** Keep ordinary surfaces flat; communicate selection through outline and color.

## Shapes

Controls and portfolio frames have square corners. Thin, single-pixel rules structure the page. The small rectangular perforations and vertical inscriptions belong to the desktop film treatment. Rounded device corners inside the illustrative previews are image content, not a portfolio container radius.

## Components

### Buttons and links

The action vocabulary is typographic: no filled primary-button slab. Text links use orange text, an underline rule, a small inline SVG arrow and the frontmatter padding. Generic buttons inherit their surrounding type. The case action stretches across its frame region and adds an expand icon at the far edge; on mobile it has `16px 0` padding and a `48px` minimum height. Inline links reach `40px` minimum height on mobile, while project categories and case close controls reach `44px`.

Global keyboard focus uses a `2px` orange outline with `5px` offset; preview buttons use `3px` offset. Hover changes links and buttons to orange, and link arrows translate `4px` over `0.25s` with `cubic-bezier(.16,1,.3,1)`.

### Navigation

A slim, ruled header pairs the AEH wordmark with text links and an EN/FR selector. Work is orange and underlined in the current implementation. A vertical rule separates the language buttons. The selected language uses orange and exposes `aria-pressed`; mobile navigation wraps as needed.

### Project frames and categories

Each frame contains a numbered caption, project name, technical category and selectable preview. The selected frame and caption use orange. On mobile each frame uses the frontmatter container padding, its own border and `16px` separation. Image selection updates the associated title, summary and technical details. Category controls also use `aria-pressed`; desktop category numbers have a vertical separator, while mobile options sit in ruled rows.

The three sheet previews are explicitly labeled illustrative interface studies. The expanded NexaERP case also presents an original repository capture with a provenance caption. Continue distinguishing illustrative material from source evidence.

### Editorial rows

Experience, education, research and CV downloads use open grids separated by thin rules. Metadata is muted, names and titles are paper, and supporting prose is unboxed. Mobile stacks each row’s fields in reading order.

### Case reveal

The case opens inline with a `0.5s` reveal from `clip-path: inset(0 0 100% 0)` to `inset(0)`, using the same easing as link motion. Opening transfers focus to the case; closing returns focus to its trigger. Reduced-motion preference disables animation and transitions and removes smooth scrolling.

## Do's and Don'ts

### Do:

- **Do** use orange for active states, links, indexes and focus.
- **Do** preserve square frames and single-pixel structural rules.
- **Do** use Menbere for mobile reading and DM Mono for concise annotations.
- **Do** stack projects and editorial rows vertically at the mobile breakpoint.
- **Do** label illustrative previews and identify original source captures.
- **Do** preserve visible keyboard focus and reduced-motion behavior.

### Don't:

- **Don't** use the name-only Archivo Black subset for arbitrary new headings without adding the required glyph coverage.
- **Don't** turn interface-image corner treatments into rounded portfolio containers.
- **Don't** add box-shadow elevation to ordinary content surfaces.
- **Don't** turn scaffold coordinates into a global layout rule for unrelated screens.
- **Don't** replace the mobile vertical sheet with a horizontal scrolling gallery.
