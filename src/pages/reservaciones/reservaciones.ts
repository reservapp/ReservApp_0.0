import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-reservaciones',
  templateUrl: 'reservaciones.html'
})
export class ReservacionesPage {

  date:string;
  hour:string;
  userName:string;
  userLastname:string;
  email:string;
  KindOfTable:string;
  NumberOfTables:string;

  constructor(public navCtrl: NavController) {

  }

  Reserve(){
    if(this.userName == '' || this.userLastname == '' || this.email == '' || this.date == '' || this.hour == '' || this.KindOfTable == '' || this.NumberOfTables == ''){
      alert("Para poder continuar rellene todos los campos");
    }
    else{
      alert("Reservacion agendada");
    }
  }
}
