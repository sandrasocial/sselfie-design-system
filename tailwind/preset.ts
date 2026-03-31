import type { Config } from "tailwindcss"

/**
 * SSELFIE Tailwind Preset
 * Usage in consuming repos (tailwind.config.ts):
 *   import { sselfiePreset } from "@sselfie/design-system/tailwind"
 *   export default { presets: [sselfiePreset], ... } satisfies Config
 */
export const sselfiePreset: Config = {
  content: [],
  theme: {
    extend: {
      colors: {
        stone: {
          deepest: "#0d0c0b",
          dark: "#1c1b19",
          mid: "#2e2c29",
          raw: "#2a2720",
          granite: "#1a1815",
          quarry: "#3a3630",
          accent: "#a8a49c",
          pale: "#c8c4bb",
        },
        // Legacy aliases — kept for backward compatibility
        obsidian: "#0d0c0b",
        porcelain: "#f0ede8",
        pearl: "#2e2c29",
        smoke: "#8a8780",
        whisper: "#c8c4bb",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "serif"],
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
    },
  },
}
