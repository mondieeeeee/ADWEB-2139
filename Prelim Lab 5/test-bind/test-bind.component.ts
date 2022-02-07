import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-bind',
  templateUrl: './test-bind.component.html',
  styleUrls: ['./test-bind.component.css']
})
export class TestBindComponent implements OnInit {

  //INTERPOLATION
  title:any = "Gradebook for HAU Students";
  facebookIMG:string = "assets/facebook.png";
  instagramIMG:string = "assets/instagram.png";
  linkedinIMG:string = "assets/linkedin.png";
  twitterIMG:string = "assets/twitter.png";
  youtubeIMG:string = "assets/youtube.png";

  //STYLE BINDING
  color1 = "#cc9837";
  color2 = "#77222d";

  //PROPERTY BINDING
  pHolder1 = "Enter first name here";
  pHolder2 = "Enter last name here";
  pHolder3 = "Enter stud. no. here";
  pHolder4 = "Enter subject here";
  pHolder5 = "Grade";

  //TWO-WAY DATA BINDING
  fName1 = "";
  lName1 = "";
  studNo1 = "";
  subject1 = "";
  prelim1 = 0;
  midterm1 = 0;
  final1 = 0;

  fName2 = "";
  lName2 = "";
  studNo2 = "";
  subject2 = "";
  prelim2 = 0;
  midterm2 = 0;
  final2 = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
