import { styled } from "@stitches/stiches.config"
import { isMobile } from "react-device-detect"

export const Box = styled("div", {
  variants: {
    flex: {
      row: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      },
      column: {
        display: "flex",
        flexDirection: "column",
      },
    },
  },
})

export const Flex = styled("div", { display: "flex" })
export const Grid = styled("div", { display: "grid" })
export const Adaptive = styled("div", {
  display: isMobile ? "grid" : "flex",
})
export const InvertedAdaptive = styled("div", {
  display: isMobile ? "flex" : "grid",
})
