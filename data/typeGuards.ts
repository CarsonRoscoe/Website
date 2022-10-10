import { Hackathon, PortfolioItem } from "./portfolio"

export function isHackathon(x: PortfolioItem): x is Hackathon {
  const hackathon = x as Hackathon
  return hackathon.year != null && hackathon.github != null && hackathon.image != null
}

export function hasImage(x: any): x is { image: string } {
  return x.image != null
}
