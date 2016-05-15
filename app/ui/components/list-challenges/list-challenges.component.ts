import { Component, OnInit } from 'angular2/core';
import { Challenge } from '../../service/challenge/challenge';
import { ShowChallengeComponent } from '../show-challenge/show-challenge.component';
import { ChallengeService } from '../../service/challenge/challenge.service';

@Component({
  selector: 'list-challenges',
  template: `
    <ul>
      <li *ngFor="let challenge of challenges | async" (click)="onSelect(challenge)">
        {{challenge.name}}
      </li>
    </ul>
    <show-challenge [challenge]="selectedChallenge"></show-challenge>
  `,
  directives : [ ShowChallengeComponent ],
  providers : [ ChallengeService ]
})

export class ListChallengesComponent implements OnInit {
  challenges : Challenge[];
  selectedChallenge: Challenge;

  constructor(private challengeService: ChallengeService) {}

  getChallenges(){
    this.challengeService.listChallenges().then(challenges => this.challenges = challenges);
  }

  ngOnInit(){
    this.getChallenges();
  }

  onSelect(challenge: Challenge) {
    this.selectedChallenge = challenge;
  }
}
