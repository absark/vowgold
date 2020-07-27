(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resetpassword-resetpassword-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/resetpassword/resetpassword.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/resetpassword/resetpassword.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>resetpassword</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<div class=\"mx-2\">\n  <form  class=\"mt-5\" [formGroup]=\"resetPassword\" (ngSubmit)=\"onSubmit(resetPassword)\">\n    <div class=\"mb-2\">\n      <input type=\"text\"\n       placeholder=\"Reset Token\"\n       class=\"form-control\" \n       formControlName=\"token\"\n       [ngClass]=\"{ 'is-invalid': submitted && resetPassword.get('token').errors }\" \n       >\n       <div\n       *ngIf=\"submitted && resetPassword.get('token').errors\"\n       class=\"invalid-feedback\">\n      <div \n      *ngIf=\"resetPassword.get('token').hasError('required')\">\n       Token is required !\n      </div>\n    \n     </div>\n    </div>\n\n  \n    <div class=\"mb-2\">\n      <input type=\"text\"\n       placeholder=\"Password\"\n       class=\"form-control\" \n       formControlName=\"password\"\n       [ngClass]=\"{ 'is-invalid': submitted && resetPassword.get('password').errors }\" \n       >\n       <div\n       *ngIf=\"submitted && resetPassword.get('password').errors\"\n       class=\"invalid-feedback\">\n      <div \n      *ngIf=\"resetPassword.get('password').hasError('required')\">\n       Password is required !\n      </div>\n      <div \n      *ngIf=\" resetPassword.get('password').hasError('minlength')\">\n      Password must be at least 6 characters !\n      </div>\n     </div>\n    </div>\n\n\n    <div class=\"mb-2\">\n      <input type=\"text\"\n       placeholder=\"Confirm Password\"\n       class=\"form-control\" \n       formControlName=\"passwordConfirm\"\n       [ngClass]=\"{ 'is-invalid': submitted && resetPassword.get('passwordConfirm').errors }\" \n       >\n       <div\n       *ngIf=\"submitted && resetPassword.get('passwordConfirm').errors\"\n       class=\"invalid-feedback\">\n      <div \n      *ngIf=\"resetPassword.get('passwordConfirm').hasError('required')\">\n       Confirm password is required !\n      </div>\n      <div \n      *ngIf=\" resetPassword.get('passwordConfirm').hasError('mustMatch')\">\n      Confirm password must match !\n      </div>\n     </div>\n    </div>\n    <ion-button type=\"submit\" expand=\"block\">reset</ion-button>\n    <div class=\"alert alert-success mt-2 text-center\" role=\"alert\" *ngIf=\"msg\">\n      {{ 'Your password has reset !'}}\n    </div>\n  </form>\n  <div class=\"d-flex mt-3\">\n    <div>\n      <strong>Note:</strong>\n    </div>\n    <div>\n      Reset token has been send to your email address .\n    </div>\n  </div>\n</div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/auth/resetpassword/resetpassword-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/auth/resetpassword/resetpassword-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: ResetpasswordPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetpasswordPageRoutingModule", function() { return ResetpasswordPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _resetpassword_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resetpassword.page */ "./src/app/auth/resetpassword/resetpassword.page.ts");




const routes = [
    {
        path: '',
        component: _resetpassword_page__WEBPACK_IMPORTED_MODULE_3__["ResetpasswordPage"]
    }
];
let ResetpasswordPageRoutingModule = class ResetpasswordPageRoutingModule {
};
ResetpasswordPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ResetpasswordPageRoutingModule);



/***/ }),

/***/ "./src/app/auth/resetpassword/resetpassword.module.ts":
/*!************************************************************!*\
  !*** ./src/app/auth/resetpassword/resetpassword.module.ts ***!
  \************************************************************/
/*! exports provided: ResetpasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetpasswordPageModule", function() { return ResetpasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _resetpassword_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resetpassword-routing.module */ "./src/app/auth/resetpassword/resetpassword-routing.module.ts");
/* harmony import */ var _resetpassword_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resetpassword.page */ "./src/app/auth/resetpassword/resetpassword.page.ts");







let ResetpasswordPageModule = class ResetpasswordPageModule {
};
ResetpasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _resetpassword_routing_module__WEBPACK_IMPORTED_MODULE_5__["ResetpasswordPageRoutingModule"]
        ],
        declarations: [_resetpassword_page__WEBPACK_IMPORTED_MODULE_6__["ResetpasswordPage"]]
    })
], ResetpasswordPageModule);



/***/ }),

/***/ "./src/app/auth/resetpassword/resetpassword.page.scss":
/*!************************************************************!*\
  !*** ./src/app/auth/resetpassword/resetpassword.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcmVzZXRwYXNzd29yZC9yZXNldHBhc3N3b3JkLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/auth/resetpassword/resetpassword.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/auth/resetpassword/resetpassword.page.ts ***!
  \**********************************************************/
/*! exports provided: ResetpasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetpasswordPage", function() { return ResetpasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/helper */ "./src/app/services/helper.ts");







let ResetpasswordPage = class ResetpasswordPage {
    constructor(formBuilder, auth, loader, router) {
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.loader = loader;
        this.router = router;
        this.submitted = false;
        this.msg = false;
    }
    ngOnInit() {
        this.resetPassword = this.formBuilder.group({
            token: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            passwordConfirm: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        }, {
            validator: Object(_services_helper__WEBPACK_IMPORTED_MODULE_6__["MustMatch"])('password', 'confirmPassword')
        });
    }
    onSubmit(form) {
        this.submitted = true;
        this.loader.create({ message: 'Sending...' }).then(el => {
            el.present();
        });
        // stop here if form is invalid
        if (this.resetPassword.invalid) {
            return;
        }
        this.auth.resetPassword(this.resetPassword.get('token').value, {
            password: this.resetPassword.get('password').value,
            passwordConfirm: this.resetPassword.get('passwordConfirm').value
        }).subscribe(res => {
            this.loader.dismiss();
            this.msg = true;
            setTimeout(() => {
                this.router.navigate(['/', 'auth', 'signin']);
                this.resetPassword.reset();
            }, 2500);
        }, err => {
            this.loader.dismiss();
            this.auth.showAlert(err.message);
        });
    }
};
ResetpasswordPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
ResetpasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-resetpassword',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./resetpassword.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/resetpassword/resetpassword.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./resetpassword.page.scss */ "./src/app/auth/resetpassword/resetpassword.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], ResetpasswordPage);



/***/ })

}]);
//# sourceMappingURL=resetpassword-resetpassword-module-es2015.js.map