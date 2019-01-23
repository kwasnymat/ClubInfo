import { Component, OnInit } from '@angular/core';
import { Team } from '../models/team';
import {TeamsService} from "../teams.service";
import {Router, ActivatedRoute} from '@angular/router';




@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.scss']
})
export class TeamsListComponent implements OnInit {
  teams: Team[];

  constructor(private teamsService: TeamsService,
              private router: Router,
              private route : ActivatedRoute) { }

  ngOnInit() {
    this.loadTeam();
  }
  //
  // loadTeams(): void {
  //   this.teamsService.getTeams().subscribe((teams) => {
  //     this.teams = teams;
  //   });
  // }

  // loadTeam(){
  //   const id = this.route.snapshot.routeConfig.path;
  //   this.teamsService.getTeams(id).subscribe((teams) => {
  //     this.teams = teams;
  //   }
  // }
  loadTeam() {
    this.teams = this.route.snapshot.data['Teams'];
  }

  goToTeamDetails(team : Team){
    this.router.navigate([this.route.snapshot.routeConfig.path, team.id])
  }

}



