(this["webpackJsonpnote-taking"]=this["webpackJsonpnote-taking"]||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var i=n(1),s=n.n(i),c=n(4),r=n.n(c),o=(n(11),n(0)),a=function(e){var t=e.text,n=e.onClick;return Object(o.jsx)("button",{onClick:n,className:l,style:{verticalAlign:"middle"},children:t})},l="px-4 py-2 rounded-md text-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500";a.defaultProps={text:"Add"};var d=a,u=n(3),j=n(6),b=function(e,t,n){t((function(t){return t.map((function(t){return e.id===t.id?Object(u.a)(Object(u.a)({},t),{},{isDeleted:!0}):t}))}))},g=function(e){var t=e.task,n=e.setTasks;e.isDeleted;return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(j.a,{onClick:function(){return b(t,n)},style:{color:"#d946ef"}})})},x=function(e){var t=e.title,n=e.button,i=e.task,s=e.setTasks,c=e.isDeleted,r=i&&i.isDeleted?" delete ":"";if(console.log("Hello ".concat(c)),n){return Object(o.jsxs)("div",{className:"rounded-lg p-4 ring-1 ring-gray-900 ring-opacity-5 title overflow-hidden bg-white",children:[Object(o.jsx)("h1",{children:t}),Object(o.jsx)("div",{children:Object(o.jsx)(d,{onClick:function(){alert("click")}})})]})}var a="Box rounded-lg ring-1 ring-gray-900 ring-opacity-5 bg-white note ".concat(r);return Object(o.jsx)("div",{className:a,children:Object(o.jsxs)("h2",{children:[t,Object(o.jsx)(g,{task:i,setTasks:s,isDeleted:c})]})})};x.defaultProps={title:"Note Taking",button:!1};var f=x,h=function(e){var t=e.title;return Object(o.jsx)("header",{className:O,children:Object(o.jsx)(f,{title:t,button:!0})})};h.defaultProps={title:"Note Taking"};var O="text-center text-6xl font-bold my-6",k=h,v=n(5),m=function(){var e=Object(i.useState)([{id:0,text:"Task 0",isDeleted:!1},{id:1,text:"Task 1",isDeleted:!1},{id:2,text:"Task 2",isDeleted:!1}]),t=Object(v.a)(e,2),n=t[0],s=t[1];return Object(o.jsx)("div",{className:"notes",children:n.map((function(e){return Object(o.jsx)(f,{isDeleted:e.isDeleted,title:e.text,task:e,setTasks:s},e.id)}))})},p=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(k,{}),Object(o.jsx)(m,{})]})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),i(e),s(e),c(e),r(e)}))};r.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(p,{})}),document.getElementById("root")),D()}},[[13,1,2]]]);
//# sourceMappingURL=main.61f5a90f.chunk.js.map