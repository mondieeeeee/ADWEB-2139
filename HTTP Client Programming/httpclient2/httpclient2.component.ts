import { Component, OnInit } from '@angular/core';

import { Httpclient2Service } from '../httpclient2.service'; //imported service

@Component({
  selector: 'app-httpclient2',
  templateUrl: './httpclient2.component.html',
  styleUrls: ['./httpclient2.component.css']
})
export class Httpclient2Component implements OnInit {

  photos: any;

  constructor(private photoGallery:Httpclient2Service) { }

  ngOnInit(): void {
    this.photoGallery.getPhotosfromServer().subscribe((data)=>{this.photos = data})
  }

}
