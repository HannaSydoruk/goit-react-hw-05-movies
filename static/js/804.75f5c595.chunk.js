"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[804],{687:function(e,t,n){n.d(t,{M1:function(){return o},TP:function(){return u},tx:function(){return l},yE:function(){return c},z1:function(){return p}});var r=n(861),a=n(757),s=n.n(a),i=n(294);i.Z.defaults.baseURL="https://api.themoviedb.org/3",i.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5M2EzMDMwNDA1ZmE3MjE5MTg3YThjZmJmMzQ2OTZiNCIsInN1YiI6IjY1OWU5YzU0OTU5MGUzMDIwMTM3OTg3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q8ZIn2wvoXHyxWOhwS8DRzu8NLIcA7ad-BJsgX8YwJU";var c=function(){var e=(0,r.Z)(s().mark((function e(){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/trending/movie/day",{});case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(t),{});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(t,"/credits"),{});case 2:return n=e.sent,r=n.data,e.abrupt("return",r.cast);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(t,"/reviews"),{});case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/search/movie?",{params:{query:t}});case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},804:function(e,t,n){n.r(t);var r=n(861),a=n(439),s=n(757),i=n.n(s),c=n(791),u=n(687),o=n(689),l=n(87),p=n(184),h=(0,c.lazy)((function(){return n.e(846).then(n.bind(n,846))})),d=(0,c.lazy)((function(){return n.e(119).then(n.bind(n,119))}));t.default=function(){var e,t,n=(0,c.useState)(null),s=(0,a.Z)(n,2),f=s[0],v=s[1],x=(0,o.UO)().movieId,m=(0,o.TH)(),j=(0,c.useRef)(null!==(e=null===(t=m.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/movies");return(0,c.useEffect)((function(){function e(){return(e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.TP)(t);case 2:n=e.sent,v(n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(t){e.apply(this,arguments)}(x)}),[x]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h3",{children:"Movie Details"}),(0,p.jsx)("p",{children:(0,p.jsx)(l.rU,{to:j.current,children:"Go back"})}),f&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("img",{src:f.poster_path?"http://image.tmdb.org/t/p/w185".concat(f.poster_path):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",width:240,alt:""}),(0,p.jsxs)("h2",{children:["Title: ",f.title]}),(0,p.jsxs)("p",{children:["Overview: ",f.overview]}),(0,p.jsxs)("p",{children:["Popularity: ",Math.round(10*f.vote_average),"%"]}),(0,p.jsxs)("div",{children:["Genres:",f.genres.map((function(e){return(0,p.jsx)("p",{children:e.name},e.id)}))]}),(0,p.jsx)("h3",{children:"Additional info:"}),(0,p.jsxs)("ul",{children:[(0,p.jsx)("li",{children:(0,p.jsx)(l.OL,{to:"cast",children:"Cast"})}),(0,p.jsx)("li",{children:(0,p.jsx)(l.OL,{to:"reviews",children:"Reviews"})})]}),(0,p.jsx)("div",{children:(0,p.jsx)(c.Suspense,{fallback:(0,p.jsx)("div",{children:"Loading..."}),children:(0,p.jsxs)(o.Z5,{children:[(0,p.jsx)(o.AW,{path:"cast",element:(0,p.jsx)(h,{})}),(0,p.jsx)(o.AW,{path:"reviews",element:(0,p.jsx)(d,{})})]})})})]})]})}}}]);
//# sourceMappingURL=804.75f5c595.chunk.js.map