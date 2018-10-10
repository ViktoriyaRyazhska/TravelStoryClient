(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', redirectTo: 'feed', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { enableTracing: true })
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  color: #000000;\n  padding: 50px;\n  display: inline-block;\n  font-size: 30px;\n  text-decoration: none;\n  font-family: \"Montserrat\", sans-serif; }\n  a:hover {\n    cursor: pointer;\n    background-color: #eeeeee; }\n  h1 {\n  color: #000000;\n  padding: 50px;\n  text-align: center;\n  display: block;\n  font-size: 30px;\n  text-decoration: none;\n  font-family: \"Montserrat\", sans-serif; }\n  .router-wrapper {\n  padding: 30px; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/user.service */ "./src/app/service/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(translate, userService) {
        this.translate = translate;
        console.log('browser language: ' + this.translate.getBrowserLang());
        if (userService.getPreferedLang() === null) {
            if (translate.getBrowserLang() === 'uk' || this.translate.getBrowserLang() === 'ru') {
                translate.use('uk');
            }
        }
        else if (userService.getPreferedLang() === 'uk' || userService.getPreferedLang() === 'ru') {
            translate.use('uk');
        }
        else {
            translate.use('en');
        }
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            _service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/user.module */ "./src/app/user/user.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _service_interceptor_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./service/interceptor.service */ "./src/app/service/interceptor.service.ts");
/* harmony import */ var _service_my_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./service/my-auth.service */ "./src/app/service/my-auth.service.ts");
/* harmony import */ var _user_intro_dialog_change_profile_pic_dialog_change_profile_pic_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user/intro/dialog-change-profile-pic/dialog-change-profile-pic.component */ "./src/app/user/intro/dialog-change-profile-pic/dialog-change-profile-pic.component.ts");
/* harmony import */ var _messenger_messenger_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./messenger/messenger.module */ "./src/app/messenger/messenger.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/esm5/ngx-translate-http-loader.js");
/* harmony import */ var _security_security_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./security/security.module */ "./src/app/security/security.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_15__["TranslateHttpLoader"](http);
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _user_intro_dialog_change_profile_pic_dialog_change_profile_pic_component__WEBPACK_IMPORTED_MODULE_12__["DialogChangeProfilePicComponent"],
            ],
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _user_user_module__WEBPACK_IMPORTED_MODULE_6__["UserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _security_security_module__WEBPACK_IMPORTED_MODULE_16__["SecurityModule"],
                _messenger_messenger_module__WEBPACK_IMPORTED_MODULE_13__["MessengerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]]
                    }
                })
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
                    useClass: _service_interceptor_service__WEBPACK_IMPORTED_MODULE_10__["InterceptorService"],
                    multi: true
                },
                _service_my_auth_service__WEBPACK_IMPORTED_MODULE_11__["MyAuthService"],
                ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            entryComponents: [_user_intro_dialog_change_profile_pic_dialog_change_profile_pic_component__WEBPACK_IMPORTED_MODULE_12__["DialogChangeProfilePicComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/messenger/general.scss":
/*!****************************************!*\
  !*** ./src/app/messenger/general.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  font-size: 100%;\r\n  font: inherit;\r\n  vertical-align: baseline\r\n}\r\n\r\narticle, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {\r\n  display: block\r\n}\r\n\r\nbody {\r\n  line-height: 1\r\n}\r\n\r\nol, ul {\r\n  list-style: none\r\n}\r\n\r\nblockquote, q {\r\n  quotes: none\r\n}\r\n\r\nblockquote:before, blockquote:after, q:before, q:after {\r\n  content: '';\r\n  content: none\r\n}\r\n\r\ntable {\r\n  border-collapse: collapse;\r\n  border-spacing: 0\r\n}\r\n\r\np {\n  font-family: 'Montserrat', sans-serif;\n  letter-spacing: 0.1px; }\n"

/***/ }),

/***/ "./src/app/messenger/main-messaging-content/chat-info/chat-info.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/messenger/main-messaging-content/chat-info/chat-info.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contact-profile\" *ngIf=\"currChat\">\r\n  <img *ngIf=\"currChat.chatType=='PRIVATE_MESSAGES'\" src=\"{{currChat.interlocutor.profilePic}}\"/> <!--{{currChat.avatar}}-->\r\n  <div *ngIf=\"currChat.chatType!='PRIVATE_MESSAGES'\">\r\n    <div *ngIf=\"currChat.avatar; then profile_pic else alternative_avatar\"></div>\r\n    <ng-template #profile_pic>\r\n      <img src=\"{{currChat.avatar}}\" class=\"contacts-wrap__img\" alt=\"\"/>\r\n    </ng-template>\r\n    <ng-template #alternative_avatar>\r\n      <div class=\"contacts-wrap__img contacts-wrap__alternative-img\"\r\n           [ngStyle]=\"{'background-color': currChat.alternativeAvatar.color}\">\r\n        {{currChat.alternativeAvatar.letter}}\r\n      </div>\r\n    </ng-template>\r\n  </div>\r\n\r\n  <p>{{currChat.chatName}}</p>\r\n  <div class=\"social-media\">\r\n    <a href=\"https://www.facebook.com/\"></a> <i class=\"fa fa-facebook\" aria-hidden=\"true\"></i>\r\n    <a href=\"https://twitter.com/\"></a> <i class=\"fa fa-twitter\" aria-hidden=\"true\"></i>\r\n    <a href=\"https://www.instagram.com/\"></a><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/messenger/main-messaging-content/chat-info/chat-info.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/messenger/main-messaging-content/chat-info/chat-info.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact-profile {\n  width: 100%;\n  height: 60px;\n  line-height: 60px;\n  background: #f5f5f5; }\n\n.contacts-wrap__alternative-img {\n  width: 40px;\n  height: 40px;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 600;\n  color: #fff;\n  font-size: 24px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  float: left;\n  margin: 9px 12px 0 9px; }\n\n.contact-profile img {\n  width: 40px;\n  border-radius: 50%;\n  float: left;\n  margin: 9px 12px 0 9px; }\n\n.contact-profile p {\n  float: left; }\n\n.contact-profile .social-media {\n  float: right; }\n\n.contact-profile .social-media i {\n  margin-left: 14px;\n  cursor: pointer; }\n\n.contact-profile .social-media i:nth-last-child(1) {\n  margin-right: 20px; }\n\n.contact-profile .social-media i:hover {\n  color: #435f7a; }\n"

/***/ }),

/***/ "./src/app/messenger/main-messaging-content/chat-info/chat-info.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/messenger/main-messaging-content/chat-info/chat-info.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ChatInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatInfoComponent", function() { return ChatInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_Chat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/Chat */ "./src/app/messenger/model/Chat.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatInfoComponent = /** @class */ (function () {
    function ChatInfoComponent() {
    }
    ChatInfoComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _model_Chat__WEBPACK_IMPORTED_MODULE_1__["Chat"])
    ], ChatInfoComponent.prototype, "currChat", void 0);
    ChatInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat-info',
            template: __webpack_require__(/*! ./chat-info.component.html */ "./src/app/messenger/main-messaging-content/chat-info/chat-info.component.html"),
            styles: [__webpack_require__(/*! ./chat-info.component.scss */ "./src/app/messenger/main-messaging-content/chat-info/chat-info.component.scss"), __webpack_require__(/*! ../../general.scss */ "./src/app/messenger/general.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ChatInfoComponent);
    return ChatInfoComponent;
}());



/***/ }),

/***/ "./src/app/messenger/main-messaging-content/main-messaging-content.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/messenger/main-messaging-content/main-messaging-content.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n  <app-chat-info [currChat]=\"currChat\"></app-chat-info>\r\n\r\n  <div class=\"messages\" id=\"messagesContainer\">\r\n    <ul *ngIf=\"currChat && messages && currUser\">\r\n      <li *ngFor=\"let message of messages\" [ngClass]=\"{\r\n          'sent':message.user.id === currUser.id,\r\n          'replies':message.user.id !== currUser.id\r\n        }\">\r\n        <img src=\"{{message.user.profilePic}}\" alt=\"\"/>\r\n        <p>{{message.messageContent}}</p>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"message-input\">\r\n    <div class=\"wrap\">\r\n      <input type=\"text\" placeholder=\"Write your message...\" (keydown.enter)=\"sendMessage()\"\r\n             [(ngModel)]=\"currMessage.messageContent\">\r\n      <div class=\"btn-wrapper\">\r\n        <i class=\"fa fa-paperclip attachment\" aria-hidden=\"true\"></i>\r\n        <button class=\"submit\" id=\"sendMsgBtn\" (click)=\"sendMessage()\"><i class=\"fa fa-paper-plane\"\r\n                                                                          aria-hidden=\"true\"></i></button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/messenger/main-messaging-content/main-messaging-content.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/messenger/main-messaging-content/main-messaging-content.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  float: right;\n  width: 60%;\n  height: 100%;\n  overflow: hidden;\n  position: relative; }\n\n@media screen and (max-width: 735px) {\n  .content {\n    width: calc(100% - 58px);\n    min-width: 300px !important; } }\n\n@media screen and (min-width: 900px) {\n  .content {\n    width: calc(100% - 340px); } }\n\n.content .messages {\n  height: auto;\n  min-height: calc(100% - 93px);\n  max-height: calc(100% - 93px);\n  overflow-y: scroll;\n  overflow-x: hidden; }\n\n@media screen and (max-width: 735px) {\n  .content .messages {\n    max-height: calc(100% - 105px); } }\n\n.content .messages::-webkit-scrollbar {\n  width: 8px;\n  background: transparent; }\n\n.content .messages::-webkit-scrollbar-thumb {\n  background-color: rgba(0, 0, 0, 0.3); }\n\n.content .messages ul li {\n  display: inline-block;\n  clear: both;\n  float: left;\n  margin: 15px 15px 5px 15px;\n  width: calc(100% - 25px);\n  font-size: 0.9em; }\n\n.content .messages ul li:nth-last-child(1) {\n  margin-bottom: 20px; }\n\n.content .messages ul li.replies img {\n  margin: 6px 8px 0 0; }\n\n.content .messages ul li.replies p {\n  background: #435f7a;\n  color: #f5f5f5; }\n\n.content .messages ul li.sent img {\n  float: right;\n  margin: 6px 0 0 8px; }\n\n.content .messages ul li.sent p {\n  background: #f5f5f5;\n  float: right; }\n\n.content .messages ul li img {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  float: left; }\n\n.content .messages ul li p {\n  display: inline-block;\n  padding: 10px 15px;\n  border-radius: 20px;\n  max-width: 205px;\n  line-height: 130%; }\n\n@media screen and (min-width: 735px) {\n  .content .messages ul li p {\n    max-width: 300px; } }\n\n.content .message-input {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 40px;\n  z-index: 99; }\n\n.content textarea {\n  height: 40px;\n  width: 90%;\n  font-family: 'Montserrat', sans-serif;\n  float: left;\n  border: none;\n  padding: 11px 32px 10px 8px;\n  font-size: 0.8em;\n  color: #32465a;\n  outline: none; }\n\n.content .message-input .wrap {\n  background-color: #ffffff;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 40px; }\n\n.btn-wrapper {\n  height: 40px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 5; }\n\n.content .message-input .wrap input {\n  font-family: 'Montserrat', sans-serif;\n  float: left;\n  border: none;\n  width: calc(100% - 90px);\n  padding: 11px 32px 10px 8px;\n  font-size: 0.8em;\n  color: #32465a; }\n\n@media screen and (max-width: 735px) {\n  .content .message-input .wrap input {\n    padding: 15px 32px 16px 8px; } }\n\n.content .message-input .wrap input:focus {\n  outline: none; }\n\n.content .message-input .wrap .attachment {\n  position: absolute;\n  right: 60px;\n  z-index: 4;\n  margin-top: 10px;\n  font-size: 1.1em;\n  color: #435f7a;\n  opacity: .5;\n  cursor: pointer; }\n\n@media screen and (max-width: 735px) {\n  .content .message-input .wrap .attachment {\n    margin-top: 17px;\n    right: 65px; } }\n\n.content .message-input .wrap .attachment:hover {\n  opacity: 1; }\n\n.content .message-input .wrap button {\n  float: right;\n  border: none;\n  width: 50px;\n  padding: 12px 0;\n  cursor: pointer;\n  background: #32465a;\n  color: #f5f5f5; }\n\n@media screen and (max-width: 735px) {\n  .content .message-input .wrap button {\n    padding: 16px 0; } }\n\n.content .message-input .wrap button:hover {\n  background: #435f7a; }\n\n.content .message-input .wrap button:focus {\n  outline: none; }\n"

/***/ }),

/***/ "./src/app/messenger/main-messaging-content/main-messaging-content.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/messenger/main-messaging-content/main-messaging-content.component.ts ***!
  \**************************************************************************************/
