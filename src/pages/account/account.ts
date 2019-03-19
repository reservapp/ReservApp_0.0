import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { PaymentMethodPage } from '../payment-method/payment-method';
import { EditProfilePage } from '../edit-profile/edit-profile';
import { HelpPage } from '../help/help';

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {

  Username_:string = "John Doe";
  UserName:string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public asCtrl: ActionSheetController) {
    this.UserName = this.Username_;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }

  modifyProfile(){
    this.navCtrl.push(EditProfilePage);
  }

  goToPaymentMethods(){
    this.navCtrl.push(PaymentMethodPage);
  }

  showHelp(){
    this.navCtrl.push(HelpPage);
  }

  logOut(){
    window.location.reload();
  }
}
