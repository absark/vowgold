function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["monthlyscheme-monthlyscheme-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/monthlyscheme/monthlyscheme.page.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/monthlyscheme/monthlyscheme.page.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainMonthlyschemeMonthlyschemePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/main/tabs/home\" class=\"text-white\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>My Wallet</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"gradient\" style=\"height: 100%;\">\n    <ion-row>\n      <ion-col>\n         <div class=\"bg-white py-2 pl-2 mt-4\" style=\"border-radius: 5px;\">\n          Total Amount: <strong *ngIf=\"result !==0\" class=\"ml-2\"> {{result}}&#8377;</strong>\n         </div>\n    <div class=\"mt-4 mb-2\">I Can Buy</div >\n     <div class=\"bg-white py-2 pl-2 mb-1\" style=\"border-radius: 5px;\">\n     <strong *ngIf=\"gold\" class=\"ml-2\"> Gold: {{gold}}gram  </strong>\n     </div>\n\n      <div class=\"bg-white py-2 pl-2\" style=\"border-radius: 5px;\">\n      <strong *ngIf=\"gold\" class=\"ml-2\"> Silver: {{silver}} gram </strong>\n      </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/main/monthlyscheme/monthlyscheme-routing.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/main/monthlyscheme/monthlyscheme-routing.module.ts ***!
    \********************************************************************/

  /*! exports provided: MonthlyschemePageRoutingModule */

  /***/
  function srcAppMainMonthlyschemeMonthlyschemeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MonthlyschemePageRoutingModule", function () {
      return MonthlyschemePageRoutingModule;
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


    var _monthlyscheme_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./monthlyscheme.page */
    "./src/app/main/monthlyscheme/monthlyscheme.page.ts");

    var routes = [{
      path: '',
      component: _monthlyscheme_page__WEBPACK_IMPORTED_MODULE_3__["MonthlyschemePage"]
    }];

    var MonthlyschemePageRoutingModule = function MonthlyschemePageRoutingModule() {
      _classCallCheck(this, MonthlyschemePageRoutingModule);
    };

    MonthlyschemePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MonthlyschemePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/main/monthlyscheme/monthlyscheme.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/main/monthlyscheme/monthlyscheme.module.ts ***!
    \************************************************************/

  /*! exports provided: MonthlyschemePageModule */

  /***/
  function srcAppMainMonthlyschemeMonthlyschemeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MonthlyschemePageModule", function () {
      return MonthlyschemePageModule;
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


    var _monthlyscheme_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./monthlyscheme-routing.module */
    "./src/app/main/monthlyscheme/monthlyscheme-routing.module.ts");
    /* harmony import */


    var _monthlyscheme_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./monthlyscheme.page */
    "./src/app/main/monthlyscheme/monthlyscheme.page.ts");

    var MonthlyschemePageModule = function MonthlyschemePageModule() {
      _classCallCheck(this, MonthlyschemePageModule);
    };

    MonthlyschemePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _monthlyscheme_routing_module__WEBPACK_IMPORTED_MODULE_5__["MonthlyschemePageRoutingModule"]],
      declarations: [_monthlyscheme_page__WEBPACK_IMPORTED_MODULE_6__["MonthlyschemePage"]]
    })], MonthlyschemePageModule);
    /***/
  },

  /***/
  "./src/app/main/monthlyscheme/monthlyscheme.page.scss":
  /*!************************************************************!*\
    !*** ./src/app/main/monthlyscheme/monthlyscheme.page.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainMonthlyschemeMonthlyschemePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".btn-txt {\n  border: none !important;\n  outline: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tb250aGx5c2NoZW1lL0Q6XFx2b3dHb2xkQXBwL3NyY1xcYXBwXFxtYWluXFxtb250aGx5c2NoZW1lXFxtb250aGx5c2NoZW1lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbWFpbi9tb250aGx5c2NoZW1lL21vbnRobHlzY2hlbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFDQSx3QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tb250aGx5c2NoZW1lL21vbnRobHlzY2hlbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi10eHR7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4iLCIuYnRuLXR4dCB7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/main/monthlyscheme/monthlyscheme.page.ts":
  /*!**********************************************************!*\
    !*** ./src/app/main/monthlyscheme/monthlyscheme.page.ts ***!
    \**********************************************************/

  /*! exports provided: MonthlyschemePage */

  /***/
  function srcAppMainMonthlyschemeMonthlyschemePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MonthlyschemePage", function () {
      return MonthlyschemePage;
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


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/shared.service */
    "./src/app/main/services/shared.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_razorpay_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/razorpay.service */
    "./src/app/services/razorpay.service.ts");

    var MonthlyschemePage = /*#__PURE__*/function () {
      function MonthlyschemePage(auth, razorpay, loading, service) {
        _classCallCheck(this, MonthlyschemePage);

        this.auth = auth;
        this.razorpay = razorpay;
        this.loading = loading;
        this.service = service;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url;
        this.result = 0;
      }

      _createClass(MonthlyschemePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.loading.create({
            message: 'Loading...'
          }).then(function (el) {
            el.present();
          });
          this.rates = this.service.metalRates;
          this.razorpay.paymentDetails(this.auth.user.id).subscribe(function (res) {
            _this.loading.dismiss();

            res.payments.forEach(function (el) {
              return _this.result += el.amount;
            });
            _this.gold = (_this.result / _this.rates[0].gold).toFixed(3);
            _this.silver = (_this.result / _this.rates[0].silver).toFixed(3);
          }, function (err) {
            _this.loading.dismiss();

            _this.auth.showAlert(err.error.message);
          });
        }
      }]);

      return MonthlyschemePage;
    }();

    MonthlyschemePage.ctorParameters = function () {
      return [{
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: src_app_services_razorpay_service__WEBPACK_IMPORTED_MODULE_6__["RazorpayService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
      }, {
        type: _services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]
      }];
    };

    MonthlyschemePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-monthlyscheme',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./monthlyscheme.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/monthlyscheme/monthlyscheme.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./monthlyscheme.page.scss */
      "./src/app/main/monthlyscheme/monthlyscheme.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], src_app_services_razorpay_service__WEBPACK_IMPORTED_MODULE_6__["RazorpayService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"], _services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]])], MonthlyschemePage);
    /***/
  }
}]);
//# sourceMappingURL=monthlyscheme-monthlyscheme-module-es5.js.map