"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_base_base-page_ts-src_app_modules_layout_layout_module_ts-src_app_modules_sha-4fb023"],{

/***/ 8920:
/*!***********************************!*\
  !*** ./src/app/base/base-page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasePage": () => (/* binding */ BasePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _utils_string_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/string-helper */ 941);


class BasePage {
    constructor(loadingCtrl, toastCtrl, runtime, screenFitService) {
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.runtime = runtime;
        this.screenFitService = screenFitService;
    }
    showLoading(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const loader = yield this.loadingCtrl.create({
                translucent: true,
                spinner: 'circles',
                message: message,
            });
            yield loader.present();
            return loader;
        });
    }
    showToast(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: message,
                duration: 2000,
                mode: 'md',
                position: 'bottom',
            });
            yield toast.present();
            return toast;
        });
    }
    setPageTitle(title) {
        document.title = title;
    }
    formatHistoryTime(timeDiff) {
        return _utils_string_helper__WEBPACK_IMPORTED_MODULE_0__.StringHelper.formatHistoryTime(Math.abs(timeDiff));
    }
}


/***/ }),

/***/ 197:
/*!*******************************************************************!*\
  !*** ./src/app/components/list-content/list-content.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListContentComponent": () => (/* binding */ ListContentComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_Project_Web_Angular_TrendBeat_node_modules_ngtools_webpack_src_loaders_direct_resource_js_list_content_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./list-content.component.html */ 5562);
/* harmony import */ var _list_content_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-content.component.scss */ 9302);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);




let ListContentComponent = class ListContentComponent {
    constructor() {
        this.data = [];
        this.minHeight = '200px';
        this.noDataHtml = null;
        this.noDataClass = null;
        this.noDataText = 'No Data';
    }
    ngOnInit() { }
};
ListContentComponent.ctorParameters = () => [];
ListContentComponent.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    minHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    noDataHtml: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    noDataClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    noDataText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
ListContentComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-list-content',
        template: _D_Project_Web_Angular_TrendBeat_node_modules_ngtools_webpack_src_loaders_direct_resource_js_list_content_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_list_content_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ListContentComponent);



/***/ }),

/***/ 8189:
/*!***********************************************************************!*\
  !*** ./src/app/components/status-content/status-content.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatusContentComponent": () => (/* binding */ StatusContentComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_Project_Web_Angular_TrendBeat_node_modules_ngtools_webpack_src_loaders_direct_resource_js_status_content_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./status-content.component.html */ 9297);
/* harmony import */ var _status_content_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./status-content.component.scss */ 4716);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_app_services_event_bus_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/event-bus.service */ 5051);
var StatusContentComponent_1;





let StatusContentComponent = StatusContentComponent_1 = class StatusContentComponent {
    constructor(eventBus) {
        this.eventBus = eventBus;
        this.refresher = false;
        this.defaultStatus = StatusContentComponent_1.STATUS_LOADING;
        this.loadingText = '加载中...';
        this.errorIcon = 'assets/images/request_error.svg';
        this.errorTitle = '加载失败';
        this.errorText = '当前服务器繁忙，请稍后再试';
        this.retryText = '点击重试';
        this.loadingHtml = '';
        this.retryHtml = '';
        this.loadingClass = '';
        this.errorClass = '';
        this.refresh = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.retry = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.statusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.pageStatus = StatusContentComponent_1.STATUS_LOADING;
        this.refreshToken = null;
    }
    ngOnInit() {
        this.pageStatus = this.defaultStatus;
    }
    doRefresh(event) {
        this.refreshToken = event.target;
        this.refresh.emit(event);
    }
    onClickRetry() {
        this.retry.emit();
    }
    invokeRefreshComplete() {
        if (this.refreshToken) {
            this.refreshToken.complete();
        }
    }
    invokeLoading(loadingText = null) {
        if (loadingText) {
            this.loadingText = loadingText;
        }
        this.pageStatus = StatusContentComponent_1.STATUS_LOADING;
        this.statusChange.emit('loading');
        this.eventBus.emmitEvent('status-content:loading', null);
    }
    invokeSuccess() {
        this.pageStatus = StatusContentComponent_1.STATUS_SUCCESS;
        this.statusChange.emit('success');
        this.eventBus.emmitEvent('status-content:success', null);
        this.invokeRefreshComplete();
    }
    invokeError(errorIcon = null, errorTitle = null, errorText = null, retryText = null) {
        if (errorIcon) {
            this.errorIcon = errorIcon;
        }
        if (errorTitle) {
            this.errorTitle = errorTitle;
        }
        if (errorText) {
            this.errorText = errorText;
        }
        if (retryText) {
            this.retryText = retryText;
        }
        this.pageStatus = StatusContentComponent_1.STATUS_ERROR;
        this.statusChange.emit('error');
        this.eventBus.emmitEvent('status-content:error', null);
        this.invokeRefreshComplete();
    }
};
StatusContentComponent.STATUS_LOADING = 0;
StatusContentComponent.STATUS_SUCCESS = 1;
StatusContentComponent.STATUS_ERROR = 2;
StatusContentComponent.ctorParameters = () => [
    { type: src_app_services_event_bus_service__WEBPACK_IMPORTED_MODULE_2__.EventBusService }
];
StatusContentComponent.propDecorators = {
    refresher: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    defaultStatus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    loadingText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    errorIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    errorTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    errorText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    retryText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    loadingHtml: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    retryHtml: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    loadingClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    errorClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    refresh: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }],
    retry: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }],
    statusChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }]
};
StatusContentComponent = StatusContentComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-status-content',
        template: _D_Project_Web_Angular_TrendBeat_node_modules_ngtools_webpack_src_loaders_direct_resource_js_status_content_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_status_content_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], StatusContentComponent);



/***/ }),

/***/ 8148:
/*!*******************************************************************!*\
  !*** ./src/app/components/status-image/status-image.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatusImageComponent": () => (/* binding */ StatusImageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_Project_Web_Angular_TrendBeat_node_modules_ngtools_webpack_src_loaders_direct_resource_js_status_image_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./status-image.component.html */ 9556);
/* harmony import */ var _status_image_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./status-image.component.scss */ 377);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);




let StatusImageComponent = class StatusImageComponent {
    constructor() {
        this.width = '100%';
        this.height = '100%';
        this.loadingImg = 'assets/images/loading_default.svg';
        this.errorImg = 'assets/images/status_404.svg';
        this.src = '';
        this.alt = '';
        this.loadFinish = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.loadError = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.status = 0;
    }
    ngOnInit() { }
    onSetSource() {
        this.status = 0;
    }
    onLoadFinish() {
        this.status = 1;
        this.loadFinish.emit('load image: {' + this.src + '} success');
    }
    onLoadError() {
        this.status = 2;
        this.loadError.emit('load image: {' + this.src + '} failed');
    }
};
StatusImageComponent.ctorParameters = () => [];
StatusImageComponent.propDecorators = {
    width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    loadingImg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    errorImg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    src: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    alt: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    loadFinish: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
    loadError: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
StatusImageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-status-image',
        template: _D_Project_Web_Angular_TrendBeat_node_modules_ngtools_webpack_src_loaders_direct_resource_js_status_image_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_status_image_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive)({
        selector: 'app-status-image',
    })
], StatusImageComponent);



/***/ }),

/***/ 7179:
/*!*****************************************************************!*\
  !*** ./src/app/layout/common-footer/common-footer.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonFooterComponent": () => (/* binding */ CommonFooterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_Project_Web_Angular_TrendBeat_node_modules_ngtools_webpack_src_loaders_direct_resource_js_common_footer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./common-footer.component.html */ 9825);
/* harmony import */ var _common_footer_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common-footer.component.scss */ 6546);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_app_providers_screen_fit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/providers/screen-fit.service */ 6952);
/* harmony import */ var src_app_providers_theme_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/theme.service */ 7440);






let CommonFooterComponent = class CommonFooterComponent {
    constructor(screenFitService, themeService) {
        this.screenFitService = screenFitService;
        this.themeService = themeService;
        this.currentYear = new Date().getFullYear();
    }
    ngOnInit() { }
};
CommonFooterComponent.ctorParameters = () => [
    { type: src_app_providers_screen_fit_service__WEBPACK_IMPORTED_MODULE_2__.ScreenFitService },
    { type: src_app_providers_theme_service__WEBPACK_IMPORTED_MODULE_3__.ThemeService }
];
CommonFooterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-common-footer',
        template: _D_Project_Web_Angular_TrendBeat_node_modules_ngtools_webpack_src_loaders_direct_resource_js_common_footer_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_common_footer_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CommonFooterComponent);



/***/ }),

/***/ 3232:
/*!*****************************************************************!*\
  !*** ./src/app/layout/common-header/common-header.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonHeaderComponent": () => (/* binding */ CommonHeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_Project_Web_Angular_TrendBeat_node_modules_ngtools_webpack_src_loaders_direct_resource_js_common_header_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./common-header.component.html */ 1917);
/* harmony import */ var _common_header_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common-header.component.scss */ 2071);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var src_app_modals_choose_media_type_choose_media_type_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modals/choose-media-type/choose-media-type.component */ 2794);
/* harmony import */ var src_app_providers_screen_fit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/screen-fit.service */ 6952);
/* harmony import */ var src_app_providers_theme_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/theme.service */ 7440);
/* harmony import */ var src_app_services_runtime_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/runtime.service */ 759);
/* harmony import */ var src_app_utils_string_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/utils/string-helper */ 941);











