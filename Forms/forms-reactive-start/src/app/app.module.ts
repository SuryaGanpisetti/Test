import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ReactiveFormPractiseComponent } from './reactive-form-practise/reactive-form-practise.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormPractiseComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
