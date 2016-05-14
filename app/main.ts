import {bootstrap}  from 'angular2/platform/browser';
import {AppComponent} from './ui/components/app/app.component';
import {MATERIAL_PROVIDERS} from 'ng2-material/all';
import {enableProdMode} from 'angular2/core';

enableProdMode();

bootstrap(AppComponent, [MATERIAL_PROVIDERS]);
