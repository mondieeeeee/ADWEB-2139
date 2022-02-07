import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gradebook',
  templateUrl: './gradebook.component.html',
  styleUrls: ['./gradebook.component.css']
})
export class GradebookComponent implements OnInit {

  //ngIfElse
  isLogIn:boolean=true;
  isLogOut:boolean=false;

  //ngFor
  studentArr: any[]=[
    {"id":1100,"name":"Almond"},
    {"id":2200,"name":"John"},
    {"id":3300,"name":"Mary"},
    {"id":4400,"name":"Myra"},
    {"id":5500,"name":"Ashley"}
  ];

  trackByData(index:number,studentArr:any):number{
    return studentArr.id;
  };

  employeeArr: any[]=[
    {fName: "Almond", lName: "Rosos", role: "Admin", email: "arosos@something.com"},
    {fName: "John", lName: "Doe", role: "User", email: "jdoe@something.com"},
    {fName: "Tim", lName: "Cook", role: "Admin", email: "tcook@something.com"},
    {fName: "Mark", lName: "Zuckerberg", role: "User", email: "mzuckerberg@something.com"},
    {fName: "Sundar", lName: "Pichai", role: "User", email: "spichai@something.com"}
  ];

  //ngSwitch
  loginName = "admin";

  constructor() { }

  ngOnInit(): void {
  }

}