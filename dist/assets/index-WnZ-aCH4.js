(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function n(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(a){if(a.ep)return;a.ep=!0;const c=n(a);fetch(a.href,c)}})();var _u={exports:{}},No={},vu={exports:{}},mt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mp;function q_(){if(mp)return mt;mp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),y=Symbol.iterator;function x(I){return I===null||typeof I!="object"?null:(I=y&&I[y]||I["@@iterator"],typeof I=="function"?I:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,A={};function v(I,te,Pe){this.props=I,this.context=te,this.refs=A,this.updater=Pe||M}v.prototype.isReactComponent={},v.prototype.setState=function(I,te){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,te,"setState")},v.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function _(){}_.prototype=v.prototype;function N(I,te,Pe){this.props=I,this.context=te,this.refs=A,this.updater=Pe||M}var b=N.prototype=new _;b.constructor=N,T(b,v.prototype),b.isPureReactComponent=!0;var L=Array.isArray,j=Object.prototype.hasOwnProperty,k={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function W(I,te,Pe){var K,X={},pe=null,xe=null;if(te!=null)for(K in te.ref!==void 0&&(xe=te.ref),te.key!==void 0&&(pe=""+te.key),te)j.call(te,K)&&!F.hasOwnProperty(K)&&(X[K]=te[K]);var Ce=arguments.length-2;if(Ce===1)X.children=Pe;else if(1<Ce){for(var Re=Array(Ce),ze=0;ze<Ce;ze++)Re[ze]=arguments[ze+2];X.children=Re}if(I&&I.defaultProps)for(K in Ce=I.defaultProps,Ce)X[K]===void 0&&(X[K]=Ce[K]);return{$$typeof:s,type:I,key:pe,ref:xe,props:X,_owner:k.current}}function D(I,te){return{$$typeof:s,type:I.type,key:te,ref:I.ref,props:I.props,_owner:I._owner}}function C(I){return typeof I=="object"&&I!==null&&I.$$typeof===s}function H(I){var te={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(Pe){return te[Pe]})}var de=/\/+/g;function ee(I,te){return typeof I=="object"&&I!==null&&I.key!=null?H(""+I.key):te.toString(36)}function _e(I,te,Pe,K,X){var pe=typeof I;(pe==="undefined"||pe==="boolean")&&(I=null);var xe=!1;if(I===null)xe=!0;else switch(pe){case"string":case"number":xe=!0;break;case"object":switch(I.$$typeof){case s:case e:xe=!0}}if(xe)return xe=I,X=X(xe),I=K===""?"."+ee(xe,0):K,L(X)?(Pe="",I!=null&&(Pe=I.replace(de,"$&/")+"/"),_e(X,te,Pe,"",function(ze){return ze})):X!=null&&(C(X)&&(X=D(X,Pe+(!X.key||xe&&xe.key===X.key?"":(""+X.key).replace(de,"$&/")+"/")+I)),te.push(X)),1;if(xe=0,K=K===""?".":K+":",L(I))for(var Ce=0;Ce<I.length;Ce++){pe=I[Ce];var Re=K+ee(pe,Ce);xe+=_e(pe,te,Pe,Re,X)}else if(Re=x(I),typeof Re=="function")for(I=Re.call(I),Ce=0;!(pe=I.next()).done;)pe=pe.value,Re=K+ee(pe,Ce++),xe+=_e(pe,te,Pe,Re,X);else if(pe==="object")throw te=String(I),Error("Objects are not valid as a React child (found: "+(te==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":te)+"). If you meant to render a collection of children, use an array instead.");return xe}function ve(I,te,Pe){if(I==null)return I;var K=[],X=0;return _e(I,K,"","",function(pe){return te.call(Pe,pe,X++)}),K}function ae(I){if(I._status===-1){var te=I._result;te=te(),te.then(function(Pe){(I._status===0||I._status===-1)&&(I._status=1,I._result=Pe)},function(Pe){(I._status===0||I._status===-1)&&(I._status=2,I._result=Pe)}),I._status===-1&&(I._status=0,I._result=te)}if(I._status===1)return I._result.default;throw I._result}var q={current:null},U={transition:null},re={ReactCurrentDispatcher:q,ReactCurrentBatchConfig:U,ReactCurrentOwner:k};function se(){throw Error("act(...) is not supported in production builds of React.")}return mt.Children={map:ve,forEach:function(I,te,Pe){ve(I,function(){te.apply(this,arguments)},Pe)},count:function(I){var te=0;return ve(I,function(){te++}),te},toArray:function(I){return ve(I,function(te){return te})||[]},only:function(I){if(!C(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},mt.Component=v,mt.Fragment=n,mt.Profiler=a,mt.PureComponent=N,mt.StrictMode=r,mt.Suspense=h,mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=re,mt.act=se,mt.cloneElement=function(I,te,Pe){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var K=T({},I.props),X=I.key,pe=I.ref,xe=I._owner;if(te!=null){if(te.ref!==void 0&&(pe=te.ref,xe=k.current),te.key!==void 0&&(X=""+te.key),I.type&&I.type.defaultProps)var Ce=I.type.defaultProps;for(Re in te)j.call(te,Re)&&!F.hasOwnProperty(Re)&&(K[Re]=te[Re]===void 0&&Ce!==void 0?Ce[Re]:te[Re])}var Re=arguments.length-2;if(Re===1)K.children=Pe;else if(1<Re){Ce=Array(Re);for(var ze=0;ze<Re;ze++)Ce[ze]=arguments[ze+2];K.children=Ce}return{$$typeof:s,type:I.type,key:X,ref:pe,props:K,_owner:xe}},mt.createContext=function(I){return I={$$typeof:d,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:c,_context:I},I.Consumer=I},mt.createElement=W,mt.createFactory=function(I){var te=W.bind(null,I);return te.type=I,te},mt.createRef=function(){return{current:null}},mt.forwardRef=function(I){return{$$typeof:f,render:I}},mt.isValidElement=C,mt.lazy=function(I){return{$$typeof:g,_payload:{_status:-1,_result:I},_init:ae}},mt.memo=function(I,te){return{$$typeof:m,type:I,compare:te===void 0?null:te}},mt.startTransition=function(I){var te=U.transition;U.transition={};try{I()}finally{U.transition=te}},mt.unstable_act=se,mt.useCallback=function(I,te){return q.current.useCallback(I,te)},mt.useContext=function(I){return q.current.useContext(I)},mt.useDebugValue=function(){},mt.useDeferredValue=function(I){return q.current.useDeferredValue(I)},mt.useEffect=function(I,te){return q.current.useEffect(I,te)},mt.useId=function(){return q.current.useId()},mt.useImperativeHandle=function(I,te,Pe){return q.current.useImperativeHandle(I,te,Pe)},mt.useInsertionEffect=function(I,te){return q.current.useInsertionEffect(I,te)},mt.useLayoutEffect=function(I,te){return q.current.useLayoutEffect(I,te)},mt.useMemo=function(I,te){return q.current.useMemo(I,te)},mt.useReducer=function(I,te,Pe){return q.current.useReducer(I,te,Pe)},mt.useRef=function(I){return q.current.useRef(I)},mt.useState=function(I){return q.current.useState(I)},mt.useSyncExternalStore=function(I,te,Pe){return q.current.useSyncExternalStore(I,te,Pe)},mt.useTransition=function(){return q.current.useTransition()},mt.version="18.3.1",mt}var gp;function Lf(){return gp||(gp=1,vu.exports=q_()),vu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _p;function $_(){if(_p)return No;_p=1;var s=Lf(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(f,h,m){var g,y={},x=null,M=null;m!==void 0&&(x=""+m),h.key!==void 0&&(x=""+h.key),h.ref!==void 0&&(M=h.ref);for(g in h)r.call(h,g)&&!c.hasOwnProperty(g)&&(y[g]=h[g]);if(f&&f.defaultProps)for(g in h=f.defaultProps,h)y[g]===void 0&&(y[g]=h[g]);return{$$typeof:e,type:f,key:x,ref:M,props:y,_owner:a.current}}return No.Fragment=n,No.jsx=d,No.jsxs=d,No}var vp;function K_(){return vp||(vp=1,_u.exports=$_()),_u.exports}var ge=K_(),Qa={},xu={exports:{}},Ln={},yu={exports:{}},Su={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xp;function Z_(){return xp||(xp=1,(function(s){function e(U,re){var se=U.length;U.push(re);e:for(;0<se;){var I=se-1>>>1,te=U[I];if(0<a(te,re))U[I]=re,U[se]=te,se=I;else break e}}function n(U){return U.length===0?null:U[0]}function r(U){if(U.length===0)return null;var re=U[0],se=U.pop();if(se!==re){U[0]=se;e:for(var I=0,te=U.length,Pe=te>>>1;I<Pe;){var K=2*(I+1)-1,X=U[K],pe=K+1,xe=U[pe];if(0>a(X,se))pe<te&&0>a(xe,X)?(U[I]=xe,U[pe]=se,I=pe):(U[I]=X,U[K]=se,I=K);else if(pe<te&&0>a(xe,se))U[I]=xe,U[pe]=se,I=pe;else break e}}return re}function a(U,re){var se=U.sortIndex-re.sortIndex;return se!==0?se:U.id-re.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var d=Date,f=d.now();s.unstable_now=function(){return d.now()-f}}var h=[],m=[],g=1,y=null,x=3,M=!1,T=!1,A=!1,v=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(U){for(var re=n(m);re!==null;){if(re.callback===null)r(m);else if(re.startTime<=U)r(m),re.sortIndex=re.expirationTime,e(h,re);else break;re=n(m)}}function L(U){if(A=!1,b(U),!T)if(n(h)!==null)T=!0,ae(j);else{var re=n(m);re!==null&&q(L,re.startTime-U)}}function j(U,re){T=!1,A&&(A=!1,_(W),W=-1),M=!0;var se=x;try{for(b(re),y=n(h);y!==null&&(!(y.expirationTime>re)||U&&!H());){var I=y.callback;if(typeof I=="function"){y.callback=null,x=y.priorityLevel;var te=I(y.expirationTime<=re);re=s.unstable_now(),typeof te=="function"?y.callback=te:y===n(h)&&r(h),b(re)}else r(h);y=n(h)}if(y!==null)var Pe=!0;else{var K=n(m);K!==null&&q(L,K.startTime-re),Pe=!1}return Pe}finally{y=null,x=se,M=!1}}var k=!1,F=null,W=-1,D=5,C=-1;function H(){return!(s.unstable_now()-C<D)}function de(){if(F!==null){var U=s.unstable_now();C=U;var re=!0;try{re=F(!0,U)}finally{re?ee():(k=!1,F=null)}}else k=!1}var ee;if(typeof N=="function")ee=function(){N(de)};else if(typeof MessageChannel<"u"){var _e=new MessageChannel,ve=_e.port2;_e.port1.onmessage=de,ee=function(){ve.postMessage(null)}}else ee=function(){v(de,0)};function ae(U){F=U,k||(k=!0,ee())}function q(U,re){W=v(function(){U(s.unstable_now())},re)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(U){U.callback=null},s.unstable_continueExecution=function(){T||M||(T=!0,ae(j))},s.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<U?Math.floor(1e3/U):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return n(h)},s.unstable_next=function(U){switch(x){case 1:case 2:case 3:var re=3;break;default:re=x}var se=x;x=re;try{return U()}finally{x=se}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(U,re){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var se=x;x=U;try{return re()}finally{x=se}},s.unstable_scheduleCallback=function(U,re,se){var I=s.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?I+se:I):se=I,U){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=se+te,U={id:g++,callback:re,priorityLevel:U,startTime:se,expirationTime:te,sortIndex:-1},se>I?(U.sortIndex=se,e(m,U),n(h)===null&&U===n(m)&&(A?(_(W),W=-1):A=!0,q(L,se-I))):(U.sortIndex=te,e(h,U),T||M||(T=!0,ae(j))),U},s.unstable_shouldYield=H,s.unstable_wrapCallback=function(U){var re=x;return function(){var se=x;x=re;try{return U.apply(this,arguments)}finally{x=se}}}})(Su)),Su}var yp;function Q_(){return yp||(yp=1,yu.exports=Z_()),yu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sp;function J_(){if(Sp)return Ln;Sp=1;var s=Lf(),e=Q_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function c(t,i){d(t,i),d(t+"Capture",i)}function d(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},y={};function x(t){return h.call(y,t)?!0:h.call(g,t)?!1:m.test(t)?y[t]=!0:(g[t]=!0,!1)}function M(t,i,o,l){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function T(t,i,o,l){if(i===null||typeof i>"u"||M(t,i,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function A(t,i,o,l,u,p,w){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=u,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=p,this.removeEmptyString=w}var v={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){v[t]=new A(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];v[i]=new A(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){v[t]=new A(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){v[t]=new A(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){v[t]=new A(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){v[t]=new A(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){v[t]=new A(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){v[t]=new A(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){v[t]=new A(t,5,!1,t.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function N(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(_,N);v[i]=new A(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(_,N);v[i]=new A(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(_,N);v[i]=new A(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){v[t]=new A(t,1,!1,t.toLowerCase(),null,!1,!1)}),v.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){v[t]=new A(t,1,!1,t.toLowerCase(),null,!0,!0)});function b(t,i,o,l){var u=v.hasOwnProperty(i)?v[i]:null;(u!==null?u.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,o,u,l)&&(o=null),l||u===null?x(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):u.mustUseProperty?t[u.propertyName]=o===null?u.type===3?!1:"":o:(i=u.attributeName,l=u.attributeNamespace,o===null?t.removeAttribute(i):(u=u.type,o=u===3||u===4&&o===!0?"":""+o,l?t.setAttributeNS(l,i,o):t.setAttribute(i,o))))}var L=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,j=Symbol.for("react.element"),k=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),H=Symbol.for("react.context"),de=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),_e=Symbol.for("react.suspense_list"),ve=Symbol.for("react.memo"),ae=Symbol.for("react.lazy"),q=Symbol.for("react.offscreen"),U=Symbol.iterator;function re(t){return t===null||typeof t!="object"?null:(t=U&&t[U]||t["@@iterator"],typeof t=="function"?t:null)}var se=Object.assign,I;function te(t){if(I===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);I=i&&i[1]||""}return`
`+I+t}var Pe=!1;function K(t,i){if(!t||Pe)return"";Pe=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ue){var l=ue}Reflect.construct(t,[],i)}else{try{i.call()}catch(ue){l=ue}t.call(i.prototype)}else{try{throw Error()}catch(ue){l=ue}t()}}catch(ue){if(ue&&l&&typeof ue.stack=="string"){for(var u=ue.stack.split(`
`),p=l.stack.split(`
`),w=u.length-1,O=p.length-1;1<=w&&0<=O&&u[w]!==p[O];)O--;for(;1<=w&&0<=O;w--,O--)if(u[w]!==p[O]){if(w!==1||O!==1)do if(w--,O--,0>O||u[w]!==p[O]){var V=`
`+u[w].replace(" at new "," at ");return t.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",t.displayName)),V}while(1<=w&&0<=O);break}}}finally{Pe=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?te(t):""}function X(t){switch(t.tag){case 5:return te(t.type);case 16:return te("Lazy");case 13:return te("Suspense");case 19:return te("SuspenseList");case 0:case 2:case 15:return t=K(t.type,!1),t;case 11:return t=K(t.type.render,!1),t;case 1:return t=K(t.type,!0),t;default:return""}}function pe(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case F:return"Fragment";case k:return"Portal";case D:return"Profiler";case W:return"StrictMode";case ee:return"Suspense";case _e:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case H:return(t.displayName||"Context")+".Consumer";case C:return(t._context.displayName||"Context")+".Provider";case de:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ve:return i=t.displayName||null,i!==null?i:pe(t.type)||"Memo";case ae:i=t._payload,t=t._init;try{return pe(t(i))}catch{}}return null}function xe(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pe(i);case 8:return i===W?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ce(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Re(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function ze(t){var i=Re(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,p=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return u.call(this)},set:function(w){l=""+w,p.call(this,w)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(w){l=""+w},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function pt(t){t._valueTracker||(t._valueTracker=ze(t))}function z(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),l="";return t&&(l=Re(t)?t.checked?"true":"false":t.value),t=l,t!==o?(i.setValue(t),!0):!1}function vt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Qe(t,i){var o=i.checked;return se({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function ct(t,i){var o=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;o=Ce(i.value!=null?i.value:o),t._wrapperState={initialChecked:l,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Be(t,i){i=i.checked,i!=null&&b(t,"checked",i,!1)}function gt(t,i){Be(t,i);var o=Ce(i.value),l=i.type;if(o!=null)l==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Je(t,i.type,o):i.hasOwnProperty("defaultValue")&&Je(t,i.type,Ce(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function et(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function Je(t,i,o){(i!=="number"||vt(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var R=Array.isArray;function S(t,i,o,l){if(t=t.options,i){i={};for(var u=0;u<o.length;u++)i["$"+o[u]]=!0;for(o=0;o<t.length;o++)u=i.hasOwnProperty("$"+t[o].value),t[o].selected!==u&&(t[o].selected=u),u&&l&&(t[o].defaultSelected=!0)}else{for(o=""+Ce(o),i=null,u=0;u<t.length;u++){if(t[u].value===o){t[u].selected=!0,l&&(t[u].defaultSelected=!0);return}i!==null||t[u].disabled||(i=t[u])}i!==null&&(i.selected=!0)}}function B(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return se({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function $(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(R(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:Ce(o)}}function ce(t,i){var o=Ce(i.value),l=Ce(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),l!=null&&(t.defaultValue=""+l)}function he(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function Me(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Se(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?Me(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var be,Ve=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,l,u){MSApp.execUnsafeLocalFunction(function(){return t(i,o,l,u)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(be=be||document.createElement("div"),be.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=be.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function ye(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var De={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rt=["Webkit","ms","Moz","O"];Object.keys(De).forEach(function(t){rt.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),De[i]=De[t]})});function We(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||De.hasOwnProperty(t)&&De[t]?(""+i).trim():i+"px"}function Ue(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var l=o.indexOf("--")===0,u=We(o,i[o],l);o==="float"&&(o="cssFloat"),l?t.setProperty(o,u):t[o]=u}}var Ye=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ze(t,i){if(i){if(Ye[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function yt(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var E=null;function ne(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var oe=null,me=null,we=null;function $e(t){if(t=vo(t)){if(typeof oe!="function")throw Error(n(280));var i=t.stateNode;i&&(i=ha(i),oe(t.stateNode,t.type,i))}}function ot(t){me?we?we.push(t):we=[t]:me=t}function It(){if(me){var t=me,i=we;if(we=me=null,$e(t),i)for(t=0;t<i.length;t++)$e(i[t])}}function Ht(t,i){return t(i)}function _t(){}var Ot=!1;function kt(t,i,o){if(Ot)return t(i,o);Ot=!0;try{return Ht(t,i,o)}finally{Ot=!1,(me!==null||we!==null)&&(_t(),It())}}function wn(t,i){var o=t.stateNode;if(o===null)return null;var l=ha(o);if(l===null)return null;o=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var Gt=!1;if(f)try{var gn={};Object.defineProperty(gn,"passive",{get:function(){Gt=!0}}),window.addEventListener("test",gn,gn),window.removeEventListener("test",gn,gn)}catch{Gt=!1}function yi(t,i,o,l,u,p,w,O,V){var ue=Array.prototype.slice.call(arguments,3);try{i.apply(o,ue)}catch(Te){this.onError(Te)}}var ei=!1,Si=null,Mr=!1,Vi=null,qo={onError:function(t){ei=!0,Si=t}};function $o(t,i,o,l,u,p,w,O,V){ei=!1,Si=null,yi.apply(qo,arguments)}function zl(t,i,o,l,u,p,w,O,V){if($o.apply(this,arguments),ei){if(ei){var ue=Si;ei=!1,Si=null}else throw Error(n(198));Mr||(Mr=!0,Vi=ue)}}function Mi(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function Ko(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function P(t){if(Mi(t)!==t)throw Error(n(188))}function Y(t){var i=t.alternate;if(!i){if(i=Mi(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,l=i;;){var u=o.return;if(u===null)break;var p=u.alternate;if(p===null){if(l=u.return,l!==null){o=l;continue}break}if(u.child===p.child){for(p=u.child;p;){if(p===o)return P(u),t;if(p===l)return P(u),i;p=p.sibling}throw Error(n(188))}if(o.return!==l.return)o=u,l=p;else{for(var w=!1,O=u.child;O;){if(O===o){w=!0,o=u,l=p;break}if(O===l){w=!0,l=u,o=p;break}O=O.sibling}if(!w){for(O=p.child;O;){if(O===o){w=!0,o=p,l=u;break}if(O===l){w=!0,l=p,o=u;break}O=O.sibling}if(!w)throw Error(n(189))}}if(o.alternate!==l)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function le(t){return t=Y(t),t!==null?fe(t):null}function fe(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=fe(t);if(i!==null)return i;t=t.sibling}return null}var Z=e.unstable_scheduleCallback,Ne=e.unstable_cancelCallback,Oe=e.unstable_shouldYield,Xe=e.unstable_requestPaint,Ie=e.unstable_now,at=e.unstable_getCurrentPriorityLevel,st=e.unstable_ImmediatePriority,tt=e.unstable_UserBlockingPriority,xt=e.unstable_NormalPriority,Ut=e.unstable_LowPriority,Pt=e.unstable_IdlePriority,Jt=null,ft=null;function Ke(t){if(ft&&typeof ft.onCommitFiberRoot=="function")try{ft.onCommitFiberRoot(Jt,t,void 0,(t.current.flags&128)===128)}catch{}}var wt=Math.clz32?Math.clz32:Gi,Mt=Math.log,Dn=Math.LN2;function Gi(t){return t>>>=0,t===0?32:31-(Mt(t)/Dn|0)|0}var en=64,Wi=4194304;function Rt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Nn(t,i){var o=t.pendingLanes;if(o===0)return 0;var l=0,u=t.suspendedLanes,p=t.pingedLanes,w=o&268435455;if(w!==0){var O=w&~u;O!==0?l=Rt(O):(p&=w,p!==0&&(l=Rt(p)))}else w=o&~u,w!==0?l=Rt(w):p!==0&&(l=Rt(p));if(l===0)return 0;if(i!==0&&i!==l&&(i&u)===0&&(u=l&-l,p=i&-i,u>=p||u===16&&(p&4194240)!==0))return i;if((l&4)!==0&&(l|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)o=31-wt(i),u=1<<o,l|=t[o],i&=~u;return l}function Js(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tn(t,i){for(var o=t.suspendedLanes,l=t.pingedLanes,u=t.expirationTimes,p=t.pendingLanes;0<p;){var w=31-wt(p),O=1<<w,V=u[w];V===-1?((O&o)===0||(O&l)!==0)&&(u[w]=Js(O,i)):V<=i&&(t.expiredLanes|=O),p&=~O}}function Er(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Zo(){var t=en;return en<<=1,(en&4194240)===0&&(en=64),t}function Jr(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function eo(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-wt(i),t[i]=o}function mg(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<o;){var u=31-wt(o),p=1<<u;i[u]=0,l[u]=-1,t[u]=-1,o&=~p}}function Bl(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var l=31-wt(o),u=1<<l;u&i|t[l]&i&&(t[l]|=i),o&=~u}}var Tt=0;function Yf(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var qf,Hl,$f,Kf,Zf,Vl=!1,Qo=[],Xi=null,ji=null,Yi=null,to=new Map,no=new Map,qi=[],gg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qf(t,i){switch(t){case"focusin":case"focusout":Xi=null;break;case"dragenter":case"dragleave":ji=null;break;case"mouseover":case"mouseout":Yi=null;break;case"pointerover":case"pointerout":to.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":no.delete(i.pointerId)}}function io(t,i,o,l,u,p){return t===null||t.nativeEvent!==p?(t={blockedOn:i,domEventName:o,eventSystemFlags:l,nativeEvent:p,targetContainers:[u]},i!==null&&(i=vo(i),i!==null&&Hl(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),t)}function _g(t,i,o,l,u){switch(i){case"focusin":return Xi=io(Xi,t,i,o,l,u),!0;case"dragenter":return ji=io(ji,t,i,o,l,u),!0;case"mouseover":return Yi=io(Yi,t,i,o,l,u),!0;case"pointerover":var p=u.pointerId;return to.set(p,io(to.get(p)||null,t,i,o,l,u)),!0;case"gotpointercapture":return p=u.pointerId,no.set(p,io(no.get(p)||null,t,i,o,l,u)),!0}return!1}function Jf(t){var i=wr(t.target);if(i!==null){var o=Mi(i);if(o!==null){if(i=o.tag,i===13){if(i=Ko(o),i!==null){t.blockedOn=i,Zf(t.priority,function(){$f(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Jo(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=Wl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var l=new o.constructor(o.type,o);E=l,o.target.dispatchEvent(l),E=null}else return i=vo(o),i!==null&&Hl(i),t.blockedOn=o,!1;i.shift()}return!0}function ed(t,i,o){Jo(t)&&o.delete(i)}function vg(){Vl=!1,Xi!==null&&Jo(Xi)&&(Xi=null),ji!==null&&Jo(ji)&&(ji=null),Yi!==null&&Jo(Yi)&&(Yi=null),to.forEach(ed),no.forEach(ed)}function ro(t,i){t.blockedOn===i&&(t.blockedOn=null,Vl||(Vl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,vg)))}function so(t){function i(u){return ro(u,t)}if(0<Qo.length){ro(Qo[0],t);for(var o=1;o<Qo.length;o++){var l=Qo[o];l.blockedOn===t&&(l.blockedOn=null)}}for(Xi!==null&&ro(Xi,t),ji!==null&&ro(ji,t),Yi!==null&&ro(Yi,t),to.forEach(i),no.forEach(i),o=0;o<qi.length;o++)l=qi[o],l.blockedOn===t&&(l.blockedOn=null);for(;0<qi.length&&(o=qi[0],o.blockedOn===null);)Jf(o),o.blockedOn===null&&qi.shift()}var es=L.ReactCurrentBatchConfig,ea=!0;function xg(t,i,o,l){var u=Tt,p=es.transition;es.transition=null;try{Tt=1,Gl(t,i,o,l)}finally{Tt=u,es.transition=p}}function yg(t,i,o,l){var u=Tt,p=es.transition;es.transition=null;try{Tt=4,Gl(t,i,o,l)}finally{Tt=u,es.transition=p}}function Gl(t,i,o,l){if(ea){var u=Wl(t,i,o,l);if(u===null)ac(t,i,l,ta,o),Qf(t,l);else if(_g(u,t,i,o,l))l.stopPropagation();else if(Qf(t,l),i&4&&-1<gg.indexOf(t)){for(;u!==null;){var p=vo(u);if(p!==null&&qf(p),p=Wl(t,i,o,l),p===null&&ac(t,i,l,ta,o),p===u)break;u=p}u!==null&&l.stopPropagation()}else ac(t,i,l,null,o)}}var ta=null;function Wl(t,i,o,l){if(ta=null,t=ne(l),t=wr(t),t!==null)if(i=Mi(t),i===null)t=null;else if(o=i.tag,o===13){if(t=Ko(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return ta=t,null}function td(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(at()){case st:return 1;case tt:return 4;case xt:case Ut:return 16;case Pt:return 536870912;default:return 16}default:return 16}}var $i=null,Xl=null,na=null;function nd(){if(na)return na;var t,i=Xl,o=i.length,l,u="value"in $i?$i.value:$i.textContent,p=u.length;for(t=0;t<o&&i[t]===u[t];t++);var w=o-t;for(l=1;l<=w&&i[o-l]===u[p-l];l++);return na=u.slice(t,1<l?1-l:void 0)}function ia(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ra(){return!0}function id(){return!1}function In(t){function i(o,l,u,p,w){this._reactName=o,this._targetInst=u,this.type=l,this.nativeEvent=p,this.target=w,this.currentTarget=null;for(var O in t)t.hasOwnProperty(O)&&(o=t[O],this[O]=o?o(p):p[O]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?ra:id,this.isPropagationStopped=id,this}return se(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ra)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ra)},persist:function(){},isPersistent:ra}),i}var ts={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jl=In(ts),oo=se({},ts,{view:0,detail:0}),Sg=In(oo),Yl,ql,ao,sa=se({},oo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ao&&(ao&&t.type==="mousemove"?(Yl=t.screenX-ao.screenX,ql=t.screenY-ao.screenY):ql=Yl=0,ao=t),Yl)},movementY:function(t){return"movementY"in t?t.movementY:ql}}),rd=In(sa),Mg=se({},sa,{dataTransfer:0}),Eg=In(Mg),wg=se({},oo,{relatedTarget:0}),$l=In(wg),Tg=se({},ts,{animationName:0,elapsedTime:0,pseudoElement:0}),Ag=In(Tg),Cg=se({},ts,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Rg=In(Cg),bg=se({},ts,{data:0}),sd=In(bg),Pg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Dg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ng(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Dg[t])?!!i[t]:!1}function Kl(){return Ng}var Ig=se({},oo,{key:function(t){if(t.key){var i=Pg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=ia(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Lg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kl,charCode:function(t){return t.type==="keypress"?ia(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ia(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ug=In(Ig),Fg=se({},sa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),od=In(Fg),Og=se({},oo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kl}),kg=In(Og),zg=se({},ts,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bg=In(zg),Hg=se({},sa,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Vg=In(Hg),Gg=[9,13,27,32],Zl=f&&"CompositionEvent"in window,lo=null;f&&"documentMode"in document&&(lo=document.documentMode);var Wg=f&&"TextEvent"in window&&!lo,ad=f&&(!Zl||lo&&8<lo&&11>=lo),ld=" ",cd=!1;function ud(t,i){switch(t){case"keyup":return Gg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ns=!1;function Xg(t,i){switch(t){case"compositionend":return fd(i);case"keypress":return i.which!==32?null:(cd=!0,ld);case"textInput":return t=i.data,t===ld&&cd?null:t;default:return null}}function jg(t,i){if(ns)return t==="compositionend"||!Zl&&ud(t,i)?(t=nd(),na=Xl=$i=null,ns=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return ad&&i.locale!=="ko"?null:i.data;default:return null}}var Yg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dd(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Yg[t.type]:i==="textarea"}function hd(t,i,o,l){ot(l),i=ua(i,"onChange"),0<i.length&&(o=new jl("onChange","change",null,o,l),t.push({event:o,listeners:i}))}var co=null,uo=null;function qg(t){Ld(t,0)}function oa(t){var i=as(t);if(z(i))return t}function $g(t,i){if(t==="change")return i}var pd=!1;if(f){var Ql;if(f){var Jl="oninput"in document;if(!Jl){var md=document.createElement("div");md.setAttribute("oninput","return;"),Jl=typeof md.oninput=="function"}Ql=Jl}else Ql=!1;pd=Ql&&(!document.documentMode||9<document.documentMode)}function gd(){co&&(co.detachEvent("onpropertychange",_d),uo=co=null)}function _d(t){if(t.propertyName==="value"&&oa(uo)){var i=[];hd(i,uo,t,ne(t)),kt(qg,i)}}function Kg(t,i,o){t==="focusin"?(gd(),co=i,uo=o,co.attachEvent("onpropertychange",_d)):t==="focusout"&&gd()}function Zg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return oa(uo)}function Qg(t,i){if(t==="click")return oa(i)}function Jg(t,i){if(t==="input"||t==="change")return oa(i)}function e_(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ti=typeof Object.is=="function"?Object.is:e_;function fo(t,i){if(ti(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),l=Object.keys(i);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var u=o[l];if(!h.call(i,u)||!ti(t[u],i[u]))return!1}return!0}function vd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function xd(t,i){var o=vd(t);t=0;for(var l;o;){if(o.nodeType===3){if(l=t+o.textContent.length,t<=i&&l>=i)return{node:o,offset:i-t};t=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=vd(o)}}function yd(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?yd(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Sd(){for(var t=window,i=vt();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=vt(t.document)}return i}function ec(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function t_(t){var i=Sd(),o=t.focusedElem,l=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&yd(o.ownerDocument.documentElement,o)){if(l!==null&&ec(o)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var u=o.textContent.length,p=Math.min(l.start,u);l=l.end===void 0?p:Math.min(l.end,u),!t.extend&&p>l&&(u=l,l=p,p=u),u=xd(o,p);var w=xd(o,l);u&&w&&(t.rangeCount!==1||t.anchorNode!==u.node||t.anchorOffset!==u.offset||t.focusNode!==w.node||t.focusOffset!==w.offset)&&(i=i.createRange(),i.setStart(u.node,u.offset),t.removeAllRanges(),p>l?(t.addRange(i),t.extend(w.node,w.offset)):(i.setEnd(w.node,w.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var n_=f&&"documentMode"in document&&11>=document.documentMode,is=null,tc=null,ho=null,nc=!1;function Md(t,i,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;nc||is==null||is!==vt(l)||(l=is,"selectionStart"in l&&ec(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ho&&fo(ho,l)||(ho=l,l=ua(tc,"onSelect"),0<l.length&&(i=new jl("onSelect","select",null,i,o),t.push({event:i,listeners:l}),i.target=is)))}function aa(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var rs={animationend:aa("Animation","AnimationEnd"),animationiteration:aa("Animation","AnimationIteration"),animationstart:aa("Animation","AnimationStart"),transitionend:aa("Transition","TransitionEnd")},ic={},Ed={};f&&(Ed=document.createElement("div").style,"AnimationEvent"in window||(delete rs.animationend.animation,delete rs.animationiteration.animation,delete rs.animationstart.animation),"TransitionEvent"in window||delete rs.transitionend.transition);function la(t){if(ic[t])return ic[t];if(!rs[t])return t;var i=rs[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in Ed)return ic[t]=i[o];return t}var wd=la("animationend"),Td=la("animationiteration"),Ad=la("animationstart"),Cd=la("transitionend"),Rd=new Map,bd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ki(t,i){Rd.set(t,i),c(i,[t])}for(var rc=0;rc<bd.length;rc++){var sc=bd[rc],i_=sc.toLowerCase(),r_=sc[0].toUpperCase()+sc.slice(1);Ki(i_,"on"+r_)}Ki(wd,"onAnimationEnd"),Ki(Td,"onAnimationIteration"),Ki(Ad,"onAnimationStart"),Ki("dblclick","onDoubleClick"),Ki("focusin","onFocus"),Ki("focusout","onBlur"),Ki(Cd,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),s_=new Set("cancel close invalid load scroll toggle".split(" ").concat(po));function Pd(t,i,o){var l=t.type||"unknown-event";t.currentTarget=o,zl(l,i,void 0,t),t.currentTarget=null}function Ld(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var l=t[o],u=l.event;l=l.listeners;e:{var p=void 0;if(i)for(var w=l.length-1;0<=w;w--){var O=l[w],V=O.instance,ue=O.currentTarget;if(O=O.listener,V!==p&&u.isPropagationStopped())break e;Pd(u,O,ue),p=V}else for(w=0;w<l.length;w++){if(O=l[w],V=O.instance,ue=O.currentTarget,O=O.listener,V!==p&&u.isPropagationStopped())break e;Pd(u,O,ue),p=V}}}if(Mr)throw t=Vi,Mr=!1,Vi=null,t}function Lt(t,i){var o=i[hc];o===void 0&&(o=i[hc]=new Set);var l=t+"__bubble";o.has(l)||(Dd(i,t,2,!1),o.add(l))}function oc(t,i,o){var l=0;i&&(l|=4),Dd(o,t,l,i)}var ca="_reactListening"+Math.random().toString(36).slice(2);function mo(t){if(!t[ca]){t[ca]=!0,r.forEach(function(o){o!=="selectionchange"&&(s_.has(o)||oc(o,!1,t),oc(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[ca]||(i[ca]=!0,oc("selectionchange",!1,i))}}function Dd(t,i,o,l){switch(td(i)){case 1:var u=xg;break;case 4:u=yg;break;default:u=Gl}o=u.bind(null,i,o,t),u=void 0,!Gt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),l?u!==void 0?t.addEventListener(i,o,{capture:!0,passive:u}):t.addEventListener(i,o,!0):u!==void 0?t.addEventListener(i,o,{passive:u}):t.addEventListener(i,o,!1)}function ac(t,i,o,l,u){var p=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var w=l.tag;if(w===3||w===4){var O=l.stateNode.containerInfo;if(O===u||O.nodeType===8&&O.parentNode===u)break;if(w===4)for(w=l.return;w!==null;){var V=w.tag;if((V===3||V===4)&&(V=w.stateNode.containerInfo,V===u||V.nodeType===8&&V.parentNode===u))return;w=w.return}for(;O!==null;){if(w=wr(O),w===null)return;if(V=w.tag,V===5||V===6){l=p=w;continue e}O=O.parentNode}}l=l.return}kt(function(){var ue=p,Te=ne(o),Ae=[];e:{var Ee=Rd.get(t);if(Ee!==void 0){var ke=jl,Ge=t;switch(t){case"keypress":if(ia(o)===0)break e;case"keydown":case"keyup":ke=Ug;break;case"focusin":Ge="focus",ke=$l;break;case"focusout":Ge="blur",ke=$l;break;case"beforeblur":case"afterblur":ke=$l;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ke=rd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ke=Eg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ke=kg;break;case wd:case Td:case Ad:ke=Ag;break;case Cd:ke=Bg;break;case"scroll":ke=Sg;break;case"wheel":ke=Vg;break;case"copy":case"cut":case"paste":ke=Rg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ke=od}var je=(i&4)!==0,Wt=!je&&t==="scroll",J=je?Ee!==null?Ee+"Capture":null:Ee;je=[];for(var G=ue,ie;G!==null;){ie=G;var Le=ie.stateNode;if(ie.tag===5&&Le!==null&&(ie=Le,J!==null&&(Le=wn(G,J),Le!=null&&je.push(go(G,Le,ie)))),Wt)break;G=G.return}0<je.length&&(Ee=new ke(Ee,Ge,null,o,Te),Ae.push({event:Ee,listeners:je}))}}if((i&7)===0){e:{if(Ee=t==="mouseover"||t==="pointerover",ke=t==="mouseout"||t==="pointerout",Ee&&o!==E&&(Ge=o.relatedTarget||o.fromElement)&&(wr(Ge)||Ge[Ei]))break e;if((ke||Ee)&&(Ee=Te.window===Te?Te:(Ee=Te.ownerDocument)?Ee.defaultView||Ee.parentWindow:window,ke?(Ge=o.relatedTarget||o.toElement,ke=ue,Ge=Ge?wr(Ge):null,Ge!==null&&(Wt=Mi(Ge),Ge!==Wt||Ge.tag!==5&&Ge.tag!==6)&&(Ge=null)):(ke=null,Ge=ue),ke!==Ge)){if(je=rd,Le="onMouseLeave",J="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&(je=od,Le="onPointerLeave",J="onPointerEnter",G="pointer"),Wt=ke==null?Ee:as(ke),ie=Ge==null?Ee:as(Ge),Ee=new je(Le,G+"leave",ke,o,Te),Ee.target=Wt,Ee.relatedTarget=ie,Le=null,wr(Te)===ue&&(je=new je(J,G+"enter",Ge,o,Te),je.target=ie,je.relatedTarget=Wt,Le=je),Wt=Le,ke&&Ge)t:{for(je=ke,J=Ge,G=0,ie=je;ie;ie=ss(ie))G++;for(ie=0,Le=J;Le;Le=ss(Le))ie++;for(;0<G-ie;)je=ss(je),G--;for(;0<ie-G;)J=ss(J),ie--;for(;G--;){if(je===J||J!==null&&je===J.alternate)break t;je=ss(je),J=ss(J)}je=null}else je=null;ke!==null&&Nd(Ae,Ee,ke,je,!1),Ge!==null&&Wt!==null&&Nd(Ae,Wt,Ge,je,!0)}}e:{if(Ee=ue?as(ue):window,ke=Ee.nodeName&&Ee.nodeName.toLowerCase(),ke==="select"||ke==="input"&&Ee.type==="file")var qe=$g;else if(dd(Ee))if(pd)qe=Jg;else{qe=Zg;var nt=Kg}else(ke=Ee.nodeName)&&ke.toLowerCase()==="input"&&(Ee.type==="checkbox"||Ee.type==="radio")&&(qe=Qg);if(qe&&(qe=qe(t,ue))){hd(Ae,qe,o,Te);break e}nt&&nt(t,Ee,ue),t==="focusout"&&(nt=Ee._wrapperState)&&nt.controlled&&Ee.type==="number"&&Je(Ee,"number",Ee.value)}switch(nt=ue?as(ue):window,t){case"focusin":(dd(nt)||nt.contentEditable==="true")&&(is=nt,tc=ue,ho=null);break;case"focusout":ho=tc=is=null;break;case"mousedown":nc=!0;break;case"contextmenu":case"mouseup":case"dragend":nc=!1,Md(Ae,o,Te);break;case"selectionchange":if(n_)break;case"keydown":case"keyup":Md(Ae,o,Te)}var it;if(Zl)e:{switch(t){case"compositionstart":var lt="onCompositionStart";break e;case"compositionend":lt="onCompositionEnd";break e;case"compositionupdate":lt="onCompositionUpdate";break e}lt=void 0}else ns?ud(t,o)&&(lt="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(lt="onCompositionStart");lt&&(ad&&o.locale!=="ko"&&(ns||lt!=="onCompositionStart"?lt==="onCompositionEnd"&&ns&&(it=nd()):($i=Te,Xl="value"in $i?$i.value:$i.textContent,ns=!0)),nt=ua(ue,lt),0<nt.length&&(lt=new sd(lt,t,null,o,Te),Ae.push({event:lt,listeners:nt}),it?lt.data=it:(it=fd(o),it!==null&&(lt.data=it)))),(it=Wg?Xg(t,o):jg(t,o))&&(ue=ua(ue,"onBeforeInput"),0<ue.length&&(Te=new sd("onBeforeInput","beforeinput",null,o,Te),Ae.push({event:Te,listeners:ue}),Te.data=it))}Ld(Ae,i)})}function go(t,i,o){return{instance:t,listener:i,currentTarget:o}}function ua(t,i){for(var o=i+"Capture",l=[];t!==null;){var u=t,p=u.stateNode;u.tag===5&&p!==null&&(u=p,p=wn(t,o),p!=null&&l.unshift(go(t,p,u)),p=wn(t,i),p!=null&&l.push(go(t,p,u))),t=t.return}return l}function ss(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Nd(t,i,o,l,u){for(var p=i._reactName,w=[];o!==null&&o!==l;){var O=o,V=O.alternate,ue=O.stateNode;if(V!==null&&V===l)break;O.tag===5&&ue!==null&&(O=ue,u?(V=wn(o,p),V!=null&&w.unshift(go(o,V,O))):u||(V=wn(o,p),V!=null&&w.push(go(o,V,O)))),o=o.return}w.length!==0&&t.push({event:i,listeners:w})}var o_=/\r\n?/g,a_=/\u0000|\uFFFD/g;function Id(t){return(typeof t=="string"?t:""+t).replace(o_,`
`).replace(a_,"")}function fa(t,i,o){if(i=Id(i),Id(t)!==i&&o)throw Error(n(425))}function da(){}var lc=null,cc=null;function uc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var fc=typeof setTimeout=="function"?setTimeout:void 0,l_=typeof clearTimeout=="function"?clearTimeout:void 0,Ud=typeof Promise=="function"?Promise:void 0,c_=typeof queueMicrotask=="function"?queueMicrotask:typeof Ud<"u"?function(t){return Ud.resolve(null).then(t).catch(u_)}:fc;function u_(t){setTimeout(function(){throw t})}function dc(t,i){var o=i,l=0;do{var u=o.nextSibling;if(t.removeChild(o),u&&u.nodeType===8)if(o=u.data,o==="/$"){if(l===0){t.removeChild(u),so(i);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=u}while(o);so(i)}function Zi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Fd(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var os=Math.random().toString(36).slice(2),di="__reactFiber$"+os,_o="__reactProps$"+os,Ei="__reactContainer$"+os,hc="__reactEvents$"+os,f_="__reactListeners$"+os,d_="__reactHandles$"+os;function wr(t){var i=t[di];if(i)return i;for(var o=t.parentNode;o;){if(i=o[Ei]||o[di]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=Fd(t);t!==null;){if(o=t[di])return o;t=Fd(t)}return i}t=o,o=t.parentNode}return null}function vo(t){return t=t[di]||t[Ei],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function as(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function ha(t){return t[_o]||null}var pc=[],ls=-1;function Qi(t){return{current:t}}function Dt(t){0>ls||(t.current=pc[ls],pc[ls]=null,ls--)}function bt(t,i){ls++,pc[ls]=t.current,t.current=i}var Ji={},cn=Qi(Ji),An=Qi(!1),Tr=Ji;function cs(t,i){var o=t.type.contextTypes;if(!o)return Ji;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var u={},p;for(p in o)u[p]=i[p];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=u),u}function Cn(t){return t=t.childContextTypes,t!=null}function pa(){Dt(An),Dt(cn)}function Od(t,i,o){if(cn.current!==Ji)throw Error(n(168));bt(cn,i),bt(An,o)}function kd(t,i,o){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var u in l)if(!(u in i))throw Error(n(108,xe(t)||"Unknown",u));return se({},o,l)}function ma(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ji,Tr=cn.current,bt(cn,t),bt(An,An.current),!0}function zd(t,i,o){var l=t.stateNode;if(!l)throw Error(n(169));o?(t=kd(t,i,Tr),l.__reactInternalMemoizedMergedChildContext=t,Dt(An),Dt(cn),bt(cn,t)):Dt(An),bt(An,o)}var wi=null,ga=!1,mc=!1;function Bd(t){wi===null?wi=[t]:wi.push(t)}function h_(t){ga=!0,Bd(t)}function er(){if(!mc&&wi!==null){mc=!0;var t=0,i=Tt;try{var o=wi;for(Tt=1;t<o.length;t++){var l=o[t];do l=l(!0);while(l!==null)}wi=null,ga=!1}catch(u){throw wi!==null&&(wi=wi.slice(t+1)),Z(st,er),u}finally{Tt=i,mc=!1}}return null}var us=[],fs=0,_a=null,va=0,Vn=[],Gn=0,Ar=null,Ti=1,Ai="";function Cr(t,i){us[fs++]=va,us[fs++]=_a,_a=t,va=i}function Hd(t,i,o){Vn[Gn++]=Ti,Vn[Gn++]=Ai,Vn[Gn++]=Ar,Ar=t;var l=Ti;t=Ai;var u=32-wt(l)-1;l&=~(1<<u),o+=1;var p=32-wt(i)+u;if(30<p){var w=u-u%5;p=(l&(1<<w)-1).toString(32),l>>=w,u-=w,Ti=1<<32-wt(i)+u|o<<u|l,Ai=p+t}else Ti=1<<p|o<<u|l,Ai=t}function gc(t){t.return!==null&&(Cr(t,1),Hd(t,1,0))}function _c(t){for(;t===_a;)_a=us[--fs],us[fs]=null,va=us[--fs],us[fs]=null;for(;t===Ar;)Ar=Vn[--Gn],Vn[Gn]=null,Ai=Vn[--Gn],Vn[Gn]=null,Ti=Vn[--Gn],Vn[Gn]=null}var Un=null,Fn=null,Ft=!1,ni=null;function Vd(t,i){var o=Yn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function Gd(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Un=t,Fn=Zi(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Un=t,Fn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Ar!==null?{id:Ti,overflow:Ai}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Yn(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,Un=t,Fn=null,!0):!1;default:return!1}}function vc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function xc(t){if(Ft){var i=Fn;if(i){var o=i;if(!Gd(t,i)){if(vc(t))throw Error(n(418));i=Zi(o.nextSibling);var l=Un;i&&Gd(t,i)?Vd(l,o):(t.flags=t.flags&-4097|2,Ft=!1,Un=t)}}else{if(vc(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ft=!1,Un=t}}}function Wd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Un=t}function xa(t){if(t!==Un)return!1;if(!Ft)return Wd(t),Ft=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!uc(t.type,t.memoizedProps)),i&&(i=Fn)){if(vc(t))throw Xd(),Error(n(418));for(;i;)Vd(t,i),i=Zi(i.nextSibling)}if(Wd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){Fn=Zi(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}Fn=null}}else Fn=Un?Zi(t.stateNode.nextSibling):null;return!0}function Xd(){for(var t=Fn;t;)t=Zi(t.nextSibling)}function ds(){Fn=Un=null,Ft=!1}function yc(t){ni===null?ni=[t]:ni.push(t)}var p_=L.ReactCurrentBatchConfig;function xo(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var l=o.stateNode}if(!l)throw Error(n(147,t));var u=l,p=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(w){var O=u.refs;w===null?delete O[p]:O[p]=w},i._stringRef=p,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function ya(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function jd(t){var i=t._init;return i(t._payload)}function Yd(t){function i(J,G){if(t){var ie=J.deletions;ie===null?(J.deletions=[G],J.flags|=16):ie.push(G)}}function o(J,G){if(!t)return null;for(;G!==null;)i(J,G),G=G.sibling;return null}function l(J,G){for(J=new Map;G!==null;)G.key!==null?J.set(G.key,G):J.set(G.index,G),G=G.sibling;return J}function u(J,G){return J=lr(J,G),J.index=0,J.sibling=null,J}function p(J,G,ie){return J.index=ie,t?(ie=J.alternate,ie!==null?(ie=ie.index,ie<G?(J.flags|=2,G):ie):(J.flags|=2,G)):(J.flags|=1048576,G)}function w(J){return t&&J.alternate===null&&(J.flags|=2),J}function O(J,G,ie,Le){return G===null||G.tag!==6?(G=fu(ie,J.mode,Le),G.return=J,G):(G=u(G,ie),G.return=J,G)}function V(J,G,ie,Le){var qe=ie.type;return qe===F?Te(J,G,ie.props.children,Le,ie.key):G!==null&&(G.elementType===qe||typeof qe=="object"&&qe!==null&&qe.$$typeof===ae&&jd(qe)===G.type)?(Le=u(G,ie.props),Le.ref=xo(J,G,ie),Le.return=J,Le):(Le=Wa(ie.type,ie.key,ie.props,null,J.mode,Le),Le.ref=xo(J,G,ie),Le.return=J,Le)}function ue(J,G,ie,Le){return G===null||G.tag!==4||G.stateNode.containerInfo!==ie.containerInfo||G.stateNode.implementation!==ie.implementation?(G=du(ie,J.mode,Le),G.return=J,G):(G=u(G,ie.children||[]),G.return=J,G)}function Te(J,G,ie,Le,qe){return G===null||G.tag!==7?(G=Ur(ie,J.mode,Le,qe),G.return=J,G):(G=u(G,ie),G.return=J,G)}function Ae(J,G,ie){if(typeof G=="string"&&G!==""||typeof G=="number")return G=fu(""+G,J.mode,ie),G.return=J,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case j:return ie=Wa(G.type,G.key,G.props,null,J.mode,ie),ie.ref=xo(J,null,G),ie.return=J,ie;case k:return G=du(G,J.mode,ie),G.return=J,G;case ae:var Le=G._init;return Ae(J,Le(G._payload),ie)}if(R(G)||re(G))return G=Ur(G,J.mode,ie,null),G.return=J,G;ya(J,G)}return null}function Ee(J,G,ie,Le){var qe=G!==null?G.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number")return qe!==null?null:O(J,G,""+ie,Le);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case j:return ie.key===qe?V(J,G,ie,Le):null;case k:return ie.key===qe?ue(J,G,ie,Le):null;case ae:return qe=ie._init,Ee(J,G,qe(ie._payload),Le)}if(R(ie)||re(ie))return qe!==null?null:Te(J,G,ie,Le,null);ya(J,ie)}return null}function ke(J,G,ie,Le,qe){if(typeof Le=="string"&&Le!==""||typeof Le=="number")return J=J.get(ie)||null,O(G,J,""+Le,qe);if(typeof Le=="object"&&Le!==null){switch(Le.$$typeof){case j:return J=J.get(Le.key===null?ie:Le.key)||null,V(G,J,Le,qe);case k:return J=J.get(Le.key===null?ie:Le.key)||null,ue(G,J,Le,qe);case ae:var nt=Le._init;return ke(J,G,ie,nt(Le._payload),qe)}if(R(Le)||re(Le))return J=J.get(ie)||null,Te(G,J,Le,qe,null);ya(G,Le)}return null}function Ge(J,G,ie,Le){for(var qe=null,nt=null,it=G,lt=G=0,rn=null;it!==null&&lt<ie.length;lt++){it.index>lt?(rn=it,it=null):rn=it.sibling;var Et=Ee(J,it,ie[lt],Le);if(Et===null){it===null&&(it=rn);break}t&&it&&Et.alternate===null&&i(J,it),G=p(Et,G,lt),nt===null?qe=Et:nt.sibling=Et,nt=Et,it=rn}if(lt===ie.length)return o(J,it),Ft&&Cr(J,lt),qe;if(it===null){for(;lt<ie.length;lt++)it=Ae(J,ie[lt],Le),it!==null&&(G=p(it,G,lt),nt===null?qe=it:nt.sibling=it,nt=it);return Ft&&Cr(J,lt),qe}for(it=l(J,it);lt<ie.length;lt++)rn=ke(it,J,lt,ie[lt],Le),rn!==null&&(t&&rn.alternate!==null&&it.delete(rn.key===null?lt:rn.key),G=p(rn,G,lt),nt===null?qe=rn:nt.sibling=rn,nt=rn);return t&&it.forEach(function(cr){return i(J,cr)}),Ft&&Cr(J,lt),qe}function je(J,G,ie,Le){var qe=re(ie);if(typeof qe!="function")throw Error(n(150));if(ie=qe.call(ie),ie==null)throw Error(n(151));for(var nt=qe=null,it=G,lt=G=0,rn=null,Et=ie.next();it!==null&&!Et.done;lt++,Et=ie.next()){it.index>lt?(rn=it,it=null):rn=it.sibling;var cr=Ee(J,it,Et.value,Le);if(cr===null){it===null&&(it=rn);break}t&&it&&cr.alternate===null&&i(J,it),G=p(cr,G,lt),nt===null?qe=cr:nt.sibling=cr,nt=cr,it=rn}if(Et.done)return o(J,it),Ft&&Cr(J,lt),qe;if(it===null){for(;!Et.done;lt++,Et=ie.next())Et=Ae(J,Et.value,Le),Et!==null&&(G=p(Et,G,lt),nt===null?qe=Et:nt.sibling=Et,nt=Et);return Ft&&Cr(J,lt),qe}for(it=l(J,it);!Et.done;lt++,Et=ie.next())Et=ke(it,J,lt,Et.value,Le),Et!==null&&(t&&Et.alternate!==null&&it.delete(Et.key===null?lt:Et.key),G=p(Et,G,lt),nt===null?qe=Et:nt.sibling=Et,nt=Et);return t&&it.forEach(function(Y_){return i(J,Y_)}),Ft&&Cr(J,lt),qe}function Wt(J,G,ie,Le){if(typeof ie=="object"&&ie!==null&&ie.type===F&&ie.key===null&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case j:e:{for(var qe=ie.key,nt=G;nt!==null;){if(nt.key===qe){if(qe=ie.type,qe===F){if(nt.tag===7){o(J,nt.sibling),G=u(nt,ie.props.children),G.return=J,J=G;break e}}else if(nt.elementType===qe||typeof qe=="object"&&qe!==null&&qe.$$typeof===ae&&jd(qe)===nt.type){o(J,nt.sibling),G=u(nt,ie.props),G.ref=xo(J,nt,ie),G.return=J,J=G;break e}o(J,nt);break}else i(J,nt);nt=nt.sibling}ie.type===F?(G=Ur(ie.props.children,J.mode,Le,ie.key),G.return=J,J=G):(Le=Wa(ie.type,ie.key,ie.props,null,J.mode,Le),Le.ref=xo(J,G,ie),Le.return=J,J=Le)}return w(J);case k:e:{for(nt=ie.key;G!==null;){if(G.key===nt)if(G.tag===4&&G.stateNode.containerInfo===ie.containerInfo&&G.stateNode.implementation===ie.implementation){o(J,G.sibling),G=u(G,ie.children||[]),G.return=J,J=G;break e}else{o(J,G);break}else i(J,G);G=G.sibling}G=du(ie,J.mode,Le),G.return=J,J=G}return w(J);case ae:return nt=ie._init,Wt(J,G,nt(ie._payload),Le)}if(R(ie))return Ge(J,G,ie,Le);if(re(ie))return je(J,G,ie,Le);ya(J,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"?(ie=""+ie,G!==null&&G.tag===6?(o(J,G.sibling),G=u(G,ie),G.return=J,J=G):(o(J,G),G=fu(ie,J.mode,Le),G.return=J,J=G),w(J)):o(J,G)}return Wt}var hs=Yd(!0),qd=Yd(!1),Sa=Qi(null),Ma=null,ps=null,Sc=null;function Mc(){Sc=ps=Ma=null}function Ec(t){var i=Sa.current;Dt(Sa),t._currentValue=i}function wc(t,i,o){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===o)break;t=t.return}}function ms(t,i){Ma=t,Sc=ps=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Rn=!0),t.firstContext=null)}function Wn(t){var i=t._currentValue;if(Sc!==t)if(t={context:t,memoizedValue:i,next:null},ps===null){if(Ma===null)throw Error(n(308));ps=t,Ma.dependencies={lanes:0,firstContext:t}}else ps=ps.next=t;return i}var Rr=null;function Tc(t){Rr===null?Rr=[t]:Rr.push(t)}function $d(t,i,o,l){var u=i.interleaved;return u===null?(o.next=o,Tc(i)):(o.next=u.next,u.next=o),i.interleaved=o,Ci(t,l)}function Ci(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var tr=!1;function Ac(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Kd(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ri(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function nr(t,i,o){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(St&2)!==0){var u=l.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),l.pending=i,Ci(t,o)}return u=l.interleaved,u===null?(i.next=i,Tc(l)):(i.next=u.next,u.next=i),l.interleaved=i,Ci(t,o)}function Ea(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,Bl(t,o)}}function Zd(t,i){var o=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var u=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var w={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};p===null?u=p=w:p=p.next=w,o=o.next}while(o!==null);p===null?u=p=i:p=p.next=i}else u=p=i;o={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:p,shared:l.shared,effects:l.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function wa(t,i,o,l){var u=t.updateQueue;tr=!1;var p=u.firstBaseUpdate,w=u.lastBaseUpdate,O=u.shared.pending;if(O!==null){u.shared.pending=null;var V=O,ue=V.next;V.next=null,w===null?p=ue:w.next=ue,w=V;var Te=t.alternate;Te!==null&&(Te=Te.updateQueue,O=Te.lastBaseUpdate,O!==w&&(O===null?Te.firstBaseUpdate=ue:O.next=ue,Te.lastBaseUpdate=V))}if(p!==null){var Ae=u.baseState;w=0,Te=ue=V=null,O=p;do{var Ee=O.lane,ke=O.eventTime;if((l&Ee)===Ee){Te!==null&&(Te=Te.next={eventTime:ke,lane:0,tag:O.tag,payload:O.payload,callback:O.callback,next:null});e:{var Ge=t,je=O;switch(Ee=i,ke=o,je.tag){case 1:if(Ge=je.payload,typeof Ge=="function"){Ae=Ge.call(ke,Ae,Ee);break e}Ae=Ge;break e;case 3:Ge.flags=Ge.flags&-65537|128;case 0:if(Ge=je.payload,Ee=typeof Ge=="function"?Ge.call(ke,Ae,Ee):Ge,Ee==null)break e;Ae=se({},Ae,Ee);break e;case 2:tr=!0}}O.callback!==null&&O.lane!==0&&(t.flags|=64,Ee=u.effects,Ee===null?u.effects=[O]:Ee.push(O))}else ke={eventTime:ke,lane:Ee,tag:O.tag,payload:O.payload,callback:O.callback,next:null},Te===null?(ue=Te=ke,V=Ae):Te=Te.next=ke,w|=Ee;if(O=O.next,O===null){if(O=u.shared.pending,O===null)break;Ee=O,O=Ee.next,Ee.next=null,u.lastBaseUpdate=Ee,u.shared.pending=null}}while(!0);if(Te===null&&(V=Ae),u.baseState=V,u.firstBaseUpdate=ue,u.lastBaseUpdate=Te,i=u.shared.interleaved,i!==null){u=i;do w|=u.lane,u=u.next;while(u!==i)}else p===null&&(u.shared.lanes=0);Lr|=w,t.lanes=w,t.memoizedState=Ae}}function Qd(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],u=l.callback;if(u!==null){if(l.callback=null,l=o,typeof u!="function")throw Error(n(191,u));u.call(l)}}}var yo={},hi=Qi(yo),So=Qi(yo),Mo=Qi(yo);function br(t){if(t===yo)throw Error(n(174));return t}function Cc(t,i){switch(bt(Mo,i),bt(So,t),bt(hi,yo),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Se(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Se(i,t)}Dt(hi),bt(hi,i)}function gs(){Dt(hi),Dt(So),Dt(Mo)}function Jd(t){br(Mo.current);var i=br(hi.current),o=Se(i,t.type);i!==o&&(bt(So,t),bt(hi,o))}function Rc(t){So.current===t&&(Dt(hi),Dt(So))}var zt=Qi(0);function Ta(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var bc=[];function Pc(){for(var t=0;t<bc.length;t++)bc[t]._workInProgressVersionPrimary=null;bc.length=0}var Aa=L.ReactCurrentDispatcher,Lc=L.ReactCurrentBatchConfig,Pr=0,Bt=null,$t=null,tn=null,Ca=!1,Eo=!1,wo=0,m_=0;function un(){throw Error(n(321))}function Dc(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!ti(t[o],i[o]))return!1;return!0}function Nc(t,i,o,l,u,p){if(Pr=p,Bt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Aa.current=t===null||t.memoizedState===null?x_:y_,t=o(l,u),Eo){p=0;do{if(Eo=!1,wo=0,25<=p)throw Error(n(301));p+=1,tn=$t=null,i.updateQueue=null,Aa.current=S_,t=o(l,u)}while(Eo)}if(Aa.current=Pa,i=$t!==null&&$t.next!==null,Pr=0,tn=$t=Bt=null,Ca=!1,i)throw Error(n(300));return t}function Ic(){var t=wo!==0;return wo=0,t}function pi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tn===null?Bt.memoizedState=tn=t:tn=tn.next=t,tn}function Xn(){if($t===null){var t=Bt.alternate;t=t!==null?t.memoizedState:null}else t=$t.next;var i=tn===null?Bt.memoizedState:tn.next;if(i!==null)tn=i,$t=t;else{if(t===null)throw Error(n(310));$t=t,t={memoizedState:$t.memoizedState,baseState:$t.baseState,baseQueue:$t.baseQueue,queue:$t.queue,next:null},tn===null?Bt.memoizedState=tn=t:tn=tn.next=t}return tn}function To(t,i){return typeof i=="function"?i(t):i}function Uc(t){var i=Xn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=$t,u=l.baseQueue,p=o.pending;if(p!==null){if(u!==null){var w=u.next;u.next=p.next,p.next=w}l.baseQueue=u=p,o.pending=null}if(u!==null){p=u.next,l=l.baseState;var O=w=null,V=null,ue=p;do{var Te=ue.lane;if((Pr&Te)===Te)V!==null&&(V=V.next={lane:0,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null}),l=ue.hasEagerState?ue.eagerState:t(l,ue.action);else{var Ae={lane:Te,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null};V===null?(O=V=Ae,w=l):V=V.next=Ae,Bt.lanes|=Te,Lr|=Te}ue=ue.next}while(ue!==null&&ue!==p);V===null?w=l:V.next=O,ti(l,i.memoizedState)||(Rn=!0),i.memoizedState=l,i.baseState=w,i.baseQueue=V,o.lastRenderedState=l}if(t=o.interleaved,t!==null){u=t;do p=u.lane,Bt.lanes|=p,Lr|=p,u=u.next;while(u!==t)}else u===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Fc(t){var i=Xn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=o.dispatch,u=o.pending,p=i.memoizedState;if(u!==null){o.pending=null;var w=u=u.next;do p=t(p,w.action),w=w.next;while(w!==u);ti(p,i.memoizedState)||(Rn=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),o.lastRenderedState=p}return[p,l]}function eh(){}function th(t,i){var o=Bt,l=Xn(),u=i(),p=!ti(l.memoizedState,u);if(p&&(l.memoizedState=u,Rn=!0),l=l.queue,Oc(rh.bind(null,o,l,t),[t]),l.getSnapshot!==i||p||tn!==null&&tn.memoizedState.tag&1){if(o.flags|=2048,Ao(9,ih.bind(null,o,l,u,i),void 0,null),nn===null)throw Error(n(349));(Pr&30)!==0||nh(o,i,u)}return u}function nh(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=Bt.updateQueue,i===null?(i={lastEffect:null,stores:null},Bt.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function ih(t,i,o,l){i.value=o,i.getSnapshot=l,sh(i)&&oh(t)}function rh(t,i,o){return o(function(){sh(i)&&oh(t)})}function sh(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!ti(t,o)}catch{return!0}}function oh(t){var i=Ci(t,1);i!==null&&oi(i,t,1,-1)}function ah(t){var i=pi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:To,lastRenderedState:t},i.queue=t,t=t.dispatch=v_.bind(null,Bt,t),[i.memoizedState,t]}function Ao(t,i,o,l){return t={tag:t,create:i,destroy:o,deps:l,next:null},i=Bt.updateQueue,i===null?(i={lastEffect:null,stores:null},Bt.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(l=o.next,o.next=t,t.next=l,i.lastEffect=t)),t}function lh(){return Xn().memoizedState}function Ra(t,i,o,l){var u=pi();Bt.flags|=t,u.memoizedState=Ao(1|i,o,void 0,l===void 0?null:l)}function ba(t,i,o,l){var u=Xn();l=l===void 0?null:l;var p=void 0;if($t!==null){var w=$t.memoizedState;if(p=w.destroy,l!==null&&Dc(l,w.deps)){u.memoizedState=Ao(i,o,p,l);return}}Bt.flags|=t,u.memoizedState=Ao(1|i,o,p,l)}function ch(t,i){return Ra(8390656,8,t,i)}function Oc(t,i){return ba(2048,8,t,i)}function uh(t,i){return ba(4,2,t,i)}function fh(t,i){return ba(4,4,t,i)}function dh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function hh(t,i,o){return o=o!=null?o.concat([t]):null,ba(4,4,dh.bind(null,i,t),o)}function kc(){}function ph(t,i){var o=Xn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Dc(i,l[1])?l[0]:(o.memoizedState=[t,i],t)}function mh(t,i){var o=Xn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Dc(i,l[1])?l[0]:(t=t(),o.memoizedState=[t,i],t)}function gh(t,i,o){return(Pr&21)===0?(t.baseState&&(t.baseState=!1,Rn=!0),t.memoizedState=o):(ti(o,i)||(o=Zo(),Bt.lanes|=o,Lr|=o,t.baseState=!0),i)}function g_(t,i){var o=Tt;Tt=o!==0&&4>o?o:4,t(!0);var l=Lc.transition;Lc.transition={};try{t(!1),i()}finally{Tt=o,Lc.transition=l}}function _h(){return Xn().memoizedState}function __(t,i,o){var l=or(t);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},vh(t))xh(i,o);else if(o=$d(t,i,o,l),o!==null){var u=vn();oi(o,t,l,u),yh(o,i,l)}}function v_(t,i,o){var l=or(t),u={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(vh(t))xh(i,u);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var w=i.lastRenderedState,O=p(w,o);if(u.hasEagerState=!0,u.eagerState=O,ti(O,w)){var V=i.interleaved;V===null?(u.next=u,Tc(i)):(u.next=V.next,V.next=u),i.interleaved=u;return}}catch{}finally{}o=$d(t,i,u,l),o!==null&&(u=vn(),oi(o,t,l,u),yh(o,i,l))}}function vh(t){var i=t.alternate;return t===Bt||i!==null&&i===Bt}function xh(t,i){Eo=Ca=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function yh(t,i,o){if((o&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,Bl(t,o)}}var Pa={readContext:Wn,useCallback:un,useContext:un,useEffect:un,useImperativeHandle:un,useInsertionEffect:un,useLayoutEffect:un,useMemo:un,useReducer:un,useRef:un,useState:un,useDebugValue:un,useDeferredValue:un,useTransition:un,useMutableSource:un,useSyncExternalStore:un,useId:un,unstable_isNewReconciler:!1},x_={readContext:Wn,useCallback:function(t,i){return pi().memoizedState=[t,i===void 0?null:i],t},useContext:Wn,useEffect:ch,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Ra(4194308,4,dh.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Ra(4194308,4,t,i)},useInsertionEffect:function(t,i){return Ra(4,2,t,i)},useMemo:function(t,i){var o=pi();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var l=pi();return i=o!==void 0?o(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=__.bind(null,Bt,t),[l.memoizedState,t]},useRef:function(t){var i=pi();return t={current:t},i.memoizedState=t},useState:ah,useDebugValue:kc,useDeferredValue:function(t){return pi().memoizedState=t},useTransition:function(){var t=ah(!1),i=t[0];return t=g_.bind(null,t[1]),pi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var l=Bt,u=pi();if(Ft){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),nn===null)throw Error(n(349));(Pr&30)!==0||nh(l,i,o)}u.memoizedState=o;var p={value:o,getSnapshot:i};return u.queue=p,ch(rh.bind(null,l,p,t),[t]),l.flags|=2048,Ao(9,ih.bind(null,l,p,o,i),void 0,null),o},useId:function(){var t=pi(),i=nn.identifierPrefix;if(Ft){var o=Ai,l=Ti;o=(l&~(1<<32-wt(l)-1)).toString(32)+o,i=":"+i+"R"+o,o=wo++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=m_++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},y_={readContext:Wn,useCallback:ph,useContext:Wn,useEffect:Oc,useImperativeHandle:hh,useInsertionEffect:uh,useLayoutEffect:fh,useMemo:mh,useReducer:Uc,useRef:lh,useState:function(){return Uc(To)},useDebugValue:kc,useDeferredValue:function(t){var i=Xn();return gh(i,$t.memoizedState,t)},useTransition:function(){var t=Uc(To)[0],i=Xn().memoizedState;return[t,i]},useMutableSource:eh,useSyncExternalStore:th,useId:_h,unstable_isNewReconciler:!1},S_={readContext:Wn,useCallback:ph,useContext:Wn,useEffect:Oc,useImperativeHandle:hh,useInsertionEffect:uh,useLayoutEffect:fh,useMemo:mh,useReducer:Fc,useRef:lh,useState:function(){return Fc(To)},useDebugValue:kc,useDeferredValue:function(t){var i=Xn();return $t===null?i.memoizedState=t:gh(i,$t.memoizedState,t)},useTransition:function(){var t=Fc(To)[0],i=Xn().memoizedState;return[t,i]},useMutableSource:eh,useSyncExternalStore:th,useId:_h,unstable_isNewReconciler:!1};function ii(t,i){if(t&&t.defaultProps){i=se({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function zc(t,i,o,l){i=t.memoizedState,o=o(l,i),o=o==null?i:se({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var La={isMounted:function(t){return(t=t._reactInternals)?Mi(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var l=vn(),u=or(t),p=Ri(l,u);p.payload=i,o!=null&&(p.callback=o),i=nr(t,p,u),i!==null&&(oi(i,t,u,l),Ea(i,t,u))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var l=vn(),u=or(t),p=Ri(l,u);p.tag=1,p.payload=i,o!=null&&(p.callback=o),i=nr(t,p,u),i!==null&&(oi(i,t,u,l),Ea(i,t,u))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=vn(),l=or(t),u=Ri(o,l);u.tag=2,i!=null&&(u.callback=i),i=nr(t,u,l),i!==null&&(oi(i,t,l,o),Ea(i,t,l))}};function Sh(t,i,o,l,u,p,w){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,p,w):i.prototype&&i.prototype.isPureReactComponent?!fo(o,l)||!fo(u,p):!0}function Mh(t,i,o){var l=!1,u=Ji,p=i.contextType;return typeof p=="object"&&p!==null?p=Wn(p):(u=Cn(i)?Tr:cn.current,l=i.contextTypes,p=(l=l!=null)?cs(t,u):Ji),i=new i(o,p),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=La,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=u,t.__reactInternalMemoizedMaskedChildContext=p),i}function Eh(t,i,o,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,l),i.state!==t&&La.enqueueReplaceState(i,i.state,null)}function Bc(t,i,o,l){var u=t.stateNode;u.props=o,u.state=t.memoizedState,u.refs={},Ac(t);var p=i.contextType;typeof p=="object"&&p!==null?u.context=Wn(p):(p=Cn(i)?Tr:cn.current,u.context=cs(t,p)),u.state=t.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(zc(t,i,p,o),u.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(i=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),i!==u.state&&La.enqueueReplaceState(u,u.state,null),wa(t,o,u,l),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308)}function _s(t,i){try{var o="",l=i;do o+=X(l),l=l.return;while(l);var u=o}catch(p){u=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:i,stack:u,digest:null}}function Hc(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function Vc(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var M_=typeof WeakMap=="function"?WeakMap:Map;function wh(t,i,o){o=Ri(-1,o),o.tag=3,o.payload={element:null};var l=i.value;return o.callback=function(){ka||(ka=!0,iu=l),Vc(t,i)},o}function Th(t,i,o){o=Ri(-1,o),o.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var u=i.value;o.payload=function(){return l(u)},o.callback=function(){Vc(t,i)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(o.callback=function(){Vc(t,i),typeof l!="function"&&(rr===null?rr=new Set([this]):rr.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})}),o}function Ah(t,i,o){var l=t.pingCache;if(l===null){l=t.pingCache=new M_;var u=new Set;l.set(i,u)}else u=l.get(i),u===void 0&&(u=new Set,l.set(i,u));u.has(o)||(u.add(o),t=F_.bind(null,t,i,o),i.then(t,t))}function Ch(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Rh(t,i,o,l,u){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Ri(-1,1),i.tag=2,nr(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=u,t)}var E_=L.ReactCurrentOwner,Rn=!1;function _n(t,i,o,l){i.child=t===null?qd(i,null,o,l):hs(i,t.child,o,l)}function bh(t,i,o,l,u){o=o.render;var p=i.ref;return ms(i,u),l=Nc(t,i,o,l,p,u),o=Ic(),t!==null&&!Rn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~u,bi(t,i,u)):(Ft&&o&&gc(i),i.flags|=1,_n(t,i,l,u),i.child)}function Ph(t,i,o,l,u){if(t===null){var p=o.type;return typeof p=="function"&&!uu(p)&&p.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=p,Lh(t,i,p,l,u)):(t=Wa(o.type,null,l,i,i.mode,u),t.ref=i.ref,t.return=i,i.child=t)}if(p=t.child,(t.lanes&u)===0){var w=p.memoizedProps;if(o=o.compare,o=o!==null?o:fo,o(w,l)&&t.ref===i.ref)return bi(t,i,u)}return i.flags|=1,t=lr(p,l),t.ref=i.ref,t.return=i,i.child=t}function Lh(t,i,o,l,u){if(t!==null){var p=t.memoizedProps;if(fo(p,l)&&t.ref===i.ref)if(Rn=!1,i.pendingProps=l=p,(t.lanes&u)!==0)(t.flags&131072)!==0&&(Rn=!0);else return i.lanes=t.lanes,bi(t,i,u)}return Gc(t,i,o,l,u)}function Dh(t,i,o){var l=i.pendingProps,u=l.children,p=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},bt(xs,On),On|=o;else{if((o&1073741824)===0)return t=p!==null?p.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,bt(xs,On),On|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=p!==null?p.baseLanes:o,bt(xs,On),On|=l}else p!==null?(l=p.baseLanes|o,i.memoizedState=null):l=o,bt(xs,On),On|=l;return _n(t,i,u,o),i.child}function Nh(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Gc(t,i,o,l,u){var p=Cn(o)?Tr:cn.current;return p=cs(i,p),ms(i,u),o=Nc(t,i,o,l,p,u),l=Ic(),t!==null&&!Rn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~u,bi(t,i,u)):(Ft&&l&&gc(i),i.flags|=1,_n(t,i,o,u),i.child)}function Ih(t,i,o,l,u){if(Cn(o)){var p=!0;ma(i)}else p=!1;if(ms(i,u),i.stateNode===null)Na(t,i),Mh(i,o,l),Bc(i,o,l,u),l=!0;else if(t===null){var w=i.stateNode,O=i.memoizedProps;w.props=O;var V=w.context,ue=o.contextType;typeof ue=="object"&&ue!==null?ue=Wn(ue):(ue=Cn(o)?Tr:cn.current,ue=cs(i,ue));var Te=o.getDerivedStateFromProps,Ae=typeof Te=="function"||typeof w.getSnapshotBeforeUpdate=="function";Ae||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(O!==l||V!==ue)&&Eh(i,w,l,ue),tr=!1;var Ee=i.memoizedState;w.state=Ee,wa(i,l,w,u),V=i.memoizedState,O!==l||Ee!==V||An.current||tr?(typeof Te=="function"&&(zc(i,o,Te,l),V=i.memoizedState),(O=tr||Sh(i,o,O,l,Ee,V,ue))?(Ae||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(i.flags|=4194308)):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=V),w.props=l,w.state=V,w.context=ue,l=O):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{w=i.stateNode,Kd(t,i),O=i.memoizedProps,ue=i.type===i.elementType?O:ii(i.type,O),w.props=ue,Ae=i.pendingProps,Ee=w.context,V=o.contextType,typeof V=="object"&&V!==null?V=Wn(V):(V=Cn(o)?Tr:cn.current,V=cs(i,V));var ke=o.getDerivedStateFromProps;(Te=typeof ke=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(O!==Ae||Ee!==V)&&Eh(i,w,l,V),tr=!1,Ee=i.memoizedState,w.state=Ee,wa(i,l,w,u);var Ge=i.memoizedState;O!==Ae||Ee!==Ge||An.current||tr?(typeof ke=="function"&&(zc(i,o,ke,l),Ge=i.memoizedState),(ue=tr||Sh(i,o,ue,l,Ee,Ge,V)||!1)?(Te||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(l,Ge,V),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(l,Ge,V)),typeof w.componentDidUpdate=="function"&&(i.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof w.componentDidUpdate!="function"||O===t.memoizedProps&&Ee===t.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||O===t.memoizedProps&&Ee===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=Ge),w.props=l,w.state=Ge,w.context=V,l=ue):(typeof w.componentDidUpdate!="function"||O===t.memoizedProps&&Ee===t.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||O===t.memoizedProps&&Ee===t.memoizedState||(i.flags|=1024),l=!1)}return Wc(t,i,o,l,p,u)}function Wc(t,i,o,l,u,p){Nh(t,i);var w=(i.flags&128)!==0;if(!l&&!w)return u&&zd(i,o,!1),bi(t,i,p);l=i.stateNode,E_.current=i;var O=w&&typeof o.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&w?(i.child=hs(i,t.child,null,p),i.child=hs(i,null,O,p)):_n(t,i,O,p),i.memoizedState=l.state,u&&zd(i,o,!0),i.child}function Uh(t){var i=t.stateNode;i.pendingContext?Od(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Od(t,i.context,!1),Cc(t,i.containerInfo)}function Fh(t,i,o,l,u){return ds(),yc(u),i.flags|=256,_n(t,i,o,l),i.child}var Xc={dehydrated:null,treeContext:null,retryLane:0};function jc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Oh(t,i,o){var l=i.pendingProps,u=zt.current,p=!1,w=(i.flags&128)!==0,O;if((O=w)||(O=t!==null&&t.memoizedState===null?!1:(u&2)!==0),O?(p=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(u|=1),bt(zt,u&1),t===null)return xc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(w=l.children,t=l.fallback,p?(l=i.mode,p=i.child,w={mode:"hidden",children:w},(l&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=w):p=Xa(w,l,0,null),t=Ur(t,l,o,null),p.return=i,t.return=i,p.sibling=t,i.child=p,i.child.memoizedState=jc(o),i.memoizedState=Xc,t):Yc(i,w));if(u=t.memoizedState,u!==null&&(O=u.dehydrated,O!==null))return w_(t,i,w,l,O,u,o);if(p){p=l.fallback,w=i.mode,u=t.child,O=u.sibling;var V={mode:"hidden",children:l.children};return(w&1)===0&&i.child!==u?(l=i.child,l.childLanes=0,l.pendingProps=V,i.deletions=null):(l=lr(u,V),l.subtreeFlags=u.subtreeFlags&14680064),O!==null?p=lr(O,p):(p=Ur(p,w,o,null),p.flags|=2),p.return=i,l.return=i,l.sibling=p,i.child=l,l=p,p=i.child,w=t.child.memoizedState,w=w===null?jc(o):{baseLanes:w.baseLanes|o,cachePool:null,transitions:w.transitions},p.memoizedState=w,p.childLanes=t.childLanes&~o,i.memoizedState=Xc,l}return p=t.child,t=p.sibling,l=lr(p,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=o),l.return=i,l.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=l,i.memoizedState=null,l}function Yc(t,i){return i=Xa({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Da(t,i,o,l){return l!==null&&yc(l),hs(i,t.child,null,o),t=Yc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function w_(t,i,o,l,u,p,w){if(o)return i.flags&256?(i.flags&=-257,l=Hc(Error(n(422))),Da(t,i,w,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(p=l.fallback,u=i.mode,l=Xa({mode:"visible",children:l.children},u,0,null),p=Ur(p,u,w,null),p.flags|=2,l.return=i,p.return=i,l.sibling=p,i.child=l,(i.mode&1)!==0&&hs(i,t.child,null,w),i.child.memoizedState=jc(w),i.memoizedState=Xc,p);if((i.mode&1)===0)return Da(t,i,w,null);if(u.data==="$!"){if(l=u.nextSibling&&u.nextSibling.dataset,l)var O=l.dgst;return l=O,p=Error(n(419)),l=Hc(p,l,void 0),Da(t,i,w,l)}if(O=(w&t.childLanes)!==0,Rn||O){if(l=nn,l!==null){switch(w&-w){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=(u&(l.suspendedLanes|w))!==0?0:u,u!==0&&u!==p.retryLane&&(p.retryLane=u,Ci(t,u),oi(l,t,u,-1))}return cu(),l=Hc(Error(n(421))),Da(t,i,w,l)}return u.data==="$?"?(i.flags|=128,i.child=t.child,i=O_.bind(null,t),u._reactRetry=i,null):(t=p.treeContext,Fn=Zi(u.nextSibling),Un=i,Ft=!0,ni=null,t!==null&&(Vn[Gn++]=Ti,Vn[Gn++]=Ai,Vn[Gn++]=Ar,Ti=t.id,Ai=t.overflow,Ar=i),i=Yc(i,l.children),i.flags|=4096,i)}function kh(t,i,o){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),wc(t.return,i,o)}function qc(t,i,o,l,u){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:u}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=l,p.tail=o,p.tailMode=u)}function zh(t,i,o){var l=i.pendingProps,u=l.revealOrder,p=l.tail;if(_n(t,i,l.children,o),l=zt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&kh(t,o,i);else if(t.tag===19)kh(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(bt(zt,l),(i.mode&1)===0)i.memoizedState=null;else switch(u){case"forwards":for(o=i.child,u=null;o!==null;)t=o.alternate,t!==null&&Ta(t)===null&&(u=o),o=o.sibling;o=u,o===null?(u=i.child,i.child=null):(u=o.sibling,o.sibling=null),qc(i,!1,u,o,p);break;case"backwards":for(o=null,u=i.child,i.child=null;u!==null;){if(t=u.alternate,t!==null&&Ta(t)===null){i.child=u;break}t=u.sibling,u.sibling=o,o=u,u=t}qc(i,!0,o,null,p);break;case"together":qc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Na(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function bi(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),Lr|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=lr(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=lr(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function T_(t,i,o){switch(i.tag){case 3:Uh(i),ds();break;case 5:Jd(i);break;case 1:Cn(i.type)&&ma(i);break;case 4:Cc(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,u=i.memoizedProps.value;bt(Sa,l._currentValue),l._currentValue=u;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(bt(zt,zt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Oh(t,i,o):(bt(zt,zt.current&1),t=bi(t,i,o),t!==null?t.sibling:null);bt(zt,zt.current&1);break;case 19:if(l=(o&i.childLanes)!==0,(t.flags&128)!==0){if(l)return zh(t,i,o);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),bt(zt,zt.current),l)break;return null;case 22:case 23:return i.lanes=0,Dh(t,i,o)}return bi(t,i,o)}var Bh,$c,Hh,Vh;Bh=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},$c=function(){},Hh=function(t,i,o,l){var u=t.memoizedProps;if(u!==l){t=i.stateNode,br(hi.current);var p=null;switch(o){case"input":u=Qe(t,u),l=Qe(t,l),p=[];break;case"select":u=se({},u,{value:void 0}),l=se({},l,{value:void 0}),p=[];break;case"textarea":u=B(t,u),l=B(t,l),p=[];break;default:typeof u.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=da)}Ze(o,l);var w;o=null;for(ue in u)if(!l.hasOwnProperty(ue)&&u.hasOwnProperty(ue)&&u[ue]!=null)if(ue==="style"){var O=u[ue];for(w in O)O.hasOwnProperty(w)&&(o||(o={}),o[w]="")}else ue!=="dangerouslySetInnerHTML"&&ue!=="children"&&ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&ue!=="autoFocus"&&(a.hasOwnProperty(ue)?p||(p=[]):(p=p||[]).push(ue,null));for(ue in l){var V=l[ue];if(O=u!=null?u[ue]:void 0,l.hasOwnProperty(ue)&&V!==O&&(V!=null||O!=null))if(ue==="style")if(O){for(w in O)!O.hasOwnProperty(w)||V&&V.hasOwnProperty(w)||(o||(o={}),o[w]="");for(w in V)V.hasOwnProperty(w)&&O[w]!==V[w]&&(o||(o={}),o[w]=V[w])}else o||(p||(p=[]),p.push(ue,o)),o=V;else ue==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,O=O?O.__html:void 0,V!=null&&O!==V&&(p=p||[]).push(ue,V)):ue==="children"?typeof V!="string"&&typeof V!="number"||(p=p||[]).push(ue,""+V):ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&(a.hasOwnProperty(ue)?(V!=null&&ue==="onScroll"&&Lt("scroll",t),p||O===V||(p=[])):(p=p||[]).push(ue,V))}o&&(p=p||[]).push("style",o);var ue=p;(i.updateQueue=ue)&&(i.flags|=4)}},Vh=function(t,i,o,l){o!==l&&(i.flags|=4)};function Co(t,i){if(!Ft)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function fn(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,l=0;if(i)for(var u=t.child;u!==null;)o|=u.lanes|u.childLanes,l|=u.subtreeFlags&14680064,l|=u.flags&14680064,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)o|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=l,t.childLanes=o,i}function A_(t,i,o){var l=i.pendingProps;switch(_c(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fn(i),null;case 1:return Cn(i.type)&&pa(),fn(i),null;case 3:return l=i.stateNode,gs(),Dt(An),Dt(cn),Pc(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(xa(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ni!==null&&(ou(ni),ni=null))),$c(t,i),fn(i),null;case 5:Rc(i);var u=br(Mo.current);if(o=i.type,t!==null&&i.stateNode!=null)Hh(t,i,o,l,u),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return fn(i),null}if(t=br(hi.current),xa(i)){l=i.stateNode,o=i.type;var p=i.memoizedProps;switch(l[di]=i,l[_o]=p,t=(i.mode&1)!==0,o){case"dialog":Lt("cancel",l),Lt("close",l);break;case"iframe":case"object":case"embed":Lt("load",l);break;case"video":case"audio":for(u=0;u<po.length;u++)Lt(po[u],l);break;case"source":Lt("error",l);break;case"img":case"image":case"link":Lt("error",l),Lt("load",l);break;case"details":Lt("toggle",l);break;case"input":ct(l,p),Lt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!p.multiple},Lt("invalid",l);break;case"textarea":$(l,p),Lt("invalid",l)}Ze(o,p),u=null;for(var w in p)if(p.hasOwnProperty(w)){var O=p[w];w==="children"?typeof O=="string"?l.textContent!==O&&(p.suppressHydrationWarning!==!0&&fa(l.textContent,O,t),u=["children",O]):typeof O=="number"&&l.textContent!==""+O&&(p.suppressHydrationWarning!==!0&&fa(l.textContent,O,t),u=["children",""+O]):a.hasOwnProperty(w)&&O!=null&&w==="onScroll"&&Lt("scroll",l)}switch(o){case"input":pt(l),et(l,p,!0);break;case"textarea":pt(l),he(l);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(l.onclick=da)}l=u,i.updateQueue=l,l!==null&&(i.flags|=4)}else{w=u.nodeType===9?u:u.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Me(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=w.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=w.createElement(o,{is:l.is}):(t=w.createElement(o),o==="select"&&(w=t,l.multiple?w.multiple=!0:l.size&&(w.size=l.size))):t=w.createElementNS(t,o),t[di]=i,t[_o]=l,Bh(t,i,!1,!1),i.stateNode=t;e:{switch(w=yt(o,l),o){case"dialog":Lt("cancel",t),Lt("close",t),u=l;break;case"iframe":case"object":case"embed":Lt("load",t),u=l;break;case"video":case"audio":for(u=0;u<po.length;u++)Lt(po[u],t);u=l;break;case"source":Lt("error",t),u=l;break;case"img":case"image":case"link":Lt("error",t),Lt("load",t),u=l;break;case"details":Lt("toggle",t),u=l;break;case"input":ct(t,l),u=Qe(t,l),Lt("invalid",t);break;case"option":u=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},u=se({},l,{value:void 0}),Lt("invalid",t);break;case"textarea":$(t,l),u=B(t,l),Lt("invalid",t);break;default:u=l}Ze(o,u),O=u;for(p in O)if(O.hasOwnProperty(p)){var V=O[p];p==="style"?Ue(t,V):p==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,V!=null&&Ve(t,V)):p==="children"?typeof V=="string"?(o!=="textarea"||V!=="")&&ye(t,V):typeof V=="number"&&ye(t,""+V):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(a.hasOwnProperty(p)?V!=null&&p==="onScroll"&&Lt("scroll",t):V!=null&&b(t,p,V,w))}switch(o){case"input":pt(t),et(t,l,!1);break;case"textarea":pt(t),he(t);break;case"option":l.value!=null&&t.setAttribute("value",""+Ce(l.value));break;case"select":t.multiple=!!l.multiple,p=l.value,p!=null?S(t,!!l.multiple,p,!1):l.defaultValue!=null&&S(t,!!l.multiple,l.defaultValue,!0);break;default:typeof u.onClick=="function"&&(t.onclick=da)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return fn(i),null;case 6:if(t&&i.stateNode!=null)Vh(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(o=br(Mo.current),br(hi.current),xa(i)){if(l=i.stateNode,o=i.memoizedProps,l[di]=i,(p=l.nodeValue!==o)&&(t=Un,t!==null))switch(t.tag){case 3:fa(l.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&fa(l.nodeValue,o,(t.mode&1)!==0)}p&&(i.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[di]=i,i.stateNode=l}return fn(i),null;case 13:if(Dt(zt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ft&&Fn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Xd(),ds(),i.flags|=98560,p=!1;else if(p=xa(i),l!==null&&l.dehydrated!==null){if(t===null){if(!p)throw Error(n(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(n(317));p[di]=i}else ds(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;fn(i),p=!1}else ni!==null&&(ou(ni),ni=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(zt.current&1)!==0?Kt===0&&(Kt=3):cu())),i.updateQueue!==null&&(i.flags|=4),fn(i),null);case 4:return gs(),$c(t,i),t===null&&mo(i.stateNode.containerInfo),fn(i),null;case 10:return Ec(i.type._context),fn(i),null;case 17:return Cn(i.type)&&pa(),fn(i),null;case 19:if(Dt(zt),p=i.memoizedState,p===null)return fn(i),null;if(l=(i.flags&128)!==0,w=p.rendering,w===null)if(l)Co(p,!1);else{if(Kt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(w=Ta(t),w!==null){for(i.flags|=128,Co(p,!1),l=w.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=o,o=i.child;o!==null;)p=o,t=l,p.flags&=14680066,w=p.alternate,w===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=w.childLanes,p.lanes=w.lanes,p.child=w.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=w.memoizedProps,p.memoizedState=w.memoizedState,p.updateQueue=w.updateQueue,p.type=w.type,t=w.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return bt(zt,zt.current&1|2),i.child}t=t.sibling}p.tail!==null&&Ie()>ys&&(i.flags|=128,l=!0,Co(p,!1),i.lanes=4194304)}else{if(!l)if(t=Ta(w),t!==null){if(i.flags|=128,l=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Co(p,!0),p.tail===null&&p.tailMode==="hidden"&&!w.alternate&&!Ft)return fn(i),null}else 2*Ie()-p.renderingStartTime>ys&&o!==1073741824&&(i.flags|=128,l=!0,Co(p,!1),i.lanes=4194304);p.isBackwards?(w.sibling=i.child,i.child=w):(o=p.last,o!==null?o.sibling=w:i.child=w,p.last=w)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=Ie(),i.sibling=null,o=zt.current,bt(zt,l?o&1|2:o&1),i):(fn(i),null);case 22:case 23:return lu(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(On&1073741824)!==0&&(fn(i),i.subtreeFlags&6&&(i.flags|=8192)):fn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function C_(t,i){switch(_c(i),i.tag){case 1:return Cn(i.type)&&pa(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return gs(),Dt(An),Dt(cn),Pc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Rc(i),null;case 13:if(Dt(zt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));ds()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Dt(zt),null;case 4:return gs(),null;case 10:return Ec(i.type._context),null;case 22:case 23:return lu(),null;case 24:return null;default:return null}}var Ia=!1,dn=!1,R_=typeof WeakSet=="function"?WeakSet:Set,He=null;function vs(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){Vt(t,i,l)}else o.current=null}function Kc(t,i,o){try{o()}catch(l){Vt(t,i,l)}}var Gh=!1;function b_(t,i){if(lc=ea,t=Sd(),ec(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var u=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var w=0,O=-1,V=-1,ue=0,Te=0,Ae=t,Ee=null;t:for(;;){for(var ke;Ae!==o||u!==0&&Ae.nodeType!==3||(O=w+u),Ae!==p||l!==0&&Ae.nodeType!==3||(V=w+l),Ae.nodeType===3&&(w+=Ae.nodeValue.length),(ke=Ae.firstChild)!==null;)Ee=Ae,Ae=ke;for(;;){if(Ae===t)break t;if(Ee===o&&++ue===u&&(O=w),Ee===p&&++Te===l&&(V=w),(ke=Ae.nextSibling)!==null)break;Ae=Ee,Ee=Ae.parentNode}Ae=ke}o=O===-1||V===-1?null:{start:O,end:V}}else o=null}o=o||{start:0,end:0}}else o=null;for(cc={focusedElem:t,selectionRange:o},ea=!1,He=i;He!==null;)if(i=He,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,He=t;else for(;He!==null;){i=He;try{var Ge=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ge!==null){var je=Ge.memoizedProps,Wt=Ge.memoizedState,J=i.stateNode,G=J.getSnapshotBeforeUpdate(i.elementType===i.type?je:ii(i.type,je),Wt);J.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var ie=i.stateNode.containerInfo;ie.nodeType===1?ie.textContent="":ie.nodeType===9&&ie.documentElement&&ie.removeChild(ie.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Le){Vt(i,i.return,Le)}if(t=i.sibling,t!==null){t.return=i.return,He=t;break}He=i.return}return Ge=Gh,Gh=!1,Ge}function Ro(t,i,o){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var u=l=l.next;do{if((u.tag&t)===t){var p=u.destroy;u.destroy=void 0,p!==void 0&&Kc(i,o,p)}u=u.next}while(u!==l)}}function Ua(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var l=o.create;o.destroy=l()}o=o.next}while(o!==i)}}function Zc(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function Wh(t){var i=t.alternate;i!==null&&(t.alternate=null,Wh(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[di],delete i[_o],delete i[hc],delete i[f_],delete i[d_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Xh(t){return t.tag===5||t.tag===3||t.tag===4}function jh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Xh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Qc(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=da));else if(l!==4&&(t=t.child,t!==null))for(Qc(t,i,o),t=t.sibling;t!==null;)Qc(t,i,o),t=t.sibling}function Jc(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(Jc(t,i,o),t=t.sibling;t!==null;)Jc(t,i,o),t=t.sibling}var an=null,ri=!1;function ir(t,i,o){for(o=o.child;o!==null;)Yh(t,i,o),o=o.sibling}function Yh(t,i,o){if(ft&&typeof ft.onCommitFiberUnmount=="function")try{ft.onCommitFiberUnmount(Jt,o)}catch{}switch(o.tag){case 5:dn||vs(o,i);case 6:var l=an,u=ri;an=null,ir(t,i,o),an=l,ri=u,an!==null&&(ri?(t=an,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):an.removeChild(o.stateNode));break;case 18:an!==null&&(ri?(t=an,o=o.stateNode,t.nodeType===8?dc(t.parentNode,o):t.nodeType===1&&dc(t,o),so(t)):dc(an,o.stateNode));break;case 4:l=an,u=ri,an=o.stateNode.containerInfo,ri=!0,ir(t,i,o),an=l,ri=u;break;case 0:case 11:case 14:case 15:if(!dn&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){u=l=l.next;do{var p=u,w=p.destroy;p=p.tag,w!==void 0&&((p&2)!==0||(p&4)!==0)&&Kc(o,i,w),u=u.next}while(u!==l)}ir(t,i,o);break;case 1:if(!dn&&(vs(o,i),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(O){Vt(o,i,O)}ir(t,i,o);break;case 21:ir(t,i,o);break;case 22:o.mode&1?(dn=(l=dn)||o.memoizedState!==null,ir(t,i,o),dn=l):ir(t,i,o);break;default:ir(t,i,o)}}function qh(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new R_),i.forEach(function(l){var u=k_.bind(null,t,l);o.has(l)||(o.add(l),l.then(u,u))})}}function si(t,i){var o=i.deletions;if(o!==null)for(var l=0;l<o.length;l++){var u=o[l];try{var p=t,w=i,O=w;e:for(;O!==null;){switch(O.tag){case 5:an=O.stateNode,ri=!1;break e;case 3:an=O.stateNode.containerInfo,ri=!0;break e;case 4:an=O.stateNode.containerInfo,ri=!0;break e}O=O.return}if(an===null)throw Error(n(160));Yh(p,w,u),an=null,ri=!1;var V=u.alternate;V!==null&&(V.return=null),u.return=null}catch(ue){Vt(u,i,ue)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)$h(i,t),i=i.sibling}function $h(t,i){var o=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(si(i,t),mi(t),l&4){try{Ro(3,t,t.return),Ua(3,t)}catch(je){Vt(t,t.return,je)}try{Ro(5,t,t.return)}catch(je){Vt(t,t.return,je)}}break;case 1:si(i,t),mi(t),l&512&&o!==null&&vs(o,o.return);break;case 5:if(si(i,t),mi(t),l&512&&o!==null&&vs(o,o.return),t.flags&32){var u=t.stateNode;try{ye(u,"")}catch(je){Vt(t,t.return,je)}}if(l&4&&(u=t.stateNode,u!=null)){var p=t.memoizedProps,w=o!==null?o.memoizedProps:p,O=t.type,V=t.updateQueue;if(t.updateQueue=null,V!==null)try{O==="input"&&p.type==="radio"&&p.name!=null&&Be(u,p),yt(O,w);var ue=yt(O,p);for(w=0;w<V.length;w+=2){var Te=V[w],Ae=V[w+1];Te==="style"?Ue(u,Ae):Te==="dangerouslySetInnerHTML"?Ve(u,Ae):Te==="children"?ye(u,Ae):b(u,Te,Ae,ue)}switch(O){case"input":gt(u,p);break;case"textarea":ce(u,p);break;case"select":var Ee=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!p.multiple;var ke=p.value;ke!=null?S(u,!!p.multiple,ke,!1):Ee!==!!p.multiple&&(p.defaultValue!=null?S(u,!!p.multiple,p.defaultValue,!0):S(u,!!p.multiple,p.multiple?[]:"",!1))}u[_o]=p}catch(je){Vt(t,t.return,je)}}break;case 6:if(si(i,t),mi(t),l&4){if(t.stateNode===null)throw Error(n(162));u=t.stateNode,p=t.memoizedProps;try{u.nodeValue=p}catch(je){Vt(t,t.return,je)}}break;case 3:if(si(i,t),mi(t),l&4&&o!==null&&o.memoizedState.isDehydrated)try{so(i.containerInfo)}catch(je){Vt(t,t.return,je)}break;case 4:si(i,t),mi(t);break;case 13:si(i,t),mi(t),u=t.child,u.flags&8192&&(p=u.memoizedState!==null,u.stateNode.isHidden=p,!p||u.alternate!==null&&u.alternate.memoizedState!==null||(nu=Ie())),l&4&&qh(t);break;case 22:if(Te=o!==null&&o.memoizedState!==null,t.mode&1?(dn=(ue=dn)||Te,si(i,t),dn=ue):si(i,t),mi(t),l&8192){if(ue=t.memoizedState!==null,(t.stateNode.isHidden=ue)&&!Te&&(t.mode&1)!==0)for(He=t,Te=t.child;Te!==null;){for(Ae=He=Te;He!==null;){switch(Ee=He,ke=Ee.child,Ee.tag){case 0:case 11:case 14:case 15:Ro(4,Ee,Ee.return);break;case 1:vs(Ee,Ee.return);var Ge=Ee.stateNode;if(typeof Ge.componentWillUnmount=="function"){l=Ee,o=Ee.return;try{i=l,Ge.props=i.memoizedProps,Ge.state=i.memoizedState,Ge.componentWillUnmount()}catch(je){Vt(l,o,je)}}break;case 5:vs(Ee,Ee.return);break;case 22:if(Ee.memoizedState!==null){Qh(Ae);continue}}ke!==null?(ke.return=Ee,He=ke):Qh(Ae)}Te=Te.sibling}e:for(Te=null,Ae=t;;){if(Ae.tag===5){if(Te===null){Te=Ae;try{u=Ae.stateNode,ue?(p=u.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(O=Ae.stateNode,V=Ae.memoizedProps.style,w=V!=null&&V.hasOwnProperty("display")?V.display:null,O.style.display=We("display",w))}catch(je){Vt(t,t.return,je)}}}else if(Ae.tag===6){if(Te===null)try{Ae.stateNode.nodeValue=ue?"":Ae.memoizedProps}catch(je){Vt(t,t.return,je)}}else if((Ae.tag!==22&&Ae.tag!==23||Ae.memoizedState===null||Ae===t)&&Ae.child!==null){Ae.child.return=Ae,Ae=Ae.child;continue}if(Ae===t)break e;for(;Ae.sibling===null;){if(Ae.return===null||Ae.return===t)break e;Te===Ae&&(Te=null),Ae=Ae.return}Te===Ae&&(Te=null),Ae.sibling.return=Ae.return,Ae=Ae.sibling}}break;case 19:si(i,t),mi(t),l&4&&qh(t);break;case 21:break;default:si(i,t),mi(t)}}function mi(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(Xh(o)){var l=o;break e}o=o.return}throw Error(n(160))}switch(l.tag){case 5:var u=l.stateNode;l.flags&32&&(ye(u,""),l.flags&=-33);var p=jh(t);Jc(t,p,u);break;case 3:case 4:var w=l.stateNode.containerInfo,O=jh(t);Qc(t,O,w);break;default:throw Error(n(161))}}catch(V){Vt(t,t.return,V)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function P_(t,i,o){He=t,Kh(t)}function Kh(t,i,o){for(var l=(t.mode&1)!==0;He!==null;){var u=He,p=u.child;if(u.tag===22&&l){var w=u.memoizedState!==null||Ia;if(!w){var O=u.alternate,V=O!==null&&O.memoizedState!==null||dn;O=Ia;var ue=dn;if(Ia=w,(dn=V)&&!ue)for(He=u;He!==null;)w=He,V=w.child,w.tag===22&&w.memoizedState!==null?Jh(u):V!==null?(V.return=w,He=V):Jh(u);for(;p!==null;)He=p,Kh(p),p=p.sibling;He=u,Ia=O,dn=ue}Zh(t)}else(u.subtreeFlags&8772)!==0&&p!==null?(p.return=u,He=p):Zh(t)}}function Zh(t){for(;He!==null;){var i=He;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:dn||Ua(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!dn)if(o===null)l.componentDidMount();else{var u=i.elementType===i.type?o.memoizedProps:ii(i.type,o.memoizedProps);l.componentDidUpdate(u,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&Qd(i,p,l);break;case 3:var w=i.updateQueue;if(w!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Qd(i,w,o)}break;case 5:var O=i.stateNode;if(o===null&&i.flags&4){o=O;var V=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":V.autoFocus&&o.focus();break;case"img":V.src&&(o.src=V.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ue=i.alternate;if(ue!==null){var Te=ue.memoizedState;if(Te!==null){var Ae=Te.dehydrated;Ae!==null&&so(Ae)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}dn||i.flags&512&&Zc(i)}catch(Ee){Vt(i,i.return,Ee)}}if(i===t){He=null;break}if(o=i.sibling,o!==null){o.return=i.return,He=o;break}He=i.return}}function Qh(t){for(;He!==null;){var i=He;if(i===t){He=null;break}var o=i.sibling;if(o!==null){o.return=i.return,He=o;break}He=i.return}}function Jh(t){for(;He!==null;){var i=He;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Ua(4,i)}catch(V){Vt(i,o,V)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var u=i.return;try{l.componentDidMount()}catch(V){Vt(i,u,V)}}var p=i.return;try{Zc(i)}catch(V){Vt(i,p,V)}break;case 5:var w=i.return;try{Zc(i)}catch(V){Vt(i,w,V)}}}catch(V){Vt(i,i.return,V)}if(i===t){He=null;break}var O=i.sibling;if(O!==null){O.return=i.return,He=O;break}He=i.return}}var L_=Math.ceil,Fa=L.ReactCurrentDispatcher,eu=L.ReactCurrentOwner,jn=L.ReactCurrentBatchConfig,St=0,nn=null,Yt=null,ln=0,On=0,xs=Qi(0),Kt=0,bo=null,Lr=0,Oa=0,tu=0,Po=null,bn=null,nu=0,ys=1/0,Pi=null,ka=!1,iu=null,rr=null,za=!1,sr=null,Ba=0,Lo=0,ru=null,Ha=-1,Va=0;function vn(){return(St&6)!==0?Ie():Ha!==-1?Ha:Ha=Ie()}function or(t){return(t.mode&1)===0?1:(St&2)!==0&&ln!==0?ln&-ln:p_.transition!==null?(Va===0&&(Va=Zo()),Va):(t=Tt,t!==0||(t=window.event,t=t===void 0?16:td(t.type)),t)}function oi(t,i,o,l){if(50<Lo)throw Lo=0,ru=null,Error(n(185));eo(t,o,l),((St&2)===0||t!==nn)&&(t===nn&&((St&2)===0&&(Oa|=o),Kt===4&&ar(t,ln)),Pn(t,l),o===1&&St===0&&(i.mode&1)===0&&(ys=Ie()+500,ga&&er()))}function Pn(t,i){var o=t.callbackNode;Tn(t,i);var l=Nn(t,t===nn?ln:0);if(l===0)o!==null&&Ne(o),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(o!=null&&Ne(o),i===1)t.tag===0?h_(tp.bind(null,t)):Bd(tp.bind(null,t)),c_(function(){(St&6)===0&&er()}),o=null;else{switch(Yf(l)){case 1:o=st;break;case 4:o=tt;break;case 16:o=xt;break;case 536870912:o=Pt;break;default:o=xt}o=cp(o,ep.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function ep(t,i){if(Ha=-1,Va=0,(St&6)!==0)throw Error(n(327));var o=t.callbackNode;if(Ss()&&t.callbackNode!==o)return null;var l=Nn(t,t===nn?ln:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Ga(t,l);else{i=l;var u=St;St|=2;var p=ip();(nn!==t||ln!==i)&&(Pi=null,ys=Ie()+500,Nr(t,i));do try{I_();break}catch(O){np(t,O)}while(!0);Mc(),Fa.current=p,St=u,Yt!==null?i=0:(nn=null,ln=0,i=Kt)}if(i!==0){if(i===2&&(u=Er(t),u!==0&&(l=u,i=su(t,u))),i===1)throw o=bo,Nr(t,0),ar(t,l),Pn(t,Ie()),o;if(i===6)ar(t,l);else{if(u=t.current.alternate,(l&30)===0&&!D_(u)&&(i=Ga(t,l),i===2&&(p=Er(t),p!==0&&(l=p,i=su(t,p))),i===1))throw o=bo,Nr(t,0),ar(t,l),Pn(t,Ie()),o;switch(t.finishedWork=u,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Ir(t,bn,Pi);break;case 3:if(ar(t,l),(l&130023424)===l&&(i=nu+500-Ie(),10<i)){if(Nn(t,0)!==0)break;if(u=t.suspendedLanes,(u&l)!==l){vn(),t.pingedLanes|=t.suspendedLanes&u;break}t.timeoutHandle=fc(Ir.bind(null,t,bn,Pi),i);break}Ir(t,bn,Pi);break;case 4:if(ar(t,l),(l&4194240)===l)break;for(i=t.eventTimes,u=-1;0<l;){var w=31-wt(l);p=1<<w,w=i[w],w>u&&(u=w),l&=~p}if(l=u,l=Ie()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*L_(l/1960))-l,10<l){t.timeoutHandle=fc(Ir.bind(null,t,bn,Pi),l);break}Ir(t,bn,Pi);break;case 5:Ir(t,bn,Pi);break;default:throw Error(n(329))}}}return Pn(t,Ie()),t.callbackNode===o?ep.bind(null,t):null}function su(t,i){var o=Po;return t.current.memoizedState.isDehydrated&&(Nr(t,i).flags|=256),t=Ga(t,i),t!==2&&(i=bn,bn=o,i!==null&&ou(i)),t}function ou(t){bn===null?bn=t:bn.push.apply(bn,t)}function D_(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var u=o[l],p=u.getSnapshot;u=u.value;try{if(!ti(p(),u))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ar(t,i){for(i&=~tu,i&=~Oa,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-wt(i),l=1<<o;t[o]=-1,i&=~l}}function tp(t){if((St&6)!==0)throw Error(n(327));Ss();var i=Nn(t,0);if((i&1)===0)return Pn(t,Ie()),null;var o=Ga(t,i);if(t.tag!==0&&o===2){var l=Er(t);l!==0&&(i=l,o=su(t,l))}if(o===1)throw o=bo,Nr(t,0),ar(t,i),Pn(t,Ie()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Ir(t,bn,Pi),Pn(t,Ie()),null}function au(t,i){var o=St;St|=1;try{return t(i)}finally{St=o,St===0&&(ys=Ie()+500,ga&&er())}}function Dr(t){sr!==null&&sr.tag===0&&(St&6)===0&&Ss();var i=St;St|=1;var o=jn.transition,l=Tt;try{if(jn.transition=null,Tt=1,t)return t()}finally{Tt=l,jn.transition=o,St=i,(St&6)===0&&er()}}function lu(){On=xs.current,Dt(xs)}function Nr(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,l_(o)),Yt!==null)for(o=Yt.return;o!==null;){var l=o;switch(_c(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&pa();break;case 3:gs(),Dt(An),Dt(cn),Pc();break;case 5:Rc(l);break;case 4:gs();break;case 13:Dt(zt);break;case 19:Dt(zt);break;case 10:Ec(l.type._context);break;case 22:case 23:lu()}o=o.return}if(nn=t,Yt=t=lr(t.current,null),ln=On=i,Kt=0,bo=null,tu=Oa=Lr=0,bn=Po=null,Rr!==null){for(i=0;i<Rr.length;i++)if(o=Rr[i],l=o.interleaved,l!==null){o.interleaved=null;var u=l.next,p=o.pending;if(p!==null){var w=p.next;p.next=u,l.next=w}o.pending=l}Rr=null}return t}function np(t,i){do{var o=Yt;try{if(Mc(),Aa.current=Pa,Ca){for(var l=Bt.memoizedState;l!==null;){var u=l.queue;u!==null&&(u.pending=null),l=l.next}Ca=!1}if(Pr=0,tn=$t=Bt=null,Eo=!1,wo=0,eu.current=null,o===null||o.return===null){Kt=1,bo=i,Yt=null;break}e:{var p=t,w=o.return,O=o,V=i;if(i=ln,O.flags|=32768,V!==null&&typeof V=="object"&&typeof V.then=="function"){var ue=V,Te=O,Ae=Te.tag;if((Te.mode&1)===0&&(Ae===0||Ae===11||Ae===15)){var Ee=Te.alternate;Ee?(Te.updateQueue=Ee.updateQueue,Te.memoizedState=Ee.memoizedState,Te.lanes=Ee.lanes):(Te.updateQueue=null,Te.memoizedState=null)}var ke=Ch(w);if(ke!==null){ke.flags&=-257,Rh(ke,w,O,p,i),ke.mode&1&&Ah(p,ue,i),i=ke,V=ue;var Ge=i.updateQueue;if(Ge===null){var je=new Set;je.add(V),i.updateQueue=je}else Ge.add(V);break e}else{if((i&1)===0){Ah(p,ue,i),cu();break e}V=Error(n(426))}}else if(Ft&&O.mode&1){var Wt=Ch(w);if(Wt!==null){(Wt.flags&65536)===0&&(Wt.flags|=256),Rh(Wt,w,O,p,i),yc(_s(V,O));break e}}p=V=_s(V,O),Kt!==4&&(Kt=2),Po===null?Po=[p]:Po.push(p),p=w;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var J=wh(p,V,i);Zd(p,J);break e;case 1:O=V;var G=p.type,ie=p.stateNode;if((p.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||ie!==null&&typeof ie.componentDidCatch=="function"&&(rr===null||!rr.has(ie)))){p.flags|=65536,i&=-i,p.lanes|=i;var Le=Th(p,O,i);Zd(p,Le);break e}}p=p.return}while(p!==null)}sp(o)}catch(qe){i=qe,Yt===o&&o!==null&&(Yt=o=o.return);continue}break}while(!0)}function ip(){var t=Fa.current;return Fa.current=Pa,t===null?Pa:t}function cu(){(Kt===0||Kt===3||Kt===2)&&(Kt=4),nn===null||(Lr&268435455)===0&&(Oa&268435455)===0||ar(nn,ln)}function Ga(t,i){var o=St;St|=2;var l=ip();(nn!==t||ln!==i)&&(Pi=null,Nr(t,i));do try{N_();break}catch(u){np(t,u)}while(!0);if(Mc(),St=o,Fa.current=l,Yt!==null)throw Error(n(261));return nn=null,ln=0,Kt}function N_(){for(;Yt!==null;)rp(Yt)}function I_(){for(;Yt!==null&&!Oe();)rp(Yt)}function rp(t){var i=lp(t.alternate,t,On);t.memoizedProps=t.pendingProps,i===null?sp(t):Yt=i,eu.current=null}function sp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=A_(o,i,On),o!==null){Yt=o;return}}else{if(o=C_(o,i),o!==null){o.flags&=32767,Yt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Kt=6,Yt=null;return}}if(i=i.sibling,i!==null){Yt=i;return}Yt=i=t}while(i!==null);Kt===0&&(Kt=5)}function Ir(t,i,o){var l=Tt,u=jn.transition;try{jn.transition=null,Tt=1,U_(t,i,o,l)}finally{jn.transition=u,Tt=l}return null}function U_(t,i,o,l){do Ss();while(sr!==null);if((St&6)!==0)throw Error(n(327));o=t.finishedWork;var u=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var p=o.lanes|o.childLanes;if(mg(t,p),t===nn&&(Yt=nn=null,ln=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||za||(za=!0,cp(xt,function(){return Ss(),null})),p=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||p){p=jn.transition,jn.transition=null;var w=Tt;Tt=1;var O=St;St|=4,eu.current=null,b_(t,o),$h(o,t),t_(cc),ea=!!lc,cc=lc=null,t.current=o,P_(o),Xe(),St=O,Tt=w,jn.transition=p}else t.current=o;if(za&&(za=!1,sr=t,Ba=u),p=t.pendingLanes,p===0&&(rr=null),Ke(o.stateNode),Pn(t,Ie()),i!==null)for(l=t.onRecoverableError,o=0;o<i.length;o++)u=i[o],l(u.value,{componentStack:u.stack,digest:u.digest});if(ka)throw ka=!1,t=iu,iu=null,t;return(Ba&1)!==0&&t.tag!==0&&Ss(),p=t.pendingLanes,(p&1)!==0?t===ru?Lo++:(Lo=0,ru=t):Lo=0,er(),null}function Ss(){if(sr!==null){var t=Yf(Ba),i=jn.transition,o=Tt;try{if(jn.transition=null,Tt=16>t?16:t,sr===null)var l=!1;else{if(t=sr,sr=null,Ba=0,(St&6)!==0)throw Error(n(331));var u=St;for(St|=4,He=t.current;He!==null;){var p=He,w=p.child;if((He.flags&16)!==0){var O=p.deletions;if(O!==null){for(var V=0;V<O.length;V++){var ue=O[V];for(He=ue;He!==null;){var Te=He;switch(Te.tag){case 0:case 11:case 15:Ro(8,Te,p)}var Ae=Te.child;if(Ae!==null)Ae.return=Te,He=Ae;else for(;He!==null;){Te=He;var Ee=Te.sibling,ke=Te.return;if(Wh(Te),Te===ue){He=null;break}if(Ee!==null){Ee.return=ke,He=Ee;break}He=ke}}}var Ge=p.alternate;if(Ge!==null){var je=Ge.child;if(je!==null){Ge.child=null;do{var Wt=je.sibling;je.sibling=null,je=Wt}while(je!==null)}}He=p}}if((p.subtreeFlags&2064)!==0&&w!==null)w.return=p,He=w;else e:for(;He!==null;){if(p=He,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Ro(9,p,p.return)}var J=p.sibling;if(J!==null){J.return=p.return,He=J;break e}He=p.return}}var G=t.current;for(He=G;He!==null;){w=He;var ie=w.child;if((w.subtreeFlags&2064)!==0&&ie!==null)ie.return=w,He=ie;else e:for(w=G;He!==null;){if(O=He,(O.flags&2048)!==0)try{switch(O.tag){case 0:case 11:case 15:Ua(9,O)}}catch(qe){Vt(O,O.return,qe)}if(O===w){He=null;break e}var Le=O.sibling;if(Le!==null){Le.return=O.return,He=Le;break e}He=O.return}}if(St=u,er(),ft&&typeof ft.onPostCommitFiberRoot=="function")try{ft.onPostCommitFiberRoot(Jt,t)}catch{}l=!0}return l}finally{Tt=o,jn.transition=i}}return!1}function op(t,i,o){i=_s(o,i),i=wh(t,i,1),t=nr(t,i,1),i=vn(),t!==null&&(eo(t,1,i),Pn(t,i))}function Vt(t,i,o){if(t.tag===3)op(t,t,o);else for(;i!==null;){if(i.tag===3){op(i,t,o);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(rr===null||!rr.has(l))){t=_s(o,t),t=Th(i,t,1),i=nr(i,t,1),t=vn(),i!==null&&(eo(i,1,t),Pn(i,t));break}}i=i.return}}function F_(t,i,o){var l=t.pingCache;l!==null&&l.delete(i),i=vn(),t.pingedLanes|=t.suspendedLanes&o,nn===t&&(ln&o)===o&&(Kt===4||Kt===3&&(ln&130023424)===ln&&500>Ie()-nu?Nr(t,0):tu|=o),Pn(t,i)}function ap(t,i){i===0&&((t.mode&1)===0?i=1:(i=Wi,Wi<<=1,(Wi&130023424)===0&&(Wi=4194304)));var o=vn();t=Ci(t,i),t!==null&&(eo(t,i,o),Pn(t,o))}function O_(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),ap(t,o)}function k_(t,i){var o=0;switch(t.tag){case 13:var l=t.stateNode,u=t.memoizedState;u!==null&&(o=u.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),ap(t,o)}var lp;lp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||An.current)Rn=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return Rn=!1,T_(t,i,o);Rn=(t.flags&131072)!==0}else Rn=!1,Ft&&(i.flags&1048576)!==0&&Hd(i,va,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Na(t,i),t=i.pendingProps;var u=cs(i,cn.current);ms(i,o),u=Nc(null,i,l,t,u,o);var p=Ic();return i.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Cn(l)?(p=!0,ma(i)):p=!1,i.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,Ac(i),u.updater=La,i.stateNode=u,u._reactInternals=i,Bc(i,l,t,o),i=Wc(null,i,l,!0,p,o)):(i.tag=0,Ft&&p&&gc(i),_n(null,i,u,o),i=i.child),i;case 16:l=i.elementType;e:{switch(Na(t,i),t=i.pendingProps,u=l._init,l=u(l._payload),i.type=l,u=i.tag=B_(l),t=ii(l,t),u){case 0:i=Gc(null,i,l,t,o);break e;case 1:i=Ih(null,i,l,t,o);break e;case 11:i=bh(null,i,l,t,o);break e;case 14:i=Ph(null,i,l,ii(l.type,t),o);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:ii(l,u),Gc(t,i,l,u,o);case 1:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:ii(l,u),Ih(t,i,l,u,o);case 3:e:{if(Uh(i),t===null)throw Error(n(387));l=i.pendingProps,p=i.memoizedState,u=p.element,Kd(t,i),wa(i,l,null,o);var w=i.memoizedState;if(l=w.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){u=_s(Error(n(423)),i),i=Fh(t,i,l,o,u);break e}else if(l!==u){u=_s(Error(n(424)),i),i=Fh(t,i,l,o,u);break e}else for(Fn=Zi(i.stateNode.containerInfo.firstChild),Un=i,Ft=!0,ni=null,o=qd(i,null,l,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(ds(),l===u){i=bi(t,i,o);break e}_n(t,i,l,o)}i=i.child}return i;case 5:return Jd(i),t===null&&xc(i),l=i.type,u=i.pendingProps,p=t!==null?t.memoizedProps:null,w=u.children,uc(l,u)?w=null:p!==null&&uc(l,p)&&(i.flags|=32),Nh(t,i),_n(t,i,w,o),i.child;case 6:return t===null&&xc(i),null;case 13:return Oh(t,i,o);case 4:return Cc(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=hs(i,null,l,o):_n(t,i,l,o),i.child;case 11:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:ii(l,u),bh(t,i,l,u,o);case 7:return _n(t,i,i.pendingProps,o),i.child;case 8:return _n(t,i,i.pendingProps.children,o),i.child;case 12:return _n(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(l=i.type._context,u=i.pendingProps,p=i.memoizedProps,w=u.value,bt(Sa,l._currentValue),l._currentValue=w,p!==null)if(ti(p.value,w)){if(p.children===u.children&&!An.current){i=bi(t,i,o);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var O=p.dependencies;if(O!==null){w=p.child;for(var V=O.firstContext;V!==null;){if(V.context===l){if(p.tag===1){V=Ri(-1,o&-o),V.tag=2;var ue=p.updateQueue;if(ue!==null){ue=ue.shared;var Te=ue.pending;Te===null?V.next=V:(V.next=Te.next,Te.next=V),ue.pending=V}}p.lanes|=o,V=p.alternate,V!==null&&(V.lanes|=o),wc(p.return,o,i),O.lanes|=o;break}V=V.next}}else if(p.tag===10)w=p.type===i.type?null:p.child;else if(p.tag===18){if(w=p.return,w===null)throw Error(n(341));w.lanes|=o,O=w.alternate,O!==null&&(O.lanes|=o),wc(w,o,i),w=p.sibling}else w=p.child;if(w!==null)w.return=p;else for(w=p;w!==null;){if(w===i){w=null;break}if(p=w.sibling,p!==null){p.return=w.return,w=p;break}w=w.return}p=w}_n(t,i,u.children,o),i=i.child}return i;case 9:return u=i.type,l=i.pendingProps.children,ms(i,o),u=Wn(u),l=l(u),i.flags|=1,_n(t,i,l,o),i.child;case 14:return l=i.type,u=ii(l,i.pendingProps),u=ii(l.type,u),Ph(t,i,l,u,o);case 15:return Lh(t,i,i.type,i.pendingProps,o);case 17:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:ii(l,u),Na(t,i),i.tag=1,Cn(l)?(t=!0,ma(i)):t=!1,ms(i,o),Mh(i,l,u),Bc(i,l,u,o),Wc(null,i,l,!0,t,o);case 19:return zh(t,i,o);case 22:return Dh(t,i,o)}throw Error(n(156,i.tag))};function cp(t,i){return Z(t,i)}function z_(t,i,o,l){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(t,i,o,l){return new z_(t,i,o,l)}function uu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function B_(t){if(typeof t=="function")return uu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===de)return 11;if(t===ve)return 14}return 2}function lr(t,i){var o=t.alternate;return o===null?(o=Yn(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Wa(t,i,o,l,u,p){var w=2;if(l=t,typeof t=="function")uu(t)&&(w=1);else if(typeof t=="string")w=5;else e:switch(t){case F:return Ur(o.children,u,p,i);case W:w=8,u|=8;break;case D:return t=Yn(12,o,i,u|2),t.elementType=D,t.lanes=p,t;case ee:return t=Yn(13,o,i,u),t.elementType=ee,t.lanes=p,t;case _e:return t=Yn(19,o,i,u),t.elementType=_e,t.lanes=p,t;case q:return Xa(o,u,p,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case C:w=10;break e;case H:w=9;break e;case de:w=11;break e;case ve:w=14;break e;case ae:w=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Yn(w,o,i,u),i.elementType=t,i.type=l,i.lanes=p,i}function Ur(t,i,o,l){return t=Yn(7,t,l,i),t.lanes=o,t}function Xa(t,i,o,l){return t=Yn(22,t,l,i),t.elementType=q,t.lanes=o,t.stateNode={isHidden:!1},t}function fu(t,i,o){return t=Yn(6,t,null,i),t.lanes=o,t}function du(t,i,o){return i=Yn(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function H_(t,i,o,l,u){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jr(0),this.expirationTimes=Jr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jr(0),this.identifierPrefix=l,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function hu(t,i,o,l,u,p,w,O,V){return t=new H_(t,i,o,O,V),i===1?(i=1,p===!0&&(i|=8)):i=0,p=Yn(3,null,null,i),t.current=p,p.stateNode=t,p.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ac(p),t}function V_(t,i,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:k,key:l==null?null:""+l,children:t,containerInfo:i,implementation:o}}function up(t){if(!t)return Ji;t=t._reactInternals;e:{if(Mi(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Cn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(Cn(o))return kd(t,o,i)}return i}function fp(t,i,o,l,u,p,w,O,V){return t=hu(o,l,!0,t,u,p,w,O,V),t.context=up(null),o=t.current,l=vn(),u=or(o),p=Ri(l,u),p.callback=i??null,nr(o,p,u),t.current.lanes=u,eo(t,u,l),Pn(t,l),t}function ja(t,i,o,l){var u=i.current,p=vn(),w=or(u);return o=up(o),i.context===null?i.context=o:i.pendingContext=o,i=Ri(p,w),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=nr(u,i,w),t!==null&&(oi(t,u,w,p),Ea(t,u,w)),w}function Ya(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function dp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function pu(t,i){dp(t,i),(t=t.alternate)&&dp(t,i)}function G_(){return null}var hp=typeof reportError=="function"?reportError:function(t){console.error(t)};function mu(t){this._internalRoot=t}qa.prototype.render=mu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));ja(t,i,null,null)},qa.prototype.unmount=mu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Dr(function(){ja(null,t,null,null)}),i[Ei]=null}};function qa(t){this._internalRoot=t}qa.prototype.unstable_scheduleHydration=function(t){if(t){var i=Kf();t={blockedOn:null,target:t,priority:i};for(var o=0;o<qi.length&&i!==0&&i<qi[o].priority;o++);qi.splice(o,0,t),o===0&&Jf(t)}};function gu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function $a(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function pp(){}function W_(t,i,o,l,u){if(u){if(typeof l=="function"){var p=l;l=function(){var ue=Ya(w);p.call(ue)}}var w=fp(i,l,t,0,null,!1,!1,"",pp);return t._reactRootContainer=w,t[Ei]=w.current,mo(t.nodeType===8?t.parentNode:t),Dr(),w}for(;u=t.lastChild;)t.removeChild(u);if(typeof l=="function"){var O=l;l=function(){var ue=Ya(V);O.call(ue)}}var V=hu(t,0,!1,null,null,!1,!1,"",pp);return t._reactRootContainer=V,t[Ei]=V.current,mo(t.nodeType===8?t.parentNode:t),Dr(function(){ja(i,V,o,l)}),V}function Ka(t,i,o,l,u){var p=o._reactRootContainer;if(p){var w=p;if(typeof u=="function"){var O=u;u=function(){var V=Ya(w);O.call(V)}}ja(i,w,t,u)}else w=W_(o,i,t,u,l);return Ya(w)}qf=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=Rt(i.pendingLanes);o!==0&&(Bl(i,o|1),Pn(i,Ie()),(St&6)===0&&(ys=Ie()+500,er()))}break;case 13:Dr(function(){var l=Ci(t,1);if(l!==null){var u=vn();oi(l,t,1,u)}}),pu(t,1)}},Hl=function(t){if(t.tag===13){var i=Ci(t,134217728);if(i!==null){var o=vn();oi(i,t,134217728,o)}pu(t,134217728)}},$f=function(t){if(t.tag===13){var i=or(t),o=Ci(t,i);if(o!==null){var l=vn();oi(o,t,i,l)}pu(t,i)}},Kf=function(){return Tt},Zf=function(t,i){var o=Tt;try{return Tt=t,i()}finally{Tt=o}},oe=function(t,i,o){switch(i){case"input":if(gt(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var l=o[i];if(l!==t&&l.form===t.form){var u=ha(l);if(!u)throw Error(n(90));z(l),gt(l,u)}}}break;case"textarea":ce(t,o);break;case"select":i=o.value,i!=null&&S(t,!!o.multiple,i,!1)}},Ht=au,_t=Dr;var X_={usingClientEntryPoint:!1,Events:[vo,as,ha,ot,It,au]},Do={findFiberByHostInstance:wr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},j_={bundleType:Do.bundleType,version:Do.version,rendererPackageName:Do.rendererPackageName,rendererConfig:Do.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:L.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=le(t),t===null?null:t.stateNode},findFiberByHostInstance:Do.findFiberByHostInstance||G_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Za=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Za.isDisabled&&Za.supportsFiber)try{Jt=Za.inject(j_),ft=Za}catch{}}return Ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X_,Ln.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gu(i))throw Error(n(200));return V_(t,i,null,o)},Ln.createRoot=function(t,i){if(!gu(t))throw Error(n(299));var o=!1,l="",u=hp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(u=i.onRecoverableError)),i=hu(t,1,!1,null,null,o,!1,l,u),t[Ei]=i.current,mo(t.nodeType===8?t.parentNode:t),new mu(i)},Ln.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=le(i),t=t===null?null:t.stateNode,t},Ln.flushSync=function(t){return Dr(t)},Ln.hydrate=function(t,i,o){if(!$a(i))throw Error(n(200));return Ka(null,t,i,!0,o)},Ln.hydrateRoot=function(t,i,o){if(!gu(t))throw Error(n(405));var l=o!=null&&o.hydratedSources||null,u=!1,p="",w=hp;if(o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onRecoverableError!==void 0&&(w=o.onRecoverableError)),i=fp(i,null,t,1,o??null,u,!1,p,w),t[Ei]=i.current,mo(t),l)for(t=0;t<l.length;t++)o=l[t],u=o._getVersion,u=u(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,u]:i.mutableSourceEagerHydrationData.push(o,u);return new qa(i)},Ln.render=function(t,i,o){if(!$a(i))throw Error(n(200));return Ka(null,t,i,!1,o)},Ln.unmountComponentAtNode=function(t){if(!$a(t))throw Error(n(40));return t._reactRootContainer?(Dr(function(){Ka(null,null,t,!1,function(){t._reactRootContainer=null,t[Ei]=null})}),!0):!1},Ln.unstable_batchedUpdates=au,Ln.unstable_renderSubtreeIntoContainer=function(t,i,o,l){if(!$a(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Ka(t,i,o,!1,l)},Ln.version="18.3.1-next-f1338f8080-20240426",Ln}var Mp;function e0(){if(Mp)return xu.exports;Mp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),xu.exports=J_(),xu.exports}var Ep;function t0(){if(Ep)return Qa;Ep=1;var s=e0();return Qa.createRoot=s.createRoot,Qa.hydrateRoot=s.hydrateRoot,Qa}var n0=t0(),Xt=Lf();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),r0=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase()),wp=s=>{const e=r0(s);return e.charAt(0).toUpperCase()+e.slice(1)},Dm=(...s)=>s.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var s0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o0=Xt.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:a="",children:c,iconNode:d,...f},h)=>Xt.createElement("svg",{ref:h,...s0,width:e,height:e,stroke:s,strokeWidth:r?Number(n)*24/Number(e):n,className:Dm("lucide",a),...f},[...d.map(([m,g])=>Xt.createElement(m,g)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zr=(s,e)=>{const n=Xt.forwardRef(({className:r,...a},c)=>Xt.createElement(o0,{ref:c,iconNode:e,className:Dm(`lucide-${i0(wp(s))}`,`lucide-${s}`,r),...a}));return n.displayName=wp(s),n};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Tp=Zr("arrow-left",a0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l0=[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],Ap=Zr("camera",l0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=[["path",{d:"M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z",key:"1bo67w"}],["rect",{x:"3",y:"14",width:"7",height:"7",rx:"1",key:"1bkyp8"}],["circle",{cx:"17.5",cy:"17.5",r:"3.5",key:"w3z12y"}]],u0=Zr("shapes",c0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],d0=Zr("sparkles",f0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],p0=Zr("trash-2",h0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]],g0=Zr("upload",m0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],v0=Zr("x",_0);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Df="166",Ms={ROTATE:0,DOLLY:1,PAN:2},gi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},x0=0,Cp=1,y0=2,Nm=1,S0=2,Fi=3,zi=0,Mn=1,vi=2,vr=0,Gs=1,Rp=2,bp=3,Pp=4,M0=5,Gr=100,E0=101,w0=102,T0=103,A0=104,C0=200,R0=201,b0=202,P0=203,Ku=204,Zu=205,L0=206,D0=207,N0=208,I0=209,U0=210,F0=211,O0=212,k0=213,z0=214,B0=0,H0=1,V0=2,Rl=3,G0=4,W0=5,X0=6,j0=7,Im=0,Y0=1,q0=2,xr=0,$0=1,K0=2,Z0=3,Q0=4,J0=5,ev=6,tv=7,Um=300,js=301,Ys=302,Qu=303,Ju=304,Il=306,ef=1e3,jr=1001,tf=1002,Kn=1003,nv=1004,Ja=1005,Sn=1006,Mu=1007,Yr=1008,Bi=1009,Fm=1010,Om=1011,Vo=1012,Nf=1013,qr=1014,Oi=1015,Wo=1016,If=1017,Uf=1018,qs=1020,km=35902,zm=1021,Bm=1022,fi=1023,Hm=1024,Vm=1025,Ws=1026,$s=1027,Gm=1028,Ff=1029,Wm=1030,Of=1031,kf=1033,Ml=33776,El=33777,wl=33778,Tl=33779,nf=35840,rf=35841,sf=35842,of=35843,af=36196,lf=37492,cf=37496,uf=37808,ff=37809,df=37810,hf=37811,pf=37812,mf=37813,gf=37814,_f=37815,vf=37816,xf=37817,yf=37818,Sf=37819,Mf=37820,Ef=37821,Al=36492,wf=36494,Tf=36495,Xm=36283,Af=36284,Cf=36285,Rf=36286,iv=3200,rv=3201,sv=0,ov=1,_r="",$n="srgb",Sr="srgb-linear",zf="display-p3",Ul="display-p3-linear",bl="linear",Nt="srgb",Pl="rec709",Ll="p3",Es=7680,Lp=519,av=512,lv=513,cv=514,jm=515,uv=516,fv=517,dv=518,hv=519,Dp=35044,Np="300 es",ki=2e3,Dl=2001;class Qr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const c=a.indexOf(n);c!==-1&&a.splice(c,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let c=0,d=a.length;c<d;c++)a[c].call(this,e);e.target=null}}}const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ip=1234567;const zo=Math.PI/180,Go=180/Math.PI;function Zs(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(hn[s&255]+hn[s>>8&255]+hn[s>>16&255]+hn[s>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[n&63|128]+hn[n>>8&255]+"-"+hn[n>>16&255]+hn[n>>24&255]+hn[r&255]+hn[r>>8&255]+hn[r>>16&255]+hn[r>>24&255]).toLowerCase()}function mn(s,e,n){return Math.max(e,Math.min(n,s))}function Bf(s,e){return(s%e+e)%e}function pv(s,e,n,r,a){return r+(s-e)*(a-r)/(n-e)}function mv(s,e,n){return s!==e?(n-s)/(e-s):0}function Bo(s,e,n){return(1-n)*s+n*e}function gv(s,e,n,r){return Bo(s,e,1-Math.exp(-n*r))}function _v(s,e=1){return e-Math.abs(Bf(s,e*2)-e)}function vv(s,e,n){return s<=e?0:s>=n?1:(s=(s-e)/(n-e),s*s*(3-2*s))}function xv(s,e,n){return s<=e?0:s>=n?1:(s=(s-e)/(n-e),s*s*s*(s*(s*6-15)+10))}function yv(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Sv(s,e){return s+Math.random()*(e-s)}function Mv(s){return s*(.5-Math.random())}function Ev(s){s!==void 0&&(Ip=s);let e=Ip+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function wv(s){return s*zo}function Tv(s){return s*Go}function Av(s){return(s&s-1)===0&&s!==0}function Cv(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Rv(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function bv(s,e,n,r,a){const c=Math.cos,d=Math.sin,f=c(n/2),h=d(n/2),m=c((e+r)/2),g=d((e+r)/2),y=c((e-r)/2),x=d((e-r)/2),M=c((r-e)/2),T=d((r-e)/2);switch(a){case"XYX":s.set(f*g,h*y,h*x,f*m);break;case"YZY":s.set(h*x,f*g,h*y,f*m);break;case"ZXZ":s.set(h*y,h*x,f*g,f*m);break;case"XZX":s.set(f*g,h*T,h*M,f*m);break;case"YXY":s.set(h*M,f*g,h*T,f*m);break;case"ZYZ":s.set(h*T,h*M,f*g,f*m);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function Bs(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function xn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Wr={DEG2RAD:zo,RAD2DEG:Go,generateUUID:Zs,clamp:mn,euclideanModulo:Bf,mapLinear:pv,inverseLerp:mv,lerp:Bo,damp:gv,pingpong:_v,smoothstep:vv,smootherstep:xv,randInt:yv,randFloat:Sv,randFloatSpread:Mv,seededRandom:Ev,degToRad:wv,radToDeg:Tv,isPowerOfTwo:Av,ceilPowerOfTwo:Cv,floorPowerOfTwo:Rv,setQuaternionFromProperEuler:bv,normalize:xn,denormalize:Bs};class ut{constructor(e=0,n=0){ut.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(mn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),c=this.x-e.x,d=this.y-e.y;return this.x=c*r-d*a+e.x,this.y=c*a+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ht{constructor(e,n,r,a,c,d,f,h,m){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,c,d,f,h,m)}set(e,n,r,a,c,d,f,h,m){const g=this.elements;return g[0]=e,g[1]=a,g[2]=f,g[3]=n,g[4]=c,g[5]=h,g[6]=r,g[7]=d,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,c=this.elements,d=r[0],f=r[3],h=r[6],m=r[1],g=r[4],y=r[7],x=r[2],M=r[5],T=r[8],A=a[0],v=a[3],_=a[6],N=a[1],b=a[4],L=a[7],j=a[2],k=a[5],F=a[8];return c[0]=d*A+f*N+h*j,c[3]=d*v+f*b+h*k,c[6]=d*_+f*L+h*F,c[1]=m*A+g*N+y*j,c[4]=m*v+g*b+y*k,c[7]=m*_+g*L+y*F,c[2]=x*A+M*N+T*j,c[5]=x*v+M*b+T*k,c[8]=x*_+M*L+T*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],d=e[4],f=e[5],h=e[6],m=e[7],g=e[8];return n*d*g-n*f*m-r*c*g+r*f*h+a*c*m-a*d*h}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],d=e[4],f=e[5],h=e[6],m=e[7],g=e[8],y=g*d-f*m,x=f*h-g*c,M=m*c-d*h,T=n*y+r*x+a*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=y*A,e[1]=(a*m-g*r)*A,e[2]=(f*r-a*d)*A,e[3]=x*A,e[4]=(g*n-a*h)*A,e[5]=(a*c-f*n)*A,e[6]=M*A,e[7]=(r*h-m*n)*A,e[8]=(d*n-r*c)*A,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,c,d,f){const h=Math.cos(c),m=Math.sin(c);return this.set(r*h,r*m,-r*(h*d+m*f)+d+e,-a*m,a*h,-a*(-m*d+h*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(Eu.makeScale(e,n)),this}rotate(e){return this.premultiply(Eu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Eu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Eu=new ht;function Ym(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Nl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Pv(){const s=Nl("canvas");return s.style.display="block",s}const Up={};function qm(s){s in Up||(Up[s]=!0,console.warn(s))}function Lv(s,e,n){return new Promise(function(r,a){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}const Fp=new ht().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Op=new ht().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),el={[Sr]:{transfer:bl,primaries:Pl,toReference:s=>s,fromReference:s=>s},[$n]:{transfer:Nt,primaries:Pl,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Ul]:{transfer:bl,primaries:Ll,toReference:s=>s.applyMatrix3(Op),fromReference:s=>s.applyMatrix3(Fp)},[zf]:{transfer:Nt,primaries:Ll,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Op),fromReference:s=>s.applyMatrix3(Fp).convertLinearToSRGB()}},Dv=new Set([Sr,Ul]),At={enabled:!0,_workingColorSpace:Sr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Dv.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,n){if(this.enabled===!1||e===n||!e||!n)return s;const r=el[e].toReference,a=el[n].fromReference;return a(r(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return el[s].primaries},getTransfer:function(s){return s===_r?bl:el[s].transfer}};function Xs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function wu(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ws;class Nv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ws===void 0&&(ws=Nl("canvas")),ws.width=e.width,ws.height=e.height;const r=ws.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=ws}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Nl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),c=a.data;for(let d=0;d<c.length;d++)c[d]=Xs(c[d]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Xs(n[r]/255)*255):n[r]=Xs(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Iv=0;class $m{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Iv++}),this.uuid=Zs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let c;if(Array.isArray(a)){c=[];for(let d=0,f=a.length;d<f;d++)a[d].isDataTexture?c.push(Tu(a[d].image)):c.push(Tu(a[d]))}else c=Tu(a);r.url=c}return n||(e.images[this.uuid]=r),r}}function Tu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Nv.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Uv=0;class En extends Qr{constructor(e=En.DEFAULT_IMAGE,n=En.DEFAULT_MAPPING,r=jr,a=jr,c=Sn,d=Yr,f=fi,h=Bi,m=En.DEFAULT_ANISOTROPY,g=_r){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uv++}),this.uuid=Zs(),this.name="",this.source=new $m(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=c,this.minFilter=d,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=h,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Um)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ef:e.x=e.x-Math.floor(e.x);break;case jr:e.x=e.x<0?0:1;break;case tf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ef:e.y=e.y-Math.floor(e.y);break;case jr:e.y=e.y<0?0:1;break;case tf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=Um;En.DEFAULT_ANISOTROPY=1;class on{constructor(e=0,n=0,r=0,a=1){on.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,c=this.w,d=e.elements;return this.x=d[0]*n+d[4]*r+d[8]*a+d[12]*c,this.y=d[1]*n+d[5]*r+d[9]*a+d[13]*c,this.z=d[2]*n+d[6]*r+d[10]*a+d[14]*c,this.w=d[3]*n+d[7]*r+d[11]*a+d[15]*c,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,c;const h=e.elements,m=h[0],g=h[4],y=h[8],x=h[1],M=h[5],T=h[9],A=h[2],v=h[6],_=h[10];if(Math.abs(g-x)<.01&&Math.abs(y-A)<.01&&Math.abs(T-v)<.01){if(Math.abs(g+x)<.1&&Math.abs(y+A)<.1&&Math.abs(T+v)<.1&&Math.abs(m+M+_-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const b=(m+1)/2,L=(M+1)/2,j=(_+1)/2,k=(g+x)/4,F=(y+A)/4,W=(T+v)/4;return b>L&&b>j?b<.01?(r=0,a=.707106781,c=.707106781):(r=Math.sqrt(b),a=k/r,c=F/r):L>j?L<.01?(r=.707106781,a=0,c=.707106781):(a=Math.sqrt(L),r=k/a,c=W/a):j<.01?(r=.707106781,a=.707106781,c=0):(c=Math.sqrt(j),r=F/c,a=W/c),this.set(r,a,c,n),this}let N=Math.sqrt((v-T)*(v-T)+(y-A)*(y-A)+(x-g)*(x-g));return Math.abs(N)<.001&&(N=1),this.x=(v-T)/N,this.y=(y-A)/N,this.z=(x-g)/N,this.w=Math.acos((m+M+_-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Fv extends Qr{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new on(0,0,e,n),this.scissorTest=!1,this.viewport=new on(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new En(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const d=r.count;for(let f=0;f<d;f++)this.textures[f]=c.clone(),this.textures[f].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,c=this.textures.length;a<c;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new $m(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $r extends Fv{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Km extends En{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Kn,this.minFilter=Kn,this.wrapR=jr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ov extends En{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Kn,this.minFilter=Kn,this.wrapR=jr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Kr{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,c,d,f){let h=r[a+0],m=r[a+1],g=r[a+2],y=r[a+3];const x=c[d+0],M=c[d+1],T=c[d+2],A=c[d+3];if(f===0){e[n+0]=h,e[n+1]=m,e[n+2]=g,e[n+3]=y;return}if(f===1){e[n+0]=x,e[n+1]=M,e[n+2]=T,e[n+3]=A;return}if(y!==A||h!==x||m!==M||g!==T){let v=1-f;const _=h*x+m*M+g*T+y*A,N=_>=0?1:-1,b=1-_*_;if(b>Number.EPSILON){const j=Math.sqrt(b),k=Math.atan2(j,_*N);v=Math.sin(v*k)/j,f=Math.sin(f*k)/j}const L=f*N;if(h=h*v+x*L,m=m*v+M*L,g=g*v+T*L,y=y*v+A*L,v===1-f){const j=1/Math.sqrt(h*h+m*m+g*g+y*y);h*=j,m*=j,g*=j,y*=j}}e[n]=h,e[n+1]=m,e[n+2]=g,e[n+3]=y}static multiplyQuaternionsFlat(e,n,r,a,c,d){const f=r[a],h=r[a+1],m=r[a+2],g=r[a+3],y=c[d],x=c[d+1],M=c[d+2],T=c[d+3];return e[n]=f*T+g*y+h*M-m*x,e[n+1]=h*T+g*x+m*y-f*M,e[n+2]=m*T+g*M+f*x-h*y,e[n+3]=g*T-f*y-h*x-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,c=e._z,d=e._order,f=Math.cos,h=Math.sin,m=f(r/2),g=f(a/2),y=f(c/2),x=h(r/2),M=h(a/2),T=h(c/2);switch(d){case"XYZ":this._x=x*g*y+m*M*T,this._y=m*M*y-x*g*T,this._z=m*g*T+x*M*y,this._w=m*g*y-x*M*T;break;case"YXZ":this._x=x*g*y+m*M*T,this._y=m*M*y-x*g*T,this._z=m*g*T-x*M*y,this._w=m*g*y+x*M*T;break;case"ZXY":this._x=x*g*y-m*M*T,this._y=m*M*y+x*g*T,this._z=m*g*T+x*M*y,this._w=m*g*y-x*M*T;break;case"ZYX":this._x=x*g*y-m*M*T,this._y=m*M*y+x*g*T,this._z=m*g*T-x*M*y,this._w=m*g*y+x*M*T;break;case"YZX":this._x=x*g*y+m*M*T,this._y=m*M*y+x*g*T,this._z=m*g*T-x*M*y,this._w=m*g*y-x*M*T;break;case"XZY":this._x=x*g*y-m*M*T,this._y=m*M*y-x*g*T,this._z=m*g*T+x*M*y,this._w=m*g*y+x*M*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],c=n[8],d=n[1],f=n[5],h=n[9],m=n[2],g=n[6],y=n[10],x=r+f+y;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(g-h)*M,this._y=(c-m)*M,this._z=(d-a)*M}else if(r>f&&r>y){const M=2*Math.sqrt(1+r-f-y);this._w=(g-h)/M,this._x=.25*M,this._y=(a+d)/M,this._z=(c+m)/M}else if(f>y){const M=2*Math.sqrt(1+f-r-y);this._w=(c-m)/M,this._x=(a+d)/M,this._y=.25*M,this._z=(h+g)/M}else{const M=2*Math.sqrt(1+y-r-f);this._w=(d-a)/M,this._x=(c+m)/M,this._y=(h+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mn(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,c=e._z,d=e._w,f=n._x,h=n._y,m=n._z,g=n._w;return this._x=r*g+d*f+a*m-c*h,this._y=a*g+d*h+c*f-r*m,this._z=c*g+d*m+r*h-a*f,this._w=d*g-r*f-a*h-c*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,c=this._z,d=this._w;let f=d*e._w+r*e._x+a*e._y+c*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=d,this._x=r,this._y=a,this._z=c,this;const h=1-f*f;if(h<=Number.EPSILON){const M=1-n;return this._w=M*d+n*this._w,this._x=M*r+n*this._x,this._y=M*a+n*this._y,this._z=M*c+n*this._z,this.normalize(),this}const m=Math.sqrt(h),g=Math.atan2(m,f),y=Math.sin((1-n)*g)/m,x=Math.sin(n*g)/m;return this._w=d*y+this._w*x,this._x=r*y+this._x*x,this._y=a*y+this._y*x,this._z=c*y+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(e=0,n=0,r=0){Q.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(kp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(kp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*a,this.y=c[1]*n+c[4]*r+c[7]*a,this.z=c[2]*n+c[5]*r+c[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,c=e.elements,d=1/(c[3]*n+c[7]*r+c[11]*a+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*a+c[12])*d,this.y=(c[1]*n+c[5]*r+c[9]*a+c[13])*d,this.z=(c[2]*n+c[6]*r+c[10]*a+c[14])*d,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,c=e.x,d=e.y,f=e.z,h=e.w,m=2*(d*a-f*r),g=2*(f*n-c*a),y=2*(c*r-d*n);return this.x=n+h*m+d*y-f*g,this.y=r+h*g+f*m-c*y,this.z=a+h*y+c*g-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*a,this.y=c[1]*n+c[5]*r+c[9]*a,this.z=c[2]*n+c[6]*r+c[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,c=e.z,d=n.x,f=n.y,h=n.z;return this.x=a*h-c*f,this.y=c*d-r*h,this.z=r*f-a*d,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Au.copy(this).projectOnVector(e),this.sub(Au)}reflect(e){return this.sub(Au.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(mn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Au=new Q,kp=new Kr;class Xo{constructor(e=new Q(1/0,1/0,1/0),n=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ai.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ai.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ai.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,f=c.count;d<f;d++)e.isMesh===!0?e.getVertexPosition(d,ai):ai.fromBufferAttribute(c,d),ai.applyMatrix4(e.matrixWorld),this.expandByPoint(ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),tl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),tl.copy(r.boundingBox)),tl.applyMatrix4(e.matrixWorld),this.union(tl)}const a=e.children;for(let c=0,d=a.length;c<d;c++)this.expandByObject(a[c],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ai),ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Io),nl.subVectors(this.max,Io),Ts.subVectors(e.a,Io),As.subVectors(e.b,Io),Cs.subVectors(e.c,Io),ur.subVectors(As,Ts),fr.subVectors(Cs,As),Fr.subVectors(Ts,Cs);let n=[0,-ur.z,ur.y,0,-fr.z,fr.y,0,-Fr.z,Fr.y,ur.z,0,-ur.x,fr.z,0,-fr.x,Fr.z,0,-Fr.x,-ur.y,ur.x,0,-fr.y,fr.x,0,-Fr.y,Fr.x,0];return!Cu(n,Ts,As,Cs,nl)||(n=[1,0,0,0,1,0,0,0,1],!Cu(n,Ts,As,Cs,nl))?!1:(il.crossVectors(ur,fr),n=[il.x,il.y,il.z],Cu(n,Ts,As,Cs,nl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Li=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],ai=new Q,tl=new Xo,Ts=new Q,As=new Q,Cs=new Q,ur=new Q,fr=new Q,Fr=new Q,Io=new Q,nl=new Q,il=new Q,Or=new Q;function Cu(s,e,n,r,a){for(let c=0,d=s.length-3;c<=d;c+=3){Or.fromArray(s,c);const f=a.x*Math.abs(Or.x)+a.y*Math.abs(Or.y)+a.z*Math.abs(Or.z),h=e.dot(Or),m=n.dot(Or),g=r.dot(Or);if(Math.max(-Math.max(h,m,g),Math.min(h,m,g))>f)return!1}return!0}const kv=new Xo,Uo=new Q,Ru=new Q;class Hf{constructor(e=new Q,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):kv.setFromPoints(e).getCenter(r);let a=0;for(let c=0,d=e.length;c<d;c++)a=Math.max(a,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Uo.subVectors(e,this.center);const n=Uo.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Uo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ru.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Uo.copy(e.center).add(Ru)),this.expandByPoint(Uo.copy(e.center).sub(Ru))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Di=new Q,bu=new Q,rl=new Q,dr=new Q,Pu=new Q,sl=new Q,Lu=new Q;class Vf{constructor(e=new Q,n=new Q(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Di)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Di.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Di.copy(this.origin).addScaledVector(this.direction,n),Di.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){bu.copy(e).add(n).multiplyScalar(.5),rl.copy(n).sub(e).normalize(),dr.copy(this.origin).sub(bu);const c=e.distanceTo(n)*.5,d=-this.direction.dot(rl),f=dr.dot(this.direction),h=-dr.dot(rl),m=dr.lengthSq(),g=Math.abs(1-d*d);let y,x,M,T;if(g>0)if(y=d*h-f,x=d*f-h,T=c*g,y>=0)if(x>=-T)if(x<=T){const A=1/g;y*=A,x*=A,M=y*(y+d*x+2*f)+x*(d*y+x+2*h)+m}else x=c,y=Math.max(0,-(d*x+f)),M=-y*y+x*(x+2*h)+m;else x=-c,y=Math.max(0,-(d*x+f)),M=-y*y+x*(x+2*h)+m;else x<=-T?(y=Math.max(0,-(-d*c+f)),x=y>0?-c:Math.min(Math.max(-c,-h),c),M=-y*y+x*(x+2*h)+m):x<=T?(y=0,x=Math.min(Math.max(-c,-h),c),M=x*(x+2*h)+m):(y=Math.max(0,-(d*c+f)),x=y>0?c:Math.min(Math.max(-c,-h),c),M=-y*y+x*(x+2*h)+m);else x=d>0?-c:c,y=Math.max(0,-(d*x+f)),M=-y*y+x*(x+2*h)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,y),a&&a.copy(bu).addScaledVector(rl,x),M}intersectSphere(e,n){Di.subVectors(e.center,this.origin);const r=Di.dot(this.direction),a=Di.dot(Di)-r*r,c=e.radius*e.radius;if(a>c)return null;const d=Math.sqrt(c-a),f=r-d,h=r+d;return h<0?null:f<0?this.at(h,n):this.at(f,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,c,d,f,h;const m=1/this.direction.x,g=1/this.direction.y,y=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,a=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,a=(e.min.x-x.x)*m),g>=0?(c=(e.min.y-x.y)*g,d=(e.max.y-x.y)*g):(c=(e.max.y-x.y)*g,d=(e.min.y-x.y)*g),r>d||c>a||((c>r||isNaN(r))&&(r=c),(d<a||isNaN(a))&&(a=d),y>=0?(f=(e.min.z-x.z)*y,h=(e.max.z-x.z)*y):(f=(e.max.z-x.z)*y,h=(e.min.z-x.z)*y),r>h||f>a)||((f>r||r!==r)&&(r=f),(h<a||a!==a)&&(a=h),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Di)!==null}intersectTriangle(e,n,r,a,c){Pu.subVectors(n,e),sl.subVectors(r,e),Lu.crossVectors(Pu,sl);let d=this.direction.dot(Lu),f;if(d>0){if(a)return null;f=1}else if(d<0)f=-1,d=-d;else return null;dr.subVectors(this.origin,e);const h=f*this.direction.dot(sl.crossVectors(dr,sl));if(h<0)return null;const m=f*this.direction.dot(Pu.cross(dr));if(m<0||h+m>d)return null;const g=-f*dr.dot(Lu);return g<0?null:this.at(g/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jt{constructor(e,n,r,a,c,d,f,h,m,g,y,x,M,T,A,v){jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,c,d,f,h,m,g,y,x,M,T,A,v)}set(e,n,r,a,c,d,f,h,m,g,y,x,M,T,A,v){const _=this.elements;return _[0]=e,_[4]=n,_[8]=r,_[12]=a,_[1]=c,_[5]=d,_[9]=f,_[13]=h,_[2]=m,_[6]=g,_[10]=y,_[14]=x,_[3]=M,_[7]=T,_[11]=A,_[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/Rs.setFromMatrixColumn(e,0).length(),c=1/Rs.setFromMatrixColumn(e,1).length(),d=1/Rs.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*d,n[9]=r[9]*d,n[10]=r[10]*d,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,c=e.z,d=Math.cos(r),f=Math.sin(r),h=Math.cos(a),m=Math.sin(a),g=Math.cos(c),y=Math.sin(c);if(e.order==="XYZ"){const x=d*g,M=d*y,T=f*g,A=f*y;n[0]=h*g,n[4]=-h*y,n[8]=m,n[1]=M+T*m,n[5]=x-A*m,n[9]=-f*h,n[2]=A-x*m,n[6]=T+M*m,n[10]=d*h}else if(e.order==="YXZ"){const x=h*g,M=h*y,T=m*g,A=m*y;n[0]=x+A*f,n[4]=T*f-M,n[8]=d*m,n[1]=d*y,n[5]=d*g,n[9]=-f,n[2]=M*f-T,n[6]=A+x*f,n[10]=d*h}else if(e.order==="ZXY"){const x=h*g,M=h*y,T=m*g,A=m*y;n[0]=x-A*f,n[4]=-d*y,n[8]=T+M*f,n[1]=M+T*f,n[5]=d*g,n[9]=A-x*f,n[2]=-d*m,n[6]=f,n[10]=d*h}else if(e.order==="ZYX"){const x=d*g,M=d*y,T=f*g,A=f*y;n[0]=h*g,n[4]=T*m-M,n[8]=x*m+A,n[1]=h*y,n[5]=A*m+x,n[9]=M*m-T,n[2]=-m,n[6]=f*h,n[10]=d*h}else if(e.order==="YZX"){const x=d*h,M=d*m,T=f*h,A=f*m;n[0]=h*g,n[4]=A-x*y,n[8]=T*y+M,n[1]=y,n[5]=d*g,n[9]=-f*g,n[2]=-m*g,n[6]=M*y+T,n[10]=x-A*y}else if(e.order==="XZY"){const x=d*h,M=d*m,T=f*h,A=f*m;n[0]=h*g,n[4]=-y,n[8]=m*g,n[1]=x*y+A,n[5]=d*g,n[9]=M*y-T,n[2]=T*y-M,n[6]=f*g,n[10]=A*y+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zv,e,Bv)}lookAt(e,n,r){const a=this.elements;return kn.subVectors(e,n),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),hr.crossVectors(r,kn),hr.lengthSq()===0&&(Math.abs(r.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),hr.crossVectors(r,kn)),hr.normalize(),ol.crossVectors(kn,hr),a[0]=hr.x,a[4]=ol.x,a[8]=kn.x,a[1]=hr.y,a[5]=ol.y,a[9]=kn.y,a[2]=hr.z,a[6]=ol.z,a[10]=kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,c=this.elements,d=r[0],f=r[4],h=r[8],m=r[12],g=r[1],y=r[5],x=r[9],M=r[13],T=r[2],A=r[6],v=r[10],_=r[14],N=r[3],b=r[7],L=r[11],j=r[15],k=a[0],F=a[4],W=a[8],D=a[12],C=a[1],H=a[5],de=a[9],ee=a[13],_e=a[2],ve=a[6],ae=a[10],q=a[14],U=a[3],re=a[7],se=a[11],I=a[15];return c[0]=d*k+f*C+h*_e+m*U,c[4]=d*F+f*H+h*ve+m*re,c[8]=d*W+f*de+h*ae+m*se,c[12]=d*D+f*ee+h*q+m*I,c[1]=g*k+y*C+x*_e+M*U,c[5]=g*F+y*H+x*ve+M*re,c[9]=g*W+y*de+x*ae+M*se,c[13]=g*D+y*ee+x*q+M*I,c[2]=T*k+A*C+v*_e+_*U,c[6]=T*F+A*H+v*ve+_*re,c[10]=T*W+A*de+v*ae+_*se,c[14]=T*D+A*ee+v*q+_*I,c[3]=N*k+b*C+L*_e+j*U,c[7]=N*F+b*H+L*ve+j*re,c[11]=N*W+b*de+L*ae+j*se,c[15]=N*D+b*ee+L*q+j*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],c=e[12],d=e[1],f=e[5],h=e[9],m=e[13],g=e[2],y=e[6],x=e[10],M=e[14],T=e[3],A=e[7],v=e[11],_=e[15];return T*(+c*h*y-a*m*y-c*f*x+r*m*x+a*f*M-r*h*M)+A*(+n*h*M-n*m*x+c*d*x-a*d*M+a*m*g-c*h*g)+v*(+n*m*y-n*f*M-c*d*y+r*d*M+c*f*g-r*m*g)+_*(-a*f*g-n*h*y+n*f*x+a*d*y-r*d*x+r*h*g)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],d=e[4],f=e[5],h=e[6],m=e[7],g=e[8],y=e[9],x=e[10],M=e[11],T=e[12],A=e[13],v=e[14],_=e[15],N=y*v*m-A*x*m+A*h*M-f*v*M-y*h*_+f*x*_,b=T*x*m-g*v*m-T*h*M+d*v*M+g*h*_-d*x*_,L=g*A*m-T*y*m+T*f*M-d*A*M-g*f*_+d*y*_,j=T*y*h-g*A*h-T*f*x+d*A*x+g*f*v-d*y*v,k=n*N+r*b+a*L+c*j;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/k;return e[0]=N*F,e[1]=(A*x*c-y*v*c-A*a*M+r*v*M+y*a*_-r*x*_)*F,e[2]=(f*v*c-A*h*c+A*a*m-r*v*m-f*a*_+r*h*_)*F,e[3]=(y*h*c-f*x*c-y*a*m+r*x*m+f*a*M-r*h*M)*F,e[4]=b*F,e[5]=(g*v*c-T*x*c+T*a*M-n*v*M-g*a*_+n*x*_)*F,e[6]=(T*h*c-d*v*c-T*a*m+n*v*m+d*a*_-n*h*_)*F,e[7]=(d*x*c-g*h*c+g*a*m-n*x*m-d*a*M+n*h*M)*F,e[8]=L*F,e[9]=(T*y*c-g*A*c-T*r*M+n*A*M+g*r*_-n*y*_)*F,e[10]=(d*A*c-T*f*c+T*r*m-n*A*m-d*r*_+n*f*_)*F,e[11]=(g*f*c-d*y*c-g*r*m+n*y*m+d*r*M-n*f*M)*F,e[12]=j*F,e[13]=(g*A*a-T*y*a+T*r*x-n*A*x-g*r*v+n*y*v)*F,e[14]=(T*f*a-d*A*a-T*r*h+n*A*h+d*r*v-n*f*v)*F,e[15]=(d*y*a-g*f*a+g*r*h-n*y*h-d*r*x+n*f*x)*F,this}scale(e){const n=this.elements,r=e.x,a=e.y,c=e.z;return n[0]*=r,n[4]*=a,n[8]*=c,n[1]*=r,n[5]*=a,n[9]*=c,n[2]*=r,n[6]*=a,n[10]*=c,n[3]*=r,n[7]*=a,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),c=1-r,d=e.x,f=e.y,h=e.z,m=c*d,g=c*f;return this.set(m*d+r,m*f-a*h,m*h+a*f,0,m*f+a*h,g*f+r,g*h-a*d,0,m*h-a*f,g*h+a*d,c*h*h+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,c,d){return this.set(1,r,c,0,e,1,d,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,c=n._x,d=n._y,f=n._z,h=n._w,m=c+c,g=d+d,y=f+f,x=c*m,M=c*g,T=c*y,A=d*g,v=d*y,_=f*y,N=h*m,b=h*g,L=h*y,j=r.x,k=r.y,F=r.z;return a[0]=(1-(A+_))*j,a[1]=(M+L)*j,a[2]=(T-b)*j,a[3]=0,a[4]=(M-L)*k,a[5]=(1-(x+_))*k,a[6]=(v+N)*k,a[7]=0,a[8]=(T+b)*F,a[9]=(v-N)*F,a[10]=(1-(x+A))*F,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let c=Rs.set(a[0],a[1],a[2]).length();const d=Rs.set(a[4],a[5],a[6]).length(),f=Rs.set(a[8],a[9],a[10]).length();this.determinant()<0&&(c=-c),e.x=a[12],e.y=a[13],e.z=a[14],li.copy(this);const m=1/c,g=1/d,y=1/f;return li.elements[0]*=m,li.elements[1]*=m,li.elements[2]*=m,li.elements[4]*=g,li.elements[5]*=g,li.elements[6]*=g,li.elements[8]*=y,li.elements[9]*=y,li.elements[10]*=y,n.setFromRotationMatrix(li),r.x=c,r.y=d,r.z=f,this}makePerspective(e,n,r,a,c,d,f=ki){const h=this.elements,m=2*c/(n-e),g=2*c/(r-a),y=(n+e)/(n-e),x=(r+a)/(r-a);let M,T;if(f===ki)M=-(d+c)/(d-c),T=-2*d*c/(d-c);else if(f===Dl)M=-d/(d-c),T=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=m,h[4]=0,h[8]=y,h[12]=0,h[1]=0,h[5]=g,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=T,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,r,a,c,d,f=ki){const h=this.elements,m=1/(n-e),g=1/(r-a),y=1/(d-c),x=(n+e)*m,M=(r+a)*g;let T,A;if(f===ki)T=(d+c)*y,A=-2*y;else if(f===Dl)T=c*y,A=-1*y;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=2*m,h[4]=0,h[8]=0,h[12]=-x,h[1]=0,h[5]=2*g,h[9]=0,h[13]=-M,h[2]=0,h[6]=0,h[10]=A,h[14]=-T,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Rs=new Q,li=new jt,zv=new Q(0,0,0),Bv=new Q(1,1,1),hr=new Q,ol=new Q,kn=new Q,zp=new jt,Bp=new Kr;class Qn{constructor(e=0,n=0,r=0,a=Qn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,c=a[0],d=a[4],f=a[8],h=a[1],m=a[5],g=a[9],y=a[2],x=a[6],M=a[10];switch(n){case"XYZ":this._y=Math.asin(mn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-mn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,M),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-y,c),this._z=0);break;case"ZXY":this._x=Math.asin(mn(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-y,M),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(h,c));break;case"ZYX":this._y=Math.asin(-mn(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(h,c)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(mn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-y,c)):(this._x=0,this._y=Math.atan2(f,M));break;case"XZY":this._z=Math.asin(-mn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(f,c)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return zp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zp,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Bp.setFromEuler(this),this.setFromQuaternion(Bp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qn.DEFAULT_ORDER="XYZ";class Gf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Hv=0;const Hp=new Q,bs=new Kr,Ni=new jt,al=new Q,Fo=new Q,Vv=new Q,Gv=new Kr,Vp=new Q(1,0,0),Gp=new Q(0,1,0),Wp=new Q(0,0,1),Xp={type:"added"},Wv={type:"removed"},Ps={type:"childadded",child:null},Du={type:"childremoved",child:null};class Hn extends Qr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hv++}),this.uuid=Zs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Hn.DEFAULT_UP.clone();const e=new Q,n=new Qn,r=new Kr,a=new Q(1,1,1);function c(){r.setFromEuler(n,!1)}function d(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new jt},normalMatrix:{value:new ht}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=Hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return bs.setFromAxisAngle(e,n),this.quaternion.multiply(bs),this}rotateOnWorldAxis(e,n){return bs.setFromAxisAngle(e,n),this.quaternion.premultiply(bs),this}rotateX(e){return this.rotateOnAxis(Vp,e)}rotateY(e){return this.rotateOnAxis(Gp,e)}rotateZ(e){return this.rotateOnAxis(Wp,e)}translateOnAxis(e,n){return Hp.copy(e).applyQuaternion(this.quaternion),this.position.add(Hp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Vp,e)}translateY(e){return this.translateOnAxis(Gp,e)}translateZ(e){return this.translateOnAxis(Wp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ni.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?al.copy(e):al.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ni.lookAt(Fo,al,this.up):Ni.lookAt(al,Fo,this.up),this.quaternion.setFromRotationMatrix(Ni),a&&(Ni.extractRotation(a.matrixWorld),bs.setFromRotationMatrix(Ni),this.quaternion.premultiply(bs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xp),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Wv),Du.child=e,this.dispatchEvent(Du),Du.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xp),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const d=this.children[r].getObjectByProperty(e,n);if(d!==void 0)return d}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let c=0,d=a.length;c<d;c++)a[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,e,Vv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,Gv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let c=0,d=a.length;c<d;c++)a[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function c(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=c(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let m=0,g=h.length;m<g;m++){const y=h[m];c(e.shapes,y)}else c(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,m=this.material.length;h<m;h++)f.push(c(e.materials,this.material[h]));a.material=f}else a.material=c(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];a.animations.push(c(e.animations,h))}}if(n){const f=d(e.geometries),h=d(e.materials),m=d(e.textures),g=d(e.images),y=d(e.shapes),x=d(e.skeletons),M=d(e.animations),T=d(e.nodes);f.length>0&&(r.geometries=f),h.length>0&&(r.materials=h),m.length>0&&(r.textures=m),g.length>0&&(r.images=g),y.length>0&&(r.shapes=y),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),T.length>0&&(r.nodes=T)}return r.object=a,r;function d(f){const h=[];for(const m in f){const g=f[m];delete g.metadata,h.push(g)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}Hn.DEFAULT_UP=new Q(0,1,0);Hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ci=new Q,Ii=new Q,Nu=new Q,Ui=new Q,Ls=new Q,Ds=new Q,jp=new Q,Iu=new Q,Uu=new Q,Fu=new Q;class ui{constructor(e=new Q,n=new Q,r=new Q){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),ci.subVectors(e,n),a.cross(ci);const c=a.lengthSq();return c>0?a.multiplyScalar(1/Math.sqrt(c)):a.set(0,0,0)}static getBarycoord(e,n,r,a,c){ci.subVectors(a,n),Ii.subVectors(r,n),Nu.subVectors(e,n);const d=ci.dot(ci),f=ci.dot(Ii),h=ci.dot(Nu),m=Ii.dot(Ii),g=Ii.dot(Nu),y=d*m-f*f;if(y===0)return c.set(0,0,0),null;const x=1/y,M=(m*h-f*g)*x,T=(d*g-f*h)*x;return c.set(1-M-T,T,M)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Ui)===null?!1:Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getInterpolation(e,n,r,a,c,d,f,h){return this.getBarycoord(e,n,r,a,Ui)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(c,Ui.x),h.addScaledVector(d,Ui.y),h.addScaledVector(f,Ui.z),h)}static isFrontFacing(e,n,r,a){return ci.subVectors(r,n),Ii.subVectors(e,n),ci.cross(Ii).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ci.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),ci.cross(Ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ui.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,c){return ui.getInterpolation(e,this.a,this.b,this.c,n,r,a,c)}containsPoint(e){return ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,c=this.c;let d,f;Ls.subVectors(a,r),Ds.subVectors(c,r),Iu.subVectors(e,r);const h=Ls.dot(Iu),m=Ds.dot(Iu);if(h<=0&&m<=0)return n.copy(r);Uu.subVectors(e,a);const g=Ls.dot(Uu),y=Ds.dot(Uu);if(g>=0&&y<=g)return n.copy(a);const x=h*y-g*m;if(x<=0&&h>=0&&g<=0)return d=h/(h-g),n.copy(r).addScaledVector(Ls,d);Fu.subVectors(e,c);const M=Ls.dot(Fu),T=Ds.dot(Fu);if(T>=0&&M<=T)return n.copy(c);const A=M*m-h*T;if(A<=0&&m>=0&&T<=0)return f=m/(m-T),n.copy(r).addScaledVector(Ds,f);const v=g*T-M*y;if(v<=0&&y-g>=0&&M-T>=0)return jp.subVectors(c,a),f=(y-g)/(y-g+(M-T)),n.copy(a).addScaledVector(jp,f);const _=1/(v+A+x);return d=A*_,f=x*_,n.copy(r).addScaledVector(Ls,d).addScaledVector(Ds,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Zm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pr={h:0,s:0,l:0},ll={h:0,s:0,l:0};function Ou(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class Ct{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=$n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=At.workingColorSpace){return this.r=e,this.g=n,this.b=r,At.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=At.workingColorSpace){if(e=Bf(e,1),n=mn(n,0,1),r=mn(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,d=2*r-c;this.r=Ou(d,c,e+1/3),this.g=Ou(d,c,e),this.b=Ou(d,c,e-1/3)}return At.toWorkingColorSpace(this,a),this}setStyle(e,n=$n){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=a[1],f=a[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=a[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(d===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=$n){const r=Zm[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xs(e.r),this.g=Xs(e.g),this.b=Xs(e.b),this}copyLinearToSRGB(e){return this.r=wu(e.r),this.g=wu(e.g),this.b=wu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$n){return At.fromWorkingColorSpace(pn.copy(this),e),Math.round(mn(pn.r*255,0,255))*65536+Math.round(mn(pn.g*255,0,255))*256+Math.round(mn(pn.b*255,0,255))}getHexString(e=$n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=At.workingColorSpace){At.fromWorkingColorSpace(pn.copy(this),n);const r=pn.r,a=pn.g,c=pn.b,d=Math.max(r,a,c),f=Math.min(r,a,c);let h,m;const g=(f+d)/2;if(f===d)h=0,m=0;else{const y=d-f;switch(m=g<=.5?y/(d+f):y/(2-d-f),d){case r:h=(a-c)/y+(a<c?6:0);break;case a:h=(c-r)/y+2;break;case c:h=(r-a)/y+4;break}h/=6}return e.h=h,e.s=m,e.l=g,e}getRGB(e,n=At.workingColorSpace){return At.fromWorkingColorSpace(pn.copy(this),n),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=$n){At.fromWorkingColorSpace(pn.copy(this),e);const n=pn.r,r=pn.g,a=pn.b;return e!==$n?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(pr),this.setHSL(pr.h+e,pr.s+n,pr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(pr),e.getHSL(ll);const r=Bo(pr.h,ll.h,n),a=Bo(pr.s,ll.s,n),c=Bo(pr.l,ll.l,n);return this.setHSL(r,a,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*a,this.g=c[1]*n+c[4]*r+c[7]*a,this.b=c[2]*n+c[5]*r+c[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pn=new Ct;Ct.NAMES=Zm;let Xv=0;class Fl extends Qr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xv++}),this.uuid=Zs(),this.name="",this.type="Material",this.blending=Gs,this.side=zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ku,this.blendDst=Zu,this.blendEquation=Gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=Rl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Es,this.stencilZFail=Es,this.stencilZPass=Es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Gs&&(r.blending=this.blending),this.side!==zi&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Ku&&(r.blendSrc=this.blendSrc),this.blendDst!==Zu&&(r.blendDst=this.blendDst),this.blendEquation!==Gr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Rl&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Es&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Es&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Es&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(c){const d=[];for(const f in c){const h=c[f];delete h.metadata,d.push(h)}return d}if(n){const c=a(e.textures),d=a(e.images);c.length>0&&(r.textures=c),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let c=0;c!==a;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class Ol extends Fl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=Im,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const qt=new Q,cl=new ut;class xi{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Dp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return qm("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,c=this.itemSize;a<c;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)cl.fromBufferAttribute(this,n),cl.applyMatrix3(e),this.setXY(n,cl.x,cl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)qt.fromBufferAttribute(this,n),qt.applyMatrix3(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)qt.fromBufferAttribute(this,n),qt.applyMatrix4(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)qt.fromBufferAttribute(this,n),qt.applyNormalMatrix(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)qt.fromBufferAttribute(this,n),qt.transformDirection(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Bs(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=xn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Bs(n,this.array)),n}setX(e,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Bs(n,this.array)),n}setY(e,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Bs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Bs(n,this.array)),n}setW(e,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=xn(n,this.array),r=xn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=xn(n,this.array),r=xn(r,this.array),a=xn(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,c){return e*=this.itemSize,this.normalized&&(n=xn(n,this.array),r=xn(r,this.array),a=xn(a,this.array),c=xn(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Dp&&(e.usage=this.usage),e}}class Qm extends xi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Jm extends xi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Jn extends xi{constructor(e,n,r){super(new Float32Array(e),n,r)}}let jv=0;const qn=new jt,ku=new Hn,Ns=new Q,zn=new Xo,Oo=new Xo,sn=new Q;class Hi extends Qr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jv++}),this.uuid=Zs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ym(e)?Jm:Qm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ht().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qn.makeRotationFromQuaternion(e),this.applyMatrix4(qn),this}rotateX(e){return qn.makeRotationX(e),this.applyMatrix4(qn),this}rotateY(e){return qn.makeRotationY(e),this.applyMatrix4(qn),this}rotateZ(e){return qn.makeRotationZ(e),this.applyMatrix4(qn),this}translate(e,n,r){return qn.makeTranslation(e,n,r),this.applyMatrix4(qn),this}scale(e,n,r){return qn.makeScale(e,n,r),this.applyMatrix4(qn),this}lookAt(e){return ku.lookAt(e),ku.updateMatrix(),this.applyMatrix4(ku.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ns).negate(),this.translate(Ns.x,Ns.y,Ns.z),this}setFromPoints(e){const n=[];for(let r=0,a=e.length;r<a;r++){const c=e[r];n.push(c.x,c.y,c.z||0)}return this.setAttribute("position",new Jn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const c=n[r];zn.setFromBufferAttribute(c),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const r=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),n)for(let c=0,d=n.length;c<d;c++){const f=n[c];Oo.setFromBufferAttribute(f),this.morphTargetsRelative?(sn.addVectors(zn.min,Oo.min),zn.expandByPoint(sn),sn.addVectors(zn.max,Oo.max),zn.expandByPoint(sn)):(zn.expandByPoint(Oo.min),zn.expandByPoint(Oo.max))}zn.getCenter(r);let a=0;for(let c=0,d=e.count;c<d;c++)sn.fromBufferAttribute(e,c),a=Math.max(a,r.distanceToSquared(sn));if(n)for(let c=0,d=n.length;c<d;c++){const f=n[c],h=this.morphTargetsRelative;for(let m=0,g=f.count;m<g;m++)sn.fromBufferAttribute(f,m),h&&(Ns.fromBufferAttribute(e,m),sn.add(Ns)),a=Math.max(a,r.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xi(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),f=[],h=[];for(let W=0;W<r.count;W++)f[W]=new Q,h[W]=new Q;const m=new Q,g=new Q,y=new Q,x=new ut,M=new ut,T=new ut,A=new Q,v=new Q;function _(W,D,C){m.fromBufferAttribute(r,W),g.fromBufferAttribute(r,D),y.fromBufferAttribute(r,C),x.fromBufferAttribute(c,W),M.fromBufferAttribute(c,D),T.fromBufferAttribute(c,C),g.sub(m),y.sub(m),M.sub(x),T.sub(x);const H=1/(M.x*T.y-T.x*M.y);isFinite(H)&&(A.copy(g).multiplyScalar(T.y).addScaledVector(y,-M.y).multiplyScalar(H),v.copy(y).multiplyScalar(M.x).addScaledVector(g,-T.x).multiplyScalar(H),f[W].add(A),f[D].add(A),f[C].add(A),h[W].add(v),h[D].add(v),h[C].add(v))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let W=0,D=N.length;W<D;++W){const C=N[W],H=C.start,de=C.count;for(let ee=H,_e=H+de;ee<_e;ee+=3)_(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const b=new Q,L=new Q,j=new Q,k=new Q;function F(W){j.fromBufferAttribute(a,W),k.copy(j);const D=f[W];b.copy(D),b.sub(j.multiplyScalar(j.dot(D))).normalize(),L.crossVectors(k,D);const H=L.dot(h[W])<0?-1:1;d.setXYZW(W,b.x,b.y,b.z,H)}for(let W=0,D=N.length;W<D;++W){const C=N[W],H=C.start,de=C.count;for(let ee=H,_e=H+de;ee<_e;ee+=3)F(e.getX(ee+0)),F(e.getX(ee+1)),F(e.getX(ee+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new xi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const a=new Q,c=new Q,d=new Q,f=new Q,h=new Q,m=new Q,g=new Q,y=new Q;if(e)for(let x=0,M=e.count;x<M;x+=3){const T=e.getX(x+0),A=e.getX(x+1),v=e.getX(x+2);a.fromBufferAttribute(n,T),c.fromBufferAttribute(n,A),d.fromBufferAttribute(n,v),g.subVectors(d,c),y.subVectors(a,c),g.cross(y),f.fromBufferAttribute(r,T),h.fromBufferAttribute(r,A),m.fromBufferAttribute(r,v),f.add(g),h.add(g),m.add(g),r.setXYZ(T,f.x,f.y,f.z),r.setXYZ(A,h.x,h.y,h.z),r.setXYZ(v,m.x,m.y,m.z)}else for(let x=0,M=n.count;x<M;x+=3)a.fromBufferAttribute(n,x+0),c.fromBufferAttribute(n,x+1),d.fromBufferAttribute(n,x+2),g.subVectors(d,c),y.subVectors(a,c),g.cross(y),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)sn.fromBufferAttribute(e,n),sn.normalize(),e.setXYZ(n,sn.x,sn.y,sn.z)}toNonIndexed(){function e(f,h){const m=f.array,g=f.itemSize,y=f.normalized,x=new m.constructor(h.length*g);let M=0,T=0;for(let A=0,v=h.length;A<v;A++){f.isInterleavedBufferAttribute?M=h[A]*f.data.stride+f.offset:M=h[A]*g;for(let _=0;_<g;_++)x[T++]=m[M++]}return new xi(x,g,y)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Hi,r=this.index.array,a=this.attributes;for(const f in a){const h=a[f],m=e(h,r);n.setAttribute(f,m)}const c=this.morphAttributes;for(const f in c){const h=[],m=c[f];for(let g=0,y=m.length;g<y;g++){const x=m[g],M=e(x,r);h.push(M)}n.morphAttributes[f]=h}n.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let f=0,h=d.length;f<h;f++){const m=d[f];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const m in h)h[m]!==void 0&&(e[m]=h[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const h in r){const m=r[h];e.data.attributes[h]=m.toJSON(e.data)}const a={};let c=!1;for(const h in this.morphAttributes){const m=this.morphAttributes[h],g=[];for(let y=0,x=m.length;y<x;y++){const M=m[y];g.push(M.toJSON(e.data))}g.length>0&&(a[h]=g,c=!0)}c&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const m in a){const g=a[m];this.setAttribute(m,g.clone(n))}const c=e.morphAttributes;for(const m in c){const g=[],y=c[m];for(let x=0,M=y.length;x<M;x++)g.push(y[x].clone(n));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,g=d.length;m<g;m++){const y=d[m];this.addGroup(y.start,y.count,y.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Yp=new jt,kr=new Vf,ul=new Hf,qp=new Q,Is=new Q,Us=new Q,Fs=new Q,zu=new Q,fl=new Q,dl=new ut,hl=new ut,pl=new ut,$p=new Q,Kp=new Q,Zp=new Q,ml=new Q,gl=new Q;class Zn extends Hn{constructor(e=new Hi,n=new Ol){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=a.length;c<d;c++){const f=a[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,c=r.morphAttributes.position,d=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(c&&f){fl.set(0,0,0);for(let h=0,m=c.length;h<m;h++){const g=f[h],y=c[h];g!==0&&(zu.fromBufferAttribute(y,e),d?fl.addScaledVector(zu,g):fl.addScaledVector(zu.sub(n),g))}n.add(fl)}return n}raycast(e,n){const r=this.geometry,a=this.material,c=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ul.copy(r.boundingSphere),ul.applyMatrix4(c),kr.copy(e.ray).recast(e.near),!(ul.containsPoint(kr.origin)===!1&&(kr.intersectSphere(ul,qp)===null||kr.origin.distanceToSquared(qp)>(e.far-e.near)**2))&&(Yp.copy(c).invert(),kr.copy(e.ray).applyMatrix4(Yp),!(r.boundingBox!==null&&kr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,kr)))}_computeIntersections(e,n,r){let a;const c=this.geometry,d=this.material,f=c.index,h=c.attributes.position,m=c.attributes.uv,g=c.attributes.uv1,y=c.attributes.normal,x=c.groups,M=c.drawRange;if(f!==null)if(Array.isArray(d))for(let T=0,A=x.length;T<A;T++){const v=x[T],_=d[v.materialIndex],N=Math.max(v.start,M.start),b=Math.min(f.count,Math.min(v.start+v.count,M.start+M.count));for(let L=N,j=b;L<j;L+=3){const k=f.getX(L),F=f.getX(L+1),W=f.getX(L+2);a=_l(this,_,e,r,m,g,y,k,F,W),a&&(a.faceIndex=Math.floor(L/3),a.face.materialIndex=v.materialIndex,n.push(a))}}else{const T=Math.max(0,M.start),A=Math.min(f.count,M.start+M.count);for(let v=T,_=A;v<_;v+=3){const N=f.getX(v),b=f.getX(v+1),L=f.getX(v+2);a=_l(this,d,e,r,m,g,y,N,b,L),a&&(a.faceIndex=Math.floor(v/3),n.push(a))}}else if(h!==void 0)if(Array.isArray(d))for(let T=0,A=x.length;T<A;T++){const v=x[T],_=d[v.materialIndex],N=Math.max(v.start,M.start),b=Math.min(h.count,Math.min(v.start+v.count,M.start+M.count));for(let L=N,j=b;L<j;L+=3){const k=L,F=L+1,W=L+2;a=_l(this,_,e,r,m,g,y,k,F,W),a&&(a.faceIndex=Math.floor(L/3),a.face.materialIndex=v.materialIndex,n.push(a))}}else{const T=Math.max(0,M.start),A=Math.min(h.count,M.start+M.count);for(let v=T,_=A;v<_;v+=3){const N=v,b=v+1,L=v+2;a=_l(this,d,e,r,m,g,y,N,b,L),a&&(a.faceIndex=Math.floor(v/3),n.push(a))}}}}function Yv(s,e,n,r,a,c,d,f){let h;if(e.side===Mn?h=r.intersectTriangle(d,c,a,!0,f):h=r.intersectTriangle(a,c,d,e.side===zi,f),h===null)return null;gl.copy(f),gl.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(gl);return m<n.near||m>n.far?null:{distance:m,point:gl.clone(),object:s}}function _l(s,e,n,r,a,c,d,f,h,m){s.getVertexPosition(f,Is),s.getVertexPosition(h,Us),s.getVertexPosition(m,Fs);const g=Yv(s,e,n,r,Is,Us,Fs,ml);if(g){a&&(dl.fromBufferAttribute(a,f),hl.fromBufferAttribute(a,h),pl.fromBufferAttribute(a,m),g.uv=ui.getInterpolation(ml,Is,Us,Fs,dl,hl,pl,new ut)),c&&(dl.fromBufferAttribute(c,f),hl.fromBufferAttribute(c,h),pl.fromBufferAttribute(c,m),g.uv1=ui.getInterpolation(ml,Is,Us,Fs,dl,hl,pl,new ut)),d&&($p.fromBufferAttribute(d,f),Kp.fromBufferAttribute(d,h),Zp.fromBufferAttribute(d,m),g.normal=ui.getInterpolation(ml,Is,Us,Fs,$p,Kp,Zp,new Q),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const y={a:f,b:h,c:m,normal:new Q,materialIndex:0};ui.getNormal(Is,Us,Fs,y.normal),g.face=y}return g}class jo extends Hi{constructor(e=1,n=1,r=1,a=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:c,depthSegments:d};const f=this;a=Math.floor(a),c=Math.floor(c),d=Math.floor(d);const h=[],m=[],g=[],y=[];let x=0,M=0;T("z","y","x",-1,-1,r,n,e,d,c,0),T("z","y","x",1,-1,r,n,-e,d,c,1),T("x","z","y",1,1,e,r,n,a,d,2),T("x","z","y",1,-1,e,r,-n,a,d,3),T("x","y","z",1,-1,e,n,r,a,c,4),T("x","y","z",-1,-1,e,n,-r,a,c,5),this.setIndex(h),this.setAttribute("position",new Jn(m,3)),this.setAttribute("normal",new Jn(g,3)),this.setAttribute("uv",new Jn(y,2));function T(A,v,_,N,b,L,j,k,F,W,D){const C=L/F,H=j/W,de=L/2,ee=j/2,_e=k/2,ve=F+1,ae=W+1;let q=0,U=0;const re=new Q;for(let se=0;se<ae;se++){const I=se*H-ee;for(let te=0;te<ve;te++){const Pe=te*C-de;re[A]=Pe*N,re[v]=I*b,re[_]=_e,m.push(re.x,re.y,re.z),re[A]=0,re[v]=0,re[_]=k>0?1:-1,g.push(re.x,re.y,re.z),y.push(te/F),y.push(1-se/W),q+=1}}for(let se=0;se<W;se++)for(let I=0;I<F;I++){const te=x+I+ve*se,Pe=x+I+ve*(se+1),K=x+(I+1)+ve*(se+1),X=x+(I+1)+ve*se;h.push(te,Pe,X),h.push(Pe,K,X),U+=6}f.addGroup(M,U,D),M+=U,x+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ks(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function yn(s){const e={};for(let n=0;n<s.length;n++){const r=Ks(s[n]);for(const a in r)e[a]=r[a]}return e}function qv(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function eg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}const $v={clone:Ks,merge:yn};var Kv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yr extends Fl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kv,this.fragmentShader=Zv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ks(e.uniforms),this.uniformsGroups=qv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const d=this.uniforms[a].value;d&&d.isTexture?n.uniforms[a]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?n.uniforms[a]={type:"c",value:d.getHex()}:d&&d.isVector2?n.uniforms[a]={type:"v2",value:d.toArray()}:d&&d.isVector3?n.uniforms[a]={type:"v3",value:d.toArray()}:d&&d.isVector4?n.uniforms[a]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?n.uniforms[a]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?n.uniforms[a]={type:"m4",value:d.toArray()}:n.uniforms[a]={value:d}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class tg extends Hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=ki}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const mr=new Q,Qp=new ut,Jp=new ut;class Bn extends tg{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Go*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Go*2*Math.atan(Math.tan(zo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mr.x,mr.y).multiplyScalar(-e/mr.z),mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(mr.x,mr.y).multiplyScalar(-e/mr.z)}getViewSize(e,n){return this.getViewBounds(e,Qp,Jp),n.subVectors(Jp,Qp)}setViewOffset(e,n,r,a,c,d){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(zo*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,c=-.5*a;const d=this.view;if(this.view!==null&&this.view.enabled){const h=d.fullWidth,m=d.fullHeight;c+=d.offsetX*a/h,n-=d.offsetY*r/m,a*=d.width/h,r*=d.height/m}const f=this.filmOffset;f!==0&&(c+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Os=-90,ks=1;class Qv extends Hn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Bn(Os,ks,e,n);a.layers=this.layers,this.add(a);const c=new Bn(Os,ks,e,n);c.layers=this.layers,this.add(c);const d=new Bn(Os,ks,e,n);d.layers=this.layers,this.add(d);const f=new Bn(Os,ks,e,n);f.layers=this.layers,this.add(f);const h=new Bn(Os,ks,e,n);h.layers=this.layers,this.add(h);const m=new Bn(Os,ks,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,c,d,f,h]=n;for(const m of n)this.remove(m);if(e===ki)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Dl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,f,h,m,g]=this.children,y=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,c),e.setRenderTarget(r,1,a),e.render(n,d),e.setRenderTarget(r,2,a),e.render(n,f),e.setRenderTarget(r,3,a),e.render(n,h),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,a),e.render(n,g),e.setRenderTarget(y,x,M),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class ng extends En{constructor(e,n,r,a,c,d,f,h,m,g){e=e!==void 0?e:[],n=n!==void 0?n:js,super(e,n,r,a,c,d,f,h,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Jv extends $r{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new ng(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Sn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new jo(5,5,5),c=new yr({name:"CubemapFromEquirect",uniforms:Ks(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Mn,blending:vr});c.uniforms.tEquirect.value=n;const d=new Zn(a,c),f=n.minFilter;return n.minFilter===Yr&&(n.minFilter=Sn),new Qv(1,10,this).update(e,d),n.minFilter=f,d.geometry.dispose(),d.material.dispose(),this}clear(e,n,r,a){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(n,r,a);e.setRenderTarget(c)}}const Bu=new Q,ex=new Q,tx=new ht;class gr{constructor(e=new Q(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=Bu.subVectors(r,n).cross(ex.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Bu),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/a;return c<0||c>1?null:n.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||tx.getNormalMatrix(e),a=this.coplanarPoint(Bu).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zr=new Hf,vl=new Q;class ig{constructor(e=new gr,n=new gr,r=new gr,a=new gr,c=new gr,d=new gr){this.planes=[e,n,r,a,c,d]}set(e,n,r,a,c,d){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(r),f[3].copy(a),f[4].copy(c),f[5].copy(d),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=ki){const r=this.planes,a=e.elements,c=a[0],d=a[1],f=a[2],h=a[3],m=a[4],g=a[5],y=a[6],x=a[7],M=a[8],T=a[9],A=a[10],v=a[11],_=a[12],N=a[13],b=a[14],L=a[15];if(r[0].setComponents(h-c,x-m,v-M,L-_).normalize(),r[1].setComponents(h+c,x+m,v+M,L+_).normalize(),r[2].setComponents(h+d,x+g,v+T,L+N).normalize(),r[3].setComponents(h-d,x-g,v-T,L-N).normalize(),r[4].setComponents(h-f,x-y,v-A,L-b).normalize(),n===ki)r[5].setComponents(h+f,x+y,v+A,L+b).normalize();else if(n===Dl)r[5].setComponents(f,y,A,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zr)}intersectsSprite(e){return zr.center.set(0,0,0),zr.radius=.7071067811865476,zr.applyMatrix4(e.matrixWorld),this.intersectsSphere(zr)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(vl.x=a.normal.x>0?e.max.x:e.min.x,vl.y=a.normal.y>0?e.max.y:e.min.y,vl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(vl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function rg(){let s=null,e=!1,n=null,r=null;function a(c,d){n(c,d),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){s=c}}}function nx(s){const e=new WeakMap;function n(f,h){const m=f.array,g=f.usage,y=m.byteLength,x=s.createBuffer();s.bindBuffer(h,x),s.bufferData(h,m,g),f.onUploadCallback();let M;if(m instanceof Float32Array)M=s.FLOAT;else if(m instanceof Uint16Array)f.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=s.SHORT;else if(m instanceof Uint32Array)M=s.UNSIGNED_INT;else if(m instanceof Int32Array)M=s.INT;else if(m instanceof Int8Array)M=s.BYTE;else if(m instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version,size:y}}function r(f,h,m){const g=h.array,y=h._updateRange,x=h.updateRanges;if(s.bindBuffer(m,f),y.count===-1&&x.length===0&&s.bufferSubData(m,0,g),x.length!==0){for(let M=0,T=x.length;M<T;M++){const A=x[M];s.bufferSubData(m,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}h.clearUpdateRanges()}y.count!==-1&&(s.bufferSubData(m,y.offset*g.BYTES_PER_ELEMENT,g,y.offset,y.count),y.count=-1),h.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function c(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(s.deleteBuffer(h.buffer),e.delete(f))}function d(f,h){if(f.isGLBufferAttribute){const g=e.get(f);(!g||g.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}f.isInterleavedBufferAttribute&&(f=f.data);const m=e.get(f);if(m===void 0)e.set(f,n(f,h));else if(m.version<f.version){if(m.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,f,h),m.version=f.version}}return{get:a,remove:c,update:d}}class Yo extends Hi{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const c=e/2,d=n/2,f=Math.floor(r),h=Math.floor(a),m=f+1,g=h+1,y=e/f,x=n/h,M=[],T=[],A=[],v=[];for(let _=0;_<g;_++){const N=_*x-d;for(let b=0;b<m;b++){const L=b*y-c;T.push(L,-N,0),A.push(0,0,1),v.push(b/f),v.push(1-_/h)}}for(let _=0;_<h;_++)for(let N=0;N<f;N++){const b=N+m*_,L=N+m*(_+1),j=N+1+m*(_+1),k=N+1+m*_;M.push(b,L,k),M.push(L,j,k)}this.setIndex(M),this.setAttribute("position",new Jn(T,3)),this.setAttribute("normal",new Jn(A,3)),this.setAttribute("uv",new Jn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yo(e.width,e.height,e.widthSegments,e.heightSegments)}}var ix=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,sx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ox=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ax=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ux=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,dx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,px=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,gx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_x=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,vx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,xx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ex=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Tx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ax=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Cx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Rx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,bx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Px=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ix=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Ux=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Fx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ox=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,kx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Bx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Xx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,$x=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Kx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ey=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ty=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ny=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,iy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ry=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,oy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ay=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ly=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,dy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,py=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,my=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_y=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,xy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Sy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,My=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ey=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ty=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ay=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ry=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,by=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Py=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ly=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Dy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ny=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Iy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Uy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Oy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ky=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,zy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,By=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Hy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Vy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Wy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,jy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$y=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ky=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Zy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Qy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,eS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,tS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,iS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,cS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,uS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,dS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,_S=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,SS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ES=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,CS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,LS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,DS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,IS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,US=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,dt={alphahash_fragment:ix,alphahash_pars_fragment:rx,alphamap_fragment:sx,alphamap_pars_fragment:ox,alphatest_fragment:ax,alphatest_pars_fragment:lx,aomap_fragment:cx,aomap_pars_fragment:ux,batching_pars_vertex:fx,batching_vertex:dx,begin_vertex:hx,beginnormal_vertex:px,bsdfs:mx,iridescence_fragment:gx,bumpmap_pars_fragment:_x,clipping_planes_fragment:vx,clipping_planes_pars_fragment:xx,clipping_planes_pars_vertex:yx,clipping_planes_vertex:Sx,color_fragment:Mx,color_pars_fragment:Ex,color_pars_vertex:wx,color_vertex:Tx,common:Ax,cube_uv_reflection_fragment:Cx,defaultnormal_vertex:Rx,displacementmap_pars_vertex:bx,displacementmap_vertex:Px,emissivemap_fragment:Lx,emissivemap_pars_fragment:Dx,colorspace_fragment:Nx,colorspace_pars_fragment:Ix,envmap_fragment:Ux,envmap_common_pars_fragment:Fx,envmap_pars_fragment:Ox,envmap_pars_vertex:kx,envmap_physical_pars_fragment:$x,envmap_vertex:zx,fog_vertex:Bx,fog_pars_vertex:Hx,fog_fragment:Vx,fog_pars_fragment:Gx,gradientmap_pars_fragment:Wx,lightmap_pars_fragment:Xx,lights_lambert_fragment:jx,lights_lambert_pars_fragment:Yx,lights_pars_begin:qx,lights_toon_fragment:Kx,lights_toon_pars_fragment:Zx,lights_phong_fragment:Qx,lights_phong_pars_fragment:Jx,lights_physical_fragment:ey,lights_physical_pars_fragment:ty,lights_fragment_begin:ny,lights_fragment_maps:iy,lights_fragment_end:ry,logdepthbuf_fragment:sy,logdepthbuf_pars_fragment:oy,logdepthbuf_pars_vertex:ay,logdepthbuf_vertex:ly,map_fragment:cy,map_pars_fragment:uy,map_particle_fragment:fy,map_particle_pars_fragment:dy,metalnessmap_fragment:hy,metalnessmap_pars_fragment:py,morphinstance_vertex:my,morphcolor_vertex:gy,morphnormal_vertex:_y,morphtarget_pars_vertex:vy,morphtarget_vertex:xy,normal_fragment_begin:yy,normal_fragment_maps:Sy,normal_pars_fragment:My,normal_pars_vertex:Ey,normal_vertex:wy,normalmap_pars_fragment:Ty,clearcoat_normal_fragment_begin:Ay,clearcoat_normal_fragment_maps:Cy,clearcoat_pars_fragment:Ry,iridescence_pars_fragment:by,opaque_fragment:Py,packing:Ly,premultiplied_alpha_fragment:Dy,project_vertex:Ny,dithering_fragment:Iy,dithering_pars_fragment:Uy,roughnessmap_fragment:Fy,roughnessmap_pars_fragment:Oy,shadowmap_pars_fragment:ky,shadowmap_pars_vertex:zy,shadowmap_vertex:By,shadowmask_pars_fragment:Hy,skinbase_vertex:Vy,skinning_pars_vertex:Gy,skinning_vertex:Wy,skinnormal_vertex:Xy,specularmap_fragment:jy,specularmap_pars_fragment:Yy,tonemapping_fragment:qy,tonemapping_pars_fragment:$y,transmission_fragment:Ky,transmission_pars_fragment:Zy,uv_pars_fragment:Qy,uv_pars_vertex:Jy,uv_vertex:eS,worldpos_vertex:tS,background_vert:nS,background_frag:iS,backgroundCube_vert:rS,backgroundCube_frag:sS,cube_vert:oS,cube_frag:aS,depth_vert:lS,depth_frag:cS,distanceRGBA_vert:uS,distanceRGBA_frag:fS,equirect_vert:dS,equirect_frag:hS,linedashed_vert:pS,linedashed_frag:mS,meshbasic_vert:gS,meshbasic_frag:_S,meshlambert_vert:vS,meshlambert_frag:xS,meshmatcap_vert:yS,meshmatcap_frag:SS,meshnormal_vert:MS,meshnormal_frag:ES,meshphong_vert:wS,meshphong_frag:TS,meshphysical_vert:AS,meshphysical_frag:CS,meshtoon_vert:RS,meshtoon_frag:bS,points_vert:PS,points_frag:LS,shadow_vert:DS,shadow_frag:NS,sprite_vert:IS,sprite_frag:US},Fe={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},_i={basic:{uniforms:yn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:yn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Ct(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:yn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:yn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:yn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new Ct(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:yn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:yn([Fe.points,Fe.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:yn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:yn([Fe.common,Fe.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:yn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:yn([Fe.sprite,Fe.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distanceRGBA:{uniforms:yn([Fe.common,Fe.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distanceRGBA_vert,fragmentShader:dt.distanceRGBA_frag},shadow:{uniforms:yn([Fe.lights,Fe.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};_i.physical={uniforms:yn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const xl={r:0,b:0,g:0},Br=new Qn,FS=new jt;function OS(s,e,n,r,a,c,d){const f=new Ct(0);let h=c===!0?0:1,m,g,y=null,x=0,M=null;function T(N){let b=N.isScene===!0?N.background:null;return b&&b.isTexture&&(b=(N.backgroundBlurriness>0?n:e).get(b)),b}function A(N){let b=!1;const L=T(N);L===null?_(f,h):L&&L.isColor&&(_(L,1),b=!0);const j=s.xr.getEnvironmentBlendMode();j==="additive"?r.buffers.color.setClear(0,0,0,1,d):j==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(s.autoClear||b)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function v(N,b){const L=T(b);L&&(L.isCubeTexture||L.mapping===Il)?(g===void 0&&(g=new Zn(new jo(1,1,1),new yr({name:"BackgroundCubeMaterial",uniforms:Ks(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(j,k,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(g)),Br.copy(b.backgroundRotation),Br.x*=-1,Br.y*=-1,Br.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Br.y*=-1,Br.z*=-1),g.material.uniforms.envMap.value=L,g.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(FS.makeRotationFromEuler(Br)),g.material.toneMapped=At.getTransfer(L.colorSpace)!==Nt,(y!==L||x!==L.version||M!==s.toneMapping)&&(g.material.needsUpdate=!0,y=L,x=L.version,M=s.toneMapping),g.layers.enableAll(),N.unshift(g,g.geometry,g.material,0,0,null)):L&&L.isTexture&&(m===void 0&&(m=new Zn(new Yo(2,2),new yr({name:"BackgroundMaterial",uniforms:Ks(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:zi,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=L,m.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,m.material.toneMapped=At.getTransfer(L.colorSpace)!==Nt,L.matrixAutoUpdate===!0&&L.updateMatrix(),m.material.uniforms.uvTransform.value.copy(L.matrix),(y!==L||x!==L.version||M!==s.toneMapping)&&(m.material.needsUpdate=!0,y=L,x=L.version,M=s.toneMapping),m.layers.enableAll(),N.unshift(m,m.geometry,m.material,0,0,null))}function _(N,b){N.getRGB(xl,eg(s)),r.buffers.color.setClear(xl.r,xl.g,xl.b,b,d)}return{getClearColor:function(){return f},setClearColor:function(N,b=1){f.set(N),h=b,_(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(N){h=N,_(f,h)},render:A,addToRenderList:v}}function kS(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=x(null);let c=a,d=!1;function f(C,H,de,ee,_e){let ve=!1;const ae=y(ee,de,H);c!==ae&&(c=ae,m(c.object)),ve=M(C,ee,de,_e),ve&&T(C,ee,de,_e),_e!==null&&e.update(_e,s.ELEMENT_ARRAY_BUFFER),(ve||d)&&(d=!1,L(C,H,de,ee),_e!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(_e).buffer))}function h(){return s.createVertexArray()}function m(C){return s.bindVertexArray(C)}function g(C){return s.deleteVertexArray(C)}function y(C,H,de){const ee=de.wireframe===!0;let _e=r[C.id];_e===void 0&&(_e={},r[C.id]=_e);let ve=_e[H.id];ve===void 0&&(ve={},_e[H.id]=ve);let ae=ve[ee];return ae===void 0&&(ae=x(h()),ve[ee]=ae),ae}function x(C){const H=[],de=[],ee=[];for(let _e=0;_e<n;_e++)H[_e]=0,de[_e]=0,ee[_e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:de,attributeDivisors:ee,object:C,attributes:{},index:null}}function M(C,H,de,ee){const _e=c.attributes,ve=H.attributes;let ae=0;const q=de.getAttributes();for(const U in q)if(q[U].location>=0){const se=_e[U];let I=ve[U];if(I===void 0&&(U==="instanceMatrix"&&C.instanceMatrix&&(I=C.instanceMatrix),U==="instanceColor"&&C.instanceColor&&(I=C.instanceColor)),se===void 0||se.attribute!==I||I&&se.data!==I.data)return!0;ae++}return c.attributesNum!==ae||c.index!==ee}function T(C,H,de,ee){const _e={},ve=H.attributes;let ae=0;const q=de.getAttributes();for(const U in q)if(q[U].location>=0){let se=ve[U];se===void 0&&(U==="instanceMatrix"&&C.instanceMatrix&&(se=C.instanceMatrix),U==="instanceColor"&&C.instanceColor&&(se=C.instanceColor));const I={};I.attribute=se,se&&se.data&&(I.data=se.data),_e[U]=I,ae++}c.attributes=_e,c.attributesNum=ae,c.index=ee}function A(){const C=c.newAttributes;for(let H=0,de=C.length;H<de;H++)C[H]=0}function v(C){_(C,0)}function _(C,H){const de=c.newAttributes,ee=c.enabledAttributes,_e=c.attributeDivisors;de[C]=1,ee[C]===0&&(s.enableVertexAttribArray(C),ee[C]=1),_e[C]!==H&&(s.vertexAttribDivisor(C,H),_e[C]=H)}function N(){const C=c.newAttributes,H=c.enabledAttributes;for(let de=0,ee=H.length;de<ee;de++)H[de]!==C[de]&&(s.disableVertexAttribArray(de),H[de]=0)}function b(C,H,de,ee,_e,ve,ae){ae===!0?s.vertexAttribIPointer(C,H,de,_e,ve):s.vertexAttribPointer(C,H,de,ee,_e,ve)}function L(C,H,de,ee){A();const _e=ee.attributes,ve=de.getAttributes(),ae=H.defaultAttributeValues;for(const q in ve){const U=ve[q];if(U.location>=0){let re=_e[q];if(re===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(re=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(re=C.instanceColor)),re!==void 0){const se=re.normalized,I=re.itemSize,te=e.get(re);if(te===void 0)continue;const Pe=te.buffer,K=te.type,X=te.bytesPerElement,pe=K===s.INT||K===s.UNSIGNED_INT||re.gpuType===Nf;if(re.isInterleavedBufferAttribute){const xe=re.data,Ce=xe.stride,Re=re.offset;if(xe.isInstancedInterleavedBuffer){for(let ze=0;ze<U.locationSize;ze++)_(U.location+ze,xe.meshPerAttribute);C.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let ze=0;ze<U.locationSize;ze++)v(U.location+ze);s.bindBuffer(s.ARRAY_BUFFER,Pe);for(let ze=0;ze<U.locationSize;ze++)b(U.location+ze,I/U.locationSize,K,se,Ce*X,(Re+I/U.locationSize*ze)*X,pe)}else{if(re.isInstancedBufferAttribute){for(let xe=0;xe<U.locationSize;xe++)_(U.location+xe,re.meshPerAttribute);C.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let xe=0;xe<U.locationSize;xe++)v(U.location+xe);s.bindBuffer(s.ARRAY_BUFFER,Pe);for(let xe=0;xe<U.locationSize;xe++)b(U.location+xe,I/U.locationSize,K,se,I*X,I/U.locationSize*xe*X,pe)}}else if(ae!==void 0){const se=ae[q];if(se!==void 0)switch(se.length){case 2:s.vertexAttrib2fv(U.location,se);break;case 3:s.vertexAttrib3fv(U.location,se);break;case 4:s.vertexAttrib4fv(U.location,se);break;default:s.vertexAttrib1fv(U.location,se)}}}}N()}function j(){W();for(const C in r){const H=r[C];for(const de in H){const ee=H[de];for(const _e in ee)g(ee[_e].object),delete ee[_e];delete H[de]}delete r[C]}}function k(C){if(r[C.id]===void 0)return;const H=r[C.id];for(const de in H){const ee=H[de];for(const _e in ee)g(ee[_e].object),delete ee[_e];delete H[de]}delete r[C.id]}function F(C){for(const H in r){const de=r[H];if(de[C.id]===void 0)continue;const ee=de[C.id];for(const _e in ee)g(ee[_e].object),delete ee[_e];delete de[C.id]}}function W(){D(),d=!0,c!==a&&(c=a,m(c.object))}function D(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:W,resetDefaultState:D,dispose:j,releaseStatesOfGeometry:k,releaseStatesOfProgram:F,initAttributes:A,enableAttribute:v,disableUnusedAttributes:N}}function zS(s,e,n){let r;function a(m){r=m}function c(m,g){s.drawArrays(r,m,g),n.update(g,r,1)}function d(m,g,y){y!==0&&(s.drawArraysInstanced(r,m,g,y),n.update(g,r,y))}function f(m,g,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,g,0,y);let M=0;for(let T=0;T<y;T++)M+=g[T];n.update(M,r,1)}function h(m,g,y,x){if(y===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let T=0;T<m.length;T++)d(m[T],g[T],x[T]);else{M.multiDrawArraysInstancedWEBGL(r,m,0,g,0,x,0,y);let T=0;for(let A=0;A<y;A++)T+=g[A];for(let A=0;A<x.length;A++)n.update(T,r,x[A])}}this.setMode=a,this.render=c,this.renderInstances=d,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function BS(s,e,n,r){let a;function c(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function d(k){return!(k!==fi&&r.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(k){const F=k===Wo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==Bi&&r.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==Oi&&!F)}function h(k){if(k==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const g=h(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const y=n.logarithmicDepthBuffer===!0,x=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),A=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),N=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),L=M>0,j=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:h,textureFormatReadable:d,textureTypeReadable:f,precision:m,logarithmicDepthBuffer:y,maxTextures:x,maxVertexTextures:M,maxTextureSize:T,maxCubemapSize:A,maxAttributes:v,maxVertexUniforms:_,maxVaryings:N,maxFragmentUniforms:b,vertexTextures:L,maxSamples:j}}function HS(s){const e=this;let n=null,r=0,a=!1,c=!1;const d=new gr,f=new ht,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(y,x){const M=y.length!==0||x||r!==0||a;return a=x,r=y.length,M},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(y,x){n=g(y,x,0)},this.setState=function(y,x,M){const T=y.clippingPlanes,A=y.clipIntersection,v=y.clipShadows,_=s.get(y);if(!a||T===null||T.length===0||c&&!v)c?g(null):m();else{const N=c?0:r,b=N*4;let L=_.clippingState||null;h.value=L,L=g(T,x,b,M);for(let j=0;j!==b;++j)L[j]=n[j];_.clippingState=L,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=N}};function m(){h.value!==n&&(h.value=n,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(y,x,M,T){const A=y!==null?y.length:0;let v=null;if(A!==0){if(v=h.value,T!==!0||v===null){const _=M+A*4,N=x.matrixWorldInverse;f.getNormalMatrix(N),(v===null||v.length<_)&&(v=new Float32Array(_));for(let b=0,L=M;b!==A;++b,L+=4)d.copy(y[b]).applyMatrix4(N,f),d.normal.toArray(v,L),v[L+3]=d.constant}h.value=v,h.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,v}}function VS(s){let e=new WeakMap;function n(d,f){return f===Qu?d.mapping=js:f===Ju&&(d.mapping=Ys),d}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===Qu||f===Ju)if(e.has(d)){const h=e.get(d).texture;return n(h,d.mapping)}else{const h=d.image;if(h&&h.height>0){const m=new Jv(h.height);return m.fromEquirectangularTexture(s,d),e.set(d,m),d.addEventListener("dispose",a),n(m.texture,d.mapping)}else return null}}return d}function a(d){const f=d.target;f.removeEventListener("dispose",a);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}class GS extends tg{constructor(e=-1,n=1,r=1,a=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let c=r-e,d=r+e,f=a+n,h=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,d=c+m*this.view.width,f-=g*this.view.offsetY,h=f-g*this.view.height}this.projectionMatrix.makeOrthographic(c,d,f,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Hs=4,em=[.125,.215,.35,.446,.526,.582],Xr=20,Hu=new GS,tm=new Ct;let Vu=null,Gu=0,Wu=0,Xu=!1;const Vr=(1+Math.sqrt(5))/2,zs=1/Vr,nm=[new Q(-Vr,zs,0),new Q(Vr,zs,0),new Q(-zs,0,Vr),new Q(zs,0,Vr),new Q(0,Vr,-zs),new Q(0,Vr,zs),new Q(-1,1,-1),new Q(1,1,-1),new Q(-1,1,1),new Q(1,1,1)];class im{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){Vu=this._renderer.getRenderTarget(),Gu=this._renderer.getActiveCubeFace(),Wu=this._renderer.getActiveMipmapLevel(),Xu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,r,a,c),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=om(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vu,Gu,Wu),this._renderer.xr.enabled=Xu,e.scissorTest=!1,yl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===js||e.mapping===Ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vu=this._renderer.getRenderTarget(),Gu=this._renderer.getActiveCubeFace(),Wu=this._renderer.getActiveMipmapLevel(),Xu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:Wo,format:fi,colorSpace:Sr,depthBuffer:!1},a=rm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rm(e,n,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=WS(c)),this._blurMaterial=XS(c,e,n)}return a}_compileMaterial(e){const n=new Zn(this._lodPlanes[0],e);this._renderer.compile(n,Hu)}_sceneToCubeUV(e,n,r,a){const f=new Bn(90,1,n,r),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,y=g.autoClear,x=g.toneMapping;g.getClearColor(tm),g.toneMapping=xr,g.autoClear=!1;const M=new Ol({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1}),T=new Zn(new jo,M);let A=!1;const v=e.background;v?v.isColor&&(M.color.copy(v),e.background=null,A=!0):(M.color.copy(tm),A=!0);for(let _=0;_<6;_++){const N=_%3;N===0?(f.up.set(0,h[_],0),f.lookAt(m[_],0,0)):N===1?(f.up.set(0,0,h[_]),f.lookAt(0,m[_],0)):(f.up.set(0,h[_],0),f.lookAt(0,0,m[_]));const b=this._cubeSize;yl(a,N*b,_>2?b:0,b,b),g.setRenderTarget(a),A&&g.render(T,f),g.render(e,f)}T.geometry.dispose(),T.material.dispose(),g.toneMapping=x,g.autoClear=y,e.background=v}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===js||e.mapping===Ys;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=om()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sm());const c=a?this._cubemapMaterial:this._equirectMaterial,d=new Zn(this._lodPlanes[0],c),f=c.uniforms;f.envMap.value=e;const h=this._cubeSize;yl(n,0,0,3*h,2*h),r.setRenderTarget(n),r.render(d,Hu)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let c=1;c<a;c++){const d=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),f=nm[(a-c-1)%nm.length];this._blur(e,c-1,c,d,f)}n.autoClear=r}_blur(e,n,r,a,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,n,r,a,"latitudinal",c),this._halfBlur(d,e,r,r,a,"longitudinal",c)}_halfBlur(e,n,r,a,c,d,f){const h=this._renderer,m=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,y=new Zn(this._lodPlanes[a],m),x=m.uniforms,M=this._sizeLods[r]-1,T=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Xr-1),A=c/T,v=isFinite(c)?1+Math.floor(g*A):Xr;v>Xr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Xr}`);const _=[];let N=0;for(let F=0;F<Xr;++F){const W=F/A,D=Math.exp(-W*W/2);_.push(D),F===0?N+=D:F<v&&(N+=2*D)}for(let F=0;F<_.length;F++)_[F]=_[F]/N;x.envMap.value=e.texture,x.samples.value=v,x.weights.value=_,x.latitudinal.value=d==="latitudinal",f&&(x.poleAxis.value=f);const{_lodMax:b}=this;x.dTheta.value=T,x.mipInt.value=b-r;const L=this._sizeLods[a],j=3*L*(a>b-Hs?a-b+Hs:0),k=4*(this._cubeSize-L);yl(n,j,k,3*L,2*L),h.setRenderTarget(n),h.render(y,Hu)}}function WS(s){const e=[],n=[],r=[];let a=s;const c=s-Hs+1+em.length;for(let d=0;d<c;d++){const f=Math.pow(2,a);n.push(f);let h=1/f;d>s-Hs?h=em[d-s+Hs-1]:d===0&&(h=0),r.push(h);const m=1/(f-2),g=-m,y=1+m,x=[g,g,y,g,y,y,g,g,y,y,g,y],M=6,T=6,A=3,v=2,_=1,N=new Float32Array(A*T*M),b=new Float32Array(v*T*M),L=new Float32Array(_*T*M);for(let k=0;k<M;k++){const F=k%3*2/3-1,W=k>2?0:-1,D=[F,W,0,F+2/3,W,0,F+2/3,W+1,0,F,W,0,F+2/3,W+1,0,F,W+1,0];N.set(D,A*T*k),b.set(x,v*T*k);const C=[k,k,k,k,k,k];L.set(C,_*T*k)}const j=new Hi;j.setAttribute("position",new xi(N,A)),j.setAttribute("uv",new xi(b,v)),j.setAttribute("faceIndex",new xi(L,_)),e.push(j),a>Hs&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function rm(s,e,n){const r=new $r(s,e,n);return r.texture.mapping=Il,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function yl(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function XS(s,e,n){const r=new Float32Array(Xr),a=new Q(0,1,0);return new yr({name:"SphericalGaussianBlur",defines:{n:Xr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Wf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:vr,depthTest:!1,depthWrite:!1})}function sm(){return new yr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:vr,depthTest:!1,depthWrite:!1})}function om(){return new yr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vr,depthTest:!1,depthWrite:!1})}function Wf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function jS(s){let e=new WeakMap,n=null;function r(f){if(f&&f.isTexture){const h=f.mapping,m=h===Qu||h===Ju,g=h===js||h===Ys;if(m||g){let y=e.get(f);const x=y!==void 0?y.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==x)return n===null&&(n=new im(s)),y=m?n.fromEquirectangular(f,y):n.fromCubemap(f,y),y.texture.pmremVersion=f.pmremVersion,e.set(f,y),y.texture;if(y!==void 0)return y.texture;{const M=f.image;return m&&M&&M.height>0||g&&M&&a(M)?(n===null&&(n=new im(s)),y=m?n.fromEquirectangular(f):n.fromCubemap(f),y.texture.pmremVersion=f.pmremVersion,e.set(f,y),f.addEventListener("dispose",c),y.texture):null}}}return f}function a(f){let h=0;const m=6;for(let g=0;g<m;g++)f[g]!==void 0&&h++;return h===m}function c(f){const h=f.target;h.removeEventListener("dispose",c);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function d(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function YS(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&qm("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function qS(s,e,n,r){const a={},c=new WeakMap;function d(y){const x=y.target;x.index!==null&&e.remove(x.index);for(const T in x.attributes)e.remove(x.attributes[T]);for(const T in x.morphAttributes){const A=x.morphAttributes[T];for(let v=0,_=A.length;v<_;v++)e.remove(A[v])}x.removeEventListener("dispose",d),delete a[x.id];const M=c.get(x);M&&(e.remove(M),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function f(y,x){return a[x.id]===!0||(x.addEventListener("dispose",d),a[x.id]=!0,n.memory.geometries++),x}function h(y){const x=y.attributes;for(const T in x)e.update(x[T],s.ARRAY_BUFFER);const M=y.morphAttributes;for(const T in M){const A=M[T];for(let v=0,_=A.length;v<_;v++)e.update(A[v],s.ARRAY_BUFFER)}}function m(y){const x=[],M=y.index,T=y.attributes.position;let A=0;if(M!==null){const N=M.array;A=M.version;for(let b=0,L=N.length;b<L;b+=3){const j=N[b+0],k=N[b+1],F=N[b+2];x.push(j,k,k,F,F,j)}}else if(T!==void 0){const N=T.array;A=T.version;for(let b=0,L=N.length/3-1;b<L;b+=3){const j=b+0,k=b+1,F=b+2;x.push(j,k,k,F,F,j)}}else return;const v=new(Ym(x)?Jm:Qm)(x,1);v.version=A;const _=c.get(y);_&&e.remove(_),c.set(y,v)}function g(y){const x=c.get(y);if(x){const M=y.index;M!==null&&x.version<M.version&&m(y)}else m(y);return c.get(y)}return{get:f,update:h,getWireframeAttribute:g}}function $S(s,e,n){let r;function a(x){r=x}let c,d;function f(x){c=x.type,d=x.bytesPerElement}function h(x,M){s.drawElements(r,M,c,x*d),n.update(M,r,1)}function m(x,M,T){T!==0&&(s.drawElementsInstanced(r,M,c,x*d,T),n.update(M,r,T))}function g(x,M,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,c,x,0,T);let v=0;for(let _=0;_<T;_++)v+=M[_];n.update(v,r,1)}function y(x,M,T,A){if(T===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let _=0;_<x.length;_++)m(x[_]/d,M[_],A[_]);else{v.multiDrawElementsInstancedWEBGL(r,M,0,c,x,0,A,0,T);let _=0;for(let N=0;N<T;N++)_+=M[N];for(let N=0;N<A.length;N++)n.update(_,r,A[N])}}this.setMode=a,this.setIndex=f,this.render=h,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=y}function KS(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,d,f){switch(n.calls++,d){case s.TRIANGLES:n.triangles+=f*(c/3);break;case s.LINES:n.lines+=f*(c/2);break;case s.LINE_STRIP:n.lines+=f*(c-1);break;case s.LINE_LOOP:n.lines+=f*c;break;case s.POINTS:n.points+=f*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function ZS(s,e,n){const r=new WeakMap,a=new on;function c(d,f,h){const m=d.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,y=g!==void 0?g.length:0;let x=r.get(f);if(x===void 0||x.count!==y){let C=function(){W.dispose(),r.delete(f),f.removeEventListener("dispose",C)};var M=C;x!==void 0&&x.texture.dispose();const T=f.morphAttributes.position!==void 0,A=f.morphAttributes.normal!==void 0,v=f.morphAttributes.color!==void 0,_=f.morphAttributes.position||[],N=f.morphAttributes.normal||[],b=f.morphAttributes.color||[];let L=0;T===!0&&(L=1),A===!0&&(L=2),v===!0&&(L=3);let j=f.attributes.position.count*L,k=1;j>e.maxTextureSize&&(k=Math.ceil(j/e.maxTextureSize),j=e.maxTextureSize);const F=new Float32Array(j*k*4*y),W=new Km(F,j,k,y);W.type=Oi,W.needsUpdate=!0;const D=L*4;for(let H=0;H<y;H++){const de=_[H],ee=N[H],_e=b[H],ve=j*k*4*H;for(let ae=0;ae<de.count;ae++){const q=ae*D;T===!0&&(a.fromBufferAttribute(de,ae),F[ve+q+0]=a.x,F[ve+q+1]=a.y,F[ve+q+2]=a.z,F[ve+q+3]=0),A===!0&&(a.fromBufferAttribute(ee,ae),F[ve+q+4]=a.x,F[ve+q+5]=a.y,F[ve+q+6]=a.z,F[ve+q+7]=0),v===!0&&(a.fromBufferAttribute(_e,ae),F[ve+q+8]=a.x,F[ve+q+9]=a.y,F[ve+q+10]=a.z,F[ve+q+11]=_e.itemSize===4?a.w:1)}}x={count:y,texture:W,size:new ut(j,k)},r.set(f,x),f.addEventListener("dispose",C)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",d.morphTexture,n);else{let T=0;for(let v=0;v<m.length;v++)T+=m[v];const A=f.morphTargetsRelative?1:1-T;h.getUniforms().setValue(s,"morphTargetBaseInfluence",A),h.getUniforms().setValue(s,"morphTargetInfluences",m)}h.getUniforms().setValue(s,"morphTargetsTexture",x.texture,n),h.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:c}}function QS(s,e,n,r){let a=new WeakMap;function c(h){const m=r.render.frame,g=h.geometry,y=e.get(h,g);if(a.get(y)!==m&&(e.update(y),a.set(y,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),a.get(h)!==m&&(n.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&n.update(h.instanceColor,s.ARRAY_BUFFER),a.set(h,m))),h.isSkinnedMesh){const x=h.skeleton;a.get(x)!==m&&(x.update(),a.set(x,m))}return y}function d(){a=new WeakMap}function f(h){const m=h.target;m.removeEventListener("dispose",f),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:c,dispose:d}}class sg extends En{constructor(e,n,r,a,c,d,f,h,m,g=Ws){if(g!==Ws&&g!==$s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===Ws&&(r=qr),r===void 0&&g===$s&&(r=qs),super(null,a,c,d,f,h,g,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=f!==void 0?f:Kn,this.minFilter=h!==void 0?h:Kn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const og=new En,am=new sg(1,1),ag=new Km,lg=new Ov,cg=new ng,lm=[],cm=[],um=new Float32Array(16),fm=new Float32Array(9),dm=new Float32Array(4);function Qs(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let c=lm[a];if(c===void 0&&(c=new Float32Array(a),lm[a]=c),e!==0){r.toArray(c,0);for(let d=1,f=0;d!==e;++d)f+=n,s[d].toArray(c,f)}return c}function Zt(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function Qt(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function kl(s,e){let n=cm[e];n===void 0&&(n=new Int32Array(e),cm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function JS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function eM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;s.uniform2fv(this.addr,e),Qt(n,e)}}function tM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Zt(n,e))return;s.uniform3fv(this.addr,e),Qt(n,e)}}function nM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;s.uniform4fv(this.addr,e),Qt(n,e)}}function iM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Zt(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,r))return;dm.set(r),s.uniformMatrix2fv(this.addr,!1,dm),Qt(n,r)}}function rM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Zt(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,r))return;fm.set(r),s.uniformMatrix3fv(this.addr,!1,fm),Qt(n,r)}}function sM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Zt(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,r))return;um.set(r),s.uniformMatrix4fv(this.addr,!1,um),Qt(n,r)}}function oM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function aM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;s.uniform2iv(this.addr,e),Qt(n,e)}}function lM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Zt(n,e))return;s.uniform3iv(this.addr,e),Qt(n,e)}}function cM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;s.uniform4iv(this.addr,e),Qt(n,e)}}function uM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function fM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;s.uniform2uiv(this.addr,e),Qt(n,e)}}function dM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Zt(n,e))return;s.uniform3uiv(this.addr,e),Qt(n,e)}}function hM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;s.uniform4uiv(this.addr,e),Qt(n,e)}}function pM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let c;this.type===s.SAMPLER_2D_SHADOW?(am.compareFunction=jm,c=am):c=og,n.setTexture2D(e||c,a)}function mM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||lg,a)}function gM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||cg,a)}function _M(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||ag,a)}function vM(s){switch(s){case 5126:return JS;case 35664:return eM;case 35665:return tM;case 35666:return nM;case 35674:return iM;case 35675:return rM;case 35676:return sM;case 5124:case 35670:return oM;case 35667:case 35671:return aM;case 35668:case 35672:return lM;case 35669:case 35673:return cM;case 5125:return uM;case 36294:return fM;case 36295:return dM;case 36296:return hM;case 35678:case 36198:case 36298:case 36306:case 35682:return pM;case 35679:case 36299:case 36307:return mM;case 35680:case 36300:case 36308:case 36293:return gM;case 36289:case 36303:case 36311:case 36292:return _M}}function xM(s,e){s.uniform1fv(this.addr,e)}function yM(s,e){const n=Qs(e,this.size,2);s.uniform2fv(this.addr,n)}function SM(s,e){const n=Qs(e,this.size,3);s.uniform3fv(this.addr,n)}function MM(s,e){const n=Qs(e,this.size,4);s.uniform4fv(this.addr,n)}function EM(s,e){const n=Qs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function wM(s,e){const n=Qs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function TM(s,e){const n=Qs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function AM(s,e){s.uniform1iv(this.addr,e)}function CM(s,e){s.uniform2iv(this.addr,e)}function RM(s,e){s.uniform3iv(this.addr,e)}function bM(s,e){s.uniform4iv(this.addr,e)}function PM(s,e){s.uniform1uiv(this.addr,e)}function LM(s,e){s.uniform2uiv(this.addr,e)}function DM(s,e){s.uniform3uiv(this.addr,e)}function NM(s,e){s.uniform4uiv(this.addr,e)}function IM(s,e,n){const r=this.cache,a=e.length,c=kl(n,a);Zt(r,c)||(s.uniform1iv(this.addr,c),Qt(r,c));for(let d=0;d!==a;++d)n.setTexture2D(e[d]||og,c[d])}function UM(s,e,n){const r=this.cache,a=e.length,c=kl(n,a);Zt(r,c)||(s.uniform1iv(this.addr,c),Qt(r,c));for(let d=0;d!==a;++d)n.setTexture3D(e[d]||lg,c[d])}function FM(s,e,n){const r=this.cache,a=e.length,c=kl(n,a);Zt(r,c)||(s.uniform1iv(this.addr,c),Qt(r,c));for(let d=0;d!==a;++d)n.setTextureCube(e[d]||cg,c[d])}function OM(s,e,n){const r=this.cache,a=e.length,c=kl(n,a);Zt(r,c)||(s.uniform1iv(this.addr,c),Qt(r,c));for(let d=0;d!==a;++d)n.setTexture2DArray(e[d]||ag,c[d])}function kM(s){switch(s){case 5126:return xM;case 35664:return yM;case 35665:return SM;case 35666:return MM;case 35674:return EM;case 35675:return wM;case 35676:return TM;case 5124:case 35670:return AM;case 35667:case 35671:return CM;case 35668:case 35672:return RM;case 35669:case 35673:return bM;case 5125:return PM;case 36294:return LM;case 36295:return DM;case 36296:return NM;case 35678:case 36198:case 36298:case 36306:case 35682:return IM;case 35679:case 36299:case 36307:return UM;case 35680:case 36300:case 36308:case 36293:return FM;case 36289:case 36303:case 36311:case 36292:return OM}}class zM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=vM(n.type)}}class BM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=kM(n.type)}}class HM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let c=0,d=a.length;c!==d;++c){const f=a[c];f.setValue(e,n[f.id],r)}}}const ju=/(\w+)(\])?(\[|\.)?/g;function hm(s,e){s.seq.push(e),s.map[e.id]=e}function VM(s,e,n){const r=s.name,a=r.length;for(ju.lastIndex=0;;){const c=ju.exec(r),d=ju.lastIndex;let f=c[1];const h=c[2]==="]",m=c[3];if(h&&(f=f|0),m===void 0||m==="["&&d+2===a){hm(n,m===void 0?new zM(f,s,e):new BM(f,s,e));break}else{let y=n.map[f];y===void 0&&(y=new HM(f),hm(n,y)),n=y}}}class Cl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const c=e.getActiveUniform(n,a),d=e.getUniformLocation(n,c.name);VM(c,d,this)}}setValue(e,n,r,a){const c=this.map[n];c!==void 0&&c.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let c=0,d=n.length;c!==d;++c){const f=n[c],h=r[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,c=e.length;a!==c;++a){const d=e[a];d.id in n&&r.push(d)}return r}}function pm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const GM=37297;let WM=0;function XM(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let d=a;d<c;d++){const f=d+1;r.push(`${f===e?">":" "} ${f}: ${n[d]}`)}return r.join(`
`)}function jM(s){const e=At.getPrimaries(At.workingColorSpace),n=At.getPrimaries(s);let r;switch(e===n?r="":e===Ll&&n===Pl?r="LinearDisplayP3ToLinearSRGB":e===Pl&&n===Ll&&(r="LinearSRGBToLinearDisplayP3"),s){case Sr:case Ul:return[r,"LinearTransferOETF"];case $n:case zf:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[r,"LinearTransferOETF"]}}function mm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const c=/ERROR: 0:(\d+)/.exec(a);if(c){const d=parseInt(c[1]);return n.toUpperCase()+`

`+a+`

`+XM(s.getShaderSource(e),d)}else return a}function YM(s,e){const n=jM(e);return`vec4 ${s}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function qM(s,e){let n;switch(e){case $0:n="Linear";break;case K0:n="Reinhard";break;case Z0:n="OptimizedCineon";break;case Q0:n="ACESFilmic";break;case ev:n="AgX";break;case tv:n="Neutral";break;case J0:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function $M(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ko).join(`
`)}function KM(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function ZM(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const c=s.getActiveAttrib(e,a),d=c.name;let f=1;c.type===s.FLOAT_MAT2&&(f=2),c.type===s.FLOAT_MAT3&&(f=3),c.type===s.FLOAT_MAT4&&(f=4),n[d]={type:c.type,location:s.getAttribLocation(e,d),locationSize:f}}return n}function ko(s){return s!==""}function gm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _m(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const QM=/^[ \t]*#include +<([\w\d./]+)>/gm;function bf(s){return s.replace(QM,eE)}const JM=new Map;function eE(s,e){let n=dt[e];if(n===void 0){const r=JM.get(e);if(r!==void 0)n=dt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return bf(n)}const tE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vm(s){return s.replace(tE,nE)}function nE(s,e,n,r){let a="";for(let c=parseInt(e);c<parseInt(n);c++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return a}function xm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function iE(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Nm?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===S0?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Fi&&(e="SHADOWMAP_TYPE_VSM"),e}function rE(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case js:case Ys:e="ENVMAP_TYPE_CUBE";break;case Il:e="ENVMAP_TYPE_CUBE_UV";break}return e}function sE(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ys:e="ENVMAP_MODE_REFRACTION";break}return e}function oE(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Im:e="ENVMAP_BLENDING_MULTIPLY";break;case Y0:e="ENVMAP_BLENDING_MIX";break;case q0:e="ENVMAP_BLENDING_ADD";break}return e}function aE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function lE(s,e,n,r){const a=s.getContext(),c=n.defines;let d=n.vertexShader,f=n.fragmentShader;const h=iE(n),m=rE(n),g=sE(n),y=oE(n),x=aE(n),M=$M(n),T=KM(c),A=a.createProgram();let v,_,N=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(ko).join(`
`),v.length>0&&(v+=`
`),_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(ko).join(`
`),_.length>0&&(_+=`
`)):(v=[xm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ko).join(`
`),_=[xm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+g:"",n.envMap?"#define "+y:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==xr?"#define TONE_MAPPING":"",n.toneMapping!==xr?dt.tonemapping_pars_fragment:"",n.toneMapping!==xr?qM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,YM("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ko).join(`
`)),d=bf(d),d=gm(d,n),d=_m(d,n),f=bf(f),f=gm(f,n),f=_m(f,n),d=vm(d),f=vm(f),n.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,v=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,_=["#define varying in",n.glslVersion===Np?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Np?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const b=N+v+d,L=N+_+f,j=pm(a,a.VERTEX_SHADER,b),k=pm(a,a.FRAGMENT_SHADER,L);a.attachShader(A,j),a.attachShader(A,k),n.index0AttributeName!==void 0?a.bindAttribLocation(A,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(A,0,"position"),a.linkProgram(A);function F(H){if(s.debug.checkShaderErrors){const de=a.getProgramInfoLog(A).trim(),ee=a.getShaderInfoLog(j).trim(),_e=a.getShaderInfoLog(k).trim();let ve=!0,ae=!0;if(a.getProgramParameter(A,a.LINK_STATUS)===!1)if(ve=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,A,j,k);else{const q=mm(a,j,"vertex"),U=mm(a,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(A,a.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+de+`
`+q+`
`+U)}else de!==""?console.warn("THREE.WebGLProgram: Program Info Log:",de):(ee===""||_e==="")&&(ae=!1);ae&&(H.diagnostics={runnable:ve,programLog:de,vertexShader:{log:ee,prefix:v},fragmentShader:{log:_e,prefix:_}})}a.deleteShader(j),a.deleteShader(k),W=new Cl(a,A),D=ZM(a,A)}let W;this.getUniforms=function(){return W===void 0&&F(this),W};let D;this.getAttributes=function(){return D===void 0&&F(this),D};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=a.getProgramParameter(A,GM)),C},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(A),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=WM++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=j,this.fragmentShader=k,this}let cE=0;class uE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),c=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(a)===!1&&(d.add(a),a.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new fE(e),n.set(e,r)),r}}class fE{constructor(e){this.id=cE++,this.code=e,this.usedTimes=0}}function dE(s,e,n,r,a,c,d){const f=new Gf,h=new uE,m=new Set,g=[],y=a.logarithmicDepthBuffer,x=a.vertexTextures;let M=a.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(D){return m.add(D),D===0?"uv":`uv${D}`}function v(D,C,H,de,ee){const _e=de.fog,ve=ee.geometry,ae=D.isMeshStandardMaterial?de.environment:null,q=(D.isMeshStandardMaterial?n:e).get(D.envMap||ae),U=q&&q.mapping===Il?q.image.height:null,re=T[D.type];D.precision!==null&&(M=a.getMaxPrecision(D.precision),M!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",M,"instead."));const se=ve.morphAttributes.position||ve.morphAttributes.normal||ve.morphAttributes.color,I=se!==void 0?se.length:0;let te=0;ve.morphAttributes.position!==void 0&&(te=1),ve.morphAttributes.normal!==void 0&&(te=2),ve.morphAttributes.color!==void 0&&(te=3);let Pe,K,X,pe;if(re){const _t=_i[re];Pe=_t.vertexShader,K=_t.fragmentShader}else Pe=D.vertexShader,K=D.fragmentShader,h.update(D),X=h.getVertexShaderID(D),pe=h.getFragmentShaderID(D);const xe=s.getRenderTarget(),Ce=ee.isInstancedMesh===!0,Re=ee.isBatchedMesh===!0,ze=!!D.map,pt=!!D.matcap,z=!!q,vt=!!D.aoMap,Qe=!!D.lightMap,ct=!!D.bumpMap,Be=!!D.normalMap,gt=!!D.displacementMap,et=!!D.emissiveMap,Je=!!D.metalnessMap,R=!!D.roughnessMap,S=D.anisotropy>0,B=D.clearcoat>0,$=D.dispersion>0,ce=D.iridescence>0,he=D.sheen>0,Me=D.transmission>0,Se=S&&!!D.anisotropyMap,be=B&&!!D.clearcoatMap,Ve=B&&!!D.clearcoatNormalMap,ye=B&&!!D.clearcoatRoughnessMap,De=ce&&!!D.iridescenceMap,rt=ce&&!!D.iridescenceThicknessMap,We=he&&!!D.sheenColorMap,Ue=he&&!!D.sheenRoughnessMap,Ye=!!D.specularMap,Ze=!!D.specularColorMap,yt=!!D.specularIntensityMap,E=Me&&!!D.transmissionMap,ne=Me&&!!D.thicknessMap,oe=!!D.gradientMap,me=!!D.alphaMap,we=D.alphaTest>0,$e=!!D.alphaHash,ot=!!D.extensions;let It=xr;D.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(It=s.toneMapping);const Ht={shaderID:re,shaderType:D.type,shaderName:D.name,vertexShader:Pe,fragmentShader:K,defines:D.defines,customVertexShaderID:X,customFragmentShaderID:pe,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:M,batching:Re,batchingColor:Re&&ee._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&ee.instanceColor!==null,instancingMorph:Ce&&ee.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:xe===null?s.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:Sr,alphaToCoverage:!!D.alphaToCoverage,map:ze,matcap:pt,envMap:z,envMapMode:z&&q.mapping,envMapCubeUVHeight:U,aoMap:vt,lightMap:Qe,bumpMap:ct,normalMap:Be,displacementMap:x&&gt,emissiveMap:et,normalMapObjectSpace:Be&&D.normalMapType===ov,normalMapTangentSpace:Be&&D.normalMapType===sv,metalnessMap:Je,roughnessMap:R,anisotropy:S,anisotropyMap:Se,clearcoat:B,clearcoatMap:be,clearcoatNormalMap:Ve,clearcoatRoughnessMap:ye,dispersion:$,iridescence:ce,iridescenceMap:De,iridescenceThicknessMap:rt,sheen:he,sheenColorMap:We,sheenRoughnessMap:Ue,specularMap:Ye,specularColorMap:Ze,specularIntensityMap:yt,transmission:Me,transmissionMap:E,thicknessMap:ne,gradientMap:oe,opaque:D.transparent===!1&&D.blending===Gs&&D.alphaToCoverage===!1,alphaMap:me,alphaTest:we,alphaHash:$e,combine:D.combine,mapUv:ze&&A(D.map.channel),aoMapUv:vt&&A(D.aoMap.channel),lightMapUv:Qe&&A(D.lightMap.channel),bumpMapUv:ct&&A(D.bumpMap.channel),normalMapUv:Be&&A(D.normalMap.channel),displacementMapUv:gt&&A(D.displacementMap.channel),emissiveMapUv:et&&A(D.emissiveMap.channel),metalnessMapUv:Je&&A(D.metalnessMap.channel),roughnessMapUv:R&&A(D.roughnessMap.channel),anisotropyMapUv:Se&&A(D.anisotropyMap.channel),clearcoatMapUv:be&&A(D.clearcoatMap.channel),clearcoatNormalMapUv:Ve&&A(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&A(D.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&A(D.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&A(D.iridescenceThicknessMap.channel),sheenColorMapUv:We&&A(D.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&A(D.sheenRoughnessMap.channel),specularMapUv:Ye&&A(D.specularMap.channel),specularColorMapUv:Ze&&A(D.specularColorMap.channel),specularIntensityMapUv:yt&&A(D.specularIntensityMap.channel),transmissionMapUv:E&&A(D.transmissionMap.channel),thicknessMapUv:ne&&A(D.thicknessMap.channel),alphaMapUv:me&&A(D.alphaMap.channel),vertexTangents:!!ve.attributes.tangent&&(Be||S),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!ve.attributes.color&&ve.attributes.color.itemSize===4,pointsUvs:ee.isPoints===!0&&!!ve.attributes.uv&&(ze||me),fog:!!_e,useFog:D.fog===!0,fogExp2:!!_e&&_e.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:y,skinning:ee.isSkinnedMesh===!0,morphTargets:ve.morphAttributes.position!==void 0,morphNormals:ve.morphAttributes.normal!==void 0,morphColors:ve.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:te,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:D.dithering,shadowMapEnabled:s.shadowMap.enabled&&H.length>0,shadowMapType:s.shadowMap.type,toneMapping:It,decodeVideoTexture:ze&&D.map.isVideoTexture===!0&&At.getTransfer(D.map.colorSpace)===Nt,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===vi,flipSided:D.side===Mn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:ot&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&D.extensions.multiDraw===!0||Re)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Ht.vertexUv1s=m.has(1),Ht.vertexUv2s=m.has(2),Ht.vertexUv3s=m.has(3),m.clear(),Ht}function _(D){const C=[];if(D.shaderID?C.push(D.shaderID):(C.push(D.customVertexShaderID),C.push(D.customFragmentShaderID)),D.defines!==void 0)for(const H in D.defines)C.push(H),C.push(D.defines[H]);return D.isRawShaderMaterial===!1&&(N(C,D),b(C,D),C.push(s.outputColorSpace)),C.push(D.customProgramCacheKey),C.join()}function N(D,C){D.push(C.precision),D.push(C.outputColorSpace),D.push(C.envMapMode),D.push(C.envMapCubeUVHeight),D.push(C.mapUv),D.push(C.alphaMapUv),D.push(C.lightMapUv),D.push(C.aoMapUv),D.push(C.bumpMapUv),D.push(C.normalMapUv),D.push(C.displacementMapUv),D.push(C.emissiveMapUv),D.push(C.metalnessMapUv),D.push(C.roughnessMapUv),D.push(C.anisotropyMapUv),D.push(C.clearcoatMapUv),D.push(C.clearcoatNormalMapUv),D.push(C.clearcoatRoughnessMapUv),D.push(C.iridescenceMapUv),D.push(C.iridescenceThicknessMapUv),D.push(C.sheenColorMapUv),D.push(C.sheenRoughnessMapUv),D.push(C.specularMapUv),D.push(C.specularColorMapUv),D.push(C.specularIntensityMapUv),D.push(C.transmissionMapUv),D.push(C.thicknessMapUv),D.push(C.combine),D.push(C.fogExp2),D.push(C.sizeAttenuation),D.push(C.morphTargetsCount),D.push(C.morphAttributeCount),D.push(C.numDirLights),D.push(C.numPointLights),D.push(C.numSpotLights),D.push(C.numSpotLightMaps),D.push(C.numHemiLights),D.push(C.numRectAreaLights),D.push(C.numDirLightShadows),D.push(C.numPointLightShadows),D.push(C.numSpotLightShadows),D.push(C.numSpotLightShadowsWithMaps),D.push(C.numLightProbes),D.push(C.shadowMapType),D.push(C.toneMapping),D.push(C.numClippingPlanes),D.push(C.numClipIntersection),D.push(C.depthPacking)}function b(D,C){f.disableAll(),C.supportsVertexTextures&&f.enable(0),C.instancing&&f.enable(1),C.instancingColor&&f.enable(2),C.instancingMorph&&f.enable(3),C.matcap&&f.enable(4),C.envMap&&f.enable(5),C.normalMapObjectSpace&&f.enable(6),C.normalMapTangentSpace&&f.enable(7),C.clearcoat&&f.enable(8),C.iridescence&&f.enable(9),C.alphaTest&&f.enable(10),C.vertexColors&&f.enable(11),C.vertexAlphas&&f.enable(12),C.vertexUv1s&&f.enable(13),C.vertexUv2s&&f.enable(14),C.vertexUv3s&&f.enable(15),C.vertexTangents&&f.enable(16),C.anisotropy&&f.enable(17),C.alphaHash&&f.enable(18),C.batching&&f.enable(19),C.dispersion&&f.enable(20),C.batchingColor&&f.enable(21),D.push(f.mask),f.disableAll(),C.fog&&f.enable(0),C.useFog&&f.enable(1),C.flatShading&&f.enable(2),C.logarithmicDepthBuffer&&f.enable(3),C.skinning&&f.enable(4),C.morphTargets&&f.enable(5),C.morphNormals&&f.enable(6),C.morphColors&&f.enable(7),C.premultipliedAlpha&&f.enable(8),C.shadowMapEnabled&&f.enable(9),C.doubleSided&&f.enable(10),C.flipSided&&f.enable(11),C.useDepthPacking&&f.enable(12),C.dithering&&f.enable(13),C.transmission&&f.enable(14),C.sheen&&f.enable(15),C.opaque&&f.enable(16),C.pointsUvs&&f.enable(17),C.decodeVideoTexture&&f.enable(18),C.alphaToCoverage&&f.enable(19),D.push(f.mask)}function L(D){const C=T[D.type];let H;if(C){const de=_i[C];H=$v.clone(de.uniforms)}else H=D.uniforms;return H}function j(D,C){let H;for(let de=0,ee=g.length;de<ee;de++){const _e=g[de];if(_e.cacheKey===C){H=_e,++H.usedTimes;break}}return H===void 0&&(H=new lE(s,C,D,c),g.push(H)),H}function k(D){if(--D.usedTimes===0){const C=g.indexOf(D);g[C]=g[g.length-1],g.pop(),D.destroy()}}function F(D){h.remove(D)}function W(){h.dispose()}return{getParameters:v,getProgramCacheKey:_,getUniforms:L,acquireProgram:j,releaseProgram:k,releaseShaderCache:F,programs:g,dispose:W}}function hE(){let s=new WeakMap;function e(c){let d=s.get(c);return d===void 0&&(d={},s.set(c,d)),d}function n(c){s.delete(c)}function r(c,d,f){s.get(c)[d]=f}function a(){s=new WeakMap}return{get:e,remove:n,update:r,dispose:a}}function pE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function ym(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Sm(){const s=[];let e=0;const n=[],r=[],a=[];function c(){e=0,n.length=0,r.length=0,a.length=0}function d(y,x,M,T,A,v){let _=s[e];return _===void 0?(_={id:y.id,object:y,geometry:x,material:M,groupOrder:T,renderOrder:y.renderOrder,z:A,group:v},s[e]=_):(_.id=y.id,_.object=y,_.geometry=x,_.material=M,_.groupOrder=T,_.renderOrder=y.renderOrder,_.z=A,_.group=v),e++,_}function f(y,x,M,T,A,v){const _=d(y,x,M,T,A,v);M.transmission>0?r.push(_):M.transparent===!0?a.push(_):n.push(_)}function h(y,x,M,T,A,v){const _=d(y,x,M,T,A,v);M.transmission>0?r.unshift(_):M.transparent===!0?a.unshift(_):n.unshift(_)}function m(y,x){n.length>1&&n.sort(y||pE),r.length>1&&r.sort(x||ym),a.length>1&&a.sort(x||ym)}function g(){for(let y=e,x=s.length;y<x;y++){const M=s[y];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:n,transmissive:r,transparent:a,init:c,push:f,unshift:h,finish:g,sort:m}}function mE(){let s=new WeakMap;function e(r,a){const c=s.get(r);let d;return c===void 0?(d=new Sm,s.set(r,[d])):a>=c.length?(d=new Sm,c.push(d)):d=c[a],d}function n(){s=new WeakMap}return{get:e,dispose:n}}function gE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Q,color:new Ct};break;case"SpotLight":n={position:new Q,direction:new Q,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Q,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Q,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":n={color:new Ct,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return s[e.id]=n,n}}}function _E(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let vE=0;function xE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function yE(s){const e=new gE,n=_E(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new Q);const a=new Q,c=new jt,d=new jt;function f(m){let g=0,y=0,x=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let M=0,T=0,A=0,v=0,_=0,N=0,b=0,L=0,j=0,k=0,F=0;m.sort(xE);for(let D=0,C=m.length;D<C;D++){const H=m[D],de=H.color,ee=H.intensity,_e=H.distance,ve=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)g+=de.r*ee,y+=de.g*ee,x+=de.b*ee;else if(H.isLightProbe){for(let ae=0;ae<9;ae++)r.probe[ae].addScaledVector(H.sh.coefficients[ae],ee);F++}else if(H.isDirectionalLight){const ae=e.get(H);if(ae.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const q=H.shadow,U=n.get(H);U.shadowIntensity=q.intensity,U.shadowBias=q.bias,U.shadowNormalBias=q.normalBias,U.shadowRadius=q.radius,U.shadowMapSize=q.mapSize,r.directionalShadow[M]=U,r.directionalShadowMap[M]=ve,r.directionalShadowMatrix[M]=H.shadow.matrix,N++}r.directional[M]=ae,M++}else if(H.isSpotLight){const ae=e.get(H);ae.position.setFromMatrixPosition(H.matrixWorld),ae.color.copy(de).multiplyScalar(ee),ae.distance=_e,ae.coneCos=Math.cos(H.angle),ae.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),ae.decay=H.decay,r.spot[A]=ae;const q=H.shadow;if(H.map&&(r.spotLightMap[j]=H.map,j++,q.updateMatrices(H),H.castShadow&&k++),r.spotLightMatrix[A]=q.matrix,H.castShadow){const U=n.get(H);U.shadowIntensity=q.intensity,U.shadowBias=q.bias,U.shadowNormalBias=q.normalBias,U.shadowRadius=q.radius,U.shadowMapSize=q.mapSize,r.spotShadow[A]=U,r.spotShadowMap[A]=ve,L++}A++}else if(H.isRectAreaLight){const ae=e.get(H);ae.color.copy(de).multiplyScalar(ee),ae.halfWidth.set(H.width*.5,0,0),ae.halfHeight.set(0,H.height*.5,0),r.rectArea[v]=ae,v++}else if(H.isPointLight){const ae=e.get(H);if(ae.color.copy(H.color).multiplyScalar(H.intensity),ae.distance=H.distance,ae.decay=H.decay,H.castShadow){const q=H.shadow,U=n.get(H);U.shadowIntensity=q.intensity,U.shadowBias=q.bias,U.shadowNormalBias=q.normalBias,U.shadowRadius=q.radius,U.shadowMapSize=q.mapSize,U.shadowCameraNear=q.camera.near,U.shadowCameraFar=q.camera.far,r.pointShadow[T]=U,r.pointShadowMap[T]=ve,r.pointShadowMatrix[T]=H.shadow.matrix,b++}r.point[T]=ae,T++}else if(H.isHemisphereLight){const ae=e.get(H);ae.skyColor.copy(H.color).multiplyScalar(ee),ae.groundColor.copy(H.groundColor).multiplyScalar(ee),r.hemi[_]=ae,_++}}v>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Fe.LTC_FLOAT_1,r.rectAreaLTC2=Fe.LTC_FLOAT_2):(r.rectAreaLTC1=Fe.LTC_HALF_1,r.rectAreaLTC2=Fe.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=y,r.ambient[2]=x;const W=r.hash;(W.directionalLength!==M||W.pointLength!==T||W.spotLength!==A||W.rectAreaLength!==v||W.hemiLength!==_||W.numDirectionalShadows!==N||W.numPointShadows!==b||W.numSpotShadows!==L||W.numSpotMaps!==j||W.numLightProbes!==F)&&(r.directional.length=M,r.spot.length=A,r.rectArea.length=v,r.point.length=T,r.hemi.length=_,r.directionalShadow.length=N,r.directionalShadowMap.length=N,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=N,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=L+j-k,r.spotLightMap.length=j,r.numSpotLightShadowsWithMaps=k,r.numLightProbes=F,W.directionalLength=M,W.pointLength=T,W.spotLength=A,W.rectAreaLength=v,W.hemiLength=_,W.numDirectionalShadows=N,W.numPointShadows=b,W.numSpotShadows=L,W.numSpotMaps=j,W.numLightProbes=F,r.version=vE++)}function h(m,g){let y=0,x=0,M=0,T=0,A=0;const v=g.matrixWorldInverse;for(let _=0,N=m.length;_<N;_++){const b=m[_];if(b.isDirectionalLight){const L=r.directional[y];L.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),L.direction.sub(a),L.direction.transformDirection(v),y++}else if(b.isSpotLight){const L=r.spot[M];L.position.setFromMatrixPosition(b.matrixWorld),L.position.applyMatrix4(v),L.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),L.direction.sub(a),L.direction.transformDirection(v),M++}else if(b.isRectAreaLight){const L=r.rectArea[T];L.position.setFromMatrixPosition(b.matrixWorld),L.position.applyMatrix4(v),d.identity(),c.copy(b.matrixWorld),c.premultiply(v),d.extractRotation(c),L.halfWidth.set(b.width*.5,0,0),L.halfHeight.set(0,b.height*.5,0),L.halfWidth.applyMatrix4(d),L.halfHeight.applyMatrix4(d),T++}else if(b.isPointLight){const L=r.point[x];L.position.setFromMatrixPosition(b.matrixWorld),L.position.applyMatrix4(v),x++}else if(b.isHemisphereLight){const L=r.hemi[A];L.direction.setFromMatrixPosition(b.matrixWorld),L.direction.transformDirection(v),A++}}}return{setup:f,setupView:h,state:r}}function Mm(s){const e=new yE(s),n=[],r=[];function a(g){m.camera=g,n.length=0,r.length=0}function c(g){n.push(g)}function d(g){r.push(g)}function f(){e.setup(n)}function h(g){e.setupView(n,g)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:f,setupLightsView:h,pushLight:c,pushShadow:d}}function SE(s){let e=new WeakMap;function n(a,c=0){const d=e.get(a);let f;return d===void 0?(f=new Mm(s),e.set(a,[f])):c>=d.length?(f=new Mm(s),d.push(f)):f=d[c],f}function r(){e=new WeakMap}return{get:n,dispose:r}}class ME extends Fl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=iv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class EE extends Fl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const wE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,TE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function AE(s,e,n){let r=new ig;const a=new ut,c=new ut,d=new on,f=new ME({depthPacking:rv}),h=new EE,m={},g=n.maxTextureSize,y={[zi]:Mn,[Mn]:zi,[vi]:vi},x=new yr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:wE,fragmentShader:TE}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const T=new Hi;T.setAttribute("position",new xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Zn(T,x),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nm;let _=this.type;this.render=function(k,F,W){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||k.length===0)return;const D=s.getRenderTarget(),C=s.getActiveCubeFace(),H=s.getActiveMipmapLevel(),de=s.state;de.setBlending(vr),de.buffers.color.setClear(1,1,1,1),de.buffers.depth.setTest(!0),de.setScissorTest(!1);const ee=_!==Fi&&this.type===Fi,_e=_===Fi&&this.type!==Fi;for(let ve=0,ae=k.length;ve<ae;ve++){const q=k[ve],U=q.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;a.copy(U.mapSize);const re=U.getFrameExtents();if(a.multiply(re),c.copy(U.mapSize),(a.x>g||a.y>g)&&(a.x>g&&(c.x=Math.floor(g/re.x),a.x=c.x*re.x,U.mapSize.x=c.x),a.y>g&&(c.y=Math.floor(g/re.y),a.y=c.y*re.y,U.mapSize.y=c.y)),U.map===null||ee===!0||_e===!0){const I=this.type!==Fi?{minFilter:Kn,magFilter:Kn}:{};U.map!==null&&U.map.dispose(),U.map=new $r(a.x,a.y,I),U.map.texture.name=q.name+".shadowMap",U.camera.updateProjectionMatrix()}s.setRenderTarget(U.map),s.clear();const se=U.getViewportCount();for(let I=0;I<se;I++){const te=U.getViewport(I);d.set(c.x*te.x,c.y*te.y,c.x*te.z,c.y*te.w),de.viewport(d),U.updateMatrices(q,I),r=U.getFrustum(),L(F,W,U.camera,q,this.type)}U.isPointLightShadow!==!0&&this.type===Fi&&N(U,W),U.needsUpdate=!1}_=this.type,v.needsUpdate=!1,s.setRenderTarget(D,C,H)};function N(k,F){const W=e.update(A);x.defines.VSM_SAMPLES!==k.blurSamples&&(x.defines.VSM_SAMPLES=k.blurSamples,M.defines.VSM_SAMPLES=k.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new $r(a.x,a.y)),x.uniforms.shadow_pass.value=k.map.texture,x.uniforms.resolution.value=k.mapSize,x.uniforms.radius.value=k.radius,s.setRenderTarget(k.mapPass),s.clear(),s.renderBufferDirect(F,null,W,x,A,null),M.uniforms.shadow_pass.value=k.mapPass.texture,M.uniforms.resolution.value=k.mapSize,M.uniforms.radius.value=k.radius,s.setRenderTarget(k.map),s.clear(),s.renderBufferDirect(F,null,W,M,A,null)}function b(k,F,W,D){let C=null;const H=W.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(H!==void 0)C=H;else if(C=W.isPointLight===!0?h:f,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const de=C.uuid,ee=F.uuid;let _e=m[de];_e===void 0&&(_e={},m[de]=_e);let ve=_e[ee];ve===void 0&&(ve=C.clone(),_e[ee]=ve,F.addEventListener("dispose",j)),C=ve}if(C.visible=F.visible,C.wireframe=F.wireframe,D===Fi?C.side=F.shadowSide!==null?F.shadowSide:F.side:C.side=F.shadowSide!==null?F.shadowSide:y[F.side],C.alphaMap=F.alphaMap,C.alphaTest=F.alphaTest,C.map=F.map,C.clipShadows=F.clipShadows,C.clippingPlanes=F.clippingPlanes,C.clipIntersection=F.clipIntersection,C.displacementMap=F.displacementMap,C.displacementScale=F.displacementScale,C.displacementBias=F.displacementBias,C.wireframeLinewidth=F.wireframeLinewidth,C.linewidth=F.linewidth,W.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const de=s.properties.get(C);de.light=W}return C}function L(k,F,W,D,C){if(k.visible===!1)return;if(k.layers.test(F.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&C===Fi)&&(!k.frustumCulled||r.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,k.matrixWorld);const ee=e.update(k),_e=k.material;if(Array.isArray(_e)){const ve=ee.groups;for(let ae=0,q=ve.length;ae<q;ae++){const U=ve[ae],re=_e[U.materialIndex];if(re&&re.visible){const se=b(k,re,D,C);k.onBeforeShadow(s,k,F,W,ee,se,U),s.renderBufferDirect(W,null,ee,se,k,U),k.onAfterShadow(s,k,F,W,ee,se,U)}}}else if(_e.visible){const ve=b(k,_e,D,C);k.onBeforeShadow(s,k,F,W,ee,ve,null),s.renderBufferDirect(W,null,ee,ve,k,null),k.onAfterShadow(s,k,F,W,ee,ve,null)}}const de=k.children;for(let ee=0,_e=de.length;ee<_e;ee++)L(de[ee],F,W,D,C)}function j(k){k.target.removeEventListener("dispose",j);for(const W in m){const D=m[W],C=k.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}function CE(s){function e(){let E=!1;const ne=new on;let oe=null;const me=new on(0,0,0,0);return{setMask:function(we){oe!==we&&!E&&(s.colorMask(we,we,we,we),oe=we)},setLocked:function(we){E=we},setClear:function(we,$e,ot,It,Ht){Ht===!0&&(we*=It,$e*=It,ot*=It),ne.set(we,$e,ot,It),me.equals(ne)===!1&&(s.clearColor(we,$e,ot,It),me.copy(ne))},reset:function(){E=!1,oe=null,me.set(-1,0,0,0)}}}function n(){let E=!1,ne=null,oe=null,me=null;return{setTest:function(we){we?pe(s.DEPTH_TEST):xe(s.DEPTH_TEST)},setMask:function(we){ne!==we&&!E&&(s.depthMask(we),ne=we)},setFunc:function(we){if(oe!==we){switch(we){case B0:s.depthFunc(s.NEVER);break;case H0:s.depthFunc(s.ALWAYS);break;case V0:s.depthFunc(s.LESS);break;case Rl:s.depthFunc(s.LEQUAL);break;case G0:s.depthFunc(s.EQUAL);break;case W0:s.depthFunc(s.GEQUAL);break;case X0:s.depthFunc(s.GREATER);break;case j0:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}oe=we}},setLocked:function(we){E=we},setClear:function(we){me!==we&&(s.clearDepth(we),me=we)},reset:function(){E=!1,ne=null,oe=null,me=null}}}function r(){let E=!1,ne=null,oe=null,me=null,we=null,$e=null,ot=null,It=null,Ht=null;return{setTest:function(_t){E||(_t?pe(s.STENCIL_TEST):xe(s.STENCIL_TEST))},setMask:function(_t){ne!==_t&&!E&&(s.stencilMask(_t),ne=_t)},setFunc:function(_t,Ot,kt){(oe!==_t||me!==Ot||we!==kt)&&(s.stencilFunc(_t,Ot,kt),oe=_t,me=Ot,we=kt)},setOp:function(_t,Ot,kt){($e!==_t||ot!==Ot||It!==kt)&&(s.stencilOp(_t,Ot,kt),$e=_t,ot=Ot,It=kt)},setLocked:function(_t){E=_t},setClear:function(_t){Ht!==_t&&(s.clearStencil(_t),Ht=_t)},reset:function(){E=!1,ne=null,oe=null,me=null,we=null,$e=null,ot=null,It=null,Ht=null}}}const a=new e,c=new n,d=new r,f=new WeakMap,h=new WeakMap;let m={},g={},y=new WeakMap,x=[],M=null,T=!1,A=null,v=null,_=null,N=null,b=null,L=null,j=null,k=new Ct(0,0,0),F=0,W=!1,D=null,C=null,H=null,de=null,ee=null;const _e=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ve=!1,ae=0;const q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(q)[1]),ve=ae>=1):q.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),ve=ae>=2);let U=null,re={};const se=s.getParameter(s.SCISSOR_BOX),I=s.getParameter(s.VIEWPORT),te=new on().fromArray(se),Pe=new on().fromArray(I);function K(E,ne,oe,me){const we=new Uint8Array(4),$e=s.createTexture();s.bindTexture(E,$e),s.texParameteri(E,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(E,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ot=0;ot<oe;ot++)E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY?s.texImage3D(ne,0,s.RGBA,1,1,me,0,s.RGBA,s.UNSIGNED_BYTE,we):s.texImage2D(ne+ot,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,we);return $e}const X={};X[s.TEXTURE_2D]=K(s.TEXTURE_2D,s.TEXTURE_2D,1),X[s.TEXTURE_CUBE_MAP]=K(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[s.TEXTURE_2D_ARRAY]=K(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),X[s.TEXTURE_3D]=K(s.TEXTURE_3D,s.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),d.setClear(0),pe(s.DEPTH_TEST),c.setFunc(Rl),ct(!1),Be(Cp),pe(s.CULL_FACE),vt(vr);function pe(E){m[E]!==!0&&(s.enable(E),m[E]=!0)}function xe(E){m[E]!==!1&&(s.disable(E),m[E]=!1)}function Ce(E,ne){return g[E]!==ne?(s.bindFramebuffer(E,ne),g[E]=ne,E===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=ne),E===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=ne),!0):!1}function Re(E,ne){let oe=x,me=!1;if(E){oe=y.get(ne),oe===void 0&&(oe=[],y.set(ne,oe));const we=E.textures;if(oe.length!==we.length||oe[0]!==s.COLOR_ATTACHMENT0){for(let $e=0,ot=we.length;$e<ot;$e++)oe[$e]=s.COLOR_ATTACHMENT0+$e;oe.length=we.length,me=!0}}else oe[0]!==s.BACK&&(oe[0]=s.BACK,me=!0);me&&s.drawBuffers(oe)}function ze(E){return M!==E?(s.useProgram(E),M=E,!0):!1}const pt={[Gr]:s.FUNC_ADD,[E0]:s.FUNC_SUBTRACT,[w0]:s.FUNC_REVERSE_SUBTRACT};pt[T0]=s.MIN,pt[A0]=s.MAX;const z={[C0]:s.ZERO,[R0]:s.ONE,[b0]:s.SRC_COLOR,[Ku]:s.SRC_ALPHA,[U0]:s.SRC_ALPHA_SATURATE,[N0]:s.DST_COLOR,[L0]:s.DST_ALPHA,[P0]:s.ONE_MINUS_SRC_COLOR,[Zu]:s.ONE_MINUS_SRC_ALPHA,[I0]:s.ONE_MINUS_DST_COLOR,[D0]:s.ONE_MINUS_DST_ALPHA,[F0]:s.CONSTANT_COLOR,[O0]:s.ONE_MINUS_CONSTANT_COLOR,[k0]:s.CONSTANT_ALPHA,[z0]:s.ONE_MINUS_CONSTANT_ALPHA};function vt(E,ne,oe,me,we,$e,ot,It,Ht,_t){if(E===vr){T===!0&&(xe(s.BLEND),T=!1);return}if(T===!1&&(pe(s.BLEND),T=!0),E!==M0){if(E!==A||_t!==W){if((v!==Gr||b!==Gr)&&(s.blendEquation(s.FUNC_ADD),v=Gr,b=Gr),_t)switch(E){case Gs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Rp:s.blendFunc(s.ONE,s.ONE);break;case bp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Pp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",E);break}else switch(E){case Gs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Rp:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case bp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Pp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",E);break}_=null,N=null,L=null,j=null,k.set(0,0,0),F=0,A=E,W=_t}return}we=we||ne,$e=$e||oe,ot=ot||me,(ne!==v||we!==b)&&(s.blendEquationSeparate(pt[ne],pt[we]),v=ne,b=we),(oe!==_||me!==N||$e!==L||ot!==j)&&(s.blendFuncSeparate(z[oe],z[me],z[$e],z[ot]),_=oe,N=me,L=$e,j=ot),(It.equals(k)===!1||Ht!==F)&&(s.blendColor(It.r,It.g,It.b,Ht),k.copy(It),F=Ht),A=E,W=!1}function Qe(E,ne){E.side===vi?xe(s.CULL_FACE):pe(s.CULL_FACE);let oe=E.side===Mn;ne&&(oe=!oe),ct(oe),E.blending===Gs&&E.transparent===!1?vt(vr):vt(E.blending,E.blendEquation,E.blendSrc,E.blendDst,E.blendEquationAlpha,E.blendSrcAlpha,E.blendDstAlpha,E.blendColor,E.blendAlpha,E.premultipliedAlpha),c.setFunc(E.depthFunc),c.setTest(E.depthTest),c.setMask(E.depthWrite),a.setMask(E.colorWrite);const me=E.stencilWrite;d.setTest(me),me&&(d.setMask(E.stencilWriteMask),d.setFunc(E.stencilFunc,E.stencilRef,E.stencilFuncMask),d.setOp(E.stencilFail,E.stencilZFail,E.stencilZPass)),et(E.polygonOffset,E.polygonOffsetFactor,E.polygonOffsetUnits),E.alphaToCoverage===!0?pe(s.SAMPLE_ALPHA_TO_COVERAGE):xe(s.SAMPLE_ALPHA_TO_COVERAGE)}function ct(E){D!==E&&(E?s.frontFace(s.CW):s.frontFace(s.CCW),D=E)}function Be(E){E!==x0?(pe(s.CULL_FACE),E!==C&&(E===Cp?s.cullFace(s.BACK):E===y0?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):xe(s.CULL_FACE),C=E}function gt(E){E!==H&&(ve&&s.lineWidth(E),H=E)}function et(E,ne,oe){E?(pe(s.POLYGON_OFFSET_FILL),(de!==ne||ee!==oe)&&(s.polygonOffset(ne,oe),de=ne,ee=oe)):xe(s.POLYGON_OFFSET_FILL)}function Je(E){E?pe(s.SCISSOR_TEST):xe(s.SCISSOR_TEST)}function R(E){E===void 0&&(E=s.TEXTURE0+_e-1),U!==E&&(s.activeTexture(E),U=E)}function S(E,ne,oe){oe===void 0&&(U===null?oe=s.TEXTURE0+_e-1:oe=U);let me=re[oe];me===void 0&&(me={type:void 0,texture:void 0},re[oe]=me),(me.type!==E||me.texture!==ne)&&(U!==oe&&(s.activeTexture(oe),U=oe),s.bindTexture(E,ne||X[E]),me.type=E,me.texture=ne)}function B(){const E=re[U];E!==void 0&&E.type!==void 0&&(s.bindTexture(E.type,null),E.type=void 0,E.texture=void 0)}function $(){try{s.compressedTexImage2D.apply(s,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function ce(){try{s.compressedTexImage3D.apply(s,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function he(){try{s.texSubImage2D.apply(s,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Me(){try{s.texSubImage3D.apply(s,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Se(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function be(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Ve(){try{s.texStorage2D.apply(s,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function ye(){try{s.texStorage3D.apply(s,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function De(){try{s.texImage2D.apply(s,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function rt(){try{s.texImage3D.apply(s,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function We(E){te.equals(E)===!1&&(s.scissor(E.x,E.y,E.z,E.w),te.copy(E))}function Ue(E){Pe.equals(E)===!1&&(s.viewport(E.x,E.y,E.z,E.w),Pe.copy(E))}function Ye(E,ne){let oe=h.get(ne);oe===void 0&&(oe=new WeakMap,h.set(ne,oe));let me=oe.get(E);me===void 0&&(me=s.getUniformBlockIndex(ne,E.name),oe.set(E,me))}function Ze(E,ne){const me=h.get(ne).get(E);f.get(ne)!==me&&(s.uniformBlockBinding(ne,me,E.__bindingPointIndex),f.set(ne,me))}function yt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),m={},U=null,re={},g={},y=new WeakMap,x=[],M=null,T=!1,A=null,v=null,_=null,N=null,b=null,L=null,j=null,k=new Ct(0,0,0),F=0,W=!1,D=null,C=null,H=null,de=null,ee=null,te.set(0,0,s.canvas.width,s.canvas.height),Pe.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),d.reset()}return{buffers:{color:a,depth:c,stencil:d},enable:pe,disable:xe,bindFramebuffer:Ce,drawBuffers:Re,useProgram:ze,setBlending:vt,setMaterial:Qe,setFlipSided:ct,setCullFace:Be,setLineWidth:gt,setPolygonOffset:et,setScissorTest:Je,activeTexture:R,bindTexture:S,unbindTexture:B,compressedTexImage2D:$,compressedTexImage3D:ce,texImage2D:De,texImage3D:rt,updateUBOMapping:Ye,uniformBlockBinding:Ze,texStorage2D:Ve,texStorage3D:ye,texSubImage2D:he,texSubImage3D:Me,compressedTexSubImage2D:Se,compressedTexSubImage3D:be,scissor:We,viewport:Ue,reset:yt}}function Em(s,e,n,r){const a=RE(r);switch(n){case zm:return s*e;case Hm:return s*e;case Vm:return s*e*2;case Gm:return s*e/a.components*a.byteLength;case Ff:return s*e/a.components*a.byteLength;case Wm:return s*e*2/a.components*a.byteLength;case Of:return s*e*2/a.components*a.byteLength;case Bm:return s*e*3/a.components*a.byteLength;case fi:return s*e*4/a.components*a.byteLength;case kf:return s*e*4/a.components*a.byteLength;case Ml:case El:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case wl:case Tl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case rf:case of:return Math.max(s,16)*Math.max(e,8)/4;case nf:case sf:return Math.max(s,8)*Math.max(e,8)/2;case af:case lf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case cf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case uf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ff:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case df:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case hf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case pf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case mf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case gf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case _f:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case vf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case xf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case yf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Sf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Mf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Ef:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Al:case wf:case Tf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Xm:case Af:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Cf:case Rf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function RE(s){switch(s){case Bi:case Fm:return{byteLength:1,components:1};case Vo:case Om:case Wo:return{byteLength:2,components:1};case If:case Uf:return{byteLength:2,components:4};case qr:case Nf:case Oi:return{byteLength:4,components:1};case km:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function bE(s,e,n,r,a,c,d){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new ut,g=new WeakMap;let y;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(R,S){return M?new OffscreenCanvas(R,S):Nl("canvas")}function A(R,S,B){let $=1;const ce=Je(R);if((ce.width>B||ce.height>B)&&($=B/Math.max(ce.width,ce.height)),$<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const he=Math.floor($*ce.width),Me=Math.floor($*ce.height);y===void 0&&(y=T(he,Me));const Se=S?T(he,Me):y;return Se.width=he,Se.height=Me,Se.getContext("2d").drawImage(R,0,0,he,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+he+"x"+Me+")."),Se}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),R;return R}function v(R){return R.generateMipmaps&&R.minFilter!==Kn&&R.minFilter!==Sn}function _(R){s.generateMipmap(R)}function N(R,S,B,$,ce=!1){if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let he=S;if(S===s.RED&&(B===s.FLOAT&&(he=s.R32F),B===s.HALF_FLOAT&&(he=s.R16F),B===s.UNSIGNED_BYTE&&(he=s.R8)),S===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(he=s.R8UI),B===s.UNSIGNED_SHORT&&(he=s.R16UI),B===s.UNSIGNED_INT&&(he=s.R32UI),B===s.BYTE&&(he=s.R8I),B===s.SHORT&&(he=s.R16I),B===s.INT&&(he=s.R32I)),S===s.RG&&(B===s.FLOAT&&(he=s.RG32F),B===s.HALF_FLOAT&&(he=s.RG16F),B===s.UNSIGNED_BYTE&&(he=s.RG8)),S===s.RG_INTEGER&&(B===s.UNSIGNED_BYTE&&(he=s.RG8UI),B===s.UNSIGNED_SHORT&&(he=s.RG16UI),B===s.UNSIGNED_INT&&(he=s.RG32UI),B===s.BYTE&&(he=s.RG8I),B===s.SHORT&&(he=s.RG16I),B===s.INT&&(he=s.RG32I)),S===s.RGB&&B===s.UNSIGNED_INT_5_9_9_9_REV&&(he=s.RGB9_E5),S===s.RGBA){const Me=ce?bl:At.getTransfer($);B===s.FLOAT&&(he=s.RGBA32F),B===s.HALF_FLOAT&&(he=s.RGBA16F),B===s.UNSIGNED_BYTE&&(he=Me===Nt?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT_4_4_4_4&&(he=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(he=s.RGB5_A1)}return(he===s.R16F||he===s.R32F||he===s.RG16F||he===s.RG32F||he===s.RGBA16F||he===s.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function b(R,S){let B;return R?S===null||S===qr||S===qs?B=s.DEPTH24_STENCIL8:S===Oi?B=s.DEPTH32F_STENCIL8:S===Vo&&(B=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===qr||S===qs?B=s.DEPTH_COMPONENT24:S===Oi?B=s.DEPTH_COMPONENT32F:S===Vo&&(B=s.DEPTH_COMPONENT16),B}function L(R,S){return v(R)===!0||R.isFramebufferTexture&&R.minFilter!==Kn&&R.minFilter!==Sn?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function j(R){const S=R.target;S.removeEventListener("dispose",j),F(S),S.isVideoTexture&&g.delete(S)}function k(R){const S=R.target;S.removeEventListener("dispose",k),D(S)}function F(R){const S=r.get(R);if(S.__webglInit===void 0)return;const B=R.source,$=x.get(B);if($){const ce=$[S.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&W(R),Object.keys($).length===0&&x.delete(B)}r.remove(R)}function W(R){const S=r.get(R);s.deleteTexture(S.__webglTexture);const B=R.source,$=x.get(B);delete $[S.__cacheKey],d.memory.textures--}function D(R){const S=r.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(S.__webglFramebuffer[$]))for(let ce=0;ce<S.__webglFramebuffer[$].length;ce++)s.deleteFramebuffer(S.__webglFramebuffer[$][ce]);else s.deleteFramebuffer(S.__webglFramebuffer[$]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[$])}else{if(Array.isArray(S.__webglFramebuffer))for(let $=0;$<S.__webglFramebuffer.length;$++)s.deleteFramebuffer(S.__webglFramebuffer[$]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let $=0;$<S.__webglColorRenderbuffer.length;$++)S.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[$]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const B=R.textures;for(let $=0,ce=B.length;$<ce;$++){const he=r.get(B[$]);he.__webglTexture&&(s.deleteTexture(he.__webglTexture),d.memory.textures--),r.remove(B[$])}r.remove(R)}let C=0;function H(){C=0}function de(){const R=C;return R>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+a.maxTextures),C+=1,R}function ee(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function _e(R,S){const B=r.get(R);if(R.isVideoTexture&&gt(R),R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){const $=R.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(B,R,S);return}}n.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+S)}function ve(R,S){const B=r.get(R);if(R.version>0&&B.__version!==R.version){Pe(B,R,S);return}n.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+S)}function ae(R,S){const B=r.get(R);if(R.version>0&&B.__version!==R.version){Pe(B,R,S);return}n.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+S)}function q(R,S){const B=r.get(R);if(R.version>0&&B.__version!==R.version){K(B,R,S);return}n.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+S)}const U={[ef]:s.REPEAT,[jr]:s.CLAMP_TO_EDGE,[tf]:s.MIRRORED_REPEAT},re={[Kn]:s.NEAREST,[nv]:s.NEAREST_MIPMAP_NEAREST,[Ja]:s.NEAREST_MIPMAP_LINEAR,[Sn]:s.LINEAR,[Mu]:s.LINEAR_MIPMAP_NEAREST,[Yr]:s.LINEAR_MIPMAP_LINEAR},se={[av]:s.NEVER,[hv]:s.ALWAYS,[lv]:s.LESS,[jm]:s.LEQUAL,[cv]:s.EQUAL,[dv]:s.GEQUAL,[uv]:s.GREATER,[fv]:s.NOTEQUAL};function I(R,S){if(S.type===Oi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Sn||S.magFilter===Mu||S.magFilter===Ja||S.magFilter===Yr||S.minFilter===Sn||S.minFilter===Mu||S.minFilter===Ja||S.minFilter===Yr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,U[S.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,U[S.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,U[S.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,re[S.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,re[S.minFilter]),S.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,se[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Kn||S.minFilter!==Ja&&S.minFilter!==Yr||S.type===Oi&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||r.get(S).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");s.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,a.getMaxAnisotropy())),r.get(S).__currentAnisotropy=S.anisotropy}}}function te(R,S){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",j));const $=S.source;let ce=x.get($);ce===void 0&&(ce={},x.set($,ce));const he=ee(S);if(he!==R.__cacheKey){ce[he]===void 0&&(ce[he]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,B=!0),ce[he].usedTimes++;const Me=ce[R.__cacheKey];Me!==void 0&&(ce[R.__cacheKey].usedTimes--,Me.usedTimes===0&&W(S)),R.__cacheKey=he,R.__webglTexture=ce[he].texture}return B}function Pe(R,S,B){let $=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&($=s.TEXTURE_3D);const ce=te(R,S),he=S.source;n.bindTexture($,R.__webglTexture,s.TEXTURE0+B);const Me=r.get(he);if(he.version!==Me.__version||ce===!0){n.activeTexture(s.TEXTURE0+B);const Se=At.getPrimaries(At.workingColorSpace),be=S.colorSpace===_r?null:At.getPrimaries(S.colorSpace),Ve=S.colorSpace===_r||Se===be?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let ye=A(S.image,!1,a.maxTextureSize);ye=et(S,ye);const De=c.convert(S.format,S.colorSpace),rt=c.convert(S.type);let We=N(S.internalFormat,De,rt,S.colorSpace,S.isVideoTexture);I($,S);let Ue;const Ye=S.mipmaps,Ze=S.isVideoTexture!==!0,yt=Me.__version===void 0||ce===!0,E=he.dataReady,ne=L(S,ye);if(S.isDepthTexture)We=b(S.format===$s,S.type),yt&&(Ze?n.texStorage2D(s.TEXTURE_2D,1,We,ye.width,ye.height):n.texImage2D(s.TEXTURE_2D,0,We,ye.width,ye.height,0,De,rt,null));else if(S.isDataTexture)if(Ye.length>0){Ze&&yt&&n.texStorage2D(s.TEXTURE_2D,ne,We,Ye[0].width,Ye[0].height);for(let oe=0,me=Ye.length;oe<me;oe++)Ue=Ye[oe],Ze?E&&n.texSubImage2D(s.TEXTURE_2D,oe,0,0,Ue.width,Ue.height,De,rt,Ue.data):n.texImage2D(s.TEXTURE_2D,oe,We,Ue.width,Ue.height,0,De,rt,Ue.data);S.generateMipmaps=!1}else Ze?(yt&&n.texStorage2D(s.TEXTURE_2D,ne,We,ye.width,ye.height),E&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,ye.width,ye.height,De,rt,ye.data)):n.texImage2D(s.TEXTURE_2D,0,We,ye.width,ye.height,0,De,rt,ye.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ze&&yt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,ne,We,Ye[0].width,Ye[0].height,ye.depth);for(let oe=0,me=Ye.length;oe<me;oe++)if(Ue=Ye[oe],S.format!==fi)if(De!==null)if(Ze){if(E)if(S.layerUpdates.size>0){const we=Em(Ue.width,Ue.height,S.format,S.type);for(const $e of S.layerUpdates){const ot=Ue.data.subarray($e*we/Ue.data.BYTES_PER_ELEMENT,($e+1)*we/Ue.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,$e,Ue.width,Ue.height,1,De,ot,0,0)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,0,Ue.width,Ue.height,ye.depth,De,Ue.data,0,0)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,oe,We,Ue.width,Ue.height,ye.depth,0,Ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ze?E&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,0,Ue.width,Ue.height,ye.depth,De,rt,Ue.data):n.texImage3D(s.TEXTURE_2D_ARRAY,oe,We,Ue.width,Ue.height,ye.depth,0,De,rt,Ue.data)}else{Ze&&yt&&n.texStorage2D(s.TEXTURE_2D,ne,We,Ye[0].width,Ye[0].height);for(let oe=0,me=Ye.length;oe<me;oe++)Ue=Ye[oe],S.format!==fi?De!==null?Ze?E&&n.compressedTexSubImage2D(s.TEXTURE_2D,oe,0,0,Ue.width,Ue.height,De,Ue.data):n.compressedTexImage2D(s.TEXTURE_2D,oe,We,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?E&&n.texSubImage2D(s.TEXTURE_2D,oe,0,0,Ue.width,Ue.height,De,rt,Ue.data):n.texImage2D(s.TEXTURE_2D,oe,We,Ue.width,Ue.height,0,De,rt,Ue.data)}else if(S.isDataArrayTexture)if(Ze){if(yt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,ne,We,ye.width,ye.height,ye.depth),E)if(S.layerUpdates.size>0){const oe=Em(ye.width,ye.height,S.format,S.type);for(const me of S.layerUpdates){const we=ye.data.subarray(me*oe/ye.data.BYTES_PER_ELEMENT,(me+1)*oe/ye.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,me,ye.width,ye.height,1,De,rt,we)}S.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,De,rt,ye.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,We,ye.width,ye.height,ye.depth,0,De,rt,ye.data);else if(S.isData3DTexture)Ze?(yt&&n.texStorage3D(s.TEXTURE_3D,ne,We,ye.width,ye.height,ye.depth),E&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,De,rt,ye.data)):n.texImage3D(s.TEXTURE_3D,0,We,ye.width,ye.height,ye.depth,0,De,rt,ye.data);else if(S.isFramebufferTexture){if(yt)if(Ze)n.texStorage2D(s.TEXTURE_2D,ne,We,ye.width,ye.height);else{let oe=ye.width,me=ye.height;for(let we=0;we<ne;we++)n.texImage2D(s.TEXTURE_2D,we,We,oe,me,0,De,rt,null),oe>>=1,me>>=1}}else if(Ye.length>0){if(Ze&&yt){const oe=Je(Ye[0]);n.texStorage2D(s.TEXTURE_2D,ne,We,oe.width,oe.height)}for(let oe=0,me=Ye.length;oe<me;oe++)Ue=Ye[oe],Ze?E&&n.texSubImage2D(s.TEXTURE_2D,oe,0,0,De,rt,Ue):n.texImage2D(s.TEXTURE_2D,oe,We,De,rt,Ue);S.generateMipmaps=!1}else if(Ze){if(yt){const oe=Je(ye);n.texStorage2D(s.TEXTURE_2D,ne,We,oe.width,oe.height)}E&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,De,rt,ye)}else n.texImage2D(s.TEXTURE_2D,0,We,De,rt,ye);v(S)&&_($),Me.__version=he.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function K(R,S,B){if(S.image.length!==6)return;const $=te(R,S),ce=S.source;n.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+B);const he=r.get(ce);if(ce.version!==he.__version||$===!0){n.activeTexture(s.TEXTURE0+B);const Me=At.getPrimaries(At.workingColorSpace),Se=S.colorSpace===_r?null:At.getPrimaries(S.colorSpace),be=S.colorSpace===_r||Me===Se?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Ve=S.isCompressedTexture||S.image[0].isCompressedTexture,ye=S.image[0]&&S.image[0].isDataTexture,De=[];for(let me=0;me<6;me++)!Ve&&!ye?De[me]=A(S.image[me],!0,a.maxCubemapSize):De[me]=ye?S.image[me].image:S.image[me],De[me]=et(S,De[me]);const rt=De[0],We=c.convert(S.format,S.colorSpace),Ue=c.convert(S.type),Ye=N(S.internalFormat,We,Ue,S.colorSpace),Ze=S.isVideoTexture!==!0,yt=he.__version===void 0||$===!0,E=ce.dataReady;let ne=L(S,rt);I(s.TEXTURE_CUBE_MAP,S);let oe;if(Ve){Ze&&yt&&n.texStorage2D(s.TEXTURE_CUBE_MAP,ne,Ye,rt.width,rt.height);for(let me=0;me<6;me++){oe=De[me].mipmaps;for(let we=0;we<oe.length;we++){const $e=oe[we];S.format!==fi?We!==null?Ze?E&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,we,0,0,$e.width,$e.height,We,$e.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,we,Ye,$e.width,$e.height,0,$e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?E&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,we,0,0,$e.width,$e.height,We,Ue,$e.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,we,Ye,$e.width,$e.height,0,We,Ue,$e.data)}}}else{if(oe=S.mipmaps,Ze&&yt){oe.length>0&&ne++;const me=Je(De[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,ne,Ye,me.width,me.height)}for(let me=0;me<6;me++)if(ye){Ze?E&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,De[me].width,De[me].height,We,Ue,De[me].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,Ye,De[me].width,De[me].height,0,We,Ue,De[me].data);for(let we=0;we<oe.length;we++){const ot=oe[we].image[me].image;Ze?E&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,we+1,0,0,ot.width,ot.height,We,Ue,ot.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,we+1,Ye,ot.width,ot.height,0,We,Ue,ot.data)}}else{Ze?E&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,We,Ue,De[me]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,Ye,We,Ue,De[me]);for(let we=0;we<oe.length;we++){const $e=oe[we];Ze?E&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,we+1,0,0,We,Ue,$e.image[me]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,we+1,Ye,We,Ue,$e.image[me])}}}v(S)&&_(s.TEXTURE_CUBE_MAP),he.__version=ce.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function X(R,S,B,$,ce,he){const Me=c.convert(B.format,B.colorSpace),Se=c.convert(B.type),be=N(B.internalFormat,Me,Se,B.colorSpace);if(!r.get(S).__hasExternalTextures){const ye=Math.max(1,S.width>>he),De=Math.max(1,S.height>>he);ce===s.TEXTURE_3D||ce===s.TEXTURE_2D_ARRAY?n.texImage3D(ce,he,be,ye,De,S.depth,0,Me,Se,null):n.texImage2D(ce,he,be,ye,De,0,Me,Se,null)}n.bindFramebuffer(s.FRAMEBUFFER,R),Be(S)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,ce,r.get(B).__webglTexture,0,ct(S)):(ce===s.TEXTURE_2D||ce>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,ce,r.get(B).__webglTexture,he),n.bindFramebuffer(s.FRAMEBUFFER,null)}function pe(R,S,B){if(s.bindRenderbuffer(s.RENDERBUFFER,R),S.depthBuffer){const $=S.depthTexture,ce=$&&$.isDepthTexture?$.type:null,he=b(S.stencilBuffer,ce),Me=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Se=ct(S);Be(S)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Se,he,S.width,S.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,Se,he,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,he,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Me,s.RENDERBUFFER,R)}else{const $=S.textures;for(let ce=0;ce<$.length;ce++){const he=$[ce],Me=c.convert(he.format,he.colorSpace),Se=c.convert(he.type),be=N(he.internalFormat,Me,Se,he.colorSpace),Ve=ct(S);B&&Be(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ve,be,S.width,S.height):Be(S)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ve,be,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,be,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function xe(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),_e(S.depthTexture,0);const $=r.get(S.depthTexture).__webglTexture,ce=ct(S);if(S.depthTexture.format===Ws)Be(S)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,$,0,ce):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,$,0);else if(S.depthTexture.format===$s)Be(S)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,$,0,ce):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Ce(R){const S=r.get(R),B=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");xe(S.__webglFramebuffer,R)}else if(B){S.__webglDepthbuffer=[];for(let $=0;$<6;$++)n.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[$]),S.__webglDepthbuffer[$]=s.createRenderbuffer(),pe(S.__webglDepthbuffer[$],R,!1)}else n.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=s.createRenderbuffer(),pe(S.__webglDepthbuffer,R,!1);n.bindFramebuffer(s.FRAMEBUFFER,null)}function Re(R,S,B){const $=r.get(R);S!==void 0&&X($.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&Ce(R)}function ze(R){const S=R.texture,B=r.get(R),$=r.get(S);R.addEventListener("dispose",k);const ce=R.textures,he=R.isWebGLCubeRenderTarget===!0,Me=ce.length>1;if(Me||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=S.version,d.memory.textures++),he){B.__webglFramebuffer=[];for(let Se=0;Se<6;Se++)if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[Se]=[];for(let be=0;be<S.mipmaps.length;be++)B.__webglFramebuffer[Se][be]=s.createFramebuffer()}else B.__webglFramebuffer[Se]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let Se=0;Se<S.mipmaps.length;Se++)B.__webglFramebuffer[Se]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(Me)for(let Se=0,be=ce.length;Se<be;Se++){const Ve=r.get(ce[Se]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=s.createTexture(),d.memory.textures++)}if(R.samples>0&&Be(R)===!1){B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Se=0;Se<ce.length;Se++){const be=ce[Se];B.__webglColorRenderbuffer[Se]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[Se]);const Ve=c.convert(be.format,be.colorSpace),ye=c.convert(be.type),De=N(be.internalFormat,Ve,ye,be.colorSpace,R.isXRRenderTarget===!0),rt=ct(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,rt,De,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Se,s.RENDERBUFFER,B.__webglColorRenderbuffer[Se])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),pe(B.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(he){n.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),I(s.TEXTURE_CUBE_MAP,S);for(let Se=0;Se<6;Se++)if(S.mipmaps&&S.mipmaps.length>0)for(let be=0;be<S.mipmaps.length;be++)X(B.__webglFramebuffer[Se][be],R,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,be);else X(B.__webglFramebuffer[Se],R,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0);v(S)&&_(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Me){for(let Se=0,be=ce.length;Se<be;Se++){const Ve=ce[Se],ye=r.get(Ve);n.bindTexture(s.TEXTURE_2D,ye.__webglTexture),I(s.TEXTURE_2D,Ve),X(B.__webglFramebuffer,R,Ve,s.COLOR_ATTACHMENT0+Se,s.TEXTURE_2D,0),v(Ve)&&_(s.TEXTURE_2D)}n.unbindTexture()}else{let Se=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Se=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Se,$.__webglTexture),I(Se,S),S.mipmaps&&S.mipmaps.length>0)for(let be=0;be<S.mipmaps.length;be++)X(B.__webglFramebuffer[be],R,S,s.COLOR_ATTACHMENT0,Se,be);else X(B.__webglFramebuffer,R,S,s.COLOR_ATTACHMENT0,Se,0);v(S)&&_(Se),n.unbindTexture()}R.depthBuffer&&Ce(R)}function pt(R){const S=R.textures;for(let B=0,$=S.length;B<$;B++){const ce=S[B];if(v(ce)){const he=R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Me=r.get(ce).__webglTexture;n.bindTexture(he,Me),_(he),n.unbindTexture()}}}const z=[],vt=[];function Qe(R){if(R.samples>0){if(Be(R)===!1){const S=R.textures,B=R.width,$=R.height;let ce=s.COLOR_BUFFER_BIT;const he=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Me=r.get(R),Se=S.length>1;if(Se)for(let be=0;be<S.length;be++)n.bindFramebuffer(s.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let be=0;be<S.length;be++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ce|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ce|=s.STENCIL_BUFFER_BIT)),Se){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Me.__webglColorRenderbuffer[be]);const Ve=r.get(S[be]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ve,0)}s.blitFramebuffer(0,0,B,$,0,0,B,$,ce,s.NEAREST),h===!0&&(z.length=0,vt.length=0,z.push(s.COLOR_ATTACHMENT0+be),R.depthBuffer&&R.resolveDepthBuffer===!1&&(z.push(he),vt.push(he),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,vt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,z))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Se)for(let be=0;be<S.length;be++){n.bindFramebuffer(s.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,Me.__webglColorRenderbuffer[be]);const Ve=r.get(S[be]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,Ve,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&h){const S=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function ct(R){return Math.min(a.maxSamples,R.samples)}function Be(R){const S=r.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function gt(R){const S=d.render.frame;g.get(R)!==S&&(g.set(R,S),R.update())}function et(R,S){const B=R.colorSpace,$=R.format,ce=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==Sr&&B!==_r&&(At.getTransfer(B)===Nt?($!==fi||ce!==Bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),S}function Je(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(m.width=R.naturalWidth||R.width,m.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(m.width=R.displayWidth,m.height=R.displayHeight):(m.width=R.width,m.height=R.height),m}this.allocateTextureUnit=de,this.resetTextureUnits=H,this.setTexture2D=_e,this.setTexture2DArray=ve,this.setTexture3D=ae,this.setTextureCube=q,this.rebindTextures=Re,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=Qe,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=X,this.useMultisampledRTT=Be}function PE(s,e){function n(r,a=_r){let c;const d=At.getTransfer(a);if(r===Bi)return s.UNSIGNED_BYTE;if(r===If)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Uf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===km)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Fm)return s.BYTE;if(r===Om)return s.SHORT;if(r===Vo)return s.UNSIGNED_SHORT;if(r===Nf)return s.INT;if(r===qr)return s.UNSIGNED_INT;if(r===Oi)return s.FLOAT;if(r===Wo)return s.HALF_FLOAT;if(r===zm)return s.ALPHA;if(r===Bm)return s.RGB;if(r===fi)return s.RGBA;if(r===Hm)return s.LUMINANCE;if(r===Vm)return s.LUMINANCE_ALPHA;if(r===Ws)return s.DEPTH_COMPONENT;if(r===$s)return s.DEPTH_STENCIL;if(r===Gm)return s.RED;if(r===Ff)return s.RED_INTEGER;if(r===Wm)return s.RG;if(r===Of)return s.RG_INTEGER;if(r===kf)return s.RGBA_INTEGER;if(r===Ml||r===El||r===wl||r===Tl)if(d===Nt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Ml)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===El)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===wl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Tl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Ml)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===El)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===wl)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Tl)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===nf||r===rf||r===sf||r===of)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===nf)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===rf)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===sf)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===of)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===af||r===lf||r===cf)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===af||r===lf)return d===Nt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===cf)return d===Nt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===uf||r===ff||r===df||r===hf||r===pf||r===mf||r===gf||r===_f||r===vf||r===xf||r===yf||r===Sf||r===Mf||r===Ef)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===uf)return d===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ff)return d===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===df)return d===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===hf)return d===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===pf)return d===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===mf)return d===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===gf)return d===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===_f)return d===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===vf)return d===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===xf)return d===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===yf)return d===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Sf)return d===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Mf)return d===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ef)return d===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Al||r===wf||r===Tf)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Al)return d===Nt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===wf)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Tf)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Xm||r===Af||r===Cf||r===Rf)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Al)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Af)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Cf)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Rf)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===qs?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}class LE extends Bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Vs extends Hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const DE={type:"move"};class Yu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,c=null,d=null;const f=this._targetRay,h=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const A of e.hand.values()){const v=n.getJointPose(A,r),_=this._getHandJoint(m,A);v!==null&&(_.matrix.fromArray(v.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=v.radius),_.visible=v!==null}const g=m.joints["index-finger-tip"],y=m.joints["thumb-tip"],x=g.position.distanceTo(y.position),M=.02,T=.005;m.inputState.pinching&&x>M+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=M-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(h.matrix.fromArray(c.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,c.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(c.linearVelocity)):h.hasLinearVelocity=!1,c.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(c.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&c!==null&&(a=c),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(DE)))}return f!==null&&(f.visible=a!==null),h!==null&&(h.visible=c!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Vs;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const NE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,IE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class UE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new En,c=e.properties.get(a);c.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new yr({vertexShader:NE,fragmentShader:IE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Zn(new Yo(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class FE extends Qr{constructor(e,n){super();const r=this;let a=null,c=1,d=null,f="local-floor",h=1,m=null,g=null,y=null,x=null,M=null,T=null;const A=new UE,v=n.getContextAttributes();let _=null,N=null;const b=[],L=[],j=new ut;let k=null;const F=new Bn;F.layers.enable(1),F.viewport=new on;const W=new Bn;W.layers.enable(2),W.viewport=new on;const D=[F,W],C=new LE;C.layers.enable(1),C.layers.enable(2);let H=null,de=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let X=b[K];return X===void 0&&(X=new Yu,b[K]=X),X.getTargetRaySpace()},this.getControllerGrip=function(K){let X=b[K];return X===void 0&&(X=new Yu,b[K]=X),X.getGripSpace()},this.getHand=function(K){let X=b[K];return X===void 0&&(X=new Yu,b[K]=X),X.getHandSpace()};function ee(K){const X=L.indexOf(K.inputSource);if(X===-1)return;const pe=b[X];pe!==void 0&&(pe.update(K.inputSource,K.frame,m||d),pe.dispatchEvent({type:K.type,data:K.inputSource}))}function _e(){a.removeEventListener("select",ee),a.removeEventListener("selectstart",ee),a.removeEventListener("selectend",ee),a.removeEventListener("squeeze",ee),a.removeEventListener("squeezestart",ee),a.removeEventListener("squeezeend",ee),a.removeEventListener("end",_e),a.removeEventListener("inputsourceschange",ve);for(let K=0;K<b.length;K++){const X=L[K];X!==null&&(L[K]=null,b[K].disconnect(X))}H=null,de=null,A.reset(),e.setRenderTarget(_),M=null,x=null,y=null,a=null,N=null,Pe.stop(),r.isPresenting=!1,e.setPixelRatio(k),e.setSize(j.width,j.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){c=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){f=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(K){m=K},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return y},this.getFrame=function(){return T},this.getSession=function(){return a},this.setSession=async function(K){if(a=K,a!==null){if(_=e.getRenderTarget(),a.addEventListener("select",ee),a.addEventListener("selectstart",ee),a.addEventListener("selectend",ee),a.addEventListener("squeeze",ee),a.addEventListener("squeezestart",ee),a.addEventListener("squeezeend",ee),a.addEventListener("end",_e),a.addEventListener("inputsourceschange",ve),v.xrCompatible!==!0&&await n.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(j),a.renderState.layers===void 0){const X={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(a,n,X),a.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),N=new $r(M.framebufferWidth,M.framebufferHeight,{format:fi,type:Bi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let X=null,pe=null,xe=null;v.depth&&(xe=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,X=v.stencil?$s:Ws,pe=v.stencil?qs:qr);const Ce={colorFormat:n.RGBA8,depthFormat:xe,scaleFactor:c};y=new XRWebGLBinding(a,n),x=y.createProjectionLayer(Ce),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),N=new $r(x.textureWidth,x.textureHeight,{format:fi,type:Bi,depthTexture:new sg(x.textureWidth,x.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(h),m=null,d=await a.requestReferenceSpace(f),Pe.setContext(a),Pe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function ve(K){for(let X=0;X<K.removed.length;X++){const pe=K.removed[X],xe=L.indexOf(pe);xe>=0&&(L[xe]=null,b[xe].disconnect(pe))}for(let X=0;X<K.added.length;X++){const pe=K.added[X];let xe=L.indexOf(pe);if(xe===-1){for(let Re=0;Re<b.length;Re++)if(Re>=L.length){L.push(pe),xe=Re;break}else if(L[Re]===null){L[Re]=pe,xe=Re;break}if(xe===-1)break}const Ce=b[xe];Ce&&Ce.connect(pe)}}const ae=new Q,q=new Q;function U(K,X,pe){ae.setFromMatrixPosition(X.matrixWorld),q.setFromMatrixPosition(pe.matrixWorld);const xe=ae.distanceTo(q),Ce=X.projectionMatrix.elements,Re=pe.projectionMatrix.elements,ze=Ce[14]/(Ce[10]-1),pt=Ce[14]/(Ce[10]+1),z=(Ce[9]+1)/Ce[5],vt=(Ce[9]-1)/Ce[5],Qe=(Ce[8]-1)/Ce[0],ct=(Re[8]+1)/Re[0],Be=ze*Qe,gt=ze*ct,et=xe/(-Qe+ct),Je=et*-Qe;X.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Je),K.translateZ(et),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert();const R=ze+et,S=pt+et,B=Be-Je,$=gt+(xe-Je),ce=z*pt/S*R,he=vt*pt/S*R;K.projectionMatrix.makePerspective(B,$,ce,he,R,S),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}function re(K,X){X===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(X.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(a===null)return;A.texture!==null&&(K.near=A.depthNear,K.far=A.depthFar),C.near=W.near=F.near=K.near,C.far=W.far=F.far=K.far,(H!==C.near||de!==C.far)&&(a.updateRenderState({depthNear:C.near,depthFar:C.far}),H=C.near,de=C.far,F.near=H,F.far=de,W.near=H,W.far=de,F.updateProjectionMatrix(),W.updateProjectionMatrix(),K.updateProjectionMatrix());const X=K.parent,pe=C.cameras;re(C,X);for(let xe=0;xe<pe.length;xe++)re(pe[xe],X);pe.length===2?U(C,F,W):C.projectionMatrix.copy(F.projectionMatrix),se(K,C,X)};function se(K,X,pe){pe===null?K.matrix.copy(X.matrixWorld):(K.matrix.copy(pe.matrixWorld),K.matrix.invert(),K.matrix.multiply(X.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(X.projectionMatrix),K.projectionMatrixInverse.copy(X.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Go*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(x===null&&M===null))return h},this.setFoveation=function(K){h=K,x!==null&&(x.fixedFoveation=K),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=K)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(C)};let I=null;function te(K,X){if(g=X.getViewerPose(m||d),T=X,g!==null){const pe=g.views;M!==null&&(e.setRenderTargetFramebuffer(N,M.framebuffer),e.setRenderTarget(N));let xe=!1;pe.length!==C.cameras.length&&(C.cameras.length=0,xe=!0);for(let Re=0;Re<pe.length;Re++){const ze=pe[Re];let pt=null;if(M!==null)pt=M.getViewport(ze);else{const vt=y.getViewSubImage(x,ze);pt=vt.viewport,Re===0&&(e.setRenderTargetTextures(N,vt.colorTexture,x.ignoreDepthValues?void 0:vt.depthStencilTexture),e.setRenderTarget(N))}let z=D[Re];z===void 0&&(z=new Bn,z.layers.enable(Re),z.viewport=new on,D[Re]=z),z.matrix.fromArray(ze.transform.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale),z.projectionMatrix.fromArray(ze.projectionMatrix),z.projectionMatrixInverse.copy(z.projectionMatrix).invert(),z.viewport.set(pt.x,pt.y,pt.width,pt.height),Re===0&&(C.matrix.copy(z.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),xe===!0&&C.cameras.push(z)}const Ce=a.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){const Re=y.getDepthInformation(pe[0]);Re&&Re.isValid&&Re.texture&&A.init(e,Re,a.renderState)}}for(let pe=0;pe<b.length;pe++){const xe=L[pe],Ce=b[pe];xe!==null&&Ce!==void 0&&Ce.update(xe,X,m||d)}I&&I(K,X),X.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:X}),T=null}const Pe=new rg;Pe.setAnimationLoop(te),this.setAnimationLoop=function(K){I=K},this.dispose=function(){}}}const Hr=new Qn,OE=new jt;function kE(s,e){function n(v,_){v.matrixAutoUpdate===!0&&v.updateMatrix(),_.value.copy(v.matrix)}function r(v,_){_.color.getRGB(v.fogColor.value,eg(s)),_.isFog?(v.fogNear.value=_.near,v.fogFar.value=_.far):_.isFogExp2&&(v.fogDensity.value=_.density)}function a(v,_,N,b,L){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(v,_):_.isMeshToonMaterial?(c(v,_),y(v,_)):_.isMeshPhongMaterial?(c(v,_),g(v,_)):_.isMeshStandardMaterial?(c(v,_),x(v,_),_.isMeshPhysicalMaterial&&M(v,_,L)):_.isMeshMatcapMaterial?(c(v,_),T(v,_)):_.isMeshDepthMaterial?c(v,_):_.isMeshDistanceMaterial?(c(v,_),A(v,_)):_.isMeshNormalMaterial?c(v,_):_.isLineBasicMaterial?(d(v,_),_.isLineDashedMaterial&&f(v,_)):_.isPointsMaterial?h(v,_,N,b):_.isSpriteMaterial?m(v,_):_.isShadowMaterial?(v.color.value.copy(_.color),v.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(v,_){v.opacity.value=_.opacity,_.color&&v.diffuse.value.copy(_.color),_.emissive&&v.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(v.map.value=_.map,n(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,n(_.alphaMap,v.alphaMapTransform)),_.bumpMap&&(v.bumpMap.value=_.bumpMap,n(_.bumpMap,v.bumpMapTransform),v.bumpScale.value=_.bumpScale,_.side===Mn&&(v.bumpScale.value*=-1)),_.normalMap&&(v.normalMap.value=_.normalMap,n(_.normalMap,v.normalMapTransform),v.normalScale.value.copy(_.normalScale),_.side===Mn&&v.normalScale.value.negate()),_.displacementMap&&(v.displacementMap.value=_.displacementMap,n(_.displacementMap,v.displacementMapTransform),v.displacementScale.value=_.displacementScale,v.displacementBias.value=_.displacementBias),_.emissiveMap&&(v.emissiveMap.value=_.emissiveMap,n(_.emissiveMap,v.emissiveMapTransform)),_.specularMap&&(v.specularMap.value=_.specularMap,n(_.specularMap,v.specularMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest);const N=e.get(_),b=N.envMap,L=N.envMapRotation;b&&(v.envMap.value=b,Hr.copy(L),Hr.x*=-1,Hr.y*=-1,Hr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Hr.y*=-1,Hr.z*=-1),v.envMapRotation.value.setFromMatrix4(OE.makeRotationFromEuler(Hr)),v.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=_.reflectivity,v.ior.value=_.ior,v.refractionRatio.value=_.refractionRatio),_.lightMap&&(v.lightMap.value=_.lightMap,v.lightMapIntensity.value=_.lightMapIntensity,n(_.lightMap,v.lightMapTransform)),_.aoMap&&(v.aoMap.value=_.aoMap,v.aoMapIntensity.value=_.aoMapIntensity,n(_.aoMap,v.aoMapTransform))}function d(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,_.map&&(v.map.value=_.map,n(_.map,v.mapTransform))}function f(v,_){v.dashSize.value=_.dashSize,v.totalSize.value=_.dashSize+_.gapSize,v.scale.value=_.scale}function h(v,_,N,b){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.size.value=_.size*N,v.scale.value=b*.5,_.map&&(v.map.value=_.map,n(_.map,v.uvTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,n(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function m(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.rotation.value=_.rotation,_.map&&(v.map.value=_.map,n(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,n(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function g(v,_){v.specular.value.copy(_.specular),v.shininess.value=Math.max(_.shininess,1e-4)}function y(v,_){_.gradientMap&&(v.gradientMap.value=_.gradientMap)}function x(v,_){v.metalness.value=_.metalness,_.metalnessMap&&(v.metalnessMap.value=_.metalnessMap,n(_.metalnessMap,v.metalnessMapTransform)),v.roughness.value=_.roughness,_.roughnessMap&&(v.roughnessMap.value=_.roughnessMap,n(_.roughnessMap,v.roughnessMapTransform)),_.envMap&&(v.envMapIntensity.value=_.envMapIntensity)}function M(v,_,N){v.ior.value=_.ior,_.sheen>0&&(v.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),v.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(v.sheenColorMap.value=_.sheenColorMap,n(_.sheenColorMap,v.sheenColorMapTransform)),_.sheenRoughnessMap&&(v.sheenRoughnessMap.value=_.sheenRoughnessMap,n(_.sheenRoughnessMap,v.sheenRoughnessMapTransform))),_.clearcoat>0&&(v.clearcoat.value=_.clearcoat,v.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(v.clearcoatMap.value=_.clearcoatMap,n(_.clearcoatMap,v.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,n(_.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(v.clearcoatNormalMap.value=_.clearcoatNormalMap,n(_.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Mn&&v.clearcoatNormalScale.value.negate())),_.dispersion>0&&(v.dispersion.value=_.dispersion),_.iridescence>0&&(v.iridescence.value=_.iridescence,v.iridescenceIOR.value=_.iridescenceIOR,v.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(v.iridescenceMap.value=_.iridescenceMap,n(_.iridescenceMap,v.iridescenceMapTransform)),_.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=_.iridescenceThicknessMap,n(_.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),_.transmission>0&&(v.transmission.value=_.transmission,v.transmissionSamplerMap.value=N.texture,v.transmissionSamplerSize.value.set(N.width,N.height),_.transmissionMap&&(v.transmissionMap.value=_.transmissionMap,n(_.transmissionMap,v.transmissionMapTransform)),v.thickness.value=_.thickness,_.thicknessMap&&(v.thicknessMap.value=_.thicknessMap,n(_.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=_.attenuationDistance,v.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(v.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(v.anisotropyMap.value=_.anisotropyMap,n(_.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=_.specularIntensity,v.specularColor.value.copy(_.specularColor),_.specularColorMap&&(v.specularColorMap.value=_.specularColorMap,n(_.specularColorMap,v.specularColorMapTransform)),_.specularIntensityMap&&(v.specularIntensityMap.value=_.specularIntensityMap,n(_.specularIntensityMap,v.specularIntensityMapTransform))}function T(v,_){_.matcap&&(v.matcap.value=_.matcap)}function A(v,_){const N=e.get(_).light;v.referencePosition.value.setFromMatrixPosition(N.matrixWorld),v.nearDistance.value=N.shadow.camera.near,v.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function zE(s,e,n,r){let a={},c={},d=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(N,b){const L=b.program;r.uniformBlockBinding(N,L)}function m(N,b){let L=a[N.id];L===void 0&&(T(N),L=g(N),a[N.id]=L,N.addEventListener("dispose",v));const j=b.program;r.updateUBOMapping(N,j);const k=e.render.frame;c[N.id]!==k&&(x(N),c[N.id]=k)}function g(N){const b=y();N.__bindingPointIndex=b;const L=s.createBuffer(),j=N.__size,k=N.usage;return s.bindBuffer(s.UNIFORM_BUFFER,L),s.bufferData(s.UNIFORM_BUFFER,j,k),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,L),L}function y(){for(let N=0;N<f;N++)if(d.indexOf(N)===-1)return d.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(N){const b=a[N.id],L=N.uniforms,j=N.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let k=0,F=L.length;k<F;k++){const W=Array.isArray(L[k])?L[k]:[L[k]];for(let D=0,C=W.length;D<C;D++){const H=W[D];if(M(H,k,D,j)===!0){const de=H.__offset,ee=Array.isArray(H.value)?H.value:[H.value];let _e=0;for(let ve=0;ve<ee.length;ve++){const ae=ee[ve],q=A(ae);typeof ae=="number"||typeof ae=="boolean"?(H.__data[0]=ae,s.bufferSubData(s.UNIFORM_BUFFER,de+_e,H.__data)):ae.isMatrix3?(H.__data[0]=ae.elements[0],H.__data[1]=ae.elements[1],H.__data[2]=ae.elements[2],H.__data[3]=0,H.__data[4]=ae.elements[3],H.__data[5]=ae.elements[4],H.__data[6]=ae.elements[5],H.__data[7]=0,H.__data[8]=ae.elements[6],H.__data[9]=ae.elements[7],H.__data[10]=ae.elements[8],H.__data[11]=0):(ae.toArray(H.__data,_e),_e+=q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,de,H.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(N,b,L,j){const k=N.value,F=b+"_"+L;if(j[F]===void 0)return typeof k=="number"||typeof k=="boolean"?j[F]=k:j[F]=k.clone(),!0;{const W=j[F];if(typeof k=="number"||typeof k=="boolean"){if(W!==k)return j[F]=k,!0}else if(W.equals(k)===!1)return W.copy(k),!0}return!1}function T(N){const b=N.uniforms;let L=0;const j=16;for(let F=0,W=b.length;F<W;F++){const D=Array.isArray(b[F])?b[F]:[b[F]];for(let C=0,H=D.length;C<H;C++){const de=D[C],ee=Array.isArray(de.value)?de.value:[de.value];for(let _e=0,ve=ee.length;_e<ve;_e++){const ae=ee[_e],q=A(ae),U=L%j;U!==0&&j-U<q.boundary&&(L+=j-U),de.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),de.__offset=L,L+=q.storage}}}const k=L%j;return k>0&&(L+=j-k),N.__size=L,N.__cache={},this}function A(N){const b={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(b.boundary=4,b.storage=4):N.isVector2?(b.boundary=8,b.storage=8):N.isVector3||N.isColor?(b.boundary=16,b.storage=12):N.isVector4?(b.boundary=16,b.storage=16):N.isMatrix3?(b.boundary=48,b.storage=48):N.isMatrix4?(b.boundary=64,b.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),b}function v(N){const b=N.target;b.removeEventListener("dispose",v);const L=d.indexOf(b.__bindingPointIndex);d.splice(L,1),s.deleteBuffer(a[b.id]),delete a[b.id],delete c[b.id]}function _(){for(const N in a)s.deleteBuffer(a[N]);d=[],a={},c={}}return{bind:h,update:m,dispose:_}}class ug{constructor(e={}){const{canvas:n=Pv(),context:r=null,depth:a=!0,stencil:c=!1,alpha:d=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:y=!1}=e;this.isWebGLRenderer=!0;let x;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=r.getContextAttributes().alpha}else x=d;const M=new Uint32Array(4),T=new Int32Array(4);let A=null,v=null;const _=[],N=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$n,this.toneMapping=xr,this.toneMappingExposure=1;const b=this;let L=!1,j=0,k=0,F=null,W=-1,D=null;const C=new on,H=new on;let de=null;const ee=new Ct(0);let _e=0,ve=n.width,ae=n.height,q=1,U=null,re=null;const se=new on(0,0,ve,ae),I=new on(0,0,ve,ae);let te=!1;const Pe=new ig;let K=!1,X=!1;const pe=new jt,xe=new Q,Ce=new on,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function pt(){return F===null?q:1}let z=r;function vt(P,Y){return n.getContext(P,Y)}try{const P={alpha:!0,depth:a,stencil:c,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:y};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Df}`),n.addEventListener("webglcontextlost",oe,!1),n.addEventListener("webglcontextrestored",me,!1),n.addEventListener("webglcontextcreationerror",we,!1),z===null){const Y="webgl2";if(z=vt(Y,P),z===null)throw vt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let Qe,ct,Be,gt,et,Je,R,S,B,$,ce,he,Me,Se,be,Ve,ye,De,rt,We,Ue,Ye,Ze,yt;function E(){Qe=new YS(z),Qe.init(),Ye=new PE(z,Qe),ct=new BS(z,Qe,e,Ye),Be=new CE(z),gt=new KS(z),et=new hE,Je=new bE(z,Qe,Be,et,ct,Ye,gt),R=new VS(b),S=new jS(b),B=new nx(z),Ze=new kS(z,B),$=new qS(z,B,gt,Ze),ce=new QS(z,$,B,gt),rt=new ZS(z,ct,Je),Ve=new HS(et),he=new dE(b,R,S,Qe,ct,Ze,Ve),Me=new kE(b,et),Se=new mE,be=new SE(Qe),De=new OS(b,R,S,Be,ce,x,h),ye=new AE(b,ce,ct),yt=new zE(z,gt,ct,Be),We=new zS(z,Qe,gt),Ue=new $S(z,Qe,gt),gt.programs=he.programs,b.capabilities=ct,b.extensions=Qe,b.properties=et,b.renderLists=Se,b.shadowMap=ye,b.state=Be,b.info=gt}E();const ne=new FE(b,z);this.xr=ne,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const P=Qe.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=Qe.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(P){P!==void 0&&(q=P,this.setSize(ve,ae,!1))},this.getSize=function(P){return P.set(ve,ae)},this.setSize=function(P,Y,le=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ve=P,ae=Y,n.width=Math.floor(P*q),n.height=Math.floor(Y*q),le===!0&&(n.style.width=P+"px",n.style.height=Y+"px"),this.setViewport(0,0,P,Y)},this.getDrawingBufferSize=function(P){return P.set(ve*q,ae*q).floor()},this.setDrawingBufferSize=function(P,Y,le){ve=P,ae=Y,q=le,n.width=Math.floor(P*le),n.height=Math.floor(Y*le),this.setViewport(0,0,P,Y)},this.getCurrentViewport=function(P){return P.copy(C)},this.getViewport=function(P){return P.copy(se)},this.setViewport=function(P,Y,le,fe){P.isVector4?se.set(P.x,P.y,P.z,P.w):se.set(P,Y,le,fe),Be.viewport(C.copy(se).multiplyScalar(q).round())},this.getScissor=function(P){return P.copy(I)},this.setScissor=function(P,Y,le,fe){P.isVector4?I.set(P.x,P.y,P.z,P.w):I.set(P,Y,le,fe),Be.scissor(H.copy(I).multiplyScalar(q).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(P){Be.setScissorTest(te=P)},this.setOpaqueSort=function(P){U=P},this.setTransparentSort=function(P){re=P},this.getClearColor=function(P){return P.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(P=!0,Y=!0,le=!0){let fe=0;if(P){let Z=!1;if(F!==null){const Ne=F.texture.format;Z=Ne===kf||Ne===Of||Ne===Ff}if(Z){const Ne=F.texture.type,Oe=Ne===Bi||Ne===qr||Ne===Vo||Ne===qs||Ne===If||Ne===Uf,Xe=De.getClearColor(),Ie=De.getClearAlpha(),at=Xe.r,st=Xe.g,tt=Xe.b;Oe?(M[0]=at,M[1]=st,M[2]=tt,M[3]=Ie,z.clearBufferuiv(z.COLOR,0,M)):(T[0]=at,T[1]=st,T[2]=tt,T[3]=Ie,z.clearBufferiv(z.COLOR,0,T))}else fe|=z.COLOR_BUFFER_BIT}Y&&(fe|=z.DEPTH_BUFFER_BIT),le&&(fe|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(fe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",oe,!1),n.removeEventListener("webglcontextrestored",me,!1),n.removeEventListener("webglcontextcreationerror",we,!1),Se.dispose(),be.dispose(),et.dispose(),R.dispose(),S.dispose(),ce.dispose(),Ze.dispose(),yt.dispose(),he.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",kt),ne.removeEventListener("sessionend",wn),Gt.stop()};function oe(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const P=gt.autoReset,Y=ye.enabled,le=ye.autoUpdate,fe=ye.needsUpdate,Z=ye.type;E(),gt.autoReset=P,ye.enabled=Y,ye.autoUpdate=le,ye.needsUpdate=fe,ye.type=Z}function we(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function $e(P){const Y=P.target;Y.removeEventListener("dispose",$e),ot(Y)}function ot(P){It(P),et.remove(P)}function It(P){const Y=et.get(P).programs;Y!==void 0&&(Y.forEach(function(le){he.releaseProgram(le)}),P.isShaderMaterial&&he.releaseShaderCache(P))}this.renderBufferDirect=function(P,Y,le,fe,Z,Ne){Y===null&&(Y=Re);const Oe=Z.isMesh&&Z.matrixWorld.determinant()<0,Xe=zl(P,Y,le,fe,Z);Be.setMaterial(fe,Oe);let Ie=le.index,at=1;if(fe.wireframe===!0){if(Ie=$.getWireframeAttribute(le),Ie===void 0)return;at=2}const st=le.drawRange,tt=le.attributes.position;let xt=st.start*at,Ut=(st.start+st.count)*at;Ne!==null&&(xt=Math.max(xt,Ne.start*at),Ut=Math.min(Ut,(Ne.start+Ne.count)*at)),Ie!==null?(xt=Math.max(xt,0),Ut=Math.min(Ut,Ie.count)):tt!=null&&(xt=Math.max(xt,0),Ut=Math.min(Ut,tt.count));const Pt=Ut-xt;if(Pt<0||Pt===1/0)return;Ze.setup(Z,fe,Xe,le,Ie);let Jt,ft=We;if(Ie!==null&&(Jt=B.get(Ie),ft=Ue,ft.setIndex(Jt)),Z.isMesh)fe.wireframe===!0?(Be.setLineWidth(fe.wireframeLinewidth*pt()),ft.setMode(z.LINES)):ft.setMode(z.TRIANGLES);else if(Z.isLine){let Ke=fe.linewidth;Ke===void 0&&(Ke=1),Be.setLineWidth(Ke*pt()),Z.isLineSegments?ft.setMode(z.LINES):Z.isLineLoop?ft.setMode(z.LINE_LOOP):ft.setMode(z.LINE_STRIP)}else Z.isPoints?ft.setMode(z.POINTS):Z.isSprite&&ft.setMode(z.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)ft.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(Qe.get("WEBGL_multi_draw"))ft.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Ke=Z._multiDrawStarts,wt=Z._multiDrawCounts,Mt=Z._multiDrawCount,Dn=Ie?B.get(Ie).bytesPerElement:1,Gi=et.get(fe).currentProgram.getUniforms();for(let en=0;en<Mt;en++)Gi.setValue(z,"_gl_DrawID",en),ft.render(Ke[en]/Dn,wt[en])}else if(Z.isInstancedMesh)ft.renderInstances(xt,Pt,Z.count);else if(le.isInstancedBufferGeometry){const Ke=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,wt=Math.min(le.instanceCount,Ke);ft.renderInstances(xt,Pt,wt)}else ft.render(xt,Pt)};function Ht(P,Y,le){P.transparent===!0&&P.side===vi&&P.forceSinglePass===!1?(P.side=Mn,P.needsUpdate=!0,Vi(P,Y,le),P.side=zi,P.needsUpdate=!0,Vi(P,Y,le),P.side=vi):Vi(P,Y,le)}this.compile=function(P,Y,le=null){le===null&&(le=P),v=be.get(le),v.init(Y),N.push(v),le.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(v.pushLight(Z),Z.castShadow&&v.pushShadow(Z))}),P!==le&&P.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(v.pushLight(Z),Z.castShadow&&v.pushShadow(Z))}),v.setupLights();const fe=new Set;return P.traverse(function(Z){const Ne=Z.material;if(Ne)if(Array.isArray(Ne))for(let Oe=0;Oe<Ne.length;Oe++){const Xe=Ne[Oe];Ht(Xe,le,Z),fe.add(Xe)}else Ht(Ne,le,Z),fe.add(Ne)}),N.pop(),v=null,fe},this.compileAsync=function(P,Y,le=null){const fe=this.compile(P,Y,le);return new Promise(Z=>{function Ne(){if(fe.forEach(function(Oe){et.get(Oe).currentProgram.isReady()&&fe.delete(Oe)}),fe.size===0){Z(P);return}setTimeout(Ne,10)}Qe.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let _t=null;function Ot(P){_t&&_t(P)}function kt(){Gt.stop()}function wn(){Gt.start()}const Gt=new rg;Gt.setAnimationLoop(Ot),typeof self<"u"&&Gt.setContext(self),this.setAnimationLoop=function(P){_t=P,ne.setAnimationLoop(P),P===null?Gt.stop():Gt.start()},ne.addEventListener("sessionstart",kt),ne.addEventListener("sessionend",wn),this.render=function(P,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(Y),Y=ne.getCamera()),P.isScene===!0&&P.onBeforeRender(b,P,Y,F),v=be.get(P,N.length),v.init(Y),N.push(v),pe.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Pe.setFromProjectionMatrix(pe),X=this.localClippingEnabled,K=Ve.init(this.clippingPlanes,X),A=Se.get(P,_.length),A.init(),_.push(A),ne.enabled===!0&&ne.isPresenting===!0){const Ne=b.xr.getDepthSensingMesh();Ne!==null&&gn(Ne,Y,-1/0,b.sortObjects)}gn(P,Y,0,b.sortObjects),A.finish(),b.sortObjects===!0&&A.sort(U,re),ze=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,ze&&De.addToRenderList(A,P),this.info.render.frame++,K===!0&&Ve.beginShadows();const le=v.state.shadowsArray;ye.render(le,P,Y),K===!0&&Ve.endShadows(),this.info.autoReset===!0&&this.info.reset();const fe=A.opaque,Z=A.transmissive;if(v.setupLights(),Y.isArrayCamera){const Ne=Y.cameras;if(Z.length>0)for(let Oe=0,Xe=Ne.length;Oe<Xe;Oe++){const Ie=Ne[Oe];ei(fe,Z,P,Ie)}ze&&De.render(P);for(let Oe=0,Xe=Ne.length;Oe<Xe;Oe++){const Ie=Ne[Oe];yi(A,P,Ie,Ie.viewport)}}else Z.length>0&&ei(fe,Z,P,Y),ze&&De.render(P),yi(A,P,Y);F!==null&&(Je.updateMultisampleRenderTarget(F),Je.updateRenderTargetMipmap(F)),P.isScene===!0&&P.onAfterRender(b,P,Y),Ze.resetDefaultState(),W=-1,D=null,N.pop(),N.length>0?(v=N[N.length-1],K===!0&&Ve.setGlobalState(b.clippingPlanes,v.state.camera)):v=null,_.pop(),_.length>0?A=_[_.length-1]:A=null};function gn(P,Y,le,fe){if(P.visible===!1)return;if(P.layers.test(Y.layers)){if(P.isGroup)le=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(Y);else if(P.isLight)v.pushLight(P),P.castShadow&&v.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Pe.intersectsSprite(P)){fe&&Ce.setFromMatrixPosition(P.matrixWorld).applyMatrix4(pe);const Oe=ce.update(P),Xe=P.material;Xe.visible&&A.push(P,Oe,Xe,le,Ce.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Pe.intersectsObject(P))){const Oe=ce.update(P),Xe=P.material;if(fe&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Ce.copy(P.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),Ce.copy(Oe.boundingSphere.center)),Ce.applyMatrix4(P.matrixWorld).applyMatrix4(pe)),Array.isArray(Xe)){const Ie=Oe.groups;for(let at=0,st=Ie.length;at<st;at++){const tt=Ie[at],xt=Xe[tt.materialIndex];xt&&xt.visible&&A.push(P,Oe,xt,le,Ce.z,tt)}}else Xe.visible&&A.push(P,Oe,Xe,le,Ce.z,null)}}const Ne=P.children;for(let Oe=0,Xe=Ne.length;Oe<Xe;Oe++)gn(Ne[Oe],Y,le,fe)}function yi(P,Y,le,fe){const Z=P.opaque,Ne=P.transmissive,Oe=P.transparent;v.setupLightsView(le),K===!0&&Ve.setGlobalState(b.clippingPlanes,le),fe&&Be.viewport(C.copy(fe)),Z.length>0&&Si(Z,Y,le),Ne.length>0&&Si(Ne,Y,le),Oe.length>0&&Si(Oe,Y,le),Be.buffers.depth.setTest(!0),Be.buffers.depth.setMask(!0),Be.buffers.color.setMask(!0),Be.setPolygonOffset(!1)}function ei(P,Y,le,fe){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[fe.id]===void 0&&(v.state.transmissionRenderTarget[fe.id]=new $r(1,1,{generateMipmaps:!0,type:Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float")?Wo:Bi,minFilter:Yr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace}));const Ne=v.state.transmissionRenderTarget[fe.id],Oe=fe.viewport||C;Ne.setSize(Oe.z,Oe.w);const Xe=b.getRenderTarget();b.setRenderTarget(Ne),b.getClearColor(ee),_e=b.getClearAlpha(),_e<1&&b.setClearColor(16777215,.5),ze?De.render(le):b.clear();const Ie=b.toneMapping;b.toneMapping=xr;const at=fe.viewport;if(fe.viewport!==void 0&&(fe.viewport=void 0),v.setupLightsView(fe),K===!0&&Ve.setGlobalState(b.clippingPlanes,fe),Si(P,le,fe),Je.updateMultisampleRenderTarget(Ne),Je.updateRenderTargetMipmap(Ne),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let tt=0,xt=Y.length;tt<xt;tt++){const Ut=Y[tt],Pt=Ut.object,Jt=Ut.geometry,ft=Ut.material,Ke=Ut.group;if(ft.side===vi&&Pt.layers.test(fe.layers)){const wt=ft.side;ft.side=Mn,ft.needsUpdate=!0,Mr(Pt,le,fe,Jt,ft,Ke),ft.side=wt,ft.needsUpdate=!0,st=!0}}st===!0&&(Je.updateMultisampleRenderTarget(Ne),Je.updateRenderTargetMipmap(Ne))}b.setRenderTarget(Xe),b.setClearColor(ee,_e),at!==void 0&&(fe.viewport=at),b.toneMapping=Ie}function Si(P,Y,le){const fe=Y.isScene===!0?Y.overrideMaterial:null;for(let Z=0,Ne=P.length;Z<Ne;Z++){const Oe=P[Z],Xe=Oe.object,Ie=Oe.geometry,at=fe===null?Oe.material:fe,st=Oe.group;Xe.layers.test(le.layers)&&Mr(Xe,Y,le,Ie,at,st)}}function Mr(P,Y,le,fe,Z,Ne){P.onBeforeRender(b,Y,le,fe,Z,Ne),P.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),Z.transparent===!0&&Z.side===vi&&Z.forceSinglePass===!1?(Z.side=Mn,Z.needsUpdate=!0,b.renderBufferDirect(le,Y,fe,Z,P,Ne),Z.side=zi,Z.needsUpdate=!0,b.renderBufferDirect(le,Y,fe,Z,P,Ne),Z.side=vi):b.renderBufferDirect(le,Y,fe,Z,P,Ne),P.onAfterRender(b,Y,le,fe,Z,Ne)}function Vi(P,Y,le){Y.isScene!==!0&&(Y=Re);const fe=et.get(P),Z=v.state.lights,Ne=v.state.shadowsArray,Oe=Z.state.version,Xe=he.getParameters(P,Z.state,Ne,Y,le),Ie=he.getProgramCacheKey(Xe);let at=fe.programs;fe.environment=P.isMeshStandardMaterial?Y.environment:null,fe.fog=Y.fog,fe.envMap=(P.isMeshStandardMaterial?S:R).get(P.envMap||fe.environment),fe.envMapRotation=fe.environment!==null&&P.envMap===null?Y.environmentRotation:P.envMapRotation,at===void 0&&(P.addEventListener("dispose",$e),at=new Map,fe.programs=at);let st=at.get(Ie);if(st!==void 0){if(fe.currentProgram===st&&fe.lightsStateVersion===Oe)return $o(P,Xe),st}else Xe.uniforms=he.getUniforms(P),P.onBeforeCompile(Xe,b),st=he.acquireProgram(Xe,Ie),at.set(Ie,st),fe.uniforms=Xe.uniforms;const tt=fe.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(tt.clippingPlanes=Ve.uniform),$o(P,Xe),fe.needsLights=Ko(P),fe.lightsStateVersion=Oe,fe.needsLights&&(tt.ambientLightColor.value=Z.state.ambient,tt.lightProbe.value=Z.state.probe,tt.directionalLights.value=Z.state.directional,tt.directionalLightShadows.value=Z.state.directionalShadow,tt.spotLights.value=Z.state.spot,tt.spotLightShadows.value=Z.state.spotShadow,tt.rectAreaLights.value=Z.state.rectArea,tt.ltc_1.value=Z.state.rectAreaLTC1,tt.ltc_2.value=Z.state.rectAreaLTC2,tt.pointLights.value=Z.state.point,tt.pointLightShadows.value=Z.state.pointShadow,tt.hemisphereLights.value=Z.state.hemi,tt.directionalShadowMap.value=Z.state.directionalShadowMap,tt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,tt.spotShadowMap.value=Z.state.spotShadowMap,tt.spotLightMatrix.value=Z.state.spotLightMatrix,tt.spotLightMap.value=Z.state.spotLightMap,tt.pointShadowMap.value=Z.state.pointShadowMap,tt.pointShadowMatrix.value=Z.state.pointShadowMatrix),fe.currentProgram=st,fe.uniformsList=null,st}function qo(P){if(P.uniformsList===null){const Y=P.currentProgram.getUniforms();P.uniformsList=Cl.seqWithValue(Y.seq,P.uniforms)}return P.uniformsList}function $o(P,Y){const le=et.get(P);le.outputColorSpace=Y.outputColorSpace,le.batching=Y.batching,le.batchingColor=Y.batchingColor,le.instancing=Y.instancing,le.instancingColor=Y.instancingColor,le.instancingMorph=Y.instancingMorph,le.skinning=Y.skinning,le.morphTargets=Y.morphTargets,le.morphNormals=Y.morphNormals,le.morphColors=Y.morphColors,le.morphTargetsCount=Y.morphTargetsCount,le.numClippingPlanes=Y.numClippingPlanes,le.numIntersection=Y.numClipIntersection,le.vertexAlphas=Y.vertexAlphas,le.vertexTangents=Y.vertexTangents,le.toneMapping=Y.toneMapping}function zl(P,Y,le,fe,Z){Y.isScene!==!0&&(Y=Re),Je.resetTextureUnits();const Ne=Y.fog,Oe=fe.isMeshStandardMaterial?Y.environment:null,Xe=F===null?b.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Sr,Ie=(fe.isMeshStandardMaterial?S:R).get(fe.envMap||Oe),at=fe.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,st=!!le.attributes.tangent&&(!!fe.normalMap||fe.anisotropy>0),tt=!!le.morphAttributes.position,xt=!!le.morphAttributes.normal,Ut=!!le.morphAttributes.color;let Pt=xr;fe.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Pt=b.toneMapping);const Jt=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,ft=Jt!==void 0?Jt.length:0,Ke=et.get(fe),wt=v.state.lights;if(K===!0&&(X===!0||P!==D)){const Tn=P===D&&fe.id===W;Ve.setState(fe,P,Tn)}let Mt=!1;fe.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==wt.state.version||Ke.outputColorSpace!==Xe||Z.isBatchedMesh&&Ke.batching===!1||!Z.isBatchedMesh&&Ke.batching===!0||Z.isBatchedMesh&&Ke.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Ke.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Ke.instancing===!1||!Z.isInstancedMesh&&Ke.instancing===!0||Z.isSkinnedMesh&&Ke.skinning===!1||!Z.isSkinnedMesh&&Ke.skinning===!0||Z.isInstancedMesh&&Ke.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Ke.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Ke.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Ke.instancingMorph===!1&&Z.morphTexture!==null||Ke.envMap!==Ie||fe.fog===!0&&Ke.fog!==Ne||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==Ve.numPlanes||Ke.numIntersection!==Ve.numIntersection)||Ke.vertexAlphas!==at||Ke.vertexTangents!==st||Ke.morphTargets!==tt||Ke.morphNormals!==xt||Ke.morphColors!==Ut||Ke.toneMapping!==Pt||Ke.morphTargetsCount!==ft)&&(Mt=!0):(Mt=!0,Ke.__version=fe.version);let Dn=Ke.currentProgram;Mt===!0&&(Dn=Vi(fe,Y,Z));let Gi=!1,en=!1,Wi=!1;const Rt=Dn.getUniforms(),Nn=Ke.uniforms;if(Be.useProgram(Dn.program)&&(Gi=!0,en=!0,Wi=!0),fe.id!==W&&(W=fe.id,en=!0),Gi||D!==P){Rt.setValue(z,"projectionMatrix",P.projectionMatrix),Rt.setValue(z,"viewMatrix",P.matrixWorldInverse);const Tn=Rt.map.cameraPosition;Tn!==void 0&&Tn.setValue(z,xe.setFromMatrixPosition(P.matrixWorld)),ct.logarithmicDepthBuffer&&Rt.setValue(z,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(fe.isMeshPhongMaterial||fe.isMeshToonMaterial||fe.isMeshLambertMaterial||fe.isMeshBasicMaterial||fe.isMeshStandardMaterial||fe.isShaderMaterial)&&Rt.setValue(z,"isOrthographic",P.isOrthographicCamera===!0),D!==P&&(D=P,en=!0,Wi=!0)}if(Z.isSkinnedMesh){Rt.setOptional(z,Z,"bindMatrix"),Rt.setOptional(z,Z,"bindMatrixInverse");const Tn=Z.skeleton;Tn&&(Tn.boneTexture===null&&Tn.computeBoneTexture(),Rt.setValue(z,"boneTexture",Tn.boneTexture,Je))}Z.isBatchedMesh&&(Rt.setOptional(z,Z,"batchingTexture"),Rt.setValue(z,"batchingTexture",Z._matricesTexture,Je),Rt.setOptional(z,Z,"batchingIdTexture"),Rt.setValue(z,"batchingIdTexture",Z._indirectTexture,Je),Rt.setOptional(z,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Rt.setValue(z,"batchingColorTexture",Z._colorsTexture,Je));const Js=le.morphAttributes;if((Js.position!==void 0||Js.normal!==void 0||Js.color!==void 0)&&rt.update(Z,le,Dn),(en||Ke.receiveShadow!==Z.receiveShadow)&&(Ke.receiveShadow=Z.receiveShadow,Rt.setValue(z,"receiveShadow",Z.receiveShadow)),fe.isMeshGouraudMaterial&&fe.envMap!==null&&(Nn.envMap.value=Ie,Nn.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),fe.isMeshStandardMaterial&&fe.envMap===null&&Y.environment!==null&&(Nn.envMapIntensity.value=Y.environmentIntensity),en&&(Rt.setValue(z,"toneMappingExposure",b.toneMappingExposure),Ke.needsLights&&Mi(Nn,Wi),Ne&&fe.fog===!0&&Me.refreshFogUniforms(Nn,Ne),Me.refreshMaterialUniforms(Nn,fe,q,ae,v.state.transmissionRenderTarget[P.id]),Cl.upload(z,qo(Ke),Nn,Je)),fe.isShaderMaterial&&fe.uniformsNeedUpdate===!0&&(Cl.upload(z,qo(Ke),Nn,Je),fe.uniformsNeedUpdate=!1),fe.isSpriteMaterial&&Rt.setValue(z,"center",Z.center),Rt.setValue(z,"modelViewMatrix",Z.modelViewMatrix),Rt.setValue(z,"normalMatrix",Z.normalMatrix),Rt.setValue(z,"modelMatrix",Z.matrixWorld),fe.isShaderMaterial||fe.isRawShaderMaterial){const Tn=fe.uniformsGroups;for(let Er=0,Zo=Tn.length;Er<Zo;Er++){const Jr=Tn[Er];yt.update(Jr,Dn),yt.bind(Jr,Dn)}}return Dn}function Mi(P,Y){P.ambientLightColor.needsUpdate=Y,P.lightProbe.needsUpdate=Y,P.directionalLights.needsUpdate=Y,P.directionalLightShadows.needsUpdate=Y,P.pointLights.needsUpdate=Y,P.pointLightShadows.needsUpdate=Y,P.spotLights.needsUpdate=Y,P.spotLightShadows.needsUpdate=Y,P.rectAreaLights.needsUpdate=Y,P.hemisphereLights.needsUpdate=Y}function Ko(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(P,Y,le){et.get(P.texture).__webglTexture=Y,et.get(P.depthTexture).__webglTexture=le;const fe=et.get(P);fe.__hasExternalTextures=!0,fe.__autoAllocateDepthBuffer=le===void 0,fe.__autoAllocateDepthBuffer||Qe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),fe.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,Y){const le=et.get(P);le.__webglFramebuffer=Y,le.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(P,Y=0,le=0){F=P,j=Y,k=le;let fe=!0,Z=null,Ne=!1,Oe=!1;if(P){const Ie=et.get(P);Ie.__useDefaultFramebuffer!==void 0?(Be.bindFramebuffer(z.FRAMEBUFFER,null),fe=!1):Ie.__webglFramebuffer===void 0?Je.setupRenderTarget(P):Ie.__hasExternalTextures&&Je.rebindTextures(P,et.get(P.texture).__webglTexture,et.get(P.depthTexture).__webglTexture);const at=P.texture;(at.isData3DTexture||at.isDataArrayTexture||at.isCompressedArrayTexture)&&(Oe=!0);const st=et.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(st[Y])?Z=st[Y][le]:Z=st[Y],Ne=!0):P.samples>0&&Je.useMultisampledRTT(P)===!1?Z=et.get(P).__webglMultisampledFramebuffer:Array.isArray(st)?Z=st[le]:Z=st,C.copy(P.viewport),H.copy(P.scissor),de=P.scissorTest}else C.copy(se).multiplyScalar(q).floor(),H.copy(I).multiplyScalar(q).floor(),de=te;if(Be.bindFramebuffer(z.FRAMEBUFFER,Z)&&fe&&Be.drawBuffers(P,Z),Be.viewport(C),Be.scissor(H),Be.setScissorTest(de),Ne){const Ie=et.get(P.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ie.__webglTexture,le)}else if(Oe){const Ie=et.get(P.texture),at=Y||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ie.__webglTexture,le||0,at)}W=-1},this.readRenderTargetPixels=function(P,Y,le,fe,Z,Ne,Oe){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=et.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Oe!==void 0&&(Xe=Xe[Oe]),Xe){Be.bindFramebuffer(z.FRAMEBUFFER,Xe);try{const Ie=P.texture,at=Ie.format,st=Ie.type;if(!ct.textureFormatReadable(at)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable(st)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=P.width-fe&&le>=0&&le<=P.height-Z&&z.readPixels(Y,le,fe,Z,Ye.convert(at),Ye.convert(st),Ne)}finally{const Ie=F!==null?et.get(F).__webglFramebuffer:null;Be.bindFramebuffer(z.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(P,Y,le,fe,Z,Ne,Oe){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=et.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Oe!==void 0&&(Xe=Xe[Oe]),Xe){Be.bindFramebuffer(z.FRAMEBUFFER,Xe);try{const Ie=P.texture,at=Ie.format,st=Ie.type;if(!ct.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Y>=0&&Y<=P.width-fe&&le>=0&&le<=P.height-Z){const tt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,tt),z.bufferData(z.PIXEL_PACK_BUFFER,Ne.byteLength,z.STREAM_READ),z.readPixels(Y,le,fe,Z,Ye.convert(at),Ye.convert(st),0),z.flush();const xt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);await Lv(z,xt,4);try{z.bindBuffer(z.PIXEL_PACK_BUFFER,tt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Ne)}finally{z.deleteBuffer(tt),z.deleteSync(xt)}return Ne}}finally{const Ie=F!==null?et.get(F).__webglFramebuffer:null;Be.bindFramebuffer(z.FRAMEBUFFER,Ie)}}},this.copyFramebufferToTexture=function(P,Y=null,le=0){P.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Y=arguments[0]||null,P=arguments[1]);const fe=Math.pow(2,-le),Z=Math.floor(P.image.width*fe),Ne=Math.floor(P.image.height*fe),Oe=Y!==null?Y.x:0,Xe=Y!==null?Y.y:0;Je.setTexture2D(P,0),z.copyTexSubImage2D(z.TEXTURE_2D,le,0,0,Oe,Xe,Z,Ne),Be.unbindTexture()},this.copyTextureToTexture=function(P,Y,le=null,fe=null,Z=0){P.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),fe=arguments[0]||null,P=arguments[1],Y=arguments[2],Z=arguments[3]||0,le=null);let Ne,Oe,Xe,Ie,at,st;le!==null?(Ne=le.max.x-le.min.x,Oe=le.max.y-le.min.y,Xe=le.min.x,Ie=le.min.y):(Ne=P.image.width,Oe=P.image.height,Xe=0,Ie=0),fe!==null?(at=fe.x,st=fe.y):(at=0,st=0);const tt=Ye.convert(Y.format),xt=Ye.convert(Y.type);Je.setTexture2D(Y,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,Y.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,Y.unpackAlignment);const Ut=z.getParameter(z.UNPACK_ROW_LENGTH),Pt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Jt=z.getParameter(z.UNPACK_SKIP_PIXELS),ft=z.getParameter(z.UNPACK_SKIP_ROWS),Ke=z.getParameter(z.UNPACK_SKIP_IMAGES),wt=P.isCompressedTexture?P.mipmaps[Z]:P.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,wt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,wt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Xe),z.pixelStorei(z.UNPACK_SKIP_ROWS,Ie),P.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Z,at,st,Ne,Oe,tt,xt,wt.data):P.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Z,at,st,wt.width,wt.height,tt,wt.data):z.texSubImage2D(z.TEXTURE_2D,Z,at,st,Ne,Oe,tt,xt,wt),z.pixelStorei(z.UNPACK_ROW_LENGTH,Ut),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Pt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Jt),z.pixelStorei(z.UNPACK_SKIP_ROWS,ft),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Ke),Z===0&&Y.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),Be.unbindTexture()},this.copyTextureToTexture3D=function(P,Y,le=null,fe=null,Z=0){P.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),le=arguments[0]||null,fe=arguments[1]||null,P=arguments[2],Y=arguments[3],Z=arguments[4]||0);let Ne,Oe,Xe,Ie,at,st,tt,xt,Ut;const Pt=P.isCompressedTexture?P.mipmaps[Z]:P.image;le!==null?(Ne=le.max.x-le.min.x,Oe=le.max.y-le.min.y,Xe=le.max.z-le.min.z,Ie=le.min.x,at=le.min.y,st=le.min.z):(Ne=Pt.width,Oe=Pt.height,Xe=Pt.depth,Ie=0,at=0,st=0),fe!==null?(tt=fe.x,xt=fe.y,Ut=fe.z):(tt=0,xt=0,Ut=0);const Jt=Ye.convert(Y.format),ft=Ye.convert(Y.type);let Ke;if(Y.isData3DTexture)Je.setTexture3D(Y,0),Ke=z.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)Je.setTexture2DArray(Y,0),Ke=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,Y.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,Y.unpackAlignment);const wt=z.getParameter(z.UNPACK_ROW_LENGTH),Mt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Dn=z.getParameter(z.UNPACK_SKIP_PIXELS),Gi=z.getParameter(z.UNPACK_SKIP_ROWS),en=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Pt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Pt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Ie),z.pixelStorei(z.UNPACK_SKIP_ROWS,at),z.pixelStorei(z.UNPACK_SKIP_IMAGES,st),P.isDataTexture||P.isData3DTexture?z.texSubImage3D(Ke,Z,tt,xt,Ut,Ne,Oe,Xe,Jt,ft,Pt.data):Y.isCompressedArrayTexture?z.compressedTexSubImage3D(Ke,Z,tt,xt,Ut,Ne,Oe,Xe,Jt,Pt.data):z.texSubImage3D(Ke,Z,tt,xt,Ut,Ne,Oe,Xe,Jt,ft,Pt),z.pixelStorei(z.UNPACK_ROW_LENGTH,wt),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Mt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Dn),z.pixelStorei(z.UNPACK_SKIP_ROWS,Gi),z.pixelStorei(z.UNPACK_SKIP_IMAGES,en),Z===0&&Y.generateMipmaps&&z.generateMipmap(Ke),Be.unbindTexture()},this.initRenderTarget=function(P){et.get(P).__webglFramebuffer===void 0&&Je.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?Je.setTextureCube(P,0):P.isData3DTexture?Je.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?Je.setTexture2DArray(P,0):Je.setTexture2D(P,0),Be.unbindTexture()},this.resetState=function(){j=0,k=0,F=null,Be.reset(),Ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===zf?"display-p3":"srgb",n.unpackColorSpace=At.workingColorSpace===Ul?"display-p3":"srgb"}}class fg extends Hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qn,this.environmentIntensity=1,this.environmentRotation=new Qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class dg extends En{constructor(e,n,r,a,c,d,f,h,m){super(e,n,r,a,c,d,f,h,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Xf extends Hi{constructor(e=[],n=[],r=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:r,detail:a};const c=[],d=[];f(a),m(r),g(),this.setAttribute("position",new Jn(c,3)),this.setAttribute("normal",new Jn(c.slice(),3)),this.setAttribute("uv",new Jn(d,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function f(N){const b=new Q,L=new Q,j=new Q;for(let k=0;k<n.length;k+=3)M(n[k+0],b),M(n[k+1],L),M(n[k+2],j),h(b,L,j,N)}function h(N,b,L,j){const k=j+1,F=[];for(let W=0;W<=k;W++){F[W]=[];const D=N.clone().lerp(L,W/k),C=b.clone().lerp(L,W/k),H=k-W;for(let de=0;de<=H;de++)de===0&&W===k?F[W][de]=D:F[W][de]=D.clone().lerp(C,de/H)}for(let W=0;W<k;W++)for(let D=0;D<2*(k-W)-1;D++){const C=Math.floor(D/2);D%2===0?(x(F[W][C+1]),x(F[W+1][C]),x(F[W][C])):(x(F[W][C+1]),x(F[W+1][C+1]),x(F[W+1][C]))}}function m(N){const b=new Q;for(let L=0;L<c.length;L+=3)b.x=c[L+0],b.y=c[L+1],b.z=c[L+2],b.normalize().multiplyScalar(N),c[L+0]=b.x,c[L+1]=b.y,c[L+2]=b.z}function g(){const N=new Q;for(let b=0;b<c.length;b+=3){N.x=c[b+0],N.y=c[b+1],N.z=c[b+2];const L=v(N)/2/Math.PI+.5,j=_(N)/Math.PI+.5;d.push(L,1-j)}T(),y()}function y(){for(let N=0;N<d.length;N+=6){const b=d[N+0],L=d[N+2],j=d[N+4],k=Math.max(b,L,j),F=Math.min(b,L,j);k>.9&&F<.1&&(b<.2&&(d[N+0]+=1),L<.2&&(d[N+2]+=1),j<.2&&(d[N+4]+=1))}}function x(N){c.push(N.x,N.y,N.z)}function M(N,b){const L=N*3;b.x=e[L+0],b.y=e[L+1],b.z=e[L+2]}function T(){const N=new Q,b=new Q,L=new Q,j=new Q,k=new ut,F=new ut,W=new ut;for(let D=0,C=0;D<c.length;D+=9,C+=6){N.set(c[D+0],c[D+1],c[D+2]),b.set(c[D+3],c[D+4],c[D+5]),L.set(c[D+6],c[D+7],c[D+8]),k.set(d[C+0],d[C+1]),F.set(d[C+2],d[C+3]),W.set(d[C+4],d[C+5]),j.copy(N).add(b).add(L).divideScalar(3);const H=v(j);A(k,C+0,N,H),A(F,C+2,b,H),A(W,C+4,L,H)}}function A(N,b,L,j){j<0&&N.x===1&&(d[b]=N.x-1),L.x===0&&L.z===0&&(d[b]=j/2/Math.PI+.5)}function v(N){return Math.atan2(N.z,-N.x)}function _(N){return Math.atan2(-N.y,Math.sqrt(N.x*N.x+N.z*N.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xf(e.vertices,e.indices,e.radius,e.details)}}class jf extends Xf{constructor(e=1,n=0){const r=(1+Math.sqrt(5))/2,a=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,c,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new jf(e.radius,e.detail)}}const wm=new jt;class hg{constructor(e,n,r=0,a=1/0){this.ray=new Vf(e,n),this.near=r,this.far=a,this.camera=null,this.layers=new Gf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return wm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(wm),this}intersectObject(e,n=!0,r=[]){return Pf(e,this,r,n),r.sort(Tm),r}intersectObjects(e,n=!0,r=[]){for(let a=0,c=e.length;a<c;a++)Pf(e[a],this,r,n);return r.sort(Tm),r}}function Tm(s,e){return s.distance-e.distance}function Pf(s,e,n,r){let a=!0;if(s.layers.test(e.layers)&&s.raycast(e,n)===!1&&(a=!1),a===!0&&r===!0){const c=s.children;for(let d=0,f=c.length;d<f;d++)Pf(c[d],e,n,!0)}}class Am{constructor(e=1,n=0,r=0){return this.radius=e,this.phi=n,this.theta=r,this}set(e,n,r){return this.radius=e,this.phi=n,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,r){return this.radius=Math.sqrt(e*e+n*n+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(mn(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Df}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Df);const Cm={type:"change"},qu={type:"start"},Rm={type:"end"},Sl=new Vf,bm=new gr,BE=Math.cos(70*Wr.DEG2RAD);class pg extends Qr{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new Q,this.cursor=new Q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ms.ROTATE,MIDDLE:Ms.DOLLY,RIGHT:Ms.PAN},this.touches={ONE:gi.ROTATE,TWO:gi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return f.phi},this.getAzimuthalAngle=function(){return f.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(E){E.addEventListener("keydown",be),this._domElementKeyEvents=E},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",be),this._domElementKeyEvents=null},this.saveState=function(){r.target0.copy(r.target),r.position0.copy(r.object.position),r.zoom0=r.object.zoom},this.reset=function(){r.target.copy(r.target0),r.object.position.copy(r.position0),r.object.zoom=r.zoom0,r.object.updateProjectionMatrix(),r.dispatchEvent(Cm),r.update(),c=a.NONE},this.update=(function(){const E=new Q,ne=new Kr().setFromUnitVectors(e.up,new Q(0,1,0)),oe=ne.clone().invert(),me=new Q,we=new Kr,$e=new Q,ot=2*Math.PI;return function(Ht=null){const _t=r.object.position;E.copy(_t).sub(r.target),E.applyQuaternion(ne),f.setFromVector3(E),r.autoRotate&&c===a.NONE&&de(C(Ht)),r.enableDamping?(f.theta+=h.theta*r.dampingFactor,f.phi+=h.phi*r.dampingFactor):(f.theta+=h.theta,f.phi+=h.phi);let Ot=r.minAzimuthAngle,kt=r.maxAzimuthAngle;isFinite(Ot)&&isFinite(kt)&&(Ot<-Math.PI?Ot+=ot:Ot>Math.PI&&(Ot-=ot),kt<-Math.PI?kt+=ot:kt>Math.PI&&(kt-=ot),Ot<=kt?f.theta=Math.max(Ot,Math.min(kt,f.theta)):f.theta=f.theta>(Ot+kt)/2?Math.max(Ot,f.theta):Math.min(kt,f.theta)),f.phi=Math.max(r.minPolarAngle,Math.min(r.maxPolarAngle,f.phi)),f.makeSafe(),r.enableDamping===!0?r.target.addScaledVector(g,r.dampingFactor):r.target.add(g),r.target.sub(r.cursor),r.target.clampLength(r.minTargetRadius,r.maxTargetRadius),r.target.add(r.cursor);let wn=!1;if(r.zoomToCursor&&k||r.object.isOrthographicCamera)f.radius=se(f.radius);else{const Gt=f.radius;f.radius=se(f.radius*m),wn=Gt!=f.radius}if(E.setFromSpherical(f),E.applyQuaternion(oe),_t.copy(r.target).add(E),r.object.lookAt(r.target),r.enableDamping===!0?(h.theta*=1-r.dampingFactor,h.phi*=1-r.dampingFactor,g.multiplyScalar(1-r.dampingFactor)):(h.set(0,0,0),g.set(0,0,0)),r.zoomToCursor&&k){let Gt=null;if(r.object.isPerspectiveCamera){const gn=E.length();Gt=se(gn*m);const yi=gn-Gt;r.object.position.addScaledVector(L,yi),r.object.updateMatrixWorld(),wn=!!yi}else if(r.object.isOrthographicCamera){const gn=new Q(j.x,j.y,0);gn.unproject(r.object);const yi=r.object.zoom;r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/m)),r.object.updateProjectionMatrix(),wn=yi!==r.object.zoom;const ei=new Q(j.x,j.y,0);ei.unproject(r.object),r.object.position.sub(ei).add(gn),r.object.updateMatrixWorld(),Gt=E.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),r.zoomToCursor=!1;Gt!==null&&(this.screenSpacePanning?r.target.set(0,0,-1).transformDirection(r.object.matrix).multiplyScalar(Gt).add(r.object.position):(Sl.origin.copy(r.object.position),Sl.direction.set(0,0,-1).transformDirection(r.object.matrix),Math.abs(r.object.up.dot(Sl.direction))<BE?e.lookAt(r.target):(bm.setFromNormalAndCoplanarPoint(r.object.up,r.target),Sl.intersectPlane(bm,r.target))))}else if(r.object.isOrthographicCamera){const Gt=r.object.zoom;r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/m)),Gt!==r.object.zoom&&(r.object.updateProjectionMatrix(),wn=!0)}return m=1,k=!1,wn||me.distanceToSquared(r.object.position)>d||8*(1-we.dot(r.object.quaternion))>d||$e.distanceToSquared(r.target)>d?(r.dispatchEvent(Cm),me.copy(r.object.position),we.copy(r.object.quaternion),$e.copy(r.target),!0):!1}})(),this.dispose=function(){r.domElement.removeEventListener("contextmenu",De),r.domElement.removeEventListener("pointerdown",Je),r.domElement.removeEventListener("pointercancel",S),r.domElement.removeEventListener("wheel",ce),r.domElement.removeEventListener("pointermove",R),r.domElement.removeEventListener("pointerup",S),r.domElement.getRootNode().removeEventListener("keydown",Me,{capture:!0}),r._domElementKeyEvents!==null&&(r._domElementKeyEvents.removeEventListener("keydown",be),r._domElementKeyEvents=null)};const r=this,a={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let c=a.NONE;const d=1e-6,f=new Am,h=new Am;let m=1;const g=new Q,y=new ut,x=new ut,M=new ut,T=new ut,A=new ut,v=new ut,_=new ut,N=new ut,b=new ut,L=new Q,j=new ut;let k=!1;const F=[],W={};let D=!1;function C(E){return E!==null?2*Math.PI/60*r.autoRotateSpeed*E:2*Math.PI/60/60*r.autoRotateSpeed}function H(E){const ne=Math.abs(E*.01);return Math.pow(.95,r.zoomSpeed*ne)}function de(E){h.theta-=E}function ee(E){h.phi-=E}const _e=(function(){const E=new Q;return function(oe,me){E.setFromMatrixColumn(me,0),E.multiplyScalar(-oe),g.add(E)}})(),ve=(function(){const E=new Q;return function(oe,me){r.screenSpacePanning===!0?E.setFromMatrixColumn(me,1):(E.setFromMatrixColumn(me,0),E.crossVectors(r.object.up,E)),E.multiplyScalar(oe),g.add(E)}})(),ae=(function(){const E=new Q;return function(oe,me){const we=r.domElement;if(r.object.isPerspectiveCamera){const $e=r.object.position;E.copy($e).sub(r.target);let ot=E.length();ot*=Math.tan(r.object.fov/2*Math.PI/180),_e(2*oe*ot/we.clientHeight,r.object.matrix),ve(2*me*ot/we.clientHeight,r.object.matrix)}else r.object.isOrthographicCamera?(_e(oe*(r.object.right-r.object.left)/r.object.zoom/we.clientWidth,r.object.matrix),ve(me*(r.object.top-r.object.bottom)/r.object.zoom/we.clientHeight,r.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),r.enablePan=!1)}})();function q(E){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?m/=E:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function U(E){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?m*=E:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function re(E,ne){if(!r.zoomToCursor)return;k=!0;const oe=r.domElement.getBoundingClientRect(),me=E-oe.left,we=ne-oe.top,$e=oe.width,ot=oe.height;j.x=me/$e*2-1,j.y=-(we/ot)*2+1,L.set(j.x,j.y,1).unproject(r.object).sub(r.object.position).normalize()}function se(E){return Math.max(r.minDistance,Math.min(r.maxDistance,E))}function I(E){y.set(E.clientX,E.clientY)}function te(E){re(E.clientX,E.clientX),_.set(E.clientX,E.clientY)}function Pe(E){T.set(E.clientX,E.clientY)}function K(E){x.set(E.clientX,E.clientY),M.subVectors(x,y).multiplyScalar(r.rotateSpeed);const ne=r.domElement;de(2*Math.PI*M.x/ne.clientHeight),ee(2*Math.PI*M.y/ne.clientHeight),y.copy(x),r.update()}function X(E){N.set(E.clientX,E.clientY),b.subVectors(N,_),b.y>0?q(H(b.y)):b.y<0&&U(H(b.y)),_.copy(N),r.update()}function pe(E){A.set(E.clientX,E.clientY),v.subVectors(A,T).multiplyScalar(r.panSpeed),ae(v.x,v.y),T.copy(A),r.update()}function xe(E){re(E.clientX,E.clientY),E.deltaY<0?U(H(E.deltaY)):E.deltaY>0&&q(H(E.deltaY)),r.update()}function Ce(E){let ne=!1;switch(E.code){case r.keys.UP:E.ctrlKey||E.metaKey||E.shiftKey?ee(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):ae(0,r.keyPanSpeed),ne=!0;break;case r.keys.BOTTOM:E.ctrlKey||E.metaKey||E.shiftKey?ee(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):ae(0,-r.keyPanSpeed),ne=!0;break;case r.keys.LEFT:E.ctrlKey||E.metaKey||E.shiftKey?de(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):ae(r.keyPanSpeed,0),ne=!0;break;case r.keys.RIGHT:E.ctrlKey||E.metaKey||E.shiftKey?de(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):ae(-r.keyPanSpeed,0),ne=!0;break}ne&&(E.preventDefault(),r.update())}function Re(E){if(F.length===1)y.set(E.pageX,E.pageY);else{const ne=Ze(E),oe=.5*(E.pageX+ne.x),me=.5*(E.pageY+ne.y);y.set(oe,me)}}function ze(E){if(F.length===1)T.set(E.pageX,E.pageY);else{const ne=Ze(E),oe=.5*(E.pageX+ne.x),me=.5*(E.pageY+ne.y);T.set(oe,me)}}function pt(E){const ne=Ze(E),oe=E.pageX-ne.x,me=E.pageY-ne.y,we=Math.sqrt(oe*oe+me*me);_.set(0,we)}function z(E){r.enableZoom&&pt(E),r.enablePan&&ze(E)}function vt(E){r.enableZoom&&pt(E),r.enableRotate&&Re(E)}function Qe(E){if(F.length==1)x.set(E.pageX,E.pageY);else{const oe=Ze(E),me=.5*(E.pageX+oe.x),we=.5*(E.pageY+oe.y);x.set(me,we)}M.subVectors(x,y).multiplyScalar(r.rotateSpeed);const ne=r.domElement;de(2*Math.PI*M.x/ne.clientHeight),ee(2*Math.PI*M.y/ne.clientHeight),y.copy(x)}function ct(E){if(F.length===1)A.set(E.pageX,E.pageY);else{const ne=Ze(E),oe=.5*(E.pageX+ne.x),me=.5*(E.pageY+ne.y);A.set(oe,me)}v.subVectors(A,T).multiplyScalar(r.panSpeed),ae(v.x,v.y),T.copy(A)}function Be(E){const ne=Ze(E),oe=E.pageX-ne.x,me=E.pageY-ne.y,we=Math.sqrt(oe*oe+me*me);N.set(0,we),b.set(0,Math.pow(N.y/_.y,r.zoomSpeed)),q(b.y),_.copy(N);const $e=(E.pageX+ne.x)*.5,ot=(E.pageY+ne.y)*.5;re($e,ot)}function gt(E){r.enableZoom&&Be(E),r.enablePan&&ct(E)}function et(E){r.enableZoom&&Be(E),r.enableRotate&&Qe(E)}function Je(E){r.enabled!==!1&&(F.length===0&&(r.domElement.setPointerCapture(E.pointerId),r.domElement.addEventListener("pointermove",R),r.domElement.addEventListener("pointerup",S)),!Ue(E)&&(rt(E),E.pointerType==="touch"?Ve(E):B(E)))}function R(E){r.enabled!==!1&&(E.pointerType==="touch"?ye(E):$(E))}function S(E){switch(We(E),F.length){case 0:r.domElement.releasePointerCapture(E.pointerId),r.domElement.removeEventListener("pointermove",R),r.domElement.removeEventListener("pointerup",S),r.dispatchEvent(Rm),c=a.NONE;break;case 1:const ne=F[0],oe=W[ne];Ve({pointerId:ne,pageX:oe.x,pageY:oe.y});break}}function B(E){let ne;switch(E.button){case 0:ne=r.mouseButtons.LEFT;break;case 1:ne=r.mouseButtons.MIDDLE;break;case 2:ne=r.mouseButtons.RIGHT;break;default:ne=-1}switch(ne){case Ms.DOLLY:if(r.enableZoom===!1)return;te(E),c=a.DOLLY;break;case Ms.ROTATE:if(E.ctrlKey||E.metaKey||E.shiftKey){if(r.enablePan===!1)return;Pe(E),c=a.PAN}else{if(r.enableRotate===!1)return;I(E),c=a.ROTATE}break;case Ms.PAN:if(E.ctrlKey||E.metaKey||E.shiftKey){if(r.enableRotate===!1)return;I(E),c=a.ROTATE}else{if(r.enablePan===!1)return;Pe(E),c=a.PAN}break;default:c=a.NONE}c!==a.NONE&&r.dispatchEvent(qu)}function $(E){switch(c){case a.ROTATE:if(r.enableRotate===!1)return;K(E);break;case a.DOLLY:if(r.enableZoom===!1)return;X(E);break;case a.PAN:if(r.enablePan===!1)return;pe(E);break}}function ce(E){r.enabled===!1||r.enableZoom===!1||c!==a.NONE||(E.preventDefault(),r.dispatchEvent(qu),xe(he(E)),r.dispatchEvent(Rm))}function he(E){const ne=E.deltaMode,oe={clientX:E.clientX,clientY:E.clientY,deltaY:E.deltaY};switch(ne){case 1:oe.deltaY*=16;break;case 2:oe.deltaY*=100;break}return E.ctrlKey&&!D&&(oe.deltaY*=10),oe}function Me(E){E.key==="Control"&&(D=!0,r.domElement.getRootNode().addEventListener("keyup",Se,{passive:!0,capture:!0}))}function Se(E){E.key==="Control"&&(D=!1,r.domElement.getRootNode().removeEventListener("keyup",Se,{passive:!0,capture:!0}))}function be(E){r.enabled===!1||r.enablePan===!1||Ce(E)}function Ve(E){switch(Ye(E),F.length){case 1:switch(r.touches.ONE){case gi.ROTATE:if(r.enableRotate===!1)return;Re(E),c=a.TOUCH_ROTATE;break;case gi.PAN:if(r.enablePan===!1)return;ze(E),c=a.TOUCH_PAN;break;default:c=a.NONE}break;case 2:switch(r.touches.TWO){case gi.DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;z(E),c=a.TOUCH_DOLLY_PAN;break;case gi.DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;vt(E),c=a.TOUCH_DOLLY_ROTATE;break;default:c=a.NONE}break;default:c=a.NONE}c!==a.NONE&&r.dispatchEvent(qu)}function ye(E){switch(Ye(E),c){case a.TOUCH_ROTATE:if(r.enableRotate===!1)return;Qe(E),r.update();break;case a.TOUCH_PAN:if(r.enablePan===!1)return;ct(E),r.update();break;case a.TOUCH_DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;gt(E),r.update();break;case a.TOUCH_DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;et(E),r.update();break;default:c=a.NONE}}function De(E){r.enabled!==!1&&E.preventDefault()}function rt(E){F.push(E.pointerId)}function We(E){delete W[E.pointerId];for(let ne=0;ne<F.length;ne++)if(F[ne]==E.pointerId){F.splice(ne,1);return}}function Ue(E){for(let ne=0;ne<F.length;ne++)if(F[ne]==E.pointerId)return!0;return!1}function Ye(E){let ne=W[E.pointerId];ne===void 0&&(ne=new ut,W[E.pointerId]=ne),ne.set(E.pageX,E.pageY)}function Ze(E){const ne=E.pointerId===F[0]?F[1]:F[0];return W[ne]}r.domElement.addEventListener("contextmenu",De),r.domElement.addEventListener("pointerdown",Je),r.domElement.addEventListener("pointercancel",S),r.domElement.addEventListener("wheel",ce,{passive:!1}),r.domElement.getRootNode().addEventListener("keydown",Me,{passive:!0,capture:!0}),this.update()}}function HE({images:s}){const e=Xt.useRef(null);return Xt.useEffect(()=>{const n=e.current;if(!n)return;const r=n.clientWidth,a=n.clientHeight,c=new fg,d=new Bn(70,r/a,.1,1e3);d.position.set(0,0,28);const f=new ug({antialias:!0,alpha:!0});f.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),f.setSize(r,a),f.setClearColor(0,0),n.appendChild(f.domElement),f.domElement.style.touchAction="none",f.domElement.style.display="block";const h=new pg(d,f.domElement);h.enableDamping=!0,h.dampingFactor=.08,h.rotateSpeed=.7,h.zoomSpeed=1.1,h.minDistance=8,h.maxDistance=55,h.enablePan=!1,h.touches={ONE:gi.ROTATE,TWO:gi.DOLLY_ROTATE};const m=new Vs;c.add(m);const g=11,y=s.length,x=480,M=.048,T=[],A=[],v=[],_=[],N=[];let b=null,L=null;const j=Wr.clamp(Math.round(Math.sqrt(y)*1.08),8,18),k=1.94,F=g*k/Math.max(1,j-1),W=Wr.clamp(25/Math.sqrt(y),1.15,2.75),D=(R,S)=>{const B=new Image;B.onload=()=>{const $=document.createElement("canvas"),ce=512;$.width=ce,$.height=ce;const he=$.getContext("2d");if(!he)return;he.clearRect(0,0,ce,ce);const Me=Math.min(ce/B.width,ce/B.height),Se=B.width*Me,be=B.height*Me;he.drawImage(B,(ce-Se)/2,(ce-be)/2,Se,be);const Ve=new dg($);Ve.colorSpace=$n,Ve.minFilter=Sn,Ve.magFilter=Sn,S(Ve)},B.src=R},C=R=>new Ol({side:R,toneMapped:!1,color:16316411,transparent:!0,alphaTest:.01}),H=R=>{const S=R.clone(),B=S.getAttribute("uv").clone();for(let $=0;$<B.count;$++)B.setX($,1-B.getX($));return S.setAttribute("uv",B),S},de=(R,S,B,$,ce=8)=>{const he=[],Me=[],Se=[];for(let Ve=0;Ve<=ce;Ve++){const ye=Ve/ce,De=Wr.clamp(R+(.5-ye)*$,-Math.PI/2+.04,Math.PI/2-.04);for(let rt=0;rt<=ce;rt++){const We=rt/ce,Ue=S+(We-.5)*B,Ye=Math.cos(De);he.push(Math.cos(Ue)*Ye*g,Math.sin(De)*g,Math.sin(Ue)*Ye*g),Me.push(We,1-ye)}}for(let Ve=0;Ve<ce;Ve++)for(let ye=0;ye<ce;ye++){const De=Ve*(ce+1)+ye,rt=De+1,We=De+ce+1,Ue=We+1;Se.push(De,We,rt,rt,We,Ue)}const be=new Hi;return be.setAttribute("position",new Jn(he,3)),be.setAttribute("uv",new Jn(Me,2)),be.setIndex(Se),be.computeVertexNormals(),be},ee=Array.from({length:j},(R,S)=>{const B=j===1?.5:S/(j-1),$=k/2-B*k,ce=Math.sqrt(Math.max(.03,1-$*$));return{lat:$,radiusRatio:ce,count:Math.max(3,Math.round(ce*y*1.18/j))}});let _e=ee.reduce((R,S)=>R+S.count,0);for(;_e<y;){const R=ee.reduce((S,B,$)=>B.radiusRatio>ee[S].radiusRatio?$:S,0);ee[R].count+=1,_e+=1}for(;_e>y;){const R=ee.reduce((S,B,$)=>B.count>ee[S].count?$:S,0);if(ee[R].count<=3)break;ee[R].count-=1,_e-=1}let ve=0;ee.forEach((R,S)=>{for(let B=0;B<R.count&&ve<y;B++){const $=(B+S%2*.5)/R.count*Math.PI*2,ce=R.radiusRatio*g,Me=Math.PI*2*ce/R.count,Se=Math.min(W,Me*.9,F*.9),be=Math.asin(R.lat),Ve=Math.min(Math.PI*2/R.count*.9,Se/Math.max(ce,.8)),ye=Se/g,De=de(be,$,Ve,ye),rt=ve,We=C(zi),Ue=C(Mn);_.push(We,Ue);const Ye=new Zn(De,We);Ye.userData.imageIndex=rt;const Ze=new Zn(H(De),Ue);Ze.userData.imageIndex=rt,T.push(Ye),A.push(Ze),m.add(Ye),m.add(Ze),N.push(Ye.scale.clone()),Ye.userData.frontMesh=Ye,Ye.userData.backMesh=Ze,Ze.userData.frontMesh=Ye,D(s[ve],yt=>{v.push(yt),We.map=yt,We.color.set(16777215),We.needsUpdate=!0,Ue.map=yt,Ue.color.set(16777215),Ue.needsUpdate=!0,Ye.userData.texture=yt,Ze.userData.texture=yt}),ve++}});let ae=null,q=null;const U=document.createElement("div");U.style.position="absolute",U.style.inset="0",U.style.pointerEvents="none",U.style.zIndex="20",n.appendChild(U);const re=(R,S)=>{R.visible=S;const B=R.userData.backMesh;B&&(B.visible=S)},se=R=>{const S=f.domElement.getBoundingClientRect(),B=R.clone().project(d);return{x:(B.x+1)/2*S.width,y:(1-B.y)/2*S.height}},I=R=>{const S=R.geometry.getAttribute("position"),B=Math.round(Math.sqrt(S.count))-1,$=[],ce=[];for(let Me=0;Me<=B;Me++)$.push(Me),ce.push({x:Me/B,y:0});for(let Me=1;Me<=B;Me++)$.push(Me*(B+1)+B),ce.push({x:1,y:Me/B});for(let Me=B-1;Me>=0;Me--)$.push(B*(B+1)+Me),ce.push({x:Me/B,y:1});for(let Me=B-1;Me>=1;Me--)$.push(Me*(B+1)),ce.push({x:0,y:Me/B});const he=$.map(Me=>{const Se=new Q(S.getX(Me),S.getY(Me),S.getZ(Me));return R.localToWorld(Se),se(Se)});return te(he)>=0?{points:he,unitPoints:ce}:{points:he.toReversed(),unitPoints:ce.toReversed()}},te=R=>R.reduce((S,B,$)=>{const ce=R[($+1)%R.length];return S+B.x*ce.y-B.y*ce.x},0),Pe=(R=1)=>{const S=f.domElement.clientWidth,B=f.domElement.clientHeight,$=Math.min(S*.64,620),ce=Math.min(B*.64,620),he=Math.min($,ce*R),Me=he/R;return{left:(S-he)/2,top:(B-Me)/2,width:he,height:Me}},K=R=>{const S=f.domElement.getBoundingClientRect(),B=R.getBoundingClientRect();return{left:B.left-S.left,top:B.top-S.top,width:B.width,height:B.height}},X=R=>{const{points:S,unitPoints:B}=I(R),$=Math.min(...S.map(ye=>ye.x)),ce=Math.max(...S.map(ye=>ye.x)),he=Math.min(...S.map(ye=>ye.y)),Me=Math.max(...S.map(ye=>ye.y)),Se={left:$,top:he,width:Math.max(1,ce-$),height:Math.max(1,Me-he)},be=`polygon(${S.map(ye=>{const De=Wr.clamp((ye.x-Se.left)/Se.width*100,0,100),rt=Wr.clamp((ye.y-Se.top)/Se.height*100,0,100);return`${De}% ${rt}%`}).join(", ")})`,Ve=`polygon(${B.map(ye=>`${ye.x*100}% ${ye.y*100}%`).join(", ")})`;return{rect:Se,clipPath:be,fullClipPath:Ve}},pe=(R,S)=>{const B=R.left+R.width/2,$=R.top+R.height/2,ce=S.left+S.width/2,he=S.top+S.height/2,Me=B-ce,Se=$-he,be=R.width/S.width,Ve=R.height/S.height;return`translate(${Me}px, ${Se}px) scale(${be}, ${Ve})`},xe=(R,S,B,$,ce="inset(0)",he="inset(0)")=>{q==null||q.cancel();const Me=pe(S,B);R.style.left=`${B.left}px`,R.style.top=`${B.top}px`,R.style.width=`${B.width}px`,R.style.height=`${B.height}px`,R.style.opacity="1",R.style.transform=Me,R.style.clipPath=ce;const Se={transform:Me,clipPath:ce,opacity:1,borderRadius:$==="open"?"18px":"28px"},be={transform:"translate(0px, 0px) scale(1, 1)",clipPath:he,opacity:1,borderRadius:$==="open"?"28px":"18px"};return q=R.animate([Se,be],{duration:x,easing:"cubic-bezier(0.19, 1, 0.22, 1)",fill:"forwards",composite:"replace"}),q},Ce=(R,S,B)=>xe(R,S,B.rect,"close","inset(0)",B.clipPath),Re=()=>{if(!ae)return;const{element:R,mesh:S}=ae,B=K(R);re(S,!0),h.update(),f.render(c,d);const $=m.rotation.y;m.rotation.y=$+M*(x/1e3),m.updateMatrixWorld(!0);const ce=X(S);m.rotation.y=$,m.updateMatrixWorld(!0);const he=Ce(R,B,ce);he.onfinish=()=>{R.remove(),ae=null,b=null,L=null,q=null},he.oncancel=()=>{R.remove(),re(S,!0)}},ze=(R,S,B)=>{if(!B||(ae==null?void 0:ae.mesh)===R)return;ae&&(ae.element.remove(),re(ae.mesh,!0)),b=R,L=B,re(R,!1);const $=document.createElement("img");$.src=s[S],$.draggable=!1,$.style.position="absolute",$.style.objectFit="contain",$.style.background="transparent",$.style.boxShadow="0 28px 80px rgba(0, 0, 0, 0.35)",$.style.willChange="transform, clip-path, opacity",$.style.pointerEvents="auto",$.style.cursor="zoom-out",$.style.transformOrigin="center center",$.addEventListener("click",he=>{he.stopPropagation(),Re()});const ce=()=>{const he=X(R),Me=$.naturalWidth>0&&$.naturalHeight>0?$.naturalWidth/$.naturalHeight:1,Se=Pe(Me);$.style.left=`${Se.left}px`,$.style.top=`${Se.top}px`,$.style.width=`${Se.width}px`,$.style.height=`${Se.height}px`,$.style.transform=pe(he.rect,Se),$.style.clipPath=he.clipPath,U.appendChild($),ae={element:$,mesh:R,index:S,projection:he};const be=xe($,he.rect,Se,"open",he.clipPath,"inset(0)");be.onfinish=()=>{q=null}};$.complete&&$.naturalWidth>0?ce():$.addEventListener("load",ce,{once:!0})},pt=new hg,z=new ut,vt=R=>{const S=f.domElement.getBoundingClientRect();z.x=(R.clientX-S.left)/S.width*2-1,z.y=-((R.clientY-S.top)/S.height)*2+1,pt.setFromCamera(z,d);const B=pt.intersectObjects([...T,...A]);if(B.length>0){const ce=B[0].object,he=ce.userData.frontMesh??ce,Me=he.userData.texture;b===he&&L===Me?Re():(b&&re(b,!0),ze(he,he.userData.imageIndex,Me))}else Re()};f.domElement.addEventListener("click",vt);let Qe=0,ct=!1,Be=performance.now();const gt=(R=performance.now())=>{if(ct)return;Qe=requestAnimationFrame(gt);const S=Math.min((R-Be)/1e3,.05);Be=R,m.rotation.y+=M*S,h.update(),f.render(c,d)};gt();const et=()=>{const R=n.clientWidth,S=n.clientHeight;d.aspect=R/S,d.updateProjectionMatrix(),f.setSize(R,S)},Je=new ResizeObserver(et);return Je.observe(n),()=>{ct=!0,cancelAnimationFrame(Qe),Je.disconnect(),f.domElement.removeEventListener("click",vt),h.dispose(),q==null||q.cancel(),U.remove(),T.forEach(R=>{m.remove(R),R.geometry.dispose()}),A.forEach(R=>{m.remove(R),R.geometry.dispose()}),_.forEach(R=>R.dispose()),v.forEach(R=>R.dispose()),f.dispose(),f.domElement.parentNode===n&&n.removeChild(f.domElement)}},[s]),ge.jsx("div",{ref:e,className:"absolute inset-0",style:{touchAction:"none"}})}const $u=(()=>{const s=new jf(1,0).toNonIndexed(),e=s.getAttribute("position"),n=[];for(let r=0;r<e.count;r+=3){const a=new Q().fromBufferAttribute(e,r),c=new Q().fromBufferAttribute(e,r+1),d=new Q().fromBufferAttribute(e,r+2);n.push(new ui(a,c,d).getNormal(new Q).normalize())}return s.dispose(),n})();function VE({images:s,variant:e}){const n=Xt.useRef(null);return Xt.useEffect(()=>{const r=n.current;if(!r)return;const a=r.clientWidth,c=r.clientHeight,d=new fg,f=new Bn(66,a/c,.1,1e3);f.position.set(0,0,e==="spiral"?25:28);const h=new ug({antialias:!0,alpha:!0});h.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),h.setSize(a,c),h.setClearColor(0,0),h.domElement.style.display="block",h.domElement.style.touchAction="none",r.appendChild(h.domElement);const m=new pg(f,h.domElement);m.enableDamping=!0,m.dampingFactor=.08,m.rotateSpeed=.7,m.zoomSpeed=1.1,m.minDistance=8,m.maxDistance=55,m.enablePan=!1,m.touches={ONE:gi.ROTATE,TWO:gi.DOLLY_ROTATE};const g=new Vs;d.add(g);const y=[],x=[],M=[];let T=null,A=null;const v=document.createElement("div");v.style.position="absolute",v.style.inset="0",v.style.pointerEvents="none",v.style.zIndex="20",r.appendChild(v);const _=(q,U)=>{const re=new Image;re.onload=()=>{const se=document.createElement("canvas"),I=512;se.width=I,se.height=I;const te=se.getContext("2d");if(!te)return;te.clearRect(0,0,I,I);const Pe=Math.min(I/re.width,I/re.height),K=re.width*Pe,X=re.height*Pe;te.drawImage(re,(I-K)/2,(I-X)/2,K,X);const pe=new dg(se);pe.colorSpace=$n,pe.minFilter=Sn,pe.magFilter=Sn,U(pe)},re.src=q},N=(q,U)=>{const re=Math.max(8,Math.ceil(Math.sqrt(U)*1.8)),se=Math.ceil(U/re),I=q%re,te=Math.floor(q/re),Pe=I/re*Math.PI*2,K=9.8,X=2.15,pe=(se-1)*X*.5-te*X,xe=new Q(Math.sin(Pe)*K,pe,Math.cos(Pe)*K),Ce=new Qn(0,Pe,0);return{position:xe,rotation:Ce,width:1.72,height:1.36}},b=(q,U)=>{const re=$u[q%$u.length].clone(),se=Math.floor(q/$u.length),I=re.clone().multiplyScalar(10.2+se*.16),te=new jt().lookAt(I,new Q(0,0,0),new Q(0,1,0)),Pe=new Qn().setFromRotationMatrix(te);return{position:I,rotation:Pe,width:1.62,height:1.62}},L=(q,U)=>{const re=U===1?.5:q/(U-1),se=Math.max(3.2,Math.min(7.2,U/14)),I=re*Math.PI*2*se,te=8.2,Pe=(.5-re)*13.5,K=new Q(Math.sin(I)*te,Pe,Math.cos(I)*te),X=new Qn(0,I,Wr.degToRad(q%2===0?-8:8));return{position:K,rotation:X,width:1.55,height:1.25}},j=(q,U)=>e==="cylinder"?N(q,U):e==="polyhedron"?b(q):L(q,U);s.forEach((q,U)=>{const re=j(U,s.length),se=new Yo(re.width,re.height,1,1),I=new Ol({side:vi,transparent:!0,alphaTest:.01,toneMapped:!1,color:16316411}),te=new Zn(se,I);te.position.copy(re.position),te.rotation.copy(re.rotation),te.userData.imageIndex=U,g.add(te),M.push(te),x.push(I),_(q,Pe=>{y.push(Pe),I.map=Pe,I.color.set(16777215),I.needsUpdate=!0})});const k=q=>{T==null||T.cancel(),A==null||A.remove();const U=document.createElement("img");U.src=s[q],U.draggable=!1,U.style.position="absolute",U.style.objectFit="contain",U.style.background="transparent",U.style.boxShadow="0 28px 80px rgba(0, 0, 0, 0.35)",U.style.pointerEvents="auto",U.style.cursor="zoom-out",U.style.transformOrigin="center center",U.addEventListener("click",se=>{se.stopPropagation(),T==null||T.cancel(),U.remove(),A=null});const re=()=>{const se=h.domElement.clientWidth,I=h.domElement.clientHeight,te=U.naturalWidth>0&&U.naturalHeight>0?U.naturalWidth/U.naturalHeight:1,Pe=Math.min(se*.64,620),K=Math.min(I*.64,620),X=Math.min(Pe,K*te),pe=X/te,xe=(se-X)/2,Ce=(I-pe)/2;U.style.left=`${xe}px`,U.style.top=`${Ce}px`,U.style.width=`${X}px`,U.style.height=`${pe}px`,U.style.opacity="0",U.style.transform="scale(0.88)",v.appendChild(U),A=U,T=U.animate([{opacity:0,transform:"scale(0.88)"},{opacity:1,transform:"scale(1)"}],{duration:240,easing:"cubic-bezier(0.19, 1, 0.22, 1)",fill:"forwards"})};U.complete&&U.naturalWidth>0?re():U.addEventListener("load",re,{once:!0})},F=new hg,W=new ut,D=q=>{const U=h.domElement.getBoundingClientRect();W.x=(q.clientX-U.left)/U.width*2-1,W.y=-((q.clientY-U.top)/U.height)*2+1,F.setFromCamera(W,f);const re=F.intersectObjects(M);if(re.length===0){A==null||A.remove(),A=null;return}const se=re[0].object;k(se.userData.imageIndex)};h.domElement.addEventListener("click",D);let C=0,H=!1,de=performance.now();const ee=e==="spiral"?.035:.045,_e=(q=performance.now())=>{if(H)return;C=requestAnimationFrame(_e);const U=Math.min((q-de)/1e3,.05);de=q,g.rotation.y+=ee*U,e==="polyhedron"&&(g.rotation.x=Math.sin(q*18e-5)*.12),m.update(),h.render(d,f)};_e();const ve=()=>{const q=r.clientWidth,U=r.clientHeight;f.aspect=q/U,f.updateProjectionMatrix(),h.setSize(q,U)},ae=new ResizeObserver(ve);return ae.observe(r),()=>{H=!0,cancelAnimationFrame(C),ae.disconnect(),h.domElement.removeEventListener("click",D),m.dispose(),T==null||T.cancel(),A==null||A.remove(),v.remove(),M.forEach(q=>{g.remove(q),q.geometry.dispose()}),x.forEach(q=>q.dispose()),y.forEach(q=>q.dispose()),h.dispose(),h.domElement.parentNode===r&&r.removeChild(h.domElement)}},[s,e]),ge.jsx("div",{ref:n,className:"absolute inset-0",style:{touchAction:"none"}})}function GE(){return ge.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-black",children:ge.jsxs("div",{className:"text-center",children:[ge.jsxs("div",{className:"relative w-32 h-32 mx-auto mb-6",children:[ge.jsx("div",{className:"absolute inset-0 rounded-full border-4 border-purple-500/30"}),ge.jsx("div",{className:"absolute inset-0 rounded-full border-4 border-transparent border-t-purple-500 animate-spin"}),ge.jsx("div",{className:"absolute inset-4 rounded-full border-4 border-transparent border-t-pink-500 animate-spin",style:{animationDuration:"1.5s"}}),ge.jsx("div",{className:"absolute inset-8 rounded-full border-4 border-transparent border-t-blue-500 animate-spin",style:{animationDuration:"2s"}})]}),ge.jsx("p",{className:"text-white text-xl animate-pulse",children:"正在生成 3D 照片球..."})]})})}const WE="/assets/sphere-Cr5AC6N-.png",XE="/assets/cylinder-D8V3k0w6.png",jE="/assets/polyhedron-goiEs5X2.png",YE="/assets/spiral-BHT0KwBL.png";class qE extends Xt.Component{constructor(){super(...arguments),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,n){console.error("3D gallery crashed:",e,n)}render(){var e;return this.state.error?ge.jsx("div",{className:"absolute inset-0 flex items-center justify-center p-6 text-white",children:ge.jsxs("div",{className:"max-w-lg bg-red-900/60 rounded-2xl p-6 backdrop-blur-md border border-red-400/40",children:[ge.jsx("p",{className:"text-lg font-bold mb-2",children:"3D 影像空间渲染出错"}),ge.jsx("pre",{className:"text-xs whitespace-pre-wrap break-all opacity-80",children:String(((e=this.state.error)==null?void 0:e.message)||this.state.error)})]})}):this.props.children}}const $E=/\.(avif|bmp|gif|heic|heif|jpe?g|png|webp)$/i,Ho=[{id:"sphere",name:"照片球体",subtitle:"照片围成立体球面，适合大量回忆的沉浸式浏览",minPhotos:24,maxPhotos:120,accent:"from-violet-500 via-fuchsia-500 to-blue-500",preview:"orb",logo:WE},{id:"cylinder",name:"圆柱画廊",subtitle:"像环形展厅一样环绕观看，横向浏览节奏更稳定",minPhotos:12,maxPhotos:80,accent:"from-cyan-500 via-blue-500 to-violet-500",preview:"cylinder",logo:XE,variant:"cylinder"},{id:"polyhedron",name:"多面体相册",subtitle:"照片分布在晶体切面上，适合更利落的高级展示",minPhotos:12,maxPhotos:60,accent:"from-amber-400 via-rose-500 to-violet-600",preview:"polyhedron",logo:jE,variant:"polyhedron"},{id:"spiral",name:"螺旋星轨",subtitle:"照片沿上升轨道展开，适合时间线和成长记录",minPhotos:20,maxPhotos:100,accent:"from-emerald-400 via-cyan-500 to-indigo-600",preview:"spiral",logo:YE,variant:"spiral"}],Pm=s=>Ho.find(e=>e.id===s)??Ho[0];function Lm({accent:s,logo:e,name:n,compact:r=!1}){return ge.jsxs("div",{className:`${r?"size-28 rounded-[20px]":"h-[clamp(190px,38%,376px)] rounded-[24px]"} relative shrink-0 overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-black border border-white/10 shadow-inner`,children:[ge.jsx("div",{className:`absolute inset-0 opacity-25 bg-gradient-to-br ${s}`}),ge.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:ge.jsx("img",{src:e,alt:`${n} logo`,className:`${r?"size-[92px]":"h-[92%] w-[92%]"} object-contain`,draggable:!1})})]})}function KE(){const[s,e]=Xt.useState(null),[n,r]=Xt.useState(null),[a,c]=Xt.useState([]),[d,f]=Xt.useState(!1),[h,m]=Xt.useState(!1),[g,y]=Xt.useState(!1),[x,M]=Xt.useState({done:0,total:0}),[T,A]=Xt.useState(!1),[v,_]=Xt.useState(!1),N=Xt.useRef({}),b=Xt.useRef(null),L=s?Pm(s):null,j=(L==null?void 0:L.maxPhotos)??Ho[0].maxPhotos;(L==null?void 0:L.minPhotos)??Ho[0].minPhotos;const k=(X,pe=512,xe=.8)=>new Promise(Ce=>{const Re=URL.createObjectURL(X),ze=new Image;let pt=!1;const z=(Qe,ct)=>{pt||(pt=!0,window.clearTimeout(vt),URL.revokeObjectURL(Re),Ce(Qe))},vt=window.setTimeout(()=>{z(null)},8e3);ze.onload=()=>{try{const Qe=Math.min(1,pe/Math.max(ze.width,ze.height)),ct=Math.max(1,Math.round(ze.width*Qe)),Be=Math.max(1,Math.round(ze.height*Qe)),gt=document.createElement("canvas");gt.width=ct,gt.height=Be;const et=gt.getContext("2d");if(!et){z(null,!0);return}et.drawImage(ze,0,0,ct,Be),gt.toBlob(Je=>{if(!Je){z(null,!0);return}z(URL.createObjectURL(Je),!0)},"image/jpeg",xe)}catch{z(null)}},ze.onerror=()=>{z(null)},ze.src=Re}),F=async X=>{if(g)return;const pe=X.filter(Qe=>Qe.type.startsWith("image/")||$E.test(Qe.name)),xe=X.length-pe.length;if(pe.length===0){alert("请选择有效的图片文件");return}const Ce=j-a.length;if(Ce<=0){alert(`已达上限 ${j} 张，请先清空或减少照片再上传`);return}let Re=pe;pe.length>Ce&&(Re=pe.slice(0,Ce),alert(`${(L==null?void 0:L.name)??"当前样式"}最多 ${j} 张，已自动只取前 ${Ce} 张（剩余 ${pe.length-Ce} 张被忽略）`)),y(!0),M({done:0,total:Re.length});let ze=0;const pt=await Promise.all(Re.map(async Qe=>{const ct=await k(Qe);return ze+=1,M({done:ze,total:Re.length}),ct})),z=pt.filter(Qe=>!!Qe),vt=xe+pt.length-z.length;z.length>0&&c(Qe=>{const ct=Math.max(0,j-Qe.length),Be=z.slice(0,ct);return z.slice(ct).forEach(gt=>URL.revokeObjectURL(gt)),[...Qe,...Be]}),y(!1),vt>0&&alert(`已跳过 ${vt} 个不支持或无法读取的文件，其余图片已继续上传`)},W=X=>{X.preventDefault(),A(!0)},D=X=>{X.preventDefault(),A(!1)},C=X=>{X.preventDefault(),A(!1),F(Array.from(X.dataTransfer.files))},H=X=>{const pe=X.target.files?Array.from(X.target.files):[];X.target.value="",F(pe)},de=()=>{if(L){if(a.length<L.minPhotos){alert(`${L.name} 至少需要 ${L.minPhotos} 张照片`);return}m(!0),setTimeout(()=>{m(!1),f(!0)},1500)}},ee=()=>{a.forEach(X=>URL.revokeObjectURL(X)),c([]),f(!1),m(!1)},_e=()=>{f(!1),m(!1)},ve=(X,pe)=>{const xe=Pm(X),Ce=pe==null?void 0:pe.getBoundingClientRect();Ce?(r({style:xe,from:Ce,expanded:!1,fading:!1,direction:"enter"}),e(X),_(!1),window.setTimeout(()=>{r(Re=>Re&&{...Re,expanded:!0}),_(!0)},20),window.setTimeout(()=>{r(Re=>Re&&{...Re,fading:!0})},360),window.setTimeout(()=>{r(null)},720)):(e(X),_(!0)),c([]),f(!1),m(!1)},ae=()=>{if(L){const X=L,pe=new DOMRect(0,0,window.innerWidth,window.innerHeight);r({style:X,from:pe,expanded:!0,fading:!1,direction:"exit"}),_(!1),e(null),requestAnimationFrame(()=>{requestAnimationFrame(()=>{const xe=N.current[X.id],Ce=(xe==null?void 0:xe.getBoundingClientRect())??pe;r(Re=>Re&&{...Re,from:Ce,expanded:!1})})}),window.setTimeout(()=>{a.forEach(xe=>URL.revokeObjectURL(xe)),c([])},220),window.setTimeout(()=>{r(null)},560)}else a.forEach(X=>URL.revokeObjectURL(X)),c([]),e(null);f(!1),m(!1)},q=X=>{c(pe=>{const xe=pe[X];return xe&&URL.revokeObjectURL(xe),pe.filter((Ce,Re)=>Re!==X)})},U=()=>{if(!n)return null;const X=window.innerWidth,pe=window.innerHeight,Re=n.expanded?{left:0,top:0,width:X,height:pe,borderRadius:0,opacity:n.fading?0:1}:{left:n.from.left,top:n.from.top,width:n.from.width,height:n.from.height,borderRadius:28,opacity:1};return ge.jsx("div",{className:"pointer-events-none fixed inset-0 z-50",children:ge.jsxs("div",{className:"absolute overflow-hidden border border-white/20 bg-gradient-to-br from-slate-950 via-purple-950 to-black shadow-[0_32px_120px_rgba(0,0,0,0.45)] backdrop-blur-2xl transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]",style:Re,children:[ge.jsx("div",{className:`absolute inset-0 bg-gradient-to-br ${n.style.accent} opacity-25`}),ge.jsx("div",{className:"absolute left-[-8rem] top-[-8rem] h-96 w-96 rounded-full bg-purple-500/40 blur-3xl"}),ge.jsx("div",{className:"absolute bottom-[-10rem] right-[-8rem] h-[28rem] w-[28rem] rounded-full bg-blue-500/35 blur-3xl"}),ge.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:ge.jsxs("div",{className:"text-center",children:[ge.jsx("p",{className:"text-3xl font-bold text-white",children:n.style.name}),ge.jsxs("p",{className:"mt-2 text-sm text-white/70",children:[n.style.minPhotos,"-",n.style.maxPhotos," 张照片"]})]})})]})})};if(!L)return ge.jsxs("div",{className:"min-h-dvh bg-gradient-to-br from-slate-950 via-purple-950 to-black text-white relative overflow-y-auto",children:[ge.jsxs("div",{className:"absolute inset-0 opacity-30 pointer-events-none",children:[ge.jsx("div",{className:"absolute left-[-8rem] top-[-8rem] h-96 w-96 rounded-full bg-purple-500 blur-3xl"}),ge.jsx("div",{className:"absolute bottom-[-10rem] right-[-8rem] h-[28rem] w-[28rem] rounded-full bg-blue-500 blur-3xl"})]}),ge.jsxs("main",{className:"relative z-10 mx-auto flex min-h-dvh w-full flex-col px-5 pb-5 pt-8 sm:px-8 sm:pb-8 xl:px-[clamp(32px,4.4vw,96px)] xl:pb-[clamp(32px,4.4vw,96px)]",children:[ge.jsxs("header",{className:"mb-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between",children:[ge.jsxs("div",{children:[ge.jsxs("div",{className:"mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/75 backdrop-blur-md",children:[ge.jsx(d0,{className:"size-4"}),"高级展厅式 3D 相册"]}),ge.jsx("h1",{className:"text-5xl font-bold tracking-normal sm:text-6xl",children:"3D 影像空间"}),ge.jsx("p",{className:"mt-4 max-w-2xl text-lg leading-8 text-white/68",children:"先选择展示样式，再按样式要求上传照片，生成可旋转、可放大的立体影像展厅。"})]}),ge.jsxs("div",{className:"w-full rounded-[28px] border border-white/10 bg-white/10 px-5 py-4 text-sm text-white/70 backdrop-blur-xl shadow-2xl sm:w-[min(100%,410px)]",children:[ge.jsxs("div",{className:"flex items-center gap-2 text-white",children:[ge.jsx(u0,{className:"size-4"}),"首批 4 种空间样式"]}),ge.jsx("p",{className:"mt-1",children:"照片球体 / 圆柱画廊 / 多面体相册 / 螺旋星轨"})]})]}),ge.jsx("section",{className:"grid min-h-[430px] flex-1 grid-cols-1 items-stretch justify-between gap-6 md:grid-cols-2 xl:grid-cols-[repeat(4,minmax(0,410px))]",children:Ho.map(X=>ge.jsxs("button",{type:"button",ref:pe=>{N.current[X.id]=pe},onClick:pe=>ve(X.id,pe.currentTarget),className:"group flex h-full min-h-[430px] flex-col overflow-hidden rounded-[28px] border border-white/12 bg-white/[0.08] p-4 text-left shadow-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.12]",children:[ge.jsx(Lm,{accent:X.accent,logo:X.logo,name:X.name}),ge.jsxs("div",{className:"flex min-h-0 flex-1 flex-col px-1 pt-5",children:[ge.jsxs("div",{className:"mb-3 flex items-center justify-between gap-3",children:[ge.jsx("h2",{className:"text-2xl font-semibold text-white",children:X.name}),ge.jsx("span",{className:`h-2.5 w-12 rounded-full bg-gradient-to-r ${X.accent}`})]}),ge.jsx("p",{className:"min-h-[4.5rem] text-sm leading-6 text-white/62",children:X.subtitle}),ge.jsxs("div",{className:"mt-auto flex items-center justify-between border-t border-white/10 pt-4",children:[ge.jsxs("span",{className:"text-sm text-white/55",children:["需要 ",X.minPhotos,"-",X.maxPhotos," 张"]}),ge.jsx("span",{className:"rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition-transform group-hover:scale-105",children:"选择"})]})]})]},X.id))})]}),U()]});if(h)return ge.jsx(GE,{});if(d)return ge.jsxs("div",{className:"size-full bg-gradient-to-br from-gray-900 via-purple-900 to-black relative overflow-hidden",children:[ge.jsxs("div",{className:"absolute inset-0 opacity-20",children:[ge.jsx("div",{className:"absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"}),ge.jsx("div",{className:"absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse",style:{animationDelay:"1s"}})]}),ge.jsx(qE,{children:L.id==="sphere"?ge.jsx(HE,{images:a}):ge.jsx(VE,{images:a,variant:L.variant??"cylinder"})}),ge.jsxs("div",{className:"absolute top-3 left-3 sm:top-6 sm:left-6 flex gap-3 z-10",children:[ge.jsxs("button",{onClick:_e,className:"px-3 py-2 sm:px-6 sm:py-3 bg-white/90 hover:bg-white text-black rounded-full flex items-center gap-1.5 sm:gap-2 transition-all shadow-2xl active:scale-95 sm:hover:scale-105 text-sm sm:text-base",children:[ge.jsx(Tp,{className:"w-4 h-4 sm:w-5 sm:h-5"}),"退出预览"]}),ge.jsx("button",{onClick:ae,className:"px-3 py-2 sm:px-6 sm:py-3 bg-white/80 hover:bg-white text-black rounded-full flex items-center gap-1.5 sm:gap-2 transition-all shadow-2xl active:scale-95 sm:hover:scale-105 text-sm sm:text-base",children:"重新选样式"})]}),ge.jsx("div",{className:"absolute top-3 right-3 sm:top-6 sm:right-6 flex gap-3 z-10",children:ge.jsxs("button",{onClick:ee,className:"px-3 py-2 sm:px-6 sm:py-3 bg-white/90 hover:bg-white text-black rounded-full flex items-center gap-1.5 sm:gap-2 transition-all shadow-2xl active:scale-95 sm:hover:scale-105 text-sm sm:text-base",children:[ge.jsx(p0,{className:"w-4 h-4 sm:w-5 sm:h-5"}),"重新开始"]})}),ge.jsxs("div",{className:"absolute bottom-3 left-3 sm:bottom-6 sm:left-6 bg-black/60 text-white px-3 py-1.5 sm:px-6 sm:py-3 rounded-full backdrop-blur-md border border-white/20 shadow-xl text-xs sm:text-base",children:["📸 ",L.name," · ",a.length," 张"]}),ge.jsx("div",{className:"absolute bottom-3 right-3 sm:bottom-6 sm:right-6 bg-black/40 text-white/80 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full backdrop-blur-sm text-[10px] sm:text-sm",children:"🎮 单指旋转 · 双指缩放"})]});const re=a.length<=1?112:a.length<=4?104:a.length<=12?88:a.length<=36?72:a.length<=80?60:52,se=Math.min(Math.max(a.length,1),10),I=re*se+12*Math.max(0,se-1),te=I+40,Pe=Math.min(Math.max(te+64,480),980),K=a.length>0;return ge.jsxs("div",{className:"h-dvh flex justify-center bg-gradient-to-br from-slate-950 via-purple-950 to-black relative overflow-hidden",children:[ge.jsxs("div",{className:"absolute inset-0 opacity-30 pointer-events-none",children:[ge.jsx("div",{className:"absolute left-[-8rem] top-[-8rem] h-96 w-96 rounded-full bg-purple-500 blur-3xl"}),ge.jsx("div",{className:"absolute bottom-[-10rem] right-[-8rem] h-[28rem] w-[28rem] rounded-full bg-blue-500 blur-3xl"})]}),ge.jsx("button",{type:"button",onClick:ae,className:"absolute left-4 top-4 z-20 rounded-full bg-white/85 px-4 py-2 text-sm text-gray-800 shadow-xl backdrop-blur-md transition-all hover:bg-white hover:text-purple-700 sm:left-6 sm:top-6",children:ge.jsxs("span",{className:"inline-flex items-center gap-2",children:[ge.jsx(Tp,{className:"size-4"}),"重选样式"]})}),ge.jsxs("div",{className:`${K?"max-w-[960px]":"max-w-2xl"} w-full px-6 pb-4 pt-14 sm:pt-16 relative z-10 flex h-full flex-col min-h-0 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${v?"opacity-100 translate-y-0":"opacity-0 translate-y-3"}`,children:[ge.jsxs("div",{className:"text-center mb-4 animate-fade-in flex shrink-0 flex-col items-center",children:[ge.jsx("div",{className:"mb-3",children:ge.jsx(Lm,{accent:L.accent,logo:L.logo,name:L.name,compact:!0})}),ge.jsx("span",{className:`mb-2 h-1.5 w-14 rounded-full bg-gradient-to-r ${L.accent}`}),ge.jsx("h1",{className:"text-4xl mb-2 bg-gradient-to-r from-white via-fuchsia-100 to-blue-100 bg-clip-text text-transparent font-bold",children:L.name}),ge.jsxs("p",{className:"text-white/70 text-base",children:[L.name,"需要上传 ",L.minPhotos,"-",L.maxPhotos," 张照片"]})]}),ge.jsxs("div",{onDragOver:W,onDragLeave:D,onDrop:C,style:{width:K?`${Pe}px`:"min(100%, clamp(380px, 48dvh, 520px))",maxWidth:K?"92vw":void 0,height:K?"clamp(380px, 48dvh, 520px)":"min(100%, clamp(380px, 48dvh, 520px))"},className:`relative border-4 border-dashed rounded-[56px] p-7 text-center transition-all duration-300 shadow-xl flex shrink-0 self-center ${T?"border-purple-500 bg-purple-100/80 scale-105 shadow-2xl shadow-purple-500/50":"border-gray-300 bg-white/80 backdrop-blur-sm hover:border-purple-400 hover:shadow-2xl"}`,children:[ge.jsx("input",{ref:b,type:"file",multiple:!0,accept:"image/*,.heic,.heif",onChange:H,className:"hidden"}),ge.jsx("div",{className:"flex flex-col items-center gap-4 w-full min-h-0",children:a.length===0?ge.jsxs("div",{className:"w-full min-h-0 flex flex-1 flex-col items-center",children:[ge.jsxs("div",{className:"flex-1 min-h-0 flex flex-col items-center justify-center gap-4",children:[ge.jsx("div",{className:"w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 flex items-center justify-center shadow-xl animate-bounce",children:ge.jsx(g0,{className:"text-white",size:40})}),ge.jsxs("div",{children:[ge.jsx("p",{className:"text-2xl mb-2 font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent",children:"拖拽照片到这里"}),ge.jsx("p",{className:"text-gray-500",children:"或者点击下方按钮选择文件"})]})]}),ge.jsxs("button",{onClick:()=>{var X;return(X=b.current)==null?void 0:X.click()},disabled:g,className:"group relative w-full px-10 py-4 rounded-[28px] text-white text-lg font-semibold shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/40 active:scale-[0.98] bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-[length:200%_100%] animate-[gradient-x_4s_ease_infinite]",children:[ge.jsx("span",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"}),ge.jsxs("span",{className:"relative flex items-center justify-center gap-2",children:[ge.jsx(Ap,{size:22}),g?`上传中 ${x.done}/${x.total}`:"选择照片"]})]})]}):ge.jsxs("div",{className:"w-full min-h-0 flex flex-1 flex-col animate-fade-in",children:[ge.jsxs("div",{className:"flex shrink-0 items-center justify-between mb-3 px-1",children:[ge.jsxs("p",{className:"text-base text-gray-700",children:["已上传 ",ge.jsx("span",{className:"text-purple-600 font-bold text-xl",children:a.length})," / ",L.maxPhotos," 张",g&&ge.jsxs("span",{className:"ml-2 text-xs text-blue-600",children:["上传中 ",x.done,"/",x.total]}),a.length<L.minPhotos&&ge.jsxs("span",{className:"ml-2 text-xs text-amber-600",children:["还需 ",L.minPhotos-a.length," 张"]})]}),ge.jsx("button",{onClick:ee,disabled:g,className:"text-sm text-red-500 hover:text-red-700 hover:scale-110 transition-all px-3 py-1 rounded-full hover:bg-red-50",children:"清空"})]}),ge.jsx("div",{className:"flex-1 min-h-0 mx-auto overflow-y-auto overscroll-contain p-5 bg-gradient-to-br from-gray-50 to-purple-50 rounded-[34px] border border-purple-100 shadow-inner",style:{width:"100%",boxSizing:"border-box"},children:ge.jsx("div",{className:"grid gap-3 justify-start",style:{gridTemplateColumns:`repeat(${se}, ${re}px)`,width:`${I}px`,maxWidth:"100%"},children:a.map((X,pe)=>ge.jsxs("div",{className:"group relative aspect-square rounded-[20px] overflow-hidden border-2 border-white shadow-md transition-all duration-300 hover:shadow-xl hover:z-10",children:[ge.jsx("img",{src:X,alt:`预览 ${pe+1}`,className:"w-full h-full object-cover"}),ge.jsx("button",{type:"button",onClick:()=>q(pe),disabled:g,"aria-label":`删除第 ${pe+1} 张照片`,className:"absolute top-1.5 right-1.5 w-7 h-7 rounded-full bg-black/70 text-white flex items-center justify-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity shadow-lg hover:bg-red-500 active:scale-95",children:ge.jsx(v0,{className:"w-4 h-4"})})]},pe))})}),ge.jsxs("div",{className:"shrink-0 pt-3 grid grid-cols-2 gap-3 w-full",children:[ge.jsxs("button",{onClick:()=>{var X;return(X=b.current)==null?void 0:X.click()},disabled:a.length>=L.maxPhotos||g,className:"group relative w-full px-6 py-4 rounded-[28px] text-white text-lg font-semibold shadow-lg overflow-hidden transition-all duration-300 enabled:hover:shadow-2xl enabled:hover:shadow-blue-500/40 enabled:active:scale-[0.98] bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-[length:200%_100%] animate-[gradient-x_4s_ease_infinite] disabled:opacity-50 disabled:cursor-not-allowed disabled:animate-none",children:[ge.jsx("span",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"}),ge.jsxs("span",{className:"relative flex items-center justify-center gap-2",children:[ge.jsx(Ap,{size:22}),g?`上传中 ${x.done}/${x.total}`:"继续上传"]})]}),ge.jsxs("button",{onClick:de,disabled:a.length<L.minPhotos||g,className:"group relative w-full px-6 py-4 rounded-[28px] text-white text-lg font-semibold shadow-lg overflow-hidden transition-all duration-300 enabled:hover:shadow-2xl enabled:hover:shadow-purple-500/40 enabled:active:scale-[0.98] bg-gradient-to-r from-purple-600 via-fuchsia-500 to-blue-600 bg-[length:200%_100%] animate-[gradient-x_4s_ease_infinite] disabled:opacity-50 disabled:cursor-not-allowed disabled:animate-none",children:[ge.jsx("span",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"}),ge.jsxs("span",{className:"relative flex items-center justify-center gap-2",children:[ge.jsx("span",{children:"✨"}),"开始生成"]})]})]})]})})]}),ge.jsxs("div",{className:"mt-auto pb-3 pt-5 text-center space-y-2 shrink-0",children:[ge.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-8 text-sm text-gray-600",children:[ge.jsxs("div",{className:"flex items-center gap-2",children:[ge.jsx("span",{className:"text-lg",children:"✨"}),ge.jsx("span",{children:"支持 JPG、PNG、HEIC 等格式"})]}),ge.jsxs("div",{className:"flex items-center gap-2",children:[ge.jsx("span",{className:"text-lg",children:"🎮"}),ge.jsx("span",{children:"生成后可自由旋转、缩放"})]})]}),ge.jsx("p",{className:"text-xs text-gray-400",children:"完美支持苹果 iPhone 相机拍摄的照片"})]})]}),U()]})}n0.createRoot(document.getElementById("root")).render(ge.jsx(KE,{}));
