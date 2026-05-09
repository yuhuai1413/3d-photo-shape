(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function n(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(a){if(a.ep)return;a.ep=!0;const c=n(a);fetch(a.href,c)}})();var vu={exports:{}},Us={},xu={exports:{}},_t={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mp;function K_(){if(mp)return _t;mp=1;var o=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),y=Symbol.iterator;function x(k){return k===null||typeof k!="object"?null:(k=y&&k[y]||k["@@iterator"],typeof k=="function"?k:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,C={};function v(k,ce,He){this.props=k,this.context=ce,this.refs=C,this.updater=He||M}v.prototype.isReactComponent={},v.prototype.setState=function(k,ce){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,ce,"setState")},v.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function _(){}_.prototype=v.prototype;function F(k,ce,He){this.props=k,this.context=ce,this.refs=C,this.updater=He||M}var P=F.prototype=new _;P.constructor=F,R(P,v.prototype),P.isPureReactComponent=!0;var U=Array.isArray,J=Object.prototype.hasOwnProperty,z={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function $(k,ce,He){var te,Se={},Ae=null,j=null;if(ce!=null)for(te in ce.ref!==void 0&&(j=ce.ref),ce.key!==void 0&&(Ae=""+ce.key),ce)J.call(ce,te)&&!O.hasOwnProperty(te)&&(Se[te]=ce[te]);var ge=arguments.length-2;if(ge===1)Se.children=He;else if(1<ge){for(var oe=Array(ge),Le=0;Le<ge;Le++)oe[Le]=arguments[Le+2];Se.children=oe}if(k&&k.defaultProps)for(te in ge=k.defaultProps,ge)Se[te]===void 0&&(Se[te]=ge[te]);return{$$typeof:o,type:k,key:Ae,ref:j,props:Se,_owner:z.current}}function L(k,ce){return{$$typeof:o,type:k.type,key:ce,ref:k.ref,props:k.props,_owner:k._owner}}function A(k){return typeof k=="object"&&k!==null&&k.$$typeof===o}function V(k){var ce={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(He){return ce[He]})}var pe=/\/+/g;function K(k,ce){return typeof k=="object"&&k!==null&&k.key!=null?V(""+k.key):ce.toString(36)}function ye(k,ce,He,te,Se){var Ae=typeof k;(Ae==="undefined"||Ae==="boolean")&&(k=null);var j=!1;if(k===null)j=!0;else switch(Ae){case"string":case"number":j=!0;break;case"object":switch(k.$$typeof){case o:case e:j=!0}}if(j)return j=k,Se=Se(j),k=te===""?"."+K(j,0):te,U(Se)?(He="",k!=null&&(He=k.replace(pe,"$&/")+"/"),ye(Se,ce,He,"",function(Le){return Le})):Se!=null&&(A(Se)&&(Se=L(Se,He+(!Se.key||j&&j.key===Se.key?"":(""+Se.key).replace(pe,"$&/")+"/")+k)),ce.push(Se)),1;if(j=0,te=te===""?".":te+":",U(k))for(var ge=0;ge<k.length;ge++){Ae=k[ge];var oe=te+K(Ae,ge);j+=ye(Ae,ce,He,oe,Se)}else if(oe=x(k),typeof oe=="function")for(k=oe.call(k),ge=0;!(Ae=k.next()).done;)Ae=Ae.value,oe=te+K(Ae,ge++),j+=ye(Ae,ce,He,oe,Se);else if(Ae==="object")throw ce=String(k),Error("Objects are not valid as a React child (found: "+(ce==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":ce)+"). If you meant to render a collection of children, use an array instead.");return j}function ve(k,ce,He){if(k==null)return k;var te=[],Se=0;return ye(k,te,"","",function(Ae){return ce.call(He,Ae,Se++)}),te}function le(k){if(k._status===-1){var ce=k._result;ce=ce(),ce.then(function(He){(k._status===0||k._status===-1)&&(k._status=1,k._result=He)},function(He){(k._status===0||k._status===-1)&&(k._status=2,k._result=He)}),k._status===-1&&(k._status=0,k._result=ce)}if(k._status===1)return k._result.default;throw k._result}var de={current:null},B={transition:null},xe={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:B,ReactCurrentOwner:z};function me(){throw Error("act(...) is not supported in production builds of React.")}return _t.Children={map:ve,forEach:function(k,ce,He){ve(k,function(){ce.apply(this,arguments)},He)},count:function(k){var ce=0;return ve(k,function(){ce++}),ce},toArray:function(k){return ve(k,function(ce){return ce})||[]},only:function(k){if(!A(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},_t.Component=v,_t.Fragment=n,_t.Profiler=a,_t.PureComponent=F,_t.StrictMode=r,_t.Suspense=h,_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xe,_t.act=me,_t.cloneElement=function(k,ce,He){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var te=R({},k.props),Se=k.key,Ae=k.ref,j=k._owner;if(ce!=null){if(ce.ref!==void 0&&(Ae=ce.ref,j=z.current),ce.key!==void 0&&(Se=""+ce.key),k.type&&k.type.defaultProps)var ge=k.type.defaultProps;for(oe in ce)J.call(ce,oe)&&!O.hasOwnProperty(oe)&&(te[oe]=ce[oe]===void 0&&ge!==void 0?ge[oe]:ce[oe])}var oe=arguments.length-2;if(oe===1)te.children=He;else if(1<oe){ge=Array(oe);for(var Le=0;Le<oe;Le++)ge[Le]=arguments[Le+2];te.children=ge}return{$$typeof:o,type:k.type,key:Se,ref:Ae,props:te,_owner:j}},_t.createContext=function(k){return k={$$typeof:d,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:c,_context:k},k.Consumer=k},_t.createElement=$,_t.createFactory=function(k){var ce=$.bind(null,k);return ce.type=k,ce},_t.createRef=function(){return{current:null}},_t.forwardRef=function(k){return{$$typeof:f,render:k}},_t.isValidElement=A,_t.lazy=function(k){return{$$typeof:g,_payload:{_status:-1,_result:k},_init:le}},_t.memo=function(k,ce){return{$$typeof:m,type:k,compare:ce===void 0?null:ce}},_t.startTransition=function(k){var ce=B.transition;B.transition={};try{k()}finally{B.transition=ce}},_t.unstable_act=me,_t.useCallback=function(k,ce){return de.current.useCallback(k,ce)},_t.useContext=function(k){return de.current.useContext(k)},_t.useDebugValue=function(){},_t.useDeferredValue=function(k){return de.current.useDeferredValue(k)},_t.useEffect=function(k,ce){return de.current.useEffect(k,ce)},_t.useId=function(){return de.current.useId()},_t.useImperativeHandle=function(k,ce,He){return de.current.useImperativeHandle(k,ce,He)},_t.useInsertionEffect=function(k,ce){return de.current.useInsertionEffect(k,ce)},_t.useLayoutEffect=function(k,ce){return de.current.useLayoutEffect(k,ce)},_t.useMemo=function(k,ce){return de.current.useMemo(k,ce)},_t.useReducer=function(k,ce,He){return de.current.useReducer(k,ce,He)},_t.useRef=function(k){return de.current.useRef(k)},_t.useState=function(k){return de.current.useState(k)},_t.useSyncExternalStore=function(k,ce,He){return de.current.useSyncExternalStore(k,ce,He)},_t.useTransition=function(){return de.current.useTransition()},_t.version="18.3.1",_t}var gp;function Nf(){return gp||(gp=1,xu.exports=K_()),xu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _p;function Z_(){if(_p)return Us;_p=1;var o=Nf(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(f,h,m){var g,y={},x=null,M=null;m!==void 0&&(x=""+m),h.key!==void 0&&(x=""+h.key),h.ref!==void 0&&(M=h.ref);for(g in h)r.call(h,g)&&!c.hasOwnProperty(g)&&(y[g]=h[g]);if(f&&f.defaultProps)for(g in h=f.defaultProps,h)y[g]===void 0&&(y[g]=h[g]);return{$$typeof:e,type:f,key:x,ref:M,props:y,_owner:a.current}}return Us.Fragment=n,Us.jsx=d,Us.jsxs=d,Us}var vp;function Q_(){return vp||(vp=1,vu.exports=Z_()),vu.exports}var _e=Q_(),Ja={},yu={exports:{}},Dn={},Su={exports:{}},Mu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xp;function J_(){return xp||(xp=1,(function(o){function e(B,xe){var me=B.length;B.push(xe);e:for(;0<me;){var k=me-1>>>1,ce=B[k];if(0<a(ce,xe))B[k]=xe,B[me]=ce,me=k;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var xe=B[0],me=B.pop();if(me!==xe){B[0]=me;e:for(var k=0,ce=B.length,He=ce>>>1;k<He;){var te=2*(k+1)-1,Se=B[te],Ae=te+1,j=B[Ae];if(0>a(Se,me))Ae<ce&&0>a(j,Se)?(B[k]=j,B[Ae]=me,k=Ae):(B[k]=Se,B[te]=me,k=te);else if(Ae<ce&&0>a(j,me))B[k]=j,B[Ae]=me,k=Ae;else break e}}return xe}function a(B,xe){var me=B.sortIndex-xe.sortIndex;return me!==0?me:B.id-xe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var d=Date,f=d.now();o.unstable_now=function(){return d.now()-f}}var h=[],m=[],g=1,y=null,x=3,M=!1,R=!1,C=!1,v=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(B){for(var xe=n(m);xe!==null;){if(xe.callback===null)r(m);else if(xe.startTime<=B)r(m),xe.sortIndex=xe.expirationTime,e(h,xe);else break;xe=n(m)}}function U(B){if(C=!1,P(B),!R)if(n(h)!==null)R=!0,le(J);else{var xe=n(m);xe!==null&&de(U,xe.startTime-B)}}function J(B,xe){R=!1,C&&(C=!1,_($),$=-1),M=!0;var me=x;try{for(P(xe),y=n(h);y!==null&&(!(y.expirationTime>xe)||B&&!V());){var k=y.callback;if(typeof k=="function"){y.callback=null,x=y.priorityLevel;var ce=k(y.expirationTime<=xe);xe=o.unstable_now(),typeof ce=="function"?y.callback=ce:y===n(h)&&r(h),P(xe)}else r(h);y=n(h)}if(y!==null)var He=!0;else{var te=n(m);te!==null&&de(U,te.startTime-xe),He=!1}return He}finally{y=null,x=me,M=!1}}var z=!1,O=null,$=-1,L=5,A=-1;function V(){return!(o.unstable_now()-A<L)}function pe(){if(O!==null){var B=o.unstable_now();A=B;var xe=!0;try{xe=O(!0,B)}finally{xe?K():(z=!1,O=null)}}else z=!1}var K;if(typeof F=="function")K=function(){F(pe)};else if(typeof MessageChannel<"u"){var ye=new MessageChannel,ve=ye.port2;ye.port1.onmessage=pe,K=function(){ve.postMessage(null)}}else K=function(){v(pe,0)};function le(B){O=B,z||(z=!0,K())}function de(B,xe){$=v(function(){B(o.unstable_now())},xe)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(B){B.callback=null},o.unstable_continueExecution=function(){R||M||(R=!0,le(J))},o.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<B?Math.floor(1e3/B):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_getFirstCallbackNode=function(){return n(h)},o.unstable_next=function(B){switch(x){case 1:case 2:case 3:var xe=3;break;default:xe=x}var me=x;x=xe;try{return B()}finally{x=me}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(B,xe){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var me=x;x=B;try{return xe()}finally{x=me}},o.unstable_scheduleCallback=function(B,xe,me){var k=o.unstable_now();switch(typeof me=="object"&&me!==null?(me=me.delay,me=typeof me=="number"&&0<me?k+me:k):me=k,B){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=me+ce,B={id:g++,callback:xe,priorityLevel:B,startTime:me,expirationTime:ce,sortIndex:-1},me>k?(B.sortIndex=me,e(m,B),n(h)===null&&B===n(m)&&(C?(_($),$=-1):C=!0,de(U,me-k))):(B.sortIndex=ce,e(h,B),R||M||(R=!0,le(J))),B},o.unstable_shouldYield=V,o.unstable_wrapCallback=function(B){var xe=x;return function(){var me=x;x=xe;try{return B.apply(this,arguments)}finally{x=me}}}})(Mu)),Mu}var yp;function e0(){return yp||(yp=1,Su.exports=J_()),Su.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sp;function t0(){if(Sp)return Dn;Sp=1;var o=Nf(),e=e0();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,s=1;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function c(t,i){d(t,i),d(t+"Capture",i)}function d(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},y={};function x(t){return h.call(y,t)?!0:h.call(g,t)?!1:m.test(t)?y[t]=!0:(g[t]=!0,!1)}function M(t,i,s,l){if(s!==null&&s.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:s!==null?!s.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function R(t,i,s,l){if(i===null||typeof i>"u"||M(t,i,s,l))return!0;if(l)return!1;if(s!==null)switch(s.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function C(t,i,s,l,u,p,w){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=u,this.mustUseProperty=s,this.propertyName=t,this.type=i,this.sanitizeURL=p,this.removeEmptyString=w}var v={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){v[t]=new C(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];v[i]=new C(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){v[t]=new C(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){v[t]=new C(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){v[t]=new C(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){v[t]=new C(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){v[t]=new C(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){v[t]=new C(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){v[t]=new C(t,5,!1,t.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function F(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(_,F);v[i]=new C(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(_,F);v[i]=new C(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(_,F);v[i]=new C(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){v[t]=new C(t,1,!1,t.toLowerCase(),null,!1,!1)}),v.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){v[t]=new C(t,1,!1,t.toLowerCase(),null,!0,!0)});function P(t,i,s,l){var u=v.hasOwnProperty(i)?v[i]:null;(u!==null?u.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(R(i,s,u,l)&&(s=null),l||u===null?x(i)&&(s===null?t.removeAttribute(i):t.setAttribute(i,""+s)):u.mustUseProperty?t[u.propertyName]=s===null?u.type===3?!1:"":s:(i=u.attributeName,l=u.attributeNamespace,s===null?t.removeAttribute(i):(u=u.type,s=u===3||u===4&&s===!0?"":""+s,l?t.setAttributeNS(l,i,s):t.setAttribute(i,s))))}var U=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,J=Symbol.for("react.element"),z=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),$=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),V=Symbol.for("react.context"),pe=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),ye=Symbol.for("react.suspense_list"),ve=Symbol.for("react.memo"),le=Symbol.for("react.lazy"),de=Symbol.for("react.offscreen"),B=Symbol.iterator;function xe(t){return t===null||typeof t!="object"?null:(t=B&&t[B]||t["@@iterator"],typeof t=="function"?t:null)}var me=Object.assign,k;function ce(t){if(k===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);k=i&&i[1]||""}return`
`+k+t}var He=!1;function te(t,i){if(!t||He)return"";He=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ue){var l=ue}Reflect.construct(t,[],i)}else{try{i.call()}catch(ue){l=ue}t.call(i.prototype)}else{try{throw Error()}catch(ue){l=ue}t()}}catch(ue){if(ue&&l&&typeof ue.stack=="string"){for(var u=ue.stack.split(`
`),p=l.stack.split(`
`),w=u.length-1,I=p.length-1;1<=w&&0<=I&&u[w]!==p[I];)I--;for(;1<=w&&0<=I;w--,I--)if(u[w]!==p[I]){if(w!==1||I!==1)do if(w--,I--,0>I||u[w]!==p[I]){var H=`
`+u[w].replace(" at new "," at ");return t.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",t.displayName)),H}while(1<=w&&0<=I);break}}}finally{He=!1,Error.prepareStackTrace=s}return(t=t?t.displayName||t.name:"")?ce(t):""}function Se(t){switch(t.tag){case 5:return ce(t.type);case 16:return ce("Lazy");case 13:return ce("Suspense");case 19:return ce("SuspenseList");case 0:case 2:case 15:return t=te(t.type,!1),t;case 11:return t=te(t.type.render,!1),t;case 1:return t=te(t.type,!0),t;default:return""}}function Ae(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case O:return"Fragment";case z:return"Portal";case L:return"Profiler";case $:return"StrictMode";case K:return"Suspense";case ye:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case V:return(t.displayName||"Context")+".Consumer";case A:return(t._context.displayName||"Context")+".Provider";case pe:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ve:return i=t.displayName||null,i!==null?i:Ae(t.type)||"Memo";case le:i=t._payload,t=t._init;try{return Ae(t(i))}catch{}}return null}function j(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ae(i);case 8:return i===$?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ge(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function oe(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Le(t){var i=oe(t)?"checked":"value",s=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,p=s.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return u.call(this)},set:function(w){l=""+w,p.call(this,w)}}),Object.defineProperty(t,i,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(w){l=""+w},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Ue(t){t._valueTracker||(t._valueTracker=Le(t))}function N(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=oe(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function Xe(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function nt(t,i){var s=i.checked;return me({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??t._wrapperState.initialChecked})}function qe(t,i){var s=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;s=ge(i.value!=null?i.value:s),t._wrapperState={initialChecked:l,initialValue:s,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function q(t,i){i=i.checked,i!=null&&P(t,"checked",i,!1)}function Fe(t,i){q(t,i);var s=ge(i.value),l=i.type;if(s!=null)l==="number"?(s===0&&t.value===""||t.value!=s)&&(t.value=""+s):t.value!==""+s&&(t.value=""+s);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?ke(t,i.type,s):i.hasOwnProperty("defaultValue")&&ke(t,i.type,ge(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Oe(t,i,s){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,s||i===t.value||(t.value=i),t.defaultValue=i}s=t.name,s!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,s!==""&&(t.name=s)}function ke(t,i,s){(i!=="number"||Xe(t.ownerDocument)!==t)&&(s==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+s&&(t.defaultValue=""+s))}var T=Array.isArray;function S(t,i,s,l){if(t=t.options,i){i={};for(var u=0;u<s.length;u++)i["$"+s[u]]=!0;for(s=0;s<t.length;s++)u=i.hasOwnProperty("$"+t[s].value),t[s].selected!==u&&(t[s].selected=u),u&&l&&(t[s].defaultSelected=!0)}else{for(s=""+ge(s),i=null,u=0;u<t.length;u++){if(t[u].value===s){t[u].selected=!0,l&&(t[u].defaultSelected=!0);return}i!==null||t[u].disabled||(i=t[u])}i!==null&&(i.selected=!0)}}function D(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return me({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function G(t,i){var s=i.value;if(s==null){if(s=i.children,i=i.defaultValue,s!=null){if(i!=null)throw Error(n(92));if(T(s)){if(1<s.length)throw Error(n(93));s=s[0]}i=s}i==null&&(i=""),s=i}t._wrapperState={initialValue:ge(s)}}function Z(t,i){var s=ge(i.value),l=ge(i.defaultValue);s!=null&&(s=""+s,s!==t.value&&(t.value=s),i.defaultValue==null&&t.defaultValue!==s&&(t.defaultValue=s)),l!=null&&(t.defaultValue=""+l)}function ne(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function we(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Me(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?we(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Te,je=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,s,l,u){MSApp.execUnsafeLocalFunction(function(){return t(i,s,l,u)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Te=Te||document.createElement("div"),Te.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Te.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Ee(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var Ne={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lt=["Webkit","ms","Moz","O"];Object.keys(Ne).forEach(function(t){lt.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Ne[i]=Ne[t]})});function Ke(t,i,s){return i==null||typeof i=="boolean"||i===""?"":s||typeof i!="number"||i===0||Ne.hasOwnProperty(t)&&Ne[t]?(""+i).trim():i+"px"}function Be(t,i){t=t.style;for(var s in i)if(i.hasOwnProperty(s)){var l=s.indexOf("--")===0,u=Ke(s,i[s],l);s==="float"&&(s="cssFloat"),l?t.setProperty(s,u):t[s]=u}}var Je=me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rt(t,i){if(i){if(Je[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function yt(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var E=null;function ie(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var se=null,he=null,Ce=null;function tt(t){if(t=ys(t)){if(typeof se!="function")throw Error(n(280));var i=t.stateNode;i&&(i=pa(i),se(t.stateNode,t.type,i))}}function ut(t){he?Ce?Ce.push(t):Ce=[t]:he=t}function Ut(){if(he){var t=he,i=Ce;if(Ce=he=null,tt(t),i)for(t=0;t<i.length;t++)tt(i[t])}}function Vt(t,i){return t(i)}function vt(){}var kt=!1;function zt(t,i,s){if(kt)return t(i,s);kt=!0;try{return Vt(t,i,s)}finally{kt=!1,(he!==null||Ce!==null)&&(vt(),Ut())}}function Tn(t,i){var s=t.stateNode;if(s===null)return null;var l=pa(s);if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(n(231,i,typeof s));return s}var Wt=!1;if(f)try{var _n={};Object.defineProperty(_n,"passive",{get:function(){Wt=!0}}),window.addEventListener("test",_n,_n),window.removeEventListener("test",_n,_n)}catch{Wt=!1}function xi(t,i,s,l,u,p,w,I,H){var ue=Array.prototype.slice.call(arguments,3);try{i.apply(s,ue)}catch(be){this.onError(be)}}var Jn=!1,yi=null,Er=!1,Hi=null,$s={onError:function(t){Jn=!0,yi=t}};function Ks(t,i,s,l,u,p,w,I,H){Jn=!1,yi=null,xi.apply($s,arguments)}function Bl(t,i,s,l,u,p,w,I,H){if(Ks.apply(this,arguments),Jn){if(Jn){var ue=yi;Jn=!1,yi=null}else throw Error(n(198));Er||(Er=!0,Hi=ue)}}function Si(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function Zs(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function b(t){if(Si(t)!==t)throw Error(n(188))}function X(t){var i=t.alternate;if(!i){if(i=Si(t),i===null)throw Error(n(188));return i!==t?null:t}for(var s=t,l=i;;){var u=s.return;if(u===null)break;var p=u.alternate;if(p===null){if(l=u.return,l!==null){s=l;continue}break}if(u.child===p.child){for(p=u.child;p;){if(p===s)return b(u),t;if(p===l)return b(u),i;p=p.sibling}throw Error(n(188))}if(s.return!==l.return)s=u,l=p;else{for(var w=!1,I=u.child;I;){if(I===s){w=!0,s=u,l=p;break}if(I===l){w=!0,l=u,s=p;break}I=I.sibling}if(!w){for(I=p.child;I;){if(I===s){w=!0,s=p,l=u;break}if(I===l){w=!0,l=p,s=u;break}I=I.sibling}if(!w)throw Error(n(189))}}if(s.alternate!==l)throw Error(n(190))}if(s.tag!==3)throw Error(n(188));return s.stateNode.current===s?t:i}function ae(t){return t=X(t),t!==null?fe(t):null}function fe(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=fe(t);if(i!==null)return i;t=t.sibling}return null}var Y=e.unstable_scheduleCallback,Ie=e.unstable_cancelCallback,Ge=e.unstable_shouldYield,Ze=e.unstable_requestPaint,ze=e.unstable_now,ft=e.unstable_getCurrentPriorityLevel,ct=e.unstable_ImmediatePriority,ot=e.unstable_UserBlockingPriority,xt=e.unstable_NormalPriority,Ot=e.unstable_LowPriority,Lt=e.unstable_IdlePriority,Jt=null,pt=null;function it(t){if(pt&&typeof pt.onCommitFiberRoot=="function")try{pt.onCommitFiberRoot(Jt,t,void 0,(t.current.flags&128)===128)}catch{}}var wt=Math.clz32?Math.clz32:Vi,Mt=Math.log,Nn=Math.LN2;function Vi(t){return t>>>=0,t===0?32:31-(Mt(t)/Nn|0)|0}var en=64,Gi=4194304;function Ct(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function In(t,i){var s=t.pendingLanes;if(s===0)return 0;var l=0,u=t.suspendedLanes,p=t.pingedLanes,w=s&268435455;if(w!==0){var I=w&~u;I!==0?l=Ct(I):(p&=w,p!==0&&(l=Ct(p)))}else w=s&~u,w!==0?l=Ct(w):p!==0&&(l=Ct(p));if(l===0)return 0;if(i!==0&&i!==l&&(i&u)===0&&(u=l&-l,p=i&-i,u>=p||u===16&&(p&4194240)!==0))return i;if((l&4)!==0&&(l|=s&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)s=31-wt(i),u=1<<s,l|=t[s],i&=~u;return l}function ns(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function An(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,u=t.expirationTimes,p=t.pendingLanes;0<p;){var w=31-wt(p),I=1<<w,H=u[w];H===-1?((I&s)===0||(I&l)!==0)&&(u[w]=ns(I,i)):H<=i&&(t.expiredLanes|=I),p&=~I}}function wr(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Qs(){var t=en;return en<<=1,(en&4194240)===0&&(en=64),t}function Jr(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function is(t,i,s){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-wt(i),t[i]=s}function _g(t,i){var s=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<s;){var u=31-wt(s),p=1<<u;i[u]=0,l[u]=-1,t[u]=-1,s&=~p}}function Hl(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-wt(s),u=1<<l;u&i|t[l]&i&&(t[l]|=i),s&=~u}}var Tt=0;function Yf(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var qf,Vl,$f,Kf,Zf,Gl=!1,Js=[],Wi=null,Xi=null,ji=null,rs=new Map,os=new Map,Yi=[],vg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qf(t,i){switch(t){case"focusin":case"focusout":Wi=null;break;case"dragenter":case"dragleave":Xi=null;break;case"mouseover":case"mouseout":ji=null;break;case"pointerover":case"pointerout":rs.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":os.delete(i.pointerId)}}function ss(t,i,s,l,u,p){return t===null||t.nativeEvent!==p?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:p,targetContainers:[u]},i!==null&&(i=ys(i),i!==null&&Vl(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),t)}function xg(t,i,s,l,u){switch(i){case"focusin":return Wi=ss(Wi,t,i,s,l,u),!0;case"dragenter":return Xi=ss(Xi,t,i,s,l,u),!0;case"mouseover":return ji=ss(ji,t,i,s,l,u),!0;case"pointerover":var p=u.pointerId;return rs.set(p,ss(rs.get(p)||null,t,i,s,l,u)),!0;case"gotpointercapture":return p=u.pointerId,os.set(p,ss(os.get(p)||null,t,i,s,l,u)),!0}return!1}function Jf(t){var i=Tr(t.target);if(i!==null){var s=Si(i);if(s!==null){if(i=s.tag,i===13){if(i=Zs(s),i!==null){t.blockedOn=i,Zf(t.priority,function(){$f(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ea(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=Xl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);E=l,s.target.dispatchEvent(l),E=null}else return i=ys(s),i!==null&&Vl(i),t.blockedOn=s,!1;i.shift()}return!0}function ed(t,i,s){ea(t)&&s.delete(i)}function yg(){Gl=!1,Wi!==null&&ea(Wi)&&(Wi=null),Xi!==null&&ea(Xi)&&(Xi=null),ji!==null&&ea(ji)&&(ji=null),rs.forEach(ed),os.forEach(ed)}function as(t,i){t.blockedOn===i&&(t.blockedOn=null,Gl||(Gl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,yg)))}function ls(t){function i(u){return as(u,t)}if(0<Js.length){as(Js[0],t);for(var s=1;s<Js.length;s++){var l=Js[s];l.blockedOn===t&&(l.blockedOn=null)}}for(Wi!==null&&as(Wi,t),Xi!==null&&as(Xi,t),ji!==null&&as(ji,t),rs.forEach(i),os.forEach(i),s=0;s<Yi.length;s++)l=Yi[s],l.blockedOn===t&&(l.blockedOn=null);for(;0<Yi.length&&(s=Yi[0],s.blockedOn===null);)Jf(s),s.blockedOn===null&&Yi.shift()}var eo=U.ReactCurrentBatchConfig,ta=!0;function Sg(t,i,s,l){var u=Tt,p=eo.transition;eo.transition=null;try{Tt=1,Wl(t,i,s,l)}finally{Tt=u,eo.transition=p}}function Mg(t,i,s,l){var u=Tt,p=eo.transition;eo.transition=null;try{Tt=4,Wl(t,i,s,l)}finally{Tt=u,eo.transition=p}}function Wl(t,i,s,l){if(ta){var u=Xl(t,i,s,l);if(u===null)lc(t,i,l,na,s),Qf(t,l);else if(xg(u,t,i,s,l))l.stopPropagation();else if(Qf(t,l),i&4&&-1<vg.indexOf(t)){for(;u!==null;){var p=ys(u);if(p!==null&&qf(p),p=Xl(t,i,s,l),p===null&&lc(t,i,l,na,s),p===u)break;u=p}u!==null&&l.stopPropagation()}else lc(t,i,l,null,s)}}var na=null;function Xl(t,i,s,l){if(na=null,t=ie(l),t=Tr(t),t!==null)if(i=Si(t),i===null)t=null;else if(s=i.tag,s===13){if(t=Zs(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return na=t,null}function td(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ft()){case ct:return 1;case ot:return 4;case xt:case Ot:return 16;case Lt:return 536870912;default:return 16}default:return 16}}var qi=null,jl=null,ia=null;function nd(){if(ia)return ia;var t,i=jl,s=i.length,l,u="value"in qi?qi.value:qi.textContent,p=u.length;for(t=0;t<s&&i[t]===u[t];t++);var w=s-t;for(l=1;l<=w&&i[s-l]===u[p-l];l++);return ia=u.slice(t,1<l?1-l:void 0)}function ra(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function oa(){return!0}function id(){return!1}function Un(t){function i(s,l,u,p,w){this._reactName=s,this._targetInst=u,this.type=l,this.nativeEvent=p,this.target=w,this.currentTarget=null;for(var I in t)t.hasOwnProperty(I)&&(s=t[I],this[I]=s?s(p):p[I]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?oa:id,this.isPropagationStopped=id,this}return me(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=oa)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=oa)},persist:function(){},isPersistent:oa}),i}var to={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yl=Un(to),cs=me({},to,{view:0,detail:0}),Eg=Un(cs),ql,$l,us,sa=me({},cs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==us&&(us&&t.type==="mousemove"?(ql=t.screenX-us.screenX,$l=t.screenY-us.screenY):$l=ql=0,us=t),ql)},movementY:function(t){return"movementY"in t?t.movementY:$l}}),rd=Un(sa),wg=me({},sa,{dataTransfer:0}),Tg=Un(wg),Ag=me({},cs,{relatedTarget:0}),Kl=Un(Ag),Rg=me({},to,{animationName:0,elapsedTime:0,pseudoElement:0}),Cg=Un(Rg),bg=me({},to,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Pg=Un(bg),Lg=me({},to,{data:0}),od=Un(Lg),Dg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ng={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ig={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ug(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Ig[t])?!!i[t]:!1}function Zl(){return Ug}var Og=me({},cs,{key:function(t){if(t.key){var i=Dg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=ra(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ng[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zl,charCode:function(t){return t.type==="keypress"?ra(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ra(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Fg=Un(Og),kg=me({},sa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sd=Un(kg),zg=me({},cs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zl}),Bg=Un(zg),Hg=me({},to,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vg=Un(Hg),Gg=me({},sa,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Wg=Un(Gg),Xg=[9,13,27,32],Ql=f&&"CompositionEvent"in window,fs=null;f&&"documentMode"in document&&(fs=document.documentMode);var jg=f&&"TextEvent"in window&&!fs,ad=f&&(!Ql||fs&&8<fs&&11>=fs),ld=" ",cd=!1;function ud(t,i){switch(t){case"keyup":return Xg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var no=!1;function Yg(t,i){switch(t){case"compositionend":return fd(i);case"keypress":return i.which!==32?null:(cd=!0,ld);case"textInput":return t=i.data,t===ld&&cd?null:t;default:return null}}function qg(t,i){if(no)return t==="compositionend"||!Ql&&ud(t,i)?(t=nd(),ia=jl=qi=null,no=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return ad&&i.locale!=="ko"?null:i.data;default:return null}}var $g={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dd(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!$g[t.type]:i==="textarea"}function hd(t,i,s,l){ut(l),i=fa(i,"onChange"),0<i.length&&(s=new Yl("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var ds=null,hs=null;function Kg(t){Ld(t,0)}function aa(t){var i=ao(t);if(N(i))return t}function Zg(t,i){if(t==="change")return i}var pd=!1;if(f){var Jl;if(f){var ec="oninput"in document;if(!ec){var md=document.createElement("div");md.setAttribute("oninput","return;"),ec=typeof md.oninput=="function"}Jl=ec}else Jl=!1;pd=Jl&&(!document.documentMode||9<document.documentMode)}function gd(){ds&&(ds.detachEvent("onpropertychange",_d),hs=ds=null)}function _d(t){if(t.propertyName==="value"&&aa(hs)){var i=[];hd(i,hs,t,ie(t)),zt(Kg,i)}}function Qg(t,i,s){t==="focusin"?(gd(),ds=i,hs=s,ds.attachEvent("onpropertychange",_d)):t==="focusout"&&gd()}function Jg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return aa(hs)}function e_(t,i){if(t==="click")return aa(i)}function t_(t,i){if(t==="input"||t==="change")return aa(i)}function n_(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ei=typeof Object.is=="function"?Object.is:n_;function ps(t,i){if(ei(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var u=s[l];if(!h.call(i,u)||!ei(t[u],i[u]))return!1}return!0}function vd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function xd(t,i){var s=vd(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=vd(s)}}function yd(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?yd(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Sd(){for(var t=window,i=Xe();i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=Xe(t.document)}return i}function tc(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function i_(t){var i=Sd(),s=t.focusedElem,l=t.selectionRange;if(i!==s&&s&&s.ownerDocument&&yd(s.ownerDocument.documentElement,s)){if(l!==null&&tc(s)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in s)s.selectionStart=i,s.selectionEnd=Math.min(t,s.value.length);else if(t=(i=s.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var u=s.textContent.length,p=Math.min(l.start,u);l=l.end===void 0?p:Math.min(l.end,u),!t.extend&&p>l&&(u=l,l=p,p=u),u=xd(s,p);var w=xd(s,l);u&&w&&(t.rangeCount!==1||t.anchorNode!==u.node||t.anchorOffset!==u.offset||t.focusNode!==w.node||t.focusOffset!==w.offset)&&(i=i.createRange(),i.setStart(u.node,u.offset),t.removeAllRanges(),p>l?(t.addRange(i),t.extend(w.node,w.offset)):(i.setEnd(w.node,w.offset),t.addRange(i)))}}for(i=[],t=s;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<i.length;s++)t=i[s],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var r_=f&&"documentMode"in document&&11>=document.documentMode,io=null,nc=null,ms=null,ic=!1;function Md(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;ic||io==null||io!==Xe(l)||(l=io,"selectionStart"in l&&tc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ms&&ps(ms,l)||(ms=l,l=fa(nc,"onSelect"),0<l.length&&(i=new Yl("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=io)))}function la(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var ro={animationend:la("Animation","AnimationEnd"),animationiteration:la("Animation","AnimationIteration"),animationstart:la("Animation","AnimationStart"),transitionend:la("Transition","TransitionEnd")},rc={},Ed={};f&&(Ed=document.createElement("div").style,"AnimationEvent"in window||(delete ro.animationend.animation,delete ro.animationiteration.animation,delete ro.animationstart.animation),"TransitionEvent"in window||delete ro.transitionend.transition);function ca(t){if(rc[t])return rc[t];if(!ro[t])return t;var i=ro[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in Ed)return rc[t]=i[s];return t}var wd=ca("animationend"),Td=ca("animationiteration"),Ad=ca("animationstart"),Rd=ca("transitionend"),Cd=new Map,bd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $i(t,i){Cd.set(t,i),c(i,[t])}for(var oc=0;oc<bd.length;oc++){var sc=bd[oc],o_=sc.toLowerCase(),s_=sc[0].toUpperCase()+sc.slice(1);$i(o_,"on"+s_)}$i(wd,"onAnimationEnd"),$i(Td,"onAnimationIteration"),$i(Ad,"onAnimationStart"),$i("dblclick","onDoubleClick"),$i("focusin","onFocus"),$i("focusout","onBlur"),$i(Rd,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),a_=new Set("cancel close invalid load scroll toggle".split(" ").concat(gs));function Pd(t,i,s){var l=t.type||"unknown-event";t.currentTarget=s,Bl(l,i,void 0,t),t.currentTarget=null}function Ld(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],u=l.event;l=l.listeners;e:{var p=void 0;if(i)for(var w=l.length-1;0<=w;w--){var I=l[w],H=I.instance,ue=I.currentTarget;if(I=I.listener,H!==p&&u.isPropagationStopped())break e;Pd(u,I,ue),p=H}else for(w=0;w<l.length;w++){if(I=l[w],H=I.instance,ue=I.currentTarget,I=I.listener,H!==p&&u.isPropagationStopped())break e;Pd(u,I,ue),p=H}}}if(Er)throw t=Hi,Er=!1,Hi=null,t}function Dt(t,i){var s=i[pc];s===void 0&&(s=i[pc]=new Set);var l=t+"__bubble";s.has(l)||(Dd(i,t,2,!1),s.add(l))}function ac(t,i,s){var l=0;i&&(l|=4),Dd(s,t,l,i)}var ua="_reactListening"+Math.random().toString(36).slice(2);function _s(t){if(!t[ua]){t[ua]=!0,r.forEach(function(s){s!=="selectionchange"&&(a_.has(s)||ac(s,!1,t),ac(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[ua]||(i[ua]=!0,ac("selectionchange",!1,i))}}function Dd(t,i,s,l){switch(td(i)){case 1:var u=Sg;break;case 4:u=Mg;break;default:u=Wl}s=u.bind(null,i,s,t),u=void 0,!Wt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),l?u!==void 0?t.addEventListener(i,s,{capture:!0,passive:u}):t.addEventListener(i,s,!0):u!==void 0?t.addEventListener(i,s,{passive:u}):t.addEventListener(i,s,!1)}function lc(t,i,s,l,u){var p=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var w=l.tag;if(w===3||w===4){var I=l.stateNode.containerInfo;if(I===u||I.nodeType===8&&I.parentNode===u)break;if(w===4)for(w=l.return;w!==null;){var H=w.tag;if((H===3||H===4)&&(H=w.stateNode.containerInfo,H===u||H.nodeType===8&&H.parentNode===u))return;w=w.return}for(;I!==null;){if(w=Tr(I),w===null)return;if(H=w.tag,H===5||H===6){l=p=w;continue e}I=I.parentNode}}l=l.return}zt(function(){var ue=p,be=ie(s),Pe=[];e:{var Re=Cd.get(t);if(Re!==void 0){var We=Yl,$e=t;switch(t){case"keypress":if(ra(s)===0)break e;case"keydown":case"keyup":We=Fg;break;case"focusin":$e="focus",We=Kl;break;case"focusout":$e="blur",We=Kl;break;case"beforeblur":case"afterblur":We=Kl;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":We=rd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":We=Tg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":We=Bg;break;case wd:case Td:case Ad:We=Cg;break;case Rd:We=Vg;break;case"scroll":We=Eg;break;case"wheel":We=Wg;break;case"copy":case"cut":case"paste":We=Pg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":We=sd}var Qe=(i&4)!==0,Xt=!Qe&&t==="scroll",Q=Qe?Re!==null?Re+"Capture":null:Re;Qe=[];for(var W=ue,re;W!==null;){re=W;var De=re.stateNode;if(re.tag===5&&De!==null&&(re=De,Q!==null&&(De=Tn(W,Q),De!=null&&Qe.push(vs(W,De,re)))),Xt)break;W=W.return}0<Qe.length&&(Re=new We(Re,$e,null,s,be),Pe.push({event:Re,listeners:Qe}))}}if((i&7)===0){e:{if(Re=t==="mouseover"||t==="pointerover",We=t==="mouseout"||t==="pointerout",Re&&s!==E&&($e=s.relatedTarget||s.fromElement)&&(Tr($e)||$e[Mi]))break e;if((We||Re)&&(Re=be.window===be?be:(Re=be.ownerDocument)?Re.defaultView||Re.parentWindow:window,We?($e=s.relatedTarget||s.toElement,We=ue,$e=$e?Tr($e):null,$e!==null&&(Xt=Si($e),$e!==Xt||$e.tag!==5&&$e.tag!==6)&&($e=null)):(We=null,$e=ue),We!==$e)){if(Qe=rd,De="onMouseLeave",Q="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&(Qe=sd,De="onPointerLeave",Q="onPointerEnter",W="pointer"),Xt=We==null?Re:ao(We),re=$e==null?Re:ao($e),Re=new Qe(De,W+"leave",We,s,be),Re.target=Xt,Re.relatedTarget=re,De=null,Tr(be)===ue&&(Qe=new Qe(Q,W+"enter",$e,s,be),Qe.target=re,Qe.relatedTarget=Xt,De=Qe),Xt=De,We&&$e)t:{for(Qe=We,Q=$e,W=0,re=Qe;re;re=oo(re))W++;for(re=0,De=Q;De;De=oo(De))re++;for(;0<W-re;)Qe=oo(Qe),W--;for(;0<re-W;)Q=oo(Q),re--;for(;W--;){if(Qe===Q||Q!==null&&Qe===Q.alternate)break t;Qe=oo(Qe),Q=oo(Q)}Qe=null}else Qe=null;We!==null&&Nd(Pe,Re,We,Qe,!1),$e!==null&&Xt!==null&&Nd(Pe,Xt,$e,Qe,!0)}}e:{if(Re=ue?ao(ue):window,We=Re.nodeName&&Re.nodeName.toLowerCase(),We==="select"||We==="input"&&Re.type==="file")var et=Zg;else if(dd(Re))if(pd)et=t_;else{et=Jg;var st=Qg}else(We=Re.nodeName)&&We.toLowerCase()==="input"&&(Re.type==="checkbox"||Re.type==="radio")&&(et=e_);if(et&&(et=et(t,ue))){hd(Pe,et,s,be);break e}st&&st(t,Re,ue),t==="focusout"&&(st=Re._wrapperState)&&st.controlled&&Re.type==="number"&&ke(Re,"number",Re.value)}switch(st=ue?ao(ue):window,t){case"focusin":(dd(st)||st.contentEditable==="true")&&(io=st,nc=ue,ms=null);break;case"focusout":ms=nc=io=null;break;case"mousedown":ic=!0;break;case"contextmenu":case"mouseup":case"dragend":ic=!1,Md(Pe,s,be);break;case"selectionchange":if(r_)break;case"keydown":case"keyup":Md(Pe,s,be)}var at;if(Ql)e:{switch(t){case"compositionstart":var dt="onCompositionStart";break e;case"compositionend":dt="onCompositionEnd";break e;case"compositionupdate":dt="onCompositionUpdate";break e}dt=void 0}else no?ud(t,s)&&(dt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(dt="onCompositionStart");dt&&(ad&&s.locale!=="ko"&&(no||dt!=="onCompositionStart"?dt==="onCompositionEnd"&&no&&(at=nd()):(qi=be,jl="value"in qi?qi.value:qi.textContent,no=!0)),st=fa(ue,dt),0<st.length&&(dt=new od(dt,t,null,s,be),Pe.push({event:dt,listeners:st}),at?dt.data=at:(at=fd(s),at!==null&&(dt.data=at)))),(at=jg?Yg(t,s):qg(t,s))&&(ue=fa(ue,"onBeforeInput"),0<ue.length&&(be=new od("onBeforeInput","beforeinput",null,s,be),Pe.push({event:be,listeners:ue}),be.data=at))}Ld(Pe,i)})}function vs(t,i,s){return{instance:t,listener:i,currentTarget:s}}function fa(t,i){for(var s=i+"Capture",l=[];t!==null;){var u=t,p=u.stateNode;u.tag===5&&p!==null&&(u=p,p=Tn(t,s),p!=null&&l.unshift(vs(t,p,u)),p=Tn(t,i),p!=null&&l.push(vs(t,p,u))),t=t.return}return l}function oo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Nd(t,i,s,l,u){for(var p=i._reactName,w=[];s!==null&&s!==l;){var I=s,H=I.alternate,ue=I.stateNode;if(H!==null&&H===l)break;I.tag===5&&ue!==null&&(I=ue,u?(H=Tn(s,p),H!=null&&w.unshift(vs(s,H,I))):u||(H=Tn(s,p),H!=null&&w.push(vs(s,H,I)))),s=s.return}w.length!==0&&t.push({event:i,listeners:w})}var l_=/\r\n?/g,c_=/\u0000|\uFFFD/g;function Id(t){return(typeof t=="string"?t:""+t).replace(l_,`
`).replace(c_,"")}function da(t,i,s){if(i=Id(i),Id(t)!==i&&s)throw Error(n(425))}function ha(){}var cc=null,uc=null;function fc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var dc=typeof setTimeout=="function"?setTimeout:void 0,u_=typeof clearTimeout=="function"?clearTimeout:void 0,Ud=typeof Promise=="function"?Promise:void 0,f_=typeof queueMicrotask=="function"?queueMicrotask:typeof Ud<"u"?function(t){return Ud.resolve(null).then(t).catch(d_)}:dc;function d_(t){setTimeout(function(){throw t})}function hc(t,i){var s=i,l=0;do{var u=s.nextSibling;if(t.removeChild(s),u&&u.nodeType===8)if(s=u.data,s==="/$"){if(l===0){t.removeChild(u),ls(i);return}l--}else s!=="$"&&s!=="$?"&&s!=="$!"||l++;s=u}while(s);ls(i)}function Ki(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Od(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return t;i--}else s==="/$"&&i++}t=t.previousSibling}return null}var so=Math.random().toString(36).slice(2),ui="__reactFiber$"+so,xs="__reactProps$"+so,Mi="__reactContainer$"+so,pc="__reactEvents$"+so,h_="__reactListeners$"+so,p_="__reactHandles$"+so;function Tr(t){var i=t[ui];if(i)return i;for(var s=t.parentNode;s;){if(i=s[Mi]||s[ui]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=Od(t);t!==null;){if(s=t[ui])return s;t=Od(t)}return i}t=s,s=t.parentNode}return null}function ys(t){return t=t[ui]||t[Mi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ao(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function pa(t){return t[xs]||null}var mc=[],lo=-1;function Zi(t){return{current:t}}function Nt(t){0>lo||(t.current=mc[lo],mc[lo]=null,lo--)}function bt(t,i){lo++,mc[lo]=t.current,t.current=i}var Qi={},un=Zi(Qi),Rn=Zi(!1),Ar=Qi;function co(t,i){var s=t.type.contextTypes;if(!s)return Qi;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var u={},p;for(p in s)u[p]=i[p];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=u),u}function Cn(t){return t=t.childContextTypes,t!=null}function ma(){Nt(Rn),Nt(un)}function Fd(t,i,s){if(un.current!==Qi)throw Error(n(168));bt(un,i),bt(Rn,s)}function kd(t,i,s){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return s;l=l.getChildContext();for(var u in l)if(!(u in i))throw Error(n(108,j(t)||"Unknown",u));return me({},s,l)}function ga(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Qi,Ar=un.current,bt(un,t),bt(Rn,Rn.current),!0}function zd(t,i,s){var l=t.stateNode;if(!l)throw Error(n(169));s?(t=kd(t,i,Ar),l.__reactInternalMemoizedMergedChildContext=t,Nt(Rn),Nt(un),bt(un,t)):Nt(Rn),bt(Rn,s)}var Ei=null,_a=!1,gc=!1;function Bd(t){Ei===null?Ei=[t]:Ei.push(t)}function m_(t){_a=!0,Bd(t)}function Ji(){if(!gc&&Ei!==null){gc=!0;var t=0,i=Tt;try{var s=Ei;for(Tt=1;t<s.length;t++){var l=s[t];do l=l(!0);while(l!==null)}Ei=null,_a=!1}catch(u){throw Ei!==null&&(Ei=Ei.slice(t+1)),Y(ct,Ji),u}finally{Tt=i,gc=!1}}return null}var uo=[],fo=0,va=null,xa=0,Gn=[],Wn=0,Rr=null,wi=1,Ti="";function Cr(t,i){uo[fo++]=xa,uo[fo++]=va,va=t,xa=i}function Hd(t,i,s){Gn[Wn++]=wi,Gn[Wn++]=Ti,Gn[Wn++]=Rr,Rr=t;var l=wi;t=Ti;var u=32-wt(l)-1;l&=~(1<<u),s+=1;var p=32-wt(i)+u;if(30<p){var w=u-u%5;p=(l&(1<<w)-1).toString(32),l>>=w,u-=w,wi=1<<32-wt(i)+u|s<<u|l,Ti=p+t}else wi=1<<p|s<<u|l,Ti=t}function _c(t){t.return!==null&&(Cr(t,1),Hd(t,1,0))}function vc(t){for(;t===va;)va=uo[--fo],uo[fo]=null,xa=uo[--fo],uo[fo]=null;for(;t===Rr;)Rr=Gn[--Wn],Gn[Wn]=null,Ti=Gn[--Wn],Gn[Wn]=null,wi=Gn[--Wn],Gn[Wn]=null}var On=null,Fn=null,Ft=!1,ti=null;function Vd(t,i){var s=qn(5,null,null,0);s.elementType="DELETED",s.stateNode=i,s.return=t,i=t.deletions,i===null?(t.deletions=[s],t.flags|=16):i.push(s)}function Gd(t,i){switch(t.tag){case 5:var s=t.type;return i=i.nodeType!==1||s.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,On=t,Fn=Ki(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,On=t,Fn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(s=Rr!==null?{id:wi,overflow:Ti}:null,t.memoizedState={dehydrated:i,treeContext:s,retryLane:1073741824},s=qn(18,null,null,0),s.stateNode=i,s.return=t,t.child=s,On=t,Fn=null,!0):!1;default:return!1}}function xc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function yc(t){if(Ft){var i=Fn;if(i){var s=i;if(!Gd(t,i)){if(xc(t))throw Error(n(418));i=Ki(s.nextSibling);var l=On;i&&Gd(t,i)?Vd(l,s):(t.flags=t.flags&-4097|2,Ft=!1,On=t)}}else{if(xc(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ft=!1,On=t}}}function Wd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;On=t}function ya(t){if(t!==On)return!1;if(!Ft)return Wd(t),Ft=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!fc(t.type,t.memoizedProps)),i&&(i=Fn)){if(xc(t))throw Xd(),Error(n(418));for(;i;)Vd(t,i),i=Ki(i.nextSibling)}if(Wd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"){if(i===0){Fn=Ki(t.nextSibling);break e}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++}t=t.nextSibling}Fn=null}}else Fn=On?Ki(t.stateNode.nextSibling):null;return!0}function Xd(){for(var t=Fn;t;)t=Ki(t.nextSibling)}function ho(){Fn=On=null,Ft=!1}function Sc(t){ti===null?ti=[t]:ti.push(t)}var g_=U.ReactCurrentBatchConfig;function Ss(t,i,s){if(t=s.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(n(309));var l=s.stateNode}if(!l)throw Error(n(147,t));var u=l,p=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(w){var I=u.refs;w===null?delete I[p]:I[p]=w},i._stringRef=p,i)}if(typeof t!="string")throw Error(n(284));if(!s._owner)throw Error(n(290,t))}return t}function Sa(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function jd(t){var i=t._init;return i(t._payload)}function Yd(t){function i(Q,W){if(t){var re=Q.deletions;re===null?(Q.deletions=[W],Q.flags|=16):re.push(W)}}function s(Q,W){if(!t)return null;for(;W!==null;)i(Q,W),W=W.sibling;return null}function l(Q,W){for(Q=new Map;W!==null;)W.key!==null?Q.set(W.key,W):Q.set(W.index,W),W=W.sibling;return Q}function u(Q,W){return Q=ar(Q,W),Q.index=0,Q.sibling=null,Q}function p(Q,W,re){return Q.index=re,t?(re=Q.alternate,re!==null?(re=re.index,re<W?(Q.flags|=2,W):re):(Q.flags|=2,W)):(Q.flags|=1048576,W)}function w(Q){return t&&Q.alternate===null&&(Q.flags|=2),Q}function I(Q,W,re,De){return W===null||W.tag!==6?(W=du(re,Q.mode,De),W.return=Q,W):(W=u(W,re),W.return=Q,W)}function H(Q,W,re,De){var et=re.type;return et===O?be(Q,W,re.props.children,De,re.key):W!==null&&(W.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===le&&jd(et)===W.type)?(De=u(W,re.props),De.ref=Ss(Q,W,re),De.return=Q,De):(De=Xa(re.type,re.key,re.props,null,Q.mode,De),De.ref=Ss(Q,W,re),De.return=Q,De)}function ue(Q,W,re,De){return W===null||W.tag!==4||W.stateNode.containerInfo!==re.containerInfo||W.stateNode.implementation!==re.implementation?(W=hu(re,Q.mode,De),W.return=Q,W):(W=u(W,re.children||[]),W.return=Q,W)}function be(Q,W,re,De,et){return W===null||W.tag!==7?(W=Or(re,Q.mode,De,et),W.return=Q,W):(W=u(W,re),W.return=Q,W)}function Pe(Q,W,re){if(typeof W=="string"&&W!==""||typeof W=="number")return W=du(""+W,Q.mode,re),W.return=Q,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case J:return re=Xa(W.type,W.key,W.props,null,Q.mode,re),re.ref=Ss(Q,null,W),re.return=Q,re;case z:return W=hu(W,Q.mode,re),W.return=Q,W;case le:var De=W._init;return Pe(Q,De(W._payload),re)}if(T(W)||xe(W))return W=Or(W,Q.mode,re,null),W.return=Q,W;Sa(Q,W)}return null}function Re(Q,W,re,De){var et=W!==null?W.key:null;if(typeof re=="string"&&re!==""||typeof re=="number")return et!==null?null:I(Q,W,""+re,De);if(typeof re=="object"&&re!==null){switch(re.$$typeof){case J:return re.key===et?H(Q,W,re,De):null;case z:return re.key===et?ue(Q,W,re,De):null;case le:return et=re._init,Re(Q,W,et(re._payload),De)}if(T(re)||xe(re))return et!==null?null:be(Q,W,re,De,null);Sa(Q,re)}return null}function We(Q,W,re,De,et){if(typeof De=="string"&&De!==""||typeof De=="number")return Q=Q.get(re)||null,I(W,Q,""+De,et);if(typeof De=="object"&&De!==null){switch(De.$$typeof){case J:return Q=Q.get(De.key===null?re:De.key)||null,H(W,Q,De,et);case z:return Q=Q.get(De.key===null?re:De.key)||null,ue(W,Q,De,et);case le:var st=De._init;return We(Q,W,re,st(De._payload),et)}if(T(De)||xe(De))return Q=Q.get(re)||null,be(W,Q,De,et,null);Sa(W,De)}return null}function $e(Q,W,re,De){for(var et=null,st=null,at=W,dt=W=0,rn=null;at!==null&&dt<re.length;dt++){at.index>dt?(rn=at,at=null):rn=at.sibling;var Et=Re(Q,at,re[dt],De);if(Et===null){at===null&&(at=rn);break}t&&at&&Et.alternate===null&&i(Q,at),W=p(Et,W,dt),st===null?et=Et:st.sibling=Et,st=Et,at=rn}if(dt===re.length)return s(Q,at),Ft&&Cr(Q,dt),et;if(at===null){for(;dt<re.length;dt++)at=Pe(Q,re[dt],De),at!==null&&(W=p(at,W,dt),st===null?et=at:st.sibling=at,st=at);return Ft&&Cr(Q,dt),et}for(at=l(Q,at);dt<re.length;dt++)rn=We(at,Q,dt,re[dt],De),rn!==null&&(t&&rn.alternate!==null&&at.delete(rn.key===null?dt:rn.key),W=p(rn,W,dt),st===null?et=rn:st.sibling=rn,st=rn);return t&&at.forEach(function(lr){return i(Q,lr)}),Ft&&Cr(Q,dt),et}function Qe(Q,W,re,De){var et=xe(re);if(typeof et!="function")throw Error(n(150));if(re=et.call(re),re==null)throw Error(n(151));for(var st=et=null,at=W,dt=W=0,rn=null,Et=re.next();at!==null&&!Et.done;dt++,Et=re.next()){at.index>dt?(rn=at,at=null):rn=at.sibling;var lr=Re(Q,at,Et.value,De);if(lr===null){at===null&&(at=rn);break}t&&at&&lr.alternate===null&&i(Q,at),W=p(lr,W,dt),st===null?et=lr:st.sibling=lr,st=lr,at=rn}if(Et.done)return s(Q,at),Ft&&Cr(Q,dt),et;if(at===null){for(;!Et.done;dt++,Et=re.next())Et=Pe(Q,Et.value,De),Et!==null&&(W=p(Et,W,dt),st===null?et=Et:st.sibling=Et,st=Et);return Ft&&Cr(Q,dt),et}for(at=l(Q,at);!Et.done;dt++,Et=re.next())Et=We(at,Q,dt,Et.value,De),Et!==null&&(t&&Et.alternate!==null&&at.delete(Et.key===null?dt:Et.key),W=p(Et,W,dt),st===null?et=Et:st.sibling=Et,st=Et);return t&&at.forEach(function($_){return i(Q,$_)}),Ft&&Cr(Q,dt),et}function Xt(Q,W,re,De){if(typeof re=="object"&&re!==null&&re.type===O&&re.key===null&&(re=re.props.children),typeof re=="object"&&re!==null){switch(re.$$typeof){case J:e:{for(var et=re.key,st=W;st!==null;){if(st.key===et){if(et=re.type,et===O){if(st.tag===7){s(Q,st.sibling),W=u(st,re.props.children),W.return=Q,Q=W;break e}}else if(st.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===le&&jd(et)===st.type){s(Q,st.sibling),W=u(st,re.props),W.ref=Ss(Q,st,re),W.return=Q,Q=W;break e}s(Q,st);break}else i(Q,st);st=st.sibling}re.type===O?(W=Or(re.props.children,Q.mode,De,re.key),W.return=Q,Q=W):(De=Xa(re.type,re.key,re.props,null,Q.mode,De),De.ref=Ss(Q,W,re),De.return=Q,Q=De)}return w(Q);case z:e:{for(st=re.key;W!==null;){if(W.key===st)if(W.tag===4&&W.stateNode.containerInfo===re.containerInfo&&W.stateNode.implementation===re.implementation){s(Q,W.sibling),W=u(W,re.children||[]),W.return=Q,Q=W;break e}else{s(Q,W);break}else i(Q,W);W=W.sibling}W=hu(re,Q.mode,De),W.return=Q,Q=W}return w(Q);case le:return st=re._init,Xt(Q,W,st(re._payload),De)}if(T(re))return $e(Q,W,re,De);if(xe(re))return Qe(Q,W,re,De);Sa(Q,re)}return typeof re=="string"&&re!==""||typeof re=="number"?(re=""+re,W!==null&&W.tag===6?(s(Q,W.sibling),W=u(W,re),W.return=Q,Q=W):(s(Q,W),W=du(re,Q.mode,De),W.return=Q,Q=W),w(Q)):s(Q,W)}return Xt}var po=Yd(!0),qd=Yd(!1),Ma=Zi(null),Ea=null,mo=null,Mc=null;function Ec(){Mc=mo=Ea=null}function wc(t){var i=Ma.current;Nt(Ma),t._currentValue=i}function Tc(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function go(t,i){Ea=t,Mc=mo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(bn=!0),t.firstContext=null)}function Xn(t){var i=t._currentValue;if(Mc!==t)if(t={context:t,memoizedValue:i,next:null},mo===null){if(Ea===null)throw Error(n(308));mo=t,Ea.dependencies={lanes:0,firstContext:t}}else mo=mo.next=t;return i}var br=null;function Ac(t){br===null?br=[t]:br.push(t)}function $d(t,i,s,l){var u=i.interleaved;return u===null?(s.next=s,Ac(i)):(s.next=u.next,u.next=s),i.interleaved=s,Ai(t,l)}function Ai(t,i){t.lanes|=i;var s=t.alternate;for(s!==null&&(s.lanes|=i),s=t,t=t.return;t!==null;)t.childLanes|=i,s=t.alternate,s!==null&&(s.childLanes|=i),s=t,t=t.return;return s.tag===3?s.stateNode:null}var er=!1;function Rc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Kd(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ri(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function tr(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(St&2)!==0){var u=l.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),l.pending=i,Ai(t,s)}return u=l.interleaved,u===null?(i.next=i,Ac(l)):(i.next=u.next,u.next=i),l.interleaved=i,Ai(t,s)}function wa(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,Hl(t,s)}}function Zd(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var u=null,p=null;if(s=s.firstBaseUpdate,s!==null){do{var w={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};p===null?u=p=w:p=p.next=w,s=s.next}while(s!==null);p===null?u=p=i:p=p.next=i}else u=p=i;s={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:p,shared:l.shared,effects:l.effects},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}function Ta(t,i,s,l){var u=t.updateQueue;er=!1;var p=u.firstBaseUpdate,w=u.lastBaseUpdate,I=u.shared.pending;if(I!==null){u.shared.pending=null;var H=I,ue=H.next;H.next=null,w===null?p=ue:w.next=ue,w=H;var be=t.alternate;be!==null&&(be=be.updateQueue,I=be.lastBaseUpdate,I!==w&&(I===null?be.firstBaseUpdate=ue:I.next=ue,be.lastBaseUpdate=H))}if(p!==null){var Pe=u.baseState;w=0,be=ue=H=null,I=p;do{var Re=I.lane,We=I.eventTime;if((l&Re)===Re){be!==null&&(be=be.next={eventTime:We,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var $e=t,Qe=I;switch(Re=i,We=s,Qe.tag){case 1:if($e=Qe.payload,typeof $e=="function"){Pe=$e.call(We,Pe,Re);break e}Pe=$e;break e;case 3:$e.flags=$e.flags&-65537|128;case 0:if($e=Qe.payload,Re=typeof $e=="function"?$e.call(We,Pe,Re):$e,Re==null)break e;Pe=me({},Pe,Re);break e;case 2:er=!0}}I.callback!==null&&I.lane!==0&&(t.flags|=64,Re=u.effects,Re===null?u.effects=[I]:Re.push(I))}else We={eventTime:We,lane:Re,tag:I.tag,payload:I.payload,callback:I.callback,next:null},be===null?(ue=be=We,H=Pe):be=be.next=We,w|=Re;if(I=I.next,I===null){if(I=u.shared.pending,I===null)break;Re=I,I=Re.next,Re.next=null,u.lastBaseUpdate=Re,u.shared.pending=null}}while(!0);if(be===null&&(H=Pe),u.baseState=H,u.firstBaseUpdate=ue,u.lastBaseUpdate=be,i=u.shared.interleaved,i!==null){u=i;do w|=u.lane,u=u.next;while(u!==i)}else p===null&&(u.shared.lanes=0);Dr|=w,t.lanes=w,t.memoizedState=Pe}}function Qd(t,i,s){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],u=l.callback;if(u!==null){if(l.callback=null,l=s,typeof u!="function")throw Error(n(191,u));u.call(l)}}}var Ms={},fi=Zi(Ms),Es=Zi(Ms),ws=Zi(Ms);function Pr(t){if(t===Ms)throw Error(n(174));return t}function Cc(t,i){switch(bt(ws,i),bt(Es,t),bt(fi,Ms),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Me(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Me(i,t)}Nt(fi),bt(fi,i)}function _o(){Nt(fi),Nt(Es),Nt(ws)}function Jd(t){Pr(ws.current);var i=Pr(fi.current),s=Me(i,t.type);i!==s&&(bt(Es,t),bt(fi,s))}function bc(t){Es.current===t&&(Nt(fi),Nt(Es))}var Bt=Zi(0);function Aa(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Pc=[];function Lc(){for(var t=0;t<Pc.length;t++)Pc[t]._workInProgressVersionPrimary=null;Pc.length=0}var Ra=U.ReactCurrentDispatcher,Dc=U.ReactCurrentBatchConfig,Lr=0,Ht=null,$t=null,tn=null,Ca=!1,Ts=!1,As=0,__=0;function fn(){throw Error(n(321))}function Nc(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!ei(t[s],i[s]))return!1;return!0}function Ic(t,i,s,l,u,p){if(Lr=p,Ht=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ra.current=t===null||t.memoizedState===null?S_:M_,t=s(l,u),Ts){p=0;do{if(Ts=!1,As=0,25<=p)throw Error(n(301));p+=1,tn=$t=null,i.updateQueue=null,Ra.current=E_,t=s(l,u)}while(Ts)}if(Ra.current=La,i=$t!==null&&$t.next!==null,Lr=0,tn=$t=Ht=null,Ca=!1,i)throw Error(n(300));return t}function Uc(){var t=As!==0;return As=0,t}function di(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tn===null?Ht.memoizedState=tn=t:tn=tn.next=t,tn}function jn(){if($t===null){var t=Ht.alternate;t=t!==null?t.memoizedState:null}else t=$t.next;var i=tn===null?Ht.memoizedState:tn.next;if(i!==null)tn=i,$t=t;else{if(t===null)throw Error(n(310));$t=t,t={memoizedState:$t.memoizedState,baseState:$t.baseState,baseQueue:$t.baseQueue,queue:$t.queue,next:null},tn===null?Ht.memoizedState=tn=t:tn=tn.next=t}return tn}function Rs(t,i){return typeof i=="function"?i(t):i}function Oc(t){var i=jn(),s=i.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=t;var l=$t,u=l.baseQueue,p=s.pending;if(p!==null){if(u!==null){var w=u.next;u.next=p.next,p.next=w}l.baseQueue=u=p,s.pending=null}if(u!==null){p=u.next,l=l.baseState;var I=w=null,H=null,ue=p;do{var be=ue.lane;if((Lr&be)===be)H!==null&&(H=H.next={lane:0,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null}),l=ue.hasEagerState?ue.eagerState:t(l,ue.action);else{var Pe={lane:be,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null};H===null?(I=H=Pe,w=l):H=H.next=Pe,Ht.lanes|=be,Dr|=be}ue=ue.next}while(ue!==null&&ue!==p);H===null?w=l:H.next=I,ei(l,i.memoizedState)||(bn=!0),i.memoizedState=l,i.baseState=w,i.baseQueue=H,s.lastRenderedState=l}if(t=s.interleaved,t!==null){u=t;do p=u.lane,Ht.lanes|=p,Dr|=p,u=u.next;while(u!==t)}else u===null&&(s.lanes=0);return[i.memoizedState,s.dispatch]}function Fc(t){var i=jn(),s=i.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=t;var l=s.dispatch,u=s.pending,p=i.memoizedState;if(u!==null){s.pending=null;var w=u=u.next;do p=t(p,w.action),w=w.next;while(w!==u);ei(p,i.memoizedState)||(bn=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),s.lastRenderedState=p}return[p,l]}function eh(){}function th(t,i){var s=Ht,l=jn(),u=i(),p=!ei(l.memoizedState,u);if(p&&(l.memoizedState=u,bn=!0),l=l.queue,kc(rh.bind(null,s,l,t),[t]),l.getSnapshot!==i||p||tn!==null&&tn.memoizedState.tag&1){if(s.flags|=2048,Cs(9,ih.bind(null,s,l,u,i),void 0,null),nn===null)throw Error(n(349));(Lr&30)!==0||nh(s,i,u)}return u}function nh(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=Ht.updateQueue,i===null?(i={lastEffect:null,stores:null},Ht.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function ih(t,i,s,l){i.value=s,i.getSnapshot=l,oh(i)&&sh(t)}function rh(t,i,s){return s(function(){oh(i)&&sh(t)})}function oh(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!ei(t,s)}catch{return!0}}function sh(t){var i=Ai(t,1);i!==null&&oi(i,t,1,-1)}function ah(t){var i=di();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Rs,lastRenderedState:t},i.queue=t,t=t.dispatch=y_.bind(null,Ht,t),[i.memoizedState,t]}function Cs(t,i,s,l){return t={tag:t,create:i,destroy:s,deps:l,next:null},i=Ht.updateQueue,i===null?(i={lastEffect:null,stores:null},Ht.updateQueue=i,i.lastEffect=t.next=t):(s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t)),t}function lh(){return jn().memoizedState}function ba(t,i,s,l){var u=di();Ht.flags|=t,u.memoizedState=Cs(1|i,s,void 0,l===void 0?null:l)}function Pa(t,i,s,l){var u=jn();l=l===void 0?null:l;var p=void 0;if($t!==null){var w=$t.memoizedState;if(p=w.destroy,l!==null&&Nc(l,w.deps)){u.memoizedState=Cs(i,s,p,l);return}}Ht.flags|=t,u.memoizedState=Cs(1|i,s,p,l)}function ch(t,i){return ba(8390656,8,t,i)}function kc(t,i){return Pa(2048,8,t,i)}function uh(t,i){return Pa(4,2,t,i)}function fh(t,i){return Pa(4,4,t,i)}function dh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function hh(t,i,s){return s=s!=null?s.concat([t]):null,Pa(4,4,dh.bind(null,i,t),s)}function zc(){}function ph(t,i){var s=jn();i=i===void 0?null:i;var l=s.memoizedState;return l!==null&&i!==null&&Nc(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function mh(t,i){var s=jn();i=i===void 0?null:i;var l=s.memoizedState;return l!==null&&i!==null&&Nc(i,l[1])?l[0]:(t=t(),s.memoizedState=[t,i],t)}function gh(t,i,s){return(Lr&21)===0?(t.baseState&&(t.baseState=!1,bn=!0),t.memoizedState=s):(ei(s,i)||(s=Qs(),Ht.lanes|=s,Dr|=s,t.baseState=!0),i)}function v_(t,i){var s=Tt;Tt=s!==0&&4>s?s:4,t(!0);var l=Dc.transition;Dc.transition={};try{t(!1),i()}finally{Tt=s,Dc.transition=l}}function _h(){return jn().memoizedState}function x_(t,i,s){var l=or(t);if(s={lane:l,action:s,hasEagerState:!1,eagerState:null,next:null},vh(t))xh(i,s);else if(s=$d(t,i,s,l),s!==null){var u=xn();oi(s,t,l,u),yh(s,i,l)}}function y_(t,i,s){var l=or(t),u={lane:l,action:s,hasEagerState:!1,eagerState:null,next:null};if(vh(t))xh(i,u);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var w=i.lastRenderedState,I=p(w,s);if(u.hasEagerState=!0,u.eagerState=I,ei(I,w)){var H=i.interleaved;H===null?(u.next=u,Ac(i)):(u.next=H.next,H.next=u),i.interleaved=u;return}}catch{}finally{}s=$d(t,i,u,l),s!==null&&(u=xn(),oi(s,t,l,u),yh(s,i,l))}}function vh(t){var i=t.alternate;return t===Ht||i!==null&&i===Ht}function xh(t,i){Ts=Ca=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function yh(t,i,s){if((s&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,Hl(t,s)}}var La={readContext:Xn,useCallback:fn,useContext:fn,useEffect:fn,useImperativeHandle:fn,useInsertionEffect:fn,useLayoutEffect:fn,useMemo:fn,useReducer:fn,useRef:fn,useState:fn,useDebugValue:fn,useDeferredValue:fn,useTransition:fn,useMutableSource:fn,useSyncExternalStore:fn,useId:fn,unstable_isNewReconciler:!1},S_={readContext:Xn,useCallback:function(t,i){return di().memoizedState=[t,i===void 0?null:i],t},useContext:Xn,useEffect:ch,useImperativeHandle:function(t,i,s){return s=s!=null?s.concat([t]):null,ba(4194308,4,dh.bind(null,i,t),s)},useLayoutEffect:function(t,i){return ba(4194308,4,t,i)},useInsertionEffect:function(t,i){return ba(4,2,t,i)},useMemo:function(t,i){var s=di();return i=i===void 0?null:i,t=t(),s.memoizedState=[t,i],t},useReducer:function(t,i,s){var l=di();return i=s!==void 0?s(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=x_.bind(null,Ht,t),[l.memoizedState,t]},useRef:function(t){var i=di();return t={current:t},i.memoizedState=t},useState:ah,useDebugValue:zc,useDeferredValue:function(t){return di().memoizedState=t},useTransition:function(){var t=ah(!1),i=t[0];return t=v_.bind(null,t[1]),di().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,s){var l=Ht,u=di();if(Ft){if(s===void 0)throw Error(n(407));s=s()}else{if(s=i(),nn===null)throw Error(n(349));(Lr&30)!==0||nh(l,i,s)}u.memoizedState=s;var p={value:s,getSnapshot:i};return u.queue=p,ch(rh.bind(null,l,p,t),[t]),l.flags|=2048,Cs(9,ih.bind(null,l,p,s,i),void 0,null),s},useId:function(){var t=di(),i=nn.identifierPrefix;if(Ft){var s=Ti,l=wi;s=(l&~(1<<32-wt(l)-1)).toString(32)+s,i=":"+i+"R"+s,s=As++,0<s&&(i+="H"+s.toString(32)),i+=":"}else s=__++,i=":"+i+"r"+s.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},M_={readContext:Xn,useCallback:ph,useContext:Xn,useEffect:kc,useImperativeHandle:hh,useInsertionEffect:uh,useLayoutEffect:fh,useMemo:mh,useReducer:Oc,useRef:lh,useState:function(){return Oc(Rs)},useDebugValue:zc,useDeferredValue:function(t){var i=jn();return gh(i,$t.memoizedState,t)},useTransition:function(){var t=Oc(Rs)[0],i=jn().memoizedState;return[t,i]},useMutableSource:eh,useSyncExternalStore:th,useId:_h,unstable_isNewReconciler:!1},E_={readContext:Xn,useCallback:ph,useContext:Xn,useEffect:kc,useImperativeHandle:hh,useInsertionEffect:uh,useLayoutEffect:fh,useMemo:mh,useReducer:Fc,useRef:lh,useState:function(){return Fc(Rs)},useDebugValue:zc,useDeferredValue:function(t){var i=jn();return $t===null?i.memoizedState=t:gh(i,$t.memoizedState,t)},useTransition:function(){var t=Fc(Rs)[0],i=jn().memoizedState;return[t,i]},useMutableSource:eh,useSyncExternalStore:th,useId:_h,unstable_isNewReconciler:!1};function ni(t,i){if(t&&t.defaultProps){i=me({},i),t=t.defaultProps;for(var s in t)i[s]===void 0&&(i[s]=t[s]);return i}return i}function Bc(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:me({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Da={isMounted:function(t){return(t=t._reactInternals)?Si(t)===t:!1},enqueueSetState:function(t,i,s){t=t._reactInternals;var l=xn(),u=or(t),p=Ri(l,u);p.payload=i,s!=null&&(p.callback=s),i=tr(t,p,u),i!==null&&(oi(i,t,u,l),wa(i,t,u))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=xn(),u=or(t),p=Ri(l,u);p.tag=1,p.payload=i,s!=null&&(p.callback=s),i=tr(t,p,u),i!==null&&(oi(i,t,u,l),wa(i,t,u))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=xn(),l=or(t),u=Ri(s,l);u.tag=2,i!=null&&(u.callback=i),i=tr(t,u,l),i!==null&&(oi(i,t,l,s),wa(i,t,l))}};function Sh(t,i,s,l,u,p,w){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,p,w):i.prototype&&i.prototype.isPureReactComponent?!ps(s,l)||!ps(u,p):!0}function Mh(t,i,s){var l=!1,u=Qi,p=i.contextType;return typeof p=="object"&&p!==null?p=Xn(p):(u=Cn(i)?Ar:un.current,l=i.contextTypes,p=(l=l!=null)?co(t,u):Qi),i=new i(s,p),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Da,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=u,t.__reactInternalMemoizedMaskedChildContext=p),i}function Eh(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&Da.enqueueReplaceState(i,i.state,null)}function Hc(t,i,s,l){var u=t.stateNode;u.props=s,u.state=t.memoizedState,u.refs={},Rc(t);var p=i.contextType;typeof p=="object"&&p!==null?u.context=Xn(p):(p=Cn(i)?Ar:un.current,u.context=co(t,p)),u.state=t.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(Bc(t,i,p,s),u.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(i=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),i!==u.state&&Da.enqueueReplaceState(u,u.state,null),Ta(t,s,u,l),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308)}function vo(t,i){try{var s="",l=i;do s+=Se(l),l=l.return;while(l);var u=s}catch(p){u=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:i,stack:u,digest:null}}function Vc(t,i,s){return{value:t,source:null,stack:s??null,digest:i??null}}function Gc(t,i){try{console.error(i.value)}catch(s){setTimeout(function(){throw s})}}var w_=typeof WeakMap=="function"?WeakMap:Map;function wh(t,i,s){s=Ri(-1,s),s.tag=3,s.payload={element:null};var l=i.value;return s.callback=function(){za||(za=!0,ru=l),Gc(t,i)},s}function Th(t,i,s){s=Ri(-1,s),s.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var u=i.value;s.payload=function(){return l(u)},s.callback=function(){Gc(t,i)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(s.callback=function(){Gc(t,i),typeof l!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})}),s}function Ah(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new w_;var u=new Set;l.set(i,u)}else u=l.get(i),u===void 0&&(u=new Set,l.set(i,u));u.has(s)||(u.add(s),t=k_.bind(null,t,i,s),i.then(t,t))}function Rh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Ch(t,i,s,l,u){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(i=Ri(-1,1),i.tag=2,tr(s,i,1))),s.lanes|=1),t):(t.flags|=65536,t.lanes=u,t)}var T_=U.ReactCurrentOwner,bn=!1;function vn(t,i,s,l){i.child=t===null?qd(i,null,s,l):po(i,t.child,s,l)}function bh(t,i,s,l,u){s=s.render;var p=i.ref;return go(i,u),l=Ic(t,i,s,l,p,u),s=Uc(),t!==null&&!bn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~u,Ci(t,i,u)):(Ft&&s&&_c(i),i.flags|=1,vn(t,i,l,u),i.child)}function Ph(t,i,s,l,u){if(t===null){var p=s.type;return typeof p=="function"&&!fu(p)&&p.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(i.tag=15,i.type=p,Lh(t,i,p,l,u)):(t=Xa(s.type,null,l,i,i.mode,u),t.ref=i.ref,t.return=i,i.child=t)}if(p=t.child,(t.lanes&u)===0){var w=p.memoizedProps;if(s=s.compare,s=s!==null?s:ps,s(w,l)&&t.ref===i.ref)return Ci(t,i,u)}return i.flags|=1,t=ar(p,l),t.ref=i.ref,t.return=i,i.child=t}function Lh(t,i,s,l,u){if(t!==null){var p=t.memoizedProps;if(ps(p,l)&&t.ref===i.ref)if(bn=!1,i.pendingProps=l=p,(t.lanes&u)!==0)(t.flags&131072)!==0&&(bn=!0);else return i.lanes=t.lanes,Ci(t,i,u)}return Wc(t,i,s,l,u)}function Dh(t,i,s){var l=i.pendingProps,u=l.children,p=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},bt(yo,kn),kn|=s;else{if((s&1073741824)===0)return t=p!==null?p.baseLanes|s:s,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,bt(yo,kn),kn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=p!==null?p.baseLanes:s,bt(yo,kn),kn|=l}else p!==null?(l=p.baseLanes|s,i.memoizedState=null):l=s,bt(yo,kn),kn|=l;return vn(t,i,u,s),i.child}function Nh(t,i){var s=i.ref;(t===null&&s!==null||t!==null&&t.ref!==s)&&(i.flags|=512,i.flags|=2097152)}function Wc(t,i,s,l,u){var p=Cn(s)?Ar:un.current;return p=co(i,p),go(i,u),s=Ic(t,i,s,l,p,u),l=Uc(),t!==null&&!bn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~u,Ci(t,i,u)):(Ft&&l&&_c(i),i.flags|=1,vn(t,i,s,u),i.child)}function Ih(t,i,s,l,u){if(Cn(s)){var p=!0;ga(i)}else p=!1;if(go(i,u),i.stateNode===null)Ia(t,i),Mh(i,s,l),Hc(i,s,l,u),l=!0;else if(t===null){var w=i.stateNode,I=i.memoizedProps;w.props=I;var H=w.context,ue=s.contextType;typeof ue=="object"&&ue!==null?ue=Xn(ue):(ue=Cn(s)?Ar:un.current,ue=co(i,ue));var be=s.getDerivedStateFromProps,Pe=typeof be=="function"||typeof w.getSnapshotBeforeUpdate=="function";Pe||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(I!==l||H!==ue)&&Eh(i,w,l,ue),er=!1;var Re=i.memoizedState;w.state=Re,Ta(i,l,w,u),H=i.memoizedState,I!==l||Re!==H||Rn.current||er?(typeof be=="function"&&(Bc(i,s,be,l),H=i.memoizedState),(I=er||Sh(i,s,I,l,Re,H,ue))?(Pe||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(i.flags|=4194308)):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=H),w.props=l,w.state=H,w.context=ue,l=I):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{w=i.stateNode,Kd(t,i),I=i.memoizedProps,ue=i.type===i.elementType?I:ni(i.type,I),w.props=ue,Pe=i.pendingProps,Re=w.context,H=s.contextType,typeof H=="object"&&H!==null?H=Xn(H):(H=Cn(s)?Ar:un.current,H=co(i,H));var We=s.getDerivedStateFromProps;(be=typeof We=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(I!==Pe||Re!==H)&&Eh(i,w,l,H),er=!1,Re=i.memoizedState,w.state=Re,Ta(i,l,w,u);var $e=i.memoizedState;I!==Pe||Re!==$e||Rn.current||er?(typeof We=="function"&&(Bc(i,s,We,l),$e=i.memoizedState),(ue=er||Sh(i,s,ue,l,Re,$e,H)||!1)?(be||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(l,$e,H),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(l,$e,H)),typeof w.componentDidUpdate=="function"&&(i.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof w.componentDidUpdate!="function"||I===t.memoizedProps&&Re===t.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&Re===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=$e),w.props=l,w.state=$e,w.context=H,l=ue):(typeof w.componentDidUpdate!="function"||I===t.memoizedProps&&Re===t.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&Re===t.memoizedState||(i.flags|=1024),l=!1)}return Xc(t,i,s,l,p,u)}function Xc(t,i,s,l,u,p){Nh(t,i);var w=(i.flags&128)!==0;if(!l&&!w)return u&&zd(i,s,!1),Ci(t,i,p);l=i.stateNode,T_.current=i;var I=w&&typeof s.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&w?(i.child=po(i,t.child,null,p),i.child=po(i,null,I,p)):vn(t,i,I,p),i.memoizedState=l.state,u&&zd(i,s,!0),i.child}function Uh(t){var i=t.stateNode;i.pendingContext?Fd(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Fd(t,i.context,!1),Cc(t,i.containerInfo)}function Oh(t,i,s,l,u){return ho(),Sc(u),i.flags|=256,vn(t,i,s,l),i.child}var jc={dehydrated:null,treeContext:null,retryLane:0};function Yc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Fh(t,i,s){var l=i.pendingProps,u=Bt.current,p=!1,w=(i.flags&128)!==0,I;if((I=w)||(I=t!==null&&t.memoizedState===null?!1:(u&2)!==0),I?(p=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(u|=1),bt(Bt,u&1),t===null)return yc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(w=l.children,t=l.fallback,p?(l=i.mode,p=i.child,w={mode:"hidden",children:w},(l&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=w):p=ja(w,l,0,null),t=Or(t,l,s,null),p.return=i,t.return=i,p.sibling=t,i.child=p,i.child.memoizedState=Yc(s),i.memoizedState=jc,t):qc(i,w));if(u=t.memoizedState,u!==null&&(I=u.dehydrated,I!==null))return A_(t,i,w,l,I,u,s);if(p){p=l.fallback,w=i.mode,u=t.child,I=u.sibling;var H={mode:"hidden",children:l.children};return(w&1)===0&&i.child!==u?(l=i.child,l.childLanes=0,l.pendingProps=H,i.deletions=null):(l=ar(u,H),l.subtreeFlags=u.subtreeFlags&14680064),I!==null?p=ar(I,p):(p=Or(p,w,s,null),p.flags|=2),p.return=i,l.return=i,l.sibling=p,i.child=l,l=p,p=i.child,w=t.child.memoizedState,w=w===null?Yc(s):{baseLanes:w.baseLanes|s,cachePool:null,transitions:w.transitions},p.memoizedState=w,p.childLanes=t.childLanes&~s,i.memoizedState=jc,l}return p=t.child,t=p.sibling,l=ar(p,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=s),l.return=i,l.sibling=null,t!==null&&(s=i.deletions,s===null?(i.deletions=[t],i.flags|=16):s.push(t)),i.child=l,i.memoizedState=null,l}function qc(t,i){return i=ja({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Na(t,i,s,l){return l!==null&&Sc(l),po(i,t.child,null,s),t=qc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function A_(t,i,s,l,u,p,w){if(s)return i.flags&256?(i.flags&=-257,l=Vc(Error(n(422))),Na(t,i,w,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(p=l.fallback,u=i.mode,l=ja({mode:"visible",children:l.children},u,0,null),p=Or(p,u,w,null),p.flags|=2,l.return=i,p.return=i,l.sibling=p,i.child=l,(i.mode&1)!==0&&po(i,t.child,null,w),i.child.memoizedState=Yc(w),i.memoizedState=jc,p);if((i.mode&1)===0)return Na(t,i,w,null);if(u.data==="$!"){if(l=u.nextSibling&&u.nextSibling.dataset,l)var I=l.dgst;return l=I,p=Error(n(419)),l=Vc(p,l,void 0),Na(t,i,w,l)}if(I=(w&t.childLanes)!==0,bn||I){if(l=nn,l!==null){switch(w&-w){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=(u&(l.suspendedLanes|w))!==0?0:u,u!==0&&u!==p.retryLane&&(p.retryLane=u,Ai(t,u),oi(l,t,u,-1))}return uu(),l=Vc(Error(n(421))),Na(t,i,w,l)}return u.data==="$?"?(i.flags|=128,i.child=t.child,i=z_.bind(null,t),u._reactRetry=i,null):(t=p.treeContext,Fn=Ki(u.nextSibling),On=i,Ft=!0,ti=null,t!==null&&(Gn[Wn++]=wi,Gn[Wn++]=Ti,Gn[Wn++]=Rr,wi=t.id,Ti=t.overflow,Rr=i),i=qc(i,l.children),i.flags|=4096,i)}function kh(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Tc(t.return,i,s)}function $c(t,i,s,l,u){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:u}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=l,p.tail=s,p.tailMode=u)}function zh(t,i,s){var l=i.pendingProps,u=l.revealOrder,p=l.tail;if(vn(t,i,l.children,s),l=Bt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&kh(t,s,i);else if(t.tag===19)kh(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(bt(Bt,l),(i.mode&1)===0)i.memoizedState=null;else switch(u){case"forwards":for(s=i.child,u=null;s!==null;)t=s.alternate,t!==null&&Aa(t)===null&&(u=s),s=s.sibling;s=u,s===null?(u=i.child,i.child=null):(u=s.sibling,s.sibling=null),$c(i,!1,u,s,p);break;case"backwards":for(s=null,u=i.child,i.child=null;u!==null;){if(t=u.alternate,t!==null&&Aa(t)===null){i.child=u;break}t=u.sibling,u.sibling=s,s=u,u=t}$c(i,!0,s,null,p);break;case"together":$c(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ia(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Ci(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),Dr|=i.lanes,(s&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,s=ar(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=ar(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function R_(t,i,s){switch(i.tag){case 3:Uh(i),ho();break;case 5:Jd(i);break;case 1:Cn(i.type)&&ga(i);break;case 4:Cc(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,u=i.memoizedProps.value;bt(Ma,l._currentValue),l._currentValue=u;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(bt(Bt,Bt.current&1),i.flags|=128,null):(s&i.child.childLanes)!==0?Fh(t,i,s):(bt(Bt,Bt.current&1),t=Ci(t,i,s),t!==null?t.sibling:null);bt(Bt,Bt.current&1);break;case 19:if(l=(s&i.childLanes)!==0,(t.flags&128)!==0){if(l)return zh(t,i,s);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),bt(Bt,Bt.current),l)break;return null;case 22:case 23:return i.lanes=0,Dh(t,i,s)}return Ci(t,i,s)}var Bh,Kc,Hh,Vh;Bh=function(t,i){for(var s=i.child;s!==null;){if(s.tag===5||s.tag===6)t.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},Kc=function(){},Hh=function(t,i,s,l){var u=t.memoizedProps;if(u!==l){t=i.stateNode,Pr(fi.current);var p=null;switch(s){case"input":u=nt(t,u),l=nt(t,l),p=[];break;case"select":u=me({},u,{value:void 0}),l=me({},l,{value:void 0}),p=[];break;case"textarea":u=D(t,u),l=D(t,l),p=[];break;default:typeof u.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=ha)}rt(s,l);var w;s=null;for(ue in u)if(!l.hasOwnProperty(ue)&&u.hasOwnProperty(ue)&&u[ue]!=null)if(ue==="style"){var I=u[ue];for(w in I)I.hasOwnProperty(w)&&(s||(s={}),s[w]="")}else ue!=="dangerouslySetInnerHTML"&&ue!=="children"&&ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&ue!=="autoFocus"&&(a.hasOwnProperty(ue)?p||(p=[]):(p=p||[]).push(ue,null));for(ue in l){var H=l[ue];if(I=u!=null?u[ue]:void 0,l.hasOwnProperty(ue)&&H!==I&&(H!=null||I!=null))if(ue==="style")if(I){for(w in I)!I.hasOwnProperty(w)||H&&H.hasOwnProperty(w)||(s||(s={}),s[w]="");for(w in H)H.hasOwnProperty(w)&&I[w]!==H[w]&&(s||(s={}),s[w]=H[w])}else s||(p||(p=[]),p.push(ue,s)),s=H;else ue==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,I=I?I.__html:void 0,H!=null&&I!==H&&(p=p||[]).push(ue,H)):ue==="children"?typeof H!="string"&&typeof H!="number"||(p=p||[]).push(ue,""+H):ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&(a.hasOwnProperty(ue)?(H!=null&&ue==="onScroll"&&Dt("scroll",t),p||I===H||(p=[])):(p=p||[]).push(ue,H))}s&&(p=p||[]).push("style",s);var ue=p;(i.updateQueue=ue)&&(i.flags|=4)}},Vh=function(t,i,s,l){s!==l&&(i.flags|=4)};function bs(t,i){if(!Ft)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function dn(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var u=t.child;u!==null;)s|=u.lanes|u.childLanes,l|=u.subtreeFlags&14680064,l|=u.flags&14680064,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)s|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function C_(t,i,s){var l=i.pendingProps;switch(vc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dn(i),null;case 1:return Cn(i.type)&&ma(),dn(i),null;case 3:return l=i.stateNode,_o(),Nt(Rn),Nt(un),Lc(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(ya(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ti!==null&&(au(ti),ti=null))),Kc(t,i),dn(i),null;case 5:bc(i);var u=Pr(ws.current);if(s=i.type,t!==null&&i.stateNode!=null)Hh(t,i,s,l,u),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return dn(i),null}if(t=Pr(fi.current),ya(i)){l=i.stateNode,s=i.type;var p=i.memoizedProps;switch(l[ui]=i,l[xs]=p,t=(i.mode&1)!==0,s){case"dialog":Dt("cancel",l),Dt("close",l);break;case"iframe":case"object":case"embed":Dt("load",l);break;case"video":case"audio":for(u=0;u<gs.length;u++)Dt(gs[u],l);break;case"source":Dt("error",l);break;case"img":case"image":case"link":Dt("error",l),Dt("load",l);break;case"details":Dt("toggle",l);break;case"input":qe(l,p),Dt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!p.multiple},Dt("invalid",l);break;case"textarea":G(l,p),Dt("invalid",l)}rt(s,p),u=null;for(var w in p)if(p.hasOwnProperty(w)){var I=p[w];w==="children"?typeof I=="string"?l.textContent!==I&&(p.suppressHydrationWarning!==!0&&da(l.textContent,I,t),u=["children",I]):typeof I=="number"&&l.textContent!==""+I&&(p.suppressHydrationWarning!==!0&&da(l.textContent,I,t),u=["children",""+I]):a.hasOwnProperty(w)&&I!=null&&w==="onScroll"&&Dt("scroll",l)}switch(s){case"input":Ue(l),Oe(l,p,!0);break;case"textarea":Ue(l),ne(l);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(l.onclick=ha)}l=u,i.updateQueue=l,l!==null&&(i.flags|=4)}else{w=u.nodeType===9?u:u.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=we(s)),t==="http://www.w3.org/1999/xhtml"?s==="script"?(t=w.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=w.createElement(s,{is:l.is}):(t=w.createElement(s),s==="select"&&(w=t,l.multiple?w.multiple=!0:l.size&&(w.size=l.size))):t=w.createElementNS(t,s),t[ui]=i,t[xs]=l,Bh(t,i,!1,!1),i.stateNode=t;e:{switch(w=yt(s,l),s){case"dialog":Dt("cancel",t),Dt("close",t),u=l;break;case"iframe":case"object":case"embed":Dt("load",t),u=l;break;case"video":case"audio":for(u=0;u<gs.length;u++)Dt(gs[u],t);u=l;break;case"source":Dt("error",t),u=l;break;case"img":case"image":case"link":Dt("error",t),Dt("load",t),u=l;break;case"details":Dt("toggle",t),u=l;break;case"input":qe(t,l),u=nt(t,l),Dt("invalid",t);break;case"option":u=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},u=me({},l,{value:void 0}),Dt("invalid",t);break;case"textarea":G(t,l),u=D(t,l),Dt("invalid",t);break;default:u=l}rt(s,u),I=u;for(p in I)if(I.hasOwnProperty(p)){var H=I[p];p==="style"?Be(t,H):p==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&je(t,H)):p==="children"?typeof H=="string"?(s!=="textarea"||H!=="")&&Ee(t,H):typeof H=="number"&&Ee(t,""+H):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(a.hasOwnProperty(p)?H!=null&&p==="onScroll"&&Dt("scroll",t):H!=null&&P(t,p,H,w))}switch(s){case"input":Ue(t),Oe(t,l,!1);break;case"textarea":Ue(t),ne(t);break;case"option":l.value!=null&&t.setAttribute("value",""+ge(l.value));break;case"select":t.multiple=!!l.multiple,p=l.value,p!=null?S(t,!!l.multiple,p,!1):l.defaultValue!=null&&S(t,!!l.multiple,l.defaultValue,!0);break;default:typeof u.onClick=="function"&&(t.onclick=ha)}switch(s){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return dn(i),null;case 6:if(t&&i.stateNode!=null)Vh(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(s=Pr(ws.current),Pr(fi.current),ya(i)){if(l=i.stateNode,s=i.memoizedProps,l[ui]=i,(p=l.nodeValue!==s)&&(t=On,t!==null))switch(t.tag){case 3:da(l.nodeValue,s,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&da(l.nodeValue,s,(t.mode&1)!==0)}p&&(i.flags|=4)}else l=(s.nodeType===9?s:s.ownerDocument).createTextNode(l),l[ui]=i,i.stateNode=l}return dn(i),null;case 13:if(Nt(Bt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ft&&Fn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Xd(),ho(),i.flags|=98560,p=!1;else if(p=ya(i),l!==null&&l.dehydrated!==null){if(t===null){if(!p)throw Error(n(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(n(317));p[ui]=i}else ho(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;dn(i),p=!1}else ti!==null&&(au(ti),ti=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=s,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Bt.current&1)!==0?Kt===0&&(Kt=3):uu())),i.updateQueue!==null&&(i.flags|=4),dn(i),null);case 4:return _o(),Kc(t,i),t===null&&_s(i.stateNode.containerInfo),dn(i),null;case 10:return wc(i.type._context),dn(i),null;case 17:return Cn(i.type)&&ma(),dn(i),null;case 19:if(Nt(Bt),p=i.memoizedState,p===null)return dn(i),null;if(l=(i.flags&128)!==0,w=p.rendering,w===null)if(l)bs(p,!1);else{if(Kt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(w=Aa(t),w!==null){for(i.flags|=128,bs(p,!1),l=w.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=s,s=i.child;s!==null;)p=s,t=l,p.flags&=14680066,w=p.alternate,w===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=w.childLanes,p.lanes=w.lanes,p.child=w.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=w.memoizedProps,p.memoizedState=w.memoizedState,p.updateQueue=w.updateQueue,p.type=w.type,t=w.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),s=s.sibling;return bt(Bt,Bt.current&1|2),i.child}t=t.sibling}p.tail!==null&&ze()>So&&(i.flags|=128,l=!0,bs(p,!1),i.lanes=4194304)}else{if(!l)if(t=Aa(w),t!==null){if(i.flags|=128,l=!0,s=t.updateQueue,s!==null&&(i.updateQueue=s,i.flags|=4),bs(p,!0),p.tail===null&&p.tailMode==="hidden"&&!w.alternate&&!Ft)return dn(i),null}else 2*ze()-p.renderingStartTime>So&&s!==1073741824&&(i.flags|=128,l=!0,bs(p,!1),i.lanes=4194304);p.isBackwards?(w.sibling=i.child,i.child=w):(s=p.last,s!==null?s.sibling=w:i.child=w,p.last=w)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=ze(),i.sibling=null,s=Bt.current,bt(Bt,l?s&1|2:s&1),i):(dn(i),null);case 22:case 23:return cu(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(kn&1073741824)!==0&&(dn(i),i.subtreeFlags&6&&(i.flags|=8192)):dn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function b_(t,i){switch(vc(i),i.tag){case 1:return Cn(i.type)&&ma(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return _o(),Nt(Rn),Nt(un),Lc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return bc(i),null;case 13:if(Nt(Bt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));ho()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Nt(Bt),null;case 4:return _o(),null;case 10:return wc(i.type._context),null;case 22:case 23:return cu(),null;case 24:return null;default:return null}}var Ua=!1,hn=!1,P_=typeof WeakSet=="function"?WeakSet:Set,Ye=null;function xo(t,i){var s=t.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(l){Gt(t,i,l)}else s.current=null}function Zc(t,i,s){try{s()}catch(l){Gt(t,i,l)}}var Gh=!1;function L_(t,i){if(cc=ta,t=Sd(),tc(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var u=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{s.nodeType,p.nodeType}catch{s=null;break e}var w=0,I=-1,H=-1,ue=0,be=0,Pe=t,Re=null;t:for(;;){for(var We;Pe!==s||u!==0&&Pe.nodeType!==3||(I=w+u),Pe!==p||l!==0&&Pe.nodeType!==3||(H=w+l),Pe.nodeType===3&&(w+=Pe.nodeValue.length),(We=Pe.firstChild)!==null;)Re=Pe,Pe=We;for(;;){if(Pe===t)break t;if(Re===s&&++ue===u&&(I=w),Re===p&&++be===l&&(H=w),(We=Pe.nextSibling)!==null)break;Pe=Re,Re=Pe.parentNode}Pe=We}s=I===-1||H===-1?null:{start:I,end:H}}else s=null}s=s||{start:0,end:0}}else s=null;for(uc={focusedElem:t,selectionRange:s},ta=!1,Ye=i;Ye!==null;)if(i=Ye,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Ye=t;else for(;Ye!==null;){i=Ye;try{var $e=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if($e!==null){var Qe=$e.memoizedProps,Xt=$e.memoizedState,Q=i.stateNode,W=Q.getSnapshotBeforeUpdate(i.elementType===i.type?Qe:ni(i.type,Qe),Xt);Q.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var re=i.stateNode.containerInfo;re.nodeType===1?re.textContent="":re.nodeType===9&&re.documentElement&&re.removeChild(re.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(De){Gt(i,i.return,De)}if(t=i.sibling,t!==null){t.return=i.return,Ye=t;break}Ye=i.return}return $e=Gh,Gh=!1,$e}function Ps(t,i,s){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var u=l=l.next;do{if((u.tag&t)===t){var p=u.destroy;u.destroy=void 0,p!==void 0&&Zc(i,s,p)}u=u.next}while(u!==l)}}function Oa(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&t)===t){var l=s.create;s.destroy=l()}s=s.next}while(s!==i)}}function Qc(t){var i=t.ref;if(i!==null){var s=t.stateNode;switch(t.tag){case 5:t=s;break;default:t=s}typeof i=="function"?i(t):i.current=t}}function Wh(t){var i=t.alternate;i!==null&&(t.alternate=null,Wh(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[ui],delete i[xs],delete i[pc],delete i[h_],delete i[p_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Xh(t){return t.tag===5||t.tag===3||t.tag===4}function jh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Xh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Jc(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.nodeType===8?s.parentNode.insertBefore(t,i):s.insertBefore(t,i):(s.nodeType===8?(i=s.parentNode,i.insertBefore(t,s)):(i=s,i.appendChild(t)),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=ha));else if(l!==4&&(t=t.child,t!==null))for(Jc(t,i,s),t=t.sibling;t!==null;)Jc(t,i,s),t=t.sibling}function eu(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(eu(t,i,s),t=t.sibling;t!==null;)eu(t,i,s),t=t.sibling}var an=null,ii=!1;function nr(t,i,s){for(s=s.child;s!==null;)Yh(t,i,s),s=s.sibling}function Yh(t,i,s){if(pt&&typeof pt.onCommitFiberUnmount=="function")try{pt.onCommitFiberUnmount(Jt,s)}catch{}switch(s.tag){case 5:hn||xo(s,i);case 6:var l=an,u=ii;an=null,nr(t,i,s),an=l,ii=u,an!==null&&(ii?(t=an,s=s.stateNode,t.nodeType===8?t.parentNode.removeChild(s):t.removeChild(s)):an.removeChild(s.stateNode));break;case 18:an!==null&&(ii?(t=an,s=s.stateNode,t.nodeType===8?hc(t.parentNode,s):t.nodeType===1&&hc(t,s),ls(t)):hc(an,s.stateNode));break;case 4:l=an,u=ii,an=s.stateNode.containerInfo,ii=!0,nr(t,i,s),an=l,ii=u;break;case 0:case 11:case 14:case 15:if(!hn&&(l=s.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){u=l=l.next;do{var p=u,w=p.destroy;p=p.tag,w!==void 0&&((p&2)!==0||(p&4)!==0)&&Zc(s,i,w),u=u.next}while(u!==l)}nr(t,i,s);break;case 1:if(!hn&&(xo(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=s.memoizedProps,l.state=s.memoizedState,l.componentWillUnmount()}catch(I){Gt(s,i,I)}nr(t,i,s);break;case 21:nr(t,i,s);break;case 22:s.mode&1?(hn=(l=hn)||s.memoizedState!==null,nr(t,i,s),hn=l):nr(t,i,s);break;default:nr(t,i,s)}}function qh(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var s=t.stateNode;s===null&&(s=t.stateNode=new P_),i.forEach(function(l){var u=B_.bind(null,t,l);s.has(l)||(s.add(l),l.then(u,u))})}}function ri(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var u=s[l];try{var p=t,w=i,I=w;e:for(;I!==null;){switch(I.tag){case 5:an=I.stateNode,ii=!1;break e;case 3:an=I.stateNode.containerInfo,ii=!0;break e;case 4:an=I.stateNode.containerInfo,ii=!0;break e}I=I.return}if(an===null)throw Error(n(160));Yh(p,w,u),an=null,ii=!1;var H=u.alternate;H!==null&&(H.return=null),u.return=null}catch(ue){Gt(u,i,ue)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)$h(i,t),i=i.sibling}function $h(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ri(i,t),hi(t),l&4){try{Ps(3,t,t.return),Oa(3,t)}catch(Qe){Gt(t,t.return,Qe)}try{Ps(5,t,t.return)}catch(Qe){Gt(t,t.return,Qe)}}break;case 1:ri(i,t),hi(t),l&512&&s!==null&&xo(s,s.return);break;case 5:if(ri(i,t),hi(t),l&512&&s!==null&&xo(s,s.return),t.flags&32){var u=t.stateNode;try{Ee(u,"")}catch(Qe){Gt(t,t.return,Qe)}}if(l&4&&(u=t.stateNode,u!=null)){var p=t.memoizedProps,w=s!==null?s.memoizedProps:p,I=t.type,H=t.updateQueue;if(t.updateQueue=null,H!==null)try{I==="input"&&p.type==="radio"&&p.name!=null&&q(u,p),yt(I,w);var ue=yt(I,p);for(w=0;w<H.length;w+=2){var be=H[w],Pe=H[w+1];be==="style"?Be(u,Pe):be==="dangerouslySetInnerHTML"?je(u,Pe):be==="children"?Ee(u,Pe):P(u,be,Pe,ue)}switch(I){case"input":Fe(u,p);break;case"textarea":Z(u,p);break;case"select":var Re=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!p.multiple;var We=p.value;We!=null?S(u,!!p.multiple,We,!1):Re!==!!p.multiple&&(p.defaultValue!=null?S(u,!!p.multiple,p.defaultValue,!0):S(u,!!p.multiple,p.multiple?[]:"",!1))}u[xs]=p}catch(Qe){Gt(t,t.return,Qe)}}break;case 6:if(ri(i,t),hi(t),l&4){if(t.stateNode===null)throw Error(n(162));u=t.stateNode,p=t.memoizedProps;try{u.nodeValue=p}catch(Qe){Gt(t,t.return,Qe)}}break;case 3:if(ri(i,t),hi(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{ls(i.containerInfo)}catch(Qe){Gt(t,t.return,Qe)}break;case 4:ri(i,t),hi(t);break;case 13:ri(i,t),hi(t),u=t.child,u.flags&8192&&(p=u.memoizedState!==null,u.stateNode.isHidden=p,!p||u.alternate!==null&&u.alternate.memoizedState!==null||(iu=ze())),l&4&&qh(t);break;case 22:if(be=s!==null&&s.memoizedState!==null,t.mode&1?(hn=(ue=hn)||be,ri(i,t),hn=ue):ri(i,t),hi(t),l&8192){if(ue=t.memoizedState!==null,(t.stateNode.isHidden=ue)&&!be&&(t.mode&1)!==0)for(Ye=t,be=t.child;be!==null;){for(Pe=Ye=be;Ye!==null;){switch(Re=Ye,We=Re.child,Re.tag){case 0:case 11:case 14:case 15:Ps(4,Re,Re.return);break;case 1:xo(Re,Re.return);var $e=Re.stateNode;if(typeof $e.componentWillUnmount=="function"){l=Re,s=Re.return;try{i=l,$e.props=i.memoizedProps,$e.state=i.memoizedState,$e.componentWillUnmount()}catch(Qe){Gt(l,s,Qe)}}break;case 5:xo(Re,Re.return);break;case 22:if(Re.memoizedState!==null){Qh(Pe);continue}}We!==null?(We.return=Re,Ye=We):Qh(Pe)}be=be.sibling}e:for(be=null,Pe=t;;){if(Pe.tag===5){if(be===null){be=Pe;try{u=Pe.stateNode,ue?(p=u.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(I=Pe.stateNode,H=Pe.memoizedProps.style,w=H!=null&&H.hasOwnProperty("display")?H.display:null,I.style.display=Ke("display",w))}catch(Qe){Gt(t,t.return,Qe)}}}else if(Pe.tag===6){if(be===null)try{Pe.stateNode.nodeValue=ue?"":Pe.memoizedProps}catch(Qe){Gt(t,t.return,Qe)}}else if((Pe.tag!==22&&Pe.tag!==23||Pe.memoizedState===null||Pe===t)&&Pe.child!==null){Pe.child.return=Pe,Pe=Pe.child;continue}if(Pe===t)break e;for(;Pe.sibling===null;){if(Pe.return===null||Pe.return===t)break e;be===Pe&&(be=null),Pe=Pe.return}be===Pe&&(be=null),Pe.sibling.return=Pe.return,Pe=Pe.sibling}}break;case 19:ri(i,t),hi(t),l&4&&qh(t);break;case 21:break;default:ri(i,t),hi(t)}}function hi(t){var i=t.flags;if(i&2){try{e:{for(var s=t.return;s!==null;){if(Xh(s)){var l=s;break e}s=s.return}throw Error(n(160))}switch(l.tag){case 5:var u=l.stateNode;l.flags&32&&(Ee(u,""),l.flags&=-33);var p=jh(t);eu(t,p,u);break;case 3:case 4:var w=l.stateNode.containerInfo,I=jh(t);Jc(t,I,w);break;default:throw Error(n(161))}}catch(H){Gt(t,t.return,H)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function D_(t,i,s){Ye=t,Kh(t)}function Kh(t,i,s){for(var l=(t.mode&1)!==0;Ye!==null;){var u=Ye,p=u.child;if(u.tag===22&&l){var w=u.memoizedState!==null||Ua;if(!w){var I=u.alternate,H=I!==null&&I.memoizedState!==null||hn;I=Ua;var ue=hn;if(Ua=w,(hn=H)&&!ue)for(Ye=u;Ye!==null;)w=Ye,H=w.child,w.tag===22&&w.memoizedState!==null?Jh(u):H!==null?(H.return=w,Ye=H):Jh(u);for(;p!==null;)Ye=p,Kh(p),p=p.sibling;Ye=u,Ua=I,hn=ue}Zh(t)}else(u.subtreeFlags&8772)!==0&&p!==null?(p.return=u,Ye=p):Zh(t)}}function Zh(t){for(;Ye!==null;){var i=Ye;if((i.flags&8772)!==0){var s=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:hn||Oa(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!hn)if(s===null)l.componentDidMount();else{var u=i.elementType===i.type?s.memoizedProps:ni(i.type,s.memoizedProps);l.componentDidUpdate(u,s.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&Qd(i,p,l);break;case 3:var w=i.updateQueue;if(w!==null){if(s=null,i.child!==null)switch(i.child.tag){case 5:s=i.child.stateNode;break;case 1:s=i.child.stateNode}Qd(i,w,s)}break;case 5:var I=i.stateNode;if(s===null&&i.flags&4){s=I;var H=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&s.focus();break;case"img":H.src&&(s.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ue=i.alternate;if(ue!==null){var be=ue.memoizedState;if(be!==null){var Pe=be.dehydrated;Pe!==null&&ls(Pe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}hn||i.flags&512&&Qc(i)}catch(Re){Gt(i,i.return,Re)}}if(i===t){Ye=null;break}if(s=i.sibling,s!==null){s.return=i.return,Ye=s;break}Ye=i.return}}function Qh(t){for(;Ye!==null;){var i=Ye;if(i===t){Ye=null;break}var s=i.sibling;if(s!==null){s.return=i.return,Ye=s;break}Ye=i.return}}function Jh(t){for(;Ye!==null;){var i=Ye;try{switch(i.tag){case 0:case 11:case 15:var s=i.return;try{Oa(4,i)}catch(H){Gt(i,s,H)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var u=i.return;try{l.componentDidMount()}catch(H){Gt(i,u,H)}}var p=i.return;try{Qc(i)}catch(H){Gt(i,p,H)}break;case 5:var w=i.return;try{Qc(i)}catch(H){Gt(i,w,H)}}}catch(H){Gt(i,i.return,H)}if(i===t){Ye=null;break}var I=i.sibling;if(I!==null){I.return=i.return,Ye=I;break}Ye=i.return}}var N_=Math.ceil,Fa=U.ReactCurrentDispatcher,tu=U.ReactCurrentOwner,Yn=U.ReactCurrentBatchConfig,St=0,nn=null,jt=null,ln=0,kn=0,yo=Zi(0),Kt=0,Ls=null,Dr=0,ka=0,nu=0,Ds=null,Pn=null,iu=0,So=1/0,bi=null,za=!1,ru=null,ir=null,Ba=!1,rr=null,Ha=0,Ns=0,ou=null,Va=-1,Ga=0;function xn(){return(St&6)!==0?ze():Va!==-1?Va:Va=ze()}function or(t){return(t.mode&1)===0?1:(St&2)!==0&&ln!==0?ln&-ln:g_.transition!==null?(Ga===0&&(Ga=Qs()),Ga):(t=Tt,t!==0||(t=window.event,t=t===void 0?16:td(t.type)),t)}function oi(t,i,s,l){if(50<Ns)throw Ns=0,ou=null,Error(n(185));is(t,s,l),((St&2)===0||t!==nn)&&(t===nn&&((St&2)===0&&(ka|=s),Kt===4&&sr(t,ln)),Ln(t,l),s===1&&St===0&&(i.mode&1)===0&&(So=ze()+500,_a&&Ji()))}function Ln(t,i){var s=t.callbackNode;An(t,i);var l=In(t,t===nn?ln:0);if(l===0)s!==null&&Ie(s),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(s!=null&&Ie(s),i===1)t.tag===0?m_(tp.bind(null,t)):Bd(tp.bind(null,t)),f_(function(){(St&6)===0&&Ji()}),s=null;else{switch(Yf(l)){case 1:s=ct;break;case 4:s=ot;break;case 16:s=xt;break;case 536870912:s=Lt;break;default:s=xt}s=cp(s,ep.bind(null,t))}t.callbackPriority=i,t.callbackNode=s}}function ep(t,i){if(Va=-1,Ga=0,(St&6)!==0)throw Error(n(327));var s=t.callbackNode;if(Mo()&&t.callbackNode!==s)return null;var l=In(t,t===nn?ln:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Wa(t,l);else{i=l;var u=St;St|=2;var p=ip();(nn!==t||ln!==i)&&(bi=null,So=ze()+500,Ir(t,i));do try{O_();break}catch(I){np(t,I)}while(!0);Ec(),Fa.current=p,St=u,jt!==null?i=0:(nn=null,ln=0,i=Kt)}if(i!==0){if(i===2&&(u=wr(t),u!==0&&(l=u,i=su(t,u))),i===1)throw s=Ls,Ir(t,0),sr(t,l),Ln(t,ze()),s;if(i===6)sr(t,l);else{if(u=t.current.alternate,(l&30)===0&&!I_(u)&&(i=Wa(t,l),i===2&&(p=wr(t),p!==0&&(l=p,i=su(t,p))),i===1))throw s=Ls,Ir(t,0),sr(t,l),Ln(t,ze()),s;switch(t.finishedWork=u,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Ur(t,Pn,bi);break;case 3:if(sr(t,l),(l&130023424)===l&&(i=iu+500-ze(),10<i)){if(In(t,0)!==0)break;if(u=t.suspendedLanes,(u&l)!==l){xn(),t.pingedLanes|=t.suspendedLanes&u;break}t.timeoutHandle=dc(Ur.bind(null,t,Pn,bi),i);break}Ur(t,Pn,bi);break;case 4:if(sr(t,l),(l&4194240)===l)break;for(i=t.eventTimes,u=-1;0<l;){var w=31-wt(l);p=1<<w,w=i[w],w>u&&(u=w),l&=~p}if(l=u,l=ze()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*N_(l/1960))-l,10<l){t.timeoutHandle=dc(Ur.bind(null,t,Pn,bi),l);break}Ur(t,Pn,bi);break;case 5:Ur(t,Pn,bi);break;default:throw Error(n(329))}}}return Ln(t,ze()),t.callbackNode===s?ep.bind(null,t):null}function su(t,i){var s=Ds;return t.current.memoizedState.isDehydrated&&(Ir(t,i).flags|=256),t=Wa(t,i),t!==2&&(i=Pn,Pn=s,i!==null&&au(i)),t}function au(t){Pn===null?Pn=t:Pn.push.apply(Pn,t)}function I_(t){for(var i=t;;){if(i.flags&16384){var s=i.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var l=0;l<s.length;l++){var u=s[l],p=u.getSnapshot;u=u.value;try{if(!ei(p(),u))return!1}catch{return!1}}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function sr(t,i){for(i&=~nu,i&=~ka,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var s=31-wt(i),l=1<<s;t[s]=-1,i&=~l}}function tp(t){if((St&6)!==0)throw Error(n(327));Mo();var i=In(t,0);if((i&1)===0)return Ln(t,ze()),null;var s=Wa(t,i);if(t.tag!==0&&s===2){var l=wr(t);l!==0&&(i=l,s=su(t,l))}if(s===1)throw s=Ls,Ir(t,0),sr(t,i),Ln(t,ze()),s;if(s===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Ur(t,Pn,bi),Ln(t,ze()),null}function lu(t,i){var s=St;St|=1;try{return t(i)}finally{St=s,St===0&&(So=ze()+500,_a&&Ji())}}function Nr(t){rr!==null&&rr.tag===0&&(St&6)===0&&Mo();var i=St;St|=1;var s=Yn.transition,l=Tt;try{if(Yn.transition=null,Tt=1,t)return t()}finally{Tt=l,Yn.transition=s,St=i,(St&6)===0&&Ji()}}function cu(){kn=yo.current,Nt(yo)}function Ir(t,i){t.finishedWork=null,t.finishedLanes=0;var s=t.timeoutHandle;if(s!==-1&&(t.timeoutHandle=-1,u_(s)),jt!==null)for(s=jt.return;s!==null;){var l=s;switch(vc(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&ma();break;case 3:_o(),Nt(Rn),Nt(un),Lc();break;case 5:bc(l);break;case 4:_o();break;case 13:Nt(Bt);break;case 19:Nt(Bt);break;case 10:wc(l.type._context);break;case 22:case 23:cu()}s=s.return}if(nn=t,jt=t=ar(t.current,null),ln=kn=i,Kt=0,Ls=null,nu=ka=Dr=0,Pn=Ds=null,br!==null){for(i=0;i<br.length;i++)if(s=br[i],l=s.interleaved,l!==null){s.interleaved=null;var u=l.next,p=s.pending;if(p!==null){var w=p.next;p.next=u,l.next=w}s.pending=l}br=null}return t}function np(t,i){do{var s=jt;try{if(Ec(),Ra.current=La,Ca){for(var l=Ht.memoizedState;l!==null;){var u=l.queue;u!==null&&(u.pending=null),l=l.next}Ca=!1}if(Lr=0,tn=$t=Ht=null,Ts=!1,As=0,tu.current=null,s===null||s.return===null){Kt=1,Ls=i,jt=null;break}e:{var p=t,w=s.return,I=s,H=i;if(i=ln,I.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var ue=H,be=I,Pe=be.tag;if((be.mode&1)===0&&(Pe===0||Pe===11||Pe===15)){var Re=be.alternate;Re?(be.updateQueue=Re.updateQueue,be.memoizedState=Re.memoizedState,be.lanes=Re.lanes):(be.updateQueue=null,be.memoizedState=null)}var We=Rh(w);if(We!==null){We.flags&=-257,Ch(We,w,I,p,i),We.mode&1&&Ah(p,ue,i),i=We,H=ue;var $e=i.updateQueue;if($e===null){var Qe=new Set;Qe.add(H),i.updateQueue=Qe}else $e.add(H);break e}else{if((i&1)===0){Ah(p,ue,i),uu();break e}H=Error(n(426))}}else if(Ft&&I.mode&1){var Xt=Rh(w);if(Xt!==null){(Xt.flags&65536)===0&&(Xt.flags|=256),Ch(Xt,w,I,p,i),Sc(vo(H,I));break e}}p=H=vo(H,I),Kt!==4&&(Kt=2),Ds===null?Ds=[p]:Ds.push(p),p=w;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var Q=wh(p,H,i);Zd(p,Q);break e;case 1:I=H;var W=p.type,re=p.stateNode;if((p.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||re!==null&&typeof re.componentDidCatch=="function"&&(ir===null||!ir.has(re)))){p.flags|=65536,i&=-i,p.lanes|=i;var De=Th(p,I,i);Zd(p,De);break e}}p=p.return}while(p!==null)}op(s)}catch(et){i=et,jt===s&&s!==null&&(jt=s=s.return);continue}break}while(!0)}function ip(){var t=Fa.current;return Fa.current=La,t===null?La:t}function uu(){(Kt===0||Kt===3||Kt===2)&&(Kt=4),nn===null||(Dr&268435455)===0&&(ka&268435455)===0||sr(nn,ln)}function Wa(t,i){var s=St;St|=2;var l=ip();(nn!==t||ln!==i)&&(bi=null,Ir(t,i));do try{U_();break}catch(u){np(t,u)}while(!0);if(Ec(),St=s,Fa.current=l,jt!==null)throw Error(n(261));return nn=null,ln=0,Kt}function U_(){for(;jt!==null;)rp(jt)}function O_(){for(;jt!==null&&!Ge();)rp(jt)}function rp(t){var i=lp(t.alternate,t,kn);t.memoizedProps=t.pendingProps,i===null?op(t):jt=i,tu.current=null}function op(t){var i=t;do{var s=i.alternate;if(t=i.return,(i.flags&32768)===0){if(s=C_(s,i,kn),s!==null){jt=s;return}}else{if(s=b_(s,i),s!==null){s.flags&=32767,jt=s;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Kt=6,jt=null;return}}if(i=i.sibling,i!==null){jt=i;return}jt=i=t}while(i!==null);Kt===0&&(Kt=5)}function Ur(t,i,s){var l=Tt,u=Yn.transition;try{Yn.transition=null,Tt=1,F_(t,i,s,l)}finally{Yn.transition=u,Tt=l}return null}function F_(t,i,s,l){do Mo();while(rr!==null);if((St&6)!==0)throw Error(n(327));s=t.finishedWork;var u=t.finishedLanes;if(s===null)return null;if(t.finishedWork=null,t.finishedLanes=0,s===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var p=s.lanes|s.childLanes;if(_g(t,p),t===nn&&(jt=nn=null,ln=0),(s.subtreeFlags&2064)===0&&(s.flags&2064)===0||Ba||(Ba=!0,cp(xt,function(){return Mo(),null})),p=(s.flags&15990)!==0,(s.subtreeFlags&15990)!==0||p){p=Yn.transition,Yn.transition=null;var w=Tt;Tt=1;var I=St;St|=4,tu.current=null,L_(t,s),$h(s,t),i_(uc),ta=!!cc,uc=cc=null,t.current=s,D_(s),Ze(),St=I,Tt=w,Yn.transition=p}else t.current=s;if(Ba&&(Ba=!1,rr=t,Ha=u),p=t.pendingLanes,p===0&&(ir=null),it(s.stateNode),Ln(t,ze()),i!==null)for(l=t.onRecoverableError,s=0;s<i.length;s++)u=i[s],l(u.value,{componentStack:u.stack,digest:u.digest});if(za)throw za=!1,t=ru,ru=null,t;return(Ha&1)!==0&&t.tag!==0&&Mo(),p=t.pendingLanes,(p&1)!==0?t===ou?Ns++:(Ns=0,ou=t):Ns=0,Ji(),null}function Mo(){if(rr!==null){var t=Yf(Ha),i=Yn.transition,s=Tt;try{if(Yn.transition=null,Tt=16>t?16:t,rr===null)var l=!1;else{if(t=rr,rr=null,Ha=0,(St&6)!==0)throw Error(n(331));var u=St;for(St|=4,Ye=t.current;Ye!==null;){var p=Ye,w=p.child;if((Ye.flags&16)!==0){var I=p.deletions;if(I!==null){for(var H=0;H<I.length;H++){var ue=I[H];for(Ye=ue;Ye!==null;){var be=Ye;switch(be.tag){case 0:case 11:case 15:Ps(8,be,p)}var Pe=be.child;if(Pe!==null)Pe.return=be,Ye=Pe;else for(;Ye!==null;){be=Ye;var Re=be.sibling,We=be.return;if(Wh(be),be===ue){Ye=null;break}if(Re!==null){Re.return=We,Ye=Re;break}Ye=We}}}var $e=p.alternate;if($e!==null){var Qe=$e.child;if(Qe!==null){$e.child=null;do{var Xt=Qe.sibling;Qe.sibling=null,Qe=Xt}while(Qe!==null)}}Ye=p}}if((p.subtreeFlags&2064)!==0&&w!==null)w.return=p,Ye=w;else e:for(;Ye!==null;){if(p=Ye,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Ps(9,p,p.return)}var Q=p.sibling;if(Q!==null){Q.return=p.return,Ye=Q;break e}Ye=p.return}}var W=t.current;for(Ye=W;Ye!==null;){w=Ye;var re=w.child;if((w.subtreeFlags&2064)!==0&&re!==null)re.return=w,Ye=re;else e:for(w=W;Ye!==null;){if(I=Ye,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Oa(9,I)}}catch(et){Gt(I,I.return,et)}if(I===w){Ye=null;break e}var De=I.sibling;if(De!==null){De.return=I.return,Ye=De;break e}Ye=I.return}}if(St=u,Ji(),pt&&typeof pt.onPostCommitFiberRoot=="function")try{pt.onPostCommitFiberRoot(Jt,t)}catch{}l=!0}return l}finally{Tt=s,Yn.transition=i}}return!1}function sp(t,i,s){i=vo(s,i),i=wh(t,i,1),t=tr(t,i,1),i=xn(),t!==null&&(is(t,1,i),Ln(t,i))}function Gt(t,i,s){if(t.tag===3)sp(t,t,s);else for(;i!==null;){if(i.tag===3){sp(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ir===null||!ir.has(l))){t=vo(s,t),t=Th(i,t,1),i=tr(i,t,1),t=xn(),i!==null&&(is(i,1,t),Ln(i,t));break}}i=i.return}}function k_(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),i=xn(),t.pingedLanes|=t.suspendedLanes&s,nn===t&&(ln&s)===s&&(Kt===4||Kt===3&&(ln&130023424)===ln&&500>ze()-iu?Ir(t,0):nu|=s),Ln(t,i)}function ap(t,i){i===0&&((t.mode&1)===0?i=1:(i=Gi,Gi<<=1,(Gi&130023424)===0&&(Gi=4194304)));var s=xn();t=Ai(t,i),t!==null&&(is(t,i,s),Ln(t,s))}function z_(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),ap(t,s)}function B_(t,i){var s=0;switch(t.tag){case 13:var l=t.stateNode,u=t.memoizedState;u!==null&&(s=u.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),ap(t,s)}var lp;lp=function(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps||Rn.current)bn=!0;else{if((t.lanes&s)===0&&(i.flags&128)===0)return bn=!1,R_(t,i,s);bn=(t.flags&131072)!==0}else bn=!1,Ft&&(i.flags&1048576)!==0&&Hd(i,xa,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Ia(t,i),t=i.pendingProps;var u=co(i,un.current);go(i,s),u=Ic(null,i,l,t,u,s);var p=Uc();return i.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Cn(l)?(p=!0,ga(i)):p=!1,i.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,Rc(i),u.updater=Da,i.stateNode=u,u._reactInternals=i,Hc(i,l,t,s),i=Xc(null,i,l,!0,p,s)):(i.tag=0,Ft&&p&&_c(i),vn(null,i,u,s),i=i.child),i;case 16:l=i.elementType;e:{switch(Ia(t,i),t=i.pendingProps,u=l._init,l=u(l._payload),i.type=l,u=i.tag=V_(l),t=ni(l,t),u){case 0:i=Wc(null,i,l,t,s);break e;case 1:i=Ih(null,i,l,t,s);break e;case 11:i=bh(null,i,l,t,s);break e;case 14:i=Ph(null,i,l,ni(l.type,t),s);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:ni(l,u),Wc(t,i,l,u,s);case 1:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:ni(l,u),Ih(t,i,l,u,s);case 3:e:{if(Uh(i),t===null)throw Error(n(387));l=i.pendingProps,p=i.memoizedState,u=p.element,Kd(t,i),Ta(i,l,null,s);var w=i.memoizedState;if(l=w.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){u=vo(Error(n(423)),i),i=Oh(t,i,l,s,u);break e}else if(l!==u){u=vo(Error(n(424)),i),i=Oh(t,i,l,s,u);break e}else for(Fn=Ki(i.stateNode.containerInfo.firstChild),On=i,Ft=!0,ti=null,s=qd(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(ho(),l===u){i=Ci(t,i,s);break e}vn(t,i,l,s)}i=i.child}return i;case 5:return Jd(i),t===null&&yc(i),l=i.type,u=i.pendingProps,p=t!==null?t.memoizedProps:null,w=u.children,fc(l,u)?w=null:p!==null&&fc(l,p)&&(i.flags|=32),Nh(t,i),vn(t,i,w,s),i.child;case 6:return t===null&&yc(i),null;case 13:return Fh(t,i,s);case 4:return Cc(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=po(i,null,l,s):vn(t,i,l,s),i.child;case 11:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:ni(l,u),bh(t,i,l,u,s);case 7:return vn(t,i,i.pendingProps,s),i.child;case 8:return vn(t,i,i.pendingProps.children,s),i.child;case 12:return vn(t,i,i.pendingProps.children,s),i.child;case 10:e:{if(l=i.type._context,u=i.pendingProps,p=i.memoizedProps,w=u.value,bt(Ma,l._currentValue),l._currentValue=w,p!==null)if(ei(p.value,w)){if(p.children===u.children&&!Rn.current){i=Ci(t,i,s);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var I=p.dependencies;if(I!==null){w=p.child;for(var H=I.firstContext;H!==null;){if(H.context===l){if(p.tag===1){H=Ri(-1,s&-s),H.tag=2;var ue=p.updateQueue;if(ue!==null){ue=ue.shared;var be=ue.pending;be===null?H.next=H:(H.next=be.next,be.next=H),ue.pending=H}}p.lanes|=s,H=p.alternate,H!==null&&(H.lanes|=s),Tc(p.return,s,i),I.lanes|=s;break}H=H.next}}else if(p.tag===10)w=p.type===i.type?null:p.child;else if(p.tag===18){if(w=p.return,w===null)throw Error(n(341));w.lanes|=s,I=w.alternate,I!==null&&(I.lanes|=s),Tc(w,s,i),w=p.sibling}else w=p.child;if(w!==null)w.return=p;else for(w=p;w!==null;){if(w===i){w=null;break}if(p=w.sibling,p!==null){p.return=w.return,w=p;break}w=w.return}p=w}vn(t,i,u.children,s),i=i.child}return i;case 9:return u=i.type,l=i.pendingProps.children,go(i,s),u=Xn(u),l=l(u),i.flags|=1,vn(t,i,l,s),i.child;case 14:return l=i.type,u=ni(l,i.pendingProps),u=ni(l.type,u),Ph(t,i,l,u,s);case 15:return Lh(t,i,i.type,i.pendingProps,s);case 17:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:ni(l,u),Ia(t,i),i.tag=1,Cn(l)?(t=!0,ga(i)):t=!1,go(i,s),Mh(i,l,u),Hc(i,l,u,s),Xc(null,i,l,!0,t,s);case 19:return zh(t,i,s);case 22:return Dh(t,i,s)}throw Error(n(156,i.tag))};function cp(t,i){return Y(t,i)}function H_(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(t,i,s,l){return new H_(t,i,s,l)}function fu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function V_(t){if(typeof t=="function")return fu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===pe)return 11;if(t===ve)return 14}return 2}function ar(t,i){var s=t.alternate;return s===null?(s=qn(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&14680064,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s}function Xa(t,i,s,l,u,p){var w=2;if(l=t,typeof t=="function")fu(t)&&(w=1);else if(typeof t=="string")w=5;else e:switch(t){case O:return Or(s.children,u,p,i);case $:w=8,u|=8;break;case L:return t=qn(12,s,i,u|2),t.elementType=L,t.lanes=p,t;case K:return t=qn(13,s,i,u),t.elementType=K,t.lanes=p,t;case ye:return t=qn(19,s,i,u),t.elementType=ye,t.lanes=p,t;case de:return ja(s,u,p,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case A:w=10;break e;case V:w=9;break e;case pe:w=11;break e;case ve:w=14;break e;case le:w=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=qn(w,s,i,u),i.elementType=t,i.type=l,i.lanes=p,i}function Or(t,i,s,l){return t=qn(7,t,l,i),t.lanes=s,t}function ja(t,i,s,l){return t=qn(22,t,l,i),t.elementType=de,t.lanes=s,t.stateNode={isHidden:!1},t}function du(t,i,s){return t=qn(6,t,null,i),t.lanes=s,t}function hu(t,i,s){return i=qn(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function G_(t,i,s,l,u){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jr(0),this.expirationTimes=Jr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jr(0),this.identifierPrefix=l,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function pu(t,i,s,l,u,p,w,I,H){return t=new G_(t,i,s,I,H),i===1?(i=1,p===!0&&(i|=8)):i=0,p=qn(3,null,null,i),t.current=p,p.stateNode=t,p.memoizedState={element:l,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},Rc(p),t}function W_(t,i,s){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:z,key:l==null?null:""+l,children:t,containerInfo:i,implementation:s}}function up(t){if(!t)return Qi;t=t._reactInternals;e:{if(Si(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Cn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var s=t.type;if(Cn(s))return kd(t,s,i)}return i}function fp(t,i,s,l,u,p,w,I,H){return t=pu(s,l,!0,t,u,p,w,I,H),t.context=up(null),s=t.current,l=xn(),u=or(s),p=Ri(l,u),p.callback=i??null,tr(s,p,u),t.current.lanes=u,is(t,u,l),Ln(t,l),t}function Ya(t,i,s,l){var u=i.current,p=xn(),w=or(u);return s=up(s),i.context===null?i.context=s:i.pendingContext=s,i=Ri(p,w),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=tr(u,i,w),t!==null&&(oi(t,u,w,p),wa(t,u,w)),w}function qa(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function dp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function mu(t,i){dp(t,i),(t=t.alternate)&&dp(t,i)}function X_(){return null}var hp=typeof reportError=="function"?reportError:function(t){console.error(t)};function gu(t){this._internalRoot=t}$a.prototype.render=gu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Ya(t,i,null,null)},$a.prototype.unmount=gu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Nr(function(){Ya(null,t,null,null)}),i[Mi]=null}};function $a(t){this._internalRoot=t}$a.prototype.unstable_scheduleHydration=function(t){if(t){var i=Kf();t={blockedOn:null,target:t,priority:i};for(var s=0;s<Yi.length&&i!==0&&i<Yi[s].priority;s++);Yi.splice(s,0,t),s===0&&Jf(t)}};function _u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ka(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function pp(){}function j_(t,i,s,l,u){if(u){if(typeof l=="function"){var p=l;l=function(){var ue=qa(w);p.call(ue)}}var w=fp(i,l,t,0,null,!1,!1,"",pp);return t._reactRootContainer=w,t[Mi]=w.current,_s(t.nodeType===8?t.parentNode:t),Nr(),w}for(;u=t.lastChild;)t.removeChild(u);if(typeof l=="function"){var I=l;l=function(){var ue=qa(H);I.call(ue)}}var H=pu(t,0,!1,null,null,!1,!1,"",pp);return t._reactRootContainer=H,t[Mi]=H.current,_s(t.nodeType===8?t.parentNode:t),Nr(function(){Ya(i,H,s,l)}),H}function Za(t,i,s,l,u){var p=s._reactRootContainer;if(p){var w=p;if(typeof u=="function"){var I=u;u=function(){var H=qa(w);I.call(H)}}Ya(i,w,t,u)}else w=j_(s,i,t,u,l);return qa(w)}qf=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var s=Ct(i.pendingLanes);s!==0&&(Hl(i,s|1),Ln(i,ze()),(St&6)===0&&(So=ze()+500,Ji()))}break;case 13:Nr(function(){var l=Ai(t,1);if(l!==null){var u=xn();oi(l,t,1,u)}}),mu(t,1)}},Vl=function(t){if(t.tag===13){var i=Ai(t,134217728);if(i!==null){var s=xn();oi(i,t,134217728,s)}mu(t,134217728)}},$f=function(t){if(t.tag===13){var i=or(t),s=Ai(t,i);if(s!==null){var l=xn();oi(s,t,i,l)}mu(t,i)}},Kf=function(){return Tt},Zf=function(t,i){var s=Tt;try{return Tt=t,i()}finally{Tt=s}},se=function(t,i,s){switch(i){case"input":if(Fe(t,s),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var u=pa(l);if(!u)throw Error(n(90));N(l),Fe(l,u)}}}break;case"textarea":Z(t,s);break;case"select":i=s.value,i!=null&&S(t,!!s.multiple,i,!1)}},Vt=lu,vt=Nr;var Y_={usingClientEntryPoint:!1,Events:[ys,ao,pa,ut,Ut,lu]},Is={findFiberByHostInstance:Tr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},q_={bundleType:Is.bundleType,version:Is.version,rendererPackageName:Is.rendererPackageName,rendererConfig:Is.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:U.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ae(t),t===null?null:t.stateNode},findFiberByHostInstance:Is.findFiberByHostInstance||X_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qa.isDisabled&&Qa.supportsFiber)try{Jt=Qa.inject(q_),pt=Qa}catch{}}return Dn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y_,Dn.createPortal=function(t,i){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_u(i))throw Error(n(200));return W_(t,i,null,s)},Dn.createRoot=function(t,i){if(!_u(t))throw Error(n(299));var s=!1,l="",u=hp;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(u=i.onRecoverableError)),i=pu(t,1,!1,null,null,s,!1,l,u),t[Mi]=i.current,_s(t.nodeType===8?t.parentNode:t),new gu(i)},Dn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=ae(i),t=t===null?null:t.stateNode,t},Dn.flushSync=function(t){return Nr(t)},Dn.hydrate=function(t,i,s){if(!Ka(i))throw Error(n(200));return Za(null,t,i,!0,s)},Dn.hydrateRoot=function(t,i,s){if(!_u(t))throw Error(n(405));var l=s!=null&&s.hydratedSources||null,u=!1,p="",w=hp;if(s!=null&&(s.unstable_strictMode===!0&&(u=!0),s.identifierPrefix!==void 0&&(p=s.identifierPrefix),s.onRecoverableError!==void 0&&(w=s.onRecoverableError)),i=fp(i,null,t,1,s??null,u,!1,p,w),t[Mi]=i.current,_s(t),l)for(t=0;t<l.length;t++)s=l[t],u=s._getVersion,u=u(s._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[s,u]:i.mutableSourceEagerHydrationData.push(s,u);return new $a(i)},Dn.render=function(t,i,s){if(!Ka(i))throw Error(n(200));return Za(null,t,i,!1,s)},Dn.unmountComponentAtNode=function(t){if(!Ka(t))throw Error(n(40));return t._reactRootContainer?(Nr(function(){Za(null,null,t,!1,function(){t._reactRootContainer=null,t[Mi]=null})}),!0):!1},Dn.unstable_batchedUpdates=lu,Dn.unstable_renderSubtreeIntoContainer=function(t,i,s,l){if(!Ka(s))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Za(t,i,s,!1,l)},Dn.version="18.3.1-next-f1338f8080-20240426",Dn}var Mp;function n0(){if(Mp)return yu.exports;Mp=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),yu.exports=t0(),yu.exports}var Ep;function i0(){if(Ep)return Ja;Ep=1;var o=n0();return Ja.createRoot=o.createRoot,Ja.hydrateRoot=o.hydrateRoot,Ja}var r0=i0(),Pt=Nf();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o0=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),s0=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase()),wp=o=>{const e=s0(o);return e.charAt(0).toUpperCase()+e.slice(1)},Im=(...o)=>o.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var a0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l0=Pt.forwardRef(({color:o="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:a="",children:c,iconNode:d,...f},h)=>Pt.createElement("svg",{ref:h,...a0,width:e,height:e,stroke:o,strokeWidth:r?Number(n)*24/Number(e):n,className:Im("lucide",a),...f},[...d.map(([m,g])=>Pt.createElement(m,g)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zr=(o,e)=>{const n=Pt.forwardRef(({className:r,...a},c)=>Pt.createElement(l0,{ref:c,iconNode:e,className:Im(`lucide-${o0(wp(o))}`,`lucide-${o}`,r),...a}));return n.displayName=wp(o),n};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Tp=Zr("arrow-left",c0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0=[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],Ap=Zr("camera",u0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0=[["path",{d:"M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z",key:"1bo67w"}],["rect",{x:"3",y:"14",width:"7",height:"7",rx:"1",key:"1bkyp8"}],["circle",{cx:"17.5",cy:"17.5",r:"3.5",key:"w3z12y"}]],d0=Zr("shapes",f0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],p0=Zr("sparkles",h0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],g0=Zr("trash-2",m0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]],v0=Zr("upload",_0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],y0=Zr("x",x0);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const If="166",Eo={ROTATE:0,DOLLY:1,PAN:2},pi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},S0=0,Rp=1,M0=2,Um=1,E0=2,Ui=3,zi=0,En=1,gi=2,vr=0,jo=1,Cp=2,bp=3,Pp=4,w0=5,Wr=100,T0=101,A0=102,R0=103,C0=104,b0=200,P0=201,L0=202,D0=203,Qu=204,Ju=205,N0=206,I0=207,U0=208,O0=209,F0=210,k0=211,z0=212,B0=213,H0=214,V0=0,G0=1,W0=2,bl=3,X0=4,j0=5,Y0=6,q0=7,Om=0,$0=1,K0=2,xr=0,Z0=1,Q0=2,J0=3,ev=4,tv=5,nv=6,iv=7,Fm=300,$o=301,Ko=302,ef=303,tf=304,Ul=306,nf=1e3,jr=1001,rf=1002,Zn=1003,rv=1004,el=1005,Mn=1006,Eu=1007,Yr=1008,Bi=1009,km=1010,zm=1011,Gs=1012,Uf=1013,qr=1014,Oi=1015,Xs=1016,Of=1017,Ff=1018,Zo=1020,Bm=35902,Hm=1021,Vm=1022,ci=1023,Gm=1024,Wm=1025,Yo=1026,Qo=1027,Xm=1028,kf=1029,jm=1030,zf=1031,Bf=1033,El=33776,wl=33777,Tl=33778,Al=33779,of=35840,sf=35841,af=35842,lf=35843,cf=36196,uf=37492,ff=37496,df=37808,hf=37809,pf=37810,mf=37811,gf=37812,_f=37813,vf=37814,xf=37815,yf=37816,Sf=37817,Mf=37818,Ef=37819,wf=37820,Tf=37821,Rl=36492,Af=36494,Rf=36495,Ym=36283,Cf=36284,bf=36285,Pf=36286,ov=3200,sv=3201,av=0,lv=1,gr="",Kn="srgb",Sr="srgb-linear",Hf="display-p3",Ol="display-p3-linear",Pl="linear",It="srgb",Ll="rec709",Dl="p3",wo=7680,Lp=519,cv=512,uv=513,fv=514,qm=515,dv=516,hv=517,pv=518,mv=519,Dp=35044,Np="300 es",Fi=2e3,Nl=2001;class Qr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const c=a.indexOf(n);c!==-1&&a.splice(c,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let c=0,d=a.length;c<d;c++)a[c].call(this,e);e.target=null}}}const pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ip=1234567;const Hs=Math.PI/180,Ws=180/Math.PI;function es(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(pn[o&255]+pn[o>>8&255]+pn[o>>16&255]+pn[o>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[n&63|128]+pn[n>>8&255]+"-"+pn[n>>16&255]+pn[n>>24&255]+pn[r&255]+pn[r>>8&255]+pn[r>>16&255]+pn[r>>24&255]).toLowerCase()}function gn(o,e,n){return Math.max(e,Math.min(n,o))}function Vf(o,e){return(o%e+e)%e}function gv(o,e,n,r,a){return r+(o-e)*(a-r)/(n-e)}function _v(o,e,n){return o!==e?(n-o)/(e-o):0}function Vs(o,e,n){return(1-n)*o+n*e}function vv(o,e,n,r){return Vs(o,e,1-Math.exp(-n*r))}function xv(o,e=1){return e-Math.abs(Vf(o,e*2)-e)}function yv(o,e,n){return o<=e?0:o>=n?1:(o=(o-e)/(n-e),o*o*(3-2*o))}function Sv(o,e,n){return o<=e?0:o>=n?1:(o=(o-e)/(n-e),o*o*o*(o*(o*6-15)+10))}function Mv(o,e){return o+Math.floor(Math.random()*(e-o+1))}function Ev(o,e){return o+Math.random()*(e-o)}function wv(o){return o*(.5-Math.random())}function Tv(o){o!==void 0&&(Ip=o);let e=Ip+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Av(o){return o*Hs}function Rv(o){return o*Ws}function Cv(o){return(o&o-1)===0&&o!==0}function bv(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function Pv(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Lv(o,e,n,r,a){const c=Math.cos,d=Math.sin,f=c(n/2),h=d(n/2),m=c((e+r)/2),g=d((e+r)/2),y=c((e-r)/2),x=d((e-r)/2),M=c((r-e)/2),R=d((r-e)/2);switch(a){case"XYX":o.set(f*g,h*y,h*x,f*m);break;case"YZY":o.set(h*x,f*g,h*y,f*m);break;case"ZXZ":o.set(h*y,h*x,f*g,f*m);break;case"XZX":o.set(f*g,h*R,h*M,f*m);break;case"YXY":o.set(h*M,f*g,h*R,f*m);break;case"ZYZ":o.set(h*R,h*M,f*g,f*m);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function Ho(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function yn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const _r={DEG2RAD:Hs,RAD2DEG:Ws,generateUUID:es,clamp:gn,euclideanModulo:Vf,mapLinear:gv,inverseLerp:_v,lerp:Vs,damp:vv,pingpong:xv,smoothstep:yv,smootherstep:Sv,randInt:Mv,randFloat:Ev,randFloatSpread:wv,seededRandom:Tv,degToRad:Av,radToDeg:Rv,isPowerOfTwo:Cv,ceilPowerOfTwo:bv,floorPowerOfTwo:Pv,setQuaternionFromProperEuler:Lv,normalize:yn,denormalize:Ho};class ht{constructor(e=0,n=0){ht.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(gn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),c=this.x-e.x,d=this.y-e.y;return this.x=c*r-d*a+e.x,this.y=c*a+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class gt{constructor(e,n,r,a,c,d,f,h,m){gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,c,d,f,h,m)}set(e,n,r,a,c,d,f,h,m){const g=this.elements;return g[0]=e,g[1]=a,g[2]=f,g[3]=n,g[4]=c,g[5]=h,g[6]=r,g[7]=d,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,c=this.elements,d=r[0],f=r[3],h=r[6],m=r[1],g=r[4],y=r[7],x=r[2],M=r[5],R=r[8],C=a[0],v=a[3],_=a[6],F=a[1],P=a[4],U=a[7],J=a[2],z=a[5],O=a[8];return c[0]=d*C+f*F+h*J,c[3]=d*v+f*P+h*z,c[6]=d*_+f*U+h*O,c[1]=m*C+g*F+y*J,c[4]=m*v+g*P+y*z,c[7]=m*_+g*U+y*O,c[2]=x*C+M*F+R*J,c[5]=x*v+M*P+R*z,c[8]=x*_+M*U+R*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],d=e[4],f=e[5],h=e[6],m=e[7],g=e[8];return n*d*g-n*f*m-r*c*g+r*f*h+a*c*m-a*d*h}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],d=e[4],f=e[5],h=e[6],m=e[7],g=e[8],y=g*d-f*m,x=f*h-g*c,M=m*c-d*h,R=n*y+r*x+a*M;if(R===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/R;return e[0]=y*C,e[1]=(a*m-g*r)*C,e[2]=(f*r-a*d)*C,e[3]=x*C,e[4]=(g*n-a*h)*C,e[5]=(a*c-f*n)*C,e[6]=M*C,e[7]=(r*h-m*n)*C,e[8]=(d*n-r*c)*C,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,c,d,f){const h=Math.cos(c),m=Math.sin(c);return this.set(r*h,r*m,-r*(h*d+m*f)+d+e,-a*m,a*h,-a*(-m*d+h*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(wu.makeScale(e,n)),this}rotate(e){return this.premultiply(wu.makeRotation(-e)),this}translate(e,n){return this.premultiply(wu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wu=new gt;function $m(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Il(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Dv(){const o=Il("canvas");return o.style.display="block",o}const Up={};function Km(o){o in Up||(Up[o]=!0,console.warn(o))}function Nv(o,e,n){return new Promise(function(r,a){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:a();break;case o.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}const Op=new gt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Fp=new gt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),tl={[Sr]:{transfer:Pl,primaries:Ll,toReference:o=>o,fromReference:o=>o},[Kn]:{transfer:It,primaries:Ll,toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[Ol]:{transfer:Pl,primaries:Dl,toReference:o=>o.applyMatrix3(Fp),fromReference:o=>o.applyMatrix3(Op)},[Hf]:{transfer:It,primaries:Dl,toReference:o=>o.convertSRGBToLinear().applyMatrix3(Fp),fromReference:o=>o.applyMatrix3(Op).convertLinearToSRGB()}},Iv=new Set([Sr,Ol]),At={enabled:!0,_workingColorSpace:Sr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!Iv.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,e,n){if(this.enabled===!1||e===n||!e||!n)return o;const r=tl[e].toReference,a=tl[n].fromReference;return a(r(o))},fromWorkingColorSpace:function(o,e){return this.convert(o,this._workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this._workingColorSpace)},getPrimaries:function(o){return tl[o].primaries},getTransfer:function(o){return o===gr?Pl:tl[o].transfer}};function qo(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Tu(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let To;class Uv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{To===void 0&&(To=Il("canvas")),To.width=e.width,To.height=e.height;const r=To.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=To}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Il("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),c=a.data;for(let d=0;d<c.length;d++)c[d]=qo(c[d]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(qo(n[r]/255)*255):n[r]=qo(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ov=0;class Zm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ov++}),this.uuid=es(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let c;if(Array.isArray(a)){c=[];for(let d=0,f=a.length;d<f;d++)a[d].isDataTexture?c.push(Au(a[d].image)):c.push(Au(a[d]))}else c=Au(a);r.url=c}return n||(e.images[this.uuid]=r),r}}function Au(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Uv.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Fv=0;class wn extends Qr{constructor(e=wn.DEFAULT_IMAGE,n=wn.DEFAULT_MAPPING,r=jr,a=jr,c=Mn,d=Yr,f=ci,h=Bi,m=wn.DEFAULT_ANISOTROPY,g=gr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fv++}),this.uuid=es(),this.name="",this.source=new Zm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=c,this.minFilter=d,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=h,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nf:e.x=e.x-Math.floor(e.x);break;case jr:e.x=e.x<0?0:1;break;case rf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nf:e.y=e.y-Math.floor(e.y);break;case jr:e.y=e.y<0?0:1;break;case rf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=Fm;wn.DEFAULT_ANISOTROPY=1;class sn{constructor(e=0,n=0,r=0,a=1){sn.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,c=this.w,d=e.elements;return this.x=d[0]*n+d[4]*r+d[8]*a+d[12]*c,this.y=d[1]*n+d[5]*r+d[9]*a+d[13]*c,this.z=d[2]*n+d[6]*r+d[10]*a+d[14]*c,this.w=d[3]*n+d[7]*r+d[11]*a+d[15]*c,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,c;const h=e.elements,m=h[0],g=h[4],y=h[8],x=h[1],M=h[5],R=h[9],C=h[2],v=h[6],_=h[10];if(Math.abs(g-x)<.01&&Math.abs(y-C)<.01&&Math.abs(R-v)<.01){if(Math.abs(g+x)<.1&&Math.abs(y+C)<.1&&Math.abs(R+v)<.1&&Math.abs(m+M+_-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const P=(m+1)/2,U=(M+1)/2,J=(_+1)/2,z=(g+x)/4,O=(y+C)/4,$=(R+v)/4;return P>U&&P>J?P<.01?(r=0,a=.707106781,c=.707106781):(r=Math.sqrt(P),a=z/r,c=O/r):U>J?U<.01?(r=.707106781,a=0,c=.707106781):(a=Math.sqrt(U),r=z/a,c=$/a):J<.01?(r=.707106781,a=.707106781,c=0):(c=Math.sqrt(J),r=O/c,a=$/c),this.set(r,a,c,n),this}let F=Math.sqrt((v-R)*(v-R)+(y-C)*(y-C)+(x-g)*(x-g));return Math.abs(F)<.001&&(F=1),this.x=(v-R)/F,this.y=(y-C)/F,this.z=(x-g)/F,this.w=Math.acos((m+M+_-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kv extends Qr{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new sn(0,0,e,n),this.scissorTest=!1,this.viewport=new sn(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new wn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const d=r.count;for(let f=0;f<d;f++)this.textures[f]=c.clone(),this.textures[f].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,c=this.textures.length;a<c;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Zm(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $r extends kv{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Qm extends wn{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Zn,this.minFilter=Zn,this.wrapR=jr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class zv extends wn{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Zn,this.minFilter=Zn,this.wrapR=jr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Kr{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,c,d,f){let h=r[a+0],m=r[a+1],g=r[a+2],y=r[a+3];const x=c[d+0],M=c[d+1],R=c[d+2],C=c[d+3];if(f===0){e[n+0]=h,e[n+1]=m,e[n+2]=g,e[n+3]=y;return}if(f===1){e[n+0]=x,e[n+1]=M,e[n+2]=R,e[n+3]=C;return}if(y!==C||h!==x||m!==M||g!==R){let v=1-f;const _=h*x+m*M+g*R+y*C,F=_>=0?1:-1,P=1-_*_;if(P>Number.EPSILON){const J=Math.sqrt(P),z=Math.atan2(J,_*F);v=Math.sin(v*z)/J,f=Math.sin(f*z)/J}const U=f*F;if(h=h*v+x*U,m=m*v+M*U,g=g*v+R*U,y=y*v+C*U,v===1-f){const J=1/Math.sqrt(h*h+m*m+g*g+y*y);h*=J,m*=J,g*=J,y*=J}}e[n]=h,e[n+1]=m,e[n+2]=g,e[n+3]=y}static multiplyQuaternionsFlat(e,n,r,a,c,d){const f=r[a],h=r[a+1],m=r[a+2],g=r[a+3],y=c[d],x=c[d+1],M=c[d+2],R=c[d+3];return e[n]=f*R+g*y+h*M-m*x,e[n+1]=h*R+g*x+m*y-f*M,e[n+2]=m*R+g*M+f*x-h*y,e[n+3]=g*R-f*y-h*x-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,c=e._z,d=e._order,f=Math.cos,h=Math.sin,m=f(r/2),g=f(a/2),y=f(c/2),x=h(r/2),M=h(a/2),R=h(c/2);switch(d){case"XYZ":this._x=x*g*y+m*M*R,this._y=m*M*y-x*g*R,this._z=m*g*R+x*M*y,this._w=m*g*y-x*M*R;break;case"YXZ":this._x=x*g*y+m*M*R,this._y=m*M*y-x*g*R,this._z=m*g*R-x*M*y,this._w=m*g*y+x*M*R;break;case"ZXY":this._x=x*g*y-m*M*R,this._y=m*M*y+x*g*R,this._z=m*g*R+x*M*y,this._w=m*g*y-x*M*R;break;case"ZYX":this._x=x*g*y-m*M*R,this._y=m*M*y+x*g*R,this._z=m*g*R-x*M*y,this._w=m*g*y+x*M*R;break;case"YZX":this._x=x*g*y+m*M*R,this._y=m*M*y+x*g*R,this._z=m*g*R-x*M*y,this._w=m*g*y-x*M*R;break;case"XZY":this._x=x*g*y-m*M*R,this._y=m*M*y-x*g*R,this._z=m*g*R+x*M*y,this._w=m*g*y+x*M*R;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],c=n[8],d=n[1],f=n[5],h=n[9],m=n[2],g=n[6],y=n[10],x=r+f+y;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(g-h)*M,this._y=(c-m)*M,this._z=(d-a)*M}else if(r>f&&r>y){const M=2*Math.sqrt(1+r-f-y);this._w=(g-h)/M,this._x=.25*M,this._y=(a+d)/M,this._z=(c+m)/M}else if(f>y){const M=2*Math.sqrt(1+f-r-y);this._w=(c-m)/M,this._x=(a+d)/M,this._y=.25*M,this._z=(h+g)/M}else{const M=2*Math.sqrt(1+y-r-f);this._w=(d-a)/M,this._x=(c+m)/M,this._y=(h+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gn(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,c=e._z,d=e._w,f=n._x,h=n._y,m=n._z,g=n._w;return this._x=r*g+d*f+a*m-c*h,this._y=a*g+d*h+c*f-r*m,this._z=c*g+d*m+r*h-a*f,this._w=d*g-r*f-a*h-c*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,c=this._z,d=this._w;let f=d*e._w+r*e._x+a*e._y+c*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=d,this._x=r,this._y=a,this._z=c,this;const h=1-f*f;if(h<=Number.EPSILON){const M=1-n;return this._w=M*d+n*this._w,this._x=M*r+n*this._x,this._y=M*a+n*this._y,this._z=M*c+n*this._z,this.normalize(),this}const m=Math.sqrt(h),g=Math.atan2(m,f),y=Math.sin((1-n)*g)/m,x=Math.sin(n*g)/m;return this._w=d*y+this._w*x,this._x=r*y+this._x*x,this._y=a*y+this._y*x,this._z=c*y+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ee{constructor(e=0,n=0,r=0){ee.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(kp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(kp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*a,this.y=c[1]*n+c[4]*r+c[7]*a,this.z=c[2]*n+c[5]*r+c[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,c=e.elements,d=1/(c[3]*n+c[7]*r+c[11]*a+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*a+c[12])*d,this.y=(c[1]*n+c[5]*r+c[9]*a+c[13])*d,this.z=(c[2]*n+c[6]*r+c[10]*a+c[14])*d,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,c=e.x,d=e.y,f=e.z,h=e.w,m=2*(d*a-f*r),g=2*(f*n-c*a),y=2*(c*r-d*n);return this.x=n+h*m+d*y-f*g,this.y=r+h*g+f*m-c*y,this.z=a+h*y+c*g-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*a,this.y=c[1]*n+c[5]*r+c[9]*a,this.z=c[2]*n+c[6]*r+c[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,c=e.z,d=n.x,f=n.y,h=n.z;return this.x=a*h-c*f,this.y=c*d-r*h,this.z=r*f-a*d,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Ru.copy(this).projectOnVector(e),this.sub(Ru)}reflect(e){return this.sub(Ru.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(gn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ru=new ee,kp=new Kr;class js{constructor(e=new ee(1/0,1/0,1/0),n=new ee(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(si.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(si.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=si.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,f=c.count;d<f;d++)e.isMesh===!0?e.getVertexPosition(d,si):si.fromBufferAttribute(c,d),si.applyMatrix4(e.matrixWorld),this.expandByPoint(si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),nl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),nl.copy(r.boundingBox)),nl.applyMatrix4(e.matrixWorld),this.union(nl)}const a=e.children;for(let c=0,d=a.length;c<d;c++)this.expandByObject(a[c],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Os),il.subVectors(this.max,Os),Ao.subVectors(e.a,Os),Ro.subVectors(e.b,Os),Co.subVectors(e.c,Os),cr.subVectors(Ro,Ao),ur.subVectors(Co,Ro),Fr.subVectors(Ao,Co);let n=[0,-cr.z,cr.y,0,-ur.z,ur.y,0,-Fr.z,Fr.y,cr.z,0,-cr.x,ur.z,0,-ur.x,Fr.z,0,-Fr.x,-cr.y,cr.x,0,-ur.y,ur.x,0,-Fr.y,Fr.x,0];return!Cu(n,Ao,Ro,Co,il)||(n=[1,0,0,0,1,0,0,0,1],!Cu(n,Ao,Ro,Co,il))?!1:(rl.crossVectors(cr,ur),n=[rl.x,rl.y,rl.z],Cu(n,Ao,Ro,Co,il))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Pi=[new ee,new ee,new ee,new ee,new ee,new ee,new ee,new ee],si=new ee,nl=new js,Ao=new ee,Ro=new ee,Co=new ee,cr=new ee,ur=new ee,Fr=new ee,Os=new ee,il=new ee,rl=new ee,kr=new ee;function Cu(o,e,n,r,a){for(let c=0,d=o.length-3;c<=d;c+=3){kr.fromArray(o,c);const f=a.x*Math.abs(kr.x)+a.y*Math.abs(kr.y)+a.z*Math.abs(kr.z),h=e.dot(kr),m=n.dot(kr),g=r.dot(kr);if(Math.max(-Math.max(h,m,g),Math.min(h,m,g))>f)return!1}return!0}const Bv=new js,Fs=new ee,bu=new ee;class Gf{constructor(e=new ee,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):Bv.setFromPoints(e).getCenter(r);let a=0;for(let c=0,d=e.length;c<d;c++)a=Math.max(a,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fs.subVectors(e,this.center);const n=Fs.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Fs,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fs.copy(e.center).add(bu)),this.expandByPoint(Fs.copy(e.center).sub(bu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Li=new ee,Pu=new ee,ol=new ee,fr=new ee,Lu=new ee,sl=new ee,Du=new ee;class Wf{constructor(e=new ee,n=new ee(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Li.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,n),Li.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Pu.copy(e).add(n).multiplyScalar(.5),ol.copy(n).sub(e).normalize(),fr.copy(this.origin).sub(Pu);const c=e.distanceTo(n)*.5,d=-this.direction.dot(ol),f=fr.dot(this.direction),h=-fr.dot(ol),m=fr.lengthSq(),g=Math.abs(1-d*d);let y,x,M,R;if(g>0)if(y=d*h-f,x=d*f-h,R=c*g,y>=0)if(x>=-R)if(x<=R){const C=1/g;y*=C,x*=C,M=y*(y+d*x+2*f)+x*(d*y+x+2*h)+m}else x=c,y=Math.max(0,-(d*x+f)),M=-y*y+x*(x+2*h)+m;else x=-c,y=Math.max(0,-(d*x+f)),M=-y*y+x*(x+2*h)+m;else x<=-R?(y=Math.max(0,-(-d*c+f)),x=y>0?-c:Math.min(Math.max(-c,-h),c),M=-y*y+x*(x+2*h)+m):x<=R?(y=0,x=Math.min(Math.max(-c,-h),c),M=x*(x+2*h)+m):(y=Math.max(0,-(d*c+f)),x=y>0?c:Math.min(Math.max(-c,-h),c),M=-y*y+x*(x+2*h)+m);else x=d>0?-c:c,y=Math.max(0,-(d*x+f)),M=-y*y+x*(x+2*h)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,y),a&&a.copy(Pu).addScaledVector(ol,x),M}intersectSphere(e,n){Li.subVectors(e.center,this.origin);const r=Li.dot(this.direction),a=Li.dot(Li)-r*r,c=e.radius*e.radius;if(a>c)return null;const d=Math.sqrt(c-a),f=r-d,h=r+d;return h<0?null:f<0?this.at(h,n):this.at(f,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,c,d,f,h;const m=1/this.direction.x,g=1/this.direction.y,y=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,a=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,a=(e.min.x-x.x)*m),g>=0?(c=(e.min.y-x.y)*g,d=(e.max.y-x.y)*g):(c=(e.max.y-x.y)*g,d=(e.min.y-x.y)*g),r>d||c>a||((c>r||isNaN(r))&&(r=c),(d<a||isNaN(a))&&(a=d),y>=0?(f=(e.min.z-x.z)*y,h=(e.max.z-x.z)*y):(f=(e.max.z-x.z)*y,h=(e.min.z-x.z)*y),r>h||f>a)||((f>r||r!==r)&&(r=f),(h<a||a!==a)&&(a=h),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,n,r,a,c){Lu.subVectors(n,e),sl.subVectors(r,e),Du.crossVectors(Lu,sl);let d=this.direction.dot(Du),f;if(d>0){if(a)return null;f=1}else if(d<0)f=-1,d=-d;else return null;fr.subVectors(this.origin,e);const h=f*this.direction.dot(sl.crossVectors(fr,sl));if(h<0)return null;const m=f*this.direction.dot(Lu.cross(fr));if(m<0||h+m>d)return null;const g=-f*fr.dot(Du);return g<0?null:this.at(g/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qt{constructor(e,n,r,a,c,d,f,h,m,g,y,x,M,R,C,v){qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,c,d,f,h,m,g,y,x,M,R,C,v)}set(e,n,r,a,c,d,f,h,m,g,y,x,M,R,C,v){const _=this.elements;return _[0]=e,_[4]=n,_[8]=r,_[12]=a,_[1]=c,_[5]=d,_[9]=f,_[13]=h,_[2]=m,_[6]=g,_[10]=y,_[14]=x,_[3]=M,_[7]=R,_[11]=C,_[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/bo.setFromMatrixColumn(e,0).length(),c=1/bo.setFromMatrixColumn(e,1).length(),d=1/bo.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*d,n[9]=r[9]*d,n[10]=r[10]*d,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,c=e.z,d=Math.cos(r),f=Math.sin(r),h=Math.cos(a),m=Math.sin(a),g=Math.cos(c),y=Math.sin(c);if(e.order==="XYZ"){const x=d*g,M=d*y,R=f*g,C=f*y;n[0]=h*g,n[4]=-h*y,n[8]=m,n[1]=M+R*m,n[5]=x-C*m,n[9]=-f*h,n[2]=C-x*m,n[6]=R+M*m,n[10]=d*h}else if(e.order==="YXZ"){const x=h*g,M=h*y,R=m*g,C=m*y;n[0]=x+C*f,n[4]=R*f-M,n[8]=d*m,n[1]=d*y,n[5]=d*g,n[9]=-f,n[2]=M*f-R,n[6]=C+x*f,n[10]=d*h}else if(e.order==="ZXY"){const x=h*g,M=h*y,R=m*g,C=m*y;n[0]=x-C*f,n[4]=-d*y,n[8]=R+M*f,n[1]=M+R*f,n[5]=d*g,n[9]=C-x*f,n[2]=-d*m,n[6]=f,n[10]=d*h}else if(e.order==="ZYX"){const x=d*g,M=d*y,R=f*g,C=f*y;n[0]=h*g,n[4]=R*m-M,n[8]=x*m+C,n[1]=h*y,n[5]=C*m+x,n[9]=M*m-R,n[2]=-m,n[6]=f*h,n[10]=d*h}else if(e.order==="YZX"){const x=d*h,M=d*m,R=f*h,C=f*m;n[0]=h*g,n[4]=C-x*y,n[8]=R*y+M,n[1]=y,n[5]=d*g,n[9]=-f*g,n[2]=-m*g,n[6]=M*y+R,n[10]=x-C*y}else if(e.order==="XZY"){const x=d*h,M=d*m,R=f*h,C=f*m;n[0]=h*g,n[4]=-y,n[8]=m*g,n[1]=x*y+C,n[5]=d*g,n[9]=M*y-R,n[2]=R*y-M,n[6]=f*g,n[10]=C*y+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hv,e,Vv)}lookAt(e,n,r){const a=this.elements;return zn.subVectors(e,n),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),dr.crossVectors(r,zn),dr.lengthSq()===0&&(Math.abs(r.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),dr.crossVectors(r,zn)),dr.normalize(),al.crossVectors(zn,dr),a[0]=dr.x,a[4]=al.x,a[8]=zn.x,a[1]=dr.y,a[5]=al.y,a[9]=zn.y,a[2]=dr.z,a[6]=al.z,a[10]=zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,c=this.elements,d=r[0],f=r[4],h=r[8],m=r[12],g=r[1],y=r[5],x=r[9],M=r[13],R=r[2],C=r[6],v=r[10],_=r[14],F=r[3],P=r[7],U=r[11],J=r[15],z=a[0],O=a[4],$=a[8],L=a[12],A=a[1],V=a[5],pe=a[9],K=a[13],ye=a[2],ve=a[6],le=a[10],de=a[14],B=a[3],xe=a[7],me=a[11],k=a[15];return c[0]=d*z+f*A+h*ye+m*B,c[4]=d*O+f*V+h*ve+m*xe,c[8]=d*$+f*pe+h*le+m*me,c[12]=d*L+f*K+h*de+m*k,c[1]=g*z+y*A+x*ye+M*B,c[5]=g*O+y*V+x*ve+M*xe,c[9]=g*$+y*pe+x*le+M*me,c[13]=g*L+y*K+x*de+M*k,c[2]=R*z+C*A+v*ye+_*B,c[6]=R*O+C*V+v*ve+_*xe,c[10]=R*$+C*pe+v*le+_*me,c[14]=R*L+C*K+v*de+_*k,c[3]=F*z+P*A+U*ye+J*B,c[7]=F*O+P*V+U*ve+J*xe,c[11]=F*$+P*pe+U*le+J*me,c[15]=F*L+P*K+U*de+J*k,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],c=e[12],d=e[1],f=e[5],h=e[9],m=e[13],g=e[2],y=e[6],x=e[10],M=e[14],R=e[3],C=e[7],v=e[11],_=e[15];return R*(+c*h*y-a*m*y-c*f*x+r*m*x+a*f*M-r*h*M)+C*(+n*h*M-n*m*x+c*d*x-a*d*M+a*m*g-c*h*g)+v*(+n*m*y-n*f*M-c*d*y+r*d*M+c*f*g-r*m*g)+_*(-a*f*g-n*h*y+n*f*x+a*d*y-r*d*x+r*h*g)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],d=e[4],f=e[5],h=e[6],m=e[7],g=e[8],y=e[9],x=e[10],M=e[11],R=e[12],C=e[13],v=e[14],_=e[15],F=y*v*m-C*x*m+C*h*M-f*v*M-y*h*_+f*x*_,P=R*x*m-g*v*m-R*h*M+d*v*M+g*h*_-d*x*_,U=g*C*m-R*y*m+R*f*M-d*C*M-g*f*_+d*y*_,J=R*y*h-g*C*h-R*f*x+d*C*x+g*f*v-d*y*v,z=n*F+r*P+a*U+c*J;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/z;return e[0]=F*O,e[1]=(C*x*c-y*v*c-C*a*M+r*v*M+y*a*_-r*x*_)*O,e[2]=(f*v*c-C*h*c+C*a*m-r*v*m-f*a*_+r*h*_)*O,e[3]=(y*h*c-f*x*c-y*a*m+r*x*m+f*a*M-r*h*M)*O,e[4]=P*O,e[5]=(g*v*c-R*x*c+R*a*M-n*v*M-g*a*_+n*x*_)*O,e[6]=(R*h*c-d*v*c-R*a*m+n*v*m+d*a*_-n*h*_)*O,e[7]=(d*x*c-g*h*c+g*a*m-n*x*m-d*a*M+n*h*M)*O,e[8]=U*O,e[9]=(R*y*c-g*C*c-R*r*M+n*C*M+g*r*_-n*y*_)*O,e[10]=(d*C*c-R*f*c+R*r*m-n*C*m-d*r*_+n*f*_)*O,e[11]=(g*f*c-d*y*c-g*r*m+n*y*m+d*r*M-n*f*M)*O,e[12]=J*O,e[13]=(g*C*a-R*y*a+R*r*x-n*C*x-g*r*v+n*y*v)*O,e[14]=(R*f*a-d*C*a-R*r*h+n*C*h+d*r*v-n*f*v)*O,e[15]=(d*y*a-g*f*a+g*r*h-n*y*h-d*r*x+n*f*x)*O,this}scale(e){const n=this.elements,r=e.x,a=e.y,c=e.z;return n[0]*=r,n[4]*=a,n[8]*=c,n[1]*=r,n[5]*=a,n[9]*=c,n[2]*=r,n[6]*=a,n[10]*=c,n[3]*=r,n[7]*=a,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),c=1-r,d=e.x,f=e.y,h=e.z,m=c*d,g=c*f;return this.set(m*d+r,m*f-a*h,m*h+a*f,0,m*f+a*h,g*f+r,g*h-a*d,0,m*h-a*f,g*h+a*d,c*h*h+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,c,d){return this.set(1,r,c,0,e,1,d,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,c=n._x,d=n._y,f=n._z,h=n._w,m=c+c,g=d+d,y=f+f,x=c*m,M=c*g,R=c*y,C=d*g,v=d*y,_=f*y,F=h*m,P=h*g,U=h*y,J=r.x,z=r.y,O=r.z;return a[0]=(1-(C+_))*J,a[1]=(M+U)*J,a[2]=(R-P)*J,a[3]=0,a[4]=(M-U)*z,a[5]=(1-(x+_))*z,a[6]=(v+F)*z,a[7]=0,a[8]=(R+P)*O,a[9]=(v-F)*O,a[10]=(1-(x+C))*O,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let c=bo.set(a[0],a[1],a[2]).length();const d=bo.set(a[4],a[5],a[6]).length(),f=bo.set(a[8],a[9],a[10]).length();this.determinant()<0&&(c=-c),e.x=a[12],e.y=a[13],e.z=a[14],ai.copy(this);const m=1/c,g=1/d,y=1/f;return ai.elements[0]*=m,ai.elements[1]*=m,ai.elements[2]*=m,ai.elements[4]*=g,ai.elements[5]*=g,ai.elements[6]*=g,ai.elements[8]*=y,ai.elements[9]*=y,ai.elements[10]*=y,n.setFromRotationMatrix(ai),r.x=c,r.y=d,r.z=f,this}makePerspective(e,n,r,a,c,d,f=Fi){const h=this.elements,m=2*c/(n-e),g=2*c/(r-a),y=(n+e)/(n-e),x=(r+a)/(r-a);let M,R;if(f===Fi)M=-(d+c)/(d-c),R=-2*d*c/(d-c);else if(f===Nl)M=-d/(d-c),R=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=m,h[4]=0,h[8]=y,h[12]=0,h[1]=0,h[5]=g,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=R,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,r,a,c,d,f=Fi){const h=this.elements,m=1/(n-e),g=1/(r-a),y=1/(d-c),x=(n+e)*m,M=(r+a)*g;let R,C;if(f===Fi)R=(d+c)*y,C=-2*y;else if(f===Nl)R=c*y,C=-1*y;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=2*m,h[4]=0,h[8]=0,h[12]=-x,h[1]=0,h[5]=2*g,h[9]=0,h[13]=-M,h[2]=0,h[6]=0,h[10]=C,h[14]=-R,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const bo=new ee,ai=new qt,Hv=new ee(0,0,0),Vv=new ee(1,1,1),dr=new ee,al=new ee,zn=new ee,zp=new qt,Bp=new Kr;class cn{constructor(e=0,n=0,r=0,a=cn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,c=a[0],d=a[4],f=a[8],h=a[1],m=a[5],g=a[9],y=a[2],x=a[6],M=a[10];switch(n){case"XYZ":this._y=Math.asin(gn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-gn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,M),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-y,c),this._z=0);break;case"ZXY":this._x=Math.asin(gn(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-y,M),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(h,c));break;case"ZYX":this._y=Math.asin(-gn(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(h,c)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(gn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-y,c)):(this._x=0,this._y=Math.atan2(f,M));break;case"XZY":this._z=Math.asin(-gn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(f,c)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return zp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zp,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Bp.setFromEuler(this),this.setFromQuaternion(Bp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}cn.DEFAULT_ORDER="XYZ";class Xf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Gv=0;const Hp=new ee,Po=new Kr,Di=new qt,ll=new ee,ks=new ee,Wv=new ee,Xv=new Kr,Vp=new ee(1,0,0),Gp=new ee(0,1,0),Wp=new ee(0,0,1),Xp={type:"added"},jv={type:"removed"},Lo={type:"childadded",child:null},Nu={type:"childremoved",child:null};class Vn extends Qr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gv++}),this.uuid=es(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vn.DEFAULT_UP.clone();const e=new ee,n=new cn,r=new Kr,a=new ee(1,1,1);function c(){r.setFromEuler(n,!1)}function d(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new qt},normalMatrix:{value:new gt}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=Vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Po.setFromAxisAngle(e,n),this.quaternion.multiply(Po),this}rotateOnWorldAxis(e,n){return Po.setFromAxisAngle(e,n),this.quaternion.premultiply(Po),this}rotateX(e){return this.rotateOnAxis(Vp,e)}rotateY(e){return this.rotateOnAxis(Gp,e)}rotateZ(e){return this.rotateOnAxis(Wp,e)}translateOnAxis(e,n){return Hp.copy(e).applyQuaternion(this.quaternion),this.position.add(Hp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Vp,e)}translateY(e){return this.translateOnAxis(Gp,e)}translateZ(e){return this.translateOnAxis(Wp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?ll.copy(e):ll.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(ks,ll,this.up):Di.lookAt(ll,ks,this.up),this.quaternion.setFromRotationMatrix(Di),a&&(Di.extractRotation(a.matrixWorld),Po.setFromRotationMatrix(Di),this.quaternion.premultiply(Po.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xp),Lo.child=e,this.dispatchEvent(Lo),Lo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(jv),Nu.child=e,this.dispatchEvent(Nu),Nu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Di.multiply(e.parent.matrixWorld)),e.applyMatrix4(Di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xp),Lo.child=e,this.dispatchEvent(Lo),Lo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const d=this.children[r].getObjectByProperty(e,n);if(d!==void 0)return d}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let c=0,d=a.length;c<d;c++)a[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,e,Wv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,Xv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let c=0,d=a.length;c<d;c++)a[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function c(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=c(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let m=0,g=h.length;m<g;m++){const y=h[m];c(e.shapes,y)}else c(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,m=this.material.length;h<m;h++)f.push(c(e.materials,this.material[h]));a.material=f}else a.material=c(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];a.animations.push(c(e.animations,h))}}if(n){const f=d(e.geometries),h=d(e.materials),m=d(e.textures),g=d(e.images),y=d(e.shapes),x=d(e.skeletons),M=d(e.animations),R=d(e.nodes);f.length>0&&(r.geometries=f),h.length>0&&(r.materials=h),m.length>0&&(r.textures=m),g.length>0&&(r.images=g),y.length>0&&(r.shapes=y),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),R.length>0&&(r.nodes=R)}return r.object=a,r;function d(f){const h=[];for(const m in f){const g=f[m];delete g.metadata,h.push(g)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}Vn.DEFAULT_UP=new ee(0,1,0);Vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const li=new ee,Ni=new ee,Iu=new ee,Ii=new ee,Do=new ee,No=new ee,jp=new ee,Uu=new ee,Ou=new ee,Fu=new ee;class _i{constructor(e=new ee,n=new ee,r=new ee){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),li.subVectors(e,n),a.cross(li);const c=a.lengthSq();return c>0?a.multiplyScalar(1/Math.sqrt(c)):a.set(0,0,0)}static getBarycoord(e,n,r,a,c){li.subVectors(a,n),Ni.subVectors(r,n),Iu.subVectors(e,n);const d=li.dot(li),f=li.dot(Ni),h=li.dot(Iu),m=Ni.dot(Ni),g=Ni.dot(Iu),y=d*m-f*f;if(y===0)return c.set(0,0,0),null;const x=1/y,M=(m*h-f*g)*x,R=(d*g-f*h)*x;return c.set(1-M-R,R,M)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(e,n,r,a,c,d,f,h){return this.getBarycoord(e,n,r,a,Ii)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(c,Ii.x),h.addScaledVector(d,Ii.y),h.addScaledVector(f,Ii.z),h)}static isFrontFacing(e,n,r,a){return li.subVectors(r,n),Ni.subVectors(e,n),li.cross(Ni).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return li.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),li.cross(Ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return _i.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,c){return _i.getInterpolation(e,this.a,this.b,this.c,n,r,a,c)}containsPoint(e){return _i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,c=this.c;let d,f;Do.subVectors(a,r),No.subVectors(c,r),Uu.subVectors(e,r);const h=Do.dot(Uu),m=No.dot(Uu);if(h<=0&&m<=0)return n.copy(r);Ou.subVectors(e,a);const g=Do.dot(Ou),y=No.dot(Ou);if(g>=0&&y<=g)return n.copy(a);const x=h*y-g*m;if(x<=0&&h>=0&&g<=0)return d=h/(h-g),n.copy(r).addScaledVector(Do,d);Fu.subVectors(e,c);const M=Do.dot(Fu),R=No.dot(Fu);if(R>=0&&M<=R)return n.copy(c);const C=M*m-h*R;if(C<=0&&m>=0&&R<=0)return f=m/(m-R),n.copy(r).addScaledVector(No,f);const v=g*R-M*y;if(v<=0&&y-g>=0&&M-R>=0)return jp.subVectors(c,a),f=(y-g)/(y-g+(M-R)),n.copy(a).addScaledVector(jp,f);const _=1/(v+C+x);return d=C*_,f=x*_,n.copy(r).addScaledVector(Do,d).addScaledVector(No,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Jm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hr={h:0,s:0,l:0},cl={h:0,s:0,l:0};function ku(o,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?o+(e-o)*6*n:n<1/2?e:n<2/3?o+(e-o)*6*(2/3-n):o}class Rt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=At.workingColorSpace){return this.r=e,this.g=n,this.b=r,At.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=At.workingColorSpace){if(e=Vf(e,1),n=gn(n,0,1),r=gn(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,d=2*r-c;this.r=ku(d,c,e+1/3),this.g=ku(d,c,e),this.b=ku(d,c,e-1/3)}return At.toWorkingColorSpace(this,a),this}setStyle(e,n=Kn){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=a[1],f=a[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=a[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(d===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Kn){const r=Jm[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qo(e.r),this.g=qo(e.g),this.b=qo(e.b),this}copyLinearToSRGB(e){return this.r=Tu(e.r),this.g=Tu(e.g),this.b=Tu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kn){return At.fromWorkingColorSpace(mn.copy(this),e),Math.round(gn(mn.r*255,0,255))*65536+Math.round(gn(mn.g*255,0,255))*256+Math.round(gn(mn.b*255,0,255))}getHexString(e=Kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=At.workingColorSpace){At.fromWorkingColorSpace(mn.copy(this),n);const r=mn.r,a=mn.g,c=mn.b,d=Math.max(r,a,c),f=Math.min(r,a,c);let h,m;const g=(f+d)/2;if(f===d)h=0,m=0;else{const y=d-f;switch(m=g<=.5?y/(d+f):y/(2-d-f),d){case r:h=(a-c)/y+(a<c?6:0);break;case a:h=(c-r)/y+2;break;case c:h=(r-a)/y+4;break}h/=6}return e.h=h,e.s=m,e.l=g,e}getRGB(e,n=At.workingColorSpace){return At.fromWorkingColorSpace(mn.copy(this),n),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=Kn){At.fromWorkingColorSpace(mn.copy(this),e);const n=mn.r,r=mn.g,a=mn.b;return e!==Kn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(hr),this.setHSL(hr.h+e,hr.s+n,hr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(hr),e.getHSL(cl);const r=Vs(hr.h,cl.h,n),a=Vs(hr.s,cl.s,n),c=Vs(hr.l,cl.l,n);return this.setHSL(r,a,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*a,this.g=c[1]*n+c[4]*r+c[7]*a,this.b=c[2]*n+c[5]*r+c[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mn=new Rt;Rt.NAMES=Jm;let Yv=0;class Fl extends Qr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yv++}),this.uuid=es(),this.name="",this.type="Material",this.blending=jo,this.side=zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qu,this.blendDst=Ju,this.blendEquation=Wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=bl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wo,this.stencilZFail=wo,this.stencilZPass=wo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==jo&&(r.blending=this.blending),this.side!==zi&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Qu&&(r.blendSrc=this.blendSrc),this.blendDst!==Ju&&(r.blendDst=this.blendDst),this.blendEquation!==Wr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==bl&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wo&&(r.stencilFail=this.stencilFail),this.stencilZFail!==wo&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==wo&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(c){const d=[];for(const f in c){const h=c[f];delete h.metadata,d.push(h)}return d}if(n){const c=a(e.textures),d=a(e.images);c.length>0&&(r.textures=c),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let c=0;c!==a;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class kl extends Fl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=Om,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yt=new ee,ul=new ht;class vi{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Dp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Km("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,c=this.itemSize;a<c;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)ul.fromBufferAttribute(this,n),ul.applyMatrix3(e),this.setXY(n,ul.x,ul.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Yt.fromBufferAttribute(this,n),Yt.applyMatrix3(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Yt.fromBufferAttribute(this,n),Yt.applyMatrix4(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Yt.fromBufferAttribute(this,n),Yt.applyNormalMatrix(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Yt.fromBufferAttribute(this,n),Yt.transformDirection(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Ho(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=yn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ho(n,this.array)),n}setX(e,n){return this.normalized&&(n=yn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ho(n,this.array)),n}setY(e,n){return this.normalized&&(n=yn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ho(n,this.array)),n}setZ(e,n){return this.normalized&&(n=yn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ho(n,this.array)),n}setW(e,n){return this.normalized&&(n=yn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=yn(n,this.array),r=yn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=yn(n,this.array),r=yn(r,this.array),a=yn(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,c){return e*=this.itemSize,this.normalized&&(n=yn(n,this.array),r=yn(r,this.array),a=yn(a,this.array),c=yn(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Dp&&(e.usage=this.usage),e}}class eg extends vi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class tg extends vi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class ki extends vi{constructor(e,n,r){super(new Float32Array(e),n,r)}}let qv=0;const $n=new qt,zu=new Vn,Io=new ee,Bn=new js,zs=new js,on=new ee;class Mr extends Qr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qv++}),this.uuid=es(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($m(e)?tg:eg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new gt().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $n.makeRotationFromQuaternion(e),this.applyMatrix4($n),this}rotateX(e){return $n.makeRotationX(e),this.applyMatrix4($n),this}rotateY(e){return $n.makeRotationY(e),this.applyMatrix4($n),this}rotateZ(e){return $n.makeRotationZ(e),this.applyMatrix4($n),this}translate(e,n,r){return $n.makeTranslation(e,n,r),this.applyMatrix4($n),this}scale(e,n,r){return $n.makeScale(e,n,r),this.applyMatrix4($n),this}lookAt(e){return zu.lookAt(e),zu.updateMatrix(),this.applyMatrix4(zu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Io).negate(),this.translate(Io.x,Io.y,Io.z),this}setFromPoints(e){const n=[];for(let r=0,a=e.length;r<a;r++){const c=e[r];n.push(c.x,c.y,c.z||0)}return this.setAttribute("position",new ki(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new js);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ee(-1/0,-1/0,-1/0),new ee(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const c=n[r];Bn.setFromBufferAttribute(c),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ee,1/0);return}if(e){const r=this.boundingSphere.center;if(Bn.setFromBufferAttribute(e),n)for(let c=0,d=n.length;c<d;c++){const f=n[c];zs.setFromBufferAttribute(f),this.morphTargetsRelative?(on.addVectors(Bn.min,zs.min),Bn.expandByPoint(on),on.addVectors(Bn.max,zs.max),Bn.expandByPoint(on)):(Bn.expandByPoint(zs.min),Bn.expandByPoint(zs.max))}Bn.getCenter(r);let a=0;for(let c=0,d=e.count;c<d;c++)on.fromBufferAttribute(e,c),a=Math.max(a,r.distanceToSquared(on));if(n)for(let c=0,d=n.length;c<d;c++){const f=n[c],h=this.morphTargetsRelative;for(let m=0,g=f.count;m<g;m++)on.fromBufferAttribute(f,m),h&&(Io.fromBufferAttribute(e,m),on.add(Io)),a=Math.max(a,r.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vi(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),f=[],h=[];for(let $=0;$<r.count;$++)f[$]=new ee,h[$]=new ee;const m=new ee,g=new ee,y=new ee,x=new ht,M=new ht,R=new ht,C=new ee,v=new ee;function _($,L,A){m.fromBufferAttribute(r,$),g.fromBufferAttribute(r,L),y.fromBufferAttribute(r,A),x.fromBufferAttribute(c,$),M.fromBufferAttribute(c,L),R.fromBufferAttribute(c,A),g.sub(m),y.sub(m),M.sub(x),R.sub(x);const V=1/(M.x*R.y-R.x*M.y);isFinite(V)&&(C.copy(g).multiplyScalar(R.y).addScaledVector(y,-M.y).multiplyScalar(V),v.copy(y).multiplyScalar(M.x).addScaledVector(g,-R.x).multiplyScalar(V),f[$].add(C),f[L].add(C),f[A].add(C),h[$].add(v),h[L].add(v),h[A].add(v))}let F=this.groups;F.length===0&&(F=[{start:0,count:e.count}]);for(let $=0,L=F.length;$<L;++$){const A=F[$],V=A.start,pe=A.count;for(let K=V,ye=V+pe;K<ye;K+=3)_(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const P=new ee,U=new ee,J=new ee,z=new ee;function O($){J.fromBufferAttribute(a,$),z.copy(J);const L=f[$];P.copy(L),P.sub(J.multiplyScalar(J.dot(L))).normalize(),U.crossVectors(z,L);const V=U.dot(h[$])<0?-1:1;d.setXYZW($,P.x,P.y,P.z,V)}for(let $=0,L=F.length;$<L;++$){const A=F[$],V=A.start,pe=A.count;for(let K=V,ye=V+pe;K<ye;K+=3)O(e.getX(K+0)),O(e.getX(K+1)),O(e.getX(K+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new vi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const a=new ee,c=new ee,d=new ee,f=new ee,h=new ee,m=new ee,g=new ee,y=new ee;if(e)for(let x=0,M=e.count;x<M;x+=3){const R=e.getX(x+0),C=e.getX(x+1),v=e.getX(x+2);a.fromBufferAttribute(n,R),c.fromBufferAttribute(n,C),d.fromBufferAttribute(n,v),g.subVectors(d,c),y.subVectors(a,c),g.cross(y),f.fromBufferAttribute(r,R),h.fromBufferAttribute(r,C),m.fromBufferAttribute(r,v),f.add(g),h.add(g),m.add(g),r.setXYZ(R,f.x,f.y,f.z),r.setXYZ(C,h.x,h.y,h.z),r.setXYZ(v,m.x,m.y,m.z)}else for(let x=0,M=n.count;x<M;x+=3)a.fromBufferAttribute(n,x+0),c.fromBufferAttribute(n,x+1),d.fromBufferAttribute(n,x+2),g.subVectors(d,c),y.subVectors(a,c),g.cross(y),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)on.fromBufferAttribute(e,n),on.normalize(),e.setXYZ(n,on.x,on.y,on.z)}toNonIndexed(){function e(f,h){const m=f.array,g=f.itemSize,y=f.normalized,x=new m.constructor(h.length*g);let M=0,R=0;for(let C=0,v=h.length;C<v;C++){f.isInterleavedBufferAttribute?M=h[C]*f.data.stride+f.offset:M=h[C]*g;for(let _=0;_<g;_++)x[R++]=m[M++]}return new vi(x,g,y)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Mr,r=this.index.array,a=this.attributes;for(const f in a){const h=a[f],m=e(h,r);n.setAttribute(f,m)}const c=this.morphAttributes;for(const f in c){const h=[],m=c[f];for(let g=0,y=m.length;g<y;g++){const x=m[g],M=e(x,r);h.push(M)}n.morphAttributes[f]=h}n.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let f=0,h=d.length;f<h;f++){const m=d[f];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const m in h)h[m]!==void 0&&(e[m]=h[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const h in r){const m=r[h];e.data.attributes[h]=m.toJSON(e.data)}const a={};let c=!1;for(const h in this.morphAttributes){const m=this.morphAttributes[h],g=[];for(let y=0,x=m.length;y<x;y++){const M=m[y];g.push(M.toJSON(e.data))}g.length>0&&(a[h]=g,c=!0)}c&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const m in a){const g=a[m];this.setAttribute(m,g.clone(n))}const c=e.morphAttributes;for(const m in c){const g=[],y=c[m];for(let x=0,M=y.length;x<M;x++)g.push(y[x].clone(n));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,g=d.length;m<g;m++){const y=d[m];this.addGroup(y.start,y.count,y.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Yp=new qt,zr=new Wf,fl=new Gf,qp=new ee,Uo=new ee,Oo=new ee,Fo=new ee,Bu=new ee,dl=new ee,hl=new ht,pl=new ht,ml=new ht,$p=new ee,Kp=new ee,Zp=new ee,gl=new ee,_l=new ee;class Qn extends Vn{constructor(e=new Mr,n=new kl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=a.length;c<d;c++){const f=a[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,c=r.morphAttributes.position,d=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(c&&f){dl.set(0,0,0);for(let h=0,m=c.length;h<m;h++){const g=f[h],y=c[h];g!==0&&(Bu.fromBufferAttribute(y,e),d?dl.addScaledVector(Bu,g):dl.addScaledVector(Bu.sub(n),g))}n.add(dl)}return n}raycast(e,n){const r=this.geometry,a=this.material,c=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),fl.copy(r.boundingSphere),fl.applyMatrix4(c),zr.copy(e.ray).recast(e.near),!(fl.containsPoint(zr.origin)===!1&&(zr.intersectSphere(fl,qp)===null||zr.origin.distanceToSquared(qp)>(e.far-e.near)**2))&&(Yp.copy(c).invert(),zr.copy(e.ray).applyMatrix4(Yp),!(r.boundingBox!==null&&zr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,zr)))}_computeIntersections(e,n,r){let a;const c=this.geometry,d=this.material,f=c.index,h=c.attributes.position,m=c.attributes.uv,g=c.attributes.uv1,y=c.attributes.normal,x=c.groups,M=c.drawRange;if(f!==null)if(Array.isArray(d))for(let R=0,C=x.length;R<C;R++){const v=x[R],_=d[v.materialIndex],F=Math.max(v.start,M.start),P=Math.min(f.count,Math.min(v.start+v.count,M.start+M.count));for(let U=F,J=P;U<J;U+=3){const z=f.getX(U),O=f.getX(U+1),$=f.getX(U+2);a=vl(this,_,e,r,m,g,y,z,O,$),a&&(a.faceIndex=Math.floor(U/3),a.face.materialIndex=v.materialIndex,n.push(a))}}else{const R=Math.max(0,M.start),C=Math.min(f.count,M.start+M.count);for(let v=R,_=C;v<_;v+=3){const F=f.getX(v),P=f.getX(v+1),U=f.getX(v+2);a=vl(this,d,e,r,m,g,y,F,P,U),a&&(a.faceIndex=Math.floor(v/3),n.push(a))}}else if(h!==void 0)if(Array.isArray(d))for(let R=0,C=x.length;R<C;R++){const v=x[R],_=d[v.materialIndex],F=Math.max(v.start,M.start),P=Math.min(h.count,Math.min(v.start+v.count,M.start+M.count));for(let U=F,J=P;U<J;U+=3){const z=U,O=U+1,$=U+2;a=vl(this,_,e,r,m,g,y,z,O,$),a&&(a.faceIndex=Math.floor(U/3),a.face.materialIndex=v.materialIndex,n.push(a))}}else{const R=Math.max(0,M.start),C=Math.min(h.count,M.start+M.count);for(let v=R,_=C;v<_;v+=3){const F=v,P=v+1,U=v+2;a=vl(this,d,e,r,m,g,y,F,P,U),a&&(a.faceIndex=Math.floor(v/3),n.push(a))}}}}function $v(o,e,n,r,a,c,d,f){let h;if(e.side===En?h=r.intersectTriangle(d,c,a,!0,f):h=r.intersectTriangle(a,c,d,e.side===zi,f),h===null)return null;_l.copy(f),_l.applyMatrix4(o.matrixWorld);const m=n.ray.origin.distanceTo(_l);return m<n.near||m>n.far?null:{distance:m,point:_l.clone(),object:o}}function vl(o,e,n,r,a,c,d,f,h,m){o.getVertexPosition(f,Uo),o.getVertexPosition(h,Oo),o.getVertexPosition(m,Fo);const g=$v(o,e,n,r,Uo,Oo,Fo,gl);if(g){a&&(hl.fromBufferAttribute(a,f),pl.fromBufferAttribute(a,h),ml.fromBufferAttribute(a,m),g.uv=_i.getInterpolation(gl,Uo,Oo,Fo,hl,pl,ml,new ht)),c&&(hl.fromBufferAttribute(c,f),pl.fromBufferAttribute(c,h),ml.fromBufferAttribute(c,m),g.uv1=_i.getInterpolation(gl,Uo,Oo,Fo,hl,pl,ml,new ht)),d&&($p.fromBufferAttribute(d,f),Kp.fromBufferAttribute(d,h),Zp.fromBufferAttribute(d,m),g.normal=_i.getInterpolation(gl,Uo,Oo,Fo,$p,Kp,Zp,new ee),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const y={a:f,b:h,c:m,normal:new ee,materialIndex:0};_i.getNormal(Uo,Oo,Fo,y.normal),g.face=y}return g}class Ys extends Mr{constructor(e=1,n=1,r=1,a=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:c,depthSegments:d};const f=this;a=Math.floor(a),c=Math.floor(c),d=Math.floor(d);const h=[],m=[],g=[],y=[];let x=0,M=0;R("z","y","x",-1,-1,r,n,e,d,c,0),R("z","y","x",1,-1,r,n,-e,d,c,1),R("x","z","y",1,1,e,r,n,a,d,2),R("x","z","y",1,-1,e,r,-n,a,d,3),R("x","y","z",1,-1,e,n,r,a,c,4),R("x","y","z",-1,-1,e,n,-r,a,c,5),this.setIndex(h),this.setAttribute("position",new ki(m,3)),this.setAttribute("normal",new ki(g,3)),this.setAttribute("uv",new ki(y,2));function R(C,v,_,F,P,U,J,z,O,$,L){const A=U/O,V=J/$,pe=U/2,K=J/2,ye=z/2,ve=O+1,le=$+1;let de=0,B=0;const xe=new ee;for(let me=0;me<le;me++){const k=me*V-K;for(let ce=0;ce<ve;ce++){const He=ce*A-pe;xe[C]=He*F,xe[v]=k*P,xe[_]=ye,m.push(xe.x,xe.y,xe.z),xe[C]=0,xe[v]=0,xe[_]=z>0?1:-1,g.push(xe.x,xe.y,xe.z),y.push(ce/O),y.push(1-me/$),de+=1}}for(let me=0;me<$;me++)for(let k=0;k<O;k++){const ce=x+k+ve*me,He=x+k+ve*(me+1),te=x+(k+1)+ve*(me+1),Se=x+(k+1)+ve*me;h.push(ce,He,Se),h.push(He,te,Se),B+=6}f.addGroup(M,B,L),M+=B,x+=de}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ys(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Jo(o){const e={};for(const n in o){e[n]={};for(const r in o[n]){const a=o[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function Sn(o){const e={};for(let n=0;n<o.length;n++){const r=Jo(o[n]);for(const a in r)e[a]=r[a]}return e}function Kv(o){const e=[];for(let n=0;n<o.length;n++)e.push(o[n].clone());return e}function ng(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}const Zv={clone:Jo,merge:Sn};var Qv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yr extends Fl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qv,this.fragmentShader=Jv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Jo(e.uniforms),this.uniformsGroups=Kv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const d=this.uniforms[a].value;d&&d.isTexture?n.uniforms[a]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?n.uniforms[a]={type:"c",value:d.getHex()}:d&&d.isVector2?n.uniforms[a]={type:"v2",value:d.toArray()}:d&&d.isVector3?n.uniforms[a]={type:"v3",value:d.toArray()}:d&&d.isVector4?n.uniforms[a]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?n.uniforms[a]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?n.uniforms[a]={type:"m4",value:d.toArray()}:n.uniforms[a]={value:d}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class ig extends Vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=Fi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pr=new ee,Qp=new ht,Jp=new ht;class Hn extends ig{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ws*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ws*2*Math.atan(Math.tan(Hs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){pr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pr.x,pr.y).multiplyScalar(-e/pr.z),pr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(pr.x,pr.y).multiplyScalar(-e/pr.z)}getViewSize(e,n){return this.getViewBounds(e,Qp,Jp),n.subVectors(Jp,Qp)}setViewOffset(e,n,r,a,c,d){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Hs*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,c=-.5*a;const d=this.view;if(this.view!==null&&this.view.enabled){const h=d.fullWidth,m=d.fullHeight;c+=d.offsetX*a/h,n-=d.offsetY*r/m,a*=d.width/h,r*=d.height/m}const f=this.filmOffset;f!==0&&(c+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ko=-90,zo=1;class ex extends Vn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Hn(ko,zo,e,n);a.layers=this.layers,this.add(a);const c=new Hn(ko,zo,e,n);c.layers=this.layers,this.add(c);const d=new Hn(ko,zo,e,n);d.layers=this.layers,this.add(d);const f=new Hn(ko,zo,e,n);f.layers=this.layers,this.add(f);const h=new Hn(ko,zo,e,n);h.layers=this.layers,this.add(h);const m=new Hn(ko,zo,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,c,d,f,h]=n;for(const m of n)this.remove(m);if(e===Fi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Nl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,f,h,m,g]=this.children,y=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),R=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,c),e.setRenderTarget(r,1,a),e.render(n,d),e.setRenderTarget(r,2,a),e.render(n,f),e.setRenderTarget(r,3,a),e.render(n,h),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,a),e.render(n,g),e.setRenderTarget(y,x,M),e.xr.enabled=R,r.texture.needsPMREMUpdate=!0}}class rg extends wn{constructor(e,n,r,a,c,d,f,h,m,g){e=e!==void 0?e:[],n=n!==void 0?n:$o,super(e,n,r,a,c,d,f,h,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class tx extends $r{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new rg(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Mn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Ys(5,5,5),c=new yr({name:"CubemapFromEquirect",uniforms:Jo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:En,blending:vr});c.uniforms.tEquirect.value=n;const d=new Qn(a,c),f=n.minFilter;return n.minFilter===Yr&&(n.minFilter=Mn),new ex(1,10,this).update(e,d),n.minFilter=f,d.geometry.dispose(),d.material.dispose(),this}clear(e,n,r,a){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(n,r,a);e.setRenderTarget(c)}}const Hu=new ee,nx=new ee,ix=new gt;class mr{constructor(e=new ee(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=Hu.subVectors(r,n).cross(nx.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Hu),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/a;return c<0||c>1?null:n.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||ix.getNormalMatrix(e),a=this.coplanarPoint(Hu).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Br=new Gf,xl=new ee;class og{constructor(e=new mr,n=new mr,r=new mr,a=new mr,c=new mr,d=new mr){this.planes=[e,n,r,a,c,d]}set(e,n,r,a,c,d){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(r),f[3].copy(a),f[4].copy(c),f[5].copy(d),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Fi){const r=this.planes,a=e.elements,c=a[0],d=a[1],f=a[2],h=a[3],m=a[4],g=a[5],y=a[6],x=a[7],M=a[8],R=a[9],C=a[10],v=a[11],_=a[12],F=a[13],P=a[14],U=a[15];if(r[0].setComponents(h-c,x-m,v-M,U-_).normalize(),r[1].setComponents(h+c,x+m,v+M,U+_).normalize(),r[2].setComponents(h+d,x+g,v+R,U+F).normalize(),r[3].setComponents(h-d,x-g,v-R,U-F).normalize(),r[4].setComponents(h-f,x-y,v-C,U-P).normalize(),n===Fi)r[5].setComponents(h+f,x+y,v+C,U+P).normalize();else if(n===Nl)r[5].setComponents(f,y,C,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Br)}intersectsSprite(e){return Br.center.set(0,0,0),Br.radius=.7071067811865476,Br.applyMatrix4(e.matrixWorld),this.intersectsSphere(Br)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(xl.x=a.normal.x>0?e.max.x:e.min.x,xl.y=a.normal.y>0?e.max.y:e.min.y,xl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(xl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function sg(){let o=null,e=!1,n=null,r=null;function a(c,d){n(c,d),r=o.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=o.requestAnimationFrame(a),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){o=c}}}function rx(o){const e=new WeakMap;function n(f,h){const m=f.array,g=f.usage,y=m.byteLength,x=o.createBuffer();o.bindBuffer(h,x),o.bufferData(h,m,g),f.onUploadCallback();let M;if(m instanceof Float32Array)M=o.FLOAT;else if(m instanceof Uint16Array)f.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=o.SHORT;else if(m instanceof Uint32Array)M=o.UNSIGNED_INT;else if(m instanceof Int32Array)M=o.INT;else if(m instanceof Int8Array)M=o.BYTE;else if(m instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version,size:y}}function r(f,h,m){const g=h.array,y=h._updateRange,x=h.updateRanges;if(o.bindBuffer(m,f),y.count===-1&&x.length===0&&o.bufferSubData(m,0,g),x.length!==0){for(let M=0,R=x.length;M<R;M++){const C=x[M];o.bufferSubData(m,C.start*g.BYTES_PER_ELEMENT,g,C.start,C.count)}h.clearUpdateRanges()}y.count!==-1&&(o.bufferSubData(m,y.offset*g.BYTES_PER_ELEMENT,g,y.offset,y.count),y.count=-1),h.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function c(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(o.deleteBuffer(h.buffer),e.delete(f))}function d(f,h){if(f.isGLBufferAttribute){const g=e.get(f);(!g||g.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}f.isInterleavedBufferAttribute&&(f=f.data);const m=e.get(f);if(m===void 0)e.set(f,n(f,h));else if(m.version<f.version){if(m.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,f,h),m.version=f.version}}return{get:a,remove:c,update:d}}class qs extends Mr{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const c=e/2,d=n/2,f=Math.floor(r),h=Math.floor(a),m=f+1,g=h+1,y=e/f,x=n/h,M=[],R=[],C=[],v=[];for(let _=0;_<g;_++){const F=_*x-d;for(let P=0;P<m;P++){const U=P*y-c;R.push(U,-F,0),C.push(0,0,1),v.push(P/f),v.push(1-_/h)}}for(let _=0;_<h;_++)for(let F=0;F<f;F++){const P=F+m*_,U=F+m*(_+1),J=F+1+m*(_+1),z=F+1+m*_;M.push(P,U,z),M.push(U,J,z)}this.setIndex(M),this.setAttribute("position",new ki(R,3)),this.setAttribute("normal",new ki(C,3)),this.setAttribute("uv",new ki(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qs(e.width,e.height,e.widthSegments,e.heightSegments)}}var ox=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sx=`#ifdef USE_ALPHAHASH
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
#endif`,ax=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ux=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fx=`#ifdef USE_AOMAP
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
#endif`,dx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hx=`#ifdef USE_BATCHING
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
#endif`,px=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_x=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vx=`#ifdef USE_IRIDESCENCE
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
#endif`,xx=`#ifdef USE_BUMPMAP
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
#endif`,yx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Sx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ex=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Tx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ax=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Rx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Cx=`#define PI 3.141592653589793
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
} // validated`,bx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Px=`vec3 transformedNormal = objectNormal;
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
#endif`,Lx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ix=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ux="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ox=`
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
}`,Fx=`#ifdef USE_ENVMAP
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
#endif`,kx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zx=`#ifdef USE_ENVMAP
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
#endif`,Bx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hx=`#ifdef USE_ENVMAP
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
#endif`,Vx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jx=`#ifdef USE_GRADIENTMAP
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
}`,Yx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$x=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kx=`uniform bool receiveShadow;
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
#endif`,Zx=`#ifdef USE_ENVMAP
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
#endif`,Qx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ey=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ty=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ny=`PhysicalMaterial material;
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
#endif`,iy=`struct PhysicalMaterial {
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
}`,ry=`
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
#endif`,oy=`#if defined( RE_IndirectDiffuse )
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
#endif`,sy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ay=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ly=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,py=`#if defined( USE_POINTS_UV )
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
#endif`,my=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_y=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yy=`#ifdef USE_MORPHTARGETS
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
#endif`,Sy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,My=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ey=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ty=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ay=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ry=`#ifdef USE_NORMALMAP
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
#endif`,Cy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,by=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Py=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ly=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ny=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Iy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Uy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Oy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ky=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,By=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Gy=`float getShadowMask() {
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
}`,Wy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xy=`#ifdef USE_SKINNING
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
#endif`,jy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yy=`#ifdef USE_SKINNING
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
#endif`,qy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$y=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ky=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qy=`#ifdef USE_TRANSMISSION
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
#endif`,Jy=`#ifdef USE_TRANSMISSION
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
#endif`,eS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,oS=`uniform sampler2D t2D;
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
}`,sS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,lS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uS=`#include <common>
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
}`,fS=`#if DEPTH_PACKING == 3200
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
}`,dS=`#define DISTANCE
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
}`,hS=`#define DISTANCE
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
}`,pS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gS=`uniform float scale;
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
}`,_S=`uniform vec3 diffuse;
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
}`,vS=`#include <common>
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
}`,xS=`uniform vec3 diffuse;
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
}`,yS=`#define LAMBERT
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
}`,SS=`#define LAMBERT
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
}`,MS=`#define MATCAP
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
}`,ES=`#define MATCAP
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
}`,wS=`#define NORMAL
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
}`,TS=`#define NORMAL
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
}`,AS=`#define PHONG
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
}`,RS=`#define PHONG
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
}`,CS=`#define STANDARD
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
}`,bS=`#define STANDARD
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
}`,PS=`#define TOON
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
}`,LS=`#define TOON
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
}`,DS=`uniform float size;
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
}`,NS=`uniform vec3 diffuse;
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
}`,IS=`#include <common>
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
}`,US=`uniform vec3 color;
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
}`,OS=`uniform float rotation;
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
}`,FS=`uniform vec3 diffuse;
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
}`,mt={alphahash_fragment:ox,alphahash_pars_fragment:sx,alphamap_fragment:ax,alphamap_pars_fragment:lx,alphatest_fragment:cx,alphatest_pars_fragment:ux,aomap_fragment:fx,aomap_pars_fragment:dx,batching_pars_vertex:hx,batching_vertex:px,begin_vertex:mx,beginnormal_vertex:gx,bsdfs:_x,iridescence_fragment:vx,bumpmap_pars_fragment:xx,clipping_planes_fragment:yx,clipping_planes_pars_fragment:Sx,clipping_planes_pars_vertex:Mx,clipping_planes_vertex:Ex,color_fragment:wx,color_pars_fragment:Tx,color_pars_vertex:Ax,color_vertex:Rx,common:Cx,cube_uv_reflection_fragment:bx,defaultnormal_vertex:Px,displacementmap_pars_vertex:Lx,displacementmap_vertex:Dx,emissivemap_fragment:Nx,emissivemap_pars_fragment:Ix,colorspace_fragment:Ux,colorspace_pars_fragment:Ox,envmap_fragment:Fx,envmap_common_pars_fragment:kx,envmap_pars_fragment:zx,envmap_pars_vertex:Bx,envmap_physical_pars_fragment:Zx,envmap_vertex:Hx,fog_vertex:Vx,fog_pars_vertex:Gx,fog_fragment:Wx,fog_pars_fragment:Xx,gradientmap_pars_fragment:jx,lightmap_pars_fragment:Yx,lights_lambert_fragment:qx,lights_lambert_pars_fragment:$x,lights_pars_begin:Kx,lights_toon_fragment:Qx,lights_toon_pars_fragment:Jx,lights_phong_fragment:ey,lights_phong_pars_fragment:ty,lights_physical_fragment:ny,lights_physical_pars_fragment:iy,lights_fragment_begin:ry,lights_fragment_maps:oy,lights_fragment_end:sy,logdepthbuf_fragment:ay,logdepthbuf_pars_fragment:ly,logdepthbuf_pars_vertex:cy,logdepthbuf_vertex:uy,map_fragment:fy,map_pars_fragment:dy,map_particle_fragment:hy,map_particle_pars_fragment:py,metalnessmap_fragment:my,metalnessmap_pars_fragment:gy,morphinstance_vertex:_y,morphcolor_vertex:vy,morphnormal_vertex:xy,morphtarget_pars_vertex:yy,morphtarget_vertex:Sy,normal_fragment_begin:My,normal_fragment_maps:Ey,normal_pars_fragment:wy,normal_pars_vertex:Ty,normal_vertex:Ay,normalmap_pars_fragment:Ry,clearcoat_normal_fragment_begin:Cy,clearcoat_normal_fragment_maps:by,clearcoat_pars_fragment:Py,iridescence_pars_fragment:Ly,opaque_fragment:Dy,packing:Ny,premultiplied_alpha_fragment:Iy,project_vertex:Uy,dithering_fragment:Oy,dithering_pars_fragment:Fy,roughnessmap_fragment:ky,roughnessmap_pars_fragment:zy,shadowmap_pars_fragment:By,shadowmap_pars_vertex:Hy,shadowmap_vertex:Vy,shadowmask_pars_fragment:Gy,skinbase_vertex:Wy,skinning_pars_vertex:Xy,skinning_vertex:jy,skinnormal_vertex:Yy,specularmap_fragment:qy,specularmap_pars_fragment:$y,tonemapping_fragment:Ky,tonemapping_pars_fragment:Zy,transmission_fragment:Qy,transmission_pars_fragment:Jy,uv_pars_fragment:eS,uv_pars_vertex:tS,uv_vertex:nS,worldpos_vertex:iS,background_vert:rS,background_frag:oS,backgroundCube_vert:sS,backgroundCube_frag:aS,cube_vert:lS,cube_frag:cS,depth_vert:uS,depth_frag:fS,distanceRGBA_vert:dS,distanceRGBA_frag:hS,equirect_vert:pS,equirect_frag:mS,linedashed_vert:gS,linedashed_frag:_S,meshbasic_vert:vS,meshbasic_frag:xS,meshlambert_vert:yS,meshlambert_frag:SS,meshmatcap_vert:MS,meshmatcap_frag:ES,meshnormal_vert:wS,meshnormal_frag:TS,meshphong_vert:AS,meshphong_frag:RS,meshphysical_vert:CS,meshphysical_frag:bS,meshtoon_vert:PS,meshtoon_frag:LS,points_vert:DS,points_frag:NS,shadow_vert:IS,shadow_frag:US,sprite_vert:OS,sprite_frag:FS},Ve={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},mi={basic:{uniforms:Sn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:Sn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Rt(0)}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:Sn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:Sn([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:Sn([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new Rt(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:Sn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:Sn([Ve.points,Ve.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:Sn([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:Sn([Ve.common,Ve.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:Sn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:Sn([Ve.sprite,Ve.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distanceRGBA:{uniforms:Sn([Ve.common,Ve.displacementmap,{referencePosition:{value:new ee},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distanceRGBA_vert,fragmentShader:mt.distanceRGBA_frag},shadow:{uniforms:Sn([Ve.lights,Ve.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};mi.physical={uniforms:Sn([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const yl={r:0,b:0,g:0},Hr=new cn,kS=new qt;function zS(o,e,n,r,a,c,d){const f=new Rt(0);let h=c===!0?0:1,m,g,y=null,x=0,M=null;function R(F){let P=F.isScene===!0?F.background:null;return P&&P.isTexture&&(P=(F.backgroundBlurriness>0?n:e).get(P)),P}function C(F){let P=!1;const U=R(F);U===null?_(f,h):U&&U.isColor&&(_(U,1),P=!0);const J=o.xr.getEnvironmentBlendMode();J==="additive"?r.buffers.color.setClear(0,0,0,1,d):J==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(o.autoClear||P)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function v(F,P){const U=R(P);U&&(U.isCubeTexture||U.mapping===Ul)?(g===void 0&&(g=new Qn(new Ys(1,1,1),new yr({name:"BackgroundCubeMaterial",uniforms:Jo(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(J,z,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(g)),Hr.copy(P.backgroundRotation),Hr.x*=-1,Hr.y*=-1,Hr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Hr.y*=-1,Hr.z*=-1),g.material.uniforms.envMap.value=U,g.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(kS.makeRotationFromEuler(Hr)),g.material.toneMapped=At.getTransfer(U.colorSpace)!==It,(y!==U||x!==U.version||M!==o.toneMapping)&&(g.material.needsUpdate=!0,y=U,x=U.version,M=o.toneMapping),g.layers.enableAll(),F.unshift(g,g.geometry,g.material,0,0,null)):U&&U.isTexture&&(m===void 0&&(m=new Qn(new qs(2,2),new yr({name:"BackgroundMaterial",uniforms:Jo(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:zi,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=U,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=At.getTransfer(U.colorSpace)!==It,U.matrixAutoUpdate===!0&&U.updateMatrix(),m.material.uniforms.uvTransform.value.copy(U.matrix),(y!==U||x!==U.version||M!==o.toneMapping)&&(m.material.needsUpdate=!0,y=U,x=U.version,M=o.toneMapping),m.layers.enableAll(),F.unshift(m,m.geometry,m.material,0,0,null))}function _(F,P){F.getRGB(yl,ng(o)),r.buffers.color.setClear(yl.r,yl.g,yl.b,P,d)}return{getClearColor:function(){return f},setClearColor:function(F,P=1){f.set(F),h=P,_(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(F){h=F,_(f,h)},render:C,addToRenderList:v}}function BS(o,e){const n=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},a=x(null);let c=a,d=!1;function f(A,V,pe,K,ye){let ve=!1;const le=y(K,pe,V);c!==le&&(c=le,m(c.object)),ve=M(A,K,pe,ye),ve&&R(A,K,pe,ye),ye!==null&&e.update(ye,o.ELEMENT_ARRAY_BUFFER),(ve||d)&&(d=!1,U(A,V,pe,K),ye!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ye).buffer))}function h(){return o.createVertexArray()}function m(A){return o.bindVertexArray(A)}function g(A){return o.deleteVertexArray(A)}function y(A,V,pe){const K=pe.wireframe===!0;let ye=r[A.id];ye===void 0&&(ye={},r[A.id]=ye);let ve=ye[V.id];ve===void 0&&(ve={},ye[V.id]=ve);let le=ve[K];return le===void 0&&(le=x(h()),ve[K]=le),le}function x(A){const V=[],pe=[],K=[];for(let ye=0;ye<n;ye++)V[ye]=0,pe[ye]=0,K[ye]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:pe,attributeDivisors:K,object:A,attributes:{},index:null}}function M(A,V,pe,K){const ye=c.attributes,ve=V.attributes;let le=0;const de=pe.getAttributes();for(const B in de)if(de[B].location>=0){const me=ye[B];let k=ve[B];if(k===void 0&&(B==="instanceMatrix"&&A.instanceMatrix&&(k=A.instanceMatrix),B==="instanceColor"&&A.instanceColor&&(k=A.instanceColor)),me===void 0||me.attribute!==k||k&&me.data!==k.data)return!0;le++}return c.attributesNum!==le||c.index!==K}function R(A,V,pe,K){const ye={},ve=V.attributes;let le=0;const de=pe.getAttributes();for(const B in de)if(de[B].location>=0){let me=ve[B];me===void 0&&(B==="instanceMatrix"&&A.instanceMatrix&&(me=A.instanceMatrix),B==="instanceColor"&&A.instanceColor&&(me=A.instanceColor));const k={};k.attribute=me,me&&me.data&&(k.data=me.data),ye[B]=k,le++}c.attributes=ye,c.attributesNum=le,c.index=K}function C(){const A=c.newAttributes;for(let V=0,pe=A.length;V<pe;V++)A[V]=0}function v(A){_(A,0)}function _(A,V){const pe=c.newAttributes,K=c.enabledAttributes,ye=c.attributeDivisors;pe[A]=1,K[A]===0&&(o.enableVertexAttribArray(A),K[A]=1),ye[A]!==V&&(o.vertexAttribDivisor(A,V),ye[A]=V)}function F(){const A=c.newAttributes,V=c.enabledAttributes;for(let pe=0,K=V.length;pe<K;pe++)V[pe]!==A[pe]&&(o.disableVertexAttribArray(pe),V[pe]=0)}function P(A,V,pe,K,ye,ve,le){le===!0?o.vertexAttribIPointer(A,V,pe,ye,ve):o.vertexAttribPointer(A,V,pe,K,ye,ve)}function U(A,V,pe,K){C();const ye=K.attributes,ve=pe.getAttributes(),le=V.defaultAttributeValues;for(const de in ve){const B=ve[de];if(B.location>=0){let xe=ye[de];if(xe===void 0&&(de==="instanceMatrix"&&A.instanceMatrix&&(xe=A.instanceMatrix),de==="instanceColor"&&A.instanceColor&&(xe=A.instanceColor)),xe!==void 0){const me=xe.normalized,k=xe.itemSize,ce=e.get(xe);if(ce===void 0)continue;const He=ce.buffer,te=ce.type,Se=ce.bytesPerElement,Ae=te===o.INT||te===o.UNSIGNED_INT||xe.gpuType===Uf;if(xe.isInterleavedBufferAttribute){const j=xe.data,ge=j.stride,oe=xe.offset;if(j.isInstancedInterleavedBuffer){for(let Le=0;Le<B.locationSize;Le++)_(B.location+Le,j.meshPerAttribute);A.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Le=0;Le<B.locationSize;Le++)v(B.location+Le);o.bindBuffer(o.ARRAY_BUFFER,He);for(let Le=0;Le<B.locationSize;Le++)P(B.location+Le,k/B.locationSize,te,me,ge*Se,(oe+k/B.locationSize*Le)*Se,Ae)}else{if(xe.isInstancedBufferAttribute){for(let j=0;j<B.locationSize;j++)_(B.location+j,xe.meshPerAttribute);A.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let j=0;j<B.locationSize;j++)v(B.location+j);o.bindBuffer(o.ARRAY_BUFFER,He);for(let j=0;j<B.locationSize;j++)P(B.location+j,k/B.locationSize,te,me,k*Se,k/B.locationSize*j*Se,Ae)}}else if(le!==void 0){const me=le[de];if(me!==void 0)switch(me.length){case 2:o.vertexAttrib2fv(B.location,me);break;case 3:o.vertexAttrib3fv(B.location,me);break;case 4:o.vertexAttrib4fv(B.location,me);break;default:o.vertexAttrib1fv(B.location,me)}}}}F()}function J(){$();for(const A in r){const V=r[A];for(const pe in V){const K=V[pe];for(const ye in K)g(K[ye].object),delete K[ye];delete V[pe]}delete r[A]}}function z(A){if(r[A.id]===void 0)return;const V=r[A.id];for(const pe in V){const K=V[pe];for(const ye in K)g(K[ye].object),delete K[ye];delete V[pe]}delete r[A.id]}function O(A){for(const V in r){const pe=r[V];if(pe[A.id]===void 0)continue;const K=pe[A.id];for(const ye in K)g(K[ye].object),delete K[ye];delete pe[A.id]}}function $(){L(),d=!0,c!==a&&(c=a,m(c.object))}function L(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:$,resetDefaultState:L,dispose:J,releaseStatesOfGeometry:z,releaseStatesOfProgram:O,initAttributes:C,enableAttribute:v,disableUnusedAttributes:F}}function HS(o,e,n){let r;function a(m){r=m}function c(m,g){o.drawArrays(r,m,g),n.update(g,r,1)}function d(m,g,y){y!==0&&(o.drawArraysInstanced(r,m,g,y),n.update(g,r,y))}function f(m,g,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,g,0,y);let M=0;for(let R=0;R<y;R++)M+=g[R];n.update(M,r,1)}function h(m,g,y,x){if(y===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let R=0;R<m.length;R++)d(m[R],g[R],x[R]);else{M.multiDrawArraysInstancedWEBGL(r,m,0,g,0,x,0,y);let R=0;for(let C=0;C<y;C++)R+=g[C];for(let C=0;C<x.length;C++)n.update(R,r,x[C])}}this.setMode=a,this.render=c,this.renderInstances=d,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function VS(o,e,n,r){let a;function c(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");a=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function d(z){return!(z!==ci&&r.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(z){const O=z===Xs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==Bi&&r.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Oi&&!O)}function h(z){if(z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const g=h(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const y=n.logarithmicDepthBuffer===!0,x=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_TEXTURE_SIZE),C=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),v=o.getParameter(o.MAX_VERTEX_ATTRIBS),_=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),F=o.getParameter(o.MAX_VARYING_VECTORS),P=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),U=M>0,J=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:h,textureFormatReadable:d,textureTypeReadable:f,precision:m,logarithmicDepthBuffer:y,maxTextures:x,maxVertexTextures:M,maxTextureSize:R,maxCubemapSize:C,maxAttributes:v,maxVertexUniforms:_,maxVaryings:F,maxFragmentUniforms:P,vertexTextures:U,maxSamples:J}}function GS(o){const e=this;let n=null,r=0,a=!1,c=!1;const d=new mr,f=new gt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(y,x){const M=y.length!==0||x||r!==0||a;return a=x,r=y.length,M},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(y,x){n=g(y,x,0)},this.setState=function(y,x,M){const R=y.clippingPlanes,C=y.clipIntersection,v=y.clipShadows,_=o.get(y);if(!a||R===null||R.length===0||c&&!v)c?g(null):m();else{const F=c?0:r,P=F*4;let U=_.clippingState||null;h.value=U,U=g(R,x,P,M);for(let J=0;J!==P;++J)U[J]=n[J];_.clippingState=U,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=F}};function m(){h.value!==n&&(h.value=n,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(y,x,M,R){const C=y!==null?y.length:0;let v=null;if(C!==0){if(v=h.value,R!==!0||v===null){const _=M+C*4,F=x.matrixWorldInverse;f.getNormalMatrix(F),(v===null||v.length<_)&&(v=new Float32Array(_));for(let P=0,U=M;P!==C;++P,U+=4)d.copy(y[P]).applyMatrix4(F,f),d.normal.toArray(v,U),v[U+3]=d.constant}h.value=v,h.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,v}}function WS(o){let e=new WeakMap;function n(d,f){return f===ef?d.mapping=$o:f===tf&&(d.mapping=Ko),d}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===ef||f===tf)if(e.has(d)){const h=e.get(d).texture;return n(h,d.mapping)}else{const h=d.image;if(h&&h.height>0){const m=new tx(h.height);return m.fromEquirectangularTexture(o,d),e.set(d,m),d.addEventListener("dispose",a),n(m.texture,d.mapping)}else return null}}return d}function a(d){const f=d.target;f.removeEventListener("dispose",a);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}class XS extends ig{constructor(e=-1,n=1,r=1,a=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let c=r-e,d=r+e,f=a+n,h=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,d=c+m*this.view.width,f-=g*this.view.offsetY,h=f-g*this.view.height}this.projectionMatrix.makeOrthographic(c,d,f,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Go=4,em=[.125,.215,.35,.446,.526,.582],Xr=20,Vu=new XS,tm=new Rt;let Gu=null,Wu=0,Xu=0,ju=!1;const Gr=(1+Math.sqrt(5))/2,Bo=1/Gr,nm=[new ee(-Gr,Bo,0),new ee(Gr,Bo,0),new ee(-Bo,0,Gr),new ee(Bo,0,Gr),new ee(0,Gr,-Bo),new ee(0,Gr,Bo),new ee(-1,1,-1),new ee(1,1,-1),new ee(-1,1,1),new ee(1,1,1)];class im{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){Gu=this._renderer.getRenderTarget(),Wu=this._renderer.getActiveCubeFace(),Xu=this._renderer.getActiveMipmapLevel(),ju=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,r,a,c),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=om(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Gu,Wu,Xu),this._renderer.xr.enabled=ju,e.scissorTest=!1,Sl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===$o||e.mapping===Ko?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gu=this._renderer.getRenderTarget(),Wu=this._renderer.getActiveCubeFace(),Xu=this._renderer.getActiveMipmapLevel(),ju=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:Xs,format:ci,colorSpace:Sr,depthBuffer:!1},a=rm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rm(e,n,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jS(c)),this._blurMaterial=YS(c,e,n)}return a}_compileMaterial(e){const n=new Qn(this._lodPlanes[0],e);this._renderer.compile(n,Vu)}_sceneToCubeUV(e,n,r,a){const f=new Hn(90,1,n,r),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,y=g.autoClear,x=g.toneMapping;g.getClearColor(tm),g.toneMapping=xr,g.autoClear=!1;const M=new kl({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1}),R=new Qn(new Ys,M);let C=!1;const v=e.background;v?v.isColor&&(M.color.copy(v),e.background=null,C=!0):(M.color.copy(tm),C=!0);for(let _=0;_<6;_++){const F=_%3;F===0?(f.up.set(0,h[_],0),f.lookAt(m[_],0,0)):F===1?(f.up.set(0,0,h[_]),f.lookAt(0,m[_],0)):(f.up.set(0,h[_],0),f.lookAt(0,0,m[_]));const P=this._cubeSize;Sl(a,F*P,_>2?P:0,P,P),g.setRenderTarget(a),C&&g.render(R,f),g.render(e,f)}R.geometry.dispose(),R.material.dispose(),g.toneMapping=x,g.autoClear=y,e.background=v}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===$o||e.mapping===Ko;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=sm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=om());const c=a?this._cubemapMaterial:this._equirectMaterial,d=new Qn(this._lodPlanes[0],c),f=c.uniforms;f.envMap.value=e;const h=this._cubeSize;Sl(n,0,0,3*h,2*h),r.setRenderTarget(n),r.render(d,Vu)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let c=1;c<a;c++){const d=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),f=nm[(a-c-1)%nm.length];this._blur(e,c-1,c,d,f)}n.autoClear=r}_blur(e,n,r,a,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,n,r,a,"latitudinal",c),this._halfBlur(d,e,r,r,a,"longitudinal",c)}_halfBlur(e,n,r,a,c,d,f){const h=this._renderer,m=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,y=new Qn(this._lodPlanes[a],m),x=m.uniforms,M=this._sizeLods[r]-1,R=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Xr-1),C=c/R,v=isFinite(c)?1+Math.floor(g*C):Xr;v>Xr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Xr}`);const _=[];let F=0;for(let O=0;O<Xr;++O){const $=O/C,L=Math.exp(-$*$/2);_.push(L),O===0?F+=L:O<v&&(F+=2*L)}for(let O=0;O<_.length;O++)_[O]=_[O]/F;x.envMap.value=e.texture,x.samples.value=v,x.weights.value=_,x.latitudinal.value=d==="latitudinal",f&&(x.poleAxis.value=f);const{_lodMax:P}=this;x.dTheta.value=R,x.mipInt.value=P-r;const U=this._sizeLods[a],J=3*U*(a>P-Go?a-P+Go:0),z=4*(this._cubeSize-U);Sl(n,J,z,3*U,2*U),h.setRenderTarget(n),h.render(y,Vu)}}function jS(o){const e=[],n=[],r=[];let a=o;const c=o-Go+1+em.length;for(let d=0;d<c;d++){const f=Math.pow(2,a);n.push(f);let h=1/f;d>o-Go?h=em[d-o+Go-1]:d===0&&(h=0),r.push(h);const m=1/(f-2),g=-m,y=1+m,x=[g,g,y,g,y,y,g,g,y,y,g,y],M=6,R=6,C=3,v=2,_=1,F=new Float32Array(C*R*M),P=new Float32Array(v*R*M),U=new Float32Array(_*R*M);for(let z=0;z<M;z++){const O=z%3*2/3-1,$=z>2?0:-1,L=[O,$,0,O+2/3,$,0,O+2/3,$+1,0,O,$,0,O+2/3,$+1,0,O,$+1,0];F.set(L,C*R*z),P.set(x,v*R*z);const A=[z,z,z,z,z,z];U.set(A,_*R*z)}const J=new Mr;J.setAttribute("position",new vi(F,C)),J.setAttribute("uv",new vi(P,v)),J.setAttribute("faceIndex",new vi(U,_)),e.push(J),a>Go&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function rm(o,e,n){const r=new $r(o,e,n);return r.texture.mapping=Ul,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Sl(o,e,n,r,a){o.viewport.set(e,n,r,a),o.scissor.set(e,n,r,a)}function YS(o,e,n){const r=new Float32Array(Xr),a=new ee(0,1,0);return new yr({name:"SphericalGaussianBlur",defines:{n:Xr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:jf(),fragmentShader:`

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
		`,blending:vr,depthTest:!1,depthWrite:!1})}function om(){return new yr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jf(),fragmentShader:`

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
		`,blending:vr,depthTest:!1,depthWrite:!1})}function sm(){return new yr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vr,depthTest:!1,depthWrite:!1})}function jf(){return`

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
	`}function qS(o){let e=new WeakMap,n=null;function r(f){if(f&&f.isTexture){const h=f.mapping,m=h===ef||h===tf,g=h===$o||h===Ko;if(m||g){let y=e.get(f);const x=y!==void 0?y.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==x)return n===null&&(n=new im(o)),y=m?n.fromEquirectangular(f,y):n.fromCubemap(f,y),y.texture.pmremVersion=f.pmremVersion,e.set(f,y),y.texture;if(y!==void 0)return y.texture;{const M=f.image;return m&&M&&M.height>0||g&&M&&a(M)?(n===null&&(n=new im(o)),y=m?n.fromEquirectangular(f):n.fromCubemap(f),y.texture.pmremVersion=f.pmremVersion,e.set(f,y),f.addEventListener("dispose",c),y.texture):null}}}return f}function a(f){let h=0;const m=6;for(let g=0;g<m;g++)f[g]!==void 0&&h++;return h===m}function c(f){const h=f.target;h.removeEventListener("dispose",c);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function d(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function $S(o){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=o.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&Km("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function KS(o,e,n,r){const a={},c=new WeakMap;function d(y){const x=y.target;x.index!==null&&e.remove(x.index);for(const R in x.attributes)e.remove(x.attributes[R]);for(const R in x.morphAttributes){const C=x.morphAttributes[R];for(let v=0,_=C.length;v<_;v++)e.remove(C[v])}x.removeEventListener("dispose",d),delete a[x.id];const M=c.get(x);M&&(e.remove(M),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function f(y,x){return a[x.id]===!0||(x.addEventListener("dispose",d),a[x.id]=!0,n.memory.geometries++),x}function h(y){const x=y.attributes;for(const R in x)e.update(x[R],o.ARRAY_BUFFER);const M=y.morphAttributes;for(const R in M){const C=M[R];for(let v=0,_=C.length;v<_;v++)e.update(C[v],o.ARRAY_BUFFER)}}function m(y){const x=[],M=y.index,R=y.attributes.position;let C=0;if(M!==null){const F=M.array;C=M.version;for(let P=0,U=F.length;P<U;P+=3){const J=F[P+0],z=F[P+1],O=F[P+2];x.push(J,z,z,O,O,J)}}else if(R!==void 0){const F=R.array;C=R.version;for(let P=0,U=F.length/3-1;P<U;P+=3){const J=P+0,z=P+1,O=P+2;x.push(J,z,z,O,O,J)}}else return;const v=new($m(x)?tg:eg)(x,1);v.version=C;const _=c.get(y);_&&e.remove(_),c.set(y,v)}function g(y){const x=c.get(y);if(x){const M=y.index;M!==null&&x.version<M.version&&m(y)}else m(y);return c.get(y)}return{get:f,update:h,getWireframeAttribute:g}}function ZS(o,e,n){let r;function a(x){r=x}let c,d;function f(x){c=x.type,d=x.bytesPerElement}function h(x,M){o.drawElements(r,M,c,x*d),n.update(M,r,1)}function m(x,M,R){R!==0&&(o.drawElementsInstanced(r,M,c,x*d,R),n.update(M,r,R))}function g(x,M,R){if(R===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,c,x,0,R);let v=0;for(let _=0;_<R;_++)v+=M[_];n.update(v,r,1)}function y(x,M,R,C){if(R===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let _=0;_<x.length;_++)m(x[_]/d,M[_],C[_]);else{v.multiDrawElementsInstancedWEBGL(r,M,0,c,x,0,C,0,R);let _=0;for(let F=0;F<R;F++)_+=M[F];for(let F=0;F<C.length;F++)n.update(_,r,C[F])}}this.setMode=a,this.setIndex=f,this.render=h,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=y}function QS(o){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,d,f){switch(n.calls++,d){case o.TRIANGLES:n.triangles+=f*(c/3);break;case o.LINES:n.lines+=f*(c/2);break;case o.LINE_STRIP:n.lines+=f*(c-1);break;case o.LINE_LOOP:n.lines+=f*c;break;case o.POINTS:n.points+=f*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function JS(o,e,n){const r=new WeakMap,a=new sn;function c(d,f,h){const m=d.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,y=g!==void 0?g.length:0;let x=r.get(f);if(x===void 0||x.count!==y){let A=function(){$.dispose(),r.delete(f),f.removeEventListener("dispose",A)};var M=A;x!==void 0&&x.texture.dispose();const R=f.morphAttributes.position!==void 0,C=f.morphAttributes.normal!==void 0,v=f.morphAttributes.color!==void 0,_=f.morphAttributes.position||[],F=f.morphAttributes.normal||[],P=f.morphAttributes.color||[];let U=0;R===!0&&(U=1),C===!0&&(U=2),v===!0&&(U=3);let J=f.attributes.position.count*U,z=1;J>e.maxTextureSize&&(z=Math.ceil(J/e.maxTextureSize),J=e.maxTextureSize);const O=new Float32Array(J*z*4*y),$=new Qm(O,J,z,y);$.type=Oi,$.needsUpdate=!0;const L=U*4;for(let V=0;V<y;V++){const pe=_[V],K=F[V],ye=P[V],ve=J*z*4*V;for(let le=0;le<pe.count;le++){const de=le*L;R===!0&&(a.fromBufferAttribute(pe,le),O[ve+de+0]=a.x,O[ve+de+1]=a.y,O[ve+de+2]=a.z,O[ve+de+3]=0),C===!0&&(a.fromBufferAttribute(K,le),O[ve+de+4]=a.x,O[ve+de+5]=a.y,O[ve+de+6]=a.z,O[ve+de+7]=0),v===!0&&(a.fromBufferAttribute(ye,le),O[ve+de+8]=a.x,O[ve+de+9]=a.y,O[ve+de+10]=a.z,O[ve+de+11]=ye.itemSize===4?a.w:1)}}x={count:y,texture:$,size:new ht(J,z)},r.set(f,x),f.addEventListener("dispose",A)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)h.getUniforms().setValue(o,"morphTexture",d.morphTexture,n);else{let R=0;for(let v=0;v<m.length;v++)R+=m[v];const C=f.morphTargetsRelative?1:1-R;h.getUniforms().setValue(o,"morphTargetBaseInfluence",C),h.getUniforms().setValue(o,"morphTargetInfluences",m)}h.getUniforms().setValue(o,"morphTargetsTexture",x.texture,n),h.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:c}}function eM(o,e,n,r){let a=new WeakMap;function c(h){const m=r.render.frame,g=h.geometry,y=e.get(h,g);if(a.get(y)!==m&&(e.update(y),a.set(y,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),a.get(h)!==m&&(n.update(h.instanceMatrix,o.ARRAY_BUFFER),h.instanceColor!==null&&n.update(h.instanceColor,o.ARRAY_BUFFER),a.set(h,m))),h.isSkinnedMesh){const x=h.skeleton;a.get(x)!==m&&(x.update(),a.set(x,m))}return y}function d(){a=new WeakMap}function f(h){const m=h.target;m.removeEventListener("dispose",f),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:c,dispose:d}}class ag extends wn{constructor(e,n,r,a,c,d,f,h,m,g=Yo){if(g!==Yo&&g!==Qo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===Yo&&(r=qr),r===void 0&&g===Qo&&(r=Zo),super(null,a,c,d,f,h,g,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=f!==void 0?f:Zn,this.minFilter=h!==void 0?h:Zn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const lg=new wn,am=new ag(1,1),cg=new Qm,ug=new zv,fg=new rg,lm=[],cm=[],um=new Float32Array(16),fm=new Float32Array(9),dm=new Float32Array(4);function ts(o,e,n){const r=o[0];if(r<=0||r>0)return o;const a=e*n;let c=lm[a];if(c===void 0&&(c=new Float32Array(a),lm[a]=c),e!==0){r.toArray(c,0);for(let d=1,f=0;d!==e;++d)f+=n,o[d].toArray(c,f)}return c}function Zt(o,e){if(o.length!==e.length)return!1;for(let n=0,r=o.length;n<r;n++)if(o[n]!==e[n])return!1;return!0}function Qt(o,e){for(let n=0,r=e.length;n<r;n++)o[n]=e[n]}function zl(o,e){let n=cm[e];n===void 0&&(n=new Int32Array(e),cm[e]=n);for(let r=0;r!==e;++r)n[r]=o.allocateTextureUnit();return n}function tM(o,e){const n=this.cache;n[0]!==e&&(o.uniform1f(this.addr,e),n[0]=e)}function nM(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;o.uniform2fv(this.addr,e),Qt(n,e)}}function iM(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Zt(n,e))return;o.uniform3fv(this.addr,e),Qt(n,e)}}function rM(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;o.uniform4fv(this.addr,e),Qt(n,e)}}function oM(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(Zt(n,e))return;o.uniformMatrix2fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,r))return;dm.set(r),o.uniformMatrix2fv(this.addr,!1,dm),Qt(n,r)}}function sM(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(Zt(n,e))return;o.uniformMatrix3fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,r))return;fm.set(r),o.uniformMatrix3fv(this.addr,!1,fm),Qt(n,r)}}function aM(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(Zt(n,e))return;o.uniformMatrix4fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,r))return;um.set(r),o.uniformMatrix4fv(this.addr,!1,um),Qt(n,r)}}function lM(o,e){const n=this.cache;n[0]!==e&&(o.uniform1i(this.addr,e),n[0]=e)}function cM(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;o.uniform2iv(this.addr,e),Qt(n,e)}}function uM(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Zt(n,e))return;o.uniform3iv(this.addr,e),Qt(n,e)}}function fM(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;o.uniform4iv(this.addr,e),Qt(n,e)}}function dM(o,e){const n=this.cache;n[0]!==e&&(o.uniform1ui(this.addr,e),n[0]=e)}function hM(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;o.uniform2uiv(this.addr,e),Qt(n,e)}}function pM(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Zt(n,e))return;o.uniform3uiv(this.addr,e),Qt(n,e)}}function mM(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;o.uniform4uiv(this.addr,e),Qt(n,e)}}function gM(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a);let c;this.type===o.SAMPLER_2D_SHADOW?(am.compareFunction=qm,c=am):c=lg,n.setTexture2D(e||c,a)}function _M(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||ug,a)}function vM(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||fg,a)}function xM(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||cg,a)}function yM(o){switch(o){case 5126:return tM;case 35664:return nM;case 35665:return iM;case 35666:return rM;case 35674:return oM;case 35675:return sM;case 35676:return aM;case 5124:case 35670:return lM;case 35667:case 35671:return cM;case 35668:case 35672:return uM;case 35669:case 35673:return fM;case 5125:return dM;case 36294:return hM;case 36295:return pM;case 36296:return mM;case 35678:case 36198:case 36298:case 36306:case 35682:return gM;case 35679:case 36299:case 36307:return _M;case 35680:case 36300:case 36308:case 36293:return vM;case 36289:case 36303:case 36311:case 36292:return xM}}function SM(o,e){o.uniform1fv(this.addr,e)}function MM(o,e){const n=ts(e,this.size,2);o.uniform2fv(this.addr,n)}function EM(o,e){const n=ts(e,this.size,3);o.uniform3fv(this.addr,n)}function wM(o,e){const n=ts(e,this.size,4);o.uniform4fv(this.addr,n)}function TM(o,e){const n=ts(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,n)}function AM(o,e){const n=ts(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,n)}function RM(o,e){const n=ts(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,n)}function CM(o,e){o.uniform1iv(this.addr,e)}function bM(o,e){o.uniform2iv(this.addr,e)}function PM(o,e){o.uniform3iv(this.addr,e)}function LM(o,e){o.uniform4iv(this.addr,e)}function DM(o,e){o.uniform1uiv(this.addr,e)}function NM(o,e){o.uniform2uiv(this.addr,e)}function IM(o,e){o.uniform3uiv(this.addr,e)}function UM(o,e){o.uniform4uiv(this.addr,e)}function OM(o,e,n){const r=this.cache,a=e.length,c=zl(n,a);Zt(r,c)||(o.uniform1iv(this.addr,c),Qt(r,c));for(let d=0;d!==a;++d)n.setTexture2D(e[d]||lg,c[d])}function FM(o,e,n){const r=this.cache,a=e.length,c=zl(n,a);Zt(r,c)||(o.uniform1iv(this.addr,c),Qt(r,c));for(let d=0;d!==a;++d)n.setTexture3D(e[d]||ug,c[d])}function kM(o,e,n){const r=this.cache,a=e.length,c=zl(n,a);Zt(r,c)||(o.uniform1iv(this.addr,c),Qt(r,c));for(let d=0;d!==a;++d)n.setTextureCube(e[d]||fg,c[d])}function zM(o,e,n){const r=this.cache,a=e.length,c=zl(n,a);Zt(r,c)||(o.uniform1iv(this.addr,c),Qt(r,c));for(let d=0;d!==a;++d)n.setTexture2DArray(e[d]||cg,c[d])}function BM(o){switch(o){case 5126:return SM;case 35664:return MM;case 35665:return EM;case 35666:return wM;case 35674:return TM;case 35675:return AM;case 35676:return RM;case 5124:case 35670:return CM;case 35667:case 35671:return bM;case 35668:case 35672:return PM;case 35669:case 35673:return LM;case 5125:return DM;case 36294:return NM;case 36295:return IM;case 36296:return UM;case 35678:case 36198:case 36298:case 36306:case 35682:return OM;case 35679:case 36299:case 36307:return FM;case 35680:case 36300:case 36308:case 36293:return kM;case 36289:case 36303:case 36311:case 36292:return zM}}class HM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=yM(n.type)}}class VM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=BM(n.type)}}class GM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let c=0,d=a.length;c!==d;++c){const f=a[c];f.setValue(e,n[f.id],r)}}}const Yu=/(\w+)(\])?(\[|\.)?/g;function hm(o,e){o.seq.push(e),o.map[e.id]=e}function WM(o,e,n){const r=o.name,a=r.length;for(Yu.lastIndex=0;;){const c=Yu.exec(r),d=Yu.lastIndex;let f=c[1];const h=c[2]==="]",m=c[3];if(h&&(f=f|0),m===void 0||m==="["&&d+2===a){hm(n,m===void 0?new HM(f,o,e):new VM(f,o,e));break}else{let y=n.map[f];y===void 0&&(y=new GM(f),hm(n,y)),n=y}}}class Cl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const c=e.getActiveUniform(n,a),d=e.getUniformLocation(n,c.name);WM(c,d,this)}}setValue(e,n,r,a){const c=this.map[n];c!==void 0&&c.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let c=0,d=n.length;c!==d;++c){const f=n[c],h=r[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,c=e.length;a!==c;++a){const d=e[a];d.id in n&&r.push(d)}return r}}function pm(o,e,n){const r=o.createShader(e);return o.shaderSource(r,n),o.compileShader(r),r}const XM=37297;let jM=0;function YM(o,e){const n=o.split(`
`),r=[],a=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let d=a;d<c;d++){const f=d+1;r.push(`${f===e?">":" "} ${f}: ${n[d]}`)}return r.join(`
`)}function qM(o){const e=At.getPrimaries(At.workingColorSpace),n=At.getPrimaries(o);let r;switch(e===n?r="":e===Dl&&n===Ll?r="LinearDisplayP3ToLinearSRGB":e===Ll&&n===Dl&&(r="LinearSRGBToLinearDisplayP3"),o){case Sr:case Ol:return[r,"LinearTransferOETF"];case Kn:case Hf:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),[r,"LinearTransferOETF"]}}function mm(o,e,n){const r=o.getShaderParameter(e,o.COMPILE_STATUS),a=o.getShaderInfoLog(e).trim();if(r&&a==="")return"";const c=/ERROR: 0:(\d+)/.exec(a);if(c){const d=parseInt(c[1]);return n.toUpperCase()+`

`+a+`

`+YM(o.getShaderSource(e),d)}else return a}function $M(o,e){const n=qM(e);return`vec4 ${o}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function KM(o,e){let n;switch(e){case Z0:n="Linear";break;case Q0:n="Reinhard";break;case J0:n="OptimizedCineon";break;case ev:n="ACESFilmic";break;case nv:n="AgX";break;case iv:n="Neutral";break;case tv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+o+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function ZM(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bs).join(`
`)}function QM(o){const e=[];for(const n in o){const r=o[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function JM(o,e){const n={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const c=o.getActiveAttrib(e,a),d=c.name;let f=1;c.type===o.FLOAT_MAT2&&(f=2),c.type===o.FLOAT_MAT3&&(f=3),c.type===o.FLOAT_MAT4&&(f=4),n[d]={type:c.type,location:o.getAttribLocation(e,d),locationSize:f}}return n}function Bs(o){return o!==""}function gm(o,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _m(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const eE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lf(o){return o.replace(eE,nE)}const tE=new Map;function nE(o,e){let n=mt[e];if(n===void 0){const r=tE.get(e);if(r!==void 0)n=mt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Lf(n)}const iE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vm(o){return o.replace(iE,rE)}function rE(o,e,n,r){let a="";for(let c=parseInt(e);c<parseInt(n);c++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return a}function xm(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}function oE(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Um?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===E0?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ui&&(e="SHADOWMAP_TYPE_VSM"),e}function sE(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case $o:case Ko:e="ENVMAP_TYPE_CUBE";break;case Ul:e="ENVMAP_TYPE_CUBE_UV";break}return e}function aE(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Ko:e="ENVMAP_MODE_REFRACTION";break}return e}function lE(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Om:e="ENVMAP_BLENDING_MULTIPLY";break;case $0:e="ENVMAP_BLENDING_MIX";break;case K0:e="ENVMAP_BLENDING_ADD";break}return e}function cE(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function uE(o,e,n,r){const a=o.getContext(),c=n.defines;let d=n.vertexShader,f=n.fragmentShader;const h=oE(n),m=sE(n),g=aE(n),y=lE(n),x=cE(n),M=ZM(n),R=QM(c),C=a.createProgram();let v,_,F=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,R].filter(Bs).join(`
`),v.length>0&&(v+=`
`),_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,R].filter(Bs).join(`
`),_.length>0&&(_+=`
`)):(v=[xm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,R,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bs).join(`
`),_=[xm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,R,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+g:"",n.envMap?"#define "+y:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==xr?"#define TONE_MAPPING":"",n.toneMapping!==xr?mt.tonemapping_pars_fragment:"",n.toneMapping!==xr?KM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,$M("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Bs).join(`
`)),d=Lf(d),d=gm(d,n),d=_m(d,n),f=Lf(f),f=gm(f,n),f=_m(f,n),d=vm(d),f=vm(f),n.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,v=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,_=["#define varying in",n.glslVersion===Np?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Np?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const P=F+v+d,U=F+_+f,J=pm(a,a.VERTEX_SHADER,P),z=pm(a,a.FRAGMENT_SHADER,U);a.attachShader(C,J),a.attachShader(C,z),n.index0AttributeName!==void 0?a.bindAttribLocation(C,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(C,0,"position"),a.linkProgram(C);function O(V){if(o.debug.checkShaderErrors){const pe=a.getProgramInfoLog(C).trim(),K=a.getShaderInfoLog(J).trim(),ye=a.getShaderInfoLog(z).trim();let ve=!0,le=!0;if(a.getProgramParameter(C,a.LINK_STATUS)===!1)if(ve=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(a,C,J,z);else{const de=mm(a,J,"vertex"),B=mm(a,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(C,a.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+pe+`
`+de+`
`+B)}else pe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",pe):(K===""||ye==="")&&(le=!1);le&&(V.diagnostics={runnable:ve,programLog:pe,vertexShader:{log:K,prefix:v},fragmentShader:{log:ye,prefix:_}})}a.deleteShader(J),a.deleteShader(z),$=new Cl(a,C),L=JM(a,C)}let $;this.getUniforms=function(){return $===void 0&&O(this),$};let L;this.getAttributes=function(){return L===void 0&&O(this),L};let A=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=a.getProgramParameter(C,XM)),A},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(C),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=jM++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=J,this.fragmentShader=z,this}let fE=0;class dE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),c=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(a)===!1&&(d.add(a),a.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new hE(e),n.set(e,r)),r}}class hE{constructor(e){this.id=fE++,this.code=e,this.usedTimes=0}}function pE(o,e,n,r,a,c,d){const f=new Xf,h=new dE,m=new Set,g=[],y=a.logarithmicDepthBuffer,x=a.vertexTextures;let M=a.precision;const R={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(L){return m.add(L),L===0?"uv":`uv${L}`}function v(L,A,V,pe,K){const ye=pe.fog,ve=K.geometry,le=L.isMeshStandardMaterial?pe.environment:null,de=(L.isMeshStandardMaterial?n:e).get(L.envMap||le),B=de&&de.mapping===Ul?de.image.height:null,xe=R[L.type];L.precision!==null&&(M=a.getMaxPrecision(L.precision),M!==L.precision&&console.warn("THREE.WebGLProgram.getParameters:",L.precision,"not supported, using",M,"instead."));const me=ve.morphAttributes.position||ve.morphAttributes.normal||ve.morphAttributes.color,k=me!==void 0?me.length:0;let ce=0;ve.morphAttributes.position!==void 0&&(ce=1),ve.morphAttributes.normal!==void 0&&(ce=2),ve.morphAttributes.color!==void 0&&(ce=3);let He,te,Se,Ae;if(xe){const vt=mi[xe];He=vt.vertexShader,te=vt.fragmentShader}else He=L.vertexShader,te=L.fragmentShader,h.update(L),Se=h.getVertexShaderID(L),Ae=h.getFragmentShaderID(L);const j=o.getRenderTarget(),ge=K.isInstancedMesh===!0,oe=K.isBatchedMesh===!0,Le=!!L.map,Ue=!!L.matcap,N=!!de,Xe=!!L.aoMap,nt=!!L.lightMap,qe=!!L.bumpMap,q=!!L.normalMap,Fe=!!L.displacementMap,Oe=!!L.emissiveMap,ke=!!L.metalnessMap,T=!!L.roughnessMap,S=L.anisotropy>0,D=L.clearcoat>0,G=L.dispersion>0,Z=L.iridescence>0,ne=L.sheen>0,we=L.transmission>0,Me=S&&!!L.anisotropyMap,Te=D&&!!L.clearcoatMap,je=D&&!!L.clearcoatNormalMap,Ee=D&&!!L.clearcoatRoughnessMap,Ne=Z&&!!L.iridescenceMap,lt=Z&&!!L.iridescenceThicknessMap,Ke=ne&&!!L.sheenColorMap,Be=ne&&!!L.sheenRoughnessMap,Je=!!L.specularMap,rt=!!L.specularColorMap,yt=!!L.specularIntensityMap,E=we&&!!L.transmissionMap,ie=we&&!!L.thicknessMap,se=!!L.gradientMap,he=!!L.alphaMap,Ce=L.alphaTest>0,tt=!!L.alphaHash,ut=!!L.extensions;let Ut=xr;L.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ut=o.toneMapping);const Vt={shaderID:xe,shaderType:L.type,shaderName:L.name,vertexShader:He,fragmentShader:te,defines:L.defines,customVertexShaderID:Se,customFragmentShaderID:Ae,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:M,batching:oe,batchingColor:oe&&K._colorsTexture!==null,instancing:ge,instancingColor:ge&&K.instanceColor!==null,instancingMorph:ge&&K.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:j===null?o.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Sr,alphaToCoverage:!!L.alphaToCoverage,map:Le,matcap:Ue,envMap:N,envMapMode:N&&de.mapping,envMapCubeUVHeight:B,aoMap:Xe,lightMap:nt,bumpMap:qe,normalMap:q,displacementMap:x&&Fe,emissiveMap:Oe,normalMapObjectSpace:q&&L.normalMapType===lv,normalMapTangentSpace:q&&L.normalMapType===av,metalnessMap:ke,roughnessMap:T,anisotropy:S,anisotropyMap:Me,clearcoat:D,clearcoatMap:Te,clearcoatNormalMap:je,clearcoatRoughnessMap:Ee,dispersion:G,iridescence:Z,iridescenceMap:Ne,iridescenceThicknessMap:lt,sheen:ne,sheenColorMap:Ke,sheenRoughnessMap:Be,specularMap:Je,specularColorMap:rt,specularIntensityMap:yt,transmission:we,transmissionMap:E,thicknessMap:ie,gradientMap:se,opaque:L.transparent===!1&&L.blending===jo&&L.alphaToCoverage===!1,alphaMap:he,alphaTest:Ce,alphaHash:tt,combine:L.combine,mapUv:Le&&C(L.map.channel),aoMapUv:Xe&&C(L.aoMap.channel),lightMapUv:nt&&C(L.lightMap.channel),bumpMapUv:qe&&C(L.bumpMap.channel),normalMapUv:q&&C(L.normalMap.channel),displacementMapUv:Fe&&C(L.displacementMap.channel),emissiveMapUv:Oe&&C(L.emissiveMap.channel),metalnessMapUv:ke&&C(L.metalnessMap.channel),roughnessMapUv:T&&C(L.roughnessMap.channel),anisotropyMapUv:Me&&C(L.anisotropyMap.channel),clearcoatMapUv:Te&&C(L.clearcoatMap.channel),clearcoatNormalMapUv:je&&C(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&C(L.clearcoatRoughnessMap.channel),iridescenceMapUv:Ne&&C(L.iridescenceMap.channel),iridescenceThicknessMapUv:lt&&C(L.iridescenceThicknessMap.channel),sheenColorMapUv:Ke&&C(L.sheenColorMap.channel),sheenRoughnessMapUv:Be&&C(L.sheenRoughnessMap.channel),specularMapUv:Je&&C(L.specularMap.channel),specularColorMapUv:rt&&C(L.specularColorMap.channel),specularIntensityMapUv:yt&&C(L.specularIntensityMap.channel),transmissionMapUv:E&&C(L.transmissionMap.channel),thicknessMapUv:ie&&C(L.thicknessMap.channel),alphaMapUv:he&&C(L.alphaMap.channel),vertexTangents:!!ve.attributes.tangent&&(q||S),vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!ve.attributes.color&&ve.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!ve.attributes.uv&&(Le||he),fog:!!ye,useFog:L.fog===!0,fogExp2:!!ye&&ye.isFogExp2,flatShading:L.flatShading===!0,sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:y,skinning:K.isSkinnedMesh===!0,morphTargets:ve.morphAttributes.position!==void 0,morphNormals:ve.morphAttributes.normal!==void 0,morphColors:ve.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:ce,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:L.dithering,shadowMapEnabled:o.shadowMap.enabled&&V.length>0,shadowMapType:o.shadowMap.type,toneMapping:Ut,decodeVideoTexture:Le&&L.map.isVideoTexture===!0&&At.getTransfer(L.map.colorSpace)===It,premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===gi,flipSided:L.side===En,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionClipCullDistance:ut&&L.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ut&&L.extensions.multiDraw===!0||oe)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:L.customProgramCacheKey()};return Vt.vertexUv1s=m.has(1),Vt.vertexUv2s=m.has(2),Vt.vertexUv3s=m.has(3),m.clear(),Vt}function _(L){const A=[];if(L.shaderID?A.push(L.shaderID):(A.push(L.customVertexShaderID),A.push(L.customFragmentShaderID)),L.defines!==void 0)for(const V in L.defines)A.push(V),A.push(L.defines[V]);return L.isRawShaderMaterial===!1&&(F(A,L),P(A,L),A.push(o.outputColorSpace)),A.push(L.customProgramCacheKey),A.join()}function F(L,A){L.push(A.precision),L.push(A.outputColorSpace),L.push(A.envMapMode),L.push(A.envMapCubeUVHeight),L.push(A.mapUv),L.push(A.alphaMapUv),L.push(A.lightMapUv),L.push(A.aoMapUv),L.push(A.bumpMapUv),L.push(A.normalMapUv),L.push(A.displacementMapUv),L.push(A.emissiveMapUv),L.push(A.metalnessMapUv),L.push(A.roughnessMapUv),L.push(A.anisotropyMapUv),L.push(A.clearcoatMapUv),L.push(A.clearcoatNormalMapUv),L.push(A.clearcoatRoughnessMapUv),L.push(A.iridescenceMapUv),L.push(A.iridescenceThicknessMapUv),L.push(A.sheenColorMapUv),L.push(A.sheenRoughnessMapUv),L.push(A.specularMapUv),L.push(A.specularColorMapUv),L.push(A.specularIntensityMapUv),L.push(A.transmissionMapUv),L.push(A.thicknessMapUv),L.push(A.combine),L.push(A.fogExp2),L.push(A.sizeAttenuation),L.push(A.morphTargetsCount),L.push(A.morphAttributeCount),L.push(A.numDirLights),L.push(A.numPointLights),L.push(A.numSpotLights),L.push(A.numSpotLightMaps),L.push(A.numHemiLights),L.push(A.numRectAreaLights),L.push(A.numDirLightShadows),L.push(A.numPointLightShadows),L.push(A.numSpotLightShadows),L.push(A.numSpotLightShadowsWithMaps),L.push(A.numLightProbes),L.push(A.shadowMapType),L.push(A.toneMapping),L.push(A.numClippingPlanes),L.push(A.numClipIntersection),L.push(A.depthPacking)}function P(L,A){f.disableAll(),A.supportsVertexTextures&&f.enable(0),A.instancing&&f.enable(1),A.instancingColor&&f.enable(2),A.instancingMorph&&f.enable(3),A.matcap&&f.enable(4),A.envMap&&f.enable(5),A.normalMapObjectSpace&&f.enable(6),A.normalMapTangentSpace&&f.enable(7),A.clearcoat&&f.enable(8),A.iridescence&&f.enable(9),A.alphaTest&&f.enable(10),A.vertexColors&&f.enable(11),A.vertexAlphas&&f.enable(12),A.vertexUv1s&&f.enable(13),A.vertexUv2s&&f.enable(14),A.vertexUv3s&&f.enable(15),A.vertexTangents&&f.enable(16),A.anisotropy&&f.enable(17),A.alphaHash&&f.enable(18),A.batching&&f.enable(19),A.dispersion&&f.enable(20),A.batchingColor&&f.enable(21),L.push(f.mask),f.disableAll(),A.fog&&f.enable(0),A.useFog&&f.enable(1),A.flatShading&&f.enable(2),A.logarithmicDepthBuffer&&f.enable(3),A.skinning&&f.enable(4),A.morphTargets&&f.enable(5),A.morphNormals&&f.enable(6),A.morphColors&&f.enable(7),A.premultipliedAlpha&&f.enable(8),A.shadowMapEnabled&&f.enable(9),A.doubleSided&&f.enable(10),A.flipSided&&f.enable(11),A.useDepthPacking&&f.enable(12),A.dithering&&f.enable(13),A.transmission&&f.enable(14),A.sheen&&f.enable(15),A.opaque&&f.enable(16),A.pointsUvs&&f.enable(17),A.decodeVideoTexture&&f.enable(18),A.alphaToCoverage&&f.enable(19),L.push(f.mask)}function U(L){const A=R[L.type];let V;if(A){const pe=mi[A];V=Zv.clone(pe.uniforms)}else V=L.uniforms;return V}function J(L,A){let V;for(let pe=0,K=g.length;pe<K;pe++){const ye=g[pe];if(ye.cacheKey===A){V=ye,++V.usedTimes;break}}return V===void 0&&(V=new uE(o,A,L,c),g.push(V)),V}function z(L){if(--L.usedTimes===0){const A=g.indexOf(L);g[A]=g[g.length-1],g.pop(),L.destroy()}}function O(L){h.remove(L)}function $(){h.dispose()}return{getParameters:v,getProgramCacheKey:_,getUniforms:U,acquireProgram:J,releaseProgram:z,releaseShaderCache:O,programs:g,dispose:$}}function mE(){let o=new WeakMap;function e(c){let d=o.get(c);return d===void 0&&(d={},o.set(c,d)),d}function n(c){o.delete(c)}function r(c,d,f){o.get(c)[d]=f}function a(){o=new WeakMap}return{get:e,remove:n,update:r,dispose:a}}function gE(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function ym(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Sm(){const o=[];let e=0;const n=[],r=[],a=[];function c(){e=0,n.length=0,r.length=0,a.length=0}function d(y,x,M,R,C,v){let _=o[e];return _===void 0?(_={id:y.id,object:y,geometry:x,material:M,groupOrder:R,renderOrder:y.renderOrder,z:C,group:v},o[e]=_):(_.id=y.id,_.object=y,_.geometry=x,_.material=M,_.groupOrder=R,_.renderOrder=y.renderOrder,_.z=C,_.group=v),e++,_}function f(y,x,M,R,C,v){const _=d(y,x,M,R,C,v);M.transmission>0?r.push(_):M.transparent===!0?a.push(_):n.push(_)}function h(y,x,M,R,C,v){const _=d(y,x,M,R,C,v);M.transmission>0?r.unshift(_):M.transparent===!0?a.unshift(_):n.unshift(_)}function m(y,x){n.length>1&&n.sort(y||gE),r.length>1&&r.sort(x||ym),a.length>1&&a.sort(x||ym)}function g(){for(let y=e,x=o.length;y<x;y++){const M=o[y];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:n,transmissive:r,transparent:a,init:c,push:f,unshift:h,finish:g,sort:m}}function _E(){let o=new WeakMap;function e(r,a){const c=o.get(r);let d;return c===void 0?(d=new Sm,o.set(r,[d])):a>=c.length?(d=new Sm,c.push(d)):d=c[a],d}function n(){o=new WeakMap}return{get:e,dispose:n}}function vE(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ee,color:new Rt};break;case"SpotLight":n={position:new ee,direction:new ee,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ee,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ee,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":n={color:new Rt,position:new ee,halfWidth:new ee,halfHeight:new ee};break}return o[e.id]=n,n}}}function xE(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=n,n}}}let yE=0;function SE(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function ME(o){const e=new vE,n=xE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new ee);const a=new ee,c=new qt,d=new qt;function f(m){let g=0,y=0,x=0;for(let L=0;L<9;L++)r.probe[L].set(0,0,0);let M=0,R=0,C=0,v=0,_=0,F=0,P=0,U=0,J=0,z=0,O=0;m.sort(SE);for(let L=0,A=m.length;L<A;L++){const V=m[L],pe=V.color,K=V.intensity,ye=V.distance,ve=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)g+=pe.r*K,y+=pe.g*K,x+=pe.b*K;else if(V.isLightProbe){for(let le=0;le<9;le++)r.probe[le].addScaledVector(V.sh.coefficients[le],K);O++}else if(V.isDirectionalLight){const le=e.get(V);if(le.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const de=V.shadow,B=n.get(V);B.shadowIntensity=de.intensity,B.shadowBias=de.bias,B.shadowNormalBias=de.normalBias,B.shadowRadius=de.radius,B.shadowMapSize=de.mapSize,r.directionalShadow[M]=B,r.directionalShadowMap[M]=ve,r.directionalShadowMatrix[M]=V.shadow.matrix,F++}r.directional[M]=le,M++}else if(V.isSpotLight){const le=e.get(V);le.position.setFromMatrixPosition(V.matrixWorld),le.color.copy(pe).multiplyScalar(K),le.distance=ye,le.coneCos=Math.cos(V.angle),le.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),le.decay=V.decay,r.spot[C]=le;const de=V.shadow;if(V.map&&(r.spotLightMap[J]=V.map,J++,de.updateMatrices(V),V.castShadow&&z++),r.spotLightMatrix[C]=de.matrix,V.castShadow){const B=n.get(V);B.shadowIntensity=de.intensity,B.shadowBias=de.bias,B.shadowNormalBias=de.normalBias,B.shadowRadius=de.radius,B.shadowMapSize=de.mapSize,r.spotShadow[C]=B,r.spotShadowMap[C]=ve,U++}C++}else if(V.isRectAreaLight){const le=e.get(V);le.color.copy(pe).multiplyScalar(K),le.halfWidth.set(V.width*.5,0,0),le.halfHeight.set(0,V.height*.5,0),r.rectArea[v]=le,v++}else if(V.isPointLight){const le=e.get(V);if(le.color.copy(V.color).multiplyScalar(V.intensity),le.distance=V.distance,le.decay=V.decay,V.castShadow){const de=V.shadow,B=n.get(V);B.shadowIntensity=de.intensity,B.shadowBias=de.bias,B.shadowNormalBias=de.normalBias,B.shadowRadius=de.radius,B.shadowMapSize=de.mapSize,B.shadowCameraNear=de.camera.near,B.shadowCameraFar=de.camera.far,r.pointShadow[R]=B,r.pointShadowMap[R]=ve,r.pointShadowMatrix[R]=V.shadow.matrix,P++}r.point[R]=le,R++}else if(V.isHemisphereLight){const le=e.get(V);le.skyColor.copy(V.color).multiplyScalar(K),le.groundColor.copy(V.groundColor).multiplyScalar(K),r.hemi[_]=le,_++}}v>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ve.LTC_FLOAT_1,r.rectAreaLTC2=Ve.LTC_FLOAT_2):(r.rectAreaLTC1=Ve.LTC_HALF_1,r.rectAreaLTC2=Ve.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=y,r.ambient[2]=x;const $=r.hash;($.directionalLength!==M||$.pointLength!==R||$.spotLength!==C||$.rectAreaLength!==v||$.hemiLength!==_||$.numDirectionalShadows!==F||$.numPointShadows!==P||$.numSpotShadows!==U||$.numSpotMaps!==J||$.numLightProbes!==O)&&(r.directional.length=M,r.spot.length=C,r.rectArea.length=v,r.point.length=R,r.hemi.length=_,r.directionalShadow.length=F,r.directionalShadowMap.length=F,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=F,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=U+J-z,r.spotLightMap.length=J,r.numSpotLightShadowsWithMaps=z,r.numLightProbes=O,$.directionalLength=M,$.pointLength=R,$.spotLength=C,$.rectAreaLength=v,$.hemiLength=_,$.numDirectionalShadows=F,$.numPointShadows=P,$.numSpotShadows=U,$.numSpotMaps=J,$.numLightProbes=O,r.version=yE++)}function h(m,g){let y=0,x=0,M=0,R=0,C=0;const v=g.matrixWorldInverse;for(let _=0,F=m.length;_<F;_++){const P=m[_];if(P.isDirectionalLight){const U=r.directional[y];U.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),U.direction.sub(a),U.direction.transformDirection(v),y++}else if(P.isSpotLight){const U=r.spot[M];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(v),U.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),U.direction.sub(a),U.direction.transformDirection(v),M++}else if(P.isRectAreaLight){const U=r.rectArea[R];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(v),d.identity(),c.copy(P.matrixWorld),c.premultiply(v),d.extractRotation(c),U.halfWidth.set(P.width*.5,0,0),U.halfHeight.set(0,P.height*.5,0),U.halfWidth.applyMatrix4(d),U.halfHeight.applyMatrix4(d),R++}else if(P.isPointLight){const U=r.point[x];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(v),x++}else if(P.isHemisphereLight){const U=r.hemi[C];U.direction.setFromMatrixPosition(P.matrixWorld),U.direction.transformDirection(v),C++}}}return{setup:f,setupView:h,state:r}}function Mm(o){const e=new ME(o),n=[],r=[];function a(g){m.camera=g,n.length=0,r.length=0}function c(g){n.push(g)}function d(g){r.push(g)}function f(){e.setup(n)}function h(g){e.setupView(n,g)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:f,setupLightsView:h,pushLight:c,pushShadow:d}}function EE(o){let e=new WeakMap;function n(a,c=0){const d=e.get(a);let f;return d===void 0?(f=new Mm(o),e.set(a,[f])):c>=d.length?(f=new Mm(o),d.push(f)):f=d[c],f}function r(){e=new WeakMap}return{get:n,dispose:r}}class wE extends Fl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ov,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class TE extends Fl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const AE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,RE=`uniform sampler2D shadow_pass;
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
}`;function CE(o,e,n){let r=new og;const a=new ht,c=new ht,d=new sn,f=new wE({depthPacking:sv}),h=new TE,m={},g=n.maxTextureSize,y={[zi]:En,[En]:zi,[gi]:gi},x=new yr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:AE,fragmentShader:RE}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const R=new Mr;R.setAttribute("position",new vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Qn(R,x),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Um;let _=this.type;this.render=function(z,O,$){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||z.length===0)return;const L=o.getRenderTarget(),A=o.getActiveCubeFace(),V=o.getActiveMipmapLevel(),pe=o.state;pe.setBlending(vr),pe.buffers.color.setClear(1,1,1,1),pe.buffers.depth.setTest(!0),pe.setScissorTest(!1);const K=_!==Ui&&this.type===Ui,ye=_===Ui&&this.type!==Ui;for(let ve=0,le=z.length;ve<le;ve++){const de=z[ve],B=de.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",de,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;a.copy(B.mapSize);const xe=B.getFrameExtents();if(a.multiply(xe),c.copy(B.mapSize),(a.x>g||a.y>g)&&(a.x>g&&(c.x=Math.floor(g/xe.x),a.x=c.x*xe.x,B.mapSize.x=c.x),a.y>g&&(c.y=Math.floor(g/xe.y),a.y=c.y*xe.y,B.mapSize.y=c.y)),B.map===null||K===!0||ye===!0){const k=this.type!==Ui?{minFilter:Zn,magFilter:Zn}:{};B.map!==null&&B.map.dispose(),B.map=new $r(a.x,a.y,k),B.map.texture.name=de.name+".shadowMap",B.camera.updateProjectionMatrix()}o.setRenderTarget(B.map),o.clear();const me=B.getViewportCount();for(let k=0;k<me;k++){const ce=B.getViewport(k);d.set(c.x*ce.x,c.y*ce.y,c.x*ce.z,c.y*ce.w),pe.viewport(d),B.updateMatrices(de,k),r=B.getFrustum(),U(O,$,B.camera,de,this.type)}B.isPointLightShadow!==!0&&this.type===Ui&&F(B,$),B.needsUpdate=!1}_=this.type,v.needsUpdate=!1,o.setRenderTarget(L,A,V)};function F(z,O){const $=e.update(C);x.defines.VSM_SAMPLES!==z.blurSamples&&(x.defines.VSM_SAMPLES=z.blurSamples,M.defines.VSM_SAMPLES=z.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new $r(a.x,a.y)),x.uniforms.shadow_pass.value=z.map.texture,x.uniforms.resolution.value=z.mapSize,x.uniforms.radius.value=z.radius,o.setRenderTarget(z.mapPass),o.clear(),o.renderBufferDirect(O,null,$,x,C,null),M.uniforms.shadow_pass.value=z.mapPass.texture,M.uniforms.resolution.value=z.mapSize,M.uniforms.radius.value=z.radius,o.setRenderTarget(z.map),o.clear(),o.renderBufferDirect(O,null,$,M,C,null)}function P(z,O,$,L){let A=null;const V=$.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(V!==void 0)A=V;else if(A=$.isPointLight===!0?h:f,o.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const pe=A.uuid,K=O.uuid;let ye=m[pe];ye===void 0&&(ye={},m[pe]=ye);let ve=ye[K];ve===void 0&&(ve=A.clone(),ye[K]=ve,O.addEventListener("dispose",J)),A=ve}if(A.visible=O.visible,A.wireframe=O.wireframe,L===Ui?A.side=O.shadowSide!==null?O.shadowSide:O.side:A.side=O.shadowSide!==null?O.shadowSide:y[O.side],A.alphaMap=O.alphaMap,A.alphaTest=O.alphaTest,A.map=O.map,A.clipShadows=O.clipShadows,A.clippingPlanes=O.clippingPlanes,A.clipIntersection=O.clipIntersection,A.displacementMap=O.displacementMap,A.displacementScale=O.displacementScale,A.displacementBias=O.displacementBias,A.wireframeLinewidth=O.wireframeLinewidth,A.linewidth=O.linewidth,$.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const pe=o.properties.get(A);pe.light=$}return A}function U(z,O,$,L,A){if(z.visible===!1)return;if(z.layers.test(O.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&A===Ui)&&(!z.frustumCulled||r.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,z.matrixWorld);const K=e.update(z),ye=z.material;if(Array.isArray(ye)){const ve=K.groups;for(let le=0,de=ve.length;le<de;le++){const B=ve[le],xe=ye[B.materialIndex];if(xe&&xe.visible){const me=P(z,xe,L,A);z.onBeforeShadow(o,z,O,$,K,me,B),o.renderBufferDirect($,null,K,me,z,B),z.onAfterShadow(o,z,O,$,K,me,B)}}}else if(ye.visible){const ve=P(z,ye,L,A);z.onBeforeShadow(o,z,O,$,K,ve,null),o.renderBufferDirect($,null,K,ve,z,null),z.onAfterShadow(o,z,O,$,K,ve,null)}}const pe=z.children;for(let K=0,ye=pe.length;K<ye;K++)U(pe[K],O,$,L,A)}function J(z){z.target.removeEventListener("dispose",J);for(const $ in m){const L=m[$],A=z.target.uuid;A in L&&(L[A].dispose(),delete L[A])}}}function bE(o){function e(){let E=!1;const ie=new sn;let se=null;const he=new sn(0,0,0,0);return{setMask:function(Ce){se!==Ce&&!E&&(o.colorMask(Ce,Ce,Ce,Ce),se=Ce)},setLocked:function(Ce){E=Ce},setClear:function(Ce,tt,ut,Ut,Vt){Vt===!0&&(Ce*=Ut,tt*=Ut,ut*=Ut),ie.set(Ce,tt,ut,Ut),he.equals(ie)===!1&&(o.clearColor(Ce,tt,ut,Ut),he.copy(ie))},reset:function(){E=!1,se=null,he.set(-1,0,0,0)}}}function n(){let E=!1,ie=null,se=null,he=null;return{setTest:function(Ce){Ce?Ae(o.DEPTH_TEST):j(o.DEPTH_TEST)},setMask:function(Ce){ie!==Ce&&!E&&(o.depthMask(Ce),ie=Ce)},setFunc:function(Ce){if(se!==Ce){switch(Ce){case V0:o.depthFunc(o.NEVER);break;case G0:o.depthFunc(o.ALWAYS);break;case W0:o.depthFunc(o.LESS);break;case bl:o.depthFunc(o.LEQUAL);break;case X0:o.depthFunc(o.EQUAL);break;case j0:o.depthFunc(o.GEQUAL);break;case Y0:o.depthFunc(o.GREATER);break;case q0:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}se=Ce}},setLocked:function(Ce){E=Ce},setClear:function(Ce){he!==Ce&&(o.clearDepth(Ce),he=Ce)},reset:function(){E=!1,ie=null,se=null,he=null}}}function r(){let E=!1,ie=null,se=null,he=null,Ce=null,tt=null,ut=null,Ut=null,Vt=null;return{setTest:function(vt){E||(vt?Ae(o.STENCIL_TEST):j(o.STENCIL_TEST))},setMask:function(vt){ie!==vt&&!E&&(o.stencilMask(vt),ie=vt)},setFunc:function(vt,kt,zt){(se!==vt||he!==kt||Ce!==zt)&&(o.stencilFunc(vt,kt,zt),se=vt,he=kt,Ce=zt)},setOp:function(vt,kt,zt){(tt!==vt||ut!==kt||Ut!==zt)&&(o.stencilOp(vt,kt,zt),tt=vt,ut=kt,Ut=zt)},setLocked:function(vt){E=vt},setClear:function(vt){Vt!==vt&&(o.clearStencil(vt),Vt=vt)},reset:function(){E=!1,ie=null,se=null,he=null,Ce=null,tt=null,ut=null,Ut=null,Vt=null}}}const a=new e,c=new n,d=new r,f=new WeakMap,h=new WeakMap;let m={},g={},y=new WeakMap,x=[],M=null,R=!1,C=null,v=null,_=null,F=null,P=null,U=null,J=null,z=new Rt(0,0,0),O=0,$=!1,L=null,A=null,V=null,pe=null,K=null;const ye=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ve=!1,le=0;const de=o.getParameter(o.VERSION);de.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(de)[1]),ve=le>=1):de.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(de)[1]),ve=le>=2);let B=null,xe={};const me=o.getParameter(o.SCISSOR_BOX),k=o.getParameter(o.VIEWPORT),ce=new sn().fromArray(me),He=new sn().fromArray(k);function te(E,ie,se,he){const Ce=new Uint8Array(4),tt=o.createTexture();o.bindTexture(E,tt),o.texParameteri(E,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(E,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let ut=0;ut<se;ut++)E===o.TEXTURE_3D||E===o.TEXTURE_2D_ARRAY?o.texImage3D(ie,0,o.RGBA,1,1,he,0,o.RGBA,o.UNSIGNED_BYTE,Ce):o.texImage2D(ie+ut,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ce);return tt}const Se={};Se[o.TEXTURE_2D]=te(o.TEXTURE_2D,o.TEXTURE_2D,1),Se[o.TEXTURE_CUBE_MAP]=te(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[o.TEXTURE_2D_ARRAY]=te(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Se[o.TEXTURE_3D]=te(o.TEXTURE_3D,o.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),d.setClear(0),Ae(o.DEPTH_TEST),c.setFunc(bl),qe(!1),q(Rp),Ae(o.CULL_FACE),Xe(vr);function Ae(E){m[E]!==!0&&(o.enable(E),m[E]=!0)}function j(E){m[E]!==!1&&(o.disable(E),m[E]=!1)}function ge(E,ie){return g[E]!==ie?(o.bindFramebuffer(E,ie),g[E]=ie,E===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=ie),E===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=ie),!0):!1}function oe(E,ie){let se=x,he=!1;if(E){se=y.get(ie),se===void 0&&(se=[],y.set(ie,se));const Ce=E.textures;if(se.length!==Ce.length||se[0]!==o.COLOR_ATTACHMENT0){for(let tt=0,ut=Ce.length;tt<ut;tt++)se[tt]=o.COLOR_ATTACHMENT0+tt;se.length=Ce.length,he=!0}}else se[0]!==o.BACK&&(se[0]=o.BACK,he=!0);he&&o.drawBuffers(se)}function Le(E){return M!==E?(o.useProgram(E),M=E,!0):!1}const Ue={[Wr]:o.FUNC_ADD,[T0]:o.FUNC_SUBTRACT,[A0]:o.FUNC_REVERSE_SUBTRACT};Ue[R0]=o.MIN,Ue[C0]=o.MAX;const N={[b0]:o.ZERO,[P0]:o.ONE,[L0]:o.SRC_COLOR,[Qu]:o.SRC_ALPHA,[F0]:o.SRC_ALPHA_SATURATE,[U0]:o.DST_COLOR,[N0]:o.DST_ALPHA,[D0]:o.ONE_MINUS_SRC_COLOR,[Ju]:o.ONE_MINUS_SRC_ALPHA,[O0]:o.ONE_MINUS_DST_COLOR,[I0]:o.ONE_MINUS_DST_ALPHA,[k0]:o.CONSTANT_COLOR,[z0]:o.ONE_MINUS_CONSTANT_COLOR,[B0]:o.CONSTANT_ALPHA,[H0]:o.ONE_MINUS_CONSTANT_ALPHA};function Xe(E,ie,se,he,Ce,tt,ut,Ut,Vt,vt){if(E===vr){R===!0&&(j(o.BLEND),R=!1);return}if(R===!1&&(Ae(o.BLEND),R=!0),E!==w0){if(E!==C||vt!==$){if((v!==Wr||P!==Wr)&&(o.blendEquation(o.FUNC_ADD),v=Wr,P=Wr),vt)switch(E){case jo:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Cp:o.blendFunc(o.ONE,o.ONE);break;case bp:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Pp:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",E);break}else switch(E){case jo:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Cp:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case bp:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Pp:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",E);break}_=null,F=null,U=null,J=null,z.set(0,0,0),O=0,C=E,$=vt}return}Ce=Ce||ie,tt=tt||se,ut=ut||he,(ie!==v||Ce!==P)&&(o.blendEquationSeparate(Ue[ie],Ue[Ce]),v=ie,P=Ce),(se!==_||he!==F||tt!==U||ut!==J)&&(o.blendFuncSeparate(N[se],N[he],N[tt],N[ut]),_=se,F=he,U=tt,J=ut),(Ut.equals(z)===!1||Vt!==O)&&(o.blendColor(Ut.r,Ut.g,Ut.b,Vt),z.copy(Ut),O=Vt),C=E,$=!1}function nt(E,ie){E.side===gi?j(o.CULL_FACE):Ae(o.CULL_FACE);let se=E.side===En;ie&&(se=!se),qe(se),E.blending===jo&&E.transparent===!1?Xe(vr):Xe(E.blending,E.blendEquation,E.blendSrc,E.blendDst,E.blendEquationAlpha,E.blendSrcAlpha,E.blendDstAlpha,E.blendColor,E.blendAlpha,E.premultipliedAlpha),c.setFunc(E.depthFunc),c.setTest(E.depthTest),c.setMask(E.depthWrite),a.setMask(E.colorWrite);const he=E.stencilWrite;d.setTest(he),he&&(d.setMask(E.stencilWriteMask),d.setFunc(E.stencilFunc,E.stencilRef,E.stencilFuncMask),d.setOp(E.stencilFail,E.stencilZFail,E.stencilZPass)),Oe(E.polygonOffset,E.polygonOffsetFactor,E.polygonOffsetUnits),E.alphaToCoverage===!0?Ae(o.SAMPLE_ALPHA_TO_COVERAGE):j(o.SAMPLE_ALPHA_TO_COVERAGE)}function qe(E){L!==E&&(E?o.frontFace(o.CW):o.frontFace(o.CCW),L=E)}function q(E){E!==S0?(Ae(o.CULL_FACE),E!==A&&(E===Rp?o.cullFace(o.BACK):E===M0?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):j(o.CULL_FACE),A=E}function Fe(E){E!==V&&(ve&&o.lineWidth(E),V=E)}function Oe(E,ie,se){E?(Ae(o.POLYGON_OFFSET_FILL),(pe!==ie||K!==se)&&(o.polygonOffset(ie,se),pe=ie,K=se)):j(o.POLYGON_OFFSET_FILL)}function ke(E){E?Ae(o.SCISSOR_TEST):j(o.SCISSOR_TEST)}function T(E){E===void 0&&(E=o.TEXTURE0+ye-1),B!==E&&(o.activeTexture(E),B=E)}function S(E,ie,se){se===void 0&&(B===null?se=o.TEXTURE0+ye-1:se=B);let he=xe[se];he===void 0&&(he={type:void 0,texture:void 0},xe[se]=he),(he.type!==E||he.texture!==ie)&&(B!==se&&(o.activeTexture(se),B=se),o.bindTexture(E,ie||Se[E]),he.type=E,he.texture=ie)}function D(){const E=xe[B];E!==void 0&&E.type!==void 0&&(o.bindTexture(E.type,null),E.type=void 0,E.texture=void 0)}function G(){try{o.compressedTexImage2D.apply(o,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Z(){try{o.compressedTexImage3D.apply(o,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function ne(){try{o.texSubImage2D.apply(o,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function we(){try{o.texSubImage3D.apply(o,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Me(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Te(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function je(){try{o.texStorage2D.apply(o,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Ee(){try{o.texStorage3D.apply(o,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Ne(){try{o.texImage2D.apply(o,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function lt(){try{o.texImage3D.apply(o,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Ke(E){ce.equals(E)===!1&&(o.scissor(E.x,E.y,E.z,E.w),ce.copy(E))}function Be(E){He.equals(E)===!1&&(o.viewport(E.x,E.y,E.z,E.w),He.copy(E))}function Je(E,ie){let se=h.get(ie);se===void 0&&(se=new WeakMap,h.set(ie,se));let he=se.get(E);he===void 0&&(he=o.getUniformBlockIndex(ie,E.name),se.set(E,he))}function rt(E,ie){const he=h.get(ie).get(E);f.get(ie)!==he&&(o.uniformBlockBinding(ie,he,E.__bindingPointIndex),f.set(ie,he))}function yt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),m={},B=null,xe={},g={},y=new WeakMap,x=[],M=null,R=!1,C=null,v=null,_=null,F=null,P=null,U=null,J=null,z=new Rt(0,0,0),O=0,$=!1,L=null,A=null,V=null,pe=null,K=null,ce.set(0,0,o.canvas.width,o.canvas.height),He.set(0,0,o.canvas.width,o.canvas.height),a.reset(),c.reset(),d.reset()}return{buffers:{color:a,depth:c,stencil:d},enable:Ae,disable:j,bindFramebuffer:ge,drawBuffers:oe,useProgram:Le,setBlending:Xe,setMaterial:nt,setFlipSided:qe,setCullFace:q,setLineWidth:Fe,setPolygonOffset:Oe,setScissorTest:ke,activeTexture:T,bindTexture:S,unbindTexture:D,compressedTexImage2D:G,compressedTexImage3D:Z,texImage2D:Ne,texImage3D:lt,updateUBOMapping:Je,uniformBlockBinding:rt,texStorage2D:je,texStorage3D:Ee,texSubImage2D:ne,texSubImage3D:we,compressedTexSubImage2D:Me,compressedTexSubImage3D:Te,scissor:Ke,viewport:Be,reset:yt}}function Em(o,e,n,r){const a=PE(r);switch(n){case Hm:return o*e;case Gm:return o*e;case Wm:return o*e*2;case Xm:return o*e/a.components*a.byteLength;case kf:return o*e/a.components*a.byteLength;case jm:return o*e*2/a.components*a.byteLength;case zf:return o*e*2/a.components*a.byteLength;case Vm:return o*e*3/a.components*a.byteLength;case ci:return o*e*4/a.components*a.byteLength;case Bf:return o*e*4/a.components*a.byteLength;case El:case wl:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Tl:case Al:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case sf:case lf:return Math.max(o,16)*Math.max(e,8)/4;case of:case af:return Math.max(o,8)*Math.max(e,8)/2;case cf:case uf:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case ff:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case df:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case hf:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case pf:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case mf:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case gf:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case _f:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case vf:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case xf:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case yf:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Sf:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Mf:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Ef:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case wf:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Tf:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Rl:case Af:case Rf:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Ym:case Cf:return Math.ceil(o/4)*Math.ceil(e/4)*8;case bf:case Pf:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function PE(o){switch(o){case Bi:case km:return{byteLength:1,components:1};case Gs:case zm:case Xs:return{byteLength:2,components:1};case Of:case Ff:return{byteLength:2,components:4};case qr:case Uf:case Oi:return{byteLength:4,components:1};case Bm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}function LE(o,e,n,r,a,c,d){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new ht,g=new WeakMap;let y;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(T,S){return M?new OffscreenCanvas(T,S):Il("canvas")}function C(T,S,D){let G=1;const Z=ke(T);if((Z.width>D||Z.height>D)&&(G=D/Math.max(Z.width,Z.height)),G<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const ne=Math.floor(G*Z.width),we=Math.floor(G*Z.height);y===void 0&&(y=R(ne,we));const Me=S?R(ne,we):y;return Me.width=ne,Me.height=we,Me.getContext("2d").drawImage(T,0,0,ne,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+ne+"x"+we+")."),Me}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),T;return T}function v(T){return T.generateMipmaps&&T.minFilter!==Zn&&T.minFilter!==Mn}function _(T){o.generateMipmap(T)}function F(T,S,D,G,Z=!1){if(T!==null){if(o[T]!==void 0)return o[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ne=S;if(S===o.RED&&(D===o.FLOAT&&(ne=o.R32F),D===o.HALF_FLOAT&&(ne=o.R16F),D===o.UNSIGNED_BYTE&&(ne=o.R8)),S===o.RED_INTEGER&&(D===o.UNSIGNED_BYTE&&(ne=o.R8UI),D===o.UNSIGNED_SHORT&&(ne=o.R16UI),D===o.UNSIGNED_INT&&(ne=o.R32UI),D===o.BYTE&&(ne=o.R8I),D===o.SHORT&&(ne=o.R16I),D===o.INT&&(ne=o.R32I)),S===o.RG&&(D===o.FLOAT&&(ne=o.RG32F),D===o.HALF_FLOAT&&(ne=o.RG16F),D===o.UNSIGNED_BYTE&&(ne=o.RG8)),S===o.RG_INTEGER&&(D===o.UNSIGNED_BYTE&&(ne=o.RG8UI),D===o.UNSIGNED_SHORT&&(ne=o.RG16UI),D===o.UNSIGNED_INT&&(ne=o.RG32UI),D===o.BYTE&&(ne=o.RG8I),D===o.SHORT&&(ne=o.RG16I),D===o.INT&&(ne=o.RG32I)),S===o.RGB&&D===o.UNSIGNED_INT_5_9_9_9_REV&&(ne=o.RGB9_E5),S===o.RGBA){const we=Z?Pl:At.getTransfer(G);D===o.FLOAT&&(ne=o.RGBA32F),D===o.HALF_FLOAT&&(ne=o.RGBA16F),D===o.UNSIGNED_BYTE&&(ne=we===It?o.SRGB8_ALPHA8:o.RGBA8),D===o.UNSIGNED_SHORT_4_4_4_4&&(ne=o.RGBA4),D===o.UNSIGNED_SHORT_5_5_5_1&&(ne=o.RGB5_A1)}return(ne===o.R16F||ne===o.R32F||ne===o.RG16F||ne===o.RG32F||ne===o.RGBA16F||ne===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function P(T,S){let D;return T?S===null||S===qr||S===Zo?D=o.DEPTH24_STENCIL8:S===Oi?D=o.DEPTH32F_STENCIL8:S===Gs&&(D=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===qr||S===Zo?D=o.DEPTH_COMPONENT24:S===Oi?D=o.DEPTH_COMPONENT32F:S===Gs&&(D=o.DEPTH_COMPONENT16),D}function U(T,S){return v(T)===!0||T.isFramebufferTexture&&T.minFilter!==Zn&&T.minFilter!==Mn?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function J(T){const S=T.target;S.removeEventListener("dispose",J),O(S),S.isVideoTexture&&g.delete(S)}function z(T){const S=T.target;S.removeEventListener("dispose",z),L(S)}function O(T){const S=r.get(T);if(S.__webglInit===void 0)return;const D=T.source,G=x.get(D);if(G){const Z=G[S.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&$(T),Object.keys(G).length===0&&x.delete(D)}r.remove(T)}function $(T){const S=r.get(T);o.deleteTexture(S.__webglTexture);const D=T.source,G=x.get(D);delete G[S.__cacheKey],d.memory.textures--}function L(T){const S=r.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(S.__webglFramebuffer[G]))for(let Z=0;Z<S.__webglFramebuffer[G].length;Z++)o.deleteFramebuffer(S.__webglFramebuffer[G][Z]);else o.deleteFramebuffer(S.__webglFramebuffer[G]);S.__webglDepthbuffer&&o.deleteRenderbuffer(S.__webglDepthbuffer[G])}else{if(Array.isArray(S.__webglFramebuffer))for(let G=0;G<S.__webglFramebuffer.length;G++)o.deleteFramebuffer(S.__webglFramebuffer[G]);else o.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&o.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&o.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let G=0;G<S.__webglColorRenderbuffer.length;G++)S.__webglColorRenderbuffer[G]&&o.deleteRenderbuffer(S.__webglColorRenderbuffer[G]);S.__webglDepthRenderbuffer&&o.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const D=T.textures;for(let G=0,Z=D.length;G<Z;G++){const ne=r.get(D[G]);ne.__webglTexture&&(o.deleteTexture(ne.__webglTexture),d.memory.textures--),r.remove(D[G])}r.remove(T)}let A=0;function V(){A=0}function pe(){const T=A;return T>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+a.maxTextures),A+=1,T}function K(T){const S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.wrapR||0),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.colorSpace),S.join()}function ye(T,S){const D=r.get(T);if(T.isVideoTexture&&Fe(T),T.isRenderTargetTexture===!1&&T.version>0&&D.__version!==T.version){const G=T.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{He(D,T,S);return}}n.bindTexture(o.TEXTURE_2D,D.__webglTexture,o.TEXTURE0+S)}function ve(T,S){const D=r.get(T);if(T.version>0&&D.__version!==T.version){He(D,T,S);return}n.bindTexture(o.TEXTURE_2D_ARRAY,D.__webglTexture,o.TEXTURE0+S)}function le(T,S){const D=r.get(T);if(T.version>0&&D.__version!==T.version){He(D,T,S);return}n.bindTexture(o.TEXTURE_3D,D.__webglTexture,o.TEXTURE0+S)}function de(T,S){const D=r.get(T);if(T.version>0&&D.__version!==T.version){te(D,T,S);return}n.bindTexture(o.TEXTURE_CUBE_MAP,D.__webglTexture,o.TEXTURE0+S)}const B={[nf]:o.REPEAT,[jr]:o.CLAMP_TO_EDGE,[rf]:o.MIRRORED_REPEAT},xe={[Zn]:o.NEAREST,[rv]:o.NEAREST_MIPMAP_NEAREST,[el]:o.NEAREST_MIPMAP_LINEAR,[Mn]:o.LINEAR,[Eu]:o.LINEAR_MIPMAP_NEAREST,[Yr]:o.LINEAR_MIPMAP_LINEAR},me={[cv]:o.NEVER,[mv]:o.ALWAYS,[uv]:o.LESS,[qm]:o.LEQUAL,[fv]:o.EQUAL,[pv]:o.GEQUAL,[dv]:o.GREATER,[hv]:o.NOTEQUAL};function k(T,S){if(S.type===Oi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Mn||S.magFilter===Eu||S.magFilter===el||S.magFilter===Yr||S.minFilter===Mn||S.minFilter===Eu||S.minFilter===el||S.minFilter===Yr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(T,o.TEXTURE_WRAP_S,B[S.wrapS]),o.texParameteri(T,o.TEXTURE_WRAP_T,B[S.wrapT]),(T===o.TEXTURE_3D||T===o.TEXTURE_2D_ARRAY)&&o.texParameteri(T,o.TEXTURE_WRAP_R,B[S.wrapR]),o.texParameteri(T,o.TEXTURE_MAG_FILTER,xe[S.magFilter]),o.texParameteri(T,o.TEXTURE_MIN_FILTER,xe[S.minFilter]),S.compareFunction&&(o.texParameteri(T,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(T,o.TEXTURE_COMPARE_FUNC,me[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Zn||S.minFilter!==el&&S.minFilter!==Yr||S.type===Oi&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||r.get(S).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");o.texParameterf(T,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,a.getMaxAnisotropy())),r.get(S).__currentAnisotropy=S.anisotropy}}}function ce(T,S){let D=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",J));const G=S.source;let Z=x.get(G);Z===void 0&&(Z={},x.set(G,Z));const ne=K(S);if(ne!==T.__cacheKey){Z[ne]===void 0&&(Z[ne]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,D=!0),Z[ne].usedTimes++;const we=Z[T.__cacheKey];we!==void 0&&(Z[T.__cacheKey].usedTimes--,we.usedTimes===0&&$(S)),T.__cacheKey=ne,T.__webglTexture=Z[ne].texture}return D}function He(T,S,D){let G=o.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(G=o.TEXTURE_2D_ARRAY),S.isData3DTexture&&(G=o.TEXTURE_3D);const Z=ce(T,S),ne=S.source;n.bindTexture(G,T.__webglTexture,o.TEXTURE0+D);const we=r.get(ne);if(ne.version!==we.__version||Z===!0){n.activeTexture(o.TEXTURE0+D);const Me=At.getPrimaries(At.workingColorSpace),Te=S.colorSpace===gr?null:At.getPrimaries(S.colorSpace),je=S.colorSpace===gr||Me===Te?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,S.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,S.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let Ee=C(S.image,!1,a.maxTextureSize);Ee=Oe(S,Ee);const Ne=c.convert(S.format,S.colorSpace),lt=c.convert(S.type);let Ke=F(S.internalFormat,Ne,lt,S.colorSpace,S.isVideoTexture);k(G,S);let Be;const Je=S.mipmaps,rt=S.isVideoTexture!==!0,yt=we.__version===void 0||Z===!0,E=ne.dataReady,ie=U(S,Ee);if(S.isDepthTexture)Ke=P(S.format===Qo,S.type),yt&&(rt?n.texStorage2D(o.TEXTURE_2D,1,Ke,Ee.width,Ee.height):n.texImage2D(o.TEXTURE_2D,0,Ke,Ee.width,Ee.height,0,Ne,lt,null));else if(S.isDataTexture)if(Je.length>0){rt&&yt&&n.texStorage2D(o.TEXTURE_2D,ie,Ke,Je[0].width,Je[0].height);for(let se=0,he=Je.length;se<he;se++)Be=Je[se],rt?E&&n.texSubImage2D(o.TEXTURE_2D,se,0,0,Be.width,Be.height,Ne,lt,Be.data):n.texImage2D(o.TEXTURE_2D,se,Ke,Be.width,Be.height,0,Ne,lt,Be.data);S.generateMipmaps=!1}else rt?(yt&&n.texStorage2D(o.TEXTURE_2D,ie,Ke,Ee.width,Ee.height),E&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,Ee.width,Ee.height,Ne,lt,Ee.data)):n.texImage2D(o.TEXTURE_2D,0,Ke,Ee.width,Ee.height,0,Ne,lt,Ee.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){rt&&yt&&n.texStorage3D(o.TEXTURE_2D_ARRAY,ie,Ke,Je[0].width,Je[0].height,Ee.depth);for(let se=0,he=Je.length;se<he;se++)if(Be=Je[se],S.format!==ci)if(Ne!==null)if(rt){if(E)if(S.layerUpdates.size>0){const Ce=Em(Be.width,Be.height,S.format,S.type);for(const tt of S.layerUpdates){const ut=Be.data.subarray(tt*Ce/Be.data.BYTES_PER_ELEMENT,(tt+1)*Ce/Be.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,se,0,0,tt,Be.width,Be.height,1,Ne,ut,0,0)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,se,0,0,0,Be.width,Be.height,Ee.depth,Ne,Be.data,0,0)}else n.compressedTexImage3D(o.TEXTURE_2D_ARRAY,se,Ke,Be.width,Be.height,Ee.depth,0,Be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?E&&n.texSubImage3D(o.TEXTURE_2D_ARRAY,se,0,0,0,Be.width,Be.height,Ee.depth,Ne,lt,Be.data):n.texImage3D(o.TEXTURE_2D_ARRAY,se,Ke,Be.width,Be.height,Ee.depth,0,Ne,lt,Be.data)}else{rt&&yt&&n.texStorage2D(o.TEXTURE_2D,ie,Ke,Je[0].width,Je[0].height);for(let se=0,he=Je.length;se<he;se++)Be=Je[se],S.format!==ci?Ne!==null?rt?E&&n.compressedTexSubImage2D(o.TEXTURE_2D,se,0,0,Be.width,Be.height,Ne,Be.data):n.compressedTexImage2D(o.TEXTURE_2D,se,Ke,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?E&&n.texSubImage2D(o.TEXTURE_2D,se,0,0,Be.width,Be.height,Ne,lt,Be.data):n.texImage2D(o.TEXTURE_2D,se,Ke,Be.width,Be.height,0,Ne,lt,Be.data)}else if(S.isDataArrayTexture)if(rt){if(yt&&n.texStorage3D(o.TEXTURE_2D_ARRAY,ie,Ke,Ee.width,Ee.height,Ee.depth),E)if(S.layerUpdates.size>0){const se=Em(Ee.width,Ee.height,S.format,S.type);for(const he of S.layerUpdates){const Ce=Ee.data.subarray(he*se/Ee.data.BYTES_PER_ELEMENT,(he+1)*se/Ee.data.BYTES_PER_ELEMENT);n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,he,Ee.width,Ee.height,1,Ne,lt,Ce)}S.clearLayerUpdates()}else n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ne,lt,Ee.data)}else n.texImage3D(o.TEXTURE_2D_ARRAY,0,Ke,Ee.width,Ee.height,Ee.depth,0,Ne,lt,Ee.data);else if(S.isData3DTexture)rt?(yt&&n.texStorage3D(o.TEXTURE_3D,ie,Ke,Ee.width,Ee.height,Ee.depth),E&&n.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ne,lt,Ee.data)):n.texImage3D(o.TEXTURE_3D,0,Ke,Ee.width,Ee.height,Ee.depth,0,Ne,lt,Ee.data);else if(S.isFramebufferTexture){if(yt)if(rt)n.texStorage2D(o.TEXTURE_2D,ie,Ke,Ee.width,Ee.height);else{let se=Ee.width,he=Ee.height;for(let Ce=0;Ce<ie;Ce++)n.texImage2D(o.TEXTURE_2D,Ce,Ke,se,he,0,Ne,lt,null),se>>=1,he>>=1}}else if(Je.length>0){if(rt&&yt){const se=ke(Je[0]);n.texStorage2D(o.TEXTURE_2D,ie,Ke,se.width,se.height)}for(let se=0,he=Je.length;se<he;se++)Be=Je[se],rt?E&&n.texSubImage2D(o.TEXTURE_2D,se,0,0,Ne,lt,Be):n.texImage2D(o.TEXTURE_2D,se,Ke,Ne,lt,Be);S.generateMipmaps=!1}else if(rt){if(yt){const se=ke(Ee);n.texStorage2D(o.TEXTURE_2D,ie,Ke,se.width,se.height)}E&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,Ne,lt,Ee)}else n.texImage2D(o.TEXTURE_2D,0,Ke,Ne,lt,Ee);v(S)&&_(G),we.__version=ne.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function te(T,S,D){if(S.image.length!==6)return;const G=ce(T,S),Z=S.source;n.bindTexture(o.TEXTURE_CUBE_MAP,T.__webglTexture,o.TEXTURE0+D);const ne=r.get(Z);if(Z.version!==ne.__version||G===!0){n.activeTexture(o.TEXTURE0+D);const we=At.getPrimaries(At.workingColorSpace),Me=S.colorSpace===gr?null:At.getPrimaries(S.colorSpace),Te=S.colorSpace===gr||we===Me?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,S.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,S.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const je=S.isCompressedTexture||S.image[0].isCompressedTexture,Ee=S.image[0]&&S.image[0].isDataTexture,Ne=[];for(let he=0;he<6;he++)!je&&!Ee?Ne[he]=C(S.image[he],!0,a.maxCubemapSize):Ne[he]=Ee?S.image[he].image:S.image[he],Ne[he]=Oe(S,Ne[he]);const lt=Ne[0],Ke=c.convert(S.format,S.colorSpace),Be=c.convert(S.type),Je=F(S.internalFormat,Ke,Be,S.colorSpace),rt=S.isVideoTexture!==!0,yt=ne.__version===void 0||G===!0,E=Z.dataReady;let ie=U(S,lt);k(o.TEXTURE_CUBE_MAP,S);let se;if(je){rt&&yt&&n.texStorage2D(o.TEXTURE_CUBE_MAP,ie,Je,lt.width,lt.height);for(let he=0;he<6;he++){se=Ne[he].mipmaps;for(let Ce=0;Ce<se.length;Ce++){const tt=se[Ce];S.format!==ci?Ke!==null?rt?E&&n.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce,0,0,tt.width,tt.height,Ke,tt.data):n.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce,Je,tt.width,tt.height,0,tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):rt?E&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce,0,0,tt.width,tt.height,Ke,Be,tt.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce,Je,tt.width,tt.height,0,Ke,Be,tt.data)}}}else{if(se=S.mipmaps,rt&&yt){se.length>0&&ie++;const he=ke(Ne[0]);n.texStorage2D(o.TEXTURE_CUBE_MAP,ie,Je,he.width,he.height)}for(let he=0;he<6;he++)if(Ee){rt?E&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ne[he].width,Ne[he].height,Ke,Be,Ne[he].data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Je,Ne[he].width,Ne[he].height,0,Ke,Be,Ne[he].data);for(let Ce=0;Ce<se.length;Ce++){const ut=se[Ce].image[he].image;rt?E&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce+1,0,0,ut.width,ut.height,Ke,Be,ut.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce+1,Je,ut.width,ut.height,0,Ke,Be,ut.data)}}else{rt?E&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ke,Be,Ne[he]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Je,Ke,Be,Ne[he]);for(let Ce=0;Ce<se.length;Ce++){const tt=se[Ce];rt?E&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce+1,0,0,Ke,Be,tt.image[he]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce+1,Je,Ke,Be,tt.image[he])}}}v(S)&&_(o.TEXTURE_CUBE_MAP),ne.__version=Z.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function Se(T,S,D,G,Z,ne){const we=c.convert(D.format,D.colorSpace),Me=c.convert(D.type),Te=F(D.internalFormat,we,Me,D.colorSpace);if(!r.get(S).__hasExternalTextures){const Ee=Math.max(1,S.width>>ne),Ne=Math.max(1,S.height>>ne);Z===o.TEXTURE_3D||Z===o.TEXTURE_2D_ARRAY?n.texImage3D(Z,ne,Te,Ee,Ne,S.depth,0,we,Me,null):n.texImage2D(Z,ne,Te,Ee,Ne,0,we,Me,null)}n.bindFramebuffer(o.FRAMEBUFFER,T),q(S)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,G,Z,r.get(D).__webglTexture,0,qe(S)):(Z===o.TEXTURE_2D||Z>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,G,Z,r.get(D).__webglTexture,ne),n.bindFramebuffer(o.FRAMEBUFFER,null)}function Ae(T,S,D){if(o.bindRenderbuffer(o.RENDERBUFFER,T),S.depthBuffer){const G=S.depthTexture,Z=G&&G.isDepthTexture?G.type:null,ne=P(S.stencilBuffer,Z),we=S.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Me=qe(S);q(S)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Me,ne,S.width,S.height):D?o.renderbufferStorageMultisample(o.RENDERBUFFER,Me,ne,S.width,S.height):o.renderbufferStorage(o.RENDERBUFFER,ne,S.width,S.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,we,o.RENDERBUFFER,T)}else{const G=S.textures;for(let Z=0;Z<G.length;Z++){const ne=G[Z],we=c.convert(ne.format,ne.colorSpace),Me=c.convert(ne.type),Te=F(ne.internalFormat,we,Me,ne.colorSpace),je=qe(S);D&&q(S)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,je,Te,S.width,S.height):q(S)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,je,Te,S.width,S.height):o.renderbufferStorage(o.RENDERBUFFER,Te,S.width,S.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function j(T,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(o.FRAMEBUFFER,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),ye(S.depthTexture,0);const G=r.get(S.depthTexture).__webglTexture,Z=qe(S);if(S.depthTexture.format===Yo)q(S)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,G,0,Z):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,G,0);else if(S.depthTexture.format===Qo)q(S)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,G,0,Z):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,G,0);else throw new Error("Unknown depthTexture format")}function ge(T){const S=r.get(T),D=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!S.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");j(S.__webglFramebuffer,T)}else if(D){S.__webglDepthbuffer=[];for(let G=0;G<6;G++)n.bindFramebuffer(o.FRAMEBUFFER,S.__webglFramebuffer[G]),S.__webglDepthbuffer[G]=o.createRenderbuffer(),Ae(S.__webglDepthbuffer[G],T,!1)}else n.bindFramebuffer(o.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=o.createRenderbuffer(),Ae(S.__webglDepthbuffer,T,!1);n.bindFramebuffer(o.FRAMEBUFFER,null)}function oe(T,S,D){const G=r.get(T);S!==void 0&&Se(G.__webglFramebuffer,T,T.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),D!==void 0&&ge(T)}function Le(T){const S=T.texture,D=r.get(T),G=r.get(S);T.addEventListener("dispose",z);const Z=T.textures,ne=T.isWebGLCubeRenderTarget===!0,we=Z.length>1;if(we||(G.__webglTexture===void 0&&(G.__webglTexture=o.createTexture()),G.__version=S.version,d.memory.textures++),ne){D.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(S.mipmaps&&S.mipmaps.length>0){D.__webglFramebuffer[Me]=[];for(let Te=0;Te<S.mipmaps.length;Te++)D.__webglFramebuffer[Me][Te]=o.createFramebuffer()}else D.__webglFramebuffer[Me]=o.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){D.__webglFramebuffer=[];for(let Me=0;Me<S.mipmaps.length;Me++)D.__webglFramebuffer[Me]=o.createFramebuffer()}else D.__webglFramebuffer=o.createFramebuffer();if(we)for(let Me=0,Te=Z.length;Me<Te;Me++){const je=r.get(Z[Me]);je.__webglTexture===void 0&&(je.__webglTexture=o.createTexture(),d.memory.textures++)}if(T.samples>0&&q(T)===!1){D.__webglMultisampledFramebuffer=o.createFramebuffer(),D.__webglColorRenderbuffer=[],n.bindFramebuffer(o.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let Me=0;Me<Z.length;Me++){const Te=Z[Me];D.__webglColorRenderbuffer[Me]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,D.__webglColorRenderbuffer[Me]);const je=c.convert(Te.format,Te.colorSpace),Ee=c.convert(Te.type),Ne=F(Te.internalFormat,je,Ee,Te.colorSpace,T.isXRRenderTarget===!0),lt=qe(T);o.renderbufferStorageMultisample(o.RENDERBUFFER,lt,Ne,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Me,o.RENDERBUFFER,D.__webglColorRenderbuffer[Me])}o.bindRenderbuffer(o.RENDERBUFFER,null),T.depthBuffer&&(D.__webglDepthRenderbuffer=o.createRenderbuffer(),Ae(D.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ne){n.bindTexture(o.TEXTURE_CUBE_MAP,G.__webglTexture),k(o.TEXTURE_CUBE_MAP,S);for(let Me=0;Me<6;Me++)if(S.mipmaps&&S.mipmaps.length>0)for(let Te=0;Te<S.mipmaps.length;Te++)Se(D.__webglFramebuffer[Me][Te],T,S,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Te);else Se(D.__webglFramebuffer[Me],T,S,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);v(S)&&_(o.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(we){for(let Me=0,Te=Z.length;Me<Te;Me++){const je=Z[Me],Ee=r.get(je);n.bindTexture(o.TEXTURE_2D,Ee.__webglTexture),k(o.TEXTURE_2D,je),Se(D.__webglFramebuffer,T,je,o.COLOR_ATTACHMENT0+Me,o.TEXTURE_2D,0),v(je)&&_(o.TEXTURE_2D)}n.unbindTexture()}else{let Me=o.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Me=T.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(Me,G.__webglTexture),k(Me,S),S.mipmaps&&S.mipmaps.length>0)for(let Te=0;Te<S.mipmaps.length;Te++)Se(D.__webglFramebuffer[Te],T,S,o.COLOR_ATTACHMENT0,Me,Te);else Se(D.__webglFramebuffer,T,S,o.COLOR_ATTACHMENT0,Me,0);v(S)&&_(Me),n.unbindTexture()}T.depthBuffer&&ge(T)}function Ue(T){const S=T.textures;for(let D=0,G=S.length;D<G;D++){const Z=S[D];if(v(Z)){const ne=T.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,we=r.get(Z).__webglTexture;n.bindTexture(ne,we),_(ne),n.unbindTexture()}}}const N=[],Xe=[];function nt(T){if(T.samples>0){if(q(T)===!1){const S=T.textures,D=T.width,G=T.height;let Z=o.COLOR_BUFFER_BIT;const ne=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,we=r.get(T),Me=S.length>1;if(Me)for(let Te=0;Te<S.length;Te++)n.bindFramebuffer(o.FRAMEBUFFER,we.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Te,o.RENDERBUFFER,null),n.bindFramebuffer(o.FRAMEBUFFER,we.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Te,o.TEXTURE_2D,null,0);n.bindFramebuffer(o.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Te=0;Te<S.length;Te++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Z|=o.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Z|=o.STENCIL_BUFFER_BIT)),Me){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,we.__webglColorRenderbuffer[Te]);const je=r.get(S[Te]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,je,0)}o.blitFramebuffer(0,0,D,G,0,0,D,G,Z,o.NEAREST),h===!0&&(N.length=0,Xe.length=0,N.push(o.COLOR_ATTACHMENT0+Te),T.depthBuffer&&T.resolveDepthBuffer===!1&&(N.push(ne),Xe.push(ne),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Xe)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,N))}if(n.bindFramebuffer(o.READ_FRAMEBUFFER,null),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Me)for(let Te=0;Te<S.length;Te++){n.bindFramebuffer(o.FRAMEBUFFER,we.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Te,o.RENDERBUFFER,we.__webglColorRenderbuffer[Te]);const je=r.get(S[Te]).__webglTexture;n.bindFramebuffer(o.FRAMEBUFFER,we.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Te,o.TEXTURE_2D,je,0)}n.bindFramebuffer(o.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&h){const S=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[S])}}}function qe(T){return Math.min(a.maxSamples,T.samples)}function q(T){const S=r.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Fe(T){const S=d.render.frame;g.get(T)!==S&&(g.set(T,S),T.update())}function Oe(T,S){const D=T.colorSpace,G=T.format,Z=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||D!==Sr&&D!==gr&&(At.getTransfer(D)===It?(G!==ci||Z!==Bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),S}function ke(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(m.width=T.naturalWidth||T.width,m.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(m.width=T.displayWidth,m.height=T.displayHeight):(m.width=T.width,m.height=T.height),m}this.allocateTextureUnit=pe,this.resetTextureUnits=V,this.setTexture2D=ye,this.setTexture2DArray=ve,this.setTexture3D=le,this.setTextureCube=de,this.rebindTextures=oe,this.setupRenderTarget=Le,this.updateRenderTargetMipmap=Ue,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=q}function DE(o,e){function n(r,a=gr){let c;const d=At.getTransfer(a);if(r===Bi)return o.UNSIGNED_BYTE;if(r===Of)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Ff)return o.UNSIGNED_SHORT_5_5_5_1;if(r===Bm)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===km)return o.BYTE;if(r===zm)return o.SHORT;if(r===Gs)return o.UNSIGNED_SHORT;if(r===Uf)return o.INT;if(r===qr)return o.UNSIGNED_INT;if(r===Oi)return o.FLOAT;if(r===Xs)return o.HALF_FLOAT;if(r===Hm)return o.ALPHA;if(r===Vm)return o.RGB;if(r===ci)return o.RGBA;if(r===Gm)return o.LUMINANCE;if(r===Wm)return o.LUMINANCE_ALPHA;if(r===Yo)return o.DEPTH_COMPONENT;if(r===Qo)return o.DEPTH_STENCIL;if(r===Xm)return o.RED;if(r===kf)return o.RED_INTEGER;if(r===jm)return o.RG;if(r===zf)return o.RG_INTEGER;if(r===Bf)return o.RGBA_INTEGER;if(r===El||r===wl||r===Tl||r===Al)if(d===It)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===El)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===wl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Tl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Al)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===El)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===wl)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Tl)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Al)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===of||r===sf||r===af||r===lf)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===of)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===sf)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===af)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===lf)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===cf||r===uf||r===ff)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===cf||r===uf)return d===It?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===ff)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===df||r===hf||r===pf||r===mf||r===gf||r===_f||r===vf||r===xf||r===yf||r===Sf||r===Mf||r===Ef||r===wf||r===Tf)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===df)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===hf)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===pf)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===mf)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===gf)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===_f)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===vf)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===xf)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===yf)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Sf)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Mf)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ef)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===wf)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Tf)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Rl||r===Af||r===Rf)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Rl)return d===It?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Af)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Rf)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ym||r===Cf||r===bf||r===Pf)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Rl)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Cf)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===bf)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Pf)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Zo?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:n}}class NE extends Hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Wo extends Vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const IE={type:"move"};class qu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ee,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ee),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ee,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ee),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,c=null,d=null;const f=this._targetRay,h=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const C of e.hand.values()){const v=n.getJointPose(C,r),_=this._getHandJoint(m,C);v!==null&&(_.matrix.fromArray(v.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=v.radius),_.visible=v!==null}const g=m.joints["index-finger-tip"],y=m.joints["thumb-tip"],x=g.position.distanceTo(y.position),M=.02,R=.005;m.inputState.pinching&&x>M+R?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=M-R&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(h.matrix.fromArray(c.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,c.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(c.linearVelocity)):h.hasLinearVelocity=!1,c.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(c.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&c!==null&&(a=c),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(IE)))}return f!==null&&(f.visible=a!==null),h!==null&&(h.visible=c!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Wo;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const UE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,OE=`
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

}`;class FE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new wn,c=e.properties.get(a);c.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new yr({vertexShader:UE,fragmentShader:OE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Qn(new qs(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kE extends Qr{constructor(e,n){super();const r=this;let a=null,c=1,d=null,f="local-floor",h=1,m=null,g=null,y=null,x=null,M=null,R=null;const C=new FE,v=n.getContextAttributes();let _=null,F=null;const P=[],U=[],J=new ht;let z=null;const O=new Hn;O.layers.enable(1),O.viewport=new sn;const $=new Hn;$.layers.enable(2),$.viewport=new sn;const L=[O,$],A=new NE;A.layers.enable(1),A.layers.enable(2);let V=null,pe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let Se=P[te];return Se===void 0&&(Se=new qu,P[te]=Se),Se.getTargetRaySpace()},this.getControllerGrip=function(te){let Se=P[te];return Se===void 0&&(Se=new qu,P[te]=Se),Se.getGripSpace()},this.getHand=function(te){let Se=P[te];return Se===void 0&&(Se=new qu,P[te]=Se),Se.getHandSpace()};function K(te){const Se=U.indexOf(te.inputSource);if(Se===-1)return;const Ae=P[Se];Ae!==void 0&&(Ae.update(te.inputSource,te.frame,m||d),Ae.dispatchEvent({type:te.type,data:te.inputSource}))}function ye(){a.removeEventListener("select",K),a.removeEventListener("selectstart",K),a.removeEventListener("selectend",K),a.removeEventListener("squeeze",K),a.removeEventListener("squeezestart",K),a.removeEventListener("squeezeend",K),a.removeEventListener("end",ye),a.removeEventListener("inputsourceschange",ve);for(let te=0;te<P.length;te++){const Se=U[te];Se!==null&&(U[te]=null,P[te].disconnect(Se))}V=null,pe=null,C.reset(),e.setRenderTarget(_),M=null,x=null,y=null,a=null,F=null,He.stop(),r.isPresenting=!1,e.setPixelRatio(z),e.setSize(J.width,J.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){c=te,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){f=te,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(te){m=te},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return y},this.getFrame=function(){return R},this.getSession=function(){return a},this.setSession=async function(te){if(a=te,a!==null){if(_=e.getRenderTarget(),a.addEventListener("select",K),a.addEventListener("selectstart",K),a.addEventListener("selectend",K),a.addEventListener("squeeze",K),a.addEventListener("squeezestart",K),a.addEventListener("squeezeend",K),a.addEventListener("end",ye),a.addEventListener("inputsourceschange",ve),v.xrCompatible!==!0&&await n.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(J),a.renderState.layers===void 0){const Se={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(a,n,Se),a.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),F=new $r(M.framebufferWidth,M.framebufferHeight,{format:ci,type:Bi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let Se=null,Ae=null,j=null;v.depth&&(j=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Se=v.stencil?Qo:Yo,Ae=v.stencil?Zo:qr);const ge={colorFormat:n.RGBA8,depthFormat:j,scaleFactor:c};y=new XRWebGLBinding(a,n),x=y.createProjectionLayer(ge),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),F=new $r(x.textureWidth,x.textureHeight,{format:ci,type:Bi,depthTexture:new ag(x.textureWidth,x.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}F.isXRRenderTarget=!0,this.setFoveation(h),m=null,d=await a.requestReferenceSpace(f),He.setContext(a),He.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return C.getDepthTexture()};function ve(te){for(let Se=0;Se<te.removed.length;Se++){const Ae=te.removed[Se],j=U.indexOf(Ae);j>=0&&(U[j]=null,P[j].disconnect(Ae))}for(let Se=0;Se<te.added.length;Se++){const Ae=te.added[Se];let j=U.indexOf(Ae);if(j===-1){for(let oe=0;oe<P.length;oe++)if(oe>=U.length){U.push(Ae),j=oe;break}else if(U[oe]===null){U[oe]=Ae,j=oe;break}if(j===-1)break}const ge=P[j];ge&&ge.connect(Ae)}}const le=new ee,de=new ee;function B(te,Se,Ae){le.setFromMatrixPosition(Se.matrixWorld),de.setFromMatrixPosition(Ae.matrixWorld);const j=le.distanceTo(de),ge=Se.projectionMatrix.elements,oe=Ae.projectionMatrix.elements,Le=ge[14]/(ge[10]-1),Ue=ge[14]/(ge[10]+1),N=(ge[9]+1)/ge[5],Xe=(ge[9]-1)/ge[5],nt=(ge[8]-1)/ge[0],qe=(oe[8]+1)/oe[0],q=Le*nt,Fe=Le*qe,Oe=j/(-nt+qe),ke=Oe*-nt;Se.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(ke),te.translateZ(Oe),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert();const T=Le+Oe,S=Ue+Oe,D=q-ke,G=Fe+(j-ke),Z=N*Ue/S*T,ne=Xe*Ue/S*T;te.projectionMatrix.makePerspective(D,G,Z,ne,T,S),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}function xe(te,Se){Se===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(Se.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(a===null)return;C.texture!==null&&(te.near=C.depthNear,te.far=C.depthFar),A.near=$.near=O.near=te.near,A.far=$.far=O.far=te.far,(V!==A.near||pe!==A.far)&&(a.updateRenderState({depthNear:A.near,depthFar:A.far}),V=A.near,pe=A.far,O.near=V,O.far=pe,$.near=V,$.far=pe,O.updateProjectionMatrix(),$.updateProjectionMatrix(),te.updateProjectionMatrix());const Se=te.parent,Ae=A.cameras;xe(A,Se);for(let j=0;j<Ae.length;j++)xe(Ae[j],Se);Ae.length===2?B(A,O,$):A.projectionMatrix.copy(O.projectionMatrix),me(te,A,Se)};function me(te,Se,Ae){Ae===null?te.matrix.copy(Se.matrixWorld):(te.matrix.copy(Ae.matrixWorld),te.matrix.invert(),te.matrix.multiply(Se.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(Se.projectionMatrix),te.projectionMatrixInverse.copy(Se.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Ws*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(x===null&&M===null))return h},this.setFoveation=function(te){h=te,x!==null&&(x.fixedFoveation=te),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=te)},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(A)};let k=null;function ce(te,Se){if(g=Se.getViewerPose(m||d),R=Se,g!==null){const Ae=g.views;M!==null&&(e.setRenderTargetFramebuffer(F,M.framebuffer),e.setRenderTarget(F));let j=!1;Ae.length!==A.cameras.length&&(A.cameras.length=0,j=!0);for(let oe=0;oe<Ae.length;oe++){const Le=Ae[oe];let Ue=null;if(M!==null)Ue=M.getViewport(Le);else{const Xe=y.getViewSubImage(x,Le);Ue=Xe.viewport,oe===0&&(e.setRenderTargetTextures(F,Xe.colorTexture,x.ignoreDepthValues?void 0:Xe.depthStencilTexture),e.setRenderTarget(F))}let N=L[oe];N===void 0&&(N=new Hn,N.layers.enable(oe),N.viewport=new sn,L[oe]=N),N.matrix.fromArray(Le.transform.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale),N.projectionMatrix.fromArray(Le.projectionMatrix),N.projectionMatrixInverse.copy(N.projectionMatrix).invert(),N.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),oe===0&&(A.matrix.copy(N.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),j===!0&&A.cameras.push(N)}const ge=a.enabledFeatures;if(ge&&ge.includes("depth-sensing")){const oe=y.getDepthInformation(Ae[0]);oe&&oe.isValid&&oe.texture&&C.init(e,oe,a.renderState)}}for(let Ae=0;Ae<P.length;Ae++){const j=U[Ae],ge=P[Ae];j!==null&&ge!==void 0&&ge.update(j,Se,m||d)}k&&k(te,Se),Se.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Se}),R=null}const He=new sg;He.setAnimationLoop(ce),this.setAnimationLoop=function(te){k=te},this.dispose=function(){}}}const Vr=new cn,zE=new qt;function BE(o,e){function n(v,_){v.matrixAutoUpdate===!0&&v.updateMatrix(),_.value.copy(v.matrix)}function r(v,_){_.color.getRGB(v.fogColor.value,ng(o)),_.isFog?(v.fogNear.value=_.near,v.fogFar.value=_.far):_.isFogExp2&&(v.fogDensity.value=_.density)}function a(v,_,F,P,U){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(v,_):_.isMeshToonMaterial?(c(v,_),y(v,_)):_.isMeshPhongMaterial?(c(v,_),g(v,_)):_.isMeshStandardMaterial?(c(v,_),x(v,_),_.isMeshPhysicalMaterial&&M(v,_,U)):_.isMeshMatcapMaterial?(c(v,_),R(v,_)):_.isMeshDepthMaterial?c(v,_):_.isMeshDistanceMaterial?(c(v,_),C(v,_)):_.isMeshNormalMaterial?c(v,_):_.isLineBasicMaterial?(d(v,_),_.isLineDashedMaterial&&f(v,_)):_.isPointsMaterial?h(v,_,F,P):_.isSpriteMaterial?m(v,_):_.isShadowMaterial?(v.color.value.copy(_.color),v.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(v,_){v.opacity.value=_.opacity,_.color&&v.diffuse.value.copy(_.color),_.emissive&&v.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(v.map.value=_.map,n(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,n(_.alphaMap,v.alphaMapTransform)),_.bumpMap&&(v.bumpMap.value=_.bumpMap,n(_.bumpMap,v.bumpMapTransform),v.bumpScale.value=_.bumpScale,_.side===En&&(v.bumpScale.value*=-1)),_.normalMap&&(v.normalMap.value=_.normalMap,n(_.normalMap,v.normalMapTransform),v.normalScale.value.copy(_.normalScale),_.side===En&&v.normalScale.value.negate()),_.displacementMap&&(v.displacementMap.value=_.displacementMap,n(_.displacementMap,v.displacementMapTransform),v.displacementScale.value=_.displacementScale,v.displacementBias.value=_.displacementBias),_.emissiveMap&&(v.emissiveMap.value=_.emissiveMap,n(_.emissiveMap,v.emissiveMapTransform)),_.specularMap&&(v.specularMap.value=_.specularMap,n(_.specularMap,v.specularMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest);const F=e.get(_),P=F.envMap,U=F.envMapRotation;P&&(v.envMap.value=P,Vr.copy(U),Vr.x*=-1,Vr.y*=-1,Vr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Vr.y*=-1,Vr.z*=-1),v.envMapRotation.value.setFromMatrix4(zE.makeRotationFromEuler(Vr)),v.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=_.reflectivity,v.ior.value=_.ior,v.refractionRatio.value=_.refractionRatio),_.lightMap&&(v.lightMap.value=_.lightMap,v.lightMapIntensity.value=_.lightMapIntensity,n(_.lightMap,v.lightMapTransform)),_.aoMap&&(v.aoMap.value=_.aoMap,v.aoMapIntensity.value=_.aoMapIntensity,n(_.aoMap,v.aoMapTransform))}function d(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,_.map&&(v.map.value=_.map,n(_.map,v.mapTransform))}function f(v,_){v.dashSize.value=_.dashSize,v.totalSize.value=_.dashSize+_.gapSize,v.scale.value=_.scale}function h(v,_,F,P){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.size.value=_.size*F,v.scale.value=P*.5,_.map&&(v.map.value=_.map,n(_.map,v.uvTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,n(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function m(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.rotation.value=_.rotation,_.map&&(v.map.value=_.map,n(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,n(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function g(v,_){v.specular.value.copy(_.specular),v.shininess.value=Math.max(_.shininess,1e-4)}function y(v,_){_.gradientMap&&(v.gradientMap.value=_.gradientMap)}function x(v,_){v.metalness.value=_.metalness,_.metalnessMap&&(v.metalnessMap.value=_.metalnessMap,n(_.metalnessMap,v.metalnessMapTransform)),v.roughness.value=_.roughness,_.roughnessMap&&(v.roughnessMap.value=_.roughnessMap,n(_.roughnessMap,v.roughnessMapTransform)),_.envMap&&(v.envMapIntensity.value=_.envMapIntensity)}function M(v,_,F){v.ior.value=_.ior,_.sheen>0&&(v.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),v.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(v.sheenColorMap.value=_.sheenColorMap,n(_.sheenColorMap,v.sheenColorMapTransform)),_.sheenRoughnessMap&&(v.sheenRoughnessMap.value=_.sheenRoughnessMap,n(_.sheenRoughnessMap,v.sheenRoughnessMapTransform))),_.clearcoat>0&&(v.clearcoat.value=_.clearcoat,v.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(v.clearcoatMap.value=_.clearcoatMap,n(_.clearcoatMap,v.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,n(_.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(v.clearcoatNormalMap.value=_.clearcoatNormalMap,n(_.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===En&&v.clearcoatNormalScale.value.negate())),_.dispersion>0&&(v.dispersion.value=_.dispersion),_.iridescence>0&&(v.iridescence.value=_.iridescence,v.iridescenceIOR.value=_.iridescenceIOR,v.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(v.iridescenceMap.value=_.iridescenceMap,n(_.iridescenceMap,v.iridescenceMapTransform)),_.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=_.iridescenceThicknessMap,n(_.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),_.transmission>0&&(v.transmission.value=_.transmission,v.transmissionSamplerMap.value=F.texture,v.transmissionSamplerSize.value.set(F.width,F.height),_.transmissionMap&&(v.transmissionMap.value=_.transmissionMap,n(_.transmissionMap,v.transmissionMapTransform)),v.thickness.value=_.thickness,_.thicknessMap&&(v.thicknessMap.value=_.thicknessMap,n(_.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=_.attenuationDistance,v.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(v.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(v.anisotropyMap.value=_.anisotropyMap,n(_.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=_.specularIntensity,v.specularColor.value.copy(_.specularColor),_.specularColorMap&&(v.specularColorMap.value=_.specularColorMap,n(_.specularColorMap,v.specularColorMapTransform)),_.specularIntensityMap&&(v.specularIntensityMap.value=_.specularIntensityMap,n(_.specularIntensityMap,v.specularIntensityMapTransform))}function R(v,_){_.matcap&&(v.matcap.value=_.matcap)}function C(v,_){const F=e.get(_).light;v.referencePosition.value.setFromMatrixPosition(F.matrixWorld),v.nearDistance.value=F.shadow.camera.near,v.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function HE(o,e,n,r){let a={},c={},d=[];const f=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function h(F,P){const U=P.program;r.uniformBlockBinding(F,U)}function m(F,P){let U=a[F.id];U===void 0&&(R(F),U=g(F),a[F.id]=U,F.addEventListener("dispose",v));const J=P.program;r.updateUBOMapping(F,J);const z=e.render.frame;c[F.id]!==z&&(x(F),c[F.id]=z)}function g(F){const P=y();F.__bindingPointIndex=P;const U=o.createBuffer(),J=F.__size,z=F.usage;return o.bindBuffer(o.UNIFORM_BUFFER,U),o.bufferData(o.UNIFORM_BUFFER,J,z),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,P,U),U}function y(){for(let F=0;F<f;F++)if(d.indexOf(F)===-1)return d.push(F),F;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(F){const P=a[F.id],U=F.uniforms,J=F.__cache;o.bindBuffer(o.UNIFORM_BUFFER,P);for(let z=0,O=U.length;z<O;z++){const $=Array.isArray(U[z])?U[z]:[U[z]];for(let L=0,A=$.length;L<A;L++){const V=$[L];if(M(V,z,L,J)===!0){const pe=V.__offset,K=Array.isArray(V.value)?V.value:[V.value];let ye=0;for(let ve=0;ve<K.length;ve++){const le=K[ve],de=C(le);typeof le=="number"||typeof le=="boolean"?(V.__data[0]=le,o.bufferSubData(o.UNIFORM_BUFFER,pe+ye,V.__data)):le.isMatrix3?(V.__data[0]=le.elements[0],V.__data[1]=le.elements[1],V.__data[2]=le.elements[2],V.__data[3]=0,V.__data[4]=le.elements[3],V.__data[5]=le.elements[4],V.__data[6]=le.elements[5],V.__data[7]=0,V.__data[8]=le.elements[6],V.__data[9]=le.elements[7],V.__data[10]=le.elements[8],V.__data[11]=0):(le.toArray(V.__data,ye),ye+=de.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,pe,V.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(F,P,U,J){const z=F.value,O=P+"_"+U;if(J[O]===void 0)return typeof z=="number"||typeof z=="boolean"?J[O]=z:J[O]=z.clone(),!0;{const $=J[O];if(typeof z=="number"||typeof z=="boolean"){if($!==z)return J[O]=z,!0}else if($.equals(z)===!1)return $.copy(z),!0}return!1}function R(F){const P=F.uniforms;let U=0;const J=16;for(let O=0,$=P.length;O<$;O++){const L=Array.isArray(P[O])?P[O]:[P[O]];for(let A=0,V=L.length;A<V;A++){const pe=L[A],K=Array.isArray(pe.value)?pe.value:[pe.value];for(let ye=0,ve=K.length;ye<ve;ye++){const le=K[ye],de=C(le),B=U%J;B!==0&&J-B<de.boundary&&(U+=J-B),pe.__data=new Float32Array(de.storage/Float32Array.BYTES_PER_ELEMENT),pe.__offset=U,U+=de.storage}}}const z=U%J;return z>0&&(U+=J-z),F.__size=U,F.__cache={},this}function C(F){const P={boundary:0,storage:0};return typeof F=="number"||typeof F=="boolean"?(P.boundary=4,P.storage=4):F.isVector2?(P.boundary=8,P.storage=8):F.isVector3||F.isColor?(P.boundary=16,P.storage=12):F.isVector4?(P.boundary=16,P.storage=16):F.isMatrix3?(P.boundary=48,P.storage=48):F.isMatrix4?(P.boundary=64,P.storage=64):F.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",F),P}function v(F){const P=F.target;P.removeEventListener("dispose",v);const U=d.indexOf(P.__bindingPointIndex);d.splice(U,1),o.deleteBuffer(a[P.id]),delete a[P.id],delete c[P.id]}function _(){for(const F in a)o.deleteBuffer(a[F]);d=[],a={},c={}}return{bind:h,update:m,dispose:_}}class dg{constructor(e={}){const{canvas:n=Dv(),context:r=null,depth:a=!0,stencil:c=!1,alpha:d=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:y=!1}=e;this.isWebGLRenderer=!0;let x;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=r.getContextAttributes().alpha}else x=d;const M=new Uint32Array(4),R=new Int32Array(4);let C=null,v=null;const _=[],F=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kn,this.toneMapping=xr,this.toneMappingExposure=1;const P=this;let U=!1,J=0,z=0,O=null,$=-1,L=null;const A=new sn,V=new sn;let pe=null;const K=new Rt(0);let ye=0,ve=n.width,le=n.height,de=1,B=null,xe=null;const me=new sn(0,0,ve,le),k=new sn(0,0,ve,le);let ce=!1;const He=new og;let te=!1,Se=!1;const Ae=new qt,j=new ee,ge=new sn,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Le=!1;function Ue(){return O===null?de:1}let N=r;function Xe(b,X){return n.getContext(b,X)}try{const b={alpha:!0,depth:a,stencil:c,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:y};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${If}`),n.addEventListener("webglcontextlost",se,!1),n.addEventListener("webglcontextrestored",he,!1),n.addEventListener("webglcontextcreationerror",Ce,!1),N===null){const X="webgl2";if(N=Xe(X,b),N===null)throw Xe(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let nt,qe,q,Fe,Oe,ke,T,S,D,G,Z,ne,we,Me,Te,je,Ee,Ne,lt,Ke,Be,Je,rt,yt;function E(){nt=new $S(N),nt.init(),Je=new DE(N,nt),qe=new VS(N,nt,e,Je),q=new bE(N),Fe=new QS(N),Oe=new mE,ke=new LE(N,nt,q,Oe,qe,Je,Fe),T=new WS(P),S=new qS(P),D=new rx(N),rt=new BS(N,D),G=new KS(N,D,Fe,rt),Z=new eM(N,G,D,Fe),lt=new JS(N,qe,ke),je=new GS(Oe),ne=new pE(P,T,S,nt,qe,rt,je),we=new BE(P,Oe),Me=new _E,Te=new EE(nt),Ne=new zS(P,T,S,q,Z,x,h),Ee=new CE(P,Z,qe),yt=new HE(N,Fe,qe,q),Ke=new HS(N,nt,Fe),Be=new ZS(N,nt,Fe),Fe.programs=ne.programs,P.capabilities=qe,P.extensions=nt,P.properties=Oe,P.renderLists=Me,P.shadowMap=Ee,P.state=q,P.info=Fe}E();const ie=new kE(P,N);this.xr=ie,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const b=nt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=nt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(b){b!==void 0&&(de=b,this.setSize(ve,le,!1))},this.getSize=function(b){return b.set(ve,le)},this.setSize=function(b,X,ae=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ve=b,le=X,n.width=Math.floor(b*de),n.height=Math.floor(X*de),ae===!0&&(n.style.width=b+"px",n.style.height=X+"px"),this.setViewport(0,0,b,X)},this.getDrawingBufferSize=function(b){return b.set(ve*de,le*de).floor()},this.setDrawingBufferSize=function(b,X,ae){ve=b,le=X,de=ae,n.width=Math.floor(b*ae),n.height=Math.floor(X*ae),this.setViewport(0,0,b,X)},this.getCurrentViewport=function(b){return b.copy(A)},this.getViewport=function(b){return b.copy(me)},this.setViewport=function(b,X,ae,fe){b.isVector4?me.set(b.x,b.y,b.z,b.w):me.set(b,X,ae,fe),q.viewport(A.copy(me).multiplyScalar(de).round())},this.getScissor=function(b){return b.copy(k)},this.setScissor=function(b,X,ae,fe){b.isVector4?k.set(b.x,b.y,b.z,b.w):k.set(b,X,ae,fe),q.scissor(V.copy(k).multiplyScalar(de).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(b){q.setScissorTest(ce=b)},this.setOpaqueSort=function(b){B=b},this.setTransparentSort=function(b){xe=b},this.getClearColor=function(b){return b.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor.apply(Ne,arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha.apply(Ne,arguments)},this.clear=function(b=!0,X=!0,ae=!0){let fe=0;if(b){let Y=!1;if(O!==null){const Ie=O.texture.format;Y=Ie===Bf||Ie===zf||Ie===kf}if(Y){const Ie=O.texture.type,Ge=Ie===Bi||Ie===qr||Ie===Gs||Ie===Zo||Ie===Of||Ie===Ff,Ze=Ne.getClearColor(),ze=Ne.getClearAlpha(),ft=Ze.r,ct=Ze.g,ot=Ze.b;Ge?(M[0]=ft,M[1]=ct,M[2]=ot,M[3]=ze,N.clearBufferuiv(N.COLOR,0,M)):(R[0]=ft,R[1]=ct,R[2]=ot,R[3]=ze,N.clearBufferiv(N.COLOR,0,R))}else fe|=N.COLOR_BUFFER_BIT}X&&(fe|=N.DEPTH_BUFFER_BIT),ae&&(fe|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(fe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",se,!1),n.removeEventListener("webglcontextrestored",he,!1),n.removeEventListener("webglcontextcreationerror",Ce,!1),Me.dispose(),Te.dispose(),Oe.dispose(),T.dispose(),S.dispose(),Z.dispose(),rt.dispose(),yt.dispose(),ne.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",zt),ie.removeEventListener("sessionend",Tn),Wt.stop()};function se(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const b=Fe.autoReset,X=Ee.enabled,ae=Ee.autoUpdate,fe=Ee.needsUpdate,Y=Ee.type;E(),Fe.autoReset=b,Ee.enabled=X,Ee.autoUpdate=ae,Ee.needsUpdate=fe,Ee.type=Y}function Ce(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function tt(b){const X=b.target;X.removeEventListener("dispose",tt),ut(X)}function ut(b){Ut(b),Oe.remove(b)}function Ut(b){const X=Oe.get(b).programs;X!==void 0&&(X.forEach(function(ae){ne.releaseProgram(ae)}),b.isShaderMaterial&&ne.releaseShaderCache(b))}this.renderBufferDirect=function(b,X,ae,fe,Y,Ie){X===null&&(X=oe);const Ge=Y.isMesh&&Y.matrixWorld.determinant()<0,Ze=Bl(b,X,ae,fe,Y);q.setMaterial(fe,Ge);let ze=ae.index,ft=1;if(fe.wireframe===!0){if(ze=G.getWireframeAttribute(ae),ze===void 0)return;ft=2}const ct=ae.drawRange,ot=ae.attributes.position;let xt=ct.start*ft,Ot=(ct.start+ct.count)*ft;Ie!==null&&(xt=Math.max(xt,Ie.start*ft),Ot=Math.min(Ot,(Ie.start+Ie.count)*ft)),ze!==null?(xt=Math.max(xt,0),Ot=Math.min(Ot,ze.count)):ot!=null&&(xt=Math.max(xt,0),Ot=Math.min(Ot,ot.count));const Lt=Ot-xt;if(Lt<0||Lt===1/0)return;rt.setup(Y,fe,Ze,ae,ze);let Jt,pt=Ke;if(ze!==null&&(Jt=D.get(ze),pt=Be,pt.setIndex(Jt)),Y.isMesh)fe.wireframe===!0?(q.setLineWidth(fe.wireframeLinewidth*Ue()),pt.setMode(N.LINES)):pt.setMode(N.TRIANGLES);else if(Y.isLine){let it=fe.linewidth;it===void 0&&(it=1),q.setLineWidth(it*Ue()),Y.isLineSegments?pt.setMode(N.LINES):Y.isLineLoop?pt.setMode(N.LINE_LOOP):pt.setMode(N.LINE_STRIP)}else Y.isPoints?pt.setMode(N.POINTS):Y.isSprite&&pt.setMode(N.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)pt.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(nt.get("WEBGL_multi_draw"))pt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const it=Y._multiDrawStarts,wt=Y._multiDrawCounts,Mt=Y._multiDrawCount,Nn=ze?D.get(ze).bytesPerElement:1,Vi=Oe.get(fe).currentProgram.getUniforms();for(let en=0;en<Mt;en++)Vi.setValue(N,"_gl_DrawID",en),pt.render(it[en]/Nn,wt[en])}else if(Y.isInstancedMesh)pt.renderInstances(xt,Lt,Y.count);else if(ae.isInstancedBufferGeometry){const it=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,wt=Math.min(ae.instanceCount,it);pt.renderInstances(xt,Lt,wt)}else pt.render(xt,Lt)};function Vt(b,X,ae){b.transparent===!0&&b.side===gi&&b.forceSinglePass===!1?(b.side=En,b.needsUpdate=!0,Hi(b,X,ae),b.side=zi,b.needsUpdate=!0,Hi(b,X,ae),b.side=gi):Hi(b,X,ae)}this.compile=function(b,X,ae=null){ae===null&&(ae=b),v=Te.get(ae),v.init(X),F.push(v),ae.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(v.pushLight(Y),Y.castShadow&&v.pushShadow(Y))}),b!==ae&&b.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(v.pushLight(Y),Y.castShadow&&v.pushShadow(Y))}),v.setupLights();const fe=new Set;return b.traverse(function(Y){const Ie=Y.material;if(Ie)if(Array.isArray(Ie))for(let Ge=0;Ge<Ie.length;Ge++){const Ze=Ie[Ge];Vt(Ze,ae,Y),fe.add(Ze)}else Vt(Ie,ae,Y),fe.add(Ie)}),F.pop(),v=null,fe},this.compileAsync=function(b,X,ae=null){const fe=this.compile(b,X,ae);return new Promise(Y=>{function Ie(){if(fe.forEach(function(Ge){Oe.get(Ge).currentProgram.isReady()&&fe.delete(Ge)}),fe.size===0){Y(b);return}setTimeout(Ie,10)}nt.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let vt=null;function kt(b){vt&&vt(b)}function zt(){Wt.stop()}function Tn(){Wt.start()}const Wt=new sg;Wt.setAnimationLoop(kt),typeof self<"u"&&Wt.setContext(self),this.setAnimationLoop=function(b){vt=b,ie.setAnimationLoop(b),b===null?Wt.stop():Wt.start()},ie.addEventListener("sessionstart",zt),ie.addEventListener("sessionend",Tn),this.render=function(b,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(X),X=ie.getCamera()),b.isScene===!0&&b.onBeforeRender(P,b,X,O),v=Te.get(b,F.length),v.init(X),F.push(v),Ae.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),He.setFromProjectionMatrix(Ae),Se=this.localClippingEnabled,te=je.init(this.clippingPlanes,Se),C=Me.get(b,_.length),C.init(),_.push(C),ie.enabled===!0&&ie.isPresenting===!0){const Ie=P.xr.getDepthSensingMesh();Ie!==null&&_n(Ie,X,-1/0,P.sortObjects)}_n(b,X,0,P.sortObjects),C.finish(),P.sortObjects===!0&&C.sort(B,xe),Le=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,Le&&Ne.addToRenderList(C,b),this.info.render.frame++,te===!0&&je.beginShadows();const ae=v.state.shadowsArray;Ee.render(ae,b,X),te===!0&&je.endShadows(),this.info.autoReset===!0&&this.info.reset();const fe=C.opaque,Y=C.transmissive;if(v.setupLights(),X.isArrayCamera){const Ie=X.cameras;if(Y.length>0)for(let Ge=0,Ze=Ie.length;Ge<Ze;Ge++){const ze=Ie[Ge];Jn(fe,Y,b,ze)}Le&&Ne.render(b);for(let Ge=0,Ze=Ie.length;Ge<Ze;Ge++){const ze=Ie[Ge];xi(C,b,ze,ze.viewport)}}else Y.length>0&&Jn(fe,Y,b,X),Le&&Ne.render(b),xi(C,b,X);O!==null&&(ke.updateMultisampleRenderTarget(O),ke.updateRenderTargetMipmap(O)),b.isScene===!0&&b.onAfterRender(P,b,X),rt.resetDefaultState(),$=-1,L=null,F.pop(),F.length>0?(v=F[F.length-1],te===!0&&je.setGlobalState(P.clippingPlanes,v.state.camera)):v=null,_.pop(),_.length>0?C=_[_.length-1]:C=null};function _n(b,X,ae,fe){if(b.visible===!1)return;if(b.layers.test(X.layers)){if(b.isGroup)ae=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(X);else if(b.isLight)v.pushLight(b),b.castShadow&&v.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||He.intersectsSprite(b)){fe&&ge.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ae);const Ge=Z.update(b),Ze=b.material;Ze.visible&&C.push(b,Ge,Ze,ae,ge.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||He.intersectsObject(b))){const Ge=Z.update(b),Ze=b.material;if(fe&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ge.copy(b.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),ge.copy(Ge.boundingSphere.center)),ge.applyMatrix4(b.matrixWorld).applyMatrix4(Ae)),Array.isArray(Ze)){const ze=Ge.groups;for(let ft=0,ct=ze.length;ft<ct;ft++){const ot=ze[ft],xt=Ze[ot.materialIndex];xt&&xt.visible&&C.push(b,Ge,xt,ae,ge.z,ot)}}else Ze.visible&&C.push(b,Ge,Ze,ae,ge.z,null)}}const Ie=b.children;for(let Ge=0,Ze=Ie.length;Ge<Ze;Ge++)_n(Ie[Ge],X,ae,fe)}function xi(b,X,ae,fe){const Y=b.opaque,Ie=b.transmissive,Ge=b.transparent;v.setupLightsView(ae),te===!0&&je.setGlobalState(P.clippingPlanes,ae),fe&&q.viewport(A.copy(fe)),Y.length>0&&yi(Y,X,ae),Ie.length>0&&yi(Ie,X,ae),Ge.length>0&&yi(Ge,X,ae),q.buffers.depth.setTest(!0),q.buffers.depth.setMask(!0),q.buffers.color.setMask(!0),q.setPolygonOffset(!1)}function Jn(b,X,ae,fe){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[fe.id]===void 0&&(v.state.transmissionRenderTarget[fe.id]=new $r(1,1,{generateMipmaps:!0,type:nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float")?Xs:Bi,minFilter:Yr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace}));const Ie=v.state.transmissionRenderTarget[fe.id],Ge=fe.viewport||A;Ie.setSize(Ge.z,Ge.w);const Ze=P.getRenderTarget();P.setRenderTarget(Ie),P.getClearColor(K),ye=P.getClearAlpha(),ye<1&&P.setClearColor(16777215,.5),Le?Ne.render(ae):P.clear();const ze=P.toneMapping;P.toneMapping=xr;const ft=fe.viewport;if(fe.viewport!==void 0&&(fe.viewport=void 0),v.setupLightsView(fe),te===!0&&je.setGlobalState(P.clippingPlanes,fe),yi(b,ae,fe),ke.updateMultisampleRenderTarget(Ie),ke.updateRenderTargetMipmap(Ie),nt.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let ot=0,xt=X.length;ot<xt;ot++){const Ot=X[ot],Lt=Ot.object,Jt=Ot.geometry,pt=Ot.material,it=Ot.group;if(pt.side===gi&&Lt.layers.test(fe.layers)){const wt=pt.side;pt.side=En,pt.needsUpdate=!0,Er(Lt,ae,fe,Jt,pt,it),pt.side=wt,pt.needsUpdate=!0,ct=!0}}ct===!0&&(ke.updateMultisampleRenderTarget(Ie),ke.updateRenderTargetMipmap(Ie))}P.setRenderTarget(Ze),P.setClearColor(K,ye),ft!==void 0&&(fe.viewport=ft),P.toneMapping=ze}function yi(b,X,ae){const fe=X.isScene===!0?X.overrideMaterial:null;for(let Y=0,Ie=b.length;Y<Ie;Y++){const Ge=b[Y],Ze=Ge.object,ze=Ge.geometry,ft=fe===null?Ge.material:fe,ct=Ge.group;Ze.layers.test(ae.layers)&&Er(Ze,X,ae,ze,ft,ct)}}function Er(b,X,ae,fe,Y,Ie){b.onBeforeRender(P,X,ae,fe,Y,Ie),b.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Y.transparent===!0&&Y.side===gi&&Y.forceSinglePass===!1?(Y.side=En,Y.needsUpdate=!0,P.renderBufferDirect(ae,X,fe,Y,b,Ie),Y.side=zi,Y.needsUpdate=!0,P.renderBufferDirect(ae,X,fe,Y,b,Ie),Y.side=gi):P.renderBufferDirect(ae,X,fe,Y,b,Ie),b.onAfterRender(P,X,ae,fe,Y,Ie)}function Hi(b,X,ae){X.isScene!==!0&&(X=oe);const fe=Oe.get(b),Y=v.state.lights,Ie=v.state.shadowsArray,Ge=Y.state.version,Ze=ne.getParameters(b,Y.state,Ie,X,ae),ze=ne.getProgramCacheKey(Ze);let ft=fe.programs;fe.environment=b.isMeshStandardMaterial?X.environment:null,fe.fog=X.fog,fe.envMap=(b.isMeshStandardMaterial?S:T).get(b.envMap||fe.environment),fe.envMapRotation=fe.environment!==null&&b.envMap===null?X.environmentRotation:b.envMapRotation,ft===void 0&&(b.addEventListener("dispose",tt),ft=new Map,fe.programs=ft);let ct=ft.get(ze);if(ct!==void 0){if(fe.currentProgram===ct&&fe.lightsStateVersion===Ge)return Ks(b,Ze),ct}else Ze.uniforms=ne.getUniforms(b),b.onBeforeCompile(Ze,P),ct=ne.acquireProgram(Ze,ze),ft.set(ze,ct),fe.uniforms=Ze.uniforms;const ot=fe.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(ot.clippingPlanes=je.uniform),Ks(b,Ze),fe.needsLights=Zs(b),fe.lightsStateVersion=Ge,fe.needsLights&&(ot.ambientLightColor.value=Y.state.ambient,ot.lightProbe.value=Y.state.probe,ot.directionalLights.value=Y.state.directional,ot.directionalLightShadows.value=Y.state.directionalShadow,ot.spotLights.value=Y.state.spot,ot.spotLightShadows.value=Y.state.spotShadow,ot.rectAreaLights.value=Y.state.rectArea,ot.ltc_1.value=Y.state.rectAreaLTC1,ot.ltc_2.value=Y.state.rectAreaLTC2,ot.pointLights.value=Y.state.point,ot.pointLightShadows.value=Y.state.pointShadow,ot.hemisphereLights.value=Y.state.hemi,ot.directionalShadowMap.value=Y.state.directionalShadowMap,ot.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,ot.spotShadowMap.value=Y.state.spotShadowMap,ot.spotLightMatrix.value=Y.state.spotLightMatrix,ot.spotLightMap.value=Y.state.spotLightMap,ot.pointShadowMap.value=Y.state.pointShadowMap,ot.pointShadowMatrix.value=Y.state.pointShadowMatrix),fe.currentProgram=ct,fe.uniformsList=null,ct}function $s(b){if(b.uniformsList===null){const X=b.currentProgram.getUniforms();b.uniformsList=Cl.seqWithValue(X.seq,b.uniforms)}return b.uniformsList}function Ks(b,X){const ae=Oe.get(b);ae.outputColorSpace=X.outputColorSpace,ae.batching=X.batching,ae.batchingColor=X.batchingColor,ae.instancing=X.instancing,ae.instancingColor=X.instancingColor,ae.instancingMorph=X.instancingMorph,ae.skinning=X.skinning,ae.morphTargets=X.morphTargets,ae.morphNormals=X.morphNormals,ae.morphColors=X.morphColors,ae.morphTargetsCount=X.morphTargetsCount,ae.numClippingPlanes=X.numClippingPlanes,ae.numIntersection=X.numClipIntersection,ae.vertexAlphas=X.vertexAlphas,ae.vertexTangents=X.vertexTangents,ae.toneMapping=X.toneMapping}function Bl(b,X,ae,fe,Y){X.isScene!==!0&&(X=oe),ke.resetTextureUnits();const Ie=X.fog,Ge=fe.isMeshStandardMaterial?X.environment:null,Ze=O===null?P.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Sr,ze=(fe.isMeshStandardMaterial?S:T).get(fe.envMap||Ge),ft=fe.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,ct=!!ae.attributes.tangent&&(!!fe.normalMap||fe.anisotropy>0),ot=!!ae.morphAttributes.position,xt=!!ae.morphAttributes.normal,Ot=!!ae.morphAttributes.color;let Lt=xr;fe.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Lt=P.toneMapping);const Jt=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,pt=Jt!==void 0?Jt.length:0,it=Oe.get(fe),wt=v.state.lights;if(te===!0&&(Se===!0||b!==L)){const An=b===L&&fe.id===$;je.setState(fe,b,An)}let Mt=!1;fe.version===it.__version?(it.needsLights&&it.lightsStateVersion!==wt.state.version||it.outputColorSpace!==Ze||Y.isBatchedMesh&&it.batching===!1||!Y.isBatchedMesh&&it.batching===!0||Y.isBatchedMesh&&it.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&it.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&it.instancing===!1||!Y.isInstancedMesh&&it.instancing===!0||Y.isSkinnedMesh&&it.skinning===!1||!Y.isSkinnedMesh&&it.skinning===!0||Y.isInstancedMesh&&it.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&it.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&it.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&it.instancingMorph===!1&&Y.morphTexture!==null||it.envMap!==ze||fe.fog===!0&&it.fog!==Ie||it.numClippingPlanes!==void 0&&(it.numClippingPlanes!==je.numPlanes||it.numIntersection!==je.numIntersection)||it.vertexAlphas!==ft||it.vertexTangents!==ct||it.morphTargets!==ot||it.morphNormals!==xt||it.morphColors!==Ot||it.toneMapping!==Lt||it.morphTargetsCount!==pt)&&(Mt=!0):(Mt=!0,it.__version=fe.version);let Nn=it.currentProgram;Mt===!0&&(Nn=Hi(fe,X,Y));let Vi=!1,en=!1,Gi=!1;const Ct=Nn.getUniforms(),In=it.uniforms;if(q.useProgram(Nn.program)&&(Vi=!0,en=!0,Gi=!0),fe.id!==$&&($=fe.id,en=!0),Vi||L!==b){Ct.setValue(N,"projectionMatrix",b.projectionMatrix),Ct.setValue(N,"viewMatrix",b.matrixWorldInverse);const An=Ct.map.cameraPosition;An!==void 0&&An.setValue(N,j.setFromMatrixPosition(b.matrixWorld)),qe.logarithmicDepthBuffer&&Ct.setValue(N,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(fe.isMeshPhongMaterial||fe.isMeshToonMaterial||fe.isMeshLambertMaterial||fe.isMeshBasicMaterial||fe.isMeshStandardMaterial||fe.isShaderMaterial)&&Ct.setValue(N,"isOrthographic",b.isOrthographicCamera===!0),L!==b&&(L=b,en=!0,Gi=!0)}if(Y.isSkinnedMesh){Ct.setOptional(N,Y,"bindMatrix"),Ct.setOptional(N,Y,"bindMatrixInverse");const An=Y.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),Ct.setValue(N,"boneTexture",An.boneTexture,ke))}Y.isBatchedMesh&&(Ct.setOptional(N,Y,"batchingTexture"),Ct.setValue(N,"batchingTexture",Y._matricesTexture,ke),Ct.setOptional(N,Y,"batchingIdTexture"),Ct.setValue(N,"batchingIdTexture",Y._indirectTexture,ke),Ct.setOptional(N,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Ct.setValue(N,"batchingColorTexture",Y._colorsTexture,ke));const ns=ae.morphAttributes;if((ns.position!==void 0||ns.normal!==void 0||ns.color!==void 0)&&lt.update(Y,ae,Nn),(en||it.receiveShadow!==Y.receiveShadow)&&(it.receiveShadow=Y.receiveShadow,Ct.setValue(N,"receiveShadow",Y.receiveShadow)),fe.isMeshGouraudMaterial&&fe.envMap!==null&&(In.envMap.value=ze,In.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),fe.isMeshStandardMaterial&&fe.envMap===null&&X.environment!==null&&(In.envMapIntensity.value=X.environmentIntensity),en&&(Ct.setValue(N,"toneMappingExposure",P.toneMappingExposure),it.needsLights&&Si(In,Gi),Ie&&fe.fog===!0&&we.refreshFogUniforms(In,Ie),we.refreshMaterialUniforms(In,fe,de,le,v.state.transmissionRenderTarget[b.id]),Cl.upload(N,$s(it),In,ke)),fe.isShaderMaterial&&fe.uniformsNeedUpdate===!0&&(Cl.upload(N,$s(it),In,ke),fe.uniformsNeedUpdate=!1),fe.isSpriteMaterial&&Ct.setValue(N,"center",Y.center),Ct.setValue(N,"modelViewMatrix",Y.modelViewMatrix),Ct.setValue(N,"normalMatrix",Y.normalMatrix),Ct.setValue(N,"modelMatrix",Y.matrixWorld),fe.isShaderMaterial||fe.isRawShaderMaterial){const An=fe.uniformsGroups;for(let wr=0,Qs=An.length;wr<Qs;wr++){const Jr=An[wr];yt.update(Jr,Nn),yt.bind(Jr,Nn)}}return Nn}function Si(b,X){b.ambientLightColor.needsUpdate=X,b.lightProbe.needsUpdate=X,b.directionalLights.needsUpdate=X,b.directionalLightShadows.needsUpdate=X,b.pointLights.needsUpdate=X,b.pointLightShadows.needsUpdate=X,b.spotLights.needsUpdate=X,b.spotLightShadows.needsUpdate=X,b.rectAreaLights.needsUpdate=X,b.hemisphereLights.needsUpdate=X}function Zs(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(b,X,ae){Oe.get(b.texture).__webglTexture=X,Oe.get(b.depthTexture).__webglTexture=ae;const fe=Oe.get(b);fe.__hasExternalTextures=!0,fe.__autoAllocateDepthBuffer=ae===void 0,fe.__autoAllocateDepthBuffer||nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),fe.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,X){const ae=Oe.get(b);ae.__webglFramebuffer=X,ae.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(b,X=0,ae=0){O=b,J=X,z=ae;let fe=!0,Y=null,Ie=!1,Ge=!1;if(b){const ze=Oe.get(b);ze.__useDefaultFramebuffer!==void 0?(q.bindFramebuffer(N.FRAMEBUFFER,null),fe=!1):ze.__webglFramebuffer===void 0?ke.setupRenderTarget(b):ze.__hasExternalTextures&&ke.rebindTextures(b,Oe.get(b.texture).__webglTexture,Oe.get(b.depthTexture).__webglTexture);const ft=b.texture;(ft.isData3DTexture||ft.isDataArrayTexture||ft.isCompressedArrayTexture)&&(Ge=!0);const ct=Oe.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(ct[X])?Y=ct[X][ae]:Y=ct[X],Ie=!0):b.samples>0&&ke.useMultisampledRTT(b)===!1?Y=Oe.get(b).__webglMultisampledFramebuffer:Array.isArray(ct)?Y=ct[ae]:Y=ct,A.copy(b.viewport),V.copy(b.scissor),pe=b.scissorTest}else A.copy(me).multiplyScalar(de).floor(),V.copy(k).multiplyScalar(de).floor(),pe=ce;if(q.bindFramebuffer(N.FRAMEBUFFER,Y)&&fe&&q.drawBuffers(b,Y),q.viewport(A),q.scissor(V),q.setScissorTest(pe),Ie){const ze=Oe.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+X,ze.__webglTexture,ae)}else if(Ge){const ze=Oe.get(b.texture),ft=X||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,ze.__webglTexture,ae||0,ft)}$=-1},this.readRenderTargetPixels=function(b,X,ae,fe,Y,Ie,Ge){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ze=Oe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ge!==void 0&&(Ze=Ze[Ge]),Ze){q.bindFramebuffer(N.FRAMEBUFFER,Ze);try{const ze=b.texture,ft=ze.format,ct=ze.type;if(!qe.textureFormatReadable(ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qe.textureTypeReadable(ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=b.width-fe&&ae>=0&&ae<=b.height-Y&&N.readPixels(X,ae,fe,Y,Je.convert(ft),Je.convert(ct),Ie)}finally{const ze=O!==null?Oe.get(O).__webglFramebuffer:null;q.bindFramebuffer(N.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(b,X,ae,fe,Y,Ie,Ge){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ze=Oe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ge!==void 0&&(Ze=Ze[Ge]),Ze){q.bindFramebuffer(N.FRAMEBUFFER,Ze);try{const ze=b.texture,ft=ze.format,ct=ze.type;if(!qe.textureFormatReadable(ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qe.textureTypeReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=b.width-fe&&ae>=0&&ae<=b.height-Y){const ot=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,ot),N.bufferData(N.PIXEL_PACK_BUFFER,Ie.byteLength,N.STREAM_READ),N.readPixels(X,ae,fe,Y,Je.convert(ft),Je.convert(ct),0),N.flush();const xt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);await Nv(N,xt,4);try{N.bindBuffer(N.PIXEL_PACK_BUFFER,ot),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Ie)}finally{N.deleteBuffer(ot),N.deleteSync(xt)}return Ie}}finally{const ze=O!==null?Oe.get(O).__webglFramebuffer:null;q.bindFramebuffer(N.FRAMEBUFFER,ze)}}},this.copyFramebufferToTexture=function(b,X=null,ae=0){b.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,b=arguments[1]);const fe=Math.pow(2,-ae),Y=Math.floor(b.image.width*fe),Ie=Math.floor(b.image.height*fe),Ge=X!==null?X.x:0,Ze=X!==null?X.y:0;ke.setTexture2D(b,0),N.copyTexSubImage2D(N.TEXTURE_2D,ae,0,0,Ge,Ze,Y,Ie),q.unbindTexture()},this.copyTextureToTexture=function(b,X,ae=null,fe=null,Y=0){b.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),fe=arguments[0]||null,b=arguments[1],X=arguments[2],Y=arguments[3]||0,ae=null);let Ie,Ge,Ze,ze,ft,ct;ae!==null?(Ie=ae.max.x-ae.min.x,Ge=ae.max.y-ae.min.y,Ze=ae.min.x,ze=ae.min.y):(Ie=b.image.width,Ge=b.image.height,Ze=0,ze=0),fe!==null?(ft=fe.x,ct=fe.y):(ft=0,ct=0);const ot=Je.convert(X.format),xt=Je.convert(X.type);ke.setTexture2D(X,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,X.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,X.unpackAlignment);const Ot=N.getParameter(N.UNPACK_ROW_LENGTH),Lt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Jt=N.getParameter(N.UNPACK_SKIP_PIXELS),pt=N.getParameter(N.UNPACK_SKIP_ROWS),it=N.getParameter(N.UNPACK_SKIP_IMAGES),wt=b.isCompressedTexture?b.mipmaps[Y]:b.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,wt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,wt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ze),N.pixelStorei(N.UNPACK_SKIP_ROWS,ze),b.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,Y,ft,ct,Ie,Ge,ot,xt,wt.data):b.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,Y,ft,ct,wt.width,wt.height,ot,wt.data):N.texSubImage2D(N.TEXTURE_2D,Y,ft,ct,Ie,Ge,ot,xt,wt),N.pixelStorei(N.UNPACK_ROW_LENGTH,Ot),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Lt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Jt),N.pixelStorei(N.UNPACK_SKIP_ROWS,pt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,it),Y===0&&X.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),q.unbindTexture()},this.copyTextureToTexture3D=function(b,X,ae=null,fe=null,Y=0){b.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ae=arguments[0]||null,fe=arguments[1]||null,b=arguments[2],X=arguments[3],Y=arguments[4]||0);let Ie,Ge,Ze,ze,ft,ct,ot,xt,Ot;const Lt=b.isCompressedTexture?b.mipmaps[Y]:b.image;ae!==null?(Ie=ae.max.x-ae.min.x,Ge=ae.max.y-ae.min.y,Ze=ae.max.z-ae.min.z,ze=ae.min.x,ft=ae.min.y,ct=ae.min.z):(Ie=Lt.width,Ge=Lt.height,Ze=Lt.depth,ze=0,ft=0,ct=0),fe!==null?(ot=fe.x,xt=fe.y,Ot=fe.z):(ot=0,xt=0,Ot=0);const Jt=Je.convert(X.format),pt=Je.convert(X.type);let it;if(X.isData3DTexture)ke.setTexture3D(X,0),it=N.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)ke.setTexture2DArray(X,0),it=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,X.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,X.unpackAlignment);const wt=N.getParameter(N.UNPACK_ROW_LENGTH),Mt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Nn=N.getParameter(N.UNPACK_SKIP_PIXELS),Vi=N.getParameter(N.UNPACK_SKIP_ROWS),en=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Lt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Lt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ze),N.pixelStorei(N.UNPACK_SKIP_ROWS,ft),N.pixelStorei(N.UNPACK_SKIP_IMAGES,ct),b.isDataTexture||b.isData3DTexture?N.texSubImage3D(it,Y,ot,xt,Ot,Ie,Ge,Ze,Jt,pt,Lt.data):X.isCompressedArrayTexture?N.compressedTexSubImage3D(it,Y,ot,xt,Ot,Ie,Ge,Ze,Jt,Lt.data):N.texSubImage3D(it,Y,ot,xt,Ot,Ie,Ge,Ze,Jt,pt,Lt),N.pixelStorei(N.UNPACK_ROW_LENGTH,wt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Mt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Nn),N.pixelStorei(N.UNPACK_SKIP_ROWS,Vi),N.pixelStorei(N.UNPACK_SKIP_IMAGES,en),Y===0&&X.generateMipmaps&&N.generateMipmap(it),q.unbindTexture()},this.initRenderTarget=function(b){Oe.get(b).__webglFramebuffer===void 0&&ke.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?ke.setTextureCube(b,0):b.isData3DTexture?ke.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?ke.setTexture2DArray(b,0):ke.setTexture2D(b,0),q.unbindTexture()},this.resetState=function(){J=0,z=0,O=null,q.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Hf?"display-p3":"srgb",n.unpackColorSpace=At.workingColorSpace===Ol?"display-p3":"srgb"}}class hg extends Vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cn,this.environmentIntensity=1,this.environmentRotation=new cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class pg extends wn{constructor(e,n,r,a,c,d,f,h,m){super(e,n,r,a,c,d,f,h,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}const wm=new qt;class mg{constructor(e,n,r=0,a=1/0){this.ray=new Wf(e,n),this.near=r,this.far=a,this.camera=null,this.layers=new Xf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return wm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(wm),this}intersectObject(e,n=!0,r=[]){return Df(e,this,r,n),r.sort(Tm),r}intersectObjects(e,n=!0,r=[]){for(let a=0,c=e.length;a<c;a++)Df(e[a],this,r,n);return r.sort(Tm),r}}function Tm(o,e){return o.distance-e.distance}function Df(o,e,n,r){let a=!0;if(o.layers.test(e.layers)&&o.raycast(e,n)===!1&&(a=!1),a===!0&&r===!0){const c=o.children;for(let d=0,f=c.length;d<f;d++)Df(c[d],e,n,!0)}}class Am{constructor(e=1,n=0,r=0){return this.radius=e,this.phi=n,this.theta=r,this}set(e,n,r){return this.radius=e,this.phi=n,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,r){return this.radius=Math.sqrt(e*e+n*n+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(gn(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:If}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=If);const Rm={type:"change"},$u={type:"start"},Cm={type:"end"},Ml=new Wf,bm=new mr,VE=Math.cos(70*_r.DEG2RAD);class gg extends Qr{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new ee,this.cursor=new ee,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Eo.ROTATE,MIDDLE:Eo.DOLLY,RIGHT:Eo.PAN},this.touches={ONE:pi.ROTATE,TWO:pi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return f.phi},this.getAzimuthalAngle=function(){return f.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(E){E.addEventListener("keydown",Te),this._domElementKeyEvents=E},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Te),this._domElementKeyEvents=null},this.saveState=function(){r.target0.copy(r.target),r.position0.copy(r.object.position),r.zoom0=r.object.zoom},this.reset=function(){r.target.copy(r.target0),r.object.position.copy(r.position0),r.object.zoom=r.zoom0,r.object.updateProjectionMatrix(),r.dispatchEvent(Rm),r.update(),c=a.NONE},this.update=(function(){const E=new ee,ie=new Kr().setFromUnitVectors(e.up,new ee(0,1,0)),se=ie.clone().invert(),he=new ee,Ce=new Kr,tt=new ee,ut=2*Math.PI;return function(Vt=null){const vt=r.object.position;E.copy(vt).sub(r.target),E.applyQuaternion(ie),f.setFromVector3(E),r.autoRotate&&c===a.NONE&&pe(A(Vt)),r.enableDamping?(f.theta+=h.theta*r.dampingFactor,f.phi+=h.phi*r.dampingFactor):(f.theta+=h.theta,f.phi+=h.phi);let kt=r.minAzimuthAngle,zt=r.maxAzimuthAngle;isFinite(kt)&&isFinite(zt)&&(kt<-Math.PI?kt+=ut:kt>Math.PI&&(kt-=ut),zt<-Math.PI?zt+=ut:zt>Math.PI&&(zt-=ut),kt<=zt?f.theta=Math.max(kt,Math.min(zt,f.theta)):f.theta=f.theta>(kt+zt)/2?Math.max(kt,f.theta):Math.min(zt,f.theta)),f.phi=Math.max(r.minPolarAngle,Math.min(r.maxPolarAngle,f.phi)),f.makeSafe(),r.enableDamping===!0?r.target.addScaledVector(g,r.dampingFactor):r.target.add(g),r.target.sub(r.cursor),r.target.clampLength(r.minTargetRadius,r.maxTargetRadius),r.target.add(r.cursor);let Tn=!1;if(r.zoomToCursor&&z||r.object.isOrthographicCamera)f.radius=me(f.radius);else{const Wt=f.radius;f.radius=me(f.radius*m),Tn=Wt!=f.radius}if(E.setFromSpherical(f),E.applyQuaternion(se),vt.copy(r.target).add(E),r.object.lookAt(r.target),r.enableDamping===!0?(h.theta*=1-r.dampingFactor,h.phi*=1-r.dampingFactor,g.multiplyScalar(1-r.dampingFactor)):(h.set(0,0,0),g.set(0,0,0)),r.zoomToCursor&&z){let Wt=null;if(r.object.isPerspectiveCamera){const _n=E.length();Wt=me(_n*m);const xi=_n-Wt;r.object.position.addScaledVector(U,xi),r.object.updateMatrixWorld(),Tn=!!xi}else if(r.object.isOrthographicCamera){const _n=new ee(J.x,J.y,0);_n.unproject(r.object);const xi=r.object.zoom;r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/m)),r.object.updateProjectionMatrix(),Tn=xi!==r.object.zoom;const Jn=new ee(J.x,J.y,0);Jn.unproject(r.object),r.object.position.sub(Jn).add(_n),r.object.updateMatrixWorld(),Wt=E.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),r.zoomToCursor=!1;Wt!==null&&(this.screenSpacePanning?r.target.set(0,0,-1).transformDirection(r.object.matrix).multiplyScalar(Wt).add(r.object.position):(Ml.origin.copy(r.object.position),Ml.direction.set(0,0,-1).transformDirection(r.object.matrix),Math.abs(r.object.up.dot(Ml.direction))<VE?e.lookAt(r.target):(bm.setFromNormalAndCoplanarPoint(r.object.up,r.target),Ml.intersectPlane(bm,r.target))))}else if(r.object.isOrthographicCamera){const Wt=r.object.zoom;r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/m)),Wt!==r.object.zoom&&(r.object.updateProjectionMatrix(),Tn=!0)}return m=1,z=!1,Tn||he.distanceToSquared(r.object.position)>d||8*(1-Ce.dot(r.object.quaternion))>d||tt.distanceToSquared(r.target)>d?(r.dispatchEvent(Rm),he.copy(r.object.position),Ce.copy(r.object.quaternion),tt.copy(r.target),!0):!1}})(),this.dispose=function(){r.domElement.removeEventListener("contextmenu",Ne),r.domElement.removeEventListener("pointerdown",ke),r.domElement.removeEventListener("pointercancel",S),r.domElement.removeEventListener("wheel",Z),r.domElement.removeEventListener("pointermove",T),r.domElement.removeEventListener("pointerup",S),r.domElement.getRootNode().removeEventListener("keydown",we,{capture:!0}),r._domElementKeyEvents!==null&&(r._domElementKeyEvents.removeEventListener("keydown",Te),r._domElementKeyEvents=null)};const r=this,a={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let c=a.NONE;const d=1e-6,f=new Am,h=new Am;let m=1;const g=new ee,y=new ht,x=new ht,M=new ht,R=new ht,C=new ht,v=new ht,_=new ht,F=new ht,P=new ht,U=new ee,J=new ht;let z=!1;const O=[],$={};let L=!1;function A(E){return E!==null?2*Math.PI/60*r.autoRotateSpeed*E:2*Math.PI/60/60*r.autoRotateSpeed}function V(E){const ie=Math.abs(E*.01);return Math.pow(.95,r.zoomSpeed*ie)}function pe(E){h.theta-=E}function K(E){h.phi-=E}const ye=(function(){const E=new ee;return function(se,he){E.setFromMatrixColumn(he,0),E.multiplyScalar(-se),g.add(E)}})(),ve=(function(){const E=new ee;return function(se,he){r.screenSpacePanning===!0?E.setFromMatrixColumn(he,1):(E.setFromMatrixColumn(he,0),E.crossVectors(r.object.up,E)),E.multiplyScalar(se),g.add(E)}})(),le=(function(){const E=new ee;return function(se,he){const Ce=r.domElement;if(r.object.isPerspectiveCamera){const tt=r.object.position;E.copy(tt).sub(r.target);let ut=E.length();ut*=Math.tan(r.object.fov/2*Math.PI/180),ye(2*se*ut/Ce.clientHeight,r.object.matrix),ve(2*he*ut/Ce.clientHeight,r.object.matrix)}else r.object.isOrthographicCamera?(ye(se*(r.object.right-r.object.left)/r.object.zoom/Ce.clientWidth,r.object.matrix),ve(he*(r.object.top-r.object.bottom)/r.object.zoom/Ce.clientHeight,r.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),r.enablePan=!1)}})();function de(E){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?m/=E:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function B(E){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?m*=E:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function xe(E,ie){if(!r.zoomToCursor)return;z=!0;const se=r.domElement.getBoundingClientRect(),he=E-se.left,Ce=ie-se.top,tt=se.width,ut=se.height;J.x=he/tt*2-1,J.y=-(Ce/ut)*2+1,U.set(J.x,J.y,1).unproject(r.object).sub(r.object.position).normalize()}function me(E){return Math.max(r.minDistance,Math.min(r.maxDistance,E))}function k(E){y.set(E.clientX,E.clientY)}function ce(E){xe(E.clientX,E.clientX),_.set(E.clientX,E.clientY)}function He(E){R.set(E.clientX,E.clientY)}function te(E){x.set(E.clientX,E.clientY),M.subVectors(x,y).multiplyScalar(r.rotateSpeed);const ie=r.domElement;pe(2*Math.PI*M.x/ie.clientHeight),K(2*Math.PI*M.y/ie.clientHeight),y.copy(x),r.update()}function Se(E){F.set(E.clientX,E.clientY),P.subVectors(F,_),P.y>0?de(V(P.y)):P.y<0&&B(V(P.y)),_.copy(F),r.update()}function Ae(E){C.set(E.clientX,E.clientY),v.subVectors(C,R).multiplyScalar(r.panSpeed),le(v.x,v.y),R.copy(C),r.update()}function j(E){xe(E.clientX,E.clientY),E.deltaY<0?B(V(E.deltaY)):E.deltaY>0&&de(V(E.deltaY)),r.update()}function ge(E){let ie=!1;switch(E.code){case r.keys.UP:E.ctrlKey||E.metaKey||E.shiftKey?K(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):le(0,r.keyPanSpeed),ie=!0;break;case r.keys.BOTTOM:E.ctrlKey||E.metaKey||E.shiftKey?K(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):le(0,-r.keyPanSpeed),ie=!0;break;case r.keys.LEFT:E.ctrlKey||E.metaKey||E.shiftKey?pe(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):le(r.keyPanSpeed,0),ie=!0;break;case r.keys.RIGHT:E.ctrlKey||E.metaKey||E.shiftKey?pe(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):le(-r.keyPanSpeed,0),ie=!0;break}ie&&(E.preventDefault(),r.update())}function oe(E){if(O.length===1)y.set(E.pageX,E.pageY);else{const ie=rt(E),se=.5*(E.pageX+ie.x),he=.5*(E.pageY+ie.y);y.set(se,he)}}function Le(E){if(O.length===1)R.set(E.pageX,E.pageY);else{const ie=rt(E),se=.5*(E.pageX+ie.x),he=.5*(E.pageY+ie.y);R.set(se,he)}}function Ue(E){const ie=rt(E),se=E.pageX-ie.x,he=E.pageY-ie.y,Ce=Math.sqrt(se*se+he*he);_.set(0,Ce)}function N(E){r.enableZoom&&Ue(E),r.enablePan&&Le(E)}function Xe(E){r.enableZoom&&Ue(E),r.enableRotate&&oe(E)}function nt(E){if(O.length==1)x.set(E.pageX,E.pageY);else{const se=rt(E),he=.5*(E.pageX+se.x),Ce=.5*(E.pageY+se.y);x.set(he,Ce)}M.subVectors(x,y).multiplyScalar(r.rotateSpeed);const ie=r.domElement;pe(2*Math.PI*M.x/ie.clientHeight),K(2*Math.PI*M.y/ie.clientHeight),y.copy(x)}function qe(E){if(O.length===1)C.set(E.pageX,E.pageY);else{const ie=rt(E),se=.5*(E.pageX+ie.x),he=.5*(E.pageY+ie.y);C.set(se,he)}v.subVectors(C,R).multiplyScalar(r.panSpeed),le(v.x,v.y),R.copy(C)}function q(E){const ie=rt(E),se=E.pageX-ie.x,he=E.pageY-ie.y,Ce=Math.sqrt(se*se+he*he);F.set(0,Ce),P.set(0,Math.pow(F.y/_.y,r.zoomSpeed)),de(P.y),_.copy(F);const tt=(E.pageX+ie.x)*.5,ut=(E.pageY+ie.y)*.5;xe(tt,ut)}function Fe(E){r.enableZoom&&q(E),r.enablePan&&qe(E)}function Oe(E){r.enableZoom&&q(E),r.enableRotate&&nt(E)}function ke(E){r.enabled!==!1&&(O.length===0&&(r.domElement.setPointerCapture(E.pointerId),r.domElement.addEventListener("pointermove",T),r.domElement.addEventListener("pointerup",S)),!Be(E)&&(lt(E),E.pointerType==="touch"?je(E):D(E)))}function T(E){r.enabled!==!1&&(E.pointerType==="touch"?Ee(E):G(E))}function S(E){switch(Ke(E),O.length){case 0:r.domElement.releasePointerCapture(E.pointerId),r.domElement.removeEventListener("pointermove",T),r.domElement.removeEventListener("pointerup",S),r.dispatchEvent(Cm),c=a.NONE;break;case 1:const ie=O[0],se=$[ie];je({pointerId:ie,pageX:se.x,pageY:se.y});break}}function D(E){let ie;switch(E.button){case 0:ie=r.mouseButtons.LEFT;break;case 1:ie=r.mouseButtons.MIDDLE;break;case 2:ie=r.mouseButtons.RIGHT;break;default:ie=-1}switch(ie){case Eo.DOLLY:if(r.enableZoom===!1)return;ce(E),c=a.DOLLY;break;case Eo.ROTATE:if(E.ctrlKey||E.metaKey||E.shiftKey){if(r.enablePan===!1)return;He(E),c=a.PAN}else{if(r.enableRotate===!1)return;k(E),c=a.ROTATE}break;case Eo.PAN:if(E.ctrlKey||E.metaKey||E.shiftKey){if(r.enableRotate===!1)return;k(E),c=a.ROTATE}else{if(r.enablePan===!1)return;He(E),c=a.PAN}break;default:c=a.NONE}c!==a.NONE&&r.dispatchEvent($u)}function G(E){switch(c){case a.ROTATE:if(r.enableRotate===!1)return;te(E);break;case a.DOLLY:if(r.enableZoom===!1)return;Se(E);break;case a.PAN:if(r.enablePan===!1)return;Ae(E);break}}function Z(E){r.enabled===!1||r.enableZoom===!1||c!==a.NONE||(E.preventDefault(),r.dispatchEvent($u),j(ne(E)),r.dispatchEvent(Cm))}function ne(E){const ie=E.deltaMode,se={clientX:E.clientX,clientY:E.clientY,deltaY:E.deltaY};switch(ie){case 1:se.deltaY*=16;break;case 2:se.deltaY*=100;break}return E.ctrlKey&&!L&&(se.deltaY*=10),se}function we(E){E.key==="Control"&&(L=!0,r.domElement.getRootNode().addEventListener("keyup",Me,{passive:!0,capture:!0}))}function Me(E){E.key==="Control"&&(L=!1,r.domElement.getRootNode().removeEventListener("keyup",Me,{passive:!0,capture:!0}))}function Te(E){r.enabled===!1||r.enablePan===!1||ge(E)}function je(E){switch(Je(E),O.length){case 1:switch(r.touches.ONE){case pi.ROTATE:if(r.enableRotate===!1)return;oe(E),c=a.TOUCH_ROTATE;break;case pi.PAN:if(r.enablePan===!1)return;Le(E),c=a.TOUCH_PAN;break;default:c=a.NONE}break;case 2:switch(r.touches.TWO){case pi.DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;N(E),c=a.TOUCH_DOLLY_PAN;break;case pi.DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;Xe(E),c=a.TOUCH_DOLLY_ROTATE;break;default:c=a.NONE}break;default:c=a.NONE}c!==a.NONE&&r.dispatchEvent($u)}function Ee(E){switch(Je(E),c){case a.TOUCH_ROTATE:if(r.enableRotate===!1)return;nt(E),r.update();break;case a.TOUCH_PAN:if(r.enablePan===!1)return;qe(E),r.update();break;case a.TOUCH_DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;Fe(E),r.update();break;case a.TOUCH_DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;Oe(E),r.update();break;default:c=a.NONE}}function Ne(E){r.enabled!==!1&&E.preventDefault()}function lt(E){O.push(E.pointerId)}function Ke(E){delete $[E.pointerId];for(let ie=0;ie<O.length;ie++)if(O[ie]==E.pointerId){O.splice(ie,1);return}}function Be(E){for(let ie=0;ie<O.length;ie++)if(O[ie]==E.pointerId)return!0;return!1}function Je(E){let ie=$[E.pointerId];ie===void 0&&(ie=new ht,$[E.pointerId]=ie),ie.set(E.pageX,E.pageY)}function rt(E){const ie=E.pointerId===O[0]?O[1]:O[0];return $[ie]}r.domElement.addEventListener("contextmenu",Ne),r.domElement.addEventListener("pointerdown",ke),r.domElement.addEventListener("pointercancel",S),r.domElement.addEventListener("wheel",Z,{passive:!1}),r.domElement.getRootNode().addEventListener("keydown",we,{passive:!0,capture:!0}),this.update()}}function GE({images:o}){const e=Pt.useRef(null);return Pt.useEffect(()=>{const n=e.current;if(!n)return;const r=n.clientWidth,a=n.clientHeight,c=new hg,d=new Hn(70,r/a,.1,1e3);d.position.set(0,0,28);const f=new dg({antialias:!0,alpha:!0});f.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),f.setSize(r,a),f.setClearColor(0,0),n.appendChild(f.domElement),f.domElement.style.touchAction="none",f.domElement.style.display="block";const h=new gg(d,f.domElement);h.enableDamping=!0,h.dampingFactor=.08,h.rotateSpeed=.7,h.zoomSpeed=1.1,h.minDistance=8,h.maxDistance=55,h.enablePan=!1,h.touches={ONE:pi.ROTATE,TWO:pi.DOLLY_ROTATE};const m=new Wo;c.add(m);const g=11,y=o.length,x=480,M=.048,R=[],C=[],v=[],_=[],F=[];let P=null,U=null;const J=_r.clamp(Math.round(Math.sqrt(y)*1.08),8,18),z=1.94,O=g*z/Math.max(1,J-1),$=_r.clamp(25/Math.sqrt(y),1.15,2.75),L=(T,S)=>{const D=new Image;D.onload=()=>{const G=document.createElement("canvas"),Z=512;G.width=Z,G.height=Z;const ne=G.getContext("2d");if(!ne)return;ne.clearRect(0,0,Z,Z);const we=Math.min(Z/D.width,Z/D.height),Me=D.width*we,Te=D.height*we;ne.drawImage(D,(Z-Me)/2,(Z-Te)/2,Me,Te);const je=new pg(G);je.colorSpace=Kn,je.minFilter=Mn,je.magFilter=Mn,S(je)},D.src=T},A=T=>new kl({side:T,toneMapped:!1,color:16316411,transparent:!0,alphaTest:.01}),V=T=>{const S=T.clone(),D=S.getAttribute("uv").clone();for(let G=0;G<D.count;G++)D.setX(G,1-D.getX(G));return S.setAttribute("uv",D),S},pe=(T,S,D,G,Z=8)=>{const ne=[],we=[],Me=[];for(let je=0;je<=Z;je++){const Ee=je/Z,Ne=_r.clamp(T+(.5-Ee)*G,-Math.PI/2+.04,Math.PI/2-.04);for(let lt=0;lt<=Z;lt++){const Ke=lt/Z,Be=S+(Ke-.5)*D,Je=Math.cos(Ne);ne.push(Math.cos(Be)*Je*g,Math.sin(Ne)*g,Math.sin(Be)*Je*g),we.push(Ke,1-Ee)}}for(let je=0;je<Z;je++)for(let Ee=0;Ee<Z;Ee++){const Ne=je*(Z+1)+Ee,lt=Ne+1,Ke=Ne+Z+1,Be=Ke+1;Me.push(Ne,Ke,lt,lt,Ke,Be)}const Te=new Mr;return Te.setAttribute("position",new ki(ne,3)),Te.setAttribute("uv",new ki(we,2)),Te.setIndex(Me),Te.computeVertexNormals(),Te},K=Array.from({length:J},(T,S)=>{const D=J===1?.5:S/(J-1),G=z/2-D*z,Z=Math.sqrt(Math.max(.03,1-G*G));return{lat:G,radiusRatio:Z,count:Math.max(3,Math.round(Z*y*1.18/J))}});let ye=K.reduce((T,S)=>T+S.count,0);for(;ye<y;){const T=K.reduce((S,D,G)=>D.radiusRatio>K[S].radiusRatio?G:S,0);K[T].count+=1,ye+=1}for(;ye>y;){const T=K.reduce((S,D,G)=>D.count>K[S].count?G:S,0);if(K[T].count<=3)break;K[T].count-=1,ye-=1}let ve=0;K.forEach((T,S)=>{for(let D=0;D<T.count&&ve<y;D++){const G=(D+S%2*.5)/T.count*Math.PI*2,Z=T.radiusRatio*g,we=Math.PI*2*Z/T.count,Me=Math.min($,we*.9,O*.9),Te=Math.asin(T.lat),je=Math.min(Math.PI*2/T.count*.9,Me/Math.max(Z,.8)),Ee=Me/g,Ne=pe(Te,G,je,Ee),lt=ve,Ke=A(zi),Be=A(En);_.push(Ke,Be);const Je=new Qn(Ne,Ke);Je.userData.imageIndex=lt;const rt=new Qn(V(Ne),Be);rt.userData.imageIndex=lt,R.push(Je),C.push(rt),m.add(Je),m.add(rt),F.push(Je.scale.clone()),Je.userData.frontMesh=Je,Je.userData.backMesh=rt,rt.userData.frontMesh=Je,L(o[ve],yt=>{v.push(yt),Ke.map=yt,Ke.color.set(16777215),Ke.needsUpdate=!0,Be.map=yt,Be.color.set(16777215),Be.needsUpdate=!0,Je.userData.texture=yt,rt.userData.texture=yt}),ve++}});let le=null,de=null;const B=document.createElement("div");B.style.position="absolute",B.style.inset="0",B.style.pointerEvents="none",B.style.zIndex="20",n.appendChild(B);const xe=(T,S)=>{T.visible=S;const D=T.userData.backMesh;D&&(D.visible=S)},me=T=>{const S=f.domElement.getBoundingClientRect(),D=T.clone().project(d);return{x:(D.x+1)/2*S.width,y:(1-D.y)/2*S.height}},k=T=>{const S=T.geometry.getAttribute("position"),D=Math.round(Math.sqrt(S.count))-1,G=[],Z=[];for(let we=0;we<=D;we++)G.push(we),Z.push({x:we/D,y:0});for(let we=1;we<=D;we++)G.push(we*(D+1)+D),Z.push({x:1,y:we/D});for(let we=D-1;we>=0;we--)G.push(D*(D+1)+we),Z.push({x:we/D,y:1});for(let we=D-1;we>=1;we--)G.push(we*(D+1)),Z.push({x:0,y:we/D});const ne=G.map(we=>{const Me=new ee(S.getX(we),S.getY(we),S.getZ(we));return T.localToWorld(Me),me(Me)});return ce(ne)>=0?{points:ne,unitPoints:Z}:{points:ne.toReversed(),unitPoints:Z.toReversed()}},ce=T=>T.reduce((S,D,G)=>{const Z=T[(G+1)%T.length];return S+D.x*Z.y-D.y*Z.x},0),He=(T=1)=>{const S=f.domElement.clientWidth,D=f.domElement.clientHeight,G=Math.min(S*.78,860),Z=Math.min(D*.78,860),ne=Math.min(G,Z*T),we=ne/T;return{left:(S-ne)/2,top:(D-we)/2,width:ne,height:we}},te=T=>{const S=f.domElement.getBoundingClientRect(),D=T.getBoundingClientRect();return{left:D.left-S.left,top:D.top-S.top,width:D.width,height:D.height}},Se=T=>{const{points:S,unitPoints:D}=k(T),G=Math.min(...S.map(Ee=>Ee.x)),Z=Math.max(...S.map(Ee=>Ee.x)),ne=Math.min(...S.map(Ee=>Ee.y)),we=Math.max(...S.map(Ee=>Ee.y)),Me={left:G,top:ne,width:Math.max(1,Z-G),height:Math.max(1,we-ne)},Te=`polygon(${S.map(Ee=>{const Ne=_r.clamp((Ee.x-Me.left)/Me.width*100,0,100),lt=_r.clamp((Ee.y-Me.top)/Me.height*100,0,100);return`${Ne}% ${lt}%`}).join(", ")})`,je=`polygon(${D.map(Ee=>`${Ee.x*100}% ${Ee.y*100}%`).join(", ")})`;return{rect:Me,clipPath:Te,fullClipPath:je}},Ae=(T,S)=>{const D=T.left+T.width/2,G=T.top+T.height/2,Z=S.left+S.width/2,ne=S.top+S.height/2,we=D-Z,Me=G-ne,Te=T.width/S.width,je=T.height/S.height;return`translate(${we}px, ${Me}px) scale(${Te}, ${je})`},j=(T,S,D,G,Z="inset(0)",ne="inset(0)")=>{de==null||de.cancel();const we=Ae(S,D);T.style.left=`${D.left}px`,T.style.top=`${D.top}px`,T.style.width=`${D.width}px`,T.style.height=`${D.height}px`,T.style.opacity="1",T.style.transform=we,T.style.clipPath=Z;const Me={transform:we,clipPath:Z,opacity:1,borderRadius:G==="open"?"18px":"28px"},Te={transform:"translate(0px, 0px) scale(1, 1)",clipPath:ne,opacity:1,borderRadius:G==="open"?"28px":"18px"};return de=T.animate([Me,Te],{duration:x,easing:"cubic-bezier(0.19, 1, 0.22, 1)",fill:"forwards",composite:"replace"}),de},ge=(T,S,D)=>j(T,S,D.rect,"close","inset(0)",D.clipPath),oe=()=>{if(!le)return;const{element:T,mesh:S}=le,D=te(T);xe(S,!0),h.update(),f.render(c,d);const G=m.rotation.y;m.rotation.y=G+M*(x/1e3),m.updateMatrixWorld(!0);const Z=Se(S);m.rotation.y=G,m.updateMatrixWorld(!0);const ne=ge(T,D,Z);ne.onfinish=()=>{T.remove(),le=null,P=null,U=null,de=null},ne.oncancel=()=>{T.remove(),xe(S,!0)}},Le=(T,S,D)=>{if(!D||(le==null?void 0:le.mesh)===T)return;le&&(le.element.remove(),xe(le.mesh,!0)),P=T,U=D,xe(T,!1);const G=document.createElement("img");G.src=o[S],G.draggable=!1,G.style.position="absolute",G.style.objectFit="contain",G.style.background="transparent",G.style.boxShadow="0 28px 80px rgba(0, 0, 0, 0.35)",G.style.willChange="transform, clip-path, opacity",G.style.pointerEvents="auto",G.style.cursor="zoom-out",G.style.transformOrigin="center center",G.addEventListener("click",ne=>{ne.stopPropagation(),oe()});const Z=()=>{const ne=Se(T),we=G.naturalWidth>0&&G.naturalHeight>0?G.naturalWidth/G.naturalHeight:1,Me=He(we);G.style.left=`${Me.left}px`,G.style.top=`${Me.top}px`,G.style.width=`${Me.width}px`,G.style.height=`${Me.height}px`,G.style.transform=Ae(ne.rect,Me),G.style.clipPath=ne.clipPath,B.appendChild(G),le={element:G,mesh:T,index:S,projection:ne};const Te=j(G,ne.rect,Me,"open",ne.clipPath,"inset(0)");Te.onfinish=()=>{de=null}};G.complete&&G.naturalWidth>0?Z():G.addEventListener("load",Z,{once:!0})},Ue=new mg,N=new ht,Xe=T=>{const S=f.domElement.getBoundingClientRect();N.x=(T.clientX-S.left)/S.width*2-1,N.y=-((T.clientY-S.top)/S.height)*2+1,Ue.setFromCamera(N,d);const D=Ue.intersectObjects([...R,...C]);if(D.length>0){const Z=D[0].object,ne=Z.userData.frontMesh??Z,we=ne.userData.texture;P===ne&&U===we?oe():(P&&xe(P,!0),Le(ne,ne.userData.imageIndex,we))}else oe()};f.domElement.addEventListener("click",Xe);let nt=0,qe=!1,q=performance.now();const Fe=(T=performance.now())=>{if(qe)return;nt=requestAnimationFrame(Fe);const S=Math.min((T-q)/1e3,.05);q=T,m.rotation.y+=M*S,h.update(),f.render(c,d)};Fe();const Oe=()=>{const T=n.clientWidth,S=n.clientHeight;d.aspect=T/S,d.updateProjectionMatrix(),f.setSize(T,S)},ke=new ResizeObserver(Oe);return ke.observe(n),()=>{qe=!0,cancelAnimationFrame(nt),ke.disconnect(),f.domElement.removeEventListener("click",Xe),h.dispose(),de==null||de.cancel(),B.remove(),R.forEach(T=>{m.remove(T),T.geometry.dispose()}),C.forEach(T=>{m.remove(T),T.geometry.dispose()}),_.forEach(T=>T.dispose()),v.forEach(T=>T.dispose()),f.dispose(),f.domElement.parentNode===n&&n.removeChild(f.domElement)}},[o]),_e.jsx("div",{ref:e,className:"absolute inset-0",style:{touchAction:"none"}})}const WE=16;function XE({images:o,variant:e}){const n=Pt.useRef(null);return Pt.useEffect(()=>{const r=n.current;if(!r)return;const a=r.clientWidth,c=r.clientHeight,d=new hg,f=new Hn(66,a/c,.1,1e3);f.position.set(0,0,e==="spiral"?25:28);const h=new dg({antialias:!0,alpha:!0});h.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),h.setSize(a,c),h.setClearColor(0,0),h.domElement.style.display="block",h.domElement.style.touchAction="none",r.appendChild(h.domElement);const m=new gg(f,h.domElement);m.enableDamping=!0,m.dampingFactor=.08,m.rotateSpeed=.7,m.zoomSpeed=1.1,m.minDistance=8,m.maxDistance=55,m.enablePan=!1,m.touches={ONE:pi.ROTATE,TWO:pi.DOLLY_ROTATE};const g=new Wo;d.add(g);const y=[],x=[],M=[];let R=null,C=null,v=null;const _=document.createElement("div");_.style.position="absolute",_.style.inset="0",_.style.pointerEvents="none",_.style.zIndex="20",r.appendChild(_);const F=(j,ge)=>{const oe=new Image;oe.onload=()=>{const Le=document.createElement("canvas"),Ue=512;Le.width=Ue,Le.height=Ue;const N=Le.getContext("2d");if(!N)return;N.clearRect(0,0,Ue,Ue);const Xe=Math.min(Ue/oe.width,Ue/oe.height),nt=oe.width*Xe,qe=oe.height*Xe;N.drawImage(oe,(Ue-nt)/2,(Ue-qe)/2,nt,qe);const q=new pg(Le);q.colorSpace=Kn,q.minFilter=Mn,q.magFilter=Mn,ge(q)},oe.src=j},P=(j,ge)=>{const oe=WE,Le=Math.ceil(ge/oe),Ue=j%oe,N=Math.floor(j/oe),Xe=Ue/oe*Math.PI*2,nt=9.6,qe=2.2,q=(Le-1)*qe*.5-N*qe,Fe=new ee(Math.sin(Xe)*nt,q,Math.cos(Xe)*nt),Oe=new cn(0,Xe,0);return{position:Fe,rotation:Oe,width:2.35,height:1.72}},U=(j,ge)=>{const oe=j%6,Le=Math.ceil(ge/6),Ue=Math.floor(j/6),N=Math.ceil(Math.sqrt(Le)),Xe=Math.floor(Ue/N),nt=Ue%N,qe=6.6,q=qe*2/N,Fe=q*.9,Oe=-qe+q*(nt+.5),ke=qe-q*(Xe+.5),T=.05;return{...[{position:new ee(Oe,ke,qe+T),rotation:new cn(0,0,0)},{position:new ee(-Oe,ke,-qe-T),rotation:new cn(0,Math.PI,0)},{position:new ee(qe+T,ke,-Oe),rotation:new cn(0,Math.PI/2,0)},{position:new ee(-qe-T,ke,Oe),rotation:new cn(0,-Math.PI/2,0)},{position:new ee(Oe,qe+T,-ke),rotation:new cn(-Math.PI/2,0,0)},{position:new ee(Oe,-qe-T,ke),rotation:new cn(Math.PI/2,0,0)}][oe],width:Fe,height:Fe}},J=(j,ge)=>{const oe=ge===1?.5:j/(ge-1),Le=Math.max(2.8,Math.min(7.5,ge/12)),Ue=oe*Math.PI*2*Le,N=8.8,Xe=(.5-oe)*Math.max(12,Math.min(18,ge*.18)),nt=new ee(Math.sin(Ue)*N,Xe,Math.cos(Ue)*N),qe=new cn(0,Ue,0);return{position:nt,rotation:qe,width:2.1,height:1.55}},z=(j,ge)=>e==="cylinder"?P(j,ge):e==="polyhedron"?U(j,ge):J(j,ge);o.forEach((j,ge)=>{const oe=z(ge,o.length),Le=new qs(oe.width,oe.height,1,1),Ue=new kl({side:gi,transparent:!0,alphaTest:.01,toneMapped:!1,color:16316411}),N=new Qn(Le,Ue);N.position.copy(oe.position),N.rotation.copy(oe.rotation),N.userData.imageIndex=ge,g.add(N),M.push(N),x.push(Ue),F(j,Xe=>{y.push(Xe),Ue.map=Xe,Ue.color.set(16777215),Ue.needsUpdate=!0,N.userData.texture=Xe})});const O=(j,ge)=>{j.visible=ge},$=j=>{const ge=h.domElement.getBoundingClientRect(),oe=j.clone().project(f);return{x:(oe.x+1)/2*ge.width,y:(1-oe.y)/2*ge.height}},L=j=>j.reduce((ge,oe,Le)=>{const Ue=j[(Le+1)%j.length];return ge+oe.x*Ue.y-oe.y*Ue.x},0),A=j=>{const oe=j.geometry.getAttribute("position"),Le=[0,1,3,2],Ue=[{x:0,y:0},{x:1,y:0},{x:1,y:1},{x:0,y:1}],N=Le.map(D=>{const G=new ee(oe.getX(D),oe.getY(D),oe.getZ(D));return j.localToWorld(G),$(G)}),Xe=L(N)>=0?N:N.toReversed(),nt=L(N)>=0?Ue:Ue.toReversed(),qe=Math.min(...Xe.map(D=>D.x)),q=Math.max(...Xe.map(D=>D.x)),Fe=Math.min(...Xe.map(D=>D.y)),Oe=Math.max(...Xe.map(D=>D.y)),ke={left:qe,top:Fe,width:Math.max(1,q-qe),height:Math.max(1,Oe-Fe)},T=`polygon(${Xe.map(D=>{const G=_r.clamp((D.x-ke.left)/ke.width*100,0,100),Z=_r.clamp((D.y-ke.top)/ke.height*100,0,100);return`${G}% ${Z}%`}).join(", ")})`,S=`polygon(${nt.map(D=>`${D.x*100}% ${D.y*100}%`).join(", ")})`;return{rect:ke,clipPath:T||S}},V=(j=1)=>{const ge=h.domElement.clientWidth,oe=h.domElement.clientHeight,Le=Math.min(ge*.78,860),Ue=Math.min(oe*.78,860),N=Math.min(Le,Ue*j),Xe=N/j;return{left:(ge-N)/2,top:(oe-Xe)/2,width:N,height:Xe}},pe=j=>{const ge=h.domElement.getBoundingClientRect(),oe=j.getBoundingClientRect();return{left:oe.left-ge.left,top:oe.top-ge.top,width:oe.width,height:oe.height}},K=(j,ge)=>{const oe=j.left+j.width/2,Le=j.top+j.height/2,Ue=ge.left+ge.width/2,N=ge.top+ge.height/2,Xe=oe-Ue,nt=Le-N,qe=j.width/ge.width,q=j.height/ge.height;return`translate(${Xe}px, ${nt}px) scale(${qe}, ${q})`},ye=(j,ge,oe,Le,Ue="inset(0)",N="inset(0)")=>{R==null||R.cancel();const Xe=K(ge,oe);return j.style.left=`${oe.left}px`,j.style.top=`${oe.top}px`,j.style.width=`${oe.width}px`,j.style.height=`${oe.height}px`,j.style.opacity="1",j.style.transform=Xe,j.style.clipPath=Ue,R=j.animate([{transform:Xe,clipPath:Ue,opacity:1,borderRadius:Le==="open"?"16px":"28px"},{transform:"translate(0px, 0px) scale(1, 1)",clipPath:N,opacity:1,borderRadius:Le==="open"?"28px":"16px"}],{duration:480,easing:"cubic-bezier(0.19, 1, 0.22, 1)",fill:"forwards",composite:"replace"}),R},ve=()=>{if(!C)return;const{element:j,mesh:ge}=C,oe=pe(j);m.update(),h.render(d,f);const Le=A(ge),Ue=ye(j,oe,Le.rect,"close","inset(0)",Le.clipPath);Ue.onfinish=()=>{j.remove(),O(ge,!0),C=null,v=null,R=null},Ue.oncancel=()=>{j.remove(),O(ge,!0)}},le=(j,ge)=>{R==null||R.cancel(),C&&(C.element.remove(),O(C.mesh,!0)),v=j,O(j,!1);const oe=document.createElement("img");oe.src=o[ge],oe.draggable=!1,oe.style.position="absolute",oe.style.objectFit="contain",oe.style.background="transparent",oe.style.boxShadow="0 28px 80px rgba(0, 0, 0, 0.35)",oe.style.pointerEvents="auto",oe.style.cursor="zoom-out",oe.style.transformOrigin="center center",oe.style.willChange="transform, clip-path, opacity",oe.addEventListener("click",Ue=>{Ue.stopPropagation(),ve()});const Le=()=>{const Ue=A(j),N=oe.naturalWidth>0&&oe.naturalHeight>0?oe.naturalWidth/oe.naturalHeight:1,Xe=V(N);oe.style.left=`${Xe.left}px`,oe.style.top=`${Xe.top}px`,oe.style.width=`${Xe.width}px`,oe.style.height=`${Xe.height}px`,oe.style.transform=K(Ue.rect,Xe),oe.style.clipPath=Ue.clipPath,_.appendChild(oe),C={element:oe,mesh:j,index:ge};const nt=ye(oe,Ue.rect,Xe,"open",Ue.clipPath,"inset(0)");nt.onfinish=()=>{R=null}};oe.complete&&oe.naturalWidth>0?Le():oe.addEventListener("load",Le,{once:!0})},de=new mg,B=new ht,xe=j=>{const ge=h.domElement.getBoundingClientRect();B.x=(j.clientX-ge.left)/ge.width*2-1,B.y=-((j.clientY-ge.top)/ge.height)*2+1,de.setFromCamera(B,f);const oe=de.intersectObjects(M);if(oe.length===0){ve();return}const Le=oe[0].object;v===Le?ve():le(Le,Le.userData.imageIndex)};h.domElement.addEventListener("click",xe);let me=0,k=!1,ce=performance.now();const He=e==="spiral"?.035:.045,te=(j=performance.now())=>{if(k)return;me=requestAnimationFrame(te);const ge=Math.min((j-ce)/1e3,.05);ce=j,!C&&!R&&(g.rotation.y+=He*ge,e==="polyhedron"&&(g.rotation.x=Math.sin(j*18e-5)*.12)),m.update(),h.render(d,f)};te();const Se=()=>{const j=r.clientWidth,ge=r.clientHeight;f.aspect=j/ge,f.updateProjectionMatrix(),h.setSize(j,ge)},Ae=new ResizeObserver(Se);return Ae.observe(r),()=>{k=!0,cancelAnimationFrame(me),Ae.disconnect(),h.domElement.removeEventListener("click",xe),m.dispose(),R==null||R.cancel(),C==null||C.element.remove(),_.remove(),M.forEach(j=>{g.remove(j),j.geometry.dispose()}),x.forEach(j=>j.dispose()),y.forEach(j=>j.dispose()),h.dispose(),h.domElement.parentNode===r&&r.removeChild(h.domElement)}},[o,e]),_e.jsx("div",{ref:n,className:"absolute inset-0",style:{touchAction:"none"}})}function jE(){return _e.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-black",children:_e.jsxs("div",{className:"text-center",children:[_e.jsxs("div",{className:"relative w-32 h-32 mx-auto mb-6",children:[_e.jsx("div",{className:"absolute inset-0 rounded-full border-4 border-purple-500/30"}),_e.jsx("div",{className:"absolute inset-0 rounded-full border-4 border-transparent border-t-purple-500 animate-spin"}),_e.jsx("div",{className:"absolute inset-4 rounded-full border-4 border-transparent border-t-pink-500 animate-spin",style:{animationDuration:"1.5s"}}),_e.jsx("div",{className:"absolute inset-8 rounded-full border-4 border-transparent border-t-blue-500 animate-spin",style:{animationDuration:"2s"}})]}),_e.jsx("p",{className:"text-white text-xl animate-pulse",children:"正在生成 3D 照片球..."})]})})}class YE extends Pt.Component{constructor(){super(...arguments),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,n){console.error("3D gallery crashed:",e,n)}render(){var e;return this.state.error?_e.jsx("div",{className:"absolute inset-0 flex items-center justify-center p-6 text-white",children:_e.jsxs("div",{className:"max-w-lg bg-red-900/60 rounded-2xl p-6 backdrop-blur-md border border-red-400/40",children:[_e.jsx("p",{className:"text-lg font-bold mb-2",children:"3D 影像空间渲染出错"}),_e.jsx("pre",{className:"text-xs whitespace-pre-wrap break-all opacity-80",children:String(((e=this.state.error)==null?void 0:e.message)||this.state.error)})]})}):this.props.children}}const qE=/\.(avif|bmp|gif|heic|heif|jpe?g|png|webp)$/i,Pm=48,Vo=620,Lm=Vo+180,Ku=112,Dm=320,$E=58,Xo=[{id:"sphere",name:"照片球体",subtitle:"照片围成立体球面，适合大量回忆的沉浸式浏览",requirement:"需要 24-120 张",minPhotos:24,maxPhotos:120,accent:"from-violet-500 via-fuchsia-500 to-blue-500",surface:"from-violet-950 via-purple-900 to-blue-950",preview:"orb",logo:"/gallery-logos/sphere.png"},{id:"cylinder",name:"圆柱画廊",subtitle:"像环形展厅一样环绕观看，横向浏览节奏更稳定",requirement:"需要 16 的倍数（16-80 张）",minPhotos:16,maxPhotos:80,multipleOf:16,accent:"from-cyan-500 via-blue-500 to-violet-500",surface:"from-cyan-950 via-blue-900 to-violet-950",preview:"cylinder",logo:"/gallery-logos/cylinder.png",variant:"cylinder"},{id:"polyhedron",name:"多面体相册",subtitle:"照片分布在晶体切面上，适合更利落的高级展示",requirement:"需要 12-60 张",minPhotos:12,maxPhotos:60,accent:"from-amber-400 via-rose-500 to-violet-600",surface:"from-amber-950 via-rose-900 to-violet-950",preview:"polyhedron",logo:"/gallery-logos/polyhedron.png",variant:"polyhedron"},{id:"spiral",name:"螺旋星轨",subtitle:"照片沿上升轨道展开，适合时间线和成长记录",requirement:"需要 20-100 张",minPhotos:20,maxPhotos:100,accent:"from-emerald-400 via-cyan-500 to-indigo-600",surface:"from-emerald-950 via-cyan-900 to-indigo-950",preview:"spiral",logo:"/gallery-logos/spiral.png",variant:"spiral"}],Zu=o=>Xo.find(e=>e.id===o)??Xo[0];function Nm({logo:o,name:e,compact:n=!1,logoRef:r,transitioning:a=!1}){return n?_e.jsx("img",{ref:r,src:o,alt:`${e} logo`,className:`size-28 object-contain ${a?"opacity-0":"opacity-100"}`,draggable:!1}):_e.jsx("div",{className:`relative flex min-h-0 w-full flex-1 items-center justify-center ${a?"opacity-0":"opacity-100"}`,children:_e.jsx("img",{ref:r,src:o,alt:`${e} logo`,className:"h-full max-h-[78%] w-full max-w-[78%] object-contain",draggable:!1})})}function KE(){const[o,e]=Pt.useState(null),[n,r]=Pt.useState(null),[a,c]=Pt.useState([]),[d,f]=Pt.useState(!1),[h,m]=Pt.useState(!1),[g,y]=Pt.useState(!1),[x,M]=Pt.useState({done:0,total:0}),[R,C]=Pt.useState(!1),[v,_]=Pt.useState(!1),[F,P]=Pt.useState(!1),U=Pt.useRef({}),J=Pt.useRef({}),z=Pt.useRef({}),O=Pt.useRef(null),$=Pt.useRef(null),L=Pt.useRef(null),A=o?Zu(o):null,V=(A==null?void 0:A.maxPhotos)??Xo[0].maxPhotos;(A==null?void 0:A.minPhotos)??Xo[0].minPhotos;const pe=()=>{const q=window.innerWidth>=640?64:56;return new DOMRect(window.innerWidth/2-Ku/2,q,Ku,Ku)},K=()=>{const q=pe();return new DOMRect(window.innerWidth/2-Dm/2,q.bottom+24,Dm,$E)},ye=(q,Fe=512,Oe=.8)=>new Promise(ke=>{const T=URL.createObjectURL(q),S=new Image;let D=!1;const G=(ne,we)=>{D||(D=!0,window.clearTimeout(Z),URL.revokeObjectURL(T),ke(ne))},Z=window.setTimeout(()=>{G(null)},8e3);S.onload=()=>{try{const ne=Math.min(1,Fe/Math.max(S.width,S.height)),we=Math.max(1,Math.round(S.width*ne)),Me=Math.max(1,Math.round(S.height*ne)),Te=document.createElement("canvas");Te.width=we,Te.height=Me;const je=Te.getContext("2d");if(!je){G(null,!0);return}je.drawImage(S,0,0,we,Me),Te.toBlob(Ee=>{if(!Ee){G(null,!0);return}G(URL.createObjectURL(Ee),!0)},"image/jpeg",Oe)}catch{G(null)}},S.onerror=()=>{G(null)},S.src=T}),ve=async q=>{if(g)return;const Fe=q.filter(Z=>Z.type.startsWith("image/")||qE.test(Z.name)),Oe=q.length-Fe.length;if(Fe.length===0){alert("请选择有效的图片文件");return}const ke=V-a.length;if(ke<=0){alert(`已达上限 ${V} 张，请先清空或减少照片再上传`);return}let T=Fe;Fe.length>ke&&(T=Fe.slice(0,ke),alert(`${(A==null?void 0:A.name)??"当前样式"}最多 ${V} 张，已自动只取前 ${ke} 张（剩余 ${Fe.length-ke} 张被忽略）`)),y(!0),M({done:0,total:T.length});const S=[];let D=0;for(const Z of T)try{const ne=await ye(Z);ne?S.push(ne):D+=1}catch{D+=1}finally{M({done:S.length+D,total:T.length})}const G=Oe+D;c(Z=>{const ne=Math.max(0,V-Z.length),we=S.slice(0,ne);return S.slice(ne).forEach(Me=>URL.revokeObjectURL(Me)),we.length>0?[...Z,...we]:Z}),y(!1),G>0&&alert(`已跳过 ${G} 个不支持或无法读取的文件，其余图片已继续上传`)},le=q=>{q.preventDefault(),C(!0)},de=q=>{q.preventDefault(),C(!1)},B=q=>{q.preventDefault(),C(!1),ve(Array.from(q.dataTransfer.files))},xe=q=>{const Fe=q.target.files?Array.from(q.target.files):[];q.target.value="",ve(Fe)},me=q=>{if(a.length<q.minPhotos)return`${q.name} 至少需要 ${q.minPhotos} 张照片，当前只有 ${a.length} 张。`;if(a.length>q.maxPhotos)return`${q.name} 最多支持 ${q.maxPhotos} 张照片，当前已有 ${a.length} 张。`;if(q.multipleOf&&a.length%q.multipleOf!==0){const Fe=Math.floor(a.length/q.multipleOf)*q.multipleOf,Oe=Math.min(q.maxPhotos,Fe+q.multipleOf);return`${q.name} 每一圈 ${q.multipleOf} 张，照片数量需要是 ${q.multipleOf} 的倍数。当前 ${a.length} 张，可调整为 ${Fe||q.multipleOf}${Oe!==Fe?` 或 ${Oe}`:""} 张。`}return null},k=()=>{if(!A)return;const q=me(A);if(q){alert(q);return}m(!0),setTimeout(()=>{m(!1),f(!0)},1500)},ce=()=>{a.forEach(q=>URL.revokeObjectURL(q)),c([]),f(!1),m(!1)},He=()=>{f(!1),m(!1)},te=q=>{if(q===o)return;const Fe=Zu(q),Oe=me(Fe);if(Oe){alert(Oe);return}e(q)},Se=(q,Fe)=>{var T,S;const Oe=Zu(q),ke=Fe==null?void 0:Fe.getBoundingClientRect();if(ke){const D=((T=J.current[q])==null?void 0:T.getBoundingClientRect())??ke,G=((S=z.current[q])==null?void 0:S.getBoundingClientRect())??ke;r({style:Oe,from:ke,logoFrom:D,logoTo:pe(),titleFrom:G,titleTo:K(),expanded:!1,fading:!1,direction:"enter"}),e(q),_(!1),P(!0),requestAnimationFrame(()=>{requestAnimationFrame(()=>{var we,Me;const Z=((we=O.current)==null?void 0:we.getBoundingClientRect())??pe(),ne=((Me=$.current)==null?void 0:Me.getBoundingClientRect())??K();r(Te=>Te&&{...Te,logoTo:Z,titleTo:ne,expanded:!0}),window.setTimeout(()=>{_(!0),P(!1)},Vo-120),window.setTimeout(()=>{r(Te=>Te&&{...Te,fading:!0})},Vo),window.setTimeout(()=>{r(null)},Lm)})})}else e(q),_(!0);c([]),f(!1),m(!1)},Ae=()=>{var q,Fe;if(A){const Oe=A,ke=new DOMRect(0,0,window.innerWidth,window.innerHeight),T=((q=O.current)==null?void 0:q.getBoundingClientRect())??pe(),S=((Fe=$.current)==null?void 0:Fe.getBoundingClientRect())??K();r({style:Oe,from:ke,logoFrom:T,logoTo:T,titleFrom:S,titleTo:S,expanded:!0,fading:!1,direction:"exit"}),_(!1),e(null),requestAnimationFrame(()=>{requestAnimationFrame(()=>{var we,Me;const D=U.current[Oe.id],G=(D==null?void 0:D.getBoundingClientRect())??ke,Z=((we=J.current[Oe.id])==null?void 0:we.getBoundingClientRect())??G,ne=((Me=z.current[Oe.id])==null?void 0:Me.getBoundingClientRect())??G;r(Te=>Te&&{...Te,from:G,logoFrom:Z,titleFrom:ne,expanded:!1}),window.setTimeout(()=>{r(null)},Lm)})}),window.setTimeout(()=>{a.forEach(D=>URL.revokeObjectURL(D)),c([])},220)}else a.forEach(Oe=>URL.revokeObjectURL(Oe)),c([]),e(null);f(!1),m(!1)},j=q=>{c(Fe=>{const Oe=Fe[q];return Oe&&URL.revokeObjectURL(Oe),Fe.filter((ke,T)=>T!==q)})},ge=()=>{if(!n)return null;const q=window.innerWidth,Fe=window.innerHeight,T=n.expanded?{left:0,top:0,width:q,height:Fe,borderRadius:n.fading?0:Pm,opacity:n.fading?0:1}:{left:n.from.left,top:n.from.top,width:n.from.width,height:n.from.height,borderRadius:Pm,opacity:1},S=n.expanded?n.logoTo:n.logoFrom,D=n.expanded?n.titleTo:n.titleFrom;return _e.jsxs("div",{className:"pointer-events-none fixed inset-0 z-50",children:[_e.jsxs("div",{className:`absolute overflow-hidden border border-white/20 bg-gradient-to-br ${n.style.surface} shadow-[0_32px_120px_rgba(0,0,0,0.45)] backdrop-blur-2xl transition-[left,top,width,height,opacity] duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]`,style:{...T,transitionDuration:`${Vo}ms`},children:[_e.jsx("div",{className:"absolute left-[-8rem] top-[-8rem] h-96 w-96 rounded-full bg-purple-500/40 blur-3xl"}),_e.jsx("div",{className:"absolute bottom-[-10rem] right-[-8rem] h-[28rem] w-[28rem] rounded-full bg-blue-500/35 blur-3xl"})]}),_e.jsx("img",{src:n.style.logo,alt:"","aria-hidden":"true",className:"fixed object-contain transition-all ease-[cubic-bezier(0.19,1,0.22,1)]",style:{left:S.left,top:S.top,width:S.width,height:S.height,opacity:1,transitionDuration:`${Vo}ms`},draggable:!1}),_e.jsx("div",{className:"fixed whitespace-nowrap bg-gradient-to-r from-white via-fuchsia-100 to-blue-100 bg-clip-text font-bold text-transparent transition-all ease-[cubic-bezier(0.19,1,0.22,1)]",style:{left:D.left,top:D.top,width:D.width,height:D.height,fontSize:n.expanded?"2.25rem":"1.5rem",lineHeight:n.expanded?"2.5rem":"2rem",textAlign:n.expanded?"center":"left",opacity:1,transitionDuration:`${Vo}ms`},children:n.style.name})]})},oe=()=>F?_e.jsx("div",{className:"pointer-events-none fixed inset-0 z-40 bg-gradient-to-br from-slate-950 via-purple-950 to-black",children:_e.jsxs("div",{className:"absolute inset-0 opacity-30",children:[_e.jsx("div",{className:"absolute left-[-8rem] top-[-8rem] h-96 w-96 rounded-full bg-purple-500 blur-3xl"}),_e.jsx("div",{className:"absolute bottom-[-10rem] right-[-8rem] h-[28rem] w-[28rem] rounded-full bg-blue-500 blur-3xl"})]})}):null;if(!A)return _e.jsxs("div",{className:"min-h-dvh bg-gradient-to-br from-slate-950 via-purple-950 to-black text-white relative overflow-y-auto xl:h-dvh xl:overflow-hidden",style:{"--home-edge-gap":"clamp(20px, 4.4vw, 96px)"},children:[_e.jsxs("div",{className:"absolute inset-0 opacity-30 pointer-events-none",children:[_e.jsx("div",{className:"absolute left-[-8rem] top-[-8rem] h-96 w-96 rounded-full bg-purple-500 blur-3xl"}),_e.jsx("div",{className:"absolute bottom-[-10rem] right-[-8rem] h-[28rem] w-[28rem] rounded-full bg-blue-500 blur-3xl"})]}),_e.jsxs("main",{className:"relative z-10 mx-auto flex min-h-dvh w-full flex-col px-[var(--home-edge-gap)] pb-[var(--home-edge-gap)] pt-8 xl:h-dvh xl:min-h-0",children:[_e.jsxs("header",{className:"mb-8 grid grid-cols-1 items-end justify-between gap-6 md:grid-cols-2 xl:grid-cols-[repeat(4,minmax(0,410px))]",children:[_e.jsxs("div",{className:"md:col-span-1 xl:col-span-2",children:[_e.jsxs("div",{className:"mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/75 backdrop-blur-md",children:[_e.jsx(p0,{className:"size-4"}),"高级展厅式 3D 相册"]}),_e.jsx("h1",{className:"text-5xl font-bold tracking-normal sm:text-6xl",children:"3D 影像空间"}),_e.jsx("p",{className:"mt-4 max-w-2xl text-lg leading-8 text-white/68",children:"先选择展示样式，再按样式要求上传照片，生成可旋转、可放大的立体影像展厅。"})]}),_e.jsxs("div",{className:"w-full rounded-[28px] border border-white/10 bg-white/10 px-5 py-4 text-sm text-white/70 backdrop-blur-xl shadow-2xl md:col-start-2 xl:col-start-4",children:[_e.jsxs("div",{className:"flex items-center gap-2 text-white",children:[_e.jsx(d0,{className:"size-4"}),"首批 4 种空间样式"]}),_e.jsx("p",{className:"mt-1",children:"照片球体 / 圆柱画廊 / 多面体相册 / 螺旋星轨"})]})]}),_e.jsx("section",{className:"grid min-h-[430px] flex-1 grid-cols-1 items-stretch justify-between gap-6 md:grid-cols-2 xl:min-h-0 xl:grid-cols-[repeat(4,minmax(0,410px))]",children:Xo.map(q=>_e.jsx("button",{type:"button",ref:Fe=>{U.current[q.id]=Fe},onClick:Fe=>Se(q.id,Fe.currentTarget),className:`group relative flex h-full min-h-[430px] flex-col overflow-hidden rounded-[48px] bg-gradient-to-br ${q.surface} p-4 text-left shadow-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 xl:min-h-0`,children:_e.jsxs("div",{className:"relative z-10 flex min-h-0 flex-1 flex-col",children:[_e.jsx(Nm,{logo:q.logo,name:q.name,transitioning:(n==null?void 0:n.style.id)===q.id,logoRef:Fe=>{J.current[q.id]=Fe}}),_e.jsxs("div",{className:"flex shrink-0 flex-col pt-4 xl:pt-3",children:[_e.jsxs("div",{className:"mb-3 flex items-center justify-between gap-3",children:[_e.jsx("h2",{ref:Fe=>{z.current[q.id]=Fe},className:`text-2xl font-semibold text-white ${(n==null?void 0:n.style.id)===q.id?"opacity-0":"opacity-100"}`,children:q.name}),_e.jsx("span",{className:`h-2.5 w-12 rounded-full bg-gradient-to-r ${q.accent}`})]}),_e.jsx("p",{className:"min-h-[4.5rem] text-sm leading-6 text-white/62 xl:min-h-[3.75rem] xl:leading-5",children:q.subtitle}),_e.jsxs("div",{className:"mt-4 flex items-center justify-between border-t border-white/10 pt-4 xl:mt-3 xl:pt-3",children:[_e.jsx("span",{className:"text-sm text-white/55",children:q.requirement}),_e.jsx("span",{className:"rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition-transform group-hover:scale-105",children:"选择"})]})]})]})},q.id))})]}),ge()]});if(h)return _e.jsx(jE,{});if(d)return _e.jsxs("div",{className:"size-full bg-gradient-to-br from-gray-900 via-purple-900 to-black relative overflow-hidden",children:[_e.jsxs("div",{className:"absolute inset-0 opacity-20",children:[_e.jsx("div",{className:"absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"}),_e.jsx("div",{className:"absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse",style:{animationDelay:"1s"}})]}),_e.jsx(YE,{children:A.id==="sphere"?_e.jsx(GE,{images:a}):_e.jsx(XE,{images:a,variant:A.variant??"cylinder"})}),_e.jsxs("div",{className:"absolute top-3 left-3 sm:top-6 sm:left-6 flex gap-3 z-10",children:[_e.jsxs("button",{onClick:He,className:"px-3 py-2 sm:px-6 sm:py-3 bg-white/90 hover:bg-white text-black rounded-full flex items-center gap-1.5 sm:gap-2 transition-all shadow-2xl active:scale-95 sm:hover:scale-105 text-sm sm:text-base",children:[_e.jsx(Tp,{className:"w-4 h-4 sm:w-5 sm:h-5"}),"退出预览"]}),_e.jsx("button",{onClick:Ae,className:"px-3 py-2 sm:px-6 sm:py-3 bg-white/80 hover:bg-white text-black rounded-full flex items-center gap-1.5 sm:gap-2 transition-all shadow-2xl active:scale-95 sm:hover:scale-105 text-sm sm:text-base",children:"重新选样式"})]}),_e.jsx("div",{className:"absolute left-3 top-16 z-10 flex max-w-[calc(100vw-1.5rem)] gap-2 overflow-x-auto rounded-[22px] border border-white/15 bg-black/35 p-2 shadow-2xl backdrop-blur-md sm:left-6 sm:top-24 sm:max-w-none sm:flex-col sm:overflow-visible",children:Xo.map(q=>{const Fe=A.id===q.id;return _e.jsxs("button",{type:"button",onClick:()=>te(q.id),"aria-current":Fe?"true":void 0,className:`group flex h-11 shrink-0 items-center gap-2 rounded-[16px] px-2.5 text-left text-xs font-semibold text-white transition-all active:scale-95 sm:h-12 sm:w-40 ${Fe?"bg-white text-slate-950 shadow-xl":"bg-white/10 hover:bg-white/18"}`,children:[_e.jsx("img",{src:q.logo,alt:"","aria-hidden":"true",className:"size-7 shrink-0 object-contain sm:size-8",draggable:!1}),_e.jsx("span",{className:"whitespace-nowrap",children:q.name})]},q.id)})}),_e.jsx("div",{className:"absolute top-3 right-3 sm:top-6 sm:right-6 flex gap-3 z-10",children:_e.jsxs("button",{onClick:ce,className:"px-3 py-2 sm:px-6 sm:py-3 bg-white/90 hover:bg-white text-black rounded-full flex items-center gap-1.5 sm:gap-2 transition-all shadow-2xl active:scale-95 sm:hover:scale-105 text-sm sm:text-base",children:[_e.jsx(g0,{className:"w-4 h-4 sm:w-5 sm:h-5"}),"重新开始"]})}),_e.jsxs("div",{className:"absolute bottom-3 left-3 sm:bottom-6 sm:left-6 bg-black/60 text-white px-3 py-1.5 sm:px-6 sm:py-3 rounded-full backdrop-blur-md border border-white/20 shadow-xl text-xs sm:text-base",children:["📸 ",A.name," · ",a.length," 张"]}),_e.jsx("div",{className:"absolute bottom-3 right-3 sm:bottom-6 sm:right-6 bg-black/40 text-white/80 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full backdrop-blur-sm text-[10px] sm:text-sm",children:"🎮 单指旋转 · 双指缩放"})]});const Le=a.length<=1?112:a.length<=4?104:a.length<=12?88:a.length<=36?72:a.length<=80?60:52,Ue=Math.min(Math.max(a.length,1),10),N=Le*Ue+12*Math.max(0,Ue-1),Xe=N+40,nt=Math.min(Math.max(Xe+64,480),980),qe=a.length>0;return _e.jsxs("div",{className:`h-dvh flex justify-center bg-gradient-to-br ${A.surface} relative overflow-hidden`,children:[_e.jsxs("div",{className:"absolute inset-0 opacity-30 pointer-events-none",children:[_e.jsx("div",{className:"absolute left-[-8rem] top-[-8rem] h-96 w-96 rounded-full bg-purple-500 blur-3xl"}),_e.jsx("div",{className:"absolute bottom-[-10rem] right-[-8rem] h-[28rem] w-[28rem] rounded-full bg-blue-500 blur-3xl"})]}),_e.jsx("button",{type:"button",onClick:Ae,className:"absolute left-4 top-4 z-20 rounded-full bg-white/85 px-4 py-2 text-sm text-gray-800 shadow-xl backdrop-blur-md transition-all hover:bg-white hover:text-purple-700 sm:left-6 sm:top-6",children:_e.jsxs("span",{className:"inline-flex items-center gap-2",children:[_e.jsx(Tp,{className:"size-4"}),"重选样式"]})}),_e.jsxs("div",{className:`${qe?"max-w-[960px]":"max-w-2xl"} w-full px-6 pb-4 pt-14 sm:pt-16 relative z-10 flex h-full flex-col min-h-0 transition-opacity duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${v?"opacity-100":"opacity-0"}`,children:[_e.jsxs("div",{className:"text-center mb-4 flex shrink-0 flex-col items-center",children:[_e.jsx("div",{className:`mb-3 ${n?"opacity-0":"opacity-100"}`,children:_e.jsx(Nm,{logo:A.logo,name:A.name,compact:!0,transitioning:!!n,logoRef:q=>{O.current=q}})}),_e.jsx("h1",{ref:$,className:`text-4xl mb-2 bg-gradient-to-r from-white via-fuchsia-100 to-blue-100 bg-clip-text text-transparent font-bold ${n?"opacity-0":"opacity-100"}`,children:A.name}),_e.jsxs("p",{className:"text-white/70 text-base",children:[A.name,A.multipleOf?`每圈 ${A.multipleOf} 张，需上传 ${A.multipleOf} 的倍数`:`需要上传 ${A.minPhotos}-${A.maxPhotos} 张照片`]})]}),_e.jsxs("div",{onDragOver:le,onDragLeave:de,onDrop:B,style:{width:qe?`${nt}px`:"min(100%, clamp(380px, 48dvh, 520px))",maxWidth:qe?"92vw":void 0,height:qe?"clamp(380px, 48dvh, 520px)":"min(100%, clamp(380px, 48dvh, 520px))"},className:`relative border-4 border-dashed rounded-[56px] p-7 text-center transition-all duration-300 shadow-xl flex shrink-0 self-center ${R?"border-purple-500 bg-purple-100/80 scale-105 shadow-2xl shadow-purple-500/50":"border-gray-300 bg-white/80 backdrop-blur-sm hover:border-purple-400 hover:shadow-2xl"}`,children:[_e.jsx("input",{ref:L,type:"file",multiple:!0,accept:"image/*,.heic,.heif",onChange:xe,className:"hidden"}),_e.jsx("div",{className:"flex flex-col items-center gap-4 w-full min-h-0",children:a.length===0?_e.jsxs("div",{className:"w-full min-h-0 flex flex-1 flex-col items-center",children:[_e.jsxs("div",{className:"flex-1 min-h-0 flex flex-col items-center justify-center gap-4",children:[_e.jsx("div",{className:"w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 flex items-center justify-center shadow-xl animate-bounce",children:_e.jsx(v0,{className:"text-white",size:40})}),_e.jsxs("div",{children:[_e.jsx("p",{className:"text-2xl mb-2 font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent",children:"拖拽照片到这里"}),_e.jsx("p",{className:"text-gray-500",children:"或者点击下方按钮选择文件"})]})]}),_e.jsxs("button",{onClick:()=>{var q;return(q=L.current)==null?void 0:q.click()},disabled:g,className:"group relative w-full px-10 py-4 rounded-[28px] text-white text-lg font-semibold shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/40 active:scale-[0.98] bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-[length:200%_100%] animate-[gradient-x_4s_ease_infinite]",children:[_e.jsx("span",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"}),_e.jsxs("span",{className:"relative flex items-center justify-center gap-2",children:[_e.jsx(Ap,{size:22}),g?`上传中 ${x.done}/${x.total}`:"选择照片"]})]})]}):_e.jsxs("div",{className:"w-full min-h-0 flex flex-1 flex-col animate-fade-in",children:[_e.jsxs("div",{className:"flex shrink-0 items-center justify-between mb-3 px-1",children:[_e.jsxs("p",{className:"text-base text-gray-700",children:["已上传 ",_e.jsx("span",{className:"text-purple-600 font-bold text-xl",children:a.length})," / ",A.maxPhotos," 张",g&&_e.jsxs("span",{className:"ml-2 text-xs text-blue-600",children:["上传中 ",x.done,"/",x.total]}),a.length<A.minPhotos&&_e.jsxs("span",{className:"ml-2 text-xs text-amber-600",children:["还需 ",A.minPhotos-a.length," 张"]}),A.multipleOf&&a.length>=A.minPhotos&&a.length%A.multipleOf!==0&&_e.jsxs("span",{className:"ml-2 text-xs text-amber-600",children:["需补到 ",Math.min(A.maxPhotos,Math.ceil(a.length/A.multipleOf)*A.multipleOf)," 张"]})]}),_e.jsx("button",{onClick:ce,disabled:g,className:"text-sm text-red-500 hover:text-red-700 hover:scale-110 transition-all px-3 py-1 rounded-full hover:bg-red-50",children:"清空"})]}),_e.jsx("div",{className:"flex-1 min-h-0 mx-auto overflow-y-auto overscroll-contain p-5 bg-gradient-to-br from-gray-50 to-purple-50 rounded-[34px] border border-purple-100 shadow-inner",style:{width:"100%",boxSizing:"border-box"},children:_e.jsx("div",{className:"grid gap-3 justify-start",style:{gridTemplateColumns:`repeat(${Ue}, ${Le}px)`,width:`${N}px`,maxWidth:"100%"},children:a.map((q,Fe)=>_e.jsxs("div",{className:"group relative aspect-square rounded-[20px] overflow-hidden border-2 border-white shadow-md transition-all duration-300 hover:shadow-xl hover:z-10",children:[_e.jsx("img",{src:q,alt:`预览 ${Fe+1}`,className:"w-full h-full object-cover"}),_e.jsx("button",{type:"button",onClick:()=>j(Fe),disabled:g,"aria-label":`删除第 ${Fe+1} 张照片`,className:"absolute top-1.5 right-1.5 w-7 h-7 rounded-full bg-black/70 text-white flex items-center justify-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity shadow-lg hover:bg-red-500 active:scale-95",children:_e.jsx(y0,{className:"w-4 h-4"})})]},Fe))})}),_e.jsxs("div",{className:"shrink-0 pt-3 grid grid-cols-2 gap-3 w-full",children:[_e.jsxs("button",{onClick:()=>{var q;return(q=L.current)==null?void 0:q.click()},disabled:a.length>=A.maxPhotos||g,className:"group relative w-full px-6 py-4 rounded-[28px] text-white text-lg font-semibold shadow-lg overflow-hidden transition-all duration-300 enabled:hover:shadow-2xl enabled:hover:shadow-blue-500/40 enabled:active:scale-[0.98] bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-[length:200%_100%] animate-[gradient-x_4s_ease_infinite] disabled:opacity-50 disabled:cursor-not-allowed disabled:animate-none",children:[_e.jsx("span",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"}),_e.jsxs("span",{className:"relative flex items-center justify-center gap-2",children:[_e.jsx(Ap,{size:22}),g?`上传中 ${x.done}/${x.total}`:"继续上传"]})]}),_e.jsxs("button",{onClick:k,disabled:a.length<A.minPhotos||!!(A.multipleOf&&a.length%A.multipleOf!==0)||g,className:"group relative w-full px-6 py-4 rounded-[28px] text-white text-lg font-semibold shadow-lg overflow-hidden transition-all duration-300 enabled:hover:shadow-2xl enabled:hover:shadow-purple-500/40 enabled:active:scale-[0.98] bg-gradient-to-r from-purple-600 via-fuchsia-500 to-blue-600 bg-[length:200%_100%] animate-[gradient-x_4s_ease_infinite] disabled:opacity-50 disabled:cursor-not-allowed disabled:animate-none",children:[_e.jsx("span",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"}),_e.jsxs("span",{className:"relative flex items-center justify-center gap-2",children:[_e.jsx("span",{children:"✨"}),"开始生成"]})]})]})]})})]}),_e.jsxs("div",{className:"mt-auto pb-3 pt-5 text-center space-y-2 shrink-0",children:[_e.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-8 text-sm text-gray-600",children:[_e.jsxs("div",{className:"flex items-center gap-2",children:[_e.jsx("span",{className:"text-lg",children:"✨"}),_e.jsx("span",{children:"支持 JPG、PNG、HEIC 等格式"})]}),_e.jsxs("div",{className:"flex items-center gap-2",children:[_e.jsx("span",{className:"text-lg",children:"🎮"}),_e.jsx("span",{children:"生成后可自由旋转、缩放"})]})]}),_e.jsx("p",{className:"text-xs text-gray-400",children:"完美支持苹果 iPhone 相机拍摄的照片"})]})]}),oe(),ge()]})}r0.createRoot(document.getElementById("root")).render(_e.jsx(KE,{}));
