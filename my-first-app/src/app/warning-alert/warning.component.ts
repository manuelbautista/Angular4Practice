import {Component} from "@angular/core";
@Component({
  selector:'app-warning-alert',
  template: `
    <p>This is a warning!</p>
`,
  styles:[`
    p{
     color: yellow;
    }
`]
})
export class WarningAlertComponent{

}
