(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2cedb392"],{3008:function(t,e,n){"use strict";var r=n("c48d"),i=n.n(r);i.a},8593:function(t,e,n){"use strict";n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return a})),n.d(e,"v",(function(){return c})),n.d(e,"g",(function(){return u})),n.d(e,"e",(function(){return s})),n.d(e,"f",(function(){return d})),n.d(e,"d",(function(){return l})),n.d(e,"r",(function(){return f})),n.d(e,"j",(function(){return g})),n.d(e,"q",(function(){return m})),n.d(e,"t",(function(){return h})),n.d(e,"w",(function(){return b})),n.d(e,"h",(function(){return p})),n.d(e,"u",(function(){return O})),n.d(e,"i",(function(){return v})),n.d(e,"s",(function(){return j}));var r=n("6b6c");function i(t){return Object(r["a"])({url:"setting/config_class",method:"get",params:t})}function o(t){return Object(r["a"])({url:"setting/config_class/create",method:"get"})}function a(t){return Object(r["a"])({url:"setting/config_class/".concat(t,"/edit"),method:"get"})}function c(t){return Object(r["a"])({url:"setting/config_class/set_status/".concat(t.id,"/").concat(t.status),method:"PUT"})}function u(t){return Object(r["a"])({url:"setting/config",method:"get",params:t})}function s(t){return Object(r["a"])({url:"setting/config/create",method:"get",params:t})}function d(t){return Object(r["a"])({url:"/setting/config/".concat(t,"/edit"),method:"get"})}function l(t,e){return Object(r["a"])({url:"setting/config/set_status/".concat(t,"/").concat(e),method:"PUT"})}function f(t){return Object(r["a"])({url:"setting/group",method:"get",params:t})}function g(t){return Object(r["a"])({url:t.url,method:t.method,data:t.datas})}function m(t){return Object(r["a"])({url:"setting/group/".concat(t),method:"get"})}function h(t){return Object(r["a"])({url:"system/log/search_admin",method:"GET"})}function b(t){return Object(r["a"])({url:"system/log",method:"GET",params:t})}function p(){return Object(r["a"])({url:"setting/get_kf_adv",method:"get"})}function O(t){return Object(r["a"])({url:"setting/set_kf_adv",method:"post",data:t})}function v(){return Object(r["a"])({url:"setting/get_user_agreement",method:"get"})}function j(t){return Object(r["a"])({url:"setting/set_user_agreement",method:"post",data:t})}},c48d:function(t,e,n){},e15d:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"article-manager"},[n("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[n("Form",{ref:"formValidate",staticClass:"form",attrs:{model:t.formValidate,rules:t.ruleValidate,"label-width":t.labelWidth,"label-position":t.labelPosition},nativeOn:{submit:function(t){t.preventDefault()}}},[n("div",{staticClass:"goodsTitle acea-row"},[n("div",{staticClass:"title"},[t._v("客服聊天页面展示：")])]),n("FormItem",{attrs:{label:"展示内容：",prop:"content"}},[n("vue-ueditor-wrap",{staticStyle:{width:"90%"},attrs:{config:t.myConfig},on:{beforeInit:t.addCustomDialog},model:{value:t.formValidate.content,callback:function(e){t.$set(t.formValidate,"content",e)},expression:"formValidate.content"}})],1),n("Button",{staticClass:"submission",attrs:{type:"primary"},on:{click:function(e){return t.onsubmit("formValidate")}}},[t._v("提交")])],1)],1)],1)},i=[],o=(n("8e6e"),n("ac6a"),n("456d"),n("96cf"),n("1da1")),a=(n("7f7f"),n("ade3")),c=n("2f62"),u=n("6625"),s=n.n(u),d=n("8593");function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){Object(a["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var g={name:"kfAdv",components:{VueUeditorWrap:s.a},data:function(){return{dialog:{},isChoice:"单选",grid:{xl:8,lg:8,md:12,sm:24,xs:24},gridPic:{xl:6,lg:8,md:12,sm:12,xs:12},gridBtn:{xl:4,lg:8,md:8,sm:8,xs:8},loading:!1,formValidate:{content:""},ruleValidate:{},value:"",modalPic:!1,template:!1,treeData:[],myConfig:{autoHeightEnabled:!1,initialFrameHeight:500,initialFrameWidth:"100%",UEDITOR_HOME_URL:"/admin/UEditor/",serverUrl:""}}},computed:f(f({},Object(c["e"])("media",["isMobile"])),{},{labelWidth:function(){return this.isMobile?void 0:120},labelPosition:function(){return this.isMobile?"top":"right"}}),watch:{$route:function(t,e){this.getKfAdv()}},methods:{getContent:function(t){this.formValidate.content=t,console.log(this.formValidate.content)},onsubmit:function(t){var e=this;this.$refs[t].validate((function(t){if(!t)return!1;Object(d["u"])(e.formValidate).then(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$Message.success(n.msg);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.$Message.error(t.msg)}))}))},getKfAdv:function(){var t=this;Object(d["h"])().then(function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=n.data,t.formValidate={content:r.content};case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.loading=!1,t.$Message.error(e.msg)}))},addCustomDialog:function(t){window.UE.registerUI("test-dialog",(function(t,e){var n=new window.UE.ui.Dialog({iframeUrl:"/admin/widget.images/index.html?fodder=dialog",editor:t,name:e,title:"上传图片",cssRules:"width:1200px;height:500px;padding:20px;"});this.dialog=n;var r=new window.UE.ui.Button({name:"dialog-button",title:"上传图片",cssRules:"background-image: url(../../../assets/images/icons.png);background-position: -726px -77px;",onclick:function(){n.render(),n.open()}});return r}),37)}},mounted:function(){this.getKfAdv()},created:function(){this.getClass()}},m=g,h=(n("3008"),n("2877")),b=Object(h["a"])(m,r,i,!1,null,"6d04f955",null);e["default"]=b.exports}}]);