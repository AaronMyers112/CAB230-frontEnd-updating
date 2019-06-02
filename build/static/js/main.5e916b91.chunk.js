(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(e,t,n){e.exports=n(12)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(2),r=n.n(o),l=(n(10),n(1)),u=null;function i(e,t){var n=Object(a.useState)(!0),c=Object(l.a)(n,2),o=c[0],r=c[1],i=Object(a.useState)([]),m=Object(l.a)(i,2),s=m[0],h=m[1];return Object(a.useEffect)(function(){(function(e,t){return fetch("https://cab230.hackhouse.sh/search?offence=".concat(e).concat(t),{method:"GET",headers:{Authorization:"Bearer ".concat(u)}}).then(function(e){return e.json()}).then(function(e){return e.result}).then(function(e){return e.map(function(e){return{LGA:e.LGA,total:e.total,lat:e.lat,lng:e.lng}})})})(e,t).then(function(e){h(e)}).catch(function(e){r(!1)})},[e,t]),{loading:o,data:s}}function m(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],o=t[1],r=Object(a.useState)(""),i=Object(l.a)(r,2),m=i[0],s=i[1];return c.a.createElement("div",{className:"App-header"},c.a.createElement("div",{className:"App-header_logo"},c.a.createElement("h1",null,"Crime Statistics")),c.a.createElement("div",{className:"App-header_form"},c.a.createElement("form",{onSubmit:function(e){e.preventDefault()}},c.a.createElement("input",{placeholder:"Email",type:"email",name:"email",id:"email",value:n,onDoubleClick:function(){return o("")},onChange:function(e){o(e.target.value)},autoComplete:"email"}),c.a.createElement("input",{placeholder:"Password",type:"password",name:"password",id:"password",value:m,onDoubleClick:function(){return s("")},onChange:function(e){s(e.target.value)},autoComplete:"current-password"}),c.a.createElement("button",{type:"submit",onClick:function(){!function(e,t){fetch("https://cab230.hackhouse.sh/register",{method:"POST",body:"email=".concat(e,"&password=").concat(t),headers:{"Content-type":"application/x-www-form-urlencoded"}}).then(function(e){return e.json()}).then(function(e){alert(e.message)}).catch(function(e){console.log("Problem with fetch ",e.message)})}(n,m),s(""),o("")}},"Register"),c.a.createElement("button",{type:"submit",onClick:function(){!function(e,t){var n=!1;fetch("https://cab230.hackhouse.sh/login",{method:"POST",body:"email=".concat(e,"&password=").concat(t),headers:{"Content-type":"application/x-www-form-urlencoded"}}).then(function(e){return 200===e.status&&(alert("Logged In"),n=!0),e.json()}).then(function(e){n||alert(e.message),u=e.token}).catch(function(e){console.log("Problem with fetch ",e.message)})}(n,m),s(""),o("")}},"Login"))))}n(11);function s(e){return c.a.createElement("tr",null,c.a.createElement("td",null,e.LGA),c.a.createElement("td",null,e.total))}function h(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),o=n[0],r=n[1];return c.a.createElement("div",{className:"search"},c.a.createElement("input",{placeholder:"Search","aria-labelledby":"search-button",name:"search",id:"search",value:o,onDoubleClick:function(){return r("")},onChange:function(e){return r(e.target.value)}}),c.a.createElement("button",{id:"search-button",type:"button",onClick:function(){return e.onSubmit(o)}},"Search"))}function d(e){for(var t=Object(a.useState)(""),n=Object(l.a)(t,2),o=n[0],r=n[1],u=Object(a.useState)(""),i=Object(l.a)(u,2),m=i[0],s=i[1],h=Object(a.useState)(""),d=Object(l.a)(h,2),f=d[0],p=d[1],b=Object(a.useState)(""),E=Object(l.a)(b,2),v=E[0],g=E[1],j=Object(a.useState)(""),w=Object(l.a)(j,2),O=w[0],C=w[1],S="&area=".concat(o,"&age=").concat(m,"&gender=").concat(f,"&year=").concat(v,"&month=").concat(O),k=[],y=[],A=0;A<30;A++)k.push(A);for(var G=2001;G<=2019;G++)y.push(G);return c.a.createElement("div",{className:"filter"},c.a.createElement("form",null,c.a.createElement("select",{onChange:function(e){return r(e.target.value)}},c.a.createElement("option",{value:""},"Area"),e.data.map(function(e,t){return c.a.createElement("option",{key:t,value:e.LGA},e.LGA)})),c.a.createElement("select",{onChange:function(e){return s(e.target.value)}},c.a.createElement("option",{value:""},"Age"),c.a.createElement("option",{value:"Juvenile"},"Juvenile"),c.a.createElement("option",{value:"Adult"},"Adult"),"})}"),c.a.createElement("select",{onChange:function(e){return p(e.target.value)}},c.a.createElement("option",{value:""},"Gender"),c.a.createElement("option",{value:"Male"},"Male"),c.a.createElement("option",{value:"Female"},"Female")),c.a.createElement("select",{onChange:function(e){return g(e.target.value)}},c.a.createElement("option",{value:""},"Year"),y.map(function(e,t){return c.a.createElement("option",{key:t,value:e},e)})),c.a.createElement("select",{onChange:function(e){return C(e.target.value)}},c.a.createElement("option",{value:""},"Month"),[1,2,3,4,5,6,7,8,9,10,11,12].map(function(e,t){return c.a.createElement("option",{key:t,value:e},e)})),c.a.createElement("button",{id:"search-button",type:"button",onClick:function(){return e.onSubmit(S)}},"Filter")))}function f(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],o=t[1],r=Object(a.useState)(""),u=Object(l.a)(r,2),f=u[0],p=u[1],b=i(n,f),E=b.loading,v=b.data;return E?c.a.createElement("div",null,c.a.createElement("h1",null,"Please wait one moment, loading...")):c.a.createElement("div",{className:"App"},c.a.createElement(m,null),c.a.createElement(h,{onSubmit:o}),c.a.createElement(d,{data:v,onSubmit:p}),c.a.createElement("div",{className:"body"},c.a.createElement("table",{className:"tableData"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{onClick:function(){return console.log(v)}},"Area"),c.a.createElement("th",{onClick:function(){return v.sort()}},"Total"))),c.a.createElement("tbody",null,v.map(function(e,t){return c.a.createElement(s,{key:t,total:e.total,LGA:e.LGA})})))),c.a.createElement("div",{id:"app"}))}var p=document.getElementById("root");r.a.render(c.a.createElement(f,null),p);var b=f;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[4,1,2]]]);
//# sourceMappingURL=main.5e916b91.chunk.js.map