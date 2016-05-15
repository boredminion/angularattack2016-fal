import { Component, OnInit } from "angular2/core";
import { Challenge } from "../../service/challenge/challenge";
import { RouteParams } from 'angular2/router';
import { ChallengeService } from '../../service/challenge/challenge.service';

@Component({
  selector: 'show-challenge',
  template: `
    <div *ngIf="challenge">
      <h3>{{challenge.name}}</h3>
      <p>{{challenge.description}}</p>
    </div>
    <button (click)="goBack()">Back</button>
  `
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
