import { keyframes, styled } from "@stitches/stiches.config"
import { useRouter } from "next/router"
import Link from "next/link"
import * as NavigationMenu from "@radix-ui/react-navigation-menu"
import { Flex } from "./html/Box"
import { isMobile } from "react-device-detect"
import { CaretDownIcon } from "@radix-ui/react-icons"
import { forwardRef } from "react"
import NavigationMenuItem from "./navigation/NavigationMenuItem"
import {
  NavigationMenuListHorizontal,
  NavigationMenuListVertical,
} from "./navigation/NavigationMenuList"
import NavigationMenuLink from "./navigation/NavigationMenuLink"
import NavigationMenuTrigger from "./navigation/NavigationMenuTrigger"
import { enterFromLeft } from "./animations/enterFromLeft"
import { enterFromRight } from "./animations/enterFromRight"
import { exitToLeft } from "./animations/exitToLeft"
import { exitToRight } from "./animations/exitToRight"
import NavigationMenuViewport from "./navigation/NavigationMenuViewport"
import NavigationMenuContent from "./navigation/NavigationMenuContent"

const StyledCaret = styled(CaretDownIcon, {
  position: "relative",
  color: "$primaryDark",
  top: 1,
  "[data-state=open] &": { transform: "rotate(-180deg)", color: "$primary" },
  "@media (prefers-reduced-motion: no-preference)": {
    transition: "transform 250ms ease",
  },
})

const ViewportPosition = styled("div", {
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  width: "100%",
  top: "100%",
  left: 0,
  perspective: "2000px",
})

export const Href = ({ href, children }: { href: string; children: any }) => {
  const router = useRouter()
  const isActive = router.asPath === href

  return (
    <Link href={href} passHref>
      <NavigationMenuLink css={{ margin: "0px", padding: "0px" }} active={isActive}>
        {children}
      </NavigationMenuLink>
    </Link>
  )
}

export const Dropdown = ({ href }: { href: string }) => {
  return (
    <NavigationMenuItem>
      <Link href={href} passHref>
        <NavigationMenuTrigger>
          Portfolio{<StyledCaret aria-hidden />}
        </NavigationMenuTrigger>
      </Link>
      <NavigationMenuContent>
        <NavigationMenu.Sub defaultValue="sub1">
          <NavigationMenuListVertical css={{ display: "block", width: "96px" }}>
            <Href href="/portfolio">All</Href>
            <Href href="/portfolio?tab=products">Products</Href>
            <Href href="/portfolio?tab=tools">Tools</Href>
            <Href href="/portfolio?tab=hackathons">Hackathons</Href>
            <Href href="/portfolio?tab=personals">Games</Href>
          </NavigationMenuListVertical>
        </NavigationMenu.Sub>
      </NavigationMenuContent>
      <ViewportPosition>
        <NavigationMenuViewport />
      </ViewportPosition>
    </NavigationMenuItem>
  )
}

export default () => (
  <NavigationMenu.Root>
    <NavigationMenuListHorizontal css={{ flex: "auto" }}>
      <Href href="/">Home</Href>
      <Href href="/blog">Blog</Href>
      <Dropdown href="/portfolio" />
      <Href href="/ui">UI</Href>
    </NavigationMenuListHorizontal>
  </NavigationMenu.Root>
)