let CommonHeaderComponent = class CommonHeaderComponent {
    constructor(screenFitService, runtime, themeService, router, modalController) {
        this.screenFitService = screenFitService;
        this.runtime = runtime;
        this.themeService = themeService;
        this.router = router;
        this.modalController = modalController;
        this.navIndex = 0;
        this.haveUnreadMessage = false;
    }
    ngOnInit() {
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__.NavigationEnd) {
                const url = event.url.split('?')[0];
                switch (url) {
                    case '/about':
                        break;
                    default:
                        this.navIndex = 0;
                        break;
                }
            }
        });
    }
    onClickNavItem(index) {
        this.navIndex = index;
    }
    onClickLogo() {
        this.router.navigate(['/home']);
    }
    onClickSearch() {
        this.router.navigate(['/search']);
    }
    onClickAddArticle() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                cssClass: 'choose-media-type-dialog',
                component: src_app_modals_choose_media_type_choose_media_type_component__WEBPACK_IMPORTED_MODULE_2__.ChooseMediaTypeComponent
            });
            return yield modal.present();
        });
    }
    onClickAbout() {
        this.router.navigate(['/about']);
    }
    getHeaderStyle() {
        let result = {};
        if (this.themeService.immersive) {
            const background = 'linear-gradient(180deg, {0} 0%, {1} 100%)'
                .replace('{0}', src_app_utils_string_helper__WEBPACK_IMPORTED_MODULE_6__.StringHelper.transferHexColor(this.themeService.backgroundColor, this.themeService.opacity))
                .replace('{1}', src_app_utils_string_helper__WEBPACK_IMPORTED_MODULE_6__.StringHelper.transferHexColor(this.themeService.backgroundColor, 0));
            result = { background: background };
        }
        return result;
    }
};
CommonHeaderComponent.ctorParameters = () => [
    { type: src_app_providers_screen_fit_service__WEBPACK_IMPORTED_MODULE_3__.ScreenFitService },
    { type: src_app_services_runtime_service__WEBPACK_IMPORTED_MODULE_5__.RuntimeService },
    { type: src_app_providers_theme_service__WEBPACK_IMPORTED_MODULE_4__.ThemeService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController }
];
CommonHeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-common-header',
        template: _D_Project_Web_Angular_TrendBeat_node_modules_ngtools_webpack_src_loaders_direct_resource_js_common_header_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_common_header_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CommonHeaderComponent);



/***/ }),

/***/ 5358:
/*!*************************************************!*\
  !*** ./src/app/modules/layout/layout.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutModule": () => (/* binding */ LayoutModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var src_app_layout_common_header_common_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/layout/common-header/common-header.component */ 3232);
/* harmony import */ var src_app_layout_common_footer_common_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/layout/common-footer/common-footer.component */ 7179);
/* harmony import */ var src_app_layout_index_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/layout/index/index.component */ 6769);









let LayoutModule = class LayoutModule {
};
LayoutModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [src_app_layout_common_header_common_header_component__WEBPACK_IMPORTED_MODULE_0__.CommonHeaderComponent, src_app_layout_common_footer_common_footer_component__WEBPACK_IMPORTED_MODULE_1__.CommonFooterComponent, src_app_layout_index_index_component__WEBPACK_IMPORTED_MODULE_2__.IndexComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule],
        exports: [src_app_layout_common_header_common_header_component__WEBPACK_IMPORTED_MODULE_0__.CommonHeaderComponent, src_app_layout_common_footer_common_footer_component__WEBPACK_IMPORTED_MODULE_1__.CommonFooterComponent, src_app_layout_index_index_component__WEBPACK_IMPORTED_MODULE_2__.IndexComponent],
    })
], LayoutModule);



/***/ }),

/***/ 6672:
/*!***********************************************!*\
  !*** ./src/app/modules/share/share.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShareModule": () => (/* binding */ ShareModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var src_app_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/pipes/safe-html.pipe */ 2690);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var src_app_components_status_content_status_content_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/status-content/status-content.component */ 8189);
/* harmony import */ var src_app_components_status_image_status_image_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/status-image/status-image.component */ 8148);
/* harmony import */ var src_app_components_list_content_list_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/list-content/list-content.component */ 197);
/* harmony import */ var src_app_pipes_safe_url_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/pipes/safe-url.pipe */ 3821);











let ShareModule = class ShareModule {
};
ShareModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [src_app_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_0__.SafeHtmlPipe, src_app_pipes_safe_url_pipe__WEBPACK_IMPORTED_MODULE_4__.SafeUrlPipe, src_app_components_status_content_status_content_component__WEBPACK_IMPORTED_MODULE_1__.StatusContentComponent, src_app_components_status_image_status_image_component__WEBPACK_IMPORTED_MODULE_2__.StatusImageComponent, src_app_components_list_content_list_content_component__WEBPACK_IMPORTED_MODULE_3__.ListContentComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule],
        exports: [src_app_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_0__.SafeHtmlPipe, src_app_pipes_safe_url_pipe__WEBPACK_IMPORTED_MODULE_4__.SafeUrlPipe, src_app_components_status_content_status_content_component__WEBPACK_IMPORTED_MODULE_1__.StatusContentComponent, src_app_components_status_image_status_image_component__WEBPACK_IMPORTED_MODULE_2__.StatusImageComponent, src_app_components_list_content_list_content_component__WEBPACK_IMPORTED_MODULE_3__.ListContentComponent],
    })
], ShareModule);



/***/ }),

/***/ 2690:
/*!*****************************************!*\
  !*** ./src/app/pipes/safe-html.pipe.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafeHtmlPipe": () => (/* binding */ SafeHtmlPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ 6219);



let SafeHtmlPipe = class SafeHtmlPipe {
    constructor(sanitized) {
        this.sanitized = sanitized;
    }
    transform(html) {
        return this.sanitized.bypassSecurityTrustHtml(html);
    }
};
SafeHtmlPipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.DomSanitizer }
];
SafeHtmlPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Pipe)({
        name: 'safeHtml'
    })
], SafeHtmlPipe);



/***/ }),

/***/ 3821:
/*!****************************************!*\
  !*** ./src/app/pipes/safe-url.pipe.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafeUrlPipe": () => (/* binding */ SafeUrlPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ 6219);



let SafeUrlPipe = class SafeUrlPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(url, args) {
        return this.sanitizer.bypassSecurityTrustUrl(url);
    }
};
SafeUrlPipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.DomSanitizer }
];
SafeUrlPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Pipe)({
        name: 'safeUrl',
    })
], SafeUrlPipe);



/***/ }),

/***/ 941:
/*!****************************************!*\
  !*** ./src/app/utils/string-helper.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StringHelper": () => (/* binding */ StringHelper)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 8806);

