import { Component, OnInit } from '@angular/core';
import leagues from '../../../mock/leagues-mock';
import {Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  leagues;
  constructor(private router : Router,
              private Route : ActivatedRoute) { }

  ngOnInit() {
    this.leagues = leagues;
  }
}
