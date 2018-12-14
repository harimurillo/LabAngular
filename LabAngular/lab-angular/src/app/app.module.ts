import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1ComponentComponent } from './comp1-component/comp1-component.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
// import { CombaoComponent } from './combao/combao.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp1ComponentComponent,
    Comp2Component,
    Comp3Component    // CombaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
