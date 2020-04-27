function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _setup_setup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./setup/setup.component */
    "./src/app/setup/setup.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _game_interface_game_interface_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./game-interface/game-interface.component */
    "./src/app/game-interface/game-interface.component.ts");
    /* harmony import */


    var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/auth-guard */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth-guard.js");
    /* harmony import */


    var _user_stats_user_stats_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./user-stats/user-stats.component */
    "./src/app/user-stats/user-stats.component.ts");

    var redirectUnauthorizedToLogin = function redirectUnauthorizedToLogin() {
      return Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_5__["redirectUnauthorizedTo"])(['log-in']);
    };

    var routes = [Object.assign({
      path: 'set-up',
      component: _setup_setup_component__WEBPACK_IMPORTED_MODULE_2__["SetupComponent"]
    }, Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_5__["canActivate"])(redirectUnauthorizedToLogin)), {
      path: 'log-in',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, Object.assign({
      path: 'game',
      component: _game_interface_game_interface_component__WEBPACK_IMPORTED_MODULE_4__["GameInterfaceComponent"]
    }, Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_5__["canActivate"])(redirectUnauthorizedToLogin)), Object.assign({
      path: 'userStats',
      component: _user_stats_user_stats_component__WEBPACK_IMPORTED_MODULE_6__["UserStatsComponent"]
    }, Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_5__["canActivate"])(redirectUnauthorizedToLogin)), {
      path: '**',
      redirectTo: 'log-in'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_trivia_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/trivia.service */
    "./src/app/services/trivia.service.ts");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function AppComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Game Set Up");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "arrow_drop_down");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-menu", 7, 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Profile ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "person");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_4_Template_button_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63);

          var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r62.logout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Logout ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "exit_to_app");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

        var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r60.userAvatarURL ? ctx_r60.userAvatarURL : ctx_r60.defaultAvatarURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r60.firstName, " ");
      }
    }

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(authService, triviaService) {
        _classCallCheck(this, AppComponent);

        this.authService = authService;
        this.triviaService = triviaService;
        this.title = 'trivia';
        this.defaultAvatarURL = 'https://i0.wp.com/www.mvhsoracle.com/wp-content/uploads/2018/08/default-avatar.jpg?ssl=1';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.authService.userIdChange.subscribe(function (id) {
            if (id !== '') {
              _this.triviaService.getCurrentUserObservable(id).subscribe(function (user) {
                _this.userAvatarURL = user.photoURL;
              });
            }
          });
          this.authService.loggedInChange.subscribe(function (bool) {
            _this.loggedIn = bool;
          });
          this.authService.firstNameChange.subscribe(function (firstName) {
            _this.firstName = firstName;
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          this.authService.logout();
        }
      }, {
        key: "getDefaultUsername",
        value: function getDefaultUsername(email) {
          return email.replace(/@.+/, '');
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_trivia_service__WEBPACK_IMPORTED_MODULE_2__["TriviaService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 6,
      vars: 1,
      consts: [["color", "accent"], ["id", "toolbar-row"], ["id", "routes", 4, "ngIf"], ["id", "routes"], ["routerLink", "/set-up", "mat-raised-button", "", "color", "primary"], ["mat-raised-button", "", "id", "message", 3, "matMenuTriggerFor"], ["id", "avatar", 3, "src"], [1, "mat-toolbar", "mat-warn"], ["menu", "matMenu"], ["mat-menu-item", "", "routerLink", "/userStats"], ["mat-menu-item", "", 3, "click"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Trivia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_div_4_Template, 18, 3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedIn);
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarRow"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuItem"]],
      styles: ["#toolbar-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n#toolbar-row[_ngcontent-%COMP%]   #routes[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: auto;\n}\n#toolbar-row[_ngcontent-%COMP%]   #routes[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 0 5px;\n}\n#avatar[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  margin-right: 5px;\n  border-radius: 4px;\n}\n#message[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFkeS9EZXYvdHJpdmlhL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUNDRjtBREFFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtBQ0VKO0FEREk7RUFDRSxhQUFBO0FDR047QURFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NGO0FERUE7RUFDRSxlQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdG9vbGJhci1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICNyb3V0ZXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGJ1dHRvbiB7XG4gICAgICBtYXJnaW46IDAgNXB4O1xuICAgIH1cbiAgfVxufVxuXG4jYXZhdGFyIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuI21lc3NhZ2Uge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59IiwiI3Rvb2xiYXItcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuI3Rvb2xiYXItcm93ICNyb3V0ZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiBhdXRvO1xufVxuI3Rvb2xiYXItcm93ICNyb3V0ZXMgYnV0dG9uIHtcbiAgbWFyZ2luOiAwIDVweDtcbn1cblxuI2F2YXRhciB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbiNtZXNzYWdlIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _services_trivia_service__WEBPACK_IMPORTED_MODULE_2__["TriviaService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _setup_setup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./setup/setup.component */
    "./src/app/setup/setup.component.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _setup_same_amount_directive__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./setup/same-amount.directive */
    "./src/app/setup/same-amount.directive.ts");
    /* harmony import */


    var _setup_player_dialog_player_dialog_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./setup/player-dialog/player-dialog.component */
    "./src/app/setup/player-dialog/player-dialog.component.ts");
    /* harmony import */


    var _game_interface_game_interface_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./game-interface/game-interface.component */
    "./src/app/game-interface/game-interface.component.ts");
    /* harmony import */


    var _user_stats_user_stats_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./user-stats/user-stats.component */
    "./src/app/user-stats/user-stats.component.ts");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_22__["MatListModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_32__["MatDividerModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__["MatProgressSpinnerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__["MatExpansionModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__["MatIconModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_17__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_19__["environment"].firebase), _angular_fire_auth__WEBPACK_IMPORTED_MODULE_18__["AngularFireAuthModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_16__["AngularFirestoreModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_20__["FontAwesomeModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__["MatToolbarModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_33__["MatSliderModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _setup_setup_component__WEBPACK_IMPORTED_MODULE_5__["SetupComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"], _setup_same_amount_directive__WEBPACK_IMPORTED_MODULE_28__["SameAmountValidatortDirective"], _setup_player_dialog_player_dialog_component__WEBPACK_IMPORTED_MODULE_29__["PlayerDialogComponent"], _game_interface_game_interface_component__WEBPACK_IMPORTED_MODULE_30__["GameInterfaceComponent"], _user_stats_user_stats_component__WEBPACK_IMPORTED_MODULE_31__["UserStatsComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_22__["MatListModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_32__["MatDividerModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__["MatProgressSpinnerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__["MatExpansionModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__["MatIconModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_17__["AngularFireModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_18__["AngularFireAuthModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_16__["AngularFirestoreModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_20__["FontAwesomeModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__["MatToolbarModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_33__["MatSliderModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _setup_setup_component__WEBPACK_IMPORTED_MODULE_5__["SetupComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"], _setup_same_amount_directive__WEBPACK_IMPORTED_MODULE_28__["SameAmountValidatortDirective"], _setup_player_dialog_player_dialog_component__WEBPACK_IMPORTED_MODULE_29__["PlayerDialogComponent"], _game_interface_game_interface_component__WEBPACK_IMPORTED_MODULE_30__["GameInterfaceComponent"], _user_stats_user_stats_component__WEBPACK_IMPORTED_MODULE_31__["UserStatsComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_22__["MatListModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_32__["MatDividerModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__["MatProgressSpinnerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__["MatExpansionModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__["MatIconModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_17__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_19__["environment"].firebase), _angular_fire_auth__WEBPACK_IMPORTED_MODULE_18__["AngularFireAuthModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_16__["AngularFirestoreModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_20__["FontAwesomeModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__["MatToolbarModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_33__["MatSliderModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/game-interface/game-interface.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/game-interface/game-interface.component.ts ***!
    \************************************************************/

  /*! exports provided: GameInterfaceComponent */

  /***/
  function srcAppGameInterfaceGameInterfaceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameInterfaceComponent", function () {
      return GameInterfaceComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_trivia_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/trivia.service */
    "./src/app/services/trivia.service.ts");
    /* harmony import */


    var _services_send_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/send-data.service */
    "./src/app/services/send-data.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function GameInterfaceComponent_button_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameInterfaceComponent_button_11_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47);

          var i_r45 = ctx.index;

          var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r46.selectAnswer(i_r45);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var answer_r44 = ctx.$implicit;
        var i_r45 = ctx.index;

        var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r42.selectable)("id", "answer" + i_r45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", answer_r44, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function GameInterfaceComponent_mat_card_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mat-slider", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-slider", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r48 = ctx.$implicit;
        var i_r49 = ctx.index;

        var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", user_r48["displayName"] ? user_r48["displayName"] : user_r48["uid"], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("className", ctx_r43.users.length > 1 ? ctx_r43.isWinning(i_r49) === "W" ? "winning" : ctx_r43.isWinning(i_r49) === "L" ? "losing" : "tie" : "hide")("innerHTML", ctx_r43.isWinning(i_r49) === "W" ? "WINNING" : ctx_r43.isWinning(i_r49) === "L" ? "LOSING" : "TIED", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r43.score[i_r49], " CORRECT | ", ctx_r43.wrong[i_r49], " WRONG");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("max", ctx_r43.questions.length / ctx_r43.users.length);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r43.score[i_r49]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("max", ctx_r43.questions.length / ctx_r43.users.length);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r43.wrong[i_r49]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);
      }
    }

    var _c0 = function _c0(a1) {
      return {
        "game-main-card": true,
        "hide": a1
      };
    };

    var _c1 = function _c1(a1) {
      return {
        "user-card": true,
        "hide": a1
      };
    };

    var _c2 = function _c2(a1) {
      return {
        "finalMessage": true,
        "hide": a1
      };
    };

    var _c3 = function _c3(a1) {
      return {
        "resultButtons": true,
        "hide": a1
      };
    };

    var GameInterfaceComponent =
    /*#__PURE__*/
    function () {
      function GameInterfaceComponent(triviaService, sendDataService, router) {
        _classCallCheck(this, GameInterfaceComponent);

        this.triviaService = triviaService;
        this.sendDataService = sendDataService;
        this.router = router;
        this.delayTime = 2000;
        this.selectable = true;
        this.defaultAvatarURL = 'https://i0.wp.com/www.mvhsoracle.com/wp-content/uploads/2018/08/default-avatar.jpg?ssl=1';
        this.currentQuestions = {
          "question": "",
          "answers": []
        };
        this.users = [];
        this.questions = [];
        this.score = [];
        this.wrong = [];
        this.count = 0;
      }

      _createClass(GameInterfaceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.updateData();
          this.changeQuestion();
        }
      }, {
        key: "isWinning",
        value: function isWinning(userIndex) {
          var winning = "L";
          var highestScore = 0;
          this.score.forEach(function (v, i) {
            if (userIndex !== i && v > highestScore) {
              highestScore = v;
            }
          });

          if (this.score[userIndex] > highestScore && this.score[userIndex] > 0) {
            winning = "W";
          } else if (this.score[userIndex] >= highestScore) {
            winning = "T";
          }

          return winning;
        }
      }, {
        key: "finalWinner",
        value: function finalWinner() {
          var _this2 = this;

          var winners = [];
          var highestScore = 0;
          this.score.forEach(function (v, i) {
            if (v > highestScore && v > 0) {
              winners = [_this2.users[i]['displayName'] ? _this2.users[i]['displayName'] : _this2.users[i]['uid']];
              highestScore = v;
            } else if (v >= highestScore && highestScore > 0) {
              winners.push(_this2.users[i]['displayName'] ? _this2.users[i]['displayName'] : _this2.users[i]['uid']);
              highestScore = v;
            }
          });
          return "".concat(winners.length > 1 ? 'Winners' : 'Winner', ": ").concat(winners.length > 0 ? winners.toString() : 'NO ONE');
        }
      }, {
        key: "updateData",
        value: function updateData() {
          var _this3 = this;

          var dataObject = this.sendDataService.getGameData();
          this.questions = dataObject["questions"];
          this.users = dataObject["users"];
          this.users.forEach(function (v) {
            if (typeof v !== 'object') {
              _this3.users = [];
              _this3.score = [];
              _this3.wrong = [];
            } else {
              _this3.score.push(0);

              _this3.wrong.push(0);
            }
          });
        }
      }, {
        key: "changeQuestion",
        value: function changeQuestion() {
          if (this.questions.length > 0 && this.users.length > 0) {
            this.currentQuestions["question"] = this.questions[this.count]["question"];
            this.currentQuestions["answers"] = this.questions[this.count]["incorrect_answers"].concat(this.questions[this.count]["correct_answer"]);

            if (this.currentQuestions["answers"].length > 2) {
              // Randomize the questions
              for (var i = this.currentQuestions["answers"].length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = this.currentQuestions["answers"][i];
                this.currentQuestions["answers"][i] = this.currentQuestions["answers"][j];
                this.currentQuestions["answers"][j] = temp;
              }
            } else if (this.currentQuestions["answers"][0] === "False") {
              // Make "True" always be on top.
              var _temp = this.currentQuestions["answers"][0];
              this.currentQuestions["answers"][0] = this.currentQuestions["answers"][1];
              this.currentQuestions["answers"][1] = _temp;
            }
          } else {
            this.updateData();

            if (this.questions.length > 0 && this.users.length > 0) {
              this.changeQuestion();
            } else {
              this.router.navigate(['/set-up']);
            }
          }
        }
      }, {
        key: "selectAnswer",
        value: function selectAnswer(answerId) {
          var _this4 = this;

          if (this.count >= this.questions.length) return;
          this.selectable = false;
          var correctId = "";
          this.currentQuestions["answers"].forEach(function (v, i) {
            if (v === _this4.questions[_this4.count]["correct_answer"]) {
              correctId = "answer" + i;
            }
          });
          document.getElementById(correctId) ? document.getElementById(correctId).classList.add("correct") : '';
          var correctCategory = -1;
          this.users[this.count % this.users.length]['categoryAnswers'].forEach(function (v, i) {
            if (v["category"] === _this4.questions[_this4.count]["category"] && correctCategory === -1) {
              correctCategory = i;
            }
          });

          if (this.currentQuestions["answers"][answerId] !== this.questions[this.count]["correct_answer"]) {
            this.wrong[this.count % this.users.length]++;
            document.getElementById('answer' + answerId) ? document.getElementById('answer' + answerId).classList.add("incorrect") : '';

            if (correctCategory > -1) {
              this.users[this.count % this.users.length]['categoryAnswers'][correctCategory]["answeredIncorrectly"]++;
            }
          } else {
            this.score[this.count % this.users.length]++;

            if (correctCategory > -1) {
              this.users[this.count % this.users.length]['categoryAnswers'][correctCategory]["answeredCorrectly"]++;
            }
          }

          setTimeout(function () {
            document.getElementById(correctId) ? document.getElementById(correctId).classList.remove("correct") : '';
            document.getElementById('answer' + answerId) ? document.getElementById('answer' + answerId).classList.remove("incorrect") : '';

            if (++_this4.count < _this4.questions.length) {
              _this4.changeQuestion();
            } else {
              _this4.currentQuestions["question"] = "";
              _this4.currentQuestions["answers"] = []; //End of the game. Scores all in
              //console.log(this.score)

              _this4.users.forEach(function (v, i) {
                if (_this4.isWinning(i) === "W" && _this4.users.length > 1) {
                  _this4.users[i]['totalGamesWon']++;
                } else if (_this4.isWinning(i) === "L" && _this4.users.length > 1) {
                  _this4.users[i]['totalGamesLost']++;
                } else if (_this4.isWinning(i) === "T" && _this4.users.length > 1 && _this4.score[i] > 0) {
                  _this4.users[i]['totalGamesWon']++;
                }

                _this4.users[i]['totalQuestionsAnswered'] += _this4.questions.length / _this4.users.length;
                _this4.users[i]['totalQuestionsAnsweredCorrectly'] += _this4.score[i];
                _this4.users[i]['totalQuestionsAnsweredIncorrectly'] += _this4.wrong[i];
                _this4.users[i]['totalGamesPlayed']++;
              });

              _this4.triviaService.updateUserStats(_this4.users);
            }

            _this4.selectable = true;
          }, this.delayTime);
        }
      }]);

      return GameInterfaceComponent;
    }();

    GameInterfaceComponent.ɵfac = function GameInterfaceComponent_Factory(t) {
      return new (t || GameInterfaceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_trivia_service__WEBPACK_IMPORTED_MODULE_1__["TriviaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_send_data_service__WEBPACK_IMPORTED_MODULE_2__["SendDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    GameInterfaceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GameInterfaceComponent,
      selectors: [["app-game-interface"]],
      decls: 25,
      vars: 23,
      consts: [[3, "ngClass"], [3, "src"], [3, "innerHTML"], [1, "game-title-card"], ["mat-button", "", 3, "disabled", "id", "click", 4, "ngFor", "ngForOf"], [1, "progress-card"], [1, "progress-title"], ["min", "0", "step", "1", 3, "max", "value", "disabled"], ["class", "user-progress-card", 4, "ngFor", "ngForOf"], ["mat-button", "", "routerLink", "/set-up"], ["mat-button", "", "routerLink", "/userStats"], ["mat-button", "", 3, "disabled", "id", "click"], [1, "user-progress-card"], [1, "user-progress-title"], [3, "className", "innerHTML"], [1, "info"], ["min", "0", "step", "1", 1, "correct-slider", 3, "max", "value", "disabled"], ["min", "0", "step", "1", 1, "incorrect-slider", 3, "max", "value", "disabled"]],
      template: function GameInterfaceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, GameInterfaceComponent_button_11_Template, 2, 3, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card-title", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "mat-slider", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, GameInterfaceComponent_mat_card_19_Template, 8, 11, "mat-card", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-card-actions", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Play Again");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Open Stats");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx.count >= ctx.questions.length));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c1, ctx.users.length <= 1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.users.length > 0 ? ctx.users[ctx.count % ctx.users.length]["photoURL"] ? ctx.users[ctx.count % ctx.users.length]["photoURL"] : ctx.defaultAvatarURL : "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.users.length > 0 ? ctx.users[ctx.count % ctx.users.length]["displayName"] ? ctx.users[ctx.count % ctx.users.length]["displayName"] : ctx.users[ctx.count % ctx.users.length]["uid"] : "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.currentQuestions["question"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.currentQuestions["answers"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.count, "/", ctx.questions.length, " Questions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("max", ctx.questions.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.count);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c2, ctx.count < ctx.questions.length || ctx.users.length <= 1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.finalWinner());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c3, ctx.count < ctx.questions.length));
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardActions"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__["MatSlider"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
      styles: ["mat-card-header[_ngcontent-%COMP%], mat-card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n}\n\nmat-card[_ngcontent-%COMP%], mat-card-actions[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n\n  .mat-slider-track-fill,   .mat-slider-thumb {\n  background-color: #4ec5c1 !important;\n}\n\n  .mat-slider-track-background {\n  background-color: #fff !important;\n}\n\n  .mat-slider.mat-slider-horizontal .mat-slider-track-wrapper {\n  height: 8px;\n  border-radius: 8px;\n}\n\n  .mat-slider.mat-slider-horizontal .mat-slider-track-background,   .mat-slider.mat-slider-horizontal .mat-slider-track-fill {\n  height: 100%;\n}\n\n  .mat-accent .mat-slider-thumb {\n  height: 40px;\n  width: 40px;\n  background-color: #4ec5c1;\n  border: solid 2px #422781;\n  border-color: #422781 !important;\n  bottom: -23px;\n  right: -20px;\n}\n\n.progress-card[_ngcontent-%COMP%]   mat-slider[_ngcontent-%COMP%] {\n  min-width: 100%;\n}\n\n.progress-title[_ngcontent-%COMP%] {\n  margin: 0;\n  margin-bottom: -10px;\n  margin-left: 10px;\n}\n\n.user-progress-card[_ngcontent-%COMP%] {\n  padding: 30px;\n}\n\n.user-progress-card[_ngcontent-%COMP%], .user-progress-card[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%] {\n  background-color: #fff;\n  color: #252525;\n  font-size: 18px;\n}\n\n  .user-progress-card .mat-slider-track-background {\n  background-color: #ddd !important;\n}\n\n  .user-progress-card .mat-slider.mat-slider-horizontal .mat-slider-track-wrapper {\n  height: 4px;\n  border-radius: 4px;\n}\n\n  .user-progress-card .mat-accent .mat-slider-thumb {\n  height: 30px;\n  width: 30px;\n  border: solid 2px #fff;\n  border-color: #fff !important;\n  bottom: -16px;\n  right: -15px;\n}\n\n  .user-progress-card .correct-slider .mat-slider-thumb,   .user-progress-card .correct-slider .mat-slider-track-fill {\n  background-color: #49a549 !important;\n}\n\n  .user-progress-card .incorrect-slider .mat-slider-thumb,   .user-progress-card .incorrect-slider .mat-slider-track-fill {\n  background-color: #ec576b !important;\n}\n\n  .user-progress-card .mat-slider-horizontal {\n  height: 0;\n  padding: 0;\n}\n\n  .user-progress-card .mat-slider-horizontal .mat-slider-wrapper {\n  top: 0;\n}\n\nspan.tie[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #aaa;\n  margin-left: 10px;\n}\n\nspan.winning[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #49a549;\n  margin-left: 10px;\n}\n\nspan.losing[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #ec576b;\n  margin-left: 10px;\n}\n\nspan.info[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #aaa;\n  margin-left: 10px;\n}\n\n.hide[_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n.resultButtons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.resultButtons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child {\n  background-color: #fff !important;\n  color: #252525;\n  padding: 10px 30px;\n}\n\n.resultButtons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child {\n  background-color: #49a549 !important;\n  color: #fff !important;\n  padding: 10px 30px;\n}\n\n.finalMessage[_ngcontent-%COMP%] {\n  background-color: #49a549;\n  color: #fff;\n  text-align: center;\n}\n\n.user-card[_ngcontent-%COMP%] {\n  background-color: #ec576b;\n  color: #fff;\n  padding: 20px;\n}\n\n.user-card[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%] {\n  margin: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.user-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  height: 50px;\n  margin-right: 10px;\n}\n\n.game-title-card[_ngcontent-%COMP%] {\n  background-color: #4ec5c1;\n  color: #252525;\n  margin-bottom: 50px;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n\nbutton[_ngcontent-%COMP%], button[_ngcontent-%COMP%]:disabled {\n  background-color: #e5e337 !important;\n  color: #252525 !important;\n  margin: 3px !important;\n  opacity: 1;\n}\n\nbutton.incorrect[_ngcontent-%COMP%]:disabled {\n  background-color: #ec576b !important;\n  color: #fff !important;\n  transition: background-color 0.05s;\n  transition: color 0.2s;\n}\n\nbutton.correct[_ngcontent-%COMP%]:disabled {\n  background-color: #49a549 !important;\n  color: #fff !important;\n  transition: background-color 0.05s;\n  transition: color 0.2s;\n}\n\n@media screen and (min-width: 1100px) {\n  mat-card[_ngcontent-%COMP%], mat-card-actions[_ngcontent-%COMP%] {\n    padding: 60px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFkeS9EZXYvdHJpdmlhL3NyYy9hcHAvZ2FtZS1pbnRlcmZhY2UvZ2FtZS1pbnRlcmZhY2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2dhbWUtaW50ZXJmYWNlL2dhbWUtaW50ZXJmYWNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNDRDs7QURDQTtFQUVDLFlBQUE7QUNDRDs7QURLQTtFQUNDLG9DQUFBO0FDRkQ7O0FESUE7RUFDQyxpQ0FBQTtBQ0REOztBREdBO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0FDQUQ7O0FERUE7O0VBRUMsWUFBQTtBQ0NEOztBRENBO0VBQ0MsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ0VEOztBREFBO0VBQ0MsZUFBQTtBQ0dEOztBRERBO0VBQ0MsU0FBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUNJRDs7QURFQTtFQUNDLGFBQUE7QUNDRDs7QURDQTtFQUNDLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNFRDs7QURBQTtFQUNDLGlDQUFBO0FDR0Q7O0FEREE7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7QUNJRDs7QURGQTtFQUNDLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDS0Q7O0FESEE7RUFDQyxvQ0FBQTtBQ01EOztBREpBO0VBQ0Msb0NBQUE7QUNPRDs7QURMQTtFQUNDLFNBQUE7RUFDQSxVQUFBO0FDUUQ7O0FETkE7RUFDQyxNQUFBO0FDU0Q7O0FETkE7RUFDQyxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDU0Q7O0FEUEE7RUFDQyxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDVUQ7O0FEUkE7RUFDQyxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDV0Q7O0FEVEE7RUFDQyxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDWUQ7O0FEVEE7RUFDQyx3QkFBQTtBQ1lEOztBRExBO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ1FEOztBRE5BO0VBQ0MsaUNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNTRDs7QURQQTtFQUNDLG9DQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ1VEOztBRFJBO0VBQ0MseUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNXRDs7QURSQTtFQUNDLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNXRDs7QURUQTtFQUNDLFNBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ1lEOztBRFZBO0VBQ0MsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNhRDs7QURWQTtFQUNDLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDYUQ7O0FEVkE7RUFDQyxZQUFBO0FDYUQ7O0FEWEE7RUFDQyxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0FDY0Q7O0FEWkE7RUFDQyxvQ0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0NBQUE7RUFDQSxzQkFBQTtBQ2VEOztBRGJBO0VBQ0Msb0NBQUE7RUFDQSxzQkFBQTtFQUNBLGtDQUFBO0VBQ0Esc0JBQUE7QUNnQkQ7O0FEYkE7RUFDQztJQUNDLGFBQUE7RUNnQkE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2dhbWUtaW50ZXJmYWNlL2dhbWUtaW50ZXJmYWNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQtaGVhZGVyLCBtYXQtY2FyZC1hY3Rpb25zIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxubWF0LWNhcmQsIG1hdC1jYXJkLWFjdGlvbnMge1xuXHQvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjODg4O1xuXHRtYXJnaW46IDIwcHg7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbjo6bmctZGVlcCAubWF0LXNsaWRlci10cmFjay1maWxsLCA6Om5nLWRlZXAgLm1hdC1zbGlkZXItdGh1bWIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNGVjNWMxICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAubWF0LXNsaWRlci5tYXQtc2xpZGVyLWhvcml6b250YWwgLm1hdC1zbGlkZXItdHJhY2std3JhcHBlciB7XG5cdGhlaWdodDogOHB4O1xuXHRib3JkZXItcmFkaXVzOiA4cHg7XG59XG46Om5nLWRlZXAgLm1hdC1zbGlkZXIubWF0LXNsaWRlci1ob3Jpem9udGFsIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmQsXG46Om5nLWRlZXAgLm1hdC1zbGlkZXIubWF0LXNsaWRlci1ob3Jpem9udGFsIC5tYXQtc2xpZGVyLXRyYWNrLWZpbGwge1xuXHRoZWlnaHQ6IDEwMCU7XG59XG46Om5nLWRlZXAgLm1hdC1hY2NlbnQgLm1hdC1zbGlkZXItdGh1bWIge1xuXHRoZWlnaHQ6IDQwcHg7XG5cdHdpZHRoOiA0MHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNGVjNWMxO1xuXHRib3JkZXI6IHNvbGlkIDJweCAjNDIyNzgxO1xuXHRib3JkZXItY29sb3I6ICM0MjI3ODEgIWltcG9ydGFudDtcblx0Ym90dG9tOiAtMjNweDtcblx0cmlnaHQ6IC0yMHB4O1xufVxuLnByb2dyZXNzLWNhcmQgbWF0LXNsaWRlciB7XG5cdG1pbi13aWR0aDogMTAwJTtcbn1cbi5wcm9ncmVzcy10aXRsZSB7XG5cdG1hcmdpbjogMDtcblx0bWFyZ2luLWJvdHRvbTogLTEwcHg7XG5cdG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4udXNlci1wcm9ncmVzcy1jYXJkIHtcblx0cGFkZGluZzogMzBweDtcbn1cbi51c2VyLXByb2dyZXNzLWNhcmQsIC51c2VyLXByb2dyZXNzLWNhcmQgLm1hdC1jYXJkLXRpdGxlIHtcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblx0Y29sb3I6ICMyNTI1MjU7XG5cdGZvbnQtc2l6ZTogMThweDtcbn1cbjo6bmctZGVlcCAudXNlci1wcm9ncmVzcy1jYXJkIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmQge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLnVzZXItcHJvZ3Jlc3MtY2FyZCAubWF0LXNsaWRlci5tYXQtc2xpZGVyLWhvcml6b250YWwgLm1hdC1zbGlkZXItdHJhY2std3JhcHBlciB7XG5cdGhlaWdodDogNHB4O1xuXHRib3JkZXItcmFkaXVzOiA0cHg7XG59XG46Om5nLWRlZXAgLnVzZXItcHJvZ3Jlc3MtY2FyZCAubWF0LWFjY2VudCAubWF0LXNsaWRlci10aHVtYiB7XG5cdGhlaWdodDogMzBweDtcblx0d2lkdGg6IDMwcHg7XG5cdGJvcmRlcjogc29saWQgMnB4ICNmZmY7XG5cdGJvcmRlci1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuXHRib3R0b206IC0xNnB4O1xuXHRyaWdodDogLTE1cHg7XG59XG46Om5nLWRlZXAgLnVzZXItcHJvZ3Jlc3MtY2FyZCAuY29ycmVjdC1zbGlkZXIgLm1hdC1zbGlkZXItdGh1bWIsIDo6bmctZGVlcCAudXNlci1wcm9ncmVzcy1jYXJkIC5jb3JyZWN0LXNsaWRlciAubWF0LXNsaWRlci10cmFjay1maWxsIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzQ5YTU0OSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC51c2VyLXByb2dyZXNzLWNhcmQgLmluY29ycmVjdC1zbGlkZXIgLm1hdC1zbGlkZXItdGh1bWIsIDo6bmctZGVlcCAudXNlci1wcm9ncmVzcy1jYXJkIC5pbmNvcnJlY3Qtc2xpZGVyIC5tYXQtc2xpZGVyLXRyYWNrLWZpbGwge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZWM1NzZiICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLnVzZXItcHJvZ3Jlc3MtY2FyZCAubWF0LXNsaWRlci1ob3Jpem9udGFsIHtcblx0aGVpZ2h0OiAwO1xuXHRwYWRkaW5nOiAwO1xufVxuOjpuZy1kZWVwIC51c2VyLXByb2dyZXNzLWNhcmQgLm1hdC1zbGlkZXItaG9yaXpvbnRhbCAubWF0LXNsaWRlci13cmFwcGVyIHtcblx0dG9wOiAwO1xufVxuXG5zcGFuLnRpZSB7XG5cdGZvbnQtc2l6ZTogMTRweDtcblx0Y29sb3I6ICNhYWE7XG5cdG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuc3Bhbi53aW5uaW5nIHtcblx0Zm9udC1zaXplOiAxNHB4O1xuXHRjb2xvcjogIzQ5YTU0OTtcblx0bWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5zcGFuLmxvc2luZyB7XG5cdGZvbnQtc2l6ZTogMTRweDtcblx0Y29sb3I6ICNlYzU3NmI7XG5cdG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuc3Bhbi5pbmZvIHtcblx0Zm9udC1zaXplOiAxMnB4O1xuXHRjb2xvcjogI2FhYTtcblx0bWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5oaWRlIHtcblx0ZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi5yZXN1bHRCdXR0b25zIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucmVzdWx0QnV0dG9ucyBidXR0b246bGFzdC1jaGlsZCB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcblx0Y29sb3I6ICMyNTI1MjU7XG5cdHBhZGRpbmc6IDEwcHggMzBweDtcbn1cbi5yZXN1bHRCdXR0b25zIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XG5cdGJhY2tncm91bmQtY29sb3I6ICM0OWE1NDkgIWltcG9ydGFudDtcblx0Y29sb3I6ICNmZmYgIWltcG9ydGFudDtcblx0cGFkZGluZzogMTBweCAzMHB4O1xufVxuLmZpbmFsTWVzc2FnZSB7XG5cdGJhY2tncm91bmQtY29sb3I6ICM0OWE1NDk7XG5cdGNvbG9yOiAjZmZmO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi51c2VyLWNhcmQge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZWM1NzZiO1xuXHRjb2xvcjogI2ZmZjtcblx0cGFkZGluZzogMjBweDtcbn1cbi51c2VyLWNhcmQgbWF0LWNhcmQtdGl0bGUge1xuXHRtYXJnaW46IDA7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnVzZXItY2FyZCBpbWcge1xuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRoZWlnaHQ6IDUwcHg7XG5cdG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmdhbWUtdGl0bGUtY2FyZCB7XG5cdGJhY2tncm91bmQtY29sb3I6ICM0ZWM1YzE7XG5cdGNvbG9yOiAjMjUyNTI1O1xuXHRtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG5idXR0b246aG92ZXIge1xuXHRvcGFjaXR5OiAuODtcbn1cbmJ1dHRvbiwgYnV0dG9uOmRpc2FibGVkIHtcblx0YmFja2dyb3VuZC1jb2xvcjogI2U1ZTMzNyAhaW1wb3J0YW50O1xuXHRjb2xvcjogIzI1MjUyNSAhaW1wb3J0YW50O1xuXHRtYXJnaW46IDNweCAhaW1wb3J0YW50O1xuXHRvcGFjaXR5OiAxO1xufVxuYnV0dG9uLmluY29ycmVjdDpkaXNhYmxlZCB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNlYzU3NmIgIWltcG9ydGFudDtcblx0Y29sb3I6ICNmZmYgIWltcG9ydGFudDtcblx0dHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjA1cztcblx0dHJhbnNpdGlvbjogY29sb3IgMC4ycztcbn1cbmJ1dHRvbi5jb3JyZWN0OmRpc2FibGVkIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzQ5YTU0OSAhaW1wb3J0YW50O1xuXHRjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuXHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMDVzO1xuXHR0cmFuc2l0aW9uOiBjb2xvciAwLjJzO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMTAwcHgpIHtcblx0bWF0LWNhcmQsIG1hdC1jYXJkLWFjdGlvbnMge1xuXHRcdHBhZGRpbmc6IDYwcHhcblx0fVxufSIsIm1hdC1jYXJkLWhlYWRlciwgbWF0LWNhcmQtYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxubWF0LWNhcmQsIG1hdC1jYXJkLWFjdGlvbnMge1xuICBtYXJnaW46IDIwcHg7XG59XG5cbjo6bmctZGVlcCAubWF0LXNsaWRlci10cmFjay1maWxsLCA6Om5nLWRlZXAgLm1hdC1zbGlkZXItdGh1bWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGVjNWMxICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm1hdC1zbGlkZXIubWF0LXNsaWRlci1ob3Jpem9udGFsIC5tYXQtc2xpZGVyLXRyYWNrLXdyYXBwZXIge1xuICBoZWlnaHQ6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG46Om5nLWRlZXAgLm1hdC1zbGlkZXIubWF0LXNsaWRlci1ob3Jpem9udGFsIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmQsXG46Om5nLWRlZXAgLm1hdC1zbGlkZXIubWF0LXNsaWRlci1ob3Jpem9udGFsIC5tYXQtc2xpZGVyLXRyYWNrLWZpbGwge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbjo6bmctZGVlcCAubWF0LWFjY2VudCAubWF0LXNsaWRlci10aHVtYiB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZWM1YzE7XG4gIGJvcmRlcjogc29saWQgMnB4ICM0MjI3ODE7XG4gIGJvcmRlci1jb2xvcjogIzQyMjc4MSAhaW1wb3J0YW50O1xuICBib3R0b206IC0yM3B4O1xuICByaWdodDogLTIwcHg7XG59XG5cbi5wcm9ncmVzcy1jYXJkIG1hdC1zbGlkZXIge1xuICBtaW4td2lkdGg6IDEwMCU7XG59XG5cbi5wcm9ncmVzcy10aXRsZSB7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLWJvdHRvbTogLTEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4udXNlci1wcm9ncmVzcy1jYXJkIHtcbiAgcGFkZGluZzogMzBweDtcbn1cblxuLnVzZXItcHJvZ3Jlc3MtY2FyZCwgLnVzZXItcHJvZ3Jlc3MtY2FyZCAubWF0LWNhcmQtdGl0bGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogIzI1MjUyNTtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG46Om5nLWRlZXAgLnVzZXItcHJvZ3Jlc3MtY2FyZCAubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLnVzZXItcHJvZ3Jlc3MtY2FyZCAubWF0LXNsaWRlci5tYXQtc2xpZGVyLWhvcml6b250YWwgLm1hdC1zbGlkZXItdHJhY2std3JhcHBlciB7XG4gIGhlaWdodDogNHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbjo6bmctZGVlcCAudXNlci1wcm9ncmVzcy1jYXJkIC5tYXQtYWNjZW50IC5tYXQtc2xpZGVyLXRodW1iIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbiAgYm9yZGVyOiBzb2xpZCAycHggI2ZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGJvdHRvbTogLTE2cHg7XG4gIHJpZ2h0OiAtMTVweDtcbn1cblxuOjpuZy1kZWVwIC51c2VyLXByb2dyZXNzLWNhcmQgLmNvcnJlY3Qtc2xpZGVyIC5tYXQtc2xpZGVyLXRodW1iLCA6Om5nLWRlZXAgLnVzZXItcHJvZ3Jlc3MtY2FyZCAuY29ycmVjdC1zbGlkZXIgLm1hdC1zbGlkZXItdHJhY2stZmlsbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0OWE1NDkgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC51c2VyLXByb2dyZXNzLWNhcmQgLmluY29ycmVjdC1zbGlkZXIgLm1hdC1zbGlkZXItdGh1bWIsIDo6bmctZGVlcCAudXNlci1wcm9ncmVzcy1jYXJkIC5pbmNvcnJlY3Qtc2xpZGVyIC5tYXQtc2xpZGVyLXRyYWNrLWZpbGwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWM1NzZiICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAudXNlci1wcm9ncmVzcy1jYXJkIC5tYXQtc2xpZGVyLWhvcml6b250YWwge1xuICBoZWlnaHQ6IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbjo6bmctZGVlcCAudXNlci1wcm9ncmVzcy1jYXJkIC5tYXQtc2xpZGVyLWhvcml6b250YWwgLm1hdC1zbGlkZXItd3JhcHBlciB7XG4gIHRvcDogMDtcbn1cblxuc3Bhbi50aWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjYWFhO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuc3Bhbi53aW5uaW5nIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzQ5YTU0OTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbnNwYW4ubG9zaW5nIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogI2VjNTc2YjtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbnNwYW4uaW5mbyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNhYWE7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnJlc3VsdEJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnJlc3VsdEJ1dHRvbnMgYnV0dG9uOmxhc3QtY2hpbGQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMjUyNTI1O1xuICBwYWRkaW5nOiAxMHB4IDMwcHg7XG59XG5cbi5yZXN1bHRCdXR0b25zIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0OWE1NDkgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTBweCAzMHB4O1xufVxuXG4uZmluYWxNZXNzYWdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ5YTU0OTtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnVzZXItY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYzU3NmI7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4udXNlci1jYXJkIG1hdC1jYXJkLXRpdGxlIHtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnVzZXItY2FyZCBpbWcge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmdhbWUtdGl0bGUtY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZWM1YzE7XG4gIGNvbG9yOiAjMjUyNTI1O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG5idXR0b246aG92ZXIge1xuICBvcGFjaXR5OiAwLjg7XG59XG5cbmJ1dHRvbiwgYnV0dG9uOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTMzNyAhaW1wb3J0YW50O1xuICBjb2xvcjogIzI1MjUyNSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDNweCAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAxO1xufVxuXG5idXR0b24uaW5jb3JyZWN0OmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjNTc2YiAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMDVzO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzO1xufVxuXG5idXR0b24uY29ycmVjdDpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0OWE1NDkgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjA1cztcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4ycztcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTEwMHB4KSB7XG4gIG1hdC1jYXJkLCBtYXQtY2FyZC1hY3Rpb25zIHtcbiAgICBwYWRkaW5nOiA2MHB4O1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameInterfaceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-game-interface',
          templateUrl: './game-interface.component.html',
          styleUrls: ['./game-interface.component.scss']
        }]
      }], function () {
        return [{
          type: _services_trivia_service__WEBPACK_IMPORTED_MODULE_1__["TriviaService"]
        }, {
          type: _services_send_data_service__WEBPACK_IMPORTED_MODULE_2__["SendDataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_brands_svg_icons_faGoogle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @fortawesome/free-brands-svg-icons/faGoogle */
    "./node_modules/@fortawesome/free-brands-svg-icons/faGoogle.js");
    /* harmony import */


    var _fortawesome_free_brands_svg_icons_faGoogle__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(_fortawesome_free_brands_svg_icons_faGoogle__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _fortawesome_free_brands_svg_icons_faFacebook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fortawesome/free-brands-svg-icons/faFacebook */
    "./node_modules/@fortawesome/free-brands-svg-icons/faFacebook.js");
    /* harmony import */


    var _fortawesome_free_brands_svg_icons_faFacebook__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(_fortawesome_free_brands_svg_icons_faFacebook__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");

    function LoginComponent_mat_card_6_div_11_mat_error_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_mat_card_6_div_11_mat_error_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is invalid ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_mat_card_6_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_mat_card_6_div_11_mat_error_1_Template, 2, 0, "mat-error", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_mat_card_6_div_11_mat_error_2_Template, 2, 0, "mat-error", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r22.signinEmail.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r22.signinEmail.errors.pattern);
      }
    }

    function LoginComponent_mat_card_6_mat_error_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_mat_card_6_mat_error_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r24.signinError, " ");
      }
    }

    function LoginComponent_mat_card_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sign In");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-subtitle");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "To Start Playing");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Enter your Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_mat_card_6_Template_input_ngModelChange_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r27.resetSigninError();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LoginComponent_mat_card_6_div_11_Template, 3, 2, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Enter your Password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_mat_card_6_Template_input_ngModelChange_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r29.resetSigninError();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, LoginComponent_mat_card_6_mat_error_16_Template, 2, 0, "mat-error", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, LoginComponent_mat_card_6_mat_error_17_Template, 2, 1, "mat-error", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_mat_card_6_Template_button_click_19_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r30.signin();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Sign In");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "OR");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_mat_card_6_Template_button_click_23_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r31.signInWithGoogle();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "fa-icon", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Continue with Google");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_mat_card_6_Template_button_click_27_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r32.signInWithFacebook();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "fa-icon", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Continue with Facebook");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r20.signinForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r20.signinEmail.invalid && (ctx_r20.signinEmail.dirty || ctx_r20.signinEmail.touched || ctx_r20.signinSubmit));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r20.signinPassword.errors == null ? null : ctx_r20.signinPassword.errors.required) && (ctx_r20.signinPassword.dirty || ctx_r20.signinPassword.touched || ctx_r20.signinSubmit));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r20.signinError && ctx_r20.signinForm.valid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r20.google);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r20.facebook);
      }
    }

    function LoginComponent_mat_card_7_div_9_mat_error_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_mat_card_7_div_9_mat_error_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is invalid ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_mat_card_7_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_mat_card_7_div_9_mat_error_1_Template, 2, 0, "mat-error", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_mat_card_7_div_9_mat_error_2_Template, 2, 0, "mat-error", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r33.signupEmail.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r33.signupEmail.errors.pattern);
      }
    }

    function LoginComponent_mat_card_7_mat_error_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_mat_card_7_mat_error_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r35.signupError, " ");
      }
    }

    function LoginComponent_mat_card_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sign Up");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_mat_card_7_Template_input_ngModelChange_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r38.resetSignupError();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LoginComponent_mat_card_7_div_9_Template, 3, 2, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_mat_card_7_Template_input_ngModelChange_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

          var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r40.resetSignupError();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LoginComponent_mat_card_7_mat_error_14_Template, 2, 0, "mat-error", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, LoginComponent_mat_card_7_mat_error_15_Template, 2, 1, "mat-error", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_mat_card_7_Template_button_click_17_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

          var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r41.signup();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Create Account");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r21.signupForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r21.signupEmail.invalid && (ctx_r21.signupEmail.dirty || ctx_r21.signupEmail.touched || ctx_r21.signupSubmit));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r21.signupPassword.errors == null ? null : ctx_r21.signupPassword.errors.required) && (ctx_r21.signupPassword.dirty || ctx_r21.signupPassword.touched || ctx_r21.signupSubmit));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r21.signupError && ctx_r21.signupForm.valid);
      }
    }

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(authService, router, fb) {
        _classCallCheck(this, LoginComponent);

        this.authService = authService;
        this.router = router;
        this.fb = fb;
        this.google = _fortawesome_free_brands_svg_icons_faGoogle__WEBPACK_IMPORTED_MODULE_1__["faGoogle"];
        this.facebook = _fortawesome_free_brands_svg_icons_faFacebook__WEBPACK_IMPORTED_MODULE_2__["faFacebook"];
        this.signinSubmit = false;
        this.signupSubmit = false;
        this.isSignIn = true;
        this.isSignUp = false;
        this.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.signinForm = this.fb.group({
            signinEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.emailRegex)]),
            signinPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
          });
          this.signupForm = this.fb.group({
            signupEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.emailRegex)]),
            signupPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
          });
          this.authService.signinErrorChange.subscribe(function (error) {
            _this5.signinError = error;
          });
          this.authService.signupErrorChange.subscribe(function (error) {
            _this5.signupError = error;
          });
          this.authService.loggedInChange.subscribe(function (bool) {
            if (bool) {
              _this5.router.navigate(['set-up']);
            }
          });
        }
      }, {
        key: "signInWithGoogle",
        value: function signInWithGoogle() {
          this.authService.loginWithGoogle();
        }
      }, {
        key: "signInWithFacebook",
        value: function signInWithFacebook() {
          this.authService.loginWithFacebook();
        }
      }, {
        key: "signup",
        value: function signup() {
          if (this.signupForm.valid) {
            this.authService.signup(this.signupForm.value.signupEmail, this.signupForm.value.signupPassword);
          }

          this.signupSubmit = true;
        }
      }, {
        key: "signin",
        value: function signin() {
          if (this.signinForm.valid) {
            this.authService.signin(this.signinForm.value.signinEmail, this.signinForm.value.signinPassword);
          }

          this.signinSubmit = true;
        }
      }, {
        key: "resetSigninError",
        value: function resetSigninError() {
          this.signinError = '';
        }
      }, {
        key: "resetSignupError",
        value: function resetSignupError() {
          this.signupError = '';
        }
      }, {
        key: "signInOrSignUp",
        value: function signInOrSignUp(indicator) {
          this.isSignIn = !this.isSignIn;
          this.isSignUp = !this.isSignUp;
          var signInList = document.getElementById('sign-in').classList;
          var signUpList = document.getElementById('sign-up').classList;

          if (indicator) {
            signInList.add('active');
            signUpList.remove('active');
          } else {
            signUpList.add('active');
            signInList.remove('active');
          }
        }
      }, {
        key: "signinEmail",
        get: function get() {
          return this.signinForm.get('signinEmail');
        }
      }, {
        key: "signinPassword",
        get: function get() {
          return this.signinForm.get('signinPassword');
        }
      }, {
        key: "signupEmail",
        get: function get() {
          return this.signupForm.get('signupEmail');
        }
      }, {
        key: "signupPassword",
        get: function get() {
          return this.signupForm.get('signupPassword');
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 8,
      vars: 2,
      consts: [["id", "sign-in-container"], ["id", "sign-in", "mat-stroked-button", "", 1, "active", 3, "click"], ["id", "sign-up", "mat-stroked-button", "", 3, "click"], ["id", "sign-in-card", 4, "ngIf"], ["id", "sign-up-card", 4, "ngIf"], ["id", "sign-in-card"], ["id", "sign-in-content"], [3, "formGroup"], ["matInput", "", "placeholder", "email", "formControlName", "signinEmail", "required", "", 3, "ngModelChange"], [4, "ngIf"], ["type", "password", "matInput", "", "placeholder", "password", "formControlName", "signinPassword", "required", "", 3, "ngModelChange"], ["mat-raised-button", "", 1, "mat-warn", 3, "click"], ["id", "google", "mat-raised-button", "", 3, "click"], [3, "icon"], ["id", "facebook", "mat-raised-button", "", 3, "click"], ["id", "sign-up-card"], ["id", "sign-up-content"], ["matInput", "", "placeholder", "Ex. example@gmail.com", "formControlName", "signupEmail", "required", "", 3, "ngModelChange"], ["type", "password", "matInput", "", "placeholder", "Ex. password#@12", "formControlName", "signupPassword", "required", "", 3, "ngModelChange"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_2_listener() {
            return ctx.signInOrSignUp(true);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sign In");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_4_listener() {
            return ctx.signInOrSignUp();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Sign Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LoginComponent_mat_card_6_Template, 31, 6, "mat-card", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LoginComponent_mat_card_7_Template, 19, 4, "mat-card", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSignIn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSignUp);
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FaIconComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatError"]],
      styles: ["span[_ngcontent-%COMP%] {\n  margin: 30px;\n}\n\n#google[_ngcontent-%COMP%] {\n  background-color: #DB4337;\n  color: #ffffff;\n  display: flex;\n  max-width: 225px;\n}\n\n#facebook[_ngcontent-%COMP%] {\n  background-color: #385899;\n  color: #ffffff;\n  display: flex;\n  max-width: 225px;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  text-align: -webkit-center;\n  margin: 20px;\n  width: 300px;\n  height: auto;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n\n#sign-in-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n#or[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.active[_ngcontent-%COMP%] {\n  color: #ec576b;\n  border-bottom-color: #ec576b;\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFkeS9EZXYvdHJpdmlhL3NyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FETUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDSEY7O0FEV0E7RUFDRSxlQUFBO0FDUkY7O0FEaUJBO0VBQ0UsY0FBQTtFQUNBLDRCQUFBO0VBQ0Esb0JBQUE7QUNkRiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic3BhbiB7XG4gIG1hcmdpbjogMzBweDtcbn1cblxuI2dvb2dsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEQjQzMzc7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXgtd2lkdGg6IDIyNXB4O1xufVxuXG4jZmFjZWJvb2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg1ODk5O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZGlzcGxheTogZmxleDtcbiAgbWF4LXdpZHRoOiAyMjVweDtcbn1cblxubWF0LWNhcmQge1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbiAgbWFyZ2luOiAyMHB4O1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogYXV0bztcbn1cblxuYnV0dG9uIHtcbiAgbWFyZ2luOiAyMHB4O1xufVxuXG4vLyAjc2lnbi11cC1jb250ZW50IHtcbi8vICAgbWFyZ2luOiAxMTBweCAwICFpbXBvcnRhbnQ7XG4vLyB9XG5cbiNzaWduLWluLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4vLyAjc2lnbi1pbi1jb250ZW50IHtcbi8vICAgZGlzcGxheTogZmxleDtcbi8vICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbi8vIH1cblxuI29yIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4vLyBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4vLyAgICNzaWduLWluLWNvbnRhaW5lciB7XG4vLyAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbi8vICAgfVxuLy8gfVxuXG4uYWN0aXZlIHtcbiAgY29sb3I6ICNlYzU3NmI7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNlYzU3NmI7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufSIsInNwYW4ge1xuICBtYXJnaW46IDMwcHg7XG59XG5cbiNnb29nbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREI0MzM3O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZGlzcGxheTogZmxleDtcbiAgbWF4LXdpZHRoOiAyMjVweDtcbn1cblxuI2ZhY2Vib29rIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4NTg5OTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1heC13aWR0aDogMjI1cHg7XG59XG5cbm1hdC1jYXJkIHtcbiAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG4gIG1hcmdpbjogMjBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbmJ1dHRvbiB7XG4gIG1hcmdpbjogMjBweDtcbn1cblxuI3NpZ24taW4tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNvciB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmFjdGl2ZSB7XG4gIGNvbG9yOiAjZWM1NzZiO1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjZWM1NzZiO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.scss']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _trivia_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./trivia.service */
    "./src/app/services/trivia.service.ts");

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(af, afa, router, triviaService) {
        var _this6 = this;

        _classCallCheck(this, AuthService);

        this.af = af;
        this.afa = afa;
        this.router = router;
        this.triviaService = triviaService;
        this.loggedInChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.firstNameChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.signinErrorChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.signupErrorChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.userIdChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.afa.authState.subscribe(function (user) {
          if (user) {
            _this6.user = user.providerData[0];
            var displayName = _this6.user.displayName;
            var email = _this6.user.email;

            if (displayName) {
              displayName = displayName.replace(/\s.+/, '');
            } else {
              displayName = email.replace(/@.+/, '');
            }

            _this6.userIdChange.next(_this6.user.uid);

            _this6.loggedInChange.next(true);

            _this6.firstNameChange.next(displayName);

            var usersRef = _this6.af.collection('users').doc(_this6.user.uid);

            usersRef.update(Object.assign({}, _this6.user))["catch"](function (_) {
              _this6.triviaService.getCategoriesObservable().subscribe(function (categories) {
                var categoryAnswers = [];

                var _iterator = _createForOfIteratorHelper(categories),
                    _step;

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var categoryObj = _step.value;
                    categoryAnswers.push({
                      answeredCorrectly: 0,
                      answeredIncorrectly: 0,
                      category: categoryObj.name
                    });
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }

                _this6.af.collection('users').doc(_this6.user.uid).set(Object.assign(Object.assign({}, _this6.user), {
                  totalGamesPlayed: 0,
                  totalGamesWon: 0,
                  totalGamesLost: 0,
                  totalQuestionsAnswered: 0,
                  totalQuestionsAnsweredIncorrectly: 0,
                  totalQuestionsAnsweredCorrectly: 0,
                  categoryAnswers: categoryAnswers
                }));
              });
            });
          }
        });
      }

      _createClass(AuthService, [{
        key: "loginWithGoogle",
        value: function loginWithGoogle() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.afa.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider());

                  case 2:
                    this.router.navigate(['set-up']);

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "loginWithFacebook",
        value: function loginWithFacebook() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.afa.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].FacebookAuthProvider());

                  case 2:
                    this.router.navigate(['set-up']);

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "logout",
        value: function logout() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.loggedInChange.next(false);
                    _context3.next = 3;
                    return this.afa.signOut();

                  case 3:
                    this.router.navigate(['log-in']);

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "signup",
        value: function signup(email, password) {
          var _this7 = this;

          console.log(email, password);
          this.afa.createUserWithEmailAndPassword(email, password).then(function (_) {
            console.log('Successfully created an account');
          })["catch"](function (e) {
            console.log('Error with signing up:');
            console.log(e.message);

            _this7.signupErrorChange.next(e.message);
          });
        }
      }, {
        key: "signin",
        value: function signin(email, password) {
          var _this8 = this;

          this.afa.signInWithEmailAndPassword(email, password).then(function (_) {
            console.log("Successfully signed in using email and password");
          })["catch"](function (e) {
            console.log('Error with signing in with email and password:');
            console.log(e.message);

            _this8.signinErrorChange.next(e.message);
          });
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_trivia_service__WEBPACK_IMPORTED_MODULE_7__["TriviaService"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _trivia_service__WEBPACK_IMPORTED_MODULE_7__["TriviaService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/send-data.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/send-data.service.ts ***!
    \***********************************************/

  /*! exports provided: SendDataService */

  /***/
  function srcAppServicesSendDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SendDataService", function () {
      return SendDataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SendDataService =
    /*#__PURE__*/
    function () {
      function SendDataService() {
        _classCallCheck(this, SendDataService);

        this.data = {
          users: [],
          questions: []
        };
      }

      _createClass(SendDataService, [{
        key: "sendGameData",
        value: function sendGameData(game) {
          this.data = game;
        } // clearGameData() {
        //   this.subject.next()
        // }

      }, {
        key: "getGameData",
        value: function getGameData() {
          return this.data;
        }
      }]);

      return SendDataService;
    }();

    SendDataService.ɵfac = function SendDataService_Factory(t) {
      return new (t || SendDataService)();
    };

    SendDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SendDataService,
      factory: SendDataService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SendDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/trivia.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/trivia.service.ts ***!
    \********************************************/

  /*! exports provided: TriviaService */

  /***/
  function srcAppServicesTriviaServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TriviaService", function () {
      return TriviaService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");

    var TriviaService =
    /*#__PURE__*/
    function () {
      function TriviaService(http, af) {
        _classCallCheck(this, TriviaService);

        this.http = http;
        this.af = af;
        this.categoriesUrl = 'https://opentdb.com/api_category.php';
      }

      _createClass(TriviaService, [{
        key: "getCategoriesObservable",
        value: function getCategoriesObservable() {
          return this.http.get(this.categoriesUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (obj) {
            return obj.trivia_categories;
          }));
        }
      }, {
        key: "getQuestionsObservable",
        value: function getQuestionsObservable(amountOfQuestions, categoryId, difficulty, questionType) {
          var a = "amount=".concat(amountOfQuestions);
          var c = categoryId ? "category=".concat(categoryId) : '';
          var d = difficulty ? "difficulty=".concat(difficulty) : '';
          var qt = questionType ? "type=".concat(questionType) : '';
          var url = "https://opentdb.com/api.php?".concat(a, "&").concat(c, "&").concat(d, "&").concat(qt).replace(/&+$/, '').replace(/&+/, '&');
          return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (obj) {
            return obj.results;
          }));
        }
      }, {
        key: "getAllUsersObservable",
        value: function getAllUsersObservable() {
          return this.af.collection('users').valueChanges();
        }
      }, {
        key: "getCurrentUserObservable",
        value: function getCurrentUserObservable(id) {
          return this.af.collection('users').doc(id).valueChanges();
        }
      }, {
        key: "updateUserStats",
        value: function updateUserStats(users) {
          var _iterator2 = _createForOfIteratorHelper(users),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var user = _step2.value;
              this.af.collection('users').doc(user.uid).update(Object.assign({}, user));
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      }]);

      return TriviaService;
    }();

    TriviaService.ɵfac = function TriviaService_Factory(t) {
      return new (t || TriviaService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]));
    };

    TriviaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TriviaService,
      factory: TriviaService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TriviaService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/setup/player-dialog/player-dialog.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/setup/player-dialog/player-dialog.component.ts ***!
    \****************************************************************/

  /*! exports provided: PlayerDialogComponent */

  /***/
  function srcAppSetupPlayerDialogPlayerDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlayerDialogComponent", function () {
      return PlayerDialogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var src_app_services_trivia_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/trivia.service */
    "./src/app/services/trivia.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");

    function PlayerDialogComponent_mat_card_subtitle_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-subtitle");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Choose player ", ctx_r0.data.amount, "");
      }
    }

    function PlayerDialogComponent_mat_card_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerDialogComponent_mat_card_4_Template_mat_card_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var player_r2 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.playerClicked(player_r2, $event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var player_r2 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", player_r2.photoURL ? player_r2.photoURL : ctx_r1.defaultAvatarURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](player_r2.displayName ? player_r2.displayName : ctx_r1.getDefaultUsername(player_r2.email));
      }
    }

    var PlayerDialogComponent =
    /*#__PURE__*/
    function () {
      function PlayerDialogComponent(dialogRef, authService, triviaService, data) {
        _classCallCheck(this, PlayerDialogComponent);

        this.dialogRef = dialogRef;
        this.authService = authService;
        this.triviaService = triviaService;
        this.data = data;
        this.playersPlaying = [this.data.currentUser];
        this.nextPlayer = false;
        this.isDisabled = false;
        this.chosenPlayers = 1;
        this.defaultAvatarURL = 'https://i0.wp.com/www.mvhsoracle.com/wp-content/uploads/2018/08/default-avatar.jpg?ssl=1';
      }

      _createClass(PlayerDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.triviaService.getAllUsersObservable().subscribe(function (players) {
            var filtered = players.filter(function (player) {
              return player.uid !== _this9.data.currentUser.uid;
            });
            _this9.players = filtered;
          });
        }
      }, {
        key: "playerClicked",
        value: function playerClicked(player, event) {
          if (Number(this.data.amount) <= 2) {
            this.playersPlaying.push(player);
            this.dialogRef.close(this.playersPlaying);
          } else {
            if (event.target.tagName === 'MAT-CARD') {
              // make players already chosen disabled
              event.target.classList.add('disabled');
            } else {
              event.target.parentNode.classList.add('disabled');
            }

            this.nextPlayer = true;
            this.playersPlaying.push(player);
            this.chosenPlayers++;

            if (this.chosenPlayers === Number(this.data.amount)) {
              this.dialogRef.close(this.playersPlaying);
            }
          }
        }
      }, {
        key: "onCancel",
        value: function onCancel() {
          this.dialogRef.close("canceled");
        }
      }, {
        key: "getDefaultUsername",
        value: function getDefaultUsername(email) {
          return email.replace(/@.+/, '');
        }
      }]);

      return PlayerDialogComponent;
    }();

    PlayerDialogComponent.ɵfac = function PlayerDialogComponent_Factory(t) {
      return new (t || PlayerDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_trivia_service__WEBPACK_IMPORTED_MODULE_3__["TriviaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
    };

    PlayerDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PlayerDialogComponent,
      selectors: [["app-player-dialog"]],
      decls: 8,
      vars: 2,
      consts: [["matDialogTitle", ""], [4, "ngIf"], [3, "click", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "primary", 3, "click"], [3, "click"], ["mat-card-avatar", "", 3, "src"]],
      template: function PlayerDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Choose Who's Playing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PlayerDialogComponent_mat_card_subtitle_2_Template, 2, 1, "mat-card-subtitle", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-dialog-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PlayerDialogComponent_mat_card_4_Template, 4, 2, "mat-card", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-dialog-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerDialogComponent_Template_button_click_6_listener() {
            return ctx.onCancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nextPlayer);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.players);
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"]],
      styles: ["mat-dialog-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 20px;\n  justify-content: center;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  width: 180px;\n  background-color: #35b0ab;\n  margin: 20px;\n  text-align: center;\n}\n\nmat-card-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\nmat-card[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\nmat-card[_ngcontent-%COMP%]:active {\n  transform: translateY(4px) translateX(4px);\n}\n\n.disabled[_ngcontent-%COMP%] {\n  opacity: 0.3;\n  pointer-events: none;\n}\n\n.disabled[_ngcontent-%COMP%]:hover {\n  cursor: not-allowed;\n}\n\n.mat-card-avatar[_ngcontent-%COMP%] {\n  height: 80px;\n  width: 80px;\n  margin: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFkeS9EZXYvdHJpdmlhL3NyYy9hcHAvc2V0dXAvcGxheWVyLWRpYWxvZy9wbGF5ZXItZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zZXR1cC9wbGF5ZXItZGlhbG9nL3BsYXllci1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSwwQ0FBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLG9CQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zZXR1cC9wbGF5ZXItZGlhbG9nL3BsYXllci1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZGlhbG9nLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbm1hdC1jYXJkIHtcbiAgICB3aWR0aDogMTgwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM1YjBhYjtcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5tYXQtY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxubWF0LWNhcmQ6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxubWF0LWNhcmQ6YWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KSB0cmFuc2xhdGVYKDRweCk7XG59XG5cbi5kaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogLjM7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5kaXNhYmxlZDpob3ZlciB7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLm1hdC1jYXJkLWF2YXRhciB7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIG1hcmdpbjogMjBweDtcbn0iLCJtYXQtZGlhbG9nLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5tYXQtY2FyZCB7XG4gIHdpZHRoOiAxODBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM1YjBhYjtcbiAgbWFyZ2luOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbm1hdC1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG5tYXQtY2FyZDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxubWF0LWNhcmQ6YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCkgdHJhbnNsYXRlWCg0cHgpO1xufVxuXG4uZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjM7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uZGlzYWJsZWQ6aG92ZXIge1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4ubWF0LWNhcmQtYXZhdGFyIHtcbiAgaGVpZ2h0OiA4MHB4O1xuICB3aWR0aDogODBweDtcbiAgbWFyZ2luOiAyMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayerDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-player-dialog',
          templateUrl: './player-dialog.component.html',
          styleUrls: ['./player-dialog.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: src_app_services_trivia_service__WEBPACK_IMPORTED_MODULE_3__["TriviaService"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/setup/same-amount.directive.ts":
  /*!************************************************!*\
    !*** ./src/app/setup/same-amount.directive.ts ***!
    \************************************************/

  /*! exports provided: sameAmountValidator, SameAmountValidatortDirective */

  /***/
  function srcAppSetupSameAmountDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "sameAmountValidator", function () {
      return sameAmountValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SameAmountValidatortDirective", function () {
      return SameAmountValidatortDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var sameAmountValidator = function sameAmountValidator(control) {
      var amount = control.get('amount');
      var questionNum = control.get('questionNum');
      return amount && questionNum && questionNum.value % Number(amount.value) !== 0 ? {
        'notDivisibleByPlayers': true
      } : null;
    };

    var SameAmountValidatortDirective =
    /*#__PURE__*/
    function () {
      function SameAmountValidatortDirective() {
        _classCallCheck(this, SameAmountValidatortDirective);
      }

      _createClass(SameAmountValidatortDirective, [{
        key: "isErrorState",
        value: function isErrorState(control, form) {
          var isSubmitted = form && form.submitted;
          return control && control.invalid;
        }
      }]);

      return SameAmountValidatortDirective;
    }();

    SameAmountValidatortDirective.ɵfac = function SameAmountValidatortDirective_Factory(t) {
      return new (t || SameAmountValidatortDirective)();
    };

    SameAmountValidatortDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: SameAmountValidatortDirective,
      selectors: [["", "appSameAmount", ""]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
        useExisting: SameAmountValidatortDirective,
        multi: true
      }])]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SameAmountValidatortDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[appSameAmount]',
          providers: [{
            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
            useExisting: SameAmountValidatortDirective,
            multi: true
          }]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/setup/setup.component.ts":
  /*!******************************************!*\
    !*** ./src/app/setup/setup.component.ts ***!
    \******************************************/

  /*! exports provided: SetupComponent */

  /***/
  function srcAppSetupSetupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SetupComponent", function () {
      return SetupComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _same_amount_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./same-amount.directive */
    "./src/app/setup/same-amount.directive.ts");
    /* harmony import */


    var _player_dialog_player_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./player-dialog/player-dialog.component */
    "./src/app/setup/player-dialog/player-dialog.component.ts");
    /* harmony import */


    var _services_trivia_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/trivia.service */
    "./src/app/services/trivia.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_send_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/send-data.service */
    "./src/app/services/send-data.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");

    function SetupComponent_mat_card_0_option_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var player_r11 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", player_r11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](player_r11);
      }
    }

    function SetupComponent_mat_card_0_div_14_mat_error_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 50 is the maximum amount ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SetupComponent_mat_card_0_div_14_mat_error_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Need at least one question to play ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SetupComponent_mat_card_0_div_14_mat_error_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Number is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SetupComponent_mat_card_0_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SetupComponent_mat_card_0_div_14_mat_error_1_Template, 2, 0, "mat-error", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SetupComponent_mat_card_0_div_14_mat_error_2_Template, 2, 0, "mat-error", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SetupComponent_mat_card_0_div_14_mat_error_3_Template, 2, 0, "mat-error", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.questionNum.errors.max);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.questionNum.errors.min);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.questionNum.errors.required);
      }
    }

    function SetupComponent_mat_card_0_mat_error_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter an amount so each player can have the same amount of questions ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SetupComponent_mat_card_0_mat_option_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var category_r15 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", category_r15.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r15.name, " ");
      }
    }

    function SetupComponent_mat_card_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Game Set Up");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SetupComponent_mat_card_0_Template_form_ngSubmit_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r16.submitForm();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Amount of Players:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "select", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SetupComponent_mat_card_0_Template_select_change_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r18.chooseUser();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SetupComponent_mat_card_0_option_9_Template, 2, 2, "option", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Number of Questions:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SetupComponent_mat_card_0_div_14_Template, 4, 3, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SetupComponent_mat_card_0_mat_error_15_Template, 2, 0, "mat-error", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Select Category:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-select", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function SetupComponent_mat_card_0_Template_mat_select_valueChange_19_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r19.selected = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-option", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Any Category");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, SetupComponent_mat_card_0_mat_option_22_Template, 2, 2, "mat-option", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Select Difficulty:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "select", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Any Difficulty");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "option", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Easy");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "option", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Medium");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Hard");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Select Type:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "select", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "option", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Any Type");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "option", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "True or False");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "option", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Mutiple Choice");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Let's Play!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r5.setUpForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.playerAmount);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.questionNum.invalid && (ctx_r5.questionNum.dirty || ctx_r5.questionNum.touched));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r5.setUpForm.errors == null ? null : ctx_r5.setUpForm.errors.notDivisibleByPlayers) && ctx_r5.setUpForm.invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r5.selected);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.categories);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r5.setUpForm.invalid);
      }
    }

    function SetupComponent_mat_spinner_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
      }
    }

    var SetupComponent =
    /*#__PURE__*/
    function () {
      function SetupComponent(triviaService, authService, sendDataService, route, dialog, router, snackBar) {
        _classCallCheck(this, SetupComponent);

        this.triviaService = triviaService;
        this.authService = authService;
        this.sendDataService = sendDataService;
        this.route = route;
        this.dialog = dialog;
        this.router = router;
        this.snackBar = snackBar;
        this.data = {
          questions: [],
          users: []
        };
        this.game = {
          amount: 1,
          questionNum: 10,
          category: "any",
          difficulty: "any",
          type: "any"
        };
        this.playerAmount = [1, 2, 3];
        this.selected = 'any';
      }

      _createClass(SetupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getCurrentUser();
          this.categories = this.route.snapshot.data.categories;
          this.setUpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'amount': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.game.amount),
            'questionNum': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.game.questionNum, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(50), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1), _same_amount_directive__WEBPACK_IMPORTED_MODULE_2__["sameAmountValidator"]]),
            'category': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.game.category),
            'difficulty': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.game.difficulty),
            'type': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.game.type)
          }, {
            validators: _same_amount_directive__WEBPACK_IMPORTED_MODULE_2__["sameAmountValidator"]
          });
          this.getCategories();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.categoriesSubscription.unsubscribe();
        }
      }, {
        key: "getCategories",
        value: function getCategories() {
          var _this10 = this;

          this.categoriesSubscription = this.triviaService.getCategoriesObservable().subscribe(function (categories) {
            return _this10.categories = categories;
          });
        }
      }, {
        key: "chooseUser",
        value: function chooseUser() {
          var _this11 = this;

          this.data.users = [];

          if (Number(this.setUpForm.value.amount) > 1) {
            var dialogRef = this.dialog.open(_player_dialog_player_dialog_component__WEBPACK_IMPORTED_MODULE_3__["PlayerDialogComponent"], {
              width: '1000px',
              disableClose: true,
              data: {
                amount: this.setUpForm.value.amount,
                currentUser: this.currentUser
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {
              if (result === "canceled") {
                _this11.setUpForm.get('amount').setValue(1);
              } else {
                _this11.data.users = result;
              }
            });
          }
        }
      }, {
        key: "getCurrentUser",
        value: function getCurrentUser() {
          var _this12 = this;

          this.authService.userIdChange.subscribe(function (id) {
            if (id !== '') {
              _this12.triviaService.getCurrentUserObservable(id).subscribe(function (user) {
                return _this12.currentUser = user;
              });
            }
          });
        }
      }, {
        key: "sendData",
        value: function sendData(data) {
          this.sendDataService.sendGameData(data);
        }
      }, {
        key: "submitForm",
        value: function submitForm() {
          var _this13 = this;

          var category = this.setUpForm.value.category;
          var difficulty = this.setUpForm.value.difficulty;
          var type = this.setUpForm.value.type;
          this.triviaService.getQuestionsObservable(this.setUpForm.value.questionNum, category === "any" ? null : category, difficulty === "any" ? null : difficulty, type === "any" ? null : type).subscribe(function (questions) {
            _this13.data.questions = questions;

            if (_this13.data.questions.length !== 0) {
              if (Number(_this13.setUpForm.value.amount) === 1) {
                _this13.data.users = [_this13.currentUser];
              }

              _this13.router.navigate(['/game']);

              _this13.sendData(_this13.data);
            } else {
              _this13.snackBar.open("OOPS! There doesn't seem to be any questions matching your set up!", "Close", {
                duration: 2000,
                panelClass: ['mat-toolbar', 'mat-warn']
              });
            }
          });
        }
      }, {
        key: "questionNum",
        get: function get() {
          return this.setUpForm.get('questionNum');
        }
      }]);

      return SetupComponent;
    }();

    SetupComponent.ɵfac = function SetupComponent_Factory(t) {
      return new (t || SetupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_trivia_service__WEBPACK_IMPORTED_MODULE_4__["TriviaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_send_data_service__WEBPACK_IMPORTED_MODULE_6__["SendDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"]));
    };

    SetupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SetupComponent,
      selectors: [["app-setup"]],
      decls: 3,
      vars: 2,
      consts: [["id", "game-set-up", 4, "ngIf"], ["id", "spinner"], [4, "ngIf"], ["id", "game-set-up"], [3, "formGroup", "ngSubmit"], ["matNativeControl", "", "formControlName", "amount", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "type", "number", "required", "", "max", "50", "min", "1", "id", "questionNum", "formControlName", "questionNum"], ["formControlName", "category", 3, "value", "valueChange"], ["value", "any"], ["matNativeControl", "", "formControlName", "difficulty"], ["value", "easy"], ["value", "medium"], ["value", "hard"], ["matNativeControl", "", "formControlName", "type"], ["value", "boolean"], ["value", "multiple"], ["id", "button-container"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"], [3, "value"]],
      template: function SetupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SetupComponent_mat_card_0_Template, 48, 7, "mat-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SetupComponent_mat_spinner_2_Template, 1, 0, "mat-spinner", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.categories);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.categories);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatError"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__["MatSpinner"]],
      styles: ["form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 20px;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n#spinner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 100px;\n}\n\n#button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n#game-set-up[_ngcontent-%COMP%] {\n  max-width: 600px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFkeS9EZXYvdHJpdmlhL3NyYy9hcHAvc2V0dXAvc2V0dXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NldHVwL3NldHVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvc2V0dXAvc2V0dXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiAyMHB4O1xufVxuXG5tYXQtY2FyZCB7XG4gIG1hcmdpbjogMjBweDtcbn1cblxuYnV0dG9uIHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuXG4jc3Bpbm5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbn1cblxuI2J1dHRvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuI2dhbWUtc2V0LXVwIHtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbn0iLCJmb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiAyMHB4O1xufVxuXG5tYXQtY2FyZCB7XG4gIG1hcmdpbjogMjBweDtcbn1cblxuYnV0dG9uIHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuXG4jc3Bpbm5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbn1cblxuI2J1dHRvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuI2dhbWUtc2V0LXVwIHtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SetupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-setup',
          templateUrl: './setup.component.html',
          styleUrls: ['./setup.component.scss']
        }]
      }], function () {
        return [{
          type: _services_trivia_service__WEBPACK_IMPORTED_MODULE_4__["TriviaService"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _services_send_data_service__WEBPACK_IMPORTED_MODULE_6__["SendDataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user-stats/user-stats.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/user-stats/user-stats.component.ts ***!
    \****************************************************/

  /*! exports provided: UserStatsComponent */

  /***/
  function srcAppUserStatsUserStatsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserStatsComponent", function () {
      return UserStatsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_trivia_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/trivia.service */
    "./src/app/services/trivia.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");

    function UserStatsComponent_mat_card_1_mat_card_title_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r53.player.displayName ? ctx_r53.player.displayName : ctx_r53.getDefaultUsername(ctx_r53.player.email));
      }
    }

    function UserStatsComponent_mat_card_1_mat_list_item_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-subtitle");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r54.player.email, " ");
      }
    }

    function UserStatsComponent_mat_card_1_mat_list_item_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-subtitle");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r55.player.phoneNumber);
      }
    }

    function UserStatsComponent_mat_card_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserStatsComponent_mat_card_1_mat_card_title_1_Template, 2, 1, "mat-card-title", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-content", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-list");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UserStatsComponent_mat_card_1_mat_list_item_5_Template, 3, 1, "mat-list-item", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UserStatsComponent_mat_card_1_mat_list_item_6_Template, 3, 1, "mat-list-item", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r50.player.email || ctx_r50.player.displayName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r50.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r50.player.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r50.player.phoneNumber);
      }
    }

    function UserStatsComponent_mat_card_2_li_39_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var category_r58 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r58);
      }
    }

    function UserStatsComponent_mat_card_2_li_45_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var category_r59 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r59);
      }
    }

    function UserStatsComponent_mat_card_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Game Stats");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Total Games Played:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Games Won:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Games Lost:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Questions Answered:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Answered Correctly:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Answered Incorrectly:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-expansion-panel", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-expansion-panel-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-panel-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Best Category(s):");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, UserStatsComponent_mat_card_2_li_39_Template, 2, 1, "li", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-expansion-panel", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-expansion-panel-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-panel-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Worst Category(s):");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, UserStatsComponent_mat_card_2_li_45_Template, 2, 1, "li", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r51.player.totalGamesPlayed);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r51.player.totalGamesWon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r51.player.totalGamesLost);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r51.player.totalQuestionsAnswered);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r51.player.totalQuestionsAnsweredCorrectly);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r51.player.totalQuestionsAnsweredIncorrectly);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r51.bestCategories);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r51.worstCategories);
      }
    }

    function UserStatsComponent_mat_spinner_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
      }
    }

    var UserStatsComponent =
    /*#__PURE__*/
    function () {
      function UserStatsComponent(triviaService, authService) {
        _classCallCheck(this, UserStatsComponent);

        this.triviaService = triviaService;
        this.authService = authService;
        this.worstCategories = ["No data yet. Go play some games!"];
        this.bestCategories = ["No data yet. Go play some games!"];
        this.defaultAvatarURL = 'https://i0.wp.com/www.mvhsoracle.com/wp-content/uploads/2018/08/default-avatar.jpg?ssl=1';
      }

      _createClass(UserStatsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this14 = this;

          this.authService.userIdChange.subscribe(function (id) {
            if (id !== '') {
              _this14.currentUserSubscription = _this14.triviaService.getCurrentUserObservable(id).subscribe(function (user) {
                var cH = 0;
                var cL = 1;
                var cHR = [];
                var cLR = [];

                var _iterator3 = _createForOfIteratorHelper(user.categoryAnswers),
                    _step3;

                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    var cA = _step3.value;

                    if (cA.answeredCorrectly !== 0 && cA.answeredIncorrectly !== 0) {
                      var ratio = Number((cA.answeredCorrectly / (cA.answeredCorrectly + cA.answeredIncorrectly)).toFixed(1));

                      if (cH === ratio) {
                        cHR.push(cA.category);
                      } else if (cH < ratio) {
                        cH = ratio;
                        cHR = [cA.category];
                      }

                      if (cL === ratio) {
                        cLR.push(cA.category);
                      } else if (cL > ratio) {
                        cL = ratio;
                        cLR = [cA.category];
                      }
                    }
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }

                if (cHR.join() === cLR.join() && cHR.length > 0 && cLR.length > 0) {
                  _this14.bestCategories = cHR;
                } else {
                  if (cHR.length > 0) {
                    _this14.bestCategories = cHR;
                  }

                  if (cLR.length > 0) {
                    _this14.worstCategories = cLR;
                  }
                }

                if (user.photoURL) {
                  if (/facebook/.test(user.photoURL)) {
                    _this14.avatar = user.photoURL + "?type=large";
                  } else {
                    _this14.avatar = user.photoURL;
                  }
                } else {
                  _this14.avatar = _this14.defaultAvatarURL;
                }

                _this14.player = user;
              });
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.currentUserSubscription.unsubscribe();
        }
      }, {
        key: "getDefaultUsername",
        value: function getDefaultUsername(email) {
          return email.replace(/@.+/, '');
        }
      }]);

      return UserStatsComponent;
    }();

    UserStatsComponent.ɵfac = function UserStatsComponent_Factory(t) {
      return new (t || UserStatsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_trivia_service__WEBPACK_IMPORTED_MODULE_1__["TriviaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
    };

    UserStatsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserStatsComponent,
      selectors: [["app-user-stats"]],
      decls: 5,
      vars: 3,
      consts: [["class", "mat-toolbar mat-warn", "id", "user", 4, "ngIf"], [4, "ngIf"], ["id", "spinner"], ["id", "user", 1, "mat-toolbar", "mat-warn"], [1, "main"], [3, "src"], [1, "statRow"], ["colspan", "2"], [1, "mat-toolbar", "mat-accent"], [4, "ngFor", "ngForOf"], [1, "mat-toolbar", "mat-warn"]],
      template: function UserStatsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserStatsComponent_mat_card_1_Template, 7, 4, "mat-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserStatsComponent_mat_card_2_Template, 46, 8, "mat-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UserStatsComponent_mat_spinner_4_Template, 1, 0, "mat-spinner", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.player);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.player);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.player);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatList"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListItem"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardSubtitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanelTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatSpinner"]],
      styles: ["mat-card[_ngcontent-%COMP%] {\n  margin: 20px;\n  width: 320px;\n}\n\nmat-card-content[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\nmat-expansion-panel[_ngcontent-%COMP%] {\n  margin: 20px 0;\n}\n\n.statRow[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n#spinner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 100px;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 80%;\n  max-width: 400px;\n  border-radius: 10px;\n  margin-bottom: 10px;\n}\n\n.main[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nul[_ngcontent-%COMP%] {\n  text-align: initial;\n  color: #000000;\n}\n\ndiv[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n#info[_ngcontent-%COMP%] {\n  min-width: 400px;\n}\n\n@media only screen and (max-width: 500px) {\n  #info[_ngcontent-%COMP%] {\n    min-width: 0px;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFkeS9EZXYvdHJpdmlhL3NyYy9hcHAvdXNlci1zdGF0cy91c2VyLXN0YXRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91c2VyLXN0YXRzL3VzZXItc3RhdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQ0NGOztBREdBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURHQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNBRjs7QURHQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDQUY7O0FER0E7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUNBRjs7QURHQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUNBRjs7QURXQTtFQUNFLGdCQUFBO0FDUkY7O0FEV0E7RUFDRTtJQUNFLGNBQUE7SUFDQSxXQUFBO0VDUkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3VzZXItc3RhdHMvdXNlci1zdGF0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkIHtcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgd2lkdGg6IDMyMHB4O1xufVxuXG5tYXQtY2FyZC1jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxubWF0LWV4cGFuc2lvbi1wYW5lbCB7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuXG4uc3RhdFJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuXG4jc3Bpbm5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLm1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG51bCB7XG4gIHRleHQtYWxpZ246IGluaXRpYWw7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG5kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4vLyAjdXNlciB7XG4vLyAgIGhlaWdodDogMzg0cHg7XG4vLyAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuLy8gICBhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuLy8gfVxuXG4jaW5mbyB7XG4gIG1pbi13aWR0aDogNDAwcHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgI2luZm8ge1xuICAgIG1pbi13aWR0aDogMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59IiwibWF0LWNhcmQge1xuICBtYXJnaW46IDIwcHg7XG4gIHdpZHRoOiAzMjBweDtcbn1cblxubWF0LWNhcmQtY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbm1hdC1leHBhbnNpb24tcGFuZWwge1xuICBtYXJnaW46IDIwcHggMDtcbn1cblxuLnN0YXRSb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbiNzcGlubmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xufVxuXG5pbWcge1xuICB3aWR0aDogODAlO1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ubWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbnVsIHtcbiAgdGV4dC1hbGlnbjogaW5pdGlhbDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbmRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbiNpbmZvIHtcbiAgbWluLXdpZHRoOiA0MDBweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAjaW5mbyB7XG4gICAgbWluLXdpZHRoOiAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserStatsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-user-stats',
          templateUrl: './user-stats.component.html',
          styleUrls: ['./user-stats.component.scss']
        }]
      }], function () {
        return [{
          type: _services_trivia_service__WEBPACK_IMPORTED_MODULE_1__["TriviaService"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      firebase: {
        apiKey: 'AIzaSyAayqPi75_IIAt0TeYOF1s6WDjQXsm_u6U',
        authDomain: 'trivia-43e20.firebaseapp.com',
        databaseURL: 'https://trivia-43e20.firebaseio.com',
        projectId: 'trivia-43e20',
        storageBucket: 'trivia-43e20.appspot.com',
        messagingSenderId: '766024110773',
        appId: '1:766024110773:web:3b5439860006b47a3424fc'
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/brady/Dev/trivia/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map