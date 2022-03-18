import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../service1.service';

@Component({
  selector: 'app-emplist3',
  templateUrl: './emplist3.component.html',
  styleUrls: ['./emplist3.component.css']
})
export class Emplist3Component implements OnInit {

  employeeArr: any;

  constructor(private service1:Service1Service) { }

  ngOnInit(){
    this.employeeArr = this.service1.getEmployeeList();
  }

}
