import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {TeamsListComponent} from './leagues/teams-list/teams-list.component';
import {LeagueResolveService} from './leagues/league-resolve.service';


const appRoutes : Route[] = [
  {path: '', pathMatch: 'full', redirectTo: 'premierleague', resolve: {Teams: LeagueResolveService}},
  {path: 'premierleague', component: <any>TeamsListComponent, resolve: {Teams:LeagueResolveService}},
  {path: 'laliga', component: <any>TeamsListComponent, resolve: {Teams: LeagueResolveService}},
  {path: 'seriea', component: <any>TeamsListComponent, resolve: {Teams: LeagueResolveService}},
  {path: 'bundesliga', component: <any>TeamsListComponent, resolve: {Teams: LeagueResolveService}},
  {path: 'ligue1', component: <any>TeamsListComponent, resolve: {Teams:LeagueResolveService}},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
