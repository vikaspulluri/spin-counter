import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit, OnDestroy {

  constructor() { }

  @Input() name: string;
  value: number | string = null;
  subject: Subject<number | string> = new Subject();
  subscription$: Subscription;

  ngOnInit(): void {
    this.subscription$ = this.subject.pipe(
      debounceTime(750)
    ).subscribe(value => {
      this.value = value;
    })
  }

  onKeyPress(event: KeyboardEvent) {
    this.subject.next((event.currentTarget as HTMLInputElement).value);
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }
}
