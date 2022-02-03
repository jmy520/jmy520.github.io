"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_home_home_module_ts"],{

/***/ 9639:
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 8774);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 5129:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 9639);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 8774);
/* harmony import */ var src_app_modules_share_share_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/share/share.module */ 6672);
/* harmony import */ var src_app_modules_layout_layout_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/layout/layout.module */ 5358);









let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            src_app_modules_share_share_module__WEBPACK_IMPORTED_MODULE_2__.ShareModule,
            src_app_modules_layout_layout_module__WEBPACK_IMPORTED_MODULE_3__.LayoutModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule,
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage],
    })
], HomePageModule);



/***/ }),

/***/ 8774:
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_Project_Web_Angular_TrendBeat_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./home.page.html */ 9090);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 932);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! class-transformer */ 8979);
/* harmony import */ var src_app_base_base_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/base/base-page */ 8920);
/* harmony import */ var src_app_beans_response_bean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/beans/response-bean */ 8974);
/* harmony import */ var src_app_providers_screen_fit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/screen-fit.service */ 6952);
/* harmony import */ var src_app_providers_theme_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/providers/theme.service */ 7440);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/api.service */ 7118);
/* harmony import */ var src_app_services_runtime_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/runtime.service */ 759);













let HomePage = class HomePage extends src_app_base_base_page__WEBPACK_IMPORTED_MODULE_2__.BasePage {
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
        this.advertList = [];
        this.currentAdvertIndex = 0;
        this.hotArticleList = [];
        this.categoryList = [];
        this.currentCategory = null;
        this.articleList = [];
        this.pageIndex = 1;
        this.pageSize = 20;
        this.advertSlidesOption = {
            speed: 500,
            autoplay: {
                duration: 5000,
            },
            on: {
                beforeInit() {
                    const swiper = this;
                    swiper.classNames.push(`${swiper.params.containerModifierClass}fade`);
                    const overwriteParams = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: true,
                        spaceBetween: 0,
                        virtualTranslate: true,
                    };
                    swiper.params = Object.assign(swiper.params, overwriteParams);
                    swiper.params = Object.assign(swiper.originalParams, overwriteParams);
                },
                setTranslate() {
                    const swiper = this;
                    const { slides } = swiper;
                    for (let i = 0; i < slides.length; i += 1) {
                        const $slideEl = swiper.slides.eq(i);
                        const offset$$1 = $slideEl[0].swiperSlideOffset;
                        let tx = -offset$$1;
                        if (!swiper.params.virtualTranslate)
                            tx -= swiper.translate;
                        let ty = 0;
                        if (!swiper.isHorizontal()) {
                            ty = tx;
                            tx = 0;
                        }
                        const slideOpacity = swiper.params.fadeEffect.crossFade
                            ? Math.max(1 - Math.abs($slideEl[0].progress), 0)
                            : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
                        $slideEl
                            .css({
                            opacity: slideOpacity,
                        })
                            .transform(`translate3d(${tx}px, ${ty}px, 0px)`);
                    }
                },
                setTransition(duration) {
                    const swiper = this;
                    const { slides, $wrapperEl } = swiper;
                    slides.transition(duration);
                    if (swiper.params.virtualTranslate && duration !== 0) {
                        let eventTriggered = false;
                        slides.transitionEnd(() => {
                            if (eventTriggered)
                                return;
                            if (!swiper || swiper.destroyed)
                                return;
                            eventTriggered = true;
                            swiper.animating = false;
                            const triggerEvents = ['webkitTransitionEnd', 'transitionend'];
                            for (let i = 0; i < triggerEvents.length; i += 1) {
                                $wrapperEl.trigger(triggerEvents[i]);
                            }
                        });
                    }
                },
            },
        };
    }
    ngOnInit() {
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__.NavigationEnd) {
                if (event.url == '/home') {
                    this.setPageTitle('Home');
                }
            }
        });
    }
    initData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            // fetch data or load cache
            yield Promise.all([
                this.fetchAdvertList(),
                this.fetchCategories(),
                this.fetchHotArticleList(),
                this.fetchArticleList(),
            ]);
            this.appStatusContent.invokeSuccess();
        });
    }
    ionViewWillEnter() {
        this.setPageTitle('Home');
    }
    ionViewDidEnter() {
        (() => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            yield this.initData();
        }))().catch((error) => {
            console.error('[init data errror]', error);
            this.appStatusContent.invokeError();
        });
    }
    onRetry() {
        (() => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            yield this.initData();
        }))().catch((error) => {
            console.error('[init data errror]', error);
            this.appStatusContent.invokeError();
        });
    }
    back() {
        this.navCtrl.back();
    }
    onClickArticleItem(item) {
        this.router.navigate(['/article-detail'], {
            queryParams: {
                uid: item.uid,
            },
        });
    }
    onClickAdvertTitle(index) {
        this.advertSlides.slideTo(index);
    }
    onClickCategoryItem(item) {
        this.currentCategory = item;
        this.fetchArticleList();
    }
    onSlideChange(event) {
        this.currentAdvertIndex = event.target.swiper.activeIndex;
    }
    fetchAdvertList() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const response = (0,class_transformer__WEBPACK_IMPORTED_MODULE_10__.plainToClass)(src_app_beans_response_bean__WEBPACK_IMPORTED_MODULE_3__.ResponseBean, yield this.api.fetchAdvertList(null));
            if (response.code == 200) {
                if (response.result.data && response.result.data.length > 0) {
                    this.advertList = response.result.data;
                }
            }
            else {
                return Promise.reject({ code: response.code, message: response.message });
            }
        });
    }
    fetchCategories() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const response = (0,class_transformer__WEBPACK_IMPORTED_MODULE_10__.plainToClass)(src_app_beans_response_bean__WEBPACK_IMPORTED_MODULE_3__.ResponseBean, yield this.api.fetchCategoryList(null));
            if (response.code == 200) {
                if (response.result.data && response.result.data.length > 0) {
                    this.categoryList = response.result.data;
                    this.currentCategory = this.categoryList[0];
                }
            }
            else {
                return Promise.reject({ code: response.code, message: response.message });
            }
        });
    }
    fetchHotArticleList() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const response = (0,class_transformer__WEBPACK_IMPORTED_MODULE_10__.plainToClass)(src_app_beans_response_bean__WEBPACK_IMPORTED_MODULE_3__.ResponseBean, yield this.api.fetchArticleList(null));
            console.error(response);
            if (response.code == 200) {
                if (response.result.data && response.result.data.length > 0) {
                    this.hotArticleList = response.result.data.slice(0, 3);
                }
            }
            else {
                return Promise.reject({ code: response.code, message: response.message });
            }
        });
    }
    fetchArticleList() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const response = (0,class_transformer__WEBPACK_IMPORTED_MODULE_10__.plainToClass)(src_app_beans_response_bean__WEBPACK_IMPORTED_MODULE_3__.ResponseBean, yield this.api.fetchArticleList(null));
            if (response.code == 200) {
                if (response.result.data && response.result.data.length > 0) {
                    this.articleList = response.result.data;
                }
            }
            else {
                return Promise.reject({ code: response.code, message: response.message });
            }
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ToastController },
    { type: src_app_services_runtime_service__WEBPACK_IMPORTED_MODULE_7__.RuntimeService },
    { type: src_app_providers_screen_fit_service__WEBPACK_IMPORTED_MODULE_4__.ScreenFitService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: src_app_providers_theme_service__WEBPACK_IMPORTED_MODULE_5__.ThemeService }
];
HomePage.propDecorators = {
    appStatusContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild, args: ['appStatusContent', { static: false },] }],
    advertSlides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild, args: ['advertSlides', { static: false },] }]
};
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-home',
        template: _D_Project_Web_Angular_TrendBeat_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 9090:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/home/home.page.html ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content\r\n  [fullscreen]=\"themeService.immersive\"\r\n  [scrollEvents]=\"true\"\r\n  [class]=\"screenFitService.screenCategory\"\r\n>\r\n  <div [class]=\"screenFitService.screenCategory\" class=\"page-root home\">\r\n    <ng-container *ngIf=\"screenFitService.screenCategory == 'desktop'\">\r\n      <app-status-content #appStatusContent (retry)=\"onRetry()\">\r\n        <div class=\"app-container\">\r\n          <div class=\"advert-wrapper\">\r\n            <div class=\"layout-start\">\r\n              <div class=\"slogan\">\r\n                <div class=\"title\">TRENDBEAT</div>\r\n                <div class=\"subtitle\">最懂你的潮玩聚集地</div>\r\n              </div>\r\n\r\n              <div class=\"advert-title-list\">\r\n                <ion-list>\r\n                  <ion-item\r\n                    *ngFor=\"let item of advertList; let index = index\"\r\n                    [ngClass]=\"{'active': currentAdvertIndex == index}\"\r\n                    (click)=\"onClickAdvertTitle(index)\"\r\n                  >\r\n                    <ion-label>{{ item.title }}</ion-label>\r\n                    <ion-icon slot=\"end\" name=\"arrow-back-outline\"></ion-icon>\r\n                  </ion-item>\r\n                </ion-list>\r\n              </div>\r\n            </div>\r\n            <div class=\"layout-end\">\r\n              <ion-slides\r\n                #advertSlides\r\n                [options]=\"advertSlidesOption\"\r\n                mode=\"md\"\r\n                pager=\"true\"\r\n                scrollbar=\"false\"\r\n                (ionSlideDidChange)=\"onSlideChange($event)\"\r\n              >\r\n                <ion-slide *ngFor=\"let item of advertList\">\r\n                  <div class=\"advert-item\">\r\n                    <app-status-image [src]=\"item.thumbnail\"></app-status-image>\r\n                  </div>\r\n                </ion-slide>\r\n              </ion-slides>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"hot-advert-list\">\r\n            <ul>\r\n              <li *ngFor=\"let item of hotArticleList\">\r\n                <div class=\"article-item-card simple\" (click)=\"onClickArticleItem(item)\">\r\n                  <div class=\"thumbnail-wrapper\">\r\n                    <app-status-image [src]=\"item.thumbnail\"></app-status-image>\r\n                  </div>\r\n                  <div class=\"mask-layer\">\r\n                    <div class=\"title\">\r\n                      <span>{{ item.title }}</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n\r\n          <div class=\"category-list\">\r\n            <ul>\r\n              <li\r\n                *ngFor=\"let item of categoryList\"\r\n                [ngClass]=\"{'active': currentCategory && item.uid == currentCategory.uid}\"\r\n                (click)=\"onClickCategoryItem(item)\"\r\n              >\r\n                <span>{{ item.name }}</span>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n\r\n          <div class=\"article-list\">\r\n            <ul>\r\n              <li *ngFor=\"let item of articleList\">\r\n                <div class=\"article-item-card\" (click)=\"onClickArticleItem(item)\">\r\n                  <div class=\"thumbnail-wrapper\">\r\n                    <app-status-image [src]=\"item.thumbnail\"></app-status-image>\r\n                  </div>\r\n                  <div class=\"title\">\r\n                    <span>{{ item.title }}</span>\r\n                  </div>\r\n                  <div class=\"subtitle\">\r\n                    <span>{{ item.subtitle }}</span>\r\n                  </div>\r\n                  <div class=\"footer\">\r\n                    <div class=\"layout-start\">\r\n                      <span>{{ item.category_name }}</span>\r\n                    </div>\r\n                    <div class=\"layout-end\">\r\n                      <span>{{ item.create_time }}</span>\r\n                      <span>{{ item.author }}</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </app-status-content>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"screenFitService.screenCategory == 'pad'\">\r\n      <app-status-content #appStatusContent (retry)=\"onRetry()\">\r\n        <div class=\"app-container\">pad layout here</div>\r\n      </app-status-content>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"screenFitService.screenCategory == 'phone'\">\r\n      <app-status-content #appStatusContent (retry)=\"onRetry()\">\r\n        <div class=\"app-container\">phone layout here</div>\r\n      </app-status-content>\r\n    </ng-container>\r\n  </div>\r\n  <app-common-footer></app-common-footer>\r\n</ion-content>\r\n");

