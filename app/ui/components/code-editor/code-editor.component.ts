import { Component, Input } from "angular2/core";
import { Code } from "../../service/code-service/code";

@Component({
  selector: 'code-editor',
  template: `
    <textarea type="textarea" [(ngModel)]="codeData.code" flex></textarea>
    <p>{{codeData.code}}</p>
  `
})

export class CodeEditorComponent {
  codeData : Code = {
    id: 1,
    code: 'test'
  };
  // @Input() codeData: Code;
}
