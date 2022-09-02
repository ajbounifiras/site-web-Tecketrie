import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  Url:string="http://localhost:3000/user/";
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
  constructor(private http:HttpClient) { }

  register(User:any){
    return this.http.post<User>(this.Url,User,this.httpOptions);
  }
  login(User:any){
    return this.http.post<any>(this.Url+'login',User,this.httpOptions);
  }
}
