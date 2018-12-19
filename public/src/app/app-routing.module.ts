import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { PortComponent } from './port/port.component';
import { ByeninjaComponent } from './byeninja/byeninja.component';
import { WrapperComponent } from './wrapper/wrapper.component';


const routes: Routes = [

  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', pathMatch: 'full', component: WrapperComponent},
  {path: 'about', pathMatch: 'full', component: AboutComponent},
  {path: 'portfolio', pathMatch: 'full', component: PortfolioComponent},
  {path: 'contact', pathMatch: 'full', component: ContactComponent},
  {path: 'port', pathMatch: 'full', component: PortComponent},
  {path: 'byeninja', pathMatch: 'full', component: ByeninjaComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
