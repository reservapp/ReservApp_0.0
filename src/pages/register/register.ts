import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Alert } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  username:string;
  email:string;
  password:string;
  repassword:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register(){
    if(this.username.length <= 0 || this.password.length <= 0 || this.repassword.length <= 0 || this.email.length <= 0){
      alert("Por favor llene todos los campos");
    }

    if (this.password != this.repassword) {
      alert("Las contraseñas no coinciden");
    }

  }

}
