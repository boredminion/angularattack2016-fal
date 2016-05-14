import { Component, Input } from "angular2/core";
import { Challenge } from "../../service/challenge/challenge";

@Component({
  selector: 'show-challenge',
  template: `
    <div *ngIf="challenge">
      <h3>{{challenge.name}}</h3>
      <p>{{challenge.description}}</p>
    </div>
  `
})

export class ShowChallengeComponent {
  @Input() challenge = Challenge;
}
