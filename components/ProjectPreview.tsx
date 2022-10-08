import Link from "next/link"
import { Adaptive, Box, Flex } from "./html/Box"
import { Text } from "./html/Text"

export interface PreviewProps {
  id: string
  title: string
  description: string
  year: number
  image: string
  github: string
  submission: string
}

export type PreviewInterface = PreviewProps & { fullDescription: string }

export const Preview = ({
  id,
  title,
  description,
  year,
  image,
  github,
  submission,
  redirects = false,
}: PreviewProps & {
  width?: string
  height?: string
  redirects?: boolean
}) => {
  const backgroundColor = redirects ? "$lightGray" : "transparent"
  const color = "$black"

  const preview = (
    <Adaptive
      css={{
        backgroundColor,
        marginBottom: "$lg",
        marginLeft: "$md",
        marginRight: "$lg",
        padding: "$sm",
        flex: "auto",
      }}
    >
      <img src={image} width={"320px"} height={"240px"}></img>
      <Box css={{ marginLeft: "$md" }}>
        <Text css={{ fontSize: "$sm", color, margin: "0" }}>{year}</Text>
        <Text css={{ fontSize: "$lg", color, margin: "0" }}>{title}</Text>
        <Text css={{ fontSize: "$md", color }}>{description}</Text>
      </Box>
      <Flex css={{ alignContent: "center" }}>
        <Link href={github} passHref>
          <Text
            css={{
              color,
              textAlign: "center",
              margin: "$lg",
            }}
          >
            Github
          </Text>
        </Link>
        <Link href={submission} passHref>
          <Text css={{ color, textAlign: "center", margin: "$lg" }}>Submission</Text>
        </Link>
      </Flex>
    </Adaptive>
  )

  if (redirects) {
    return (
      <Link href={redirects ? `/hackathon/${id}` : ""} passHref>
        {preview}
      </Link>
    )
  } else {
    return preview
  }
}
