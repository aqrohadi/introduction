import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent { 
posts;
  //inject HttpClient into your component or service.
  constructor (private dataService: DataService) {}
  ngOnInit() {
    return this.dataService.getPosts().subscribe(
      data => {
        this.posts = data
        }
      );
    } 
  }