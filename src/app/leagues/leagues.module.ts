import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsListComponent } from './teams-list/teams-list.component';
import {LeagueResolveService} from './league-resolve.service';
import { TeamDetailsComponent } from './team-details/team-details.component';
import {RouterModule} from '@angular/router';
import {TeamResolve} from './team-resolve.service';
import {PlayerResolve} from './player-resolve.service';
import {TeamSearchComponent} from './team-search/team-search.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SearchService} from './search.service';


@NgModule({
  declarations: [TeamsListComponent, TeamDetailsComponent, TeamSearchComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    TeamsListComponent,
    TeamSearchComponent
  ],
  providers: [
    LeagueResolveService,
    TeamResolve,
    PlayerResolve,
    SearchService
  ]
})
export class LeaguesModule { }
