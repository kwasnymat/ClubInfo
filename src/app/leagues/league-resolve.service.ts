import {TeamsService} from "./teams.service";
import {Team} from "./models/team";
import {Resolve, ActivatedRouteSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import leagues from '../../mock/leagues-mock';


@Injectable()

export class LeagueResolveService implements Resolve<Team[]> {
  leagues;
  constructor(private teamsService : TeamsService) {
    this.leagues = leagues;
  }

  resolve(route : ActivatedRouteSnapshot) {
    const path = this.leagues.find(item => item.path === route.routeConfig.path);
    return this.teamsService.getTeams(path.id);
  }
}

