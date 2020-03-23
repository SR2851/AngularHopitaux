import { Component, OnInit } from '@angular/core';
import { Patient } from '../model/patient';
import { Medecin } from '../model/medecin';
import { MedecinService } from '../Service/medecin.service';
import { PatientService } from '../Service/patient.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-put-patient',
  templateUrl: './put-patient.component.html',
  styleUrls: ['./put-patient.component.css']
})
export class PutPatientComponent implements OnInit {
newPatient: Patient = new Patient();
listPatients: Patient[];
listMedecins: Medecin[];
idPatientURL : number;

  constructor(private patientService : PatientService, private medecinService: MedecinService, private route: ActivatedRoute) {this.idPatientURL = parseInt(this.route.snapshot.paramMap.get('id')); }
  

  ngOnInit(): void {
    console.log(this.idPatientURL)

    this.patientService.getById(this.idPatientURL).subscribe(
      data =>{
        this.newPatient=data;
      }
    )

    this.medecinService.getAll().subscribe(
      data => {
        this.listMedecins = data;
      }
    )
    this.patientService.getAll().subscribe(
      data => {
        this.listPatients = data;
      }
    )
  }
  updatePatient(idPatient: number, newPatient: Patient) {
    this.patientService.updatePatient(idPatient, newPatient).subscribe(
      data => {
        console.log(data)
      }
    )
  }
}
