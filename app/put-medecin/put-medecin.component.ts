import { Component, OnInit } from '@angular/core';
import { Medecin } from '../model/medecin';
import { MedecinService } from '../Service/medecin.service';
import { Hopital } from '../model/hopital';
import { HopitalService } from '../Service/hopital.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-put-medecin',
  templateUrl: './put-medecin.component.html',
  styleUrls: ['./put-medecin.component.css']
})
export class PutMedecinComponent implements OnInit {
  newMedecin: Medecin = new Medecin();
  listMedecins: Medecin[];
  listHopitaux: Hopital[];
  idMedecinURL : number;

  constructor(private medecinService: MedecinService, private hopitalService: HopitalService, private route: ActivatedRoute) {this.idMedecinURL = parseInt(this.route.snapshot.paramMap.get('id')); }
  

  ngOnInit(): void {
    console.log(this.idMedecinURL)

    this.medecinService.getById(this.idMedecinURL).subscribe(
      data =>{
        this.newMedecin=data;
      }
    )

    this.hopitalService.getAll().subscribe(
      data => {
        this.listHopitaux = data;
      }
    )
    this.medecinService.getAll().subscribe(
      data => {
        this.listMedecins = data;
      }
    )
  }
  updateMedecin(idMedecin: number, newMedecin: Medecin) {
    this.medecinService.updateMedecin(idMedecin, newMedecin).subscribe(
      data => {
        console.log(data)
      }
    )
  }
}
