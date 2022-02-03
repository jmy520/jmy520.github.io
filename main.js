(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 3696:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _layout_index_index_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/index/index.component */ 6769);




const routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: '',
        component: _layout_index_index_component__WEBPACK_IMPORTED_MODULE_0__.IndexComponent,
        children: [
            {
                path: 'home',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_base_base-page_ts-src_app_modules_layout_layout_module_ts-src_app_modules_sha-4fb023"), __webpack_require__.e("default-node_modules_class-transformer_esm2015_index_js-src_app_beans_response-bean_ts"), __webpack_require__.e("src_app_pages_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/home/home.module */ 5129)).then((m) => m.HomePageModule),
            },
            {
                path: 'article-detail',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_base_base-page_ts-src_app_modules_layout_layout_module_ts-src_app_modules_sha-4fb023"), __webpack_require__.e("default-node_modules_class-transformer_esm2015_index_js-src_app_beans_response-bean_ts"), __webpack_require__.e("src_app_pages_article-detail_article-detail_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/article-detail/article-detail.module */ 9920)).then(m => m.ArticleDetailPageModule)
            },
            {
                path: 'search',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_base_base-page_ts-src_app_modules_layout_layout_module_ts-src_app_modules_sha-4fb023"), __webpack_require__.e("src_app_pages_search_search_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/search/search.module */ 8758)).then(m => m.SearchPageModule)
            },
            {
                path: 'search-result',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_base_base-page_ts-src_app_modules_layout_layout_module_ts-src_app_modules_sha-4fb023"), __webpack_require__.e("default-node_modules_class-transformer_esm2015_index_js-src_app_beans_response-bean_ts"), __webpack_require__.e("src_app_pages_search-result_search-result_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/search-result/search-result.module */ 1078)).then(m => m.SearchResultPageModule)
            },
            {
                path: 'submit-article',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_base_base-page_ts-src_app_modules_layout_layout_module_ts-src_app_modules_sha-4fb023"), __webpack_require__.e("default-node_modules_class-transformer_esm2015_index_js-src_app_beans_response-bean_ts"), __webpack_require__.e("src_app_pages_submit-article_submit-article_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/submit-article/submit-article.module */ 2390)).then(m => m.SubmitArticlePageModule)
            },
            {
                path: 'about',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_base_base-page_ts-src_app_modules_layout_layout_module_ts-src_app_modules_sha-4fb023"), __webpack_require__.e("src_app_pages_about_about_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/about/about.module */ 654)).then(m => m.AboutPageModule)
            },
        ],
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__.PreloadAllModules }),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AppRoutingModule);



/***/ }),

/***/ 2050:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_Project_Web_Angular_TrendBeat_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./app.component.html */ 5158);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 836);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _providers_screen_fit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./providers/screen-fit.service */ 6952);
/* harmony import */ var _services_runtime_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/runtime.service */ 759);
/* harmony import */ var _services_user_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/user-store.service */ 1536);
/* harmony import */ var _utils_icon_register__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/icon-register */ 820);
/* harmony import */ var _utils_screen_fit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/screen-fit */ 67);










let AppComponent = class AppComponent {
    constructor(platform, userStore, runtime, screenFitService) {
        this.platform = platform;
        this.userStore = userStore;
        this.runtime = runtime;
        this.screenFitService = screenFitService;
        this.initializeApp();
    }
    initializeApp() {
        this.platform.ready().then(() => {
            // default style
            // this.statusBar.styleDefault();
            if (this.platform.is("capacitor")) {
                // native device do some thing initial here
            }
            // force dark theme
            document.body.classList.toggle('dark', true);
            // register icons
            _utils_icon_register__WEBPACK_IMPORTED_MODULE_5__.IconRegister.register();
            // init screen fit
            _utils_screen_fit__WEBPACK_IMPORTED_MODULE_6__.ScreenFit.getInstance().init(this.screenFitService);
            // read user info caceh
            this.userStore
                .load()
                .then((user) => {
                if (user) {
                    this.runtime.cacheUser(user, false);
                }
            })
                .catch(() => { });
            this.runtime.cacheUserAgent();
            this.runtime.readToken();
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform },
    { type: _services_user_store_service__WEBPACK_IMPORTED_MODULE_4__.UserStoreService },
    { type: _services_runtime_service__WEBPACK_IMPORTED_MODULE_3__.RuntimeService },
    { type: _providers_screen_fit_service__WEBPACK_IMPORTED_MODULE_2__.ScreenFitService }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-root',
        template: _D_Project_Web_Angular_TrendBeat_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 4750:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic/storage-angular */ 2688);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/service-worker */ 7202);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 2050);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 3696);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var _services_interceptor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/interceptor.service */ 895);
/* harmony import */ var _services_rest_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/rest-request.service */ 8236);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/api.service */ 7118);
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/store.service */ 9652);
/* harmony import */ var _services_user_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/user-store.service */ 1536);
/* harmony import */ var _services_runtime_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/runtime.service */ 759);
/* harmony import */ var _services_event_bus_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/event-bus.service */ 5051);
/* harmony import */ var _guards_user_status_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./guards/user-status.guard */ 2853);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/environments/environment */ 8260);
/* harmony import */ var _providers_theme_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./providers/theme.service */ 7440);
/* harmony import */ var _providers_screen_fit_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./providers/screen-fit.service */ 6952);
/* harmony import */ var _modals_choose_media_type_choose_media_type_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modals/choose-media-type/choose-media-type.component */ 2794);
/* harmony import */ var _modals_submit_success_submit_success_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modals/submit-success/submit-success.component */ 7101);
























let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.NgModule)({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
            _modals_choose_media_type_choose_media_type_component__WEBPACK_IMPORTED_MODULE_13__.ChooseMediaTypeComponent,
            _modals_submit_success_submit_success_component__WEBPACK_IMPORTED_MODULE_14__.SubmitSuccessComponent,
        ],
        entryComponents: [
            _modals_choose_media_type_choose_media_type_component__WEBPACK_IMPORTED_MODULE_13__.ChooseMediaTypeComponent,
            _modals_submit_success_submit_success_component__WEBPACK_IMPORTED_MODULE_14__.SubmitSuccessComponent,
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonicModule.forRoot({ animated: false }),
            _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_19__.IonicStorageModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_21__.HttpClientModule,
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_22__.ServiceWorkerModule.register('ngsw-worker.js', {
                enabled: src_environments_environment__WEBPACK_IMPORTED_MODULE_10__.environment.production,
            })
        ],
        providers: [
            _services_rest_request_service__WEBPACK_IMPORTED_MODULE_3__.RestRequestService,
            _services_api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService,
            _services_store_service__WEBPACK_IMPORTED_MODULE_5__.StoreService,
            _services_user_store_service__WEBPACK_IMPORTED_MODULE_6__.UserStoreService,
            _services_runtime_service__WEBPACK_IMPORTED_MODULE_7__.RuntimeService,
            _services_event_bus_service__WEBPACK_IMPORTED_MODULE_8__.EventBusService,
            _guards_user_status_guard__WEBPACK_IMPORTED_MODULE_9__.UserStatusGuard,
            _providers_theme_service__WEBPACK_IMPORTED_MODULE_11__.ThemeService,
            _services_store_service__WEBPACK_IMPORTED_MODULE_5__.StoreService,
            _providers_screen_fit_service__WEBPACK_IMPORTED_MODULE_12__.ScreenFitService,
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_23__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonicRouteStrategy },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_21__.HTTP_INTERCEPTORS, useClass: _services_interceptor_service__WEBPACK_IMPORTED_MODULE_2__.InterceptorService, multi: true },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_16__.NO_ERRORS_SCHEMA]
    })
], AppModule);



/***/ }),

/***/ 3016:
/*!***************************************!*\
  !*** ./src/app/config/rest-config.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RestConfig": () => (/* binding */ RestConfig)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 8260);

class RestConfig {
}
RestConfig.BASE_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BASE_URL;
RestConfig.DEFAULT_PORT = 'none';
RestConfig.TIME_OUT = 30000;
RestConfig.ACCESS_TOKEN_INVALIDATE = 5001;
RestConfig.SYSTEM_UPGRADING = 5002;


/***/ }),

/***/ 2853:
/*!*********************************************!*\
  !*** ./src/app/guards/user-status.guard.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserStatusGuard": () => (/* binding */ UserStatusGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _services_runtime_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/runtime.service */ 759);




