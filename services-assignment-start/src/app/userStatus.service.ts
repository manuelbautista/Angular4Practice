import { Injectable } from '@angular/core';
import {CounterService} from './counter.service';
@Injectable()
export class UserStatusService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor(private counterService: CounterService) {}

  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    // Logging de change
    this.counterService.logStatusChanged('Inactive');
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);

    this.counterService.logStatusChanged('Active');

  }

}
