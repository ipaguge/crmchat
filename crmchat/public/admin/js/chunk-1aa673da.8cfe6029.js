(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1aa673da"],{"0c6e":function(t,e,a){},3441:function(t,e,a){"use strict";var n=a("e99b"),s=a("3250"),i=a("8078"),r=a("0926"),o=[].sort,u=[1,2,3];n(n.P+n.F*(r((function(){u.sort(void 0)}))||!r((function(){u.sort(null)}))||!a("95b6")(o)),"Array",{sort:function(t){return void 0===t?o.call(i(this)):o.call(i(this),s(t))}})},"37c8":function(t,e,a){"use strict";a("cbd4")},"3c09":function(t,e,a){"use strict";a("0c6e")},"4a88":function(t,e,a){"use strict";a("bcfd")},"95b6":function(t,e,a){"use strict";var n=a("0926");t.exports=function(t,e){return!!t&&n((function(){e?t.call(null,(function(){}),1):t.call(null)}))}},"9e2e":function(t,e,a){!function(e,a){t.exports=a()}(0,(function(){return function(t){function e(n){if(a[n])return a[n].exports;var s=a[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var a={};return e.m=t,e.c=a,e.i=function(t){return t},e.d=function(t,a,n){e.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=2)}([function(t,e,a){var n=a(4)(a(1),a(5),null,null);t.exports=n.exports},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(3);e.default={props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator:function(t){return t>=0}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default:function(t,e,a,n){return a*(1-Math.pow(2,-10*t/n))*1024/1023+e}}},data:function(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown:function(){return this.startVal>this.endVal}},watch:{startVal:function(){this.autoplay&&this.start()},endVal:function(){this.autoplay&&this.start()}},mounted:function(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start:function(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=(0,n.requestAnimationFrame)(this.count)},pauseResume:function(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause:function(){(0,n.cancelAnimationFrame)(this.rAF)},resume:function(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,(0,n.requestAnimationFrame)(this.count)},reset:function(){this.startTime=null,(0,n.cancelAnimationFrame)(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count:function(t){this.startTime||(this.startTime=t),this.timestamp=t;var e=t-this.startTime;this.remaining=this.localDuration-e,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(e,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(e,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(e/this.localDuration):this.printVal=this.localStartVal+(this.localStartVal-this.startVal)*(e/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),e<this.localDuration?this.rAF=(0,n.requestAnimationFrame)(this.count):this.$emit("callback")},isNumber:function(t){return!isNaN(parseFloat(t))},formatNumber:function(t){t=t.toFixed(this.decimals),t+="";var e=t.split("."),a=e[0],n=e.length>1?this.decimal+e[1]:"",s=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;s.test(a);)a=a.replace(s,"$1"+this.separator+"$2");return this.prefix+a+n+this.suffix}},destroyed:function(){(0,n.cancelAnimationFrame)(this.rAF)}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(0),s=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default=s.default,"undefined"!=typeof window&&window.Vue&&window.Vue.component("count-to",s.default)},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=0,s="webkit moz ms o".split(" "),i=void 0,r=void 0;if("undefined"==typeof window)e.requestAnimationFrame=i=function(){},e.cancelAnimationFrame=r=function(){};else{e.requestAnimationFrame=i=window.requestAnimationFrame,e.cancelAnimationFrame=r=window.cancelAnimationFrame;for(var o=void 0,u=0;u<s.length&&(!i||!r);u++)o=s[u],e.requestAnimationFrame=i=i||window[o+"RequestAnimationFrame"],e.cancelAnimationFrame=r=r||window[o+"CancelAnimationFrame"]||window[o+"CancelRequestAnimationFrame"];i&&r||(e.requestAnimationFrame=i=function(t){var e=(new Date).getTime(),a=Math.max(0,16-(e-n)),s=window.setTimeout((function(){t(e+a)}),a);return n=e+a,s},e.cancelAnimationFrame=r=function(t){window.clearTimeout(t)})}e.requestAnimationFrame=i,e.cancelAnimationFrame=r},function(t,e){t.exports=function(t,e,a,n){var s,i=t=t||{},r=typeof t.default;"object"!==r&&"function"!==r||(s=t,i=t.default);var o="function"==typeof i?i.options:i;if(e&&(o.render=e.render,o.staticRenderFns=e.staticRenderFns),a&&(o._scopeId=a),n){var u=Object.create(o.computed||null);Object.keys(n).forEach((function(t){var e=n[t];u[t]=function(){return e}})),o.computed=u}return{esModule:s,exports:i,options:o}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v("\n  "+t._s(t.displayValue)+"\n")])},staticRenderFns:[]}}])}))},bbe4:function(t,e,a){"use strict";a("facc")},bcfd:function(t,e,a){},c182:function(t,e,a){},cbd4:function(t,e,a){},e217:function(t,e,a){"use strict";a("c182")},f75a:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"margin-top":"20px"}},[a("statistics"),a("statisticsCharts")],1)},s=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Row",{attrs:{gutter:24}},[a("Col",t._b({staticClass:"ivu-mb",attrs:{span:"6"}},"Col",t.grid,!1),[a("Card",{attrs:{bordered:!1,"dis-hover":"",padding:12}},[a("p",{attrs:{slot:"title"},slot:"title"},[a("span",[t._v("全部客户")])]),a("Tag",{attrs:{slot:"extra",color:"green"},slot:"extra"},[t._v("全部")]),a("div",[a("div",{staticClass:"number"},[t._v(t._s(t.statisticsList.all))]),a("Divider",{staticStyle:{margin:"8px 0"}}),a("div",{staticClass:"ivu-pt-8",staticStyle:{height:"22px"}},[t._v("\n        累计客户数量"),a("span",{staticClass:"renshu"},[t._v(t._s(t.statisticsList.all))]),t._v("人\n      ")])],1)],1)],1),a("Col",t._b({staticClass:"ivu-mb",attrs:{span:"6"}},"Col",t.grid,!1),[a("Card",{attrs:{bordered:!1,"dis-hover":"",padding:12}},[a("p",{attrs:{slot:"title"},slot:"title"},[a("span",[t._v("新增客户")])]),a("Tag",{attrs:{slot:"extra",color:"green"},slot:"extra"},[t._v("今日")]),a("div",[a("div",{staticClass:"number"},[t._v(t._s(t.statisticsList.toDayKefu))]),a("Divider",{staticStyle:{margin:"8px 0"}}),a("div",{staticClass:"ivu-pt-8",staticStyle:{height:"22px"}},[t._v("\n        今日新增客户"),a("span",{staticClass:"renshu"},[t._v(t._s(t.statisticsList.toDayKefu))]),t._v("人\n      ")])],1)],1)],1),a("Col",t._b({staticClass:"ivu-mb",attrs:{span:"6"}},"Col",t.grid,!1),[a("Card",{attrs:{bordered:!1,"dis-hover":"",padding:12}},[a("p",{attrs:{slot:"title"},slot:"title"},[a("span",[t._v("新增游客")])]),a("Tag",{attrs:{slot:"extra",color:"green"},slot:"extra"},[t._v("今日")]),a("div",[a("div",{staticClass:"number"},[t._v(t._s(t.statisticsList.toDayTourist))]),a("Divider",{staticStyle:{margin:"8px 0"}}),a("div",{staticClass:"ivu-pt-8",staticStyle:{height:"22px"}},[t._v("\n        今日新增游客"),a("span",{staticClass:"renshu"},[t._v(t._s(t.statisticsList.toDayTourist))]),t._v("人\n      ")])],1)],1)],1),a("Col",t._b({staticClass:"ivu-mb",attrs:{span:"6"}},"Col",t.grid,!1),[a("Card",{attrs:{bordered:!1,"dis-hover":"",padding:12}},[a("p",{attrs:{slot:"title"},slot:"title"},[a("span",[t._v("新增客户")])]),a("Tag",{attrs:{slot:"extra",color:"green"},slot:"extra"},[t._v("本月")]),a("div",[a("div",{staticClass:"number"},[t._v(t._s(t.statisticsList.month))]),a("Divider",{staticStyle:{margin:"8px 0"}}),a("div",{staticClass:"ivu-pt-8",staticStyle:{height:"22px"}},[t._v("\n        本月新增客户"),a("span",{staticClass:"renshu"},[t._v(t._s(t.statisticsList.month))]),t._v("人\n      ")])],1)],1)],1)],1)},r=[],o=(a("6a61"),a("dc45")),u=a("6b6c");function c(){return Object(u["a"])({url:"chart/sum",method:"get"})}function l(t){return Object(u["a"])({url:"chart",method:"get",params:t})}var d=a("9e2e"),h=a.n(d),p={name:"statistics",components:{countTo:h.a},data:function(){return{durations:3e3,statisticsList:{}}},methods:{getStatistics:function(){var t=this;c().then(function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(a){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=a.data,t.statisticsList=n,console.log(n);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.$Message.error(e.msg)}))}},mounted:function(){this.getStatistics()}},f=p,m=(a("3c09"),a("5d22")),g=Object(m["a"])(f,i,r,!1,null,null,null),y=g.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"chart-content"},[a("div",{staticClass:"chart-title"},[a("p",{staticClass:"chart-left"},[t._v("趋势图")]),a("p",{staticClass:"chart-right"},[a("RadioGroup",{staticClass:"ivu-mr-8",attrs:{type:"button"},on:{"on-change":t.handleChangeVisitType},model:{value:t.visitDate,callback:function(e){t.visitDate=e},expression:"visitDate"}},[a("Radio",{attrs:{label:"1"}},[t._v("年")]),a("Radio",{attrs:{label:"0"}},[t._v("月")])],1)],1)]),t._m(0)])},x=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("div",{staticStyle:{width:"100%",height:"400px"},attrs:{id:"echarts1"}})])}],b=(a("1bc7"),a("4d28")),C=a.n(b),w={name:"statisticsCharts",data:function(){return{option:{},year:"2021",month:"07",visitDate:"0"}},methods:{getChart:function(){var t=this;this.option={tooltip:{trigger:"axis"},legend:{data:["客户","游客"],icon:"rect",right:20,top:20},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,nameTextStyle:{color:"#CCCCCC"},axisLine:{lineStyle:{color:"#CCCCCC"}},axisLabel:{color:"#666666"},data:[]},yAxis:{type:"value",name:"每日新增(人)",nameTextStyle:{color:"#CCCCCC"},axisLine:{lineStyle:{color:"#CCCCCC"}},axisLabel:{color:"#666666"},splitLine:{lineStyle:{type:"dashed"}}},series:[{name:"客户",type:"line",itemStyle:{normal:{color:"#1890FF"}},lineStyle:{width:3},data:[]},{name:"游客",type:"line",itemStyle:{normal:{color:"#10CCA3"}},lineStyle:{width:3},data:[]}]};var e={year:this.year,month:this.month};l(e).then(function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(a){var n,s,i,r,o,u,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=a.data,s=n.list,i=n.tourist,r=[],o=[],u=[],s.forEach((function(t,e){u.push(t.month),o.push(i[e].number),r.push(t.number)})),t.option.xAxis.data=u,t.option.series[0].data=r,t.option.series[1].data=o,c=C.a.init(document.getElementById("echarts1")),c.setOption(t.option,!0),window.onresize=c.resize();case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.$Message.error(e.msg)}))},handleChangeVisitType:function(){var t=this;l({type:this.visitDate}).then((function(e){var a=e.data,n=a.list,s=a.tourist,i=[],r=[],o=[];n.forEach((function(t,e){o.push(t.month),r.push(s[e].number),i.push(t.number)})),t.option.xAxis.data=o,t.option.series[0].data=i,t.option.series[1].data=r;var u=C.a.init(document.getElementById("echarts1"));u.setOption(t.option,!0),window.onresize=u.resize()})).catch((function(e){t.$Message.error(e.msg)}))}},mounted:function(){this.getChart()}},_=w,k=(a("4a88"),Object(m["a"])(_,v,x,!1,null,"7599f93e",null)),S=k.exports,V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Row",{attrs:{gutter:24}},[a("Col",{attrs:{span:"12"}},[a("NumberInfo",{attrs:{total:"23,378","sub-total":"16.8",status:"up"}},[a("span",{attrs:{slot:"subTitle"},slot:"subTitle"},[t._v("\n                    搜索用户数\n                    "),a("Tooltip",{attrs:{content:"指标说明",placement:"top"}},[a("Icon",{attrs:{type:"ios-information-circle-outline"}})],1)],1)]),a("div",{ref:"searchUserChart",staticStyle:{height:"50px"}})],1),a("Col",{attrs:{span:"12"}},[a("NumberInfo",{attrs:{total:"3.1","sub-total":"8.5",status:"down"}},[a("span",{attrs:{slot:"subTitle"},slot:"subTitle"},[t._v("\n                    人均搜索次数\n                    "),a("Tooltip",{attrs:{content:"指标说明",placement:"top"}},[a("Icon",{attrs:{type:"ios-information-circle-outline"}})],1)],1)]),a("div",{ref:"searchCountChart",staticStyle:{height:"50px"}})],1)],1),a("div",{staticClass:"ivu-mt"},[a("search-table")],1)],1)},F=[],D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"i-table-no-border"},[a("Table",{attrs:{columns:t.column,data:t.dataWithPage,loading:t.loading,size:"small"},on:{"on-sort-change":t.handleSortChange},scopedSlots:t._u([{key:"keyword",fn:function(e){var n=e.row;return[a("a",{attrs:{href:"/",target:"_blank"}},[t._v(t._s(n.keyword))])]}},{key:"range",fn:function(e){var n=e.row;return[t._v("\n            "+t._s(n.range)+"%\n            "),a("Trend",{attrs:{flag:n.status?"up":"down"}})]}}])}),a("div",{staticClass:"ivu-text-right ivu-mt-8"},[a("Page",{attrs:{size:"small","page-size":5,total:t.limitData.length,current:t.current},on:{"update:current":function(e){t.current=e},"on-change":t.getData}})],1)],1)},A=[],T=(a("3441"),a("332f")),O={data:function(){return{current:1,size:5,loading:!1,sortType:"normal",sortKey:"",column:[{title:"排名",key:"index",width:80},{title:"搜索关键词",key:"keyword",slot:"keyword",minWidth:120},{title:"用户数",key:"count",sortable:"custom",minWidth:100},{title:"周涨幅",key:"range",slot:"range",width:100,align:"right",sortable:"custom"}],data:[]}},computed:{limitData:function(){var t=this,e=Object(T["a"])(this.data);return"asc"===this.sortType&&(e=e.sort((function(e,a){return e[t.sortKey]>a[t.sortKey]?1:-1}))),"desc"===this.sortType&&(e=e.sort((function(e,a){return e[t.sortKey]<a[t.sortKey]?1:-1}))),e},dataWithPage:function(){var t=this.limitData,e=this.current*this.size-this.size,a=e+this.size;return Object(T["a"])(t).slice(e,a)}},methods:{handleSortChange:function(t){var e=t.key,a=t.order;this.sortKey=e,this.sortType=a,this.current=1},getData:function(){var t=[{index:1,keyword:"搜索关键词-0",count:257,range:69,status:0},{index:2,keyword:"搜索关键词-1",count:711,range:57,status:0},{index:3,keyword:"搜索关键词-2",count:766,range:24,status:1},{index:4,keyword:"搜索关键词-3",count:597,range:31,status:1},{index:5,keyword:"搜索关键词-4",count:133,range:30,status:0},{index:6,keyword:"搜索关键词-5",count:845,range:16,status:0},{index:7,keyword:"搜索关键词-6",count:454,range:35,status:1},{index:8,keyword:"搜索关键词-7",count:884,range:96,status:1},{index:9,keyword:"搜索关键词-8",count:725,range:30,status:1},{index:10,keyword:"搜索关键词-9",count:778,range:46,status:0},{index:11,keyword:"搜索关键词-10",count:414,range:69,status:1},{index:12,keyword:"搜索关键词-11",count:927,range:41,status:0},{index:13,keyword:"搜索关键词-12",count:128,range:54,status:0},{index:14,keyword:"搜索关键词-13",count:169,range:77,status:0},{index:15,keyword:"搜索关键词-14",count:764,range:8,status:0},{index:16,keyword:"搜索关键词-15",count:178,range:23,status:1},{index:17,keyword:"搜索关键词-16",count:32,range:94,status:0},{index:18,keyword:"搜索关键词-17",count:183,range:34,status:1},{index:19,keyword:"搜索关键词-18",count:988,range:5,status:0},{index:20,keyword:"搜索关键词-19",count:324,range:15,status:0},{index:21,keyword:"搜索关键词-20",count:832,range:42,status:0},{index:22,keyword:"搜索关键词-21",count:336,range:99,status:0},{index:23,keyword:"搜索关键词-22",count:23,range:1,status:1},{index:24,keyword:"搜索关键词-23",count:557,range:84,status:0},{index:25,keyword:"搜索关键词-24",count:894,range:62,status:1},{index:26,keyword:"搜索关键词-25",count:610,range:73,status:1},{index:27,keyword:"搜索关键词-26",count:810,range:1,status:1},{index:28,keyword:"搜索关键词-27",count:83,range:13,status:1},{index:29,keyword:"搜索关键词-28",count:734,range:11,status:1},{index:30,keyword:"搜索关键词-29",count:6,range:97,status:0},{index:31,keyword:"搜索关键词-30",count:112,range:88,status:0},{index:32,keyword:"搜索关键词-31",count:978,range:92,status:0},{index:33,keyword:"搜索关键词-32",count:674,range:86,status:0},{index:34,keyword:"搜索关键词-33",count:632,range:42,status:1},{index:35,keyword:"搜索关键词-34",count:0,range:23,status:1},{index:36,keyword:"搜索关键词-35",count:965,range:94,status:0},{index:37,keyword:"搜索关键词-36",count:758,range:86,status:0},{index:38,keyword:"搜索关键词-37",count:857,range:34,status:0},{index:39,keyword:"搜索关键词-38",count:72,range:95,status:0},{index:40,keyword:"搜索关键词-39",count:69,range:74,status:1},{index:41,keyword:"搜索关键词-40",count:553,range:21,status:1},{index:42,keyword:"搜索关键词-41",count:430,range:2,status:1},{index:43,keyword:"搜索关键词-42",count:86,range:23,status:1},{index:44,keyword:"搜索关键词-43",count:626,range:2,status:1},{index:45,keyword:"搜索关键词-44",count:266,range:8,status:1},{index:46,keyword:"搜索关键词-45",count:943,range:61,status:0},{index:47,keyword:"搜索关键词-46",count:417,range:17,status:1},{index:48,keyword:"搜索关键词-47",count:151,range:92,status:1},{index:49,keyword:"搜索关键词-48",count:197,range:63,status:0},{index:50,keyword:"搜索关键词-49",count:578,range:18,status:1}];this.total=t.length,this.data=t}},mounted:function(){this.getData()}},j=O,q=Object(m["a"])(j,D,A,!1,null,null,null),$=q.exports,z={components:{searchTable:$},data:function(){return{}},methods:{handleSetSearchChart:function(){this.searchUserChart=C.a.init(this.$refs.searchUserChart),this.searchCountChart=C.a.init(this.$refs.searchCountChart);var t={xAxis:{data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],type:"category",show:!1},yAxis:{show:!1,type:"value"},series:[{data:[120,300,150,350,70,210,130],type:"line",tooltip:!0,smooth:!0,symbol:"none",areaStyle:{normal:{opacity:.2}}}],color:["#1495EB","#00CC66","#F9D249","#ff9900","#9860DF"],grid:{left:-60,right:-20,bottom:-20,top:0,containLabel:!0},tooltip:{trigger:"axis"}};this.searchUserChart.setOption(t),this.searchCountChart.setOption(t)},handleResize:function(){this.searchUserChart&&this.searchUserChart.resize(),this.searchCountChart&&this.searchCountChart.resize()}},mounted:function(){this.handleSetSearchChart()},beforeDestroy:function(){this.searchUserChart&&(this.searchUserChart.dispose(),this.searchUserChart=null),this.searchCountChart&&(this.searchCountChart.dispose(),this.searchCountChart=null)}},E=z,L=Object(m["a"])(E,V,F,!1,null,null,null),R=L.exports,N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticStyle:{height:"200px"}},[a("user-gender")],1),t._m(0)])},M=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{height:"200px"}},[a("div",{staticClass:"dashboard-console-user-preference"})])}],P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-console-user-gender"},[a("Row",{attrs:{type:"flex",justify:"center",align:"middle"}},[a("Col",{staticClass:"ivu-text-center",staticStyle:{color:"#3399ff"},attrs:{span:"8"}},[a("Avatar",{staticStyle:{"background-color":"#d6f0ff",color:"#3399ff"},attrs:{icon:"ios-man",size:"large"}}),a("div",{staticClass:"ivu-mt-8"},[t._v("男性 65%")])],1),a("Col",{staticClass:"ivu-text-center",staticStyle:{color:"#be6be0"},attrs:{span:"8"}},[a("Avatar",{staticStyle:{color:"#be6be0","background-color":"#fdf0ff"},attrs:{icon:"ios-woman",size:"large"}}),a("div",{staticClass:"ivu-mt-8"},[t._v("女性 25%")])],1),a("Col",{staticClass:"ivu-text-center",staticStyle:{color:"#babdc3"},attrs:{span:"8"}},[a("Avatar",{staticStyle:{color:"#babdc3","background-color":"#e6edf5"},attrs:{icon:"md-man",size:"large"}}),a("div",{staticClass:"ivu-mt-8"},[t._v("未知 10%")])],1)],1),a("div",{staticClass:"dashboard-console-user-gender-grid ivu-mt-8"},[a("Grid",{attrs:{center:"",square:"",col:25,padding:"2px",border:!1}},t._l(100,(function(t){return a("GridItem",{key:t},[a("span",t<=65?{staticStyle:{"background-color":"#3399ff"}}:t<=90?{staticStyle:{"background-color":"#be6be0"}}:{staticStyle:{"background-color":"#babdc3"}})])})),1)],1)],1)},U=[],I={data:function(){return{}}},K=I,B=(a("e217"),Object(m["a"])(K,P,U,!1,null,null,null)),G=B.exports,W={components:{userGender:G}},J=W,H=(a("37c8"),Object(m["a"])(J,N,M,!1,null,null,null)),Q=H.exports,X=(a("c276"),{name:"index",components:{statistics:y,statisticsCharts:S,hotSearch:R,userPreference:Q},data:function(){return{visitType:"day",visitDate:[new Date,new Date]}},mounted:function(){},methods:{}}),Y=X,Z=(a("bbe4"),Object(m["a"])(Y,n,s,!1,null,null,null));e["default"]=Z.exports},facc:function(t,e,a){}}]);