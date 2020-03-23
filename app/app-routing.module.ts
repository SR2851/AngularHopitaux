import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListHopitauxComponent } from './list-hopitaux/list-hopitaux.component';
import { ListMedecinComponent } from './list-medecin/list-medecin.component';
import { ListPatientsComponent } from './list-patients/list-patients.component';
import { AddHopitalComponent } from './add-hopital/add-hopital.component';
import { AddMedecinComponent } from './add-medecin/add-medecin.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { PutHopitalComponent } from './put-hopital/put-hopital.component';
import { PutMedecinComponent } from './put-medecin/put-medecin.component';
import { PutPatientComponent } from './put-patient/put-patient.component';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [
  {
    path: "hopital",
    component: ListHopitauxComponent
  },
  {
    path: "medecin",
    component: ListMedecinComponent
  },
  {
    path: "patient",
    component: ListPatientsComponent
  },
  {
    path: "hopital/add",
    component: AddHopitalComponent
  },
  {
    path: "medecin/add",
    component: AddMedecinComponent
  },
  {
    path: "patient/add",
    component: AddPatientComponent
  },
  {
    path: "hopital/update",
    component: PutHopitalComponent
  },
  {
    path: "hopital/update/:id",
    component: PutHopitalComponent
  },
  {
    path: "medecin/update",
    component: PutMedecinComponent
  },
  {
    path: "medecin/update/:id",
    component: PutMedecinComponent
  },
  {
    path: "patient/update",
    component: PutPatientComponent
  },
  {
    path: "patient/update/:id",
    component: PutPatientComponent
  }
  ,
  {
    path: "hopitauxDeFrance",
    component: HomePageComponent
  }
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
