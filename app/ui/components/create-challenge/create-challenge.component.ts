import { Component } from 'angular2/core';
import { Challenge } from '../../service/challenge/challenge';
import { ChallengeService } from '../../service/challenge/challenge.service';

@Component({
  selector: 'create-challenge',
  template: `
  <h2>Create new challenge</h2>
  <input type="text" #newitem />
  <textarea type="text" #newdescription></textarea>
  <button (click)="add(newitem.value, newdescription.value)">Add</button>
  `,
  providers : [ ChallengeService ]
})

export class CreateChallengeComponent {
  challenge: Challenge;

  constructor(private challengeService: ChallengeService) { }

  add(newName: string, newDescription: string) {
    this.challengeService.addChallenge({ id: Date.now(), name: newName, description: newDescription });
  }
}
