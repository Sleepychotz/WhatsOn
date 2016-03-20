import {App, Platform, Storage, LocalStorage} from 'ionic-angular';
import {TabsPage} from './pages/tabs/tabs';
import {IntroPage} from './pages/intro/intro';


@App({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  config: {
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

    this.local.get('introShown').then((result) => {
        if(result==0){
            this.rootPage = TabsPage;
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
