import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MyserviceService } from './myservice.service';
import { HttpclientService } from './httpclient.service';
import { Httpclient2Service } from './httpclient2.service'; //new service

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { AboutComponent } from './about/about.component';
import { ListingComponent } from './listing/listing.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { HttpclientComponent } from './httpclient/httpclient.component';

import { HttpClientModule } from '@angular/common/http'; //imported module
import { Httpclient2Component } from './httpclient2/httpclient2.component'; //new component

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    AboutComponent,
    ListingComponent,
    PagenotfoundComponent,
    HomeComponent,
    NewCmpComponent,
    HttpclientComponent,
    Httpclient2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MyserviceService, HttpclientService, Httpclient2Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
