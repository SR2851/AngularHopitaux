import { Component, OnInit } from '@angular/core';
import { Patient } from '../model/patient';
import { PatientService } from '../Service/patient.service';
import Swal from 'sweetalert2'
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
  deletePatient(idPatient : number , prenomPatient : String , nomPatient : String){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: "Suppression d'un médecin!",
      text: "Voulez-vous vraiment supprimer le patient "+prenomPatient+" "+nomPatient+"?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, supprimer!',
      cancelButtonText: 'Non, annuler!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.patientService.deletePatient(idPatient).subscribe(
          data => {
            swalWithBootstrapButtons.fire(
              'Supprimé!',
              "Le patient "+prenomPatient+" "+nomPatient+" a été supprimé.",
              'success'
              
            ).then( () => {
              window.location.href = "http://localhost:4200/patient"
            })
            
          }
        )
        


      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Annulé!',
          "Le patient "+prenomPatient+" "+nomPatient+" a été sauvegardé.",
          'error'
        ).then( () => {
          window.location.href = "http://localhost:4200/patient"
        })
        
      }
      
    })
  }
}
