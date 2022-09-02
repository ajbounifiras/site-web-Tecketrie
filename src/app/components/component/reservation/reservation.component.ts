import { Component, OnInit } from '@angular/core';
import { Bienfait } from 'src/app/models/bienfait';
import { Etablissement } from 'src/app/models/etablissement';
import { Etat } from 'src/app/models/etat';
import { Reservation } from 'src/app/models/reservation';
import { Secteur } from 'src/app/models/secteur';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
listeServices: Bienfait []=[]
i=new Bienfait
listeEtablissements: Etablissement []=[]
u=new Etablissement
listeSecteurs: Secteur []=[]
s=new Secteur
listeEtat:Etat []=[]
e=new Etat
reserve=new Reservation
  constructor(private reservation:ReservationService) { }

  ngOnInit(): void {
    this.reservation.getService().subscribe((data:any)=>{
      this.listeServices=data.data
      console.log(data.data)
    })
    this.reservation.getEtablissement().subscribe((data:any)=>{
      this.listeEtablissements=data.data
      console.log(data.data)
    })
    this.reservation.getSecteur().subscribe((data:any)=>{
      this.listeSecteurs=data
      console.log(data)
    })
    this.reservation.getEtat().subscribe((data:any)=>{
      this.listeEtat=data
      console.log(data)
    })
  }
  ajouter(){
    this.reservation.add(this.reserve).subscribe(data=>{
      console.log(data)
    })
  }
}
