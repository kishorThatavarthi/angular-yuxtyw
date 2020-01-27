import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { RouterModule} from '@angular/router';
import {AppRoutingModule,routingComponents} from './app-routing/app-routing.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule
     ],
  declarations: [ AppComponent, HelloComponent, routingComponents ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
