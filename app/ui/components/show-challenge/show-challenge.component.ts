import { Component, OnInit } from "angular2/core";
import { RouteParams } from 'angular2/router';

import { Challenge } from "../../service/challenge/challenge";
import { ChallengeService } from '../../service/challenge/challenge.service';

import { CodeEditorComponent } from '../code-editor/code-editor.component';

@Component({
  selector: 'show-challenge',
  template: `
  <div class="md-padding" layout="column" layout-wrap layout-fill>
    <code-editor></code-editor>
    <div flex layout="row" layout-align="center center">
      <button md-raised-button class="md-raised md-primary" (click)="goBack()">Back</button>
    <div>
  </div>
  `,
  directives : [
    CodeEditorComponent
  ]
})

export class ShowChallengeComponent implements OnInit {
  challenge: Challenge;
  name: string;
  description: string;

  constructor(private routeParams: RouteParams, private challengeService: ChallengeService) {
    this.name = '';
    this.description = '';
  }

  ngOnInit(){
    let id = +this.routeParams.get('id');
    this.challengeService.getChallenge(id).then(challenge => {
      this.challenge = challenge;
    });
  }

  goBack() {
     window.history.back();
   }
}

// <h3>{{challenge.name}}</h3>
// <p>{{challenge.description}}</p>
