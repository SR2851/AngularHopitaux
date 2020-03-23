import { Component, OnInit } from '@angular/core';
import { HopitalService } from '../Service/hopital.service'
import { Hopital } from '../model/hopital';

@Component({
  selector: 'app-list-hopitaux',
  templateUrl: './list-hopitaux.component.html',
  styleUrls: ['./list-hopitaux.component.css']
})
export class ListHopitauxComponent implements OnInit {
  listHopitaux: Hopital[] = [];
  newHopital: Hopital=new Hopital()
  constructor(private hopitalService: HopitalService) { }

  ngOnInit(): void {

    this.hopitalService.getAll().subscribe(
      data => {
        this.listHopitaux = data;
      }//data represente le return
    )

  }

  deleteHopital(idHopital : number){
    this.hopitalService.deleteHopital(idHopital).subscribe(
      data => {
        console.log(data)
      }
    )
  }

}
