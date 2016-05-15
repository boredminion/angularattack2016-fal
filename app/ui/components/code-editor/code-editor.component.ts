import { Component, OnInit, Input } from "angular2/core";
import { Control, FormBuilder, Validators, ControlGroup } from 'angular2/common';
import { Code } from "../../service/code-service/code";
import { CodeService } from '../../service/code-service/code.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'code-editor',
  template: `
  <p class="md-title">{{ message$ | async }}</p>
  <p class="md-subhead">Code</p>
  <textarea type="text" [ngFormControl]="code" style="width:75%;height:125px;"></textarea>
  `
})

export class CodeEditorComponent implements OnInit {
  code = new Control("");
  codeData : Observable<any>;
  message$:Observable<string>;

  resend() {
    this.message$ = Observable.interval(2000)
      .map(i => this.messages[i])
      .take(this.messages.length + 1);
  }

  private messages = [
    'Welcome Code Warrior',
    'Here you will be solving a time bound challenge with your pair partner',
    'Begin once the clock starts ticking'
  ];

  getCodeData () {
    this.codeData = this.codeService.getCode();
    this.codeData.subscribe(data => {
      if(data !== null) this.code.updateValue(data.code);
    });
  }

  add(code: string){
    this.codeService.saveCode({ id: 1, code: code});
  }

  ngOnInit(){
    this.getCodeData();
  }

  constructor(private codeService: CodeService) {
    this.code.valueChanges.debounceTime(400).subscribe(term => this.codeService.saveCode({ id: 1, code: term}));
    this.resend();
  }
  // @Input() codeData: Code;
}
