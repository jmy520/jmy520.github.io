(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-3cf6"],{capi:function(t,n,e){},"gDS+":function(t,n,e){t.exports={default:e("oh+g"),__esModule:!0}},gkgq:function(t,n,e){"use strict";e.r(n);var a=e("gDS+"),i=e.n(a),s=e("chKg"),o=e("KTTK"),r={name:"Detail",components:{swiper:s.swiper,swiperSlide:s.swiperSlide},data:function(){return{isLoading:!1,htmlContent:"",policyHtmlCache:null,effectPointflag:!1,hasStatisticsShopcart:!1,swiperOptionTop:{spaceBetween:10,pagination:{el:".swiper-pagination",dynamicBullets:!0}},swiperOptionThumbs:{spaceBetween:10,centeredSlides:!0,slidesPerView:4,touchRatio:.2,slideToClickedSlide:!0},detailData:{},menuIndex:0,count:1,imageList:[]}},created:function(){this.fetchDetailData()},mounted:function(){var t=this;this.$nextTick(function(){var n=t.$refs.swiperTop.swiper,e=t.$refs.swiperThumbs.swiper;n.controller.control=e,e.controller.control=n})},methods:{fetchDetailData:function(){var t=this,n=this.getGoodsId();o.m(n).then(function(n){1===n.Status?(t.detailData=n.Result,t.imageList=t.detailData.imgs,t.htmlContent=t.detailData.introduce):t.$notify.error({title:t.$t("common.dialog_title"),message:n.ErrMsg})}).catch(function(n){console.error(n),t.$parent.$parent.showCommonErrorDialog(function(){t.fetchDetailData()})})},fetchPolicyHtml:function(){var t=this;this.isLoading=!0,o.i().then(function(n){t.isLoading=!1,1===n.Status?(t.policyHtmlCache=n.Result,t.htmlContent=n.Result.cn):t.$notify.error({title:t.$t("common.dialog_title"),message:n.ErrMsg})}).catch(function(n){t.isLoading=!1,console.error(n),t.$parent.$parent.showCommonErrorDialog(function(){t.fetchPolicyHtml()})})},postAddShopcart:function(){var t=this,n=this.getGoodsId();o.y(this.count,null,n).then(function(n){1===n.Status&&(t.hasStatisticsShopcart||(t.hasStatisticsShopcart=!0,t.fetchShopcartCount()))}).catch(function(t){console.error(t)})},fetchShopcartCount:function(){var t=this;o.s().then(function(n){if(1===n.Status){var e=n.Result.cnt;t.$store.dispatch("SetCartCount",e)}}).catch(function(t){console.error(t)})},beforeEnter:function(t){var n=this.$refs.addShopcartButton.$el.getBoundingClientRect(),e=n.x+n.width/2,a=n.y+n.height/2;t.style.left=e+"px",t.style.top=a+"px",t.style.transform="translate(0, 0)"},enter:function(t,n){t.offsetWidth,t.style.transform="translate(50px, -620px)",t.style.transition="all 0.2s cubic-bezier(0.49, -0.29, 0.75, 0.41)",n()},afterEnter:function(t){this.effectPointflag=!1},getGoodsId:function(){var t=this.$route.params.mid;return t?localStorage.setItem("goods-mid",t):t=localStorage.getItem("goods-mid"),t},getImageBackground:function(t){return t?"background-image: url('"+t+"')":""},getNameDisplay:function(){return this.detailData.name},getPriceDisplay:function(){return this.detailData.price},getAccountsPayable:function(){return this.detailData.price*this.count},getRealPay:function(){return this.detailData.price*this.count},handleDetailHtml:function(){this.menuIndex=0,this.htmlContent=this.detailData.introduce},handlePolicyHtml:function(){this.menuIndex=1,this.policyHtmlCache?this.htmlContent=this.policyHtmlCache.cn:this.fetchPolicyHtml()},handleCounterChange:function(){},handleSignIn:function(){this.$parent.$parent.loginFlag=!0},handleBuyNow:function(){this.$parent.$parent.isSupplementComplete?this.detailData&&this.$router.push({name:"ConfirmOrder",params:{from:"goods-detail",data:i()(this.detailData),count:this.count}}):this.$parent.$parent.supplementInformationFlag=!0},handleAddToCart:function(){this.$parent.$parent.isSupplementComplete?(this.effectPointflag=!0,this.postAddShopcart()):this.$parent.$parent.supplementInformationFlag=!0}}},l=(e("w8sD"),e("KHd+")),c=Object(l.a)(r,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"detail-container"},[e("div",{staticClass:"main-content"},[e("div",{staticClass:"base-info"},[e("div",{staticClass:"image-wrapper"},[e("swiper",{ref:"swiperTop",staticClass:"big-image-wrapper",attrs:{options:t.swiperOptionTop}},[t._l(t.imageList,function(n,a){return e("swiper-slide",{key:t.$parent.key(a)},[e("div",{staticClass:"big-image",style:t.getImageBackground(n)})])}),t._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2),t._v(" "),e("swiper",{ref:"swiperThumbs",staticClass:"small-image-wrapper",attrs:{options:t.swiperOptionThumbs}},t._l(t.imageList,function(n,a){return e("swiper-slide",{key:t.$parent.key(a)},[e("div",{staticClass:"small-image",style:t.getImageBackground(n)})])}))],1),t._v(" "),e("div",{staticClass:"text-info"},[e("h3",[t._v("\n          "+t._s(t.getNameDisplay())+"\n        ")]),t._v(" "),e("div",{staticClass:"price-wrapper"},[e("span",[t._v("\n            "+t._s(t.$t("common.currency_symbol"))+"\n          ")]),t._v(" "),e("span",[t._v("\n            "+t._s(t.getPriceDisplay())+"\n          ")]),t._v(" "),e("span",[t._v("\n            "+t._s(t.$t("detail.unit_01"))+"\n          ")])]),t._v(" "),e("div",{staticClass:"counter-wrapper"},[e("span",[t._v("\n            "+t._s(t.$t("detail.count"))+"\n          ")]),t._v(" "),e("el-input-number",{attrs:{min:1},on:{change:t.handleCounterChange},model:{value:t.count,callback:function(n){t.count=n},expression:"count"}}),t._v(" "),e("span",[t._v("\n            "+t._s(t.$t("detail.unit_02"))+"\n          ")])],1),t._v(" "),e("div",{staticClass:"accounts-payable-wrapper"},[e("span",[t._v("\n            "+t._s(t.$t("detail.accounts_payable"))+"\n          ")]),t._v(" "),e("span",[t._v("\n            "+t._s(t.$t("common.currency_symbol"))+"\n          ")]),t._v(" "),e("span",[t._v("\n            "+t._s(t.getAccountsPayable())+"\n          ")])]),t._v(" "),e("div",{staticClass:"real-pay-wrapper"},[e("span",[t._v("\n            "+t._s(t.$t("detail.real_pay"))+"\n          ")]),t._v(" "),e("span",[t._v("\n            "+t._s(t.$t("common.currency_symbol"))+"\n          ")]),t._v(" "),e("span",[t._v("\n            "+t._s(t.getRealPay())+"\n          ")])]),t._v(" "),e("div",{staticClass:"button-wrapper"},[t.$parent.$parent.token?t._e():e("el-button",{attrs:{round:!0,type:"primary"},on:{click:function(n){t.handleSignIn()}}},[t._v("\n            "+t._s(t.$t("common.sign_in_first"))+"\n          ")]),t._v(" "),t.$parent.$parent.token?e("el-button",{staticClass:"logined",attrs:{round:!0,type:"primary"},on:{click:function(n){t.handleBuyNow()}}},[t._v("\n            "+t._s(t.$t("detail.buy_now"))+"\n          ")]):t._e(),t._v(" "),t.$parent.$parent.token?e("el-button",{ref:"addShopcartButton",staticClass:"logined",attrs:{round:!0,plain:!0,type:"primary"},on:{click:function(n){t.handleAddToCart()}}},[t._v("\n            "+t._s(t.$t("detail.add_to_cart"))+"\n          ")]):t._e()],1)])]),t._v(" "),e("div",{staticClass:"detail-info"},[e("div",{staticClass:"menu-wrapper"},[e("ul",[e("li",{on:{click:function(n){t.handleDetailHtml()}}},[e("span",{class:0===t.menuIndex?"active":""},[t._v("\n              "+t._s(t.$t("detail.menu_detail"))+"\n            ")])]),t._v(" "),e("li",{on:{click:function(n){t.handlePolicyHtml()}}},[e("span",{class:1===t.menuIndex?"active":""},[t._v("\n              "+t._s(t.$t("detail.menu_after_sales"))+"\n            ")])])])]),t._v(" "),e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.isLoading,expression:"isLoading"}],staticClass:"detail-info-html",domProps:{innerHTML:t._s(t.htmlContent)}})])]),t._v(" "),e("transition",{on:{"before-enter":t.beforeEnter,enter:t.enter,"after-enter":t.afterEnter}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.effectPointflag,expression:"effectPointflag"}],staticClass:"effect-point"})])],1)},[],!1,null,"94a35efe",null);c.options.__file="index.vue";n.default=c.exports},"oh+g":function(t,n,e){var a=e("WEpk"),i=a.JSON||(a.JSON={stringify:JSON.stringify});t.exports=function(t){return i.stringify.apply(i,arguments)}},w8sD:function(t,n,e){"use strict";var a=e("capi");e.n(a).a}}]);