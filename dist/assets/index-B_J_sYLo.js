(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(a){if(a.ep)return;a.ep=!0;const c=n(a);fetch(a.href,c)}})();var Su={exports:{}},Fs={},Mu={exports:{}},vt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vp;function ev(){if(vp)return vt;vp=1;var o=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),S=Symbol.iterator;function y(O){return O===null||typeof O!="object"?null:(O=S&&O[S]||O["@@iterator"],typeof O=="function"?O:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,T={};function _(O,pe,ke){this.props=O,this.context=pe,this.refs=T,this.updater=ke||M}_.prototype.isReactComponent={},_.prototype.setState=function(O,pe){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,pe,"setState")},_.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function v(){}v.prototype=_.prototype;function U(O,pe,ke){this.props=O,this.context=pe,this.refs=T,this.updater=ke||M}var P=U.prototype=new v;P.constructor=U,A(P,_.prototype),P.isPureReactComponent=!0;var D=Array.isArray,ne=Object.prototype.hasOwnProperty,B={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function Q(O,pe,ke){var J,Ee={},Le=null,Ue=null;if(pe!=null)for(J in pe.ref!==void 0&&(Ue=pe.ref),pe.key!==void 0&&(Le=""+pe.key),pe)ne.call(pe,J)&&!k.hasOwnProperty(J)&&(Ee[J]=pe[J]);var Ve=arguments.length-2;if(Ve===1)Ee.children=ke;else if(1<Ve){for(var je=Array(Ve),tt=0;tt<Ve;tt++)je[tt]=arguments[tt+2];Ee.children=je}if(O&&O.defaultProps)for(J in Ve=O.defaultProps,Ve)Ee[J]===void 0&&(Ee[J]=Ve[J]);return{$$typeof:o,type:O,key:Le,ref:Ue,props:Ee,_owner:B.current}}function L(O,pe){return{$$typeof:o,type:O.type,key:pe,ref:O.ref,props:O.props,_owner:O._owner}}function R(O){return typeof O=="object"&&O!==null&&O.$$typeof===o}function G(O){var pe={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ke){return pe[ke]})}var Se=/\/+/g;function ce(O,pe){return typeof O=="object"&&O!==null&&O.key!=null?G(""+O.key):pe.toString(36)}function Re(O,pe,ke,J,Ee){var Le=typeof O;(Le==="undefined"||Le==="boolean")&&(O=null);var Ue=!1;if(O===null)Ue=!0;else switch(Le){case"string":case"number":Ue=!0;break;case"object":switch(O.$$typeof){case o:case e:Ue=!0}}if(Ue)return Ue=O,Ee=Ee(Ue),O=J===""?"."+ce(Ue,0):J,D(Ee)?(ke="",O!=null&&(ke=O.replace(Se,"$&/")+"/"),Re(Ee,pe,ke,"",function(tt){return tt})):Ee!=null&&(R(Ee)&&(Ee=L(Ee,ke+(!Ee.key||Ue&&Ue.key===Ee.key?"":(""+Ee.key).replace(Se,"$&/")+"/")+O)),pe.push(Ee)),1;if(Ue=0,J=J===""?".":J+":",D(O))for(var Ve=0;Ve<O.length;Ve++){Le=O[Ve];var je=J+ce(Le,Ve);Ue+=Re(Le,pe,ke,je,Ee)}else if(je=y(O),typeof je=="function")for(O=je.call(O),Ve=0;!(Le=O.next()).done;)Le=Le.value,je=J+ce(Le,Ve++),Ue+=Re(Le,pe,ke,je,Ee);else if(Le==="object")throw pe=String(O),Error("Objects are not valid as a React child (found: "+(pe==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":pe)+"). If you meant to render a collection of children, use an array instead.");return Ue}function be(O,pe,ke){if(O==null)return O;var J=[],Ee=0;return Re(O,J,"","",function(Le){return pe.call(ke,Le,Ee++)}),J}function xe(O){if(O._status===-1){var pe=O._result;pe=pe(),pe.then(function(ke){(O._status===0||O._status===-1)&&(O._status=1,O._result=ke)},function(ke){(O._status===0||O._status===-1)&&(O._status=2,O._result=ke)}),O._status===-1&&(O._status=0,O._result=pe)}if(O._status===1)return O._result.default;throw O._result}var Me={current:null},I={transition:null},Te={ReactCurrentDispatcher:Me,ReactCurrentBatchConfig:I,ReactCurrentOwner:B};function ge(){throw Error("act(...) is not supported in production builds of React.")}return vt.Children={map:be,forEach:function(O,pe,ke){be(O,function(){pe.apply(this,arguments)},ke)},count:function(O){var pe=0;return be(O,function(){pe++}),pe},toArray:function(O){return be(O,function(pe){return pe})||[]},only:function(O){if(!R(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},vt.Component=_,vt.Fragment=n,vt.Profiler=a,vt.PureComponent=U,vt.StrictMode=r,vt.Suspense=h,vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Te,vt.act=ge,vt.cloneElement=function(O,pe,ke){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var J=A({},O.props),Ee=O.key,Le=O.ref,Ue=O._owner;if(pe!=null){if(pe.ref!==void 0&&(Le=pe.ref,Ue=B.current),pe.key!==void 0&&(Ee=""+pe.key),O.type&&O.type.defaultProps)var Ve=O.type.defaultProps;for(je in pe)ne.call(pe,je)&&!k.hasOwnProperty(je)&&(J[je]=pe[je]===void 0&&Ve!==void 0?Ve[je]:pe[je])}var je=arguments.length-2;if(je===1)J.children=ke;else if(1<je){Ve=Array(je);for(var tt=0;tt<je;tt++)Ve[tt]=arguments[tt+2];J.children=Ve}return{$$typeof:o,type:O.type,key:Ee,ref:Le,props:J,_owner:Ue}},vt.createContext=function(O){return O={$$typeof:f,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:c,_context:O},O.Consumer=O},vt.createElement=Q,vt.createFactory=function(O){var pe=Q.bind(null,O);return pe.type=O,pe},vt.createRef=function(){return{current:null}},vt.forwardRef=function(O){return{$$typeof:d,render:O}},vt.isValidElement=R,vt.lazy=function(O){return{$$typeof:g,_payload:{_status:-1,_result:O},_init:xe}},vt.memo=function(O,pe){return{$$typeof:m,type:O,compare:pe===void 0?null:pe}},vt.startTransition=function(O){var pe=I.transition;I.transition={};try{O()}finally{I.transition=pe}},vt.unstable_act=ge,vt.useCallback=function(O,pe){return Me.current.useCallback(O,pe)},vt.useContext=function(O){return Me.current.useContext(O)},vt.useDebugValue=function(){},vt.useDeferredValue=function(O){return Me.current.useDeferredValue(O)},vt.useEffect=function(O,pe){return Me.current.useEffect(O,pe)},vt.useId=function(){return Me.current.useId()},vt.useImperativeHandle=function(O,pe,ke){return Me.current.useImperativeHandle(O,pe,ke)},vt.useInsertionEffect=function(O,pe){return Me.current.useInsertionEffect(O,pe)},vt.useLayoutEffect=function(O,pe){return Me.current.useLayoutEffect(O,pe)},vt.useMemo=function(O,pe){return Me.current.useMemo(O,pe)},vt.useReducer=function(O,pe,ke){return Me.current.useReducer(O,pe,ke)},vt.useRef=function(O){return Me.current.useRef(O)},vt.useState=function(O){return Me.current.useState(O)},vt.useSyncExternalStore=function(O,pe,ke){return Me.current.useSyncExternalStore(O,pe,ke)},vt.useTransition=function(){return Me.current.useTransition()},vt.version="18.3.1",vt}var _p;function Nd(){return _p||(_p=1,Mu.exports=ev()),Mu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xp;function tv(){if(xp)return Fs;xp=1;var o=Nd(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function f(d,h,m){var g,S={},y=null,M=null;m!==void 0&&(y=""+m),h.key!==void 0&&(y=""+h.key),h.ref!==void 0&&(M=h.ref);for(g in h)r.call(h,g)&&!c.hasOwnProperty(g)&&(S[g]=h[g]);if(d&&d.defaultProps)for(g in h=d.defaultProps,h)S[g]===void 0&&(S[g]=h[g]);return{$$typeof:e,type:d,key:y,ref:M,props:S,_owner:a.current}}return Fs.Fragment=n,Fs.jsx=f,Fs.jsxs=f,Fs}var yp;function nv(){return yp||(yp=1,Su.exports=tv()),Su.exports}var _e=nv(),tl={},Eu={exports:{}},In={},wu={exports:{}},Tu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sp;function iv(){return Sp||(Sp=1,(function(o){function e(I,Te){var ge=I.length;I.push(Te);e:for(;0<ge;){var O=ge-1>>>1,pe=I[O];if(0<a(pe,Te))I[O]=Te,I[ge]=pe,ge=O;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var Te=I[0],ge=I.pop();if(ge!==Te){I[0]=ge;e:for(var O=0,pe=I.length,ke=pe>>>1;O<ke;){var J=2*(O+1)-1,Ee=I[J],Le=J+1,Ue=I[Le];if(0>a(Ee,ge))Le<pe&&0>a(Ue,Ee)?(I[O]=Ue,I[Le]=ge,O=Le):(I[O]=Ee,I[J]=ge,O=J);else if(Le<pe&&0>a(Ue,ge))I[O]=Ue,I[Le]=ge,O=Le;else break e}}return Te}function a(I,Te){var ge=I.sortIndex-Te.sortIndex;return ge!==0?ge:I.id-Te.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();o.unstable_now=function(){return f.now()-d}}var h=[],m=[],g=1,S=null,y=3,M=!1,A=!1,T=!1,_=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(I){for(var Te=n(m);Te!==null;){if(Te.callback===null)r(m);else if(Te.startTime<=I)r(m),Te.sortIndex=Te.expirationTime,e(h,Te);else break;Te=n(m)}}function D(I){if(T=!1,P(I),!A)if(n(h)!==null)A=!0,xe(ne);else{var Te=n(m);Te!==null&&Me(D,Te.startTime-I)}}function ne(I,Te){A=!1,T&&(T=!1,v(Q),Q=-1),M=!0;var ge=y;try{for(P(Te),S=n(h);S!==null&&(!(S.expirationTime>Te)||I&&!G());){var O=S.callback;if(typeof O=="function"){S.callback=null,y=S.priorityLevel;var pe=O(S.expirationTime<=Te);Te=o.unstable_now(),typeof pe=="function"?S.callback=pe:S===n(h)&&r(h),P(Te)}else r(h);S=n(h)}if(S!==null)var ke=!0;else{var J=n(m);J!==null&&Me(D,J.startTime-Te),ke=!1}return ke}finally{S=null,y=ge,M=!1}}var B=!1,k=null,Q=-1,L=5,R=-1;function G(){return!(o.unstable_now()-R<L)}function Se(){if(k!==null){var I=o.unstable_now();R=I;var Te=!0;try{Te=k(!0,I)}finally{Te?ce():(B=!1,k=null)}}else B=!1}var ce;if(typeof U=="function")ce=function(){U(Se)};else if(typeof MessageChannel<"u"){var Re=new MessageChannel,be=Re.port2;Re.port1.onmessage=Se,ce=function(){be.postMessage(null)}}else ce=function(){_(Se,0)};function xe(I){k=I,B||(B=!0,ce())}function Me(I,Te){Q=_(function(){I(o.unstable_now())},Te)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(I){I.callback=null},o.unstable_continueExecution=function(){A||M||(A=!0,xe(ne))},o.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<I?Math.floor(1e3/I):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_getFirstCallbackNode=function(){return n(h)},o.unstable_next=function(I){switch(y){case 1:case 2:case 3:var Te=3;break;default:Te=y}var ge=y;y=Te;try{return I()}finally{y=ge}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(I,Te){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var ge=y;y=I;try{return Te()}finally{y=ge}},o.unstable_scheduleCallback=function(I,Te,ge){var O=o.unstable_now();switch(typeof ge=="object"&&ge!==null?(ge=ge.delay,ge=typeof ge=="number"&&0<ge?O+ge:O):ge=O,I){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=ge+pe,I={id:g++,callback:Te,priorityLevel:I,startTime:ge,expirationTime:pe,sortIndex:-1},ge>O?(I.sortIndex=ge,e(m,I),n(h)===null&&I===n(m)&&(T?(v(Q),Q=-1):T=!0,Me(D,ge-O))):(I.sortIndex=pe,e(h,I),A||M||(A=!0,xe(ne))),I},o.unstable_shouldYield=G,o.unstable_wrapCallback=function(I){var Te=y;return function(){var ge=y;y=Te;try{return I.apply(this,arguments)}finally{y=ge}}}})(Tu)),Tu}var Mp;function rv(){return Mp||(Mp=1,wu.exports=iv()),wu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ep;function ov(){if(Ep)return In;Ep=1;var o=Nd(),e=rv();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,s=1;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function c(t,i){f(t,i),f(t+"Capture",i)}function f(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},S={};function y(t){return h.call(S,t)?!0:h.call(g,t)?!1:m.test(t)?S[t]=!0:(g[t]=!0,!1)}function M(t,i,s,l){if(s!==null&&s.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:s!==null?!s.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function A(t,i,s,l){if(i===null||typeof i>"u"||M(t,i,s,l))return!0;if(l)return!1;if(s!==null)switch(s.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function T(t,i,s,l,u,p,w){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=u,this.mustUseProperty=s,this.propertyName=t,this.type=i,this.sanitizeURL=p,this.removeEmptyString=w}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){_[t]=new T(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];_[i]=new T(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){_[t]=new T(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){_[t]=new T(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){_[t]=new T(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){_[t]=new T(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){_[t]=new T(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){_[t]=new T(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){_[t]=new T(t,5,!1,t.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function U(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(v,U);_[i]=new T(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(v,U);_[i]=new T(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(v,U);_[i]=new T(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){_[t]=new T(t,1,!1,t.toLowerCase(),null,!1,!1)}),_.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){_[t]=new T(t,1,!1,t.toLowerCase(),null,!0,!0)});function P(t,i,s,l){var u=_.hasOwnProperty(i)?_[i]:null;(u!==null?u.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(A(i,s,u,l)&&(s=null),l||u===null?y(i)&&(s===null?t.removeAttribute(i):t.setAttribute(i,""+s)):u.mustUseProperty?t[u.propertyName]=s===null?u.type===3?!1:"":s:(i=u.attributeName,l=u.attributeNamespace,s===null?t.removeAttribute(i):(u=u.type,s=u===3||u===4&&s===!0?"":""+s,l?t.setAttributeNS(l,i,s):t.setAttribute(i,s))))}var D=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ne=Symbol.for("react.element"),B=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),Q=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),G=Symbol.for("react.context"),Se=Symbol.for("react.forward_ref"),ce=Symbol.for("react.suspense"),Re=Symbol.for("react.suspense_list"),be=Symbol.for("react.memo"),xe=Symbol.for("react.lazy"),Me=Symbol.for("react.offscreen"),I=Symbol.iterator;function Te(t){return t===null||typeof t!="object"?null:(t=I&&t[I]||t["@@iterator"],typeof t=="function"?t:null)}var ge=Object.assign,O;function pe(t){if(O===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);O=i&&i[1]||""}return`
`+O+t}var ke=!1;function J(t,i){if(!t||ke)return"";ke=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(me){var l=me}Reflect.construct(t,[],i)}else{try{i.call()}catch(me){l=me}t.call(i.prototype)}else{try{throw Error()}catch(me){l=me}t()}}catch(me){if(me&&l&&typeof me.stack=="string"){for(var u=me.stack.split(`
`),p=l.stack.split(`
`),w=u.length-1,N=p.length-1;1<=w&&0<=N&&u[w]!==p[N];)N--;for(;1<=w&&0<=N;w--,N--)if(u[w]!==p[N]){if(w!==1||N!==1)do if(w--,N--,0>N||u[w]!==p[N]){var H=`
`+u[w].replace(" at new "," at ");return t.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",t.displayName)),H}while(1<=w&&0<=N);break}}}finally{ke=!1,Error.prepareStackTrace=s}return(t=t?t.displayName||t.name:"")?pe(t):""}function Ee(t){switch(t.tag){case 5:return pe(t.type);case 16:return pe("Lazy");case 13:return pe("Suspense");case 19:return pe("SuspenseList");case 0:case 2:case 15:return t=J(t.type,!1),t;case 11:return t=J(t.type.render,!1),t;case 1:return t=J(t.type,!0),t;default:return""}}function Le(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case k:return"Fragment";case B:return"Portal";case L:return"Profiler";case Q:return"StrictMode";case ce:return"Suspense";case Re:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case G:return(t.displayName||"Context")+".Consumer";case R:return(t._context.displayName||"Context")+".Provider";case Se:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case be:return i=t.displayName||null,i!==null?i:Le(t.type)||"Memo";case xe:i=t._payload,t=t._init;try{return Le(t(i))}catch{}}return null}function Ue(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Le(i);case 8:return i===Q?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ve(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function je(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function tt(t){var i=je(t)?"checked":"value",s=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,p=s.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return u.call(this)},set:function(w){l=""+w,p.call(this,w)}}),Object.defineProperty(t,i,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(w){l=""+w},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function _t(t){t._valueTracker||(t._valueTracker=tt(t))}function z(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=je(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function xt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ut(t,i){var s=i.checked;return ge({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??t._wrapperState.initialChecked})}function ft(t,i){var s=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;s=Ve(i.value!=null?i.value:s),t._wrapperState={initialChecked:l,initialValue:s,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function $e(t,i){i=i.checked,i!=null&&P(t,"checked",i,!1)}function ee(t,i){$e(t,i);var s=Ve(i.value),l=i.type;if(s!=null)l==="number"?(s===0&&t.value===""||t.value!=s)&&(t.value=""+s):t.value!==""+s&&(t.value=""+s);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?se(t,i.type,s):i.hasOwnProperty("defaultValue")&&se(t,i.type,Ve(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function ye(t,i,s){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,s||i===t.value||(t.value=i),t.defaultValue=i}s=t.name,s!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,s!==""&&(t.name=s)}function se(t,i,s){(i!=="number"||xt(t.ownerDocument)!==t)&&(s==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+s&&(t.defaultValue=""+s))}var C=Array.isArray;function E(t,i,s,l){if(t=t.options,i){i={};for(var u=0;u<s.length;u++)i["$"+s[u]]=!0;for(s=0;s<t.length;s++)u=i.hasOwnProperty("$"+t[s].value),t[s].selected!==u&&(t[s].selected=u),u&&l&&(t[s].defaultSelected=!0)}else{for(s=""+Ve(s),i=null,u=0;u<t.length;u++){if(t[u].value===s){t[u].selected=!0,l&&(t[u].defaultSelected=!0);return}i!==null||t[u].disabled||(i=t[u])}i!==null&&(i.selected=!0)}}function Y(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return ge({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ie(t,i){var s=i.value;if(s==null){if(s=i.children,i=i.defaultValue,s!=null){if(i!=null)throw Error(n(92));if(C(s)){if(1<s.length)throw Error(n(93));s=s[0]}i=s}i==null&&(i=""),s=i}t._wrapperState={initialValue:Ve(s)}}function Ce(t,i){var s=Ve(i.value),l=Ve(i.defaultValue);s!=null&&(s=""+s,s!==t.value&&(t.value=s),i.defaultValue==null&&t.defaultValue!==s&&(t.defaultValue=s)),l!=null&&(t.defaultValue=""+l)}function Ae(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function Ge(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function De(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?Ge(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Fe,re=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,s,l,u){MSApp.execUnsafeLocalFunction(function(){return t(i,s,l,u)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Fe=Fe||document.createElement("div"),Fe.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Fe.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function ae(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var F={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},W=["Webkit","ms","Moz","O"];Object.keys(F).forEach(function(t){W.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),F[i]=F[t]})});function q(t,i,s){return i==null||typeof i=="boolean"||i===""?"":s||typeof i!="number"||i===0||F.hasOwnProperty(t)&&F[t]?(""+i).trim():i+"px"}function V(t,i){t=t.style;for(var s in i)if(i.hasOwnProperty(s)){var l=s.indexOf("--")===0,u=q(s,i[s],l);s==="float"&&(s="cssFloat"),l?t.setProperty(s,u):t[s]=u}}var we=ge({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fe(t,i){if(i){if(we[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function ue(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var x=null;function X(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var $=null,K=null,Pe=null;function We(t){if(t=Ms(t)){if(typeof $!="function")throw Error(n(280));var i=t.stateNode;i&&(i=ga(i),$(t.stateNode,t.type,i))}}function Qe(t){K?Pe?Pe.push(t):Pe=[t]:K=t}function Mt(){if(K){var t=K,i=Pe;if(Pe=K=null,We(t),i)for(t=0;t<i.length;t++)We(i[t])}}function Lt(t,i){return t(i)}function gt(){}var Dt=!1;function Et(t,i,s){if(Dt)return t(i,s);Dt=!0;try{return Lt(t,i,s)}finally{Dt=!1,(K!==null||Pe!==null)&&(gt(),Mt())}}function Rt(t,i){var s=t.stateNode;if(s===null)return null;var l=ga(s);if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(n(231,i,typeof s));return s}var Vt=!1;if(d)try{var Yt={};Object.defineProperty(Yt,"passive",{get:function(){Vt=!0}}),window.addEventListener("test",Yt,Yt),window.removeEventListener("test",Yt,Yt)}catch{Vt=!1}function fn(t,i,s,l,u,p,w,N,H){var me=Array.prototype.slice.call(arguments,3);try{i.apply(s,me)}catch(Ne){this.onError(Ne)}}var ti=!1,Mi=null,Ar=!1,Gi=null,Zs={onError:function(t){ti=!0,Mi=t}};function Qs(t,i,s,l,u,p,w,N,H){ti=!1,Mi=null,fn.apply(Zs,arguments)}function Gl(t,i,s,l,u,p,w,N,H){if(Qs.apply(this,arguments),ti){if(ti){var me=Mi;ti=!1,Mi=null}else throw Error(n(198));Ar||(Ar=!0,Gi=me)}}function Ei(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function Js(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function b(t){if(Ei(t)!==t)throw Error(n(188))}function Z(t){var i=t.alternate;if(!i){if(i=Ei(t),i===null)throw Error(n(188));return i!==t?null:t}for(var s=t,l=i;;){var u=s.return;if(u===null)break;var p=u.alternate;if(p===null){if(l=u.return,l!==null){s=l;continue}break}if(u.child===p.child){for(p=u.child;p;){if(p===s)return b(u),t;if(p===l)return b(u),i;p=p.sibling}throw Error(n(188))}if(s.return!==l.return)s=u,l=p;else{for(var w=!1,N=u.child;N;){if(N===s){w=!0,s=u,l=p;break}if(N===l){w=!0,l=u,s=p;break}N=N.sibling}if(!w){for(N=p.child;N;){if(N===s){w=!0,s=p,l=u;break}if(N===l){w=!0,l=p,s=u;break}N=N.sibling}if(!w)throw Error(n(189))}}if(s.alternate!==l)throw Error(n(190))}if(s.tag!==3)throw Error(n(188));return s.stateNode.current===s?t:i}function he(t){return t=Z(t),t!==null?ve(t):null}function ve(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=ve(t);if(i!==null)return i;t=t.sibling}return null}var te=e.unstable_scheduleCallback,Be=e.unstable_cancelCallback,Ye=e.unstable_shouldYield,Je=e.unstable_requestPaint,He=e.unstable_now,lt=e.unstable_getCurrentPriorityLevel,at=e.unstable_ImmediatePriority,rt=e.unstable_UserBlockingPriority,yt=e.unstable_NormalPriority,Bt=e.unstable_LowPriority,Ot=e.unstable_IdlePriority,tn=null,ht=null;function it(t){if(ht&&typeof ht.onCommitFiberRoot=="function")try{ht.onCommitFiberRoot(tn,t,void 0,(t.current.flags&128)===128)}catch{}}var bt=Math.clz32?Math.clz32:Wi,wt=Math.log,Un=Math.LN2;function Wi(t){return t>>>=0,t===0?32:31-(wt(t)/Un|0)|0}var nn=64,Xi=4194304;function Nt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function On(t,i){var s=t.pendingLanes;if(s===0)return 0;var l=0,u=t.suspendedLanes,p=t.pingedLanes,w=s&268435455;if(w!==0){var N=w&~u;N!==0?l=Nt(N):(p&=w,p!==0&&(l=Nt(p)))}else w=s&~u,w!==0?l=Nt(w):p!==0&&(l=Nt(p));if(l===0)return 0;if(i!==0&&i!==l&&(i&u)===0&&(u=l&-l,p=i&-i,u>=p||u===16&&(p&4194240)!==0))return i;if((l&4)!==0&&(l|=s&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)s=31-bt(i),u=1<<s,l|=t[s],i&=~u;return l}function rs(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rn(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,u=t.expirationTimes,p=t.pendingLanes;0<p;){var w=31-bt(p),N=1<<w,H=u[w];H===-1?((N&s)===0||(N&l)!==0)&&(u[w]=rs(N,i)):H<=i&&(t.expiredLanes|=N),p&=~N}}function Rr(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ea(){var t=nn;return nn<<=1,(nn&4194240)===0&&(nn=64),t}function to(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function os(t,i,s){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-bt(i),t[i]=s}function Sg(t,i){var s=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<s;){var u=31-bt(s),p=1<<u;i[u]=0,l[u]=-1,t[u]=-1,s&=~p}}function Wl(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-bt(s),u=1<<l;u&i|t[l]&i&&(t[l]|=i),s&=~u}}var Ct=0;function qd(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var $d,Xl,Kd,Zd,Qd,jl=!1,ta=[],ji=null,Yi=null,qi=null,ss=new Map,as=new Map,$i=[],Mg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Jd(t,i){switch(t){case"focusin":case"focusout":ji=null;break;case"dragenter":case"dragleave":Yi=null;break;case"mouseover":case"mouseout":qi=null;break;case"pointerover":case"pointerout":ss.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":as.delete(i.pointerId)}}function ls(t,i,s,l,u,p){return t===null||t.nativeEvent!==p?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:p,targetContainers:[u]},i!==null&&(i=Ms(i),i!==null&&Xl(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),t)}function Eg(t,i,s,l,u){switch(i){case"focusin":return ji=ls(ji,t,i,s,l,u),!0;case"dragenter":return Yi=ls(Yi,t,i,s,l,u),!0;case"mouseover":return qi=ls(qi,t,i,s,l,u),!0;case"pointerover":var p=u.pointerId;return ss.set(p,ls(ss.get(p)||null,t,i,s,l,u)),!0;case"gotpointercapture":return p=u.pointerId,as.set(p,ls(as.get(p)||null,t,i,s,l,u)),!0}return!1}function ef(t){var i=br(t.target);if(i!==null){var s=Ei(i);if(s!==null){if(i=s.tag,i===13){if(i=Js(s),i!==null){t.blockedOn=i,Qd(t.priority,function(){Kd(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function na(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=ql(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);x=l,s.target.dispatchEvent(l),x=null}else return i=Ms(s),i!==null&&Xl(i),t.blockedOn=s,!1;i.shift()}return!0}function tf(t,i,s){na(t)&&s.delete(i)}function wg(){jl=!1,ji!==null&&na(ji)&&(ji=null),Yi!==null&&na(Yi)&&(Yi=null),qi!==null&&na(qi)&&(qi=null),ss.forEach(tf),as.forEach(tf)}function cs(t,i){t.blockedOn===i&&(t.blockedOn=null,jl||(jl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,wg)))}function us(t){function i(u){return cs(u,t)}if(0<ta.length){cs(ta[0],t);for(var s=1;s<ta.length;s++){var l=ta[s];l.blockedOn===t&&(l.blockedOn=null)}}for(ji!==null&&cs(ji,t),Yi!==null&&cs(Yi,t),qi!==null&&cs(qi,t),ss.forEach(i),as.forEach(i),s=0;s<$i.length;s++)l=$i[s],l.blockedOn===t&&(l.blockedOn=null);for(;0<$i.length&&(s=$i[0],s.blockedOn===null);)ef(s),s.blockedOn===null&&$i.shift()}var no=D.ReactCurrentBatchConfig,ia=!0;function Tg(t,i,s,l){var u=Ct,p=no.transition;no.transition=null;try{Ct=1,Yl(t,i,s,l)}finally{Ct=u,no.transition=p}}function Ag(t,i,s,l){var u=Ct,p=no.transition;no.transition=null;try{Ct=4,Yl(t,i,s,l)}finally{Ct=u,no.transition=p}}function Yl(t,i,s,l){if(ia){var u=ql(t,i,s,l);if(u===null)dc(t,i,l,ra,s),Jd(t,l);else if(Eg(u,t,i,s,l))l.stopPropagation();else if(Jd(t,l),i&4&&-1<Mg.indexOf(t)){for(;u!==null;){var p=Ms(u);if(p!==null&&$d(p),p=ql(t,i,s,l),p===null&&dc(t,i,l,ra,s),p===u)break;u=p}u!==null&&l.stopPropagation()}else dc(t,i,l,null,s)}}var ra=null;function ql(t,i,s,l){if(ra=null,t=X(l),t=br(t),t!==null)if(i=Ei(t),i===null)t=null;else if(s=i.tag,s===13){if(t=Js(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return ra=t,null}function nf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(lt()){case at:return 1;case rt:return 4;case yt:case Bt:return 16;case Ot:return 536870912;default:return 16}default:return 16}}var Ki=null,$l=null,oa=null;function rf(){if(oa)return oa;var t,i=$l,s=i.length,l,u="value"in Ki?Ki.value:Ki.textContent,p=u.length;for(t=0;t<s&&i[t]===u[t];t++);var w=s-t;for(l=1;l<=w&&i[s-l]===u[p-l];l++);return oa=u.slice(t,1<l?1-l:void 0)}function sa(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function aa(){return!0}function of(){return!1}function Fn(t){function i(s,l,u,p,w){this._reactName=s,this._targetInst=u,this.type=l,this.nativeEvent=p,this.target=w,this.currentTarget=null;for(var N in t)t.hasOwnProperty(N)&&(s=t[N],this[N]=s?s(p):p[N]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?aa:of,this.isPropagationStopped=of,this}return ge(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=aa)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=aa)},persist:function(){},isPersistent:aa}),i}var io={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kl=Fn(io),ds=ge({},io,{view:0,detail:0}),Rg=Fn(ds),Zl,Ql,fs,la=ge({},ds,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ec,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==fs&&(fs&&t.type==="mousemove"?(Zl=t.screenX-fs.screenX,Ql=t.screenY-fs.screenY):Ql=Zl=0,fs=t),Zl)},movementY:function(t){return"movementY"in t?t.movementY:Ql}}),sf=Fn(la),bg=ge({},la,{dataTransfer:0}),Cg=Fn(bg),Pg=ge({},ds,{relatedTarget:0}),Jl=Fn(Pg),Lg=ge({},io,{animationName:0,elapsedTime:0,pseudoElement:0}),Dg=Fn(Lg),Ig=ge({},io,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ng=Fn(Ig),Ug=ge({},io,{data:0}),af=Fn(Ug),Og={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=kg[t])?!!i[t]:!1}function ec(){return zg}var Bg=ge({},ds,{key:function(t){if(t.key){var i=Og[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=sa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Fg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ec,charCode:function(t){return t.type==="keypress"?sa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?sa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Hg=Fn(Bg),Vg=ge({},la,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lf=Fn(Vg),Gg=ge({},ds,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ec}),Wg=Fn(Gg),Xg=ge({},io,{propertyName:0,elapsedTime:0,pseudoElement:0}),jg=Fn(Xg),Yg=ge({},la,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),qg=Fn(Yg),$g=[9,13,27,32],tc=d&&"CompositionEvent"in window,hs=null;d&&"documentMode"in document&&(hs=document.documentMode);var Kg=d&&"TextEvent"in window&&!hs,cf=d&&(!tc||hs&&8<hs&&11>=hs),uf=" ",df=!1;function ff(t,i){switch(t){case"keyup":return $g.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ro=!1;function Zg(t,i){switch(t){case"compositionend":return hf(i);case"keypress":return i.which!==32?null:(df=!0,uf);case"textInput":return t=i.data,t===uf&&df?null:t;default:return null}}function Qg(t,i){if(ro)return t==="compositionend"||!tc&&ff(t,i)?(t=rf(),oa=$l=Ki=null,ro=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return cf&&i.locale!=="ko"?null:i.data;default:return null}}var Jg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Jg[t.type]:i==="textarea"}function mf(t,i,s,l){Qe(l),i=ha(i,"onChange"),0<i.length&&(s=new Kl("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var ps=null,ms=null;function e0(t){If(t,0)}function ca(t){var i=co(t);if(z(i))return t}function t0(t,i){if(t==="change")return i}var gf=!1;if(d){var nc;if(d){var ic="oninput"in document;if(!ic){var vf=document.createElement("div");vf.setAttribute("oninput","return;"),ic=typeof vf.oninput=="function"}nc=ic}else nc=!1;gf=nc&&(!document.documentMode||9<document.documentMode)}function _f(){ps&&(ps.detachEvent("onpropertychange",xf),ms=ps=null)}function xf(t){if(t.propertyName==="value"&&ca(ms)){var i=[];mf(i,ms,t,X(t)),Et(e0,i)}}function n0(t,i,s){t==="focusin"?(_f(),ps=i,ms=s,ps.attachEvent("onpropertychange",xf)):t==="focusout"&&_f()}function i0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ca(ms)}function r0(t,i){if(t==="click")return ca(i)}function o0(t,i){if(t==="input"||t==="change")return ca(i)}function s0(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ni=typeof Object.is=="function"?Object.is:s0;function gs(t,i){if(ni(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var u=s[l];if(!h.call(i,u)||!ni(t[u],i[u]))return!1}return!0}function yf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Sf(t,i){var s=yf(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=yf(s)}}function Mf(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Mf(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Ef(){for(var t=window,i=xt();i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=xt(t.document)}return i}function rc(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function a0(t){var i=Ef(),s=t.focusedElem,l=t.selectionRange;if(i!==s&&s&&s.ownerDocument&&Mf(s.ownerDocument.documentElement,s)){if(l!==null&&rc(s)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in s)s.selectionStart=i,s.selectionEnd=Math.min(t,s.value.length);else if(t=(i=s.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var u=s.textContent.length,p=Math.min(l.start,u);l=l.end===void 0?p:Math.min(l.end,u),!t.extend&&p>l&&(u=l,l=p,p=u),u=Sf(s,p);var w=Sf(s,l);u&&w&&(t.rangeCount!==1||t.anchorNode!==u.node||t.anchorOffset!==u.offset||t.focusNode!==w.node||t.focusOffset!==w.offset)&&(i=i.createRange(),i.setStart(u.node,u.offset),t.removeAllRanges(),p>l?(t.addRange(i),t.extend(w.node,w.offset)):(i.setEnd(w.node,w.offset),t.addRange(i)))}}for(i=[],t=s;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<i.length;s++)t=i[s],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var l0=d&&"documentMode"in document&&11>=document.documentMode,oo=null,oc=null,vs=null,sc=!1;function wf(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;sc||oo==null||oo!==xt(l)||(l=oo,"selectionStart"in l&&rc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),vs&&gs(vs,l)||(vs=l,l=ha(oc,"onSelect"),0<l.length&&(i=new Kl("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=oo)))}function ua(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var so={animationend:ua("Animation","AnimationEnd"),animationiteration:ua("Animation","AnimationIteration"),animationstart:ua("Animation","AnimationStart"),transitionend:ua("Transition","TransitionEnd")},ac={},Tf={};d&&(Tf=document.createElement("div").style,"AnimationEvent"in window||(delete so.animationend.animation,delete so.animationiteration.animation,delete so.animationstart.animation),"TransitionEvent"in window||delete so.transitionend.transition);function da(t){if(ac[t])return ac[t];if(!so[t])return t;var i=so[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in Tf)return ac[t]=i[s];return t}var Af=da("animationend"),Rf=da("animationiteration"),bf=da("animationstart"),Cf=da("transitionend"),Pf=new Map,Lf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zi(t,i){Pf.set(t,i),c(i,[t])}for(var lc=0;lc<Lf.length;lc++){var cc=Lf[lc],c0=cc.toLowerCase(),u0=cc[0].toUpperCase()+cc.slice(1);Zi(c0,"on"+u0)}Zi(Af,"onAnimationEnd"),Zi(Rf,"onAnimationIteration"),Zi(bf,"onAnimationStart"),Zi("dblclick","onDoubleClick"),Zi("focusin","onFocus"),Zi("focusout","onBlur"),Zi(Cf,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _s="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),d0=new Set("cancel close invalid load scroll toggle".split(" ").concat(_s));function Df(t,i,s){var l=t.type||"unknown-event";t.currentTarget=s,Gl(l,i,void 0,t),t.currentTarget=null}function If(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],u=l.event;l=l.listeners;e:{var p=void 0;if(i)for(var w=l.length-1;0<=w;w--){var N=l[w],H=N.instance,me=N.currentTarget;if(N=N.listener,H!==p&&u.isPropagationStopped())break e;Df(u,N,me),p=H}else for(w=0;w<l.length;w++){if(N=l[w],H=N.instance,me=N.currentTarget,N=N.listener,H!==p&&u.isPropagationStopped())break e;Df(u,N,me),p=H}}}if(Ar)throw t=Gi,Ar=!1,Gi=null,t}function Ft(t,i){var s=i[vc];s===void 0&&(s=i[vc]=new Set);var l=t+"__bubble";s.has(l)||(Nf(i,t,2,!1),s.add(l))}function uc(t,i,s){var l=0;i&&(l|=4),Nf(s,t,l,i)}var fa="_reactListening"+Math.random().toString(36).slice(2);function xs(t){if(!t[fa]){t[fa]=!0,r.forEach(function(s){s!=="selectionchange"&&(d0.has(s)||uc(s,!1,t),uc(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[fa]||(i[fa]=!0,uc("selectionchange",!1,i))}}function Nf(t,i,s,l){switch(nf(i)){case 1:var u=Tg;break;case 4:u=Ag;break;default:u=Yl}s=u.bind(null,i,s,t),u=void 0,!Vt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),l?u!==void 0?t.addEventListener(i,s,{capture:!0,passive:u}):t.addEventListener(i,s,!0):u!==void 0?t.addEventListener(i,s,{passive:u}):t.addEventListener(i,s,!1)}function dc(t,i,s,l,u){var p=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var w=l.tag;if(w===3||w===4){var N=l.stateNode.containerInfo;if(N===u||N.nodeType===8&&N.parentNode===u)break;if(w===4)for(w=l.return;w!==null;){var H=w.tag;if((H===3||H===4)&&(H=w.stateNode.containerInfo,H===u||H.nodeType===8&&H.parentNode===u))return;w=w.return}for(;N!==null;){if(w=br(N),w===null)return;if(H=w.tag,H===5||H===6){l=p=w;continue e}N=N.parentNode}}l=l.return}Et(function(){var me=p,Ne=X(s),Oe=[];e:{var Ie=Pf.get(t);if(Ie!==void 0){var qe=Kl,Ze=t;switch(t){case"keypress":if(sa(s)===0)break e;case"keydown":case"keyup":qe=Hg;break;case"focusin":Ze="focus",qe=Jl;break;case"focusout":Ze="blur",qe=Jl;break;case"beforeblur":case"afterblur":qe=Jl;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":qe=sf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":qe=Cg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":qe=Wg;break;case Af:case Rf:case bf:qe=Dg;break;case Cf:qe=jg;break;case"scroll":qe=Rg;break;case"wheel":qe=qg;break;case"copy":case"cut":case"paste":qe=Ng;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":qe=lf}var et=(i&4)!==0,jt=!et&&t==="scroll",oe=et?Ie!==null?Ie+"Capture":null:Ie;et=[];for(var j=me,de;j!==null;){de=j;var ze=de.stateNode;if(de.tag===5&&ze!==null&&(de=ze,oe!==null&&(ze=Rt(j,oe),ze!=null&&et.push(ys(j,ze,de)))),jt)break;j=j.return}0<et.length&&(Ie=new qe(Ie,Ze,null,s,Ne),Oe.push({event:Ie,listeners:et}))}}if((i&7)===0){e:{if(Ie=t==="mouseover"||t==="pointerover",qe=t==="mouseout"||t==="pointerout",Ie&&s!==x&&(Ze=s.relatedTarget||s.fromElement)&&(br(Ze)||Ze[wi]))break e;if((qe||Ie)&&(Ie=Ne.window===Ne?Ne:(Ie=Ne.ownerDocument)?Ie.defaultView||Ie.parentWindow:window,qe?(Ze=s.relatedTarget||s.toElement,qe=me,Ze=Ze?br(Ze):null,Ze!==null&&(jt=Ei(Ze),Ze!==jt||Ze.tag!==5&&Ze.tag!==6)&&(Ze=null)):(qe=null,Ze=me),qe!==Ze)){if(et=sf,ze="onMouseLeave",oe="onMouseEnter",j="mouse",(t==="pointerout"||t==="pointerover")&&(et=lf,ze="onPointerLeave",oe="onPointerEnter",j="pointer"),jt=qe==null?Ie:co(qe),de=Ze==null?Ie:co(Ze),Ie=new et(ze,j+"leave",qe,s,Ne),Ie.target=jt,Ie.relatedTarget=de,ze=null,br(Ne)===me&&(et=new et(oe,j+"enter",Ze,s,Ne),et.target=de,et.relatedTarget=jt,ze=et),jt=ze,qe&&Ze)t:{for(et=qe,oe=Ze,j=0,de=et;de;de=ao(de))j++;for(de=0,ze=oe;ze;ze=ao(ze))de++;for(;0<j-de;)et=ao(et),j--;for(;0<de-j;)oe=ao(oe),de--;for(;j--;){if(et===oe||oe!==null&&et===oe.alternate)break t;et=ao(et),oe=ao(oe)}et=null}else et=null;qe!==null&&Uf(Oe,Ie,qe,et,!1),Ze!==null&&jt!==null&&Uf(Oe,jt,Ze,et,!0)}}e:{if(Ie=me?co(me):window,qe=Ie.nodeName&&Ie.nodeName.toLowerCase(),qe==="select"||qe==="input"&&Ie.type==="file")var nt=t0;else if(pf(Ie))if(gf)nt=o0;else{nt=i0;var ot=n0}else(qe=Ie.nodeName)&&qe.toLowerCase()==="input"&&(Ie.type==="checkbox"||Ie.type==="radio")&&(nt=r0);if(nt&&(nt=nt(t,me))){mf(Oe,nt,s,Ne);break e}ot&&ot(t,Ie,me),t==="focusout"&&(ot=Ie._wrapperState)&&ot.controlled&&Ie.type==="number"&&se(Ie,"number",Ie.value)}switch(ot=me?co(me):window,t){case"focusin":(pf(ot)||ot.contentEditable==="true")&&(oo=ot,oc=me,vs=null);break;case"focusout":vs=oc=oo=null;break;case"mousedown":sc=!0;break;case"contextmenu":case"mouseup":case"dragend":sc=!1,wf(Oe,s,Ne);break;case"selectionchange":if(l0)break;case"keydown":case"keyup":wf(Oe,s,Ne)}var st;if(tc)e:{switch(t){case"compositionstart":var ct="onCompositionStart";break e;case"compositionend":ct="onCompositionEnd";break e;case"compositionupdate":ct="onCompositionUpdate";break e}ct=void 0}else ro?ff(t,s)&&(ct="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(ct="onCompositionStart");ct&&(cf&&s.locale!=="ko"&&(ro||ct!=="onCompositionStart"?ct==="onCompositionEnd"&&ro&&(st=rf()):(Ki=Ne,$l="value"in Ki?Ki.value:Ki.textContent,ro=!0)),ot=ha(me,ct),0<ot.length&&(ct=new af(ct,t,null,s,Ne),Oe.push({event:ct,listeners:ot}),st?ct.data=st:(st=hf(s),st!==null&&(ct.data=st)))),(st=Kg?Zg(t,s):Qg(t,s))&&(me=ha(me,"onBeforeInput"),0<me.length&&(Ne=new af("onBeforeInput","beforeinput",null,s,Ne),Oe.push({event:Ne,listeners:me}),Ne.data=st))}If(Oe,i)})}function ys(t,i,s){return{instance:t,listener:i,currentTarget:s}}function ha(t,i){for(var s=i+"Capture",l=[];t!==null;){var u=t,p=u.stateNode;u.tag===5&&p!==null&&(u=p,p=Rt(t,s),p!=null&&l.unshift(ys(t,p,u)),p=Rt(t,i),p!=null&&l.push(ys(t,p,u))),t=t.return}return l}function ao(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Uf(t,i,s,l,u){for(var p=i._reactName,w=[];s!==null&&s!==l;){var N=s,H=N.alternate,me=N.stateNode;if(H!==null&&H===l)break;N.tag===5&&me!==null&&(N=me,u?(H=Rt(s,p),H!=null&&w.unshift(ys(s,H,N))):u||(H=Rt(s,p),H!=null&&w.push(ys(s,H,N)))),s=s.return}w.length!==0&&t.push({event:i,listeners:w})}var f0=/\r\n?/g,h0=/\u0000|\uFFFD/g;function Of(t){return(typeof t=="string"?t:""+t).replace(f0,`
`).replace(h0,"")}function pa(t,i,s){if(i=Of(i),Of(t)!==i&&s)throw Error(n(425))}function ma(){}var fc=null,hc=null;function pc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var mc=typeof setTimeout=="function"?setTimeout:void 0,p0=typeof clearTimeout=="function"?clearTimeout:void 0,Ff=typeof Promise=="function"?Promise:void 0,m0=typeof queueMicrotask=="function"?queueMicrotask:typeof Ff<"u"?function(t){return Ff.resolve(null).then(t).catch(g0)}:mc;function g0(t){setTimeout(function(){throw t})}function gc(t,i){var s=i,l=0;do{var u=s.nextSibling;if(t.removeChild(s),u&&u.nodeType===8)if(s=u.data,s==="/$"){if(l===0){t.removeChild(u),us(i);return}l--}else s!=="$"&&s!=="$?"&&s!=="$!"||l++;s=u}while(s);us(i)}function Qi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function kf(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return t;i--}else s==="/$"&&i++}t=t.previousSibling}return null}var lo=Math.random().toString(36).slice(2),hi="__reactFiber$"+lo,Ss="__reactProps$"+lo,wi="__reactContainer$"+lo,vc="__reactEvents$"+lo,v0="__reactListeners$"+lo,_0="__reactHandles$"+lo;function br(t){var i=t[hi];if(i)return i;for(var s=t.parentNode;s;){if(i=s[wi]||s[hi]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=kf(t);t!==null;){if(s=t[hi])return s;t=kf(t)}return i}t=s,s=t.parentNode}return null}function Ms(t){return t=t[hi]||t[wi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function co(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function ga(t){return t[Ss]||null}var _c=[],uo=-1;function Ji(t){return{current:t}}function kt(t){0>uo||(t.current=_c[uo],_c[uo]=null,uo--)}function Ut(t,i){uo++,_c[uo]=t.current,t.current=i}var er={},hn=Ji(er),bn=Ji(!1),Cr=er;function fo(t,i){var s=t.type.contextTypes;if(!s)return er;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var u={},p;for(p in s)u[p]=i[p];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=u),u}function Cn(t){return t=t.childContextTypes,t!=null}function va(){kt(bn),kt(hn)}function zf(t,i,s){if(hn.current!==er)throw Error(n(168));Ut(hn,i),Ut(bn,s)}function Bf(t,i,s){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return s;l=l.getChildContext();for(var u in l)if(!(u in i))throw Error(n(108,Ue(t)||"Unknown",u));return ge({},s,l)}function _a(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||er,Cr=hn.current,Ut(hn,t),Ut(bn,bn.current),!0}function Hf(t,i,s){var l=t.stateNode;if(!l)throw Error(n(169));s?(t=Bf(t,i,Cr),l.__reactInternalMemoizedMergedChildContext=t,kt(bn),kt(hn),Ut(hn,t)):kt(bn),Ut(bn,s)}var Ti=null,xa=!1,xc=!1;function Vf(t){Ti===null?Ti=[t]:Ti.push(t)}function x0(t){xa=!0,Vf(t)}function tr(){if(!xc&&Ti!==null){xc=!0;var t=0,i=Ct;try{var s=Ti;for(Ct=1;t<s.length;t++){var l=s[t];do l=l(!0);while(l!==null)}Ti=null,xa=!1}catch(u){throw Ti!==null&&(Ti=Ti.slice(t+1)),te(at,tr),u}finally{Ct=i,xc=!1}}return null}var ho=[],po=0,ya=null,Sa=0,Xn=[],jn=0,Pr=null,Ai=1,Ri="";function Lr(t,i){ho[po++]=Sa,ho[po++]=ya,ya=t,Sa=i}function Gf(t,i,s){Xn[jn++]=Ai,Xn[jn++]=Ri,Xn[jn++]=Pr,Pr=t;var l=Ai;t=Ri;var u=32-bt(l)-1;l&=~(1<<u),s+=1;var p=32-bt(i)+u;if(30<p){var w=u-u%5;p=(l&(1<<w)-1).toString(32),l>>=w,u-=w,Ai=1<<32-bt(i)+u|s<<u|l,Ri=p+t}else Ai=1<<p|s<<u|l,Ri=t}function yc(t){t.return!==null&&(Lr(t,1),Gf(t,1,0))}function Sc(t){for(;t===ya;)ya=ho[--po],ho[po]=null,Sa=ho[--po],ho[po]=null;for(;t===Pr;)Pr=Xn[--jn],Xn[jn]=null,Ri=Xn[--jn],Xn[jn]=null,Ai=Xn[--jn],Xn[jn]=null}var kn=null,zn=null,Ht=!1,ii=null;function Wf(t,i){var s=Kn(5,null,null,0);s.elementType="DELETED",s.stateNode=i,s.return=t,i=t.deletions,i===null?(t.deletions=[s],t.flags|=16):i.push(s)}function Xf(t,i){switch(t.tag){case 5:var s=t.type;return i=i.nodeType!==1||s.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,kn=t,zn=Qi(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,kn=t,zn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(s=Pr!==null?{id:Ai,overflow:Ri}:null,t.memoizedState={dehydrated:i,treeContext:s,retryLane:1073741824},s=Kn(18,null,null,0),s.stateNode=i,s.return=t,t.child=s,kn=t,zn=null,!0):!1;default:return!1}}function Mc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ec(t){if(Ht){var i=zn;if(i){var s=i;if(!Xf(t,i)){if(Mc(t))throw Error(n(418));i=Qi(s.nextSibling);var l=kn;i&&Xf(t,i)?Wf(l,s):(t.flags=t.flags&-4097|2,Ht=!1,kn=t)}}else{if(Mc(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ht=!1,kn=t}}}function jf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;kn=t}function Ma(t){if(t!==kn)return!1;if(!Ht)return jf(t),Ht=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!pc(t.type,t.memoizedProps)),i&&(i=zn)){if(Mc(t))throw Yf(),Error(n(418));for(;i;)Wf(t,i),i=Qi(i.nextSibling)}if(jf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"){if(i===0){zn=Qi(t.nextSibling);break e}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++}t=t.nextSibling}zn=null}}else zn=kn?Qi(t.stateNode.nextSibling):null;return!0}function Yf(){for(var t=zn;t;)t=Qi(t.nextSibling)}function mo(){zn=kn=null,Ht=!1}function wc(t){ii===null?ii=[t]:ii.push(t)}var y0=D.ReactCurrentBatchConfig;function Es(t,i,s){if(t=s.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(n(309));var l=s.stateNode}if(!l)throw Error(n(147,t));var u=l,p=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(w){var N=u.refs;w===null?delete N[p]:N[p]=w},i._stringRef=p,i)}if(typeof t!="string")throw Error(n(284));if(!s._owner)throw Error(n(290,t))}return t}function Ea(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function qf(t){var i=t._init;return i(t._payload)}function $f(t){function i(oe,j){if(t){var de=oe.deletions;de===null?(oe.deletions=[j],oe.flags|=16):de.push(j)}}function s(oe,j){if(!t)return null;for(;j!==null;)i(oe,j),j=j.sibling;return null}function l(oe,j){for(oe=new Map;j!==null;)j.key!==null?oe.set(j.key,j):oe.set(j.index,j),j=j.sibling;return oe}function u(oe,j){return oe=cr(oe,j),oe.index=0,oe.sibling=null,oe}function p(oe,j,de){return oe.index=de,t?(de=oe.alternate,de!==null?(de=de.index,de<j?(oe.flags|=2,j):de):(oe.flags|=2,j)):(oe.flags|=1048576,j)}function w(oe){return t&&oe.alternate===null&&(oe.flags|=2),oe}function N(oe,j,de,ze){return j===null||j.tag!==6?(j=mu(de,oe.mode,ze),j.return=oe,j):(j=u(j,de),j.return=oe,j)}function H(oe,j,de,ze){var nt=de.type;return nt===k?Ne(oe,j,de.props.children,ze,de.key):j!==null&&(j.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===xe&&qf(nt)===j.type)?(ze=u(j,de.props),ze.ref=Es(oe,j,de),ze.return=oe,ze):(ze=Ya(de.type,de.key,de.props,null,oe.mode,ze),ze.ref=Es(oe,j,de),ze.return=oe,ze)}function me(oe,j,de,ze){return j===null||j.tag!==4||j.stateNode.containerInfo!==de.containerInfo||j.stateNode.implementation!==de.implementation?(j=gu(de,oe.mode,ze),j.return=oe,j):(j=u(j,de.children||[]),j.return=oe,j)}function Ne(oe,j,de,ze,nt){return j===null||j.tag!==7?(j=zr(de,oe.mode,ze,nt),j.return=oe,j):(j=u(j,de),j.return=oe,j)}function Oe(oe,j,de){if(typeof j=="string"&&j!==""||typeof j=="number")return j=mu(""+j,oe.mode,de),j.return=oe,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case ne:return de=Ya(j.type,j.key,j.props,null,oe.mode,de),de.ref=Es(oe,null,j),de.return=oe,de;case B:return j=gu(j,oe.mode,de),j.return=oe,j;case xe:var ze=j._init;return Oe(oe,ze(j._payload),de)}if(C(j)||Te(j))return j=zr(j,oe.mode,de,null),j.return=oe,j;Ea(oe,j)}return null}function Ie(oe,j,de,ze){var nt=j!==null?j.key:null;if(typeof de=="string"&&de!==""||typeof de=="number")return nt!==null?null:N(oe,j,""+de,ze);if(typeof de=="object"&&de!==null){switch(de.$$typeof){case ne:return de.key===nt?H(oe,j,de,ze):null;case B:return de.key===nt?me(oe,j,de,ze):null;case xe:return nt=de._init,Ie(oe,j,nt(de._payload),ze)}if(C(de)||Te(de))return nt!==null?null:Ne(oe,j,de,ze,null);Ea(oe,de)}return null}function qe(oe,j,de,ze,nt){if(typeof ze=="string"&&ze!==""||typeof ze=="number")return oe=oe.get(de)||null,N(j,oe,""+ze,nt);if(typeof ze=="object"&&ze!==null){switch(ze.$$typeof){case ne:return oe=oe.get(ze.key===null?de:ze.key)||null,H(j,oe,ze,nt);case B:return oe=oe.get(ze.key===null?de:ze.key)||null,me(j,oe,ze,nt);case xe:var ot=ze._init;return qe(oe,j,de,ot(ze._payload),nt)}if(C(ze)||Te(ze))return oe=oe.get(de)||null,Ne(j,oe,ze,nt,null);Ea(j,ze)}return null}function Ze(oe,j,de,ze){for(var nt=null,ot=null,st=j,ct=j=0,sn=null;st!==null&&ct<de.length;ct++){st.index>ct?(sn=st,st=null):sn=st.sibling;var Tt=Ie(oe,st,de[ct],ze);if(Tt===null){st===null&&(st=sn);break}t&&st&&Tt.alternate===null&&i(oe,st),j=p(Tt,j,ct),ot===null?nt=Tt:ot.sibling=Tt,ot=Tt,st=sn}if(ct===de.length)return s(oe,st),Ht&&Lr(oe,ct),nt;if(st===null){for(;ct<de.length;ct++)st=Oe(oe,de[ct],ze),st!==null&&(j=p(st,j,ct),ot===null?nt=st:ot.sibling=st,ot=st);return Ht&&Lr(oe,ct),nt}for(st=l(oe,st);ct<de.length;ct++)sn=qe(st,oe,ct,de[ct],ze),sn!==null&&(t&&sn.alternate!==null&&st.delete(sn.key===null?ct:sn.key),j=p(sn,j,ct),ot===null?nt=sn:ot.sibling=sn,ot=sn);return t&&st.forEach(function(ur){return i(oe,ur)}),Ht&&Lr(oe,ct),nt}function et(oe,j,de,ze){var nt=Te(de);if(typeof nt!="function")throw Error(n(150));if(de=nt.call(de),de==null)throw Error(n(151));for(var ot=nt=null,st=j,ct=j=0,sn=null,Tt=de.next();st!==null&&!Tt.done;ct++,Tt=de.next()){st.index>ct?(sn=st,st=null):sn=st.sibling;var ur=Ie(oe,st,Tt.value,ze);if(ur===null){st===null&&(st=sn);break}t&&st&&ur.alternate===null&&i(oe,st),j=p(ur,j,ct),ot===null?nt=ur:ot.sibling=ur,ot=ur,st=sn}if(Tt.done)return s(oe,st),Ht&&Lr(oe,ct),nt;if(st===null){for(;!Tt.done;ct++,Tt=de.next())Tt=Oe(oe,Tt.value,ze),Tt!==null&&(j=p(Tt,j,ct),ot===null?nt=Tt:ot.sibling=Tt,ot=Tt);return Ht&&Lr(oe,ct),nt}for(st=l(oe,st);!Tt.done;ct++,Tt=de.next())Tt=qe(st,oe,ct,Tt.value,ze),Tt!==null&&(t&&Tt.alternate!==null&&st.delete(Tt.key===null?ct:Tt.key),j=p(Tt,j,ct),ot===null?nt=Tt:ot.sibling=Tt,ot=Tt);return t&&st.forEach(function(J0){return i(oe,J0)}),Ht&&Lr(oe,ct),nt}function jt(oe,j,de,ze){if(typeof de=="object"&&de!==null&&de.type===k&&de.key===null&&(de=de.props.children),typeof de=="object"&&de!==null){switch(de.$$typeof){case ne:e:{for(var nt=de.key,ot=j;ot!==null;){if(ot.key===nt){if(nt=de.type,nt===k){if(ot.tag===7){s(oe,ot.sibling),j=u(ot,de.props.children),j.return=oe,oe=j;break e}}else if(ot.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===xe&&qf(nt)===ot.type){s(oe,ot.sibling),j=u(ot,de.props),j.ref=Es(oe,ot,de),j.return=oe,oe=j;break e}s(oe,ot);break}else i(oe,ot);ot=ot.sibling}de.type===k?(j=zr(de.props.children,oe.mode,ze,de.key),j.return=oe,oe=j):(ze=Ya(de.type,de.key,de.props,null,oe.mode,ze),ze.ref=Es(oe,j,de),ze.return=oe,oe=ze)}return w(oe);case B:e:{for(ot=de.key;j!==null;){if(j.key===ot)if(j.tag===4&&j.stateNode.containerInfo===de.containerInfo&&j.stateNode.implementation===de.implementation){s(oe,j.sibling),j=u(j,de.children||[]),j.return=oe,oe=j;break e}else{s(oe,j);break}else i(oe,j);j=j.sibling}j=gu(de,oe.mode,ze),j.return=oe,oe=j}return w(oe);case xe:return ot=de._init,jt(oe,j,ot(de._payload),ze)}if(C(de))return Ze(oe,j,de,ze);if(Te(de))return et(oe,j,de,ze);Ea(oe,de)}return typeof de=="string"&&de!==""||typeof de=="number"?(de=""+de,j!==null&&j.tag===6?(s(oe,j.sibling),j=u(j,de),j.return=oe,oe=j):(s(oe,j),j=mu(de,oe.mode,ze),j.return=oe,oe=j),w(oe)):s(oe,j)}return jt}var go=$f(!0),Kf=$f(!1),wa=Ji(null),Ta=null,vo=null,Tc=null;function Ac(){Tc=vo=Ta=null}function Rc(t){var i=wa.current;kt(wa),t._currentValue=i}function bc(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function _o(t,i){Ta=t,Tc=vo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Pn=!0),t.firstContext=null)}function Yn(t){var i=t._currentValue;if(Tc!==t)if(t={context:t,memoizedValue:i,next:null},vo===null){if(Ta===null)throw Error(n(308));vo=t,Ta.dependencies={lanes:0,firstContext:t}}else vo=vo.next=t;return i}var Dr=null;function Cc(t){Dr===null?Dr=[t]:Dr.push(t)}function Zf(t,i,s,l){var u=i.interleaved;return u===null?(s.next=s,Cc(i)):(s.next=u.next,u.next=s),i.interleaved=s,bi(t,l)}function bi(t,i){t.lanes|=i;var s=t.alternate;for(s!==null&&(s.lanes|=i),s=t,t=t.return;t!==null;)t.childLanes|=i,s=t.alternate,s!==null&&(s.childLanes|=i),s=t,t=t.return;return s.tag===3?s.stateNode:null}var nr=!1;function Pc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ci(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function ir(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(St&2)!==0){var u=l.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),l.pending=i,bi(t,s)}return u=l.interleaved,u===null?(i.next=i,Cc(l)):(i.next=u.next,u.next=i),l.interleaved=i,bi(t,s)}function Aa(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,Wl(t,s)}}function Jf(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var u=null,p=null;if(s=s.firstBaseUpdate,s!==null){do{var w={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};p===null?u=p=w:p=p.next=w,s=s.next}while(s!==null);p===null?u=p=i:p=p.next=i}else u=p=i;s={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:p,shared:l.shared,effects:l.effects},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}function Ra(t,i,s,l){var u=t.updateQueue;nr=!1;var p=u.firstBaseUpdate,w=u.lastBaseUpdate,N=u.shared.pending;if(N!==null){u.shared.pending=null;var H=N,me=H.next;H.next=null,w===null?p=me:w.next=me,w=H;var Ne=t.alternate;Ne!==null&&(Ne=Ne.updateQueue,N=Ne.lastBaseUpdate,N!==w&&(N===null?Ne.firstBaseUpdate=me:N.next=me,Ne.lastBaseUpdate=H))}if(p!==null){var Oe=u.baseState;w=0,Ne=me=H=null,N=p;do{var Ie=N.lane,qe=N.eventTime;if((l&Ie)===Ie){Ne!==null&&(Ne=Ne.next={eventTime:qe,lane:0,tag:N.tag,payload:N.payload,callback:N.callback,next:null});e:{var Ze=t,et=N;switch(Ie=i,qe=s,et.tag){case 1:if(Ze=et.payload,typeof Ze=="function"){Oe=Ze.call(qe,Oe,Ie);break e}Oe=Ze;break e;case 3:Ze.flags=Ze.flags&-65537|128;case 0:if(Ze=et.payload,Ie=typeof Ze=="function"?Ze.call(qe,Oe,Ie):Ze,Ie==null)break e;Oe=ge({},Oe,Ie);break e;case 2:nr=!0}}N.callback!==null&&N.lane!==0&&(t.flags|=64,Ie=u.effects,Ie===null?u.effects=[N]:Ie.push(N))}else qe={eventTime:qe,lane:Ie,tag:N.tag,payload:N.payload,callback:N.callback,next:null},Ne===null?(me=Ne=qe,H=Oe):Ne=Ne.next=qe,w|=Ie;if(N=N.next,N===null){if(N=u.shared.pending,N===null)break;Ie=N,N=Ie.next,Ie.next=null,u.lastBaseUpdate=Ie,u.shared.pending=null}}while(!0);if(Ne===null&&(H=Oe),u.baseState=H,u.firstBaseUpdate=me,u.lastBaseUpdate=Ne,i=u.shared.interleaved,i!==null){u=i;do w|=u.lane,u=u.next;while(u!==i)}else p===null&&(u.shared.lanes=0);Ur|=w,t.lanes=w,t.memoizedState=Oe}}function eh(t,i,s){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],u=l.callback;if(u!==null){if(l.callback=null,l=s,typeof u!="function")throw Error(n(191,u));u.call(l)}}}var ws={},pi=Ji(ws),Ts=Ji(ws),As=Ji(ws);function Ir(t){if(t===ws)throw Error(n(174));return t}function Lc(t,i){switch(Ut(As,i),Ut(Ts,t),Ut(pi,ws),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:De(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=De(i,t)}kt(pi),Ut(pi,i)}function xo(){kt(pi),kt(Ts),kt(As)}function th(t){Ir(As.current);var i=Ir(pi.current),s=De(i,t.type);i!==s&&(Ut(Ts,t),Ut(pi,s))}function Dc(t){Ts.current===t&&(kt(pi),kt(Ts))}var Gt=Ji(0);function ba(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Ic=[];function Nc(){for(var t=0;t<Ic.length;t++)Ic[t]._workInProgressVersionPrimary=null;Ic.length=0}var Ca=D.ReactCurrentDispatcher,Uc=D.ReactCurrentBatchConfig,Nr=0,Wt=null,Zt=null,rn=null,Pa=!1,Rs=!1,bs=0,S0=0;function pn(){throw Error(n(321))}function Oc(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!ni(t[s],i[s]))return!1;return!0}function Fc(t,i,s,l,u,p){if(Nr=p,Wt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ca.current=t===null||t.memoizedState===null?T0:A0,t=s(l,u),Rs){p=0;do{if(Rs=!1,bs=0,25<=p)throw Error(n(301));p+=1,rn=Zt=null,i.updateQueue=null,Ca.current=R0,t=s(l,u)}while(Rs)}if(Ca.current=Ia,i=Zt!==null&&Zt.next!==null,Nr=0,rn=Zt=Wt=null,Pa=!1,i)throw Error(n(300));return t}function kc(){var t=bs!==0;return bs=0,t}function mi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rn===null?Wt.memoizedState=rn=t:rn=rn.next=t,rn}function qn(){if(Zt===null){var t=Wt.alternate;t=t!==null?t.memoizedState:null}else t=Zt.next;var i=rn===null?Wt.memoizedState:rn.next;if(i!==null)rn=i,Zt=t;else{if(t===null)throw Error(n(310));Zt=t,t={memoizedState:Zt.memoizedState,baseState:Zt.baseState,baseQueue:Zt.baseQueue,queue:Zt.queue,next:null},rn===null?Wt.memoizedState=rn=t:rn=rn.next=t}return rn}function Cs(t,i){return typeof i=="function"?i(t):i}function zc(t){var i=qn(),s=i.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=t;var l=Zt,u=l.baseQueue,p=s.pending;if(p!==null){if(u!==null){var w=u.next;u.next=p.next,p.next=w}l.baseQueue=u=p,s.pending=null}if(u!==null){p=u.next,l=l.baseState;var N=w=null,H=null,me=p;do{var Ne=me.lane;if((Nr&Ne)===Ne)H!==null&&(H=H.next={lane:0,action:me.action,hasEagerState:me.hasEagerState,eagerState:me.eagerState,next:null}),l=me.hasEagerState?me.eagerState:t(l,me.action);else{var Oe={lane:Ne,action:me.action,hasEagerState:me.hasEagerState,eagerState:me.eagerState,next:null};H===null?(N=H=Oe,w=l):H=H.next=Oe,Wt.lanes|=Ne,Ur|=Ne}me=me.next}while(me!==null&&me!==p);H===null?w=l:H.next=N,ni(l,i.memoizedState)||(Pn=!0),i.memoizedState=l,i.baseState=w,i.baseQueue=H,s.lastRenderedState=l}if(t=s.interleaved,t!==null){u=t;do p=u.lane,Wt.lanes|=p,Ur|=p,u=u.next;while(u!==t)}else u===null&&(s.lanes=0);return[i.memoizedState,s.dispatch]}function Bc(t){var i=qn(),s=i.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=t;var l=s.dispatch,u=s.pending,p=i.memoizedState;if(u!==null){s.pending=null;var w=u=u.next;do p=t(p,w.action),w=w.next;while(w!==u);ni(p,i.memoizedState)||(Pn=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),s.lastRenderedState=p}return[p,l]}function nh(){}function ih(t,i){var s=Wt,l=qn(),u=i(),p=!ni(l.memoizedState,u);if(p&&(l.memoizedState=u,Pn=!0),l=l.queue,Hc(sh.bind(null,s,l,t),[t]),l.getSnapshot!==i||p||rn!==null&&rn.memoizedState.tag&1){if(s.flags|=2048,Ps(9,oh.bind(null,s,l,u,i),void 0,null),on===null)throw Error(n(349));(Nr&30)!==0||rh(s,i,u)}return u}function rh(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=Wt.updateQueue,i===null?(i={lastEffect:null,stores:null},Wt.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function oh(t,i,s,l){i.value=s,i.getSnapshot=l,ah(i)&&lh(t)}function sh(t,i,s){return s(function(){ah(i)&&lh(t)})}function ah(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!ni(t,s)}catch{return!0}}function lh(t){var i=bi(t,1);i!==null&&ai(i,t,1,-1)}function ch(t){var i=mi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Cs,lastRenderedState:t},i.queue=t,t=t.dispatch=w0.bind(null,Wt,t),[i.memoizedState,t]}function Ps(t,i,s,l){return t={tag:t,create:i,destroy:s,deps:l,next:null},i=Wt.updateQueue,i===null?(i={lastEffect:null,stores:null},Wt.updateQueue=i,i.lastEffect=t.next=t):(s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t)),t}function uh(){return qn().memoizedState}function La(t,i,s,l){var u=mi();Wt.flags|=t,u.memoizedState=Ps(1|i,s,void 0,l===void 0?null:l)}function Da(t,i,s,l){var u=qn();l=l===void 0?null:l;var p=void 0;if(Zt!==null){var w=Zt.memoizedState;if(p=w.destroy,l!==null&&Oc(l,w.deps)){u.memoizedState=Ps(i,s,p,l);return}}Wt.flags|=t,u.memoizedState=Ps(1|i,s,p,l)}function dh(t,i){return La(8390656,8,t,i)}function Hc(t,i){return Da(2048,8,t,i)}function fh(t,i){return Da(4,2,t,i)}function hh(t,i){return Da(4,4,t,i)}function ph(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function mh(t,i,s){return s=s!=null?s.concat([t]):null,Da(4,4,ph.bind(null,i,t),s)}function Vc(){}function gh(t,i){var s=qn();i=i===void 0?null:i;var l=s.memoizedState;return l!==null&&i!==null&&Oc(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function vh(t,i){var s=qn();i=i===void 0?null:i;var l=s.memoizedState;return l!==null&&i!==null&&Oc(i,l[1])?l[0]:(t=t(),s.memoizedState=[t,i],t)}function _h(t,i,s){return(Nr&21)===0?(t.baseState&&(t.baseState=!1,Pn=!0),t.memoizedState=s):(ni(s,i)||(s=ea(),Wt.lanes|=s,Ur|=s,t.baseState=!0),i)}function M0(t,i){var s=Ct;Ct=s!==0&&4>s?s:4,t(!0);var l=Uc.transition;Uc.transition={};try{t(!1),i()}finally{Ct=s,Uc.transition=l}}function xh(){return qn().memoizedState}function E0(t,i,s){var l=ar(t);if(s={lane:l,action:s,hasEagerState:!1,eagerState:null,next:null},yh(t))Sh(i,s);else if(s=Zf(t,i,s,l),s!==null){var u=Sn();ai(s,t,l,u),Mh(s,i,l)}}function w0(t,i,s){var l=ar(t),u={lane:l,action:s,hasEagerState:!1,eagerState:null,next:null};if(yh(t))Sh(i,u);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var w=i.lastRenderedState,N=p(w,s);if(u.hasEagerState=!0,u.eagerState=N,ni(N,w)){var H=i.interleaved;H===null?(u.next=u,Cc(i)):(u.next=H.next,H.next=u),i.interleaved=u;return}}catch{}finally{}s=Zf(t,i,u,l),s!==null&&(u=Sn(),ai(s,t,l,u),Mh(s,i,l))}}function yh(t){var i=t.alternate;return t===Wt||i!==null&&i===Wt}function Sh(t,i){Rs=Pa=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function Mh(t,i,s){if((s&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,Wl(t,s)}}var Ia={readContext:Yn,useCallback:pn,useContext:pn,useEffect:pn,useImperativeHandle:pn,useInsertionEffect:pn,useLayoutEffect:pn,useMemo:pn,useReducer:pn,useRef:pn,useState:pn,useDebugValue:pn,useDeferredValue:pn,useTransition:pn,useMutableSource:pn,useSyncExternalStore:pn,useId:pn,unstable_isNewReconciler:!1},T0={readContext:Yn,useCallback:function(t,i){return mi().memoizedState=[t,i===void 0?null:i],t},useContext:Yn,useEffect:dh,useImperativeHandle:function(t,i,s){return s=s!=null?s.concat([t]):null,La(4194308,4,ph.bind(null,i,t),s)},useLayoutEffect:function(t,i){return La(4194308,4,t,i)},useInsertionEffect:function(t,i){return La(4,2,t,i)},useMemo:function(t,i){var s=mi();return i=i===void 0?null:i,t=t(),s.memoizedState=[t,i],t},useReducer:function(t,i,s){var l=mi();return i=s!==void 0?s(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=E0.bind(null,Wt,t),[l.memoizedState,t]},useRef:function(t){var i=mi();return t={current:t},i.memoizedState=t},useState:ch,useDebugValue:Vc,useDeferredValue:function(t){return mi().memoizedState=t},useTransition:function(){var t=ch(!1),i=t[0];return t=M0.bind(null,t[1]),mi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,s){var l=Wt,u=mi();if(Ht){if(s===void 0)throw Error(n(407));s=s()}else{if(s=i(),on===null)throw Error(n(349));(Nr&30)!==0||rh(l,i,s)}u.memoizedState=s;var p={value:s,getSnapshot:i};return u.queue=p,dh(sh.bind(null,l,p,t),[t]),l.flags|=2048,Ps(9,oh.bind(null,l,p,s,i),void 0,null),s},useId:function(){var t=mi(),i=on.identifierPrefix;if(Ht){var s=Ri,l=Ai;s=(l&~(1<<32-bt(l)-1)).toString(32)+s,i=":"+i+"R"+s,s=bs++,0<s&&(i+="H"+s.toString(32)),i+=":"}else s=S0++,i=":"+i+"r"+s.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},A0={readContext:Yn,useCallback:gh,useContext:Yn,useEffect:Hc,useImperativeHandle:mh,useInsertionEffect:fh,useLayoutEffect:hh,useMemo:vh,useReducer:zc,useRef:uh,useState:function(){return zc(Cs)},useDebugValue:Vc,useDeferredValue:function(t){var i=qn();return _h(i,Zt.memoizedState,t)},useTransition:function(){var t=zc(Cs)[0],i=qn().memoizedState;return[t,i]},useMutableSource:nh,useSyncExternalStore:ih,useId:xh,unstable_isNewReconciler:!1},R0={readContext:Yn,useCallback:gh,useContext:Yn,useEffect:Hc,useImperativeHandle:mh,useInsertionEffect:fh,useLayoutEffect:hh,useMemo:vh,useReducer:Bc,useRef:uh,useState:function(){return Bc(Cs)},useDebugValue:Vc,useDeferredValue:function(t){var i=qn();return Zt===null?i.memoizedState=t:_h(i,Zt.memoizedState,t)},useTransition:function(){var t=Bc(Cs)[0],i=qn().memoizedState;return[t,i]},useMutableSource:nh,useSyncExternalStore:ih,useId:xh,unstable_isNewReconciler:!1};function ri(t,i){if(t&&t.defaultProps){i=ge({},i),t=t.defaultProps;for(var s in t)i[s]===void 0&&(i[s]=t[s]);return i}return i}function Gc(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:ge({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Na={isMounted:function(t){return(t=t._reactInternals)?Ei(t)===t:!1},enqueueSetState:function(t,i,s){t=t._reactInternals;var l=Sn(),u=ar(t),p=Ci(l,u);p.payload=i,s!=null&&(p.callback=s),i=ir(t,p,u),i!==null&&(ai(i,t,u,l),Aa(i,t,u))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=Sn(),u=ar(t),p=Ci(l,u);p.tag=1,p.payload=i,s!=null&&(p.callback=s),i=ir(t,p,u),i!==null&&(ai(i,t,u,l),Aa(i,t,u))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=Sn(),l=ar(t),u=Ci(s,l);u.tag=2,i!=null&&(u.callback=i),i=ir(t,u,l),i!==null&&(ai(i,t,l,s),Aa(i,t,l))}};function Eh(t,i,s,l,u,p,w){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,p,w):i.prototype&&i.prototype.isPureReactComponent?!gs(s,l)||!gs(u,p):!0}function wh(t,i,s){var l=!1,u=er,p=i.contextType;return typeof p=="object"&&p!==null?p=Yn(p):(u=Cn(i)?Cr:hn.current,l=i.contextTypes,p=(l=l!=null)?fo(t,u):er),i=new i(s,p),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Na,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=u,t.__reactInternalMemoizedMaskedChildContext=p),i}function Th(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&Na.enqueueReplaceState(i,i.state,null)}function Wc(t,i,s,l){var u=t.stateNode;u.props=s,u.state=t.memoizedState,u.refs={},Pc(t);var p=i.contextType;typeof p=="object"&&p!==null?u.context=Yn(p):(p=Cn(i)?Cr:hn.current,u.context=fo(t,p)),u.state=t.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(Gc(t,i,p,s),u.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(i=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),i!==u.state&&Na.enqueueReplaceState(u,u.state,null),Ra(t,s,u,l),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308)}function yo(t,i){try{var s="",l=i;do s+=Ee(l),l=l.return;while(l);var u=s}catch(p){u=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:i,stack:u,digest:null}}function Xc(t,i,s){return{value:t,source:null,stack:s??null,digest:i??null}}function jc(t,i){try{console.error(i.value)}catch(s){setTimeout(function(){throw s})}}var b0=typeof WeakMap=="function"?WeakMap:Map;function Ah(t,i,s){s=Ci(-1,s),s.tag=3,s.payload={element:null};var l=i.value;return s.callback=function(){Ha||(Ha=!0,au=l),jc(t,i)},s}function Rh(t,i,s){s=Ci(-1,s),s.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var u=i.value;s.payload=function(){return l(u)},s.callback=function(){jc(t,i)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(s.callback=function(){jc(t,i),typeof l!="function"&&(or===null?or=new Set([this]):or.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})}),s}function bh(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new b0;var u=new Set;l.set(i,u)}else u=l.get(i),u===void 0&&(u=new Set,l.set(i,u));u.has(s)||(u.add(s),t=V0.bind(null,t,i,s),i.then(t,t))}function Ch(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Ph(t,i,s,l,u){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(i=Ci(-1,1),i.tag=2,ir(s,i,1))),s.lanes|=1),t):(t.flags|=65536,t.lanes=u,t)}var C0=D.ReactCurrentOwner,Pn=!1;function yn(t,i,s,l){i.child=t===null?Kf(i,null,s,l):go(i,t.child,s,l)}function Lh(t,i,s,l,u){s=s.render;var p=i.ref;return _o(i,u),l=Fc(t,i,s,l,p,u),s=kc(),t!==null&&!Pn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~u,Pi(t,i,u)):(Ht&&s&&yc(i),i.flags|=1,yn(t,i,l,u),i.child)}function Dh(t,i,s,l,u){if(t===null){var p=s.type;return typeof p=="function"&&!pu(p)&&p.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(i.tag=15,i.type=p,Ih(t,i,p,l,u)):(t=Ya(s.type,null,l,i,i.mode,u),t.ref=i.ref,t.return=i,i.child=t)}if(p=t.child,(t.lanes&u)===0){var w=p.memoizedProps;if(s=s.compare,s=s!==null?s:gs,s(w,l)&&t.ref===i.ref)return Pi(t,i,u)}return i.flags|=1,t=cr(p,l),t.ref=i.ref,t.return=i,i.child=t}function Ih(t,i,s,l,u){if(t!==null){var p=t.memoizedProps;if(gs(p,l)&&t.ref===i.ref)if(Pn=!1,i.pendingProps=l=p,(t.lanes&u)!==0)(t.flags&131072)!==0&&(Pn=!0);else return i.lanes=t.lanes,Pi(t,i,u)}return Yc(t,i,s,l,u)}function Nh(t,i,s){var l=i.pendingProps,u=l.children,p=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ut(Mo,Bn),Bn|=s;else{if((s&1073741824)===0)return t=p!==null?p.baseLanes|s:s,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Ut(Mo,Bn),Bn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=p!==null?p.baseLanes:s,Ut(Mo,Bn),Bn|=l}else p!==null?(l=p.baseLanes|s,i.memoizedState=null):l=s,Ut(Mo,Bn),Bn|=l;return yn(t,i,u,s),i.child}function Uh(t,i){var s=i.ref;(t===null&&s!==null||t!==null&&t.ref!==s)&&(i.flags|=512,i.flags|=2097152)}function Yc(t,i,s,l,u){var p=Cn(s)?Cr:hn.current;return p=fo(i,p),_o(i,u),s=Fc(t,i,s,l,p,u),l=kc(),t!==null&&!Pn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~u,Pi(t,i,u)):(Ht&&l&&yc(i),i.flags|=1,yn(t,i,s,u),i.child)}function Oh(t,i,s,l,u){if(Cn(s)){var p=!0;_a(i)}else p=!1;if(_o(i,u),i.stateNode===null)Oa(t,i),wh(i,s,l),Wc(i,s,l,u),l=!0;else if(t===null){var w=i.stateNode,N=i.memoizedProps;w.props=N;var H=w.context,me=s.contextType;typeof me=="object"&&me!==null?me=Yn(me):(me=Cn(s)?Cr:hn.current,me=fo(i,me));var Ne=s.getDerivedStateFromProps,Oe=typeof Ne=="function"||typeof w.getSnapshotBeforeUpdate=="function";Oe||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(N!==l||H!==me)&&Th(i,w,l,me),nr=!1;var Ie=i.memoizedState;w.state=Ie,Ra(i,l,w,u),H=i.memoizedState,N!==l||Ie!==H||bn.current||nr?(typeof Ne=="function"&&(Gc(i,s,Ne,l),H=i.memoizedState),(N=nr||Eh(i,s,N,l,Ie,H,me))?(Oe||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(i.flags|=4194308)):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=H),w.props=l,w.state=H,w.context=me,l=N):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{w=i.stateNode,Qf(t,i),N=i.memoizedProps,me=i.type===i.elementType?N:ri(i.type,N),w.props=me,Oe=i.pendingProps,Ie=w.context,H=s.contextType,typeof H=="object"&&H!==null?H=Yn(H):(H=Cn(s)?Cr:hn.current,H=fo(i,H));var qe=s.getDerivedStateFromProps;(Ne=typeof qe=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(N!==Oe||Ie!==H)&&Th(i,w,l,H),nr=!1,Ie=i.memoizedState,w.state=Ie,Ra(i,l,w,u);var Ze=i.memoizedState;N!==Oe||Ie!==Ze||bn.current||nr?(typeof qe=="function"&&(Gc(i,s,qe,l),Ze=i.memoizedState),(me=nr||Eh(i,s,me,l,Ie,Ze,H)||!1)?(Ne||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(l,Ze,H),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(l,Ze,H)),typeof w.componentDidUpdate=="function"&&(i.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof w.componentDidUpdate!="function"||N===t.memoizedProps&&Ie===t.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||N===t.memoizedProps&&Ie===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=Ze),w.props=l,w.state=Ze,w.context=H,l=me):(typeof w.componentDidUpdate!="function"||N===t.memoizedProps&&Ie===t.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||N===t.memoizedProps&&Ie===t.memoizedState||(i.flags|=1024),l=!1)}return qc(t,i,s,l,p,u)}function qc(t,i,s,l,u,p){Uh(t,i);var w=(i.flags&128)!==0;if(!l&&!w)return u&&Hf(i,s,!1),Pi(t,i,p);l=i.stateNode,C0.current=i;var N=w&&typeof s.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&w?(i.child=go(i,t.child,null,p),i.child=go(i,null,N,p)):yn(t,i,N,p),i.memoizedState=l.state,u&&Hf(i,s,!0),i.child}function Fh(t){var i=t.stateNode;i.pendingContext?zf(t,i.pendingContext,i.pendingContext!==i.context):i.context&&zf(t,i.context,!1),Lc(t,i.containerInfo)}function kh(t,i,s,l,u){return mo(),wc(u),i.flags|=256,yn(t,i,s,l),i.child}var $c={dehydrated:null,treeContext:null,retryLane:0};function Kc(t){return{baseLanes:t,cachePool:null,transitions:null}}function zh(t,i,s){var l=i.pendingProps,u=Gt.current,p=!1,w=(i.flags&128)!==0,N;if((N=w)||(N=t!==null&&t.memoizedState===null?!1:(u&2)!==0),N?(p=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(u|=1),Ut(Gt,u&1),t===null)return Ec(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(w=l.children,t=l.fallback,p?(l=i.mode,p=i.child,w={mode:"hidden",children:w},(l&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=w):p=qa(w,l,0,null),t=zr(t,l,s,null),p.return=i,t.return=i,p.sibling=t,i.child=p,i.child.memoizedState=Kc(s),i.memoizedState=$c,t):Zc(i,w));if(u=t.memoizedState,u!==null&&(N=u.dehydrated,N!==null))return P0(t,i,w,l,N,u,s);if(p){p=l.fallback,w=i.mode,u=t.child,N=u.sibling;var H={mode:"hidden",children:l.children};return(w&1)===0&&i.child!==u?(l=i.child,l.childLanes=0,l.pendingProps=H,i.deletions=null):(l=cr(u,H),l.subtreeFlags=u.subtreeFlags&14680064),N!==null?p=cr(N,p):(p=zr(p,w,s,null),p.flags|=2),p.return=i,l.return=i,l.sibling=p,i.child=l,l=p,p=i.child,w=t.child.memoizedState,w=w===null?Kc(s):{baseLanes:w.baseLanes|s,cachePool:null,transitions:w.transitions},p.memoizedState=w,p.childLanes=t.childLanes&~s,i.memoizedState=$c,l}return p=t.child,t=p.sibling,l=cr(p,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=s),l.return=i,l.sibling=null,t!==null&&(s=i.deletions,s===null?(i.deletions=[t],i.flags|=16):s.push(t)),i.child=l,i.memoizedState=null,l}function Zc(t,i){return i=qa({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Ua(t,i,s,l){return l!==null&&wc(l),go(i,t.child,null,s),t=Zc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function P0(t,i,s,l,u,p,w){if(s)return i.flags&256?(i.flags&=-257,l=Xc(Error(n(422))),Ua(t,i,w,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(p=l.fallback,u=i.mode,l=qa({mode:"visible",children:l.children},u,0,null),p=zr(p,u,w,null),p.flags|=2,l.return=i,p.return=i,l.sibling=p,i.child=l,(i.mode&1)!==0&&go(i,t.child,null,w),i.child.memoizedState=Kc(w),i.memoizedState=$c,p);if((i.mode&1)===0)return Ua(t,i,w,null);if(u.data==="$!"){if(l=u.nextSibling&&u.nextSibling.dataset,l)var N=l.dgst;return l=N,p=Error(n(419)),l=Xc(p,l,void 0),Ua(t,i,w,l)}if(N=(w&t.childLanes)!==0,Pn||N){if(l=on,l!==null){switch(w&-w){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=(u&(l.suspendedLanes|w))!==0?0:u,u!==0&&u!==p.retryLane&&(p.retryLane=u,bi(t,u),ai(l,t,u,-1))}return hu(),l=Xc(Error(n(421))),Ua(t,i,w,l)}return u.data==="$?"?(i.flags|=128,i.child=t.child,i=G0.bind(null,t),u._reactRetry=i,null):(t=p.treeContext,zn=Qi(u.nextSibling),kn=i,Ht=!0,ii=null,t!==null&&(Xn[jn++]=Ai,Xn[jn++]=Ri,Xn[jn++]=Pr,Ai=t.id,Ri=t.overflow,Pr=i),i=Zc(i,l.children),i.flags|=4096,i)}function Bh(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),bc(t.return,i,s)}function Qc(t,i,s,l,u){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:u}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=l,p.tail=s,p.tailMode=u)}function Hh(t,i,s){var l=i.pendingProps,u=l.revealOrder,p=l.tail;if(yn(t,i,l.children,s),l=Gt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Bh(t,s,i);else if(t.tag===19)Bh(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Ut(Gt,l),(i.mode&1)===0)i.memoizedState=null;else switch(u){case"forwards":for(s=i.child,u=null;s!==null;)t=s.alternate,t!==null&&ba(t)===null&&(u=s),s=s.sibling;s=u,s===null?(u=i.child,i.child=null):(u=s.sibling,s.sibling=null),Qc(i,!1,u,s,p);break;case"backwards":for(s=null,u=i.child,i.child=null;u!==null;){if(t=u.alternate,t!==null&&ba(t)===null){i.child=u;break}t=u.sibling,u.sibling=s,s=u,u=t}Qc(i,!0,s,null,p);break;case"together":Qc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Oa(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Pi(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),Ur|=i.lanes,(s&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,s=cr(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=cr(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function L0(t,i,s){switch(i.tag){case 3:Fh(i),mo();break;case 5:th(i);break;case 1:Cn(i.type)&&_a(i);break;case 4:Lc(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,u=i.memoizedProps.value;Ut(wa,l._currentValue),l._currentValue=u;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Ut(Gt,Gt.current&1),i.flags|=128,null):(s&i.child.childLanes)!==0?zh(t,i,s):(Ut(Gt,Gt.current&1),t=Pi(t,i,s),t!==null?t.sibling:null);Ut(Gt,Gt.current&1);break;case 19:if(l=(s&i.childLanes)!==0,(t.flags&128)!==0){if(l)return Hh(t,i,s);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Ut(Gt,Gt.current),l)break;return null;case 22:case 23:return i.lanes=0,Nh(t,i,s)}return Pi(t,i,s)}var Vh,Jc,Gh,Wh;Vh=function(t,i){for(var s=i.child;s!==null;){if(s.tag===5||s.tag===6)t.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},Jc=function(){},Gh=function(t,i,s,l){var u=t.memoizedProps;if(u!==l){t=i.stateNode,Ir(pi.current);var p=null;switch(s){case"input":u=ut(t,u),l=ut(t,l),p=[];break;case"select":u=ge({},u,{value:void 0}),l=ge({},l,{value:void 0}),p=[];break;case"textarea":u=Y(t,u),l=Y(t,l),p=[];break;default:typeof u.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=ma)}fe(s,l);var w;s=null;for(me in u)if(!l.hasOwnProperty(me)&&u.hasOwnProperty(me)&&u[me]!=null)if(me==="style"){var N=u[me];for(w in N)N.hasOwnProperty(w)&&(s||(s={}),s[w]="")}else me!=="dangerouslySetInnerHTML"&&me!=="children"&&me!=="suppressContentEditableWarning"&&me!=="suppressHydrationWarning"&&me!=="autoFocus"&&(a.hasOwnProperty(me)?p||(p=[]):(p=p||[]).push(me,null));for(me in l){var H=l[me];if(N=u!=null?u[me]:void 0,l.hasOwnProperty(me)&&H!==N&&(H!=null||N!=null))if(me==="style")if(N){for(w in N)!N.hasOwnProperty(w)||H&&H.hasOwnProperty(w)||(s||(s={}),s[w]="");for(w in H)H.hasOwnProperty(w)&&N[w]!==H[w]&&(s||(s={}),s[w]=H[w])}else s||(p||(p=[]),p.push(me,s)),s=H;else me==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,N=N?N.__html:void 0,H!=null&&N!==H&&(p=p||[]).push(me,H)):me==="children"?typeof H!="string"&&typeof H!="number"||(p=p||[]).push(me,""+H):me!=="suppressContentEditableWarning"&&me!=="suppressHydrationWarning"&&(a.hasOwnProperty(me)?(H!=null&&me==="onScroll"&&Ft("scroll",t),p||N===H||(p=[])):(p=p||[]).push(me,H))}s&&(p=p||[]).push("style",s);var me=p;(i.updateQueue=me)&&(i.flags|=4)}},Wh=function(t,i,s,l){s!==l&&(i.flags|=4)};function Ls(t,i){if(!Ht)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function mn(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var u=t.child;u!==null;)s|=u.lanes|u.childLanes,l|=u.subtreeFlags&14680064,l|=u.flags&14680064,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)s|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function D0(t,i,s){var l=i.pendingProps;switch(Sc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mn(i),null;case 1:return Cn(i.type)&&va(),mn(i),null;case 3:return l=i.stateNode,xo(),kt(bn),kt(hn),Nc(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Ma(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ii!==null&&(uu(ii),ii=null))),Jc(t,i),mn(i),null;case 5:Dc(i);var u=Ir(As.current);if(s=i.type,t!==null&&i.stateNode!=null)Gh(t,i,s,l,u),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return mn(i),null}if(t=Ir(pi.current),Ma(i)){l=i.stateNode,s=i.type;var p=i.memoizedProps;switch(l[hi]=i,l[Ss]=p,t=(i.mode&1)!==0,s){case"dialog":Ft("cancel",l),Ft("close",l);break;case"iframe":case"object":case"embed":Ft("load",l);break;case"video":case"audio":for(u=0;u<_s.length;u++)Ft(_s[u],l);break;case"source":Ft("error",l);break;case"img":case"image":case"link":Ft("error",l),Ft("load",l);break;case"details":Ft("toggle",l);break;case"input":ft(l,p),Ft("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!p.multiple},Ft("invalid",l);break;case"textarea":ie(l,p),Ft("invalid",l)}fe(s,p),u=null;for(var w in p)if(p.hasOwnProperty(w)){var N=p[w];w==="children"?typeof N=="string"?l.textContent!==N&&(p.suppressHydrationWarning!==!0&&pa(l.textContent,N,t),u=["children",N]):typeof N=="number"&&l.textContent!==""+N&&(p.suppressHydrationWarning!==!0&&pa(l.textContent,N,t),u=["children",""+N]):a.hasOwnProperty(w)&&N!=null&&w==="onScroll"&&Ft("scroll",l)}switch(s){case"input":_t(l),ye(l,p,!0);break;case"textarea":_t(l),Ae(l);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(l.onclick=ma)}l=u,i.updateQueue=l,l!==null&&(i.flags|=4)}else{w=u.nodeType===9?u:u.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ge(s)),t==="http://www.w3.org/1999/xhtml"?s==="script"?(t=w.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=w.createElement(s,{is:l.is}):(t=w.createElement(s),s==="select"&&(w=t,l.multiple?w.multiple=!0:l.size&&(w.size=l.size))):t=w.createElementNS(t,s),t[hi]=i,t[Ss]=l,Vh(t,i,!1,!1),i.stateNode=t;e:{switch(w=ue(s,l),s){case"dialog":Ft("cancel",t),Ft("close",t),u=l;break;case"iframe":case"object":case"embed":Ft("load",t),u=l;break;case"video":case"audio":for(u=0;u<_s.length;u++)Ft(_s[u],t);u=l;break;case"source":Ft("error",t),u=l;break;case"img":case"image":case"link":Ft("error",t),Ft("load",t),u=l;break;case"details":Ft("toggle",t),u=l;break;case"input":ft(t,l),u=ut(t,l),Ft("invalid",t);break;case"option":u=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},u=ge({},l,{value:void 0}),Ft("invalid",t);break;case"textarea":ie(t,l),u=Y(t,l),Ft("invalid",t);break;default:u=l}fe(s,u),N=u;for(p in N)if(N.hasOwnProperty(p)){var H=N[p];p==="style"?V(t,H):p==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&re(t,H)):p==="children"?typeof H=="string"?(s!=="textarea"||H!=="")&&ae(t,H):typeof H=="number"&&ae(t,""+H):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(a.hasOwnProperty(p)?H!=null&&p==="onScroll"&&Ft("scroll",t):H!=null&&P(t,p,H,w))}switch(s){case"input":_t(t),ye(t,l,!1);break;case"textarea":_t(t),Ae(t);break;case"option":l.value!=null&&t.setAttribute("value",""+Ve(l.value));break;case"select":t.multiple=!!l.multiple,p=l.value,p!=null?E(t,!!l.multiple,p,!1):l.defaultValue!=null&&E(t,!!l.multiple,l.defaultValue,!0);break;default:typeof u.onClick=="function"&&(t.onclick=ma)}switch(s){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return mn(i),null;case 6:if(t&&i.stateNode!=null)Wh(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(s=Ir(As.current),Ir(pi.current),Ma(i)){if(l=i.stateNode,s=i.memoizedProps,l[hi]=i,(p=l.nodeValue!==s)&&(t=kn,t!==null))switch(t.tag){case 3:pa(l.nodeValue,s,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&pa(l.nodeValue,s,(t.mode&1)!==0)}p&&(i.flags|=4)}else l=(s.nodeType===9?s:s.ownerDocument).createTextNode(l),l[hi]=i,i.stateNode=l}return mn(i),null;case 13:if(kt(Gt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ht&&zn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Yf(),mo(),i.flags|=98560,p=!1;else if(p=Ma(i),l!==null&&l.dehydrated!==null){if(t===null){if(!p)throw Error(n(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(n(317));p[hi]=i}else mo(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;mn(i),p=!1}else ii!==null&&(uu(ii),ii=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=s,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Gt.current&1)!==0?Qt===0&&(Qt=3):hu())),i.updateQueue!==null&&(i.flags|=4),mn(i),null);case 4:return xo(),Jc(t,i),t===null&&xs(i.stateNode.containerInfo),mn(i),null;case 10:return Rc(i.type._context),mn(i),null;case 17:return Cn(i.type)&&va(),mn(i),null;case 19:if(kt(Gt),p=i.memoizedState,p===null)return mn(i),null;if(l=(i.flags&128)!==0,w=p.rendering,w===null)if(l)Ls(p,!1);else{if(Qt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(w=ba(t),w!==null){for(i.flags|=128,Ls(p,!1),l=w.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=s,s=i.child;s!==null;)p=s,t=l,p.flags&=14680066,w=p.alternate,w===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=w.childLanes,p.lanes=w.lanes,p.child=w.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=w.memoizedProps,p.memoizedState=w.memoizedState,p.updateQueue=w.updateQueue,p.type=w.type,t=w.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),s=s.sibling;return Ut(Gt,Gt.current&1|2),i.child}t=t.sibling}p.tail!==null&&He()>Eo&&(i.flags|=128,l=!0,Ls(p,!1),i.lanes=4194304)}else{if(!l)if(t=ba(w),t!==null){if(i.flags|=128,l=!0,s=t.updateQueue,s!==null&&(i.updateQueue=s,i.flags|=4),Ls(p,!0),p.tail===null&&p.tailMode==="hidden"&&!w.alternate&&!Ht)return mn(i),null}else 2*He()-p.renderingStartTime>Eo&&s!==1073741824&&(i.flags|=128,l=!0,Ls(p,!1),i.lanes=4194304);p.isBackwards?(w.sibling=i.child,i.child=w):(s=p.last,s!==null?s.sibling=w:i.child=w,p.last=w)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=He(),i.sibling=null,s=Gt.current,Ut(Gt,l?s&1|2:s&1),i):(mn(i),null);case 22:case 23:return fu(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(Bn&1073741824)!==0&&(mn(i),i.subtreeFlags&6&&(i.flags|=8192)):mn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function I0(t,i){switch(Sc(i),i.tag){case 1:return Cn(i.type)&&va(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return xo(),kt(bn),kt(hn),Nc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Dc(i),null;case 13:if(kt(Gt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));mo()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return kt(Gt),null;case 4:return xo(),null;case 10:return Rc(i.type._context),null;case 22:case 23:return fu(),null;case 24:return null;default:return null}}var Fa=!1,gn=!1,N0=typeof WeakSet=="function"?WeakSet:Set,Ke=null;function So(t,i){var s=t.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(l){Xt(t,i,l)}else s.current=null}function eu(t,i,s){try{s()}catch(l){Xt(t,i,l)}}var Xh=!1;function U0(t,i){if(fc=ia,t=Ef(),rc(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var u=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{s.nodeType,p.nodeType}catch{s=null;break e}var w=0,N=-1,H=-1,me=0,Ne=0,Oe=t,Ie=null;t:for(;;){for(var qe;Oe!==s||u!==0&&Oe.nodeType!==3||(N=w+u),Oe!==p||l!==0&&Oe.nodeType!==3||(H=w+l),Oe.nodeType===3&&(w+=Oe.nodeValue.length),(qe=Oe.firstChild)!==null;)Ie=Oe,Oe=qe;for(;;){if(Oe===t)break t;if(Ie===s&&++me===u&&(N=w),Ie===p&&++Ne===l&&(H=w),(qe=Oe.nextSibling)!==null)break;Oe=Ie,Ie=Oe.parentNode}Oe=qe}s=N===-1||H===-1?null:{start:N,end:H}}else s=null}s=s||{start:0,end:0}}else s=null;for(hc={focusedElem:t,selectionRange:s},ia=!1,Ke=i;Ke!==null;)if(i=Ke,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Ke=t;else for(;Ke!==null;){i=Ke;try{var Ze=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ze!==null){var et=Ze.memoizedProps,jt=Ze.memoizedState,oe=i.stateNode,j=oe.getSnapshotBeforeUpdate(i.elementType===i.type?et:ri(i.type,et),jt);oe.__reactInternalSnapshotBeforeUpdate=j}break;case 3:var de=i.stateNode.containerInfo;de.nodeType===1?de.textContent="":de.nodeType===9&&de.documentElement&&de.removeChild(de.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(ze){Xt(i,i.return,ze)}if(t=i.sibling,t!==null){t.return=i.return,Ke=t;break}Ke=i.return}return Ze=Xh,Xh=!1,Ze}function Ds(t,i,s){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var u=l=l.next;do{if((u.tag&t)===t){var p=u.destroy;u.destroy=void 0,p!==void 0&&eu(i,s,p)}u=u.next}while(u!==l)}}function ka(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&t)===t){var l=s.create;s.destroy=l()}s=s.next}while(s!==i)}}function tu(t){var i=t.ref;if(i!==null){var s=t.stateNode;switch(t.tag){case 5:t=s;break;default:t=s}typeof i=="function"?i(t):i.current=t}}function jh(t){var i=t.alternate;i!==null&&(t.alternate=null,jh(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[hi],delete i[Ss],delete i[vc],delete i[v0],delete i[_0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Yh(t){return t.tag===5||t.tag===3||t.tag===4}function qh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Yh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function nu(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.nodeType===8?s.parentNode.insertBefore(t,i):s.insertBefore(t,i):(s.nodeType===8?(i=s.parentNode,i.insertBefore(t,s)):(i=s,i.appendChild(t)),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=ma));else if(l!==4&&(t=t.child,t!==null))for(nu(t,i,s),t=t.sibling;t!==null;)nu(t,i,s),t=t.sibling}function iu(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(iu(t,i,s),t=t.sibling;t!==null;)iu(t,i,s),t=t.sibling}var cn=null,oi=!1;function rr(t,i,s){for(s=s.child;s!==null;)$h(t,i,s),s=s.sibling}function $h(t,i,s){if(ht&&typeof ht.onCommitFiberUnmount=="function")try{ht.onCommitFiberUnmount(tn,s)}catch{}switch(s.tag){case 5:gn||So(s,i);case 6:var l=cn,u=oi;cn=null,rr(t,i,s),cn=l,oi=u,cn!==null&&(oi?(t=cn,s=s.stateNode,t.nodeType===8?t.parentNode.removeChild(s):t.removeChild(s)):cn.removeChild(s.stateNode));break;case 18:cn!==null&&(oi?(t=cn,s=s.stateNode,t.nodeType===8?gc(t.parentNode,s):t.nodeType===1&&gc(t,s),us(t)):gc(cn,s.stateNode));break;case 4:l=cn,u=oi,cn=s.stateNode.containerInfo,oi=!0,rr(t,i,s),cn=l,oi=u;break;case 0:case 11:case 14:case 15:if(!gn&&(l=s.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){u=l=l.next;do{var p=u,w=p.destroy;p=p.tag,w!==void 0&&((p&2)!==0||(p&4)!==0)&&eu(s,i,w),u=u.next}while(u!==l)}rr(t,i,s);break;case 1:if(!gn&&(So(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=s.memoizedProps,l.state=s.memoizedState,l.componentWillUnmount()}catch(N){Xt(s,i,N)}rr(t,i,s);break;case 21:rr(t,i,s);break;case 22:s.mode&1?(gn=(l=gn)||s.memoizedState!==null,rr(t,i,s),gn=l):rr(t,i,s);break;default:rr(t,i,s)}}function Kh(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var s=t.stateNode;s===null&&(s=t.stateNode=new N0),i.forEach(function(l){var u=W0.bind(null,t,l);s.has(l)||(s.add(l),l.then(u,u))})}}function si(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var u=s[l];try{var p=t,w=i,N=w;e:for(;N!==null;){switch(N.tag){case 5:cn=N.stateNode,oi=!1;break e;case 3:cn=N.stateNode.containerInfo,oi=!0;break e;case 4:cn=N.stateNode.containerInfo,oi=!0;break e}N=N.return}if(cn===null)throw Error(n(160));$h(p,w,u),cn=null,oi=!1;var H=u.alternate;H!==null&&(H.return=null),u.return=null}catch(me){Xt(u,i,me)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Zh(i,t),i=i.sibling}function Zh(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(si(i,t),gi(t),l&4){try{Ds(3,t,t.return),ka(3,t)}catch(et){Xt(t,t.return,et)}try{Ds(5,t,t.return)}catch(et){Xt(t,t.return,et)}}break;case 1:si(i,t),gi(t),l&512&&s!==null&&So(s,s.return);break;case 5:if(si(i,t),gi(t),l&512&&s!==null&&So(s,s.return),t.flags&32){var u=t.stateNode;try{ae(u,"")}catch(et){Xt(t,t.return,et)}}if(l&4&&(u=t.stateNode,u!=null)){var p=t.memoizedProps,w=s!==null?s.memoizedProps:p,N=t.type,H=t.updateQueue;if(t.updateQueue=null,H!==null)try{N==="input"&&p.type==="radio"&&p.name!=null&&$e(u,p),ue(N,w);var me=ue(N,p);for(w=0;w<H.length;w+=2){var Ne=H[w],Oe=H[w+1];Ne==="style"?V(u,Oe):Ne==="dangerouslySetInnerHTML"?re(u,Oe):Ne==="children"?ae(u,Oe):P(u,Ne,Oe,me)}switch(N){case"input":ee(u,p);break;case"textarea":Ce(u,p);break;case"select":var Ie=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!p.multiple;var qe=p.value;qe!=null?E(u,!!p.multiple,qe,!1):Ie!==!!p.multiple&&(p.defaultValue!=null?E(u,!!p.multiple,p.defaultValue,!0):E(u,!!p.multiple,p.multiple?[]:"",!1))}u[Ss]=p}catch(et){Xt(t,t.return,et)}}break;case 6:if(si(i,t),gi(t),l&4){if(t.stateNode===null)throw Error(n(162));u=t.stateNode,p=t.memoizedProps;try{u.nodeValue=p}catch(et){Xt(t,t.return,et)}}break;case 3:if(si(i,t),gi(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{us(i.containerInfo)}catch(et){Xt(t,t.return,et)}break;case 4:si(i,t),gi(t);break;case 13:si(i,t),gi(t),u=t.child,u.flags&8192&&(p=u.memoizedState!==null,u.stateNode.isHidden=p,!p||u.alternate!==null&&u.alternate.memoizedState!==null||(su=He())),l&4&&Kh(t);break;case 22:if(Ne=s!==null&&s.memoizedState!==null,t.mode&1?(gn=(me=gn)||Ne,si(i,t),gn=me):si(i,t),gi(t),l&8192){if(me=t.memoizedState!==null,(t.stateNode.isHidden=me)&&!Ne&&(t.mode&1)!==0)for(Ke=t,Ne=t.child;Ne!==null;){for(Oe=Ke=Ne;Ke!==null;){switch(Ie=Ke,qe=Ie.child,Ie.tag){case 0:case 11:case 14:case 15:Ds(4,Ie,Ie.return);break;case 1:So(Ie,Ie.return);var Ze=Ie.stateNode;if(typeof Ze.componentWillUnmount=="function"){l=Ie,s=Ie.return;try{i=l,Ze.props=i.memoizedProps,Ze.state=i.memoizedState,Ze.componentWillUnmount()}catch(et){Xt(l,s,et)}}break;case 5:So(Ie,Ie.return);break;case 22:if(Ie.memoizedState!==null){ep(Oe);continue}}qe!==null?(qe.return=Ie,Ke=qe):ep(Oe)}Ne=Ne.sibling}e:for(Ne=null,Oe=t;;){if(Oe.tag===5){if(Ne===null){Ne=Oe;try{u=Oe.stateNode,me?(p=u.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(N=Oe.stateNode,H=Oe.memoizedProps.style,w=H!=null&&H.hasOwnProperty("display")?H.display:null,N.style.display=q("display",w))}catch(et){Xt(t,t.return,et)}}}else if(Oe.tag===6){if(Ne===null)try{Oe.stateNode.nodeValue=me?"":Oe.memoizedProps}catch(et){Xt(t,t.return,et)}}else if((Oe.tag!==22&&Oe.tag!==23||Oe.memoizedState===null||Oe===t)&&Oe.child!==null){Oe.child.return=Oe,Oe=Oe.child;continue}if(Oe===t)break e;for(;Oe.sibling===null;){if(Oe.return===null||Oe.return===t)break e;Ne===Oe&&(Ne=null),Oe=Oe.return}Ne===Oe&&(Ne=null),Oe.sibling.return=Oe.return,Oe=Oe.sibling}}break;case 19:si(i,t),gi(t),l&4&&Kh(t);break;case 21:break;default:si(i,t),gi(t)}}function gi(t){var i=t.flags;if(i&2){try{e:{for(var s=t.return;s!==null;){if(Yh(s)){var l=s;break e}s=s.return}throw Error(n(160))}switch(l.tag){case 5:var u=l.stateNode;l.flags&32&&(ae(u,""),l.flags&=-33);var p=qh(t);iu(t,p,u);break;case 3:case 4:var w=l.stateNode.containerInfo,N=qh(t);nu(t,N,w);break;default:throw Error(n(161))}}catch(H){Xt(t,t.return,H)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function O0(t,i,s){Ke=t,Qh(t)}function Qh(t,i,s){for(var l=(t.mode&1)!==0;Ke!==null;){var u=Ke,p=u.child;if(u.tag===22&&l){var w=u.memoizedState!==null||Fa;if(!w){var N=u.alternate,H=N!==null&&N.memoizedState!==null||gn;N=Fa;var me=gn;if(Fa=w,(gn=H)&&!me)for(Ke=u;Ke!==null;)w=Ke,H=w.child,w.tag===22&&w.memoizedState!==null?tp(u):H!==null?(H.return=w,Ke=H):tp(u);for(;p!==null;)Ke=p,Qh(p),p=p.sibling;Ke=u,Fa=N,gn=me}Jh(t)}else(u.subtreeFlags&8772)!==0&&p!==null?(p.return=u,Ke=p):Jh(t)}}function Jh(t){for(;Ke!==null;){var i=Ke;if((i.flags&8772)!==0){var s=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:gn||ka(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!gn)if(s===null)l.componentDidMount();else{var u=i.elementType===i.type?s.memoizedProps:ri(i.type,s.memoizedProps);l.componentDidUpdate(u,s.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&eh(i,p,l);break;case 3:var w=i.updateQueue;if(w!==null){if(s=null,i.child!==null)switch(i.child.tag){case 5:s=i.child.stateNode;break;case 1:s=i.child.stateNode}eh(i,w,s)}break;case 5:var N=i.stateNode;if(s===null&&i.flags&4){s=N;var H=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&s.focus();break;case"img":H.src&&(s.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var me=i.alternate;if(me!==null){var Ne=me.memoizedState;if(Ne!==null){var Oe=Ne.dehydrated;Oe!==null&&us(Oe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}gn||i.flags&512&&tu(i)}catch(Ie){Xt(i,i.return,Ie)}}if(i===t){Ke=null;break}if(s=i.sibling,s!==null){s.return=i.return,Ke=s;break}Ke=i.return}}function ep(t){for(;Ke!==null;){var i=Ke;if(i===t){Ke=null;break}var s=i.sibling;if(s!==null){s.return=i.return,Ke=s;break}Ke=i.return}}function tp(t){for(;Ke!==null;){var i=Ke;try{switch(i.tag){case 0:case 11:case 15:var s=i.return;try{ka(4,i)}catch(H){Xt(i,s,H)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var u=i.return;try{l.componentDidMount()}catch(H){Xt(i,u,H)}}var p=i.return;try{tu(i)}catch(H){Xt(i,p,H)}break;case 5:var w=i.return;try{tu(i)}catch(H){Xt(i,w,H)}}}catch(H){Xt(i,i.return,H)}if(i===t){Ke=null;break}var N=i.sibling;if(N!==null){N.return=i.return,Ke=N;break}Ke=i.return}}var F0=Math.ceil,za=D.ReactCurrentDispatcher,ru=D.ReactCurrentOwner,$n=D.ReactCurrentBatchConfig,St=0,on=null,qt=null,un=0,Bn=0,Mo=Ji(0),Qt=0,Is=null,Ur=0,Ba=0,ou=0,Ns=null,Ln=null,su=0,Eo=1/0,Li=null,Ha=!1,au=null,or=null,Va=!1,sr=null,Ga=0,Us=0,lu=null,Wa=-1,Xa=0;function Sn(){return(St&6)!==0?He():Wa!==-1?Wa:Wa=He()}function ar(t){return(t.mode&1)===0?1:(St&2)!==0&&un!==0?un&-un:y0.transition!==null?(Xa===0&&(Xa=ea()),Xa):(t=Ct,t!==0||(t=window.event,t=t===void 0?16:nf(t.type)),t)}function ai(t,i,s,l){if(50<Us)throw Us=0,lu=null,Error(n(185));os(t,s,l),((St&2)===0||t!==on)&&(t===on&&((St&2)===0&&(Ba|=s),Qt===4&&lr(t,un)),Dn(t,l),s===1&&St===0&&(i.mode&1)===0&&(Eo=He()+500,xa&&tr()))}function Dn(t,i){var s=t.callbackNode;Rn(t,i);var l=On(t,t===on?un:0);if(l===0)s!==null&&Be(s),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(s!=null&&Be(s),i===1)t.tag===0?x0(ip.bind(null,t)):Vf(ip.bind(null,t)),m0(function(){(St&6)===0&&tr()}),s=null;else{switch(qd(l)){case 1:s=at;break;case 4:s=rt;break;case 16:s=yt;break;case 536870912:s=Ot;break;default:s=yt}s=dp(s,np.bind(null,t))}t.callbackPriority=i,t.callbackNode=s}}function np(t,i){if(Wa=-1,Xa=0,(St&6)!==0)throw Error(n(327));var s=t.callbackNode;if(wo()&&t.callbackNode!==s)return null;var l=On(t,t===on?un:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=ja(t,l);else{i=l;var u=St;St|=2;var p=op();(on!==t||un!==i)&&(Li=null,Eo=He()+500,Fr(t,i));do try{B0();break}catch(N){rp(t,N)}while(!0);Ac(),za.current=p,St=u,qt!==null?i=0:(on=null,un=0,i=Qt)}if(i!==0){if(i===2&&(u=Rr(t),u!==0&&(l=u,i=cu(t,u))),i===1)throw s=Is,Fr(t,0),lr(t,l),Dn(t,He()),s;if(i===6)lr(t,l);else{if(u=t.current.alternate,(l&30)===0&&!k0(u)&&(i=ja(t,l),i===2&&(p=Rr(t),p!==0&&(l=p,i=cu(t,p))),i===1))throw s=Is,Fr(t,0),lr(t,l),Dn(t,He()),s;switch(t.finishedWork=u,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:kr(t,Ln,Li);break;case 3:if(lr(t,l),(l&130023424)===l&&(i=su+500-He(),10<i)){if(On(t,0)!==0)break;if(u=t.suspendedLanes,(u&l)!==l){Sn(),t.pingedLanes|=t.suspendedLanes&u;break}t.timeoutHandle=mc(kr.bind(null,t,Ln,Li),i);break}kr(t,Ln,Li);break;case 4:if(lr(t,l),(l&4194240)===l)break;for(i=t.eventTimes,u=-1;0<l;){var w=31-bt(l);p=1<<w,w=i[w],w>u&&(u=w),l&=~p}if(l=u,l=He()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*F0(l/1960))-l,10<l){t.timeoutHandle=mc(kr.bind(null,t,Ln,Li),l);break}kr(t,Ln,Li);break;case 5:kr(t,Ln,Li);break;default:throw Error(n(329))}}}return Dn(t,He()),t.callbackNode===s?np.bind(null,t):null}function cu(t,i){var s=Ns;return t.current.memoizedState.isDehydrated&&(Fr(t,i).flags|=256),t=ja(t,i),t!==2&&(i=Ln,Ln=s,i!==null&&uu(i)),t}function uu(t){Ln===null?Ln=t:Ln.push.apply(Ln,t)}function k0(t){for(var i=t;;){if(i.flags&16384){var s=i.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var l=0;l<s.length;l++){var u=s[l],p=u.getSnapshot;u=u.value;try{if(!ni(p(),u))return!1}catch{return!1}}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function lr(t,i){for(i&=~ou,i&=~Ba,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var s=31-bt(i),l=1<<s;t[s]=-1,i&=~l}}function ip(t){if((St&6)!==0)throw Error(n(327));wo();var i=On(t,0);if((i&1)===0)return Dn(t,He()),null;var s=ja(t,i);if(t.tag!==0&&s===2){var l=Rr(t);l!==0&&(i=l,s=cu(t,l))}if(s===1)throw s=Is,Fr(t,0),lr(t,i),Dn(t,He()),s;if(s===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,kr(t,Ln,Li),Dn(t,He()),null}function du(t,i){var s=St;St|=1;try{return t(i)}finally{St=s,St===0&&(Eo=He()+500,xa&&tr())}}function Or(t){sr!==null&&sr.tag===0&&(St&6)===0&&wo();var i=St;St|=1;var s=$n.transition,l=Ct;try{if($n.transition=null,Ct=1,t)return t()}finally{Ct=l,$n.transition=s,St=i,(St&6)===0&&tr()}}function fu(){Bn=Mo.current,kt(Mo)}function Fr(t,i){t.finishedWork=null,t.finishedLanes=0;var s=t.timeoutHandle;if(s!==-1&&(t.timeoutHandle=-1,p0(s)),qt!==null)for(s=qt.return;s!==null;){var l=s;switch(Sc(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&va();break;case 3:xo(),kt(bn),kt(hn),Nc();break;case 5:Dc(l);break;case 4:xo();break;case 13:kt(Gt);break;case 19:kt(Gt);break;case 10:Rc(l.type._context);break;case 22:case 23:fu()}s=s.return}if(on=t,qt=t=cr(t.current,null),un=Bn=i,Qt=0,Is=null,ou=Ba=Ur=0,Ln=Ns=null,Dr!==null){for(i=0;i<Dr.length;i++)if(s=Dr[i],l=s.interleaved,l!==null){s.interleaved=null;var u=l.next,p=s.pending;if(p!==null){var w=p.next;p.next=u,l.next=w}s.pending=l}Dr=null}return t}function rp(t,i){do{var s=qt;try{if(Ac(),Ca.current=Ia,Pa){for(var l=Wt.memoizedState;l!==null;){var u=l.queue;u!==null&&(u.pending=null),l=l.next}Pa=!1}if(Nr=0,rn=Zt=Wt=null,Rs=!1,bs=0,ru.current=null,s===null||s.return===null){Qt=1,Is=i,qt=null;break}e:{var p=t,w=s.return,N=s,H=i;if(i=un,N.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var me=H,Ne=N,Oe=Ne.tag;if((Ne.mode&1)===0&&(Oe===0||Oe===11||Oe===15)){var Ie=Ne.alternate;Ie?(Ne.updateQueue=Ie.updateQueue,Ne.memoizedState=Ie.memoizedState,Ne.lanes=Ie.lanes):(Ne.updateQueue=null,Ne.memoizedState=null)}var qe=Ch(w);if(qe!==null){qe.flags&=-257,Ph(qe,w,N,p,i),qe.mode&1&&bh(p,me,i),i=qe,H=me;var Ze=i.updateQueue;if(Ze===null){var et=new Set;et.add(H),i.updateQueue=et}else Ze.add(H);break e}else{if((i&1)===0){bh(p,me,i),hu();break e}H=Error(n(426))}}else if(Ht&&N.mode&1){var jt=Ch(w);if(jt!==null){(jt.flags&65536)===0&&(jt.flags|=256),Ph(jt,w,N,p,i),wc(yo(H,N));break e}}p=H=yo(H,N),Qt!==4&&(Qt=2),Ns===null?Ns=[p]:Ns.push(p),p=w;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var oe=Ah(p,H,i);Jf(p,oe);break e;case 1:N=H;var j=p.type,de=p.stateNode;if((p.flags&128)===0&&(typeof j.getDerivedStateFromError=="function"||de!==null&&typeof de.componentDidCatch=="function"&&(or===null||!or.has(de)))){p.flags|=65536,i&=-i,p.lanes|=i;var ze=Rh(p,N,i);Jf(p,ze);break e}}p=p.return}while(p!==null)}ap(s)}catch(nt){i=nt,qt===s&&s!==null&&(qt=s=s.return);continue}break}while(!0)}function op(){var t=za.current;return za.current=Ia,t===null?Ia:t}function hu(){(Qt===0||Qt===3||Qt===2)&&(Qt=4),on===null||(Ur&268435455)===0&&(Ba&268435455)===0||lr(on,un)}function ja(t,i){var s=St;St|=2;var l=op();(on!==t||un!==i)&&(Li=null,Fr(t,i));do try{z0();break}catch(u){rp(t,u)}while(!0);if(Ac(),St=s,za.current=l,qt!==null)throw Error(n(261));return on=null,un=0,Qt}function z0(){for(;qt!==null;)sp(qt)}function B0(){for(;qt!==null&&!Ye();)sp(qt)}function sp(t){var i=up(t.alternate,t,Bn);t.memoizedProps=t.pendingProps,i===null?ap(t):qt=i,ru.current=null}function ap(t){var i=t;do{var s=i.alternate;if(t=i.return,(i.flags&32768)===0){if(s=D0(s,i,Bn),s!==null){qt=s;return}}else{if(s=I0(s,i),s!==null){s.flags&=32767,qt=s;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Qt=6,qt=null;return}}if(i=i.sibling,i!==null){qt=i;return}qt=i=t}while(i!==null);Qt===0&&(Qt=5)}function kr(t,i,s){var l=Ct,u=$n.transition;try{$n.transition=null,Ct=1,H0(t,i,s,l)}finally{$n.transition=u,Ct=l}return null}function H0(t,i,s,l){do wo();while(sr!==null);if((St&6)!==0)throw Error(n(327));s=t.finishedWork;var u=t.finishedLanes;if(s===null)return null;if(t.finishedWork=null,t.finishedLanes=0,s===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var p=s.lanes|s.childLanes;if(Sg(t,p),t===on&&(qt=on=null,un=0),(s.subtreeFlags&2064)===0&&(s.flags&2064)===0||Va||(Va=!0,dp(yt,function(){return wo(),null})),p=(s.flags&15990)!==0,(s.subtreeFlags&15990)!==0||p){p=$n.transition,$n.transition=null;var w=Ct;Ct=1;var N=St;St|=4,ru.current=null,U0(t,s),Zh(s,t),a0(hc),ia=!!fc,hc=fc=null,t.current=s,O0(s),Je(),St=N,Ct=w,$n.transition=p}else t.current=s;if(Va&&(Va=!1,sr=t,Ga=u),p=t.pendingLanes,p===0&&(or=null),it(s.stateNode),Dn(t,He()),i!==null)for(l=t.onRecoverableError,s=0;s<i.length;s++)u=i[s],l(u.value,{componentStack:u.stack,digest:u.digest});if(Ha)throw Ha=!1,t=au,au=null,t;return(Ga&1)!==0&&t.tag!==0&&wo(),p=t.pendingLanes,(p&1)!==0?t===lu?Us++:(Us=0,lu=t):Us=0,tr(),null}function wo(){if(sr!==null){var t=qd(Ga),i=$n.transition,s=Ct;try{if($n.transition=null,Ct=16>t?16:t,sr===null)var l=!1;else{if(t=sr,sr=null,Ga=0,(St&6)!==0)throw Error(n(331));var u=St;for(St|=4,Ke=t.current;Ke!==null;){var p=Ke,w=p.child;if((Ke.flags&16)!==0){var N=p.deletions;if(N!==null){for(var H=0;H<N.length;H++){var me=N[H];for(Ke=me;Ke!==null;){var Ne=Ke;switch(Ne.tag){case 0:case 11:case 15:Ds(8,Ne,p)}var Oe=Ne.child;if(Oe!==null)Oe.return=Ne,Ke=Oe;else for(;Ke!==null;){Ne=Ke;var Ie=Ne.sibling,qe=Ne.return;if(jh(Ne),Ne===me){Ke=null;break}if(Ie!==null){Ie.return=qe,Ke=Ie;break}Ke=qe}}}var Ze=p.alternate;if(Ze!==null){var et=Ze.child;if(et!==null){Ze.child=null;do{var jt=et.sibling;et.sibling=null,et=jt}while(et!==null)}}Ke=p}}if((p.subtreeFlags&2064)!==0&&w!==null)w.return=p,Ke=w;else e:for(;Ke!==null;){if(p=Ke,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Ds(9,p,p.return)}var oe=p.sibling;if(oe!==null){oe.return=p.return,Ke=oe;break e}Ke=p.return}}var j=t.current;for(Ke=j;Ke!==null;){w=Ke;var de=w.child;if((w.subtreeFlags&2064)!==0&&de!==null)de.return=w,Ke=de;else e:for(w=j;Ke!==null;){if(N=Ke,(N.flags&2048)!==0)try{switch(N.tag){case 0:case 11:case 15:ka(9,N)}}catch(nt){Xt(N,N.return,nt)}if(N===w){Ke=null;break e}var ze=N.sibling;if(ze!==null){ze.return=N.return,Ke=ze;break e}Ke=N.return}}if(St=u,tr(),ht&&typeof ht.onPostCommitFiberRoot=="function")try{ht.onPostCommitFiberRoot(tn,t)}catch{}l=!0}return l}finally{Ct=s,$n.transition=i}}return!1}function lp(t,i,s){i=yo(s,i),i=Ah(t,i,1),t=ir(t,i,1),i=Sn(),t!==null&&(os(t,1,i),Dn(t,i))}function Xt(t,i,s){if(t.tag===3)lp(t,t,s);else for(;i!==null;){if(i.tag===3){lp(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(or===null||!or.has(l))){t=yo(s,t),t=Rh(i,t,1),i=ir(i,t,1),t=Sn(),i!==null&&(os(i,1,t),Dn(i,t));break}}i=i.return}}function V0(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),i=Sn(),t.pingedLanes|=t.suspendedLanes&s,on===t&&(un&s)===s&&(Qt===4||Qt===3&&(un&130023424)===un&&500>He()-su?Fr(t,0):ou|=s),Dn(t,i)}function cp(t,i){i===0&&((t.mode&1)===0?i=1:(i=Xi,Xi<<=1,(Xi&130023424)===0&&(Xi=4194304)));var s=Sn();t=bi(t,i),t!==null&&(os(t,i,s),Dn(t,s))}function G0(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),cp(t,s)}function W0(t,i){var s=0;switch(t.tag){case 13:var l=t.stateNode,u=t.memoizedState;u!==null&&(s=u.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),cp(t,s)}var up;up=function(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps||bn.current)Pn=!0;else{if((t.lanes&s)===0&&(i.flags&128)===0)return Pn=!1,L0(t,i,s);Pn=(t.flags&131072)!==0}else Pn=!1,Ht&&(i.flags&1048576)!==0&&Gf(i,Sa,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Oa(t,i),t=i.pendingProps;var u=fo(i,hn.current);_o(i,s),u=Fc(null,i,l,t,u,s);var p=kc();return i.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Cn(l)?(p=!0,_a(i)):p=!1,i.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,Pc(i),u.updater=Na,i.stateNode=u,u._reactInternals=i,Wc(i,l,t,s),i=qc(null,i,l,!0,p,s)):(i.tag=0,Ht&&p&&yc(i),yn(null,i,u,s),i=i.child),i;case 16:l=i.elementType;e:{switch(Oa(t,i),t=i.pendingProps,u=l._init,l=u(l._payload),i.type=l,u=i.tag=j0(l),t=ri(l,t),u){case 0:i=Yc(null,i,l,t,s);break e;case 1:i=Oh(null,i,l,t,s);break e;case 11:i=Lh(null,i,l,t,s);break e;case 14:i=Dh(null,i,l,ri(l.type,t),s);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:ri(l,u),Yc(t,i,l,u,s);case 1:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:ri(l,u),Oh(t,i,l,u,s);case 3:e:{if(Fh(i),t===null)throw Error(n(387));l=i.pendingProps,p=i.memoizedState,u=p.element,Qf(t,i),Ra(i,l,null,s);var w=i.memoizedState;if(l=w.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){u=yo(Error(n(423)),i),i=kh(t,i,l,s,u);break e}else if(l!==u){u=yo(Error(n(424)),i),i=kh(t,i,l,s,u);break e}else for(zn=Qi(i.stateNode.containerInfo.firstChild),kn=i,Ht=!0,ii=null,s=Kf(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(mo(),l===u){i=Pi(t,i,s);break e}yn(t,i,l,s)}i=i.child}return i;case 5:return th(i),t===null&&Ec(i),l=i.type,u=i.pendingProps,p=t!==null?t.memoizedProps:null,w=u.children,pc(l,u)?w=null:p!==null&&pc(l,p)&&(i.flags|=32),Uh(t,i),yn(t,i,w,s),i.child;case 6:return t===null&&Ec(i),null;case 13:return zh(t,i,s);case 4:return Lc(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=go(i,null,l,s):yn(t,i,l,s),i.child;case 11:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:ri(l,u),Lh(t,i,l,u,s);case 7:return yn(t,i,i.pendingProps,s),i.child;case 8:return yn(t,i,i.pendingProps.children,s),i.child;case 12:return yn(t,i,i.pendingProps.children,s),i.child;case 10:e:{if(l=i.type._context,u=i.pendingProps,p=i.memoizedProps,w=u.value,Ut(wa,l._currentValue),l._currentValue=w,p!==null)if(ni(p.value,w)){if(p.children===u.children&&!bn.current){i=Pi(t,i,s);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var N=p.dependencies;if(N!==null){w=p.child;for(var H=N.firstContext;H!==null;){if(H.context===l){if(p.tag===1){H=Ci(-1,s&-s),H.tag=2;var me=p.updateQueue;if(me!==null){me=me.shared;var Ne=me.pending;Ne===null?H.next=H:(H.next=Ne.next,Ne.next=H),me.pending=H}}p.lanes|=s,H=p.alternate,H!==null&&(H.lanes|=s),bc(p.return,s,i),N.lanes|=s;break}H=H.next}}else if(p.tag===10)w=p.type===i.type?null:p.child;else if(p.tag===18){if(w=p.return,w===null)throw Error(n(341));w.lanes|=s,N=w.alternate,N!==null&&(N.lanes|=s),bc(w,s,i),w=p.sibling}else w=p.child;if(w!==null)w.return=p;else for(w=p;w!==null;){if(w===i){w=null;break}if(p=w.sibling,p!==null){p.return=w.return,w=p;break}w=w.return}p=w}yn(t,i,u.children,s),i=i.child}return i;case 9:return u=i.type,l=i.pendingProps.children,_o(i,s),u=Yn(u),l=l(u),i.flags|=1,yn(t,i,l,s),i.child;case 14:return l=i.type,u=ri(l,i.pendingProps),u=ri(l.type,u),Dh(t,i,l,u,s);case 15:return Ih(t,i,i.type,i.pendingProps,s);case 17:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:ri(l,u),Oa(t,i),i.tag=1,Cn(l)?(t=!0,_a(i)):t=!1,_o(i,s),wh(i,l,u),Wc(i,l,u,s),qc(null,i,l,!0,t,s);case 19:return Hh(t,i,s);case 22:return Nh(t,i,s)}throw Error(n(156,i.tag))};function dp(t,i){return te(t,i)}function X0(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(t,i,s,l){return new X0(t,i,s,l)}function pu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function j0(t){if(typeof t=="function")return pu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Se)return 11;if(t===be)return 14}return 2}function cr(t,i){var s=t.alternate;return s===null?(s=Kn(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&14680064,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s}function Ya(t,i,s,l,u,p){var w=2;if(l=t,typeof t=="function")pu(t)&&(w=1);else if(typeof t=="string")w=5;else e:switch(t){case k:return zr(s.children,u,p,i);case Q:w=8,u|=8;break;case L:return t=Kn(12,s,i,u|2),t.elementType=L,t.lanes=p,t;case ce:return t=Kn(13,s,i,u),t.elementType=ce,t.lanes=p,t;case Re:return t=Kn(19,s,i,u),t.elementType=Re,t.lanes=p,t;case Me:return qa(s,u,p,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case R:w=10;break e;case G:w=9;break e;case Se:w=11;break e;case be:w=14;break e;case xe:w=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Kn(w,s,i,u),i.elementType=t,i.type=l,i.lanes=p,i}function zr(t,i,s,l){return t=Kn(7,t,l,i),t.lanes=s,t}function qa(t,i,s,l){return t=Kn(22,t,l,i),t.elementType=Me,t.lanes=s,t.stateNode={isHidden:!1},t}function mu(t,i,s){return t=Kn(6,t,null,i),t.lanes=s,t}function gu(t,i,s){return i=Kn(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function Y0(t,i,s,l,u){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=to(0),this.expirationTimes=to(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=to(0),this.identifierPrefix=l,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function vu(t,i,s,l,u,p,w,N,H){return t=new Y0(t,i,s,N,H),i===1?(i=1,p===!0&&(i|=8)):i=0,p=Kn(3,null,null,i),t.current=p,p.stateNode=t,p.memoizedState={element:l,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pc(p),t}function q0(t,i,s){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:B,key:l==null?null:""+l,children:t,containerInfo:i,implementation:s}}function fp(t){if(!t)return er;t=t._reactInternals;e:{if(Ei(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Cn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var s=t.type;if(Cn(s))return Bf(t,s,i)}return i}function hp(t,i,s,l,u,p,w,N,H){return t=vu(s,l,!0,t,u,p,w,N,H),t.context=fp(null),s=t.current,l=Sn(),u=ar(s),p=Ci(l,u),p.callback=i??null,ir(s,p,u),t.current.lanes=u,os(t,u,l),Dn(t,l),t}function $a(t,i,s,l){var u=i.current,p=Sn(),w=ar(u);return s=fp(s),i.context===null?i.context=s:i.pendingContext=s,i=Ci(p,w),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=ir(u,i,w),t!==null&&(ai(t,u,w,p),Aa(t,u,w)),w}function Ka(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function pp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function _u(t,i){pp(t,i),(t=t.alternate)&&pp(t,i)}function $0(){return null}var mp=typeof reportError=="function"?reportError:function(t){console.error(t)};function xu(t){this._internalRoot=t}Za.prototype.render=xu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));$a(t,i,null,null)},Za.prototype.unmount=xu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Or(function(){$a(null,t,null,null)}),i[wi]=null}};function Za(t){this._internalRoot=t}Za.prototype.unstable_scheduleHydration=function(t){if(t){var i=Zd();t={blockedOn:null,target:t,priority:i};for(var s=0;s<$i.length&&i!==0&&i<$i[s].priority;s++);$i.splice(s,0,t),s===0&&ef(t)}};function yu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Qa(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function gp(){}function K0(t,i,s,l,u){if(u){if(typeof l=="function"){var p=l;l=function(){var me=Ka(w);p.call(me)}}var w=hp(i,l,t,0,null,!1,!1,"",gp);return t._reactRootContainer=w,t[wi]=w.current,xs(t.nodeType===8?t.parentNode:t),Or(),w}for(;u=t.lastChild;)t.removeChild(u);if(typeof l=="function"){var N=l;l=function(){var me=Ka(H);N.call(me)}}var H=vu(t,0,!1,null,null,!1,!1,"",gp);return t._reactRootContainer=H,t[wi]=H.current,xs(t.nodeType===8?t.parentNode:t),Or(function(){$a(i,H,s,l)}),H}function Ja(t,i,s,l,u){var p=s._reactRootContainer;if(p){var w=p;if(typeof u=="function"){var N=u;u=function(){var H=Ka(w);N.call(H)}}$a(i,w,t,u)}else w=K0(s,i,t,u,l);return Ka(w)}$d=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var s=Nt(i.pendingLanes);s!==0&&(Wl(i,s|1),Dn(i,He()),(St&6)===0&&(Eo=He()+500,tr()))}break;case 13:Or(function(){var l=bi(t,1);if(l!==null){var u=Sn();ai(l,t,1,u)}}),_u(t,1)}},Xl=function(t){if(t.tag===13){var i=bi(t,134217728);if(i!==null){var s=Sn();ai(i,t,134217728,s)}_u(t,134217728)}},Kd=function(t){if(t.tag===13){var i=ar(t),s=bi(t,i);if(s!==null){var l=Sn();ai(s,t,i,l)}_u(t,i)}},Zd=function(){return Ct},Qd=function(t,i){var s=Ct;try{return Ct=t,i()}finally{Ct=s}},$=function(t,i,s){switch(i){case"input":if(ee(t,s),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var u=ga(l);if(!u)throw Error(n(90));z(l),ee(l,u)}}}break;case"textarea":Ce(t,s);break;case"select":i=s.value,i!=null&&E(t,!!s.multiple,i,!1)}},Lt=du,gt=Or;var Z0={usingClientEntryPoint:!1,Events:[Ms,co,ga,Qe,Mt,du]},Os={findFiberByHostInstance:br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Q0={bundleType:Os.bundleType,version:Os.version,rendererPackageName:Os.rendererPackageName,rendererConfig:Os.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:D.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=he(t),t===null?null:t.stateNode},findFiberByHostInstance:Os.findFiberByHostInstance||$0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var el=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!el.isDisabled&&el.supportsFiber)try{tn=el.inject(Q0),ht=el}catch{}}return In.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z0,In.createPortal=function(t,i){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yu(i))throw Error(n(200));return q0(t,i,null,s)},In.createRoot=function(t,i){if(!yu(t))throw Error(n(299));var s=!1,l="",u=mp;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(u=i.onRecoverableError)),i=vu(t,1,!1,null,null,s,!1,l,u),t[wi]=i.current,xs(t.nodeType===8?t.parentNode:t),new xu(i)},In.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=he(i),t=t===null?null:t.stateNode,t},In.flushSync=function(t){return Or(t)},In.hydrate=function(t,i,s){if(!Qa(i))throw Error(n(200));return Ja(null,t,i,!0,s)},In.hydrateRoot=function(t,i,s){if(!yu(t))throw Error(n(405));var l=s!=null&&s.hydratedSources||null,u=!1,p="",w=mp;if(s!=null&&(s.unstable_strictMode===!0&&(u=!0),s.identifierPrefix!==void 0&&(p=s.identifierPrefix),s.onRecoverableError!==void 0&&(w=s.onRecoverableError)),i=hp(i,null,t,1,s??null,u,!1,p,w),t[wi]=i.current,xs(t),l)for(t=0;t<l.length;t++)s=l[t],u=s._getVersion,u=u(s._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[s,u]:i.mutableSourceEagerHydrationData.push(s,u);return new Za(i)},In.render=function(t,i,s){if(!Qa(i))throw Error(n(200));return Ja(null,t,i,!1,s)},In.unmountComponentAtNode=function(t){if(!Qa(t))throw Error(n(40));return t._reactRootContainer?(Or(function(){Ja(null,null,t,!1,function(){t._reactRootContainer=null,t[wi]=null})}),!0):!1},In.unstable_batchedUpdates=du,In.unstable_renderSubtreeIntoContainer=function(t,i,s,l){if(!Qa(s))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Ja(t,i,s,!1,l)},In.version="18.3.1-next-f1338f8080-20240426",In}var wp;function sv(){if(wp)return Eu.exports;wp=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Eu.exports=ov(),Eu.exports}var Tp;function av(){if(Tp)return tl;Tp=1;var o=sv();return tl.createRoot=o.createRoot,tl.hydrateRoot=o.hydrateRoot,tl}var lv=av(),At=Nd();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),uv=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase()),Ap=o=>{const e=uv(o);return e.charAt(0).toUpperCase()+e.slice(1)},km=(...o)=>o.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var dv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=At.forwardRef(({color:o="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:a="",children:c,iconNode:f,...d},h)=>At.createElement("svg",{ref:h,...dv,width:e,height:e,stroke:o,strokeWidth:r?Number(n)*24/Number(e):n,className:km("lucide",a),...d},[...f.map(([m,g])=>At.createElement(m,g)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fi=(o,e)=>{const n=At.forwardRef(({className:r,...a},c)=>At.createElement(fv,{ref:c,iconNode:e,className:km(`lucide-${cv(Ap(o))}`,`lucide-${o}`,r),...a}));return n.displayName=Ap(o),n};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Rp=fi("arrow-left",hv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],bp=fi("camera",pv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=[["path",{d:"M6 2v14a2 2 0 0 0 2 2h14",key:"ron5a4"}],["path",{d:"M18 22V8a2 2 0 0 0-2-2H2",key:"7s9ehn"}]],gv=fi("crop",mv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],_v=fi("download",vv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]],yv=fi("gamepad-2",xv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=[["path",{d:"M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z",key:"1bo67w"}],["rect",{x:"3",y:"14",width:"7",height:"7",rx:"1",key:"1bkyp8"}],["circle",{cx:"17.5",cy:"17.5",r:"3.5",key:"w3z12y"}]],Mv=fi("shapes",Sv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],wv=fi("smartphone",Ev);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],Cp=fi("sparkles",Tv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],Rv=fi("trash-2",Av);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]],Cv=fi("upload",bv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Lv=fi("x",Pv);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ud="166",To={ROTATE:0,DOLLY:1,PAN:2},vi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Dv=0,Pp=1,Iv=2,zm=1,Nv=2,Fi=3,Hi=0,Tn=1,xi=2,Sr=0,qo=1,Lp=2,Dp=3,Ip=4,Uv=5,Yr=100,Ov=101,Fv=102,kv=103,zv=104,Bv=200,Hv=201,Vv=202,Gv=203,ed=204,td=205,Wv=206,Xv=207,jv=208,Yv=209,qv=210,$v=211,Kv=212,Zv=213,Qv=214,Jv=0,e_=1,t_=2,Dl=3,n_=4,i_=5,r_=6,o_=7,Bm=0,s_=1,a_=2,Mr=0,l_=1,c_=2,u_=3,d_=4,f_=5,h_=6,p_=7,Hm=300,Zo=301,Qo=302,nd=303,id=304,kl=306,rd=1e3,$r=1001,od=1002,Jn=1003,m_=1004,nl=1005,wn=1006,Au=1007,Kr=1008,Vi=1009,Vm=1010,Gm=1011,Xs=1012,Od=1013,Zr=1014,ki=1015,Ys=1016,Fd=1017,kd=1018,Jo=1020,Wm=35902,Xm=1021,jm=1022,di=1023,Ym=1024,qm=1025,$o=1026,es=1027,$m=1028,zd=1029,Km=1030,Bd=1031,Hd=1033,Al=33776,Rl=33777,bl=33778,Cl=33779,sd=35840,ad=35841,ld=35842,cd=35843,ud=36196,dd=37492,fd=37496,hd=37808,pd=37809,md=37810,gd=37811,vd=37812,_d=37813,xd=37814,yd=37815,Sd=37816,Md=37817,Ed=37818,wd=37819,Td=37820,Ad=37821,Pl=36492,Rd=36494,bd=36495,Zm=36283,Cd=36284,Pd=36285,Ld=36286,g_=3200,v_=3201,__=0,x_=1,yr="",Qn="srgb",wr="srgb-linear",Vd="display-p3",zl="display-p3-linear",Il="linear",zt="srgb",Nl="rec709",Ul="p3",Ao=7680,Np=519,y_=512,S_=513,M_=514,Qm=515,E_=516,w_=517,T_=518,A_=519,Up=35044,Op="300 es",zi=2e3,Ol=2001;class eo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const c=a.indexOf(n);c!==-1&&a.splice(c,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let c=0,f=a.length;c<f;c++)a[c].call(this,e);e.target=null}}}const vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Fp=1234567;const Gs=Math.PI/180,js=180/Math.PI;function ns(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(vn[o&255]+vn[o>>8&255]+vn[o>>16&255]+vn[o>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[n&63|128]+vn[n>>8&255]+"-"+vn[n>>16&255]+vn[n>>24&255]+vn[r&255]+vn[r>>8&255]+vn[r>>16&255]+vn[r>>24&255]).toLowerCase()}function xn(o,e,n){return Math.max(e,Math.min(n,o))}function Gd(o,e){return(o%e+e)%e}function R_(o,e,n,r,a){return r+(o-e)*(a-r)/(n-e)}function b_(o,e,n){return o!==e?(n-o)/(e-o):0}function Ws(o,e,n){return(1-n)*o+n*e}function C_(o,e,n,r){return Ws(o,e,1-Math.exp(-n*r))}function P_(o,e=1){return e-Math.abs(Gd(o,e*2)-e)}function L_(o,e,n){return o<=e?0:o>=n?1:(o=(o-e)/(n-e),o*o*(3-2*o))}function D_(o,e,n){return o<=e?0:o>=n?1:(o=(o-e)/(n-e),o*o*o*(o*(o*6-15)+10))}function I_(o,e){return o+Math.floor(Math.random()*(e-o+1))}function N_(o,e){return o+Math.random()*(e-o)}function U_(o){return o*(.5-Math.random())}function O_(o){o!==void 0&&(Fp=o);let e=Fp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function F_(o){return o*Gs}function k_(o){return o*js}function z_(o){return(o&o-1)===0&&o!==0}function B_(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function H_(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function V_(o,e,n,r,a){const c=Math.cos,f=Math.sin,d=c(n/2),h=f(n/2),m=c((e+r)/2),g=f((e+r)/2),S=c((e-r)/2),y=f((e-r)/2),M=c((r-e)/2),A=f((r-e)/2);switch(a){case"XYX":o.set(d*g,h*S,h*y,d*m);break;case"YZY":o.set(h*y,d*g,h*S,d*m);break;case"ZXZ":o.set(h*S,h*y,d*g,d*m);break;case"XZX":o.set(d*g,h*A,h*M,d*m);break;case"YXY":o.set(h*M,d*g,h*A,d*m);break;case"ZYZ":o.set(h*A,h*M,d*g,d*m);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function Go(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Mn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Nn={DEG2RAD:Gs,RAD2DEG:js,generateUUID:ns,clamp:xn,euclideanModulo:Gd,mapLinear:R_,inverseLerp:b_,lerp:Ws,damp:C_,pingpong:P_,smoothstep:L_,smootherstep:D_,randInt:I_,randFloat:N_,randFloatSpread:U_,seededRandom:O_,degToRad:F_,radToDeg:k_,isPowerOfTwo:z_,ceilPowerOfTwo:B_,floorPowerOfTwo:H_,setQuaternionFromProperEuler:V_,normalize:Mn,denormalize:Go};class dt{constructor(e=0,n=0){dt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(xn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),c=this.x-e.x,f=this.y-e.y;return this.x=c*r-f*a+e.x,this.y=c*a+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class mt{constructor(e,n,r,a,c,f,d,h,m){mt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,c,f,d,h,m)}set(e,n,r,a,c,f,d,h,m){const g=this.elements;return g[0]=e,g[1]=a,g[2]=d,g[3]=n,g[4]=c,g[5]=h,g[6]=r,g[7]=f,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,c=this.elements,f=r[0],d=r[3],h=r[6],m=r[1],g=r[4],S=r[7],y=r[2],M=r[5],A=r[8],T=a[0],_=a[3],v=a[6],U=a[1],P=a[4],D=a[7],ne=a[2],B=a[5],k=a[8];return c[0]=f*T+d*U+h*ne,c[3]=f*_+d*P+h*B,c[6]=f*v+d*D+h*k,c[1]=m*T+g*U+S*ne,c[4]=m*_+g*P+S*B,c[7]=m*v+g*D+S*k,c[2]=y*T+M*U+A*ne,c[5]=y*_+M*P+A*B,c[8]=y*v+M*D+A*k,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],f=e[4],d=e[5],h=e[6],m=e[7],g=e[8];return n*f*g-n*d*m-r*c*g+r*d*h+a*c*m-a*f*h}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],f=e[4],d=e[5],h=e[6],m=e[7],g=e[8],S=g*f-d*m,y=d*h-g*c,M=m*c-f*h,A=n*S+r*y+a*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=S*T,e[1]=(a*m-g*r)*T,e[2]=(d*r-a*f)*T,e[3]=y*T,e[4]=(g*n-a*h)*T,e[5]=(a*c-d*n)*T,e[6]=M*T,e[7]=(r*h-m*n)*T,e[8]=(f*n-r*c)*T,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,c,f,d){const h=Math.cos(c),m=Math.sin(c);return this.set(r*h,r*m,-r*(h*f+m*d)+f+e,-a*m,a*h,-a*(-m*f+h*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(Ru.makeScale(e,n)),this}rotate(e){return this.premultiply(Ru.makeRotation(-e)),this}translate(e,n){return this.premultiply(Ru.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ru=new mt;function Jm(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Fl(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function G_(){const o=Fl("canvas");return o.style.display="block",o}const kp={};function eg(o){o in kp||(kp[o]=!0,console.warn(o))}function W_(o,e,n){return new Promise(function(r,a){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:a();break;case o.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}const zp=new mt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Bp=new mt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),il={[wr]:{transfer:Il,primaries:Nl,toReference:o=>o,fromReference:o=>o},[Qn]:{transfer:zt,primaries:Nl,toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[zl]:{transfer:Il,primaries:Ul,toReference:o=>o.applyMatrix3(Bp),fromReference:o=>o.applyMatrix3(zp)},[Vd]:{transfer:zt,primaries:Ul,toReference:o=>o.convertSRGBToLinear().applyMatrix3(Bp),fromReference:o=>o.applyMatrix3(zp).convertLinearToSRGB()}},X_=new Set([wr,zl]),Pt={enabled:!0,_workingColorSpace:wr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!X_.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,e,n){if(this.enabled===!1||e===n||!e||!n)return o;const r=il[e].toReference,a=il[n].fromReference;return a(r(o))},fromWorkingColorSpace:function(o,e){return this.convert(o,this._workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this._workingColorSpace)},getPrimaries:function(o){return il[o].primaries},getTransfer:function(o){return o===yr?Il:il[o].transfer}};function Ko(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function bu(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Ro;class j_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ro===void 0&&(Ro=Fl("canvas")),Ro.width=e.width,Ro.height=e.height;const r=Ro.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ro}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Fl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),c=a.data;for(let f=0;f<c.length;f++)c[f]=Ko(c[f]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Ko(n[r]/255)*255):n[r]=Ko(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Y_=0;class tg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Y_++}),this.uuid=ns(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let c;if(Array.isArray(a)){c=[];for(let f=0,d=a.length;f<d;f++)a[f].isDataTexture?c.push(Cu(a[f].image)):c.push(Cu(a[f]))}else c=Cu(a);r.url=c}return n||(e.images[this.uuid]=r),r}}function Cu(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?j_.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let q_=0;class An extends eo{constructor(e=An.DEFAULT_IMAGE,n=An.DEFAULT_MAPPING,r=$r,a=$r,c=wn,f=Kr,d=di,h=Vi,m=An.DEFAULT_ANISOTROPY,g=yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:q_++}),this.uuid=ns(),this.name="",this.source=new tg(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=c,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=h,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rd:e.x=e.x-Math.floor(e.x);break;case $r:e.x=e.x<0?0:1;break;case od:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rd:e.y=e.y-Math.floor(e.y);break;case $r:e.y=e.y<0?0:1;break;case od:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=Hm;An.DEFAULT_ANISOTROPY=1;class ln{constructor(e=0,n=0,r=0,a=1){ln.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,c=this.w,f=e.elements;return this.x=f[0]*n+f[4]*r+f[8]*a+f[12]*c,this.y=f[1]*n+f[5]*r+f[9]*a+f[13]*c,this.z=f[2]*n+f[6]*r+f[10]*a+f[14]*c,this.w=f[3]*n+f[7]*r+f[11]*a+f[15]*c,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,c;const h=e.elements,m=h[0],g=h[4],S=h[8],y=h[1],M=h[5],A=h[9],T=h[2],_=h[6],v=h[10];if(Math.abs(g-y)<.01&&Math.abs(S-T)<.01&&Math.abs(A-_)<.01){if(Math.abs(g+y)<.1&&Math.abs(S+T)<.1&&Math.abs(A+_)<.1&&Math.abs(m+M+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const P=(m+1)/2,D=(M+1)/2,ne=(v+1)/2,B=(g+y)/4,k=(S+T)/4,Q=(A+_)/4;return P>D&&P>ne?P<.01?(r=0,a=.707106781,c=.707106781):(r=Math.sqrt(P),a=B/r,c=k/r):D>ne?D<.01?(r=.707106781,a=0,c=.707106781):(a=Math.sqrt(D),r=B/a,c=Q/a):ne<.01?(r=.707106781,a=.707106781,c=0):(c=Math.sqrt(ne),r=k/c,a=Q/c),this.set(r,a,c,n),this}let U=Math.sqrt((_-A)*(_-A)+(S-T)*(S-T)+(y-g)*(y-g));return Math.abs(U)<.001&&(U=1),this.x=(_-A)/U,this.y=(S-T)/U,this.z=(y-g)/U,this.w=Math.acos((m+M+v-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $_ extends eo{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new ln(0,0,e,n),this.scissorTest=!1,this.viewport=new ln(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new An(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,c=this.textures.length;a<c;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new tg(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qr extends $_{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class ng extends An{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Jn,this.minFilter=Jn,this.wrapR=$r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class K_ extends An{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Jn,this.minFilter=Jn,this.wrapR=$r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jr{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,c,f,d){let h=r[a+0],m=r[a+1],g=r[a+2],S=r[a+3];const y=c[f+0],M=c[f+1],A=c[f+2],T=c[f+3];if(d===0){e[n+0]=h,e[n+1]=m,e[n+2]=g,e[n+3]=S;return}if(d===1){e[n+0]=y,e[n+1]=M,e[n+2]=A,e[n+3]=T;return}if(S!==T||h!==y||m!==M||g!==A){let _=1-d;const v=h*y+m*M+g*A+S*T,U=v>=0?1:-1,P=1-v*v;if(P>Number.EPSILON){const ne=Math.sqrt(P),B=Math.atan2(ne,v*U);_=Math.sin(_*B)/ne,d=Math.sin(d*B)/ne}const D=d*U;if(h=h*_+y*D,m=m*_+M*D,g=g*_+A*D,S=S*_+T*D,_===1-d){const ne=1/Math.sqrt(h*h+m*m+g*g+S*S);h*=ne,m*=ne,g*=ne,S*=ne}}e[n]=h,e[n+1]=m,e[n+2]=g,e[n+3]=S}static multiplyQuaternionsFlat(e,n,r,a,c,f){const d=r[a],h=r[a+1],m=r[a+2],g=r[a+3],S=c[f],y=c[f+1],M=c[f+2],A=c[f+3];return e[n]=d*A+g*S+h*M-m*y,e[n+1]=h*A+g*y+m*S-d*M,e[n+2]=m*A+g*M+d*y-h*S,e[n+3]=g*A-d*S-h*y-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,c=e._z,f=e._order,d=Math.cos,h=Math.sin,m=d(r/2),g=d(a/2),S=d(c/2),y=h(r/2),M=h(a/2),A=h(c/2);switch(f){case"XYZ":this._x=y*g*S+m*M*A,this._y=m*M*S-y*g*A,this._z=m*g*A+y*M*S,this._w=m*g*S-y*M*A;break;case"YXZ":this._x=y*g*S+m*M*A,this._y=m*M*S-y*g*A,this._z=m*g*A-y*M*S,this._w=m*g*S+y*M*A;break;case"ZXY":this._x=y*g*S-m*M*A,this._y=m*M*S+y*g*A,this._z=m*g*A+y*M*S,this._w=m*g*S-y*M*A;break;case"ZYX":this._x=y*g*S-m*M*A,this._y=m*M*S+y*g*A,this._z=m*g*A-y*M*S,this._w=m*g*S+y*M*A;break;case"YZX":this._x=y*g*S+m*M*A,this._y=m*M*S+y*g*A,this._z=m*g*A-y*M*S,this._w=m*g*S-y*M*A;break;case"XZY":this._x=y*g*S-m*M*A,this._y=m*M*S-y*g*A,this._z=m*g*A+y*M*S,this._w=m*g*S+y*M*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],c=n[8],f=n[1],d=n[5],h=n[9],m=n[2],g=n[6],S=n[10],y=r+d+S;if(y>0){const M=.5/Math.sqrt(y+1);this._w=.25/M,this._x=(g-h)*M,this._y=(c-m)*M,this._z=(f-a)*M}else if(r>d&&r>S){const M=2*Math.sqrt(1+r-d-S);this._w=(g-h)/M,this._x=.25*M,this._y=(a+f)/M,this._z=(c+m)/M}else if(d>S){const M=2*Math.sqrt(1+d-r-S);this._w=(c-m)/M,this._x=(a+f)/M,this._y=.25*M,this._z=(h+g)/M}else{const M=2*Math.sqrt(1+S-r-d);this._w=(f-a)/M,this._x=(c+m)/M,this._y=(h+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xn(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,c=e._z,f=e._w,d=n._x,h=n._y,m=n._z,g=n._w;return this._x=r*g+f*d+a*m-c*h,this._y=a*g+f*h+c*d-r*m,this._z=c*g+f*m+r*h-a*d,this._w=f*g-r*d-a*h-c*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,c=this._z,f=this._w;let d=f*e._w+r*e._x+a*e._y+c*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=f,this._x=r,this._y=a,this._z=c,this;const h=1-d*d;if(h<=Number.EPSILON){const M=1-n;return this._w=M*f+n*this._w,this._x=M*r+n*this._x,this._y=M*a+n*this._y,this._z=M*c+n*this._z,this.normalize(),this}const m=Math.sqrt(h),g=Math.atan2(m,d),S=Math.sin((1-n)*g)/m,y=Math.sin(n*g)/m;return this._w=f*S+this._w*y,this._x=r*S+this._x*y,this._y=a*S+this._y*y,this._z=c*S+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class le{constructor(e=0,n=0,r=0){le.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Hp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Hp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*a,this.y=c[1]*n+c[4]*r+c[7]*a,this.z=c[2]*n+c[5]*r+c[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,c=e.elements,f=1/(c[3]*n+c[7]*r+c[11]*a+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*a+c[12])*f,this.y=(c[1]*n+c[5]*r+c[9]*a+c[13])*f,this.z=(c[2]*n+c[6]*r+c[10]*a+c[14])*f,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,c=e.x,f=e.y,d=e.z,h=e.w,m=2*(f*a-d*r),g=2*(d*n-c*a),S=2*(c*r-f*n);return this.x=n+h*m+f*S-d*g,this.y=r+h*g+d*m-c*S,this.z=a+h*S+c*g-f*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*a,this.y=c[1]*n+c[5]*r+c[9]*a,this.z=c[2]*n+c[6]*r+c[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,c=e.z,f=n.x,d=n.y,h=n.z;return this.x=a*h-c*d,this.y=c*f-r*h,this.z=r*d-a*f,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Pu.copy(this).projectOnVector(e),this.sub(Pu)}reflect(e){return this.sub(Pu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(xn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pu=new le,Hp=new Jr;class qs{constructor(e=new le(1/0,1/0,1/0),n=new le(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(li.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(li.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=li.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,li):li.fromBufferAttribute(c,f),li.applyMatrix4(e.matrixWorld),this.expandByPoint(li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),rl.copy(r.boundingBox)),rl.applyMatrix4(e.matrixWorld),this.union(rl)}const a=e.children;for(let c=0,f=a.length;c<f;c++)this.expandByObject(a[c],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,li),li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ks),ol.subVectors(this.max,ks),bo.subVectors(e.a,ks),Co.subVectors(e.b,ks),Po.subVectors(e.c,ks),dr.subVectors(Co,bo),fr.subVectors(Po,Co),Br.subVectors(bo,Po);let n=[0,-dr.z,dr.y,0,-fr.z,fr.y,0,-Br.z,Br.y,dr.z,0,-dr.x,fr.z,0,-fr.x,Br.z,0,-Br.x,-dr.y,dr.x,0,-fr.y,fr.x,0,-Br.y,Br.x,0];return!Lu(n,bo,Co,Po,ol)||(n=[1,0,0,0,1,0,0,0,1],!Lu(n,bo,Co,Po,ol))?!1:(sl.crossVectors(dr,fr),n=[sl.x,sl.y,sl.z],Lu(n,bo,Co,Po,ol))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Di=[new le,new le,new le,new le,new le,new le,new le,new le],li=new le,rl=new qs,bo=new le,Co=new le,Po=new le,dr=new le,fr=new le,Br=new le,ks=new le,ol=new le,sl=new le,Hr=new le;function Lu(o,e,n,r,a){for(let c=0,f=o.length-3;c<=f;c+=3){Hr.fromArray(o,c);const d=a.x*Math.abs(Hr.x)+a.y*Math.abs(Hr.y)+a.z*Math.abs(Hr.z),h=e.dot(Hr),m=n.dot(Hr),g=r.dot(Hr);if(Math.max(-Math.max(h,m,g),Math.min(h,m,g))>d)return!1}return!0}const Z_=new qs,zs=new le,Du=new le;class Wd{constructor(e=new le,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):Z_.setFromPoints(e).getCenter(r);let a=0;for(let c=0,f=e.length;c<f;c++)a=Math.max(a,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zs.subVectors(e,this.center);const n=zs.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(zs,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Du.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zs.copy(e.center).add(Du)),this.expandByPoint(zs.copy(e.center).sub(Du))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ii=new le,Iu=new le,al=new le,hr=new le,Nu=new le,ll=new le,Uu=new le;class Xd{constructor(e=new le,n=new le(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ii)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ii.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ii.copy(this.origin).addScaledVector(this.direction,n),Ii.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Iu.copy(e).add(n).multiplyScalar(.5),al.copy(n).sub(e).normalize(),hr.copy(this.origin).sub(Iu);const c=e.distanceTo(n)*.5,f=-this.direction.dot(al),d=hr.dot(this.direction),h=-hr.dot(al),m=hr.lengthSq(),g=Math.abs(1-f*f);let S,y,M,A;if(g>0)if(S=f*h-d,y=f*d-h,A=c*g,S>=0)if(y>=-A)if(y<=A){const T=1/g;S*=T,y*=T,M=S*(S+f*y+2*d)+y*(f*S+y+2*h)+m}else y=c,S=Math.max(0,-(f*y+d)),M=-S*S+y*(y+2*h)+m;else y=-c,S=Math.max(0,-(f*y+d)),M=-S*S+y*(y+2*h)+m;else y<=-A?(S=Math.max(0,-(-f*c+d)),y=S>0?-c:Math.min(Math.max(-c,-h),c),M=-S*S+y*(y+2*h)+m):y<=A?(S=0,y=Math.min(Math.max(-c,-h),c),M=y*(y+2*h)+m):(S=Math.max(0,-(f*c+d)),y=S>0?c:Math.min(Math.max(-c,-h),c),M=-S*S+y*(y+2*h)+m);else y=f>0?-c:c,S=Math.max(0,-(f*y+d)),M=-S*S+y*(y+2*h)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,S),a&&a.copy(Iu).addScaledVector(al,y),M}intersectSphere(e,n){Ii.subVectors(e.center,this.origin);const r=Ii.dot(this.direction),a=Ii.dot(Ii)-r*r,c=e.radius*e.radius;if(a>c)return null;const f=Math.sqrt(c-a),d=r-f,h=r+f;return h<0?null:d<0?this.at(h,n):this.at(d,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,c,f,d,h;const m=1/this.direction.x,g=1/this.direction.y,S=1/this.direction.z,y=this.origin;return m>=0?(r=(e.min.x-y.x)*m,a=(e.max.x-y.x)*m):(r=(e.max.x-y.x)*m,a=(e.min.x-y.x)*m),g>=0?(c=(e.min.y-y.y)*g,f=(e.max.y-y.y)*g):(c=(e.max.y-y.y)*g,f=(e.min.y-y.y)*g),r>f||c>a||((c>r||isNaN(r))&&(r=c),(f<a||isNaN(a))&&(a=f),S>=0?(d=(e.min.z-y.z)*S,h=(e.max.z-y.z)*S):(d=(e.max.z-y.z)*S,h=(e.min.z-y.z)*S),r>h||d>a)||((d>r||r!==r)&&(r=d),(h<a||a!==a)&&(a=h),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Ii)!==null}intersectTriangle(e,n,r,a,c){Nu.subVectors(n,e),ll.subVectors(r,e),Uu.crossVectors(Nu,ll);let f=this.direction.dot(Uu),d;if(f>0){if(a)return null;d=1}else if(f<0)d=-1,f=-f;else return null;hr.subVectors(this.origin,e);const h=d*this.direction.dot(ll.crossVectors(hr,ll));if(h<0)return null;const m=d*this.direction.dot(Nu.cross(hr));if(m<0||h+m>f)return null;const g=-d*hr.dot(Uu);return g<0?null:this.at(g/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Kt{constructor(e,n,r,a,c,f,d,h,m,g,S,y,M,A,T,_){Kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,c,f,d,h,m,g,S,y,M,A,T,_)}set(e,n,r,a,c,f,d,h,m,g,S,y,M,A,T,_){const v=this.elements;return v[0]=e,v[4]=n,v[8]=r,v[12]=a,v[1]=c,v[5]=f,v[9]=d,v[13]=h,v[2]=m,v[6]=g,v[10]=S,v[14]=y,v[3]=M,v[7]=A,v[11]=T,v[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/Lo.setFromMatrixColumn(e,0).length(),c=1/Lo.setFromMatrixColumn(e,1).length(),f=1/Lo.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*f,n[9]=r[9]*f,n[10]=r[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,c=e.z,f=Math.cos(r),d=Math.sin(r),h=Math.cos(a),m=Math.sin(a),g=Math.cos(c),S=Math.sin(c);if(e.order==="XYZ"){const y=f*g,M=f*S,A=d*g,T=d*S;n[0]=h*g,n[4]=-h*S,n[8]=m,n[1]=M+A*m,n[5]=y-T*m,n[9]=-d*h,n[2]=T-y*m,n[6]=A+M*m,n[10]=f*h}else if(e.order==="YXZ"){const y=h*g,M=h*S,A=m*g,T=m*S;n[0]=y+T*d,n[4]=A*d-M,n[8]=f*m,n[1]=f*S,n[5]=f*g,n[9]=-d,n[2]=M*d-A,n[6]=T+y*d,n[10]=f*h}else if(e.order==="ZXY"){const y=h*g,M=h*S,A=m*g,T=m*S;n[0]=y-T*d,n[4]=-f*S,n[8]=A+M*d,n[1]=M+A*d,n[5]=f*g,n[9]=T-y*d,n[2]=-f*m,n[6]=d,n[10]=f*h}else if(e.order==="ZYX"){const y=f*g,M=f*S,A=d*g,T=d*S;n[0]=h*g,n[4]=A*m-M,n[8]=y*m+T,n[1]=h*S,n[5]=T*m+y,n[9]=M*m-A,n[2]=-m,n[6]=d*h,n[10]=f*h}else if(e.order==="YZX"){const y=f*h,M=f*m,A=d*h,T=d*m;n[0]=h*g,n[4]=T-y*S,n[8]=A*S+M,n[1]=S,n[5]=f*g,n[9]=-d*g,n[2]=-m*g,n[6]=M*S+A,n[10]=y-T*S}else if(e.order==="XZY"){const y=f*h,M=f*m,A=d*h,T=d*m;n[0]=h*g,n[4]=-S,n[8]=m*g,n[1]=y*S+T,n[5]=f*g,n[9]=M*S-A,n[2]=A*S-M,n[6]=d*g,n[10]=T*S+y}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Q_,e,J_)}lookAt(e,n,r){const a=this.elements;return Hn.subVectors(e,n),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),pr.crossVectors(r,Hn),pr.lengthSq()===0&&(Math.abs(r.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),pr.crossVectors(r,Hn)),pr.normalize(),cl.crossVectors(Hn,pr),a[0]=pr.x,a[4]=cl.x,a[8]=Hn.x,a[1]=pr.y,a[5]=cl.y,a[9]=Hn.y,a[2]=pr.z,a[6]=cl.z,a[10]=Hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,c=this.elements,f=r[0],d=r[4],h=r[8],m=r[12],g=r[1],S=r[5],y=r[9],M=r[13],A=r[2],T=r[6],_=r[10],v=r[14],U=r[3],P=r[7],D=r[11],ne=r[15],B=a[0],k=a[4],Q=a[8],L=a[12],R=a[1],G=a[5],Se=a[9],ce=a[13],Re=a[2],be=a[6],xe=a[10],Me=a[14],I=a[3],Te=a[7],ge=a[11],O=a[15];return c[0]=f*B+d*R+h*Re+m*I,c[4]=f*k+d*G+h*be+m*Te,c[8]=f*Q+d*Se+h*xe+m*ge,c[12]=f*L+d*ce+h*Me+m*O,c[1]=g*B+S*R+y*Re+M*I,c[5]=g*k+S*G+y*be+M*Te,c[9]=g*Q+S*Se+y*xe+M*ge,c[13]=g*L+S*ce+y*Me+M*O,c[2]=A*B+T*R+_*Re+v*I,c[6]=A*k+T*G+_*be+v*Te,c[10]=A*Q+T*Se+_*xe+v*ge,c[14]=A*L+T*ce+_*Me+v*O,c[3]=U*B+P*R+D*Re+ne*I,c[7]=U*k+P*G+D*be+ne*Te,c[11]=U*Q+P*Se+D*xe+ne*ge,c[15]=U*L+P*ce+D*Me+ne*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],c=e[12],f=e[1],d=e[5],h=e[9],m=e[13],g=e[2],S=e[6],y=e[10],M=e[14],A=e[3],T=e[7],_=e[11],v=e[15];return A*(+c*h*S-a*m*S-c*d*y+r*m*y+a*d*M-r*h*M)+T*(+n*h*M-n*m*y+c*f*y-a*f*M+a*m*g-c*h*g)+_*(+n*m*S-n*d*M-c*f*S+r*f*M+c*d*g-r*m*g)+v*(-a*d*g-n*h*S+n*d*y+a*f*S-r*f*y+r*h*g)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],f=e[4],d=e[5],h=e[6],m=e[7],g=e[8],S=e[9],y=e[10],M=e[11],A=e[12],T=e[13],_=e[14],v=e[15],U=S*_*m-T*y*m+T*h*M-d*_*M-S*h*v+d*y*v,P=A*y*m-g*_*m-A*h*M+f*_*M+g*h*v-f*y*v,D=g*T*m-A*S*m+A*d*M-f*T*M-g*d*v+f*S*v,ne=A*S*h-g*T*h-A*d*y+f*T*y+g*d*_-f*S*_,B=n*U+r*P+a*D+c*ne;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/B;return e[0]=U*k,e[1]=(T*y*c-S*_*c-T*a*M+r*_*M+S*a*v-r*y*v)*k,e[2]=(d*_*c-T*h*c+T*a*m-r*_*m-d*a*v+r*h*v)*k,e[3]=(S*h*c-d*y*c-S*a*m+r*y*m+d*a*M-r*h*M)*k,e[4]=P*k,e[5]=(g*_*c-A*y*c+A*a*M-n*_*M-g*a*v+n*y*v)*k,e[6]=(A*h*c-f*_*c-A*a*m+n*_*m+f*a*v-n*h*v)*k,e[7]=(f*y*c-g*h*c+g*a*m-n*y*m-f*a*M+n*h*M)*k,e[8]=D*k,e[9]=(A*S*c-g*T*c-A*r*M+n*T*M+g*r*v-n*S*v)*k,e[10]=(f*T*c-A*d*c+A*r*m-n*T*m-f*r*v+n*d*v)*k,e[11]=(g*d*c-f*S*c-g*r*m+n*S*m+f*r*M-n*d*M)*k,e[12]=ne*k,e[13]=(g*T*a-A*S*a+A*r*y-n*T*y-g*r*_+n*S*_)*k,e[14]=(A*d*a-f*T*a-A*r*h+n*T*h+f*r*_-n*d*_)*k,e[15]=(f*S*a-g*d*a+g*r*h-n*S*h-f*r*y+n*d*y)*k,this}scale(e){const n=this.elements,r=e.x,a=e.y,c=e.z;return n[0]*=r,n[4]*=a,n[8]*=c,n[1]*=r,n[5]*=a,n[9]*=c,n[2]*=r,n[6]*=a,n[10]*=c,n[3]*=r,n[7]*=a,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),c=1-r,f=e.x,d=e.y,h=e.z,m=c*f,g=c*d;return this.set(m*f+r,m*d-a*h,m*h+a*d,0,m*d+a*h,g*d+r,g*h-a*f,0,m*h-a*d,g*h+a*f,c*h*h+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,c,f){return this.set(1,r,c,0,e,1,f,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,c=n._x,f=n._y,d=n._z,h=n._w,m=c+c,g=f+f,S=d+d,y=c*m,M=c*g,A=c*S,T=f*g,_=f*S,v=d*S,U=h*m,P=h*g,D=h*S,ne=r.x,B=r.y,k=r.z;return a[0]=(1-(T+v))*ne,a[1]=(M+D)*ne,a[2]=(A-P)*ne,a[3]=0,a[4]=(M-D)*B,a[5]=(1-(y+v))*B,a[6]=(_+U)*B,a[7]=0,a[8]=(A+P)*k,a[9]=(_-U)*k,a[10]=(1-(y+T))*k,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let c=Lo.set(a[0],a[1],a[2]).length();const f=Lo.set(a[4],a[5],a[6]).length(),d=Lo.set(a[8],a[9],a[10]).length();this.determinant()<0&&(c=-c),e.x=a[12],e.y=a[13],e.z=a[14],ci.copy(this);const m=1/c,g=1/f,S=1/d;return ci.elements[0]*=m,ci.elements[1]*=m,ci.elements[2]*=m,ci.elements[4]*=g,ci.elements[5]*=g,ci.elements[6]*=g,ci.elements[8]*=S,ci.elements[9]*=S,ci.elements[10]*=S,n.setFromRotationMatrix(ci),r.x=c,r.y=f,r.z=d,this}makePerspective(e,n,r,a,c,f,d=zi){const h=this.elements,m=2*c/(n-e),g=2*c/(r-a),S=(n+e)/(n-e),y=(r+a)/(r-a);let M,A;if(d===zi)M=-(f+c)/(f-c),A=-2*f*c/(f-c);else if(d===Ol)M=-f/(f-c),A=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return h[0]=m,h[4]=0,h[8]=S,h[12]=0,h[1]=0,h[5]=g,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=A,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,r,a,c,f,d=zi){const h=this.elements,m=1/(n-e),g=1/(r-a),S=1/(f-c),y=(n+e)*m,M=(r+a)*g;let A,T;if(d===zi)A=(f+c)*S,T=-2*S;else if(d===Ol)A=c*S,T=-1*S;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return h[0]=2*m,h[4]=0,h[8]=0,h[12]=-y,h[1]=0,h[5]=2*g,h[9]=0,h[13]=-M,h[2]=0,h[6]=0,h[10]=T,h[14]=-A,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Lo=new le,ci=new Kt,Q_=new le(0,0,0),J_=new le(1,1,1),pr=new le,cl=new le,Hn=new le,Vp=new Kt,Gp=new Jr;class dn{constructor(e=0,n=0,r=0,a=dn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,c=a[0],f=a[4],d=a[8],h=a[1],m=a[5],g=a[9],S=a[2],y=a[6],M=a[10];switch(n){case"XYZ":this._y=Math.asin(xn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(y,m),this._z=0);break;case"YXZ":this._x=Math.asin(-xn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-S,c),this._z=0);break;case"ZXY":this._x=Math.asin(xn(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-S,M),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(h,c));break;case"ZYX":this._y=Math.asin(-xn(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(y,M),this._z=Math.atan2(h,c)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(xn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-S,c)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-xn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(y,m),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Vp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vp,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Gp.setFromEuler(this),this.setFromQuaternion(Gp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}dn.DEFAULT_ORDER="XYZ";class jd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ex=0;const Wp=new le,Do=new Jr,Ni=new Kt,ul=new le,Bs=new le,tx=new le,nx=new Jr,Xp=new le(1,0,0),jp=new le(0,1,0),Yp=new le(0,0,1),qp={type:"added"},ix={type:"removed"},Io={type:"childadded",child:null},Ou={type:"childremoved",child:null};class Wn extends eo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ex++}),this.uuid=ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wn.DEFAULT_UP.clone();const e=new le,n=new dn,r=new Jr,a=new le(1,1,1);function c(){r.setFromEuler(n,!1)}function f(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Kt},normalMatrix:{value:new mt}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=Wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Do.setFromAxisAngle(e,n),this.quaternion.multiply(Do),this}rotateOnWorldAxis(e,n){return Do.setFromAxisAngle(e,n),this.quaternion.premultiply(Do),this}rotateX(e){return this.rotateOnAxis(Xp,e)}rotateY(e){return this.rotateOnAxis(jp,e)}rotateZ(e){return this.rotateOnAxis(Yp,e)}translateOnAxis(e,n){return Wp.copy(e).applyQuaternion(this.quaternion),this.position.add(Wp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Xp,e)}translateY(e){return this.translateOnAxis(jp,e)}translateZ(e){return this.translateOnAxis(Yp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ni.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?ul.copy(e):ul.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ni.lookAt(Bs,ul,this.up):Ni.lookAt(ul,Bs,this.up),this.quaternion.setFromRotationMatrix(Ni),a&&(Ni.extractRotation(a.matrixWorld),Do.setFromRotationMatrix(Ni),this.quaternion.premultiply(Do.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qp),Io.child=e,this.dispatchEvent(Io),Io.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(ix),Ou.child=e,this.dispatchEvent(Ou),Ou.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qp),Io.child=e,this.dispatchEvent(Io),Io.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const f=this.children[r].getObjectByProperty(e,n);if(f!==void 0)return f}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let c=0,f=a.length;c<f;c++)a[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,e,tx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,nx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let c=0,f=a.length;c<f;c++)a[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function c(d,h){return d[h.uuid]===void 0&&(d[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const h=d.shapes;if(Array.isArray(h))for(let m=0,g=h.length;m<g;m++){const S=h[m];c(e.shapes,S)}else c(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let h=0,m=this.material.length;h<m;h++)d.push(c(e.materials,this.material[h]));a.material=d}else a.material=c(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const h=this.animations[d];a.animations.push(c(e.animations,h))}}if(n){const d=f(e.geometries),h=f(e.materials),m=f(e.textures),g=f(e.images),S=f(e.shapes),y=f(e.skeletons),M=f(e.animations),A=f(e.nodes);d.length>0&&(r.geometries=d),h.length>0&&(r.materials=h),m.length>0&&(r.textures=m),g.length>0&&(r.images=g),S.length>0&&(r.shapes=S),y.length>0&&(r.skeletons=y),M.length>0&&(r.animations=M),A.length>0&&(r.nodes=A)}return r.object=a,r;function f(d){const h=[];for(const m in d){const g=d[m];delete g.metadata,h.push(g)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}Wn.DEFAULT_UP=new le(0,1,0);Wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ui=new le,Ui=new le,Fu=new le,Oi=new le,No=new le,Uo=new le,$p=new le,ku=new le,zu=new le,Bu=new le;class yi{constructor(e=new le,n=new le,r=new le){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),ui.subVectors(e,n),a.cross(ui);const c=a.lengthSq();return c>0?a.multiplyScalar(1/Math.sqrt(c)):a.set(0,0,0)}static getBarycoord(e,n,r,a,c){ui.subVectors(a,n),Ui.subVectors(r,n),Fu.subVectors(e,n);const f=ui.dot(ui),d=ui.dot(Ui),h=ui.dot(Fu),m=Ui.dot(Ui),g=Ui.dot(Fu),S=f*m-d*d;if(S===0)return c.set(0,0,0),null;const y=1/S,M=(m*h-d*g)*y,A=(f*g-d*h)*y;return c.set(1-M-A,A,M)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(e,n,r,a,c,f,d,h){return this.getBarycoord(e,n,r,a,Oi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(c,Oi.x),h.addScaledVector(f,Oi.y),h.addScaledVector(d,Oi.z),h)}static isFrontFacing(e,n,r,a){return ui.subVectors(r,n),Ui.subVectors(e,n),ui.cross(Ui).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ui.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),ui.cross(Ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return yi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,c){return yi.getInterpolation(e,this.a,this.b,this.c,n,r,a,c)}containsPoint(e){return yi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,c=this.c;let f,d;No.subVectors(a,r),Uo.subVectors(c,r),ku.subVectors(e,r);const h=No.dot(ku),m=Uo.dot(ku);if(h<=0&&m<=0)return n.copy(r);zu.subVectors(e,a);const g=No.dot(zu),S=Uo.dot(zu);if(g>=0&&S<=g)return n.copy(a);const y=h*S-g*m;if(y<=0&&h>=0&&g<=0)return f=h/(h-g),n.copy(r).addScaledVector(No,f);Bu.subVectors(e,c);const M=No.dot(Bu),A=Uo.dot(Bu);if(A>=0&&M<=A)return n.copy(c);const T=M*m-h*A;if(T<=0&&m>=0&&A<=0)return d=m/(m-A),n.copy(r).addScaledVector(Uo,d);const _=g*A-M*S;if(_<=0&&S-g>=0&&M-A>=0)return $p.subVectors(c,a),d=(S-g)/(S-g+(M-A)),n.copy(a).addScaledVector($p,d);const v=1/(_+T+y);return f=T*v,d=y*v,n.copy(r).addScaledVector(No,f).addScaledVector(Uo,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ig={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mr={h:0,s:0,l:0},dl={h:0,s:0,l:0};function Hu(o,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?o+(e-o)*6*n:n<1/2?e:n<2/3?o+(e-o)*6*(2/3-n):o}class It{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=Pt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Pt.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=Pt.workingColorSpace){if(e=Gd(e,1),n=xn(n,0,1),r=xn(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,f=2*r-c;this.r=Hu(f,c,e+1/3),this.g=Hu(f,c,e),this.b=Hu(f,c,e-1/3)}return Pt.toWorkingColorSpace(this,a),this}setStyle(e,n=Qn){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=a[1],d=a[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=a[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Qn){const r=ig[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ko(e.r),this.g=Ko(e.g),this.b=Ko(e.b),this}copyLinearToSRGB(e){return this.r=bu(e.r),this.g=bu(e.g),this.b=bu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qn){return Pt.fromWorkingColorSpace(_n.copy(this),e),Math.round(xn(_n.r*255,0,255))*65536+Math.round(xn(_n.g*255,0,255))*256+Math.round(xn(_n.b*255,0,255))}getHexString(e=Qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Pt.workingColorSpace){Pt.fromWorkingColorSpace(_n.copy(this),n);const r=_n.r,a=_n.g,c=_n.b,f=Math.max(r,a,c),d=Math.min(r,a,c);let h,m;const g=(d+f)/2;if(d===f)h=0,m=0;else{const S=f-d;switch(m=g<=.5?S/(f+d):S/(2-f-d),f){case r:h=(a-c)/S+(a<c?6:0);break;case a:h=(c-r)/S+2;break;case c:h=(r-a)/S+4;break}h/=6}return e.h=h,e.s=m,e.l=g,e}getRGB(e,n=Pt.workingColorSpace){return Pt.fromWorkingColorSpace(_n.copy(this),n),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=Qn){Pt.fromWorkingColorSpace(_n.copy(this),e);const n=_n.r,r=_n.g,a=_n.b;return e!==Qn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(mr),this.setHSL(mr.h+e,mr.s+n,mr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(mr),e.getHSL(dl);const r=Ws(mr.h,dl.h,n),a=Ws(mr.s,dl.s,n),c=Ws(mr.l,dl.l,n);return this.setHSL(r,a,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*a,this.g=c[1]*n+c[4]*r+c[7]*a,this.b=c[2]*n+c[5]*r+c[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _n=new It;It.NAMES=ig;let rx=0;class Bl extends eo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rx++}),this.uuid=ns(),this.name="",this.type="Material",this.blending=qo,this.side=Hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ed,this.blendDst=td,this.blendEquation=Yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=Dl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Np,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ao,this.stencilZFail=Ao,this.stencilZPass=Ao,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==qo&&(r.blending=this.blending),this.side!==Hi&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==ed&&(r.blendSrc=this.blendSrc),this.blendDst!==td&&(r.blendDst=this.blendDst),this.blendEquation!==Yr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Dl&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Np&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ao&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ao&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ao&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(c){const f=[];for(const d in c){const h=c[d];delete h.metadata,f.push(h)}return f}if(n){const c=a(e.textures),f=a(e.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let c=0;c!==a;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class Hl extends Bl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=Bm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $t=new le,fl=new dt;class Si{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Up,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return eg("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,c=this.itemSize;a<c;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)fl.fromBufferAttribute(this,n),fl.applyMatrix3(e),this.setXY(n,fl.x,fl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)$t.fromBufferAttribute(this,n),$t.applyMatrix3(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)$t.fromBufferAttribute(this,n),$t.applyMatrix4(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)$t.fromBufferAttribute(this,n),$t.applyNormalMatrix(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)$t.fromBufferAttribute(this,n),$t.transformDirection(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Go(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Mn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Go(n,this.array)),n}setX(e,n){return this.normalized&&(n=Mn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Go(n,this.array)),n}setY(e,n){return this.normalized&&(n=Mn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Go(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Mn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Go(n,this.array)),n}setW(e,n){return this.normalized&&(n=Mn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Mn(n,this.array),r=Mn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=Mn(n,this.array),r=Mn(r,this.array),a=Mn(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,c){return e*=this.itemSize,this.normalized&&(n=Mn(n,this.array),r=Mn(r,this.array),a=Mn(a,this.array),c=Mn(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Up&&(e.usage=this.usage),e}}class rg extends Si{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class og extends Si{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Bi extends Si{constructor(e,n,r){super(new Float32Array(e),n,r)}}let ox=0;const Zn=new Kt,Vu=new Wn,Oo=new le,Vn=new qs,Hs=new qs,an=new le;class Tr extends eo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ox++}),this.uuid=ns(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jm(e)?og:rg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new mt().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,n,r){return Zn.makeTranslation(e,n,r),this.applyMatrix4(Zn),this}scale(e,n,r){return Zn.makeScale(e,n,r),this.applyMatrix4(Zn),this}lookAt(e){return Vu.lookAt(e),Vu.updateMatrix(),this.applyMatrix4(Vu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Oo).negate(),this.translate(Oo.x,Oo.y,Oo.z),this}setFromPoints(e){const n=[];for(let r=0,a=e.length;r<a;r++){const c=e[r];n.push(c.x,c.y,c.z||0)}return this.setAttribute("position",new Bi(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qs);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new le(-1/0,-1/0,-1/0),new le(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const c=n[r];Vn.setFromBufferAttribute(c),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wd);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new le,1/0);return}if(e){const r=this.boundingSphere.center;if(Vn.setFromBufferAttribute(e),n)for(let c=0,f=n.length;c<f;c++){const d=n[c];Hs.setFromBufferAttribute(d),this.morphTargetsRelative?(an.addVectors(Vn.min,Hs.min),Vn.expandByPoint(an),an.addVectors(Vn.max,Hs.max),Vn.expandByPoint(an)):(Vn.expandByPoint(Hs.min),Vn.expandByPoint(Hs.max))}Vn.getCenter(r);let a=0;for(let c=0,f=e.count;c<f;c++)an.fromBufferAttribute(e,c),a=Math.max(a,r.distanceToSquared(an));if(n)for(let c=0,f=n.length;c<f;c++){const d=n[c],h=this.morphTargetsRelative;for(let m=0,g=d.count;m<g;m++)an.fromBufferAttribute(d,m),h&&(Oo.fromBufferAttribute(e,m),an.add(Oo)),a=Math.max(a,r.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Si(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],h=[];for(let Q=0;Q<r.count;Q++)d[Q]=new le,h[Q]=new le;const m=new le,g=new le,S=new le,y=new dt,M=new dt,A=new dt,T=new le,_=new le;function v(Q,L,R){m.fromBufferAttribute(r,Q),g.fromBufferAttribute(r,L),S.fromBufferAttribute(r,R),y.fromBufferAttribute(c,Q),M.fromBufferAttribute(c,L),A.fromBufferAttribute(c,R),g.sub(m),S.sub(m),M.sub(y),A.sub(y);const G=1/(M.x*A.y-A.x*M.y);isFinite(G)&&(T.copy(g).multiplyScalar(A.y).addScaledVector(S,-M.y).multiplyScalar(G),_.copy(S).multiplyScalar(M.x).addScaledVector(g,-A.x).multiplyScalar(G),d[Q].add(T),d[L].add(T),d[R].add(T),h[Q].add(_),h[L].add(_),h[R].add(_))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let Q=0,L=U.length;Q<L;++Q){const R=U[Q],G=R.start,Se=R.count;for(let ce=G,Re=G+Se;ce<Re;ce+=3)v(e.getX(ce+0),e.getX(ce+1),e.getX(ce+2))}const P=new le,D=new le,ne=new le,B=new le;function k(Q){ne.fromBufferAttribute(a,Q),B.copy(ne);const L=d[Q];P.copy(L),P.sub(ne.multiplyScalar(ne.dot(L))).normalize(),D.crossVectors(B,L);const G=D.dot(h[Q])<0?-1:1;f.setXYZW(Q,P.x,P.y,P.z,G)}for(let Q=0,L=U.length;Q<L;++Q){const R=U[Q],G=R.start,Se=R.count;for(let ce=G,Re=G+Se;ce<Re;ce+=3)k(e.getX(ce+0)),k(e.getX(ce+1)),k(e.getX(ce+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Si(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let y=0,M=r.count;y<M;y++)r.setXYZ(y,0,0,0);const a=new le,c=new le,f=new le,d=new le,h=new le,m=new le,g=new le,S=new le;if(e)for(let y=0,M=e.count;y<M;y+=3){const A=e.getX(y+0),T=e.getX(y+1),_=e.getX(y+2);a.fromBufferAttribute(n,A),c.fromBufferAttribute(n,T),f.fromBufferAttribute(n,_),g.subVectors(f,c),S.subVectors(a,c),g.cross(S),d.fromBufferAttribute(r,A),h.fromBufferAttribute(r,T),m.fromBufferAttribute(r,_),d.add(g),h.add(g),m.add(g),r.setXYZ(A,d.x,d.y,d.z),r.setXYZ(T,h.x,h.y,h.z),r.setXYZ(_,m.x,m.y,m.z)}else for(let y=0,M=n.count;y<M;y+=3)a.fromBufferAttribute(n,y+0),c.fromBufferAttribute(n,y+1),f.fromBufferAttribute(n,y+2),g.subVectors(f,c),S.subVectors(a,c),g.cross(S),r.setXYZ(y+0,g.x,g.y,g.z),r.setXYZ(y+1,g.x,g.y,g.z),r.setXYZ(y+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)an.fromBufferAttribute(e,n),an.normalize(),e.setXYZ(n,an.x,an.y,an.z)}toNonIndexed(){function e(d,h){const m=d.array,g=d.itemSize,S=d.normalized,y=new m.constructor(h.length*g);let M=0,A=0;for(let T=0,_=h.length;T<_;T++){d.isInterleavedBufferAttribute?M=h[T]*d.data.stride+d.offset:M=h[T]*g;for(let v=0;v<g;v++)y[A++]=m[M++]}return new Si(y,g,S)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Tr,r=this.index.array,a=this.attributes;for(const d in a){const h=a[d],m=e(h,r);n.setAttribute(d,m)}const c=this.morphAttributes;for(const d in c){const h=[],m=c[d];for(let g=0,S=m.length;g<S;g++){const y=m[g],M=e(y,r);h.push(M)}n.morphAttributes[d]=h}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,h=f.length;d<h;d++){const m=f[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const m in h)h[m]!==void 0&&(e[m]=h[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const h in r){const m=r[h];e.data.attributes[h]=m.toJSON(e.data)}const a={};let c=!1;for(const h in this.morphAttributes){const m=this.morphAttributes[h],g=[];for(let S=0,y=m.length;S<y;S++){const M=m[S];g.push(M.toJSON(e.data))}g.length>0&&(a[h]=g,c=!0)}c&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const m in a){const g=a[m];this.setAttribute(m,g.clone(n))}const c=e.morphAttributes;for(const m in c){const g=[],S=c[m];for(let y=0,M=S.length;y<M;y++)g.push(S[y].clone(n));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let m=0,g=f.length;m<g;m++){const S=f[m];this.addGroup(S.start,S.count,S.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Kp=new Kt,Vr=new Xd,hl=new Wd,Zp=new le,Fo=new le,ko=new le,zo=new le,Gu=new le,pl=new le,ml=new dt,gl=new dt,vl=new dt,Qp=new le,Jp=new le,em=new le,_l=new le,xl=new le;class ei extends Wn{constructor(e=new Tr,n=new Hl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=a.length;c<f;c++){const d=a[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(c&&d){pl.set(0,0,0);for(let h=0,m=c.length;h<m;h++){const g=d[h],S=c[h];g!==0&&(Gu.fromBufferAttribute(S,e),f?pl.addScaledVector(Gu,g):pl.addScaledVector(Gu.sub(n),g))}n.add(pl)}return n}raycast(e,n){const r=this.geometry,a=this.material,c=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),hl.copy(r.boundingSphere),hl.applyMatrix4(c),Vr.copy(e.ray).recast(e.near),!(hl.containsPoint(Vr.origin)===!1&&(Vr.intersectSphere(hl,Zp)===null||Vr.origin.distanceToSquared(Zp)>(e.far-e.near)**2))&&(Kp.copy(c).invert(),Vr.copy(e.ray).applyMatrix4(Kp),!(r.boundingBox!==null&&Vr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Vr)))}_computeIntersections(e,n,r){let a;const c=this.geometry,f=this.material,d=c.index,h=c.attributes.position,m=c.attributes.uv,g=c.attributes.uv1,S=c.attributes.normal,y=c.groups,M=c.drawRange;if(d!==null)if(Array.isArray(f))for(let A=0,T=y.length;A<T;A++){const _=y[A],v=f[_.materialIndex],U=Math.max(_.start,M.start),P=Math.min(d.count,Math.min(_.start+_.count,M.start+M.count));for(let D=U,ne=P;D<ne;D+=3){const B=d.getX(D),k=d.getX(D+1),Q=d.getX(D+2);a=yl(this,v,e,r,m,g,S,B,k,Q),a&&(a.faceIndex=Math.floor(D/3),a.face.materialIndex=_.materialIndex,n.push(a))}}else{const A=Math.max(0,M.start),T=Math.min(d.count,M.start+M.count);for(let _=A,v=T;_<v;_+=3){const U=d.getX(_),P=d.getX(_+1),D=d.getX(_+2);a=yl(this,f,e,r,m,g,S,U,P,D),a&&(a.faceIndex=Math.floor(_/3),n.push(a))}}else if(h!==void 0)if(Array.isArray(f))for(let A=0,T=y.length;A<T;A++){const _=y[A],v=f[_.materialIndex],U=Math.max(_.start,M.start),P=Math.min(h.count,Math.min(_.start+_.count,M.start+M.count));for(let D=U,ne=P;D<ne;D+=3){const B=D,k=D+1,Q=D+2;a=yl(this,v,e,r,m,g,S,B,k,Q),a&&(a.faceIndex=Math.floor(D/3),a.face.materialIndex=_.materialIndex,n.push(a))}}else{const A=Math.max(0,M.start),T=Math.min(h.count,M.start+M.count);for(let _=A,v=T;_<v;_+=3){const U=_,P=_+1,D=_+2;a=yl(this,f,e,r,m,g,S,U,P,D),a&&(a.faceIndex=Math.floor(_/3),n.push(a))}}}}function sx(o,e,n,r,a,c,f,d){let h;if(e.side===Tn?h=r.intersectTriangle(f,c,a,!0,d):h=r.intersectTriangle(a,c,f,e.side===Hi,d),h===null)return null;xl.copy(d),xl.applyMatrix4(o.matrixWorld);const m=n.ray.origin.distanceTo(xl);return m<n.near||m>n.far?null:{distance:m,point:xl.clone(),object:o}}function yl(o,e,n,r,a,c,f,d,h,m){o.getVertexPosition(d,Fo),o.getVertexPosition(h,ko),o.getVertexPosition(m,zo);const g=sx(o,e,n,r,Fo,ko,zo,_l);if(g){a&&(ml.fromBufferAttribute(a,d),gl.fromBufferAttribute(a,h),vl.fromBufferAttribute(a,m),g.uv=yi.getInterpolation(_l,Fo,ko,zo,ml,gl,vl,new dt)),c&&(ml.fromBufferAttribute(c,d),gl.fromBufferAttribute(c,h),vl.fromBufferAttribute(c,m),g.uv1=yi.getInterpolation(_l,Fo,ko,zo,ml,gl,vl,new dt)),f&&(Qp.fromBufferAttribute(f,d),Jp.fromBufferAttribute(f,h),em.fromBufferAttribute(f,m),g.normal=yi.getInterpolation(_l,Fo,ko,zo,Qp,Jp,em,new le),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const S={a:d,b:h,c:m,normal:new le,materialIndex:0};yi.getNormal(Fo,ko,zo,S.normal),g.face=S}return g}class $s extends Tr{constructor(e=1,n=1,r=1,a=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:c,depthSegments:f};const d=this;a=Math.floor(a),c=Math.floor(c),f=Math.floor(f);const h=[],m=[],g=[],S=[];let y=0,M=0;A("z","y","x",-1,-1,r,n,e,f,c,0),A("z","y","x",1,-1,r,n,-e,f,c,1),A("x","z","y",1,1,e,r,n,a,f,2),A("x","z","y",1,-1,e,r,-n,a,f,3),A("x","y","z",1,-1,e,n,r,a,c,4),A("x","y","z",-1,-1,e,n,-r,a,c,5),this.setIndex(h),this.setAttribute("position",new Bi(m,3)),this.setAttribute("normal",new Bi(g,3)),this.setAttribute("uv",new Bi(S,2));function A(T,_,v,U,P,D,ne,B,k,Q,L){const R=D/k,G=ne/Q,Se=D/2,ce=ne/2,Re=B/2,be=k+1,xe=Q+1;let Me=0,I=0;const Te=new le;for(let ge=0;ge<xe;ge++){const O=ge*G-ce;for(let pe=0;pe<be;pe++){const ke=pe*R-Se;Te[T]=ke*U,Te[_]=O*P,Te[v]=Re,m.push(Te.x,Te.y,Te.z),Te[T]=0,Te[_]=0,Te[v]=B>0?1:-1,g.push(Te.x,Te.y,Te.z),S.push(pe/k),S.push(1-ge/Q),Me+=1}}for(let ge=0;ge<Q;ge++)for(let O=0;O<k;O++){const pe=y+O+be*ge,ke=y+O+be*(ge+1),J=y+(O+1)+be*(ge+1),Ee=y+(O+1)+be*ge;h.push(pe,ke,Ee),h.push(ke,J,Ee),I+=6}d.addGroup(M,I,L),M+=I,y+=Me}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ts(o){const e={};for(const n in o){e[n]={};for(const r in o[n]){const a=o[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function En(o){const e={};for(let n=0;n<o.length;n++){const r=ts(o[n]);for(const a in r)e[a]=r[a]}return e}function ax(o){const e=[];for(let n=0;n<o.length;n++)e.push(o[n].clone());return e}function sg(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Pt.workingColorSpace}const lx={clone:ts,merge:En};var cx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ux=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Er extends Bl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cx,this.fragmentShader=ux,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ts(e.uniforms),this.uniformsGroups=ax(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const f=this.uniforms[a].value;f&&f.isTexture?n.uniforms[a]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?n.uniforms[a]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[a]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[a]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[a]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[a]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[a]={type:"m4",value:f.toArray()}:n.uniforms[a]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class ag extends Wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=zi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const gr=new le,tm=new dt,nm=new dt;class Gn extends ag{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=js*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Gs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return js*2*Math.atan(Math.tan(Gs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){gr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gr.x,gr.y).multiplyScalar(-e/gr.z),gr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(gr.x,gr.y).multiplyScalar(-e/gr.z)}getViewSize(e,n){return this.getViewBounds(e,tm,nm),n.subVectors(nm,tm)}setViewOffset(e,n,r,a,c,f){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Gs*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,c=-.5*a;const f=this.view;if(this.view!==null&&this.view.enabled){const h=f.fullWidth,m=f.fullHeight;c+=f.offsetX*a/h,n-=f.offsetY*r/m,a*=f.width/h,r*=f.height/m}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Bo=-90,Ho=1;class dx extends Wn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Gn(Bo,Ho,e,n);a.layers=this.layers,this.add(a);const c=new Gn(Bo,Ho,e,n);c.layers=this.layers,this.add(c);const f=new Gn(Bo,Ho,e,n);f.layers=this.layers,this.add(f);const d=new Gn(Bo,Ho,e,n);d.layers=this.layers,this.add(d);const h=new Gn(Bo,Ho,e,n);h.layers=this.layers,this.add(h);const m=new Gn(Bo,Ho,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,c,f,d,h]=n;for(const m of n)this.remove(m);if(e===zi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Ol)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,h,m,g]=this.children,S=e.getRenderTarget(),y=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,c),e.setRenderTarget(r,1,a),e.render(n,f),e.setRenderTarget(r,2,a),e.render(n,d),e.setRenderTarget(r,3,a),e.render(n,h),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,a),e.render(n,g),e.setRenderTarget(S,y,M),e.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class lg extends An{constructor(e,n,r,a,c,f,d,h,m,g){e=e!==void 0?e:[],n=n!==void 0?n:Zo,super(e,n,r,a,c,f,d,h,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class fx extends Qr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new lg(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:wn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new $s(5,5,5),c=new Er({name:"CubemapFromEquirect",uniforms:ts(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Tn,blending:Sr});c.uniforms.tEquirect.value=n;const f=new ei(a,c),d=n.minFilter;return n.minFilter===Kr&&(n.minFilter=wn),new dx(1,10,this).update(e,f),n.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,n,r,a){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(n,r,a);e.setRenderTarget(c)}}const Wu=new le,hx=new le,px=new mt;class xr{constructor(e=new le(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=Wu.subVectors(r,n).cross(hx.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Wu),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/a;return c<0||c>1?null:n.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||px.getNormalMatrix(e),a=this.coplanarPoint(Wu).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gr=new Wd,Sl=new le;class cg{constructor(e=new xr,n=new xr,r=new xr,a=new xr,c=new xr,f=new xr){this.planes=[e,n,r,a,c,f]}set(e,n,r,a,c,f){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(a),d[4].copy(c),d[5].copy(f),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=zi){const r=this.planes,a=e.elements,c=a[0],f=a[1],d=a[2],h=a[3],m=a[4],g=a[5],S=a[6],y=a[7],M=a[8],A=a[9],T=a[10],_=a[11],v=a[12],U=a[13],P=a[14],D=a[15];if(r[0].setComponents(h-c,y-m,_-M,D-v).normalize(),r[1].setComponents(h+c,y+m,_+M,D+v).normalize(),r[2].setComponents(h+f,y+g,_+A,D+U).normalize(),r[3].setComponents(h-f,y-g,_-A,D-U).normalize(),r[4].setComponents(h-d,y-S,_-T,D-P).normalize(),n===zi)r[5].setComponents(h+d,y+S,_+T,D+P).normalize();else if(n===Ol)r[5].setComponents(d,S,T,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Gr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gr)}intersectsSprite(e){return Gr.center.set(0,0,0),Gr.radius=.7071067811865476,Gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gr)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(Sl.x=a.normal.x>0?e.max.x:e.min.x,Sl.y=a.normal.y>0?e.max.y:e.min.y,Sl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Sl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ug(){let o=null,e=!1,n=null,r=null;function a(c,f){n(c,f),r=o.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=o.requestAnimationFrame(a),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){o=c}}}function mx(o){const e=new WeakMap;function n(d,h){const m=d.array,g=d.usage,S=m.byteLength,y=o.createBuffer();o.bindBuffer(h,y),o.bufferData(h,m,g),d.onUploadCallback();let M;if(m instanceof Float32Array)M=o.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=o.SHORT;else if(m instanceof Uint32Array)M=o.UNSIGNED_INT;else if(m instanceof Int32Array)M=o.INT;else if(m instanceof Int8Array)M=o.BYTE;else if(m instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:y,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:S}}function r(d,h,m){const g=h.array,S=h._updateRange,y=h.updateRanges;if(o.bindBuffer(m,d),S.count===-1&&y.length===0&&o.bufferSubData(m,0,g),y.length!==0){for(let M=0,A=y.length;M<A;M++){const T=y[M];o.bufferSubData(m,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}h.clearUpdateRanges()}S.count!==-1&&(o.bufferSubData(m,S.offset*g.BYTES_PER_ELEMENT,g,S.offset,S.count),S.count=-1),h.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const h=e.get(d);h&&(o.deleteBuffer(h.buffer),e.delete(d))}function f(d,h){if(d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);if(m===void 0)e.set(d,n(d,h));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,h),m.version=d.version}}return{get:a,remove:c,update:f}}class Ks extends Tr{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const c=e/2,f=n/2,d=Math.floor(r),h=Math.floor(a),m=d+1,g=h+1,S=e/d,y=n/h,M=[],A=[],T=[],_=[];for(let v=0;v<g;v++){const U=v*y-f;for(let P=0;P<m;P++){const D=P*S-c;A.push(D,-U,0),T.push(0,0,1),_.push(P/d),_.push(1-v/h)}}for(let v=0;v<h;v++)for(let U=0;U<d;U++){const P=U+m*v,D=U+m*(v+1),ne=U+1+m*(v+1),B=U+1+m*v;M.push(P,D,B),M.push(D,ne,B)}this.setIndex(M),this.setAttribute("position",new Bi(A,3)),this.setAttribute("normal",new Bi(T,3)),this.setAttribute("uv",new Bi(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ks(e.width,e.height,e.widthSegments,e.heightSegments)}}var gx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vx=`#ifdef USE_ALPHAHASH
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
#endif`,_x=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mx=`#ifdef USE_AOMAP
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
#endif`,Ex=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wx=`#ifdef USE_BATCHING
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
#endif`,Tx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ax=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Cx=`#ifdef USE_IRIDESCENCE
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
#endif`,Px=`#ifdef USE_BUMPMAP
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
#endif`,Lx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Dx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ix=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ux=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ox=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Fx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,kx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,zx=`#define PI 3.141592653589793
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
} // validated`,Bx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Hx=`vec3 transformedNormal = objectNormal;
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
#endif`,Vx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yx=`
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
}`,qx=`#ifdef USE_ENVMAP
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
#endif`,$x=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Kx=`#ifdef USE_ENVMAP
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
#endif`,Zx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qx=`#ifdef USE_ENVMAP
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
#endif`,Jx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ey=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ty=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ny=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,iy=`#ifdef USE_GRADIENTMAP
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
}`,ry=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,oy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ay=`uniform bool receiveShadow;
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
#endif`,ly=`#ifdef USE_ENVMAP
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
#endif`,cy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hy=`PhysicalMaterial material;
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
#endif`,py=`struct PhysicalMaterial {
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
}`,my=`
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
#endif`,gy=`#if defined( RE_IndirectDiffuse )
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
#endif`,vy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_y=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,My=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ey=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ty=`#if defined( USE_POINTS_UV )
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
#endif`,Ay=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ry=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,by=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Py=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ly=`#ifdef USE_MORPHTARGETS
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
#endif`,Dy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Iy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ny=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Uy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Oy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ky=`#ifdef USE_NORMALMAP
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
#endif`,zy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,By=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Xy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$y=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ky=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,eS=`float getShadowMask() {
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
}`,tS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nS=`#ifdef USE_SKINNING
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
#endif`,iS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rS=`#ifdef USE_SKINNING
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
#endif`,oS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,aS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cS=`#ifdef USE_TRANSMISSION
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
#endif`,uS=`#ifdef USE_TRANSMISSION
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
#endif`,dS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gS=`uniform sampler2D t2D;
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
}`,vS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_S=`#ifdef ENVMAP_TYPE_CUBE
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
}`,xS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SS=`#include <common>
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
}`,MS=`#if DEPTH_PACKING == 3200
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
}`,ES=`#define DISTANCE
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
}`,wS=`#define DISTANCE
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
}`,TS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,AS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RS=`uniform float scale;
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
}`,bS=`uniform vec3 diffuse;
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
}`,CS=`#include <common>
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
}`,PS=`uniform vec3 diffuse;
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
}`,LS=`#define LAMBERT
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
}`,DS=`#define LAMBERT
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
}`,IS=`#define MATCAP
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
}`,NS=`#define MATCAP
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
}`,US=`#define NORMAL
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
}`,OS=`#define NORMAL
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
}`,FS=`#define PHONG
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
}`,kS=`#define PHONG
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
}`,zS=`#define STANDARD
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
}`,BS=`#define STANDARD
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
}`,HS=`#define TOON
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
}`,VS=`#define TOON
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
}`,GS=`uniform float size;
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
}`,WS=`uniform vec3 diffuse;
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
}`,XS=`#include <common>
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
}`,jS=`uniform vec3 color;
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
}`,YS=`uniform float rotation;
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
}`,qS=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:gx,alphahash_pars_fragment:vx,alphamap_fragment:_x,alphamap_pars_fragment:xx,alphatest_fragment:yx,alphatest_pars_fragment:Sx,aomap_fragment:Mx,aomap_pars_fragment:Ex,batching_pars_vertex:wx,batching_vertex:Tx,begin_vertex:Ax,beginnormal_vertex:Rx,bsdfs:bx,iridescence_fragment:Cx,bumpmap_pars_fragment:Px,clipping_planes_fragment:Lx,clipping_planes_pars_fragment:Dx,clipping_planes_pars_vertex:Ix,clipping_planes_vertex:Nx,color_fragment:Ux,color_pars_fragment:Ox,color_pars_vertex:Fx,color_vertex:kx,common:zx,cube_uv_reflection_fragment:Bx,defaultnormal_vertex:Hx,displacementmap_pars_vertex:Vx,displacementmap_vertex:Gx,emissivemap_fragment:Wx,emissivemap_pars_fragment:Xx,colorspace_fragment:jx,colorspace_pars_fragment:Yx,envmap_fragment:qx,envmap_common_pars_fragment:$x,envmap_pars_fragment:Kx,envmap_pars_vertex:Zx,envmap_physical_pars_fragment:ly,envmap_vertex:Qx,fog_vertex:Jx,fog_pars_vertex:ey,fog_fragment:ty,fog_pars_fragment:ny,gradientmap_pars_fragment:iy,lightmap_pars_fragment:ry,lights_lambert_fragment:oy,lights_lambert_pars_fragment:sy,lights_pars_begin:ay,lights_toon_fragment:cy,lights_toon_pars_fragment:uy,lights_phong_fragment:dy,lights_phong_pars_fragment:fy,lights_physical_fragment:hy,lights_physical_pars_fragment:py,lights_fragment_begin:my,lights_fragment_maps:gy,lights_fragment_end:vy,logdepthbuf_fragment:_y,logdepthbuf_pars_fragment:xy,logdepthbuf_pars_vertex:yy,logdepthbuf_vertex:Sy,map_fragment:My,map_pars_fragment:Ey,map_particle_fragment:wy,map_particle_pars_fragment:Ty,metalnessmap_fragment:Ay,metalnessmap_pars_fragment:Ry,morphinstance_vertex:by,morphcolor_vertex:Cy,morphnormal_vertex:Py,morphtarget_pars_vertex:Ly,morphtarget_vertex:Dy,normal_fragment_begin:Iy,normal_fragment_maps:Ny,normal_pars_fragment:Uy,normal_pars_vertex:Oy,normal_vertex:Fy,normalmap_pars_fragment:ky,clearcoat_normal_fragment_begin:zy,clearcoat_normal_fragment_maps:By,clearcoat_pars_fragment:Hy,iridescence_pars_fragment:Vy,opaque_fragment:Gy,packing:Wy,premultiplied_alpha_fragment:Xy,project_vertex:jy,dithering_fragment:Yy,dithering_pars_fragment:qy,roughnessmap_fragment:$y,roughnessmap_pars_fragment:Ky,shadowmap_pars_fragment:Zy,shadowmap_pars_vertex:Qy,shadowmap_vertex:Jy,shadowmask_pars_fragment:eS,skinbase_vertex:tS,skinning_pars_vertex:nS,skinning_vertex:iS,skinnormal_vertex:rS,specularmap_fragment:oS,specularmap_pars_fragment:sS,tonemapping_fragment:aS,tonemapping_pars_fragment:lS,transmission_fragment:cS,transmission_pars_fragment:uS,uv_pars_fragment:dS,uv_pars_vertex:fS,uv_vertex:hS,worldpos_vertex:pS,background_vert:mS,background_frag:gS,backgroundCube_vert:vS,backgroundCube_frag:_S,cube_vert:xS,cube_frag:yS,depth_vert:SS,depth_frag:MS,distanceRGBA_vert:ES,distanceRGBA_frag:wS,equirect_vert:TS,equirect_frag:AS,linedashed_vert:RS,linedashed_frag:bS,meshbasic_vert:CS,meshbasic_frag:PS,meshlambert_vert:LS,meshlambert_frag:DS,meshmatcap_vert:IS,meshmatcap_frag:NS,meshnormal_vert:US,meshnormal_frag:OS,meshphong_vert:FS,meshphong_frag:kS,meshphysical_vert:zS,meshphysical_frag:BS,meshtoon_vert:HS,meshtoon_frag:VS,points_vert:GS,points_frag:WS,shadow_vert:XS,shadow_frag:jS,sprite_vert:YS,sprite_frag:qS},Xe={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},envMapRotation:{value:new mt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},_i={basic:{uniforms:En([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:En([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new It(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:En([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:En([Xe.common,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.roughnessmap,Xe.metalnessmap,Xe.fog,Xe.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:En([Xe.common,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.gradientmap,Xe.fog,Xe.lights,{emissive:{value:new It(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:En([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:En([Xe.points,Xe.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:En([Xe.common,Xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:En([Xe.common,Xe.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:En([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:En([Xe.sprite,Xe.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new mt}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:En([Xe.common,Xe.displacementmap,{referencePosition:{value:new le},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:En([Xe.lights,Xe.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};_i.physical={uniforms:En([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const Ml={r:0,b:0,g:0},Wr=new dn,$S=new Kt;function KS(o,e,n,r,a,c,f){const d=new It(0);let h=c===!0?0:1,m,g,S=null,y=0,M=null;function A(U){let P=U.isScene===!0?U.background:null;return P&&P.isTexture&&(P=(U.backgroundBlurriness>0?n:e).get(P)),P}function T(U){let P=!1;const D=A(U);D===null?v(d,h):D&&D.isColor&&(v(D,1),P=!0);const ne=o.xr.getEnvironmentBlendMode();ne==="additive"?r.buffers.color.setClear(0,0,0,1,f):ne==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(o.autoClear||P)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function _(U,P){const D=A(P);D&&(D.isCubeTexture||D.mapping===kl)?(g===void 0&&(g=new ei(new $s(1,1,1),new Er({name:"BackgroundCubeMaterial",uniforms:ts(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(ne,B,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(g)),Wr.copy(P.backgroundRotation),Wr.x*=-1,Wr.y*=-1,Wr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Wr.y*=-1,Wr.z*=-1),g.material.uniforms.envMap.value=D,g.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4($S.makeRotationFromEuler(Wr)),g.material.toneMapped=Pt.getTransfer(D.colorSpace)!==zt,(S!==D||y!==D.version||M!==o.toneMapping)&&(g.material.needsUpdate=!0,S=D,y=D.version,M=o.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):D&&D.isTexture&&(m===void 0&&(m=new ei(new Ks(2,2),new Er({name:"BackgroundMaterial",uniforms:ts(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:Hi,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=D,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=Pt.getTransfer(D.colorSpace)!==zt,D.matrixAutoUpdate===!0&&D.updateMatrix(),m.material.uniforms.uvTransform.value.copy(D.matrix),(S!==D||y!==D.version||M!==o.toneMapping)&&(m.material.needsUpdate=!0,S=D,y=D.version,M=o.toneMapping),m.layers.enableAll(),U.unshift(m,m.geometry,m.material,0,0,null))}function v(U,P){U.getRGB(Ml,sg(o)),r.buffers.color.setClear(Ml.r,Ml.g,Ml.b,P,f)}return{getClearColor:function(){return d},setClearColor:function(U,P=1){d.set(U),h=P,v(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(U){h=U,v(d,h)},render:T,addToRenderList:_}}function ZS(o,e){const n=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},a=y(null);let c=a,f=!1;function d(R,G,Se,ce,Re){let be=!1;const xe=S(ce,Se,G);c!==xe&&(c=xe,m(c.object)),be=M(R,ce,Se,Re),be&&A(R,ce,Se,Re),Re!==null&&e.update(Re,o.ELEMENT_ARRAY_BUFFER),(be||f)&&(f=!1,D(R,G,Se,ce),Re!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(Re).buffer))}function h(){return o.createVertexArray()}function m(R){return o.bindVertexArray(R)}function g(R){return o.deleteVertexArray(R)}function S(R,G,Se){const ce=Se.wireframe===!0;let Re=r[R.id];Re===void 0&&(Re={},r[R.id]=Re);let be=Re[G.id];be===void 0&&(be={},Re[G.id]=be);let xe=be[ce];return xe===void 0&&(xe=y(h()),be[ce]=xe),xe}function y(R){const G=[],Se=[],ce=[];for(let Re=0;Re<n;Re++)G[Re]=0,Se[Re]=0,ce[Re]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:Se,attributeDivisors:ce,object:R,attributes:{},index:null}}function M(R,G,Se,ce){const Re=c.attributes,be=G.attributes;let xe=0;const Me=Se.getAttributes();for(const I in Me)if(Me[I].location>=0){const ge=Re[I];let O=be[I];if(O===void 0&&(I==="instanceMatrix"&&R.instanceMatrix&&(O=R.instanceMatrix),I==="instanceColor"&&R.instanceColor&&(O=R.instanceColor)),ge===void 0||ge.attribute!==O||O&&ge.data!==O.data)return!0;xe++}return c.attributesNum!==xe||c.index!==ce}function A(R,G,Se,ce){const Re={},be=G.attributes;let xe=0;const Me=Se.getAttributes();for(const I in Me)if(Me[I].location>=0){let ge=be[I];ge===void 0&&(I==="instanceMatrix"&&R.instanceMatrix&&(ge=R.instanceMatrix),I==="instanceColor"&&R.instanceColor&&(ge=R.instanceColor));const O={};O.attribute=ge,ge&&ge.data&&(O.data=ge.data),Re[I]=O,xe++}c.attributes=Re,c.attributesNum=xe,c.index=ce}function T(){const R=c.newAttributes;for(let G=0,Se=R.length;G<Se;G++)R[G]=0}function _(R){v(R,0)}function v(R,G){const Se=c.newAttributes,ce=c.enabledAttributes,Re=c.attributeDivisors;Se[R]=1,ce[R]===0&&(o.enableVertexAttribArray(R),ce[R]=1),Re[R]!==G&&(o.vertexAttribDivisor(R,G),Re[R]=G)}function U(){const R=c.newAttributes,G=c.enabledAttributes;for(let Se=0,ce=G.length;Se<ce;Se++)G[Se]!==R[Se]&&(o.disableVertexAttribArray(Se),G[Se]=0)}function P(R,G,Se,ce,Re,be,xe){xe===!0?o.vertexAttribIPointer(R,G,Se,Re,be):o.vertexAttribPointer(R,G,Se,ce,Re,be)}function D(R,G,Se,ce){T();const Re=ce.attributes,be=Se.getAttributes(),xe=G.defaultAttributeValues;for(const Me in be){const I=be[Me];if(I.location>=0){let Te=Re[Me];if(Te===void 0&&(Me==="instanceMatrix"&&R.instanceMatrix&&(Te=R.instanceMatrix),Me==="instanceColor"&&R.instanceColor&&(Te=R.instanceColor)),Te!==void 0){const ge=Te.normalized,O=Te.itemSize,pe=e.get(Te);if(pe===void 0)continue;const ke=pe.buffer,J=pe.type,Ee=pe.bytesPerElement,Le=J===o.INT||J===o.UNSIGNED_INT||Te.gpuType===Od;if(Te.isInterleavedBufferAttribute){const Ue=Te.data,Ve=Ue.stride,je=Te.offset;if(Ue.isInstancedInterleavedBuffer){for(let tt=0;tt<I.locationSize;tt++)v(I.location+tt,Ue.meshPerAttribute);R.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=Ue.meshPerAttribute*Ue.count)}else for(let tt=0;tt<I.locationSize;tt++)_(I.location+tt);o.bindBuffer(o.ARRAY_BUFFER,ke);for(let tt=0;tt<I.locationSize;tt++)P(I.location+tt,O/I.locationSize,J,ge,Ve*Ee,(je+O/I.locationSize*tt)*Ee,Le)}else{if(Te.isInstancedBufferAttribute){for(let Ue=0;Ue<I.locationSize;Ue++)v(I.location+Ue,Te.meshPerAttribute);R.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let Ue=0;Ue<I.locationSize;Ue++)_(I.location+Ue);o.bindBuffer(o.ARRAY_BUFFER,ke);for(let Ue=0;Ue<I.locationSize;Ue++)P(I.location+Ue,O/I.locationSize,J,ge,O*Ee,O/I.locationSize*Ue*Ee,Le)}}else if(xe!==void 0){const ge=xe[Me];if(ge!==void 0)switch(ge.length){case 2:o.vertexAttrib2fv(I.location,ge);break;case 3:o.vertexAttrib3fv(I.location,ge);break;case 4:o.vertexAttrib4fv(I.location,ge);break;default:o.vertexAttrib1fv(I.location,ge)}}}}U()}function ne(){Q();for(const R in r){const G=r[R];for(const Se in G){const ce=G[Se];for(const Re in ce)g(ce[Re].object),delete ce[Re];delete G[Se]}delete r[R]}}function B(R){if(r[R.id]===void 0)return;const G=r[R.id];for(const Se in G){const ce=G[Se];for(const Re in ce)g(ce[Re].object),delete ce[Re];delete G[Se]}delete r[R.id]}function k(R){for(const G in r){const Se=r[G];if(Se[R.id]===void 0)continue;const ce=Se[R.id];for(const Re in ce)g(ce[Re].object),delete ce[Re];delete Se[R.id]}}function Q(){L(),f=!0,c!==a&&(c=a,m(c.object))}function L(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:Q,resetDefaultState:L,dispose:ne,releaseStatesOfGeometry:B,releaseStatesOfProgram:k,initAttributes:T,enableAttribute:_,disableUnusedAttributes:U}}function QS(o,e,n){let r;function a(m){r=m}function c(m,g){o.drawArrays(r,m,g),n.update(g,r,1)}function f(m,g,S){S!==0&&(o.drawArraysInstanced(r,m,g,S),n.update(g,r,S))}function d(m,g,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,g,0,S);let M=0;for(let A=0;A<S;A++)M+=g[A];n.update(M,r,1)}function h(m,g,S,y){if(S===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let A=0;A<m.length;A++)f(m[A],g[A],y[A]);else{M.multiDrawArraysInstancedWEBGL(r,m,0,g,0,y,0,S);let A=0;for(let T=0;T<S;T++)A+=g[T];for(let T=0;T<y.length;T++)n.update(A,r,y[T])}}this.setMode=a,this.render=c,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function JS(o,e,n,r){let a;function c(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");a=o.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function f(B){return!(B!==di&&r.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(B){const k=B===Ys&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==Vi&&r.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==ki&&!k)}function h(B){if(B==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const g=h(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const S=n.logarithmicDepthBuffer===!0,y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_TEXTURE_SIZE),T=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),v=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),U=o.getParameter(o.MAX_VARYING_VECTORS),P=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),D=M>0,ne=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:h,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:S,maxTextures:y,maxVertexTextures:M,maxTextureSize:A,maxCubemapSize:T,maxAttributes:_,maxVertexUniforms:v,maxVaryings:U,maxFragmentUniforms:P,vertexTextures:D,maxSamples:ne}}function eM(o){const e=this;let n=null,r=0,a=!1,c=!1;const f=new xr,d=new mt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(S,y){const M=S.length!==0||y||r!==0||a;return a=y,r=S.length,M},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(S,y){n=g(S,y,0)},this.setState=function(S,y,M){const A=S.clippingPlanes,T=S.clipIntersection,_=S.clipShadows,v=o.get(S);if(!a||A===null||A.length===0||c&&!_)c?g(null):m();else{const U=c?0:r,P=U*4;let D=v.clippingState||null;h.value=D,D=g(A,y,P,M);for(let ne=0;ne!==P;++ne)D[ne]=n[ne];v.clippingState=D,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=U}};function m(){h.value!==n&&(h.value=n,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(S,y,M,A){const T=S!==null?S.length:0;let _=null;if(T!==0){if(_=h.value,A!==!0||_===null){const v=M+T*4,U=y.matrixWorldInverse;d.getNormalMatrix(U),(_===null||_.length<v)&&(_=new Float32Array(v));for(let P=0,D=M;P!==T;++P,D+=4)f.copy(S[P]).applyMatrix4(U,d),f.normal.toArray(_,D),_[D+3]=f.constant}h.value=_,h.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,_}}function tM(o){let e=new WeakMap;function n(f,d){return d===nd?f.mapping=Zo:d===id&&(f.mapping=Qo),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===nd||d===id)if(e.has(f)){const h=e.get(f).texture;return n(h,f.mapping)}else{const h=f.image;if(h&&h.height>0){const m=new fx(h.height);return m.fromEquirectangularTexture(o,f),e.set(f,m),f.addEventListener("dispose",a),n(m.texture,f.mapping)}else return null}}return f}function a(f){const d=f.target;d.removeEventListener("dispose",a);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}class nM extends ag{constructor(e=-1,n=1,r=1,a=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let c=r-e,f=r+e,d=a+n,h=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,f=c+m*this.view.width,d-=g*this.view.offsetY,h=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Xo=4,im=[.125,.215,.35,.446,.526,.582],qr=20,Xu=new nM,rm=new It;let ju=null,Yu=0,qu=0,$u=!1;const jr=(1+Math.sqrt(5))/2,Vo=1/jr,om=[new le(-jr,Vo,0),new le(jr,Vo,0),new le(-Vo,0,jr),new le(Vo,0,jr),new le(0,jr,-Vo),new le(0,jr,Vo),new le(-1,1,-1),new le(1,1,-1),new le(-1,1,1),new le(1,1,1)];class sm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){ju=this._renderer.getRenderTarget(),Yu=this._renderer.getActiveCubeFace(),qu=this._renderer.getActiveMipmapLevel(),$u=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,r,a,c),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ju,Yu,qu),this._renderer.xr.enabled=$u,e.scissorTest=!1,El(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Zo||e.mapping===Qo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ju=this._renderer.getRenderTarget(),Yu=this._renderer.getActiveCubeFace(),qu=this._renderer.getActiveMipmapLevel(),$u=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:Ys,format:di,colorSpace:wr,depthBuffer:!1},a=am(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=am(e,n,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=iM(c)),this._blurMaterial=rM(c,e,n)}return a}_compileMaterial(e){const n=new ei(this._lodPlanes[0],e);this._renderer.compile(n,Xu)}_sceneToCubeUV(e,n,r,a){const d=new Gn(90,1,n,r),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,S=g.autoClear,y=g.toneMapping;g.getClearColor(rm),g.toneMapping=Mr,g.autoClear=!1;const M=new Hl({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1}),A=new ei(new $s,M);let T=!1;const _=e.background;_?_.isColor&&(M.color.copy(_),e.background=null,T=!0):(M.color.copy(rm),T=!0);for(let v=0;v<6;v++){const U=v%3;U===0?(d.up.set(0,h[v],0),d.lookAt(m[v],0,0)):U===1?(d.up.set(0,0,h[v]),d.lookAt(0,m[v],0)):(d.up.set(0,h[v],0),d.lookAt(0,0,m[v]));const P=this._cubeSize;El(a,U*P,v>2?P:0,P,P),g.setRenderTarget(a),T&&g.render(A,d),g.render(e,d)}A.geometry.dispose(),A.material.dispose(),g.toneMapping=y,g.autoClear=S,e.background=_}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===Zo||e.mapping===Qo;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=cm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lm());const c=a?this._cubemapMaterial:this._equirectMaterial,f=new ei(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=e;const h=this._cubeSize;El(n,0,0,3*h,2*h),r.setRenderTarget(n),r.render(f,Xu)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let c=1;c<a;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=om[(a-c-1)%om.length];this._blur(e,c-1,c,f,d)}n.autoClear=r}_blur(e,n,r,a,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,n,r,a,"latitudinal",c),this._halfBlur(f,e,r,r,a,"longitudinal",c)}_halfBlur(e,n,r,a,c,f,d){const h=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,S=new ei(this._lodPlanes[a],m),y=m.uniforms,M=this._sizeLods[r]-1,A=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*qr-1),T=c/A,_=isFinite(c)?1+Math.floor(g*T):qr;_>qr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${qr}`);const v=[];let U=0;for(let k=0;k<qr;++k){const Q=k/T,L=Math.exp(-Q*Q/2);v.push(L),k===0?U+=L:k<_&&(U+=2*L)}for(let k=0;k<v.length;k++)v[k]=v[k]/U;y.envMap.value=e.texture,y.samples.value=_,y.weights.value=v,y.latitudinal.value=f==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:P}=this;y.dTheta.value=A,y.mipInt.value=P-r;const D=this._sizeLods[a],ne=3*D*(a>P-Xo?a-P+Xo:0),B=4*(this._cubeSize-D);El(n,ne,B,3*D,2*D),h.setRenderTarget(n),h.render(S,Xu)}}function iM(o){const e=[],n=[],r=[];let a=o;const c=o-Xo+1+im.length;for(let f=0;f<c;f++){const d=Math.pow(2,a);n.push(d);let h=1/d;f>o-Xo?h=im[f-o+Xo-1]:f===0&&(h=0),r.push(h);const m=1/(d-2),g=-m,S=1+m,y=[g,g,S,g,S,S,g,g,S,S,g,S],M=6,A=6,T=3,_=2,v=1,U=new Float32Array(T*A*M),P=new Float32Array(_*A*M),D=new Float32Array(v*A*M);for(let B=0;B<M;B++){const k=B%3*2/3-1,Q=B>2?0:-1,L=[k,Q,0,k+2/3,Q,0,k+2/3,Q+1,0,k,Q,0,k+2/3,Q+1,0,k,Q+1,0];U.set(L,T*A*B),P.set(y,_*A*B);const R=[B,B,B,B,B,B];D.set(R,v*A*B)}const ne=new Tr;ne.setAttribute("position",new Si(U,T)),ne.setAttribute("uv",new Si(P,_)),ne.setAttribute("faceIndex",new Si(D,v)),e.push(ne),a>Xo&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function am(o,e,n){const r=new Qr(o,e,n);return r.texture.mapping=kl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function El(o,e,n,r,a){o.viewport.set(e,n,r,a),o.scissor.set(e,n,r,a)}function rM(o,e,n){const r=new Float32Array(qr),a=new le(0,1,0);return new Er({name:"SphericalGaussianBlur",defines:{n:qr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Yd(),fragmentShader:`

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
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function lm(){return new Er({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yd(),fragmentShader:`

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
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function cm(){return new Er({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function Yd(){return`

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
	`}function oM(o){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const h=d.mapping,m=h===nd||h===id,g=h===Zo||h===Qo;if(m||g){let S=e.get(d);const y=S!==void 0?S.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return n===null&&(n=new sm(o)),S=m?n.fromEquirectangular(d,S):n.fromCubemap(d,S),S.texture.pmremVersion=d.pmremVersion,e.set(d,S),S.texture;if(S!==void 0)return S.texture;{const M=d.image;return m&&M&&M.height>0||g&&M&&a(M)?(n===null&&(n=new sm(o)),S=m?n.fromEquirectangular(d):n.fromCubemap(d),S.texture.pmremVersion=d.pmremVersion,e.set(d,S),d.addEventListener("dispose",c),S.texture):null}}}return d}function a(d){let h=0;const m=6;for(let g=0;g<m;g++)d[g]!==void 0&&h++;return h===m}function c(d){const h=d.target;h.removeEventListener("dispose",c);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function f(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function sM(o){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=o.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&eg("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function aM(o,e,n,r){const a={},c=new WeakMap;function f(S){const y=S.target;y.index!==null&&e.remove(y.index);for(const A in y.attributes)e.remove(y.attributes[A]);for(const A in y.morphAttributes){const T=y.morphAttributes[A];for(let _=0,v=T.length;_<v;_++)e.remove(T[_])}y.removeEventListener("dispose",f),delete a[y.id];const M=c.get(y);M&&(e.remove(M),c.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,n.memory.geometries--}function d(S,y){return a[y.id]===!0||(y.addEventListener("dispose",f),a[y.id]=!0,n.memory.geometries++),y}function h(S){const y=S.attributes;for(const A in y)e.update(y[A],o.ARRAY_BUFFER);const M=S.morphAttributes;for(const A in M){const T=M[A];for(let _=0,v=T.length;_<v;_++)e.update(T[_],o.ARRAY_BUFFER)}}function m(S){const y=[],M=S.index,A=S.attributes.position;let T=0;if(M!==null){const U=M.array;T=M.version;for(let P=0,D=U.length;P<D;P+=3){const ne=U[P+0],B=U[P+1],k=U[P+2];y.push(ne,B,B,k,k,ne)}}else if(A!==void 0){const U=A.array;T=A.version;for(let P=0,D=U.length/3-1;P<D;P+=3){const ne=P+0,B=P+1,k=P+2;y.push(ne,B,B,k,k,ne)}}else return;const _=new(Jm(y)?og:rg)(y,1);_.version=T;const v=c.get(S);v&&e.remove(v),c.set(S,_)}function g(S){const y=c.get(S);if(y){const M=S.index;M!==null&&y.version<M.version&&m(S)}else m(S);return c.get(S)}return{get:d,update:h,getWireframeAttribute:g}}function lM(o,e,n){let r;function a(y){r=y}let c,f;function d(y){c=y.type,f=y.bytesPerElement}function h(y,M){o.drawElements(r,M,c,y*f),n.update(M,r,1)}function m(y,M,A){A!==0&&(o.drawElementsInstanced(r,M,c,y*f,A),n.update(M,r,A))}function g(y,M,A){if(A===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,c,y,0,A);let _=0;for(let v=0;v<A;v++)_+=M[v];n.update(_,r,1)}function S(y,M,A,T){if(A===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let v=0;v<y.length;v++)m(y[v]/f,M[v],T[v]);else{_.multiDrawElementsInstancedWEBGL(r,M,0,c,y,0,T,0,A);let v=0;for(let U=0;U<A;U++)v+=M[U];for(let U=0;U<T.length;U++)n.update(v,r,T[U])}}this.setMode=a,this.setIndex=d,this.render=h,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=S}function cM(o){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,d){switch(n.calls++,f){case o.TRIANGLES:n.triangles+=d*(c/3);break;case o.LINES:n.lines+=d*(c/2);break;case o.LINE_STRIP:n.lines+=d*(c-1);break;case o.LINE_LOOP:n.lines+=d*c;break;case o.POINTS:n.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function uM(o,e,n){const r=new WeakMap,a=new ln;function c(f,d,h){const m=f.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,S=g!==void 0?g.length:0;let y=r.get(d);if(y===void 0||y.count!==S){let R=function(){Q.dispose(),r.delete(d),d.removeEventListener("dispose",R)};var M=R;y!==void 0&&y.texture.dispose();const A=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,_=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],U=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let D=0;A===!0&&(D=1),T===!0&&(D=2),_===!0&&(D=3);let ne=d.attributes.position.count*D,B=1;ne>e.maxTextureSize&&(B=Math.ceil(ne/e.maxTextureSize),ne=e.maxTextureSize);const k=new Float32Array(ne*B*4*S),Q=new ng(k,ne,B,S);Q.type=ki,Q.needsUpdate=!0;const L=D*4;for(let G=0;G<S;G++){const Se=v[G],ce=U[G],Re=P[G],be=ne*B*4*G;for(let xe=0;xe<Se.count;xe++){const Me=xe*L;A===!0&&(a.fromBufferAttribute(Se,xe),k[be+Me+0]=a.x,k[be+Me+1]=a.y,k[be+Me+2]=a.z,k[be+Me+3]=0),T===!0&&(a.fromBufferAttribute(ce,xe),k[be+Me+4]=a.x,k[be+Me+5]=a.y,k[be+Me+6]=a.z,k[be+Me+7]=0),_===!0&&(a.fromBufferAttribute(Re,xe),k[be+Me+8]=a.x,k[be+Me+9]=a.y,k[be+Me+10]=a.z,k[be+Me+11]=Re.itemSize===4?a.w:1)}}y={count:S,texture:Q,size:new dt(ne,B)},r.set(d,y),d.addEventListener("dispose",R)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)h.getUniforms().setValue(o,"morphTexture",f.morphTexture,n);else{let A=0;for(let _=0;_<m.length;_++)A+=m[_];const T=d.morphTargetsRelative?1:1-A;h.getUniforms().setValue(o,"morphTargetBaseInfluence",T),h.getUniforms().setValue(o,"morphTargetInfluences",m)}h.getUniforms().setValue(o,"morphTargetsTexture",y.texture,n),h.getUniforms().setValue(o,"morphTargetsTextureSize",y.size)}return{update:c}}function dM(o,e,n,r){let a=new WeakMap;function c(h){const m=r.render.frame,g=h.geometry,S=e.get(h,g);if(a.get(S)!==m&&(e.update(S),a.set(S,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),a.get(h)!==m&&(n.update(h.instanceMatrix,o.ARRAY_BUFFER),h.instanceColor!==null&&n.update(h.instanceColor,o.ARRAY_BUFFER),a.set(h,m))),h.isSkinnedMesh){const y=h.skeleton;a.get(y)!==m&&(y.update(),a.set(y,m))}return S}function f(){a=new WeakMap}function d(h){const m=h.target;m.removeEventListener("dispose",d),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:c,dispose:f}}class dg extends An{constructor(e,n,r,a,c,f,d,h,m,g=$o){if(g!==$o&&g!==es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===$o&&(r=Zr),r===void 0&&g===es&&(r=Jo),super(null,a,c,f,d,h,g,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=d!==void 0?d:Jn,this.minFilter=h!==void 0?h:Jn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const fg=new An,um=new dg(1,1),hg=new ng,pg=new K_,mg=new lg,dm=[],fm=[],hm=new Float32Array(16),pm=new Float32Array(9),mm=new Float32Array(4);function is(o,e,n){const r=o[0];if(r<=0||r>0)return o;const a=e*n;let c=dm[a];if(c===void 0&&(c=new Float32Array(a),dm[a]=c),e!==0){r.toArray(c,0);for(let f=1,d=0;f!==e;++f)d+=n,o[f].toArray(c,d)}return c}function Jt(o,e){if(o.length!==e.length)return!1;for(let n=0,r=o.length;n<r;n++)if(o[n]!==e[n])return!1;return!0}function en(o,e){for(let n=0,r=e.length;n<r;n++)o[n]=e[n]}function Vl(o,e){let n=fm[e];n===void 0&&(n=new Int32Array(e),fm[e]=n);for(let r=0;r!==e;++r)n[r]=o.allocateTextureUnit();return n}function fM(o,e){const n=this.cache;n[0]!==e&&(o.uniform1f(this.addr,e),n[0]=e)}function hM(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Jt(n,e))return;o.uniform2fv(this.addr,e),en(n,e)}}function pM(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Jt(n,e))return;o.uniform3fv(this.addr,e),en(n,e)}}function mM(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Jt(n,e))return;o.uniform4fv(this.addr,e),en(n,e)}}function gM(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(Jt(n,e))return;o.uniformMatrix2fv(this.addr,!1,e),en(n,e)}else{if(Jt(n,r))return;mm.set(r),o.uniformMatrix2fv(this.addr,!1,mm),en(n,r)}}function vM(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(Jt(n,e))return;o.uniformMatrix3fv(this.addr,!1,e),en(n,e)}else{if(Jt(n,r))return;pm.set(r),o.uniformMatrix3fv(this.addr,!1,pm),en(n,r)}}function _M(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(Jt(n,e))return;o.uniformMatrix4fv(this.addr,!1,e),en(n,e)}else{if(Jt(n,r))return;hm.set(r),o.uniformMatrix4fv(this.addr,!1,hm),en(n,r)}}function xM(o,e){const n=this.cache;n[0]!==e&&(o.uniform1i(this.addr,e),n[0]=e)}function yM(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Jt(n,e))return;o.uniform2iv(this.addr,e),en(n,e)}}function SM(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Jt(n,e))return;o.uniform3iv(this.addr,e),en(n,e)}}function MM(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Jt(n,e))return;o.uniform4iv(this.addr,e),en(n,e)}}function EM(o,e){const n=this.cache;n[0]!==e&&(o.uniform1ui(this.addr,e),n[0]=e)}function wM(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Jt(n,e))return;o.uniform2uiv(this.addr,e),en(n,e)}}function TM(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Jt(n,e))return;o.uniform3uiv(this.addr,e),en(n,e)}}function AM(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Jt(n,e))return;o.uniform4uiv(this.addr,e),en(n,e)}}function RM(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a);let c;this.type===o.SAMPLER_2D_SHADOW?(um.compareFunction=Qm,c=um):c=fg,n.setTexture2D(e||c,a)}function bM(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||pg,a)}function CM(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||mg,a)}function PM(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||hg,a)}function LM(o){switch(o){case 5126:return fM;case 35664:return hM;case 35665:return pM;case 35666:return mM;case 35674:return gM;case 35675:return vM;case 35676:return _M;case 5124:case 35670:return xM;case 35667:case 35671:return yM;case 35668:case 35672:return SM;case 35669:case 35673:return MM;case 5125:return EM;case 36294:return wM;case 36295:return TM;case 36296:return AM;case 35678:case 36198:case 36298:case 36306:case 35682:return RM;case 35679:case 36299:case 36307:return bM;case 35680:case 36300:case 36308:case 36293:return CM;case 36289:case 36303:case 36311:case 36292:return PM}}function DM(o,e){o.uniform1fv(this.addr,e)}function IM(o,e){const n=is(e,this.size,2);o.uniform2fv(this.addr,n)}function NM(o,e){const n=is(e,this.size,3);o.uniform3fv(this.addr,n)}function UM(o,e){const n=is(e,this.size,4);o.uniform4fv(this.addr,n)}function OM(o,e){const n=is(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,n)}function FM(o,e){const n=is(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,n)}function kM(o,e){const n=is(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,n)}function zM(o,e){o.uniform1iv(this.addr,e)}function BM(o,e){o.uniform2iv(this.addr,e)}function HM(o,e){o.uniform3iv(this.addr,e)}function VM(o,e){o.uniform4iv(this.addr,e)}function GM(o,e){o.uniform1uiv(this.addr,e)}function WM(o,e){o.uniform2uiv(this.addr,e)}function XM(o,e){o.uniform3uiv(this.addr,e)}function jM(o,e){o.uniform4uiv(this.addr,e)}function YM(o,e,n){const r=this.cache,a=e.length,c=Vl(n,a);Jt(r,c)||(o.uniform1iv(this.addr,c),en(r,c));for(let f=0;f!==a;++f)n.setTexture2D(e[f]||fg,c[f])}function qM(o,e,n){const r=this.cache,a=e.length,c=Vl(n,a);Jt(r,c)||(o.uniform1iv(this.addr,c),en(r,c));for(let f=0;f!==a;++f)n.setTexture3D(e[f]||pg,c[f])}function $M(o,e,n){const r=this.cache,a=e.length,c=Vl(n,a);Jt(r,c)||(o.uniform1iv(this.addr,c),en(r,c));for(let f=0;f!==a;++f)n.setTextureCube(e[f]||mg,c[f])}function KM(o,e,n){const r=this.cache,a=e.length,c=Vl(n,a);Jt(r,c)||(o.uniform1iv(this.addr,c),en(r,c));for(let f=0;f!==a;++f)n.setTexture2DArray(e[f]||hg,c[f])}function ZM(o){switch(o){case 5126:return DM;case 35664:return IM;case 35665:return NM;case 35666:return UM;case 35674:return OM;case 35675:return FM;case 35676:return kM;case 5124:case 35670:return zM;case 35667:case 35671:return BM;case 35668:case 35672:return HM;case 35669:case 35673:return VM;case 5125:return GM;case 36294:return WM;case 36295:return XM;case 36296:return jM;case 35678:case 36198:case 36298:case 36306:case 35682:return YM;case 35679:case 36299:case 36307:return qM;case 35680:case 36300:case 36308:case 36293:return $M;case 36289:case 36303:case 36311:case 36292:return KM}}class QM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=LM(n.type)}}class JM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=ZM(n.type)}}class eE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let c=0,f=a.length;c!==f;++c){const d=a[c];d.setValue(e,n[d.id],r)}}}const Ku=/(\w+)(\])?(\[|\.)?/g;function gm(o,e){o.seq.push(e),o.map[e.id]=e}function tE(o,e,n){const r=o.name,a=r.length;for(Ku.lastIndex=0;;){const c=Ku.exec(r),f=Ku.lastIndex;let d=c[1];const h=c[2]==="]",m=c[3];if(h&&(d=d|0),m===void 0||m==="["&&f+2===a){gm(n,m===void 0?new QM(d,o,e):new JM(d,o,e));break}else{let S=n.map[d];S===void 0&&(S=new eE(d),gm(n,S)),n=S}}}class Ll{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const c=e.getActiveUniform(n,a),f=e.getUniformLocation(n,c.name);tE(c,f,this)}}setValue(e,n,r,a){const c=this.map[n];c!==void 0&&c.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let c=0,f=n.length;c!==f;++c){const d=n[c],h=r[d.id];h.needsUpdate!==!1&&d.setValue(e,h.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,c=e.length;a!==c;++a){const f=e[a];f.id in n&&r.push(f)}return r}}function vm(o,e,n){const r=o.createShader(e);return o.shaderSource(r,n),o.compileShader(r),r}const nE=37297;let iE=0;function rE(o,e){const n=o.split(`
`),r=[],a=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let f=a;f<c;f++){const d=f+1;r.push(`${d===e?">":" "} ${d}: ${n[f]}`)}return r.join(`
`)}function oE(o){const e=Pt.getPrimaries(Pt.workingColorSpace),n=Pt.getPrimaries(o);let r;switch(e===n?r="":e===Ul&&n===Nl?r="LinearDisplayP3ToLinearSRGB":e===Nl&&n===Ul&&(r="LinearSRGBToLinearDisplayP3"),o){case wr:case zl:return[r,"LinearTransferOETF"];case Qn:case Vd:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),[r,"LinearTransferOETF"]}}function _m(o,e,n){const r=o.getShaderParameter(e,o.COMPILE_STATUS),a=o.getShaderInfoLog(e).trim();if(r&&a==="")return"";const c=/ERROR: 0:(\d+)/.exec(a);if(c){const f=parseInt(c[1]);return n.toUpperCase()+`

`+a+`

`+rE(o.getShaderSource(e),f)}else return a}function sE(o,e){const n=oE(e);return`vec4 ${o}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function aE(o,e){let n;switch(e){case l_:n="Linear";break;case c_:n="Reinhard";break;case u_:n="OptimizedCineon";break;case d_:n="ACESFilmic";break;case h_:n="AgX";break;case p_:n="Neutral";break;case f_:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+o+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function lE(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vs).join(`
`)}function cE(o){const e=[];for(const n in o){const r=o[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function uE(o,e){const n={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const c=o.getActiveAttrib(e,a),f=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),n[f]={type:c.type,location:o.getAttribLocation(e,f),locationSize:d}}return n}function Vs(o){return o!==""}function xm(o,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ym(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dd(o){return o.replace(dE,hE)}const fE=new Map;function hE(o,e){let n=pt[e];if(n===void 0){const r=fE.get(e);if(r!==void 0)n=pt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Dd(n)}const pE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sm(o){return o.replace(pE,mE)}function mE(o,e,n,r){let a="";for(let c=parseInt(e);c<parseInt(n);c++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return a}function Mm(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function gE(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===zm?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===Nv?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Fi&&(e="SHADOWMAP_TYPE_VSM"),e}function vE(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Zo:case Qo:e="ENVMAP_TYPE_CUBE";break;case kl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _E(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Qo:e="ENVMAP_MODE_REFRACTION";break}return e}function xE(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Bm:e="ENVMAP_BLENDING_MULTIPLY";break;case s_:e="ENVMAP_BLENDING_MIX";break;case a_:e="ENVMAP_BLENDING_ADD";break}return e}function yE(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function SE(o,e,n,r){const a=o.getContext(),c=n.defines;let f=n.vertexShader,d=n.fragmentShader;const h=gE(n),m=vE(n),g=_E(n),S=xE(n),y=yE(n),M=lE(n),A=cE(c),T=a.createProgram();let _,v,U=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A].filter(Vs).join(`
`),_.length>0&&(_+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A].filter(Vs).join(`
`),v.length>0&&(v+=`
`)):(_=[Mm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vs).join(`
`),v=[Mm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+g:"",n.envMap?"#define "+S:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Mr?"#define TONE_MAPPING":"",n.toneMapping!==Mr?pt.tonemapping_pars_fragment:"",n.toneMapping!==Mr?aE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,sE("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Vs).join(`
`)),f=Dd(f),f=xm(f,n),f=ym(f,n),d=Dd(d),d=xm(d,n),d=ym(d,n),f=Sm(f),d=Sm(d),n.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,_=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,v=["#define varying in",n.glslVersion===Op?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Op?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const P=U+_+f,D=U+v+d,ne=vm(a,a.VERTEX_SHADER,P),B=vm(a,a.FRAGMENT_SHADER,D);a.attachShader(T,ne),a.attachShader(T,B),n.index0AttributeName!==void 0?a.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(T,0,"position"),a.linkProgram(T);function k(G){if(o.debug.checkShaderErrors){const Se=a.getProgramInfoLog(T).trim(),ce=a.getShaderInfoLog(ne).trim(),Re=a.getShaderInfoLog(B).trim();let be=!0,xe=!0;if(a.getProgramParameter(T,a.LINK_STATUS)===!1)if(be=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(a,T,ne,B);else{const Me=_m(a,ne,"vertex"),I=_m(a,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(T,a.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+Se+`
`+Me+`
`+I)}else Se!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Se):(ce===""||Re==="")&&(xe=!1);xe&&(G.diagnostics={runnable:be,programLog:Se,vertexShader:{log:ce,prefix:_},fragmentShader:{log:Re,prefix:v}})}a.deleteShader(ne),a.deleteShader(B),Q=new Ll(a,T),L=uE(a,T)}let Q;this.getUniforms=function(){return Q===void 0&&k(this),Q};let L;this.getAttributes=function(){return L===void 0&&k(this),L};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=a.getProgramParameter(T,nE)),R},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=iE++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=ne,this.fragmentShader=B,this}let ME=0;class EE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),c=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(a)===!1&&(f.add(a),a.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new wE(e),n.set(e,r)),r}}class wE{constructor(e){this.id=ME++,this.code=e,this.usedTimes=0}}function TE(o,e,n,r,a,c,f){const d=new jd,h=new EE,m=new Set,g=[],S=a.logarithmicDepthBuffer,y=a.vertexTextures;let M=a.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(L){return m.add(L),L===0?"uv":`uv${L}`}function _(L,R,G,Se,ce){const Re=Se.fog,be=ce.geometry,xe=L.isMeshStandardMaterial?Se.environment:null,Me=(L.isMeshStandardMaterial?n:e).get(L.envMap||xe),I=Me&&Me.mapping===kl?Me.image.height:null,Te=A[L.type];L.precision!==null&&(M=a.getMaxPrecision(L.precision),M!==L.precision&&console.warn("THREE.WebGLProgram.getParameters:",L.precision,"not supported, using",M,"instead."));const ge=be.morphAttributes.position||be.morphAttributes.normal||be.morphAttributes.color,O=ge!==void 0?ge.length:0;let pe=0;be.morphAttributes.position!==void 0&&(pe=1),be.morphAttributes.normal!==void 0&&(pe=2),be.morphAttributes.color!==void 0&&(pe=3);let ke,J,Ee,Le;if(Te){const gt=_i[Te];ke=gt.vertexShader,J=gt.fragmentShader}else ke=L.vertexShader,J=L.fragmentShader,h.update(L),Ee=h.getVertexShaderID(L),Le=h.getFragmentShaderID(L);const Ue=o.getRenderTarget(),Ve=ce.isInstancedMesh===!0,je=ce.isBatchedMesh===!0,tt=!!L.map,_t=!!L.matcap,z=!!Me,xt=!!L.aoMap,ut=!!L.lightMap,ft=!!L.bumpMap,$e=!!L.normalMap,ee=!!L.displacementMap,ye=!!L.emissiveMap,se=!!L.metalnessMap,C=!!L.roughnessMap,E=L.anisotropy>0,Y=L.clearcoat>0,ie=L.dispersion>0,Ce=L.iridescence>0,Ae=L.sheen>0,Ge=L.transmission>0,De=E&&!!L.anisotropyMap,Fe=Y&&!!L.clearcoatMap,re=Y&&!!L.clearcoatNormalMap,ae=Y&&!!L.clearcoatRoughnessMap,F=Ce&&!!L.iridescenceMap,W=Ce&&!!L.iridescenceThicknessMap,q=Ae&&!!L.sheenColorMap,V=Ae&&!!L.sheenRoughnessMap,we=!!L.specularMap,fe=!!L.specularColorMap,ue=!!L.specularIntensityMap,x=Ge&&!!L.transmissionMap,X=Ge&&!!L.thicknessMap,$=!!L.gradientMap,K=!!L.alphaMap,Pe=L.alphaTest>0,We=!!L.alphaHash,Qe=!!L.extensions;let Mt=Mr;L.toneMapped&&(Ue===null||Ue.isXRRenderTarget===!0)&&(Mt=o.toneMapping);const Lt={shaderID:Te,shaderType:L.type,shaderName:L.name,vertexShader:ke,fragmentShader:J,defines:L.defines,customVertexShaderID:Ee,customFragmentShaderID:Le,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:M,batching:je,batchingColor:je&&ce._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&ce.instanceColor!==null,instancingMorph:Ve&&ce.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:Ue===null?o.outputColorSpace:Ue.isXRRenderTarget===!0?Ue.texture.colorSpace:wr,alphaToCoverage:!!L.alphaToCoverage,map:tt,matcap:_t,envMap:z,envMapMode:z&&Me.mapping,envMapCubeUVHeight:I,aoMap:xt,lightMap:ut,bumpMap:ft,normalMap:$e,displacementMap:y&&ee,emissiveMap:ye,normalMapObjectSpace:$e&&L.normalMapType===x_,normalMapTangentSpace:$e&&L.normalMapType===__,metalnessMap:se,roughnessMap:C,anisotropy:E,anisotropyMap:De,clearcoat:Y,clearcoatMap:Fe,clearcoatNormalMap:re,clearcoatRoughnessMap:ae,dispersion:ie,iridescence:Ce,iridescenceMap:F,iridescenceThicknessMap:W,sheen:Ae,sheenColorMap:q,sheenRoughnessMap:V,specularMap:we,specularColorMap:fe,specularIntensityMap:ue,transmission:Ge,transmissionMap:x,thicknessMap:X,gradientMap:$,opaque:L.transparent===!1&&L.blending===qo&&L.alphaToCoverage===!1,alphaMap:K,alphaTest:Pe,alphaHash:We,combine:L.combine,mapUv:tt&&T(L.map.channel),aoMapUv:xt&&T(L.aoMap.channel),lightMapUv:ut&&T(L.lightMap.channel),bumpMapUv:ft&&T(L.bumpMap.channel),normalMapUv:$e&&T(L.normalMap.channel),displacementMapUv:ee&&T(L.displacementMap.channel),emissiveMapUv:ye&&T(L.emissiveMap.channel),metalnessMapUv:se&&T(L.metalnessMap.channel),roughnessMapUv:C&&T(L.roughnessMap.channel),anisotropyMapUv:De&&T(L.anisotropyMap.channel),clearcoatMapUv:Fe&&T(L.clearcoatMap.channel),clearcoatNormalMapUv:re&&T(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&T(L.clearcoatRoughnessMap.channel),iridescenceMapUv:F&&T(L.iridescenceMap.channel),iridescenceThicknessMapUv:W&&T(L.iridescenceThicknessMap.channel),sheenColorMapUv:q&&T(L.sheenColorMap.channel),sheenRoughnessMapUv:V&&T(L.sheenRoughnessMap.channel),specularMapUv:we&&T(L.specularMap.channel),specularColorMapUv:fe&&T(L.specularColorMap.channel),specularIntensityMapUv:ue&&T(L.specularIntensityMap.channel),transmissionMapUv:x&&T(L.transmissionMap.channel),thicknessMapUv:X&&T(L.thicknessMap.channel),alphaMapUv:K&&T(L.alphaMap.channel),vertexTangents:!!be.attributes.tangent&&($e||E),vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!be.attributes.color&&be.attributes.color.itemSize===4,pointsUvs:ce.isPoints===!0&&!!be.attributes.uv&&(tt||K),fog:!!Re,useFog:L.fog===!0,fogExp2:!!Re&&Re.isFogExp2,flatShading:L.flatShading===!0,sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:S,skinning:ce.isSkinnedMesh===!0,morphTargets:be.morphAttributes.position!==void 0,morphNormals:be.morphAttributes.normal!==void 0,morphColors:be.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:pe,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:L.dithering,shadowMapEnabled:o.shadowMap.enabled&&G.length>0,shadowMapType:o.shadowMap.type,toneMapping:Mt,decodeVideoTexture:tt&&L.map.isVideoTexture===!0&&Pt.getTransfer(L.map.colorSpace)===zt,premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===xi,flipSided:L.side===Tn,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionClipCullDistance:Qe&&L.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qe&&L.extensions.multiDraw===!0||je)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:L.customProgramCacheKey()};return Lt.vertexUv1s=m.has(1),Lt.vertexUv2s=m.has(2),Lt.vertexUv3s=m.has(3),m.clear(),Lt}function v(L){const R=[];if(L.shaderID?R.push(L.shaderID):(R.push(L.customVertexShaderID),R.push(L.customFragmentShaderID)),L.defines!==void 0)for(const G in L.defines)R.push(G),R.push(L.defines[G]);return L.isRawShaderMaterial===!1&&(U(R,L),P(R,L),R.push(o.outputColorSpace)),R.push(L.customProgramCacheKey),R.join()}function U(L,R){L.push(R.precision),L.push(R.outputColorSpace),L.push(R.envMapMode),L.push(R.envMapCubeUVHeight),L.push(R.mapUv),L.push(R.alphaMapUv),L.push(R.lightMapUv),L.push(R.aoMapUv),L.push(R.bumpMapUv),L.push(R.normalMapUv),L.push(R.displacementMapUv),L.push(R.emissiveMapUv),L.push(R.metalnessMapUv),L.push(R.roughnessMapUv),L.push(R.anisotropyMapUv),L.push(R.clearcoatMapUv),L.push(R.clearcoatNormalMapUv),L.push(R.clearcoatRoughnessMapUv),L.push(R.iridescenceMapUv),L.push(R.iridescenceThicknessMapUv),L.push(R.sheenColorMapUv),L.push(R.sheenRoughnessMapUv),L.push(R.specularMapUv),L.push(R.specularColorMapUv),L.push(R.specularIntensityMapUv),L.push(R.transmissionMapUv),L.push(R.thicknessMapUv),L.push(R.combine),L.push(R.fogExp2),L.push(R.sizeAttenuation),L.push(R.morphTargetsCount),L.push(R.morphAttributeCount),L.push(R.numDirLights),L.push(R.numPointLights),L.push(R.numSpotLights),L.push(R.numSpotLightMaps),L.push(R.numHemiLights),L.push(R.numRectAreaLights),L.push(R.numDirLightShadows),L.push(R.numPointLightShadows),L.push(R.numSpotLightShadows),L.push(R.numSpotLightShadowsWithMaps),L.push(R.numLightProbes),L.push(R.shadowMapType),L.push(R.toneMapping),L.push(R.numClippingPlanes),L.push(R.numClipIntersection),L.push(R.depthPacking)}function P(L,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),L.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.skinning&&d.enable(4),R.morphTargets&&d.enable(5),R.morphNormals&&d.enable(6),R.morphColors&&d.enable(7),R.premultipliedAlpha&&d.enable(8),R.shadowMapEnabled&&d.enable(9),R.doubleSided&&d.enable(10),R.flipSided&&d.enable(11),R.useDepthPacking&&d.enable(12),R.dithering&&d.enable(13),R.transmission&&d.enable(14),R.sheen&&d.enable(15),R.opaque&&d.enable(16),R.pointsUvs&&d.enable(17),R.decodeVideoTexture&&d.enable(18),R.alphaToCoverage&&d.enable(19),L.push(d.mask)}function D(L){const R=A[L.type];let G;if(R){const Se=_i[R];G=lx.clone(Se.uniforms)}else G=L.uniforms;return G}function ne(L,R){let G;for(let Se=0,ce=g.length;Se<ce;Se++){const Re=g[Se];if(Re.cacheKey===R){G=Re,++G.usedTimes;break}}return G===void 0&&(G=new SE(o,R,L,c),g.push(G)),G}function B(L){if(--L.usedTimes===0){const R=g.indexOf(L);g[R]=g[g.length-1],g.pop(),L.destroy()}}function k(L){h.remove(L)}function Q(){h.dispose()}return{getParameters:_,getProgramCacheKey:v,getUniforms:D,acquireProgram:ne,releaseProgram:B,releaseShaderCache:k,programs:g,dispose:Q}}function AE(){let o=new WeakMap;function e(c){let f=o.get(c);return f===void 0&&(f={},o.set(c,f)),f}function n(c){o.delete(c)}function r(c,f,d){o.get(c)[f]=d}function a(){o=new WeakMap}return{get:e,remove:n,update:r,dispose:a}}function RE(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Em(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function wm(){const o=[];let e=0;const n=[],r=[],a=[];function c(){e=0,n.length=0,r.length=0,a.length=0}function f(S,y,M,A,T,_){let v=o[e];return v===void 0?(v={id:S.id,object:S,geometry:y,material:M,groupOrder:A,renderOrder:S.renderOrder,z:T,group:_},o[e]=v):(v.id=S.id,v.object=S,v.geometry=y,v.material=M,v.groupOrder=A,v.renderOrder=S.renderOrder,v.z=T,v.group=_),e++,v}function d(S,y,M,A,T,_){const v=f(S,y,M,A,T,_);M.transmission>0?r.push(v):M.transparent===!0?a.push(v):n.push(v)}function h(S,y,M,A,T,_){const v=f(S,y,M,A,T,_);M.transmission>0?r.unshift(v):M.transparent===!0?a.unshift(v):n.unshift(v)}function m(S,y){n.length>1&&n.sort(S||RE),r.length>1&&r.sort(y||Em),a.length>1&&a.sort(y||Em)}function g(){for(let S=e,y=o.length;S<y;S++){const M=o[S];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:n,transmissive:r,transparent:a,init:c,push:d,unshift:h,finish:g,sort:m}}function bE(){let o=new WeakMap;function e(r,a){const c=o.get(r);let f;return c===void 0?(f=new wm,o.set(r,[f])):a>=c.length?(f=new wm,c.push(f)):f=c[a],f}function n(){o=new WeakMap}return{get:e,dispose:n}}function CE(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new le,color:new It};break;case"SpotLight":n={position:new le,direction:new le,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new le,color:new It,distance:0,decay:0};break;case"HemisphereLight":n={direction:new le,skyColor:new It,groundColor:new It};break;case"RectAreaLight":n={color:new It,position:new le,halfWidth:new le,halfHeight:new le};break}return o[e.id]=n,n}}}function PE(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=n,n}}}let LE=0;function DE(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function IE(o){const e=new CE,n=PE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new le);const a=new le,c=new Kt,f=new Kt;function d(m){let g=0,S=0,y=0;for(let L=0;L<9;L++)r.probe[L].set(0,0,0);let M=0,A=0,T=0,_=0,v=0,U=0,P=0,D=0,ne=0,B=0,k=0;m.sort(DE);for(let L=0,R=m.length;L<R;L++){const G=m[L],Se=G.color,ce=G.intensity,Re=G.distance,be=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)g+=Se.r*ce,S+=Se.g*ce,y+=Se.b*ce;else if(G.isLightProbe){for(let xe=0;xe<9;xe++)r.probe[xe].addScaledVector(G.sh.coefficients[xe],ce);k++}else if(G.isDirectionalLight){const xe=e.get(G);if(xe.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const Me=G.shadow,I=n.get(G);I.shadowIntensity=Me.intensity,I.shadowBias=Me.bias,I.shadowNormalBias=Me.normalBias,I.shadowRadius=Me.radius,I.shadowMapSize=Me.mapSize,r.directionalShadow[M]=I,r.directionalShadowMap[M]=be,r.directionalShadowMatrix[M]=G.shadow.matrix,U++}r.directional[M]=xe,M++}else if(G.isSpotLight){const xe=e.get(G);xe.position.setFromMatrixPosition(G.matrixWorld),xe.color.copy(Se).multiplyScalar(ce),xe.distance=Re,xe.coneCos=Math.cos(G.angle),xe.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),xe.decay=G.decay,r.spot[T]=xe;const Me=G.shadow;if(G.map&&(r.spotLightMap[ne]=G.map,ne++,Me.updateMatrices(G),G.castShadow&&B++),r.spotLightMatrix[T]=Me.matrix,G.castShadow){const I=n.get(G);I.shadowIntensity=Me.intensity,I.shadowBias=Me.bias,I.shadowNormalBias=Me.normalBias,I.shadowRadius=Me.radius,I.shadowMapSize=Me.mapSize,r.spotShadow[T]=I,r.spotShadowMap[T]=be,D++}T++}else if(G.isRectAreaLight){const xe=e.get(G);xe.color.copy(Se).multiplyScalar(ce),xe.halfWidth.set(G.width*.5,0,0),xe.halfHeight.set(0,G.height*.5,0),r.rectArea[_]=xe,_++}else if(G.isPointLight){const xe=e.get(G);if(xe.color.copy(G.color).multiplyScalar(G.intensity),xe.distance=G.distance,xe.decay=G.decay,G.castShadow){const Me=G.shadow,I=n.get(G);I.shadowIntensity=Me.intensity,I.shadowBias=Me.bias,I.shadowNormalBias=Me.normalBias,I.shadowRadius=Me.radius,I.shadowMapSize=Me.mapSize,I.shadowCameraNear=Me.camera.near,I.shadowCameraFar=Me.camera.far,r.pointShadow[A]=I,r.pointShadowMap[A]=be,r.pointShadowMatrix[A]=G.shadow.matrix,P++}r.point[A]=xe,A++}else if(G.isHemisphereLight){const xe=e.get(G);xe.skyColor.copy(G.color).multiplyScalar(ce),xe.groundColor.copy(G.groundColor).multiplyScalar(ce),r.hemi[v]=xe,v++}}_>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Xe.LTC_FLOAT_1,r.rectAreaLTC2=Xe.LTC_FLOAT_2):(r.rectAreaLTC1=Xe.LTC_HALF_1,r.rectAreaLTC2=Xe.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=S,r.ambient[2]=y;const Q=r.hash;(Q.directionalLength!==M||Q.pointLength!==A||Q.spotLength!==T||Q.rectAreaLength!==_||Q.hemiLength!==v||Q.numDirectionalShadows!==U||Q.numPointShadows!==P||Q.numSpotShadows!==D||Q.numSpotMaps!==ne||Q.numLightProbes!==k)&&(r.directional.length=M,r.spot.length=T,r.rectArea.length=_,r.point.length=A,r.hemi.length=v,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=U,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=D+ne-B,r.spotLightMap.length=ne,r.numSpotLightShadowsWithMaps=B,r.numLightProbes=k,Q.directionalLength=M,Q.pointLength=A,Q.spotLength=T,Q.rectAreaLength=_,Q.hemiLength=v,Q.numDirectionalShadows=U,Q.numPointShadows=P,Q.numSpotShadows=D,Q.numSpotMaps=ne,Q.numLightProbes=k,r.version=LE++)}function h(m,g){let S=0,y=0,M=0,A=0,T=0;const _=g.matrixWorldInverse;for(let v=0,U=m.length;v<U;v++){const P=m[v];if(P.isDirectionalLight){const D=r.directional[S];D.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),D.direction.sub(a),D.direction.transformDirection(_),S++}else if(P.isSpotLight){const D=r.spot[M];D.position.setFromMatrixPosition(P.matrixWorld),D.position.applyMatrix4(_),D.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),D.direction.sub(a),D.direction.transformDirection(_),M++}else if(P.isRectAreaLight){const D=r.rectArea[A];D.position.setFromMatrixPosition(P.matrixWorld),D.position.applyMatrix4(_),f.identity(),c.copy(P.matrixWorld),c.premultiply(_),f.extractRotation(c),D.halfWidth.set(P.width*.5,0,0),D.halfHeight.set(0,P.height*.5,0),D.halfWidth.applyMatrix4(f),D.halfHeight.applyMatrix4(f),A++}else if(P.isPointLight){const D=r.point[y];D.position.setFromMatrixPosition(P.matrixWorld),D.position.applyMatrix4(_),y++}else if(P.isHemisphereLight){const D=r.hemi[T];D.direction.setFromMatrixPosition(P.matrixWorld),D.direction.transformDirection(_),T++}}}return{setup:d,setupView:h,state:r}}function Tm(o){const e=new IE(o),n=[],r=[];function a(g){m.camera=g,n.length=0,r.length=0}function c(g){n.push(g)}function f(g){r.push(g)}function d(){e.setup(n)}function h(g){e.setupView(n,g)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:d,setupLightsView:h,pushLight:c,pushShadow:f}}function NE(o){let e=new WeakMap;function n(a,c=0){const f=e.get(a);let d;return f===void 0?(d=new Tm(o),e.set(a,[d])):c>=f.length?(d=new Tm(o),f.push(d)):d=f[c],d}function r(){e=new WeakMap}return{get:n,dispose:r}}class UE extends Bl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=g_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class OE extends Bl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const FE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kE=`uniform sampler2D shadow_pass;
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
}`;function zE(o,e,n){let r=new cg;const a=new dt,c=new dt,f=new ln,d=new UE({depthPacking:v_}),h=new OE,m={},g=n.maxTextureSize,S={[Hi]:Tn,[Tn]:Hi,[xi]:xi},y=new Er({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:FE,fragmentShader:kE}),M=y.clone();M.defines.HORIZONTAL_PASS=1;const A=new Tr;A.setAttribute("position",new Si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new ei(A,y),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zm;let v=this.type;this.render=function(B,k,Q){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||B.length===0)return;const L=o.getRenderTarget(),R=o.getActiveCubeFace(),G=o.getActiveMipmapLevel(),Se=o.state;Se.setBlending(Sr),Se.buffers.color.setClear(1,1,1,1),Se.buffers.depth.setTest(!0),Se.setScissorTest(!1);const ce=v!==Fi&&this.type===Fi,Re=v===Fi&&this.type!==Fi;for(let be=0,xe=B.length;be<xe;be++){const Me=B[be],I=Me.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",Me,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;a.copy(I.mapSize);const Te=I.getFrameExtents();if(a.multiply(Te),c.copy(I.mapSize),(a.x>g||a.y>g)&&(a.x>g&&(c.x=Math.floor(g/Te.x),a.x=c.x*Te.x,I.mapSize.x=c.x),a.y>g&&(c.y=Math.floor(g/Te.y),a.y=c.y*Te.y,I.mapSize.y=c.y)),I.map===null||ce===!0||Re===!0){const O=this.type!==Fi?{minFilter:Jn,magFilter:Jn}:{};I.map!==null&&I.map.dispose(),I.map=new Qr(a.x,a.y,O),I.map.texture.name=Me.name+".shadowMap",I.camera.updateProjectionMatrix()}o.setRenderTarget(I.map),o.clear();const ge=I.getViewportCount();for(let O=0;O<ge;O++){const pe=I.getViewport(O);f.set(c.x*pe.x,c.y*pe.y,c.x*pe.z,c.y*pe.w),Se.viewport(f),I.updateMatrices(Me,O),r=I.getFrustum(),D(k,Q,I.camera,Me,this.type)}I.isPointLightShadow!==!0&&this.type===Fi&&U(I,Q),I.needsUpdate=!1}v=this.type,_.needsUpdate=!1,o.setRenderTarget(L,R,G)};function U(B,k){const Q=e.update(T);y.defines.VSM_SAMPLES!==B.blurSamples&&(y.defines.VSM_SAMPLES=B.blurSamples,M.defines.VSM_SAMPLES=B.blurSamples,y.needsUpdate=!0,M.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Qr(a.x,a.y)),y.uniforms.shadow_pass.value=B.map.texture,y.uniforms.resolution.value=B.mapSize,y.uniforms.radius.value=B.radius,o.setRenderTarget(B.mapPass),o.clear(),o.renderBufferDirect(k,null,Q,y,T,null),M.uniforms.shadow_pass.value=B.mapPass.texture,M.uniforms.resolution.value=B.mapSize,M.uniforms.radius.value=B.radius,o.setRenderTarget(B.map),o.clear(),o.renderBufferDirect(k,null,Q,M,T,null)}function P(B,k,Q,L){let R=null;const G=Q.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(G!==void 0)R=G;else if(R=Q.isPointLight===!0?h:d,o.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0){const Se=R.uuid,ce=k.uuid;let Re=m[Se];Re===void 0&&(Re={},m[Se]=Re);let be=Re[ce];be===void 0&&(be=R.clone(),Re[ce]=be,k.addEventListener("dispose",ne)),R=be}if(R.visible=k.visible,R.wireframe=k.wireframe,L===Fi?R.side=k.shadowSide!==null?k.shadowSide:k.side:R.side=k.shadowSide!==null?k.shadowSide:S[k.side],R.alphaMap=k.alphaMap,R.alphaTest=k.alphaTest,R.map=k.map,R.clipShadows=k.clipShadows,R.clippingPlanes=k.clippingPlanes,R.clipIntersection=k.clipIntersection,R.displacementMap=k.displacementMap,R.displacementScale=k.displacementScale,R.displacementBias=k.displacementBias,R.wireframeLinewidth=k.wireframeLinewidth,R.linewidth=k.linewidth,Q.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const Se=o.properties.get(R);Se.light=Q}return R}function D(B,k,Q,L,R){if(B.visible===!1)return;if(B.layers.test(k.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&R===Fi)&&(!B.frustumCulled||r.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,B.matrixWorld);const ce=e.update(B),Re=B.material;if(Array.isArray(Re)){const be=ce.groups;for(let xe=0,Me=be.length;xe<Me;xe++){const I=be[xe],Te=Re[I.materialIndex];if(Te&&Te.visible){const ge=P(B,Te,L,R);B.onBeforeShadow(o,B,k,Q,ce,ge,I),o.renderBufferDirect(Q,null,ce,ge,B,I),B.onAfterShadow(o,B,k,Q,ce,ge,I)}}}else if(Re.visible){const be=P(B,Re,L,R);B.onBeforeShadow(o,B,k,Q,ce,be,null),o.renderBufferDirect(Q,null,ce,be,B,null),B.onAfterShadow(o,B,k,Q,ce,be,null)}}const Se=B.children;for(let ce=0,Re=Se.length;ce<Re;ce++)D(Se[ce],k,Q,L,R)}function ne(B){B.target.removeEventListener("dispose",ne);for(const Q in m){const L=m[Q],R=B.target.uuid;R in L&&(L[R].dispose(),delete L[R])}}}function BE(o){function e(){let x=!1;const X=new ln;let $=null;const K=new ln(0,0,0,0);return{setMask:function(Pe){$!==Pe&&!x&&(o.colorMask(Pe,Pe,Pe,Pe),$=Pe)},setLocked:function(Pe){x=Pe},setClear:function(Pe,We,Qe,Mt,Lt){Lt===!0&&(Pe*=Mt,We*=Mt,Qe*=Mt),X.set(Pe,We,Qe,Mt),K.equals(X)===!1&&(o.clearColor(Pe,We,Qe,Mt),K.copy(X))},reset:function(){x=!1,$=null,K.set(-1,0,0,0)}}}function n(){let x=!1,X=null,$=null,K=null;return{setTest:function(Pe){Pe?Le(o.DEPTH_TEST):Ue(o.DEPTH_TEST)},setMask:function(Pe){X!==Pe&&!x&&(o.depthMask(Pe),X=Pe)},setFunc:function(Pe){if($!==Pe){switch(Pe){case Jv:o.depthFunc(o.NEVER);break;case e_:o.depthFunc(o.ALWAYS);break;case t_:o.depthFunc(o.LESS);break;case Dl:o.depthFunc(o.LEQUAL);break;case n_:o.depthFunc(o.EQUAL);break;case i_:o.depthFunc(o.GEQUAL);break;case r_:o.depthFunc(o.GREATER);break;case o_:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}$=Pe}},setLocked:function(Pe){x=Pe},setClear:function(Pe){K!==Pe&&(o.clearDepth(Pe),K=Pe)},reset:function(){x=!1,X=null,$=null,K=null}}}function r(){let x=!1,X=null,$=null,K=null,Pe=null,We=null,Qe=null,Mt=null,Lt=null;return{setTest:function(gt){x||(gt?Le(o.STENCIL_TEST):Ue(o.STENCIL_TEST))},setMask:function(gt){X!==gt&&!x&&(o.stencilMask(gt),X=gt)},setFunc:function(gt,Dt,Et){($!==gt||K!==Dt||Pe!==Et)&&(o.stencilFunc(gt,Dt,Et),$=gt,K=Dt,Pe=Et)},setOp:function(gt,Dt,Et){(We!==gt||Qe!==Dt||Mt!==Et)&&(o.stencilOp(gt,Dt,Et),We=gt,Qe=Dt,Mt=Et)},setLocked:function(gt){x=gt},setClear:function(gt){Lt!==gt&&(o.clearStencil(gt),Lt=gt)},reset:function(){x=!1,X=null,$=null,K=null,Pe=null,We=null,Qe=null,Mt=null,Lt=null}}}const a=new e,c=new n,f=new r,d=new WeakMap,h=new WeakMap;let m={},g={},S=new WeakMap,y=[],M=null,A=!1,T=null,_=null,v=null,U=null,P=null,D=null,ne=null,B=new It(0,0,0),k=0,Q=!1,L=null,R=null,G=null,Se=null,ce=null;const Re=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let be=!1,xe=0;const Me=o.getParameter(o.VERSION);Me.indexOf("WebGL")!==-1?(xe=parseFloat(/^WebGL (\d)/.exec(Me)[1]),be=xe>=1):Me.indexOf("OpenGL ES")!==-1&&(xe=parseFloat(/^OpenGL ES (\d)/.exec(Me)[1]),be=xe>=2);let I=null,Te={};const ge=o.getParameter(o.SCISSOR_BOX),O=o.getParameter(o.VIEWPORT),pe=new ln().fromArray(ge),ke=new ln().fromArray(O);function J(x,X,$,K){const Pe=new Uint8Array(4),We=o.createTexture();o.bindTexture(x,We),o.texParameteri(x,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(x,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Qe=0;Qe<$;Qe++)x===o.TEXTURE_3D||x===o.TEXTURE_2D_ARRAY?o.texImage3D(X,0,o.RGBA,1,1,K,0,o.RGBA,o.UNSIGNED_BYTE,Pe):o.texImage2D(X+Qe,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Pe);return We}const Ee={};Ee[o.TEXTURE_2D]=J(o.TEXTURE_2D,o.TEXTURE_2D,1),Ee[o.TEXTURE_CUBE_MAP]=J(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[o.TEXTURE_2D_ARRAY]=J(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Ee[o.TEXTURE_3D]=J(o.TEXTURE_3D,o.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),f.setClear(0),Le(o.DEPTH_TEST),c.setFunc(Dl),ft(!1),$e(Pp),Le(o.CULL_FACE),xt(Sr);function Le(x){m[x]!==!0&&(o.enable(x),m[x]=!0)}function Ue(x){m[x]!==!1&&(o.disable(x),m[x]=!1)}function Ve(x,X){return g[x]!==X?(o.bindFramebuffer(x,X),g[x]=X,x===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=X),x===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=X),!0):!1}function je(x,X){let $=y,K=!1;if(x){$=S.get(X),$===void 0&&($=[],S.set(X,$));const Pe=x.textures;if($.length!==Pe.length||$[0]!==o.COLOR_ATTACHMENT0){for(let We=0,Qe=Pe.length;We<Qe;We++)$[We]=o.COLOR_ATTACHMENT0+We;$.length=Pe.length,K=!0}}else $[0]!==o.BACK&&($[0]=o.BACK,K=!0);K&&o.drawBuffers($)}function tt(x){return M!==x?(o.useProgram(x),M=x,!0):!1}const _t={[Yr]:o.FUNC_ADD,[Ov]:o.FUNC_SUBTRACT,[Fv]:o.FUNC_REVERSE_SUBTRACT};_t[kv]=o.MIN,_t[zv]=o.MAX;const z={[Bv]:o.ZERO,[Hv]:o.ONE,[Vv]:o.SRC_COLOR,[ed]:o.SRC_ALPHA,[qv]:o.SRC_ALPHA_SATURATE,[jv]:o.DST_COLOR,[Wv]:o.DST_ALPHA,[Gv]:o.ONE_MINUS_SRC_COLOR,[td]:o.ONE_MINUS_SRC_ALPHA,[Yv]:o.ONE_MINUS_DST_COLOR,[Xv]:o.ONE_MINUS_DST_ALPHA,[$v]:o.CONSTANT_COLOR,[Kv]:o.ONE_MINUS_CONSTANT_COLOR,[Zv]:o.CONSTANT_ALPHA,[Qv]:o.ONE_MINUS_CONSTANT_ALPHA};function xt(x,X,$,K,Pe,We,Qe,Mt,Lt,gt){if(x===Sr){A===!0&&(Ue(o.BLEND),A=!1);return}if(A===!1&&(Le(o.BLEND),A=!0),x!==Uv){if(x!==T||gt!==Q){if((_!==Yr||P!==Yr)&&(o.blendEquation(o.FUNC_ADD),_=Yr,P=Yr),gt)switch(x){case qo:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Lp:o.blendFunc(o.ONE,o.ONE);break;case Dp:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Ip:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",x);break}else switch(x){case qo:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Lp:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Dp:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Ip:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",x);break}v=null,U=null,D=null,ne=null,B.set(0,0,0),k=0,T=x,Q=gt}return}Pe=Pe||X,We=We||$,Qe=Qe||K,(X!==_||Pe!==P)&&(o.blendEquationSeparate(_t[X],_t[Pe]),_=X,P=Pe),($!==v||K!==U||We!==D||Qe!==ne)&&(o.blendFuncSeparate(z[$],z[K],z[We],z[Qe]),v=$,U=K,D=We,ne=Qe),(Mt.equals(B)===!1||Lt!==k)&&(o.blendColor(Mt.r,Mt.g,Mt.b,Lt),B.copy(Mt),k=Lt),T=x,Q=!1}function ut(x,X){x.side===xi?Ue(o.CULL_FACE):Le(o.CULL_FACE);let $=x.side===Tn;X&&($=!$),ft($),x.blending===qo&&x.transparent===!1?xt(Sr):xt(x.blending,x.blendEquation,x.blendSrc,x.blendDst,x.blendEquationAlpha,x.blendSrcAlpha,x.blendDstAlpha,x.blendColor,x.blendAlpha,x.premultipliedAlpha),c.setFunc(x.depthFunc),c.setTest(x.depthTest),c.setMask(x.depthWrite),a.setMask(x.colorWrite);const K=x.stencilWrite;f.setTest(K),K&&(f.setMask(x.stencilWriteMask),f.setFunc(x.stencilFunc,x.stencilRef,x.stencilFuncMask),f.setOp(x.stencilFail,x.stencilZFail,x.stencilZPass)),ye(x.polygonOffset,x.polygonOffsetFactor,x.polygonOffsetUnits),x.alphaToCoverage===!0?Le(o.SAMPLE_ALPHA_TO_COVERAGE):Ue(o.SAMPLE_ALPHA_TO_COVERAGE)}function ft(x){L!==x&&(x?o.frontFace(o.CW):o.frontFace(o.CCW),L=x)}function $e(x){x!==Dv?(Le(o.CULL_FACE),x!==R&&(x===Pp?o.cullFace(o.BACK):x===Iv?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ue(o.CULL_FACE),R=x}function ee(x){x!==G&&(be&&o.lineWidth(x),G=x)}function ye(x,X,$){x?(Le(o.POLYGON_OFFSET_FILL),(Se!==X||ce!==$)&&(o.polygonOffset(X,$),Se=X,ce=$)):Ue(o.POLYGON_OFFSET_FILL)}function se(x){x?Le(o.SCISSOR_TEST):Ue(o.SCISSOR_TEST)}function C(x){x===void 0&&(x=o.TEXTURE0+Re-1),I!==x&&(o.activeTexture(x),I=x)}function E(x,X,$){$===void 0&&(I===null?$=o.TEXTURE0+Re-1:$=I);let K=Te[$];K===void 0&&(K={type:void 0,texture:void 0},Te[$]=K),(K.type!==x||K.texture!==X)&&(I!==$&&(o.activeTexture($),I=$),o.bindTexture(x,X||Ee[x]),K.type=x,K.texture=X)}function Y(){const x=Te[I];x!==void 0&&x.type!==void 0&&(o.bindTexture(x.type,null),x.type=void 0,x.texture=void 0)}function ie(){try{o.compressedTexImage2D.apply(o,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Ce(){try{o.compressedTexImage3D.apply(o,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Ae(){try{o.texSubImage2D.apply(o,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Ge(){try{o.texSubImage3D.apply(o,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function De(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Fe(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function re(){try{o.texStorage2D.apply(o,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function ae(){try{o.texStorage3D.apply(o,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function F(){try{o.texImage2D.apply(o,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function W(){try{o.texImage3D.apply(o,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function q(x){pe.equals(x)===!1&&(o.scissor(x.x,x.y,x.z,x.w),pe.copy(x))}function V(x){ke.equals(x)===!1&&(o.viewport(x.x,x.y,x.z,x.w),ke.copy(x))}function we(x,X){let $=h.get(X);$===void 0&&($=new WeakMap,h.set(X,$));let K=$.get(x);K===void 0&&(K=o.getUniformBlockIndex(X,x.name),$.set(x,K))}function fe(x,X){const K=h.get(X).get(x);d.get(X)!==K&&(o.uniformBlockBinding(X,K,x.__bindingPointIndex),d.set(X,K))}function ue(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),m={},I=null,Te={},g={},S=new WeakMap,y=[],M=null,A=!1,T=null,_=null,v=null,U=null,P=null,D=null,ne=null,B=new It(0,0,0),k=0,Q=!1,L=null,R=null,G=null,Se=null,ce=null,pe.set(0,0,o.canvas.width,o.canvas.height),ke.set(0,0,o.canvas.width,o.canvas.height),a.reset(),c.reset(),f.reset()}return{buffers:{color:a,depth:c,stencil:f},enable:Le,disable:Ue,bindFramebuffer:Ve,drawBuffers:je,useProgram:tt,setBlending:xt,setMaterial:ut,setFlipSided:ft,setCullFace:$e,setLineWidth:ee,setPolygonOffset:ye,setScissorTest:se,activeTexture:C,bindTexture:E,unbindTexture:Y,compressedTexImage2D:ie,compressedTexImage3D:Ce,texImage2D:F,texImage3D:W,updateUBOMapping:we,uniformBlockBinding:fe,texStorage2D:re,texStorage3D:ae,texSubImage2D:Ae,texSubImage3D:Ge,compressedTexSubImage2D:De,compressedTexSubImage3D:Fe,scissor:q,viewport:V,reset:ue}}function Am(o,e,n,r){const a=HE(r);switch(n){case Xm:return o*e;case Ym:return o*e;case qm:return o*e*2;case $m:return o*e/a.components*a.byteLength;case zd:return o*e/a.components*a.byteLength;case Km:return o*e*2/a.components*a.byteLength;case Bd:return o*e*2/a.components*a.byteLength;case jm:return o*e*3/a.components*a.byteLength;case di:return o*e*4/a.components*a.byteLength;case Hd:return o*e*4/a.components*a.byteLength;case Al:case Rl:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case bl:case Cl:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case ad:case cd:return Math.max(o,16)*Math.max(e,8)/4;case sd:case ld:return Math.max(o,8)*Math.max(e,8)/2;case ud:case dd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case fd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case hd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case pd:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case md:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case gd:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case vd:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case _d:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case xd:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case yd:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Sd:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Md:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Ed:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case wd:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Td:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Ad:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Pl:case Rd:case bd:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Zm:case Cd:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Pd:case Ld:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function HE(o){switch(o){case Vi:case Vm:return{byteLength:1,components:1};case Xs:case Gm:case Ys:return{byteLength:2,components:1};case Fd:case kd:return{byteLength:2,components:4};case Zr:case Od:case ki:return{byteLength:4,components:1};case Wm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}function VE(o,e,n,r,a,c,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new dt,g=new WeakMap;let S;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(C,E){return M?new OffscreenCanvas(C,E):Fl("canvas")}function T(C,E,Y){let ie=1;const Ce=se(C);if((Ce.width>Y||Ce.height>Y)&&(ie=Y/Math.max(Ce.width,Ce.height)),ie<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Ae=Math.floor(ie*Ce.width),Ge=Math.floor(ie*Ce.height);S===void 0&&(S=A(Ae,Ge));const De=E?A(Ae,Ge):S;return De.width=Ae,De.height=Ge,De.getContext("2d").drawImage(C,0,0,Ae,Ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Ce.width+"x"+Ce.height+") to ("+Ae+"x"+Ge+")."),De}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Ce.width+"x"+Ce.height+")."),C;return C}function _(C){return C.generateMipmaps&&C.minFilter!==Jn&&C.minFilter!==wn}function v(C){o.generateMipmap(C)}function U(C,E,Y,ie,Ce=!1){if(C!==null){if(o[C]!==void 0)return o[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Ae=E;if(E===o.RED&&(Y===o.FLOAT&&(Ae=o.R32F),Y===o.HALF_FLOAT&&(Ae=o.R16F),Y===o.UNSIGNED_BYTE&&(Ae=o.R8)),E===o.RED_INTEGER&&(Y===o.UNSIGNED_BYTE&&(Ae=o.R8UI),Y===o.UNSIGNED_SHORT&&(Ae=o.R16UI),Y===o.UNSIGNED_INT&&(Ae=o.R32UI),Y===o.BYTE&&(Ae=o.R8I),Y===o.SHORT&&(Ae=o.R16I),Y===o.INT&&(Ae=o.R32I)),E===o.RG&&(Y===o.FLOAT&&(Ae=o.RG32F),Y===o.HALF_FLOAT&&(Ae=o.RG16F),Y===o.UNSIGNED_BYTE&&(Ae=o.RG8)),E===o.RG_INTEGER&&(Y===o.UNSIGNED_BYTE&&(Ae=o.RG8UI),Y===o.UNSIGNED_SHORT&&(Ae=o.RG16UI),Y===o.UNSIGNED_INT&&(Ae=o.RG32UI),Y===o.BYTE&&(Ae=o.RG8I),Y===o.SHORT&&(Ae=o.RG16I),Y===o.INT&&(Ae=o.RG32I)),E===o.RGB&&Y===o.UNSIGNED_INT_5_9_9_9_REV&&(Ae=o.RGB9_E5),E===o.RGBA){const Ge=Ce?Il:Pt.getTransfer(ie);Y===o.FLOAT&&(Ae=o.RGBA32F),Y===o.HALF_FLOAT&&(Ae=o.RGBA16F),Y===o.UNSIGNED_BYTE&&(Ae=Ge===zt?o.SRGB8_ALPHA8:o.RGBA8),Y===o.UNSIGNED_SHORT_4_4_4_4&&(Ae=o.RGBA4),Y===o.UNSIGNED_SHORT_5_5_5_1&&(Ae=o.RGB5_A1)}return(Ae===o.R16F||Ae===o.R32F||Ae===o.RG16F||Ae===o.RG32F||Ae===o.RGBA16F||Ae===o.RGBA32F)&&e.get("EXT_color_buffer_float"),Ae}function P(C,E){let Y;return C?E===null||E===Zr||E===Jo?Y=o.DEPTH24_STENCIL8:E===ki?Y=o.DEPTH32F_STENCIL8:E===Xs&&(Y=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Zr||E===Jo?Y=o.DEPTH_COMPONENT24:E===ki?Y=o.DEPTH_COMPONENT32F:E===Xs&&(Y=o.DEPTH_COMPONENT16),Y}function D(C,E){return _(C)===!0||C.isFramebufferTexture&&C.minFilter!==Jn&&C.minFilter!==wn?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function ne(C){const E=C.target;E.removeEventListener("dispose",ne),k(E),E.isVideoTexture&&g.delete(E)}function B(C){const E=C.target;E.removeEventListener("dispose",B),L(E)}function k(C){const E=r.get(C);if(E.__webglInit===void 0)return;const Y=C.source,ie=y.get(Y);if(ie){const Ce=ie[E.__cacheKey];Ce.usedTimes--,Ce.usedTimes===0&&Q(C),Object.keys(ie).length===0&&y.delete(Y)}r.remove(C)}function Q(C){const E=r.get(C);o.deleteTexture(E.__webglTexture);const Y=C.source,ie=y.get(Y);delete ie[E.__cacheKey],f.memory.textures--}function L(C){const E=r.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(E.__webglFramebuffer[ie]))for(let Ce=0;Ce<E.__webglFramebuffer[ie].length;Ce++)o.deleteFramebuffer(E.__webglFramebuffer[ie][Ce]);else o.deleteFramebuffer(E.__webglFramebuffer[ie]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[ie])}else{if(Array.isArray(E.__webglFramebuffer))for(let ie=0;ie<E.__webglFramebuffer.length;ie++)o.deleteFramebuffer(E.__webglFramebuffer[ie]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ie=0;ie<E.__webglColorRenderbuffer.length;ie++)E.__webglColorRenderbuffer[ie]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[ie]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Y=C.textures;for(let ie=0,Ce=Y.length;ie<Ce;ie++){const Ae=r.get(Y[ie]);Ae.__webglTexture&&(o.deleteTexture(Ae.__webglTexture),f.memory.textures--),r.remove(Y[ie])}r.remove(C)}let R=0;function G(){R=0}function Se(){const C=R;return C>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+a.maxTextures),R+=1,C}function ce(C){const E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function Re(C,E){const Y=r.get(C);if(C.isVideoTexture&&ee(C),C.isRenderTargetTexture===!1&&C.version>0&&Y.__version!==C.version){const ie=C.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ke(Y,C,E);return}}n.bindTexture(o.TEXTURE_2D,Y.__webglTexture,o.TEXTURE0+E)}function be(C,E){const Y=r.get(C);if(C.version>0&&Y.__version!==C.version){ke(Y,C,E);return}n.bindTexture(o.TEXTURE_2D_ARRAY,Y.__webglTexture,o.TEXTURE0+E)}function xe(C,E){const Y=r.get(C);if(C.version>0&&Y.__version!==C.version){ke(Y,C,E);return}n.bindTexture(o.TEXTURE_3D,Y.__webglTexture,o.TEXTURE0+E)}function Me(C,E){const Y=r.get(C);if(C.version>0&&Y.__version!==C.version){J(Y,C,E);return}n.bindTexture(o.TEXTURE_CUBE_MAP,Y.__webglTexture,o.TEXTURE0+E)}const I={[rd]:o.REPEAT,[$r]:o.CLAMP_TO_EDGE,[od]:o.MIRRORED_REPEAT},Te={[Jn]:o.NEAREST,[m_]:o.NEAREST_MIPMAP_NEAREST,[nl]:o.NEAREST_MIPMAP_LINEAR,[wn]:o.LINEAR,[Au]:o.LINEAR_MIPMAP_NEAREST,[Kr]:o.LINEAR_MIPMAP_LINEAR},ge={[y_]:o.NEVER,[A_]:o.ALWAYS,[S_]:o.LESS,[Qm]:o.LEQUAL,[M_]:o.EQUAL,[T_]:o.GEQUAL,[E_]:o.GREATER,[w_]:o.NOTEQUAL};function O(C,E){if(E.type===ki&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===wn||E.magFilter===Au||E.magFilter===nl||E.magFilter===Kr||E.minFilter===wn||E.minFilter===Au||E.minFilter===nl||E.minFilter===Kr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(C,o.TEXTURE_WRAP_S,I[E.wrapS]),o.texParameteri(C,o.TEXTURE_WRAP_T,I[E.wrapT]),(C===o.TEXTURE_3D||C===o.TEXTURE_2D_ARRAY)&&o.texParameteri(C,o.TEXTURE_WRAP_R,I[E.wrapR]),o.texParameteri(C,o.TEXTURE_MAG_FILTER,Te[E.magFilter]),o.texParameteri(C,o.TEXTURE_MIN_FILTER,Te[E.minFilter]),E.compareFunction&&(o.texParameteri(C,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(C,o.TEXTURE_COMPARE_FUNC,ge[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Jn||E.minFilter!==nl&&E.minFilter!==Kr||E.type===ki&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");o.texParameterf(C,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,a.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function pe(C,E){let Y=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",ne));const ie=E.source;let Ce=y.get(ie);Ce===void 0&&(Ce={},y.set(ie,Ce));const Ae=ce(E);if(Ae!==C.__cacheKey){Ce[Ae]===void 0&&(Ce[Ae]={texture:o.createTexture(),usedTimes:0},f.memory.textures++,Y=!0),Ce[Ae].usedTimes++;const Ge=Ce[C.__cacheKey];Ge!==void 0&&(Ce[C.__cacheKey].usedTimes--,Ge.usedTimes===0&&Q(E)),C.__cacheKey=Ae,C.__webglTexture=Ce[Ae].texture}return Y}function ke(C,E,Y){let ie=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ie=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ie=o.TEXTURE_3D);const Ce=pe(C,E),Ae=E.source;n.bindTexture(ie,C.__webglTexture,o.TEXTURE0+Y);const Ge=r.get(Ae);if(Ae.version!==Ge.__version||Ce===!0){n.activeTexture(o.TEXTURE0+Y);const De=Pt.getPrimaries(Pt.workingColorSpace),Fe=E.colorSpace===yr?null:Pt.getPrimaries(E.colorSpace),re=E.colorSpace===yr||De===Fe?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let ae=T(E.image,!1,a.maxTextureSize);ae=ye(E,ae);const F=c.convert(E.format,E.colorSpace),W=c.convert(E.type);let q=U(E.internalFormat,F,W,E.colorSpace,E.isVideoTexture);O(ie,E);let V;const we=E.mipmaps,fe=E.isVideoTexture!==!0,ue=Ge.__version===void 0||Ce===!0,x=Ae.dataReady,X=D(E,ae);if(E.isDepthTexture)q=P(E.format===es,E.type),ue&&(fe?n.texStorage2D(o.TEXTURE_2D,1,q,ae.width,ae.height):n.texImage2D(o.TEXTURE_2D,0,q,ae.width,ae.height,0,F,W,null));else if(E.isDataTexture)if(we.length>0){fe&&ue&&n.texStorage2D(o.TEXTURE_2D,X,q,we[0].width,we[0].height);for(let $=0,K=we.length;$<K;$++)V=we[$],fe?x&&n.texSubImage2D(o.TEXTURE_2D,$,0,0,V.width,V.height,F,W,V.data):n.texImage2D(o.TEXTURE_2D,$,q,V.width,V.height,0,F,W,V.data);E.generateMipmaps=!1}else fe?(ue&&n.texStorage2D(o.TEXTURE_2D,X,q,ae.width,ae.height),x&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,ae.width,ae.height,F,W,ae.data)):n.texImage2D(o.TEXTURE_2D,0,q,ae.width,ae.height,0,F,W,ae.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){fe&&ue&&n.texStorage3D(o.TEXTURE_2D_ARRAY,X,q,we[0].width,we[0].height,ae.depth);for(let $=0,K=we.length;$<K;$++)if(V=we[$],E.format!==di)if(F!==null)if(fe){if(x)if(E.layerUpdates.size>0){const Pe=Am(V.width,V.height,E.format,E.type);for(const We of E.layerUpdates){const Qe=V.data.subarray(We*Pe/V.data.BYTES_PER_ELEMENT,(We+1)*Pe/V.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,$,0,0,We,V.width,V.height,1,F,Qe,0,0)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,$,0,0,0,V.width,V.height,ae.depth,F,V.data,0,0)}else n.compressedTexImage3D(o.TEXTURE_2D_ARRAY,$,q,V.width,V.height,ae.depth,0,V.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else fe?x&&n.texSubImage3D(o.TEXTURE_2D_ARRAY,$,0,0,0,V.width,V.height,ae.depth,F,W,V.data):n.texImage3D(o.TEXTURE_2D_ARRAY,$,q,V.width,V.height,ae.depth,0,F,W,V.data)}else{fe&&ue&&n.texStorage2D(o.TEXTURE_2D,X,q,we[0].width,we[0].height);for(let $=0,K=we.length;$<K;$++)V=we[$],E.format!==di?F!==null?fe?x&&n.compressedTexSubImage2D(o.TEXTURE_2D,$,0,0,V.width,V.height,F,V.data):n.compressedTexImage2D(o.TEXTURE_2D,$,q,V.width,V.height,0,V.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?x&&n.texSubImage2D(o.TEXTURE_2D,$,0,0,V.width,V.height,F,W,V.data):n.texImage2D(o.TEXTURE_2D,$,q,V.width,V.height,0,F,W,V.data)}else if(E.isDataArrayTexture)if(fe){if(ue&&n.texStorage3D(o.TEXTURE_2D_ARRAY,X,q,ae.width,ae.height,ae.depth),x)if(E.layerUpdates.size>0){const $=Am(ae.width,ae.height,E.format,E.type);for(const K of E.layerUpdates){const Pe=ae.data.subarray(K*$/ae.data.BYTES_PER_ELEMENT,(K+1)*$/ae.data.BYTES_PER_ELEMENT);n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,K,ae.width,ae.height,1,F,W,Pe)}E.clearLayerUpdates()}else n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,F,W,ae.data)}else n.texImage3D(o.TEXTURE_2D_ARRAY,0,q,ae.width,ae.height,ae.depth,0,F,W,ae.data);else if(E.isData3DTexture)fe?(ue&&n.texStorage3D(o.TEXTURE_3D,X,q,ae.width,ae.height,ae.depth),x&&n.texSubImage3D(o.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,F,W,ae.data)):n.texImage3D(o.TEXTURE_3D,0,q,ae.width,ae.height,ae.depth,0,F,W,ae.data);else if(E.isFramebufferTexture){if(ue)if(fe)n.texStorage2D(o.TEXTURE_2D,X,q,ae.width,ae.height);else{let $=ae.width,K=ae.height;for(let Pe=0;Pe<X;Pe++)n.texImage2D(o.TEXTURE_2D,Pe,q,$,K,0,F,W,null),$>>=1,K>>=1}}else if(we.length>0){if(fe&&ue){const $=se(we[0]);n.texStorage2D(o.TEXTURE_2D,X,q,$.width,$.height)}for(let $=0,K=we.length;$<K;$++)V=we[$],fe?x&&n.texSubImage2D(o.TEXTURE_2D,$,0,0,F,W,V):n.texImage2D(o.TEXTURE_2D,$,q,F,W,V);E.generateMipmaps=!1}else if(fe){if(ue){const $=se(ae);n.texStorage2D(o.TEXTURE_2D,X,q,$.width,$.height)}x&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,F,W,ae)}else n.texImage2D(o.TEXTURE_2D,0,q,F,W,ae);_(E)&&v(ie),Ge.__version=Ae.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function J(C,E,Y){if(E.image.length!==6)return;const ie=pe(C,E),Ce=E.source;n.bindTexture(o.TEXTURE_CUBE_MAP,C.__webglTexture,o.TEXTURE0+Y);const Ae=r.get(Ce);if(Ce.version!==Ae.__version||ie===!0){n.activeTexture(o.TEXTURE0+Y);const Ge=Pt.getPrimaries(Pt.workingColorSpace),De=E.colorSpace===yr?null:Pt.getPrimaries(E.colorSpace),Fe=E.colorSpace===yr||Ge===De?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const re=E.isCompressedTexture||E.image[0].isCompressedTexture,ae=E.image[0]&&E.image[0].isDataTexture,F=[];for(let K=0;K<6;K++)!re&&!ae?F[K]=T(E.image[K],!0,a.maxCubemapSize):F[K]=ae?E.image[K].image:E.image[K],F[K]=ye(E,F[K]);const W=F[0],q=c.convert(E.format,E.colorSpace),V=c.convert(E.type),we=U(E.internalFormat,q,V,E.colorSpace),fe=E.isVideoTexture!==!0,ue=Ae.__version===void 0||ie===!0,x=Ce.dataReady;let X=D(E,W);O(o.TEXTURE_CUBE_MAP,E);let $;if(re){fe&&ue&&n.texStorage2D(o.TEXTURE_CUBE_MAP,X,we,W.width,W.height);for(let K=0;K<6;K++){$=F[K].mipmaps;for(let Pe=0;Pe<$.length;Pe++){const We=$[Pe];E.format!==di?q!==null?fe?x&&n.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+K,Pe,0,0,We.width,We.height,q,We.data):n.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+K,Pe,we,We.width,We.height,0,We.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):fe?x&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+K,Pe,0,0,We.width,We.height,q,V,We.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+K,Pe,we,We.width,We.height,0,q,V,We.data)}}}else{if($=E.mipmaps,fe&&ue){$.length>0&&X++;const K=se(F[0]);n.texStorage2D(o.TEXTURE_CUBE_MAP,X,we,K.width,K.height)}for(let K=0;K<6;K++)if(ae){fe?x&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,F[K].width,F[K].height,q,V,F[K].data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,we,F[K].width,F[K].height,0,q,V,F[K].data);for(let Pe=0;Pe<$.length;Pe++){const Qe=$[Pe].image[K].image;fe?x&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+K,Pe+1,0,0,Qe.width,Qe.height,q,V,Qe.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+K,Pe+1,we,Qe.width,Qe.height,0,q,V,Qe.data)}}else{fe?x&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,q,V,F[K]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,we,q,V,F[K]);for(let Pe=0;Pe<$.length;Pe++){const We=$[Pe];fe?x&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+K,Pe+1,0,0,q,V,We.image[K]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+K,Pe+1,we,q,V,We.image[K])}}}_(E)&&v(o.TEXTURE_CUBE_MAP),Ae.__version=Ce.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function Ee(C,E,Y,ie,Ce,Ae){const Ge=c.convert(Y.format,Y.colorSpace),De=c.convert(Y.type),Fe=U(Y.internalFormat,Ge,De,Y.colorSpace);if(!r.get(E).__hasExternalTextures){const ae=Math.max(1,E.width>>Ae),F=Math.max(1,E.height>>Ae);Ce===o.TEXTURE_3D||Ce===o.TEXTURE_2D_ARRAY?n.texImage3D(Ce,Ae,Fe,ae,F,E.depth,0,Ge,De,null):n.texImage2D(Ce,Ae,Fe,ae,F,0,Ge,De,null)}n.bindFramebuffer(o.FRAMEBUFFER,C),$e(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ie,Ce,r.get(Y).__webglTexture,0,ft(E)):(Ce===o.TEXTURE_2D||Ce>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Ce<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ie,Ce,r.get(Y).__webglTexture,Ae),n.bindFramebuffer(o.FRAMEBUFFER,null)}function Le(C,E,Y){if(o.bindRenderbuffer(o.RENDERBUFFER,C),E.depthBuffer){const ie=E.depthTexture,Ce=ie&&ie.isDepthTexture?ie.type:null,Ae=P(E.stencilBuffer,Ce),Ge=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,De=ft(E);$e(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,De,Ae,E.width,E.height):Y?o.renderbufferStorageMultisample(o.RENDERBUFFER,De,Ae,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Ae,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ge,o.RENDERBUFFER,C)}else{const ie=E.textures;for(let Ce=0;Ce<ie.length;Ce++){const Ae=ie[Ce],Ge=c.convert(Ae.format,Ae.colorSpace),De=c.convert(Ae.type),Fe=U(Ae.internalFormat,Ge,De,Ae.colorSpace),re=ft(E);Y&&$e(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,re,Fe,E.width,E.height):$e(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,re,Fe,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Fe,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ue(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(o.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Re(E.depthTexture,0);const ie=r.get(E.depthTexture).__webglTexture,Ce=ft(E);if(E.depthTexture.format===$o)$e(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ie,0,Ce):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ie,0);else if(E.depthTexture.format===es)$e(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ie,0,Ce):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Ve(C){const E=r.get(C),Y=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");Ue(E.__webglFramebuffer,C)}else if(Y){E.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)n.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[ie]),E.__webglDepthbuffer[ie]=o.createRenderbuffer(),Le(E.__webglDepthbuffer[ie],C,!1)}else n.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=o.createRenderbuffer(),Le(E.__webglDepthbuffer,C,!1);n.bindFramebuffer(o.FRAMEBUFFER,null)}function je(C,E,Y){const ie=r.get(C);E!==void 0&&Ee(ie.__webglFramebuffer,C,C.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),Y!==void 0&&Ve(C)}function tt(C){const E=C.texture,Y=r.get(C),ie=r.get(E);C.addEventListener("dispose",B);const Ce=C.textures,Ae=C.isWebGLCubeRenderTarget===!0,Ge=Ce.length>1;if(Ge||(ie.__webglTexture===void 0&&(ie.__webglTexture=o.createTexture()),ie.__version=E.version,f.memory.textures++),Ae){Y.__webglFramebuffer=[];for(let De=0;De<6;De++)if(E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer[De]=[];for(let Fe=0;Fe<E.mipmaps.length;Fe++)Y.__webglFramebuffer[De][Fe]=o.createFramebuffer()}else Y.__webglFramebuffer[De]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer=[];for(let De=0;De<E.mipmaps.length;De++)Y.__webglFramebuffer[De]=o.createFramebuffer()}else Y.__webglFramebuffer=o.createFramebuffer();if(Ge)for(let De=0,Fe=Ce.length;De<Fe;De++){const re=r.get(Ce[De]);re.__webglTexture===void 0&&(re.__webglTexture=o.createTexture(),f.memory.textures++)}if(C.samples>0&&$e(C)===!1){Y.__webglMultisampledFramebuffer=o.createFramebuffer(),Y.__webglColorRenderbuffer=[],n.bindFramebuffer(o.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let De=0;De<Ce.length;De++){const Fe=Ce[De];Y.__webglColorRenderbuffer[De]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,Y.__webglColorRenderbuffer[De]);const re=c.convert(Fe.format,Fe.colorSpace),ae=c.convert(Fe.type),F=U(Fe.internalFormat,re,ae,Fe.colorSpace,C.isXRRenderTarget===!0),W=ft(C);o.renderbufferStorageMultisample(o.RENDERBUFFER,W,F,C.width,C.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+De,o.RENDERBUFFER,Y.__webglColorRenderbuffer[De])}o.bindRenderbuffer(o.RENDERBUFFER,null),C.depthBuffer&&(Y.__webglDepthRenderbuffer=o.createRenderbuffer(),Le(Y.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Ae){n.bindTexture(o.TEXTURE_CUBE_MAP,ie.__webglTexture),O(o.TEXTURE_CUBE_MAP,E);for(let De=0;De<6;De++)if(E.mipmaps&&E.mipmaps.length>0)for(let Fe=0;Fe<E.mipmaps.length;Fe++)Ee(Y.__webglFramebuffer[De][Fe],C,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+De,Fe);else Ee(Y.__webglFramebuffer[De],C,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+De,0);_(E)&&v(o.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ge){for(let De=0,Fe=Ce.length;De<Fe;De++){const re=Ce[De],ae=r.get(re);n.bindTexture(o.TEXTURE_2D,ae.__webglTexture),O(o.TEXTURE_2D,re),Ee(Y.__webglFramebuffer,C,re,o.COLOR_ATTACHMENT0+De,o.TEXTURE_2D,0),_(re)&&v(o.TEXTURE_2D)}n.unbindTexture()}else{let De=o.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(De=C.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(De,ie.__webglTexture),O(De,E),E.mipmaps&&E.mipmaps.length>0)for(let Fe=0;Fe<E.mipmaps.length;Fe++)Ee(Y.__webglFramebuffer[Fe],C,E,o.COLOR_ATTACHMENT0,De,Fe);else Ee(Y.__webglFramebuffer,C,E,o.COLOR_ATTACHMENT0,De,0);_(E)&&v(De),n.unbindTexture()}C.depthBuffer&&Ve(C)}function _t(C){const E=C.textures;for(let Y=0,ie=E.length;Y<ie;Y++){const Ce=E[Y];if(_(Ce)){const Ae=C.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,Ge=r.get(Ce).__webglTexture;n.bindTexture(Ae,Ge),v(Ae),n.unbindTexture()}}}const z=[],xt=[];function ut(C){if(C.samples>0){if($e(C)===!1){const E=C.textures,Y=C.width,ie=C.height;let Ce=o.COLOR_BUFFER_BIT;const Ae=C.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ge=r.get(C),De=E.length>1;if(De)for(let Fe=0;Fe<E.length;Fe++)n.bindFramebuffer(o.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Fe,o.RENDERBUFFER,null),n.bindFramebuffer(o.FRAMEBUFFER,Ge.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Fe,o.TEXTURE_2D,null,0);n.bindFramebuffer(o.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let Fe=0;Fe<E.length;Fe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Ce|=o.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Ce|=o.STENCIL_BUFFER_BIT)),De){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ge.__webglColorRenderbuffer[Fe]);const re=r.get(E[Fe]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,re,0)}o.blitFramebuffer(0,0,Y,ie,0,0,Y,ie,Ce,o.NEAREST),h===!0&&(z.length=0,xt.length=0,z.push(o.COLOR_ATTACHMENT0+Fe),C.depthBuffer&&C.resolveDepthBuffer===!1&&(z.push(Ae),xt.push(Ae),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,xt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,z))}if(n.bindFramebuffer(o.READ_FRAMEBUFFER,null),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),De)for(let Fe=0;Fe<E.length;Fe++){n.bindFramebuffer(o.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Fe,o.RENDERBUFFER,Ge.__webglColorRenderbuffer[Fe]);const re=r.get(E[Fe]).__webglTexture;n.bindFramebuffer(o.FRAMEBUFFER,Ge.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Fe,o.TEXTURE_2D,re,0)}n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&h){const E=C.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function ft(C){return Math.min(a.maxSamples,C.samples)}function $e(C){const E=r.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ee(C){const E=f.render.frame;g.get(C)!==E&&(g.set(C,E),C.update())}function ye(C,E){const Y=C.colorSpace,ie=C.format,Ce=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||Y!==wr&&Y!==yr&&(Pt.getTransfer(Y)===zt?(ie!==di||Ce!==Vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),E}function se(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(m.width=C.naturalWidth||C.width,m.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(m.width=C.displayWidth,m.height=C.displayHeight):(m.width=C.width,m.height=C.height),m}this.allocateTextureUnit=Se,this.resetTextureUnits=G,this.setTexture2D=Re,this.setTexture2DArray=be,this.setTexture3D=xe,this.setTextureCube=Me,this.rebindTextures=je,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=$e}function GE(o,e){function n(r,a=yr){let c;const f=Pt.getTransfer(a);if(r===Vi)return o.UNSIGNED_BYTE;if(r===Fd)return o.UNSIGNED_SHORT_4_4_4_4;if(r===kd)return o.UNSIGNED_SHORT_5_5_5_1;if(r===Wm)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===Vm)return o.BYTE;if(r===Gm)return o.SHORT;if(r===Xs)return o.UNSIGNED_SHORT;if(r===Od)return o.INT;if(r===Zr)return o.UNSIGNED_INT;if(r===ki)return o.FLOAT;if(r===Ys)return o.HALF_FLOAT;if(r===Xm)return o.ALPHA;if(r===jm)return o.RGB;if(r===di)return o.RGBA;if(r===Ym)return o.LUMINANCE;if(r===qm)return o.LUMINANCE_ALPHA;if(r===$o)return o.DEPTH_COMPONENT;if(r===es)return o.DEPTH_STENCIL;if(r===$m)return o.RED;if(r===zd)return o.RED_INTEGER;if(r===Km)return o.RG;if(r===Bd)return o.RG_INTEGER;if(r===Hd)return o.RGBA_INTEGER;if(r===Al||r===Rl||r===bl||r===Cl)if(f===zt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Al)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Rl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===bl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Cl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Al)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Rl)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===bl)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Cl)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===sd||r===ad||r===ld||r===cd)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===sd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ad)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ld)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===cd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ud||r===dd||r===fd)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===ud||r===dd)return f===zt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===fd)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===hd||r===pd||r===md||r===gd||r===vd||r===_d||r===xd||r===yd||r===Sd||r===Md||r===Ed||r===wd||r===Td||r===Ad)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===hd)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===pd)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===md)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===gd)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===vd)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===_d)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===xd)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===yd)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Sd)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Md)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ed)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===wd)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Td)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ad)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Pl||r===Rd||r===bd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Pl)return f===zt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Rd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===bd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Zm||r===Cd||r===Pd||r===Ld)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Pl)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Cd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Pd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ld)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Jo?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:n}}class WE extends Gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class jo extends Wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const XE={type:"move"};class Zu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new le,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new le),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new le,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new le),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,c=null,f=null;const d=this._targetRay,h=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){f=!0;for(const T of e.hand.values()){const _=n.getJointPose(T,r),v=this._getHandJoint(m,T);_!==null&&(v.matrix.fromArray(_.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=_.radius),v.visible=_!==null}const g=m.joints["index-finger-tip"],S=m.joints["thumb-tip"],y=g.position.distanceTo(S.position),M=.02,A=.005;m.inputState.pinching&&y>M+A?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&y<=M-A&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(h.matrix.fromArray(c.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,c.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(c.linearVelocity)):h.hasLinearVelocity=!1,c.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(c.angularVelocity)):h.hasAngularVelocity=!1));d!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&c!==null&&(a=c),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(XE)))}return d!==null&&(d.visible=a!==null),h!==null&&(h.visible=c!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new jo;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const jE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,YE=`
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

}`;class qE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new An,c=e.properties.get(a);c.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Er({vertexShader:jE,fragmentShader:YE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ei(new Ks(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $E extends eo{constructor(e,n){super();const r=this;let a=null,c=1,f=null,d="local-floor",h=1,m=null,g=null,S=null,y=null,M=null,A=null;const T=new qE,_=n.getContextAttributes();let v=null,U=null;const P=[],D=[],ne=new dt;let B=null;const k=new Gn;k.layers.enable(1),k.viewport=new ln;const Q=new Gn;Q.layers.enable(2),Q.viewport=new ln;const L=[k,Q],R=new WE;R.layers.enable(1),R.layers.enable(2);let G=null,Se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let Ee=P[J];return Ee===void 0&&(Ee=new Zu,P[J]=Ee),Ee.getTargetRaySpace()},this.getControllerGrip=function(J){let Ee=P[J];return Ee===void 0&&(Ee=new Zu,P[J]=Ee),Ee.getGripSpace()},this.getHand=function(J){let Ee=P[J];return Ee===void 0&&(Ee=new Zu,P[J]=Ee),Ee.getHandSpace()};function ce(J){const Ee=D.indexOf(J.inputSource);if(Ee===-1)return;const Le=P[Ee];Le!==void 0&&(Le.update(J.inputSource,J.frame,m||f),Le.dispatchEvent({type:J.type,data:J.inputSource}))}function Re(){a.removeEventListener("select",ce),a.removeEventListener("selectstart",ce),a.removeEventListener("selectend",ce),a.removeEventListener("squeeze",ce),a.removeEventListener("squeezestart",ce),a.removeEventListener("squeezeend",ce),a.removeEventListener("end",Re),a.removeEventListener("inputsourceschange",be);for(let J=0;J<P.length;J++){const Ee=D[J];Ee!==null&&(D[J]=null,P[J].disconnect(Ee))}G=null,Se=null,T.reset(),e.setRenderTarget(v),M=null,y=null,S=null,a=null,U=null,ke.stop(),r.isPresenting=!1,e.setPixelRatio(B),e.setSize(ne.width,ne.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){c=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){d=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(J){m=J},this.getBaseLayer=function(){return y!==null?y:M},this.getBinding=function(){return S},this.getFrame=function(){return A},this.getSession=function(){return a},this.setSession=async function(J){if(a=J,a!==null){if(v=e.getRenderTarget(),a.addEventListener("select",ce),a.addEventListener("selectstart",ce),a.addEventListener("selectend",ce),a.addEventListener("squeeze",ce),a.addEventListener("squeezestart",ce),a.addEventListener("squeezeend",ce),a.addEventListener("end",Re),a.addEventListener("inputsourceschange",be),_.xrCompatible!==!0&&await n.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(ne),a.renderState.layers===void 0){const Ee={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(a,n,Ee),a.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),U=new Qr(M.framebufferWidth,M.framebufferHeight,{format:di,type:Vi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let Ee=null,Le=null,Ue=null;_.depth&&(Ue=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Ee=_.stencil?es:$o,Le=_.stencil?Jo:Zr);const Ve={colorFormat:n.RGBA8,depthFormat:Ue,scaleFactor:c};S=new XRWebGLBinding(a,n),y=S.createProjectionLayer(Ve),a.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),U=new Qr(y.textureWidth,y.textureHeight,{format:di,type:Vi,depthTexture:new dg(y.textureWidth,y.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(h),m=null,f=await a.requestReferenceSpace(d),ke.setContext(a),ke.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function be(J){for(let Ee=0;Ee<J.removed.length;Ee++){const Le=J.removed[Ee],Ue=D.indexOf(Le);Ue>=0&&(D[Ue]=null,P[Ue].disconnect(Le))}for(let Ee=0;Ee<J.added.length;Ee++){const Le=J.added[Ee];let Ue=D.indexOf(Le);if(Ue===-1){for(let je=0;je<P.length;je++)if(je>=D.length){D.push(Le),Ue=je;break}else if(D[je]===null){D[je]=Le,Ue=je;break}if(Ue===-1)break}const Ve=P[Ue];Ve&&Ve.connect(Le)}}const xe=new le,Me=new le;function I(J,Ee,Le){xe.setFromMatrixPosition(Ee.matrixWorld),Me.setFromMatrixPosition(Le.matrixWorld);const Ue=xe.distanceTo(Me),Ve=Ee.projectionMatrix.elements,je=Le.projectionMatrix.elements,tt=Ve[14]/(Ve[10]-1),_t=Ve[14]/(Ve[10]+1),z=(Ve[9]+1)/Ve[5],xt=(Ve[9]-1)/Ve[5],ut=(Ve[8]-1)/Ve[0],ft=(je[8]+1)/je[0],$e=tt*ut,ee=tt*ft,ye=Ue/(-ut+ft),se=ye*-ut;Ee.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(se),J.translateZ(ye),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert();const C=tt+ye,E=_t+ye,Y=$e-se,ie=ee+(Ue-se),Ce=z*_t/E*C,Ae=xt*_t/E*C;J.projectionMatrix.makePerspective(Y,ie,Ce,Ae,C,E),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}function Te(J,Ee){Ee===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(Ee.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(a===null)return;T.texture!==null&&(J.near=T.depthNear,J.far=T.depthFar),R.near=Q.near=k.near=J.near,R.far=Q.far=k.far=J.far,(G!==R.near||Se!==R.far)&&(a.updateRenderState({depthNear:R.near,depthFar:R.far}),G=R.near,Se=R.far,k.near=G,k.far=Se,Q.near=G,Q.far=Se,k.updateProjectionMatrix(),Q.updateProjectionMatrix(),J.updateProjectionMatrix());const Ee=J.parent,Le=R.cameras;Te(R,Ee);for(let Ue=0;Ue<Le.length;Ue++)Te(Le[Ue],Ee);Le.length===2?I(R,k,Q):R.projectionMatrix.copy(k.projectionMatrix),ge(J,R,Ee)};function ge(J,Ee,Le){Le===null?J.matrix.copy(Ee.matrixWorld):(J.matrix.copy(Le.matrixWorld),J.matrix.invert(),J.matrix.multiply(Ee.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(Ee.projectionMatrix),J.projectionMatrixInverse.copy(Ee.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=js*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(y===null&&M===null))return h},this.setFoveation=function(J){h=J,y!==null&&(y.fixedFoveation=J),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=J)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(R)};let O=null;function pe(J,Ee){if(g=Ee.getViewerPose(m||f),A=Ee,g!==null){const Le=g.views;M!==null&&(e.setRenderTargetFramebuffer(U,M.framebuffer),e.setRenderTarget(U));let Ue=!1;Le.length!==R.cameras.length&&(R.cameras.length=0,Ue=!0);for(let je=0;je<Le.length;je++){const tt=Le[je];let _t=null;if(M!==null)_t=M.getViewport(tt);else{const xt=S.getViewSubImage(y,tt);_t=xt.viewport,je===0&&(e.setRenderTargetTextures(U,xt.colorTexture,y.ignoreDepthValues?void 0:xt.depthStencilTexture),e.setRenderTarget(U))}let z=L[je];z===void 0&&(z=new Gn,z.layers.enable(je),z.viewport=new ln,L[je]=z),z.matrix.fromArray(tt.transform.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale),z.projectionMatrix.fromArray(tt.projectionMatrix),z.projectionMatrixInverse.copy(z.projectionMatrix).invert(),z.viewport.set(_t.x,_t.y,_t.width,_t.height),je===0&&(R.matrix.copy(z.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Ue===!0&&R.cameras.push(z)}const Ve=a.enabledFeatures;if(Ve&&Ve.includes("depth-sensing")){const je=S.getDepthInformation(Le[0]);je&&je.isValid&&je.texture&&T.init(e,je,a.renderState)}}for(let Le=0;Le<P.length;Le++){const Ue=D[Le],Ve=P[Le];Ue!==null&&Ve!==void 0&&Ve.update(Ue,Ee,m||f)}O&&O(J,Ee),Ee.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Ee}),A=null}const ke=new ug;ke.setAnimationLoop(pe),this.setAnimationLoop=function(J){O=J},this.dispose=function(){}}}const Xr=new dn,KE=new Kt;function ZE(o,e){function n(_,v){_.matrixAutoUpdate===!0&&_.updateMatrix(),v.value.copy(_.matrix)}function r(_,v){v.color.getRGB(_.fogColor.value,sg(o)),v.isFog?(_.fogNear.value=v.near,_.fogFar.value=v.far):v.isFogExp2&&(_.fogDensity.value=v.density)}function a(_,v,U,P,D){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(_,v):v.isMeshToonMaterial?(c(_,v),S(_,v)):v.isMeshPhongMaterial?(c(_,v),g(_,v)):v.isMeshStandardMaterial?(c(_,v),y(_,v),v.isMeshPhysicalMaterial&&M(_,v,D)):v.isMeshMatcapMaterial?(c(_,v),A(_,v)):v.isMeshDepthMaterial?c(_,v):v.isMeshDistanceMaterial?(c(_,v),T(_,v)):v.isMeshNormalMaterial?c(_,v):v.isLineBasicMaterial?(f(_,v),v.isLineDashedMaterial&&d(_,v)):v.isPointsMaterial?h(_,v,U,P):v.isSpriteMaterial?m(_,v):v.isShadowMaterial?(_.color.value.copy(v.color),_.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(_,v){_.opacity.value=v.opacity,v.color&&_.diffuse.value.copy(v.color),v.emissive&&_.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(_.map.value=v.map,n(v.map,_.mapTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,n(v.alphaMap,_.alphaMapTransform)),v.bumpMap&&(_.bumpMap.value=v.bumpMap,n(v.bumpMap,_.bumpMapTransform),_.bumpScale.value=v.bumpScale,v.side===Tn&&(_.bumpScale.value*=-1)),v.normalMap&&(_.normalMap.value=v.normalMap,n(v.normalMap,_.normalMapTransform),_.normalScale.value.copy(v.normalScale),v.side===Tn&&_.normalScale.value.negate()),v.displacementMap&&(_.displacementMap.value=v.displacementMap,n(v.displacementMap,_.displacementMapTransform),_.displacementScale.value=v.displacementScale,_.displacementBias.value=v.displacementBias),v.emissiveMap&&(_.emissiveMap.value=v.emissiveMap,n(v.emissiveMap,_.emissiveMapTransform)),v.specularMap&&(_.specularMap.value=v.specularMap,n(v.specularMap,_.specularMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest);const U=e.get(v),P=U.envMap,D=U.envMapRotation;P&&(_.envMap.value=P,Xr.copy(D),Xr.x*=-1,Xr.y*=-1,Xr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Xr.y*=-1,Xr.z*=-1),_.envMapRotation.value.setFromMatrix4(KE.makeRotationFromEuler(Xr)),_.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=v.reflectivity,_.ior.value=v.ior,_.refractionRatio.value=v.refractionRatio),v.lightMap&&(_.lightMap.value=v.lightMap,_.lightMapIntensity.value=v.lightMapIntensity,n(v.lightMap,_.lightMapTransform)),v.aoMap&&(_.aoMap.value=v.aoMap,_.aoMapIntensity.value=v.aoMapIntensity,n(v.aoMap,_.aoMapTransform))}function f(_,v){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,v.map&&(_.map.value=v.map,n(v.map,_.mapTransform))}function d(_,v){_.dashSize.value=v.dashSize,_.totalSize.value=v.dashSize+v.gapSize,_.scale.value=v.scale}function h(_,v,U,P){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,_.size.value=v.size*U,_.scale.value=P*.5,v.map&&(_.map.value=v.map,n(v.map,_.uvTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,n(v.alphaMap,_.alphaMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest)}function m(_,v){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,_.rotation.value=v.rotation,v.map&&(_.map.value=v.map,n(v.map,_.mapTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,n(v.alphaMap,_.alphaMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest)}function g(_,v){_.specular.value.copy(v.specular),_.shininess.value=Math.max(v.shininess,1e-4)}function S(_,v){v.gradientMap&&(_.gradientMap.value=v.gradientMap)}function y(_,v){_.metalness.value=v.metalness,v.metalnessMap&&(_.metalnessMap.value=v.metalnessMap,n(v.metalnessMap,_.metalnessMapTransform)),_.roughness.value=v.roughness,v.roughnessMap&&(_.roughnessMap.value=v.roughnessMap,n(v.roughnessMap,_.roughnessMapTransform)),v.envMap&&(_.envMapIntensity.value=v.envMapIntensity)}function M(_,v,U){_.ior.value=v.ior,v.sheen>0&&(_.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),_.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(_.sheenColorMap.value=v.sheenColorMap,n(v.sheenColorMap,_.sheenColorMapTransform)),v.sheenRoughnessMap&&(_.sheenRoughnessMap.value=v.sheenRoughnessMap,n(v.sheenRoughnessMap,_.sheenRoughnessMapTransform))),v.clearcoat>0&&(_.clearcoat.value=v.clearcoat,_.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(_.clearcoatMap.value=v.clearcoatMap,n(v.clearcoatMap,_.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,n(v.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(_.clearcoatNormalMap.value=v.clearcoatNormalMap,n(v.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Tn&&_.clearcoatNormalScale.value.negate())),v.dispersion>0&&(_.dispersion.value=v.dispersion),v.iridescence>0&&(_.iridescence.value=v.iridescence,_.iridescenceIOR.value=v.iridescenceIOR,_.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(_.iridescenceMap.value=v.iridescenceMap,n(v.iridescenceMap,_.iridescenceMapTransform)),v.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=v.iridescenceThicknessMap,n(v.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),v.transmission>0&&(_.transmission.value=v.transmission,_.transmissionSamplerMap.value=U.texture,_.transmissionSamplerSize.value.set(U.width,U.height),v.transmissionMap&&(_.transmissionMap.value=v.transmissionMap,n(v.transmissionMap,_.transmissionMapTransform)),_.thickness.value=v.thickness,v.thicknessMap&&(_.thicknessMap.value=v.thicknessMap,n(v.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=v.attenuationDistance,_.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(_.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(_.anisotropyMap.value=v.anisotropyMap,n(v.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=v.specularIntensity,_.specularColor.value.copy(v.specularColor),v.specularColorMap&&(_.specularColorMap.value=v.specularColorMap,n(v.specularColorMap,_.specularColorMapTransform)),v.specularIntensityMap&&(_.specularIntensityMap.value=v.specularIntensityMap,n(v.specularIntensityMap,_.specularIntensityMapTransform))}function A(_,v){v.matcap&&(_.matcap.value=v.matcap)}function T(_,v){const U=e.get(v).light;_.referencePosition.value.setFromMatrixPosition(U.matrixWorld),_.nearDistance.value=U.shadow.camera.near,_.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function QE(o,e,n,r){let a={},c={},f=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function h(U,P){const D=P.program;r.uniformBlockBinding(U,D)}function m(U,P){let D=a[U.id];D===void 0&&(A(U),D=g(U),a[U.id]=D,U.addEventListener("dispose",_));const ne=P.program;r.updateUBOMapping(U,ne);const B=e.render.frame;c[U.id]!==B&&(y(U),c[U.id]=B)}function g(U){const P=S();U.__bindingPointIndex=P;const D=o.createBuffer(),ne=U.__size,B=U.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,ne,B),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,P,D),D}function S(){for(let U=0;U<d;U++)if(f.indexOf(U)===-1)return f.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(U){const P=a[U.id],D=U.uniforms,ne=U.__cache;o.bindBuffer(o.UNIFORM_BUFFER,P);for(let B=0,k=D.length;B<k;B++){const Q=Array.isArray(D[B])?D[B]:[D[B]];for(let L=0,R=Q.length;L<R;L++){const G=Q[L];if(M(G,B,L,ne)===!0){const Se=G.__offset,ce=Array.isArray(G.value)?G.value:[G.value];let Re=0;for(let be=0;be<ce.length;be++){const xe=ce[be],Me=T(xe);typeof xe=="number"||typeof xe=="boolean"?(G.__data[0]=xe,o.bufferSubData(o.UNIFORM_BUFFER,Se+Re,G.__data)):xe.isMatrix3?(G.__data[0]=xe.elements[0],G.__data[1]=xe.elements[1],G.__data[2]=xe.elements[2],G.__data[3]=0,G.__data[4]=xe.elements[3],G.__data[5]=xe.elements[4],G.__data[6]=xe.elements[5],G.__data[7]=0,G.__data[8]=xe.elements[6],G.__data[9]=xe.elements[7],G.__data[10]=xe.elements[8],G.__data[11]=0):(xe.toArray(G.__data,Re),Re+=Me.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,Se,G.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(U,P,D,ne){const B=U.value,k=P+"_"+D;if(ne[k]===void 0)return typeof B=="number"||typeof B=="boolean"?ne[k]=B:ne[k]=B.clone(),!0;{const Q=ne[k];if(typeof B=="number"||typeof B=="boolean"){if(Q!==B)return ne[k]=B,!0}else if(Q.equals(B)===!1)return Q.copy(B),!0}return!1}function A(U){const P=U.uniforms;let D=0;const ne=16;for(let k=0,Q=P.length;k<Q;k++){const L=Array.isArray(P[k])?P[k]:[P[k]];for(let R=0,G=L.length;R<G;R++){const Se=L[R],ce=Array.isArray(Se.value)?Se.value:[Se.value];for(let Re=0,be=ce.length;Re<be;Re++){const xe=ce[Re],Me=T(xe),I=D%ne;I!==0&&ne-I<Me.boundary&&(D+=ne-I),Se.__data=new Float32Array(Me.storage/Float32Array.BYTES_PER_ELEMENT),Se.__offset=D,D+=Me.storage}}}const B=D%ne;return B>0&&(D+=ne-B),U.__size=D,U.__cache={},this}function T(U){const P={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(P.boundary=4,P.storage=4):U.isVector2?(P.boundary=8,P.storage=8):U.isVector3||U.isColor?(P.boundary=16,P.storage=12):U.isVector4?(P.boundary=16,P.storage=16):U.isMatrix3?(P.boundary=48,P.storage=48):U.isMatrix4?(P.boundary=64,P.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),P}function _(U){const P=U.target;P.removeEventListener("dispose",_);const D=f.indexOf(P.__bindingPointIndex);f.splice(D,1),o.deleteBuffer(a[P.id]),delete a[P.id],delete c[P.id]}function v(){for(const U in a)o.deleteBuffer(a[U]);f=[],a={},c={}}return{bind:h,update:m,dispose:v}}class gg{constructor(e={}){const{canvas:n=G_(),context:r=null,depth:a=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:S=!1}=e;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=f;const M=new Uint32Array(4),A=new Int32Array(4);let T=null,_=null;const v=[],U=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qn,this.toneMapping=Mr,this.toneMappingExposure=1;const P=this;let D=!1,ne=0,B=0,k=null,Q=-1,L=null;const R=new ln,G=new ln;let Se=null;const ce=new It(0);let Re=0,be=n.width,xe=n.height,Me=1,I=null,Te=null;const ge=new ln(0,0,be,xe),O=new ln(0,0,be,xe);let pe=!1;const ke=new cg;let J=!1,Ee=!1;const Le=new Kt,Ue=new le,Ve=new ln,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tt=!1;function _t(){return k===null?Me:1}let z=r;function xt(b,Z){return n.getContext(b,Z)}try{const b={alpha:!0,depth:a,stencil:c,antialias:d,premultipliedAlpha:h,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:S};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Ud}`),n.addEventListener("webglcontextlost",$,!1),n.addEventListener("webglcontextrestored",K,!1),n.addEventListener("webglcontextcreationerror",Pe,!1),z===null){const Z="webgl2";if(z=xt(Z,b),z===null)throw xt(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ut,ft,$e,ee,ye,se,C,E,Y,ie,Ce,Ae,Ge,De,Fe,re,ae,F,W,q,V,we,fe,ue;function x(){ut=new sM(z),ut.init(),we=new GE(z,ut),ft=new JS(z,ut,e,we),$e=new BE(z),ee=new cM(z),ye=new AE,se=new VE(z,ut,$e,ye,ft,we,ee),C=new tM(P),E=new oM(P),Y=new mx(z),fe=new ZS(z,Y),ie=new aM(z,Y,ee,fe),Ce=new dM(z,ie,Y,ee),W=new uM(z,ft,se),re=new eM(ye),Ae=new TE(P,C,E,ut,ft,fe,re),Ge=new ZE(P,ye),De=new bE,Fe=new NE(ut),F=new KS(P,C,E,$e,Ce,y,h),ae=new zE(P,Ce,ft),ue=new QE(z,ee,ft,$e),q=new QS(z,ut,ee),V=new lM(z,ut,ee),ee.programs=Ae.programs,P.capabilities=ft,P.extensions=ut,P.properties=ye,P.renderLists=De,P.shadowMap=ae,P.state=$e,P.info=ee}x();const X=new $E(P,z);this.xr=X,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const b=ut.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ut.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Me},this.setPixelRatio=function(b){b!==void 0&&(Me=b,this.setSize(be,xe,!1))},this.getSize=function(b){return b.set(be,xe)},this.setSize=function(b,Z,he=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}be=b,xe=Z,n.width=Math.floor(b*Me),n.height=Math.floor(Z*Me),he===!0&&(n.style.width=b+"px",n.style.height=Z+"px"),this.setViewport(0,0,b,Z)},this.getDrawingBufferSize=function(b){return b.set(be*Me,xe*Me).floor()},this.setDrawingBufferSize=function(b,Z,he){be=b,xe=Z,Me=he,n.width=Math.floor(b*he),n.height=Math.floor(Z*he),this.setViewport(0,0,b,Z)},this.getCurrentViewport=function(b){return b.copy(R)},this.getViewport=function(b){return b.copy(ge)},this.setViewport=function(b,Z,he,ve){b.isVector4?ge.set(b.x,b.y,b.z,b.w):ge.set(b,Z,he,ve),$e.viewport(R.copy(ge).multiplyScalar(Me).round())},this.getScissor=function(b){return b.copy(O)},this.setScissor=function(b,Z,he,ve){b.isVector4?O.set(b.x,b.y,b.z,b.w):O.set(b,Z,he,ve),$e.scissor(G.copy(O).multiplyScalar(Me).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(b){$e.setScissorTest(pe=b)},this.setOpaqueSort=function(b){I=b},this.setTransparentSort=function(b){Te=b},this.getClearColor=function(b){return b.copy(F.getClearColor())},this.setClearColor=function(){F.setClearColor.apply(F,arguments)},this.getClearAlpha=function(){return F.getClearAlpha()},this.setClearAlpha=function(){F.setClearAlpha.apply(F,arguments)},this.clear=function(b=!0,Z=!0,he=!0){let ve=0;if(b){let te=!1;if(k!==null){const Be=k.texture.format;te=Be===Hd||Be===Bd||Be===zd}if(te){const Be=k.texture.type,Ye=Be===Vi||Be===Zr||Be===Xs||Be===Jo||Be===Fd||Be===kd,Je=F.getClearColor(),He=F.getClearAlpha(),lt=Je.r,at=Je.g,rt=Je.b;Ye?(M[0]=lt,M[1]=at,M[2]=rt,M[3]=He,z.clearBufferuiv(z.COLOR,0,M)):(A[0]=lt,A[1]=at,A[2]=rt,A[3]=He,z.clearBufferiv(z.COLOR,0,A))}else ve|=z.COLOR_BUFFER_BIT}Z&&(ve|=z.DEPTH_BUFFER_BIT),he&&(ve|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(ve)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",$,!1),n.removeEventListener("webglcontextrestored",K,!1),n.removeEventListener("webglcontextcreationerror",Pe,!1),De.dispose(),Fe.dispose(),ye.dispose(),C.dispose(),E.dispose(),Ce.dispose(),fe.dispose(),ue.dispose(),Ae.dispose(),X.dispose(),X.removeEventListener("sessionstart",Et),X.removeEventListener("sessionend",Rt),Vt.stop()};function $(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function K(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const b=ee.autoReset,Z=ae.enabled,he=ae.autoUpdate,ve=ae.needsUpdate,te=ae.type;x(),ee.autoReset=b,ae.enabled=Z,ae.autoUpdate=he,ae.needsUpdate=ve,ae.type=te}function Pe(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function We(b){const Z=b.target;Z.removeEventListener("dispose",We),Qe(Z)}function Qe(b){Mt(b),ye.remove(b)}function Mt(b){const Z=ye.get(b).programs;Z!==void 0&&(Z.forEach(function(he){Ae.releaseProgram(he)}),b.isShaderMaterial&&Ae.releaseShaderCache(b))}this.renderBufferDirect=function(b,Z,he,ve,te,Be){Z===null&&(Z=je);const Ye=te.isMesh&&te.matrixWorld.determinant()<0,Je=Gl(b,Z,he,ve,te);$e.setMaterial(ve,Ye);let He=he.index,lt=1;if(ve.wireframe===!0){if(He=ie.getWireframeAttribute(he),He===void 0)return;lt=2}const at=he.drawRange,rt=he.attributes.position;let yt=at.start*lt,Bt=(at.start+at.count)*lt;Be!==null&&(yt=Math.max(yt,Be.start*lt),Bt=Math.min(Bt,(Be.start+Be.count)*lt)),He!==null?(yt=Math.max(yt,0),Bt=Math.min(Bt,He.count)):rt!=null&&(yt=Math.max(yt,0),Bt=Math.min(Bt,rt.count));const Ot=Bt-yt;if(Ot<0||Ot===1/0)return;fe.setup(te,ve,Je,he,He);let tn,ht=q;if(He!==null&&(tn=Y.get(He),ht=V,ht.setIndex(tn)),te.isMesh)ve.wireframe===!0?($e.setLineWidth(ve.wireframeLinewidth*_t()),ht.setMode(z.LINES)):ht.setMode(z.TRIANGLES);else if(te.isLine){let it=ve.linewidth;it===void 0&&(it=1),$e.setLineWidth(it*_t()),te.isLineSegments?ht.setMode(z.LINES):te.isLineLoop?ht.setMode(z.LINE_LOOP):ht.setMode(z.LINE_STRIP)}else te.isPoints?ht.setMode(z.POINTS):te.isSprite&&ht.setMode(z.TRIANGLES);if(te.isBatchedMesh)if(te._multiDrawInstances!==null)ht.renderMultiDrawInstances(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount,te._multiDrawInstances);else if(ut.get("WEBGL_multi_draw"))ht.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const it=te._multiDrawStarts,bt=te._multiDrawCounts,wt=te._multiDrawCount,Un=He?Y.get(He).bytesPerElement:1,Wi=ye.get(ve).currentProgram.getUniforms();for(let nn=0;nn<wt;nn++)Wi.setValue(z,"_gl_DrawID",nn),ht.render(it[nn]/Un,bt[nn])}else if(te.isInstancedMesh)ht.renderInstances(yt,Ot,te.count);else if(he.isInstancedBufferGeometry){const it=he._maxInstanceCount!==void 0?he._maxInstanceCount:1/0,bt=Math.min(he.instanceCount,it);ht.renderInstances(yt,Ot,bt)}else ht.render(yt,Ot)};function Lt(b,Z,he){b.transparent===!0&&b.side===xi&&b.forceSinglePass===!1?(b.side=Tn,b.needsUpdate=!0,Gi(b,Z,he),b.side=Hi,b.needsUpdate=!0,Gi(b,Z,he),b.side=xi):Gi(b,Z,he)}this.compile=function(b,Z,he=null){he===null&&(he=b),_=Fe.get(he),_.init(Z),U.push(_),he.traverseVisible(function(te){te.isLight&&te.layers.test(Z.layers)&&(_.pushLight(te),te.castShadow&&_.pushShadow(te))}),b!==he&&b.traverseVisible(function(te){te.isLight&&te.layers.test(Z.layers)&&(_.pushLight(te),te.castShadow&&_.pushShadow(te))}),_.setupLights();const ve=new Set;return b.traverse(function(te){const Be=te.material;if(Be)if(Array.isArray(Be))for(let Ye=0;Ye<Be.length;Ye++){const Je=Be[Ye];Lt(Je,he,te),ve.add(Je)}else Lt(Be,he,te),ve.add(Be)}),U.pop(),_=null,ve},this.compileAsync=function(b,Z,he=null){const ve=this.compile(b,Z,he);return new Promise(te=>{function Be(){if(ve.forEach(function(Ye){ye.get(Ye).currentProgram.isReady()&&ve.delete(Ye)}),ve.size===0){te(b);return}setTimeout(Be,10)}ut.get("KHR_parallel_shader_compile")!==null?Be():setTimeout(Be,10)})};let gt=null;function Dt(b){gt&&gt(b)}function Et(){Vt.stop()}function Rt(){Vt.start()}const Vt=new ug;Vt.setAnimationLoop(Dt),typeof self<"u"&&Vt.setContext(self),this.setAnimationLoop=function(b){gt=b,X.setAnimationLoop(b),b===null?Vt.stop():Vt.start()},X.addEventListener("sessionstart",Et),X.addEventListener("sessionend",Rt),this.render=function(b,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(Z),Z=X.getCamera()),b.isScene===!0&&b.onBeforeRender(P,b,Z,k),_=Fe.get(b,U.length),_.init(Z),U.push(_),Le.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),ke.setFromProjectionMatrix(Le),Ee=this.localClippingEnabled,J=re.init(this.clippingPlanes,Ee),T=De.get(b,v.length),T.init(),v.push(T),X.enabled===!0&&X.isPresenting===!0){const Be=P.xr.getDepthSensingMesh();Be!==null&&Yt(Be,Z,-1/0,P.sortObjects)}Yt(b,Z,0,P.sortObjects),T.finish(),P.sortObjects===!0&&T.sort(I,Te),tt=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,tt&&F.addToRenderList(T,b),this.info.render.frame++,J===!0&&re.beginShadows();const he=_.state.shadowsArray;ae.render(he,b,Z),J===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const ve=T.opaque,te=T.transmissive;if(_.setupLights(),Z.isArrayCamera){const Be=Z.cameras;if(te.length>0)for(let Ye=0,Je=Be.length;Ye<Je;Ye++){const He=Be[Ye];ti(ve,te,b,He)}tt&&F.render(b);for(let Ye=0,Je=Be.length;Ye<Je;Ye++){const He=Be[Ye];fn(T,b,He,He.viewport)}}else te.length>0&&ti(ve,te,b,Z),tt&&F.render(b),fn(T,b,Z);k!==null&&(se.updateMultisampleRenderTarget(k),se.updateRenderTargetMipmap(k)),b.isScene===!0&&b.onAfterRender(P,b,Z),fe.resetDefaultState(),Q=-1,L=null,U.pop(),U.length>0?(_=U[U.length-1],J===!0&&re.setGlobalState(P.clippingPlanes,_.state.camera)):_=null,v.pop(),v.length>0?T=v[v.length-1]:T=null};function Yt(b,Z,he,ve){if(b.visible===!1)return;if(b.layers.test(Z.layers)){if(b.isGroup)he=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(Z);else if(b.isLight)_.pushLight(b),b.castShadow&&_.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||ke.intersectsSprite(b)){ve&&Ve.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Le);const Ye=Ce.update(b),Je=b.material;Je.visible&&T.push(b,Ye,Je,he,Ve.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||ke.intersectsObject(b))){const Ye=Ce.update(b),Je=b.material;if(ve&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ve.copy(b.boundingSphere.center)):(Ye.boundingSphere===null&&Ye.computeBoundingSphere(),Ve.copy(Ye.boundingSphere.center)),Ve.applyMatrix4(b.matrixWorld).applyMatrix4(Le)),Array.isArray(Je)){const He=Ye.groups;for(let lt=0,at=He.length;lt<at;lt++){const rt=He[lt],yt=Je[rt.materialIndex];yt&&yt.visible&&T.push(b,Ye,yt,he,Ve.z,rt)}}else Je.visible&&T.push(b,Ye,Je,he,Ve.z,null)}}const Be=b.children;for(let Ye=0,Je=Be.length;Ye<Je;Ye++)Yt(Be[Ye],Z,he,ve)}function fn(b,Z,he,ve){const te=b.opaque,Be=b.transmissive,Ye=b.transparent;_.setupLightsView(he),J===!0&&re.setGlobalState(P.clippingPlanes,he),ve&&$e.viewport(R.copy(ve)),te.length>0&&Mi(te,Z,he),Be.length>0&&Mi(Be,Z,he),Ye.length>0&&Mi(Ye,Z,he),$e.buffers.depth.setTest(!0),$e.buffers.depth.setMask(!0),$e.buffers.color.setMask(!0),$e.setPolygonOffset(!1)}function ti(b,Z,he,ve){if((he.isScene===!0?he.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[ve.id]===void 0&&(_.state.transmissionRenderTarget[ve.id]=new Qr(1,1,{generateMipmaps:!0,type:ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float")?Ys:Vi,minFilter:Kr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Pt.workingColorSpace}));const Be=_.state.transmissionRenderTarget[ve.id],Ye=ve.viewport||R;Be.setSize(Ye.z,Ye.w);const Je=P.getRenderTarget();P.setRenderTarget(Be),P.getClearColor(ce),Re=P.getClearAlpha(),Re<1&&P.setClearColor(16777215,.5),tt?F.render(he):P.clear();const He=P.toneMapping;P.toneMapping=Mr;const lt=ve.viewport;if(ve.viewport!==void 0&&(ve.viewport=void 0),_.setupLightsView(ve),J===!0&&re.setGlobalState(P.clippingPlanes,ve),Mi(b,he,ve),se.updateMultisampleRenderTarget(Be),se.updateRenderTargetMipmap(Be),ut.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let rt=0,yt=Z.length;rt<yt;rt++){const Bt=Z[rt],Ot=Bt.object,tn=Bt.geometry,ht=Bt.material,it=Bt.group;if(ht.side===xi&&Ot.layers.test(ve.layers)){const bt=ht.side;ht.side=Tn,ht.needsUpdate=!0,Ar(Ot,he,ve,tn,ht,it),ht.side=bt,ht.needsUpdate=!0,at=!0}}at===!0&&(se.updateMultisampleRenderTarget(Be),se.updateRenderTargetMipmap(Be))}P.setRenderTarget(Je),P.setClearColor(ce,Re),lt!==void 0&&(ve.viewport=lt),P.toneMapping=He}function Mi(b,Z,he){const ve=Z.isScene===!0?Z.overrideMaterial:null;for(let te=0,Be=b.length;te<Be;te++){const Ye=b[te],Je=Ye.object,He=Ye.geometry,lt=ve===null?Ye.material:ve,at=Ye.group;Je.layers.test(he.layers)&&Ar(Je,Z,he,He,lt,at)}}function Ar(b,Z,he,ve,te,Be){b.onBeforeRender(P,Z,he,ve,te,Be),b.modelViewMatrix.multiplyMatrices(he.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),te.transparent===!0&&te.side===xi&&te.forceSinglePass===!1?(te.side=Tn,te.needsUpdate=!0,P.renderBufferDirect(he,Z,ve,te,b,Be),te.side=Hi,te.needsUpdate=!0,P.renderBufferDirect(he,Z,ve,te,b,Be),te.side=xi):P.renderBufferDirect(he,Z,ve,te,b,Be),b.onAfterRender(P,Z,he,ve,te,Be)}function Gi(b,Z,he){Z.isScene!==!0&&(Z=je);const ve=ye.get(b),te=_.state.lights,Be=_.state.shadowsArray,Ye=te.state.version,Je=Ae.getParameters(b,te.state,Be,Z,he),He=Ae.getProgramCacheKey(Je);let lt=ve.programs;ve.environment=b.isMeshStandardMaterial?Z.environment:null,ve.fog=Z.fog,ve.envMap=(b.isMeshStandardMaterial?E:C).get(b.envMap||ve.environment),ve.envMapRotation=ve.environment!==null&&b.envMap===null?Z.environmentRotation:b.envMapRotation,lt===void 0&&(b.addEventListener("dispose",We),lt=new Map,ve.programs=lt);let at=lt.get(He);if(at!==void 0){if(ve.currentProgram===at&&ve.lightsStateVersion===Ye)return Qs(b,Je),at}else Je.uniforms=Ae.getUniforms(b),b.onBeforeCompile(Je,P),at=Ae.acquireProgram(Je,He),lt.set(He,at),ve.uniforms=Je.uniforms;const rt=ve.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(rt.clippingPlanes=re.uniform),Qs(b,Je),ve.needsLights=Js(b),ve.lightsStateVersion=Ye,ve.needsLights&&(rt.ambientLightColor.value=te.state.ambient,rt.lightProbe.value=te.state.probe,rt.directionalLights.value=te.state.directional,rt.directionalLightShadows.value=te.state.directionalShadow,rt.spotLights.value=te.state.spot,rt.spotLightShadows.value=te.state.spotShadow,rt.rectAreaLights.value=te.state.rectArea,rt.ltc_1.value=te.state.rectAreaLTC1,rt.ltc_2.value=te.state.rectAreaLTC2,rt.pointLights.value=te.state.point,rt.pointLightShadows.value=te.state.pointShadow,rt.hemisphereLights.value=te.state.hemi,rt.directionalShadowMap.value=te.state.directionalShadowMap,rt.directionalShadowMatrix.value=te.state.directionalShadowMatrix,rt.spotShadowMap.value=te.state.spotShadowMap,rt.spotLightMatrix.value=te.state.spotLightMatrix,rt.spotLightMap.value=te.state.spotLightMap,rt.pointShadowMap.value=te.state.pointShadowMap,rt.pointShadowMatrix.value=te.state.pointShadowMatrix),ve.currentProgram=at,ve.uniformsList=null,at}function Zs(b){if(b.uniformsList===null){const Z=b.currentProgram.getUniforms();b.uniformsList=Ll.seqWithValue(Z.seq,b.uniforms)}return b.uniformsList}function Qs(b,Z){const he=ye.get(b);he.outputColorSpace=Z.outputColorSpace,he.batching=Z.batching,he.batchingColor=Z.batchingColor,he.instancing=Z.instancing,he.instancingColor=Z.instancingColor,he.instancingMorph=Z.instancingMorph,he.skinning=Z.skinning,he.morphTargets=Z.morphTargets,he.morphNormals=Z.morphNormals,he.morphColors=Z.morphColors,he.morphTargetsCount=Z.morphTargetsCount,he.numClippingPlanes=Z.numClippingPlanes,he.numIntersection=Z.numClipIntersection,he.vertexAlphas=Z.vertexAlphas,he.vertexTangents=Z.vertexTangents,he.toneMapping=Z.toneMapping}function Gl(b,Z,he,ve,te){Z.isScene!==!0&&(Z=je),se.resetTextureUnits();const Be=Z.fog,Ye=ve.isMeshStandardMaterial?Z.environment:null,Je=k===null?P.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:wr,He=(ve.isMeshStandardMaterial?E:C).get(ve.envMap||Ye),lt=ve.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,at=!!he.attributes.tangent&&(!!ve.normalMap||ve.anisotropy>0),rt=!!he.morphAttributes.position,yt=!!he.morphAttributes.normal,Bt=!!he.morphAttributes.color;let Ot=Mr;ve.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Ot=P.toneMapping);const tn=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,ht=tn!==void 0?tn.length:0,it=ye.get(ve),bt=_.state.lights;if(J===!0&&(Ee===!0||b!==L)){const Rn=b===L&&ve.id===Q;re.setState(ve,b,Rn)}let wt=!1;ve.version===it.__version?(it.needsLights&&it.lightsStateVersion!==bt.state.version||it.outputColorSpace!==Je||te.isBatchedMesh&&it.batching===!1||!te.isBatchedMesh&&it.batching===!0||te.isBatchedMesh&&it.batchingColor===!0&&te.colorTexture===null||te.isBatchedMesh&&it.batchingColor===!1&&te.colorTexture!==null||te.isInstancedMesh&&it.instancing===!1||!te.isInstancedMesh&&it.instancing===!0||te.isSkinnedMesh&&it.skinning===!1||!te.isSkinnedMesh&&it.skinning===!0||te.isInstancedMesh&&it.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&it.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&it.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&it.instancingMorph===!1&&te.morphTexture!==null||it.envMap!==He||ve.fog===!0&&it.fog!==Be||it.numClippingPlanes!==void 0&&(it.numClippingPlanes!==re.numPlanes||it.numIntersection!==re.numIntersection)||it.vertexAlphas!==lt||it.vertexTangents!==at||it.morphTargets!==rt||it.morphNormals!==yt||it.morphColors!==Bt||it.toneMapping!==Ot||it.morphTargetsCount!==ht)&&(wt=!0):(wt=!0,it.__version=ve.version);let Un=it.currentProgram;wt===!0&&(Un=Gi(ve,Z,te));let Wi=!1,nn=!1,Xi=!1;const Nt=Un.getUniforms(),On=it.uniforms;if($e.useProgram(Un.program)&&(Wi=!0,nn=!0,Xi=!0),ve.id!==Q&&(Q=ve.id,nn=!0),Wi||L!==b){Nt.setValue(z,"projectionMatrix",b.projectionMatrix),Nt.setValue(z,"viewMatrix",b.matrixWorldInverse);const Rn=Nt.map.cameraPosition;Rn!==void 0&&Rn.setValue(z,Ue.setFromMatrixPosition(b.matrixWorld)),ft.logarithmicDepthBuffer&&Nt.setValue(z,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(ve.isMeshPhongMaterial||ve.isMeshToonMaterial||ve.isMeshLambertMaterial||ve.isMeshBasicMaterial||ve.isMeshStandardMaterial||ve.isShaderMaterial)&&Nt.setValue(z,"isOrthographic",b.isOrthographicCamera===!0),L!==b&&(L=b,nn=!0,Xi=!0)}if(te.isSkinnedMesh){Nt.setOptional(z,te,"bindMatrix"),Nt.setOptional(z,te,"bindMatrixInverse");const Rn=te.skeleton;Rn&&(Rn.boneTexture===null&&Rn.computeBoneTexture(),Nt.setValue(z,"boneTexture",Rn.boneTexture,se))}te.isBatchedMesh&&(Nt.setOptional(z,te,"batchingTexture"),Nt.setValue(z,"batchingTexture",te._matricesTexture,se),Nt.setOptional(z,te,"batchingIdTexture"),Nt.setValue(z,"batchingIdTexture",te._indirectTexture,se),Nt.setOptional(z,te,"batchingColorTexture"),te._colorsTexture!==null&&Nt.setValue(z,"batchingColorTexture",te._colorsTexture,se));const rs=he.morphAttributes;if((rs.position!==void 0||rs.normal!==void 0||rs.color!==void 0)&&W.update(te,he,Un),(nn||it.receiveShadow!==te.receiveShadow)&&(it.receiveShadow=te.receiveShadow,Nt.setValue(z,"receiveShadow",te.receiveShadow)),ve.isMeshGouraudMaterial&&ve.envMap!==null&&(On.envMap.value=He,On.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),ve.isMeshStandardMaterial&&ve.envMap===null&&Z.environment!==null&&(On.envMapIntensity.value=Z.environmentIntensity),nn&&(Nt.setValue(z,"toneMappingExposure",P.toneMappingExposure),it.needsLights&&Ei(On,Xi),Be&&ve.fog===!0&&Ge.refreshFogUniforms(On,Be),Ge.refreshMaterialUniforms(On,ve,Me,xe,_.state.transmissionRenderTarget[b.id]),Ll.upload(z,Zs(it),On,se)),ve.isShaderMaterial&&ve.uniformsNeedUpdate===!0&&(Ll.upload(z,Zs(it),On,se),ve.uniformsNeedUpdate=!1),ve.isSpriteMaterial&&Nt.setValue(z,"center",te.center),Nt.setValue(z,"modelViewMatrix",te.modelViewMatrix),Nt.setValue(z,"normalMatrix",te.normalMatrix),Nt.setValue(z,"modelMatrix",te.matrixWorld),ve.isShaderMaterial||ve.isRawShaderMaterial){const Rn=ve.uniformsGroups;for(let Rr=0,ea=Rn.length;Rr<ea;Rr++){const to=Rn[Rr];ue.update(to,Un),ue.bind(to,Un)}}return Un}function Ei(b,Z){b.ambientLightColor.needsUpdate=Z,b.lightProbe.needsUpdate=Z,b.directionalLights.needsUpdate=Z,b.directionalLightShadows.needsUpdate=Z,b.pointLights.needsUpdate=Z,b.pointLightShadows.needsUpdate=Z,b.spotLights.needsUpdate=Z,b.spotLightShadows.needsUpdate=Z,b.rectAreaLights.needsUpdate=Z,b.hemisphereLights.needsUpdate=Z}function Js(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return ne},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(b,Z,he){ye.get(b.texture).__webglTexture=Z,ye.get(b.depthTexture).__webglTexture=he;const ve=ye.get(b);ve.__hasExternalTextures=!0,ve.__autoAllocateDepthBuffer=he===void 0,ve.__autoAllocateDepthBuffer||ut.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ve.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,Z){const he=ye.get(b);he.__webglFramebuffer=Z,he.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(b,Z=0,he=0){k=b,ne=Z,B=he;let ve=!0,te=null,Be=!1,Ye=!1;if(b){const He=ye.get(b);He.__useDefaultFramebuffer!==void 0?($e.bindFramebuffer(z.FRAMEBUFFER,null),ve=!1):He.__webglFramebuffer===void 0?se.setupRenderTarget(b):He.__hasExternalTextures&&se.rebindTextures(b,ye.get(b.texture).__webglTexture,ye.get(b.depthTexture).__webglTexture);const lt=b.texture;(lt.isData3DTexture||lt.isDataArrayTexture||lt.isCompressedArrayTexture)&&(Ye=!0);const at=ye.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(at[Z])?te=at[Z][he]:te=at[Z],Be=!0):b.samples>0&&se.useMultisampledRTT(b)===!1?te=ye.get(b).__webglMultisampledFramebuffer:Array.isArray(at)?te=at[he]:te=at,R.copy(b.viewport),G.copy(b.scissor),Se=b.scissorTest}else R.copy(ge).multiplyScalar(Me).floor(),G.copy(O).multiplyScalar(Me).floor(),Se=pe;if($e.bindFramebuffer(z.FRAMEBUFFER,te)&&ve&&$e.drawBuffers(b,te),$e.viewport(R),$e.scissor(G),$e.setScissorTest(Se),Be){const He=ye.get(b.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+Z,He.__webglTexture,he)}else if(Ye){const He=ye.get(b.texture),lt=Z||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,He.__webglTexture,he||0,lt)}Q=-1},this.readRenderTargetPixels=function(b,Z,he,ve,te,Be,Ye){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Je=ye.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ye!==void 0&&(Je=Je[Ye]),Je){$e.bindFramebuffer(z.FRAMEBUFFER,Je);try{const He=b.texture,lt=He.format,at=He.type;if(!ft.textureFormatReadable(lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ft.textureTypeReadable(at)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=b.width-ve&&he>=0&&he<=b.height-te&&z.readPixels(Z,he,ve,te,we.convert(lt),we.convert(at),Be)}finally{const He=k!==null?ye.get(k).__webglFramebuffer:null;$e.bindFramebuffer(z.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(b,Z,he,ve,te,Be,Ye){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Je=ye.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ye!==void 0&&(Je=Je[Ye]),Je){$e.bindFramebuffer(z.FRAMEBUFFER,Je);try{const He=b.texture,lt=He.format,at=He.type;if(!ft.textureFormatReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ft.textureTypeReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Z>=0&&Z<=b.width-ve&&he>=0&&he<=b.height-te){const rt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,rt),z.bufferData(z.PIXEL_PACK_BUFFER,Be.byteLength,z.STREAM_READ),z.readPixels(Z,he,ve,te,we.convert(lt),we.convert(at),0),z.flush();const yt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);await W_(z,yt,4);try{z.bindBuffer(z.PIXEL_PACK_BUFFER,rt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Be)}finally{z.deleteBuffer(rt),z.deleteSync(yt)}return Be}}finally{const He=k!==null?ye.get(k).__webglFramebuffer:null;$e.bindFramebuffer(z.FRAMEBUFFER,He)}}},this.copyFramebufferToTexture=function(b,Z=null,he=0){b.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Z=arguments[0]||null,b=arguments[1]);const ve=Math.pow(2,-he),te=Math.floor(b.image.width*ve),Be=Math.floor(b.image.height*ve),Ye=Z!==null?Z.x:0,Je=Z!==null?Z.y:0;se.setTexture2D(b,0),z.copyTexSubImage2D(z.TEXTURE_2D,he,0,0,Ye,Je,te,Be),$e.unbindTexture()},this.copyTextureToTexture=function(b,Z,he=null,ve=null,te=0){b.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),ve=arguments[0]||null,b=arguments[1],Z=arguments[2],te=arguments[3]||0,he=null);let Be,Ye,Je,He,lt,at;he!==null?(Be=he.max.x-he.min.x,Ye=he.max.y-he.min.y,Je=he.min.x,He=he.min.y):(Be=b.image.width,Ye=b.image.height,Je=0,He=0),ve!==null?(lt=ve.x,at=ve.y):(lt=0,at=0);const rt=we.convert(Z.format),yt=we.convert(Z.type);se.setTexture2D(Z,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,Z.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,Z.unpackAlignment);const Bt=z.getParameter(z.UNPACK_ROW_LENGTH),Ot=z.getParameter(z.UNPACK_IMAGE_HEIGHT),tn=z.getParameter(z.UNPACK_SKIP_PIXELS),ht=z.getParameter(z.UNPACK_SKIP_ROWS),it=z.getParameter(z.UNPACK_SKIP_IMAGES),bt=b.isCompressedTexture?b.mipmaps[te]:b.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,bt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,bt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Je),z.pixelStorei(z.UNPACK_SKIP_ROWS,He),b.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,te,lt,at,Be,Ye,rt,yt,bt.data):b.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,te,lt,at,bt.width,bt.height,rt,bt.data):z.texSubImage2D(z.TEXTURE_2D,te,lt,at,Be,Ye,rt,yt,bt),z.pixelStorei(z.UNPACK_ROW_LENGTH,Bt),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ot),z.pixelStorei(z.UNPACK_SKIP_PIXELS,tn),z.pixelStorei(z.UNPACK_SKIP_ROWS,ht),z.pixelStorei(z.UNPACK_SKIP_IMAGES,it),te===0&&Z.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),$e.unbindTexture()},this.copyTextureToTexture3D=function(b,Z,he=null,ve=null,te=0){b.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),he=arguments[0]||null,ve=arguments[1]||null,b=arguments[2],Z=arguments[3],te=arguments[4]||0);let Be,Ye,Je,He,lt,at,rt,yt,Bt;const Ot=b.isCompressedTexture?b.mipmaps[te]:b.image;he!==null?(Be=he.max.x-he.min.x,Ye=he.max.y-he.min.y,Je=he.max.z-he.min.z,He=he.min.x,lt=he.min.y,at=he.min.z):(Be=Ot.width,Ye=Ot.height,Je=Ot.depth,He=0,lt=0,at=0),ve!==null?(rt=ve.x,yt=ve.y,Bt=ve.z):(rt=0,yt=0,Bt=0);const tn=we.convert(Z.format),ht=we.convert(Z.type);let it;if(Z.isData3DTexture)se.setTexture3D(Z,0),it=z.TEXTURE_3D;else if(Z.isDataArrayTexture||Z.isCompressedArrayTexture)se.setTexture2DArray(Z,0),it=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,Z.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,Z.unpackAlignment);const bt=z.getParameter(z.UNPACK_ROW_LENGTH),wt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Un=z.getParameter(z.UNPACK_SKIP_PIXELS),Wi=z.getParameter(z.UNPACK_SKIP_ROWS),nn=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Ot.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ot.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,He),z.pixelStorei(z.UNPACK_SKIP_ROWS,lt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,at),b.isDataTexture||b.isData3DTexture?z.texSubImage3D(it,te,rt,yt,Bt,Be,Ye,Je,tn,ht,Ot.data):Z.isCompressedArrayTexture?z.compressedTexSubImage3D(it,te,rt,yt,Bt,Be,Ye,Je,tn,Ot.data):z.texSubImage3D(it,te,rt,yt,Bt,Be,Ye,Je,tn,ht,Ot),z.pixelStorei(z.UNPACK_ROW_LENGTH,bt),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,wt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Un),z.pixelStorei(z.UNPACK_SKIP_ROWS,Wi),z.pixelStorei(z.UNPACK_SKIP_IMAGES,nn),te===0&&Z.generateMipmaps&&z.generateMipmap(it),$e.unbindTexture()},this.initRenderTarget=function(b){ye.get(b).__webglFramebuffer===void 0&&se.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?se.setTextureCube(b,0):b.isData3DTexture?se.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?se.setTexture2DArray(b,0):se.setTexture2D(b,0),$e.unbindTexture()},this.resetState=function(){ne=0,B=0,k=null,$e.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Vd?"display-p3":"srgb",n.unpackColorSpace=Pt.workingColorSpace===zl?"display-p3":"srgb"}}class vg extends Wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dn,this.environmentIntensity=1,this.environmentRotation=new dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class _g extends An{constructor(e,n,r,a,c,f,d,h,m){super(e,n,r,a,c,f,d,h,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}const Rm=new Kt;class xg{constructor(e,n,r=0,a=1/0){this.ray=new Xd(e,n),this.near=r,this.far=a,this.camera=null,this.layers=new jd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Rm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Rm),this}intersectObject(e,n=!0,r=[]){return Id(e,this,r,n),r.sort(bm),r}intersectObjects(e,n=!0,r=[]){for(let a=0,c=e.length;a<c;a++)Id(e[a],this,r,n);return r.sort(bm),r}}function bm(o,e){return o.distance-e.distance}function Id(o,e,n,r){let a=!0;if(o.layers.test(e.layers)&&o.raycast(e,n)===!1&&(a=!1),a===!0&&r===!0){const c=o.children;for(let f=0,d=c.length;f<d;f++)Id(c[f],e,n,!0)}}class Cm{constructor(e=1,n=0,r=0){return this.radius=e,this.phi=n,this.theta=r,this}set(e,n,r){return this.radius=e,this.phi=n,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,r){return this.radius=Math.sqrt(e*e+n*n+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(xn(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ud}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ud);const Pm={type:"change"},Qu={type:"start"},Lm={type:"end"},wl=new Xd,Dm=new xr,JE=Math.cos(70*Nn.DEG2RAD);class yg extends eo{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new le,this.cursor=new le,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:To.ROTATE,MIDDLE:To.DOLLY,RIGHT:To.PAN},this.touches={ONE:vi.ROTATE,TWO:vi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return d.phi},this.getAzimuthalAngle=function(){return d.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(x){x.addEventListener("keydown",Fe),this._domElementKeyEvents=x},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Fe),this._domElementKeyEvents=null},this.saveState=function(){r.target0.copy(r.target),r.position0.copy(r.object.position),r.zoom0=r.object.zoom},this.reset=function(){r.target.copy(r.target0),r.object.position.copy(r.position0),r.object.zoom=r.zoom0,r.object.updateProjectionMatrix(),r.dispatchEvent(Pm),r.update(),c=a.NONE},this.update=(function(){const x=new le,X=new Jr().setFromUnitVectors(e.up,new le(0,1,0)),$=X.clone().invert(),K=new le,Pe=new Jr,We=new le,Qe=2*Math.PI;return function(Lt=null){const gt=r.object.position;x.copy(gt).sub(r.target),x.applyQuaternion(X),d.setFromVector3(x),r.autoRotate&&c===a.NONE&&Se(R(Lt)),r.enableDamping?(d.theta+=h.theta*r.dampingFactor,d.phi+=h.phi*r.dampingFactor):(d.theta+=h.theta,d.phi+=h.phi);let Dt=r.minAzimuthAngle,Et=r.maxAzimuthAngle;isFinite(Dt)&&isFinite(Et)&&(Dt<-Math.PI?Dt+=Qe:Dt>Math.PI&&(Dt-=Qe),Et<-Math.PI?Et+=Qe:Et>Math.PI&&(Et-=Qe),Dt<=Et?d.theta=Math.max(Dt,Math.min(Et,d.theta)):d.theta=d.theta>(Dt+Et)/2?Math.max(Dt,d.theta):Math.min(Et,d.theta)),d.phi=Math.max(r.minPolarAngle,Math.min(r.maxPolarAngle,d.phi)),d.makeSafe(),r.enableDamping===!0?r.target.addScaledVector(g,r.dampingFactor):r.target.add(g),r.target.sub(r.cursor),r.target.clampLength(r.minTargetRadius,r.maxTargetRadius),r.target.add(r.cursor);let Rt=!1;if(r.zoomToCursor&&B||r.object.isOrthographicCamera)d.radius=ge(d.radius);else{const Vt=d.radius;d.radius=ge(d.radius*m),Rt=Vt!=d.radius}if(x.setFromSpherical(d),x.applyQuaternion($),gt.copy(r.target).add(x),r.object.lookAt(r.target),r.enableDamping===!0?(h.theta*=1-r.dampingFactor,h.phi*=1-r.dampingFactor,g.multiplyScalar(1-r.dampingFactor)):(h.set(0,0,0),g.set(0,0,0)),r.zoomToCursor&&B){let Vt=null;if(r.object.isPerspectiveCamera){const Yt=x.length();Vt=ge(Yt*m);const fn=Yt-Vt;r.object.position.addScaledVector(D,fn),r.object.updateMatrixWorld(),Rt=!!fn}else if(r.object.isOrthographicCamera){const Yt=new le(ne.x,ne.y,0);Yt.unproject(r.object);const fn=r.object.zoom;r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/m)),r.object.updateProjectionMatrix(),Rt=fn!==r.object.zoom;const ti=new le(ne.x,ne.y,0);ti.unproject(r.object),r.object.position.sub(ti).add(Yt),r.object.updateMatrixWorld(),Vt=x.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),r.zoomToCursor=!1;Vt!==null&&(this.screenSpacePanning?r.target.set(0,0,-1).transformDirection(r.object.matrix).multiplyScalar(Vt).add(r.object.position):(wl.origin.copy(r.object.position),wl.direction.set(0,0,-1).transformDirection(r.object.matrix),Math.abs(r.object.up.dot(wl.direction))<JE?e.lookAt(r.target):(Dm.setFromNormalAndCoplanarPoint(r.object.up,r.target),wl.intersectPlane(Dm,r.target))))}else if(r.object.isOrthographicCamera){const Vt=r.object.zoom;r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/m)),Vt!==r.object.zoom&&(r.object.updateProjectionMatrix(),Rt=!0)}return m=1,B=!1,Rt||K.distanceToSquared(r.object.position)>f||8*(1-Pe.dot(r.object.quaternion))>f||We.distanceToSquared(r.target)>f?(r.dispatchEvent(Pm),K.copy(r.object.position),Pe.copy(r.object.quaternion),We.copy(r.target),!0):!1}})(),this.dispose=function(){r.domElement.removeEventListener("contextmenu",F),r.domElement.removeEventListener("pointerdown",se),r.domElement.removeEventListener("pointercancel",E),r.domElement.removeEventListener("wheel",Ce),r.domElement.removeEventListener("pointermove",C),r.domElement.removeEventListener("pointerup",E),r.domElement.getRootNode().removeEventListener("keydown",Ge,{capture:!0}),r._domElementKeyEvents!==null&&(r._domElementKeyEvents.removeEventListener("keydown",Fe),r._domElementKeyEvents=null)};const r=this,a={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let c=a.NONE;const f=1e-6,d=new Cm,h=new Cm;let m=1;const g=new le,S=new dt,y=new dt,M=new dt,A=new dt,T=new dt,_=new dt,v=new dt,U=new dt,P=new dt,D=new le,ne=new dt;let B=!1;const k=[],Q={};let L=!1;function R(x){return x!==null?2*Math.PI/60*r.autoRotateSpeed*x:2*Math.PI/60/60*r.autoRotateSpeed}function G(x){const X=Math.abs(x*.01);return Math.pow(.95,r.zoomSpeed*X)}function Se(x){h.theta-=x}function ce(x){h.phi-=x}const Re=(function(){const x=new le;return function($,K){x.setFromMatrixColumn(K,0),x.multiplyScalar(-$),g.add(x)}})(),be=(function(){const x=new le;return function($,K){r.screenSpacePanning===!0?x.setFromMatrixColumn(K,1):(x.setFromMatrixColumn(K,0),x.crossVectors(r.object.up,x)),x.multiplyScalar($),g.add(x)}})(),xe=(function(){const x=new le;return function($,K){const Pe=r.domElement;if(r.object.isPerspectiveCamera){const We=r.object.position;x.copy(We).sub(r.target);let Qe=x.length();Qe*=Math.tan(r.object.fov/2*Math.PI/180),Re(2*$*Qe/Pe.clientHeight,r.object.matrix),be(2*K*Qe/Pe.clientHeight,r.object.matrix)}else r.object.isOrthographicCamera?(Re($*(r.object.right-r.object.left)/r.object.zoom/Pe.clientWidth,r.object.matrix),be(K*(r.object.top-r.object.bottom)/r.object.zoom/Pe.clientHeight,r.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),r.enablePan=!1)}})();function Me(x){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?m/=x:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function I(x){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?m*=x:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function Te(x,X){if(!r.zoomToCursor)return;B=!0;const $=r.domElement.getBoundingClientRect(),K=x-$.left,Pe=X-$.top,We=$.width,Qe=$.height;ne.x=K/We*2-1,ne.y=-(Pe/Qe)*2+1,D.set(ne.x,ne.y,1).unproject(r.object).sub(r.object.position).normalize()}function ge(x){return Math.max(r.minDistance,Math.min(r.maxDistance,x))}function O(x){S.set(x.clientX,x.clientY)}function pe(x){Te(x.clientX,x.clientX),v.set(x.clientX,x.clientY)}function ke(x){A.set(x.clientX,x.clientY)}function J(x){y.set(x.clientX,x.clientY),M.subVectors(y,S).multiplyScalar(r.rotateSpeed);const X=r.domElement;Se(2*Math.PI*M.x/X.clientHeight),ce(2*Math.PI*M.y/X.clientHeight),S.copy(y),r.update()}function Ee(x){U.set(x.clientX,x.clientY),P.subVectors(U,v),P.y>0?Me(G(P.y)):P.y<0&&I(G(P.y)),v.copy(U),r.update()}function Le(x){T.set(x.clientX,x.clientY),_.subVectors(T,A).multiplyScalar(r.panSpeed),xe(_.x,_.y),A.copy(T),r.update()}function Ue(x){Te(x.clientX,x.clientY),x.deltaY<0?I(G(x.deltaY)):x.deltaY>0&&Me(G(x.deltaY)),r.update()}function Ve(x){let X=!1;switch(x.code){case r.keys.UP:x.ctrlKey||x.metaKey||x.shiftKey?ce(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):xe(0,r.keyPanSpeed),X=!0;break;case r.keys.BOTTOM:x.ctrlKey||x.metaKey||x.shiftKey?ce(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):xe(0,-r.keyPanSpeed),X=!0;break;case r.keys.LEFT:x.ctrlKey||x.metaKey||x.shiftKey?Se(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):xe(r.keyPanSpeed,0),X=!0;break;case r.keys.RIGHT:x.ctrlKey||x.metaKey||x.shiftKey?Se(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):xe(-r.keyPanSpeed,0),X=!0;break}X&&(x.preventDefault(),r.update())}function je(x){if(k.length===1)S.set(x.pageX,x.pageY);else{const X=fe(x),$=.5*(x.pageX+X.x),K=.5*(x.pageY+X.y);S.set($,K)}}function tt(x){if(k.length===1)A.set(x.pageX,x.pageY);else{const X=fe(x),$=.5*(x.pageX+X.x),K=.5*(x.pageY+X.y);A.set($,K)}}function _t(x){const X=fe(x),$=x.pageX-X.x,K=x.pageY-X.y,Pe=Math.sqrt($*$+K*K);v.set(0,Pe)}function z(x){r.enableZoom&&_t(x),r.enablePan&&tt(x)}function xt(x){r.enableZoom&&_t(x),r.enableRotate&&je(x)}function ut(x){if(k.length==1)y.set(x.pageX,x.pageY);else{const $=fe(x),K=.5*(x.pageX+$.x),Pe=.5*(x.pageY+$.y);y.set(K,Pe)}M.subVectors(y,S).multiplyScalar(r.rotateSpeed);const X=r.domElement;Se(2*Math.PI*M.x/X.clientHeight),ce(2*Math.PI*M.y/X.clientHeight),S.copy(y)}function ft(x){if(k.length===1)T.set(x.pageX,x.pageY);else{const X=fe(x),$=.5*(x.pageX+X.x),K=.5*(x.pageY+X.y);T.set($,K)}_.subVectors(T,A).multiplyScalar(r.panSpeed),xe(_.x,_.y),A.copy(T)}function $e(x){const X=fe(x),$=x.pageX-X.x,K=x.pageY-X.y,Pe=Math.sqrt($*$+K*K);U.set(0,Pe),P.set(0,Math.pow(U.y/v.y,r.zoomSpeed)),Me(P.y),v.copy(U);const We=(x.pageX+X.x)*.5,Qe=(x.pageY+X.y)*.5;Te(We,Qe)}function ee(x){r.enableZoom&&$e(x),r.enablePan&&ft(x)}function ye(x){r.enableZoom&&$e(x),r.enableRotate&&ut(x)}function se(x){r.enabled!==!1&&(k.length===0&&(r.domElement.setPointerCapture(x.pointerId),r.domElement.addEventListener("pointermove",C),r.domElement.addEventListener("pointerup",E)),!V(x)&&(W(x),x.pointerType==="touch"?re(x):Y(x)))}function C(x){r.enabled!==!1&&(x.pointerType==="touch"?ae(x):ie(x))}function E(x){switch(q(x),k.length){case 0:r.domElement.releasePointerCapture(x.pointerId),r.domElement.removeEventListener("pointermove",C),r.domElement.removeEventListener("pointerup",E),r.dispatchEvent(Lm),c=a.NONE;break;case 1:const X=k[0],$=Q[X];re({pointerId:X,pageX:$.x,pageY:$.y});break}}function Y(x){let X;switch(x.button){case 0:X=r.mouseButtons.LEFT;break;case 1:X=r.mouseButtons.MIDDLE;break;case 2:X=r.mouseButtons.RIGHT;break;default:X=-1}switch(X){case To.DOLLY:if(r.enableZoom===!1)return;pe(x),c=a.DOLLY;break;case To.ROTATE:if(x.ctrlKey||x.metaKey||x.shiftKey){if(r.enablePan===!1)return;ke(x),c=a.PAN}else{if(r.enableRotate===!1)return;O(x),c=a.ROTATE}break;case To.PAN:if(x.ctrlKey||x.metaKey||x.shiftKey){if(r.enableRotate===!1)return;O(x),c=a.ROTATE}else{if(r.enablePan===!1)return;ke(x),c=a.PAN}break;default:c=a.NONE}c!==a.NONE&&r.dispatchEvent(Qu)}function ie(x){switch(c){case a.ROTATE:if(r.enableRotate===!1)return;J(x);break;case a.DOLLY:if(r.enableZoom===!1)return;Ee(x);break;case a.PAN:if(r.enablePan===!1)return;Le(x);break}}function Ce(x){r.enabled===!1||r.enableZoom===!1||c!==a.NONE||(x.preventDefault(),r.dispatchEvent(Qu),Ue(Ae(x)),r.dispatchEvent(Lm))}function Ae(x){const X=x.deltaMode,$={clientX:x.clientX,clientY:x.clientY,deltaY:x.deltaY};switch(X){case 1:$.deltaY*=16;break;case 2:$.deltaY*=100;break}return x.ctrlKey&&!L&&($.deltaY*=10),$}function Ge(x){x.key==="Control"&&(L=!0,r.domElement.getRootNode().addEventListener("keyup",De,{passive:!0,capture:!0}))}function De(x){x.key==="Control"&&(L=!1,r.domElement.getRootNode().removeEventListener("keyup",De,{passive:!0,capture:!0}))}function Fe(x){r.enabled===!1||r.enablePan===!1||Ve(x)}function re(x){switch(we(x),k.length){case 1:switch(r.touches.ONE){case vi.ROTATE:if(r.enableRotate===!1)return;je(x),c=a.TOUCH_ROTATE;break;case vi.PAN:if(r.enablePan===!1)return;tt(x),c=a.TOUCH_PAN;break;default:c=a.NONE}break;case 2:switch(r.touches.TWO){case vi.DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;z(x),c=a.TOUCH_DOLLY_PAN;break;case vi.DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;xt(x),c=a.TOUCH_DOLLY_ROTATE;break;default:c=a.NONE}break;default:c=a.NONE}c!==a.NONE&&r.dispatchEvent(Qu)}function ae(x){switch(we(x),c){case a.TOUCH_ROTATE:if(r.enableRotate===!1)return;ut(x),r.update();break;case a.TOUCH_PAN:if(r.enablePan===!1)return;ft(x),r.update();break;case a.TOUCH_DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;ee(x),r.update();break;case a.TOUCH_DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;ye(x),r.update();break;default:c=a.NONE}}function F(x){r.enabled!==!1&&x.preventDefault()}function W(x){k.push(x.pointerId)}function q(x){delete Q[x.pointerId];for(let X=0;X<k.length;X++)if(k[X]==x.pointerId){k.splice(X,1);return}}function V(x){for(let X=0;X<k.length;X++)if(k[X]==x.pointerId)return!0;return!1}function we(x){let X=Q[x.pointerId];X===void 0&&(X=new dt,Q[x.pointerId]=X),X.set(x.pageX,x.pageY)}function fe(x){const X=x.pointerId===k[0]?k[1]:k[0];return Q[X]}r.domElement.addEventListener("contextmenu",F),r.domElement.addEventListener("pointerdown",se),r.domElement.addEventListener("pointercancel",E),r.domElement.addEventListener("wheel",Ce,{passive:!1}),r.domElement.getRootNode().addEventListener("keydown",Ge,{passive:!0,capture:!0}),this.update()}}function e1({images:o,cropToSquare:e=!0}){const n=At.useRef(null);return At.useEffect(()=>{const r=n.current;if(!r)return;const a=r.clientWidth,c=r.clientHeight,f=new vg,d=new Gn(70,a/c,.1,1e3);d.position.set(0,0,28);const h=new gg({antialias:!0,alpha:!0});h.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),h.setSize(a,c),h.setClearColor(0,0),r.appendChild(h.domElement),h.domElement.style.touchAction="none",h.domElement.style.display="block";const m=new yg(d,h.domElement);m.enableDamping=!0,m.dampingFactor=.08,m.rotateSpeed=.7,m.zoomSpeed=1.1,m.minDistance=8,m.maxDistance=55,m.enablePan=!1,m.touches={ONE:vi.ROTATE,TWO:vi.DOLLY_ROTATE};const g=new jo;f.add(g);const S=11,y=o.length,M=480,A=.048,T=[],_=[],v=[],U=[],P=[];let D=null,ne=null;const k=Math.max(0,y-0),Q=Nn.clamp(Math.round(Math.sqrt(Math.max(k,1))*.72),5,10),L=Math.PI*.78,R=L/2,G=Q>1?L/(Q-1):0,Se=Nn.clamp(30/Math.sqrt(y),1.78,2.6),ce=[["#23d7ff","#ff42df"],["#4a7dff","#35f0ff"],["#ff52cf","#8b5cff"],["#2ae6ff","#9d5cff"]],Re=(F,W,q,V,we,fe)=>{const ue=Math.min(fe,V/2,we/2);F.beginPath(),F.moveTo(W+ue,q),F.lineTo(W+V-ue,q),F.quadraticCurveTo(W+V,q,W+V,q+ue),F.lineTo(W+V,q+we-ue),F.quadraticCurveTo(W+V,q+we,W+V-ue,q+we),F.lineTo(W+ue,q+we),F.quadraticCurveTo(W,q+we,W,q+we-ue),F.lineTo(W,q+ue),F.quadraticCurveTo(W,q,W+ue,q),F.closePath()},be=(F,W,q)=>{const V=new Image;V.onload=()=>{const we=document.createElement("canvas"),fe=512;we.width=fe,we.height=fe;const ue=we.getContext("2d");if(!ue)return;ue.clearRect(0,0,fe,fe);const x=34,X=44,$=fe-X*2,K=fe-x*2,Pe=34,[We,Qe]=ce[W%ce.length],Mt=e?Math.max($/V.width,$/V.height):Math.min($/V.width,$/V.height),Lt=V.width*Mt,gt=V.height*Mt;ue.save(),Re(ue,X,X,$,$,24),ue.clip(),ue.drawImage(V,X+($-Lt)/2,X+($-gt)/2,Lt,gt),ue.restore();const Dt=ue.createLinearGradient(x,x,fe-x,fe-x);Dt.addColorStop(0,We),Dt.addColorStop(.48,"#faf7ff"),Dt.addColorStop(1,Qe),ue.save(),Re(ue,x,x,K,K,Pe),ue.strokeStyle=Dt,ue.lineJoin="round",ue.shadowColor=We,ue.shadowBlur=34,ue.lineWidth=20,ue.globalAlpha=.48,ue.stroke(),ue.shadowColor=Qe,ue.shadowBlur=22,ue.lineWidth=11,ue.globalAlpha=.58,ue.stroke(),ue.shadowBlur=0,ue.globalAlpha=1,ue.lineWidth=5,ue.stroke(),ue.lineWidth=2,ue.strokeStyle="rgba(255,255,255,0.88)",ue.stroke(),ue.restore();const Et=58,Rt=13,Vt=[{x1:x+Rt,y1:x,x2:x+Rt+Et,y2:x,color:We},{x1:fe-x-Rt-Et,y1:x,x2:fe-x-Rt,y2:x,color:Qe},{x1:x+Rt,y1:fe-x,x2:x+Rt+Et,y2:fe-x,color:Qe},{x1:fe-x-Rt-Et,y1:fe-x,x2:fe-x-Rt,y2:fe-x,color:We},{x1:x,y1:x+Rt,x2:x,y2:x+Rt+Et,color:Qe},{x1:fe-x,y1:x+Rt,x2:fe-x,y2:x+Rt+Et,color:We},{x1:x,y1:fe-x-Rt-Et,x2:x,y2:fe-x-Rt,color:We},{x1:fe-x,y1:fe-x-Rt-Et,x2:fe-x,y2:fe-x-Rt,color:Qe}];ue.save(),ue.lineCap="round",Vt.forEach(fn=>{ue.strokeStyle=fn.color,ue.shadowColor=fn.color,ue.shadowBlur=18,ue.lineWidth=8,ue.globalAlpha=.72,ue.beginPath(),ue.moveTo(fn.x1,fn.y1),ue.lineTo(fn.x2,fn.y2),ue.stroke(),ue.shadowBlur=0,ue.lineWidth=3,ue.globalAlpha=1,ue.stroke()}),ue.restore();const Yt=new _g(we);Yt.colorSpace=Qn,Yt.minFilter=wn,Yt.magFilter=wn,q(Yt)},V.src=F},xe=F=>new Hl({side:F,toneMapped:!1,color:16316411,transparent:!0,alphaTest:.01}),Me=F=>{const W=F.clone(),q=W.getAttribute("uv").clone();for(let V=0;V<q.count;V++)q.setX(V,1-q.getX(V));return W.setAttribute("uv",q),W},I=(F,W,q,V,we=8)=>{const fe=[],ue=[],x=[];for(let $=0;$<=we;$++){const K=$/we,Pe=Nn.clamp(F+(.5-K)*V,-Math.PI/2+.04,Math.PI/2-.04);for(let We=0;We<=we;We++){const Qe=We/we,Mt=W+(Qe-.5)*q,Lt=Math.cos(Pe);fe.push(Math.cos(Mt)*Lt*S,Math.sin(Pe)*S,Math.sin(Mt)*Lt*S),ue.push(Qe,1-K)}}for(let $=0;$<we;$++)for(let K=0;K<we;K++){const Pe=$*(we+1)+K,We=Pe+1,Qe=Pe+we+1,Mt=Qe+1;x.push(Pe,Qe,We,We,Qe,Mt)}const X=new Tr;return X.setAttribute("position",new Bi(fe,3)),X.setAttribute("uv",new Bi(ue,2)),X.setIndex(x),X.computeVertexNormals(),X},Te=Array.from({length:Q},(F,W)=>{const q=R-G*W,V=Math.max(.12,Math.cos(q)),we=V*S,fe=Math.max(1,Math.floor(Math.PI*2*we/(Se*1.08)));return{centerLat:q,radiusRatio:V,capacity:fe,weight:fe,count:0,longitudeOffset:0}});let ge=k;for(ge>=Q&&Te.forEach(F=>{ge>0&&F.capacity>0&&(F.count=1,ge-=1)});ge>0;){const F=Te.map((fe,ue)=>({ring:fe,index:ue})).filter(({ring:fe})=>fe.count<fe.capacity);if(F.length===0)break;const W=F.reduce((fe,ue)=>{const x=ue.ring.count/ue.ring.weight,X=fe.ring.count/fe.ring.weight;if(x!==X)return x<X?ue:fe;const $=Math.abs(ue.index-(Q-1)/2),K=Math.abs(fe.index-(Q-1)/2);return $<K?ue:fe}),q=Q-1-W.index,V=Te[q],we=q!==W.index&&ge>=2&&V.count<V.capacity;W.ring.count+=1,ge-=1,we&&(V.count+=1,ge-=1)}Te.forEach((F,W)=>{if(F.count<=0)return;const q=Te[W-1];if(!q||q.count<=0){F.longitudeOffset=0;return}const V=Math.PI*2/F.count;F.longitudeOffset=q.longitudeOffset+V*.5});let O=0;const pe=(F,W)=>{const q=xe(Hi),V=xe(Tn);U.push(q,V);const we=new ei(F,q);we.userData.imageIndex=W;const fe=new ei(Me(F),V);fe.userData.imageIndex=W,T.push(we),_.push(fe),g.add(we),g.add(fe),P.push(we.scale.clone()),we.userData.frontMesh=we,we.userData.backMesh=fe,fe.userData.frontMesh=we,be(o[W],W,ue=>{v.push(ue),q.map=ue,q.color.set(16777215),q.needsUpdate=!0,V.map=ue,V.color.set(16777215),V.needsUpdate=!0,we.userData.texture=ue,fe.userData.texture=ue})};Te.forEach(F=>{for(let W=0;W<F.count&&O<y;W++){const q=W/F.count*Math.PI*2+F.longitudeOffset,V=F.radiusRatio*S,we=F.centerLat,fe=Math.min(Math.PI*2/F.count*.92,Se*1.08/Math.max(V,.8)),ue=Se/S,x=I(we,q,fe,ue);pe(x,O),O++}});let ke=null,J=null;const Ee=document.createElement("div");Ee.style.position="absolute",Ee.style.inset="0",Ee.style.pointerEvents="none",Ee.style.zIndex="20",r.appendChild(Ee);const Le=(F,W)=>{F.visible=W;const q=F.userData.backMesh;q&&(q.visible=W)},Ue=F=>{const W=h.domElement.getBoundingClientRect(),q=F.clone().project(d);return{x:(q.x+1)/2*W.width,y:(1-q.y)/2*W.height}},Ve=F=>{const W=F.geometry.getAttribute("position"),q=Math.round(Math.sqrt(W.count))-1,V=[],we=[];for(let ue=0;ue<=q;ue++)V.push(ue),we.push({x:ue/q,y:0});for(let ue=1;ue<=q;ue++)V.push(ue*(q+1)+q),we.push({x:1,y:ue/q});for(let ue=q-1;ue>=0;ue--)V.push(q*(q+1)+ue),we.push({x:ue/q,y:1});for(let ue=q-1;ue>=1;ue--)V.push(ue*(q+1)),we.push({x:0,y:ue/q});const fe=V.map(ue=>{const x=new le(W.getX(ue),W.getY(ue),W.getZ(ue));return F.localToWorld(x),Ue(x)});return je(fe)>=0?{points:fe,unitPoints:we}:{points:fe.toReversed(),unitPoints:we.toReversed()}},je=F=>F.reduce((W,q,V)=>{const we=F[(V+1)%F.length];return W+q.x*we.y-q.y*we.x},0),tt=(F=1)=>{const W=h.domElement.clientWidth,q=h.domElement.clientHeight,V=Math.min(W*.78,860),we=Math.min(q*.78,860),fe=Math.min(V,we*F),ue=fe/F;return{left:(W-fe)/2,top:(q-ue)/2,width:fe,height:ue}},_t=F=>{const W=h.domElement.getBoundingClientRect(),q=F.getBoundingClientRect();return{left:q.left-W.left,top:q.top-W.top,width:q.width,height:q.height}},z=F=>{const{points:W,unitPoints:q}=Ve(F),V=Math.min(...W.map(K=>K.x)),we=Math.max(...W.map(K=>K.x)),fe=Math.min(...W.map(K=>K.y)),ue=Math.max(...W.map(K=>K.y)),x={left:V,top:fe,width:Math.max(1,we-V),height:Math.max(1,ue-fe)},X=`polygon(${W.map(K=>{const Pe=Nn.clamp((K.x-x.left)/x.width*100,0,100),We=Nn.clamp((K.y-x.top)/x.height*100,0,100);return`${Pe}% ${We}%`}).join(", ")})`,$=`polygon(${q.map(K=>`${K.x*100}% ${K.y*100}%`).join(", ")})`;return{rect:x,clipPath:X,fullClipPath:$}},xt=(F,W)=>{const q=F.left+F.width/2,V=F.top+F.height/2,we=W.left+W.width/2,fe=W.top+W.height/2,ue=q-we,x=V-fe,X=F.width/W.width,$=F.height/W.height;return`translate(${ue}px, ${x}px) scale(${X}, ${$})`},ut=(F,W,q,V,we="inset(0)",fe="inset(0)")=>{J==null||J.cancel();const ue=xt(W,q);F.style.left=`${q.left}px`,F.style.top=`${q.top}px`,F.style.width=`${q.width}px`,F.style.height=`${q.height}px`,F.style.opacity="1",F.style.transform=ue,F.style.clipPath=we;const x={transform:ue,clipPath:we,opacity:1,borderRadius:V==="open"?"18px":"28px"},X={transform:"translate(0px, 0px) scale(1, 1)",clipPath:fe,opacity:1,borderRadius:V==="open"?"28px":"18px"};return J=F.animate([x,X],{duration:M,easing:"cubic-bezier(0.19, 1, 0.22, 1)",fill:"forwards",composite:"replace"}),J},ft=(F,W,q)=>ut(F,W,q.rect,"close","inset(0)",q.clipPath),$e=()=>{if(!ke)return;const{element:F,mesh:W}=ke,q=_t(F);Le(W,!0),m.update(),h.render(f,d);const V=g.rotation.y;g.rotation.y=V+A*(M/1e3),g.updateMatrixWorld(!0);const we=z(W);g.rotation.y=V,g.updateMatrixWorld(!0);const fe=ft(F,q,we);fe.onfinish=()=>{F.remove(),ke=null,D=null,ne=null,J=null},fe.oncancel=()=>{F.remove(),Le(W,!0)}},ee=(F,W,q)=>{if(!q||(ke==null?void 0:ke.mesh)===F)return;ke&&(ke.element.remove(),Le(ke.mesh,!0)),D=F,ne=q,Le(F,!1);const V=document.createElement("img");V.src=o[W],V.draggable=!1,V.style.position="absolute",V.style.objectFit="contain",V.style.background="transparent",V.style.boxShadow="0 28px 80px rgba(0, 0, 0, 0.35)",V.style.willChange="transform, clip-path, opacity",V.style.pointerEvents="auto",V.style.cursor="zoom-out",V.style.transformOrigin="center center",V.addEventListener("click",fe=>{fe.stopPropagation(),$e()});const we=()=>{const fe=z(F),ue=V.naturalWidth>0&&V.naturalHeight>0?V.naturalWidth/V.naturalHeight:1,x=tt(ue);V.style.left=`${x.left}px`,V.style.top=`${x.top}px`,V.style.width=`${x.width}px`,V.style.height=`${x.height}px`,V.style.transform=xt(fe.rect,x),V.style.clipPath=fe.clipPath,Ee.appendChild(V),ke={element:V,mesh:F,index:W,projection:fe};const X=ut(V,fe.rect,x,"open",fe.clipPath,"inset(0)");X.onfinish=()=>{J=null}};V.complete&&V.naturalWidth>0?we():V.addEventListener("load",we,{once:!0})},ye=new xg,se=new dt,C={x:0,y:0};let E=!1;const Y=F=>{C.x=F.clientX,C.y=F.clientY,E=!1},ie=F=>{if(E)return;Math.hypot(F.clientX-C.x,F.clientY-C.y)>6&&(E=!0)},Ce=F=>{if(E){E=!1;return}const W=h.domElement.getBoundingClientRect();se.x=(F.clientX-W.left)/W.width*2-1,se.y=-((F.clientY-W.top)/W.height)*2+1,ye.setFromCamera(se,d);const q=ye.intersectObjects([...T,..._]);if(q.length>0){const we=q[0].object,fe=we.userData.frontMesh??we,ue=fe.userData.texture;D===fe&&ne===ue?$e():(D&&Le(D,!0),ee(fe,fe.userData.imageIndex,ue))}else $e()};h.domElement.addEventListener("pointerdown",Y),h.domElement.addEventListener("pointermove",ie),h.domElement.addEventListener("click",Ce);let Ae=0,Ge=!1,De=performance.now();const Fe=(F=performance.now())=>{if(Ge)return;Ae=requestAnimationFrame(Fe);const W=Math.min((F-De)/1e3,.05);De=F,g.rotation.y+=A*W,m.update(),h.render(f,d)};Fe();const re=()=>{const F=r.clientWidth,W=r.clientHeight;d.aspect=F/W,d.updateProjectionMatrix(),h.setSize(F,W)},ae=new ResizeObserver(re);return ae.observe(r),()=>{Ge=!0,cancelAnimationFrame(Ae),ae.disconnect(),h.domElement.removeEventListener("pointerdown",Y),h.domElement.removeEventListener("pointermove",ie),h.domElement.removeEventListener("click",Ce),m.dispose(),J==null||J.cancel(),Ee.remove(),T.forEach(F=>{g.remove(F),F.geometry.dispose()}),_.forEach(F=>{g.remove(F),F.geometry.dispose()}),U.forEach(F=>F.dispose()),v.forEach(F=>F.dispose()),h.dispose(),h.domElement.parentNode===r&&r.removeChild(h.domElement)}},[o,e]),_e.jsx("div",{ref:n,className:"absolute inset-0",style:{touchAction:"none"}})}const t1=o=>{const e=o>140?5:o>84?4:3;return Nn.clamp(Math.ceil(o/e),16,36)};function n1({images:o,variant:e,cropToSquare:n=!0}){const r=At.useRef(null);return At.useEffect(()=>{const a=r.current;if(!a)return;const c=a.clientWidth,f=a.clientHeight,d=new vg,h=new Gn(66,c/f,.1,1e3);h.position.set(0,0,e==="spiral"?25:28);const m=new gg({antialias:!0,alpha:!0});m.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),m.setSize(c,f),m.setClearColor(0,0),m.domElement.style.display="block",m.domElement.style.touchAction="none",a.appendChild(m.domElement);const g=new yg(h,m.domElement);g.enableDamping=!0,g.dampingFactor=.08,g.rotateSpeed=.7,g.zoomSpeed=1.1,g.minDistance=8,g.maxDistance=55,g.enablePan=!1,g.touches={ONE:vi.ROTATE,TWO:vi.DOLLY_ROTATE};const S=new jo;d.add(S);const y=[],M=[],A=[];let T=null,_=null,v=null;const U=document.createElement("div");U.style.position="absolute",U.style.inset="0",U.style.pointerEvents="none",U.style.zIndex="20",a.appendChild(U);const P=1.08,D=ee=>Nn.clamp(30/Math.sqrt(ee),1.78,2.6),ne=[["#23d7ff","#ff42df"],["#4a7dff","#35f0ff"],["#ff52cf","#8b5cff"],["#2ae6ff","#9d5cff"]],B=(ee,ye,se,C,E,Y)=>{const ie=Math.min(Y,C/2,E/2);ee.beginPath(),ee.moveTo(ye+ie,se),ee.lineTo(ye+C-ie,se),ee.quadraticCurveTo(ye+C,se,ye+C,se+ie),ee.lineTo(ye+C,se+E-ie),ee.quadraticCurveTo(ye+C,se+E,ye+C-ie,se+E),ee.lineTo(ye+ie,se+E),ee.quadraticCurveTo(ye,se+E,ye,se+E-ie),ee.lineTo(ye,se+ie),ee.quadraticCurveTo(ye,se,ye+ie,se),ee.closePath()},k=(ee,ye,se,C)=>{const ie=se-88,Ce=se-68,[Ae,Ge]=ne[C%ne.length],De=n?Math.max(ie/ye.width,ie/ye.height):Math.min(ie/ye.width,ie/ye.height),Fe=ye.width*De,re=ye.height*De;ee.save(),B(ee,44,44,ie,ie,24),ee.clip(),ee.drawImage(ye,44+(ie-Fe)/2,44+(ie-re)/2,Fe,re),ee.restore();const ae=ee.createLinearGradient(34,34,se-34,se-34);ae.addColorStop(0,Ae),ae.addColorStop(.48,"#faf7ff"),ae.addColorStop(1,Ge),ee.save(),B(ee,34,34,Ce,Ce,34),ee.strokeStyle=ae,ee.lineJoin="round",ee.shadowColor=Ae,ee.shadowBlur=34,ee.lineWidth=20,ee.globalAlpha=.48,ee.stroke(),ee.shadowColor=Ge,ee.shadowBlur=22,ee.lineWidth=11,ee.globalAlpha=.58,ee.stroke(),ee.shadowBlur=0,ee.globalAlpha=1,ee.lineWidth=5,ee.stroke(),ee.lineWidth=2,ee.strokeStyle="rgba(255,255,255,0.88)",ee.stroke(),ee.restore();const F=58,W=13,q=[{x1:34+W,y1:34,x2:34+W+F,y2:34,color:Ae},{x1:se-34-W-F,y1:34,x2:se-34-W,y2:34,color:Ge},{x1:34+W,y1:se-34,x2:34+W+F,y2:se-34,color:Ge},{x1:se-34-W-F,y1:se-34,x2:se-34-W,y2:se-34,color:Ae},{x1:34,y1:34+W,x2:34,y2:34+W+F,color:Ge},{x1:se-34,y1:34+W,x2:se-34,y2:34+W+F,color:Ae},{x1:34,y1:se-34-W-F,x2:34,y2:se-34-W,color:Ae},{x1:se-34,y1:se-34-W-F,x2:se-34,y2:se-34-W,color:Ge}];ee.save(),ee.lineCap="round",q.forEach(V=>{ee.strokeStyle=V.color,ee.shadowColor=V.color,ee.shadowBlur=18,ee.lineWidth=8,ee.globalAlpha=.72,ee.beginPath(),ee.moveTo(V.x1,V.y1),ee.lineTo(V.x2,V.y2),ee.stroke(),ee.shadowBlur=0,ee.lineWidth=3,ee.globalAlpha=1,ee.stroke()}),ee.restore()},Q=(ee,ye,se)=>{const C=new Image;C.onload=()=>{const E=document.createElement("canvas"),Y=512;E.width=Y,E.height=Y;const ie=E.getContext("2d");if(!ie)return;ie.clearRect(0,0,Y,Y),k(ie,C,Y,ye);const Ce=new _g(E);Ce.colorSpace=Qn,Ce.minFilter=wn,Ce.magFilter=wn,se(Ce)},C.src=ee},L=(ee,ye)=>{const se=D(ye),C=t1(ye),E=Math.ceil(ye/C),Y=ee%C,ie=Math.floor(ee/C),Ce=Y/C*Math.PI*2,Ae=Nn.clamp(C*.38,10.8,14.2),Ge=Nn.clamp(10.6/Math.max(1,E-1),2.25,2.95),De=(E-1)*Ge*.5-ie*Ge,Fe=new le(Math.sin(Ce)*Ae,De,Math.cos(Ce)*Ae),re=new dn(0,Ce,0),ae=Math.PI*2*Ae/C,F=Math.min(ae*.98/P,Ge*.98,se);return{position:Fe,rotation:re,width:n?F*P:F*1.28,height:F}},R=(ee,ye)=>{const se=D(ye),C=ee%6,E=Math.floor((ye+5-C)/6),Y=Math.floor(ee/6),ie=Math.min(5,Math.ceil(Math.sqrt(E))),Ce=Math.ceil(E/ie),Ae=Math.floor(Y/ie),Ge=Y%ie,De=7.4,Fe=De*2/ie,re=De*2/Ce,ae=Math.min(Fe*.94/P,re*.94,se),F=-De+Fe*(Ge+.5),W=De-re*(Ae+.5),q=.05;return{...[{position:new le(F,W,De+q),rotation:new dn(0,0,0)},{position:new le(-F,W,-De-q),rotation:new dn(0,Math.PI,0)},{position:new le(De+q,W,-F),rotation:new dn(0,Math.PI/2,0)},{position:new le(-De-q,W,F),rotation:new dn(0,-Math.PI/2,0)},{position:new le(F,De+q,-W),rotation:new dn(-Math.PI/2,0,0)},{position:new le(F,-De-q,W),rotation:new dn(Math.PI/2,0,0)}][C],width:n?ae*P:ae*1.28,height:ae}},G=(ee,ye)=>{const se=D(ye),C=ye===1?.5:ee/(ye-1),E=Nn.clamp(ye/34,2.8,4.8),Y=C*Math.PI*2*E,ie=13.4,Ce=Math.max(se*E*1.18,Nn.clamp(ye*.062,8.4,12.8)),Ae=(.5-C)*Ce,Ge=new le(Math.sin(Y)*ie,Ae,Math.cos(Y)*ie),De=new dn(0,Y,0),Fe=Math.max(1,ye/E),re=Math.PI*2*ie/Fe,ae=Math.min(re*.96/P,se);return{position:Ge,rotation:De,width:n?ae*P:ae*1.28,height:ae}},Se=(ee,ye)=>e==="cylinder"?L(ee,ye):e==="polyhedron"?R(ee,ye):G(ee,ye);o.forEach((ee,ye)=>{const se=Se(ye,o.length),C=new Ks(se.width,se.height,1,1),E=new Hl({side:xi,transparent:!0,alphaTest:.01,toneMapped:!1,color:16316411}),Y=new ei(C,E);Y.position.copy(se.position),Y.rotation.copy(se.rotation),Y.userData.imageIndex=ye,S.add(Y),A.push(Y),M.push(E),Q(ee,ye,ie=>{y.push(ie),E.map=ie,E.color.set(16777215),E.needsUpdate=!0,Y.userData.texture=ie})});const ce=(ee,ye)=>{ee.visible=ye},Re=ee=>{const ye=m.domElement.getBoundingClientRect(),se=ee.clone().project(h);return{x:(se.x+1)/2*ye.width,y:(1-se.y)/2*ye.height}},be=ee=>ee.reduce((ye,se,C)=>{const E=ee[(C+1)%ee.length];return ye+se.x*E.y-se.y*E.x},0),xe=ee=>{const se=ee.geometry.getAttribute("position"),C=[0,1,3,2],E=[{x:0,y:0},{x:1,y:0},{x:1,y:1},{x:0,y:1}],Y=C.map(W=>{const q=new le(se.getX(W),se.getY(W),se.getZ(W));return ee.localToWorld(q),Re(q)}),ie=be(Y)>=0?Y:Y.toReversed(),Ce=be(Y)>=0?E:E.toReversed(),Ae=Math.min(...ie.map(W=>W.x)),Ge=Math.max(...ie.map(W=>W.x)),De=Math.min(...ie.map(W=>W.y)),Fe=Math.max(...ie.map(W=>W.y)),re={left:Ae,top:De,width:Math.max(1,Ge-Ae),height:Math.max(1,Fe-De)},ae=`polygon(${ie.map(W=>{const q=Nn.clamp((W.x-re.left)/re.width*100,0,100),V=Nn.clamp((W.y-re.top)/re.height*100,0,100);return`${q}% ${V}%`}).join(", ")})`,F=`polygon(${Ce.map(W=>`${W.x*100}% ${W.y*100}%`).join(", ")})`;return{rect:re,clipPath:ae||F}},Me=(ee=1)=>{const ye=m.domElement.clientWidth,se=m.domElement.clientHeight,C=Math.min(ye*.78,860),E=Math.min(se*.78,860),Y=Math.min(C,E*ee),ie=Y/ee;return{left:(ye-Y)/2,top:(se-ie)/2,width:Y,height:ie}},I=ee=>{const ye=m.domElement.getBoundingClientRect(),se=ee.getBoundingClientRect();return{left:se.left-ye.left,top:se.top-ye.top,width:se.width,height:se.height}},Te=(ee,ye)=>{const se=ee.left+ee.width/2,C=ee.top+ee.height/2,E=ye.left+ye.width/2,Y=ye.top+ye.height/2,ie=se-E,Ce=C-Y,Ae=ee.width/ye.width,Ge=ee.height/ye.height;return`translate(${ie}px, ${Ce}px) scale(${Ae}, ${Ge})`},ge=(ee,ye,se,C,E="inset(0)",Y="inset(0)")=>{T==null||T.cancel();const ie=Te(ye,se);return ee.style.left=`${se.left}px`,ee.style.top=`${se.top}px`,ee.style.width=`${se.width}px`,ee.style.height=`${se.height}px`,ee.style.opacity="1",ee.style.transform=ie,ee.style.clipPath=E,T=ee.animate([{transform:ie,clipPath:E,opacity:1,borderRadius:C==="open"?"16px":"28px"},{transform:"translate(0px, 0px) scale(1, 1)",clipPath:Y,opacity:1,borderRadius:C==="open"?"28px":"16px"}],{duration:480,easing:"cubic-bezier(0.19, 1, 0.22, 1)",fill:"forwards",composite:"replace"}),T},O=()=>{if(!_)return;const{element:ee,mesh:ye}=_,se=I(ee);g.update(),m.render(d,h);const C=xe(ye),E=ge(ee,se,C.rect,"close","inset(0)",C.clipPath);E.onfinish=()=>{ee.remove(),ce(ye,!0),_=null,v=null,T=null},E.oncancel=()=>{ee.remove(),ce(ye,!0)}},pe=(ee,ye)=>{T==null||T.cancel(),_&&(_.element.remove(),ce(_.mesh,!0)),v=ee,ce(ee,!1);const se=document.createElement("img");se.src=o[ye],se.draggable=!1,se.style.position="absolute",se.style.objectFit="contain",se.style.background="transparent",se.style.boxShadow="0 28px 80px rgba(0, 0, 0, 0.35)",se.style.pointerEvents="auto",se.style.cursor="zoom-out",se.style.transformOrigin="center center",se.style.willChange="transform, clip-path, opacity",se.addEventListener("click",E=>{E.stopPropagation(),O()});const C=()=>{const E=xe(ee),Y=se.naturalWidth>0&&se.naturalHeight>0?se.naturalWidth/se.naturalHeight:1,ie=Me(Y);se.style.left=`${ie.left}px`,se.style.top=`${ie.top}px`,se.style.width=`${ie.width}px`,se.style.height=`${ie.height}px`,se.style.transform=Te(E.rect,ie),se.style.clipPath=E.clipPath,U.appendChild(se),_={element:se,mesh:ee,index:ye};const Ce=ge(se,E.rect,ie,"open",E.clipPath,"inset(0)");Ce.onfinish=()=>{T=null}};se.complete&&se.naturalWidth>0?C():se.addEventListener("load",C,{once:!0})},ke=new xg,J=new dt,Ee={x:0,y:0};let Le=!1;const Ue=ee=>{Ee.x=ee.clientX,Ee.y=ee.clientY,Le=!1},Ve=ee=>{if(Le)return;Math.hypot(ee.clientX-Ee.x,ee.clientY-Ee.y)>6&&(Le=!0)},je=ee=>{if(Le){Le=!1;return}const ye=m.domElement.getBoundingClientRect();J.x=(ee.clientX-ye.left)/ye.width*2-1,J.y=-((ee.clientY-ye.top)/ye.height)*2+1,ke.setFromCamera(J,h);const se=ke.intersectObjects(A);if(se.length===0){O();return}const C=se[0].object;v===C?O():pe(C,C.userData.imageIndex)};m.domElement.addEventListener("pointerdown",Ue),m.domElement.addEventListener("pointermove",Ve),m.domElement.addEventListener("click",je);let tt=0,_t=!1,z=performance.now();const xt=e==="spiral"?.035:.045,ut=(ee=performance.now())=>{if(_t)return;tt=requestAnimationFrame(ut);const ye=Math.min((ee-z)/1e3,.05);z=ee,!_&&!T&&(S.rotation.y+=xt*ye,e==="polyhedron"&&(S.rotation.x=Math.sin(ee*18e-5)*.12)),g.update(),m.render(d,h)};ut();const ft=()=>{const ee=a.clientWidth,ye=a.clientHeight;h.aspect=ee/ye,h.updateProjectionMatrix(),m.setSize(ee,ye)},$e=new ResizeObserver(ft);return $e.observe(a),()=>{_t=!0,cancelAnimationFrame(tt),$e.disconnect(),m.domElement.removeEventListener("pointerdown",Ue),m.domElement.removeEventListener("pointermove",Ve),m.domElement.removeEventListener("click",je),g.dispose(),T==null||T.cancel(),_==null||_.element.remove(),U.remove(),A.forEach(ee=>{S.remove(ee),ee.geometry.dispose()}),M.forEach(ee=>ee.dispose()),y.forEach(ee=>ee.dispose()),m.dispose(),m.domElement.parentNode===a&&a.removeChild(m.domElement)}},[o,e,n]),_e.jsx("div",{ref:r,className:"absolute inset-0",style:{touchAction:"none"}})}function Im({message:o="正在生成 3D 照片球...",className:e=""}){return _e.jsx("div",{className:`absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-black ${e}`,children:_e.jsxs("div",{className:"text-center",children:[_e.jsxs("div",{className:"relative w-32 h-32 mx-auto mb-6",children:[_e.jsx("div",{className:"absolute inset-0 rounded-full border-4 border-purple-500/30"}),_e.jsx("div",{className:"absolute inset-0 rounded-full border-4 border-transparent border-t-purple-500 animate-spin"}),_e.jsx("div",{className:"absolute inset-4 rounded-full border-4 border-transparent border-t-pink-500 animate-spin",style:{animationDuration:"1.5s"}}),_e.jsx("div",{className:"absolute inset-8 rounded-full border-4 border-transparent border-t-blue-500 animate-spin",style:{animationDuration:"2s"}})]}),_e.jsx("p",{className:"text-white text-xl animate-pulse",children:o})]})})}class i1 extends At.Component{constructor(){super(...arguments),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,n){console.error("3D gallery crashed:",e,n)}render(){var e;return this.state.error?_e.jsx("div",{className:"absolute inset-0 flex items-center justify-center p-6 text-white",children:_e.jsxs("div",{className:"max-w-lg bg-red-900/60 rounded-2xl p-6 backdrop-blur-md border border-red-400/40",children:[_e.jsx("p",{className:"text-lg font-bold mb-2",children:"3D 影像空间渲染出错"}),_e.jsx("pre",{className:"text-xs whitespace-pre-wrap break-all opacity-80",children:String(((e=this.state.error)==null?void 0:e.message)||this.state.error)})]})}):this.props.children}}const r1=/\.(avif|bmp|gif|heic|heif|jpe?g|png|webp)$/i,Nm=48,Wo=620,Um=Wo+180,Ju=112,Om=320,o1=58,vr=24,_r=180,Yo=[{id:"sphere",name:"照片球体",subtitle:"照片围成立体球面，适合大量回忆的沉浸式浏览",requirement:`需要 ${vr}-${_r} 张`,minPhotos:vr,maxPhotos:_r,accent:"from-violet-500 via-fuchsia-500 to-blue-500",surface:"from-violet-950 via-purple-900 to-blue-950",preview:"orb",logo:"/gallery-logos/sphere.png"},{id:"cylinder",name:"圆柱画廊",subtitle:"像环形展厅一样环绕观看，横向浏览节奏更稳定",requirement:`需要 ${vr}-${_r} 张`,minPhotos:vr,maxPhotos:_r,accent:"from-cyan-500 via-blue-500 to-violet-500",surface:"from-cyan-950 via-blue-900 to-violet-950",preview:"cylinder",logo:"/gallery-logos/cylinder.png",variant:"cylinder"},{id:"polyhedron",name:"多面体相册",subtitle:"照片分布在晶体切面上，适合更利落的高级展示",requirement:`需要 ${vr}-${_r} 张`,minPhotos:vr,maxPhotos:_r,accent:"from-amber-400 via-rose-500 to-violet-600",surface:"from-amber-950 via-rose-900 to-violet-950",preview:"polyhedron",logo:"/gallery-logos/polyhedron.png",variant:"polyhedron"},{id:"spiral",name:"螺旋星轨",subtitle:"照片沿上升轨道展开，适合时间线和成长记录",requirement:`需要 ${vr}-${_r} 张`,minPhotos:vr,maxPhotos:_r,accent:"from-emerald-400 via-cyan-500 to-indigo-600",surface:"from-emerald-950 via-cyan-900 to-indigo-950",preview:"spiral",logo:"/gallery-logos/spiral.png",variant:"spiral"}],Tl=o=>Yo.find(e=>e.id===o)??Yo[0];function Fm({logo:o,name:e,compact:n=!1,logoRef:r,transitioning:a=!1}){return n?_e.jsx("img",{ref:r,src:o,alt:`${e} logo`,className:`size-28 object-contain ${a?"opacity-0":"opacity-100"}`,draggable:!1}):_e.jsx("div",{className:`relative flex min-h-0 w-full flex-1 items-center justify-center ${a?"opacity-0":"opacity-100"}`,children:_e.jsx("img",{ref:r,src:o,alt:`${e} logo`,className:"h-full max-h-[78%] w-full max-w-[78%] object-contain",draggable:!1})})}function s1(){const[o,e]=At.useState(null),[n,r]=At.useState(null),[a,c]=At.useState([]),[f,d]=At.useState(!1),[h,m]=At.useState(!1),[g,S]=At.useState(!1),[y,M]=At.useState({done:0,total:0}),[A,T]=At.useState(!1),[_,v]=At.useState(!1),[U,P]=At.useState(!1),[D,ne]=At.useState(null),[B,k]=At.useState(!0),[Q,L]=At.useState(!1),R=At.useRef({}),G=At.useRef({}),Se=At.useRef({}),ce=At.useRef(null),Re=At.useRef(null),be=At.useRef(null),xe=At.useRef(null),Me=At.useRef(null),I=o?Tl(o):null,Te=D?Tl(D):null,ge=(I==null?void 0:I.maxPhotos)??Yo[0].maxPhotos;(I==null?void 0:I.minPhotos)??Yo[0].minPhotos;const O=()=>{xe.current&&(window.clearTimeout(xe.current),xe.current=null),Me.current&&(window.clearTimeout(Me.current),Me.current=null)};At.useEffect(()=>()=>{O()},[]);const pe=()=>{const re=window.innerWidth>=640?64:56;return new DOMRect(window.innerWidth/2-Ju/2,re,Ju,Ju)},ke=()=>{const re=pe();return new DOMRect(window.innerWidth/2-Om/2,re.bottom+24,Om,o1)},J=(re,ae=512,F=.8)=>new Promise(W=>{const q=URL.createObjectURL(re),V=new Image;let we=!1;const fe=(x,X)=>{we||(we=!0,window.clearTimeout(ue),URL.revokeObjectURL(q),W(x))},ue=window.setTimeout(()=>{fe(null)},8e3);V.onload=()=>{try{const x=Math.min(1,ae/Math.max(V.width,V.height)),X=Math.max(1,Math.round(V.width*x)),$=Math.max(1,Math.round(V.height*x)),K=document.createElement("canvas");K.width=X,K.height=$;const Pe=K.getContext("2d");if(!Pe){fe(null,!0);return}Pe.drawImage(V,0,0,X,$),K.toBlob(We=>{if(!We){fe(null,!0);return}fe(URL.createObjectURL(We),!0)},"image/jpeg",F)}catch{fe(null)}},V.onerror=()=>{fe(null)},V.src=q}),Ee=async re=>{const F=await(await fetch(re)).blob();return new Promise((W,q)=>{const V=new FileReader;V.onload=()=>W(String(V.result)),V.onerror=()=>q(V.error),V.readAsDataURL(F)})},Le=({title:re,styleId:ae,styleName:F,photoDataUrls:W,cropToSquare:q})=>{const V=JSON.stringify({title:re,styleId:ae,styleName:F,photos:W,cropToSquare:q}).replace(/</g,"\\u003c");return`<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${re}</title>
  <style>
    * { box-sizing: border-box; }
    html, body { margin: 0; width: 100%; height: 100%; overflow: hidden; background: #05030b; color: #fff; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
    body { background: radial-gradient(circle at 20% 15%, rgba(168, 85, 247, .34), transparent 30%), radial-gradient(circle at 82% 78%, rgba(59, 130, 246, .3), transparent 34%), linear-gradient(135deg, #05030b 0%, #1b1034 52%, #020617 100%); }
    .stage { position: fixed; inset: 0; perspective: 1350px; cursor: grab; touch-action: none; overflow: hidden; }
    .stage:active { cursor: grabbing; }
    .gallery { position: absolute; left: 50%; top: 50%; width: 0; height: 0; transform-style: preserve-3d; }
    .card { position: absolute; left: 0; top: 0; width: var(--w); height: var(--h); margin-left: calc(var(--w) / -2); margin-top: calc(var(--h) / -2); padding: 7px; overflow: hidden; border: 0; border-radius: 16px; background: linear-gradient(135deg, var(--c1), rgba(255,255,255,.94) 48%, var(--c2)); box-shadow: 0 0 10px var(--c1), 0 0 20px color-mix(in srgb, var(--c2) 76%, transparent), 0 18px 48px rgba(0,0,0,.42); transform-style: preserve-3d; backface-visibility: visible; cursor: pointer; appearance: none; }
    .card::before { content: ""; position: absolute; inset: 2px; border-radius: 14px; border: 2px solid rgba(255,255,255,.78); pointer-events: none; }
    .card::after { content: ""; position: absolute; inset: 0; border-radius: 16px; box-shadow: inset 0 0 12px rgba(255,255,255,.52), inset 0 0 24px var(--c1); pointer-events: none; }
    .card img { display: block; width: 100%; height: 100%; object-fit: var(--fit); user-select: none; -webkit-user-drag: none; border-radius: 10px; background: rgba(255,255,255,.06); pointer-events: none; }
    .topbar, .hint { position: fixed; z-index: 5; border: 1px solid rgba(255,255,255,.18); background: rgba(0,0,0,.38); backdrop-filter: blur(16px); box-shadow: 0 18px 48px rgba(0,0,0,.25); }
    .topbar { left: 20px; top: 20px; display: flex; align-items: center; gap: 12px; max-width: calc(100vw - 40px); padding: 12px 16px; border-radius: 999px; }
    .title { font-weight: 800; white-space: nowrap; }
    .meta { color: rgba(255,255,255,.66); font-size: 13px; white-space: nowrap; }
    .hint { right: 20px; bottom: 20px; padding: 10px 14px; border-radius: 999px; color: rgba(255,255,255,.76); font-size: 13px; }
    .lightbox { position: fixed; inset: 0; z-index: 10; display: block; opacity: 0; pointer-events: none; background: transparent; transition: opacity 180ms ease; }
    .lightbox.open { opacity: 1; pointer-events: auto; }
    .lightbox img { position: fixed; display: block; max-width: none; max-height: none; object-fit: contain; border-radius: 18px; box-shadow: 0 28px 90px rgba(0,0,0,.55); transform-origin: center center; will-change: left, top, width, height, border-radius; pointer-events: none; }
    .close { position: fixed; right: 20px; top: 20px; width: 44px; height: 44px; border: 0; border-radius: 50%; background: rgba(255,255,255,.9); color: #111827; font-size: 24px; cursor: pointer; opacity: 0; transition: opacity 160ms ease; }
    .lightbox.open .close { opacity: 1; }
    @media (max-width: 720px) {
      .topbar { left: 12px; top: 12px; padding: 10px 12px; gap: 8px; }
      .title { max-width: 42vw; overflow: hidden; text-overflow: ellipsis; }
      .meta, .hint { font-size: 12px; }
      .hint { right: 12px; bottom: 12px; }
    }
  </style>
</head>
<body>
  <div class="topbar">
    <div class="title"></div>
    <div class="meta"></div>
  </div>
  <div class="stage" aria-label="3D 相册预览">
    <div class="gallery"></div>
  </div>
  <div class="hint">拖动旋转 · 滚轮/双指缩放 · 点击照片放大</div>
  <div class="lightbox" role="dialog" aria-modal="true">
    <button class="close" type="button" aria-label="关闭">×</button>
    <img alt="" />
  </div>
  <script>
    const data = ${V};
    const gallery = document.querySelector('.gallery');
    const stage = document.querySelector('.stage');
    const title = document.querySelector('.title');
    const meta = document.querySelector('.meta');
    const lightbox = document.querySelector('.lightbox');
    const lightboxImage = lightbox.querySelector('img');
    const closeButton = lightbox.querySelector('.close');
    const photos = data.photos;
    const fit = data.cropToSquare ? 'cover' : 'contain';
    const photoAspectRatio = 1.08;
    const pxScale = 52;
    const frameColors = [['#23d7ff', '#ff42df'], ['#4a7dff', '#35f0ff'], ['#ff52cf', '#8b5cff'], ['#2ae6ff', '#9d5cff']];
    let rotationX = data.styleId === 'spiral' ? -10 : -7;
    let rotationY = data.styleId === 'polyhedron' ? -18 : 0;
    let targetRotationX = rotationX;
    let targetRotationY = rotationY;
    let zoom = Math.min(window.innerWidth, window.innerHeight) < 720 ? .46 : .9;
    let targetZoom = zoom;
    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let lastX = 0;
    let lastY = 0;
    let moved = false;
    let activeCard = null;
    let lightboxIsOpen = false;
    let lightboxTransitionTimer = 0;
    const activePointers = new Map();
    let isPinching = false;
    let pinchStartDistance = 0;
    let pinchStartZoom = 1;

    title.textContent = data.styleName;
    meta.textContent = photos.length + ' 张照片';

    function clamp(value, min, max) {
      return Math.min(max, Math.max(min, value));
    }

    function getDefaultPhotoSize(total) {
      return clamp(30 / Math.sqrt(Math.max(total, 1)), 1.78, 2.6) * pxScale;
    }

    function getRingColumnCount(total) {
      const targetRows = total > 140 ? 5 : total > 84 ? 4 : 3;
      return clamp(Math.ceil(total / targetRows), 16, 36);
    }

    function buildSpherePlacements(total) {
      const radius = 11 * pxScale;
      const photoSize = getDefaultPhotoSize(total);
      const ringCount = clamp(Math.round(Math.sqrt(Math.max(total, 1)) * .72), 5, 10);
      const latitudeSpan = Math.PI * .78;
      const latitudeStart = latitudeSpan / 2;
      const latitudeGap = ringCount > 1 ? latitudeSpan / (ringCount - 1) : 0;
      const rings = Array.from({ length: ringCount }, (_, ring) => {
        const centerLat = latitudeStart - latitudeGap * ring;
        const radiusRatio = Math.max(.12, Math.cos(centerLat));
        const ringRadius = radiusRatio * radius;
        return {
          centerLat,
          radiusRatio,
          capacity: Math.max(1, Math.floor((Math.PI * 2 * ringRadius) / (photoSize * 1.08))),
          weight: Math.max(1, Math.floor((Math.PI * 2 * ringRadius) / (photoSize * 1.08))),
          count: 0,
          longitudeOffset: 0,
        };
      });

      let remaining = total;
      if (remaining >= ringCount) {
        rings.forEach((ring) => {
          if (remaining > 0) {
            ring.count = 1;
            remaining -= 1;
          }
        });
      }

      while (remaining > 0) {
        const candidates = rings.map((ring, index) => ({ ring, index })).filter(({ ring }) => ring.count < ring.capacity);
        if (candidates.length === 0) break;
        const target = candidates.reduce((best, current) => {
          const currentFill = current.ring.count / current.ring.weight;
          const bestFill = best.ring.count / best.ring.weight;
          if (currentFill !== bestFill) return currentFill < bestFill ? current : best;
          return Math.abs(current.index - (ringCount - 1) / 2) < Math.abs(best.index - (ringCount - 1) / 2) ? current : best;
        });
        const mirrorIndex = ringCount - 1 - target.index;
        const mirror = rings[mirrorIndex];
        const canAddMirror = mirrorIndex !== target.index && remaining >= 2 && mirror.count < mirror.capacity;
        target.ring.count += 1;
        remaining -= 1;
        if (canAddMirror) {
          mirror.count += 1;
          remaining -= 1;
        }
      }

      rings.forEach((ring, ringIndex) => {
        if (ring.count <= 0) return;
        const previousRing = rings[ringIndex - 1];
        ring.longitudeOffset = previousRing && previousRing.count > 0
          ? previousRing.longitudeOffset + (Math.PI * 2 / ring.count) * .5
          : 0;
      });

      const placements = [];
      rings.forEach((ring) => {
        for (let indexInRing = 0; indexInRing < ring.count && placements.length < total; indexInRing += 1) {
          const lon = (indexInRing / ring.count) * Math.PI * 2 + ring.longitudeOffset;
          const cosLat = Math.cos(ring.centerLat);
          const x = Math.cos(lon) * cosLat * radius;
          const y = Math.sin(ring.centerLat) * radius;
          const z = Math.sin(lon) * cosLat * radius;
          const ringRadius = ring.radiusRatio * radius;
          const cellAngle = (Math.PI * 2) / ring.count;
          const visualWidth = Math.min(cellAngle * ringRadius * .92, photoSize * photoAspectRatio);
          placements.push({
            x,
            y,
            z,
            rx: -ring.centerLat,
            ry: Math.PI / 2 - lon,
            rz: 0,
            w: visualWidth,
            h: photoSize,
          });
        }
      });
      return placements;
    }

    function getPlacement(index, total) {
      const mode = data.styleId;
      if (mode === 'sphere') return buildSpherePlacements(total)[index];
      if (mode === 'cylinder') {
        const photoSizeDefault = getDefaultPhotoSize(total);
        const columns = getRingColumnCount(total);
        const rows = Math.ceil(total / columns);
        const column = index % columns;
        const row = Math.floor(index / columns);
        const angle = (column / columns) * Math.PI * 2;
        const radius = clamp(columns * .38, 10.8, 14.2) * pxScale;
        const yGap = clamp(10.6 / Math.max(1, rows - 1), 2.25, 2.95) * pxScale;
        const slotWidth = (Math.PI * 2 * radius) / columns;
        const photoSize = Math.min((slotWidth * .9) / photoAspectRatio, yGap * .98, photoSizeDefault);
        return { x: Math.sin(angle) * radius, y: (rows - 1) * yGap * .5 - row * yGap, z: Math.cos(angle) * radius, rx: 0, ry: angle, rz: 0, w: photoSize * photoAspectRatio, h: photoSize };
      }
      if (mode === 'spiral') {
        const photoSizeDefault = getDefaultPhotoSize(total);
        const progress = total === 1 ? .5 : index / (total - 1);
        const turns = clamp(total / 34, 2.8, 4.8);
        const angle = progress * Math.PI * 2 * turns;
        const radius = 13.4 * pxScale;
        const ySpan = Math.max((photoSizeDefault / pxScale) * turns * 1.18, clamp(total * .062, 8.4, 12.8)) * pxScale;
        const photosPerTurn = Math.max(1, total / turns);
        const slotWidth = (Math.PI * 2 * radius) / photosPerTurn;
        const photoSize = Math.min((slotWidth * .96) / photoAspectRatio, photoSizeDefault);
        return { x: Math.sin(angle) * radius, y: (.5 - progress) * ySpan, z: Math.cos(angle) * radius, rx: 0, ry: angle, rz: 0, w: photoSize * photoAspectRatio, h: photoSize };
      }
      const photoSizeDefault = getDefaultPhotoSize(total);
      const faceIndex = index % 6;
      const facePhotoCount = Math.floor((total + 5 - faceIndex) / 6);
      const indexInFace = Math.floor(index / 6);
      const columns = Math.min(5, Math.ceil(Math.sqrt(facePhotoCount)));
      const rows = Math.ceil(facePhotoCount / columns);
      const row = Math.floor(indexInFace / columns);
      const column = indexInFace % columns;
      const cubeHalfSize = 7.4 * pxScale;
      const cellWidth = (cubeHalfSize * 2) / columns;
      const cellHeight = (cubeHalfSize * 2) / rows;
      const photoSize = Math.min((cellWidth * .94) / photoAspectRatio, cellHeight * .94, photoSizeDefault);
      const offsetX = -cubeHalfSize + cellWidth * (column + .5);
      const offsetY = cubeHalfSize - cellHeight * (row + .5);
      const out = 4;
      const faces = [
        { x: offsetX, y: offsetY, z: cubeHalfSize + out, rx: 0, ry: 0, rz: 0 },
        { x: -offsetX, y: offsetY, z: -cubeHalfSize - out, rx: 0, ry: Math.PI, rz: 0 },
        { x: cubeHalfSize + out, y: offsetY, z: -offsetX, rx: 0, ry: Math.PI / 2, rz: 0 },
        { x: -cubeHalfSize - out, y: offsetY, z: offsetX, rx: 0, ry: -Math.PI / 2, rz: 0 },
        { x: offsetX, y: cubeHalfSize + out, z: -offsetY, rx: -Math.PI / 2, ry: 0, rz: 0 },
        { x: offsetX, y: -cubeHalfSize - out, z: offsetY, rx: Math.PI / 2, ry: 0, rz: 0 },
      ];
      return { ...faces[faceIndex], w: photoSize * photoAspectRatio, h: photoSize };
    }

    function renderCards() {
      gallery.innerHTML = '';
      const placements = data.styleId === 'sphere' ? buildSpherePlacements(photos.length) : null;
      photos.forEach((src, index) => {
        const card = document.createElement('button');
        const img = document.createElement('img');
        const p = placements ? placements[index] : getPlacement(index, photos.length);
        const colors = frameColors[index % frameColors.length];
        card.className = 'card';
        card.type = 'button';
        card.dataset.index = String(index);
        card.style.setProperty('--w', p.w + 'px');
        card.style.setProperty('--h', p.h + 'px');
        card.style.setProperty('--fit', fit);
        card.style.setProperty('--c1', colors[0]);
        card.style.setProperty('--c2', colors[1]);
        card.style.transform = 'translate3d(' + p.x + 'px,' + p.y + 'px,' + p.z + 'px) rotateY(' + p.ry + 'rad) rotateX(' + p.rx + 'rad) rotateZ(' + p.rz + 'rad)';
        img.src = src;
        img.alt = '照片 ' + (index + 1);
        card.appendChild(img);
        card.addEventListener('click', (event) => {
          event.preventDefault();
        });
        gallery.appendChild(card);
      });
    }

    function updateTransform() {
      gallery.style.transform = 'translate(-50%, -50%) scale(' + zoom + ') rotateX(' + rotationX + 'deg) rotateY(' + rotationY + 'deg)';
    }

    function animate() {
      if (!isDragging && !isPinching) targetRotationY += .035;
      rotationX += (targetRotationX - rotationX) * .18;
      rotationY += (targetRotationY - rotationY) * .18;
      zoom += (targetZoom - zoom) * .2;
      updateTransform();
      requestAnimationFrame(animate);
    }

    function getPreviewRect(aspectRatio) {
      const maxWidth = Math.min(window.innerWidth * .78, 860);
      const maxHeight = Math.min(window.innerHeight * .78, 860);
      const width = Math.min(maxWidth, maxHeight * aspectRatio);
      const height = width / aspectRatio;
      return {
        left: (window.innerWidth - width) / 2,
        top: (window.innerHeight - height) / 2,
        width,
        height,
      };
    }

    function setLightboxImageRect(rect, borderRadius) {
      lightboxImage.style.left = rect.left + 'px';
      lightboxImage.style.top = rect.top + 'px';
      lightboxImage.style.width = rect.width + 'px';
      lightboxImage.style.height = rect.height + 'px';
      lightboxImage.style.borderRadius = borderRadius;
    }

    function openLightbox(src, card) {
      if (!card || lightboxIsOpen) return;
      window.clearTimeout(lightboxTransitionTimer);
      activeCard = card;
      lightboxIsOpen = true;
      const sourceRect = card.getBoundingClientRect();
      lightboxImage.src = src;
      lightboxImage.style.transition = 'none';
      lightboxImage.style.objectFit = fit;
      setLightboxImageRect(sourceRect, '14px');
      lightbox.classList.add('open');

      const startAnimation = () => {
        const aspectRatio = lightboxImage.naturalWidth > 0 && lightboxImage.naturalHeight > 0
          ? lightboxImage.naturalWidth / lightboxImage.naturalHeight
          : sourceRect.width / Math.max(1, sourceRect.height);
        const targetRect = getPreviewRect(aspectRatio);
        requestAnimationFrame(() => {
          lightboxImage.style.transition = 'left 480ms cubic-bezier(0.19, 1, 0.22, 1), top 480ms cubic-bezier(0.19, 1, 0.22, 1), width 480ms cubic-bezier(0.19, 1, 0.22, 1), height 480ms cubic-bezier(0.19, 1, 0.22, 1), border-radius 480ms cubic-bezier(0.19, 1, 0.22, 1)';
          lightboxImage.style.objectFit = 'contain';
          setLightboxImageRect(targetRect, '28px');
        });
      };

      if (lightboxImage.complete && lightboxImage.naturalWidth > 0) {
        startAnimation();
      } else {
        lightboxImage.addEventListener('load', startAnimation, { once: true });
      }
    }

    function closeLightbox() {
      if (!lightboxIsOpen) return;
      window.clearTimeout(lightboxTransitionTimer);
      const targetRect = activeCard ? activeCard.getBoundingClientRect() : {
        left: window.innerWidth / 2,
        top: window.innerHeight / 2,
        width: 1,
        height: 1,
      };
      lightboxImage.style.transition = 'left 360ms cubic-bezier(0.19, 1, 0.22, 1), top 360ms cubic-bezier(0.19, 1, 0.22, 1), width 360ms cubic-bezier(0.19, 1, 0.22, 1), height 360ms cubic-bezier(0.19, 1, 0.22, 1), border-radius 360ms cubic-bezier(0.19, 1, 0.22, 1)';
      lightboxImage.style.objectFit = fit;
      setLightboxImageRect(targetRect, '14px');
      lightboxTransitionTimer = window.setTimeout(() => {
        lightbox.classList.remove('open');
        lightboxImage.removeAttribute('src');
        activeCard = null;
        lightboxIsOpen = false;
      }, 330);
    }

    function getPointerDistance() {
      const points = Array.from(activePointers.values());
      if (points.length < 2) return 0;
      return Math.hypot(points[0].x - points[1].x, points[0].y - points[1].y);
    }

    function endPointer(pointerId) {
      activePointers.delete(pointerId);
      if (activePointers.size < 2) {
        isPinching = false;
        pinchStartDistance = 0;
      }
      if (activePointers.size === 0) {
        isDragging = false;
      }
    }

    stage.addEventListener('pointerdown', (event) => {
      activePointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
      isDragging = true;
      moved = false;
      startX = lastX = event.clientX;
      startY = lastY = event.clientY;
      stage.setPointerCapture(event.pointerId);
      if (activePointers.size === 2) {
        isPinching = true;
        moved = true;
        pinchStartDistance = getPointerDistance();
        pinchStartZoom = targetZoom;
      }
    });
    stage.addEventListener('pointermove', (event) => {
      if (!activePointers.has(event.pointerId)) return;
      activePointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
      if (isPinching && activePointers.size >= 2) {
        const distance = getPointerDistance();
        if (pinchStartDistance > 0) {
          targetZoom = clamp(pinchStartZoom * (distance / pinchStartDistance), .28, 2.8);
        }
        moved = true;
        return;
      }
      if (!isDragging || activePointers.size !== 1) return;
      const dx = event.clientX - lastX;
      const dy = event.clientY - lastY;
      if (Math.abs(event.clientX - startX) + Math.abs(event.clientY - startY) > 8) moved = true;
      targetRotationY += dx * .22;
      targetRotationX = clamp(targetRotationX - dy * .16, -78, 78);
      lastX = event.clientX;
      lastY = event.clientY;
    });
    stage.addEventListener('pointerup', (event) => {
      const wasPinching = isPinching;
      endPointer(event.pointerId);
      if (!moved) {
        const pointerTarget = document.elementFromPoint(event.clientX, event.clientY);
        const card = pointerTarget && pointerTarget.closest ? pointerTarget.closest('.card') : null;
        if (card) openLightbox(photos[Number(card.dataset.index)], card);
      }
      setTimeout(() => { if (!wasPinching) moved = false; }, 80);
    });
    stage.addEventListener('pointercancel', (event) => {
      endPointer(event.pointerId);
      moved = true;
    });
    stage.addEventListener('wheel', (event) => {
      event.preventDefault();
      const speed = event.ctrlKey ? .0032 : .0018;
      targetZoom = clamp(targetZoom * Math.exp(-event.deltaY * speed), .28, 2.8);
    }, { passive: false });
    closeButton.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (event) => {
      closeLightbox();
    });
    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeLightbox();
    });

    renderCards();
    animate();
  <\/script>
</body>
</html>`},Ue=async()=>{if(!(!I||Q)){L(!0);try{const re=await Promise.all(a.map(V=>Ee(V))),ae=Le({title:`${I.name}-3D相册`,styleId:I.id,styleName:I.name,photoDataUrls:re,cropToSquare:B}),F=new Blob([ae],{type:"text/html;charset=utf-8"}),W=URL.createObjectURL(F),q=document.createElement("a");q.href=W,q.download=`${I.name}-3D相册.html`,document.body.appendChild(q),q.click(),q.remove(),URL.revokeObjectURL(W)}catch{alert("导出失败，请稍后重试")}finally{L(!1)}}},Ve=async re=>{if(g)return;const ae=re.filter(ue=>ue.type.startsWith("image/")||r1.test(ue.name)),F=re.length-ae.length;if(ae.length===0){alert("请选择有效的图片文件");return}const W=ge-a.length;if(W<=0){alert(`已达上限 ${ge} 张，请先清空或减少照片再上传`);return}let q=ae;ae.length>W&&(q=ae.slice(0,W),alert(`${(I==null?void 0:I.name)??"当前样式"}最多 ${ge} 张，已自动只取前 ${W} 张（剩余 ${ae.length-W} 张被忽略）`)),S(!0),M({done:0,total:q.length});const V=[];let we=0;for(const ue of q)try{const x=await J(ue);x?V.push(x):we+=1}catch{we+=1}finally{M({done:V.length+we,total:q.length})}const fe=F+we;c(ue=>{const x=Math.max(0,ge-ue.length),X=V.slice(0,x);return V.slice(x).forEach($=>URL.revokeObjectURL($)),X.length>0?[...ue,...X]:ue}),S(!1),fe>0&&alert(`已跳过 ${fe} 个不支持或无法读取的文件，其余图片已继续上传`)},je=re=>{re.preventDefault(),T(!0)},tt=re=>{re.preventDefault(),T(!1)},_t=re=>{re.preventDefault(),T(!1),Ve(Array.from(re.dataTransfer.files))},z=re=>{const ae=re.target.files?Array.from(re.target.files):[];re.target.value="",Ve(ae)},xt=re=>{if(a.length<re.minPhotos)return`${re.name} 至少需要 ${re.minPhotos} 张照片，当前只有 ${a.length} 张。`;if(a.length>re.maxPhotos)return`${re.name} 最多支持 ${re.maxPhotos} 张照片，当前已有 ${a.length} 张。`;if(re.multipleOf&&a.length%re.multipleOf!==0){const ae=Math.floor(a.length/re.multipleOf)*re.multipleOf,F=Math.min(re.maxPhotos,ae+re.multipleOf);return`${re.name} 每一圈 ${re.multipleOf} 张，照片数量需要是 ${re.multipleOf} 的倍数。当前 ${a.length} 张，可调整为 ${ae||re.multipleOf}${F!==ae?` 或 ${F}`:""} 张。`}return null},ut=()=>{if(!I)return;const re=xt(I);if(re){alert(re);return}m(!0),setTimeout(()=>{m(!1),d(!0)},1500)},ft=()=>{O(),a.forEach(re=>URL.revokeObjectURL(re)),c([]),d(!1),m(!1),ne(null)},$e=()=>{O(),d(!1),m(!1),ne(null)},ee=re=>{if(re===o||D)return;const ae=Tl(re),F=xt(ae);if(F){alert(F);return}O(),ne(re),xe.current=window.setTimeout(()=>{e(re),xe.current=null},260),Me.current=window.setTimeout(()=>{ne(null),Me.current=null},900)},ye=(re,ae)=>{var q,V;const F=Tl(re),W=ae==null?void 0:ae.getBoundingClientRect();if(W){const we=((q=G.current[re])==null?void 0:q.getBoundingClientRect())??W,fe=((V=Se.current[re])==null?void 0:V.getBoundingClientRect())??W;r({style:F,from:W,logoFrom:we,logoTo:pe(),titleFrom:fe,titleTo:ke(),expanded:!1,fading:!1,direction:"enter"}),e(re),v(!1),P(!0),requestAnimationFrame(()=>{requestAnimationFrame(()=>{var X,$;const ue=((X=ce.current)==null?void 0:X.getBoundingClientRect())??pe(),x=(($=Re.current)==null?void 0:$.getBoundingClientRect())??ke();r(K=>K&&{...K,logoTo:ue,titleTo:x,expanded:!0}),window.setTimeout(()=>{v(!0),P(!1)},Wo-120),window.setTimeout(()=>{r(K=>K&&{...K,fading:!0})},Wo),window.setTimeout(()=>{r(null)},Um)})})}else e(re),v(!0);c([]),d(!1),m(!1),ne(null)},se=()=>{var re,ae;if(O(),ne(null),I){const F=I,W=new DOMRect(0,0,window.innerWidth,window.innerHeight),q=((re=ce.current)==null?void 0:re.getBoundingClientRect())??pe(),V=((ae=Re.current)==null?void 0:ae.getBoundingClientRect())??ke();r({style:F,from:W,logoFrom:q,logoTo:q,titleFrom:V,titleTo:V,expanded:!0,fading:!1,direction:"exit"}),v(!1),e(null),requestAnimationFrame(()=>{requestAnimationFrame(()=>{var X,$;const we=R.current[F.id],fe=(we==null?void 0:we.getBoundingClientRect())??W,ue=((X=G.current[F.id])==null?void 0:X.getBoundingClientRect())??fe,x=(($=Se.current[F.id])==null?void 0:$.getBoundingClientRect())??fe;r(K=>K&&{...K,from:fe,logoFrom:ue,titleFrom:x,expanded:!1}),window.setTimeout(()=>{r(null)},Um)})}),window.setTimeout(()=>{a.forEach(we=>URL.revokeObjectURL(we)),c([])},220)}else a.forEach(F=>URL.revokeObjectURL(F)),c([]),e(null);d(!1),m(!1)},C=re=>{c(ae=>{const F=ae[re];return F&&URL.revokeObjectURL(F),ae.filter((W,q)=>q!==re)})},E=()=>{if(!n)return null;const re=window.innerWidth,ae=window.innerHeight,q=n.expanded?{left:0,top:0,width:re,height:ae,borderRadius:n.fading?0:Nm,opacity:n.fading?0:1}:{left:n.from.left,top:n.from.top,width:n.from.width,height:n.from.height,borderRadius:Nm,opacity:1},V=n.expanded?n.logoTo:n.logoFrom,we=n.expanded?n.titleTo:n.titleFrom;return _e.jsxs("div",{className:"pointer-events-none fixed inset-0 z-50",children:[_e.jsxs("div",{className:`absolute overflow-hidden border border-white/20 bg-gradient-to-br ${n.style.surface} shadow-[0_32px_120px_rgba(0,0,0,0.45)] backdrop-blur-2xl transition-[left,top,width,height,opacity] duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]`,style:{...q,transitionDuration:`${Wo}ms`},children:[_e.jsx("div",{className:"absolute left-[-8rem] top-[-8rem] h-96 w-96 rounded-full bg-purple-500/40 blur-3xl"}),_e.jsx("div",{className:"absolute bottom-[-10rem] right-[-8rem] h-[28rem] w-[28rem] rounded-full bg-blue-500/35 blur-3xl"})]}),_e.jsx("img",{src:n.style.logo,alt:"","aria-hidden":"true",className:"fixed object-contain transition-all ease-[cubic-bezier(0.19,1,0.22,1)]",style:{left:V.left,top:V.top,width:V.width,height:V.height,opacity:1,transitionDuration:`${Wo}ms`},draggable:!1}),_e.jsx("div",{className:"fixed whitespace-nowrap bg-gradient-to-r from-white via-fuchsia-100 to-blue-100 bg-clip-text font-bold text-transparent transition-all ease-[cubic-bezier(0.19,1,0.22,1)]",style:{left:we.left,top:we.top,width:we.width,height:we.height,fontSize:n.expanded?"2.25rem":"1.5rem",lineHeight:n.expanded?"2.5rem":"2rem",textAlign:n.expanded?"center":"left",opacity:1,transitionDuration:`${Wo}ms`},children:n.style.name})]})},Y=()=>U?_e.jsx("div",{className:"pointer-events-none fixed inset-0 z-40 bg-gradient-to-br from-slate-950 via-purple-950 to-black",children:_e.jsxs("div",{className:"absolute inset-0 opacity-30",children:[_e.jsx("div",{className:"absolute left-[-8rem] top-[-8rem] h-96 w-96 rounded-full bg-purple-500 blur-3xl"}),_e.jsx("div",{className:"absolute bottom-[-10rem] right-[-8rem] h-[28rem] w-[28rem] rounded-full bg-blue-500 blur-3xl"})]})}):null;if(!I)return _e.jsxs("div",{className:"min-h-dvh bg-gradient-to-br from-slate-950 via-purple-950 to-black text-white relative overflow-y-auto xl:h-dvh xl:overflow-hidden",style:{"--home-edge-gap":"clamp(20px, 4.4vw, 96px)"},children:[_e.jsxs("div",{className:"absolute inset-0 opacity-30 pointer-events-none",children:[_e.jsx("div",{className:"absolute left-[-8rem] top-[-8rem] h-96 w-96 rounded-full bg-purple-500 blur-3xl"}),_e.jsx("div",{className:"absolute bottom-[-10rem] right-[-8rem] h-[28rem] w-[28rem] rounded-full bg-blue-500 blur-3xl"})]}),_e.jsxs("main",{className:"relative z-10 mx-auto flex min-h-dvh w-full flex-col px-[var(--home-edge-gap)] pb-[var(--home-edge-gap)] pt-8 xl:h-dvh xl:min-h-0",children:[_e.jsxs("header",{className:"mb-8 grid grid-cols-1 items-end justify-between gap-6 md:grid-cols-2 xl:grid-cols-[repeat(4,minmax(0,410px))]",children:[_e.jsxs("div",{className:"md:col-span-1 xl:col-span-2",children:[_e.jsxs("div",{className:"mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/75 backdrop-blur-md",children:[_e.jsx(Cp,{className:"size-4"}),"高级展厅式 3D 相册"]}),_e.jsx("h1",{className:"text-5xl font-bold tracking-normal sm:text-6xl",children:"3D 影像空间"}),_e.jsx("p",{className:"mt-4 max-w-2xl text-lg leading-8 text-white/68",children:"先选择展示样式，再按样式要求上传照片，生成可旋转、可放大的立体影像展厅。"})]}),_e.jsxs("div",{className:"w-full rounded-[28px] border border-white/10 bg-white/10 px-5 py-4 text-sm text-white/70 backdrop-blur-xl shadow-2xl md:col-start-2 xl:col-start-4",children:[_e.jsxs("div",{className:"flex items-center gap-2 text-white",children:[_e.jsx(Mv,{className:"size-4"}),"首批 4 种空间样式"]}),_e.jsx("p",{className:"mt-1",children:"照片球体 / 圆柱画廊 / 多面体相册 / 螺旋星轨"})]})]}),_e.jsx("section",{className:"grid min-h-[430px] flex-1 grid-cols-1 items-stretch justify-between gap-6 md:grid-cols-2 xl:min-h-0 xl:grid-cols-[repeat(4,minmax(0,410px))]",children:Yo.map(re=>_e.jsx("button",{type:"button",ref:ae=>{R.current[re.id]=ae},onClick:ae=>ye(re.id,ae.currentTarget),className:`group relative flex h-full min-h-[430px] flex-col overflow-hidden rounded-[48px] bg-gradient-to-br ${re.surface} p-4 text-left shadow-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 xl:min-h-0`,children:_e.jsxs("div",{className:"relative z-10 flex min-h-0 flex-1 flex-col",children:[_e.jsx(Fm,{logo:re.logo,name:re.name,transitioning:(n==null?void 0:n.style.id)===re.id,logoRef:ae=>{G.current[re.id]=ae}}),_e.jsxs("div",{className:"flex shrink-0 flex-col pt-4 xl:pt-3",children:[_e.jsxs("div",{className:"mb-3 flex items-center justify-between gap-3",children:[_e.jsx("h2",{ref:ae=>{Se.current[re.id]=ae},className:`text-2xl font-semibold text-white ${(n==null?void 0:n.style.id)===re.id?"opacity-0":"opacity-100"}`,children:re.name}),_e.jsx("span",{className:`h-2.5 w-12 rounded-full bg-gradient-to-r ${re.accent}`})]}),_e.jsx("p",{className:"min-h-[4.5rem] text-sm leading-6 text-white/62 xl:min-h-[3.75rem] xl:leading-5",children:re.subtitle}),_e.jsxs("div",{className:"mt-4 flex items-center justify-between border-t border-white/10 pt-4 xl:mt-3 xl:pt-3",children:[_e.jsx("span",{className:"text-sm text-white/55",children:re.requirement}),_e.jsx("span",{className:"rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition-transform group-hover:scale-105",children:"选择"})]})]})]})},re.id))})]}),E()]});if(h)return _e.jsx(Im,{message:`正在生成 ${I.name}...`});if(f)return _e.jsxs("div",{className:"size-full bg-gradient-to-br from-gray-900 via-purple-900 to-black relative overflow-hidden",children:[_e.jsxs("div",{className:"absolute inset-0 opacity-20",children:[_e.jsx("div",{className:"absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"}),_e.jsx("div",{className:"absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse",style:{animationDelay:"1s"}})]}),_e.jsx(i1,{children:I.id==="sphere"?_e.jsx(e1,{images:a,cropToSquare:B}):_e.jsx(n1,{images:a,variant:I.variant??"cylinder",cropToSquare:B})}),_e.jsxs("div",{className:"absolute top-3 left-3 sm:top-6 sm:left-6 flex gap-3 z-10",children:[_e.jsxs("button",{onClick:$e,className:"px-3 py-2 sm:px-6 sm:py-3 bg-white/90 hover:bg-white text-black rounded-full flex items-center gap-1.5 sm:gap-2 transition-all shadow-2xl active:scale-95 sm:hover:scale-105 text-sm sm:text-base",children:[_e.jsx(Rp,{className:"w-4 h-4 sm:w-5 sm:h-5"}),"退出预览"]}),_e.jsx("button",{onClick:se,className:"px-3 py-2 sm:px-6 sm:py-3 bg-white/80 hover:bg-white text-black rounded-full flex items-center gap-1.5 sm:gap-2 transition-all shadow-2xl active:scale-95 sm:hover:scale-105 text-sm sm:text-base",children:"重新选样式"})]}),_e.jsx("div",{className:"absolute left-3 top-1/2 z-10 w-[180px] max-w-[calc(100vw-1.5rem)] -translate-y-1/2 rounded-[40px] border border-white/14 bg-black/28 p-4 shadow-2xl shadow-black/25 backdrop-blur-xl sm:left-6",children:_e.jsx("div",{className:"flex flex-col gap-3 rounded-[28px]",children:Yo.map(re=>{const ae=I.id===re.id;return _e.jsxs("button",{type:"button",onClick:()=>ee(re.id),"aria-current":ae?"true":void 0,className:`group flex h-14 w-full shrink-0 items-center gap-2 rounded-[26px] px-3 text-left text-sm font-semibold transition-all active:scale-95 ${ae?"bg-white text-slate-950 shadow-xl shadow-black/20":"bg-white/12 text-white/90 shadow-sm hover:bg-white/20"}`,children:[_e.jsx("img",{src:re.logo,alt:"","aria-hidden":"true",className:"size-7 shrink-0 object-contain",draggable:!1}),_e.jsx("span",{className:"min-w-0 flex-1 whitespace-nowrap",children:re.name})]},re.id)})})}),_e.jsxs("div",{className:"absolute top-3 right-3 sm:top-6 sm:right-6 flex max-w-[calc(100vw-1.5rem)] flex-wrap justify-end gap-3 z-10",children:[_e.jsxs("button",{type:"button",onClick:Ue,disabled:Q,className:"px-3 py-2 sm:px-6 sm:py-3 bg-white/90 hover:bg-white text-black rounded-full flex items-center gap-1.5 sm:gap-2 transition-all shadow-2xl active:scale-95 sm:hover:scale-105 text-sm sm:text-base disabled:cursor-not-allowed disabled:opacity-60",children:[_e.jsx(_v,{className:"w-4 h-4 sm:w-5 sm:h-5"}),Q?"导出中":"导出HTML"]}),_e.jsxs("button",{type:"button",onClick:()=>k(re=>!re),"aria-pressed":B,className:"px-3 py-2 sm:px-6 sm:py-3 bg-white/90 hover:bg-white text-black rounded-full flex items-center gap-1.5 sm:gap-2 transition-all shadow-2xl active:scale-95 sm:hover:scale-105 text-sm sm:text-base",children:[_e.jsx(gv,{className:"w-4 h-4 sm:w-5 sm:h-5"}),_e.jsx("span",{children:"1:1 裁剪"}),_e.jsx("span",{className:`relative ml-1 h-6 w-11 rounded-full p-0.5 transition-colors ${B?"bg-purple-600":"bg-slate-300"}`,"aria-hidden":"true",children:_e.jsx("span",{className:`block size-5 rounded-full bg-white shadow-md transition-transform duration-200 ease-out ${B?"translate-x-5":"translate-x-0"}`})})]}),_e.jsxs("button",{onClick:ft,className:"px-3 py-2 sm:px-6 sm:py-3 bg-white/90 hover:bg-white text-black rounded-full flex items-center gap-1.5 sm:gap-2 transition-all shadow-2xl active:scale-95 sm:hover:scale-105 text-sm sm:text-base",children:[_e.jsx(Rv,{className:"w-4 h-4 sm:w-5 sm:h-5"}),"重新开始"]})]}),_e.jsxs("div",{className:"absolute bottom-3 left-3 sm:bottom-6 sm:left-6 bg-black/60 text-white px-3 py-1.5 sm:px-6 sm:py-3 rounded-full backdrop-blur-md border border-white/20 shadow-xl text-xs sm:text-base",children:["📸 ",I.name," · ",a.length," 张"]}),_e.jsx("div",{className:"absolute bottom-3 right-3 sm:bottom-6 sm:right-6 bg-black/40 text-white/80 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full backdrop-blur-sm text-[10px] sm:text-sm",children:"🎮 单指旋转 · 双指缩放"}),Te&&_e.jsx(Im,{message:`正在切换到 ${Te.name}...`,className:"z-30 bg-gradient-to-br from-gray-900/95 via-purple-900/95 to-black/95"})]});const ie=a.length<=1?112:a.length<=4?104:a.length<=12?88:a.length<=36?72:a.length<=80?60:52,Ce=Math.min(Math.max(a.length,1),10),Ae=ie*Ce+12*Math.max(0,Ce-1),Ge=Ae+32,De=Math.min(Math.max(Ge+44,460),940),Fe=a.length>0;return _e.jsxs("div",{className:`h-dvh flex justify-center bg-gradient-to-br ${I.surface} relative overflow-hidden`,children:[_e.jsxs("div",{className:"absolute inset-0 opacity-30 pointer-events-none",children:[_e.jsx("div",{className:"absolute left-[-8rem] top-[-8rem] h-96 w-96 rounded-full bg-purple-500 blur-3xl"}),_e.jsx("div",{className:"absolute bottom-[-10rem] right-[-8rem] h-[28rem] w-[28rem] rounded-full bg-blue-500 blur-3xl"})]}),_e.jsx("button",{type:"button",onClick:se,className:"absolute left-4 top-4 z-20 rounded-full bg-white/85 px-4 py-2 text-sm text-gray-800 shadow-xl backdrop-blur-md transition-all hover:bg-white hover:text-purple-700 sm:left-6 sm:top-6",children:_e.jsxs("span",{className:"inline-flex items-center gap-2",children:[_e.jsx(Rp,{className:"size-4"}),"重选样式"]})}),_e.jsxs("div",{className:`${Fe?"max-w-[960px]":"max-w-2xl"} w-full px-6 pb-4 pt-14 sm:pt-16 relative z-10 flex h-full flex-col min-h-0 transition-opacity duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${_?"opacity-100":"opacity-0"}`,children:[_e.jsxs("div",{className:"text-center mb-4 flex shrink-0 flex-col items-center",children:[_e.jsx("div",{className:`mb-3 ${n?"opacity-0":"opacity-100"}`,children:_e.jsx(Fm,{logo:I.logo,name:I.name,compact:!0,transitioning:!!n,logoRef:re=>{ce.current=re}})}),_e.jsx("h1",{ref:Re,className:`text-4xl mb-2 bg-gradient-to-r from-white via-fuchsia-100 to-blue-100 bg-clip-text text-transparent font-bold ${n?"opacity-0":"opacity-100"}`,children:I.name}),_e.jsxs("p",{className:"text-white/70 text-base",children:[I.name,I.multipleOf?`每圈 ${I.multipleOf} 张，需上传 ${I.multipleOf} 的倍数`:`需要上传 ${I.minPhotos}-${I.maxPhotos} 张照片`]})]}),_e.jsxs("div",{onDragOver:je,onDragLeave:tt,onDrop:_t,style:{width:Fe?`${De}px`:"min(100%, clamp(380px, 48dvh, 520px))",maxWidth:Fe?"92vw":void 0,height:Fe?"clamp(360px, 46dvh, 500px)":"min(100%, clamp(380px, 48dvh, 520px))"},className:`relative border-4 border-dashed rounded-[56px] p-4 text-center transition-all duration-300 shadow-xl flex shrink-0 self-center sm:p-5 ${A?"border-purple-500 bg-purple-100/80 scale-105 shadow-2xl shadow-purple-500/50":"border-gray-300 bg-white/80 backdrop-blur-sm hover:border-purple-400 hover:shadow-2xl"}`,children:[_e.jsx("input",{ref:be,type:"file",multiple:!0,accept:"image/*,.heic,.heif",onChange:z,className:"hidden"}),_e.jsx("div",{className:"flex flex-col items-center gap-3 w-full min-h-0",children:a.length===0?_e.jsxs("div",{className:"w-full min-h-0 flex flex-1 flex-col items-center",children:[_e.jsxs("div",{className:"flex-1 min-h-0 flex flex-col items-center justify-center gap-4",children:[_e.jsx("div",{className:"w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 flex items-center justify-center shadow-xl animate-bounce",children:_e.jsx(Cv,{className:"text-white",size:40})}),_e.jsxs("div",{children:[_e.jsx("p",{className:"text-2xl mb-2 font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent",children:"拖拽照片到这里"}),_e.jsx("p",{className:"text-gray-500",children:"或者点击下方按钮选择文件"})]})]}),_e.jsxs("button",{onClick:()=>{var re;return(re=be.current)==null?void 0:re.click()},disabled:g,className:"group relative w-full px-10 py-4 rounded-[28px] text-white text-lg font-semibold shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/40 active:scale-[0.98] bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-[length:200%_100%] animate-[gradient-x_4s_ease_infinite]",children:[_e.jsx("span",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"}),_e.jsxs("span",{className:"relative flex items-center justify-center gap-2",children:[_e.jsx(bp,{size:22}),g?`上传中 ${y.done}/${y.total}`:"选择照片"]})]})]}):_e.jsxs("div",{className:"w-full min-h-0 flex flex-1 flex-col animate-fade-in",children:[_e.jsxs("div",{className:"flex shrink-0 items-center justify-between mb-2 px-0",children:[_e.jsxs("p",{className:"text-base text-gray-700",children:["已上传 ",_e.jsx("span",{className:"text-purple-600 font-bold text-xl",children:a.length})," / ",I.maxPhotos," 张",g&&_e.jsxs("span",{className:"ml-2 text-xs text-blue-600",children:["上传中 ",y.done,"/",y.total]}),a.length<I.minPhotos&&_e.jsxs("span",{className:"ml-2 text-xs text-amber-600",children:["还需 ",I.minPhotos-a.length," 张"]}),I.multipleOf&&a.length>=I.minPhotos&&a.length%I.multipleOf!==0&&_e.jsxs("span",{className:"ml-2 text-xs text-amber-600",children:["需补到 ",Math.min(I.maxPhotos,Math.ceil(a.length/I.multipleOf)*I.multipleOf)," 张"]})]}),_e.jsx("button",{onClick:ft,disabled:g,className:"text-sm text-red-500 hover:text-red-700 hover:scale-110 transition-all px-3 py-1 rounded-full hover:bg-red-50",children:"清空"})]}),_e.jsx("div",{className:"flex-1 min-h-0 mx-auto overflow-y-auto overscroll-contain p-4 bg-gradient-to-br from-gray-50 to-purple-50 rounded-[34px] border border-purple-100 shadow-inner",style:{width:"100%",boxSizing:"border-box"},children:_e.jsx("div",{className:"grid gap-3 justify-start",style:{gridTemplateColumns:`repeat(${Ce}, ${ie}px)`,width:`${Ae}px`,maxWidth:"100%"},children:a.map((re,ae)=>_e.jsxs("div",{className:"group relative aspect-square rounded-[20px] overflow-hidden border-2 border-white shadow-md transition-all duration-300 hover:shadow-xl hover:z-10",children:[_e.jsx("img",{src:re,alt:`预览 ${ae+1}`,className:"w-full h-full object-cover"}),_e.jsx("button",{type:"button",onClick:()=>C(ae),disabled:g,"aria-label":`删除第 ${ae+1} 张照片`,className:"absolute top-1 right-1 flex h-[22px] w-[22px] items-center justify-center rounded-full bg-black/65 text-white opacity-100 shadow-md transition-opacity hover:bg-red-500 active:scale-95 sm:opacity-0 sm:group-hover:opacity-100",children:_e.jsx(Lv,{className:"h-3.5 w-3.5"})})]},ae))})}),_e.jsxs("div",{className:"shrink-0 pt-3 grid grid-cols-2 gap-3 w-full",children:[_e.jsxs("button",{onClick:()=>{var re;return(re=be.current)==null?void 0:re.click()},disabled:a.length>=I.maxPhotos||g,className:"group relative w-full px-6 py-4 rounded-[28px] text-white text-lg font-semibold shadow-lg overflow-hidden transition-all duration-300 enabled:hover:shadow-2xl enabled:hover:shadow-blue-500/40 enabled:active:scale-[0.98] bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-[length:200%_100%] animate-[gradient-x_4s_ease_infinite] disabled:opacity-50 disabled:cursor-not-allowed disabled:animate-none",children:[_e.jsx("span",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"}),_e.jsxs("span",{className:"relative flex items-center justify-center gap-2",children:[_e.jsx(bp,{size:22}),g?`上传中 ${y.done}/${y.total}`:"继续上传"]})]}),_e.jsxs("button",{onClick:ut,disabled:a.length<I.minPhotos||!!(I.multipleOf&&a.length%I.multipleOf!==0)||g,className:"group relative w-full px-6 py-4 rounded-[28px] text-white text-lg font-semibold shadow-lg overflow-hidden transition-all duration-300 enabled:hover:shadow-2xl enabled:hover:shadow-purple-500/40 enabled:active:scale-[0.98] bg-gradient-to-r from-purple-600 via-fuchsia-500 to-blue-600 bg-[length:200%_100%] animate-[gradient-x_4s_ease_infinite] disabled:opacity-50 disabled:cursor-not-allowed disabled:animate-none",children:[_e.jsx("span",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"}),_e.jsxs("span",{className:"relative flex items-center justify-center gap-2",children:[_e.jsx("span",{children:"✨"}),"开始生成"]})]})]})]})})]}),_e.jsxs("div",{className:"mt-auto pb-3 pt-5 text-center space-y-2.5 shrink-0",children:[_e.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-sm font-medium text-white/80",children:[_e.jsxs("div",{className:"flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 shadow-sm backdrop-blur-md",children:[_e.jsx(Cp,{className:"size-4 text-fuchsia-200"}),_e.jsx("span",{children:"支持 JPG、PNG、HEIC 等格式"})]}),_e.jsxs("div",{className:"flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 shadow-sm backdrop-blur-md",children:[_e.jsx(yv,{className:"size-4 text-sky-200"}),_e.jsx("span",{children:"生成后可自由旋转、缩放"})]})]}),_e.jsxs("p",{className:"inline-flex items-center justify-center gap-1.5 rounded-full border border-white/10 bg-black/15 px-3 py-1.5 text-xs font-medium text-white/55 backdrop-blur-sm",children:[_e.jsx(wv,{className:"size-3.5 text-white/45"}),"完美支持苹果 iPhone 相机拍摄的照片"]})]})]}),Y(),E()]})}lv.createRoot(document.getElementById("root")).render(_e.jsx(s1,{}));
