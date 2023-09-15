"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e);function r(e,t,n,r){return new(n||(n=Promise))((function(o,a){function u(e){try{c(r.next(e))}catch(e){a(e)}}function i(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,i)}c((r=r.apply(e,t||[])).next())}))}function o(e,t){var n,r,o,a,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return u.label++,{value:a[1],done:!1};case 5:u.label++,r=a[1],a=[0];continue;case 7:a=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){u=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){u.label=a[1];break}if(6===a[0]&&u.label<o[1]){u.label=o[1],o=a;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(a);break}o[2]&&u.ops.pop(),u.trys.pop();continue}a=t.call(e,u)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}}function a(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function u(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,a=n.call(e),u=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)u.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return u}function i(e,t,n){if(n||2===arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}function c(e,t,n,c){for(var f=[],d=4;d<arguments.length;d++)f[d-4]=arguments[d];return r(this,void 0,void 0,(function(){var r,d,p,h,y,v;return o(this,(function(o){switch(o.label){case 0:o.trys.push([0,12,13,14]),r=a(f),d=r.next(),o.label=1;case 1:if(d.done)return[3,11];switch(p=d.value,typeof p){case"string":return[3,2];case"number":return[3,4];case"function":return[3,6]}return[3,8];case 2:return[4,l(e,p,t,n,c)];case 3:return o.sent(),[3,10];case 4:return[4,s(p)];case 5:return o.sent(),[3,10];case 6:return[4,p.apply(void 0,i([e,t,n,c],u(f),!1))];case 7:return o.sent(),[3,10];case 8:return[4,p];case 9:o.sent(),o.label=10;case 10:return d=r.next(),[3,1];case 11:return[3,14];case 12:return h=o.sent(),y={error:h},[3,14];case 13:try{d&&!d.done&&(v=r.return)&&v.call(r)}finally{if(y)throw y.error}return[7];case 14:return[2]}}))}))}function l(e,t,n,a,c){return r(this,void 0,void 0,(function(){var r;return o(this,(function(o){switch(o.label){case 0:return r=function(e,t){var n=u(t).slice(0);return i(i([],u(e),!1),[NaN],!1).findIndex((function(e,t){return n[t]!==e}))}(e.textContent,t),[4,f(e,i(i([],u(p(e.textContent,r)),!1),u(d(t,r)),!1),n,a,c)];case 1:return o.sent(),[2]}}))}))}function s(e){return r(this,void 0,void 0,(function(){return o(this,(function(t){switch(t.label){case 0:return[4,new Promise((function(t){return setTimeout(t,e)}))];case 1:return t.sent(),[2]}}))}))}function f(e,t,n,i,c){return r(this,void 0,void 0,(function(){var r,l,f,d,p,h,y,v,b,m,w,x,g;return o(this,(function(S){switch(S.label){case 0:if(r=t,c){for(l=0,f=1;f<t.length;f++)if(d=u([t[f-1],t[f]],2),p=d[0],(h=d[1]).length>p.length||""===h){l=f;break}r=t.slice(l,t.length)}S.label=1;case 1:S.trys.push([1,6,7,8]),y=a(function(e){var t,n,r,u,i,c,l;return o(this,(function(s){switch(s.label){case 0:t=function(e){return o(this,(function(t){switch(t.label){case 0:return[4,{op:function(t){return requestAnimationFrame((function(){return t.textContent=e}))},opCode:function(t){return""===e||t.textContent.length>e.length?"DELETE":"WRITING"}}];case 1:return t.sent(),[2]}}))},s.label=1;case 1:s.trys.push([1,6,7,8]),n=a(e),r=n.next(),s.label=2;case 2:return r.done?[3,5]:(u=r.value,[5,t(u)]);case 3:s.sent(),s.label=4;case 4:return r=n.next(),[3,2];case 5:return[3,8];case 6:return i=s.sent(),c={error:i},[3,8];case 7:try{r&&!r.done&&(l=n.return)&&l.call(n)}finally{if(c)throw c.error}return[7];case 8:return[2]}}))}(r)),v=y.next(),S.label=2;case 2:return v.done?[3,5]:(b=v.value,m="WRITING"===b.opCode(e)?n+n*(Math.random()-.5):i+i*(Math.random()-.5),b.op(e),[4,s(m)]);case 3:S.sent(),S.label=4;case 4:return v=y.next(),[3,2];case 5:return[3,8];case 6:return w=S.sent(),x={error:w},[3,8];case 7:try{v&&!v.done&&(g=y.return)&&g.call(y)}finally{if(x)throw x.error}return[7];case 8:return[2]}}))}))}function d(e,t,n){var r=u(e).slice(0);return void 0===t&&(t=0),void 0===n&&(n=r.length),o(this,(function(e){switch(e.label){case 0:return t<n?[4,r.slice(0,++t).join("")]:[3,2];case 1:return e.sent(),[3,0];case 2:return[2]}}))}function p(e,t,n){var r=u(e).slice(0);return void 0===t&&(t=0),void 0===n&&(n=r.length),o(this,(function(e){switch(e.label){case 0:return n>t?[4,r.slice(0,--n).join("")]:[3,2];case 1:return e.sent(),[3,0];case 2:return[2]}}))}var h="index-module_type__E-SaG";!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}(".index-module_type__E-SaG::after {\n  content: '|';\n  animation: index-module_cursor__PQg0P 1.1s infinite step-start;\n}\n\n@keyframes index-module_cursor__PQg0P {\n  50% {\n    opacity: 0;\n  }\n}\n");var y=e.forwardRef((function(t,r){var o=t.sequence,a=t.repeat,l=t.className,s=t.speed,f=void 0===s?40:s,d=t.deletionSpeed,p=t.omitDeletionAnimation,y=void 0!==p&&p,v=t.preRenderFirstString,b=void 0!==v&&v,m=t.wrapper,w=void 0===m?"span":m,x=t.cursor,g=void 0===x||x,S=t.style,E=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(t,["sequence","repeat","className","speed","deletionSpeed","omitDeletionAnimation","preRenderFirstString","wrapper","cursor","style"]),_=E["aria-label"],O=E["aria-hidden"];d||(d=f);var j=new Array(2).fill(40);[f,d].forEach((function(e,t){switch(typeof e){case"number":j[t]=Math.abs(e-100);break;case"object":var n=e,r=n.type,o=n.value;if("number"!=typeof o)break;if("keyStrokeDelayInMs"===r)j[t]=o}}));var k,C,P,R,T,A,N,I=j[0],G=j[1],M=function(t,n){void 0===n&&(n=null);var r=e.useRef(n);return e.useEffect((function(){t&&("function"==typeof t?t(r.current):t.current=r.current)}),[t]),r}(r),q=h;k=l?"".concat(g?q+" ":"").concat(l):g?q:"",C=function(){var e,t=o;return a===1/0?e=c:"number"==typeof a&&(t=Array(1+a).fill(o).flat()),c.apply(void 0,i(i([M.current,I,G,y],u(t),!1),[e],!1)),function(){M.current}},P=e.useRef(C),R=e.useRef(),T=e.useRef(!1),A=e.useRef(!1),N=u(e.useState(0),2)[1],T.current&&(A.current=!0),e.useEffect((function(){return T.current||(R.current=P.current(),T.current=!0),N((function(e){return e+1})),function(){A.current&&R.current&&R.current()}}),[]);var D=w,F=b?o.find((function(e){return"string"==typeof e}))||"":null;return n.default.createElement(D,{"aria-hidden":O,"aria-label":_,style:S,className:k,children:_?n.default.createElement("span",{"aria-hidden":"true",ref:M,children:F}):F,ref:_?void 0:M})})),v=e.memo(y,(function(e,t){return!0}));exports.TypeAnimation=v;
