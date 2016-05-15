import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {Navigation} from '../navigation/navigation.component';
import { CodeChallenge } from '../code-challenge/code-challenge.component';

@Component({
  selector: 'my-app',
  template: `
    <navigation></navigation>
    <router-outlet></router-outlet>
  `,
  directives: [
    ROUTER_DIRECTIVES,
    CodeChallenge,
    Navigation
  ],
  providers : [
    ROUTER_PROVIDERS
  ]
})

@RouteConfig([
  {
    path: '/challenges',
    name: 'Challenges',
    component: CodeChallenge,
    useAsDefault: true
  }
])

export class AppComponent {
}
