webpackJsonp([19],{"6PJt":function(t,e){},Drdc:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=a("Dd8w"),r=a.n(l),n=a("NYxO"),s=a("oWyI"),o={data:function(){return{username:"",phone:"",tableData:[],total:0,options:[{value:-1,label:"全部"},{value:0,label:"未完成"},{value:1,label:"完成"},{value:2,label:"交易失败"}],state:-1,orderid:"",tradetimes:[],begintime:"",endtime:"",totalProfits:0}},computed:r()({},Object(n.c)({user:function(t){return t.user.user}})),methods:r()({},Object(n.b)(["getLoginUser","logout"]),{formatter:function(t,e){var a="";switch(parseInt(t.State)){case 1:a="完成";break;case 0:a="未完成";break;case 2:a="交易失败";break;default:a="未知状态"}return a},handleCurrentChange:function(t){this.onQueryClick(t)},onQueryClick:function(t){var e=this;this.user;null!=this.tradetimes?(this.begintime=this.tradetimes[0],this.endtime=this.tradetimes[1]):(this.begintime=null,this.endtime=null),this.$http.post("/api/Agent/GetAgentTradeListByAdmin",s.a.Encrypt.DataEncryption({State:this.state,TradeOrderId:this.orderid,BeginTime:this.begintime,EndTime:this.endtime,pageindex:t,pagesize:10})).then(function(t){t.Data&&null!=t.Data&&void 0!=t.Data&&100==t.Status?(e.total=t.Data.TotalItems,e.tableData=t.Data.Items):e.$message(t.Message)},function(t){e.$message(t),console.log(t)}),this.getQueryTotal()},getQueryTotal:function(){var t=this;this.$http.post("/api/Agent/GetAgentTradeTotal",s.a.Encrypt.DataEncryption({State:this.state,TradeOrderId:this.orderid,BeginTime:this.begintime,EndTime:this.endtime})).then(function(e){null!=e.Data&&void 0!=e.Data&&100==e.Status?t.totalProfits=e.Data:t.$message(e.Message)},function(e){t.$message(e),console.log(e)})}}),mounted:function(){this.tradetimes=[this.getWeekBeforeFormatDate(),this.getNowFormatDate()],this.onQueryClick(1)}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-body"},[a("div",{staticClass:"page-header"},[a("h1",{staticClass:"page-title"},[t._v("商户订单管理")]),t._v(" "),a("el-breadcrumb",[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首页")]),t._v(" "),a("el-breadcrumb-item",[t._v("商户订单管理")])],1)],1),t._v(" "),a("div",{staticClass:"box"},[a("el-row",[a("el-col",{attrs:{span:12}},[t._v(" 订单号:\n        "),a("m-input",{attrs:{placeholder:"订单号"},model:{value:t.orderid,callback:function(e){t.orderid=e},expression:"orderid"}})],1),t._v(" "),a("el-col",{attrs:{span:12}},[t._v(" 交易状态:\n        "),a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}},t._l(t.options,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1)],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[t._v("交易日期\n        "),a("el-date-picker",{attrs:{type:"daterange","value-format":"yyyy-MM-dd HH:mm:ss","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.tradetimes,callback:function(e){t.tradetimes=e},expression:"tradetimes"}})],1)],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:8}},[a("m-button",{attrs:{type:"info"},on:{click:function(e){t.onQueryClick(1)}}},[t._v("查询")])],1)],1),t._v(" "),a("p"),t._v(" "),a("el-row",[a("span",[t._v("总利润:\n        "),a("strong",{domProps:{textContent:t._s(t.totalProfits)}})])]),t._v(" "),a("p"),t._v(" "),a("el-table",{attrs:{data:t.tableData}},[a("el-table-column",{attrs:{label:"#",type:"index"}}),t._v(" "),a("el-table-column",{attrs:{label:"订单号",prop:"TradeOrderId"}}),t._v(" "),a("el-table-column",{attrs:{label:"创建时间",prop:"CreateTime"}}),t._v(" "),a("el-table-column",{attrs:{label:"交易金额",prop:"Amount"}}),t._v(" "),a("el-table-column",{attrs:{label:"商户手续费费率",prop:"TradeRate"}}),t._v(" "),a("el-table-column",{attrs:{label:"商户手续费",prop:"Poundage"}}),t._v(" "),a("el-table-column",{attrs:{label:"协议手续费率",prop:"AgentRate"}}),t._v(" "),a("el-table-column",{attrs:{label:"商户利润",prop:"Profits"}}),t._v(" "),a("el-table-column",{attrs:{label:"状态",prop:"State",formatter:t.formatter}}),t._v(" "),a("el-table-column",{attrs:{label:"交易时间",prop:"TradeTime"}})],1),t._v(" "),a("el-pagination",{attrs:{background:"",layout:"total,prev, pager, next",total:t.total},on:{"current-change":t.handleCurrentChange}})],1)])},staticRenderFns:[]};var u=a("VU/8")(o,i,!1,function(t){a("6PJt")},null,null);e.default=u.exports}});
//# sourceMappingURL=19.d18e4b6debe95c7bd8cc.js.map