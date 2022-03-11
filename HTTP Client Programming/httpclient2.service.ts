import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'; //imported module

@Injectable({
  providedIn: 'root'
})
export class Httpclient2Service {

  constructor(private http:HttpClient) { }

  getPhotosfromServer(){
    return this.http.get('https://jsonplaceholder.typicode.com/photos');
  }

}
