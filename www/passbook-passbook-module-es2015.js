(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["passbook-passbook-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/passbook/passbook.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/passbook/passbook.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n     <ion-buttons slot=\"start\">\n       <ion-back-button defaultHref=\"/main/tabs/home\" class=\"text-white\"></ion-back-button>\n     </ion-buttons>\n    <ion-title>Passbook</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-grid class=\"gradient\" style=\"height: 100%; overflow-y: auto;\">\n  <ion-row>\n    <ion-col size-sm=\"8\" offset-sm=\"2\">\n      <div class=\"d-flex my-2 mx-1\" style=\"justify-content: baseline;font-size: 20px;\">\n        <div style=\"padding-top: 2px;\">\n          <ion-icon name=\"card-outline\" slot=\"start\"></ion-icon>\n        </div>\n        <div class=\"ml-2\">Payment History</div>\n       </div>\n      <div class=\"card my-2 mx-1 p-2 \"*ngFor=\"let d of paymentHistory.payments\">\n         <div class=\"h6 border-bottom pb-2\"> \n          <ion-icon name=\"arrow-redo-sharp\" class=\"text-primary mr-2\" slot=\"icon-only\"></ion-icon>Paid To Vow Golds</div>\n        <div class=\"d-flex\">\n          <div class=\"grow\">Paid Date:</div>\n          <div class=\"grow text-right\">{{d.date | date }}</div>\n        </div>\n        <div class=\"d-flex my-2\">\n          <div class=\"grow\">Amount Paid:</div>\n          <div class=\"grow text-right\"> Rs.{{d.amount}}</div>\n        </div>\n        <div class=\"d-flex mb-2\">\n          <div class=\"grow\">Receipt Email:</div>\n          <div class=\"grow text-right\">{{d.email}}</div>\n        </div>\n        <div class=\"d-flex\">\n          <div class=\"grow\">Payment_id:</div>\n          <div class=\"grow text-right\">{{d.payment_id}}</div>\n        </div>        \n        \n      </div>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/main/passbook/passbook-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/main/passbook/passbook-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: PassbookPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PassbookPageRoutingModule", function() { return PassbookPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _passbook_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./passbook.page */ "./src/app/main/passbook/passbook.page.ts");




const routes = [
    {
        path: '',
        component: _passbook_page__WEBPACK_IMPORTED_MODULE_3__["PassbookPage"]
    }
];
let PassbookPageRoutingModule = class PassbookPageRoutingModule {
};
PassbookPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PassbookPageRoutingModule);



/***/ }),

/***/ "./src/app/main/passbook/passbook.module.ts":
/*!**************************************************!*\
  !*** ./src/app/main/passbook/passbook.module.ts ***!
  \**************************************************/
/*! exports provided: PassbookPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PassbookPageModule", function() { return PassbookPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _passbook_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./passbook-routing.module */ "./src/app/main/passbook/passbook-routing.module.ts");
/* harmony import */ var _passbook_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./passbook.page */ "./src/app/main/passbook/passbook.page.ts");







let PassbookPageModule = class PassbookPageModule {
};
PassbookPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _passbook_routing_module__WEBPACK_IMPORTED_MODULE_5__["PassbookPageRoutingModule"]
        ],
        declarations: [_passbook_page__WEBPACK_IMPORTED_MODULE_6__["PassbookPage"]]
    })
], PassbookPageModule);



/***/ }),

/***/ "./src/app/main/passbook/passbook.page.scss":
/*!**************************************************!*\
  !*** ./src/app/main/passbook/passbook.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vcGFzc2Jvb2svcGFzc2Jvb2sucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/main/passbook/passbook.page.ts":
/*!************************************************!*\
  !*** ./src/app/main/passbook/passbook.page.ts ***!
  \************************************************/
/*! exports provided: PassbookPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PassbookPage", function() { return PassbookPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_razorpay_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/razorpay.service */ "./src/app/services/razorpay.service.ts");





let PassbookPage = class PassbookPage {
    constructor(razorpay, loading, auth) {
        this.razorpay = razorpay;
        this.loading = loading;
        this.auth = auth;
        this.paymentHistory = [];
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.loading.create({
            message: 'Loading...'
        }).then(el => el.present());
        this.razorpay.paymentDetails(this.auth.user.id).subscribe(res => {
            this.loading.dismiss();
            this.paymentHistory = res;
        }, error => {
            this.auth.showAlert(error.error.message);
        });
    }
};
PassbookPage.ctorParameters = () => [
    { type: src_app_services_razorpay_service__WEBPACK_IMPORTED_MODULE_4__["RazorpayService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
PassbookPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-passbook',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./passbook.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/passbook/passbook.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./passbook.page.scss */ "./src/app/main/passbook/passbook.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_razorpay_service__WEBPACK_IMPORTED_MODULE_4__["RazorpayService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
], PassbookPage);



/***/ })

}]);
//# sourceMappingURL=passbook-passbook-module-es2015.js.map