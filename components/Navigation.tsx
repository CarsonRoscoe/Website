import { styled } from "@stitches/stiches.config"
import { useRouter } from "next/router"
import Link from "next/link"
import * as NavigationMenu from "@radix-ui/react-navigation-menu"
import { Flex } from "./html/Box"
import { isMobile } from "react-device-detect"

const StyledNavigationList = styled(NavigationMenu.List, {
  backgroundColor: "$offWhite",
  display: "flex",
  alignContent: "center",
  alignSelf: "center",
  width: "100vw",
  overflow: "scroll",
  paddingTop: "$md",
  paddingBottom: "$md",
})

const StyledNavigationMenuLink = styled(NavigationMenu.Link, {
  textDecoration: "none",
  "&[data-active]": { textDecoration: "underline" },
  color: "$black",
  backgroundColor: "$lightGray",
  minWidth: "160px",
  minHeight: "32px",
  marginRight: "$xxl",
  textAlign: "center",
  fontSize: "$lg",
  fontWeight: "$bold",
})

export const Href = ({ href, children }: { href: string; children: any }) => {
  const router = useRouter()
  const isActive = router.asPath === href

  return (
    <Link href={href} passHref>
      <StyledNavigationMenuLink active={isActive}>{children}</StyledNavigationMenuLink>
    </Link>
  )
}

export const List = ({ children }: { children: any }) => {
  return <StyledNavigationList css={{ flex: "auto" }}>{children}</StyledNavigationList>
}

export default () => (
  <NavigationMenu.Root>
    <List>
      <Href href="/">Home</Href>
      <Href href="/blog">Blog</Href>
      <Href href="/products">Products</Href>
      <Href href="/tools">Tools</Href>
      <Href href="/projects">Projects</Href>
      <Href href="/hackathons">Hackathons</Href>
    </List>
  </NavigationMenu.Root>
)
