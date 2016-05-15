import { Injectable } from 'angular2/core';
import { Code } from './code';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';


@Injectable()
export class CodeService {
  code: FirebaseObjectObservable<any>;

  constructor(private af: AngularFire) {
    this.code = af.database.object('/myCode');
  }

  getCode() {
      return this.code;
  }

  saveCode(code: Code) {
    this.code.set(code);
  }

  updateCode(code: Code) {
    this.code.update(code);
  }

  deleteCode() {
    this.code.remove();
  }
}
