import {bootstrap}  from 'angular2/platform/browser';
import {AppComponent} from './ui/components/app/app.component';
import {MATERIAL_PROVIDERS} from 'ng2-material/all';
import {enableProdMode} from 'angular2/core';
// import {ROUTER_PROVIDERS} from 'angular2/router';
import {FIREBASE_PROVIDERS, defaultFirebase, AngularFire} from 'angularfire2';

enableProdMode();

bootstrap(AppComponent, [
  MATERIAL_PROVIDERS,
  FIREBASE_PROVIDERS,
  defaultFirebase('https://crackling-heat-9094.firebaseio.com/')
  // ROUTER_PROVIDERS
]);
