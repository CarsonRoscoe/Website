import { Box, Flex, Grid } from "@components/html/Box"
import { Button } from "@components/html/Button"
import { Text } from "@components/html/Text"
import { Href, List } from "@components/Navigation"
import Page from "@components/Page"
import { Preview } from "@components/ProjectPreview"
import * as NavigationMenu from "@radix-ui/react-navigation-menu"

import styles from "@styles/Home.module.css"
import Link from "next/link"
import { hackathons } from "./hackathon/[hackathon]"

const Hackathons = () => {
  return (
    <Page
      title="Hackathons"
      description="My hackathons"
      content={
        <main className={styles.main}>
          <Grid css={{ overflow: "scroll", height: "$maxContentHeight" }}>
            {hackathons.map(
              ({ id, title, description, year, image, github, submission }) => (
                <NavigationMenu.Root>
                  <Link key={title} href={`/hackathon/${id}`} passHref>
                    <Preview
                      id={id}
                      key={title}
                      title={title}
                      description={description}
                      year={year}
                      image={image}
                      github={github}
                      submission={submission}
                      redirects={true}
                    />
                  </Link>
                </NavigationMenu.Root>
              )
            )}
          </Grid>
        </main>
      }
    />
  )
}

export default Hackathons
