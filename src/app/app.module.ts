import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TextInputComponent } from './shared/text-input/text-input.component';
import { ButtonComponent } from './shared/button/button.component';
import { SpinnerBoxComponent } from './shared/spinner-box/spinner-box.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TextInputComponent,
    ButtonComponent,
    SpinnerBoxComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
