import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { NavbarService } from "./shared/components/navbar/navbar.service";

import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared/shared.module';
import { ControlPanelModule } from './control-panel/control-panel.module';
import { AboutModule } from './about/about.module';


@NgModule({
  declarations: [
    AppComponent
    NavbarComponent
  ],
  imports: [
    RouterModule,
  
  
    BrowserModule,
    SharedModule,
    ControlPanelModule,
    AboutModule,
    
    AppRoutingModule
  ],
  providers: [
    NavbarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