/*! exports provided: MainMessagingContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainMessagingContentComponent", function() { return MainMessagingContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_Chat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/Chat */ "./src/app/messenger/model/Chat.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_messenger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/messenger.service */ "./src/app/messenger/services/messenger.service.ts");
/* harmony import */ var _model_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/User */ "./src/app/messenger/model/User.ts");
/* harmony import */ var _model_Message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/Message */ "./src/app/messenger/model/Message.ts");
/* harmony import */ var stompjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! stompjs */ "./node_modules/stompjs/index.js");
/* harmony import */ var stompjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(stompjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sockjs-client */ "./node_modules/sockjs-client/lib/entry.js");
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sockjs_client__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_8__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MainMessagingContentComponent = /** @class */ (function () {
    function MainMessagingContentComponent(router, route, messengerService) {
        var _this_1 = this;
        this.router = router;
        this.route = route;
        this.messengerService = messengerService;
        this.currMessage = new _model_Message__WEBPACK_IMPORTED_MODULE_5__["Message"]();
        this.messages = [];
        this.pageNumber = 1;
        router.events.subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                _this_1.pageNumber = 1;
                _this_1.getFirst30Messages();
                _this_1.getChat();
            }
        });
    }
    MainMessagingContentComponent.prototype.ngOnInit = function () {
        this.getChat();
        this.getFirst30Messages();
        this.container = jquery__WEBPACK_IMPORTED_MODULE_8__("#messagesContainer");
        var _this = this;
        setTimeout(function () {
            _this.container.scrollTop(_this.container.prop("scrollHeight")); //scroll down
        }, 500);
        jquery__WEBPACK_IMPORTED_MODULE_8__(document).ready(function () {
            jquery__WEBPACK_IMPORTED_MODULE_8__(_this.container).scroll(function () {
                if (_this.container.scrollTop() < 100) {
                    // _this.getNext30Messages();
                }
            });
        });
    };
    MainMessagingContentComponent.prototype.getChat = function () {
        var _this_1 = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.messengerService.getChat(id).subscribe(function (chat) {
            _this_1.currChat = chat;
            _this_1.currMessage.messageType = "TEXT";
            _this_1.currMessage.user = _this_1.currUser;
            if (_this_1.currChat.avatar == null && _this_1.currChat.interlocutor == null) {
                _this_1.currChat.alternativeAvatar = new _model_Chat__WEBPACK_IMPORTED_MODULE_1__["AlternativeAvatar"]();
                _this_1.currChat.alternativeAvatar.color = _this_1.messengerService.getAvatarColor(_this_1.currChat.chatName);
                _this_1.currChat.alternativeAvatar.letter = _this_1.currChat.chatName.charAt(0);
            }
            var _this = _this_1;
            _this_1.stompClient = stompjs__WEBPACK_IMPORTED_MODULE_6__["over"](new sockjs_client__WEBPACK_IMPORTED_MODULE_7__("http://localhost:8080/ws"));
            _this_1.stompClient.connect({}, function (frame) {
                _this.stompClient.subscribe('/chat/' + chat.id + '/messages', function (newMessage) {
                    var message = JSON.parse(newMessage.body);
                    var castedMessage = new _model_Message__WEBPACK_IMPORTED_MODULE_5__["Message"]();
                    var user = new _model_User__WEBPACK_IMPORTED_MODULE_4__["User"]();
                    castedMessage.user = user = message.user;
                    castedMessage.messageContent = message.messageContent;
                    castedMessage.messageType = message.messageType;
                    castedMessage.createdAt = message.createdAt;
                    if (_this.messages[_this.messages.length - 1].messageContent != castedMessage.messageContent
                        || _this.messages[_this.messages.length - 1].user.id != castedMessage.user.id) {
                        _this.messages.push(castedMessage);
                    }
                    setTimeout(function () {
                        _this.container.scrollTop(_this.container.prop("scrollHeight"));
                    }, 200);
                });
                console.log('Connected: ' + frame);
            });
        });
    };
    MainMessagingContentComponent.prototype.getFirst30Messages = function () {
        var _this_1 = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.messengerService.getNext30Messages(id, 0)
            .subscribe(function (messages) {
            _this_1.messages = messages;
        });
    };
    //
    //
    // getNext30Messages(pageNumber: number) {
    //   const id = +this.route.snapshot.paramMap.get('id');
    //   this.messengerService.getNext30Messages(id, this.pageNumber)
    //     .subscribe(
    //       messages => {
    //         for (let message of messages) {
    //           this.messages.push(message);
    //         }
    //
    //       }
    //     );
    //   this.pageNumber++;
    // }
    MainMessagingContentComponent.prototype.sendMessage = function () {
        if (this.currMessage.messageContent != "") {
            this.stompClient.send('/messenger/' + this.currChat.id + '/message', {}, JSON.stringify(this.currMessage));
            this.currMessage.messageContent = "";
        }
    };
    var _a;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _model_User__WEBPACK_IMPORTED_MODULE_4__["User"])
    ], MainMessagingContentComponent.prototype, "currUser", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", typeof (_a = typeof stompjs__WEBPACK_IMPORTED_MODULE_6__ !== "undefined" && stompjs__WEBPACK_IMPORTED_MODULE_6__) === "function" && _a || Object)
    ], MainMessagingContentComponent.prototype, "stompClient", void 0);
    MainMessagingContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-messaging-content',
            template: __webpack_require__(/*! ./main-messaging-content.component.html */ "./src/app/messenger/main-messaging-content/main-messaging-content.component.html"),
            styles: [__webpack_require__(/*! ./main-messaging-content.component.scss */ "./src/app/messenger/main-messaging-content/main-messaging-content.component.scss"), __webpack_require__(/*! ../general.scss */ "./src/app/messenger/general.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_messenger_service__WEBPACK_IMPORTED_MODULE_3__["MessengerService"]])
    ], MainMessagingContentComponent);
    return MainMessagingContentComponent;
}());



/***/ }),

/***/ "./src/app/messenger/messenger-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/messenger/messenger-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: MessengerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessengerRoutingModule", function() { return MessengerRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _messenger_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messenger.component */ "./src/app/messenger/messenger.component.ts");
/* harmony import */ var _test_web_sockets_test_web_sockets_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./test-web-sockets/test-web-sockets.component */ "./src/app/messenger/test-web-sockets/test-web-sockets.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var messengerRoutes = [
    { path: 'messenger', redirectTo: 'messenger/chat/1', },
    { path: 'messenger/chat/:id', component: _messenger_component__WEBPACK_IMPORTED_MODULE_3__["MessengerComponent"] },
    { path: 'testwebsocket', component: _test_web_sockets_test_web_sockets_component__WEBPACK_IMPORTED_MODULE_4__["TestWebSocketsComponent"] }
];
var MessengerRoutingModule = /** @class */ (function () {
    function MessengerRoutingModule() {
    }
    MessengerRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(messengerRoutes)
            ],
            declarations: []
        })
    ], MessengerRoutingModule);
    return MessengerRoutingModule;
}());



/***/ }),

/***/ "./src/app/messenger/messenger-sidebar/chat-list/chat-list.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/messenger/messenger-sidebar/chat-list/chat-list.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script src=\"chat-list.component.spec.ts\"></script>\r\n<div id=\"contacts\">\r\n  <ul *ngIf=\"chats\">\r\n    <li class=\"contact\" *ngFor=\"let chat of chats | chatSearch : searchQuery\"\r\n        [ngClass]=\"{'active' : chat.id === +route.snapshot.paramMap.get('id')}\">\r\n      <a routerLink=\"/messenger/chat/{{chat.id}}\">\r\n        <div class=\"wrap\" *ngIf=\"chat.chatType == 'PRIVATE_MESSAGES'\">\r\n          <span class=\"contact-status\"\r\n                [ngClass]=\"{\r\n          'online':currentUser.userState == 'ONLINE',\r\n          'away':currentUser.userState == 'AWAY',\r\n          'busy':currentUser.userState == 'BUSY',\r\n          'offline':currentUser.userState == 'OFFLINE'\r\n          }\"></span>\r\n          <img *ngIf=\"chat.interlocutor\" src=\"{{chat.interlocutor.profilePic}}\" class=\"contacts-wrap__img\" alt=\"\"/>\r\n          <div class=\"meta\">\r\n            <p class=\"name\">\r\n              {{chat.chatName}}\r\n            </p>\r\n            <p class=\"preview\">\r\n              {{chat.lastMessage.messageContent}}\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </a>\r\n      <a routerLink=\"/messenger/chat/{{chat.id}}\">\r\n\r\n        <div class=\"wrap\" *ngIf=\"chat.chatType != 'PRIVATE_MESSAGES'\">\r\n          <div *ngIf=\"chat.avatar;then profile_pic else alternative_avatar\"></div>\r\n          <ng-template #profile_pic>\r\n            <img *ngIf=\"chat.interlocutor\" src=\"{{chat.interlocutor.profilePic}}\" class=\"contacts-wrap__img\" alt=\"\"/>\r\n          </ng-template>\r\n          <ng-template #alternative_avatar>\r\n            <div class=\"contacts-wrap__img contacts-wrap__alternative-img\"\r\n                 [ngStyle]=\"{'background-color': chat.alternativeAvatar.color}\">\r\n              {{chat.alternativeAvatar.letter}}\r\n            </div>\r\n          </ng-template>\r\n          <div class=\"meta\">\r\n            <p class=\"name\">\r\n              {{chat.chatName}}\r\n            </p>\r\n            <p class=\"preview\">\r\n              {{chat.lastMessage.messageContent}}\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/messenger/messenger-sidebar/chat-list/chat-list.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/messenger/messenger-sidebar/chat-list/chat-list.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#contacts {\n  height: calc(100% - 177px);\n  overflow-y: scroll;\n  overflow-x: hidden; }\n\n@media screen and (max-width: 735px) {\n  #contacts {\n    height: calc(100% - 149px);\n    overflow-y: scroll;\n    overflow-x: hidden; }\n  #contacts::-webkit-scrollbar {\n    display: none; } }\n\n#contacts.expanded {\n  height: calc(100% - 334px); }\n\n#contacts::-webkit-scrollbar {\n  width: 8px;\n  background: #2c3e50; }\n\n#contacts::-webkit-scrollbar-thumb {\n  background-color: #243140; }\n\nul li.contact {\n  position: relative;\n  padding: 10px 0 15px 0;\n  font-size: 0.9em;\n  cursor: pointer; }\n\n@media screen and (max-width: 735px) {\n  ul li.contact {\n    padding: 6px 0 46px 8px; } }\n\nli:hover {\n  background: #32465a; }\n\nli.active {\n  background: #32465a;\n  border-right: 5px solid #435f7a; }\n\n.active span.contact-status {\n  border: 2px solid #32465a !important; }\n\n.contact a {\n  display: block; }\n\n.wrap {\n  width: 88%;\n  margin: 0 auto;\n  height: 100%;\n  position: relative; }\n\n@media screen and (max-width: 735px) {\n  .wrap {\n    width: 100%; } }\n\n.wrap span {\n  position: absolute;\n  left: 0;\n  margin: -2px 0 0 -2px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  border: 2px solid #2c3e50;\n  background: #95a5a6; }\n\n.wrap span.online {\n  background: #2ecc71; }\n\n.wrap span.away {\n  background: #f1c40f; }\n\n.wrap span.busy {\n  background: #e74c3c; }\n\n.contacts-wrap__img {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  float: left;\n  margin-right: 10px; }\n\n.contacts-wrap__alternative-img {\n  width: 40px;\n  height: 40px;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 600;\n  font-size: 24px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  float: left;\n  margin-right: 10px; }\n\n@media screen and (max-width: 735px) {\n  .wrap img {\n    margin-right: 0px; }\n  .contacts-wrap__alternative-img {\n    margin-right: 0; } }\n\n.wrap .meta {\n  padding: 5px 0 0 0; }\n\n@media screen and (max-width: 735px) {\n  .wrap .meta {\n    display: none; } }\n\n.wrap .meta .name {\n  font-weight: 600; }\n\n.wrap .meta .preview {\n  margin: 5px 0 0 0;\n  padding: 0 0 1px;\n  font-weight: 400;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  transition: 1s all ease; }\n\n.wrap .meta .preview span {\n  position: initial;\n  border-radius: initial;\n  background: none;\n  border: none;\n  padding: 0 2px 0 0;\n  margin: 0 0 0 1px;\n  opacity: .5; }\n\na {\n  color: inherit;\n  text-decoration: none; }\n"

/***/ }),

/***/ "./src/app/messenger/messenger-sidebar/chat-list/chat-list.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/messenger/messenger-sidebar/chat-list/chat-list.component.ts ***!
  \******************************************************************************/
/*! exports provided: ChatListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatListComponent", function() { return ChatListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/User */ "./src/app/messenger/model/User.ts");
/* harmony import */ var _model_Chat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/Chat */ "./src/app/messenger/model/Chat.ts");
/* harmony import */ var _services_messenger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/messenger.service */ "./src/app/messenger/services/messenger.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_message_web_sockets_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/message-web-sockets.service */ "./src/app/messenger/services/message-web-sockets.service.ts");
/* harmony import */ var stompjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! stompjs */ "./node_modules/stompjs/index.js");
/* harmony import */ var stompjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(stompjs__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ChatListComponent = /** @class */ (function () {
    function ChatListComponent(messageWebSocketService, messengerService, route) {
        this.messageWebSocketService = messageWebSocketService;
        this.messengerService = messengerService;
        this.route = route;
        this.searchQuery = '';
        this.chats = [];
    }
    ChatListComponent.prototype.ngOnInit = function () {
        this.getChats();
        this.stompClient = this.messageWebSocketService.connect();
    };
    ChatListComponent.prototype.getChats = function () {
        var _this = this;
        this.messengerService.getChats(this.currentUser).subscribe(function (chats) {
            _this.chats = chats;
            for (var _i = 0, _a = _this.chats; _i < _a.length; _i++) {
                var chat = _a[_i];
                if (chat.avatar == null && chat.interlocutor == null) {
                    chat.alternativeAvatar = new _model_Chat__WEBPACK_IMPORTED_MODULE_2__["AlternativeAvatar"]();
                    chat.alternativeAvatar.color = _this.messengerService.getAvatarColor(chat.chatName);
                    chat.alternativeAvatar.letter = chat.chatName.charAt(0);
                }
                // const _this = this;
                // this.stompClient = Stomp.over(new SockJS("http://localhost:8080/messenger"));
                // this.stompClient.connect({}, function (frame) {
                //   _this.stompClient.subscribe('/messenger/' + chat.id + '/messages',
                //     function (newMessage: Message) {
                //       chat.lastMessage = newMessage;
                //     });
                //   console.log('Connected: ' + frame);
                // });
                // this.stompClient.subscribe('/messenger/' + chat.id + '/messages',
                //   function (newMessage: Message) {
                //     chat.lastMessage = newMessage;
                //   });
                // debugger;
            }
        });
    };
    var _a;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ChatListComponent.prototype, "searchQuery", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _model_User__WEBPACK_IMPORTED_MODULE_1__["User"])
    ], ChatListComponent.prototype, "currentUser", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", typeof (_a = typeof stompjs__WEBPACK_IMPORTED_MODULE_6__ !== "undefined" && stompjs__WEBPACK_IMPORTED_MODULE_6__) === "function" && _a || Object)
    ], ChatListComponent.prototype, "stompClient", void 0);
    ChatListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat-list',
            template: __webpack_require__(/*! ./chat-list.component.html */ "./src/app/messenger/messenger-sidebar/chat-list/chat-list.component.html"),
            styles: [__webpack_require__(/*! ./chat-list.component.scss */ "./src/app/messenger/messenger-sidebar/chat-list/chat-list.component.scss"), __webpack_require__(/*! ../../general.scss */ "./src/app/messenger/general.scss")]
        }),
        __metadata("design:paramtypes", [_services_message_web_sockets_service__WEBPACK_IMPORTED_MODULE_5__["MessageWebSocketsService"],
            _services_messenger_service__WEBPACK_IMPORTED_MODULE_3__["MessengerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], ChatListComponent);
    return ChatListComponent;
}());



/***/ }),

/***/ "./src/app/messenger/messenger-sidebar/chat-sidebar.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/messenger/messenger-sidebar/chat-sidebar.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"sidepanel\">\r\n\r\n  <app-personal-info [currentUser]=\"currentUser\"></app-personal-info>\r\n\r\n  <div id=\"search\">\r\n    <label for=\"chatSearch\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></label>\r\n    <input id=\"chatSearch\" type=\"text\" [(ngModel)]=\"chatsSearchQuery\" placeholder=\"Search contacts...\" />\r\n  </div>\r\n\r\n  <app-chat-list [currentUser]=\"currentUser\" [searchQuery]=\"chatsSearchQuery\"></app-chat-list>\r\n\r\n  <div id=\"bottom-bar\">\r\n    <button id=\"addcontact\"><i class=\"fa fa-user-plus fa-fw\" aria-hidden=\"true\"></i> <span>Add contact</span></button>\r\n    <button id=\"settings\"><i class=\"fa fa-cog fa-fw\" aria-hidden=\"true\"></i> <span>Settings</span></button>\r\n  </div>\r\n\r\n\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/messenger/messenger-sidebar/chat-sidebar.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/messenger/messenger-sidebar/chat-sidebar.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#search {\n  border-top: 1px solid #32465a;\n  border-bottom: 1px solid #32465a;\n  font-weight: 300; }\n\n@media screen and (max-width: 735px) {\n  #search {\n    display: none; } }\n\n#search label {\n  position: absolute;\n  margin: 10px 0 0 20px; }\n\n#search input {\n  font-family: 'Montserrat', sans-serif;\n  padding: 10px 0 10px 46px;\n  width: calc(100% - 25px);\n  border: none;\n  background: #32465a;\n  color: #f5f5f5; }\n\n#search input:focus {\n  outline: none;\n  background: #435f7a; }\n\n#search input::-webkit-input-placeholder {\n  color: #f5f5f5; }\n\n#search input::-moz-placeholder {\n  color: #f5f5f5; }\n\n#search input:-ms-input-placeholder {\n  color: #f5f5f5; }\n\n#search input:-moz-placeholder {\n  color: #f5f5f5; }\n\n#sidepanel {\n  float: left;\n  min-width: 280px;\n  max-width: 340px;\n  width: 40%;\n  height: 100%;\n  background: #2c3e50;\n  color: #f5f5f5;\n  overflow: hidden;\n  position: relative; }\n\n@media screen and (max-width: 735px) {\n  #sidepanel {\n    width: 58px;\n    min-width: 58px; } }\n\n#bottom-bar {\n  position: absolute;\n  width: 100%;\n  bottom: 0; }\n\n#bottom-bar button {\n  float: left;\n  border: none;\n  width: 50%;\n  padding: 10px 0;\n  background: #32465a;\n  color: #f5f5f5;\n  cursor: pointer;\n  font-size: 0.85em;\n  font-family: 'Montserrat', sans-serif; }\n\n@media screen and (max-width: 735px) {\n  #bottom-bar button {\n    float: none;\n    width: 100%;\n    padding: 15px 0; } }\n\n#bottom-bar button:focus {\n  outline: none; }\n\n#bottom-bar button:nth-child(1) {\n  border-right: 1px solid #2c3e50; }\n\n@media screen and (max-width: 735px) {\n  #bottom-bar button:nth-child(1) {\n    border-right: none;\n    border-bottom: 1px solid #2c3e50; } }\n\n#bottom-bar button:hover {\n  background: #435f7a; }\n\n#bottom-bar button i {\n  margin-right: 3px;\n  font-size: 1em; }\n\n@media screen and (max-width: 735px) {\n  #bottom-bar button i {\n    font-size: 1.3em; } }\n\n@media screen and (max-width: 735px) {\n  #bottom-bar button span {\n    display: none; } }\n"

