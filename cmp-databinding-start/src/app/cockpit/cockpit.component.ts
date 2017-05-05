import {Component, OnInit, EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';
import { Compiler } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') bluePrintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  newServerName = '';
  newServerContent = '';
  //
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor(private _compiler: Compiler) {
    this._compiler.clearCache();
  }

  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement) {
    console.log(this.serverContentInput);
    // console.log(nameInput.value);
    this.newServerName = nameInput.value; //because is using #serverNameInput and not ngmodel
    this.newServerContent = this.serverContentInput.nativeElement.value;

    this.serverCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});

  }

  onAddBlueprint() {
    this.bluePrintCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
  }

}
