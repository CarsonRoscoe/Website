import { Box, Flex } from "@components/html/Box"
import { Button } from "@components/html/Button"
import { Text } from "@components/html/Text"
import NavigationMenuDemo from "@components/NavigationMenuDemo"
import Page from "@components/Page"
import { Preview } from "@components/ProjectPreview"
import TabsDemo from "@components/Tabs"
import { styled } from "@stitches/stiches.config"
import { hackathons } from "data/portfolio"
import { useRouter } from "next/router"

const Buttons = () => {
  return (
    <Box>
      <Flex css={{ margin: "$sm" }}>
        <Button>Regular</Button>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="error">Error</Button>
        <Button variant="success">Success</Button>

        <Button variant="secondary" size="large">
          Nics Button
        </Button>
      </Flex>
      <Flex css={{ margin: "$sm" }}>
        <Button outlined={true}>Regular</Button>
        <Button variant="primary" outlined={true}>
          Primary
        </Button>
        <Button variant="secondary" outlined={true}>
          Secondary
        </Button>
        <Button variant="error" outlined={true}>
          Error
        </Button>
        <Button variant="success" outlined={true}>
          Success
        </Button>
      </Flex>
      <Flex>
        <Button size="small" css={{ margin: "auto" }}>
          Small
        </Button>
        <Button css={{ margin: "auto" }}>Medium</Button>
        <Button size="large" css={{ margin: "auto" }}>
          Large
        </Button>
      </Flex>
    </Box>
  )
}

const Texts = () => {
  return (
    <Box>
      <Flex>
        <Text>Test</Text>
      </Flex>
    </Box>
  )
}

const Previews = () => {
  const hackathon = hackathons[0]
  return (
    <Box>
      <Text>Hackathon</Text>
      <Preview item={hackathon} />
    </Box>
  )
}

const UI = () => {
  const router = useRouter()
  const { tab } = router.query

  return (
    <Page
      title="Hackathons"
      description="My hackathons"
      content={
        <TabsDemo titles={["Buttons", "Texts", "Previews", "Test"]}>
          <Buttons />
          <Texts />
          <Previews />
          <NavigationMenuDemo />
        </TabsDemo>
      }
    />
  )
}

export default UI