/***/ }),

/***/ "./src/app/messenger/messenger-sidebar/chat-sidebar.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/messenger/messenger-sidebar/chat-sidebar.component.ts ***!
  \***********************************************************************/
/*! exports provided: ChatSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatSidebarComponent", function() { return ChatSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/User */ "./src/app/messenger/model/User.ts");
/* harmony import */ var stompjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! stompjs */ "./node_modules/stompjs/index.js");
/* harmony import */ var stompjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(stompjs__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatSidebarComponent = /** @class */ (function () {
    function ChatSidebarComponent() {
        this.chatsSearchQuery = '';
    }
    ChatSidebarComponent.prototype.ngOnInit = function () {
    };
    var _a;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", typeof (_a = typeof stompjs__WEBPACK_IMPORTED_MODULE_2__ !== "undefined" && stompjs__WEBPACK_IMPORTED_MODULE_2__) === "function" && _a || Object)
    ], ChatSidebarComponent.prototype, "stompClient", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _model_User__WEBPACK_IMPORTED_MODULE_1__["User"])
    ], ChatSidebarComponent.prototype, "currentUser", void 0);
    ChatSidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat-sidebar',
            template: __webpack_require__(/*! ./chat-sidebar.component.html */ "./src/app/messenger/messenger-sidebar/chat-sidebar.component.html"),
            styles: [__webpack_require__(/*! ./chat-sidebar.component.scss */ "./src/app/messenger/messenger-sidebar/chat-sidebar.component.scss"), __webpack_require__(/*! ../general.scss */ "./src/app/messenger/general.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ChatSidebarComponent);
    return ChatSidebarComponent;
}());



/***/ }),

/***/ "./src/app/messenger/messenger-sidebar/personal-info/personal-info.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/messenger/messenger-sidebar/personal-info/personal-info.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script src=\"../../model/Chat.ts\"></script>\r\n<div id=\"profile\" *ngIf=\"currentUser\">\r\n\r\n  <div class=\"wrap\">\r\n    <img id=\"profile-img\" (click)=\"profileImgClick()\"\r\n         src=\"{{currentUser.profilePic}}\"\r\n         [ngClass]=\"{\r\n          'online':currentUser.userState === 'ONLINE',\r\n          'away':currentUser.userState === 'AWAY',\r\n          'busy':currentUser.userState === 'BUSY',\r\n          'offline':currentUser.userState === 'OFFLINE'\r\n         }\"\r\n         class=\"\" alt=\"\"/>\r\n    <p>{{currentUser.firstName + ' ' + currentUser.lastName}}</p>\r\n    <i class=\"fa fa-chevron-down expand-button\" aria-hidden=\"true\"></i>\r\n    <div id=\"status-options\">\r\n      <ul>\r\n        <li id=\"status-online\" class=\"active\" (click)=\"statusOptionChecked()\"><span\r\n          class=\"status-circle\"></span>\r\n          <p>Online</p></li>\r\n        <li id=\"status-away\"><span class=\"status-circle\"></span>\r\n          <p>Away</p></li>\r\n        <li id=\"status-busy\"><span class=\"status-circle\"></span>\r\n          <p>Busy</p></li>\r\n        <li id=\"status-offline\"><span class=\"status-circle\"></span>\r\n          <p>Offline</p></li>\r\n      </ul>\r\n    </div>\r\n    <div id=\"expanded\" *ngIf=\"currentUser.socialNetworks\" (click)=\"expandBtnClick()\">\r\n      <div *ngFor=\"let socialNetwork of currentUser.socialNetworks\">\r\n        <label>\r\n          <i class=\"fa fa-fw\" aria-hidden=\"true\" [ngClass]=\"{\r\n          'fa-facebook':socialNetwork.socialNetworkName === 'FACEBOOK',\r\n          'fa-instagram':socialNetwork.socialNetworkName === 'INSTAGRAM',\r\n          'fa-twitter':socialNetwork.socialNetworkName === 'TWITTER'\r\n         }\"></i>\r\n        </label>\r\n        <input type=\"text\" disabled name=\"{{socialNetwork.socialNetworkName}}\"\r\n               value=\"{{socialNetwork.nickName}}\"/>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/messenger/messenger-sidebar/personal-info/personal-info.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/messenger/messenger-sidebar/personal-info/personal-info.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#profile {\n  width: 80%;\n  margin: 25px auto; }\n\n@media screen and (max-width: 735px) {\n  #profile {\n    width: 100%;\n    margin: 0 auto;\n    padding: 5px 0 0 0;\n    background: #32465a; } }\n\n#profile.expanded .wrap {\n  height: 210px;\n  line-height: initial; }\n\n#profile.expanded .wrap p {\n  margin-top: 20px; }\n\n#profile.expanded .wrap i.expand-button {\n  -webkit-transform: scaleY(-1);\n  transform: scaleY(-1);\n  -webkit-filter: FlipH;\n          filter: FlipH;\n  -ms-filter: \"FlipH\"; }\n\n#profile .wrap {\n  height: 60px;\n  line-height: 60px;\n  overflow: hidden;\n  transition: 0.3s height ease; }\n\n@media screen and (max-width: 735px) {\n  #profile .wrap {\n    height: 55px; } }\n\n#profile .wrap img {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  padding: 3px;\n  border: 2px solid #e74c3c;\n  float: left;\n  cursor: pointer;\n  transition: 0.3s border ease; }\n\n@media screen and (max-width: 735px) {\n  #profile .wrap img {\n    width: 40px;\n    margin-left: 4px; } }\n\n#profile .wrap img.online {\n  border: 2px solid #2ecc71; }\n\n#profile .wrap img.away {\n  border: 2px solid #f1c40f; }\n\n#profile .wrap img.busy {\n  border: 2px solid #e74c3c; }\n\n#profile .wrap img.offline {\n  border: 2px solid #95a5a6; }\n\n#profile .wrap p {\n  float: left;\n  margin-left: 15px; }\n\n@media screen and (max-width: 735px) {\n  #profile .wrap p {\n    display: none; } }\n\n#profile .wrap i.expand-button {\n  float: right;\n  margin-top: 23px;\n  font-size: 0.8em;\n  cursor: pointer;\n  color: #435f7a; }\n\n@media screen and (max-width: 735px) {\n  #profile .wrap i.expand-button {\n    display: none; } }\n\n#profile .wrap #status-options {\n  position: absolute;\n  opacity: 0;\n  visibility: hidden;\n  width: 150px;\n  margin: 70px 0 0 0;\n  border-radius: 6px;\n  z-index: 99;\n  line-height: initial;\n  background: #435f7a;\n  transition: 0.3s all ease; }\n\n@media screen and (max-width: 735px) {\n  #profile .wrap #status-options {\n    width: 58px;\n    margin-top: 57px; } }\n\n#profile .wrap #status-options.active {\n  opacity: 1;\n  visibility: visible;\n  margin: 75px 0 0 0; }\n\n@media screen and (max-width: 735px) {\n  #profile .wrap #status-options.active {\n    margin-top: 62px; } }\n\n#profile .wrap #status-options:before {\n  content: '';\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-bottom: 8px solid #435f7a;\n  margin: -8px 0 0 24px; }\n\n@media screen and (max-width: 735px) {\n  #profile .wrap #status-options:before {\n    margin-left: 23px; } }\n\n#profile .wrap #status-options ul {\n  overflow: hidden;\n  border-radius: 6px; }\n\n#profile .wrap #status-options ul li {\n  padding: 15px 0 30px 18px;\n  display: block;\n  cursor: pointer; }\n\n@media screen and (max-width: 735px) {\n  #profile .wrap #status-options ul li {\n    padding: 15px 0 35px 22px; } }\n\n#profile .wrap #status-options ul li:hover {\n  background: #496886; }\n\n#profile .wrap #status-options ul li span.status-circle {\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  margin: 5px 0 0 0; }\n\n@media screen and (max-width: 735px) {\n  #profile .wrap #status-options ul li span.status-circle {\n    width: 14px;\n    height: 14px; } }\n\n#profile .wrap #status-options ul li span.status-circle:before {\n  content: '';\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  margin: -3px 0 0 -3px;\n  background: transparent;\n  border-radius: 50%;\n  z-index: 0; }\n\n@media screen and (max-width: 735px) {\n  #profile .wrap #status-options ul li span.status-circle:before {\n    height: 18px;\n    width: 18px; } }\n\n#profile .wrap #status-options ul li p {\n  padding-left: 12px; }\n\n@media screen and (max-width: 735px) {\n  #profile .wrap #status-options ul li p {\n    display: none; } }\n\n#profile .wrap #status-options ul li#status-online span.status-circle {\n  background: #2ecc71; }\n\n#profile .wrap #status-options ul li#status-online.active span.status-circle:before {\n  border: 1px solid #2ecc71; }\n\n#profile .wrap #status-options ul li#status-away span.status-circle {\n  background: #f1c40f; }\n\n#profile .wrap #status-options ul li#status-away.active span.status-circle:before {\n  border: 1px solid #f1c40f; }\n\n#profile .wrap #status-options ul li#status-busy span.status-circle {\n  background: #e74c3c; }\n\n#profile .wrap #status-options ul li#status-busy.active span.status-circle:before {\n  border: 1px solid #e74c3c; }\n\n#profile .wrap #status-options ul li#status-offline span.status-circle {\n  background: #95a5a6; }\n\n#profile .wrap #status-options ul li#status-offline.active span.status-circle:before {\n  border: 1px solid #95a5a6; }\n\n#profile .wrap #expanded {\n  padding: 100px 0 0 0;\n  display: block;\n  line-height: initial !important; }\n\n#profile .wrap #expanded label {\n  float: left;\n  clear: both;\n  margin: 0 8px 5px 0;\n  padding: 5px 0; }\n\n#profile .wrap #expanded input {\n  border: none;\n  margin-bottom: 6px;\n  background: #32465a;\n  border-radius: 3px;\n  color: #f5f5f5;\n  padding: 7px;\n  width: calc(100% - 43px); }\n\n#profile .wrap #expanded input:focus {\n  outline: none;\n  background: #435f7a; }\n"

/***/ }),

/***/ "./src/app/messenger/messenger-sidebar/personal-info/personal-info.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/messenger/messenger-sidebar/personal-info/personal-info.component.ts ***!
  \**************************************************************************************/
/*! exports provided: PersonalInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalInfoComponent", function() { return PersonalInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _model_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/User */ "./src/app/messenger/model/User.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PersonalInfoComponent = /** @class */ (function () {
    function PersonalInfoComponent() {
    }
    PersonalInfoComponent.prototype.ngOnInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_1__(document).ready(function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__(".messages").animate({ scrollTop: jquery__WEBPACK_IMPORTED_MODULE_1__(document).height() }, "fast");
            jquery__WEBPACK_IMPORTED_MODULE_1__("#profile-img").click(function () {
                jquery__WEBPACK_IMPORTED_MODULE_1__("#status-options").toggleClass("active");
            });
            jquery__WEBPACK_IMPORTED_MODULE_1__(".expand-button").click(function () {
                jquery__WEBPACK_IMPORTED_MODULE_1__("#profile").toggleClass("expanded");
                jquery__WEBPACK_IMPORTED_MODULE_1__("#contacts").toggleClass("expanded");
            });
            jquery__WEBPACK_IMPORTED_MODULE_1__("#status-options ul li").click(function () {
                jquery__WEBPACK_IMPORTED_MODULE_1__("#profile-img").removeClass();
                jquery__WEBPACK_IMPORTED_MODULE_1__("#status-online").removeClass("active");
                jquery__WEBPACK_IMPORTED_MODULE_1__("#status-away").removeClass("active");
                jquery__WEBPACK_IMPORTED_MODULE_1__("#status-busy").removeClass("active");
                jquery__WEBPACK_IMPORTED_MODULE_1__("#status-offline").removeClass("active");
                jquery__WEBPACK_IMPORTED_MODULE_1__(this).addClass("active");
                if (jquery__WEBPACK_IMPORTED_MODULE_1__("#status-online").hasClass("active")) {
                    jquery__WEBPACK_IMPORTED_MODULE_1__("#profile-img").addClass("online");
                }
                else if (jquery__WEBPACK_IMPORTED_MODULE_1__("#status-away").hasClass("active")) {
                    jquery__WEBPACK_IMPORTED_MODULE_1__("#profile-img").addClass("away");
                }
                else if (jquery__WEBPACK_IMPORTED_MODULE_1__("#status-busy").hasClass("active")) {
                    jquery__WEBPACK_IMPORTED_MODULE_1__("#profile-img").addClass("busy");
                }
                else if (jquery__WEBPACK_IMPORTED_MODULE_1__("#status-offline").hasClass("active")) {
                    jquery__WEBPACK_IMPORTED_MODULE_1__("#profile-img").addClass("offline");
                }
                else {
                    jquery__WEBPACK_IMPORTED_MODULE_1__("#profile-img").removeClass();
                }
                ;
                jquery__WEBPACK_IMPORTED_MODULE_1__("#status-options").removeClass("active");
            });
        });
    };
    PersonalInfoComponent.prototype.statusOptionChecked = function () {
    };
    PersonalInfoComponent.prototype.profileImgClick = function () {
    };
    PersonalInfoComponent.prototype.expandBtnClick = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _model_User__WEBPACK_IMPORTED_MODULE_2__["User"])
    ], PersonalInfoComponent.prototype, "currentUser", void 0);
    PersonalInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-personal-info',
            template: __webpack_require__(/*! ./personal-info.component.html */ "./src/app/messenger/messenger-sidebar/personal-info/personal-info.component.html"),
            styles: [__webpack_require__(/*! ./personal-info.component.scss */ "./src/app/messenger/messenger-sidebar/personal-info/personal-info.component.scss"), __webpack_require__(/*! ../../general.scss */ "./src/app/messenger/general.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PersonalInfoComponent);
    return PersonalInfoComponent;
}());