let UserStatusGuard = class UserStatusGuard {
    constructor(router, runtime) {
        this.router = router;
        this.runtime = runtime;
    }
    canActivate(next, state) {
        const token = this.runtime.token;
        if (token == null) {
            let path = next.url && next.url.length > 0 ? next.url[0].path : "";
            let params = Object.assign({}, next.queryParams);
            params.source = "/" + path;
            this.router.navigate(["/login"], {
                queryParams: params,
            });
            return false;
        }
        return true;
    }
};
UserStatusGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router },
    { type: _services_runtime_service__WEBPACK_IMPORTED_MODULE_0__.RuntimeService }
];
UserStatusGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], UserStatusGuard);



/***/ }),

/***/ 6769:
/*!*************************************************!*\
  !*** ./src/app/layout/index/index.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndexComponent": () => (/* binding */ IndexComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_Project_Web_Angular_TrendBeat_node_modules_ngtools_webpack_src_loaders_direct_resource_js_index_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./index.component.html */ 7234);
/* harmony import */ var _index_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.component.scss */ 7184);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var src_app_providers_screen_fit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/providers/screen-fit.service */ 6952);
/* harmony import */ var src_app_providers_theme_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/theme.service */ 7440);
/* harmony import */ var src_app_services_event_bus_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/event-bus.service */ 5051);








let IndexComponent = class IndexComponent {
    constructor(router, themeService, screenFitService, eventBus) {
        this.router = router;
        this.themeService = themeService;
        this.screenFitService = screenFitService;
        this.eventBus = eventBus;
        this.appHeaderElement = null;
        this.appContentElement = null;
        this.headerHeight = 0;
        this.contentHeight = 0;
        this.scrollConvertRatio = 1.0;
        this.backtopTrigger = false;
        this.previewScrollTop = 0;
        this.scrollTop = 0;
        this.headerScrollDirection = 'up';
        this.backtopTriggerDistance = (document.body.clientHeight || 600) / 2;
    }
    ngOnInit() {
        this.eventBus.addEventListener('status-content:success', () => {
            if (this.themeService.immersive) {
                this.analyzeHeaderElement().analyzeContentElement().calcElementSize();
            }
            else {
                this.analyzeHeaderElement().analyzeContentElement();
            }
        });
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd) {
                this.themeService.onScroll(0);
                if (this.themeService.immersive) {
                    this.analyzeHeaderElement()
                        .analyzeContentElement(true)
                        .calcElementSize()
                        .setHeaderTopOffset(0);
                }
                else {
                    this.analyzeHeaderElement().analyzeContentElement(true);
                }
            }
        });
    }
    onContentScroll(event) {
        this.scrollTop = event.detail.scrollTop;
        if (this.themeService.immersive) {
            this.analyzeHeaderElement().analyzeContentElement().scrollHeader();
            this.themeService.onScroll(this.scrollTop);
        }
        if (this.scrollTop >= this.backtopTriggerDistance) {
            this.backtopTrigger = true;
        }
        else {
            this.backtopTrigger = false;
        }
    }
    scrollHeader() {
        if (this.previewScrollTop == 0) {
            this.previewScrollTop = this.scrollTop;
        }
        const diff = this.scrollTop - this.previewScrollTop;
        if (diff != 0) {
            if (diff > 0) {
                this.headerScrollDirection = 'up';
            }
            else if (diff < 0) {
                this.headerScrollDirection = 'down';
            }
            if (this.appHeaderElement) {
                const topOffset = this.appHeaderElement.style.top
                    ? parseInt(this.appHeaderElement.style.top.replace('px', ''))
                    : 0;
                if (this.headerScrollDirection == 'up') {
                    this.setHeaderTopOffset(Math.max(topOffset - Math.floor(Math.abs(diff / this.scrollConvertRatio)), 0 - this.headerHeight));
                }
                else {
                    this.setHeaderTopOffset(Math.min(topOffset + Math.floor(Math.abs(diff / this.scrollConvertRatio)), 0));
                }
            }
        }
        this.previewScrollTop = this.scrollTop;
    }
    analyzeHeaderElement() {
        if (this.appHeaderElement == null) {
            setTimeout(() => {
                const elements = document.getElementsByTagName('ion-header');
                if (elements && elements.length > 0) {
                    this.appHeaderElement = elements[0];
                }
            }, 0);
        }
        return this;
    }
    analyzeContentElement(forceUpdate = false) {
        if (this.appContentElement == null || forceUpdate) {
            setTimeout(() => {
                const elements = document.getElementsByTagName('ion-content');
                if (elements && elements.length > 0) {
                    this.appContentElement = elements[elements.length - 1];
                }
            }, forceUpdate ? 100 : 0);
        }
        return this;
    }
    calcElementSize() {
        setTimeout(() => {
            if (this.appHeaderElement) {
                this.headerHeight = this.appHeaderElement.clientHeight;
            }
            if (this.appContentElement &&
                this.appContentElement.children &&
                this.appContentElement.children.length > 0) {
                this.contentHeight = this.appContentElement.children[0].clientHeight;
                const calcResult = (this.contentHeight * 2.0 - document.body.clientHeight) /
                    (document.body.clientHeight || 1080);
                this.scrollConvertRatio = Math.min(4, Math.max(1, calcResult));
            }
        }, 100);
        return this;
    }
    setHeaderTopOffset(offset) {
        if (this.appHeaderElement) {
            this.appHeaderElement.style.top = offset + 'px';
        }
    }
    scrollToTop() {
        if (this.appContentElement) {
            if (this.scrollTop >= this.backtopTriggerDistance) {
                // min duration is 500ms max duration is 1500ms and the other 500ms per 1920px
                const duration = Math.max(500, Math.min(Math.floor((this.scrollTop / 1920) * 500), 1500));
                this.appContentElement.scrollToTop(duration);
            }
        }
    }
    onClickBacktop() {
        this.analyzeContentElement().scrollToTop();
    }
};
IndexComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_providers_theme_service__WEBPACK_IMPORTED_MODULE_3__.ThemeService },
    { type: src_app_providers_screen_fit_service__WEBPACK_IMPORTED_MODULE_2__.ScreenFitService },
    { type: src_app_services_event_bus_service__WEBPACK_IMPORTED_MODULE_4__.EventBusService }
];
IndexComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-index',
        template: _D_Project_Web_Angular_TrendBeat_node_modules_ngtools_webpack_src_loaders_direct_resource_js_index_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_index_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], IndexComponent);



/***/ }),

/***/ 2794:
/*!*************************************************************************!*\
  !*** ./src/app/modals/choose-media-type/choose-media-type.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChooseMediaTypeComponent": () => (/* binding */ ChooseMediaTypeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_Project_Web_Angular_TrendBeat_node_modules_ngtools_webpack_src_loaders_direct_resource_js_choose_media_type_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./choose-media-type.component.html */ 1621);
/* harmony import */ var _choose_media_type_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./choose-media-type.component.scss */ 9973);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 8099);






let ChooseMediaTypeComponent = class ChooseMediaTypeComponent {
    constructor(router, modalController) {
        this.router = router;
        this.modalController = modalController;
    }
    ngOnInit() { }
    onClickMediaType(mediaType) {
        this.router.navigate(['/submit-article'], {
            queryParams: {
                media: mediaType,
            },
        });
        this.modalController.dismiss();
    }
    onClickCloseDialog() {
        this.modalController.dismiss();
    }
};
ChooseMediaTypeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController }
];
ChooseMediaTypeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-choose-media-type',
        template: _D_Project_Web_Angular_TrendBeat_node_modules_ngtools_webpack_src_loaders_direct_resource_js_choose_media_type_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_choose_media_type_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ChooseMediaTypeComponent);



/***/ }),

/***/ 4470:
/*!*****************************************************************!*\
  !*** ./src/app/modals/common-dialog/common-dialog.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonDialogComponent": () => (/* binding */ CommonDialogComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_Project_Web_Angular_TrendBeat_node_modules_ngtools_webpack_src_loaders_direct_resource_js_common_dialog_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./common-dialog.component.html */ 3240);
/* harmony import */ var _common_dialog_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common-dialog.component.scss */ 4843);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 8099);





let CommonDialogComponent = class CommonDialogComponent {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.title = "提示信息";
        this.message = "是否确认操作";
        this.confirmText = "确认";
    }
    ngOnInit() { }
    onClickClose() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.getTop();
            modal.dismiss();
        });
    }
    onClickConfirm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.getTop();
            modal.dismiss({
                result: {
                    code: 200,
                    data: "confirm"
                }
            });
        });
    }
};
CommonDialogComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController }
];
CommonDialogComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    message: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    confirmText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
CommonDialogComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: "app-common-dialog",
        template: _D_Project_Web_Angular_TrendBeat_node_modules_ngtools_webpack_src_loaders_direct_resource_js_common_dialog_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_common_dialog_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CommonDialogComponent);



