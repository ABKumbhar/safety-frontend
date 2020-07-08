(this["webpackJsonpsafety-frontend"]=this["webpackJsonpsafety-frontend"]||[]).push([[0],{226:function(e,t,n){e.exports=n.p+"static/media/industry.c5fc0e3e.jpeg"},239:function(e,t,n){e.exports=n(490)},244:function(e,t,n){},245:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},246:function(e,t,n){},490:function(e,t,n){"use strict";n.r(t);var a=n(2),l=n.n(a),r=n(39),c=n.n(r),o=(n(244),n(245),n(246),n(23)),i=n(225),u=n(496),m=n(497),s=n(498),E=n(514),d=n(499),f=n(500),h=n(501);var p=function(){var e=Object(a.useState)(!0),t=Object(o.a)(e,2),n=t[0],r=t[1];return l.a.createElement("div",null,l.a.createElement(u.a,{color:"light",light:!0,expand:"md"},l.a.createElement(m.a,null," Navigate here ",l.a.createElement(i.a,null)),l.a.createElement(s.a,{onClick:function(){return r(n)}}),l.a.createElement(E.a,{isOpen:n,navbar:!0},l.a.createElement(d.a,{className:"mr-auto",navbar:!0},l.a.createElement(f.a,null,l.a.createElement(h.a,{className:"nav-link",href:"#/"},l.a.createElement("span",null," Home "))),l.a.createElement(f.a,null,l.a.createElement(h.a,{href:"#/industry"},l.a.createElement("span",null," Industry "))),l.a.createElement(f.a,null,l.a.createElement(h.a,{className:"nav-link",href:"#/equipment"},l.a.createElement("span",null," Equipment ")))))))},b=n(48),y=n.n(b),g=n(502),v=n(515),j=n(226),O=n.n(j);var S=function(){return l.a.createElement("div",{className:"Header",style:{textAlign:"center"}},l.a.createElement(g.a,{style:{backgroundColor:"Orange"}},l.a.createElement("h1",{style:{fontFamily:"Impact"}}," Process safety App"),l.a.createElement(v.a,{src:O.a,roundedCircle:!0,fluid:!0,style:{textAlign:"center"}}),l.a.createElement("br",null),l.a.createElement("div",{className:"form"}),l.a.createElement("br",null),l.a.createElement("span",{className:"fa fa-home fa-lg",style:{color:"white"}}," ",l.a.createElement("h2",{style:{fontFamily:"Comic Sans MS"}}," Information about startup, shutdown and maintenance availaible at the touch of your screen for free! ")),l.a.createElement(p,null)))},w=function(){return{type:"FETCH_INDUSTRY_REQUEST"}},C=function(e){return{type:"FETCH_INDUSTRY_SUCCESS",payload:e}},k=function(e){return{type:"FETCH_INDUSTRY_FAILURE",payload:e}},N=function(){return{type:"FETCH_EQUIPMENT_REQUEST"}},T=function(e){return{type:"FETCH_EQUIPMENT_SUCCESS",payload:e}},I=function(e){return{type:"FETCH_EQUIPMENT_FAILURE",payload:e}},U=(n(110),n(65)),q=n(511),_=n(503),x=n(504),F=n(505),R=n(506),A=n(507),H=n(508),D=n(509),L=n(510),Q=n(60);var M=function(e){var t=Object(a.useState)(!1),n=Object(o.a)(t,2),r=n[0],c=n[1];return l.a.createElement("div",null,l.a.createElement(_.a,null,l.a.createElement(x.a,{xl:"4",lg:"6"}),l.a.createElement(x.a,{xl:"4",lg:"6"},l.a.createElement(F.a,{className:"mb-5",outline:!0,color:"info"},l.a.createElement(R.a,null,l.a.createElement(A.a,{className:"card-title font-weight-bold font-size-lg"},"Industry/Equipment Name : ",e.ind.name),l.a.createElement(H.a,null,l.a.createElement("br",null),"Data taken from (i.e. reference) :  ",e.ind.url?l.a.createElement("a",{href:e.ind.url,target:" "},"  ",l.a.createElement("b",null," ",e.ind.adinfo," (Click to visit reference) ")," "):l.a.createElement("div",null))),l.a.createElement(D.a,null,"For more information, click on following link to know more information",l.a.createElement(L.a,{color:"success",onClick:function(){c(!r)}},l.a.createElement(Q.b,{to:{pathname:"/detail",indi:e.ind}},l.a.createElement("div",{style:{color:"white"}},"Click to know more ...")))))),l.a.createElement(x.a,{xl:"4",lg:"6"})))};var P=Object(U.b)((function(e){return{IndustryData:e.industries}}),(function(e){return{fetchIndustry:function(){return e((function(e){e(w()),y.a.get("https://abkumbhar.pythonanywhere.com/industry/").then((function(t){var n=t.data;console.log(t.data),e(C(n))})).catch((function(t){e(k(t.message))}))}))}}}))((function(e){var t=e.IndustryData,n=e.fetchIndustry,r=Object(a.useState)(""),c=Object(o.a)(r,2),i=c[0],u=c[1],m=Object(a.useState)([]),s=Object(o.a)(m,2),E=s[0],d=s[1];return Object(a.useEffect)((function(){n()}),[]),Object(a.useEffect)((function(){d(t.industry.filter((function(e){return e.name.toLowerCase().includes(i.toLowerCase())})))}),[i,t]),t.loading?l.a.createElement("div",null,l.a.createElement(q.a,null)):t.error?l.a.createElement("h2",null,t.error):l.a.createElement("div",null,l.a.createElement("h2",{style:{textAlign:"center"}},"Industry List"),l.a.createElement("div",null,l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("input",{type:"text",placeholder:"Search Industries",onChange:function(e){return u(e.target.value)}})),E.map((function(e){return l.a.createElement("li",{key:e.id},l.a.createElement(M,{ind:e}))}))))})),Y=n(22),W=n(512),B=n(513),J=n(231);var z=function(){var e=Object(a.useState)("helo"),t=Object(o.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)([]),i=Object(o.a)(c,2),u=i[0],m=i[1],s=Object(a.useState)(""),E=Object(o.a)(s,2),d=E[0],f=E[1],h=Object(a.useState)([]),p=Object(o.a)(h,2),b=p[0],v=p[1],j=Object(a.useState)([]),O=Object(o.a)(j,2),S=O[0],w=O[1],C=Object(a.useState)([]),k=Object(o.a)(C,2),N=k[0],T=k[1];return Object(a.useEffect)((function(){y.a.get("https://abkumbhar.pythonanywhere.com/list?search=".concat(n)).then((function(e){console.log(e),m(e.data)})).catch((function(e){console.log(e.message)}))}),[n]),Object(a.useEffect)((function(){y.a.get("https://abkumbhar.pythonanywhere.com/industry/trending").then((function(e){console.log(e),v(e.data)})).catch((function(e){console.log(e.message)}))}),[]),Object(a.useEffect)((function(){y.a.get("https://abkumbhar.pythonanywhere.com/equipment/trending").then((function(e){console.log(e),T(e.data)})).catch((function(e){console.log(e.message)}))}),[]),Object(a.useEffect)((function(){y.a.get("https://abkumbhar.pythonanywhere.com/industry").then((function(e){console.log(e),w(e.data)})).catch((function(e){console.log(e.message)}))}),[]),l.a.createElement("div",null,l.a.createElement(W.a,{inline:!0},l.a.createElement(B.a,{list:"searching",placeholder:"search here ...",onChange:function(e){return f(e.target.value)}}),l.a.createElement("datalist",{id:"searching"},n&&S.map((function(e){return l.a.createElement("option",{value:e.name})}))),l.a.createElement(L.a,{color:"danger",onClick:function(e){return r(d)}},"Submit ",l.a.createElement(J.a,null))),l.a.createElement("div",null,u.length?u.map((function(e){return l.a.createElement("li",{key:e.id},"Searched results ... ",l.a.createElement(M,{ind:e}))})):l.a.createElement("div",null,"Search box is empty or result not found")),l.a.createElement(g.a,null,l.a.createElement("h1",null,"Trending Today ...."),l.a.createElement("br",null),l.a.createElement("h4",null,"Updates on new information on industry safety"),b.length?b.map((function(e){return l.a.createElement("li",{key:e.id},l.a.createElement(M,{ind:e}))})):l.a.createElement("div",{style:{textAlign:"center"}},"Nothing to new show today"),l.a.createElement("br",null),l.a.createElement("h4",null," Updates on new information on equipment safety "),N.length?N.map((function(e){return l.a.createElement("li",{key:e.id},l.a.createElement(M,{ind:e}))})):l.a.createElement("div",{style:{textAlign:"center"}},"Nothing to new show today")))},K=n(59),$=n(232),G=n(233),V=n.n(G),X=n(234),Z=n(74),ee={loading:!1,industry:[],error:""},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_INDUSTRY_REQUEST":return Object(Z.a)(Object(Z.a)({},e),{},{loading:!0});case"FETCH_INDUSTRY_SUCCESS":return{loading:!1,industry:t.payload,error:""};case"FETCH_INDUSTRY_FAILURE":return{loading:!1,industry:[],error:t.payload};default:return e}},ne={loading:!1,equipment:[],error:""},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_EQUIPMENT_REQUEST":return Object(Z.a)(Object(Z.a)({},e),{},{loading:!0});case"FETCH_EQUIPMENT_SUCCESS":return{loading:!1,equipment:t.payload,error:""};case"FETCH_EQUIPMENT_FAILURE":return{loading:!1,equipment:[],error:t.payload};default:return e}},le=Object(K.combineReducers)({industries:te,equipments:ae}),re=Object(K.createStore)(le,Object($.composeWithDevTools)(Object(K.applyMiddleware)(V.a,X.a)));var ce=function(e){return l.a.createElement("div",null,l.a.createElement(F.a,null,l.a.createElement(R.a,null,l.a.createElement("h3",null,e.location.indi.name),l.a.createElement("br",null),l.a.createElement("h4",null,"Reference URL (click next): ",l.a.createElement("a",{href:e.location.indi.url,target:" "}," ",e.location.indi.adinfo," "))),l.a.createElement(H.a,null,l.a.createElement("table",{className:"table table-hover"},l.a.createElement("tbody",null,l.a.createElement("tr",null,e.location.indi.questioni&&e.location.indi.questioni.map((function(e){return l.a.createElement("div",null,l.a.createElement("li",{key:e.id},l.a.createElement("td",null,l.a.createElement("b",null,"Question ",e.number," : ",e.question),l.a.createElement("br",null),"Ans : ",e.answer,l.a.createElement("br",null),"Further info / Ref : ",e.urlref)))})),e.location.indi.questione&&e.location.indi.questione.map((function(e){return l.a.createElement("div",null,l.a.createElement("li",{key:e.id},l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("b",null,"Question ",e.number," : ",e.question),l.a.createElement("br",null),"Ans : ",e.answer,l.a.createElement("br",null),"Further info / Ref : ",e.urlref))))}))))))))},oe=n(67);var ie=function(){return l.a.createElement("div",null,l.a.createElement(oe.e,{className:"font-small pt-4 mt-4",style:{backgroundColor:"black",color:"white"}},l.a.createElement(oe.d,{fluid:!0,className:"text-center text-md-left"},l.a.createElement(oe.j,null,l.a.createElement(oe.c,{md:"6"},l.a.createElement("h5",{className:"title"},"Contact Us"),l.a.createElement("p",null,"This website is made only as a personal project. We don't recommend to use this information in actual project.")),l.a.createElement(oe.c,{md:"6"},l.a.createElement("h5",{className:"title"},"Links"),l.a.createElement("b",null,l.a.createElement("ul",null,l.a.createElement("li",{className:"list-unstyled"},l.a.createElement("a",{href:"#/"},"Home")),l.a.createElement("li",{className:"list-unstyled"},l.a.createElement("a",{href:"#/industry"},"Industry")),l.a.createElement("li",{className:"list-unstyled"},l.a.createElement("a",{href:"#/equipment"},"Equipment")),l.a.createElement("li",{className:"list-unstyled"},l.a.createElement("a",{href:"#!"},"Link 4"))))))),l.a.createElement("div",{className:"footer-copyright text-center py-3"},l.a.createElement(oe.d,{fluid:!0},"\xa9 ",(new Date).getFullYear()," Copyright: ",l.a.createElement("a",{href:"https://www.mdbootstrap.com"}," ABKumbhar Enterprise ")))))};var ue=Object(U.b)((function(e){return{EquipmentData:e.equipments}}),(function(e){return{fetchEquipment:function(){return e((function(e){e(N()),y.a.get("https://abkumbhar.pythonanywhere.com/equipment/").then((function(t){var n=t.data;console.log(t.data),e(T(n))})).catch((function(t){e(I(t.message))}))}))}}}))((function(e){var t=e.EquipmentData,n=e.fetchEquipment,r=Object(a.useState)([]),c=Object(o.a)(r,2),i=c[0],u=c[1],m=Object(a.useState)(""),s=Object(o.a)(m,2),E=s[0],d=s[1],f=Object(a.useState)(!1),h=Object(o.a)(f,2);return h[0],h[1],Object(a.useEffect)((function(){n()}),[]),Object(a.useEffect)((function(){u(t.equipment.filter((function(e){return e.name.toLowerCase().includes(E.toLowerCase())})))}),[E,t]),t.loading?l.a.createElement(q.a,null):t.error?l.a.createElement("h2",null,t.error):l.a.createElement("div",null,l.a.createElement("h2",{style:{textAlign:"center"}},"Equipment List"),l.a.createElement("div",null,l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("input",{type:"text",placeholder:"Search Equipments",onChange:function(e){return d(e.target.value)}})),i.map((function(e){return l.a.createElement("li",{key:e.id},l.a.createElement(M,{ind:e}))}))))}));var me=function(){return l.a.createElement(a.Fragment,null,l.a.createElement(S,null),l.a.createElement("div",null,l.a.createElement(Q.a,null,l.a.createElement(Y.c,null,l.a.createElement(Y.a,{exact:!0,path:"/",component:z}),l.a.createElement(Y.a,{path:"/industry",component:P}),l.a.createElement(Y.a,{path:"/equipment",component:ue}),l.a.createElement(Y.a,{path:"/detail",component:ce})))),l.a.createElement(ie,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(296),n(305);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(U.a,{store:re},l.a.createElement(me,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[239,1,2]]]);
//# sourceMappingURL=main.e9552a97.chunk.js.map