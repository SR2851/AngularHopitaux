import { Component, OnInit } from '@angular/core';
import { Patient } from '../model/patient';
import { Medecin } from '../model/medecin';
import { MedecinService } from '../Service/medecin.service';
import { PatientService } from '../Service/patient.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'

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
  compareFn(m1: Medecin, m2: Medecin) {
    return m1 && m2 ? m1.idMedecin === m2.idMedecin : m1 === m2;
}

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
            title: 'Patient mis à jour!',
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
