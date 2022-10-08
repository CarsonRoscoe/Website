import ErrorPage from "@components/ErrorPage"
import { Adaptive, Box, Flex } from "@components/html/Box"
import { Text } from "@components/html/Text"
import Page from "@components/Page"
import { Preview, PreviewInterface } from "@components/ProjectPreview"
import Link from "next/link"
import { useRouter } from "next/router"
import { isMobile } from "react-device-detect"

export const hackathons: PreviewInterface[] = [
  {
    id: "freyas-temptation",
    title: "Freya's Temptation",
    description:
      "A Windows/Mac/Linux top town game written in C#. The game was created for the Global Game Jam 2016 competition, a 48 hour game making competition where we had to create a game around the theme of 'ritual'.",
    fullDescription:
      "In the game, you play as a girl named Freya, who has had a ritual performed on her by her fellow villagers.\n" +
      "She is now cursed. If she gets too close to a fellow villager, she will lose all self control and turn into a monster, and then eat them.\n" +
      "However, being a sweet girl, you have no intention of hurting the others.\n" +
      "You must avoid the villagers to prevent yourself from hurting them, all the while finding other sources of food to satisfy your hunger.",
    year: 2016,
    image:
      "https://globalgamejam.org/sites/default/files/styles/game_sidebar__wide/public/game/featured_image/titlecard_10.png?itok=TvZPb5RY&timestamp=1454288693",
    github: "https://github.com/CarsonRoscoe/FreyasTemptation",
    submission: "https://globalgamejam.org/2016/games/freyas-temptation",
  },
  {
    id: "barnacle-bay",
    title: "Barnacle Bay",
    description:
      "A fast paced 3D WebGL boat fighting game created in Unity for the AirConsole platform.",
    fullDescription: "Presented at the 2017 Vancouver GGJ.",
    year: 2017,
    image:
      "https://ggj.s3.amazonaws.com/styles/game_content__wide/games/screenshots/16251544_1238229729546090_283954384_o.jpg?itok=DrBZuRiP&timestamp=1485126205",
    github: "https://github.com/CarsonRoscoe/BarnacleBay",
    submission: "https://globalgamejam.org/2017/games/barnacle-bay",
  },
  {
    id: "pixel-property-v2",
    title: "PixelProperty V2",
    description:
      "The community driven evolving digital canvas running on sidechains with Connext bridges linking them.",
    fullDescription:
      "For the scope of the hackathon, PixelPropertyV2 was deployed on three networks. Kovan (Ethereum), Mumbai (Polygon) and Fuji (Avalanche).\n" +
      "Every contract on the test networks is freshly written and modernized. During the official deployment, a altered contract to Kovan's will be deployed instead which migrates from the live contract.\n" +
      "The front-end is written using react and MetaMask. The backend is written in NodeJS, ethers and uses the CovalentHQ API to read from the various chains.\n" +
      "Events received from the Covalent API are written to a local SQLite3 database, to remove the need of ever re-requesting the same historic events.\n" +
      "The Connext testnet router was used to successfully bridge PXL between Kovan, Polygon and Avalanche.\n",
    year: 2021,
    image: "https://ethglobal.s3.amazonaws.com/recb4a4xtPEkSdFs3/Screenshot.png",
    github: "https://github.com/CarsonRoscoe/PixelPropertyV2",
    submission: "https://ethglobal.com/showcase/pixelproperty-qskds",
  },
  {
    id: "gog-battles",
    title: "GoG: Battles",
    description:
      "GoG: Battles is a trading and fighting card game themed after the indie MMO Guilds of Gods.",
    fullDescription:
      "In GoG: Battles, players collect equipment cards to be used as equipment during battle.\n" +
      "Once joining a battle, each player equips their team of five adventurers with their equipment cards as they please.\n" +
      "Choose wisely, each piece of equipment offers specific strengths and weaknesses for various classes.\n" +
      "Battle phases are simulated, where each player makes a move decision for the next round.\n" +
      "Battle for glory and wealth; the victor will increase their rank and the reward pool will generate their earned battle cards.",
    year: 2021,
    image:
      "https://ethglobal.s3.amazonaws.com/reciFr5FlAe8eKaQv/Screen_Shot_2021-10-10_at_8.15.02_AM.png",
    github: "https://github.com/CarsonRoscoe/GoGBattles",
    submission: "https://showcase.ethglobal.com/ethonline2021/guilds-of-gods-battles",
  },
]

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
            id="id"
            title={hackathon.title}
            description={hackathon.description}
            github={hackathon.github}
            image={hackathon.image}
            submission={hackathon.submission}
            year={hackathon.year}
            width={"$maxContentWidth"}
            height={"$maxContentHeight"}
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
