import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import {Navigation} from '../navigation/navigation.component';

import { ChallengeService } from '../../service/challenge/challenge.service';
import { CodeService } from '../../service/code-service/code.service';

import { CodeChallenge } from '../code-challenge/code-challenge.component';
import { ShowChallengeComponent } from '../show-challenge/show-challenge.component';
import { CreateChallengeComponent } from '../create-challenge/create-challenge.component';

@Component({
  selector: 'my-app',
  template: `
    <navigation></navigation>
    <router-outlet></router-outlet>
  `,
  directives: [
    ROUTER_DIRECTIVES,
    Navigation,
    CodeChallenge,
    ShowChallengeComponent,
    CreateChallengeComponent
  ],
  providers : [
    ROUTER_PROVIDERS,
    ChallengeService,
    CodeService
  ]
})

@RouteConfig([
  {
    path: '/challenges',
    name: 'Challenges',
    component: CodeChallenge,
    useAsDefault: true
  },
  {
    path: '/challenges/:id',
    name: 'Challenge',
    component: ShowChallengeComponent
  },
  {
    path: '/challenge/add',
    name: 'ChallengeAdd',
    component: CreateChallengeComponent
  }
])

export class AppComponent {
}
