import { Flex, Grid } from "./html/Box"
import { Text } from "./html/Text"
import Page from "./Page"

interface ErrorProps {
  title: string
  subtitle: string
}
const Error = ({ title, subtitle }: ErrorProps) => {
  return (
    <Grid css={{ alignContent: "center" }}>
      <Text css={{ color: "$black", fontWeight: "$bold", fontSize: "$xxl" }}>
        {title}
      </Text>
      <Text css={{ color: "$errorLight", fontWeight: "$regular", fontSize: "$lg" }}>
        {subtitle}
      </Text>
    </Grid>
  )
}

export default ({ title, subtitle }: ErrorProps) => {
  return (
    <Page
      title={title}
      description={subtitle}
      content={
        <Grid
          css={{
            margin: "32px",
            padding: "32px",
            maxHeight: "100px",
            fontWeight: "$xxl",
            fontSize: "$xxl",
            flex: "max-content",
          }}
        >
          <Error title={title} subtitle={subtitle} />
        </Grid>
      }
    />
  )
}
