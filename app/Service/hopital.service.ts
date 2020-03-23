import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Hopital } from '../model/hopital';

@Injectable({
  providedIn: 'root'
})
export class HopitalService {

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<Hopital[]>('http://localhost:8080/hopital/all').pipe()
  }
  addHopital(hopital : Hopital){
    return this.http.post<Hopital>('http://localhost:8080/hopital/create',hopital).pipe()
    //envoie moi la requette post sur postmann avec hopital comme corps de reuette
  }
  deleteHopital(idHopital : number){
    return this.http.delete<Hopital>('http://localhost:8080/hopital/delete/'+idHopital).pipe()
  }
  updateHopital(idHopital : number, hopital: Hopital){
    return this.http.put<Hopital>('http://localhost:8080/hopital/update/'+idHopital, hopital).pipe()
  }
  getById(idHopital: number){
return this.http.get<Hopital>('http://localhost:8080/hopital/findById/'+idHopital).pipe()
  }
  
}
