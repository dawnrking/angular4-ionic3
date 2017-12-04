import { Component } from '@angular/core';

// import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { SettingPage } from '../setting/setting';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tabRoots: Object[];
  // tab1Root = HomePage;
  // tab2Root = AboutPage;
  // tab3Root = ContactPage;

  constructor() {
    this.tabRoots = [
      {
        root: HomePage,
        tabTitle: 'Home',
        tabIcon: 'home'
      },
      {
        root: ContactPage,
        tabTitle: 'Contact',
        tabIcon: 'notifications'
      },
      // {
      //   root: AboutPage,
      //   tabTitle: 'About',
      //   tabIcon: 'document'
      // },
      {
        root: SettingPage,
        tabTitle: 'Setting',
        tabIcon: 'person'
      }
    ];
  }
}
