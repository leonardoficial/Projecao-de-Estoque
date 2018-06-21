import { Injectable } from '@angular/core';
import { Subject } from "rxjs/internal/Subject"

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }
  
  private filterBySource = new Subject<string>()
  public filterBy$ = this.filterBySource.asObservable()
  
  setFilter(type) {
    this.filterBySource.next({ ...type })
  }
  
}
