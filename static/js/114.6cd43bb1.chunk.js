"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[114],{687:function(t,r,n){n.d(r,{M1:function(){return o},TP:function(){return i},tx:function(){return f},yE:function(){return s},z1:function(){return p}});var e=n(861),a=n(757),u=n.n(a),c=n(294);c.Z.defaults.baseURL="https://api.themoviedb.org/3",c.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5M2EzMDMwNDA1ZmE3MjE5MTg3YThjZmJmMzQ2OTZiNCIsInN1YiI6IjY1OWU5YzU0OTU5MGUzMDIwMTM3OTg3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q8ZIn2wvoXHyxWOhwS8DRzu8NLIcA7ad-BJsgX8YwJU";var s=function(){var t=(0,e.Z)(u().mark((function t(){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/trending/movie/day",{});case 2:return r=t.sent,n=r.data,t.abrupt("return",n.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,e.Z)(u().mark((function t(r){var n,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(r),{});case 2:return n=t.sent,e=n.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),o=function(){var t=(0,e.Z)(u().mark((function t(r){var n,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(r,"/credits"),{});case 2:return n=t.sent,e=n.data,t.abrupt("return",e.cast);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(u().mark((function t(r){var n,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(r,"/reviews"),{});case 2:return n=t.sent,e=n.data,t.abrupt("return",e.results);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(u().mark((function t(r){var n,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/search/movie?",{params:{query:r}});case 2:return n=t.sent,e=n.data,t.abrupt("return",e.results);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()},126:function(t,r,n){n(791);var e=n(689),a=n(87),u=n(184);r.Z=function(t){var r=t.movies,n=(0,e.TH)();return(0,u.jsx)("ul",{children:r.map((function(t){return(0,u.jsx)("li",{children:(0,u.jsx)(a.OL,{state:{from:n},to:"/movies/".concat(t.id),children:t.title})},t.id)}))})}},114:function(t,r,n){n.r(r);var e=n(861),a=n(439),u=n(757),c=n.n(u),s=n(687),i=n(126),o=n(791),f=n(174),p=n(184);r.default=function(){var t=(0,o.useState)([]),r=(0,a.Z)(t,2),n=r[0],u=r[1];return(0,o.useEffect)((function(){function t(){return(t=(0,e.Z)(c().mark((function t(){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,s.yE)();case 3:r=t.sent,u((function(t){return r})),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),(0,f.Am)(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h3",{children:"Trending movies"}),(0,p.jsx)(i.Z,{movies:n})]})}}}]);
//# sourceMappingURL=114.6cd43bb1.chunk.js.map