import {Component} from 'angular2/core';
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';
import { ROUTER_DIRECTIVES } from 'angular2/router';

import {HomeTitleComponent} from '../home-title/home-title.component';
import { ListChallengesComponent } from '../list-challenges/list-challenges.component';

@Component({
    selector: 'code-challenge',
    template: `
      <div class="md-padding" layout="column" layout-wrap layout-fill>
        <list-challenges flex></list-challenges>
        <br>
        <div flex layout="row" layout-align="center center">
          <a md-button class="md-primary" [routerLink]="['ChallengeAdd']" style="padding-right:5px;">Creat Challenge</a>
        </div>
      </div>
    `,
    directives: [
      MATERIAL_DIRECTIVES,
      ROUTER_DIRECTIVES,
      HomeTitleComponent,
      ListChallengesComponent
    ]
})

export class CodeChallenge { }
