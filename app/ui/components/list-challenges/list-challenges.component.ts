import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import {MATERIAL_DIRECTIVES} from "ng2-material/all";

import { Challenge } from '../../service/challenge/challenge';
import { ChallengeService } from '../../service/challenge/challenge.service';

@Component({
  selector: 'list-challenges',
  template: `
  <md-card *ngFor="let challenge of challenges | async">
    <md-card-title>
      <md-card-title-text>
        <span class="md-headline">{{challenge.name}}</span>
      </md-card-title-text>
    </md-card-title>
    <md-card-actions layout="row" layout-align="end">
      <button md-button (click)="onSelect(challenge)">Start</button>
    </md-card-actions>
    <md-card-content>
      <p>
        {{challenge.description}}
      </p>
    </md-card-content>
  </md-card>
  `,
  directives: [
    MATERIAL_DIRECTIVES
  ]
})

export class ListChallengesComponent implements OnInit {
  challenges : Challenge[];
  selectedChallenge: Challenge;

  constructor(private router: Router, private challengeService: ChallengeService) {}

  listChallenges(){
    this.challengeService.listChallenges().then(challenges => this.challenges = challenges);
  }

  ngOnInit(){
    this.listChallenges();
  }

  onSelect(challenge: Challenge) {
    let link = ['Challenge', { id: challenge.id }];
    this.router.navigate(link);
  }
}
