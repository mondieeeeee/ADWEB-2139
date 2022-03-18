import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../service1.service';

@Component({
  selector: 'app-emplist1',
  templateUrl: './emplist1.component.html',
  styleUrls: ['./emplist1.component.css']
})
export class Emplist1Component implements OnInit {

  employeeArr: any;

  constructor(private service1:Service1Service) { }

  ngOnInit(){
    this.employeeArr = this.service1.getEmployeeList();
  }

}
