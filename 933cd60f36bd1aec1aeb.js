(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1025:function(t,e,n){"use strict";n.r(e);n(97);var o=n(9),c=n(13),r=n(22),l=n(15),d=n(23),f=n(24),v=n(5),h=n(42),O=n(98),y=function(t,e,n,desc){var o,c=arguments.length,r=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(r=(c<3?o(r):c>3?o(e,n,r):o(e,n))||r);return c>3&&r&&Object.defineProperty(e,n,r),r},_=Object(O.d)("user"),j=function(t){function e(){return Object(o.a)(this,e),Object(r.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(c.a)(e,[{key:"doLogin",value:function(t){this.login(t)}},{key:"logoutAll",value:function(){var t=this;this.logout().then(function(){t.$route.meta.requiresAuth&&t.$router.push("/")})}}]),e}(v.default);y([_.Getter],j.prototype,"authenticated",void 0),y([_.Action],j.prototype,"login",void 0),y([_.Action],j.prototype,"logout",void 0),y([_.Action],j.prototype,"restoreLogin",void 0);var w=j=y([Object(h.b)({head:{title:"Sign in – Decentium"}})],j),k=(n(983),n(33)),component=Object(k.a)(w,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dc-container dc-sign-in-page"},[n("no-ssr",[t.authenticated?n("div",{staticClass:"dc-content"},[n("p",[t._v("\n                Already signed in in, want to sign out? "),n("br"),n("br"),t._v(" "),n("button",{staticClass:"button",on:{click:t.logoutAll}},[t._v("\n                    Sign out\n                ")])])]):n("div",{staticClass:"dc-content"},[t._v("\n            Sign in with your EOS account using:"),n("br"),n("br"),t._v(" "),n("button",{staticClass:"button",on:{click:function(e){return e.preventDefault(),t.doLogin("scatter")}}},[t._v("Scatter")]),t._v(" "),n("button",{staticClass:"button",on:{click:function(e){return e.preventDefault(),t.doLogin("ledger")}}},[t._v("Ledger")]),t._v(" "),n("hr"),t._v(" "),n("n-link",{attrs:{to:{name:"create-account"}}},[t._v("Need a EOS account?")])],1)])],1)},[],!1,null,null,null);e.default=component.exports},885:function(t,e,n){},983:function(t,e,n){"use strict";var o=n(885);n.n(o).a}}]);