/***/ }),

/***/ "./src/app/messenger/messenger.component.html":
/*!****************************************************!*\
  !*** ./src/app/messenger/messenger.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"frame\">\r\n\r\n  <app-chat-sidebar [currentUser]=\"currentUser\" [stompClient]=\"stompClient\"></app-chat-sidebar>\r\n  <app-main-messaging-content [currUser]=\"currentUser\" [stompClient]=\"stompClient\"></app-main-messaging-content>\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/messenger/messenger.component.scss":
/*!****************************************************!*\
  !*** ./src/app/messenger/messenger.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://fonts.googleapis.com/css?family=Montserrat:400,400i,500,500i,700,700i\");\n@import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\");\nhtml, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  font-size: 100%;\r\n  font: inherit;\r\n  vertical-align: baseline\r\n}\narticle, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {\r\n  display: block\r\n}\nbody {\r\n  line-height: 1\r\n}\nol, ul {\r\n  list-style: none\r\n}\nblockquote, q {\r\n  quotes: none\r\n}\nblockquote:before, blockquote:after, q:before, q:after {\r\n  content: '';\r\n  content: none\r\n}\ntable {\r\n  border-collapse: collapse;\r\n  border-spacing: 0\r\n}\n#frame {\n  width: 95%;\n  min-width: 360px;\n  max-width: 1000px;\n  height: 92vh;\n  min-height: 300px;\n  max-height: 720px;\n  background: #E6EAEA; }\n"

/***/ }),

/***/ "./src/app/messenger/messenger.component.ts":
/*!**************************************************!*\
  !*** ./src/app/messenger/messenger.component.ts ***!
  \**************************************************/
/*! exports provided: MessengerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessengerComponent", function() { return MessengerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_messenger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/messenger.service */ "./src/app/messenger/services/messenger.service.ts");
/* harmony import */ var _services_message_web_sockets_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/message-web-sockets.service */ "./src/app/messenger/services/message-web-sockets.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessengerComponent = /** @class */ (function () {
    function MessengerComponent(messageWebSocketService, messengerService) {
        this.messageWebSocketService = messageWebSocketService;
        this.messengerService = messengerService;
    }
    MessengerComponent.prototype.ngOnInit = function () {
        //this.stompClient = this.messageWebSocketService.connect();
        this.getCurrUser();
    };
    MessengerComponent.prototype.ngOnDestroy = function () {
        this.messageWebSocketService.disconnect();
    };
    MessengerComponent.prototype.getCurrUser = function () {
        var _this = this;
        this.messengerService.getCurrentUser().subscribe(function (user) {
            _this.currentUser = user;
        });
    };
    MessengerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./messenger.component.html */ "./src/app/messenger/messenger.component.html"),
            styles: [__webpack_require__(/*! ./messenger.component.scss */ "./src/app/messenger/messenger.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_message_web_sockets_service__WEBPACK_IMPORTED_MODULE_2__["MessageWebSocketsService"],
            _services_messenger_service__WEBPACK_IMPORTED_MODULE_1__["MessengerService"]])
    ], MessengerComponent);
    return MessengerComponent;
}());



/***/ }),

/***/ "./src/app/messenger/messenger.module.ts":
/*!***********************************************!*\
  !*** ./src/app/messenger/messenger.module.ts ***!
  \***********************************************/
/*! exports provided: MessengerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessengerModule", function() { return MessengerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _messenger_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messenger-routing.module */ "./src/app/messenger/messenger-routing.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _test_web_sockets_test_web_sockets_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./test-web-sockets/test-web-sockets.component */ "./src/app/messenger/test-web-sockets/test-web-sockets.component.ts");
/* harmony import */ var _messenger_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./messenger.component */ "./src/app/messenger/messenger.component.ts");
/* harmony import */ var _messenger_sidebar_personal_info_personal_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./messenger-sidebar/personal-info/personal-info.component */ "./src/app/messenger/messenger-sidebar/personal-info/personal-info.component.ts");
/* harmony import */ var _messenger_sidebar_chat_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./messenger-sidebar/chat-sidebar.component */ "./src/app/messenger/messenger-sidebar/chat-sidebar.component.ts");
/* harmony import */ var _messenger_sidebar_chat_list_chat_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./messenger-sidebar/chat-list/chat-list.component */ "./src/app/messenger/messenger-sidebar/chat-list/chat-list.component.ts");
/* harmony import */ var _main_messaging_content_main_messaging_content_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main-messaging-content/main-messaging-content.component */ "./src/app/messenger/main-messaging-content/main-messaging-content.component.ts");
/* harmony import */ var _main_messaging_content_chat_info_chat_info_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./main-messaging-content/chat-info/chat-info.component */ "./src/app/messenger/main-messaging-content/chat-info/chat-info.component.ts");
/* harmony import */ var _pipes_chat_search_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pipes/chat-search.pipe */ "./src/app/messenger/pipes/chat-search.pipe.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var MessengerModule = /** @class */ (function () {
    function MessengerModule() {
    }
    MessengerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _messenger_routing_module__WEBPACK_IMPORTED_MODULE_2__["MessengerRoutingModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"],
            ],
            declarations: [
                _test_web_sockets_test_web_sockets_component__WEBPACK_IMPORTED_MODULE_5__["TestWebSocketsComponent"],
                _messenger_component__WEBPACK_IMPORTED_MODULE_6__["MessengerComponent"],
                _messenger_sidebar_personal_info_personal_info_component__WEBPACK_IMPORTED_MODULE_7__["PersonalInfoComponent"],
                _messenger_sidebar_chat_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["ChatSidebarComponent"],
                _messenger_sidebar_chat_list_chat_list_component__WEBPACK_IMPORTED_MODULE_9__["ChatListComponent"],
                _main_messaging_content_main_messaging_content_component__WEBPACK_IMPORTED_MODULE_10__["MainMessagingContentComponent"],
                _main_messaging_content_chat_info_chat_info_component__WEBPACK_IMPORTED_MODULE_11__["ChatInfoComponent"],
                _pipes_chat_search_pipe__WEBPACK_IMPORTED_MODULE_12__["ChatSearchPipe"]
            ]
        })
    ], MessengerModule);
    return MessengerModule;
}());



/***/ }),

/***/ "./src/app/messenger/model/Chat.ts":
/*!*****************************************!*\
  !*** ./src/app/messenger/model/Chat.ts ***!
  \*****************************************/
/*! exports provided: Chat, AlternativeAvatar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chat", function() { return Chat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlternativeAvatar", function() { return AlternativeAvatar; });
var Chat = /** @class */ (function () {
    function Chat() {
    }
    return Chat;
}());

var AlternativeAvatar = /** @class */ (function () {
    function AlternativeAvatar() {
    }
    return AlternativeAvatar;
}());

// export enum ChatType {
//   PRIVATE_MESSAGES,
//   PRIVATE_GROUP,
//   PUBLIC_GROUP
// }


/***/ }),

/***/ "./src/app/messenger/model/Message.ts":
/*!********************************************!*\
  !*** ./src/app/messenger/model/Message.ts ***!
  \********************************************/
/*! exports provided: Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
var Message = /** @class */ (function () {
    function Message() {
    }
    return Message;
}());

// export enum MessageType {
//   TEXT,
//   PHOTO,
//   VIDEO,
//   AUDIO
// }


/***/ }),

/***/ "./src/app/messenger/model/User.ts":
/*!*****************************************!*\
  !*** ./src/app/messenger/model/User.ts ***!
  \*****************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());

//
// export enum Status {
//   ONLINE,
//   AWAY,
//   BUSY,
//   OFFLINE
// }
var SocialNetwork = /** @class */ (function () {
    function SocialNetwork() {
    }
    return SocialNetwork;
}());


/***/ }),

/***/ "./src/app/messenger/pipes/chat-search.pipe.ts":
/*!*****************************************************!*\
  !*** ./src/app/messenger/pipes/chat-search.pipe.ts ***!
  \*****************************************************/
/*! exports provided: ChatSearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatSearchPipe", function() { return ChatSearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ChatSearchPipe = /** @class */ (function () {
    function ChatSearchPipe() {
    }
    ChatSearchPipe.prototype.transform = function (chats, term) {
        return chats.filter(function (chat) {
            var currName = chat.chatName;
            return currName.toLowerCase().startsWith(term.toLowerCase());
        });
    };
    ChatSearchPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'chatSearch' })
    ], ChatSearchPipe);
    return ChatSearchPipe;
}());



/***/ }),

/***/ "./src/app/messenger/services/message-web-sockets.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/messenger/services/message-web-sockets.service.ts ***!
  \*******************************************************************/
/*! exports provided: MessageWebSocketsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageWebSocketsService", function() { return MessageWebSocketsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var stompjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stompjs */ "./node_modules/stompjs/index.js");
/* harmony import */ var stompjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(stompjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sockjs-client */ "./node_modules/sockjs-client/lib/entry.js");
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sockjs_client__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessageWebSocketsService = /** @class */ (function () {
    function MessageWebSocketsService() {
        this.stompClient = null;
        this.baseUrl = "http://localhost:8080";
        this.urlToConnect = "";
    }
    MessageWebSocketsService.prototype.setConnected = function (connected) {
    };
    MessageWebSocketsService.prototype.connect = function () {
        var socket = new sockjs_client__WEBPACK_IMPORTED_MODULE_2__(this.baseUrl + '/messenger');
        this.stompClient = stompjs__WEBPACK_IMPORTED_MODULE_1__["over"](socket);
        this.stompClient.connect({}, function (frame) {
            console.log('Connected: ' + frame);
        });
        return this.stompClient;
    };
    MessageWebSocketsService.prototype.subscribe = function (chatId, message) {
        this.stompClient.subscribe('/messenger/' + chatId + '/messages', function (currMessage) {
            message = currMessage;
        });
    };
    MessageWebSocketsService.prototype.disconnect = function () {
        if (this.stompClient != null) {
            this.stompClient.disconnect();
        }
        console.log('Disconnected!');
    };
    MessageWebSocketsService.prototype.sendMessage = function (chatId, message) {
        this.stompClient.send('/messenger/' + chatId + '/message', {}, JSON.stringify(message));
    };
    MessageWebSocketsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], MessageWebSocketsService);
    return MessageWebSocketsService;
}());



/***/ }),

/***/ "./src/app/messenger/services/messenger.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/messenger/services/messenger.service.ts ***!
  \*********************************************************/
/*! exports provided: MessengerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessengerService", function() { return MessengerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var HARDCODED_USER_ID = 1;
var colors = [
    '#2196F3', '#32c787', '#00BCD4', '#ff5652',
    '#ffc107', '#ff85af', '#FF9800', '#39bbb0'
];
var MessengerService = /** @class */ (function () {
    function MessengerService(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.baseUrl = "http://localhost:8080/";
    }
    MessengerService.prototype.getChats = function (user) {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.userId = params['userId'];
        });
        if (this.userId) {
            return this.http.get(this.baseUrl + "messenger/" + this.userId + "/chats");
        }
        return this.http.get(this.baseUrl + "messenger/" + HARDCODED_USER_ID + "/chats");
    };
    MessengerService.prototype.getChat = function (id) {
        return this.http.get(this.baseUrl + "messenger/chat/" + id);
    };
    MessengerService.prototype.getCurrentUser = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.userId = params['userId'];
        });
        if (this.userId) {
            return this.http.get(this.baseUrl + "messenger/user/" + this.userId);
        }
        return this.http.get(this.baseUrl + "messenger/user/" + HARDCODED_USER_ID);
    };
    MessengerService.prototype.getNext30Messages = function (chatId, pageNumber) {
        var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('pageNumber', pageNumber.toString());
        return this.http.get(this.baseUrl + "messenger/chat/" + chatId + "/messages", { params: httpParams });
    };
    MessengerService.prototype.getInterlocutor = function (userId) {
        return this.http.get(this.baseUrl + "messenger/user/" + userId);
    };
    MessengerService.prototype.setInterlocutor = function (chat, currentUser) {
    };
    MessengerService.prototype.getAvatarColor = function (chatName) {
        var hash = 0;
        for (var i = 0; i < chatName.length; i++) {
            hash = 31 * hash + chatName.charCodeAt(i);
        }
        var index = Math.abs(hash % colors.length);
        return colors[index];
    };
    MessengerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], MessengerService);
    return MessengerService;
}());



/***/ }),

/***/ "./src/app/messenger/test-web-sockets/test-web-sockets.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/messenger/test-web-sockets/test-web-sockets.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form-inline\">\r\n  <div class=\"form-group\">\r\n    <label for=\"connect\">Make Connection:</label>\r\n    <button id=\"connect\" class=\"btn btn-default\" type=\"button\" [disabled]=\"!disabled\" (click)=\"connect()\">Connect\r\n    </button>\r\n    <button id=\"disconnect\" class=\"btn btn-default\" type=\"submit\" [disabled]=\"disabled\" (click)=\"disconnect()\">\r\n      Disconnect\r\n    </button>\r\n  </div>\r\n</form>\r\n\r\n<form class=\"form-inline\" style=\"margin-top: 20px;\">\r\n  <div class=\"form-group\">\r\n    <label for=\"name\">User's Name:</label>\r\n    <input type=\"text\" id=\"name\" name=\"name\" class=\"form-control\" [(ngModel)]=\"messageContent\"/>\r\n  </div>\r\n  <button id=\"send\" class=\"btn btn-default\" type=\"button\" (click)=\"sendMessage()\">Send</button>\r\n</form>\r\n\r\n<table id=\"conversation\" class=\"table table-striped\" style=\"margin-top: 20px;\">\r\n  <thead>\r\n  <tr>\r\n    <th>Greetings</th>\r\n  </tr>\r\n  </thead>\r\n  <tbody *ngFor=\"let message of messages\">\r\n  <tr>\r\n    <td>{{message}}</td>\r\n  </tr>\r\n  </tbody>\r\n</table>\r\n\r\n"

/***/ }),

/***/ "./src/app/messenger/test-web-sockets/test-web-sockets.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/messenger/test-web-sockets/test-web-sockets.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/messenger/test-web-sockets/test-web-sockets.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/messenger/test-web-sockets/test-web-sockets.component.ts ***!
  \**************************************************************************/
