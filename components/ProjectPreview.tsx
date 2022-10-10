import { Hackathon, PortfolioItem } from "data/portfolio"
import { hasImage, isHackathon } from "data/typeGuards"
import Link from "next/link"
import { Adaptive, Box, Flex, InvertedAdaptive } from "./html/Box"
import { Image } from "./html/Image"
import { Text } from "./html/Text"

export const Preview = ({
  item,
  width,
  height,
  redirects = false,
}: {
  item: PortfolioItem
  width?: string
  height?: string
  redirects?: boolean
}) => {
  const backgroundColor = redirects ? "$grayLight" : "transparent"
  const color = "$black"

  const preview = (
    <Adaptive
      css={{
        backgroundColor,
        marginTop: "$md",
        marginBottom: "$lg",
        marginLeft: "$md",
        marginRight: "$lg",
        padding: "$sm",
        flex: "auto",
        boxShadow: "$colors$secondary -4px -4px 0 0, $colors$secondary 4px 4px 0 0",
      }}
    >
      {hasImage(item) ? (
        <Box css={{ marginLeft: "auto", marginRight: "auto", minWidth: "20vw" }}>
          <Image src={item.image}></Image>
        </Box>
      ) : null}
      <Box css={{ minWidth: "60vw", marginLeft: "$xs" }}>
        {isHackathon(item) ? (
          <Text css={{ fontSize: "$sm", color, margin: "0" }}>{item.year}</Text>
        ) : null}
        <Text css={{ fontSize: "$lg", color, margin: "0" }}>{item.title}</Text>
        <Text css={{ fontSize: "$md", color }}>{item.description}</Text>
      </Box>
      <InvertedAdaptive
        css={{
          alignContent: "center",
          minWidth: "15vw",
        }}
      >
        {isHackathon(item) ? (
          <Link href={item.github} passHref>
            <Text
              css={{
                color,
                textAlign: "center",
                margin: "auto",
              }}
            >
              Github
            </Text>
          </Link>
        ) : null}
        {isHackathon(item) ? (
          <Link href={item.submission} passHref>
            <Text css={{ color, textAlign: "center", margin: "auto" }}>Submission</Text>
          </Link>
        ) : null}
      </InvertedAdaptive>
    </Adaptive>
  )

  if (redirects) {
    return (
      <Link href={redirects ? `/hackathon/${item.id}` : ""} passHref>
        {preview}
      </Link>
    )
  } else {
    return preview
  }
}
