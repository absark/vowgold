(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgotpassword-forgotpassword-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/forgotpassword/forgotpassword.page.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/forgotpassword/forgotpassword.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/auth/signin\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Forgot Password</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n<div class=\"mx-2\">\n  <form  class=\"mt-5\" [formGroup]=\"forgotPassword\" (ngSubmit)=\"onSubmit(forgotPassword)\">\n   \n    <div class=\"mb-2\">\n      <input type=\"text\"\n       placeholder=\"Email Address \" \n       class=\"form-control\"  \n       formControlName=\"email\"\n       [ngClass]=\"{ 'is-invalid': submitted && forgotPassword.get('email').errors }\" \n       >\n       <div\n        *ngIf=\"submitted && forgotPassword.get('email').errors\"\n        class=\"invalid-feedback\">\n       <div \n       *ngIf=\"forgotPassword.get('email').hasError('required')\">\n        Email address is required !\n       </div>\n       <div \n       *ngIf=\" forgotPassword.get('email').hasError('email')\">\n        Please enter valid email address !\n       </div>\n      </div>\n    \n    \n    </div>\n    <ion-button type=\"submit\" expand=\"block\">next</ion-button>\n  </form>\n</div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/auth/forgotpassword/forgotpassword-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/auth/forgotpassword/forgotpassword-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: ForgotpasswordPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordPageRoutingModule", function() { return ForgotpasswordPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _forgotpassword_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgotpassword.page */ "./src/app/auth/forgotpassword/forgotpassword.page.ts");




const routes = [
    {
        path: '',
        component: _forgotpassword_page__WEBPACK_IMPORTED_MODULE_3__["ForgotpasswordPage"]
    }
];
let ForgotpasswordPageRoutingModule = class ForgotpasswordPageRoutingModule {
};
ForgotpasswordPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ForgotpasswordPageRoutingModule);



/***/ }),

/***/ "./src/app/auth/forgotpassword/forgotpassword.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/auth/forgotpassword/forgotpassword.module.ts ***!
  \**************************************************************/
/*! exports provided: ForgotpasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordPageModule", function() { return ForgotpasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _forgotpassword_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgotpassword-routing.module */ "./src/app/auth/forgotpassword/forgotpassword-routing.module.ts");
/* harmony import */ var _forgotpassword_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgotpassword.page */ "./src/app/auth/forgotpassword/forgotpassword.page.ts");







let ForgotpasswordPageModule = class ForgotpasswordPageModule {
};
ForgotpasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _forgotpassword_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgotpasswordPageRoutingModule"]
        ],
        declarations: [_forgotpassword_page__WEBPACK_IMPORTED_MODULE_6__["ForgotpasswordPage"]]
    })
], ForgotpasswordPageModule);



/***/ }),

/***/ "./src/app/auth/forgotpassword/forgotpassword.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/auth/forgotpassword/forgotpassword.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvZm9yZ290cGFzc3dvcmQvZm9yZ290cGFzc3dvcmQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/auth/forgotpassword/forgotpassword.page.ts":
/*!************************************************************!*\
  !*** ./src/app/auth/forgotpassword/forgotpassword.page.ts ***!
  \************************************************************/
/*! exports provided: ForgotpasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordPage", function() { return ForgotpasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let ForgotpasswordPage = class ForgotpasswordPage {
    constructor(formBuilder, auth, loader, router) {
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.loader = loader;
        this.router = router;
        this.submitted = false;
    }
    ngOnInit() {
        this.forgotPassword = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]]
        });
    }
    onSubmit(form) {
        this.submitted = true;
        this.loader.create({ message: 'Sending...' }).then(el => {
            el.present();
        });
        // stop here if form is invalid
        if (this.forgotPassword.invalid) {
            return;
        }
        this.auth.forgotPassword(this.forgotPassword.value).subscribe(res => {
            this.loader.dismiss();
            this.router.navigate(['/', 'auth', 'resetpassword']);
            this.forgotPassword.reset();
        }, err => {
            this.loader.dismiss();
            this.auth.showAlert(err.message);
        });
    }
};
ForgotpasswordPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
ForgotpasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgotpassword',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forgotpassword.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/forgotpassword/forgotpassword.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forgotpassword.page.scss */ "./src/app/auth/forgotpassword/forgotpassword.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], ForgotpasswordPage);



/***/ })

}]);
//# sourceMappingURL=forgotpassword-forgotpassword-module-es2015.js.map