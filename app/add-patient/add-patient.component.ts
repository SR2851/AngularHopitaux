import { Component, OnInit } from '@angular/core';
import { Patient } from '../model/patient';
import { PatientService } from '../Service/patient.service';
import { Medecin } from '../model/medecin';
import { MedecinService } from '../Service/medecin.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {
newPatient: Patient = new Patient()
listMedecins: Medecin[]=[];
  constructor(private patientService: PatientService, private medecinService: MedecinService) { }

  ngOnInit(): void {
    this.medecinService.getAll().subscribe(
      data => {
        this.listMedecins = data;
      }
    )
  }
  addPatient() {
    this.patientService.addPatient(this.newPatient).subscribe(
      data => {
        console.log(data)
      }
    )
  }
}
