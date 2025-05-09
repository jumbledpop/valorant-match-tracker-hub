
import { Team } from './interfaces';
import { players } from './players';

// Sample team data
export const teams: Team[] = [
  {
    id: "t1",
    name: "Sentinels",
    logo: "/lovable-uploads/1b53dbca-c86b-44d1-8368-fdaa02211079.png",
    region: "NA",
    players: players.filter(p => p.team === "Sentinels"),
    rank: 1
  },
  {
    id: "t2",
    name: "Fnatic",
    logo: "https://upload.wikimedia.org/wikipedia/en/4/43/Esports_organization_Fnatic_logo.svg",
    region: "EU",
    players: players.filter(p => p.team === "Fnatic"),
    rank: 2
  },
  {
    id: "t3",
    name: "Vision Strikers",
    logo: "/lovable-uploads/865833c1-a8c5-48b0-8711-ddd3d31fdb56.png",
    region: "KR",
    players: [],
    rank: 3
  },
  {
    id: "t4",
    name: "Team Liquid",
    logo: "/lovable-uploads/bcd8c5cc-f8e6-4e46-9706-a11e7c4dcf66.png",
    region: "EU",
    players: [],
    rank: 4
  },
  {
    id: "t5",
    name: "100 Thieves",
    logo: "/lovable-uploads/289a1def-9dcb-4db9-8958-e21fd4fe3fd5.png",
    region: "NA",
    players: [],
    rank: 5
  },
  {
    id: "t6",
    name: "G2 Esports",
    logo: "/lovable-uploads/f99b1da1-f7b4-4694-b53c-c0ce9011af45.png",
    region: "EU",
    players: [],
    rank: 6
  }
];

export function getTopTeams(limit: number = 5): Team[] {
  return [...teams].sort((a, b) => a.rank - b.rank).slice(0, limit);
}
