import {Component} from 'angular2/core';
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';
import { ROUTER_DIRECTIVES } from 'angular2/router';

import {HomeTitleComponent} from '../home-title/home-title.component';
import { ListChallengesComponent } from '../list-challenges/list-challenges.component';

@Component({
    selector: 'code-challenge',
    template: `
      <md-content>
        <home-title></home-title>
        <list-challenges></list-challenges>
        <a type="button" [routerLink]="['ChallengeAdd']" style="padding-right:5px;">Creat Challenge</a>
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
