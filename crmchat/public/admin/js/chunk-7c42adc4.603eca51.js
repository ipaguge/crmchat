(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c42adc4"],{"90e7":function(t,e,n){"use strict";n.d(e,"f",(function(){return a})),n.d(e,"e",(function(){return i})),n.d(e,"o",(function(){return o})),n.d(e,"G",(function(){return c})),n.d(e,"C",(function(){return s})),n.d(e,"B",(function(){return u})),n.d(e,"k",(function(){return l})),n.d(e,"l",(function(){return d})),n.d(e,"D",(function(){return f})),n.d(e,"E",(function(){return h})),n.d(e,"F",(function(){return m})),n.d(e,"x",(function(){return p})),n.d(e,"y",(function(){return g})),n.d(e,"v",(function(){return b})),n.d(e,"w",(function(){return v})),n.d(e,"t",(function(){return O})),n.d(e,"n",(function(){return w})),n.d(e,"r",(function(){return j})),n.d(e,"q",(function(){return k})),n.d(e,"g",(function(){return _})),n.d(e,"s",(function(){return y})),n.d(e,"j",(function(){return I})),n.d(e,"p",(function(){return x})),n.d(e,"h",(function(){return C})),n.d(e,"a",(function(){return S})),n.d(e,"b",(function(){return $})),n.d(e,"d",(function(){return M})),n.d(e,"m",(function(){return R})),n.d(e,"i",(function(){return V})),n.d(e,"c",(function(){return L})),n.d(e,"z",(function(){return P})),n.d(e,"A",(function(){return T})),n.d(e,"u",(function(){return F}));var r=n("6b6c");function a(t){return Object(r["a"])({url:"setting/config/header_basics",method:"get",params:t})}function i(t,e){return Object(r["a"])({url:e,method:"get",params:t})}function o(t){return Object(r["a"])({url:"chat/kefu/login/".concat(t),method:"get"})}function c(t){return Object(r["a"])({url:"chat/speechcraft",method:"get",params:t})}function s(t){return Object(r["a"])({url:"chat/speechcraft/".concat(t,"/edit"),method:"get"})}function u(){return Object(r["a"])({url:"chat/speechcraft/create",method:"get"})}function l(t){return Object(r["a"])({url:"chat/feedback",method:"get",params:t})}function d(t){return Object(r["a"])({url:"chat/feedback/".concat(t,"/edit"),method:"get"})}function f(){return Object(r["a"])({url:"chat/speechcraftcate",method:"get"})}function h(){return Object(r["a"])({url:"chat/speechcraftcate/create",method:"get"})}function m(t){return Object(r["a"])({url:"chat/speechcraftcate/".concat(t,"/edit"),method:"get"})}function p(t){return Object(r["a"])({url:"setting/role",method:"GET",params:t})}function g(t){return Object(r["a"])({url:"setting/role/set_status/".concat(t.id,"/").concat(t.status),method:"PUT"})}function b(t){return Object(r["a"])({url:"setting/role/".concat(t.id),method:"post",data:t})}function v(t){return Object(r["a"])({url:"setting/role/".concat(t,"/edit"),method:"get"})}function O(){return Object(r["a"])({url:"setting/role/create",method:"get"})}function w(t){return Object(r["a"])({url:"chat/kefu",method:"get",params:t})}function j(t){return Object(r["a"])({url:"chat/kefu/create",method:"get",params:t})}function k(){return Object(r["a"])({url:"chat/kefu/add",method:"get"})}function _(t){return Object(r["a"])({url:"chat/kefu",method:"post",data:t})}function y(t){return Object(r["a"])({url:"chat/kefu/set_status/".concat(t.id,"/").concat(t.status),method:"PUT"})}function I(t){return Object(r["a"])({url:"chat/kefu/".concat(t,"/edit"),method:"GET"})}function x(t,e){return Object(r["a"])({url:"chat/kefu/record/".concat(e),method:"GET",params:t})}function C(t){return Object(r["a"])({url:"chat/kefu/chat_list",method:"GET",params:t})}function S(t){return Object(r["a"])({url:"chat/qrcode",method:"get",params:t})}function $(t){return Object(r["a"])({url:"chat/qrcode/".concat(t),method:"get"})}function M(t){return Object(r["a"])({url:"chat/statistics",method:"get",params:t})}function R(){return Object(r["a"])({url:"chat/group",method:"get"})}function V(t){return Object(r["a"])({url:"chat/group/create/"+t,method:"get"})}function L(t){return Object(r["a"])({url:"chat/record",method:"get",params:t})}function P(t){return Object(r["a"])({url:"setting/verison",method:"get",params:t})}function T(t){return Object(r["a"])({url:"setting/verison/".concat(t),method:"get"})}function F(t){return Object(r["a"])({url:"chat/record/list",method:"get",params:t})}},af3c:function(t,e,n){"use strict";n("e38d")},e38d:function(t,e,n){},ffd0:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"i-layout-page-header"},[e("div",{staticClass:"i-layout-page-header"},[e("span",{staticClass:"ivu-page-header-title"},[t._v(t._s(t.$route.meta.title))])])]),e("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[e("Form",{ref:"formValidate",attrs:{model:t.formValidate,"label-width":t.labelWidth,"label-position":t.labelPosition},nativeOn:{submit:function(t){t.preventDefault()}}},[e("Row",{attrs:{type:"flex",gutter:24}},[e("Col",t._b({},"Col",t.grid,!1),[e("FormItem",{attrs:{label:"状态：","label-for":"status"}},[e("Select",{attrs:{placeholder:"请选择",clearable:""},on:{"on-change":t.userSearchs},model:{value:t.formValidate.status,callback:function(e){t.$set(t.formValidate,"status",e)},expression:"formValidate.status"}},[e("Option",{attrs:{value:"1"}},[t._v("显示")]),e("Option",{attrs:{value:"0"}},[t._v("不显示")])],1)],1)],1),e("Col",t._b({},"Col",t.grid,!1),[e("FormItem",{attrs:{label:"身份昵称：","label-for":"role_name"}},[e("Input",{attrs:{search:"","enter-button":"",placeholder:"请输入身份昵称"},on:{"on-search":t.userSearchs},model:{value:t.formValidate.role_name,callback:function(e){t.$set(t.formValidate,"role_name",e)},expression:"formValidate.role_name"}})],1)],1)],1),e("Row",{attrs:{type:"flex"}},[e("Col",t._b({},"Col",t.grid,!1),[e("Button",{directives:[{name:"auth",rawName:"v-auth",value:["setting-system_role-add"],expression:"['setting-system_role-add']"}],attrs:{type:"primary",icon:"md-add"},on:{click:function(e){return t.add("添加")}}},[t._v("添加身份")])],1)],1)],1),e("Table",{ref:"table",staticClass:"mt25",attrs:{columns:t.columns1,data:t.tableList,loading:t.loading,"highlight-row":"","no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果"},scopedSlots:t._u([{key:"is_shows",fn:function(n){var r=n.row;n.index;return[e("i-switch",{attrs:{value:r.status,"true-value":1,"false-value":0,size:"large"},on:{"on-change":function(e){return t.onchangeIsShow(r)}},model:{value:r.status,callback:function(e){t.$set(r,"status",e)},expression:"row.status"}},[e("span",{attrs:{slot:"open"},slot:"open"},[t._v("显示")]),e("span",{attrs:{slot:"close"},slot:"close"},[t._v("隐藏")])])]}},{key:"action",fn:function(n){var r=n.row,a=n.index;return[e("a",{on:{click:function(e){return t.edit(r,"编辑")}}},[t._v("编辑")]),e("Divider",{attrs:{type:"vertical"}}),e("a",{on:{click:function(e){return t.del(r,"删除",a)}}},[t._v("删除")])]}}])}),e("div",{staticClass:"acea-row row-right page"},[e("Page",{attrs:{total:t.total,current:t.formValidate.page,"show-elevator":"","show-total":"","page-size":t.formValidate.limit},on:{"on-change":t.pageChange}})],1)],1),e("Modal",{attrs:{scrollable:"","footer-hide":"",closable:"",title:"".concat(t.modelTit,"身份"),"mask-closable":!1,width:"600"},on:{"on-cancel":t.onCancel},model:{value:t.modals,callback:function(e){t.modals=e},expression:"modals"}},[e("Form",{ref:"formInline",attrs:{model:t.formInline,rules:t.ruleValidate,"label-width":100,"label-position":t.labelPosition2},nativeOn:{submit:function(t){t.preventDefault()}}},[e("FormItem",{attrs:{label:"身份名称：","label-for":"role_name",prop:"role_name"}},[e("Input",{attrs:{placeholder:"请输入身份昵称"},model:{value:t.formInline.role_name,callback:function(e){t.$set(t.formInline,"role_name",e)},expression:"formInline.role_name"}})],1),e("FormItem",{attrs:{label:"是否开启：",prop:"status"}},[e("RadioGroup",{model:{value:t.formInline.status,callback:function(e){t.$set(t.formInline,"status",e)},expression:"formInline.status"}},[e("Radio",{attrs:{label:1}},[t._v("开启")]),e("Radio",{attrs:{label:0}},[t._v("关闭")])],1)],1),e("FormItem",{attrs:{label:"权限："}},[e("div",{staticClass:"trees-coadd"},[e("div",{staticClass:"scollhide"},[e("div",{staticClass:"iconlist"},[e("Tree",{ref:"tree",attrs:{data:t.menusList,"show-checkbox":""}})],1)])])]),t.spinShow?e("Spin",{attrs:{size:"large",fix:""}}):t._e(),e("Button",{attrs:{type:"primary",size:"large",long:""},on:{click:function(e){return t.handleSubmit("formInline")}}},[t._v("提交")])],1)],1)],1)},a=[],i=(n("8e6e"),n("ac6a"),n("456d"),n("7f7f"),n("96cf"),n("3b8d")),o=n("bd86"),c=n("2f62"),s=n("90e7");function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var d={name:"systemrRole",data:function(){return{spinShow:!1,modals:!1,total:0,grid:{xl:7,lg:7,md:12,sm:24,xs:24},loading:!1,formValidate:{status:"",role_name:"",page:1,limit:20},columns1:[{title:"ID",key:"id",width:80},{title:"身份昵称",key:"role_name",minWidth:120},{title:"权限",key:"rules",tooltip:!0,width:1e3},{title:"状态",slot:"is_shows",minWidth:120},{title:"操作",slot:"action",fixed:"right",minWidth:120}],tableList:[],formInline:{role_name:"",status:0,checked_menus:[],id:0},menusList:[],modelTit:"",ruleValidate:{role_name:[{required:!0,message:"请输入身份昵称",trigger:"blur"}],status:[{required:!0,type:"number",message:"请选择是否开启",trigger:"change"}]}}},computed:l(l({},Object(c["e"])("media",["isMobile"])),{},{labelWidth:function(){return this.isMobile?void 0:75},labelPosition:function(){return this.isMobile?"top":"left"},labelPosition2:function(){return this.isMobile?"top":"right"}}),created:function(){this.getList()},methods:{add:function(t){this.formInline.id=0,this.modelTit=t,this.modals=!0,this.getmenusList()},del:function(t,e,n){var r=this,a={title:e,num:n,url:"setting/role/".concat(t.id),method:"DELETE",ids:""};this.$modalSure(a).then((function(t){r.$Message.success(t.msg),r.tableList.splice(n,1)})).catch((function(t){r.$Message.error(t.msg)}))},onchangeIsShow:function(t){var e=this,n={id:t.id,status:t.status};Object(s["y"])(n).then(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$Message.success(n.msg);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.$Message.error(t.msg)}))},getList:function(){var t=this;this.loading=!0,this.formValidate.status=this.formValidate.status||"",Object(s["x"])(this.formValidate).then(function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=n.data,t.tableList=r.list,t.total=n.data.count,t.loading=!1;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.loading=!1,t.$Message.error(e.msg)}))},pageChange:function(t){this.formValidate.page=t,this.getList()},userSearchs:function(){this.formValidate.page=1,this.getList()},edit:function(t,e){this.modelTit=e,this.formInline.id=t.id,this.modals=!0,this.rows=t,this.getIofo(t)},getmenusList:function(){var t=this;this.spinShow=!0,Object(s["t"])().then(function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=n.data,t.menusList=r.menus,t.menusList.map((function(t,e){"主页"===t.title&&(t.checked=!0,t.disableCheckbox=!0,t.children.length&&t.children.map((function(t){t.checked=!0,t.disableCheckbox=!0}))),t.expand=!1})),t.spinShow=!1;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.spinShow=!1,t.$Message.error(e.msg)}))},getIofo:function(t){var e=this;this.spinShow=!0,Object(s["w"])(t.id).then(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r=n.data,e.formInline=r.role||e.formInline,e.formInline.checked_menus=e.formInline.rules,e.tidyRes(r.menus),e.spinShow=!1;case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.spinShow=!1,e.$Message.error(t.msg)}))},tidyRes:function(t){var e=this,n=[];t.map((function(t){n.push(e.initMenu(t))})),this.$set(this,"menusList",n)},initMenu:function(t){var e=this,n={},r=","+this.formInline.checked_menus+",";return n.title=t.title,n.id=t.id,t.children&&t.children.length>0?(n.children=[],t.children.map((function(t){n.children.push(e.initMenu(t))}))):(n.checked=-1!==r.indexOf(String(","+n.id+",")),n.expand=!n.checked),n},handleSubmit:function(t){var e=this;this.$refs[t].validate((function(n){return!!n&&(e.formInline.checked_menus=[],e.$refs.tree.getCheckedAndIndeterminateNodes().map((function(t){e.formInline.checked_menus.push(t.id)})),0===e.formInline.checked_menus.length?e.$Message.warning("请至少选择一个权限"):void Object(s["v"])(e.formInline).then(function(){var n=Object(i["a"])(regeneratorRuntime.mark((function n(r){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.$Message.success(r.msg),e.modals=!1,e.getList(),e.$refs[t].resetFields(),e.formInline.checked_menus=[];case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()).catch((function(t){e.$Message.error(t.msg)})))}))},onCancel:function(){this.$refs["formInline"].resetFields(),this.formInline.checked_menus=[]}}},f=d,h=(n("af3c"),n("2877")),m=Object(h["a"])(f,r,a,!1,null,"2832b389",null);e["default"]=m.exports}}]);