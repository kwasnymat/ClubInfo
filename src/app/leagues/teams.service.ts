import { Injectable } from '@angular/core';
import {Team} from "./models/team";
import {Player} from "./models/player";
import {Observable} from 'rxjs';
import { Http } from '@angular/http';
import 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  private leagueURL = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=';
  private teamUrl = 'https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=';
  private playersUrl= 'https://www.thesportsdb.com/api/v1/json/1/lookup_all_players.php?id=';

  constructor(private http: Http) {}


  getTeams(name : string): Observable<Team[]> {
    return this.http.get(this.leagueURL + `${name}`)
      .pipe(
        map(response => response.json().teams),
        map((TeamList: any[]) => TeamList.map(team => new Team(team.strTeam, team.strTeamBadge, team.idTeam)))
      );
  }

  getTeam(id : string) : Observable<Team[]> {
    return this.http.get(this.teamUrl + `${id}`)
      .pipe(
        map(response => response.json().teams),
        map((TeamDetails : any[]) =>
          TeamDetails.map(team => new Team(team.strTeam, team.strTeamBadge, team.idTeam, team.intFormedYear,
            team.strStadium, team.intStadiumCapacity, team.strStadiumThumb, team.strDescriptionEN, team.strTwitter, team.strInstagram,
            team.strWebsite, team.strYoutube, team.strTeamJersey)))
      );
  }

  getPlayers(id : string) : Observable<Player[]> {
    return this.http.get(this.playersUrl + `${id}`)
      .pipe(
        map(response => response.json().player),
        map((PlayersList : any[]) =>
          PlayersList.map(player =>
            new Player(player.strThumb, player.strPlayer, player.dateBorn, player.strPosition, player.strWeight,
              player.strHeight, player.strNationality)))
      );
  }
}
