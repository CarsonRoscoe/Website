import { styled } from "@stitches/stiches.config"

export const Text = styled("p", {
  fontFamily: "$regolaPro",
  variants: {
    type: {
      xxl: { fontSize: "$xxl" },
      xl: { fontSize: "$xl" },
      lg: { fontSize: "$lg" },
      md: { fontSize: "$md" },
      sm: { fontSize: "$sm" },
      xs: { fontSize: "$xs" },
    },
    weight: {
      book: { fontWeight: "$book" },
      regular: { fontWeight: "$regular" },
      medium: { fontWeight: "$medium" },
    },
    color: {
      white: { color: "$white" },
      transparent: { color: "transparent" },
      black: { color: "$black" },
      error: { color: "$error" },
      gray: { color: "$black30" },
      success: { color: "$success" },
      primary: { color: "$lightPrimary" },
    },
    disabled: {
      true: {
        opacity: 0.25,
      },
    },
  },
  defaultVariants: {
    type: "md",
    weight: "book",
    color: "black",
  },
})
