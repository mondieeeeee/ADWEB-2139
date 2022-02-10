import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //INTERPOLATION
  description:string = "Join our Research Conferences around the Globe!";
  frURL = "assets/france.jpg";
  skURL = "assets/korea.jpg";
  sfURL = "assets/san francisco.jpg";
  boURL = "assets/boston.jpg";

  //STYLE BINDING
  centered = "center";
  weight = "bold";
  heading1 = "50px";
  heading2 = "40px";
  heading3 = "30px";
  
  //CLASS BINDING
  backgroundIMG = "background1";
  transBox = "transbox1";

  //EVENT-BINDING
  showData($event:any){
    console.log("Button is clicked!"); if ($event) {
      console.log($event.target.value);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}