/***/ }),

/***/ 7101:
/*!*******************************************************************!*\
  !*** ./src/app/modals/submit-success/submit-success.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubmitSuccessComponent": () => (/* binding */ SubmitSuccessComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_Project_Web_Angular_TrendBeat_node_modules_ngtools_webpack_src_loaders_direct_resource_js_submit_success_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./submit-success.component.html */ 9472);
/* harmony import */ var _submit_success_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./submit-success.component.scss */ 9754);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let SubmitSuccessComponent = class SubmitSuccessComponent {
    constructor() { }
    ngOnInit() { }
};
SubmitSuccessComponent.ctorParameters = () => [];
SubmitSuccessComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-submit-success',
        template: _D_Project_Web_Angular_TrendBeat_node_modules_ngtools_webpack_src_loaders_direct_resource_js_submit_success_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_submit_success_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SubmitSuccessComponent);



/***/ }),

/***/ 6952:
/*!*************************************************!*\
  !*** ./src/app/providers/screen-fit.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScreenFitService": () => (/* binding */ ScreenFitService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);


let ScreenFitService = class ScreenFitService {
    constructor() {
        this.screenCategory = 'desktop';
        this.isFitPad = false;
        this.isFitPhone = true;
    }
    setScreenCategory(screenCategory) {
        this.screenCategory = screenCategory;
    }
    setFitPad(isFitPad) {
        this.isFitPad = isFitPad;
    }
    setFitPhone(isFitPhone) {
        this.isFitPhone = isFitPhone;
    }
};
ScreenFitService.ctorParameters = () => [];
ScreenFitService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root',
    })
], ScreenFitService);



/***/ }),

/***/ 7440:
/*!********************************************!*\
  !*** ./src/app/providers/theme.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeService": () => (/* binding */ ThemeService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);


let ThemeService = class ThemeService {
    constructor() {
        this.immersive = false;
        this.backgroundColor = '#0b0c16';
        this.opacity = 0;
        this.opacityFullHeight = 300;
        this.withHeader = true;
        this.withFooter = true;
    }
    setBackground(backgroundColor) {
        this.backgroundColor = backgroundColor;
    }
    setOpacity(opacity) {
        this.opacity = opacity;
    }
    setOpacityFullHeight(opacityFullHeight) {
        this.opacityFullHeight = opacityFullHeight;
    }
    setWithHeader(withHeader) {
        this.withHeader = withHeader;
    }
    setWithFooter(withFooter) {
        this.withFooter = withFooter;
    }
    setImmersive(immersive) {
        this.immersive = immersive;
    }
    onScroll(offsetTop) {
        this.opacity = Math.min(1.0, offsetTop / this.opacityFullHeight);
    }
};
ThemeService.ctorParameters = () => [];
ThemeService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root',
    })
], ThemeService);



/***/ }),

/***/ 7118:
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_app_services_rest_request_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/rest-request.service */ 8236);



let ApiService = class ApiService {
    constructor(requestProvider) {
        this.requestProvider = requestProvider;
    }
    buildGetPromise(url, params, headers, coverBaseUrl, coverPort) {
        if (headers === null || headers === undefined) {
            headers = {};
        }
        return new Promise((resolve, reject) => {
            this.requestProvider
                .get({
                url: url,
                params: params,
            }, headers, coverBaseUrl, coverPort)
                .subscribe((data) => {
                resolve(data);
            }, (error) => {
                console.error(error);
                reject(error);
            });
        });
    }
    buildPostPromise(url, params, body, headers, coverBaseUrl, coverPort) {
        if (headers === null || headers === undefined) {
            headers = {};
        }
        return new Promise((resolve, reject) => {
            this.requestProvider
                .post({
                url: url,
                params: params,
                body: body,
            }, headers, coverBaseUrl, coverPort)
                .subscribe((data) => {
                resolve(data);
            }, (error) => {
                console.error(error);
                reject(error);
            });
        });
    }
    buildPutPromise(url, params, body, headers, coverBaseUrl, coverPort) {
        if (headers === null || headers === undefined) {
            headers = {};
        }
        return new Promise((resolve, reject) => {
            this.requestProvider
                .put({
                url: url,
                params: params,
                body: body,
            }, headers, coverBaseUrl, coverPort)
                .subscribe((data) => {
                resolve(data);
            }, (error) => {
                console.error(error);
                reject(error);
            });
        });
    }
    buildTestPromise(response) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(response);
            }, 2000);
        });
    }
    // 登录
    login(params = null) {
        return this.buildPostPromise('/user/login', params);
    }
    /**
     * 获取广告列表
     * @param params
     * @returns
     */
    fetchAdvertList(params = null) {
        return this.buildGetPromise('/advert/list', params);
    }
    /**
     * 获取类型列表
     * @param params
     * @returns
     */
    fetchCategoryList(params = null) {
        return this.buildGetPromise('/map/categories', params);
    }
    /**
     * 获取文章列表
     * @param params
     * @returns
     */
    fetchArticleList(params = null) {
        return this.buildGetPromise('/article/list', params);
    }
    /**
     * 获取文章详情
     * @param params
     * @returns
     */
    fetchArticleData(params = null) {
        return this.buildGetPromise('/article/detail', params);
    }
    /**
     * 提交文章
     * @param params
     * @returns
     */
    submitArticle(params = null) {
        return this.buildPostPromise('/article/add', params);
    }
};
ApiService.ctorParameters = () => [
    { type: src_app_services_rest_request_service__WEBPACK_IMPORTED_MODULE_0__.RestRequestService }
];
ApiService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root',
    })
], ApiService);



/***/ }),

/***/ 5051:
/*!***********************************************!*\
  !*** ./src/app/services/event-bus.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventBusService": () => (/* binding */ EventBusService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! eventemitter3 */ 4851);
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(eventemitter3__WEBPACK_IMPORTED_MODULE_0__);



let EventBusService = class EventBusService {
    constructor() {
        this.eventEmitter = new eventemitter3__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    addEventListener(key, listener) {
        this.eventEmitter.on(key, listener);
    }
    removeEventListener(key, listener) {
        this.eventEmitter.removeListener(key, listener);
    }
    emmitEvent(key, ...args) {
        this.eventEmitter.emit(key, args);
    }
};
EventBusService.ctorParameters = () => [];
EventBusService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: "root",
    })
], EventBusService);



/***/ }),

/***/ 895:
/*!*************************************************!*\
  !*** ./src/app/services/interceptor.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InterceptorService": () => (/* binding */ InterceptorService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 3766);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 4058);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 5029);
/* harmony import */ var _runtime_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./runtime.service */ 759);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _modals_common_dialog_common_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modals/common-dialog/common-dialog.component */ 4470);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _config_rest_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/rest-config */ 3016);
/* harmony import */ var _request_cancel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./request-cancel.service */ 8370);












let InterceptorService = class InterceptorService {
    constructor(runtime, modalCtrl, router, requestCancelService) {
        this.runtime = runtime;
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.requestCancelService = requestCancelService;
        this.modalStatus = false;
        router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivationEnd) {
                this.requestCancelService.cancelPendingRequests();
            }
        });
    }
    intercept(request, next) {
        if (this.runtime.token) {
            request = request.clone({
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({ Authorization: this.runtime.token }),
            });
        }
        else {
            const url = request.url;
            if (url.indexOf('account/inviter') != -1) {
                request = request.clone({
                    url: url.replace('account/inviter', 'account/inviter/default'),
                });
            }
        }
        return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.requestCancelService.onCancelPendingRequests()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)((event) => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpResponse) {
                if (event.status >= 500) {
                    // server internal error
                }
                else if (event.status == 200) {
                    const response = event.body;
                    if (response.code == _config_rest_config__WEBPACK_IMPORTED_MODULE_2__.RestConfig.ACCESS_TOKEN_INVALIDATE) {
                        // token invalidate
                        setTimeout(() => {
                            if (this.modalStatus) {
                                // only allow just one modal showing
                                return;
                            }
                            this.modalCtrl
                                .create({
                                component: _modals_common_dialog_common_dialog_component__WEBPACK_IMPORTED_MODULE_1__.CommonDialogComponent,
                                cssClass: 'common-dialog-modal',
                                componentProps: {
                                    title: '提示信息',
                                    message: '您的账号在其他设备登录或过期，请重新登录',
                                    confirmText: '立即登录',
                                },
                            })
                                .then((modal) => {
                                modal.onDidDismiss().then(({ data }) => {
                                    this.modalStatus = false;
                                    if (data && data.result.code == 200) {
                                        this.runtime.clearCache();
                                        setTimeout(() => {
                                            this.router.navigate(['/login']);
                                        }, 300);
                                    }
                                });
                                modal.present();
                                this.modalStatus = true;
                            });
                        }, 300);
                    }
                    else if (response.code == _config_rest_config__WEBPACK_IMPORTED_MODULE_2__.RestConfig.SYSTEM_UPGRADING) {
                        setTimeout(() => {
                            this.router.navigate(['/system-upgrading']);
                        }, 300);
                    }
                }
            }
        }, (error) => {
            if (error instanceof rxjs__WEBPACK_IMPORTED_MODULE_8__.TimeoutError) {
                console.log('httpclient connection timeout');
            }
            else if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpErrorResponse) {
                console.log('network connection error');
            }
        }));
    }
};
InterceptorService.ctorParameters = () => [
    { type: _runtime_service__WEBPACK_IMPORTED_MODULE_0__.RuntimeService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _request_cancel_service__WEBPACK_IMPORTED_MODULE_3__.RequestCancelService }
];
InterceptorService = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Injectable)({
        providedIn: 'root',
    })
], InterceptorService);



