import { Component, OnInit } from '@angular/core';
import { MedecinService } from '../Service/medecin.service';
import { Medecin } from '../model/medecin';

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
  deleteMedecin(idMedecin : number){
    this.medecinService.deleteMedecin(idMedecin).subscribe(
      data => {
        console.log(data)
      }
    )
  }
}
