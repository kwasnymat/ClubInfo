import {TeamsService} from "./teams.service";
import {Player} from "./models/player";
import {Resolve, ActivatedRouteSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";


@Injectable()

export class PlayerResolve implements Resolve<Player[]> {
  constructor(private teamsService : TeamsService) {}

  resolve(route : ActivatedRouteSnapshot) {
    return this.teamsService.getPlayers(route.params['id']);
  }
}
