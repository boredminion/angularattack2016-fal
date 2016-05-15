import { Injectable } from 'angular2/core';
import { Challenge} from './challenge';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Subject } from 'rxjs/Subject';

import { CHALLENGES } from './mock-challenges';

@Injectable()
export class ChallengeService {
  challenges: FirebaseListObservable<any>;
  challenge: FirebaseListObservable<any>;
  id: Subject<any>;

  constructor(private af: AngularFire) {
    this.id = new Subject();

    this.challenges = af.database.list('/challenges');
    this.challenge = af.database.list('/challenges', {
      query: {
        orderByChild: 'id',
        equalTo: this.id
      }
    });
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

  getChallenge(id){
    this.id.next(id);
    return Promise.resolve(this.challenge);
  }
}
