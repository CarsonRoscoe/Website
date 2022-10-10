import { Box } from "@components/html/Box"
import { Text } from "@components/html/Text"
import Page from "@components/Page"
import styles from "@styles/Home.module.css"

const Blog = () => {
  return (
    <Page
      title="Blog"
      description="My HIVE blog"
      content={
        <Box
          css={{
            minWidth: "100vw",
            minHeight: "80vh",
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>Blog</Text>
        </Box>
      }
    />
  )
}

export default Blog
