import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css'],
  // providers: [DataService]
})
export class GifsComponent implements OnInit {
 
  // imagePath="https://giphy.com/gifs/TheSwoon-netflix-swoon-theswoon-DijyhMiil";
  
  constructor(private httpclient:HttpClient, private dataService: DataService) { }
  // constructor(private httpclient:HttpClient, private dataService: DataService ) { }
  gifs: any[] = [];
  
  getTrendingGifs():any{
    this.httpclient
    .get<any>(`https://api.giphy.com/v1/gifs/trending?api_key=${environment.giphyApikey}&limit=20&rating=g`)
    .subscribe((data) => {
      data
      // data.data;
      // console.log(data.data);
      this.gifs = data.data;
      // this.loading=false;
    },
    // (err) => {
    //   console.log('error');
    // }
  )
  }

 
  ngOnInit(): void {
    this.getTrendingGifs()
    this.dataService.getTrendingGifs()
    .subscribe((response: any)=>{
     this.gifs = response;
    });
    //  this.dataService.getTrendingGifs()
    //    .subscribe(function(response:any){
    //         console.log(`Data`,response)
    //         this.gifs = response.data;
    // });
  }

}
