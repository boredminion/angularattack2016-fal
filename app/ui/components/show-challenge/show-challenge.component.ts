import { Component, OnInit } from "angular2/core";
import { RouteParams } from 'angular2/router';

import { Challenge } from "../../service/challenge/challenge";
import { ChallengeService } from '../../service/challenge/challenge.service';

import { CodeEditorComponent } from '../code-editor/code-editor.component';

@Component({
  selector: 'show-challenge',
  template: `
    <code-editor></code-editor>
    <div *ngIf="challenge">
      <h3>{{challenge.name}}</h3>
      <p>{{challenge.description}}</p>
    </div>
    <button (click)="goBack()">Back</button>
  `,
  directives : [
    CodeEditorComponent
  ]
})

export class ShowChallengeComponent implements OnInit {
  challenge: Challenge;

  constructor(private routeParams: RouteParams, private challengeService: ChallengeService) {}

  ngOnInit(){
    let id = +this.routeParams.get('id');
    this.challengeService.getChallenge(id).then(challenge => this.challenge = challenge);
  }

  goBack() {
     window.history.back();
   }
}
