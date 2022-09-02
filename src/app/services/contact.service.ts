import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  Url:string="http://localhost:3000/contact";
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
  constructor(private http:HttpClient) { }

  get(){
    return this.http.get<Contact[]>(`${this.Url}`,this.httpOptions)
  }
  getById(id:any){
    return this.http.get<Contact>(`${this.Url}/${id}`,this.httpOptions)
  }
  add(Contact:any){
     return this.http.post<Contact>(`${this.Url}`,Contact,this.httpOptions)
  }
  edit(Contact:any){
    return this.http.put<Contact>(`${this.Url}/${Contact._id}`,Contact,this.httpOptions)
  }
  delete(id:any){
    return this.http.delete(`${this.Url}/${id}`,this.httpOptions)
  }
}
