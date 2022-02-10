import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.css']
})
export class JoinUsComponent implements OnInit {

  //INTERPOLATION
  description:string = "Fill the form below:";

  //STYLE BINDING
  centered = "center";
  weight = "bold";
  heading1 = "50px";
  heading2 = "40px";
  heading3 = "30px";

  //TWO-WAY DATA BINDING
  first = "";
  last = "";
  email = "";
  insti = "";

  //EVENT BINDING
  getData(data:any){
    console.warn(data);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
