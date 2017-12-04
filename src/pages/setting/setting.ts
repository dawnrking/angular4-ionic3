import { Component } from '@angular/core';
// import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IonicPage, ModalController } from 'ionic-angular';

import { LoginPage } from "../login/login";
/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})

// class myPage {
//   pushPage: any;
//   params: Object;
//   constructor() {
//     this.pushPage = LoginPage;
//     this.params = {id:42};
//   }
// }
export class SettingPage {
  // showData: {
  //   username: '',
  //   account: '',
  //   userIcon: '',
  // };
  // pushPage: LoginPage;
  // show:true;
  constructor(public modalCtrl: ModalController ) {
    // this.pushPage = LoginPage;
    // this.showData = {
    //   username: 'dawnrking',
    //   account: 'zetter110',
    //   userIcon: './assets/icon/user.jpg',
    // }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }

  logOut() {
    let modal = this.modalCtrl.create(LoginPage);
    modal.present()
  };
  showItem() {
    // this.show = !this.show;
  }
}
