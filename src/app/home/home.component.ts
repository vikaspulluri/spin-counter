import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { SpinnerService } from '../shared/spinner.service';
import { Subscription } from 'rxjs';
import { TextInputComponent } from '../shared/text-input/text-input.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(private spinnerService: SpinnerService) {}
  spinnerServiceSubscription$: Subscription;
  hasWon: boolean = false;
  @ViewChild('userGuess') textInput: TextInputComponent;

  ngOnInit(): void {
    this.spinnerService.spinner$.subscribe(data => {
      if (data.type === 'stop') {
        if (data.data === Number(this.textInput.value)) {
          this.hasWon = true;
        }
      }
    });
  }

  onPlay() {
    this.hasWon = false;
    this.spinnerService.start();
  }

  ngOnDestroy() {
    this.spinnerServiceSubscription$.unsubscribe();
  }

}
