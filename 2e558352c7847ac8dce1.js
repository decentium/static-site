(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1028:function(e,t,n){"use strict";n.r(t);n(68),n(97),n(39),n(53);var r=n(3),o=n(9),l=n(13),c=n(22),f=n(15),d=n(23),m=n(24),h=n(5),v=n(42),y=n(8),k=n(98),x=n(216),O=function(e,t,n,desc){var r,o=arguments.length,l=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(l=(o<3?r(l):o>3?r(t,n,l):r(t,n))||l);return o>3&&l&&Object.defineProperty(t,n,l),l},j=Object(k.d)("user"),w=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(c.a)(this,Object(f.a)(t).apply(this,arguments))).isLoading=!1,e.name="",e.image="",e.bio="",e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"onProfileUpdate",value:function(){this.profile&&this.profile.data&&(this.name=this.profile.data.name,this.bio=this.profile.data.bio,this.image=this.profile.data.image?this.profile.data.image:"")}},{key:"mounted",value:function(){var e=Object(r.a)(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"asyncData",value:function(){var e=Object(r.a)(regeneratorRuntime.mark(function e(t){var n,r,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.app.store.getters["user/accountName"]){e.next=4;break}return t.redirect("/sign-in"),e.abrupt("return");case 4:return r=null,e.next=7,t.app.$api.getBlog(n);case 7:if(!(o=e.sent)){e.next=12;break}return r=new x.e(o.author,o.profile),e.next=12,r.resolve();case 12:return e.abrupt("return",{profile:r,blog:o});case 13:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"update",value:function(){var e=this;this.isLoading=!0,this.$api.updateProfile(this.wallet,{author:this.accountName,name:this.name,bio:this.bio,image:this.image.length>0?this.image:void 0}).then(function(t){var n=t.profile,r=t.ref;e.$store.commit("user/setProfile",n),e.$store.commit("page/SET_PROFILE",{key:e.accountName,value:{profile:n,ref:r}})}).finally(function(){e.$router.push("/".concat(e.accountName))})}}]),t}(h.default);O([j.Getter],w.prototype,"accountName",void 0),O([j.Getter],w.prototype,"wallet",void 0),O([Object(y.d)("profile",{immediate:!0})],w.prototype,"onProfileUpdate",null);var _=w=O([v.b],w),R=n(33),component=Object(R.a)(_,function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.profile?n("section",{staticClass:"section"},[n("div",{staticClass:"container"},[n("b-field",{attrs:{horizontal:"",label:"Account"}},[n("b-input",{attrs:{value:e.accountName,disabled:""}})],1),e._v(" "),n("b-field",{attrs:{horizontal:"",label:"Name"}},[n("b-input",{attrs:{disabled:e.isLoading,placeholder:"Display name"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),e._v(" "),n("b-field",{attrs:{horizontal:"",label:"Profile image"}},[n("b-input",{attrs:{type:"url",disabled:e.isLoading,placeholder:"Enter URL to image"},model:{value:e.image,callback:function(t){e.image=t},expression:"image"}})],1),e._v(" "),n("b-field",{attrs:{horizontal:"",label:"Bio"}},[n("b-input",{attrs:{type:"textarea",maxlength:"280",disabled:e.isLoading,placeholder:"Short description about yourself or the blog"},model:{value:e.bio,callback:function(t){e.bio=t},expression:"bio"}})],1),e._v(" "),n("b-field",{attrs:{horizontal:""}},[n("p",{staticClass:"control"},[n("button",{staticClass:"button is-primary",class:{"is-loading":e.isLoading},on:{click:e.update}},[e._v("\n                    Save\n                ")])])])],1)]):n("section",[n("div",{staticClass:"container dc-content"},[n("p",{staticStyle:{"text-align":"center",margin:"20px"}},[e._v("\n            You must "),n("n-link",{staticStyle:{"text-decoration":"underline"},attrs:{to:{name:"create-blog"}}},[e._v("create your blog")]),e._v(" before you can edit\n            your profile.\n        ")],1)])])},[],!1,null,null,null);t.default=component.exports}}]);