/*! exports provided: TestWebSocketsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestWebSocketsComponent", function() { return TestWebSocketsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var stompjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stompjs */ "./node_modules/stompjs/index.js");
/* harmony import */ var stompjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(stompjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sockjs-client */ "./node_modules/sockjs-client/lib/entry.js");
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sockjs_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _model_Message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/Message */ "./src/app/messenger/model/Message.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TestWebSocketsComponent = /** @class */ (function () {
    function TestWebSocketsComponent() {
        this.title = 'JavaSampleApproach';
        this.description = 'Angular-WebSocket Demo';
        this.messages = [];
        this.stompClient = null;
    }
    TestWebSocketsComponent.prototype.setConnected = function (connected) {
        this.disabled = !connected;
        if (connected) {
            this.messages = [];
        }
    };
    TestWebSocketsComponent.prototype.connect = function () {
        var socket = new sockjs_client__WEBPACK_IMPORTED_MODULE_2__('http://localhost:8080/ws');
        this.stompClient = stompjs__WEBPACK_IMPORTED_MODULE_1__["over"](socket);
        var _this = this;
        this.stompClient.connect({}, function (frame) {
            _this.setConnected(true);
            console.log('Connected: ' + frame);
            _this.stompClient.subscribe('/chat/1/messages', function (message) {
                var json = JSON.parse(message.body);
                _this.showMessages(json.messageContent);
            });
        });
    };
    TestWebSocketsComponent.prototype.disconnect = function () {
        if (this.stompClient != null) {
            this.stompClient.disconnect();
        }
        this.setConnected(false);
        console.log('Disconnected!');
    };
    TestWebSocketsComponent.prototype.sendMessage = function () {
        var message = new _model_Message__WEBPACK_IMPORTED_MODULE_3__["Message"]();
        message.messageContent = this.messageContent;
        this.stompClient.send('/messenger/1/message', {}, JSON.stringify(message.messageContent));
    };
    TestWebSocketsComponent.prototype.showMessages = function (message) {
        this.messages.push(message);
    };
    TestWebSocketsComponent.prototype.ngOnInit = function () {
    };
    TestWebSocketsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-test-web-sockets',
            template: __webpack_require__(/*! ./test-web-sockets.component.html */ "./src/app/messenger/test-web-sockets/test-web-sockets.component.html"),
            styles: [__webpack_require__(/*! ./test-web-sockets.component.scss */ "./src/app/messenger/test-web-sockets/test-web-sockets.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TestWebSocketsComponent);
    return TestWebSocketsComponent;
}());



/***/ }),

/***/ "./src/app/models/Like.ts":
/*!********************************!*\
  !*** ./src/app/models/Like.ts ***!
  \********************************/
/*! exports provided: Like */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Like", function() { return Like; });
var Like = /** @class */ (function () {
    function Like() {
    }
    return Like;
}());



/***/ }),

/***/ "./src/app/models/Media.ts":
/*!*********************************!*\
  !*** ./src/app/models/Media.ts ***!
  \*********************************/
/*! exports provided: Media */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Media", function() { return Media; });
var Media = /** @class */ (function () {
    function Media() {
    }
    return Media;
}());



/***/ }),

/***/ "./src/app/models/TravelStory.ts":
/*!***************************************!*\
  !*** ./src/app/models/TravelStory.ts ***!
  \***************************************/
/*! exports provided: TravelStory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelStory", function() { return TravelStory; });
var TravelStory = /** @class */ (function () {
    function TravelStory() {
    }
    return TravelStory;
}());



/***/ }),

/***/ "./src/app/models/User.ts":
/*!********************************!*\
  !*** ./src/app/models/User.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/models/UserProfilePicDto.ts":
/*!*********************************************!*\
  !*** ./src/app/models/UserProfilePicDto.ts ***!
  \*********************************************/
/*! exports provided: UserProfilePicDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilePicDto", function() { return UserProfilePicDto; });
var UserProfilePicDto = /** @class */ (function () {
    function UserProfilePicDto() {
    }
    return UserProfilePicDto;
}());



/***/ }),

/***/ "./src/app/security/login/login.component.html":
/*!*****************************************************!*\
  !*** ./src/app/security/login/login.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"user-authentication\">\r\n  <div class=\"user_options-container\">\r\n    <div class=\"user_options-text\">\r\n      <div class=\"user_options-unregistered\">\r\n        <h2 class=\"user_unregistered-title\">Don't have an account?</h2>\r\n        <p class=\"user_unregistered-text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis nibh in leo lacinia blandit et quis lorem.</p>\r\n        <button class=\"user_unregistered-signup\" id=\"signup-button\">Sign up</button>\r\n      </div>\r\n\r\n      <div class=\"user_options-registered\">\r\n        <h2 class=\"user_registered-title\">Have an account?</h2>\r\n        <p class=\"user_registered-text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis nibh in leo lacinia blandit et quis lorem.</p>\r\n        <button class=\"user_registered-login\" id=\"login-button\">Login</button>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"user_options-forms\" id=\"user_options-forms\">\r\n      <div class=\"user_forms-login\">\r\n        <h2 class=\"forms_title\">Login</h2>\r\n        <form class=\"forms_form\" [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\r\n          <fieldset class=\"forms_fieldset\">\r\n            <div class=\"forms_field\">\r\n              <input type=\"email\" id=\"email\" placeholder=\"Please enter your email\" formControlName=\"email\" class=\"forms_field-input\" required autofocus />\r\n            </div>\r\n            <div class=\"forms_field\">\r\n              <input type=\"password\" id=\"password\" placeholder=\"Please enter your password\" formControlName=\"password\" class=\"forms_field-input\" required />\r\n            </div>\r\n          </fieldset>\r\n          <div class=\"forms_buttons\">\r\n            <button type=\"button\" class=\"forms_buttons-forgot\" id=\"forget-button\">Forgot password?</button>\r\n            <button type=\"submit\" class=\"forms_buttons-action\">Login</button>\r\n            <a class=\"forms_buttons-mb-button\" id=\"signup-button-mb\">Sign up</a>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"user_forms-signup\">\r\n        <app-registration></app-registration>\r\n      </div>\r\n      <div class=\"user_forms-forgot\">\r\n        <h2 class=\"forms_title\">Forgot Password</h2>\r\n        <form class=\"forms_form\">\r\n          <fieldset class=\"forms_fieldset\">\r\n            <div class=\"forms_field\">\r\n              <input type=\"email\" placeholder=\"Email\" class=\"forms_field-input\" required autofocus />\r\n            </div>\r\n          </fieldset>\r\n          <div class=\"forms_buttons\">\r\n            <button type=\"submit\" class=\"forms_buttons-action\">Send reset link</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/security/login/login.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/security/login/login.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/security/login/login.component.ts":
/*!***************************************************!*\
  !*** ./src/app/security/login/login.component.ts ***!
  \***************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/login.service */ "./src/app/service/login.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _service_my_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/my-auth.service */ "./src/app/service/my-auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, fb, loginService, cookie) {
        var _this = this;
        this.router = router;
        this.fb = fb;
        this.loginService = loginService;
        this.cookie = cookie;
        this.formErrors = {
            'email': '',
            'password': ''
        };
        this.validationMessages = {
            'email': {
                'required': 'Please enter your email',
                'email': 'please enter your vaild email'
            },
            'password': {
                'required': 'please enter your password',
                'pattern': 'The password must contain numbers and letters',
                'minlength': 'Please enter more than 4 characters',
                'maxlength': 'Please enter less than 25 characters',
            }
        };
        this.login = function () {
            _this.loginDTO = _this.loginForm.value;
            _this.loginService.signIn(_this.loginDTO)
                .subscribe(function (response) {
                _this.cookie.set('auth', response.accessToken);
                localStorage.setItem('auth', response.accessToken);
                _this.error = false;
                _this.router.navigate(['/user/feed']);
            }, function (error2) {
                _this.error = true;
            });
            console.log('message');
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.interactiveFunction();
        this.buildForm();
    };
    LoginComponent.prototype.buildForm = function () {
        var _this = this;
        this.loginForm = this.fb.group({
            'email': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email
                ]
            ],
            'password': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(25)
                ]
            ],
        });
        this.loginForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
    };
    LoginComponent.prototype.onValueChanged = function (data) {
        // if (!this.userForm) {
        //   return;
        // }
        // const form = this.userForm;
        // for (const field in this.formErrors) {
        //   if (Object.prototype.hasOwnProperty.call(this.formErrors, field)) {
        //     this.formErrors[field] = '';
        //     const control = form.get(field);
        //     if (control && control.dirty && !control.valid) {
        //       const messages = this.validationMessages[field];
        //       for (const key in control.errors) {
        //         if (Object.prototype.hasOwnProperty.call(control.errors, key)) {
        //           this.formErrors[field] += messages[key] + ' ';
        //         }
        //       }
        //     }
        //   }
        // }
    };
    LoginComponent.prototype.interactiveFunction = function () {
        // Variables
        var signupButton = document.getElementById('signup-button'), loginButton = document.getElementById('login-button'), signupButtonMb = document.getElementById('signup-button-mb'), forgetButton = document.getElementById('forget-button'), userForms = document.getElementById('user_options-forms');
        // Add event listener to the "Sign Up" button
        signupButton.addEventListener('click', function () {
            userForms.classList.remove('show-forgotPass');
            userForms.classList.remove('bounceRight');
            userForms.classList.add('bounceLeft');
        }, false);
        // Add event listener to the "Login" button
        loginButton.addEventListener('click', function () {
            userForms.classList.remove('show-forgotPass');
            userForms.classList.remove('bounceLeft');
            userForms.classList.add('bounceRight');
        }, false);
        // Add event listener to the "Forget Password" button
        forgetButton.addEventListener('click', function () {
            userForms.classList.add('show-forgotPass');
            // userForms.classList.add('bounceRight');
            // userForms.classList.remove('bounceLeft');
            userForms.classList.remove('show-login');
            userForms.classList.remove('show-signup');
        }, false);
        // Add event listener to the "Signup" button mobile
        signupButtonMb.addEventListener('click', function () {
            userForms.classList.remove('show-forgotPass');
            userForms.classList.remove('show-login');
            userForms.classList.add('show-signup');
        }, false);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/security/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/security/login/login.component.scss")],
            providers: [_service_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"], _service_my_auth_service__WEBPACK_IMPORTED_MODULE_5__["MyAuthService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _service_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/security/registration/registration.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/security/registration/registration.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"forms_title\">Registration</h2>\r\n<form class=\"forms_form\" [formGroup]=\"registrationForm\" (ngSubmit)=\"registrate()\">\r\n  <fieldset class=\"forms_fieldset\">\r\n    <div class=\"forms_field\">\r\n      <input type=\"text\" id=\"firstName\" placeholder=\"Please enter your firstName\"\r\n             formControlName=\"firstName\" class=\"forms_field-input\" required />\r\n    </div>\r\n    <div class=\"forms_field\">\r\n      <input type=\"text\" id=\"lastName\" placeholder=\"Please enter your lastName\"\r\n             formControlName=\"lastName\" class=\"forms_field-input\" required />\r\n    </div>\r\n    <div class=\"forms_field\">\r\n      <input type=\"email\" id=\"regEmail\" placeholder=\"Please enter your email\"\r\n             formControlName=\"email\" class=\"forms_field-input\" required />\r\n    </div>\r\n    <div class=\"forms_field\">\r\n      <input type=\"password\" id=\"regPassword\" placeholder=\"please  enter your password\"\r\n             formControlName=\"password\" class=\"forms_field-input\" required />\r\n    </div>\r\n    <div class=\"forms_field\">\r\n      <select name=\"gender\" id=\"gender\" formControlName=\"gender\">\r\n        <option>Choose an option</option>\r\n        <option value=\"MALE\">MALE</option>\r\n        <option value=\"FEMALE\">FEMALE</option>\r\n      </select>\r\n    </div>\r\n  </fieldset>\r\n  <div class=\"forms_buttons\">\r\n    <button type=\"submit\" class=\"forms_buttons-action\">Sign up</button>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/security/registration/registration.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/security/registration/registration.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/security/registration/registration.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/security/registration/registration.component.ts ***!
  \*****************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_registration_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/registration.service */ "./src/app/service/registration.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(router, fb, registrationService) {
        var _this = this;
        this.router = router;
        this.fb = fb;
        this.registrationService = registrationService;
        this.registrate = function () {
            console.log(_this.registrationForm.value);
            _this.registrationDTO = _this.registrationForm.value;
            _this.registrationService.registrate(_this.registrationDTO)
                .subscribe(function () {
                _this.router.navigate(['/feed']);
            });
            console.log('message');
        };
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        this.buildForm();
        console.log(this.registrationForm);
    };
    RegistrationComponent.prototype.buildForm = function () {
        this.registrationForm = this.fb.group({
            'email': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email
                ]
            ],
            'password': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(25)
                ]
            ],
            'firstName': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                ]
            ],
            'lastName': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                ]
            ],
            'gender': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                ]
            ],
        });
    };
    RegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/security/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.scss */ "./src/app/security/registration/registration.component.scss")],
            providers: [_service_registration_service__WEBPACK_IMPORTED_MODULE_1__["RegistrationService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _service_registration_service__WEBPACK_IMPORTED_MODULE_1__["RegistrationService"]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/security/security-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/security/security-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: SecurityRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityRoutingModule", function() { return SecurityRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/security/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var securityModule = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] }
];
var SecurityRoutingModule = /** @class */ (function () {
    function SecurityRoutingModule() {
    }
    SecurityRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(securityModule)
            ],
            declarations: []
        })
    ], SecurityRoutingModule);
    return SecurityRoutingModule;
}());



/***/ }),

/***/ "./src/app/security/security.component.html":
/*!**************************************************!*\
  !*** ./src/app/security/security.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  security works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/security/security.component.scss":
/*!**************************************************!*\
  !*** ./src/app/security/security.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/security/security.component.ts":
/*!************************************************!*\
  !*** ./src/app/security/security.component.ts ***!
  \************************************************/
/*! exports provided: SecurityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityComponent", function() { return SecurityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SecurityComponent = /** @class */ (function () {
    function SecurityComponent() {
    }
    SecurityComponent.prototype.ngOnInit = function () {
    };
    SecurityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-security',
            template: __webpack_require__(/*! ./security.component.html */ "./src/app/security/security.component.html"),
            styles: [__webpack_require__(/*! ./security.component.scss */ "./src/app/security/security.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SecurityComponent);
    return SecurityComponent;
}());



/***/ }),

/***/ "./src/app/security/security.module.ts":
/*!*********************************************!*\
  !*** ./src/app/security/security.module.ts ***!
  \*********************************************/
/*! exports provided: SecurityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityModule", function() { return SecurityModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _security_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./security-routing.module */ "./src/app/security/security-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _security_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./security.component */ "./src/app/security/security.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/security/login/login.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/security/registration/registration.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var SecurityModule = /** @class */ (function () {
    function SecurityModule() {
    }
    SecurityModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _security_routing_module__WEBPACK_IMPORTED_MODULE_3__["SecurityRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            declarations: [
                _security_component__WEBPACK_IMPORTED_MODULE_5__["SecurityComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _registration_registration_component__WEBPACK_IMPORTED_MODULE_7__["RegistrationComponent"]
            ]
        })
    ], SecurityModule);
    return SecurityModule;
}());



/***/ }),

/***/ "./src/app/service/comment.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/comment.service.ts ***!
  \********************************************/
/*! exports provided: CommentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentService", function() { return CommentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var CommentService = /** @class */ (function () {
    function CommentService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8080/api';
        this.commentsUrl = 'comments';
    }
    /** GET comments from the server */
    CommentService.prototype.getComments = function (travelStoryId, mediaId) {
        return this.http.get(this.baseUrl + "/" + this.commentsUrl + "/" + travelStoryId + "/" + mediaId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getComments', [])));
    };
    /** POST: add a new comment to the server */
    CommentService.prototype.addComment = function (comment, travelStoryId, mediaId) {
        return this.http.post(this.baseUrl + "/" + this.commentsUrl + "/" + travelStoryId + "/" + mediaId, comment, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('addComment')));
    };
    /** DELETE: delete the comment from the server */
    CommentService.prototype.deleteComment = function (comment) {
        var id = typeof comment === 'number' ? comment : comment.id;
        var url = this.baseUrl + "/" + this.commentsUrl + "/" + id;
        return this.http.delete(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('deleteComment')));
    };
    /**
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    CommentService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    CommentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CommentService);
    return CommentService;
}());



/***/ }),

