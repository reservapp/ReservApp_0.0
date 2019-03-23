import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { DatabaseProvider } from '../../providers/database/database';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {};
  users = [];

  constructor(public navCtrl: NavController, private databaseprovider: DatabaseProvider, private platform: Platform) {
  
    this.databaseprovider.getDatabaseState().subscribe(rdy => {
      if (rdy) {
        this.loadUserData();
      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register(){


  }


  addUser() {
    this.databaseprovider.addUser(this.user['userName'], this.user['userLastname'], this.user['email'], this.user['userPasword'], this.user['phone'])
    .then(data => {
      this.loadUserData();
    });
    this.user = {};
  }

  loadUserData() {
    this.databaseprovider.getAllUsers().then(data => {
      this.users = data;
    })
  }


}
