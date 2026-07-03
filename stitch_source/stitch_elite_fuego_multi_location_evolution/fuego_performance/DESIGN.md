---
name: Fuego Performance
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#37393a'
  surface-container-lowest: '#0c0f0f'
  surface-container-low: '#1a1c1c'
  surface-container: '#1e2020'
  surface-container-high: '#282a2b'
  surface-container-highest: '#333535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#e7bdb2'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#2f3131'
  outline: '#ad887e'
  outline-variant: '#5d4038'
  surface-tint: '#ffb5a0'
  primary: '#ffb5a0'
  on-primary: '#601400'
  primary-container: '#ff5625'
  on-primary-container: '#541100'
  inverse-primary: '#b12d00'
  secondary: '#c8c6c5'
  on-secondary: '#313030'
  secondary-container: '#4a4949'
  on-secondary-container: '#bab8b7'
  tertiary: '#c8c6c5'
  on-tertiary: '#303030'
  tertiary-container: '#929090'
  on-tertiary-container: '#2a2a2a'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdbd1'
  primary-fixed-dim: '#ffb5a0'
  on-primary-fixed: '#3b0900'
  on-primary-fixed-variant: '#872000'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1b1b1c'
  on-tertiary-fixed-variant: '#474746'
  background: '#121414'
  on-background: '#e2e2e2'
  surface-variant: '#333535'
  pitch-black: '#000000'
  velocity-orange: '#FF5F1F'
  fuego-gradient: 'linear-gradient(135deg, #FF4500 0%, #FF8C00 100%)'
  surface-gray: '#242424'
typography:
  display-xl:
    fontFamily: Inter
    fontSize: 64px
    fontWeight: '900'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '800'
    lineHeight: '1.2'
  metric-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.0'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-bold:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  margin-mobile: 1rem
  margin-desktop: 2.5rem
  gutter: 1.5rem
  section-gap: 4rem
  stack-sm: 0.5rem
  stack-md: 1rem
---

## Brand & Style
This design system is engineered for elite athletic performance, capturing the intensity and precision of professional baseball pitching. The aesthetic is **High-Contrast / Bold**, drawing heavily from high-performance sports environments like Nike and Strava.

The brand personality is aggressive, disciplined, and premium. To evoke a sense of "elite" status, the UI utilizes a dark-mode-first approach which allows the vibrant orange to "burn" against the deep charcoal background. The interface should feel like a piece of high-end equipment—precise, durable, and focused on data.

Visual motifs include:
- **Kinetic Energy:** Use of diagonal slashes and italicized headers to imply movement.
- **Data Clarity:** High-contrast typography ensures metrics are readable under intense conditions.
- **Modern Minimalism:** Removing unnecessary ornamentation to keep the focus entirely on performance metrics and action.

## Colors
The palette is dominated by **Pitch Black** and **Deep Charcoal** to create a focused, "lights-out" environment. 

- **Primary (Velocity Orange):** Used exclusively for critical actions, active states, and highlighting key performance metrics (e.g., Strike Zone, Top Velocity).
- **Secondary/Tertiary:** Layers of charcoal and surface gray provide depth without breaking the dark-mode immersion.
- **Neutral (Pure White):** Reserved for primary text and high-contrast iconography to ensure maximum legibility against the dark backgrounds.
- **Fuego Gradient:** A subtle heat-map inspired gradient used for progress bars, data visualizations, and premium call-to-action buttons.

## Typography
We utilize **Inter** across the entire system for its exceptional legibility and modern, technical feel. To achieve the "athletic" look, we rely on weight and casing rather than mixing font families.

- **Emphasis:** Display and Headlines should use the "Extra Bold" or "Black" weights (800-900). For an even more aggressive look, apply a 5-10 degree italic slant to headers to suggest forward momentum.
- **Metrics:** Data points (Speed, Spin Rate) should be large, bold, and uppercase.
- **Labels:** Small labels use heavy tracking (letter-spacing) and uppercase styling to mimic the aesthetic of athletic apparel branding and gear labels.

## Layout & Spacing
The layout follows a **Fixed Grid** on desktop (12 columns) and a **Fluid Grid** on mobile (4 columns). 

- **Structure:** Content is organized into "Modules" that feel like specialized data readouts. 
- **Rhythm:** We use a strict 8px base unit. 
- **Density:** High information density is preferred for data-heavy views (training logs, velocity charts), while marketing pages should utilize larger vertical gaps (`section-gap`) to allow the photography and bold headlines to breathe.
- **Mobile Reflow:** For performance tracking, cards should stack vertically on mobile to maximize the horizontal space for charts and tables.

## Elevation & Depth
This system avoids traditional shadows in favor of **Tonal Layers** and **Bold Outlines**. 

- **Surface Strategy:** Backgrounds are `#000000`. Content containers are `#121212`. Hover or active states use `#1E1E1E` or `#242424`.
- **Depth through Contrast:** Instead of using blur, we use 1px solid borders in `#242424` to define card boundaries.
- **Glow Effects:** Critical "Fuego" elements (like a record-breaking pitch velocity) may use a subtle orange outer glow (0px 0px 15px rgba(255, 69, 0, 0.4)) to simulate heat and importance.

## Shapes
The shape language is **Soft (0.25rem)**, almost reaching toward sharp. 

While the brand is aggressive, the slight rounding on buttons and cards provides a "precision-engineered" feel rather than a "crude" feel. 
- **Buttons:** Use `rounded-sm` (4px).
- **Cards/Containers:** Use `rounded-md` (8px).
- **Data Points:** Small circular nodes (100% round) are used only for plotting points on charts (e.g., pitch locations in the strike zone).

## Components
- **Buttons:** Primary buttons are solid Velocity Orange with Black text (Extra Bold). Secondary buttons are "Ghost" style—Pure White borders with White text.
- **Cards:** Pitchers' stats are housed in high-contrast cards with `#121212` backgrounds and top-border accents in Velocity Orange to denote active sessions.
- **Chips/Badges:** Small, rectangular badges with high-contrast backgrounds (e.g., "FASTBALL" in a White badge with Black text) to categorize data points quickly.
- **Input Fields:** Dark backgrounds (`#000000`) with a 1px white border. On focus, the border changes to Velocity Orange.
- **Progress Bars:** Used for "Strength Training" or "Goal Tracking." The filled portion should use the Fuego Gradient.
- **Strike Zone Grid:** A specialized component using thin, high-contrast white lines over a dark field, with orange indicators for "In-Zone" pitches.