import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ViewChild, ElementRef } from "@angular/core"

import { NavbarService } from "./navbar.service"

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public toggled: boolean
  
  private sideNavSub
  private collapseEvents: HTMLElement
  private collapseServices: HTMLElement

  constructor(private navbarService: NavbarService) { }

  ngOnInit() {
    this.sideNavSub = this.navbarService.openNav$.subscribe(() => {
      this.toggled = !this.toggled
    })
  }
  
  @ViewChild("collapseEvents")  set setCollapseEvents(el: ElementRef) {
    this.collapseEvents = el.nativeElement
  }
  
  @ViewChild("collapseServices") set setCollapseServices(el: ElementRef) {
    this.collapseServices = el.nativeElement
  }
  
  
  toggleNavbar() {
    this.navbarService.toggle()
  }
  
  toggleCollapse(el) {
    el.classList.toggle("show");
  }

}
