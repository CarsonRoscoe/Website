import { NavigationMenuItem } from "@radix-ui/react-navigation-menu"
import { styled } from "@stitches/stiches.config"
import NavigationMenuItemCss from "./css/NavigationMenuItemCss"

export default styled(NavigationMenuItem, {
  ...NavigationMenuItemCss,
  "&:hover": { color: "$primary", backgroundColor: "$primaryLight" },
})
