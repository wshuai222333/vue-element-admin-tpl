webpackJsonp([18],{RSFW:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-body"},[a("div",{staticClass:"page-header"},[a("h1",{staticClass:"page-title"},[t._v("Switch 开关")]),t._v(" "),a("el-breadcrumb",[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首页")]),t._v(" "),a("el-breadcrumb-item",[t._v("Switch 开关")])],1)],1),t._v(" "),a("m-box",[a("m-switch",{model:{value:t.state,callback:function(e){t.state=e},expression:"state"}},[t._v("defalut")]),t._v(" "),a("m-switch",{attrs:{type:"success"},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}}),t._v(" "),a("m-switch",{attrs:{type:"danger"},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}}),t._v(" "),a("m-switch",{attrs:{type:"warning"},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}}),t._v(" "),a("m-switch",{attrs:{type:"primary"},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.state,expression:"state"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.state)?t._i(t.state,null)>-1:t.state},on:{change:function(e){var a=t.state,s=e.target,r=!!s.checked;if(Array.isArray(a)){var c=t._i(a,null);s.checked?c<0&&(t.state=a.concat([null])):c>-1&&(t.state=a.slice(0,c).concat(a.slice(c+1)))}else t.state=r}}}),t._v(" "),a("m-switch",{attrs:{value:!0,invert:""}},[t._v("defalut")]),t._v(" "),a("m-switch",{attrs:{value:!0,invert:"",size:"lg"}},[t._v("lg")]),t._v(" "),a("m-switch",{attrs:{value:!0,invert:""}},[t._v("default")]),t._v(" "),a("m-switch",{attrs:{value:!0,invert:"",size:"sm"}},[t._v("sm")]),t._v(" "),a("m-switch",{attrs:{value:!1,disabled:"",type:"primary"}},[t._v("sm")]),t._v(" "),a("m-switch",{attrs:{value:!0,disabled:"",type:"primary"}},[t._v("sm")])],1)],1)},staticRenderFns:[]},r=a("VU/8")({name:"c-switch",data:function(){return{state:!1,radio1:!1}}},s,!1,null,null,null);e.default=r.exports}});
//# sourceMappingURL=18.348fd6a98ea8ea493cc8.js.map