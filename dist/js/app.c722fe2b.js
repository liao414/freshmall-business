(function(e){function t(t){for(var a,r,i=t[0],u=t[1],c=t[2],l=0,d=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);m&&m(t);while(d.length)d.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,r=1;r<n.length;r++){var i=n[r];0!==o[i]&&(a=!1)}a&&(s.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},r={app:0},o={app:0},s=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-2d0a496c":"b38b4a3c","chunk-2d0d63ff":"ea7ec606","chunk-4b1a73d4":"d76088cd","chunk-de739a56":"438cb5c9"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-4b1a73d4":1,"chunk-de739a56":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-2d0a496c":"31d6cfe0","chunk-2d0d63ff":"31d6cfe0","chunk-4b1a73d4":"2e48e6a9","chunk-de739a56":"73a83cf2"}[e]+".css",o=u.p+a,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var c=s[i],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===a||l===o))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){c=d[i],l=c.getAttribute("data-href");if(l===a||l===o)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var a=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete r[e],m.parentNode.removeChild(m),n(s)},m.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var s=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=s);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var d=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(m);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}o[e]=void 0}};var m=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var m=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0b0f":function(e,t,n){},3936:function(e,t,n){"use strict";var a=n("ae07"),r=n.n(a);r.a},4360:function(e,t,n){"use strict";var a=n("2b0e"),r=n("2f62"),o=(n("4fad"),n("a78e")),s=n.n(o);function i(e){for(var t=Object.entries(e),n=0;n<t.length;n+=1)s.a.set(t[n][0],t[n][1]);return!0}function u(){return{username:s.a.get("username"),appkey:s.a.get("appkey"),role:s.a.get("role"),email:s.a.get("email")}}function c(){return s.a.remove("username"),s.a.remove("appkey"),s.a.remove("role"),s.a.remove("email"),!0}a["a"].use(r["a"]);t["a"]=new r["a"].Store({state:{collapsed:!1,user:u(),menuRoutes:[]},mutations:{changeCollapsed:function(e){e.collapsed=!e.collapsed},setUserInfo:function(e,t){e.user=t},logout:function(e){e.user={username:"",appkey:"",role:"",email:""}},changeMenuRoutes:function(e,t){e.menuRoutes=t}},actions:{changeCollapsed:function(e){var t=e.commit;t("changeCollapsed")},setUserInfo:function(e,t){var n=e.commit;n("setUserInfo",t),i(t)},logout:function(e){var t=e.commit;t("logout"),c()},changeMenuRoutes:function(e,t){var n=e.commit;n("changeMenuRoutes",t)}},modules:{}})},4678:function(e,t,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id="4678"},"4ee2":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=n("2819"),o=n.n(r),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],u={name:"app",components:{}},c=u,l=n("2877"),d=Object(l["a"])(c,s,i,!1,null,null,null),m=d.exports,f=(n("99af"),n("d3b7"),n("8c4f")),p=n("4360"),h=(n("4de4"),n("c975"),n("d81d"),n("b0c0"),{coustomer:[{name:"Product"},{name:"ProductList"},{name:"ProductAdd"},{name:"ProductEdit"}],admin:[{name:"Product"},{name:"ProductList"},{name:"ProductAdd"},{name:"Category"},{name:"ProductEdit"}]});function b(e,t){console.log(e,t);var n=h[e].map((function(e){return e.name})),a=t.filter((function(e){var t=e;if(-1!==n.indexOf(e.name)){var a=t.children;return t.children=a.filter((function(e){return-1!==n.indexOf(e.name)})),!0}return!1}));return a}var g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("left-menu",{key:e.key}),n("div",{class:{"main-app":!0,"extend-app":e.$store.state.collapsed}},[n("slider-nav"),n("router-view")],1)],1)},j=[],v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"menu-list"},[n("a-menu",{attrs:{"default-selected-keys":[e.defaultSelectKey],"default-open-keys":[e.defaultOpenKey],mode:"inline",theme:"dark","inline-collapsed":e.$store.state.collapsed}},[e._l(e.$store.state.menuRoutes,(function(t){return[t.meta.hidden?e._e():n("a-sub-menu",{key:t.name},[n("span",{attrs:{slot:"title"},slot:"title"},[n("a-icon",{attrs:{type:t.meta.icon}}),n("span",[e._v(e._s(t.meta.title))])],1),e._l(t.children,(function(t){return[t.meta.hidden?e._e():n("a-menu-item",{key:t.name},[n("router-link",{attrs:{to:{name:t.name}}},[n("a-icon",{attrs:{type:t.meta.icon}}),e._v(" "+e._s(t.meta.title)+" ")],1)],1)]}))],2)]}))],2)],1)},y=[],k={computed:{defaultSelectKey:{get:function(){return this.$router.currentRoute.matched[1]?this.$router.currentRoute.matched[1].name:""}},defaultOpenKey:{get:function(){return this.$router.currentRoute.matched[0].name}}},watch:{$route:function(){console.log(this.$router)}},created:function(){console.log(this.$router)}},w=k,_=(n("d74e"),Object(l["a"])(w,v,y,!1,null,null,null)),P=_.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"silder-nav"},[n("a-button",{attrs:{type:"primary"},on:{click:e.toggleCollapsed}},[n("a-icon",{attrs:{type:e.$store.state.collapsed?"menu-unfold":"menu-fold"}})],1),n("div",{staticClass:"breadcrumb"},[e.currentRoute.length>1?n("a-breadcrumb",[n("a-breadcrumb-item",[e._v(e._s(e.currentRoute[0]?e.currentRoute[0].meta.title:""))]),n("a-breadcrumb-item",[n("router-link",{attrs:{to:{name:e.currentRoute[1].name}}},[e._v(" "+e._s(e.currentRoute[1]?e.currentRoute[1].meta.title:"")+" ")])],1)],1):e._e()],1),n("ul",{staticClass:"user-info"},[n("li",{staticClass:"user-name"},[e._v(" "+e._s(e.$store.state.user.username)+" "),n("a-icon",{attrs:{type:"down"}})],1),n("li",{staticClass:"login-out",on:{click:e.logout}},[e._v("退出")])])],1)},x=[],$={data:function(){return{currentRoute:this.$router.currentRoute.matched}},watch:{$route:function(){this.currentRoute=this.$router.currentRoute.matched}},methods:{toggleCollapsed:function(){this.$store.dispatch("changeCollapsed")},logout:function(){this.$store.dispatch("logout"),this.$router.push({name:"Login"})}}},F=$,O=(n("5f0a"),Object(l["a"])(F,C,x,!1,null,null,null)),E=O.exports,z={data:function(){return{key:(new Date).getTime()}},watch:{$route:function(){this.key=(new Date).getTime()}},components:{leftMenu:P,sliderNav:E},methods:{}},R=z,L=(n("6b1f"),Object(l["a"])(R,g,j,!1,null,null,null)),T=L.exports,N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("a-form-model",e._b({ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.rules}},"a-form-model",e.layout,!1),[n("router-link",{attrs:{to:"/login"}},[e._v("登录")]),n("router-link",{attrs:{to:"/register"}},[e._v("/注册")]),n("a-form-model-item",{attrs:{"has-feedback":"",label:"邮箱",prop:"email"}},[n("a-input",{model:{value:e.loginForm.email,callback:function(t){e.$set(e.loginForm,"email",t)},expression:"loginForm.email"}})],1),n("a-form-model-item",{attrs:{"has-feedback":"",label:"密码",prop:"password"}},[n("a-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}})],1),n("a-form-model-item",{attrs:{"wrapper-col":{span:14,offset:4}}},[n("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("loginForm")}}},[e._v(" 提交 ")]),n("a-button",{staticStyle:{"margin-left":"10px"},on:{click:function(t){return e.resetForm("loginForm")}}},[e._v(" 重置 ")])],1)],1)],1)},S=[],q=n("bb36"),I={login:function(e){return q["a"].post("/passport/login",e)},register:function(e){return q["a"].post("/passport/logon",e)},getCode:function(e){return q["a"].post("/passport/getCode",e)}},D={data:function(){var e=/^[\w-]+@[\w.-]+.com$/,t=function(t,n,a){return n?e.test(n)?a():a(new Error("邮箱格式不正确")):a(new Error("请输入邮箱"))},n=function(e,t,n){""===t?n(new Error("请输入密码")):n()};return{loginForm:{password:"",email:""},rules:{password:[{validator:n,trigger:"change"}],email:[{validator:t,trigger:"change"}]},layout:{labelCol:{span:4},wrapperCol:{span:14}}}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate((function(e){return e?(I.login(t.loginForm).then((function(e){console.log(e),t.$store.dispatch("setUserInfo",e),t.$router.push({name:"Home"})})).catch((function(e){t.$message.error(e)})),!0):(console.log("error submit!!"),!1)}))},resetForm:function(e){this.$refs[e].resetFields()}}},A=D,M=(n("3936"),Object(l["a"])(A,N,S,!1,null,null,null)),U=M.exports,V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"register-form"},[n("a-form",{attrs:{form:e.form},on:{submit:e.handleSubmit}},[n("router-link",{attrs:{to:"/login"}},[e._v("登录")]),n("router-link",{attrs:{to:"/register"}},[e._v("/注册")]),n("a-form-item",e._b({},"a-form-item",e.formItemLayout,!1),[n("span",{attrs:{slot:"label"},slot:"label"},[e._v(" 用户名 ")]),n("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["username",{rules:[{required:!0,message:"Please input your nickname!",whitespace:!0}]}],expression:"[\n          'username',\n          {\n            rules: [\n              {\n                required: true,\n                message: 'Please input your nickname!',\n                whitespace: true,\n              },\n            ],\n          },\n        ]"}]})],1),n("a-form-item",e._b({attrs:{label:"电子邮件"}},"a-form-item",e.formItemLayout,!1),[n("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["email",{rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}]}],expression:"[\n          'email',\n          {\n            rules: [\n              {\n                type: 'email',\n                message: 'The input is not valid E-mail!',\n              },\n              {\n                required: true,\n                message: 'Please input your E-mail!',\n              },\n            ],\n          },\n        ]"}]})],1),n("a-form-item",e._b({attrs:{label:"密码","has-feedback":""}},"a-form-item",e.formItemLayout,!1),[n("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",{rules:[{required:!0,message:"Please input your password!"},{validator:e.validateToNextPassword}]}],expression:"[\n          'password',\n          {\n            rules: [\n              {\n                required: true,\n                message: 'Please input your password!',\n              },\n              {\n                validator: validateToNextPassword,\n              },\n            ],\n          },\n        ]"}],attrs:{type:"password"}})],1),n("a-form-item",e._b({attrs:{label:"确认密码","has-feedback":""}},"a-form-item",e.formItemLayout,!1),[n("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["confirm",{rules:[{required:!0,message:"Please confirm your password!"},{validator:e.compareToFirstPassword}]}],expression:"[\n          'confirm',\n          {\n            rules: [\n              {\n                required: true,\n                message: 'Please confirm your password!',\n              },\n              {\n                validator: compareToFirstPassword,\n              },\n            ],\n          },\n        ]"}],attrs:{type:"password"},on:{blur:e.handleConfirmBlur}})],1),n("a-form-item",e._b({attrs:{label:"验证码"}},"a-form-item",e.formItemLayout,!1),[n("a-row",{attrs:{gutter:8}},[n("a-col",{attrs:{span:12}},[n("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["code",{rules:[{required:!0,message:"Please input the captcha you got!"}]}],expression:"[\n              'code',\n              {\n                rules: [\n                  {\n                    required: true,\n                    message: 'Please input the captcha you got!',\n                  },\n                ],\n              },\n            ]"}]})],1),n("a-col",{attrs:{span:12}},[n("a-button",{on:{click:function(t){return e.getword()}}},[e._v("获取验证码")])],1)],1)],1),n("a-form-item",e._b({},"a-form-item",e.tailFormItemLayout,!1),[n("a-button",{attrs:{type:"primary","html-type":"submit"}},[e._v("注册")])],1)],1)],1)},B=[],K={data:function(){return{confirmDirty:!1,autoCompleteResult:[],formItemLayout:{labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},tailFormItemLayout:{wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}}}},beforeCreate:function(){this.form=this.$form.createForm(this,{name:"register"})},methods:{getword:function(){console.log(this.form.getFieldValue("email")),I.getCode({email:this.form.getFieldValue("email")}).then((function(e){window.console.log(e)}))},handleSubmit:function(e){var t=this;e.preventDefault(),this.form.validateFieldsAndScroll((function(e){e||I.register({email:t.form.getFieldValue("email"),password:t.form.getFieldValue("password"),code:t.form.getFieldValue("code"),username:t.form.getFieldValue("username")}).then((function(e){alert(e)})).catch((function(e){t.$message.error(e)}))}))},handleConfirmBlur:function(e){var t=e.target.value;this.confirmDirty=this.confirmDirty||!!t},compareToFirstPassword:function(e,t,n){var a=this.form;t&&t!==a.getFieldValue("password")?n("Two passwords that you enter is inconsistent!"):n()},validateToNextPassword:function(e,t,n){var a=this.form;t&&this.confirmDirty&&a.validateFields(["confirm"],{force:!0}),n()}}},H=K,J=(n("fdcd"),Object(l["a"])(H,V,B,!1,null,null,null)),G=J.exports;a["a"].use(f["a"]);var Q=[{path:"/product",name:"Product",meta:{title:"商品",icon:"inbox",hidden:!1},component:T,children:[{path:"list",name:"ProductList",meta:{title:"商品列表",icon:"unordered-list",hidden:!1},component:function(){return n.e("chunk-4b1a73d4").then(n.bind(null,"59f0"))}},{path:"add",name:"ProductAdd",meta:{title:"添加商品",icon:"file-add",hidden:!1},component:function(){return n.e("chunk-de739a56").then(n.bind(null,"02aa"))}},{path:"edit/:id",name:"ProductEdit",meta:{title:"编辑商品",icon:"file-add",hidden:!0},component:function(){return n.e("chunk-de739a56").then(n.bind(null,"02aa"))}},{path:"category",name:"Category",meta:{title:"类目管理",icon:"project",hidden:!1},component:function(){return n.e("chunk-2d0a496c").then(n.bind(null,"06a1"))}}]}],W=[{path:"/",name:"Home",component:T,redirect:"/index",meta:{title:"首页",hidden:!1,icon:"home"},children:[{path:"index",name:"Index",meta:{title:"统计",icon:"number",hidden:!1},component:function(){return n.e("chunk-2d0d63ff").then(n.bind(null,"726d"))}}]},{path:"/login",name:"Login",component:U,meta:{title:"登录",hidden:!0}},{path:"/register",name:"Register",component:G,meta:{title:"注册",hidden:!0}}],X=new f["a"]({routes:W}),Y=!1;X.beforeEach((function(e,t,n){if("/login"===e.path)return n();if("/register"===e.path)return n();if(p["a"].state.user.appkey&&p["a"].state.user.username&&p["a"].state.user.role){if(!Y){var a=b(p["a"].state.user.role,Q);p["a"].dispatch("changeMenuRoutes",W.concat(a)).then((function(){X.addRoutes(a),n()})),Y=!0}return n()}return n("/login")}));var Z=X,ee=n("f23d");n("0b0f");a["a"].use(ee["a"]);n("4ee2");a["a"].use(o.a),a["a"].config.productionTip=!1,new a["a"]({router:Z,store:p["a"],render:function(e){return e(m)}}).$mount("#app")},5825:function(e,t,n){},"5f0a":function(e,t,n){"use strict";var a=n("89a5"),r=n.n(a);r.a},"6b1f":function(e,t,n){"use strict";var a=n("9e59"),r=n.n(a);r.a},"89a5":function(e,t,n){},"9e59":function(e,t,n){},ae07:function(e,t,n){},bb36:function(e,t,n){"use strict";n("caad"),n("d3b7"),n("2532");var a=n("5530"),r=n("bc3a"),o=n.n(r),s=n("4360"),i=o.a.create({baseURL:"https://mallapi.duyiedu.com/"});i.interceptors.request.use((function(e){return e.url.includes("/passport")?e:Object(a["a"])(Object(a["a"])({},e),{},{params:Object(a["a"])(Object(a["a"])({},e.params),{},{appkey:s["a"].state.user.appkey})})}),(function(e){return Promise.reject(e)})),i.interceptors.response.use((function(e){return"fail"===e.data.status?Promise.reject(e.data.msg):e.data.data}),(function(e){return Promise.reject(e)})),t["a"]=i},d74e:function(e,t,n){"use strict";var a=n("faaa"),r=n.n(a);r.a},faaa:function(e,t,n){},fdcd:function(e,t,n){"use strict";var a=n("5825"),r=n.n(a);r.a}});
//# sourceMappingURL=app.c722fe2b.js.map