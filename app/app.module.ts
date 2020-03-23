import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListHopitauxComponent } from './list-hopitaux/list-hopitaux.component';
import { ListMedecinComponent } from './list-medecin/list-medecin.component';
import { ListPatientsComponent } from './list-patients/list-patients.component';
import { AddHopitalComponent } from './add-hopital/add-hopital.component';
import { AddMedecinComponent } from './add-medecin/add-medecin.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import {FormsModule} from '@angular/forms';
import { DeleteHopitalComponent } from './delete-hopital/delete-hopital.component';
import { DeleteMedecinComponent } from './delete-medecin/delete-medecin.component';
import { DeletePatientComponent } from './delete-patient/delete-patient.component';
import { MedHopitalComponent } from './med-hopital/med-hopital.component';
import { MedPatientComponent } from './med-patient/med-patient.component';
import { PutHopitalComponent } from './put-hopital/put-hopital.component';
import { PutMedecinComponent } from './put-medecin/put-medecin.component';
import { PutPatientComponent } from './put-patient/put-patient.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    ListHopitauxComponent,
    ListMedecinComponent,
    ListPatientsComponent,
    AddHopitalComponent,
    AddMedecinComponent,
    AddPatientComponent,
    DeleteHopitalComponent,
    DeleteMedecinComponent,
    DeletePatientComponent,
    MedHopitalComponent,
    MedPatientComponent,
    PutHopitalComponent,
    PutMedecinComponent,
    PutPatientComponent,
    HomePageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
