import { Component, OnInit } from '@angular/core';
import {TeamsService} from "../teams.service";
import {ActivatedRoute} from '@angular/router';
import { Team } from "../models/team";
import { Player } from "../models/player";


@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.scss']
})
export class TeamDetailsComponent implements OnInit {
  teams : Team[];
  players : Player[];

  constructor(private teamsService : TeamsService,
              private route : ActivatedRoute
  ) {}

  ngOnInit() {
    this.loadTeam();
    this.loadPlayers();
  }

  loadTeam () {
    this.teams = this.route.snapshot.data['team'];
  }

  loadPlayers() {
    this.players = this.route.snapshot.data['player'];
  }
}