class StringHelper {
    /**
     * overflow ellipsis
     * @param value
     * @param length
     * @param direction
     * @returns
     */
    static ellipsis(value, length = 8, direction) {
        direction = direction || 'center';
        if (!value || value.length <= length) {
            return value;
        }
        if (direction === 'start') {
            return '...' + value.substr(value.length - length);
        }
        else if (direction === 'center') {
            const cutIndex = length % 2 === 0 ? length / 2 : (length + 1) / 2;
            const prefix = value.substr(0, cutIndex);
            const sufix = value.substr(value.length - (length - cutIndex));
            return prefix + '...' + sufix;
        }
        else {
            return value.substr(0, length) + '...';
        }
    }
    /**
     * replace emoji symbols
     * @param source
     * @param target
     * @returns
     */
    static replaceEmojis(source, target = '') {
        const pattern = [
            '\ud83c[\udf00-\udfff]',
            '\ud83d[\udc00-\ude4f]',
            '\ud83d[\ude80-\udeff]',
        ];
        const reg = new RegExp(pattern.join('|'), 'g');
        return source.replace(reg, target);
    }
    /**
     * replace html tags
     * @param source
     * @param target
     * @returns
     */
    static replaceHtmlTags(source, target = '') {
        const regex = /(<([^>]+)>)/gi;
        return source.replace(regex, target);
    }
    /**
     * test picture suffix
     * @param sourceURL
     * @param format
     * @returns
     */
    static testPictureFormat(sourceURL, format = 'gif') {
        const regex = format === 'gif'
            ? /\.gif\b/i
            : format === 'png'
                ? /\.png\b/i
                : /\.jpg\b/i;
        return regex.test(sourceURL);
    }
    /**
     * format timestamp base on milli-second
     * @param timestamp
     * @param format
     * @returns
     */
    static formatTimestamp(timestamp, format = 'yyyy-MM-dd hh:mm:ss') {
        const doFormat = (time, format) => {
            const object = {
                'M+': time.getMonth() + 1,
                'd+': time.getDate(),
                'h+': time.getHours(),
                'm+': time.getMinutes(),
                's+': time.getSeconds(),
                'q+': Math.floor((time.getMonth() + 3) / 3),
                S: time.getMilliseconds(),
            };
            if (/(y+)/.test(format)) {
                format = format.replace(RegExp.$1, (time.getFullYear() + '').substr(4 - RegExp.$1.length));
            }
            for (const key in object) {
                if (new RegExp('(' + key + ')').test(format)) {
                    format = format.replace(RegExp.$1, RegExp.$1.length === 1
                        ? object[key]
                        : ('00' + object[key]).substr(('' + object[key]).length));
                }
            }
            return format;
        };
        return doFormat(new Date(timestamp), format);
    }
    /**
     * fixed number
     * @param source
     * @param fixed
     * @returns
     */
    static toFixed(source, fixed = null) {
        const reg = new RegExp('^-?\\d+(?:.\\d{0,' + (fixed || -1) + '})?');
        return source.toString().match(reg)[0];
    }
    /**
     * format to history time, such as: 3 days ago
     * @param timeDiff
     * @param mode
     * @param format
     * @param level
     * @param overflow
     * @param unitConfig such as: { day: '{0} days ago', day_hour_minute: '{0} days {1} hours {2} minutes ago', hour: '{0} hours ago', hour_minute_second: '{0} hours {1} minites {2} seconds ago', minute: '{0} minutes ago', minute_second: '{0} minutes {1} seconds ago', second: '{0} seconds ago'}
     * @returns
     */
    static formatHistoryTime(timeDiff, mode = 'simple', format = 'yyyy-MM-dd hh:mm:ss', level = null, overflow = 1000 * 60 * 60 * 24 * 30, unitConfig = {
        day: '{0}天前',
        day_hour_minute: '{0}天{1}小时{2}分钟前',
        hour: '{0}小时前',
        hour_minute_second: '{0}小时{1}分钟{2}秒前',
        minute: '{0}分钟前',
        minute_second: '{0}分钟 {1}秒前',
        second: '{0}秒前',
    }) {
        timeDiff = Math.max(timeDiff, 0);
        if (timeDiff > overflow) {
            return StringHelper.formatTimestamp(new Date().getTime() - timeDiff, format);
        }
        const replacePlaceholder = (source, params) => {
            if (source && source.length > 0) {
                const testRegExp = /(\{\d\})/;
                while (testRegExp.test(source)) {
                    const index = parseInt(RegExp.$1.slice(1, -1));
                    source = source.replace(new RegExp('\\{' + index + '\\}', 'g'), index >= params.length ? '' : arguments[index]);
                }
                return source;
            }
            return null;
        };
        if (level) {
            if (level === 'day') {
                const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
                return mode === 'simple'
                    ? replacePlaceholder(unitConfig.day, [days])
                    : replacePlaceholder(unitConfig.day_hour_minute, [
                        days,
                        hours,
                        minutes,
                    ]);
            }
            else if (level === 'hour') {
                const hours = Math.floor(timeDiff / (1000 * 60 * 60));
                const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
                return mode === 'simple'
                    ? replacePlaceholder(unitConfig.hour, [hours])
                    : replacePlaceholder(unitConfig.hour_minute_second, [
                        hours,
                        minutes,
                        seconds,
                    ]);
            }
            else if (level === 'minute') {
                const minutes = Math.floor(timeDiff / (1000 * 60));
                const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
                return mode === 'simple'
                    ? replacePlaceholder(unitConfig.minute, [minutes])
                    : replacePlaceholder(unitConfig.minute_second, [minutes, seconds]);
            }
            else {
                const seconds = Math.floor(timeDiff / 1000);
                return replacePlaceholder(unitConfig.second, [seconds]);
            }
        }
        else {
            let withDay = false;
            let withHour = false;
            let withMinute = false;
            const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
            if (days > 0) {
                withDay = true;
            }
            const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            if (hours > 0) {
                withHour = true;
            }
            const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
            if (minutes > 0) {
                withMinute = true;
            }
            const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
            if (withDay) {
                return mode === 'simple'
                    ? replacePlaceholder(unitConfig.day, [days])
                    : replacePlaceholder(unitConfig.day_hour_minute, [
                        days,
                        hours,
                        minutes,
                    ]);
            }
            else if (withHour) {
                return mode === 'simple'
                    ? replacePlaceholder(unitConfig.hour, [hours])
                    : replacePlaceholder(unitConfig.hour_minute_second, [
                        hours,
                        minutes,
                        seconds,
                    ]);
            }
            else if (withMinute) {
                return mode === 'simple'
                    ? replacePlaceholder(unitConfig.minute, [minutes])
                    : replacePlaceholder(unitConfig.minute_second, [minutes, seconds]);
            }
            else {
                return replacePlaceholder(unitConfig.second, [seconds]);
            }
        }
    }
    /**
     * format file size
     * @param value
     * @returns
     */
    static formatFileSize(value) {
        if (!value) {
            return '0 Bytes';
        }
        const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        let index = 0;
        index = Math.floor(Math.log(value) / Math.log(1024));
        let size = value / Math.pow(1024, index);
        size = parseInt(StringHelper.toFixed(size, 2));
        return size + ' ' + units[index];
    }
    /**
     * covert file to base64 string
     * @param file
     * @returns
     */
    static toBase64(file) {
        return new Promise((resolve, reject) => {
            try {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = (event) => {
                    const dataURL = event.target.result;
                    resolve(dataURL);
                };
            }
            catch (error) {
                reject(error);
            }
        });
    }
    /**
     * remove rich-text inline style (currently just remove background and color)
     * @param styleAttritute
     * @returns
     */
    static removeInlineStyle(styleAttritute) {
        let result = styleAttritute || '';
        const removeBackgroundRegExp = /(style=")([a-zA-Z0-9:;\(\)\,\s:\-\/\"\#\.\?\%\!\&]*)(background[-]?[a-zA-Z]*:[z-zA-Z0-9\(\)\,\s:\-\/\"\#\.\?\%\!\&]*[;]?[\s]*)([a-zA-Z0-9:;\(\)\,\s:\-\/\"\#\.\?\%\!\&]*)(")/gi;
        const removeColorRegExp = /(style=")([a-zA-Z0-9:;\(\)\,\s:\-\/\"\#\.\?\%\!\&]*)(color:[z-zA-Z0-9\(\)\,\s:\-\/\"\#\.\?\%\!\&]*[;]?[\s]*)([a-zA-Z0-9:;\(\)\,\s:\-\/\"\#\.\?\%\!\&]*)(")/gi;
        result = result.replace(removeBackgroundRegExp, '$1$2$4$5');
        result = result.replace(removeColorRegExp, '$1$2$4$5');
        return result;
    }
    /**
     * read file to base64 string from url
     * @param url
     * @returns
     */
    static transferUrl2Base64(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then((response) => response.blob())
                .then((blob) => {
                const reader = new FileReader();
                reader.onloadend = () => {
                    resolve(reader.result);
                };
                reader.readAsDataURL(blob);
            })
                .catch(console.error);
        });
    }
    /**
     * covert base64 string to file
     * @param base64Data
     * @param fileName
     * @returns
     */
    static base642File(base64Data, fileName) {
        const array = base64Data.split(',');
        const mimeType = array[0].match(/:(.*?);/)[1];
        const data = atob(array[1]);
        let length = data.length;
        const u8Array = new Uint8Array(length);
        while (length--) {
            u8Array[length] = data.charCodeAt(length);
        }
        return new File([u8Array], fileName, { type: mimeType });
    }
    /**
     * covert image to file
     * @param url
     * @returns
     */
    static transferImage2File(url) {
        return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const fileName = url.substring(url.lastIndexOf('/') + 1);
            const dataUrl = yield this.transferUrl2Base64(url);
            const file = this.base642File(dataUrl.toString(), fileName);
            resolve(file);
        }));
    }
    /**
     * transfer hex color to rgba color
     * @param color
     * @param opacity
     * @returns
     */
    static transferHexColor(color = '#333', opacity = 1.0) {
        color = color.toLowerCase();
        const pattern = /^#([0-9|a-f]{3}|[0-9|a-f]{6})$/;
        if (color && pattern.test(color)) {
            if (color.length === 4) {
                color =
                    '#' + color[1] + color[1] + color[2] + color[2] + color[3] + color[3];
            }
            const temp = [];
            for (let i = 1; i < 7; i += 2) {
                temp.push(parseInt('0x' + color.slice(i, i + 2)));
            }
            return 'rgba(' + temp.join(',') + ',' + opacity + ')';
        }
        return color;
    }
}


/***/ }),

/***/ 5562:
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/list-content/list-content.component.html ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"list-content-root\">\r\n  <ng-container *ngIf=\"data && data.length > 0;else elseTemplate\">\r\n    <div class=\"list-wrapper\">\r\n      <ul>\r\n        <li *ngFor=\"let item of data\">\r\n          <ng-content></ng-content>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </ng-container>\r\n  <ng-template #elseTemplate>\r\n    <div [ngStyle]=\"{minHeight: minHeight}\" class=\"no-data\">\r\n      <ng-container *ngIf=\"noDataHtml; else elseTemplate\">\r\n        <div [class]=\"noDataClass ? noDataClass : ''\" [innerHtml]=\"noDataHtml\"></div>\r\n      </ng-container>\r\n      <ng-template #elseTemplate>\r\n        <div class=\"no-data-content\">\r\n          <span>{{ noDataText }}</span>\r\n        </div>\r\n      </ng-template>\r\n    </div>\r\n  </ng-template>\r\n</div>");

/***/ }),

