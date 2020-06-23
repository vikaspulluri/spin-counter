import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor() { }
  @Output() buttonClick = new EventEmitter<void>();
  ngOnInit(): void {
  }

  onButtonClick(): void {
    this.buttonClick.emit();
  }

}
