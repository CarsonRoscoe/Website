import { enterFromLeft } from "@components/animations/enterFromLeft"
import { enterFromRight } from "@components/animations/enterFromRight"
import { exitToLeft } from "@components/animations/exitToLeft"
import { exitToRight } from "@components/animations/exitToRight"
import { NavigationMenuContent } from "@radix-ui/react-navigation-menu"
import { styled } from "@stitches/stiches.config"

export default styled(NavigationMenuContent, {
  // position: "absolute",
  // top: 0,
  // left: 0,
  // width: "100%",
  // "@media only screen and (min-width: 600px)": { width: "auto" },
  // "@media (prefers-reduced-motion: no-preference)": {
  //   animationDuration: "250ms",
  //   animationTimingFunction: "ease",
  //   '&[data-motion="from-start"]': { animationName: enterFromLeft },
  //   '&[data-motion="from-end"]': { animationName: enterFromRight },
  //   '&[data-motion="to-start"]': { animationName: exitToLeft },
  //   '&[data-motion="to-end"]': { animationName: exitToRight },
  // },
})
