import { styled } from "@stitches/stiches.config"

export const Image = styled("img", {
  variants: {
    size: {
      lg: { width: "30vh", height: "20vh" },
      md: { width: "$xxl", height: "$xxl" },
      sm: { width: "$xxl", height: "$xxl" },
    },
  },
  defaultVariants: {
    size: "lg",
  },
})
