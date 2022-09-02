import { Component, OnInit } from '@angular/core';
import { Bienfait } from 'src/app/models/bienfait';
import { BienfaitService } from 'src/app/services/bienfait.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  listeBienfait: Bienfait []=[]
  service=new Bienfait
  constructor(private services:BienfaitService) { }

  ngOnInit(): void {
    this.services.get().subscribe((data:any)=>{
      this.listeBienfait=data.data
      console.log(data.data)
    })
  }

}
