import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/component/about/about.component';
import { ContactComponent } from './components/component/contact/contact.component';
import { HomeComponent } from './components/component/home/home.component';
import { LoginComponent } from './components/component/login/login.component';
import { RegisterComponent } from './components/component/register/register.component';
import { ReservationComponent } from './components/component/reservation/reservation.component';
import { ServicesComponent } from './components/component/services/services.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'reservation',component:ReservationComponent},
  {path:'services',component:ServicesComponent},
  {path:'about',component:AboutComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
