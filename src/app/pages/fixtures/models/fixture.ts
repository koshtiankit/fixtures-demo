import { Venue } from './venue';
import { Team } from "./team";

export class Fixture {
  homeTeam!: Team;
  awayTeam!: Team;
  kickOff!: Date;
  venue!: Venue;
}

