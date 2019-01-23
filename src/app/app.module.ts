import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {LeaguesModule} from './leagues/leagues.module';
import {TeamsService} from './leagues/teams.service';
import {HttpModule} from '@angular/http';
import {CoreModule} from './core-module/core-module';
import {AppRoutingModule} from './app-routing.module';
import {LeaguesRoutingModule} from './leagues/leagues-routing.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    LeaguesModule,
    HttpModule,
    AppRoutingModule,
    LeaguesRoutingModule
  ],
  providers: [TeamsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
