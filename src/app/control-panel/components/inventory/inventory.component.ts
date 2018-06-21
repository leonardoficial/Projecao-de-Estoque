import { Component, OnInit } from '@angular/core';

import { InventoryService } from "./inventory.service"
import { FilterService } from "../filter/filter.service"

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  private list
  private filterSub
  private filter: any

  constructor(
    private inventoryService: InventoryService, private filterService: FilterService
  ) { }

  ngOnInit() {
    this.filterSub = this.filterService.filterBy$.subscribe((obj) => {
      this.filter = obj;
    })
        
    this.list = this.inventoryService.fetch();
    
  }
  
}
