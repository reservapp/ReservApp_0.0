import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';

/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {

  Username_:string = "John Doe";
  UserName:string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.UserName = this.Username_;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }

  modifyProfile(){

  }

  logOut(){
    this.navCtrl.popAll();
    this.navCtrl.setRoot(LoginPage);
    this.navCtrl.push(LoginPage);
  }
}
