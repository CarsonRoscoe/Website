import { scaleIn } from "@components/animations/scaleIn"
import { scaleOut } from "@components/animations/scaleOut"
import { NavigationMenuViewport } from "@radix-ui/react-navigation-menu"
import { styled } from "@stitches/stiches.config"

export default styled(NavigationMenuViewport, {
  // position: "relative",
  // transformOrigin: "top center",
  // width: "100%",
  // backgroundColor: "white",
  // borderRadius: 6,
  // overflow: "hidden",
  // boxShadow:
  //   "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  // height: "var(--radix-navigation-menu-viewport-height)",
  // "@media only screen and (min-width: 600px)": {
  //   width: "var(--radix-navigation-menu-viewport-width)",
  // },
  // "@media (prefers-reduced-motion: no-preference)": {
  //   transition: "width, height, 300ms ease",
  //   '&[data-state="open"]': { animation: `${scaleIn} 200ms ease` },
  //   '&[data-state="closed"]': { animation: `${scaleOut} 200ms ease` },
  // },
})
