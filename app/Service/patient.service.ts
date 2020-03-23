import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patient } from '../model/patient';


@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<Patient[]>('http://localhost:8080/patient/all').pipe()
  }
  addPatient(patient : Patient){
    return this.http.post<Patient>('http://localhost:8080/patient/create',patient).pipe()
    //envoie moi la requette post sur postmann avec Patient comme corps de requette
  }
  deletePatient(idPatient : number){
    return this.http.delete<Patient>('http://localhost:8080/patient/delete/'+idPatient).pipe()
  }
  updatePatient(idPatient : number, patient: Patient){
    return this.http.put<Patient>('http://localhost:8080/patient/update/'+idPatient, patient).pipe()
  }
  getById(idPatient: number){
    return this.http.get<Patient>('http://localhost:8080/patient/findById/'+idPatient).pipe()
      }
}
