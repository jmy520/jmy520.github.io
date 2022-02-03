"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_about_about_module_ts"],{

/***/ 2355:
/*!*****************************************************!*\
  !*** ./src/app/pages/about/about-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutPageRoutingModule": () => (/* binding */ AboutPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.page */ 9927);




const routes = [
    {
        path: '',
        component: _about_page__WEBPACK_IMPORTED_MODULE_0__.AboutPage
    }
];
let AboutPageRoutingModule = class AboutPageRoutingModule {
};
AboutPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AboutPageRoutingModule);



/***/ }),

/***/ 654:
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutPageModule": () => (/* binding */ AboutPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-routing.module */ 2355);
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.page */ 9927);
/* harmony import */ var src_app_modules_share_share_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/share/share.module */ 6672);
/* harmony import */ var src_app_modules_layout_layout_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/layout/layout.module */ 5358);









let AboutPageModule = class AboutPageModule {
};
AboutPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            src_app_modules_share_share_module__WEBPACK_IMPORTED_MODULE_2__.ShareModule,
            src_app_modules_layout_layout_module__WEBPACK_IMPORTED_MODULE_3__.LayoutModule,
            _about_routing_module__WEBPACK_IMPORTED_MODULE_0__.AboutPageRoutingModule,
        ],
        declarations: [_about_page__WEBPACK_IMPORTED_MODULE_1__.AboutPage],
    })
], AboutPageModule);



/***/ }),

/***/ 9927:
/*!*******************************************!*\
  !*** ./src/app/pages/about/about.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutPage": () => (/* binding */ AboutPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_Project_Web_Angular_TrendBeat_node_modules_ngtools_webpack_src_loaders_direct_resource_js_about_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./about.page.html */ 2221);
/* harmony import */ var _about_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.page.scss */ 7787);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var src_app_base_base_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/base/base-page */ 8920);
/* harmony import */ var src_app_providers_screen_fit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/screen-fit.service */ 6952);
/* harmony import */ var src_app_providers_theme_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/theme.service */ 7440);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api.service */ 7118);
/* harmony import */ var src_app_services_runtime_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/runtime.service */ 759);











let AboutPage = class AboutPage extends src_app_base_base_page__WEBPACK_IMPORTED_MODULE_2__.BasePage {
    constructor(loadingCtrl, toastCtrl, runtime, screenFitService, navCtrl, modalCtrl, api, router, themeService) {
        super(loadingCtrl, toastCtrl, runtime, screenFitService);
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.runtime = runtime;
        this.screenFitService = screenFitService;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.api = api;
        this.router = router;
        this.themeService = themeService;
    }
    ngOnInit() {
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__.NavigationEnd) {
                if (event.url == '/about') {
                    this.setPageTitle('About');
                }
            }
        });
    }
    initData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            // fetch data or load cache
            this.appStatusContent.invokeSuccess();
        });
    }
    ionViewWillEnter() {
        this.setPageTitle('About');
    }
    ionViewDidEnter() {
        (() => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            yield this.initData();
        }))().catch((error) => {
            console.error('[init data errror]', error);
            this.appStatusContent.invokeError();
        });
    }
    onRetry() {
        (() => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            yield this.initData();
        }))().catch((error) => {
            console.error('[init data errror]', error);
            this.appStatusContent.invokeError();
        });
    }
    back() {
        this.navCtrl.back();
    }
};
AboutPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController },
    { type: src_app_services_runtime_service__WEBPACK_IMPORTED_MODULE_6__.RuntimeService },
    { type: src_app_providers_screen_fit_service__WEBPACK_IMPORTED_MODULE_3__.ScreenFitService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: src_app_providers_theme_service__WEBPACK_IMPORTED_MODULE_4__.ThemeService }
];
AboutPage.propDecorators = {
    appStatusContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: ['appStatusContent', { static: false },] }]
};
AboutPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-about',
        template: _D_Project_Web_Angular_TrendBeat_node_modules_ngtools_webpack_src_loaders_direct_resource_js_about_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_about_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AboutPage);



/***/ }),

