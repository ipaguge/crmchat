(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-197f12ac"],{8608:function(t,e,a){"use strict";a("9523")},"90e7":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"a",(function(){return r})),a.d(e,"i",(function(){return o})),a.d(e,"x",(function(){return s})),a.d(e,"t",(function(){return c})),a.d(e,"s",(function(){return u})),a.d(e,"f",(function(){return l})),a.d(e,"g",(function(){return d})),a.d(e,"u",(function(){return h})),a.d(e,"v",(function(){return f})),a.d(e,"w",(function(){return m})),a.d(e,"q",(function(){return g})),a.d(e,"r",(function(){return p})),a.d(e,"o",(function(){return v})),a.d(e,"p",(function(){return b})),a.d(e,"n",(function(){return w})),a.d(e,"h",(function(){return k})),a.d(e,"l",(function(){return y})),a.d(e,"k",(function(){return O})),a.d(e,"c",(function(){return j})),a.d(e,"m",(function(){return x})),a.d(e,"e",(function(){return _})),a.d(e,"j",(function(){return C})),a.d(e,"d",(function(){return L}));var i=a("6b6c");function n(t){return Object(i["a"])({url:"setting/config/header_basics",method:"get",params:t})}function r(t,e){return Object(i["a"])({url:e,method:"get",params:t})}function o(t){return Object(i["a"])({url:"chat/kefu/login/".concat(t),method:"get"})}function s(t){return Object(i["a"])({url:"chat/speechcraft",method:"get",params:t})}function c(t){return Object(i["a"])({url:"chat/speechcraft/".concat(t,"/edit"),method:"get"})}function u(){return Object(i["a"])({url:"chat/speechcraft/create",method:"get"})}function l(t){return Object(i["a"])({url:"chat/feedback",method:"get",params:t})}function d(t){return Object(i["a"])({url:"chat/feedback/".concat(t,"/edit"),method:"get"})}function h(){return Object(i["a"])({url:"chat/speechcraftcate",method:"get"})}function f(){return Object(i["a"])({url:"chat/speechcraftcate/create",method:"get"})}function m(t){return Object(i["a"])({url:"chat/speechcraftcate/".concat(t,"/edit"),method:"get"})}function g(t){return Object(i["a"])({url:"setting/role",method:"GET",params:t})}function p(t){return Object(i["a"])({url:"setting/role/set_status/".concat(t.id,"/").concat(t.status),method:"PUT"})}function v(t){return Object(i["a"])({url:"setting/role/".concat(t.id),method:"post",data:t})}function b(t){return Object(i["a"])({url:"setting/role/".concat(t,"/edit"),method:"get"})}function w(){return Object(i["a"])({url:"setting/role/create",method:"get"})}function k(t){return Object(i["a"])({url:"chat/kefu",method:"get",params:t})}function y(t){return Object(i["a"])({url:"chat/kefu/create",method:"get",params:t})}function O(){return Object(i["a"])({url:"chat/kefu/add",method:"get"})}function j(t){return Object(i["a"])({url:"chat/kefu",method:"post",data:t})}function x(t){return Object(i["a"])({url:"chat/kefu/set_status/".concat(t.id,"/").concat(t.status),method:"PUT"})}function _(t){return Object(i["a"])({url:"chat/kefu/".concat(t,"/edit"),method:"GET"})}function C(t,e){return Object(i["a"])({url:"chat/kefu/record/".concat(e),method:"GET",params:t})}function L(t){return Object(i["a"])({url:"chat/kefu/chat_list",method:"GET",params:t})}},9523:function(t,e,a){},b90a:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"i-layout-page-header"},[a("div",{staticClass:"i-layout-page-header"},[a("span",{staticClass:"ivu-page-header-title"},[t._v(t._s(t.$route.meta.title))])])]),a("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[a("Row",{staticClass:"mb20",attrs:{type:"flex"}},[a("Col",{attrs:{span:"24"}},[a("Button",{directives:[{name:"auth",rawName:"v-auth",value:["setting-store_service-add"],expression:"['setting-store_service-add']"}],staticClass:"mr10",attrs:{type:"primary",icon:"md-add"},on:{click:t.add}},[t._v("添加客服")])],1)],1),a("Table",{attrs:{columns:t.columns1,data:t.tableList,loading:t.loading,"highlight-row":"","no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果"},scopedSlots:t._u([{key:"avatar",fn:function(t){var e=t.row;t.index;return[a("div",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"tabBox_img"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.avatar,expression:"row.avatar"}]})])]}},{key:"status",fn:function(e){var i=e.row;e.index;return[a("i-switch",{attrs:{value:i.status,"true-value":1,"false-value":0,size:"large"},on:{"on-change":function(e){return t.onchangeIsShow(i)}},model:{value:i.status,callback:function(e){t.$set(i,"status",e)},expression:"row.status"}},[a("span",{attrs:{slot:"open"},slot:"open"},[t._v("开启")]),a("span",{attrs:{slot:"close"},slot:"close"},[t._v("关闭")])])]}},{key:"online",fn:function(e){var i=e.row;e.index;return[i.online?a("Tag",{attrs:{color:"success"}},[t._v("在线")]):a("Tag",{attrs:{color:"default"}},[t._v("下线")])]}},{key:"action",fn:function(e){var i=e.row,n=e.index;return[a("a",{on:{click:function(e){return t.edit(i)}}},[t._v("编辑")]),a("Divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(e){return t.del(i,"删除客服",n)}}},[t._v("删除")]),i.status?a("Divider",{attrs:{type:"vertical"}}):t._e(),i.status?a("a",{on:{click:function(e){return t.goChat(i)}}},[t._v("进入工作台")]):t._e(),a("Divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(e){return t.auth(i)}}},[t._v("自动回复")])]}}])}),a("div",{staticClass:"acea-row row-right page"},[a("Page",{attrs:{total:t.total,"show-elevator":"","show-total":"","page-size":t.tableFrom.limit},on:{"on-change":t.pageChange}})],1)],1),a("Modal",{attrs:{"footer-hide":"",scrollable:"",closable:"",title:"聊天记录",width:"700"},model:{value:t.modals3,callback:function(e){t.modals3=e},expression:"modals3"}},[t.isChat?a("div",{staticClass:"modelBox"},[a("Table",{attrs:{loading:t.loading3,"highlight-row":"","no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果",columns:t.columns3,data:t.tableList3},scopedSlots:t._u([{key:"headimgurl",fn:function(t){var e=t.row;t.index;return[a("div",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"tabBox_img"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.headimgurl,expression:"row.headimgurl"}]})])]}},{key:"action",fn:function(e){var i=e.row;e.index;return[a("a",{on:{click:function(e){return t.look(i)}}},[t._v("查看对话")])]}}],null,!1,3903412383)}),a("div",{staticClass:"acea-row row-right page"},[a("Page",{attrs:{total:t.total3,"show-elevator":"","show-total":"","page-size":t.formValidate3.limit},on:{"on-change":t.pageChange3}})],1)],1):t._e(),t.isChat?t._e():a("div",[a("Button",{attrs:{type:"primary"},on:{click:function(e){t.isChat=!0}}},[t._v("返回聊天记录")]),a("Table",{staticClass:"mt20",attrs:{loading:t.loading5,"highlight-row":"","no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果",columns:t.columns5,data:t.tableList5},scopedSlots:t._u([{key:"avatar",fn:function(t){var e=t.row;t.index;return[a("div",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"tabBox_img"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.avatar,expression:"row.avatar"}]})])]}},{key:"action",fn:function(e){var i=e.row;e.index;return[a("a",{on:{click:function(e){return t.look(i)}}},[t._v("查看对话")])]}}],null,!1,3441659566)}),a("div",{staticClass:"acea-row row-right page"},[a("Page",{attrs:{total:t.total5,"show-elevator":"","show-total":"","page-size":t.formValidate5.limit},on:{"on-change":t.pageChange5}})],1)],1)]),a("auto-reply",{ref:"AutoReply",attrs:{userId:t.userId,appId:t.appId}})],1)},n=[],r=(a("ac67"),a("1bc7"),a("32ea"),a("6a61"),a("dc45")),o=a("357a"),s=a("7736"),c=a("c276"),u=a("90e7"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Modal",{attrs:{"z-index":10,"footer-hide":"",scrollable:"",closable:"",title:"自动回复",width:"900"},model:{value:t.modals,callback:function(e){t.modals=e},expression:"modals"}},[a("Card",{attrs:{bordered:!1,"dis-hover":""}},[a("Row",{staticClass:"mb20",attrs:{type:"flex"}},[a("Col",{attrs:{span:"24"}},[a("Button",{staticClass:"mr10",attrs:{type:"primary",icon:"md-add"},on:{click:t.add}},[t._v("添加自动回复")])],1)],1),a("Table",{attrs:{columns:t.columns,data:t.tableList,loading:t.loading,"highlight-row":"","no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果"},scopedSlots:t._u([{key:"action",fn:function(e){var i=e.row,n=e.index;return[a("a",{on:{click:function(e){return t.edit(i)}}},[t._v("编辑")]),a("Divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(e){return t.del(i,n)}}},[t._v("删除")])]}}])}),a("div",{staticClass:"acea-row row-right page"},[a("Page",{attrs:{total:t.total,"show-elevator":"","show-total":"","page-size":t.formValidate.limit},on:{"on-change":t.pageChange}})],1)],1)],1)},d=[],h=(a("e680"),a("c24f")),f={name:"AutoReply",data:function(){return{total:0,formValidate:{limit:20,page:1},modals:!1,columns:[{title:"关键字",key:"keyword",width:200},{title:"客服头像",key:"content"},{title:"排序",key:"sort"},{title:"操作",slot:"action"}],tableList:[],loading:!0}},props:{userId:{type:Number,default:0},appId:{type:String,default:""}},watch:{userId:function(t){this.formValidate.page=1,this.tableList=[],this.total=0,this.getAuthlist()}},mounted:function(){this.getAuthlist()},methods:{open:function(){this.modals=!0},clear:function(){this.modals=!1},pageChange:function(t){this.formValidate.page=t,this.getAuthlist()},add:function(){var t=this;this.$modalForm(Object(h["d"])(0,{user_id:this.userId,appid:this.appId})).then((function(){return t.getAuthlist()}))},edit:function(t){var e=this;this.$modalForm(Object(h["d"])(t.id,{user_id:this.userId,appid:this.appId})).then((function(){return e.getAuthlist()}))},del:function(t,e){var a=this,i={title:"删除自动回复",num:e,url:"chat/reply/".concat(t.id),method:"DELETE",ids:""};this.$modalSure(i).then((function(t){a.$Message.success(t.msg),a.tableList.splice(e,1)})).catch((function(t){a.$Message.error(t.msg)}))},getAuthlist:function(){var t=this;Object(h["c"])({page:this.formValidate.page,limit:this.formValidate.limit,user_id:this.userId,appid:this.appId}).then((function(e){t.loading=!1,t.tableList=e.data.list,t.total=e.data.count})).catch((function(){t.loading=!1}))}}},m=f,g=a("5d22"),p=Object(g["a"])(m,l,d,!1,null,"4b1f9c83",null),v=p.exports;function b(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function w(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?b(Object(a),!0).forEach((function(e){Object(o["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var k={name:"index",filters:{typeFilter:function(t){var e={wechat:"微信用户",routine:"小程序用户"};return e[t]}},components:{AutoReply:v},computed:w(w(w({},Object(s["e"])("media",["isMobile"])),Object(s["e"])("userLevel",["categoryId"])),{},{labelWidth:function(){return this.isMobile?void 0:80},labelPosition:function(){return this.isMobile?"top":"left"}}),data:function(){return{userId:0,appId:"",isChat:!0,formValidate3:{page:1,limit:15},total3:0,loading3:!1,modals3:!1,tableList3:[],columns3:[{title:"用户名称",key:"nickname",width:200},{title:"客服头像",slot:"headimgurl"},{title:"操作",slot:"action"}],formValidate5:{page:1,limit:15,uid:0,to_uid:0,id:0},total5:0,loading5:!1,tableList5:[],columns5:[{title:"用户名称",key:"nickname",width:200},{title:"用户头像",slot:"avatar"},{title:"发送消息",key:"msn",width:250},{title:"发送时间",key:"add_time"}],FromData:null,formValidate:{page:1,limit:15,data:"",type:"",nickname:""},tableList2:[],modals:!1,total:0,tableFrom:{page:1,limit:15},timeVal:[],fromList:{title:"选择时间",custom:!0,fromTxt:[{text:"全部",val:""},{text:"今天",val:"today"},{text:"昨天",val:"yesterday"},{text:"最近7天",val:"lately7"},{text:"最近30天",val:"lately30"},{text:"本月",val:"month"},{text:"本年",val:"year"}]},loading:!1,tableList:[],columns1:[{title:"ID",key:"id",width:80},{title:"客服名称",key:"nickname",minWidth:60},{title:"客服账号",key:"account",minWidth:60},{title:"客服状态",slot:"status",minWidth:60},{title:"是否上线",slot:"online",minWidth:120},{title:"添加时间",key:"add_time",minWidth:120},{title:"操作",slot:"action",fixed:"right",minWidth:150}],columns4:[{type:"selection",width:60,align:"center"},{title:"ID",key:"uid",width:80},{title:"微信用户名称",key:"nickname",minWidth:160},{title:"客服头像",slot:"headimgurl",minWidth:60},{title:"用户类型",slot:"user_type",width:100},{title:"性别",slot:"sex",minWidth:60},{title:"地区",slot:"country",minWidth:120},{title:"是否关注公众号",slot:"subscribe",minWidth:120}],loading2:!1,total2:0,addFrom:{uids:[]},selections:[],rows:{},rowRecord:{}}},created:function(){this.getList()},methods:{auth:function(t){this.userId=t.user_id,this.appId=t.appid,this.$refs.AutoReply.open()},goChat:function(t){var e=this;Object(u["i"])(t.id).then((function(t){var a="";if(t.data.token){var i=e.getExpiresTime(t.data.exp_time);Object(c["r"])("kefu_token",t.data.token,i),Object(c["r"])("kefu_uuid",t.data.kefuInfo.uid,i),Object(c["r"])("kefu_expires_time",t.data.exp_time,i),Object(c["r"])("kefuInfo",t.data.kefuInfo,i),console.log(e.$store.state.media.isMobile,"this.$store.state.media.isMobile"),a=e.$store.state.media.isMobile?window.location.protocol+"//"+window.location.host+"/kefu/mobile_list":window.location.protocol+"//"+window.location.host+"/kefu/pc_list",window.open(a,"_blank")}})).catch((function(t){e.$Message.error(t.msg)}))},getExpiresTime:function(t){var e=Math.round(new Date/1e3),a=t-e;return parseFloat(parseFloat(parseFloat(a/60)/60)/24)},cancel:function(){this.formValidate={page:1,limit:10,data:"",type:"",nickname:""}},handleReachBottom:function(){var t=this;return new Promise((function(e){t.formValidate.page=t.formValidate.page+1,setTimeout((function(){Object(u["l"])(t.formValidate).then(function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(a){var i,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(i=a.data,i.list.length>0)for(n=0;n<i.list.length;n++)t.tableList2.push(i.list[n]);t.total2=i.count,t.loading2=!1;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.loading2=!1,t.$Message.error(e.msg)})),e()}),2e3)}))},look:function(t){this.isChat=!1,this.rowRecord=t,this.getChatlist()},getChatlist:function(){var t=this;this.loading5=!0,this.formValidate5.uid=this.rows.uid,this.formValidate5.to_uid=this.rowRecord.uid,this.formValidate5.id=this.rows.id,Object(u["d"])(this.formValidate5).then(function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(a){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:i=a.data,t.tableList5=i.list,t.total5=i.count,t.loading5=!1;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.loading5=!1,t.$Message.error(e.msg)}))},pageChange5:function(t){this.formValidate5.page=t,this.getChatlist()},submitFail:function(){this.getList()},record:function(t){this.rows=t,this.modals3=!0,this.isChat=!0,this.getListRecord()},getListRecord:function(){var t=this;this.loading3=!0,Object(u["j"])(this.formValidate3,this.rows.id).then(function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(a){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:i=a.data,t.tableList3=i.list?i.list:[],t.total3=i.count,t.loading3=!1;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.loading3=!1,t.$Message.error(e.msg)}))},pageChange3:function(t){this.formValidate3.page=t,this.getListRecord()},edit:function(t){var e=this;this.$modalForm(Object(u["e"])(t.id)).then((function(){return e.getList()}))},add:function(){var t=this;this.$modalForm(Object(u["k"])()).then((function(){t.getList(),console.log(1223)}))},onSelectTab:function(t){this.selections=t;var e=[];this.selections.map((function(t){e.push(t.uid)})),this.addFrom.uids=e},onchangeTime:function(t){this.timeVal=t,this.formValidate.data=this.timeVal.join("-"),this.formValidate.page=1,this.getListService()},selectChange:function(t){this.formValidate.data=t,this.timeVal=[],this.formValidate.page=1,this.getListService()},getListService:function(){var t=this;this.loading2=!0,Object(u["l"])(this.formValidate).then(function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(a){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:i=a.data,t.tableList2=i.list,t.total2=i.count,t.tableList2.map((function(t){t._isChecked=!1})),t.loading2=!1;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.loading2=!1,t.$Message.error(e.msg)}))},pageChange2:function(t){this.formValidate.page=t,this.getListService(),this.addFrom.uids=[]},userSearchs:function(){this.formValidate.page=1,this.getListService()},del:function(t,e,a){var i=this,n={title:e,num:a,url:"chat/kefu/".concat(t.id),method:"DELETE",ids:""};this.$modalSure(n).then((function(t){i.$Message.success(t.msg),i.tableList.splice(a,1)})).catch((function(t){i.$Message.error(t.msg)}))},getList:function(){var t=this;this.loading=!0,Object(u["h"])(this.tableFrom).then(function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(a){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:i=a.data,t.tableList=i.list,t.total=a.data.count,t.loading=!1;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.loading=!1,t.$Message.error(e.msg)}))},pageChange:function(t){this.tableFrom.page=t,this.getList()},onchangeIsShow:function(t){var e=this,a={id:t.id,status:t.status};Object(u["m"])(a).then(function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(a){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$Message.success(a.msg),e.getList();case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.$Message.error(t.msg)}))},putRemark:function(){var t=this;if(0===this.addFrom.uids.length)return this.$Message.warning("请选择要添加的客服");Object(u["c"])(this.addFrom).then(function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$Message.success(a.msg),t.modals=!1,t.getList();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.loading=!1,t.$Message.error(e.msg)}))}}},y=k,O=(a("8608"),Object(g["a"])(y,i,n,!1,null,"60e48416",null));e["default"]=O.exports}}]);