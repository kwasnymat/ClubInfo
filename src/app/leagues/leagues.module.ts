import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsListComponent } from './teams-list/teams-list.component';
import {LeagueResolveService} from './league-resolve.service';
import { TeamDetailsComponent } from './team-details/team-details.component';
import {RouterModule} from '@angular/router';
import {TeamResolve} from './team-resolve.service';
import {PlayerResolve} from './player-resolve.service';

@NgModule({
  declarations: [TeamsListComponent, TeamDetailsComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TeamsListComponent
  ],
  providers: [
    LeagueResolveService,
    TeamResolve,
    PlayerResolve
  ]
})
export class LeaguesModule { }
