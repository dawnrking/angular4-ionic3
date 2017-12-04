import { Component } from '@angular/core';
// import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { IonicPage,ModalController,AlertController,LoadingController } from 'ionic-angular';
import { TabsPage } from "../tabs/tabs";
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  mushrooms: false;

  // constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController,public modalCtrl: ModalController) {
  // }

  constructor(public alertCtrl: AlertController,public modalCtrl: ModalController,public loadingCtrl:LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  logIn(username: HTMLInputElement, password: HTMLInputElement) {
    if (username.value.length == 0) {
      const alert = this.alertCtrl.create({
            title: '请输入账号',
            buttons: ['确认']
          });
      alert.present();
    } else if (password.value.length == 0) {
      const alert = this.alertCtrl.create({
            title: '请输入密码',
            buttons: ['确认']
            });
        alert.present();
      } else {
        const loading = this.loadingCtrl.create({
          content: 'Please wait...'
          });

          loading.present();

          setTimeout(() => {
            let model = this.modalCtrl.create(TabsPage)
            model.present()
            loading.dismiss();
          }, 5000);

      // let userinfo: string = '用户名：' + username.value + '密码：' + password.value;
      // this.navCtrl.push(TabsPage);
    }
  }


}
