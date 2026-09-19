# Andrew Thompson Portfolio V2 Style Guide

## Design Direction

The visual system should feel like calm engineering work: dark gray surfaces, crisp typography, restrained electric-blue accents, subtle borders, and minimal motion. Andrew Thompson's name and professional role are the dominant identity.

Avoid hacker tropes, excessive glow, glitch effects, looping animation, and decoration that competes with project evidence.

## Typography

- **Display:** Space Grotesk for headings and key labels.
- **Body:** Inter for readable long-form text.
- **Technical details:** JetBrains Mono for compact identifiers and technology labels.

## Color

- `noir-950` is the page background.
- `noir-900` and `noir-800` provide surface depth.
- `blueglow` is reserved for actions, eyebrows, focus states, and small evidence markers.
- Slate text colors establish hierarchy without reducing readability.

## Components

- `surface-card` provides restrained card depth and border treatment.
- `button-primary` is used for the single highest-priority action in a group.
- `button-secondary` supports résumé and contact actions.
- `tech-pill` labels technology without turning skills into an icon wall.
- `Section` owns page width and vertical rhythm.
- `SectionTitle` owns the eyebrow, title, description, and alignment pattern.

## Motion and Accessibility

- Motion is limited to short entrance transitions and micro-interactions.
- `prefers-reduced-motion` disables meaningful animation.
- Interactive elements require visible keyboard focus.
- Heading order, form labels, link names, contrast, and touch-target sizing must be verified before release.