/***/ }),

/***/ 932:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/***/ ((module) => {

module.exports = "div.page-root.home.desktop app-status-content div.app-container > div.advert-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 36.8421052632vw;\n  min-height: 552.6315789474px;\n}\ndiv.page-root.home.desktop app-status-content div.app-container > div.advert-wrapper > div.layout-start {\n  position: relative;\n  z-index: 10;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 16.8421052632vw;\n  min-width: 252.6315789474px;\n  height: 100%;\n  flex-shrink: 0;\n}\ndiv.page-root.home.desktop app-status-content div.app-container > div.advert-wrapper > div.layout-start > div.slogan > div.title {\n  font-size: 86px;\n  white-space: nowrap;\n  font-weight: bold;\n  text-shadow: 0px 0px 3px #fff;\n}\ndiv.page-root.home.desktop app-status-content div.app-container > div.advert-wrapper > div.layout-start > div.slogan > div.subtitle {\n  font-size: 24px;\n}\ndiv.page-root.home.desktop app-status-content div.app-container > div.advert-wrapper > div.layout-start > div.advert-title-list {\n  width: 100%;\n  height: auto;\n}\ndiv.page-root.home.desktop app-status-content div.app-container > div.advert-wrapper > div.layout-start > div.advert-title-list > ion-list {\n  width: 100%;\n  height: 100%;\n}\ndiv.page-root.home.desktop app-status-content div.app-container > div.advert-wrapper > div.layout-start > div.advert-title-list > ion-list > ion-item {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  justify-content: space-between;\n  cursor: pointer;\n}\ndiv.page-root.home.desktop app-status-content div.app-container > div.advert-wrapper > div.layout-start > div.advert-title-list > ion-list > ion-item:hover > ion-label, div.page-root.home.desktop app-status-content div.app-container > div.advert-wrapper > div.layout-start > div.advert-title-list > ion-list > ion-item.active > ion-label {\n  color: #5433ff;\n}\ndiv.page-root.home.desktop app-status-content div.app-container > div.advert-wrapper > div.layout-start > div.advert-title-list > ion-list > ion-item:hover > ion-icon, div.page-root.home.desktop app-status-content div.app-container > div.advert-wrapper > div.layout-start > div.advert-title-list > ion-list > ion-item.active > ion-icon {\n  color: #5433ff;\n}\ndiv.page-root.home.desktop app-status-content div.app-container > div.advert-wrapper > div.layout-start > div.advert-title-list > ion-list > ion-item > ion-label {\n  width: auto;\n  flex: 1;\n  color: #1e1e1e;\n  font-size: 16px;\n}\ndiv.page-root.home.desktop app-status-content div.app-container > div.advert-wrapper > div.layout-start > div.advert-title-list > ion-list > ion-item > ion-icon {\n  display: block;\n  flex-shrink: 0;\n  font-size: 16px;\n  color: #1e1e1e;\n}\ndiv.page-root.home.desktop app-status-content div.app-container > div.advert-wrapper > div.layout-end {\n  display: block;\n  width: 63.1578947368vw;\n  min-width: 947.3684210526px;\n  height: 100%;\n}\ndiv.page-root.home.desktop app-status-content div.app-container > div.advert-wrapper > div.layout-end > ion-slides {\n  width: 100%;\n  height: 100%;\n}\ndiv.page-root.home.desktop app-status-content div.app-container > div.advert-wrapper > div.layout-end > ion-slides div.advert-item {\n  width: 100%;\n  height: 100%;\n}\ndiv.page-root.home.desktop app-status-content div.app-container > div.advert-wrapper > div.layout-end > ion-slides div.advert-item > app-status-image {\n  width: 100%;\n  height: 100%;\n}\ndiv.page-root.home.desktop app-status-content div.app-container > div.hot-advert-list {\n  width: 100%;\n  margin-top: 50px;\n}\ndiv.page-root.home.desktop app-status-content div.app-container > div.hot-advert-list > ul {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\ndiv.page-root.home.desktop app-status-content div.app-container > div.hot-advert-list > ul > li {\n  width: calc((100% - 30px * 2) / 3);\n  height: 14.7368421053vw;\n  min-height: 221.0526315789px;\n}\ndiv.page-root.home.desktop app-status-content div.app-container > div.hot-advert-list > ul > li:not(:first-of-type) {\n  margin-left: 30px;\n}\ndiv.page-root.home.desktop app-status-content div.app-container > div.hot-advert-list > ul > li > div.article-item-card.simple {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n}\ndiv.page-root.home.desktop app-status-content div.app-container > div.hot-advert-list > ul > li > div.article-item-card.simple > div.thumbnail-wrapper {\n  width: 100%;\n  height: 100%;\n}\ndiv.page-root.home.desktop app-status-content div.app-container > div.hot-advert-list > ul > li > div.article-item-card.simple > div.thumbnail-wrapper > app-status-image {\n  width: 100%;\n  height: 100%;\n}\ndiv.page-root.home.desktop app-status-content div.app-container > div.hot-advert-list > ul > li > div.article-item-card.simple > div.mask-layer {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 10;\n  top: 0;\n  left: 0;\n}\ndiv.page-root.home.desktop app-status-content div.app-container > div.hot-advert-list > ul > li > div.article-item-card.simple > div.mask-layer > div.title {\n  position: absolute;\n  width: 100%;\n  min-height: 94px;\n  padding: 20px;\n  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%);\n  left: 0;\n  bottom: 0;\n}\ndiv.page-root.home.desktop app-status-content div.app-container > div.hot-advert-list > ul > li > div.article-item-card.simple > div.mask-layer > div.title > span {\n  display: block;\n  color: #ffffff;\n  font-size: 18px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\ndiv.page-root.home.desktop app-status-content div.app-container > div.category-list {\n  width: 100%;\n  margin-top: 50px;\n}\ndiv.page-root.home.desktop app-status-content div.app-container > div.category-list > ul {\n  display: flex;\n  align-items: center;\n}\ndiv.page-root.home.desktop app-status-content div.app-container > div.category-list > ul > li {\n  display: block;\n}\ndiv.page-root.home.desktop app-status-content div.app-container > div.category-list > ul > li:not(:first-of-type) {\n  margin-left: 50px;\n}\ndiv.page-root.home.desktop app-status-content div.app-container > div.category-list > ul > li:hover, div.page-root.home.desktop app-status-content div.app-container > div.category-list > ul > li.active {\n  color: #5433ff;\n}\ndiv.page-root.home.desktop app-status-content div.app-container > div.category-list > ul > li > span {\n  display: block;\n  font-size: 24px;\n}\ndiv.page-root.home.desktop app-status-content div.app-container > div.article-list {\n  width: 100%;\n}\ndiv.page-root.home.desktop app-status-content div.app-container > div.article-list > ul {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n}\ndiv.page-root.home.desktop app-status-content div.app-container > div.article-list > ul > li {\n  display: block;\n  width: calc((100% - 30px * 3) / 4);\n  margin-top: 30px;\n  margin-left: 30px;\n}\ndiv.page-root.home.desktop app-status-content div.app-container > div.article-list > ul > li:nth-of-type(4n + 1) {\n  margin-left: 0;\n}\ndiv.page-root.home.desktop app-status-content div.app-container > div.article-list > ul > li > div.article-item-card {\n  width: 100%;\n  cursor: pointer;\n}\ndiv.page-root.home.desktop app-status-content div.app-container > div.article-list > ul > li > div.article-item-card > div.thumbnail-wrapper {\n  width: 100%;\n  height: 10.7368421053vw;\n  min-height: 161.0526315789px;\n}\ndiv.page-root.home.desktop app-status-content div.app-container > div.article-list > ul > li > div.article-item-card > div.thumbnail-wrapper > app-status-image {\n  width: 100%;\n  height: 100%;\n}\ndiv.page-root.home.desktop app-status-content div.app-container > div.article-list > ul > li > div.article-item-card > div.title {\n  width: 100%;\n  margin-top: 12px;\n}\ndiv.page-root.home.desktop app-status-content div.app-container > div.article-list > ul > li > div.article-item-card > div.title > span {\n  display: block;\n  font-size: 18px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\ndiv.page-root.home.desktop app-status-content div.app-container > div.article-list > ul > li > div.article-item-card > div.subtitle {\n  width: 100%;\n  margin-top: 6px;\n}\ndiv.page-root.home.desktop app-status-content div.app-container > div.article-list > ul > li > div.article-item-card > div.subtitle > span {\n  display: block;\n  color: #a0a0a0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\ndiv.page-root.home.desktop app-status-content div.app-container > div.article-list > ul > li > div.article-item-card > div.footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  margin-top: 6px;\n}\ndiv.page-root.home.desktop app-status-content div.app-container > div.article-list > ul > li > div.article-item-card > div.footer > div.layout-start > span {\n  display: block;\n  color: #5433ff;\n}\ndiv.page-root.home.desktop app-status-content div.app-container > div.article-list > ul > li > div.article-item-card > div.footer > div.layout-end {\n  display: flex;\n  align-items: center;\n}\ndiv.page-root.home.desktop app-status-content div.app-container > div.article-list > ul > li > div.article-item-card > div.footer > div.layout-end > span {\n  display: block;\n  color: #a0a0a0;\n}\ndiv.page-root.home.desktop app-status-content div.app-container > div.article-list > ul > li > div.article-item-card > div.footer > div.layout-end > span:nth-of-type(2) {\n  margin-left: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcdGhlbWVcXG1peGluLnNjc3MiLCIuLlxcLi5cXC4uXFx0aGVtZVxcdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT1E7RUN3RU4sYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUR4RVEsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsNEJBQUE7QUFKVjtBQU1VO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFKWjtBQU9jO0VBQ0UsZUUyRU87RUYxRVAsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0FBTGhCO0FBUWM7RUFDRSxlRWdFRztBRnRFbkI7QUFVWTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBUmQ7QUFVYztFQUNFLFdBQUE7RUFDQSxZQUFBO0FBUmhCO0FBVWdCO0VDa0NkLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VEbENnQiw4QkFBQTtFQUNBLGVBQUE7QUFObEI7QUFVb0I7RUFDRSxjRXBEWjtBRjRDVjtBQVdvQjtFQUNFLGNFeERaO0FGK0NWO0FBYWtCO0VBQ0UsV0FBQTtFQUNBLE9BQUE7RUFDQSxjRURSO0VGRVEsZUU4QkQ7QUZ6Q25CO0FBY2tCO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0VUUjtBRkhaO0FBbUJVO0VBQ0UsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0FBakJaO0FBbUJZO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFqQmQ7QUFtQmM7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQWpCaEI7QUFtQmdCO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFqQmxCO0FBd0JRO0VBQ0UsV0FBQTtFQUNBLGdCRWxCTTtBRkpoQjtBQXdCVTtFQzNCUixhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFRDJCVSxXQUFBO0FBcEJaO0FBc0JZO0VBQ0Usa0NBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0FBcEJkO0FBc0JjO0VBQ0UsaUJFNUJGO0FGUWQ7QUF1QmM7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQXJCaEI7QUF1QmdCO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFyQmxCO0FBdUJrQjtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBckJwQjtBQXlCZ0I7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FBdkJsQjtBQXlCa0I7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFFdkVIO0VGd0VHLGlGQUFBO0VBS0EsT0FBQTtFQUNBLFNBQUE7QUEzQnBCO0FBNkJvQjtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZUUvREM7RUR6RXJCLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCRHNJd0M7RUNySXhDLDRCQUFBO0FEOEdGO0FBZ0NRO0VBQ0UsV0FBQTtFQUNBLGdCRXJGTTtBRnVEaEI7QUFnQ1U7RUN4RlIsYUFBQTtFQUNBLG1CQUFBO0FEMkRGO0FBK0JZO0VBQ0UsY0FBQTtBQTdCZDtBQStCYztFQUNFLGlCRWxHRjtBRnFFZDtBQWdDYztFQUVFLGNFeExOO0FGeUpWO0FBa0NjO0VBQ0UsY0FBQTtFQUNBLGVFN0ZHO0FGNkRuQjtBQXNDUTtFQUNFLFdBQUE7QUFwQ1Y7QUFzQ1U7RUFDRSxXQUFBO0VDbkhWLGFBQUE7RUFDQSxtQkFBQTtFRG9IVSxlQUFBO0FBbkNaO0FBcUNZO0VBQ0UsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JFdkhBO0VGd0hBLGlCRXhIQTtBRnFGZDtBQXFDYztFQUNFLGNBQUE7QUFuQ2hCO0FBc0NjO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUFwQ2hCO0FBc0NnQjtFQUNFLFdBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0FBcENsQjtBQXNDa0I7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQXBDcEI7QUF3Q2dCO0VBQ0UsV0FBQTtFQUNBLGdCRTdJQztBRnVHbkI7QUF3Q2tCO0VBQ0UsY0FBQTtFQUNBLGVFM0lHO0VEdkRyQixtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUQ2SkY7QUF3Q2dCO0VBQ0UsV0FBQTtFQUNBLGVFdkpBO0FGaUhsQjtBQXdDa0I7RUFDRSxjQUFBO0VBQ0EsY0VyTEM7RUQxQ25CLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCRDZOc0M7RUM1TnRDLDRCQUFBO0FEMExGO0FBc0NnQjtFQ3RLZCxhQUFBO0VBQ0EsbUJBQUE7RUR1S2dCLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLGVFcEtBO0FGaUlsQjtBQXNDb0I7RUFDRSxjQUFBO0VBQ0EsY0VuUVo7QUYrTlY7QUF3Q2tCO0VDbkxoQixhQUFBO0VBQ0EsbUJBQUE7QUQ4SUY7QUF1Q29CO0VBQ0UsY0FBQTtFQUNBLGNFNU1EO0FGdUtyQjtBQXVDc0I7RUFDRSxpQkV0TEw7QUZpSm5CIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInZhcmlhYmxlcy5zY3NzXCI7XHJcbkBpbXBvcnQgXCJtaXhpbi5zY3NzXCI7XHJcblxyXG5kaXYucGFnZS1yb290LmhvbWUge1xyXG4gICYuZGVza3RvcCB7XHJcbiAgICBhcHAtc3RhdHVzLWNvbnRlbnQge1xyXG4gICAgICBkaXYuYXBwLWNvbnRhaW5lciB7XHJcbiAgICAgICAgPiBkaXYuYWR2ZXJ0LXdyYXBwZXIge1xyXG4gICAgICAgICAgQGluY2x1ZGUgYWxpZ24tY2VudGVyKCk7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogY2FsYyg3MDAgLyAxNTIwICogODB2dyk7XHJcbiAgICAgICAgICBtaW4taGVpZ2h0OiBjYWxjKDcwMCAvIDE1MjAgKiAxMjAwcHgpO1xyXG5cclxuICAgICAgICAgID4gZGl2LmxheW91dC1zdGFydCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMzIwIC8gMTUyMCAqIDgwdncpO1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IGNhbGMoMzIwIC8gMTUyMCAqIDEyMDBweCk7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgZmxleC1zaHJpbms6IDA7XHJcblxyXG4gICAgICAgICAgICA+IGRpdi5zbG9nYW4ge1xyXG4gICAgICAgICAgICAgID4gZGl2LnRpdGxlIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJGFwcEZvbnRTaXplTG9nb1RpdGxlO1xyXG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDBweCAwcHggM3B4ICNmZmY7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICA+IGRpdi5zdWJ0aXRsZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6ICRhcHBGb250U2l6ZVRpdGxlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgPiBkaXYuYWR2ZXJ0LXRpdGxlLWxpc3Qge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuXHJcbiAgICAgICAgICAgICAgPiBpb24tbGlzdCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgICAgICA+IGlvbi1pdGVtIHtcclxuICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgYWxpZ24tY2VudGVyKCk7XHJcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgJjpob3ZlcixcclxuICAgICAgICAgICAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgID4gaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgID4gaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgPiBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR0ZXh0Q29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAkYXBwRm9udFNpemVMYXJnZTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgPiBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkdGV4dENvbG9yO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgPiBkaXYubGF5b3V0LWVuZCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDogY2FsYygxMjAwIC8gMTUyMCAqIDgwdncpO1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IGNhbGMoMTIwMCAvIDE1MjAgKiAxMjAwcHgpO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICA+IGlvbi1zbGlkZXMge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgICAgZGl2LmFkdmVydC1pdGVtIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgICAgID4gYXBwLXN0YXR1cy1pbWFnZSB7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICA+IGRpdi5ob3QtYWR2ZXJ0LWxpc3Qge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAkbW9kdWxlU3BhY2luZztcclxuXHJcbiAgICAgICAgICA+IHVsIHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgYWxpZ24tY2VudGVyKCk7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgPiBsaSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoKDEwMCUgLSAjeyRjYXJkU3BhY2luZ30gKiAyKSAvIDMpO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogY2FsYygyODAgLyAxNTIwICogODB2dyk7XHJcbiAgICAgICAgICAgICAgbWluLWhlaWdodDogY2FsYygyODAgLyAxNTIwICogMTIwMHB4KTtcclxuXHJcbiAgICAgICAgICAgICAgJjpub3QoOmZpcnN0LW9mLXR5cGUpIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAkY2FyZFNwYWNpbmc7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICA+IGRpdi5hcnRpY2xlLWl0ZW0tY2FyZC5zaW1wbGUge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgPiBkaXYudGh1bWJuYWlsLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgPiBhcHAtc3RhdHVzLWltYWdlIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA+IGRpdi5tYXNrLWxheWVyIHtcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgPiBkaXYudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA5NHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICRwcmltYXJ5UGFkZGluZztcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAxODBkZWcsXHJcbiAgICAgICAgICAgICAgICAgICAgICByZ2JhKDAsIDAsIDAsIDApIDAlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjgpIDEwMCVcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICA+IHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJGFwcEZvbnRTaXplSW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgbGluZS1jbGFtcCgyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgID4gZGl2LmNhdGVnb3J5LWxpc3Qge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAkbW9kdWxlU3BhY2luZztcclxuXHJcbiAgICAgICAgICA+IHVsIHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgYWxpZ24tY2VudGVyLXZlcnRpY2FsKCk7XHJcblxyXG4gICAgICAgICAgICA+IGxpIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuXHJcbiAgICAgICAgICAgICAgJjpub3QoOmZpcnN0LW9mLXR5cGUpIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAkbGFyZ2VNYXJnaW47XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAmOmhvdmVyLFxyXG4gICAgICAgICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgID4gc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJGFwcEZvbnRTaXplVGl0bGU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICA+IGRpdi5hcnRpY2xlLWxpc3Qge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgPiB1bCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBhbGlnbi1jZW50ZXItdmVydGljYWwoKTtcclxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgICAgICAgICAgPiBsaSB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoKDEwMCUgLSAjeyRjYXJkU3BhY2luZ30gKiAzKSAvIDQpO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6ICRjYXJkU3BhY2luZztcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogJGNhcmRTcGFjaW5nO1xyXG5cclxuICAgICAgICAgICAgICAmOm50aC1vZi10eXBlKDRuICsgMSkge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICA+IGRpdi5hcnRpY2xlLWl0ZW0tY2FyZCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICA+IGRpdi50aHVtYm5haWwtd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoKDIwNCAvIDE1MjApICogODB2dyk7XHJcbiAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoKDIwNCAvIDE1MjApICogMTIwMHB4KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgID4gYXBwLXN0YXR1cy1pbWFnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgPiBkaXYudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogJGltYWdlVGV4dFNwYWNpbmc7XHJcblxyXG4gICAgICAgICAgICAgICAgICA+IHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJGFwcEZvbnRTaXplSW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHNpbmdsZS1saW5lKCk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA+IGRpdi5zdWJ0aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAkdGV4dExpbmVTcGFjaW5nO1xyXG5cclxuICAgICAgICAgICAgICAgICAgPiBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHNlY29uZGFyeVRleHRDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBsaW5lLWNsYW1wKDIpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgPiBkaXYuZm9vdGVyIHtcclxuICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgYWxpZ24tY2VudGVyLXZlcnRpY2FsKCk7XHJcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6ICR0ZXh0TGluZVNwYWNpbmc7XHJcblxyXG4gICAgICAgICAgICAgICAgICA+IGRpdi5sYXlvdXQtc3RhcnQge1xyXG4gICAgICAgICAgICAgICAgICAgID4gc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgID4gZGl2LmxheW91dC1lbmQge1xyXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIGFsaWduLWNlbnRlci12ZXJ0aWNhbCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICA+IHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHNlY29uZGFyeVRleHRDb2xvcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAmOm50aC1vZi10eXBlKDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6ICRpbWFnZVRleHRTcGFjaW5nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5wYWQge1xyXG4gICAgYXBwLXN0YXR1cy1jb250ZW50IHtcclxuICAgICAgZGl2LmFwcC1jb250YWluZXIge1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLnBob25lIHtcclxuICAgIGFwcC1zdGF0dXMtY29udGVudCB7XHJcbiAgICAgIGRpdi5hcHAtY29udGFpbmVyIHtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJAaW1wb3J0IFwidmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbkBtaXhpbiBzY3JvbGxiYXIoJHRyYWNrQ29sb3I6ICN7JGJhY2tncm91bmRDb2xvcn0sICR0aHVtYkNvbG9yOiAjeyRwcmltYXJ5fSkge1xyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiA4cHg7XHJcbiAgfVxyXG5cclxuICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdHJhY2tDb2xvcjtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMmVtO1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAyZW07XHJcbiAgfVxyXG5cclxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGh1bWJDb2xvcjtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMmVtO1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAyZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gbGluZS1jbGFtcCgkbGluZXMpIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIC13ZWJraXQtbGluZS1jbGFtcDogJGxpbmVzO1xyXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbn1cclxuXHJcbkBtaXhpbiBjbGVhcmZpeCB7XHJcbiAgJjphZnRlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHNpbmdsZS1saW5lKCkge1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG5cclxuQG1peGluIHRyaWFuZ2xlKCR3aWR0aCwgJGhlaWdodCwgJGNvbG9yLCAkZGlyZWN0aW9uKSB7XHJcbiAgJHdpZHRoOiAkd2lkdGgvMjtcclxuICAkY29sb3ItYm9yZGVyLXN0eWxlOiAkaGVpZ2h0IHNvbGlkICRjb2xvcjtcclxuICAkdHJhbnNwYXJlbnQtYm9yZGVyLXN0eWxlOiAkd2lkdGggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIHdpZHRoOiAwO1xyXG5cclxuICBAaWYgJGRpcmVjdGlvbiA9PSB1cCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAkY29sb3ItYm9yZGVyLXN0eWxlO1xyXG4gICAgYm9yZGVyLWxlZnQ6ICR0cmFuc3BhcmVudC1ib3JkZXItc3R5bGU7XHJcbiAgICBib3JkZXItcmlnaHQ6ICR0cmFuc3BhcmVudC1ib3JkZXItc3R5bGU7XHJcbiAgfVxyXG5cclxuICBAZWxzZSBpZiAkZGlyZWN0aW9uID09IHJpZ2h0IHtcclxuICAgIGJvcmRlci1sZWZ0OiAkY29sb3ItYm9yZGVyLXN0eWxlO1xyXG4gICAgYm9yZGVyLXRvcDogJHRyYW5zcGFyZW50LWJvcmRlci1zdHlsZTtcclxuICAgIGJvcmRlci1ib3R0b206ICR0cmFuc3BhcmVudC1ib3JkZXItc3R5bGU7XHJcbiAgfVxyXG5cclxuICBAZWxzZSBpZiAkZGlyZWN0aW9uID09IGRvd24ge1xyXG4gICAgYm9yZGVyLXRvcDogJGNvbG9yLWJvcmRlci1zdHlsZTtcclxuICAgIGJvcmRlci1sZWZ0OiAkdHJhbnNwYXJlbnQtYm9yZGVyLXN0eWxlO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAkdHJhbnNwYXJlbnQtYm9yZGVyLXN0eWxlO1xyXG4gIH1cclxuXHJcbiAgQGVsc2UgaWYgJGRpcmVjdGlvbiA9PSBsZWZ0IHtcclxuICAgIGJvcmRlci1yaWdodDogJGNvbG9yLWJvcmRlci1zdHlsZTtcclxuICAgIGJvcmRlci10b3A6ICR0cmFuc3BhcmVudC1ib3JkZXItc3R5bGU7XHJcbiAgICBib3JkZXItYm90dG9tOiAkdHJhbnNwYXJlbnQtYm9yZGVyLXN0eWxlO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGFsaWduLWNlbnRlcigpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbkBtaXhpbiBhbGlnbi1jZW50ZXItdmVydGljYWwoKSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5AbWl4aW4gYWxpZ24tY2VudGVyLWhvcml6b250YWwoKSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuQG1peGluIHVuZGVybGluZS1lZmZlY3QoJGNvbG9yOiAkcHJpbWFyeSwgJGhlaWdodDogNHB4LCAkZHVyYXRpb246IDAuNXMpIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAmOmFmdGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogJGhlaWdodDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAkZHVyYXRpb247XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwLjQpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcblxyXG4gICYuYWN0aXZlIHtcclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxLjApO1xyXG4gICAgICBvcGFjaXR5OiAxLjA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8vIENvbG9ycyBWYXJpYWJsZXNcclxuJHByaW1hcnk6ICM1NDMzZmY7XHJcbiRwcmltYXJ5UkdCOiA4NCwgNTEsIDI1NTtcclxuJHByaW1hcnlDb250cmFzdDogI2ZmZmZmZjtcclxuJHByaW1hcnlDb250cmFzdFJHQjogMjU1LCAyNTUsIDI1NTtcclxuJHByaW1hcnlTaGFkZTogIzRhMmRlMDtcclxuJHByaW1hcnlUaW50OiAjNjU0N2ZmO1xyXG5cclxuJHNlY29uZGFyeTogIzUyNjBmZjtcclxuJHNlY29uZGFyeVJHQjogODIsIDk2LCAyNTU7XHJcbiRzZWNvbmRhcnlDb250cmFzdDogI2ZmZmZmZjtcclxuJHNlY29uZGFyeUNvbnRyYXN0UkdCOiAyNTUsIDI1NSwgMjU1O1xyXG4kc2Vjb25kYXJ5U2hhZGU6ICM0ODU0ZTA7XHJcbiRzZWNvbmRhcnlUaW50OiAjNGZhNGY5O1xyXG5cclxuJHRlcnRpYXJ5OiAjM2I5YWY4O1xyXG4kdGVydGlhcnlSR0I6IDU5LCAxNTQsIDI0ODtcclxuJHRlcnRpYXJ5Q29udHJhc3Q6ICNmZmZmZmY7XHJcbiR0ZXJ0aWFyeUNvbnRyYXN0UkdCOiAyNTUsIDI1NSwgMjU1O1xyXG4kdGVydGlhcnlTaGFkZTogIzM0ODhkYTtcclxuJHRlcnRpYXJ5VGludDogIzUwNzRmZDtcclxuXHJcbiRzdWNjZXNzOiAjMmRkMzZmO1xyXG4kc3VjY2Vzc1JHQjogNDUsIDIxMSwgMTExO1xyXG4kc3VjY2Vzc0NvbnRyYXN0OiAjMDAwMDAwO1xyXG4kc3VjY2Vzc0NvbnRyYXN0UkdCOiAwLCAwLCAwO1xyXG4kc3VjY2Vzc1NoYWRlOiAjMjhiYTYyO1xyXG4kc3VjY2Vzc1RpbnQ6ICM0MmQ3N2Q7XHJcblxyXG4kd2FybmluZzogI2Y4ZDQyMTtcclxuJHdhcm5pbmdSR0I6IDI0OCwgMjEyLCAzMztcclxuJHdhcm5pbmdDb250cmFzdDogIzAwMDAwMDtcclxuJHdhcm5pbmdDb250cmFzdFJHQjogMCwgMCwgMDtcclxuJHdhcm5pbmdTaGFkZTogI2RhYmIxZDtcclxuJHdhcm5pbmdUaW50OiAjZjlkODM3O1xyXG5cclxuJGRhbmdlcjogI2Q2M2E0MjtcclxuJGRhbmdlclJHQjogMjE0LCA1OCwgNjY7XHJcbiRkYW5nZXJDb250cmFzdDogI2ZmZmZmZjtcclxuJGRhbmdlckNvbnRyYXN0UkdCOiAyNTUsIDI1NSwgMjU1O1xyXG4kZGFuZ2VyU2hhZGU6ICNiYzMzM2E7XHJcbiRkYW5nZXJUaW50OiAjZGE0ZTU1O1xyXG5cclxuJG1lZGl1bTogIzFlMWUxZTtcclxuJG1lZGl1bVJHQjogMzAsIDMwLCAzMDtcclxuJG1lZGl1bUNvbnRyYXN0OiAjZmZmZmZmO1xyXG4kbWVkaXVtQ29udHJhc3RSR0I6IDI1NSwgMjU1LCAyNTU7XHJcbiRtZWRpdW1TaGFkZTogIzFhMWExYTtcclxuJG1lZGl1bVRpbnQ6ICMzNTM1MzU7XHJcblxyXG4kbGlnaHQ6ICNmZmZmZmY7XHJcbiRsaWdodFJHQjogMjU1LCAyNTUsIDI1NTtcclxuJGxpZ2h0Q29udHJhc3Q6ICNmZmZmZmY7XHJcbiRsaWdodENvbnRyYXN0UkdCOiAyNTUsIDI1NSwgMjU1O1xyXG4kbGlnaHRTaGFkZTogI2UwZTBlMDtcclxuJGxpZ2h0VGludDogI2ZmZmZmZjtcclxuXHJcbiRiYWNrZ3JvdW5kQ29sb3I6ICNmZmZmZmY7XHJcbiRiYWNrZ3JvdW5kQ29sb3JSR0I6IDExLCAxMiwgMjI7XHJcbiRpdGVtQmFja2dyb3VuZDogI2ZmZmZmZjtcclxuJGNhcmRCYWNrZ3JvdW5kOiAjZjdmN2Y3O1xyXG4kZGlhbG9nQmFja2dyb3VuZDogIzE2MTcyNDtcclxuXHJcbiR0ZXh0Q29sb3I6ICMxZTFlMWU7XHJcbiR0ZXh0Q29sb3JSR0I6IDI1NSwgMjU1LCAyNTU7XHJcbiRzZWNvbmRhcnlUZXh0Q29sb3I6ICNhMGEwYTA7XHJcbiR0ZXJ0aWFyeVRleHRDb2xvcjogI2I1YjViNTtcclxuJGxpZ2h0VGV4dENvbG9yOiAjYWFhY2I3O1xyXG4kZGFya1RleHRDb2xvcjogIzBhMGIxNTtcclxuJHBsYWNlaG9sZGVyVGV4dENvbG9yOiAjMzkzYjRhO1xyXG5cclxuLy8gU2l6ZSBWYXJpYWJsZXNcclxuJGFwcEhlYWRlckhlaWdodDogNjBweDtcclxuJGFwcEJvcmRlclJhZGl1czogMTBweDtcclxuJGlubmVyQm9yZGVyUmFkaXVzOiA2cHg7XHJcbiRkZXNrdG9wUGFkZGluZzogMzBweDtcclxuJHByaW1hcnlQYWRkaW5nOiAyMHB4O1xyXG4kbWVkaXVtUGFkZGluZzogNDBweDtcclxuJGxhcmdlUGFkZGluZzogODBweDtcclxuXHJcbiRwcmltYXJ5TWFyZ2luOiAzMHB4O1xyXG4kc2Vjb25kYXJ5TWFyZ2luOiAyMHB4O1xyXG4kbGFyZ2VNYXJnaW46IDUwcHg7XHJcbiRsaW5lSGVpZ2h0OiA1MHB4O1xyXG5cclxuJGxhcmdlTW9kdWxlU3BhY2luZzogMTUwcHg7XHJcbiRtb2R1bGVTcGFjaW5nOiA1MHB4O1xyXG4kbGFyZ2VJbWFnZVRleHRTcGFjaW5nOiA0MHB4O1xyXG4kY2FyZFNwYWNpbmc6IDMwcHg7XHJcbiRjYXJkU3BhY2luZ1NtYWxsOiAxNnB4O1xyXG4kaW1hZ2VUZXh0U3BhY2luZzogMTJweDtcclxuJHRleHRMaW5lU3BhY2luZzogNnB4O1xyXG5cclxuJGFwcEZvbnRTaXplU21hbGw6IDEycHg7XHJcbiRhcHBGb250U2l6ZVJlZ3VsYXI6IDE0cHg7XHJcbiRhcHBGb250U2l6ZUxhcmdlOiAxNnB4O1xyXG4kYXBwRm9udFNpemVJbXBvcnRhbnQ6IDE4cHg7XHJcbiRhcHBGb250U2l6ZVRpdGxlOiAyNHB4O1xyXG4kYXBwRm9udFNpemVNZWRpdW1UaXRsZTogMzJweDtcclxuJGFwcEZvbnRTaXplTGFyZ2VUaXRsZTogNDJweDtcclxuJGFwcEZvbnRTaXplRm9jdXM6IDY0cHg7XHJcbiRhcHBGb250U2l6ZUxvZ29UaXRsZTogODZweDtcclxuJGFwcExhcmdlc3RGb250U2l6ZTogMTMycHg7XHJcbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_home_module_ts.js.map