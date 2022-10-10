import { NavigationMenuTrigger } from "@radix-ui/react-navigation-menu"
import { styled } from "@stitches/stiches.config"

export default styled(NavigationMenuTrigger, {
  all: "unset",
  "&[data-active]": { color: "$primary", backgroundColor: "$primaryLight" },
  // color: "$black",
  // textAlign: "center",
  // fontSize: "$lg",
  // fontWeight: "$bold",
  // fontFamily: "inherit",
  height: "$xl",
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  // lineHeight: 1,
  // userSelect: "none",
  minWidth: "160px",
  minHeight: "32px",
  // backgroundColor: "$primary",
  // boxShadow: "$colors$black -2px -2px 0px 0px, $colors$black 2px 2px 0px 0px",
  // "&:hover": { color: "$primary", backgroundColor: "$primaryLight" },
})
