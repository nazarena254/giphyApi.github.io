import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ DataService ]
})
export class SearchComponent implements OnInit {

  constructor( private httpclient:HttpClient, private dataService:DataService) { }

  

  ngOnInit(): void {
  this.dataService.searchGifs("happy");
    } 
  

}
