import {Component} from "angular2/core";
import { ROUTER_DIRECTIVES } from 'angular2/router';
import {MATERIAL_DIRECTIVES} from "ng2-material/all";

@Component({
  selector: 'navigation',
  templateUrl: 'app/ui/components/navigation/navigation.html',
  directives: [
    MATERIAL_DIRECTIVES,
    ROUTER_DIRECTIVES
  ]
})

export class Navigation { }
