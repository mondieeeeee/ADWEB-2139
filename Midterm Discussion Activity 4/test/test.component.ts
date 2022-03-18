import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs'; // new import

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  //date pipes
  presentDate = new Date();

  //asyncpipe
  time = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });

  //currency pipe
  price: number = 30000.50;

  //slice pipe
  Fruits = ['Apple', 'Orange', 'Grapes', 'Mango', 'Kiwi', 'Pomegranate'];

  //decimal pipe
  decNum1: number = 8.7589623;
  decNum2: number = 5.43;

  //title case pipe
  title: string = 'harry potter and the goblet of fire';

  constructor() { }

  ngOnInit(): void {
  }

}
