import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ReservacionesPage } from '../reservaciones/reservaciones';

@Component({
  selector: 'page-offers',
  templateUrl: 'offers.html'
})
export class OffersPage {

  constructor(public navCtrl: NavController) {

  }

  goToReservationPage(){
    this.navCtrl.push(ReservacionesPage);
  }
}
