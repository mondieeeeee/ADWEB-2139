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

  constructor() { }

  ngOnInit(): void {
  }

}
