import { Component } from '@angular/core';

import { ReservacionesPage } from '../reservaciones/reservaciones';
import { OffersPage } from '../offers/offers';
import { HomePage } from '../home/home';
import { AccountPage } from '../account/account';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ReservacionesPage;
  tab3Root = OffersPage;
  tab4Root = AccountPage;

  constructor() {

  }
}
