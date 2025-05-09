
export interface Player {
  id: string;
  name: string;
  team: string;
  role: string;
  agent: string;
  avatar: string;
}

export interface Team {
  id: string;
  name: string;
  logo: string;
  region: string;
  players: Player[];
  rank: number;
}

export interface MatchMap {
  name: string;
  score1: number;
  score2: number;
  winner: string;
}

export interface Match {
  id: string;
  team1: Team;
  team2: Team;
  date: string;
  tournament: string;
  maps: MatchMap[];
  completed: boolean;
  scoreline?: [number, number];
  mvp?: Player;
}

export interface Event {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  location: string;
  prizePool: string;
  teams: Team[];
  matches: Match[];
}

// Sample player data
export const players: Player[] = [
  {
    id: "p1",
    name: "TenZ",
    team: "Sentinels",
    role: "Duelist",
    agent: "Jett",
    avatar: "https://i.imgur.com/JBUXd5Z.png"
  },
  {
    id: "p2",
    name: "ShahZaM",
    team: "Sentinels",
    role: "Sentinel",
    agent: "Sova",
    avatar: "https://i.imgur.com/JBUXd5Z.png"
  },
  {
    id: "p3",
    name: "SicK",
    team: "Sentinels",
    role: "Flex",
    agent: "Phoenix",
    avatar: "https://i.imgur.com/JBUXd5Z.png"
  },
  {
    id: "p4",
    name: "dapr",
    team: "Sentinels",
    role: "Sentinel",
    agent: "Cypher",
    avatar: "https://i.imgur.com/JBUXd5Z.png"
  },
  {
    id: "p5",
    name: "zombs",
    team: "Sentinels",
    role: "Controller",
    agent: "Astra",
    avatar: "https://i.imgur.com/JBUXd5Z.png"
  },
  {
    id: "p6",
    name: "cNed",
    team: "Fnatic",
    role: "Duelist",
    agent: "Jett",
    avatar: "https://i.imgur.com/JBUXd5Z.png"
  },
  {
    id: "p7",
    name: "Derke",
    team: "Fnatic",
    role: "Duelist",
    agent: "Raze",
    avatar: "https://i.imgur.com/JBUXd5Z.png"
  },
  {
    id: "p8",
    name: "Boaster",
    team: "Fnatic",
    role: "In-Game Leader",
    agent: "Sova",
    avatar: "https://i.imgur.com/JBUXd5Z.png"
  },
  {
    id: "p9",
    name: "Magnum",
    team: "Fnatic",
    role: "Sentinel",
    agent: "Killjoy",
    avatar: "https://i.imgur.com/JBUXd5Z.png"
  },
  {
    id: "p10",
    name: "Mistic",
    team: "Fnatic",
    role: "Controller",
    agent: "Viper",
    avatar: "https://i.imgur.com/JBUXd5Z.png"
  }
];

// Sample team data
export const teams: Team[] = [
  {
    id: "t1",
    name: "Sentinels",
    logo: "https://i.imgur.com/R9DFGfy.png",
    region: "NA",
    players: players.filter(p => p.team === "Sentinels"),
    rank: 1
  },
  {
    id: "t2",
    name: "Fnatic",
    logo: "https://i.imgur.com/KSrOtJ9.png",
    region: "EU",
    players: players.filter(p => p.team === "Fnatic"),
    rank: 2
  },
  {
    id: "t3",
    name: "Vision Strikers",
    logo: "https://i.imgur.com/Jo1yz1D.png",
    region: "KR",
    players: [],
    rank: 3
  },
  {
    id: "t4",
    name: "Team Liquid",
    logo: "https://i.imgur.com/h7AVvTH.png",
    region: "EU",
    players: [],
    rank: 4
  },
  {
    id: "t5",
    name: "100 Thieves",
    logo: "https://i.imgur.com/NzJOhT0.png",
    region: "NA",
    players: [],
    rank: 5
  },
  {
    id: "t6",
    name: "G2 Esports",
    logo: "https://i.imgur.com/HQIKuAP.png",
    region: "EU",
    players: [],
    rank: 6
  }
];

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

// Sample event data
export const events: Event[] = [
  {
    id: "e1",
    name: "VCT 2025 Masters Copenhagen",
    startDate: "2025-05-15",
    endDate: "2025-05-30",
    location: "Copenhagen, Denmark",
    prizePool: "$650,000",
    teams: teams,
    matches: matches
  }
];

export function getTopTeams(limit: number = 5): Team[] {
  return [...teams].sort((a, b) => a.rank - b.rank).slice(0, limit);
}

export function getUpcomingMatches(): Match[] {
  return matches.filter(match => !match.completed)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

export function getRecentMatches(): Match[] {
  return matches.filter(match => match.completed)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
