import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Challenge } from '../../service/challenge/challenge';
import { ChallengeService } from '../../service/challenge/challenge.service';

@Component({
  selector: 'list-challenges',
  template: `
    <ul>
      <li *ngFor="let challenge of challenges | async" (click)="onSelect(challenge)">
        {{challenge.name}}
      </li>
    </ul>
  `
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
