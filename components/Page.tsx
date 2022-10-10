import Head from "next/head"
import styles from "@styles/Home.module.css"
import Link from "next/link"
import Navigation from "./Navigation"
import { Box } from "./html/Box"
import { Text } from "./html/Text"

interface PageProps {
  title: string
  description: string
  content: JSX.Element
}

const Page = ({ title, description, content }: PageProps) => {
  return (
    <Box
      css={{
        background: "$white",
      }}
    >
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      {content}

      <Box className={styles.footer}>
        <Text type="md" weight="regular" color="success">
          Styled footer text
        </Text>
      </Box>
    </Box>
  )
}

export default Page
