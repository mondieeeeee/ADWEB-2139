import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  constructor() { }

  employeeArr: any[] =[
    {id:101, firstname:'Joseph', lastname:'Dizon', email:'jdizon@hau.edu.ph'},
    {id:102, firstname:'James', lastname:'Atienza', email:'jatienza@hau.edu.ph'},
    {id:103, firstname:'John', lastname:'Cena', email:'jcena@hau.edu.ph'},
    {id:104, firstname:'Robert', lastname:'Quintana', email:'rquintana@hau.edu.ph'},
    {id:105, firstname:'Almond', lastname:'Rosos', email:'arosos@hau.edu.ph'}
  ];

  getEmployeeList(){
    return this.employeeArr;
  }
}
