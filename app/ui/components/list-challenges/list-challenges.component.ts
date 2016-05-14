import { Component } from 'angular2/core';
import { Challenge } from '../../service/challenge/challenge';
import { ShowChallengeComponent } from '../show-challenge/show-challenge.component';

//Temp
import { CHALLENGES } from '../../service/challenge/mock-challenges';

@Component({
  selector: 'list-challenges',
  template: `
    <ul>
      <li *ngFor="let challenge of challenges" (click)="onSelect(challenge)">
        {{challenge.name}}
      </li>
    </ul>
    <show-challenge [challenge]="selectedChallenge"></show-challenge>
  `,
  directives : [ ShowChallengeComponent ]
})

export class ListChallengesComponent {
  challenges = CHALLENGES;
  selectedChallenge: Challenge;

  onSelect(challenge: Challenge) {
    this.selectedChallenge = challenge;
  }
}
