import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {TeamsListComponent} from './leagues/teams-list/teams-list.component';
import {LeagueResolveService} from './leagues/league-resolve.service';
import {TeamSearchComponent} from './leagues/team-search/team-search.component';


const appRoutes : Route[] = [
  {path: '', redirectTo: 'search', pathMatch: 'full'},
  {path: 'search', component: <any>TeamSearchComponent},
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
