import { Bienfait } from "./bienfait";
import { Etablissement } from "./etablissement";
import { Secteur } from "./secteur";
import { Etat } from "./etat";
export class Reservation {
    _id!:String;
    name!:String;
    phone!:Number;
    Date!:String;
    person!:String;
    bienfait=new Bienfait;
    etablissement=new Etablissement;
    secteur=new Secteur;
    etat=new Etat;
}
