# ShadowStack Style Guide

This guide captures the visual language, color tokens, and animation standards that keep the noir aesthetic cohesive across the app.

## Palette & Typography

- **Primary font:** `Orbitron` (loaded in `index.html`, exposed as `font-mono` via Tailwind `fontFamily.mono`).
- **Base text/background:** `body` applies `bg-noir-900 text-white font-mono` (`src/index.css`).
- **Noir palette (`tailwind.config.js`)**  
  `noir-50` … `noir-950` cover grayscale steps; prefer these for text, separators, and gradients.
- **Accent palette (`blueglow`)**  
  - `blueglow` / `blueglow.DEFAULT`: #00B2FF  
  - `blueglow-light`: hover/soft highlight #66D8FF  
  - `blueglow-dark`: deeper accent #007ACC  
  Always reference these Tailwind tokens instead of hard-coded hex values.

## Layout Primitives

- **`<Section>` (`src/layout/Section.jsx`)**  
  Wraps page blocks with `bg-gradient-to-b` gradients, padding, and a constrained `maxWidth`. Override via props (`gradient`, `maxWidth`, `padding`, `className`) rather than duplicating the wrapper markup.
- **Spacing Rhythm**  
  Components should follow the existing sections’ `py-20 px-6` defaults for consistent vertical rhythm unless a section needs special treatment.

## Reusable Utility Classes (`src/index.css`)

- `.glossy-card`  
  Use for cards/project tiles. Provides rounded borders, subtle gradients, and hover sheen via pseudo-elements. Apply directly on the card’s root element.
- `.glossy-section`  
  Adds a gentle radial highlight overlay to a section/container. Useful for callouts that need extra depth.

When a custom style is needed more than once, add a minimal utility under `@layer components` and reference the class; avoid scattering bespoke CSS files.

## Animations

- **anime.js usage**  
  Reserved for hero/logo intros (`Hero.jsx`). Large-scale timeline animations belong there; other components should stick to Tailwind transitions for micro-interactions.
- **Tailwind animation tokens (`tailwind.config.js`)**  
  - `animate-fadeIn`, `animate-slideFadeIn`, `animate-glow`, `animate-glitch` map to custom keyframes.  
  - Apply via `className="animate-fadeIn"` etc. rather than redefining keyframes locally.
- **Hover/Focus states**  
  Favor Tailwind utilities (`transition`, `duration-300`, `hover:text-white`, etc.) for consistent easing.

## Component Patterns

- **Typography**  
  Section headings: `text-3xl sm:text-4xl font-bold tracking-tight text-white` (see `SectionTitle.jsx`). New headings should align with these sizes and tracking.
- **Buttons**  
  Follow the Contact form button example: accent background (`bg-blueglow-dark`), `hover:bg-blueglow-light`, rounded corners, and drop shadows for depth.
- **Forms**  
  Inputs use `bg-gray-700`, light placeholders, and `focus:ring-blueglow`; reuse those classes for additional form fields to maintain consistency.

## Accessibility & Motion

- Keep contrast high by pairing light text with the darker noir shades.
- Avoid autoplaying or looping heavy animations outside the hero. If new motion is introduced, provide gentle easing and keep durations <1s unless there is a clear narrative reason.
- Maintain the `scroll-behavior: smooth` experience by avoiding components that hijack scrolling.

## Adding New Visual Patterns

1. Prototype with Tailwind utilities directly in the component.
2. If the pattern is reused, extract a class into `src/index.css` under `@layer components`.
3. If new colors/animations are required, extend `tailwind.config.js`; include comments explaining intent.
4. Document the addition in this guide so future contributors understand when/how to use it.

Use this document as the single source of truth for visual decisions. When in doubt, reference `tailwind.config.js`, `src/index.css`, and existing components before introducing new tokens or styles.
