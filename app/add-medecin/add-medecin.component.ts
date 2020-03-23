import { Component, OnInit } from '@angular/core';
import { Medecin } from '../model/medecin';
import { MedecinService } from '../Service/medecin.service';
import { Hopital } from '../model/hopital';
import { HopitalService } from '../Service/hopital.service';

@Component({
  selector: 'app-add-medecin',
  templateUrl: './add-medecin.component.html',
  styleUrls: ['./add-medecin.component.css']
})
export class AddMedecinComponent implements OnInit {
 newMedecin: Medecin = new Medecin();
 listHopitaux : Hopital[] = []
  constructor(private medecinService: MedecinService, private hopitalService: HopitalService) { }

  ngOnInit(): void {
    this.hopitalService.getAll().subscribe(
      data => {
        this.listHopitaux = data;
      }
    )
  }
  addMedecin() {
    this.medecinService.addMedecin(this.newMedecin).subscribe(
      data => {
        console.log(data)
      }
    )
  }
}
