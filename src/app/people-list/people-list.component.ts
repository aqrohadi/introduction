import { Component, OnInit } from '@angular/core';
import { People } from '../people.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
	people$: People [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
  	return this.dataService.getPeople()
  	.subscribe(data => this.people$ = data)
  }
}