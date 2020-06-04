(this["webpackJsonpsafety-frontend"]=this["webpackJsonpsafety-frontend"]||[]).push([[0],{213:function(e,t,n){e.exports=n(444)},218:function(e,t,n){},219:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},220:function(e,t,n){},444:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(65),c=n.n(l),u=(n(218),n(219),n(220),n(24)),o=n(446),i=n(447),m=n(448),s=n(463),E=n(449),d=n(450),f=n(451);var p=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),n=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement(o.a,{color:"light",light:!0,expand:"md"},r.a.createElement(i.a,null,"Navigate Here"),r.a.createElement(m.a,{onClick:function(){return l(!n)}}),r.a.createElement(s.a,{isOpen:n,navbar:!0},r.a.createElement(E.a,{className:"mr-auto",navbar:!0},r.a.createElement(d.a,null,r.a.createElement(f.a,{href:"#/industry"},r.a.createElement("span",null," Industry "))),r.a.createElement(d.a,null,r.a.createElement(f.a,{className:"nav-link",href:"#/equipment"},r.a.createElement("span",null," Equipment ")))))))},h=n(57),b=n.n(h),y=n(452);var v=function(){return r.a.createElement("div",{className:"Header"},r.a.createElement(y.a,null,r.a.createElement("h1",null," Process safety App "),r.a.createElement("br",null),r.a.createElement("div",{className:"form"}),r.a.createElement("br",null),r.a.createElement("span",{className:"fa fa-home fa-lg"},"  Information about startup, shutdowm and maintenance availaible at the touch of your screen for free!"),r.a.createElement(p,null)))},g=function(){return{type:"FETCH_INDUSTRY_REQUEST"}},S=function(e){return{type:"FETCH_INDUSTRY_SUCCESS",payload:e}},O=function(e){return{type:"FETCH_INDUSTRY_FAILURE",payload:e}},j=function(){return{type:"FETCH_EQUIPMENT_REQUEST"}},C=function(e){return{type:"FETCH_EQUIPMENT_SUCCESS",payload:e}},T=function(e){return{type:"FETCH_EQUIPMENT_FAILURE",payload:e}},I=(n(101),n(58)),U=n(460),_=n(453),w=n(454),q=n(455),N=n(456),F=n(457),R=n(458),k=n(459);var H=function(e){var t=Object(a.useState)(!1),n=Object(u.a)(t,2),l=n[0],c=n[1];return r.a.createElement("div",null,r.a.createElement(_.a,null,r.a.createElement(w.a,{xl:"4",lg:"6"}),r.a.createElement(w.a,{xl:"4",lg:"6"},r.a.createElement(q.a,{className:"mb-5"},r.a.createElement(N.a,null,r.a.createElement(F.a,{className:"card-title font-weight-bold font-size-lg"},e.ind.name),r.a.createElement(R.a,null,e.ind.adinfo)),r.a.createElement(k.a,{onClick:function(){c(!l)}},l?r.a.createElement("div",null,"Read Below"):r.a.createElement("div",null,"More ...")),r.a.createElement("table",{className:"table table-hover"},l?r.a.createElement("tbody",null,r.a.createElement("tr",null,e.ind.questioni&&e.ind.questioni.map((function(e){return r.a.createElement("div",null,r.a.createElement("li",{key:e.id},r.a.createElement("td",null,r.a.createElement("b",null,"Question ",e.number," : ",e.question),r.a.createElement("br",null),"Ans : ",e.answer,r.a.createElement("br",null),"Further info / Ref : ",e.urlref)))})),e.ind.questione&&e.ind.questione.map((function(e){return r.a.createElement("div",null,r.a.createElement("li",{key:e.id},r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("b",null,"Question ",e.number," : ",e.question),r.a.createElement("br",null),"Ans : ",e.answer,r.a.createElement("br",null),"Further info / Ref : ",e.urlref))))})))):r.a.createElement("tbody",null,r.a.createElement("tr",null))),r.a.createElement("br",null))),r.a.createElement(w.a,{xl:"4",lg:"6"})))};var x=Object(I.b)((function(e){return{IndustryData:e.industries}}),(function(e){return{fetchIndustry:function(){return e((function(e){e(g()),b.a.get("https://abkumbhar.pythonanywhere.com/industry/").then((function(t){var n=t.data;console.log(t.data),e(S(n))})).catch((function(t){e(O(t.message))}))}))}}}))((function(e){var t=e.IndustryData,n=e.fetchIndustry,l=Object(a.useState)(""),c=Object(u.a)(l,2),o=c[0],i=c[1],m=Object(a.useState)([]),s=Object(u.a)(m,2),E=s[0],d=s[1];return Object(a.useEffect)((function(){n()}),[]),Object(a.useEffect)((function(){d(t.industry.filter((function(e){return e.name.toLowerCase().includes(o.toLowerCase())})))}),[o,t]),t.loading?r.a.createElement("div",null,r.a.createElement(U.a,null)):t.error?r.a.createElement("h2",null,t.error):r.a.createElement("div",null,r.a.createElement("h2",{style:{textAlign:"center"}},"Industry List"),r.a.createElement("div",null,r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("input",{type:"text",placeholder:"Search Industries",onChange:function(e){return i(e.target.value)}})),E.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(H,{ind:e}))}))))})),Q=n(210),A=n(19),D=n(461),L=n(462);var M=function(){var e=Object(a.useState)("helo"),t=Object(u.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)([]),o=Object(u.a)(c,2),i=o[0],m=o[1],s=Object(a.useState)("hi"),E=Object(u.a)(s,2),d=E[0],f=E[1];return Object(a.useEffect)((function(){b.a.get("https://abkumbhar.pythonanywhere.com/list?search=".concat(n)).then((function(e){console.log(e),m(e.data)})).catch((function(e){console.log(e.message)}))}),[n]),r.a.createElement("div",null,r.a.createElement(D.a,null,r.a.createElement(L.a,{type:"search",placeholder:"search here ...",name:"search",onChange:function(e){return f(e.target.value)}}),r.a.createElement(k.a,{onClick:function(e){return l(d)}},"Submit")),r.a.createElement("div",null,i.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(H,{ind:e}))}))))},P=n(53),Y=n(207),B=n(208),W=n.n(B),J=n(209),z=n(66),$={loading:!1,industry:[],error:""},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_INDUSTRY_REQUEST":return Object(z.a)(Object(z.a)({},e),{},{loading:!0});case"FETCH_INDUSTRY_SUCCESS":return{loading:!1,industry:t.payload,error:""};case"FETCH_INDUSTRY_FAILURE":return{loading:!1,industry:[],error:t.payload};default:return e}},K={loading:!1,equipment:[],error:""},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_EQUIPMENT_REQUEST":return Object(z.a)(Object(z.a)({},e),{},{loading:!0});case"FETCH_EQUIPMENT_SUCCESS":return{loading:!1,equipment:t.payload,error:""};case"FETCH_EQUIPMENT_FAILURE":return{loading:!1,equipment:[],error:t.payload};default:return e}},X=Object(P.combineReducers)({industries:G,equipments:V}),Z=Object(P.createStore)(X,Object(Y.composeWithDevTools)(Object(P.applyMiddleware)(W.a,J.a)));var ee=Object(I.b)((function(e){return{EquipmentData:e.equipments}}),(function(e){return{fetchEquipment:function(){return e((function(e){e(j()),b.a.get("https://abkumbhar.pythonanywhere.com/equipment/").then((function(t){var n=t.data;console.log(t.data),e(C(n))})).catch((function(t){e(T(t.message))}))}))}}}))((function(e){var t=e.EquipmentData,n=e.fetchEquipment,l=Object(a.useState)([]),c=Object(u.a)(l,2),o=c[0],i=c[1],m=Object(a.useState)(""),s=Object(u.a)(m,2),E=s[0],d=s[1],f=Object(a.useState)(!1),p=Object(u.a)(f,2);return p[0],p[1],Object(a.useEffect)((function(){n()}),[]),Object(a.useEffect)((function(){i(t.equipment.filter((function(e){return e.name.toLowerCase().includes(E.toLowerCase())})))}),[E,t]),t.loading?r.a.createElement(U.a,null):t.error?r.a.createElement("h2",null,t.error):r.a.createElement("div",null,r.a.createElement("h2",{style:{textAlign:"center"}},"Equipment List"),r.a.createElement("div",null,r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("input",{type:"text",placeholder:"Search Equipments",onChange:function(e){return d(e.target.value)}})),o.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(H,{ind:e}))}))))}));var te=function(){return r.a.createElement(a.Fragment,null,r.a.createElement(v,null),r.a.createElement("div",null,r.a.createElement(Q.a,null,r.a.createElement(A.c,null,r.a.createElement(A.a,{path:"/",component:M}),r.a.createElement(A.a,{path:"/industry",component:x}),r.a.createElement(A.a,{path:"/equipment",component:ee})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(250),n(259);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I.a,{store:Z},r.a.createElement(te,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[213,1,2]]]);
//# sourceMappingURL=main.27b6e8c7.chunk.js.map