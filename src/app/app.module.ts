import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutComponent } from './pages/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { LogoComponent } from './components/logo/logo.component';
import { PatientsComponent } from './components/patients/patients.component';
import { PatientComponent } from './components/patient/patient.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CardsComponent } from './components/cards/cards.component';
import { Erro404PageComponent } from './pages/erro404-page/erro404-page.component';
import { BannerComponent } from './components/banner/banner.component';
import { PatientFormComponent } from './pages/patient-form/patient-form.component';
import { MedicinesFormComponent } from './components/medicines-form/medicines-form.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    LogoComponent,
    PatientsComponent,
    PatientComponent,
    SearchbarComponent,
    DashboardComponent,
    CardsComponent,
    Erro404PageComponent,
    BannerComponent,
    PatientFormComponent,
    MedicinesFormComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
