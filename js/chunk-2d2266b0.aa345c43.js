(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2266b0"],{e928:function(a,e,t){"use strict";t.r(e);var r=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"form-panel__part"},[t("div",{staticClass:"form-panel__part__form-title"},[a._v("寄送地址")]),t("div",{staticClass:"form-panel__part__content"},[t("div",{staticClass:"form-panel__part__content__form-row name-wrapper"},[t("div",{staticClass:"form-panel__part__content__form-row__input salutation"},[t("label",[a._v("稱謂")]),t("div",{staticClass:"select-wrapper"},[t("select",{directives:[{name:"model",rawName:"v-model",value:a.formData.salutation,expression:"formData.salutation"}],attrs:{name:"salutation",id:"salutation",required:""},on:{change:function(e){var t=Array.prototype.filter.call(e.target.options,(function(a){return a.selected})).map((function(a){var e="_value"in a?a._value:a.value;return e}));a.$set(a.formData,"salutation",e.target.multiple?t:t[0])}}},[t("option",{attrs:{value:"",disabled:"",selected:""}},[a._v("請選擇稱謂")]),a._l(a.address.salutations,(function(e){return t("option",{key:e.id,domProps:{value:e.value}},[a._v(a._s(e.title))])}))],2)])]),t("div",{staticClass:"form-panel__part__content__form-row__input name"},[t("label",[a._v("姓名")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.formData.name,expression:"formData.name"}],attrs:{type:"text",name:"name",id:"name",placeholder:"請輸入姓名",required:""},domProps:{value:a.formData.name},on:{input:function(e){e.target.composing||a.$set(a.formData,"name",e.target.value)}}})])]),t("div",{staticClass:"form-panel__part__content__form-row contact-wrapper"},[t("div",{staticClass:"form-panel__part__content__form-row__input phone"},[t("label",[a._v("電話")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.formData.phone,expression:"formData.phone"}],attrs:{type:"tel",name:"phone",id:"phone",placeholder:"請輸入行動電話",required:""},domProps:{value:a.formData.phone},on:{input:function(e){e.target.composing||a.$set(a.formData,"phone",e.target.value)}}})]),t("div",{staticClass:"form-panel__part__content__form-row__input mail"},[t("label",[a._v("Email")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.formData.mail,expression:"formData.mail"}],attrs:{type:"email",name:"mail",id:"mail",placeholder:"請輸入電子郵件",required:""},domProps:{value:a.formData.mail},on:{input:function(e){e.target.composing||a.$set(a.formData,"mail",e.target.value)}}})])]),t("div",{staticClass:"form-panel__part__content__form-row address-wrapper"},[t("div",{staticClass:"form-panel__part__content__form-row__input city"},[t("label",[a._v("縣市")]),t("div",{staticClass:"select-wrapper"},[t("select",{directives:[{name:"model",rawName:"v-model",value:a.formData.city,expression:"formData.city"}],attrs:{name:"city",id:"city",required:""},on:{change:function(e){var t=Array.prototype.filter.call(e.target.options,(function(a){return a.selected})).map((function(a){var e="_value"in a?a._value:a.value;return e}));a.$set(a.formData,"city",e.target.multiple?t:t[0])}}},[t("option",{attrs:{value:"",disabled:"",selected:""}},[a._v("請選擇縣市")]),a._l(a.address.cities,(function(e){return t("option",{key:e.countycode01,domProps:{value:e.countyname}},[a._v(a._s(e.countyname))])}))],2)])]),t("div",{staticClass:"form-panel__part__content__form-row__input address"},[t("label",[a._v("地址")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.formData.address,expression:"formData.address"}],attrs:{type:"text",name:"address",id:"address",placeholder:"請輸入地址",required:""},domProps:{value:a.formData.address},on:{input:function(e){e.target.composing||a.$set(a.formData,"address",e.target.value)}}})])])])])},o=[],n=t("2708"),s={name:"PurchaseAddress",mixins:[n["b"]],props:{address:{type:Object,required:!0}}},i=s,l=t("2877"),m=Object(l["a"])(i,r,o,!1,null,null,null);e["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2d2266b0.aa345c43.js.map