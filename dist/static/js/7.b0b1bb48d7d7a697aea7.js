webpackJsonp([7],{JVsz:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e={props:{post:Object,tabs:Object},data:function(){return{}}},o={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"post-item"},[a("div",{staticClass:"post-auhtor"},[a("img",{staticClass:"user-avator",attrs:{src:t.post.author.avatar_url}}),t._v(" "),a("a",{staticClass:"user-name",attrs:{href:"#"}},[a("strong",[t._v(t._s(t.post.author.loginname))])]),t._v(" "),a("span",{staticClass:"post-time"},[t._v("最后更新："+t._s(t.post.last_reply_at))]),t._v(" "),a("span",{staticClass:"post-tab"},[t.post.top?a("el-tag",{attrs:{type:"success",size:"small"}},[t._v("置顶")]):t._e(),t._v(" "),t.post.tab?a("el-tag",{attrs:{size:"small"}},[t._v(t._s(t.tabs[t.post.tab]))]):t._e()],1)]),t._v(" "),a("h2",{staticClass:"post-title"},[a("a",{attrs:{href:"https://cnodejs.org/topic/"+t.post.id,target:"_blank"}},[t._v(t._s(t.post.title))])]),t._v(" "),a("div",{staticClass:"post-ctrl"},[a("span",{staticClass:"post-view"},[a("i",{staticClass:"fa fa-eye"}),t._v(" "+t._s(t.post.visit_count))]),t._v(" "),a("span",{staticClass:"post-comment"},[a("i",{staticClass:"fa fa-comment"}),t._v(" "+t._s(t.post.reply_count))])])])},staticRenderFns:[]};var i=a("VU/8")(e,o,!1,function(t){a("S7gZ")},null,null);s.default=i.exports},S7gZ:function(t,s){}});
//# sourceMappingURL=7.b0b1bb48d7d7a697aea7.js.map