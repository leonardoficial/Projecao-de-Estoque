import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "", 
    loadChildren: "./control-panel/control-panel.module#ControlPanelModule"
  },
  { 
    path: "about",
    loadChildren: "./about/about.module#AboutModule" 
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
