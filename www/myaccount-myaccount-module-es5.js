function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["myaccount-myaccount-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/myaccount/myaccount.page.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/myaccount/myaccount.page.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainMyaccountMyaccountPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-menu-button slot=\"start\"></ion-menu-button>\n    <ion-title>My Account</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-grid class=\"gradient\" style=\"height: 100%; overflow-y: auto;\">\n  \n  <ion-row>\n    <ion-col size-sm=\"8\" offset-sm=\"2\">\n    <!-- <div class=\"d-flex pb-2\" *ngIf=\"!refCode\">\n      <span class=\"pt-2 grow\">Become a Distributor</span>\n      <ion-button shape=\"round\" (click)=\"onRequest()\" *ngIf=\"!isRequested\">\n        Request \n      </ion-button>\n      <ion-button shape=\"round\" class=\"bg\" *ngIf=\"isRequested\">\n       Requested\n      </ion-button>\n    </div> -->\n     <ion-list style=\"padding: 0px;\">\n      <!-- <ion-item class=\"list\" *ngIf=\"refCode\">\n        <ion-icon name=\"qr-code-sharp\" slot=\"start\" class=\"text-white\"></ion-icon>\n        <ion-label *ngIf=\"user!==null\"class=\"ion-text-wrap\" >Refcode:{{user.referralCode}}</ion-label>\n       </ion-item> -->\n\n       <ion-item class=\"list \">\n        <ion-icon name=\"person-sharp\" slot=\"start\" class=\"text-white\"></ion-icon>\n        <ion-label *ngIf=\"user!==null\">{{user.name}}</ion-label>\n       </ion-item>\n\n       <ion-item class=\"list\">\n       <ion-icon name=\"mail\" slot=\"start\" class=\"text-white\"></ion-icon>\n       <ion-label *ngIf=\"user!==null\">{{user.email}}</ion-label>\n      </ion-item>\n\n      <ion-item class=\"list\">\n        <ion-icon name=\"call-sharp\" slot=\"start\" class=\"text-white\"></ion-icon>\n        <ion-label *ngIf=\"user!==null\">{{user.mobile}}</ion-label>\n       </ion-item>\n\n       <ion-item class=\"list\">\n        <ion-icon name=\"home-sharp\" slot=\"start\" class=\"text-white\"></ion-icon>\n        <ion-label *ngIf=\"user!==null\" class=\"ion-text-wrap\">{{user.address}}</ion-label>\n       </ion-item>\n\n       <ion-item class=\"list\">\n        <ion-icon name=\"card-sharp\" slot=\"start\" class=\"text-white\"></ion-icon>\n        <ion-label *ngIf=\"user!==null\">Adhaar Card</ion-label>\n       </ion-item>\n\n        <div>\n          <img *ngIf=\"user!==null\" [src]=\"user.adhaar\" class=\"img\">\n        </div>\n\n\n        <ion-item class=\"list\">\n         <ion-icon name=\"card-sharp\" slot=\"start\" class=\"text-white\"></ion-icon>\n         <ion-label *ngIf=\"user!==null\">PAN Card</ion-label>\n         </ion-item>\n         <div>\n         <img *ngIf=\"user!==null\" [src]=\"user.panCard\" class=\"img\">\n         </div>\n       </ion-list>\n     \n     \n    </ion-col>\n  </ion-row>\n</ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/main/myaccount/myaccount-routing.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/main/myaccount/myaccount-routing.module.ts ***!
    \************************************************************/

  /*! exports provided: MyaccountPageRoutingModule */

  /***/
  function srcAppMainMyaccountMyaccountRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyaccountPageRoutingModule", function () {
      return MyaccountPageRoutingModule;
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


    var _myaccount_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./myaccount.page */
    "./src/app/main/myaccount/myaccount.page.ts");

    var routes = [{
      path: '',
      component: _myaccount_page__WEBPACK_IMPORTED_MODULE_3__["MyaccountPage"]
    }];

    var MyaccountPageRoutingModule = function MyaccountPageRoutingModule() {
      _classCallCheck(this, MyaccountPageRoutingModule);
    };

    MyaccountPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MyaccountPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/main/myaccount/myaccount.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/main/myaccount/myaccount.module.ts ***!
    \****************************************************/

  /*! exports provided: MyaccountPageModule */

  /***/
  function srcAppMainMyaccountMyaccountModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyaccountPageModule", function () {
      return MyaccountPageModule;
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


    var _myaccount_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./myaccount-routing.module */
    "./src/app/main/myaccount/myaccount-routing.module.ts");
    /* harmony import */


    var _myaccount_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./myaccount.page */
    "./src/app/main/myaccount/myaccount.page.ts");

    var MyaccountPageModule = function MyaccountPageModule() {
      _classCallCheck(this, MyaccountPageModule);
    };

    MyaccountPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _myaccount_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyaccountPageRoutingModule"]],
      declarations: [_myaccount_page__WEBPACK_IMPORTED_MODULE_6__["MyaccountPage"]]
    })], MyaccountPageModule);
    /***/
  },

  /***/
  "./src/app/main/myaccount/myaccount.page.scss":
  /*!****************************************************!*\
    !*** ./src/app/main/myaccount/myaccount.page.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainMyaccountMyaccountPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".profile {\n  height: 180px;\n  width: 100%;\n  background-size: cover;\n  background-position: center;\n}\n\n.img {\n  width: 100%;\n  height: 230px;\n  background-position: center;\n  background-size: cover;\n}\n\n.bg {\n  --background: green;\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9teWFjY291bnQvRDpcXHZvd0dvbGRBcHAvc3JjXFxhcHBcXG1haW5cXG15YWNjb3VudFxcbXlhY2NvdW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvbWFpbi9teWFjY291bnQvbXlhY2NvdW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQ0NKOztBRENBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0FDRUo7O0FEQUE7RUFDSSxtQkFBQTtFQUNFLGFBQUE7QUNHTiIsImZpbGUiOiJzcmMvYXBwL21haW4vbXlhY2NvdW50L215YWNjb3VudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZXtcclxuICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuLmltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyMzBweDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuLmJneyBcclxuICAgIC0tYmFja2dyb3VuZDogZ3JlZW47XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbn0iLCIucHJvZmlsZSB7XG4gIGhlaWdodDogMTgwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi5pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMzBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uYmcge1xuICAtLWJhY2tncm91bmQ6IGdyZWVuO1xuICBvdXRsaW5lOiBub25lO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/main/myaccount/myaccount.page.ts":
  /*!**************************************************!*\
    !*** ./src/app/main/myaccount/myaccount.page.ts ***!
    \**************************************************/

  /*! exports provided: MyaccountPage */

  /***/
  function srcAppMainMyaccountMyaccountPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyaccountPage", function () {
      return MyaccountPage;
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


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/shared.service */
    "./src/app/main/services/shared.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var MyaccountPage = /*#__PURE__*/function () {
      function MyaccountPage(auth, loading, service) {
        _classCallCheck(this, MyaccountPage);

        this.auth = auth;
        this.loading = loading;
        this.service = service;
        this.user = null;
      }

      _createClass(MyaccountPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this = this;

          if (this.service.user) {
            this.loading.create({
              message: 'Loading...'
            }).then(function (el) {
              el.present();
            });
            this.service.getUser().subscribe(function (res) {
              _this.loading.dismiss();

              _this.user = res.user;
            }, function (err) {
              _this.loading.dismiss();

              _this.auth.showAlert(err.error.message);
            });
          }
        }
      }]);

      return MyaccountPage;
    }();

    MyaccountPage.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }, {
        type: _services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]
      }];
    };

    MyaccountPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-myaccount',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./myaccount.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/myaccount/myaccount.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./myaccount.page.scss */
      "./src/app/main/myaccount/myaccount.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]])], MyaccountPage);
    /***/
  }
}]);
//# sourceMappingURL=myaccount-myaccount-module-es5.js.map