/***/ "./src/app/service/file.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/file.service.ts ***!
  \*****************************************/
/*! exports provided: FileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileService", function() { return FileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var baseUrl = 'http://localhost:8080/api/';
var FileService = /** @class */ (function () {
    function FileService(http) {
        this.http = http;
    }
    FileService.prototype.uploadProfilePic = function (user) {
        console.log(user);
        return this.http.put(baseUrl + 'uploadProfilePic', user, { headers: { 'Content-Type': 'application/json' } });
    };
    FileService.prototype.resetProfilePic = function (id) {
        return this.http.post(baseUrl + 'resetProfilePic', id, { headers: { 'Content-Type': 'application/json' } });
    };
    FileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FileService);
    return FileService;
}());



/***/ }),

/***/ "./src/app/service/interceptor.service.ts":
/*!************************************************!*\
  !*** ./src/app/service/interceptor.service.ts ***!
  \************************************************/
/*! exports provided: InterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterceptorService", function() { return InterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.service */ "./src/app/service/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InterceptorService = /** @class */ (function () {
    function InterceptorService(authService) {
        this.authService = authService;
    }
    InterceptorService.prototype.intercept = function (request, next) {
        console.log('asd1');
        if (request.url.startsWith('http://localhost:8080') && this.authService.getToken()) {
            console.log('asd');
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + this.authService.getToken()
                }
            });
        }
        return next.handle(request);
    };
    InterceptorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]])
    ], InterceptorService);
    return InterceptorService;
}());



/***/ }),

/***/ "./src/app/service/like.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/like.service.ts ***!
  \*****************************************/
/*! exports provided: LikeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikeService", function() { return LikeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_Like__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/Like */ "./src/app/models/Like.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var LikeService = /** @class */ (function () {
    function LikeService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:808' +
            '0/api/likes';
        this.likeUrl = 'http://localhost:8080/api/like';
    }
    /** GET likes from the server */
    LikeService.prototype.getLikes = function (travelStoryId, mediaId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.set('travelStoryId', travelStoryId.toString());
        params = params.set('mediaId', mediaId.toString());
        return this.http.get(this.baseUrl, { params: params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getLikes', [])));
    };
    /** POST: add a new like to the server */
    LikeService.prototype.addLike = function (like) {
        return this.http.post(this.baseUrl, like, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('addLike')));
    };
    /** DELETE: delete the like from the server */
    LikeService.prototype.deleteLike = function (like) {
        var id = typeof like === 'number' ? like : like.id;
        var url = this.baseUrl + "/" + id;
        return this.http.delete(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('deleteLike')));
    };
    /**
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    LikeService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    LikeService.prototype.getUserLike = function (travelStoryId, mediaId, userId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.set('travelStoryId', travelStoryId.toString());
        params = params.set('mediaId', mediaId.toString());
        params = params.set('userId', userId.toString());
        return this.http.get(this.likeUrl, { params: params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getUserLike', _models_Like__WEBPACK_IMPORTED_MODULE_4__["Like"])));
    };
    LikeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LikeService);
    return LikeService;
}());



/***/ }),

/***/ "./src/app/service/login.service.ts":
/*!******************************************!*\
  !*** ./src/app/service/login.service.ts ***!
  \******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _my_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-auth.service */ "./src/app/service/my-auth.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginService = /** @class */ (function () {
    function LoginService(auth, cookie, http) {
        this.auth = auth;
        this.cookie = cookie;
        this.http = http;
    }
    LoginService.prototype.signIn = function (loginDTO) {
        return this.auth.post('http://localhost:8080/api/login', loginDTO);
    };
    LoginService.prototype.getToken = function () {
        return localStorage.getItem('auth');
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_my_auth_service__WEBPACK_IMPORTED_MODULE_2__["MyAuthService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/service/my-auth.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/my-auth.service.ts ***!
  \********************************************/
/*! exports provided: MyAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAuthService", function() { return MyAuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyAuthService = /** @class */ (function () {
    function MyAuthService(http) {
        this.http = http;
    }
    MyAuthService.prototype.get = function (url) {
        return this.http.get(url, { withCredentials: true });
    };
    MyAuthService.prototype.post = function (url, body) {
        return this.http.post(url, body, { withCredentials: true });
    };
    MyAuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MyAuthService);
    return MyAuthService;
}());



/***/ }),

/***/ "./src/app/service/registration.service.ts":
/*!*************************************************!*\
  !*** ./src/app/service/registration.service.ts ***!
  \*************************************************/
/*! exports provided: RegistrationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationService", function() { return RegistrationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegistrationService = /** @class */ (function () {
    function RegistrationService(http) {
        this.http = http;
    }
    RegistrationService.prototype.registrate = function (registrationDTO) {
        return this.http.post('http://localhost:8080/api/registrate', registrationDTO);
    };
    RegistrationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RegistrationService);
    return RegistrationService;
}());



/***/ }),

/***/ "./src/app/service/user.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/user.service.ts ***!
  \*****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = 'http://qctravelstory-env-1.us-east-2.elasticbeanstalk.com/api';
        this.user = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.user$ = this.user.asObservable();
    }
    UserService.prototype.getUser = function (id) {
        return this.httpClient.get(this.baseUrl + '/user/' + id);
    };
    UserService.prototype.setPreferedLang = function (lang) {
        localStorage.setItem('lang', lang);
    };
    UserService.prototype.getPreferedLang = function () {
        return localStorage.getItem('lang');
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/user/comments/comments.component.html":
/*!*******************************************************!*\
  !*** ./src/app/user/comments/comments.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n    <mat-card-content *ngFor=\"let comment of comments\">\r\n\r\n      <mat-card-header>\r\n        <div mat-card-avatar class=\"header-image\"></div>\r\n        <mat-card-title>{{user.firstName}} {{user.lastName}}</mat-card-title>\r\n        <mat-card-subtitle>{{comment.createdTime}}</mat-card-subtitle>\r\n      </mat-card-header>\r\n      <mat-card-content class=\"comment\">{{comment.massage}}</mat-card-content>\r\n\r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n  <textarea matInput class=\"full-width\" placeholder=\"Leave a comment\"\r\n            [(ngModel)]=\"currentComment.massage\"></textarea>\r\n\r\n      <button mat-button (click)=\"addComment(currentComment,travelStory.id,media.id)\">Add</button>\r\n    </mat-card-actions>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/user/comments/comments.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/user/comments/comments.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%; }\n\n.full-width {\n  width: 100%; }\n\n.header-image {\n  background-image: url(\"https://material.angular.io/assets/img/examples/shiba1.jpg\");\n  background-size: cover; }\n\n.comment {\n  background: lightskyblue;\n  border-radius: 20px; }\n\n.article-body p {\n  word-break: break-all; }\n"

/***/ }),

/***/ "./src/app/user/comments/comments.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/user/comments/comments.component.ts ***!
  \*****************************************************/
/*! exports provided: CommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsComponent", function() { return CommentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/User */ "./src/app/models/User.ts");
/* harmony import */ var _models_TravelStory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/TravelStory */ "./src/app/models/TravelStory.ts");
/* harmony import */ var _models_Media__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/Media */ "./src/app/models/Media.ts");
/* harmony import */ var _service_comment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/comment.service */ "./src/app/service/comment.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CommentsComponent = /** @class */ (function () {
    function CommentsComponent(commentService) {
        this.commentService = commentService;
    }
    CommentsComponent.prototype.addComment = function (currentComment, travelStoryId, mediaId) {
        var _this = this;
        this.commentService.addComment(currentComment, travelStoryId, mediaId).subscribe(function (currentComment) {
            _this.comments.push(currentComment);
        });
    };
    CommentsComponent.prototype.getComments = function (travelStoryId, mediaId) {
        var _this = this;
        this.commentService.getComments(travelStoryId, mediaId)
            .subscribe(function (comments) { return _this.comments = comments; });
    };
    CommentsComponent.prototype.delete = function (comment) {
        this.comments = this.comments.filter(function (h) { return h !== comment; });
        this.commentService.deleteComment(comment).subscribe();
    };
    CommentsComponent.prototype.ngOnInit = function () {
        this.getComments(this.travelStory.id, this.travelStory.medias[0].id);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_User__WEBPACK_IMPORTED_MODULE_1__["User"])
    ], CommentsComponent.prototype, "user", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_TravelStory__WEBPACK_IMPORTED_MODULE_2__["TravelStory"])
    ], CommentsComponent.prototype, "travelStory", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_Media__WEBPACK_IMPORTED_MODULE_3__["Media"])
    ], CommentsComponent.prototype, "media", void 0);
    CommentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-comments',
            template: __webpack_require__(/*! ./comments.component.html */ "./src/app/user/comments/comments.component.html"),
            styles: [__webpack_require__(/*! ./comments.component.scss */ "./src/app/user/comments/comments.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_comment_service__WEBPACK_IMPORTED_MODULE_4__["CommentService"]])
    ], CommentsComponent);
    return CommentsComponent;
}());



/***/ }),

/***/ "./src/app/user/feed/feed.component.html":
/*!***********************************************!*\
  !*** ./src/app/user/feed/feed.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/feed/feed.component.scss":
/*!***********************************************!*\
  !*** ./src/app/user/feed/feed.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/feed/feed.component.ts":
/*!*********************************************!*\
  !*** ./src/app/user/feed/feed.component.ts ***!
  \*********************************************/
/*! exports provided: FeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedComponent", function() { return FeedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FeedComponent = /** @class */ (function () {
    function FeedComponent() {
    }
    FeedComponent.prototype.ngOnInit = function () {
    };
    FeedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-feed',
            template: __webpack_require__(/*! ./feed.component.html */ "./src/app/user/feed/feed.component.html"),
            styles: [__webpack_require__(/*! ./feed.component.scss */ "./src/app/user/feed/feed.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FeedComponent);
    return FeedComponent;
}());



/***/ }),

/***/ "./src/app/user/footer/footer.component.html":
/*!***************************************************!*\
  !*** ./src/app/user/footer/footer.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"py-5 bg-dark\">\r\n  <div class=\"container\">\r\n    <p class=\"m-0 text-center text-white\">Copyright &copy; 339</p>\r\n    <div class=\"lang-content m-0 text-center text-white\">\r\n      <label for=\"lang\" translate>Language</label>\r\n      <select name=\"Language\" id=\"lang\" [(ngModel)]=\"language\" (change)=\"switchLanguage()\">\r\n        <option value=\"en\">English</option>\r\n        <option value=\"uk\">Українська</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/user/footer/footer.component.scss":
/*!***************************************************!*\
  !*** ./src/app/user/footer/footer.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n  margin-top: 1000px; }\n"

/***/ }),

/***/ "./src/app/user/footer/footer.component.ts":
/*!*************************************************!*\
  !*** ./src/app/user/footer/footer.component.ts ***!
  \*************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/user.service */ "./src/app/service/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FooterComponent = /** @class */ (function () {
    function FooterComponent(translate, userService) {
        this.translate = translate;
        this.userService = userService;
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.prototype.switchLanguage = function () {
        console.log('Switch to language: ' + this.language);
        this.userService.setPreferedLang(this.language);
        this.translate.use(this.language);
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/user/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/user/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            _service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/user/header/header.component.html":
/*!***************************************************!*\
  !*** ./src/app/user/header/header.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navigation -->\r\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light fixed-top\">\r\n  <div class=\"container\">\r\n    <a class=\"navbar-brand\" routerLink=\"/feed\">travelstory</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\"\r\n            aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\r\n      <app-search></app-search>\r\n      <ul class=\"navbar-nav ml-auto\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/user/1\" translate>Me</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/messenger\" translate>Messenger</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/settings\" translate>Settings</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/login\">Login</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/user/header/header.component.scss":
/*!***************************************************!*\
  !*** ./src/app/user/header/header.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-search {\n  margin-left: 6em; }\n"

/***/ }),

/***/ "./src/app/user/header/header.component.ts":
/*!*************************************************!*\
  !*** ./src/app/user/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/user/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/user/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/user/intro/dialog-change-profile-pic/dialog-change-profile-pic.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/user/intro/dialog-change-profile-pic/dialog-change-profile-pic.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<h2 mat-dialog-title>Change profile picture</h2>\r\n<div class=\"content\">\r\n  <div class=\"actions\">\r\n    <div class=\"row\">\r\n      <input type=\"text\" [(ngModel)]=\"userId\" placeholder=\"enter user id\">\r\n    </div>\r\n    <div class=\"row\">\r\n      <input type=\"file\" accept=\"image/*\" (change)=\"changeListener($event)\">\r\n    </div>\r\n    <div class=\"row\">\r\n      <button type=\"submit\" class=\"btn btn-success\" (click)=\"onSubmit()\">Submit</button>\r\n    </div>\r\n    <div class=\"row\">\r\n      <button type=\"submit\" class=\"btn btn-danger\" (click)=\"onResetProfilePic()\">Remove</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/user/intro/dialog-change-profile-pic/dialog-change-profile-pic.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/user/intro/dialog-change-profile-pic/dialog-change-profile-pic.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".actions p {\n  margin-top: 25px;\n  padding: 20px 50px; }\n\n.content {\n  padding-left: 100px; }\n\n.content .row {\n    padding: 25px; }\n"

/***/ }),

/***/ "./src/app/user/intro/dialog-change-profile-pic/dialog-change-profile-pic.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/user/intro/dialog-change-profile-pic/dialog-change-profile-pic.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: DialogChangeProfilePicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogChangeProfilePicComponent", function() { return DialogChangeProfilePicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_UserProfilePicDto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/UserProfilePicDto */ "./src/app/models/UserProfilePicDto.ts");
/* harmony import */ var _service_file_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/file.service */ "./src/app/service/file.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DialogChangeProfilePicComponent = /** @class */ (function () {
    function DialogChangeProfilePicComponent(fileService) {
        this.fileService = fileService;
    }
    DialogChangeProfilePicComponent.prototype.onChange = function (files) {
        this.fileToUpload = files.item(0);
    };
    DialogChangeProfilePicComponent.prototype.changeListener = function ($event) {
        this.readThis($event.target);
    };
    DialogChangeProfilePicComponent.prototype.readThis = function (inputValue) {
        var _this = this;
        this.fileToUpload = inputValue.files[0];
        this.myReader = new FileReader();
        this.myReader.onloadend = function (e) {
            _this.image = _this.myReader.result;
        };
        this.myReader.readAsDataURL(this.fileToUpload);
    };
    DialogChangeProfilePicComponent.prototype.onSubmit = function () {
        this.userProfilePicDto.profilePic = this.image;
        console.log(this.userProfilePicDto.profilePic);
        this.userProfilePicDto.id = this.userId;
        this.fileService.uploadProfilePic(this.userProfilePicDto).subscribe(function (response) {
            console.log(response);
        });
    };
    DialogChangeProfilePicComponent.prototype.onResetProfilePic = function () {
        // TODO rm hardcoded id
        this.fileService.resetProfilePic(1).subscribe(function (response) {
            console.log(response);
        });
    };
    DialogChangeProfilePicComponent.prototype.ngOnInit = function () {
        this.userProfilePicDto = new _models_UserProfilePicDto__WEBPACK_IMPORTED_MODULE_1__["UserProfilePicDto"]();
    };
    DialogChangeProfilePicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dialog-change-profile-pic',
            template: __webpack_require__(/*! ./dialog-change-profile-pic.component.html */ "./src/app/user/intro/dialog-change-profile-pic/dialog-change-profile-pic.component.html"),
            styles: [__webpack_require__(/*! ./dialog-change-profile-pic.component.scss */ "./src/app/user/intro/dialog-change-profile-pic/dialog-change-profile-pic.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_file_service__WEBPACK_IMPORTED_MODULE_2__["FileService"]])
    ], DialogChangeProfilePicComponent);
    return DialogChangeProfilePicComponent;
}());



