/**
 * SSELFIE Design Tokens — Spacing, Radius, Shadows
 */

export const DesignTokens = {
  spacing: {
    xs: "0.5rem",
    sm: "0.75rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    "2xl": "3rem",
    "3xl": "4rem",
  },
  radius: {
    sm: "0.5rem",
    md: "0.75rem",
    lg: "1rem",
    xl: "1.5rem",
    "2xl": "2rem",
    full: "9999px",
  },
  shadows: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.12)",
    lg: "0 10px 20px -6px rgb(0 0 0 / 0.18)",
    xl: "0 24px 80px rgb(0 0 0 / 0.28)",
    "2xl": "0 36px 120px rgb(0 0 0 / 0.32)",
    inner: "inset 0 1px 0 rgb(255 255 255 / 0.04)",
  },
} as const
