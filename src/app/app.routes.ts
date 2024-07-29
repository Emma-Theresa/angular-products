import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { SingleDistrictPageComponent } from './pages/single-district-page/single-district-page.component';

export const routes: Routes = [

{
  path:'',loadComponent:()=>import('./pages/home/home.component').then((m)=>m.HomeComponent)//lazyloading
},
{
  path:'contact',component:ContactComponent
},
{
  path:'login',component:LoginComponent
},
{
  path:'single-district-page/:id',component:SingleDistrictPageComponent

}


];
