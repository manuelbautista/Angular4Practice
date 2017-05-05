import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']

})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName ="Test Server";
  serverCreated: boolean = false;
  servers = ["Test Server","Test Server 2"];

  constructor() {
    setTimeout(()=> {
      this.allowNewServer = true;
    },2000)
  }

  ngOnInit() {
  }
  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server was created! Name is " + this.serverName;

  }
  onUpdateServerName(event: Event){
    this.serverCreated = false;
    this.serverName = (<HTMLInputElement>event.target).value;

  }

}
