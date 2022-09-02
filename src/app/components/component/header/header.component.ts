import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user:any
  LoginModal=false
  show:boolean=false;
  dark:boolean=true
  constructor(private route:Router) { }

  ngOnInit(): void {
    this.show=false
    this.user=localStorage.getItem('userData')
  }
  async logout(){
    await localStorage.removeItem('token');
    await localStorage.removeItem("userData");
    await localStorage.removeItem("userName");
    this.user=null
    this.route.navigateByUrl("/")
  }
 showLoginModal(){
this.LoginModal= ! this.LoginModal
 }
}
