import { Injectable } from 'angular2/core';
import { Challenge} from './challenge';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { CHALLENGES } from './mock-challenges';

@Injectable()
export class ChallengeService {
  challenges: FirebaseListObservable<any>;

  constructor(private af: AngularFire) {
    this.challenges = af.database.list('/challenges');
  }

  getChallenges() {
      return Promise.resolve(CHALLENGES);
  }

  listChallenges() {
    return Promise.resolve(this.challenges);
  }

  addChallenge(challenge: Challenge) {
    this.challenges.push(challenge);
  }
}
