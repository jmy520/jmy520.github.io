(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-f9da"],{"6cao":function(t,e,a){a("h6RI"),t.exports=Math.pow(2,-52)},"7Qib":function(t,e,a){"use strict";a.d(e,"b",function(){return l}),a.d(e,"a",function(){return u});var n=a("14Xm"),i=a.n(n),s=a("4d7F"),o=a.n(s),r=a("D3Ub"),c=a.n(r);a("mjEM"),a("mSNy");function l(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-dd hh:mm:ss";return Date.prototype.format=function(t){var e={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};for(var a in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length))),e)new RegExp("("+a+")").test(t)&&(t=t.replace(RegExp.$1,1===RegExp.$1.length?e[a]:("00"+e[a]).substr((""+e[a]).length)));return t},new Date(t).format(e)}function u(t){return t?t.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,"):0}!function(){var t=c()(i.a.mark(function t(e){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new o.a(function(t,a){try{var n=new FileReader;n.readAsDataURL(e),n.onload=function(e){var a=e.target.result;t(a)}}catch(t){a(t)}}));case 1:case"end":return t.stop()}},t,this)}))}()},"GPN/":function(t,e,a){"use strict";var n=a("MrNH");a.n(n).a},MrNH:function(t,e,a){},RfJ1:function(t,e,a){"use strict";a.r(e);var n=a("gDS+"),i=a.n(n),s=a("14Xm"),o=a.n(s),r=a("D3Ub"),c=a.n(r),l=a("QbLZ"),u=a.n(l),p=a("L2JU"),d=a("3SlJ"),f=a("yWgo"),h=a("7Qib"),v={name:"DappTopic",data:function(){return{pageStatus:0,animate:null,topicData:{}}},computed:u()({},Object(p.b)(["token","language","screenCategory","immersive","color","opacity","cache"])),watch:{language:function(){window.location.reload()},screenCategory:function(){window.location.reload()}},created:function(){var t=this;this.animate=new d.a(this),this.initData().catch(function(e){t.pageStatus=2,console.error(e)})},mounted:function(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{ellipsis:f.a,formatNumber:h.a,formatTimestamp:h.b,initData:function(){var t=this;return c()(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.topicData=t.cache||t.getCacheFromStorage(),t.saveCache(),t.pageStatus=1,t.$nextTick(function(){t.fillAnimateRefs()});case 4:case"end":return e.stop()}},e,t)}))()},onRetry:function(){var t=this;this.pageStatus=0,this.initData().catch(function(e){t.pageStatus=2,console.error(e)})},fillAnimateRefs:function(){this.animate.setAnimateData([{ref:"some-ref",classList:["animated","fadeIn"]}])},getTopicTitleStyle:function(){if("pc"===this.screenCategory){var t=this.topicData.name;if(t){var e=parseInt(960/t.length);return e=Math.max(16,e),"font-size:"+(e=Math.min(72,e))+"px"}}return""},getFlagStyle:function(t){return"color: "+t.color+"; border: 1px solid "+t.color},onClickDAppItem:function(t){this.$router.push("/dapp-detail/"+t.id)},getCacheFromStorage:function(){var t=localStorage.getItem("cache-data");return t?JSON.parse(t):null},saveCache:function(){if(this.topicData){var t=i()(this.topicData);localStorage.setItem("cache-data",t)}},handleScroll:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;this.animate.onScroll(t)}}},m=(a("icOn"),a("GPN/"),a("KHd+")),g=Object(m.a)(v,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-root dapp-topic",class:t.screenCategory+" "+t.language},[a("status-container",{attrs:{status:t.pageStatus},on:{retry:function(e){t.onRetry()}}},["pc"==t.screenCategory?[a("div",{staticClass:"advert-wrapper"},[a("img",{attrs:{src:t.topicData.icon,alt:""}}),t._v(" "),a("div",{staticClass:"layer"},[a("div",{staticClass:"layer-left"}),t._v(" "),a("div",{staticClass:"layer-right"}),t._v(" "),a("div",{staticClass:"layer-top"}),t._v(" "),a("div",{staticClass:"layer-bottom"})]),t._v(" "),a("div",{staticClass:"text-wrapper"},[a("div",{staticClass:"content-inner"},[a("div",{staticClass:"title",style:t.getTopicTitleStyle()},[t._v("\n              "+t._s(t.topicData.name?t.topicData.name.toUpperCase():"")+"\n            ")]),t._v(" "),a("div",{staticClass:"subtitle"},[t._v("\n              "+t._s(t.topicData.description)+"\n            ")])])])]),t._v(" "),a("div",{staticClass:"main-content"},[a("div",{staticClass:"node-list"},t._l(t.topicData.nodes,function(e,n){return a("div",{key:n,staticClass:"node-item",on:{click:function(a){t.onClickDAppItem(e)}}},[a("div",{staticClass:"thumbnail-wrapper"},[a("img",{attrs:{src:e.thumbnail,alt:""}})]),t._v(" "),a("div",{staticClass:"text-wrapper"},[a("div",{staticClass:"row-item"},[a("span",[t._v(t._s(e.name))]),t._v(" "),a("span",{style:t.getFlagStyle(e)},[t._v(t._s(e.categoryName))])]),t._v(" "),a("div",{staticClass:"row-item"},[a("span",[t._v("\n                  "+t._s(e.subtitle)+"\n                ")])])])])}))])]:void t.screenCategory],2)],1)},[],!1,null,"eeff8642",null);g.options.__file="index.vue";e.default=g.exports},U5AM:function(t,e,a){},h6RI:function(t,e,a){var n=a("Y7ZC");n(n.S,"Number",{EPSILON:Math.pow(2,-52)})},icOn:function(t,e,a){"use strict";var n=a("U5AM");a.n(n).a},mjEM:function(t,e,a){t.exports={default:a("6cao"),__esModule:!0}}}]);