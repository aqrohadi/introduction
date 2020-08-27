import { Component, OnInit } from '@angular/core';
import { Pemain } from '../pemain.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-pemain',
  templateUrl: './pemain.component.html',
  styleUrls: ['./pemain.component.css']
})
export class PemainComponent implements OnInit {
  players;

  //inject HttpClient into your component or service.
  constructor (private dataService: DataService) {}
  ngOnInit() {
    return this.dataService.getPlayers()
    .subscribe(data => this.players = data)
  }
}