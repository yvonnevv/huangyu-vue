webpackJsonp([7],{149:function(t,e,a){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(7),s=i(n),o=a(6);e.default={name:"",data:function(){return{}},components:{},props:{},computed:(0,s.default)({},(0,o.mapState)(["pageTianhai"])),created:function(){this.$store.dispatch("LOAD_PAGE_TIANHAI")},updated:function(){var t=this.pageTianhai,e=t.image1,a=t.image2,i=t.image3;this.$store.dispatch("UPDATE_IMGS",[e,a,i])},mounted:function(){},methods:{}}},199:function(t,e,a){e=t.exports=a(8)(),e.push([t.id,"",""])},212:function(t,e,a){var i=a(199);"string"==typeof i&&(i=[[t.id,i,""]]);a(12)(i,{});i.locals&&(t.exports=i.locals)},240:function(t,e,a){a(212);var i=a(4)(a(149),a(251),"data-v-5d1239b0",null);t.exports=i.exports},251:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hy-main-wrap"},[a("div",{staticClass:"hy-title"},[t._v(t._s(t.pageTianhai.classify))]),t._v(" "),a("div",{staticClass:"hy-article"},[a("div",{domProps:{innerHTML:t._s(t.pageTianhai.content)}})])])},staticRenderFns:[]}}});