import { createStitches } from "@stitches/react"
import { isMobile } from "react-device-detect"

const colors = {
  default: {
    primaryLight: "#8ecae6",
    primary: "#219ebc",
    primaryDark: "#023047",
    secondary: "#ffb909",
    secondaryLight: "#fdba08",
    secondaryDark: "#fb8500",
  },
}

const colorScheme = colors.default

const stitches = createStitches({
  theme: {
    colors: {
      white: "#f5f3f4",
      grayLight: "#f4f3ee",
      gray: "#bcb8b1",
      grayDark: "#8a817c",
      black: "#463f3a",

      primaryLight: colorScheme.primaryLight,
      primary: colorScheme.primary,
      primaryDark: colorScheme.primaryDark,

      secondaryLight: colorScheme.secondaryLight,
      secondary: colorScheme.secondary,
      secondaryDark: colorScheme.secondaryDark,

      successLight: "#89bda4",
      success: "#589d7c",
      successDark: "#3b6852",

      errorLight: "#f24073",
      error: "#d20f46",
      errorDark: "#86092c",
    },
    space: {
      xxl: "64px",
      xl: "48px",
      lg: "32px",
      md: "16px",
      sm: "8px",
      xs: "4px",
    },
    sizes: {
      xs: "0.25rem", // 4px
      sm: "0.5rem", // 8px
      md: "1rem", // 16px
      lg: "2rem", // 32px
      xl: "3rem", // 48px
      xxl: "4rem", // 64px
      maxContentWidth: "80%",
      maxContentHeight: "80%",
    },
    fonts: {
      regolaPro: "Regola Pro, -apple-system, system-ui, sans-serif",
      untitled: "Untitled Sans, apple-system, sans-serif",
      mono: "Söhne Mono, menlo, monospace",
    },
    fontSizes: {
      xxl: "48px",
      xl: "32px",
      lg: "24px",
      md: "16px",
      sm: "8px",
      xs: "4px",
    },
    fontWeights: {
      book: "300",
      regular: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
    },
    radii: {
      sm: "2px",
      md: "4px",
      lg: "8px",
      oval: "100px",
      circle: "999999px",
    },
    shadows: {
      sm: "0px 0px 0px 2px #F8F8F8",
      md: "0px 0px 0px 4px #F8F8F8",
    },
    zIndices: {
      infront: "100",
      foreground: "200",
      midground: "300",
      background: "400",
      behind: "999",
    },
    lineHeights: {},
    letterSpacings: {},
    borderWidths: {},
    borderStyles: {},
    transitions: {},
  },
})

export const { styled, getCssText, keyframes, config, css, globalCss } = stitches
