import { Component, OnInit } from '@angular/core';
import { Customers } from '../customers.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
customers

  //inject HttpClient into your component or service.
  constructor (private dataService: DataService) {}
  ngOnInit() {
    return this.dataService.getPlayers().subscribe(
      data => {
        this.customers = data
        }
      );
    } 
  }