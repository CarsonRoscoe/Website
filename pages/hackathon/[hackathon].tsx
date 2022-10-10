import ErrorPage from "@components/ErrorPage"
import { Adaptive, Box, Flex } from "@components/html/Box"
import { Text } from "@components/html/Text"
import Page from "@components/Page"
import { Preview } from "@components/ProjectPreview"
import { hackathons } from "data/portfolio"
import Link from "next/link"
import { useRouter } from "next/router"
import { isMobile } from "react-device-detect"

const HackathonPage = () => {
  const router = useRouter()
  const { hackathon: hackathon_id } = router.query

  const hackathon = hackathons.find((x) => x.id == hackathon_id)

  if (!hackathon) {
    return <ErrorPage title={"404"} subtitle={"Invalid project"} />
  }

  return (
    <Page
      title={hackathon.title}
      description={hackathon.description}
      content={
        <Box>
          <Preview
            item={hackathon}
            width={"$maxContentWidth"}
            height={"$maxContentHeight"}
            redirects={false}
          />
          {hackathon.fullDescription.split("\n").map((x) => (
            <Text>{x}</Text>
          ))}
        </Box>
      }
    />
  )
}

export default HackathonPage
