import { Component, OnInit } from '@angular/core';

import { HttpclientService } from '../httpclient.service'; //imported service

@Component({
  selector: 'app-httpclient',
  templateUrl: './httpclient.component.html',
  styleUrls: ['./httpclient.component.css']
})
export class HttpclientComponent implements OnInit {

  pageTitle = "Example HTTP Service";

  httpusers: any;

  constructor(private httpclientList: HttpclientService) { }

  ngOnInit(): void {
    this.httpclientList.getUsersfromServer().subscribe((data)=>{this.httpusers = data});
  }

}
