/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 29);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! jQuery v2.2.4 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="2.2.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isPlainObject:function(a){var b;if("object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype||{},"isPrototypeOf"))return!1;for(b in a);return void 0===b||k.call(a,b)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=d.createElement("script"),b.text=a,d.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:h.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(d=e.call(arguments,2),f=function(){return a.apply(b||this,d.concat(e.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return h.call(b,a)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&f.parentNode&&(this.length=1,this[0]=f),this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?void 0!==c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?h.call(n(a),this[0]):h.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||n.uniqueSort(e),D.test(a)&&e.reverse()),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.removeEventListener("DOMContentLoaded",J),a.removeEventListener("load",J),n.ready()}n.ready.promise=function(b){return I||(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(n.ready):(d.addEventListener("DOMContentLoaded",J),a.addEventListener("load",J))),I.promise(b)},n.ready.promise();var K=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)K(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},L=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function M(){this.expando=n.expando+M.uid++}M.uid=1,M.prototype={register:function(a,b){var c=b||{};return a.nodeType?a[this.expando]=c:Object.defineProperty(a,this.expando,{value:c,writable:!0,configurable:!0}),a[this.expando]},cache:function(a){if(!L(a))return{};var b=a[this.expando];return b||(b={},L(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[b]=c;else for(d in b)e[d]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=a[this.expando];if(void 0!==f){if(void 0===b)this.register(a);else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in f?d=[b,e]:(d=e,d=d in f?[d]:d.match(G)||[])),c=d.length;while(c--)delete f[d[c]]}(void 0===b||n.isEmptyObject(f))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!n.isEmptyObject(b)}};var N=new M,O=new M,P=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Q=/[A-Z]/g;function R(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Q,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:P.test(c)?n.parseJSON(c):c;
}catch(e){}O.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return O.hasData(a)||N.hasData(a)},data:function(a,b,c){return O.access(a,b,c)},removeData:function(a,b){O.remove(a,b)},_data:function(a,b,c){return N.access(a,b,c)},_removeData:function(a,b){N.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=O.get(f),1===f.nodeType&&!N.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),R(f,d,e[d])));N.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){O.set(this,a)}):K(this,function(b){var c,d;if(f&&void 0===b){if(c=O.get(f,a)||O.get(f,a.replace(Q,"-$&").toLowerCase()),void 0!==c)return c;if(d=n.camelCase(a),c=O.get(f,d),void 0!==c)return c;if(c=R(f,d,void 0),void 0!==c)return c}else d=n.camelCase(a),this.each(function(){var c=O.get(this,d);O.set(this,d,b),a.indexOf("-")>-1&&void 0!==c&&O.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){O.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=N.get(a,b),c&&(!d||n.isArray(c)?d=N.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return N.get(a,c)||N.access(a,c,{empty:n.Callbacks("once memory").add(function(){N.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=N.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function W(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&T.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var X=/^(?:checkbox|radio)$/i,Y=/<([\w:-]+)/,Z=/^$|\/(?:java|ecma)script/i,$={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};$.optgroup=$.option,$.tbody=$.tfoot=$.colgroup=$.caption=$.thead,$.th=$.td;function _(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function aa(a,b){for(var c=0,d=a.length;d>c;c++)N.set(a[c],"globalEval",!b||N.get(b[c],"globalEval"))}var ba=/<|&#?\w+;/;function ca(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],o=0,p=a.length;p>o;o++)if(f=a[o],f||0===f)if("object"===n.type(f))n.merge(m,f.nodeType?[f]:f);else if(ba.test(f)){g=g||l.appendChild(b.createElement("div")),h=(Y.exec(f)||["",""])[1].toLowerCase(),i=$[h]||$._default,g.innerHTML=i[1]+n.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;n.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",o=0;while(f=m[o++])if(d&&n.inArray(f,d)>-1)e&&e.push(f);else if(j=n.contains(f.ownerDocument,f),g=_(l.appendChild(f),"script"),j&&aa(g),c){k=0;while(f=g[k++])Z.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var da=/^key/,ea=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,fa=/^([^.]*)(?:\.(.+)|)/;function ga(){return!0}function ha(){return!1}function ia(){try{return d.activeElement}catch(a){}}function ja(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ja(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ha;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return"undefined"!=typeof n&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(G)||[""],j=b.length;while(j--)h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.hasData(a)&&N.get(a);if(r&&(i=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&N.remove(a,"handle events")}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(N.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||d,e=c.documentElement,f=c.body,a.pageX=b.clientX+(e&&e.scrollLeft||f&&f.scrollLeft||0)-(e&&e.clientLeft||f&&f.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||f&&f.scrollTop||0)-(e&&e.clientTop||f&&f.clientTop||0)),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ea.test(f)?this.mouseHooks:da.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=d),3===a.target.nodeType&&(a.target=a.target.parentNode),h.filter?h.filter(a,g):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==ia()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===ia()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ga:ha):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:ha,isPropagationStopped:ha,isImmediatePropagationStopped:ha,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ga,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ga,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ga,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),n.fn.extend({on:function(a,b,c,d){return ja(this,a,b,c,d)},one:function(a,b,c,d){return ja(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=ha),this.each(function(){n.event.remove(this,a,c,b)})}});var ka=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,la=/<script|<style|<link/i,ma=/checked\s*(?:[^=]|=\s*.checked.)/i,na=/^true\/(.*)/,oa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function pa(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function qa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function ra(a){var b=na.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function sa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(N.hasData(a)&&(f=N.access(a),g=N.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}O.hasData(a)&&(h=O.access(a),i=n.extend({},h),O.set(b,i))}}function ta(a,b){var c=b.nodeName.toLowerCase();"input"===c&&X.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function ua(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&ma.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),ua(f,b,c,d)});if(o&&(e=ca(b,a[0].ownerDocument,!1,a,d),g=e.firstChild,1===e.childNodes.length&&(e=g),g||d)){for(h=n.map(_(e,"script"),qa),i=h.length;o>m;m++)j=e,m!==p&&(j=n.clone(j,!0,!0),i&&n.merge(h,_(j,"script"))),c.call(a[m],j,m);if(i)for(k=h[h.length-1].ownerDocument,n.map(h,ra),m=0;i>m;m++)j=h[m],Z.test(j.type||"")&&!N.access(j,"globalEval")&&n.contains(k,j)&&(j.src?n._evalUrl&&n._evalUrl(j.src):n.globalEval(j.textContent.replace(oa,"")))}return a}function va(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(_(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&aa(_(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(ka,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=_(h),f=_(a),d=0,e=f.length;e>d;d++)ta(f[d],g[d]);if(b)if(c)for(f=f||_(a),g=g||_(h),d=0,e=f.length;e>d;d++)sa(f[d],g[d]);else sa(a,h);return g=_(h,"script"),g.length>0&&aa(g,!i&&_(a,"script")),h},cleanData:function(a){for(var b,c,d,e=n.event.special,f=0;void 0!==(c=a[f]);f++)if(L(c)){if(b=c[N.expando]){if(b.events)for(d in b.events)e[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);c[N.expando]=void 0}c[O.expando]&&(c[O.expando]=void 0)}}}),n.fn.extend({domManip:ua,detach:function(a){return va(this,a,!0)},remove:function(a){return va(this,a)},text:function(a){return K(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.appendChild(a)}})},prepend:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(_(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return K(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!la.test(a)&&!$[(Y.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(_(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return ua(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(_(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),f=e.length-1,h=0;f>=h;h++)c=h===f?this:this.clone(!0),n(e[h])[b](c),g.apply(d,c.get());return this.pushStack(d)}});var wa,xa={HTML:"block",BODY:"block"};function ya(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function za(a){var b=d,c=xa[a];return c||(c=ya(a,b),"none"!==c&&c||(wa=(wa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=wa[0].contentDocument,b.write(),b.close(),c=ya(a,b),wa.detach()),xa[a]=c),c}var Aa=/^margin/,Ba=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ca=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Ea=d.documentElement;!function(){var b,c,e,f,g=d.createElement("div"),h=d.createElement("div");if(h.style){h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,g.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",g.appendChild(h);function i(){h.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",h.innerHTML="",Ea.appendChild(g);var d=a.getComputedStyle(h);b="1%"!==d.top,f="2px"===d.marginLeft,c="4px"===d.width,h.style.marginRight="50%",e="4px"===d.marginRight,Ea.removeChild(g)}n.extend(l,{pixelPosition:function(){return i(),b},boxSizingReliable:function(){return null==c&&i(),c},pixelMarginRight:function(){return null==c&&i(),e},reliableMarginLeft:function(){return null==c&&i(),f},reliableMarginRight:function(){var b,c=h.appendChild(d.createElement("div"));return c.style.cssText=h.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",h.style.width="1px",Ea.appendChild(g),b=!parseFloat(a.getComputedStyle(c).marginRight),Ea.removeChild(g),h.removeChild(c),b}})}}();function Fa(a,b,c){var d,e,f,g,h=a.style;return c=c||Ca(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Ba.test(g)&&Aa.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0!==g?g+"":g}function Ga(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Ha=/^(none|table(?!-c[ea]).+)/,Ia={position:"absolute",visibility:"hidden",display:"block"},Ja={letterSpacing:"0",fontWeight:"400"},Ka=["Webkit","O","Moz","ms"],La=d.createElement("div").style;function Ma(a){if(a in La)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ka.length;while(c--)if(a=Ka[c]+b,a in La)return a}function Na(a,b,c){var d=T.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Oa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Pa(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ca(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Fa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ba.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Oa(a,b,c||(g?"border":"content"),d,f)+"px"}function Qa(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=N.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=N.access(d,"olddisplay",za(d.nodeName)))):(e=V(d),"none"===c&&e||N.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Fa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=T.exec(c))&&e[1]&&(c=W(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Fa(a,b,d)),"normal"===e&&b in Ja&&(e=Ja[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Ha.test(n.css(a,"display"))&&0===a.offsetWidth?Da(a,Ia,function(){return Pa(a,b,d)}):Pa(a,b,d):void 0},set:function(a,c,d){var e,f=d&&Ca(a),g=d&&Oa(a,b,d,"border-box"===n.css(a,"boxSizing",!1,f),f);return g&&(e=T.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=n.css(a,b)),Na(a,c,g)}}}),n.cssHooks.marginLeft=Ga(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Fa(a,"marginLeft"))||a.getBoundingClientRect().left-Da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px":void 0}),n.cssHooks.marginRight=Ga(l.reliableMarginRight,function(a,b){return b?Da(a,{display:"inline-block"},Fa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Aa.test(a)||(n.cssHooks[a+b].set=Na)}),n.fn.extend({css:function(a,b){return K(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ca(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Qa(this,!0)},hide:function(){return Qa(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function Ra(a,b,c,d,e){return new Ra.prototype.init(a,b,c,d,e)}n.Tween=Ra,Ra.prototype={constructor:Ra,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ra.propHooks[this.prop];return a&&a.get?a.get(this):Ra.propHooks._default.get(this)},run:function(a){var b,c=Ra.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ra.propHooks._default.set(this),this}},Ra.prototype.init.prototype=Ra.prototype,Ra.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},Ra.propHooks.scrollTop=Ra.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=Ra.prototype.init,n.fx.step={};var Sa,Ta,Ua=/^(?:toggle|show|hide)$/,Va=/queueHooks$/;function Wa(){return a.setTimeout(function(){Sa=void 0}),Sa=n.now()}function Xa(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=U[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ya(a,b,c){for(var d,e=(_a.tweeners[b]||[]).concat(_a.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Za(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&V(a),q=N.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?N.get(a,"olddisplay")||za(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Ua.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?za(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=N.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;N.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ya(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function $a(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function _a(a,b,c){var d,e,f=0,g=_a.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Sa||Wa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:Sa||Wa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for($a(k,j.opts.specialEasing);g>f;f++)if(d=_a.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,Ya,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(_a,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return W(c.elem,a,T.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],_a.tweeners[c]=_a.tweeners[c]||[],_a.tweeners[c].unshift(b)},prefilters:[Za],prefilter:function(a,b){b?_a.prefilters.unshift(a):_a.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=_a(this,n.extend({},a),f);(e||N.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=N.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Va.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=N.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Xa(b,!0),a,d,e)}}),n.each({slideDown:Xa("show"),slideUp:Xa("hide"),slideToggle:Xa("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Sa=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Sa=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ta||(Ta=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(Ta),Ta=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=d.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var ab,bb=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return K(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ab:void 0)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)}}),ab={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=bb[b]||n.find.attr;bb[b]=function(a,b,d){var e,f;return d||(f=bb[b],bb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,bb[b]=f),e}});var cb=/^(?:input|select|textarea|button)$/i,db=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return K(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),
void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):cb.test(a.nodeName)||db.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var eb=/[\t\r\n\f]/g;function fb(a){return a.getAttribute&&a.getAttribute("class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,fb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,fb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,fb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=fb(this),b&&N.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":N.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+fb(c)+" ").replace(eb," ").indexOf(b)>-1)return!0;return!1}});var gb=/\r/g,hb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(gb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(hb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(n.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var ib=/^(?:focusinfocus|focusoutblur)$/;n.extend(n.event,{trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!ib.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),l=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},f||!o.trigger||o.trigger.apply(e,c)!==!1)){if(!f&&!o.noBubble&&!n.isWindow(e)){for(j=o.delegateType||q,ib.test(j+q)||(h=h.parentNode);h;h=h.parentNode)p.push(h),i=h;i===(e.ownerDocument||d)&&p.push(i.defaultView||i.parentWindow||a)}g=0;while((h=p[g++])&&!b.isPropagationStopped())b.type=g>1?j:o.bindType||q,m=(N.get(h,"events")||{})[b.type]&&N.get(h,"handle"),m&&m.apply(h,c),m=l&&h[l],m&&m.apply&&L(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=q,f||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!L(e)||l&&n.isFunction(e[q])&&!n.isWindow(e)&&(i=e[l],i&&(e[l]=null),n.event.triggered=q,e[q](),n.event.triggered=void 0,i&&(e[l]=i)),b.result}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b)}}),n.fn.extend({trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),l.focusin="onfocusin"in a,l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=N.access(d,b);e||d.addEventListener(a,c,!0),N.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=N.access(d,b)-1;e?N.access(d,b,e):(d.removeEventListener(a,c,!0),N.remove(d,b))}}});var jb=a.location,kb=n.now(),lb=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var mb=/#.*$/,nb=/([?&])_=[^&]*/,ob=/^(.*?):[ \t]*([^\r\n]*)$/gm,pb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,qb=/^(?:GET|HEAD)$/,rb=/^\/\//,sb={},tb={},ub="*/".concat("*"),vb=d.createElement("a");vb.href=jb.href;function wb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function xb(a,b,c,d){var e={},f=a===tb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function yb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function zb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Ab(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:jb.href,type:"GET",isLocal:pb.test(jb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":ub,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?yb(yb(a,n.ajaxSettings),b):yb(n.ajaxSettings,a)},ajaxPrefilter:wb(sb),ajaxTransport:wb(tb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m=n.ajaxSetup({},c),o=m.context||m,p=m.context&&(o.nodeType||o.jquery)?n(o):n.event,q=n.Deferred(),r=n.Callbacks("once memory"),s=m.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,getResponseHeader:function(a){var b;if(2===v){if(!h){h={};while(b=ob.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===v?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return v||(a=u[c]=u[c]||a,t[a]=b),this},overrideMimeType:function(a){return v||(m.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>v)for(b in a)s[b]=[s[b],a[b]];else x.always(a[x.status]);return this},abort:function(a){var b=a||w;return e&&e.abort(b),z(0,b),this}};if(q.promise(x).complete=r.add,x.success=x.done,x.error=x.fail,m.url=((b||m.url||jb.href)+"").replace(mb,"").replace(rb,jb.protocol+"//"),m.type=c.method||c.type||m.method||m.type,m.dataTypes=n.trim(m.dataType||"*").toLowerCase().match(G)||[""],null==m.crossDomain){j=d.createElement("a");try{j.href=m.url,j.href=j.href,m.crossDomain=vb.protocol+"//"+vb.host!=j.protocol+"//"+j.host}catch(y){m.crossDomain=!0}}if(m.data&&m.processData&&"string"!=typeof m.data&&(m.data=n.param(m.data,m.traditional)),xb(sb,m,c,x),2===v)return x;k=n.event&&m.global,k&&0===n.active++&&n.event.trigger("ajaxStart"),m.type=m.type.toUpperCase(),m.hasContent=!qb.test(m.type),f=m.url,m.hasContent||(m.data&&(f=m.url+=(lb.test(f)?"&":"?")+m.data,delete m.data),m.cache===!1&&(m.url=nb.test(f)?f.replace(nb,"$1_="+kb++):f+(lb.test(f)?"&":"?")+"_="+kb++)),m.ifModified&&(n.lastModified[f]&&x.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&x.setRequestHeader("If-None-Match",n.etag[f])),(m.data&&m.hasContent&&m.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",m.contentType),x.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+ub+"; q=0.01":""):m.accepts["*"]);for(l in m.headers)x.setRequestHeader(l,m.headers[l]);if(m.beforeSend&&(m.beforeSend.call(o,x,m)===!1||2===v))return x.abort();w="abort";for(l in{success:1,error:1,complete:1})x[l](m[l]);if(e=xb(tb,m,c,x)){if(x.readyState=1,k&&p.trigger("ajaxSend",[x,m]),2===v)return x;m.async&&m.timeout>0&&(i=a.setTimeout(function(){x.abort("timeout")},m.timeout));try{v=1,e.send(t,z)}catch(y){if(!(2>v))throw y;z(-1,y)}}else z(-1,"No Transport");function z(b,c,d,h){var j,l,t,u,w,y=c;2!==v&&(v=2,i&&a.clearTimeout(i),e=void 0,g=h||"",x.readyState=b>0?4:0,j=b>=200&&300>b||304===b,d&&(u=zb(m,x,d)),u=Ab(m,u,x,j),j?(m.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(n.lastModified[f]=w),w=x.getResponseHeader("etag"),w&&(n.etag[f]=w)),204===b||"HEAD"===m.type?y="nocontent":304===b?y="notmodified":(y=u.state,l=u.data,t=u.error,j=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),x.status=b,x.statusText=(c||y)+"",j?q.resolveWith(o,[l,y,x]):q.rejectWith(o,[x,y,t]),x.statusCode(s),s=void 0,k&&p.trigger(j?"ajaxSuccess":"ajaxError",[x,m,j?l:t]),r.fireWith(o,[x,y]),k&&(p.trigger("ajaxComplete",[x,m]),--n.active||n.event.trigger("ajaxStop")))}return x},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return!n.expr.filters.visible(a)},n.expr.filters.visible=function(a){return a.offsetWidth>0||a.offsetHeight>0||a.getClientRects().length>0};var Bb=/%20/g,Cb=/\[\]$/,Db=/\r?\n/g,Eb=/^(?:submit|button|image|reset|file)$/i,Fb=/^(?:input|select|textarea|keygen)/i;function Gb(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Cb.test(a)?d(a,e):Gb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Gb(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Gb(c,a[c],b,e);return d.join("&").replace(Bb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Fb.test(this.nodeName)&&!Eb.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Db,"\r\n")}}):{name:b.name,value:c.replace(Db,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Hb={0:200,1223:204},Ib=n.ajaxSettings.xhr();l.cors=!!Ib&&"withCredentials"in Ib,l.ajax=Ib=!!Ib,n.ajaxTransport(function(b){var c,d;return l.cors||Ib&&!b.crossDomain?{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Hb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=n("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Jb=[],Kb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Jb.pop()||n.expando+"_"+kb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Kb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Kb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Kb,"$1"+e):b.jsonp!==!1&&(b.url+=(lb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Jb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ca([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var Lb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Lb)return Lb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function Mb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(e=d.getBoundingClientRect(),c=Mb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ea})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;n.fn[a]=function(d){return K(this,function(a,d,e){var f=Mb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ga(l.pixelPosition,function(a,c){return c?(c=Fa(a,b),Ba.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return K(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)},size:function(){return this.length}}),n.fn.andSelf=n.fn.addBack,"function"=="function"&&__webpack_require__(6)&&!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){return n}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));var Nb=a.jQuery,Ob=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Ob),b&&a.jQuery===n&&(a.jQuery=Nb),n},b||(a.jQuery=a.$=n),n});


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inRad = inRad;
exports.reset = reset;

function inRad(num) {
  return num * Math.PI / 180;
}

function reset() {
  clearTimeout(window.timer);
}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

CanvasRenderingContext2D.prototype.circle = function (x, y, a, radius, rotate, startAngle, endAngle, clockwise, x2, y2) {
  this.save();
  this.beginPath();
  this.translate(x, y);
  this.rotate(rotate);
  this.translate(-x, -y);
  this.scale(a / radius, 1);
  this.arc(x2, y2, radius, startAngle, endAngle, clockwise);
  this.restore();
  this.lineWidth = 2;
  this.strokeStyle = '#ffffff';
  this.stroke();
};

CanvasRenderingContext2D.prototype.electron = function (x, y, a, b, rotate, x2, y2) {
  this.save();
  this.beginPath();
  this.translate(x, y);
  this.rotate(rotate);
  this.translate(-x, -y);
  this.scale(a / b, 1);
  this.arc(x2, y2, b, 0, Math.PI * 2, true);
  this.restore();
  this.closePath();
  this.fillStyle = '#000000';
  this.save();
  this.fill();
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0);

$('.quantity_el').focus();
var optionsParticles = $('#options_particles');
$(document).on('keyup', function () {
  if (event.keyCode === 39 && !$('input').is(':focus')) {
    optionsParticles.animate({
      left: '350px'
    }, 400);
  }

  if (event.keyCode === 37 && !$('input').is(':focus')) {
    optionsParticles.animate({
      left: '-20px'
    }, 400);
  }
});
$('#play-options, #options_particles .back').on('click', function () {
  if (optionsParticles.position().left < 0) {
    optionsParticles.animate({
      left: '350px'
    }, 400);
  } else {
    optionsParticles.animate({
      left: '-20px'
    }, 400);
  }
});
$('.title-project a, #description .back').on('click', function () {
  var description = $('#description');

  if (description.position().left < 0) {
    description.animate({
      left: '350px'
    }, 400);
  } else {
    description.animate({
      left: '-210px'
    }, 400);
  }
});
$('#options-block').on('click', '.particles_link', function (e) {
  if (!$(this).next().hasClass('active')) {
    $(this).next().addClass('active');
    $('.particles_link').next().slideUp(500);
    $(this).next().slideDown(500);
  } else {
    $(this).next().slideUp(500);
    $(this).next().removeClass('active');
  }
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var app = _interopRequireWildcard(__webpack_require__(5));

var tools = _interopRequireWildcard(__webpack_require__(1));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var $ = __webpack_require__(0);

var wCanvas = $('.particles-block').width(),
    hCanvas = $('.particles-block').height(),
    maxDuration = 15,
    maxRadius;

if (hCanvas > wCanvas) {
  maxRadius = Math.floor(wCanvas / 4.2);
} else {
  maxRadius = Math.floor(hCanvas / 4.2);
}

$('.particles').append("<canvas id=\"particles\" width=\"".concat(wCanvas, "\" height=\"").concat(hCanvas, "\" ></canvas>"));
optionsBlock();
$(".quantity_el").on('keyup', function () {
  $('#options-block').empty();
  optionsBlock();
});
$('.total_duration').on('keyup', function () {
  $('.particles_edit .duration').val($(this).val());
});
$('.total_charge').on('change', function () {
  $('.particles_edit .charge').val($(this).val());
});
$('.control').on('keyup', 'input', function () {
  optionsValidation($(this));
});
$('#enter, #enter-play').on('click', function () {
  building();
});
$(document).on('keyup', function () {
  if (event.keyCode === 13) building();
});

function optionsBlock() {
  var particlesContent = "\n\t\t\t<div class=\"particles_edit\">\n\t\t\t\t<label>\u0417\u0430\u0440\u044F\u0434 \u0447\u0430\u0441\u0442\u0438\u0446\u044B</label><br>\n\t\t\t\t<select class=\"charge\">\n\t\t\t\t\t<option value=\"1\">\u041F\u043E\u043B\u043E\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439</option>\n\t\t\t\t\t<option value=\"0\">\u041E\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439</option>\n\t\t\t\t</select><br>\n\t\t\t\t<label>\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C, \u041C\u043C/\u0441\u0435\u043A</label><br>\n\t\t\t\t<input type=\"text\" class=\"duration\" value=\"".concat($('.total_duration').val(), "\"><br>\n\t\t\t</div>"),
      quantity = $('.quantity_el').val();

  if (quantity > 50) {
    $('.quantity_el').val(50);
    quantity = 50;
  }

  for (var i = 0; i < quantity; i++) {
    var _optionsBlock = "<div class=\"particles_link\"><p>\u0427\u0430\u0441\u0442\u0438\u0446\u0430".concat(i + 1, "<i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i></p></div>").concat(particlesContent);

    $('#options-block').append(_optionsBlock);
    $('.particles_edit .charge').val($('.total_charge').val());
  }
}

function optionsValidation($element) {
  if ($element.val() < 0 || isNaN($element.val())) {
    $element.val($element.data('default'));
  }
}

function building() {
  var quantity = $('.quantity_el').val(),
      $induction = $('.induction'),
      $particlesEdit = $('.particles_edit'),
      radius,
      induction,
      radii = [],
      durations = [],
      charges = [];
  tools.reset();
  $('#enter-play').hide();

  if ($induction.val() > 20) {
    $induction.val(5);
  }

  induction = 5 / $induction.val();

  if ($('.total_duration').val() > maxDuration) {
    $particlesEdit.children('.duration').val(maxDuration);
    $('.total_duration').val(maxDuration);
  }

  if ($('.quantity_el ').val() > 50) {
    $('.quantity_el').val(50);
    quantity = 50;
  }

  for (var i = 0; i < quantity; i++) {
    var duration = $particlesEdit.eq(i).children('.duration').val(),
        charge = $particlesEdit.eq(i).children('.charge').val() * 1,
        _radius = duration / maxDuration * maxRadius * induction;

    duration = 10;

    if (_radius > maxRadius) {
      $particlesEdit.eq(i).children('.radius').val(maxRadius);
      _radius = maxRadius;
    }

    radii.push(_radius);
    charges.push(charge);

    if (charge === 1) {
      durations.push(duration * 1);
    } else {
      durations.push(duration * -1);
    }
  }

  app.enterCanvas(quantity, radii, durations, charges);
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.enterCanvas = enterCanvas;

var tools = _interopRequireWildcard(__webpack_require__(1));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var inRad = tools.inRad;
var fps = 60,
    final = inRad(360);

function enterCanvas(quantity, radii, durations, charges) {
  var canvas = document.getElementById('particles'),
      ctx = canvas.getContext('2d'),
      baseX = canvas.width / 2,
      baseY = canvas.height / 2,
      gapsDegrees = 360 / quantity,
      startAngle = 0,
      i = 0,
      sumCharges,
      stopRun,
      degree;
  console.log(canvas);
  console.log(ctx);
  var currentDegrees = [],
      finals = [],
      clockwise = [];
  console.log(inRad(durations[0]));

  for (i = 0; i < quantity; i++) {
    durations[i] = final * (durations[i] * 0.002);
    currentDegrees.push(0);

    if (charges[i] === 1) {
      finals[i] = final;
      clockwise[i] = false;
    } else {
      finals[i] = final * -1;
      clockwise[i] = true;
    }
  }

  run();

  function run() {
    if (!stopRun) {
      sumCharges = 0;
      window.timer = setTimeout(function () {
        window.requestAnimationFrame(run);

        for (var _i = 0; _i < quantity; _i++) {
          currentDegrees[_i] += durations[_i];
          currentDegrees[_i] = parseFloat(currentDegrees[_i].toFixed(4));

          if (charges[_i] === -1) {
            sumCharges++;
          }
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        addCircles(startAngle, currentDegrees);
        addElectrons(currentDegrees);

        if (sumCharges === quantity) {
          stopRun = true;
        }
      }, 1000 / fps);
    } else {
      return false;
    }
  }

  function addCircles(startAngle, currentDegrees) {
    degree = 0;
    i = 0;

    while (i < quantity) {
      degree += gapsDegrees;
      ctx.circle(baseX, baseY, radii[i], radii[i], inRad(degree), startAngle, currentDegrees[i], clockwise[i], baseX - radii[i], baseY);
      i++;
    }
  }

  function addElectrons(currentDegrees) {
    var vx, vy;
    degree = 0;
    i = 0;

    while (i < quantity) {
      degree += gapsDegrees;
      vx = Math.cos(currentDegrees[i]) * radii[i];
      vy = Math.sin(currentDegrees[i]) * radii[i];
      stop(i, degree, vx, vy);
      i++;
    }
  }

  function stop(i, degree, vx, vy) {
    if (finals[i] > 0) {
      ctx.electron(baseX, baseY, 5, 5, inRad(degree), baseX - radii[i] + vx, baseY + vy);
    } else {
      ctx.electron(baseX, baseY, 5, 5, inRad(degree), baseX - radii[i] + vx, baseY + vy);
    }
    /*	остановка частиц
    		if ( finals[i] > 0 ) {
    			if( currentDegrees[i] < finals[i] || (currentDegrees[i] * (-1)) > finals[i] ) {
    				ctx.electron( baseX, baseY, 5, 5, inRad(degree), (baseX - radii[i]) + vx, baseY + vy );
    			} else {
    				ctx.electron( baseX, baseY, 5, 5, inRad(degree), baseX, baseY );
    				charges[i] = -1;
    			}
    		} else {
    			if ( currentDegrees[i] > finals[i] ) {
    				ctx.electron( baseX, baseY, 5, 5, inRad(degree), (baseX - radii[i]) + vx, baseY + vy );
    			} else {
    				ctx.electron( baseX, baseY, 5, 5, inRad(degree), baseX, baseY );
    				charges[i] = -1;
    			}
    		}*/

  }
}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(19);

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var Loader = __webpack_require__(22);

var System = __webpack_require__(21);

window.demoNum = 4;
var loader = new Loader(System);

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return _get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ParticleBase = __webpack_require__(23);

var Osc = __webpack_require__(28);

var test = true;
var flag = 0;
var angle = 0;

var Particle =
/*#__PURE__*/
function (_ParticleBase) {
  _inherits(Particle, _ParticleBase);

  function Particle(config, system, loader) {
    var _this;

    _classCallCheck(this, Particle);

    _this = _possibleConstructorReturn(this, (Particle.__proto__ || Object.getPrototypeOf(Particle)).call(this, config, system, loader));
    _this.config = config;
    _this.radius = config.radius;
    _this.order = config.order;
    _this.group = config.group; //this.alternate = config.alternate;

    _this.osc = new Osc(_this.order, 0.015, true, false);

    _this.reset();

    return _this;
  }

  _createClass(Particle, [{
    key: "reset",
    value: function reset() {
      _get(Particle.prototype.__proto__ || Object.getPrototypeOf(Particle.prototype), "reset", this).call(this);

      this.osc.reset();
    }
  }, {
    key: "update",
    value: function update() {
      if (test) {
        flag++;
        if (flag > 2) test = false;
      } //this.osc.update(this.loader.timescale);
      //let angle = this.calc.map(this.order, 0, 1, -Math.cos(this.loader.elapsedMilliseconds * 0.0015) * (Math.PI * 1.5), Math.sin(this.loader.elapsedMilliseconds * 0.0015) * (Math.PI * 1.5));


      var x = 0.12 * Math.sin(angle);
      var z = 0.3 * Math.sin(angle);
      var y = 0.12 * Math.cos(angle); //this.mesh.position.x += x;
      // this.mesh.position.z += z;
      //this.mesh.position.y += y;

      angle += Math.PI / 180 * 2; //this.mesh.rotation.set(scale, scale, scale);
    }
  }]);

  return Particle;
}(ParticleBase);

function inRad(num) {
  return num * Math.PI / 180;
}

module.exports = Particle;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return _get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SystemBase = __webpack_require__(24);

var Particle = __webpack_require__(20);

var System =
/*#__PURE__*/
function (_SystemBase) {
  _inherits(System, _SystemBase);

  function System(loader) {
    var _this;

    _classCallCheck(this, System);

    _this = _possibleConstructorReturn(this, (System.__proto__ || Object.getPrototypeOf(System)).call(this, loader));
    _this.duration = 5500;
    _this.lines = [];
    _this.count = 1;
    _this.height = 10;
    _this.particleGroup.position.y = 0.0;
    _this.particleGroup.position.x = -3.4; //for(let i = 0; i <= 4; i++) {

    _this.particles.push(new Particle({
      group: _this.particleGroup,
      order: 1,
      alternate: false,
      color: 0xffffff,
      opacity: 1,
      size: 0.1,
      radius: 4
    }, _this, _this.loader)); //}


    console.log(_this.particles); //???

    var lineMaterial = new THREE.LineBasicMaterial({
      color: 0xffffff,
      opacity: 0.5,
      transparent: true
    });

    for (var i = 0; i < _this.count; i++) {
      var lineGeometry = new THREE.Geometry();
      lineGeometry.vertices.push(new THREE.Vector3(), new THREE.Vector3());
      var lineMesh = new THREE.Line(lineGeometry, lineMaterial);
      /*this.particleGroup.add(lineMesh);
      this.lines.push(lineMesh);*/
    }

    return _this;
  }

  _createClass(System, [{
    key: "update",
    value: function update() {
      _get(System.prototype.__proto__ || Object.getPrototypeOf(System.prototype), "update", this).call(this);

      var i = this.particles.length;

      while (i--) {
        this.particles[i].update();
      }

      var j = this.lines.length;

      while (j--) {
        var p1 = this.particles[j * 2];
        var p2 = this.particles[j * 2 + 1];
        var line = this.lines[j];
        line.geometry.vertices[0].x = p1.mesh.position.x;
        line.geometry.vertices[0].y = p1.mesh.position.y;
        line.geometry.vertices[0].z = p1.mesh.position.z;
        line.geometry.vertices[1].x = p2.mesh.position.x;
        line.geometry.vertices[1].y = p2.mesh.position.y;
        line.geometry.vertices[1].z = p2.mesh.position.z;
        line.geometry.verticesNeedUpdate = true;
      }

      if (this.exiting && !this.loader.isOrbit && !this.loader.isGrid) {
        this.loader.camera.position.z = this.loader.cameraBaseZ - this.ease.inExpo(this.exitProgress, 0, 1, 1) * this.loader.cameraBaseZ;
      }
    }
  }]);

  return System;
}(SystemBase);

module.exports = System;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Calc = __webpack_require__(26);

var Ease = __webpack_require__(27);

var AxisHelper = __webpack_require__(25);

var gui = new dat.GUI();
var increase = 0.05;
var counter = 0;
var y;
var meshCircle = new THREE.Object3D();
meshCircle.add(new THREE.Line(new THREE.Geometry(), new THREE.LineBasicMaterial({
  color: 0xffffff
})));

var Loader =
/*#__PURE__*/
function () {
  function Loader(System) {
    _classCallCheck(this, Loader);

    this.calc = new Calc();
    this.ease = new Ease();
    this.dom = {
      html: document.documentElement,
      container: document.querySelector('.loader'),
      timescaleWrap: document.querySelector('.timescale-wrap'),
      timescaleRange: document.querySelector('.timescale-range'),
      timescaleValue: document.querySelector('.timescale-value'),
      replayButton: document.querySelector('.replay-animation'),
      debugButton: document.querySelector('.icon--debug')
    };
    this.dom.html.classList.add('loading');
    this.completed = false;
    this.raf = null;
    this.setupDebug();
    this.setupTime();
    this.setupScene();
    this.setupCamera();
    this.setupRenderer();
    this.setupControls();
    this.setupHelpers();
    this.listen();
    this.onResize();
    this.system = new System(this);
    this.loop();
  }

  _createClass(Loader, [{
    key: "setupDebug",
    value: function setupDebug() {
      var _this = this;

      this.isDebug = location.hash.indexOf('debug') > 0;
      this.isGrid = location.hash.indexOf('grid') > 0;
      this.isOrbit = location.hash.indexOf('orbit') > 0;
      this.debugHash = '';
      this.isGrid = true;
      this.isOrbit = true;

      if (this.debugHash) {
        [].slice.call(document.querySelectorAll('.demo')).forEach(function (elem, i, arr) {
          elem.setAttribute('href', "".concat(elem.getAttribute('href'), "#").concat(_this.debugHash));
        });
      }
    }
  }, {
    key: "setupTime",
    value: function setupTime() {
      this.timescale = 1;
      this.clock = new THREE.Clock();
      this.deltaTimeSeconds = this.clock.getDelta() * this.timescale;
      this.deltaTimeMilliseconds = this.deltaTimeSeconds * 1000;
      this.deltaTimeNormal = this.deltaTimeMilliseconds / (1000 / 60);
      this.elapsedMilliseconds = 0;
    }
  }, {
    key: "setupScene",
    value: function setupScene() {
      this.scene = new THREE.Scene();
      /*		let geometry = new THREE.SphereGeometry(5, 30, 30);
      		let material = new THREE.MeshBasicMaterial({color: 0xffffff, wireframe: true});
              let mesh = new THREE.Mesh(geometry, material);
              this.scene.add(mesh);*/

      this.scene.add(meshCircle);
      /*    function CircleGeometry( mesh ) {
              var data = {
                  radius: 2,
                  segments: 64,
                  thetaStart: 1,
                  thetaLength: Math.PI * 2
              };
              function generateGeometry() {
                  updateGroupGeometry( mesh,
                      new THREE.CircleGeometry(
                          data.radius, data.segments, data.thetaStart, data.thetaLength
                      )
                  );
              }
              var folder = gui.addFolder( 'THREE.CircleGeometry' );
              folder.add( data, 'radius', 1, 100 ).onChange( generateGeometry );
              folder.add( data, 'segments', -10, 100 ).onChange( generateGeometry );
              folder.add( data, 'thetaStart', -10, 100 ).onChange( generateGeometry );
              folder.add( data, 'thetaLength', 0, Math.PI * 2 ).onChange( generateGeometry );
              generateGeometry();
          }
          function circle(mesh) {
              let data = {
                  radius: 5,
                  segments: 64,
                  thetaStart: 1,
                  thetaLength: Math.PI * 2
              }
              function generateGeometry() {
                  var circleGeometry = new THREE.CircleGeometry(data.radius, data.segments, data.thetaStart, data.thetaLength);
                  var geometry = new THREE.Geometry();
                  for(let i = 1; i <= data.segments; i++){
                      geometry.vertices.push( circleGeometry.vertices[i] );
                  }
                  geometry.vertices.push( geometry.vertices[0] );
                  updateGroupGeometry( mesh, geometry );
              }
              var folder = gui.addFolder( 'THREE.CircleGeometry' );
              folder.add( data, 'radius', 0, Math.PI * 2 ).onChange( generateGeometry );
              folder.add( data, 'segments', -10, 100 ).onChange( generateGeometry );
              folder.add( data, 'thetaStart', -10, 100 ).onChange( generateGeometry );
              folder.add( data, 'thetaLength', 0, Math.PI * 2 ).onChange( generateGeometry );
              generateGeometry();
          }
          function RingGeometry( mesh ) {
              var data = {
                  innerRadius: 5,
                  outerRadius: 10,
                  thetaSegments: 8,
                  phiSegments: 8,
                  thetaStart: 0,
                  thetaLength: Math.PI * 2
              };
              function generateGeometry() {
                  updateGroupGeometry( mesh,
                      new THREE.RingGeometry(
                          data.innerRadius, data.outerRadius, data.thetaSegments, data.phiSegments, data.thetaStart, data.thetaLength
                      )
                  );
              }
              var folder = gui.addFolder( 'THREE.RingGeometry' );
              folder.add( data, 'innerRadius', 1, 100 ).onChange( generateGeometry );
              folder.add( data, 'outerRadius', 1, 100 ).onChange( generateGeometry );
              folder.add( data, 'thetaSegments', 1, 100 ).step( 1 ).onChange( generateGeometry );
              folder.add( data, 'phiSegments', 1, 100 ).step( 1 ).onChange( generateGeometry );
              folder.add( data, 'thetaStart', 0, Math.PI * 2 ).onChange( generateGeometry );
              folder.add( data, 'thetaLength', 0, Math.PI * 2 ).onChange( generateGeometry );
              generateGeometry();
          }
          function TorusBufferGeometry( mesh ) {
              var data = {
                  radius: 2,
                  tube: 0.05,
                  radialSegments: 16,
                  tubularSegments: 195,
                  arc: Math.PI * 2
              };
              function generateGeometry() {
                  updateGroupGeometry( mesh,
                      new THREE.TorusBufferGeometry(
                          data.radius, data.tube, data.radialSegments, data.tubularSegments, data.arc,
                      )
                  );
              }
              var folder = gui.addFolder( 'THREE.TorusBufferGeometry' );
              folder.add( data, 'radius', 1, 100 ).onChange( generateGeometry );
              folder.add( data, 'tube', -10, 100 ).onChange( generateGeometry );
              folder.add( data, 'arc', 0, Math.PI * 2 ).onChange( generateGeometry );
              generateGeometry();
          }
          function EllipseCurve( mesh ) {
              var data = {
                  ax: 0, aY: 0,
                  xRadius: 1, yRadius: 1,
                  aStartAngle: 0, aEndAngle: 2 * Math.PI,
                  aClockwise: false,
                  aRotation: 0,
              };
              function generateGeometry() {
                  var curve = new THREE.EllipseCurve(
                      data.ax, data.aY, data.xRadius, data.yRadius, data.aStartAngle,
                      data.aEndAngle, data.aClockwise, data.aRotation
                  );
                  var points = curve.getPoints( 50 );
                  var geometry = new THREE.BufferGeometry(16).setFromPoints( points );
                  updateGroupGeometry( mesh, geometry );
              }
              var folder = gui.addFolder( 'THREE.EllipseCurve' );
              folder.add( data, 'xRadius', 1, 100 ).onChange( generateGeometry );
              folder.add( data, 'yRadius', 1, 100 ).onChange( generateGeometry );
              folder.add( data, 'aStartAngle', 0, Math.PI * 2 ).onChange( generateGeometry );
              folder.add( data, 'aEndAngle', 0, Math.PI * 2 ).onChange( generateGeometry );
              generateGeometry();
          }*/

      /*    function bendTheCone(r1, r2, rMain, theta, segments){
              var geom = new THREE.CylinderGeometry(r1, r2, theta, 3, segments);
              geom.translate(rMain, theta / 2 ,0);
               geom.vertices.forEach(function(vertex){
                  var localTheta = vertex.y;
                  var localRadius = vertex.x;
                  vertex.x = Math.cos(localTheta) * localRadius;
                  vertex.y = Math.sin(localTheta) * localRadius;
              });
              geom.computeFaceNormals();
              geom.computeVertexNormals();
              return geom;
          }
          var geometry = bendTheCone(0.5, 0.5, 10, THREE.Math.degToRad(360), 60);
          var mesh = new THREE.Mesh(geometry, new THREE.LineBasicMaterial());
          this.scene.add(mesh);*/
    }
  }, {
    key: "setupCamera",
    value: function setupCamera() {
      this.camera = new THREE.PerspectiveCamera(45, 0, 0.0001, 10000); //this.camera = new THREE.PerspectiveCamera(45, width/height, 0.1, 5000);

      this.cameraBaseX = this.isGrid ? -20 : 0;
      this.cameraBaseY = this.isGrid ? 15 : 0;
      this.cameraBaseZ = this.isGrid ? 20 : 30;
      this.camera.position.x = this.cameraBaseX;
      this.camera.position.y = this.cameraBaseY;
      this.camera.position.z = this.cameraBaseZ;
    }
  }, {
    key: "setupRenderer",
    value: function setupRenderer() {
      this.renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true
      });
      this.dom.container.appendChild(this.renderer.domElement);
    }
  }, {
    key: "setupControls",
    value: function setupControls() {
      if (this.isOrbit) {
        this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.9;
        this.controls.enableKeys = false;
        this.dom.timescaleWrap.style.visibility = 'visible';
      }
    }
  }, {
    key: "setupHelpers",
    value: function setupHelpers() {
      if (this.isGrid) {
        this.gridOpacityMap = [0.4, // 1
        0.2, // 2
        0.2, // 3
        0.2, // 4
        0.1, // 5
        0.2, // 6
        0.1, // 7
        0.1 // 8
        ];
        this.gridHelper = new THREE.GridHelper(300, 60, 0xffffff, 0xffffff);
        this.gridHelper.material.transparent = true;
        this.gridHelper.material.opacity = this.gridOpacityMap[demoNum - 1];
        this.scene.add(this.gridHelper);
        this.axisOpacityMap = [1, // 1
        0.6, // 2
        0.6, // 3
        0.6, // 4
        0.3, // 5
        0.6, // 6
        0.3, // 7
        0.3 // 8
        ];
        this.axisHelper = new AxisHelper(150, this.axisOpacityMap[demoNum - 1]);
        this.scene.add(this.axisHelper);
        this.camera.lookAt(new THREE.Vector3());
      }
    }
  }, {
    key: "update",
    value: function update() {
      this.deltaTimeSeconds = this.clock.getDelta();

      if (this.diffTime) {
        this.deltaTimeSeconds -= this.diffTime;
        this.diffTime = 0;
      }

      function updateGroupGeometry(mesh, geometry) {
        mesh.children[0].geometry.dispose();
        mesh.children[0].geometry = geometry;
      }

      if (counter <= 2.04) {
        counter = counter > 2 ? 2 : counter;
        EllipseCurve(meshCircle);
      }

      function EllipseCurve(mesh) {
        y = counter;
        counter += increase;
        var data = {
          ax: 0,
          aY: 0,
          xRadius: 1,
          yRadius: 1,
          aStartAngle: 0,
          aEndAngle: Math.PI * y,
          aClockwise: false,
          aRotation: 0
        };
        console.log('test');

        function generateGeometry() {
          var curve = new THREE.EllipseCurve(data.ax, data.aY, data.xRadius, data.yRadius, data.aStartAngle, data.aEndAngle, data.aClockwise, data.aRotation);
          var points = curve.getPoints(50);
          var geometry = new THREE.BufferGeometry(16).setFromPoints(points);
          updateGroupGeometry(mesh, geometry);
        }

        generateGeometry();
      }

      function shape(mesh) {
        y = counter;
        counter += increase;
        var data = {
          ax: 0,
          aY: 0,
          radius: 4,
          aStartAngle: 0,
          aEndAngle: Math.PI * y,
          aClockwise: false
        };

        function generateGeometry() {
          var shape = new THREE.Shape();
          shape.absarc(data.ax, data.aY, data.radius, data.aStartAngle, data.aEndAngle, data.aClockwise);
          var spacedPoints = shape.createSpacedPointsGeometry(360);
          var vertexColors = [];
          spacedPoints.vertices.forEach(function (item, index) {
            vertexColors.push(new THREE.Color(0xff0000));
          });
          spacedPoints.colors = vertexColors;
          updateGroupGeometry(mesh, spacedPoints);
        }
        /*   let folder = gui.addFolder( 'THREE.Shape' );
           folder.add( data, 'aStartAngle', 0, Math.PI * 2 ).onChange( generateGeometry );
           folder.add( data, 'aEndAngle', 0, Math.PI * 2 ).onChange( generateGeometry );*/


        generateGeometry();
      }

      this.deltaTimeSeconds *= this.timescale;
      this.deltaTimeMilliseconds = this.deltaTimeSeconds * 1000;
      this.deltaTimeNormal = this.deltaTimeMilliseconds / (1000 / 60);
      this.elapsedMilliseconds += this.deltaTimeMilliseconds;
      this.system.update();

      if (this.isOrbit) {
        this.controls.update();
      }
    }
  }, {
    key: "render",
    value: function render() {
      this.renderer.render(this.scene, this.camera);
    }
  }, {
    key: "listen",
    value: function listen() {
      var _this2 = this;

      window.addEventListener('resize', function (e) {
        return _this2.onResize(e);
      });
      this.dom.replayButton.addEventListener('click', function (e) {
        return _this2.onReplayButtonClick(e);
      });
      this.dom.debugButton.addEventListener('click', function (e) {
        return _this2.onDebugButtonClick(e);
      });

      if (this.isOrbit) {
        this.dom.timescaleRange.addEventListener('change', function (e) {
          return _this2.onTimescaleRangeChange(e);
        });
        this.dom.timescaleRange.addEventListener('mousemove', function (e) {
          return _this2.onTimescaleRangeChange(e);
        });
      }

      this.hidden = null;
      this.visibilityChange = null;

      if (typeof document.hidden !== 'undefined') {
        this.hidden = 'hidden';
        this.visibilityChange = 'visibilitychange';
      } else if (typeof document.msHidden !== 'undefined') {
        this.hidden = 'msHidden';
        this.visibilityChange = 'msvisibilitychange';
      } else if (typeof document.webkitHidden !== 'undefined') {
        this.hidden = 'webkitHidden';
        this.visibilityChange = 'webkitvisibilitychange';
      }

      if (typeof document.addEventListener === 'undefined' || typeof document.hidden === 'undefined') {} else {
        window.addEventListener(this.visibilityChange, function (e) {
          return _this2.onVisibilityChange(e);
        });
      }
    }
  }, {
    key: "replay",
    value: function replay() {
      document.documentElement.classList.remove('completed');
      document.documentElement.classList.add('loading');
      this.camera.position.x = this.cameraBaseX;
      this.camera.position.y = this.cameraBaseY;
      this.camera.position.z = this.cameraBaseZ;
      this.timescale = 1;
      this.deltaTimeSeconds = 1 / 60;
      this.deltaTimeMilliseconds = this.deltaTimeSeconds * 1000;
      this.deltaTimeNormal = this.deltaTimeMilliseconds / (1000 / 60);
      this.elapsedMilliseconds = 0;
      this.blurTime = 0;
      this.diffTime = 0;
      this.focusTime = 0;
      this.system.replay();
      this.completed = false;
      this.clock.start();
      this.loop();
    }
  }, {
    key: "complete",
    value: function complete() {
      var _this3 = this;

      if (this.isOrbit || this.isGrid) {
        return;
      }

      setTimeout(function () {
        _this3.clock.stop();

        cancelAnimationFrame(_this3.raf);
      }, 600);
      this.completed = true;
      this.dom.html.classList.remove('loading');
      this.dom.html.classList.add('completed');
    }
  }, {
    key: "onResize",
    value: function onResize() {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.dpr = window.devicePixelRatio > 1 ? 2 : 1;
      this.camera.aspect = this.width / this.height;
      this.camera.updateProjectionMatrix();
      this.renderer.setPixelRatio(this.dpr);
      this.renderer.setSize(this.width, this.height);
    }
  }, {
    key: "onReplayButtonClick",
    value: function onReplayButtonClick(e) {
      e.preventDefault();
      this.replay();
    }
  }, {
    key: "onDebugButtonClick",
    value: function onDebugButtonClick(e) {
      e.preventDefault();
      var baseURL = window.location.href.split('#')[0];

      if (this.isDebug) {
        if (history) {
          history.pushState('', document.title, window.location.pathname);
        } else {
          location.hash = '';
        }

        location.href = baseURL;
      } else {
        location.href = "".concat(baseURL, "#debug");
      }

      location.reload();
    }
  }, {
    key: "onTimescaleRangeChange",
    value: function onTimescaleRangeChange(e) {
      this.timescale = parseFloat(this.dom.timescaleRange.value);
      this.dom.timescaleValue.innerHTML = this.timescale.toFixed(1);
    }
  }, {
    key: "onVisibilityChange",
    value: function onVisibilityChange(e) {
      if (document.hidden) {
        this.blurTime = Date.now();
      } else {
        this.focusTime = Date.now();

        if (this.blurTime) {
          this.diffTime = (this.focusTime - this.blurTime) / 1000;
        }
      }
    }
  }, {
    key: "loop",
    value: function loop() {
      var _this4 = this;

      this.update();
      this.render();
      this.raf = window.requestAnimationFrame(function () {
        return _this4.loop();
      });
    }
  }]);

  return Loader;
}();

module.exports = Loader;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//TODO добавить в gui объект отвечающий за параметры движения частицы
var gui = new dat.GUI();
/*let position = gui.addFolder('position');
let scale = gui.addFolder('scale');
let rotation = gui.addFolder('rotation');
let renderOrder = gui.addFolder('renderOrder');
let quaternion = gui.addFolder('quaternion');
let up = gui.addFolder('up');
let matrix = gui.addFolder('matrix');
let matrixWorld = gui.addFolder('matrixWorld');
let boundingSphere = gui.addFolder('boundingSphere');
let parameters = gui.addFolder('parameters');*/

var ParticleBase =
/*#__PURE__*/
function () {
  function ParticleBase(config, system, loader) {
    _classCallCheck(this, ParticleBase);

    this.system = system;
    this.loader = loader;
    this.calc = this.loader.calc;
    this.ease = this.loader.ease;
    this.group = config.group;
    this.x = config.x;
    this.y = config.y;
    this.z = config.z;
    this.size = config.size;
    this.color = config.color;
    this.opacity = config.opacity;
    this.createMesh();
  }

  _createClass(ParticleBase, [{
    key: "createMesh",
    value: function createMesh() {
      this.geometry = this.system.sphereGeometry;
      this.material = new THREE.MeshBasicMaterial({
        color: this.color,
        transparent: true,
        opacity: this.opacity,
        depthTest: false,
        precision: 'lowp' //   wireframe: true

      });
      this.mesh = new THREE.Mesh(this.geometry, this.material);
      /*this.mesh.position.x = this.x;
      this.mesh.position.y = this.y;
      this.mesh.position.z = this.z;*/
      //this.mesh.position.x = -0.9;

      this.mesh.scale.set(this.size, this.size, this.size);
      /*if(true){
          position.add(this.mesh.position, 'x').min(-10).max(10).step(0.1);
          position.add(this.mesh.position, 'y').min(-10).max(10).step(0.1);
          position.add(this.mesh.position, 'z').min(-10).max(10).step(0.1);
          scale.add(this.mesh.scale, 'x').min(-10).max(10).step(0.1);
          scale.add(this.mesh.scale, 'y').min(-10).max(10).step(0.1);
          scale.add(this.mesh.scale, 'z').min(-10).max(10).step(0.1);
          up.add(this.mesh.up, 'x').min(-10).max(10).step(0.1);
          up.add(this.mesh.up, 'y').min(-10).max(10).step(0.1);
          up.add(this.mesh.up, 'z').min(-10).max(10).step(0.1);
          rotation.add(this.mesh.rotation, '_x').min(-10).max(10).step(0.1);
          rotation.add(this.mesh.rotation, '_y').min(-10).max(10).step(0.1);
          rotation.add(this.mesh.rotation, '_z').min(-10).max(10).step(0.1);
          quaternion.add(this.mesh.quaternion, '_x').min(-10).max(10).step(0.1);
          quaternion.add(this.mesh.quaternion, '_y').min(-10).max(10).step(0.1);
          quaternion.add(this.mesh.quaternion, '_z').min(-10).max(10).step(0.1);
          quaternion.add(this.mesh.quaternion, '_w').min(-10).max(10).step(0.1);
          renderOrder.add(this.mesh, 'renderOrder').min(-10).max(10).step(0.1);
          matrix.add(this.mesh.matrix.elements, '0').min(-10).max(10).step(0.1);
          matrix.add(this.mesh.matrix.elements, '1').min(-10).max(10).step(0.1);
          matrix.add(this.mesh.matrix.elements, '2').min(-10).max(10).step(0.1);
          matrix.add(this.mesh.matrix.elements, '3').min(-10).max(10).step(0.1);
          matrix.add(this.mesh.matrix.elements, '4').min(-10).max(10).step(0.1);
          matrix.add(this.mesh.matrix.elements, '5').min(-10).max(10).step(0.1);
          matrix.add(this.mesh.matrix.elements, '6').min(-10).max(10).step(0.1);
          matrix.add(this.mesh.matrix.elements, '7').min(-10).max(10).step(0.1);
          matrix.add(this.mesh.matrix.elements, '8').min(-10).max(10).step(0.1);
          matrix.add(this.mesh.matrix.elements, '9').min(-10).max(10).step(0.1);
          matrix.add(this.mesh.matrix.elements, '10').min(-10).max(10).step(0.1);
          matrix.add(this.mesh.matrix.elements, '11').min(-10).max(10).step(0.1);
          matrix.add(this.mesh.matrix.elements, '12').min(-10).max(10).step(0.1);
          matrix.add(this.mesh.matrix.elements, '13').min(-10).max(10).step(0.1);
          matrix.add(this.mesh.matrix.elements, '14').min(-10).max(10).step(0.1);
          matrix.add(this.mesh.matrix.elements, '15').min(-10).max(10).step(0.1);
          matrixWorld.add(this.mesh.matrixWorld.elements, '0').min(-10).max(10).step(0.1);
          matrixWorld.add(this.mesh.matrixWorld.elements, '1').min(-10).max(10).step(0.1);
          matrixWorld.add(this.mesh.matrixWorld.elements, '2').min(-10).max(10).step(0.1);
          matrixWorld.add(this.mesh.matrixWorld.elements, '3').min(-10).max(10).step(0.1);
          matrixWorld.add(this.mesh.matrixWorld.elements, '4').min(-10).max(10).step(0.1);
          matrixWorld.add(this.mesh.matrixWorld.elements, '5').min(-10).max(10).step(0.1);
          matrixWorld.add(this.mesh.matrixWorld.elements, '6').min(-10).max(10).step(0.1);
          matrixWorld.add(this.mesh.matrixWorld.elements, '7').min(-10).max(10).step(0.1);
          matrixWorld.add(this.mesh.matrixWorld.elements, '8').min(-10).max(10).step(0.1);
          matrixWorld.add(this.mesh.matrixWorld.elements, '9').min(-10).max(10).step(0.1);
          matrixWorld.add(this.mesh.matrixWorld.elements, '10').min(-10).max(10).step(0.1);
          matrixWorld.add(this.mesh.matrixWorld.elements, '11').min(-10).max(10).step(0.1);
          matrixWorld.add(this.mesh.matrixWorld.elements, '12').min(-10).max(10).step(0.1);
          matrixWorld.add(this.mesh.matrixWorld.elements, '13').min(-10).max(10).step(0.1);
          matrixWorld.add(this.mesh.matrixWorld.elements, '14').min(-10).max(10).step(0.1);
          matrixWorld.add(this.mesh.matrixWorld.elements, '15').min(-10).max(10).step(0.1);
          parameters.add(this.mesh.geometry.parameters, 'heightSegments').min(-50).max(50).step(1);
          parameters.add(this.mesh.geometry.parameters, 'radius').min(-50).max(50).step(1);
          parameters.add(this.mesh.geometry.parameters, 'widthSegments').min(-50).max(50).step(1);
      }*/

      this.group.add(this.mesh);
    }
  }, {
    key: "reset",
    value: function reset() {}
  }]);

  return ParticleBase;
}();

module.exports = ParticleBase;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SystemBase =
/*#__PURE__*/
function () {
  function SystemBase(loader) {
    _classCallCheck(this, SystemBase);

    this.loader = loader;
    this.calc = this.loader.calc;
    this.ease = this.loader.ease;
    this.sphereGeometry = new THREE.SphereBufferGeometry(1, 16, 16);
    this.boxGeometry = new THREE.BoxBufferGeometry(1, 1, 1);
    this.center = new THREE.Vector3();
    this.particles = [];
    this.particleGroup = new THREE.Object3D();
    this.particleGroup.scale.set(0.0001, 0.0001, 0.0001);
    this.loader.scene.add(this.particleGroup);
    this.entering = true;
    this.enterProgress = 0;
    this.enterRate = 0.1;
    this.exiting = false;
    this.exitProgress = 0;
    this.exitRate = 0.01;
    this.duration = Infinity;
  }

  _createClass(SystemBase, [{
    key: "update",
    value: function update() {
      var i = this.particles.length;

      while (i--) {
        this.particles[i].update();
      }

      if (this.entering && this.enterProgress < 1) {
        this.enterProgress += this.enterRate * this.loader.deltaTimeNormal;

        if (this.enterProgress > 1) {
          this.enterProgress = 1;
          this.entering = false;
        }

        var scale = this.ease.inOutExpo(this.enterProgress, 0, 1, 1);
        this.particleGroup.scale.set(scale, scale, scale);
      }

      if (!this.exiting && this.loader.elapsedMilliseconds > this.duration) {
        this.exiting = true;
      }

      if (this.exiting) {
        this.exitProgress += this.exitRate * this.loader.deltaTimeNormal;

        if (this.exitProgress >= 1 && !this.loader.completed) {
          this.exitProgress = 1;
          this.loader.complete();
        }
      }
    }
  }, {
    key: "replay",
    value: function replay() {
      this.particleGroup.scale.set(0.0001, 0.0001, 0.0001);
      var i = this.particles.length;

      while (i--) {
        this.particles[i].reset();
      }

      this.entering = true;
      this.enterProgress = 0;
      this.exiting = false;
      this.exitProgress = 0;
    }
  }]);

  return SystemBase;
}();

module.exports = SystemBase;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AxisHelper =
/*#__PURE__*/
function () {
  function AxisHelper(axisLength, opacity) {
    _classCallCheck(this, AxisHelper);

    this.object3d = new THREE.Object3D();
    this.axisLength = axisLength;
    this.opacity = opacity;
    this.createAxis(new THREE.Vector3(-this.axisLength, 0, 0), new THREE.Vector3(this.axisLength, 0, 0), new THREE.Color('hsl(0, 100%, 100%)'));
    this.createAxis(new THREE.Vector3(0, -this.axisLength, 0), new THREE.Vector3(0, this.axisLength, 0), new THREE.Color('hsl(120, 100%, 100%)'));
    this.createAxis(new THREE.Vector3(0, 0, -this.axisLength), new THREE.Vector3(0, 0, this.axisLength), new THREE.Color('hsl(240, 100%, 100%)'));
    return this.object3d;
  }

  _createClass(AxisHelper, [{
    key: "createAxis",
    value: function createAxis(p1, p2, color) {
      var geom = new THREE.Geometry();
      var mat = new THREE.LineBasicMaterial({
        color: color,
        opacity: this.opacity,
        transparent: true
      });
      geom.vertices.push(p1, p2);
      var line = new THREE.Line(geom, mat);
      this.object3d.add(line);
    }
  }]);

  return AxisHelper;
}();

module.exports = AxisHelper;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Calc =
/*#__PURE__*/
function () {
  function Calc() {
    _classCallCheck(this, Calc);
  }

  _createClass(Calc, [{
    key: "rand",

    /*
    ------------------------------------------
    | rand:float - returns random float
    |
    | min:number - minimum value
    | max:number - maximum value
    | ease:function - easing function to apply to the random value
    |
    | Get a random float between two values,
    | with the option of easing bias.
    ------------------------------------------ */
    value: function rand(min, max, ease) {
      if (max === undefined) {
        max = min;
        min = 0;
      }

      var random = Math.random();

      if (ease) {
        random = ease(Math.random(), 0, 1, 1);
      }

      return random * (max - min) + min;
    }
    /*
    ------------------------------------------
    | randInt:integer - returns random integer
    |
    | min:number - minimum value
    | max:number - maximum value
    | ease:function - easing function to apply to the random value
    |
    | Get a random integer between two values,
    | with the option of easing bias.
    ------------------------------------------ */

  }, {
    key: "randInt",
    value: function randInt(min, max, ease) {
      if (max === undefined) {
        max = min;
        min = 0;
      }

      var random = Math.random();

      if (ease) {
        random = ease(Math.random(), 0, 1, 1);
      }

      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    /*
    ------------------------------------------
    | randArr:item - returns random iem from array
    |
    | arr:array - the array to randomly pull from
    |
    | Get a random item from an array.
    ------------------------------------------ */

  }, {
    key: "randArr",
    value: function randArr(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    }
    /*
    ------------------------------------------
    | map:number - returns a mapped value
    |
    | val:number - input value
    | inputMin:number - minimum of input range
    | inputMax:number - maximum of input range
    | outputMin:number - minimum of output range
    | outputMax:number - maximum of output range
    |
    | Get a mapped value from and input min/max
    | to an output min/max.
    ------------------------------------------ */

  }, {
    key: "map",
    value: function map(val, inputMin, inputMax, outputMin, outputMax) {
      return (outputMax - outputMin) * ((val - inputMin) / (inputMax - inputMin)) + outputMin;
    }
    /*
    ------------------------------------------
    | clamp:number - returns clamped value
    |
    | val:number - value to be clamped
    | min:number - minimum of clamped range
    | max:number - maximum of clamped range
    |
    | Clamp a value to a min/max range.
    ------------------------------------------ */

  }, {
    key: "clamp",
    value: function clamp(val, min, max) {
      return Math.max(Math.min(val, max), min);
    }
  }, {
    key: "lerp",
    value: function lerp(current, target, mix) {
      return current + (target - current) * mix;
    }
    /*
    ------------------------------------------
    | roundToUpperInterval:number - returns rounded up value
    |
    | value:number - value to be rounded
    | interval:number - interval
    |
    | Round up a value to the next highest interval.
    ------------------------------------------ */

  }, {
    key: "roundToUpperInterval",
    value: function roundToUpperInterval(value, interval) {
      if (value % interval === 0) {
        value += 0.0001;
      }

      return Math.ceil(value / interval) * interval;
    }
    /*
    ------------------------------------------
    | roundDownToInterval:number - returns rounded down value
    |
    | value:number - value to be rounded
    | interval:number - interval
    |
    | Round down a value to the next lowest interval.
    ------------------------------------------ */

  }, {
    key: "roundToLowerInterval",
    value: function roundToLowerInterval(value, interval) {
      if (value % interval === 0) {
        value -= 0.0001;
      }

      return Math.floor(value / interval) * interval;
    }
    /*
    ------------------------------------------
    | roundToNearestInterval:number - returns rounded value
    |
    | value:number - value to be rounded
    | interval:number - interval
    |
    | Round a value to the nearest interval.
    ------------------------------------------ */

  }, {
    key: "roundToNearestInterval",
    value: function roundToNearestInterval(value, interval) {
      return Math.round(value / interval) * interval;
    }
    /*
    ------------------------------------------
    | intersectSphere:boolean - returns if intersecting or not
    |
    | a:object - sphere 1 with radius, x, y, and z
    | b:object - sphere 2 with radius, x, y, and z
    |
    | Check if two sphere are intersecting
    | in 3D space.
    ------------------------------------------ */

  }, {
    key: "intersectSphere",
    value: function intersectSphere(a, b) {
      var distance = Math.sqrt((a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y) + (a.z - b.z) * (a.z - b.z));
      return distance < a.radius + b.radius;
    }
    /*
    ------------------------------------------
    | getIndexFromCoords:number - returns index
    |
    | x:number - x value (column)
    | y:number - y value (row)
    | w:number - width of grid
    |
    | Convert from grid coords to index.
    ------------------------------------------ */

  }, {
    key: "getIndexFromCoords",
    value: function getIndexFromCoords(x, y, w) {
      return x + y * w;
    }
    /*
    ------------------------------------------
    | getCoordsFromIndex:object - returns coords
    |
    | i:number - index
    | w:number - width of grid
    |
    | Convert from index to grid coords.
    ------------------------------------------ */

  }, {
    key: "getCoordsFromIndex",
    value: function getCoordsFromIndex(i, w) {
      return {
        x: i % w,
        y: Math.floor(i / w)
      };
    }
  }, {
    key: "visibleHeightAtZDepth",
    value: function visibleHeightAtZDepth(depth, camera) {
      // https://discourse.threejs.org/t/functions-to-calculate-the-visible-width-height-at-a-given-z-depth-from-a-perspective-camera/269
      var cameraOffset = camera.position.z;
      if (depth < cameraOffset) depth -= cameraOffset;else depth += cameraOffset;
      var vFOV = camera.fov * Math.PI / 180;
      return 2 * Math.tan(vFOV / 2) * Math.abs(depth);
    }
  }, {
    key: "visibleWidthAtZDepth",
    value: function visibleWidthAtZDepth(depth, camera) {
      // https://discourse.threejs.org/t/functions-to-calculate-the-visible-width-height-at-a-given-z-depth-from-a-perspective-camera/269
      var height = this.visibleHeightAtZDepth(depth, camera);
      return height * camera.aspect;
    }
  }]);

  return Calc;
}();

module.exports = Calc;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Ease =
/*#__PURE__*/
function () {
  function Ease() {
    _classCallCheck(this, Ease);
  }
  /*
  ------------------------------------------
  | inQuad:float - returns eased float value
  |
  | t:number - current time
  | b:number - beginning value
  | c:number - change in value
  | d:number - duration
  |
  | Get an eased float value based on inQuad.
  ------------------------------------------ */


  _createClass(Ease, [{
    key: "inQuad",
    value: function inQuad(t, b, c, d) {
      return c * (t /= d) * t + b;
    }
    /*
    ------------------------------------------
    | outQuad:float - returns eased float value
    |
    | t:number - current time
    | b:number - beginning value
    | c:number - change in value
    | d:number - duration
    |
    | Get an eased float value based on outQuad.
    ------------------------------------------ */

  }, {
    key: "outQuad",
    value: function outQuad(t, b, c, d) {
      return -c * (t /= d) * (t - 2) + b;
    }
    /*
    ------------------------------------------
    | inOutQuad:float - returns eased float value
    |
    | t:number - current time
    | b:number - beginning value
    | c:number - change in value
    | d:number - duration
    |
    | Get an eased float value based on inOutQuad.
    ------------------------------------------ */

  }, {
    key: "inOutQuad",
    value: function inOutQuad(t, b, c, d) {
      if ((t /= d / 2) < 1) return c / 2 * t * t + b;
      return -c / 2 * (--t * (t - 2) - 1) + b;
    }
    /*
    ------------------------------------------
    | inCubic:float - returns eased float value
    |
    | t:number - current time
    | b:number - beginning value
    | c:number - change in value
    | d:number - duration
    |
    | Get an eased float value based on inCubic.
    ------------------------------------------ */

  }, {
    key: "inCubic",
    value: function inCubic(t, b, c, d) {
      return c * (t /= d) * t * t + b;
    }
    /*
    ------------------------------------------
    | outCubic:float - returns eased float value
    |
    | t:number - current time
    | b:number - beginning value
    | c:number - change in value
    | d:number - duration
    |
    | Get an eased float value based on outCubic.
    ------------------------------------------ */

  }, {
    key: "outCubic",
    value: function outCubic(t, b, c, d) {
      return c * ((t = t / d - 1) * t * t + 1) + b;
    }
    /*
    ------------------------------------------
    | inOutCubic:float - returns eased float value
    |
    | t:number - current time
    | b:number - beginning value
    | c:number - change in value
    | d:number - duration
    |
    | Get an eased float value based on inOutCubic.
    ------------------------------------------ */

  }, {
    key: "inOutCubic",
    value: function inOutCubic(t, b, c, d) {
      if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
      return c / 2 * ((t -= 2) * t * t + 2) + b;
    }
    /*
    ------------------------------------------
    | inQuart:float - returns eased float value
    |
    | t:number - current time
    | b:number - beginning value
    | c:number - change in value
    | d:number - duration
    |
    | Get an eased float value based on inQuart.
    ------------------------------------------ */

  }, {
    key: "inQuart",
    value: function inQuart(t, b, c, d) {
      return c * (t /= d) * t * t * t + b;
    }
    /*
    ------------------------------------------
    | outQuart:float - returns eased float value
    |
    | t:number - current time
    | b:number - beginning value
    | c:number - change in value
    | d:number - duration
    |
    | Get an eased float value based on outQuart.
    ------------------------------------------ */

  }, {
    key: "outQuart",
    value: function outQuart(t, b, c, d) {
      return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    }
    /*
    ------------------------------------------
    | inOutQuart:float - returns eased float value
    |
    | t:number - current time
    | b:number - beginning value
    | c:number - change in value
    | d:number - duration
    |
    | Get an eased float value based on inOutQuart.
    ------------------------------------------ */

  }, {
    key: "inOutQuart",
    value: function inOutQuart(t, b, c, d) {
      if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
      return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
    }
    /*
    ------------------------------------------
    | inQuint:float - returns eased float value
    |
    | t:number - current time
    | b:number - beginning value
    | c:number - change in value
    | d:number - duration
    |
    | Get an eased float value based on inQuint.
    ------------------------------------------ */

  }, {
    key: "inQuint",
    value: function inQuint(t, b, c, d) {
      return c * (t /= d) * t * t * t * t + b;
    }
    /*
    ------------------------------------------
    | outQuint:float - returns eased float value
    |
    | t:number - current time
    | b:number - beginning value
    | c:number - change in value
    | d:number - duration
    |
    | Get an eased float value based on outQuint.
    ------------------------------------------ */

  }, {
    key: "outQuint",
    value: function outQuint(t, b, c, d) {
      return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    }
    /*
    ------------------------------------------
    | inOutQuint:float - returns eased float value
    |
    | t:number - current time
    | b:number - beginning value
    | c:number - change in value
    | d:number - duration
    |
    | Get an eased float value based on inOutQuint.
    ------------------------------------------ */

  }, {
    key: "inOutQuint",
    value: function inOutQuint(t, b, c, d) {
      if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
      return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    }
    /*
    ------------------------------------------
    | inSine:float - returns eased float value
    |
    | t:number - current time
    | b:number - beginning value
    | c:number - change in value
    | d:number - duration
    |
    | Get an eased float value based on inSine.
    ------------------------------------------ */

  }, {
    key: "inSine",
    value: function inSine(t, b, c, d) {
      return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
    }
    /*
    ------------------------------------------
    | outSine:float - returns eased float value
    |
    | t:number - current time
    | b:number - beginning value
    | c:number - change in value
    | d:number - duration
    |
    | Get an eased float value based on outSine.
    ------------------------------------------ */

  }, {
    key: "outSine",
    value: function outSine(t, b, c, d) {
      return c * Math.sin(t / d * (Math.PI / 2)) + b;
    }
    /*
    ------------------------------------------
    | inOutSine:float - returns eased float value
    |
    | t:number - current time
    | b:number - beginning value
    | c:number - change in value
    | d:number - duration
    |
    | Get an eased float value based on inOutSine.
    ------------------------------------------ */

  }, {
    key: "inOutSine",
    value: function inOutSine(t, b, c, d) {
      return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    }
    /*
    ------------------------------------------
    | inExpo:float - returns eased float value
    |
    | t:number - current time
    | b:number - beginning value
    | c:number - change in value
    | d:number - duration
    |
    | Get an eased float value based on inExpo.
    ------------------------------------------ */

  }, {
    key: "inExpo",
    value: function inExpo(t, b, c, d) {
      return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
    }
    /*
    ------------------------------------------
    | outExpo:float - returns eased float value
    |
    | t:number - current time
    | b:number - beginning value
    | c:number - change in value
    | d:number - duration
    |
    | Get an eased float value based on outExpo.
    ------------------------------------------ */

  }, {
    key: "outExpo",
    value: function outExpo(t, b, c, d) {
      return t == d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
    }
    /*
    ------------------------------------------
    | inOutExpo:float - returns eased float value
    |
    | t:number - current time
    | b:number - beginning value
    | c:number - change in value
    | d:number - duration
    |
    | Get an eased float value based on inOutExpo.
    ------------------------------------------ */

  }, {
    key: "inOutExpo",
    value: function inOutExpo(t, b, c, d) {
      if (t == 0) return b;
      if (t == d) return b + c;
      if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
      return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    }
    /*
    ------------------------------------------
    | inCirc:float - returns eased float value
    |
    | t:number - current time
    | b:number - beginning value
    | c:number - change in value
    | d:number - duration
    |
    | Get an eased float value based on inCirc.
    ------------------------------------------ */

  }, {
    key: "inCirc",
    value: function inCirc(t, b, c, d) {
      return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
    }
    /*
    ------------------------------------------
    | outCirc:float - returns eased float value
    |
    | t:number - current time
    | b:number - beginning value
    | c:number - change in value
    | d:number - duration
    |
    | Get an eased float value based on outCirc.
    ------------------------------------------ */

  }, {
    key: "outCirc",
    value: function outCirc(t, b, c, d) {
      return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
    }
    /*
    ------------------------------------------
    | inOutCirc:float - returns eased float value
    |
    | t:number - current time
    | b:number - beginning value
    | c:number - change in value
    | d:number - duration
    |
    | Get an eased float value based on inOutCirc.
    ------------------------------------------ */

  }, {
    key: "inOutCirc",
    value: function inOutCirc(t, b, c, d) {
      if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
      return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    }
    /*
    ------------------------------------------
    | inElastic:float - returns eased float value
    |
    | t:number - current time
    | b:number - beginning value
    | c:number - change in value
    | d:number - duration
    |
    | Get an eased float value based on inElastic.
    ------------------------------------------ */

  }, {
    key: "inElastic",
    value: function inElastic(t, b, c, d) {
      var s = 1.70158;
      var p = 0;
      var a = c;
      if (t == 0) return b;
      if ((t /= d) == 1) return b + c;
      if (!p) p = d * .3;

      if (a < Math.abs(c)) {
        a = c;

        var _s = p / 4;
      } else s = p / (2 * Math.PI) * Math.asin(c / a);

      return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    }
    /*
    ------------------------------------------
    | outElastic:float - returns eased float value
    |
    | t:number - current time
    | b:number - beginning value
    | c:number - change in value
    | d:number - duration
    |
    | Get an eased float value based on outElastic.
    ------------------------------------------ */

  }, {
    key: "outElastic",
    value: function outElastic(t, b, c, d) {
      var s = 1.70158;
      var p = 0;
      var a = c;
      if (t == 0) return b;
      if ((t /= d) == 1) return b + c;
      if (!p) p = d * .3;

      if (a < Math.abs(c)) {
        a = c;

        var _s2 = p / 4;
      } else s = p / (2 * Math.PI) * Math.asin(c / a);

      return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
    }
    /*
    ------------------------------------------
    | inOutElastic:float - returns eased float value
    |
    | t:number - current time
    | b:number - beginning value
    | c:number - change in value
    | d:number - duration
    |
    | Get an eased float value based on inOutElastic.
    ------------------------------------------ */

  }, {
    key: "inOutElastic",
    value: function inOutElastic(t, b, c, d) {
      var s = 1.70158;
      var p = 0;
      var a = c;
      if (t == 0) return b;
      if ((t /= d / 2) == 2) return b + c;
      if (!p) p = d * (.3 * 1.5);

      if (a < Math.abs(c)) {
        a = c;

        var _s3 = p / 4;
      } else s = p / (2 * Math.PI) * Math.asin(c / a);

      if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
      return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
    }
    /*
    ------------------------------------------
    | inBack:float - returns eased float value
    |
    | t:number - current time
    | b:number - beginning value
    | c:number - change in value
    | d:number - duration
    | s:number - strength
    |
    | Get an eased float value based on inBack.
    ------------------------------------------ */

  }, {
    key: "inBack",
    value: function inBack(t, b, c, d, s) {
      if (s == undefined) s = 1.70158;
      return c * (t /= d) * t * ((s + 1) * t - s) + b;
    }
    /*
    ------------------------------------------
    | outBack:float - returns eased float value
    |
    | t:number - current time
    | b:number - beginning value
    | c:number - change in value
    | d:number - duration
    | s:number - strength
    |
    | Get an eased float value based on outBack.
    ------------------------------------------ */

  }, {
    key: "outBack",
    value: function outBack(t, b, c, d, s) {
      if (s == undefined) s = 1.70158;
      return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    }
    /*
    ------------------------------------------
    | inOutBack:float - returns eased float value
    |
    | t:number - current time
    | b:number - beginning value
    | c:number - change in value
    | d:number - duration
    | s:number - strength
    |
    | Get an eased float value based on inOutBack.
    ------------------------------------------ */

  }, {
    key: "inOutBack",
    value: function inOutBack(t, b, c, d, s) {
      if (s == undefined) s = 1.70158;
      if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
      return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
    }
  }]);

  return Ease;
}();

module.exports = Ease;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Osc =
/*#__PURE__*/
function () {
  function Osc(val, rate) {
    var dir = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var flip = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    _classCallCheck(this, Osc);

    this._val = val;
    this._rate = rate;
    this._dir = dir;
    this._flip = flip;
    this._valBase = val;
    this._rateBase = rate;
    this._dirBase = dir;
    this._flipBase = flip;
    this.trigger = false;
    this.triggerTop = false;
    this.triggerBot = false;
  }

  _createClass(Osc, [{
    key: "reset",
    value: function reset() {
      this._val = this._valBase;
      this._rate = this._rateBase;
      this._dir = this._dirBase;
      this._flip = this._flipBase;
      this.trigger = false;
      this.triggerTop = false;
      this.triggerBot = false;
    }
  }, {
    key: "update",
    value: function update(dt) {
      this.trigger = false;
      this.triggerTop = false;
      this.triggerBot = false;

      if (this._dir) {
        if (this._val < 1) {
          this._val += this._rate * dt;
        } else {
          this.trigger = true;
          this.triggerTop = true;

          if (this._flip) {
            this._val = this._val - 1;
          } else {
            this._val = 1 - (this._val - 1);
            this._dir = !this._dir;
          }
        }
      } else {
        if (this._val > 0) {
          this._val -= this._rate * dt;
        } else {
          this.trigger = true;
          this.triggerBot = true;

          if (this._flip) {
            this._val = 1 + this._val;
          } else {
            this._val = -this._val;
            this._dir = !this._dir;
          }
        }
      }
    }
  }, {
    key: "val",
    value: function val(ease) {
      if (ease) {
        return ease(this._val, 0, 1, 1);
      } else {
        return this._val;
      }
    }
  }]);

  return Osc;
}();

module.exports = Osc;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(0);

__webpack_require__(3);

__webpack_require__(4);

__webpack_require__(2);

__webpack_require__(8);

/***/ })
/******/ ]);
//# sourceMappingURL=main.bundle.js.map