export class CounterService {
  changedCount: number = 1;

  logStatusChanged(value: string) {
    console.log('Status changed to: ' + value + ' Count: ' + this.changedCount);
    this.changedCount++;
  }

}
