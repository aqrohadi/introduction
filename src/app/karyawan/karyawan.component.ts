import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
 
@Component({
  selector: 'app-karyawan',
  templateUrl: './karyawan.component.html',
  styleUrls: ['./karyawan.component.css']
})
export class KaryawanComponent {
   contacts;
   selectedContact;

  constructor (private http: HttpClient, private router: Router, public dataService: DataService) {}
  httpdata;
  ngOnInit() { this.contacts = this.dataService.getContacts();}

   public selectContact(contact){
     this.selectedContact = contact;
   }

}
