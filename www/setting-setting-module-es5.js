function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["setting-setting-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/setting/setting.page.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/setting/setting.page.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainSettingSettingPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-menu-button slot=\"start\"></ion-menu-button>\n    <ion-title>Setting</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n <ion-grid class=\"gradient\" style=\"height: 100%;\">\n   <ion-row>\n     <ion-col size-sm=\"8\" offset-sm=\"2\" class=\"mt-5\">\n      <ion-item (click)=\"onupdateUser()\" style=\"border-radius: 5px;margin-bottom: 5px;\" *ngIf=\"userRole !== 'admin'\">\n     \n        <ion-icon name=\"person-add-sharp\" slot=\"start\"></ion-icon>\n        <ion-label *ngIf=\"user!==null\" class=\"text-primary\">Update Profile</ion-label>\n      \n       </ion-item>\n       <ion-item (click)=\"onPasswordUpdate()\" style=\"border-radius: 5px;margin-bottom: 5px;\">\n    \n        <ion-icon name=\"cloud-upload-sharp\" slot=\"start\"></ion-icon>\n        <ion-label *ngIf=\"user!==null\" class=\"text-primary\">Change Password</ion-label>\n      \n       </ion-item>\n       \n     </ion-col>\n   </ion-row>\n </ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/setting/update-password/update-password.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/setting/update-password/update-password.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainSettingUpdatePasswordUpdatePasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Update Profile</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-icon name=\"close-outline\" slot=\"icon-only\" (click)=\"onDismiss()\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"gradient\" style=\"height: 100%;\">\n    <ion-row class=\"mt-5\">\n      <ion-col size-sm=\"8\" offset-sm=\"2\">\n        <form  class=\"ion-padding-horizontal\" [formGroup]=\"updatePassword\" (ngSubmit)=\"onSubmit(updatePassword)\">\n          <div class=\"d-flex column\">\n      \n            <div class=\"mb-2\">\n              <input type=\"password\" \n              placeholder=\"Current Password\" \n              class=\"form-control\" \n              formControlName=\"passwordCurrent\"\n              [ngClass]=\"{ 'is-invalid': submitted && updatePassword.get('passwordCurrent').errors }\" \n               >\n               <div *ngIf=\"submitted && updatePassword.get('passwordCurrent').hasError('required')\"\n               class=\"invalid-feedback\">\n                User name required !</div>\n            </div>\n            \n              \n          \n           \n            <div class=\"mb-2\">\n              <input type=\"password\"\n               placeholder=\"Password\" \n               class=\"form-control\"  \n               formControlName=\"password\"\n               [ngClass]=\"{ 'is-invalid': submitted && updatePassword.get('password').errors }\" \n               >\n               <div *ngIf=\"submitted && updatePassword.get('password').errors\" class=\"invalid-feedback\">\n               <div *ngIf=\"updatePassword.get('password').hasError('required')\">\n                   Password is required !\n               </div>\n               <div *ngIf=\" updatePassword.get('password').hasError('minLength')\">\n                 Password must be at least 6 characters !\n               </div>\n              </div>\n            \n            </div>\n\n            <div class=\"mb-2\">\n              <input type=\"password\"\n               placeholder=\"Confirm Password\"\n               class=\"form-control\" \n               formControlName=\"passwordConfirm\"\n               [ngClass]=\"{ 'is-invalid': submitted && updatePassword.get('passwordConfirm').errors }\" \n               >\n               <div\n               *ngIf=\"submitted && updatePassword.get('passwordConfirm').errors\"\n               class=\"invalid-feedback\">\n              <div \n              *ngIf=\"updatePassword.get('passwordConfirm').hasError('required')\">\n               Confirm password is required !\n              </div>\n              <div \n              *ngIf=\" updatePassword.get('passwordConfirm').hasError('mustMatch')\">\n              Confirm password must match !\n              </div>\n             </div>\n            </div>\n      \n      \n            \n           \n            <ion-button type=\"submit\">Update Password</ion-button>\n        \n          </div>\n      \n        </form>\n        <div class=\"alert alert-success mt-2 text-center\" role=\"alert\" *ngIf=\"updated\">\n         Successfully updated !\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/setting/update-user/update-user.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/setting/update-user/update-user.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainSettingUpdateUserUpdateUserComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<style>\n   .icon-color{\n    color: var(--ion-color-primary);\n  }\n  .text{\n    font-size:12px\n  }\n</style>\n\n<ion-header>\n  <ion-toolbar>\n    <ion-title>Update Profile</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-icon name=\"close-outline\" slot=\"icon-only\" (click)=\"onDismiss()\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid style=\"height:100%\" class=\"gradient\">\n    <ion-row>\n      <ion-col size-sm=\"8\" offset-sm=\"2\" class=\"mt-5\">\n        <form  class=\"ion-padding-horizontal\" [formGroup]=\"updateUser\" (ngSubmit)=\"onSubmit(updateUser)\">\n          <div class=\"d-flex column\">\n      \n            <div class=\"mb-2\">\n              <input type=\"text\" \n              placeholder=\"User Name\" \n              class=\"form-control\" \n              formControlName=\"name\"\n              [ngClass]=\"{ 'is-invalid': submitted && updateUser.get('name').errors }\" \n               >\n               <div *ngIf=\"submitted && updateUser.get('name').hasError('required')\"\n               class=\"invalid-feedback\">\n                User name required !</div>\n            </div>\n            \n              \n          \n           \n            <div class=\"mb-2\">\n              <input type=\"text\"\n               placeholder=\"Email Address \" \n               class=\"form-control\"  \n               formControlName=\"email\"\n               [ngClass]=\"{ 'is-invalid': submitted && updateUser.get('email').errors }\" \n               >\n               <div\n                *ngIf=\"submitted && updateUser.get('email').errors\"\n                class=\"invalid-feedback\">\n               <div \n               *ngIf=\"updateUser.get('email').hasError('required')\">\n                Email address is required !\n               </div>\n               <div \n               *ngIf=\" updateUser.get('email').hasError('email')\">\n                Please enter valid email address !\n               </div>\n              </div>\n            \n            \n            </div>\n            <div class=\"mb-2\">\n              <input type=\"number\"\n               placeholder=\"Mobile\"\n               class=\"form-control\" \n               formControlName=\"mobile\"\n               [ngClass]=\"{ 'is-invalid': submitted && updateUser.get('mobile').errors }\" \n               >\n               <div\n               *ngIf=\"submitted && updateUser.get('mobile').errors\"\n               class=\"invalid-feedback\">\n              <div \n              *ngIf=\"updateUser.get('mobile').hasError('required')\">\n              Mobile no. is required !\n              </div>\n              <div \n              *ngIf=\" updateUser.get('mobile').hasError('pattern')\">\n              Mobile no. must be 10 digits !\n              </div>\n             </div>\n            </div>\n            <div class=\"mb-2\">\n              <textarea\n              type=\"text\"\n              formControlName=\"address\"\n              [ngClass]=\"{ 'is-invalid': submitted && updateUser.get('address').errors }\" \n               placeholder=\"Address\"\n               class=\"form-control\">\n              </textarea>\n              <div\n              *ngIf=\"submitted && updateUser.get('address').errors\"\n              class=\"invalid-feedback\">\n             <div \n             *ngIf=\"updateUser.get('address').hasError('required')\">\n              Address is required !\n             </div>\n            \n            </div>\n            </div>\n      \n            <div style=\"border-radius: 5px; background: white;\" class=\"mb-2\">\n              <span for=\"files\" class=\"btn\" (click)=\"pancard.click()\" [ngClass]=\"{'icon-color': panCard_selected}\">Select Pancard</span>\n              <input #pancard style=\"display: none;\" type=\"file\" (change)=\"getPancard($event)\">\n          </div>\n\n          <div style=\"border-radius: 5px; background: white;\">\n            <span for=\"files\" class=\"btn\" (click)=\"adhaarcard.click()\"[ngClass]=\"{'icon-color': adhaarCard_selected}\">Select Adhaarcard</span>\n            <input #adhaarcard style=\"display: none;\" type=\"file\" (change)=\"getAdhaar($event)\">\n          </div>\n           \n            <ion-button type=\"submit\" class=\"mt-3\">Update</ion-button>\n        \n          </div>\n      \n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/main/setting/setting-routing.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/main/setting/setting-routing.module.ts ***!
    \********************************************************/

  /*! exports provided: SettingPageRoutingModule */

  /***/
  function srcAppMainSettingSettingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingPageRoutingModule", function () {
      return SettingPageRoutingModule;
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


    var _setting_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./setting.page */
    "./src/app/main/setting/setting.page.ts");

    var routes = [{
      path: '',
      component: _setting_page__WEBPACK_IMPORTED_MODULE_3__["SettingPage"]
    }];

    var SettingPageRoutingModule = function SettingPageRoutingModule() {
      _classCallCheck(this, SettingPageRoutingModule);
    };

    SettingPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SettingPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/main/setting/setting.module.ts":
  /*!************************************************!*\
    !*** ./src/app/main/setting/setting.module.ts ***!
    \************************************************/

  /*! exports provided: SettingPageModule */

  /***/
  function srcAppMainSettingSettingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingPageModule", function () {
      return SettingPageModule;
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


    var _setting_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./setting-routing.module */
    "./src/app/main/setting/setting-routing.module.ts");
    /* harmony import */


    var _setting_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./setting.page */
    "./src/app/main/setting/setting.page.ts");
    /* harmony import */


    var _update_user_update_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./update-user/update-user.component */
    "./src/app/main/setting/update-user/update-user.component.ts");
    /* harmony import */


    var _update_password_update_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./update-password/update-password.component */
    "./src/app/main/setting/update-password/update-password.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var SettingPageModule = function SettingPageModule() {
      _classCallCheck(this, SettingPageModule);
    };

    SettingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _setting_routing_module__WEBPACK_IMPORTED_MODULE_5__["SettingPageRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]],
      declarations: [_setting_page__WEBPACK_IMPORTED_MODULE_6__["SettingPage"], _update_user_update_user_component__WEBPACK_IMPORTED_MODULE_7__["UpdateUserComponent"], _update_password_update_password_component__WEBPACK_IMPORTED_MODULE_8__["UpdatePasswordComponent"]],
      entryComponents: [_update_user_update_user_component__WEBPACK_IMPORTED_MODULE_7__["UpdateUserComponent"], _update_password_update_password_component__WEBPACK_IMPORTED_MODULE_8__["UpdatePasswordComponent"]]
    })], SettingPageModule);
    /***/
  },

  /***/
  "./src/app/main/setting/setting.page.scss":
  /*!************************************************!*\
    !*** ./src/app/main/setting/setting.page.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainSettingSettingPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vc2V0dGluZy9zZXR0aW5nLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/main/setting/setting.page.ts":
  /*!**********************************************!*\
    !*** ./src/app/main/setting/setting.page.ts ***!
    \**********************************************/

  /*! exports provided: SettingPage */

  /***/
  function srcAppMainSettingSettingPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingPage", function () {
      return SettingPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _update_user_update_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./update-user/update-user.component */
    "./src/app/main/setting/update-user/update-user.component.ts");
    /* harmony import */


    var _update_password_update_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./update-password/update-password.component */
    "./src/app/main/setting/update-password/update-password.component.ts");
    /* harmony import */


    var _services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/shared.service */
    "./src/app/main/services/shared.service.ts");

    var SettingPage = /*#__PURE__*/function () {
      function SettingPage(auth, service, modalCtrl, loading) {
        _classCallCheck(this, SettingPage);

        this.auth = auth;
        this.service = service;
        this.modalCtrl = modalCtrl;
        this.loading = loading;
        this.user = null;
        this.userRole = this.auth.userRole;
      }

      _createClass(SettingPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this = this;

          this.loading.create({
            message: 'Loading...'
          }).then(function (el) {
            el.present();
          });

          if (this.auth.user) {
            this.service.getUser().subscribe(function (res) {
              _this.user = res.user;

              _this.loading.dismiss();
            }, function (err) {
              _this.auth.showAlert(err.error.message);

              _this.loading.dismiss();
            });
          }
        }
      }, {
        key: "onupdateUser",
        value: function onupdateUser() {
          var _this2 = this;

          this.modalCtrl.create({
            component: _update_user_update_user_component__WEBPACK_IMPORTED_MODULE_4__["UpdateUserComponent"],
            componentProps: {
              name: this.user.name,
              email: this.user.email,
              mobile: this.user.mobile,
              address: this.user.address,
              pancard: this.user.panCard,
              adhaarcard: this.user.adhaar
            }
          }).then(function (modal) {
            modal.present();
            return modal.onDidDismiss();
          }).then(function (user) {
            if (user.data !== undefined) {
              _this2.user = Object.assign({}, user.data);
            }
          });
        }
      }, {
        key: "onPasswordUpdate",
        value: function onPasswordUpdate() {
          this.modalCtrl.create({
            component: _update_password_update_password_component__WEBPACK_IMPORTED_MODULE_5__["UpdatePasswordComponent"]
          }).then(function (modal) {
            modal.present();
          });
        }
      }]);

      return SettingPage;
    }();

    SettingPage.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }];
    };

    SettingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-setting',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./setting.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/setting/setting.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./setting.page.scss */
      "./src/app/main/setting/setting.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])], SettingPage);
    /***/
  },

  /***/
  "./src/app/main/setting/update-password/update-password.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/main/setting/update-password/update-password.component.ts ***!
    \***************************************************************************/

  /*! exports provided: UpdatePasswordComponent */

  /***/
  function srcAppMainSettingUpdatePasswordUpdatePasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdatePasswordComponent", function () {
      return UpdatePasswordComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../services/helper */
    "./src/app/services/helper.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _services_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../services/shared.service */
    "./src/app/main/services/shared.service.ts");

    var UpdatePasswordComponent = /*#__PURE__*/function () {
      function UpdatePasswordComponent(auth, modal, formBuilder, service, storage) {
        _classCallCheck(this, UpdatePasswordComponent);

        this.auth = auth;
        this.modal = modal;
        this.formBuilder = formBuilder;
        this.service = service;
        this.storage = storage;
        this.updated = false;
        this.submitted = false;
      }

      _createClass(UpdatePasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.updatePassword = this.formBuilder.group({
            passwordCurrent: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            passwordConfirm: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
          }, {
            validator: Object(_services_helper__WEBPACK_IMPORTED_MODULE_5__["MustMatch"])('password', 'confirmPassword')
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(form) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this3 = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.submitted = true;
                    console.log(this.updatePassword.value); // stop here if form is invalid

                    if (!this.updatePassword.invalid) {
                      _context2.next = 4;
                      break;
                    }

                    return _context2.abrupt("return");

                  case 4:
                    this.service.updatePassword(this.updatePassword.value).subscribe(function (res) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                        var _this4 = this;

                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                this.storage.remove('access_token');
                                this.updated = true;
                                setTimeout(function () {
                                  _this4.updated = false;

                                  _this4.auth.logout();

                                  _this4.modal.dismiss();
                                }, 2000);

                              case 3:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee, this);
                      }));
                    }, function (err) {
                      _this3.auth.showAlert(err.error.message);
                    });

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "onDismiss",
        value: function onDismiss() {
          this.modal.dismiss();
        }
      }]);

      return UpdatePasswordComponent;
    }();

    UpdatePasswordComponent.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]
      }];
    };

    UpdatePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-update-password',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./update-password.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/setting/update-password/update-password.component.html"))["default"]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]])], UpdatePasswordComponent);
    /***/
  },

  /***/
  "./src/app/main/setting/update-user/update-user.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/main/setting/update-user/update-user.component.ts ***!
    \*******************************************************************/

  /*! exports provided: UpdateUserComponent */

  /***/
  function srcAppMainSettingUpdateUserUpdateUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateUserComponent", function () {
      return UpdateUserComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
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
    /*! ../../services/shared.service */
    "./src/app/main/services/shared.service.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var UpdateUserComponent = /*#__PURE__*/function () {
      function UpdateUserComponent(modal, formBuilder, auth, service) {
        _classCallCheck(this, UpdateUserComponent);

        this.modal = modal;
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.service = service;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].url;
        this.submitted = false;
      }

      _createClass(UpdateUserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.updateUser = this.formBuilder.group({
            name: [this.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            email: [this.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            mobile: [this.mobile, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^\d{10}$/)]],
            address: [this.address, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            panCard: [this.pancard, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            adhaar: [this.adhaarcard, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(form) {
          var _this5 = this;

          this.submitted = true;
          if (this.updateUser.invalid) return;
          var userData = new FormData();

          if (typeof this.updateUser.get('panCard').value === 'object' || typeof this.updateUser.get('adhaar').value === 'object') {
            userData.append("name", this.updateUser.value.name);
            userData.append("email", this.updateUser.value.email);
            userData.append("password", this.updateUser.value.password);
            userData.append("passwordConfirm", this.updateUser.value.passwordConfirm);
            userData.append("mobile", this.updateUser.value.mobile);
            userData.append("address", this.updateUser.value.address);
            userData.append("panCard", this.updateUser.value.panCard);
            userData.append("adhaar", this.updateUser.value.adhaar);
            this.service.updateUser(userData).subscribe(function (res) {
              _this5.modal.dismiss(res.user);
            }, function (err) {
              _this5.auth.showAlert(err.error.message);
            });
          } else {
            this.service.updateUser(this.updateUser.value).subscribe(function (res) {
              _this5.modal.dismiss(res.user);
            }, function (err) {
              _this5.auth.showAlert(err.error.message);
            });
          }
        }
      }, {
        key: "getPancard",
        value: function getPancard(event) {
          var file = event.target.files[0];
          this.panCard_selected = file;
          this.updateUser.patchValue({
            panCard: file
          });
        }
      }, {
        key: "getAdhaar",
        value: function getAdhaar(event) {
          var file = event.target.files[0];
          this.adhaarCard_selected = file;
          this.updateUser.patchValue({
            adhaar: file
          });
        }
      }, {
        key: "onDismiss",
        value: function onDismiss() {
          this.modal.dismiss();
        }
      }]);

      return UpdateUserComponent;
    }();

    UpdateUserComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], UpdateUserComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], UpdateUserComponent.prototype, "email", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], UpdateUserComponent.prototype, "mobile", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], UpdateUserComponent.prototype, "address", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], UpdateUserComponent.prototype, "pancard", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], UpdateUserComponent.prototype, "adhaarcard", void 0);
    UpdateUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-update-user',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./update-user.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/setting/update-user/update-user.component.html"))["default"]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]])], UpdateUserComponent);
    /***/
  }
}]);
//# sourceMappingURL=setting-setting-module-es5.js.map