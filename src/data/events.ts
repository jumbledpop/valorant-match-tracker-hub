
import { Event } from './interfaces';
import { teams } from './teams';
import { matches } from './matches';

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
