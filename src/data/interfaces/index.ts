
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
