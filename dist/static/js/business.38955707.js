webpackJsonp([15],{0:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var i=a(5),o=n(i),u=a(229),r=n(u),s=a(127),l=n(s),c=a(126),d=n(c),f=a(32),p=n(f),v=a(67);o.default.use(p.default,d.default),o.default.prototype.$dialog={toast:v.Toast,loading:v.Loading};var m=new o.default({el:"#app",store:l.default,router:d.default,render:function(t){return t(r.default)},http:{header:{"Content-Type":"application/json"}}});window.vm=m},15:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=a(25),o=n(i);e.default={components:{sidebar:o.default},props:["title","links","activePath"]}},16:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["title","links","activePath"],data:function(){return{}},mounted:function(){}}},20:function(t,e){},21:function(t,e){},22:function(t,e){},23:function(t,e,a){a(20);var n=a(4)(null,a(26),"data-v-02296ef2",null);t.exports=n.exports},24:function(t,e,a){a(22);var n=a(4)(a(15),a(28),null,null);t.exports=n.exports},25:function(t,e,a){a(21);var n=a(4)(a(16),a(27),"data-v-6ce89fd3",null);t.exports=n.exports},26:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hy-banner"},[t._t("default")],2)},staticRenderFns:[]}},27:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hy-sidebar"},[a("div",{staticClass:"hy-sidebar-title"},[a("p",{staticClass:"zh"},[t._v(t._s(t.title.zh))]),t._v(" "),a("p",{staticClass:"en"},[a("span",[t._v(t._s(t.title.en))])])]),t._v(" "),t._l(t.links,function(e,n){return a("router-link",{key:n,staticClass:"hy-sidebar-link",class:t.activePath===e.to?"active":"",attrs:{to:e.to}},[a("p",[t._v(t._s(e.title))])])})],2)},staticRenderFns:[]}},28:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hy-main"},[a("sidebar",{attrs:{title:t.title,links:t.links,activePath:t.activePath}}),t._v(" "),t._t("default")],2)},staticRenderFns:[]}},126:function(t,e,a){(function(t){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=a(5),o=n(i),u=a(66),r=n(u);o.default.use(r.default);var s=function(t){return a.e(3,function(){return t(a(230))})},l=function(t){return a.e(1,function(){return t(a(232))})},c=function(t){return a.e(2,function(){return t(a(231))})},d="",f=[{name:"root",path:d+"/",redirect:d+"/about"},{name:"about",path:d+"/about",component:s},{name:"rongyu",path:d+"/rongyu",component:l},{name:"hezuo",path:d+"/hezuo",component:c}],p=new r.default({mode:"hash",base:t,linkActiveClass:"v-link-active",routes:f});e.default=p}).call(e,"/")},127:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i,o=a(33),u=n(o),r=a(89),s=n(r),l=a(5),c=n(l),d=a(6),f=n(d),p=a(29),v=n(p);c.default.use(f.default);var m="http://mobile.royalhonors.group",_="SET_COPYRIGHT",g="SET_PAGEINFO",h="SET_PAGE_ABOUT",P="SET_PAGE_RONGYU",b="SET_PAGE_HEZUO",y=function(t,e,a){v.default.get(t).then(function(t){var n=t.retEntity;e(a,{data:n})})},O=new f.default.Store({state:{copyright:{},pageInfo:{},pageAbout:{},pageHezuo:{},pageRongyu:{}},actions:{LOAD_COPYRIGHT:function(t){var e=t.commit;y("/index/headline",e,_)},LOAD_PAGEINFO:function(t){var e=t.commit;y("/index/background?id=61",e,g)},LOAD_PAGE_ABOUT:function(t){var e=t.commit;y("/index/groupProfileId?id=51",e,h)},LOAD_PAGE_RONGYU:function(t){var e=t.commit;y("/index/groupProfileId?id=52",e,P)},LOAD_PAGE_HEZUO:function(t){var e=t.commit;y("/index/groupProfileId?id=53",e,b)}},mutations:(i={},(0,u.default)(i,_,function(t,e){var a=e.data,n=void 0===a?[]:a;t.copyright=n[0]}),(0,u.default)(i,g,function(t,e){var a=e.data;a.imagePath=""+m+a.imagePath,t.pageInfo=a}),(0,u.default)(i,h,function(t,e){var a=e.data,n=a.Contents,i=n.image1,o=n.image2,u=n.image3,r=n.image4;i=i?""+m+i:i,o=o?""+m+o:o,u=u?""+m+u:u,r=r?""+m+r:r,(0,s.default)(n,{image1:i,image2:o,image3:u,image4:r}),t.pageAbout=n}),(0,u.default)(i,P,function(t,e){var a=e.data,n=a.Contents,i=n.image1,o=n.image2,u=n.image3,r=n.image4;i=i?""+m+i:i,o=o?""+m+o:o,u=u?""+m+u:u,r=r?""+m+r:r,(0,s.default)(n,{image1:i,image2:o,image3:u,image4:r}),t.pageRongyu=n}),(0,u.default)(i,b,function(t,e){var a=e.data,n=a.Contents,i=n.image1,o=n.image2,u=n.image3,r=n.image4;i=i?""+m+i:i,o=o?""+m+o:o,u=u?""+m+u:u,r=r?""+m+r:r,(0,s.default)(n,{image1:i,image2:o,image3:u,image4:r}),t.pageHezuo=n}),i)});e.default=O},138:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=a(7),o=n(i),u=a(6),r=a(65),s=n(r),l=a(23),c=n(l),d=a(64),f=n(d),p=a(24),v=n(p);e.default={data:function(){return{activePath:"/kuangchan",articleImgs:[],title:{zh:"集团概况",en:"Group profile"},links:[{title:"关于皇誉",to:"/about"},{title:"荣誉资质",to:"/rongyu"},{title:"投资合作",to:"/hezuo"}]}},computed:(0,o.default)({},(0,u.mapState)(["pageInfo"])),created:function(){this.$store.dispatch("LOAD_COPYRIGHT"),this.$store.dispatch("LOAD_PAGEINFO")},components:{navbar:s.default,copyright:f.default,banner:c.default,mainContent:v.default},watch:{$route:function(t,e){this.activePath=t.path}}}},211:function(t,e){},229:function(t,e,a){a(211);var n=a(4)(a(138),a(250),null,null);t.exports=n.exports},250:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("navbar"),t._v(" "),a("banner",[a("img",{attrs:{src:t.pageInfo.imagePath,alt:"",srcset:""}})]),t._v(" "),a("main-content",{attrs:{title:t.title,links:t.links,activePath:t.activePath}},[a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view",{attrs:{"keep-alive":""}})],1)],1),t._v(" "),a("copyright")],1)},staticRenderFns:[]}}});