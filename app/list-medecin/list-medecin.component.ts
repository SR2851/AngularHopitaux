import { Component, OnInit } from '@angular/core';
import { MedecinService } from '../Service/medecin.service';
import { Medecin } from '../model/medecin';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-list-medecin',
  templateUrl: './list-medecin.component.html',
  styleUrls: ['./list-medecin.component.css']
})
export class ListMedecinComponent implements OnInit {
  listMedecins: Medecin[]=[];
  constructor(private medecinService: MedecinService) { }

  ngOnInit(): void {

    this.medecinService.getAll().subscribe(
      data => {
        this.listMedecins = data;
      }
    )
  }
  deleteMedecin(idMedecin : number, specialite : String, prenomMedecin : String , nomMedecin : String  ){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: "Suppression d'un médecin!",
      text: "Voulez-vous vraiment supprimer le "+specialite+" "+prenomMedecin+" "+nomMedecin+"?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, supprimer!',
      cancelButtonText: 'Non, annuler!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.medecinService.deleteMedecin(idMedecin).subscribe(
          data => {
            swalWithBootstrapButtons.fire(
              'Supprimé!',
              "Le "+specialite+" "+prenomMedecin+" "+nomMedecin+" a été supprimé.",
              'success'
              
            ).then( () => {
              window.location.href = "http://localhost:4200/medecin"
            })
            
          }
        )
        


      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Annulé',
          "Le "+specialite+" "+prenomMedecin+" "+nomMedecin+" est sauvegardé.",
          'error'
        ).then( () => {
          window.location.href = "http://localhost:4200/medecin"
        })
        
      }
      
    })
  }
}
