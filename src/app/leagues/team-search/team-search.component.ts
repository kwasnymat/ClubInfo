import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { FormControl } from '@angular/forms';
import {Team} from '../models/team';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';



@Component({
  selector: 'app-team-search',
  templateUrl: './team-search.component.html',
  styleUrls: ['./team-search.component.scss']
})
export class TeamSearchComponent implements OnInit {
  queryField : FormControl = new FormControl();
  teams: Team[];

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.searchTeam();
  }

  searchTeam() {
    this.queryField.valueChanges
      .pipe(
        debounceTime(200),
        distinctUntilChanged()
      )
      .subscribe(queryField => this.searchService.search(queryField)
        .subscribe((teams) => {
          this.teams = teams;
        });
      )
  }

}
