import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AboutPage } from '../about/about';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  pushPage: AboutPage;
  constructor(public navCtrl: NavController) {
    this.pushPage = AboutPage;
    
  };
}
