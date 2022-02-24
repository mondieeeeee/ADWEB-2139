import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ContactComponent } from './contact/contact.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [{path:'', component:HomeComponent},
                        {path:'home', component:HomeComponent},
                        {path:'about', component:AboutComponent},
                        {path:'products', component:ProductsComponent},
                        {path:'product-details', component:ProductDetailsComponent},
                        {path:'contact', component:ContactComponent},
                        {path:'**', component:PagenotfoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