/***/ }),

/***/ 8370:
/*!****************************************************!*\
  !*** ./src/app/services/request-cancel.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestCancelService": () => (/* binding */ RequestCancelService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4008);



let RequestCancelService = class RequestCancelService {
    constructor() {
        this.pendingHttpRequests = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
    cancelPendingRequests() {
        this.pendingHttpRequests.next();
    }
    onCancelPendingRequests() {
        return this.pendingHttpRequests.asObservable();
    }
};
RequestCancelService.ctorParameters = () => [];
RequestCancelService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root',
    })
], RequestCancelService);



/***/ }),

/***/ 8236:
/*!**************************************************!*\
  !*** ./src/app/services/rest-request.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RestRequestService": () => (/* binding */ RestRequestService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var _config_rest_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/rest-config */ 3016);




let RestRequestService = class RestRequestService {
    constructor(http) {
        this.http = http;
        this.BASE_URL = _config_rest_config__WEBPACK_IMPORTED_MODULE_0__.RestConfig.BASE_URL;
        this.PORT = _config_rest_config__WEBPACK_IMPORTED_MODULE_0__.RestConfig.DEFAULT_PORT;
    }
    serialize(params) {
        let result = [];
        for (let key in params) {
            if (params.hasOwnProperty(key)) {
                result.push(encodeURIComponent(key) + "=" + encodeURIComponent(params[key]));
            }
        }
        return result.join("&");
    }
    get(request, headers, coverBaseUrl, coverPort) {
        const mBaseUrl = coverBaseUrl ? coverBaseUrl : this.BASE_URL;
        const mPort = coverPort ? coverPort : this.PORT;
        let urlParams = "";
        if (request.params) {
            urlParams = "?" + this.serialize(request.params);
        }
        const mHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders(headers);
        const fullUrl = mBaseUrl + (mPort == "none" ? "" : ":" + mPort) + request.url + urlParams;
        return headers
            ? this.http.get(fullUrl, { headers: mHeaders })
            : this.http.get(fullUrl);
    }
    post(request, headers, coverBaseUrl, coverPort) {
        const mBaseUrl = coverBaseUrl ? coverBaseUrl : this.BASE_URL;
        const mPort = coverPort ? coverPort : this.PORT;
        const mHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders(headers);
        const fullUrl = mBaseUrl + (mPort == "none" ? "" : ":" + mPort) + request.url;
        return headers
            ? this.http.post(fullUrl, request.body, {
                headers: mHeaders,
                params: request.params,
            })
            : this.http.post(fullUrl, request.body, { params: request.params });
    }
    put(request, headers, coverBaseUrl, coverPort) {
        const mBaseUrl = coverBaseUrl ? coverBaseUrl : this.BASE_URL;
        const mPort = coverPort ? coverPort : this.PORT;
        const mHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders(headers);
        const fullUrl = mBaseUrl + (mPort == "none" ? "" : ":" + mPort) + request.url;
        return headers
            ? this.http.put(fullUrl, request.body, {
                headers: mHeaders,
                params: request.params,
            })
            : this.http.put(fullUrl, request.body, { params: request.params });
    }
};
RestRequestService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
RestRequestService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: "root",
    })
], RestRequestService);



/***/ }),

/***/ 759:
/*!*********************************************!*\
  !*** ./src/app/services/runtime.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuntimeService": () => (/* binding */ RuntimeService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _user_store_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-store.service */ 1536);
/* harmony import */ var _store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store.service */ 9652);




let RuntimeService = class RuntimeService {
    constructor(userStore, storage) {
        this.userStore = userStore;
        this.storage = storage;
        this.user = null;
        this.token = "";
        this.userAgent = "";
    }
    cacheUser(user, persistentStorage = true) {
        this.user = user;
        if (persistentStorage) {
            this.userStore.save(user);
        }
    }
    clearCache() {
        this.user = null;
        this.userStore.clear();
        this.token = null;
        this.storage.remove("trend-beat-access-token");
    }
    cacheUserAgent() {
        this.userAgent = navigator.userAgent.toUpperCase();
    }
    isWechatBrowser() {
        return this.userAgent && this.userAgent.indexOf("MICROMESSENGER") != -1;
    }
    isAndroidBrowser() {
        return this.userAgent.indexOf('ADR') > -1 || this.userAgent.indexOf('ANDROID') > -1;
    }
    isIosBrowser() {
        return !!this.userAgent.match(/\(I[^;]+;( U;)? CPU.+MAC OS X/);
    }
    cacheToken(token) {
        this.token = token;
        this.storage.set("trend-beat-access-token", token);
    }
    readToken() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            let token = yield this.storage.get("trend-beat-access-token");
            this.token = token;
        });
    }
};
RuntimeService.ctorParameters = () => [
    { type: _user_store_service__WEBPACK_IMPORTED_MODULE_0__.UserStoreService },
    { type: _store_service__WEBPACK_IMPORTED_MODULE_1__.StoreService }
];
RuntimeService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], RuntimeService);



/***/ }),

/***/ 9652:
/*!*******************************************!*\
  !*** ./src/app/services/store.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoreService": () => (/* binding */ StoreService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage-angular */ 7897);
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! localforage */ 5601);
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(localforage__WEBPACK_IMPORTED_MODULE_0__);
var StoreService_1;




