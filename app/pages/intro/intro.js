import {Page, NavController} from 'ionic-angular';
import {LoginPage} from '../login/login';

@Page({
  templateUrl: 'build/pages/intro/intro.html',
})
export class IntroPage {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
}

goToLogin(){
    this.nav.setRoot(LoginPage);
}
}
