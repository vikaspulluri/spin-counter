import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerBoxComponent } from './spinner-box.component';

describe('SpinnerBoxComponent', () => {
  let component: SpinnerBoxComponent;
  let fixture: ComponentFixture<SpinnerBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinnerBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