let StoreService = StoreService_1 = class StoreService {
    constructor(ionicStorage) {
        this.ionicStorage = ionicStorage;
        this.isReady = false;
        this.storages = [];
        this.storages.length = 0;
        StoreService_1.DRIVERS.forEach((driver) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const storage = localforage__WEBPACK_IMPORTED_MODULE_0__.createInstance({
                    driver: localforage__WEBPACK_IMPORTED_MODULE_0__.LOCALSTORAGE
                });
                this.storages.push(storage);
            }
            catch (error) {
                console.error(error);
            }
        }));
    }
    loadStoreItem(key, defaultValue) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let item = defaultValue ? defaultValue : {};
            try {
                const value = yield this.get(key);
                const object = JSON.parse(value);
                item = object ? object : {};
                console.log(`[StoreService] '${key}' loaded: ` + JSON.stringify(item));
            }
            catch (error) {
                console.error(`[StoreService] Loading '${key}' failed: ` + error);
            }
            return item;
        });
    }
    setStoreItemData(itemKey, dataKey, dataValue) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let item = {};
            try {
                item = yield this.loadStoreItem(itemKey);
                item[dataKey] = dataValue;
                yield this.set(itemKey, JSON.stringify(item));
                console.log(`[StoreService] '${itemKey}' saved: ` + JSON.stringify(item));
            }
            catch (error) {
                console.error(`[StoreService] Saving '${itemKey}' failed: ` + error);
            }
            return item;
        });
    }
    ready() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            if (this.isReady) {
                return this;
            }
            yield this.ionicStorage.create();
            for (let i = 0; i < this.storages.length; i++) {
                const storage = this.storages[i];
                try {
                    if (storage.driver() !== StoreService_1.DRIVERS[i]) {
                        yield storage.setDriver(StoreService_1.DRIVERS[i]);
                    }
                }
                catch (error) {
                    console.error(`[StoreService] set driver for ${StoreService_1.DRIVERS[i]} failed: ` + error);
                }
            }
            this.isReady = true;
            return this;
        });
    }
    get(key) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let exception = null;
            let result = null;
            try {
                yield this.ready();
                result = yield this.ionicStorage.get(key);
                if (!this.isEmpty(result)) {
                    console.log('[StoreService] retrived from Storage: ' + result);
                    return result;
                }
            }
            catch (error) {
                console.error('[StoreService] error retriving from Storage: ' + error);
                exception = error;
            }
            for (let i = 0; i < this.storages.length; i++) {
                const storage = this.storages[i];
                try {
                    result = yield storage.getItem(key);
                    if (!this.isEmpty(result)) {
                        console.log(`[StoreService] retrived from ${storage.driver()}: ` + result);
                        return result;
                    }
                }
                catch (error) {
                    console.error(`[StoreService] error retriving from ${storage.driver()}: ` + error);
                    exception = error;
                }
            }
            if (result !== null) {
                return result;
            }
            if (exception !== null) {
                throw exception;
            }
        });
    }
    set(key, value) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let exception = null;
            let result = null;
            try {
                yield this.ready();
                result = yield this.ionicStorage.set(key, value);
                console.log(`[StoreService] {${key}:${value}} set to ${this.ionicStorage.driver}`);
            }
            catch (error) {
                console.error('[StoreService] error setting Storage: ' + error);
                exception = error;
            }
            for (let i = 0; i < this.storages.length; i++) {
                const storage = this.storages[i];
                try {
                    result = yield storage.setItem(key, value);
                    console.log(`[StoreService] {${key}:${value}} set to ${storage.driver()}`);
                }
                catch (error) {
                    console.error(`[StoreService] error setting ${storage.driver()}: ` + error);
                    exception = error;
                }
            }
            if (result != null) {
                return result;
            }
            if (exception != null) {
                throw exception;
            }
        });
    }
    remove(key) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let exception = null;
            let result = null;
            try {
                yield this.ready();
                result = yield this.ionicStorage.remove(key);
            }
            catch (error) {
                console.error('[StoreService] error removing from Storage: ' + error);
                exception = error;
            }
            for (let i = 0; i < this.storages.length; i++) {
                const storage = this.storages[i];
                try {
                    result = yield storage.removeItem(key);
                }
                catch (error) {
                    console.error(`[StoreService] error removing from ${storage.driver()}: ` + error);
                    exception = error;
                }
            }
            if (exception != null) {
                throw exception;
            }
            return result;
        });
    }
    isEmpty(argument) {
        return argument === null || argument === undefined || (argument.hasOwnProperty('length') && argument.length < 1);
    }
};
StoreService.DRIVERS = [
    localforage__WEBPACK_IMPORTED_MODULE_0__.INDEXEDDB,
    localforage__WEBPACK_IMPORTED_MODULE_0__.LOCALSTORAGE
];
StoreService.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_2__.Storage }
];
StoreService = StoreService_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], StoreService);



/***/ }),

/***/ 1536:
/*!************************************************!*\
  !*** ./src/app/services/user-store.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserStoreService": () => (/* binding */ UserStoreService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _store_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store.service */ 9652);
var UserStoreService_1;



let UserStoreService = UserStoreService_1 = class UserStoreService {
    constructor(store) {
        this.store = store;
    }
    load() {
        return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const value = yield this.store.get(UserStoreService_1.STORAGE_KEY);
                console.log('[UserStoreService] load() complete:', value);
                if (!value) {
                    resolve(null);
                }
                else {
                    const user = JSON.parse(value);
                    resolve(user);
                }
            }
            catch (error) {
                console.error('[UserStoreService] load() error:', error);
                reject(error);
            }
        }));
    }
    save(user) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const value = yield this.store.set(UserStoreService_1.STORAGE_KEY, JSON.stringify(user));
                console.log('[UserStoreService] save() complete', value);
            }
            catch (error) {
                console.error('[UserStoreService] save() error:', error);
            }
        });
    }
    clear() {
        this.store
            .remove(UserStoreService_1.STORAGE_KEY)
            .then(value => {
            console.log('[UserStoreService] clear() complete');
        })
            .catch(error => {
            console.log('[UserStoreService] clear() error:', error);
        });
    }
};
UserStoreService.STORAGE_KEY = 'trend-beat:user';
UserStoreService.ctorParameters = () => [
    { type: _store_service__WEBPACK_IMPORTED_MODULE_0__.StoreService }
];
UserStoreService = UserStoreService_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], UserStoreService);



/***/ }),

/***/ 820:
/*!****************************************!*\
  !*** ./src/app/utils/icon-register.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconRegister": () => (/* binding */ IconRegister)
/* harmony export */ });
/* harmony import */ var ionicons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ionicons */ 5644);

class IconRegister {
    static register() {
        (0,ionicons__WEBPACK_IMPORTED_MODULE_0__.a)({
            'notification-phone': 'assets/icon/notification_phone.svg',
            'share-line': 'assets/icon/share_line.svg',
            'share-02': 'assets/icon/share_02.svg',
            'grid-small': 'assets/icon/grid_small.svg',
            'ali-pay': 'assets/icon/ali_pay.svg',
            'wx-pay': 'assets/icon/wx_pay.svg',
            twitter: 'assets/icon/twitter.svg',
            facebook: 'assets/icon/facebook.svg',
            discord: 'assets/icon/discord.svg',
            github: 'assets/icon/github.svg',
            linkin: 'assets/icon/linkin.svg',
            reddit: 'assets/icon/reddit.svg',
            telegram: 'assets/icon/telegram.svg',
            twitch: 'assets/icon/twitch.svg',
            youtube: 'assets/icon/youtube.svg',
            medium: 'assets/icon/medium.svg',
            weibo: 'assets/icon/weibo.svg',
            qq: 'assets/icon/qq.svg',
            wechat: 'assets/icon/wechat.svg',
            link: 'assets/icon/link.svg',
            android: 'assets/icon/android.svg',
            ios: 'assets/icon/ios.svg',
            praise: 'assets/icon/praise.svg',
            quote: 'assets/icon/quote.svg',
            reply: 'assets/icon/reply.svg',
            star: 'assets/icon/star.svg',
            share: 'assets/icon/share.svg',
            search: 'assets/icon/search.svg',
            add: 'assets/icon/add.svg',
            more: 'assets/icon/more.svg',
            refresh: 'assets/icon/refresh.svg',
            notification: 'assets/icon/notification.svg',
            unview: 'assets/icon/unview.svg',
            view: 'assets/icon/view.svg',
            emoji: 'assets/icon/emoji.svg',
            video: 'assets/icon/video.svg',
            image: 'assets/icon/image.svg',
            up: 'assets/icon/up.svg',
            down: 'assets/icon/down.svg',
            grid: 'assets/icon/grid.svg',
            binance: 'assets/icon/binance.svg',
            ethere: 'assets/icon/ethereum.svg',
            tron: 'assets/icon/tron.svg',
            img: 'assets/icon/img.svg',
            web: 'assets/icon/web.svg',
            instagram: 'assets/icon/instagram.svg',
            email: 'assets/icon/email.svg',
        });
    }
}


/***/ }),

/***/ 67:
/*!*************************************!*\
  !*** ./src/app/utils/screen-fit.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScreenFit": () => (/* binding */ ScreenFit)
/* harmony export */ });
class ScreenFit {
    constructor() { }
    static getInstance() {
        if (ScreenFit.instance == null) {
            ScreenFit.instance = new ScreenFit();
        }
        return ScreenFit.instance;
    }
    init(screenFitService) {
        const screenWidth = document.documentElement.clientWidth ||
            document.body.clientWidth ||
            window.screen.width;
        screenFitService.setScreenCategory(screenWidth >= 1200 ||
            (!screenFitService.isFitPad && !screenFitService.isFitPhone)
            ? 'desktop'
            : screenWidth >= 768 && screenFitService.isFitPad
                ? 'pad'
                : 'phone');
        window.onresize = () => {
            const screenWidth = document.documentElement.clientWidth ||
                document.body.clientWidth ||
                window.screen.width;
            screenFitService.setScreenCategory(screenWidth >= 1200 ||
                (!screenFitService.isFitPad && !screenFitService.isFitPhone)
                ? 'desktop'
                : screenWidth >= 768 && screenFitService.isFitPad
                    ? 'pad'
                    : 'phone');
        };
    }
}
ScreenFit.instance = null;


/***/ }),

