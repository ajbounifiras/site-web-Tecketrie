import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bienfait } from '../models/bienfait';
import { Etat } from '../models/etat';
import { Reservation } from '../models/reservation';
import { Secteur } from '../models/secteur';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  Url:string="http://localhost:3000/reservation";
  Url1:string="http://localhost:3000/bienfait";
  Url2:string="http://localhost:3000/etablissement";
  Url3:string="http://localhost:3000/secteur";
  Url4:string="http://localhost:3000/etat";
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
  constructor(private http:HttpClient) { }

  get(){
    return this.http.get<Reservation[]>(`${this.Url}`,this.httpOptions)
  }
  getById(id:any){
    return this.http.get<Reservation>(`${this.Url}/${id}`,this.httpOptions)
  }
  add(Reservation:any){
     return this.http.post<Reservation>(`${this.Url}`,Reservation,this.httpOptions)
  }
  edit(Reservation:any){
    return this.http.put<Reservation>(`${this.Url}/${Reservation._id}`,Reservation,this.httpOptions)
  }
  delete(id:any){
    return this.http.delete<Reservation>(`${this.Url}/${id}`,this.httpOptions)
  }
  getService(){
    return this.http.get<Bienfait[]>(`${this.Url1}`,this.httpOptions)
  }
  getEtablissement(){
    return this.http.get<any[]>(`${this.Url2}`,this.httpOptions)
  }
  getSecteur(){
    return this.http.get<Secteur[]>(`${this.Url3}`,this.httpOptions)
  }
  getEtat(){
    return this.http.get<any[]>(`${this.Url4}`,this.httpOptions)
  }
}
