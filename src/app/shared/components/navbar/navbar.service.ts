import { Injectable } from '@angular/core'
import { Subject } from "rxjs/internal/Subject"

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  private openNavSource = new Subject<string>()
  public openNav$ = this.openNavSource.asObservable()
  
  toggle() {
    this.openNavSource.next()
  }
}