/***/ 9297:
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/status-content/status-content.component.html ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ng-container *ngIf=\"refresher\">\r\n  <ion-refresher mode=\"md\" slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"pageStatus == 1; else elseTemplate\">\r\n  <ng-content></ng-content>\r\n</ng-container>\r\n\r\n<ng-template #elseTemplate>\r\n  <div *ngIf=\"pageStatus == 0\" class=\"loading\">\r\n    <ng-container *ngIf=\"loadingHtml; else elseTemplate\">\r\n      <div [class]=\"loadingClass ? loadingClass : ''\" [innerHtml]=\"loadingHtml\"></div>\r\n    </ng-container>\r\n    <ng-template #elseTemplate>\r\n      <div class=\"inner-wrapper\">\r\n        <ion-spinner name=\"bubbles\"></ion-spinner>\r\n        <ion-text>\r\n          {{ loadingText }}\r\n        </ion-text>\r\n      </div>\r\n    </ng-template>\r\n  </div>\r\n\r\n  <div *ngIf=\"pageStatus == 2\" class=\"error\">\r\n    <ng-container *ngIf=\"loadingHtml; else elseTemplate\">\r\n      <div [class]=\"loadingClass ? loadingClass : ''\" [innerHtml]=\"loadingHtml\"></div>\r\n    </ng-container>\r\n    <ng-template #elseTemplate>\r\n      <div class=\"inner-wrapper\">\r\n        <ion-img [src]=\"errorIcon\"></ion-img>\r\n\r\n        <div class=\"description\">\r\n          <h3>\r\n            {{ errorTitle }}\r\n          </h3>\r\n          <p>\r\n            {{ errorText }}\r\n          </p>\r\n        </div>\r\n        <ion-button (click)=\"onClickRetry()\" color=\"primary\" fill=\"outline\" shape=\"round\">\r\n          {{ retryText }}\r\n        </ion-button>\r\n      </div>\r\n    </ng-template>\r\n  </div>\r\n</ng-template>\r\n\r\n");

/***/ }),

/***/ 9556:
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/status-image/status-image.component.html ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div [ngStyle]=\"{ width: width, height: height }\" class=\"image-wrapper\">\r\n  <ion-img *ngIf=\"status == 0\" [src]=\"loadingImg\"></ion-img>\r\n  <ion-img *ngIf=\"status == 2\" [src]=\"errorImg\"></ion-img>\r\n  <ion-img\r\n    *ngIf=\"status == 0 || status == 1\"\r\n    [src]=\"src\"\r\n    (ionError)=\"onLoadError()\"\r\n    (ionImgDidLoad)=\"onLoadFinish()\"\r\n    (ionImgWillLoad)=\"onSetSource()\"\r\n  ></ion-img>\r\n</div>\r\n");

/***/ }),

/***/ 9825:
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/layout/common-footer/common-footer.component.html ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div *ngIf=\"themeService.withFooter\" class=\"footer-container\" [class]=\"screenFitService.screenCategory\">\r\n  <ng-container *ngIf=\"screenFitService.screenCategory == 'desktop'\">\r\n    <div class=\"app-container\">\r\n      <div class=\"layout-start\">\r\n        <ul>\r\n          <li><ion-icon slot=\"icon-only\" name=\"twitter\"></ion-icon></li>\r\n          <li><ion-icon slot=\"icon-only\" name=\"weibo\"></ion-icon></li>\r\n          <li><ion-icon slot=\"icon-only\" name=\"telegram\"></ion-icon></li>\r\n          <li><ion-icon slot=\"icon-only\" name=\"facebook\"></ion-icon></li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"layout-end\">\r\n        <span>©2021-{{ currentYear }}, Powered by TenGeek</span>\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n  <ng-container *ngIf=\"screenFitService.screenCategory == 'pad'\"></ng-container>\r\n  <ng-container *ngIf=\"screenFitService.screenCategory == 'phone'\">\r\n    <div class=\"app-container\"></div>\r\n  </ng-container>\r\n</div>\r\n");

/***/ }),

/***/ 1917:
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/layout/common-header/common-header.component.html ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div\r\n  class=\"header-container\"\r\n  [ngStyle]=\"getHeaderStyle()\"\r\n  [class]=\"screenFitService.screenCategory\"\r\n>\r\n  <ng-container *ngIf=\"screenFitService.screenCategory == 'desktop'\">\r\n    <div class=\"app-container\">\r\n      <div class=\"header-wrapper\">\r\n        <div class=\"layout-start\">\r\n          <div class=\"logo-wrapper\" (click)=\"onClickLogo()\">\r\n            <img src=\"assets/images/app/logo_normal.svg\" alt=\"\">\r\n          </div>\r\n        </div>\r\n        <div class=\"layout-end\">\r\n          <ul>\r\n            <li (click)=\"onClickSearch()\">\r\n              <ion-icon name=\"search\"></ion-icon>\r\n              <span>搜索</span>\r\n            </li>\r\n            <li (click)=\"onClickAddArticle()\">\r\n              <ion-icon name=\"add\"></ion-icon>\r\n              <span>投稿</span>\r\n            </li>\r\n            <li (click)=\"onClickAbout()\">\r\n              <span>关于我们</span>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n  <ng-container *ngIf=\"screenFitService.screenCategory == 'pad'\"></ng-container>\r\n  <ng-container *ngIf=\"screenFitService.screenCategory == 'phone'\">\r\n    <div class=\"app-container\"></div>\r\n  </ng-container>\r\n</div>\r\n");

/***/ }),

