import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserStatusService} from '../userStatus.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements  OnInit {
  users = [];
  constructor(private userStatusService: UserStatusService) {}

  ngOnInit() {
    this.users = this.userStatusService.activeUsers;
  }
  onSetToInactive(id: number) {
    this.userStatusService.onSetToInactive(id);
  }
}
