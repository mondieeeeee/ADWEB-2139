import { Component, OnInit } from '@angular/core';
import { Observable, of, range, from, fromEvent, filter, interval } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  constructor() { }

  //variable declarations

  numbers: number[]=[];
  sum: number = 0;

  filteredNumbers: number[]=[];
  filtered: number = 0;

  mappedNumbers: number[]=[];
  mapped: number = 0;

  apiMessage: any;

  counter: number = 0;

  ngOnInit() {
    //of
    const numbers$ = of(1,2,3,4,5,6,7,8,9,10);

    //observer
    const observer = {
      next: (num: number) => {this.numbers.push(num); this.sum += num},
      error: (err:any) => console.log(err),
      complete: () => console.log("Observation completed!")
    };

    //subscription
    numbers$.subscribe(observer);

    //filter
    const filterFn = filter((num:number) => num > 5);
    const filteredNumbers$ = filterFn(numbers$);

    //filter subscription
    filteredNumbers$.subscribe((num:number) => {this.filteredNumbers.push(num); this.filtered += num});

    //map
    const mapFnc = map((num:number) => num + num);
    const mappedNumbers$ = numbers$.pipe(filterFn, mapFnc);

    //map subscription
    mappedNumbers$.subscribe((num:number) => {this.mappedNumbers.push(num); this.mapped += num});

    //ajax
    const api$ = ajax({
      url: 'https://httpbin.org/delay/1',
      method: 'POST',
      headers: {'Content-Type':'application/text'},
      body: 'Hello Almond Rosos!'
    });

    //ajax subscription
    api$.subscribe(res => this.apiMessage = res.request.body);

    //fromEvent
    const clickEvent$ = fromEvent(document, 'click');

    //fromEvent subscription
    clickEvent$.subscribe(() => this.counter++);

    //intervals
    // const interval$ = interval(1000);
    // interval$.subscribe(val => console.log('stream 1 ' + val));

    // const click$ = fromEvent(document, 'click');

    // click$.subscribe(evt => console.log('Mouse Clicked' + evt));

    //own observable
    // const iterator$ = from([2,4,6,8,10]);
    // iterator$.subscribe(evt => console.log('This is event' + evt));

    //required 2 
    const observable = new Observable(subscriber => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete(); }, 1000);
    });

    console.log('just before subscribe');
    observable.subscribe({
      next(x) {console.log('got value ' + x)},
      error(err) {console.error('something wrong occurred: ' + err)},
      complete() {console.log('done')}
    });
    console.log('just after subscribe');
  }

}
