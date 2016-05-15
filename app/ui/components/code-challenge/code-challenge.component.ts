import {Component} from 'angular2/core';
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';
import { ROUTER_DIRECTIVES } from 'angular2/router';

import {HomeTitleComponent} from '../home-title/home-title.component';
import { ListChallengesComponent } from '../list-challenges/list-challenges.component';

@Component({
    selector: 'code-challenge',
    template: `
      <md-content class="md-padding" layout="column" layout-wrap layout-fill>
        <home-title></home-title>
        <list-challenges></list-challenges>
        <div layout="row" layout-align="center center">
          <a md-button class="md-primary" [routerLink]="['ChallengeAdd']" style="padding-right:5px;">Creat Challenge</a>
        </div>
      </md-content>
    `,
    directives: [
      MATERIAL_DIRECTIVES,
      ROUTER_DIRECTIVES,
      HomeTitleComponent,
      ListChallengesComponent
    ]
})

export class CodeChallenge { }
