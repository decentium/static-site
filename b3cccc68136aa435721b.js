(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{680:function(e,t,r){},771:function(e,t,r){"use strict";var n=r(680);r.n(n).a},809:function(e,t,r){"use strict";r.r(t);r(43);var n=r(3),o=r(12),c=r(13),l=r(24),d=r(16),h=r(25),f=r(26),v=r(5),y=r(42),j=r(96),m=r(8),O=r(44),x=function(e,t,r,desc){var n,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(c=(o<3?n(c):o>3?n(t,r,c):n(t,r))||c);return o>3&&c&&Object.defineProperty(t,r,c),c},k=Object(j.d)("user"),w=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(d.a)(t).apply(this,arguments))).isLoading=!1,e.error=null,e}return Object(h.a)(t,e),Object(c.a)(t,[{key:"validate",value:function(e){var t=e.redirect,r=e.store,n=r.state.user.blog,o=r.getters["user/accountName"];return n&&o?t("/x/"+o):o||t("/sign-in"),!0}},{key:"blogUpdated",value:function(){this.blog&&this.$router.push({path:"/x/".concat(this.blog.author)})}},{key:"createBlog",value:function(){var e=Object(n.a)(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.isLoading=!0,this.error=null,t=null,e.prev=3,e.next=6,this.$api.createBlog(this.wallet);case 6:return e.next=8,this.$api.getBlog(this.accountName);case 8:if(t=e.sent){e.next=15;break}return e.next=12,Object(O.j)(1e3);case 12:return e.next=14,this.$api.getBlog(this.accountName);case 14:t=e.sent;case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(3),this.error=e.t0.message||String(e.t0);case 20:t||(this.error="Error fetching created blog, try reloading the page."),this.isLoading=!1,t&&this.$store.commit("user/setBlog",t);case 23:case"end":return e.stop()}},e,this,[[3,17]])}));return function(){return e.apply(this,arguments)}}()}]),t}(v.default);x([k.Getter],w.prototype,"accountName",void 0),x([k.Getter],w.prototype,"wallet",void 0),x([k.State],w.prototype,"blog",void 0),x([Object(m.d)("blog")],w.prototype,"blogUpdated",null);var _=w=x([Object(y.b)({head:{title:"Create your blog – Decentium"}})],w),C=(r(771),r(29)),component=Object(C.a)(_,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"section dc-create-blog-page"},[r("div",{staticClass:"container content"},[r("p",{staticClass:"has-text-centered"},[r("button",{staticClass:"button is-large is-primary",class:{"is-loading":e.isLoading},on:{click:e.createBlog}},[e._v("\n                Create blog\n            ")])]),e._v(" "),r("p",{staticClass:"has-text-centered"},[e._v("\n            By creating your blog you agree to the\n            "),r("n-link",{attrs:{target:"_blank",to:"/tos"}},[e._v("Decentium Terms of Service (DToS)")])],1),e._v(" "),e.error?r("p",{staticClass:"has-text-centered has-text-danger"},[e._v(e._s(e.error))]):e._e()])])},[],!1,null,null,null);t.default=component.exports}}]);