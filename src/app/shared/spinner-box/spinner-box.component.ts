import { Component, OnInit, OnDestroy } from '@angular/core';
import { SpinnerService } from '../spinner.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-spinner-box',
  templateUrl: './spinner-box.component.html',
  styleUrls: ['./spinner-box.component.scss']
})
export class SpinnerBoxComponent implements OnInit, OnDestroy {

  constructor(private spinnerService: SpinnerService) { }

  counter:number = 0;
  spinnerSubscription$: Subscription;

  ngOnInit(): void {
    this.spinnerSubscription$ = this.spinnerService.spinner$.subscribe(data => (this.handleSpinnerData(data)));
  }

  handleSpinnerData(data: {type: string, data?: number}) {
    if (data.type ==='start') {
      this.counter = Math.floor(Math.random() * 10);
      this.spinnerService.stop(this.counter);
    }
  }

  ngOnDestroy(): void {
    this.spinnerSubscription$.unsubscribe();
  }

}
