import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Medecin } from '../model/medecin';

@Injectable({
  providedIn: 'root'
})
export class MedecinService {

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<Medecin[]>('http://localhost:8080/medecin/all').pipe()
  }
  addMedecin(medecin : Medecin){
    return this.http.post<Medecin>('http://localhost:8080/medecin/create',medecin).pipe()
    //envoie moi la requette post sur postmann avec Medecin comme corps de reuette
  }
  deleteMedecin(idMedecin : number){
    return this.http.delete<Medecin>('http://localhost:8080/medecin/delete/'+idMedecin).pipe()
  }
  updateMedecin(idMedecin : number, medecin: Medecin){
    return this.http.put<Medecin>('http://localhost:8080/medecin/update/'+idMedecin, medecin).pipe()
  }
  getById(idMedecin: number){
    return this.http.get<Medecin>('http://localhost:8080/medecin/findById/'+idMedecin).pipe()
      }
}
