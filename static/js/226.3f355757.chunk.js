"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[226],{392:function(e,t,r){r.d(t,{s:function(){return _}});r(2791);var n=r(6731),a=r(7689),c="FilmItem_film_item__vdXaX",s="FilmItem_film_item_image__NOzuA",u="FilmItem_link__bwMhO",i=r(184),o=function(e){var t=e.id,r=e.original_title,o=e.poster_path,l=(0,a.TH)();return(0,i.jsx)(n.rU,{to:"/movies/".concat(t),state:{from:l},className:u,children:(0,i.jsxs)("li",{className:c,children:[(0,i.jsx)("img",{className:s,width:"280",src:"https://image.tmdb.org/t/p/w500".concat(o),alt:r}),(0,i.jsx)("p",{children:r})]})})},l=r(3331),p="FilmList_film_list__itk-5",f="FilmList_error__ZVyWD",m="idle",v="pending",h="resolved",d="rejected",_=function(e){var t=e.movies,r=void 0===t?[]:t,n=e.status,a=void 0===n?m:n;return(0,i.jsxs)(i.Fragment,{children:[a===h&&(0,i.jsx)("ul",{className:p,children:r.map((function(e){var t=e.id,r=e.original_title,n=e.poster_path;return(0,i.jsx)(o,{id:t,original_title:r,poster_path:n},t)}))}),a===v&&(0,i.jsx)(l.a,{}),";",a===d&&(0,i.jsx)("p",{className:f,children:"Something is wrong..."})]})}},8226:function(e,t,r){r.r(t),r.d(t,{default:function(){return y}});var n=r(5861),a=r(885),c=r(4687),s=r.n(c),u=r(2791),i=r(6731),o=r(4635),l=r(392),p=r(7596),f=r(2134),m="SearchBar_searchbar__xBucJ",v="SearchBar_form__gW7Gj",h="SearchBar_button__T7RTc",d="SearchBar_input__bIy50",_=r(184),g=function(){var e=(0,i.lr)(),t=(0,a.Z)(e,2),r=t[0],n=t[1],c=r.get("query"),s=(0,u.useState)(c||""),o=(0,a.Z)(s,2),l=o[0],g=o[1];return(0,_.jsx)(_.Fragment,{children:(0,_.jsx)("div",{className:m,children:(0,_.jsxs)("form",{className:v,onSubmit:function(e){if(e.preventDefault(),""===(null===c||void 0===c?void 0:c.trim()))return p.Am.error("Please, specify your request!");n({query:l})},children:[(0,_.jsx)("button",{type:"submit",className:h,children:(0,_.jsx)(f.RB5,{stroke:"black",size:25})}),(0,_.jsx)("input",{className:d,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",onChange:function(e){g(e.currentTarget.value)},value:l})]})})})},x=r(3331),k="idle",b="pending",j="resolved",w="rejected",y=function(){var e=(0,i.lr)(),t=(0,a.Z)(e,1)[0].get("query"),r=(0,u.useState)([]),c=(0,a.Z)(r,2),f=c[0],m=c[1],v=(0,u.useState)(k),h=(0,a.Z)(v,2),d=h[0],y=h[1];return(0,u.useEffect)((function(){(0,n.Z)(s().mark((function e(){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return y(b),e.prev=3,e.next=6,(0,o.V0)(t);case 6:if(r=e.sent,(n=r.data).results.length){e.next=14;break}return y(w),m([]),e.abrupt("return",p.Am.warn("I did n\u043et find anything =("));case 14:y(j),m(n.results);case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(3),y(w);case 21:case"end":return e.stop()}}),e,null,[[3,18]])})))()}),[t]),f||d!==k?f||d!==b?f||d!==w?(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(g,{}),f.length>0&&(0,_.jsx)(l.s,{movies:f,status:d})]}):p.Am.warn("Error"):(0,_.jsx)(x.a,{}):(0,_.jsx)(_.Fragment,{})}},4635:function(e,t,r){r.d(t,{Hg:function(){return l},PL:function(){return m},TP:function(){return f},V0:function(){return p},tx:function(){return v}});var n=r(5861),a=r(4687),c=r.n(a),s=r(4569),u=r.n(s),i="5787548457546c05a58e27934de5db16",o="https://api.themoviedb.org/3",l=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u().get("".concat(o,"/trending/movie/day?api_key=").concat(i));case 3:return t=e.sent,e.abrupt("return",t);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u().get("".concat(o,"/search/movie?api_key=").concat(i,"&query=").concat(t,"&language=en-US&page=1&include_adult=false"));case 3:return r=e.sent,e.abrupt("return",r);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u().get("".concat(o,"/movie/").concat(t,"?api_key=").concat(i,"&language=en-US"));case 3:return r=e.sent,e.abrupt("return",r);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u().get("".concat(o,"/movie/").concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 3:return r=e.sent,e.abrupt("return",r);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u().get("".concat(o,"/movie/").concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 3:return r=e.sent,e.abrupt("return",r);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=226.3f355757.chunk.js.map