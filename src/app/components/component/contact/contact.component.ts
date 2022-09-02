import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  user:any
  LoginModal=false
  show:boolean=false
  contact=new Contact
  constructor(private contacts:ContactService,private route:Router) { }

  ngOnInit(): void {
    this.show=false
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
 add(){
  this. contacts.add(this.contact).subscribe(data=>{
    console.log(data)
  })
 }
}
