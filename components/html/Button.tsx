import { styled } from "@stitches/stiches.config"

export const Button = styled("button", {
  appearance: "none",
  border: "none",
  font: "$untitled",
  lineHeight: 1,
  borderRadius: "$circle",
  marginLeft: "$sm",
  marginRight: "$sm",
  boxShadow: "$colors$black 4px 4px 0 0",
  variants: {
    variant: {
      gray: {
        backgroundColor: "$gray",
        "&:hover": {
          backgroundColor: "$grayDark",
        },
      },
      primary: {
        backgroundColor: "$primary",
        "&:hover": {
          backgroundColor: "$primaryDark",
        },
      },
      secondary: {
        backgroundColor: "$secondary",
        "&:hover": {
          backgroundColor: "$secondaryDark",
        },
      },
      error: {
        backgroundColor: "$error",
        "&:hover": {
          backgroundColor: "$errorDark",
        },
      },
      success: {
        backgroundColor: "$successLight",
        boxShadow: "0 0 0 1px $colors$success",
      },
    },
    outlined: {
      true: {
        $$shadowColor: "transparent",
        backgroundColor: "transparent",
        boxShadow: "0 0 0 1px $$shadowColor",
      },
    },
    size: {
      small: {
        minWidth: "48px",
        fontSize: "$sm",
        height: "$md",
      },
      medium: {
        minWidth: "120px",
        fontSize: "$md",
        height: "$lg",
      },
      large: {
        minWidth: "160px",
        fontSize: "$lg",
        height: "$xl",
      },
    },
  },
  defaultVariants: {
    variant: "gray",
    outlined: false,
    size: "medium",
  },
  compoundVariants: [
    {
      variant: "gray",
      outlined: true,
      css: {
        $$shadowColor: "$colors$grayLight",
        color: "$gray",
        "&:hover": {
          color: "white",
        },
      },
    },
    {
      variant: "primary",
      outlined: true,
      css: {
        $$shadowColor: "$colors$primaryLight",
        color: "$primary",
        "&:hover": {
          color: "white",
          backgroundColor: "$primary",
        },
      },
    },
    {
      variant: "secondary",
      outlined: true,
      css: {
        $$shadowColor: "$colors$secondaryLight",
        color: "$secondary",
        "&:hover": {
          color: "white",
          backgroundColor: "$secondary",
        },
      },
    },
    {
      variant: "error",
      outlined: true,
      css: {
        $$shadowColor: "$colors$errorLight",
        backgroundColor: "white",
        color: "$error",
        "&:hover": {
          color: "white",
          backgroundColor: "$error",
        },
      },
    },
    {
      variant: "success",
      outlined: true,
      css: {
        $$shadowColor: "$colors$successDark",
        color: "$success",
        backgroundColor: "white",
      },
    },
  ],
})
