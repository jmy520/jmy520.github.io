(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0b61"],{FIqn:function(e,n,a){"use strict";var s=a("WhiX");a.n(s).a},K0zz:function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAaElEQVQ4T2NkoDJgpLJ5DEQZWO/+7DDI4sadUraEHECUgXVuz/6DDGraJUVQPUEFIINGDcQbL7QLQ1DS+P+fwYZQssAmz8jIcASWpOAupLqB+Fw2mmwGKNnQNVKoXnyRktiJynqkGAgAFfhGFbK/J0gAAAAASUVORK5CYII="},KQRV:function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAACvUlEQVQ4T71UTUhUURg95z0dlcxSI50Ba5cQuGoTJLVITZOoqKFCU/OvNi3aRAU6zwxqEbgLQse01P6shBAZraAQiiioaJVBf6DTBGWSY6n3fvHGcTKbERfS2zzeve873znnnu8SS/xwifGwIODxTV+WJyZP7aegQoBEwGgzONVp+bK+xiISFdCTF8iFqaq0iJvAMgDvAKwAkAbgJ8Eekl6PL+M+QZkLHgG0tgcyRakyEakEkA1gDMBNIdobfc7Bo0VvHekqeYcCygkpBBAH8D2g26h5qeGe66MNHAKsLxi5AKAakHiCDzTF+2NM3Wl6nDURTdqprZ8zTEOVkKgNN9ckuxt8zn1hwOHbAHaHiwMEuihx7dbA6hfzAd1uMbPHRvJNYbmI7ASRFGJGDDb4nJsjkuvy/Dk0dZUISgmkzwDxlYi0K212mnF6FUWXA0YJIK7w/neA1wxKq+VzPo1InsvCcosDY/5dGlIJYR4gJgAFwH5DACH4yCBa4ZBu664r+M+h1BcMP58pMLyT8b86zvWu/Wb/5MkbXqPJClIOAXQQclmJaj0zkDVk758o/pDqmEooBXSV3fR0v2tDSLKnYLhJBIdDfggmSOOWFmlpHHA+nOkuoWzMRqQuf2SLQVaL6D1/anCxod91LOLh2eLR1OBU8CBB+7RzZnDwRiBek2ab/alEVRCsArEuLPO1AaM5IT7xysnelSFVUYNtFfk3ipIaDbFjYAd7MgzgEGDcAK/TZLPVl/lkfgpmYxPVQ6toKEVPpxwAVU2IsKDFjEvosvrS7dAv5KG/SaCPwJ7XqB7+zWNRHlrbPqUpmGXUrAFl/SI9fClki5mU2GH1pI7G9NBTGMgVUbXQsjc8CREPwzN+1RC0WAOuZ1E9jDav9pp98hPTwTIIbA9HQfEGxbxxvj9zPFbN/71gY7FYaP03EGE4JFlByZoAAAAASUVORK5CYII="},WhiX:function(e,n,a){},vIeG:function(e,n,a){"use strict";a.r(n);var s={name:"ConfirmOrder",data:function(){return{receiveAddressList:[{id:1,name:"mike",isDefault:!0,address:"广东省深圳市南山区南山大道1980号-腾讯大厦32楼",phone:"8615612341234"},{id:2,name:"leon",isDefault:!0,address:"广东省深圳市南山区南山大道1980号-腾讯大厦32楼",phone:"8615612341234"},{id:3,name:"forks",isDefault:!0,address:"广东省深圳市南山区南山大道1980号-腾讯大厦32楼",phone:"8615612341234"},{id:4,name:"billy",isDefault:!0,address:"广东省深圳市南山区南山大道1980号-腾讯大厦32楼",phone:"8615612341234"}],invoiceInformation:{companyName:"天玑数据有限公司",taxNumber:"5663564645"},express:{name:"顺丰快递",amount_en:45,amount:320},withInvoiceOrNot:!1,isCheckedCompany:!1,cartGoodsList:[{id:1,image:"../../src/assets/images/img_machine_sample.png",name:"RGB钛金牌全模组挖矿机服务器1250w",name_en:"RGB钛金牌全模组挖矿机服务器1250w",price:13299,price_en:2048,count:1},{id:2,image:"../../src/assets/images/img_machine_sample.png",name:"RGB钛金牌全模组挖矿机服务器1250w",name_en:"RGB钛金牌全模组挖矿机服务器1250w",price:13299,price_en:2048,count:1},{id:3,image:"../../src/assets/images/img_machine_sample.png",name:"RGB钛金牌全模组挖矿机服务器1250w",name_en:"RGB钛金牌全模组挖矿机服务器1250w",price:13299,price_en:2048,count:1},{id:4,image:"../../src/assets/images/img_machine_sample.png",name:"RGB钛金牌全模组挖矿机服务器1250w",name_en:"RGB钛金牌全模组挖矿机服务器1250w",price:13299,price_en:2048,count:1},{id:5,image:"../../src/assets/images/img_machine_sample.png",name:"RGB钛金牌全模组挖矿机服务器1250w",name_en:"RGB钛金牌全模组挖矿机服务器1250w",price:13299,price_en:2048,count:1}],remark:""}},created:function(){},methods:{getTotalAmount:function(){return this.$t("common.currency_symbol")+("en"===this.$parent.$parent.language?"2048.00":"13299.00")},handleSubmit:function(){this.$router.push("/pay-order")}}},t=(a("FIqn"),a("KHd+")),r=Object(t.a)(s,function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("div",{staticClass:"confirm-order-container"},[s("div",{staticClass:"main-content"},[s("div",{staticClass:"status-indication-wrapper"},[s("span",{staticClass:"active"},[e._v("\n        "+e._s(e.$t("confirm_order.status_01"))+"\n      ")]),e._v(" "),s("span",[e._v("\n        "+e._s(e.$t("confirm_order.status_02"))+"\n      ")]),e._v(" "),s("span",[e._v("\n        "+e._s(e.$t("confirm_order.status_03"))+"\n      ")])]),e._v(" "),s("h4",[e._v("\n      "+e._s(e.$t("confirm_order.choose_receive_address"))+"\n    ")]),e._v(" "),s("div",{staticClass:"receive-address-list"},e._l(e.receiveAddressList,function(n,a){return s("div",{key:a,staticClass:"receive-address-item"},[s("div",{staticClass:"name-wrapper"},[s("span",[e._v("\n            "+e._s(n.name)+"\n          ")]),e._v(" "),s("span",[e._v("\n            "+e._s(n.isDefault?e.$t("confirm_order.default"):"")+"\n          ")])]),e._v(" "),s("div",{staticClass:"detail-address-wrapper"},[s("span",[e._v("\n            "+e._s(e.$t("confirm_order.detail_address"))+"\n          ")]),e._v(" "),s("span",[e._v("\n            "+e._s(n.address)+"\n          ")])]),e._v(" "),s("div",{staticClass:"phone-wrapper"},[s("span",[e._v("\n            "+e._s(e.$t("confirm_order.phone"))+"\n          ")]),e._v(" "),s("span",[e._v("\n            "+e._s(n.phone)+"\n          ")])])])})),e._v(" "),s("div",{staticClass:"receive-address-operation"},[s("div",{staticClass:"manage-receive-address"},[s("img",{attrs:{src:a("KQRV")}}),e._v(" "),s("span",[e._v("\n          "+e._s(e.$t("confirm_order.manage_receive_address"))+"\n        ")])]),e._v(" "),s("div",{staticClass:"add-receive-address"},[s("img",{attrs:{src:a("K0zz")}}),e._v(" "),s("span",[e._v("\n          "+e._s(e.$t("confirm_order.create_receive_address"))+"\n        ")])])]),e._v(" "),s("h4",[e._v("\n      "+e._s(e.$t("confirm_order.invoice_information"))+"\n      "),s("el-checkbox",{attrs:{label:e.$t("confirm_order.is_invoice")},model:{value:e.withInvoiceOrNot,callback:function(n){e.withInvoiceOrNot=n},expression:"withInvoiceOrNot"}})],1),e._v(" "),s("div",{staticClass:"invoice-information-wrapper"},[s("h4",[e._v("\n        "+e._s(e.$t("confirm_order.invoice_header",[e.invoiceInformation.companyName,e.invoiceInformation.taxNumber]))+"\n      ")]),e._v(" "),s("p",[e._v("\n        "+e._s(e.$t("confirm_order.invoice_tips"))+"\n      ")])]),e._v(" "),s("h4",[e._v("\n      "+e._s(e.$t("confirm_order.confirm_goods_information"))+"\n    ")]),e._v(" "),s("el-table",{attrs:{data:e.cartGoodsList,"tooltip-effect":"dark"}},[s("el-table-column",{attrs:{label:e.$t("confirm_order.goods_information"),"class-name":"goods-info-column","label-class-name":"goods-info-column-label",width:"540"},scopedSlots:e._u([{key:"default",fn:function(n){return[s("el-image",{attrs:{src:n.row.image,fit:"cover"}}),e._v(" "),s("span",[e._v("\n            "+e._s("en"===e.$parent.$parent.language?n.row.name_en:n.row.name)+"\n          ")])]}}])}),e._v(" "),s("el-table-column",{attrs:{label:e.$t("confirm_order.price"),"min-width":"120"},scopedSlots:e._u([{key:"default",fn:function(n){return[e._v("\n          "+e._s("en"===e.$parent.$parent.language?e.$t("common.currency_symbol")+n.row.price_en:e.$t("common.currency_symbol")+n.row.price)+"\n        ")]}}])}),e._v(" "),s("el-table-column",{attrs:{label:e.$t("confirm_order.count"),prop:"count","min-width":"80"}}),e._v(" "),s("el-table-column",{attrs:{label:e.$t("confirm_order.amount"),"class-name":"amount-column","label-class-name":"amount-column-label","min-width":"160"},scopedSlots:e._u([{key:"default",fn:function(n){return[e._v("\n          "+e._s("en"===e.$parent.$parent.language?e.$t("common.currency_symbol")+n.row.price_en*n.row.count:e.$t("common.currency_symbol")+n.row.price*n.row.count)+"\n        ")]}}])}),e._v(" "),s("el-table-column",{attrs:{label:e.$t("common.operation"),"min-width":"80"},scopedSlots:e._u([{key:"default",fn:function(n){return[s("el-button",{attrs:{type:"text"},on:{click:function(a){e.handleDeleteItem(n.row)}}},[e._v("\n            "+e._s(e.$t("common.delete"))+"\n          ")])]}}])})],1),e._v(" "),s("div",{staticClass:"remark-and-express"},[s("div",{staticClass:"remark"},[s("span",[e._v("\n          "+e._s(e.$t("confirm_order.remark"))+"\n        ")]),e._v(" "),s("el-input",{attrs:{placeholder:e.$t("confirm_order.remark_placehold")},model:{value:e.remark,callback:function(n){e.remark=n},expression:"remark"}})],1),e._v(" "),s("div",{staticClass:"express"},[s("span",[e._v("\n          "+e._s(e.$t("confirm_order.express"))+"\n        ")]),e._v(" "),s("span",[e._v("\n          "+e._s(e.express.name)+"\n        ")]),e._v(" "),s("span",[e._v("\n          "+e._s(e.$t("common.currency_symbol")+("en"===e.$parent.$parent.language?e.express.amount_en:e.express.amount))+"\n        ")])])])],1),e._v(" "),s("div",{staticClass:"confirm-order-footer"},[s("div",{staticClass:"main-content"},[s("span",[e._v("\n        "+e._s(e.$t("confirm_order.total"))+"\n      ")]),e._v(" "),s("span",[e._v("\n        "+e._s(e.getTotalAmount())+"\n      ")]),e._v(" "),s("el-button",{attrs:{round:!0,type:"primary"},on:{click:function(n){e.handleSubmit()}}},[e._v("\n        "+e._s(e.$t("confirm_order.submit"))+"\n      ")])],1)])])},[],!1,null,"7cd4b2a4",null);r.options.__file="index.vue";n.default=r.exports}}]);