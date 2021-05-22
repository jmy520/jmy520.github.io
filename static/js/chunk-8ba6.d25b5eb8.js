(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-8ba6"],{"0N0F":function(t,e,i){},HClC:function(t,e,i){},M2xu:function(t,e,i){"use strict";var a=i("HClC");i.n(a).a},YRJF:function(t,e,i){"use strict";var a=i("0N0F");i.n(a).a},ntYl:function(t,e,i){"use strict";i.r(e);var a=i("14Xm"),o=i.n(a),n=i("4d7F"),r=i.n(n),s=i("D3Ub"),c=i.n(s),l=i("QbLZ"),u=i.n(l),d=i("L2JU"),f=i("3SlJ"),p=i("KTTK"),g={name:"Login",data:function(){return{pageStatus:0,loading:!1,timerToken:null,animate:null,formData:{account:"",password:"",verificationCode:""},verificationCodePictureURL:"",encryptedVerificationCode:"",wechatDialogVisible:!1,wechatData:{},wechatLoginLock:!1}},computed:u()({},Object(d.b)(["language","screenCategory","immersive","color","opacity"])),watch:{language:function(){}},created:function(){var t=this;this.animate=new f.a(this),this.initData().catch(function(e){t.pageStatus=2,console.error(e)})},mounted:function(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){this.stopTimerTask(),window.removeEventListener("scroll",this.handleScroll)},methods:{initData:function(){var t=this;return c()(o.a.mark(function e(){var i;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.a.all([t.fetchRandomVerificationCodePicture()]);case 2:(i=t.$route.query.to)&&localStorage.setItem("login-to-path",i),t.pageStatus=1,t.$nextTick(function(){t.fillAnimateRefs()});case 6:case"end":return e.stop()}},e,t)}))()},onRetry:function(){var t=this;this.pageStatus=0,this.initData().catch(function(e){t.pageStatus=2,console.error(e)})},fillAnimateRefs:function(){this.animate.setAnimateData([{ref:"some-refs",classList:["animated","fadeIn"]}])},onClickVerificationCodePicture:function(){this.fetchRandomVerificationCodePicture()},onClickRefreshVerificationCode:function(){this.fetchRandomVerificationCodePicture()},onClickRegister:function(){this.$router.replace("/register")},onClickLogin:function(){var t=this;this.loading=!0,c()(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.doLogin();case 2:t.loading=!1;case 3:case"end":return e.stop()}},e,t)}))().catch(function(e){t.loading=!1,console.error(e),t.$notify({type:"error",position:"top-right",title:t.$t("common.dialog_title"),message:t.$t("common.failed",[e.message])})})},onClickLoginWithWechat:function(){var t=this;this.wechatLoginLock||(this.wechatLoginLock=!0,c()(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchWechatQRCode();case 2:t.wechatLoginLock=!1;case 3:case"end":return e.stop()}},e,t)}))().catch(function(e){t.wechatLoginLock=!1,console.error(e),t.$notify({type:"error",position:"top-right",title:t.$t("common.dialog_title"),message:t.$t("common.failed",[e.message])})}))},checkFormData:function(){return this.formData.account?this.formData.password?!!this.formData.verificationCode||(this.$notify({type:"error",position:"top-right",title:this.$t("common.dialog_title"),message:this.$t("login.verification_code_required")}),!1):(this.$notify({type:"error",position:"top-right",title:this.$t("common.dialog_title"),message:this.$t("login.password_required")}),!1):(this.$notify({type:"error",position:"top-right",title:this.$t("common.dialog_title"),message:this.$t("login.account_required")}),!1)},startTimerTask:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3e4;this.stopTimerTask();var o=0;this.timerToken=setInterval(function(){"function"==typeof t&&t(),(o+=i)>=a&&e.stopTimerTask()},i)},stopTimerTask:function(){this.timerToken&&(clearInterval(this.timerToken),this.timerToken=null)},bindWechatAuth:function(){var t=this;return c()(o.a.mark(function e(){var i,a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.b)(1,t.wechatData.code,1);case 2:if(1!==(i=e.sent).Status){e.next=9;break}t.stopTimerTask(),a=i.Result,console.error(a),e.next=12;break;case 9:if(204!==i.ErrCode){e.next=11;break}return e.abrupt("return");case 11:return e.abrupt("return",r.a.reject({code:i.ErrCode,message:i.ErrMsg}));case 12:case"end":return e.stop()}},e,t)}))()},fetchWechatQRCode:function(){var t=this;return c()(o.a.mark(function e(){var i,a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.C)();case 2:if(1!==(i=e.sent).Status){e.next=10;break}a=i.Result,t.wechatData={url:a.url,code:a.code,expireTime:a.expire_time},t.$nextTick(function(){t.wechatDialogVisible=!0}),t.startTimerTask(function(){}),e.next=11;break;case 10:return e.abrupt("return",r.a.reject({code:i.ErrCode||i.errcode,message:i.ErrMsg||i.errmsg}));case 11:case"end":return e.stop()}},e,t)}))()},fetchRandomVerificationCodePicture:function(){var t=this;return c()(o.a.mark(function e(){var i,a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.B)();case 2:if(1!==(i=e.sent).Status){e.next=9;break}a=i.Result,t.verificationCodePictureURL="data:image/png;base64,"+a.img,t.encryptedVerificationCode=a.code_encrypt,e.next=10;break;case 9:return e.abrupt("return",r.a.reject({code:i.ErrCode,message:i.ErrMsg}));case 10:case"end":return e.stop()}},e,t)}))()},doLogin:function(){var t=this;return c()(o.a.mark(function e(){var i,a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.checkFormData()){e.next=7;break}return e.next=3,t.$store.dispatch("DoLogin",{account:t.formData.account,password:t.formData.password,verificationCode:t.formData.verificationCode,encryptedVerificationCode:t.encryptedVerificationCode});case 3:i=e.sent,a=i.name,t.$message({dangerouslyUseHTMLString:!0,message:t.$t("login.welcome",[a])}),t.doJump();case 7:case"end":return e.stop()}},e,t)}))()},doJump:function(){localStorage.removeItem("invite-code");var t=localStorage.getItem("user-info"),e=JSON.parse(t);localStorage.setItem("invite-code-status:"+e.inviteCode,"saved");var i=localStorage.getItem("login-to-path");i&&localStorage.removeItem("login-to-path"),this.$router.replace(i||"/personal-center/account")},handleScroll:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;this.animate.onScroll(t)}}},m=(i("YRJF"),i("M2xu"),i("KHd+")),v=Object(m.a)(g,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page-root login",class:t.screenCategory+" "+t.language},[i("status-container",{attrs:{status:t.pageStatus},on:{retry:function(e){t.onRetry()}}},["pc"==t.screenCategory?[i("div",{staticClass:"container"},[i("div",{staticClass:"content-wrapper"},[i("div",{staticClass:"slot-start"},[i("div",{staticClass:"background"},[i("div",{staticClass:"background-inner"},[i("div",{staticClass:"top"}),t._v(" "),i("div",{staticClass:"center"}),t._v(" "),i("div",{staticClass:"bottom"})])]),t._v(" "),i("div",{staticClass:"text-wrapper"},[i("div",{staticClass:"content-inner"},[i("div",{staticClass:"quote-symbol"},[i("svg-icon",{attrs:{"icon-class":"icon_quote"}})],1),t._v(" "),i("div",{staticClass:"slogan",domProps:{innerHTML:t._s(t.$t("login.slogan"))}})])])]),t._v(" "),i("div",{staticClass:"slot-end"},[i("div",{staticClass:"title"},[t._v(t._s(t.$t("login.title")))]),t._v(" "),i("div",{staticClass:"form-wrapper"},[i("el-input",{attrs:{placeholder:t.$t("login.account_placeholder"),size:"normal"},model:{value:t.formData.account,callback:function(e){t.$set(t.formData,"account",e)},expression:"formData.account"}}),t._v(" "),i("el-input",{attrs:{placeholder:t.$t("login.password_placeholder"),type:"password",size:"normal"},model:{value:t.formData.password,callback:function(e){t.$set(t.formData,"password",e)},expression:"formData.password"}}),t._v(" "),i("el-input",{attrs:{placeholder:t.$t("login.verification_code_placeholder"),size:"normal"},model:{value:t.formData.verificationCode,callback:function(e){t.$set(t.formData,"verificationCode",e)},expression:"formData.verificationCode"}},[i("div",{staticClass:"verification-code-picture",attrs:{slot:"append"},on:{click:function(e){t.onClickVerificationCodePicture()}},slot:"append"},[i("img",{attrs:{src:t.verificationCodePictureURL,alt:""}})])]),t._v(" "),i("div",{staticClass:"refresh-wrapper"},[i("span",{on:{click:function(e){t.onClickRefreshVerificationCode()}}},[t._v(t._s(t.$t("login.refresh")))])]),t._v(" "),i("el-button",{attrs:{loading:t.loading,type:"primary",size:"large"},on:{click:function(e){t.onClickLogin()}}},[t._v(t._s(t.$t("login.login")))])],1),t._v(" "),i("div",{staticClass:"footer"},[i("div",{staticClass:"telegram disabled"},[i("svg-icon",{attrs:{"icon-class":"icon_telegram"}})],1),t._v(" "),i("div",{staticClass:"twitter disabled"},[i("svg-icon",{attrs:{"icon-class":"icon_twitter"}})],1),t._v(" "),i("div",{staticClass:"facebook disabled"},[i("svg-icon",{attrs:{"icon-class":"icon_facebook"}})],1),t._v(" "),i("div",{staticClass:"wechat",on:{click:function(e){t.onClickLoginWithWechat()}}},[i("svg-icon",{attrs:{"icon-class":"icon_wechat"}})],1)]),t._v(" "),i("div",{staticClass:"register"},[i("span",{on:{click:function(e){t.onClickRegister()}}},[t._v(t._s(t.$t("login.register")))])])])])])]:(t.screenCategory,[i("div",{staticClass:"container"})])],2),t._v(" "),i("el-dialog",{staticClass:"wechat-login-dialog",attrs:{visible:t.wechatDialogVisible,"close-on-click-modal":!1},on:{"update:visible":function(e){t.wechatDialogVisible=e}}},[i("div",{staticClass:"content-wrapper"},[i("div",{staticClass:"title"},[t._v("\n        "+t._s(t.$t("login.wechat_login_title"))+"\n      ")]),t._v(" "),i("div",{staticClass:"qrcode-wrapper"},[i("img",{attrs:{src:t.wechatData.url,alt:""}})]),t._v(" "),i("div",{staticClass:"tips"},[t._v("\n        "+t._s(t.$t("login.wechat_tips_text"))+"\n      ")])])])],1)},[],!1,null,"02ff0248",null);v.options.__file="index.vue";e.default=v.exports}}]);