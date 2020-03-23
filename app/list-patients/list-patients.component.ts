import { Component, OnInit } from '@angular/core';
import { Patient } from '../model/patient';
import { PatientService } from '../Service/patient.service';

@Component({
  selector: 'app-list-patients',
  templateUrl: './list-patients.component.html',
  styleUrls: ['./list-patients.component.css']
})
export class ListPatientsComponent implements OnInit {
  listPatients: Patient[]=[];
  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.patientService.getAll().subscribe(
      data => {
        this.listPatients = data;
      }
    )
  }
  deletePatient(idPatient : number){
    this.patientService.deletePatient(idPatient).subscribe(
      data => {
        console.log(data)
      }
    )
  }
}
