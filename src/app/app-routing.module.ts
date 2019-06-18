import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutComponent } from './pages/about/about.component';
import { Erro404PageComponent } from './pages/erro404-page/erro404-page.component';
import { PatientFormComponent } from './pages/patient-form/patient-form.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {path: '' , component: HomePageComponent},
  {path: 'about' , component: AboutComponent},
  {path: 'patient-form' , component: PatientFormComponent},
  {path: 'contact' , component: ContactComponent},
  {path: 'dashboard' , component: DashboardComponent},
  {path: '**' , component: Erro404PageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
