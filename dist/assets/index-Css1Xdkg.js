(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(a){if(a.ep)return;a.ep=!0;const c=n(a);fetch(a.href,c)}})();var _u={exports:{}},No={},vu={exports:{}},mt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fp;function W_(){if(fp)return mt;fp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),y=Symbol.iterator;function x(I){return I===null||typeof I!="object"?null:(I=y&&I[y]||I["@@iterator"],typeof I=="function"?I:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,A={};function v(I,J,be){this.props=I,this.context=J,this.refs=A,this.updater=be||M}v.prototype.isReactComponent={},v.prototype.setState=function(I,J){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,J,"setState")},v.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function _(){}_.prototype=v.prototype;function F(I,J,be){this.props=I,this.context=J,this.refs=A,this.updater=be||M}var P=F.prototype=new _;P.constructor=F,T(P,v.prototype),P.isPureReactComponent=!0;var D=Array.isArray,Z=Object.prototype.hasOwnProperty,B={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function K(I,J,be){var q,W={},he=null,xe=null;if(J!=null)for(q in J.ref!==void 0&&(xe=J.ref),J.key!==void 0&&(he=""+J.key),J)Z.call(J,q)&&!O.hasOwnProperty(q)&&(W[q]=J[q]);var Ce=arguments.length-2;if(Ce===1)W.children=be;else if(1<Ce){for(var Re=Array(Ce),ze=0;ze<Ce;ze++)Re[ze]=arguments[ze+2];W.children=Re}if(I&&I.defaultProps)for(q in Ce=I.defaultProps,Ce)W[q]===void 0&&(W[q]=Ce[q]);return{$$typeof:s,type:I,key:he,ref:xe,props:W,_owner:B.current}}function L(I,J){return{$$typeof:s,type:I.type,key:J,ref:I.ref,props:I.props,_owner:I._owner}}function R(I){return typeof I=="object"&&I!==null&&I.$$typeof===s}function V(I){var J={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(be){return J[be]})}var ge=/\/+/g;function ee(I,J){return typeof I=="object"&&I!==null&&I.key!=null?V(""+I.key):J.toString(36)}function _e(I,J,be,q,W){var he=typeof I;(he==="undefined"||he==="boolean")&&(I=null);var xe=!1;if(I===null)xe=!0;else switch(he){case"string":case"number":xe=!0;break;case"object":switch(I.$$typeof){case s:case e:xe=!0}}if(xe)return xe=I,W=W(xe),I=q===""?"."+ee(xe,0):q,D(W)?(be="",I!=null&&(be=I.replace(ge,"$&/")+"/"),_e(W,J,be,"",function(ze){return ze})):W!=null&&(R(W)&&(W=L(W,be+(!W.key||xe&&xe.key===W.key?"":(""+W.key).replace(ge,"$&/")+"/")+I)),J.push(W)),1;if(xe=0,q=q===""?".":q+":",D(I))for(var Ce=0;Ce<I.length;Ce++){he=I[Ce];var Re=q+ee(he,Ce);xe+=_e(he,J,be,Re,W)}else if(Re=x(I),typeof Re=="function")for(I=Re.call(I),Ce=0;!(he=I.next()).done;)he=he.value,Re=q+ee(he,Ce++),xe+=_e(he,J,be,Re,W);else if(he==="object")throw J=String(I),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.");return xe}function ve(I,J,be){if(I==null)return I;var q=[],W=0;return _e(I,q,"","",function(he){return J.call(be,he,W++)}),q}function le(I){if(I._status===-1){var J=I._result;J=J(),J.then(function(be){(I._status===0||I._status===-1)&&(I._status=1,I._result=be)},function(be){(I._status===0||I._status===-1)&&(I._status=2,I._result=be)}),I._status===-1&&(I._status=0,I._result=J)}if(I._status===1)return I._result.default;throw I._result}var j={current:null},N={transition:null},te={ReactCurrentDispatcher:j,ReactCurrentBatchConfig:N,ReactCurrentOwner:B};function oe(){throw Error("act(...) is not supported in production builds of React.")}return mt.Children={map:ve,forEach:function(I,J,be){ve(I,function(){J.apply(this,arguments)},be)},count:function(I){var J=0;return ve(I,function(){J++}),J},toArray:function(I){return ve(I,function(J){return J})||[]},only:function(I){if(!R(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},mt.Component=v,mt.Fragment=n,mt.Profiler=a,mt.PureComponent=F,mt.StrictMode=r,mt.Suspense=h,mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=te,mt.act=oe,mt.cloneElement=function(I,J,be){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var q=T({},I.props),W=I.key,he=I.ref,xe=I._owner;if(J!=null){if(J.ref!==void 0&&(he=J.ref,xe=B.current),J.key!==void 0&&(W=""+J.key),I.type&&I.type.defaultProps)var Ce=I.type.defaultProps;for(Re in J)Z.call(J,Re)&&!O.hasOwnProperty(Re)&&(q[Re]=J[Re]===void 0&&Ce!==void 0?Ce[Re]:J[Re])}var Re=arguments.length-2;if(Re===1)q.children=be;else if(1<Re){Ce=Array(Re);for(var ze=0;ze<Re;ze++)Ce[ze]=arguments[ze+2];q.children=Ce}return{$$typeof:s,type:I.type,key:W,ref:he,props:q,_owner:xe}},mt.createContext=function(I){return I={$$typeof:f,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:c,_context:I},I.Consumer=I},mt.createElement=K,mt.createFactory=function(I){var J=K.bind(null,I);return J.type=I,J},mt.createRef=function(){return{current:null}},mt.forwardRef=function(I){return{$$typeof:d,render:I}},mt.isValidElement=R,mt.lazy=function(I){return{$$typeof:g,_payload:{_status:-1,_result:I},_init:le}},mt.memo=function(I,J){return{$$typeof:m,type:I,compare:J===void 0?null:J}},mt.startTransition=function(I){var J=N.transition;N.transition={};try{I()}finally{N.transition=J}},mt.unstable_act=oe,mt.useCallback=function(I,J){return j.current.useCallback(I,J)},mt.useContext=function(I){return j.current.useContext(I)},mt.useDebugValue=function(){},mt.useDeferredValue=function(I){return j.current.useDeferredValue(I)},mt.useEffect=function(I,J){return j.current.useEffect(I,J)},mt.useId=function(){return j.current.useId()},mt.useImperativeHandle=function(I,J,be){return j.current.useImperativeHandle(I,J,be)},mt.useInsertionEffect=function(I,J){return j.current.useInsertionEffect(I,J)},mt.useLayoutEffect=function(I,J){return j.current.useLayoutEffect(I,J)},mt.useMemo=function(I,J){return j.current.useMemo(I,J)},mt.useReducer=function(I,J,be){return j.current.useReducer(I,J,be)},mt.useRef=function(I){return j.current.useRef(I)},mt.useState=function(I){return j.current.useState(I)},mt.useSyncExternalStore=function(I,J,be){return j.current.useSyncExternalStore(I,J,be)},mt.useTransition=function(){return j.current.useTransition()},mt.version="18.3.1",mt}var hp;function bd(){return hp||(hp=1,vu.exports=W_()),vu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pp;function X_(){if(pp)return No;pp=1;var s=bd(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function f(d,h,m){var g,y={},x=null,M=null;m!==void 0&&(x=""+m),h.key!==void 0&&(x=""+h.key),h.ref!==void 0&&(M=h.ref);for(g in h)r.call(h,g)&&!c.hasOwnProperty(g)&&(y[g]=h[g]);if(d&&d.defaultProps)for(g in h=d.defaultProps,h)y[g]===void 0&&(y[g]=h[g]);return{$$typeof:e,type:d,key:x,ref:M,props:y,_owner:a.current}}return No.Fragment=n,No.jsx=f,No.jsxs=f,No}var mp;function j_(){return mp||(mp=1,_u.exports=X_()),_u.exports}var se=j_(),Qa={},xu={exports:{}},Ln={},yu={exports:{}},Su={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gp;function Y_(){return gp||(gp=1,(function(s){function e(N,te){var oe=N.length;N.push(te);e:for(;0<oe;){var I=oe-1>>>1,J=N[I];if(0<a(J,te))N[I]=te,N[oe]=J,oe=I;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var te=N[0],oe=N.pop();if(oe!==te){N[0]=oe;e:for(var I=0,J=N.length,be=J>>>1;I<be;){var q=2*(I+1)-1,W=N[q],he=q+1,xe=N[he];if(0>a(W,oe))he<J&&0>a(xe,W)?(N[I]=xe,N[he]=oe,I=he):(N[I]=W,N[q]=oe,I=q);else if(he<J&&0>a(xe,oe))N[I]=xe,N[he]=oe,I=he;else break e}}return te}function a(N,te){var oe=N.sortIndex-te.sortIndex;return oe!==0?oe:N.id-te.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();s.unstable_now=function(){return f.now()-d}}var h=[],m=[],g=1,y=null,x=3,M=!1,T=!1,A=!1,v=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(N){for(var te=n(m);te!==null;){if(te.callback===null)r(m);else if(te.startTime<=N)r(m),te.sortIndex=te.expirationTime,e(h,te);else break;te=n(m)}}function D(N){if(A=!1,P(N),!T)if(n(h)!==null)T=!0,le(Z);else{var te=n(m);te!==null&&j(D,te.startTime-N)}}function Z(N,te){T=!1,A&&(A=!1,_(K),K=-1),M=!0;var oe=x;try{for(P(te),y=n(h);y!==null&&(!(y.expirationTime>te)||N&&!V());){var I=y.callback;if(typeof I=="function"){y.callback=null,x=y.priorityLevel;var J=I(y.expirationTime<=te);te=s.unstable_now(),typeof J=="function"?y.callback=J:y===n(h)&&r(h),P(te)}else r(h);y=n(h)}if(y!==null)var be=!0;else{var q=n(m);q!==null&&j(D,q.startTime-te),be=!1}return be}finally{y=null,x=oe,M=!1}}var B=!1,O=null,K=-1,L=5,R=-1;function V(){return!(s.unstable_now()-R<L)}function ge(){if(O!==null){var N=s.unstable_now();R=N;var te=!0;try{te=O(!0,N)}finally{te?ee():(B=!1,O=null)}}else B=!1}var ee;if(typeof F=="function")ee=function(){F(ge)};else if(typeof MessageChannel<"u"){var _e=new MessageChannel,ve=_e.port2;_e.port1.onmessage=ge,ee=function(){ve.postMessage(null)}}else ee=function(){v(ge,0)};function le(N){O=N,B||(B=!0,ee())}function j(N,te){K=v(function(){N(s.unstable_now())},te)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(N){N.callback=null},s.unstable_continueExecution=function(){T||M||(T=!0,le(Z))},s.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<N?Math.floor(1e3/N):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return n(h)},s.unstable_next=function(N){switch(x){case 1:case 2:case 3:var te=3;break;default:te=x}var oe=x;x=te;try{return N()}finally{x=oe}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(N,te){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var oe=x;x=N;try{return te()}finally{x=oe}},s.unstable_scheduleCallback=function(N,te,oe){var I=s.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?I+oe:I):oe=I,N){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=oe+J,N={id:g++,callback:te,priorityLevel:N,startTime:oe,expirationTime:J,sortIndex:-1},oe>I?(N.sortIndex=oe,e(m,N),n(h)===null&&N===n(m)&&(A?(_(K),K=-1):A=!0,j(D,oe-I))):(N.sortIndex=J,e(h,N),T||M||(T=!0,le(Z))),N},s.unstable_shouldYield=V,s.unstable_wrapCallback=function(N){var te=x;return function(){var oe=x;x=te;try{return N.apply(this,arguments)}finally{x=oe}}}})(Su)),Su}var _p;function q_(){return _p||(_p=1,yu.exports=Y_()),yu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vp;function $_(){if(vp)return Ln;vp=1;var s=bd(),e=q_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function c(t,i){f(t,i),f(t+"Capture",i)}function f(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},y={};function x(t){return h.call(y,t)?!0:h.call(g,t)?!1:m.test(t)?y[t]=!0:(g[t]=!0,!1)}function M(t,i,o,l){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function T(t,i,o,l){if(i===null||typeof i>"u"||M(t,i,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function A(t,i,o,l,u,p,w){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=u,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=p,this.removeEmptyString=w}var v={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){v[t]=new A(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];v[i]=new A(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){v[t]=new A(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){v[t]=new A(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){v[t]=new A(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){v[t]=new A(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){v[t]=new A(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){v[t]=new A(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){v[t]=new A(t,5,!1,t.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function F(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(_,F);v[i]=new A(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(_,F);v[i]=new A(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(_,F);v[i]=new A(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){v[t]=new A(t,1,!1,t.toLowerCase(),null,!1,!1)}),v.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){v[t]=new A(t,1,!1,t.toLowerCase(),null,!0,!0)});function P(t,i,o,l){var u=v.hasOwnProperty(i)?v[i]:null;(u!==null?u.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,o,u,l)&&(o=null),l||u===null?x(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):u.mustUseProperty?t[u.propertyName]=o===null?u.type===3?!1:"":o:(i=u.attributeName,l=u.attributeNamespace,o===null?t.removeAttribute(i):(u=u.type,o=u===3||u===4&&o===!0?"":""+o,l?t.setAttributeNS(l,i,o):t.setAttribute(i,o))))}var D=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Z=Symbol.for("react.element"),B=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),K=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),V=Symbol.for("react.context"),ge=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),_e=Symbol.for("react.suspense_list"),ve=Symbol.for("react.memo"),le=Symbol.for("react.lazy"),j=Symbol.for("react.offscreen"),N=Symbol.iterator;function te(t){return t===null||typeof t!="object"?null:(t=N&&t[N]||t["@@iterator"],typeof t=="function"?t:null)}var oe=Object.assign,I;function J(t){if(I===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);I=i&&i[1]||""}return`
`+I+t}var be=!1;function q(t,i){if(!t||be)return"";be=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(de){var l=de}Reflect.construct(t,[],i)}else{try{i.call()}catch(de){l=de}t.call(i.prototype)}else{try{throw Error()}catch(de){l=de}t()}}catch(de){if(de&&l&&typeof de.stack=="string"){for(var u=de.stack.split(`
`),p=l.stack.split(`
`),w=u.length-1,U=p.length-1;1<=w&&0<=U&&u[w]!==p[U];)U--;for(;1<=w&&0<=U;w--,U--)if(u[w]!==p[U]){if(w!==1||U!==1)do if(w--,U--,0>U||u[w]!==p[U]){var H=`
`+u[w].replace(" at new "," at ");return t.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",t.displayName)),H}while(1<=w&&0<=U);break}}}finally{be=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?J(t):""}function W(t){switch(t.tag){case 5:return J(t.type);case 16:return J("Lazy");case 13:return J("Suspense");case 19:return J("SuspenseList");case 0:case 2:case 15:return t=q(t.type,!1),t;case 11:return t=q(t.type.render,!1),t;case 1:return t=q(t.type,!0),t;default:return""}}function he(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case O:return"Fragment";case B:return"Portal";case L:return"Profiler";case K:return"StrictMode";case ee:return"Suspense";case _e:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case V:return(t.displayName||"Context")+".Consumer";case R:return(t._context.displayName||"Context")+".Provider";case ge:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ve:return i=t.displayName||null,i!==null?i:he(t.type)||"Memo";case le:i=t._payload,t=t._init;try{return he(t(i))}catch{}}return null}function xe(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return he(i);case 8:return i===K?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ce(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Re(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function ze(t){var i=Re(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,p=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return u.call(this)},set:function(w){l=""+w,p.call(this,w)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(w){l=""+w},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function pt(t){t._valueTracker||(t._valueTracker=ze(t))}function k(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),l="";return t&&(l=Re(t)?t.checked?"true":"false":t.value),t=l,t!==o?(i.setValue(t),!0):!1}function vt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Qe(t,i){var o=i.checked;return oe({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function ct(t,i){var o=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;o=Ce(i.value!=null?i.value:o),t._wrapperState={initialChecked:l,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Be(t,i){i=i.checked,i!=null&&P(t,"checked",i,!1)}function gt(t,i){Be(t,i);var o=Ce(i.value),l=i.type;if(o!=null)l==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Je(t,i.type,o):i.hasOwnProperty("defaultValue")&&Je(t,i.type,Ce(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function et(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function Je(t,i,o){(i!=="number"||vt(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var C=Array.isArray;function S(t,i,o,l){if(t=t.options,i){i={};for(var u=0;u<o.length;u++)i["$"+o[u]]=!0;for(o=0;o<t.length;o++)u=i.hasOwnProperty("$"+t[o].value),t[o].selected!==u&&(t[o].selected=u),u&&l&&(t[o].defaultSelected=!0)}else{for(o=""+Ce(o),i=null,u=0;u<t.length;u++){if(t[u].value===o){t[u].selected=!0,l&&(t[u].defaultSelected=!0);return}i!==null||t[u].disabled||(i=t[u])}i!==null&&(i.selected=!0)}}function z(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return oe({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Y(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(C(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:Ce(o)}}function ue(t,i){var o=Ce(i.value),l=Ce(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),l!=null&&(t.defaultValue=""+l)}function pe(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function Me(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Se(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?Me(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Pe,Ve=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,l,u){MSApp.execUnsafeLocalFunction(function(){return t(i,o,l,u)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Pe=Pe||document.createElement("div"),Pe.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Pe.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function ye(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var De={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rt=["Webkit","ms","Moz","O"];Object.keys(De).forEach(function(t){rt.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),De[i]=De[t]})});function We(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||De.hasOwnProperty(t)&&De[t]?(""+i).trim():i+"px"}function Ue(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var l=o.indexOf("--")===0,u=We(o,i[o],l);o==="float"&&(o="cssFloat"),l?t.setProperty(o,u):t[o]=u}}var Ye=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ze(t,i){if(i){if(Ye[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function yt(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var E=null;function ie(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ae=null,me=null,we=null;function $e(t){if(t=vo(t)){if(typeof ae!="function")throw Error(n(280));var i=t.stateNode;i&&(i=ha(i),ae(t.stateNode,t.type,i))}}function ot(t){me?we?we.push(t):we=[t]:me=t}function It(){if(me){var t=me,i=we;if(we=me=null,$e(t),i)for(t=0;t<i.length;t++)$e(i[t])}}function Ht(t,i){return t(i)}function _t(){}var Ot=!1;function kt(t,i,o){if(Ot)return t(i,o);Ot=!0;try{return Ht(t,i,o)}finally{Ot=!1,(me!==null||we!==null)&&(_t(),It())}}function wn(t,i){var o=t.stateNode;if(o===null)return null;var l=ha(o);if(l===null)return null;o=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var Gt=!1;if(d)try{var gn={};Object.defineProperty(gn,"passive",{get:function(){Gt=!0}}),window.addEventListener("test",gn,gn),window.removeEventListener("test",gn,gn)}catch{Gt=!1}function xi(t,i,o,l,u,p,w,U,H){var de=Array.prototype.slice.call(arguments,3);try{i.apply(o,de)}catch(Te){this.onError(Te)}}var Jn=!1,yi=null,Mr=!1,Hi=null,qo={onError:function(t){Jn=!0,yi=t}};function $o(t,i,o,l,u,p,w,U,H){Jn=!1,yi=null,xi.apply(qo,arguments)}function zl(t,i,o,l,u,p,w,U,H){if($o.apply(this,arguments),Jn){if(Jn){var de=yi;Jn=!1,yi=null}else throw Error(n(198));Mr||(Mr=!0,Hi=de)}}function Si(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function Ko(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function b(t){if(Si(t)!==t)throw Error(n(188))}function X(t){var i=t.alternate;if(!i){if(i=Si(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,l=i;;){var u=o.return;if(u===null)break;var p=u.alternate;if(p===null){if(l=u.return,l!==null){o=l;continue}break}if(u.child===p.child){for(p=u.child;p;){if(p===o)return b(u),t;if(p===l)return b(u),i;p=p.sibling}throw Error(n(188))}if(o.return!==l.return)o=u,l=p;else{for(var w=!1,U=u.child;U;){if(U===o){w=!0,o=u,l=p;break}if(U===l){w=!0,l=u,o=p;break}U=U.sibling}if(!w){for(U=p.child;U;){if(U===o){w=!0,o=p,l=u;break}if(U===l){w=!0,l=p,o=u;break}U=U.sibling}if(!w)throw Error(n(189))}}if(o.alternate!==l)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function ce(t){return t=X(t),t!==null?fe(t):null}function fe(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=fe(t);if(i!==null)return i;t=t.sibling}return null}var $=e.unstable_scheduleCallback,Ne=e.unstable_cancelCallback,Oe=e.unstable_shouldYield,Xe=e.unstable_requestPaint,Ie=e.unstable_now,at=e.unstable_getCurrentPriorityLevel,st=e.unstable_ImmediatePriority,tt=e.unstable_UserBlockingPriority,xt=e.unstable_NormalPriority,Ut=e.unstable_LowPriority,Pt=e.unstable_IdlePriority,Jt=null,dt=null;function Ke(t){if(dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(Jt,t,void 0,(t.current.flags&128)===128)}catch{}}var wt=Math.clz32?Math.clz32:Vi,Mt=Math.log,Dn=Math.LN2;function Vi(t){return t>>>=0,t===0?32:31-(Mt(t)/Dn|0)|0}var en=64,Gi=4194304;function Rt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Nn(t,i){var o=t.pendingLanes;if(o===0)return 0;var l=0,u=t.suspendedLanes,p=t.pingedLanes,w=o&268435455;if(w!==0){var U=w&~u;U!==0?l=Rt(U):(p&=w,p!==0&&(l=Rt(p)))}else w=o&~u,w!==0?l=Rt(w):p!==0&&(l=Rt(p));if(l===0)return 0;if(i!==0&&i!==l&&(i&u)===0&&(u=l&-l,p=i&-i,u>=p||u===16&&(p&4194240)!==0))return i;if((l&4)!==0&&(l|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)o=31-wt(i),u=1<<o,l|=t[o],i&=~u;return l}function Js(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tn(t,i){for(var o=t.suspendedLanes,l=t.pingedLanes,u=t.expirationTimes,p=t.pendingLanes;0<p;){var w=31-wt(p),U=1<<w,H=u[w];H===-1?((U&o)===0||(U&l)!==0)&&(u[w]=Js(U,i)):H<=i&&(t.expiredLanes|=U),p&=~U}}function Er(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Zo(){var t=en;return en<<=1,(en&4194240)===0&&(en=64),t}function Jr(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function eo(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-wt(i),t[i]=o}function dg(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<o;){var u=31-wt(o),p=1<<u;i[u]=0,l[u]=-1,t[u]=-1,o&=~p}}function Bl(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var l=31-wt(o),u=1<<l;u&i|t[l]&i&&(t[l]|=i),o&=~u}}var Tt=0;function Gd(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Wd,Hl,Xd,jd,Yd,Vl=!1,Qo=[],Wi=null,Xi=null,ji=null,to=new Map,no=new Map,Yi=[],fg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qd(t,i){switch(t){case"focusin":case"focusout":Wi=null;break;case"dragenter":case"dragleave":Xi=null;break;case"mouseover":case"mouseout":ji=null;break;case"pointerover":case"pointerout":to.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":no.delete(i.pointerId)}}function io(t,i,o,l,u,p){return t===null||t.nativeEvent!==p?(t={blockedOn:i,domEventName:o,eventSystemFlags:l,nativeEvent:p,targetContainers:[u]},i!==null&&(i=vo(i),i!==null&&Hl(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),t)}function hg(t,i,o,l,u){switch(i){case"focusin":return Wi=io(Wi,t,i,o,l,u),!0;case"dragenter":return Xi=io(Xi,t,i,o,l,u),!0;case"mouseover":return ji=io(ji,t,i,o,l,u),!0;case"pointerover":var p=u.pointerId;return to.set(p,io(to.get(p)||null,t,i,o,l,u)),!0;case"gotpointercapture":return p=u.pointerId,no.set(p,io(no.get(p)||null,t,i,o,l,u)),!0}return!1}function $d(t){var i=wr(t.target);if(i!==null){var o=Si(i);if(o!==null){if(i=o.tag,i===13){if(i=Ko(o),i!==null){t.blockedOn=i,Yd(t.priority,function(){Xd(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Jo(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=Wl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var l=new o.constructor(o.type,o);E=l,o.target.dispatchEvent(l),E=null}else return i=vo(o),i!==null&&Hl(i),t.blockedOn=o,!1;i.shift()}return!0}function Kd(t,i,o){Jo(t)&&o.delete(i)}function pg(){Vl=!1,Wi!==null&&Jo(Wi)&&(Wi=null),Xi!==null&&Jo(Xi)&&(Xi=null),ji!==null&&Jo(ji)&&(ji=null),to.forEach(Kd),no.forEach(Kd)}function ro(t,i){t.blockedOn===i&&(t.blockedOn=null,Vl||(Vl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,pg)))}function so(t){function i(u){return ro(u,t)}if(0<Qo.length){ro(Qo[0],t);for(var o=1;o<Qo.length;o++){var l=Qo[o];l.blockedOn===t&&(l.blockedOn=null)}}for(Wi!==null&&ro(Wi,t),Xi!==null&&ro(Xi,t),ji!==null&&ro(ji,t),to.forEach(i),no.forEach(i),o=0;o<Yi.length;o++)l=Yi[o],l.blockedOn===t&&(l.blockedOn=null);for(;0<Yi.length&&(o=Yi[0],o.blockedOn===null);)$d(o),o.blockedOn===null&&Yi.shift()}var es=D.ReactCurrentBatchConfig,ea=!0;function mg(t,i,o,l){var u=Tt,p=es.transition;es.transition=null;try{Tt=1,Gl(t,i,o,l)}finally{Tt=u,es.transition=p}}function gg(t,i,o,l){var u=Tt,p=es.transition;es.transition=null;try{Tt=4,Gl(t,i,o,l)}finally{Tt=u,es.transition=p}}function Gl(t,i,o,l){if(ea){var u=Wl(t,i,o,l);if(u===null)ac(t,i,l,ta,o),qd(t,l);else if(hg(u,t,i,o,l))l.stopPropagation();else if(qd(t,l),i&4&&-1<fg.indexOf(t)){for(;u!==null;){var p=vo(u);if(p!==null&&Wd(p),p=Wl(t,i,o,l),p===null&&ac(t,i,l,ta,o),p===u)break;u=p}u!==null&&l.stopPropagation()}else ac(t,i,l,null,o)}}var ta=null;function Wl(t,i,o,l){if(ta=null,t=ie(l),t=wr(t),t!==null)if(i=Si(t),i===null)t=null;else if(o=i.tag,o===13){if(t=Ko(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return ta=t,null}function Zd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(at()){case st:return 1;case tt:return 4;case xt:case Ut:return 16;case Pt:return 536870912;default:return 16}default:return 16}}var qi=null,Xl=null,na=null;function Qd(){if(na)return na;var t,i=Xl,o=i.length,l,u="value"in qi?qi.value:qi.textContent,p=u.length;for(t=0;t<o&&i[t]===u[t];t++);var w=o-t;for(l=1;l<=w&&i[o-l]===u[p-l];l++);return na=u.slice(t,1<l?1-l:void 0)}function ia(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ra(){return!0}function Jd(){return!1}function In(t){function i(o,l,u,p,w){this._reactName=o,this._targetInst=u,this.type=l,this.nativeEvent=p,this.target=w,this.currentTarget=null;for(var U in t)t.hasOwnProperty(U)&&(o=t[U],this[U]=o?o(p):p[U]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?ra:Jd,this.isPropagationStopped=Jd,this}return oe(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ra)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ra)},persist:function(){},isPersistent:ra}),i}var ts={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jl=In(ts),oo=oe({},ts,{view:0,detail:0}),_g=In(oo),Yl,ql,ao,sa=oe({},oo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ao&&(ao&&t.type==="mousemove"?(Yl=t.screenX-ao.screenX,ql=t.screenY-ao.screenY):ql=Yl=0,ao=t),Yl)},movementY:function(t){return"movementY"in t?t.movementY:ql}}),ef=In(sa),vg=oe({},sa,{dataTransfer:0}),xg=In(vg),yg=oe({},oo,{relatedTarget:0}),$l=In(yg),Sg=oe({},ts,{animationName:0,elapsedTime:0,pseudoElement:0}),Mg=In(Sg),Eg=oe({},ts,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),wg=In(Eg),Tg=oe({},ts,{data:0}),tf=In(Tg),Ag={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Rg[t])?!!i[t]:!1}function Kl(){return bg}var Pg=oe({},oo,{key:function(t){if(t.key){var i=Ag[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=ia(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Cg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kl,charCode:function(t){return t.type==="keypress"?ia(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ia(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Lg=In(Pg),Dg=oe({},sa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nf=In(Dg),Ng=oe({},oo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kl}),Ig=In(Ng),Ug=oe({},ts,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fg=In(Ug),Og=oe({},sa,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),kg=In(Og),zg=[9,13,27,32],Zl=d&&"CompositionEvent"in window,lo=null;d&&"documentMode"in document&&(lo=document.documentMode);var Bg=d&&"TextEvent"in window&&!lo,rf=d&&(!Zl||lo&&8<lo&&11>=lo),sf=" ",of=!1;function af(t,i){switch(t){case"keyup":return zg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ns=!1;function Hg(t,i){switch(t){case"compositionend":return lf(i);case"keypress":return i.which!==32?null:(of=!0,sf);case"textInput":return t=i.data,t===sf&&of?null:t;default:return null}}function Vg(t,i){if(ns)return t==="compositionend"||!Zl&&af(t,i)?(t=Qd(),na=Xl=qi=null,ns=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return rf&&i.locale!=="ko"?null:i.data;default:return null}}var Gg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Gg[t.type]:i==="textarea"}function uf(t,i,o,l){ot(l),i=ua(i,"onChange"),0<i.length&&(o=new jl("onChange","change",null,o,l),t.push({event:o,listeners:i}))}var co=null,uo=null;function Wg(t){Rf(t,0)}function oa(t){var i=as(t);if(k(i))return t}function Xg(t,i){if(t==="change")return i}var df=!1;if(d){var Ql;if(d){var Jl="oninput"in document;if(!Jl){var ff=document.createElement("div");ff.setAttribute("oninput","return;"),Jl=typeof ff.oninput=="function"}Ql=Jl}else Ql=!1;df=Ql&&(!document.documentMode||9<document.documentMode)}function hf(){co&&(co.detachEvent("onpropertychange",pf),uo=co=null)}function pf(t){if(t.propertyName==="value"&&oa(uo)){var i=[];uf(i,uo,t,ie(t)),kt(Wg,i)}}function jg(t,i,o){t==="focusin"?(hf(),co=i,uo=o,co.attachEvent("onpropertychange",pf)):t==="focusout"&&hf()}function Yg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return oa(uo)}function qg(t,i){if(t==="click")return oa(i)}function $g(t,i){if(t==="input"||t==="change")return oa(i)}function Kg(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ei=typeof Object.is=="function"?Object.is:Kg;function fo(t,i){if(ei(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),l=Object.keys(i);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var u=o[l];if(!h.call(i,u)||!ei(t[u],i[u]))return!1}return!0}function mf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function gf(t,i){var o=mf(t);t=0;for(var l;o;){if(o.nodeType===3){if(l=t+o.textContent.length,t<=i&&l>=i)return{node:o,offset:i-t};t=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=mf(o)}}function _f(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?_f(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function vf(){for(var t=window,i=vt();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=vt(t.document)}return i}function ec(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function Zg(t){var i=vf(),o=t.focusedElem,l=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&_f(o.ownerDocument.documentElement,o)){if(l!==null&&ec(o)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var u=o.textContent.length,p=Math.min(l.start,u);l=l.end===void 0?p:Math.min(l.end,u),!t.extend&&p>l&&(u=l,l=p,p=u),u=gf(o,p);var w=gf(o,l);u&&w&&(t.rangeCount!==1||t.anchorNode!==u.node||t.anchorOffset!==u.offset||t.focusNode!==w.node||t.focusOffset!==w.offset)&&(i=i.createRange(),i.setStart(u.node,u.offset),t.removeAllRanges(),p>l?(t.addRange(i),t.extend(w.node,w.offset)):(i.setEnd(w.node,w.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Qg=d&&"documentMode"in document&&11>=document.documentMode,is=null,tc=null,ho=null,nc=!1;function xf(t,i,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;nc||is==null||is!==vt(l)||(l=is,"selectionStart"in l&&ec(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ho&&fo(ho,l)||(ho=l,l=ua(tc,"onSelect"),0<l.length&&(i=new jl("onSelect","select",null,i,o),t.push({event:i,listeners:l}),i.target=is)))}function aa(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var rs={animationend:aa("Animation","AnimationEnd"),animationiteration:aa("Animation","AnimationIteration"),animationstart:aa("Animation","AnimationStart"),transitionend:aa("Transition","TransitionEnd")},ic={},yf={};d&&(yf=document.createElement("div").style,"AnimationEvent"in window||(delete rs.animationend.animation,delete rs.animationiteration.animation,delete rs.animationstart.animation),"TransitionEvent"in window||delete rs.transitionend.transition);function la(t){if(ic[t])return ic[t];if(!rs[t])return t;var i=rs[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in yf)return ic[t]=i[o];return t}var Sf=la("animationend"),Mf=la("animationiteration"),Ef=la("animationstart"),wf=la("transitionend"),Tf=new Map,Af="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $i(t,i){Tf.set(t,i),c(i,[t])}for(var rc=0;rc<Af.length;rc++){var sc=Af[rc],Jg=sc.toLowerCase(),e_=sc[0].toUpperCase()+sc.slice(1);$i(Jg,"on"+e_)}$i(Sf,"onAnimationEnd"),$i(Mf,"onAnimationIteration"),$i(Ef,"onAnimationStart"),$i("dblclick","onDoubleClick"),$i("focusin","onFocus"),$i("focusout","onBlur"),$i(wf,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),t_=new Set("cancel close invalid load scroll toggle".split(" ").concat(po));function Cf(t,i,o){var l=t.type||"unknown-event";t.currentTarget=o,zl(l,i,void 0,t),t.currentTarget=null}function Rf(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var l=t[o],u=l.event;l=l.listeners;e:{var p=void 0;if(i)for(var w=l.length-1;0<=w;w--){var U=l[w],H=U.instance,de=U.currentTarget;if(U=U.listener,H!==p&&u.isPropagationStopped())break e;Cf(u,U,de),p=H}else for(w=0;w<l.length;w++){if(U=l[w],H=U.instance,de=U.currentTarget,U=U.listener,H!==p&&u.isPropagationStopped())break e;Cf(u,U,de),p=H}}}if(Mr)throw t=Hi,Mr=!1,Hi=null,t}function Lt(t,i){var o=i[hc];o===void 0&&(o=i[hc]=new Set);var l=t+"__bubble";o.has(l)||(bf(i,t,2,!1),o.add(l))}function oc(t,i,o){var l=0;i&&(l|=4),bf(o,t,l,i)}var ca="_reactListening"+Math.random().toString(36).slice(2);function mo(t){if(!t[ca]){t[ca]=!0,r.forEach(function(o){o!=="selectionchange"&&(t_.has(o)||oc(o,!1,t),oc(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[ca]||(i[ca]=!0,oc("selectionchange",!1,i))}}function bf(t,i,o,l){switch(Zd(i)){case 1:var u=mg;break;case 4:u=gg;break;default:u=Gl}o=u.bind(null,i,o,t),u=void 0,!Gt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),l?u!==void 0?t.addEventListener(i,o,{capture:!0,passive:u}):t.addEventListener(i,o,!0):u!==void 0?t.addEventListener(i,o,{passive:u}):t.addEventListener(i,o,!1)}function ac(t,i,o,l,u){var p=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var w=l.tag;if(w===3||w===4){var U=l.stateNode.containerInfo;if(U===u||U.nodeType===8&&U.parentNode===u)break;if(w===4)for(w=l.return;w!==null;){var H=w.tag;if((H===3||H===4)&&(H=w.stateNode.containerInfo,H===u||H.nodeType===8&&H.parentNode===u))return;w=w.return}for(;U!==null;){if(w=wr(U),w===null)return;if(H=w.tag,H===5||H===6){l=p=w;continue e}U=U.parentNode}}l=l.return}kt(function(){var de=p,Te=ie(o),Ae=[];e:{var Ee=Tf.get(t);if(Ee!==void 0){var ke=jl,Ge=t;switch(t){case"keypress":if(ia(o)===0)break e;case"keydown":case"keyup":ke=Lg;break;case"focusin":Ge="focus",ke=$l;break;case"focusout":Ge="blur",ke=$l;break;case"beforeblur":case"afterblur":ke=$l;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ke=ef;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ke=xg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ke=Ig;break;case Sf:case Mf:case Ef:ke=Mg;break;case wf:ke=Fg;break;case"scroll":ke=_g;break;case"wheel":ke=kg;break;case"copy":case"cut":case"paste":ke=wg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ke=nf}var je=(i&4)!==0,Wt=!je&&t==="scroll",Q=je?Ee!==null?Ee+"Capture":null:Ee;je=[];for(var G=de,re;G!==null;){re=G;var Le=re.stateNode;if(re.tag===5&&Le!==null&&(re=Le,Q!==null&&(Le=wn(G,Q),Le!=null&&je.push(go(G,Le,re)))),Wt)break;G=G.return}0<je.length&&(Ee=new ke(Ee,Ge,null,o,Te),Ae.push({event:Ee,listeners:je}))}}if((i&7)===0){e:{if(Ee=t==="mouseover"||t==="pointerover",ke=t==="mouseout"||t==="pointerout",Ee&&o!==E&&(Ge=o.relatedTarget||o.fromElement)&&(wr(Ge)||Ge[Mi]))break e;if((ke||Ee)&&(Ee=Te.window===Te?Te:(Ee=Te.ownerDocument)?Ee.defaultView||Ee.parentWindow:window,ke?(Ge=o.relatedTarget||o.toElement,ke=de,Ge=Ge?wr(Ge):null,Ge!==null&&(Wt=Si(Ge),Ge!==Wt||Ge.tag!==5&&Ge.tag!==6)&&(Ge=null)):(ke=null,Ge=de),ke!==Ge)){if(je=ef,Le="onMouseLeave",Q="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&(je=nf,Le="onPointerLeave",Q="onPointerEnter",G="pointer"),Wt=ke==null?Ee:as(ke),re=Ge==null?Ee:as(Ge),Ee=new je(Le,G+"leave",ke,o,Te),Ee.target=Wt,Ee.relatedTarget=re,Le=null,wr(Te)===de&&(je=new je(Q,G+"enter",Ge,o,Te),je.target=re,je.relatedTarget=Wt,Le=je),Wt=Le,ke&&Ge)t:{for(je=ke,Q=Ge,G=0,re=je;re;re=ss(re))G++;for(re=0,Le=Q;Le;Le=ss(Le))re++;for(;0<G-re;)je=ss(je),G--;for(;0<re-G;)Q=ss(Q),re--;for(;G--;){if(je===Q||Q!==null&&je===Q.alternate)break t;je=ss(je),Q=ss(Q)}je=null}else je=null;ke!==null&&Pf(Ae,Ee,ke,je,!1),Ge!==null&&Wt!==null&&Pf(Ae,Wt,Ge,je,!0)}}e:{if(Ee=de?as(de):window,ke=Ee.nodeName&&Ee.nodeName.toLowerCase(),ke==="select"||ke==="input"&&Ee.type==="file")var qe=Xg;else if(cf(Ee))if(df)qe=$g;else{qe=Yg;var nt=jg}else(ke=Ee.nodeName)&&ke.toLowerCase()==="input"&&(Ee.type==="checkbox"||Ee.type==="radio")&&(qe=qg);if(qe&&(qe=qe(t,de))){uf(Ae,qe,o,Te);break e}nt&&nt(t,Ee,de),t==="focusout"&&(nt=Ee._wrapperState)&&nt.controlled&&Ee.type==="number"&&Je(Ee,"number",Ee.value)}switch(nt=de?as(de):window,t){case"focusin":(cf(nt)||nt.contentEditable==="true")&&(is=nt,tc=de,ho=null);break;case"focusout":ho=tc=is=null;break;case"mousedown":nc=!0;break;case"contextmenu":case"mouseup":case"dragend":nc=!1,xf(Ae,o,Te);break;case"selectionchange":if(Qg)break;case"keydown":case"keyup":xf(Ae,o,Te)}var it;if(Zl)e:{switch(t){case"compositionstart":var lt="onCompositionStart";break e;case"compositionend":lt="onCompositionEnd";break e;case"compositionupdate":lt="onCompositionUpdate";break e}lt=void 0}else ns?af(t,o)&&(lt="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(lt="onCompositionStart");lt&&(rf&&o.locale!=="ko"&&(ns||lt!=="onCompositionStart"?lt==="onCompositionEnd"&&ns&&(it=Qd()):(qi=Te,Xl="value"in qi?qi.value:qi.textContent,ns=!0)),nt=ua(de,lt),0<nt.length&&(lt=new tf(lt,t,null,o,Te),Ae.push({event:lt,listeners:nt}),it?lt.data=it:(it=lf(o),it!==null&&(lt.data=it)))),(it=Bg?Hg(t,o):Vg(t,o))&&(de=ua(de,"onBeforeInput"),0<de.length&&(Te=new tf("onBeforeInput","beforeinput",null,o,Te),Ae.push({event:Te,listeners:de}),Te.data=it))}Rf(Ae,i)})}function go(t,i,o){return{instance:t,listener:i,currentTarget:o}}function ua(t,i){for(var o=i+"Capture",l=[];t!==null;){var u=t,p=u.stateNode;u.tag===5&&p!==null&&(u=p,p=wn(t,o),p!=null&&l.unshift(go(t,p,u)),p=wn(t,i),p!=null&&l.push(go(t,p,u))),t=t.return}return l}function ss(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Pf(t,i,o,l,u){for(var p=i._reactName,w=[];o!==null&&o!==l;){var U=o,H=U.alternate,de=U.stateNode;if(H!==null&&H===l)break;U.tag===5&&de!==null&&(U=de,u?(H=wn(o,p),H!=null&&w.unshift(go(o,H,U))):u||(H=wn(o,p),H!=null&&w.push(go(o,H,U)))),o=o.return}w.length!==0&&t.push({event:i,listeners:w})}var n_=/\r\n?/g,i_=/\u0000|\uFFFD/g;function Lf(t){return(typeof t=="string"?t:""+t).replace(n_,`
`).replace(i_,"")}function da(t,i,o){if(i=Lf(i),Lf(t)!==i&&o)throw Error(n(425))}function fa(){}var lc=null,cc=null;function uc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var dc=typeof setTimeout=="function"?setTimeout:void 0,r_=typeof clearTimeout=="function"?clearTimeout:void 0,Df=typeof Promise=="function"?Promise:void 0,s_=typeof queueMicrotask=="function"?queueMicrotask:typeof Df<"u"?function(t){return Df.resolve(null).then(t).catch(o_)}:dc;function o_(t){setTimeout(function(){throw t})}function fc(t,i){var o=i,l=0;do{var u=o.nextSibling;if(t.removeChild(o),u&&u.nodeType===8)if(o=u.data,o==="/$"){if(l===0){t.removeChild(u),so(i);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=u}while(o);so(i)}function Ki(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Nf(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var os=Math.random().toString(36).slice(2),ui="__reactFiber$"+os,_o="__reactProps$"+os,Mi="__reactContainer$"+os,hc="__reactEvents$"+os,a_="__reactListeners$"+os,l_="__reactHandles$"+os;function wr(t){var i=t[ui];if(i)return i;for(var o=t.parentNode;o;){if(i=o[Mi]||o[ui]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=Nf(t);t!==null;){if(o=t[ui])return o;t=Nf(t)}return i}t=o,o=t.parentNode}return null}function vo(t){return t=t[ui]||t[Mi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function as(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function ha(t){return t[_o]||null}var pc=[],ls=-1;function Zi(t){return{current:t}}function Dt(t){0>ls||(t.current=pc[ls],pc[ls]=null,ls--)}function bt(t,i){ls++,pc[ls]=t.current,t.current=i}var Qi={},cn=Zi(Qi),An=Zi(!1),Tr=Qi;function cs(t,i){var o=t.type.contextTypes;if(!o)return Qi;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var u={},p;for(p in o)u[p]=i[p];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=u),u}function Cn(t){return t=t.childContextTypes,t!=null}function pa(){Dt(An),Dt(cn)}function If(t,i,o){if(cn.current!==Qi)throw Error(n(168));bt(cn,i),bt(An,o)}function Uf(t,i,o){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var u in l)if(!(u in i))throw Error(n(108,xe(t)||"Unknown",u));return oe({},o,l)}function ma(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Qi,Tr=cn.current,bt(cn,t),bt(An,An.current),!0}function Ff(t,i,o){var l=t.stateNode;if(!l)throw Error(n(169));o?(t=Uf(t,i,Tr),l.__reactInternalMemoizedMergedChildContext=t,Dt(An),Dt(cn),bt(cn,t)):Dt(An),bt(An,o)}var Ei=null,ga=!1,mc=!1;function Of(t){Ei===null?Ei=[t]:Ei.push(t)}function c_(t){ga=!0,Of(t)}function Ji(){if(!mc&&Ei!==null){mc=!0;var t=0,i=Tt;try{var o=Ei;for(Tt=1;t<o.length;t++){var l=o[t];do l=l(!0);while(l!==null)}Ei=null,ga=!1}catch(u){throw Ei!==null&&(Ei=Ei.slice(t+1)),$(st,Ji),u}finally{Tt=i,mc=!1}}return null}var us=[],ds=0,_a=null,va=0,Vn=[],Gn=0,Ar=null,wi=1,Ti="";function Cr(t,i){us[ds++]=va,us[ds++]=_a,_a=t,va=i}function kf(t,i,o){Vn[Gn++]=wi,Vn[Gn++]=Ti,Vn[Gn++]=Ar,Ar=t;var l=wi;t=Ti;var u=32-wt(l)-1;l&=~(1<<u),o+=1;var p=32-wt(i)+u;if(30<p){var w=u-u%5;p=(l&(1<<w)-1).toString(32),l>>=w,u-=w,wi=1<<32-wt(i)+u|o<<u|l,Ti=p+t}else wi=1<<p|o<<u|l,Ti=t}function gc(t){t.return!==null&&(Cr(t,1),kf(t,1,0))}function _c(t){for(;t===_a;)_a=us[--ds],us[ds]=null,va=us[--ds],us[ds]=null;for(;t===Ar;)Ar=Vn[--Gn],Vn[Gn]=null,Ti=Vn[--Gn],Vn[Gn]=null,wi=Vn[--Gn],Vn[Gn]=null}var Un=null,Fn=null,Ft=!1,ti=null;function zf(t,i){var o=Yn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function Bf(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Un=t,Fn=Ki(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Un=t,Fn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Ar!==null?{id:wi,overflow:Ti}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Yn(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,Un=t,Fn=null,!0):!1;default:return!1}}function vc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function xc(t){if(Ft){var i=Fn;if(i){var o=i;if(!Bf(t,i)){if(vc(t))throw Error(n(418));i=Ki(o.nextSibling);var l=Un;i&&Bf(t,i)?zf(l,o):(t.flags=t.flags&-4097|2,Ft=!1,Un=t)}}else{if(vc(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ft=!1,Un=t}}}function Hf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Un=t}function xa(t){if(t!==Un)return!1;if(!Ft)return Hf(t),Ft=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!uc(t.type,t.memoizedProps)),i&&(i=Fn)){if(vc(t))throw Vf(),Error(n(418));for(;i;)zf(t,i),i=Ki(i.nextSibling)}if(Hf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){Fn=Ki(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}Fn=null}}else Fn=Un?Ki(t.stateNode.nextSibling):null;return!0}function Vf(){for(var t=Fn;t;)t=Ki(t.nextSibling)}function fs(){Fn=Un=null,Ft=!1}function yc(t){ti===null?ti=[t]:ti.push(t)}var u_=D.ReactCurrentBatchConfig;function xo(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var l=o.stateNode}if(!l)throw Error(n(147,t));var u=l,p=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(w){var U=u.refs;w===null?delete U[p]:U[p]=w},i._stringRef=p,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function ya(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Gf(t){var i=t._init;return i(t._payload)}function Wf(t){function i(Q,G){if(t){var re=Q.deletions;re===null?(Q.deletions=[G],Q.flags|=16):re.push(G)}}function o(Q,G){if(!t)return null;for(;G!==null;)i(Q,G),G=G.sibling;return null}function l(Q,G){for(Q=new Map;G!==null;)G.key!==null?Q.set(G.key,G):Q.set(G.index,G),G=G.sibling;return Q}function u(Q,G){return Q=ar(Q,G),Q.index=0,Q.sibling=null,Q}function p(Q,G,re){return Q.index=re,t?(re=Q.alternate,re!==null?(re=re.index,re<G?(Q.flags|=2,G):re):(Q.flags|=2,G)):(Q.flags|=1048576,G)}function w(Q){return t&&Q.alternate===null&&(Q.flags|=2),Q}function U(Q,G,re,Le){return G===null||G.tag!==6?(G=du(re,Q.mode,Le),G.return=Q,G):(G=u(G,re),G.return=Q,G)}function H(Q,G,re,Le){var qe=re.type;return qe===O?Te(Q,G,re.props.children,Le,re.key):G!==null&&(G.elementType===qe||typeof qe=="object"&&qe!==null&&qe.$$typeof===le&&Gf(qe)===G.type)?(Le=u(G,re.props),Le.ref=xo(Q,G,re),Le.return=Q,Le):(Le=Wa(re.type,re.key,re.props,null,Q.mode,Le),Le.ref=xo(Q,G,re),Le.return=Q,Le)}function de(Q,G,re,Le){return G===null||G.tag!==4||G.stateNode.containerInfo!==re.containerInfo||G.stateNode.implementation!==re.implementation?(G=fu(re,Q.mode,Le),G.return=Q,G):(G=u(G,re.children||[]),G.return=Q,G)}function Te(Q,G,re,Le,qe){return G===null||G.tag!==7?(G=Ur(re,Q.mode,Le,qe),G.return=Q,G):(G=u(G,re),G.return=Q,G)}function Ae(Q,G,re){if(typeof G=="string"&&G!==""||typeof G=="number")return G=du(""+G,Q.mode,re),G.return=Q,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case Z:return re=Wa(G.type,G.key,G.props,null,Q.mode,re),re.ref=xo(Q,null,G),re.return=Q,re;case B:return G=fu(G,Q.mode,re),G.return=Q,G;case le:var Le=G._init;return Ae(Q,Le(G._payload),re)}if(C(G)||te(G))return G=Ur(G,Q.mode,re,null),G.return=Q,G;ya(Q,G)}return null}function Ee(Q,G,re,Le){var qe=G!==null?G.key:null;if(typeof re=="string"&&re!==""||typeof re=="number")return qe!==null?null:U(Q,G,""+re,Le);if(typeof re=="object"&&re!==null){switch(re.$$typeof){case Z:return re.key===qe?H(Q,G,re,Le):null;case B:return re.key===qe?de(Q,G,re,Le):null;case le:return qe=re._init,Ee(Q,G,qe(re._payload),Le)}if(C(re)||te(re))return qe!==null?null:Te(Q,G,re,Le,null);ya(Q,re)}return null}function ke(Q,G,re,Le,qe){if(typeof Le=="string"&&Le!==""||typeof Le=="number")return Q=Q.get(re)||null,U(G,Q,""+Le,qe);if(typeof Le=="object"&&Le!==null){switch(Le.$$typeof){case Z:return Q=Q.get(Le.key===null?re:Le.key)||null,H(G,Q,Le,qe);case B:return Q=Q.get(Le.key===null?re:Le.key)||null,de(G,Q,Le,qe);case le:var nt=Le._init;return ke(Q,G,re,nt(Le._payload),qe)}if(C(Le)||te(Le))return Q=Q.get(re)||null,Te(G,Q,Le,qe,null);ya(G,Le)}return null}function Ge(Q,G,re,Le){for(var qe=null,nt=null,it=G,lt=G=0,rn=null;it!==null&&lt<re.length;lt++){it.index>lt?(rn=it,it=null):rn=it.sibling;var Et=Ee(Q,it,re[lt],Le);if(Et===null){it===null&&(it=rn);break}t&&it&&Et.alternate===null&&i(Q,it),G=p(Et,G,lt),nt===null?qe=Et:nt.sibling=Et,nt=Et,it=rn}if(lt===re.length)return o(Q,it),Ft&&Cr(Q,lt),qe;if(it===null){for(;lt<re.length;lt++)it=Ae(Q,re[lt],Le),it!==null&&(G=p(it,G,lt),nt===null?qe=it:nt.sibling=it,nt=it);return Ft&&Cr(Q,lt),qe}for(it=l(Q,it);lt<re.length;lt++)rn=ke(it,Q,lt,re[lt],Le),rn!==null&&(t&&rn.alternate!==null&&it.delete(rn.key===null?lt:rn.key),G=p(rn,G,lt),nt===null?qe=rn:nt.sibling=rn,nt=rn);return t&&it.forEach(function(lr){return i(Q,lr)}),Ft&&Cr(Q,lt),qe}function je(Q,G,re,Le){var qe=te(re);if(typeof qe!="function")throw Error(n(150));if(re=qe.call(re),re==null)throw Error(n(151));for(var nt=qe=null,it=G,lt=G=0,rn=null,Et=re.next();it!==null&&!Et.done;lt++,Et=re.next()){it.index>lt?(rn=it,it=null):rn=it.sibling;var lr=Ee(Q,it,Et.value,Le);if(lr===null){it===null&&(it=rn);break}t&&it&&lr.alternate===null&&i(Q,it),G=p(lr,G,lt),nt===null?qe=lr:nt.sibling=lr,nt=lr,it=rn}if(Et.done)return o(Q,it),Ft&&Cr(Q,lt),qe;if(it===null){for(;!Et.done;lt++,Et=re.next())Et=Ae(Q,Et.value,Le),Et!==null&&(G=p(Et,G,lt),nt===null?qe=Et:nt.sibling=Et,nt=Et);return Ft&&Cr(Q,lt),qe}for(it=l(Q,it);!Et.done;lt++,Et=re.next())Et=ke(it,Q,lt,Et.value,Le),Et!==null&&(t&&Et.alternate!==null&&it.delete(Et.key===null?lt:Et.key),G=p(Et,G,lt),nt===null?qe=Et:nt.sibling=Et,nt=Et);return t&&it.forEach(function(G_){return i(Q,G_)}),Ft&&Cr(Q,lt),qe}function Wt(Q,G,re,Le){if(typeof re=="object"&&re!==null&&re.type===O&&re.key===null&&(re=re.props.children),typeof re=="object"&&re!==null){switch(re.$$typeof){case Z:e:{for(var qe=re.key,nt=G;nt!==null;){if(nt.key===qe){if(qe=re.type,qe===O){if(nt.tag===7){o(Q,nt.sibling),G=u(nt,re.props.children),G.return=Q,Q=G;break e}}else if(nt.elementType===qe||typeof qe=="object"&&qe!==null&&qe.$$typeof===le&&Gf(qe)===nt.type){o(Q,nt.sibling),G=u(nt,re.props),G.ref=xo(Q,nt,re),G.return=Q,Q=G;break e}o(Q,nt);break}else i(Q,nt);nt=nt.sibling}re.type===O?(G=Ur(re.props.children,Q.mode,Le,re.key),G.return=Q,Q=G):(Le=Wa(re.type,re.key,re.props,null,Q.mode,Le),Le.ref=xo(Q,G,re),Le.return=Q,Q=Le)}return w(Q);case B:e:{for(nt=re.key;G!==null;){if(G.key===nt)if(G.tag===4&&G.stateNode.containerInfo===re.containerInfo&&G.stateNode.implementation===re.implementation){o(Q,G.sibling),G=u(G,re.children||[]),G.return=Q,Q=G;break e}else{o(Q,G);break}else i(Q,G);G=G.sibling}G=fu(re,Q.mode,Le),G.return=Q,Q=G}return w(Q);case le:return nt=re._init,Wt(Q,G,nt(re._payload),Le)}if(C(re))return Ge(Q,G,re,Le);if(te(re))return je(Q,G,re,Le);ya(Q,re)}return typeof re=="string"&&re!==""||typeof re=="number"?(re=""+re,G!==null&&G.tag===6?(o(Q,G.sibling),G=u(G,re),G.return=Q,Q=G):(o(Q,G),G=du(re,Q.mode,Le),G.return=Q,Q=G),w(Q)):o(Q,G)}return Wt}var hs=Wf(!0),Xf=Wf(!1),Sa=Zi(null),Ma=null,ps=null,Sc=null;function Mc(){Sc=ps=Ma=null}function Ec(t){var i=Sa.current;Dt(Sa),t._currentValue=i}function wc(t,i,o){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===o)break;t=t.return}}function ms(t,i){Ma=t,Sc=ps=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Rn=!0),t.firstContext=null)}function Wn(t){var i=t._currentValue;if(Sc!==t)if(t={context:t,memoizedValue:i,next:null},ps===null){if(Ma===null)throw Error(n(308));ps=t,Ma.dependencies={lanes:0,firstContext:t}}else ps=ps.next=t;return i}var Rr=null;function Tc(t){Rr===null?Rr=[t]:Rr.push(t)}function jf(t,i,o,l){var u=i.interleaved;return u===null?(o.next=o,Tc(i)):(o.next=u.next,u.next=o),i.interleaved=o,Ai(t,l)}function Ai(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var er=!1;function Ac(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ci(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function tr(t,i,o){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(St&2)!==0){var u=l.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),l.pending=i,Ai(t,o)}return u=l.interleaved,u===null?(i.next=i,Tc(l)):(i.next=u.next,u.next=i),l.interleaved=i,Ai(t,o)}function Ea(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,Bl(t,o)}}function qf(t,i){var o=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var u=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var w={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};p===null?u=p=w:p=p.next=w,o=o.next}while(o!==null);p===null?u=p=i:p=p.next=i}else u=p=i;o={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:p,shared:l.shared,effects:l.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function wa(t,i,o,l){var u=t.updateQueue;er=!1;var p=u.firstBaseUpdate,w=u.lastBaseUpdate,U=u.shared.pending;if(U!==null){u.shared.pending=null;var H=U,de=H.next;H.next=null,w===null?p=de:w.next=de,w=H;var Te=t.alternate;Te!==null&&(Te=Te.updateQueue,U=Te.lastBaseUpdate,U!==w&&(U===null?Te.firstBaseUpdate=de:U.next=de,Te.lastBaseUpdate=H))}if(p!==null){var Ae=u.baseState;w=0,Te=de=H=null,U=p;do{var Ee=U.lane,ke=U.eventTime;if((l&Ee)===Ee){Te!==null&&(Te=Te.next={eventTime:ke,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var Ge=t,je=U;switch(Ee=i,ke=o,je.tag){case 1:if(Ge=je.payload,typeof Ge=="function"){Ae=Ge.call(ke,Ae,Ee);break e}Ae=Ge;break e;case 3:Ge.flags=Ge.flags&-65537|128;case 0:if(Ge=je.payload,Ee=typeof Ge=="function"?Ge.call(ke,Ae,Ee):Ge,Ee==null)break e;Ae=oe({},Ae,Ee);break e;case 2:er=!0}}U.callback!==null&&U.lane!==0&&(t.flags|=64,Ee=u.effects,Ee===null?u.effects=[U]:Ee.push(U))}else ke={eventTime:ke,lane:Ee,tag:U.tag,payload:U.payload,callback:U.callback,next:null},Te===null?(de=Te=ke,H=Ae):Te=Te.next=ke,w|=Ee;if(U=U.next,U===null){if(U=u.shared.pending,U===null)break;Ee=U,U=Ee.next,Ee.next=null,u.lastBaseUpdate=Ee,u.shared.pending=null}}while(!0);if(Te===null&&(H=Ae),u.baseState=H,u.firstBaseUpdate=de,u.lastBaseUpdate=Te,i=u.shared.interleaved,i!==null){u=i;do w|=u.lane,u=u.next;while(u!==i)}else p===null&&(u.shared.lanes=0);Lr|=w,t.lanes=w,t.memoizedState=Ae}}function $f(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],u=l.callback;if(u!==null){if(l.callback=null,l=o,typeof u!="function")throw Error(n(191,u));u.call(l)}}}var yo={},di=Zi(yo),So=Zi(yo),Mo=Zi(yo);function br(t){if(t===yo)throw Error(n(174));return t}function Cc(t,i){switch(bt(Mo,i),bt(So,t),bt(di,yo),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Se(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Se(i,t)}Dt(di),bt(di,i)}function gs(){Dt(di),Dt(So),Dt(Mo)}function Kf(t){br(Mo.current);var i=br(di.current),o=Se(i,t.type);i!==o&&(bt(So,t),bt(di,o))}function Rc(t){So.current===t&&(Dt(di),Dt(So))}var zt=Zi(0);function Ta(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var bc=[];function Pc(){for(var t=0;t<bc.length;t++)bc[t]._workInProgressVersionPrimary=null;bc.length=0}var Aa=D.ReactCurrentDispatcher,Lc=D.ReactCurrentBatchConfig,Pr=0,Bt=null,$t=null,tn=null,Ca=!1,Eo=!1,wo=0,d_=0;function un(){throw Error(n(321))}function Dc(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!ei(t[o],i[o]))return!1;return!0}function Nc(t,i,o,l,u,p){if(Pr=p,Bt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Aa.current=t===null||t.memoizedState===null?m_:g_,t=o(l,u),Eo){p=0;do{if(Eo=!1,wo=0,25<=p)throw Error(n(301));p+=1,tn=$t=null,i.updateQueue=null,Aa.current=__,t=o(l,u)}while(Eo)}if(Aa.current=Pa,i=$t!==null&&$t.next!==null,Pr=0,tn=$t=Bt=null,Ca=!1,i)throw Error(n(300));return t}function Ic(){var t=wo!==0;return wo=0,t}function fi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tn===null?Bt.memoizedState=tn=t:tn=tn.next=t,tn}function Xn(){if($t===null){var t=Bt.alternate;t=t!==null?t.memoizedState:null}else t=$t.next;var i=tn===null?Bt.memoizedState:tn.next;if(i!==null)tn=i,$t=t;else{if(t===null)throw Error(n(310));$t=t,t={memoizedState:$t.memoizedState,baseState:$t.baseState,baseQueue:$t.baseQueue,queue:$t.queue,next:null},tn===null?Bt.memoizedState=tn=t:tn=tn.next=t}return tn}function To(t,i){return typeof i=="function"?i(t):i}function Uc(t){var i=Xn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=$t,u=l.baseQueue,p=o.pending;if(p!==null){if(u!==null){var w=u.next;u.next=p.next,p.next=w}l.baseQueue=u=p,o.pending=null}if(u!==null){p=u.next,l=l.baseState;var U=w=null,H=null,de=p;do{var Te=de.lane;if((Pr&Te)===Te)H!==null&&(H=H.next={lane:0,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null}),l=de.hasEagerState?de.eagerState:t(l,de.action);else{var Ae={lane:Te,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null};H===null?(U=H=Ae,w=l):H=H.next=Ae,Bt.lanes|=Te,Lr|=Te}de=de.next}while(de!==null&&de!==p);H===null?w=l:H.next=U,ei(l,i.memoizedState)||(Rn=!0),i.memoizedState=l,i.baseState=w,i.baseQueue=H,o.lastRenderedState=l}if(t=o.interleaved,t!==null){u=t;do p=u.lane,Bt.lanes|=p,Lr|=p,u=u.next;while(u!==t)}else u===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Fc(t){var i=Xn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=o.dispatch,u=o.pending,p=i.memoizedState;if(u!==null){o.pending=null;var w=u=u.next;do p=t(p,w.action),w=w.next;while(w!==u);ei(p,i.memoizedState)||(Rn=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),o.lastRenderedState=p}return[p,l]}function Zf(){}function Qf(t,i){var o=Bt,l=Xn(),u=i(),p=!ei(l.memoizedState,u);if(p&&(l.memoizedState=u,Rn=!0),l=l.queue,Oc(th.bind(null,o,l,t),[t]),l.getSnapshot!==i||p||tn!==null&&tn.memoizedState.tag&1){if(o.flags|=2048,Ao(9,eh.bind(null,o,l,u,i),void 0,null),nn===null)throw Error(n(349));(Pr&30)!==0||Jf(o,i,u)}return u}function Jf(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=Bt.updateQueue,i===null?(i={lastEffect:null,stores:null},Bt.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function eh(t,i,o,l){i.value=o,i.getSnapshot=l,nh(i)&&ih(t)}function th(t,i,o){return o(function(){nh(i)&&ih(t)})}function nh(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!ei(t,o)}catch{return!0}}function ih(t){var i=Ai(t,1);i!==null&&si(i,t,1,-1)}function rh(t){var i=fi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:To,lastRenderedState:t},i.queue=t,t=t.dispatch=p_.bind(null,Bt,t),[i.memoizedState,t]}function Ao(t,i,o,l){return t={tag:t,create:i,destroy:o,deps:l,next:null},i=Bt.updateQueue,i===null?(i={lastEffect:null,stores:null},Bt.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(l=o.next,o.next=t,t.next=l,i.lastEffect=t)),t}function sh(){return Xn().memoizedState}function Ra(t,i,o,l){var u=fi();Bt.flags|=t,u.memoizedState=Ao(1|i,o,void 0,l===void 0?null:l)}function ba(t,i,o,l){var u=Xn();l=l===void 0?null:l;var p=void 0;if($t!==null){var w=$t.memoizedState;if(p=w.destroy,l!==null&&Dc(l,w.deps)){u.memoizedState=Ao(i,o,p,l);return}}Bt.flags|=t,u.memoizedState=Ao(1|i,o,p,l)}function oh(t,i){return Ra(8390656,8,t,i)}function Oc(t,i){return ba(2048,8,t,i)}function ah(t,i){return ba(4,2,t,i)}function lh(t,i){return ba(4,4,t,i)}function ch(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function uh(t,i,o){return o=o!=null?o.concat([t]):null,ba(4,4,ch.bind(null,i,t),o)}function kc(){}function dh(t,i){var o=Xn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Dc(i,l[1])?l[0]:(o.memoizedState=[t,i],t)}function fh(t,i){var o=Xn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Dc(i,l[1])?l[0]:(t=t(),o.memoizedState=[t,i],t)}function hh(t,i,o){return(Pr&21)===0?(t.baseState&&(t.baseState=!1,Rn=!0),t.memoizedState=o):(ei(o,i)||(o=Zo(),Bt.lanes|=o,Lr|=o,t.baseState=!0),i)}function f_(t,i){var o=Tt;Tt=o!==0&&4>o?o:4,t(!0);var l=Lc.transition;Lc.transition={};try{t(!1),i()}finally{Tt=o,Lc.transition=l}}function ph(){return Xn().memoizedState}function h_(t,i,o){var l=sr(t);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},mh(t))gh(i,o);else if(o=jf(t,i,o,l),o!==null){var u=vn();si(o,t,l,u),_h(o,i,l)}}function p_(t,i,o){var l=sr(t),u={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(mh(t))gh(i,u);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var w=i.lastRenderedState,U=p(w,o);if(u.hasEagerState=!0,u.eagerState=U,ei(U,w)){var H=i.interleaved;H===null?(u.next=u,Tc(i)):(u.next=H.next,H.next=u),i.interleaved=u;return}}catch{}finally{}o=jf(t,i,u,l),o!==null&&(u=vn(),si(o,t,l,u),_h(o,i,l))}}function mh(t){var i=t.alternate;return t===Bt||i!==null&&i===Bt}function gh(t,i){Eo=Ca=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function _h(t,i,o){if((o&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,Bl(t,o)}}var Pa={readContext:Wn,useCallback:un,useContext:un,useEffect:un,useImperativeHandle:un,useInsertionEffect:un,useLayoutEffect:un,useMemo:un,useReducer:un,useRef:un,useState:un,useDebugValue:un,useDeferredValue:un,useTransition:un,useMutableSource:un,useSyncExternalStore:un,useId:un,unstable_isNewReconciler:!1},m_={readContext:Wn,useCallback:function(t,i){return fi().memoizedState=[t,i===void 0?null:i],t},useContext:Wn,useEffect:oh,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Ra(4194308,4,ch.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Ra(4194308,4,t,i)},useInsertionEffect:function(t,i){return Ra(4,2,t,i)},useMemo:function(t,i){var o=fi();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var l=fi();return i=o!==void 0?o(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=h_.bind(null,Bt,t),[l.memoizedState,t]},useRef:function(t){var i=fi();return t={current:t},i.memoizedState=t},useState:rh,useDebugValue:kc,useDeferredValue:function(t){return fi().memoizedState=t},useTransition:function(){var t=rh(!1),i=t[0];return t=f_.bind(null,t[1]),fi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var l=Bt,u=fi();if(Ft){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),nn===null)throw Error(n(349));(Pr&30)!==0||Jf(l,i,o)}u.memoizedState=o;var p={value:o,getSnapshot:i};return u.queue=p,oh(th.bind(null,l,p,t),[t]),l.flags|=2048,Ao(9,eh.bind(null,l,p,o,i),void 0,null),o},useId:function(){var t=fi(),i=nn.identifierPrefix;if(Ft){var o=Ti,l=wi;o=(l&~(1<<32-wt(l)-1)).toString(32)+o,i=":"+i+"R"+o,o=wo++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=d_++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},g_={readContext:Wn,useCallback:dh,useContext:Wn,useEffect:Oc,useImperativeHandle:uh,useInsertionEffect:ah,useLayoutEffect:lh,useMemo:fh,useReducer:Uc,useRef:sh,useState:function(){return Uc(To)},useDebugValue:kc,useDeferredValue:function(t){var i=Xn();return hh(i,$t.memoizedState,t)},useTransition:function(){var t=Uc(To)[0],i=Xn().memoizedState;return[t,i]},useMutableSource:Zf,useSyncExternalStore:Qf,useId:ph,unstable_isNewReconciler:!1},__={readContext:Wn,useCallback:dh,useContext:Wn,useEffect:Oc,useImperativeHandle:uh,useInsertionEffect:ah,useLayoutEffect:lh,useMemo:fh,useReducer:Fc,useRef:sh,useState:function(){return Fc(To)},useDebugValue:kc,useDeferredValue:function(t){var i=Xn();return $t===null?i.memoizedState=t:hh(i,$t.memoizedState,t)},useTransition:function(){var t=Fc(To)[0],i=Xn().memoizedState;return[t,i]},useMutableSource:Zf,useSyncExternalStore:Qf,useId:ph,unstable_isNewReconciler:!1};function ni(t,i){if(t&&t.defaultProps){i=oe({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function zc(t,i,o,l){i=t.memoizedState,o=o(l,i),o=o==null?i:oe({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var La={isMounted:function(t){return(t=t._reactInternals)?Si(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var l=vn(),u=sr(t),p=Ci(l,u);p.payload=i,o!=null&&(p.callback=o),i=tr(t,p,u),i!==null&&(si(i,t,u,l),Ea(i,t,u))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var l=vn(),u=sr(t),p=Ci(l,u);p.tag=1,p.payload=i,o!=null&&(p.callback=o),i=tr(t,p,u),i!==null&&(si(i,t,u,l),Ea(i,t,u))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=vn(),l=sr(t),u=Ci(o,l);u.tag=2,i!=null&&(u.callback=i),i=tr(t,u,l),i!==null&&(si(i,t,l,o),Ea(i,t,l))}};function vh(t,i,o,l,u,p,w){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,p,w):i.prototype&&i.prototype.isPureReactComponent?!fo(o,l)||!fo(u,p):!0}function xh(t,i,o){var l=!1,u=Qi,p=i.contextType;return typeof p=="object"&&p!==null?p=Wn(p):(u=Cn(i)?Tr:cn.current,l=i.contextTypes,p=(l=l!=null)?cs(t,u):Qi),i=new i(o,p),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=La,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=u,t.__reactInternalMemoizedMaskedChildContext=p),i}function yh(t,i,o,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,l),i.state!==t&&La.enqueueReplaceState(i,i.state,null)}function Bc(t,i,o,l){var u=t.stateNode;u.props=o,u.state=t.memoizedState,u.refs={},Ac(t);var p=i.contextType;typeof p=="object"&&p!==null?u.context=Wn(p):(p=Cn(i)?Tr:cn.current,u.context=cs(t,p)),u.state=t.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(zc(t,i,p,o),u.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(i=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),i!==u.state&&La.enqueueReplaceState(u,u.state,null),wa(t,o,u,l),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308)}function _s(t,i){try{var o="",l=i;do o+=W(l),l=l.return;while(l);var u=o}catch(p){u=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:i,stack:u,digest:null}}function Hc(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function Vc(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var v_=typeof WeakMap=="function"?WeakMap:Map;function Sh(t,i,o){o=Ci(-1,o),o.tag=3,o.payload={element:null};var l=i.value;return o.callback=function(){ka||(ka=!0,iu=l),Vc(t,i)},o}function Mh(t,i,o){o=Ci(-1,o),o.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var u=i.value;o.payload=function(){return l(u)},o.callback=function(){Vc(t,i)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(o.callback=function(){Vc(t,i),typeof l!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})}),o}function Eh(t,i,o){var l=t.pingCache;if(l===null){l=t.pingCache=new v_;var u=new Set;l.set(i,u)}else u=l.get(i),u===void 0&&(u=new Set,l.set(i,u));u.has(o)||(u.add(o),t=D_.bind(null,t,i,o),i.then(t,t))}function wh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Th(t,i,o,l,u){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Ci(-1,1),i.tag=2,tr(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=u,t)}var x_=D.ReactCurrentOwner,Rn=!1;function _n(t,i,o,l){i.child=t===null?Xf(i,null,o,l):hs(i,t.child,o,l)}function Ah(t,i,o,l,u){o=o.render;var p=i.ref;return ms(i,u),l=Nc(t,i,o,l,p,u),o=Ic(),t!==null&&!Rn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~u,Ri(t,i,u)):(Ft&&o&&gc(i),i.flags|=1,_n(t,i,l,u),i.child)}function Ch(t,i,o,l,u){if(t===null){var p=o.type;return typeof p=="function"&&!uu(p)&&p.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=p,Rh(t,i,p,l,u)):(t=Wa(o.type,null,l,i,i.mode,u),t.ref=i.ref,t.return=i,i.child=t)}if(p=t.child,(t.lanes&u)===0){var w=p.memoizedProps;if(o=o.compare,o=o!==null?o:fo,o(w,l)&&t.ref===i.ref)return Ri(t,i,u)}return i.flags|=1,t=ar(p,l),t.ref=i.ref,t.return=i,i.child=t}function Rh(t,i,o,l,u){if(t!==null){var p=t.memoizedProps;if(fo(p,l)&&t.ref===i.ref)if(Rn=!1,i.pendingProps=l=p,(t.lanes&u)!==0)(t.flags&131072)!==0&&(Rn=!0);else return i.lanes=t.lanes,Ri(t,i,u)}return Gc(t,i,o,l,u)}function bh(t,i,o){var l=i.pendingProps,u=l.children,p=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},bt(xs,On),On|=o;else{if((o&1073741824)===0)return t=p!==null?p.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,bt(xs,On),On|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=p!==null?p.baseLanes:o,bt(xs,On),On|=l}else p!==null?(l=p.baseLanes|o,i.memoizedState=null):l=o,bt(xs,On),On|=l;return _n(t,i,u,o),i.child}function Ph(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Gc(t,i,o,l,u){var p=Cn(o)?Tr:cn.current;return p=cs(i,p),ms(i,u),o=Nc(t,i,o,l,p,u),l=Ic(),t!==null&&!Rn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~u,Ri(t,i,u)):(Ft&&l&&gc(i),i.flags|=1,_n(t,i,o,u),i.child)}function Lh(t,i,o,l,u){if(Cn(o)){var p=!0;ma(i)}else p=!1;if(ms(i,u),i.stateNode===null)Na(t,i),xh(i,o,l),Bc(i,o,l,u),l=!0;else if(t===null){var w=i.stateNode,U=i.memoizedProps;w.props=U;var H=w.context,de=o.contextType;typeof de=="object"&&de!==null?de=Wn(de):(de=Cn(o)?Tr:cn.current,de=cs(i,de));var Te=o.getDerivedStateFromProps,Ae=typeof Te=="function"||typeof w.getSnapshotBeforeUpdate=="function";Ae||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(U!==l||H!==de)&&yh(i,w,l,de),er=!1;var Ee=i.memoizedState;w.state=Ee,wa(i,l,w,u),H=i.memoizedState,U!==l||Ee!==H||An.current||er?(typeof Te=="function"&&(zc(i,o,Te,l),H=i.memoizedState),(U=er||vh(i,o,U,l,Ee,H,de))?(Ae||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(i.flags|=4194308)):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=H),w.props=l,w.state=H,w.context=de,l=U):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{w=i.stateNode,Yf(t,i),U=i.memoizedProps,de=i.type===i.elementType?U:ni(i.type,U),w.props=de,Ae=i.pendingProps,Ee=w.context,H=o.contextType,typeof H=="object"&&H!==null?H=Wn(H):(H=Cn(o)?Tr:cn.current,H=cs(i,H));var ke=o.getDerivedStateFromProps;(Te=typeof ke=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(U!==Ae||Ee!==H)&&yh(i,w,l,H),er=!1,Ee=i.memoizedState,w.state=Ee,wa(i,l,w,u);var Ge=i.memoizedState;U!==Ae||Ee!==Ge||An.current||er?(typeof ke=="function"&&(zc(i,o,ke,l),Ge=i.memoizedState),(de=er||vh(i,o,de,l,Ee,Ge,H)||!1)?(Te||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(l,Ge,H),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(l,Ge,H)),typeof w.componentDidUpdate=="function"&&(i.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof w.componentDidUpdate!="function"||U===t.memoizedProps&&Ee===t.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||U===t.memoizedProps&&Ee===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=Ge),w.props=l,w.state=Ge,w.context=H,l=de):(typeof w.componentDidUpdate!="function"||U===t.memoizedProps&&Ee===t.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||U===t.memoizedProps&&Ee===t.memoizedState||(i.flags|=1024),l=!1)}return Wc(t,i,o,l,p,u)}function Wc(t,i,o,l,u,p){Ph(t,i);var w=(i.flags&128)!==0;if(!l&&!w)return u&&Ff(i,o,!1),Ri(t,i,p);l=i.stateNode,x_.current=i;var U=w&&typeof o.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&w?(i.child=hs(i,t.child,null,p),i.child=hs(i,null,U,p)):_n(t,i,U,p),i.memoizedState=l.state,u&&Ff(i,o,!0),i.child}function Dh(t){var i=t.stateNode;i.pendingContext?If(t,i.pendingContext,i.pendingContext!==i.context):i.context&&If(t,i.context,!1),Cc(t,i.containerInfo)}function Nh(t,i,o,l,u){return fs(),yc(u),i.flags|=256,_n(t,i,o,l),i.child}var Xc={dehydrated:null,treeContext:null,retryLane:0};function jc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ih(t,i,o){var l=i.pendingProps,u=zt.current,p=!1,w=(i.flags&128)!==0,U;if((U=w)||(U=t!==null&&t.memoizedState===null?!1:(u&2)!==0),U?(p=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(u|=1),bt(zt,u&1),t===null)return xc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(w=l.children,t=l.fallback,p?(l=i.mode,p=i.child,w={mode:"hidden",children:w},(l&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=w):p=Xa(w,l,0,null),t=Ur(t,l,o,null),p.return=i,t.return=i,p.sibling=t,i.child=p,i.child.memoizedState=jc(o),i.memoizedState=Xc,t):Yc(i,w));if(u=t.memoizedState,u!==null&&(U=u.dehydrated,U!==null))return y_(t,i,w,l,U,u,o);if(p){p=l.fallback,w=i.mode,u=t.child,U=u.sibling;var H={mode:"hidden",children:l.children};return(w&1)===0&&i.child!==u?(l=i.child,l.childLanes=0,l.pendingProps=H,i.deletions=null):(l=ar(u,H),l.subtreeFlags=u.subtreeFlags&14680064),U!==null?p=ar(U,p):(p=Ur(p,w,o,null),p.flags|=2),p.return=i,l.return=i,l.sibling=p,i.child=l,l=p,p=i.child,w=t.child.memoizedState,w=w===null?jc(o):{baseLanes:w.baseLanes|o,cachePool:null,transitions:w.transitions},p.memoizedState=w,p.childLanes=t.childLanes&~o,i.memoizedState=Xc,l}return p=t.child,t=p.sibling,l=ar(p,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=o),l.return=i,l.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=l,i.memoizedState=null,l}function Yc(t,i){return i=Xa({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Da(t,i,o,l){return l!==null&&yc(l),hs(i,t.child,null,o),t=Yc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function y_(t,i,o,l,u,p,w){if(o)return i.flags&256?(i.flags&=-257,l=Hc(Error(n(422))),Da(t,i,w,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(p=l.fallback,u=i.mode,l=Xa({mode:"visible",children:l.children},u,0,null),p=Ur(p,u,w,null),p.flags|=2,l.return=i,p.return=i,l.sibling=p,i.child=l,(i.mode&1)!==0&&hs(i,t.child,null,w),i.child.memoizedState=jc(w),i.memoizedState=Xc,p);if((i.mode&1)===0)return Da(t,i,w,null);if(u.data==="$!"){if(l=u.nextSibling&&u.nextSibling.dataset,l)var U=l.dgst;return l=U,p=Error(n(419)),l=Hc(p,l,void 0),Da(t,i,w,l)}if(U=(w&t.childLanes)!==0,Rn||U){if(l=nn,l!==null){switch(w&-w){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=(u&(l.suspendedLanes|w))!==0?0:u,u!==0&&u!==p.retryLane&&(p.retryLane=u,Ai(t,u),si(l,t,u,-1))}return cu(),l=Hc(Error(n(421))),Da(t,i,w,l)}return u.data==="$?"?(i.flags|=128,i.child=t.child,i=N_.bind(null,t),u._reactRetry=i,null):(t=p.treeContext,Fn=Ki(u.nextSibling),Un=i,Ft=!0,ti=null,t!==null&&(Vn[Gn++]=wi,Vn[Gn++]=Ti,Vn[Gn++]=Ar,wi=t.id,Ti=t.overflow,Ar=i),i=Yc(i,l.children),i.flags|=4096,i)}function Uh(t,i,o){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),wc(t.return,i,o)}function qc(t,i,o,l,u){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:u}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=l,p.tail=o,p.tailMode=u)}function Fh(t,i,o){var l=i.pendingProps,u=l.revealOrder,p=l.tail;if(_n(t,i,l.children,o),l=zt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Uh(t,o,i);else if(t.tag===19)Uh(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(bt(zt,l),(i.mode&1)===0)i.memoizedState=null;else switch(u){case"forwards":for(o=i.child,u=null;o!==null;)t=o.alternate,t!==null&&Ta(t)===null&&(u=o),o=o.sibling;o=u,o===null?(u=i.child,i.child=null):(u=o.sibling,o.sibling=null),qc(i,!1,u,o,p);break;case"backwards":for(o=null,u=i.child,i.child=null;u!==null;){if(t=u.alternate,t!==null&&Ta(t)===null){i.child=u;break}t=u.sibling,u.sibling=o,o=u,u=t}qc(i,!0,o,null,p);break;case"together":qc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Na(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Ri(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),Lr|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=ar(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=ar(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function S_(t,i,o){switch(i.tag){case 3:Dh(i),fs();break;case 5:Kf(i);break;case 1:Cn(i.type)&&ma(i);break;case 4:Cc(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,u=i.memoizedProps.value;bt(Sa,l._currentValue),l._currentValue=u;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(bt(zt,zt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Ih(t,i,o):(bt(zt,zt.current&1),t=Ri(t,i,o),t!==null?t.sibling:null);bt(zt,zt.current&1);break;case 19:if(l=(o&i.childLanes)!==0,(t.flags&128)!==0){if(l)return Fh(t,i,o);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),bt(zt,zt.current),l)break;return null;case 22:case 23:return i.lanes=0,bh(t,i,o)}return Ri(t,i,o)}var Oh,$c,kh,zh;Oh=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},$c=function(){},kh=function(t,i,o,l){var u=t.memoizedProps;if(u!==l){t=i.stateNode,br(di.current);var p=null;switch(o){case"input":u=Qe(t,u),l=Qe(t,l),p=[];break;case"select":u=oe({},u,{value:void 0}),l=oe({},l,{value:void 0}),p=[];break;case"textarea":u=z(t,u),l=z(t,l),p=[];break;default:typeof u.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=fa)}Ze(o,l);var w;o=null;for(de in u)if(!l.hasOwnProperty(de)&&u.hasOwnProperty(de)&&u[de]!=null)if(de==="style"){var U=u[de];for(w in U)U.hasOwnProperty(w)&&(o||(o={}),o[w]="")}else de!=="dangerouslySetInnerHTML"&&de!=="children"&&de!=="suppressContentEditableWarning"&&de!=="suppressHydrationWarning"&&de!=="autoFocus"&&(a.hasOwnProperty(de)?p||(p=[]):(p=p||[]).push(de,null));for(de in l){var H=l[de];if(U=u!=null?u[de]:void 0,l.hasOwnProperty(de)&&H!==U&&(H!=null||U!=null))if(de==="style")if(U){for(w in U)!U.hasOwnProperty(w)||H&&H.hasOwnProperty(w)||(o||(o={}),o[w]="");for(w in H)H.hasOwnProperty(w)&&U[w]!==H[w]&&(o||(o={}),o[w]=H[w])}else o||(p||(p=[]),p.push(de,o)),o=H;else de==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,U=U?U.__html:void 0,H!=null&&U!==H&&(p=p||[]).push(de,H)):de==="children"?typeof H!="string"&&typeof H!="number"||(p=p||[]).push(de,""+H):de!=="suppressContentEditableWarning"&&de!=="suppressHydrationWarning"&&(a.hasOwnProperty(de)?(H!=null&&de==="onScroll"&&Lt("scroll",t),p||U===H||(p=[])):(p=p||[]).push(de,H))}o&&(p=p||[]).push("style",o);var de=p;(i.updateQueue=de)&&(i.flags|=4)}},zh=function(t,i,o,l){o!==l&&(i.flags|=4)};function Co(t,i){if(!Ft)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function dn(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,l=0;if(i)for(var u=t.child;u!==null;)o|=u.lanes|u.childLanes,l|=u.subtreeFlags&14680064,l|=u.flags&14680064,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)o|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=l,t.childLanes=o,i}function M_(t,i,o){var l=i.pendingProps;switch(_c(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dn(i),null;case 1:return Cn(i.type)&&pa(),dn(i),null;case 3:return l=i.stateNode,gs(),Dt(An),Dt(cn),Pc(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(xa(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ti!==null&&(ou(ti),ti=null))),$c(t,i),dn(i),null;case 5:Rc(i);var u=br(Mo.current);if(o=i.type,t!==null&&i.stateNode!=null)kh(t,i,o,l,u),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return dn(i),null}if(t=br(di.current),xa(i)){l=i.stateNode,o=i.type;var p=i.memoizedProps;switch(l[ui]=i,l[_o]=p,t=(i.mode&1)!==0,o){case"dialog":Lt("cancel",l),Lt("close",l);break;case"iframe":case"object":case"embed":Lt("load",l);break;case"video":case"audio":for(u=0;u<po.length;u++)Lt(po[u],l);break;case"source":Lt("error",l);break;case"img":case"image":case"link":Lt("error",l),Lt("load",l);break;case"details":Lt("toggle",l);break;case"input":ct(l,p),Lt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!p.multiple},Lt("invalid",l);break;case"textarea":Y(l,p),Lt("invalid",l)}Ze(o,p),u=null;for(var w in p)if(p.hasOwnProperty(w)){var U=p[w];w==="children"?typeof U=="string"?l.textContent!==U&&(p.suppressHydrationWarning!==!0&&da(l.textContent,U,t),u=["children",U]):typeof U=="number"&&l.textContent!==""+U&&(p.suppressHydrationWarning!==!0&&da(l.textContent,U,t),u=["children",""+U]):a.hasOwnProperty(w)&&U!=null&&w==="onScroll"&&Lt("scroll",l)}switch(o){case"input":pt(l),et(l,p,!0);break;case"textarea":pt(l),pe(l);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(l.onclick=fa)}l=u,i.updateQueue=l,l!==null&&(i.flags|=4)}else{w=u.nodeType===9?u:u.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Me(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=w.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=w.createElement(o,{is:l.is}):(t=w.createElement(o),o==="select"&&(w=t,l.multiple?w.multiple=!0:l.size&&(w.size=l.size))):t=w.createElementNS(t,o),t[ui]=i,t[_o]=l,Oh(t,i,!1,!1),i.stateNode=t;e:{switch(w=yt(o,l),o){case"dialog":Lt("cancel",t),Lt("close",t),u=l;break;case"iframe":case"object":case"embed":Lt("load",t),u=l;break;case"video":case"audio":for(u=0;u<po.length;u++)Lt(po[u],t);u=l;break;case"source":Lt("error",t),u=l;break;case"img":case"image":case"link":Lt("error",t),Lt("load",t),u=l;break;case"details":Lt("toggle",t),u=l;break;case"input":ct(t,l),u=Qe(t,l),Lt("invalid",t);break;case"option":u=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},u=oe({},l,{value:void 0}),Lt("invalid",t);break;case"textarea":Y(t,l),u=z(t,l),Lt("invalid",t);break;default:u=l}Ze(o,u),U=u;for(p in U)if(U.hasOwnProperty(p)){var H=U[p];p==="style"?Ue(t,H):p==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&Ve(t,H)):p==="children"?typeof H=="string"?(o!=="textarea"||H!=="")&&ye(t,H):typeof H=="number"&&ye(t,""+H):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(a.hasOwnProperty(p)?H!=null&&p==="onScroll"&&Lt("scroll",t):H!=null&&P(t,p,H,w))}switch(o){case"input":pt(t),et(t,l,!1);break;case"textarea":pt(t),pe(t);break;case"option":l.value!=null&&t.setAttribute("value",""+Ce(l.value));break;case"select":t.multiple=!!l.multiple,p=l.value,p!=null?S(t,!!l.multiple,p,!1):l.defaultValue!=null&&S(t,!!l.multiple,l.defaultValue,!0);break;default:typeof u.onClick=="function"&&(t.onclick=fa)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return dn(i),null;case 6:if(t&&i.stateNode!=null)zh(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(o=br(Mo.current),br(di.current),xa(i)){if(l=i.stateNode,o=i.memoizedProps,l[ui]=i,(p=l.nodeValue!==o)&&(t=Un,t!==null))switch(t.tag){case 3:da(l.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&da(l.nodeValue,o,(t.mode&1)!==0)}p&&(i.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[ui]=i,i.stateNode=l}return dn(i),null;case 13:if(Dt(zt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ft&&Fn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Vf(),fs(),i.flags|=98560,p=!1;else if(p=xa(i),l!==null&&l.dehydrated!==null){if(t===null){if(!p)throw Error(n(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(n(317));p[ui]=i}else fs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;dn(i),p=!1}else ti!==null&&(ou(ti),ti=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(zt.current&1)!==0?Kt===0&&(Kt=3):cu())),i.updateQueue!==null&&(i.flags|=4),dn(i),null);case 4:return gs(),$c(t,i),t===null&&mo(i.stateNode.containerInfo),dn(i),null;case 10:return Ec(i.type._context),dn(i),null;case 17:return Cn(i.type)&&pa(),dn(i),null;case 19:if(Dt(zt),p=i.memoizedState,p===null)return dn(i),null;if(l=(i.flags&128)!==0,w=p.rendering,w===null)if(l)Co(p,!1);else{if(Kt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(w=Ta(t),w!==null){for(i.flags|=128,Co(p,!1),l=w.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=o,o=i.child;o!==null;)p=o,t=l,p.flags&=14680066,w=p.alternate,w===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=w.childLanes,p.lanes=w.lanes,p.child=w.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=w.memoizedProps,p.memoizedState=w.memoizedState,p.updateQueue=w.updateQueue,p.type=w.type,t=w.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return bt(zt,zt.current&1|2),i.child}t=t.sibling}p.tail!==null&&Ie()>ys&&(i.flags|=128,l=!0,Co(p,!1),i.lanes=4194304)}else{if(!l)if(t=Ta(w),t!==null){if(i.flags|=128,l=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Co(p,!0),p.tail===null&&p.tailMode==="hidden"&&!w.alternate&&!Ft)return dn(i),null}else 2*Ie()-p.renderingStartTime>ys&&o!==1073741824&&(i.flags|=128,l=!0,Co(p,!1),i.lanes=4194304);p.isBackwards?(w.sibling=i.child,i.child=w):(o=p.last,o!==null?o.sibling=w:i.child=w,p.last=w)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=Ie(),i.sibling=null,o=zt.current,bt(zt,l?o&1|2:o&1),i):(dn(i),null);case 22:case 23:return lu(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(On&1073741824)!==0&&(dn(i),i.subtreeFlags&6&&(i.flags|=8192)):dn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function E_(t,i){switch(_c(i),i.tag){case 1:return Cn(i.type)&&pa(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return gs(),Dt(An),Dt(cn),Pc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Rc(i),null;case 13:if(Dt(zt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));fs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Dt(zt),null;case 4:return gs(),null;case 10:return Ec(i.type._context),null;case 22:case 23:return lu(),null;case 24:return null;default:return null}}var Ia=!1,fn=!1,w_=typeof WeakSet=="function"?WeakSet:Set,He=null;function vs(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){Vt(t,i,l)}else o.current=null}function Kc(t,i,o){try{o()}catch(l){Vt(t,i,l)}}var Bh=!1;function T_(t,i){if(lc=ea,t=vf(),ec(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var u=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var w=0,U=-1,H=-1,de=0,Te=0,Ae=t,Ee=null;t:for(;;){for(var ke;Ae!==o||u!==0&&Ae.nodeType!==3||(U=w+u),Ae!==p||l!==0&&Ae.nodeType!==3||(H=w+l),Ae.nodeType===3&&(w+=Ae.nodeValue.length),(ke=Ae.firstChild)!==null;)Ee=Ae,Ae=ke;for(;;){if(Ae===t)break t;if(Ee===o&&++de===u&&(U=w),Ee===p&&++Te===l&&(H=w),(ke=Ae.nextSibling)!==null)break;Ae=Ee,Ee=Ae.parentNode}Ae=ke}o=U===-1||H===-1?null:{start:U,end:H}}else o=null}o=o||{start:0,end:0}}else o=null;for(cc={focusedElem:t,selectionRange:o},ea=!1,He=i;He!==null;)if(i=He,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,He=t;else for(;He!==null;){i=He;try{var Ge=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ge!==null){var je=Ge.memoizedProps,Wt=Ge.memoizedState,Q=i.stateNode,G=Q.getSnapshotBeforeUpdate(i.elementType===i.type?je:ni(i.type,je),Wt);Q.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var re=i.stateNode.containerInfo;re.nodeType===1?re.textContent="":re.nodeType===9&&re.documentElement&&re.removeChild(re.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Le){Vt(i,i.return,Le)}if(t=i.sibling,t!==null){t.return=i.return,He=t;break}He=i.return}return Ge=Bh,Bh=!1,Ge}function Ro(t,i,o){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var u=l=l.next;do{if((u.tag&t)===t){var p=u.destroy;u.destroy=void 0,p!==void 0&&Kc(i,o,p)}u=u.next}while(u!==l)}}function Ua(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var l=o.create;o.destroy=l()}o=o.next}while(o!==i)}}function Zc(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function Hh(t){var i=t.alternate;i!==null&&(t.alternate=null,Hh(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[ui],delete i[_o],delete i[hc],delete i[a_],delete i[l_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Vh(t){return t.tag===5||t.tag===3||t.tag===4}function Gh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Vh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Qc(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=fa));else if(l!==4&&(t=t.child,t!==null))for(Qc(t,i,o),t=t.sibling;t!==null;)Qc(t,i,o),t=t.sibling}function Jc(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(Jc(t,i,o),t=t.sibling;t!==null;)Jc(t,i,o),t=t.sibling}var an=null,ii=!1;function nr(t,i,o){for(o=o.child;o!==null;)Wh(t,i,o),o=o.sibling}function Wh(t,i,o){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(Jt,o)}catch{}switch(o.tag){case 5:fn||vs(o,i);case 6:var l=an,u=ii;an=null,nr(t,i,o),an=l,ii=u,an!==null&&(ii?(t=an,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):an.removeChild(o.stateNode));break;case 18:an!==null&&(ii?(t=an,o=o.stateNode,t.nodeType===8?fc(t.parentNode,o):t.nodeType===1&&fc(t,o),so(t)):fc(an,o.stateNode));break;case 4:l=an,u=ii,an=o.stateNode.containerInfo,ii=!0,nr(t,i,o),an=l,ii=u;break;case 0:case 11:case 14:case 15:if(!fn&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){u=l=l.next;do{var p=u,w=p.destroy;p=p.tag,w!==void 0&&((p&2)!==0||(p&4)!==0)&&Kc(o,i,w),u=u.next}while(u!==l)}nr(t,i,o);break;case 1:if(!fn&&(vs(o,i),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(U){Vt(o,i,U)}nr(t,i,o);break;case 21:nr(t,i,o);break;case 22:o.mode&1?(fn=(l=fn)||o.memoizedState!==null,nr(t,i,o),fn=l):nr(t,i,o);break;default:nr(t,i,o)}}function Xh(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new w_),i.forEach(function(l){var u=I_.bind(null,t,l);o.has(l)||(o.add(l),l.then(u,u))})}}function ri(t,i){var o=i.deletions;if(o!==null)for(var l=0;l<o.length;l++){var u=o[l];try{var p=t,w=i,U=w;e:for(;U!==null;){switch(U.tag){case 5:an=U.stateNode,ii=!1;break e;case 3:an=U.stateNode.containerInfo,ii=!0;break e;case 4:an=U.stateNode.containerInfo,ii=!0;break e}U=U.return}if(an===null)throw Error(n(160));Wh(p,w,u),an=null,ii=!1;var H=u.alternate;H!==null&&(H.return=null),u.return=null}catch(de){Vt(u,i,de)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)jh(i,t),i=i.sibling}function jh(t,i){var o=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ri(i,t),hi(t),l&4){try{Ro(3,t,t.return),Ua(3,t)}catch(je){Vt(t,t.return,je)}try{Ro(5,t,t.return)}catch(je){Vt(t,t.return,je)}}break;case 1:ri(i,t),hi(t),l&512&&o!==null&&vs(o,o.return);break;case 5:if(ri(i,t),hi(t),l&512&&o!==null&&vs(o,o.return),t.flags&32){var u=t.stateNode;try{ye(u,"")}catch(je){Vt(t,t.return,je)}}if(l&4&&(u=t.stateNode,u!=null)){var p=t.memoizedProps,w=o!==null?o.memoizedProps:p,U=t.type,H=t.updateQueue;if(t.updateQueue=null,H!==null)try{U==="input"&&p.type==="radio"&&p.name!=null&&Be(u,p),yt(U,w);var de=yt(U,p);for(w=0;w<H.length;w+=2){var Te=H[w],Ae=H[w+1];Te==="style"?Ue(u,Ae):Te==="dangerouslySetInnerHTML"?Ve(u,Ae):Te==="children"?ye(u,Ae):P(u,Te,Ae,de)}switch(U){case"input":gt(u,p);break;case"textarea":ue(u,p);break;case"select":var Ee=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!p.multiple;var ke=p.value;ke!=null?S(u,!!p.multiple,ke,!1):Ee!==!!p.multiple&&(p.defaultValue!=null?S(u,!!p.multiple,p.defaultValue,!0):S(u,!!p.multiple,p.multiple?[]:"",!1))}u[_o]=p}catch(je){Vt(t,t.return,je)}}break;case 6:if(ri(i,t),hi(t),l&4){if(t.stateNode===null)throw Error(n(162));u=t.stateNode,p=t.memoizedProps;try{u.nodeValue=p}catch(je){Vt(t,t.return,je)}}break;case 3:if(ri(i,t),hi(t),l&4&&o!==null&&o.memoizedState.isDehydrated)try{so(i.containerInfo)}catch(je){Vt(t,t.return,je)}break;case 4:ri(i,t),hi(t);break;case 13:ri(i,t),hi(t),u=t.child,u.flags&8192&&(p=u.memoizedState!==null,u.stateNode.isHidden=p,!p||u.alternate!==null&&u.alternate.memoizedState!==null||(nu=Ie())),l&4&&Xh(t);break;case 22:if(Te=o!==null&&o.memoizedState!==null,t.mode&1?(fn=(de=fn)||Te,ri(i,t),fn=de):ri(i,t),hi(t),l&8192){if(de=t.memoizedState!==null,(t.stateNode.isHidden=de)&&!Te&&(t.mode&1)!==0)for(He=t,Te=t.child;Te!==null;){for(Ae=He=Te;He!==null;){switch(Ee=He,ke=Ee.child,Ee.tag){case 0:case 11:case 14:case 15:Ro(4,Ee,Ee.return);break;case 1:vs(Ee,Ee.return);var Ge=Ee.stateNode;if(typeof Ge.componentWillUnmount=="function"){l=Ee,o=Ee.return;try{i=l,Ge.props=i.memoizedProps,Ge.state=i.memoizedState,Ge.componentWillUnmount()}catch(je){Vt(l,o,je)}}break;case 5:vs(Ee,Ee.return);break;case 22:if(Ee.memoizedState!==null){$h(Ae);continue}}ke!==null?(ke.return=Ee,He=ke):$h(Ae)}Te=Te.sibling}e:for(Te=null,Ae=t;;){if(Ae.tag===5){if(Te===null){Te=Ae;try{u=Ae.stateNode,de?(p=u.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(U=Ae.stateNode,H=Ae.memoizedProps.style,w=H!=null&&H.hasOwnProperty("display")?H.display:null,U.style.display=We("display",w))}catch(je){Vt(t,t.return,je)}}}else if(Ae.tag===6){if(Te===null)try{Ae.stateNode.nodeValue=de?"":Ae.memoizedProps}catch(je){Vt(t,t.return,je)}}else if((Ae.tag!==22&&Ae.tag!==23||Ae.memoizedState===null||Ae===t)&&Ae.child!==null){Ae.child.return=Ae,Ae=Ae.child;continue}if(Ae===t)break e;for(;Ae.sibling===null;){if(Ae.return===null||Ae.return===t)break e;Te===Ae&&(Te=null),Ae=Ae.return}Te===Ae&&(Te=null),Ae.sibling.return=Ae.return,Ae=Ae.sibling}}break;case 19:ri(i,t),hi(t),l&4&&Xh(t);break;case 21:break;default:ri(i,t),hi(t)}}function hi(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(Vh(o)){var l=o;break e}o=o.return}throw Error(n(160))}switch(l.tag){case 5:var u=l.stateNode;l.flags&32&&(ye(u,""),l.flags&=-33);var p=Gh(t);Jc(t,p,u);break;case 3:case 4:var w=l.stateNode.containerInfo,U=Gh(t);Qc(t,U,w);break;default:throw Error(n(161))}}catch(H){Vt(t,t.return,H)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function A_(t,i,o){He=t,Yh(t)}function Yh(t,i,o){for(var l=(t.mode&1)!==0;He!==null;){var u=He,p=u.child;if(u.tag===22&&l){var w=u.memoizedState!==null||Ia;if(!w){var U=u.alternate,H=U!==null&&U.memoizedState!==null||fn;U=Ia;var de=fn;if(Ia=w,(fn=H)&&!de)for(He=u;He!==null;)w=He,H=w.child,w.tag===22&&w.memoizedState!==null?Kh(u):H!==null?(H.return=w,He=H):Kh(u);for(;p!==null;)He=p,Yh(p),p=p.sibling;He=u,Ia=U,fn=de}qh(t)}else(u.subtreeFlags&8772)!==0&&p!==null?(p.return=u,He=p):qh(t)}}function qh(t){for(;He!==null;){var i=He;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:fn||Ua(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!fn)if(o===null)l.componentDidMount();else{var u=i.elementType===i.type?o.memoizedProps:ni(i.type,o.memoizedProps);l.componentDidUpdate(u,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&$f(i,p,l);break;case 3:var w=i.updateQueue;if(w!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}$f(i,w,o)}break;case 5:var U=i.stateNode;if(o===null&&i.flags&4){o=U;var H=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&o.focus();break;case"img":H.src&&(o.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var de=i.alternate;if(de!==null){var Te=de.memoizedState;if(Te!==null){var Ae=Te.dehydrated;Ae!==null&&so(Ae)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}fn||i.flags&512&&Zc(i)}catch(Ee){Vt(i,i.return,Ee)}}if(i===t){He=null;break}if(o=i.sibling,o!==null){o.return=i.return,He=o;break}He=i.return}}function $h(t){for(;He!==null;){var i=He;if(i===t){He=null;break}var o=i.sibling;if(o!==null){o.return=i.return,He=o;break}He=i.return}}function Kh(t){for(;He!==null;){var i=He;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Ua(4,i)}catch(H){Vt(i,o,H)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var u=i.return;try{l.componentDidMount()}catch(H){Vt(i,u,H)}}var p=i.return;try{Zc(i)}catch(H){Vt(i,p,H)}break;case 5:var w=i.return;try{Zc(i)}catch(H){Vt(i,w,H)}}}catch(H){Vt(i,i.return,H)}if(i===t){He=null;break}var U=i.sibling;if(U!==null){U.return=i.return,He=U;break}He=i.return}}var C_=Math.ceil,Fa=D.ReactCurrentDispatcher,eu=D.ReactCurrentOwner,jn=D.ReactCurrentBatchConfig,St=0,nn=null,Yt=null,ln=0,On=0,xs=Zi(0),Kt=0,bo=null,Lr=0,Oa=0,tu=0,Po=null,bn=null,nu=0,ys=1/0,bi=null,ka=!1,iu=null,ir=null,za=!1,rr=null,Ba=0,Lo=0,ru=null,Ha=-1,Va=0;function vn(){return(St&6)!==0?Ie():Ha!==-1?Ha:Ha=Ie()}function sr(t){return(t.mode&1)===0?1:(St&2)!==0&&ln!==0?ln&-ln:u_.transition!==null?(Va===0&&(Va=Zo()),Va):(t=Tt,t!==0||(t=window.event,t=t===void 0?16:Zd(t.type)),t)}function si(t,i,o,l){if(50<Lo)throw Lo=0,ru=null,Error(n(185));eo(t,o,l),((St&2)===0||t!==nn)&&(t===nn&&((St&2)===0&&(Oa|=o),Kt===4&&or(t,ln)),Pn(t,l),o===1&&St===0&&(i.mode&1)===0&&(ys=Ie()+500,ga&&Ji()))}function Pn(t,i){var o=t.callbackNode;Tn(t,i);var l=Nn(t,t===nn?ln:0);if(l===0)o!==null&&Ne(o),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(o!=null&&Ne(o),i===1)t.tag===0?c_(Qh.bind(null,t)):Of(Qh.bind(null,t)),s_(function(){(St&6)===0&&Ji()}),o=null;else{switch(Gd(l)){case 1:o=st;break;case 4:o=tt;break;case 16:o=xt;break;case 536870912:o=Pt;break;default:o=xt}o=op(o,Zh.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function Zh(t,i){if(Ha=-1,Va=0,(St&6)!==0)throw Error(n(327));var o=t.callbackNode;if(Ss()&&t.callbackNode!==o)return null;var l=Nn(t,t===nn?ln:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Ga(t,l);else{i=l;var u=St;St|=2;var p=ep();(nn!==t||ln!==i)&&(bi=null,ys=Ie()+500,Nr(t,i));do try{P_();break}catch(U){Jh(t,U)}while(!0);Mc(),Fa.current=p,St=u,Yt!==null?i=0:(nn=null,ln=0,i=Kt)}if(i!==0){if(i===2&&(u=Er(t),u!==0&&(l=u,i=su(t,u))),i===1)throw o=bo,Nr(t,0),or(t,l),Pn(t,Ie()),o;if(i===6)or(t,l);else{if(u=t.current.alternate,(l&30)===0&&!R_(u)&&(i=Ga(t,l),i===2&&(p=Er(t),p!==0&&(l=p,i=su(t,p))),i===1))throw o=bo,Nr(t,0),or(t,l),Pn(t,Ie()),o;switch(t.finishedWork=u,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Ir(t,bn,bi);break;case 3:if(or(t,l),(l&130023424)===l&&(i=nu+500-Ie(),10<i)){if(Nn(t,0)!==0)break;if(u=t.suspendedLanes,(u&l)!==l){vn(),t.pingedLanes|=t.suspendedLanes&u;break}t.timeoutHandle=dc(Ir.bind(null,t,bn,bi),i);break}Ir(t,bn,bi);break;case 4:if(or(t,l),(l&4194240)===l)break;for(i=t.eventTimes,u=-1;0<l;){var w=31-wt(l);p=1<<w,w=i[w],w>u&&(u=w),l&=~p}if(l=u,l=Ie()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*C_(l/1960))-l,10<l){t.timeoutHandle=dc(Ir.bind(null,t,bn,bi),l);break}Ir(t,bn,bi);break;case 5:Ir(t,bn,bi);break;default:throw Error(n(329))}}}return Pn(t,Ie()),t.callbackNode===o?Zh.bind(null,t):null}function su(t,i){var o=Po;return t.current.memoizedState.isDehydrated&&(Nr(t,i).flags|=256),t=Ga(t,i),t!==2&&(i=bn,bn=o,i!==null&&ou(i)),t}function ou(t){bn===null?bn=t:bn.push.apply(bn,t)}function R_(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var u=o[l],p=u.getSnapshot;u=u.value;try{if(!ei(p(),u))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function or(t,i){for(i&=~tu,i&=~Oa,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-wt(i),l=1<<o;t[o]=-1,i&=~l}}function Qh(t){if((St&6)!==0)throw Error(n(327));Ss();var i=Nn(t,0);if((i&1)===0)return Pn(t,Ie()),null;var o=Ga(t,i);if(t.tag!==0&&o===2){var l=Er(t);l!==0&&(i=l,o=su(t,l))}if(o===1)throw o=bo,Nr(t,0),or(t,i),Pn(t,Ie()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Ir(t,bn,bi),Pn(t,Ie()),null}function au(t,i){var o=St;St|=1;try{return t(i)}finally{St=o,St===0&&(ys=Ie()+500,ga&&Ji())}}function Dr(t){rr!==null&&rr.tag===0&&(St&6)===0&&Ss();var i=St;St|=1;var o=jn.transition,l=Tt;try{if(jn.transition=null,Tt=1,t)return t()}finally{Tt=l,jn.transition=o,St=i,(St&6)===0&&Ji()}}function lu(){On=xs.current,Dt(xs)}function Nr(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,r_(o)),Yt!==null)for(o=Yt.return;o!==null;){var l=o;switch(_c(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&pa();break;case 3:gs(),Dt(An),Dt(cn),Pc();break;case 5:Rc(l);break;case 4:gs();break;case 13:Dt(zt);break;case 19:Dt(zt);break;case 10:Ec(l.type._context);break;case 22:case 23:lu()}o=o.return}if(nn=t,Yt=t=ar(t.current,null),ln=On=i,Kt=0,bo=null,tu=Oa=Lr=0,bn=Po=null,Rr!==null){for(i=0;i<Rr.length;i++)if(o=Rr[i],l=o.interleaved,l!==null){o.interleaved=null;var u=l.next,p=o.pending;if(p!==null){var w=p.next;p.next=u,l.next=w}o.pending=l}Rr=null}return t}function Jh(t,i){do{var o=Yt;try{if(Mc(),Aa.current=Pa,Ca){for(var l=Bt.memoizedState;l!==null;){var u=l.queue;u!==null&&(u.pending=null),l=l.next}Ca=!1}if(Pr=0,tn=$t=Bt=null,Eo=!1,wo=0,eu.current=null,o===null||o.return===null){Kt=1,bo=i,Yt=null;break}e:{var p=t,w=o.return,U=o,H=i;if(i=ln,U.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var de=H,Te=U,Ae=Te.tag;if((Te.mode&1)===0&&(Ae===0||Ae===11||Ae===15)){var Ee=Te.alternate;Ee?(Te.updateQueue=Ee.updateQueue,Te.memoizedState=Ee.memoizedState,Te.lanes=Ee.lanes):(Te.updateQueue=null,Te.memoizedState=null)}var ke=wh(w);if(ke!==null){ke.flags&=-257,Th(ke,w,U,p,i),ke.mode&1&&Eh(p,de,i),i=ke,H=de;var Ge=i.updateQueue;if(Ge===null){var je=new Set;je.add(H),i.updateQueue=je}else Ge.add(H);break e}else{if((i&1)===0){Eh(p,de,i),cu();break e}H=Error(n(426))}}else if(Ft&&U.mode&1){var Wt=wh(w);if(Wt!==null){(Wt.flags&65536)===0&&(Wt.flags|=256),Th(Wt,w,U,p,i),yc(_s(H,U));break e}}p=H=_s(H,U),Kt!==4&&(Kt=2),Po===null?Po=[p]:Po.push(p),p=w;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var Q=Sh(p,H,i);qf(p,Q);break e;case 1:U=H;var G=p.type,re=p.stateNode;if((p.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||re!==null&&typeof re.componentDidCatch=="function"&&(ir===null||!ir.has(re)))){p.flags|=65536,i&=-i,p.lanes|=i;var Le=Mh(p,U,i);qf(p,Le);break e}}p=p.return}while(p!==null)}np(o)}catch(qe){i=qe,Yt===o&&o!==null&&(Yt=o=o.return);continue}break}while(!0)}function ep(){var t=Fa.current;return Fa.current=Pa,t===null?Pa:t}function cu(){(Kt===0||Kt===3||Kt===2)&&(Kt=4),nn===null||(Lr&268435455)===0&&(Oa&268435455)===0||or(nn,ln)}function Ga(t,i){var o=St;St|=2;var l=ep();(nn!==t||ln!==i)&&(bi=null,Nr(t,i));do try{b_();break}catch(u){Jh(t,u)}while(!0);if(Mc(),St=o,Fa.current=l,Yt!==null)throw Error(n(261));return nn=null,ln=0,Kt}function b_(){for(;Yt!==null;)tp(Yt)}function P_(){for(;Yt!==null&&!Oe();)tp(Yt)}function tp(t){var i=sp(t.alternate,t,On);t.memoizedProps=t.pendingProps,i===null?np(t):Yt=i,eu.current=null}function np(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=M_(o,i,On),o!==null){Yt=o;return}}else{if(o=E_(o,i),o!==null){o.flags&=32767,Yt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Kt=6,Yt=null;return}}if(i=i.sibling,i!==null){Yt=i;return}Yt=i=t}while(i!==null);Kt===0&&(Kt=5)}function Ir(t,i,o){var l=Tt,u=jn.transition;try{jn.transition=null,Tt=1,L_(t,i,o,l)}finally{jn.transition=u,Tt=l}return null}function L_(t,i,o,l){do Ss();while(rr!==null);if((St&6)!==0)throw Error(n(327));o=t.finishedWork;var u=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var p=o.lanes|o.childLanes;if(dg(t,p),t===nn&&(Yt=nn=null,ln=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||za||(za=!0,op(xt,function(){return Ss(),null})),p=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||p){p=jn.transition,jn.transition=null;var w=Tt;Tt=1;var U=St;St|=4,eu.current=null,T_(t,o),jh(o,t),Zg(cc),ea=!!lc,cc=lc=null,t.current=o,A_(o),Xe(),St=U,Tt=w,jn.transition=p}else t.current=o;if(za&&(za=!1,rr=t,Ba=u),p=t.pendingLanes,p===0&&(ir=null),Ke(o.stateNode),Pn(t,Ie()),i!==null)for(l=t.onRecoverableError,o=0;o<i.length;o++)u=i[o],l(u.value,{componentStack:u.stack,digest:u.digest});if(ka)throw ka=!1,t=iu,iu=null,t;return(Ba&1)!==0&&t.tag!==0&&Ss(),p=t.pendingLanes,(p&1)!==0?t===ru?Lo++:(Lo=0,ru=t):Lo=0,Ji(),null}function Ss(){if(rr!==null){var t=Gd(Ba),i=jn.transition,o=Tt;try{if(jn.transition=null,Tt=16>t?16:t,rr===null)var l=!1;else{if(t=rr,rr=null,Ba=0,(St&6)!==0)throw Error(n(331));var u=St;for(St|=4,He=t.current;He!==null;){var p=He,w=p.child;if((He.flags&16)!==0){var U=p.deletions;if(U!==null){for(var H=0;H<U.length;H++){var de=U[H];for(He=de;He!==null;){var Te=He;switch(Te.tag){case 0:case 11:case 15:Ro(8,Te,p)}var Ae=Te.child;if(Ae!==null)Ae.return=Te,He=Ae;else for(;He!==null;){Te=He;var Ee=Te.sibling,ke=Te.return;if(Hh(Te),Te===de){He=null;break}if(Ee!==null){Ee.return=ke,He=Ee;break}He=ke}}}var Ge=p.alternate;if(Ge!==null){var je=Ge.child;if(je!==null){Ge.child=null;do{var Wt=je.sibling;je.sibling=null,je=Wt}while(je!==null)}}He=p}}if((p.subtreeFlags&2064)!==0&&w!==null)w.return=p,He=w;else e:for(;He!==null;){if(p=He,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Ro(9,p,p.return)}var Q=p.sibling;if(Q!==null){Q.return=p.return,He=Q;break e}He=p.return}}var G=t.current;for(He=G;He!==null;){w=He;var re=w.child;if((w.subtreeFlags&2064)!==0&&re!==null)re.return=w,He=re;else e:for(w=G;He!==null;){if(U=He,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:Ua(9,U)}}catch(qe){Vt(U,U.return,qe)}if(U===w){He=null;break e}var Le=U.sibling;if(Le!==null){Le.return=U.return,He=Le;break e}He=U.return}}if(St=u,Ji(),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(Jt,t)}catch{}l=!0}return l}finally{Tt=o,jn.transition=i}}return!1}function ip(t,i,o){i=_s(o,i),i=Sh(t,i,1),t=tr(t,i,1),i=vn(),t!==null&&(eo(t,1,i),Pn(t,i))}function Vt(t,i,o){if(t.tag===3)ip(t,t,o);else for(;i!==null;){if(i.tag===3){ip(i,t,o);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ir===null||!ir.has(l))){t=_s(o,t),t=Mh(i,t,1),i=tr(i,t,1),t=vn(),i!==null&&(eo(i,1,t),Pn(i,t));break}}i=i.return}}function D_(t,i,o){var l=t.pingCache;l!==null&&l.delete(i),i=vn(),t.pingedLanes|=t.suspendedLanes&o,nn===t&&(ln&o)===o&&(Kt===4||Kt===3&&(ln&130023424)===ln&&500>Ie()-nu?Nr(t,0):tu|=o),Pn(t,i)}function rp(t,i){i===0&&((t.mode&1)===0?i=1:(i=Gi,Gi<<=1,(Gi&130023424)===0&&(Gi=4194304)));var o=vn();t=Ai(t,i),t!==null&&(eo(t,i,o),Pn(t,o))}function N_(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),rp(t,o)}function I_(t,i){var o=0;switch(t.tag){case 13:var l=t.stateNode,u=t.memoizedState;u!==null&&(o=u.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),rp(t,o)}var sp;sp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||An.current)Rn=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return Rn=!1,S_(t,i,o);Rn=(t.flags&131072)!==0}else Rn=!1,Ft&&(i.flags&1048576)!==0&&kf(i,va,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Na(t,i),t=i.pendingProps;var u=cs(i,cn.current);ms(i,o),u=Nc(null,i,l,t,u,o);var p=Ic();return i.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Cn(l)?(p=!0,ma(i)):p=!1,i.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,Ac(i),u.updater=La,i.stateNode=u,u._reactInternals=i,Bc(i,l,t,o),i=Wc(null,i,l,!0,p,o)):(i.tag=0,Ft&&p&&gc(i),_n(null,i,u,o),i=i.child),i;case 16:l=i.elementType;e:{switch(Na(t,i),t=i.pendingProps,u=l._init,l=u(l._payload),i.type=l,u=i.tag=F_(l),t=ni(l,t),u){case 0:i=Gc(null,i,l,t,o);break e;case 1:i=Lh(null,i,l,t,o);break e;case 11:i=Ah(null,i,l,t,o);break e;case 14:i=Ch(null,i,l,ni(l.type,t),o);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:ni(l,u),Gc(t,i,l,u,o);case 1:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:ni(l,u),Lh(t,i,l,u,o);case 3:e:{if(Dh(i),t===null)throw Error(n(387));l=i.pendingProps,p=i.memoizedState,u=p.element,Yf(t,i),wa(i,l,null,o);var w=i.memoizedState;if(l=w.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){u=_s(Error(n(423)),i),i=Nh(t,i,l,o,u);break e}else if(l!==u){u=_s(Error(n(424)),i),i=Nh(t,i,l,o,u);break e}else for(Fn=Ki(i.stateNode.containerInfo.firstChild),Un=i,Ft=!0,ti=null,o=Xf(i,null,l,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(fs(),l===u){i=Ri(t,i,o);break e}_n(t,i,l,o)}i=i.child}return i;case 5:return Kf(i),t===null&&xc(i),l=i.type,u=i.pendingProps,p=t!==null?t.memoizedProps:null,w=u.children,uc(l,u)?w=null:p!==null&&uc(l,p)&&(i.flags|=32),Ph(t,i),_n(t,i,w,o),i.child;case 6:return t===null&&xc(i),null;case 13:return Ih(t,i,o);case 4:return Cc(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=hs(i,null,l,o):_n(t,i,l,o),i.child;case 11:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:ni(l,u),Ah(t,i,l,u,o);case 7:return _n(t,i,i.pendingProps,o),i.child;case 8:return _n(t,i,i.pendingProps.children,o),i.child;case 12:return _n(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(l=i.type._context,u=i.pendingProps,p=i.memoizedProps,w=u.value,bt(Sa,l._currentValue),l._currentValue=w,p!==null)if(ei(p.value,w)){if(p.children===u.children&&!An.current){i=Ri(t,i,o);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var U=p.dependencies;if(U!==null){w=p.child;for(var H=U.firstContext;H!==null;){if(H.context===l){if(p.tag===1){H=Ci(-1,o&-o),H.tag=2;var de=p.updateQueue;if(de!==null){de=de.shared;var Te=de.pending;Te===null?H.next=H:(H.next=Te.next,Te.next=H),de.pending=H}}p.lanes|=o,H=p.alternate,H!==null&&(H.lanes|=o),wc(p.return,o,i),U.lanes|=o;break}H=H.next}}else if(p.tag===10)w=p.type===i.type?null:p.child;else if(p.tag===18){if(w=p.return,w===null)throw Error(n(341));w.lanes|=o,U=w.alternate,U!==null&&(U.lanes|=o),wc(w,o,i),w=p.sibling}else w=p.child;if(w!==null)w.return=p;else for(w=p;w!==null;){if(w===i){w=null;break}if(p=w.sibling,p!==null){p.return=w.return,w=p;break}w=w.return}p=w}_n(t,i,u.children,o),i=i.child}return i;case 9:return u=i.type,l=i.pendingProps.children,ms(i,o),u=Wn(u),l=l(u),i.flags|=1,_n(t,i,l,o),i.child;case 14:return l=i.type,u=ni(l,i.pendingProps),u=ni(l.type,u),Ch(t,i,l,u,o);case 15:return Rh(t,i,i.type,i.pendingProps,o);case 17:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:ni(l,u),Na(t,i),i.tag=1,Cn(l)?(t=!0,ma(i)):t=!1,ms(i,o),xh(i,l,u),Bc(i,l,u,o),Wc(null,i,l,!0,t,o);case 19:return Fh(t,i,o);case 22:return bh(t,i,o)}throw Error(n(156,i.tag))};function op(t,i){return $(t,i)}function U_(t,i,o,l){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(t,i,o,l){return new U_(t,i,o,l)}function uu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function F_(t){if(typeof t=="function")return uu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ge)return 11;if(t===ve)return 14}return 2}function ar(t,i){var o=t.alternate;return o===null?(o=Yn(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Wa(t,i,o,l,u,p){var w=2;if(l=t,typeof t=="function")uu(t)&&(w=1);else if(typeof t=="string")w=5;else e:switch(t){case O:return Ur(o.children,u,p,i);case K:w=8,u|=8;break;case L:return t=Yn(12,o,i,u|2),t.elementType=L,t.lanes=p,t;case ee:return t=Yn(13,o,i,u),t.elementType=ee,t.lanes=p,t;case _e:return t=Yn(19,o,i,u),t.elementType=_e,t.lanes=p,t;case j:return Xa(o,u,p,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case R:w=10;break e;case V:w=9;break e;case ge:w=11;break e;case ve:w=14;break e;case le:w=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Yn(w,o,i,u),i.elementType=t,i.type=l,i.lanes=p,i}function Ur(t,i,o,l){return t=Yn(7,t,l,i),t.lanes=o,t}function Xa(t,i,o,l){return t=Yn(22,t,l,i),t.elementType=j,t.lanes=o,t.stateNode={isHidden:!1},t}function du(t,i,o){return t=Yn(6,t,null,i),t.lanes=o,t}function fu(t,i,o){return i=Yn(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function O_(t,i,o,l,u){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jr(0),this.expirationTimes=Jr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jr(0),this.identifierPrefix=l,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function hu(t,i,o,l,u,p,w,U,H){return t=new O_(t,i,o,U,H),i===1?(i=1,p===!0&&(i|=8)):i=0,p=Yn(3,null,null,i),t.current=p,p.stateNode=t,p.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ac(p),t}function k_(t,i,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:B,key:l==null?null:""+l,children:t,containerInfo:i,implementation:o}}function ap(t){if(!t)return Qi;t=t._reactInternals;e:{if(Si(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Cn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(Cn(o))return Uf(t,o,i)}return i}function lp(t,i,o,l,u,p,w,U,H){return t=hu(o,l,!0,t,u,p,w,U,H),t.context=ap(null),o=t.current,l=vn(),u=sr(o),p=Ci(l,u),p.callback=i??null,tr(o,p,u),t.current.lanes=u,eo(t,u,l),Pn(t,l),t}function ja(t,i,o,l){var u=i.current,p=vn(),w=sr(u);return o=ap(o),i.context===null?i.context=o:i.pendingContext=o,i=Ci(p,w),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=tr(u,i,w),t!==null&&(si(t,u,w,p),Ea(t,u,w)),w}function Ya(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function cp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function pu(t,i){cp(t,i),(t=t.alternate)&&cp(t,i)}function z_(){return null}var up=typeof reportError=="function"?reportError:function(t){console.error(t)};function mu(t){this._internalRoot=t}qa.prototype.render=mu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));ja(t,i,null,null)},qa.prototype.unmount=mu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Dr(function(){ja(null,t,null,null)}),i[Mi]=null}};function qa(t){this._internalRoot=t}qa.prototype.unstable_scheduleHydration=function(t){if(t){var i=jd();t={blockedOn:null,target:t,priority:i};for(var o=0;o<Yi.length&&i!==0&&i<Yi[o].priority;o++);Yi.splice(o,0,t),o===0&&$d(t)}};function gu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function $a(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function dp(){}function B_(t,i,o,l,u){if(u){if(typeof l=="function"){var p=l;l=function(){var de=Ya(w);p.call(de)}}var w=lp(i,l,t,0,null,!1,!1,"",dp);return t._reactRootContainer=w,t[Mi]=w.current,mo(t.nodeType===8?t.parentNode:t),Dr(),w}for(;u=t.lastChild;)t.removeChild(u);if(typeof l=="function"){var U=l;l=function(){var de=Ya(H);U.call(de)}}var H=hu(t,0,!1,null,null,!1,!1,"",dp);return t._reactRootContainer=H,t[Mi]=H.current,mo(t.nodeType===8?t.parentNode:t),Dr(function(){ja(i,H,o,l)}),H}function Ka(t,i,o,l,u){var p=o._reactRootContainer;if(p){var w=p;if(typeof u=="function"){var U=u;u=function(){var H=Ya(w);U.call(H)}}ja(i,w,t,u)}else w=B_(o,i,t,u,l);return Ya(w)}Wd=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=Rt(i.pendingLanes);o!==0&&(Bl(i,o|1),Pn(i,Ie()),(St&6)===0&&(ys=Ie()+500,Ji()))}break;case 13:Dr(function(){var l=Ai(t,1);if(l!==null){var u=vn();si(l,t,1,u)}}),pu(t,1)}},Hl=function(t){if(t.tag===13){var i=Ai(t,134217728);if(i!==null){var o=vn();si(i,t,134217728,o)}pu(t,134217728)}},Xd=function(t){if(t.tag===13){var i=sr(t),o=Ai(t,i);if(o!==null){var l=vn();si(o,t,i,l)}pu(t,i)}},jd=function(){return Tt},Yd=function(t,i){var o=Tt;try{return Tt=t,i()}finally{Tt=o}},ae=function(t,i,o){switch(i){case"input":if(gt(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var l=o[i];if(l!==t&&l.form===t.form){var u=ha(l);if(!u)throw Error(n(90));k(l),gt(l,u)}}}break;case"textarea":ue(t,o);break;case"select":i=o.value,i!=null&&S(t,!!o.multiple,i,!1)}},Ht=au,_t=Dr;var H_={usingClientEntryPoint:!1,Events:[vo,as,ha,ot,It,au]},Do={findFiberByHostInstance:wr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},V_={bundleType:Do.bundleType,version:Do.version,rendererPackageName:Do.rendererPackageName,rendererConfig:Do.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:D.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ce(t),t===null?null:t.stateNode},findFiberByHostInstance:Do.findFiberByHostInstance||z_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Za=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Za.isDisabled&&Za.supportsFiber)try{Jt=Za.inject(V_),dt=Za}catch{}}return Ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H_,Ln.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gu(i))throw Error(n(200));return k_(t,i,null,o)},Ln.createRoot=function(t,i){if(!gu(t))throw Error(n(299));var o=!1,l="",u=up;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(u=i.onRecoverableError)),i=hu(t,1,!1,null,null,o,!1,l,u),t[Mi]=i.current,mo(t.nodeType===8?t.parentNode:t),new mu(i)},Ln.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=ce(i),t=t===null?null:t.stateNode,t},Ln.flushSync=function(t){return Dr(t)},Ln.hydrate=function(t,i,o){if(!$a(i))throw Error(n(200));return Ka(null,t,i,!0,o)},Ln.hydrateRoot=function(t,i,o){if(!gu(t))throw Error(n(405));var l=o!=null&&o.hydratedSources||null,u=!1,p="",w=up;if(o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onRecoverableError!==void 0&&(w=o.onRecoverableError)),i=lp(i,null,t,1,o??null,u,!1,p,w),t[Mi]=i.current,mo(t),l)for(t=0;t<l.length;t++)o=l[t],u=o._getVersion,u=u(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,u]:i.mutableSourceEagerHydrationData.push(o,u);return new qa(i)},Ln.render=function(t,i,o){if(!$a(i))throw Error(n(200));return Ka(null,t,i,!1,o)},Ln.unmountComponentAtNode=function(t){if(!$a(t))throw Error(n(40));return t._reactRootContainer?(Dr(function(){Ka(null,null,t,!1,function(){t._reactRootContainer=null,t[Mi]=null})}),!0):!1},Ln.unstable_batchedUpdates=au,Ln.unstable_renderSubtreeIntoContainer=function(t,i,o,l){if(!$a(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Ka(t,i,o,!1,l)},Ln.version="18.3.1-next-f1338f8080-20240426",Ln}var xp;function K_(){if(xp)return xu.exports;xp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),xu.exports=$_(),xu.exports}var yp;function Z_(){if(yp)return Qa;yp=1;var s=K_();return Qa.createRoot=s.createRoot,Qa.hydrateRoot=s.hydrateRoot,Qa}var Q_=Z_(),Xt=bd();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J_=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),e0=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase()),Sp=s=>{const e=e0(s);return e.charAt(0).toUpperCase()+e.slice(1)},Rm=(...s)=>s.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var t0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n0=Xt.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:a="",children:c,iconNode:f,...d},h)=>Xt.createElement("svg",{ref:h,...t0,width:e,height:e,stroke:s,strokeWidth:r?Number(n)*24/Number(e):n,className:Rm("lucide",a),...d},[...f.map(([m,g])=>Xt.createElement(m,g)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zr=(s,e)=>{const n=Xt.forwardRef(({className:r,...a},c)=>Xt.createElement(n0,{ref:c,iconNode:e,className:Rm(`lucide-${J_(Sp(s))}`,`lucide-${s}`,r),...a}));return n.displayName=Sp(s),n};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Mp=Zr("arrow-left",i0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r0=[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],Ep=Zr("camera",r0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s0=[["path",{d:"M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z",key:"1bo67w"}],["rect",{x:"3",y:"14",width:"7",height:"7",rx:"1",key:"1bkyp8"}],["circle",{cx:"17.5",cy:"17.5",r:"3.5",key:"w3z12y"}]],o0=Zr("shapes",s0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],l0=Zr("sparkles",a0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],u0=Zr("trash-2",c0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]],f0=Zr("upload",d0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],p0=Zr("x",h0);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pd="166",Ms={ROTATE:0,DOLLY:1,PAN:2},pi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},m0=0,wp=1,g0=2,bm=1,_0=2,Ui=3,zi=0,Mn=1,gi=2,_r=0,Gs=1,Tp=2,Ap=3,Cp=4,v0=5,Gr=100,x0=101,y0=102,S0=103,M0=104,E0=200,w0=201,T0=202,A0=203,$u=204,Ku=205,C0=206,R0=207,b0=208,P0=209,L0=210,D0=211,N0=212,I0=213,U0=214,F0=0,O0=1,k0=2,Rl=3,z0=4,B0=5,H0=6,V0=7,Pm=0,G0=1,W0=2,vr=0,X0=1,j0=2,Y0=3,q0=4,$0=5,K0=6,Z0=7,Lm=300,js=301,Ys=302,Zu=303,Qu=304,Il=306,Ju=1e3,jr=1001,ed=1002,Kn=1003,Q0=1004,Ja=1005,Sn=1006,Mu=1007,Yr=1008,Bi=1009,Dm=1010,Nm=1011,Vo=1012,Ld=1013,qr=1014,Fi=1015,Wo=1016,Dd=1017,Nd=1018,qs=1020,Im=35902,Um=1021,Fm=1022,ci=1023,Om=1024,km=1025,Ws=1026,$s=1027,zm=1028,Id=1029,Bm=1030,Ud=1031,Fd=1033,Ml=33776,El=33777,wl=33778,Tl=33779,td=35840,nd=35841,id=35842,rd=35843,sd=36196,od=37492,ad=37496,ld=37808,cd=37809,ud=37810,dd=37811,fd=37812,hd=37813,pd=37814,md=37815,gd=37816,_d=37817,vd=37818,xd=37819,yd=37820,Sd=37821,Al=36492,Md=36494,Ed=36495,Hm=36283,wd=36284,Td=36285,Ad=36286,J0=3200,ev=3201,tv=0,nv=1,gr="",$n="srgb",yr="srgb-linear",Od="display-p3",Ul="display-p3-linear",bl="linear",Nt="srgb",Pl="rec709",Ll="p3",Es=7680,Rp=519,iv=512,rv=513,sv=514,Vm=515,ov=516,av=517,lv=518,cv=519,bp=35044,Pp="300 es",Oi=2e3,Dl=2001;class Qr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const c=a.indexOf(n);c!==-1&&a.splice(c,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let c=0,f=a.length;c<f;c++)a[c].call(this,e);e.target=null}}}const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Lp=1234567;const zo=Math.PI/180,Go=180/Math.PI;function Zs(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(hn[s&255]+hn[s>>8&255]+hn[s>>16&255]+hn[s>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[n&63|128]+hn[n>>8&255]+"-"+hn[n>>16&255]+hn[n>>24&255]+hn[r&255]+hn[r>>8&255]+hn[r>>16&255]+hn[r>>24&255]).toLowerCase()}function mn(s,e,n){return Math.max(e,Math.min(n,s))}function kd(s,e){return(s%e+e)%e}function uv(s,e,n,r,a){return r+(s-e)*(a-r)/(n-e)}function dv(s,e,n){return s!==e?(n-s)/(e-s):0}function Bo(s,e,n){return(1-n)*s+n*e}function fv(s,e,n,r){return Bo(s,e,1-Math.exp(-n*r))}function hv(s,e=1){return e-Math.abs(kd(s,e*2)-e)}function pv(s,e,n){return s<=e?0:s>=n?1:(s=(s-e)/(n-e),s*s*(3-2*s))}function mv(s,e,n){return s<=e?0:s>=n?1:(s=(s-e)/(n-e),s*s*s*(s*(s*6-15)+10))}function gv(s,e){return s+Math.floor(Math.random()*(e-s+1))}function _v(s,e){return s+Math.random()*(e-s)}function vv(s){return s*(.5-Math.random())}function xv(s){s!==void 0&&(Lp=s);let e=Lp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function yv(s){return s*zo}function Sv(s){return s*Go}function Mv(s){return(s&s-1)===0&&s!==0}function Ev(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function wv(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Tv(s,e,n,r,a){const c=Math.cos,f=Math.sin,d=c(n/2),h=f(n/2),m=c((e+r)/2),g=f((e+r)/2),y=c((e-r)/2),x=f((e-r)/2),M=c((r-e)/2),T=f((r-e)/2);switch(a){case"XYX":s.set(d*g,h*y,h*x,d*m);break;case"YZY":s.set(h*x,d*g,h*y,d*m);break;case"ZXZ":s.set(h*y,h*x,d*g,d*m);break;case"XZX":s.set(d*g,h*T,h*M,d*m);break;case"YXY":s.set(h*M,d*g,h*T,d*m);break;case"ZYZ":s.set(h*T,h*M,d*g,d*m);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function Bs(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function xn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Wr={DEG2RAD:zo,RAD2DEG:Go,generateUUID:Zs,clamp:mn,euclideanModulo:kd,mapLinear:uv,inverseLerp:dv,lerp:Bo,damp:fv,pingpong:hv,smoothstep:pv,smootherstep:mv,randInt:gv,randFloat:_v,randFloatSpread:vv,seededRandom:xv,degToRad:yv,radToDeg:Sv,isPowerOfTwo:Mv,ceilPowerOfTwo:Ev,floorPowerOfTwo:wv,setQuaternionFromProperEuler:Tv,normalize:xn,denormalize:Bs};class ut{constructor(e=0,n=0){ut.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(mn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),c=this.x-e.x,f=this.y-e.y;return this.x=c*r-f*a+e.x,this.y=c*a+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ht{constructor(e,n,r,a,c,f,d,h,m){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,c,f,d,h,m)}set(e,n,r,a,c,f,d,h,m){const g=this.elements;return g[0]=e,g[1]=a,g[2]=d,g[3]=n,g[4]=c,g[5]=h,g[6]=r,g[7]=f,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,c=this.elements,f=r[0],d=r[3],h=r[6],m=r[1],g=r[4],y=r[7],x=r[2],M=r[5],T=r[8],A=a[0],v=a[3],_=a[6],F=a[1],P=a[4],D=a[7],Z=a[2],B=a[5],O=a[8];return c[0]=f*A+d*F+h*Z,c[3]=f*v+d*P+h*B,c[6]=f*_+d*D+h*O,c[1]=m*A+g*F+y*Z,c[4]=m*v+g*P+y*B,c[7]=m*_+g*D+y*O,c[2]=x*A+M*F+T*Z,c[5]=x*v+M*P+T*B,c[8]=x*_+M*D+T*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],f=e[4],d=e[5],h=e[6],m=e[7],g=e[8];return n*f*g-n*d*m-r*c*g+r*d*h+a*c*m-a*f*h}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],f=e[4],d=e[5],h=e[6],m=e[7],g=e[8],y=g*f-d*m,x=d*h-g*c,M=m*c-f*h,T=n*y+r*x+a*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=y*A,e[1]=(a*m-g*r)*A,e[2]=(d*r-a*f)*A,e[3]=x*A,e[4]=(g*n-a*h)*A,e[5]=(a*c-d*n)*A,e[6]=M*A,e[7]=(r*h-m*n)*A,e[8]=(f*n-r*c)*A,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,c,f,d){const h=Math.cos(c),m=Math.sin(c);return this.set(r*h,r*m,-r*(h*f+m*d)+f+e,-a*m,a*h,-a*(-m*f+h*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(Eu.makeScale(e,n)),this}rotate(e){return this.premultiply(Eu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Eu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Eu=new ht;function Gm(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Nl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Av(){const s=Nl("canvas");return s.style.display="block",s}const Dp={};function Wm(s){s in Dp||(Dp[s]=!0,console.warn(s))}function Cv(s,e,n){return new Promise(function(r,a){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}const Np=new ht().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ip=new ht().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),el={[yr]:{transfer:bl,primaries:Pl,toReference:s=>s,fromReference:s=>s},[$n]:{transfer:Nt,primaries:Pl,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Ul]:{transfer:bl,primaries:Ll,toReference:s=>s.applyMatrix3(Ip),fromReference:s=>s.applyMatrix3(Np)},[Od]:{transfer:Nt,primaries:Ll,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Ip),fromReference:s=>s.applyMatrix3(Np).convertLinearToSRGB()}},Rv=new Set([yr,Ul]),At={enabled:!0,_workingColorSpace:yr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Rv.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,n){if(this.enabled===!1||e===n||!e||!n)return s;const r=el[e].toReference,a=el[n].fromReference;return a(r(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return el[s].primaries},getTransfer:function(s){return s===gr?bl:el[s].transfer}};function Xs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function wu(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ws;class bv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ws===void 0&&(ws=Nl("canvas")),ws.width=e.width,ws.height=e.height;const r=ws.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=ws}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Nl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),c=a.data;for(let f=0;f<c.length;f++)c[f]=Xs(c[f]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Xs(n[r]/255)*255):n[r]=Xs(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Pv=0;class Xm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pv++}),this.uuid=Zs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let c;if(Array.isArray(a)){c=[];for(let f=0,d=a.length;f<d;f++)a[f].isDataTexture?c.push(Tu(a[f].image)):c.push(Tu(a[f]))}else c=Tu(a);r.url=c}return n||(e.images[this.uuid]=r),r}}function Tu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?bv.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Lv=0;class En extends Qr{constructor(e=En.DEFAULT_IMAGE,n=En.DEFAULT_MAPPING,r=jr,a=jr,c=Sn,f=Yr,d=ci,h=Bi,m=En.DEFAULT_ANISOTROPY,g=gr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lv++}),this.uuid=Zs(),this.name="",this.source=new Xm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=c,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=h,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ju:e.x=e.x-Math.floor(e.x);break;case jr:e.x=e.x<0?0:1;break;case ed:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ju:e.y=e.y-Math.floor(e.y);break;case jr:e.y=e.y<0?0:1;break;case ed:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=Lm;En.DEFAULT_ANISOTROPY=1;class on{constructor(e=0,n=0,r=0,a=1){on.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,c=this.w,f=e.elements;return this.x=f[0]*n+f[4]*r+f[8]*a+f[12]*c,this.y=f[1]*n+f[5]*r+f[9]*a+f[13]*c,this.z=f[2]*n+f[6]*r+f[10]*a+f[14]*c,this.w=f[3]*n+f[7]*r+f[11]*a+f[15]*c,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,c;const h=e.elements,m=h[0],g=h[4],y=h[8],x=h[1],M=h[5],T=h[9],A=h[2],v=h[6],_=h[10];if(Math.abs(g-x)<.01&&Math.abs(y-A)<.01&&Math.abs(T-v)<.01){if(Math.abs(g+x)<.1&&Math.abs(y+A)<.1&&Math.abs(T+v)<.1&&Math.abs(m+M+_-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const P=(m+1)/2,D=(M+1)/2,Z=(_+1)/2,B=(g+x)/4,O=(y+A)/4,K=(T+v)/4;return P>D&&P>Z?P<.01?(r=0,a=.707106781,c=.707106781):(r=Math.sqrt(P),a=B/r,c=O/r):D>Z?D<.01?(r=.707106781,a=0,c=.707106781):(a=Math.sqrt(D),r=B/a,c=K/a):Z<.01?(r=.707106781,a=.707106781,c=0):(c=Math.sqrt(Z),r=O/c,a=K/c),this.set(r,a,c,n),this}let F=Math.sqrt((v-T)*(v-T)+(y-A)*(y-A)+(x-g)*(x-g));return Math.abs(F)<.001&&(F=1),this.x=(v-T)/F,this.y=(y-A)/F,this.z=(x-g)/F,this.w=Math.acos((m+M+_-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Dv extends Qr{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new on(0,0,e,n),this.scissorTest=!1,this.viewport=new on(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new En(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,c=this.textures.length;a<c;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Xm(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $r extends Dv{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class jm extends En{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Kn,this.minFilter=Kn,this.wrapR=jr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Nv extends En{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Kn,this.minFilter=Kn,this.wrapR=jr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Kr{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,c,f,d){let h=r[a+0],m=r[a+1],g=r[a+2],y=r[a+3];const x=c[f+0],M=c[f+1],T=c[f+2],A=c[f+3];if(d===0){e[n+0]=h,e[n+1]=m,e[n+2]=g,e[n+3]=y;return}if(d===1){e[n+0]=x,e[n+1]=M,e[n+2]=T,e[n+3]=A;return}if(y!==A||h!==x||m!==M||g!==T){let v=1-d;const _=h*x+m*M+g*T+y*A,F=_>=0?1:-1,P=1-_*_;if(P>Number.EPSILON){const Z=Math.sqrt(P),B=Math.atan2(Z,_*F);v=Math.sin(v*B)/Z,d=Math.sin(d*B)/Z}const D=d*F;if(h=h*v+x*D,m=m*v+M*D,g=g*v+T*D,y=y*v+A*D,v===1-d){const Z=1/Math.sqrt(h*h+m*m+g*g+y*y);h*=Z,m*=Z,g*=Z,y*=Z}}e[n]=h,e[n+1]=m,e[n+2]=g,e[n+3]=y}static multiplyQuaternionsFlat(e,n,r,a,c,f){const d=r[a],h=r[a+1],m=r[a+2],g=r[a+3],y=c[f],x=c[f+1],M=c[f+2],T=c[f+3];return e[n]=d*T+g*y+h*M-m*x,e[n+1]=h*T+g*x+m*y-d*M,e[n+2]=m*T+g*M+d*x-h*y,e[n+3]=g*T-d*y-h*x-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,c=e._z,f=e._order,d=Math.cos,h=Math.sin,m=d(r/2),g=d(a/2),y=d(c/2),x=h(r/2),M=h(a/2),T=h(c/2);switch(f){case"XYZ":this._x=x*g*y+m*M*T,this._y=m*M*y-x*g*T,this._z=m*g*T+x*M*y,this._w=m*g*y-x*M*T;break;case"YXZ":this._x=x*g*y+m*M*T,this._y=m*M*y-x*g*T,this._z=m*g*T-x*M*y,this._w=m*g*y+x*M*T;break;case"ZXY":this._x=x*g*y-m*M*T,this._y=m*M*y+x*g*T,this._z=m*g*T+x*M*y,this._w=m*g*y-x*M*T;break;case"ZYX":this._x=x*g*y-m*M*T,this._y=m*M*y+x*g*T,this._z=m*g*T-x*M*y,this._w=m*g*y+x*M*T;break;case"YZX":this._x=x*g*y+m*M*T,this._y=m*M*y+x*g*T,this._z=m*g*T-x*M*y,this._w=m*g*y-x*M*T;break;case"XZY":this._x=x*g*y-m*M*T,this._y=m*M*y-x*g*T,this._z=m*g*T+x*M*y,this._w=m*g*y+x*M*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],c=n[8],f=n[1],d=n[5],h=n[9],m=n[2],g=n[6],y=n[10],x=r+d+y;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(g-h)*M,this._y=(c-m)*M,this._z=(f-a)*M}else if(r>d&&r>y){const M=2*Math.sqrt(1+r-d-y);this._w=(g-h)/M,this._x=.25*M,this._y=(a+f)/M,this._z=(c+m)/M}else if(d>y){const M=2*Math.sqrt(1+d-r-y);this._w=(c-m)/M,this._x=(a+f)/M,this._y=.25*M,this._z=(h+g)/M}else{const M=2*Math.sqrt(1+y-r-d);this._w=(f-a)/M,this._x=(c+m)/M,this._y=(h+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mn(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,c=e._z,f=e._w,d=n._x,h=n._y,m=n._z,g=n._w;return this._x=r*g+f*d+a*m-c*h,this._y=a*g+f*h+c*d-r*m,this._z=c*g+f*m+r*h-a*d,this._w=f*g-r*d-a*h-c*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,c=this._z,f=this._w;let d=f*e._w+r*e._x+a*e._y+c*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=f,this._x=r,this._y=a,this._z=c,this;const h=1-d*d;if(h<=Number.EPSILON){const M=1-n;return this._w=M*f+n*this._w,this._x=M*r+n*this._x,this._y=M*a+n*this._y,this._z=M*c+n*this._z,this.normalize(),this}const m=Math.sqrt(h),g=Math.atan2(m,d),y=Math.sin((1-n)*g)/m,x=Math.sin(n*g)/m;return this._w=f*y+this._w*x,this._x=r*y+this._x*x,this._y=a*y+this._y*x,this._z=c*y+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ne{constructor(e=0,n=0,r=0){ne.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Up.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Up.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*a,this.y=c[1]*n+c[4]*r+c[7]*a,this.z=c[2]*n+c[5]*r+c[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,c=e.elements,f=1/(c[3]*n+c[7]*r+c[11]*a+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*a+c[12])*f,this.y=(c[1]*n+c[5]*r+c[9]*a+c[13])*f,this.z=(c[2]*n+c[6]*r+c[10]*a+c[14])*f,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,c=e.x,f=e.y,d=e.z,h=e.w,m=2*(f*a-d*r),g=2*(d*n-c*a),y=2*(c*r-f*n);return this.x=n+h*m+f*y-d*g,this.y=r+h*g+d*m-c*y,this.z=a+h*y+c*g-f*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*a,this.y=c[1]*n+c[5]*r+c[9]*a,this.z=c[2]*n+c[6]*r+c[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,c=e.z,f=n.x,d=n.y,h=n.z;return this.x=a*h-c*d,this.y=c*f-r*h,this.z=r*d-a*f,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Au.copy(this).projectOnVector(e),this.sub(Au)}reflect(e){return this.sub(Au.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(mn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Au=new ne,Up=new Kr;class Xo{constructor(e=new ne(1/0,1/0,1/0),n=new ne(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(oi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(oi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=oi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,oi):oi.fromBufferAttribute(c,f),oi.applyMatrix4(e.matrixWorld),this.expandByPoint(oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),tl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),tl.copy(r.boundingBox)),tl.applyMatrix4(e.matrixWorld),this.union(tl)}const a=e.children;for(let c=0,f=a.length;c<f;c++)this.expandByObject(a[c],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,oi),oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Io),nl.subVectors(this.max,Io),Ts.subVectors(e.a,Io),As.subVectors(e.b,Io),Cs.subVectors(e.c,Io),cr.subVectors(As,Ts),ur.subVectors(Cs,As),Fr.subVectors(Ts,Cs);let n=[0,-cr.z,cr.y,0,-ur.z,ur.y,0,-Fr.z,Fr.y,cr.z,0,-cr.x,ur.z,0,-ur.x,Fr.z,0,-Fr.x,-cr.y,cr.x,0,-ur.y,ur.x,0,-Fr.y,Fr.x,0];return!Cu(n,Ts,As,Cs,nl)||(n=[1,0,0,0,1,0,0,0,1],!Cu(n,Ts,As,Cs,nl))?!1:(il.crossVectors(cr,ur),n=[il.x,il.y,il.z],Cu(n,Ts,As,Cs,nl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Pi=[new ne,new ne,new ne,new ne,new ne,new ne,new ne,new ne],oi=new ne,tl=new Xo,Ts=new ne,As=new ne,Cs=new ne,cr=new ne,ur=new ne,Fr=new ne,Io=new ne,nl=new ne,il=new ne,Or=new ne;function Cu(s,e,n,r,a){for(let c=0,f=s.length-3;c<=f;c+=3){Or.fromArray(s,c);const d=a.x*Math.abs(Or.x)+a.y*Math.abs(Or.y)+a.z*Math.abs(Or.z),h=e.dot(Or),m=n.dot(Or),g=r.dot(Or);if(Math.max(-Math.max(h,m,g),Math.min(h,m,g))>d)return!1}return!0}const Iv=new Xo,Uo=new ne,Ru=new ne;class zd{constructor(e=new ne,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):Iv.setFromPoints(e).getCenter(r);let a=0;for(let c=0,f=e.length;c<f;c++)a=Math.max(a,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Uo.subVectors(e,this.center);const n=Uo.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Uo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ru.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Uo.copy(e.center).add(Ru)),this.expandByPoint(Uo.copy(e.center).sub(Ru))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Li=new ne,bu=new ne,rl=new ne,dr=new ne,Pu=new ne,sl=new ne,Lu=new ne;class Bd{constructor(e=new ne,n=new ne(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Li.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,n),Li.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){bu.copy(e).add(n).multiplyScalar(.5),rl.copy(n).sub(e).normalize(),dr.copy(this.origin).sub(bu);const c=e.distanceTo(n)*.5,f=-this.direction.dot(rl),d=dr.dot(this.direction),h=-dr.dot(rl),m=dr.lengthSq(),g=Math.abs(1-f*f);let y,x,M,T;if(g>0)if(y=f*h-d,x=f*d-h,T=c*g,y>=0)if(x>=-T)if(x<=T){const A=1/g;y*=A,x*=A,M=y*(y+f*x+2*d)+x*(f*y+x+2*h)+m}else x=c,y=Math.max(0,-(f*x+d)),M=-y*y+x*(x+2*h)+m;else x=-c,y=Math.max(0,-(f*x+d)),M=-y*y+x*(x+2*h)+m;else x<=-T?(y=Math.max(0,-(-f*c+d)),x=y>0?-c:Math.min(Math.max(-c,-h),c),M=-y*y+x*(x+2*h)+m):x<=T?(y=0,x=Math.min(Math.max(-c,-h),c),M=x*(x+2*h)+m):(y=Math.max(0,-(f*c+d)),x=y>0?c:Math.min(Math.max(-c,-h),c),M=-y*y+x*(x+2*h)+m);else x=f>0?-c:c,y=Math.max(0,-(f*x+d)),M=-y*y+x*(x+2*h)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,y),a&&a.copy(bu).addScaledVector(rl,x),M}intersectSphere(e,n){Li.subVectors(e.center,this.origin);const r=Li.dot(this.direction),a=Li.dot(Li)-r*r,c=e.radius*e.radius;if(a>c)return null;const f=Math.sqrt(c-a),d=r-f,h=r+f;return h<0?null:d<0?this.at(h,n):this.at(d,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,c,f,d,h;const m=1/this.direction.x,g=1/this.direction.y,y=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,a=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,a=(e.min.x-x.x)*m),g>=0?(c=(e.min.y-x.y)*g,f=(e.max.y-x.y)*g):(c=(e.max.y-x.y)*g,f=(e.min.y-x.y)*g),r>f||c>a||((c>r||isNaN(r))&&(r=c),(f<a||isNaN(a))&&(a=f),y>=0?(d=(e.min.z-x.z)*y,h=(e.max.z-x.z)*y):(d=(e.max.z-x.z)*y,h=(e.min.z-x.z)*y),r>h||d>a)||((d>r||r!==r)&&(r=d),(h<a||a!==a)&&(a=h),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,n,r,a,c){Pu.subVectors(n,e),sl.subVectors(r,e),Lu.crossVectors(Pu,sl);let f=this.direction.dot(Lu),d;if(f>0){if(a)return null;d=1}else if(f<0)d=-1,f=-f;else return null;dr.subVectors(this.origin,e);const h=d*this.direction.dot(sl.crossVectors(dr,sl));if(h<0)return null;const m=d*this.direction.dot(Pu.cross(dr));if(m<0||h+m>f)return null;const g=-d*dr.dot(Lu);return g<0?null:this.at(g/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jt{constructor(e,n,r,a,c,f,d,h,m,g,y,x,M,T,A,v){jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,c,f,d,h,m,g,y,x,M,T,A,v)}set(e,n,r,a,c,f,d,h,m,g,y,x,M,T,A,v){const _=this.elements;return _[0]=e,_[4]=n,_[8]=r,_[12]=a,_[1]=c,_[5]=f,_[9]=d,_[13]=h,_[2]=m,_[6]=g,_[10]=y,_[14]=x,_[3]=M,_[7]=T,_[11]=A,_[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/Rs.setFromMatrixColumn(e,0).length(),c=1/Rs.setFromMatrixColumn(e,1).length(),f=1/Rs.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*f,n[9]=r[9]*f,n[10]=r[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,c=e.z,f=Math.cos(r),d=Math.sin(r),h=Math.cos(a),m=Math.sin(a),g=Math.cos(c),y=Math.sin(c);if(e.order==="XYZ"){const x=f*g,M=f*y,T=d*g,A=d*y;n[0]=h*g,n[4]=-h*y,n[8]=m,n[1]=M+T*m,n[5]=x-A*m,n[9]=-d*h,n[2]=A-x*m,n[6]=T+M*m,n[10]=f*h}else if(e.order==="YXZ"){const x=h*g,M=h*y,T=m*g,A=m*y;n[0]=x+A*d,n[4]=T*d-M,n[8]=f*m,n[1]=f*y,n[5]=f*g,n[9]=-d,n[2]=M*d-T,n[6]=A+x*d,n[10]=f*h}else if(e.order==="ZXY"){const x=h*g,M=h*y,T=m*g,A=m*y;n[0]=x-A*d,n[4]=-f*y,n[8]=T+M*d,n[1]=M+T*d,n[5]=f*g,n[9]=A-x*d,n[2]=-f*m,n[6]=d,n[10]=f*h}else if(e.order==="ZYX"){const x=f*g,M=f*y,T=d*g,A=d*y;n[0]=h*g,n[4]=T*m-M,n[8]=x*m+A,n[1]=h*y,n[5]=A*m+x,n[9]=M*m-T,n[2]=-m,n[6]=d*h,n[10]=f*h}else if(e.order==="YZX"){const x=f*h,M=f*m,T=d*h,A=d*m;n[0]=h*g,n[4]=A-x*y,n[8]=T*y+M,n[1]=y,n[5]=f*g,n[9]=-d*g,n[2]=-m*g,n[6]=M*y+T,n[10]=x-A*y}else if(e.order==="XZY"){const x=f*h,M=f*m,T=d*h,A=d*m;n[0]=h*g,n[4]=-y,n[8]=m*g,n[1]=x*y+A,n[5]=f*g,n[9]=M*y-T,n[2]=T*y-M,n[6]=d*g,n[10]=A*y+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Uv,e,Fv)}lookAt(e,n,r){const a=this.elements;return kn.subVectors(e,n),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),fr.crossVectors(r,kn),fr.lengthSq()===0&&(Math.abs(r.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),fr.crossVectors(r,kn)),fr.normalize(),ol.crossVectors(kn,fr),a[0]=fr.x,a[4]=ol.x,a[8]=kn.x,a[1]=fr.y,a[5]=ol.y,a[9]=kn.y,a[2]=fr.z,a[6]=ol.z,a[10]=kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,c=this.elements,f=r[0],d=r[4],h=r[8],m=r[12],g=r[1],y=r[5],x=r[9],M=r[13],T=r[2],A=r[6],v=r[10],_=r[14],F=r[3],P=r[7],D=r[11],Z=r[15],B=a[0],O=a[4],K=a[8],L=a[12],R=a[1],V=a[5],ge=a[9],ee=a[13],_e=a[2],ve=a[6],le=a[10],j=a[14],N=a[3],te=a[7],oe=a[11],I=a[15];return c[0]=f*B+d*R+h*_e+m*N,c[4]=f*O+d*V+h*ve+m*te,c[8]=f*K+d*ge+h*le+m*oe,c[12]=f*L+d*ee+h*j+m*I,c[1]=g*B+y*R+x*_e+M*N,c[5]=g*O+y*V+x*ve+M*te,c[9]=g*K+y*ge+x*le+M*oe,c[13]=g*L+y*ee+x*j+M*I,c[2]=T*B+A*R+v*_e+_*N,c[6]=T*O+A*V+v*ve+_*te,c[10]=T*K+A*ge+v*le+_*oe,c[14]=T*L+A*ee+v*j+_*I,c[3]=F*B+P*R+D*_e+Z*N,c[7]=F*O+P*V+D*ve+Z*te,c[11]=F*K+P*ge+D*le+Z*oe,c[15]=F*L+P*ee+D*j+Z*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],c=e[12],f=e[1],d=e[5],h=e[9],m=e[13],g=e[2],y=e[6],x=e[10],M=e[14],T=e[3],A=e[7],v=e[11],_=e[15];return T*(+c*h*y-a*m*y-c*d*x+r*m*x+a*d*M-r*h*M)+A*(+n*h*M-n*m*x+c*f*x-a*f*M+a*m*g-c*h*g)+v*(+n*m*y-n*d*M-c*f*y+r*f*M+c*d*g-r*m*g)+_*(-a*d*g-n*h*y+n*d*x+a*f*y-r*f*x+r*h*g)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],f=e[4],d=e[5],h=e[6],m=e[7],g=e[8],y=e[9],x=e[10],M=e[11],T=e[12],A=e[13],v=e[14],_=e[15],F=y*v*m-A*x*m+A*h*M-d*v*M-y*h*_+d*x*_,P=T*x*m-g*v*m-T*h*M+f*v*M+g*h*_-f*x*_,D=g*A*m-T*y*m+T*d*M-f*A*M-g*d*_+f*y*_,Z=T*y*h-g*A*h-T*d*x+f*A*x+g*d*v-f*y*v,B=n*F+r*P+a*D+c*Z;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/B;return e[0]=F*O,e[1]=(A*x*c-y*v*c-A*a*M+r*v*M+y*a*_-r*x*_)*O,e[2]=(d*v*c-A*h*c+A*a*m-r*v*m-d*a*_+r*h*_)*O,e[3]=(y*h*c-d*x*c-y*a*m+r*x*m+d*a*M-r*h*M)*O,e[4]=P*O,e[5]=(g*v*c-T*x*c+T*a*M-n*v*M-g*a*_+n*x*_)*O,e[6]=(T*h*c-f*v*c-T*a*m+n*v*m+f*a*_-n*h*_)*O,e[7]=(f*x*c-g*h*c+g*a*m-n*x*m-f*a*M+n*h*M)*O,e[8]=D*O,e[9]=(T*y*c-g*A*c-T*r*M+n*A*M+g*r*_-n*y*_)*O,e[10]=(f*A*c-T*d*c+T*r*m-n*A*m-f*r*_+n*d*_)*O,e[11]=(g*d*c-f*y*c-g*r*m+n*y*m+f*r*M-n*d*M)*O,e[12]=Z*O,e[13]=(g*A*a-T*y*a+T*r*x-n*A*x-g*r*v+n*y*v)*O,e[14]=(T*d*a-f*A*a-T*r*h+n*A*h+f*r*v-n*d*v)*O,e[15]=(f*y*a-g*d*a+g*r*h-n*y*h-f*r*x+n*d*x)*O,this}scale(e){const n=this.elements,r=e.x,a=e.y,c=e.z;return n[0]*=r,n[4]*=a,n[8]*=c,n[1]*=r,n[5]*=a,n[9]*=c,n[2]*=r,n[6]*=a,n[10]*=c,n[3]*=r,n[7]*=a,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),c=1-r,f=e.x,d=e.y,h=e.z,m=c*f,g=c*d;return this.set(m*f+r,m*d-a*h,m*h+a*d,0,m*d+a*h,g*d+r,g*h-a*f,0,m*h-a*d,g*h+a*f,c*h*h+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,c,f){return this.set(1,r,c,0,e,1,f,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,c=n._x,f=n._y,d=n._z,h=n._w,m=c+c,g=f+f,y=d+d,x=c*m,M=c*g,T=c*y,A=f*g,v=f*y,_=d*y,F=h*m,P=h*g,D=h*y,Z=r.x,B=r.y,O=r.z;return a[0]=(1-(A+_))*Z,a[1]=(M+D)*Z,a[2]=(T-P)*Z,a[3]=0,a[4]=(M-D)*B,a[5]=(1-(x+_))*B,a[6]=(v+F)*B,a[7]=0,a[8]=(T+P)*O,a[9]=(v-F)*O,a[10]=(1-(x+A))*O,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let c=Rs.set(a[0],a[1],a[2]).length();const f=Rs.set(a[4],a[5],a[6]).length(),d=Rs.set(a[8],a[9],a[10]).length();this.determinant()<0&&(c=-c),e.x=a[12],e.y=a[13],e.z=a[14],ai.copy(this);const m=1/c,g=1/f,y=1/d;return ai.elements[0]*=m,ai.elements[1]*=m,ai.elements[2]*=m,ai.elements[4]*=g,ai.elements[5]*=g,ai.elements[6]*=g,ai.elements[8]*=y,ai.elements[9]*=y,ai.elements[10]*=y,n.setFromRotationMatrix(ai),r.x=c,r.y=f,r.z=d,this}makePerspective(e,n,r,a,c,f,d=Oi){const h=this.elements,m=2*c/(n-e),g=2*c/(r-a),y=(n+e)/(n-e),x=(r+a)/(r-a);let M,T;if(d===Oi)M=-(f+c)/(f-c),T=-2*f*c/(f-c);else if(d===Dl)M=-f/(f-c),T=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return h[0]=m,h[4]=0,h[8]=y,h[12]=0,h[1]=0,h[5]=g,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=T,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,r,a,c,f,d=Oi){const h=this.elements,m=1/(n-e),g=1/(r-a),y=1/(f-c),x=(n+e)*m,M=(r+a)*g;let T,A;if(d===Oi)T=(f+c)*y,A=-2*y;else if(d===Dl)T=c*y,A=-1*y;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return h[0]=2*m,h[4]=0,h[8]=0,h[12]=-x,h[1]=0,h[5]=2*g,h[9]=0,h[13]=-M,h[2]=0,h[6]=0,h[10]=A,h[14]=-T,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Rs=new ne,ai=new jt,Uv=new ne(0,0,0),Fv=new ne(1,1,1),fr=new ne,ol=new ne,kn=new ne,Fp=new jt,Op=new Kr;class Qn{constructor(e=0,n=0,r=0,a=Qn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,c=a[0],f=a[4],d=a[8],h=a[1],m=a[5],g=a[9],y=a[2],x=a[6],M=a[10];switch(n){case"XYZ":this._y=Math.asin(mn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-mn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-y,c),this._z=0);break;case"ZXY":this._x=Math.asin(mn(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-y,M),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(h,c));break;case"ZYX":this._y=Math.asin(-mn(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(h,c)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(mn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-y,c)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-mn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Fp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fp,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Op.setFromEuler(this),this.setFromQuaternion(Op,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qn.DEFAULT_ORDER="XYZ";class Hd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ov=0;const kp=new ne,bs=new Kr,Di=new jt,al=new ne,Fo=new ne,kv=new ne,zv=new Kr,zp=new ne(1,0,0),Bp=new ne(0,1,0),Hp=new ne(0,0,1),Vp={type:"added"},Bv={type:"removed"},Ps={type:"childadded",child:null},Du={type:"childremoved",child:null};class Hn extends Qr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ov++}),this.uuid=Zs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Hn.DEFAULT_UP.clone();const e=new ne,n=new Qn,r=new Kr,a=new ne(1,1,1);function c(){r.setFromEuler(n,!1)}function f(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new jt},normalMatrix:{value:new ht}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=Hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return bs.setFromAxisAngle(e,n),this.quaternion.multiply(bs),this}rotateOnWorldAxis(e,n){return bs.setFromAxisAngle(e,n),this.quaternion.premultiply(bs),this}rotateX(e){return this.rotateOnAxis(zp,e)}rotateY(e){return this.rotateOnAxis(Bp,e)}rotateZ(e){return this.rotateOnAxis(Hp,e)}translateOnAxis(e,n){return kp.copy(e).applyQuaternion(this.quaternion),this.position.add(kp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(zp,e)}translateY(e){return this.translateOnAxis(Bp,e)}translateZ(e){return this.translateOnAxis(Hp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?al.copy(e):al.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(Fo,al,this.up):Di.lookAt(al,Fo,this.up),this.quaternion.setFromRotationMatrix(Di),a&&(Di.extractRotation(a.matrixWorld),bs.setFromRotationMatrix(Di),this.quaternion.premultiply(bs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vp),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Bv),Du.child=e,this.dispatchEvent(Du),Du.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Di.multiply(e.parent.matrixWorld)),e.applyMatrix4(Di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vp),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const f=this.children[r].getObjectByProperty(e,n);if(f!==void 0)return f}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let c=0,f=a.length;c<f;c++)a[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,e,kv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,zv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let c=0,f=a.length;c<f;c++)a[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function c(d,h){return d[h.uuid]===void 0&&(d[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const h=d.shapes;if(Array.isArray(h))for(let m=0,g=h.length;m<g;m++){const y=h[m];c(e.shapes,y)}else c(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let h=0,m=this.material.length;h<m;h++)d.push(c(e.materials,this.material[h]));a.material=d}else a.material=c(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const h=this.animations[d];a.animations.push(c(e.animations,h))}}if(n){const d=f(e.geometries),h=f(e.materials),m=f(e.textures),g=f(e.images),y=f(e.shapes),x=f(e.skeletons),M=f(e.animations),T=f(e.nodes);d.length>0&&(r.geometries=d),h.length>0&&(r.materials=h),m.length>0&&(r.textures=m),g.length>0&&(r.images=g),y.length>0&&(r.shapes=y),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),T.length>0&&(r.nodes=T)}return r.object=a,r;function f(d){const h=[];for(const m in d){const g=d[m];delete g.metadata,h.push(g)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}Hn.DEFAULT_UP=new ne(0,1,0);Hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const li=new ne,Ni=new ne,Nu=new ne,Ii=new ne,Ls=new ne,Ds=new ne,Gp=new ne,Iu=new ne,Uu=new ne,Fu=new ne;class _i{constructor(e=new ne,n=new ne,r=new ne){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),li.subVectors(e,n),a.cross(li);const c=a.lengthSq();return c>0?a.multiplyScalar(1/Math.sqrt(c)):a.set(0,0,0)}static getBarycoord(e,n,r,a,c){li.subVectors(a,n),Ni.subVectors(r,n),Nu.subVectors(e,n);const f=li.dot(li),d=li.dot(Ni),h=li.dot(Nu),m=Ni.dot(Ni),g=Ni.dot(Nu),y=f*m-d*d;if(y===0)return c.set(0,0,0),null;const x=1/y,M=(m*h-d*g)*x,T=(f*g-d*h)*x;return c.set(1-M-T,T,M)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(e,n,r,a,c,f,d,h){return this.getBarycoord(e,n,r,a,Ii)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(c,Ii.x),h.addScaledVector(f,Ii.y),h.addScaledVector(d,Ii.z),h)}static isFrontFacing(e,n,r,a){return li.subVectors(r,n),Ni.subVectors(e,n),li.cross(Ni).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return li.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),li.cross(Ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return _i.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,c){return _i.getInterpolation(e,this.a,this.b,this.c,n,r,a,c)}containsPoint(e){return _i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,c=this.c;let f,d;Ls.subVectors(a,r),Ds.subVectors(c,r),Iu.subVectors(e,r);const h=Ls.dot(Iu),m=Ds.dot(Iu);if(h<=0&&m<=0)return n.copy(r);Uu.subVectors(e,a);const g=Ls.dot(Uu),y=Ds.dot(Uu);if(g>=0&&y<=g)return n.copy(a);const x=h*y-g*m;if(x<=0&&h>=0&&g<=0)return f=h/(h-g),n.copy(r).addScaledVector(Ls,f);Fu.subVectors(e,c);const M=Ls.dot(Fu),T=Ds.dot(Fu);if(T>=0&&M<=T)return n.copy(c);const A=M*m-h*T;if(A<=0&&m>=0&&T<=0)return d=m/(m-T),n.copy(r).addScaledVector(Ds,d);const v=g*T-M*y;if(v<=0&&y-g>=0&&M-T>=0)return Gp.subVectors(c,a),d=(y-g)/(y-g+(M-T)),n.copy(a).addScaledVector(Gp,d);const _=1/(v+A+x);return f=A*_,d=x*_,n.copy(r).addScaledVector(Ls,f).addScaledVector(Ds,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ym={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hr={h:0,s:0,l:0},ll={h:0,s:0,l:0};function Ou(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class Ct{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=$n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=At.workingColorSpace){return this.r=e,this.g=n,this.b=r,At.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=At.workingColorSpace){if(e=kd(e,1),n=mn(n,0,1),r=mn(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,f=2*r-c;this.r=Ou(f,c,e+1/3),this.g=Ou(f,c,e),this.b=Ou(f,c,e-1/3)}return At.toWorkingColorSpace(this,a),this}setStyle(e,n=$n){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=a[1],d=a[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=a[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=$n){const r=Ym[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xs(e.r),this.g=Xs(e.g),this.b=Xs(e.b),this}copyLinearToSRGB(e){return this.r=wu(e.r),this.g=wu(e.g),this.b=wu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$n){return At.fromWorkingColorSpace(pn.copy(this),e),Math.round(mn(pn.r*255,0,255))*65536+Math.round(mn(pn.g*255,0,255))*256+Math.round(mn(pn.b*255,0,255))}getHexString(e=$n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=At.workingColorSpace){At.fromWorkingColorSpace(pn.copy(this),n);const r=pn.r,a=pn.g,c=pn.b,f=Math.max(r,a,c),d=Math.min(r,a,c);let h,m;const g=(d+f)/2;if(d===f)h=0,m=0;else{const y=f-d;switch(m=g<=.5?y/(f+d):y/(2-f-d),f){case r:h=(a-c)/y+(a<c?6:0);break;case a:h=(c-r)/y+2;break;case c:h=(r-a)/y+4;break}h/=6}return e.h=h,e.s=m,e.l=g,e}getRGB(e,n=At.workingColorSpace){return At.fromWorkingColorSpace(pn.copy(this),n),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=$n){At.fromWorkingColorSpace(pn.copy(this),e);const n=pn.r,r=pn.g,a=pn.b;return e!==$n?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(hr),this.setHSL(hr.h+e,hr.s+n,hr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(hr),e.getHSL(ll);const r=Bo(hr.h,ll.h,n),a=Bo(hr.s,ll.s,n),c=Bo(hr.l,ll.l,n);return this.setHSL(r,a,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*a,this.g=c[1]*n+c[4]*r+c[7]*a,this.b=c[2]*n+c[5]*r+c[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pn=new Ct;Ct.NAMES=Ym;let Hv=0;class Fl extends Qr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hv++}),this.uuid=Zs(),this.name="",this.type="Material",this.blending=Gs,this.side=zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$u,this.blendDst=Ku,this.blendEquation=Gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=Rl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Es,this.stencilZFail=Es,this.stencilZPass=Es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Gs&&(r.blending=this.blending),this.side!==zi&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==$u&&(r.blendSrc=this.blendSrc),this.blendDst!==Ku&&(r.blendDst=this.blendDst),this.blendEquation!==Gr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Rl&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Es&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Es&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Es&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(c){const f=[];for(const d in c){const h=c[d];delete h.metadata,f.push(h)}return f}if(n){const c=a(e.textures),f=a(e.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let c=0;c!==a;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class Ol extends Fl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=Pm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const qt=new ne,cl=new ut;class vi{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=bp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Wm("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,c=this.itemSize;a<c;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)cl.fromBufferAttribute(this,n),cl.applyMatrix3(e),this.setXY(n,cl.x,cl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)qt.fromBufferAttribute(this,n),qt.applyMatrix3(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)qt.fromBufferAttribute(this,n),qt.applyMatrix4(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)qt.fromBufferAttribute(this,n),qt.applyNormalMatrix(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)qt.fromBufferAttribute(this,n),qt.transformDirection(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Bs(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=xn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Bs(n,this.array)),n}setX(e,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Bs(n,this.array)),n}setY(e,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Bs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Bs(n,this.array)),n}setW(e,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=xn(n,this.array),r=xn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=xn(n,this.array),r=xn(r,this.array),a=xn(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,c){return e*=this.itemSize,this.normalized&&(n=xn(n,this.array),r=xn(r,this.array),a=xn(a,this.array),c=xn(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bp&&(e.usage=this.usage),e}}class qm extends vi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class $m extends vi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class ki extends vi{constructor(e,n,r){super(new Float32Array(e),n,r)}}let Vv=0;const qn=new jt,ku=new Hn,Ns=new ne,zn=new Xo,Oo=new Xo,sn=new ne;class Sr extends Qr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vv++}),this.uuid=Zs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gm(e)?$m:qm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ht().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qn.makeRotationFromQuaternion(e),this.applyMatrix4(qn),this}rotateX(e){return qn.makeRotationX(e),this.applyMatrix4(qn),this}rotateY(e){return qn.makeRotationY(e),this.applyMatrix4(qn),this}rotateZ(e){return qn.makeRotationZ(e),this.applyMatrix4(qn),this}translate(e,n,r){return qn.makeTranslation(e,n,r),this.applyMatrix4(qn),this}scale(e,n,r){return qn.makeScale(e,n,r),this.applyMatrix4(qn),this}lookAt(e){return ku.lookAt(e),ku.updateMatrix(),this.applyMatrix4(ku.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ns).negate(),this.translate(Ns.x,Ns.y,Ns.z),this}setFromPoints(e){const n=[];for(let r=0,a=e.length;r<a;r++){const c=e[r];n.push(c.x,c.y,c.z||0)}return this.setAttribute("position",new ki(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ne(-1/0,-1/0,-1/0),new ne(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const c=n[r];zn.setFromBufferAttribute(c),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zd);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ne,1/0);return}if(e){const r=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),n)for(let c=0,f=n.length;c<f;c++){const d=n[c];Oo.setFromBufferAttribute(d),this.morphTargetsRelative?(sn.addVectors(zn.min,Oo.min),zn.expandByPoint(sn),sn.addVectors(zn.max,Oo.max),zn.expandByPoint(sn)):(zn.expandByPoint(Oo.min),zn.expandByPoint(Oo.max))}zn.getCenter(r);let a=0;for(let c=0,f=e.count;c<f;c++)sn.fromBufferAttribute(e,c),a=Math.max(a,r.distanceToSquared(sn));if(n)for(let c=0,f=n.length;c<f;c++){const d=n[c],h=this.morphTargetsRelative;for(let m=0,g=d.count;m<g;m++)sn.fromBufferAttribute(d,m),h&&(Ns.fromBufferAttribute(e,m),sn.add(Ns)),a=Math.max(a,r.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vi(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],h=[];for(let K=0;K<r.count;K++)d[K]=new ne,h[K]=new ne;const m=new ne,g=new ne,y=new ne,x=new ut,M=new ut,T=new ut,A=new ne,v=new ne;function _(K,L,R){m.fromBufferAttribute(r,K),g.fromBufferAttribute(r,L),y.fromBufferAttribute(r,R),x.fromBufferAttribute(c,K),M.fromBufferAttribute(c,L),T.fromBufferAttribute(c,R),g.sub(m),y.sub(m),M.sub(x),T.sub(x);const V=1/(M.x*T.y-T.x*M.y);isFinite(V)&&(A.copy(g).multiplyScalar(T.y).addScaledVector(y,-M.y).multiplyScalar(V),v.copy(y).multiplyScalar(M.x).addScaledVector(g,-T.x).multiplyScalar(V),d[K].add(A),d[L].add(A),d[R].add(A),h[K].add(v),h[L].add(v),h[R].add(v))}let F=this.groups;F.length===0&&(F=[{start:0,count:e.count}]);for(let K=0,L=F.length;K<L;++K){const R=F[K],V=R.start,ge=R.count;for(let ee=V,_e=V+ge;ee<_e;ee+=3)_(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const P=new ne,D=new ne,Z=new ne,B=new ne;function O(K){Z.fromBufferAttribute(a,K),B.copy(Z);const L=d[K];P.copy(L),P.sub(Z.multiplyScalar(Z.dot(L))).normalize(),D.crossVectors(B,L);const V=D.dot(h[K])<0?-1:1;f.setXYZW(K,P.x,P.y,P.z,V)}for(let K=0,L=F.length;K<L;++K){const R=F[K],V=R.start,ge=R.count;for(let ee=V,_e=V+ge;ee<_e;ee+=3)O(e.getX(ee+0)),O(e.getX(ee+1)),O(e.getX(ee+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new vi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const a=new ne,c=new ne,f=new ne,d=new ne,h=new ne,m=new ne,g=new ne,y=new ne;if(e)for(let x=0,M=e.count;x<M;x+=3){const T=e.getX(x+0),A=e.getX(x+1),v=e.getX(x+2);a.fromBufferAttribute(n,T),c.fromBufferAttribute(n,A),f.fromBufferAttribute(n,v),g.subVectors(f,c),y.subVectors(a,c),g.cross(y),d.fromBufferAttribute(r,T),h.fromBufferAttribute(r,A),m.fromBufferAttribute(r,v),d.add(g),h.add(g),m.add(g),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(A,h.x,h.y,h.z),r.setXYZ(v,m.x,m.y,m.z)}else for(let x=0,M=n.count;x<M;x+=3)a.fromBufferAttribute(n,x+0),c.fromBufferAttribute(n,x+1),f.fromBufferAttribute(n,x+2),g.subVectors(f,c),y.subVectors(a,c),g.cross(y),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)sn.fromBufferAttribute(e,n),sn.normalize(),e.setXYZ(n,sn.x,sn.y,sn.z)}toNonIndexed(){function e(d,h){const m=d.array,g=d.itemSize,y=d.normalized,x=new m.constructor(h.length*g);let M=0,T=0;for(let A=0,v=h.length;A<v;A++){d.isInterleavedBufferAttribute?M=h[A]*d.data.stride+d.offset:M=h[A]*g;for(let _=0;_<g;_++)x[T++]=m[M++]}return new vi(x,g,y)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Sr,r=this.index.array,a=this.attributes;for(const d in a){const h=a[d],m=e(h,r);n.setAttribute(d,m)}const c=this.morphAttributes;for(const d in c){const h=[],m=c[d];for(let g=0,y=m.length;g<y;g++){const x=m[g],M=e(x,r);h.push(M)}n.morphAttributes[d]=h}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,h=f.length;d<h;d++){const m=f[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const m in h)h[m]!==void 0&&(e[m]=h[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const h in r){const m=r[h];e.data.attributes[h]=m.toJSON(e.data)}const a={};let c=!1;for(const h in this.morphAttributes){const m=this.morphAttributes[h],g=[];for(let y=0,x=m.length;y<x;y++){const M=m[y];g.push(M.toJSON(e.data))}g.length>0&&(a[h]=g,c=!0)}c&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const m in a){const g=a[m];this.setAttribute(m,g.clone(n))}const c=e.morphAttributes;for(const m in c){const g=[],y=c[m];for(let x=0,M=y.length;x<M;x++)g.push(y[x].clone(n));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let m=0,g=f.length;m<g;m++){const y=f[m];this.addGroup(y.start,y.count,y.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wp=new jt,kr=new Bd,ul=new zd,Xp=new ne,Is=new ne,Us=new ne,Fs=new ne,zu=new ne,dl=new ne,fl=new ut,hl=new ut,pl=new ut,jp=new ne,Yp=new ne,qp=new ne,ml=new ne,gl=new ne;class Zn extends Hn{constructor(e=new Sr,n=new Ol){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=a.length;c<f;c++){const d=a[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(c&&d){dl.set(0,0,0);for(let h=0,m=c.length;h<m;h++){const g=d[h],y=c[h];g!==0&&(zu.fromBufferAttribute(y,e),f?dl.addScaledVector(zu,g):dl.addScaledVector(zu.sub(n),g))}n.add(dl)}return n}raycast(e,n){const r=this.geometry,a=this.material,c=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ul.copy(r.boundingSphere),ul.applyMatrix4(c),kr.copy(e.ray).recast(e.near),!(ul.containsPoint(kr.origin)===!1&&(kr.intersectSphere(ul,Xp)===null||kr.origin.distanceToSquared(Xp)>(e.far-e.near)**2))&&(Wp.copy(c).invert(),kr.copy(e.ray).applyMatrix4(Wp),!(r.boundingBox!==null&&kr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,kr)))}_computeIntersections(e,n,r){let a;const c=this.geometry,f=this.material,d=c.index,h=c.attributes.position,m=c.attributes.uv,g=c.attributes.uv1,y=c.attributes.normal,x=c.groups,M=c.drawRange;if(d!==null)if(Array.isArray(f))for(let T=0,A=x.length;T<A;T++){const v=x[T],_=f[v.materialIndex],F=Math.max(v.start,M.start),P=Math.min(d.count,Math.min(v.start+v.count,M.start+M.count));for(let D=F,Z=P;D<Z;D+=3){const B=d.getX(D),O=d.getX(D+1),K=d.getX(D+2);a=_l(this,_,e,r,m,g,y,B,O,K),a&&(a.faceIndex=Math.floor(D/3),a.face.materialIndex=v.materialIndex,n.push(a))}}else{const T=Math.max(0,M.start),A=Math.min(d.count,M.start+M.count);for(let v=T,_=A;v<_;v+=3){const F=d.getX(v),P=d.getX(v+1),D=d.getX(v+2);a=_l(this,f,e,r,m,g,y,F,P,D),a&&(a.faceIndex=Math.floor(v/3),n.push(a))}}else if(h!==void 0)if(Array.isArray(f))for(let T=0,A=x.length;T<A;T++){const v=x[T],_=f[v.materialIndex],F=Math.max(v.start,M.start),P=Math.min(h.count,Math.min(v.start+v.count,M.start+M.count));for(let D=F,Z=P;D<Z;D+=3){const B=D,O=D+1,K=D+2;a=_l(this,_,e,r,m,g,y,B,O,K),a&&(a.faceIndex=Math.floor(D/3),a.face.materialIndex=v.materialIndex,n.push(a))}}else{const T=Math.max(0,M.start),A=Math.min(h.count,M.start+M.count);for(let v=T,_=A;v<_;v+=3){const F=v,P=v+1,D=v+2;a=_l(this,f,e,r,m,g,y,F,P,D),a&&(a.faceIndex=Math.floor(v/3),n.push(a))}}}}function Gv(s,e,n,r,a,c,f,d){let h;if(e.side===Mn?h=r.intersectTriangle(f,c,a,!0,d):h=r.intersectTriangle(a,c,f,e.side===zi,d),h===null)return null;gl.copy(d),gl.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(gl);return m<n.near||m>n.far?null:{distance:m,point:gl.clone(),object:s}}function _l(s,e,n,r,a,c,f,d,h,m){s.getVertexPosition(d,Is),s.getVertexPosition(h,Us),s.getVertexPosition(m,Fs);const g=Gv(s,e,n,r,Is,Us,Fs,ml);if(g){a&&(fl.fromBufferAttribute(a,d),hl.fromBufferAttribute(a,h),pl.fromBufferAttribute(a,m),g.uv=_i.getInterpolation(ml,Is,Us,Fs,fl,hl,pl,new ut)),c&&(fl.fromBufferAttribute(c,d),hl.fromBufferAttribute(c,h),pl.fromBufferAttribute(c,m),g.uv1=_i.getInterpolation(ml,Is,Us,Fs,fl,hl,pl,new ut)),f&&(jp.fromBufferAttribute(f,d),Yp.fromBufferAttribute(f,h),qp.fromBufferAttribute(f,m),g.normal=_i.getInterpolation(ml,Is,Us,Fs,jp,Yp,qp,new ne),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const y={a:d,b:h,c:m,normal:new ne,materialIndex:0};_i.getNormal(Is,Us,Fs,y.normal),g.face=y}return g}class jo extends Sr{constructor(e=1,n=1,r=1,a=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:c,depthSegments:f};const d=this;a=Math.floor(a),c=Math.floor(c),f=Math.floor(f);const h=[],m=[],g=[],y=[];let x=0,M=0;T("z","y","x",-1,-1,r,n,e,f,c,0),T("z","y","x",1,-1,r,n,-e,f,c,1),T("x","z","y",1,1,e,r,n,a,f,2),T("x","z","y",1,-1,e,r,-n,a,f,3),T("x","y","z",1,-1,e,n,r,a,c,4),T("x","y","z",-1,-1,e,n,-r,a,c,5),this.setIndex(h),this.setAttribute("position",new ki(m,3)),this.setAttribute("normal",new ki(g,3)),this.setAttribute("uv",new ki(y,2));function T(A,v,_,F,P,D,Z,B,O,K,L){const R=D/O,V=Z/K,ge=D/2,ee=Z/2,_e=B/2,ve=O+1,le=K+1;let j=0,N=0;const te=new ne;for(let oe=0;oe<le;oe++){const I=oe*V-ee;for(let J=0;J<ve;J++){const be=J*R-ge;te[A]=be*F,te[v]=I*P,te[_]=_e,m.push(te.x,te.y,te.z),te[A]=0,te[v]=0,te[_]=B>0?1:-1,g.push(te.x,te.y,te.z),y.push(J/O),y.push(1-oe/K),j+=1}}for(let oe=0;oe<K;oe++)for(let I=0;I<O;I++){const J=x+I+ve*oe,be=x+I+ve*(oe+1),q=x+(I+1)+ve*(oe+1),W=x+(I+1)+ve*oe;h.push(J,be,W),h.push(be,q,W),N+=6}d.addGroup(M,N,L),M+=N,x+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ks(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function yn(s){const e={};for(let n=0;n<s.length;n++){const r=Ks(s[n]);for(const a in r)e[a]=r[a]}return e}function Wv(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function Km(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}const Xv={clone:Ks,merge:yn};var jv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xr extends Fl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jv,this.fragmentShader=Yv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ks(e.uniforms),this.uniformsGroups=Wv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const f=this.uniforms[a].value;f&&f.isTexture?n.uniforms[a]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?n.uniforms[a]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[a]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[a]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[a]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[a]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[a]={type:"m4",value:f.toArray()}:n.uniforms[a]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Zm extends Hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=Oi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pr=new ne,$p=new ut,Kp=new ut;class Bn extends Zm{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Go*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Go*2*Math.atan(Math.tan(zo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){pr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pr.x,pr.y).multiplyScalar(-e/pr.z),pr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(pr.x,pr.y).multiplyScalar(-e/pr.z)}getViewSize(e,n){return this.getViewBounds(e,$p,Kp),n.subVectors(Kp,$p)}setViewOffset(e,n,r,a,c,f){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(zo*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,c=-.5*a;const f=this.view;if(this.view!==null&&this.view.enabled){const h=f.fullWidth,m=f.fullHeight;c+=f.offsetX*a/h,n-=f.offsetY*r/m,a*=f.width/h,r*=f.height/m}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Os=-90,ks=1;class qv extends Hn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Bn(Os,ks,e,n);a.layers=this.layers,this.add(a);const c=new Bn(Os,ks,e,n);c.layers=this.layers,this.add(c);const f=new Bn(Os,ks,e,n);f.layers=this.layers,this.add(f);const d=new Bn(Os,ks,e,n);d.layers=this.layers,this.add(d);const h=new Bn(Os,ks,e,n);h.layers=this.layers,this.add(h);const m=new Bn(Os,ks,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,c,f,d,h]=n;for(const m of n)this.remove(m);if(e===Oi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Dl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,h,m,g]=this.children,y=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,c),e.setRenderTarget(r,1,a),e.render(n,f),e.setRenderTarget(r,2,a),e.render(n,d),e.setRenderTarget(r,3,a),e.render(n,h),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,a),e.render(n,g),e.setRenderTarget(y,x,M),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class Qm extends En{constructor(e,n,r,a,c,f,d,h,m,g){e=e!==void 0?e:[],n=n!==void 0?n:js,super(e,n,r,a,c,f,d,h,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $v extends $r{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new Qm(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Sn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new jo(5,5,5),c=new xr({name:"CubemapFromEquirect",uniforms:Ks(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Mn,blending:_r});c.uniforms.tEquirect.value=n;const f=new Zn(a,c),d=n.minFilter;return n.minFilter===Yr&&(n.minFilter=Sn),new qv(1,10,this).update(e,f),n.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,n,r,a){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(n,r,a);e.setRenderTarget(c)}}const Bu=new ne,Kv=new ne,Zv=new ht;class mr{constructor(e=new ne(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=Bu.subVectors(r,n).cross(Kv.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Bu),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/a;return c<0||c>1?null:n.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||Zv.getNormalMatrix(e),a=this.coplanarPoint(Bu).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zr=new zd,vl=new ne;class Jm{constructor(e=new mr,n=new mr,r=new mr,a=new mr,c=new mr,f=new mr){this.planes=[e,n,r,a,c,f]}set(e,n,r,a,c,f){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(a),d[4].copy(c),d[5].copy(f),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Oi){const r=this.planes,a=e.elements,c=a[0],f=a[1],d=a[2],h=a[3],m=a[4],g=a[5],y=a[6],x=a[7],M=a[8],T=a[9],A=a[10],v=a[11],_=a[12],F=a[13],P=a[14],D=a[15];if(r[0].setComponents(h-c,x-m,v-M,D-_).normalize(),r[1].setComponents(h+c,x+m,v+M,D+_).normalize(),r[2].setComponents(h+f,x+g,v+T,D+F).normalize(),r[3].setComponents(h-f,x-g,v-T,D-F).normalize(),r[4].setComponents(h-d,x-y,v-A,D-P).normalize(),n===Oi)r[5].setComponents(h+d,x+y,v+A,D+P).normalize();else if(n===Dl)r[5].setComponents(d,y,A,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zr)}intersectsSprite(e){return zr.center.set(0,0,0),zr.radius=.7071067811865476,zr.applyMatrix4(e.matrixWorld),this.intersectsSphere(zr)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(vl.x=a.normal.x>0?e.max.x:e.min.x,vl.y=a.normal.y>0?e.max.y:e.min.y,vl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(vl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function eg(){let s=null,e=!1,n=null,r=null;function a(c,f){n(c,f),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){s=c}}}function Qv(s){const e=new WeakMap;function n(d,h){const m=d.array,g=d.usage,y=m.byteLength,x=s.createBuffer();s.bindBuffer(h,x),s.bufferData(h,m,g),d.onUploadCallback();let M;if(m instanceof Float32Array)M=s.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=s.SHORT;else if(m instanceof Uint32Array)M=s.UNSIGNED_INT;else if(m instanceof Int32Array)M=s.INT;else if(m instanceof Int8Array)M=s.BYTE;else if(m instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:y}}function r(d,h,m){const g=h.array,y=h._updateRange,x=h.updateRanges;if(s.bindBuffer(m,d),y.count===-1&&x.length===0&&s.bufferSubData(m,0,g),x.length!==0){for(let M=0,T=x.length;M<T;M++){const A=x[M];s.bufferSubData(m,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}h.clearUpdateRanges()}y.count!==-1&&(s.bufferSubData(m,y.offset*g.BYTES_PER_ELEMENT,g,y.offset,y.count),y.count=-1),h.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const h=e.get(d);h&&(s.deleteBuffer(h.buffer),e.delete(d))}function f(d,h){if(d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);if(m===void 0)e.set(d,n(d,h));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,h),m.version=d.version}}return{get:a,remove:c,update:f}}class Yo extends Sr{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const c=e/2,f=n/2,d=Math.floor(r),h=Math.floor(a),m=d+1,g=h+1,y=e/d,x=n/h,M=[],T=[],A=[],v=[];for(let _=0;_<g;_++){const F=_*x-f;for(let P=0;P<m;P++){const D=P*y-c;T.push(D,-F,0),A.push(0,0,1),v.push(P/d),v.push(1-_/h)}}for(let _=0;_<h;_++)for(let F=0;F<d;F++){const P=F+m*_,D=F+m*(_+1),Z=F+1+m*(_+1),B=F+1+m*_;M.push(P,D,B),M.push(D,Z,B)}this.setIndex(M),this.setAttribute("position",new ki(T,3)),this.setAttribute("normal",new ki(A,3)),this.setAttribute("uv",new ki(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yo(e.width,e.height,e.widthSegments,e.heightSegments)}}var Jv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ex=`#ifdef USE_ALPHAHASH
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
#endif`,tx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ix=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sx=`#ifdef USE_AOMAP
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
#endif`,ox=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ax=`#ifdef USE_BATCHING
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
#endif`,lx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ux=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fx=`#ifdef USE_IRIDESCENCE
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
#endif`,hx=`#ifdef USE_BUMPMAP
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
#endif`,px=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_x=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Sx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Mx=`#define PI 3.141592653589793
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
} // validated`,Ex=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wx=`vec3 transformedNormal = objectNormal;
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
#endif`,Tx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ax=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Px=`
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
}`,Lx=`#ifdef USE_ENVMAP
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
#endif`,Dx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Nx=`#ifdef USE_ENVMAP
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
#endif`,Ix=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ux=`#ifdef USE_ENVMAP
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
#endif`,Fx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ox=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bx=`#ifdef USE_GRADIENTMAP
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
}`,Hx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wx=`uniform bool receiveShadow;
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
#endif`,Xx=`#ifdef USE_ENVMAP
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
#endif`,jx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$x=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kx=`PhysicalMaterial material;
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
#endif`,Zx=`struct PhysicalMaterial {
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
}`,Qx=`
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
#endif`,Jx=`#if defined( RE_IndirectDiffuse )
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
#endif`,ey=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ty=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ny=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ry=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,oy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ay=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ly=`#if defined( USE_POINTS_UV )
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
#endif`,cy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,py=`#ifdef USE_MORPHTARGETS
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
#endif`,my=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_y=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sy=`#ifdef USE_NORMALMAP
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
#endif`,My=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ey=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ty=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ay=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ry=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,by=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Py=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ly=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ny=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Iy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Uy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Oy=`float getShadowMask() {
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
}`,ky=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zy=`#ifdef USE_SKINNING
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
#endif`,By=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hy=`#ifdef USE_SKINNING
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
#endif`,Vy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jy=`#ifdef USE_TRANSMISSION
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
#endif`,Yy=`#ifdef USE_TRANSMISSION
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
#endif`,qy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$y=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ky=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jy=`uniform sampler2D t2D;
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
}`,eS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,nS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rS=`#include <common>
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
}`,sS=`#if DEPTH_PACKING == 3200
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
}`,oS=`#define DISTANCE
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
}`,aS=`#define DISTANCE
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
}`,lS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uS=`uniform float scale;
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
}`,dS=`uniform vec3 diffuse;
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
}`,fS=`#include <common>
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
}`,hS=`uniform vec3 diffuse;
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
}`,pS=`#define LAMBERT
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
}`,mS=`#define LAMBERT
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
}`,gS=`#define MATCAP
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
}`,_S=`#define MATCAP
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
}`,vS=`#define NORMAL
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
}`,xS=`#define NORMAL
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
}`,yS=`#define PHONG
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
}`,SS=`#define PHONG
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
}`,MS=`#define STANDARD
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
}`,ES=`#define STANDARD
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
}`,wS=`#define TOON
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
}`,TS=`#define TOON
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
}`,AS=`uniform float size;
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
}`,CS=`uniform vec3 diffuse;
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
}`,RS=`#include <common>
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
}`,bS=`uniform vec3 color;
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
}`,PS=`uniform float rotation;
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
}`,LS=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:Jv,alphahash_pars_fragment:ex,alphamap_fragment:tx,alphamap_pars_fragment:nx,alphatest_fragment:ix,alphatest_pars_fragment:rx,aomap_fragment:sx,aomap_pars_fragment:ox,batching_pars_vertex:ax,batching_vertex:lx,begin_vertex:cx,beginnormal_vertex:ux,bsdfs:dx,iridescence_fragment:fx,bumpmap_pars_fragment:hx,clipping_planes_fragment:px,clipping_planes_pars_fragment:mx,clipping_planes_pars_vertex:gx,clipping_planes_vertex:_x,color_fragment:vx,color_pars_fragment:xx,color_pars_vertex:yx,color_vertex:Sx,common:Mx,cube_uv_reflection_fragment:Ex,defaultnormal_vertex:wx,displacementmap_pars_vertex:Tx,displacementmap_vertex:Ax,emissivemap_fragment:Cx,emissivemap_pars_fragment:Rx,colorspace_fragment:bx,colorspace_pars_fragment:Px,envmap_fragment:Lx,envmap_common_pars_fragment:Dx,envmap_pars_fragment:Nx,envmap_pars_vertex:Ix,envmap_physical_pars_fragment:Xx,envmap_vertex:Ux,fog_vertex:Fx,fog_pars_vertex:Ox,fog_fragment:kx,fog_pars_fragment:zx,gradientmap_pars_fragment:Bx,lightmap_pars_fragment:Hx,lights_lambert_fragment:Vx,lights_lambert_pars_fragment:Gx,lights_pars_begin:Wx,lights_toon_fragment:jx,lights_toon_pars_fragment:Yx,lights_phong_fragment:qx,lights_phong_pars_fragment:$x,lights_physical_fragment:Kx,lights_physical_pars_fragment:Zx,lights_fragment_begin:Qx,lights_fragment_maps:Jx,lights_fragment_end:ey,logdepthbuf_fragment:ty,logdepthbuf_pars_fragment:ny,logdepthbuf_pars_vertex:iy,logdepthbuf_vertex:ry,map_fragment:sy,map_pars_fragment:oy,map_particle_fragment:ay,map_particle_pars_fragment:ly,metalnessmap_fragment:cy,metalnessmap_pars_fragment:uy,morphinstance_vertex:dy,morphcolor_vertex:fy,morphnormal_vertex:hy,morphtarget_pars_vertex:py,morphtarget_vertex:my,normal_fragment_begin:gy,normal_fragment_maps:_y,normal_pars_fragment:vy,normal_pars_vertex:xy,normal_vertex:yy,normalmap_pars_fragment:Sy,clearcoat_normal_fragment_begin:My,clearcoat_normal_fragment_maps:Ey,clearcoat_pars_fragment:wy,iridescence_pars_fragment:Ty,opaque_fragment:Ay,packing:Cy,premultiplied_alpha_fragment:Ry,project_vertex:by,dithering_fragment:Py,dithering_pars_fragment:Ly,roughnessmap_fragment:Dy,roughnessmap_pars_fragment:Ny,shadowmap_pars_fragment:Iy,shadowmap_pars_vertex:Uy,shadowmap_vertex:Fy,shadowmask_pars_fragment:Oy,skinbase_vertex:ky,skinning_pars_vertex:zy,skinning_vertex:By,skinnormal_vertex:Hy,specularmap_fragment:Vy,specularmap_pars_fragment:Gy,tonemapping_fragment:Wy,tonemapping_pars_fragment:Xy,transmission_fragment:jy,transmission_pars_fragment:Yy,uv_pars_fragment:qy,uv_pars_vertex:$y,uv_vertex:Ky,worldpos_vertex:Zy,background_vert:Qy,background_frag:Jy,backgroundCube_vert:eS,backgroundCube_frag:tS,cube_vert:nS,cube_frag:iS,depth_vert:rS,depth_frag:sS,distanceRGBA_vert:oS,distanceRGBA_frag:aS,equirect_vert:lS,equirect_frag:cS,linedashed_vert:uS,linedashed_frag:dS,meshbasic_vert:fS,meshbasic_frag:hS,meshlambert_vert:pS,meshlambert_frag:mS,meshmatcap_vert:gS,meshmatcap_frag:_S,meshnormal_vert:vS,meshnormal_frag:xS,meshphong_vert:yS,meshphong_frag:SS,meshphysical_vert:MS,meshphysical_frag:ES,meshtoon_vert:wS,meshtoon_frag:TS,points_vert:AS,points_frag:CS,shadow_vert:RS,shadow_frag:bS,sprite_vert:PS,sprite_frag:LS},Fe={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},mi={basic:{uniforms:yn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:yn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Ct(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:yn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:yn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:yn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new Ct(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:yn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:yn([Fe.points,Fe.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:yn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:yn([Fe.common,Fe.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:yn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:yn([Fe.sprite,Fe.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:yn([Fe.common,Fe.displacementmap,{referencePosition:{value:new ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:yn([Fe.lights,Fe.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};mi.physical={uniforms:yn([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const xl={r:0,b:0,g:0},Br=new Qn,DS=new jt;function NS(s,e,n,r,a,c,f){const d=new Ct(0);let h=c===!0?0:1,m,g,y=null,x=0,M=null;function T(F){let P=F.isScene===!0?F.background:null;return P&&P.isTexture&&(P=(F.backgroundBlurriness>0?n:e).get(P)),P}function A(F){let P=!1;const D=T(F);D===null?_(d,h):D&&D.isColor&&(_(D,1),P=!0);const Z=s.xr.getEnvironmentBlendMode();Z==="additive"?r.buffers.color.setClear(0,0,0,1,f):Z==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||P)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function v(F,P){const D=T(P);D&&(D.isCubeTexture||D.mapping===Il)?(g===void 0&&(g=new Zn(new jo(1,1,1),new xr({name:"BackgroundCubeMaterial",uniforms:Ks(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(Z,B,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(g)),Br.copy(P.backgroundRotation),Br.x*=-1,Br.y*=-1,Br.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Br.y*=-1,Br.z*=-1),g.material.uniforms.envMap.value=D,g.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(DS.makeRotationFromEuler(Br)),g.material.toneMapped=At.getTransfer(D.colorSpace)!==Nt,(y!==D||x!==D.version||M!==s.toneMapping)&&(g.material.needsUpdate=!0,y=D,x=D.version,M=s.toneMapping),g.layers.enableAll(),F.unshift(g,g.geometry,g.material,0,0,null)):D&&D.isTexture&&(m===void 0&&(m=new Zn(new Yo(2,2),new xr({name:"BackgroundMaterial",uniforms:Ks(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:zi,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=D,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=At.getTransfer(D.colorSpace)!==Nt,D.matrixAutoUpdate===!0&&D.updateMatrix(),m.material.uniforms.uvTransform.value.copy(D.matrix),(y!==D||x!==D.version||M!==s.toneMapping)&&(m.material.needsUpdate=!0,y=D,x=D.version,M=s.toneMapping),m.layers.enableAll(),F.unshift(m,m.geometry,m.material,0,0,null))}function _(F,P){F.getRGB(xl,Km(s)),r.buffers.color.setClear(xl.r,xl.g,xl.b,P,f)}return{getClearColor:function(){return d},setClearColor:function(F,P=1){d.set(F),h=P,_(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(F){h=F,_(d,h)},render:A,addToRenderList:v}}function IS(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=x(null);let c=a,f=!1;function d(R,V,ge,ee,_e){let ve=!1;const le=y(ee,ge,V);c!==le&&(c=le,m(c.object)),ve=M(R,ee,ge,_e),ve&&T(R,ee,ge,_e),_e!==null&&e.update(_e,s.ELEMENT_ARRAY_BUFFER),(ve||f)&&(f=!1,D(R,V,ge,ee),_e!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(_e).buffer))}function h(){return s.createVertexArray()}function m(R){return s.bindVertexArray(R)}function g(R){return s.deleteVertexArray(R)}function y(R,V,ge){const ee=ge.wireframe===!0;let _e=r[R.id];_e===void 0&&(_e={},r[R.id]=_e);let ve=_e[V.id];ve===void 0&&(ve={},_e[V.id]=ve);let le=ve[ee];return le===void 0&&(le=x(h()),ve[ee]=le),le}function x(R){const V=[],ge=[],ee=[];for(let _e=0;_e<n;_e++)V[_e]=0,ge[_e]=0,ee[_e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:ge,attributeDivisors:ee,object:R,attributes:{},index:null}}function M(R,V,ge,ee){const _e=c.attributes,ve=V.attributes;let le=0;const j=ge.getAttributes();for(const N in j)if(j[N].location>=0){const oe=_e[N];let I=ve[N];if(I===void 0&&(N==="instanceMatrix"&&R.instanceMatrix&&(I=R.instanceMatrix),N==="instanceColor"&&R.instanceColor&&(I=R.instanceColor)),oe===void 0||oe.attribute!==I||I&&oe.data!==I.data)return!0;le++}return c.attributesNum!==le||c.index!==ee}function T(R,V,ge,ee){const _e={},ve=V.attributes;let le=0;const j=ge.getAttributes();for(const N in j)if(j[N].location>=0){let oe=ve[N];oe===void 0&&(N==="instanceMatrix"&&R.instanceMatrix&&(oe=R.instanceMatrix),N==="instanceColor"&&R.instanceColor&&(oe=R.instanceColor));const I={};I.attribute=oe,oe&&oe.data&&(I.data=oe.data),_e[N]=I,le++}c.attributes=_e,c.attributesNum=le,c.index=ee}function A(){const R=c.newAttributes;for(let V=0,ge=R.length;V<ge;V++)R[V]=0}function v(R){_(R,0)}function _(R,V){const ge=c.newAttributes,ee=c.enabledAttributes,_e=c.attributeDivisors;ge[R]=1,ee[R]===0&&(s.enableVertexAttribArray(R),ee[R]=1),_e[R]!==V&&(s.vertexAttribDivisor(R,V),_e[R]=V)}function F(){const R=c.newAttributes,V=c.enabledAttributes;for(let ge=0,ee=V.length;ge<ee;ge++)V[ge]!==R[ge]&&(s.disableVertexAttribArray(ge),V[ge]=0)}function P(R,V,ge,ee,_e,ve,le){le===!0?s.vertexAttribIPointer(R,V,ge,_e,ve):s.vertexAttribPointer(R,V,ge,ee,_e,ve)}function D(R,V,ge,ee){A();const _e=ee.attributes,ve=ge.getAttributes(),le=V.defaultAttributeValues;for(const j in ve){const N=ve[j];if(N.location>=0){let te=_e[j];if(te===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(te=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(te=R.instanceColor)),te!==void 0){const oe=te.normalized,I=te.itemSize,J=e.get(te);if(J===void 0)continue;const be=J.buffer,q=J.type,W=J.bytesPerElement,he=q===s.INT||q===s.UNSIGNED_INT||te.gpuType===Ld;if(te.isInterleavedBufferAttribute){const xe=te.data,Ce=xe.stride,Re=te.offset;if(xe.isInstancedInterleavedBuffer){for(let ze=0;ze<N.locationSize;ze++)_(N.location+ze,xe.meshPerAttribute);R.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let ze=0;ze<N.locationSize;ze++)v(N.location+ze);s.bindBuffer(s.ARRAY_BUFFER,be);for(let ze=0;ze<N.locationSize;ze++)P(N.location+ze,I/N.locationSize,q,oe,Ce*W,(Re+I/N.locationSize*ze)*W,he)}else{if(te.isInstancedBufferAttribute){for(let xe=0;xe<N.locationSize;xe++)_(N.location+xe,te.meshPerAttribute);R.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let xe=0;xe<N.locationSize;xe++)v(N.location+xe);s.bindBuffer(s.ARRAY_BUFFER,be);for(let xe=0;xe<N.locationSize;xe++)P(N.location+xe,I/N.locationSize,q,oe,I*W,I/N.locationSize*xe*W,he)}}else if(le!==void 0){const oe=le[j];if(oe!==void 0)switch(oe.length){case 2:s.vertexAttrib2fv(N.location,oe);break;case 3:s.vertexAttrib3fv(N.location,oe);break;case 4:s.vertexAttrib4fv(N.location,oe);break;default:s.vertexAttrib1fv(N.location,oe)}}}}F()}function Z(){K();for(const R in r){const V=r[R];for(const ge in V){const ee=V[ge];for(const _e in ee)g(ee[_e].object),delete ee[_e];delete V[ge]}delete r[R]}}function B(R){if(r[R.id]===void 0)return;const V=r[R.id];for(const ge in V){const ee=V[ge];for(const _e in ee)g(ee[_e].object),delete ee[_e];delete V[ge]}delete r[R.id]}function O(R){for(const V in r){const ge=r[V];if(ge[R.id]===void 0)continue;const ee=ge[R.id];for(const _e in ee)g(ee[_e].object),delete ee[_e];delete ge[R.id]}}function K(){L(),f=!0,c!==a&&(c=a,m(c.object))}function L(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:K,resetDefaultState:L,dispose:Z,releaseStatesOfGeometry:B,releaseStatesOfProgram:O,initAttributes:A,enableAttribute:v,disableUnusedAttributes:F}}function US(s,e,n){let r;function a(m){r=m}function c(m,g){s.drawArrays(r,m,g),n.update(g,r,1)}function f(m,g,y){y!==0&&(s.drawArraysInstanced(r,m,g,y),n.update(g,r,y))}function d(m,g,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,g,0,y);let M=0;for(let T=0;T<y;T++)M+=g[T];n.update(M,r,1)}function h(m,g,y,x){if(y===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let T=0;T<m.length;T++)f(m[T],g[T],x[T]);else{M.multiDrawArraysInstancedWEBGL(r,m,0,g,0,x,0,y);let T=0;for(let A=0;A<y;A++)T+=g[A];for(let A=0;A<x.length;A++)n.update(T,r,x[A])}}this.setMode=a,this.render=c,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function FS(s,e,n,r){let a;function c(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function f(B){return!(B!==ci&&r.convert(B)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(B){const O=B===Wo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==Bi&&r.convert(B)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==Fi&&!O)}function h(B){if(B==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const g=h(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const y=n.logarithmicDepthBuffer===!0,x=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),A=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),F=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),D=M>0,Z=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:h,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:y,maxTextures:x,maxVertexTextures:M,maxTextureSize:T,maxCubemapSize:A,maxAttributes:v,maxVertexUniforms:_,maxVaryings:F,maxFragmentUniforms:P,vertexTextures:D,maxSamples:Z}}function OS(s){const e=this;let n=null,r=0,a=!1,c=!1;const f=new mr,d=new ht,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(y,x){const M=y.length!==0||x||r!==0||a;return a=x,r=y.length,M},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(y,x){n=g(y,x,0)},this.setState=function(y,x,M){const T=y.clippingPlanes,A=y.clipIntersection,v=y.clipShadows,_=s.get(y);if(!a||T===null||T.length===0||c&&!v)c?g(null):m();else{const F=c?0:r,P=F*4;let D=_.clippingState||null;h.value=D,D=g(T,x,P,M);for(let Z=0;Z!==P;++Z)D[Z]=n[Z];_.clippingState=D,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=F}};function m(){h.value!==n&&(h.value=n,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(y,x,M,T){const A=y!==null?y.length:0;let v=null;if(A!==0){if(v=h.value,T!==!0||v===null){const _=M+A*4,F=x.matrixWorldInverse;d.getNormalMatrix(F),(v===null||v.length<_)&&(v=new Float32Array(_));for(let P=0,D=M;P!==A;++P,D+=4)f.copy(y[P]).applyMatrix4(F,d),f.normal.toArray(v,D),v[D+3]=f.constant}h.value=v,h.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,v}}function kS(s){let e=new WeakMap;function n(f,d){return d===Zu?f.mapping=js:d===Qu&&(f.mapping=Ys),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===Zu||d===Qu)if(e.has(f)){const h=e.get(f).texture;return n(h,f.mapping)}else{const h=f.image;if(h&&h.height>0){const m=new $v(h.height);return m.fromEquirectangularTexture(s,f),e.set(f,m),f.addEventListener("dispose",a),n(m.texture,f.mapping)}else return null}}return f}function a(f){const d=f.target;d.removeEventListener("dispose",a);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}class zS extends Zm{constructor(e=-1,n=1,r=1,a=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let c=r-e,f=r+e,d=a+n,h=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,f=c+m*this.view.width,d-=g*this.view.offsetY,h=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Hs=4,Zp=[.125,.215,.35,.446,.526,.582],Xr=20,Hu=new zS,Qp=new Ct;let Vu=null,Gu=0,Wu=0,Xu=!1;const Vr=(1+Math.sqrt(5))/2,zs=1/Vr,Jp=[new ne(-Vr,zs,0),new ne(Vr,zs,0),new ne(-zs,0,Vr),new ne(zs,0,Vr),new ne(0,Vr,-zs),new ne(0,Vr,zs),new ne(-1,1,-1),new ne(1,1,-1),new ne(-1,1,1),new ne(1,1,1)];class em{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){Vu=this._renderer.getRenderTarget(),Gu=this._renderer.getActiveCubeFace(),Wu=this._renderer.getActiveMipmapLevel(),Xu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,r,a,c),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=im(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vu,Gu,Wu),this._renderer.xr.enabled=Xu,e.scissorTest=!1,yl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===js||e.mapping===Ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vu=this._renderer.getRenderTarget(),Gu=this._renderer.getActiveCubeFace(),Wu=this._renderer.getActiveMipmapLevel(),Xu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:Wo,format:ci,colorSpace:yr,depthBuffer:!1},a=tm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tm(e,n,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=BS(c)),this._blurMaterial=HS(c,e,n)}return a}_compileMaterial(e){const n=new Zn(this._lodPlanes[0],e);this._renderer.compile(n,Hu)}_sceneToCubeUV(e,n,r,a){const d=new Bn(90,1,n,r),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,y=g.autoClear,x=g.toneMapping;g.getClearColor(Qp),g.toneMapping=vr,g.autoClear=!1;const M=new Ol({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1}),T=new Zn(new jo,M);let A=!1;const v=e.background;v?v.isColor&&(M.color.copy(v),e.background=null,A=!0):(M.color.copy(Qp),A=!0);for(let _=0;_<6;_++){const F=_%3;F===0?(d.up.set(0,h[_],0),d.lookAt(m[_],0,0)):F===1?(d.up.set(0,0,h[_]),d.lookAt(0,m[_],0)):(d.up.set(0,h[_],0),d.lookAt(0,0,m[_]));const P=this._cubeSize;yl(a,F*P,_>2?P:0,P,P),g.setRenderTarget(a),A&&g.render(T,d),g.render(e,d)}T.geometry.dispose(),T.material.dispose(),g.toneMapping=x,g.autoClear=y,e.background=v}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===js||e.mapping===Ys;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=im()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nm());const c=a?this._cubemapMaterial:this._equirectMaterial,f=new Zn(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=e;const h=this._cubeSize;yl(n,0,0,3*h,2*h),r.setRenderTarget(n),r.render(f,Hu)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let c=1;c<a;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=Jp[(a-c-1)%Jp.length];this._blur(e,c-1,c,f,d)}n.autoClear=r}_blur(e,n,r,a,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,n,r,a,"latitudinal",c),this._halfBlur(f,e,r,r,a,"longitudinal",c)}_halfBlur(e,n,r,a,c,f,d){const h=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,y=new Zn(this._lodPlanes[a],m),x=m.uniforms,M=this._sizeLods[r]-1,T=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Xr-1),A=c/T,v=isFinite(c)?1+Math.floor(g*A):Xr;v>Xr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Xr}`);const _=[];let F=0;for(let O=0;O<Xr;++O){const K=O/A,L=Math.exp(-K*K/2);_.push(L),O===0?F+=L:O<v&&(F+=2*L)}for(let O=0;O<_.length;O++)_[O]=_[O]/F;x.envMap.value=e.texture,x.samples.value=v,x.weights.value=_,x.latitudinal.value=f==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:P}=this;x.dTheta.value=T,x.mipInt.value=P-r;const D=this._sizeLods[a],Z=3*D*(a>P-Hs?a-P+Hs:0),B=4*(this._cubeSize-D);yl(n,Z,B,3*D,2*D),h.setRenderTarget(n),h.render(y,Hu)}}function BS(s){const e=[],n=[],r=[];let a=s;const c=s-Hs+1+Zp.length;for(let f=0;f<c;f++){const d=Math.pow(2,a);n.push(d);let h=1/d;f>s-Hs?h=Zp[f-s+Hs-1]:f===0&&(h=0),r.push(h);const m=1/(d-2),g=-m,y=1+m,x=[g,g,y,g,y,y,g,g,y,y,g,y],M=6,T=6,A=3,v=2,_=1,F=new Float32Array(A*T*M),P=new Float32Array(v*T*M),D=new Float32Array(_*T*M);for(let B=0;B<M;B++){const O=B%3*2/3-1,K=B>2?0:-1,L=[O,K,0,O+2/3,K,0,O+2/3,K+1,0,O,K,0,O+2/3,K+1,0,O,K+1,0];F.set(L,A*T*B),P.set(x,v*T*B);const R=[B,B,B,B,B,B];D.set(R,_*T*B)}const Z=new Sr;Z.setAttribute("position",new vi(F,A)),Z.setAttribute("uv",new vi(P,v)),Z.setAttribute("faceIndex",new vi(D,_)),e.push(Z),a>Hs&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function tm(s,e,n){const r=new $r(s,e,n);return r.texture.mapping=Il,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function yl(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function HS(s,e,n){const r=new Float32Array(Xr),a=new ne(0,1,0);return new xr({name:"SphericalGaussianBlur",defines:{n:Xr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Vd(),fragmentShader:`

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
		`,blending:_r,depthTest:!1,depthWrite:!1})}function nm(){return new xr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vd(),fragmentShader:`

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
		`,blending:_r,depthTest:!1,depthWrite:!1})}function im(){return new xr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function Vd(){return`

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
	`}function VS(s){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const h=d.mapping,m=h===Zu||h===Qu,g=h===js||h===Ys;if(m||g){let y=e.get(d);const x=y!==void 0?y.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return n===null&&(n=new em(s)),y=m?n.fromEquirectangular(d,y):n.fromCubemap(d,y),y.texture.pmremVersion=d.pmremVersion,e.set(d,y),y.texture;if(y!==void 0)return y.texture;{const M=d.image;return m&&M&&M.height>0||g&&M&&a(M)?(n===null&&(n=new em(s)),y=m?n.fromEquirectangular(d):n.fromCubemap(d),y.texture.pmremVersion=d.pmremVersion,e.set(d,y),d.addEventListener("dispose",c),y.texture):null}}}return d}function a(d){let h=0;const m=6;for(let g=0;g<m;g++)d[g]!==void 0&&h++;return h===m}function c(d){const h=d.target;h.removeEventListener("dispose",c);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function f(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function GS(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&Wm("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function WS(s,e,n,r){const a={},c=new WeakMap;function f(y){const x=y.target;x.index!==null&&e.remove(x.index);for(const T in x.attributes)e.remove(x.attributes[T]);for(const T in x.morphAttributes){const A=x.morphAttributes[T];for(let v=0,_=A.length;v<_;v++)e.remove(A[v])}x.removeEventListener("dispose",f),delete a[x.id];const M=c.get(x);M&&(e.remove(M),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function d(y,x){return a[x.id]===!0||(x.addEventListener("dispose",f),a[x.id]=!0,n.memory.geometries++),x}function h(y){const x=y.attributes;for(const T in x)e.update(x[T],s.ARRAY_BUFFER);const M=y.morphAttributes;for(const T in M){const A=M[T];for(let v=0,_=A.length;v<_;v++)e.update(A[v],s.ARRAY_BUFFER)}}function m(y){const x=[],M=y.index,T=y.attributes.position;let A=0;if(M!==null){const F=M.array;A=M.version;for(let P=0,D=F.length;P<D;P+=3){const Z=F[P+0],B=F[P+1],O=F[P+2];x.push(Z,B,B,O,O,Z)}}else if(T!==void 0){const F=T.array;A=T.version;for(let P=0,D=F.length/3-1;P<D;P+=3){const Z=P+0,B=P+1,O=P+2;x.push(Z,B,B,O,O,Z)}}else return;const v=new(Gm(x)?$m:qm)(x,1);v.version=A;const _=c.get(y);_&&e.remove(_),c.set(y,v)}function g(y){const x=c.get(y);if(x){const M=y.index;M!==null&&x.version<M.version&&m(y)}else m(y);return c.get(y)}return{get:d,update:h,getWireframeAttribute:g}}function XS(s,e,n){let r;function a(x){r=x}let c,f;function d(x){c=x.type,f=x.bytesPerElement}function h(x,M){s.drawElements(r,M,c,x*f),n.update(M,r,1)}function m(x,M,T){T!==0&&(s.drawElementsInstanced(r,M,c,x*f,T),n.update(M,r,T))}function g(x,M,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,c,x,0,T);let v=0;for(let _=0;_<T;_++)v+=M[_];n.update(v,r,1)}function y(x,M,T,A){if(T===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let _=0;_<x.length;_++)m(x[_]/f,M[_],A[_]);else{v.multiDrawElementsInstancedWEBGL(r,M,0,c,x,0,A,0,T);let _=0;for(let F=0;F<T;F++)_+=M[F];for(let F=0;F<A.length;F++)n.update(_,r,A[F])}}this.setMode=a,this.setIndex=d,this.render=h,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=y}function jS(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,d){switch(n.calls++,f){case s.TRIANGLES:n.triangles+=d*(c/3);break;case s.LINES:n.lines+=d*(c/2);break;case s.LINE_STRIP:n.lines+=d*(c-1);break;case s.LINE_LOOP:n.lines+=d*c;break;case s.POINTS:n.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function YS(s,e,n){const r=new WeakMap,a=new on;function c(f,d,h){const m=f.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,y=g!==void 0?g.length:0;let x=r.get(d);if(x===void 0||x.count!==y){let R=function(){K.dispose(),r.delete(d),d.removeEventListener("dispose",R)};var M=R;x!==void 0&&x.texture.dispose();const T=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,v=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],F=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let D=0;T===!0&&(D=1),A===!0&&(D=2),v===!0&&(D=3);let Z=d.attributes.position.count*D,B=1;Z>e.maxTextureSize&&(B=Math.ceil(Z/e.maxTextureSize),Z=e.maxTextureSize);const O=new Float32Array(Z*B*4*y),K=new jm(O,Z,B,y);K.type=Fi,K.needsUpdate=!0;const L=D*4;for(let V=0;V<y;V++){const ge=_[V],ee=F[V],_e=P[V],ve=Z*B*4*V;for(let le=0;le<ge.count;le++){const j=le*L;T===!0&&(a.fromBufferAttribute(ge,le),O[ve+j+0]=a.x,O[ve+j+1]=a.y,O[ve+j+2]=a.z,O[ve+j+3]=0),A===!0&&(a.fromBufferAttribute(ee,le),O[ve+j+4]=a.x,O[ve+j+5]=a.y,O[ve+j+6]=a.z,O[ve+j+7]=0),v===!0&&(a.fromBufferAttribute(_e,le),O[ve+j+8]=a.x,O[ve+j+9]=a.y,O[ve+j+10]=a.z,O[ve+j+11]=_e.itemSize===4?a.w:1)}}x={count:y,texture:K,size:new ut(Z,B)},r.set(d,x),d.addEventListener("dispose",R)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",f.morphTexture,n);else{let T=0;for(let v=0;v<m.length;v++)T+=m[v];const A=d.morphTargetsRelative?1:1-T;h.getUniforms().setValue(s,"morphTargetBaseInfluence",A),h.getUniforms().setValue(s,"morphTargetInfluences",m)}h.getUniforms().setValue(s,"morphTargetsTexture",x.texture,n),h.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:c}}function qS(s,e,n,r){let a=new WeakMap;function c(h){const m=r.render.frame,g=h.geometry,y=e.get(h,g);if(a.get(y)!==m&&(e.update(y),a.set(y,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),a.get(h)!==m&&(n.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&n.update(h.instanceColor,s.ARRAY_BUFFER),a.set(h,m))),h.isSkinnedMesh){const x=h.skeleton;a.get(x)!==m&&(x.update(),a.set(x,m))}return y}function f(){a=new WeakMap}function d(h){const m=h.target;m.removeEventListener("dispose",d),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:c,dispose:f}}class tg extends En{constructor(e,n,r,a,c,f,d,h,m,g=Ws){if(g!==Ws&&g!==$s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===Ws&&(r=qr),r===void 0&&g===$s&&(r=qs),super(null,a,c,f,d,h,g,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=d!==void 0?d:Kn,this.minFilter=h!==void 0?h:Kn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const ng=new En,rm=new tg(1,1),ig=new jm,rg=new Nv,sg=new Qm,sm=[],om=[],am=new Float32Array(16),lm=new Float32Array(9),cm=new Float32Array(4);function Qs(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let c=sm[a];if(c===void 0&&(c=new Float32Array(a),sm[a]=c),e!==0){r.toArray(c,0);for(let f=1,d=0;f!==e;++f)d+=n,s[f].toArray(c,d)}return c}function Zt(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function Qt(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function kl(s,e){let n=om[e];n===void 0&&(n=new Int32Array(e),om[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function $S(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function KS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;s.uniform2fv(this.addr,e),Qt(n,e)}}function ZS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Zt(n,e))return;s.uniform3fv(this.addr,e),Qt(n,e)}}function QS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;s.uniform4fv(this.addr,e),Qt(n,e)}}function JS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Zt(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,r))return;cm.set(r),s.uniformMatrix2fv(this.addr,!1,cm),Qt(n,r)}}function eM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Zt(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,r))return;lm.set(r),s.uniformMatrix3fv(this.addr,!1,lm),Qt(n,r)}}function tM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Zt(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,r))return;am.set(r),s.uniformMatrix4fv(this.addr,!1,am),Qt(n,r)}}function nM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function iM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;s.uniform2iv(this.addr,e),Qt(n,e)}}function rM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Zt(n,e))return;s.uniform3iv(this.addr,e),Qt(n,e)}}function sM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;s.uniform4iv(this.addr,e),Qt(n,e)}}function oM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function aM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;s.uniform2uiv(this.addr,e),Qt(n,e)}}function lM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Zt(n,e))return;s.uniform3uiv(this.addr,e),Qt(n,e)}}function cM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;s.uniform4uiv(this.addr,e),Qt(n,e)}}function uM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let c;this.type===s.SAMPLER_2D_SHADOW?(rm.compareFunction=Vm,c=rm):c=ng,n.setTexture2D(e||c,a)}function dM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||rg,a)}function fM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||sg,a)}function hM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||ig,a)}function pM(s){switch(s){case 5126:return $S;case 35664:return KS;case 35665:return ZS;case 35666:return QS;case 35674:return JS;case 35675:return eM;case 35676:return tM;case 5124:case 35670:return nM;case 35667:case 35671:return iM;case 35668:case 35672:return rM;case 35669:case 35673:return sM;case 5125:return oM;case 36294:return aM;case 36295:return lM;case 36296:return cM;case 35678:case 36198:case 36298:case 36306:case 35682:return uM;case 35679:case 36299:case 36307:return dM;case 35680:case 36300:case 36308:case 36293:return fM;case 36289:case 36303:case 36311:case 36292:return hM}}function mM(s,e){s.uniform1fv(this.addr,e)}function gM(s,e){const n=Qs(e,this.size,2);s.uniform2fv(this.addr,n)}function _M(s,e){const n=Qs(e,this.size,3);s.uniform3fv(this.addr,n)}function vM(s,e){const n=Qs(e,this.size,4);s.uniform4fv(this.addr,n)}function xM(s,e){const n=Qs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function yM(s,e){const n=Qs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function SM(s,e){const n=Qs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function MM(s,e){s.uniform1iv(this.addr,e)}function EM(s,e){s.uniform2iv(this.addr,e)}function wM(s,e){s.uniform3iv(this.addr,e)}function TM(s,e){s.uniform4iv(this.addr,e)}function AM(s,e){s.uniform1uiv(this.addr,e)}function CM(s,e){s.uniform2uiv(this.addr,e)}function RM(s,e){s.uniform3uiv(this.addr,e)}function bM(s,e){s.uniform4uiv(this.addr,e)}function PM(s,e,n){const r=this.cache,a=e.length,c=kl(n,a);Zt(r,c)||(s.uniform1iv(this.addr,c),Qt(r,c));for(let f=0;f!==a;++f)n.setTexture2D(e[f]||ng,c[f])}function LM(s,e,n){const r=this.cache,a=e.length,c=kl(n,a);Zt(r,c)||(s.uniform1iv(this.addr,c),Qt(r,c));for(let f=0;f!==a;++f)n.setTexture3D(e[f]||rg,c[f])}function DM(s,e,n){const r=this.cache,a=e.length,c=kl(n,a);Zt(r,c)||(s.uniform1iv(this.addr,c),Qt(r,c));for(let f=0;f!==a;++f)n.setTextureCube(e[f]||sg,c[f])}function NM(s,e,n){const r=this.cache,a=e.length,c=kl(n,a);Zt(r,c)||(s.uniform1iv(this.addr,c),Qt(r,c));for(let f=0;f!==a;++f)n.setTexture2DArray(e[f]||ig,c[f])}function IM(s){switch(s){case 5126:return mM;case 35664:return gM;case 35665:return _M;case 35666:return vM;case 35674:return xM;case 35675:return yM;case 35676:return SM;case 5124:case 35670:return MM;case 35667:case 35671:return EM;case 35668:case 35672:return wM;case 35669:case 35673:return TM;case 5125:return AM;case 36294:return CM;case 36295:return RM;case 36296:return bM;case 35678:case 36198:case 36298:case 36306:case 35682:return PM;case 35679:case 36299:case 36307:return LM;case 35680:case 36300:case 36308:case 36293:return DM;case 36289:case 36303:case 36311:case 36292:return NM}}class UM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=pM(n.type)}}class FM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=IM(n.type)}}class OM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let c=0,f=a.length;c!==f;++c){const d=a[c];d.setValue(e,n[d.id],r)}}}const ju=/(\w+)(\])?(\[|\.)?/g;function um(s,e){s.seq.push(e),s.map[e.id]=e}function kM(s,e,n){const r=s.name,a=r.length;for(ju.lastIndex=0;;){const c=ju.exec(r),f=ju.lastIndex;let d=c[1];const h=c[2]==="]",m=c[3];if(h&&(d=d|0),m===void 0||m==="["&&f+2===a){um(n,m===void 0?new UM(d,s,e):new FM(d,s,e));break}else{let y=n.map[d];y===void 0&&(y=new OM(d),um(n,y)),n=y}}}class Cl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const c=e.getActiveUniform(n,a),f=e.getUniformLocation(n,c.name);kM(c,f,this)}}setValue(e,n,r,a){const c=this.map[n];c!==void 0&&c.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let c=0,f=n.length;c!==f;++c){const d=n[c],h=r[d.id];h.needsUpdate!==!1&&d.setValue(e,h.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,c=e.length;a!==c;++a){const f=e[a];f.id in n&&r.push(f)}return r}}function dm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const zM=37297;let BM=0;function HM(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let f=a;f<c;f++){const d=f+1;r.push(`${d===e?">":" "} ${d}: ${n[f]}`)}return r.join(`
`)}function VM(s){const e=At.getPrimaries(At.workingColorSpace),n=At.getPrimaries(s);let r;switch(e===n?r="":e===Ll&&n===Pl?r="LinearDisplayP3ToLinearSRGB":e===Pl&&n===Ll&&(r="LinearSRGBToLinearDisplayP3"),s){case yr:case Ul:return[r,"LinearTransferOETF"];case $n:case Od:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[r,"LinearTransferOETF"]}}function fm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const c=/ERROR: 0:(\d+)/.exec(a);if(c){const f=parseInt(c[1]);return n.toUpperCase()+`

`+a+`

`+HM(s.getShaderSource(e),f)}else return a}function GM(s,e){const n=VM(e);return`vec4 ${s}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function WM(s,e){let n;switch(e){case X0:n="Linear";break;case j0:n="Reinhard";break;case Y0:n="OptimizedCineon";break;case q0:n="ACESFilmic";break;case K0:n="AgX";break;case Z0:n="Neutral";break;case $0:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function XM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ko).join(`
`)}function jM(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function YM(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const c=s.getActiveAttrib(e,a),f=c.name;let d=1;c.type===s.FLOAT_MAT2&&(d=2),c.type===s.FLOAT_MAT3&&(d=3),c.type===s.FLOAT_MAT4&&(d=4),n[f]={type:c.type,location:s.getAttribLocation(e,f),locationSize:d}}return n}function ko(s){return s!==""}function hm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cd(s){return s.replace(qM,KM)}const $M=new Map;function KM(s,e){let n=ft[e];if(n===void 0){const r=$M.get(e);if(r!==void 0)n=ft[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Cd(n)}const ZM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mm(s){return s.replace(ZM,QM)}function QM(s,e,n,r){let a="";for(let c=parseInt(e);c<parseInt(n);c++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return a}function gm(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function JM(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===bm?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===_0?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ui&&(e="SHADOWMAP_TYPE_VSM"),e}function eE(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case js:case Ys:e="ENVMAP_TYPE_CUBE";break;case Il:e="ENVMAP_TYPE_CUBE_UV";break}return e}function tE(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ys:e="ENVMAP_MODE_REFRACTION";break}return e}function nE(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Pm:e="ENVMAP_BLENDING_MULTIPLY";break;case G0:e="ENVMAP_BLENDING_MIX";break;case W0:e="ENVMAP_BLENDING_ADD";break}return e}function iE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function rE(s,e,n,r){const a=s.getContext(),c=n.defines;let f=n.vertexShader,d=n.fragmentShader;const h=JM(n),m=eE(n),g=tE(n),y=nE(n),x=iE(n),M=XM(n),T=jM(c),A=a.createProgram();let v,_,F=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(ko).join(`
`),v.length>0&&(v+=`
`),_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(ko).join(`
`),_.length>0&&(_+=`
`)):(v=[gm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ko).join(`
`),_=[gm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+g:"",n.envMap?"#define "+y:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==vr?"#define TONE_MAPPING":"",n.toneMapping!==vr?ft.tonemapping_pars_fragment:"",n.toneMapping!==vr?WM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,GM("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ko).join(`
`)),f=Cd(f),f=hm(f,n),f=pm(f,n),d=Cd(d),d=hm(d,n),d=pm(d,n),f=mm(f),d=mm(d),n.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,v=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,_=["#define varying in",n.glslVersion===Pp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Pp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const P=F+v+f,D=F+_+d,Z=dm(a,a.VERTEX_SHADER,P),B=dm(a,a.FRAGMENT_SHADER,D);a.attachShader(A,Z),a.attachShader(A,B),n.index0AttributeName!==void 0?a.bindAttribLocation(A,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(A,0,"position"),a.linkProgram(A);function O(V){if(s.debug.checkShaderErrors){const ge=a.getProgramInfoLog(A).trim(),ee=a.getShaderInfoLog(Z).trim(),_e=a.getShaderInfoLog(B).trim();let ve=!0,le=!0;if(a.getProgramParameter(A,a.LINK_STATUS)===!1)if(ve=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,A,Z,B);else{const j=fm(a,Z,"vertex"),N=fm(a,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(A,a.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ge+`
`+j+`
`+N)}else ge!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ge):(ee===""||_e==="")&&(le=!1);le&&(V.diagnostics={runnable:ve,programLog:ge,vertexShader:{log:ee,prefix:v},fragmentShader:{log:_e,prefix:_}})}a.deleteShader(Z),a.deleteShader(B),K=new Cl(a,A),L=YM(a,A)}let K;this.getUniforms=function(){return K===void 0&&O(this),K};let L;this.getAttributes=function(){return L===void 0&&O(this),L};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=a.getProgramParameter(A,zM)),R},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(A),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=BM++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=Z,this.fragmentShader=B,this}let sE=0;class oE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),c=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(a)===!1&&(f.add(a),a.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new aE(e),n.set(e,r)),r}}class aE{constructor(e){this.id=sE++,this.code=e,this.usedTimes=0}}function lE(s,e,n,r,a,c,f){const d=new Hd,h=new oE,m=new Set,g=[],y=a.logarithmicDepthBuffer,x=a.vertexTextures;let M=a.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(L){return m.add(L),L===0?"uv":`uv${L}`}function v(L,R,V,ge,ee){const _e=ge.fog,ve=ee.geometry,le=L.isMeshStandardMaterial?ge.environment:null,j=(L.isMeshStandardMaterial?n:e).get(L.envMap||le),N=j&&j.mapping===Il?j.image.height:null,te=T[L.type];L.precision!==null&&(M=a.getMaxPrecision(L.precision),M!==L.precision&&console.warn("THREE.WebGLProgram.getParameters:",L.precision,"not supported, using",M,"instead."));const oe=ve.morphAttributes.position||ve.morphAttributes.normal||ve.morphAttributes.color,I=oe!==void 0?oe.length:0;let J=0;ve.morphAttributes.position!==void 0&&(J=1),ve.morphAttributes.normal!==void 0&&(J=2),ve.morphAttributes.color!==void 0&&(J=3);let be,q,W,he;if(te){const _t=mi[te];be=_t.vertexShader,q=_t.fragmentShader}else be=L.vertexShader,q=L.fragmentShader,h.update(L),W=h.getVertexShaderID(L),he=h.getFragmentShaderID(L);const xe=s.getRenderTarget(),Ce=ee.isInstancedMesh===!0,Re=ee.isBatchedMesh===!0,ze=!!L.map,pt=!!L.matcap,k=!!j,vt=!!L.aoMap,Qe=!!L.lightMap,ct=!!L.bumpMap,Be=!!L.normalMap,gt=!!L.displacementMap,et=!!L.emissiveMap,Je=!!L.metalnessMap,C=!!L.roughnessMap,S=L.anisotropy>0,z=L.clearcoat>0,Y=L.dispersion>0,ue=L.iridescence>0,pe=L.sheen>0,Me=L.transmission>0,Se=S&&!!L.anisotropyMap,Pe=z&&!!L.clearcoatMap,Ve=z&&!!L.clearcoatNormalMap,ye=z&&!!L.clearcoatRoughnessMap,De=ue&&!!L.iridescenceMap,rt=ue&&!!L.iridescenceThicknessMap,We=pe&&!!L.sheenColorMap,Ue=pe&&!!L.sheenRoughnessMap,Ye=!!L.specularMap,Ze=!!L.specularColorMap,yt=!!L.specularIntensityMap,E=Me&&!!L.transmissionMap,ie=Me&&!!L.thicknessMap,ae=!!L.gradientMap,me=!!L.alphaMap,we=L.alphaTest>0,$e=!!L.alphaHash,ot=!!L.extensions;let It=vr;L.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(It=s.toneMapping);const Ht={shaderID:te,shaderType:L.type,shaderName:L.name,vertexShader:be,fragmentShader:q,defines:L.defines,customVertexShaderID:W,customFragmentShaderID:he,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:M,batching:Re,batchingColor:Re&&ee._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&ee.instanceColor!==null,instancingMorph:Ce&&ee.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:xe===null?s.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:yr,alphaToCoverage:!!L.alphaToCoverage,map:ze,matcap:pt,envMap:k,envMapMode:k&&j.mapping,envMapCubeUVHeight:N,aoMap:vt,lightMap:Qe,bumpMap:ct,normalMap:Be,displacementMap:x&&gt,emissiveMap:et,normalMapObjectSpace:Be&&L.normalMapType===nv,normalMapTangentSpace:Be&&L.normalMapType===tv,metalnessMap:Je,roughnessMap:C,anisotropy:S,anisotropyMap:Se,clearcoat:z,clearcoatMap:Pe,clearcoatNormalMap:Ve,clearcoatRoughnessMap:ye,dispersion:Y,iridescence:ue,iridescenceMap:De,iridescenceThicknessMap:rt,sheen:pe,sheenColorMap:We,sheenRoughnessMap:Ue,specularMap:Ye,specularColorMap:Ze,specularIntensityMap:yt,transmission:Me,transmissionMap:E,thicknessMap:ie,gradientMap:ae,opaque:L.transparent===!1&&L.blending===Gs&&L.alphaToCoverage===!1,alphaMap:me,alphaTest:we,alphaHash:$e,combine:L.combine,mapUv:ze&&A(L.map.channel),aoMapUv:vt&&A(L.aoMap.channel),lightMapUv:Qe&&A(L.lightMap.channel),bumpMapUv:ct&&A(L.bumpMap.channel),normalMapUv:Be&&A(L.normalMap.channel),displacementMapUv:gt&&A(L.displacementMap.channel),emissiveMapUv:et&&A(L.emissiveMap.channel),metalnessMapUv:Je&&A(L.metalnessMap.channel),roughnessMapUv:C&&A(L.roughnessMap.channel),anisotropyMapUv:Se&&A(L.anisotropyMap.channel),clearcoatMapUv:Pe&&A(L.clearcoatMap.channel),clearcoatNormalMapUv:Ve&&A(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&A(L.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&A(L.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&A(L.iridescenceThicknessMap.channel),sheenColorMapUv:We&&A(L.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&A(L.sheenRoughnessMap.channel),specularMapUv:Ye&&A(L.specularMap.channel),specularColorMapUv:Ze&&A(L.specularColorMap.channel),specularIntensityMapUv:yt&&A(L.specularIntensityMap.channel),transmissionMapUv:E&&A(L.transmissionMap.channel),thicknessMapUv:ie&&A(L.thicknessMap.channel),alphaMapUv:me&&A(L.alphaMap.channel),vertexTangents:!!ve.attributes.tangent&&(Be||S),vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!ve.attributes.color&&ve.attributes.color.itemSize===4,pointsUvs:ee.isPoints===!0&&!!ve.attributes.uv&&(ze||me),fog:!!_e,useFog:L.fog===!0,fogExp2:!!_e&&_e.isFogExp2,flatShading:L.flatShading===!0,sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:y,skinning:ee.isSkinnedMesh===!0,morphTargets:ve.morphAttributes.position!==void 0,morphNormals:ve.morphAttributes.normal!==void 0,morphColors:ve.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:J,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:L.dithering,shadowMapEnabled:s.shadowMap.enabled&&V.length>0,shadowMapType:s.shadowMap.type,toneMapping:It,decodeVideoTexture:ze&&L.map.isVideoTexture===!0&&At.getTransfer(L.map.colorSpace)===Nt,premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===gi,flipSided:L.side===Mn,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionClipCullDistance:ot&&L.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&L.extensions.multiDraw===!0||Re)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:L.customProgramCacheKey()};return Ht.vertexUv1s=m.has(1),Ht.vertexUv2s=m.has(2),Ht.vertexUv3s=m.has(3),m.clear(),Ht}function _(L){const R=[];if(L.shaderID?R.push(L.shaderID):(R.push(L.customVertexShaderID),R.push(L.customFragmentShaderID)),L.defines!==void 0)for(const V in L.defines)R.push(V),R.push(L.defines[V]);return L.isRawShaderMaterial===!1&&(F(R,L),P(R,L),R.push(s.outputColorSpace)),R.push(L.customProgramCacheKey),R.join()}function F(L,R){L.push(R.precision),L.push(R.outputColorSpace),L.push(R.envMapMode),L.push(R.envMapCubeUVHeight),L.push(R.mapUv),L.push(R.alphaMapUv),L.push(R.lightMapUv),L.push(R.aoMapUv),L.push(R.bumpMapUv),L.push(R.normalMapUv),L.push(R.displacementMapUv),L.push(R.emissiveMapUv),L.push(R.metalnessMapUv),L.push(R.roughnessMapUv),L.push(R.anisotropyMapUv),L.push(R.clearcoatMapUv),L.push(R.clearcoatNormalMapUv),L.push(R.clearcoatRoughnessMapUv),L.push(R.iridescenceMapUv),L.push(R.iridescenceThicknessMapUv),L.push(R.sheenColorMapUv),L.push(R.sheenRoughnessMapUv),L.push(R.specularMapUv),L.push(R.specularColorMapUv),L.push(R.specularIntensityMapUv),L.push(R.transmissionMapUv),L.push(R.thicknessMapUv),L.push(R.combine),L.push(R.fogExp2),L.push(R.sizeAttenuation),L.push(R.morphTargetsCount),L.push(R.morphAttributeCount),L.push(R.numDirLights),L.push(R.numPointLights),L.push(R.numSpotLights),L.push(R.numSpotLightMaps),L.push(R.numHemiLights),L.push(R.numRectAreaLights),L.push(R.numDirLightShadows),L.push(R.numPointLightShadows),L.push(R.numSpotLightShadows),L.push(R.numSpotLightShadowsWithMaps),L.push(R.numLightProbes),L.push(R.shadowMapType),L.push(R.toneMapping),L.push(R.numClippingPlanes),L.push(R.numClipIntersection),L.push(R.depthPacking)}function P(L,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),L.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.skinning&&d.enable(4),R.morphTargets&&d.enable(5),R.morphNormals&&d.enable(6),R.morphColors&&d.enable(7),R.premultipliedAlpha&&d.enable(8),R.shadowMapEnabled&&d.enable(9),R.doubleSided&&d.enable(10),R.flipSided&&d.enable(11),R.useDepthPacking&&d.enable(12),R.dithering&&d.enable(13),R.transmission&&d.enable(14),R.sheen&&d.enable(15),R.opaque&&d.enable(16),R.pointsUvs&&d.enable(17),R.decodeVideoTexture&&d.enable(18),R.alphaToCoverage&&d.enable(19),L.push(d.mask)}function D(L){const R=T[L.type];let V;if(R){const ge=mi[R];V=Xv.clone(ge.uniforms)}else V=L.uniforms;return V}function Z(L,R){let V;for(let ge=0,ee=g.length;ge<ee;ge++){const _e=g[ge];if(_e.cacheKey===R){V=_e,++V.usedTimes;break}}return V===void 0&&(V=new rE(s,R,L,c),g.push(V)),V}function B(L){if(--L.usedTimes===0){const R=g.indexOf(L);g[R]=g[g.length-1],g.pop(),L.destroy()}}function O(L){h.remove(L)}function K(){h.dispose()}return{getParameters:v,getProgramCacheKey:_,getUniforms:D,acquireProgram:Z,releaseProgram:B,releaseShaderCache:O,programs:g,dispose:K}}function cE(){let s=new WeakMap;function e(c){let f=s.get(c);return f===void 0&&(f={},s.set(c,f)),f}function n(c){s.delete(c)}function r(c,f,d){s.get(c)[f]=d}function a(){s=new WeakMap}return{get:e,remove:n,update:r,dispose:a}}function uE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function _m(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function vm(){const s=[];let e=0;const n=[],r=[],a=[];function c(){e=0,n.length=0,r.length=0,a.length=0}function f(y,x,M,T,A,v){let _=s[e];return _===void 0?(_={id:y.id,object:y,geometry:x,material:M,groupOrder:T,renderOrder:y.renderOrder,z:A,group:v},s[e]=_):(_.id=y.id,_.object=y,_.geometry=x,_.material=M,_.groupOrder=T,_.renderOrder=y.renderOrder,_.z=A,_.group=v),e++,_}function d(y,x,M,T,A,v){const _=f(y,x,M,T,A,v);M.transmission>0?r.push(_):M.transparent===!0?a.push(_):n.push(_)}function h(y,x,M,T,A,v){const _=f(y,x,M,T,A,v);M.transmission>0?r.unshift(_):M.transparent===!0?a.unshift(_):n.unshift(_)}function m(y,x){n.length>1&&n.sort(y||uE),r.length>1&&r.sort(x||_m),a.length>1&&a.sort(x||_m)}function g(){for(let y=e,x=s.length;y<x;y++){const M=s[y];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:n,transmissive:r,transparent:a,init:c,push:d,unshift:h,finish:g,sort:m}}function dE(){let s=new WeakMap;function e(r,a){const c=s.get(r);let f;return c===void 0?(f=new vm,s.set(r,[f])):a>=c.length?(f=new vm,c.push(f)):f=c[a],f}function n(){s=new WeakMap}return{get:e,dispose:n}}function fE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ne,color:new Ct};break;case"SpotLight":n={position:new ne,direction:new ne,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ne,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ne,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":n={color:new Ct,position:new ne,halfWidth:new ne,halfHeight:new ne};break}return s[e.id]=n,n}}}function hE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let pE=0;function mE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function gE(s){const e=new fE,n=hE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new ne);const a=new ne,c=new jt,f=new jt;function d(m){let g=0,y=0,x=0;for(let L=0;L<9;L++)r.probe[L].set(0,0,0);let M=0,T=0,A=0,v=0,_=0,F=0,P=0,D=0,Z=0,B=0,O=0;m.sort(mE);for(let L=0,R=m.length;L<R;L++){const V=m[L],ge=V.color,ee=V.intensity,_e=V.distance,ve=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)g+=ge.r*ee,y+=ge.g*ee,x+=ge.b*ee;else if(V.isLightProbe){for(let le=0;le<9;le++)r.probe[le].addScaledVector(V.sh.coefficients[le],ee);O++}else if(V.isDirectionalLight){const le=e.get(V);if(le.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const j=V.shadow,N=n.get(V);N.shadowIntensity=j.intensity,N.shadowBias=j.bias,N.shadowNormalBias=j.normalBias,N.shadowRadius=j.radius,N.shadowMapSize=j.mapSize,r.directionalShadow[M]=N,r.directionalShadowMap[M]=ve,r.directionalShadowMatrix[M]=V.shadow.matrix,F++}r.directional[M]=le,M++}else if(V.isSpotLight){const le=e.get(V);le.position.setFromMatrixPosition(V.matrixWorld),le.color.copy(ge).multiplyScalar(ee),le.distance=_e,le.coneCos=Math.cos(V.angle),le.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),le.decay=V.decay,r.spot[A]=le;const j=V.shadow;if(V.map&&(r.spotLightMap[Z]=V.map,Z++,j.updateMatrices(V),V.castShadow&&B++),r.spotLightMatrix[A]=j.matrix,V.castShadow){const N=n.get(V);N.shadowIntensity=j.intensity,N.shadowBias=j.bias,N.shadowNormalBias=j.normalBias,N.shadowRadius=j.radius,N.shadowMapSize=j.mapSize,r.spotShadow[A]=N,r.spotShadowMap[A]=ve,D++}A++}else if(V.isRectAreaLight){const le=e.get(V);le.color.copy(ge).multiplyScalar(ee),le.halfWidth.set(V.width*.5,0,0),le.halfHeight.set(0,V.height*.5,0),r.rectArea[v]=le,v++}else if(V.isPointLight){const le=e.get(V);if(le.color.copy(V.color).multiplyScalar(V.intensity),le.distance=V.distance,le.decay=V.decay,V.castShadow){const j=V.shadow,N=n.get(V);N.shadowIntensity=j.intensity,N.shadowBias=j.bias,N.shadowNormalBias=j.normalBias,N.shadowRadius=j.radius,N.shadowMapSize=j.mapSize,N.shadowCameraNear=j.camera.near,N.shadowCameraFar=j.camera.far,r.pointShadow[T]=N,r.pointShadowMap[T]=ve,r.pointShadowMatrix[T]=V.shadow.matrix,P++}r.point[T]=le,T++}else if(V.isHemisphereLight){const le=e.get(V);le.skyColor.copy(V.color).multiplyScalar(ee),le.groundColor.copy(V.groundColor).multiplyScalar(ee),r.hemi[_]=le,_++}}v>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Fe.LTC_FLOAT_1,r.rectAreaLTC2=Fe.LTC_FLOAT_2):(r.rectAreaLTC1=Fe.LTC_HALF_1,r.rectAreaLTC2=Fe.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=y,r.ambient[2]=x;const K=r.hash;(K.directionalLength!==M||K.pointLength!==T||K.spotLength!==A||K.rectAreaLength!==v||K.hemiLength!==_||K.numDirectionalShadows!==F||K.numPointShadows!==P||K.numSpotShadows!==D||K.numSpotMaps!==Z||K.numLightProbes!==O)&&(r.directional.length=M,r.spot.length=A,r.rectArea.length=v,r.point.length=T,r.hemi.length=_,r.directionalShadow.length=F,r.directionalShadowMap.length=F,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=F,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=D+Z-B,r.spotLightMap.length=Z,r.numSpotLightShadowsWithMaps=B,r.numLightProbes=O,K.directionalLength=M,K.pointLength=T,K.spotLength=A,K.rectAreaLength=v,K.hemiLength=_,K.numDirectionalShadows=F,K.numPointShadows=P,K.numSpotShadows=D,K.numSpotMaps=Z,K.numLightProbes=O,r.version=pE++)}function h(m,g){let y=0,x=0,M=0,T=0,A=0;const v=g.matrixWorldInverse;for(let _=0,F=m.length;_<F;_++){const P=m[_];if(P.isDirectionalLight){const D=r.directional[y];D.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),D.direction.sub(a),D.direction.transformDirection(v),y++}else if(P.isSpotLight){const D=r.spot[M];D.position.setFromMatrixPosition(P.matrixWorld),D.position.applyMatrix4(v),D.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),D.direction.sub(a),D.direction.transformDirection(v),M++}else if(P.isRectAreaLight){const D=r.rectArea[T];D.position.setFromMatrixPosition(P.matrixWorld),D.position.applyMatrix4(v),f.identity(),c.copy(P.matrixWorld),c.premultiply(v),f.extractRotation(c),D.halfWidth.set(P.width*.5,0,0),D.halfHeight.set(0,P.height*.5,0),D.halfWidth.applyMatrix4(f),D.halfHeight.applyMatrix4(f),T++}else if(P.isPointLight){const D=r.point[x];D.position.setFromMatrixPosition(P.matrixWorld),D.position.applyMatrix4(v),x++}else if(P.isHemisphereLight){const D=r.hemi[A];D.direction.setFromMatrixPosition(P.matrixWorld),D.direction.transformDirection(v),A++}}}return{setup:d,setupView:h,state:r}}function xm(s){const e=new gE(s),n=[],r=[];function a(g){m.camera=g,n.length=0,r.length=0}function c(g){n.push(g)}function f(g){r.push(g)}function d(){e.setup(n)}function h(g){e.setupView(n,g)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:d,setupLightsView:h,pushLight:c,pushShadow:f}}function _E(s){let e=new WeakMap;function n(a,c=0){const f=e.get(a);let d;return f===void 0?(d=new xm(s),e.set(a,[d])):c>=f.length?(d=new xm(s),f.push(d)):d=f[c],d}function r(){e=new WeakMap}return{get:n,dispose:r}}class vE extends Fl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=J0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xE extends Fl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const yE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,SE=`uniform sampler2D shadow_pass;
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
}`;function ME(s,e,n){let r=new Jm;const a=new ut,c=new ut,f=new on,d=new vE({depthPacking:ev}),h=new xE,m={},g=n.maxTextureSize,y={[zi]:Mn,[Mn]:zi,[gi]:gi},x=new xr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:yE,fragmentShader:SE}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const T=new Sr;T.setAttribute("position",new vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Zn(T,x),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bm;let _=this.type;this.render=function(B,O,K){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||B.length===0)return;const L=s.getRenderTarget(),R=s.getActiveCubeFace(),V=s.getActiveMipmapLevel(),ge=s.state;ge.setBlending(_r),ge.buffers.color.setClear(1,1,1,1),ge.buffers.depth.setTest(!0),ge.setScissorTest(!1);const ee=_!==Ui&&this.type===Ui,_e=_===Ui&&this.type!==Ui;for(let ve=0,le=B.length;ve<le;ve++){const j=B[ve],N=j.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;a.copy(N.mapSize);const te=N.getFrameExtents();if(a.multiply(te),c.copy(N.mapSize),(a.x>g||a.y>g)&&(a.x>g&&(c.x=Math.floor(g/te.x),a.x=c.x*te.x,N.mapSize.x=c.x),a.y>g&&(c.y=Math.floor(g/te.y),a.y=c.y*te.y,N.mapSize.y=c.y)),N.map===null||ee===!0||_e===!0){const I=this.type!==Ui?{minFilter:Kn,magFilter:Kn}:{};N.map!==null&&N.map.dispose(),N.map=new $r(a.x,a.y,I),N.map.texture.name=j.name+".shadowMap",N.camera.updateProjectionMatrix()}s.setRenderTarget(N.map),s.clear();const oe=N.getViewportCount();for(let I=0;I<oe;I++){const J=N.getViewport(I);f.set(c.x*J.x,c.y*J.y,c.x*J.z,c.y*J.w),ge.viewport(f),N.updateMatrices(j,I),r=N.getFrustum(),D(O,K,N.camera,j,this.type)}N.isPointLightShadow!==!0&&this.type===Ui&&F(N,K),N.needsUpdate=!1}_=this.type,v.needsUpdate=!1,s.setRenderTarget(L,R,V)};function F(B,O){const K=e.update(A);x.defines.VSM_SAMPLES!==B.blurSamples&&(x.defines.VSM_SAMPLES=B.blurSamples,M.defines.VSM_SAMPLES=B.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new $r(a.x,a.y)),x.uniforms.shadow_pass.value=B.map.texture,x.uniforms.resolution.value=B.mapSize,x.uniforms.radius.value=B.radius,s.setRenderTarget(B.mapPass),s.clear(),s.renderBufferDirect(O,null,K,x,A,null),M.uniforms.shadow_pass.value=B.mapPass.texture,M.uniforms.resolution.value=B.mapSize,M.uniforms.radius.value=B.radius,s.setRenderTarget(B.map),s.clear(),s.renderBufferDirect(O,null,K,M,A,null)}function P(B,O,K,L){let R=null;const V=K.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(V!==void 0)R=V;else if(R=K.isPointLight===!0?h:d,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const ge=R.uuid,ee=O.uuid;let _e=m[ge];_e===void 0&&(_e={},m[ge]=_e);let ve=_e[ee];ve===void 0&&(ve=R.clone(),_e[ee]=ve,O.addEventListener("dispose",Z)),R=ve}if(R.visible=O.visible,R.wireframe=O.wireframe,L===Ui?R.side=O.shadowSide!==null?O.shadowSide:O.side:R.side=O.shadowSide!==null?O.shadowSide:y[O.side],R.alphaMap=O.alphaMap,R.alphaTest=O.alphaTest,R.map=O.map,R.clipShadows=O.clipShadows,R.clippingPlanes=O.clippingPlanes,R.clipIntersection=O.clipIntersection,R.displacementMap=O.displacementMap,R.displacementScale=O.displacementScale,R.displacementBias=O.displacementBias,R.wireframeLinewidth=O.wireframeLinewidth,R.linewidth=O.linewidth,K.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const ge=s.properties.get(R);ge.light=K}return R}function D(B,O,K,L,R){if(B.visible===!1)return;if(B.layers.test(O.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&R===Ui)&&(!B.frustumCulled||r.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,B.matrixWorld);const ee=e.update(B),_e=B.material;if(Array.isArray(_e)){const ve=ee.groups;for(let le=0,j=ve.length;le<j;le++){const N=ve[le],te=_e[N.materialIndex];if(te&&te.visible){const oe=P(B,te,L,R);B.onBeforeShadow(s,B,O,K,ee,oe,N),s.renderBufferDirect(K,null,ee,oe,B,N),B.onAfterShadow(s,B,O,K,ee,oe,N)}}}else if(_e.visible){const ve=P(B,_e,L,R);B.onBeforeShadow(s,B,O,K,ee,ve,null),s.renderBufferDirect(K,null,ee,ve,B,null),B.onAfterShadow(s,B,O,K,ee,ve,null)}}const ge=B.children;for(let ee=0,_e=ge.length;ee<_e;ee++)D(ge[ee],O,K,L,R)}function Z(B){B.target.removeEventListener("dispose",Z);for(const K in m){const L=m[K],R=B.target.uuid;R in L&&(L[R].dispose(),delete L[R])}}}function EE(s){function e(){let E=!1;const ie=new on;let ae=null;const me=new on(0,0,0,0);return{setMask:function(we){ae!==we&&!E&&(s.colorMask(we,we,we,we),ae=we)},setLocked:function(we){E=we},setClear:function(we,$e,ot,It,Ht){Ht===!0&&(we*=It,$e*=It,ot*=It),ie.set(we,$e,ot,It),me.equals(ie)===!1&&(s.clearColor(we,$e,ot,It),me.copy(ie))},reset:function(){E=!1,ae=null,me.set(-1,0,0,0)}}}function n(){let E=!1,ie=null,ae=null,me=null;return{setTest:function(we){we?he(s.DEPTH_TEST):xe(s.DEPTH_TEST)},setMask:function(we){ie!==we&&!E&&(s.depthMask(we),ie=we)},setFunc:function(we){if(ae!==we){switch(we){case F0:s.depthFunc(s.NEVER);break;case O0:s.depthFunc(s.ALWAYS);break;case k0:s.depthFunc(s.LESS);break;case Rl:s.depthFunc(s.LEQUAL);break;case z0:s.depthFunc(s.EQUAL);break;case B0:s.depthFunc(s.GEQUAL);break;case H0:s.depthFunc(s.GREATER);break;case V0:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ae=we}},setLocked:function(we){E=we},setClear:function(we){me!==we&&(s.clearDepth(we),me=we)},reset:function(){E=!1,ie=null,ae=null,me=null}}}function r(){let E=!1,ie=null,ae=null,me=null,we=null,$e=null,ot=null,It=null,Ht=null;return{setTest:function(_t){E||(_t?he(s.STENCIL_TEST):xe(s.STENCIL_TEST))},setMask:function(_t){ie!==_t&&!E&&(s.stencilMask(_t),ie=_t)},setFunc:function(_t,Ot,kt){(ae!==_t||me!==Ot||we!==kt)&&(s.stencilFunc(_t,Ot,kt),ae=_t,me=Ot,we=kt)},setOp:function(_t,Ot,kt){($e!==_t||ot!==Ot||It!==kt)&&(s.stencilOp(_t,Ot,kt),$e=_t,ot=Ot,It=kt)},setLocked:function(_t){E=_t},setClear:function(_t){Ht!==_t&&(s.clearStencil(_t),Ht=_t)},reset:function(){E=!1,ie=null,ae=null,me=null,we=null,$e=null,ot=null,It=null,Ht=null}}}const a=new e,c=new n,f=new r,d=new WeakMap,h=new WeakMap;let m={},g={},y=new WeakMap,x=[],M=null,T=!1,A=null,v=null,_=null,F=null,P=null,D=null,Z=null,B=new Ct(0,0,0),O=0,K=!1,L=null,R=null,V=null,ge=null,ee=null;const _e=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ve=!1,le=0;const j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(j)[1]),ve=le>=1):j.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),ve=le>=2);let N=null,te={};const oe=s.getParameter(s.SCISSOR_BOX),I=s.getParameter(s.VIEWPORT),J=new on().fromArray(oe),be=new on().fromArray(I);function q(E,ie,ae,me){const we=new Uint8Array(4),$e=s.createTexture();s.bindTexture(E,$e),s.texParameteri(E,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(E,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ot=0;ot<ae;ot++)E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY?s.texImage3D(ie,0,s.RGBA,1,1,me,0,s.RGBA,s.UNSIGNED_BYTE,we):s.texImage2D(ie+ot,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,we);return $e}const W={};W[s.TEXTURE_2D]=q(s.TEXTURE_2D,s.TEXTURE_2D,1),W[s.TEXTURE_CUBE_MAP]=q(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[s.TEXTURE_2D_ARRAY]=q(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),W[s.TEXTURE_3D]=q(s.TEXTURE_3D,s.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),f.setClear(0),he(s.DEPTH_TEST),c.setFunc(Rl),ct(!1),Be(wp),he(s.CULL_FACE),vt(_r);function he(E){m[E]!==!0&&(s.enable(E),m[E]=!0)}function xe(E){m[E]!==!1&&(s.disable(E),m[E]=!1)}function Ce(E,ie){return g[E]!==ie?(s.bindFramebuffer(E,ie),g[E]=ie,E===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=ie),E===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=ie),!0):!1}function Re(E,ie){let ae=x,me=!1;if(E){ae=y.get(ie),ae===void 0&&(ae=[],y.set(ie,ae));const we=E.textures;if(ae.length!==we.length||ae[0]!==s.COLOR_ATTACHMENT0){for(let $e=0,ot=we.length;$e<ot;$e++)ae[$e]=s.COLOR_ATTACHMENT0+$e;ae.length=we.length,me=!0}}else ae[0]!==s.BACK&&(ae[0]=s.BACK,me=!0);me&&s.drawBuffers(ae)}function ze(E){return M!==E?(s.useProgram(E),M=E,!0):!1}const pt={[Gr]:s.FUNC_ADD,[x0]:s.FUNC_SUBTRACT,[y0]:s.FUNC_REVERSE_SUBTRACT};pt[S0]=s.MIN,pt[M0]=s.MAX;const k={[E0]:s.ZERO,[w0]:s.ONE,[T0]:s.SRC_COLOR,[$u]:s.SRC_ALPHA,[L0]:s.SRC_ALPHA_SATURATE,[b0]:s.DST_COLOR,[C0]:s.DST_ALPHA,[A0]:s.ONE_MINUS_SRC_COLOR,[Ku]:s.ONE_MINUS_SRC_ALPHA,[P0]:s.ONE_MINUS_DST_COLOR,[R0]:s.ONE_MINUS_DST_ALPHA,[D0]:s.CONSTANT_COLOR,[N0]:s.ONE_MINUS_CONSTANT_COLOR,[I0]:s.CONSTANT_ALPHA,[U0]:s.ONE_MINUS_CONSTANT_ALPHA};function vt(E,ie,ae,me,we,$e,ot,It,Ht,_t){if(E===_r){T===!0&&(xe(s.BLEND),T=!1);return}if(T===!1&&(he(s.BLEND),T=!0),E!==v0){if(E!==A||_t!==K){if((v!==Gr||P!==Gr)&&(s.blendEquation(s.FUNC_ADD),v=Gr,P=Gr),_t)switch(E){case Gs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Tp:s.blendFunc(s.ONE,s.ONE);break;case Ap:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Cp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",E);break}else switch(E){case Gs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Tp:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ap:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Cp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",E);break}_=null,F=null,D=null,Z=null,B.set(0,0,0),O=0,A=E,K=_t}return}we=we||ie,$e=$e||ae,ot=ot||me,(ie!==v||we!==P)&&(s.blendEquationSeparate(pt[ie],pt[we]),v=ie,P=we),(ae!==_||me!==F||$e!==D||ot!==Z)&&(s.blendFuncSeparate(k[ae],k[me],k[$e],k[ot]),_=ae,F=me,D=$e,Z=ot),(It.equals(B)===!1||Ht!==O)&&(s.blendColor(It.r,It.g,It.b,Ht),B.copy(It),O=Ht),A=E,K=!1}function Qe(E,ie){E.side===gi?xe(s.CULL_FACE):he(s.CULL_FACE);let ae=E.side===Mn;ie&&(ae=!ae),ct(ae),E.blending===Gs&&E.transparent===!1?vt(_r):vt(E.blending,E.blendEquation,E.blendSrc,E.blendDst,E.blendEquationAlpha,E.blendSrcAlpha,E.blendDstAlpha,E.blendColor,E.blendAlpha,E.premultipliedAlpha),c.setFunc(E.depthFunc),c.setTest(E.depthTest),c.setMask(E.depthWrite),a.setMask(E.colorWrite);const me=E.stencilWrite;f.setTest(me),me&&(f.setMask(E.stencilWriteMask),f.setFunc(E.stencilFunc,E.stencilRef,E.stencilFuncMask),f.setOp(E.stencilFail,E.stencilZFail,E.stencilZPass)),et(E.polygonOffset,E.polygonOffsetFactor,E.polygonOffsetUnits),E.alphaToCoverage===!0?he(s.SAMPLE_ALPHA_TO_COVERAGE):xe(s.SAMPLE_ALPHA_TO_COVERAGE)}function ct(E){L!==E&&(E?s.frontFace(s.CW):s.frontFace(s.CCW),L=E)}function Be(E){E!==m0?(he(s.CULL_FACE),E!==R&&(E===wp?s.cullFace(s.BACK):E===g0?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):xe(s.CULL_FACE),R=E}function gt(E){E!==V&&(ve&&s.lineWidth(E),V=E)}function et(E,ie,ae){E?(he(s.POLYGON_OFFSET_FILL),(ge!==ie||ee!==ae)&&(s.polygonOffset(ie,ae),ge=ie,ee=ae)):xe(s.POLYGON_OFFSET_FILL)}function Je(E){E?he(s.SCISSOR_TEST):xe(s.SCISSOR_TEST)}function C(E){E===void 0&&(E=s.TEXTURE0+_e-1),N!==E&&(s.activeTexture(E),N=E)}function S(E,ie,ae){ae===void 0&&(N===null?ae=s.TEXTURE0+_e-1:ae=N);let me=te[ae];me===void 0&&(me={type:void 0,texture:void 0},te[ae]=me),(me.type!==E||me.texture!==ie)&&(N!==ae&&(s.activeTexture(ae),N=ae),s.bindTexture(E,ie||W[E]),me.type=E,me.texture=ie)}function z(){const E=te[N];E!==void 0&&E.type!==void 0&&(s.bindTexture(E.type,null),E.type=void 0,E.texture=void 0)}function Y(){try{s.compressedTexImage2D.apply(s,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function ue(){try{s.compressedTexImage3D.apply(s,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function pe(){try{s.texSubImage2D.apply(s,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Me(){try{s.texSubImage3D.apply(s,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Se(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Pe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Ve(){try{s.texStorage2D.apply(s,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function ye(){try{s.texStorage3D.apply(s,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function De(){try{s.texImage2D.apply(s,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function rt(){try{s.texImage3D.apply(s,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function We(E){J.equals(E)===!1&&(s.scissor(E.x,E.y,E.z,E.w),J.copy(E))}function Ue(E){be.equals(E)===!1&&(s.viewport(E.x,E.y,E.z,E.w),be.copy(E))}function Ye(E,ie){let ae=h.get(ie);ae===void 0&&(ae=new WeakMap,h.set(ie,ae));let me=ae.get(E);me===void 0&&(me=s.getUniformBlockIndex(ie,E.name),ae.set(E,me))}function Ze(E,ie){const me=h.get(ie).get(E);d.get(ie)!==me&&(s.uniformBlockBinding(ie,me,E.__bindingPointIndex),d.set(ie,me))}function yt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),m={},N=null,te={},g={},y=new WeakMap,x=[],M=null,T=!1,A=null,v=null,_=null,F=null,P=null,D=null,Z=null,B=new Ct(0,0,0),O=0,K=!1,L=null,R=null,V=null,ge=null,ee=null,J.set(0,0,s.canvas.width,s.canvas.height),be.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),f.reset()}return{buffers:{color:a,depth:c,stencil:f},enable:he,disable:xe,bindFramebuffer:Ce,drawBuffers:Re,useProgram:ze,setBlending:vt,setMaterial:Qe,setFlipSided:ct,setCullFace:Be,setLineWidth:gt,setPolygonOffset:et,setScissorTest:Je,activeTexture:C,bindTexture:S,unbindTexture:z,compressedTexImage2D:Y,compressedTexImage3D:ue,texImage2D:De,texImage3D:rt,updateUBOMapping:Ye,uniformBlockBinding:Ze,texStorage2D:Ve,texStorage3D:ye,texSubImage2D:pe,texSubImage3D:Me,compressedTexSubImage2D:Se,compressedTexSubImage3D:Pe,scissor:We,viewport:Ue,reset:yt}}function ym(s,e,n,r){const a=wE(r);switch(n){case Um:return s*e;case Om:return s*e;case km:return s*e*2;case zm:return s*e/a.components*a.byteLength;case Id:return s*e/a.components*a.byteLength;case Bm:return s*e*2/a.components*a.byteLength;case Ud:return s*e*2/a.components*a.byteLength;case Fm:return s*e*3/a.components*a.byteLength;case ci:return s*e*4/a.components*a.byteLength;case Fd:return s*e*4/a.components*a.byteLength;case Ml:case El:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case wl:case Tl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case nd:case rd:return Math.max(s,16)*Math.max(e,8)/4;case td:case id:return Math.max(s,8)*Math.max(e,8)/2;case sd:case od:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ad:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ld:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case cd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case ud:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case dd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case fd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case hd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case pd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case md:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case gd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case _d:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case vd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case xd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case yd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Sd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Al:case Md:case Ed:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Hm:case wd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Td:case Ad:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function wE(s){switch(s){case Bi:case Dm:return{byteLength:1,components:1};case Vo:case Nm:case Wo:return{byteLength:2,components:1};case Dd:case Nd:return{byteLength:2,components:4};case qr:case Ld:case Fi:return{byteLength:4,components:1};case Im:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function TE(s,e,n,r,a,c,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new ut,g=new WeakMap;let y;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(C,S){return M?new OffscreenCanvas(C,S):Nl("canvas")}function A(C,S,z){let Y=1;const ue=Je(C);if((ue.width>z||ue.height>z)&&(Y=z/Math.max(ue.width,ue.height)),Y<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const pe=Math.floor(Y*ue.width),Me=Math.floor(Y*ue.height);y===void 0&&(y=T(pe,Me));const Se=S?T(pe,Me):y;return Se.width=pe,Se.height=Me,Se.getContext("2d").drawImage(C,0,0,pe,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ue.width+"x"+ue.height+") to ("+pe+"x"+Me+")."),Se}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ue.width+"x"+ue.height+")."),C;return C}function v(C){return C.generateMipmaps&&C.minFilter!==Kn&&C.minFilter!==Sn}function _(C){s.generateMipmap(C)}function F(C,S,z,Y,ue=!1){if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let pe=S;if(S===s.RED&&(z===s.FLOAT&&(pe=s.R32F),z===s.HALF_FLOAT&&(pe=s.R16F),z===s.UNSIGNED_BYTE&&(pe=s.R8)),S===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&(pe=s.R8UI),z===s.UNSIGNED_SHORT&&(pe=s.R16UI),z===s.UNSIGNED_INT&&(pe=s.R32UI),z===s.BYTE&&(pe=s.R8I),z===s.SHORT&&(pe=s.R16I),z===s.INT&&(pe=s.R32I)),S===s.RG&&(z===s.FLOAT&&(pe=s.RG32F),z===s.HALF_FLOAT&&(pe=s.RG16F),z===s.UNSIGNED_BYTE&&(pe=s.RG8)),S===s.RG_INTEGER&&(z===s.UNSIGNED_BYTE&&(pe=s.RG8UI),z===s.UNSIGNED_SHORT&&(pe=s.RG16UI),z===s.UNSIGNED_INT&&(pe=s.RG32UI),z===s.BYTE&&(pe=s.RG8I),z===s.SHORT&&(pe=s.RG16I),z===s.INT&&(pe=s.RG32I)),S===s.RGB&&z===s.UNSIGNED_INT_5_9_9_9_REV&&(pe=s.RGB9_E5),S===s.RGBA){const Me=ue?bl:At.getTransfer(Y);z===s.FLOAT&&(pe=s.RGBA32F),z===s.HALF_FLOAT&&(pe=s.RGBA16F),z===s.UNSIGNED_BYTE&&(pe=Me===Nt?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT_4_4_4_4&&(pe=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&(pe=s.RGB5_A1)}return(pe===s.R16F||pe===s.R32F||pe===s.RG16F||pe===s.RG32F||pe===s.RGBA16F||pe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function P(C,S){let z;return C?S===null||S===qr||S===qs?z=s.DEPTH24_STENCIL8:S===Fi?z=s.DEPTH32F_STENCIL8:S===Vo&&(z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===qr||S===qs?z=s.DEPTH_COMPONENT24:S===Fi?z=s.DEPTH_COMPONENT32F:S===Vo&&(z=s.DEPTH_COMPONENT16),z}function D(C,S){return v(C)===!0||C.isFramebufferTexture&&C.minFilter!==Kn&&C.minFilter!==Sn?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function Z(C){const S=C.target;S.removeEventListener("dispose",Z),O(S),S.isVideoTexture&&g.delete(S)}function B(C){const S=C.target;S.removeEventListener("dispose",B),L(S)}function O(C){const S=r.get(C);if(S.__webglInit===void 0)return;const z=C.source,Y=x.get(z);if(Y){const ue=Y[S.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&K(C),Object.keys(Y).length===0&&x.delete(z)}r.remove(C)}function K(C){const S=r.get(C);s.deleteTexture(S.__webglTexture);const z=C.source,Y=x.get(z);delete Y[S.__cacheKey],f.memory.textures--}function L(C){const S=r.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(S.__webglFramebuffer[Y]))for(let ue=0;ue<S.__webglFramebuffer[Y].length;ue++)s.deleteFramebuffer(S.__webglFramebuffer[Y][ue]);else s.deleteFramebuffer(S.__webglFramebuffer[Y]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[Y])}else{if(Array.isArray(S.__webglFramebuffer))for(let Y=0;Y<S.__webglFramebuffer.length;Y++)s.deleteFramebuffer(S.__webglFramebuffer[Y]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Y=0;Y<S.__webglColorRenderbuffer.length;Y++)S.__webglColorRenderbuffer[Y]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[Y]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const z=C.textures;for(let Y=0,ue=z.length;Y<ue;Y++){const pe=r.get(z[Y]);pe.__webglTexture&&(s.deleteTexture(pe.__webglTexture),f.memory.textures--),r.remove(z[Y])}r.remove(C)}let R=0;function V(){R=0}function ge(){const C=R;return C>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+a.maxTextures),R+=1,C}function ee(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function _e(C,S){const z=r.get(C);if(C.isVideoTexture&&gt(C),C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){const Y=C.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{be(z,C,S);return}}n.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+S)}function ve(C,S){const z=r.get(C);if(C.version>0&&z.__version!==C.version){be(z,C,S);return}n.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+S)}function le(C,S){const z=r.get(C);if(C.version>0&&z.__version!==C.version){be(z,C,S);return}n.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+S)}function j(C,S){const z=r.get(C);if(C.version>0&&z.__version!==C.version){q(z,C,S);return}n.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+S)}const N={[Ju]:s.REPEAT,[jr]:s.CLAMP_TO_EDGE,[ed]:s.MIRRORED_REPEAT},te={[Kn]:s.NEAREST,[Q0]:s.NEAREST_MIPMAP_NEAREST,[Ja]:s.NEAREST_MIPMAP_LINEAR,[Sn]:s.LINEAR,[Mu]:s.LINEAR_MIPMAP_NEAREST,[Yr]:s.LINEAR_MIPMAP_LINEAR},oe={[iv]:s.NEVER,[cv]:s.ALWAYS,[rv]:s.LESS,[Vm]:s.LEQUAL,[sv]:s.EQUAL,[lv]:s.GEQUAL,[ov]:s.GREATER,[av]:s.NOTEQUAL};function I(C,S){if(S.type===Fi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Sn||S.magFilter===Mu||S.magFilter===Ja||S.magFilter===Yr||S.minFilter===Sn||S.minFilter===Mu||S.minFilter===Ja||S.minFilter===Yr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,N[S.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,N[S.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,N[S.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,te[S.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,te[S.minFilter]),S.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,oe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Kn||S.minFilter!==Ja&&S.minFilter!==Yr||S.type===Fi&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||r.get(S).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");s.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,a.getMaxAnisotropy())),r.get(S).__currentAnisotropy=S.anisotropy}}}function J(C,S){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",Z));const Y=S.source;let ue=x.get(Y);ue===void 0&&(ue={},x.set(Y,ue));const pe=ee(S);if(pe!==C.__cacheKey){ue[pe]===void 0&&(ue[pe]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,z=!0),ue[pe].usedTimes++;const Me=ue[C.__cacheKey];Me!==void 0&&(ue[C.__cacheKey].usedTimes--,Me.usedTimes===0&&K(S)),C.__cacheKey=pe,C.__webglTexture=ue[pe].texture}return z}function be(C,S,z){let Y=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Y=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Y=s.TEXTURE_3D);const ue=J(C,S),pe=S.source;n.bindTexture(Y,C.__webglTexture,s.TEXTURE0+z);const Me=r.get(pe);if(pe.version!==Me.__version||ue===!0){n.activeTexture(s.TEXTURE0+z);const Se=At.getPrimaries(At.workingColorSpace),Pe=S.colorSpace===gr?null:At.getPrimaries(S.colorSpace),Ve=S.colorSpace===gr||Se===Pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let ye=A(S.image,!1,a.maxTextureSize);ye=et(S,ye);const De=c.convert(S.format,S.colorSpace),rt=c.convert(S.type);let We=F(S.internalFormat,De,rt,S.colorSpace,S.isVideoTexture);I(Y,S);let Ue;const Ye=S.mipmaps,Ze=S.isVideoTexture!==!0,yt=Me.__version===void 0||ue===!0,E=pe.dataReady,ie=D(S,ye);if(S.isDepthTexture)We=P(S.format===$s,S.type),yt&&(Ze?n.texStorage2D(s.TEXTURE_2D,1,We,ye.width,ye.height):n.texImage2D(s.TEXTURE_2D,0,We,ye.width,ye.height,0,De,rt,null));else if(S.isDataTexture)if(Ye.length>0){Ze&&yt&&n.texStorage2D(s.TEXTURE_2D,ie,We,Ye[0].width,Ye[0].height);for(let ae=0,me=Ye.length;ae<me;ae++)Ue=Ye[ae],Ze?E&&n.texSubImage2D(s.TEXTURE_2D,ae,0,0,Ue.width,Ue.height,De,rt,Ue.data):n.texImage2D(s.TEXTURE_2D,ae,We,Ue.width,Ue.height,0,De,rt,Ue.data);S.generateMipmaps=!1}else Ze?(yt&&n.texStorage2D(s.TEXTURE_2D,ie,We,ye.width,ye.height),E&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,ye.width,ye.height,De,rt,ye.data)):n.texImage2D(s.TEXTURE_2D,0,We,ye.width,ye.height,0,De,rt,ye.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ze&&yt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,ie,We,Ye[0].width,Ye[0].height,ye.depth);for(let ae=0,me=Ye.length;ae<me;ae++)if(Ue=Ye[ae],S.format!==ci)if(De!==null)if(Ze){if(E)if(S.layerUpdates.size>0){const we=ym(Ue.width,Ue.height,S.format,S.type);for(const $e of S.layerUpdates){const ot=Ue.data.subarray($e*we/Ue.data.BYTES_PER_ELEMENT,($e+1)*we/Ue.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,$e,Ue.width,Ue.height,1,De,ot,0,0)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,0,Ue.width,Ue.height,ye.depth,De,Ue.data,0,0)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ae,We,Ue.width,Ue.height,ye.depth,0,Ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ze?E&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,0,Ue.width,Ue.height,ye.depth,De,rt,Ue.data):n.texImage3D(s.TEXTURE_2D_ARRAY,ae,We,Ue.width,Ue.height,ye.depth,0,De,rt,Ue.data)}else{Ze&&yt&&n.texStorage2D(s.TEXTURE_2D,ie,We,Ye[0].width,Ye[0].height);for(let ae=0,me=Ye.length;ae<me;ae++)Ue=Ye[ae],S.format!==ci?De!==null?Ze?E&&n.compressedTexSubImage2D(s.TEXTURE_2D,ae,0,0,Ue.width,Ue.height,De,Ue.data):n.compressedTexImage2D(s.TEXTURE_2D,ae,We,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?E&&n.texSubImage2D(s.TEXTURE_2D,ae,0,0,Ue.width,Ue.height,De,rt,Ue.data):n.texImage2D(s.TEXTURE_2D,ae,We,Ue.width,Ue.height,0,De,rt,Ue.data)}else if(S.isDataArrayTexture)if(Ze){if(yt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,ie,We,ye.width,ye.height,ye.depth),E)if(S.layerUpdates.size>0){const ae=ym(ye.width,ye.height,S.format,S.type);for(const me of S.layerUpdates){const we=ye.data.subarray(me*ae/ye.data.BYTES_PER_ELEMENT,(me+1)*ae/ye.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,me,ye.width,ye.height,1,De,rt,we)}S.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,De,rt,ye.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,We,ye.width,ye.height,ye.depth,0,De,rt,ye.data);else if(S.isData3DTexture)Ze?(yt&&n.texStorage3D(s.TEXTURE_3D,ie,We,ye.width,ye.height,ye.depth),E&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,De,rt,ye.data)):n.texImage3D(s.TEXTURE_3D,0,We,ye.width,ye.height,ye.depth,0,De,rt,ye.data);else if(S.isFramebufferTexture){if(yt)if(Ze)n.texStorage2D(s.TEXTURE_2D,ie,We,ye.width,ye.height);else{let ae=ye.width,me=ye.height;for(let we=0;we<ie;we++)n.texImage2D(s.TEXTURE_2D,we,We,ae,me,0,De,rt,null),ae>>=1,me>>=1}}else if(Ye.length>0){if(Ze&&yt){const ae=Je(Ye[0]);n.texStorage2D(s.TEXTURE_2D,ie,We,ae.width,ae.height)}for(let ae=0,me=Ye.length;ae<me;ae++)Ue=Ye[ae],Ze?E&&n.texSubImage2D(s.TEXTURE_2D,ae,0,0,De,rt,Ue):n.texImage2D(s.TEXTURE_2D,ae,We,De,rt,Ue);S.generateMipmaps=!1}else if(Ze){if(yt){const ae=Je(ye);n.texStorage2D(s.TEXTURE_2D,ie,We,ae.width,ae.height)}E&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,De,rt,ye)}else n.texImage2D(s.TEXTURE_2D,0,We,De,rt,ye);v(S)&&_(Y),Me.__version=pe.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function q(C,S,z){if(S.image.length!==6)return;const Y=J(C,S),ue=S.source;n.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+z);const pe=r.get(ue);if(ue.version!==pe.__version||Y===!0){n.activeTexture(s.TEXTURE0+z);const Me=At.getPrimaries(At.workingColorSpace),Se=S.colorSpace===gr?null:At.getPrimaries(S.colorSpace),Pe=S.colorSpace===gr||Me===Se?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const Ve=S.isCompressedTexture||S.image[0].isCompressedTexture,ye=S.image[0]&&S.image[0].isDataTexture,De=[];for(let me=0;me<6;me++)!Ve&&!ye?De[me]=A(S.image[me],!0,a.maxCubemapSize):De[me]=ye?S.image[me].image:S.image[me],De[me]=et(S,De[me]);const rt=De[0],We=c.convert(S.format,S.colorSpace),Ue=c.convert(S.type),Ye=F(S.internalFormat,We,Ue,S.colorSpace),Ze=S.isVideoTexture!==!0,yt=pe.__version===void 0||Y===!0,E=ue.dataReady;let ie=D(S,rt);I(s.TEXTURE_CUBE_MAP,S);let ae;if(Ve){Ze&&yt&&n.texStorage2D(s.TEXTURE_CUBE_MAP,ie,Ye,rt.width,rt.height);for(let me=0;me<6;me++){ae=De[me].mipmaps;for(let we=0;we<ae.length;we++){const $e=ae[we];S.format!==ci?We!==null?Ze?E&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,we,0,0,$e.width,$e.height,We,$e.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,we,Ye,$e.width,$e.height,0,$e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?E&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,we,0,0,$e.width,$e.height,We,Ue,$e.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,we,Ye,$e.width,$e.height,0,We,Ue,$e.data)}}}else{if(ae=S.mipmaps,Ze&&yt){ae.length>0&&ie++;const me=Je(De[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,ie,Ye,me.width,me.height)}for(let me=0;me<6;me++)if(ye){Ze?E&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,De[me].width,De[me].height,We,Ue,De[me].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,Ye,De[me].width,De[me].height,0,We,Ue,De[me].data);for(let we=0;we<ae.length;we++){const ot=ae[we].image[me].image;Ze?E&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,we+1,0,0,ot.width,ot.height,We,Ue,ot.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,we+1,Ye,ot.width,ot.height,0,We,Ue,ot.data)}}else{Ze?E&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,We,Ue,De[me]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,Ye,We,Ue,De[me]);for(let we=0;we<ae.length;we++){const $e=ae[we];Ze?E&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,we+1,0,0,We,Ue,$e.image[me]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,we+1,Ye,We,Ue,$e.image[me])}}}v(S)&&_(s.TEXTURE_CUBE_MAP),pe.__version=ue.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function W(C,S,z,Y,ue,pe){const Me=c.convert(z.format,z.colorSpace),Se=c.convert(z.type),Pe=F(z.internalFormat,Me,Se,z.colorSpace);if(!r.get(S).__hasExternalTextures){const ye=Math.max(1,S.width>>pe),De=Math.max(1,S.height>>pe);ue===s.TEXTURE_3D||ue===s.TEXTURE_2D_ARRAY?n.texImage3D(ue,pe,Pe,ye,De,S.depth,0,Me,Se,null):n.texImage2D(ue,pe,Pe,ye,De,0,Me,Se,null)}n.bindFramebuffer(s.FRAMEBUFFER,C),Be(S)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Y,ue,r.get(z).__webglTexture,0,ct(S)):(ue===s.TEXTURE_2D||ue>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Y,ue,r.get(z).__webglTexture,pe),n.bindFramebuffer(s.FRAMEBUFFER,null)}function he(C,S,z){if(s.bindRenderbuffer(s.RENDERBUFFER,C),S.depthBuffer){const Y=S.depthTexture,ue=Y&&Y.isDepthTexture?Y.type:null,pe=P(S.stencilBuffer,ue),Me=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Se=ct(S);Be(S)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Se,pe,S.width,S.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,Se,pe,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,pe,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Me,s.RENDERBUFFER,C)}else{const Y=S.textures;for(let ue=0;ue<Y.length;ue++){const pe=Y[ue],Me=c.convert(pe.format,pe.colorSpace),Se=c.convert(pe.type),Pe=F(pe.internalFormat,Me,Se,pe.colorSpace),Ve=ct(S);z&&Be(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ve,Pe,S.width,S.height):Be(S)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ve,Pe,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,Pe,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function xe(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),_e(S.depthTexture,0);const Y=r.get(S.depthTexture).__webglTexture,ue=ct(S);if(S.depthTexture.format===Ws)Be(S)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Y,0,ue):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Y,0);else if(S.depthTexture.format===$s)Be(S)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Y,0,ue):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Ce(C){const S=r.get(C),z=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");xe(S.__webglFramebuffer,C)}else if(z){S.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)n.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[Y]),S.__webglDepthbuffer[Y]=s.createRenderbuffer(),he(S.__webglDepthbuffer[Y],C,!1)}else n.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=s.createRenderbuffer(),he(S.__webglDepthbuffer,C,!1);n.bindFramebuffer(s.FRAMEBUFFER,null)}function Re(C,S,z){const Y=r.get(C);S!==void 0&&W(Y.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&Ce(C)}function ze(C){const S=C.texture,z=r.get(C),Y=r.get(S);C.addEventListener("dispose",B);const ue=C.textures,pe=C.isWebGLCubeRenderTarget===!0,Me=ue.length>1;if(Me||(Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture()),Y.__version=S.version,f.memory.textures++),pe){z.__webglFramebuffer=[];for(let Se=0;Se<6;Se++)if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[Se]=[];for(let Pe=0;Pe<S.mipmaps.length;Pe++)z.__webglFramebuffer[Se][Pe]=s.createFramebuffer()}else z.__webglFramebuffer[Se]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let Se=0;Se<S.mipmaps.length;Se++)z.__webglFramebuffer[Se]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(Me)for(let Se=0,Pe=ue.length;Se<Pe;Se++){const Ve=r.get(ue[Se]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=s.createTexture(),f.memory.textures++)}if(C.samples>0&&Be(C)===!1){z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let Se=0;Se<ue.length;Se++){const Pe=ue[Se];z.__webglColorRenderbuffer[Se]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[Se]);const Ve=c.convert(Pe.format,Pe.colorSpace),ye=c.convert(Pe.type),De=F(Pe.internalFormat,Ve,ye,Pe.colorSpace,C.isXRRenderTarget===!0),rt=ct(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,rt,De,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Se,s.RENDERBUFFER,z.__webglColorRenderbuffer[Se])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),he(z.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(pe){n.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),I(s.TEXTURE_CUBE_MAP,S);for(let Se=0;Se<6;Se++)if(S.mipmaps&&S.mipmaps.length>0)for(let Pe=0;Pe<S.mipmaps.length;Pe++)W(z.__webglFramebuffer[Se][Pe],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Pe);else W(z.__webglFramebuffer[Se],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0);v(S)&&_(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Me){for(let Se=0,Pe=ue.length;Se<Pe;Se++){const Ve=ue[Se],ye=r.get(Ve);n.bindTexture(s.TEXTURE_2D,ye.__webglTexture),I(s.TEXTURE_2D,Ve),W(z.__webglFramebuffer,C,Ve,s.COLOR_ATTACHMENT0+Se,s.TEXTURE_2D,0),v(Ve)&&_(s.TEXTURE_2D)}n.unbindTexture()}else{let Se=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Se=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Se,Y.__webglTexture),I(Se,S),S.mipmaps&&S.mipmaps.length>0)for(let Pe=0;Pe<S.mipmaps.length;Pe++)W(z.__webglFramebuffer[Pe],C,S,s.COLOR_ATTACHMENT0,Se,Pe);else W(z.__webglFramebuffer,C,S,s.COLOR_ATTACHMENT0,Se,0);v(S)&&_(Se),n.unbindTexture()}C.depthBuffer&&Ce(C)}function pt(C){const S=C.textures;for(let z=0,Y=S.length;z<Y;z++){const ue=S[z];if(v(ue)){const pe=C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Me=r.get(ue).__webglTexture;n.bindTexture(pe,Me),_(pe),n.unbindTexture()}}}const k=[],vt=[];function Qe(C){if(C.samples>0){if(Be(C)===!1){const S=C.textures,z=C.width,Y=C.height;let ue=s.COLOR_BUFFER_BIT;const pe=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Me=r.get(C),Se=S.length>1;if(Se)for(let Pe=0;Pe<S.length;Pe++)n.bindFramebuffer(s.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let Pe=0;Pe<S.length;Pe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ue|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ue|=s.STENCIL_BUFFER_BIT)),Se){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Me.__webglColorRenderbuffer[Pe]);const Ve=r.get(S[Pe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ve,0)}s.blitFramebuffer(0,0,z,Y,0,0,z,Y,ue,s.NEAREST),h===!0&&(k.length=0,vt.length=0,k.push(s.COLOR_ATTACHMENT0+Pe),C.depthBuffer&&C.resolveDepthBuffer===!1&&(k.push(pe),vt.push(pe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,vt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,k))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Se)for(let Pe=0;Pe<S.length;Pe++){n.bindFramebuffer(s.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.RENDERBUFFER,Me.__webglColorRenderbuffer[Pe]);const Ve=r.get(S[Pe]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.TEXTURE_2D,Ve,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&h){const S=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function ct(C){return Math.min(a.maxSamples,C.samples)}function Be(C){const S=r.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function gt(C){const S=f.render.frame;g.get(C)!==S&&(g.set(C,S),C.update())}function et(C,S){const z=C.colorSpace,Y=C.format,ue=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==yr&&z!==gr&&(At.getTransfer(z)===Nt?(Y!==ci||ue!==Bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),S}function Je(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(m.width=C.naturalWidth||C.width,m.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(m.width=C.displayWidth,m.height=C.displayHeight):(m.width=C.width,m.height=C.height),m}this.allocateTextureUnit=ge,this.resetTextureUnits=V,this.setTexture2D=_e,this.setTexture2DArray=ve,this.setTexture3D=le,this.setTextureCube=j,this.rebindTextures=Re,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=Qe,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=W,this.useMultisampledRTT=Be}function AE(s,e){function n(r,a=gr){let c;const f=At.getTransfer(a);if(r===Bi)return s.UNSIGNED_BYTE;if(r===Dd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Nd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Im)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Dm)return s.BYTE;if(r===Nm)return s.SHORT;if(r===Vo)return s.UNSIGNED_SHORT;if(r===Ld)return s.INT;if(r===qr)return s.UNSIGNED_INT;if(r===Fi)return s.FLOAT;if(r===Wo)return s.HALF_FLOAT;if(r===Um)return s.ALPHA;if(r===Fm)return s.RGB;if(r===ci)return s.RGBA;if(r===Om)return s.LUMINANCE;if(r===km)return s.LUMINANCE_ALPHA;if(r===Ws)return s.DEPTH_COMPONENT;if(r===$s)return s.DEPTH_STENCIL;if(r===zm)return s.RED;if(r===Id)return s.RED_INTEGER;if(r===Bm)return s.RG;if(r===Ud)return s.RG_INTEGER;if(r===Fd)return s.RGBA_INTEGER;if(r===Ml||r===El||r===wl||r===Tl)if(f===Nt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Ml)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===El)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===wl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Tl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Ml)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===El)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===wl)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Tl)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===td||r===nd||r===id||r===rd)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===td)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===nd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===id)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===rd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===sd||r===od||r===ad)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===sd||r===od)return f===Nt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===ad)return f===Nt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ld||r===cd||r===ud||r===dd||r===fd||r===hd||r===pd||r===md||r===gd||r===_d||r===vd||r===xd||r===yd||r===Sd)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===ld)return f===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===cd)return f===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ud)return f===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===dd)return f===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===fd)return f===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===hd)return f===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===pd)return f===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===md)return f===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===gd)return f===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===_d)return f===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===vd)return f===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===xd)return f===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===yd)return f===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Sd)return f===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Al||r===Md||r===Ed)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Al)return f===Nt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Md)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ed)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Hm||r===wd||r===Td||r===Ad)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Al)return c.COMPRESSED_RED_RGTC1_EXT;if(r===wd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Td)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ad)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===qs?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}class CE extends Bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Vs extends Hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const RE={type:"move"};class Yu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ne,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ne),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ne,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ne),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,c=null,f=null;const d=this._targetRay,h=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){f=!0;for(const A of e.hand.values()){const v=n.getJointPose(A,r),_=this._getHandJoint(m,A);v!==null&&(_.matrix.fromArray(v.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=v.radius),_.visible=v!==null}const g=m.joints["index-finger-tip"],y=m.joints["thumb-tip"],x=g.position.distanceTo(y.position),M=.02,T=.005;m.inputState.pinching&&x>M+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=M-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(h.matrix.fromArray(c.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,c.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(c.linearVelocity)):h.hasLinearVelocity=!1,c.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(c.angularVelocity)):h.hasAngularVelocity=!1));d!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&c!==null&&(a=c),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(RE)))}return d!==null&&(d.visible=a!==null),h!==null&&(h.visible=c!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Vs;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const bE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,PE=`
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

}`;class LE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new En,c=e.properties.get(a);c.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new xr({vertexShader:bE,fragmentShader:PE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Zn(new Yo(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class DE extends Qr{constructor(e,n){super();const r=this;let a=null,c=1,f=null,d="local-floor",h=1,m=null,g=null,y=null,x=null,M=null,T=null;const A=new LE,v=n.getContextAttributes();let _=null,F=null;const P=[],D=[],Z=new ut;let B=null;const O=new Bn;O.layers.enable(1),O.viewport=new on;const K=new Bn;K.layers.enable(2),K.viewport=new on;const L=[O,K],R=new CE;R.layers.enable(1),R.layers.enable(2);let V=null,ge=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let W=P[q];return W===void 0&&(W=new Yu,P[q]=W),W.getTargetRaySpace()},this.getControllerGrip=function(q){let W=P[q];return W===void 0&&(W=new Yu,P[q]=W),W.getGripSpace()},this.getHand=function(q){let W=P[q];return W===void 0&&(W=new Yu,P[q]=W),W.getHandSpace()};function ee(q){const W=D.indexOf(q.inputSource);if(W===-1)return;const he=P[W];he!==void 0&&(he.update(q.inputSource,q.frame,m||f),he.dispatchEvent({type:q.type,data:q.inputSource}))}function _e(){a.removeEventListener("select",ee),a.removeEventListener("selectstart",ee),a.removeEventListener("selectend",ee),a.removeEventListener("squeeze",ee),a.removeEventListener("squeezestart",ee),a.removeEventListener("squeezeend",ee),a.removeEventListener("end",_e),a.removeEventListener("inputsourceschange",ve);for(let q=0;q<P.length;q++){const W=D[q];W!==null&&(D[q]=null,P[q].disconnect(W))}V=null,ge=null,A.reset(),e.setRenderTarget(_),M=null,x=null,y=null,a=null,F=null,be.stop(),r.isPresenting=!1,e.setPixelRatio(B),e.setSize(Z.width,Z.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){c=q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){d=q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(q){m=q},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return y},this.getFrame=function(){return T},this.getSession=function(){return a},this.setSession=async function(q){if(a=q,a!==null){if(_=e.getRenderTarget(),a.addEventListener("select",ee),a.addEventListener("selectstart",ee),a.addEventListener("selectend",ee),a.addEventListener("squeeze",ee),a.addEventListener("squeezestart",ee),a.addEventListener("squeezeend",ee),a.addEventListener("end",_e),a.addEventListener("inputsourceschange",ve),v.xrCompatible!==!0&&await n.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(Z),a.renderState.layers===void 0){const W={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(a,n,W),a.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),F=new $r(M.framebufferWidth,M.framebufferHeight,{format:ci,type:Bi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let W=null,he=null,xe=null;v.depth&&(xe=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,W=v.stencil?$s:Ws,he=v.stencil?qs:qr);const Ce={colorFormat:n.RGBA8,depthFormat:xe,scaleFactor:c};y=new XRWebGLBinding(a,n),x=y.createProjectionLayer(Ce),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),F=new $r(x.textureWidth,x.textureHeight,{format:ci,type:Bi,depthTexture:new tg(x.textureWidth,x.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}F.isXRRenderTarget=!0,this.setFoveation(h),m=null,f=await a.requestReferenceSpace(d),be.setContext(a),be.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function ve(q){for(let W=0;W<q.removed.length;W++){const he=q.removed[W],xe=D.indexOf(he);xe>=0&&(D[xe]=null,P[xe].disconnect(he))}for(let W=0;W<q.added.length;W++){const he=q.added[W];let xe=D.indexOf(he);if(xe===-1){for(let Re=0;Re<P.length;Re++)if(Re>=D.length){D.push(he),xe=Re;break}else if(D[Re]===null){D[Re]=he,xe=Re;break}if(xe===-1)break}const Ce=P[xe];Ce&&Ce.connect(he)}}const le=new ne,j=new ne;function N(q,W,he){le.setFromMatrixPosition(W.matrixWorld),j.setFromMatrixPosition(he.matrixWorld);const xe=le.distanceTo(j),Ce=W.projectionMatrix.elements,Re=he.projectionMatrix.elements,ze=Ce[14]/(Ce[10]-1),pt=Ce[14]/(Ce[10]+1),k=(Ce[9]+1)/Ce[5],vt=(Ce[9]-1)/Ce[5],Qe=(Ce[8]-1)/Ce[0],ct=(Re[8]+1)/Re[0],Be=ze*Qe,gt=ze*ct,et=xe/(-Qe+ct),Je=et*-Qe;W.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Je),q.translateZ(et),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const C=ze+et,S=pt+et,z=Be-Je,Y=gt+(xe-Je),ue=k*pt/S*C,pe=vt*pt/S*C;q.projectionMatrix.makePerspective(z,Y,ue,pe,C,S),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function te(q,W){W===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(W.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(a===null)return;A.texture!==null&&(q.near=A.depthNear,q.far=A.depthFar),R.near=K.near=O.near=q.near,R.far=K.far=O.far=q.far,(V!==R.near||ge!==R.far)&&(a.updateRenderState({depthNear:R.near,depthFar:R.far}),V=R.near,ge=R.far,O.near=V,O.far=ge,K.near=V,K.far=ge,O.updateProjectionMatrix(),K.updateProjectionMatrix(),q.updateProjectionMatrix());const W=q.parent,he=R.cameras;te(R,W);for(let xe=0;xe<he.length;xe++)te(he[xe],W);he.length===2?N(R,O,K):R.projectionMatrix.copy(O.projectionMatrix),oe(q,R,W)};function oe(q,W,he){he===null?q.matrix.copy(W.matrixWorld):(q.matrix.copy(he.matrixWorld),q.matrix.invert(),q.matrix.multiply(W.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(W.projectionMatrix),q.projectionMatrixInverse.copy(W.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Go*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(x===null&&M===null))return h},this.setFoveation=function(q){h=q,x!==null&&(x.fixedFoveation=q),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=q)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(R)};let I=null;function J(q,W){if(g=W.getViewerPose(m||f),T=W,g!==null){const he=g.views;M!==null&&(e.setRenderTargetFramebuffer(F,M.framebuffer),e.setRenderTarget(F));let xe=!1;he.length!==R.cameras.length&&(R.cameras.length=0,xe=!0);for(let Re=0;Re<he.length;Re++){const ze=he[Re];let pt=null;if(M!==null)pt=M.getViewport(ze);else{const vt=y.getViewSubImage(x,ze);pt=vt.viewport,Re===0&&(e.setRenderTargetTextures(F,vt.colorTexture,x.ignoreDepthValues?void 0:vt.depthStencilTexture),e.setRenderTarget(F))}let k=L[Re];k===void 0&&(k=new Bn,k.layers.enable(Re),k.viewport=new on,L[Re]=k),k.matrix.fromArray(ze.transform.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale),k.projectionMatrix.fromArray(ze.projectionMatrix),k.projectionMatrixInverse.copy(k.projectionMatrix).invert(),k.viewport.set(pt.x,pt.y,pt.width,pt.height),Re===0&&(R.matrix.copy(k.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),xe===!0&&R.cameras.push(k)}const Ce=a.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){const Re=y.getDepthInformation(he[0]);Re&&Re.isValid&&Re.texture&&A.init(e,Re,a.renderState)}}for(let he=0;he<P.length;he++){const xe=D[he],Ce=P[he];xe!==null&&Ce!==void 0&&Ce.update(xe,W,m||f)}I&&I(q,W),W.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:W}),T=null}const be=new eg;be.setAnimationLoop(J),this.setAnimationLoop=function(q){I=q},this.dispose=function(){}}}const Hr=new Qn,NE=new jt;function IE(s,e){function n(v,_){v.matrixAutoUpdate===!0&&v.updateMatrix(),_.value.copy(v.matrix)}function r(v,_){_.color.getRGB(v.fogColor.value,Km(s)),_.isFog?(v.fogNear.value=_.near,v.fogFar.value=_.far):_.isFogExp2&&(v.fogDensity.value=_.density)}function a(v,_,F,P,D){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(v,_):_.isMeshToonMaterial?(c(v,_),y(v,_)):_.isMeshPhongMaterial?(c(v,_),g(v,_)):_.isMeshStandardMaterial?(c(v,_),x(v,_),_.isMeshPhysicalMaterial&&M(v,_,D)):_.isMeshMatcapMaterial?(c(v,_),T(v,_)):_.isMeshDepthMaterial?c(v,_):_.isMeshDistanceMaterial?(c(v,_),A(v,_)):_.isMeshNormalMaterial?c(v,_):_.isLineBasicMaterial?(f(v,_),_.isLineDashedMaterial&&d(v,_)):_.isPointsMaterial?h(v,_,F,P):_.isSpriteMaterial?m(v,_):_.isShadowMaterial?(v.color.value.copy(_.color),v.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(v,_){v.opacity.value=_.opacity,_.color&&v.diffuse.value.copy(_.color),_.emissive&&v.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(v.map.value=_.map,n(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,n(_.alphaMap,v.alphaMapTransform)),_.bumpMap&&(v.bumpMap.value=_.bumpMap,n(_.bumpMap,v.bumpMapTransform),v.bumpScale.value=_.bumpScale,_.side===Mn&&(v.bumpScale.value*=-1)),_.normalMap&&(v.normalMap.value=_.normalMap,n(_.normalMap,v.normalMapTransform),v.normalScale.value.copy(_.normalScale),_.side===Mn&&v.normalScale.value.negate()),_.displacementMap&&(v.displacementMap.value=_.displacementMap,n(_.displacementMap,v.displacementMapTransform),v.displacementScale.value=_.displacementScale,v.displacementBias.value=_.displacementBias),_.emissiveMap&&(v.emissiveMap.value=_.emissiveMap,n(_.emissiveMap,v.emissiveMapTransform)),_.specularMap&&(v.specularMap.value=_.specularMap,n(_.specularMap,v.specularMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest);const F=e.get(_),P=F.envMap,D=F.envMapRotation;P&&(v.envMap.value=P,Hr.copy(D),Hr.x*=-1,Hr.y*=-1,Hr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Hr.y*=-1,Hr.z*=-1),v.envMapRotation.value.setFromMatrix4(NE.makeRotationFromEuler(Hr)),v.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=_.reflectivity,v.ior.value=_.ior,v.refractionRatio.value=_.refractionRatio),_.lightMap&&(v.lightMap.value=_.lightMap,v.lightMapIntensity.value=_.lightMapIntensity,n(_.lightMap,v.lightMapTransform)),_.aoMap&&(v.aoMap.value=_.aoMap,v.aoMapIntensity.value=_.aoMapIntensity,n(_.aoMap,v.aoMapTransform))}function f(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,_.map&&(v.map.value=_.map,n(_.map,v.mapTransform))}function d(v,_){v.dashSize.value=_.dashSize,v.totalSize.value=_.dashSize+_.gapSize,v.scale.value=_.scale}function h(v,_,F,P){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.size.value=_.size*F,v.scale.value=P*.5,_.map&&(v.map.value=_.map,n(_.map,v.uvTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,n(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function m(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.rotation.value=_.rotation,_.map&&(v.map.value=_.map,n(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,n(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function g(v,_){v.specular.value.copy(_.specular),v.shininess.value=Math.max(_.shininess,1e-4)}function y(v,_){_.gradientMap&&(v.gradientMap.value=_.gradientMap)}function x(v,_){v.metalness.value=_.metalness,_.metalnessMap&&(v.metalnessMap.value=_.metalnessMap,n(_.metalnessMap,v.metalnessMapTransform)),v.roughness.value=_.roughness,_.roughnessMap&&(v.roughnessMap.value=_.roughnessMap,n(_.roughnessMap,v.roughnessMapTransform)),_.envMap&&(v.envMapIntensity.value=_.envMapIntensity)}function M(v,_,F){v.ior.value=_.ior,_.sheen>0&&(v.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),v.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(v.sheenColorMap.value=_.sheenColorMap,n(_.sheenColorMap,v.sheenColorMapTransform)),_.sheenRoughnessMap&&(v.sheenRoughnessMap.value=_.sheenRoughnessMap,n(_.sheenRoughnessMap,v.sheenRoughnessMapTransform))),_.clearcoat>0&&(v.clearcoat.value=_.clearcoat,v.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(v.clearcoatMap.value=_.clearcoatMap,n(_.clearcoatMap,v.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,n(_.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(v.clearcoatNormalMap.value=_.clearcoatNormalMap,n(_.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Mn&&v.clearcoatNormalScale.value.negate())),_.dispersion>0&&(v.dispersion.value=_.dispersion),_.iridescence>0&&(v.iridescence.value=_.iridescence,v.iridescenceIOR.value=_.iridescenceIOR,v.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(v.iridescenceMap.value=_.iridescenceMap,n(_.iridescenceMap,v.iridescenceMapTransform)),_.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=_.iridescenceThicknessMap,n(_.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),_.transmission>0&&(v.transmission.value=_.transmission,v.transmissionSamplerMap.value=F.texture,v.transmissionSamplerSize.value.set(F.width,F.height),_.transmissionMap&&(v.transmissionMap.value=_.transmissionMap,n(_.transmissionMap,v.transmissionMapTransform)),v.thickness.value=_.thickness,_.thicknessMap&&(v.thicknessMap.value=_.thicknessMap,n(_.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=_.attenuationDistance,v.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(v.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(v.anisotropyMap.value=_.anisotropyMap,n(_.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=_.specularIntensity,v.specularColor.value.copy(_.specularColor),_.specularColorMap&&(v.specularColorMap.value=_.specularColorMap,n(_.specularColorMap,v.specularColorMapTransform)),_.specularIntensityMap&&(v.specularIntensityMap.value=_.specularIntensityMap,n(_.specularIntensityMap,v.specularIntensityMapTransform))}function T(v,_){_.matcap&&(v.matcap.value=_.matcap)}function A(v,_){const F=e.get(_).light;v.referencePosition.value.setFromMatrixPosition(F.matrixWorld),v.nearDistance.value=F.shadow.camera.near,v.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function UE(s,e,n,r){let a={},c={},f=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(F,P){const D=P.program;r.uniformBlockBinding(F,D)}function m(F,P){let D=a[F.id];D===void 0&&(T(F),D=g(F),a[F.id]=D,F.addEventListener("dispose",v));const Z=P.program;r.updateUBOMapping(F,Z);const B=e.render.frame;c[F.id]!==B&&(x(F),c[F.id]=B)}function g(F){const P=y();F.__bindingPointIndex=P;const D=s.createBuffer(),Z=F.__size,B=F.usage;return s.bindBuffer(s.UNIFORM_BUFFER,D),s.bufferData(s.UNIFORM_BUFFER,Z,B),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,D),D}function y(){for(let F=0;F<d;F++)if(f.indexOf(F)===-1)return f.push(F),F;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(F){const P=a[F.id],D=F.uniforms,Z=F.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let B=0,O=D.length;B<O;B++){const K=Array.isArray(D[B])?D[B]:[D[B]];for(let L=0,R=K.length;L<R;L++){const V=K[L];if(M(V,B,L,Z)===!0){const ge=V.__offset,ee=Array.isArray(V.value)?V.value:[V.value];let _e=0;for(let ve=0;ve<ee.length;ve++){const le=ee[ve],j=A(le);typeof le=="number"||typeof le=="boolean"?(V.__data[0]=le,s.bufferSubData(s.UNIFORM_BUFFER,ge+_e,V.__data)):le.isMatrix3?(V.__data[0]=le.elements[0],V.__data[1]=le.elements[1],V.__data[2]=le.elements[2],V.__data[3]=0,V.__data[4]=le.elements[3],V.__data[5]=le.elements[4],V.__data[6]=le.elements[5],V.__data[7]=0,V.__data[8]=le.elements[6],V.__data[9]=le.elements[7],V.__data[10]=le.elements[8],V.__data[11]=0):(le.toArray(V.__data,_e),_e+=j.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ge,V.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(F,P,D,Z){const B=F.value,O=P+"_"+D;if(Z[O]===void 0)return typeof B=="number"||typeof B=="boolean"?Z[O]=B:Z[O]=B.clone(),!0;{const K=Z[O];if(typeof B=="number"||typeof B=="boolean"){if(K!==B)return Z[O]=B,!0}else if(K.equals(B)===!1)return K.copy(B),!0}return!1}function T(F){const P=F.uniforms;let D=0;const Z=16;for(let O=0,K=P.length;O<K;O++){const L=Array.isArray(P[O])?P[O]:[P[O]];for(let R=0,V=L.length;R<V;R++){const ge=L[R],ee=Array.isArray(ge.value)?ge.value:[ge.value];for(let _e=0,ve=ee.length;_e<ve;_e++){const le=ee[_e],j=A(le),N=D%Z;N!==0&&Z-N<j.boundary&&(D+=Z-N),ge.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),ge.__offset=D,D+=j.storage}}}const B=D%Z;return B>0&&(D+=Z-B),F.__size=D,F.__cache={},this}function A(F){const P={boundary:0,storage:0};return typeof F=="number"||typeof F=="boolean"?(P.boundary=4,P.storage=4):F.isVector2?(P.boundary=8,P.storage=8):F.isVector3||F.isColor?(P.boundary=16,P.storage=12):F.isVector4?(P.boundary=16,P.storage=16):F.isMatrix3?(P.boundary=48,P.storage=48):F.isMatrix4?(P.boundary=64,P.storage=64):F.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",F),P}function v(F){const P=F.target;P.removeEventListener("dispose",v);const D=f.indexOf(P.__bindingPointIndex);f.splice(D,1),s.deleteBuffer(a[P.id]),delete a[P.id],delete c[P.id]}function _(){for(const F in a)s.deleteBuffer(a[F]);f=[],a={},c={}}return{bind:h,update:m,dispose:_}}class og{constructor(e={}){const{canvas:n=Av(),context:r=null,depth:a=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:y=!1}=e;this.isWebGLRenderer=!0;let x;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=r.getContextAttributes().alpha}else x=f;const M=new Uint32Array(4),T=new Int32Array(4);let A=null,v=null;const _=[],F=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$n,this.toneMapping=vr,this.toneMappingExposure=1;const P=this;let D=!1,Z=0,B=0,O=null,K=-1,L=null;const R=new on,V=new on;let ge=null;const ee=new Ct(0);let _e=0,ve=n.width,le=n.height,j=1,N=null,te=null;const oe=new on(0,0,ve,le),I=new on(0,0,ve,le);let J=!1;const be=new Jm;let q=!1,W=!1;const he=new jt,xe=new ne,Ce=new on,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function pt(){return O===null?j:1}let k=r;function vt(b,X){return n.getContext(b,X)}try{const b={alpha:!0,depth:a,stencil:c,antialias:d,premultipliedAlpha:h,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:y};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Pd}`),n.addEventListener("webglcontextlost",ae,!1),n.addEventListener("webglcontextrestored",me,!1),n.addEventListener("webglcontextcreationerror",we,!1),k===null){const X="webgl2";if(k=vt(X,b),k===null)throw vt(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Qe,ct,Be,gt,et,Je,C,S,z,Y,ue,pe,Me,Se,Pe,Ve,ye,De,rt,We,Ue,Ye,Ze,yt;function E(){Qe=new GS(k),Qe.init(),Ye=new AE(k,Qe),ct=new FS(k,Qe,e,Ye),Be=new EE(k),gt=new jS(k),et=new cE,Je=new TE(k,Qe,Be,et,ct,Ye,gt),C=new kS(P),S=new VS(P),z=new Qv(k),Ze=new IS(k,z),Y=new WS(k,z,gt,Ze),ue=new qS(k,Y,z,gt),rt=new YS(k,ct,Je),Ve=new OS(et),pe=new lE(P,C,S,Qe,ct,Ze,Ve),Me=new IE(P,et),Se=new dE,Pe=new _E(Qe),De=new NS(P,C,S,Be,ue,x,h),ye=new ME(P,ue,ct),yt=new UE(k,gt,ct,Be),We=new US(k,Qe,gt),Ue=new XS(k,Qe,gt),gt.programs=pe.programs,P.capabilities=ct,P.extensions=Qe,P.properties=et,P.renderLists=Se,P.shadowMap=ye,P.state=Be,P.info=gt}E();const ie=new DE(P,k);this.xr=ie,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const b=Qe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Qe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(b){b!==void 0&&(j=b,this.setSize(ve,le,!1))},this.getSize=function(b){return b.set(ve,le)},this.setSize=function(b,X,ce=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ve=b,le=X,n.width=Math.floor(b*j),n.height=Math.floor(X*j),ce===!0&&(n.style.width=b+"px",n.style.height=X+"px"),this.setViewport(0,0,b,X)},this.getDrawingBufferSize=function(b){return b.set(ve*j,le*j).floor()},this.setDrawingBufferSize=function(b,X,ce){ve=b,le=X,j=ce,n.width=Math.floor(b*ce),n.height=Math.floor(X*ce),this.setViewport(0,0,b,X)},this.getCurrentViewport=function(b){return b.copy(R)},this.getViewport=function(b){return b.copy(oe)},this.setViewport=function(b,X,ce,fe){b.isVector4?oe.set(b.x,b.y,b.z,b.w):oe.set(b,X,ce,fe),Be.viewport(R.copy(oe).multiplyScalar(j).round())},this.getScissor=function(b){return b.copy(I)},this.setScissor=function(b,X,ce,fe){b.isVector4?I.set(b.x,b.y,b.z,b.w):I.set(b,X,ce,fe),Be.scissor(V.copy(I).multiplyScalar(j).round())},this.getScissorTest=function(){return J},this.setScissorTest=function(b){Be.setScissorTest(J=b)},this.setOpaqueSort=function(b){N=b},this.setTransparentSort=function(b){te=b},this.getClearColor=function(b){return b.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(b=!0,X=!0,ce=!0){let fe=0;if(b){let $=!1;if(O!==null){const Ne=O.texture.format;$=Ne===Fd||Ne===Ud||Ne===Id}if($){const Ne=O.texture.type,Oe=Ne===Bi||Ne===qr||Ne===Vo||Ne===qs||Ne===Dd||Ne===Nd,Xe=De.getClearColor(),Ie=De.getClearAlpha(),at=Xe.r,st=Xe.g,tt=Xe.b;Oe?(M[0]=at,M[1]=st,M[2]=tt,M[3]=Ie,k.clearBufferuiv(k.COLOR,0,M)):(T[0]=at,T[1]=st,T[2]=tt,T[3]=Ie,k.clearBufferiv(k.COLOR,0,T))}else fe|=k.COLOR_BUFFER_BIT}X&&(fe|=k.DEPTH_BUFFER_BIT),ce&&(fe|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(fe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ae,!1),n.removeEventListener("webglcontextrestored",me,!1),n.removeEventListener("webglcontextcreationerror",we,!1),Se.dispose(),Pe.dispose(),et.dispose(),C.dispose(),S.dispose(),ue.dispose(),Ze.dispose(),yt.dispose(),pe.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",kt),ie.removeEventListener("sessionend",wn),Gt.stop()};function ae(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const b=gt.autoReset,X=ye.enabled,ce=ye.autoUpdate,fe=ye.needsUpdate,$=ye.type;E(),gt.autoReset=b,ye.enabled=X,ye.autoUpdate=ce,ye.needsUpdate=fe,ye.type=$}function we(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function $e(b){const X=b.target;X.removeEventListener("dispose",$e),ot(X)}function ot(b){It(b),et.remove(b)}function It(b){const X=et.get(b).programs;X!==void 0&&(X.forEach(function(ce){pe.releaseProgram(ce)}),b.isShaderMaterial&&pe.releaseShaderCache(b))}this.renderBufferDirect=function(b,X,ce,fe,$,Ne){X===null&&(X=Re);const Oe=$.isMesh&&$.matrixWorld.determinant()<0,Xe=zl(b,X,ce,fe,$);Be.setMaterial(fe,Oe);let Ie=ce.index,at=1;if(fe.wireframe===!0){if(Ie=Y.getWireframeAttribute(ce),Ie===void 0)return;at=2}const st=ce.drawRange,tt=ce.attributes.position;let xt=st.start*at,Ut=(st.start+st.count)*at;Ne!==null&&(xt=Math.max(xt,Ne.start*at),Ut=Math.min(Ut,(Ne.start+Ne.count)*at)),Ie!==null?(xt=Math.max(xt,0),Ut=Math.min(Ut,Ie.count)):tt!=null&&(xt=Math.max(xt,0),Ut=Math.min(Ut,tt.count));const Pt=Ut-xt;if(Pt<0||Pt===1/0)return;Ze.setup($,fe,Xe,ce,Ie);let Jt,dt=We;if(Ie!==null&&(Jt=z.get(Ie),dt=Ue,dt.setIndex(Jt)),$.isMesh)fe.wireframe===!0?(Be.setLineWidth(fe.wireframeLinewidth*pt()),dt.setMode(k.LINES)):dt.setMode(k.TRIANGLES);else if($.isLine){let Ke=fe.linewidth;Ke===void 0&&(Ke=1),Be.setLineWidth(Ke*pt()),$.isLineSegments?dt.setMode(k.LINES):$.isLineLoop?dt.setMode(k.LINE_LOOP):dt.setMode(k.LINE_STRIP)}else $.isPoints?dt.setMode(k.POINTS):$.isSprite&&dt.setMode(k.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)dt.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(Qe.get("WEBGL_multi_draw"))dt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Ke=$._multiDrawStarts,wt=$._multiDrawCounts,Mt=$._multiDrawCount,Dn=Ie?z.get(Ie).bytesPerElement:1,Vi=et.get(fe).currentProgram.getUniforms();for(let en=0;en<Mt;en++)Vi.setValue(k,"_gl_DrawID",en),dt.render(Ke[en]/Dn,wt[en])}else if($.isInstancedMesh)dt.renderInstances(xt,Pt,$.count);else if(ce.isInstancedBufferGeometry){const Ke=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,wt=Math.min(ce.instanceCount,Ke);dt.renderInstances(xt,Pt,wt)}else dt.render(xt,Pt)};function Ht(b,X,ce){b.transparent===!0&&b.side===gi&&b.forceSinglePass===!1?(b.side=Mn,b.needsUpdate=!0,Hi(b,X,ce),b.side=zi,b.needsUpdate=!0,Hi(b,X,ce),b.side=gi):Hi(b,X,ce)}this.compile=function(b,X,ce=null){ce===null&&(ce=b),v=Pe.get(ce),v.init(X),F.push(v),ce.traverseVisible(function($){$.isLight&&$.layers.test(X.layers)&&(v.pushLight($),$.castShadow&&v.pushShadow($))}),b!==ce&&b.traverseVisible(function($){$.isLight&&$.layers.test(X.layers)&&(v.pushLight($),$.castShadow&&v.pushShadow($))}),v.setupLights();const fe=new Set;return b.traverse(function($){const Ne=$.material;if(Ne)if(Array.isArray(Ne))for(let Oe=0;Oe<Ne.length;Oe++){const Xe=Ne[Oe];Ht(Xe,ce,$),fe.add(Xe)}else Ht(Ne,ce,$),fe.add(Ne)}),F.pop(),v=null,fe},this.compileAsync=function(b,X,ce=null){const fe=this.compile(b,X,ce);return new Promise($=>{function Ne(){if(fe.forEach(function(Oe){et.get(Oe).currentProgram.isReady()&&fe.delete(Oe)}),fe.size===0){$(b);return}setTimeout(Ne,10)}Qe.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let _t=null;function Ot(b){_t&&_t(b)}function kt(){Gt.stop()}function wn(){Gt.start()}const Gt=new eg;Gt.setAnimationLoop(Ot),typeof self<"u"&&Gt.setContext(self),this.setAnimationLoop=function(b){_t=b,ie.setAnimationLoop(b),b===null?Gt.stop():Gt.start()},ie.addEventListener("sessionstart",kt),ie.addEventListener("sessionend",wn),this.render=function(b,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(X),X=ie.getCamera()),b.isScene===!0&&b.onBeforeRender(P,b,X,O),v=Pe.get(b,F.length),v.init(X),F.push(v),he.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),be.setFromProjectionMatrix(he),W=this.localClippingEnabled,q=Ve.init(this.clippingPlanes,W),A=Se.get(b,_.length),A.init(),_.push(A),ie.enabled===!0&&ie.isPresenting===!0){const Ne=P.xr.getDepthSensingMesh();Ne!==null&&gn(Ne,X,-1/0,P.sortObjects)}gn(b,X,0,P.sortObjects),A.finish(),P.sortObjects===!0&&A.sort(N,te),ze=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,ze&&De.addToRenderList(A,b),this.info.render.frame++,q===!0&&Ve.beginShadows();const ce=v.state.shadowsArray;ye.render(ce,b,X),q===!0&&Ve.endShadows(),this.info.autoReset===!0&&this.info.reset();const fe=A.opaque,$=A.transmissive;if(v.setupLights(),X.isArrayCamera){const Ne=X.cameras;if($.length>0)for(let Oe=0,Xe=Ne.length;Oe<Xe;Oe++){const Ie=Ne[Oe];Jn(fe,$,b,Ie)}ze&&De.render(b);for(let Oe=0,Xe=Ne.length;Oe<Xe;Oe++){const Ie=Ne[Oe];xi(A,b,Ie,Ie.viewport)}}else $.length>0&&Jn(fe,$,b,X),ze&&De.render(b),xi(A,b,X);O!==null&&(Je.updateMultisampleRenderTarget(O),Je.updateRenderTargetMipmap(O)),b.isScene===!0&&b.onAfterRender(P,b,X),Ze.resetDefaultState(),K=-1,L=null,F.pop(),F.length>0?(v=F[F.length-1],q===!0&&Ve.setGlobalState(P.clippingPlanes,v.state.camera)):v=null,_.pop(),_.length>0?A=_[_.length-1]:A=null};function gn(b,X,ce,fe){if(b.visible===!1)return;if(b.layers.test(X.layers)){if(b.isGroup)ce=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(X);else if(b.isLight)v.pushLight(b),b.castShadow&&v.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||be.intersectsSprite(b)){fe&&Ce.setFromMatrixPosition(b.matrixWorld).applyMatrix4(he);const Oe=ue.update(b),Xe=b.material;Xe.visible&&A.push(b,Oe,Xe,ce,Ce.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||be.intersectsObject(b))){const Oe=ue.update(b),Xe=b.material;if(fe&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ce.copy(b.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),Ce.copy(Oe.boundingSphere.center)),Ce.applyMatrix4(b.matrixWorld).applyMatrix4(he)),Array.isArray(Xe)){const Ie=Oe.groups;for(let at=0,st=Ie.length;at<st;at++){const tt=Ie[at],xt=Xe[tt.materialIndex];xt&&xt.visible&&A.push(b,Oe,xt,ce,Ce.z,tt)}}else Xe.visible&&A.push(b,Oe,Xe,ce,Ce.z,null)}}const Ne=b.children;for(let Oe=0,Xe=Ne.length;Oe<Xe;Oe++)gn(Ne[Oe],X,ce,fe)}function xi(b,X,ce,fe){const $=b.opaque,Ne=b.transmissive,Oe=b.transparent;v.setupLightsView(ce),q===!0&&Ve.setGlobalState(P.clippingPlanes,ce),fe&&Be.viewport(R.copy(fe)),$.length>0&&yi($,X,ce),Ne.length>0&&yi(Ne,X,ce),Oe.length>0&&yi(Oe,X,ce),Be.buffers.depth.setTest(!0),Be.buffers.depth.setMask(!0),Be.buffers.color.setMask(!0),Be.setPolygonOffset(!1)}function Jn(b,X,ce,fe){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[fe.id]===void 0&&(v.state.transmissionRenderTarget[fe.id]=new $r(1,1,{generateMipmaps:!0,type:Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float")?Wo:Bi,minFilter:Yr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace}));const Ne=v.state.transmissionRenderTarget[fe.id],Oe=fe.viewport||R;Ne.setSize(Oe.z,Oe.w);const Xe=P.getRenderTarget();P.setRenderTarget(Ne),P.getClearColor(ee),_e=P.getClearAlpha(),_e<1&&P.setClearColor(16777215,.5),ze?De.render(ce):P.clear();const Ie=P.toneMapping;P.toneMapping=vr;const at=fe.viewport;if(fe.viewport!==void 0&&(fe.viewport=void 0),v.setupLightsView(fe),q===!0&&Ve.setGlobalState(P.clippingPlanes,fe),yi(b,ce,fe),Je.updateMultisampleRenderTarget(Ne),Je.updateRenderTargetMipmap(Ne),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let tt=0,xt=X.length;tt<xt;tt++){const Ut=X[tt],Pt=Ut.object,Jt=Ut.geometry,dt=Ut.material,Ke=Ut.group;if(dt.side===gi&&Pt.layers.test(fe.layers)){const wt=dt.side;dt.side=Mn,dt.needsUpdate=!0,Mr(Pt,ce,fe,Jt,dt,Ke),dt.side=wt,dt.needsUpdate=!0,st=!0}}st===!0&&(Je.updateMultisampleRenderTarget(Ne),Je.updateRenderTargetMipmap(Ne))}P.setRenderTarget(Xe),P.setClearColor(ee,_e),at!==void 0&&(fe.viewport=at),P.toneMapping=Ie}function yi(b,X,ce){const fe=X.isScene===!0?X.overrideMaterial:null;for(let $=0,Ne=b.length;$<Ne;$++){const Oe=b[$],Xe=Oe.object,Ie=Oe.geometry,at=fe===null?Oe.material:fe,st=Oe.group;Xe.layers.test(ce.layers)&&Mr(Xe,X,ce,Ie,at,st)}}function Mr(b,X,ce,fe,$,Ne){b.onBeforeRender(P,X,ce,fe,$,Ne),b.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),$.transparent===!0&&$.side===gi&&$.forceSinglePass===!1?($.side=Mn,$.needsUpdate=!0,P.renderBufferDirect(ce,X,fe,$,b,Ne),$.side=zi,$.needsUpdate=!0,P.renderBufferDirect(ce,X,fe,$,b,Ne),$.side=gi):P.renderBufferDirect(ce,X,fe,$,b,Ne),b.onAfterRender(P,X,ce,fe,$,Ne)}function Hi(b,X,ce){X.isScene!==!0&&(X=Re);const fe=et.get(b),$=v.state.lights,Ne=v.state.shadowsArray,Oe=$.state.version,Xe=pe.getParameters(b,$.state,Ne,X,ce),Ie=pe.getProgramCacheKey(Xe);let at=fe.programs;fe.environment=b.isMeshStandardMaterial?X.environment:null,fe.fog=X.fog,fe.envMap=(b.isMeshStandardMaterial?S:C).get(b.envMap||fe.environment),fe.envMapRotation=fe.environment!==null&&b.envMap===null?X.environmentRotation:b.envMapRotation,at===void 0&&(b.addEventListener("dispose",$e),at=new Map,fe.programs=at);let st=at.get(Ie);if(st!==void 0){if(fe.currentProgram===st&&fe.lightsStateVersion===Oe)return $o(b,Xe),st}else Xe.uniforms=pe.getUniforms(b),b.onBeforeCompile(Xe,P),st=pe.acquireProgram(Xe,Ie),at.set(Ie,st),fe.uniforms=Xe.uniforms;const tt=fe.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(tt.clippingPlanes=Ve.uniform),$o(b,Xe),fe.needsLights=Ko(b),fe.lightsStateVersion=Oe,fe.needsLights&&(tt.ambientLightColor.value=$.state.ambient,tt.lightProbe.value=$.state.probe,tt.directionalLights.value=$.state.directional,tt.directionalLightShadows.value=$.state.directionalShadow,tt.spotLights.value=$.state.spot,tt.spotLightShadows.value=$.state.spotShadow,tt.rectAreaLights.value=$.state.rectArea,tt.ltc_1.value=$.state.rectAreaLTC1,tt.ltc_2.value=$.state.rectAreaLTC2,tt.pointLights.value=$.state.point,tt.pointLightShadows.value=$.state.pointShadow,tt.hemisphereLights.value=$.state.hemi,tt.directionalShadowMap.value=$.state.directionalShadowMap,tt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,tt.spotShadowMap.value=$.state.spotShadowMap,tt.spotLightMatrix.value=$.state.spotLightMatrix,tt.spotLightMap.value=$.state.spotLightMap,tt.pointShadowMap.value=$.state.pointShadowMap,tt.pointShadowMatrix.value=$.state.pointShadowMatrix),fe.currentProgram=st,fe.uniformsList=null,st}function qo(b){if(b.uniformsList===null){const X=b.currentProgram.getUniforms();b.uniformsList=Cl.seqWithValue(X.seq,b.uniforms)}return b.uniformsList}function $o(b,X){const ce=et.get(b);ce.outputColorSpace=X.outputColorSpace,ce.batching=X.batching,ce.batchingColor=X.batchingColor,ce.instancing=X.instancing,ce.instancingColor=X.instancingColor,ce.instancingMorph=X.instancingMorph,ce.skinning=X.skinning,ce.morphTargets=X.morphTargets,ce.morphNormals=X.morphNormals,ce.morphColors=X.morphColors,ce.morphTargetsCount=X.morphTargetsCount,ce.numClippingPlanes=X.numClippingPlanes,ce.numIntersection=X.numClipIntersection,ce.vertexAlphas=X.vertexAlphas,ce.vertexTangents=X.vertexTangents,ce.toneMapping=X.toneMapping}function zl(b,X,ce,fe,$){X.isScene!==!0&&(X=Re),Je.resetTextureUnits();const Ne=X.fog,Oe=fe.isMeshStandardMaterial?X.environment:null,Xe=O===null?P.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:yr,Ie=(fe.isMeshStandardMaterial?S:C).get(fe.envMap||Oe),at=fe.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,st=!!ce.attributes.tangent&&(!!fe.normalMap||fe.anisotropy>0),tt=!!ce.morphAttributes.position,xt=!!ce.morphAttributes.normal,Ut=!!ce.morphAttributes.color;let Pt=vr;fe.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Pt=P.toneMapping);const Jt=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,dt=Jt!==void 0?Jt.length:0,Ke=et.get(fe),wt=v.state.lights;if(q===!0&&(W===!0||b!==L)){const Tn=b===L&&fe.id===K;Ve.setState(fe,b,Tn)}let Mt=!1;fe.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==wt.state.version||Ke.outputColorSpace!==Xe||$.isBatchedMesh&&Ke.batching===!1||!$.isBatchedMesh&&Ke.batching===!0||$.isBatchedMesh&&Ke.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Ke.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Ke.instancing===!1||!$.isInstancedMesh&&Ke.instancing===!0||$.isSkinnedMesh&&Ke.skinning===!1||!$.isSkinnedMesh&&Ke.skinning===!0||$.isInstancedMesh&&Ke.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Ke.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Ke.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Ke.instancingMorph===!1&&$.morphTexture!==null||Ke.envMap!==Ie||fe.fog===!0&&Ke.fog!==Ne||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==Ve.numPlanes||Ke.numIntersection!==Ve.numIntersection)||Ke.vertexAlphas!==at||Ke.vertexTangents!==st||Ke.morphTargets!==tt||Ke.morphNormals!==xt||Ke.morphColors!==Ut||Ke.toneMapping!==Pt||Ke.morphTargetsCount!==dt)&&(Mt=!0):(Mt=!0,Ke.__version=fe.version);let Dn=Ke.currentProgram;Mt===!0&&(Dn=Hi(fe,X,$));let Vi=!1,en=!1,Gi=!1;const Rt=Dn.getUniforms(),Nn=Ke.uniforms;if(Be.useProgram(Dn.program)&&(Vi=!0,en=!0,Gi=!0),fe.id!==K&&(K=fe.id,en=!0),Vi||L!==b){Rt.setValue(k,"projectionMatrix",b.projectionMatrix),Rt.setValue(k,"viewMatrix",b.matrixWorldInverse);const Tn=Rt.map.cameraPosition;Tn!==void 0&&Tn.setValue(k,xe.setFromMatrixPosition(b.matrixWorld)),ct.logarithmicDepthBuffer&&Rt.setValue(k,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(fe.isMeshPhongMaterial||fe.isMeshToonMaterial||fe.isMeshLambertMaterial||fe.isMeshBasicMaterial||fe.isMeshStandardMaterial||fe.isShaderMaterial)&&Rt.setValue(k,"isOrthographic",b.isOrthographicCamera===!0),L!==b&&(L=b,en=!0,Gi=!0)}if($.isSkinnedMesh){Rt.setOptional(k,$,"bindMatrix"),Rt.setOptional(k,$,"bindMatrixInverse");const Tn=$.skeleton;Tn&&(Tn.boneTexture===null&&Tn.computeBoneTexture(),Rt.setValue(k,"boneTexture",Tn.boneTexture,Je))}$.isBatchedMesh&&(Rt.setOptional(k,$,"batchingTexture"),Rt.setValue(k,"batchingTexture",$._matricesTexture,Je),Rt.setOptional(k,$,"batchingIdTexture"),Rt.setValue(k,"batchingIdTexture",$._indirectTexture,Je),Rt.setOptional(k,$,"batchingColorTexture"),$._colorsTexture!==null&&Rt.setValue(k,"batchingColorTexture",$._colorsTexture,Je));const Js=ce.morphAttributes;if((Js.position!==void 0||Js.normal!==void 0||Js.color!==void 0)&&rt.update($,ce,Dn),(en||Ke.receiveShadow!==$.receiveShadow)&&(Ke.receiveShadow=$.receiveShadow,Rt.setValue(k,"receiveShadow",$.receiveShadow)),fe.isMeshGouraudMaterial&&fe.envMap!==null&&(Nn.envMap.value=Ie,Nn.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),fe.isMeshStandardMaterial&&fe.envMap===null&&X.environment!==null&&(Nn.envMapIntensity.value=X.environmentIntensity),en&&(Rt.setValue(k,"toneMappingExposure",P.toneMappingExposure),Ke.needsLights&&Si(Nn,Gi),Ne&&fe.fog===!0&&Me.refreshFogUniforms(Nn,Ne),Me.refreshMaterialUniforms(Nn,fe,j,le,v.state.transmissionRenderTarget[b.id]),Cl.upload(k,qo(Ke),Nn,Je)),fe.isShaderMaterial&&fe.uniformsNeedUpdate===!0&&(Cl.upload(k,qo(Ke),Nn,Je),fe.uniformsNeedUpdate=!1),fe.isSpriteMaterial&&Rt.setValue(k,"center",$.center),Rt.setValue(k,"modelViewMatrix",$.modelViewMatrix),Rt.setValue(k,"normalMatrix",$.normalMatrix),Rt.setValue(k,"modelMatrix",$.matrixWorld),fe.isShaderMaterial||fe.isRawShaderMaterial){const Tn=fe.uniformsGroups;for(let Er=0,Zo=Tn.length;Er<Zo;Er++){const Jr=Tn[Er];yt.update(Jr,Dn),yt.bind(Jr,Dn)}}return Dn}function Si(b,X){b.ambientLightColor.needsUpdate=X,b.lightProbe.needsUpdate=X,b.directionalLights.needsUpdate=X,b.directionalLightShadows.needsUpdate=X,b.pointLights.needsUpdate=X,b.pointLightShadows.needsUpdate=X,b.spotLights.needsUpdate=X,b.spotLightShadows.needsUpdate=X,b.rectAreaLights.needsUpdate=X,b.hemisphereLights.needsUpdate=X}function Ko(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(b,X,ce){et.get(b.texture).__webglTexture=X,et.get(b.depthTexture).__webglTexture=ce;const fe=et.get(b);fe.__hasExternalTextures=!0,fe.__autoAllocateDepthBuffer=ce===void 0,fe.__autoAllocateDepthBuffer||Qe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),fe.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,X){const ce=et.get(b);ce.__webglFramebuffer=X,ce.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(b,X=0,ce=0){O=b,Z=X,B=ce;let fe=!0,$=null,Ne=!1,Oe=!1;if(b){const Ie=et.get(b);Ie.__useDefaultFramebuffer!==void 0?(Be.bindFramebuffer(k.FRAMEBUFFER,null),fe=!1):Ie.__webglFramebuffer===void 0?Je.setupRenderTarget(b):Ie.__hasExternalTextures&&Je.rebindTextures(b,et.get(b.texture).__webglTexture,et.get(b.depthTexture).__webglTexture);const at=b.texture;(at.isData3DTexture||at.isDataArrayTexture||at.isCompressedArrayTexture)&&(Oe=!0);const st=et.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(st[X])?$=st[X][ce]:$=st[X],Ne=!0):b.samples>0&&Je.useMultisampledRTT(b)===!1?$=et.get(b).__webglMultisampledFramebuffer:Array.isArray(st)?$=st[ce]:$=st,R.copy(b.viewport),V.copy(b.scissor),ge=b.scissorTest}else R.copy(oe).multiplyScalar(j).floor(),V.copy(I).multiplyScalar(j).floor(),ge=J;if(Be.bindFramebuffer(k.FRAMEBUFFER,$)&&fe&&Be.drawBuffers(b,$),Be.viewport(R),Be.scissor(V),Be.setScissorTest(ge),Ne){const Ie=et.get(b.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ie.__webglTexture,ce)}else if(Oe){const Ie=et.get(b.texture),at=X||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ie.__webglTexture,ce||0,at)}K=-1},this.readRenderTargetPixels=function(b,X,ce,fe,$,Ne,Oe){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=et.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Oe!==void 0&&(Xe=Xe[Oe]),Xe){Be.bindFramebuffer(k.FRAMEBUFFER,Xe);try{const Ie=b.texture,at=Ie.format,st=Ie.type;if(!ct.textureFormatReadable(at)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable(st)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=b.width-fe&&ce>=0&&ce<=b.height-$&&k.readPixels(X,ce,fe,$,Ye.convert(at),Ye.convert(st),Ne)}finally{const Ie=O!==null?et.get(O).__webglFramebuffer:null;Be.bindFramebuffer(k.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(b,X,ce,fe,$,Ne,Oe){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=et.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Oe!==void 0&&(Xe=Xe[Oe]),Xe){Be.bindFramebuffer(k.FRAMEBUFFER,Xe);try{const Ie=b.texture,at=Ie.format,st=Ie.type;if(!ct.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=b.width-fe&&ce>=0&&ce<=b.height-$){const tt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,tt),k.bufferData(k.PIXEL_PACK_BUFFER,Ne.byteLength,k.STREAM_READ),k.readPixels(X,ce,fe,$,Ye.convert(at),Ye.convert(st),0),k.flush();const xt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);await Cv(k,xt,4);try{k.bindBuffer(k.PIXEL_PACK_BUFFER,tt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Ne)}finally{k.deleteBuffer(tt),k.deleteSync(xt)}return Ne}}finally{const Ie=O!==null?et.get(O).__webglFramebuffer:null;Be.bindFramebuffer(k.FRAMEBUFFER,Ie)}}},this.copyFramebufferToTexture=function(b,X=null,ce=0){b.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,b=arguments[1]);const fe=Math.pow(2,-ce),$=Math.floor(b.image.width*fe),Ne=Math.floor(b.image.height*fe),Oe=X!==null?X.x:0,Xe=X!==null?X.y:0;Je.setTexture2D(b,0),k.copyTexSubImage2D(k.TEXTURE_2D,ce,0,0,Oe,Xe,$,Ne),Be.unbindTexture()},this.copyTextureToTexture=function(b,X,ce=null,fe=null,$=0){b.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),fe=arguments[0]||null,b=arguments[1],X=arguments[2],$=arguments[3]||0,ce=null);let Ne,Oe,Xe,Ie,at,st;ce!==null?(Ne=ce.max.x-ce.min.x,Oe=ce.max.y-ce.min.y,Xe=ce.min.x,Ie=ce.min.y):(Ne=b.image.width,Oe=b.image.height,Xe=0,Ie=0),fe!==null?(at=fe.x,st=fe.y):(at=0,st=0);const tt=Ye.convert(X.format),xt=Ye.convert(X.type);Je.setTexture2D(X,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,X.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,X.unpackAlignment);const Ut=k.getParameter(k.UNPACK_ROW_LENGTH),Pt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Jt=k.getParameter(k.UNPACK_SKIP_PIXELS),dt=k.getParameter(k.UNPACK_SKIP_ROWS),Ke=k.getParameter(k.UNPACK_SKIP_IMAGES),wt=b.isCompressedTexture?b.mipmaps[$]:b.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,wt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,wt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Xe),k.pixelStorei(k.UNPACK_SKIP_ROWS,Ie),b.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,$,at,st,Ne,Oe,tt,xt,wt.data):b.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,$,at,st,wt.width,wt.height,tt,wt.data):k.texSubImage2D(k.TEXTURE_2D,$,at,st,Ne,Oe,tt,xt,wt),k.pixelStorei(k.UNPACK_ROW_LENGTH,Ut),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Pt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Jt),k.pixelStorei(k.UNPACK_SKIP_ROWS,dt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ke),$===0&&X.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),Be.unbindTexture()},this.copyTextureToTexture3D=function(b,X,ce=null,fe=null,$=0){b.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ce=arguments[0]||null,fe=arguments[1]||null,b=arguments[2],X=arguments[3],$=arguments[4]||0);let Ne,Oe,Xe,Ie,at,st,tt,xt,Ut;const Pt=b.isCompressedTexture?b.mipmaps[$]:b.image;ce!==null?(Ne=ce.max.x-ce.min.x,Oe=ce.max.y-ce.min.y,Xe=ce.max.z-ce.min.z,Ie=ce.min.x,at=ce.min.y,st=ce.min.z):(Ne=Pt.width,Oe=Pt.height,Xe=Pt.depth,Ie=0,at=0,st=0),fe!==null?(tt=fe.x,xt=fe.y,Ut=fe.z):(tt=0,xt=0,Ut=0);const Jt=Ye.convert(X.format),dt=Ye.convert(X.type);let Ke;if(X.isData3DTexture)Je.setTexture3D(X,0),Ke=k.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)Je.setTexture2DArray(X,0),Ke=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,X.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,X.unpackAlignment);const wt=k.getParameter(k.UNPACK_ROW_LENGTH),Mt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Dn=k.getParameter(k.UNPACK_SKIP_PIXELS),Vi=k.getParameter(k.UNPACK_SKIP_ROWS),en=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Pt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Pt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ie),k.pixelStorei(k.UNPACK_SKIP_ROWS,at),k.pixelStorei(k.UNPACK_SKIP_IMAGES,st),b.isDataTexture||b.isData3DTexture?k.texSubImage3D(Ke,$,tt,xt,Ut,Ne,Oe,Xe,Jt,dt,Pt.data):X.isCompressedArrayTexture?k.compressedTexSubImage3D(Ke,$,tt,xt,Ut,Ne,Oe,Xe,Jt,Pt.data):k.texSubImage3D(Ke,$,tt,xt,Ut,Ne,Oe,Xe,Jt,dt,Pt),k.pixelStorei(k.UNPACK_ROW_LENGTH,wt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Mt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Dn),k.pixelStorei(k.UNPACK_SKIP_ROWS,Vi),k.pixelStorei(k.UNPACK_SKIP_IMAGES,en),$===0&&X.generateMipmaps&&k.generateMipmap(Ke),Be.unbindTexture()},this.initRenderTarget=function(b){et.get(b).__webglFramebuffer===void 0&&Je.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Je.setTextureCube(b,0):b.isData3DTexture?Je.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Je.setTexture2DArray(b,0):Je.setTexture2D(b,0),Be.unbindTexture()},this.resetState=function(){Z=0,B=0,O=null,Be.reset(),Ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Od?"display-p3":"srgb",n.unpackColorSpace=At.workingColorSpace===Ul?"display-p3":"srgb"}}class ag extends Hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qn,this.environmentIntensity=1,this.environmentRotation=new Qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class lg extends En{constructor(e,n,r,a,c,f,d,h,m){super(e,n,r,a,c,f,d,h,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}const Sm=new jt;class cg{constructor(e,n,r=0,a=1/0){this.ray=new Bd(e,n),this.near=r,this.far=a,this.camera=null,this.layers=new Hd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Sm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Sm),this}intersectObject(e,n=!0,r=[]){return Rd(e,this,r,n),r.sort(Mm),r}intersectObjects(e,n=!0,r=[]){for(let a=0,c=e.length;a<c;a++)Rd(e[a],this,r,n);return r.sort(Mm),r}}function Mm(s,e){return s.distance-e.distance}function Rd(s,e,n,r){let a=!0;if(s.layers.test(e.layers)&&s.raycast(e,n)===!1&&(a=!1),a===!0&&r===!0){const c=s.children;for(let f=0,d=c.length;f<d;f++)Rd(c[f],e,n,!0)}}class Em{constructor(e=1,n=0,r=0){return this.radius=e,this.phi=n,this.theta=r,this}set(e,n,r){return this.radius=e,this.phi=n,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,r){return this.radius=Math.sqrt(e*e+n*n+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(mn(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pd);const wm={type:"change"},qu={type:"start"},Tm={type:"end"},Sl=new Bd,Am=new mr,FE=Math.cos(70*Wr.DEG2RAD);class ug extends Qr{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new ne,this.cursor=new ne,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ms.ROTATE,MIDDLE:Ms.DOLLY,RIGHT:Ms.PAN},this.touches={ONE:pi.ROTATE,TWO:pi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return d.phi},this.getAzimuthalAngle=function(){return d.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(E){E.addEventListener("keydown",Pe),this._domElementKeyEvents=E},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Pe),this._domElementKeyEvents=null},this.saveState=function(){r.target0.copy(r.target),r.position0.copy(r.object.position),r.zoom0=r.object.zoom},this.reset=function(){r.target.copy(r.target0),r.object.position.copy(r.position0),r.object.zoom=r.zoom0,r.object.updateProjectionMatrix(),r.dispatchEvent(wm),r.update(),c=a.NONE},this.update=(function(){const E=new ne,ie=new Kr().setFromUnitVectors(e.up,new ne(0,1,0)),ae=ie.clone().invert(),me=new ne,we=new Kr,$e=new ne,ot=2*Math.PI;return function(Ht=null){const _t=r.object.position;E.copy(_t).sub(r.target),E.applyQuaternion(ie),d.setFromVector3(E),r.autoRotate&&c===a.NONE&&ge(R(Ht)),r.enableDamping?(d.theta+=h.theta*r.dampingFactor,d.phi+=h.phi*r.dampingFactor):(d.theta+=h.theta,d.phi+=h.phi);let Ot=r.minAzimuthAngle,kt=r.maxAzimuthAngle;isFinite(Ot)&&isFinite(kt)&&(Ot<-Math.PI?Ot+=ot:Ot>Math.PI&&(Ot-=ot),kt<-Math.PI?kt+=ot:kt>Math.PI&&(kt-=ot),Ot<=kt?d.theta=Math.max(Ot,Math.min(kt,d.theta)):d.theta=d.theta>(Ot+kt)/2?Math.max(Ot,d.theta):Math.min(kt,d.theta)),d.phi=Math.max(r.minPolarAngle,Math.min(r.maxPolarAngle,d.phi)),d.makeSafe(),r.enableDamping===!0?r.target.addScaledVector(g,r.dampingFactor):r.target.add(g),r.target.sub(r.cursor),r.target.clampLength(r.minTargetRadius,r.maxTargetRadius),r.target.add(r.cursor);let wn=!1;if(r.zoomToCursor&&B||r.object.isOrthographicCamera)d.radius=oe(d.radius);else{const Gt=d.radius;d.radius=oe(d.radius*m),wn=Gt!=d.radius}if(E.setFromSpherical(d),E.applyQuaternion(ae),_t.copy(r.target).add(E),r.object.lookAt(r.target),r.enableDamping===!0?(h.theta*=1-r.dampingFactor,h.phi*=1-r.dampingFactor,g.multiplyScalar(1-r.dampingFactor)):(h.set(0,0,0),g.set(0,0,0)),r.zoomToCursor&&B){let Gt=null;if(r.object.isPerspectiveCamera){const gn=E.length();Gt=oe(gn*m);const xi=gn-Gt;r.object.position.addScaledVector(D,xi),r.object.updateMatrixWorld(),wn=!!xi}else if(r.object.isOrthographicCamera){const gn=new ne(Z.x,Z.y,0);gn.unproject(r.object);const xi=r.object.zoom;r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/m)),r.object.updateProjectionMatrix(),wn=xi!==r.object.zoom;const Jn=new ne(Z.x,Z.y,0);Jn.unproject(r.object),r.object.position.sub(Jn).add(gn),r.object.updateMatrixWorld(),Gt=E.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),r.zoomToCursor=!1;Gt!==null&&(this.screenSpacePanning?r.target.set(0,0,-1).transformDirection(r.object.matrix).multiplyScalar(Gt).add(r.object.position):(Sl.origin.copy(r.object.position),Sl.direction.set(0,0,-1).transformDirection(r.object.matrix),Math.abs(r.object.up.dot(Sl.direction))<FE?e.lookAt(r.target):(Am.setFromNormalAndCoplanarPoint(r.object.up,r.target),Sl.intersectPlane(Am,r.target))))}else if(r.object.isOrthographicCamera){const Gt=r.object.zoom;r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/m)),Gt!==r.object.zoom&&(r.object.updateProjectionMatrix(),wn=!0)}return m=1,B=!1,wn||me.distanceToSquared(r.object.position)>f||8*(1-we.dot(r.object.quaternion))>f||$e.distanceToSquared(r.target)>f?(r.dispatchEvent(wm),me.copy(r.object.position),we.copy(r.object.quaternion),$e.copy(r.target),!0):!1}})(),this.dispose=function(){r.domElement.removeEventListener("contextmenu",De),r.domElement.removeEventListener("pointerdown",Je),r.domElement.removeEventListener("pointercancel",S),r.domElement.removeEventListener("wheel",ue),r.domElement.removeEventListener("pointermove",C),r.domElement.removeEventListener("pointerup",S),r.domElement.getRootNode().removeEventListener("keydown",Me,{capture:!0}),r._domElementKeyEvents!==null&&(r._domElementKeyEvents.removeEventListener("keydown",Pe),r._domElementKeyEvents=null)};const r=this,a={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let c=a.NONE;const f=1e-6,d=new Em,h=new Em;let m=1;const g=new ne,y=new ut,x=new ut,M=new ut,T=new ut,A=new ut,v=new ut,_=new ut,F=new ut,P=new ut,D=new ne,Z=new ut;let B=!1;const O=[],K={};let L=!1;function R(E){return E!==null?2*Math.PI/60*r.autoRotateSpeed*E:2*Math.PI/60/60*r.autoRotateSpeed}function V(E){const ie=Math.abs(E*.01);return Math.pow(.95,r.zoomSpeed*ie)}function ge(E){h.theta-=E}function ee(E){h.phi-=E}const _e=(function(){const E=new ne;return function(ae,me){E.setFromMatrixColumn(me,0),E.multiplyScalar(-ae),g.add(E)}})(),ve=(function(){const E=new ne;return function(ae,me){r.screenSpacePanning===!0?E.setFromMatrixColumn(me,1):(E.setFromMatrixColumn(me,0),E.crossVectors(r.object.up,E)),E.multiplyScalar(ae),g.add(E)}})(),le=(function(){const E=new ne;return function(ae,me){const we=r.domElement;if(r.object.isPerspectiveCamera){const $e=r.object.position;E.copy($e).sub(r.target);let ot=E.length();ot*=Math.tan(r.object.fov/2*Math.PI/180),_e(2*ae*ot/we.clientHeight,r.object.matrix),ve(2*me*ot/we.clientHeight,r.object.matrix)}else r.object.isOrthographicCamera?(_e(ae*(r.object.right-r.object.left)/r.object.zoom/we.clientWidth,r.object.matrix),ve(me*(r.object.top-r.object.bottom)/r.object.zoom/we.clientHeight,r.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),r.enablePan=!1)}})();function j(E){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?m/=E:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function N(E){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?m*=E:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function te(E,ie){if(!r.zoomToCursor)return;B=!0;const ae=r.domElement.getBoundingClientRect(),me=E-ae.left,we=ie-ae.top,$e=ae.width,ot=ae.height;Z.x=me/$e*2-1,Z.y=-(we/ot)*2+1,D.set(Z.x,Z.y,1).unproject(r.object).sub(r.object.position).normalize()}function oe(E){return Math.max(r.minDistance,Math.min(r.maxDistance,E))}function I(E){y.set(E.clientX,E.clientY)}function J(E){te(E.clientX,E.clientX),_.set(E.clientX,E.clientY)}function be(E){T.set(E.clientX,E.clientY)}function q(E){x.set(E.clientX,E.clientY),M.subVectors(x,y).multiplyScalar(r.rotateSpeed);const ie=r.domElement;ge(2*Math.PI*M.x/ie.clientHeight),ee(2*Math.PI*M.y/ie.clientHeight),y.copy(x),r.update()}function W(E){F.set(E.clientX,E.clientY),P.subVectors(F,_),P.y>0?j(V(P.y)):P.y<0&&N(V(P.y)),_.copy(F),r.update()}function he(E){A.set(E.clientX,E.clientY),v.subVectors(A,T).multiplyScalar(r.panSpeed),le(v.x,v.y),T.copy(A),r.update()}function xe(E){te(E.clientX,E.clientY),E.deltaY<0?N(V(E.deltaY)):E.deltaY>0&&j(V(E.deltaY)),r.update()}function Ce(E){let ie=!1;switch(E.code){case r.keys.UP:E.ctrlKey||E.metaKey||E.shiftKey?ee(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):le(0,r.keyPanSpeed),ie=!0;break;case r.keys.BOTTOM:E.ctrlKey||E.metaKey||E.shiftKey?ee(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):le(0,-r.keyPanSpeed),ie=!0;break;case r.keys.LEFT:E.ctrlKey||E.metaKey||E.shiftKey?ge(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):le(r.keyPanSpeed,0),ie=!0;break;case r.keys.RIGHT:E.ctrlKey||E.metaKey||E.shiftKey?ge(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):le(-r.keyPanSpeed,0),ie=!0;break}ie&&(E.preventDefault(),r.update())}function Re(E){if(O.length===1)y.set(E.pageX,E.pageY);else{const ie=Ze(E),ae=.5*(E.pageX+ie.x),me=.5*(E.pageY+ie.y);y.set(ae,me)}}function ze(E){if(O.length===1)T.set(E.pageX,E.pageY);else{const ie=Ze(E),ae=.5*(E.pageX+ie.x),me=.5*(E.pageY+ie.y);T.set(ae,me)}}function pt(E){const ie=Ze(E),ae=E.pageX-ie.x,me=E.pageY-ie.y,we=Math.sqrt(ae*ae+me*me);_.set(0,we)}function k(E){r.enableZoom&&pt(E),r.enablePan&&ze(E)}function vt(E){r.enableZoom&&pt(E),r.enableRotate&&Re(E)}function Qe(E){if(O.length==1)x.set(E.pageX,E.pageY);else{const ae=Ze(E),me=.5*(E.pageX+ae.x),we=.5*(E.pageY+ae.y);x.set(me,we)}M.subVectors(x,y).multiplyScalar(r.rotateSpeed);const ie=r.domElement;ge(2*Math.PI*M.x/ie.clientHeight),ee(2*Math.PI*M.y/ie.clientHeight),y.copy(x)}function ct(E){if(O.length===1)A.set(E.pageX,E.pageY);else{const ie=Ze(E),ae=.5*(E.pageX+ie.x),me=.5*(E.pageY+ie.y);A.set(ae,me)}v.subVectors(A,T).multiplyScalar(r.panSpeed),le(v.x,v.y),T.copy(A)}function Be(E){const ie=Ze(E),ae=E.pageX-ie.x,me=E.pageY-ie.y,we=Math.sqrt(ae*ae+me*me);F.set(0,we),P.set(0,Math.pow(F.y/_.y,r.zoomSpeed)),j(P.y),_.copy(F);const $e=(E.pageX+ie.x)*.5,ot=(E.pageY+ie.y)*.5;te($e,ot)}function gt(E){r.enableZoom&&Be(E),r.enablePan&&ct(E)}function et(E){r.enableZoom&&Be(E),r.enableRotate&&Qe(E)}function Je(E){r.enabled!==!1&&(O.length===0&&(r.domElement.setPointerCapture(E.pointerId),r.domElement.addEventListener("pointermove",C),r.domElement.addEventListener("pointerup",S)),!Ue(E)&&(rt(E),E.pointerType==="touch"?Ve(E):z(E)))}function C(E){r.enabled!==!1&&(E.pointerType==="touch"?ye(E):Y(E))}function S(E){switch(We(E),O.length){case 0:r.domElement.releasePointerCapture(E.pointerId),r.domElement.removeEventListener("pointermove",C),r.domElement.removeEventListener("pointerup",S),r.dispatchEvent(Tm),c=a.NONE;break;case 1:const ie=O[0],ae=K[ie];Ve({pointerId:ie,pageX:ae.x,pageY:ae.y});break}}function z(E){let ie;switch(E.button){case 0:ie=r.mouseButtons.LEFT;break;case 1:ie=r.mouseButtons.MIDDLE;break;case 2:ie=r.mouseButtons.RIGHT;break;default:ie=-1}switch(ie){case Ms.DOLLY:if(r.enableZoom===!1)return;J(E),c=a.DOLLY;break;case Ms.ROTATE:if(E.ctrlKey||E.metaKey||E.shiftKey){if(r.enablePan===!1)return;be(E),c=a.PAN}else{if(r.enableRotate===!1)return;I(E),c=a.ROTATE}break;case Ms.PAN:if(E.ctrlKey||E.metaKey||E.shiftKey){if(r.enableRotate===!1)return;I(E),c=a.ROTATE}else{if(r.enablePan===!1)return;be(E),c=a.PAN}break;default:c=a.NONE}c!==a.NONE&&r.dispatchEvent(qu)}function Y(E){switch(c){case a.ROTATE:if(r.enableRotate===!1)return;q(E);break;case a.DOLLY:if(r.enableZoom===!1)return;W(E);break;case a.PAN:if(r.enablePan===!1)return;he(E);break}}function ue(E){r.enabled===!1||r.enableZoom===!1||c!==a.NONE||(E.preventDefault(),r.dispatchEvent(qu),xe(pe(E)),r.dispatchEvent(Tm))}function pe(E){const ie=E.deltaMode,ae={clientX:E.clientX,clientY:E.clientY,deltaY:E.deltaY};switch(ie){case 1:ae.deltaY*=16;break;case 2:ae.deltaY*=100;break}return E.ctrlKey&&!L&&(ae.deltaY*=10),ae}function Me(E){E.key==="Control"&&(L=!0,r.domElement.getRootNode().addEventListener("keyup",Se,{passive:!0,capture:!0}))}function Se(E){E.key==="Control"&&(L=!1,r.domElement.getRootNode().removeEventListener("keyup",Se,{passive:!0,capture:!0}))}function Pe(E){r.enabled===!1||r.enablePan===!1||Ce(E)}function Ve(E){switch(Ye(E),O.length){case 1:switch(r.touches.ONE){case pi.ROTATE:if(r.enableRotate===!1)return;Re(E),c=a.TOUCH_ROTATE;break;case pi.PAN:if(r.enablePan===!1)return;ze(E),c=a.TOUCH_PAN;break;default:c=a.NONE}break;case 2:switch(r.touches.TWO){case pi.DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;k(E),c=a.TOUCH_DOLLY_PAN;break;case pi.DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;vt(E),c=a.TOUCH_DOLLY_ROTATE;break;default:c=a.NONE}break;default:c=a.NONE}c!==a.NONE&&r.dispatchEvent(qu)}function ye(E){switch(Ye(E),c){case a.TOUCH_ROTATE:if(r.enableRotate===!1)return;Qe(E),r.update();break;case a.TOUCH_PAN:if(r.enablePan===!1)return;ct(E),r.update();break;case a.TOUCH_DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;gt(E),r.update();break;case a.TOUCH_DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;et(E),r.update();break;default:c=a.NONE}}function De(E){r.enabled!==!1&&E.preventDefault()}function rt(E){O.push(E.pointerId)}function We(E){delete K[E.pointerId];for(let ie=0;ie<O.length;ie++)if(O[ie]==E.pointerId){O.splice(ie,1);return}}function Ue(E){for(let ie=0;ie<O.length;ie++)if(O[ie]==E.pointerId)return!0;return!1}function Ye(E){let ie=K[E.pointerId];ie===void 0&&(ie=new ut,K[E.pointerId]=ie),ie.set(E.pageX,E.pageY)}function Ze(E){const ie=E.pointerId===O[0]?O[1]:O[0];return K[ie]}r.domElement.addEventListener("contextmenu",De),r.domElement.addEventListener("pointerdown",Je),r.domElement.addEventListener("pointercancel",S),r.domElement.addEventListener("wheel",ue,{passive:!1}),r.domElement.getRootNode().addEventListener("keydown",Me,{passive:!0,capture:!0}),this.update()}}function OE({images:s}){const e=Xt.useRef(null);return Xt.useEffect(()=>{const n=e.current;if(!n)return;const r=n.clientWidth,a=n.clientHeight,c=new ag,f=new Bn(70,r/a,.1,1e3);f.position.set(0,0,28);const d=new og({antialias:!0,alpha:!0});d.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),d.setSize(r,a),d.setClearColor(0,0),n.appendChild(d.domElement),d.domElement.style.touchAction="none",d.domElement.style.display="block";const h=new ug(f,d.domElement);h.enableDamping=!0,h.dampingFactor=.08,h.rotateSpeed=.7,h.zoomSpeed=1.1,h.minDistance=8,h.maxDistance=55,h.enablePan=!1,h.touches={ONE:pi.ROTATE,TWO:pi.DOLLY_ROTATE};const m=new Vs;c.add(m);const g=11,y=s.length,x=480,M=.048,T=[],A=[],v=[],_=[],F=[];let P=null,D=null;const Z=Wr.clamp(Math.round(Math.sqrt(y)*1.08),8,18),B=1.94,O=g*B/Math.max(1,Z-1),K=Wr.clamp(25/Math.sqrt(y),1.15,2.75),L=(C,S)=>{const z=new Image;z.onload=()=>{const Y=document.createElement("canvas"),ue=512;Y.width=ue,Y.height=ue;const pe=Y.getContext("2d");if(!pe)return;pe.clearRect(0,0,ue,ue);const Me=Math.min(ue/z.width,ue/z.height),Se=z.width*Me,Pe=z.height*Me;pe.drawImage(z,(ue-Se)/2,(ue-Pe)/2,Se,Pe);const Ve=new lg(Y);Ve.colorSpace=$n,Ve.minFilter=Sn,Ve.magFilter=Sn,S(Ve)},z.src=C},R=C=>new Ol({side:C,toneMapped:!1,color:16316411,transparent:!0,alphaTest:.01}),V=C=>{const S=C.clone(),z=S.getAttribute("uv").clone();for(let Y=0;Y<z.count;Y++)z.setX(Y,1-z.getX(Y));return S.setAttribute("uv",z),S},ge=(C,S,z,Y,ue=8)=>{const pe=[],Me=[],Se=[];for(let Ve=0;Ve<=ue;Ve++){const ye=Ve/ue,De=Wr.clamp(C+(.5-ye)*Y,-Math.PI/2+.04,Math.PI/2-.04);for(let rt=0;rt<=ue;rt++){const We=rt/ue,Ue=S+(We-.5)*z,Ye=Math.cos(De);pe.push(Math.cos(Ue)*Ye*g,Math.sin(De)*g,Math.sin(Ue)*Ye*g),Me.push(We,1-ye)}}for(let Ve=0;Ve<ue;Ve++)for(let ye=0;ye<ue;ye++){const De=Ve*(ue+1)+ye,rt=De+1,We=De+ue+1,Ue=We+1;Se.push(De,We,rt,rt,We,Ue)}const Pe=new Sr;return Pe.setAttribute("position",new ki(pe,3)),Pe.setAttribute("uv",new ki(Me,2)),Pe.setIndex(Se),Pe.computeVertexNormals(),Pe},ee=Array.from({length:Z},(C,S)=>{const z=Z===1?.5:S/(Z-1),Y=B/2-z*B,ue=Math.sqrt(Math.max(.03,1-Y*Y));return{lat:Y,radiusRatio:ue,count:Math.max(3,Math.round(ue*y*1.18/Z))}});let _e=ee.reduce((C,S)=>C+S.count,0);for(;_e<y;){const C=ee.reduce((S,z,Y)=>z.radiusRatio>ee[S].radiusRatio?Y:S,0);ee[C].count+=1,_e+=1}for(;_e>y;){const C=ee.reduce((S,z,Y)=>z.count>ee[S].count?Y:S,0);if(ee[C].count<=3)break;ee[C].count-=1,_e-=1}let ve=0;ee.forEach((C,S)=>{for(let z=0;z<C.count&&ve<y;z++){const Y=(z+S%2*.5)/C.count*Math.PI*2,ue=C.radiusRatio*g,Me=Math.PI*2*ue/C.count,Se=Math.min(K,Me*.9,O*.9),Pe=Math.asin(C.lat),Ve=Math.min(Math.PI*2/C.count*.9,Se/Math.max(ue,.8)),ye=Se/g,De=ge(Pe,Y,Ve,ye),rt=ve,We=R(zi),Ue=R(Mn);_.push(We,Ue);const Ye=new Zn(De,We);Ye.userData.imageIndex=rt;const Ze=new Zn(V(De),Ue);Ze.userData.imageIndex=rt,T.push(Ye),A.push(Ze),m.add(Ye),m.add(Ze),F.push(Ye.scale.clone()),Ye.userData.frontMesh=Ye,Ye.userData.backMesh=Ze,Ze.userData.frontMesh=Ye,L(s[ve],yt=>{v.push(yt),We.map=yt,We.color.set(16777215),We.needsUpdate=!0,Ue.map=yt,Ue.color.set(16777215),Ue.needsUpdate=!0,Ye.userData.texture=yt,Ze.userData.texture=yt}),ve++}});let le=null,j=null;const N=document.createElement("div");N.style.position="absolute",N.style.inset="0",N.style.pointerEvents="none",N.style.zIndex="20",n.appendChild(N);const te=(C,S)=>{C.visible=S;const z=C.userData.backMesh;z&&(z.visible=S)},oe=C=>{const S=d.domElement.getBoundingClientRect(),z=C.clone().project(f);return{x:(z.x+1)/2*S.width,y:(1-z.y)/2*S.height}},I=C=>{const S=C.geometry.getAttribute("position"),z=Math.round(Math.sqrt(S.count))-1,Y=[],ue=[];for(let Me=0;Me<=z;Me++)Y.push(Me),ue.push({x:Me/z,y:0});for(let Me=1;Me<=z;Me++)Y.push(Me*(z+1)+z),ue.push({x:1,y:Me/z});for(let Me=z-1;Me>=0;Me--)Y.push(z*(z+1)+Me),ue.push({x:Me/z,y:1});for(let Me=z-1;Me>=1;Me--)Y.push(Me*(z+1)),ue.push({x:0,y:Me/z});const pe=Y.map(Me=>{const Se=new ne(S.getX(Me),S.getY(Me),S.getZ(Me));return C.localToWorld(Se),oe(Se)});return J(pe)>=0?{points:pe,unitPoints:ue}:{points:pe.toReversed(),unitPoints:ue.toReversed()}},J=C=>C.reduce((S,z,Y)=>{const ue=C[(Y+1)%C.length];return S+z.x*ue.y-z.y*ue.x},0),be=(C=1)=>{const S=d.domElement.clientWidth,z=d.domElement.clientHeight,Y=Math.min(S*.64,620),ue=Math.min(z*.64,620),pe=Math.min(Y,ue*C),Me=pe/C;return{left:(S-pe)/2,top:(z-Me)/2,width:pe,height:Me}},q=C=>{const S=d.domElement.getBoundingClientRect(),z=C.getBoundingClientRect();return{left:z.left-S.left,top:z.top-S.top,width:z.width,height:z.height}},W=C=>{const{points:S,unitPoints:z}=I(C),Y=Math.min(...S.map(ye=>ye.x)),ue=Math.max(...S.map(ye=>ye.x)),pe=Math.min(...S.map(ye=>ye.y)),Me=Math.max(...S.map(ye=>ye.y)),Se={left:Y,top:pe,width:Math.max(1,ue-Y),height:Math.max(1,Me-pe)},Pe=`polygon(${S.map(ye=>{const De=Wr.clamp((ye.x-Se.left)/Se.width*100,0,100),rt=Wr.clamp((ye.y-Se.top)/Se.height*100,0,100);return`${De}% ${rt}%`}).join(", ")})`,Ve=`polygon(${z.map(ye=>`${ye.x*100}% ${ye.y*100}%`).join(", ")})`;return{rect:Se,clipPath:Pe,fullClipPath:Ve}},he=(C,S)=>{const z=C.left+C.width/2,Y=C.top+C.height/2,ue=S.left+S.width/2,pe=S.top+S.height/2,Me=z-ue,Se=Y-pe,Pe=C.width/S.width,Ve=C.height/S.height;return`translate(${Me}px, ${Se}px) scale(${Pe}, ${Ve})`},xe=(C,S,z,Y,ue="inset(0)",pe="inset(0)")=>{j==null||j.cancel();const Me=he(S,z);C.style.left=`${z.left}px`,C.style.top=`${z.top}px`,C.style.width=`${z.width}px`,C.style.height=`${z.height}px`,C.style.opacity="1",C.style.transform=Me,C.style.clipPath=ue;const Se={transform:Me,clipPath:ue,opacity:1,borderRadius:Y==="open"?"18px":"28px"},Pe={transform:"translate(0px, 0px) scale(1, 1)",clipPath:pe,opacity:1,borderRadius:Y==="open"?"28px":"18px"};return j=C.animate([Se,Pe],{duration:x,easing:"cubic-bezier(0.19, 1, 0.22, 1)",fill:"forwards",composite:"replace"}),j},Ce=(C,S,z)=>xe(C,S,z.rect,"close","inset(0)",z.clipPath),Re=()=>{if(!le)return;const{element:C,mesh:S}=le,z=q(C);te(S,!0),h.update(),d.render(c,f);const Y=m.rotation.y;m.rotation.y=Y+M*(x/1e3),m.updateMatrixWorld(!0);const ue=W(S);m.rotation.y=Y,m.updateMatrixWorld(!0);const pe=Ce(C,z,ue);pe.onfinish=()=>{C.remove(),le=null,P=null,D=null,j=null},pe.oncancel=()=>{C.remove(),te(S,!0)}},ze=(C,S,z)=>{if(!z||(le==null?void 0:le.mesh)===C)return;le&&(le.element.remove(),te(le.mesh,!0)),P=C,D=z,te(C,!1);const Y=document.createElement("img");Y.src=s[S],Y.draggable=!1,Y.style.position="absolute",Y.style.objectFit="contain",Y.style.background="transparent",Y.style.boxShadow="0 28px 80px rgba(0, 0, 0, 0.35)",Y.style.willChange="transform, clip-path, opacity",Y.style.pointerEvents="auto",Y.style.cursor="zoom-out",Y.style.transformOrigin="center center",Y.addEventListener("click",pe=>{pe.stopPropagation(),Re()});const ue=()=>{const pe=W(C),Me=Y.naturalWidth>0&&Y.naturalHeight>0?Y.naturalWidth/Y.naturalHeight:1,Se=be(Me);Y.style.left=`${Se.left}px`,Y.style.top=`${Se.top}px`,Y.style.width=`${Se.width}px`,Y.style.height=`${Se.height}px`,Y.style.transform=he(pe.rect,Se),Y.style.clipPath=pe.clipPath,N.appendChild(Y),le={element:Y,mesh:C,index:S,projection:pe};const Pe=xe(Y,pe.rect,Se,"open",pe.clipPath,"inset(0)");Pe.onfinish=()=>{j=null}};Y.complete&&Y.naturalWidth>0?ue():Y.addEventListener("load",ue,{once:!0})},pt=new cg,k=new ut,vt=C=>{const S=d.domElement.getBoundingClientRect();k.x=(C.clientX-S.left)/S.width*2-1,k.y=-((C.clientY-S.top)/S.height)*2+1,pt.setFromCamera(k,f);const z=pt.intersectObjects([...T,...A]);if(z.length>0){const ue=z[0].object,pe=ue.userData.frontMesh??ue,Me=pe.userData.texture;P===pe&&D===Me?Re():(P&&te(P,!0),ze(pe,pe.userData.imageIndex,Me))}else Re()};d.domElement.addEventListener("click",vt);let Qe=0,ct=!1,Be=performance.now();const gt=(C=performance.now())=>{if(ct)return;Qe=requestAnimationFrame(gt);const S=Math.min((C-Be)/1e3,.05);Be=C,m.rotation.y+=M*S,h.update(),d.render(c,f)};gt();const et=()=>{const C=n.clientWidth,S=n.clientHeight;f.aspect=C/S,f.updateProjectionMatrix(),d.setSize(C,S)},Je=new ResizeObserver(et);return Je.observe(n),()=>{ct=!0,cancelAnimationFrame(Qe),Je.disconnect(),d.domElement.removeEventListener("click",vt),h.dispose(),j==null||j.cancel(),N.remove(),T.forEach(C=>{m.remove(C),C.geometry.dispose()}),A.forEach(C=>{m.remove(C),C.geometry.dispose()}),_.forEach(C=>C.dispose()),v.forEach(C=>C.dispose()),d.dispose(),d.domElement.parentNode===n&&n.removeChild(d.domElement)}},[s]),se.jsx("div",{ref:e,className:"absolute inset-0",style:{touchAction:"none"}})}function kE({images:s,variant:e}){const n=Xt.useRef(null);return Xt.useEffect(()=>{const r=n.current;if(!r)return;const a=r.clientWidth,c=r.clientHeight,f=new ag,d=new Bn(66,a/c,.1,1e3);d.position.set(0,0,e==="spiral"?25:28);const h=new og({antialias:!0,alpha:!0});h.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),h.setSize(a,c),h.setClearColor(0,0),h.domElement.style.display="block",h.domElement.style.touchAction="none",r.appendChild(h.domElement);const m=new ug(d,h.domElement);m.enableDamping=!0,m.dampingFactor=.08,m.rotateSpeed=.7,m.zoomSpeed=1.1,m.minDistance=8,m.maxDistance=55,m.enablePan=!1,m.touches={ONE:pi.ROTATE,TWO:pi.DOLLY_ROTATE};const g=new Vs;f.add(g);const y=[],x=[],M=[];let T=null,A=null;const v=document.createElement("div");v.style.position="absolute",v.style.inset="0",v.style.pointerEvents="none",v.style.zIndex="20",r.appendChild(v);const _=(j,N)=>{const te=new Image;te.onload=()=>{const oe=document.createElement("canvas"),I=512;oe.width=I,oe.height=I;const J=oe.getContext("2d");if(!J)return;J.clearRect(0,0,I,I);const be=Math.min(I/te.width,I/te.height),q=te.width*be,W=te.height*be;J.drawImage(te,(I-q)/2,(I-W)/2,q,W);const he=new lg(oe);he.colorSpace=$n,he.minFilter=Sn,he.magFilter=Sn,N(he)},te.src=j},F=(j,N)=>{const te=Math.max(8,Math.ceil(Math.sqrt(N)*1.8)),oe=Math.ceil(N/te),I=j%te,J=Math.floor(j/te),be=I/te*Math.PI*2,q=9.8,W=2.15,he=(oe-1)*W*.5-J*W,xe=new ne(Math.sin(be)*q,he,Math.cos(be)*q),Ce=new Qn(0,be,0);return{position:xe,rotation:Ce,width:1.72,height:1.36}},P=(j,N)=>{const te=Math.PI*(3-Math.sqrt(5)),I=1-2*(N===1?0:j/(N-1)),J=Math.sqrt(Math.max(.02,1-I*I)),be=j*te,W=new ne(Math.cos(be)*J,I,Math.sin(be)*J).normalize().clone().multiplyScalar(10.8),he=new jt().lookAt(W,new ne(0,0,0),new ne(0,1,0)),xe=new Qn().setFromRotationMatrix(he);return{position:W,rotation:xe,width:1.62,height:1.62}},D=(j,N)=>{const te=N===1?.5:j/(N-1),I=te*Math.PI*2*3.6,J=4.8+te*4.6,be=(.5-te)*13.5,q=new ne(Math.sin(I)*J,be,Math.cos(I)*J),W=new Qn(0,I,Wr.degToRad(-10+te*20));return{position:q,rotation:W,width:1.55,height:1.25}},Z=(j,N)=>e==="cylinder"?F(j,N):e==="polyhedron"?P(j,N):D(j,N);s.forEach((j,N)=>{const te=Z(N,s.length),oe=new Yo(te.width,te.height,1,1),I=new Ol({side:gi,transparent:!0,alphaTest:.01,toneMapped:!1,color:16316411}),J=new Zn(oe,I);J.position.copy(te.position),J.rotation.copy(te.rotation),J.userData.imageIndex=N,g.add(J),M.push(J),x.push(I),_(j,be=>{y.push(be),I.map=be,I.color.set(16777215),I.needsUpdate=!0})});const B=j=>{T==null||T.cancel(),A==null||A.remove();const N=document.createElement("img");N.src=s[j],N.draggable=!1,N.style.position="absolute",N.style.objectFit="contain",N.style.background="transparent",N.style.boxShadow="0 28px 80px rgba(0, 0, 0, 0.35)",N.style.pointerEvents="auto",N.style.cursor="zoom-out",N.style.transformOrigin="center center",N.addEventListener("click",oe=>{oe.stopPropagation(),T==null||T.cancel(),N.remove(),A=null});const te=()=>{const oe=h.domElement.clientWidth,I=h.domElement.clientHeight,J=N.naturalWidth>0&&N.naturalHeight>0?N.naturalWidth/N.naturalHeight:1,be=Math.min(oe*.64,620),q=Math.min(I*.64,620),W=Math.min(be,q*J),he=W/J,xe=(oe-W)/2,Ce=(I-he)/2;N.style.left=`${xe}px`,N.style.top=`${Ce}px`,N.style.width=`${W}px`,N.style.height=`${he}px`,N.style.opacity="0",N.style.transform="scale(0.88)",v.appendChild(N),A=N,T=N.animate([{opacity:0,transform:"scale(0.88)"},{opacity:1,transform:"scale(1)"}],{duration:240,easing:"cubic-bezier(0.19, 1, 0.22, 1)",fill:"forwards"})};N.complete&&N.naturalWidth>0?te():N.addEventListener("load",te,{once:!0})},O=new cg,K=new ut,L=j=>{const N=h.domElement.getBoundingClientRect();K.x=(j.clientX-N.left)/N.width*2-1,K.y=-((j.clientY-N.top)/N.height)*2+1,O.setFromCamera(K,d);const te=O.intersectObjects(M);if(te.length===0){A==null||A.remove(),A=null;return}const oe=te[0].object;B(oe.userData.imageIndex)};h.domElement.addEventListener("click",L);let R=0,V=!1,ge=performance.now();const ee=e==="spiral"?.035:.045,_e=(j=performance.now())=>{if(V)return;R=requestAnimationFrame(_e);const N=Math.min((j-ge)/1e3,.05);ge=j,g.rotation.y+=ee*N,e==="polyhedron"&&(g.rotation.x=Math.sin(j*18e-5)*.12),m.update(),h.render(f,d)};_e();const ve=()=>{const j=r.clientWidth,N=r.clientHeight;d.aspect=j/N,d.updateProjectionMatrix(),h.setSize(j,N)},le=new ResizeObserver(ve);return le.observe(r),()=>{V=!0,cancelAnimationFrame(R),le.disconnect(),h.domElement.removeEventListener("click",L),m.dispose(),T==null||T.cancel(),A==null||A.remove(),v.remove(),M.forEach(j=>{g.remove(j),j.geometry.dispose()}),x.forEach(j=>j.dispose()),y.forEach(j=>j.dispose()),h.dispose(),h.domElement.parentNode===r&&r.removeChild(h.domElement)}},[s,e]),se.jsx("div",{ref:n,className:"absolute inset-0",style:{touchAction:"none"}})}function zE(){return se.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-black",children:se.jsxs("div",{className:"text-center",children:[se.jsxs("div",{className:"relative w-32 h-32 mx-auto mb-6",children:[se.jsx("div",{className:"absolute inset-0 rounded-full border-4 border-purple-500/30"}),se.jsx("div",{className:"absolute inset-0 rounded-full border-4 border-transparent border-t-purple-500 animate-spin"}),se.jsx("div",{className:"absolute inset-4 rounded-full border-4 border-transparent border-t-pink-500 animate-spin",style:{animationDuration:"1.5s"}}),se.jsx("div",{className:"absolute inset-8 rounded-full border-4 border-transparent border-t-blue-500 animate-spin",style:{animationDuration:"2s"}})]}),se.jsx("p",{className:"text-white text-xl animate-pulse",children:"正在生成 3D 照片球..."})]})})}class BE extends Xt.Component{constructor(){super(...arguments),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,n){console.error("3D gallery crashed:",e,n)}render(){var e;return this.state.error?se.jsx("div",{className:"absolute inset-0 flex items-center justify-center p-6 text-white",children:se.jsxs("div",{className:"max-w-lg bg-red-900/60 rounded-2xl p-6 backdrop-blur-md border border-red-400/40",children:[se.jsx("p",{className:"text-lg font-bold mb-2",children:"3D 影像空间渲染出错"}),se.jsx("pre",{className:"text-xs whitespace-pre-wrap break-all opacity-80",children:String(((e=this.state.error)==null?void 0:e.message)||this.state.error)})]})}):this.props.children}}const HE=/\.(avif|bmp|gif|heic|heif|jpe?g|png|webp)$/i,Ho=[{id:"sphere",name:"照片球体",subtitle:"照片围成立体球面，适合大量回忆的沉浸式浏览",minPhotos:24,maxPhotos:120,accent:"from-violet-500 via-fuchsia-500 to-blue-500",preview:"orb"},{id:"cylinder",name:"圆柱画廊",subtitle:"像环形展厅一样环绕观看，横向浏览节奏更稳定",minPhotos:12,maxPhotos:80,accent:"from-cyan-500 via-blue-500 to-violet-500",preview:"cylinder",variant:"cylinder"},{id:"polyhedron",name:"多面体相册",subtitle:"照片分布在晶体切面上，适合更利落的高级展示",minPhotos:12,maxPhotos:60,accent:"from-amber-400 via-rose-500 to-violet-600",preview:"polyhedron",variant:"polyhedron"},{id:"spiral",name:"螺旋星轨",subtitle:"照片沿上升轨道展开，适合时间线和成长记录",minPhotos:20,maxPhotos:100,accent:"from-emerald-400 via-cyan-500 to-indigo-600",preview:"spiral",variant:"spiral"}],Cm=s=>Ho.find(e=>e.id===s)??Ho[0];function VE({type:s,accent:e,compact:n=!1}){const r=n?.58:1,a=`absolute block rounded-[6px] border border-white/75 bg-gradient-to-br ${e} shadow-[0_8px_24px_rgba(0,0,0,0.35)]`,c=[{x:0,y:-57,scale:.7,rotate:-8},{x:39,y:-42,scale:.82,rotate:18},{x:61,y:-9,scale:.95,rotate:7},{x:48,y:31,scale:.86,rotate:-17},{x:13,y:55,scale:.72,rotate:11},{x:-31,y:47,scale:.86,rotate:-10},{x:-59,y:12,scale:.95,rotate:15},{x:-50,y:-28,scale:.82,rotate:-18},{x:-13,y:-8,scale:1.05,rotate:3}],f=Array.from({length:12},(h,m)=>{const g=m/12*Math.PI*2;return{x:Math.cos(g)*78,y:Math.sin(g)*21,scale:.62+Math.sin(g)*.18,rotate:Math.sin(g)*-10,opacity:.55+Math.sin(g)*.35}}),d=Array.from({length:13},(h,m)=>{const g=m/12,y=g*Math.PI*2.15-.5;return{x:Math.cos(y)*(28+g*54),y:-57+g*114,scale:.62+g*.42,rotate:-28+g*56}});return se.jsxs("div",{className:`${n?"h-24 w-36 rounded-[20px]":"h-44 rounded-[24px]"} relative overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-black border border-white/10 shadow-inner`,children:[se.jsx("div",{className:`absolute inset-0 opacity-25 bg-gradient-to-br ${e}`}),se.jsxs("div",{className:"absolute inset-0 flex items-center justify-center",children:[s==="orb"&&se.jsxs("div",{className:"relative h-36 w-36 rounded-full border border-white/25 bg-white/[0.03] shadow-[inset_0_0_38px_rgba(255,255,255,0.08)]",style:{transform:`scale(${r})`},children:[se.jsx("div",{className:"absolute left-4 right-4 top-1/2 h-px bg-white/18"}),se.jsx("div",{className:"absolute bottom-7 left-5 right-5 h-10 rounded-[50%] border border-white/14"}),se.jsx("div",{className:"absolute left-5 right-5 top-7 h-10 rounded-[50%] border border-white/14"}),se.jsx("div",{className:"absolute inset-y-2 left-1/2 w-14 -translate-x-1/2 rounded-[50%] border border-white/16"}),se.jsx("div",{className:"absolute inset-y-2 left-1/2 w-24 -translate-x-1/2 rounded-[50%] border border-white/10"}),c.map((h,m)=>se.jsx("span",{className:`${a} left-1/2 top-1/2 h-8 w-10`,style:{transform:`translate(${h.x}px, ${h.y}px) translate(-50%, -50%) rotate(${h.rotate}deg) scale(${h.scale})`}},m))]}),s==="cylinder"&&se.jsxs("div",{className:"relative h-36 w-48",style:{transform:`scale(${r})`},children:[se.jsx("div",{className:"absolute left-4 right-4 top-5 h-10 rounded-[50%] border border-cyan-100/35 bg-cyan-100/5"}),se.jsx("div",{className:"absolute bottom-5 left-4 right-4 h-10 rounded-[50%] border border-cyan-100/35 bg-cyan-100/5"}),se.jsx("div",{className:"absolute bottom-10 left-4 right-4 top-10 border-x border-cyan-100/18"}),se.jsx("div",{className:"absolute left-1/2 top-1/2 h-[104px] w-[158px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-white/8"}),f.map((h,m)=>se.jsx("span",{className:`${a} left-1/2 top-1/2 h-10 w-8`,style:{transform:`translate(${h.x}px, ${h.y}px) translate(-50%, -50%) rotateY(${m*18}deg) rotate(${h.rotate}deg) scale(${h.scale})`,opacity:h.opacity}},m))]}),s==="polyhedron"&&se.jsxs("div",{className:"relative h-36 w-40",style:{transform:`scale(${r})`},children:[se.jsx("div",{className:`absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-gradient-to-br ${e} opacity-20 blur-sm`}),se.jsx("span",{className:`${a} left-[78px] top-[18px] h-12 w-14 -skew-x-12 rotate-[-9deg]`}),se.jsx("span",{className:`${a} left-[42px] top-[47px] h-14 w-12 skew-y-12 rotate-[-27deg] opacity-85`}),se.jsx("span",{className:`${a} left-[91px] top-[52px] h-14 w-14 skew-x-6 rotate-[18deg]`}),se.jsx("span",{className:`${a} left-[67px] top-[90px] h-13 w-16 skew-x-12 rotate-[6deg] opacity-90`}),se.jsxs("svg",{className:"absolute inset-0 size-full",viewBox:"0 0 160 144","aria-hidden":"true",children:[se.jsx("path",{d:"M79 16 L122 49 L113 96 L72 126 L34 88 L41 42 Z",fill:"none",stroke:"rgba(255,255,255,.32)",strokeWidth:"1.4"}),se.jsx("path",{d:"M79 16 L91 52 L122 49 M91 52 L113 96 M91 52 L41 42 M91 52 L72 126",fill:"none",stroke:"rgba(255,255,255,.18)",strokeWidth:"1"})]})]}),s==="spiral"&&se.jsxs("div",{className:"relative h-40 w-48",style:{transform:`scale(${r})`},children:[se.jsxs("svg",{className:"absolute inset-0 size-full",viewBox:"0 0 192 160","aria-hidden":"true",children:[se.jsx("path",{d:"M53 28 C145 1 164 58 93 76 C19 95 40 147 153 124",fill:"none",stroke:"rgba(255,255,255,.32)",strokeWidth:"2",strokeLinecap:"round"}),se.jsx("path",{d:"M53 28 C145 1 164 58 93 76 C19 95 40 147 153 124",fill:"none",stroke:"rgba(56,189,248,.3)",strokeWidth:"8",strokeLinecap:"round"})]}),d.map((h,m)=>se.jsx("span",{className:`${a} left-1/2 top-1/2 h-8 w-10`,style:{transform:`translate(${h.x}px, ${h.y}px) translate(-50%, -50%) rotate(${h.rotate}deg) scale(${h.scale})`,zIndex:m}},m))]})]})]})}function GE(){const[s,e]=Xt.useState(null),[n,r]=Xt.useState(null),[a,c]=Xt.useState([]),[f,d]=Xt.useState(!1),[h,m]=Xt.useState(!1),[g,y]=Xt.useState(!1),[x,M]=Xt.useState({done:0,total:0}),[T,A]=Xt.useState(!1),[v,_]=Xt.useState(!1),F=Xt.useRef({}),P=Xt.useRef(null),D=s?Cm(s):null,Z=(D==null?void 0:D.maxPhotos)??Ho[0].maxPhotos;(D==null?void 0:D.minPhotos)??Ho[0].minPhotos;const B=(W,he=512,xe=.8)=>new Promise(Ce=>{const Re=URL.createObjectURL(W),ze=new Image;let pt=!1;const k=(Qe,ct)=>{pt||(pt=!0,window.clearTimeout(vt),URL.revokeObjectURL(Re),Ce(Qe))},vt=window.setTimeout(()=>{k(null)},8e3);ze.onload=()=>{try{const Qe=Math.min(1,he/Math.max(ze.width,ze.height)),ct=Math.max(1,Math.round(ze.width*Qe)),Be=Math.max(1,Math.round(ze.height*Qe)),gt=document.createElement("canvas");gt.width=ct,gt.height=Be;const et=gt.getContext("2d");if(!et){k(null,!0);return}et.drawImage(ze,0,0,ct,Be),gt.toBlob(Je=>{if(!Je){k(null,!0);return}k(URL.createObjectURL(Je),!0)},"image/jpeg",xe)}catch{k(null)}},ze.onerror=()=>{k(null)},ze.src=Re}),O=async W=>{if(g)return;const he=W.filter(Qe=>Qe.type.startsWith("image/")||HE.test(Qe.name)),xe=W.length-he.length;if(he.length===0){alert("请选择有效的图片文件");return}const Ce=Z-a.length;if(Ce<=0){alert(`已达上限 ${Z} 张，请先清空或减少照片再上传`);return}let Re=he;he.length>Ce&&(Re=he.slice(0,Ce),alert(`${(D==null?void 0:D.name)??"当前样式"}最多 ${Z} 张，已自动只取前 ${Ce} 张（剩余 ${he.length-Ce} 张被忽略）`)),y(!0),M({done:0,total:Re.length});let ze=0;const pt=await Promise.all(Re.map(async Qe=>{const ct=await B(Qe);return ze+=1,M({done:ze,total:Re.length}),ct})),k=pt.filter(Qe=>!!Qe),vt=xe+pt.length-k.length;k.length>0&&c(Qe=>{const ct=Math.max(0,Z-Qe.length),Be=k.slice(0,ct);return k.slice(ct).forEach(gt=>URL.revokeObjectURL(gt)),[...Qe,...Be]}),y(!1),vt>0&&alert(`已跳过 ${vt} 个不支持或无法读取的文件，其余图片已继续上传`)},K=W=>{W.preventDefault(),A(!0)},L=W=>{W.preventDefault(),A(!1)},R=W=>{W.preventDefault(),A(!1),O(Array.from(W.dataTransfer.files))},V=W=>{const he=W.target.files?Array.from(W.target.files):[];W.target.value="",O(he)},ge=()=>{if(D){if(a.length<D.minPhotos){alert(`${D.name} 至少需要 ${D.minPhotos} 张照片`);return}m(!0),setTimeout(()=>{m(!1),d(!0)},1500)}},ee=()=>{a.forEach(W=>URL.revokeObjectURL(W)),c([]),d(!1),m(!1)},_e=()=>{d(!1),m(!1)},ve=(W,he)=>{const xe=Cm(W),Ce=he==null?void 0:he.getBoundingClientRect();Ce?(r({style:xe,from:Ce,expanded:!1,fading:!1,direction:"enter"}),e(W),_(!1),window.setTimeout(()=>{r(Re=>Re&&{...Re,expanded:!0}),_(!0)},20),window.setTimeout(()=>{r(Re=>Re&&{...Re,fading:!0})},360),window.setTimeout(()=>{r(null)},720)):(e(W),_(!0)),c([]),d(!1),m(!1)},le=()=>{if(D){const W=D,he=new DOMRect(0,0,window.innerWidth,window.innerHeight);r({style:W,from:he,expanded:!0,fading:!1,direction:"exit"}),_(!1),e(null),requestAnimationFrame(()=>{requestAnimationFrame(()=>{const xe=F.current[W.id],Ce=(xe==null?void 0:xe.getBoundingClientRect())??he;r(Re=>Re&&{...Re,from:Ce,expanded:!1})})}),window.setTimeout(()=>{a.forEach(xe=>URL.revokeObjectURL(xe)),c([])},220),window.setTimeout(()=>{r(null)},560)}else a.forEach(W=>URL.revokeObjectURL(W)),c([]),e(null);d(!1),m(!1)},j=W=>{c(he=>{const xe=he[W];return xe&&URL.revokeObjectURL(xe),he.filter((Ce,Re)=>Re!==W)})},N=()=>{if(!n)return null;const W=window.innerWidth,he=window.innerHeight,Re=n.expanded?{left:0,top:0,width:W,height:he,borderRadius:0,opacity:n.fading?0:1}:{left:n.from.left,top:n.from.top,width:n.from.width,height:n.from.height,borderRadius:28,opacity:1};return se.jsx("div",{className:"pointer-events-none fixed inset-0 z-50",children:se.jsxs("div",{className:"absolute overflow-hidden border border-white/20 bg-gradient-to-br from-slate-950 via-purple-950 to-black shadow-[0_32px_120px_rgba(0,0,0,0.45)] backdrop-blur-2xl transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]",style:Re,children:[se.jsx("div",{className:`absolute inset-0 bg-gradient-to-br ${n.style.accent} opacity-25`}),se.jsx("div",{className:"absolute left-[-8rem] top-[-8rem] h-96 w-96 rounded-full bg-purple-500/40 blur-3xl"}),se.jsx("div",{className:"absolute bottom-[-10rem] right-[-8rem] h-[28rem] w-[28rem] rounded-full bg-blue-500/35 blur-3xl"}),se.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:se.jsxs("div",{className:"text-center",children:[se.jsx("p",{className:"text-3xl font-bold text-white",children:n.style.name}),se.jsxs("p",{className:"mt-2 text-sm text-white/70",children:[n.style.minPhotos,"-",n.style.maxPhotos," 张照片"]})]})})]})})};if(!D)return se.jsxs("div",{className:"min-h-dvh bg-gradient-to-br from-slate-950 via-purple-950 to-black text-white relative overflow-y-auto",children:[se.jsxs("div",{className:"absolute inset-0 opacity-30 pointer-events-none",children:[se.jsx("div",{className:"absolute left-[-8rem] top-[-8rem] h-96 w-96 rounded-full bg-purple-500 blur-3xl"}),se.jsx("div",{className:"absolute bottom-[-10rem] right-[-8rem] h-[28rem] w-[28rem] rounded-full bg-blue-500 blur-3xl"})]}),se.jsxs("main",{className:"relative z-10 mx-auto flex min-h-dvh w-full flex-col px-5 py-8 sm:px-8 xl:px-[clamp(32px,4.4vw,96px)]",children:[se.jsxs("header",{className:"mb-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between",children:[se.jsxs("div",{children:[se.jsxs("div",{className:"mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/75 backdrop-blur-md",children:[se.jsx(l0,{className:"size-4"}),"高级展厅式 3D 相册"]}),se.jsx("h1",{className:"text-5xl font-bold tracking-normal sm:text-6xl",children:"3D 影像空间"}),se.jsx("p",{className:"mt-4 max-w-2xl text-lg leading-8 text-white/68",children:"先选择展示样式，再按样式要求上传照片，生成可旋转、可放大的立体影像展厅。"})]}),se.jsxs("div",{className:"rounded-[28px] border border-white/10 bg-white/10 px-5 py-4 text-sm text-white/70 backdrop-blur-xl shadow-2xl",children:[se.jsxs("div",{className:"flex items-center gap-2 text-white",children:[se.jsx(o0,{className:"size-4"}),"首批 4 种空间样式"]}),se.jsx("p",{className:"mt-1",children:"照片球体 / 圆柱画廊 / 多面体相册 / 螺旋星轨"})]})]}),se.jsx("section",{className:"grid flex-1 grid-cols-1 justify-between gap-6 pb-8 md:grid-cols-2 xl:grid-cols-[repeat(4,minmax(0,410px))]",children:Ho.map(W=>se.jsxs("button",{type:"button",ref:he=>{F.current[W.id]=he},onClick:he=>ve(W.id,he.currentTarget),className:"group flex h-full flex-col rounded-[28px] border border-white/12 bg-white/[0.08] p-4 text-left shadow-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.12]",children:[se.jsx(VE,{type:W.preview,accent:W.accent}),se.jsxs("div",{className:"flex flex-1 flex-col px-1 pt-5",children:[se.jsxs("div",{className:"mb-3 flex items-center justify-between gap-3",children:[se.jsx("h2",{className:"text-2xl font-semibold text-white",children:W.name}),se.jsx("span",{className:`h-2.5 w-12 rounded-full bg-gradient-to-r ${W.accent}`})]}),se.jsx("p",{className:"min-h-[4.5rem] text-sm leading-6 text-white/62",children:W.subtitle}),se.jsxs("div",{className:"mt-auto flex items-center justify-between border-t border-white/10 pt-4",children:[se.jsxs("span",{className:"text-sm text-white/55",children:["需要 ",W.minPhotos,"-",W.maxPhotos," 张"]}),se.jsx("span",{className:"rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition-transform group-hover:scale-105",children:"选择"})]})]})]},W.id))})]}),N()]});if(h)return se.jsx(zE,{});if(f)return se.jsxs("div",{className:"size-full bg-gradient-to-br from-gray-900 via-purple-900 to-black relative overflow-hidden",children:[se.jsxs("div",{className:"absolute inset-0 opacity-20",children:[se.jsx("div",{className:"absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"}),se.jsx("div",{className:"absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse",style:{animationDelay:"1s"}})]}),se.jsx(BE,{children:D.id==="sphere"?se.jsx(OE,{images:a}):se.jsx(kE,{images:a,variant:D.variant??"cylinder"})}),se.jsxs("div",{className:"absolute top-3 left-3 sm:top-6 sm:left-6 flex gap-3 z-10",children:[se.jsxs("button",{onClick:_e,className:"px-3 py-2 sm:px-6 sm:py-3 bg-white/90 hover:bg-white text-black rounded-full flex items-center gap-1.5 sm:gap-2 transition-all shadow-2xl active:scale-95 sm:hover:scale-105 text-sm sm:text-base",children:[se.jsx(Mp,{className:"w-4 h-4 sm:w-5 sm:h-5"}),"退出预览"]}),se.jsx("button",{onClick:le,className:"px-3 py-2 sm:px-6 sm:py-3 bg-white/80 hover:bg-white text-black rounded-full flex items-center gap-1.5 sm:gap-2 transition-all shadow-2xl active:scale-95 sm:hover:scale-105 text-sm sm:text-base",children:"重新选样式"})]}),se.jsx("div",{className:"absolute top-3 right-3 sm:top-6 sm:right-6 flex gap-3 z-10",children:se.jsxs("button",{onClick:ee,className:"px-3 py-2 sm:px-6 sm:py-3 bg-white/90 hover:bg-white text-black rounded-full flex items-center gap-1.5 sm:gap-2 transition-all shadow-2xl active:scale-95 sm:hover:scale-105 text-sm sm:text-base",children:[se.jsx(u0,{className:"w-4 h-4 sm:w-5 sm:h-5"}),"重新开始"]})}),se.jsxs("div",{className:"absolute bottom-3 left-3 sm:bottom-6 sm:left-6 bg-black/60 text-white px-3 py-1.5 sm:px-6 sm:py-3 rounded-full backdrop-blur-md border border-white/20 shadow-xl text-xs sm:text-base",children:["📸 ",D.name," · ",a.length," 张"]}),se.jsx("div",{className:"absolute bottom-3 right-3 sm:bottom-6 sm:right-6 bg-black/40 text-white/80 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full backdrop-blur-sm text-[10px] sm:text-sm",children:"🎮 单指旋转 · 双指缩放"})]});const te=a.length<=1?112:a.length<=4?104:a.length<=12?88:a.length<=36?72:a.length<=80?60:52,oe=Math.min(Math.max(a.length,1),10),I=te*oe+12*Math.max(0,oe-1),J=I+40,be=Math.min(Math.max(J+64,480),980),q=a.length>0;return se.jsxs("div",{className:"h-dvh flex justify-center bg-gradient-to-br from-slate-950 via-purple-950 to-black relative overflow-hidden",children:[se.jsxs("div",{className:"absolute inset-0 opacity-30 pointer-events-none",children:[se.jsx("div",{className:"absolute left-[-8rem] top-[-8rem] h-96 w-96 rounded-full bg-purple-500 blur-3xl"}),se.jsx("div",{className:"absolute bottom-[-10rem] right-[-8rem] h-[28rem] w-[28rem] rounded-full bg-blue-500 blur-3xl"})]}),se.jsx("button",{type:"button",onClick:le,className:"absolute left-4 top-4 z-20 rounded-full bg-white/85 px-4 py-2 text-sm text-gray-800 shadow-xl backdrop-blur-md transition-all hover:bg-white hover:text-purple-700 sm:left-6 sm:top-6",children:se.jsxs("span",{className:"inline-flex items-center gap-2",children:[se.jsx(Mp,{className:"size-4"}),"重选样式"]})}),se.jsxs("div",{className:`${q?"max-w-[960px]":"max-w-2xl"} w-full px-6 pb-4 pt-14 sm:pt-16 relative z-10 flex h-full flex-col min-h-0 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${v?"opacity-100 translate-y-0":"opacity-0 translate-y-3"}`,children:[se.jsxs("div",{className:"text-center mb-4 animate-fade-in flex shrink-0 flex-col items-center",children:[se.jsx("span",{className:`mb-2 h-1.5 w-14 rounded-full bg-gradient-to-r ${D.accent}`}),se.jsx("h1",{className:"text-4xl mb-2 bg-gradient-to-r from-white via-fuchsia-100 to-blue-100 bg-clip-text text-transparent font-bold",children:D.name}),se.jsxs("p",{className:"text-white/70 text-base",children:[D.name,"需要上传 ",D.minPhotos,"-",D.maxPhotos," 张照片"]})]}),se.jsxs("div",{onDragOver:K,onDragLeave:L,onDrop:R,style:{width:q?`${be}px`:"min(100%, clamp(380px, 48dvh, 520px))",maxWidth:q?"92vw":void 0,height:q?"clamp(380px, 48dvh, 520px)":"min(100%, clamp(380px, 48dvh, 520px))"},className:`relative border-4 border-dashed rounded-[56px] p-7 text-center transition-all duration-300 shadow-xl flex shrink-0 self-center ${T?"border-purple-500 bg-purple-100/80 scale-105 shadow-2xl shadow-purple-500/50":"border-gray-300 bg-white/80 backdrop-blur-sm hover:border-purple-400 hover:shadow-2xl"}`,children:[se.jsx("input",{ref:P,type:"file",multiple:!0,accept:"image/*,.heic,.heif",onChange:V,className:"hidden"}),se.jsx("div",{className:"flex flex-col items-center gap-4 w-full min-h-0",children:a.length===0?se.jsxs("div",{className:"w-full min-h-0 flex flex-1 flex-col items-center",children:[se.jsxs("div",{className:"flex-1 min-h-0 flex flex-col items-center justify-center gap-4",children:[se.jsx("div",{className:"w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 flex items-center justify-center shadow-xl animate-bounce",children:se.jsx(f0,{className:"text-white",size:40})}),se.jsxs("div",{children:[se.jsx("p",{className:"text-2xl mb-2 font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent",children:"拖拽照片到这里"}),se.jsx("p",{className:"text-gray-500",children:"或者点击下方按钮选择文件"})]})]}),se.jsxs("button",{onClick:()=>{var W;return(W=P.current)==null?void 0:W.click()},disabled:g,className:"group relative w-full px-10 py-4 rounded-[28px] text-white text-lg font-semibold shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/40 active:scale-[0.98] bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-[length:200%_100%] animate-[gradient-x_4s_ease_infinite]",children:[se.jsx("span",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"}),se.jsxs("span",{className:"relative flex items-center justify-center gap-2",children:[se.jsx(Ep,{size:22}),g?`上传中 ${x.done}/${x.total}`:"选择照片"]})]})]}):se.jsxs("div",{className:"w-full min-h-0 flex flex-1 flex-col animate-fade-in",children:[se.jsxs("div",{className:"flex shrink-0 items-center justify-between mb-3 px-1",children:[se.jsxs("p",{className:"text-base text-gray-700",children:["已上传 ",se.jsx("span",{className:"text-purple-600 font-bold text-xl",children:a.length})," / ",D.maxPhotos," 张",g&&se.jsxs("span",{className:"ml-2 text-xs text-blue-600",children:["上传中 ",x.done,"/",x.total]}),a.length<D.minPhotos&&se.jsxs("span",{className:"ml-2 text-xs text-amber-600",children:["还需 ",D.minPhotos-a.length," 张"]})]}),se.jsx("button",{onClick:ee,disabled:g,className:"text-sm text-red-500 hover:text-red-700 hover:scale-110 transition-all px-3 py-1 rounded-full hover:bg-red-50",children:"清空"})]}),se.jsx("div",{className:"flex-1 min-h-0 mx-auto overflow-y-auto overscroll-contain p-5 bg-gradient-to-br from-gray-50 to-purple-50 rounded-[34px] border border-purple-100 shadow-inner",style:{width:"100%",boxSizing:"border-box"},children:se.jsx("div",{className:"grid gap-3 justify-start",style:{gridTemplateColumns:`repeat(${oe}, ${te}px)`,width:`${I}px`,maxWidth:"100%"},children:a.map((W,he)=>se.jsxs("div",{className:"group relative aspect-square rounded-[20px] overflow-hidden border-2 border-white shadow-md transition-all duration-300 hover:shadow-xl hover:z-10",children:[se.jsx("img",{src:W,alt:`预览 ${he+1}`,className:"w-full h-full object-cover"}),se.jsx("button",{type:"button",onClick:()=>j(he),disabled:g,"aria-label":`删除第 ${he+1} 张照片`,className:"absolute top-1.5 right-1.5 w-7 h-7 rounded-full bg-black/70 text-white flex items-center justify-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity shadow-lg hover:bg-red-500 active:scale-95",children:se.jsx(p0,{className:"w-4 h-4"})})]},he))})}),se.jsxs("div",{className:"shrink-0 pt-3 grid grid-cols-2 gap-3 w-full",children:[se.jsxs("button",{onClick:()=>{var W;return(W=P.current)==null?void 0:W.click()},disabled:a.length>=D.maxPhotos||g,className:"group relative w-full px-6 py-4 rounded-[28px] text-white text-lg font-semibold shadow-lg overflow-hidden transition-all duration-300 enabled:hover:shadow-2xl enabled:hover:shadow-blue-500/40 enabled:active:scale-[0.98] bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-[length:200%_100%] animate-[gradient-x_4s_ease_infinite] disabled:opacity-50 disabled:cursor-not-allowed disabled:animate-none",children:[se.jsx("span",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"}),se.jsxs("span",{className:"relative flex items-center justify-center gap-2",children:[se.jsx(Ep,{size:22}),g?`上传中 ${x.done}/${x.total}`:"继续上传"]})]}),se.jsxs("button",{onClick:ge,disabled:a.length<D.minPhotos||g,className:"group relative w-full px-6 py-4 rounded-[28px] text-white text-lg font-semibold shadow-lg overflow-hidden transition-all duration-300 enabled:hover:shadow-2xl enabled:hover:shadow-purple-500/40 enabled:active:scale-[0.98] bg-gradient-to-r from-purple-600 via-fuchsia-500 to-blue-600 bg-[length:200%_100%] animate-[gradient-x_4s_ease_infinite] disabled:opacity-50 disabled:cursor-not-allowed disabled:animate-none",children:[se.jsx("span",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"}),se.jsxs("span",{className:"relative flex items-center justify-center gap-2",children:[se.jsx("span",{children:"✨"}),"开始生成"]})]})]})]})})]}),se.jsxs("div",{className:"mt-auto pb-3 pt-5 text-center space-y-2 shrink-0",children:[se.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-8 text-sm text-gray-600",children:[se.jsxs("div",{className:"flex items-center gap-2",children:[se.jsx("span",{className:"text-lg",children:"✨"}),se.jsx("span",{children:"支持 JPG、PNG、HEIC 等格式"})]}),se.jsxs("div",{className:"flex items-center gap-2",children:[se.jsx("span",{className:"text-lg",children:"🎮"}),se.jsx("span",{children:"生成后可自由旋转、缩放"})]})]}),se.jsx("p",{className:"text-xs text-gray-400",children:"完美支持苹果 iPhone 相机拍摄的照片"})]})]}),N()]})}Q_.createRoot(document.getElementById("root")).render(se.jsx(GE,{}));
