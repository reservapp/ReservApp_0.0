import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { DatabaseProvider } from '../../providers/database/database';


@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  userName: string;
  userLastname: string;
  email: string;
  userPassword: string;
  userRePassword: string;
  phone: string;
  user = {};
  users = [];

  constructor(public navCtrl: NavController, private databaseprovider: DatabaseProvider, private platform: Platform) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register(){

    if(this.userName === '' || this.userLastname === '' || this.phone === '' || this.userPassword === '' || this.userRePassword === '' || this.email === '')
    {
      alert("Para continuar complete todos los campos");
    }
    else
    {
      if(this.userPassword != this.userRePassword)
      {
        alert("las contraseñas deben ser iguales");
      }
      else
      {

        this.databaseprovider.getUser(this.email, this.userName).then(d => {
          console.log(d);
          if (d.rows.length <= 0)
          {
            this.databaseprovider.addUser(this.userName, this.userLastname,this.email,this.userPassword,this.phone).then(d => {
              alert('Se ha registrado correctamente!')
            });
            this.navCtrl.popToRoot();
          }
          else {
            alert("Ese usuario o email ya esta registrado")
          }
        });

      }
    }
  }


}
