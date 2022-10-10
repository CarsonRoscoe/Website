import React from "react"
import { styled } from "@stitches/react"
import { violet, mauve, blackA, green } from "@radix-ui/colors"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { Box } from "./html/Box"

const StyledTabs = styled(TabsPrimitive.Root, {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "720px",
  overflow: "scroll",
  boxShadow: `0 2px 10px ${blackA.blackA4}`,
})

const StyledList = styled(TabsPrimitive.List, {
  flexShrink: 0,
  display: "flex",
  borderBottom: `1px solid ${mauve.mauve6}`,
})

const StyledTrigger = styled(TabsPrimitive.Trigger, {
  all: "unset",
  fontFamily: "inherit",
  backgroundColor: "$primary",
  padding: "0 20px",
  margin: "0 0 2px 0",
  height: 45,
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 15,
  lineHeight: 1,
  color: "$primaryDark",
  userSelect: "none",
  "&:first-child": { borderTopLeftRadius: 6 },
  "&:last-child": { borderTopRightRadius: 6 },
  boxShadow: "$colors$black -2px -2px 0px 0px, $colors$black 2px 2px 0px 0px",
  "&:hover": { color: "$primary", backgroundColor: "$primaryLight" },
  '&[data-state="active"]': {
    color: "$primary",
    backgroundColor: "$primaryLight",
  },
  "&:focus": { position: "relative", boxShadow: `0 0 0 2px $black` },
})

const StyledContent = styled(TabsPrimitive.Content, {
  flexGrow: 1,
  padding: 20,
  // backgroundColor: "white",
  borderBottomLeftRadius: 6,
  borderBottomRightRadius: 6,
  outline: "none",
  // "&:focus": { boxShadow: `0 0 0 2px $black` },
  margin: "auto",
})

// Exports
export const Tabs = StyledTabs
export const TabsList = StyledList
export const TabsTrigger = StyledTrigger
export const TabsContent = StyledContent

const TabsDemo = ({ titles, children }: { titles: string[]; children: any[] }) => {
  return (
    <Box css={{}}>
      <Tabs defaultValue="tab1">
        <TabsList aria-label="Manage your account">
          {titles.map((title, index) => (
            <TabsTrigger key={index} value={`tab${index}`}>
              {title}
            </TabsTrigger>
          ))}
        </TabsList>
        {children.map((child, index) => (
          <TabsContent key={index} value={`tab${index}`}>
            {child}
          </TabsContent>
        ))}
      </Tabs>
    </Box>
  )
}

export default TabsDemo
