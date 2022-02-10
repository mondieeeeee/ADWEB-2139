import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {

  //INTERPOLATION
  description:string = "Below are our Corporate Partners";

  //STYLE BINDING
  centered = "center";
  weight = "bold";
  heading1 = "50px";
  heading2 = "40px";
  heading3 = "30px";

  //PROPERTY BINDING
  newTab = "_blank";

  //ngIf DIRECTIVE
  displayTable = true;
  noTable = false;

  //ngFor DIRECTIVE
  companyArr:any[] = [
    {name: "Microsoft", imgURL: "assets/microsoft.jpg", spons: "Platinum", webURL: "https://www.microsoft.com/en-us"},
    {name: "Apple, Inc.", imgURL: "assets/apple.jpg", spons: "Gold", webURL: "https://www.apple.com/"},
    {name: "Amazon", imgURL: "assets/amazon.jpg", spons: "Silver", webURL: "https://www.amazon.com/"},
    {name: "Google, Inc.", imgURL: "assets/google.png", spons: "Bronze", webURL: "https://www.google.com/"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
