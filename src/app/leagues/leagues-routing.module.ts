import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {TeamDetailsComponent} from "./team-details/team-details.component";
import {TeamResolve} from "./team-resolve.service";
import {PlayerResolve} from "./player-resolve.service";

const teamsRoutes : Route[] = [
  {
    path: ':path/:id',
    component: <any>TeamDetailsComponent,
    resolve: { team: TeamResolve, player: PlayerResolve}
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(teamsRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class LeaguesRoutingModule {
}
