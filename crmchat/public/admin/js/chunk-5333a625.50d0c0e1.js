(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5333a625"],{2171:function(e,t,n){},4031:function(e,t,n){e.exports=n.p+"img/warring.9f31951d.png"},"7b24":function(e,t,n){"use strict";var a=n("2171"),i=n.n(a);i.a},f2e4:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"i-layout-page-header"},[a("div",{staticClass:"i-layout-page-header"},[a("span",{staticClass:"ivu-page-header-title"},[e._v(e._s(e.$route.meta.title))])])]),a("div",{staticClass:"content"},[a("p",{staticClass:"font-w"},[e._v("1. 新版统计代码获取 ）")]),a("p",[e._v("此代码同时适用于PC端、移动端的页面，以异步加载形式进行加载，数据更准确、加载速度更快。请将此代码复制并粘贴到您要跟踪的每个网页中。")]),a("div",{staticClass:"code-content-wrap"},[a("textarea",{staticClass:"code",attrs:{id:"NormalCodeTextarea"}},[e._v('        <script src="'+e._s(e.srcUrl)+'"  id="customerServer" token="'+e._s(e.token.token)+'"><\/script>\n      ')])]),a("div",{staticClass:"other-wrap"},[a("a",{staticClass:"btn btn-blue btn-large",attrs:{href:"javascript:void(0);"},on:{click:function(t){return e.getCopy()}}},[a("span",[e._v("复制代码")])]),e._v("\n       \n      "),a("div",{staticClass:"btn btn-blue btn-large",attrs:{href:"javascript:void(0);"},on:{click:function(t){return e.resetToken()}}},[a("span",[e._v("重置token")])]),e.cloneTip?a("span",{staticClass:"setting-highlight"},[e._v("已复制到剪贴板！")]):e._e()]),a("p",{staticClass:"font-w"},[e._v("2. 代码安装说明 安装实例 建站工具中的安装方法")]),a("p",{staticClass:"text-i"},[e._v("1. 新建js文件, 将代码复制到文件中。")]),a("p",{staticClass:"text-i"},[e._v('2. 将js文件引入到需要调用客服服务的html文件的最下方, 并给 script 标签添加属性id = "customerServer"')]),a("p",{staticClass:"text-i"},[e._v("3. 将客户信息挂载到window上，参数参考下方代码 ")]),a("textarea",{staticClass:"code",attrs:{id:"NormalCodeTextarea"}},[e._v("          window.testGetFatherData = {\n              uid: '',\n              url: '',\n              nickName: '',\n              phone: '',\n              type: 'getImgOrText',\n              time: '',\n              productInfo: {\n                store_name: '',\n                stock: '',\n                sales: '',\n                price: '',\n                image: ''\n            }\n        };\n\n    ")]),a("p",{staticClass:"text-i"},[e._v("4. 参数说明")]),a("p",{staticClass:"text-i table_width"},[a("Table",{attrs:{columns:e.columns1,data:e.data1}})],1),a("p",{staticStyle:{"padding-top":"20px"}},[e._v("小贴士：")]),a("p",[e._v("1.此代码不会影响您网站页面的显示，请您放心使用。")]),a("p",[e._v("2.如果您有技术上的疑问，可咨询您的网站管理员、托管公司，或者百度推广顾问。")])]),a("Modal",{attrs:{title:"提示"},on:{"on-ok":e.confirme,"on-cancel":e.cancel},model:{value:e.canfrime,callback:function(t){e.canfrime=t},expression:"canfrime"}},[a("div",{staticClass:"ivu-modal-confirm"},[a("img",{attrs:{src:n("4031"),alt:""}}),a("div",[e._v("\n        token重置后，数据将全部更新，历史数据将会失效，请问是否确定？\n      ")])])])],1)},i=[],s=(n("8e6e"),n("ac6a"),n("456d"),n("ade3")),r=n("2f62"),o=n("42e3");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){Object(s["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p={name:"setting_user",computed:l(l(l({},Object(r["e"])("media",["isMobile"])),Object(r["e"])("userLevel",["categoryId"])),{},{labelWidth:function(){return this.isMobile?void 0:75},labelPosition:function(){return this.isMobile?"top":"left"}}),data:function(){return{canfrime:!1,srcUrl:"".concat(location.origin,"/customerServer.js"),cloneTip:!1,columns1:[{title:"参数",key:"name"},{title:"类型",key:"type"},{title:"是否必选",key:"isRequired"},{title:"示例值",key:"example"},{title:"参数说明",key:"message"}],data1:[{name:"uid",type:"Number",isRequired:"false",example:"10",message:"用户的唯一标识"},{name:"url",type:"String",isRequired:"true",example:"http://192.168.31.192:8080",message:"部署后台服务的服务器域名"},{name:"nickName",type:"String",isRequired:"false",example:"张三",message:"用户昵称"},{name:"phone",type:"String",isRequired:"false",example:"130****6654",message:"用户手机号码"},{name:"type",type:"String",isRequired:"true",example:"getImgOrText",message:"固定为getImgOrText，意为图文消息"},{name:"time",type:"String",isRequired:"true",example:"new Date().getTime()",message:"传入当前时间的时间戳"},{name:"productInfo",type:"Object",isRequired:"true",example:"{}",message:"商品详情的对象容器"},{name:"store_name",type:"String",isRequired:"true",example:"碎花裙",message:"商品名称"},{name:"stock",type:"String",isRequired:"true",example:"碎花裙",message:"商品名称"},{name:"sales",type:"Number | String",isRequired:"true",example:"100",message:"销量"},{name:"price",type:"Number | String",isRequired:"true",example:"10",message:"商品价格"},{name:"image",type:"String",isRequired:"true",example:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F4495e731345f73cb023b1d70197d50e7f451dbc91a88e-UU7MfN_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1629276024&t=9d1c5b297dc857ddd2d18c9580dde427",message:"商品图片链接"}],token:""}},mounted:function(){this.getAdminAppCustomer()},methods:{getAdminAppCustomer:function(){var e=this;Object(o["e"])().then((function(t){console.log(t),200==t.status&&t.data.list.length&&(e.token=t.data.list[0])}))},resetToken:function(){this.canfrime=!0},confirme:function(){var e=this;Object(o["f"])(this.token.id).then((function(t){200==t.status&&e.$set(e.token,"token",t.data.token)}))},cancel:function(){},getCopy:function(){var e=this.copyToClipboard(document.getElementById("NormalCodeTextarea"));e&&(this.cloneTip=!0)},copyToClipboard:function(e){var t,n,a="_hiddenCopyText_",i="INPUT"===e.tagName||"TEXTAREA"===e.tagName;if(i)s=e,t=e.selectionStart,n=e.selectionEnd;else{if(s=document.getElementById(a),!s){var s=document.createElement("textarea");s.style.position="absolute",s.style.left="-9999px",s.style.top="0",s.id=a,document.body.appendChild(s)}s.textContent=e.textContent}var r,o=document.activeElement;s.focus(),s.setSelectionRange(0,s.value.length);try{r=document.execCommand("copy")}catch(c){r=!1}return o&&"function"===typeof o.focus&&o.focus(),i?e.setSelectionRange(t,n):s.textContent="",r}}},u=p,m=(n("7b24"),n("2877")),d=Object(m["a"])(u,a,i,!1,null,"7d52d8da",null);t["default"]=d.exports}}]);