/***/ 9302:
/*!*********************************************************************!*\
  !*** ./src/app/components/list-content/list-content.component.scss ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "div.list-content-root {\n  width: 100%;\n  height: auto;\n}\ndiv.list-content-root > div.list-wrapper {\n  width: 100%;\n  height: auto;\n}\ndiv.list-content-root > div.list-wrapper > ul {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n}\ndiv.list-content-root > div.list-wrapper > ul > li {\n  display: block;\n  width: auto;\n  height: auto;\n}\ndiv.list-content-root > div.no-data {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  min-height: 200px;\n}\ndiv.list-content-root > div.no-data > div.no-data-content {\n  width: -moz-fit-content;\n  width: fit-content;\n  height: auto;\n}\ndiv.list-content-root > div.no-data > div.no-data-content > span {\n  display: block;\n  color: #b5b5b5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QtY29udGVudC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXHRoZW1lXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBREY7QUFHRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBREo7QUFHSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtBQUROO0FBR007RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFEUjtBQU1FO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFKSjtBQU1JO0VBQ0UsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLFlBQUE7QUFKTjtBQU1NO0VBQ0UsY0FBQTtFQUNBLGNDNkJZO0FEakNwQiIsImZpbGUiOiJsaXN0LWNvbnRlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwidmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbmRpdi5saXN0LWNvbnRlbnQtcm9vdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG5cclxuICA+IGRpdi5saXN0LXdyYXBwZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcblxyXG4gICAgPiB1bCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICA+IGxpIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gID4gZGl2Lm5vLWRhdGEge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMjAwcHg7XHJcblxyXG4gICAgPiBkaXYubm8tZGF0YS1jb250ZW50IHtcclxuICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcblxyXG4gICAgICA+IHNwYW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGNvbG9yOiAkdGVydGlhcnlUZXh0Q29sb3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLy8gQ29sb3JzIFZhcmlhYmxlc1xyXG4kcHJpbWFyeTogIzU0MzNmZjtcclxuJHByaW1hcnlSR0I6IDg0LCA1MSwgMjU1O1xyXG4kcHJpbWFyeUNvbnRyYXN0OiAjZmZmZmZmO1xyXG4kcHJpbWFyeUNvbnRyYXN0UkdCOiAyNTUsIDI1NSwgMjU1O1xyXG4kcHJpbWFyeVNoYWRlOiAjNGEyZGUwO1xyXG4kcHJpbWFyeVRpbnQ6ICM2NTQ3ZmY7XHJcblxyXG4kc2Vjb25kYXJ5OiAjNTI2MGZmO1xyXG4kc2Vjb25kYXJ5UkdCOiA4MiwgOTYsIDI1NTtcclxuJHNlY29uZGFyeUNvbnRyYXN0OiAjZmZmZmZmO1xyXG4kc2Vjb25kYXJ5Q29udHJhc3RSR0I6IDI1NSwgMjU1LCAyNTU7XHJcbiRzZWNvbmRhcnlTaGFkZTogIzQ4NTRlMDtcclxuJHNlY29uZGFyeVRpbnQ6ICM0ZmE0Zjk7XHJcblxyXG4kdGVydGlhcnk6ICMzYjlhZjg7XHJcbiR0ZXJ0aWFyeVJHQjogNTksIDE1NCwgMjQ4O1xyXG4kdGVydGlhcnlDb250cmFzdDogI2ZmZmZmZjtcclxuJHRlcnRpYXJ5Q29udHJhc3RSR0I6IDI1NSwgMjU1LCAyNTU7XHJcbiR0ZXJ0aWFyeVNoYWRlOiAjMzQ4OGRhO1xyXG4kdGVydGlhcnlUaW50OiAjNTA3NGZkO1xyXG5cclxuJHN1Y2Nlc3M6ICMyZGQzNmY7XHJcbiRzdWNjZXNzUkdCOiA0NSwgMjExLCAxMTE7XHJcbiRzdWNjZXNzQ29udHJhc3Q6ICMwMDAwMDA7XHJcbiRzdWNjZXNzQ29udHJhc3RSR0I6IDAsIDAsIDA7XHJcbiRzdWNjZXNzU2hhZGU6ICMyOGJhNjI7XHJcbiRzdWNjZXNzVGludDogIzQyZDc3ZDtcclxuXHJcbiR3YXJuaW5nOiAjZjhkNDIxO1xyXG4kd2FybmluZ1JHQjogMjQ4LCAyMTIsIDMzO1xyXG4kd2FybmluZ0NvbnRyYXN0OiAjMDAwMDAwO1xyXG4kd2FybmluZ0NvbnRyYXN0UkdCOiAwLCAwLCAwO1xyXG4kd2FybmluZ1NoYWRlOiAjZGFiYjFkO1xyXG4kd2FybmluZ1RpbnQ6ICNmOWQ4Mzc7XHJcblxyXG4kZGFuZ2VyOiAjZDYzYTQyO1xyXG4kZGFuZ2VyUkdCOiAyMTQsIDU4LCA2NjtcclxuJGRhbmdlckNvbnRyYXN0OiAjZmZmZmZmO1xyXG4kZGFuZ2VyQ29udHJhc3RSR0I6IDI1NSwgMjU1LCAyNTU7XHJcbiRkYW5nZXJTaGFkZTogI2JjMzMzYTtcclxuJGRhbmdlclRpbnQ6ICNkYTRlNTU7XHJcblxyXG4kbWVkaXVtOiAjMWUxZTFlO1xyXG4kbWVkaXVtUkdCOiAzMCwgMzAsIDMwO1xyXG4kbWVkaXVtQ29udHJhc3Q6ICNmZmZmZmY7XHJcbiRtZWRpdW1Db250cmFzdFJHQjogMjU1LCAyNTUsIDI1NTtcclxuJG1lZGl1bVNoYWRlOiAjMWExYTFhO1xyXG4kbWVkaXVtVGludDogIzM1MzUzNTtcclxuXHJcbiRsaWdodDogI2ZmZmZmZjtcclxuJGxpZ2h0UkdCOiAyNTUsIDI1NSwgMjU1O1xyXG4kbGlnaHRDb250cmFzdDogI2ZmZmZmZjtcclxuJGxpZ2h0Q29udHJhc3RSR0I6IDI1NSwgMjU1LCAyNTU7XHJcbiRsaWdodFNoYWRlOiAjZTBlMGUwO1xyXG4kbGlnaHRUaW50OiAjZmZmZmZmO1xyXG5cclxuJGJhY2tncm91bmRDb2xvcjogI2ZmZmZmZjtcclxuJGJhY2tncm91bmRDb2xvclJHQjogMTEsIDEyLCAyMjtcclxuJGl0ZW1CYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4kY2FyZEJhY2tncm91bmQ6ICNmN2Y3Zjc7XHJcbiRkaWFsb2dCYWNrZ3JvdW5kOiAjMTYxNzI0O1xyXG5cclxuJHRleHRDb2xvcjogIzFlMWUxZTtcclxuJHRleHRDb2xvclJHQjogMjU1LCAyNTUsIDI1NTtcclxuJHNlY29uZGFyeVRleHRDb2xvcjogI2EwYTBhMDtcclxuJHRlcnRpYXJ5VGV4dENvbG9yOiAjYjViNWI1O1xyXG4kbGlnaHRUZXh0Q29sb3I6ICNhYWFjYjc7XHJcbiRkYXJrVGV4dENvbG9yOiAjMGEwYjE1O1xyXG4kcGxhY2Vob2xkZXJUZXh0Q29sb3I6ICMzOTNiNGE7XHJcblxyXG4vLyBTaXplIFZhcmlhYmxlc1xyXG4kYXBwSGVhZGVySGVpZ2h0OiA2MHB4O1xyXG4kYXBwQm9yZGVyUmFkaXVzOiAxMHB4O1xyXG4kaW5uZXJCb3JkZXJSYWRpdXM6IDZweDtcclxuJGRlc2t0b3BQYWRkaW5nOiAzMHB4O1xyXG4kcHJpbWFyeVBhZGRpbmc6IDIwcHg7XHJcbiRtZWRpdW1QYWRkaW5nOiA0MHB4O1xyXG4kbGFyZ2VQYWRkaW5nOiA4MHB4O1xyXG5cclxuJHByaW1hcnlNYXJnaW46IDMwcHg7XHJcbiRzZWNvbmRhcnlNYXJnaW46IDIwcHg7XHJcbiRsYXJnZU1hcmdpbjogNTBweDtcclxuJGxpbmVIZWlnaHQ6IDUwcHg7XHJcblxyXG4kbGFyZ2VNb2R1bGVTcGFjaW5nOiAxNTBweDtcclxuJG1vZHVsZVNwYWNpbmc6IDUwcHg7XHJcbiRsYXJnZUltYWdlVGV4dFNwYWNpbmc6IDQwcHg7XHJcbiRjYXJkU3BhY2luZzogMzBweDtcclxuJGNhcmRTcGFjaW5nU21hbGw6IDE2cHg7XHJcbiRpbWFnZVRleHRTcGFjaW5nOiAxMnB4O1xyXG4kdGV4dExpbmVTcGFjaW5nOiA2cHg7XHJcblxyXG4kYXBwRm9udFNpemVTbWFsbDogMTJweDtcclxuJGFwcEZvbnRTaXplUmVndWxhcjogMTRweDtcclxuJGFwcEZvbnRTaXplTGFyZ2U6IDE2cHg7XHJcbiRhcHBGb250U2l6ZUltcG9ydGFudDogMThweDtcclxuJGFwcEZvbnRTaXplVGl0bGU6IDI0cHg7XHJcbiRhcHBGb250U2l6ZU1lZGl1bVRpdGxlOiAzMnB4O1xyXG4kYXBwRm9udFNpemVMYXJnZVRpdGxlOiA0MnB4O1xyXG4kYXBwRm9udFNpemVGb2N1czogNjRweDtcclxuJGFwcEZvbnRTaXplTG9nb1RpdGxlOiA4NnB4O1xyXG4kYXBwTGFyZ2VzdEZvbnRTaXplOiAxMzJweDtcclxuIl19 */";

/***/ }),

/***/ 4716:
/*!*************************************************************************!*\
  !*** ./src/app/components/status-content/status-content.component.scss ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "ion-refresher {\n  z-index: 520;\n}\n\n.loading {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  padding: var(--status-content-padding, 60px);\n}\n\n.loading > div.inner-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  margin-top: 20px;\n}\n\n.loading > div.inner-wrapper > ion-spinner {\n  display: block;\n}\n\n.loading > div.inner-wrapper > ion-text {\n  display: block;\n  margin-top: 10px;\n}\n\n.error {\n  position: relative;\n  width: 100%;\n  margin-top: 20px;\n  padding: var(--status-content-padding, 60px);\n}\n\n.error > div.inner-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.error > div.inner-wrapper > ion-img {\n  width: 300px;\n}\n\n.error > div.inner-wrapper > div.description {\n  width: 260px;\n}\n\n.error > div.inner-wrapper > div.description > h3 {\n  width: 100%;\n  text-align: center;\n  font-size: 14px;\n  color: var(--ion-text-color);\n}\n\n.error > div.inner-wrapper > div.description > p {\n  width: 100%;\n  text-align: center;\n  font-size: 12px;\n  color: var(--ion-text-color);\n  margin-top: 10px;\n}\n\n.error > div.inner-wrapper > ion-button {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXR1cy1jb250ZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDRDQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUNJO0VBQ0UsY0FBQTtBQUNOOztBQUVJO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBQU47O0FBS0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLDRDQUFBO0FBRkY7O0FBSUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUZKOztBQUlJO0VBQ0UsWUFBQTtBQUZOOztBQUtJO0VBQ0UsWUFBQTtBQUhOOztBQUtNO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0FBSFI7O0FBTU07RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQUpSOztBQVFJO0VBQ0UsZ0JBQUE7QUFOTiIsImZpbGUiOiJzdGF0dXMtY29udGVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1yZWZyZXNoZXIge1xyXG4gIHotaW5kZXg6IDUyMDtcclxufVxyXG5cclxuLmxvYWRpbmcge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZzogdmFyKC0tc3RhdHVzLWNvbnRlbnQtcGFkZGluZywgNjBweCk7XHJcblxyXG4gID4gZGl2LmlubmVyLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG5cclxuICAgID4gaW9uLXNwaW5uZXIge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuXHJcbiAgICA+IGlvbi10ZXh0IHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZXJyb3Ige1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIHBhZGRpbmc6IHZhcigtLXN0YXR1cy1jb250ZW50LXBhZGRpbmcsIDYwcHgpO1xyXG5cclxuICA+IGRpdi5pbm5lci13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICA+IGlvbi1pbWcge1xyXG4gICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgPiBkaXYuZGVzY3JpcHRpb24ge1xyXG4gICAgICB3aWR0aDogMjYwcHg7XHJcblxyXG4gICAgICA+IGgzIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgID4gcCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICA+IGlvbi1idXR0b24ge1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */";

/***/ }),

