(function(t){function e(e){for(var n,i,r=e[0],c=e[1],l=e[2],h=0,p=[];h<r.length;h++)i=r[h],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],n=!0,r=1;r<s.length;r++){var c=s[r];0!==a[c]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=s[0]))}return t}var n={},a={app:0},o=[];function i(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=n,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(s,n,function(e){return t[e]}.bind(null,n));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";s("85ec")},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"theme"},[s("div",{staticClass:"day",class:t.Aclass,on:{click:function(e){return t.changeBg("#CECECE","A")}}}),s("div",{staticClass:"dark",class:t.Bclass,on:{click:function(e){return t.changeBg("#535458","B")}}}),s("div",{staticClass:"eyeshield ",class:t.Cclass,on:{click:function(e){return t.changeBg("#B5E6B5","C")}}})]),t._m(0),s("main",{staticClass:"globalMain"},[s("ul",{staticClass:"siteList"},[t._l(t.hashMap,(function(e,n){return s("li",{key:n},[s("Box",{attrs:{title:e,index:n},on:{delete:t.remove}})],1)})),t.isActive?s("li",{staticClass:"last"},[s("div",{staticClass:"addButton",on:{click:t.add}},[s("div",{staticClass:"iconWrapper"},[s("svg",{staticClass:"icon"},[s("use",{attrs:{"xlink:href":"#icon-add"}})])]),s("div",{staticClass:"text"},[t._v("添加快捷方式")])])]):t._e()],2)])])},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"globalHeader"},[s("form",{staticClass:"searchForm",attrs:{method:"GET",action:"https://www.baidu.com/s"}},[s("input",{attrs:{name:"wd",type:"text"}}),s("button",{attrs:{type:"submit"}},[t._v("搜索")])])])}],i=(s("c975"),s("a434"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"site",on:{click:t.jump}},[s("div",{staticClass:"logo"},[t._v(t._s(t.title.logo))]),s("div",{staticClass:"link"},[t._v(t._s(t._f("change")(t.title.url)))]),s("div",{staticClass:"close",on:{click:function(e){return e.stopPropagation(),t.del()}}},[s("svg",{staticClass:"icon"},[s("use",{attrs:{"xlink:href":"#icon-close"}})])])])}),r=[],c=(s("ac1f"),s("5319"),{fetch:function(){var t=window.JSON.parse(window.localStorage.getItem("x"));return console.log(t),t||[{logo:"A",url:"http://www.acfun.cn"},{logo:"Y",url:"https://www.yuque.com/dashboard"},{logo:"V",url:"https://www.v2ex.com/"},{logo:"Z",url:"https://www.zhihu.com"},{logo:"S",url:"https://segmentfault.com/"},{logo:"G",url:"https://gitee.com/"},{logo:"B",url:"https://www.bootcdn.cn/"},{logo:"C",url:"https://cn.vuejs.org/v2/guide/"}]},setData:function(t){var e=JSON.stringify(t);window.localStorage.setItem("x",e)},simplifyUrl:function(t){return t.replace("https://","").replace("http://","").replace("www.","").replace(/\/.*/,"")},setFlag:function(t){window.localStorage.setItem("y",t)}}),l={name:"Box",props:{title:{default:"nothing"},index:{default:"nothing"}},data:function(){return{show:"flase"}},filters:{change:function(t){return t=c.simplifyUrl(t),t}},methods:{jump:function(){window.open(this.title.url)},del:function(){this.$emit("delete",this.index)}}},u=l,h=(s("95d4"),s("2877")),p=Object(h["a"])(u,i,r,!1,null,"a8624754",null),d=p.exports,f={name:"App",data:function(){return{Aclass:"",Bclass:"",Cclass:"borders",hashMap:c.fetch(),isActive:JSON.parse(localStorage.getItem("y"))}},components:{Box:d},created:function(){var t=this;window.addEventListener("keydown",(function(e){for(var s=e.key,n=0;n<t.hashMap.length;n++)t.hashMap[n].logo.toLowerCase()===s&&window.open(t.hashMap[n].url)}))},destroyed:function(){window.removeEventListener("keydown",this.keydown)},watch:{hashMap:function(){this.hashMap.length>=10?this.isActive=!1:this.isActive=!0,c.setData(this.hashMap),localStorage.setItem("y",JSON.stringify(this.isActive))}},methods:{add:function(){var t=window.prompt("请问要添加的网站是啥？");0!==t.indexOf("http")&&(t="http://"+t);var e=c.simplifyUrl(t)[0].toUpperCase();this.hashMap.push({logo:e,url:t})},remove:function(t){this.hashMap.splice(t,1)},changeBg:function(t,e){var s="background-color:"+t;document.querySelector("body").setAttribute("style",s);var n="borders";"A"==e?(this.Aclass=n,this.Bclass="-",this.Cclass="-"):"B"==e?(this.Aclass="-",this.Bclass=n,this.Cclass="-"):"C"==e&&(this.Aclass="-",this.Bclass="-",this.Cclass=n)}}},g=f,v=(s("034f"),Object(h["a"])(g,a,o,!1,null,null,null)),w=v.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(w)}}).$mount("#app")},"85ec":function(t,e,s){},"95d4":function(t,e,s){"use strict";s("dae0")},dae0:function(t,e,s){}});
//# sourceMappingURL=app.950ddf07.js.map