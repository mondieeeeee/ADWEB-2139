import { Component } from '@angular/core';
import { Service1Service } from './service1.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employees';
  employeeArr: any;

  constructor(private service1:Service1Service) {}
  ngOnInit(){
    this.employeeArr = this.service1.getEmployeeList();
  }
}
