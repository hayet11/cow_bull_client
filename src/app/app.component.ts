import { Component } from '@angular/core';
import {GameServiceService} from './game-service.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cow_bull_client';
  aboutText: string = '';
  constructor(private about:GameServiceService){
    this.about.about().subscribe(data=>{
      console.warn(data) //to see the data in the console
      //this.aboutText = data
    })
  }
}

