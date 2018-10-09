import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { AppComponent }         from './app.component';
import { CreditService } from './credit.service';
import { CreditDirective } from './credit.directive';

@NgModule({
  imports: [ BrowserModule ],
  providers: [CreditService],
  declarations: [ AppComponent,
                  CreditDirective ],
  entryComponents: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {}
}



/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/