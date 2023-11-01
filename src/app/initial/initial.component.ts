import { Component } from "@angular/core";
import { GameServiceService } from "../game-service.service";

@Component({
    selector:'app-initial',
    templateUrl: './initial.component.html',
    styleUrls: ['../app.component.css']
})
export class InitialComponent{
    constructor(private userdata:GameServiceService) {
    }
    
    start(data:any){
        console.warn(data)
        this.userdata.start_game(data).subscribe((result)=>{
            console.warn(result)
        })
      }

}

