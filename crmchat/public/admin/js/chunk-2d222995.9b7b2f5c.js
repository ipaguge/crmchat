(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d222995"],{cefc:function(e,t,r){"use strict";r.r(t);var c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"redirect_container"})},n=[],o=(r("ac67"),r("1bc7"),r("32ea"),r("357a")),i=r("7736"),u=(r("e04f"),r("c276"));function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,c)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){Object(o["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b={created:function(){this.redirect()},computed:a({},Object(i["e"])("media",["isMobile"])),methods:{redirect:function(){var e=this.$route.query.token;Object(u["s"])("mobile_token",e),"Mobile"==this.$route.query.deviceType?this.$router.push({name:"customerServerMobile",query:this.$route.query}):this.$router.push({name:"customerServerPc",query:this.$route.query})}}},p=b,l=r("5d22"),O=Object(l["a"])(p,c,n,!1,null,null,null);t["default"]=O.exports}}]);