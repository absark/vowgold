function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["update-rates-update-rates-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/update-rates/update-rates.page.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/update-rates/update-rates.page.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainUpdateRatesUpdateRatesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/main/tabs/home\" class=\"text-white\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>updateRates</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"gradient\" style=\"height: 100%;\">\n    <ion-row>\n      <ion-col size-sm=\"8\" offset-sm=\"2\">\n        <div class=\"mx-3\">\n          <!-- <div style=\"border-radius: 5px;margin-bottom: 5px; \" class=\" py-1 bg-white mb-2 \">\n            <span class=\"mr-2\">Gold Rate</span>\n            <span>{{gold}}</span>\n          </div>\n          <div style=\"border-radius: 5px;\" class=\" py-1 bg-white mb-2\">\n            <span class=\"mr-2\">Silver Rate</span>\n            <span>{{silver}}</span>\n          </div> -->\n          <button (click)=\"onCurrentRates()\" class=\"btn btn-primary btn-block mt-3 mb-5\">Get Current Rates</button>\n  \n        </div>\n        \n\n        <form  class=\"ion-padding-horizontal\" [formGroup]=\"updateRates\" (ngSubmit)=\"onSubmit(updateRates)\">\n          <div class=\"d-flex column\">\n      \n            <div class=\"mb-2\">\n              <input type=\"text\" \n              placeholder=\"Get gold rate\" \n              disabled\n              class=\"form-control\" \n              formControlName=\"gold\"\n               >\n            </div>\n            <div class=\"mb-2\">\n              <input type=\"text\" \n              placeholder=\"Get silver rate\" \n              class=\"form-control\" \n              disabled\n              formControlName=\"silver\"\n               >\n            </div>\n      \n            <div class=\"mb-2\">\n              <input type=\"text\" \n              placeholder=\"Enter diamond rate\" \n              class=\"form-control\" \n              formControlName=\"diamond\"\n               >\n            </div>\n             <button class=\"btn btn-primary btn-block mt-3\" type=\"submit\"[disabled]=\"updateRates.invalid\">Update Rates</button>\n            </div>\n            <div class=\"alert alert-success mt-2 text-center\" role=\"alert\" *ngIf=\"isUpdated\">\n              Metal rates updated successfull !\n            </div>\n            </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/main/update-rates/update-rates-routing.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/main/update-rates/update-rates-routing.module.ts ***!
    \******************************************************************/

  /*! exports provided: UpdateRatesPageRoutingModule */

  /***/
  function srcAppMainUpdateRatesUpdateRatesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateRatesPageRoutingModule", function () {
      return UpdateRatesPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _update_rates_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./update-rates.page */
    "./src/app/main/update-rates/update-rates.page.ts");

    var routes = [{
      path: '',
      component: _update_rates_page__WEBPACK_IMPORTED_MODULE_3__["UpdateRatesPage"]
    }];

    var UpdateRatesPageRoutingModule = function UpdateRatesPageRoutingModule() {
      _classCallCheck(this, UpdateRatesPageRoutingModule);
    };

    UpdateRatesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], UpdateRatesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/main/update-rates/update-rates.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/main/update-rates/update-rates.module.ts ***!
    \**********************************************************/

  /*! exports provided: UpdateRatesPageModule */

  /***/
  function srcAppMainUpdateRatesUpdateRatesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateRatesPageModule", function () {
      return UpdateRatesPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _update_rates_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./update-rates-routing.module */
    "./src/app/main/update-rates/update-rates-routing.module.ts");
    /* harmony import */


    var _update_rates_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./update-rates.page */
    "./src/app/main/update-rates/update-rates.page.ts");

    var UpdateRatesPageModule = function UpdateRatesPageModule() {
      _classCallCheck(this, UpdateRatesPageModule);
    };

    UpdateRatesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _update_rates_routing_module__WEBPACK_IMPORTED_MODULE_5__["UpdateRatesPageRoutingModule"]],
      declarations: [_update_rates_page__WEBPACK_IMPORTED_MODULE_6__["UpdateRatesPage"]]
    })], UpdateRatesPageModule);
    /***/
  },

  /***/
  "./src/app/main/update-rates/update-rates.page.scss":
  /*!**********************************************************!*\
    !*** ./src/app/main/update-rates/update-rates.page.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainUpdateRatesUpdateRatesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vdXBkYXRlLXJhdGVzL3VwZGF0ZS1yYXRlcy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/main/update-rates/update-rates.page.ts":
  /*!********************************************************!*\
    !*** ./src/app/main/update-rates/update-rates.page.ts ***!
    \********************************************************/

  /*! exports provided: UpdateRatesPage */

  /***/
  function srcAppMainUpdateRatesUpdateRatesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateRatesPage", function () {
      return UpdateRatesPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/shared.service */
    "./src/app/main/services/shared.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var UpdateRatesPage = /*#__PURE__*/function () {
      function UpdateRatesPage(http, formBuilder, auth, service, router) {
        _classCallCheck(this, UpdateRatesPage);

        this.http = http;
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.service = service;
        this.router = router;
        this.diamond = null;
        this.isUpdated = false;
      }

      _createClass(UpdateRatesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.updateRates = this.formBuilder.group({
            gold: [this.gold, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            silver: [this.silver, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            diamond: this.diamond
          });
        }
      }, {
        key: "onCurrentRates",
        value: function onCurrentRates() {
          var _this = this;

          this.http.get("https://metals-api.com/api/latest?access_key=fka1uuew9hibte9d5xerfhyndxl5ts4iohiwa9nv7wj9k2n5pt7hmiv1rfc4&base=INR&symbols=XAU,XAG").subscribe(function (res) {
            _this.gold = Math.round(res.rates.XAU / 28.3495);
            _this.silver = Math.round(res.rates.XAG / 28.3495);

            _this.ngOnInit();
          }, function (err) {
            _this.auth.showAlert(err.error.info);
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this2 = this;

          if (this.updateRates.invalid) return;
          this.service.updateRates(this.updateRates.value).subscribe(function (res) {
            _this2.isUpdated = true;
            setTimeout(function () {
              _this2.isUpdated = false, _this2.router.navigate(['/', 'main', 'tabs', 'home']);
            }, 1500);
          }, function (err) {
            _this2.auth.showAlert(err.error.message);
          });
        }
      }]);

      return UpdateRatesPage;
    }();

    UpdateRatesPage.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }];
    };

    UpdateRatesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-update-rates',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./update-rates.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/update-rates/update-rates.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./update-rates.page.scss */
      "./src/app/main/update-rates/update-rates.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])], UpdateRatesPage);
    /***/
  }
}]);
//# sourceMappingURL=update-rates-update-rates-module-es5.js.map