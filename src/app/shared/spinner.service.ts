import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  spinner$: ReplaySubject<{type: string, data?: number}> = new ReplaySubject(3);
  counterSum: number = 0;
  processedCounters: number = 0;
  constructor() { }

  start() {
    this.counterSum = 0;
    this.processedCounters = 0;
    this.spinner$.next({type: 'start'});
  }

  stop(counter: number){
    this.processedCounters++;
    this.counterSum += counter;
    if (this.processedCounters === 3) {
      this.spinner$.next({type: 'stop', data: this.counterSum})
    }
  }
}
