import { Component } from '@angular/core';

import { Tab3Page } from './../tab3/tab3';
import { Tab2Page } from './../tab2/tab2';
import { Tab1Page } from './../tab1/tab1';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1Page = Tab1Page;
  tab2Page = Tab2Page;
  tab3Page = Tab3Page;

  constructor() {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
