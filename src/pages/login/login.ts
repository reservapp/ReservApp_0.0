import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { TabsPage } from '../tabs/tabs';
import { DatabaseProvider } from '../../providers/database/database';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email = '';
  userPassword = '';


  constructor(public navCtrl: NavController, public navParams: NavParams, private databaseprovider: DatabaseProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    if(this.email != null && this.userPassword != null)
      {
        this.databaseprovider.validateUser(this.email, this.userPassword).then(d => {
          console.log(d);
          if (d == true)
          {

            this.navCtrl.setRoot(TabsPage);
          }
          else {
            alert(d);
          }
        });
      }
      else
      {
        alert("Completar los campos");
      }
  }

  goRegister(){
    this.navCtrl.push(RegisterPage);
  }

}
