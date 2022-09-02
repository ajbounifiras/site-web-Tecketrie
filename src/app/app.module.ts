import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentComponent } from './components/component/component.component';
import { HomeComponent } from './components/component/home/home.component';
import { HeaderComponent } from './components/component/header/header.component';
import { FooterComponent } from './components/component/footer/footer.component';
import { LoginComponent } from './components/component/login/login.component';
import { RegisterComponent } from './components/component/register/register.component';
import { ContactComponent } from './components/component/contact/contact.component';
import { ReservationComponent } from './components/component/reservation/reservation.component';
import { ServicesComponent } from './components/component/services/services.component';
import { AboutComponent } from './components/component/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    ContactComponent,
    ReservationComponent,
    ServicesComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
