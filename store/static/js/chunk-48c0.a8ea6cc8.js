(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-48c0"],{PyJH:function(e,t,n){},hxPK:function(e,t,n){"use strict";n.r(t);var a={name:"Shopcart",data:function(){return{cartGoodsList:[{id:1,image:"./static/temp/images/img_machine_sample.png",name:"RGB钛金牌全模组挖矿机服务器1250w",name_en:"RGB钛金牌全模组挖矿机服务器1250w",price:13299,price_en:2048,count:1},{id:2,image:"./static/temp/images/img_machine_sample.png",name:"RGB钛金牌全模组挖矿机服务器1250w",name_en:"RGB钛金牌全模组挖矿机服务器1250w",price:13299,price_en:2048,count:1},{id:3,image:"./static/temp/images/img_machine_sample.png",name:"RGB钛金牌全模组挖矿机服务器1250w",name_en:"RGB钛金牌全模组挖矿机服务器1250w",price:13299,price_en:2048,count:1},{id:4,image:"./static/temp/images/img_machine_sample.png",name:"RGB钛金牌全模组挖矿机服务器1250w",name_en:"RGB钛金牌全模组挖矿机服务器1250w",price:13299,price_en:2048,count:1},{id:5,image:"./static/temp/images/img_machine_sample.png",name:"RGB钛金牌全模组挖矿机服务器1250w",name_en:"RGB钛金牌全模组挖矿机服务器1250w",price:13299,price_en:2048,count:1}],allSelected:!1,selectionItems:[],totalPay:0}},created:function(){},methods:{toggleSelection:function(e){var t=this;e?e.forEach(function(e){t.$refs.multipleTable.toggleRowSelection(e)}):this.$refs.multipleTable.clearSelection()},handleSelectionChange:function(e){this.selectionItems=e},handleMultyDelete:function(){},handleConfirmOrder:function(){this.$router.push("/confirm-order/index")}}},o=(n("wKj5"),n("KHd+")),c=Object(o.a)(a,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"shopcart-container"},[n("div",{staticClass:"main-content"},[n("el-table",{ref:"multipleTable",attrs:{data:e.cartGoodsList,"tooltip-effect":"dark"},on:{"selection-change":e.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),n("el-table-column",{attrs:{label:e.$t("shopcart.goods_info"),"class-name":"goods-info-column","label-class-name":"goods-info-column-label",width:"540"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-image",{attrs:{src:t.row.image,fit:"cover"}}),e._v(" "),n("span",[e._v("\n            "+e._s("en"===e.$parent.$parent.language?t.row.name_en:t.row.name)+"\n          ")])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:e.$t("shopcart.price"),"min-width":"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s("en"===e.$parent.$parent.language?e.$t("common.currency_symbol")+t.row.price_en:e.$t("common.currency_symbol")+t.row.price)+"\n        ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:e.$t("shopcart.count"),"class-name":"count-column","min-width":"130"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-input-number",{attrs:{min:1},model:{value:t.row.count,callback:function(n){e.$set(t.row,"count",n)},expression:"scope.row.count"}})]}}])}),e._v(" "),n("el-table-column",{attrs:{label:e.$t("shopcart.amount"),"class-name":"amount-column","label-class-name":"amount-column-label","min-width":"160"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s("en"===e.$parent.$parent.language?e.$t("common.currency_symbol")+t.row.price_en*t.row.count:e.$t("common.currency_symbol")+t.row.price*t.row.count)+"\n        ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:e.$t("common.operation"),"min-width":"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"text"},on:{click:function(n){e.handleDeleteItem(t.row)}}},[e._v("\n            "+e._s(e.$t("common.delete"))+"\n          ")])]}}])})],1)],1),e._v(" "),n("div",{staticClass:"cartshop-footer"},[n("div",{staticClass:"main-content"},[n("div",{staticClass:"stick-on-left"},[n("el-checkbox",{attrs:{label:e.$t("shopcart.select_all")},model:{value:e.allSelected,callback:function(t){e.allSelected=t},expression:"allSelected"}}),e._v(" "),n("el-button",{attrs:{type:"text"},on:{click:function(t){e.handleMultyDelete()}}},[e._v("\n          "+e._s(e.$t("common.delete"))+"\n        ")])],1),e._v(" "),n("div",{staticClass:"stick-on-right"},[n("h4",{domProps:{innerHTML:e._s(e.$t("shopcart.statistics",[e.selectionItems.length,e.totalPay]))}}),e._v(" "),n("el-button",{attrs:{round:!0,type:"primary"},on:{click:function(t){e.handleConfirmOrder()}}},[e._v("\n          "+e._s(e.$t("shopcart.settlement"))+"\n        ")])],1)])])])},[],!1,null,"789a88c4",null);c.options.__file="index.vue";t.default=c.exports},wKj5:function(e,t,n){"use strict";var a=n("PyJH");n.n(a).a}}]);