import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NumbersOnlyDirective } from './directives/numbers-only.directive';
import { ColorFondoDirective } from './directives/color-fondo.directive';

@NgModule({
  declarations: [
    AppComponent,
    NumbersOnlyDirective,
    ColorFondoDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
