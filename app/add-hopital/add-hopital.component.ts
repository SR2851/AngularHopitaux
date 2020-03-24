import { Component, OnInit } from '@angular/core';
import { Hopital } from '../model/hopital';
import { HopitalService } from '../Service/hopital.service';
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'



@Component({
  selector: 'app-add-hopital',
  templateUrl: './add-hopital.component.html',
  styleUrls: ['./add-hopital.component.css']
})
export class AddHopitalComponent implements OnInit {
  newHopital: Hopital = new Hopital();
  constructor(private hopitalService: HopitalService) { }


  ngOnInit(): void {
    //ce qui se fait dès l'affichage de la page

  }
  addHopital() {
    this.hopitalService.addHopital(this.newHopital).subscribe(
      data => {
        if (data['idHopital'] == 0){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            
          })
        }
        
        
        else if(data['idHopital']){
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Hopital ajouté!',
            showConfirmButton: true,
            timer: 1500
          }).then( () => {
            window.location.href = "http://localhost:4200/hopital"
          })
        }
      }
    )
  }
}
