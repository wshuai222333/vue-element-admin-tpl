webpackJsonp([23],{yQWF:function(e,c,a){"use strict";Object.defineProperty(c,"__esModule",{value:!0});var r={data:function(){return{checked:!1,checkStr:"",checkArr:["abc","eee","bbb"],checkArr2:["abc","eee","bbb"]}},methods:{change:function(){console.log("change",this.checkArr2)}}},t={render:function(){var e=this,c=e.$createElement,a=e._self._c||c;return a("div",{staticClass:"page-body"},[a("div",{staticClass:"page-header"},[a("h1",{staticClass:"page-title"},[e._v("Checkbox 多选框")]),e._v(" "),a("el-breadcrumb",[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),e._v(" "),a("el-breadcrumb-item",[e._v("Checkbox 多选框")])],1)],1),e._v(" "),a("m-box",[a("div",{staticClass:"priview-box"},[a("p",[e._v("期望初始结果："+e._s(["abc","eee","aaa"]))]),e._v(" "),a("p",[e._v("真实初始结果："+e._s(e.checkArr))]),e._v(" "),a("m-checkbox",{attrs:{val:"aaa",checked:""},model:{value:e.checkArr,callback:function(c){e.checkArr=c},expression:"checkArr"}},[e._v("aaa")]),e._v(" "),a("m-checkbox",{attrs:{val:"bbb",checked:!1},model:{value:e.checkArr,callback:function(c){e.checkArr=c},expression:"checkArr"}},[e._v("bbb")]),e._v(" "),a("m-checkbox",{attrs:{val:"ccc"},model:{value:e.checkArr,callback:function(c){e.checkArr=c},expression:"checkArr"}},[e._v("ccc")]),e._v(" "),a("m-checkbox",{attrs:{val:"eee"},model:{value:e.checkArr,callback:function(c){e.checkArr=c},expression:"checkArr"}},[e._v("eee")])],1),e._v(" "),a("div",{staticClass:"priview-box"},[a("p",[e._v("期望初始结果："+e._s(["abc","eee","aaa"]))]),e._v(" "),a("p",[e._v("真实初始结果："+e._s(e.checkArr2))]),e._v(" "),a("m-checkbox-group",{on:{change:e.change},model:{value:e.checkArr2,callback:function(c){e.checkArr2=c},expression:"checkArr2"}},[a("m-checkbox",{attrs:{val:"aaa",checked:""}},[e._v("aaa")]),e._v(" "),a("m-checkbox",{attrs:{val:"bbb",checked:!1}},[e._v("bbb")]),e._v(" "),a("m-checkbox",{attrs:{val:"ccc"}},[e._v("ccc")]),e._v(" "),a("m-checkbox",{attrs:{val:"eee"}},[e._v("eee")])],1)],1)])],1)},staticRenderFns:[]},v=a("VU/8")(r,t,!1,null,null,null);c.default=v.exports}});
//# sourceMappingURL=23.3dc00c5980e74bc73d2f.js.map