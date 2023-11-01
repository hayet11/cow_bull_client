import { Component } from "@angular/core";
import { GameServiceService } from "../game-service.service";

@Component({
    selector:'app-play',
    templateUrl: './play.component.html',
    styleUrls: ['../app.component.css']
})
export class PlayComponent{
    constructor(private userdata:GameServiceService) {
    }
    result:any
    play(data:any){
        console.warn(data)
        this.userdata.play_game(data).subscribe((result)=>{
            console.warn(result)
        })
      }
}