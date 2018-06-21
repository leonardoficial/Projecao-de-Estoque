(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./about/about.module": [
		"./src/app/about/about.module.ts",
		"about-about-module"
	],
	"./control-panel/control-panel.module": [
		"./src/app/control-panel/control-panel.module.ts",
		"control-panel-control-panel-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    {
        path: "",
        loadChildren: "./control-panel/control-panel.module#ControlPanelModule"
    },
    {
        path: "about",
        loadChildren: "./about/about.module#AboutModule"
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".command-section {\n  background: #202020;\n  border-bottom: 4px solid lightgray;\n  margin-top: -1px;\n  position: fixed;\n  z-index: 800;\n  width: 100%;\n}\n.command-section .command-buttons {\n  padding: 12px;\n}\n.chart-container {\n  margin-top: 80px;\n}\n.chart-container > div {  \n  height: 300px;\n  margin: 20px auto;\n  padding: 5px;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<app-navbar></app-navbar>\n\n<div class=\"command-section\">\n  <div class=\"col-12 command-buttons\">\n    <button (click)=\"toggleNavbar()\" class=\"btn btn-outline-light\">MENU</button>\n    <button class=\"btn btn-warning float-right\">nova requisição</button>\n  </div>\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_components_navbar_navbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/components/navbar/navbar.service */ "./src/app/shared/components/navbar/navbar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(navbarService) {
        this.navbarService = navbarService;
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent.prototype.toggleNavbar = function () {
        this.navbarService.toggle();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_components_navbar_navbar_service__WEBPACK_IMPORTED_MODULE_1__["NavbarService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/components/navbar/navbar.component */ "./src/app/shared/components/navbar/navbar.component.ts");
/* harmony import */ var _shared_components_navbar_navbar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/components/navbar/navbar.service */ "./src/app/shared/components/navbar/navbar.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





/*import { InventoryComponent } from './inventory/inventory.component';
import { FilterComponent } from './filter/filter.component';
import { PaginationComponent } from './pagination/pagination.component';*/

/*
import { InventoryService } from "./inventory/inventory.service";
import { FilterService } from "./filter/filter.service"

import { FilterByPipe } from './filter/pipes/filter-by.pipe';
*/

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"] /*
                InventoryComponent,
                FilterComponent,
                PaginationComponent,
                FilterByPipe*/
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]
            ],
            providers: [
                _shared_components_navbar_navbar_service__WEBPACK_IMPORTED_MODULE_5__["NavbarService"] /*,
                InventoryService,
                FilterService*/
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/shared/components/navbar/navbar.component.css":
/*!***************************************************************!*\
  !*** ./src/app/shared/components/navbar/navbar.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*!\n * Start Bootstrap - Simple Sidebar (https://startbootstrap.com/template-overviews/simple-sidebar)\n * Copyright 2013-2017 Start Bootstrap\n * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-simple-sidebar/blob/master/LICENSE)\n */\n\nbody {\n  overflow-x: hidden;\n}\n\n#wrapper {\n  padding-left: 0;\n  transition: all 0.5s ease;\n  height: 100%;\n  /** FIX BUG **/\n  border: 1px solid transparent;\n  margin-top: -1px;\n}\n\n#wrapper.toggled {\n  padding-left: 250px;\n}\n\n#sidebar-wrapper {\n  z-index: 1000;\n  position: fixed;\n  left: 250px;\n  width: 0;\n  height: 100%;\n  margin-left: -250px;\n  overflow-y: auto;\n  background: #000;\n}\n\n#wrapper.toggled #sidebar-wrapper {\n  box-shadow: 0 2px 8px 2px black;\n  width: 250px;\n}\n\n#sidebar-wrapper,\n#wrapper.toggled #sidebar-wrapper {\n  transition: all 0.4s ease;\n}\n\n#page-content-wrapper {\n  width: 100%;\n  position: absolute;\n  padding: 15px;\n}\n\n#wrapper.toggled #page-content-wrapper {\n  position: absolute;\n  margin-right: -250px;\n}\n\n/* Sidebar Styles */\n\n.sidebar-nav {\n  position: absolute;\n  top: 0;\n  width: 250px;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.sidebar-nav > li {\n  text-indent: 20px;\n  line-height: 40px;\n}\n\n.sidebar-nav li.sidebar-collapse a {\n  background: #202020;\n  border: 1px solid gray;\n  border-left: none;\n  border-right: none;\n}\n\n.sidebar-nav li.sidebar-collapse ul {\n  color: lightgray;\n}\n\n.sidebar-nav li a {\n  display: block;\n  text-decoration: none;\n  color: #fff;\n  padding-right: 20px;\n}\n\n.sidebar-nav li a.active {\n  background: rgba(255, 255, 255, 0.2);\n  font-weight: bold;\n}\n\n.sidebar-nav li a:hover {\n  color: #41C0FA;\n  text-decoration: none;\n}\n\n.sidebar-nav li a:active, .sidebar-nav li a:focus {\n  text-decoration: none;\n}\n\n.sidebar-nav>.sidebar-brand {\n  height: 65px;\n  font-size: 18px;\n  font-weight: bold;\n  line-height: 60px;\n}\n\n.sidebar-nav>.sidebar-brand a {\n  color: #999999;\n}\n\n.sidebar-nav>.sidebar-brand a:hover {\n  color: #fff;\n  background: none;\n}\n\n#sidenav-close {\n  -webkit-animation: opac-bg-animation linear .2s;\n          animation: opac-bg-animation linear .2s;\n  border-radius: 0px;\n  border-color: white;\n  color: white;\n  margin: 8px 14px;\n  position: fixed;\n  width: 60px;\n  z-index: 1000;\n}\n\n#opac-bg {\n  -webkit-animation: opac-bg-animation linear .2s;\n          animation: opac-bg-animation linear .2s;\n  background-color: black;\n  height: 100%;\n  opacity: .8;\n  position: fixed;\n  width: 100%;\n  z-index: 900;\n  /** FIX BUG **/\n  margin-top: -1px;\n}\n\n@-webkit-keyframes opac-bg-animation {\n  from { opacity: 0;  }\n  to   { opacity: .8; }\n}\n\n@keyframes opac-bg-animation {\n  from { opacity: 0;  }\n  to   { opacity: .8; }\n}\n\n@media(min-width:768px) {\n  #wrapper {\n    padding-left: 0;\n  }\n  #wrapper.toggled {\n    padding-left: 250px;\n  }\n  #sidebar-wrapper {\n    width: 0;\n  }\n  #wrapper.toggled #sidebar-wrapper {\n    width: 250px;\n  }\n  #page-content-wrapper {\n    padding: 20px;\n    position: relative;\n  }\n  #wrapper.toggled #page-content-wrapper {\n    position: relative;\n    margin-right: 0;\n  }\n}\n"

/***/ }),

/***/ "./src/app/shared/components/navbar/navbar.component.html":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/navbar/navbar.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div id=\"wrapper\" [class]=\"toggled ? 'toggled' : ''\">\n\n        <!-- Sidebar -->\n        <div id=\"sidebar-wrapper\">\n            <ul class=\"sidebar-nav\">\n                <li class=\"sidebar-brand\">\n                    <a href=\"#\">\n                      Sistema Tático\n                    </a>\n                </li>\n                <li>\n                    <a class=\"active\" routerLink=\"/inventory\">Painel de controle</a>\n                </li>\n                <li>\n                    <a href=\"#\">Monitoramento</a>\n                </li>\n                <li>\n                    <a href=\"#\">Requisição</a>\n                </li> \n                <li>\n                    <a href=\"#\">Tomada de decisão</a>\n                </li>\n                <li class=\"sidebar-collapse\">\n                    <a href=\"#\" (click)=\"toggleCollapse(collapseServices)\">\n                      Serviços <span class=\"float-right\">+</span>\n                    </a>\n                    <ul class=\"collapse\" #collapseServices>\n                      <li>Gerar relatórios</li>\n                      <li>Administrar requisições</li>\n                    </ul>\n                </li>\n                <li>\n                    <a href=\"#\">Configuração</a>\n                </li>\n                <li class=\"sidebar-collapse\">\n                    <a href=\"#\" (click)=\"toggleCollapse(collapseEvents)\">\n                      Eventos <span class=\"float-right\">+</span>\n                    </a>\n                    <ul class=\"collapse\" #collapseEvents>\n                      <li>Atividades recentes</li>\n                    </ul>\n                </li>\n                <li>\n                    <a routerLink=\"/about\">Sobre</a>\n                </li>\n                <li>\n                    <a href=\"#\">Contato</a>\n                </li>\n            </ul>\n        </div>\n        \n        <button *ngIf=\"toggled\" id=\"sidenav-close\" class=\"btn btn-outline-dark\" \n         (click)=\"toggleNavbar()\">\n          × \n        </button>\n        \n      </div>\n      \n      <div *ngIf=\"toggled\" id=\"opac-bg\"></div>\n     "

/***/ }),

