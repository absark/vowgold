(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["razorpay-razorpay-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/razorpay/razorpay.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/razorpay/razorpay.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/main/tabs/home\" class=\"text-white\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Make Payment</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-grid class=\"gradient\" style=\"height: 100%; padding-top: 25%;\">\n  <ion-row>\n    <ion-col size-sm=\"8\" offset-sm=\"2\">\n      <form class=\"mx-2 mt-5\" [formGroup]=\"payment\" (ngSubmit)=\"onSubmit(payment)\">\n        <div class=\"mb-1\">\n          <input type=\"email\" placeholder=\"Email\" class=\"form-control\"  formControlName=\"email\">\n        </div>\n        <div class=\"mb-2\">\n          <input type=\"number\" placeholder=\"Amount\" class=\"form-control\" #amount formControlName=\"amount\">\n          \n        </div>\n        <ion-button type=\"submit\" expand=\"block\" [disabled]=\"payment.invalid \">Payment Method</ion-button>\n        <div class=\"alert alert-danger\" *ngIf=\"error\">{{error}}</div>\n      </form>\n      \n    </ion-col>\n  </ion-row>\n</ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/main/razorpay/razorpay-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/main/razorpay/razorpay-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: RazorpayPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RazorpayPageRoutingModule", function() { return RazorpayPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _razorpay_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./razorpay.page */ "./src/app/main/razorpay/razorpay.page.ts");




const routes = [
    {
        path: '',
        component: _razorpay_page__WEBPACK_IMPORTED_MODULE_3__["RazorpayPage"]
    }
];
let RazorpayPageRoutingModule = class RazorpayPageRoutingModule {
};
RazorpayPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RazorpayPageRoutingModule);



/***/ }),

/***/ "./src/app/main/razorpay/razorpay.module.ts":
/*!**************************************************!*\
  !*** ./src/app/main/razorpay/razorpay.module.ts ***!
  \**************************************************/
/*! exports provided: RazorpayPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RazorpayPageModule", function() { return RazorpayPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _razorpay_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./razorpay-routing.module */ "./src/app/main/razorpay/razorpay-routing.module.ts");
/* harmony import */ var _razorpay_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./razorpay.page */ "./src/app/main/razorpay/razorpay.page.ts");







let RazorpayPageModule = class RazorpayPageModule {
};
RazorpayPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _razorpay_routing_module__WEBPACK_IMPORTED_MODULE_5__["RazorpayPageRoutingModule"]
        ],
        declarations: [_razorpay_page__WEBPACK_IMPORTED_MODULE_6__["RazorpayPage"]]
    })
], RazorpayPageModule);



/***/ }),

/***/ "./src/app/main/razorpay/razorpay.page.scss":
/*!**************************************************!*\
  !*** ./src/app/main/razorpay/razorpay.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vcmF6b3JwYXkvcmF6b3JwYXkucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/main/razorpay/razorpay.page.ts":
/*!************************************************!*\
  !*** ./src/app/main/razorpay/razorpay.page.ts ***!
  \************************************************/
/*! exports provided: RazorpayPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RazorpayPage", function() { return RazorpayPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/shared.service */ "./src/app/main/services/shared.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_razorpay_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/razorpay.service */ "./src/app/services/razorpay.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








let RazorpayPage = class RazorpayPage {
    constructor(formBuilder, razorpay, service, loading, auth, router) {
        this.formBuilder = formBuilder;
        this.razorpay = razorpay;
        this.service = service;
        this.loading = loading;
        this.auth = auth;
        this.router = router;
    }
    ngOnInit() {
        this.payment = this.formBuilder.group({
            email: [this.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            amount: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        this.windowRef = this.razorpay.WindowRef;
    }
    ionViewWillEnter() {
        this.loading.create({
            message: 'Loading...'
        }).then(el => { el.present(); });
        if (this.service.user) {
            this.service.getUser().subscribe(res => {
                this.loading.dismiss();
                this.email = res.user.email;
                this.phone = res.user.mobile;
                this.ngOnInit();
            }, err => {
                this.loading.dismiss();
                this.auth.showAlert(err.error.message);
            });
        }
    }
    onSubmit(form) {
        this.error = '';
        if (this.payment.invalid) {
            return;
        }
        if (form.value.amount < 999) {
            this.error = 'Amount must be greater than 999';
            return;
        }
        this.razorpay.payment(this.payment.value).subscribe(res => {
            let options = {
                "id": res.data.id,
                "amount": res.data.amount,
                "receipt": res.data.receipt,
                "currency": res.data.currency,
                "name": 'VowGolds',
                "key": "rzp_test_BSjuo0zrfmh2me",
                "handler": (payment_id) => {
                    this.razorpay.paymentInfo({
                        payment_id: payment_id.razorpay_payment_id,
                        amount: res.data.amount / 100,
                        date: res.data.date,
                        email: form.value.email,
                        user_id: this.auth.user.id
                    }).subscribe(res => {
                        form.reset();
                        setTimeout(() => { this.router.navigate(['/', 'main', 'tabs', 'home']); }, 1500);
                    }, err => {
                        this.auth.showAlert(err.error.message);
                    });
                },
                "prefill": {
                    "email": form.value.email,
                    "contact": this.phone
                }
            };
            const pay = new this.windowRef.Razorpay(options);
            pay.open();
            console.log(pay);
        });
    }
    callbackFun(paymentInfo) {
        console.log("Handler", paymentInfo);
    }
};
RazorpayPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_razorpay_service__WEBPACK_IMPORTED_MODULE_6__["RazorpayService"] },
    { type: _services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
RazorpayPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-razorpay',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./razorpay.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/razorpay/razorpay.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./razorpay.page.scss */ "./src/app/main/razorpay/razorpay.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        src_app_services_razorpay_service__WEBPACK_IMPORTED_MODULE_6__["RazorpayService"],
        _services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
], RazorpayPage);



/***/ })

}]);
//# sourceMappingURL=razorpay-razorpay-module-es2015.js.map