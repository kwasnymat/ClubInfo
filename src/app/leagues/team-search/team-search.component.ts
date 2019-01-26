import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { FormControl } from '@angular/forms';
import {Team} from '../models/team';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import {Router, ActivatedRoute} from '@angular/router';




@Component({
  selector: 'app-team-search',
  templateUrl: './team-search.component.html',
  styleUrls: ['./team-search.component.scss']
})
export class TeamSearchComponent implements OnInit {
  queryField : FormControl = new FormControl();
  teams: Team[];
  team;

  constructor(private searchService: SearchService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.searchTeam();
  }

  searchTeam() {
    this.queryField.valueChanges
      .pipe(
        debounceTime(200),
        distinctUntilChanged(),
        switchMap(queryField => this.searchService.search(queryField))
      )
      .subscribe((teams) => {
        this.teams = teams
      });
      // .subscribe(queryField => this.searchService.search(queryField)
      //   .subscribe((teams) => {
      //     this.teams = teams;
      //   });
      // )
  }

  goToTeamDetails(team : Team){
    this.router.navigate( [team.id]);
  }


}