/***/ 377:
/*!*********************************************************************!*\
  !*** ./src/app/components/status-image/status-image.component.scss ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "div.image-wrapper {\n  position: relative;\n}\ndiv.image-wrapper > ion-img {\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center;\n  left: 0;\n  top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXR1cy1pbWFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0Y7QUFDRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0FBQ0oiLCJmaWxlIjoic3RhdHVzLWltYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LmltYWdlLXdyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBcclxuICA+aW9uLWltZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgfVxyXG59Il19 */";

/***/ }),

/***/ 6546:
/*!*******************************************************************!*\
  !*** ./src/app/layout/common-footer/common-footer.component.scss ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "div.footer-container {\n  width: 100%;\n  padding: 40px 0;\n  background-color: #ffffff;\n}\ndiv.footer-container.desktop > div.app-container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\ndiv.footer-container.desktop > div.app-container > div.layout-start > ul {\n  display: flex;\n  align-items: center;\n}\ndiv.footer-container.desktop > div.app-container > div.layout-start > ul > li {\n  display: block;\n  cursor: pointer;\n}\ndiv.footer-container.desktop > div.app-container > div.layout-start > ul > li:not(:first-of-type) {\n  margin-left: 40px;\n}\ndiv.footer-container.desktop > div.app-container > div.layout-start > ul > li > ion-icon {\n  display: block;\n  font-size: 24px;\n  color: #a0a0a0;\n}\ndiv.footer-container.desktop > div.app-container > div.layout-start > ul > li > ion-icon:hover {\n  color: #1e1e1e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi1mb290ZXIuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFx0aGVtZVxcdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQ3NEZTtBRHZEakI7QUFJSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBRk47QUFLUTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUhWO0FBS1U7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQUhaO0FBS1k7RUFDRSxpQkFBQTtBQUhkO0FBTVk7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNDb0NPO0FEeENyQjtBQU1jO0VBQ0UsY0MrQko7QURuQ1oiLCJmaWxlIjoiY29tbW9uLWZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ2YXJpYWJsZXMuc2Nzc1wiO1xyXG5cclxuZGl2LmZvb3Rlci1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDQwcHggMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkaXRlbUJhY2tncm91bmQ7XHJcblxyXG4gICYuZGVza3RvcCB7XHJcbiAgICA+ZGl2LmFwcC1jb250YWluZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIFxyXG4gICAgICA+ZGl2LmxheW91dC1zdGFydCB7XHJcbiAgICAgICAgPnVsIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgID5saSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICAmOm5vdCg6Zmlyc3Qtb2YtdHlwZSkge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICA+aW9uLWljb24ge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgICBjb2xvcjogJHNlY29uZGFyeVRleHRDb2xvcjtcclxuXHJcbiAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHRleHRDb2xvcjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgPmRpdi5sYXlvdXQtZW5kIHtcclxuICAgICAgICA+c3BhbiB7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLnBhZCB7XHJcblxyXG4gIH1cclxuXHJcbiAgJi5waG9uZSB7XHJcblxyXG4gIH1cclxufSIsIi8vIENvbG9ycyBWYXJpYWJsZXNcclxuJHByaW1hcnk6ICM1NDMzZmY7XHJcbiRwcmltYXJ5UkdCOiA4NCwgNTEsIDI1NTtcclxuJHByaW1hcnlDb250cmFzdDogI2ZmZmZmZjtcclxuJHByaW1hcnlDb250cmFzdFJHQjogMjU1LCAyNTUsIDI1NTtcclxuJHByaW1hcnlTaGFkZTogIzRhMmRlMDtcclxuJHByaW1hcnlUaW50OiAjNjU0N2ZmO1xyXG5cclxuJHNlY29uZGFyeTogIzUyNjBmZjtcclxuJHNlY29uZGFyeVJHQjogODIsIDk2LCAyNTU7XHJcbiRzZWNvbmRhcnlDb250cmFzdDogI2ZmZmZmZjtcclxuJHNlY29uZGFyeUNvbnRyYXN0UkdCOiAyNTUsIDI1NSwgMjU1O1xyXG4kc2Vjb25kYXJ5U2hhZGU6ICM0ODU0ZTA7XHJcbiRzZWNvbmRhcnlUaW50OiAjNGZhNGY5O1xyXG5cclxuJHRlcnRpYXJ5OiAjM2I5YWY4O1xyXG4kdGVydGlhcnlSR0I6IDU5LCAxNTQsIDI0ODtcclxuJHRlcnRpYXJ5Q29udHJhc3Q6ICNmZmZmZmY7XHJcbiR0ZXJ0aWFyeUNvbnRyYXN0UkdCOiAyNTUsIDI1NSwgMjU1O1xyXG4kdGVydGlhcnlTaGFkZTogIzM0ODhkYTtcclxuJHRlcnRpYXJ5VGludDogIzUwNzRmZDtcclxuXHJcbiRzdWNjZXNzOiAjMmRkMzZmO1xyXG4kc3VjY2Vzc1JHQjogNDUsIDIxMSwgMTExO1xyXG4kc3VjY2Vzc0NvbnRyYXN0OiAjMDAwMDAwO1xyXG4kc3VjY2Vzc0NvbnRyYXN0UkdCOiAwLCAwLCAwO1xyXG4kc3VjY2Vzc1NoYWRlOiAjMjhiYTYyO1xyXG4kc3VjY2Vzc1RpbnQ6ICM0MmQ3N2Q7XHJcblxyXG4kd2FybmluZzogI2Y4ZDQyMTtcclxuJHdhcm5pbmdSR0I6IDI0OCwgMjEyLCAzMztcclxuJHdhcm5pbmdDb250cmFzdDogIzAwMDAwMDtcclxuJHdhcm5pbmdDb250cmFzdFJHQjogMCwgMCwgMDtcclxuJHdhcm5pbmdTaGFkZTogI2RhYmIxZDtcclxuJHdhcm5pbmdUaW50OiAjZjlkODM3O1xyXG5cclxuJGRhbmdlcjogI2Q2M2E0MjtcclxuJGRhbmdlclJHQjogMjE0LCA1OCwgNjY7XHJcbiRkYW5nZXJDb250cmFzdDogI2ZmZmZmZjtcclxuJGRhbmdlckNvbnRyYXN0UkdCOiAyNTUsIDI1NSwgMjU1O1xyXG4kZGFuZ2VyU2hhZGU6ICNiYzMzM2E7XHJcbiRkYW5nZXJUaW50OiAjZGE0ZTU1O1xyXG5cclxuJG1lZGl1bTogIzFlMWUxZTtcclxuJG1lZGl1bVJHQjogMzAsIDMwLCAzMDtcclxuJG1lZGl1bUNvbnRyYXN0OiAjZmZmZmZmO1xyXG4kbWVkaXVtQ29udHJhc3RSR0I6IDI1NSwgMjU1LCAyNTU7XHJcbiRtZWRpdW1TaGFkZTogIzFhMWExYTtcclxuJG1lZGl1bVRpbnQ6ICMzNTM1MzU7XHJcblxyXG4kbGlnaHQ6ICNmZmZmZmY7XHJcbiRsaWdodFJHQjogMjU1LCAyNTUsIDI1NTtcclxuJGxpZ2h0Q29udHJhc3Q6ICNmZmZmZmY7XHJcbiRsaWdodENvbnRyYXN0UkdCOiAyNTUsIDI1NSwgMjU1O1xyXG4kbGlnaHRTaGFkZTogI2UwZTBlMDtcclxuJGxpZ2h0VGludDogI2ZmZmZmZjtcclxuXHJcbiRiYWNrZ3JvdW5kQ29sb3I6ICNmZmZmZmY7XHJcbiRiYWNrZ3JvdW5kQ29sb3JSR0I6IDExLCAxMiwgMjI7XHJcbiRpdGVtQmFja2dyb3VuZDogI2ZmZmZmZjtcclxuJGNhcmRCYWNrZ3JvdW5kOiAjZjdmN2Y3O1xyXG4kZGlhbG9nQmFja2dyb3VuZDogIzE2MTcyNDtcclxuXHJcbiR0ZXh0Q29sb3I6ICMxZTFlMWU7XHJcbiR0ZXh0Q29sb3JSR0I6IDI1NSwgMjU1LCAyNTU7XHJcbiRzZWNvbmRhcnlUZXh0Q29sb3I6ICNhMGEwYTA7XHJcbiR0ZXJ0aWFyeVRleHRDb2xvcjogI2I1YjViNTtcclxuJGxpZ2h0VGV4dENvbG9yOiAjYWFhY2I3O1xyXG4kZGFya1RleHRDb2xvcjogIzBhMGIxNTtcclxuJHBsYWNlaG9sZGVyVGV4dENvbG9yOiAjMzkzYjRhO1xyXG5cclxuLy8gU2l6ZSBWYXJpYWJsZXNcclxuJGFwcEhlYWRlckhlaWdodDogNjBweDtcclxuJGFwcEJvcmRlclJhZGl1czogMTBweDtcclxuJGlubmVyQm9yZGVyUmFkaXVzOiA2cHg7XHJcbiRkZXNrdG9wUGFkZGluZzogMzBweDtcclxuJHByaW1hcnlQYWRkaW5nOiAyMHB4O1xyXG4kbWVkaXVtUGFkZGluZzogNDBweDtcclxuJGxhcmdlUGFkZGluZzogODBweDtcclxuXHJcbiRwcmltYXJ5TWFyZ2luOiAzMHB4O1xyXG4kc2Vjb25kYXJ5TWFyZ2luOiAyMHB4O1xyXG4kbGFyZ2VNYXJnaW46IDUwcHg7XHJcbiRsaW5lSGVpZ2h0OiA1MHB4O1xyXG5cclxuJGxhcmdlTW9kdWxlU3BhY2luZzogMTUwcHg7XHJcbiRtb2R1bGVTcGFjaW5nOiA1MHB4O1xyXG4kbGFyZ2VJbWFnZVRleHRTcGFjaW5nOiA0MHB4O1xyXG4kY2FyZFNwYWNpbmc6IDMwcHg7XHJcbiRjYXJkU3BhY2luZ1NtYWxsOiAxNnB4O1xyXG4kaW1hZ2VUZXh0U3BhY2luZzogMTJweDtcclxuJHRleHRMaW5lU3BhY2luZzogNnB4O1xyXG5cclxuJGFwcEZvbnRTaXplU21hbGw6IDEycHg7XHJcbiRhcHBGb250U2l6ZVJlZ3VsYXI6IDE0cHg7XHJcbiRhcHBGb250U2l6ZUxhcmdlOiAxNnB4O1xyXG4kYXBwRm9udFNpemVJbXBvcnRhbnQ6IDE4cHg7XHJcbiRhcHBGb250U2l6ZVRpdGxlOiAyNHB4O1xyXG4kYXBwRm9udFNpemVNZWRpdW1UaXRsZTogMzJweDtcclxuJGFwcEZvbnRTaXplTGFyZ2VUaXRsZTogNDJweDtcclxuJGFwcEZvbnRTaXplRm9jdXM6IDY0cHg7XHJcbiRhcHBGb250U2l6ZUxvZ29UaXRsZTogODZweDtcclxuJGFwcExhcmdlc3RGb250U2l6ZTogMTMycHg7XHJcbiJdfQ== */";

