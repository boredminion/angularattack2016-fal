import {Component} from 'angular2/core';
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';
import {Navigation} from '../navigation/navigation.component';
import {HomeTitleComponent} from '../home-title/home-title.component';
import { CodeEditorComponent } from '../code-editor/code-editor.component';

@Component({
    selector: 'my-app',
    template: `
      <navigation></navigation>
      <md-content>
        <home-title></home-title>
        <code-editor></code-editor>
      </md-content>
    `,
    directives: [
      MATERIAL_DIRECTIVES,
      Navigation,
      HomeTitleComponent,
      CodeEditorComponent
    ]
})

export class AppComponent { }
