import { Component, OnInit } from '@angular/core';
import { Patient } from '../model/patient';
import { PatientService } from '../Service/patient.service';
import { Medecin } from '../model/medecin';
import { MedecinService } from '../Service/medecin.service';
import Swal from 'sweetalert2'
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
        if (data['idPatient'] == 0){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            
          })
        }
       
        else if(data['idPatient']){
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Patient ajouté!',
            showConfirmButton: true,
            timer: 1500
          }).then( () => {
            window.location.href = "http://localhost:4200/patient"
          })
        }
      }
    )
  }
}
