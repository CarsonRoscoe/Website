import { createStitches } from "@stitches/react"
import { isMobile } from "react-device-detect"

const colors = {
  lightCyan: "rgba(30, 5, 250, 1.0)",
  cyan: "rgba(30, 5, 250, 1.0)",
  darkCyan: "rgba(30, 5, 250, 1.0)",
  lightGreen: "rgba(30, 250, 5, 1.0)",
  green: "rgba(30, 230, 10, 1.0)",
  darkGreen: "rgba(5, 150, 5, 1.0)",
}

const stitches = createStitches({
  theme: {
    colors: {
      white: "#ffffff",
      offWhite: "#F9F9F9",
      lightGray: "#EBEBEB",
      grey: "#CCCCCC",
      darkGray: "#979797",
      black: "#323232",

      primaryLight: colors.lightCyan,
      primary: colors.cyan,
      primaryDark: colors.darkCyan,

      secondaryLight: colors.lightGreen,
      secondary: colors.green,
      secondaryDark: colors.darkGreen,

      success: "#688958",
      errorLight: "#C62203",
      errorDark: "#FF7369",
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
