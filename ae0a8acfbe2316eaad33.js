(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1008:function(e,t,r){"use strict";var n=r(900);r.n(n).a},1027:function(e,t,r){"use strict";r.r(t);r(99),r(85),r(133),r(68),r(97),r(53);var n=r(3),o=r(9),c=r(13),l=r(22),f=r(15),m=r(23),d=r(24),v=r(5),h=r(909),y=r(910),k=r(42),_=r(98),O=r(216),j=r(30),w=r(56),C=function(e,t,r,desc){var n,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(c=(o<3?n(c):o>3?n(t,r,c):n(t,r))||c);return o>3&&c&&Object.defineProperty(t,r,c),c},N=Object(_.d)("user"),x=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"head",value:function(){return{title:"".concat(this.profileDisplayName," - Decentium"),meta:[{hid:"description",name:"description",content:this.profileBio||"".concat(this.profileDisplayName," writes on decentium")}],link:[{rel:"canonical",href:"".concat(j.a.canonicalDomain).concat(this.$route.path)}]}}},{key:"validate",value:function(e){var t=e.params.author;return Object(w.f)(t)}},{key:"fetch",value:function(){var e=Object(n.a)(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.params.author,e.next=3,t.store.dispatch("page/loadProfiles",[r]);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"asyncData",value:function(){var e=Object(n.a)(regeneratorRuntime.mark(function e(t){var r,n,o,c,l,f,m;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.params.author,e.next=3,t.app.$api.getBlog(r);case 3:if(n=e.sent,o=t.query.from,n){e.next=13;break}if(r!=t.store.getters["user/accountName"]){e.next=11;break}return t.redirect({name:"create-blog"}),e.abrupt("return");case 11:return t.error({statusCode:404,message:"Blog not found"}),e.abrupt("return");case 13:return e.next=15,t.app.$api.getBlogPosts(r,o);case 15:c=e.sent,l=c.posts,f=c.next,m=l.map(function(e){return new O.d(e)}),e.next=24;break;case 22:e.next=26;break;case 24:return e.next=26,Object(O.f)(m.slice(0,2));case 26:return e.abrupt("return",{blog:n,items:m,next:f,from:o});case 27:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"profile",get:function(){var e=this.$store.getters["page/GET_PROFILE"](this.blog.author);return e?e.profile:null}},{key:"isOwnBlog",get:function(){return!!this.accountName&&this.accountName===this.blog.author}},{key:"hasPosts",get:function(){return this.blog.stats.total_posts>0}},{key:"profileAccountName",get:function(){return this.blog.author}},{key:"profileDisplayName",get:function(){return this.profileName||this.profileAccountName}},{key:"profileName",get:function(){return this.profile?this.profile.name:null}},{key:"profileImage",get:function(){return this.profile?this.profile.image:null}},{key:"profileBio",get:function(){return this.profile?this.profile.bio:null}},{key:"profileStats",get:function(){var e=this.blog.stats,t=[];if(e.total_posts>0&&t.push("".concat(e.total_posts," ").concat(e.total_posts>1?"Articles":"Article")),e.endorsements_received.count>0){var r=e.endorsements_received.count;t.push("".concat(r," ").concat(r>1?"Endorsements":"Endorsement"))}if(e.incoming_linkbacks.count>0){var n=e.incoming_linkbacks.count;t.push("".concat(n," ").concat(n>1?"Linkbacks":"Linkback"))}return t}}]),t}(v.default);C([Object(O.a)(O.d)],x.prototype,"items",void 0),C([N.Getter],x.prototype,"accountName",void 0),C([N.Getter],x.prototype,"wallet",void 0);var P=x=C([Object(k.b)({components:{UserHeader:y.a,PostPreview:h.a},key:function(e){return e.fullPath},provide:function(){return{imageInfo:[],linkbacks:[]}},watchQuery:["from"]})],x),R=(r(1008),r(33)),component=Object(R.a)(P,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"dc-container dc-blog-page"},[r("user-header",{attrs:{profile:e.profile,blog:e.blog}}),e._v(" "),r("no-ssr",[e.isOwnBlog&&!e.profile?r("section",{staticClass:"dc-empty-profile"},[r("n-link",{staticClass:"button",attrs:{to:{name:"settings-profile"}}},[e._v("\n                Setup your profile\n            ")])],1):e._e()]),e._v(" "),r("hr",{staticClass:"dc-full-divider"}),e._v(" "),e.items.length>0?r("section",{staticClass:"dc-feed"},e._l(e.items,function(t,n){return r("post-preview",{key:t.ref.transaction_id,attrs:{item:t,"is-featured":!e.from&&n<2}})}),1):r("section",{staticClass:"dc-empty-blog"},[r("no-ssr",[e.isOwnBlog&&!e.hasPosts?r("n-link",{staticClass:"button",attrs:{to:{name:"write"}}},[e._v("\n                Write your first post\n            ")]):e._e()],1)],1),e._v(" "),e.next?r("div",{staticClass:"next"},[r("n-link",{attrs:{to:"/"+e.profileAccountName+"?from="+e.next}},[e._v("Next →")])],1):e._e()],1)},[],!1,null,null,null);t.default=component.exports},871:function(e,t,r){},875:function(e,t,r){},880:function(e,t,r){"use strict";var n=r(871);r.n(n).a},899:function(e,t,r){"use strict";var n=r(875);r.n(n).a},900:function(e,t,r){},909:function(e,t,r){"use strict";r(97);var n=r(9),o=r(13),c=r(22),l=r(15),f=r(23),m=r(24),d=r(8),v=r(56),h=r(381),y=r(388),k=function(e,t,r,desc){var n,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(c=(o<3?n(c):o>3?n(t,r,c):n(t,r))||c);return o>3&&c&&Object.defineProperty(t,r,c),c},_=function(e){function t(){var e;return Object(n.a)(this,t),(e=Object(c.a)(this,Object(l.a)(t).apply(this,arguments))).brokenImage=!1,e}return Object(f.a)(t,e),Object(o.a)(t,[{key:"itemUpdated",value:function(){this.item.resolve(),this.$store.dispatch("page/loadProfiles",[this.item.ref.permlink.author])}},{key:"imageError",value:function(e){this.item.preview&&this.item.preview.imageInfo||(this.brokenImage=!0)}},{key:"classList",get:function(){var e=this.item.preview;return{"is-featured":this.isFeatured,"has-image":!this.brokenImage&&e&&e.hasImage,"is-portrait":e&&e.isPortrait}}},{key:"loaded",get:function(){return null!=this.item.preview}},{key:"permlink",get:function(){return"/"+v.c(this.item.ref.permlink)}},{key:"category",get:function(){return this.item.ref.category}},{key:"date",get:function(){return v.d(this.item.ref.timestamp)}}]),t}(d.c);k([Object(d.b)()],_.prototype,"item",void 0),k([Object(d.b)({default:"medium",type:String})],_.prototype,"kind",void 0),k([Object(d.b)({default:!1,type:Boolean})],_.prototype,"isFeatured",void 0),k([Object(d.d)("item",{immediate:!0})],_.prototype,"itemUpdated",null);var O=_=k([Object(d.a)({components:{LazyImage:h.a,InlineProfile:y.a}})],_),j=(r(880),r(33)),component=Object(j.a)(O,function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.loaded?r("div",{staticClass:"dc-post-preview",class:e.classList},[e.item.preview.image&&!e.brokenImage?r("div",{staticClass:"dc-image"},[r("n-link",{attrs:{to:e.permlink}},[r("lazy-image",{attrs:{"disable-animation":"",info:e.item.preview.imageInfo,src:e.item.preview.image,alt:e.item.preview.title},on:{error:e.imageError}})],1)],1):e._e(),e._v(" "),r("div",{staticClass:"dc-info"},[r("div",{staticClass:"dc-title"},[r("n-link",{attrs:{to:e.permlink}},[e._v(e._s(e.item.preview.title))])],1),e._v(" "),r("div",{staticClass:"dc-summary"},[e._v("\n            "+e._s(e.item.preview.summary)+"\n        ")]),e._v(" "),r("div",{staticClass:"dc-meta"},[r("inline-profile",{attrs:{author:e.item.preview.author,"is-large":e.isFeatured}},[e._v("\n                "+e._s(e.date)+"\n                "),e._t("default")],2)],1)])]):r("div",{staticClass:"dc-post-preview has-image placeholder"},[e.item.error?r("div",{staticClass:"error"},[e._v(e._s(e.item.error))]):e._e(),e._v(" "),r("div",{staticClass:"dc-image"}),e._v(" "),e._m(0)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"dc-info"},[t("div",{staticClass:"dc-title"},[this._v(" ")]),this._v(" "),t("div",{staticClass:"dc-summary"},[this._v(" ")]),this._v(" "),t("div",{staticClass:"dc-meta"},[this._v(" ")])])}],!1,null,null,null);t.a=component.exports},910:function(e,t,r){"use strict";r(99),r(68),r(97);var n=r(9),o=r(13),c=r(22),l=r(15),f=r(23),m=r(24),d=r(8),v=r(98),h=r(381),y=function(e,t,r,desc){var n,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(c=(o<3?n(c):o>3?n(t,r,c):n(t,r))||c);return o>3&&c&&Object.defineProperty(t,r,c),c},k=(Object(v.d)("user"),function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(o.a)(t,[{key:"profileAccountName",get:function(){return this.blog.author}},{key:"profileDisplayName",get:function(){return this.profileName||this.profileAccountName}},{key:"profileName",get:function(){return this.profile?this.profile.name:null}},{key:"profileImage",get:function(){return this.blog&&this.profile?this.profile.image:null}},{key:"profileBio",get:function(){return this.blog&&this.profile?this.profile.bio:null}},{key:"profileStats",get:function(){if(!this.blog)return null;var e=this.blog.stats,t=[];if(e.total_posts>0&&t.push("".concat(e.total_posts," ").concat(e.total_posts>1?"Articles":"Article")),e.endorsements_received.count>0){var r=e.endorsements_received.count;t.push("".concat(r," ").concat(r>1?"Endorsements":"Endorsement"))}if(e.incoming_linkbacks.count>0){var n=e.incoming_linkbacks.count;t.push("".concat(n," ").concat(n>1?"Linkbacks":"Linkback"))}return t}}]),t}(d.c));y([Object(d.b)({required:!0})],k.prototype,"profile",void 0),y([Object(d.b)()],k.prototype,"blog",void 0);var _=k=y([Object(d.a)({components:{LazyImage:h.a}})],k),O=(r(899),r(33)),component=Object(O.a)(_,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"dc-profile h-card"},[e.profileImage?r("div",{ref:"image",staticClass:"dc-profile-image"},[r("lazy-image",{staticClass:"u-photo",attrs:{src:e.profileImage,alt:e.profileDisplayName}})],1):e._e(),e._v(" "),r("div",{staticClass:"dc-profile-name",class:{"p-name":!!e.profileName,"p-nickname":!e.profileName}},[e._v("\n        "+e._s(e.profileDisplayName)+"\n    ")]),e._v(" "),e.profileBio?r("div",{staticClass:"dc-profile-bio p-note"},[e._v("\n        "+e._s(e.profileBio)+"\n    ")]):e._e(),e._v(" "),r("div",{staticClass:"dc-profile-stats"},e._l(e.profileStats,function(t,n){return r("span",{key:n},[e._v("\n            "+e._s(t)+"\n        ")])}),0)])},[],!1,null,null,null);t.a=component.exports}}]);