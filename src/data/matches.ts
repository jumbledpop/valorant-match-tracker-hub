
import { Match } from './interfaces';
import { teams } from './teams';
import { players } from './players';

// Sample match data
export const matches: Match[] = [
  {
    id: "m1",
    team1: teams[0], // Sentinels
    team2: teams[1], // Fnatic
    date: "2025-05-15T18:00:00Z",
    tournament: "VCT 2025 Masters",
    maps: [
      {
        name: "Bind",
        score1: 13,
        score2: 11,
        winner: "t1"
      },
      {
        name: "Haven",
        score1: 10,
        score2: 13,
        winner: "t2"
      },
      {
        name: "Split",
        score1: 13,
        score2: 7,
        winner: "t1"
      }
    ],
    completed: true,
    scoreline: [2, 1],
    mvp: players[0] // TenZ
  },
  {
    id: "m2",
    team1: teams[2], // Vision Strikers
    team2: teams[3], // Team Liquid
    date: "2025-05-16T16:00:00Z",
    tournament: "VCT 2025 Masters",
    maps: [
      {
        name: "Ascent",
        score1: 13,
        score2: 9,
        winner: "t3"
      },
      {
        name: "Icebox",
        score1: 15,
        score2: 13,
        winner: "t3"
      }
    ],
    completed: true,
    scoreline: [2, 0]
  },
  {
    id: "m3",
    team1: teams[4], // 100 Thieves
    team2: teams[5], // G2 Esports
    date: "2025-05-17T19:00:00Z",
    tournament: "VCT 2025 Masters",
    maps: [],
    completed: false
  },
  {
    id: "m4",
    team1: teams[0], // Sentinels
    team2: teams[3], // Team Liquid
    date: "2025-05-18T20:00:00Z",
    tournament: "VCT 2025 Masters",
    maps: [],
    completed: false
  }
];

export function getUpcomingMatches(): Match[] {
  return matches.filter(match => !match.completed)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

export function getRecentMatches(): Match[] {
  return matches.filter(match => match.completed)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
