import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  userName:string;
  userLastname:string;
  email:string;
  password:string;
  repPassword:string;
  phoneNumber: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register(){
    // if(this.userName.length == 0 || this.userLastname.length == 0 || this.password.length == 0 || this.repassword.length == 0 || this.email.length == 0 || this.phoneNumber.length == 0){
    //   alert("Por favor llene todos los campos");
    // }

    if (this.password != this.repPassword) {
      alert("Las contraseñas no coinciden");
    }

    this.navCtrl.push(TabsPage);
  }

}
