"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_submit-article_submit-article_module_ts"],{

/***/ 7507:
/*!***********************************************************************!*\
  !*** ./src/app/pages/submit-article/submit-article-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubmitArticlePageRoutingModule": () => (/* binding */ SubmitArticlePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _submit_article_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./submit-article.page */ 6113);




const routes = [
    {
        path: '',
        component: _submit_article_page__WEBPACK_IMPORTED_MODULE_0__.SubmitArticlePage
    }
];
let SubmitArticlePageRoutingModule = class SubmitArticlePageRoutingModule {
};
SubmitArticlePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SubmitArticlePageRoutingModule);



/***/ }),

/***/ 2390:
/*!***************************************************************!*\
  !*** ./src/app/pages/submit-article/submit-article.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubmitArticlePageModule": () => (/* binding */ SubmitArticlePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _submit_article_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./submit-article-routing.module */ 7507);
/* harmony import */ var _submit_article_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./submit-article.page */ 6113);
/* harmony import */ var src_app_modules_share_share_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/share/share.module */ 6672);
/* harmony import */ var src_app_modules_layout_layout_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/layout/layout.module */ 5358);









let SubmitArticlePageModule = class SubmitArticlePageModule {
};
SubmitArticlePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            src_app_modules_share_share_module__WEBPACK_IMPORTED_MODULE_2__.ShareModule,
            src_app_modules_layout_layout_module__WEBPACK_IMPORTED_MODULE_3__.LayoutModule,
            _submit_article_routing_module__WEBPACK_IMPORTED_MODULE_0__.SubmitArticlePageRoutingModule,
        ],
        declarations: [_submit_article_page__WEBPACK_IMPORTED_MODULE_1__.SubmitArticlePage],
    })
], SubmitArticlePageModule);



/***/ }),

/***/ 6113:
/*!*************************************************************!*\
  !*** ./src/app/pages/submit-article/submit-article.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubmitArticlePage": () => (/* binding */ SubmitArticlePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_Project_Web_Angular_TrendBeat_node_modules_ngtools_webpack_src_loaders_direct_resource_js_submit_article_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./submit-article.page.html */ 6549);
/* harmony import */ var _submit_article_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./submit-article.page.scss */ 7471);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! class-transformer */ 8979);
/* harmony import */ var src_app_base_base_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/base/base-page */ 8920);
/* harmony import */ var src_app_beans_response_bean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/beans/response-bean */ 8974);
/* harmony import */ var src_app_providers_screen_fit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/screen-fit.service */ 6952);
/* harmony import */ var src_app_providers_theme_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/providers/theme.service */ 7440);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/api.service */ 7118);
/* harmony import */ var src_app_services_runtime_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/runtime.service */ 759);














let SubmitArticlePage = class SubmitArticlePage extends src_app_base_base_page__WEBPACK_IMPORTED_MODULE_2__.BasePage {
    constructor(loadingCtrl, toastCtrl, runtime, screenFitService, navCtrl, modalCtrl, api, router, sanitizer, routeInfo, themeService) {
        super(loadingCtrl, toastCtrl, runtime, screenFitService);
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.runtime = runtime;
        this.screenFitService = screenFitService;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.api = api;
        this.router = router;
        this.sanitizer = sanitizer;
        this.routeInfo = routeInfo;
        this.themeService = themeService;
        this.PICTURE_LIMIT_MAX = 12;
        this.KEYWORD_LIMIT_MAX = 6;
        this.mediaType = 'picture';
        this.mediaTypeName = '图片';
        this.pictureList = [];
        this.pictureURLList = [];
        this.coverImage = null;
        this.coverImageURL = '';
        this.categoryList = [];
        this.currentCategory = null;
        this.keyword = '';
        this.keywordList = [];
        this.formData = {
            title: '',
            coverImage: '',
            videoURL: '',
            summary: '',
            author: '',
            sourceURL: '',
            articleCategory: '',
            articleContent: '',
            email: '',
            wechat: '',
            phoneNumber: '',
            linkURL: '',
        };
        this.routeInfo.queryParams.subscribe((params) => {
            if (params.media) {
                this.mediaType = params.media;
                this.mediaTypeName = this.mediaType == 'video' ? '视频' : '图片';
            }
        });
    }
    ngOnInit() {
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__.NavigationEnd) {
                if (event.url == '/submit-article') {
                    this.setPageTitle('SubmitArticle');
                }
            }
        });
    }
    initData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            // fetch data or load cache
            yield Promise.all([this.fetchCategories()]);
            this.appStatusContent.invokeSuccess();
        });
    }
    ionViewWillEnter() {
        this.setPageTitle('SubmitArticle');
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
    onCoverImageFileChange(event) {
        const files = event.target.files;
        if (files.length === 0) {
            return;
        }
        this.coverImage = files[0];
        this.coverImageURL = URL.createObjectURL(this.coverImage);
        const inputElement = document.getElementById('coverImageFile');
        inputElement.value = '';
    }
    onClickUploadCoverImageFile() {
        document.getElementById('coverImageFile').click();
    }
    onClickUploadMediaFile() {
        document.getElementById('mediaFile').click();
    }
    onClickRemoveCoverImage() {
        this.coverImage = null;
        this.coverImageURL = '';
    }
    onMediaFileChange(event) {
        const files = event.target.files;
        if (files.length === 0) {
            return;
        }
        for (let index = 0; index < files.length; index++) {
            if (this.pictureList &&
                this.pictureList.length < this.PICTURE_LIMIT_MAX) {
                const mFile = files[index];
                const url = URL.createObjectURL(mFile);
                this.pictureList.push(mFile);
                this.pictureURLList.push(url);
            }
        }
        const inputElement = document.getElementById('mediaFile');
        inputElement.value = '';
    }
    onClickRemovePicture(index) {
        this.pictureList.splice(index, 1);
        this.pictureURLList.splice(index, 1);
    }
    onClickCategoryItem(item) {
        this.currentCategory = item;
    }
    onKeyup(event) {
        const code = event.code;
        switch (code) {
            case 'Enter':
                if (this.keyword) {
                    if (this.keywordList.length < this.KEYWORD_LIMIT_MAX) {
                        this.keywordList.push(this.keyword);
                        this.keyword = '';
                    }
                    else {
                        this.showToast(`最多允许添加${this.KEYWORD_LIMIT_MAX}个关键字`);
                    }
                }
                break;
        }
    }
    onClickRemoveKeyword(index) {
        this.keywordList.splice(index, 1);
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
    onImageFileChange(event) {
        console.error(event);
    }
};
SubmitArticlePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ToastController },
    { type: src_app_services_runtime_service__WEBPACK_IMPORTED_MODULE_7__.RuntimeService },
    { type: src_app_providers_screen_fit_service__WEBPACK_IMPORTED_MODULE_4__.ScreenFitService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.DomSanitizer },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: src_app_providers_theme_service__WEBPACK_IMPORTED_MODULE_5__.ThemeService }
];
SubmitArticlePage.propDecorators = {
    appStatusContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild, args: ['appStatusContent', { static: false },] }]
};
SubmitArticlePage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-submit-article',
        template: _D_Project_Web_Angular_TrendBeat_node_modules_ngtools_webpack_src_loaders_direct_resource_js_submit_article_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_submit_article_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SubmitArticlePage);



