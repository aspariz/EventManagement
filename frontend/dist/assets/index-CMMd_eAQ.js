function Lp(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function Ec(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var bc={exports:{}},hi={},Nc={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wr=Symbol.for("react.element"),Ap=Symbol.for("react.portal"),zp=Symbol.for("react.fragment"),Dp=Symbol.for("react.strict_mode"),Mp=Symbol.for("react.profiler"),Ip=Symbol.for("react.provider"),Fp=Symbol.for("react.context"),Up=Symbol.for("react.forward_ref"),Bp=Symbol.for("react.suspense"),$p=Symbol.for("react.memo"),Hp=Symbol.for("react.lazy"),Ia=Symbol.iterator;function Wp(e){return e===null||typeof e!="object"?null:(e=Ia&&e[Ia]||e["@@iterator"],typeof e=="function"?e:null)}var Cc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},jc=Object.assign,Rc={};function Vn(e,t,n){this.props=e,this.context=t,this.refs=Rc,this.updater=n||Cc}Vn.prototype.isReactComponent={};Vn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Vn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Pc(){}Pc.prototype=Vn.prototype;function Rs(e,t,n){this.props=e,this.context=t,this.refs=Rc,this.updater=n||Cc}var Ps=Rs.prototype=new Pc;Ps.constructor=Rs;jc(Ps,Vn.prototype);Ps.isPureReactComponent=!0;var Fa=Array.isArray,_c=Object.prototype.hasOwnProperty,_s={current:null},Tc={key:!0,ref:!0,__self:!0,__source:!0};function Oc(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)_c.call(t,r)&&!Tc.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var a=Array(s),u=0;u<s;u++)a[u]=arguments[u+2];o.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:Wr,type:e,key:i,ref:l,props:o,_owner:_s.current}}function Vp(e,t){return{$$typeof:Wr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ts(e){return typeof e=="object"&&e!==null&&e.$$typeof===Wr}function Kp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ua=/\/+/g;function Hi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Kp(""+e.key):t.toString(36)}function Eo(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Wr:case Ap:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+Hi(l,0):r,Fa(o)?(n="",e!=null&&(n=e.replace(Ua,"$&/")+"/"),Eo(o,t,n,"",function(u){return u})):o!=null&&(Ts(o)&&(o=Vp(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(Ua,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",Fa(e))for(var s=0;s<e.length;s++){i=e[s];var a=r+Hi(i,s);l+=Eo(i,t,n,a,o)}else if(a=Wp(e),typeof a=="function")for(e=a.call(e),s=0;!(i=e.next()).done;)i=i.value,a=r+Hi(i,s++),l+=Eo(i,t,n,a,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function ro(e,t,n){if(e==null)return e;var r=[],o=0;return Eo(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Gp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Se={current:null},bo={transition:null},Qp={ReactCurrentDispatcher:Se,ReactCurrentBatchConfig:bo,ReactCurrentOwner:_s};function Lc(){throw Error("act(...) is not supported in production builds of React.")}z.Children={map:ro,forEach:function(e,t,n){ro(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ro(e,function(){t++}),t},toArray:function(e){return ro(e,function(t){return t})||[]},only:function(e){if(!Ts(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};z.Component=Vn;z.Fragment=zp;z.Profiler=Mp;z.PureComponent=Rs;z.StrictMode=Dp;z.Suspense=Bp;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qp;z.act=Lc;z.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=jc({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=_s.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)_c.call(t,a)&&!Tc.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var u=0;u<a;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Wr,type:e.type,key:o,ref:i,props:r,_owner:l}};z.createContext=function(e){return e={$$typeof:Fp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ip,_context:e},e.Consumer=e};z.createElement=Oc;z.createFactory=function(e){var t=Oc.bind(null,e);return t.type=e,t};z.createRef=function(){return{current:null}};z.forwardRef=function(e){return{$$typeof:Up,render:e}};z.isValidElement=Ts;z.lazy=function(e){return{$$typeof:Hp,_payload:{_status:-1,_result:e},_init:Gp}};z.memo=function(e,t){return{$$typeof:$p,type:e,compare:t===void 0?null:t}};z.startTransition=function(e){var t=bo.transition;bo.transition={};try{e()}finally{bo.transition=t}};z.unstable_act=Lc;z.useCallback=function(e,t){return Se.current.useCallback(e,t)};z.useContext=function(e){return Se.current.useContext(e)};z.useDebugValue=function(){};z.useDeferredValue=function(e){return Se.current.useDeferredValue(e)};z.useEffect=function(e,t){return Se.current.useEffect(e,t)};z.useId=function(){return Se.current.useId()};z.useImperativeHandle=function(e,t,n){return Se.current.useImperativeHandle(e,t,n)};z.useInsertionEffect=function(e,t){return Se.current.useInsertionEffect(e,t)};z.useLayoutEffect=function(e,t){return Se.current.useLayoutEffect(e,t)};z.useMemo=function(e,t){return Se.current.useMemo(e,t)};z.useReducer=function(e,t,n){return Se.current.useReducer(e,t,n)};z.useRef=function(e){return Se.current.useRef(e)};z.useState=function(e){return Se.current.useState(e)};z.useSyncExternalStore=function(e,t,n){return Se.current.useSyncExternalStore(e,t,n)};z.useTransition=function(){return Se.current.useTransition()};z.version="18.3.1";Nc.exports=z;var E=Nc.exports;const Os=Ec(E),qp=Lp({__proto__:null,default:Os},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jp=E,Xp=Symbol.for("react.element"),Yp=Symbol.for("react.fragment"),Zp=Object.prototype.hasOwnProperty,e0=Jp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,t0={key:!0,ref:!0,__self:!0,__source:!0};function Ac(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Zp.call(t,r)&&!t0.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Xp,type:e,key:i,ref:l,props:o,_owner:e0.current}}hi.Fragment=Yp;hi.jsx=Ac;hi.jsxs=Ac;bc.exports=hi;var c=bc.exports,El={},zc={exports:{}},Me={},Dc={exports:{}},Mc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,L){var O=R.length;R.push(L);e:for(;0<O;){var I=O-1>>>1,Y=R[I];if(0<o(Y,L))R[I]=L,R[O]=Y,O=I;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var L=R[0],O=R.pop();if(O!==L){R[0]=O;e:for(var I=0,Y=R.length,Z=Y>>>1;I<Z;){var pe=2*(I+1)-1,be=R[pe],Ke=pe+1,Ne=R[Ke];if(0>o(be,O))Ke<Y&&0>o(Ne,be)?(R[I]=Ne,R[Ke]=O,I=Ke):(R[I]=be,R[pe]=O,I=pe);else if(Ke<Y&&0>o(Ne,O))R[I]=Ne,R[Ke]=O,I=Ke;else break e}}return L}function o(R,L){var O=R.sortIndex-L.sortIndex;return O!==0?O:R.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var a=[],u=[],d=1,h=null,g=3,x=!1,S=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(R){for(var L=n(u);L!==null;){if(L.callback===null)r(u);else if(L.startTime<=R)r(u),L.sortIndex=L.expirationTime,t(a,L);else break;L=n(u)}}function w(R){if(y=!1,f(R),!S)if(n(a)!==null)S=!0,at(N);else{var L=n(u);L!==null&&Zn(w,L.startTime-R)}}function N(R,L){S=!1,y&&(y=!1,m(_),_=-1),x=!0;var O=g;try{for(f(L),h=n(a);h!==null&&(!(h.expirationTime>L)||R&&!X());){var I=h.callback;if(typeof I=="function"){h.callback=null,g=h.priorityLevel;var Y=I(h.expirationTime<=L);L=e.unstable_now(),typeof Y=="function"?h.callback=Y:h===n(a)&&r(a),f(L)}else r(a);h=n(a)}if(h!==null)var Z=!0;else{var pe=n(u);pe!==null&&Zn(w,pe.startTime-L),Z=!1}return Z}finally{h=null,g=O,x=!1}}var b=!1,j=null,_=-1,U=5,A=-1;function X(){return!(e.unstable_now()-A<U)}function tt(){if(j!==null){var R=e.unstable_now();A=R;var L=!0;try{L=j(!0,R)}finally{L?Et():(b=!1,j=null)}}else b=!1}var Et;if(typeof p=="function")Et=function(){p(tt)};else if(typeof MessageChannel<"u"){var Oe=new MessageChannel,Yn=Oe.port2;Oe.port1.onmessage=tt,Et=function(){Yn.postMessage(null)}}else Et=function(){v(tt,0)};function at(R){j=R,b||(b=!0,Et())}function Zn(R,L){_=v(function(){R(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){S||x||(S=!0,at(N))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(R){switch(g){case 1:case 2:case 3:var L=3;break;default:L=g}var O=g;g=L;try{return R()}finally{g=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,L){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var O=g;g=R;try{return L()}finally{g=O}},e.unstable_scheduleCallback=function(R,L,O){var I=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?I+O:I):O=I,R){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=O+Y,R={id:d++,callback:L,priorityLevel:R,startTime:O,expirationTime:Y,sortIndex:-1},O>I?(R.sortIndex=O,t(u,R),n(a)===null&&R===n(u)&&(y?(m(_),_=-1):y=!0,Zn(w,O-I))):(R.sortIndex=Y,t(a,R),S||x||(S=!0,at(N))),R},e.unstable_shouldYield=X,e.unstable_wrapCallback=function(R){var L=g;return function(){var O=g;g=L;try{return R.apply(this,arguments)}finally{g=O}}}})(Mc);Dc.exports=Mc;var n0=Dc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r0=E,De=n0;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ic=new Set,br={};function fn(e,t){zn(e,t),zn(e+"Capture",t)}function zn(e,t){for(br[e]=t,e=0;e<t.length;e++)Ic.add(t[e])}var mt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bl=Object.prototype.hasOwnProperty,o0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ba={},$a={};function i0(e){return bl.call($a,e)?!0:bl.call(Ba,e)?!1:o0.test(e)?$a[e]=!0:(Ba[e]=!0,!1)}function l0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function s0(e,t,n,r){if(t===null||typeof t>"u"||l0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ee(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){fe[e]=new Ee(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];fe[t]=new Ee(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){fe[e]=new Ee(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){fe[e]=new Ee(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){fe[e]=new Ee(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){fe[e]=new Ee(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){fe[e]=new Ee(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){fe[e]=new Ee(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){fe[e]=new Ee(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ls=/[\-:]([a-z])/g;function As(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ls,As);fe[t]=new Ee(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ls,As);fe[t]=new Ee(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ls,As);fe[t]=new Ee(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){fe[e]=new Ee(e,1,!1,e.toLowerCase(),null,!1,!1)});fe.xlinkHref=new Ee("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){fe[e]=new Ee(e,1,!1,e.toLowerCase(),null,!0,!0)});function zs(e,t,n,r){var o=fe.hasOwnProperty(t)?fe[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(s0(t,n,o,r)&&(n=null),r||o===null?i0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var wt=r0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,oo=Symbol.for("react.element"),yn=Symbol.for("react.portal"),xn=Symbol.for("react.fragment"),Ds=Symbol.for("react.strict_mode"),Nl=Symbol.for("react.profiler"),Fc=Symbol.for("react.provider"),Uc=Symbol.for("react.context"),Ms=Symbol.for("react.forward_ref"),Cl=Symbol.for("react.suspense"),jl=Symbol.for("react.suspense_list"),Is=Symbol.for("react.memo"),Ct=Symbol.for("react.lazy"),Bc=Symbol.for("react.offscreen"),Ha=Symbol.iterator;function tr(e){return e===null||typeof e!="object"?null:(e=Ha&&e[Ha]||e["@@iterator"],typeof e=="function"?e:null)}var q=Object.assign,Wi;function dr(e){if(Wi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Wi=t&&t[1]||""}return`
`+Wi+e}var Vi=!1;function Ki(e,t){if(!e||Vi)return"";Vi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,s=i.length-1;1<=l&&0<=s&&o[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(o[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||o[l]!==i[s]){var a=`
`+o[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=s);break}}}finally{Vi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?dr(e):""}function a0(e){switch(e.tag){case 5:return dr(e.type);case 16:return dr("Lazy");case 13:return dr("Suspense");case 19:return dr("SuspenseList");case 0:case 2:case 15:return e=Ki(e.type,!1),e;case 11:return e=Ki(e.type.render,!1),e;case 1:return e=Ki(e.type,!0),e;default:return""}}function Rl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case xn:return"Fragment";case yn:return"Portal";case Nl:return"Profiler";case Ds:return"StrictMode";case Cl:return"Suspense";case jl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Uc:return(e.displayName||"Context")+".Consumer";case Fc:return(e._context.displayName||"Context")+".Provider";case Ms:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Is:return t=e.displayName||null,t!==null?t:Rl(e.type)||"Memo";case Ct:t=e._payload,e=e._init;try{return Rl(e(t))}catch{}}return null}function u0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Rl(t);case 8:return t===Ds?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ht(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function $c(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function c0(e){var t=$c(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function io(e){e._valueTracker||(e._valueTracker=c0(e))}function Hc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=$c(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Fo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Pl(e,t){var n=t.checked;return q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Wa(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ht(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Wc(e,t){t=t.checked,t!=null&&zs(e,"checked",t,!1)}function _l(e,t){Wc(e,t);var n=Ht(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Tl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Tl(e,t.type,Ht(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Va(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Tl(e,t,n){(t!=="number"||Fo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var fr=Array.isArray;function Pn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ht(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Ol(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ka(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(C(92));if(fr(n)){if(1<n.length)throw Error(C(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ht(n)}}function Vc(e,t){var n=Ht(t.value),r=Ht(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ga(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Kc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ll(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Kc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var lo,Gc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(lo=lo||document.createElement("div"),lo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=lo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Nr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var mr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},d0=["Webkit","ms","Moz","O"];Object.keys(mr).forEach(function(e){d0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),mr[t]=mr[e]})});function Qc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||mr.hasOwnProperty(e)&&mr[e]?(""+t).trim():t+"px"}function qc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Qc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var f0=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Al(e,t){if(t){if(f0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function zl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dl=null;function Fs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ml=null,_n=null,Tn=null;function Qa(e){if(e=Gr(e)){if(typeof Ml!="function")throw Error(C(280));var t=e.stateNode;t&&(t=vi(t),Ml(e.stateNode,e.type,t))}}function Jc(e){_n?Tn?Tn.push(e):Tn=[e]:_n=e}function Xc(){if(_n){var e=_n,t=Tn;if(Tn=_n=null,Qa(e),t)for(e=0;e<t.length;e++)Qa(t[e])}}function Yc(e,t){return e(t)}function Zc(){}var Gi=!1;function ed(e,t,n){if(Gi)return e(t,n);Gi=!0;try{return Yc(e,t,n)}finally{Gi=!1,(_n!==null||Tn!==null)&&(Zc(),Xc())}}function Cr(e,t){var n=e.stateNode;if(n===null)return null;var r=vi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(C(231,t,typeof n));return n}var Il=!1;if(mt)try{var nr={};Object.defineProperty(nr,"passive",{get:function(){Il=!0}}),window.addEventListener("test",nr,nr),window.removeEventListener("test",nr,nr)}catch{Il=!1}function p0(e,t,n,r,o,i,l,s,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var gr=!1,Uo=null,Bo=!1,Fl=null,h0={onError:function(e){gr=!0,Uo=e}};function m0(e,t,n,r,o,i,l,s,a){gr=!1,Uo=null,p0.apply(h0,arguments)}function g0(e,t,n,r,o,i,l,s,a){if(m0.apply(this,arguments),gr){if(gr){var u=Uo;gr=!1,Uo=null}else throw Error(C(198));Bo||(Bo=!0,Fl=u)}}function pn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function td(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function qa(e){if(pn(e)!==e)throw Error(C(188))}function y0(e){var t=e.alternate;if(!t){if(t=pn(e),t===null)throw Error(C(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return qa(o),e;if(i===r)return qa(o),t;i=i.sibling}throw Error(C(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?e:t}function nd(e){return e=y0(e),e!==null?rd(e):null}function rd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=rd(e);if(t!==null)return t;e=e.sibling}return null}var od=De.unstable_scheduleCallback,Ja=De.unstable_cancelCallback,x0=De.unstable_shouldYield,v0=De.unstable_requestPaint,ee=De.unstable_now,w0=De.unstable_getCurrentPriorityLevel,Us=De.unstable_ImmediatePriority,id=De.unstable_UserBlockingPriority,$o=De.unstable_NormalPriority,k0=De.unstable_LowPriority,ld=De.unstable_IdlePriority,mi=null,lt=null;function S0(e){if(lt&&typeof lt.onCommitFiberRoot=="function")try{lt.onCommitFiberRoot(mi,e,void 0,(e.current.flags&128)===128)}catch{}}var Xe=Math.clz32?Math.clz32:N0,E0=Math.log,b0=Math.LN2;function N0(e){return e>>>=0,e===0?32:31-(E0(e)/b0|0)|0}var so=64,ao=4194304;function pr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ho(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~o;s!==0?r=pr(s):(i&=l,i!==0&&(r=pr(i)))}else l=n&~o,l!==0?r=pr(l):i!==0&&(r=pr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Xe(t),o=1<<n,r|=e[n],t&=~o;return r}function C0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function j0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-Xe(i),s=1<<l,a=o[l];a===-1?(!(s&n)||s&r)&&(o[l]=C0(s,t)):a<=t&&(e.expiredLanes|=s),i&=~s}}function Ul(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function sd(){var e=so;return so<<=1,!(so&4194240)&&(so=64),e}function Qi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Vr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Xe(t),e[t]=n}function R0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Xe(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Bs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Xe(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var F=0;function ad(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ud,$s,cd,dd,fd,Bl=!1,uo=[],At=null,zt=null,Dt=null,jr=new Map,Rr=new Map,Rt=[],P0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xa(e,t){switch(e){case"focusin":case"focusout":At=null;break;case"dragenter":case"dragleave":zt=null;break;case"mouseover":case"mouseout":Dt=null;break;case"pointerover":case"pointerout":jr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rr.delete(t.pointerId)}}function rr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Gr(t),t!==null&&$s(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function _0(e,t,n,r,o){switch(t){case"focusin":return At=rr(At,e,t,n,r,o),!0;case"dragenter":return zt=rr(zt,e,t,n,r,o),!0;case"mouseover":return Dt=rr(Dt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return jr.set(i,rr(jr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Rr.set(i,rr(Rr.get(i)||null,e,t,n,r,o)),!0}return!1}function pd(e){var t=Xt(e.target);if(t!==null){var n=pn(t);if(n!==null){if(t=n.tag,t===13){if(t=td(n),t!==null){e.blockedOn=t,fd(e.priority,function(){cd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function No(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=$l(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Dl=r,n.target.dispatchEvent(r),Dl=null}else return t=Gr(n),t!==null&&$s(t),e.blockedOn=n,!1;t.shift()}return!0}function Ya(e,t,n){No(e)&&n.delete(t)}function T0(){Bl=!1,At!==null&&No(At)&&(At=null),zt!==null&&No(zt)&&(zt=null),Dt!==null&&No(Dt)&&(Dt=null),jr.forEach(Ya),Rr.forEach(Ya)}function or(e,t){e.blockedOn===t&&(e.blockedOn=null,Bl||(Bl=!0,De.unstable_scheduleCallback(De.unstable_NormalPriority,T0)))}function Pr(e){function t(o){return or(o,e)}if(0<uo.length){or(uo[0],e);for(var n=1;n<uo.length;n++){var r=uo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(At!==null&&or(At,e),zt!==null&&or(zt,e),Dt!==null&&or(Dt,e),jr.forEach(t),Rr.forEach(t),n=0;n<Rt.length;n++)r=Rt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Rt.length&&(n=Rt[0],n.blockedOn===null);)pd(n),n.blockedOn===null&&Rt.shift()}var On=wt.ReactCurrentBatchConfig,Wo=!0;function O0(e,t,n,r){var o=F,i=On.transition;On.transition=null;try{F=1,Hs(e,t,n,r)}finally{F=o,On.transition=i}}function L0(e,t,n,r){var o=F,i=On.transition;On.transition=null;try{F=4,Hs(e,t,n,r)}finally{F=o,On.transition=i}}function Hs(e,t,n,r){if(Wo){var o=$l(e,t,n,r);if(o===null)ol(e,t,r,Vo,n),Xa(e,r);else if(_0(o,e,t,n,r))r.stopPropagation();else if(Xa(e,r),t&4&&-1<P0.indexOf(e)){for(;o!==null;){var i=Gr(o);if(i!==null&&ud(i),i=$l(e,t,n,r),i===null&&ol(e,t,r,Vo,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else ol(e,t,r,null,n)}}var Vo=null;function $l(e,t,n,r){if(Vo=null,e=Fs(r),e=Xt(e),e!==null)if(t=pn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=td(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Vo=e,null}function hd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(w0()){case Us:return 1;case id:return 4;case $o:case k0:return 16;case ld:return 536870912;default:return 16}default:return 16}}var Tt=null,Ws=null,Co=null;function md(){if(Co)return Co;var e,t=Ws,n=t.length,r,o="value"in Tt?Tt.value:Tt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return Co=o.slice(e,1<r?1-r:void 0)}function jo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function co(){return!0}function Za(){return!1}function Ie(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?co:Za,this.isPropagationStopped=Za,this}return q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=co)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=co)},persist:function(){},isPersistent:co}),t}var Kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vs=Ie(Kn),Kr=q({},Kn,{view:0,detail:0}),A0=Ie(Kr),qi,Ji,ir,gi=q({},Kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ks,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ir&&(ir&&e.type==="mousemove"?(qi=e.screenX-ir.screenX,Ji=e.screenY-ir.screenY):Ji=qi=0,ir=e),qi)},movementY:function(e){return"movementY"in e?e.movementY:Ji}}),eu=Ie(gi),z0=q({},gi,{dataTransfer:0}),D0=Ie(z0),M0=q({},Kr,{relatedTarget:0}),Xi=Ie(M0),I0=q({},Kn,{animationName:0,elapsedTime:0,pseudoElement:0}),F0=Ie(I0),U0=q({},Kn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),B0=Ie(U0),$0=q({},Kn,{data:0}),tu=Ie($0),H0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},W0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},V0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function K0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=V0[e])?!!t[e]:!1}function Ks(){return K0}var G0=q({},Kr,{key:function(e){if(e.key){var t=H0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=jo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?W0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ks,charCode:function(e){return e.type==="keypress"?jo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?jo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Q0=Ie(G0),q0=q({},gi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nu=Ie(q0),J0=q({},Kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ks}),X0=Ie(J0),Y0=q({},Kn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Z0=Ie(Y0),eh=q({},gi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),th=Ie(eh),nh=[9,13,27,32],Gs=mt&&"CompositionEvent"in window,yr=null;mt&&"documentMode"in document&&(yr=document.documentMode);var rh=mt&&"TextEvent"in window&&!yr,gd=mt&&(!Gs||yr&&8<yr&&11>=yr),ru=" ",ou=!1;function yd(e,t){switch(e){case"keyup":return nh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var vn=!1;function oh(e,t){switch(e){case"compositionend":return xd(t);case"keypress":return t.which!==32?null:(ou=!0,ru);case"textInput":return e=t.data,e===ru&&ou?null:e;default:return null}}function ih(e,t){if(vn)return e==="compositionend"||!Gs&&yd(e,t)?(e=md(),Co=Ws=Tt=null,vn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return gd&&t.locale!=="ko"?null:t.data;default:return null}}var lh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function iu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!lh[e.type]:t==="textarea"}function vd(e,t,n,r){Jc(r),t=Ko(t,"onChange"),0<t.length&&(n=new Vs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var xr=null,_r=null;function sh(e){_d(e,0)}function yi(e){var t=Sn(e);if(Hc(t))return e}function ah(e,t){if(e==="change")return t}var wd=!1;if(mt){var Yi;if(mt){var Zi="oninput"in document;if(!Zi){var lu=document.createElement("div");lu.setAttribute("oninput","return;"),Zi=typeof lu.oninput=="function"}Yi=Zi}else Yi=!1;wd=Yi&&(!document.documentMode||9<document.documentMode)}function su(){xr&&(xr.detachEvent("onpropertychange",kd),_r=xr=null)}function kd(e){if(e.propertyName==="value"&&yi(_r)){var t=[];vd(t,_r,e,Fs(e)),ed(sh,t)}}function uh(e,t,n){e==="focusin"?(su(),xr=t,_r=n,xr.attachEvent("onpropertychange",kd)):e==="focusout"&&su()}function ch(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return yi(_r)}function dh(e,t){if(e==="click")return yi(t)}function fh(e,t){if(e==="input"||e==="change")return yi(t)}function ph(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ze=typeof Object.is=="function"?Object.is:ph;function Tr(e,t){if(Ze(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!bl.call(t,o)||!Ze(e[o],t[o]))return!1}return!0}function au(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function uu(e,t){var n=au(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=au(n)}}function Sd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Sd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ed(){for(var e=window,t=Fo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Fo(e.document)}return t}function Qs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function hh(e){var t=Ed(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Sd(n.ownerDocument.documentElement,n)){if(r!==null&&Qs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=uu(n,i);var l=uu(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mh=mt&&"documentMode"in document&&11>=document.documentMode,wn=null,Hl=null,vr=null,Wl=!1;function cu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Wl||wn==null||wn!==Fo(r)||(r=wn,"selectionStart"in r&&Qs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),vr&&Tr(vr,r)||(vr=r,r=Ko(Hl,"onSelect"),0<r.length&&(t=new Vs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=wn)))}function fo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var kn={animationend:fo("Animation","AnimationEnd"),animationiteration:fo("Animation","AnimationIteration"),animationstart:fo("Animation","AnimationStart"),transitionend:fo("Transition","TransitionEnd")},el={},bd={};mt&&(bd=document.createElement("div").style,"AnimationEvent"in window||(delete kn.animationend.animation,delete kn.animationiteration.animation,delete kn.animationstart.animation),"TransitionEvent"in window||delete kn.transitionend.transition);function xi(e){if(el[e])return el[e];if(!kn[e])return e;var t=kn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in bd)return el[e]=t[n];return e}var Nd=xi("animationend"),Cd=xi("animationiteration"),jd=xi("animationstart"),Rd=xi("transitionend"),Pd=new Map,du="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vt(e,t){Pd.set(e,t),fn(t,[e])}for(var tl=0;tl<du.length;tl++){var nl=du[tl],gh=nl.toLowerCase(),yh=nl[0].toUpperCase()+nl.slice(1);Vt(gh,"on"+yh)}Vt(Nd,"onAnimationEnd");Vt(Cd,"onAnimationIteration");Vt(jd,"onAnimationStart");Vt("dblclick","onDoubleClick");Vt("focusin","onFocus");Vt("focusout","onBlur");Vt(Rd,"onTransitionEnd");zn("onMouseEnter",["mouseout","mouseover"]);zn("onMouseLeave",["mouseout","mouseover"]);zn("onPointerEnter",["pointerout","pointerover"]);zn("onPointerLeave",["pointerout","pointerover"]);fn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fn("onBeforeInput",["compositionend","keypress","textInput","paste"]);fn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xh=new Set("cancel close invalid load scroll toggle".split(" ").concat(hr));function fu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,g0(r,t,void 0,e),e.currentTarget=null}function _d(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],a=s.instance,u=s.currentTarget;if(s=s.listener,a!==i&&o.isPropagationStopped())break e;fu(o,s,u),i=a}else for(l=0;l<r.length;l++){if(s=r[l],a=s.instance,u=s.currentTarget,s=s.listener,a!==i&&o.isPropagationStopped())break e;fu(o,s,u),i=a}}}if(Bo)throw e=Fl,Bo=!1,Fl=null,e}function H(e,t){var n=t[ql];n===void 0&&(n=t[ql]=new Set);var r=e+"__bubble";n.has(r)||(Td(t,e,2,!1),n.add(r))}function rl(e,t,n){var r=0;t&&(r|=4),Td(n,e,r,t)}var po="_reactListening"+Math.random().toString(36).slice(2);function Or(e){if(!e[po]){e[po]=!0,Ic.forEach(function(n){n!=="selectionchange"&&(xh.has(n)||rl(n,!1,e),rl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[po]||(t[po]=!0,rl("selectionchange",!1,t))}}function Td(e,t,n,r){switch(hd(t)){case 1:var o=O0;break;case 4:o=L0;break;default:o=Hs}n=o.bind(null,t,n,e),o=void 0,!Il||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function ol(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;l=l.return}for(;s!==null;){if(l=Xt(s),l===null)return;if(a=l.tag,a===5||a===6){r=i=l;continue e}s=s.parentNode}}r=r.return}ed(function(){var u=i,d=Fs(n),h=[];e:{var g=Pd.get(e);if(g!==void 0){var x=Vs,S=e;switch(e){case"keypress":if(jo(n)===0)break e;case"keydown":case"keyup":x=Q0;break;case"focusin":S="focus",x=Xi;break;case"focusout":S="blur",x=Xi;break;case"beforeblur":case"afterblur":x=Xi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=eu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=D0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=X0;break;case Nd:case Cd:case jd:x=F0;break;case Rd:x=Z0;break;case"scroll":x=A0;break;case"wheel":x=th;break;case"copy":case"cut":case"paste":x=B0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=nu}var y=(t&4)!==0,v=!y&&e==="scroll",m=y?g!==null?g+"Capture":null:g;y=[];for(var p=u,f;p!==null;){f=p;var w=f.stateNode;if(f.tag===5&&w!==null&&(f=w,m!==null&&(w=Cr(p,m),w!=null&&y.push(Lr(p,w,f)))),v)break;p=p.return}0<y.length&&(g=new x(g,S,null,n,d),h.push({event:g,listeners:y}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",g&&n!==Dl&&(S=n.relatedTarget||n.fromElement)&&(Xt(S)||S[gt]))break e;if((x||g)&&(g=d.window===d?d:(g=d.ownerDocument)?g.defaultView||g.parentWindow:window,x?(S=n.relatedTarget||n.toElement,x=u,S=S?Xt(S):null,S!==null&&(v=pn(S),S!==v||S.tag!==5&&S.tag!==6)&&(S=null)):(x=null,S=u),x!==S)){if(y=eu,w="onMouseLeave",m="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(y=nu,w="onPointerLeave",m="onPointerEnter",p="pointer"),v=x==null?g:Sn(x),f=S==null?g:Sn(S),g=new y(w,p+"leave",x,n,d),g.target=v,g.relatedTarget=f,w=null,Xt(d)===u&&(y=new y(m,p+"enter",S,n,d),y.target=f,y.relatedTarget=v,w=y),v=w,x&&S)t:{for(y=x,m=S,p=0,f=y;f;f=mn(f))p++;for(f=0,w=m;w;w=mn(w))f++;for(;0<p-f;)y=mn(y),p--;for(;0<f-p;)m=mn(m),f--;for(;p--;){if(y===m||m!==null&&y===m.alternate)break t;y=mn(y),m=mn(m)}y=null}else y=null;x!==null&&pu(h,g,x,y,!1),S!==null&&v!==null&&pu(h,v,S,y,!0)}}e:{if(g=u?Sn(u):window,x=g.nodeName&&g.nodeName.toLowerCase(),x==="select"||x==="input"&&g.type==="file")var N=ah;else if(iu(g))if(wd)N=fh;else{N=ch;var b=uh}else(x=g.nodeName)&&x.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(N=dh);if(N&&(N=N(e,u))){vd(h,N,n,d);break e}b&&b(e,g,u),e==="focusout"&&(b=g._wrapperState)&&b.controlled&&g.type==="number"&&Tl(g,"number",g.value)}switch(b=u?Sn(u):window,e){case"focusin":(iu(b)||b.contentEditable==="true")&&(wn=b,Hl=u,vr=null);break;case"focusout":vr=Hl=wn=null;break;case"mousedown":Wl=!0;break;case"contextmenu":case"mouseup":case"dragend":Wl=!1,cu(h,n,d);break;case"selectionchange":if(mh)break;case"keydown":case"keyup":cu(h,n,d)}var j;if(Gs)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else vn?yd(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(gd&&n.locale!=="ko"&&(vn||_!=="onCompositionStart"?_==="onCompositionEnd"&&vn&&(j=md()):(Tt=d,Ws="value"in Tt?Tt.value:Tt.textContent,vn=!0)),b=Ko(u,_),0<b.length&&(_=new tu(_,e,null,n,d),h.push({event:_,listeners:b}),j?_.data=j:(j=xd(n),j!==null&&(_.data=j)))),(j=rh?oh(e,n):ih(e,n))&&(u=Ko(u,"onBeforeInput"),0<u.length&&(d=new tu("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:u}),d.data=j))}_d(h,t)})}function Lr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ko(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Cr(e,n),i!=null&&r.unshift(Lr(e,i,o)),i=Cr(e,t),i!=null&&r.push(Lr(e,i,o))),e=e.return}return r}function mn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function pu(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var s=n,a=s.alternate,u=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&u!==null&&(s=u,o?(a=Cr(n,i),a!=null&&l.unshift(Lr(n,a,s))):o||(a=Cr(n,i),a!=null&&l.push(Lr(n,a,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var vh=/\r\n?/g,wh=/\u0000|\uFFFD/g;function hu(e){return(typeof e=="string"?e:""+e).replace(vh,`
`).replace(wh,"")}function ho(e,t,n){if(t=hu(t),hu(e)!==t&&n)throw Error(C(425))}function Go(){}var Vl=null,Kl=null;function Gl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ql=typeof setTimeout=="function"?setTimeout:void 0,kh=typeof clearTimeout=="function"?clearTimeout:void 0,mu=typeof Promise=="function"?Promise:void 0,Sh=typeof queueMicrotask=="function"?queueMicrotask:typeof mu<"u"?function(e){return mu.resolve(null).then(e).catch(Eh)}:Ql;function Eh(e){setTimeout(function(){throw e})}function il(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Pr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Pr(t)}function Mt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function gu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Gn=Math.random().toString(36).slice(2),ot="__reactFiber$"+Gn,Ar="__reactProps$"+Gn,gt="__reactContainer$"+Gn,ql="__reactEvents$"+Gn,bh="__reactListeners$"+Gn,Nh="__reactHandles$"+Gn;function Xt(e){var t=e[ot];if(t)return t;for(var n=e.parentNode;n;){if(t=n[gt]||n[ot]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=gu(e);e!==null;){if(n=e[ot])return n;e=gu(e)}return t}e=n,n=e.parentNode}return null}function Gr(e){return e=e[ot]||e[gt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Sn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function vi(e){return e[Ar]||null}var Jl=[],En=-1;function Kt(e){return{current:e}}function W(e){0>En||(e.current=Jl[En],Jl[En]=null,En--)}function $(e,t){En++,Jl[En]=e.current,e.current=t}var Wt={},xe=Kt(Wt),Re=Kt(!1),ln=Wt;function Dn(e,t){var n=e.type.contextTypes;if(!n)return Wt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Pe(e){return e=e.childContextTypes,e!=null}function Qo(){W(Re),W(xe)}function yu(e,t,n){if(xe.current!==Wt)throw Error(C(168));$(xe,t),$(Re,n)}function Od(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(C(108,u0(e)||"Unknown",o));return q({},n,r)}function qo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Wt,ln=xe.current,$(xe,e),$(Re,Re.current),!0}function xu(e,t,n){var r=e.stateNode;if(!r)throw Error(C(169));n?(e=Od(e,t,ln),r.__reactInternalMemoizedMergedChildContext=e,W(Re),W(xe),$(xe,e)):W(Re),$(Re,n)}var dt=null,wi=!1,ll=!1;function Ld(e){dt===null?dt=[e]:dt.push(e)}function Ch(e){wi=!0,Ld(e)}function Gt(){if(!ll&&dt!==null){ll=!0;var e=0,t=F;try{var n=dt;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}dt=null,wi=!1}catch(o){throw dt!==null&&(dt=dt.slice(e+1)),od(Us,Gt),o}finally{F=t,ll=!1}}return null}var bn=[],Nn=0,Jo=null,Xo=0,Ue=[],Be=0,sn=null,ft=1,pt="";function qt(e,t){bn[Nn++]=Xo,bn[Nn++]=Jo,Jo=e,Xo=t}function Ad(e,t,n){Ue[Be++]=ft,Ue[Be++]=pt,Ue[Be++]=sn,sn=e;var r=ft;e=pt;var o=32-Xe(r)-1;r&=~(1<<o),n+=1;var i=32-Xe(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,ft=1<<32-Xe(t)+o|n<<o|r,pt=i+e}else ft=1<<i|n<<o|r,pt=e}function qs(e){e.return!==null&&(qt(e,1),Ad(e,1,0))}function Js(e){for(;e===Jo;)Jo=bn[--Nn],bn[Nn]=null,Xo=bn[--Nn],bn[Nn]=null;for(;e===sn;)sn=Ue[--Be],Ue[Be]=null,pt=Ue[--Be],Ue[Be]=null,ft=Ue[--Be],Ue[Be]=null}var ze=null,Ae=null,V=!1,Je=null;function zd(e,t){var n=$e(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function vu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ze=e,Ae=Mt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ze=e,Ae=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=sn!==null?{id:ft,overflow:pt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=$e(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ze=e,Ae=null,!0):!1;default:return!1}}function Xl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Yl(e){if(V){var t=Ae;if(t){var n=t;if(!vu(e,t)){if(Xl(e))throw Error(C(418));t=Mt(n.nextSibling);var r=ze;t&&vu(e,t)?zd(r,n):(e.flags=e.flags&-4097|2,V=!1,ze=e)}}else{if(Xl(e))throw Error(C(418));e.flags=e.flags&-4097|2,V=!1,ze=e}}}function wu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ze=e}function mo(e){if(e!==ze)return!1;if(!V)return wu(e),V=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Gl(e.type,e.memoizedProps)),t&&(t=Ae)){if(Xl(e))throw Dd(),Error(C(418));for(;t;)zd(e,t),t=Mt(t.nextSibling)}if(wu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ae=Mt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ae=null}}else Ae=ze?Mt(e.stateNode.nextSibling):null;return!0}function Dd(){for(var e=Ae;e;)e=Mt(e.nextSibling)}function Mn(){Ae=ze=null,V=!1}function Xs(e){Je===null?Je=[e]:Je.push(e)}var jh=wt.ReactCurrentBatchConfig;function lr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var s=o.refs;l===null?delete s[i]:s[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,e))}return e}function go(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ku(e){var t=e._init;return t(e._payload)}function Md(e){function t(m,p){if(e){var f=m.deletions;f===null?(m.deletions=[p],m.flags|=16):f.push(p)}}function n(m,p){if(!e)return null;for(;p!==null;)t(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function o(m,p){return m=Bt(m,p),m.index=0,m.sibling=null,m}function i(m,p,f){return m.index=f,e?(f=m.alternate,f!==null?(f=f.index,f<p?(m.flags|=2,p):f):(m.flags|=2,p)):(m.flags|=1048576,p)}function l(m){return e&&m.alternate===null&&(m.flags|=2),m}function s(m,p,f,w){return p===null||p.tag!==6?(p=pl(f,m.mode,w),p.return=m,p):(p=o(p,f),p.return=m,p)}function a(m,p,f,w){var N=f.type;return N===xn?d(m,p,f.props.children,w,f.key):p!==null&&(p.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Ct&&ku(N)===p.type)?(w=o(p,f.props),w.ref=lr(m,p,f),w.return=m,w):(w=Ao(f.type,f.key,f.props,null,m.mode,w),w.ref=lr(m,p,f),w.return=m,w)}function u(m,p,f,w){return p===null||p.tag!==4||p.stateNode.containerInfo!==f.containerInfo||p.stateNode.implementation!==f.implementation?(p=hl(f,m.mode,w),p.return=m,p):(p=o(p,f.children||[]),p.return=m,p)}function d(m,p,f,w,N){return p===null||p.tag!==7?(p=nn(f,m.mode,w,N),p.return=m,p):(p=o(p,f),p.return=m,p)}function h(m,p,f){if(typeof p=="string"&&p!==""||typeof p=="number")return p=pl(""+p,m.mode,f),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case oo:return f=Ao(p.type,p.key,p.props,null,m.mode,f),f.ref=lr(m,null,p),f.return=m,f;case yn:return p=hl(p,m.mode,f),p.return=m,p;case Ct:var w=p._init;return h(m,w(p._payload),f)}if(fr(p)||tr(p))return p=nn(p,m.mode,f,null),p.return=m,p;go(m,p)}return null}function g(m,p,f,w){var N=p!==null?p.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return N!==null?null:s(m,p,""+f,w);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case oo:return f.key===N?a(m,p,f,w):null;case yn:return f.key===N?u(m,p,f,w):null;case Ct:return N=f._init,g(m,p,N(f._payload),w)}if(fr(f)||tr(f))return N!==null?null:d(m,p,f,w,null);go(m,f)}return null}function x(m,p,f,w,N){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(f)||null,s(p,m,""+w,N);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case oo:return m=m.get(w.key===null?f:w.key)||null,a(p,m,w,N);case yn:return m=m.get(w.key===null?f:w.key)||null,u(p,m,w,N);case Ct:var b=w._init;return x(m,p,f,b(w._payload),N)}if(fr(w)||tr(w))return m=m.get(f)||null,d(p,m,w,N,null);go(p,w)}return null}function S(m,p,f,w){for(var N=null,b=null,j=p,_=p=0,U=null;j!==null&&_<f.length;_++){j.index>_?(U=j,j=null):U=j.sibling;var A=g(m,j,f[_],w);if(A===null){j===null&&(j=U);break}e&&j&&A.alternate===null&&t(m,j),p=i(A,p,_),b===null?N=A:b.sibling=A,b=A,j=U}if(_===f.length)return n(m,j),V&&qt(m,_),N;if(j===null){for(;_<f.length;_++)j=h(m,f[_],w),j!==null&&(p=i(j,p,_),b===null?N=j:b.sibling=j,b=j);return V&&qt(m,_),N}for(j=r(m,j);_<f.length;_++)U=x(j,m,_,f[_],w),U!==null&&(e&&U.alternate!==null&&j.delete(U.key===null?_:U.key),p=i(U,p,_),b===null?N=U:b.sibling=U,b=U);return e&&j.forEach(function(X){return t(m,X)}),V&&qt(m,_),N}function y(m,p,f,w){var N=tr(f);if(typeof N!="function")throw Error(C(150));if(f=N.call(f),f==null)throw Error(C(151));for(var b=N=null,j=p,_=p=0,U=null,A=f.next();j!==null&&!A.done;_++,A=f.next()){j.index>_?(U=j,j=null):U=j.sibling;var X=g(m,j,A.value,w);if(X===null){j===null&&(j=U);break}e&&j&&X.alternate===null&&t(m,j),p=i(X,p,_),b===null?N=X:b.sibling=X,b=X,j=U}if(A.done)return n(m,j),V&&qt(m,_),N;if(j===null){for(;!A.done;_++,A=f.next())A=h(m,A.value,w),A!==null&&(p=i(A,p,_),b===null?N=A:b.sibling=A,b=A);return V&&qt(m,_),N}for(j=r(m,j);!A.done;_++,A=f.next())A=x(j,m,_,A.value,w),A!==null&&(e&&A.alternate!==null&&j.delete(A.key===null?_:A.key),p=i(A,p,_),b===null?N=A:b.sibling=A,b=A);return e&&j.forEach(function(tt){return t(m,tt)}),V&&qt(m,_),N}function v(m,p,f,w){if(typeof f=="object"&&f!==null&&f.type===xn&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case oo:e:{for(var N=f.key,b=p;b!==null;){if(b.key===N){if(N=f.type,N===xn){if(b.tag===7){n(m,b.sibling),p=o(b,f.props.children),p.return=m,m=p;break e}}else if(b.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Ct&&ku(N)===b.type){n(m,b.sibling),p=o(b,f.props),p.ref=lr(m,b,f),p.return=m,m=p;break e}n(m,b);break}else t(m,b);b=b.sibling}f.type===xn?(p=nn(f.props.children,m.mode,w,f.key),p.return=m,m=p):(w=Ao(f.type,f.key,f.props,null,m.mode,w),w.ref=lr(m,p,f),w.return=m,m=w)}return l(m);case yn:e:{for(b=f.key;p!==null;){if(p.key===b)if(p.tag===4&&p.stateNode.containerInfo===f.containerInfo&&p.stateNode.implementation===f.implementation){n(m,p.sibling),p=o(p,f.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else t(m,p);p=p.sibling}p=hl(f,m.mode,w),p.return=m,m=p}return l(m);case Ct:return b=f._init,v(m,p,b(f._payload),w)}if(fr(f))return S(m,p,f,w);if(tr(f))return y(m,p,f,w);go(m,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,p!==null&&p.tag===6?(n(m,p.sibling),p=o(p,f),p.return=m,m=p):(n(m,p),p=pl(f,m.mode,w),p.return=m,m=p),l(m)):n(m,p)}return v}var In=Md(!0),Id=Md(!1),Yo=Kt(null),Zo=null,Cn=null,Ys=null;function Zs(){Ys=Cn=Zo=null}function ea(e){var t=Yo.current;W(Yo),e._currentValue=t}function Zl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ln(e,t){Zo=e,Ys=Cn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(je=!0),e.firstContext=null)}function We(e){var t=e._currentValue;if(Ys!==e)if(e={context:e,memoizedValue:t,next:null},Cn===null){if(Zo===null)throw Error(C(308));Cn=e,Zo.dependencies={lanes:0,firstContext:e}}else Cn=Cn.next=e;return t}var Yt=null;function ta(e){Yt===null?Yt=[e]:Yt.push(e)}function Fd(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,ta(t)):(n.next=o.next,o.next=n),t.interleaved=n,yt(e,r)}function yt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var jt=!1;function na(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ud(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ht(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function It(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,yt(e,n)}return o=r.interleaved,o===null?(t.next=t,ta(r)):(t.next=o.next,o.next=t),r.interleaved=t,yt(e,n)}function Ro(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Bs(e,n)}}function Su(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ei(e,t,n,r){var o=e.updateQueue;jt=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var a=s,u=a.next;a.next=null,l===null?i=u:l.next=u,l=a;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==l&&(s===null?d.firstBaseUpdate=u:s.next=u,d.lastBaseUpdate=a))}if(i!==null){var h=o.baseState;l=0,d=u=a=null,s=i;do{var g=s.lane,x=s.eventTime;if((r&g)===g){d!==null&&(d=d.next={eventTime:x,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var S=e,y=s;switch(g=t,x=n,y.tag){case 1:if(S=y.payload,typeof S=="function"){h=S.call(x,h,g);break e}h=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=y.payload,g=typeof S=="function"?S.call(x,h,g):S,g==null)break e;h=q({},h,g);break e;case 2:jt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=o.effects,g===null?o.effects=[s]:g.push(s))}else x={eventTime:x,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(u=d=x,a=h):d=d.next=x,l|=g;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;g=s,s=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(!0);if(d===null&&(a=h),o.baseState=a,o.firstBaseUpdate=u,o.lastBaseUpdate=d,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);un|=l,e.lanes=l,e.memoizedState=h}}function Eu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(C(191,o));o.call(r)}}}var Qr={},st=Kt(Qr),zr=Kt(Qr),Dr=Kt(Qr);function Zt(e){if(e===Qr)throw Error(C(174));return e}function ra(e,t){switch($(Dr,t),$(zr,e),$(st,Qr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ll(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ll(t,e)}W(st),$(st,t)}function Fn(){W(st),W(zr),W(Dr)}function Bd(e){Zt(Dr.current);var t=Zt(st.current),n=Ll(t,e.type);t!==n&&($(zr,e),$(st,n))}function oa(e){zr.current===e&&(W(st),W(zr))}var K=Kt(0);function ti(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var sl=[];function ia(){for(var e=0;e<sl.length;e++)sl[e]._workInProgressVersionPrimary=null;sl.length=0}var Po=wt.ReactCurrentDispatcher,al=wt.ReactCurrentBatchConfig,an=0,G=null,ie=null,ae=null,ni=!1,wr=!1,Mr=0,Rh=0;function he(){throw Error(C(321))}function la(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ze(e[n],t[n]))return!1;return!0}function sa(e,t,n,r,o,i){if(an=i,G=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Po.current=e===null||e.memoizedState===null?Oh:Lh,e=n(r,o),wr){i=0;do{if(wr=!1,Mr=0,25<=i)throw Error(C(301));i+=1,ae=ie=null,t.updateQueue=null,Po.current=Ah,e=n(r,o)}while(wr)}if(Po.current=ri,t=ie!==null&&ie.next!==null,an=0,ae=ie=G=null,ni=!1,t)throw Error(C(300));return e}function aa(){var e=Mr!==0;return Mr=0,e}function rt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ae===null?G.memoizedState=ae=e:ae=ae.next=e,ae}function Ve(){if(ie===null){var e=G.alternate;e=e!==null?e.memoizedState:null}else e=ie.next;var t=ae===null?G.memoizedState:ae.next;if(t!==null)ae=t,ie=e;else{if(e===null)throw Error(C(310));ie=e,e={memoizedState:ie.memoizedState,baseState:ie.baseState,baseQueue:ie.baseQueue,queue:ie.queue,next:null},ae===null?G.memoizedState=ae=e:ae=ae.next=e}return ae}function Ir(e,t){return typeof t=="function"?t(e):t}function ul(e){var t=Ve(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=ie,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=l=null,a=null,u=i;do{var d=u.lane;if((an&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(s=a=h,l=r):a=a.next=h,G.lanes|=d,un|=d}u=u.next}while(u!==null&&u!==i);a===null?l=r:a.next=s,Ze(r,t.memoizedState)||(je=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,G.lanes|=i,un|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function cl(e){var t=Ve(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);Ze(i,t.memoizedState)||(je=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function $d(){}function Hd(e,t){var n=G,r=Ve(),o=t(),i=!Ze(r.memoizedState,o);if(i&&(r.memoizedState=o,je=!0),r=r.queue,ua(Kd.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ae!==null&&ae.memoizedState.tag&1){if(n.flags|=2048,Fr(9,Vd.bind(null,n,r,o,t),void 0,null),ue===null)throw Error(C(349));an&30||Wd(n,t,o)}return o}function Wd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Vd(e,t,n,r){t.value=n,t.getSnapshot=r,Gd(t)&&Qd(e)}function Kd(e,t,n){return n(function(){Gd(t)&&Qd(e)})}function Gd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ze(e,n)}catch{return!0}}function Qd(e){var t=yt(e,1);t!==null&&Ye(t,e,1,-1)}function bu(e){var t=rt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ir,lastRenderedState:e},t.queue=e,e=e.dispatch=Th.bind(null,G,e),[t.memoizedState,e]}function Fr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function qd(){return Ve().memoizedState}function _o(e,t,n,r){var o=rt();G.flags|=e,o.memoizedState=Fr(1|t,n,void 0,r===void 0?null:r)}function ki(e,t,n,r){var o=Ve();r=r===void 0?null:r;var i=void 0;if(ie!==null){var l=ie.memoizedState;if(i=l.destroy,r!==null&&la(r,l.deps)){o.memoizedState=Fr(t,n,i,r);return}}G.flags|=e,o.memoizedState=Fr(1|t,n,i,r)}function Nu(e,t){return _o(8390656,8,e,t)}function ua(e,t){return ki(2048,8,e,t)}function Jd(e,t){return ki(4,2,e,t)}function Xd(e,t){return ki(4,4,e,t)}function Yd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Zd(e,t,n){return n=n!=null?n.concat([e]):null,ki(4,4,Yd.bind(null,t,e),n)}function ca(){}function ef(e,t){var n=Ve();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&la(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function tf(e,t){var n=Ve();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&la(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function nf(e,t,n){return an&21?(Ze(n,t)||(n=sd(),G.lanes|=n,un|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,je=!0),e.memoizedState=n)}function Ph(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=al.transition;al.transition={};try{e(!1),t()}finally{F=n,al.transition=r}}function rf(){return Ve().memoizedState}function _h(e,t,n){var r=Ut(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},of(e))lf(t,n);else if(n=Fd(e,t,n,r),n!==null){var o=we();Ye(n,e,r,o),sf(n,t,r)}}function Th(e,t,n){var r=Ut(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(of(e))lf(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,s=i(l,n);if(o.hasEagerState=!0,o.eagerState=s,Ze(s,l)){var a=t.interleaved;a===null?(o.next=o,ta(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}n=Fd(e,t,o,r),n!==null&&(o=we(),Ye(n,e,r,o),sf(n,t,r))}}function of(e){var t=e.alternate;return e===G||t!==null&&t===G}function lf(e,t){wr=ni=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function sf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Bs(e,n)}}var ri={readContext:We,useCallback:he,useContext:he,useEffect:he,useImperativeHandle:he,useInsertionEffect:he,useLayoutEffect:he,useMemo:he,useReducer:he,useRef:he,useState:he,useDebugValue:he,useDeferredValue:he,useTransition:he,useMutableSource:he,useSyncExternalStore:he,useId:he,unstable_isNewReconciler:!1},Oh={readContext:We,useCallback:function(e,t){return rt().memoizedState=[e,t===void 0?null:t],e},useContext:We,useEffect:Nu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,_o(4194308,4,Yd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return _o(4194308,4,e,t)},useInsertionEffect:function(e,t){return _o(4,2,e,t)},useMemo:function(e,t){var n=rt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=rt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=_h.bind(null,G,e),[r.memoizedState,e]},useRef:function(e){var t=rt();return e={current:e},t.memoizedState=e},useState:bu,useDebugValue:ca,useDeferredValue:function(e){return rt().memoizedState=e},useTransition:function(){var e=bu(!1),t=e[0];return e=Ph.bind(null,e[1]),rt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=G,o=rt();if(V){if(n===void 0)throw Error(C(407));n=n()}else{if(n=t(),ue===null)throw Error(C(349));an&30||Wd(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Nu(Kd.bind(null,r,i,e),[e]),r.flags|=2048,Fr(9,Vd.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=rt(),t=ue.identifierPrefix;if(V){var n=pt,r=ft;n=(r&~(1<<32-Xe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Mr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Rh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Lh={readContext:We,useCallback:ef,useContext:We,useEffect:ua,useImperativeHandle:Zd,useInsertionEffect:Jd,useLayoutEffect:Xd,useMemo:tf,useReducer:ul,useRef:qd,useState:function(){return ul(Ir)},useDebugValue:ca,useDeferredValue:function(e){var t=Ve();return nf(t,ie.memoizedState,e)},useTransition:function(){var e=ul(Ir)[0],t=Ve().memoizedState;return[e,t]},useMutableSource:$d,useSyncExternalStore:Hd,useId:rf,unstable_isNewReconciler:!1},Ah={readContext:We,useCallback:ef,useContext:We,useEffect:ua,useImperativeHandle:Zd,useInsertionEffect:Jd,useLayoutEffect:Xd,useMemo:tf,useReducer:cl,useRef:qd,useState:function(){return cl(Ir)},useDebugValue:ca,useDeferredValue:function(e){var t=Ve();return ie===null?t.memoizedState=e:nf(t,ie.memoizedState,e)},useTransition:function(){var e=cl(Ir)[0],t=Ve().memoizedState;return[e,t]},useMutableSource:$d,useSyncExternalStore:Hd,useId:rf,unstable_isNewReconciler:!1};function Qe(e,t){if(e&&e.defaultProps){t=q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function es(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Si={isMounted:function(e){return(e=e._reactInternals)?pn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=we(),o=Ut(e),i=ht(r,o);i.payload=t,n!=null&&(i.callback=n),t=It(e,i,o),t!==null&&(Ye(t,e,o,r),Ro(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=we(),o=Ut(e),i=ht(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=It(e,i,o),t!==null&&(Ye(t,e,o,r),Ro(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=we(),r=Ut(e),o=ht(n,r);o.tag=2,t!=null&&(o.callback=t),t=It(e,o,r),t!==null&&(Ye(t,e,r,n),Ro(t,e,r))}};function Cu(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Tr(n,r)||!Tr(o,i):!0}function af(e,t,n){var r=!1,o=Wt,i=t.contextType;return typeof i=="object"&&i!==null?i=We(i):(o=Pe(t)?ln:xe.current,r=t.contextTypes,i=(r=r!=null)?Dn(e,o):Wt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Si,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function ju(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Si.enqueueReplaceState(t,t.state,null)}function ts(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},na(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=We(i):(i=Pe(t)?ln:xe.current,o.context=Dn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(es(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Si.enqueueReplaceState(o,o.state,null),ei(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Un(e,t){try{var n="",r=t;do n+=a0(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function dl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ns(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var zh=typeof WeakMap=="function"?WeakMap:Map;function uf(e,t,n){n=ht(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ii||(ii=!0,fs=r),ns(e,t)},n}function cf(e,t,n){n=ht(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){ns(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){ns(e,t),typeof r!="function"&&(Ft===null?Ft=new Set([this]):Ft.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Ru(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new zh;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=qh.bind(null,e,t,n),t.then(e,e))}function Pu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function _u(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ht(-1,1),t.tag=2,It(n,t,1))),n.lanes|=1),e)}var Dh=wt.ReactCurrentOwner,je=!1;function ve(e,t,n,r){t.child=e===null?Id(t,null,n,r):In(t,e.child,n,r)}function Tu(e,t,n,r,o){n=n.render;var i=t.ref;return Ln(t,o),r=sa(e,t,n,r,i,o),n=aa(),e!==null&&!je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,xt(e,t,o)):(V&&n&&qs(t),t.flags|=1,ve(e,t,r,o),t.child)}function Ou(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!xa(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,df(e,t,i,r,o)):(e=Ao(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Tr,n(l,r)&&e.ref===t.ref)return xt(e,t,o)}return t.flags|=1,e=Bt(i,r),e.ref=t.ref,e.return=t,t.child=e}function df(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Tr(i,r)&&e.ref===t.ref)if(je=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(je=!0);else return t.lanes=e.lanes,xt(e,t,o)}return rs(e,t,n,r,o)}function ff(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},$(Rn,Le),Le|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,$(Rn,Le),Le|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,$(Rn,Le),Le|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,$(Rn,Le),Le|=r;return ve(e,t,o,n),t.child}function pf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function rs(e,t,n,r,o){var i=Pe(n)?ln:xe.current;return i=Dn(t,i),Ln(t,o),n=sa(e,t,n,r,i,o),r=aa(),e!==null&&!je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,xt(e,t,o)):(V&&r&&qs(t),t.flags|=1,ve(e,t,n,o),t.child)}function Lu(e,t,n,r,o){if(Pe(n)){var i=!0;qo(t)}else i=!1;if(Ln(t,o),t.stateNode===null)To(e,t),af(t,n,r),ts(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var a=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=We(u):(u=Pe(n)?ln:xe.current,u=Dn(t,u));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||a!==u)&&ju(t,l,r,u),jt=!1;var g=t.memoizedState;l.state=g,ei(t,r,l,o),a=t.memoizedState,s!==r||g!==a||Re.current||jt?(typeof d=="function"&&(es(t,n,d,r),a=t.memoizedState),(s=jt||Cu(t,n,s,r,g,a,u))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),l.props=r,l.state=a,l.context=u,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Ud(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Qe(t.type,s),l.props=u,h=t.pendingProps,g=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=We(a):(a=Pe(n)?ln:xe.current,a=Dn(t,a));var x=n.getDerivedStateFromProps;(d=typeof x=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==h||g!==a)&&ju(t,l,r,a),jt=!1,g=t.memoizedState,l.state=g,ei(t,r,l,o);var S=t.memoizedState;s!==h||g!==S||Re.current||jt?(typeof x=="function"&&(es(t,n,x,r),S=t.memoizedState),(u=jt||Cu(t,n,u,r,g,S,a)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,S,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,S,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=S),l.props=r,l.state=S,l.context=a,r=u):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return os(e,t,n,r,i,o)}function os(e,t,n,r,o,i){pf(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&xu(t,n,!1),xt(e,t,i);r=t.stateNode,Dh.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=In(t,e.child,null,i),t.child=In(t,null,s,i)):ve(e,t,s,i),t.memoizedState=r.state,o&&xu(t,n,!0),t.child}function hf(e){var t=e.stateNode;t.pendingContext?yu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&yu(e,t.context,!1),ra(e,t.containerInfo)}function Au(e,t,n,r,o){return Mn(),Xs(o),t.flags|=256,ve(e,t,n,r),t.child}var is={dehydrated:null,treeContext:null,retryLane:0};function ls(e){return{baseLanes:e,cachePool:null,transitions:null}}function mf(e,t,n){var r=t.pendingProps,o=K.current,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),$(K,o&1),e===null)return Yl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Ni(l,r,0,null),e=nn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=ls(n),t.memoizedState=is,e):da(t,l));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return Mh(e,t,l,r,s,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,s=o.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Bt(o,a),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=Bt(s,i):(i=nn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?ls(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=is,r}return i=e.child,e=i.sibling,r=Bt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function da(e,t){return t=Ni({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function yo(e,t,n,r){return r!==null&&Xs(r),In(t,e.child,null,n),e=da(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Mh(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=dl(Error(C(422))),yo(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Ni({mode:"visible",children:r.children},o,0,null),i=nn(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&In(t,e.child,null,l),t.child.memoizedState=ls(l),t.memoizedState=is,i);if(!(t.mode&1))return yo(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(C(419)),r=dl(i,r,void 0),yo(e,t,l,r)}if(s=(l&e.childLanes)!==0,je||s){if(r=ue,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,yt(e,o),Ye(r,e,o,-1))}return ya(),r=dl(Error(C(421))),yo(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Jh.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Ae=Mt(o.nextSibling),ze=t,V=!0,Je=null,e!==null&&(Ue[Be++]=ft,Ue[Be++]=pt,Ue[Be++]=sn,ft=e.id,pt=e.overflow,sn=t),t=da(t,r.children),t.flags|=4096,t)}function zu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Zl(e.return,t,n)}function fl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function gf(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(ve(e,t,r.children,n),r=K.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&zu(e,n,t);else if(e.tag===19)zu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if($(K,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&ti(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),fl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ti(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}fl(t,!0,n,null,i);break;case"together":fl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function To(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function xt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),un|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,n=Bt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Bt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ih(e,t,n){switch(t.tag){case 3:hf(t),Mn();break;case 5:Bd(t);break;case 1:Pe(t.type)&&qo(t);break;case 4:ra(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;$(Yo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?($(K,K.current&1),t.flags|=128,null):n&t.child.childLanes?mf(e,t,n):($(K,K.current&1),e=xt(e,t,n),e!==null?e.sibling:null);$(K,K.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return gf(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),$(K,K.current),r)break;return null;case 22:case 23:return t.lanes=0,ff(e,t,n)}return xt(e,t,n)}var yf,ss,xf,vf;yf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ss=function(){};xf=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Zt(st.current);var i=null;switch(n){case"input":o=Pl(e,o),r=Pl(e,r),i=[];break;case"select":o=q({},o,{value:void 0}),r=q({},r,{value:void 0}),i=[];break;case"textarea":o=Ol(e,o),r=Ol(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Go)}Al(n,r);var l;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var s=o[u];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(br.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var a=r[u];if(s=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&a!==s&&(a!=null||s!=null))if(u==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(i||(i=[]),i.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(i=i||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(br.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&H("scroll",e),i||s===a||(i=[])):(i=i||[]).push(u,a))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};vf=function(e,t,n,r){n!==r&&(t.flags|=4)};function sr(e,t){if(!V)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function me(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Fh(e,t,n){var r=t.pendingProps;switch(Js(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return me(t),null;case 1:return Pe(t.type)&&Qo(),me(t),null;case 3:return r=t.stateNode,Fn(),W(Re),W(xe),ia(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(mo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Je!==null&&(ms(Je),Je=null))),ss(e,t),me(t),null;case 5:oa(t);var o=Zt(Dr.current);if(n=t.type,e!==null&&t.stateNode!=null)xf(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(C(166));return me(t),null}if(e=Zt(st.current),mo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[ot]=t,r[Ar]=i,e=(t.mode&1)!==0,n){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(o=0;o<hr.length;o++)H(hr[o],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":Wa(r,i),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},H("invalid",r);break;case"textarea":Ka(r,i),H("invalid",r)}Al(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&ho(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&ho(r.textContent,s,e),o=["children",""+s]):br.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&H("scroll",r)}switch(n){case"input":io(r),Va(r,i,!0);break;case"textarea":io(r),Ga(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Go)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Kc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[ot]=t,e[Ar]=r,yf(e,t,!1,!1),t.stateNode=e;e:{switch(l=zl(n,r),n){case"dialog":H("cancel",e),H("close",e),o=r;break;case"iframe":case"object":case"embed":H("load",e),o=r;break;case"video":case"audio":for(o=0;o<hr.length;o++)H(hr[o],e);o=r;break;case"source":H("error",e),o=r;break;case"img":case"image":case"link":H("error",e),H("load",e),o=r;break;case"details":H("toggle",e),o=r;break;case"input":Wa(e,r),o=Pl(e,r),H("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=q({},r,{value:void 0}),H("invalid",e);break;case"textarea":Ka(e,r),o=Ol(e,r),H("invalid",e);break;default:o=r}Al(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var a=s[i];i==="style"?qc(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Gc(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Nr(e,a):typeof a=="number"&&Nr(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(br.hasOwnProperty(i)?a!=null&&i==="onScroll"&&H("scroll",e):a!=null&&zs(e,i,a,l))}switch(n){case"input":io(e),Va(e,r,!1);break;case"textarea":io(e),Ga(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ht(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Pn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Pn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Go)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return me(t),null;case 6:if(e&&t.stateNode!=null)vf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(C(166));if(n=Zt(Dr.current),Zt(st.current),mo(t)){if(r=t.stateNode,n=t.memoizedProps,r[ot]=t,(i=r.nodeValue!==n)&&(e=ze,e!==null))switch(e.tag){case 3:ho(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ho(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ot]=t,t.stateNode=r}return me(t),null;case 13:if(W(K),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(V&&Ae!==null&&t.mode&1&&!(t.flags&128))Dd(),Mn(),t.flags|=98560,i=!1;else if(i=mo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(C(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(C(317));i[ot]=t}else Mn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;me(t),i=!1}else Je!==null&&(ms(Je),Je=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||K.current&1?se===0&&(se=3):ya())),t.updateQueue!==null&&(t.flags|=4),me(t),null);case 4:return Fn(),ss(e,t),e===null&&Or(t.stateNode.containerInfo),me(t),null;case 10:return ea(t.type._context),me(t),null;case 17:return Pe(t.type)&&Qo(),me(t),null;case 19:if(W(K),i=t.memoizedState,i===null)return me(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)sr(i,!1);else{if(se!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=ti(e),l!==null){for(t.flags|=128,sr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return $(K,K.current&1|2),t.child}e=e.sibling}i.tail!==null&&ee()>Bn&&(t.flags|=128,r=!0,sr(i,!1),t.lanes=4194304)}else{if(!r)if(e=ti(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),sr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!V)return me(t),null}else 2*ee()-i.renderingStartTime>Bn&&n!==1073741824&&(t.flags|=128,r=!0,sr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ee(),t.sibling=null,n=K.current,$(K,r?n&1|2:n&1),t):(me(t),null);case 22:case 23:return ga(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Le&1073741824&&(me(t),t.subtreeFlags&6&&(t.flags|=8192)):me(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function Uh(e,t){switch(Js(t),t.tag){case 1:return Pe(t.type)&&Qo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Fn(),W(Re),W(xe),ia(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return oa(t),null;case 13:if(W(K),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));Mn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return W(K),null;case 4:return Fn(),null;case 10:return ea(t.type._context),null;case 22:case 23:return ga(),null;case 24:return null;default:return null}}var xo=!1,ge=!1,Bh=typeof WeakSet=="function"?WeakSet:Set,P=null;function jn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){J(e,t,r)}else n.current=null}function as(e,t,n){try{n()}catch(r){J(e,t,r)}}var Du=!1;function $h(e,t){if(Vl=Wo,e=Ed(),Qs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,s=-1,a=-1,u=0,d=0,h=e,g=null;t:for(;;){for(var x;h!==n||o!==0&&h.nodeType!==3||(s=l+o),h!==i||r!==0&&h.nodeType!==3||(a=l+r),h.nodeType===3&&(l+=h.nodeValue.length),(x=h.firstChild)!==null;)g=h,h=x;for(;;){if(h===e)break t;if(g===n&&++u===o&&(s=l),g===i&&++d===r&&(a=l),(x=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=x}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Kl={focusedElem:e,selectionRange:n},Wo=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var S=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var y=S.memoizedProps,v=S.memoizedState,m=t.stateNode,p=m.getSnapshotBeforeUpdate(t.elementType===t.type?y:Qe(t.type,y),v);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(w){J(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return S=Du,Du=!1,S}function kr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&as(t,n,i)}o=o.next}while(o!==r)}}function Ei(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function us(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function wf(e){var t=e.alternate;t!==null&&(e.alternate=null,wf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ot],delete t[Ar],delete t[ql],delete t[bh],delete t[Nh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function kf(e){return e.tag===5||e.tag===3||e.tag===4}function Mu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||kf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function cs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Go));else if(r!==4&&(e=e.child,e!==null))for(cs(e,t,n),e=e.sibling;e!==null;)cs(e,t,n),e=e.sibling}function ds(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ds(e,t,n),e=e.sibling;e!==null;)ds(e,t,n),e=e.sibling}var ce=null,qe=!1;function bt(e,t,n){for(n=n.child;n!==null;)Sf(e,t,n),n=n.sibling}function Sf(e,t,n){if(lt&&typeof lt.onCommitFiberUnmount=="function")try{lt.onCommitFiberUnmount(mi,n)}catch{}switch(n.tag){case 5:ge||jn(n,t);case 6:var r=ce,o=qe;ce=null,bt(e,t,n),ce=r,qe=o,ce!==null&&(qe?(e=ce,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ce.removeChild(n.stateNode));break;case 18:ce!==null&&(qe?(e=ce,n=n.stateNode,e.nodeType===8?il(e.parentNode,n):e.nodeType===1&&il(e,n),Pr(e)):il(ce,n.stateNode));break;case 4:r=ce,o=qe,ce=n.stateNode.containerInfo,qe=!0,bt(e,t,n),ce=r,qe=o;break;case 0:case 11:case 14:case 15:if(!ge&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&as(n,t,l),o=o.next}while(o!==r)}bt(e,t,n);break;case 1:if(!ge&&(jn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){J(n,t,s)}bt(e,t,n);break;case 21:bt(e,t,n);break;case 22:n.mode&1?(ge=(r=ge)||n.memoizedState!==null,bt(e,t,n),ge=r):bt(e,t,n);break;default:bt(e,t,n)}}function Iu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Bh),t.forEach(function(r){var o=Xh.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ge(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:ce=s.stateNode,qe=!1;break e;case 3:ce=s.stateNode.containerInfo,qe=!0;break e;case 4:ce=s.stateNode.containerInfo,qe=!0;break e}s=s.return}if(ce===null)throw Error(C(160));Sf(i,l,o),ce=null,qe=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(u){J(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ef(t,e),t=t.sibling}function Ef(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ge(t,e),nt(e),r&4){try{kr(3,e,e.return),Ei(3,e)}catch(y){J(e,e.return,y)}try{kr(5,e,e.return)}catch(y){J(e,e.return,y)}}break;case 1:Ge(t,e),nt(e),r&512&&n!==null&&jn(n,n.return);break;case 5:if(Ge(t,e),nt(e),r&512&&n!==null&&jn(n,n.return),e.flags&32){var o=e.stateNode;try{Nr(o,"")}catch(y){J(e,e.return,y)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Wc(o,i),zl(s,l);var u=zl(s,i);for(l=0;l<a.length;l+=2){var d=a[l],h=a[l+1];d==="style"?qc(o,h):d==="dangerouslySetInnerHTML"?Gc(o,h):d==="children"?Nr(o,h):zs(o,d,h,u)}switch(s){case"input":_l(o,i);break;case"textarea":Vc(o,i);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?Pn(o,!!i.multiple,x,!1):g!==!!i.multiple&&(i.defaultValue!=null?Pn(o,!!i.multiple,i.defaultValue,!0):Pn(o,!!i.multiple,i.multiple?[]:"",!1))}o[Ar]=i}catch(y){J(e,e.return,y)}}break;case 6:if(Ge(t,e),nt(e),r&4){if(e.stateNode===null)throw Error(C(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(y){J(e,e.return,y)}}break;case 3:if(Ge(t,e),nt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Pr(t.containerInfo)}catch(y){J(e,e.return,y)}break;case 4:Ge(t,e),nt(e);break;case 13:Ge(t,e),nt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(ha=ee())),r&4&&Iu(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(ge=(u=ge)||d,Ge(t,e),ge=u):Ge(t,e),nt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(P=e,d=e.child;d!==null;){for(h=P=d;P!==null;){switch(g=P,x=g.child,g.tag){case 0:case 11:case 14:case 15:kr(4,g,g.return);break;case 1:jn(g,g.return);var S=g.stateNode;if(typeof S.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,S.props=t.memoizedProps,S.state=t.memoizedState,S.componentWillUnmount()}catch(y){J(r,n,y)}}break;case 5:jn(g,g.return);break;case 22:if(g.memoizedState!==null){Uu(h);continue}}x!==null?(x.return=g,P=x):Uu(h)}d=d.sibling}e:for(d=null,h=e;;){if(h.tag===5){if(d===null){d=h;try{o=h.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=h.stateNode,a=h.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Qc("display",l))}catch(y){J(e,e.return,y)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(y){J(e,e.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ge(t,e),nt(e),r&4&&Iu(e);break;case 21:break;default:Ge(t,e),nt(e)}}function nt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(kf(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Nr(o,""),r.flags&=-33);var i=Mu(e);ds(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,s=Mu(e);cs(e,s,l);break;default:throw Error(C(161))}}catch(a){J(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Hh(e,t,n){P=e,bf(e)}function bf(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var o=P,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||xo;if(!l){var s=o.alternate,a=s!==null&&s.memoizedState!==null||ge;s=xo;var u=ge;if(xo=l,(ge=a)&&!u)for(P=o;P!==null;)l=P,a=l.child,l.tag===22&&l.memoizedState!==null?Bu(o):a!==null?(a.return=l,P=a):Bu(o);for(;i!==null;)P=i,bf(i),i=i.sibling;P=o,xo=s,ge=u}Fu(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,P=i):Fu(e)}}function Fu(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ge||Ei(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ge)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Qe(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Eu(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Eu(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&Pr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}ge||t.flags&512&&us(t)}catch(g){J(t,t.return,g)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function Uu(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function Bu(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ei(4,t)}catch(a){J(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(a){J(t,o,a)}}var i=t.return;try{us(t)}catch(a){J(t,i,a)}break;case 5:var l=t.return;try{us(t)}catch(a){J(t,l,a)}}}catch(a){J(t,t.return,a)}if(t===e){P=null;break}var s=t.sibling;if(s!==null){s.return=t.return,P=s;break}P=t.return}}var Wh=Math.ceil,oi=wt.ReactCurrentDispatcher,fa=wt.ReactCurrentOwner,He=wt.ReactCurrentBatchConfig,M=0,ue=null,oe=null,de=0,Le=0,Rn=Kt(0),se=0,Ur=null,un=0,bi=0,pa=0,Sr=null,Ce=null,ha=0,Bn=1/0,ct=null,ii=!1,fs=null,Ft=null,vo=!1,Ot=null,li=0,Er=0,ps=null,Oo=-1,Lo=0;function we(){return M&6?ee():Oo!==-1?Oo:Oo=ee()}function Ut(e){return e.mode&1?M&2&&de!==0?de&-de:jh.transition!==null?(Lo===0&&(Lo=sd()),Lo):(e=F,e!==0||(e=window.event,e=e===void 0?16:hd(e.type)),e):1}function Ye(e,t,n,r){if(50<Er)throw Er=0,ps=null,Error(C(185));Vr(e,n,r),(!(M&2)||e!==ue)&&(e===ue&&(!(M&2)&&(bi|=n),se===4&&Pt(e,de)),_e(e,r),n===1&&M===0&&!(t.mode&1)&&(Bn=ee()+500,wi&&Gt()))}function _e(e,t){var n=e.callbackNode;j0(e,t);var r=Ho(e,e===ue?de:0);if(r===0)n!==null&&Ja(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ja(n),t===1)e.tag===0?Ch($u.bind(null,e)):Ld($u.bind(null,e)),Sh(function(){!(M&6)&&Gt()}),n=null;else{switch(ad(r)){case 1:n=Us;break;case 4:n=id;break;case 16:n=$o;break;case 536870912:n=ld;break;default:n=$o}n=Of(n,Nf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Nf(e,t){if(Oo=-1,Lo=0,M&6)throw Error(C(327));var n=e.callbackNode;if(An()&&e.callbackNode!==n)return null;var r=Ho(e,e===ue?de:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=si(e,r);else{t=r;var o=M;M|=2;var i=jf();(ue!==e||de!==t)&&(ct=null,Bn=ee()+500,tn(e,t));do try{Gh();break}catch(s){Cf(e,s)}while(!0);Zs(),oi.current=i,M=o,oe!==null?t=0:(ue=null,de=0,t=se)}if(t!==0){if(t===2&&(o=Ul(e),o!==0&&(r=o,t=hs(e,o))),t===1)throw n=Ur,tn(e,0),Pt(e,r),_e(e,ee()),n;if(t===6)Pt(e,r);else{if(o=e.current.alternate,!(r&30)&&!Vh(o)&&(t=si(e,r),t===2&&(i=Ul(e),i!==0&&(r=i,t=hs(e,i))),t===1))throw n=Ur,tn(e,0),Pt(e,r),_e(e,ee()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(C(345));case 2:Jt(e,Ce,ct);break;case 3:if(Pt(e,r),(r&130023424)===r&&(t=ha+500-ee(),10<t)){if(Ho(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){we(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ql(Jt.bind(null,e,Ce,ct),t);break}Jt(e,Ce,ct);break;case 4:if(Pt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-Xe(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Wh(r/1960))-r,10<r){e.timeoutHandle=Ql(Jt.bind(null,e,Ce,ct),r);break}Jt(e,Ce,ct);break;case 5:Jt(e,Ce,ct);break;default:throw Error(C(329))}}}return _e(e,ee()),e.callbackNode===n?Nf.bind(null,e):null}function hs(e,t){var n=Sr;return e.current.memoizedState.isDehydrated&&(tn(e,t).flags|=256),e=si(e,t),e!==2&&(t=Ce,Ce=n,t!==null&&ms(t)),e}function ms(e){Ce===null?Ce=e:Ce.push.apply(Ce,e)}function Vh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Ze(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Pt(e,t){for(t&=~pa,t&=~bi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Xe(t),r=1<<n;e[n]=-1,t&=~r}}function $u(e){if(M&6)throw Error(C(327));An();var t=Ho(e,0);if(!(t&1))return _e(e,ee()),null;var n=si(e,t);if(e.tag!==0&&n===2){var r=Ul(e);r!==0&&(t=r,n=hs(e,r))}if(n===1)throw n=Ur,tn(e,0),Pt(e,t),_e(e,ee()),n;if(n===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Jt(e,Ce,ct),_e(e,ee()),null}function ma(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(Bn=ee()+500,wi&&Gt())}}function cn(e){Ot!==null&&Ot.tag===0&&!(M&6)&&An();var t=M;M|=1;var n=He.transition,r=F;try{if(He.transition=null,F=1,e)return e()}finally{F=r,He.transition=n,M=t,!(M&6)&&Gt()}}function ga(){Le=Rn.current,W(Rn)}function tn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,kh(n)),oe!==null)for(n=oe.return;n!==null;){var r=n;switch(Js(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Qo();break;case 3:Fn(),W(Re),W(xe),ia();break;case 5:oa(r);break;case 4:Fn();break;case 13:W(K);break;case 19:W(K);break;case 10:ea(r.type._context);break;case 22:case 23:ga()}n=n.return}if(ue=e,oe=e=Bt(e.current,null),de=Le=t,se=0,Ur=null,pa=bi=un=0,Ce=Sr=null,Yt!==null){for(t=0;t<Yt.length;t++)if(n=Yt[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}Yt=null}return e}function Cf(e,t){do{var n=oe;try{if(Zs(),Po.current=ri,ni){for(var r=G.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}ni=!1}if(an=0,ae=ie=G=null,wr=!1,Mr=0,fa.current=null,n===null||n.return===null){se=1,Ur=t,oe=null;break}e:{var i=e,l=n.return,s=n,a=t;if(t=de,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=s,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var g=d.alternate;g?(d.updateQueue=g.updateQueue,d.memoizedState=g.memoizedState,d.lanes=g.lanes):(d.updateQueue=null,d.memoizedState=null)}var x=Pu(l);if(x!==null){x.flags&=-257,_u(x,l,s,i,t),x.mode&1&&Ru(i,u,t),t=x,a=u;var S=t.updateQueue;if(S===null){var y=new Set;y.add(a),t.updateQueue=y}else S.add(a);break e}else{if(!(t&1)){Ru(i,u,t),ya();break e}a=Error(C(426))}}else if(V&&s.mode&1){var v=Pu(l);if(v!==null){!(v.flags&65536)&&(v.flags|=256),_u(v,l,s,i,t),Xs(Un(a,s));break e}}i=a=Un(a,s),se!==4&&(se=2),Sr===null?Sr=[i]:Sr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var m=uf(i,a,t);Su(i,m);break e;case 1:s=a;var p=i.type,f=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ft===null||!Ft.has(f)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=cf(i,s,t);Su(i,w);break e}}i=i.return}while(i!==null)}Pf(n)}catch(N){t=N,oe===n&&n!==null&&(oe=n=n.return);continue}break}while(!0)}function jf(){var e=oi.current;return oi.current=ri,e===null?ri:e}function ya(){(se===0||se===3||se===2)&&(se=4),ue===null||!(un&268435455)&&!(bi&268435455)||Pt(ue,de)}function si(e,t){var n=M;M|=2;var r=jf();(ue!==e||de!==t)&&(ct=null,tn(e,t));do try{Kh();break}catch(o){Cf(e,o)}while(!0);if(Zs(),M=n,oi.current=r,oe!==null)throw Error(C(261));return ue=null,de=0,se}function Kh(){for(;oe!==null;)Rf(oe)}function Gh(){for(;oe!==null&&!x0();)Rf(oe)}function Rf(e){var t=Tf(e.alternate,e,Le);e.memoizedProps=e.pendingProps,t===null?Pf(e):oe=t,fa.current=null}function Pf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Uh(n,t),n!==null){n.flags&=32767,oe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{se=6,oe=null;return}}else if(n=Fh(n,t,Le),n!==null){oe=n;return}if(t=t.sibling,t!==null){oe=t;return}oe=t=e}while(t!==null);se===0&&(se=5)}function Jt(e,t,n){var r=F,o=He.transition;try{He.transition=null,F=1,Qh(e,t,n,r)}finally{He.transition=o,F=r}return null}function Qh(e,t,n,r){do An();while(Ot!==null);if(M&6)throw Error(C(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(R0(e,i),e===ue&&(oe=ue=null,de=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||vo||(vo=!0,Of($o,function(){return An(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=He.transition,He.transition=null;var l=F;F=1;var s=M;M|=4,fa.current=null,$h(e,n),Ef(n,e),hh(Kl),Wo=!!Vl,Kl=Vl=null,e.current=n,Hh(n),v0(),M=s,F=l,He.transition=i}else e.current=n;if(vo&&(vo=!1,Ot=e,li=o),i=e.pendingLanes,i===0&&(Ft=null),S0(n.stateNode),_e(e,ee()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(ii)throw ii=!1,e=fs,fs=null,e;return li&1&&e.tag!==0&&An(),i=e.pendingLanes,i&1?e===ps?Er++:(Er=0,ps=e):Er=0,Gt(),null}function An(){if(Ot!==null){var e=ad(li),t=He.transition,n=F;try{if(He.transition=null,F=16>e?16:e,Ot===null)var r=!1;else{if(e=Ot,Ot=null,li=0,M&6)throw Error(C(331));var o=M;for(M|=4,P=e.current;P!==null;){var i=P,l=i.child;if(P.flags&16){var s=i.deletions;if(s!==null){for(var a=0;a<s.length;a++){var u=s[a];for(P=u;P!==null;){var d=P;switch(d.tag){case 0:case 11:case 15:kr(8,d,i)}var h=d.child;if(h!==null)h.return=d,P=h;else for(;P!==null;){d=P;var g=d.sibling,x=d.return;if(wf(d),d===u){P=null;break}if(g!==null){g.return=x,P=g;break}P=x}}}var S=i.alternate;if(S!==null){var y=S.child;if(y!==null){S.child=null;do{var v=y.sibling;y.sibling=null,y=v}while(y!==null)}}P=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,P=l;else e:for(;P!==null;){if(i=P,i.flags&2048)switch(i.tag){case 0:case 11:case 15:kr(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,P=m;break e}P=i.return}}var p=e.current;for(P=p;P!==null;){l=P;var f=l.child;if(l.subtreeFlags&2064&&f!==null)f.return=l,P=f;else e:for(l=p;P!==null;){if(s=P,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Ei(9,s)}}catch(N){J(s,s.return,N)}if(s===l){P=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,P=w;break e}P=s.return}}if(M=o,Gt(),lt&&typeof lt.onPostCommitFiberRoot=="function")try{lt.onPostCommitFiberRoot(mi,e)}catch{}r=!0}return r}finally{F=n,He.transition=t}}return!1}function Hu(e,t,n){t=Un(n,t),t=uf(e,t,1),e=It(e,t,1),t=we(),e!==null&&(Vr(e,1,t),_e(e,t))}function J(e,t,n){if(e.tag===3)Hu(e,e,n);else for(;t!==null;){if(t.tag===3){Hu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ft===null||!Ft.has(r))){e=Un(n,e),e=cf(t,e,1),t=It(t,e,1),e=we(),t!==null&&(Vr(t,1,e),_e(t,e));break}}t=t.return}}function qh(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=we(),e.pingedLanes|=e.suspendedLanes&n,ue===e&&(de&n)===n&&(se===4||se===3&&(de&130023424)===de&&500>ee()-ha?tn(e,0):pa|=n),_e(e,t)}function _f(e,t){t===0&&(e.mode&1?(t=ao,ao<<=1,!(ao&130023424)&&(ao=4194304)):t=1);var n=we();e=yt(e,t),e!==null&&(Vr(e,t,n),_e(e,n))}function Jh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),_f(e,n)}function Xh(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(t),_f(e,n)}var Tf;Tf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Re.current)je=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return je=!1,Ih(e,t,n);je=!!(e.flags&131072)}else je=!1,V&&t.flags&1048576&&Ad(t,Xo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;To(e,t),e=t.pendingProps;var o=Dn(t,xe.current);Ln(t,n),o=sa(null,t,r,e,o,n);var i=aa();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Pe(r)?(i=!0,qo(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,na(t),o.updater=Si,t.stateNode=o,o._reactInternals=t,ts(t,r,e,n),t=os(null,t,r,!0,i,n)):(t.tag=0,V&&i&&qs(t),ve(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(To(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Zh(r),e=Qe(r,e),o){case 0:t=rs(null,t,r,e,n);break e;case 1:t=Lu(null,t,r,e,n);break e;case 11:t=Tu(null,t,r,e,n);break e;case 14:t=Ou(null,t,r,Qe(r.type,e),n);break e}throw Error(C(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Qe(r,o),rs(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Qe(r,o),Lu(e,t,r,o,n);case 3:e:{if(hf(t),e===null)throw Error(C(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Ud(e,t),ei(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Un(Error(C(423)),t),t=Au(e,t,r,n,o);break e}else if(r!==o){o=Un(Error(C(424)),t),t=Au(e,t,r,n,o);break e}else for(Ae=Mt(t.stateNode.containerInfo.firstChild),ze=t,V=!0,Je=null,n=Id(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Mn(),r===o){t=xt(e,t,n);break e}ve(e,t,r,n)}t=t.child}return t;case 5:return Bd(t),e===null&&Yl(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Gl(r,o)?l=null:i!==null&&Gl(r,i)&&(t.flags|=32),pf(e,t),ve(e,t,l,n),t.child;case 6:return e===null&&Yl(t),null;case 13:return mf(e,t,n);case 4:return ra(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=In(t,null,r,n):ve(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Qe(r,o),Tu(e,t,r,o,n);case 7:return ve(e,t,t.pendingProps,n),t.child;case 8:return ve(e,t,t.pendingProps.children,n),t.child;case 12:return ve(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,$(Yo,r._currentValue),r._currentValue=l,i!==null)if(Ze(i.value,l)){if(i.children===o.children&&!Re.current){t=xt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=ht(-1,n&-n),a.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),Zl(i.return,n,t),s.lanes|=n;break}a=a.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(C(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Zl(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}ve(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Ln(t,n),o=We(o),r=r(o),t.flags|=1,ve(e,t,r,n),t.child;case 14:return r=t.type,o=Qe(r,t.pendingProps),o=Qe(r.type,o),Ou(e,t,r,o,n);case 15:return df(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Qe(r,o),To(e,t),t.tag=1,Pe(r)?(e=!0,qo(t)):e=!1,Ln(t,n),af(t,r,o),ts(t,r,o,n),os(null,t,r,!0,e,n);case 19:return gf(e,t,n);case 22:return ff(e,t,n)}throw Error(C(156,t.tag))};function Of(e,t){return od(e,t)}function Yh(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $e(e,t,n,r){return new Yh(e,t,n,r)}function xa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Zh(e){if(typeof e=="function")return xa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ms)return 11;if(e===Is)return 14}return 2}function Bt(e,t){var n=e.alternate;return n===null?(n=$e(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ao(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")xa(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case xn:return nn(n.children,o,i,t);case Ds:l=8,o|=8;break;case Nl:return e=$e(12,n,t,o|2),e.elementType=Nl,e.lanes=i,e;case Cl:return e=$e(13,n,t,o),e.elementType=Cl,e.lanes=i,e;case jl:return e=$e(19,n,t,o),e.elementType=jl,e.lanes=i,e;case Bc:return Ni(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Fc:l=10;break e;case Uc:l=9;break e;case Ms:l=11;break e;case Is:l=14;break e;case Ct:l=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=$e(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function nn(e,t,n,r){return e=$e(7,e,r,t),e.lanes=n,e}function Ni(e,t,n,r){return e=$e(22,e,r,t),e.elementType=Bc,e.lanes=n,e.stateNode={isHidden:!1},e}function pl(e,t,n){return e=$e(6,e,null,t),e.lanes=n,e}function hl(e,t,n){return t=$e(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function em(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qi(0),this.expirationTimes=Qi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qi(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function va(e,t,n,r,o,i,l,s,a){return e=new em(e,t,n,s,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=$e(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},na(i),e}function tm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:yn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Lf(e){if(!e)return Wt;e=e._reactInternals;e:{if(pn(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Pe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var n=e.type;if(Pe(n))return Od(e,n,t)}return t}function Af(e,t,n,r,o,i,l,s,a){return e=va(n,r,!0,e,o,i,l,s,a),e.context=Lf(null),n=e.current,r=we(),o=Ut(n),i=ht(r,o),i.callback=t??null,It(n,i,o),e.current.lanes=o,Vr(e,o,r),_e(e,r),e}function Ci(e,t,n,r){var o=t.current,i=we(),l=Ut(o);return n=Lf(n),t.context===null?t.context=n:t.pendingContext=n,t=ht(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=It(o,t,l),e!==null&&(Ye(e,o,l,i),Ro(e,o,l)),l}function ai(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Wu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function wa(e,t){Wu(e,t),(e=e.alternate)&&Wu(e,t)}function nm(){return null}var zf=typeof reportError=="function"?reportError:function(e){console.error(e)};function ka(e){this._internalRoot=e}ji.prototype.render=ka.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));Ci(e,t,null,null)};ji.prototype.unmount=ka.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;cn(function(){Ci(null,e,null,null)}),t[gt]=null}};function ji(e){this._internalRoot=e}ji.prototype.unstable_scheduleHydration=function(e){if(e){var t=dd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Rt.length&&t!==0&&t<Rt[n].priority;n++);Rt.splice(n,0,e),n===0&&pd(e)}};function Sa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ri(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Vu(){}function rm(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=ai(l);i.call(u)}}var l=Af(t,r,e,0,null,!1,!1,"",Vu);return e._reactRootContainer=l,e[gt]=l.current,Or(e.nodeType===8?e.parentNode:e),cn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var u=ai(a);s.call(u)}}var a=va(e,0,!1,null,null,!1,!1,"",Vu);return e._reactRootContainer=a,e[gt]=a.current,Or(e.nodeType===8?e.parentNode:e),cn(function(){Ci(t,a,n,r)}),a}function Pi(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var s=o;o=function(){var a=ai(l);s.call(a)}}Ci(t,l,e,o)}else l=rm(n,t,e,o,r);return ai(l)}ud=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=pr(t.pendingLanes);n!==0&&(Bs(t,n|1),_e(t,ee()),!(M&6)&&(Bn=ee()+500,Gt()))}break;case 13:cn(function(){var r=yt(e,1);if(r!==null){var o=we();Ye(r,e,1,o)}}),wa(e,1)}};$s=function(e){if(e.tag===13){var t=yt(e,134217728);if(t!==null){var n=we();Ye(t,e,134217728,n)}wa(e,134217728)}};cd=function(e){if(e.tag===13){var t=Ut(e),n=yt(e,t);if(n!==null){var r=we();Ye(n,e,t,r)}wa(e,t)}};dd=function(){return F};fd=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};Ml=function(e,t,n){switch(t){case"input":if(_l(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=vi(r);if(!o)throw Error(C(90));Hc(r),_l(r,o)}}}break;case"textarea":Vc(e,n);break;case"select":t=n.value,t!=null&&Pn(e,!!n.multiple,t,!1)}};Yc=ma;Zc=cn;var om={usingClientEntryPoint:!1,Events:[Gr,Sn,vi,Jc,Xc,ma]},ar={findFiberByHostInstance:Xt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},im={bundleType:ar.bundleType,version:ar.version,rendererPackageName:ar.rendererPackageName,rendererConfig:ar.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:wt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=nd(e),e===null?null:e.stateNode},findFiberByHostInstance:ar.findFiberByHostInstance||nm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wo.isDisabled&&wo.supportsFiber)try{mi=wo.inject(im),lt=wo}catch{}}Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=om;Me.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Sa(t))throw Error(C(200));return tm(e,t,null,n)};Me.createRoot=function(e,t){if(!Sa(e))throw Error(C(299));var n=!1,r="",o=zf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=va(e,1,!1,null,null,n,!1,r,o),e[gt]=t.current,Or(e.nodeType===8?e.parentNode:e),new ka(t)};Me.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=nd(t),e=e===null?null:e.stateNode,e};Me.flushSync=function(e){return cn(e)};Me.hydrate=function(e,t,n){if(!Ri(t))throw Error(C(200));return Pi(null,e,t,!0,n)};Me.hydrateRoot=function(e,t,n){if(!Sa(e))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=zf;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Af(t,null,e,1,n??null,o,!1,i,l),e[gt]=t.current,Or(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new ji(t)};Me.render=function(e,t,n){if(!Ri(t))throw Error(C(200));return Pi(null,e,t,!1,n)};Me.unmountComponentAtNode=function(e){if(!Ri(e))throw Error(C(40));return e._reactRootContainer?(cn(function(){Pi(null,null,e,!1,function(){e._reactRootContainer=null,e[gt]=null})}),!0):!1};Me.unstable_batchedUpdates=ma;Me.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ri(n))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return Pi(e,t,n,!1,r)};Me.version="18.3.1-next-f1338f8080-20240426";function Df(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Df)}catch(e){console.error(e)}}Df(),zc.exports=Me;var lm=zc.exports,Ku=lm;El.createRoot=Ku.createRoot,El.hydrateRoot=Ku.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Br(){return Br=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Br.apply(this,arguments)}var Lt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Lt||(Lt={}));const Gu="popstate";function sm(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:l,hash:s}=r.location;return gs("",{pathname:i,search:l,hash:s},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:ui(o)}return um(t,n,null,e)}function Q(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ea(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function am(){return Math.random().toString(36).substr(2,8)}function Qu(e,t){return{usr:e.state,key:e.key,idx:t}}function gs(e,t,n,r){return n===void 0&&(n=null),Br({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Qn(t):t,{state:n,key:t&&t.key||r||am()})}function ui(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Qn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function um(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,l=o.history,s=Lt.Pop,a=null,u=d();u==null&&(u=0,l.replaceState(Br({},l.state,{idx:u}),""));function d(){return(l.state||{idx:null}).idx}function h(){s=Lt.Pop;let v=d(),m=v==null?null:v-u;u=v,a&&a({action:s,location:y.location,delta:m})}function g(v,m){s=Lt.Push;let p=gs(y.location,v,m);u=d()+1;let f=Qu(p,u),w=y.createHref(p);try{l.pushState(f,"",w)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;o.location.assign(w)}i&&a&&a({action:s,location:y.location,delta:1})}function x(v,m){s=Lt.Replace;let p=gs(y.location,v,m);u=d();let f=Qu(p,u),w=y.createHref(p);l.replaceState(f,"",w),i&&a&&a({action:s,location:y.location,delta:0})}function S(v){let m=o.location.origin!=="null"?o.location.origin:o.location.href,p=typeof v=="string"?v:ui(v);return p=p.replace(/ $/,"%20"),Q(m,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,m)}let y={get action(){return s},get location(){return e(o,l)},listen(v){if(a)throw new Error("A history only accepts one active listener");return o.addEventListener(Gu,h),a=v,()=>{o.removeEventListener(Gu,h),a=null}},createHref(v){return t(o,v)},createURL:S,encodeLocation(v){let m=S(v);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:g,replace:x,go(v){return l.go(v)}};return y}var qu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(qu||(qu={}));function cm(e,t,n){return n===void 0&&(n="/"),dm(e,t,n)}function dm(e,t,n,r){let o=typeof t=="string"?Qn(t):t,i=$n(o.pathname||"/",n);if(i==null)return null;let l=Mf(e);fm(l);let s=null;for(let a=0;s==null&&a<l.length;++a){let u=Em(i);s=km(l[a],u)}return s}function Mf(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,l,s)=>{let a={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};a.relativePath.startsWith("/")&&(Q(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=$t([r,a.relativePath]),d=n.concat(a);i.children&&i.children.length>0&&(Q(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Mf(i.children,t,d,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:vm(u,i.index),routesMeta:d})};return e.forEach((i,l)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))o(i,l);else for(let a of If(i.path))o(i,l,a)}),t}function If(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let l=If(r.join("/")),s=[];return s.push(...l.map(a=>a===""?i:[i,a].join("/"))),o&&s.push(...l),s.map(a=>e.startsWith("/")&&a===""?"/":a)}function fm(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:wm(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const pm=/^:[\w-]+$/,hm=3,mm=2,gm=1,ym=10,xm=-2,Ju=e=>e==="*";function vm(e,t){let n=e.split("/"),r=n.length;return n.some(Ju)&&(r+=xm),t&&(r+=mm),n.filter(o=>!Ju(o)).reduce((o,i)=>o+(pm.test(i)?hm:i===""?gm:ym),r)}function wm(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function km(e,t,n){let{routesMeta:r}=e,o={},i="/",l=[];for(let s=0;s<r.length;++s){let a=r[s],u=s===r.length-1,d=i==="/"?t:t.slice(i.length)||"/",h=ys({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},d),g=a.route;if(!h)return null;Object.assign(o,h.params),l.push({params:o,pathname:$t([i,h.pathname]),pathnameBase:Rm($t([i,h.pathnameBase])),route:g}),h.pathnameBase!=="/"&&(i=$t([i,h.pathnameBase]))}return l}function ys(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Sm(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],l=i.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:r.reduce((u,d,h)=>{let{paramName:g,isOptional:x}=d;if(g==="*"){let y=s[h]||"";l=i.slice(0,i.length-y.length).replace(/(.)\/+$/,"$1")}const S=s[h];return x&&!S?u[g]=void 0:u[g]=(S||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:l,pattern:e}}function Sm(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Ea(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,s,a)=>(r.push({paramName:s,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function Em(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Ea(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function $n(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const bm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Nm=e=>bm.test(e);function Cm(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Qn(e):e,i;if(n)if(Nm(n))i=n;else{if(n.includes("//")){let l=n;n=n.replace(/\/\/+/g,"/"),Ea(!1,"Pathnames cannot have embedded double slashes - normalizing "+(l+" -> "+n))}n.startsWith("/")?i=Xu(n.substring(1),"/"):i=Xu(n,t)}else i=t;return{pathname:i,search:Pm(r),hash:_m(o)}}function Xu(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function ml(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function jm(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ba(e,t){let n=jm(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Na(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Qn(e):(o=Br({},e),Q(!o.pathname||!o.pathname.includes("?"),ml("?","pathname","search",o)),Q(!o.pathname||!o.pathname.includes("#"),ml("#","pathname","hash",o)),Q(!o.search||!o.search.includes("#"),ml("#","search","hash",o)));let i=e===""||o.pathname==="",l=i?"/":o.pathname,s;if(l==null)s=n;else{let h=t.length-1;if(!r&&l.startsWith("..")){let g=l.split("/");for(;g[0]==="..";)g.shift(),h-=1;o.pathname=g.join("/")}s=h>=0?t[h]:"/"}let a=Cm(o,s),u=l&&l!=="/"&&l.endsWith("/"),d=(i||l===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||d)&&(a.pathname+="/"),a}const $t=e=>e.join("/").replace(/\/\/+/g,"/"),Rm=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Pm=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,_m=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Tm(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Ff=["post","put","patch","delete"];new Set(Ff);const Om=["get",...Ff];new Set(Om);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $r(){return $r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$r.apply(this,arguments)}const _i=E.createContext(null),Uf=E.createContext(null),kt=E.createContext(null),Ti=E.createContext(null),St=E.createContext({outlet:null,matches:[],isDataRoute:!1}),Bf=E.createContext(null);function Lm(e,t){let{relative:n}=t===void 0?{}:t;qn()||Q(!1);let{basename:r,navigator:o}=E.useContext(kt),{hash:i,pathname:l,search:s}=Li(e,{relative:n}),a=l;return r!=="/"&&(a=l==="/"?r:$t([r,l])),o.createHref({pathname:a,search:s,hash:i})}function qn(){return E.useContext(Ti)!=null}function Jn(){return qn()||Q(!1),E.useContext(Ti).location}function $f(e){E.useContext(kt).static||E.useLayoutEffect(e)}function Oi(){let{isDataRoute:e}=E.useContext(St);return e?Qm():Am()}function Am(){qn()||Q(!1);let e=E.useContext(_i),{basename:t,future:n,navigator:r}=E.useContext(kt),{matches:o}=E.useContext(St),{pathname:i}=Jn(),l=JSON.stringify(ba(o,n.v7_relativeSplatPath)),s=E.useRef(!1);return $f(()=>{s.current=!0}),E.useCallback(function(u,d){if(d===void 0&&(d={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let h=Na(u,JSON.parse(l),i,d.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:$t([t,h.pathname])),(d.replace?r.replace:r.push)(h,d.state,d)},[t,r,l,i,e])}const zm=E.createContext(null);function Dm(e){let t=E.useContext(St).outlet;return t&&E.createElement(zm.Provider,{value:e},t)}function Li(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=E.useContext(kt),{matches:o}=E.useContext(St),{pathname:i}=Jn(),l=JSON.stringify(ba(o,r.v7_relativeSplatPath));return E.useMemo(()=>Na(e,JSON.parse(l),i,n==="path"),[e,l,i,n])}function Mm(e,t){return Im(e,t)}function Im(e,t,n,r){qn()||Q(!1);let{navigator:o}=E.useContext(kt),{matches:i}=E.useContext(St),l=i[i.length-1],s=l?l.params:{};l&&l.pathname;let a=l?l.pathnameBase:"/";l&&l.route;let u=Jn(),d;if(t){var h;let v=typeof t=="string"?Qn(t):t;a==="/"||(h=v.pathname)!=null&&h.startsWith(a)||Q(!1),d=v}else d=u;let g=d.pathname||"/",x=g;if(a!=="/"){let v=a.replace(/^\//,"").split("/");x="/"+g.replace(/^\//,"").split("/").slice(v.length).join("/")}let S=cm(e,{pathname:x}),y=Hm(S&&S.map(v=>Object.assign({},v,{params:Object.assign({},s,v.params),pathname:$t([a,o.encodeLocation?o.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:$t([a,o.encodeLocation?o.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,n,r);return t&&y?E.createElement(Ti.Provider,{value:{location:$r({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Lt.Pop}},y):y}function Fm(){let e=Gm(),t=Tm(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},t),n?E.createElement("pre",{style:o},n):null,null)}const Um=E.createElement(Fm,null);class Bm extends E.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?E.createElement(St.Provider,{value:this.props.routeContext},E.createElement(Bf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function $m(e){let{routeContext:t,match:n,children:r}=e,o=E.useContext(_i);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(St.Provider,{value:t},r)}function Hm(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,s=(o=n)==null?void 0:o.errors;if(s!=null){let d=l.findIndex(h=>h.route.id&&(s==null?void 0:s[h.route.id])!==void 0);d>=0||Q(!1),l=l.slice(0,Math.min(l.length,d+1))}let a=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<l.length;d++){let h=l[d];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(u=d),h.route.id){let{loaderData:g,errors:x}=n,S=h.route.loader&&g[h.route.id]===void 0&&(!x||x[h.route.id]===void 0);if(h.route.lazy||S){a=!0,u>=0?l=l.slice(0,u+1):l=[l[0]];break}}}return l.reduceRight((d,h,g)=>{let x,S=!1,y=null,v=null;n&&(x=s&&h.route.id?s[h.route.id]:void 0,y=h.route.errorElement||Um,a&&(u<0&&g===0?(qm("route-fallback"),S=!0,v=null):u===g&&(S=!0,v=h.route.hydrateFallbackElement||null)));let m=t.concat(l.slice(0,g+1)),p=()=>{let f;return x?f=y:S?f=v:h.route.Component?f=E.createElement(h.route.Component,null):h.route.element?f=h.route.element:f=d,E.createElement($m,{match:h,routeContext:{outlet:d,matches:m,isDataRoute:n!=null},children:f})};return n&&(h.route.ErrorBoundary||h.route.errorElement||g===0)?E.createElement(Bm,{location:n.location,revalidation:n.revalidation,component:y,error:x,children:p(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):p()},null)}var Hf=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Hf||{}),Wf=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Wf||{});function Wm(e){let t=E.useContext(_i);return t||Q(!1),t}function Vm(e){let t=E.useContext(Uf);return t||Q(!1),t}function Km(e){let t=E.useContext(St);return t||Q(!1),t}function Vf(e){let t=Km(),n=t.matches[t.matches.length-1];return n.route.id||Q(!1),n.route.id}function Gm(){var e;let t=E.useContext(Bf),n=Vm(),r=Vf();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Qm(){let{router:e}=Wm(Hf.UseNavigateStable),t=Vf(Wf.UseNavigateStable),n=E.useRef(!1);return $f(()=>{n.current=!0}),E.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,$r({fromRouteId:t},i)))},[e,t])}const Yu={};function qm(e,t,n){Yu[e]||(Yu[e]=!0)}function Jm(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Kf(e){let{to:t,replace:n,state:r,relative:o}=e;qn()||Q(!1);let{future:i,static:l}=E.useContext(kt),{matches:s}=E.useContext(St),{pathname:a}=Jn(),u=Oi(),d=Na(t,ba(s,i.v7_relativeSplatPath),a,o==="path"),h=JSON.stringify(d);return E.useEffect(()=>u(JSON.parse(h),{replace:n,state:r,relative:o}),[u,h,o,n,r]),null}function Xm(e){return Dm(e.context)}function ut(e){Q(!1)}function Ym(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Lt.Pop,navigator:i,static:l=!1,future:s}=e;qn()&&Q(!1);let a=t.replace(/^\/*/,"/"),u=E.useMemo(()=>({basename:a,navigator:i,static:l,future:$r({v7_relativeSplatPath:!1},s)}),[a,s,i,l]);typeof r=="string"&&(r=Qn(r));let{pathname:d="/",search:h="",hash:g="",state:x=null,key:S="default"}=r,y=E.useMemo(()=>{let v=$n(d,a);return v==null?null:{location:{pathname:v,search:h,hash:g,state:x,key:S},navigationType:o}},[a,d,h,g,x,S,o]);return y==null?null:E.createElement(kt.Provider,{value:u},E.createElement(Ti.Provider,{children:n,value:y}))}function Zm(e){let{children:t,location:n}=e;return Mm(xs(t),n)}new Promise(()=>{});function xs(e,t){t===void 0&&(t=[]);let n=[];return E.Children.forEach(e,(r,o)=>{if(!E.isValidElement(r))return;let i=[...t,o];if(r.type===E.Fragment){n.push.apply(n,xs(r.props.children,i));return}r.type!==ut&&Q(!1),!r.props.index||!r.props.children||Q(!1);let l={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=xs(r.props.children,i)),n.push(l)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ci(){return ci=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ci.apply(this,arguments)}function Gf(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function eg(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function tg(e,t){return e.button===0&&(!t||t==="_self")&&!eg(e)}const ng=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],rg=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],og="6";try{window.__reactRouterVersion=og}catch{}const ig=E.createContext({isTransitioning:!1}),lg="startTransition",Zu=qp[lg];function sg(e){let{basename:t,children:n,future:r,window:o}=e,i=E.useRef();i.current==null&&(i.current=sm({window:o,v5Compat:!0}));let l=i.current,[s,a]=E.useState({action:l.action,location:l.location}),{v7_startTransition:u}=r||{},d=E.useCallback(h=>{u&&Zu?Zu(()=>a(h)):a(h)},[a,u]);return E.useLayoutEffect(()=>l.listen(d),[l,d]),E.useEffect(()=>Jm(r),[r]),E.createElement(Ym,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:l,future:r})}const ag=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ug=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,cg=E.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:l,state:s,target:a,to:u,preventScrollReset:d,viewTransition:h}=t,g=Gf(t,ng),{basename:x}=E.useContext(kt),S,y=!1;if(typeof u=="string"&&ug.test(u)&&(S=u,ag))try{let f=new URL(window.location.href),w=u.startsWith("//")?new URL(f.protocol+u):new URL(u),N=$n(w.pathname,x);w.origin===f.origin&&N!=null?u=N+w.search+w.hash:y=!0}catch{}let v=Lm(u,{relative:o}),m=pg(u,{replace:l,state:s,target:a,preventScrollReset:d,relative:o,viewTransition:h});function p(f){r&&r(f),f.defaultPrevented||m(f)}return E.createElement("a",ci({},g,{href:S||v,onClick:y||i?r:p,ref:n,target:a}))}),dg=E.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:o=!1,className:i="",end:l=!1,style:s,to:a,viewTransition:u,children:d}=t,h=Gf(t,rg),g=Li(a,{relative:h.relative}),x=Jn(),S=E.useContext(Uf),{navigator:y,basename:v}=E.useContext(kt),m=S!=null&&hg(g)&&u===!0,p=y.encodeLocation?y.encodeLocation(g).pathname:g.pathname,f=x.pathname,w=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;o||(f=f.toLowerCase(),w=w?w.toLowerCase():null,p=p.toLowerCase()),w&&v&&(w=$n(w,v)||w);const N=p!=="/"&&p.endsWith("/")?p.length-1:p.length;let b=f===p||!l&&f.startsWith(p)&&f.charAt(N)==="/",j=w!=null&&(w===p||!l&&w.startsWith(p)&&w.charAt(p.length)==="/"),_={isActive:b,isPending:j,isTransitioning:m},U=b?r:void 0,A;typeof i=="function"?A=i(_):A=[i,b?"active":null,j?"pending":null,m?"transitioning":null].filter(Boolean).join(" ");let X=typeof s=="function"?s(_):s;return E.createElement(cg,ci({},h,{"aria-current":U,className:A,ref:n,style:X,to:a,viewTransition:u}),typeof d=="function"?d(_):d)});var vs;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(vs||(vs={}));var ec;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(ec||(ec={}));function fg(e){let t=E.useContext(_i);return t||Q(!1),t}function pg(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:l,viewTransition:s}=t===void 0?{}:t,a=Oi(),u=Jn(),d=Li(e,{relative:l});return E.useCallback(h=>{if(tg(h,n)){h.preventDefault();let g=r!==void 0?r:ui(u)===ui(d);a(e,{replace:g,state:o,preventScrollReset:i,relative:l,viewTransition:s})}},[u,a,d,r,o,n,e,i,l,s])}function hg(e,t){t===void 0&&(t={});let n=E.useContext(ig);n==null&&Q(!1);let{basename:r}=fg(vs.useViewTransitionState),o=Li(e,{relative:t.relative});if(!n.isTransitioning)return!1;let i=$n(n.currentLocation.pathname,r)||n.currentLocation.pathname,l=$n(n.nextLocation.pathname,r)||n.nextLocation.pathname;return ys(o.pathname,l)!=null||ys(o.pathname,i)!=null}let mg={data:""},gg=e=>{if(typeof window=="object"){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||mg},yg=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,xg=/\/\*[^]*?\*\/|  +/g,tc=/\n+/g,_t=(e,t)=>{let n="",r="",o="";for(let i in e){let l=e[i];i[0]=="@"?i[1]=="i"?n=i+" "+l+";":r+=i[1]=="f"?_t(l,i):i+"{"+_t(l,i[1]=="k"?"":t)+"}":typeof l=="object"?r+=_t(l,t?t.replace(/([^,])+/g,s=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,a=>/&/.test(a)?a.replace(/&/g,s):s?s+" "+a:a)):i):l!=null&&(i=i[1]=="-"?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=_t.p?_t.p(i,l):i+":"+l+";")}return n+(t&&o?t+"{"+o+"}":o)+r},Nt={},Qf=e=>{if(typeof e=="object"){let t="";for(let n in e)t+=n+Qf(e[n]);return t}return e},vg=(e,t,n,r,o)=>{let i=Qf(e),l=Nt[i]||(Nt[i]=(a=>{let u=0,d=11;for(;u<a.length;)d=101*d+a.charCodeAt(u++)>>>0;return"go"+d})(i));if(!Nt[l]){let a=i!==e?e:(u=>{let d,h,g=[{}];for(;d=yg.exec(u.replace(xg,""));)d[4]?g.shift():d[3]?(h=d[3].replace(tc," ").trim(),g.unshift(g[0][h]=g[0][h]||{})):g[0][d[1]]=d[2].replace(tc," ").trim();return g[0]})(e);Nt[l]=_t(o?{["@keyframes "+l]:a}:a,n?"":"."+l)}let s=n&&Nt.g;return n&&(Nt.g=Nt[l]),((a,u,d,h)=>{h?u.data=u.data.replace(h,a):u.data.indexOf(a)===-1&&(u.data=d?a+u.data:u.data+a)})(Nt[l],t,r,s),l},wg=(e,t,n)=>e.reduce((r,o,i)=>{let l=t[i];if(l&&l.call){let s=l(n),a=s&&s.props&&s.props.className||/^go/.test(s)&&s;l=a?"."+a:s&&typeof s=="object"?s.props?"":_t(s,""):s===!1?"":s}return r+o+(l??"")},"");function Ai(e){let t=this||{},n=e.call?e(t.p):e;return vg(n.unshift?n.raw?wg(n,[].slice.call(arguments,1),t.p):n.reduce((r,o)=>Object.assign(r,o&&o.call?o(t.p):o),{}):n,gg(t.target),t.g,t.o,t.k)}let qf,ws,ks;Ai.bind({g:1});let vt=Ai.bind({k:1});function kg(e,t,n,r){_t.p=t,qf=e,ws=n,ks=r}function Qt(e,t){let n=this||{};return function(){let r=arguments;function o(i,l){let s=Object.assign({},i),a=s.className||o.className;n.p=Object.assign({theme:ws&&ws()},s),n.o=/go\d/.test(a),s.className=Ai.apply(n,r)+(a?" "+a:"");let u=e;return e[0]&&(u=s.as||e,delete s.as),ks&&u[0]&&ks(s),qf(u,s)}return o}}var Sg=e=>typeof e=="function",di=(e,t)=>Sg(e)?e(t):e,Eg=(()=>{let e=0;return()=>(++e).toString()})(),Jf=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),bg=20,Ca="default",Xf=(e,t)=>{let{toastLimit:n}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,n)};case 1:return{...e,toasts:e.toasts.map(l=>l.id===t.toast.id?{...l,...t.toast}:l)};case 2:let{toast:r}=t;return Xf(e,{type:e.toasts.find(l=>l.id===r.id)?1:0,toast:r});case 3:let{toastId:o}=t;return{...e,toasts:e.toasts.map(l=>l.id===o||o===void 0?{...l,dismissed:!0,visible:!1}:l)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(l=>l.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(l=>({...l,pauseDuration:l.pauseDuration+i}))}}},zo=[],Yf={toasts:[],pausedAt:void 0,settings:{toastLimit:bg}},it={},Zf=(e,t=Ca)=>{it[t]=Xf(it[t]||Yf,e),zo.forEach(([n,r])=>{n===t&&r(it[t])})},ep=e=>Object.keys(it).forEach(t=>Zf(e,t)),Ng=e=>Object.keys(it).find(t=>it[t].toasts.some(n=>n.id===e)),zi=(e=Ca)=>t=>{Zf(t,e)},Cg={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},jg=(e={},t=Ca)=>{let[n,r]=E.useState(it[t]||Yf),o=E.useRef(it[t]);E.useEffect(()=>(o.current!==it[t]&&r(it[t]),zo.push([t,r]),()=>{let l=zo.findIndex(([s])=>s===t);l>-1&&zo.splice(l,1)}),[t]);let i=n.toasts.map(l=>{var s,a,u;return{...e,...e[l.type],...l,removeDelay:l.removeDelay||((s=e[l.type])==null?void 0:s.removeDelay)||(e==null?void 0:e.removeDelay),duration:l.duration||((a=e[l.type])==null?void 0:a.duration)||(e==null?void 0:e.duration)||Cg[l.type],style:{...e.style,...(u=e[l.type])==null?void 0:u.style,...l.style}}});return{...n,toasts:i}},Rg=(e,t="blank",n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...n,id:(n==null?void 0:n.id)||Eg()}),qr=e=>(t,n)=>{let r=Rg(t,e,n);return zi(r.toasterId||Ng(r.id))({type:2,toast:r}),r.id},le=(e,t)=>qr("blank")(e,t);le.error=qr("error");le.success=qr("success");le.loading=qr("loading");le.custom=qr("custom");le.dismiss=(e,t)=>{let n={type:3,toastId:e};t?zi(t)(n):ep(n)};le.dismissAll=e=>le.dismiss(void 0,e);le.remove=(e,t)=>{let n={type:4,toastId:e};t?zi(t)(n):ep(n)};le.removeAll=e=>le.remove(void 0,e);le.promise=(e,t,n)=>{let r=le.loading(t.loading,{...n,...n==null?void 0:n.loading});return typeof e=="function"&&(e=e()),e.then(o=>{let i=t.success?di(t.success,o):void 0;return i?le.success(i,{id:r,...n,...n==null?void 0:n.success}):le.dismiss(r),o}).catch(o=>{let i=t.error?di(t.error,o):void 0;i?le.error(i,{id:r,...n,...n==null?void 0:n.error}):le.dismiss(r)}),e};var Pg=1e3,_g=(e,t="default")=>{let{toasts:n,pausedAt:r}=jg(e,t),o=E.useRef(new Map).current,i=E.useCallback((h,g=Pg)=>{if(o.has(h))return;let x=setTimeout(()=>{o.delete(h),l({type:4,toastId:h})},g);o.set(h,x)},[]);E.useEffect(()=>{if(r)return;let h=Date.now(),g=n.map(x=>{if(x.duration===1/0)return;let S=(x.duration||0)+x.pauseDuration-(h-x.createdAt);if(S<0){x.visible&&le.dismiss(x.id);return}return setTimeout(()=>le.dismiss(x.id,t),S)});return()=>{g.forEach(x=>x&&clearTimeout(x))}},[n,r,t]);let l=E.useCallback(zi(t),[t]),s=E.useCallback(()=>{l({type:5,time:Date.now()})},[l]),a=E.useCallback((h,g)=>{l({type:1,toast:{id:h,height:g}})},[l]),u=E.useCallback(()=>{r&&l({type:6,time:Date.now()})},[r,l]),d=E.useCallback((h,g)=>{let{reverseOrder:x=!1,gutter:S=8,defaultPosition:y}=g||{},v=n.filter(f=>(f.position||y)===(h.position||y)&&f.height),m=v.findIndex(f=>f.id===h.id),p=v.filter((f,w)=>w<m&&f.visible).length;return v.filter(f=>f.visible).slice(...x?[p+1]:[0,p]).reduce((f,w)=>f+(w.height||0)+S,0)},[n]);return E.useEffect(()=>{n.forEach(h=>{if(h.dismissed)i(h.id,h.removeDelay);else{let g=o.get(h.id);g&&(clearTimeout(g),o.delete(h.id))}})},[n,i]),{toasts:n,handlers:{updateHeight:a,startPause:s,endPause:u,calculateOffset:d}}},Tg=vt`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Og=vt`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Lg=vt`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Ag=Qt("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Tg} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Og} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Lg} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,zg=vt`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Dg=Qt("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${zg} 1s linear infinite;
`,Mg=vt`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Ig=vt`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,Fg=Qt("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Mg} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Ig} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Ug=Qt("div")`
  position: absolute;
`,Bg=Qt("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,$g=vt`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Hg=Qt("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${$g} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Wg=({toast:e})=>{let{icon:t,type:n,iconTheme:r}=e;return t!==void 0?typeof t=="string"?E.createElement(Hg,null,t):t:n==="blank"?null:E.createElement(Bg,null,E.createElement(Dg,{...r}),n!=="loading"&&E.createElement(Ug,null,n==="error"?E.createElement(Ag,{...r}):E.createElement(Fg,{...r})))},Vg=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Kg=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,Gg="0%{opacity:0;} 100%{opacity:1;}",Qg="0%{opacity:1;} 100%{opacity:0;}",qg=Qt("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Jg=Qt("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Xg=(e,t)=>{let n=e.includes("top")?1:-1,[r,o]=Jf()?[Gg,Qg]:[Vg(n),Kg(n)];return{animation:t?`${vt(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${vt(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Yg=E.memo(({toast:e,position:t,style:n,children:r})=>{let o=e.height?Xg(e.position||t||"top-center",e.visible):{opacity:0},i=E.createElement(Wg,{toast:e}),l=E.createElement(Jg,{...e.ariaProps},di(e.message,e));return E.createElement(qg,{className:e.className,style:{...o,...n,...e.style}},typeof r=="function"?r({icon:i,message:l}):E.createElement(E.Fragment,null,i,l))});kg(E.createElement);var Zg=({id:e,className:t,style:n,onHeightUpdate:r,children:o})=>{let i=E.useCallback(l=>{if(l){let s=()=>{let a=l.getBoundingClientRect().height;r(e,a)};s(),new MutationObserver(s).observe(l,{subtree:!0,childList:!0,characterData:!0})}},[e,r]);return E.createElement("div",{ref:i,className:t,style:n},o)},ey=(e,t)=>{let n=e.includes("top"),r=n?{top:0}:{bottom:0},o=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:Jf()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(n?1:-1)}px)`,...r,...o}},ty=Ai`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ko=16,ny=({reverseOrder:e,position:t="top-center",toastOptions:n,gutter:r,children:o,toasterId:i,containerStyle:l,containerClassName:s})=>{let{toasts:a,handlers:u}=_g(n,i);return E.createElement("div",{"data-rht-toaster":i||"",style:{position:"fixed",zIndex:9999,top:ko,left:ko,right:ko,bottom:ko,pointerEvents:"none",...l},className:s,onMouseEnter:u.startPause,onMouseLeave:u.endPause},a.map(d=>{let h=d.position||t,g=u.calculateOffset(d,{reverseOrder:e,gutter:r,defaultPosition:t}),x=ey(h,g);return E.createElement(Zg,{id:d.id,key:d.id,onHeightUpdate:u.updateHeight,className:d.visible?ty:"",style:x},d.type==="custom"?di(d.message,d):o?o(d):E.createElement(Yg,{toast:d,position:h}))}))},ne=le;const ry={},nc=e=>{let t;const n=new Set,r=(d,h)=>{const g=typeof d=="function"?d(t):d;if(!Object.is(g,t)){const x=t;t=h??(typeof g!="object"||g===null)?g:Object.assign({},t,g),n.forEach(S=>S(t,x))}},o=()=>t,a={setState:r,getState:o,getInitialState:()=>u,subscribe:d=>(n.add(d),()=>n.delete(d)),destroy:()=>{(ry?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},u=t=e(r,o,a);return a},oy=e=>e?nc(e):nc;var tp={exports:{}},np={},rp={exports:{}},op={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hn=E;function iy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ly=typeof Object.is=="function"?Object.is:iy,sy=Hn.useState,ay=Hn.useEffect,uy=Hn.useLayoutEffect,cy=Hn.useDebugValue;function dy(e,t){var n=t(),r=sy({inst:{value:n,getSnapshot:t}}),o=r[0].inst,i=r[1];return uy(function(){o.value=n,o.getSnapshot=t,gl(o)&&i({inst:o})},[e,n,t]),ay(function(){return gl(o)&&i({inst:o}),e(function(){gl(o)&&i({inst:o})})},[e]),cy(n),n}function gl(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ly(e,n)}catch{return!0}}function fy(e,t){return t()}var py=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?fy:dy;op.useSyncExternalStore=Hn.useSyncExternalStore!==void 0?Hn.useSyncExternalStore:py;rp.exports=op;var hy=rp.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Di=E,my=hy;function gy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var yy=typeof Object.is=="function"?Object.is:gy,xy=my.useSyncExternalStore,vy=Di.useRef,wy=Di.useEffect,ky=Di.useMemo,Sy=Di.useDebugValue;np.useSyncExternalStoreWithSelector=function(e,t,n,r,o){var i=vy(null);if(i.current===null){var l={hasValue:!1,value:null};i.current=l}else l=i.current;i=ky(function(){function a(x){if(!u){if(u=!0,d=x,x=r(x),o!==void 0&&l.hasValue){var S=l.value;if(o(S,x))return h=S}return h=x}if(S=h,yy(d,x))return S;var y=r(x);return o!==void 0&&o(S,y)?(d=x,S):(d=x,h=y)}var u=!1,d,h,g=n===void 0?null:n;return[function(){return a(t())},g===null?void 0:function(){return a(g())}]},[t,n,r,o]);var s=xy(e,i[0],i[1]);return wy(function(){l.hasValue=!0,l.value=s},[s]),Sy(s),s};tp.exports=np;var Ey=tp.exports;const by=Ec(Ey),ip={},{useDebugValue:Ny}=Os,{useSyncExternalStoreWithSelector:Cy}=by;let rc=!1;const jy=e=>e;function Ry(e,t=jy,n){(ip?"production":void 0)!=="production"&&n&&!rc&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),rc=!0);const r=Cy(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return Ny(r),r}const Py=e=>{(ip?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof e=="function"?oy(e):e,n=(r,o)=>Ry(t,r,o);return Object.assign(n,t),n},_y=e=>Py,Ty={};function Oy(e,t){let n;try{n=e()}catch{return}return{getItem:o=>{var i;const l=a=>a===null?null:JSON.parse(a,void 0),s=(i=n.getItem(o))!=null?i:null;return s instanceof Promise?s.then(l):l(s)},setItem:(o,i)=>n.setItem(o,JSON.stringify(i,void 0)),removeItem:o=>n.removeItem(o)}}const Hr=e=>t=>{try{const n=e(t);return n instanceof Promise?n:{then(r){return Hr(r)(n)},catch(r){return this}}}catch(n){return{then(r){return this},catch(r){return Hr(r)(n)}}}},Ly=(e,t)=>(n,r,o)=>{let i={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:v=>v,version:0,merge:(v,m)=>({...m,...v}),...t},l=!1;const s=new Set,a=new Set;let u;try{u=i.getStorage()}catch{}if(!u)return e((...v)=>{console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`),n(...v)},r,o);const d=Hr(i.serialize),h=()=>{const v=i.partialize({...r()});let m;const p=d({state:v,version:i.version}).then(f=>u.setItem(i.name,f)).catch(f=>{m=f});if(m)throw m;return p},g=o.setState;o.setState=(v,m)=>{g(v,m),h()};const x=e((...v)=>{n(...v),h()},r,o);let S;const y=()=>{var v;if(!u)return;l=!1,s.forEach(p=>p(r()));const m=((v=i.onRehydrateStorage)==null?void 0:v.call(i,r()))||void 0;return Hr(u.getItem.bind(u))(i.name).then(p=>{if(p)return i.deserialize(p)}).then(p=>{if(p)if(typeof p.version=="number"&&p.version!==i.version){if(i.migrate)return i.migrate(p.state,p.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return p.state}).then(p=>{var f;return S=i.merge(p,(f=r())!=null?f:x),n(S,!0),h()}).then(()=>{m==null||m(S,void 0),l=!0,a.forEach(p=>p(S))}).catch(p=>{m==null||m(void 0,p)})};return o.persist={setOptions:v=>{i={...i,...v},v.getStorage&&(u=v.getStorage())},clearStorage:()=>{u==null||u.removeItem(i.name)},getOptions:()=>i,rehydrate:()=>y(),hasHydrated:()=>l,onHydrate:v=>(s.add(v),()=>{s.delete(v)}),onFinishHydration:v=>(a.add(v),()=>{a.delete(v)})},y(),S||x},Ay=(e,t)=>(n,r,o)=>{let i={storage:Oy(()=>localStorage),partialize:y=>y,version:0,merge:(y,v)=>({...v,...y}),...t},l=!1;const s=new Set,a=new Set;let u=i.storage;if(!u)return e((...y)=>{console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`),n(...y)},r,o);const d=()=>{const y=i.partialize({...r()});return u.setItem(i.name,{state:y,version:i.version})},h=o.setState;o.setState=(y,v)=>{h(y,v),d()};const g=e((...y)=>{n(...y),d()},r,o);o.getInitialState=()=>g;let x;const S=()=>{var y,v;if(!u)return;l=!1,s.forEach(p=>{var f;return p((f=r())!=null?f:g)});const m=((v=i.onRehydrateStorage)==null?void 0:v.call(i,(y=r())!=null?y:g))||void 0;return Hr(u.getItem.bind(u))(i.name).then(p=>{if(p)if(typeof p.version=="number"&&p.version!==i.version){if(i.migrate)return[!0,i.migrate(p.state,p.version)];console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,p.state];return[!1,void 0]}).then(p=>{var f;const[w,N]=p;if(x=i.merge(N,(f=r())!=null?f:g),n(x,!0),w)return d()}).then(()=>{m==null||m(x,void 0),x=r(),l=!0,a.forEach(p=>p(x))}).catch(p=>{m==null||m(void 0,p)})};return o.persist={setOptions:y=>{i={...i,...y},y.storage&&(u=y.storage)},clearStorage:()=>{u==null||u.removeItem(i.name)},getOptions:()=>i,rehydrate:()=>S(),hasHydrated:()=>l,onHydrate:y=>(s.add(y),()=>{s.delete(y)}),onFinishHydration:y=>(a.add(y),()=>{a.delete(y)})},i.skipHydration||S(),x||g},zy=(e,t)=>"getStorage"in t||"serialize"in t||"deserialize"in t?((Ty?"production":void 0)!=="production"&&console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),Ly(e,t)):Ay(e,t),Dy=zy;function lp(e,t){return function(){return e.apply(t,arguments)}}const{toString:My}=Object.prototype,{getPrototypeOf:Mi}=Object,{iterator:Ii,toStringTag:sp}=Symbol,Fi=(e=>t=>{const n=My.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),et=e=>(e=e.toLowerCase(),t=>Fi(t)===e),Ui=e=>t=>typeof t===e,{isArray:Xn}=Array,Wn=Ui("undefined");function Jr(e){return e!==null&&!Wn(e)&&e.constructor!==null&&!Wn(e.constructor)&&Te(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const ap=et("ArrayBuffer");function Iy(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&ap(e.buffer),t}const Fy=Ui("string"),Te=Ui("function"),up=Ui("number"),Xr=e=>e!==null&&typeof e=="object",Uy=e=>e===!0||e===!1,Do=e=>{if(Fi(e)!=="object")return!1;const t=Mi(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(sp in e)&&!(Ii in e)},By=e=>{if(!Xr(e)||Jr(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},$y=et("Date"),Hy=et("File"),Wy=e=>!!(e&&typeof e.uri<"u"),Vy=e=>e&&typeof e.getParts<"u",Ky=et("Blob"),Gy=et("FileList"),Qy=e=>Xr(e)&&Te(e.pipe);function qy(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const oc=qy(),ic=typeof oc.FormData<"u"?oc.FormData:void 0,Jy=e=>{if(!e)return!1;if(ic&&e instanceof ic)return!0;const t=Mi(e);if(!t||t===Object.prototype||!Te(e.append))return!1;const n=Fi(e);return n==="formdata"||n==="object"&&Te(e.toString)&&e.toString()==="[object FormData]"},Xy=et("URLSearchParams"),[Yy,Zy,ex,tx]=["ReadableStream","Request","Response","Headers"].map(et),nx=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Yr(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),Xn(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{if(Jr(e))return;const i=n?Object.getOwnPropertyNames(e):Object.keys(e),l=i.length;let s;for(r=0;r<l;r++)s=i[r],t.call(null,e[s],s,e)}}function cp(e,t){if(Jr(e))return null;t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const en=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,dp=e=>!Wn(e)&&e!==en;function Ss(...e){const{caseless:t,skipUndefined:n}=dp(this)&&this||{},r={},o=(i,l)=>{if(l==="__proto__"||l==="constructor"||l==="prototype")return;const s=t&&cp(r,l)||l,a=Es(r,s)?r[s]:void 0;Do(a)&&Do(i)?r[s]=Ss(a,i):Do(i)?r[s]=Ss({},i):Xn(i)?r[s]=i.slice():(!n||!Wn(i))&&(r[s]=i)};for(let i=0,l=e.length;i<l;i++)e[i]&&Yr(e[i],o);return r}const rx=(e,t,n,{allOwnKeys:r}={})=>(Yr(t,(o,i)=>{n&&Te(o)?Object.defineProperty(e,i,{__proto__:null,value:lp(o,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(e,i,{__proto__:null,value:o,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:r}),e),ox=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),ix=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),Object.defineProperty(e.prototype,"constructor",{__proto__:null,value:e,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(e,"super",{__proto__:null,value:t.prototype}),n&&Object.assign(e.prototype,n)},lx=(e,t,n,r)=>{let o,i,l;const s={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)l=o[i],(!r||r(l,e,t))&&!s[l]&&(t[l]=e[l],s[l]=!0);e=n!==!1&&Mi(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},sx=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},ax=e=>{if(!e)return null;if(Xn(e))return e;let t=e.length;if(!up(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},ux=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Mi(Uint8Array)),cx=(e,t)=>{const r=(e&&e[Ii]).call(e);let o;for(;(o=r.next())&&!o.done;){const i=o.value;t.call(e,i[0],i[1])}},dx=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},fx=et("HTMLFormElement"),px=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),Es=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),hx=et("RegExp"),fp=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Yr(n,(o,i)=>{let l;(l=t(o,i,e))!==!1&&(r[i]=l||o)}),Object.defineProperties(e,r)},mx=e=>{fp(e,(t,n)=>{if(Te(e)&&["arguments","caller","callee"].includes(n))return!1;const r=e[n];if(Te(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},gx=(e,t)=>{const n={},r=o=>{o.forEach(i=>{n[i]=!0})};return Xn(e)?r(e):r(String(e).split(t)),n},yx=()=>{},xx=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function vx(e){return!!(e&&Te(e.append)&&e[sp]==="FormData"&&e[Ii])}const wx=e=>{const t=new WeakSet,n=r=>{if(Xr(r)){if(t.has(r))return;if(Jr(r))return r;if(!("toJSON"in r)){t.add(r);const o=Xn(r)?[]:{};return Yr(r,(i,l)=>{const s=n(i);!Wn(s)&&(o[l]=s)}),t.delete(r),o}}return r};return n(e)},kx=et("AsyncFunction"),Sx=e=>e&&(Xr(e)||Te(e))&&Te(e.then)&&Te(e.catch),pp=((e,t)=>e?setImmediate:t?((n,r)=>(en.addEventListener("message",({source:o,data:i})=>{o===en&&i===n&&r.length&&r.shift()()},!1),o=>{r.push(o),en.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Te(en.postMessage)),Ex=typeof queueMicrotask<"u"?queueMicrotask.bind(en):typeof process<"u"&&process.nextTick||pp,bx=e=>e!=null&&Te(e[Ii]),k={isArray:Xn,isArrayBuffer:ap,isBuffer:Jr,isFormData:Jy,isArrayBufferView:Iy,isString:Fy,isNumber:up,isBoolean:Uy,isObject:Xr,isPlainObject:Do,isEmptyObject:By,isReadableStream:Yy,isRequest:Zy,isResponse:ex,isHeaders:tx,isUndefined:Wn,isDate:$y,isFile:Hy,isReactNativeBlob:Wy,isReactNative:Vy,isBlob:Ky,isRegExp:hx,isFunction:Te,isStream:Qy,isURLSearchParams:Xy,isTypedArray:ux,isFileList:Gy,forEach:Yr,merge:Ss,extend:rx,trim:nx,stripBOM:ox,inherits:ix,toFlatObject:lx,kindOf:Fi,kindOfTest:et,endsWith:sx,toArray:ax,forEachEntry:cx,matchAll:dx,isHTMLForm:fx,hasOwnProperty:Es,hasOwnProp:Es,reduceDescriptors:fp,freezeMethods:mx,toObjectSet:gx,toCamelCase:px,noop:yx,toFiniteNumber:xx,findKey:cp,global:en,isContextDefined:dp,isSpecCompliantForm:vx,toJSONObject:wx,isAsyncFn:kx,isThenable:Sx,setImmediate:pp,asap:Ex,isIterable:bx},Nx=k.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Cx=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(l){o=l.indexOf(":"),n=l.substring(0,o).trim().toLowerCase(),r=l.substring(o+1).trim(),!(!n||t[n]&&Nx[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t};function jx(e){let t=0,n=e.length;for(;t<n;){const r=e.charCodeAt(t);if(r!==9&&r!==32)break;t+=1}for(;n>t;){const r=e.charCodeAt(n-1);if(r!==9&&r!==32)break;n-=1}return t===0&&n===e.length?e:e.slice(t,n)}const Rx=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),Px=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function ja(e,t){return k.isArray(e)?e.map(n=>ja(n,t)):jx(String(e).replace(t,""))}const _x=e=>ja(e,Rx),Tx=e=>ja(e,Px);function hp(e){const t=Object.create(null);return k.forEach(e.toJSON(),(n,r)=>{t[r]=Tx(n)}),t}const lc=Symbol("internals");function ur(e){return e&&String(e).trim().toLowerCase()}function Mo(e){return e===!1||e==null?e:k.isArray(e)?e.map(Mo):_x(String(e))}function Ox(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Lx=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function yl(e,t,n,r,o){if(k.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!k.isString(t)){if(k.isString(r))return t.indexOf(r)!==-1;if(k.isRegExp(r))return r.test(t)}}function Ax(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function zx(e,t){const n=k.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{__proto__:null,value:function(o,i,l){return this[r].call(this,t,o,i,l)},configurable:!0})})}let ke=class{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function i(s,a,u){const d=ur(a);if(!d)throw new Error("header name must be a non-empty string");const h=k.findKey(o,d);(!h||o[h]===void 0||u===!0||u===void 0&&o[h]!==!1)&&(o[h||a]=Mo(s))}const l=(s,a)=>k.forEach(s,(u,d)=>i(u,d,a));if(k.isPlainObject(t)||t instanceof this.constructor)l(t,n);else if(k.isString(t)&&(t=t.trim())&&!Lx(t))l(Cx(t),n);else if(k.isObject(t)&&k.isIterable(t)){let s={},a,u;for(const d of t){if(!k.isArray(d))throw TypeError("Object iterator must return a key-value pair");s[u=d[0]]=(a=s[u])?k.isArray(a)?[...a,d[1]]:[a,d[1]]:d[1]}l(s,n)}else t!=null&&i(n,t,r);return this}get(t,n){if(t=ur(t),t){const r=k.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return Ox(o);if(k.isFunction(n))return n.call(this,o,r);if(k.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=ur(t),t){const r=k.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||yl(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function i(l){if(l=ur(l),l){const s=k.findKey(r,l);s&&(!n||yl(r,r[s],s,n))&&(delete r[s],o=!0)}}return k.isArray(t)?t.forEach(i):i(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const i=n[r];(!t||yl(this,this[i],i,t,!0))&&(delete this[i],o=!0)}return o}normalize(t){const n=this,r={};return k.forEach(this,(o,i)=>{const l=k.findKey(r,i);if(l){n[l]=Mo(o),delete n[i];return}const s=t?Ax(i):String(i).trim();s!==i&&delete n[i],n[s]=Mo(o),r[s]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return k.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&k.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[lc]=this[lc]={accessors:{}}).accessors,o=this.prototype;function i(l){const s=ur(l);r[s]||(zx(o,l),r[s]=!0)}return k.isArray(t)?t.forEach(i):i(t),this}};ke.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);k.reduceDescriptors(ke.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});k.freezeMethods(ke);const Dx="[REDACTED ****]";function Mx(e){if(k.hasOwnProp(e,"toJSON"))return!0;let t=Object.getPrototypeOf(e);for(;t&&t!==Object.prototype;){if(k.hasOwnProp(t,"toJSON"))return!0;t=Object.getPrototypeOf(t)}return!1}function Ix(e,t){const n=new Set(t.map(i=>String(i).toLowerCase())),r=[],o=i=>{if(i===null||typeof i!="object"||k.isBuffer(i))return i;if(r.indexOf(i)!==-1)return;i instanceof ke&&(i=i.toJSON()),r.push(i);let l;if(k.isArray(i))l=[],i.forEach((s,a)=>{const u=o(s);k.isUndefined(u)||(l[a]=u)});else{if(!k.isPlainObject(i)&&Mx(i))return r.pop(),i;l=Object.create(null);for(const[s,a]of Object.entries(i)){const u=n.has(s.toLowerCase())?Dx:o(a);k.isUndefined(u)||(l[s]=u)}}return r.pop(),l};return o(e)}let T=class mp extends Error{static from(t,n,r,o,i,l){const s=new mp(t.message,n||t.code,r,o,i);return s.cause=t,s.name=t.name,t.status!=null&&s.status==null&&(s.status=t.status),l&&Object.assign(s,l),s}constructor(t,n,r,o,i){super(t),Object.defineProperty(this,"message",{__proto__:null,value:t,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,n&&(this.code=n),r&&(this.config=r),o&&(this.request=o),i&&(this.response=i,this.status=i.status)}toJSON(){const t=this.config,n=t&&k.hasOwnProp(t,"redact")?t.redact:void 0,r=k.isArray(n)&&n.length>0?Ix(t,n):k.toJSONObject(t);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:r,code:this.code,status:this.status}}};T.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";T.ERR_BAD_OPTION="ERR_BAD_OPTION";T.ECONNABORTED="ECONNABORTED";T.ETIMEDOUT="ETIMEDOUT";T.ECONNREFUSED="ECONNREFUSED";T.ERR_NETWORK="ERR_NETWORK";T.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";T.ERR_DEPRECATED="ERR_DEPRECATED";T.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";T.ERR_BAD_REQUEST="ERR_BAD_REQUEST";T.ERR_CANCELED="ERR_CANCELED";T.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";T.ERR_INVALID_URL="ERR_INVALID_URL";T.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const Fx=null;function bs(e){return k.isPlainObject(e)||k.isArray(e)}function gp(e){return k.endsWith(e,"[]")?e.slice(0,-2):e}function xl(e,t,n){return e?e.concat(t).map(function(o,i){return o=gp(o),!n&&i?"["+o+"]":o}).join(n?".":""):t}function Ux(e){return k.isArray(e)&&!e.some(bs)}const Bx=k.toFlatObject(k,{},null,function(t){return/^is[A-Z]/.test(t)});function Bi(e,t,n){if(!k.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=k.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,m){return!k.isUndefined(m[v])});const r=n.metaTokens,o=n.visitor||h,i=n.dots,l=n.indexes,s=n.Blob||typeof Blob<"u"&&Blob,a=n.maxDepth===void 0?100:n.maxDepth,u=s&&k.isSpecCompliantForm(t);if(!k.isFunction(o))throw new TypeError("visitor must be a function");function d(y){if(y===null)return"";if(k.isDate(y))return y.toISOString();if(k.isBoolean(y))return y.toString();if(!u&&k.isBlob(y))throw new T("Blob is not supported. Use a Buffer instead.");return k.isArrayBuffer(y)||k.isTypedArray(y)?u&&typeof Blob=="function"?new Blob([y]):Buffer.from(y):y}function h(y,v,m){let p=y;if(k.isReactNative(t)&&k.isReactNativeBlob(y))return t.append(xl(m,v,i),d(y)),!1;if(y&&!m&&typeof y=="object"){if(k.endsWith(v,"{}"))v=r?v:v.slice(0,-2),y=JSON.stringify(y);else if(k.isArray(y)&&Ux(y)||(k.isFileList(y)||k.endsWith(v,"[]"))&&(p=k.toArray(y)))return v=gp(v),p.forEach(function(w,N){!(k.isUndefined(w)||w===null)&&t.append(l===!0?xl([v],N,i):l===null?v:v+"[]",d(w))}),!1}return bs(y)?!0:(t.append(xl(m,v,i),d(y)),!1)}const g=[],x=Object.assign(Bx,{defaultVisitor:h,convertValue:d,isVisitable:bs});function S(y,v,m=0){if(!k.isUndefined(y)){if(m>a)throw new T("Object is too deeply nested ("+m+" levels). Max depth: "+a,T.ERR_FORM_DATA_DEPTH_EXCEEDED);if(g.indexOf(y)!==-1)throw Error("Circular reference detected in "+v.join("."));g.push(y),k.forEach(y,function(f,w){(!(k.isUndefined(f)||f===null)&&o.call(t,f,k.isString(w)?w.trim():w,v,x))===!0&&S(f,v?v.concat(w):[w],m+1)}),g.pop()}}if(!k.isObject(e))throw new TypeError("data must be an object");return S(e),t}function sc(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(e).replace(/[!'()~]|%20/g,function(r){return t[r]})}function Ra(e,t){this._pairs=[],e&&Bi(e,this,t)}const yp=Ra.prototype;yp.append=function(t,n){this._pairs.push([t,n])};yp.toString=function(t){const n=t?function(r){return t.call(this,r,sc)}:sc;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function $x(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function xp(e,t,n){if(!t)return e;const r=n&&n.encode||$x,o=k.isFunction(n)?{serialize:n}:n,i=o&&o.serialize;let l;if(i?l=i(t,o):l=k.isURLSearchParams(t)?t.toString():new Ra(t,o).toString(r),l){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+l}return e}class ac{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){k.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Pa={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},Hx=typeof URLSearchParams<"u"?URLSearchParams:Ra,Wx=typeof FormData<"u"?FormData:null,Vx=typeof Blob<"u"?Blob:null,Kx={isBrowser:!0,classes:{URLSearchParams:Hx,FormData:Wx,Blob:Vx},protocols:["http","https","file","blob","url","data"]},_a=typeof window<"u"&&typeof document<"u",Ns=typeof navigator=="object"&&navigator||void 0,Gx=_a&&(!Ns||["ReactNative","NativeScript","NS"].indexOf(Ns.product)<0),Qx=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",qx=_a&&window.location.href||"http://localhost",Jx=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:_a,hasStandardBrowserEnv:Gx,hasStandardBrowserWebWorkerEnv:Qx,navigator:Ns,origin:qx},Symbol.toStringTag,{value:"Module"})),ye={...Jx,...Kx};function Xx(e,t){return Bi(e,new ye.classes.URLSearchParams,{visitor:function(n,r,o,i){return ye.isNode&&k.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)},...t})}function Yx(e){return k.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Zx(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}function vp(e){function t(n,r,o,i){let l=n[i++];if(l==="__proto__")return!0;const s=Number.isFinite(+l),a=i>=n.length;return l=!l&&k.isArray(o)?o.length:l,a?(k.hasOwnProp(o,l)?o[l]=k.isArray(o[l])?o[l].concat(r):[o[l],r]:o[l]=r,!s):((!k.hasOwnProp(o,l)||!k.isObject(o[l]))&&(o[l]=[]),t(n,r,o[l],i)&&k.isArray(o[l])&&(o[l]=Zx(o[l])),!s)}if(k.isFormData(e)&&k.isFunction(e.entries)){const n={};return k.forEachEntry(e,(r,o)=>{t(Yx(r),o,n,0)}),n}return null}const gn=(e,t)=>e!=null&&k.hasOwnProp(e,t)?e[t]:void 0;function ev(e,t,n){if(k.isString(e))try{return(t||JSON.parse)(e),k.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Zr={transitional:Pa,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,i=k.isObject(t);if(i&&k.isHTMLForm(t)&&(t=new FormData(t)),k.isFormData(t))return o?JSON.stringify(vp(t)):t;if(k.isArrayBuffer(t)||k.isBuffer(t)||k.isStream(t)||k.isFile(t)||k.isBlob(t)||k.isReadableStream(t))return t;if(k.isArrayBufferView(t))return t.buffer;if(k.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(i){const a=gn(this,"formSerializer");if(r.indexOf("application/x-www-form-urlencoded")>-1)return Xx(t,a).toString();if((s=k.isFileList(t))||r.indexOf("multipart/form-data")>-1){const u=gn(this,"env"),d=u&&u.FormData;return Bi(s?{"files[]":t}:t,d&&new d,a)}}return i||o?(n.setContentType("application/json",!1),ev(t)):t}],transformResponse:[function(t){const n=gn(this,"transitional")||Zr.transitional,r=n&&n.forcedJSONParsing,o=gn(this,"responseType"),i=o==="json";if(k.isResponse(t)||k.isReadableStream(t))return t;if(t&&k.isString(t)&&(r&&!o||i)){const s=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t,gn(this,"parseReviver"))}catch(a){if(s)throw a.name==="SyntaxError"?T.from(a,T.ERR_BAD_RESPONSE,this,null,gn(this,"response")):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ye.classes.FormData,Blob:ye.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};k.forEach(["delete","get","head","post","put","patch","query"],e=>{Zr.headers[e]={}});function vl(e,t){const n=this||Zr,r=t||n,o=ke.from(r.headers);let i=r.data;return k.forEach(e,function(s){i=s.call(n,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function wp(e){return!!(e&&e.__CANCEL__)}let eo=class extends T{constructor(t,n,r){super(t??"canceled",T.ERR_CANCELED,n,r),this.name="CanceledError",this.__CANCEL__=!0}};function kp(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new T("Request failed with status code "+n.status,n.status>=400&&n.status<500?T.ERR_BAD_REQUEST:T.ERR_BAD_RESPONSE,n.config,n.request,n))}function tv(e){const t=/^([-+\w]{1,25}):(?:\/\/)?/.exec(e);return t&&t[1]||""}function nv(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,i=0,l;return t=t!==void 0?t:1e3,function(a){const u=Date.now(),d=r[i];l||(l=u),n[o]=a,r[o]=u;let h=i,g=0;for(;h!==o;)g+=n[h++],h=h%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),u-l<t)return;const x=d&&u-d;return x?Math.round(g*1e3/x):void 0}}function rv(e,t){let n=0,r=1e3/t,o,i;const l=(u,d=Date.now())=>{n=d,o=null,i&&(clearTimeout(i),i=null),e(...u)};return[(...u)=>{const d=Date.now(),h=d-n;h>=r?l(u,d):(o=u,i||(i=setTimeout(()=>{i=null,l(o)},r-h)))},()=>o&&l(o)]}const fi=(e,t,n=3)=>{let r=0;const o=nv(50,250);return rv(i=>{if(!i||typeof i.loaded!="number")return;const l=i.loaded,s=i.lengthComputable?i.total:void 0,a=s!=null?Math.min(l,s):l,u=Math.max(0,a-r),d=o(u);r=Math.max(r,a);const h={loaded:a,total:s,progress:s?a/s:void 0,bytes:u,rate:d||void 0,estimated:d&&s?(s-a)/d:void 0,event:i,lengthComputable:s!=null,[t?"download":"upload"]:!0};e(h)},n)},uc=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},cc=e=>(...t)=>k.asap(()=>e(...t)),ov=ye.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,ye.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(ye.origin),ye.navigator&&/(msie|trident)/i.test(ye.navigator.userAgent)):()=>!0,iv=ye.hasStandardBrowserEnv?{write(e,t,n,r,o,i,l){if(typeof document>"u")return;const s=[`${e}=${encodeURIComponent(t)}`];k.isNumber(n)&&s.push(`expires=${new Date(n).toUTCString()}`),k.isString(r)&&s.push(`path=${r}`),k.isString(o)&&s.push(`domain=${o}`),i===!0&&s.push("secure"),k.isString(l)&&s.push(`SameSite=${l}`),document.cookie=s.join("; ")},read(e){if(typeof document>"u")return null;const t=document.cookie.split(";");for(let n=0;n<t.length;n++){const r=t[n].replace(/^\s+/,""),o=r.indexOf("=");if(o!==-1&&r.slice(0,o)===e)return decodeURIComponent(r.slice(o+1))}return null},remove(e){this.write(e,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function lv(e){return typeof e!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function sv(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Sp(e,t,n){let r=!lv(t);return e&&(r||n===!1)?sv(e,t):t}const dc=e=>e instanceof ke?{...e}:e;function dn(e,t){t=t||{};const n=Object.create(null);Object.defineProperty(n,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function r(u,d,h,g){return k.isPlainObject(u)&&k.isPlainObject(d)?k.merge.call({caseless:g},u,d):k.isPlainObject(d)?k.merge({},d):k.isArray(d)?d.slice():d}function o(u,d,h,g){if(k.isUndefined(d)){if(!k.isUndefined(u))return r(void 0,u,h,g)}else return r(u,d,h,g)}function i(u,d){if(!k.isUndefined(d))return r(void 0,d)}function l(u,d){if(k.isUndefined(d)){if(!k.isUndefined(u))return r(void 0,u)}else return r(void 0,d)}function s(u,d,h){if(k.hasOwnProp(t,h))return r(u,d);if(k.hasOwnProp(e,h))return r(void 0,u)}const a={url:i,method:i,data:i,baseURL:l,transformRequest:l,transformResponse:l,paramsSerializer:l,timeout:l,timeoutMessage:l,withCredentials:l,withXSRFToken:l,adapter:l,responseType:l,xsrfCookieName:l,xsrfHeaderName:l,onUploadProgress:l,onDownloadProgress:l,decompress:l,maxContentLength:l,maxBodyLength:l,beforeRedirect:l,transport:l,httpAgent:l,httpsAgent:l,cancelToken:l,socketPath:l,allowedSocketPaths:l,responseEncoding:l,validateStatus:s,headers:(u,d,h)=>o(dc(u),dc(d),h,!0)};return k.forEach(Object.keys({...e,...t}),function(d){if(d==="__proto__"||d==="constructor"||d==="prototype")return;const h=k.hasOwnProp(a,d)?a[d]:o,g=k.hasOwnProp(e,d)?e[d]:void 0,x=k.hasOwnProp(t,d)?t[d]:void 0,S=h(g,x,d);k.isUndefined(S)&&h!==s||(n[d]=S)}),n}const av=["content-type","content-length"];function uv(e,t,n){if(n!=="content-only"){e.set(t);return}Object.entries(t).forEach(([r,o])=>{av.includes(r.toLowerCase())&&e.set(r,o)})}const cv=e=>encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi,(t,n)=>String.fromCharCode(parseInt(n,16))),Ep=e=>{const t=dn({},e),n=g=>k.hasOwnProp(t,g)?t[g]:void 0,r=n("data");let o=n("withXSRFToken");const i=n("xsrfHeaderName"),l=n("xsrfCookieName");let s=n("headers");const a=n("auth"),u=n("baseURL"),d=n("allowAbsoluteUrls"),h=n("url");if(t.headers=s=ke.from(s),t.url=xp(Sp(u,h,d),e.params,e.paramsSerializer),a&&s.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?cv(a.password):""))),k.isFormData(r)&&(ye.hasStandardBrowserEnv||ye.hasStandardBrowserWebWorkerEnv?s.setContentType(void 0):k.isFunction(r.getHeaders)&&uv(s,r.getHeaders(),n("formDataHeaderPolicy"))),ye.hasStandardBrowserEnv&&(k.isFunction(o)&&(o=o(t)),o===!0||o==null&&ov(t.url))){const x=i&&l&&iv.read(l);x&&s.set(i,x)}return t},dv=typeof XMLHttpRequest<"u",fv=dv&&function(e){return new Promise(function(n,r){const o=Ep(e);let i=o.data;const l=ke.from(o.headers).normalize();let{responseType:s,onUploadProgress:a,onDownloadProgress:u}=o,d,h,g,x,S;function y(){x&&x(),S&&S(),o.cancelToken&&o.cancelToken.unsubscribe(d),o.signal&&o.signal.removeEventListener("abort",d)}let v=new XMLHttpRequest;v.open(o.method.toUpperCase(),o.url,!0),v.timeout=o.timeout;function m(){if(!v)return;const f=ke.from("getAllResponseHeaders"in v&&v.getAllResponseHeaders()),N={data:!s||s==="text"||s==="json"?v.responseText:v.response,status:v.status,statusText:v.statusText,headers:f,config:e,request:v};kp(function(j){n(j),y()},function(j){r(j),y()},N),v=null}"onloadend"in v?v.onloadend=m:v.onreadystatechange=function(){!v||v.readyState!==4||v.status===0&&!(v.responseURL&&v.responseURL.startsWith("file:"))||setTimeout(m)},v.onabort=function(){v&&(r(new T("Request aborted",T.ECONNABORTED,e,v)),y(),v=null)},v.onerror=function(w){const N=w&&w.message?w.message:"Network Error",b=new T(N,T.ERR_NETWORK,e,v);b.event=w||null,r(b),y(),v=null},v.ontimeout=function(){let w=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const N=o.transitional||Pa;o.timeoutErrorMessage&&(w=o.timeoutErrorMessage),r(new T(w,N.clarifyTimeoutError?T.ETIMEDOUT:T.ECONNABORTED,e,v)),y(),v=null},i===void 0&&l.setContentType(null),"setRequestHeader"in v&&k.forEach(hp(l),function(w,N){v.setRequestHeader(N,w)}),k.isUndefined(o.withCredentials)||(v.withCredentials=!!o.withCredentials),s&&s!=="json"&&(v.responseType=o.responseType),u&&([g,S]=fi(u,!0),v.addEventListener("progress",g)),a&&v.upload&&([h,x]=fi(a),v.upload.addEventListener("progress",h),v.upload.addEventListener("loadend",x)),(o.cancelToken||o.signal)&&(d=f=>{v&&(r(!f||f.type?new eo(null,e,v):f),v.abort(),y(),v=null)},o.cancelToken&&o.cancelToken.subscribe(d),o.signal&&(o.signal.aborted?d():o.signal.addEventListener("abort",d)));const p=tv(o.url);if(p&&!ye.protocols.includes(p)){r(new T("Unsupported protocol "+p+":",T.ERR_BAD_REQUEST,e));return}v.send(i||null)})},pv=(e,t)=>{if(e=e?e.filter(Boolean):[],!t&&!e.length)return;const n=new AbortController;let r=!1;const o=function(a){if(!r){r=!0,l();const u=a instanceof Error?a:this.reason;n.abort(u instanceof T?u:new eo(u instanceof Error?u.message:u))}};let i=t&&setTimeout(()=>{i=null,o(new T(`timeout of ${t}ms exceeded`,T.ETIMEDOUT))},t);const l=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach(a=>{a.unsubscribe?a.unsubscribe(o):a.removeEventListener("abort",o)}),e=null)};e.forEach(a=>a.addEventListener("abort",o));const{signal:s}=n;return s.unsubscribe=()=>k.asap(l),s},hv=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,o;for(;r<n;)o=r+t,yield e.slice(r,o),r=o},mv=async function*(e,t){for await(const n of gv(e))yield*hv(n,t)},gv=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},fc=(e,t,n,r)=>{const o=mv(e,t);let i=0,l,s=a=>{l||(l=!0,r&&r(a))};return new ReadableStream({async pull(a){try{const{done:u,value:d}=await o.next();if(u){s(),a.close();return}let h=d.byteLength;if(n){let g=i+=h;n(g)}a.enqueue(new Uint8Array(d))}catch(u){throw s(u),u}},cancel(a){return s(a),o.return()}},{highWaterMark:2})};function yv(e){if(!e||typeof e!="string"||!e.startsWith("data:"))return 0;const t=e.indexOf(",");if(t<0)return 0;const n=e.slice(5,t),r=e.slice(t+1);if(/;base64/i.test(n)){let l=r.length;const s=r.length;for(let x=0;x<s;x++)if(r.charCodeAt(x)===37&&x+2<s){const S=r.charCodeAt(x+1),y=r.charCodeAt(x+2);(S>=48&&S<=57||S>=65&&S<=70||S>=97&&S<=102)&&(y>=48&&y<=57||y>=65&&y<=70||y>=97&&y<=102)&&(l-=2,x+=2)}let a=0,u=s-1;const d=x=>x>=2&&r.charCodeAt(x-2)===37&&r.charCodeAt(x-1)===51&&(r.charCodeAt(x)===68||r.charCodeAt(x)===100);u>=0&&(r.charCodeAt(u)===61?(a++,u--):d(u)&&(a++,u-=3)),a===1&&u>=0&&(r.charCodeAt(u)===61||d(u))&&a++;const g=Math.floor(l/4)*3-(a||0);return g>0?g:0}if(typeof Buffer<"u"&&typeof Buffer.byteLength=="function")return Buffer.byteLength(r,"utf8");let i=0;for(let l=0,s=r.length;l<s;l++){const a=r.charCodeAt(l);if(a<128)i+=1;else if(a<2048)i+=2;else if(a>=55296&&a<=56319&&l+1<s){const u=r.charCodeAt(l+1);u>=56320&&u<=57343?(i+=4,l++):i+=3}else i+=3}return i}const Ta="1.16.1",pc=64*1024,{isFunction:So}=k,hc=(e,...t)=>{try{return!!e(...t)}catch{return!1}},xv=e=>{const t=k.global!==void 0&&k.global!==null?k.global:globalThis,{ReadableStream:n,TextEncoder:r}=t;e=k.merge.call({skipUndefined:!0},{Request:t.Request,Response:t.Response},e);const{fetch:o,Request:i,Response:l}=e,s=o?So(o):typeof fetch=="function",a=So(i),u=So(l);if(!s)return!1;const d=s&&So(n),h=s&&(typeof r=="function"?(m=>p=>m.encode(p))(new r):async m=>new Uint8Array(await new i(m).arrayBuffer())),g=a&&d&&hc(()=>{let m=!1;const p=new i(ye.origin,{body:new n,method:"POST",get duplex(){return m=!0,"half"}}),f=p.headers.has("Content-Type");return p.body!=null&&p.body.cancel(),m&&!f}),x=u&&d&&hc(()=>k.isReadableStream(new l("").body)),S={stream:x&&(m=>m.body)};s&&["text","arrayBuffer","blob","formData","stream"].forEach(m=>{!S[m]&&(S[m]=(p,f)=>{let w=p&&p[m];if(w)return w.call(p);throw new T(`Response type '${m}' is not supported`,T.ERR_NOT_SUPPORT,f)})});const y=async m=>{if(m==null)return 0;if(k.isBlob(m))return m.size;if(k.isSpecCompliantForm(m))return(await new i(ye.origin,{method:"POST",body:m}).arrayBuffer()).byteLength;if(k.isArrayBufferView(m)||k.isArrayBuffer(m))return m.byteLength;if(k.isURLSearchParams(m)&&(m=m+""),k.isString(m))return(await h(m)).byteLength},v=async(m,p)=>{const f=k.toFiniteNumber(m.getContentLength());return f??y(p)};return async m=>{let{url:p,method:f,data:w,signal:N,cancelToken:b,timeout:j,onDownloadProgress:_,onUploadProgress:U,responseType:A,headers:X,withCredentials:tt="same-origin",fetchOptions:Et,maxContentLength:Oe,maxBodyLength:Yn}=Ep(m);const at=k.isNumber(Oe)&&Oe>-1,Zn=k.isNumber(Yn)&&Yn>-1;let R=o||fetch;A=A?(A+"").toLowerCase():"text";let L=pv([N,b&&b.toAbortSignal()],j),O=null;const I=L&&L.unsubscribe&&(()=>{L.unsubscribe()});let Y;try{if(at&&typeof p=="string"&&p.startsWith("data:")&&yv(p)>Oe)throw new T("maxContentLength size of "+Oe+" exceeded",T.ERR_BAD_RESPONSE,m,O);if(Zn&&f!=="get"&&f!=="head"){const B=await v(X,w);if(typeof B=="number"&&isFinite(B)&&B>Yn)throw new T("Request body larger than maxBodyLength limit",T.ERR_BAD_REQUEST,m,O)}if(U&&g&&f!=="get"&&f!=="head"&&(Y=await v(X,w))!==0){let B=new i(p,{method:"POST",body:w,duplex:"half"}),hn;if(k.isFormData(w)&&(hn=B.headers.get("content-type"))&&X.setContentType(hn),B.body){const[to,no]=uc(Y,fi(cc(U)));w=fc(B.body,pc,to,no)}}k.isString(tt)||(tt=tt?"include":"omit");const Z=a&&"credentials"in i.prototype;if(k.isFormData(w)){const B=X.getContentType();B&&/^multipart\/form-data/i.test(B)&&!/boundary=/i.test(B)&&X.delete("content-type")}X.set("User-Agent","axios/"+Ta,!1);const pe={...Et,signal:L,method:f.toUpperCase(),headers:hp(X.normalize()),body:w,duplex:"half",credentials:Z?tt:void 0};O=a&&new i(p,pe);let be=await(a?R(O,Et):R(p,pe));if(at){const B=k.toFiniteNumber(be.headers.get("content-length"));if(B!=null&&B>Oe)throw new T("maxContentLength size of "+Oe+" exceeded",T.ERR_BAD_RESPONSE,m,O)}const Ke=x&&(A==="stream"||A==="response");if(x&&be.body&&(_||at||Ke&&I)){const B={};["status","statusText","headers"].forEach(er=>{B[er]=be[er]});const hn=k.toFiniteNumber(be.headers.get("content-length")),[to,no]=_&&uc(hn,fi(cc(_),!0))||[];let Ma=0;const Op=er=>{if(at&&(Ma=er,Ma>Oe))throw new T("maxContentLength size of "+Oe+" exceeded",T.ERR_BAD_RESPONSE,m,O);to&&to(er)};be=new l(fc(be.body,pc,Op,()=>{no&&no(),I&&I()}),B)}A=A||"text";let Ne=await S[k.findKey(S,A)||"text"](be,m);if(at&&!x&&!Ke){let B;if(Ne!=null&&(typeof Ne.byteLength=="number"?B=Ne.byteLength:typeof Ne.size=="number"?B=Ne.size:typeof Ne=="string"&&(B=typeof r=="function"?new r().encode(Ne).byteLength:Ne.length)),typeof B=="number"&&B>Oe)throw new T("maxContentLength size of "+Oe+" exceeded",T.ERR_BAD_RESPONSE,m,O)}return!Ke&&I&&I(),await new Promise((B,hn)=>{kp(B,hn,{data:Ne,headers:ke.from(be.headers),status:be.status,statusText:be.statusText,config:m,request:O})})}catch(Z){if(I&&I(),L&&L.aborted&&L.reason instanceof T){const pe=L.reason;throw pe.config=m,O&&(pe.request=O),Z!==pe&&(pe.cause=Z),pe}throw Z&&Z.name==="TypeError"&&/Load failed|fetch/i.test(Z.message)?Object.assign(new T("Network Error",T.ERR_NETWORK,m,O,Z&&Z.response),{cause:Z.cause||Z}):T.from(Z,Z&&Z.code,m,O,Z&&Z.response)}}},vv=new Map,bp=e=>{let t=e&&e.env||{};const{fetch:n,Request:r,Response:o}=t,i=[r,o,n];let l=i.length,s=l,a,u,d=vv;for(;s--;)a=i[s],u=d.get(a),u===void 0&&d.set(a,u=s?new Map:xv(t)),d=u;return u};bp();const Oa={http:Fx,xhr:fv,fetch:{get:bp}};k.forEach(Oa,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{__proto__:null,value:t})}catch{}Object.defineProperty(e,"adapterName",{__proto__:null,value:t})}});const mc=e=>`- ${e}`,wv=e=>k.isFunction(e)||e===null||e===!1;function kv(e,t){e=k.isArray(e)?e:[e];const{length:n}=e;let r,o;const i={};for(let l=0;l<n;l++){r=e[l];let s;if(o=r,!wv(r)&&(o=Oa[(s=String(r)).toLowerCase()],o===void 0))throw new T(`Unknown adapter '${s}'`);if(o&&(k.isFunction(o)||(o=o.get(t))))break;i[s||"#"+l]=o}if(!o){const l=Object.entries(i).map(([a,u])=>`adapter ${a} `+(u===!1?"is not supported by the environment":"is not available in the build"));let s=n?l.length>1?`since :
`+l.map(mc).join(`
`):" "+mc(l[0]):"as no adapter specified";throw new T("There is no suitable adapter to dispatch the request "+s,"ERR_NOT_SUPPORT")}return o}const Np={getAdapter:kv,adapters:Oa};function wl(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new eo(null,e)}function gc(e){return wl(e),e.headers=ke.from(e.headers),e.data=vl.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Np.getAdapter(e.adapter||Zr.adapter,e)(e).then(function(r){wl(e),e.response=r;try{r.data=vl.call(e,e.transformResponse,r)}finally{delete e.response}return r.headers=ke.from(r.headers),r},function(r){if(!wp(r)&&(wl(e),r&&r.response)){e.response=r.response;try{r.response.data=vl.call(e,e.transformResponse,r.response)}finally{delete e.response}r.response.headers=ke.from(r.response.headers)}return Promise.reject(r)})}const $i={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{$i[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const yc={};$i.transitional=function(t,n,r){function o(i,l){return"[Axios v"+Ta+"] Transitional option '"+i+"'"+l+(r?". "+r:"")}return(i,l,s)=>{if(t===!1)throw new T(o(l," has been removed"+(n?" in "+n:"")),T.ERR_DEPRECATED);return n&&!yc[l]&&(yc[l]=!0,console.warn(o(l," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,l,s):!0}};$i.spelling=function(t){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${t}`),!0)};function Sv(e,t,n){if(typeof e!="object")throw new T("options must be an object",T.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],l=Object.prototype.hasOwnProperty.call(t,i)?t[i]:void 0;if(l){const s=e[i],a=s===void 0||l(s,i,e);if(a!==!0)throw new T("option "+i+" must be "+a,T.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new T("Unknown option "+i,T.ERR_BAD_OPTION)}}const Io={assertOptions:Sv,validators:$i},Fe=Io.validators;let rn=class{constructor(t){this.defaults=t||{},this.interceptors={request:new ac,response:new ac}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let o={};Error.captureStackTrace?Error.captureStackTrace(o):o=new Error;const i=(()=>{if(!o.stack)return"";const l=o.stack.indexOf(`
`);return l===-1?"":o.stack.slice(l+1)})();try{if(!r.stack)r.stack=i;else if(i){const l=i.indexOf(`
`),s=l===-1?-1:i.indexOf(`
`,l+1),a=s===-1?"":i.slice(s+1);String(r.stack).endsWith(a)||(r.stack+=`
`+i)}}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=dn(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:i}=n;r!==void 0&&Io.assertOptions(r,{silentJSONParsing:Fe.transitional(Fe.boolean),forcedJSONParsing:Fe.transitional(Fe.boolean),clarifyTimeoutError:Fe.transitional(Fe.boolean),legacyInterceptorReqResOrdering:Fe.transitional(Fe.boolean)},!1),o!=null&&(k.isFunction(o)?n.paramsSerializer={serialize:o}:Io.assertOptions(o,{encode:Fe.function,serialize:Fe.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Io.assertOptions(n,{baseUrl:Fe.spelling("baseURL"),withXsrfToken:Fe.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let l=i&&k.merge(i.common,i[n.method]);i&&k.forEach(["delete","get","head","post","put","patch","query","common"],S=>{delete i[S]}),n.headers=ke.concat(l,i);const s=[];let a=!0;this.interceptors.request.forEach(function(y){if(typeof y.runWhen=="function"&&y.runWhen(n)===!1)return;a=a&&y.synchronous;const v=n.transitional||Pa;v&&v.legacyInterceptorReqResOrdering?s.unshift(y.fulfilled,y.rejected):s.push(y.fulfilled,y.rejected)});const u=[];this.interceptors.response.forEach(function(y){u.push(y.fulfilled,y.rejected)});let d,h=0,g;if(!a){const S=[gc.bind(this),void 0];for(S.unshift(...s),S.push(...u),g=S.length,d=Promise.resolve(n);h<g;)d=d.then(S[h++],S[h++]);return d}g=s.length;let x=n;for(;h<g;){const S=s[h++],y=s[h++];try{x=S(x)}catch(v){y.call(this,v);break}}try{d=gc.call(this,x)}catch(S){return Promise.reject(S)}for(h=0,g=u.length;h<g;)d=d.then(u[h++],u[h++]);return d}getUri(t){t=dn(this.defaults,t);const n=Sp(t.baseURL,t.url,t.allowAbsoluteUrls);return xp(n,t.params,t.paramsSerializer)}};k.forEach(["delete","get","head","options"],function(t){rn.prototype[t]=function(n,r){return this.request(dn(r||{},{method:t,url:n,data:(r||{}).data}))}});k.forEach(["post","put","patch","query"],function(t){function n(r){return function(i,l,s){return this.request(dn(s||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:l}))}}rn.prototype[t]=n(),t!=="query"&&(rn.prototype[t+"Form"]=n(!0))});let Ev=class Cp{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(o=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](o);r._listeners=null}),this.promise.then=o=>{let i;const l=new Promise(s=>{r.subscribe(s),i=s}).then(o);return l.cancel=function(){r.unsubscribe(i)},l},t(function(i,l,s){r.reason||(r.reason=new eo(i,l,s),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new Cp(function(o){t=o}),cancel:t}}};function bv(e){return function(n){return e.apply(null,n)}}function Nv(e){return k.isObject(e)&&e.isAxiosError===!0}const Cs={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Cs).forEach(([e,t])=>{Cs[t]=e});function jp(e){const t=new rn(e),n=lp(rn.prototype.request,t);return k.extend(n,rn.prototype,t,{allOwnKeys:!0}),k.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return jp(dn(e,o))},n}const te=jp(Zr);te.Axios=rn;te.CanceledError=eo;te.CancelToken=Ev;te.isCancel=wp;te.VERSION=Ta;te.toFormData=Bi;te.AxiosError=T;te.Cancel=te.CanceledError;te.all=function(t){return Promise.all(t)};te.spread=bv;te.isAxiosError=Nv;te.mergeConfig=dn;te.AxiosHeaders=ke;te.formToJSON=e=>vp(k.isHTMLForm(e)?new FormData(e):e);te.getAdapter=Np.getAdapter;te.HttpStatusCode=Cs;te.default=te;const{Axios:c1,AxiosError:d1,CanceledError:f1,isCancel:p1,CancelToken:h1,VERSION:m1,all:g1,Cancel:y1,isAxiosError:x1,spread:v1,toFormData:w1,AxiosHeaders:k1,HttpStatusCode:S1,formToJSON:E1,getAdapter:b1,mergeConfig:N1,create:C1}=te,kl={},re=te.create({baseURL:(kl==null?void 0:kl.VITE_API_URL)||"http://localhost:5000/api"});re.interceptors.request.use(e=>{const t=localStorage.getItem("token");return t&&(e.headers.Authorization=`Bearer ${t}`),e});re.interceptors.response.use(e=>e,e=>{var t;return((t=e.response)==null?void 0:t.status)===401&&(localStorage.removeItem("token"),localStorage.removeItem("user"),window.location.href="/login"),Promise.reject(e)});const La=_y()(Dy(e=>({user:null,token:null,isAuthenticated:!1,isLoading:!1,error:null,login:async(t,n)=>{var r,o;e({isLoading:!0,error:null});try{const i=await re.post("/auth/login",{nim:t,password:n}),{token:l,user:s}=i.data;localStorage.setItem("token",l),e({user:s,token:l,isAuthenticated:!0,isLoading:!1})}catch(i){const l=((o=(r=i==null?void 0:i.response)==null?void 0:r.data)==null?void 0:o.message)||"Login gagal. Periksa NIM dan Password.";throw e({error:l,isLoading:!1}),new Error(l)}},logout:()=>{localStorage.removeItem("token"),localStorage.removeItem("user"),e({user:null,token:null,isAuthenticated:!1})},clearError:()=>e({error:null})}),{name:"auth-storage",partialize:e=>({user:e.user,token:e.token,isAuthenticated:e.isAuthenticated})}));/**
 * @license lucide-react v0.316.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Cv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.316.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),D=(e,t)=>{const n=E.forwardRef(({color:r="currentColor",size:o=24,strokeWidth:i=2,absoluteStrokeWidth:l,className:s="",children:a,...u},d)=>E.createElement("svg",{ref:d,...Cv,width:o,height:o,stroke:r,strokeWidth:l?Number(i)*24/Number(o):i,className:["lucide",`lucide-${jv(e)}`,s].join(" "),...u},[...t.map(([h,g])=>E.createElement(h,g)),...Array.isArray(a)?a:[a]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.316.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=D("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);/**
 * @license lucide-react v0.316.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=D("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.316.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=D("Brain",[["path",{d:"M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z",key:"1mhkh5"}],["path",{d:"M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z",key:"1d6s00"}]]);/**
 * @license lucide-react v0.316.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=D("Briefcase",[["rect",{width:"20",height:"14",x:"2",y:"7",rx:"2",ry:"2",key:"eto64e"}],["path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"zwj3tp"}]]);/**
 * @license lucide-react v0.316.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const on=D("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.316.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=D("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.316.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv=D("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.316.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=D("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.316.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=D("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.316.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=D("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.316.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sl=D("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.316.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=D("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.316.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rp=D("GraduationCap",[["path",{d:"M22 10v6M2 10l10-5 10 5-10 5z",key:"1ef52a"}],["path",{d:"M6 12v5c3 3 9 3 12 0v-5",key:"1f75yj"}]]);/**
 * @license lucide-react v0.316.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=D("Hash",[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]]);/**
 * @license lucide-react v0.316.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=D("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.316.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=D("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.316.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=D("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.316.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v=D("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.316.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pp=D("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.316.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _p=D("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.316.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=D("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.316.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pi=D("Mic2",[["path",{d:"m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12",key:"zoua8r"}],["circle",{cx:"17",cy:"7",r:"5",key:"1fomce"}]]);/**
 * @license lucide-react v0.316.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aa=D("Pencil",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.316.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tp=D("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.316.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const za=D("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.316.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv=D("ShieldCheck",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.316.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=D("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]);/**
 * @license lucide-react v0.316.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv=D("Tag",[["path",{d:"M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z",key:"14b2ls"}],["path",{d:"M7 7h.01",key:"7u93v4"}]]);/**
 * @license lucide-react v0.316.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const js=D("Tags",[["path",{d:"M9 5H2v7l6.29 6.29c.94.94 2.48.94 3.42 0l3.58-3.58c.94-.94.94-2.48 0-3.42L9 5Z",key:"gt587u"}],["path",{d:"M6 9.01V9",key:"1flxpt"}],["path",{d:"m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19",key:"1cbfv1"}]]);/**
 * @license lucide-react v0.316.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Da=D("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.316.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=D("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.316.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=D("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.316.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=D("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.316.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=D("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Xv=()=>{const[e,t]=E.useState(""),[n,r]=E.useState(""),[o,i]=E.useState(!1),{login:l,isLoading:s}=La(),a=Oi(),u=async d=>{d.preventDefault();try{await l(e,n),ne.success("Login berhasil! Selamat datang."),a("/dashboard")}catch(h){ne.error(h.message||"Login gagal")}};return c.jsxs("div",{className:"neobrutal-universe",children:[c.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700;800&family=Space+Grotesk:wght@500;700&display=swap');

        .neobrutal-universe {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #F4F2EC; /* Background dot-grid style match */
          background-image: radial-gradient(#000000 1.5px, transparent 1.5px);
          background-size: 24px 24px;
          font-family: 'Space Grotesk', sans-serif;
          padding: 24px;
        }

        /* ── CARD PANEL NEOBRUTALISM (MATCH SIDEBAR & DASHBOARD) ── */
        .neobrutal-panel {
          width: 100%;
          max-width: 450px;
          background: #FFFFFF;
          border: 4px solid #000000;
          box-shadow: 10px 10px 0px #000000;
          padding: 40px 32px;
          position: relative;
        }

        /* ── Header Branding Atas ── */
        .panel-header-box {
          background: #FFE600; /* Kuning Khas Eventhub */
          border: 4px solid #000000;
          box-shadow: 4px 4px 0px #000000;
          padding: 16px;
          margin-bottom: 32px;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .neon-logo-square {
          width: 48px;
          height: 48px;
          background: #FFFFFF;
          border: 3px solid #000000;
          display: grid;
          place-items: center;
          color: #000000;
        }

        .header-text-group h1 {
          font-size: 24px;
          font-weight: 700;
          text-transform: uppercase;
          color: #000000;
          margin: 0;
          line-height: 1.1;
        }

        .header-text-group p {
          font-size: 11px;
          font-weight: 500;
          color: #000000;
          letter-spacing: 0.5px;
          margin-top: 2px;
        }

        /* ── Form Constraints ── */
        .neobrutal-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-group label {
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          color: #000000;
          letter-spacing: 0.5px;
        }

        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .input-wrapper input {
          width: 100%;
          background: #FFFFFF;
          border: 3px solid #000000;
          padding: 14px 16px 14px 48px;
          color: #000000;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.15s ease;
        }

        .input-wrapper input:focus {
          outline: none;
          background: #FFE600; /* Berubah jadi kuning saat aktif */
          box-shadow: 4px 4px 0px #000000;
          transform: translate(-2px, -2px);
        }

        .input-icon {
          position: absolute;
          left: 16px;
          color: #000000;
          pointer-events: none;
        }

        .eye-toggle-btn {
          position: absolute;
          right: 14px;
          background: #FFFFFF;
          border: 2px solid #000000;
          color: #000000;
          cursor: pointer;
          display: grid;
          place-items: center;
          padding: 4px;
          transition: transform 0.1s;
        }

        .eye-toggle-btn:active {
          transform: translate(1px, 1px);
        }

        /* ── TOMBOL MASUK KUNING/HITAM TEBAL (MATCH TOMBOL KELUAR) ── */
        .submit-neobrutal-btn {
          margin-top: 8px;
          width: 100%;
          padding: 16px;
          background: #FFE600;
          color: #000000;
          border: 4px solid #000000;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 15px;
          font-weight: 700;
          text-transform: uppercase;
          cursor: pointer;
          box-shadow: 5px 5px 0px #000000;
          transition: all 0.15s ease;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .submit-neobrutal-btn:hover:not(:disabled) {
          transform: translate(-2px, -2px);
          box-shadow: 7px 7px 0px #000000;
        }

        .submit-neobrutal-btn:active:not(:disabled) {
          transform: translate(3px, 3px);
          box-shadow: 2px 2px 0px #000000;
        }

        .submit-neobrutal-btn:disabled {
          background: #EAEAEA;
          opacity: 0.6;
          cursor: not-allowed;
        }

        /* Loading Spinner ala Retro */
        .retro-spinner {
          width: 20px;
          height: 20px;
          border: 3px solid #000000;
          border-top-color: transparent;
          border-radius: 50%;
          animation: spin 0.5s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* ── HINT BOX AKUN BAWAAN (NEOBRUTAL STYLE) ── */
        .neobrutal-hint-box {
          margin-top: 24px;
          display: flex;
          align-items: flex-start;
          gap: 12px;
          background: #FFFFFF;
          border: 3px solid #000000;
          box-shadow: 4px 4px 0px #000000;
          padding: 12px 14px;
          font-size: 12px;
          color: #000000;
          line-height: 1.4;
        }

        .neobrutal-hint-box svg {
          color: #000000;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .neobrutal-hint-box strong {
          background: #FFE600;
          border: 1.5px solid #000000;
          padding: 1px 4px;
          font-weight: 700;
        }
      `}),c.jsxs("div",{className:"neobrutal-panel",children:[c.jsxs("div",{className:"panel-header-box",children:[c.jsx("div",{className:"neon-logo-square",children:c.jsx(on,{size:24})}),c.jsxs("div",{className:"header-text-group",children:[c.jsx("h1",{children:"EVENTHUB"}),c.jsx("p",{children:"EVENT MANAGEMENT SYSTEM"})]})]}),c.jsxs("form",{onSubmit:u,className:"neobrutal-form",children:[c.jsxs("div",{className:"form-group",children:[c.jsx("label",{children:"NIM"}),c.jsxs("div",{className:"input-wrapper",children:[c.jsx("input",{type:"text",value:e,onChange:d=>t(d.target.value),placeholder:"Masukkan NIM",required:!0,autoComplete:"username"}),c.jsx(Iv,{size:18,className:"input-icon"})]})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{children:"PASSWORD"}),c.jsxs("div",{className:"input-wrapper",children:[c.jsx("input",{type:o?"text":"password",value:n,onChange:d=>r(d.target.value),placeholder:"Masukkan Password",required:!0,autoComplete:"current-password"}),c.jsx(Bv,{size:18,className:"input-icon"}),c.jsx("button",{type:"button",className:"eye-toggle-btn",onClick:()=>i(!o),children:o?c.jsx(Av,{size:14}):c.jsx(zv,{size:14})})]})]}),c.jsx("button",{type:"submit",className:"submit-neobrutal-btn",disabled:s,children:s?c.jsx("div",{className:"retro-spinner"}):"Masuk ke Dashboard"})]}),c.jsxs("div",{className:"neobrutal-hint-box",children:[c.jsx(Wv,{size:18}),c.jsxs("span",{children:["Gunakan akun bawaan sistem untuk uji coba. NIM: ",c.jsx("strong",{children:"24090061"})," atau Password: ",c.jsx("strong",{children:"password123"}),"."]})]})]})]})},Yv=()=>{const[e,t]=E.useState({events:0,categories:0,pembicara:0,upcoming:0}),[n,r]=E.useState(!0);return E.useEffect(()=>{(async()=>{try{const[i,l,s]=await Promise.all([re.get("/events"),re.get("/categories"),re.get("/pembicara")]),a=i.data.filter(u=>u.status==="upcoming").length;t({events:i.data.length,categories:l.data.length,pembicara:s.data.length,upcoming:a})}catch(i){console.error("Gagal memuat data dashboard",i)}finally{r(!1)}})()},[]),c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@700;900&family=Plus+Jakarta+Sans:wght@700;800;900&display=swap');

        /* Polka Dot Grid Background Khas Neobrutalism */
        .dash-container {
          font-family: 'Plus Jakarta Sans', sans-serif;
          background-color: #f4f1ea;
          background-image: radial-gradient(#000000 1px, transparent 1px);
          background-size: 16px 16px;
          min-height: 100%;
          padding: 30px;
          color: #000000;
        }

        /* ── HEADER BANNER UTAMA (KUNING) ── */
        .neo-banner {
          background: #fffb00; /* Kuning Terang */
          border: 4px solid #000000;
          box-shadow: 6px 6px 0px #000000;
          padding: 24px;
          margin-bottom: 35px;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .banner-rhombus {
          width: 24px;
          height: 24px;
          background: #000000;
          transform: rotate(45deg);
          flex-shrink: 0;
        }

        .banner-text h1 {
          font-size: 32px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: -0.5px;
          color: #000000;
          line-height: 1;
          margin-bottom: 4px;
        }

        .banner-text p {
          font-family: 'DM Mono', monospace;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          color: #000000;
          opacity: 0.8;
          letter-spacing: 0.5px;
        }

        /* ── GRID METRIK HORIZONTAL ── */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        /* ── CARD DENGAN POTONGAN SUDUT RETRO (CLIPPED CORNER) ── */
        .neo-stat-card {
          background: #ffffff;
          border: 4px solid #000000;
          box-shadow: 6px 6px 0px #000000;
          padding: 24px;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 160px;
          
          /* Efek Potong Sudut Kanan Atas menggunakan Clip-Path */
          clip-path: polygon(0 0, calc(100% - 25px) 0, 100% 25px, 100% 100%, 0 100%);
        }

        /* Variasi Warna Latar Belakang Lembut Sesuai Gambar */
        .card-events { background: #fffcf4; }
        .card-categories { background: #f0f3ff; }
        .card-speakers { background: #fff2fc; }
        .card-upcoming { background: #f1fdf5; }

        /* Kotak Ikon Kecil di Sisi Atas */
        .card-icon-box {
          width: 40px;
          height: 40px;
          border: 3px solid #000000;
          display: grid;
          place-items: center;
          color: #ffffff;
          box-shadow: 2px 2px 0px #000000;
        }

        /* Data Nilai Utama */
        .card-value-box {
          margin-top: auto;
          z-index: 2;
        }

        .card-number {
          font-size: 48px;
          font-weight: 900;
          color: #000000;
          line-height: 1;
        }

        .card-title {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          color: #000000;
          opacity: 0.7;
          margin-top: 4px;
          letter-spacing: 0.5px;
        }

        /* ── DEKORASI IKON BESAR TRANSPARAN DI BELAKANG ── */
        .card-bg-icon {
          position: absolute;
          right: -10px;
          bottom: -10px;
          opacity: 0.15; /* Efek transparan samar */
          color: #000000;
          pointer-events: none;
          z-index: 1;
        }

        /* Kustomisasi kliping sudut border tebal agar menyatu */
        .neo-stat-card::before {
          content: "";
          position: absolute;
          top: -4px; right: -4px;
          width: 38px; height: 38px;
          background: #000000;
          transform: rotate(45deg);
          z-index: 3;
          pointer-events: none;
        }

        /* Responsive Layout */
        @media (max-width: 1024px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }
          .neo-banner {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
        }
      `}),c.jsxs("div",{className:"dash-container",children:[c.jsxs("div",{className:"neo-banner",children:[c.jsx("div",{className:"banner-rhombus"}),c.jsxs("div",{className:"banner-text",children:[c.jsx("h1",{children:"Dashboard"}),c.jsx("p",{children:"Selamat Datang di Event Management System"})]})]}),c.jsxs("div",{className:"stats-grid",children:[c.jsxs("div",{className:"neo-stat-card card-events",children:[c.jsx("div",{className:"card-icon-box",style:{background:"#ff5500"},children:c.jsx(on,{size:20})}),c.jsxs("div",{className:"card-value-box",children:[c.jsx("div",{className:"card-number",children:n?"...":e.events}),c.jsx("div",{className:"card-title",children:"Total Event"})]}),c.jsx(on,{size:110,className:"card-bg-icon"})]}),c.jsxs("div",{className:"neo-stat-card card-categories",children:[c.jsx("div",{className:"card-icon-box",style:{background:"#0055ff"},children:c.jsx(js,{size:20})}),c.jsxs("div",{className:"card-value-box",children:[c.jsx("div",{className:"card-number",children:n?"...":e.categories}),c.jsx("div",{className:"card-title",children:"Kategori"})]}),c.jsx(js,{size:110,className:"card-bg-icon"})]}),c.jsxs("div",{className:"neo-stat-card card-speakers",children:[c.jsx("div",{className:"card-icon-box",style:{background:"#cc00cc"},children:c.jsx(pi,{size:20})}),c.jsxs("div",{className:"card-value-box",children:[c.jsx("div",{className:"card-number",children:n?"...":e.pembicara}),c.jsx("div",{className:"card-title",children:"Pembicara"})]}),c.jsx(pi,{size:110,className:"card-bg-icon"})]}),c.jsxs("div",{className:"neo-stat-card card-upcoming",children:[c.jsx("div",{className:"card-icon-box",style:{background:"#00aa33"},children:c.jsx(Gv,{size:20})}),c.jsxs("div",{className:"card-value-box",children:[c.jsx("div",{className:"card-number",children:n?"...":e.upcoming}),c.jsx("div",{className:"card-title",children:"Upcoming"})]}),c.jsx(on,{size:110,className:"card-bg-icon"})]})]})]})]})},xc=["#fff5f0","#edf2ff","#fff0f5","#f4fff7"],Zv=()=>{const[e,t]=E.useState([]),[n,r]=E.useState(!0),[o,i]=E.useState(!1),[l,s]=E.useState(null),[a,u]=E.useState(""),[d,h]=E.useState(""),[g,x]=E.useState(!1),S=async()=>{r(!0);try{const w=await re.get("/categories");t(w.data)}catch{ne.error("Gagal memuat data kategori")}finally{r(!1)}};E.useEffect(()=>{S()},[]);const y=()=>{s(null),u(""),h(""),i(!0)},v=w=>{s(w),u(w.name),h(w.description||""),i(!0)},m=()=>{i(!1),s(null)},p=async w=>{w.preventDefault(),x(!0);try{const N={name:a,description:d};l?(await re.put(`/categories/${l.id}`,N),ne.success("Kategori diperbarui")):(await re.post("/categories",N),ne.success("Kategori ditambahkan")),m(),S()}catch{ne.error("Gagal menyimpan kategori")}finally{x(!1)}},f=async(w,N)=>{if(confirm(`Hapus kategori "${N}"?`))try{await re.delete(`/categories/${w}`),ne.success("Kategori dihapus"),S()}catch{ne.error("Gagal menghapus kategori")}};return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800;900&family=DM+Mono:wght@700&display=swap');

        .cat-page {
          font-family: 'Plus Jakarta Sans', sans-serif;
          color: #000000;
          width: 100%;
        }

        /* BANNER ATAS (Meniru banner utama dashboard) */
        .cat-banner {
          background: #fffb00;
          border: 4px solid #000000;
          padding: 16px 24px;
          box-shadow: 6px 6px 0px #000000;
          margin-bottom: 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .cat-banner-text h1 {
          font-size: 24px;
          font-weight: 900;
          text-transform: uppercase;
          margin: 0;
          letter-spacing: -0.5px;
        }

        .cat-banner-text p {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          margin: 4px 0 0 0;
          opacity: 0.8;
        }

        /* TOMBOL TAMBAH NEOBRUTALISM */
        .btn-add {
          background: #ffffff;
          border: 4px solid #000000;
          padding: 10px 18px;
          color: #000000;
          font-weight: 900;
          font-size: 13px;
          text-transform: uppercase;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          box-shadow: 4px 4px 0px #000000;
          transition: all 0.1s ease;
        }

        .btn-add:hover {
          background: #000000;
          color: #fffb00;
          transform: translate(-2px, -2px);
          box-shadow: 6px 6px 0px #000000;
        }

        .btn-add:active {
          transform: translate(2px, 2px);
          box-shadow: 2px 2px 0px #000000;
        }

        /* BENTO GRID */
        .cat-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 24px;
        }

        /* CARD STYLE DENGAN SUDUT TERPOTONG (Sama persis seperti card dashboard) */
        .cat-card {
          border: 4px solid #000000;
          box-shadow: 6px 6px 0px #000000;
          padding: 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 180px;
          position: relative;
          background: #ffffff;
          /* Efek miring potong sudut kanan atas */
          clip-path: polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0 100%);
        }

        .cat-card::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 24px;
          height: 24px;
          background: #000000;
          clip-path: polygon(100% 0, 0 0, 100% 100%);
        }

        .cat-card-main {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        /* BADGE SINKRON SAMA AKADEMIK BADGE */
        .cat-badge {
          background: #99eebb; /* Hijau Pastel */
          border: 2px solid #000000;
          padding: 4px 10px;
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          width: fit-content;
          margin-bottom: 8px;
        }

        .cat-card h2 {
          font-size: 20px;
          font-weight: 900;
          text-transform: uppercase;
          margin: 0;
          color: #000000;
        }

        .cat-card p {
          font-size: 13px;
          font-weight: 700;
          color: #444444;
          line-height: 1.5;
          margin: 0;
        }

        /* FOOTER CARD UNTUK AKSI & TOTAL EVENT */
        .cat-card-footer {
          margin-top: 20px;
          padding-top: 14px;
          border-top: 4px dashed #000000;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .cat-count {
          font-family: 'DM Mono', monospace;
          font-size: 14px;
          font-weight: 700;
          background: #ffffff;
          border: 2px solid #000000;
          padding: 2px 8px;
          box-shadow: 2px 2px 0px #000000;
        }

        .cat-actions {
          display: flex;
          gap: 8px;
        }

        /* TOMBOL UTK EDIT & HAPUS */
        .action-btn {
          background: #ffffff;
          border: 2px solid #000000;
          padding: 6px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 2px 2px 0px #000000;
          transition: all 0.05s ease;
        }

        .action-btn:hover {
          background: #fffb00;
          transform: translate(-1px, -1px);
          box-shadow: 3px 3px 0px #000000;
        }

        .action-btn.del:hover {
          background: #ffcdd2;
        }

        /* MODAL NEOBRUTALISM */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 999;
          padding: 20px;
        }

        .modal-box {
          background: #ffffff;
          border: 4px solid #000000;
          box-shadow: 8px 8px 0px #000000;
          width: 100%;
          max-width: 460px;
          padding: 24px;
        }

        .modal-box h3 {
          font-size: 20px;
          font-weight: 900;
          text-transform: uppercase;
          margin: 0 0 20px 0;
          border-bottom: 4px solid #000000;
          padding-bottom: 8px;
        }

        .form-input {
          width: 100%;
          padding: 12px;
          border: 3px solid #000000;
          font-size: 14px;
          font-weight: 700;
          margin-bottom: 16px;
          box-shadow: 3px 3px 0px #000000;
          box-sizing: border-box;
        }

        .form-input:focus {
          outline: none;
          background: #fffb00;
        }

        .modal-buttons {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          margin-top: 8px;
        }

        .btn-cancel {
          background: #ffffff;
          border: 3px solid #000000;
          padding: 8px 16px;
          font-weight: 800;
          text-transform: uppercase;
          cursor: pointer;
          box-shadow: 3px 3px 0px #000000;
        }

        .btn-submit {
          background: #fffb00;
          border: 3px solid #000000;
          padding: 8px 20px;
          font-weight: 800;
          text-transform: uppercase;
          cursor: pointer;
          box-shadow: 3px 3px 0px #000000;
        }

        .btn-submit:hover, .btn-cancel:hover {
          transform: translate(-1px, -1px);
          box-shadow: 4px 4px 0px #000000;
        }
      `}),c.jsxs("div",{className:"cat-page",children:[c.jsxs("div",{className:"cat-banner",children:[c.jsxs("div",{className:"cat-banner-text",children:[c.jsx("h1",{children:"◆ Kategori Event"}),c.jsx("p",{children:"Kelola Kategori Event Management System"})]}),c.jsxs("button",{className:"btn-add",onClick:y,children:[c.jsx(za,{size:16,strokeWidth:3})," Tambah"]})]}),n?c.jsx("p",{style:{fontWeight:800,textTransform:"uppercase"},children:"Memuat data..."}):c.jsx("div",{className:"cat-grid",children:e.map((w,N)=>{var j;const b=xc[N%xc.length];return c.jsxs("div",{className:"cat-card",style:{background:b},children:[c.jsxs("div",{className:"cat-card-main",children:[c.jsxs("div",{className:"cat-badge",children:[c.jsx(Dv,{size:10,style:{marginRight:"4px",display:"inline"}})," Kategori"]}),c.jsx("h2",{children:w.name}),c.jsx("p",{children:w.description||"Tidak ada deskripsi singkat untuk kategori ini."})]}),c.jsxs("div",{className:"cat-card-footer",children:[c.jsxs("div",{className:"cat-count",children:[c.jsx(Kv,{size:12,style:{marginRight:"4px",display:"inline"}}),((j=w._count)==null?void 0:j.events)||0," Event"]}),c.jsxs("div",{className:"cat-actions",children:[c.jsx("button",{className:"action-btn",onClick:()=>v(w),title:"Edit Kategori",children:c.jsx(Aa,{size:14,strokeWidth:2.5})}),c.jsx("button",{className:"action-btn del",onClick:()=>f(w.id,w.name),title:"Hapus Kategori",children:c.jsx(Da,{size:14,strokeWidth:2.5})})]})]})]},w.id)})}),o&&c.jsx("div",{className:"modal-overlay",onClick:m,children:c.jsxs("div",{className:"modal-box",onClick:w=>w.stopPropagation(),children:[c.jsxs("h3",{children:[l?"Edit":"Tambah"," Kategori"]}),c.jsxs("form",{onSubmit:p,children:[c.jsx("input",{className:"form-input",placeholder:"Nama Kategori (Contoh: Workshop, Lomba)",value:a,onChange:w=>u(w.target.value),required:!0}),c.jsx("textarea",{className:"form-input",placeholder:"Tulis deskripsi kategori di sini...",rows:4,value:d,onChange:w=>h(w.target.value)}),c.jsxs("div",{className:"modal-buttons",children:[c.jsx("button",{type:"button",className:"btn-cancel",onClick:m,children:"Batal"}),c.jsx("button",{type:"submit",className:"btn-submit",disabled:g,children:g?"Menyimpan...":"Simpan"})]})]})]})})]})]})},vc={name:"",title:"",expertise:"",email:"",phone:"",bio:"",photoUrl:""},wc=["#fff5f0","#edf2ff","#fff0f5","#f4fff7"],e1=()=>{const[e,t]=E.useState([]),[n,r]=E.useState(!0),[o,i]=E.useState(!1),[l,s]=E.useState(null),[a,u]=E.useState(vc),[d,h]=E.useState(!1),g=async()=>{r(!0);try{const f=await re.get("/pembicara");t(f.data)}catch{ne.error("Gagal memuat data pembicara")}finally{r(!1)}};E.useEffect(()=>{g()},[]);const x=()=>{s(null),u(vc),i(!0)},S=f=>{s(f),u({name:f.name,title:f.title,expertise:f.expertise,email:f.email||"",phone:f.phone||"",bio:f.bio||"",photoUrl:f.photoUrl||""}),i(!0)},y=()=>{i(!1),s(null)},v=async f=>{f.preventDefault(),h(!0);try{l?(await re.put(`/pembicara/${l.id}`,a),ne.success("Pembicara berhasil diperbarui")):(await re.post("/pembicara",a),ne.success("Pembicara berhasil ditambahkan")),y(),g()}catch{ne.error("Gagal menyimpan pembicara")}finally{h(!1)}},m=async(f,w)=>{if(confirm(`Hapus pembicara "${w}"?`))try{await re.delete(`/pembicara/${f}`),ne.success("Pembicara berhasil dihapus"),g()}catch{ne.error("Gagal menghapus pembicara")}},p=(f="",w="")=>{const N=(f+" "+w).toLowerCase();return N.includes("code")||N.includes("developer")||N.includes("web")||N.includes("software")?c.jsx(Lv,{size:28,style:{color:"#000000"}}):N.includes("ai")||N.includes("intelligence")||N.includes("machine")||N.includes("data")?c.jsx(_v,{size:28,style:{color:"#000000"}}):N.includes("security")||N.includes("cyber")||N.includes("network")?c.jsx(Vv,{size:28,style:{color:"#000000"}}):N.includes("dosen")||N.includes("researcher")||N.includes("m.kom")||N.includes("ph.d")?c.jsx(Rp,{size:28,style:{color:"#000000"}}):N.includes("ceo")||N.includes("founder")||N.includes("manager")||N.includes("owner")?c.jsx(Tv,{size:28,style:{color:"#000000"}}):c.jsx(Mv,{size:28,style:{color:"#000000"}})};return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800;900&family=DM+Mono:wght@700&display=swap');

        .spk-page {
          font-family: 'Plus Jakarta Sans', sans-serif;
          color: #000000;
          width: 100%;
        }

        /* BANNER ATAS (Identik dengan Dashboard & Kategori) */
        .spk-banner {
          background: #fffb00;
          border: 4px solid #000000;
          padding: 16px 24px;
          box-shadow: 6px 6px 0px #000000;
          margin-bottom: 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .spk-banner-text h1 {
          font-size: 24px;
          font-weight: 900;
          text-transform: uppercase;
          margin: 0;
          letter-spacing: -0.5px;
        }

        .spk-banner-text p {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          margin: 4px 0 0 0;
          opacity: 0.8;
        }

        /* TOMBOL TAMBAH */
        .btn-add {
          background: #ffffff;
          border: 4px solid #000000;
          padding: 10px 18px;
          color: #000000;
          font-weight: 900;
          font-size: 13px;
          text-transform: uppercase;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          box-shadow: 4px 4px 0px #000000;
          transition: all 0.1s ease;
        }

        .btn-add:hover {
          background: #000000;
          color: #fffb00;
          transform: translate(-2px, -2px);
          box-shadow: 6px 6px 0px #000000;
        }

        .btn-add:active {
          transform: translate(2px, 2px);
          box-shadow: 2px 2px 0px #000000;
        }

        /* GRID BENTO */
        .spk-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 24px;
        }

        /* CARD STYLE DENGAN SUDUT TERPOTONG (Clipped Corner) */
        .spk-card {
          border: 4px solid #000000;
          box-shadow: 6px 6px 0px #000000;
          padding: 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          background: #ffffff;
          clip-path: polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0 100%);
        }

        .spk-card::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 24px;
          height: 24px;
          background: #000000;
          clip-path: polygon(100% 0, 0 0, 100% 100%);
        }

        /* AVATAR BOX BLOCKY */
        .spk-avatar-block {
          width: 70px;
          height: 70px;
          border: 3px solid #000000;
          background: #ffffff;
          display: grid;
          place-items: center;
          margin-bottom: 16px;
          box-shadow: 3px 3px 0px #000000;
          overflow: hidden;
        }

        .spk-avatar-block img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .spk-card h3 {
          font-size: 19px;
          font-weight: 900;
          text-transform: uppercase;
          margin: 0 0 4px 0;
          color: #000000;
        }

        .spk-title {
          font-size: 12px;
          font-weight: 700;
          color: #555555;
          text-transform: uppercase;
          margin: 0 0 12px 0;
          font-family: 'DM Mono', monospace;
        }

        /* BADGE KEAHLIAN */
        .spk-expertise {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          background: #ffffff;
          border: 2px solid #000000;
          padding: 4px 10px;
          width: fit-content;
          margin-bottom: 14px;
          box-shadow: 2px 2px 0px #000000;
        }

        /* UTILITY CONTACTS */
        .spk-contacts {
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding-top: 10px;
          border-top: 2px dashed #000000;
        }

        .spk-contact-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          font-weight: 700;
          color: #222222;
        }

        /* CARD FOOTER */
        .spk-card-footer {
          margin-top: 18px;
          padding-top: 12px;
          border-top: 4px solid #000000;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .spk-badge-event {
          background: #99eebb; /* Hijau Pastel */
          border: 2px solid #000000;
          padding: 4px 10px;
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
        }

        .spk-actions {
          display: flex;
          gap: 6px;
        }

        .action-btn {
          background: #ffffff;
          border: 2px solid #000000;
          padding: 6px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 2px 2px 0px #000000;
          transition: all 0.05s ease;
        }

        .action-btn:hover {
          background: #fffb00;
          transform: translate(-1px, -1px);
          box-shadow: 3px 3px 0px #000000;
        }

        .action-btn.del:hover {
          background: #ffcdd2;
        }

        /* MODAL NEOBRUTALISM LIGHT-MODE */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 999;
          padding: 20px;
        }

        .modal-box {
          background: #ffffff;
          border: 4px solid #000000;
          box-shadow: 8px 8px 0px #000000;
          width: 100%;
          max-width: 540px;
          padding: 24px;
        }

        .modal-box h3 {
          font-size: 20px;
          font-weight: 900;
          text-transform: uppercase;
          margin: 0 0 20px 0;
          border-bottom: 4px solid #000000;
          padding-bottom: 8px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin-bottom: 12px;
        }

        .form-group label {
          font-size: 12px;
          font-weight: 800;
          text-transform: uppercase;
        }

        .form-input {
          width: 100%;
          padding: 10px;
          border: 3px solid #000000;
          font-size: 13px;
          font-weight: 700;
          box-shadow: 2px 2px 0px #000000;
          box-sizing: border-box;
        }

        .form-input:focus {
          outline: none;
          background: #fffb00;
        }

        .modal-buttons {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          margin-top: 14px;
        }

        .btn-cancel {
          background: #ffffff;
          border: 3px solid #000000;
          padding: 8px 16px;
          font-weight: 800;
          text-transform: uppercase;
          cursor: pointer;
          box-shadow: 3px 3px 0px #000000;
        }

        .btn-submit {
          background: #fffb00;
          border: 3px solid #000000;
          padding: 8px 20px;
          font-weight: 800;
          text-transform: uppercase;
          cursor: pointer;
          box-shadow: 3px 3px 0px #000000;
        }

        .btn-submit:hover, .btn-cancel:hover {
          transform: translate(-1px, -1px);
          box-shadow: 4px 4px 0px #000000;
        }
      `}),c.jsxs("div",{className:"spk-page",children:[c.jsxs("div",{className:"spk-banner",children:[c.jsxs("div",{className:"spk-banner-text",children:[c.jsx("h1",{children:"◆ Pembicara Event"}),c.jsx("p",{children:"Kelola Data Ahli & Pembicara Kegiatan"})]}),c.jsxs("button",{className:"btn-add",onClick:x,children:[c.jsx(za,{size:16,strokeWidth:3})," Tambah"]})]}),n?c.jsx("p",{style:{fontWeight:800,textTransform:"uppercase"},children:"Memuat data pembicara..."}):c.jsx("div",{className:"spk-grid",children:e.length===0?c.jsxs("div",{style:{gridColumn:"1/-1",border:"3px dashed #000000",padding:"40px",textAlign:"center",fontWeight:"800",textTransform:"uppercase"},children:[c.jsx(pi,{size:32,style:{marginBottom:"8px"}}),c.jsx("p",{children:"Belum ada data pembicara."})]}):e.map((f,w)=>{var b;const N=wc[w%wc.length];return c.jsxs("div",{className:"spk-card",style:{background:N},children:[c.jsxs("div",{children:[c.jsx("div",{className:"spk-avatar-block",children:f.photoUrl?c.jsx("img",{src:f.photoUrl,alt:f.name}):p(f.title,f.expertise)}),c.jsx("h3",{children:f.name}),c.jsx("div",{className:"spk-title",children:f.title}),c.jsxs("div",{className:"spk-expertise",children:[c.jsx(Rv,{size:12,style:{marginRight:"4px"}})," ",f.expertise]}),(f.email||f.phone)&&c.jsxs("div",{className:"spk-contacts",children:[f.email&&c.jsxs("div",{className:"spk-contact-item",children:[c.jsx(Pp,{size:12})," ",c.jsx("span",{children:f.email})]}),f.phone&&c.jsxs("div",{className:"spk-contact-item",children:[c.jsx(Tp,{size:12})," ",c.jsx("span",{children:f.phone})]})]})]}),c.jsxs("div",{className:"spk-card-footer",children:[c.jsxs("div",{className:"spk-badge-event",children:[((b=f._count)==null?void 0:b.events)||0," Event"]}),c.jsxs("div",{className:"spk-actions",children:[c.jsx("button",{className:"action-btn",onClick:()=>S(f),title:"Edit",children:c.jsx(Aa,{size:13,strokeWidth:2.5})}),c.jsx("button",{className:"action-btn del",onClick:()=>m(f.id,f.name),title:"Hapus",children:c.jsx(Da,{size:13,strokeWidth:2.5})})]})]})]},f.id)})}),o&&c.jsx("div",{className:"modal-overlay",onClick:y,children:c.jsxs("div",{className:"modal-box",onClick:f=>f.stopPropagation(),children:[c.jsx("h3",{children:l?"Edit Pembicara":"Tambah Pembicara"}),c.jsxs("form",{onSubmit:v,children:[c.jsxs("div",{className:"form-row",children:[c.jsxs("div",{className:"form-group",children:[c.jsx("label",{children:"Nama Lengkap *"}),c.jsx("input",{type:"text",className:"form-input",value:a.name,onChange:f=>u({...a,name:f.target.value}),placeholder:"Contoh: Dr. Eko",required:!0})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{children:"Jabatan / Gelar *"}),c.jsx("input",{type:"text",className:"form-input",value:a.title,onChange:f=>u({...a,title:f.target.value}),placeholder:"Contoh: CTO, Dosen",required:!0})]})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{children:"Keahlian / Bidang *"}),c.jsx("input",{type:"text",className:"form-input",value:a.expertise,onChange:f=>u({...a,expertise:f.target.value}),placeholder:"Contoh: Cybersecurity, Web Dev",required:!0})]}),c.jsxs("div",{className:"form-row",children:[c.jsxs("div",{className:"form-group",children:[c.jsx("label",{children:"Email"}),c.jsx("input",{type:"email",className:"form-input",value:a.email,onChange:f=>u({...a,email:f.target.value}),placeholder:"name@domain.com"})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{children:"Telepon"}),c.jsx("input",{type:"text",className:"form-input",value:a.phone,onChange:f=>u({...a,phone:f.target.value}),placeholder:"08xxxxxxxxxx"})]})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{children:"Foto URL"}),c.jsx("input",{type:"url",className:"form-input",value:a.photoUrl,onChange:f=>u({...a,photoUrl:f.target.value}),placeholder:"https://..."})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{children:"Biografi Singkat"}),c.jsx("textarea",{className:"form-input",value:a.bio,onChange:f=>u({...a,bio:f.target.value}),placeholder:"Deskripsi ringkas pembicara...",rows:3})]}),c.jsxs("div",{className:"modal-buttons",children:[c.jsx("button",{type:"button",className:"btn-cancel",onClick:y,children:"Batal"}),c.jsx("button",{type:"submit",className:"btn-submit",disabled:d,children:d?"Menyimpan...":"Simpan"})]})]})]})})]})]})},kc={upcoming:"#0055ff",ongoing:"#00cc66",completed:"#555555",cancelled:"#ff2222"},t1={upcoming:"Akan Datang",ongoing:"Berlangsung",completed:"Selesai",cancelled:"Dibatalkan"},Sc={title:"",description:"",date:"",time:"",location:"",capacity:"",status:"upcoming",imageUrl:"",categoryId:"",pembicaraId:""},n1=()=>{const[e,t]=E.useState([]),[n,r]=E.useState([]),[o,i]=E.useState([]),[l,s]=E.useState(!0),[a,u]=E.useState(!1),[d,h]=E.useState(null),[g,x]=E.useState(Sc),[S,y]=E.useState(!1),v=async()=>{s(!0);try{const[b,j,_]=await Promise.all([re.get("/events"),re.get("/categories"),re.get("/pembicara")]);t(b.data),r(j.data),i(_.data)}catch{ne.error("Gagal memuat data")}finally{s(!1)}};E.useEffect(()=>{v()},[]);const m=()=>{h(null),x(Sc),u(!0)},p=b=>{h(b),x({title:b.title,description:b.description||"",date:b.date?b.date.split("T")[0]:"",time:b.time,location:b.location,capacity:String(b.capacity),status:b.status,imageUrl:b.imageUrl||"",categoryId:String(b.categoryId),pembicaraId:String(b.pembicaraId)}),u(!0)},f=()=>{u(!1),h(null)},w=async b=>{b.preventDefault(),y(!0);const j={...g,capacity:Number(g.capacity),categoryId:Number(g.categoryId),pembicaraId:Number(g.pembicaraId)};try{d?(await re.put(`/events/${d.id}`,j),ne.success("Event diperbarui")):(await re.post("/events",j),ne.success("Event ditambahkan")),f(),v()}catch{ne.error("Gagal menyimpan data")}finally{y(!1)}},N=async(b,j)=>{if(confirm(`Hapus "${j}"?`))try{await re.delete(`/events/${b}`),ne.success("Dihapus"),v()}catch{ne.error("Gagal menghapus")}};return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        /* ── Page Layout ── */
        .page {
          width: 100%;
          color: #000000;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }

        .header h1 {
          font-size: 28px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: -0.5px;
        }

        /* ── Neobrutalism Button (Kuning dengan Bayangan Kaku) ── */
        .btn {
          background: #fffb00; /* Kuning Terang */
          border: 4px solid #000000;
          padding: 10px 20px;
          color: #000000;
          font-weight: 900;
          font-size: 14px;
          text-transform: uppercase;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          box-shadow: 4px 4px 0px #000000;
          transition: transform 0.1s, box-shadow 0.1s;
        }

        .btn:hover {
          transform: translate(-2px, -2px);
          box-shadow: 6px 6px 0px #000000;
        }

        .btn:active {
          transform: translate(2px, 2px);
          box-shadow: 2px 2px 0px #000000;
        }

        /* ── Grid & Cards (Siku-siku Tajam, Border Tebal) ── */
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 24px;
        }

        .card {
          background: #ffffff;
          border: 4px solid #000000;
          box-shadow: 6px 6px 0px #000000;
          overflow: hidden;
          transition: transform 0.1s, box-shadow 0.1s;
          display: flex;
          flex-direction: column;
        }

        .card:hover {
          transform: translate(-3px, -3px);
          box-shadow: 9px 9px 0px #000000;
        }

        .img {
          height: 160px;
          background: #e0e0e0;
          background-size: cover;
          background-position: center;
          border-bottom: 4px solid #000000;
        }

        .content {
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex: 1;
        }

        .title {
          font-size: 16px;
          font-weight: 900;
          text-transform: uppercase;
          line-height: 1.2;
        }

        .meta {
          font-size: 12px;
          font-weight: 700;
          display: flex;
          flex-direction: column;
          gap: 6px;
          color: #444444;
        }

        .meta span {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        /* ── Status Badge ── */
        .badge {
          align-self: flex-start;
          font-size: 11px;
          font-weight: 900;
          text-transform: uppercase;
          padding: 4px 10px;
          border: 2px solid #000000;
          box-shadow: 2px 2px 0px #000000;
        }

        .footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: auto;
          padding-top: 12px;
          border-top: 2px dashed #000000;
        }

        .capacity-info {
          font-size: 13px;
          font-weight: 800;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .actions {
          display: flex;
          gap: 8px;
        }

        /* ── Icon Action Buttons ── */
        .icon-btn {
          background: #ffffff;
          border: 3px solid #000000;
          padding: 6px;
          cursor: pointer;
          box-shadow: 2px 2px 0px #000000;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .icon-btn:hover {
          background: #fffb00; /* Kuning saat hover edit */
          transform: translate(-1px, -1px);
          box-shadow: 3px 3px 0px #000000;
        }

        .icon-btn.delete-btn:hover {
          background: #ff2222; /* Merah saat hover hapus */
          color: #ffffff;
        }

        /* ── Neobrutalism Modal Layout ── */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(4px);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 100;
          padding: 16px;
        }

        .modal {
          background: #ffffff;
          padding: 24px;
          border: 4px solid #000000;
          box-shadow: 10px 10px 0px #000000;
          width: 100%;
          max-width: 600px;
          color: #000000;
        }

        .modal h2 {
          font-size: 22px;
          font-weight: 900;
          text-transform: uppercase;
          margin-bottom: 20px;
          border-bottom: 4px solid #000000;
          padding-bottom: 8px;
        }

        /* ── Input & Select Brutalism Style ── */
        .input {
          width: 100%;
          margin-bottom: 14px;
          padding: 12px;
          border: 3px solid #000000;
          background: #ffffff;
          color: #000000;
          font-size: 14px;
          font-weight: 700;
          box-shadow: 3px 3px 0px #000000;
        }

        .input:focus {
          outline: none;
          background: #fffb00; /* Efek fokus warna kuning mencolok */
          transform: translate(-1px, -1px);
          box-shadow: 4px 4px 0px #000000;
        }

        .row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .btn-secondary {
          background: #ffffff;
          border: 3px solid #000000;
          padding: 10px 20px;
          color: #000000;
          font-weight: 900;
          text-transform: uppercase;
          cursor: pointer;
          box-shadow: 3px 3px 0px #000000;
        }

        .btn-secondary:hover {
          background: #f0f0f0;
          transform: translate(-1px, -1px);
          box-shadow: 4px 4px 0px #000000;
        }

        .btn-primary {
          background: #fffb00;
          border: 3px solid #000000;
          padding: 10px 24px;
          color: #000000;
          font-weight: 900;
          text-transform: uppercase;
          cursor: pointer;
          box-shadow: 3px 3px 0px #000000;
        }

        .btn-primary:hover {
          transform: translate(-1px, -1px);
          box-shadow: 4px 4px 0px #000000;
        }
      `}),c.jsxs("div",{className:"page",children:[c.jsxs("div",{className:"header",children:[c.jsx("h1",{children:"Kelola Event"}),c.jsxs("button",{className:"btn",onClick:m,children:[c.jsx(za,{size:18,strokeWidth:3})," Tambah Event"]})]}),l?c.jsx("p",{style:{fontWeight:800,textTransform:"uppercase"},children:"Memuat data..."}):c.jsx("div",{className:"grid",children:e.map(b=>c.jsxs("div",{className:"card",children:[c.jsx("div",{className:"img",style:{backgroundImage:`url(${b.imageUrl||"https://picsum.photos/400"})`}}),c.jsxs("div",{className:"content",children:[c.jsx("div",{className:"title",children:b.title}),c.jsxs("div",{className:"meta",children:[c.jsxs("span",{children:[c.jsx(on,{size:14})," ",b.date?new Date(b.date).toLocaleDateString("id-ID",{day:"numeric",month:"long",year:"numeric"}):"-"]}),c.jsxs("span",{children:[c.jsx(Ov,{size:14})," ",b.time," WIB"]}),c.jsxs("span",{children:[c.jsx(_p,{size:14})," ",b.location]})]}),c.jsx("div",{className:"badge",style:{background:kc[b.status]+"22",color:kc[b.status]},children:t1[b.status]||b.status}),c.jsxs("div",{className:"footer",children:[c.jsxs("span",{className:"capacity-info",children:[c.jsx(qv,{size:14})," Kuota: ",b.capacity||"∞"]}),c.jsxs("div",{className:"actions",children:[c.jsx("button",{className:"icon-btn",onClick:()=>p(b),title:"Edit",children:c.jsx(Aa,{size:14,strokeWidth:2.5})}),c.jsx("button",{className:"icon-btn delete-btn",onClick:()=>N(b.id,b.title),title:"Hapus",children:c.jsx(Da,{size:14,strokeWidth:2.5})})]})]})]})]},b.id))}),a&&c.jsx("div",{className:"modal-overlay",onClick:f,children:c.jsxs("div",{className:"modal",onClick:b=>b.stopPropagation(),children:[c.jsxs("h2",{children:[d?"Edit":"Buat"," Event Baru"]}),c.jsxs("form",{onSubmit:w,children:[c.jsx("input",{className:"input",placeholder:"Judul Event",value:g.title,onChange:b=>x({...g,title:b.target.value}),required:!0}),c.jsxs("div",{className:"row",children:[c.jsx("input",{type:"date",className:"input",value:g.date,onChange:b=>x({...g,date:b.target.value}),required:!0}),c.jsx("input",{type:"time",className:"input",value:g.time,onChange:b=>x({...g,time:b.target.value}),required:!0})]}),c.jsx("input",{className:"input",placeholder:"Lokasi Pelaksanaan",value:g.location,onChange:b=>x({...g,location:b.target.value}),required:!0}),c.jsxs("div",{className:"row",children:[c.jsx("input",{type:"number",className:"input",placeholder:"Maksimal Kuota",value:g.capacity,onChange:b=>x({...g,capacity:b.target.value}),required:!0}),c.jsxs("select",{className:"input",value:g.status,onChange:b=>x({...g,status:b.target.value}),required:!0,children:[c.jsx("option",{value:"upcoming",children:"Akan Datang"}),c.jsx("option",{value:"ongoing",children:"Berlangsung"}),c.jsx("option",{value:"completed",children:"Selesai"}),c.jsx("option",{value:"cancelled",children:"Dibatalkan"})]})]}),c.jsxs("div",{className:"row",children:[c.jsxs("select",{className:"input",value:g.categoryId,onChange:b=>x({...g,categoryId:b.target.value}),required:!0,children:[c.jsx("option",{value:"",disabled:!0,children:"Pilih Kategori"}),n.map(b=>c.jsx("option",{value:b.id,children:b.name},b.id))]}),c.jsxs("select",{className:"input",value:g.pembicaraId,onChange:b=>x({...g,pembicaraId:b.target.value}),required:!0,children:[c.jsx("option",{value:"",disabled:!0,children:"Pilih Pembicara"}),o.map(b=>c.jsx("option",{value:b.id,children:b.name},b.id))]})]}),c.jsx("input",{className:"input",placeholder:"URL Gambar Sampul (Opsional)",value:g.imageUrl,onChange:b=>x({...g,imageUrl:b.target.value})}),c.jsx("textarea",{className:"input",placeholder:"Deskripsi Lengkap Acara",rows:3,value:g.description,onChange:b=>x({...g,description:b.target.value})}),c.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:12,marginTop:14},children:[c.jsx("button",{type:"button",className:"btn-secondary",onClick:f,children:"Batal"}),c.jsx("button",{type:"submit",className:"btn-primary",children:S?"Proses...":"Simpan"})]})]})]})})]})]})},r1=()=>c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@500;700&family=Plus+Jakarta+Sans:wght@700;800;900&display=swap');

        .bio-page {
          font-family: 'Plus Jakarta Sans', sans-serif;
          color: #000000;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        /* BANNER UTAMA BREADCRUMB BIODATA */
        .bio-banner {
          background: #fffb00; /* Kuning Terang */
          border: 4px solid #000000;
          padding: 16px 24px;
          box-shadow: 4px 4px 0px #000000;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .bio-banner h1 {
          font-size: 24px;
          font-weight: 900;
          text-transform: uppercase;
          margin: 0;
          letter-spacing: -0.5px;
        }

        .bio-banner p {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          margin: 0;
          opacity: 0.8;
          letter-spacing: 1px;
        }

        /* BASE CARD NEOBRUTALISM */
        .card {
          background: #ffffff;
          border: 4px solid #000000;
          box-shadow: 5px 5px 0px #000000;
          padding: 24px;
          position: relative;
        }

        /* PROFILE CARD LAYOUT HORIZONTAL (MEMANJANG KE SAMPING) */
        .profile-horizontal {
          display: flex;
          align-items: center;
          gap: 24px;
          padding: 32px 24px;
        }

        /* AVATAR KOTAK HITAM HURUF KUNING */
        .avatar-box {
          width: 100px;
          height: 100px;
          border: 4px solid #000000;
          background: #000000;
          color: #fffb00;
          display: grid;
          place-items: center;
          font-size: 44px;
          font-weight: 900;
          flex-shrink: 0;
        }

        .profile-details {
          display: flex;
          flex-direction: column;
          gap: 4px;
          flex-grow: 1;
        }

        .profile-details h2 {
          font-size: 24px;
          font-weight: 900;
          text-transform: uppercase;
          margin: 0;
        }

        .profile-meta {
          font-family: 'DM Mono', monospace;
          font-size: 13px;
          font-weight: 700;
          color: #555555;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        /* CONTACT ROW */
        .contact-row {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 700;
          background: #ffffff;
          padding: 6px 12px;
          border: 2px solid #000000;
        }

        /* SOSMED FLOATING/RIGHT ALIGNED */
        .social-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
          align-self: flex-start;
        }

        .social-group a {
          width: 38px;
          height: 38px;
          border: 2px solid #000000;
          display: grid;
          place-items: center;
          background: #ffffff;
          color: #000000;
          box-shadow: 2px 2px 0px #000000;
          transition: all 0.1s ease;
        }

        .social-group a:hover {
          background: #fffb00;
          transform: translate(-1px, -1px);
          box-shadow: 3px 3px 0px #000000;
        }

        /* SUB BANNER SEKSI (Informasi Akademik, Projek, dll) */
        .section-title {
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 900;
          font-size: 13px;
          text-transform: uppercase;
          background: #99eebb; /* Hijau Pastel Khas Dashboard */
          color: #000000;
          padding: 6px 14px;
          border: 3px solid #000000;
          width: fit-content;
          margin-bottom: 16px;
        }

        /* GRID AKADEMIK 3 KOLOM MEMANJANG */
        .academic-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }

        .info-box {
          background: #ffffff;
          padding: 14px;
          border: 3px solid #000000;
        }

        .info-box span {
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          color: #666666;
          display: block;
          margin-bottom: 2px;
        }

        .info-box strong {
          display: block;
          font-size: 15px;
          font-weight: 800;
          color: #000000;
        }

        /* REPO BOX RETRO STYLE */
        .repo-container {
          background: #ffffff;
          border: 3px solid #000000;
          padding: 14px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .repo-link {
          color: #000000;
          text-decoration: none;
          font-family: 'DM Mono', monospace;
          font-size: 14px;
          font-weight: 700;
          border-bottom: 2px dashed #000000;
        }

        .repo-link:hover {
          background: #fffb00;
          border-bottom-style: solid;
        }

        /* RESPONSIVE LAYOUT */
        @media (max-width: 768px) {
          .profile-horizontal {
            flex-direction: column;
            text-align: center;
          }
          .contact-row {
            justify-content: center;
          }
          .academic-grid {
            grid-template-columns: 1fr;
          }
          .social-group {
            flex-direction: row;
            align-self: center;
            margin-top: 12px;
          }
        }
      `}),c.jsxs("div",{className:"bio-page",children:[c.jsxs("div",{className:"bio-banner",children:[c.jsx("h1",{children:"◆ Biodata Mahasiswa"}),c.jsx("p",{children:"Profil Pembuat Website"})]}),c.jsxs("div",{className:"card profile-horizontal",children:[c.jsx("div",{className:"avatar-box",children:"M"}),c.jsxs("div",{className:"profile-details",children:[c.jsx("h2",{children:"Muhammad Azfa Rizanta"}),c.jsx("div",{className:"profile-meta",children:"NIM: 24090061 • D-4 Teknik Informatika"}),c.jsxs("div",{className:"contact-row",children:[c.jsxs("div",{className:"contact-item",children:[c.jsx(Pp,{size:14})," azfa@gmail.com"]}),c.jsxs("div",{className:"contact-item",children:[c.jsx(_p,{size:14})," Tegal, Jawa Tengah"]}),c.jsxs("div",{className:"contact-item",children:[c.jsx(Tp,{size:14})," 08xxxxxxxxxx"]})]})]}),c.jsxs("div",{className:"social-group",children:[c.jsx("a",{href:"https://github.com/aspariz",target:"_blank",rel:"noreferrer",title:"GitHub",children:c.jsx(Sl,{size:18})}),c.jsx("a",{href:"https://instagram.com/aspa_riz",target:"_blank",rel:"noreferrer",title:"Instagram",children:c.jsx(Fv,{size:18})})]})]}),c.jsxs("div",{className:"card",children:[c.jsxs("div",{className:"section-title",children:[c.jsx(Rp,{size:16})," Informasi Akademik"]}),c.jsxs("div",{className:"academic-grid",children:[c.jsxs("div",{className:"info-box",children:[c.jsx("span",{children:"Nama Lengkap"}),c.jsx("strong",{children:"Muhammad Azfa Rizanta"})]}),c.jsxs("div",{className:"info-box",children:[c.jsx("span",{children:"NIM"}),c.jsx("strong",{style:{fontFamily:"DM Mono"},children:"24090061"})]}),c.jsxs("div",{className:"info-box",children:[c.jsx("span",{children:"Program Studi"}),c.jsx("strong",{children:"D-4 Teknik Informatika"})]}),c.jsxs("div",{className:"info-box",children:[c.jsx("span",{children:"Fakultas"}),c.jsx("strong",{children:"Sekolah Vokasi"})]}),c.jsxs("div",{className:"info-box",children:[c.jsx("span",{children:"Angkatan"}),c.jsx("strong",{children:"2024"})]}),c.jsxs("div",{className:"info-box",children:[c.jsx("span",{children:"Status"}),c.jsx("strong",{style:{color:"#2e7d32"},children:"Aktif"})]})]})]}),c.jsxs("div",{className:"card",children:[c.jsxs("div",{className:"section-title",children:[c.jsx(Pv,{size:16})," Tentang Projek"]}),c.jsx("p",{style:{fontSize:"14px",color:"#000000",lineHeight:"1.6",fontWeight:"700",margin:0},children:"Aplikasi EventHub berbasis web untuk mengelola, menstrukturkan, dan mempublikasikan kegiatan kampus secara digital. Dikembangkan sebagai bagian dari pemenuhan tugas praktik mahasiswa Teknik Informatika Politeknik Harapan Bersama."})]}),c.jsxs("div",{className:"card",children:[c.jsxs("div",{className:"section-title",children:[c.jsx(Sl,{size:16})," Repository Git"]}),c.jsxs("div",{className:"repo-container",children:[c.jsx(Sl,{size:18}),c.jsx("a",{href:"https://github.com/aspariz",target:"_blank",rel:"noreferrer",className:"repo-link",children:"github.com/aspariz"})]})]})]})]}),o1=()=>{const{isAuthenticated:e}=La();return e?c.jsx(Xm,{}):c.jsx(Kf,{to:"/login",replace:!0})},i1=[{to:"/dashboard",icon:Uv,label:"Dashboard"},{to:"/events",icon:on,label:"Events"},{to:"/categories",icon:js,label:"Kategori"},{to:"/pembicara",icon:pi,label:"Pembicara"},{to:"/biodata",icon:Qv,label:"Biodata"}],cr=({children:e})=>{var s;const{user:t,logout:n}=La(),r=Oi(),[o,i]=E.useState(!1),l=()=>{n(),r("/login")};return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@700&family=Plus+Jakarta+Sans:wght@700;800;900&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          /* Neobrutalism Light Mode Palette */
          --bg-main: #f4f1ea;        /* Warna kertas koran/retro light */
          --bg-surface: #ffffff;     /* Putih bersih untuk komponen utama */
          --neo-border: #000000;     /* Border hitam tebal */
          
          /* Pop Colors */
          --neo-primary: #000000;    /* Hitam pekat untuk logo block */
          --neo-secondary: #0055ff;  /* Biru elektrik */
          --neo-accent: #fffb00;     /* Kuning terang khas EventHub */
          --neo-success: #fffb00;    /* Disamakan kuning atau hijau stabilo */
          
          /* Text Colors */
          --text: #000000;
          --text-muted: #555555;
          
          /* Hard Shadow */
          --neo-shadow: 6px 6px 0px #000000;
          --neo-shadow-sm: 3px 3px 0px #000000;
          --neo-shadow-active: 1px 1px 0px #000000;
        }

        body {
          background: var(--bg-main);
          color: var(--text);
          font-family: 'Plus Jakarta Sans', sans-serif;
          min-height: 100dvh;
        }

        /* ── Layout Shell ── */
        .bento-shell {
          display: grid;
          min-height: 100dvh;
          grid-template-columns: auto 1fr;
          gap: 24px;
          padding: 24px;
          background: var(--bg-main);
        }

        /* ── Main Content Container Layout ── */
        .bento-main {
          display: flex;
          flex-direction: column;
          gap: 24px;
          min-width: 0;
        }

        /* ── Sidebar (Kombinasi Putih & Border Hitam Tebal) ── */
        .bento-sidebar {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          background: var(--bg-surface);
          border: 4px solid var(--neo-border);
          box-shadow: var(--neo-shadow);
          padding: 20px 12px;
          position: sticky;
          top: 24px;
          height: calc(100dvh - 48px);
          width: 76px;
          overflow: hidden;
          z-index: 10;
          transition: width 0.2s steps(4);
        }

        .bento-sidebar.open {
          width: 240px;
          align-items: flex-start;
        }

        /* ── Logo Block (Hitam - Teks Putih) ── */
        .sidebar-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 12px;
          background: var(--neo-accent); /* Diubah jadi Kuning agar mirip EventHub */
          border: 4px solid var(--neo-border);
          box-shadow: var(--neo-shadow-sm);
          color: #000000;
          margin-bottom: 20px;
          width: 44px;
          overflow: hidden;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .bento-sidebar.open .sidebar-logo {
          width: 100%;
        }

        .sidebar-logo span {
          font-size: 16px;
          font-weight: 900;
          text-transform: uppercase;
          opacity: 0;
          color: #000000;
          letter-spacing: -0.5px;
        }

        .bento-sidebar.open .sidebar-logo span {
          opacity: 1;
        }

        /* ── Nav Items ── */
        .bento-nav {
          display: flex;
          flex-direction: column;
          gap: 10px;
          width: 100%;
          flex: 1;
        }

        .bento-nav-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          border: 4px solid transparent;
          color: var(--text-muted);
          text-decoration: none;
          font-size: 13px;
          font-weight: 800;
          text-transform: uppercase;
          white-space: nowrap;
          overflow: hidden;
          width: 44px;
          transition: background 0.1s;
        }

        .bento-sidebar.open .bento-nav-item {
          width: 100%;
        }

        .bento-nav-item:hover {
          background: #f4f1ea;
          border-color: var(--neo-border);
          color: var(--text);
          box-shadow: var(--neo-shadow-sm);
        }

        /* Active Menu: Berubah jadi Hitam Pekat dengan Teks Kuning / Putih */
        .bento-nav-item.active {
          background: #000000;
          color: var(--neo-accent);
          border: 4px solid var(--neo-border);
          box-shadow: var(--neo-shadow-sm);
        }

        .bento-nav-item.active:hover {
          background: #000000;
          color: var(--neo-accent);
        }

        .bento-nav-item span {
          opacity: 0;
        }

        .bento-sidebar.open .bento-nav-item span {
          opacity: 1;
        }

        /* ── User Chip & Logout ── */
        .sidebar-footer {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .user-chip {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px;
          background: #f4f1ea;
          border: 4px solid var(--neo-border);
          overflow: hidden;
          width: 100%;
        }

        .avatar {
          width: 28px;
          height: 28px;
          border: 3px solid var(--neo-border);
          background: #000000;
          color: var(--neo-accent);
          font-size: 14px;
          font-weight: 900;
          display: grid;
          place-items: center;
          flex-shrink: 0;
        }

        .user-details {
          opacity: 0;
          overflow: hidden;
        }

        .bento-sidebar.open .user-details {
          opacity: 1;
        }

        .user-name {
          font-size: 12px;
          font-weight: 900;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 120px;
          color: #000000;
          text-transform: uppercase;
        }

        .user-nim {
          font-size: 11px;
          color: #555555;
          font-family: 'DM Mono', monospace;
          font-weight: 700;
        }

        .logout-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px;
          width: 100%;
          background: #fff0f0;
          border: 4px solid var(--neo-border);
          color: #ff2222;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 12px;
          font-weight: 900;
          text-transform: uppercase;
          cursor: pointer;
          box-shadow: var(--neo-shadow-sm);
        }

        .logout-btn:hover {
          background: #ff2222;
          color: #ffffff;
          transform: translate(-2px, -2px);
          box-shadow: 5px 5px 0px var(--neo-border);
        }

        .logout-btn:active {
          transform: translate(1px, 1px);
          box-shadow: var(--neo-shadow-active);
        }

        .logout-btn span {
          opacity: 0;
        }

        .bento-sidebar.open .logout-btn span {
          opacity: 1;
        }

        /* ── Topbar (Putih Bersih) ── */
        .bento-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: var(--bg-surface);
          border: 4px solid var(--neo-border);
          box-shadow: var(--neo-shadow);
          padding: 16px 24px;
        }

        .topbar-left {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .menu-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border: 3px solid var(--neo-border);
          background: var(--neo-accent);
          color: #000000;
          cursor: pointer;
          box-shadow: var(--neo-shadow-sm);
        }

        .menu-toggle:hover {
          background: #000000;
          color: var(--neo-accent);
        }

        .topbar-title {
          font-size: 20px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: -0.5px;
          color: var(--text);
        }

        .welcome-badge {
          font-size: 12px;
          color: #000000;
          background: var(--neo-accent);
          border: 3px solid var(--neo-border);
          box-shadow: var(--neo-shadow-sm);
          padding: 6px 14px;
          font-weight: 700;
          text-transform: uppercase;
        }

        .welcome-badge strong {
          font-weight: 900;
        }

        /* ── Page Content Card (Putih) ── */
        .bento-content {
          background: var(--bg-surface);
          border: 4px solid var(--neo-border);
          box-shadow: var(--neo-shadow);
          padding: 30px;
          min-height: calc(100dvh - 160px);
        }

        /* ── Mobile Responsive Overlay ── */
        .overlay { display: none; }

        @media (max-width: 640px) {
          .bento-shell {
            grid-template-columns: 1fr;
            padding: 16px;
            gap: 16px;
          }

          .bento-sidebar {
            position: fixed;
            left: -280px;
            top: 0;
            height: 100dvh;
            width: 240px !important;
            border-width: 0 4px 0 0;
            transition: left 0.2s steps(4);
            padding: 20px 16px !important;
            align-items: flex-start !important;
          }

          .bento-sidebar.open {
            left: 0;
          }

          .bento-sidebar .sidebar-logo { width: 100% !important; }
          .bento-sidebar .sidebar-logo span,
          .bento-sidebar .bento-nav-item span,
          .bento-sidebar .user-details,
          .bento-sidebar .logout-btn span {
            opacity: 1 !important;
          }
          .bento-sidebar .bento-nav-item { width: 100% !important; }

          .overlay {
            display: block;
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.4);
            backdrop-filter: blur(4px);
            z-index: 9;
          }
        }
      `}),c.jsxs("div",{className:"bento-shell",children:[o&&c.jsx("div",{className:"overlay",onClick:()=>i(!1)}),c.jsxs("aside",{className:`bento-sidebar ${o?"open":""}`,children:[c.jsxs("div",{className:"sidebar-logo",children:[c.jsx(on,{size:22}),c.jsx("span",{children:"EVENTHUB"})]}),c.jsx("nav",{className:"bento-nav",children:i1.map(({to:a,icon:u,label:d})=>c.jsxs(dg,{to:a,className:({isActive:h})=>`bento-nav-item ${h?"active":""}`,onClick:()=>i(!1),children:[c.jsx(u,{size:18}),c.jsx("span",{children:d})]},a))}),c.jsxs("div",{className:"sidebar-footer",children:[c.jsxs("div",{className:"user-chip",children:[c.jsx("div",{className:"avatar",children:(s=t==null?void 0:t.name)==null?void 0:s.charAt(0)}),c.jsxs("div",{className:"user-details",children:[c.jsx("p",{className:"user-name",children:t==null?void 0:t.name}),c.jsx("p",{className:"user-nim",children:t==null?void 0:t.nim})]})]}),c.jsxs("button",{className:"logout-btn",onClick:l,children:[c.jsx($v,{size:16}),c.jsx("span",{children:"Keluar"})]})]})]}),c.jsxs("div",{className:"bento-main",children:[c.jsxs("header",{className:"bento-topbar",children:[c.jsxs("div",{className:"topbar-left",children:[c.jsx("button",{className:"menu-toggle",onClick:()=>i(a=>!a),children:o?c.jsx(Jv,{size:18}):c.jsx(Hv,{size:18})}),c.jsx("span",{className:"topbar-title",children:"EVENTHUB"})]}),c.jsx("div",{className:"topbar-right",children:c.jsxs("span",{className:"welcome-badge",children:["Selamat Datang, ",c.jsx("strong",{children:t==null?void 0:t.name})]})})]}),c.jsx("div",{className:"bento-content",children:e})]})]})]})};function l1(){return c.jsxs(sg,{children:[c.jsx(ny,{position:"top-right",toastOptions:{duration:3e3}}),c.jsxs(Zm,{children:[c.jsx(ut,{path:"/login",element:c.jsx(Xv,{})}),c.jsx(ut,{path:"/",element:c.jsx(Kf,{to:"/dashboard",replace:!0})}),c.jsxs(ut,{element:c.jsx(o1,{}),children:[c.jsx(ut,{path:"/dashboard",element:c.jsx(cr,{children:c.jsx(Yv,{})})}),c.jsx(ut,{path:"/events",element:c.jsx(cr,{children:c.jsx(n1,{})})}),c.jsx(ut,{path:"/categories",element:c.jsx(cr,{children:c.jsx(Zv,{})})}),c.jsx(ut,{path:"/pembicara",element:c.jsx(cr,{children:c.jsx(e1,{})})}),c.jsx(ut,{path:"/biodata",element:c.jsx(cr,{children:c.jsx(r1,{})})})]})]})]})}El.createRoot(document.getElementById("root")).render(c.jsx(Os.StrictMode,{children:c.jsx(l1,{})}));
