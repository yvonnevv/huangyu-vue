webpackJsonp([8],{148:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=a(7),i=n(s),c=a(6);e.default={name:"",data:function(){return{}},components:{},props:{},computed:(0,i.default)({},(0,c.mapState)(["pageKuangchan"])),created:function(){this.$store.dispatch("LOAD_PAGE_KUANGCHAN")},updated:function(){var t=this.pageKuangchan,e=t.image1,a=t.image2,n=t.image3;this.$store.dispatch("UPDATE_IMGS",[e,a,n])},methods:{}}},203:function(t,e,a){e=t.exports=a(8)(),e.push([t.id,"",""])},219:function(t,e,a){var n=a(203);"string"==typeof n&&(n=[[t.id,n,""]]);a(12)(n,{});n.locals&&(t.exports=n.locals)},239:function(t,e,a){a(219);var n=a(4)(a(148),a(258),"data-v-8f9d9278",null);t.exports=n.exports},258:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hy-main-wrap"},[a("div",{staticClass:"hy-title"},[t._v(t._s(t.pageKuangchan.classify))]),t._v(" "),a("div",{staticClass:"hy-article"},[a("div",{domProps:{innerHTML:t._s(t.pageKuangchan.content)}})])])},staticRenderFns:[]}}});