/***/ "./src/app/shared/components/navbar/navbar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/navbar/navbar.component.ts ***!
  \**************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _navbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.service */ "./src/app/shared/components/navbar/navbar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(navbarService) {
        this.navbarService = navbarService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sideNavSub = this.navbarService.openNav$.subscribe(function () {
            _this.toggled = !_this.toggled;
        });
    };
    Object.defineProperty(NavbarComponent.prototype, "setCollapseEvents", {
        set: function (el) {
            this.collapseEvents = el.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavbarComponent.prototype, "setCollapseServices", {
        set: function (el) {
            this.collapseServices = el.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    NavbarComponent.prototype.toggleNavbar = function () {
        this.navbarService.toggle();
    };
    NavbarComponent.prototype.toggleCollapse = function (el) {
        el.classList.toggle("show");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("collapseEvents"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], NavbarComponent.prototype, "setCollapseEvents", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("collapseServices"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], NavbarComponent.prototype, "setCollapseServices", null);
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/shared/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/shared/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_navbar_service__WEBPACK_IMPORTED_MODULE_1__["NavbarService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/navbar/navbar.service.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/components/navbar/navbar.service.ts ***!
  \************************************************************/
/*! exports provided: NavbarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarService", function() { return NavbarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var NavbarService = /** @class */ (function () {
    function NavbarService() {
        this.openNavSource = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.openNav$ = this.openNavSource.asObservable();
    }
    NavbarService.prototype.toggle = function () {
        this.openNavSource.next();
    };
    NavbarService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], NavbarService);
    return NavbarService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /storage/emulated/0/Dev/Projeção de estoque/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map