/***/ 8260:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    isMock: true,
    // environment variables
    BASE_URL: "https://api.byd.space"
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

/***/ 271:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 2577);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 4750);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 8260);
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reflect-metadata */ 9029);
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reflect_metadata__WEBPACK_IMPORTED_MODULE_2__);




// class-transformer dependency

if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_4__.platformBrowserDynamic)()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch((error) => console.log(error));
if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.isMock) {
    __webpack_require__.e(/*! import() */ "src_app_mock_mock_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./app/mock/mock */ 6763)).then(() => {
        console.log('import mock data success');
    });
}


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		3477,
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		7196,
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		8081,
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		5017,
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		9721,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		9216,
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		6612,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		2694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		2938,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		1379,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		7552,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		7218,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		7479,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		4134,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		1439,
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		6397,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		3296,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		2413,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		9411,
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		9133,
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		9003,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		6065,
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		6991,
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		2947,
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		5919,
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		3109,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		9459,
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		301,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3799,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		2140,
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		6197,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		1975,
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		8387,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		8659,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		6404,
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		5253,
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		2619,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		2871,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		7668,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		5342,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		174,
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		6185,
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		7337,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		4833,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		9468,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5705,
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		7463,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 5158:
/*!***************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/app.component.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\r\n  <ion-router-outlet></ion-router-outlet>\r\n</ion-app>\r\n");

/***/ }),

/***/ 7234:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/layout/index/index.component.html ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header *ngIf=\"themeService.withHeader\">\r\n  <app-common-header></app-common-header>\r\n</ion-header>\r\n\r\n<ion-content\r\n  [fullscreen]=\"themeService.immersive\"\r\n  [scrollEvents]=\"true\"\r\n  (ionScroll)=\"onContentScroll($event)\"\r\n>\r\n  <ion-router-outlet></ion-router-outlet>\r\n\r\n  <ion-fab vertical=\"center\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button\r\n      [ngClass]=\"{ active: backtopTrigger }\"\r\n      (click)=\"onClickBacktop()\"\r\n    >\r\n      <ion-icon name=\"arrow-up-outline\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>\r\n");

/***/ }),

/***/ 1621:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/modals/choose-media-type/choose-media-type.component.html ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"dialog-wrapper\">\n  <div class=\"dialog-content\">\n    <div class=\"dialog-title\">\n      选择您的投稿类型\n    </div>\n    <div class=\"dialog-body\">\n      <ul>\n        <li>\n          <div class=\"media-type-item\" (click)=\"onClickMediaType('picture')\">\n            <ion-icon name=\"image\"></ion-icon>\n            <span>图片资讯</span>\n          </div>\n        </li>\n\n        <li>\n          <div class=\"media-type-item\" (click)=\"onClickMediaType('video')\">\n            <ion-icon name=\"video\"></ion-icon>\n            <span>视频资讯</span>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"close-button\" (click)=\"onClickCloseDialog()\">\n    <ion-icon name=\"close-outline\"></ion-icon>\n  </div>\n</div>\n");

/***/ }),

/***/ 3240:
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/modals/common-dialog/common-dialog.component.html ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"content-wrapper\">\r\n  <div class=\"header-wrapper\">\r\n    <h3 class=\"title\">{{ title }}</h3>\r\n    <ion-icon class=\"close-button\" name=\"close\" (click)=\"onClickClose()\"></ion-icon>\r\n  </div>\r\n  <div class=\"body-wrapper\">\r\n    <div class=\"text-wrapper\">\r\n      {{ message }}\r\n    </div>\r\n    <div class=\"button-wrapper\">\r\n      <ion-button class=\"gradient\" (click)=\"onClickConfirm()\" expand=\"full\" fill=\"solid\" shape=\"round\">\r\n        {{ confirmText }}\r\n      </ion-button>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ 9472:
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/modals/submit-success/submit-success.component.html ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<p>\n  submit-success works!\n</p>\n");

/***/ }),

/***/ 3120:
/*!***************************************************************************************!*\
  !*** ./node_modules/ionicons/dist/esm-es5/ lazy ^\.\/.*\.entry\.js$ namespace object ***!
  \***************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-icon.entry.js": [
		525,
		"node_modules_ionicons_dist_esm-es5_ion-icon_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 3120;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 836:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 7184:
/*!***************************************************!*\
  !*** ./src/app/layout/index/index.component.scss ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-content ion-fab {\n  right: 30px;\n}\nion-content ion-fab ion-fab-button {\n  transition: all 0.5s;\n  opacity: 0;\n  pointer-events: none;\n}\nion-content ion-fab ion-fab-button.active {\n  opacity: 1;\n  pointer-events: all;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsV0FBQTtBQUFKO0FBRUk7RUFDRSxvQkFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtBQUFOO0FBRU07RUFDRSxVQUFBO0VBQ0EsbUJBQUE7QUFBUiIsImZpbGUiOiJpbmRleC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICBpb24tZmFiIHtcclxuICAgIHJpZ2h0OiAzMHB4O1xyXG5cclxuICAgIGlvbi1mYWItYnV0dG9uIHtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG5cclxuICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgIG9wYWNpdHk6IDEuMDtcclxuICAgICAgICBwb2ludGVyLWV2ZW50czogYWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59Il19 */";

/***/ }),

