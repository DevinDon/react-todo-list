(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{13:function(e,t,n){e.exports=n(20)},20:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(9),r=n.n(c),i=n(12),l=n(3),m=n(6),u=n.n(m),s=n(22),d=n(23),f=n(24),p=n(4),v=n.n(p);function _(e){var t=e.title,n=e.completed,a=e.time,c=e.triggerTodo,r=e.removeTodo;return o.a.createElement("div",{className:v.a.item},o.a.createElement("span",{className:v.a.left},o.a.createElement("div",{className:v.a.icon,onClick:function(){return c(a)}},n?o.a.createElement(s.a,null):o.a.createElement(d.a,null)),o.a.createElement("span",{style:{textDecoration:n?"line-through":"none"}},t)),o.a.createElement(f.a,{className:v.a.delete,onClick:function(){return r(a)}}))}function g(e){var t=e.addTodo,n=e.todos,c=e.setFilteredTodos,r=Object(a.useState)(""),i=Object(l.a)(r,2),m=i[0],u=i[1];return o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),m&&t(m),u("")}},o.a.createElement("input",{className:"input",placeholder:"\u521b\u5efa\u5f85\u529e\u4e8b\u9879...",value:m,onChange:function(e){var t=e.target.value;u(t),function(e){console.log("filter",e);var t=n.filter((function(t){return t.title.includes(e)}));c(t)}(t)}}))}var E=[{title:"\u5c1d\u8bd5\u65b0\u589e\u4e00\u4ef6\u5f85\u529e\u4e8b\u9879",completed:!1,time:Date.now()},{title:"\u5df2\u5b8c\u6210\u7684\u4e8b\u9879",completed:!0,time:Date.now()+1}];function b(){var e=Object(a.useState)(function(){var e=localStorage.getItem("todos");return e&&JSON.parse(e)}()||E),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(n),m=Object(l.a)(r,2),s=m[0],d=m[1],f=function(e){return c(n.map((function(t){return t.time===e&&(t.completed=!t.completed),t})))},p=function(e){return c(n.filter((function(t){return t.time!==e})))};return Object(a.useEffect)((function(){!function(e){localStorage.setItem("todos",JSON.stringify(e))}(n),d(n)}),[n]),o.a.createElement("div",{className:u.a.page},o.a.createElement("div",{className:u.a.container},o.a.createElement(g,{addTodo:function(e){return c([{title:e,completed:!1,time:Date.now()}].concat(Object(i.a)(n)))},todos:n,setFilteredTodos:d}),o.a.createElement("div",{className:u.a.list},s.map((function(e){return o.a.createElement(_,Object.assign({key:e.time,triggerTodo:f,removeTodo:p},e))})))))}r.a.render(o.a.createElement(b,null),document.getElementById("root"))},4:function(e,t,n){e.exports={item:"Item_item__3BUDq",left:"Item_left__gn5fb",icon:"Item_icon__1PmvH",delete:"Item_delete__23WaT"}},6:function(e,t,n){e.exports={page:"App_page__3vm_x",container:"App_container__3pvvZ"}}},[[13,1,2]]]);
//# sourceMappingURL=main.1c470165.chunk.js.map