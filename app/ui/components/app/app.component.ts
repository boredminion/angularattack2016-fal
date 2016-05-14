import {Component} from 'angular2/core';
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';
import {Navigation} from '../navigation/navigation.component';
import {HomeTitleComponent} from '../home-title/home-title.component';

@Component({
    selector: 'my-app',
    template: `
      <navigation></navigation>
      <md-content>
        <home-title></home-title>
      </md-content>
    `,
    directives: [MATERIAL_DIRECTIVES, Navigation, HomeTitleComponent]
})

export class AppComponent { }
