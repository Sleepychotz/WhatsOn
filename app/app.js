import {App, Platform, Storage, LocalStorage} from 'ionic-angular';
import {TabsPage} from './pages/tabs/tabs';
import {IntroPage} from './pages/intro/intro';
import {LoginPage} from './pages/login/login';

@App({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  config: {
    //set tab at bottom
     tabbarPlacement: 'bottom'
  } // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {
  static get parameters() {
    return [[Platform]];
  }

  constructor(platform) {

    this.platform = platform;
    this.local = new Storage(LocalStorage);

    this.local.set('introShown',1);

    //intro
    this.local.get('introShown').then((result) => {
        if(result==0){
            this.rootPage = LoginPage;
            console.log('TAB', result);
        } else {
            console.log('INTRO', result);
            this.local.set('introShown', 0);

            this.rootPage = IntroPage;
        }

    });

    platform.ready().then(() => {
      // Do any necessary cordova or native calls here now that the platform is ready
    });
  }
}
