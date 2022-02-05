import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngdemo-1';

  //INTERPOLATION OR ONE WAY BINDING
  name = "Almond";
  id = 20660602;

  //STYLE BINDING
  myFont = "Comic Sans MS";
  myStyle = "underline";
  myColor = "blue";

  //PROPERTY BINDING
  placeholderText:any = "This is a placeholder text";

  //CLASS BINDING
  appliedCSSClass = "line-through";
  notappliedCSSClass = false;

  //TWO-WAY BINDING
  showData($event:any){
    console.log("Button is clicked!"); if ($event) {
      console.log($event.target.value);
    }
  }

  getData(data:any){
    console.warn(data);
  }
}