/***/ }),

/***/ 6549:
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/submit-article/submit-article.page.html ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content\n  [fullscreen]=\"themeService.immersive\"\n  [scrollEvents]=\"true\"\n  [class]=\"screenFitService.screenCategory\"\n>\n  <div\n    [class]=\"screenFitService.screenCategory\"\n    class=\"page-root submit-article\"\n  >\n    <ng-container *ngIf=\"screenFitService.screenCategory == 'desktop'\">\n      <app-status-content #appStatusContent (retry)=\"onRetry()\">\n        <div class=\"app-container\">\n          <div class=\"title\">\n            <span>为您的{{ mediaTypeName }}资讯内容投稿</span>\n          </div>\n          <div class=\"form-wrapper\">\n            <ion-item>\n              <ion-label slot=\"start\">\n                <ion-text color=\"danger\">*</ion-text>投稿标题\n              </ion-label>\n              <ion-input\n                type=\"text\"\n                [(ngModel)]=\"formData.title\"\n                placeholder=\"请填写标题内容\"\n              ></ion-input>\n            </ion-item>\n\n            <div *ngIf=\"mediaType == 'picture'\" class=\"form-item\">\n              <ion-label>\n                <ion-text color=\"danger\">*</ion-text>上传图片\n              </ion-label>\n              <input\n                id=\"mediaFile\"\n                type=\"file\"\n                multiple=\"true\"\n                style=\"display: none\"\n                accept=\"image/*\"\n                (change)=\"onMediaFileChange($event)\"\n              />\n              <ul>\n                <li *ngFor=\"let item of pictureURLList; let index = index\">\n                  <div class=\"image-box\">\n                    <div class=\"preview-box\">\n                      <ion-img [src]=\"item\"></ion-img>\n                    </div>\n\n                    <div class=\"mask-layer\">\n                      <ion-icon\n                        name=\"close-outline\"\n                        (click)=\"onClickRemovePicture(index)\"\n                      ></ion-icon>\n                    </div>\n                  </div>\n                </li>\n                <li\n                  class=\"uploader\"\n                  *ngIf=\"pictureList.length < PICTURE_LIMIT_MAX\"\n                >\n                  <div class=\"upload-box\" (click)=\"onClickUploadMediaFile()\">\n                    <ion-icon name=\"img\"></ion-icon>\n                  </div>\n                </li>\n              </ul>\n              <div class=\"tips\">\n                <span>\n                  上传您的投稿图片，支持JPG，PNG，GIF等主流格式，最多可上传12张图片，单张不超过500K，图片最佳比例16：10\n                </span>\n              </div>\n            </div>\n\n            <div *ngIf=\"mediaType == 'video'\" class=\"form-item\">\n              <ion-label\n                ><ion-text color=\"danger\">*</ion-text>视频封面</ion-label\n              >\n              <input\n                id=\"coverImageFile\"\n                type=\"file\"\n                multiple=\"true\"\n                style=\"display: none\"\n                accept=\"image/*\"\n                (change)=\"onCoverImageFileChange($event)\"\n              />\n\n              <div class=\"cover-box\">\n                <div class=\"upload-box\" (click)=\"onClickUploadCoverImageFile()\">\n                  <ion-icon name=\"img\"></ion-icon>\n                </div>\n\n                <div *ngIf=\"coverImageURL\" class=\"image-box\">\n                  <div class=\"preview-box\">\n                    <ion-img [src]=\"coverImageURL\"></ion-img>\n                  </div>\n\n                  <div class=\"mask-layer\">\n                    <ion-icon\n                      name=\"close-outline\"\n                      (click)=\"onClickRemoveCoverImage()\"\n                    ></ion-icon>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"tips\">\n                <span>\n                  上传您的投稿视频封面，支持JPG，PNG，GIF等主流格式，单张不超过500K，图片最佳比例16：10\n                </span>\n              </div>\n            </div>\n\n            <ion-item *ngIf=\"mediaType == 'video'\">\n              <ion-label slot=\"start\">\n                <ion-text color=\"danger\">*</ion-text>视频链接\n              </ion-label>\n              <ion-input\n                type=\"text\"\n                [(ngModel)]=\"formData.videoURL\"\n                placeholder=\"此处填写您的视频链接\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label slot=\"start\">\n                <ion-text color=\"danger\">*</ion-text>文章简介\n              </ion-label>\n              <ion-input\n                type=\"text\"\n                [(ngModel)]=\"formData.summary\"\n                placeholder=\"不超50字，用于简短介绍您的文章\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label slot=\"start\">\n                <ion-text color=\"danger\">*</ion-text>作者昵称\n              </ion-label>\n              <ion-input\n                type=\"text\"\n                [(ngModel)]=\"formData.author\"\n                placeholder=\"请输入您的昵称\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label slot=\"start\">来源链接</ion-label>\n              <ion-input\n                type=\"text\"\n                [(ngModel)]=\"formData.sourceURL\"\n                placeholder=\"如非原创，请输入原文链接\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label>\n                <ion-text color=\"danger\">*</ion-text>文章类型\n              </ion-label>\n              <ul>\n                <li\n                  *ngFor=\"let item of categoryList\"\n                  (click)=\"onClickCategoryItem(item)\"\n                  [ngClass]=\"{active: currentCategory && currentCategory.uid == item.uid}\"\n                >\n                  <span>{{ item.name }}</span>\n                </li>\n              </ul>\n            </ion-item>\n\n            <ion-item>\n              <ion-label>关键字</ion-label>\n              <ion-input\n                type=\"text\"\n                [(ngModel)]=\"keyword\"\n                (keyup)=\"onKeyup($event)\"\n                placeholder=\"为您的文章自定义关键词，按回车键确认，最多不超过6个\"\n              ></ion-input>\n              <ul>\n                <li\n                  *ngFor=\"let item of keywordList, let index = index\"\n                  (click)=\"onClickRemoveKeyword(index)\"\n                >\n                  <span>{{ item }}</span>\n                  <ion-icon name=\"close-outline\"></ion-icon>\n                </li>\n              </ul>\n            </ion-item>\n\n            <div class=\"form-item\">\n              <ion-label slot=\"start\">\n                <ion-text color=\"danger\">*</ion-text>文章内容\n              </ion-label>\n              <ion-textarea\n                rows=\"6\"\n                placeholder=\"此处输入您的正文内容\"\n                [(ngModel)]=\"formData.articleContent\"\n              ></ion-textarea>\n            </div>\n\n            <ion-item>\n              <ion-label slot=\"start\">\n                <ion-text color=\"danger\">*</ion-text>邮箱\n              </ion-label>\n              <ion-input\n                type=\"email\"\n                [(ngModel)]=\"formData.email\"\n                placeholder=\"输入您的邮箱，让我们可以联系到您\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label slot=\"start\">微信</ion-label>\n              <ion-input\n                type=\"text\"\n                [(ngModel)]=\"formData.wechat\"\n                placeholder=\"请输入您的微信号\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label slot=\"start\">联系电话</ion-label>\n              <ion-input\n                type=\"text\"\n                [(ngModel)]=\"formData.phoneNumber\"\n                placeholder=\"请输入您的联系电话\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label slot=\"start\">个人网址</ion-label>\n              <ion-input\n                type=\"url\"\n                [(ngModel)]=\"formData.linkURL\"\n                placeholder=\"请输入您的个人网址\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-button (click)=\"onClickSubmit()\" expand=\"block\" fill=\"outline\">\n              <ion-icon name=\"checkmark-outline\"></ion-icon>\n              <span>填写完成，投稿</span>\n            </ion-button>\n          </div>\n        </div>\n      </app-status-content>\n    </ng-container>\n\n    <ng-container *ngIf=\"screenFitService.screenCategory == 'pad'\">\n      <app-status-content #appStatusContent (retry)=\"onRetry()\">\n        <div class=\"app-container\">pad layout here</div>\n      </app-status-content>\n    </ng-container>\n\n    <ng-container *ngIf=\"screenFitService.screenCategory == 'phone'\">\n      <app-status-content #appStatusContent (retry)=\"onRetry()\">\n        <div class=\"app-container\">phone layout here</div>\n      </app-status-content>\n    </ng-container>\n  </div>\n  <app-common-footer></app-common-footer>\n</ion-content>\n");

