import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from "@angular/core"

import { NavbarService } from "./shared/components/navbar/navbar.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private navbarService: NavbarService) { }
  
  
  ngOnInit() { }
  
  toggleNavbar() {
    this.navbarService.toggle()
  }

}
