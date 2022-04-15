import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SearchComponent } from '../components/search/search.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpclient:HttpClient) { }
  
        //searchgifs functiom
   searchGifs(searchTerm:string){
   return this.httpclient.get(`https://api.giphy.com/v1/gifs/search?api_key=${environment.giphyApikey}&q=${searchTerm}&limit=10&offset=0&rating=g&lang=en`);
  }
  getTrendingGifs(){
    return this.httpclient.get(`https://api.giphy.com/v1/gifs/trending?api_key=${environment.giphyApikey}&limit=20&rating=g`);
  }
        //getgifs function
  // getTrendingGifs():Observable<any>{
  //   return this.http.get<any>(`https://api.giphy.com/v1/gifs/trending?api_key=${environment.giphyApikey}&limit=20&rating=g`);
  // }

         //moregifs function
   // getMoreGifs(count:number):Observable<any>{
  //   return this.http.get<any>(`https://api.giphy.com/v1/gifs/trending?api_key=${environment.giphyApikey}&limit=${count}&rating=g`);
  // }

}


