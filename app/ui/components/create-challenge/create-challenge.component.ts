import { Component } from 'angular2/core';
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';
import {FORM_DIRECTIVES} from "angular2/common";
import { Router } from 'angular2/router';

import { Challenge } from '../../service/challenge/challenge';
import { ChallengeService } from '../../service/challenge/challenge.service';

@Component({
  selector: 'create-challenge',
  template: `
  <md-content class="md-padding" layout="column" layout-wrap layout-fill>
    <div layout="column" class="md-inline-form">
      <md-toolbar class="md-padding" layout="row" layout-align="start end">
        <h2 class="md-headline">Create new challenge</h2>
      </md-toolbar>
      <md-content layout-padding>
        <div>
          <form name="challengeForm">
            <div layout-gt-sm="row">
              <md-input-container class="md-block" flex-gt-sm>
                <label>Name</label>
                <input md-input #newitem>
              </md-input-container>
            </div>
            <md-input-container class="md-block">
              <label>Description</label>
              <textarea md-input #newdescription columns="2" md-maxlength="150" rows="5"></textarea>
            </md-input-container>
            <button md-raised-button class="md-raised md-primary" (click)="add(newitem.value, newdescription.value)">Add</button>
          </form>
        </div>
      </md-content>
    </div>
  </md-content>
  `,
  directives : [
    MATERIAL_DIRECTIVES,
    FORM_DIRECTIVES
  ],
  providers : [
    ChallengeService
  ]
})

export class CreateChallengeComponent {
  challenge: Challenge;

  constructor(private router: Router, private challengeService: ChallengeService) { }

  add(newName: string, newDescription: string) {
    this.challengeService.addChallenge({ id: Date.now(), name: newName, description: newDescription });
    let link = ['Challenges', {}];
    this.router.navigate(link);
  }
}