/***/ }),

/***/ 2071:
/*!*******************************************************************!*\
  !*** ./src/app/layout/common-header/common-header.component.scss ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "div.header-container.desktop div.app-container > div.header-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  height: 60px;\n  overflow: hidden;\n}\ndiv.header-container.desktop div.app-container > div.header-wrapper > div.layout-start {\n  display: flex;\n  align-items: cneter;\n}\ndiv.header-container.desktop div.app-container > div.header-wrapper > div.layout-start > div.logo-wrapper {\n  cursor: pointer;\n}\ndiv.header-container.desktop div.app-container > div.header-wrapper > div.layout-start > div.logo-wrapper > img {\n  display: block;\n  height: 120px;\n  object-position: center;\n  width: auto;\n}\ndiv.header-container.desktop div.app-container > div.header-wrapper > div.layout-end > ul {\n  display: flex;\n  align-items: center;\n}\ndiv.header-container.desktop div.app-container > div.header-wrapper > div.layout-end > ul > li {\n  position: relative;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n}\ndiv.header-container.desktop div.app-container > div.header-wrapper > div.layout-end > ul > li:not(:first-of-type) {\n  margin-left: 30px;\n  padding-left: 30px;\n}\ndiv.header-container.desktop div.app-container > div.header-wrapper > div.layout-end > ul > li:not(:first-of-type):before {\n  position: absolute;\n  display: block;\n  content: \"\";\n  width: 1px;\n  height: 16px;\n  background-color: #fff;\n  left: 0;\n  top: calc(50% - 8px);\n  opacity: 0.3;\n}\ndiv.header-container.desktop div.app-container > div.header-wrapper > div.layout-end > ul > li > ion-icon {\n  display: block;\n  font-size: 20px;\n  margin-right: 10px;\n}\ndiv.header-container.desktop div.app-container > div.header-wrapper > div.layout-end > ul > li > span {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFx0aGVtZVxcdmFyaWFibGVzLnNjc3MiLCIuLlxcLi5cXC4uXFx0aGVtZVxcbWl4aW4uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLFlDNkRVO0VENURWLGdCQUFBO0FBTFI7QUFPUTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUxWO0FBT1U7RUFDRSxlQUFBO0FBTFo7QUFPWTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FBTGQ7QUFXVTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQVRaO0FBV1k7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUUwQ1osYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUYxQ1ksZUN3REs7QUQvRG5CO0FBU2M7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBUGhCO0FBU2dCO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxPQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FBUGxCO0FBV2M7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBVGhCO0FBWWM7RUFDRSxjQUFBO0FBVmhCIiwiZmlsZSI6ImNvbW1vbi1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwidmFyaWFibGVzLnNjc3NcIjtcclxuQGltcG9ydCBcIm1peGluLnNjc3NcIjtcclxuXHJcbmRpdi5oZWFkZXItY29udGFpbmVyIHtcclxuICAmLmRlc2t0b3Age1xyXG4gICAgZGl2LmFwcC1jb250YWluZXIge1xyXG4gICAgICA+ZGl2LmhlYWRlci13cmFwcGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogJGFwcEhlYWRlckhlaWdodDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgXHJcbiAgICAgICAgPmRpdi5sYXlvdXQtc3RhcnQge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjbmV0ZXI7XHJcbiAgICBcclxuICAgICAgICAgID5kaXYubG9nby13cmFwcGVyIHtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgXHJcbiAgICAgICAgICAgID5pbWcge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICAgICAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICA+ZGl2LmxheW91dC1lbmQge1xyXG4gICAgICAgICAgPnVsIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIFxyXG4gICAgICAgICAgICA+bGkge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgQGluY2x1ZGUgYWxpZ24tY2VudGVyKCk7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAkYXBwRm9udFNpemVMYXJnZTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICY6bm90KDpmaXJzdC1vZi10eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMXB4O1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgIHRvcDogY2FsYyg1MCUgLSAxNnB4LzIpO1xyXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgPmlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgPnNwYW4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLnBhZCB7XHJcblxyXG4gIH1cclxuXHJcbiAgJi5waG9uZSB7XHJcblxyXG4gIH1cclxufSIsIi8vIENvbG9ycyBWYXJpYWJsZXNcclxuJHByaW1hcnk6ICM1NDMzZmY7XHJcbiRwcmltYXJ5UkdCOiA4NCwgNTEsIDI1NTtcclxuJHByaW1hcnlDb250cmFzdDogI2ZmZmZmZjtcclxuJHByaW1hcnlDb250cmFzdFJHQjogMjU1LCAyNTUsIDI1NTtcclxuJHByaW1hcnlTaGFkZTogIzRhMmRlMDtcclxuJHByaW1hcnlUaW50OiAjNjU0N2ZmO1xyXG5cclxuJHNlY29uZGFyeTogIzUyNjBmZjtcclxuJHNlY29uZGFyeVJHQjogODIsIDk2LCAyNTU7XHJcbiRzZWNvbmRhcnlDb250cmFzdDogI2ZmZmZmZjtcclxuJHNlY29uZGFyeUNvbnRyYXN0UkdCOiAyNTUsIDI1NSwgMjU1O1xyXG4kc2Vjb25kYXJ5U2hhZGU6ICM0ODU0ZTA7XHJcbiRzZWNvbmRhcnlUaW50OiAjNGZhNGY5O1xyXG5cclxuJHRlcnRpYXJ5OiAjM2I5YWY4O1xyXG4kdGVydGlhcnlSR0I6IDU5LCAxNTQsIDI0ODtcclxuJHRlcnRpYXJ5Q29udHJhc3Q6ICNmZmZmZmY7XHJcbiR0ZXJ0aWFyeUNvbnRyYXN0UkdCOiAyNTUsIDI1NSwgMjU1O1xyXG4kdGVydGlhcnlTaGFkZTogIzM0ODhkYTtcclxuJHRlcnRpYXJ5VGludDogIzUwNzRmZDtcclxuXHJcbiRzdWNjZXNzOiAjMmRkMzZmO1xyXG4kc3VjY2Vzc1JHQjogNDUsIDIxMSwgMTExO1xyXG4kc3VjY2Vzc0NvbnRyYXN0OiAjMDAwMDAwO1xyXG4kc3VjY2Vzc0NvbnRyYXN0UkdCOiAwLCAwLCAwO1xyXG4kc3VjY2Vzc1NoYWRlOiAjMjhiYTYyO1xyXG4kc3VjY2Vzc1RpbnQ6ICM0MmQ3N2Q7XHJcblxyXG4kd2FybmluZzogI2Y4ZDQyMTtcclxuJHdhcm5pbmdSR0I6IDI0OCwgMjEyLCAzMztcclxuJHdhcm5pbmdDb250cmFzdDogIzAwMDAwMDtcclxuJHdhcm5pbmdDb250cmFzdFJHQjogMCwgMCwgMDtcclxuJHdhcm5pbmdTaGFkZTogI2RhYmIxZDtcclxuJHdhcm5pbmdUaW50OiAjZjlkODM3O1xyXG5cclxuJGRhbmdlcjogI2Q2M2E0MjtcclxuJGRhbmdlclJHQjogMjE0LCA1OCwgNjY7XHJcbiRkYW5nZXJDb250cmFzdDogI2ZmZmZmZjtcclxuJGRhbmdlckNvbnRyYXN0UkdCOiAyNTUsIDI1NSwgMjU1O1xyXG4kZGFuZ2VyU2hhZGU6ICNiYzMzM2E7XHJcbiRkYW5nZXJUaW50OiAjZGE0ZTU1O1xyXG5cclxuJG1lZGl1bTogIzFlMWUxZTtcclxuJG1lZGl1bVJHQjogMzAsIDMwLCAzMDtcclxuJG1lZGl1bUNvbnRyYXN0OiAjZmZmZmZmO1xyXG4kbWVkaXVtQ29udHJhc3RSR0I6IDI1NSwgMjU1LCAyNTU7XHJcbiRtZWRpdW1TaGFkZTogIzFhMWExYTtcclxuJG1lZGl1bVRpbnQ6ICMzNTM1MzU7XHJcblxyXG4kbGlnaHQ6ICNmZmZmZmY7XHJcbiRsaWdodFJHQjogMjU1LCAyNTUsIDI1NTtcclxuJGxpZ2h0Q29udHJhc3Q6ICNmZmZmZmY7XHJcbiRsaWdodENvbnRyYXN0UkdCOiAyNTUsIDI1NSwgMjU1O1xyXG4kbGlnaHRTaGFkZTogI2UwZTBlMDtcclxuJGxpZ2h0VGludDogI2ZmZmZmZjtcclxuXHJcbiRiYWNrZ3JvdW5kQ29sb3I6ICNmZmZmZmY7XHJcbiRiYWNrZ3JvdW5kQ29sb3JSR0I6IDExLCAxMiwgMjI7XHJcbiRpdGVtQmFja2dyb3VuZDogI2ZmZmZmZjtcclxuJGNhcmRCYWNrZ3JvdW5kOiAjZjdmN2Y3O1xyXG4kZGlhbG9nQmFja2dyb3VuZDogIzE2MTcyNDtcclxuXHJcbiR0ZXh0Q29sb3I6ICMxZTFlMWU7XHJcbiR0ZXh0Q29sb3JSR0I6IDI1NSwgMjU1LCAyNTU7XHJcbiRzZWNvbmRhcnlUZXh0Q29sb3I6ICNhMGEwYTA7XHJcbiR0ZXJ0aWFyeVRleHRDb2xvcjogI2I1YjViNTtcclxuJGxpZ2h0VGV4dENvbG9yOiAjYWFhY2I3O1xyXG4kZGFya1RleHRDb2xvcjogIzBhMGIxNTtcclxuJHBsYWNlaG9sZGVyVGV4dENvbG9yOiAjMzkzYjRhO1xyXG5cclxuLy8gU2l6ZSBWYXJpYWJsZXNcclxuJGFwcEhlYWRlckhlaWdodDogNjBweDtcclxuJGFwcEJvcmRlclJhZGl1czogMTBweDtcclxuJGlubmVyQm9yZGVyUmFkaXVzOiA2cHg7XHJcbiRkZXNrdG9wUGFkZGluZzogMzBweDtcclxuJHByaW1hcnlQYWRkaW5nOiAyMHB4O1xyXG4kbWVkaXVtUGFkZGluZzogNDBweDtcclxuJGxhcmdlUGFkZGluZzogODBweDtcclxuXHJcbiRwcmltYXJ5TWFyZ2luOiAzMHB4O1xyXG4kc2Vjb25kYXJ5TWFyZ2luOiAyMHB4O1xyXG4kbGFyZ2VNYXJnaW46IDUwcHg7XHJcbiRsaW5lSGVpZ2h0OiA1MHB4O1xyXG5cclxuJGxhcmdlTW9kdWxlU3BhY2luZzogMTUwcHg7XHJcbiRtb2R1bGVTcGFjaW5nOiA1MHB4O1xyXG4kbGFyZ2VJbWFnZVRleHRTcGFjaW5nOiA0MHB4O1xyXG4kY2FyZFNwYWNpbmc6IDMwcHg7XHJcbiRjYXJkU3BhY2luZ1NtYWxsOiAxNnB4O1xyXG4kaW1hZ2VUZXh0U3BhY2luZzogMTJweDtcclxuJHRleHRMaW5lU3BhY2luZzogNnB4O1xyXG5cclxuJGFwcEZvbnRTaXplU21hbGw6IDEycHg7XHJcbiRhcHBGb250U2l6ZVJlZ3VsYXI6IDE0cHg7XHJcbiRhcHBGb250U2l6ZUxhcmdlOiAxNnB4O1xyXG4kYXBwRm9udFNpemVJbXBvcnRhbnQ6IDE4cHg7XHJcbiRhcHBGb250U2l6ZVRpdGxlOiAyNHB4O1xyXG4kYXBwRm9udFNpemVNZWRpdW1UaXRsZTogMzJweDtcclxuJGFwcEZvbnRTaXplTGFyZ2VUaXRsZTogNDJweDtcclxuJGFwcEZvbnRTaXplRm9jdXM6IDY0cHg7XHJcbiRhcHBGb250U2l6ZUxvZ29UaXRsZTogODZweDtcclxuJGFwcExhcmdlc3RGb250U2l6ZTogMTMycHg7XHJcbiIsIkBpbXBvcnQgXCJ2YXJpYWJsZXMuc2Nzc1wiO1xyXG5cclxuQG1peGluIHNjcm9sbGJhcigkdHJhY2tDb2xvcjogI3skYmFja2dyb3VuZENvbG9yfSwgJHRodW1iQ29sb3I6ICN7JHByaW1hcnl9KSB7XHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDhweDtcclxuICB9XHJcblxyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR0cmFja0NvbG9yO1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAyZW07XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJlbTtcclxuICB9XHJcblxyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR0aHVtYkNvbG9yO1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAyZW07XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJlbTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBsaW5lLWNsYW1wKCRsaW5lcykge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAkbGluZXM7XHJcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxufVxyXG5cclxuQG1peGluIGNsZWFyZml4IHtcclxuICAmOmFmdGVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gc2luZ2xlLWxpbmUoKSB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcblxyXG5AbWl4aW4gdHJpYW5nbGUoJHdpZHRoLCAkaGVpZ2h0LCAkY29sb3IsICRkaXJlY3Rpb24pIHtcclxuICAkd2lkdGg6ICR3aWR0aC8yO1xyXG4gICRjb2xvci1ib3JkZXItc3R5bGU6ICRoZWlnaHQgc29saWQgJGNvbG9yO1xyXG4gICR0cmFuc3BhcmVudC1ib3JkZXItc3R5bGU6ICR3aWR0aCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBoZWlnaHQ6IDA7XHJcbiAgd2lkdGg6IDA7XHJcblxyXG4gIEBpZiAkZGlyZWN0aW9uID09IHVwIHtcclxuICAgIGJvcmRlci1ib3R0b206ICRjb2xvci1ib3JkZXItc3R5bGU7XHJcbiAgICBib3JkZXItbGVmdDogJHRyYW5zcGFyZW50LWJvcmRlci1zdHlsZTtcclxuICAgIGJvcmRlci1yaWdodDogJHRyYW5zcGFyZW50LWJvcmRlci1zdHlsZTtcclxuICB9XHJcblxyXG4gIEBlbHNlIGlmICRkaXJlY3Rpb24gPT0gcmlnaHQge1xyXG4gICAgYm9yZGVyLWxlZnQ6ICRjb2xvci1ib3JkZXItc3R5bGU7XHJcbiAgICBib3JkZXItdG9wOiAkdHJhbnNwYXJlbnQtYm9yZGVyLXN0eWxlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogJHRyYW5zcGFyZW50LWJvcmRlci1zdHlsZTtcclxuICB9XHJcblxyXG4gIEBlbHNlIGlmICRkaXJlY3Rpb24gPT0gZG93biB7XHJcbiAgICBib3JkZXItdG9wOiAkY29sb3ItYm9yZGVyLXN0eWxlO1xyXG4gICAgYm9yZGVyLWxlZnQ6ICR0cmFuc3BhcmVudC1ib3JkZXItc3R5bGU7XHJcbiAgICBib3JkZXItcmlnaHQ6ICR0cmFuc3BhcmVudC1ib3JkZXItc3R5bGU7XHJcbiAgfVxyXG5cclxuICBAZWxzZSBpZiAkZGlyZWN0aW9uID09IGxlZnQge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAkY29sb3ItYm9yZGVyLXN0eWxlO1xyXG4gICAgYm9yZGVyLXRvcDogJHRyYW5zcGFyZW50LWJvcmRlci1zdHlsZTtcclxuICAgIGJvcmRlci1ib3R0b206ICR0cmFuc3BhcmVudC1ib3JkZXItc3R5bGU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gYWxpZ24tY2VudGVyKCkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuQG1peGluIGFsaWduLWNlbnRlci12ZXJ0aWNhbCgpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbkBtaXhpbiBhbGlnbi1jZW50ZXItaG9yaXpvbnRhbCgpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5AbWl4aW4gdW5kZXJsaW5lLWVmZmVjdCgkY29sb3I6ICRwcmltYXJ5LCAkaGVpZ2h0OiA0cHgsICRkdXJhdGlvbjogMC41cykge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICY6YWZ0ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAkaGVpZ2h0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsICRkdXJhdGlvbjtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDAuNCk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuXHJcbiAgJi5hY3RpdmUge1xyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDEuMCk7XHJcbiAgICAgIG9wYWNpdHk6IDEuMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=default-src_app_base_base-page_ts-src_app_modules_layout_layout_module_ts-src_app_modules_sha-4fb023.js.map