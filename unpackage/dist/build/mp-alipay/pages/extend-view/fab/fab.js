(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/extend-view/fab/fab"],{3584:function(t,e,n){},"52fb":function(t,e,n){"use strict";n.r(e);var i=n("b2cb"),r=n("a4b3");for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);n("6ee2");var o=n("2877"),f=Object(o["a"])(r["default"],i["a"],i["b"],!1,null,null,null);e["default"]=f.exports},"6ee2":function(t,e,n){"use strict";var i=n("3584"),r=n.n(i);r.a},a4b3:function(t,e,n){"use strict";n.r(e);var i=n("acd8"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=r.a},acd8:function(t,e,n){"use strict";(function(t){function i(t){return o(t)||a(t)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function a(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function o(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var f=function(){return n.e("components/extend/button/button").then(n.bind(null,"dc14"))},c=n("8546"),u=function(){return n.e("components/tui-fab/tui-fab").then(n.bind(null,"970f"))},s={components:{tuiButton:f,tuiFab:u},data:function(){return{left:0,right:80,bottom:100,bgColor:"#5677fc",btnList:[],list:[{bgColor:"#16C2C2",imgUrl:"/static/images/fab/fab_about.png",imgHeight:64,imgWidth:64,text:"关于",fontSize:34,color:"#fff"},{bgColor:"#64B532",imgUrl:"/static/images/fab/fab_share.png",imgHeight:64,imgWidth:64,text:"分享",fontSize:34,color:"#fff"},{bgColor:"#FFA000",imgUrl:"/static/images/fab/fab_reward.png",imgHeight:64,imgWidth:64,text:"赞赏",fontSize:34,color:"#fff"}],list2:[{bgColor:"#16C2C2",text:"关于",fontSize:28,color:"#fff"},{bgColor:"#64B532",text:"分享",fontSize:28,color:"#fff"},{bgColor:"#FFA000",text:"赞赏",fontSize:28,color:"#fff"}]}},onLoad:function(){this.btnList=i(this.list)},methods:{change:function(t){switch(t){case 1:this.left=80,this.right=0;break;case 2:this.left=0,this.right=80;break;case 3:this.bgColor="#FF0000";break;case 4:this.btnList=[];break;case 5:this.btnList=i(this.list);break;case 6:this.btnList=i(this.list2);break;default:break}this.tui.toast("切换成功，点击查看效果")},onClick:function(e){var n=e.index;switch(n){case-1:this.tui.toast("您点击了悬浮按钮");break;case 0:t.navigateTo({url:"/pages/about/about"});break;case 1:this.clipboard("https://thorui.cn/");break;case 2:t.previewImage({urls:["https://thorui.cn/img/reward.jpg"]});break;default:break}},clipboard:function(t){var e=this;c.getClipboardData(t,function(t){t?e.tui.toast("分享链接已复制"):e.tui.toast("分享链接复制失败")})}}};e.default=s}).call(this,n("c11b")["default"])},b2cb:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return r})},dcf1:function(t,e,n){"use strict";(function(t){n("51a7"),n("921b");i(n("66fd"));var e=i(n("52fb"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("c11b")["createPage"])}},[["dcf1","common/runtime","common/vendor"]]]);