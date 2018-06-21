import { Component, OnInit } from '@angular/core';

import { FilterService } from "./filter.service"

interface filterInterface {
  texto:   string
  tipo:    string
  estoque: string
  ordem:   string
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor(private filterService: FilterService) { }
  
  private filterSub 
  
  filterBy: filterInterface = {
    texto:   "",
    tipo:    "nome",
    estoque: "todos",
    ordem:   "entrada"
  }

  ngOnInit() {
    setTimeout(() => this.filterService.setFilter(this.filterBy), 0);
  }
  
  setFilter() {
    this.filterService.setFilter(this.filterBy)
  }

}
