import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user=new User
  constructor(private service:UserService,private route:Router) { }

  ngOnInit(): void {
  }
  login(){
    console.log(this.user)
    this.service.login(this.user).subscribe(async (data)=>{
      console.log(data);
      if(data.token!=null){
  
      await localStorage.setItem("userData",JSON.stringify(data));
      await localStorage.setItem("userName",data.userName);
      await localStorage.setItem("token",data.token);
    
        this.route.navigateByUrl("/")
      
      }
      },erreur=>{console.log(erreur)}) 
  }
}
