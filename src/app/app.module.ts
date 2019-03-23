import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ReservacionesPage } from '../pages/reservaciones/reservaciones';
import { OffersPage } from '../pages/offers/offers';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AccountPage } from '../pages/account/account';
import { PaymentMethodPage } from '../pages/payment-method/payment-method';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';
import { HelpPage } from '../pages/help/help';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CalendarModule } from 'ionic3-calendar-en';
import { DatabaseProvider } from '../providers/database/database';


import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';

import { SQLitePorter } from '@ionic-native/sqlite-porter';
import { SQLite } from '@ionic-native/sqlite';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
    ReservacionesPage,
    OffersPage,
    HomePage,
    TabsPage,
    AccountPage,
    PaymentMethodPage,
    EditProfilePage,
    HelpPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),
    CalendarModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,
    ReservacionesPage,
    OffersPage,
    HomePage,
    TabsPage,
    AccountPage,
    PaymentMethodPage,
    EditProfilePage,
    HelpPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatabaseProvider,
    SQLitePorter,
    SQLite
  ]
})
export class AppModule {}
