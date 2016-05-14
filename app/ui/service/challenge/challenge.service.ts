import { Injectable } from 'angular2/core';
import { Challenge} from './challenge';

import { CHALLENGES } from './mock-challenges';

@Injectable()
export class ChallengeService {
  getChallenges() {
      return Promise.resolve(CHALLENGES);
  }
}