/***/ 2221:
/*!************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/about/about.page.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content\n  [fullscreen]=\"themeService.immersive\"\n  [scrollEvents]=\"true\"\n  [class]=\"screenFitService.screenCategory\"\n>\n  <div [class]=\"screenFitService.screenCategory\" class=\"page-root about\">\n    <ng-container *ngIf=\"screenFitService.screenCategory == 'desktop'\">\n      <app-status-content #appStatusContent (retry)=\"onRetry()\">\n        <div class=\"app-container\">\n          <div class=\"logo-wrapper\">\n            <img src=\"assets/images/app/logo_normal.svg\" alt=\"\">\n          </div>\n          <div class=\"content-wrapper\">\n            <div class=\"layout-start\">\n              <div class=\"background\">\n                <img src=\"assets/images/app/about_image.png\" alt=\"\">\n              </div>\n              <div class=\"content\">\n                <div class=\"slogan\">让生活比你想象的更美</div>\n              </div>\n            </div>\n            <div class=\"layout-end\">\n              <div class=\"content\">\n                <span>TRENDBEAT-潮玩节拍</span>\n                <span>成立于2022年，专注于潮玩文化。TRENDBEAT每天网罗全球最新的潮玩资讯（球鞋、手办、游戏、科技、影视、美妆、时尚等），以次世代年轻人的视角追求和发现品质生活，让生活充满乐趣，让生活呈现出艺术气息，加入TRENDBEAT，让你的生活比你想象的更美！</span>\n              </div>\n            </div>\n          </div>\n          <div class=\"contact-info\">\n            <span>联系我们</span>\n            <span>hello@trendbeat.cn</span>\n          </div>\n        </div>\n      </app-status-content>\n    </ng-container>\n\n    <ng-container *ngIf=\"screenFitService.screenCategory == 'pad'\">\n      <app-status-content #appStatusContent (retry)=\"onRetry()\">\n        <div class=\"app-container\">pad layout here</div>\n      </app-status-content>\n    </ng-container>\n\n    <ng-container *ngIf=\"screenFitService.screenCategory == 'phone'\">\n      <app-status-content #appStatusContent (retry)=\"onRetry()\">\n        <div class=\"app-container\">phone layout here</div>\n      </app-status-content>\n    </ng-container>\n  </div>\n  <app-common-footer></app-common-footer>\n</ion-content>\n");

/***/ }),

/***/ 7787:
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.page.scss ***!
  \*********************************************/
