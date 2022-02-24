import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{path:'home', component:HomeComponent},
                        {path:'', component:HomeComponent},
                        {path:'about', component:AboutComponent},
                        {path:'skills', component:SkillsComponent},
                        {path:'portfolio', component:PortfolioComponent},
                        {path:'contact', component:ContactComponent}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
