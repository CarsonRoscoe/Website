import { NavigationMenuList } from "@radix-ui/react-navigation-menu"
import { styled } from "@stitches/stiches.config"

export const NavigationMenuListVertical = styled(NavigationMenuList, {
  //   backgroundColor: "$primaryLight",
  //   alignContent: "center",
  //   alignSelf: "center",
  //   width: "100vw",
  overflow: "clip",
  //   paddingBottom: "2px",

  paddingLeft: "0",
  margin: "0",
})

export const NavigationMenuListHorizontal = styled(NavigationMenuListVertical, {
  display: "flex",
})
