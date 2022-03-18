import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../service1.service';

@Component({
  selector: 'app-emplist2',
  templateUrl: './emplist2.component.html',
  styleUrls: ['./emplist2.component.css']
})
export class Emplist2Component implements OnInit {

  employeeArr: any;

  constructor(private service1:Service1Service) { }

  ngOnInit(){
    this.employeeArr = this.service1.getEmployeeList();
  }

}
