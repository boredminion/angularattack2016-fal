import {Component} from 'angular2/core';
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';
import {Navigation} from '../navigation/navigation.component';

@Component({
    selector: 'my-app',
    template: `
      <navigation></navigation>
      <md-content>
        <h1>
          AngularAttack 2016
        </h1>
        <p>Your project runs!!!</p>
      </md-content>
    `,
    directives: [MATERIAL_DIRECTIVES, Navigation]
})

export class AppComponent { }
