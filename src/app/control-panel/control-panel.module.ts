import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { ControlPanelRoutingModule } from './control-panel-routing.module';
import { ControlPanelComponent } from './control-panel.component';

import { InventoryComponent } from './components/inventory/inventory.component';
import { FilterComponent } from './components/filter/filter.component';
import { PaginationComponent } from './components/pagination/pagination.component';

import { InventoryService } from "./components/inventory/inventory.service";
import { FilterService } from "./components/filter/filter.service"

import { FilterByPipe } from './pipes/filter-by.pipe';


@NgModule({
  imports: [
    SharedModule,
    ControlPanelRoutingModule
  ],
  declarations: [
    ControlPanelComponent,
    
    InventoryComponent,
    FilterComponent,
    PaginationComponent,
    FilterByPipe
  ],
  providers: [
    InventoryService,
    FilterService
  ]
})
export class ControlPanelModule { }
