(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signin-signin-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signin/signin.page.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signin/signin.page.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content >\n  \n  <ion-grid class=\"gradient\" style=\"height:100vh\">\n    <ion-row>\n      <ion-col size-sm=\"10\" offset-sm=\"1\">\n     <!-- LOGO -->\n  <div class=\"mb-5\">\n    <ion-img src=\"../assets/img/logo1.png\" class=\"logo-img\"></ion-img>\n  </div>\n\n  <!-- FORM START -->\n  <form  class=\"ion-padding-horizontal pt-5\"  (ngSubmit)=\"onSubmit(f)\" #f='ngForm' autocomplete=\"off\">\n    <div class=\"d-flex column\">\n      \n      <div class=\"mb-2\">\n        <input type=\"email\" placeholder=\"Email Address  \" class=\"form-control\" name=\"email\" ngModel>\n      </div>\n      <div class=\"mb-2\">\n        <input type=\"password\" placeholder=\"Password\" class=\"form-control\" name=\"password\" ngModel>\n      </div>\n   \n      </div>\n    <!-- SIGNIN BUTTON -->\n    <button type=\"submit\" class=\"btn btn-block btn-primary mt-2\">SING IN</button>\n\n  </form>\n \n   <!-- FORM END -->\n   <div class=\"text-center mt-4 text-white\" [routerLink]=\"['/','auth','forgotpassword']\">Forgot Password ?</div>\n   <div class=\"footer text-center\">\n    <span> Don't have an Account?</span><br>\n    <div class=\"d-flex text-white\" \n    style=\"justify-content: center; outline: none;\"\n    [routerLink]=\"['/','auth','signup']\">\n      <span>Create New Account</span>\n      <ion-icon name=\"arrow-forward-outline\" class=\"pt-1 icon-only\"></ion-icon>\n    </div>\n   </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/auth/signin/signin-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/auth/signin/signin-routing.module.ts ***!
  \******************************************************/
/*! exports provided: SigninPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninPageRoutingModule", function() { return SigninPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _signin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signin.page */ "./src/app/auth/signin/signin.page.ts");




const routes = [
    {
        path: '',
        component: _signin_page__WEBPACK_IMPORTED_MODULE_3__["SigninPage"]
    }
];
let SigninPageRoutingModule = class SigninPageRoutingModule {
};
SigninPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SigninPageRoutingModule);



/***/ }),

/***/ "./src/app/auth/signin/signin.module.ts":
/*!**********************************************!*\
  !*** ./src/app/auth/signin/signin.module.ts ***!
  \**********************************************/
/*! exports provided: SigninPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninPageModule", function() { return SigninPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _signin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signin-routing.module */ "./src/app/auth/signin/signin-routing.module.ts");
/* harmony import */ var _signin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signin.page */ "./src/app/auth/signin/signin.page.ts");







let SigninPageModule = class SigninPageModule {
};
SigninPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _signin_routing_module__WEBPACK_IMPORTED_MODULE_5__["SigninPageRoutingModule"]
        ],
        declarations: [_signin_page__WEBPACK_IMPORTED_MODULE_6__["SigninPage"]]
    })
], SigninPageModule);



/***/ }),

/***/ "./src/app/auth/signin/signin.page.scss":
/*!**********************************************!*\
  !*** ./src/app/auth/signin/signin.page.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo-img {\n  height: 150px;\n  margin-top: 20px;\n}\n\n.terms {\n  font-size: small;\n}\n\n.footer {\n  position: fixed;\n  bottom: 15px;\n  left: 16px;\n  right: 16px;\n  text-align: center;\n  font-size: small;\n}\n\n.bg {\n  background: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWduaW4vRDpcXHZvd0dvbGRBcHAvc3JjXFxhcHBcXGF1dGhcXHNpZ25pblxcc2lnbmluLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYXV0aC9zaWduaW4vc2lnbmluLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBQ0NKOztBRENFO0VBQ0UsZ0JBQUE7QUNFSjs7QURBRTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDR047O0FEQUU7RUFDRSxvQ0FBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9zaWduaW4vc2lnbmluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvLWltZ3tcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuICAudGVybXN7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gIH1cclxuICAuZm9vdGVye1xyXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgIGJvdHRvbTogMTVweDtcclxuICAgICAgbGVmdDogMTZweDtcclxuICAgICAgcmlnaHQ6IDE2cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZm9udC1zaXplOiBzbWFsbDtcclxuICB9XHJcbiBcclxuICAuYmd7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgfSIsIi5sb2dvLWltZyB7XG4gIGhlaWdodDogMTUwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi50ZXJtcyB7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG59XG5cbi5mb290ZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMTVweDtcbiAgbGVmdDogMTZweDtcbiAgcmlnaHQ6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiBzbWFsbDtcbn1cblxuLmJnIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/auth/signin/signin.page.ts":
/*!********************************************!*\
  !*** ./src/app/auth/signin/signin.page.ts ***!
  \********************************************/
/*! exports provided: SigninPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninPage", function() { return SigninPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");



let SigninPage = class SigninPage {
    constructor(auth) {
        this.auth = auth;
    }
    ngOnInit() {
    }
    onSubmit(form) {
        this.auth.login(form.value);
    }
};
SigninPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
SigninPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signin.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signin/signin.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signin.page.scss */ "./src/app/auth/signin/signin.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
], SigninPage);



/***/ })

}]);
//# sourceMappingURL=signin-signin-module-es2015.js.map