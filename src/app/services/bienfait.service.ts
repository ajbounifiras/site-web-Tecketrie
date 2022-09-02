import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bienfait } from '../models/bienfait';

@Injectable({
  providedIn: 'root'
})
export class BienfaitService {
  Url:string="http://localhost:3000/bienfait";
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
  constructor(private http:HttpClient) { }

  get(){
    return this.http.get<Bienfait[]>(`${this.Url}`,this.httpOptions)
  }
  getById(id:any){
    return this.http.get<Bienfait>(`${this.Url}/${id}`,this.httpOptions)
  }
  add(Bienfait:any){
     return this.http.post<Bienfait>(`${this.Url}`,Bienfait,this.httpOptions)
  }
  edit(Bienfait:any){
    return this.http.put<Bienfait>(`${this.Url}/${Bienfait._id}`,Bienfait,this.httpOptions)
  }
  delete(id:any){
    return this.http.delete<Bienfait>(`${this.Url}/${id}`,this.httpOptions)
  }
}
