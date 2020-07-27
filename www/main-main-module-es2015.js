(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-main-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n  <ion-app>\n    <ion-menu contentId=\"main-content\" type=\"overlay\" >\n      <ion-content>\n  \n    <div  class=\"list\" style=\"height: 100%;\">\n       <ion-toolbar class=\"text-center\">Menu</ion-toolbar>\n        <ion-menu-toggle *ngIf=\"role !== 'admin'\">\n          <ion-item routerLink=\"/main/tabs/myaccount\" class=\"list\">\n            <ion-icon name=\"person-circle-outline\" slot=\"start\" class=\"text-white\"></ion-icon>\n            <ion-label> My Account</ion-label>\n           </ion-item>\n        </ion-menu-toggle >\n        <ion-menu-toggle *ngIf=\"role !== 'admin'\">\n          <ion-item routerLink=\"/main/tabs/home\" class=\" list\">\n            <ion-icon name=\"home-outline\" slot=\"start\" class=\"text-white\"></ion-icon>\n            <ion-label>Home</ion-label>\n           </ion-item>\n        </ion-menu-toggle>\n\n        <!-- <ion-menu-toggle *ngIf=\"role === 'distributor' \">\n          <ion-item routerLink=\"/main/tabs/members\" class=\" list\">\n            <ion-icon name=\"people-outline\" slot=\"start\" class=\"text-white\"></ion-icon>\n            <ion-label>Your Members</ion-label>\n           </ion-item>\n        </ion-menu-toggle> -->\n\n        <ion-menu-toggle *ngIf=\"role === 'admin'\">\n          <ion-item routerLink=\"/main/tabs/home\" class=\" list\">\n            <ion-icon name=\"tv-outline\" slot=\"start\" class=\"text-white\"></ion-icon>\n            <ion-label> Admin Dashboard</ion-label>\n           </ion-item>\n        </ion-menu-toggle>\n\n        <ion-menu-toggle *ngIf=\"role === 'admin'\">\n          <ion-item routerLink=\"/main/tabs/update-rates\" class=\" list\">\n            <ion-icon name=\"cloud-upload-outline\" slot=\"start\" class=\"text-white\"></ion-icon>\n            <ion-label> Update Rates</ion-label>\n           </ion-item>\n        </ion-menu-toggle>\n     \n  \n        <ion-menu-toggle>\n          <ion-item routerLink=\"/main/tabs/setting\" class=\"list\">\n            <ion-icon name=\"settings-outline\" slot=\"start\" class=\"text-white\"></ion-icon>\n            <ion-label>Setting</ion-label>\n            </ion-item>\n        </ion-menu-toggle>\n  \n        <ion-menu-toggle>\n          <ion-item (click)=\"onSignout()\" class=\"list\">\n            <ion-icon name=\"power-outline\" slot=\"start\" class=\"text-white\"></ion-icon>\n           <ion-label>Sign Out</ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n      </div>\n      </ion-content>\n     \n    </ion-menu>\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n\n\n   \n  </ion-app>\n\n\n");

/***/ }),

/***/ "./src/app/main/main-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/main/main-routing.module.ts ***!
  \*********************************************/
/*! exports provided: MainPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageRoutingModule", function() { return MainPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main.page */ "./src/app/main/main.page.ts");




const routes = [
    {
        path: 'tabs',
        component: _main_page__WEBPACK_IMPORTED_MODULE_3__["MainPage"],
        children: [
            {
                path: 'home',
                loadChildren: () => __webpack_require__.e(/*! import() | home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ./home/home.module */ "./src/app/main/home/home.module.ts")).then(m => m.HomePageModule)
            },
            {
                path: 'myaccount',
                loadChildren: () => __webpack_require__.e(/*! import() | myaccount-myaccount-module */ "myaccount-myaccount-module").then(__webpack_require__.bind(null, /*! ./myaccount/myaccount.module */ "./src/app/main/myaccount/myaccount.module.ts")).then(m => m.MyaccountPageModule)
            },
            {
                path: 'setting',
                loadChildren: () => Promise.all(/*! import() | setting-setting-module */[__webpack_require__.e("common"), __webpack_require__.e("setting-setting-module")]).then(__webpack_require__.bind(null, /*! ./setting/setting.module */ "./src/app/main/setting/setting.module.ts")).then(m => m.SettingPageModule)
            },
            {
                path: 'passbook',
                loadChildren: () => __webpack_require__.e(/*! import() | passbook-passbook-module */ "passbook-passbook-module").then(__webpack_require__.bind(null, /*! ./passbook/passbook.module */ "./src/app/main/passbook/passbook.module.ts")).then(m => m.PassbookPageModule)
            },
            {
                path: 'monthlyscheme',
                loadChildren: () => __webpack_require__.e(/*! import() | monthlyscheme-monthlyscheme-module */ "monthlyscheme-monthlyscheme-module").then(__webpack_require__.bind(null, /*! ./monthlyscheme/monthlyscheme.module */ "./src/app/main/monthlyscheme/monthlyscheme.module.ts")).then(m => m.MonthlyschemePageModule)
            },
            {
                path: 'update-rates',
                loadChildren: () => __webpack_require__.e(/*! import() | update-rates-update-rates-module */ "update-rates-update-rates-module").then(__webpack_require__.bind(null, /*! ./update-rates/update-rates.module */ "./src/app/main/update-rates/update-rates.module.ts")).then(m => m.UpdateRatesPageModule)
            },
            {
                path: 'razorpay',
                loadChildren: () => __webpack_require__.e(/*! import() | razorpay-razorpay-module */ "razorpay-razorpay-module").then(__webpack_require__.bind(null, /*! ./razorpay/razorpay.module */ "./src/app/main/razorpay/razorpay.module.ts")).then(m => m.RazorpayPageModule)
            }
        ]
    },
    {
        path: '',
        redirectTo: '/main/tabs/home',
        pathMatch: 'full'
    }
];
let MainPageRoutingModule = class MainPageRoutingModule {
};
MainPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MainPageRoutingModule);