/***/ 9973:
/*!***************************************************************************!*\
  !*** ./src/app/modals/choose-media-type/choose-media-type.component.scss ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "div.dialog-wrapper {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  padding: 20px;\n  box-sizing: border-box;\n  width: 700px;\n  height: 420px;\n  background-color: #ffffff;\n}\ndiv.dialog-wrapper > div.dialog-content {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n}\ndiv.dialog-wrapper > div.dialog-content > div.dialog-title {\n  font-size: 42px;\n  font-weight: bold;\n}\ndiv.dialog-wrapper > div.dialog-content > div.dialog-body {\n  margin-top: 20px;\n}\ndiv.dialog-wrapper > div.dialog-content > div.dialog-body > ul {\n  display: flex;\n  align-items: center;\n}\ndiv.dialog-wrapper > div.dialog-content > div.dialog-body > ul > li {\n  width: 220px;\n  height: 150px;\n  border: 1px solid #1e1e1e;\n  cursor: pointer;\n}\ndiv.dialog-wrapper > div.dialog-content > div.dialog-body > ul > li:hover {\n  border-color: #5433ff;\n}\ndiv.dialog-wrapper > div.dialog-content > div.dialog-body > ul > li:hover > div.media-type-item > ion-icon,\ndiv.dialog-wrapper > div.dialog-content > div.dialog-body > ul > li:hover > div.media-type-item > span {\n  color: #5433ff;\n}\ndiv.dialog-wrapper > div.dialog-content > div.dialog-body > ul > li:not(:first-of-type) {\n  margin-left: 20px;\n}\ndiv.dialog-wrapper > div.dialog-content > div.dialog-body > ul > li > div.media-type-item {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n}\ndiv.dialog-wrapper > div.dialog-content > div.dialog-body > ul > li > div.media-type-item > ion-icon {\n  display: block;\n  color: #1e1e1e;\n  font-size: 32px;\n}\ndiv.dialog-wrapper > div.dialog-content > div.dialog-body > ul > li > div.media-type-item > span {\n  display: block;\n  font-size: 16px;\n  margin-top: 20px;\n}\ndiv.dialog-wrapper > div.close-button {\n  position: absolute;\n  right: 20px;\n  top: 20px;\n  cursor: pointer;\n}\ndiv.dialog-wrapper > div.close-button:hover > ion-icon {\n  color: #5433ff;\n}\ndiv.dialog-wrapper > div.close-button > ion-icon {\n  font-size: 24px;\n  color: #1e1e1e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNob29zZS1tZWRpYS10eXBlLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcdGhlbWVcXG1peGluLnNjc3MiLCIuLlxcLi5cXC4uXFx0aGVtZVxcdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxrQkFBQTtFQzJFQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFRDNFQSxzQkFBQTtFQUNBLGFFcUVlO0VGcEVmLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkU4Q2dCO0FGOUNsQjtBQUVFO0VDa0VBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VEbEVFLHNCQUFBO0VBQ0EsV0FBQTtBQUVKO0FBQUk7RUFDRSxlRWdGa0I7RUYvRWxCLGlCQUFBO0FBRU47QUFDSTtFQUNFLGdCRXlEWTtBRnhEbEI7QUFDTTtFQzJESixhQUFBO0VBQ0EsbUJBQUE7QUR6REY7QUFBUTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBRVY7QUFBVTtFQUNFLHFCRW5DRjtBRnFDVjtBQUNjOztFQUVFLGNFeENOO0FGeUNWO0FBSVU7RUFDRSxpQkVrQ007QUZwQ2xCO0FBS1U7RUM2QlIsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUQ3QlUsc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQURaO0FBR1k7RUFDRSxjQUFBO0VBQ0EsY0VLRjtFRkpFLGVBQUE7QUFEZDtBQUlZO0VBQ0UsY0FBQTtFQUNBLGVFK0JLO0VGOUJMLGdCRWdCSTtBRmxCbEI7QUFVRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBUko7QUFXTTtFQUNFLGNFaEZFO0FGdUVWO0FBYUk7RUFDRSxlQUFBO0VBQ0EsY0V4Qk07QUZhWiIsImZpbGUiOiJjaG9vc2UtbWVkaWEtdHlwZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ2YXJpYWJsZXMuc2Nzc1wiO1xyXG5AaW1wb3J0IFwibWl4aW4uc2Nzc1wiO1xyXG5cclxuZGl2LmRpYWxvZy13cmFwcGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgQGluY2x1ZGUgYWxpZ24tY2VudGVyKCk7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nOiAkcHJpbWFyeVBhZGRpbmc7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB3aWR0aDogNzAwcHg7XHJcbiAgaGVpZ2h0OiA0MjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZENvbG9yO1xyXG5cclxuICA+IGRpdi5kaWFsb2ctY29udGVudCB7XHJcbiAgICBAaW5jbHVkZSBhbGlnbi1jZW50ZXIoKTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICA+IGRpdi5kaWFsb2ctdGl0bGUge1xyXG4gICAgICBmb250LXNpemU6ICRhcHBGb250U2l6ZUxhcmdlVGl0bGU7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG5cclxuICAgID4gZGl2LmRpYWxvZy1ib2R5IHtcclxuICAgICAgbWFyZ2luLXRvcDogJHNlY29uZGFyeU1hcmdpbjtcclxuXHJcbiAgICAgID4gdWwge1xyXG4gICAgICAgIEBpbmNsdWRlIGFsaWduLWNlbnRlci12ZXJ0aWNhbCgpO1xyXG5cclxuICAgICAgICA+IGxpIHtcclxuICAgICAgICAgIHdpZHRoOiAyMjBweDtcclxuICAgICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkdGV4dENvbG9yO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICRwcmltYXJ5O1xyXG5cclxuICAgICAgICAgICAgPiBkaXYubWVkaWEtdHlwZS1pdGVtIHtcclxuICAgICAgICAgICAgICA+IGlvbi1pY29uLFxyXG4gICAgICAgICAgICAgID4gc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHByaW1hcnk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJjpub3QoOmZpcnN0LW9mLXR5cGUpIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6ICRzZWNvbmRhcnlNYXJnaW47XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgPiBkaXYubWVkaWEtdHlwZS1pdGVtIHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgYWxpZ24tY2VudGVyKCk7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICA+IGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICBjb2xvcjogJHRleHRDb2xvcjtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgID4gc3BhbiB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAkYXBwRm9udFNpemVMYXJnZTtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAkc2Vjb25kYXJ5TWFyZ2luO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICA+IGRpdi5jbG9zZS1idXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgICB0b3A6IDIwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgID4gaW9uLWljb24ge1xyXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgID4gaW9uLWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgIGNvbG9yOiAkdGV4dENvbG9yO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJAaW1wb3J0IFwidmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbkBtaXhpbiBzY3JvbGxiYXIoJHRyYWNrQ29sb3I6ICN7JGJhY2tncm91bmRDb2xvcn0sICR0aHVtYkNvbG9yOiAjeyRwcmltYXJ5fSkge1xyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiA4cHg7XHJcbiAgfVxyXG5cclxuICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdHJhY2tDb2xvcjtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMmVtO1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAyZW07XHJcbiAgfVxyXG5cclxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGh1bWJDb2xvcjtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMmVtO1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAyZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gbGluZS1jbGFtcCgkbGluZXMpIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIC13ZWJraXQtbGluZS1jbGFtcDogJGxpbmVzO1xyXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbn1cclxuXHJcbkBtaXhpbiBjbGVhcmZpeCB7XHJcbiAgJjphZnRlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHNpbmdsZS1saW5lKCkge1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG5cclxuQG1peGluIHRyaWFuZ2xlKCR3aWR0aCwgJGhlaWdodCwgJGNvbG9yLCAkZGlyZWN0aW9uKSB7XHJcbiAgJHdpZHRoOiAkd2lkdGgvMjtcclxuICAkY29sb3ItYm9yZGVyLXN0eWxlOiAkaGVpZ2h0IHNvbGlkICRjb2xvcjtcclxuICAkdHJhbnNwYXJlbnQtYm9yZGVyLXN0eWxlOiAkd2lkdGggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIHdpZHRoOiAwO1xyXG5cclxuICBAaWYgJGRpcmVjdGlvbiA9PSB1cCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAkY29sb3ItYm9yZGVyLXN0eWxlO1xyXG4gICAgYm9yZGVyLWxlZnQ6ICR0cmFuc3BhcmVudC1ib3JkZXItc3R5bGU7XHJcbiAgICBib3JkZXItcmlnaHQ6ICR0cmFuc3BhcmVudC1ib3JkZXItc3R5bGU7XHJcbiAgfVxyXG5cclxuICBAZWxzZSBpZiAkZGlyZWN0aW9uID09IHJpZ2h0IHtcclxuICAgIGJvcmRlci1sZWZ0OiAkY29sb3ItYm9yZGVyLXN0eWxlO1xyXG4gICAgYm9yZGVyLXRvcDogJHRyYW5zcGFyZW50LWJvcmRlci1zdHlsZTtcclxuICAgIGJvcmRlci1ib3R0b206ICR0cmFuc3BhcmVudC1ib3JkZXItc3R5bGU7XHJcbiAgfVxyXG5cclxuICBAZWxzZSBpZiAkZGlyZWN0aW9uID09IGRvd24ge1xyXG4gICAgYm9yZGVyLXRvcDogJGNvbG9yLWJvcmRlci1zdHlsZTtcclxuICAgIGJvcmRlci1sZWZ0OiAkdHJhbnNwYXJlbnQtYm9yZGVyLXN0eWxlO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAkdHJhbnNwYXJlbnQtYm9yZGVyLXN0eWxlO1xyXG4gIH1cclxuXHJcbiAgQGVsc2UgaWYgJGRpcmVjdGlvbiA9PSBsZWZ0IHtcclxuICAgIGJvcmRlci1yaWdodDogJGNvbG9yLWJvcmRlci1zdHlsZTtcclxuICAgIGJvcmRlci10b3A6ICR0cmFuc3BhcmVudC1ib3JkZXItc3R5bGU7XHJcbiAgICBib3JkZXItYm90dG9tOiAkdHJhbnNwYXJlbnQtYm9yZGVyLXN0eWxlO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGFsaWduLWNlbnRlcigpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbkBtaXhpbiBhbGlnbi1jZW50ZXItdmVydGljYWwoKSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5AbWl4aW4gYWxpZ24tY2VudGVyLWhvcml6b250YWwoKSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuQG1peGluIHVuZGVybGluZS1lZmZlY3QoJGNvbG9yOiAkcHJpbWFyeSwgJGhlaWdodDogNHB4LCAkZHVyYXRpb246IDAuNXMpIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAmOmFmdGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogJGhlaWdodDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAkZHVyYXRpb247XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwLjQpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcblxyXG4gICYuYWN0aXZlIHtcclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxLjApO1xyXG4gICAgICBvcGFjaXR5OiAxLjA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8vIENvbG9ycyBWYXJpYWJsZXNcclxuJHByaW1hcnk6ICM1NDMzZmY7XHJcbiRwcmltYXJ5UkdCOiA4NCwgNTEsIDI1NTtcclxuJHByaW1hcnlDb250cmFzdDogI2ZmZmZmZjtcclxuJHByaW1hcnlDb250cmFzdFJHQjogMjU1LCAyNTUsIDI1NTtcclxuJHByaW1hcnlTaGFkZTogIzRhMmRlMDtcclxuJHByaW1hcnlUaW50OiAjNjU0N2ZmO1xyXG5cclxuJHNlY29uZGFyeTogIzUyNjBmZjtcclxuJHNlY29uZGFyeVJHQjogODIsIDk2LCAyNTU7XHJcbiRzZWNvbmRhcnlDb250cmFzdDogI2ZmZmZmZjtcclxuJHNlY29uZGFyeUNvbnRyYXN0UkdCOiAyNTUsIDI1NSwgMjU1O1xyXG4kc2Vjb25kYXJ5U2hhZGU6ICM0ODU0ZTA7XHJcbiRzZWNvbmRhcnlUaW50OiAjNGZhNGY5O1xyXG5cclxuJHRlcnRpYXJ5OiAjM2I5YWY4O1xyXG4kdGVydGlhcnlSR0I6IDU5LCAxNTQsIDI0ODtcclxuJHRlcnRpYXJ5Q29udHJhc3Q6ICNmZmZmZmY7XHJcbiR0ZXJ0aWFyeUNvbnRyYXN0UkdCOiAyNTUsIDI1NSwgMjU1O1xyXG4kdGVydGlhcnlTaGFkZTogIzM0ODhkYTtcclxuJHRlcnRpYXJ5VGludDogIzUwNzRmZDtcclxuXHJcbiRzdWNjZXNzOiAjMmRkMzZmO1xyXG4kc3VjY2Vzc1JHQjogNDUsIDIxMSwgMTExO1xyXG4kc3VjY2Vzc0NvbnRyYXN0OiAjMDAwMDAwO1xyXG4kc3VjY2Vzc0NvbnRyYXN0UkdCOiAwLCAwLCAwO1xyXG4kc3VjY2Vzc1NoYWRlOiAjMjhiYTYyO1xyXG4kc3VjY2Vzc1RpbnQ6ICM0MmQ3N2Q7XHJcblxyXG4kd2FybmluZzogI2Y4ZDQyMTtcclxuJHdhcm5pbmdSR0I6IDI0OCwgMjEyLCAzMztcclxuJHdhcm5pbmdDb250cmFzdDogIzAwMDAwMDtcclxuJHdhcm5pbmdDb250cmFzdFJHQjogMCwgMCwgMDtcclxuJHdhcm5pbmdTaGFkZTogI2RhYmIxZDtcclxuJHdhcm5pbmdUaW50OiAjZjlkODM3O1xyXG5cclxuJGRhbmdlcjogI2Q2M2E0MjtcclxuJGRhbmdlclJHQjogMjE0LCA1OCwgNjY7XHJcbiRkYW5nZXJDb250cmFzdDogI2ZmZmZmZjtcclxuJGRhbmdlckNvbnRyYXN0UkdCOiAyNTUsIDI1NSwgMjU1O1xyXG4kZGFuZ2VyU2hhZGU6ICNiYzMzM2E7XHJcbiRkYW5nZXJUaW50OiAjZGE0ZTU1O1xyXG5cclxuJG1lZGl1bTogIzFlMWUxZTtcclxuJG1lZGl1bVJHQjogMzAsIDMwLCAzMDtcclxuJG1lZGl1bUNvbnRyYXN0OiAjZmZmZmZmO1xyXG4kbWVkaXVtQ29udHJhc3RSR0I6IDI1NSwgMjU1LCAyNTU7XHJcbiRtZWRpdW1TaGFkZTogIzFhMWExYTtcclxuJG1lZGl1bVRpbnQ6ICMzNTM1MzU7XHJcblxyXG4kbGlnaHQ6ICNmZmZmZmY7XHJcbiRsaWdodFJHQjogMjU1LCAyNTUsIDI1NTtcclxuJGxpZ2h0Q29udHJhc3Q6ICNmZmZmZmY7XHJcbiRsaWdodENvbnRyYXN0UkdCOiAyNTUsIDI1NSwgMjU1O1xyXG4kbGlnaHRTaGFkZTogI2UwZTBlMDtcclxuJGxpZ2h0VGludDogI2ZmZmZmZjtcclxuXHJcbiRiYWNrZ3JvdW5kQ29sb3I6ICNmZmZmZmY7XHJcbiRiYWNrZ3JvdW5kQ29sb3JSR0I6IDExLCAxMiwgMjI7XHJcbiRpdGVtQmFja2dyb3VuZDogI2ZmZmZmZjtcclxuJGNhcmRCYWNrZ3JvdW5kOiAjZjdmN2Y3O1xyXG4kZGlhbG9nQmFja2dyb3VuZDogIzE2MTcyNDtcclxuXHJcbiR0ZXh0Q29sb3I6ICMxZTFlMWU7XHJcbiR0ZXh0Q29sb3JSR0I6IDI1NSwgMjU1LCAyNTU7XHJcbiRzZWNvbmRhcnlUZXh0Q29sb3I6ICNhMGEwYTA7XHJcbiR0ZXJ0aWFyeVRleHRDb2xvcjogI2I1YjViNTtcclxuJGxpZ2h0VGV4dENvbG9yOiAjYWFhY2I3O1xyXG4kZGFya1RleHRDb2xvcjogIzBhMGIxNTtcclxuJHBsYWNlaG9sZGVyVGV4dENvbG9yOiAjMzkzYjRhO1xyXG5cclxuLy8gU2l6ZSBWYXJpYWJsZXNcclxuJGFwcEhlYWRlckhlaWdodDogNjBweDtcclxuJGFwcEJvcmRlclJhZGl1czogMTBweDtcclxuJGlubmVyQm9yZGVyUmFkaXVzOiA2cHg7XHJcbiRkZXNrdG9wUGFkZGluZzogMzBweDtcclxuJHByaW1hcnlQYWRkaW5nOiAyMHB4O1xyXG4kbWVkaXVtUGFkZGluZzogNDBweDtcclxuJGxhcmdlUGFkZGluZzogODBweDtcclxuXHJcbiRwcmltYXJ5TWFyZ2luOiAzMHB4O1xyXG4kc2Vjb25kYXJ5TWFyZ2luOiAyMHB4O1xyXG4kbGFyZ2VNYXJnaW46IDUwcHg7XHJcbiRsaW5lSGVpZ2h0OiA1MHB4O1xyXG5cclxuJGxhcmdlTW9kdWxlU3BhY2luZzogMTUwcHg7XHJcbiRtb2R1bGVTcGFjaW5nOiA1MHB4O1xyXG4kbGFyZ2VJbWFnZVRleHRTcGFjaW5nOiA0MHB4O1xyXG4kY2FyZFNwYWNpbmc6IDMwcHg7XHJcbiRjYXJkU3BhY2luZ1NtYWxsOiAxNnB4O1xyXG4kaW1hZ2VUZXh0U3BhY2luZzogMTJweDtcclxuJHRleHRMaW5lU3BhY2luZzogNnB4O1xyXG5cclxuJGFwcEZvbnRTaXplU21hbGw6IDEycHg7XHJcbiRhcHBGb250U2l6ZVJlZ3VsYXI6IDE0cHg7XHJcbiRhcHBGb250U2l6ZUxhcmdlOiAxNnB4O1xyXG4kYXBwRm9udFNpemVJbXBvcnRhbnQ6IDE4cHg7XHJcbiRhcHBGb250U2l6ZVRpdGxlOiAyNHB4O1xyXG4kYXBwRm9udFNpemVNZWRpdW1UaXRsZTogMzJweDtcclxuJGFwcEZvbnRTaXplTGFyZ2VUaXRsZTogNDJweDtcclxuJGFwcEZvbnRTaXplRm9jdXM6IDY0cHg7XHJcbiRhcHBGb250U2l6ZUxvZ29UaXRsZTogODZweDtcclxuJGFwcExhcmdlc3RGb250U2l6ZTogMTMycHg7XHJcbiJdfQ== */";

/***/ }),

/***/ 4843:
/*!*******************************************************************!*\
  !*** ./src/app/modals/common-dialog/common-dialog.component.scss ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "div.body-wrapper > div.text-wrapper {\n  width: 100%;\n  min-height: 60px;\n  font-size: 14px;\n}\ndiv.body-wrapper > div.button-wrapper {\n  width: 100%;\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQUo7QUFHRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQURKIiwiZmlsZSI6ImNvbW1vbi1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYuYm9keS13cmFwcGVyIHtcclxuICA+ZGl2LnRleHQtd3JhcHBlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDYwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG5cclxuICA+ZGl2LmJ1dHRvbi13cmFwcGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICB9XHJcbn0iXX0= */";

/***/ }),

/***/ 9754:
/*!*********************************************************************!*\
  !*** ./src/app/modals/submit-success/submit-success.component.scss ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdWJtaXQtc3VjY2Vzcy5jb21wb25lbnQuc2NzcyJ9 */";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(271)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map