/***/ }),

/***/ 7471:
/*!***************************************************************!*\
  !*** ./src/app/pages/submit-article/submit-article.page.scss ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "div.page-root.submit-article.desktop app-status-content div.app-container > div.title {\n  width: 100%;\n}\ndiv.page-root.submit-article.desktop app-status-content div.app-container > div.title > span {\n  width: 100%;\n  text-align: center;\n  display: block;\n  font-size: 42px;\n  font-weight: bold;\n}\ndiv.page-root.submit-article.desktop app-status-content div.app-container > div.form-wrapper {\n  width: 900px;\n  margin: 0 auto;\n}\ndiv.page-root.submit-article.desktop app-status-content div.app-container > div.form-wrapper > ion-item {\n  width: 100%;\n  margin-top: 50px;\n  --border-color: #b5b5b5 !important;\n  --padding-start: 0px !important;\n  --padding-end: 0px !important;\n}\ndiv.page-root.submit-article.desktop app-status-content div.app-container > div.form-wrapper > ion-item > ion-label {\n  font-size: 16px;\n}\ndiv.page-root.submit-article.desktop app-status-content div.app-container > div.form-wrapper > ion-item > ion-input {\n  width: auto;\n}\ndiv.page-root.submit-article.desktop app-status-content div.app-container > div.form-wrapper > div.form-item {\n  position: relative;\n  width: 100%;\n  margin-top: 50px;\n}\ndiv.page-root.submit-article.desktop app-status-content div.app-container > div.form-wrapper > div.form-item > ul {\n  position: relative;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  width: 100%;\n}\ndiv.page-root.submit-article.desktop app-status-content div.app-container > div.form-wrapper > div.form-item > ul > li {\n  position: relative;\n  display: block;\n  width: calc((100% - 20px * 2) / 3);\n  height: 9.4736842105vw;\n  min-height: 142.1052631579px;\n  margin-top: 20px;\n  margin-left: 20px;\n  border: 1px solid #1e1e1e;\n}\ndiv.page-root.submit-article.desktop app-status-content div.app-container > div.form-wrapper > div.form-item > ul > li:nth-of-type(3n + 1) {\n  margin-left: 0;\n}\ndiv.page-root.submit-article.desktop app-status-content div.app-container > div.form-wrapper > div.form-item > ul > li > div.image-box {\n  width: 100%;\n  height: 100%;\n}\ndiv.page-root.submit-article.desktop app-status-content div.app-container > div.form-wrapper > div.form-item > ul > li > div.image-box > div.preview-box {\n  width: 100%;\n  height: 100%;\n}\ndiv.page-root.submit-article.desktop app-status-content div.app-container > div.form-wrapper > div.form-item > ul > li > div.image-box > div.preview-box:hover + div.mask-layer {\n  display: block;\n}\ndiv.page-root.submit-article.desktop app-status-content div.app-container > div.form-wrapper > div.form-item > ul > li > div.image-box > div.preview-box > ion-img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center;\n}\ndiv.page-root.submit-article.desktop app-status-content div.app-container > div.form-wrapper > div.form-item > ul > li > div.image-box > div.mask-layer {\n  position: absolute;\n  display: none;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  opacity: 0;\n  transition: all 0.5s;\n}\ndiv.page-root.submit-article.desktop app-status-content div.app-container > div.form-wrapper > div.form-item > ul > li > div.image-box > div.mask-layer:hover {\n  display: block;\n  opacity: 1;\n}\ndiv.page-root.submit-article.desktop app-status-content div.app-container > div.form-wrapper > div.form-item > ul > li > div.image-box > div.mask-layer > ion-icon {\n  position: absolute;\n  display: block;\n  font-size: 26px;\n  padding: 4px;\n  border-radius: 50%;\n  background-color: rgba(0, 0, 0, 0.3);\n  color: rgba(255, 255, 255, 0.6);\n  right: 10px;\n  top: 10px;\n  cursor: pointer;\n}\ndiv.page-root.submit-article.desktop app-status-content div.app-container > div.form-wrapper > div.form-item > ul > li > div.image-box > div.mask-layer > ion-icon:hover {\n  color: white;\n}\ndiv.page-root.submit-article.desktop app-status-content div.app-container > div.form-wrapper > div.form-item > ul > li.uploader > div.upload-box {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  width: 100%;\n  height: 100%;\n}\ndiv.page-root.submit-article.desktop app-status-content div.app-container > div.form-wrapper > div.form-item > ul > li.uploader > div.upload-box > ion-icon {\n  font-size: 36px;\n  color: #1e1e1e;\n}\ndiv.page-root.submit-article.desktop app-status-content div.app-container > div.form-wrapper > div.form-item > div.cover-box {\n  position: relative;\n  display: block;\n  width: calc((100% - 20px * 2) / 3);\n  height: 9.4736842105vw;\n  min-height: 142.1052631579px;\n  margin-top: 20px;\n  border: 1px solid #1e1e1e;\n}\ndiv.page-root.submit-article.desktop app-status-content div.app-container > div.form-wrapper > div.form-item > div.cover-box > div.upload-box {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  width: 100%;\n  height: 100%;\n}\ndiv.page-root.submit-article.desktop app-status-content div.app-container > div.form-wrapper > div.form-item > div.cover-box > div.upload-box > ion-icon {\n  font-size: 36px;\n  color: #1e1e1e;\n}\ndiv.page-root.submit-article.desktop app-status-content div.app-container > div.form-wrapper > div.form-item > div.cover-box > div.image-box {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n}\ndiv.page-root.submit-article.desktop app-status-content div.app-container > div.form-wrapper > div.form-item > div.cover-box > div.image-box > div.preview-box {\n  width: 100%;\n  height: 100%;\n}\ndiv.page-root.submit-article.desktop app-status-content div.app-container > div.form-wrapper > div.form-item > div.cover-box > div.image-box > div.preview-box:hover + div.mask-layer {\n  display: block;\n}\ndiv.page-root.submit-article.desktop app-status-content div.app-container > div.form-wrapper > div.form-item > div.cover-box > div.image-box > div.preview-box > ion-img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center;\n}\ndiv.page-root.submit-article.desktop app-status-content div.app-container > div.form-wrapper > div.form-item > div.cover-box > div.image-box > div.mask-layer {\n  position: absolute;\n  display: none;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  opacity: 0;\n  transition: all 0.5s;\n}\ndiv.page-root.submit-article.desktop app-status-content div.app-container > div.form-wrapper > div.form-item > div.cover-box > div.image-box > div.mask-layer:hover {\n  display: block;\n  opacity: 1;\n}\ndiv.page-root.submit-article.desktop app-status-content div.app-container > div.form-wrapper > div.form-item > div.cover-box > div.image-box > div.mask-layer > ion-icon {\n  position: absolute;\n  display: block;\n  font-size: 26px;\n  padding: 4px;\n  border-radius: 50%;\n  background-color: rgba(0, 0, 0, 0.3);\n  color: rgba(255, 255, 255, 0.6);\n  right: 10px;\n  top: 10px;\n  cursor: pointer;\n}\ndiv.page-root.submit-article.desktop app-status-content div.app-container > div.form-wrapper > div.form-item > div.cover-box > div.image-box > div.mask-layer > ion-icon:hover {\n  color: white;\n}\ndiv.page-root.submit-article.desktop app-status-content div.app-container > div.form-wrapper > div.form-item > div.tips {\n  width: 100%;\n  margin-top: 20px;\n}\ndiv.page-root.submit-article.desktop app-status-content div.app-container > div.form-wrapper > div.form-item > div.tips > span {\n  display: block;\n  color: #a0a0a0;\n}\ndiv.page-root.submit-article.desktop app-status-content div.app-container > div.form-wrapper > div.form-item > ion-textarea {\n  border: 1px solid #b5b5b5;\n  border-radius: 0;\n}\ndiv.page-root.submit-article.desktop app-status-content div.app-container > div.form-wrapper > ion-item:nth-of-type(5) > ul {\n  display: flex;\n  align-items: center;\n}\ndiv.page-root.submit-article.desktop app-status-content div.app-container > div.form-wrapper > ion-item:nth-of-type(5) > ul > li {\n  display: block;\n  cursor: pointer;\n}\ndiv.page-root.submit-article.desktop app-status-content div.app-container > div.form-wrapper > ion-item:nth-of-type(5) > ul > li:not(:first-of-type) {\n  margin-left: 50px;\n}\ndiv.page-root.submit-article.desktop app-status-content div.app-container > div.form-wrapper > ion-item:nth-of-type(5) > ul > li:hover > span, div.page-root.submit-article.desktop app-status-content div.app-container > div.form-wrapper > ion-item:nth-of-type(5) > ul > li.active > span {\n  color: #5433ff;\n}\ndiv.page-root.submit-article.desktop app-status-content div.app-container > div.form-wrapper > ion-item:nth-of-type(5) > ul > li > span {\n  display: block;\n  font-size: 16px;\n}\ndiv.page-root.submit-article.desktop app-status-content div.app-container > div.form-wrapper > ion-item:nth-of-type(6) > ul {\n  display: flex;\n  align-items: center;\n}\ndiv.page-root.submit-article.desktop app-status-content div.app-container > div.form-wrapper > ion-item:nth-of-type(6) > ul > li {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\ndiv.page-root.submit-article.desktop app-status-content div.app-container > div.form-wrapper > ion-item:nth-of-type(6) > ul > li:not(:first-of-type) {\n  margin-left: 20px;\n}\ndiv.page-root.submit-article.desktop app-status-content div.app-container > div.form-wrapper > ion-item:nth-of-type(6) > ul > li:hover > span,\ndiv.page-root.submit-article.desktop app-status-content div.app-container > div.form-wrapper > ion-item:nth-of-type(6) > ul > li:hover > ion-icon {\n  color: #5433ff;\n}\ndiv.page-root.submit-article.desktop app-status-content div.app-container > div.form-wrapper > ion-item:nth-of-type(6) > ul > li > span {\n  display: block;\n  font-size: 16px;\n}\ndiv.page-root.submit-article.desktop app-status-content div.app-container > div.form-wrapper > ion-item:nth-of-type(6) > ul > li > ion-icon {\n  color: #1e1e1e;\n}\ndiv.page-root.submit-article.desktop app-status-content div.app-container > div.form-wrapper > ion-button {\n  margin-top: 50px;\n  --border-radius: 0px;\n  width: 320px;\n  height: 46px;\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Ym1pdC1hcnRpY2xlLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXHRoZW1lXFx2YXJpYWJsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXHRoZW1lXFxtaXhpbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9RO0VBQ0UsV0FBQTtBQU5WO0FBUVU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUNxRlk7RURwRlosaUJBQUE7QUFOWjtBQVVRO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QUFSVjtBQVVVO0VBQ0UsV0FBQTtFQUNBLGdCQ3lERTtFRHhERixrQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7QUFSWjtBQVVZO0VBQ0UsZUNnRUs7QUR4RW5CO0FBV1k7RUFDRSxXQUFBO0FBVGQ7QUFhVTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQ3dDRTtBRG5EZDtBQWFZO0VBQ0Usa0JBQUE7RUV3Q1osYUFBQTtFQUNBLG1CQUFBO0VGdkNZLGVBQUE7RUFDQSxXQUFBO0FBVmQ7QUFZYztFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQ3lCRTtFRHhCRixpQkN3QkU7RUR2QkYseUJBQUE7QUFWaEI7QUFZZ0I7RUFDRSxjQUFBO0FBVmxCO0FBYWdCO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFYbEI7QUFha0I7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQVhwQjtBQWNzQjtFQUNFLGNBQUE7QUFaeEI7QUFnQm9CO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FBZHRCO0FBa0JrQjtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7QUFoQnBCO0FBa0JvQjtFQUNFLGNBQUE7RUFDQSxVQUFBO0FBaEJ0QjtBQW1Cb0I7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSwrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQWpCdEI7QUFtQnNCO0VBQ0UsWUFBQTtBQWpCeEI7QUF3QmtCO0VFMUNoQixhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFRjBDa0IsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBcEJwQjtBQXNCb0I7RUFDRSxlQUFBO0VBQ0EsY0NsRVY7QUQ4Q1o7QUEyQlk7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkM3REk7RUQ4REoseUJBQUE7QUF6QmQ7QUEyQmM7RUVsRVosYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUZrRWMsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBdkJoQjtBQXlCZ0I7RUFDRSxlQUFBO0VBQ0EsY0MxRk47QURtRVo7QUEyQmM7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7QUF6QmhCO0FBMkJnQjtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBekJsQjtBQTRCb0I7RUFDRSxjQUFBO0FBMUJ0QjtBQThCa0I7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUE1QnBCO0FBZ0NnQjtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7QUE5QmxCO0FBZ0NrQjtFQUNFLGNBQUE7RUFDQSxVQUFBO0FBOUJwQjtBQWlDa0I7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSwrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQS9CcEI7QUFpQ29CO0VBQ0UsWUFBQTtBQS9CdEI7QUFzQ1k7RUFDRSxXQUFBO0VBQ0EsZ0JDMUlJO0FEc0dsQjtBQXNDYztFQUNFLGNBQUE7RUFDQSxjQzlKSztBRDBIckI7QUF3Q1k7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0FBdENkO0FBMkNZO0VFckpWLGFBQUE7RUFDQSxtQkFBQTtBRjZHRjtBQTBDYztFQUNFLGNBQUE7RUFDQSxlQUFBO0FBeENoQjtBQTBDZ0I7RUFDRSxpQkNoS0o7QUR3SGQ7QUE2Q2tCO0VBQ0UsY0N2UFY7QUQ0TVY7QUErQ2dCO0VBQ0UsY0FBQTtFQUNBLGVDL0pDO0FEa0huQjtBQW9EWTtFRWhMVixhQUFBO0VBQ0EsbUJBQUE7QUYrSEY7QUFtRGM7RUVuTFosYUFBQTtFQUNBLG1CQUFBO0VGb0xjLGVBQUE7QUFoRGhCO0FBa0RnQjtFQUNFLGlCQzVMQTtBRDRJbEI7QUFvRGtCOztFQUVFLGNDbFJWO0FEZ09WO0FBc0RnQjtFQUNFLGNBQUE7RUFDQSxlQzFMQztBRHNJbkI7QUF1RGdCO0VBQ0UsY0M5Tk47QUR5S1o7QUEyRFU7RUFDRSxnQkNsTkU7RURtTkYsb0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBekRaIiwiZmlsZSI6InN1Ym1pdC1hcnRpY2xlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ2YXJpYWJsZXMuc2Nzc1wiO1xyXG5AaW1wb3J0IFwibWl4aW4uc2Nzc1wiO1xyXG5cclxuZGl2LnBhZ2Utcm9vdC5zdWJtaXQtYXJ0aWNsZSB7XHJcbiAgJi5kZXNrdG9wIHtcclxuICAgIGFwcC1zdGF0dXMtY29udGVudCB7XHJcbiAgICAgIGRpdi5hcHAtY29udGFpbmVyIHtcclxuICAgICAgICA+IGRpdi50aXRsZSB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgICA+IHNwYW4ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAkYXBwRm9udFNpemVMYXJnZVRpdGxlO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgID4gZGl2LmZvcm0td3JhcHBlciB7XHJcbiAgICAgICAgICB3aWR0aDogOTAwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuXHJcbiAgICAgICAgICA+IGlvbi1pdGVtIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6ICRsYXJnZU1hcmdpbjtcclxuICAgICAgICAgICAgLS1ib3JkZXItY29sb3I6ICN7JHRlcnRpYXJ5VGV4dENvbG9yfSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctZW5kOiAwcHggIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgICAgID4gaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6ICRhcHBGb250U2l6ZUxhcmdlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICA+IGlvbi1pbnB1dCB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICA+IGRpdi5mb3JtLWl0ZW0ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAkbGFyZ2VNYXJnaW47XHJcblxyXG4gICAgICAgICAgICA+IHVsIHtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgQGluY2x1ZGUgYWxpZ24tY2VudGVyLXZlcnRpY2FsKCk7XHJcbiAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgICA+IGxpIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoKDEwMCUgLSAjeyRzZWNvbmRhcnlNYXJnaW59ICogMikgLyAzKTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYygxODAgLyAxNTIwICogODB2dyk7XHJcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiBjYWxjKDE4MCAvIDE1MjAgKiAxMjAwcHgpO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogJHNlY29uZGFyeU1hcmdpbjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAkc2Vjb25kYXJ5TWFyZ2luO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHRleHRDb2xvcjtcclxuXHJcbiAgICAgICAgICAgICAgICAmOm50aC1vZi10eXBlKDNuICsgMSkge1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA+IGRpdi5pbWFnZS1ib3gge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgPiBkaXYucHJldmlldy1ib3gge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAmICsgZGl2Lm1hc2stbGF5ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgID4gaW9uLWltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICA+IGRpdi5tYXNrLWxheWVyIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA+IGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcclxuICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAmLnVwbG9hZGVyIHtcclxuICAgICAgICAgICAgICAgICAgPiBkaXYudXBsb2FkLWJveCB7XHJcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgYWxpZ24tY2VudGVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPiBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHRleHRDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgID4gZGl2LmNvdmVyLWJveCB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiBjYWxjKCgxMDAlIC0gI3skc2Vjb25kYXJ5TWFyZ2lufSAqIDIpIC8gMyk7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDE4MCAvIDE1MjAgKiA4MHZ3KTtcclxuICAgICAgICAgICAgICBtaW4taGVpZ2h0OiBjYWxjKDE4MCAvIDE1MjAgKiAxMjAwcHgpO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6ICRzZWNvbmRhcnlNYXJnaW47XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHRleHRDb2xvcjtcclxuXHJcbiAgICAgICAgICAgICAgPiBkaXYudXBsb2FkLWJveCB7XHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBhbGlnbi1jZW50ZXIoKTtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgICAgID4gaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAkdGV4dENvbG9yO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgPiBkaXYuaW1hZ2UtYm94IHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIHRvcDogMDtcclxuXHJcbiAgICAgICAgICAgICAgICA+IGRpdi5wcmV2aWV3LWJveCB7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAmICsgZGl2Lm1hc2stbGF5ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICA+IGlvbi1pbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgID4gZGl2Lm1hc2stbGF5ZXIge1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcblxyXG4gICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICA+IGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgID4gZGl2LnRpcHMge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6ICRzZWNvbmRhcnlNYXJnaW47XHJcblxyXG4gICAgICAgICAgICAgID4gc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5VGV4dENvbG9yO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgPiBpb24tdGV4dGFyZWEge1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR0ZXJ0aWFyeVRleHRDb2xvcjtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgPiBpb24taXRlbTpudGgtb2YtdHlwZSg1KSB7XHJcbiAgICAgICAgICAgID4gdWwge1xyXG4gICAgICAgICAgICAgIEBpbmNsdWRlIGFsaWduLWNlbnRlci12ZXJ0aWNhbCgpO1xyXG5cclxuICAgICAgICAgICAgICA+IGxpIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgICAgICY6bm90KDpmaXJzdC1vZi10eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAkbGFyZ2VNYXJnaW47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJjpob3ZlcixcclxuICAgICAgICAgICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgPiBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHByaW1hcnk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA+IHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAkYXBwRm9udFNpemVMYXJnZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICA+IGlvbi1pdGVtOm50aC1vZi10eXBlKDYpIHtcclxuICAgICAgICAgICAgPiB1bCB7XHJcbiAgICAgICAgICAgICAgQGluY2x1ZGUgYWxpZ24tY2VudGVyLXZlcnRpY2FsKCk7XHJcblxyXG4gICAgICAgICAgICAgID4gbGkge1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgYWxpZ24tY2VudGVyLXZlcnRpY2FsKCk7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgJjpub3QoOmZpcnN0LW9mLXR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6ICRzZWNvbmRhcnlNYXJnaW47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgID4gc3BhbixcclxuICAgICAgICAgICAgICAgICAgPiBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgPiBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJGFwcEZvbnRTaXplTGFyZ2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgPiBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAkdGV4dENvbG9yO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgID4gaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6ICRsYXJnZU1hcmdpbjtcclxuICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMjBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0NnB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICYucGFkIHtcclxuICAgIGFwcC1zdGF0dXMtY29udGVudCB7XHJcbiAgICAgIGRpdi5hcHAtY29udGFpbmVyIHtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5waG9uZSB7XHJcbiAgICBhcHAtc3RhdHVzLWNvbnRlbnQge1xyXG4gICAgICBkaXYuYXBwLWNvbnRhaW5lciB7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLy8gQ29sb3JzIFZhcmlhYmxlc1xyXG4kcHJpbWFyeTogIzU0MzNmZjtcclxuJHByaW1hcnlSR0I6IDg0LCA1MSwgMjU1O1xyXG4kcHJpbWFyeUNvbnRyYXN0OiAjZmZmZmZmO1xyXG4kcHJpbWFyeUNvbnRyYXN0UkdCOiAyNTUsIDI1NSwgMjU1O1xyXG4kcHJpbWFyeVNoYWRlOiAjNGEyZGUwO1xyXG4kcHJpbWFyeVRpbnQ6ICM2NTQ3ZmY7XHJcblxyXG4kc2Vjb25kYXJ5OiAjNTI2MGZmO1xyXG4kc2Vjb25kYXJ5UkdCOiA4MiwgOTYsIDI1NTtcclxuJHNlY29uZGFyeUNvbnRyYXN0OiAjZmZmZmZmO1xyXG4kc2Vjb25kYXJ5Q29udHJhc3RSR0I6IDI1NSwgMjU1LCAyNTU7XHJcbiRzZWNvbmRhcnlTaGFkZTogIzQ4NTRlMDtcclxuJHNlY29uZGFyeVRpbnQ6ICM0ZmE0Zjk7XHJcblxyXG4kdGVydGlhcnk6ICMzYjlhZjg7XHJcbiR0ZXJ0aWFyeVJHQjogNTksIDE1NCwgMjQ4O1xyXG4kdGVydGlhcnlDb250cmFzdDogI2ZmZmZmZjtcclxuJHRlcnRpYXJ5Q29udHJhc3RSR0I6IDI1NSwgMjU1LCAyNTU7XHJcbiR0ZXJ0aWFyeVNoYWRlOiAjMzQ4OGRhO1xyXG4kdGVydGlhcnlUaW50OiAjNTA3NGZkO1xyXG5cclxuJHN1Y2Nlc3M6ICMyZGQzNmY7XHJcbiRzdWNjZXNzUkdCOiA0NSwgMjExLCAxMTE7XHJcbiRzdWNjZXNzQ29udHJhc3Q6ICMwMDAwMDA7XHJcbiRzdWNjZXNzQ29udHJhc3RSR0I6IDAsIDAsIDA7XHJcbiRzdWNjZXNzU2hhZGU6ICMyOGJhNjI7XHJcbiRzdWNjZXNzVGludDogIzQyZDc3ZDtcclxuXHJcbiR3YXJuaW5nOiAjZjhkNDIxO1xyXG4kd2FybmluZ1JHQjogMjQ4LCAyMTIsIDMzO1xyXG4kd2FybmluZ0NvbnRyYXN0OiAjMDAwMDAwO1xyXG4kd2FybmluZ0NvbnRyYXN0UkdCOiAwLCAwLCAwO1xyXG4kd2FybmluZ1NoYWRlOiAjZGFiYjFkO1xyXG4kd2FybmluZ1RpbnQ6ICNmOWQ4Mzc7XHJcblxyXG4kZGFuZ2VyOiAjZDYzYTQyO1xyXG4kZGFuZ2VyUkdCOiAyMTQsIDU4LCA2NjtcclxuJGRhbmdlckNvbnRyYXN0OiAjZmZmZmZmO1xyXG4kZGFuZ2VyQ29udHJhc3RSR0I6IDI1NSwgMjU1LCAyNTU7XHJcbiRkYW5nZXJTaGFkZTogI2JjMzMzYTtcclxuJGRhbmdlclRpbnQ6ICNkYTRlNTU7XHJcblxyXG4kbWVkaXVtOiAjMWUxZTFlO1xyXG4kbWVkaXVtUkdCOiAzMCwgMzAsIDMwO1xyXG4kbWVkaXVtQ29udHJhc3Q6ICNmZmZmZmY7XHJcbiRtZWRpdW1Db250cmFzdFJHQjogMjU1LCAyNTUsIDI1NTtcclxuJG1lZGl1bVNoYWRlOiAjMWExYTFhO1xyXG4kbWVkaXVtVGludDogIzM1MzUzNTtcclxuXHJcbiRsaWdodDogI2ZmZmZmZjtcclxuJGxpZ2h0UkdCOiAyNTUsIDI1NSwgMjU1O1xyXG4kbGlnaHRDb250cmFzdDogI2ZmZmZmZjtcclxuJGxpZ2h0Q29udHJhc3RSR0I6IDI1NSwgMjU1LCAyNTU7XHJcbiRsaWdodFNoYWRlOiAjZTBlMGUwO1xyXG4kbGlnaHRUaW50OiAjZmZmZmZmO1xyXG5cclxuJGJhY2tncm91bmRDb2xvcjogI2ZmZmZmZjtcclxuJGJhY2tncm91bmRDb2xvclJHQjogMTEsIDEyLCAyMjtcclxuJGl0ZW1CYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4kY2FyZEJhY2tncm91bmQ6ICNmN2Y3Zjc7XHJcbiRkaWFsb2dCYWNrZ3JvdW5kOiAjMTYxNzI0O1xyXG5cclxuJHRleHRDb2xvcjogIzFlMWUxZTtcclxuJHRleHRDb2xvclJHQjogMjU1LCAyNTUsIDI1NTtcclxuJHNlY29uZGFyeVRleHRDb2xvcjogI2EwYTBhMDtcclxuJHRlcnRpYXJ5VGV4dENvbG9yOiAjYjViNWI1O1xyXG4kbGlnaHRUZXh0Q29sb3I6ICNhYWFjYjc7XHJcbiRkYXJrVGV4dENvbG9yOiAjMGEwYjE1O1xyXG4kcGxhY2Vob2xkZXJUZXh0Q29sb3I6ICMzOTNiNGE7XHJcblxyXG4vLyBTaXplIFZhcmlhYmxlc1xyXG4kYXBwSGVhZGVySGVpZ2h0OiA2MHB4O1xyXG4kYXBwQm9yZGVyUmFkaXVzOiAxMHB4O1xyXG4kaW5uZXJCb3JkZXJSYWRpdXM6IDZweDtcclxuJGRlc2t0b3BQYWRkaW5nOiAzMHB4O1xyXG4kcHJpbWFyeVBhZGRpbmc6IDIwcHg7XHJcbiRtZWRpdW1QYWRkaW5nOiA0MHB4O1xyXG4kbGFyZ2VQYWRkaW5nOiA4MHB4O1xyXG5cclxuJHByaW1hcnlNYXJnaW46IDMwcHg7XHJcbiRzZWNvbmRhcnlNYXJnaW46IDIwcHg7XHJcbiRsYXJnZU1hcmdpbjogNTBweDtcclxuJGxpbmVIZWlnaHQ6IDUwcHg7XHJcblxyXG4kbGFyZ2VNb2R1bGVTcGFjaW5nOiAxNTBweDtcclxuJG1vZHVsZVNwYWNpbmc6IDUwcHg7XHJcbiRsYXJnZUltYWdlVGV4dFNwYWNpbmc6IDQwcHg7XHJcbiRjYXJkU3BhY2luZzogMzBweDtcclxuJGNhcmRTcGFjaW5nU21hbGw6IDE2cHg7XHJcbiRpbWFnZVRleHRTcGFjaW5nOiAxMnB4O1xyXG4kdGV4dExpbmVTcGFjaW5nOiA2cHg7XHJcblxyXG4kYXBwRm9udFNpemVTbWFsbDogMTJweDtcclxuJGFwcEZvbnRTaXplUmVndWxhcjogMTRweDtcclxuJGFwcEZvbnRTaXplTGFyZ2U6IDE2cHg7XHJcbiRhcHBGb250U2l6ZUltcG9ydGFudDogMThweDtcclxuJGFwcEZvbnRTaXplVGl0bGU6IDI0cHg7XHJcbiRhcHBGb250U2l6ZU1lZGl1bVRpdGxlOiAzMnB4O1xyXG4kYXBwRm9udFNpemVMYXJnZVRpdGxlOiA0MnB4O1xyXG4kYXBwRm9udFNpemVGb2N1czogNjRweDtcclxuJGFwcEZvbnRTaXplTG9nb1RpdGxlOiA4NnB4O1xyXG4kYXBwTGFyZ2VzdEZvbnRTaXplOiAxMzJweDtcclxuIiwiQGltcG9ydCBcInZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG5AbWl4aW4gc2Nyb2xsYmFyKCR0cmFja0NvbG9yOiAjeyRiYWNrZ3JvdW5kQ29sb3J9LCAkdGh1bWJDb2xvcjogI3skcHJpbWFyeX0pIHtcclxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogOHB4O1xyXG4gIH1cclxuXHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRyYWNrQ29sb3I7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDJlbTtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMmVtO1xyXG4gIH1cclxuXHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRodW1iQ29sb3I7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDJlbTtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMmVtO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGxpbmUtY2xhbXAoJGxpbmVzKSB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAtd2Via2l0LWxpbmUtY2xhbXA6ICRsaW5lcztcclxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG59XHJcblxyXG5AbWl4aW4gY2xlYXJmaXgge1xyXG4gICY6YWZ0ZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBzaW5nbGUtbGluZSgpIHtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuXHJcbkBtaXhpbiB0cmlhbmdsZSgkd2lkdGgsICRoZWlnaHQsICRjb2xvciwgJGRpcmVjdGlvbikge1xyXG4gICR3aWR0aDogJHdpZHRoLzI7XHJcbiAgJGNvbG9yLWJvcmRlci1zdHlsZTogJGhlaWdodCBzb2xpZCAkY29sb3I7XHJcbiAgJHRyYW5zcGFyZW50LWJvcmRlci1zdHlsZTogJHdpZHRoIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGhlaWdodDogMDtcclxuICB3aWR0aDogMDtcclxuXHJcbiAgQGlmICRkaXJlY3Rpb24gPT0gdXAge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogJGNvbG9yLWJvcmRlci1zdHlsZTtcclxuICAgIGJvcmRlci1sZWZ0OiAkdHJhbnNwYXJlbnQtYm9yZGVyLXN0eWxlO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAkdHJhbnNwYXJlbnQtYm9yZGVyLXN0eWxlO1xyXG4gIH1cclxuXHJcbiAgQGVsc2UgaWYgJGRpcmVjdGlvbiA9PSByaWdodCB7XHJcbiAgICBib3JkZXItbGVmdDogJGNvbG9yLWJvcmRlci1zdHlsZTtcclxuICAgIGJvcmRlci10b3A6ICR0cmFuc3BhcmVudC1ib3JkZXItc3R5bGU7XHJcbiAgICBib3JkZXItYm90dG9tOiAkdHJhbnNwYXJlbnQtYm9yZGVyLXN0eWxlO1xyXG4gIH1cclxuXHJcbiAgQGVsc2UgaWYgJGRpcmVjdGlvbiA9PSBkb3duIHtcclxuICAgIGJvcmRlci10b3A6ICRjb2xvci1ib3JkZXItc3R5bGU7XHJcbiAgICBib3JkZXItbGVmdDogJHRyYW5zcGFyZW50LWJvcmRlci1zdHlsZTtcclxuICAgIGJvcmRlci1yaWdodDogJHRyYW5zcGFyZW50LWJvcmRlci1zdHlsZTtcclxuICB9XHJcblxyXG4gIEBlbHNlIGlmICRkaXJlY3Rpb24gPT0gbGVmdCB7XHJcbiAgICBib3JkZXItcmlnaHQ6ICRjb2xvci1ib3JkZXItc3R5bGU7XHJcbiAgICBib3JkZXItdG9wOiAkdHJhbnNwYXJlbnQtYm9yZGVyLXN0eWxlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogJHRyYW5zcGFyZW50LWJvcmRlci1zdHlsZTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBhbGlnbi1jZW50ZXIoKSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5AbWl4aW4gYWxpZ24tY2VudGVyLXZlcnRpY2FsKCkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuQG1peGluIGFsaWduLWNlbnRlci1ob3Jpem9udGFsKCkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbkBtaXhpbiB1bmRlcmxpbmUtZWZmZWN0KCRjb2xvcjogJHByaW1hcnksICRoZWlnaHQ6IDRweCwgJGR1cmF0aW9uOiAwLjVzKSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgJjphZnRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6ICRoZWlnaHQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgJGR1cmF0aW9uO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMC40KTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG5cclxuICAmLmFjdGl2ZSB7XHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMS4wKTtcclxuICAgICAgb3BhY2l0eTogMS4wO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_submit-article_submit-article_module_ts.js.map