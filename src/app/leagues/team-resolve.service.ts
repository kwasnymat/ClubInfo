import {TeamsService} from "./teams.service";
import {Team} from "./models/team";
import {Resolve, ActivatedRouteSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";


@Injectable()

export class TeamResolve implements Resolve<Team[]> {
  constructor(private teamsService : TeamsService) {}

  resolve(route : ActivatedRouteSnapshot) {
    return this.teamsService.getTeam(route.params['id']);
  }
}

