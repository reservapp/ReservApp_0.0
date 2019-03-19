import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  username:string;
  password:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    console.log("Usuario: " +this.username);
    console.log("Contraseña: " +this.password);
    this.navCtrl.setRoot(TabsPage);
    this.navCtrl.push(TabsPage);
  }

  goRegister(){
    this.navCtrl.push(RegisterPage);
  }

}
