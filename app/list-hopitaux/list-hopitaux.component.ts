import { Component, OnInit } from '@angular/core';
import { HopitalService } from '../Service/hopital.service'
import { Hopital } from '../model/hopital';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-list-hopitaux',
  templateUrl: './list-hopitaux.component.html',
  styleUrls: ['./list-hopitaux.component.css']
})
export class ListHopitauxComponent implements OnInit {
  listHopitaux: Hopital[] = [];
  newHopital: Hopital = new Hopital()
  constructor(private hopitalService: HopitalService) { }

  ngOnInit(): void {

    this.hopitalService.getAll().subscribe(
      data => {
        this.listHopitaux = data;
      }//data represente le return
    )

  }



  deleteHopital(idHopital: number, nomHopital: String) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: "Suppression d'un hôpital!",
      text: "Voulez-vous vraiment supprimer l'hôpital "+nomHopital+"?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, supprimer!',
      cancelButtonText: 'Non, annuler!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.hopitalService.deleteHopital(idHopital).subscribe(
          data => {
            swalWithBootstrapButtons.fire(
              'Supprimé!',
              "L'hopital "+nomHopital+" a été supprimé.",
              'success'
              
            ).then( () => {
              window.location.href = "http://localhost:4200/hopital"
            })
            
          }
        )
        


      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Annulé',
          "L'hopital "+nomHopital+" est sauvegardé.",
          'error'
        ).then( () => {
          window.location.href = "http://localhost:4200/hopital"
        })
        
      }
      
    })
    
  }

}