/***/ }),

/***/ "./src/app/user/intro/intro.component.html":
/*!*************************************************!*\
  !*** ./src/app/user/intro/intro.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"intro-section\">\r\n  <img src=\"{{user.backgroundPic}}\">\r\n  <div class=\"user-details\">\r\n    <div class=\"row\">\r\n      <a class=\"ava bg-light\">\r\n        <img (click)=\"changeProfilePic()\" src=\"{{user.profilePic}}\">\r\n        <div class=\"online-status\">\r\n        </div>\r\n      </a>\r\n      <div class=\"left-details col-md-5 offset-md-2\">\r\n        <div class=\"description\">\r\n          <div>\r\n            <h3 class=\"name\" *ngIf=\"user.firstName\">{{user.firstName}} {{user.lastName}}</h3>\r\n          </div>\r\n          <div class=\"text-under\">Dreamer, Traveler</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"right-details\">\r\n        <a href=\"#\" class=\"btn btn-secondary\">Follow</a>\r\n        <a href=\"#\" class=\"btn btn-success\">Message</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/user/intro/intro.component.scss":
/*!*************************************************!*\
  !*** ./src/app/user/intro/intro.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".intro-section {\n  overflow: hidden;\n  border-radius: 10px;\n  margin-top: 3vh;\n  margin-bottom: 3vh;\n  height: 400px;\n  background-position: center;\n  background-size: cover;\n  position: relative;\n  z-index: 1; }\n\n.user-details {\n  height: 100px;\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n  left: 0;\n  z-index: 4;\n  background-color: #ddeedc; }\n\n.ava {\n  border: 3px solid #fff;\n  border-radius: 50%;\n  width: 120px;\n  height: 120px;\n  position: absolute;\n  left: 5%;\n  -webkit-transform: translate(0, -50%);\n          transform: translate(0, -50%); }\n\n.ava img {\n  border-radius: 50%;\n  width: 100%;\n  height: 100%; }\n\n.online-status {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background-color: #28a745;\n  position: absolute;\n  right: 3px;\n  bottom: 15%; }\n\n.left-details {\n  padding-top: 10px;\n  padding-bottom: 10px; }\n\n.ava {\n  background-color: #28a745; }\n\n.right-details {\n  margin-left: 200px;\n  padding-top: 25px;\n  position: relative;\n  float: right; }\n\n.right-details .btn {\n    margin: 0 5px; }\n"

/***/ }),

/***/ "./src/app/user/intro/intro.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/intro/intro.component.ts ***!
  \***********************************************/
/*! exports provided: IntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroComponent", function() { return IntroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dialog_change_profile_pic_dialog_change_profile_pic_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dialog-change-profile-pic/dialog-change-profile-pic.component */ "./src/app/user/intro/dialog-change-profile-pic/dialog-change-profile-pic.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IntroComponent = /** @class */ (function () {
    function IntroComponent(route, userService, dialog) {
        this.route = route;
        this.userService = userService;
        this.dialog = dialog;
    }
    IntroComponent.prototype.ngOnInit = function () {
        this.getUser();
    };
    IntroComponent.prototype.changeProfilePic = function () {
        this.dialog.open(_dialog_change_profile_pic_dialog_change_profile_pic_component__WEBPACK_IMPORTED_MODULE_4__["DialogChangeProfilePicComponent"], {
            height: '400px',
            width: '600px',
        });
    };
    IntroComponent.prototype.getUser = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.userService.getUser(id)
            .subscribe(function (user) { return _this.user = user; });
    };
    IntroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-intro',
            template: __webpack_require__(/*! ./intro.component.html */ "./src/app/user/intro/intro.component.html"),
            styles: [__webpack_require__(/*! ./intro.component.scss */ "./src/app/user/intro/intro.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], IntroComponent);
    return IntroComponent;
}());



/***/ }),

/***/ "./src/app/user/likes/likes.component.html":
/*!*************************************************!*\
  !*** ./src/app/user/likes/likes.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<hr>\r\n<mat-card-actions>\r\n  <span><button  mat-icon-button=\"favorite\" (click)=\"like(this.loggedUserLike,this.travelStory.id,this.travelStory.medias[0].id)\"><i class=\"fa fa-heart\"></i></button>{{this.likes.length}} like it!</span>\r\n</mat-card-actions>\r\n<hr>\r\n\r\n"

/***/ }),

/***/ "./src/app/user/likes/likes.component.scss":
/*!*************************************************!*\
  !*** ./src/app/user/likes/likes.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/likes/likes.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/likes/likes.component.ts ***!
  \***********************************************/
/*! exports provided: LikesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikesComponent", function() { return LikesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_Like__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/Like */ "./src/app/models/Like.ts");
/* harmony import */ var _service_like_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/like.service */ "./src/app/service/like.service.ts");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/User */ "./src/app/models/User.ts");
/* harmony import */ var _models_TravelStory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/TravelStory */ "./src/app/models/TravelStory.ts");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LikesComponent = /** @class */ (function () {
    function LikesComponent(likeService, userService, route) {
        this.likeService = likeService;
        this.userService = userService;
        this.route = route;
    }
    LikesComponent.prototype.ngOnInit = function () {
        this.getLikes(this.travelStory.id, this.travelStory.medias[0].id);
        this.getLoggedUser();
        // this.loggedUserLike=new Like();
        this.loggedUserLike = this.getLikeOfUser(this.likes, this.loggedUser.id);
    };
    LikesComponent.prototype.like = function (userLike, travelStoryId, mediaId) {
        this.flipLike();
        if (userLike.likeState === true) {
            userLike.loggedUserId = this.loggedUser.id;
            userLike.travelStoryId = travelStoryId;
            userLike.mediaId = mediaId;
            this.add(userLike);
        }
        else {
            userLike.loggedUserId = this.loggedUser.id;
            userLike.travelStoryId = travelStoryId;
            userLike.mediaId = mediaId;
            userLike.likeState = false;
            this.delete(userLike);
        }
    };
    LikesComponent.prototype.flipLike = function () {
        if (this.loggedUserLike.likeState === true) {
            this.loggedUserLike.likeState = false;
        }
        else {
            this.loggedUserLike.likeState = true;
        }
    };
    LikesComponent.prototype.getLikes = function (travelStoryId, mediaId) {
        var _this = this;
        this.likeService.getLikes(travelStoryId, mediaId)
            .subscribe(function (likes) { return _this.likes = likes; });
    };
    LikesComponent.prototype.add = function (userLike) {
        var _this = this;
        this.likeService.addLike(userLike).subscribe(function (like) {
            _this.likes.push(like);
        });
    };
    LikesComponent.prototype.delete = function (userLike) {
        var _this = this;
        this.likes = this.likes.filter(function (h) { return h !== userLike; });
        this.likeService.deleteLike(userLike).subscribe(function (like) { return _this.loggedUserLike = like; });
    };
    LikesComponent.prototype.getLoggedUser = function () {
        var user = new _models_User__WEBPACK_IMPORTED_MODULE_3__["User"]();
        user.id = 2;
        this.loggedUser = user;
    };
    LikesComponent.prototype.getLikeOfUser = function (likes, loggedUserId) {
        var userLike;
        if (likes != null) {
            for (var _i = 0, likes_1 = likes; _i < likes_1.length; _i++) {
                var like = likes_1[_i];
                if (like.loggedUserId === loggedUserId) {
                    debugger;
                    userLike = like;
                    return userLike;
                }
            }
        }
        userLike = new _models_Like__WEBPACK_IMPORTED_MODULE_1__["Like"]();
        userLike.likeState = false;
        return userLike;
    };
    LikesComponent.prototype.likeExhist = function (likes, like) {
        if (likes != null) {
            for (var _i = 0, likes_2 = likes; _i < likes_2.length; _i++) {
                var l = likes_2[_i];
                if (l === like) {
                    return true;
                }
            }
        }
        return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_TravelStory__WEBPACK_IMPORTED_MODULE_4__["TravelStory"])
    ], LikesComponent.prototype, "travelStory", void 0);
    LikesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-likes',
            template: __webpack_require__(/*! ./likes.component.html */ "./src/app/user/likes/likes.component.html"),
            styles: [__webpack_require__(/*! ./likes.component.scss */ "./src/app/user/likes/likes.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_like_service__WEBPACK_IMPORTED_MODULE_2__["LikeService"], _service_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], LikesComponent);
    return LikesComponent;
}());



/***/ }),

/***/ "./src/app/user/search/search.component.html":
/*!***************************************************!*\
  !*** ./src/app/user/search/search.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form-inline md-form form-sm\">\r\n  <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\r\n  <input class=\"form-control form-control-sm ml-3 w-75\" type=\"text\"\r\n         placeholder=\"{{'Search' | translate}}\"\r\n         aria-label=\"Search\" mdbInputDirective>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/user/search/search.component.scss":
/*!***************************************************!*\
  !*** ./src/app/user/search/search.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  margin-top: 4px; }\n"

/***/ }),

/***/ "./src/app/user/search/search.component.ts":
/*!*************************************************!*\
  !*** ./src/app/user/search/search.component.ts ***!
  \*************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/user/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/user/search/search.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/user/settings-page/settings-page.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/user/settings-page/settings-page.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group>\r\n  <mat-tab label=\"Edit profile\">\r\n    <mat-card>\r\n      <mat-card-content>\r\n        <div class=\"container\">\r\n          <form>\r\n            <div class=\"form-group\">\r\n              <label for=\"first-name\">First name</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"first-name\" required>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"last-name\">Last name</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"last-name\" required>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"location\">Location</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"location\" required>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"email\">Email</label>\r\n              <input type=\"email\" class=\"form-control\" id=\"email\" required>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <mat-form-field>\r\n                <mat-select id=\"gender\" placeholder=\"Gender\">\r\n                  <mat-option *ngFor=\"let gender of genders\" [value]=\"gender.value\">\r\n                    {{gender.viewValue}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <mat-form-field class=\"example-full-width\">\r\n                <label for=\"birth-date\">Birth date</label>\r\n                <input matInput [matDatepicker]=\"picker\" id=\"birth-date\">\r\n                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                <mat-datepicker touchUi #picker></mat-datepicker>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <button type=\"submit\" class=\"btn btn-success\">Submit</button>\r\n          </form>\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </mat-tab>\r\n\r\n  <mat-tab label=\"Change password\">\r\n    <mat-card>\r\n      <mat-card-content>\r\n\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </mat-tab>\r\n\r\n  <mat-tab label=\"Account\">\r\n    <mat-card>\r\n      <mat-card-content>\r\n        <a routerLink=\"#\">Remove account</a>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </mat-tab>\r\n\r\n</mat-tab-group>\r\n"

/***/ }),

/***/ "./src/app/user/settings-page/settings-page.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/user/settings-page/settings-page.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-tab-group {\n  background-color: #edeee3;\n  margin: auto;\n  max-width: 700px;\n  min-height: 500px;\n  margin-top: 100px;\n  align-content: center;\n  border-radius: 10px; }\n\nmat-tab {\n  width: 50%;\n  align-items: center; }\n\nmat-card {\n  background-color: #f8f9fa; }\n\ninput {\n  max-width: 205px; }\n"

/***/ }),

/***/ "./src/app/user/settings-page/settings-page.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/user/settings-page/settings-page.component.ts ***!
  \***************************************************************/
/*! exports provided: SettingsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageComponent", function() { return SettingsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsPageComponent = /** @class */ (function () {
    function SettingsPageComponent() {
        this.genders = [
            { value: 'male', viewValue: 'Male' },
            { value: 'female', viewValue: 'Female' },
            { value: 'not-specified', viewValue: 'Not specified' }
        ];
    }
    SettingsPageComponent.prototype.ngOnInit = function () {
    };
    SettingsPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings-page',
            template: __webpack_require__(/*! ./settings-page.component.html */ "./src/app/user/settings-page/settings-page.component.html"),
            styles: [__webpack_require__(/*! ./settings-page.component.scss */ "./src/app/user/settings-page/settings-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SettingsPageComponent);
    return SettingsPageComponent;
}());



/***/ }),

/***/ "./src/app/user/user-follows-side/user-follows-side.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/user/user-follows-side/user-follows-side.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card my-4\">\r\n  <h5 class=\"card-header\" translate>Follows</h5>\r\n  <div class=\"card-body\">\r\n  <p>50 people</p>\r\n  </div>\r\n  <hr>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/user/user-follows-side/user-follows-side.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/user/user-follows-side/user-follows-side.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/user-follows-side/user-follows-side.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/user/user-follows-side/user-follows-side.component.ts ***!
  \***********************************************************************/
/*! exports provided: UserFollowsSideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFollowsSideComponent", function() { return UserFollowsSideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserFollowsSideComponent = /** @class */ (function () {
    function UserFollowsSideComponent() {
    }
    UserFollowsSideComponent.prototype.ngOnInit = function () {
    };
    UserFollowsSideComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-follows-side',
            template: __webpack_require__(/*! ./user-follows-side.component.html */ "./src/app/user/user-follows-side/user-follows-side.component.html"),
            styles: [__webpack_require__(/*! ./user-follows-side.component.scss */ "./src/app/user/user-follows-side/user-follows-side.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UserFollowsSideComponent);
    return UserFollowsSideComponent;
}());



/***/ }),

/***/ "./src/app/user/user-gallery-side/user-gallery-side.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/user/user-gallery-side/user-gallery-side.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card my-4\">\r\n\r\n  <h5 class=\"card-header\" translate>Gallery</h5>\r\n  <div class=\"body\">\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-6 col-md-4 col-lg-3 mb-4\">\r\n        <div class=\"card mx-auto text-center\">\r\n          <a href=\"#url\"><img class=\"card-img-top\" src=\"http://placehold.it/350x350\" alt=\"Sample Title\"></a>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-6 col-md-4 col-lg-3 mb-4\">\r\n        <div class=\"card mx-auto text-center\">\r\n          <a href=\"#url\"><img class=\"card-img-top\" src=\"http://placehold.it/350x350\" alt=\"Sample Title\"></a>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-6 col-md-4 col-lg-3 mb-4\">\r\n        <div class=\"card mx-auto text-center\">\r\n          <a href=\"#url\"><img class=\"card-img-top\" src=\"http://placehold.it/350x350\" alt=\"Sample Title\"></a>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-6 col-md-4 col-lg-3 mb-4\">\r\n        <div class=\"card mx-auto text-center\">\r\n          <a href=\"#url\"><img class=\"card-img-top\" src=\"http://placehold.it/350x350\" alt=\"Sample Title\"></a>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-6 col-md-4 col-lg-3 mb-4\">\r\n        <div class=\"card mx-auto text-center\">\r\n          <a href=\"#url\"><img class=\"card-img-top\" src=\"http://placehold.it/350x350\" alt=\"Sample Title\"></a>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-6 col-md-4 col-lg-3 mb-4\">\r\n        <div class=\"card mx-auto text-center\">\r\n          <a href=\"#url\"><img class=\"card-img-top\" src=\"http://placehold.it/350x350\" alt=\"Sample Title\"></a>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-6 col-md-4 col-lg-3 mb-4\">\r\n        <div class=\"card mx-auto text-center\">\r\n          <a href=\"#url\"><img class=\"card-img-top\" src=\"http://placehold.it/350x350\" alt=\"Sample Title\"></a>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-6 col-md-4 col-lg-3 mb-4\">\r\n        <div class=\"card mx-auto text-center\">\r\n          <a href=\"#url\"><img class=\"card-img-top\" src=\"http://placehold.it/350x350\" alt=\"Sample Title\"></a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/user/user-gallery-side/user-gallery-side.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/user/user-gallery-side/user-gallery-side.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body {\n  padding: 15px; }\n"

