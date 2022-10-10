import { Grid } from "@components/html/Box"
import Page from "@components/Page"
import { Preview } from "@components/ProjectPreview"
import * as NavigationMenu from "@radix-ui/react-navigation-menu"
import {
  allProjects,
  hackathons,
  personals,
  PortfolioItem,
  products,
  tools,
} from "data/portfolio"
import Link from "next/link"
import { useRouter } from "next/router"

const ItemNavigationPreview = ({ items }: { items: PortfolioItem[] }) => {
  return (
    <Grid
      css={{
        overflow: "scroll",
        height: "80vh",
        width: "100vw",
      }}
    >
      {items.map((item) => (
        <NavigationMenu.Root>
          <Link key={item.title} href={`/${item.page}/${item.id}`} passHref>
            <Preview key={item.id} item={item} redirects={true} />
          </Link>
        </NavigationMenu.Root>
      ))}
    </Grid>
  )
}

const Portfolio = () => {
  const router = useRouter()
  const { tab } = router.query

  let items = []
  switch (tab || "all") {
    case "products":
      items = products
      break
    case "tools":
      items = tools
      break
    case "hackathons":
      items = hackathons
      break
    case "personals":
      items = personals
      break
    default:
      items = allProjects
  }

  return (
    <Page
      title="Hackathons"
      description="My hackathons"
      content={<ItemNavigationPreview items={items} />}
    />
  )
}

export default Portfolio