/***/ ((module) => {

module.exports = "div.page-root.about.desktop app-status-content div.app-container {\n  height: calc(100vh - 60px);\n  min-height: 680px;\n  padding: 40px 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  justify-content: center;\n}\ndiv.page-root.about.desktop app-status-content div.app-container > div.logo-wrapper > img {\n  display: block;\n  width: 480px;\n  height: 80px;\n  object-fit: cover;\n  object-position: center;\n}\ndiv.page-root.about.desktop app-status-content div.app-container > div.content-wrapper {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: calc(50px + 150px);\n}\ndiv.page-root.about.desktop app-status-content div.app-container > div.content-wrapper > div.layout-start {\n  position: relative;\n  width: 50%;\n  height: 300px;\n  overflow: hidden;\n  margin-right: -50px;\n  margin-top: -150px;\n}\ndiv.page-root.about.desktop app-status-content div.app-container > div.content-wrapper > div.layout-start > div.background {\n  width: 100%;\n  height: 100%;\n}\ndiv.page-root.about.desktop app-status-content div.app-container > div.content-wrapper > div.layout-start > div.background > img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center;\n}\ndiv.page-root.about.desktop app-status-content div.app-container > div.content-wrapper > div.layout-start > div.content {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  padding: 30px;\n}\ndiv.page-root.about.desktop app-status-content div.app-container > div.content-wrapper > div.layout-start > div.content > div.slogan {\n  width: 100%;\n  text-align: right;\n  font-size: 24px;\n  font-weight: bold;\n}\ndiv.page-root.about.desktop app-status-content div.app-container > div.content-wrapper > div.layout-end {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  justify-content: center;\n  width: 50%;\n  height: 300px;\n  margin-bottom: -150px;\n  border: 1px solid #1e1e1e;\n  margin-left: -50px;\n}\ndiv.page-root.about.desktop app-status-content div.app-container > div.content-wrapper > div.layout-end > div.content {\n  width: 100%;\n  padding: 40px;\n  padding-left: calc(50px * 2 + 40px);\n}\ndiv.page-root.about.desktop app-status-content div.app-container > div.content-wrapper > div.layout-end > div.content > span:nth-of-type(1) {\n  font-weight: bold;\n}\ndiv.page-root.about.desktop app-status-content div.app-container > div.contact-info {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  margin-top: calc(50px + 150px);\n}\ndiv.page-root.about.desktop app-status-content div.app-container > div.contact-info > span:nth-of-type(1) {\n  display: block;\n  font-weight: bold;\n}\ndiv.page-root.about.desktop app-status-content div.app-container > div.contact-info > span:nth-of-type(2) {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXHRoZW1lXFxtaXhpbi5zY3NzIiwiLi5cXC4uXFwuLlxcdGhlbWVcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1NO0VBQ0UsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUNzRU4sYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUR0RU0sc0JBQUE7RUFDQSx1QkFBQTtBQUhSO0FBT1U7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FBTFo7QUFTUTtFQUNFLFdBQUE7RUMyRFIsYUFBQTtFQUNBLG1CQUFBO0VEMURRLHVCQUFBO0VBQ0EsOEJBQUE7QUFOVjtBQVFVO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQU5aO0FBUVk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQU5kO0FBUWM7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FBTmhCO0FBVVk7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUVtQkc7QUYzQmpCO0FBVWM7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlRW9DRztFRm5DSCxpQkFBQTtBQVJoQjtBQWFVO0VDWVIsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RURaVSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBVFo7QUFXWTtFQUNFLFdBQUE7RUFDQSxhRURFO0VGRUYsbUNBQUE7QUFUZDtBQVdjO0VBQ0UsaUJBQUE7QUFUaEI7QUFlUTtFQ1ROLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VEU1Esc0JBQUE7RUFDQSw4QkFBQTtBQVhWO0FBYVU7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUFYWjtBQWNVO0VBQ0UsZ0JFbEJNO0FGTWxCIiwiZmlsZSI6ImFib3V0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ2YXJpYWJsZXMuc2Nzc1wiO1xyXG5AaW1wb3J0IFwibWl4aW4uc2Nzc1wiO1xyXG5cclxuZGl2LnBhZ2Utcm9vdC5hYm91dCB7XHJcbiAgJi5kZXNrdG9wIHtcclxuICAgIGFwcC1zdGF0dXMtY29udGVudCB7XHJcbiAgICAgIGRpdi5hcHAtY29udGFpbmVyIHtcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAjeyRhcHBIZWFkZXJIZWlnaHR9KTtcclxuICAgICAgICBtaW4taGVpZ2h0OiA2ODBweDtcclxuICAgICAgICBwYWRkaW5nOiAjeyRtZWRpdW1QYWRkaW5nfSAwO1xyXG4gICAgICAgIEBpbmNsdWRlIGFsaWduLWNlbnRlcigpO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG5cclxuICAgICAgICA+IGRpdi5sb2dvLXdyYXBwZXIge1xyXG4gICAgICAgICAgPiBpbWcge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgd2lkdGg6IDQ4MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgID4gZGl2LmNvbnRlbnQtd3JhcHBlciB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIEBpbmNsdWRlIGFsaWduLWNlbnRlci12ZXJ0aWNhbCgpO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiBjYWxjKCN7JGxhcmdlTWFyZ2lufSArIDE1MHB4KTtcclxuXHJcbiAgICAgICAgICA+IGRpdi5sYXlvdXQtc3RhcnQge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogLSN7JGxhcmdlTWFyZ2lufTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTE1MHB4O1xyXG5cclxuICAgICAgICAgICAgPiBkaXYuYmFja2dyb3VuZCB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgICA+IGltZyB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgICAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlclxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgPiBkaXYuY29udGVudCB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAkZGVza3RvcFBhZGRpbmc7XHJcblxyXG4gICAgICAgICAgICAgID4gZGl2LnNsb2dhbiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAkYXBwRm9udFNpemVUaXRsZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgID4gZGl2LmxheW91dC1lbmQge1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBhbGlnbi1jZW50ZXIoKTtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC0xNTBweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHRleHRDb2xvcjtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0jeyRsYXJnZU1hcmdpbn07XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA+IGRpdi5jb250ZW50IHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAkbWVkaXVtUGFkZGluZztcclxuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IGNhbGMoI3skbGFyZ2VNYXJnaW59ICogMiArICN7JG1lZGl1bVBhZGRpbmd9KTtcclxuXHJcbiAgICAgICAgICAgICAgPiBzcGFuOm50aC1vZi10eXBlKDEpIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgPiBkaXYuY29udGFjdC1pbmZvIHtcclxuICAgICAgICAgIEBpbmNsdWRlIGFsaWduLWNlbnRlcigpO1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IGNhbGMoI3skbGFyZ2VNYXJnaW59ICsgMTUwcHgpO1xyXG5cclxuICAgICAgICAgID4gc3BhbjpudGgtb2YtdHlwZSgxKSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICA+IHNwYW46bnRoLW9mLXR5cGUoMikge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAkc2Vjb25kYXJ5TWFyZ2luO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5wYWQge1xyXG4gICAgYXBwLXN0YXR1cy1jb250ZW50IHtcclxuICAgICAgZGl2LmFwcC1jb250YWluZXIge1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLnBob25lIHtcclxuICAgIGFwcC1zdGF0dXMtY29udGVudCB7XHJcbiAgICAgIGRpdi5hcHAtY29udGFpbmVyIHtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJAaW1wb3J0IFwidmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbkBtaXhpbiBzY3JvbGxiYXIoJHRyYWNrQ29sb3I6ICN7JGJhY2tncm91bmRDb2xvcn0sICR0aHVtYkNvbG9yOiAjeyRwcmltYXJ5fSkge1xyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiA4cHg7XHJcbiAgfVxyXG5cclxuICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdHJhY2tDb2xvcjtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMmVtO1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAyZW07XHJcbiAgfVxyXG5cclxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGh1bWJDb2xvcjtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMmVtO1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAyZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gbGluZS1jbGFtcCgkbGluZXMpIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIC13ZWJraXQtbGluZS1jbGFtcDogJGxpbmVzO1xyXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbn1cclxuXHJcbkBtaXhpbiBjbGVhcmZpeCB7XHJcbiAgJjphZnRlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHNpbmdsZS1saW5lKCkge1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG5cclxuQG1peGluIHRyaWFuZ2xlKCR3aWR0aCwgJGhlaWdodCwgJGNvbG9yLCAkZGlyZWN0aW9uKSB7XHJcbiAgJHdpZHRoOiAkd2lkdGgvMjtcclxuICAkY29sb3ItYm9yZGVyLXN0eWxlOiAkaGVpZ2h0IHNvbGlkICRjb2xvcjtcclxuICAkdHJhbnNwYXJlbnQtYm9yZGVyLXN0eWxlOiAkd2lkdGggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIHdpZHRoOiAwO1xyXG5cclxuICBAaWYgJGRpcmVjdGlvbiA9PSB1cCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAkY29sb3ItYm9yZGVyLXN0eWxlO1xyXG4gICAgYm9yZGVyLWxlZnQ6ICR0cmFuc3BhcmVudC1ib3JkZXItc3R5bGU7XHJcbiAgICBib3JkZXItcmlnaHQ6ICR0cmFuc3BhcmVudC1ib3JkZXItc3R5bGU7XHJcbiAgfVxyXG5cclxuICBAZWxzZSBpZiAkZGlyZWN0aW9uID09IHJpZ2h0IHtcclxuICAgIGJvcmRlci1sZWZ0OiAkY29sb3ItYm9yZGVyLXN0eWxlO1xyXG4gICAgYm9yZGVyLXRvcDogJHRyYW5zcGFyZW50LWJvcmRlci1zdHlsZTtcclxuICAgIGJvcmRlci1ib3R0b206ICR0cmFuc3BhcmVudC1ib3JkZXItc3R5bGU7XHJcbiAgfVxyXG5cclxuICBAZWxzZSBpZiAkZGlyZWN0aW9uID09IGRvd24ge1xyXG4gICAgYm9yZGVyLXRvcDogJGNvbG9yLWJvcmRlci1zdHlsZTtcclxuICAgIGJvcmRlci1sZWZ0OiAkdHJhbnNwYXJlbnQtYm9yZGVyLXN0eWxlO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAkdHJhbnNwYXJlbnQtYm9yZGVyLXN0eWxlO1xyXG4gIH1cclxuXHJcbiAgQGVsc2UgaWYgJGRpcmVjdGlvbiA9PSBsZWZ0IHtcclxuICAgIGJvcmRlci1yaWdodDogJGNvbG9yLWJvcmRlci1zdHlsZTtcclxuICAgIGJvcmRlci10b3A6ICR0cmFuc3BhcmVudC1ib3JkZXItc3R5bGU7XHJcbiAgICBib3JkZXItYm90dG9tOiAkdHJhbnNwYXJlbnQtYm9yZGVyLXN0eWxlO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGFsaWduLWNlbnRlcigpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbkBtaXhpbiBhbGlnbi1jZW50ZXItdmVydGljYWwoKSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5AbWl4aW4gYWxpZ24tY2VudGVyLWhvcml6b250YWwoKSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuQG1peGluIHVuZGVybGluZS1lZmZlY3QoJGNvbG9yOiAkcHJpbWFyeSwgJGhlaWdodDogNHB4LCAkZHVyYXRpb246IDAuNXMpIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAmOmFmdGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogJGhlaWdodDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAkZHVyYXRpb247XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwLjQpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcblxyXG4gICYuYWN0aXZlIHtcclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxLjApO1xyXG4gICAgICBvcGFjaXR5OiAxLjA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8vIENvbG9ycyBWYXJpYWJsZXNcclxuJHByaW1hcnk6ICM1NDMzZmY7XHJcbiRwcmltYXJ5UkdCOiA4NCwgNTEsIDI1NTtcclxuJHByaW1hcnlDb250cmFzdDogI2ZmZmZmZjtcclxuJHByaW1hcnlDb250cmFzdFJHQjogMjU1LCAyNTUsIDI1NTtcclxuJHByaW1hcnlTaGFkZTogIzRhMmRlMDtcclxuJHByaW1hcnlUaW50OiAjNjU0N2ZmO1xyXG5cclxuJHNlY29uZGFyeTogIzUyNjBmZjtcclxuJHNlY29uZGFyeVJHQjogODIsIDk2LCAyNTU7XHJcbiRzZWNvbmRhcnlDb250cmFzdDogI2ZmZmZmZjtcclxuJHNlY29uZGFyeUNvbnRyYXN0UkdCOiAyNTUsIDI1NSwgMjU1O1xyXG4kc2Vjb25kYXJ5U2hhZGU6ICM0ODU0ZTA7XHJcbiRzZWNvbmRhcnlUaW50OiAjNGZhNGY5O1xyXG5cclxuJHRlcnRpYXJ5OiAjM2I5YWY4O1xyXG4kdGVydGlhcnlSR0I6IDU5LCAxNTQsIDI0ODtcclxuJHRlcnRpYXJ5Q29udHJhc3Q6ICNmZmZmZmY7XHJcbiR0ZXJ0aWFyeUNvbnRyYXN0UkdCOiAyNTUsIDI1NSwgMjU1O1xyXG4kdGVydGlhcnlTaGFkZTogIzM0ODhkYTtcclxuJHRlcnRpYXJ5VGludDogIzUwNzRmZDtcclxuXHJcbiRzdWNjZXNzOiAjMmRkMzZmO1xyXG4kc3VjY2Vzc1JHQjogNDUsIDIxMSwgMTExO1xyXG4kc3VjY2Vzc0NvbnRyYXN0OiAjMDAwMDAwO1xyXG4kc3VjY2Vzc0NvbnRyYXN0UkdCOiAwLCAwLCAwO1xyXG4kc3VjY2Vzc1NoYWRlOiAjMjhiYTYyO1xyXG4kc3VjY2Vzc1RpbnQ6ICM0MmQ3N2Q7XHJcblxyXG4kd2FybmluZzogI2Y4ZDQyMTtcclxuJHdhcm5pbmdSR0I6IDI0OCwgMjEyLCAzMztcclxuJHdhcm5pbmdDb250cmFzdDogIzAwMDAwMDtcclxuJHdhcm5pbmdDb250cmFzdFJHQjogMCwgMCwgMDtcclxuJHdhcm5pbmdTaGFkZTogI2RhYmIxZDtcclxuJHdhcm5pbmdUaW50OiAjZjlkODM3O1xyXG5cclxuJGRhbmdlcjogI2Q2M2E0MjtcclxuJGRhbmdlclJHQjogMjE0LCA1OCwgNjY7XHJcbiRkYW5nZXJDb250cmFzdDogI2ZmZmZmZjtcclxuJGRhbmdlckNvbnRyYXN0UkdCOiAyNTUsIDI1NSwgMjU1O1xyXG4kZGFuZ2VyU2hhZGU6ICNiYzMzM2E7XHJcbiRkYW5nZXJUaW50OiAjZGE0ZTU1O1xyXG5cclxuJG1lZGl1bTogIzFlMWUxZTtcclxuJG1lZGl1bVJHQjogMzAsIDMwLCAzMDtcclxuJG1lZGl1bUNvbnRyYXN0OiAjZmZmZmZmO1xyXG4kbWVkaXVtQ29udHJhc3RSR0I6IDI1NSwgMjU1LCAyNTU7XHJcbiRtZWRpdW1TaGFkZTogIzFhMWExYTtcclxuJG1lZGl1bVRpbnQ6ICMzNTM1MzU7XHJcblxyXG4kbGlnaHQ6ICNmZmZmZmY7XHJcbiRsaWdodFJHQjogMjU1LCAyNTUsIDI1NTtcclxuJGxpZ2h0Q29udHJhc3Q6ICNmZmZmZmY7XHJcbiRsaWdodENvbnRyYXN0UkdCOiAyNTUsIDI1NSwgMjU1O1xyXG4kbGlnaHRTaGFkZTogI2UwZTBlMDtcclxuJGxpZ2h0VGludDogI2ZmZmZmZjtcclxuXHJcbiRiYWNrZ3JvdW5kQ29sb3I6ICNmZmZmZmY7XHJcbiRiYWNrZ3JvdW5kQ29sb3JSR0I6IDExLCAxMiwgMjI7XHJcbiRpdGVtQmFja2dyb3VuZDogI2ZmZmZmZjtcclxuJGNhcmRCYWNrZ3JvdW5kOiAjZjdmN2Y3O1xyXG4kZGlhbG9nQmFja2dyb3VuZDogIzE2MTcyNDtcclxuXHJcbiR0ZXh0Q29sb3I6ICMxZTFlMWU7XHJcbiR0ZXh0Q29sb3JSR0I6IDI1NSwgMjU1LCAyNTU7XHJcbiRzZWNvbmRhcnlUZXh0Q29sb3I6ICNhMGEwYTA7XHJcbiR0ZXJ0aWFyeVRleHRDb2xvcjogI2I1YjViNTtcclxuJGxpZ2h0VGV4dENvbG9yOiAjYWFhY2I3O1xyXG4kZGFya1RleHRDb2xvcjogIzBhMGIxNTtcclxuJHBsYWNlaG9sZGVyVGV4dENvbG9yOiAjMzkzYjRhO1xyXG5cclxuLy8gU2l6ZSBWYXJpYWJsZXNcclxuJGFwcEhlYWRlckhlaWdodDogNjBweDtcclxuJGFwcEJvcmRlclJhZGl1czogMTBweDtcclxuJGlubmVyQm9yZGVyUmFkaXVzOiA2cHg7XHJcbiRkZXNrdG9wUGFkZGluZzogMzBweDtcclxuJHByaW1hcnlQYWRkaW5nOiAyMHB4O1xyXG4kbWVkaXVtUGFkZGluZzogNDBweDtcclxuJGxhcmdlUGFkZGluZzogODBweDtcclxuXHJcbiRwcmltYXJ5TWFyZ2luOiAzMHB4O1xyXG4kc2Vjb25kYXJ5TWFyZ2luOiAyMHB4O1xyXG4kbGFyZ2VNYXJnaW46IDUwcHg7XHJcbiRsaW5lSGVpZ2h0OiA1MHB4O1xyXG5cclxuJGxhcmdlTW9kdWxlU3BhY2luZzogMTUwcHg7XHJcbiRtb2R1bGVTcGFjaW5nOiA1MHB4O1xyXG4kbGFyZ2VJbWFnZVRleHRTcGFjaW5nOiA0MHB4O1xyXG4kY2FyZFNwYWNpbmc6IDMwcHg7XHJcbiRjYXJkU3BhY2luZ1NtYWxsOiAxNnB4O1xyXG4kaW1hZ2VUZXh0U3BhY2luZzogMTJweDtcclxuJHRleHRMaW5lU3BhY2luZzogNnB4O1xyXG5cclxuJGFwcEZvbnRTaXplU21hbGw6IDEycHg7XHJcbiRhcHBGb250U2l6ZVJlZ3VsYXI6IDE0cHg7XHJcbiRhcHBGb250U2l6ZUxhcmdlOiAxNnB4O1xyXG4kYXBwRm9udFNpemVJbXBvcnRhbnQ6IDE4cHg7XHJcbiRhcHBGb250U2l6ZVRpdGxlOiAyNHB4O1xyXG4kYXBwRm9udFNpemVNZWRpdW1UaXRsZTogMzJweDtcclxuJGFwcEZvbnRTaXplTGFyZ2VUaXRsZTogNDJweDtcclxuJGFwcEZvbnRTaXplRm9jdXM6IDY0cHg7XHJcbiRhcHBGb250U2l6ZUxvZ29UaXRsZTogODZweDtcclxuJGFwcExhcmdlc3RGb250U2l6ZTogMTMycHg7XHJcbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_about_about_module_ts.js.map