/***/ }),

/***/ "./src/app/user/user-gallery-side/user-gallery-side.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/user/user-gallery-side/user-gallery-side.component.ts ***!
  \***********************************************************************/
/*! exports provided: UserGallerySideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserGallerySideComponent", function() { return UserGallerySideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserGallerySideComponent = /** @class */ (function () {
    function UserGallerySideComponent() {
    }
    UserGallerySideComponent.prototype.ngOnInit = function () {
    };
    UserGallerySideComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-gallery-side',
            template: __webpack_require__(/*! ./user-gallery-side.component.html */ "./src/app/user/user-gallery-side/user-gallery-side.component.html"),
            styles: [__webpack_require__(/*! ./user-gallery-side.component.scss */ "./src/app/user/user-gallery-side/user-gallery-side.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UserGallerySideComponent);
    return UserGallerySideComponent;
}());



/***/ }),

/***/ "./src/app/user/user-info-side/user-info-side.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/user/user-info-side/user-info-side.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card my-4\">\r\n  <h5 class=\"card-header\" translate>Info</h5>\r\n  <div class=\"card-body\">\r\n    <p>{{user.hobbies}}</p>\r\n    <hr>\r\n    <p>Gender: {{user.gender}}</p>\r\n    <hr>\r\n    <p>Active posts: {{user.countOfTravelStories}}</p>\r\n    <hr>\r\n    <p>Birth: {{user.dateOfBirth}}</p>\r\n    <hr>\r\n    <p>Location: {{user.location}}</p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/user/user-info-side/user-info-side.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/user/user-info-side/user-info-side.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/user-info-side/user-info-side.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/user/user-info-side/user-info-side.component.ts ***!
  \*****************************************************************/
/*! exports provided: UserInfoSideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoSideComponent", function() { return UserInfoSideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/user.service */ "./src/app/service/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserInfoSideComponent = /** @class */ (function () {
    function UserInfoSideComponent(userService) {
        this.userService = userService;
    }
    UserInfoSideComponent.prototype.ngOnInit = function () {
        this.getUser();
    };
    UserInfoSideComponent.prototype.getUser = function () {
        var _this = this;
        this.userService.getUser(1).subscribe(function (user) { return _this.user = user; });
    };
    UserInfoSideComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-info-side',
            template: __webpack_require__(/*! ./user-info-side.component.html */ "./src/app/user/user-info-side/user-info-side.component.html"),
            styles: [__webpack_require__(/*! ./user-info-side.component.scss */ "./src/app/user/user-info-side/user-info-side.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], UserInfoSideComponent);
    return UserInfoSideComponent;
}());



/***/ }),

/***/ "./src/app/user/user-page/TRAVELSTORYS.ts":
/*!************************************************!*\
  !*** ./src/app/user/user-page/TRAVELSTORYS.ts ***!
  \************************************************/
/*! exports provided: TRAVELSTORYS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRAVELSTORYS", function() { return TRAVELSTORYS; });
var TRAVELSTORYS = [
    {
        id: 1,
        medias: [
            {
                id: 1,
                url: 'https://img.huffingtonpost.com/asset/5730a8261300001a01380fe3.jpeg?ops=scalefit_720_noupscale'
            }
        ],
        head: "A long journey...",
        description: "You can blog about the little details, tips and tricks and cool experiences you had. Like that mom and pop restaurant just out of town that had some of the best food you’ve ever eaten. Or that private beach that only the locals know about."
    }, {
        id: 2,
        medias: [
            {
                id: 2,
                url: 'https://cdn.photographylife.com/wp-content/uploads/2013/07/Traveling-Cars-1.jpeg'
            },
            {
                id: 3,
                url: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
            }
        ],
        head: "You can share your experiences with the world",
        description: "A travel blog allows you to reach people all around the world. Some of these people may be looking for a similar experience, looking for inspiration or even planning their own trip."
    },
    {
        id: 3,
        medias: [
            {
                id: 4,
                url: 'https://www.203challenges.com/wp-content/uploads/2018/02/andrew-haimerl-478494.jpg'
            },
            {
                id: 5,
                url: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
            }
        ],
        head: "Help other travelers have a better experience",
        description: "You can blog about the little details, tips and tricks and cool experiences you had. Like that mom and pop restaurant just out of town that had some of the best food you’ve ever eaten. Or that private beach that only the locals know about"
    }
];


/***/ }),

/***/ "./src/app/user/user-page/container-post/container-post.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/user/user-page/container-post/container-post.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card-header>\r\n  <mat-card-title><b>{{this.travelStory.head}}</b></mat-card-title>\r\n  <mat-card-subtitle>{{this.user.firstName}} {{this.user.lastName}}</mat-card-subtitle>\r\n</mat-card-header>\r\n<img mat-card-image src={{this.travelStory.medias[0].url}} alt=\"sorry, check connection... =)\">\r\n<mat-card-content>\r\n  <p>{{this.travelStory.description}}</p>\r\n</mat-card-content>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/user/user-page/container-post/container-post.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/user/user-page/container-post/container-post.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  max-width: 400px; }\n\n.header-image {\n  background-size: cover; }\n"

/***/ }),

/***/ "./src/app/user/user-page/container-post/container-post.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/user/user-page/container-post/container-post.component.ts ***!
  \***************************************************************************/
/*! exports provided: ContainerPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerPostComponent", function() { return ContainerPostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/User */ "./src/app/models/User.ts");
/* harmony import */ var _models_TravelStory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/TravelStory */ "./src/app/models/TravelStory.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContainerPostComponent = /** @class */ (function () {
    function ContainerPostComponent() {
    }
    ContainerPostComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_TravelStory__WEBPACK_IMPORTED_MODULE_2__["TravelStory"])
    ], ContainerPostComponent.prototype, "travelStory", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_User__WEBPACK_IMPORTED_MODULE_1__["User"])
    ], ContainerPostComponent.prototype, "user", void 0);
    ContainerPostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-container-post',
            template: __webpack_require__(/*! ./container-post.component.html */ "./src/app/user/user-page/container-post/container-post.component.html"),
            styles: [__webpack_require__(/*! ./container-post.component.scss */ "./src/app/user/user-page/container-post/container-post.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContainerPostComponent);
    return ContainerPostComponent;
}());



/***/ }),

/***/ "./src/app/user/user-page/user-page.component.html":
/*!*********************************************************!*\
  !*** ./src/app/user/user-page/user-page.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <app-intro></app-intro>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n\r\n      <app-user-info-side></app-user-info-side>\r\n\r\n      <app-user-gallery-side></app-user-gallery-side>\r\n\r\n      <app-user-follows-side></app-user-follows-side>\r\n\r\n      <app-user-places></app-user-places>\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"col-md-8\">\r\n      <div class=\"col-sm-12 posts\">\r\n\r\n        <!--<button type=\"button\" class=\"btn btn-outline-success\">Add new post</button>-->\r\n        <button class=\"btn btn-secondary\" type=\"button\">Add new story!</button>\r\n        <div > <mat-card class=\"card\" *ngFor=\"let story of travelStories\">\r\n          <app-container-post  [travelStory]=\"story\" [user]=\"this.user\"></app-container-post>\r\n          <app-likes [travelStory]=\"story\">  </app-likes>\r\n          <!--<app-comments [travelStory]=\"story\" [user]=\"this.user\"> </app-comments>-->\r\n          </mat-card >\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/user/user-page/user-page.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/user/user-page/user-page.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/user-page/user-page.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/user/user-page/user-page.component.ts ***!
  \*******************************************************/
/*! exports provided: UserPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPageComponent", function() { return UserPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _TRAVELSTORYS__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TRAVELSTORYS */ "./src/app/user/user-page/TRAVELSTORYS.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserPageComponent = /** @class */ (function () {
    function UserPageComponent(route, userService, translate) {
        this.route = route;
        this.userService = userService;
        this.translate = translate;
    }
    UserPageComponent.prototype.ngOnInit = function () {
        this.translate.setDefaultLang('en');
        this.getUser();
        this.getTravelStories();
    };
    UserPageComponent.prototype.switchLanguage = function (language) {
        this.translate.use(language);
    };
    UserPageComponent.prototype.getUser = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.userService.getUser(id)
            .subscribe(function (user) { return _this.user = user; });
    };
    UserPageComponent.prototype.getTravelStories = function () {
        return this.travelStories = _TRAVELSTORYS__WEBPACK_IMPORTED_MODULE_3__["TRAVELSTORYS"];
    };
    UserPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-page',
            template: __webpack_require__(/*! ./user-page.component.html */ "./src/app/user/user-page/user-page.component.html"),
            styles: [__webpack_require__(/*! ./user-page.component.scss */ "./src/app/user/user-page/user-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
    ], UserPageComponent);
    return UserPageComponent;
}());



/***/ }),

/***/ "./src/app/user/user-places/user-places.component.html":
/*!*************************************************************!*\
  !*** ./src/app/user/user-places/user-places.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"card-my-4\">\r\n  <h5 class=\"card-header\" translate>Places</h5>\r\n  <div class=\"card-body\">\r\n\r\n    <div #gmap style='width:100%;height:400px'>\r\n\r\n    </div>\r\n\r\n\r\n  </div>\r\n</div>\r\n<script src='http://maps.googleapis.com/maps/api/js'></script>\r\n"

/***/ }),

/***/ "./src/app/user/user-places/user-places.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/user/user-places/user-places.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/user-places/user-places.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/user/user-places/user-places.component.ts ***!
  \***********************************************************/
/*! exports provided: UserPlacesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPlacesComponent", function() { return UserPlacesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserPlacesComponent = /** @class */ (function () {
    function UserPlacesComponent() {
    }
    UserPlacesComponent.prototype.ngOnInit = function () {
        var mapProp = {
            center: new google.maps.LatLng(18.5793, 73.8143),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('gmap'),
        __metadata("design:type", Object)
    ], UserPlacesComponent.prototype, "gmapElement", void 0);
    UserPlacesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-places',
            template: __webpack_require__(/*! ./user-places.component.html */ "./src/app/user/user-places/user-places.component.html"),
            styles: [__webpack_require__(/*! ./user-places.component.scss */ "./src/app/user/user-places/user-places.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UserPlacesComponent);
    return UserPlacesComponent;
}());



/***/ }),

/***/ "./src/app/user/user-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/user/user-routing.module.ts ***!
  \*********************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _feed_feed_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feed/feed.component */ "./src/app/user/feed/feed.component.ts");
/* harmony import */ var _user_page_user_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-page/user-page.component */ "./src/app/user/user-page/user-page.component.ts");
/* harmony import */ var _settings_page_settings_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings-page/settings-page.component */ "./src/app/user/settings-page/settings-page.component.ts");
/* harmony import */ var _security_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../security/login/login.component */ "./src/app/security/login/login.component.ts");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user.component */ "./src/app/user/user.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var userRoutes = [
    {
        path: '',
        component: _user_component__WEBPACK_IMPORTED_MODULE_7__["UserComponent"],
        children: [
            { path: 'feed', component: _feed_feed_component__WEBPACK_IMPORTED_MODULE_3__["FeedComponent"] },
            { path: 'user/:id', component: _user_page_user_page_component__WEBPACK_IMPORTED_MODULE_4__["UserPageComponent"] },
            { path: 'login', component: _security_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
            { path: 'settings', component: _settings_page_settings_page_component__WEBPACK_IMPORTED_MODULE_5__["SettingsPageComponent"] }
        ]
    }
];
var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(userRoutes),
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: []
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());



/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/user/user.component.scss":
/*!******************************************!*\
  !*** ./src/app/user/user.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.scss */ "./src/app/user/user.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/user/footer/footer.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/user/header/header.component.ts");
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./intro/intro.component */ "./src/app/user/intro/intro.component.ts");
/* harmony import */ var _likes_likes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./likes/likes.component */ "./src/app/user/likes/likes.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search/search.component */ "./src/app/user/search/search.component.ts");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/user/user-routing.module.ts");
/* harmony import */ var _user_page_user_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-page/user-page.component */ "./src/app/user/user-page/user-page.component.ts");
/* harmony import */ var _feed_feed_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./feed/feed.component */ "./src/app/user/feed/feed.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _user_page_container_post_container_post_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user-page/container-post/container-post.component */ "./src/app/user/user-page/container-post/container-post.component.ts");
/* harmony import */ var _comments_comments_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./comments/comments.component */ "./src/app/user/comments/comments.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_info_side_user_info_side_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./user-info-side/user-info-side.component */ "./src/app/user/user-info-side/user-info-side.component.ts");
/* harmony import */ var _user_follows_side_user_follows_side_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./user-follows-side/user-follows-side.component */ "./src/app/user/user-follows-side/user-follows-side.component.ts");
/* harmony import */ var _user_gallery_side_user_gallery_side_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./user-gallery-side/user-gallery-side.component */ "./src/app/user/user-gallery-side/user-gallery-side.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _user_places_user_places_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./user-places/user-places.component */ "./src/app/user/user-places/user-places.component.ts");
/* harmony import */ var _settings_page_settings_page_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./settings-page/settings-page.component */ "./src/app/user/settings-page/settings-page.component.ts");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_15__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _user_routing_module__WEBPACK_IMPORTED_MODULE_7__["UserRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatToolbarModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__["MatSidenavModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__["TranslateModule"],
            ],
            declarations: [
                _user_component__WEBPACK_IMPORTED_MODULE_20__["UserComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                _intro_intro_component__WEBPACK_IMPORTED_MODULE_4__["IntroComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_6__["SearchComponent"],
                _user_page_user_page_component__WEBPACK_IMPORTED_MODULE_8__["UserPageComponent"],
                _feed_feed_component__WEBPACK_IMPORTED_MODULE_9__["FeedComponent"],
                _user_page_container_post_container_post_component__WEBPACK_IMPORTED_MODULE_12__["ContainerPostComponent"],
                _likes_likes_component__WEBPACK_IMPORTED_MODULE_5__["LikesComponent"],
                _comments_comments_component__WEBPACK_IMPORTED_MODULE_13__["CommentsComponent"],
                _user_info_side_user_info_side_component__WEBPACK_IMPORTED_MODULE_16__["UserInfoSideComponent"],
                _user_follows_side_user_follows_side_component__WEBPACK_IMPORTED_MODULE_17__["UserFollowsSideComponent"],
                _user_gallery_side_user_gallery_side_component__WEBPACK_IMPORTED_MODULE_18__["UserGallerySideComponent"],
                _user_places_user_places_component__WEBPACK_IMPORTED_MODULE_21__["UserPlacesComponent"],
                _settings_page_settings_page_component__WEBPACK_IMPORTED_MODULE_22__["SettingsPageComponent"],
                _user_places_user_places_component__WEBPACK_IMPORTED_MODULE_21__["UserPlacesComponent"]
            ]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\ss-projects\dev\TravelStoryClient\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map