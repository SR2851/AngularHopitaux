import { Component, OnInit } from '@angular/core';
import { Hopital } from '../model/hopital';
import { HopitalService } from '../Service/hopital.service';

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
        console.log(data)
      }
    )
  }
}
