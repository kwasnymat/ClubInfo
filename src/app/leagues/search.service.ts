import { Injectable } from '@angular/core';
import {Team} from "./models/team";
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs';
import {debounceTime, map, distinctUntilChanged, switchMap, catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchURL = 'https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=';
  private teamUrl = 'https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=';


  constructor(private http: Http) {}

  search(queryString : string): Observable<Team[]>{
    let URL = this.searchURL + queryString;
    console.log(URL);
    return this.http.get(URL)
      .pipe(
        map(response => response.json().teams),
        map((TeamList: any[]) => TeamList.map(team => new Team(team.strTeam, team.strTeamBadge, team.idTeam, team.intFormedYear, team.strStadium, team.intStadiumCapacity, team.strStadiumThumb,
          team.strDescriptionEN, team.strTwitter, team.strInstagram, team.strWebsite, team.strYoutube, team.strTeamJersey))),
        catchError(value => {return [];})
      )
  }

  getTeam(id : string) : Observable<Team[]> {
    console.log(this.teamUrl + `${id}`);
    return this.http.get(this.teamUrl + `${id}`)
      .pipe(
        map(response => response.json().teams),
        map((TeamDetails : any[]) => TeamDetails.map(team => new Team(team.strTeam, team.strTeamBadge, team.idTeam, team.intFormedYear, team.strStadium, team.intStadiumCapacity, team.strStadiumThumb,
          team.strDescriptionEN, team.strTwitter, team.strInstagram, team.strWebsite, team.strYoutube, team.strTeamJersey)))
      );
  }

}