/***/ }),

/***/ "./src/app/main/main.module.ts":
/*!*************************************!*\
  !*** ./src/app/main/main.module.ts ***!
  \*************************************/
/*! exports provided: MainPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageModule", function() { return MainPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _main_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main-routing.module */ "./src/app/main/main-routing.module.ts");
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main.page */ "./src/app/main/main.page.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/shared.service */ "./src/app/main/services/shared.service.ts");








let MainPageModule = class MainPageModule {
};
MainPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _main_routing_module__WEBPACK_IMPORTED_MODULE_5__["MainPageRoutingModule"]
        ],
        declarations: [_main_page__WEBPACK_IMPORTED_MODULE_6__["MainPage"]],
        providers: [
            _services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"],
        ]
    })
], MainPageModule);



/***/ }),

/***/ "./src/app/main/main.page.scss":
/*!*************************************!*\
  !*** ./src/app/main/main.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item.selected {\n  --color: var(--ion-color-primary);\n}\n\n.border {\n  border: 3px solid var(--ion-color-primary) !important;\n}\n\nion-icon {\n  --color: blue !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9EOlxcdm93R29sZEFwcC9zcmNcXGFwcFxcbWFpblxcbWFpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL21haW4vbWFpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxpQ0FBQTtBQ0FKOztBREVFO0VBQ0UscURBQUE7QUNDSjs7QURFRTtFQUNFLHdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tYWluL21haW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmlvbi1pdGVtLnNlbGVjdGVkIHtcclxuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICB9XHJcbiAgLmJvcmRlcntcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICBpb24taWNvbntcclxuICAgIC0tY29sb3I6IGJsdWUgIWltcG9ydGFudDtcclxuICB9IiwiaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5ib3JkZXIge1xuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgIWltcG9ydGFudDtcbn1cblxuaW9uLWljb24ge1xuICAtLWNvbG9yOiBibHVlICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/main/main.page.ts":
/*!***********************************!*\
  !*** ./src/app/main/main.page.ts ***!
  \***********************************/
/*! exports provided: MainPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPage", function() { return MainPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");



let MainPage = class MainPage {
    constructor(auth) {
        this.auth = auth;
        this.role = this.auth.userRole;
    }
    ngOnInit() { }
    onSignout() {
        this.auth.logout();
    }
};
MainPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
MainPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main.page.scss */ "./src/app/main/main.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
], MainPage);



/***/ }),

/***/ "./src/app/main/services/shared.service.ts":
/*!*************************************************!*\
  !*** ./src/app/main/services/shared.service.ts ***!
  \*************************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");





let SharedService = class SharedService {
    constructor(http, auth) {
        this.http = http;
        this.auth = auth;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url;
        this.user = null;
        this.user = this.auth.user;
        this.currentRates();
    }
    currentRates() {
        this.http.get(`${this.url}/api/v1/users/rates`).subscribe(res => {
            this.metalRates = res.rates;
        }, err => {
            this.auth.showAlert(err.message);
        });
    }
    updateUser(body) {
        return this.http.patch(`${this.url}/api/v1/users/${this.auth.user.id}`, body);
    }
    getUser() {
        return this.http.get(`${this.url}/api/v1/users/${this.auth.user.id}`);
    }
    getUsers() {
        return this.http.get(`${this.url}/api/v1/users`);
    }
    updatePassword(body) {
        return this.http.patch(`${this.url}/api/v1/users/updatepassword`, body);
    }
    updateRates(data) {
        return this.http.patch(`${this.url}/api/v1/users/rates/${this.metalRates[0]._id}`, data);
    }
    deleteUser() {
        return this.http.delete(`${this.url}/api/v1/users/${this.auth.user.id}`);
    }
};
SharedService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
SharedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
], SharedService);



/***/ })

}]);
//# sourceMappingURL=main-main-module-es2015.js.map