import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GameServiceService {
  
  url="http://127.0.0.1:8000/cb_game/";

  constructor(private http:HttpClient) { }

  about(){
    return this.http.get(this.url);
  }

  start_game(data:any){
    return this.http.post(this.url,data)
  }

  play_game(data:any){
    return this.http.post(this.url,data)
  }
 
}
