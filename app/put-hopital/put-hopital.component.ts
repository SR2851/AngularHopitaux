import { Component, OnInit } from '@angular/core';
import { Hopital } from '../model/hopital';
import { HopitalService } from '../Service/hopital.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-put-hopital',
  templateUrl: './put-hopital.component.html',
  styleUrls: ['./put-hopital.component.css']
})
export class PutHopitalComponent implements OnInit {
newHopital: Hopital= new Hopital();
  listHopitaux: Hopital[];
  idHopitalURL : number;

  constructor(private hopitalService: HopitalService, private route: ActivatedRoute) {this.idHopitalURL = parseInt(this.route.snapshot.paramMap.get('id')); }
  
//[routerLink] permet de faire un lien direct  
  ngOnInit(): void {
   console.log(this.idHopitalURL)

   this.hopitalService.getById(this.idHopitalURL).subscribe(
     data =>{
       this.newHopital=data;
     }
   )

    this.hopitalService.getAll().subscribe(
      data => {
        this.listHopitaux = data;
      }
    )
  }
  updateHopital(idHopital : number, newhopital: Hopital) {
    this.hopitalService.updateHopital(idHopital, newhopital).subscribe(
      data => {
        this.newHopital=data;
      }
    )
  }
}
