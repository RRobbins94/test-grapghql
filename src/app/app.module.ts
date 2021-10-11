import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutsModule } from './layouts/layouts.module';
import { CoreModule } from './core/core.module';
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutsModule,
    CoreModule,
    AmplifyUIAngularModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
