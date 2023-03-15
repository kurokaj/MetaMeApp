(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function kl(r,e){const t=Object.create(null),n=r.split(",");for(let i=0;i<n.length;i++)t[n[i]]=!0;return e?i=>!!t[i.toLowerCase()]:i=>!!t[i]}function Gl(r){if(Fe(r)){const e={};for(let t=0;t<r.length;t++){const n=r[t],i=Mt(n)?cp(n):Gl(n);if(i)for(const s in i)e[s]=i[s]}return e}else{if(Mt(r))return r;if(ht(r))return r}}const op=/;(?![^(]*\))/g,ap=/:([^]+)/,lp=/\/\*.*?\*\//gs;function cp(r){const e={};return r.replace(lp,"").split(op).forEach(t=>{if(t){const n=t.split(ap);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function Vl(r){let e="";if(Mt(r))e=r;else if(Fe(r))for(let t=0;t<r.length;t++){const n=Vl(r[t]);n&&(e+=n+" ")}else if(ht(r))for(const t in r)r[t]&&(e+=t+" ");return e.trim()}const up="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",fp=kl(up);function Wf(r){return!!r||r===""}const Qe={},Rr=[],En=()=>{},hp=()=>!1,dp=/^on[^a-z]/,Bo=r=>dp.test(r),Hl=r=>r.startsWith("onUpdate:"),Ct=Object.assign,Wl=(r,e)=>{const t=r.indexOf(e);t>-1&&r.splice(t,1)},pp=Object.prototype.hasOwnProperty,We=(r,e)=>pp.call(r,e),Fe=Array.isArray,vs=r=>ko(r)==="[object Map]",mp=r=>ko(r)==="[object Set]",Ue=r=>typeof r=="function",Mt=r=>typeof r=="string",Xl=r=>typeof r=="symbol",ht=r=>r!==null&&typeof r=="object",Xf=r=>ht(r)&&Ue(r.then)&&Ue(r.catch),gp=Object.prototype.toString,ko=r=>gp.call(r),_p=r=>ko(r).slice(8,-1),xp=r=>ko(r)==="[object Object]",ql=r=>Mt(r)&&r!=="NaN"&&r[0]!=="-"&&""+parseInt(r,10)===r,xo=kl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Go=r=>{const e=Object.create(null);return t=>e[t]||(e[t]=r(t))},vp=/-(\w)/g,Gr=Go(r=>r.replace(vp,(e,t)=>t?t.toUpperCase():"")),yp=/\B([A-Z])/g,es=Go(r=>r.replace(yp,"-$1").toLowerCase()),qf=Go(r=>r.charAt(0).toUpperCase()+r.slice(1)),sa=Go(r=>r?`on${qf(r)}`:""),Eo=(r,e)=>!Object.is(r,e),oa=(r,e)=>{for(let t=0;t<r.length;t++)r[t](e)},Ao=(r,e,t)=>{Object.defineProperty(r,e,{configurable:!0,enumerable:!1,value:t})},Mp=r=>{const e=parseFloat(r);return isNaN(e)?r:e};let Oc;const bp=()=>Oc||(Oc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let vn;class Sp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=vn,!e&&vn&&(this.index=(vn.scopes||(vn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=vn;try{return vn=this,e()}finally{vn=t}}}on(){vn=this}off(){vn=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function wp(r,e=vn){e&&e.active&&e.effects.push(r)}function Tp(){return vn}const jl=r=>{const e=new Set(r);return e.w=0,e.n=0,e},jf=r=>(r.w&bi)>0,Yf=r=>(r.n&bi)>0,Ep=({deps:r})=>{if(r.length)for(let e=0;e<r.length;e++)r[e].w|=bi},Ap=r=>{const{deps:e}=r;if(e.length){let t=0;for(let n=0;n<e.length;n++){const i=e[n];jf(i)&&!Yf(i)?i.delete(r):e[t++]=i,i.w&=~bi,i.n&=~bi}e.length=t}},rl=new WeakMap;let ps=0,bi=1;const sl=30;let Mn;const $i=Symbol(""),ol=Symbol("");class Yl{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,wp(this,n)}run(){if(!this.active)return this.fn();let e=Mn,t=_i;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Mn,Mn=this,_i=!0,bi=1<<++ps,ps<=sl?Ep(this):Fc(this),this.fn()}finally{ps<=sl&&Ap(this),bi=1<<--ps,Mn=this.parent,_i=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Mn===this?this.deferStop=!0:this.active&&(Fc(this),this.onStop&&this.onStop(),this.active=!1)}}function Fc(r){const{deps:e}=r;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(r);e.length=0}}let _i=!0;const Kf=[];function ts(){Kf.push(_i),_i=!1}function ns(){const r=Kf.pop();_i=r===void 0?!0:r}function Wt(r,e,t){if(_i&&Mn){let n=rl.get(r);n||rl.set(r,n=new Map);let i=n.get(t);i||n.set(t,i=jl()),$f(i)}}function $f(r,e){let t=!1;ps<=sl?Yf(r)||(r.n|=bi,t=!jf(r)):t=!r.has(Mn),t&&(r.add(Mn),Mn.deps.push(r))}function ti(r,e,t,n,i,s){const a=rl.get(r);if(!a)return;let o=[];if(e==="clear")o=[...a.values()];else if(t==="length"&&Fe(r)){const l=Number(n);a.forEach((c,u)=>{(u==="length"||u>=l)&&o.push(c)})}else switch(t!==void 0&&o.push(a.get(t)),e){case"add":Fe(r)?ql(t)&&o.push(a.get("length")):(o.push(a.get($i)),vs(r)&&o.push(a.get(ol)));break;case"delete":Fe(r)||(o.push(a.get($i)),vs(r)&&o.push(a.get(ol)));break;case"set":vs(r)&&o.push(a.get($i));break}if(o.length===1)o[0]&&al(o[0]);else{const l=[];for(const c of o)c&&l.push(...c);al(jl(l))}}function al(r,e){const t=Fe(r)?r:[...r];for(const n of t)n.computed&&Nc(n);for(const n of t)n.computed||Nc(n)}function Nc(r,e){(r!==Mn||r.allowRecurse)&&(r.scheduler?r.scheduler():r.run())}const Cp=kl("__proto__,__v_isRef,__isVue"),Zf=new Set(Object.getOwnPropertyNames(Symbol).filter(r=>r!=="arguments"&&r!=="caller").map(r=>Symbol[r]).filter(Xl)),Pp=Kl(),Lp=Kl(!1,!0),Dp=Kl(!0),zc=Rp();function Rp(){const r={};return["includes","indexOf","lastIndexOf"].forEach(e=>{r[e]=function(...t){const n=qe(this);for(let s=0,a=this.length;s<a;s++)Wt(n,"get",s+"");const i=n[e](...t);return i===-1||i===!1?n[e](...t.map(qe)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{r[e]=function(...t){ts();const n=qe(this)[e].apply(this,t);return ns(),n}}),r}function Ip(r){const e=qe(this);return Wt(e,"has",r),e.hasOwnProperty(r)}function Kl(r=!1,e=!1){return function(n,i,s){if(i==="__v_isReactive")return!r;if(i==="__v_isReadonly")return r;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&s===(r?e?Kp:nh:e?th:eh).get(n))return n;const a=Fe(n);if(!r){if(a&&We(zc,i))return Reflect.get(zc,i,s);if(i==="hasOwnProperty")return Ip}const o=Reflect.get(n,i,s);return(Xl(i)?Zf.has(i):Cp(i))||(r||Wt(n,"get",i),e)?o:Ft(o)?a&&ql(i)?o:o.value:ht(o)?r?ih(o):Jl(o):o}}const Op=Jf(),Fp=Jf(!0);function Jf(r=!1){return function(t,n,i,s){let a=t[n];if(Ts(a)&&Ft(a)&&!Ft(i))return!1;if(!r&&(!ll(i)&&!Ts(i)&&(a=qe(a),i=qe(i)),!Fe(t)&&Ft(a)&&!Ft(i)))return a.value=i,!0;const o=Fe(t)&&ql(n)?Number(n)<t.length:We(t,n),l=Reflect.set(t,n,i,s);return t===qe(s)&&(o?Eo(i,a)&&ti(t,"set",n,i):ti(t,"add",n,i)),l}}function Np(r,e){const t=We(r,e);r[e];const n=Reflect.deleteProperty(r,e);return n&&t&&ti(r,"delete",e,void 0),n}function zp(r,e){const t=Reflect.has(r,e);return(!Xl(e)||!Zf.has(e))&&Wt(r,"has",e),t}function Up(r){return Wt(r,"iterate",Fe(r)?"length":$i),Reflect.ownKeys(r)}const Qf={get:Pp,set:Op,deleteProperty:Np,has:zp,ownKeys:Up},Bp={get:Dp,set(r,e){return!0},deleteProperty(r,e){return!0}},kp=Ct({},Qf,{get:Lp,set:Fp}),$l=r=>r,Vo=r=>Reflect.getPrototypeOf(r);function Ws(r,e,t=!1,n=!1){r=r.__v_raw;const i=qe(r),s=qe(e);t||(e!==s&&Wt(i,"get",e),Wt(i,"get",s));const{has:a}=Vo(i),o=n?$l:t?tc:ec;if(a.call(i,e))return o(r.get(e));if(a.call(i,s))return o(r.get(s));r!==i&&r.get(e)}function Xs(r,e=!1){const t=this.__v_raw,n=qe(t),i=qe(r);return e||(r!==i&&Wt(n,"has",r),Wt(n,"has",i)),r===i?t.has(r):t.has(r)||t.has(i)}function qs(r,e=!1){return r=r.__v_raw,!e&&Wt(qe(r),"iterate",$i),Reflect.get(r,"size",r)}function Uc(r){r=qe(r);const e=qe(this);return Vo(e).has.call(e,r)||(e.add(r),ti(e,"add",r,r)),this}function Bc(r,e){e=qe(e);const t=qe(this),{has:n,get:i}=Vo(t);let s=n.call(t,r);s||(r=qe(r),s=n.call(t,r));const a=i.call(t,r);return t.set(r,e),s?Eo(e,a)&&ti(t,"set",r,e):ti(t,"add",r,e),this}function kc(r){const e=qe(this),{has:t,get:n}=Vo(e);let i=t.call(e,r);i||(r=qe(r),i=t.call(e,r)),n&&n.call(e,r);const s=e.delete(r);return i&&ti(e,"delete",r,void 0),s}function Gc(){const r=qe(this),e=r.size!==0,t=r.clear();return e&&ti(r,"clear",void 0,void 0),t}function js(r,e){return function(n,i){const s=this,a=s.__v_raw,o=qe(a),l=e?$l:r?tc:ec;return!r&&Wt(o,"iterate",$i),a.forEach((c,u)=>n.call(i,l(c),l(u),s))}}function Ys(r,e,t){return function(...n){const i=this.__v_raw,s=qe(i),a=vs(s),o=r==="entries"||r===Symbol.iterator&&a,l=r==="keys"&&a,c=i[r](...n),u=t?$l:e?tc:ec;return!e&&Wt(s,"iterate",l?ol:$i),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:o?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function si(r){return function(...e){return r==="delete"?!1:this}}function Gp(){const r={get(s){return Ws(this,s)},get size(){return qs(this)},has:Xs,add:Uc,set:Bc,delete:kc,clear:Gc,forEach:js(!1,!1)},e={get(s){return Ws(this,s,!1,!0)},get size(){return qs(this)},has:Xs,add:Uc,set:Bc,delete:kc,clear:Gc,forEach:js(!1,!0)},t={get(s){return Ws(this,s,!0)},get size(){return qs(this,!0)},has(s){return Xs.call(this,s,!0)},add:si("add"),set:si("set"),delete:si("delete"),clear:si("clear"),forEach:js(!0,!1)},n={get(s){return Ws(this,s,!0,!0)},get size(){return qs(this,!0)},has(s){return Xs.call(this,s,!0)},add:si("add"),set:si("set"),delete:si("delete"),clear:si("clear"),forEach:js(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{r[s]=Ys(s,!1,!1),t[s]=Ys(s,!0,!1),e[s]=Ys(s,!1,!0),n[s]=Ys(s,!0,!0)}),[r,t,e,n]}const[Vp,Hp,Wp,Xp]=Gp();function Zl(r,e){const t=e?r?Xp:Wp:r?Hp:Vp;return(n,i,s)=>i==="__v_isReactive"?!r:i==="__v_isReadonly"?r:i==="__v_raw"?n:Reflect.get(We(t,i)&&i in n?t:n,i,s)}const qp={get:Zl(!1,!1)},jp={get:Zl(!1,!0)},Yp={get:Zl(!0,!1)},eh=new WeakMap,th=new WeakMap,nh=new WeakMap,Kp=new WeakMap;function $p(r){switch(r){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Zp(r){return r.__v_skip||!Object.isExtensible(r)?0:$p(_p(r))}function Jl(r){return Ts(r)?r:Ql(r,!1,Qf,qp,eh)}function Jp(r){return Ql(r,!1,kp,jp,th)}function ih(r){return Ql(r,!0,Bp,Yp,nh)}function Ql(r,e,t,n,i){if(!ht(r)||r.__v_raw&&!(e&&r.__v_isReactive))return r;const s=i.get(r);if(s)return s;const a=Zp(r);if(a===0)return r;const o=new Proxy(r,a===2?n:t);return i.set(r,o),o}function Ir(r){return Ts(r)?Ir(r.__v_raw):!!(r&&r.__v_isReactive)}function Ts(r){return!!(r&&r.__v_isReadonly)}function ll(r){return!!(r&&r.__v_isShallow)}function rh(r){return Ir(r)||Ts(r)}function qe(r){const e=r&&r.__v_raw;return e?qe(e):r}function sh(r){return Ao(r,"__v_skip",!0),r}const ec=r=>ht(r)?Jl(r):r,tc=r=>ht(r)?ih(r):r;function Qp(r){_i&&Mn&&(r=qe(r),$f(r.dep||(r.dep=jl())))}function em(r,e){r=qe(r);const t=r.dep;t&&al(t)}function Ft(r){return!!(r&&r.__v_isRef===!0)}function tm(r){return Ft(r)?r.value:r}const nm={get:(r,e,t)=>tm(Reflect.get(r,e,t)),set:(r,e,t,n)=>{const i=r[e];return Ft(i)&&!Ft(t)?(i.value=t,!0):Reflect.set(r,e,t,n)}};function oh(r){return Ir(r)?r:new Proxy(r,nm)}var ah;class im{constructor(e,t,n,i){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[ah]=!1,this._dirty=!0,this.effect=new Yl(e,()=>{this._dirty||(this._dirty=!0,em(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=n}get value(){const e=qe(this);return Qp(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}ah="__v_isReadonly";function rm(r,e,t=!1){let n,i;const s=Ue(r);return s?(n=r,i=En):(n=r.get,i=r.set),new im(n,i,s||!i,t)}function xi(r,e,t,n){let i;try{i=n?r(...n):r()}catch(s){Ho(s,e,t)}return i}function pn(r,e,t,n){if(Ue(r)){const s=xi(r,e,t,n);return s&&Xf(s)&&s.catch(a=>{Ho(a,e,t)}),s}const i=[];for(let s=0;s<r.length;s++)i.push(pn(r[s],e,t,n));return i}function Ho(r,e,t,n=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const a=e.proxy,o=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](r,a,o)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){xi(l,null,10,[r,a,o]);return}}sm(r,t,i,n)}function sm(r,e,t,n=!0){console.error(r)}let Es=!1,cl=!1;const wt=[];let Fn=0;const Or=[];let jn=null,Hi=0;const lh=Promise.resolve();let nc=null;function om(r){const e=nc||lh;return r?e.then(this?r.bind(this):r):e}function am(r){let e=Fn+1,t=wt.length;for(;e<t;){const n=e+t>>>1;As(wt[n])<r?e=n+1:t=n}return e}function ic(r){(!wt.length||!wt.includes(r,Es&&r.allowRecurse?Fn+1:Fn))&&(r.id==null?wt.push(r):wt.splice(am(r.id),0,r),ch())}function ch(){!Es&&!cl&&(cl=!0,nc=lh.then(fh))}function lm(r){const e=wt.indexOf(r);e>Fn&&wt.splice(e,1)}function cm(r){Fe(r)?Or.push(...r):(!jn||!jn.includes(r,r.allowRecurse?Hi+1:Hi))&&Or.push(r),ch()}function Vc(r,e=Es?Fn+1:0){for(;e<wt.length;e++){const t=wt[e];t&&t.pre&&(wt.splice(e,1),e--,t())}}function uh(r){if(Or.length){const e=[...new Set(Or)];if(Or.length=0,jn){jn.push(...e);return}for(jn=e,jn.sort((t,n)=>As(t)-As(n)),Hi=0;Hi<jn.length;Hi++)jn[Hi]();jn=null,Hi=0}}const As=r=>r.id==null?1/0:r.id,um=(r,e)=>{const t=As(r)-As(e);if(t===0){if(r.pre&&!e.pre)return-1;if(e.pre&&!r.pre)return 1}return t};function fh(r){cl=!1,Es=!0,wt.sort(um);const e=En;try{for(Fn=0;Fn<wt.length;Fn++){const t=wt[Fn];t&&t.active!==!1&&xi(t,null,14)}}finally{Fn=0,wt.length=0,uh(),Es=!1,nc=null,(wt.length||Or.length)&&fh()}}function fm(r,e,...t){if(r.isUnmounted)return;const n=r.vnode.props||Qe;let i=t;const s=e.startsWith("update:"),a=s&&e.slice(7);if(a&&a in n){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:h,trim:f}=n[u]||Qe;f&&(i=t.map(m=>Mt(m)?m.trim():m)),h&&(i=t.map(Mp))}let o,l=n[o=sa(e)]||n[o=sa(Gr(e))];!l&&s&&(l=n[o=sa(es(e))]),l&&pn(l,r,6,i);const c=n[o+"Once"];if(c){if(!r.emitted)r.emitted={};else if(r.emitted[o])return;r.emitted[o]=!0,pn(c,r,6,i)}}function hh(r,e,t=!1){const n=e.emitsCache,i=n.get(r);if(i!==void 0)return i;const s=r.emits;let a={},o=!1;if(!Ue(r)){const l=c=>{const u=hh(c,e,!0);u&&(o=!0,Ct(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),r.extends&&l(r.extends),r.mixins&&r.mixins.forEach(l)}return!s&&!o?(ht(r)&&n.set(r,null),null):(Fe(s)?s.forEach(l=>a[l]=null):Ct(a,s),ht(r)&&n.set(r,a),a)}function Wo(r,e){return!r||!Bo(e)?!1:(e=e.slice(2).replace(/Once$/,""),We(r,e[0].toLowerCase()+e.slice(1))||We(r,es(e))||We(r,e))}let wn=null,dh=null;function Co(r){const e=wn;return wn=r,dh=r&&r.type.__scopeId||null,e}function hm(r,e=wn,t){if(!e||r._n)return r;const n=(...i)=>{n._d&&Zc(-1);const s=Co(e);let a;try{a=r(...i)}finally{Co(s),n._d&&Zc(1)}return a};return n._n=!0,n._c=!0,n._d=!0,n}function aa(r){const{type:e,vnode:t,proxy:n,withProxy:i,props:s,propsOptions:[a],slots:o,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:m,ctx:g,inheritAttrs:d}=r;let p,_;const S=Co(r);try{if(t.shapeFlag&4){const M=i||n;p=In(u.call(M,M,h,s,m,f,g)),_=l}else{const M=e;p=In(M.length>1?M(s,{attrs:l,slots:o,emit:c}):M(s,null)),_=e.props?l:dm(l)}}catch(M){Ms.length=0,Ho(M,r,1),p=Zi(Qn)}let x=p;if(_&&d!==!1){const M=Object.keys(_),{shapeFlag:b}=x;M.length&&b&7&&(a&&M.some(Hl)&&(_=pm(_,a)),x=Si(x,_))}return t.dirs&&(x=Si(x),x.dirs=x.dirs?x.dirs.concat(t.dirs):t.dirs),t.transition&&(x.transition=t.transition),p=x,Co(S),p}const dm=r=>{let e;for(const t in r)(t==="class"||t==="style"||Bo(t))&&((e||(e={}))[t]=r[t]);return e},pm=(r,e)=>{const t={};for(const n in r)(!Hl(n)||!(n.slice(9)in e))&&(t[n]=r[n]);return t};function mm(r,e,t){const{props:n,children:i,component:s}=r,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?Hc(n,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(a[f]!==n[f]&&!Wo(c,f))return!0}}}else return(i||o)&&(!o||!o.$stable)?!0:n===a?!1:n?a?Hc(n,a,c):!0:!!a;return!1}function Hc(r,e,t){const n=Object.keys(e);if(n.length!==Object.keys(r).length)return!0;for(let i=0;i<n.length;i++){const s=n[i];if(e[s]!==r[s]&&!Wo(t,s))return!0}return!1}function gm({vnode:r,parent:e},t){for(;e&&e.subTree===r;)(r=e.vnode).el=t,e=e.parent}const _m=r=>r.__isSuspense;function xm(r,e){e&&e.pendingBranch?Fe(r)?e.effects.push(...r):e.effects.push(r):cm(r)}function vm(r,e){if(ut){let t=ut.provides;const n=ut.parent&&ut.parent.provides;n===t&&(t=ut.provides=Object.create(n)),t[r]=e}}function vo(r,e,t=!1){const n=ut||wn;if(n){const i=n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(i&&r in i)return i[r];if(arguments.length>1)return t&&Ue(e)?e.call(n.proxy):e}}const Ks={};function la(r,e,t){return ph(r,e,t)}function ph(r,e,{immediate:t,deep:n,flush:i,onTrack:s,onTrigger:a}=Qe){const o=Tp()===(ut==null?void 0:ut.scope)?ut:null;let l,c=!1,u=!1;if(Ft(r)?(l=()=>r.value,c=ll(r)):Ir(r)?(l=()=>r,n=!0):Fe(r)?(u=!0,c=r.some(x=>Ir(x)||ll(x)),l=()=>r.map(x=>{if(Ft(x))return x.value;if(Ir(x))return Cr(x);if(Ue(x))return xi(x,o,2)})):Ue(r)?e?l=()=>xi(r,o,2):l=()=>{if(!(o&&o.isUnmounted))return h&&h(),pn(r,o,3,[f])}:l=En,e&&n){const x=l;l=()=>Cr(x())}let h,f=x=>{h=_.onStop=()=>{xi(x,o,4)}},m;if(Ps)if(f=En,e?t&&pn(e,o,3,[l(),u?[]:void 0,f]):l(),i==="sync"){const x=xg();m=x.__watcherHandles||(x.__watcherHandles=[])}else return En;let g=u?new Array(r.length).fill(Ks):Ks;const d=()=>{if(_.active)if(e){const x=_.run();(n||c||(u?x.some((M,b)=>Eo(M,g[b])):Eo(x,g)))&&(h&&h(),pn(e,o,3,[x,g===Ks?void 0:u&&g[0]===Ks?[]:g,f]),g=x)}else _.run()};d.allowRecurse=!!e;let p;i==="sync"?p=d:i==="post"?p=()=>zt(d,o&&o.suspense):(d.pre=!0,o&&(d.id=o.uid),p=()=>ic(d));const _=new Yl(l,p);e?t?d():g=_.run():i==="post"?zt(_.run.bind(_),o&&o.suspense):_.run();const S=()=>{_.stop(),o&&o.scope&&Wl(o.scope.effects,_)};return m&&m.push(S),S}function ym(r,e,t){const n=this.proxy,i=Mt(r)?r.includes(".")?mh(n,r):()=>n[r]:r.bind(n,n);let s;Ue(e)?s=e:(s=e.handler,t=e);const a=ut;Vr(this);const o=ph(i,s.bind(n),t);return a?Vr(a):Ji(),o}function mh(r,e){const t=e.split(".");return()=>{let n=r;for(let i=0;i<t.length&&n;i++)n=n[t[i]];return n}}function Cr(r,e){if(!ht(r)||r.__v_skip||(e=e||new Set,e.has(r)))return r;if(e.add(r),Ft(r))Cr(r.value,e);else if(Fe(r))for(let t=0;t<r.length;t++)Cr(r[t],e);else if(mp(r)||vs(r))r.forEach(t=>{Cr(t,e)});else if(xp(r))for(const t in r)Cr(r[t],e);return r}function Mm(){const r={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return rc(()=>{r.isMounted=!0}),vh(()=>{r.isUnmounting=!0}),r}const on=[Function,Array],bm={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:on,onEnter:on,onAfterEnter:on,onEnterCancelled:on,onBeforeLeave:on,onLeave:on,onAfterLeave:on,onLeaveCancelled:on,onBeforeAppear:on,onAppear:on,onAfterAppear:on,onAppearCancelled:on},setup(r,{slots:e}){const t=ug(),n=Mm();let i;return()=>{const s=e.default&&_h(e.default(),!0);if(!s||!s.length)return;let a=s[0];if(s.length>1){for(const d of s)if(d.type!==Qn){a=d;break}}const o=qe(r),{mode:l}=o;if(n.isLeaving)return ca(a);const c=Wc(a);if(!c)return ca(a);const u=ul(c,o,n,t);fl(c,u);const h=t.subTree,f=h&&Wc(h);let m=!1;const{getTransitionKey:g}=c.type;if(g){const d=g();i===void 0?i=d:d!==i&&(i=d,m=!0)}if(f&&f.type!==Qn&&(!Wi(c,f)||m)){const d=ul(f,o,n,t);if(fl(f,d),l==="out-in")return n.isLeaving=!0,d.afterLeave=()=>{n.isLeaving=!1,t.update.active!==!1&&t.update()},ca(a);l==="in-out"&&c.type!==Qn&&(d.delayLeave=(p,_,S)=>{const x=gh(n,f);x[String(f.key)]=f,p._leaveCb=()=>{_(),p._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=S})}return a}}},Sm=bm;function gh(r,e){const{leavingVNodes:t}=r;let n=t.get(e.type);return n||(n=Object.create(null),t.set(e.type,n)),n}function ul(r,e,t,n){const{appear:i,mode:s,persisted:a=!1,onBeforeEnter:o,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:m,onLeaveCancelled:g,onBeforeAppear:d,onAppear:p,onAfterAppear:_,onAppearCancelled:S}=e,x=String(r.key),M=gh(t,r),b=(v,w)=>{v&&pn(v,n,9,w)},C=(v,w)=>{const R=w[1];b(v,w),Fe(v)?v.every(W=>W.length<=1)&&R():v.length<=1&&R()},L={mode:s,persisted:a,beforeEnter(v){let w=o;if(!t.isMounted)if(i)w=d||o;else return;v._leaveCb&&v._leaveCb(!0);const R=M[x];R&&Wi(r,R)&&R.el._leaveCb&&R.el._leaveCb(),b(w,[v])},enter(v){let w=l,R=c,W=u;if(!t.isMounted)if(i)w=p||l,R=_||c,W=S||u;else return;let j=!1;const N=v._enterCb=O=>{j||(j=!0,O?b(W,[v]):b(R,[v]),L.delayedLeave&&L.delayedLeave(),v._enterCb=void 0)};w?C(w,[v,N]):N()},leave(v,w){const R=String(r.key);if(v._enterCb&&v._enterCb(!0),t.isUnmounting)return w();b(h,[v]);let W=!1;const j=v._leaveCb=N=>{W||(W=!0,w(),N?b(g,[v]):b(m,[v]),v._leaveCb=void 0,M[R]===r&&delete M[R])};M[R]=r,f?C(f,[v,j]):j()},clone(v){return ul(v,e,t,n)}};return L}function ca(r){if(Xo(r))return r=Si(r),r.children=null,r}function Wc(r){return Xo(r)?r.children?r.children[0]:void 0:r}function fl(r,e){r.shapeFlag&6&&r.component?fl(r.component.subTree,e):r.shapeFlag&128?(r.ssContent.transition=e.clone(r.ssContent),r.ssFallback.transition=e.clone(r.ssFallback)):r.transition=e}function _h(r,e=!1,t){let n=[],i=0;for(let s=0;s<r.length;s++){let a=r[s];const o=t==null?a.key:String(t)+String(a.key!=null?a.key:s);a.type===yn?(a.patchFlag&128&&i++,n=n.concat(_h(a.children,e,o))):(e||a.type!==Qn)&&n.push(o!=null?Si(a,{key:o}):a)}if(i>1)for(let s=0;s<n.length;s++)n[s].patchFlag=-2;return n}const yo=r=>!!r.type.__asyncLoader,Xo=r=>r.type.__isKeepAlive;function wm(r,e){xh(r,"a",e)}function Tm(r,e){xh(r,"da",e)}function xh(r,e,t=ut){const n=r.__wdc||(r.__wdc=()=>{let i=t;for(;i;){if(i.isDeactivated)return;i=i.parent}return r()});if(qo(e,n,t),t){let i=t.parent;for(;i&&i.parent;)Xo(i.parent.vnode)&&Em(n,e,t,i),i=i.parent}}function Em(r,e,t,n){const i=qo(e,r,n,!0);yh(()=>{Wl(n[e],i)},t)}function qo(r,e,t=ut,n=!1){if(t){const i=t[r]||(t[r]=[]),s=e.__weh||(e.__weh=(...a)=>{if(t.isUnmounted)return;ts(),Vr(t);const o=pn(e,t,r,a);return Ji(),ns(),o});return n?i.unshift(s):i.push(s),s}}const ri=r=>(e,t=ut)=>(!Ps||r==="sp")&&qo(r,(...n)=>e(...n),t),Am=ri("bm"),rc=ri("m"),Cm=ri("bu"),Pm=ri("u"),vh=ri("bum"),yh=ri("um"),Lm=ri("sp"),Dm=ri("rtg"),Rm=ri("rtc");function Im(r,e=ut){qo("ec",r,e)}function Ri(r,e,t,n){const i=r.dirs,s=e&&e.dirs;for(let a=0;a<i.length;a++){const o=i[a];s&&(o.oldValue=s[a].value);let l=o.dir[n];l&&(ts(),pn(l,t,8,[r.el,o,r,e]),ns())}}const Om=Symbol(),hl=r=>r?Lh(r)?lc(r)||r.proxy:hl(r.parent):null,ys=Ct(Object.create(null),{$:r=>r,$el:r=>r.vnode.el,$data:r=>r.data,$props:r=>r.props,$attrs:r=>r.attrs,$slots:r=>r.slots,$refs:r=>r.refs,$parent:r=>hl(r.parent),$root:r=>hl(r.root),$emit:r=>r.emit,$options:r=>sc(r),$forceUpdate:r=>r.f||(r.f=()=>ic(r.update)),$nextTick:r=>r.n||(r.n=om.bind(r.proxy)),$watch:r=>ym.bind(r)}),ua=(r,e)=>r!==Qe&&!r.__isScriptSetup&&We(r,e),Fm={get({_:r},e){const{ctx:t,setupState:n,data:i,props:s,accessCache:a,type:o,appContext:l}=r;let c;if(e[0]!=="$"){const m=a[e];if(m!==void 0)switch(m){case 1:return n[e];case 2:return i[e];case 4:return t[e];case 3:return s[e]}else{if(ua(n,e))return a[e]=1,n[e];if(i!==Qe&&We(i,e))return a[e]=2,i[e];if((c=r.propsOptions[0])&&We(c,e))return a[e]=3,s[e];if(t!==Qe&&We(t,e))return a[e]=4,t[e];dl&&(a[e]=0)}}const u=ys[e];let h,f;if(u)return e==="$attrs"&&Wt(r,"get",e),u(r);if((h=o.__cssModules)&&(h=h[e]))return h;if(t!==Qe&&We(t,e))return a[e]=4,t[e];if(f=l.config.globalProperties,We(f,e))return f[e]},set({_:r},e,t){const{data:n,setupState:i,ctx:s}=r;return ua(i,e)?(i[e]=t,!0):n!==Qe&&We(n,e)?(n[e]=t,!0):We(r.props,e)||e[0]==="$"&&e.slice(1)in r?!1:(s[e]=t,!0)},has({_:{data:r,setupState:e,accessCache:t,ctx:n,appContext:i,propsOptions:s}},a){let o;return!!t[a]||r!==Qe&&We(r,a)||ua(e,a)||(o=s[0])&&We(o,a)||We(n,a)||We(ys,a)||We(i.config.globalProperties,a)},defineProperty(r,e,t){return t.get!=null?r._.accessCache[e]=0:We(t,"value")&&this.set(r,e,t.value,null),Reflect.defineProperty(r,e,t)}};let dl=!0;function Nm(r){const e=sc(r),t=r.proxy,n=r.ctx;dl=!1,e.beforeCreate&&Xc(e.beforeCreate,r,"bc");const{data:i,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:m,updated:g,activated:d,deactivated:p,beforeDestroy:_,beforeUnmount:S,destroyed:x,unmounted:M,render:b,renderTracked:C,renderTriggered:L,errorCaptured:v,serverPrefetch:w,expose:R,inheritAttrs:W,components:j,directives:N,filters:O}=e;if(c&&zm(c,n,null,r.appContext.config.unwrapInjectedRef),a)for(const K in a){const V=a[K];Ue(V)&&(n[K]=V.bind(t))}if(i){const K=i.call(t,t);ht(K)&&(r.data=Jl(K))}if(dl=!0,s)for(const K in s){const V=s[K],oe=Ue(V)?V.bind(t,t):Ue(V.get)?V.get.bind(t,t):En,se=!Ue(V)&&Ue(V.set)?V.set.bind(t):En,Me=gg({get:oe,set:se});Object.defineProperty(n,K,{enumerable:!0,configurable:!0,get:()=>Me.value,set:B=>Me.value=B})}if(o)for(const K in o)Mh(o[K],n,t,K);if(l){const K=Ue(l)?l.call(t):l;Reflect.ownKeys(K).forEach(V=>{vm(V,K[V])})}u&&Xc(u,r,"c");function Y(K,V){Fe(V)?V.forEach(oe=>K(oe.bind(t))):V&&K(V.bind(t))}if(Y(Am,h),Y(rc,f),Y(Cm,m),Y(Pm,g),Y(wm,d),Y(Tm,p),Y(Im,v),Y(Rm,C),Y(Dm,L),Y(vh,S),Y(yh,M),Y(Lm,w),Fe(R))if(R.length){const K=r.exposed||(r.exposed={});R.forEach(V=>{Object.defineProperty(K,V,{get:()=>t[V],set:oe=>t[V]=oe})})}else r.exposed||(r.exposed={});b&&r.render===En&&(r.render=b),W!=null&&(r.inheritAttrs=W),j&&(r.components=j),N&&(r.directives=N)}function zm(r,e,t=En,n=!1){Fe(r)&&(r=pl(r));for(const i in r){const s=r[i];let a;ht(s)?"default"in s?a=vo(s.from||i,s.default,!0):a=vo(s.from||i):a=vo(s),Ft(a)&&n?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>a.value,set:o=>a.value=o}):e[i]=a}}function Xc(r,e,t){pn(Fe(r)?r.map(n=>n.bind(e.proxy)):r.bind(e.proxy),e,t)}function Mh(r,e,t,n){const i=n.includes(".")?mh(t,n):()=>t[n];if(Mt(r)){const s=e[r];Ue(s)&&la(i,s)}else if(Ue(r))la(i,r.bind(t));else if(ht(r))if(Fe(r))r.forEach(s=>Mh(s,e,t,n));else{const s=Ue(r.handler)?r.handler.bind(t):e[r.handler];Ue(s)&&la(i,s,r)}}function sc(r){const e=r.type,{mixins:t,extends:n}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:a}}=r.appContext,o=s.get(e);let l;return o?l=o:!i.length&&!t&&!n?l=e:(l={},i.length&&i.forEach(c=>Po(l,c,a,!0)),Po(l,e,a)),ht(e)&&s.set(e,l),l}function Po(r,e,t,n=!1){const{mixins:i,extends:s}=e;s&&Po(r,s,t,!0),i&&i.forEach(a=>Po(r,a,t,!0));for(const a in e)if(!(n&&a==="expose")){const o=Um[a]||t&&t[a];r[a]=o?o(r[a],e[a]):e[a]}return r}const Um={data:qc,props:Bi,emits:Bi,methods:Bi,computed:Bi,beforeCreate:Rt,created:Rt,beforeMount:Rt,mounted:Rt,beforeUpdate:Rt,updated:Rt,beforeDestroy:Rt,beforeUnmount:Rt,destroyed:Rt,unmounted:Rt,activated:Rt,deactivated:Rt,errorCaptured:Rt,serverPrefetch:Rt,components:Bi,directives:Bi,watch:km,provide:qc,inject:Bm};function qc(r,e){return e?r?function(){return Ct(Ue(r)?r.call(this,this):r,Ue(e)?e.call(this,this):e)}:e:r}function Bm(r,e){return Bi(pl(r),pl(e))}function pl(r){if(Fe(r)){const e={};for(let t=0;t<r.length;t++)e[r[t]]=r[t];return e}return r}function Rt(r,e){return r?[...new Set([].concat(r,e))]:e}function Bi(r,e){return r?Ct(Ct(Object.create(null),r),e):e}function km(r,e){if(!r)return e;if(!e)return r;const t=Ct(Object.create(null),r);for(const n in e)t[n]=Rt(r[n],e[n]);return t}function Gm(r,e,t,n=!1){const i={},s={};Ao(s,Yo,1),r.propsDefaults=Object.create(null),bh(r,e,i,s);for(const a in r.propsOptions[0])a in i||(i[a]=void 0);t?r.props=n?i:Jp(i):r.type.props?r.props=i:r.props=s,r.attrs=s}function Vm(r,e,t,n){const{props:i,attrs:s,vnode:{patchFlag:a}}=r,o=qe(i),[l]=r.propsOptions;let c=!1;if((n||a>0)&&!(a&16)){if(a&8){const u=r.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Wo(r.emitsOptions,f))continue;const m=e[f];if(l)if(We(s,f))m!==s[f]&&(s[f]=m,c=!0);else{const g=Gr(f);i[g]=ml(l,o,g,m,r,!1)}else m!==s[f]&&(s[f]=m,c=!0)}}}else{bh(r,e,i,s)&&(c=!0);let u;for(const h in o)(!e||!We(e,h)&&((u=es(h))===h||!We(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(i[h]=ml(l,o,h,void 0,r,!0)):delete i[h]);if(s!==o)for(const h in s)(!e||!We(e,h))&&(delete s[h],c=!0)}c&&ti(r,"set","$attrs")}function bh(r,e,t,n){const[i,s]=r.propsOptions;let a=!1,o;if(e)for(let l in e){if(xo(l))continue;const c=e[l];let u;i&&We(i,u=Gr(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:Wo(r.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,a=!0)}if(s){const l=qe(t),c=o||Qe;for(let u=0;u<s.length;u++){const h=s[u];t[h]=ml(i,l,h,c[h],r,!We(c,h))}}return a}function ml(r,e,t,n,i,s){const a=r[t];if(a!=null){const o=We(a,"default");if(o&&n===void 0){const l=a.default;if(a.type!==Function&&Ue(l)){const{propsDefaults:c}=i;t in c?n=c[t]:(Vr(i),n=c[t]=l.call(null,e),Ji())}else n=l}a[0]&&(s&&!o?n=!1:a[1]&&(n===""||n===es(t))&&(n=!0))}return n}function Sh(r,e,t=!1){const n=e.propsCache,i=n.get(r);if(i)return i;const s=r.props,a={},o=[];let l=!1;if(!Ue(r)){const u=h=>{l=!0;const[f,m]=Sh(h,e,!0);Ct(a,f),m&&o.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),r.extends&&u(r.extends),r.mixins&&r.mixins.forEach(u)}if(!s&&!l)return ht(r)&&n.set(r,Rr),Rr;if(Fe(s))for(let u=0;u<s.length;u++){const h=Gr(s[u]);jc(h)&&(a[h]=Qe)}else if(s)for(const u in s){const h=Gr(u);if(jc(h)){const f=s[u],m=a[h]=Fe(f)||Ue(f)?{type:f}:Object.assign({},f);if(m){const g=$c(Boolean,m.type),d=$c(String,m.type);m[0]=g>-1,m[1]=d<0||g<d,(g>-1||We(m,"default"))&&o.push(h)}}}const c=[a,o];return ht(r)&&n.set(r,c),c}function jc(r){return r[0]!=="$"}function Yc(r){const e=r&&r.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:r===null?"null":""}function Kc(r,e){return Yc(r)===Yc(e)}function $c(r,e){return Fe(e)?e.findIndex(t=>Kc(t,r)):Ue(e)&&Kc(e,r)?0:-1}const wh=r=>r[0]==="_"||r==="$stable",oc=r=>Fe(r)?r.map(In):[In(r)],Hm=(r,e,t)=>{if(e._n)return e;const n=hm((...i)=>oc(e(...i)),t);return n._c=!1,n},Th=(r,e,t)=>{const n=r._ctx;for(const i in r){if(wh(i))continue;const s=r[i];if(Ue(s))e[i]=Hm(i,s,n);else if(s!=null){const a=oc(s);e[i]=()=>a}}},Eh=(r,e)=>{const t=oc(e);r.slots.default=()=>t},Wm=(r,e)=>{if(r.vnode.shapeFlag&32){const t=e._;t?(r.slots=qe(e),Ao(e,"_",t)):Th(e,r.slots={})}else r.slots={},e&&Eh(r,e);Ao(r.slots,Yo,1)},Xm=(r,e,t)=>{const{vnode:n,slots:i}=r;let s=!0,a=Qe;if(n.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:(Ct(i,e),!t&&o===1&&delete i._):(s=!e.$stable,Th(e,i)),a=e}else e&&(Eh(r,e),a={default:1});if(s)for(const o in i)!wh(o)&&!(o in a)&&delete i[o]};function Ah(){return{app:null,config:{isNativeTag:hp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let qm=0;function jm(r,e){return function(n,i=null){Ue(n)||(n=Object.assign({},n)),i!=null&&!ht(i)&&(i=null);const s=Ah(),a=new Set;let o=!1;const l=s.app={_uid:qm++,_component:n,_props:i,_container:null,_context:s,_instance:null,version:vg,get config(){return s.config},set config(c){},use(c,...u){return a.has(c)||(c&&Ue(c.install)?(a.add(c),c.install(l,...u)):Ue(c)&&(a.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,h){if(!o){const f=Zi(n,i);return f.appContext=s,u&&e?e(f,c):r(f,c,h),o=!0,l._container=c,c.__vue_app__=l,lc(f.component)||f.component.proxy}},unmount(){o&&(r(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function gl(r,e,t,n,i=!1){if(Fe(r)){r.forEach((f,m)=>gl(f,e&&(Fe(e)?e[m]:e),t,n,i));return}if(yo(n)&&!i)return;const s=n.shapeFlag&4?lc(n.component)||n.component.proxy:n.el,a=i?null:s,{i:o,r:l}=r,c=e&&e.r,u=o.refs===Qe?o.refs={}:o.refs,h=o.setupState;if(c!=null&&c!==l&&(Mt(c)?(u[c]=null,We(h,c)&&(h[c]=null)):Ft(c)&&(c.value=null)),Ue(l))xi(l,o,12,[a,u]);else{const f=Mt(l),m=Ft(l);if(f||m){const g=()=>{if(r.f){const d=f?We(h,l)?h[l]:u[l]:l.value;i?Fe(d)&&Wl(d,s):Fe(d)?d.includes(s)||d.push(s):f?(u[l]=[s],We(h,l)&&(h[l]=u[l])):(l.value=[s],r.k&&(u[r.k]=l.value))}else f?(u[l]=a,We(h,l)&&(h[l]=a)):m&&(l.value=a,r.k&&(u[r.k]=a))};a?(g.id=-1,zt(g,t)):g()}}}const zt=xm;function Ym(r){return Km(r)}function Km(r,e){const t=bp();t.__VUE__=!0;const{insert:n,remove:i,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:m=En,insertStaticContent:g}=r,d=(A,D,X,te=null,J=null,ae=null,ue=!1,ie=null,fe=!!D.dynamicChildren)=>{if(A===D)return;A&&!Wi(A,D)&&(te=be(A),B(A,J,ae,!0),A=null),D.patchFlag===-2&&(fe=!1,D.dynamicChildren=null);const{type:re,ref:T,shapeFlag:y}=D;switch(re){case jo:p(A,D,X,te);break;case Qn:_(A,D,X,te);break;case fa:A==null&&S(D,X,te,ue);break;case yn:j(A,D,X,te,J,ae,ue,ie,fe);break;default:y&1?b(A,D,X,te,J,ae,ue,ie,fe):y&6?N(A,D,X,te,J,ae,ue,ie,fe):(y&64||y&128)&&re.process(A,D,X,te,J,ae,ue,ie,fe,ye)}T!=null&&J&&gl(T,A&&A.ref,ae,D||A,!D)},p=(A,D,X,te)=>{if(A==null)n(D.el=o(D.children),X,te);else{const J=D.el=A.el;D.children!==A.children&&c(J,D.children)}},_=(A,D,X,te)=>{A==null?n(D.el=l(D.children||""),X,te):D.el=A.el},S=(A,D,X,te)=>{[A.el,A.anchor]=g(A.children,D,X,te,A.el,A.anchor)},x=({el:A,anchor:D},X,te)=>{let J;for(;A&&A!==D;)J=f(A),n(A,X,te),A=J;n(D,X,te)},M=({el:A,anchor:D})=>{let X;for(;A&&A!==D;)X=f(A),i(A),A=X;i(D)},b=(A,D,X,te,J,ae,ue,ie,fe)=>{ue=ue||D.type==="svg",A==null?C(D,X,te,J,ae,ue,ie,fe):w(A,D,J,ae,ue,ie,fe)},C=(A,D,X,te,J,ae,ue,ie)=>{let fe,re;const{type:T,props:y,shapeFlag:F,transition:$,dirs:Q}=A;if(fe=A.el=a(A.type,ae,y&&y.is,y),F&8?u(fe,A.children):F&16&&v(A.children,fe,null,te,J,ae&&T!=="foreignObject",ue,ie),Q&&Ri(A,null,te,"created"),L(fe,A,A.scopeId,ue,te),y){for(const pe in y)pe!=="value"&&!xo(pe)&&s(fe,pe,null,y[pe],ae,A.children,te,J,xe);"value"in y&&s(fe,"value",null,y.value),(re=y.onVnodeBeforeMount)&&Ln(re,te,A)}Q&&Ri(A,null,te,"beforeMount");const ce=(!J||J&&!J.pendingBranch)&&$&&!$.persisted;ce&&$.beforeEnter(fe),n(fe,D,X),((re=y&&y.onVnodeMounted)||ce||Q)&&zt(()=>{re&&Ln(re,te,A),ce&&$.enter(fe),Q&&Ri(A,null,te,"mounted")},J)},L=(A,D,X,te,J)=>{if(X&&m(A,X),te)for(let ae=0;ae<te.length;ae++)m(A,te[ae]);if(J){let ae=J.subTree;if(D===ae){const ue=J.vnode;L(A,ue,ue.scopeId,ue.slotScopeIds,J.parent)}}},v=(A,D,X,te,J,ae,ue,ie,fe=0)=>{for(let re=fe;re<A.length;re++){const T=A[re]=ie?ui(A[re]):In(A[re]);d(null,T,D,X,te,J,ae,ue,ie)}},w=(A,D,X,te,J,ae,ue)=>{const ie=D.el=A.el;let{patchFlag:fe,dynamicChildren:re,dirs:T}=D;fe|=A.patchFlag&16;const y=A.props||Qe,F=D.props||Qe;let $;X&&Ii(X,!1),($=F.onVnodeBeforeUpdate)&&Ln($,X,D,A),T&&Ri(D,A,X,"beforeUpdate"),X&&Ii(X,!0);const Q=J&&D.type!=="foreignObject";if(re?R(A.dynamicChildren,re,ie,X,te,Q,ae):ue||V(A,D,ie,null,X,te,Q,ae,!1),fe>0){if(fe&16)W(ie,D,y,F,X,te,J);else if(fe&2&&y.class!==F.class&&s(ie,"class",null,F.class,J),fe&4&&s(ie,"style",y.style,F.style,J),fe&8){const ce=D.dynamicProps;for(let pe=0;pe<ce.length;pe++){const P=ce[pe],z=y[P],_e=F[P];(_e!==z||P==="value")&&s(ie,P,z,_e,J,A.children,X,te,xe)}}fe&1&&A.children!==D.children&&u(ie,D.children)}else!ue&&re==null&&W(ie,D,y,F,X,te,J);(($=F.onVnodeUpdated)||T)&&zt(()=>{$&&Ln($,X,D,A),T&&Ri(D,A,X,"updated")},te)},R=(A,D,X,te,J,ae,ue)=>{for(let ie=0;ie<D.length;ie++){const fe=A[ie],re=D[ie],T=fe.el&&(fe.type===yn||!Wi(fe,re)||fe.shapeFlag&70)?h(fe.el):X;d(fe,re,T,null,te,J,ae,ue,!0)}},W=(A,D,X,te,J,ae,ue)=>{if(X!==te){if(X!==Qe)for(const ie in X)!xo(ie)&&!(ie in te)&&s(A,ie,X[ie],null,ue,D.children,J,ae,xe);for(const ie in te){if(xo(ie))continue;const fe=te[ie],re=X[ie];fe!==re&&ie!=="value"&&s(A,ie,re,fe,ue,D.children,J,ae,xe)}"value"in te&&s(A,"value",X.value,te.value)}},j=(A,D,X,te,J,ae,ue,ie,fe)=>{const re=D.el=A?A.el:o(""),T=D.anchor=A?A.anchor:o("");let{patchFlag:y,dynamicChildren:F,slotScopeIds:$}=D;$&&(ie=ie?ie.concat($):$),A==null?(n(re,X,te),n(T,X,te),v(D.children,X,T,J,ae,ue,ie,fe)):y>0&&y&64&&F&&A.dynamicChildren?(R(A.dynamicChildren,F,X,J,ae,ue,ie),(D.key!=null||J&&D===J.subTree)&&Ch(A,D,!0)):V(A,D,X,T,J,ae,ue,ie,fe)},N=(A,D,X,te,J,ae,ue,ie,fe)=>{D.slotScopeIds=ie,A==null?D.shapeFlag&512?J.ctx.activate(D,X,te,ue,fe):O(D,X,te,J,ae,ue,fe):q(A,D,fe)},O=(A,D,X,te,J,ae,ue)=>{const ie=A.component=cg(A,te,J);if(Xo(A)&&(ie.ctx.renderer=ye),fg(ie),ie.asyncDep){if(J&&J.registerDep(ie,Y),!A.el){const fe=ie.subTree=Zi(Qn);_(null,fe,D,X)}return}Y(ie,A,D,X,J,ae,ue)},q=(A,D,X)=>{const te=D.component=A.component;if(mm(A,D,X))if(te.asyncDep&&!te.asyncResolved){K(te,D,X);return}else te.next=D,lm(te.update),te.update();else D.el=A.el,te.vnode=D},Y=(A,D,X,te,J,ae,ue)=>{const ie=()=>{if(A.isMounted){let{next:T,bu:y,u:F,parent:$,vnode:Q}=A,ce=T,pe;Ii(A,!1),T?(T.el=Q.el,K(A,T,ue)):T=Q,y&&oa(y),(pe=T.props&&T.props.onVnodeBeforeUpdate)&&Ln(pe,$,T,Q),Ii(A,!0);const P=aa(A),z=A.subTree;A.subTree=P,d(z,P,h(z.el),be(z),A,J,ae),T.el=P.el,ce===null&&gm(A,P.el),F&&zt(F,J),(pe=T.props&&T.props.onVnodeUpdated)&&zt(()=>Ln(pe,$,T,Q),J)}else{let T;const{el:y,props:F}=D,{bm:$,m:Q,parent:ce}=A,pe=yo(D);if(Ii(A,!1),$&&oa($),!pe&&(T=F&&F.onVnodeBeforeMount)&&Ln(T,ce,D),Ii(A,!0),y&&De){const P=()=>{A.subTree=aa(A),De(y,A.subTree,A,J,null)};pe?D.type.__asyncLoader().then(()=>!A.isUnmounted&&P()):P()}else{const P=A.subTree=aa(A);d(null,P,X,te,A,J,ae),D.el=P.el}if(Q&&zt(Q,J),!pe&&(T=F&&F.onVnodeMounted)){const P=D;zt(()=>Ln(T,ce,P),J)}(D.shapeFlag&256||ce&&yo(ce.vnode)&&ce.vnode.shapeFlag&256)&&A.a&&zt(A.a,J),A.isMounted=!0,D=X=te=null}},fe=A.effect=new Yl(ie,()=>ic(re),A.scope),re=A.update=()=>fe.run();re.id=A.uid,Ii(A,!0),re()},K=(A,D,X)=>{D.component=A;const te=A.vnode.props;A.vnode=D,A.next=null,Vm(A,D.props,te,X),Xm(A,D.children,X),ts(),Vc(),ns()},V=(A,D,X,te,J,ae,ue,ie,fe=!1)=>{const re=A&&A.children,T=A?A.shapeFlag:0,y=D.children,{patchFlag:F,shapeFlag:$}=D;if(F>0){if(F&128){se(re,y,X,te,J,ae,ue,ie,fe);return}else if(F&256){oe(re,y,X,te,J,ae,ue,ie,fe);return}}$&8?(T&16&&xe(re,J,ae),y!==re&&u(X,y)):T&16?$&16?se(re,y,X,te,J,ae,ue,ie,fe):xe(re,J,ae,!0):(T&8&&u(X,""),$&16&&v(y,X,te,J,ae,ue,ie,fe))},oe=(A,D,X,te,J,ae,ue,ie,fe)=>{A=A||Rr,D=D||Rr;const re=A.length,T=D.length,y=Math.min(re,T);let F;for(F=0;F<y;F++){const $=D[F]=fe?ui(D[F]):In(D[F]);d(A[F],$,X,null,J,ae,ue,ie,fe)}re>T?xe(A,J,ae,!0,!1,y):v(D,X,te,J,ae,ue,ie,fe,y)},se=(A,D,X,te,J,ae,ue,ie,fe)=>{let re=0;const T=D.length;let y=A.length-1,F=T-1;for(;re<=y&&re<=F;){const $=A[re],Q=D[re]=fe?ui(D[re]):In(D[re]);if(Wi($,Q))d($,Q,X,null,J,ae,ue,ie,fe);else break;re++}for(;re<=y&&re<=F;){const $=A[y],Q=D[F]=fe?ui(D[F]):In(D[F]);if(Wi($,Q))d($,Q,X,null,J,ae,ue,ie,fe);else break;y--,F--}if(re>y){if(re<=F){const $=F+1,Q=$<T?D[$].el:te;for(;re<=F;)d(null,D[re]=fe?ui(D[re]):In(D[re]),X,Q,J,ae,ue,ie,fe),re++}}else if(re>F)for(;re<=y;)B(A[re],J,ae,!0),re++;else{const $=re,Q=re,ce=new Map;for(re=Q;re<=F;re++){const ve=D[re]=fe?ui(D[re]):In(D[re]);ve.key!=null&&ce.set(ve.key,re)}let pe,P=0;const z=F-Q+1;let _e=!1,me=0;const we=new Array(z);for(re=0;re<z;re++)we[re]=0;for(re=$;re<=y;re++){const ve=A[re];if(P>=z){B(ve,J,ae,!0);continue}let Le;if(ve.key!=null)Le=ce.get(ve.key);else for(pe=Q;pe<=F;pe++)if(we[pe-Q]===0&&Wi(ve,D[pe])){Le=pe;break}Le===void 0?B(ve,J,ae,!0):(we[Le-Q]=re+1,Le>=me?me=Le:_e=!0,d(ve,D[Le],X,null,J,ae,ue,ie,fe),P++)}const Ae=_e?$m(we):Rr;for(pe=Ae.length-1,re=z-1;re>=0;re--){const ve=Q+re,Le=D[ve],Be=ve+1<T?D[ve+1].el:te;we[re]===0?d(null,Le,X,Be,J,ae,ue,ie,fe):_e&&(pe<0||re!==Ae[pe]?Me(Le,X,Be,2):pe--)}}},Me=(A,D,X,te,J=null)=>{const{el:ae,type:ue,transition:ie,children:fe,shapeFlag:re}=A;if(re&6){Me(A.component.subTree,D,X,te);return}if(re&128){A.suspense.move(D,X,te);return}if(re&64){ue.move(A,D,X,ye);return}if(ue===yn){n(ae,D,X);for(let y=0;y<fe.length;y++)Me(fe[y],D,X,te);n(A.anchor,D,X);return}if(ue===fa){x(A,D,X);return}if(te!==2&&re&1&&ie)if(te===0)ie.beforeEnter(ae),n(ae,D,X),zt(()=>ie.enter(ae),J);else{const{leave:y,delayLeave:F,afterLeave:$}=ie,Q=()=>n(ae,D,X),ce=()=>{y(ae,()=>{Q(),$&&$()})};F?F(ae,Q,ce):ce()}else n(ae,D,X)},B=(A,D,X,te=!1,J=!1)=>{const{type:ae,props:ue,ref:ie,children:fe,dynamicChildren:re,shapeFlag:T,patchFlag:y,dirs:F}=A;if(ie!=null&&gl(ie,null,X,A,!0),T&256){D.ctx.deactivate(A);return}const $=T&1&&F,Q=!yo(A);let ce;if(Q&&(ce=ue&&ue.onVnodeBeforeUnmount)&&Ln(ce,D,A),T&6)k(A.component,X,te);else{if(T&128){A.suspense.unmount(X,te);return}$&&Ri(A,null,D,"beforeUnmount"),T&64?A.type.remove(A,D,X,J,ye,te):re&&(ae!==yn||y>0&&y&64)?xe(re,D,X,!1,!0):(ae===yn&&y&384||!J&&T&16)&&xe(fe,D,X),te&&le(A)}(Q&&(ce=ue&&ue.onVnodeUnmounted)||$)&&zt(()=>{ce&&Ln(ce,D,A),$&&Ri(A,null,D,"unmounted")},X)},le=A=>{const{type:D,el:X,anchor:te,transition:J}=A;if(D===yn){de(X,te);return}if(D===fa){M(A);return}const ae=()=>{i(X),J&&!J.persisted&&J.afterLeave&&J.afterLeave()};if(A.shapeFlag&1&&J&&!J.persisted){const{leave:ue,delayLeave:ie}=J,fe=()=>ue(X,ae);ie?ie(A.el,ae,fe):fe()}else ae()},de=(A,D)=>{let X;for(;A!==D;)X=f(A),i(A),A=X;i(D)},k=(A,D,X)=>{const{bum:te,scope:J,update:ae,subTree:ue,um:ie}=A;te&&oa(te),J.stop(),ae&&(ae.active=!1,B(ue,A,D,X)),ie&&zt(ie,D),zt(()=>{A.isUnmounted=!0},D),D&&D.pendingBranch&&!D.isUnmounted&&A.asyncDep&&!A.asyncResolved&&A.suspenseId===D.pendingId&&(D.deps--,D.deps===0&&D.resolve())},xe=(A,D,X,te=!1,J=!1,ae=0)=>{for(let ue=ae;ue<A.length;ue++)B(A[ue],D,X,te,J)},be=A=>A.shapeFlag&6?be(A.component.subTree):A.shapeFlag&128?A.suspense.next():f(A.anchor||A.el),Te=(A,D,X)=>{A==null?D._vnode&&B(D._vnode,null,null,!0):d(D._vnode||null,A,D,null,null,null,X),Vc(),uh(),D._vnode=A},ye={p:d,um:B,m:Me,r:le,mt:O,mc:v,pc:V,pbc:R,n:be,o:r};let Ce,De;return e&&([Ce,De]=e(ye)),{render:Te,hydrate:Ce,createApp:jm(Te,Ce)}}function Ii({effect:r,update:e},t){r.allowRecurse=e.allowRecurse=t}function Ch(r,e,t=!1){const n=r.children,i=e.children;if(Fe(n)&&Fe(i))for(let s=0;s<n.length;s++){const a=n[s];let o=i[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=i[s]=ui(i[s]),o.el=a.el),t||Ch(a,o)),o.type===jo&&(o.el=a.el)}}function $m(r){const e=r.slice(),t=[0];let n,i,s,a,o;const l=r.length;for(n=0;n<l;n++){const c=r[n];if(c!==0){if(i=t[t.length-1],r[i]<c){e[n]=i,t.push(n);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,r[t[o]]<c?s=o+1:a=o;c<r[t[s]]&&(s>0&&(e[n]=t[s-1]),t[s]=n)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}const Zm=r=>r.__isTeleport,yn=Symbol(void 0),jo=Symbol(void 0),Qn=Symbol(void 0),fa=Symbol(void 0),Ms=[];let Tn=null;function Jm(r=!1){Ms.push(Tn=r?null:[])}function Qm(){Ms.pop(),Tn=Ms[Ms.length-1]||null}let Cs=1;function Zc(r){Cs+=r}function eg(r){return r.dynamicChildren=Cs>0?Tn||Rr:null,Qm(),Cs>0&&Tn&&Tn.push(r),r}function tg(r,e,t,n,i,s){return eg(fi(r,e,t,n,i,s,!0))}function ng(r){return r?r.__v_isVNode===!0:!1}function Wi(r,e){return r.type===e.type&&r.key===e.key}const Yo="__vInternal",Ph=({key:r})=>r??null,Mo=({ref:r,ref_key:e,ref_for:t})=>r!=null?Mt(r)||Ft(r)||Ue(r)?{i:wn,r,k:e,f:!!t}:r:null;function fi(r,e=null,t=null,n=0,i=null,s=r===yn?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:r,props:e,key:e&&Ph(e),ref:e&&Mo(e),scopeId:dh,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:wn};return o?(ac(l,t),s&128&&r.normalize(l)):t&&(l.shapeFlag|=Mt(t)?8:16),Cs>0&&!a&&Tn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Tn.push(l),l}const Zi=ig;function ig(r,e=null,t=null,n=0,i=null,s=!1){if((!r||r===Om)&&(r=Qn),ng(r)){const o=Si(r,e,!0);return t&&ac(o,t),Cs>0&&!s&&Tn&&(o.shapeFlag&6?Tn[Tn.indexOf(r)]=o:Tn.push(o)),o.patchFlag|=-2,o}if(mg(r)&&(r=r.__vccOpts),e){e=rg(e);let{class:o,style:l}=e;o&&!Mt(o)&&(e.class=Vl(o)),ht(l)&&(rh(l)&&!Fe(l)&&(l=Ct({},l)),e.style=Gl(l))}const a=Mt(r)?1:_m(r)?128:Zm(r)?64:ht(r)?4:Ue(r)?2:0;return fi(r,e,t,n,i,a,s,!0)}function rg(r){return r?rh(r)||Yo in r?Ct({},r):r:null}function Si(r,e,t=!1){const{props:n,ref:i,patchFlag:s,children:a}=r,o=e?og(n||{},e):n;return{__v_isVNode:!0,__v_skip:!0,type:r.type,props:o,key:o&&Ph(o),ref:e&&e.ref?t&&i?Fe(i)?i.concat(Mo(e)):[i,Mo(e)]:Mo(e):i,scopeId:r.scopeId,slotScopeIds:r.slotScopeIds,children:a,target:r.target,targetAnchor:r.targetAnchor,staticCount:r.staticCount,shapeFlag:r.shapeFlag,patchFlag:e&&r.type!==yn?s===-1?16:s|16:s,dynamicProps:r.dynamicProps,dynamicChildren:r.dynamicChildren,appContext:r.appContext,dirs:r.dirs,transition:r.transition,component:r.component,suspense:r.suspense,ssContent:r.ssContent&&Si(r.ssContent),ssFallback:r.ssFallback&&Si(r.ssFallback),el:r.el,anchor:r.anchor,ctx:r.ctx,ce:r.ce}}function sg(r=" ",e=0){return Zi(jo,null,r,e)}function In(r){return r==null||typeof r=="boolean"?Zi(Qn):Fe(r)?Zi(yn,null,r.slice()):typeof r=="object"?ui(r):Zi(jo,null,String(r))}function ui(r){return r.el===null&&r.patchFlag!==-1||r.memo?r:Si(r)}function ac(r,e){let t=0;const{shapeFlag:n}=r;if(e==null)e=null;else if(Fe(e))t=16;else if(typeof e=="object")if(n&65){const i=e.default;i&&(i._c&&(i._d=!1),ac(r,i()),i._c&&(i._d=!0));return}else{t=32;const i=e._;!i&&!(Yo in e)?e._ctx=wn:i===3&&wn&&(wn.slots._===1?e._=1:(e._=2,r.patchFlag|=1024))}else Ue(e)?(e={default:e,_ctx:wn},t=32):(e=String(e),n&64?(t=16,e=[sg(e)]):t=8);r.children=e,r.shapeFlag|=t}function og(...r){const e={};for(let t=0;t<r.length;t++){const n=r[t];for(const i in n)if(i==="class")e.class!==n.class&&(e.class=Vl([e.class,n.class]));else if(i==="style")e.style=Gl([e.style,n.style]);else if(Bo(i)){const s=e[i],a=n[i];a&&s!==a&&!(Fe(s)&&s.includes(a))&&(e[i]=s?[].concat(s,a):a)}else i!==""&&(e[i]=n[i])}return e}function Ln(r,e,t,n=null){pn(r,e,7,[t,n])}const ag=Ah();let lg=0;function cg(r,e,t){const n=r.type,i=(e?e.appContext:r.appContext)||ag,s={uid:lg++,vnode:r,type:n,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Sp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Sh(n,i),emitsOptions:hh(n,i),emit:null,emitted:null,propsDefaults:Qe,inheritAttrs:n.inheritAttrs,ctx:Qe,data:Qe,props:Qe,attrs:Qe,slots:Qe,refs:Qe,setupState:Qe,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=fm.bind(null,s),r.ce&&r.ce(s),s}let ut=null;const ug=()=>ut||wn,Vr=r=>{ut=r,r.scope.on()},Ji=()=>{ut&&ut.scope.off(),ut=null};function Lh(r){return r.vnode.shapeFlag&4}let Ps=!1;function fg(r,e=!1){Ps=e;const{props:t,children:n}=r.vnode,i=Lh(r);Gm(r,t,i,e),Wm(r,n);const s=i?hg(r,e):void 0;return Ps=!1,s}function hg(r,e){const t=r.type;r.accessCache=Object.create(null),r.proxy=sh(new Proxy(r.ctx,Fm));const{setup:n}=t;if(n){const i=r.setupContext=n.length>1?pg(r):null;Vr(r),ts();const s=xi(n,r,0,[r.props,i]);if(ns(),Ji(),Xf(s)){if(s.then(Ji,Ji),e)return s.then(a=>{Jc(r,a,e)}).catch(a=>{Ho(a,r,0)});r.asyncDep=s}else Jc(r,s,e)}else Dh(r,e)}function Jc(r,e,t){Ue(e)?r.type.__ssrInlineRender?r.ssrRender=e:r.render=e:ht(e)&&(r.setupState=oh(e)),Dh(r,t)}let Qc;function Dh(r,e,t){const n=r.type;if(!r.render){if(!e&&Qc&&!n.render){const i=n.template||sc(r).template;if(i){const{isCustomElement:s,compilerOptions:a}=r.appContext.config,{delimiters:o,compilerOptions:l}=n,c=Ct(Ct({isCustomElement:s,delimiters:o},a),l);n.render=Qc(i,c)}}r.render=n.render||En}Vr(r),ts(),Nm(r),ns(),Ji()}function dg(r){return new Proxy(r.attrs,{get(e,t){return Wt(r,"get","$attrs"),e[t]}})}function pg(r){const e=n=>{r.exposed=n||{}};let t;return{get attrs(){return t||(t=dg(r))},slots:r.slots,emit:r.emit,expose:e}}function lc(r){if(r.exposed)return r.exposeProxy||(r.exposeProxy=new Proxy(oh(sh(r.exposed)),{get(e,t){if(t in e)return e[t];if(t in ys)return ys[t](r)},has(e,t){return t in e||t in ys}}))}function mg(r){return Ue(r)&&"__vccOpts"in r}const gg=(r,e)=>rm(r,e,Ps),_g=Symbol(""),xg=()=>vo(_g),vg="3.2.47",yg="http://www.w3.org/2000/svg",Xi=typeof document<"u"?document:null,eu=Xi&&Xi.createElement("template"),Mg={insert:(r,e,t)=>{e.insertBefore(r,t||null)},remove:r=>{const e=r.parentNode;e&&e.removeChild(r)},createElement:(r,e,t,n)=>{const i=e?Xi.createElementNS(yg,r):Xi.createElement(r,t?{is:t}:void 0);return r==="select"&&n&&n.multiple!=null&&i.setAttribute("multiple",n.multiple),i},createText:r=>Xi.createTextNode(r),createComment:r=>Xi.createComment(r),setText:(r,e)=>{r.nodeValue=e},setElementText:(r,e)=>{r.textContent=e},parentNode:r=>r.parentNode,nextSibling:r=>r.nextSibling,querySelector:r=>Xi.querySelector(r),setScopeId(r,e){r.setAttribute(e,"")},insertStaticContent(r,e,t,n,i,s){const a=t?t.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),t),!(i===s||!(i=i.nextSibling)););else{eu.innerHTML=n?`<svg>${r}</svg>`:r;const o=eu.content;if(n){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function bg(r,e,t){const n=r._vtc;n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?r.removeAttribute("class"):t?r.setAttribute("class",e):r.className=e}function Sg(r,e,t){const n=r.style,i=Mt(t);if(t&&!i){if(e&&!Mt(e))for(const s in e)t[s]==null&&_l(n,s,"");for(const s in t)_l(n,s,t[s])}else{const s=n.display;i?e!==t&&(n.cssText=t):e&&r.removeAttribute("style"),"_vod"in r&&(n.display=s)}}const tu=/\s*!important$/;function _l(r,e,t){if(Fe(t))t.forEach(n=>_l(r,e,n));else if(t==null&&(t=""),e.startsWith("--"))r.setProperty(e,t);else{const n=wg(r,e);tu.test(t)?r.setProperty(es(n),t.replace(tu,""),"important"):r[n]=t}}const nu=["Webkit","Moz","ms"],ha={};function wg(r,e){const t=ha[e];if(t)return t;let n=Gr(e);if(n!=="filter"&&n in r)return ha[e]=n;n=qf(n);for(let i=0;i<nu.length;i++){const s=nu[i]+n;if(s in r)return ha[e]=s}return e}const iu="http://www.w3.org/1999/xlink";function Tg(r,e,t,n,i){if(n&&e.startsWith("xlink:"))t==null?r.removeAttributeNS(iu,e.slice(6,e.length)):r.setAttributeNS(iu,e,t);else{const s=fp(e);t==null||s&&!Wf(t)?r.removeAttribute(e):r.setAttribute(e,s?"":t)}}function Eg(r,e,t,n,i,s,a){if(e==="innerHTML"||e==="textContent"){n&&a(n,i,s),r[e]=t??"";return}if(e==="value"&&r.tagName!=="PROGRESS"&&!r.tagName.includes("-")){r._value=t;const l=t??"";(r.value!==l||r.tagName==="OPTION")&&(r.value=l),t==null&&r.removeAttribute(e);return}let o=!1;if(t===""||t==null){const l=typeof r[e];l==="boolean"?t=Wf(t):t==null&&l==="string"?(t="",o=!0):l==="number"&&(t=0,o=!0)}try{r[e]=t}catch{}o&&r.removeAttribute(e)}function Ag(r,e,t,n){r.addEventListener(e,t,n)}function Cg(r,e,t,n){r.removeEventListener(e,t,n)}function Pg(r,e,t,n,i=null){const s=r._vei||(r._vei={}),a=s[e];if(n&&a)a.value=n;else{const[o,l]=Lg(e);if(n){const c=s[e]=Ig(n,i);Ag(r,o,c,l)}else a&&(Cg(r,o,a,l),s[e]=void 0)}}const ru=/(?:Once|Passive|Capture)$/;function Lg(r){let e;if(ru.test(r)){e={};let n;for(;n=r.match(ru);)r=r.slice(0,r.length-n[0].length),e[n[0].toLowerCase()]=!0}return[r[2]===":"?r.slice(3):es(r.slice(2)),e]}let da=0;const Dg=Promise.resolve(),Rg=()=>da||(Dg.then(()=>da=0),da=Date.now());function Ig(r,e){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;pn(Og(n,t.value),e,5,[n])};return t.value=r,t.attached=Rg(),t}function Og(r,e){if(Fe(e)){const t=r.stopImmediatePropagation;return r.stopImmediatePropagation=()=>{t.call(r),r._stopped=!0},e.map(n=>i=>!i._stopped&&n&&n(i))}else return e}const su=/^on[a-z]/,Fg=(r,e,t,n,i=!1,s,a,o,l)=>{e==="class"?bg(r,n,i):e==="style"?Sg(r,t,n):Bo(e)?Hl(e)||Pg(r,e,t,n,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ng(r,e,n,i))?Eg(r,e,n,s,a,o,l):(e==="true-value"?r._trueValue=n:e==="false-value"&&(r._falseValue=n),Tg(r,e,n,i))};function Ng(r,e,t,n){return n?!!(e==="innerHTML"||e==="textContent"||e in r&&su.test(e)&&Ue(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&r.tagName==="INPUT"||e==="type"&&r.tagName==="TEXTAREA"||su.test(e)&&Mt(t)?!1:e in r}const zg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Sm.props;const Ug=Ct({patchProp:Fg},Mg);let ou;function Bg(){return ou||(ou=Ym(Ug))}const kg=(...r)=>{const e=Bg().createApp(...r),{mount:t}=e;return e.mount=n=>{const i=Gg(n);if(!i)return;const s=e._component;!Ue(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const a=t(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),a},e};function Gg(r){return Mt(r)?document.querySelector(r):r}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cc="150",fr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},hr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Vg=0,au=1,Hg=2,Rh=1,Wg=2,ms=3,wi=0,Qt=1,hi=2,vi=0,Fr=1,lu=2,cu=3,uu=4,Xg=5,Ar=100,qg=101,jg=102,fu=103,hu=104,Yg=200,Kg=201,$g=202,Zg=203,Ih=204,Oh=205,Jg=206,Qg=207,e_=208,t_=209,n_=210,i_=0,r_=1,s_=2,xl=3,o_=4,a_=5,l_=6,c_=7,Fh=0,u_=1,f_=2,ei=0,h_=1,d_=2,p_=3,m_=4,g_=5,Nh=300,Hr=301,Wr=302,vl=303,yl=304,Ko=306,Ml=1e3,bn=1001,bl=1002,Ot=1003,du=1004,pa=1005,un=1006,__=1007,Ls=1008,ir=1009,x_=1010,v_=1011,zh=1012,y_=1013,ji=1014,Yi=1015,Ds=1016,M_=1017,b_=1018,Nr=1020,S_=1021,Sn=1023,w_=1024,T_=1025,Qi=1026,Xr=1027,E_=1028,A_=1029,C_=1030,P_=1031,L_=1033,ma=33776,ga=33777,_a=33778,xa=33779,pu=35840,mu=35841,gu=35842,_u=35843,D_=36196,xu=37492,vu=37496,yu=37808,Mu=37809,bu=37810,Su=37811,wu=37812,Tu=37813,Eu=37814,Au=37815,Cu=37816,Pu=37817,Lu=37818,Du=37819,Ru=37820,Iu=37821,va=36492,R_=36283,Ou=36284,Fu=36285,Nu=36286,rr=3e3,Je=3001,I_=3200,O_=3201,Uh=0,F_=1,Rn="srgb",Rs="srgb-linear",Bh="display-p3",ya=7680,N_=519,zu=35044,Uu="300 es",Sl=1035;class cr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ma=Math.PI/180,Bu=180/Math.PI;function Bs(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(bt[r&255]+bt[r>>8&255]+bt[r>>16&255]+bt[r>>24&255]+"-"+bt[e&255]+bt[e>>8&255]+"-"+bt[e>>16&15|64]+bt[e>>24&255]+"-"+bt[t&63|128]+bt[t>>8&255]+"-"+bt[t>>16&255]+bt[t>>24&255]+bt[n&255]+bt[n>>8&255]+bt[n>>16&255]+bt[n>>24&255]).toLowerCase()}function Ut(r,e,t){return Math.max(e,Math.min(t,r))}function z_(r,e){return(r%e+e)%e}function ba(r,e,t){return(1-t)*r+t*e}function ku(r){return(r&r-1)===0&&r!==0}function U_(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function $s(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function jt(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Oe{constructor(e=0,t=0){Oe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Nt{constructor(){Nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],m=n[5],g=n[8],d=i[0],p=i[3],_=i[6],S=i[1],x=i[4],M=i[7],b=i[2],C=i[5],L=i[8];return s[0]=a*d+o*S+l*b,s[3]=a*p+o*x+l*C,s[6]=a*_+o*M+l*L,s[1]=c*d+u*S+h*b,s[4]=c*p+u*x+h*C,s[7]=c*_+u*M+h*L,s[2]=f*d+m*S+g*b,s[5]=f*p+m*x+g*C,s[8]=f*_+m*M+g*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*s,m=c*s-a*l,g=t*h+n*f+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/g;return e[0]=h*d,e[1]=(i*c-u*n)*d,e[2]=(o*n-i*a)*d,e[3]=f*d,e[4]=(u*t-i*l)*d,e[5]=(i*s-o*t)*d,e[6]=m*d,e[7]=(n*l-c*t)*d,e[8]=(a*t-n*s)*d,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Sa.makeScale(e,t)),this}rotate(e){return this.premultiply(Sa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Sa.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Sa=new Nt;function kh(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Lo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}class sr{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=s[a+0],m=s[a+1],g=s[a+2],d=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=d;return}if(h!==d||l!==f||c!==m||u!==g){let p=1-o;const _=l*f+c*m+u*g+h*d,S=_>=0?1:-1,x=1-_*_;if(x>Number.EPSILON){const b=Math.sqrt(x),C=Math.atan2(b,_*S);p=Math.sin(p*C)/b,o=Math.sin(o*C)/b}const M=o*S;if(l=l*p+f*M,c=c*p+m*M,u=u*p+g*M,h=h*p+d*M,p===1-o){const b=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=b,c*=b,u*=b,h*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[a],f=s[a+1],m=s[a+2],g=s[a+3];return e[t]=o*g+u*h+l*m-c*f,e[t+1]=l*g+u*f+c*h-o*m,e[t+2]=c*g+u*m+o*f-l*h,e[t+3]=u*g-o*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(s/2),f=l(n/2),m=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=f*u*h+c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h-f*m*g;break;case"YXZ":this._x=f*u*h+c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h+f*m*g;break;case"ZXY":this._x=f*u*h-c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h-f*m*g;break;case"ZYX":this._x=f*u*h-c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h+f*m*g;break;case"YZX":this._x=f*u*h+c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h-f*m*g;break;case"XZY":this._x=f*u*h-c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-i)*m}else if(n>o&&n>h){const m=2*Math.sqrt(1+n-o-h);this._w=(u-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(s+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-n-h);this._w=(s-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-n-o);this._w=(a-i)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ut(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*i-o*n,u=l*n+o*t-s*i,h=l*i+s*n-a*t,f=-s*t-a*n-o*i;return this.x=c*l+f*-s+u*-o-h*-a,this.y=u*l+f*-a+h*-s-c*-o,this.z=h*l+f*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return wa.copy(this).projectOnVector(e),this.sub(wa)}reflect(e){return this.sub(wa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wa=new U,Gu=new sr;function zr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ta(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const B_=new Nt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),k_=new Nt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),di=new U;function G_(r){return r.convertSRGBToLinear(),di.set(r.r,r.g,r.b).applyMatrix3(k_),r.setRGB(di.x,di.y,di.z)}function V_(r){return di.set(r.r,r.g,r.b).applyMatrix3(B_),r.setRGB(di.x,di.y,di.z).convertLinearToSRGB()}const H_={[Rs]:r=>r,[Rn]:r=>r.convertSRGBToLinear(),[Bh]:G_},W_={[Rs]:r=>r,[Rn]:r=>r.convertLinearToSRGB(),[Bh]:V_},Dt={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return Rs},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=H_[e],i=W_[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}};let dr;class Gh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{dr===void 0&&(dr=Lo("canvas")),dr.width=e.width,dr.height=e.height;const n=dr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=dr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Lo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=zr(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(zr(t[n]/255)*255):t[n]=zr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Vh{constructor(e=null){this.isSource=!0,this.uuid=Bs(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Ea(i[a].image)):s.push(Ea(i[a]))}else s=Ea(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ea(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Gh.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let X_=0;class en extends cr{constructor(e=en.DEFAULT_IMAGE,t=en.DEFAULT_MAPPING,n=bn,i=bn,s=un,a=Ls,o=Sn,l=ir,c=en.DEFAULT_ANISOTROPY,u=rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:X_++}),this.uuid=Bs(),this.name="",this.source=new Vh(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ml:e.x=e.x-Math.floor(e.x);break;case bn:e.x=e.x<0?0:1;break;case bl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ml:e.y=e.y-Math.floor(e.y);break;case bn:e.y=e.y<0?0:1;break;case bl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=Nh;en.DEFAULT_ANISOTROPY=1;class et{constructor(e=0,t=0,n=0,i=1){et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],m=l[5],g=l[9],d=l[2],p=l[6],_=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-d)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+d)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,M=(m+1)/2,b=(_+1)/2,C=(u+f)/4,L=(h+d)/4,v=(g+p)/4;return x>M&&x>b?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=C/n,s=L/n):M>b?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=C/i,s=v/i):b<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(b),n=L/s,i=v/s),this.set(n,i,s,t),this}let S=Math.sqrt((p-g)*(p-g)+(h-d)*(h-d)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(h-d)/S,this.z=(f-u)/S,this.w=Math.acos((c+m+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class or extends cr{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new et(0,0,e,t),this.scissorTest=!1,this.viewport=new et(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new en(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:un,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Vh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hh extends en{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class q_ extends en{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ks{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],f=e[l+2];u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>s&&(s=u),h>a&&(a=h),f>o&&(o=f)}return this.min.set(t,n,i),this.max.set(s,a,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),f=e.getZ(l);u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>s&&(s=u),h>a&&(a=h),f>o&&(o=f)}return this.min.set(t,n,i),this.max.set(s,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Oi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let a=0,o=s.count;a<o;a++)Oi.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Oi)}else n.boundingBox===null&&n.computeBoundingBox(),Aa.copy(n.boundingBox),Aa.applyMatrix4(e.matrixWorld),this.union(Aa);const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Oi),Oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ss),Zs.subVectors(this.max,ss),pr.subVectors(e.a,ss),mr.subVectors(e.b,ss),gr.subVectors(e.c,ss),oi.subVectors(mr,pr),ai.subVectors(gr,mr),Fi.subVectors(pr,gr);let t=[0,-oi.z,oi.y,0,-ai.z,ai.y,0,-Fi.z,Fi.y,oi.z,0,-oi.x,ai.z,0,-ai.x,Fi.z,0,-Fi.x,-oi.y,oi.x,0,-ai.y,ai.x,0,-Fi.y,Fi.x,0];return!Ca(t,pr,mr,gr,Zs)||(t=[1,0,0,0,1,0,0,0,1],!Ca(t,pr,mr,gr,Zs))?!1:(Js.crossVectors(oi,ai),t=[Js.x,Js.y,Js.z],Ca(t,pr,mr,gr,Zs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Vn=[new U,new U,new U,new U,new U,new U,new U,new U],Oi=new U,Aa=new ks,pr=new U,mr=new U,gr=new U,oi=new U,ai=new U,Fi=new U,ss=new U,Zs=new U,Js=new U,Ni=new U;function Ca(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Ni.fromArray(r,s);const o=i.x*Math.abs(Ni.x)+i.y*Math.abs(Ni.y)+i.z*Math.abs(Ni.z),l=e.dot(Ni),c=t.dot(Ni),u=n.dot(Ni);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const j_=new ks,os=new U,Pa=new U;class uc{constructor(e=new U,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):j_.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;os.subVectors(e,this.center);const t=os.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(os,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(os.copy(e.center).add(Pa)),this.expandByPoint(os.copy(e.center).sub(Pa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Hn=new U,La=new U,Qs=new U,li=new U,Da=new U,eo=new U,Ra=new U;class Y_{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hn.copy(this.origin).addScaledVector(this.direction,t),Hn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){La.copy(e).add(t).multiplyScalar(.5),Qs.copy(t).sub(e).normalize(),li.copy(this.origin).sub(La);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Qs),o=li.dot(this.direction),l=-li.dot(Qs),c=li.lengthSq(),u=Math.abs(1-a*a);let h,f,m,g;if(u>0)if(h=a*l-o,f=a*o-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const d=1/u;h*=d,f*=d,m=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(La).addScaledVector(Qs,f),m}intersectSphere(e,t){Hn.subVectors(e.center,this.origin);const n=Hn.dot(this.direction),i=Hn.dot(Hn)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Hn)!==null}intersectTriangle(e,t,n,i,s){Da.subVectors(t,e),eo.subVectors(n,e),Ra.crossVectors(Da,eo);let a=this.direction.dot(Ra),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;li.subVectors(this.origin,e);const l=o*this.direction.dot(eo.crossVectors(li,eo));if(l<0)return null;const c=o*this.direction.dot(Da.cross(li));if(c<0||l+c>a)return null;const u=-o*li.dot(Ra);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ft{constructor(){ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,a,o,l,c,u,h,f,m,g,d,p){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=s,_[5]=a,_[9]=o,_[13]=l,_[2]=c,_[6]=u,_[10]=h,_[14]=f,_[3]=m,_[7]=g,_[11]=d,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ft().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/_r.setFromMatrixColumn(e,0).length(),s=1/_r.setFromMatrixColumn(e,1).length(),a=1/_r.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*u,m=a*h,g=o*u,d=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+g*c,t[5]=f-d*c,t[9]=-o*l,t[2]=d-f*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,m=l*h,g=c*u,d=c*h;t[0]=f+d*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=m*o-g,t[6]=d+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,m=l*h,g=c*u,d=c*h;t[0]=f-d*o,t[4]=-a*h,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*u,t[9]=d-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,m=a*h,g=o*u,d=o*h;t[0]=l*u,t[4]=g*c-m,t[8]=f*c+d,t[1]=l*h,t[5]=d*c+f,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,m=a*c,g=o*l,d=o*c;t[0]=l*u,t[4]=d-f*h,t[8]=g*h+m,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*h+g,t[10]=f-d*h}else if(e.order==="XZY"){const f=a*l,m=a*c,g=o*l,d=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+d,t[5]=a*u,t[9]=m*h-g,t[2]=g*h-m,t[6]=o*u,t[10]=d*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(K_,e,$_)}lookAt(e,t,n){const i=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),ci.crossVectors(n,Yt),ci.lengthSq()===0&&(Math.abs(n.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),ci.crossVectors(n,Yt)),ci.normalize(),to.crossVectors(Yt,ci),i[0]=ci.x,i[4]=to.x,i[8]=Yt.x,i[1]=ci.y,i[5]=to.y,i[9]=Yt.y,i[2]=ci.z,i[6]=to.z,i[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],m=n[13],g=n[2],d=n[6],p=n[10],_=n[14],S=n[3],x=n[7],M=n[11],b=n[15],C=i[0],L=i[4],v=i[8],w=i[12],R=i[1],W=i[5],j=i[9],N=i[13],O=i[2],q=i[6],Y=i[10],K=i[14],V=i[3],oe=i[7],se=i[11],Me=i[15];return s[0]=a*C+o*R+l*O+c*V,s[4]=a*L+o*W+l*q+c*oe,s[8]=a*v+o*j+l*Y+c*se,s[12]=a*w+o*N+l*K+c*Me,s[1]=u*C+h*R+f*O+m*V,s[5]=u*L+h*W+f*q+m*oe,s[9]=u*v+h*j+f*Y+m*se,s[13]=u*w+h*N+f*K+m*Me,s[2]=g*C+d*R+p*O+_*V,s[6]=g*L+d*W+p*q+_*oe,s[10]=g*v+d*j+p*Y+_*se,s[14]=g*w+d*N+p*K+_*Me,s[3]=S*C+x*R+M*O+b*V,s[7]=S*L+x*W+M*q+b*oe,s[11]=S*v+x*j+M*Y+b*se,s[15]=S*w+x*N+M*K+b*Me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],m=e[14],g=e[3],d=e[7],p=e[11],_=e[15];return g*(+s*l*h-i*c*h-s*o*f+n*c*f+i*o*m-n*l*m)+d*(+t*l*m-t*c*f+s*a*f-i*a*m+i*c*u-s*l*u)+p*(+t*c*h-t*o*m-s*a*h+n*a*m+s*o*u-n*c*u)+_*(-i*o*u-t*l*h+t*o*f+i*a*h-n*a*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],m=e[11],g=e[12],d=e[13],p=e[14],_=e[15],S=h*p*c-d*f*c+d*l*m-o*p*m-h*l*_+o*f*_,x=g*f*c-u*p*c-g*l*m+a*p*m+u*l*_-a*f*_,M=u*d*c-g*h*c+g*o*m-a*d*m-u*o*_+a*h*_,b=g*h*l-u*d*l-g*o*f+a*d*f+u*o*p-a*h*p,C=t*S+n*x+i*M+s*b;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/C;return e[0]=S*L,e[1]=(d*f*s-h*p*s-d*i*m+n*p*m+h*i*_-n*f*_)*L,e[2]=(o*p*s-d*l*s+d*i*c-n*p*c-o*i*_+n*l*_)*L,e[3]=(h*l*s-o*f*s-h*i*c+n*f*c+o*i*m-n*l*m)*L,e[4]=x*L,e[5]=(u*p*s-g*f*s+g*i*m-t*p*m-u*i*_+t*f*_)*L,e[6]=(g*l*s-a*p*s-g*i*c+t*p*c+a*i*_-t*l*_)*L,e[7]=(a*f*s-u*l*s+u*i*c-t*f*c-a*i*m+t*l*m)*L,e[8]=M*L,e[9]=(g*h*s-u*d*s-g*n*m+t*d*m+u*n*_-t*h*_)*L,e[10]=(a*d*s-g*o*s+g*n*c-t*d*c-a*n*_+t*o*_)*L,e[11]=(u*o*s-a*h*s-u*n*c+t*h*c+a*n*m-t*o*m)*L,e[12]=b*L,e[13]=(u*d*i-g*h*i+g*n*f-t*d*f-u*n*p+t*h*p)*L,e[14]=(g*o*i-a*d*i-g*n*l+t*d*l+a*n*p-t*o*p)*L,e[15]=(a*h*i-u*o*i+u*n*l-t*h*l-a*n*f+t*o*f)*L,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,f=s*c,m=s*u,g=s*h,d=a*u,p=a*h,_=o*h,S=l*c,x=l*u,M=l*h,b=n.x,C=n.y,L=n.z;return i[0]=(1-(d+_))*b,i[1]=(m+M)*b,i[2]=(g-x)*b,i[3]=0,i[4]=(m-M)*C,i[5]=(1-(f+_))*C,i[6]=(p+S)*C,i[7]=0,i[8]=(g+x)*L,i[9]=(p-S)*L,i[10]=(1-(f+d))*L,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=_r.set(i[0],i[1],i[2]).length();const a=_r.set(i[4],i[5],i[6]).length(),o=_r.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],gn.copy(this);const c=1/s,u=1/a,h=1/o;return gn.elements[0]*=c,gn.elements[1]*=c,gn.elements[2]*=c,gn.elements[4]*=u,gn.elements[5]*=u,gn.elements[6]*=u,gn.elements[8]*=h,gn.elements[9]*=h,gn.elements[10]*=h,t.setFromRotationMatrix(gn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a){const o=this.elements,l=2*s/(t-e),c=2*s/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),f=-(a+s)/(a-s),m=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=f,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,s,a){const o=this.elements,l=1/(t-e),c=1/(n-i),u=1/(a-s),h=(t+e)*l,f=(n+i)*c,m=(a+s)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-f,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const _r=new U,gn=new ft,K_=new U(0,0,0),$_=new U(1,1,1),ci=new U,to=new U,Yt=new U,Vu=new ft,Hu=new sr;class $o{constructor(e=0,t=0,n=0,i=$o.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(Ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ut(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ut(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Vu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hu.setFromEuler(this),this.setFromQuaternion(Hu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$o.DEFAULT_ORDER="XYZ";class Wh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Z_=0;const Wu=new U,xr=new sr,Wn=new ft,no=new U,as=new U,J_=new U,Q_=new sr,Xu=new U(1,0,0),qu=new U(0,1,0),ju=new U(0,0,1),e0={type:"added"},Yu={type:"removed"};class kt extends cr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Z_++}),this.uuid=Bs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kt.DEFAULT_UP.clone();const e=new U,t=new $o,n=new sr,i=new U(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ft},normalMatrix:{value:new Nt}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Wh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xr.setFromAxisAngle(e,t),this.quaternion.multiply(xr),this}rotateOnWorldAxis(e,t){return xr.setFromAxisAngle(e,t),this.quaternion.premultiply(xr),this}rotateX(e){return this.rotateOnAxis(Xu,e)}rotateY(e){return this.rotateOnAxis(qu,e)}rotateZ(e){return this.rotateOnAxis(ju,e)}translateOnAxis(e,t){return Wu.copy(e).applyQuaternion(this.quaternion),this.position.add(Wu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xu,e)}translateY(e){return this.translateOnAxis(qu,e)}translateZ(e){return this.translateOnAxis(ju,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?no.copy(e):no.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),as.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(as,no,this.up):Wn.lookAt(no,as,this.up),this.quaternion.setFromRotationMatrix(Wn),i&&(Wn.extractRotation(i.matrixWorld),xr.setFromRotationMatrix(Wn),this.quaternion.premultiply(xr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(e0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Yu)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Yu)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,e,J_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,Q_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}kt.DEFAULT_UP=new U(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _n=new U,Xn=new U,Ia=new U,qn=new U,vr=new U,yr=new U,Ku=new U,Oa=new U,Fa=new U,Na=new U;class $n{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),_n.subVectors(e,t),i.cross(_n);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){_n.subVectors(i,t),Xn.subVectors(n,t),Ia.subVectors(e,t);const a=_n.dot(_n),o=_n.dot(Xn),l=_n.dot(Ia),c=Xn.dot(Xn),u=Xn.dot(Ia),h=a*c-o*o;if(h===0)return s.set(-2,-1,-1);const f=1/h,m=(c*l-o*u)*f,g=(a*u-o*l)*f;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,qn),qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getUV(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,qn),l.set(0,0),l.addScaledVector(s,qn.x),l.addScaledVector(a,qn.y),l.addScaledVector(o,qn.z),l}static isFrontFacing(e,t,n,i){return _n.subVectors(n,t),Xn.subVectors(e,t),_n.cross(Xn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _n.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),_n.cross(Xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return $n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return $n.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return $n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;vr.subVectors(i,n),yr.subVectors(s,n),Oa.subVectors(e,n);const l=vr.dot(Oa),c=yr.dot(Oa);if(l<=0&&c<=0)return t.copy(n);Fa.subVectors(e,i);const u=vr.dot(Fa),h=yr.dot(Fa);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(vr,a);Na.subVectors(e,s);const m=vr.dot(Na),g=yr.dot(Na);if(g>=0&&m<=g)return t.copy(s);const d=m*c-l*g;if(d<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(yr,o);const p=u*g-m*h;if(p<=0&&h-u>=0&&m-g>=0)return Ku.subVectors(s,i),o=(h-u)/(h-u+(m-g)),t.copy(i).addScaledVector(Ku,o);const _=1/(p+d+f);return a=d*_,o=f*_,t.copy(n).addScaledVector(vr,a).addScaledVector(yr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let t0=0;class Gs extends cr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=Bs(),this.name="",this.type="Material",this.blending=Fr,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Ih,this.blendDst=Oh,this.blendEquation=Ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=xl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=N_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ya,this.stencilZFail=ya,this.stencilZPass=ya,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Fr&&(n.blending=this.blending),this.side!==wi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Xh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xn={h:0,s:0,l:0},io={h:0,s:0,l:0};function za(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class $e{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Dt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Dt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Dt.workingColorSpace){if(e=z_(e,1),t=Ut(t,0,1),n=Ut(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=za(a,s,e+1/3),this.g=za(a,s,e),this.b=za(a,s,e-1/3)}return Dt.toWorkingColorSpace(this,i),this}setStyle(e,t=Rn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Dt.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Dt.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,u,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Dt.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Dt.toWorkingColorSpace(this,t),this;console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rn){const n=Xh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zr(e.r),this.g=zr(e.g),this.b=zr(e.b),this}copyLinearToSRGB(e){return this.r=Ta(e.r),this.g=Ta(e.g),this.b=Ta(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rn){return Dt.fromWorkingColorSpace(St.copy(this),e),Ut(St.r*255,0,255)<<16^Ut(St.g*255,0,255)<<8^Ut(St.b*255,0,255)<<0}getHexString(e=Rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Dt.workingColorSpace){Dt.fromWorkingColorSpace(St.copy(this),t);const n=St.r,i=St.g,s=St.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Dt.workingColorSpace){return Dt.fromWorkingColorSpace(St.copy(this),t),e.r=St.r,e.g=St.g,e.b=St.b,e}getStyle(e=Rn){Dt.fromWorkingColorSpace(St.copy(this),e);const t=St.r,n=St.g,i=St.b;return e!==Rn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${i*255|0})`}offsetHSL(e,t,n){return this.getHSL(xn),xn.h+=e,xn.s+=t,xn.l+=n,this.setHSL(xn.h,xn.s,xn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(xn),e.getHSL(io);const n=ba(xn.h,io.h,t),i=ba(xn.s,io.s,t),s=ba(xn.l,io.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const St=new $e;$e.NAMES=Xh;class qh extends Gs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Fh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const lt=new U,ro=new Oe;class zn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=zu,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ro.fromBufferAttribute(this,t),ro.applyMatrix3(e),this.setXY(t,ro.x,ro.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix3(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix4(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyNormalMatrix(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.transformDirection(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=$s(t,this.array)),t}setX(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=$s(t,this.array)),t}setY(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=$s(t,this.array)),t}setZ(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=$s(t,this.array)),t}setW(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array),i=jt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array),i=jt(i,this.array),s=jt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zu&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class jh extends zn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Yh extends zn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Un extends zn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let n0=0;const an=new ft,Ua=new kt,Mr=new U,Kt=new ks,ls=new ks,xt=new U;class Ai extends cr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=Bs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kh(e)?Yh:jh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Nt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return an.makeRotationFromQuaternion(e),this.applyMatrix4(an),this}rotateX(e){return an.makeRotationX(e),this.applyMatrix4(an),this}rotateY(e){return an.makeRotationY(e),this.applyMatrix4(an),this}rotateZ(e){return an.makeRotationZ(e),this.applyMatrix4(an),this}translate(e,t,n){return an.makeTranslation(e,t,n),this.applyMatrix4(an),this}scale(e,t,n){return an.makeScale(e,t,n),this.applyMatrix4(an),this}lookAt(e){return Ua.lookAt(e),Ua.updateMatrix(),this.applyMatrix4(Ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mr).negate(),this.translate(Mr.x,Mr.y,Mr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Un(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ks);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Kt.setFromBufferAttribute(s),this.morphTargetsRelative?(xt.addVectors(this.boundingBox.min,Kt.min),this.boundingBox.expandByPoint(xt),xt.addVectors(this.boundingBox.max,Kt.max),this.boundingBox.expandByPoint(xt)):(this.boundingBox.expandByPoint(Kt.min),this.boundingBox.expandByPoint(Kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new uc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(Kt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];ls.setFromBufferAttribute(o),this.morphTargetsRelative?(xt.addVectors(Kt.min,ls.min),Kt.expandByPoint(xt),xt.addVectors(Kt.max,ls.max),Kt.expandByPoint(xt)):(Kt.expandByPoint(ls.min),Kt.expandByPoint(ls.max))}Kt.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)xt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(xt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)xt.fromBufferAttribute(o,c),l&&(Mr.fromBufferAttribute(e,c),xt.add(Mr)),i=Math.max(i,n.distanceToSquared(xt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let R=0;R<o;R++)c[R]=new U,u[R]=new U;const h=new U,f=new U,m=new U,g=new Oe,d=new Oe,p=new Oe,_=new U,S=new U;function x(R,W,j){h.fromArray(i,R*3),f.fromArray(i,W*3),m.fromArray(i,j*3),g.fromArray(a,R*2),d.fromArray(a,W*2),p.fromArray(a,j*2),f.sub(h),m.sub(h),d.sub(g),p.sub(g);const N=1/(d.x*p.y-p.x*d.y);isFinite(N)&&(_.copy(f).multiplyScalar(p.y).addScaledVector(m,-d.y).multiplyScalar(N),S.copy(m).multiplyScalar(d.x).addScaledVector(f,-p.x).multiplyScalar(N),c[R].add(_),c[W].add(_),c[j].add(_),u[R].add(S),u[W].add(S),u[j].add(S))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let R=0,W=M.length;R<W;++R){const j=M[R],N=j.start,O=j.count;for(let q=N,Y=N+O;q<Y;q+=3)x(n[q+0],n[q+1],n[q+2])}const b=new U,C=new U,L=new U,v=new U;function w(R){L.fromArray(s,R*3),v.copy(L);const W=c[R];b.copy(W),b.sub(L.multiplyScalar(L.dot(W))).normalize(),C.crossVectors(v,W);const N=C.dot(u[R])<0?-1:1;l[R*4]=b.x,l[R*4+1]=b.y,l[R*4+2]=b.z,l[R*4+3]=N}for(let R=0,W=M.length;R<W;++R){const j=M[R],N=j.start,O=j.count;for(let q=N,Y=N+O;q<Y;q+=3)w(n[q+0]),w(n[q+1]),w(n[q+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new zn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new U,s=new U,a=new U,o=new U,l=new U,c=new U,u=new U,h=new U;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),d=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,d),a.fromBufferAttribute(t,p),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,d),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(d,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)xt.fromBufferAttribute(e,t),xt.normalize(),e.setXYZ(t,xt.x,xt.y,xt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let m=0,g=0;for(let d=0,p=l.length;d<p;d++){o.isInterleavedBufferAttribute?m=l[d]*o.data.stride+o.offset:m=l[d]*u;for(let _=0;_<u;_++)f[g++]=c[m++]}return new zn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ai,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],m=e(f,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $u=new ft,Dn=new Y_,so=new uc,Zu=new U,cs=new U,us=new U,fs=new U,Ba=new U,oo=new U,ao=new Oe,lo=new Oe,co=new Oe,ka=new U,uo=new U;class Zn extends kt{constructor(e=new Ai,t=new qh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){oo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(Ba.fromBufferAttribute(h,e),a?oo.addScaledVector(Ba,u):oo.addScaledVector(Ba.sub(t),u))}t.add(oo)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),so.copy(n.boundingSphere),so.applyMatrix4(s),Dn.copy(e.ray).recast(e.near),so.containsPoint(Dn.origin)===!1&&(Dn.intersectSphere(so,Zu)===null||Dn.origin.distanceToSquared(Zu)>(e.far-e.near)**2))||($u.copy(s).invert(),Dn.copy(e.ray).applyMatrix4($u),n.boundingBox!==null&&Dn.intersectsBox(n.boundingBox)===!1))return;let a;const o=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,h=n.groups,f=n.drawRange;if(o!==null)if(Array.isArray(i))for(let m=0,g=h.length;m<g;m++){const d=h[m],p=i[d.materialIndex],_=Math.max(d.start,f.start),S=Math.min(o.count,Math.min(d.start+d.count,f.start+f.count));for(let x=_,M=S;x<M;x+=3){const b=o.getX(x),C=o.getX(x+1),L=o.getX(x+2);a=fo(this,p,e,Dn,c,u,b,C,L),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=d.materialIndex,t.push(a))}}else{const m=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let d=m,p=g;d<p;d+=3){const _=o.getX(d),S=o.getX(d+1),x=o.getX(d+2);a=fo(this,i,e,Dn,c,u,_,S,x),a&&(a.faceIndex=Math.floor(d/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(i))for(let m=0,g=h.length;m<g;m++){const d=h[m],p=i[d.materialIndex],_=Math.max(d.start,f.start),S=Math.min(l.count,Math.min(d.start+d.count,f.start+f.count));for(let x=_,M=S;x<M;x+=3){const b=x,C=x+1,L=x+2;a=fo(this,p,e,Dn,c,u,b,C,L),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=d.materialIndex,t.push(a))}}else{const m=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let d=m,p=g;d<p;d+=3){const _=d,S=d+1,x=d+2;a=fo(this,i,e,Dn,c,u,_,S,x),a&&(a.faceIndex=Math.floor(d/3),t.push(a))}}}}function i0(r,e,t,n,i,s,a,o){let l;if(e.side===Qt?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===wi,o),l===null)return null;uo.copy(o),uo.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(uo);return c<t.near||c>t.far?null:{distance:c,point:uo.clone(),object:r}}function fo(r,e,t,n,i,s,a,o,l){r.getVertexPosition(a,cs),r.getVertexPosition(o,us),r.getVertexPosition(l,fs);const c=i0(r,e,t,n,cs,us,fs,ka);if(c){i&&(ao.fromBufferAttribute(i,a),lo.fromBufferAttribute(i,o),co.fromBufferAttribute(i,l),c.uv=$n.getUV(ka,cs,us,fs,ao,lo,co,new Oe)),s&&(ao.fromBufferAttribute(s,a),lo.fromBufferAttribute(s,o),co.fromBufferAttribute(s,l),c.uv2=$n.getUV(ka,cs,us,fs,ao,lo,co,new Oe));const u={a,b:o,c:l,normal:new U,materialIndex:0};$n.getNormal(cs,us,fs,u.normal),c.face=u}return c}class Vs extends Ai{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,m=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Un(c,3)),this.setAttribute("normal",new Un(u,3)),this.setAttribute("uv",new Un(h,2));function g(d,p,_,S,x,M,b,C,L,v,w){const R=M/L,W=b/v,j=M/2,N=b/2,O=C/2,q=L+1,Y=v+1;let K=0,V=0;const oe=new U;for(let se=0;se<Y;se++){const Me=se*W-N;for(let B=0;B<q;B++){const le=B*R-j;oe[d]=le*S,oe[p]=Me*x,oe[_]=O,c.push(oe.x,oe.y,oe.z),oe[d]=0,oe[p]=0,oe[_]=C>0?1:-1,u.push(oe.x,oe.y,oe.z),h.push(B/L),h.push(1-se/v),K+=1}}for(let se=0;se<v;se++)for(let Me=0;Me<L;Me++){const B=f+Me+q*se,le=f+Me+q*(se+1),de=f+(Me+1)+q*(se+1),k=f+(Me+1)+q*se;l.push(B,le,k),l.push(le,de,k),V+=6}o.addGroup(m,V,w),m+=V,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function qr(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function It(r){const e={};for(let t=0;t<r.length;t++){const n=qr(r[t]);for(const i in n)e[i]=n[i]}return e}function r0(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Kh(r){return r.getRenderTarget()===null&&r.outputEncoding===Je?Rn:Rs}const s0={clone:qr,merge:It};var o0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,a0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ar extends Gs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=o0,this.fragmentShader=a0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qr(e.uniforms),this.uniformsGroups=r0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class $h extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Zt extends $h{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Bu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ma*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bu*2*Math.atan(Math.tan(Ma*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ma*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const br=-90,Sr=1;class l0 extends kt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Zt(br,Sr,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new Zt(br,Sr,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const a=new Zt(br,Sr,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const o=new Zt(br,Sr,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new Zt(br,Sr,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Zt(br,Sr,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,a,o,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=ei,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Zh extends en{constructor(e,t,n,i,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Hr,super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class c0 extends or{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Zh(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:un}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Vs(5,5,5),s=new ar({name:"CubemapFromEquirect",uniforms:qr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qt,blending:vi});s.uniforms.tEquirect.value=t;const a=new Zn(i,s),o=t.minFilter;return t.minFilter===Ls&&(t.minFilter=un),new l0(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const Ga=new U,u0=new U,f0=new Nt;class ki{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ga.subVectors(n,t).cross(u0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ga),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||f0.getNormalMatrix(e),i=this.coplanarPoint(Ga).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wr=new uc,ho=new U;class fc{constructor(e=new ki,t=new ki,n=new ki,i=new ki,s=new ki,a=new ki){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],a=n[2],o=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],m=n[9],g=n[10],d=n[11],p=n[12],_=n[13],S=n[14],x=n[15];return t[0].setComponents(o-i,h-l,d-f,x-p).normalize(),t[1].setComponents(o+i,h+l,d+f,x+p).normalize(),t[2].setComponents(o+s,h+c,d+m,x+_).normalize(),t[3].setComponents(o-s,h-c,d-m,x-_).normalize(),t[4].setComponents(o-a,h-u,d-g,x-S).normalize(),t[5].setComponents(o+a,h+u,d+g,x+S).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),wr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(wr)}intersectsSprite(e){return wr.center.set(0,0,0),wr.radius=.7071067811865476,wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(wr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ho.x=i.normal.x>0?e.max.x:e.min.x,ho.y=i.normal.y>0?e.max.y:e.min.y,ho.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ho)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Jh(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function h0(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,f=c.usage,m=r.createBuffer();r.bindBuffer(u,m),r.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const f=u.array,m=u.updateRange;r.bindBuffer(h,c),m.count===-1?r.bufferSubData(h,0,f):(t?r.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):r.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:a,remove:o,update:l}}class hc extends Ai{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,f=t/l,m=[],g=[],d=[],p=[];for(let _=0;_<u;_++){const S=_*f-a;for(let x=0;x<c;x++){const M=x*h-s;g.push(M,-S,0),d.push(0,0,1),p.push(x/o),p.push(1-_/l)}}for(let _=0;_<l;_++)for(let S=0;S<o;S++){const x=S+c*_,M=S+c*(_+1),b=S+1+c*(_+1),C=S+1+c*_;m.push(x,M,C),m.push(M,b,C)}this.setIndex(m),this.setAttribute("position",new Un(g,3)),this.setAttribute("normal",new Un(d,3)),this.setAttribute("uv",new Un(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hc(e.width,e.height,e.widthSegments,e.heightSegments)}}var d0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,p0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,m0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,g0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,x0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,v0="vec3 transformed = vec3( position );",y0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,M0=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,b0=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,S0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,w0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,T0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,E0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,A0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,C0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,P0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,L0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,D0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,R0=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
}`,I0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,O0=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,F0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,N0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,z0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,U0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,B0="gl_FragColor = linearToOutputTexel( gl_FragColor );",k0=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,G0=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,V0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,H0=`#ifdef USE_ENVMAP
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
#endif`,W0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,X0=`#ifdef USE_ENVMAP
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
#endif`,q0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,j0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Y0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,K0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$0=`#ifdef USE_GRADIENTMAP
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
}`,Z0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,J0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Q0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ex=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,nx=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,ix=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ox=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ax=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,lx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,cx=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ux=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,fx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,hx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,px=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,mx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,gx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_x=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,vx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bx=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,wx=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Tx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Ex=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Ax=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Cx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Px=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Dx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Rx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Ix=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Ox=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Fx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Ux=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Xx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,qx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Yx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,$x=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zx=`#ifdef USE_SKINNING
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
#endif`,Jx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ev=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,nv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,iv=`#ifdef USE_TRANSMISSION
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
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
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
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
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
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,rv=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,sv=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,ov=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,av=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,lv=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,cv=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,uv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hv=`uniform sampler2D t2D;
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
	#include <encodings_fragment>
}`,dv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,mv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,_v=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,xv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,vv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,yv=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Mv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Sv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Tv=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Ev=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Av=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Cv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,Lv=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Rv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Iv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Ov=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Nv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Uv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,kv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gv=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,Vv=`uniform vec3 color;
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
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Hv=`uniform float rotation;
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
}`,Wv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ie={alphamap_fragment:d0,alphamap_pars_fragment:p0,alphatest_fragment:m0,alphatest_pars_fragment:g0,aomap_fragment:_0,aomap_pars_fragment:x0,begin_vertex:v0,beginnormal_vertex:y0,bsdfs:M0,iridescence_fragment:b0,bumpmap_pars_fragment:S0,clipping_planes_fragment:w0,clipping_planes_pars_fragment:T0,clipping_planes_pars_vertex:E0,clipping_planes_vertex:A0,color_fragment:C0,color_pars_fragment:P0,color_pars_vertex:L0,color_vertex:D0,common:R0,cube_uv_reflection_fragment:I0,defaultnormal_vertex:O0,displacementmap_pars_vertex:F0,displacementmap_vertex:N0,emissivemap_fragment:z0,emissivemap_pars_fragment:U0,encodings_fragment:B0,encodings_pars_fragment:k0,envmap_fragment:G0,envmap_common_pars_fragment:V0,envmap_pars_fragment:H0,envmap_pars_vertex:W0,envmap_physical_pars_fragment:nx,envmap_vertex:X0,fog_vertex:q0,fog_pars_vertex:j0,fog_fragment:Y0,fog_pars_fragment:K0,gradientmap_pars_fragment:$0,lightmap_fragment:Z0,lightmap_pars_fragment:J0,lights_lambert_fragment:Q0,lights_lambert_pars_fragment:ex,lights_pars_begin:tx,lights_toon_fragment:ix,lights_toon_pars_fragment:rx,lights_phong_fragment:sx,lights_phong_pars_fragment:ox,lights_physical_fragment:ax,lights_physical_pars_fragment:lx,lights_fragment_begin:cx,lights_fragment_maps:ux,lights_fragment_end:fx,logdepthbuf_fragment:hx,logdepthbuf_pars_fragment:dx,logdepthbuf_pars_vertex:px,logdepthbuf_vertex:mx,map_fragment:gx,map_pars_fragment:_x,map_particle_fragment:xx,map_particle_pars_fragment:vx,metalnessmap_fragment:yx,metalnessmap_pars_fragment:Mx,morphcolor_vertex:bx,morphnormal_vertex:Sx,morphtarget_pars_vertex:wx,morphtarget_vertex:Tx,normal_fragment_begin:Ex,normal_fragment_maps:Ax,normal_pars_fragment:Cx,normal_pars_vertex:Px,normal_vertex:Lx,normalmap_pars_fragment:Dx,clearcoat_normal_fragment_begin:Rx,clearcoat_normal_fragment_maps:Ix,clearcoat_pars_fragment:Ox,iridescence_pars_fragment:Fx,output_fragment:Nx,packing:zx,premultiplied_alpha_fragment:Ux,project_vertex:Bx,dithering_fragment:kx,dithering_pars_fragment:Gx,roughnessmap_fragment:Vx,roughnessmap_pars_fragment:Hx,shadowmap_pars_fragment:Wx,shadowmap_pars_vertex:Xx,shadowmap_vertex:qx,shadowmask_pars_fragment:jx,skinbase_vertex:Yx,skinning_pars_vertex:Kx,skinning_vertex:$x,skinnormal_vertex:Zx,specularmap_fragment:Jx,specularmap_pars_fragment:Qx,tonemapping_fragment:ev,tonemapping_pars_fragment:tv,transmission_fragment:nv,transmission_pars_fragment:iv,uv_pars_fragment:rv,uv_pars_vertex:sv,uv_vertex:ov,uv2_pars_fragment:av,uv2_pars_vertex:lv,uv2_vertex:cv,worldpos_vertex:uv,background_vert:fv,background_frag:hv,backgroundCube_vert:dv,backgroundCube_frag:pv,cube_vert:mv,cube_frag:gv,depth_vert:_v,depth_frag:xv,distanceRGBA_vert:vv,distanceRGBA_frag:yv,equirect_vert:Mv,equirect_frag:bv,linedashed_vert:Sv,linedashed_frag:wv,meshbasic_vert:Tv,meshbasic_frag:Ev,meshlambert_vert:Av,meshlambert_frag:Cv,meshmatcap_vert:Pv,meshmatcap_frag:Lv,meshnormal_vert:Dv,meshnormal_frag:Rv,meshphong_vert:Iv,meshphong_frag:Ov,meshphysical_vert:Fv,meshphysical_frag:Nv,meshtoon_vert:zv,meshtoon_frag:Uv,points_vert:Bv,points_frag:kv,shadow_vert:Gv,shadow_frag:Vv,sprite_vert:Hv,sprite_frag:Wv},ge={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Nt},uv2Transform:{value:new Nt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Nt}}},On={basic:{uniforms:It([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:It([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new $e(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:It([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:It([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:It([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new $e(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:It([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:It([ge.points,ge.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:It([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:It([ge.common,ge.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:It([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:It([ge.sprite,ge.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:It([ge.common,ge.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:It([ge.lights,ge.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};On.physical={uniforms:It([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};const po={r:0,b:0,g:0};function Xv(r,e,t,n,i,s,a){const o=new $e(0);let l=s===!0?0:1,c,u,h=null,f=0,m=null;function g(p,_){let S=!1,x=_.isScene===!0?_.background:null;x&&x.isTexture&&(x=(_.backgroundBlurriness>0?t:e).get(x));const M=r.xr,b=M.getSession&&M.getSession();b&&b.environmentBlendMode==="additive"&&(x=null),x===null?d(o,l):x&&x.isColor&&(d(x,1),S=!0),(r.autoClear||S)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Ko)?(u===void 0&&(u=new Zn(new Vs(1,1,1),new ar({name:"BackgroundCubeMaterial",uniforms:qr(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,L,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=x.encoding!==Je,(h!==x||f!==x.version||m!==r.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,m=r.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Zn(new hc(2,2),new ar({name:"BackgroundMaterial",uniforms:qr(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=x.encoding!==Je,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||m!==r.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,m=r.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function d(p,_){p.getRGB(po,Kh(r)),n.buffers.color.setClear(po.r,po.g,po.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(p,_=1){o.set(p),l=_,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,d(o,l)},render:g}}function qv(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=p(null);let c=l,u=!1;function h(O,q,Y,K,V){let oe=!1;if(a){const se=d(K,Y,q);c!==se&&(c=se,m(c.object)),oe=_(O,K,Y,V),oe&&S(O,K,Y,V)}else{const se=q.wireframe===!0;(c.geometry!==K.id||c.program!==Y.id||c.wireframe!==se)&&(c.geometry=K.id,c.program=Y.id,c.wireframe=se,oe=!0)}V!==null&&t.update(V,34963),(oe||u)&&(u=!1,v(O,q,Y,K),V!==null&&r.bindBuffer(34963,t.get(V).buffer))}function f(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(O){return n.isWebGL2?r.bindVertexArray(O):s.bindVertexArrayOES(O)}function g(O){return n.isWebGL2?r.deleteVertexArray(O):s.deleteVertexArrayOES(O)}function d(O,q,Y){const K=Y.wireframe===!0;let V=o[O.id];V===void 0&&(V={},o[O.id]=V);let oe=V[q.id];oe===void 0&&(oe={},V[q.id]=oe);let se=oe[K];return se===void 0&&(se=p(f()),oe[K]=se),se}function p(O){const q=[],Y=[],K=[];for(let V=0;V<i;V++)q[V]=0,Y[V]=0,K[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:Y,attributeDivisors:K,object:O,attributes:{},index:null}}function _(O,q,Y,K){const V=c.attributes,oe=q.attributes;let se=0;const Me=Y.getAttributes();for(const B in Me)if(Me[B].location>=0){const de=V[B];let k=oe[B];if(k===void 0&&(B==="instanceMatrix"&&O.instanceMatrix&&(k=O.instanceMatrix),B==="instanceColor"&&O.instanceColor&&(k=O.instanceColor)),de===void 0||de.attribute!==k||k&&de.data!==k.data)return!0;se++}return c.attributesNum!==se||c.index!==K}function S(O,q,Y,K){const V={},oe=q.attributes;let se=0;const Me=Y.getAttributes();for(const B in Me)if(Me[B].location>=0){let de=oe[B];de===void 0&&(B==="instanceMatrix"&&O.instanceMatrix&&(de=O.instanceMatrix),B==="instanceColor"&&O.instanceColor&&(de=O.instanceColor));const k={};k.attribute=de,de&&de.data&&(k.data=de.data),V[B]=k,se++}c.attributes=V,c.attributesNum=se,c.index=K}function x(){const O=c.newAttributes;for(let q=0,Y=O.length;q<Y;q++)O[q]=0}function M(O){b(O,0)}function b(O,q){const Y=c.newAttributes,K=c.enabledAttributes,V=c.attributeDivisors;Y[O]=1,K[O]===0&&(r.enableVertexAttribArray(O),K[O]=1),V[O]!==q&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,q),V[O]=q)}function C(){const O=c.newAttributes,q=c.enabledAttributes;for(let Y=0,K=q.length;Y<K;Y++)q[Y]!==O[Y]&&(r.disableVertexAttribArray(Y),q[Y]=0)}function L(O,q,Y,K,V,oe){n.isWebGL2===!0&&(Y===5124||Y===5125)?r.vertexAttribIPointer(O,q,Y,V,oe):r.vertexAttribPointer(O,q,Y,K,V,oe)}function v(O,q,Y,K){if(n.isWebGL2===!1&&(O.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const V=K.attributes,oe=Y.getAttributes(),se=q.defaultAttributeValues;for(const Me in oe){const B=oe[Me];if(B.location>=0){let le=V[Me];if(le===void 0&&(Me==="instanceMatrix"&&O.instanceMatrix&&(le=O.instanceMatrix),Me==="instanceColor"&&O.instanceColor&&(le=O.instanceColor)),le!==void 0){const de=le.normalized,k=le.itemSize,xe=t.get(le);if(xe===void 0)continue;const be=xe.buffer,Te=xe.type,ye=xe.bytesPerElement;if(le.isInterleavedBufferAttribute){const Ce=le.data,De=Ce.stride,A=le.offset;if(Ce.isInstancedInterleavedBuffer){for(let D=0;D<B.locationSize;D++)b(B.location+D,Ce.meshPerAttribute);O.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Ce.meshPerAttribute*Ce.count)}else for(let D=0;D<B.locationSize;D++)M(B.location+D);r.bindBuffer(34962,be);for(let D=0;D<B.locationSize;D++)L(B.location+D,k/B.locationSize,Te,de,De*ye,(A+k/B.locationSize*D)*ye)}else{if(le.isInstancedBufferAttribute){for(let Ce=0;Ce<B.locationSize;Ce++)b(B.location+Ce,le.meshPerAttribute);O.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Ce=0;Ce<B.locationSize;Ce++)M(B.location+Ce);r.bindBuffer(34962,be);for(let Ce=0;Ce<B.locationSize;Ce++)L(B.location+Ce,k/B.locationSize,Te,de,k*ye,k/B.locationSize*Ce*ye)}}else if(se!==void 0){const de=se[Me];if(de!==void 0)switch(de.length){case 2:r.vertexAttrib2fv(B.location,de);break;case 3:r.vertexAttrib3fv(B.location,de);break;case 4:r.vertexAttrib4fv(B.location,de);break;default:r.vertexAttrib1fv(B.location,de)}}}}C()}function w(){j();for(const O in o){const q=o[O];for(const Y in q){const K=q[Y];for(const V in K)g(K[V].object),delete K[V];delete q[Y]}delete o[O]}}function R(O){if(o[O.id]===void 0)return;const q=o[O.id];for(const Y in q){const K=q[Y];for(const V in K)g(K[V].object),delete K[V];delete q[Y]}delete o[O.id]}function W(O){for(const q in o){const Y=o[q];if(Y[O.id]===void 0)continue;const K=Y[O.id];for(const V in K)g(K[V].object),delete K[V];delete Y[O.id]}}function j(){N(),u=!0,c!==l&&(c=l,m(c.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:j,resetDefaultState:N,dispose:w,releaseStatesOfGeometry:R,releaseStatesOfProgram:W,initAttributes:x,enableAttribute:M,disableUnusedAttributes:C}}function jv(r,e,t,n){const i=n.isWebGL2;let s;function a(c){s=c}function o(c,u){r.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let f,m;if(i)f=r,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](s,c,u,h),t.update(u,s,h)}this.setMode=a,this.render=o,this.renderInstances=l}function Yv(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(L){if(L==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=r.getParameter(34930),f=r.getParameter(35660),m=r.getParameter(3379),g=r.getParameter(34076),d=r.getParameter(34921),p=r.getParameter(36347),_=r.getParameter(36348),S=r.getParameter(36349),x=f>0,M=a||e.has("OES_texture_float"),b=x&&M,C=a?r.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:p,maxVaryings:_,maxFragmentUniforms:S,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:b,maxSamples:C}}function Kv(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new ki,o=new Nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||n!==0||i;return i=f,n=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,m){const g=h.clippingPlanes,d=h.clipIntersection,p=h.clipShadows,_=r.get(h);if(!i||g===null||g.length===0||s&&!p)s?u(null):c();else{const S=s?0:n,x=S*4;let M=_.clippingState||null;l.value=M,M=u(g,f,x,m);for(let b=0;b!==x;++b)M[b]=t[b];_.clippingState=M,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,m,g){const d=h!==null?h.length:0;let p=null;if(d!==0){if(p=l.value,g!==!0||p===null){const _=m+d*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<_)&&(p=new Float32Array(_));for(let x=0,M=m;x!==d;++x,M+=4)a.copy(h[x]).applyMatrix4(S,o),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=d,e.numIntersection=0,p}}function $v(r){let e=new WeakMap;function t(a,o){return o===vl?a.mapping=Hr:o===yl&&(a.mapping=Wr),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===vl||o===yl)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new c0(l.height/2);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Zv extends $h{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Pr=4,Ju=[.125,.215,.35,.446,.526,.582],qi=20,Va=new Zv,Qu=new $e;let Ha=null;const Gi=(1+Math.sqrt(5))/2,Tr=1/Gi,ef=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,Gi,Tr),new U(0,Gi,-Tr),new U(Tr,0,Gi),new U(-Tr,0,Gi),new U(Gi,Tr,0),new U(-Gi,Tr,0)];class tf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ha=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ha),e.scissorTest=!1,mo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hr||e.mapping===Wr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ha=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:un,minFilter:un,generateMipmaps:!1,type:Ds,format:Sn,encoding:rr,depthBuffer:!1},i=nf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nf(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jv(s)),this._blurMaterial=Qv(s,e,t)}return i}_compileMaterial(e){const t=new Zn(this._lodPlanes[0],e);this._renderer.compile(t,Va)}_sceneToCubeUV(e,t,n,i){const o=new Zt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Qu),u.toneMapping=ei,u.autoClear=!1;const m=new qh({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),g=new Zn(new Vs,m);let d=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,d=!0):(m.color.copy(Qu),d=!0);for(let _=0;_<6;_++){const S=_%3;S===0?(o.up.set(0,l[_],0),o.lookAt(c[_],0,0)):S===1?(o.up.set(0,0,l[_]),o.lookAt(0,c[_],0)):(o.up.set(0,l[_],0),o.lookAt(0,0,c[_]));const x=this._cubeSize;mo(i,S*x,_>2?x:0,x,x),u.setRenderTarget(i),d&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Hr||e.mapping===Wr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=sf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rf());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new Zn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;mo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Va)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=ef[(i-1)%ef.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Zn(this._lodPlanes[i],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*qi-1),d=s/g,p=isFinite(s)?1+Math.floor(u*d):qi;p>qi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${qi}`);const _=[];let S=0;for(let L=0;L<qi;++L){const v=L/d,w=Math.exp(-v*v/2);_.push(w),L===0?S+=w:L<p&&(S+=2*w)}for(let L=0;L<_.length;L++)_[L]=_[L]/S;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=_,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const M=this._sizeLods[i],b=3*M*(i>x-Pr?i-x+Pr:0),C=4*(this._cubeSize-M);mo(t,b,C,3*M,2*M),l.setRenderTarget(t),l.render(h,Va)}}function Jv(r){const e=[],t=[],n=[];let i=r;const s=r-Pr+1+Ju.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-Pr?l=Ju[a-r+Pr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,d=3,p=2,_=1,S=new Float32Array(d*g*m),x=new Float32Array(p*g*m),M=new Float32Array(_*g*m);for(let C=0;C<m;C++){const L=C%3*2/3-1,v=C>2?0:-1,w=[L,v,0,L+2/3,v,0,L+2/3,v+1,0,L,v,0,L+2/3,v+1,0,L,v+1,0];S.set(w,d*g*C),x.set(f,p*g*C);const R=[C,C,C,C,C,C];M.set(R,_*g*C)}const b=new Ai;b.setAttribute("position",new zn(S,d)),b.setAttribute("uv",new zn(x,p)),b.setAttribute("faceIndex",new zn(M,_)),e.push(b),i>Pr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function nf(r,e,t){const n=new or(r,e,t);return n.texture.mapping=Ko,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function mo(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Qv(r,e,t){const n=new Float32Array(qi),i=new U(0,1,0);return new ar({name:"SphericalGaussianBlur",defines:{n:qi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:dc(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function rf(){return new ar({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dc(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function sf(){return new ar({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function dc(){return`

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
	`}function ey(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===vl||l===yl,u=l===Hr||l===Wr;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new tf(r)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new tf(r));const f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function ty(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function ny(r,e,t,n){const i={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete i[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],34962);const m=h.morphAttributes;for(const g in m){const d=m[g];for(let p=0,_=d.length;p<_;p++)e.update(d[p],34962)}}function c(h){const f=[],m=h.index,g=h.attributes.position;let d=0;if(m!==null){const S=m.array;d=m.version;for(let x=0,M=S.length;x<M;x+=3){const b=S[x+0],C=S[x+1],L=S[x+2];f.push(b,C,C,L,L,b)}}else{const S=g.array;d=g.version;for(let x=0,M=S.length/3-1;x<M;x+=3){const b=x+0,C=x+1,L=x+2;f.push(b,C,C,L,L,b)}}const p=new(kh(f)?Yh:jh)(f,1);p.version=d;const _=s.get(h);_&&e.remove(_),s.set(h,p)}function u(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function iy(r,e,t,n){const i=n.isWebGL2;let s;function a(f){s=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function u(f,m){r.drawElements(s,m,o,f*l),t.update(m,s,1)}function h(f,m,g){if(g===0)return;let d,p;if(i)d=r,p="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,m,o,f*l,g),t.update(m,s,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h}function ry(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function sy(r,e){return r[0]-e[0]}function oy(r,e){return Math.abs(e[1])-Math.abs(r[1])}function ay(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,a=new et,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,d=g!==void 0?g.length:0;let p=s.get(u);if(p===void 0||p.count!==d){let q=function(){N.dispose(),s.delete(u),u.removeEventListener("dispose",q)};var m=q;p!==void 0&&p.texture.dispose();const x=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,b=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],L=u.morphAttributes.normal||[],v=u.morphAttributes.color||[];let w=0;x===!0&&(w=1),M===!0&&(w=2),b===!0&&(w=3);let R=u.attributes.position.count*w,W=1;R>e.maxTextureSize&&(W=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const j=new Float32Array(R*W*4*d),N=new Hh(j,R,W,d);N.type=Yi,N.needsUpdate=!0;const O=w*4;for(let Y=0;Y<d;Y++){const K=C[Y],V=L[Y],oe=v[Y],se=R*W*4*Y;for(let Me=0;Me<K.count;Me++){const B=Me*O;x===!0&&(a.fromBufferAttribute(K,Me),j[se+B+0]=a.x,j[se+B+1]=a.y,j[se+B+2]=a.z,j[se+B+3]=0),M===!0&&(a.fromBufferAttribute(V,Me),j[se+B+4]=a.x,j[se+B+5]=a.y,j[se+B+6]=a.z,j[se+B+7]=0),b===!0&&(a.fromBufferAttribute(oe,Me),j[se+B+8]=a.x,j[se+B+9]=a.y,j[se+B+10]=a.z,j[se+B+11]=oe.itemSize===4?a.w:1)}}p={count:d,texture:N,size:new Oe(R,W)},s.set(u,p),u.addEventListener("dispose",q)}let _=0;for(let x=0;x<f.length;x++)_+=f[x];const S=u.morphTargetsRelative?1:1-_;h.getUniforms().setValue(r,"morphTargetBaseInfluence",S),h.getUniforms().setValue(r,"morphTargetInfluences",f),h.getUniforms().setValue(r,"morphTargetsTexture",p.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",p.size)}else{const g=f===void 0?0:f.length;let d=n[u.id];if(d===void 0||d.length!==g){d=[];for(let M=0;M<g;M++)d[M]=[M,0];n[u.id]=d}for(let M=0;M<g;M++){const b=d[M];b[0]=M,b[1]=f[M]}d.sort(oy);for(let M=0;M<8;M++)M<g&&d[M][1]?(o[M][0]=d[M][0],o[M][1]=d[M][1]):(o[M][0]=Number.MAX_SAFE_INTEGER,o[M][1]=0);o.sort(sy);const p=u.morphAttributes.position,_=u.morphAttributes.normal;let S=0;for(let M=0;M<8;M++){const b=o[M],C=b[0],L=b[1];C!==Number.MAX_SAFE_INTEGER&&L?(p&&u.getAttribute("morphTarget"+M)!==p[C]&&u.setAttribute("morphTarget"+M,p[C]),_&&u.getAttribute("morphNormal"+M)!==_[C]&&u.setAttribute("morphNormal"+M,_[C]),i[M]=L,S+=L):(p&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),_&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),i[M]=0)}const x=u.morphTargetsRelative?1:1-S;h.getUniforms().setValue(r,"morphTargetBaseInfluence",x),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function ly(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Qh=new en,ed=new Hh,td=new q_,nd=new Zh,of=[],af=[],lf=new Float32Array(16),cf=new Float32Array(9),uf=new Float32Array(4);function is(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=of[i];if(s===void 0&&(s=new Float32Array(i),of[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function pt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function mt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Zo(r,e){let t=af[e];t===void 0&&(t=new Int32Array(e),af[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function cy(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function uy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;r.uniform2fv(this.addr,e),mt(t,e)}}function fy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pt(t,e))return;r.uniform3fv(this.addr,e),mt(t,e)}}function hy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;r.uniform4fv(this.addr,e),mt(t,e)}}function dy(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;uf.set(n),r.uniformMatrix2fv(this.addr,!1,uf),mt(t,n)}}function py(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;cf.set(n),r.uniformMatrix3fv(this.addr,!1,cf),mt(t,n)}}function my(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;lf.set(n),r.uniformMatrix4fv(this.addr,!1,lf),mt(t,n)}}function gy(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function _y(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;r.uniform2iv(this.addr,e),mt(t,e)}}function xy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;r.uniform3iv(this.addr,e),mt(t,e)}}function vy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;r.uniform4iv(this.addr,e),mt(t,e)}}function yy(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function My(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;r.uniform2uiv(this.addr,e),mt(t,e)}}function by(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;r.uniform3uiv(this.addr,e),mt(t,e)}}function Sy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;r.uniform4uiv(this.addr,e),mt(t,e)}}function wy(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Qh,i)}function Ty(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||td,i)}function Ey(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||nd,i)}function Ay(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||ed,i)}function Cy(r){switch(r){case 5126:return cy;case 35664:return uy;case 35665:return fy;case 35666:return hy;case 35674:return dy;case 35675:return py;case 35676:return my;case 5124:case 35670:return gy;case 35667:case 35671:return _y;case 35668:case 35672:return xy;case 35669:case 35673:return vy;case 5125:return yy;case 36294:return My;case 36295:return by;case 36296:return Sy;case 35678:case 36198:case 36298:case 36306:case 35682:return wy;case 35679:case 36299:case 36307:return Ty;case 35680:case 36300:case 36308:case 36293:return Ey;case 36289:case 36303:case 36311:case 36292:return Ay}}function Py(r,e){r.uniform1fv(this.addr,e)}function Ly(r,e){const t=is(e,this.size,2);r.uniform2fv(this.addr,t)}function Dy(r,e){const t=is(e,this.size,3);r.uniform3fv(this.addr,t)}function Ry(r,e){const t=is(e,this.size,4);r.uniform4fv(this.addr,t)}function Iy(r,e){const t=is(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Oy(r,e){const t=is(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Fy(r,e){const t=is(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Ny(r,e){r.uniform1iv(this.addr,e)}function zy(r,e){r.uniform2iv(this.addr,e)}function Uy(r,e){r.uniform3iv(this.addr,e)}function By(r,e){r.uniform4iv(this.addr,e)}function ky(r,e){r.uniform1uiv(this.addr,e)}function Gy(r,e){r.uniform2uiv(this.addr,e)}function Vy(r,e){r.uniform3uiv(this.addr,e)}function Hy(r,e){r.uniform4uiv(this.addr,e)}function Wy(r,e,t){const n=this.cache,i=e.length,s=Zo(t,i);pt(n,s)||(r.uniform1iv(this.addr,s),mt(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Qh,s[a])}function Xy(r,e,t){const n=this.cache,i=e.length,s=Zo(t,i);pt(n,s)||(r.uniform1iv(this.addr,s),mt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||td,s[a])}function qy(r,e,t){const n=this.cache,i=e.length,s=Zo(t,i);pt(n,s)||(r.uniform1iv(this.addr,s),mt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||nd,s[a])}function jy(r,e,t){const n=this.cache,i=e.length,s=Zo(t,i);pt(n,s)||(r.uniform1iv(this.addr,s),mt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||ed,s[a])}function Yy(r){switch(r){case 5126:return Py;case 35664:return Ly;case 35665:return Dy;case 35666:return Ry;case 35674:return Iy;case 35675:return Oy;case 35676:return Fy;case 5124:case 35670:return Ny;case 35667:case 35671:return zy;case 35668:case 35672:return Uy;case 35669:case 35673:return By;case 5125:return ky;case 36294:return Gy;case 36295:return Vy;case 36296:return Hy;case 35678:case 36198:case 36298:case 36306:case 35682:return Wy;case 35679:case 36299:case 36307:return Xy;case 35680:case 36300:case 36308:case 36293:return qy;case 36289:case 36303:case 36311:case 36292:return jy}}class Ky{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Cy(t.type)}}class $y{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Yy(t.type)}}class Zy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Wa=/(\w+)(\])?(\[|\.)?/g;function ff(r,e){r.seq.push(e),r.map[e.id]=e}function Jy(r,e,t){const n=r.name,i=n.length;for(Wa.lastIndex=0;;){const s=Wa.exec(n),a=Wa.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){ff(t,c===void 0?new Ky(o,r,e):new $y(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new Zy(o),ff(t,h)),t=h}}}class bo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);Jy(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function hf(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let Qy=0;function eM(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function tM(r){switch(r){case rr:return["Linear","( value )"];case Je:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function df(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+eM(r.getShaderSource(e),a)}else return i}function nM(r,e){const t=tM(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function iM(r,e){let t;switch(e){case h_:t="Linear";break;case d_:t="Reinhard";break;case p_:t="OptimizedCineon";break;case m_:t="ACESFilmic";break;case g_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function rM(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(gs).join(`
`)}function sM(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function oM(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function gs(r){return r!==""}function pf(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mf(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const aM=/^[ \t]*#include +<([\w\d./]+)>/gm;function wl(r){return r.replace(aM,lM)}function lM(r,e){const t=Ie[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return wl(t)}const cM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gf(r){return r.replace(cM,uM)}function uM(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function _f(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function fM(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Rh?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Wg?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ms&&(e="SHADOWMAP_TYPE_VSM"),e}function hM(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Hr:case Wr:e="ENVMAP_TYPE_CUBE";break;case Ko:e="ENVMAP_TYPE_CUBE_UV";break}return e}function dM(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Wr:e="ENVMAP_MODE_REFRACTION";break}return e}function pM(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Fh:e="ENVMAP_BLENDING_MULTIPLY";break;case u_:e="ENVMAP_BLENDING_MIX";break;case f_:e="ENVMAP_BLENDING_ADD";break}return e}function mM(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function gM(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=fM(t),c=hM(t),u=dM(t),h=pM(t),f=mM(t),m=t.isWebGL2?"":rM(t),g=sM(s),d=i.createProgram();let p,_,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[g].filter(gs).join(`
`),p.length>0&&(p+=`
`),_=[m,g].filter(gs).join(`
`),_.length>0&&(_+=`
`)):(p=[_f(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gs).join(`
`),_=[m,_f(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ei?"#define TONE_MAPPING":"",t.toneMapping!==ei?Ie.tonemapping_pars_fragment:"",t.toneMapping!==ei?iM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ie.encodings_pars_fragment,nM("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(gs).join(`
`)),a=wl(a),a=pf(a,t),a=mf(a,t),o=wl(o),o=pf(o,t),o=mf(o,t),a=gf(a),o=gf(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["#define varying in",t.glslVersion===Uu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Uu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const x=S+p+a,M=S+_+o,b=hf(i,35633,x),C=hf(i,35632,M);if(i.attachShader(d,b),i.attachShader(d,C),t.index0AttributeName!==void 0?i.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(d,0,"position"),i.linkProgram(d),r.debug.checkShaderErrors){const w=i.getProgramInfoLog(d).trim(),R=i.getShaderInfoLog(b).trim(),W=i.getShaderInfoLog(C).trim();let j=!0,N=!0;if(i.getProgramParameter(d,35714)===!1){j=!1;const O=df(i,b,"vertex"),q=df(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(d,35715)+`

Program Info Log: `+w+`
`+O+`
`+q)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(R===""||W==="")&&(N=!1);N&&(this.diagnostics={runnable:j,programLog:w,vertexShader:{log:R,prefix:p},fragmentShader:{log:W,prefix:_}})}i.deleteShader(b),i.deleteShader(C);let L;this.getUniforms=function(){return L===void 0&&(L=new bo(i,d)),L};let v;return this.getAttributes=function(){return v===void 0&&(v=oM(i,d)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(d),this.program=void 0},this.name=t.shaderName,this.id=Qy++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=b,this.fragmentShader=C,this}let _M=0;class xM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new vM(e),t.set(e,n)),n}}class vM{constructor(e){this.id=_M++,this.code=e,this.usedTimes=0}}function yM(r,e,t,n,i,s,a){const o=new Wh,l=new xM,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(v,w,R,W,j){const N=W.fog,O=j.geometry,q=v.isMeshStandardMaterial?W.environment:null,Y=(v.isMeshStandardMaterial?t:e).get(v.envMap||q),K=Y&&Y.mapping===Ko?Y.image.height:null,V=g[v.type];v.precision!==null&&(m=i.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const oe=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,se=oe!==void 0?oe.length:0;let Me=0;O.morphAttributes.position!==void 0&&(Me=1),O.morphAttributes.normal!==void 0&&(Me=2),O.morphAttributes.color!==void 0&&(Me=3);let B,le,de,k;if(V){const De=On[V];B=De.vertexShader,le=De.fragmentShader}else B=v.vertexShader,le=v.fragmentShader,l.update(v),de=l.getVertexShaderID(v),k=l.getFragmentShaderID(v);const xe=r.getRenderTarget(),be=v.alphaTest>0,Te=v.clearcoat>0,ye=v.iridescence>0;return{isWebGL2:u,shaderID:V,shaderName:v.type,vertexShader:B,fragmentShader:le,defines:v.defines,customVertexShaderID:de,customFragmentShaderID:k,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,instancing:j.isInstancedMesh===!0,instancingColor:j.isInstancedMesh===!0&&j.instanceColor!==null,supportsVertexTextures:f,outputEncoding:xe===null?r.outputEncoding:xe.isXRRenderTarget===!0?xe.texture.encoding:rr,map:!!v.map,matcap:!!v.matcap,envMap:!!Y,envMapMode:Y&&Y.mapping,envMapCubeUVHeight:K,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===F_,tangentSpaceNormalMap:v.normalMapType===Uh,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===Je,clearcoat:Te,clearcoatMap:Te&&!!v.clearcoatMap,clearcoatRoughnessMap:Te&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:Te&&!!v.clearcoatNormalMap,iridescence:ye,iridescenceMap:ye&&!!v.iridescenceMap,iridescenceThicknessMap:ye&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===Fr,alphaMap:!!v.alphaMap,alphaTest:be,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!O.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(v.map||v.bumpMap||v.normalMap||v.specularMap||v.alphaMap||v.emissiveMap||v.roughnessMap||v.metalnessMap||v.clearcoatNormalMap||v.iridescenceMap||v.iridescenceThicknessMap||v.transmission>0||v.transmissionMap||v.thicknessMap||v.specularIntensityMap||v.specularColorMap||v.sheen>0||v.sheenColorMap||v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!N,useFog:v.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:h,skinning:j.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:Me,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&R.length>0,shadowMapType:r.shadowMap.type,toneMapping:v.toneMapped?r.toneMapping:ei,useLegacyLights:r.useLegacyLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===hi,flipSided:v.side===Qt,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function p(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const R in v.defines)w.push(R),w.push(v.defines[R]);return v.isRawShaderMaterial===!1&&(_(w,v),S(w,v),w.push(r.outputEncoding)),w.push(v.customProgramCacheKey),w.join()}function _(v,w){v.push(w.precision),v.push(w.outputEncoding),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.combine),v.push(w.vertexUvs),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function S(v,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.map&&o.enable(4),w.matcap&&o.enable(5),w.envMap&&o.enable(6),w.lightMap&&o.enable(7),w.aoMap&&o.enable(8),w.emissiveMap&&o.enable(9),w.bumpMap&&o.enable(10),w.normalMap&&o.enable(11),w.objectSpaceNormalMap&&o.enable(12),w.tangentSpaceNormalMap&&o.enable(13),w.clearcoat&&o.enable(14),w.clearcoatMap&&o.enable(15),w.clearcoatRoughnessMap&&o.enable(16),w.clearcoatNormalMap&&o.enable(17),w.iridescence&&o.enable(18),w.iridescenceMap&&o.enable(19),w.iridescenceThicknessMap&&o.enable(20),w.displacementMap&&o.enable(21),w.specularMap&&o.enable(22),w.roughnessMap&&o.enable(23),w.metalnessMap&&o.enable(24),w.gradientMap&&o.enable(25),w.alphaMap&&o.enable(26),w.alphaTest&&o.enable(27),w.vertexColors&&o.enable(28),w.vertexAlphas&&o.enable(29),w.vertexUvs&&o.enable(30),w.vertexTangents&&o.enable(31),w.uvsVertexOnly&&o.enable(32),v.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.specularIntensityMap&&o.enable(15),w.specularColorMap&&o.enable(16),w.transmission&&o.enable(17),w.transmissionMap&&o.enable(18),w.thicknessMap&&o.enable(19),w.sheen&&o.enable(20),w.sheenColorMap&&o.enable(21),w.sheenRoughnessMap&&o.enable(22),w.decodeVideoTexture&&o.enable(23),w.opaque&&o.enable(24),v.push(o.mask)}function x(v){const w=g[v.type];let R;if(w){const W=On[w];R=s0.clone(W.uniforms)}else R=v.uniforms;return R}function M(v,w){let R;for(let W=0,j=c.length;W<j;W++){const N=c[W];if(N.cacheKey===w){R=N,++R.usedTimes;break}}return R===void 0&&(R=new gM(r,w,v,s),c.push(R)),R}function b(v){if(--v.usedTimes===0){const w=c.indexOf(v);c[w]=c[c.length-1],c.pop(),v.destroy()}}function C(v){l.remove(v)}function L(){l.dispose()}return{getParameters:d,getProgramCacheKey:p,getUniforms:x,acquireProgram:M,releaseProgram:b,releaseShaderCache:C,programs:c,dispose:L}}function MM(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function bM(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function xf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function vf(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(h,f,m,g,d,p){let _=r[e];return _===void 0?(_={id:h.id,object:h,geometry:f,material:m,groupOrder:g,renderOrder:h.renderOrder,z:d,group:p},r[e]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=m,_.groupOrder=g,_.renderOrder=h.renderOrder,_.z=d,_.group=p),e++,_}function o(h,f,m,g,d,p){const _=a(h,f,m,g,d,p);m.transmission>0?n.push(_):m.transparent===!0?i.push(_):t.push(_)}function l(h,f,m,g,d,p){const _=a(h,f,m,g,d,p);m.transmission>0?n.unshift(_):m.transparent===!0?i.unshift(_):t.unshift(_)}function c(h,f){t.length>1&&t.sort(h||bM),n.length>1&&n.sort(f||xf),i.length>1&&i.sort(f||xf)}function u(){for(let h=e,f=r.length;h<f;h++){const m=r[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function SM(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new vf,r.set(n,[a])):i>=s.length?(a=new vf,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function wM(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new $e};break;case"SpotLight":t={position:new U,direction:new U,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new U,halfWidth:new U,halfHeight:new U};break}return r[e.id]=t,t}}}function TM(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let EM=0;function AM(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function CM(r,e){const t=new wM,n=TM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new U);const s=new U,a=new ft,o=new ft;function l(u,h){let f=0,m=0,g=0;for(let W=0;W<9;W++)i.probe[W].set(0,0,0);let d=0,p=0,_=0,S=0,x=0,M=0,b=0,C=0,L=0,v=0;u.sort(AM);const w=h===!0?Math.PI:1;for(let W=0,j=u.length;W<j;W++){const N=u[W],O=N.color,q=N.intensity,Y=N.distance,K=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)f+=O.r*q*w,m+=O.g*q*w,g+=O.b*q*w;else if(N.isLightProbe)for(let V=0;V<9;V++)i.probe[V].addScaledVector(N.sh.coefficients[V],q);else if(N.isDirectionalLight){const V=t.get(N);if(V.color.copy(N.color).multiplyScalar(N.intensity*w),N.castShadow){const oe=N.shadow,se=n.get(N);se.shadowBias=oe.bias,se.shadowNormalBias=oe.normalBias,se.shadowRadius=oe.radius,se.shadowMapSize=oe.mapSize,i.directionalShadow[d]=se,i.directionalShadowMap[d]=K,i.directionalShadowMatrix[d]=N.shadow.matrix,M++}i.directional[d]=V,d++}else if(N.isSpotLight){const V=t.get(N);V.position.setFromMatrixPosition(N.matrixWorld),V.color.copy(O).multiplyScalar(q*w),V.distance=Y,V.coneCos=Math.cos(N.angle),V.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),V.decay=N.decay,i.spot[_]=V;const oe=N.shadow;if(N.map&&(i.spotLightMap[L]=N.map,L++,oe.updateMatrices(N),N.castShadow&&v++),i.spotLightMatrix[_]=oe.matrix,N.castShadow){const se=n.get(N);se.shadowBias=oe.bias,se.shadowNormalBias=oe.normalBias,se.shadowRadius=oe.radius,se.shadowMapSize=oe.mapSize,i.spotShadow[_]=se,i.spotShadowMap[_]=K,C++}_++}else if(N.isRectAreaLight){const V=t.get(N);V.color.copy(O).multiplyScalar(q),V.halfWidth.set(N.width*.5,0,0),V.halfHeight.set(0,N.height*.5,0),i.rectArea[S]=V,S++}else if(N.isPointLight){const V=t.get(N);if(V.color.copy(N.color).multiplyScalar(N.intensity*w),V.distance=N.distance,V.decay=N.decay,N.castShadow){const oe=N.shadow,se=n.get(N);se.shadowBias=oe.bias,se.shadowNormalBias=oe.normalBias,se.shadowRadius=oe.radius,se.shadowMapSize=oe.mapSize,se.shadowCameraNear=oe.camera.near,se.shadowCameraFar=oe.camera.far,i.pointShadow[p]=se,i.pointShadowMap[p]=K,i.pointShadowMatrix[p]=N.shadow.matrix,b++}i.point[p]=V,p++}else if(N.isHemisphereLight){const V=t.get(N);V.skyColor.copy(N.color).multiplyScalar(q*w),V.groundColor.copy(N.groundColor).multiplyScalar(q*w),i.hemi[x]=V,x++}}S>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=g;const R=i.hash;(R.directionalLength!==d||R.pointLength!==p||R.spotLength!==_||R.rectAreaLength!==S||R.hemiLength!==x||R.numDirectionalShadows!==M||R.numPointShadows!==b||R.numSpotShadows!==C||R.numSpotMaps!==L)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=S,i.point.length=p,i.hemi.length=x,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=C+L-v,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=v,R.directionalLength=d,R.pointLength=p,R.spotLength=_,R.rectAreaLength=S,R.hemiLength=x,R.numDirectionalShadows=M,R.numPointShadows=b,R.numSpotShadows=C,R.numSpotMaps=L,i.version=EM++)}function c(u,h){let f=0,m=0,g=0,d=0,p=0;const _=h.matrixWorldInverse;for(let S=0,x=u.length;S<x;S++){const M=u[S];if(M.isDirectionalLight){const b=i.directional[f];b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(_),f++}else if(M.isSpotLight){const b=i.spot[g];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(_),b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(_),g++}else if(M.isRectAreaLight){const b=i.rectArea[d];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(_),o.identity(),a.copy(M.matrixWorld),a.premultiply(_),o.extractRotation(a),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),d++}else if(M.isPointLight){const b=i.point[m];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(_),m++}else if(M.isHemisphereLight){const b=i.hemi[p];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(_),p++}}}return{setup:l,setupView:c,state:i}}function yf(r,e){const t=new CM(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function PM(r,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new yf(r,e),t.set(s,[l])):a>=o.length?(l=new yf(r,e),o.push(l)):l=o[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class LM extends Gs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=I_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class DM extends Gs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new U,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const RM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,IM=`uniform sampler2D shadow_pass;
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
}`;function OM(r,e,t){let n=new fc;const i=new Oe,s=new Oe,a=new et,o=new LM({depthPacking:O_}),l=new DM,c={},u=t.maxTextureSize,h={[wi]:Qt,[Qt]:wi,[hi]:hi},f=new ar({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:RM,fragmentShader:IM}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new Ai;g.setAttribute("position",new zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new Zn(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rh,this.render=function(M,b,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||M.length===0)return;const L=r.getRenderTarget(),v=r.getActiveCubeFace(),w=r.getActiveMipmapLevel(),R=r.state;R.setBlending(vi),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);for(let W=0,j=M.length;W<j;W++){const N=M[W],O=N.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);const q=O.getFrameExtents();if(i.multiply(q),s.copy(O.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/q.x),i.x=s.x*q.x,O.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/q.y),i.y=s.y*q.y,O.mapSize.y=s.y)),O.map===null){const K=this.type!==ms?{minFilter:Ot,magFilter:Ot}:{};O.map=new or(i.x,i.y,K),O.map.texture.name=N.name+".shadowMap",O.camera.updateProjectionMatrix()}r.setRenderTarget(O.map),r.clear();const Y=O.getViewportCount();for(let K=0;K<Y;K++){const V=O.getViewport(K);a.set(s.x*V.x,s.y*V.y,s.x*V.z,s.y*V.w),R.viewport(a),O.updateMatrices(N,K),n=O.getFrustum(),x(b,C,O.camera,N,this.type)}O.isPointLightShadow!==!0&&this.type===ms&&_(O,C),O.needsUpdate=!1}p.needsUpdate=!1,r.setRenderTarget(L,v,w)};function _(M,b){const C=e.update(d);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,m.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new or(i.x,i.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,r.setRenderTarget(M.mapPass),r.clear(),r.renderBufferDirect(b,null,C,f,d,null),m.uniforms.shadow_pass.value=M.mapPass.texture,m.uniforms.resolution.value=M.mapSize,m.uniforms.radius.value=M.radius,r.setRenderTarget(M.map),r.clear(),r.renderBufferDirect(b,null,C,m,d,null)}function S(M,b,C,L,v,w){let R=null;const W=C.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(W!==void 0)R=W;else if(R=C.isPointLight===!0?l:o,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const j=R.uuid,N=b.uuid;let O=c[j];O===void 0&&(O={},c[j]=O);let q=O[N];q===void 0&&(q=R.clone(),O[N]=q),R=q}return R.visible=b.visible,R.wireframe=b.wireframe,w===ms?R.side=b.shadowSide!==null?b.shadowSide:b.side:R.side=b.shadowSide!==null?b.shadowSide:h[b.side],R.alphaMap=b.alphaMap,R.alphaTest=b.alphaTest,R.map=b.map,R.clipShadows=b.clipShadows,R.clippingPlanes=b.clippingPlanes,R.clipIntersection=b.clipIntersection,R.displacementMap=b.displacementMap,R.displacementScale=b.displacementScale,R.displacementBias=b.displacementBias,R.wireframeLinewidth=b.wireframeLinewidth,R.linewidth=b.linewidth,C.isPointLight===!0&&R.isMeshDistanceMaterial===!0&&(R.referencePosition.setFromMatrixPosition(C.matrixWorld),R.nearDistance=L,R.farDistance=v),R}function x(M,b,C,L,v){if(M.visible===!1)return;if(M.layers.test(b.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&v===ms)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,M.matrixWorld);const W=e.update(M),j=M.material;if(Array.isArray(j)){const N=W.groups;for(let O=0,q=N.length;O<q;O++){const Y=N[O],K=j[Y.materialIndex];if(K&&K.visible){const V=S(M,K,L,C.near,C.far,v);r.renderBufferDirect(C,null,W,V,M,Y)}}}else if(j.visible){const N=S(M,j,L,C.near,C.far,v);r.renderBufferDirect(C,null,W,N,M,null)}}const R=M.children;for(let W=0,j=R.length;W<j;W++)x(R[W],b,C,L,v)}}function FM(r,e,t){const n=t.isWebGL2;function i(){let I=!1;const ee=new et;let he=null;const Se=new et(0,0,0,0);return{setMask:function(Ee){he!==Ee&&!I&&(r.colorMask(Ee,Ee,Ee,Ee),he=Ee)},setLocked:function(Ee){I=Ee},setClear:function(Ee,Ze,gt,Pt,Cn){Cn===!0&&(Ee*=Pt,Ze*=Pt,gt*=Pt),ee.set(Ee,Ze,gt,Pt),Se.equals(ee)===!1&&(r.clearColor(Ee,Ze,gt,Pt),Se.copy(ee))},reset:function(){I=!1,he=null,Se.set(-1,0,0,0)}}}function s(){let I=!1,ee=null,he=null,Se=null;return{setTest:function(Ee){Ee?be(2929):Te(2929)},setMask:function(Ee){ee!==Ee&&!I&&(r.depthMask(Ee),ee=Ee)},setFunc:function(Ee){if(he!==Ee){switch(Ee){case i_:r.depthFunc(512);break;case r_:r.depthFunc(519);break;case s_:r.depthFunc(513);break;case xl:r.depthFunc(515);break;case o_:r.depthFunc(514);break;case a_:r.depthFunc(518);break;case l_:r.depthFunc(516);break;case c_:r.depthFunc(517);break;default:r.depthFunc(515)}he=Ee}},setLocked:function(Ee){I=Ee},setClear:function(Ee){Se!==Ee&&(r.clearDepth(Ee),Se=Ee)},reset:function(){I=!1,ee=null,he=null,Se=null}}}function a(){let I=!1,ee=null,he=null,Se=null,Ee=null,Ze=null,gt=null,Pt=null,Cn=null;return{setTest:function(rt){I||(rt?be(2960):Te(2960))},setMask:function(rt){ee!==rt&&!I&&(r.stencilMask(rt),ee=rt)},setFunc:function(rt,sn,Pn){(he!==rt||Se!==sn||Ee!==Pn)&&(r.stencilFunc(rt,sn,Pn),he=rt,Se=sn,Ee=Pn)},setOp:function(rt,sn,Pn){(Ze!==rt||gt!==sn||Pt!==Pn)&&(r.stencilOp(rt,sn,Pn),Ze=rt,gt=sn,Pt=Pn)},setLocked:function(rt){I=rt},setClear:function(rt){Cn!==rt&&(r.clearStencil(rt),Cn=rt)},reset:function(){I=!1,ee=null,he=null,Se=null,Ee=null,Ze=null,gt=null,Pt=null,Cn=null}}}const o=new i,l=new s,c=new a,u=new WeakMap,h=new WeakMap;let f={},m={},g=new WeakMap,d=[],p=null,_=!1,S=null,x=null,M=null,b=null,C=null,L=null,v=null,w=!1,R=null,W=null,j=null,N=null,O=null;const q=r.getParameter(35661);let Y=!1,K=0;const V=r.getParameter(7938);V.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(V)[1]),Y=K>=1):V.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),Y=K>=2);let oe=null,se={};const Me=r.getParameter(3088),B=r.getParameter(2978),le=new et().fromArray(Me),de=new et().fromArray(B);function k(I,ee,he){const Se=new Uint8Array(4),Ee=r.createTexture();r.bindTexture(I,Ee),r.texParameteri(I,10241,9728),r.texParameteri(I,10240,9728);for(let Ze=0;Ze<he;Ze++)r.texImage2D(ee+Ze,0,6408,1,1,0,6408,5121,Se);return Ee}const xe={};xe[3553]=k(3553,3553,1),xe[34067]=k(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),be(2929),l.setFunc(xl),J(!1),ae(au),be(2884),X(vi);function be(I){f[I]!==!0&&(r.enable(I),f[I]=!0)}function Te(I){f[I]!==!1&&(r.disable(I),f[I]=!1)}function ye(I,ee){return m[I]!==ee?(r.bindFramebuffer(I,ee),m[I]=ee,n&&(I===36009&&(m[36160]=ee),I===36160&&(m[36009]=ee)),!0):!1}function Ce(I,ee){let he=d,Se=!1;if(I)if(he=g.get(ee),he===void 0&&(he=[],g.set(ee,he)),I.isWebGLMultipleRenderTargets){const Ee=I.texture;if(he.length!==Ee.length||he[0]!==36064){for(let Ze=0,gt=Ee.length;Ze<gt;Ze++)he[Ze]=36064+Ze;he.length=Ee.length,Se=!0}}else he[0]!==36064&&(he[0]=36064,Se=!0);else he[0]!==1029&&(he[0]=1029,Se=!0);Se&&(t.isWebGL2?r.drawBuffers(he):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(he))}function De(I){return p!==I?(r.useProgram(I),p=I,!0):!1}const A={[Ar]:32774,[qg]:32778,[jg]:32779};if(n)A[fu]=32775,A[hu]=32776;else{const I=e.get("EXT_blend_minmax");I!==null&&(A[fu]=I.MIN_EXT,A[hu]=I.MAX_EXT)}const D={[Yg]:0,[Kg]:1,[$g]:768,[Ih]:770,[n_]:776,[e_]:774,[Jg]:772,[Zg]:769,[Oh]:771,[t_]:775,[Qg]:773};function X(I,ee,he,Se,Ee,Ze,gt,Pt){if(I===vi){_===!0&&(Te(3042),_=!1);return}if(_===!1&&(be(3042),_=!0),I!==Xg){if(I!==S||Pt!==w){if((x!==Ar||C!==Ar)&&(r.blendEquation(32774),x=Ar,C=Ar),Pt)switch(I){case Fr:r.blendFuncSeparate(1,771,1,771);break;case lu:r.blendFunc(1,1);break;case cu:r.blendFuncSeparate(0,769,0,1);break;case uu:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Fr:r.blendFuncSeparate(770,771,1,771);break;case lu:r.blendFunc(770,1);break;case cu:r.blendFuncSeparate(0,769,0,1);break;case uu:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}M=null,b=null,L=null,v=null,S=I,w=Pt}return}Ee=Ee||ee,Ze=Ze||he,gt=gt||Se,(ee!==x||Ee!==C)&&(r.blendEquationSeparate(A[ee],A[Ee]),x=ee,C=Ee),(he!==M||Se!==b||Ze!==L||gt!==v)&&(r.blendFuncSeparate(D[he],D[Se],D[Ze],D[gt]),M=he,b=Se,L=Ze,v=gt),S=I,w=!1}function te(I,ee){I.side===hi?Te(2884):be(2884);let he=I.side===Qt;ee&&(he=!he),J(he),I.blending===Fr&&I.transparent===!1?X(vi):X(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),o.setMask(I.colorWrite);const Se=I.stencilWrite;c.setTest(Se),Se&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ie(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?be(32926):Te(32926)}function J(I){R!==I&&(I?r.frontFace(2304):r.frontFace(2305),R=I)}function ae(I){I!==Vg?(be(2884),I!==W&&(I===au?r.cullFace(1029):I===Hg?r.cullFace(1028):r.cullFace(1032))):Te(2884),W=I}function ue(I){I!==j&&(Y&&r.lineWidth(I),j=I)}function ie(I,ee,he){I?(be(32823),(N!==ee||O!==he)&&(r.polygonOffset(ee,he),N=ee,O=he)):Te(32823)}function fe(I){I?be(3089):Te(3089)}function re(I){I===void 0&&(I=33984+q-1),oe!==I&&(r.activeTexture(I),oe=I)}function T(I,ee,he){he===void 0&&(oe===null?he=33984+q-1:he=oe);let Se=se[he];Se===void 0&&(Se={type:void 0,texture:void 0},se[he]=Se),(Se.type!==I||Se.texture!==ee)&&(oe!==he&&(r.activeTexture(he),oe=he),r.bindTexture(I,ee||xe[I]),Se.type=I,Se.texture=ee)}function y(){const I=se[oe];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function F(){try{r.compressedTexImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(){try{r.compressedTexImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{r.texSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ce(){try{r.texSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pe(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function P(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function z(){try{r.texStorage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _e(){try{r.texStorage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function me(){try{r.texImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function we(){try{r.texImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ae(I){le.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),le.copy(I))}function ve(I){de.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),de.copy(I))}function Le(I,ee){let he=h.get(ee);he===void 0&&(he=new WeakMap,h.set(ee,he));let Se=he.get(I);Se===void 0&&(Se=r.getUniformBlockIndex(ee,I.name),he.set(I,Se))}function Be(I,ee){const Se=h.get(ee).get(I);u.get(ee)!==Se&&(r.uniformBlockBinding(ee,Se,I.__bindingPointIndex),u.set(ee,Se))}function je(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},oe=null,se={},m={},g=new WeakMap,d=[],p=null,_=!1,S=null,x=null,M=null,b=null,C=null,L=null,v=null,w=!1,R=null,W=null,j=null,N=null,O=null,le.set(0,0,r.canvas.width,r.canvas.height),de.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:be,disable:Te,bindFramebuffer:ye,drawBuffers:Ce,useProgram:De,setBlending:X,setMaterial:te,setFlipSided:J,setCullFace:ae,setLineWidth:ue,setPolygonOffset:ie,setScissorTest:fe,activeTexture:re,bindTexture:T,unbindTexture:y,compressedTexImage2D:F,compressedTexImage3D:$,texImage2D:me,texImage3D:we,updateUBOMapping:Le,uniformBlockBinding:Be,texStorage2D:z,texStorage3D:_e,texSubImage2D:Q,texSubImage3D:ce,compressedTexSubImage2D:pe,compressedTexSubImage3D:P,scissor:Ae,viewport:ve,reset:je}}function NM(r,e,t,n,i,s,a){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let d;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(T,y){return _?new OffscreenCanvas(T,y):Lo("canvas")}function x(T,y,F,$){let Q=1;if((T.width>$||T.height>$)&&(Q=$/Math.max(T.width,T.height)),Q<1||y===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const ce=y?U_:Math.floor,pe=ce(Q*T.width),P=ce(Q*T.height);d===void 0&&(d=S(pe,P));const z=F?S(pe,P):d;return z.width=pe,z.height=P,z.getContext("2d").drawImage(T,0,0,pe,P),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+pe+"x"+P+")."),z}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function M(T){return ku(T.width)&&ku(T.height)}function b(T){return o?!1:T.wrapS!==bn||T.wrapT!==bn||T.minFilter!==Ot&&T.minFilter!==un}function C(T,y){return T.generateMipmaps&&y&&T.minFilter!==Ot&&T.minFilter!==un}function L(T){r.generateMipmap(T)}function v(T,y,F,$,Q=!1){if(o===!1)return y;if(T!==null){if(r[T]!==void 0)return r[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ce=y;return y===6403&&(F===5126&&(ce=33326),F===5131&&(ce=33325),F===5121&&(ce=33321)),y===33319&&(F===5126&&(ce=33328),F===5131&&(ce=33327),F===5121&&(ce=33323)),y===6408&&(F===5126&&(ce=34836),F===5131&&(ce=34842),F===5121&&(ce=$===Je&&Q===!1?35907:32856),F===32819&&(ce=32854),F===32820&&(ce=32855)),(ce===33325||ce===33326||ce===33327||ce===33328||ce===34842||ce===34836)&&e.get("EXT_color_buffer_float"),ce}function w(T,y,F){return C(T,F)===!0||T.isFramebufferTexture&&T.minFilter!==Ot&&T.minFilter!==un?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function R(T){return T===Ot||T===du||T===pa?9728:9729}function W(T){const y=T.target;y.removeEventListener("dispose",W),N(y),y.isVideoTexture&&g.delete(y)}function j(T){const y=T.target;y.removeEventListener("dispose",j),q(y)}function N(T){const y=n.get(T);if(y.__webglInit===void 0)return;const F=T.source,$=p.get(F);if($){const Q=$[y.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&O(T),Object.keys($).length===0&&p.delete(F)}n.remove(T)}function O(T){const y=n.get(T);r.deleteTexture(y.__webglTexture);const F=T.source,$=p.get(F);delete $[y.__cacheKey],a.memory.textures--}function q(T){const y=T.texture,F=n.get(T),$=n.get(y);if($.__webglTexture!==void 0&&(r.deleteTexture($.__webglTexture),a.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++)r.deleteFramebuffer(F.__webglFramebuffer[Q]),F.__webglDepthbuffer&&r.deleteRenderbuffer(F.__webglDepthbuffer[Q]);else{if(r.deleteFramebuffer(F.__webglFramebuffer),F.__webglDepthbuffer&&r.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&r.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let Q=0;Q<F.__webglColorRenderbuffer.length;Q++)F.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(F.__webglColorRenderbuffer[Q]);F.__webglDepthRenderbuffer&&r.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let Q=0,ce=y.length;Q<ce;Q++){const pe=n.get(y[Q]);pe.__webglTexture&&(r.deleteTexture(pe.__webglTexture),a.memory.textures--),n.remove(y[Q])}n.remove(y),n.remove(T)}let Y=0;function K(){Y=0}function V(){const T=Y;return T>=l&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+l),Y+=1,T}function oe(T){const y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.encoding),y.join()}function se(T,y){const F=n.get(T);if(T.isVideoTexture&&fe(T),T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){const $=T.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Te(F,T,y);return}}t.bindTexture(3553,F.__webglTexture,33984+y)}function Me(T,y){const F=n.get(T);if(T.version>0&&F.__version!==T.version){Te(F,T,y);return}t.bindTexture(35866,F.__webglTexture,33984+y)}function B(T,y){const F=n.get(T);if(T.version>0&&F.__version!==T.version){Te(F,T,y);return}t.bindTexture(32879,F.__webglTexture,33984+y)}function le(T,y){const F=n.get(T);if(T.version>0&&F.__version!==T.version){ye(F,T,y);return}t.bindTexture(34067,F.__webglTexture,33984+y)}const de={[Ml]:10497,[bn]:33071,[bl]:33648},k={[Ot]:9728,[du]:9984,[pa]:9986,[un]:9729,[__]:9985,[Ls]:9987};function xe(T,y,F){if(F?(r.texParameteri(T,10242,de[y.wrapS]),r.texParameteri(T,10243,de[y.wrapT]),(T===32879||T===35866)&&r.texParameteri(T,32882,de[y.wrapR]),r.texParameteri(T,10240,k[y.magFilter]),r.texParameteri(T,10241,k[y.minFilter])):(r.texParameteri(T,10242,33071),r.texParameteri(T,10243,33071),(T===32879||T===35866)&&r.texParameteri(T,32882,33071),(y.wrapS!==bn||y.wrapT!==bn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(T,10240,R(y.magFilter)),r.texParameteri(T,10241,R(y.minFilter)),y.minFilter!==Ot&&y.minFilter!==un&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const $=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===Ot||y.minFilter!==pa&&y.minFilter!==Ls||y.type===Yi&&e.has("OES_texture_float_linear")===!1||o===!1&&y.type===Ds&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||n.get(y).__currentAnisotropy)&&(r.texParameterf(T,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy)}}function be(T,y){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",W));const $=y.source;let Q=p.get($);Q===void 0&&(Q={},p.set($,Q));const ce=oe(y);if(ce!==T.__cacheKey){Q[ce]===void 0&&(Q[ce]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,F=!0),Q[ce].usedTimes++;const pe=Q[T.__cacheKey];pe!==void 0&&(Q[T.__cacheKey].usedTimes--,pe.usedTimes===0&&O(y)),T.__cacheKey=ce,T.__webglTexture=Q[ce].texture}return F}function Te(T,y,F){let $=3553;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&($=35866),y.isData3DTexture&&($=32879);const Q=be(T,y),ce=y.source;t.bindTexture($,T.__webglTexture,33984+F);const pe=n.get(ce);if(ce.version!==pe.__version||Q===!0){t.activeTexture(33984+F),r.pixelStorei(37440,y.flipY),r.pixelStorei(37441,y.premultiplyAlpha),r.pixelStorei(3317,y.unpackAlignment),r.pixelStorei(37443,0);const P=b(y)&&M(y.image)===!1;let z=x(y.image,P,!1,u);z=re(y,z);const _e=M(z)||o,me=s.convert(y.format,y.encoding);let we=s.convert(y.type),Ae=v(y.internalFormat,me,we,y.encoding,y.isVideoTexture);xe($,y,_e);let ve;const Le=y.mipmaps,Be=o&&y.isVideoTexture!==!0,je=pe.__version===void 0||Q===!0,I=w(y,z,_e);if(y.isDepthTexture)Ae=6402,o?y.type===Yi?Ae=36012:y.type===ji?Ae=33190:y.type===Nr?Ae=35056:Ae=33189:y.type===Yi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===Qi&&Ae===6402&&y.type!==zh&&y.type!==ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=ji,we=s.convert(y.type)),y.format===Xr&&Ae===6402&&(Ae=34041,y.type!==Nr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=Nr,we=s.convert(y.type))),je&&(Be?t.texStorage2D(3553,1,Ae,z.width,z.height):t.texImage2D(3553,0,Ae,z.width,z.height,0,me,we,null));else if(y.isDataTexture)if(Le.length>0&&_e){Be&&je&&t.texStorage2D(3553,I,Ae,Le[0].width,Le[0].height);for(let ee=0,he=Le.length;ee<he;ee++)ve=Le[ee],Be?t.texSubImage2D(3553,ee,0,0,ve.width,ve.height,me,we,ve.data):t.texImage2D(3553,ee,Ae,ve.width,ve.height,0,me,we,ve.data);y.generateMipmaps=!1}else Be?(je&&t.texStorage2D(3553,I,Ae,z.width,z.height),t.texSubImage2D(3553,0,0,0,z.width,z.height,me,we,z.data)):t.texImage2D(3553,0,Ae,z.width,z.height,0,me,we,z.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Be&&je&&t.texStorage3D(35866,I,Ae,Le[0].width,Le[0].height,z.depth);for(let ee=0,he=Le.length;ee<he;ee++)ve=Le[ee],y.format!==Sn?me!==null?Be?t.compressedTexSubImage3D(35866,ee,0,0,0,ve.width,ve.height,z.depth,me,ve.data,0,0):t.compressedTexImage3D(35866,ee,Ae,ve.width,ve.height,z.depth,0,ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?t.texSubImage3D(35866,ee,0,0,0,ve.width,ve.height,z.depth,me,we,ve.data):t.texImage3D(35866,ee,Ae,ve.width,ve.height,z.depth,0,me,we,ve.data)}else{Be&&je&&t.texStorage2D(3553,I,Ae,Le[0].width,Le[0].height);for(let ee=0,he=Le.length;ee<he;ee++)ve=Le[ee],y.format!==Sn?me!==null?Be?t.compressedTexSubImage2D(3553,ee,0,0,ve.width,ve.height,me,ve.data):t.compressedTexImage2D(3553,ee,Ae,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?t.texSubImage2D(3553,ee,0,0,ve.width,ve.height,me,we,ve.data):t.texImage2D(3553,ee,Ae,ve.width,ve.height,0,me,we,ve.data)}else if(y.isDataArrayTexture)Be?(je&&t.texStorage3D(35866,I,Ae,z.width,z.height,z.depth),t.texSubImage3D(35866,0,0,0,0,z.width,z.height,z.depth,me,we,z.data)):t.texImage3D(35866,0,Ae,z.width,z.height,z.depth,0,me,we,z.data);else if(y.isData3DTexture)Be?(je&&t.texStorage3D(32879,I,Ae,z.width,z.height,z.depth),t.texSubImage3D(32879,0,0,0,0,z.width,z.height,z.depth,me,we,z.data)):t.texImage3D(32879,0,Ae,z.width,z.height,z.depth,0,me,we,z.data);else if(y.isFramebufferTexture){if(je)if(Be)t.texStorage2D(3553,I,Ae,z.width,z.height);else{let ee=z.width,he=z.height;for(let Se=0;Se<I;Se++)t.texImage2D(3553,Se,Ae,ee,he,0,me,we,null),ee>>=1,he>>=1}}else if(Le.length>0&&_e){Be&&je&&t.texStorage2D(3553,I,Ae,Le[0].width,Le[0].height);for(let ee=0,he=Le.length;ee<he;ee++)ve=Le[ee],Be?t.texSubImage2D(3553,ee,0,0,me,we,ve):t.texImage2D(3553,ee,Ae,me,we,ve);y.generateMipmaps=!1}else Be?(je&&t.texStorage2D(3553,I,Ae,z.width,z.height),t.texSubImage2D(3553,0,0,0,me,we,z)):t.texImage2D(3553,0,Ae,me,we,z);C(y,_e)&&L($),pe.__version=ce.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function ye(T,y,F){if(y.image.length!==6)return;const $=be(T,y),Q=y.source;t.bindTexture(34067,T.__webglTexture,33984+F);const ce=n.get(Q);if(Q.version!==ce.__version||$===!0){t.activeTexture(33984+F),r.pixelStorei(37440,y.flipY),r.pixelStorei(37441,y.premultiplyAlpha),r.pixelStorei(3317,y.unpackAlignment),r.pixelStorei(37443,0);const pe=y.isCompressedTexture||y.image[0].isCompressedTexture,P=y.image[0]&&y.image[0].isDataTexture,z=[];for(let ee=0;ee<6;ee++)!pe&&!P?z[ee]=x(y.image[ee],!1,!0,c):z[ee]=P?y.image[ee].image:y.image[ee],z[ee]=re(y,z[ee]);const _e=z[0],me=M(_e)||o,we=s.convert(y.format,y.encoding),Ae=s.convert(y.type),ve=v(y.internalFormat,we,Ae,y.encoding),Le=o&&y.isVideoTexture!==!0,Be=ce.__version===void 0||$===!0;let je=w(y,_e,me);xe(34067,y,me);let I;if(pe){Le&&Be&&t.texStorage2D(34067,je,ve,_e.width,_e.height);for(let ee=0;ee<6;ee++){I=z[ee].mipmaps;for(let he=0;he<I.length;he++){const Se=I[he];y.format!==Sn?we!==null?Le?t.compressedTexSubImage2D(34069+ee,he,0,0,Se.width,Se.height,we,Se.data):t.compressedTexImage2D(34069+ee,he,ve,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?t.texSubImage2D(34069+ee,he,0,0,Se.width,Se.height,we,Ae,Se.data):t.texImage2D(34069+ee,he,ve,Se.width,Se.height,0,we,Ae,Se.data)}}}else{I=y.mipmaps,Le&&Be&&(I.length>0&&je++,t.texStorage2D(34067,je,ve,z[0].width,z[0].height));for(let ee=0;ee<6;ee++)if(P){Le?t.texSubImage2D(34069+ee,0,0,0,z[ee].width,z[ee].height,we,Ae,z[ee].data):t.texImage2D(34069+ee,0,ve,z[ee].width,z[ee].height,0,we,Ae,z[ee].data);for(let he=0;he<I.length;he++){const Ee=I[he].image[ee].image;Le?t.texSubImage2D(34069+ee,he+1,0,0,Ee.width,Ee.height,we,Ae,Ee.data):t.texImage2D(34069+ee,he+1,ve,Ee.width,Ee.height,0,we,Ae,Ee.data)}}else{Le?t.texSubImage2D(34069+ee,0,0,0,we,Ae,z[ee]):t.texImage2D(34069+ee,0,ve,we,Ae,z[ee]);for(let he=0;he<I.length;he++){const Se=I[he];Le?t.texSubImage2D(34069+ee,he+1,0,0,we,Ae,Se.image[ee]):t.texImage2D(34069+ee,he+1,ve,we,Ae,Se.image[ee])}}}C(y,me)&&L(34067),ce.__version=Q.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function Ce(T,y,F,$,Q){const ce=s.convert(F.format,F.encoding),pe=s.convert(F.type),P=v(F.internalFormat,ce,pe,F.encoding);n.get(y).__hasExternalTextures||(Q===32879||Q===35866?t.texImage3D(Q,0,P,y.width,y.height,y.depth,0,ce,pe,null):t.texImage2D(Q,0,P,y.width,y.height,0,ce,pe,null)),t.bindFramebuffer(36160,T),ie(y)?f.framebufferTexture2DMultisampleEXT(36160,$,Q,n.get(F).__webglTexture,0,ue(y)):(Q===3553||Q>=34069&&Q<=34074)&&r.framebufferTexture2D(36160,$,Q,n.get(F).__webglTexture,0),t.bindFramebuffer(36160,null)}function De(T,y,F){if(r.bindRenderbuffer(36161,T),y.depthBuffer&&!y.stencilBuffer){let $=33189;if(F||ie(y)){const Q=y.depthTexture;Q&&Q.isDepthTexture&&(Q.type===Yi?$=36012:Q.type===ji&&($=33190));const ce=ue(y);ie(y)?f.renderbufferStorageMultisampleEXT(36161,ce,$,y.width,y.height):r.renderbufferStorageMultisample(36161,ce,$,y.width,y.height)}else r.renderbufferStorage(36161,$,y.width,y.height);r.framebufferRenderbuffer(36160,36096,36161,T)}else if(y.depthBuffer&&y.stencilBuffer){const $=ue(y);F&&ie(y)===!1?r.renderbufferStorageMultisample(36161,$,35056,y.width,y.height):ie(y)?f.renderbufferStorageMultisampleEXT(36161,$,35056,y.width,y.height):r.renderbufferStorage(36161,34041,y.width,y.height),r.framebufferRenderbuffer(36160,33306,36161,T)}else{const $=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let Q=0;Q<$.length;Q++){const ce=$[Q],pe=s.convert(ce.format,ce.encoding),P=s.convert(ce.type),z=v(ce.internalFormat,pe,P,ce.encoding),_e=ue(y);F&&ie(y)===!1?r.renderbufferStorageMultisample(36161,_e,z,y.width,y.height):ie(y)?f.renderbufferStorageMultisampleEXT(36161,_e,z,y.width,y.height):r.renderbufferStorage(36161,z,y.width,y.height)}}r.bindRenderbuffer(36161,null)}function A(T,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),se(y.depthTexture,0);const $=n.get(y.depthTexture).__webglTexture,Q=ue(y);if(y.depthTexture.format===Qi)ie(y)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,$,0,Q):r.framebufferTexture2D(36160,36096,3553,$,0);else if(y.depthTexture.format===Xr)ie(y)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,$,0,Q):r.framebufferTexture2D(36160,33306,3553,$,0);else throw new Error("Unknown depthTexture format")}function D(T){const y=n.get(T),F=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!y.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");A(y.__webglFramebuffer,T)}else if(F){y.__webglDepthbuffer=[];for(let $=0;$<6;$++)t.bindFramebuffer(36160,y.__webglFramebuffer[$]),y.__webglDepthbuffer[$]=r.createRenderbuffer(),De(y.__webglDepthbuffer[$],T,!1)}else t.bindFramebuffer(36160,y.__webglFramebuffer),y.__webglDepthbuffer=r.createRenderbuffer(),De(y.__webglDepthbuffer,T,!1);t.bindFramebuffer(36160,null)}function X(T,y,F){const $=n.get(T);y!==void 0&&Ce($.__webglFramebuffer,T,T.texture,36064,3553),F!==void 0&&D(T)}function te(T){const y=T.texture,F=n.get(T),$=n.get(y);T.addEventListener("dispose",j),T.isWebGLMultipleRenderTargets!==!0&&($.__webglTexture===void 0&&($.__webglTexture=r.createTexture()),$.__version=y.version,a.memory.textures++);const Q=T.isWebGLCubeRenderTarget===!0,ce=T.isWebGLMultipleRenderTargets===!0,pe=M(T)||o;if(Q){F.__webglFramebuffer=[];for(let P=0;P<6;P++)F.__webglFramebuffer[P]=r.createFramebuffer()}else{if(F.__webglFramebuffer=r.createFramebuffer(),ce)if(i.drawBuffers){const P=T.texture;for(let z=0,_e=P.length;z<_e;z++){const me=n.get(P[z]);me.__webglTexture===void 0&&(me.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&T.samples>0&&ie(T)===!1){const P=ce?y:[y];F.__webglMultisampledFramebuffer=r.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,F.__webglMultisampledFramebuffer);for(let z=0;z<P.length;z++){const _e=P[z];F.__webglColorRenderbuffer[z]=r.createRenderbuffer(),r.bindRenderbuffer(36161,F.__webglColorRenderbuffer[z]);const me=s.convert(_e.format,_e.encoding),we=s.convert(_e.type),Ae=v(_e.internalFormat,me,we,_e.encoding,T.isXRRenderTarget===!0),ve=ue(T);r.renderbufferStorageMultisample(36161,ve,Ae,T.width,T.height),r.framebufferRenderbuffer(36160,36064+z,36161,F.__webglColorRenderbuffer[z])}r.bindRenderbuffer(36161,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=r.createRenderbuffer(),De(F.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(36160,null)}}if(Q){t.bindTexture(34067,$.__webglTexture),xe(34067,y,pe);for(let P=0;P<6;P++)Ce(F.__webglFramebuffer[P],T,y,36064,34069+P);C(y,pe)&&L(34067),t.unbindTexture()}else if(ce){const P=T.texture;for(let z=0,_e=P.length;z<_e;z++){const me=P[z],we=n.get(me);t.bindTexture(3553,we.__webglTexture),xe(3553,me,pe),Ce(F.__webglFramebuffer,T,me,36064+z,3553),C(me,pe)&&L(3553)}t.unbindTexture()}else{let P=3553;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(o?P=T.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(P,$.__webglTexture),xe(P,y,pe),Ce(F.__webglFramebuffer,T,y,36064,P),C(y,pe)&&L(P),t.unbindTexture()}T.depthBuffer&&D(T)}function J(T){const y=M(T)||o,F=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let $=0,Q=F.length;$<Q;$++){const ce=F[$];if(C(ce,y)){const pe=T.isWebGLCubeRenderTarget?34067:3553,P=n.get(ce).__webglTexture;t.bindTexture(pe,P),L(pe),t.unbindTexture()}}}function ae(T){if(o&&T.samples>0&&ie(T)===!1){const y=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],F=T.width,$=T.height;let Q=16384;const ce=[],pe=T.stencilBuffer?33306:36096,P=n.get(T),z=T.isWebGLMultipleRenderTargets===!0;if(z)for(let _e=0;_e<y.length;_e++)t.bindFramebuffer(36160,P.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+_e,36161,null),t.bindFramebuffer(36160,P.__webglFramebuffer),r.framebufferTexture2D(36009,36064+_e,3553,null,0);t.bindFramebuffer(36008,P.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,P.__webglFramebuffer);for(let _e=0;_e<y.length;_e++){ce.push(36064+_e),T.depthBuffer&&ce.push(pe);const me=P.__ignoreDepthValues!==void 0?P.__ignoreDepthValues:!1;if(me===!1&&(T.depthBuffer&&(Q|=256),T.stencilBuffer&&(Q|=1024)),z&&r.framebufferRenderbuffer(36008,36064,36161,P.__webglColorRenderbuffer[_e]),me===!0&&(r.invalidateFramebuffer(36008,[pe]),r.invalidateFramebuffer(36009,[pe])),z){const we=n.get(y[_e]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,we,0)}r.blitFramebuffer(0,0,F,$,0,0,F,$,Q,9728),m&&r.invalidateFramebuffer(36008,ce)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),z)for(let _e=0;_e<y.length;_e++){t.bindFramebuffer(36160,P.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+_e,36161,P.__webglColorRenderbuffer[_e]);const me=n.get(y[_e]).__webglTexture;t.bindFramebuffer(36160,P.__webglFramebuffer),r.framebufferTexture2D(36009,36064+_e,3553,me,0)}t.bindFramebuffer(36009,P.__webglMultisampledFramebuffer)}}function ue(T){return Math.min(h,T.samples)}function ie(T){const y=n.get(T);return o&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function fe(T){const y=a.render.frame;g.get(T)!==y&&(g.set(T,y),T.update())}function re(T,y){const F=T.encoding,$=T.format,Q=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===Sl||F!==rr&&(F===Je?o===!1?e.has("EXT_sRGB")===!0&&$===Sn?(T.format=Sl,T.minFilter=un,T.generateMipmaps=!1):y=Gh.sRGBToLinear(y):($!==Sn||Q!==ir)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",F)),y}this.allocateTextureUnit=V,this.resetTextureUnits=K,this.setTexture2D=se,this.setTexture2DArray=Me,this.setTexture3D=B,this.setTextureCube=le,this.rebindTextures=X,this.setupRenderTarget=te,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=D,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=ie}function zM(r,e,t){const n=t.isWebGL2;function i(s,a=null){let o;if(s===ir)return 5121;if(s===M_)return 32819;if(s===b_)return 32820;if(s===x_)return 5120;if(s===v_)return 5122;if(s===zh)return 5123;if(s===y_)return 5124;if(s===ji)return 5125;if(s===Yi)return 5126;if(s===Ds)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===S_)return 6406;if(s===Sn)return 6408;if(s===w_)return 6409;if(s===T_)return 6410;if(s===Qi)return 6402;if(s===Xr)return 34041;if(s===Sl)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===E_)return 6403;if(s===A_)return 36244;if(s===C_)return 33319;if(s===P_)return 33320;if(s===L_)return 36249;if(s===ma||s===ga||s===_a||s===xa)if(a===Je)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===ma)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ga)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===_a)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===xa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===ma)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ga)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===_a)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===xa)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===pu||s===mu||s===gu||s===_u)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===pu)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===mu)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===gu)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===_u)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===D_)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===xu||s===vu)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===xu)return a===Je?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===vu)return a===Je?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===yu||s===Mu||s===bu||s===Su||s===wu||s===Tu||s===Eu||s===Au||s===Cu||s===Pu||s===Lu||s===Du||s===Ru||s===Iu)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===yu)return a===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Mu)return a===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===bu)return a===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Su)return a===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===wu)return a===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Tu)return a===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Eu)return a===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Au)return a===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Cu)return a===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Pu)return a===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Lu)return a===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Du)return a===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ru)return a===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Iu)return a===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===va)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===va)return a===Je?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===R_||s===Ou||s===Fu||s===Nu)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===va)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Ou)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Fu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Nu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Nr?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class UM extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class go extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const BM={type:"move"};class Xa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new go,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new go,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new go,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const d of e.hand.values()){const p=t.getJointPose(d,n),_=this._getHandJoint(c,d);p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=p.radius),_.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(BM)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new go;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class kM extends en{constructor(e,t,n,i,s,a,o,l,c,u){if(u=u!==void 0?u:Qi,u!==Qi&&u!==Xr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Qi&&(n=ji),n===void 0&&u===Xr&&(n=Nr),super(null,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ot,this.minFilter=l!==void 0?l:Ot,this.flipY=!1,this.generateMipmaps=!1}}class GM extends cr{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,m=null,g=null;const d=t.getContextAttributes();let p=null,_=null;const S=[],x=[],M=new Set,b=new Map,C=new Zt;C.layers.enable(1),C.viewport=new et;const L=new Zt;L.layers.enable(2),L.viewport=new et;const v=[C,L],w=new UM;w.layers.enable(1),w.layers.enable(2);let R=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let le=S[B];return le===void 0&&(le=new Xa,S[B]=le),le.getTargetRaySpace()},this.getControllerGrip=function(B){let le=S[B];return le===void 0&&(le=new Xa,S[B]=le),le.getGripSpace()},this.getHand=function(B){let le=S[B];return le===void 0&&(le=new Xa,S[B]=le),le.getHandSpace()};function j(B){const le=x.indexOf(B.inputSource);if(le===-1)return;const de=S[le];de!==void 0&&de.dispatchEvent({type:B.type,data:B.inputSource})}function N(){i.removeEventListener("select",j),i.removeEventListener("selectstart",j),i.removeEventListener("selectend",j),i.removeEventListener("squeeze",j),i.removeEventListener("squeezestart",j),i.removeEventListener("squeezeend",j),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",O);for(let B=0;B<S.length;B++){const le=x[B];le!==null&&(x[B]=null,S[B].disconnect(le))}R=null,W=null,e.setRenderTarget(p),m=null,f=null,h=null,i=null,_=null,Me.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(B){if(i=B,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",j),i.addEventListener("selectstart",j),i.addEventListener("selectend",j),i.addEventListener("squeeze",j),i.addEventListener("squeezestart",j),i.addEventListener("squeezeend",j),i.addEventListener("end",N),i.addEventListener("inputsourceschange",O),d.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const le={antialias:i.renderState.layers===void 0?d.antialias:!0,alpha:d.alpha,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,t,le),i.updateRenderState({baseLayer:m}),_=new or(m.framebufferWidth,m.framebufferHeight,{format:Sn,type:ir,encoding:e.outputEncoding,stencilBuffer:d.stencil})}else{let le=null,de=null,k=null;d.depth&&(k=d.stencil?35056:33190,le=d.stencil?Xr:Qi,de=d.stencil?Nr:ji);const xe={colorFormat:32856,depthFormat:k,scaleFactor:s};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(xe),i.updateRenderState({layers:[f]}),_=new or(f.textureWidth,f.textureHeight,{format:Sn,type:ir,depthTexture:new kM(f.textureWidth,f.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:d.stencil,encoding:e.outputEncoding,samples:d.antialias?4:0});const be=e.properties.get(_);be.__ignoreDepthValues=f.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Me.setContext(i),Me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function O(B){for(let le=0;le<B.removed.length;le++){const de=B.removed[le],k=x.indexOf(de);k>=0&&(x[k]=null,S[k].disconnect(de))}for(let le=0;le<B.added.length;le++){const de=B.added[le];let k=x.indexOf(de);if(k===-1){for(let be=0;be<S.length;be++)if(be>=x.length){x.push(de),k=be;break}else if(x[be]===null){x[be]=de,k=be;break}if(k===-1)break}const xe=S[k];xe&&xe.connect(de)}}const q=new U,Y=new U;function K(B,le,de){q.setFromMatrixPosition(le.matrixWorld),Y.setFromMatrixPosition(de.matrixWorld);const k=q.distanceTo(Y),xe=le.projectionMatrix.elements,be=de.projectionMatrix.elements,Te=xe[14]/(xe[10]-1),ye=xe[14]/(xe[10]+1),Ce=(xe[9]+1)/xe[5],De=(xe[9]-1)/xe[5],A=(xe[8]-1)/xe[0],D=(be[8]+1)/be[0],X=Te*A,te=Te*D,J=k/(-A+D),ae=J*-A;le.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(ae),B.translateZ(J),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const ue=Te+J,ie=ye+J,fe=X-ae,re=te+(k-ae),T=Ce*ye/ie*ue,y=De*ye/ie*ue;B.projectionMatrix.makePerspective(fe,re,T,y,ue,ie)}function V(B,le){le===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(le.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(i===null)return;w.near=L.near=C.near=B.near,w.far=L.far=C.far=B.far,(R!==w.near||W!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),R=w.near,W=w.far);const le=B.parent,de=w.cameras;V(w,le);for(let xe=0;xe<de.length;xe++)V(de[xe],le);w.matrixWorld.decompose(w.position,w.quaternion,w.scale),B.matrix.copy(w.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale);const k=B.children;for(let xe=0,be=k.length;xe<be;xe++)k[xe].updateMatrixWorld(!0);de.length===2?K(w,C,L):w.projectionMatrix.copy(C.projectionMatrix)},this.getCamera=function(){return w},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(B){l=B,f!==null&&(f.fixedFoveation=B),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=B)},this.getPlanes=function(){return M};let oe=null;function se(B,le){if(u=le.getViewerPose(c||a),g=le,u!==null){const de=u.views;m!==null&&(e.setRenderTargetFramebuffer(_,m.framebuffer),e.setRenderTarget(_));let k=!1;de.length!==w.cameras.length&&(w.cameras.length=0,k=!0);for(let xe=0;xe<de.length;xe++){const be=de[xe];let Te=null;if(m!==null)Te=m.getViewport(be);else{const Ce=h.getViewSubImage(f,be);Te=Ce.viewport,xe===0&&(e.setRenderTargetTextures(_,Ce.colorTexture,f.ignoreDepthValues?void 0:Ce.depthStencilTexture),e.setRenderTarget(_))}let ye=v[xe];ye===void 0&&(ye=new Zt,ye.layers.enable(xe),ye.viewport=new et,v[xe]=ye),ye.matrix.fromArray(be.transform.matrix),ye.projectionMatrix.fromArray(be.projectionMatrix),ye.viewport.set(Te.x,Te.y,Te.width,Te.height),xe===0&&w.matrix.copy(ye.matrix),k===!0&&w.cameras.push(ye)}}for(let de=0;de<S.length;de++){const k=x[de],xe=S[de];k!==null&&xe!==void 0&&xe.update(k,le,c||a)}if(oe&&oe(B,le),le.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:le.detectedPlanes});let de=null;for(const k of M)le.detectedPlanes.has(k)||(de===null&&(de=[]),de.push(k));if(de!==null)for(const k of de)M.delete(k),b.delete(k),n.dispatchEvent({type:"planeremoved",data:k});for(const k of le.detectedPlanes)if(!M.has(k))M.add(k),b.set(k,le.lastChangedTime),n.dispatchEvent({type:"planeadded",data:k});else{const xe=b.get(k);k.lastChangedTime>xe&&(b.set(k,k.lastChangedTime),n.dispatchEvent({type:"planechanged",data:k}))}}g=null}const Me=new Jh;Me.setAnimationLoop(se),this.setAnimationLoop=function(B){oe=B},this.dispose=function(){}}}function VM(r,e){function t(d,p){p.color.getRGB(d.fogColor.value,Kh(r)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function n(d,p,_,S,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(d,p):p.isMeshToonMaterial?(i(d,p),u(d,p)):p.isMeshPhongMaterial?(i(d,p),c(d,p)):p.isMeshStandardMaterial?(i(d,p),h(d,p),p.isMeshPhysicalMaterial&&f(d,p,x)):p.isMeshMatcapMaterial?(i(d,p),m(d,p)):p.isMeshDepthMaterial?i(d,p):p.isMeshDistanceMaterial?(i(d,p),g(d,p)):p.isMeshNormalMaterial?i(d,p):p.isLineBasicMaterial?(s(d,p),p.isLineDashedMaterial&&a(d,p)):p.isPointsMaterial?o(d,p,_,S):p.isSpriteMaterial?l(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.bumpMap&&(d.bumpMap.value=p.bumpMap,d.bumpScale.value=p.bumpScale,p.side===Qt&&(d.bumpScale.value*=-1)),p.displacementMap&&(d.displacementMap.value=p.displacementMap,d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap),p.normalMap&&(d.normalMap.value=p.normalMap,d.normalScale.value.copy(p.normalScale),p.side===Qt&&d.normalScale.value.negate()),p.specularMap&&(d.specularMap.value=p.specularMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const _=e.get(p).envMap;if(_&&(d.envMap.value=_,d.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap){d.lightMap.value=p.lightMap;const M=r.useLegacyLights===!0?Math.PI:1;d.lightMapIntensity.value=p.lightMapIntensity*M}p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity);let S;p.map?S=p.map:p.specularMap?S=p.specularMap:p.displacementMap?S=p.displacementMap:p.normalMap?S=p.normalMap:p.bumpMap?S=p.bumpMap:p.roughnessMap?S=p.roughnessMap:p.metalnessMap?S=p.metalnessMap:p.alphaMap?S=p.alphaMap:p.emissiveMap?S=p.emissiveMap:p.clearcoatMap?S=p.clearcoatMap:p.clearcoatNormalMap?S=p.clearcoatNormalMap:p.clearcoatRoughnessMap?S=p.clearcoatRoughnessMap:p.iridescenceMap?S=p.iridescenceMap:p.iridescenceThicknessMap?S=p.iridescenceThicknessMap:p.specularIntensityMap?S=p.specularIntensityMap:p.specularColorMap?S=p.specularColorMap:p.transmissionMap?S=p.transmissionMap:p.thicknessMap?S=p.thicknessMap:p.sheenColorMap?S=p.sheenColorMap:p.sheenRoughnessMap&&(S=p.sheenRoughnessMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),d.uvTransform.value.copy(S.matrix));let x;p.aoMap?x=p.aoMap:p.lightMap&&(x=p.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),d.uv2Transform.value.copy(x.matrix))}function s(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity}function a(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function o(d,p,_,S){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*_,d.scale.value=S*.5,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let x;p.map?x=p.map:p.alphaMap&&(x=p.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),d.uvTransform.value.copy(x.matrix))}function l(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),d.uvTransform.value.copy(_.matrix))}function c(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function u(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function h(d,p){d.roughness.value=p.roughness,d.metalness.value=p.metalness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function f(d,p,_){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),d.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Qt&&d.clearcoatNormalScale.value.negate())),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=_.texture,d.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap)}function m(d,p){p.matcap&&(d.matcap.value=p.matcap)}function g(d,p){d.referencePosition.value.copy(p.referencePosition),d.nearDistance.value=p.nearDistance,d.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function HM(r,e,t,n){let i={},s={},a=[];const o=t.isWebGL2?r.getParameter(35375):0;function l(S,x){const M=x.program;n.uniformBlockBinding(S,M)}function c(S,x){let M=i[S.id];M===void 0&&(g(S),M=u(S),i[S.id]=M,S.addEventListener("dispose",p));const b=x.program;n.updateUBOMapping(S,b);const C=e.render.frame;s[S.id]!==C&&(f(S),s[S.id]=C)}function u(S){const x=h();S.__bindingPointIndex=x;const M=r.createBuffer(),b=S.__size,C=S.usage;return r.bindBuffer(35345,M),r.bufferData(35345,b,C),r.bindBuffer(35345,null),r.bindBufferBase(35345,x,M),M}function h(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const x=i[S.id],M=S.uniforms,b=S.__cache;r.bindBuffer(35345,x);for(let C=0,L=M.length;C<L;C++){const v=M[C];if(m(v,C,b)===!0){const w=v.__offset,R=Array.isArray(v.value)?v.value:[v.value];let W=0;for(let j=0;j<R.length;j++){const N=R[j],O=d(N);typeof N=="number"?(v.__data[0]=N,r.bufferSubData(35345,w+W,v.__data)):N.isMatrix3?(v.__data[0]=N.elements[0],v.__data[1]=N.elements[1],v.__data[2]=N.elements[2],v.__data[3]=N.elements[0],v.__data[4]=N.elements[3],v.__data[5]=N.elements[4],v.__data[6]=N.elements[5],v.__data[7]=N.elements[0],v.__data[8]=N.elements[6],v.__data[9]=N.elements[7],v.__data[10]=N.elements[8],v.__data[11]=N.elements[0]):(N.toArray(v.__data,W),W+=O.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(35345,w,v.__data)}}r.bindBuffer(35345,null)}function m(S,x,M){const b=S.value;if(M[x]===void 0){if(typeof b=="number")M[x]=b;else{const C=Array.isArray(b)?b:[b],L=[];for(let v=0;v<C.length;v++)L.push(C[v].clone());M[x]=L}return!0}else if(typeof b=="number"){if(M[x]!==b)return M[x]=b,!0}else{const C=Array.isArray(M[x])?M[x]:[M[x]],L=Array.isArray(b)?b:[b];for(let v=0;v<C.length;v++){const w=C[v];if(w.equals(L[v])===!1)return w.copy(L[v]),!0}}return!1}function g(S){const x=S.uniforms;let M=0;const b=16;let C=0;for(let L=0,v=x.length;L<v;L++){const w=x[L],R={boundary:0,storage:0},W=Array.isArray(w.value)?w.value:[w.value];for(let j=0,N=W.length;j<N;j++){const O=W[j],q=d(O);R.boundary+=q.boundary,R.storage+=q.storage}if(w.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=M,L>0){C=M%b;const j=b-C;C!==0&&j-R.boundary<0&&(M+=b-C,w.__offset=M)}M+=R.storage}return C=M%b,C>0&&(M+=b-C),S.__size=M,S.__cache={},this}function d(S){const x={boundary:0,storage:0};return typeof S=="number"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function p(S){const x=S.target;x.removeEventListener("dispose",p);const M=a.indexOf(x.__bindingPointIndex);a.splice(M,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function _(){for(const S in i)r.deleteBuffer(i[S]);a=[],i={},s={}}return{bind:l,update:c,dispose:_}}function WM(){const r=Lo("canvas");return r.style.display="block",r}function pc(r={}){this.isWebGLRenderer=!0;const e=r.canvas!==void 0?r.canvas:WM(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,a=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,o=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,l=r.powerPreference!==void 0?r.powerPreference:"default",c=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=r.alpha!==void 0?r.alpha:!1;let h=null,f=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=rr,this.useLegacyLights=!0,this.toneMapping=ei,this.toneMappingExposure=1;const d=this;let p=!1,_=0,S=0,x=null,M=-1,b=null;const C=new et,L=new et;let v=null,w=e.width,R=e.height,W=1,j=null,N=null;const O=new et(0,0,w,R),q=new et(0,0,w,R);let Y=!1;const K=new fc;let V=!1,oe=!1,se=null;const Me=new ft,B=new U,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function de(){return x===null?W:1}let k=t;function xe(E,H){for(let Z=0;Z<E.length;Z++){const G=E[Z],ne=e.getContext(G,H);if(ne!==null)return ne}return null}try{const E={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${cc}`),e.addEventListener("webglcontextlost",we,!1),e.addEventListener("webglcontextrestored",Ae,!1),e.addEventListener("webglcontextcreationerror",ve,!1),k===null){const H=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&H.shift(),k=xe(H,E),k===null)throw xe(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let be,Te,ye,Ce,De,A,D,X,te,J,ae,ue,ie,fe,re,T,y,F,$,Q,ce,pe,P,z;function _e(){be=new ty(k),Te=new Yv(k,be,r),be.init(Te),pe=new zM(k,be,Te),ye=new FM(k,be,Te),Ce=new ry,De=new MM,A=new NM(k,be,ye,De,Te,pe,Ce),D=new $v(d),X=new ey(d),te=new h0(k,Te),P=new qv(k,be,te,Te),J=new ny(k,te,Ce,P),ae=new ly(k,J,te,Ce),$=new ay(k,Te,A),T=new Kv(De),ue=new yM(d,D,X,be,Te,P,T),ie=new VM(d,De),fe=new SM,re=new PM(be,Te),F=new Xv(d,D,X,ye,ae,u,a),y=new OM(d,ae,Te),z=new HM(k,Ce,Te,ye),Q=new jv(k,be,Ce,Te),ce=new iy(k,be,Ce,Te),Ce.programs=ue.programs,d.capabilities=Te,d.extensions=be,d.properties=De,d.renderLists=fe,d.shadowMap=y,d.state=ye,d.info=Ce}_e();const me=new GM(d,k);this.xr=me,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const E=be.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=be.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(E){E!==void 0&&(W=E,this.setSize(w,R,!1))},this.getSize=function(E){return E.set(w,R)},this.setSize=function(E,H,Z=!0){if(me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}w=E,R=H,e.width=Math.floor(E*W),e.height=Math.floor(H*W),Z===!0&&(e.style.width=E+"px",e.style.height=H+"px"),this.setViewport(0,0,E,H)},this.getDrawingBufferSize=function(E){return E.set(w*W,R*W).floor()},this.setDrawingBufferSize=function(E,H,Z){w=E,R=H,W=Z,e.width=Math.floor(E*Z),e.height=Math.floor(H*Z),this.setViewport(0,0,E,H)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(O)},this.setViewport=function(E,H,Z,G){E.isVector4?O.set(E.x,E.y,E.z,E.w):O.set(E,H,Z,G),ye.viewport(C.copy(O).multiplyScalar(W).floor())},this.getScissor=function(E){return E.copy(q)},this.setScissor=function(E,H,Z,G){E.isVector4?q.set(E.x,E.y,E.z,E.w):q.set(E,H,Z,G),ye.scissor(L.copy(q).multiplyScalar(W).floor())},this.getScissorTest=function(){return Y},this.setScissorTest=function(E){ye.setScissorTest(Y=E)},this.setOpaqueSort=function(E){j=E},this.setTransparentSort=function(E){N=E},this.getClearColor=function(E){return E.copy(F.getClearColor())},this.setClearColor=function(){F.setClearColor.apply(F,arguments)},this.getClearAlpha=function(){return F.getClearAlpha()},this.setClearAlpha=function(){F.setClearAlpha.apply(F,arguments)},this.clear=function(E=!0,H=!0,Z=!0){let G=0;E&&(G|=16384),H&&(G|=256),Z&&(G|=1024),k.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",we,!1),e.removeEventListener("webglcontextrestored",Ae,!1),e.removeEventListener("webglcontextcreationerror",ve,!1),fe.dispose(),re.dispose(),De.dispose(),D.dispose(),X.dispose(),ae.dispose(),P.dispose(),z.dispose(),ue.dispose(),me.dispose(),me.removeEventListener("sessionstart",he),me.removeEventListener("sessionend",Se),se&&(se.dispose(),se=null),Ee.stop()};function we(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function Ae(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const E=Ce.autoReset,H=y.enabled,Z=y.autoUpdate,G=y.needsUpdate,ne=y.type;_e(),Ce.autoReset=E,y.enabled=H,y.autoUpdate=Z,y.needsUpdate=G,y.type=ne}function ve(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Le(E){const H=E.target;H.removeEventListener("dispose",Le),Be(H)}function Be(E){je(E),De.remove(E)}function je(E){const H=De.get(E).programs;H!==void 0&&(H.forEach(function(Z){ue.releaseProgram(Z)}),E.isShaderMaterial&&ue.releaseShaderCache(E))}this.renderBufferDirect=function(E,H,Z,G,ne,Pe){H===null&&(H=le);const Re=ne.isMesh&&ne.matrixWorld.determinant()<0,Ne=np(E,H,Z,G,ne);ye.setMaterial(G,Re);let ze=Z.index,Xe=1;G.wireframe===!0&&(ze=J.getWireframeAttribute(Z),Xe=2);const Ge=Z.drawRange,Ve=Z.attributes.position;let ot=Ge.start*Xe,Xt=(Ge.start+Ge.count)*Xe;Pe!==null&&(ot=Math.max(ot,Pe.start*Xe),Xt=Math.min(Xt,(Pe.start+Pe.count)*Xe)),ze!==null?(ot=Math.max(ot,0),Xt=Math.min(Xt,ze.count)):Ve!=null&&(ot=Math.max(ot,0),Xt=Math.min(Xt,Ve.count));const Gn=Xt-ot;if(Gn<0||Gn===1/0)return;P.setup(ne,G,Ne,Z,ze);let Pi,at=Q;if(ze!==null&&(Pi=te.get(ze),at=ce,at.setIndex(Pi)),ne.isMesh)G.wireframe===!0?(ye.setLineWidth(G.wireframeLinewidth*de()),at.setMode(1)):at.setMode(4);else if(ne.isLine){let He=G.linewidth;He===void 0&&(He=1),ye.setLineWidth(He*de()),ne.isLineSegments?at.setMode(1):ne.isLineLoop?at.setMode(2):at.setMode(3)}else ne.isPoints?at.setMode(0):ne.isSprite&&at.setMode(4);if(ne.isInstancedMesh)at.renderInstances(ot,Gn,ne.count);else if(Z.isInstancedBufferGeometry){const He=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,ta=Math.min(Z.instanceCount,He);at.renderInstances(ot,Gn,ta)}else at.render(ot,Gn)},this.compile=function(E,H){function Z(G,ne,Pe){G.transparent===!0&&G.side===hi&&G.forceSinglePass===!1?(G.side=Qt,G.needsUpdate=!0,sn(G,ne,Pe),G.side=wi,G.needsUpdate=!0,sn(G,ne,Pe),G.side=hi):sn(G,ne,Pe)}f=re.get(E),f.init(),g.push(f),E.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(f.pushLight(G),G.castShadow&&f.pushShadow(G))}),f.setupLights(d.useLegacyLights),E.traverse(function(G){const ne=G.material;if(ne)if(Array.isArray(ne))for(let Pe=0;Pe<ne.length;Pe++){const Re=ne[Pe];Z(Re,E,G)}else Z(ne,E,G)}),g.pop(),f=null};let I=null;function ee(E){I&&I(E)}function he(){Ee.stop()}function Se(){Ee.start()}const Ee=new Jh;Ee.setAnimationLoop(ee),typeof self<"u"&&Ee.setContext(self),this.setAnimationLoop=function(E){I=E,me.setAnimationLoop(E),E===null?Ee.stop():Ee.start()},me.addEventListener("sessionstart",he),me.addEventListener("sessionend",Se),this.render=function(E,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(me.cameraAutoUpdate===!0&&me.updateCamera(H),H=me.getCamera()),E.isScene===!0&&E.onBeforeRender(d,E,H,x),f=re.get(E,g.length),f.init(),g.push(f),Me.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),K.setFromProjectionMatrix(Me),oe=this.localClippingEnabled,V=T.init(this.clippingPlanes,oe),h=fe.get(E,m.length),h.init(),m.push(h),Ze(E,H,0,d.sortObjects),h.finish(),d.sortObjects===!0&&h.sort(j,N),V===!0&&T.beginShadows();const Z=f.state.shadowsArray;if(y.render(Z,E,H),V===!0&&T.endShadows(),this.info.autoReset===!0&&this.info.reset(),F.render(h,E),f.setupLights(d.useLegacyLights),H.isArrayCamera){const G=H.cameras;for(let ne=0,Pe=G.length;ne<Pe;ne++){const Re=G[ne];gt(h,E,Re,Re.viewport)}}else gt(h,E,H);x!==null&&(A.updateMultisampleRenderTarget(x),A.updateRenderTargetMipmap(x)),E.isScene===!0&&E.onAfterRender(d,E,H),P.resetDefaultState(),M=-1,b=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function Ze(E,H,Z,G){if(E.visible===!1)return;if(E.layers.test(H.layers)){if(E.isGroup)Z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(H);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||K.intersectsSprite(E)){G&&B.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Me);const Re=ae.update(E),Ne=E.material;Ne.visible&&h.push(E,Re,Ne,Z,B.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==Ce.render.frame&&(E.skeleton.update(),E.skeleton.frame=Ce.render.frame),!E.frustumCulled||K.intersectsObject(E))){G&&B.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Me);const Re=ae.update(E),Ne=E.material;if(Array.isArray(Ne)){const ze=Re.groups;for(let Xe=0,Ge=ze.length;Xe<Ge;Xe++){const Ve=ze[Xe],ot=Ne[Ve.materialIndex];ot&&ot.visible&&h.push(E,Re,ot,Z,B.z,Ve)}}else Ne.visible&&h.push(E,Re,Ne,Z,B.z,null)}}const Pe=E.children;for(let Re=0,Ne=Pe.length;Re<Ne;Re++)Ze(Pe[Re],H,Z,G)}function gt(E,H,Z,G){const ne=E.opaque,Pe=E.transmissive,Re=E.transparent;f.setupLightsView(Z),V===!0&&T.setGlobalState(d.clippingPlanes,Z),Pe.length>0&&Pt(ne,H,Z),G&&ye.viewport(C.copy(G)),ne.length>0&&Cn(ne,H,Z),Pe.length>0&&Cn(Pe,H,Z),Re.length>0&&Cn(Re,H,Z),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function Pt(E,H,Z){const G=Te.isWebGL2;se===null&&(se=new or(1024,1024,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")?Ds:ir,minFilter:Ls,samples:G&&s===!0?4:0}));const ne=d.getRenderTarget();d.setRenderTarget(se),d.clear();const Pe=d.toneMapping;d.toneMapping=ei,Cn(E,H,Z),d.toneMapping=Pe,A.updateMultisampleRenderTarget(se),A.updateRenderTargetMipmap(se),d.setRenderTarget(ne)}function Cn(E,H,Z){const G=H.isScene===!0?H.overrideMaterial:null;for(let ne=0,Pe=E.length;ne<Pe;ne++){const Re=E[ne],Ne=Re.object,ze=Re.geometry,Xe=G===null?Re.material:G,Ge=Re.group;Ne.layers.test(Z.layers)&&rt(Ne,H,Z,ze,Xe,Ge)}}function rt(E,H,Z,G,ne,Pe){E.onBeforeRender(d,H,Z,G,ne,Pe),E.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),ne.onBeforeRender(d,H,Z,G,E,Pe),ne.transparent===!0&&ne.side===hi&&ne.forceSinglePass===!1?(ne.side=Qt,ne.needsUpdate=!0,d.renderBufferDirect(Z,H,G,ne,E,Pe),ne.side=wi,ne.needsUpdate=!0,d.renderBufferDirect(Z,H,G,ne,E,Pe),ne.side=hi):d.renderBufferDirect(Z,H,G,ne,E,Pe),E.onAfterRender(d,H,Z,G,ne,Pe)}function sn(E,H,Z){H.isScene!==!0&&(H=le);const G=De.get(E),ne=f.state.lights,Pe=f.state.shadowsArray,Re=ne.state.version,Ne=ue.getParameters(E,ne.state,Pe,H,Z),ze=ue.getProgramCacheKey(Ne);let Xe=G.programs;G.environment=E.isMeshStandardMaterial?H.environment:null,G.fog=H.fog,G.envMap=(E.isMeshStandardMaterial?X:D).get(E.envMap||G.environment),Xe===void 0&&(E.addEventListener("dispose",Le),Xe=new Map,G.programs=Xe);let Ge=Xe.get(ze);if(Ge!==void 0){if(G.currentProgram===Ge&&G.lightsStateVersion===Re)return Pn(E,Ne),Ge}else Ne.uniforms=ue.getUniforms(E),E.onBuild(Z,Ne,d),E.onBeforeCompile(Ne,d),Ge=ue.acquireProgram(Ne,ze),Xe.set(ze,Ge),G.uniforms=Ne.uniforms;const Ve=G.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ve.clippingPlanes=T.uniform),Pn(E,Ne),G.needsLights=rp(E),G.lightsStateVersion=Re,G.needsLights&&(Ve.ambientLightColor.value=ne.state.ambient,Ve.lightProbe.value=ne.state.probe,Ve.directionalLights.value=ne.state.directional,Ve.directionalLightShadows.value=ne.state.directionalShadow,Ve.spotLights.value=ne.state.spot,Ve.spotLightShadows.value=ne.state.spotShadow,Ve.rectAreaLights.value=ne.state.rectArea,Ve.ltc_1.value=ne.state.rectAreaLTC1,Ve.ltc_2.value=ne.state.rectAreaLTC2,Ve.pointLights.value=ne.state.point,Ve.pointLightShadows.value=ne.state.pointShadow,Ve.hemisphereLights.value=ne.state.hemi,Ve.directionalShadowMap.value=ne.state.directionalShadowMap,Ve.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,Ve.spotShadowMap.value=ne.state.spotShadowMap,Ve.spotLightMatrix.value=ne.state.spotLightMatrix,Ve.spotLightMap.value=ne.state.spotLightMap,Ve.pointShadowMap.value=ne.state.pointShadowMap,Ve.pointShadowMatrix.value=ne.state.pointShadowMatrix);const ot=Ge.getUniforms(),Xt=bo.seqWithValue(ot.seq,Ve);return G.currentProgram=Ge,G.uniformsList=Xt,Ge}function Pn(E,H){const Z=De.get(E);Z.outputEncoding=H.outputEncoding,Z.instancing=H.instancing,Z.skinning=H.skinning,Z.morphTargets=H.morphTargets,Z.morphNormals=H.morphNormals,Z.morphColors=H.morphColors,Z.morphTargetsCount=H.morphTargetsCount,Z.numClippingPlanes=H.numClippingPlanes,Z.numIntersection=H.numClipIntersection,Z.vertexAlphas=H.vertexAlphas,Z.vertexTangents=H.vertexTangents,Z.toneMapping=H.toneMapping}function np(E,H,Z,G,ne){H.isScene!==!0&&(H=le),A.resetTextureUnits();const Pe=H.fog,Re=G.isMeshStandardMaterial?H.environment:null,Ne=x===null?d.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:rr,ze=(G.isMeshStandardMaterial?X:D).get(G.envMap||Re),Xe=G.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Ge=!!G.normalMap&&!!Z.attributes.tangent,Ve=!!Z.morphAttributes.position,ot=!!Z.morphAttributes.normal,Xt=!!Z.morphAttributes.color,Gn=G.toneMapped?d.toneMapping:ei,Pi=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,at=Pi!==void 0?Pi.length:0,He=De.get(G),ta=f.state.lights;if(V===!0&&(oe===!0||E!==b)){const qt=E===b&&G.id===M;T.setState(G,E,qt)}let _t=!1;G.version===He.__version?(He.needsLights&&He.lightsStateVersion!==ta.state.version||He.outputEncoding!==Ne||ne.isInstancedMesh&&He.instancing===!1||!ne.isInstancedMesh&&He.instancing===!0||ne.isSkinnedMesh&&He.skinning===!1||!ne.isSkinnedMesh&&He.skinning===!0||He.envMap!==ze||G.fog===!0&&He.fog!==Pe||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==T.numPlanes||He.numIntersection!==T.numIntersection)||He.vertexAlphas!==Xe||He.vertexTangents!==Ge||He.morphTargets!==Ve||He.morphNormals!==ot||He.morphColors!==Xt||He.toneMapping!==Gn||Te.isWebGL2===!0&&He.morphTargetsCount!==at)&&(_t=!0):(_t=!0,He.__version=G.version);let Li=He.currentProgram;_t===!0&&(Li=sn(G,H,ne));let Rc=!1,rs=!1,na=!1;const Lt=Li.getUniforms(),Di=He.uniforms;if(ye.useProgram(Li.program)&&(Rc=!0,rs=!0,na=!0),G.id!==M&&(M=G.id,rs=!0),Rc||b!==E){if(Lt.setValue(k,"projectionMatrix",E.projectionMatrix),Te.logarithmicDepthBuffer&&Lt.setValue(k,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),b!==E&&(b=E,rs=!0,na=!0),G.isShaderMaterial||G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshStandardMaterial||G.envMap){const qt=Lt.map.cameraPosition;qt!==void 0&&qt.setValue(k,B.setFromMatrixPosition(E.matrixWorld))}(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Lt.setValue(k,"isOrthographic",E.isOrthographicCamera===!0),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial||G.isShadowMaterial||ne.isSkinnedMesh)&&Lt.setValue(k,"viewMatrix",E.matrixWorldInverse)}if(ne.isSkinnedMesh){Lt.setOptional(k,ne,"bindMatrix"),Lt.setOptional(k,ne,"bindMatrixInverse");const qt=ne.skeleton;qt&&(Te.floatVertexTextures?(qt.boneTexture===null&&qt.computeBoneTexture(),Lt.setValue(k,"boneTexture",qt.boneTexture,A),Lt.setValue(k,"boneTextureSize",qt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ia=Z.morphAttributes;if((ia.position!==void 0||ia.normal!==void 0||ia.color!==void 0&&Te.isWebGL2===!0)&&$.update(ne,Z,Li),(rs||He.receiveShadow!==ne.receiveShadow)&&(He.receiveShadow=ne.receiveShadow,Lt.setValue(k,"receiveShadow",ne.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Di.envMap.value=ze,Di.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),rs&&(Lt.setValue(k,"toneMappingExposure",d.toneMappingExposure),He.needsLights&&ip(Di,na),Pe&&G.fog===!0&&ie.refreshFogUniforms(Di,Pe),ie.refreshMaterialUniforms(Di,G,W,R,se),bo.upload(k,He.uniformsList,Di,A)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(bo.upload(k,He.uniformsList,Di,A),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Lt.setValue(k,"center",ne.center),Lt.setValue(k,"modelViewMatrix",ne.modelViewMatrix),Lt.setValue(k,"normalMatrix",ne.normalMatrix),Lt.setValue(k,"modelMatrix",ne.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const qt=G.uniformsGroups;for(let ra=0,sp=qt.length;ra<sp;ra++)if(Te.isWebGL2){const Ic=qt[ra];z.update(Ic,Li),z.bind(Ic,Li)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Li}function ip(E,H){E.ambientLightColor.needsUpdate=H,E.lightProbe.needsUpdate=H,E.directionalLights.needsUpdate=H,E.directionalLightShadows.needsUpdate=H,E.pointLights.needsUpdate=H,E.pointLightShadows.needsUpdate=H,E.spotLights.needsUpdate=H,E.spotLightShadows.needsUpdate=H,E.rectAreaLights.needsUpdate=H,E.hemisphereLights.needsUpdate=H}function rp(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(E,H,Z){De.get(E.texture).__webglTexture=H,De.get(E.depthTexture).__webglTexture=Z;const G=De.get(E);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=Z===void 0,G.__autoAllocateDepthBuffer||be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,H){const Z=De.get(E);Z.__webglFramebuffer=H,Z.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(E,H=0,Z=0){x=E,_=H,S=Z;let G=!0,ne=null,Pe=!1,Re=!1;if(E){const ze=De.get(E);ze.__useDefaultFramebuffer!==void 0?(ye.bindFramebuffer(36160,null),G=!1):ze.__webglFramebuffer===void 0?A.setupRenderTarget(E):ze.__hasExternalTextures&&A.rebindTextures(E,De.get(E.texture).__webglTexture,De.get(E.depthTexture).__webglTexture);const Xe=E.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Re=!0);const Ge=De.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(ne=Ge[H],Pe=!0):Te.isWebGL2&&E.samples>0&&A.useMultisampledRTT(E)===!1?ne=De.get(E).__webglMultisampledFramebuffer:ne=Ge,C.copy(E.viewport),L.copy(E.scissor),v=E.scissorTest}else C.copy(O).multiplyScalar(W).floor(),L.copy(q).multiplyScalar(W).floor(),v=Y;if(ye.bindFramebuffer(36160,ne)&&Te.drawBuffers&&G&&ye.drawBuffers(E,ne),ye.viewport(C),ye.scissor(L),ye.setScissorTest(v),Pe){const ze=De.get(E.texture);k.framebufferTexture2D(36160,36064,34069+H,ze.__webglTexture,Z)}else if(Re){const ze=De.get(E.texture),Xe=H||0;k.framebufferTextureLayer(36160,36064,ze.__webglTexture,Z||0,Xe)}M=-1},this.readRenderTargetPixels=function(E,H,Z,G,ne,Pe,Re){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=De.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Re!==void 0&&(Ne=Ne[Re]),Ne){ye.bindFramebuffer(36160,Ne);try{const ze=E.texture,Xe=ze.format,Ge=ze.type;if(Xe!==Sn&&pe.convert(Xe)!==k.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ve=Ge===Ds&&(be.has("EXT_color_buffer_half_float")||Te.isWebGL2&&be.has("EXT_color_buffer_float"));if(Ge!==ir&&pe.convert(Ge)!==k.getParameter(35738)&&!(Ge===Yi&&(Te.isWebGL2||be.has("OES_texture_float")||be.has("WEBGL_color_buffer_float")))&&!Ve){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=E.width-G&&Z>=0&&Z<=E.height-ne&&k.readPixels(H,Z,G,ne,pe.convert(Xe),pe.convert(Ge),Pe)}finally{const ze=x!==null?De.get(x).__webglFramebuffer:null;ye.bindFramebuffer(36160,ze)}}},this.copyFramebufferToTexture=function(E,H,Z=0){const G=Math.pow(2,-Z),ne=Math.floor(H.image.width*G),Pe=Math.floor(H.image.height*G);A.setTexture2D(H,0),k.copyTexSubImage2D(3553,Z,0,0,E.x,E.y,ne,Pe),ye.unbindTexture()},this.copyTextureToTexture=function(E,H,Z,G=0){const ne=H.image.width,Pe=H.image.height,Re=pe.convert(Z.format),Ne=pe.convert(Z.type);A.setTexture2D(Z,0),k.pixelStorei(37440,Z.flipY),k.pixelStorei(37441,Z.premultiplyAlpha),k.pixelStorei(3317,Z.unpackAlignment),H.isDataTexture?k.texSubImage2D(3553,G,E.x,E.y,ne,Pe,Re,Ne,H.image.data):H.isCompressedTexture?k.compressedTexSubImage2D(3553,G,E.x,E.y,H.mipmaps[0].width,H.mipmaps[0].height,Re,H.mipmaps[0].data):k.texSubImage2D(3553,G,E.x,E.y,Re,Ne,H.image),G===0&&Z.generateMipmaps&&k.generateMipmap(3553),ye.unbindTexture()},this.copyTextureToTexture3D=function(E,H,Z,G,ne=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Pe=E.max.x-E.min.x+1,Re=E.max.y-E.min.y+1,Ne=E.max.z-E.min.z+1,ze=pe.convert(G.format),Xe=pe.convert(G.type);let Ge;if(G.isData3DTexture)A.setTexture3D(G,0),Ge=32879;else if(G.isDataArrayTexture)A.setTexture2DArray(G,0),Ge=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(37440,G.flipY),k.pixelStorei(37441,G.premultiplyAlpha),k.pixelStorei(3317,G.unpackAlignment);const Ve=k.getParameter(3314),ot=k.getParameter(32878),Xt=k.getParameter(3316),Gn=k.getParameter(3315),Pi=k.getParameter(32877),at=Z.isCompressedTexture?Z.mipmaps[0]:Z.image;k.pixelStorei(3314,at.width),k.pixelStorei(32878,at.height),k.pixelStorei(3316,E.min.x),k.pixelStorei(3315,E.min.y),k.pixelStorei(32877,E.min.z),Z.isDataTexture||Z.isData3DTexture?k.texSubImage3D(Ge,ne,H.x,H.y,H.z,Pe,Re,Ne,ze,Xe,at.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(Ge,ne,H.x,H.y,H.z,Pe,Re,Ne,ze,at.data)):k.texSubImage3D(Ge,ne,H.x,H.y,H.z,Pe,Re,Ne,ze,Xe,at),k.pixelStorei(3314,Ve),k.pixelStorei(32878,ot),k.pixelStorei(3316,Xt),k.pixelStorei(3315,Gn),k.pixelStorei(32877,Pi),ne===0&&G.generateMipmaps&&k.generateMipmap(Ge),ye.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?A.setTextureCube(E,0):E.isData3DTexture?A.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?A.setTexture2DArray(E,0):A.setTexture2D(E,0),ye.unbindTexture()},this.resetState=function(){_=0,S=0,x=null,ye.reset(),P.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(pc.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(r){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!r}}});class XM extends pc{}XM.prototype.isWebGL1Renderer=!0;class qM extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class mc extends Ai{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new U,f=new U,m=[],g=[],d=[],p=[];for(let _=0;_<=n;_++){const S=[],x=_/n;let M=0;_==0&&a==0?M=.5/t:_==n&&l==Math.PI&&(M=-.5/t);for(let b=0;b<=t;b++){const C=b/t;h.x=-e*Math.cos(i+C*s)*Math.sin(a+x*o),h.y=e*Math.cos(a+x*o),h.z=e*Math.sin(i+C*s)*Math.sin(a+x*o),g.push(h.x,h.y,h.z),f.copy(h).normalize(),d.push(f.x,f.y,f.z),p.push(C+M,1-x),S.push(c++)}u.push(S)}for(let _=0;_<n;_++)for(let S=0;S<t;S++){const x=u[_][S+1],M=u[_][S],b=u[_+1][S],C=u[_+1][S+1];(_!==0||a>0)&&m.push(x,M,C),(_!==n-1||l<Math.PI)&&m.push(M,b,C)}this.setIndex(m),this.setAttribute("position",new Un(g,3)),this.setAttribute("normal",new Un(d,3)),this.setAttribute("uv",new Un(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class jM extends Gs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uh,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class YM extends kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const qa=new ft,Mf=new U,bf=new U;class KM{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fc,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Mf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Mf),bf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(bf),t.updateMatrixWorld(),qa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(qa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Sf=new ft,hs=new U,ja=new U;class $M extends KM{constructor(){super(new Zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Oe(4,2),this._viewportCount=6,this._viewports=[new et(2,1,1,1),new et(0,1,1,1),new et(3,1,1,1),new et(1,1,1,1),new et(3,0,1,1),new et(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),hs.setFromMatrixPosition(e.matrixWorld),n.position.copy(hs),ja.copy(n.position),ja.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ja),n.updateMatrixWorld(),i.makeTranslation(-hs.x,-hs.y,-hs.z),Sf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sf)}}class wf extends YM{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new $M}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Tf{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ut(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cc);function Yn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function id(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var tn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},jr={duration:.5,overwrite:!1,delay:0},gc,Et,ct,fn=1e8,Ke=1/fn,Tl=Math.PI*2,ZM=Tl/4,JM=0,rd=Math.sqrt,QM=Math.cos,eb=Math.sin,vt=function(e){return typeof e=="string"},it=function(e){return typeof e=="function"},ni=function(e){return typeof e=="number"},_c=function(e){return typeof e>"u"},kn=function(e){return typeof e=="object"},Gt=function(e){return e!==!1},sd=function(){return typeof window<"u"},_o=function(e){return it(e)||vt(e)},od=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},At=Array.isArray,El=/(?:-?\.?\d|\.)+/gi,ad=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Lr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ya=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,ld=/[+-]=-?[.\d]+/,cd=/[^,'"\[\]\s]+/gi,tb=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,tt,cn,Al,xc,nn={},Do={},ud,fd=function(e){return(Do=lr(e,nn))&&rn},vc=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ro=function(e,t){return!t&&console.warn(e)},hd=function(e,t){return e&&(nn[e]=t)&&Do&&(Do[e]=t)||nn},Is=function(){return 0},nb={suppressEvents:!0,isStart:!0,kill:!1},So={suppressEvents:!0,kill:!1},ib={suppressEvents:!0},yc={},yi=[],Cl={},dd,$t={},Ka={},Ef=30,wo=[],Mc="",bc=function(e){var t=e[0],n,i;if(kn(t)||it(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=wo.length;i--&&!wo[i].targetTest(t););n=wo[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Fd(e[i],n)))||e.splice(i,1);return e},er=function(e){return e._gsap||bc(hn(e))[0]._gsap},pd=function(e,t,n){return(n=e[t])&&it(n)?e[t]():_c(n)&&e.getAttribute&&e.getAttribute(t)||n},Vt=function(e,t){return(e=e.split(",")).forEach(t)||e},st=function(e){return Math.round(e*1e5)/1e5||0},yt=function(e){return Math.round(e*1e7)/1e7||0},Ur=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},rb=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Io=function(){var e=yi.length,t=yi.slice(0),n,i;for(Cl={},yi.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},md=function(e,t,n,i){yi.length&&!Et&&Io(),e.render(t,n,i||Et&&t<0&&(e._initted||e._startAt)),yi.length&&!Et&&Io()},gd=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(cd).length<2?t:vt(e)?e.trim():e},_d=function(e){return e},mn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},sb=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},lr=function(e,t){for(var n in t)e[n]=t[n];return e},Af=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=kn(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Oo=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},bs=function(e){var t=e.parent||tt,n=e.keyframes?sb(At(e.keyframes)):mn;if(Gt(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},ob=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},xd=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},Jo=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Ti=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},tr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},ab=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Pl=function(e,t,n,i){return e._startAt&&(Et?e._startAt.revert(So):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},lb=function r(e){return!e||e._ts&&r(e.parent)},Cf=function(e){return e._repeat?Yr(e._tTime,e=e.duration()+e._rDelay)*e:0},Yr=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Fo=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Qo=function(e){return e._end=yt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ke)||0))},ea=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=yt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Qo(e),n._dirty||tr(n,e)),e},vd=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=Fo(e.rawTime(),t),(!t._dur||Hs(0,t.totalDuration(),n)-t._tTime>Ke)&&t.render(n,!0)),tr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Ke}},Nn=function(e,t,n,i){return t.parent&&Ti(t),t._start=yt((ni(n)?n:n||e!==tt?ln(e,n,t):e._time)+t._delay),t._end=yt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),xd(e,t,"_first","_last",e._sort?"_start":0),Ll(t)||(e._recent=t),i||vd(e,t),e._ts<0&&ea(e,e._tTime),e},yd=function(e,t){return(nn.ScrollTrigger||vc("scrollTrigger",t))&&nn.ScrollTrigger.create(t,e)},Md=function(e,t,n,i,s){if(wc(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Et&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&dd!==Jt.frame)return yi.push(e),e._lazy=[s,i],1},cb=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Ll=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},ub=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&cb(e)&&!(!e._initted&&Ll(e))||(e._ts<0||e._dp._ts<0)&&!Ll(e))?0:1,o=e._rDelay,l=0,c,u,h;if(o&&e._repeat&&(l=Hs(0,e._tDur,t),u=Yr(l,o),e._yoyo&&u&1&&(a=1-a),u!==Yr(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||Et||i||e._zTime===Ke||!t&&e._zTime){if(!e._initted&&Md(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?Ke:0),n||(n=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Pl(e,t,n,!0),e._onUpdate&&!n&&dn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&dn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Ti(e,1),!n&&!Et&&(dn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},fb=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Kr=function(e,t,n,i){var s=e._repeat,a=yt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:yt(a*(s+1)+e._rDelay*s):a,o>0&&!i&&ea(e,e._tTime=e._tDur*o),e.parent&&Qo(e),n||tr(e.parent,e),e},Pf=function(e){return e instanceof Bt?tr(e):Kr(e,e._dur)},hb={_start:0,endTime:Is,totalDuration:Is},ln=function r(e,t,n){var i=e.labels,s=e._recent||hb,a=e.duration()>=fn?s.endTime(!1):e._dur,o,l,c;return vt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(At(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},Ss=function(e,t,n){var i=ni(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Gt(l.vars.inherit)&&l.parent;a.immediateRender=Gt(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new dt(t[0],a,t[s+1])},Ci=function(e,t){return e||e===0?t(e):t},Hs=function(e,t,n){return n<e?e:n>t?t:n},Tt=function(e,t){return!vt(e)||!(t=tb.exec(e))?"":t[1]},db=function(e,t,n){return Ci(n,function(i){return Hs(e,t,i)})},Dl=[].slice,bd=function(e,t){return e&&kn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&kn(e[0]))&&!e.nodeType&&e!==cn},pb=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return vt(i)&&!t||bd(i,1)?(s=n).push.apply(s,hn(i)):n.push(i)})||n},hn=function(e,t,n){return ct&&!t&&ct.selector?ct.selector(e):vt(e)&&!n&&(Al||!$r())?Dl.call((t||xc).querySelectorAll(e),0):At(e)?pb(e,n):bd(e)?Dl.call(e,0):e?[e]:[]},Rl=function(e){return e=hn(e)[0]||Ro("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return hn(t,n.querySelectorAll?n:n===e?Ro("Invalid scope")||xc.createElement("div"):e)}},Sd=function(e){return e.sort(function(){return .5-Math.random()})},wd=function(e){if(it(e))return e;var t=kn(e)?e:{each:e},n=nr(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,h=i;return vt(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],h=i[1]),function(f,m,g){var d=(g||t).length,p=a[d],_,S,x,M,b,C,L,v,w;if(!p){if(w=t.grid==="auto"?0:(t.grid||[1,fn])[1],!w){for(L=-fn;L<(L=g[w++].getBoundingClientRect().left)&&w<d;);w--}for(p=a[d]=[],_=l?Math.min(w,d)*u-.5:i%w,S=w===fn?0:l?d*h/w-.5:i/w|0,L=0,v=fn,C=0;C<d;C++)x=C%w-_,M=S-(C/w|0),p[C]=b=c?Math.abs(c==="y"?M:x):rd(x*x+M*M),b>L&&(L=b),b<v&&(v=b);i==="random"&&Sd(p),p.max=L-v,p.min=v,p.v=d=(parseFloat(t.amount)||parseFloat(t.each)*(w>d?d-1:c?c==="y"?d/w:w:Math.max(w,d/w))||0)*(i==="edges"?-1:1),p.b=d<0?s-d:s,p.u=Tt(t.amount||t.each)||0,n=n&&d<0?Rd(n):n}return d=(p[f]-p.min)/p.max||0,yt(p.b+(n?n(d):d)*p.v)+p.u}},Il=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=yt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(ni(n)?0:Tt(n))}},Td=function(e,t){var n=At(e),i,s;return!n&&kn(e)&&(i=n=e.radius||fn,e.values?(e=hn(e.values),(s=!ni(e[0]))&&(i*=i)):e=Il(e.increment)),Ci(t,n?it(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=fn,u=0,h=e.length,f,m;h--;)s?(f=e[h].x-o,m=e[h].y-l,f=f*f+m*m):f=Math.abs(e[h]-o),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:a,s||u===a||ni(a)?u:u+Tt(a)}:Il(e))},Ed=function(e,t,n,i){return Ci(At(e)?!t:n===!0?!!(n=0):!i,function(){return At(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},mb=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},gb=function(e,t){return function(n){return e(parseFloat(n))+(t||Tt(n))}},_b=function(e,t,n){return Cd(e,t,0,1,n)},Ad=function(e,t,n){return Ci(n,function(i){return e[~~t(i)]})},xb=function r(e,t,n){var i=t-e;return At(e)?Ad(e,r(0,e.length),t):Ci(n,function(s){return(i+(s-e)%i)%i+e})},vb=function r(e,t,n){var i=t-e,s=i*2;return At(e)?Ad(e,r(0,e.length-1),t):Ci(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},Os=function(e){for(var t=0,n="",i,s,a,o;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),o=e.charAt(i+7)==="[",s=e.substr(i+7,a-i-7).match(o?cd:El),n+=e.substr(t,i-t)+Ed(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},Cd=function(e,t,n,i,s){var a=t-e,o=i-n;return Ci(s,function(l){return n+((l-e)/a*o||0)})},yb=function r(e,t,n,i){var s=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!s){var a=vt(e),o={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(At(e)&&!At(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(g){g*=h;var d=Math.min(f,~~g);return u[d](g-d)},n=t}else i||(e=lr(At(e)?[]:{},e));if(!u){for(l in t)Sc.call(o,e,l,"get",t[l]);s=function(g){return Ac(g,o)||(a?e.p:e)}}}return Ci(n,s)},Lf=function(e,t,n){var i=e.labels,s=fn,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},dn=function(e,t,n){var i=e.vars,s=i[t],a=ct,o=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&yi.length&&Io(),o&&(ct=o),u=l?s.apply(c,l):s.call(c),ct=a,u},_s=function(e){return Ti(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Et),e.progress()<1&&dn(e,"onInterrupt"),e},Dr,Mb=function(e){e=!e.name&&e.default||e;var t=e.name,n=it(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Is,render:Ac,add:Sc,kill:zb,modifier:Nb,rawVars:0},a={targetTest:0,get:0,getSetter:Ec,aliases:{},register:0};if($r(),e!==i){if($t[t])return;mn(i,mn(Oo(e,s),a)),lr(i.prototype,lr(s,Oo(e,a))),$t[i.prop=t]=i,e.targetTest&&(wo.push(i),yc[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}hd(t,i),e.register&&e.register(rn,i,Ht)},Ye=255,xs={aqua:[0,Ye,Ye],lime:[0,Ye,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ye],navy:[0,0,128],white:[Ye,Ye,Ye],olive:[128,128,0],yellow:[Ye,Ye,0],orange:[Ye,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ye,0,0],pink:[Ye,192,203],cyan:[0,Ye,Ye],transparent:[Ye,Ye,Ye,0]},$a=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Ye+.5|0},Pd=function(e,t,n){var i=e?ni(e)?[e>>16,e>>8&Ye,e&Ye]:0:xs.black,s,a,o,l,c,u,h,f,m,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),xs[e])i=xs[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Ye,i&Ye,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Ye,e&Ye]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(El),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=$a(l+1/3,s,a),i[1]=$a(l,s,a),i[2]=$a(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(ad),n&&i.length<4&&(i[3]=1),i}else i=e.match(El)||xs.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/Ye,a=i[1]/Ye,o=i[2]/Ye,h=Math.max(s,a,o),f=Math.min(s,a,o),u=(h+f)/2,h===f?l=c=0:(m=h-f,c=u>.5?m/(2-h-f):m/(h+f),l=h===s?(a-o)/m+(a<o?6:0):h===a?(o-s)/m+2:(s-a)/m+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Ld=function(e){var t=[],n=[],i=-1;return e.split(Mi).forEach(function(s){var a=s.match(Lr)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Df=function(e,t,n){var i="",s=(e+i).match(Mi),a=t?"hsla(":"rgba(",o=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=Pd(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Ld(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Mi,"1").split(Lr),h=c.length-1;o<h;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Mi),h=c.length-1;o<h;o++)i+=c[o]+s[o];return i+c[h]},Mi=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in xs)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),bb=/hsl[a]?\(/,Dd=function(e){var t=e.join(" "),n;if(Mi.lastIndex=0,Mi.test(t))return n=bb.test(t),e[1]=Df(e[1],n),e[0]=Df(e[0],n,Ld(e[1])),!0},Fs,Jt=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,h,f,m,g=function d(p){var _=r()-i,S=p===!0,x,M,b,C;if(_>e&&(n+=_-t),i+=_,b=i-n,x=b-a,(x>0||S)&&(C=++h.frame,f=b-h.time*1e3,h.time=b=b/1e3,a+=x+(x>=s?4:s-x),M=1),S||(l=c(d)),M)for(m=0;m<o.length;m++)o[m](b,f,C,p)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){ud&&(!Al&&sd()&&(cn=Al=window,xc=cn.document||{},nn.gsap=rn,(cn.gsapVersions||(cn.gsapVersions=[])).push(rn.version),fd(Do||cn.GreenSockGlobals||!cn.gsap&&cn||{}),u=cn.requestAnimationFrame),l&&h.sleep(),c=u||function(p){return setTimeout(p,a-h.time*1e3+1|0)},Fs=1,g(2))},sleep:function(){(u?cn.cancelAnimationFrame:clearTimeout)(l),Fs=0,c=Is},lagSmoothing:function(p,_){e=p||1/0,t=Math.min(_||33,e)},fps:function(p){s=1e3/(p||240),a=h.time*1e3+s},add:function(p,_,S){var x=_?function(M,b,C,L){p(M,b,C,L),h.remove(x)}:p;return h.remove(p),o[S?"unshift":"push"](x),$r(),x},remove:function(p,_){~(_=o.indexOf(p))&&o.splice(_,1)&&m>=_&&m--},_listeners:o},h}(),$r=function(){return!Fs&&Jt.wake()},ke={},Sb=/^[\d.\-M][\d.\-,\s]/,wb=/["']/g,Tb=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(wb,"").trim():+c,i=l.substr(o+1).trim();return t},Eb=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Ab=function(e){var t=(e+"").split("("),n=ke[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Tb(t[1])]:Eb(e).split(",").map(gd)):ke._CE&&Sb.test(e)?ke._CE("",e):n},Rd=function(e){return function(t){return 1-e(1-t)}},Id=function r(e,t){for(var n=e._first,i;n;)n instanceof Bt?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},nr=function(e,t){return e&&(it(e)?e:ke[e]||Ab(e))||t},ur=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return Vt(e,function(o){ke[o]=nn[o]=s,ke[a=o.toLowerCase()]=n;for(var l in s)ke[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ke[o+"."+l]=s[l]}),s},Od=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Za=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Tl*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*eb((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Od(o);return s=Tl/s,l.config=function(c,u){return r(e,c,u)},l},Ja=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Od(n);return i.config=function(s){return r(e,s)},i};Vt("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;ur(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ke.Linear.easeNone=ke.none=ke.Linear.easeIn;ur("Elastic",Za("in"),Za("out"),Za());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};ur("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);ur("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});ur("Circ",function(r){return-(rd(1-r*r)-1)});ur("Sine",function(r){return r===1?1:-QM(r*ZM)+1});ur("Back",Ja("in"),Ja("out"),Ja());ke.SteppedEase=ke.steps=nn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-Ke;return function(o){return((i*Hs(0,a,o)|0)+s)*n}}};jr.ease=ke["quad.out"];Vt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Mc+=r+","+r+"Params,"});var Fd=function(e,t){this.id=JM++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:pd,this.set=t?t.getSetter:Ec},Zr=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Kr(this,+t.duration,1,1),this.data=t.data,ct&&(this._ctx=ct,ct.data.push(this)),Fs||Jt.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Kr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if($r(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(ea(this,n),!s._dp||s.parent||vd(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Nn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Ke||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),md(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Cf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Cf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Yr(this._tTime,s)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-Ke?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?Fo(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ke?0:this._rts,this.totalTime(Hs(-this._delay,this._tDur,i),!0),Qo(this),ab(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):($r(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ke&&(this._tTime-=Ke)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Nn(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Gt(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Fo(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=ib);var i=Et;return Et=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Et=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Pf(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Pf(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(ln(this,n),Gt(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Gt(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ke:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ke,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Ke)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(s){var a=it(n)?n:_d,o=function(){var c=i.then;i.then=null,it(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),s(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){_s(this)},r}();mn(Zr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ke,_prom:0,_ps:!1,_rts:1});var Bt=function(r){id(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Gt(n.sortChildren),tt&&Nn(n.parent||tt,Yn(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&yd(Yn(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return Ss(0,arguments,this),this},t.from=function(i,s,a){return Ss(1,arguments,this),this},t.fromTo=function(i,s,a,o){return Ss(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,bs(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new dt(i,s,ln(this,a),1),this},t.call=function(i,s,a){return Nn(this,dt.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new dt(i,a,ln(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,bs(a).immediateRender=Gt(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},t.staggerFromTo=function(i,s,a,o,l,c,u,h){return o.startAt=a,bs(o).immediateRender=Gt(o.immediateRender),this.staggerTo(i,s,o,l,c,u,h)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:yt(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,m,g,d,p,_,S,x,M,b,C,L;if(this!==tt&&u>l&&i>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),f=u,M=this._start,x=this._ts,_=!x,h&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(C=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,a);if(f=yt(u%p),u===l?(d=this._repeat,f=c):(d=~~(u/p),d&&d===u/p&&(f=c,d--),f>c&&(f=c)),b=Yr(this._tTime,p),!o&&this._tTime&&b!==d&&(b=d),C&&d&1&&(f=c-f,L=1),d!==b&&!this._lock){var v=C&&b&1,w=v===(C&&d&1);if(d<b&&(v=!v),o=v?0:c,this._lock=1,this.render(o||(L?0:yt(d*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&dn(this,"onRepeat"),this.vars.repeatRefresh&&!L&&(this.invalidate()._lock=1),o&&o!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,w&&(this._lock=2,o=v?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!L&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;Id(this,L)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=fb(this,yt(o),yt(f)),S&&(u-=f-(f=S._start))),this._tTime=u,this._time=f,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&f&&!s&&(dn(this,"onStart"),this._tTime!==u))return this;if(f>=o&&i>=0)for(m=this._first;m;){if(g=m._next,(m._act||f>=m._start)&&m._ts&&S!==m){if(m.parent!==this)return this.render(i,s,a);if(m.render(m._ts>0?(f-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(f-m._start)*m._ts,s,a),f!==this._time||!this._ts&&!_){S=0,g&&(u+=this._zTime=-Ke);break}}m=g}else{m=this._last;for(var R=i<0?i:f;m;){if(g=m._prev,(m._act||R<=m._end)&&m._ts&&S!==m){if(m.parent!==this)return this.render(i,s,a);if(m.render(m._ts>0?(R-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(R-m._start)*m._ts,s,a||Et&&(m._initted||m._startAt)),f!==this._time||!this._ts&&!_){S=0,g&&(u+=this._zTime=R?-Ke:Ke);break}}m=g}}if(S&&!s&&(this.pause(),S.render(f>=o?0:-Ke)._zTime=f>=o?1:-1,this._ts))return this._start=M,Qo(this),this.render(i,s,a);this._onUpdate&&!s&&dn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(M===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Ti(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(dn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(ni(s)||(s=ln(this,s,i)),!(i instanceof Zr)){if(At(i))return i.forEach(function(o){return a.add(o,s)}),this;if(vt(i))return this.addLabel(i,s);if(it(i))i=dt.delayedCall(0,i);else return this}return this!==i?Nn(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-fn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof dt?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return vt(i)?this.removeLabel(i):it(i)?this.killTweensOf(i):(Jo(this,i),i===this._recent&&(this._recent=this._last),tr(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=yt(Jt.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=ln(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=dt.delayedCall(0,s||Is,a);return o.data="isPause",this._hasPause=1,Nn(this,o,ln(this,i))},t.removePause=function(i){var s=this._first;for(i=ln(this,i);s;)s._start===i&&s.data==="isPause"&&Ti(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)pi!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=hn(i),l=this._first,c=ni(s),u;l;)l instanceof dt?rb(l._targets,o)&&(c?(!pi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=ln(a,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,m,g=dt.to(a,mn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Ke,onStart:function(){if(a.pause(),!m){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==p&&Kr(g,p,0,1).render(g._time,!0,!0),m=1}u&&u.apply(g,h||[])}},s));return f?g.render(0):g},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,mn({startAt:{time:ln(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Lf(this,ln(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Lf(this,ln(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Ke)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return tr(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),tr(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=fn,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Nn(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Kr(a,a===tt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(tt._ts&&(md(tt,Fo(i,tt)),dd=Jt.frame),Jt.frame>=Ef){Ef+=tn.autoSleep||120;var s=tt._first;if((!s||!s._ts)&&tn.autoSleep&&Jt._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Jt.sleep()}}},e}(Zr);mn(Bt.prototype,{_lock:0,_hasPause:0,_forcing:0});var Cb=function(e,t,n,i,s,a,o){var l=new Ht(this._pt,e,t,0,1,Gd,null,s),c=0,u=0,h,f,m,g,d,p,_,S;for(l.b=n,l.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=Os(i)),a&&(S=[n,i],a(S,e,t),n=S[0],i=S[1]),f=n.match(Ya)||[];h=Ya.exec(i);)g=h[0],d=i.substring(c,h.index),m?m=(m+1)%5:d.substr(-5)==="rgba("&&(m=1),g!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:d||u===1?d:",",s:p,c:g.charAt(1)==="="?Ur(p,g)-p:parseFloat(g)-p,m:m&&m<4?Math.round:0},c=Ya.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(ld.test(i)||_)&&(l.e=0),this._pt=l,l},Sc=function(e,t,n,i,s,a,o,l,c,u){it(i)&&(i=i(s||0,e,a));var h=e[t],f=n!=="get"?n:it(h)?c?e[t.indexOf("set")||!it(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,m=it(h)?c?Ib:Bd:Tc,g;if(vt(i)&&(~i.indexOf("random(")&&(i=Os(i)),i.charAt(1)==="="&&(g=Ur(f,i)+(Tt(f)||0),(g||g===0)&&(i=g))),!u||f!==i||Ol)return!isNaN(f*i)&&i!==""?(g=new Ht(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?Fb:kd,0,m),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!h&&!(t in e)&&vc(t,i),Cb.call(this,e,t,f,i,m,l||tn.stringFilter,c))},Pb=function(e,t,n,i,s){if(it(e)&&(e=ws(e,s,t,n,i)),!kn(e)||e.style&&e.nodeType||At(e)||od(e))return vt(e)?ws(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=ws(e[o],s,t,n,i);return a},Nd=function(e,t,n,i,s,a){var o,l,c,u;if($t[e]&&(o=new $t[e]).init(s,o.rawVars?t[e]:Pb(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Ht(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==Dr))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},pi,Ol,wc=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.onUpdateParams,h=i.callbackScope,f=i.runBackwards,m=i.yoyoEase,g=i.keyframes,d=i.autoRevert,p=e._dur,_=e._startAt,S=e._targets,x=e.parent,M=x&&x.data==="nested"?x.vars.targets:S,b=e._overwrite==="auto"&&!gc,C=e.timeline,L,v,w,R,W,j,N,O,q,Y,K,V,oe;if(C&&(!g||!s)&&(s="none"),e._ease=nr(s,jr.ease),e._yEase=m?Rd(nr(m===!0?s:m,jr.ease)):0,m&&e._yoyo&&!e._repeat&&(m=e._yEase,e._yEase=e._ease,e._ease=m),e._from=!C&&!!i.runBackwards,!C||g&&!i.stagger){if(O=S[0]?er(S[0]).harness:0,V=O&&i[O.prop],L=Oo(i,yc),_&&(_._zTime<0&&_.progress(1),t<0&&f&&o&&!d?_.render(-1,!0):_.revert(f&&p?So:nb),_._lazy=0),a){if(Ti(e._startAt=dt.set(S,mn({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!_&&Gt(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:h,stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Et||!o&&!d)&&e._startAt.revert(So),o&&p&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(f&&p&&!_){if(t&&(o=!1),w=mn({overwrite:!1,data:"isFromStart",lazy:o&&!_&&Gt(l),immediateRender:o,stagger:0,parent:x},L),V&&(w[O.prop]=V),Ti(e._startAt=dt.set(S,w)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Et?e._startAt.revert(So):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,Ke,Ke);else if(!t)return}for(e._pt=e._ptCache=0,l=p&&Gt(l)||l&&!p,v=0;v<S.length;v++){if(W=S[v],N=W._gsap||bc(S)[v]._gsap,e._ptLookup[v]=Y={},Cl[N.id]&&yi.length&&Io(),K=M===S?v:M.indexOf(W),O&&(q=new O).init(W,V||L,e,K,M)!==!1&&(e._pt=R=new Ht(e._pt,W,q.name,0,1,q.render,q,0,q.priority),q._props.forEach(function(se){Y[se]=R}),q.priority&&(j=1)),!O||V)for(w in L)$t[w]&&(q=Nd(w,L,e,K,W,M))?q.priority&&(j=1):Y[w]=R=Sc.call(e,W,w,"get",L[w],K,M,0,i.stringFilter);e._op&&e._op[v]&&e.kill(W,e._op[v]),b&&e._pt&&(pi=e,tt.killTweensOf(W,Y,e.globalTime(t)),oe=!e.parent,pi=0),e._pt&&l&&(Cl[N.id]=1)}j&&Vd(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!oe,g&&t<=0&&C.render(fn,!0,!0)},Lb=function(e,t,n,i,s,a,o){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,h,f;if(!l)for(l=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(c=h[f][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Ol=1,e.vars[t]="+=0",wc(e,o),Ol=0,1;l.push(c)}for(f=l.length;f--;)u=l[f],c=u._pt||u,c.s=(i||i===0)&&!s?i:c.s+(i||0)+a*c.c,c.c=n-c.s,u.e&&(u.e=st(n)+Tt(u.e)),u.b&&(u.b=c.s+Tt(u.b))},Db=function(e,t){var n=e[0]?er(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=lr({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},Rb=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(At(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},ws=function(e,t,n,i,s){return it(e)?e.call(t,n,i,s):vt(e)&&~e.indexOf("random(")?Os(e):e},zd=Mc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Ud={};Vt(zd+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Ud[r]=1});var dt=function(r){id(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:bs(i))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,m=l.overwrite,g=l.keyframes,d=l.defaults,p=l.scrollTrigger,_=l.yoyoEase,S=i.parent||tt,x=(At(n)||od(n)?ni(n[0]):"length"in i)?[n]:hn(n),M,b,C,L,v,w,R,W;if(o._targets=x.length?bc(x):Ro("GSAP target "+n+" not found. https://greensock.com",!tn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=m,g||f||_o(c)||_o(u)){if(i=o.vars,M=o.timeline=new Bt({data:"nested",defaults:d||{},targets:S&&S.data==="nested"?S.vars.targets:x}),M.kill(),M.parent=M._dp=Yn(o),M._start=0,f||_o(c)||_o(u)){if(L=x.length,R=f&&wd(f),kn(f))for(v in f)~zd.indexOf(v)&&(W||(W={}),W[v]=f[v]);for(b=0;b<L;b++)C=Oo(i,Ud),C.stagger=0,_&&(C.yoyoEase=_),W&&lr(C,W),w=x[b],C.duration=+ws(c,Yn(o),b,w,x),C.delay=(+ws(u,Yn(o),b,w,x)||0)-o._delay,!f&&L===1&&C.delay&&(o._delay=u=C.delay,o._start+=u,C.delay=0),M.to(w,C,R?R(b,w,x):0),M._ease=ke.none;M.duration()?c=u=0:o.timeline=0}else if(g){bs(mn(M.vars.defaults,{ease:"none"})),M._ease=nr(g.ease||i.ease||"none");var j=0,N,O,q;if(At(g))g.forEach(function(Y){return M.to(x,Y,">")}),M.duration();else{C={};for(v in g)v==="ease"||v==="easeEach"||Rb(v,g[v],C,g.easeEach);for(v in C)for(N=C[v].sort(function(Y,K){return Y.t-K.t}),j=0,b=0;b<N.length;b++)O=N[b],q={ease:O.e,duration:(O.t-(b?N[b-1].t:0))/100*c},q[v]=O.v,M.to(x,q,j),j+=q.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||o.duration(c=M.duration())}else o.timeline=0;return m===!0&&!gc&&(pi=Yn(o),tt.killTweensOf(x),pi=0),Nn(S,Yn(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!c&&!g&&o._start===yt(S._time)&&Gt(h)&&lb(Yn(o))&&S.data!=="nested")&&(o._tTime=-Ke,o.render(Math.max(0,-u)||0)),p&&yd(Yn(o),p),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-Ke&&!u?l:i<Ke?0:i,f,m,g,d,p,_,S,x,M;if(!c)ub(this,i,s,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,x=this.timeline,this._repeat){if(d=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(d*100+i,s,a);if(f=yt(h%d),h===l?(g=this._repeat,f=c):(g=~~(h/d),g&&g===h/d&&(f=c,g--),f>c&&(f=c)),_=this._yoyo&&g&1,_&&(M=this._yEase,f=c-f),p=Yr(this._tTime,d),f===o&&!a&&this._initted)return this._tTime=h,this;g!==p&&(x&&this._yEase&&Id(x,_),this.vars.repeatRefresh&&!_&&!this._lock&&(this._lock=a=1,this.render(yt(d*g),!0).invalidate()._lock=0))}if(!this._initted){if(Md(this,u?i:f,a,s,h))return this._tTime=0,this;if(o!==this._time)return this;if(c!==this._dur)return this.render(i,s,a)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(M||this._ease)(f/c),this._from&&(this.ratio=S=1-S),f&&!o&&!s&&(dn(this,"onStart"),this._tTime!==h))return this;for(m=this._pt;m;)m.r(S,m.d),m=m._next;x&&x.render(i<0?i:!f&&_?-Ke:x._dur*x._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Pl(this,i,s,a),dn(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&dn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Pl(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Ti(this,1),!s&&!(u&&!o)&&(h||o||_)&&(dn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o){Fs||Jt.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||wc(this,l),c=this._ease(l/this._dur),Lb(this,i,s,a,o,c,l)?this.resetTo(i,s,a,o):(ea(this,0),this.parent||xd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?_s(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,pi&&pi.vars.overwrite!==!0)._first||_s(this),this.parent&&a!==this.timeline.totalDuration()&&Kr(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?hn(i):o,c=this._ptLookup,u=this._pt,h,f,m,g,d,p,_;if((!s||s==="all")&&ob(o,l))return s==="all"&&(this._pt=0),_s(this);for(h=this._op=this._op||[],s!=="all"&&(vt(s)&&(d={},Vt(s,function(S){return d[S]=1}),s=d),s=Db(o,s)),_=o.length;_--;)if(~l.indexOf(o[_])){f=c[_],s==="all"?(h[_]=s,g=f,m={}):(m=h[_]=h[_]||{},g=s);for(d in g)p=f&&f[d],p&&((!("kill"in p.d)||p.d.kill(d)===!0)&&Jo(this,p,"_pt"),delete f[d]),m!=="all"&&(m[d]=1)}return this._initted&&!this._pt&&u&&_s(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Ss(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return Ss(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return tt.killTweensOf(i,s,a)},e}(Zr);mn(dt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Vt("staggerTo,staggerFrom,staggerFromTo",function(r){dt[r]=function(){var e=new Bt,t=Dl.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Tc=function(e,t,n){return e[t]=n},Bd=function(e,t,n){return e[t](n)},Ib=function(e,t,n,i){return e[t](i.fp,n)},Ob=function(e,t,n){return e.setAttribute(t,n)},Ec=function(e,t){return it(e[t])?Bd:_c(e[t])&&e.setAttribute?Ob:Tc},kd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Fb=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Gd=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Ac=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Nb=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},zb=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Jo(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Ub=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Vd=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},Ht=function(){function r(t,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||kd,this.d=l||this,this.set=c||Tc,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Ub,this.m=n,this.mt=s,this.tween=i},r}();Vt(Mc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return yc[r]=1});nn.TweenMax=nn.TweenLite=dt;nn.TimelineLite=nn.TimelineMax=Bt;tt=new Bt({sortChildren:!1,defaults:jr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});tn.stringFilter=Dd;var Jr=[],To={},Bb=[],Rf=0,Qa=function(e){return(To[e]||Bb).map(function(t){return t()})},Fl=function(){var e=Date.now(),t=[];e-Rf>2&&(Qa("matchMediaInit"),Jr.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=cn.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),Qa("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),Rf=e,Qa("matchMedia"))},Hd=function(){function r(t,n){this.selector=n&&Rl(n),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){it(n)&&(s=i,i=n,n=it);var a=this,o=function(){var c=ct,u=a.selector,h;return c&&c!==a&&c.data.push(a),s&&(a.selector=Rl(s)),ct=a,h=i.apply(a,arguments),it(h)&&a._r.push(h),ct=c,a.selector=u,a.isReverted=!1,h};return a.last=o,n===it?o(a):n?a[n]=o:o},e.ignore=function(n){var i=ct;ct=null,n(this),ct=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof dt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n){var a=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}))}),a.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof Zr)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,s)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i){var o=Jr.indexOf(this);~o&&Jr.splice(o,1)}},e.revert=function(n){this.kill(n||{})},r}(),kb=function(){function r(t){this.contexts=[],this.scope=t}var e=r.prototype;return e.add=function(n,i,s){kn(n)||(n={matches:n});var a=new Hd(0,s||this.scope),o=a.conditions={},l,c,u;this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=cn.matchMedia(n[c]),l&&(Jr.indexOf(a)<0&&Jr.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Fl):l.addEventListener("change",Fl)));return u&&i(a),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),No={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Mb(i)})},timeline:function(e){return new Bt(e)},getTweensOf:function(e,t){return tt.getTweensOf(e,t)},getProperty:function(e,t,n,i){vt(e)&&(e=hn(e)[0]);var s=er(e||{}).get,a=n?_d:gd;return n==="native"&&(n=""),e&&(t?a(($t[t]&&$t[t].get||s)(e,t,n,i)):function(o,l,c){return a(($t[o]&&$t[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=hn(e),e.length>1){var i=e.map(function(u){return rn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var a=$t[t],o=er(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var h=new a;Dr._pt=0,h.init(e,n?u+n:u,Dr,0,[e]),h.render(1,h),Dr._pt&&Ac(1,Dr)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=rn.to(e,lr((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return tt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=nr(e.ease,jr.ease)),Af(jr,e||{})},config:function(e){return Af(tn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!$t[o]&&!nn[o]&&Ro(t+" effect requires "+o+" plugin.")}),Ka[t]=function(o,l,c){return n(hn(o),mn(l||{},s),c)},a&&(Bt.prototype[t]=function(o,l,c){return this.add(Ka[t](o,kn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ke[e]=nr(t)},parseEase:function(e,t){return arguments.length?nr(e,t):ke},getById:function(e){return tt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Bt(e),i,s;for(n.smoothChildTiming=Gt(e.smoothChildTiming),tt.remove(n),n._dp=0,n._time=n._tTime=tt._time,i=tt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof dt&&i.vars.onComplete===i._targets[0]))&&Nn(n,i,i._start-i._delay),i=s;return Nn(tt,n,0),n},context:function(e,t){return e?new Hd(e,t):ct},matchMedia:function(e){return new kb(e)},matchMediaRefresh:function(){return Jr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Fl()},addEventListener:function(e,t){var n=To[e]||(To[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=To[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:xb,wrapYoyo:vb,distribute:wd,random:Ed,snap:Td,normalize:_b,getUnit:Tt,clamp:db,splitColor:Pd,toArray:hn,selector:Rl,mapRange:Cd,pipe:mb,unitize:gb,interpolate:yb,shuffle:Sd},install:fd,effects:Ka,ticker:Jt,updateRoot:Bt.updateRoot,plugins:$t,globalTimeline:tt,core:{PropTween:Ht,globals:hd,Tween:dt,Timeline:Bt,Animation:Zr,getCache:er,_removeLinkedListItem:Jo,reverting:function(){return Et},context:function(e){return e&&ct&&(ct.data.push(e),e._ctx=ct),ct},suppressOverwrites:function(e){return gc=e}}};Vt("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return No[r]=dt[r]});Jt.add(Bt.updateRoot);Dr=No.to({},{duration:0});var Gb=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Vb=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=Gb(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},el=function(e,t){return{name:e,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(vt(s)&&(l={},Vt(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}Vb(o,s)}}}},rn=No.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Et?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},el("roundProps",Il),el("modifiers"),el("snap",Td))||No;dt.version=Bt.version=rn.version="3.11.4";ud=1;sd()&&$r();ke.Power0;ke.Power1;ke.Power2;ke.Power3;ke.Power4;ke.Linear;ke.Quad;ke.Cubic;ke.Quart;ke.Quint;ke.Strong;ke.Elastic;ke.Back;ke.SteppedEase;ke.Bounce;ke.Sine;ke.Expo;ke.Circ;/*!
 * CSSPlugin 3.11.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var If,mi,Br,Cc,Ki,Of,Pc,Hb=function(){return typeof window<"u"},ii={},Vi=180/Math.PI,kr=Math.PI/180,Er=Math.atan2,Ff=1e8,Lc=/([A-Z])/g,Wb=/(left|right|width|margin|padding|x)/i,Xb=/[\s,\(]\S/,Jn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Nl=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},qb=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},jb=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Yb=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Wd=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Xd=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Kb=function(e,t,n){return e.style[t]=n},$b=function(e,t,n){return e.style.setProperty(t,n)},Zb=function(e,t,n){return e._gsap[t]=n},Jb=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Qb=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},eS=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},nt="transform",An=nt+"Origin",tS=function(e,t){var n=this,i=this.target,s=i.style;if(e in ii){if(this.tfm=this.tfm||{},e!=="transform"&&(e=Jn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Kn(i,a)}):this.tfm[e]=i._gsap.x?i._gsap[e]:Kn(i,e)),this.props.indexOf(nt)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(An,t,"")),e=nt}(s||t)&&this.props.push(e,t,s[e])},qd=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},nS=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].replace(Lc,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Pc(),s&&!s.isStart&&!n[nt]&&(qd(n),i.uncache=1)}},jd=function(e,t){var n={target:e,props:[],revert:nS,save:tS};return t&&t.split(",").forEach(function(i){return n.save(i)}),n},Yd,zl=function(e,t){var n=mi.createElementNS?mi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):mi.createElement(e);return n.style?n:mi.createElement(e)},Bn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Lc,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Qr(t)||t,1)||""},Nf="O,Moz,ms,Ms,Webkit".split(","),Qr=function(e,t,n){var i=t||Ki,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Nf[a]+e in s););return a<0?null:(a===3?"ms":a>=0?Nf[a]:"")+e},Ul=function(){Hb()&&window.document&&(If=window,mi=If.document,Br=mi.documentElement,Ki=zl("div")||{style:{}},zl("div"),nt=Qr(nt),An=nt+"Origin",Ki.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Yd=!!Qr("perspective"),Pc=rn.core.reverting,Cc=1)},tl=function r(e){var t=zl("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,a;if(Br.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Br.removeChild(t),this.style.cssText=s,a},zf=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Kd=function(e){var t;try{t=e.getBBox()}catch{t=tl.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===tl||(t=tl.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+zf(e,["x","cx","x1"])||0,y:+zf(e,["y","cy","y1"])||0,width:0,height:0}:t},$d=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Kd(e))},Ns=function(e,t){if(t){var n=e.style;t in ii&&t!==An&&(t=nt),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(Lc,"-$1").toLowerCase())):n.removeAttribute(t)}},gi=function(e,t,n,i,s,a){var o=new Ht(e._pt,t,n,0,1,a?Xd:Wd);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},Uf={deg:1,rad:1,turn:1},iS={grid:1,flex:1},Ei=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Ki.style,l=Wb.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",m=i==="%",g,d,p,_;return i===a||!s||Uf[i]||Uf[a]?s:(a!=="px"&&!f&&(s=r(e,t,n,"px")),_=e.getCTM&&$d(e),(m||a==="%")&&(ii[t]||~t.indexOf("adius"))?(g=_?e.getBBox()[l?"width":"height"]:e[u],st(m?s/g*h:s/100*g)):(o[l?"width":"height"]=h+(f?a:i),d=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,_&&(d=(e.ownerSVGElement||{}).parentNode),(!d||d===mi||!d.appendChild)&&(d=mi.body),p=d._gsap,p&&m&&p.width&&l&&p.time===Jt.time&&!p.uncache?st(s/p.width*h):((m||a==="%")&&!iS[Bn(d,"display")]&&(o.position=Bn(e,"position")),d===e&&(o.position="static"),d.appendChild(Ki),g=Ki[u],d.removeChild(Ki),o.position="absolute",l&&m&&(p=er(d),p.time=Jt.time,p.width=d[u]),st(f?g*s/h:g&&s?h/g*s:0))))},Kn=function(e,t,n,i){var s;return Cc||Ul(),t in Jn&&t!=="transform"&&(t=Jn[t],~t.indexOf(",")&&(t=t.split(",")[0])),ii[t]&&t!=="transform"?(s=Us(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Uo(Bn(e,An))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=zo[t]&&zo[t](e,t,n)||Bn(e,t)||pd(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Ei(e,t,s,n)+n:s},rS=function(e,t,n,i){if(!n||n==="none"){var s=Qr(t,e,1),a=s&&Bn(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=Bn(e,"borderTopColor"))}var o=new Ht(this._pt,e.style,t,0,1,Gd),l=0,c=0,u,h,f,m,g,d,p,_,S,x,M,b;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=Bn(e,t)||i,e.style[t]=n),u=[n,i],Dd(u),n=u[0],i=u[1],f=n.match(Lr)||[],b=i.match(Lr)||[],b.length){for(;h=Lr.exec(i);)p=h[0],S=i.substring(l,h.index),g?g=(g+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(g=1),p!==(d=f[c++]||"")&&(m=parseFloat(d)||0,M=d.substr((m+"").length),p.charAt(1)==="="&&(p=Ur(m,p)+M),_=parseFloat(p),x=p.substr((_+"").length),l=Lr.lastIndex-x.length,x||(x=x||tn.units[t]||M,l===i.length&&(i+=x,o.e+=x)),M!==x&&(m=Ei(e,t,d,x)||0),o._pt={_next:o._pt,p:S||c===1?S:",",s:m,c:_-m,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?Xd:Wd;return ld.test(i)&&(o.e=0),this._pt=o,o},Bf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},sS=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Bf[n]||n,t[1]=Bf[i]||i,t.join(" ")},oS=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],ii[o]&&(l=1,o=o==="transformOrigin"?An:nt),Ns(n,o);l&&(Ns(n,nt),a&&(a.svg&&n.removeAttribute("transform"),Us(n,1),a.uncache=1,qd(i)))}},zo={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new Ht(e._pt,t,n,0,0,oS);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},zs=[1,0,0,1,0,0],Zd={},Jd=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},kf=function(e){var t=Bn(e,nt);return Jd(t)?zs:t.substr(7).match(ad).map(st)},Dc=function(e,t){var n=e._gsap||er(e),i=e.style,s=kf(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?zs:s):(s===zs&&!e.offsetParent&&e!==Br&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(c=1,o=e.nextElementSibling,Br.appendChild(e)),s=kf(e),l?i.display=l:Ns(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Br.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Bl=function(e,t,n,i,s,a){var o=e._gsap,l=s||Dc(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,f=o.yOffset||0,m=l[0],g=l[1],d=l[2],p=l[3],_=l[4],S=l[5],x=t.split(" "),M=parseFloat(x[0])||0,b=parseFloat(x[1])||0,C,L,v,w;n?l!==zs&&(L=m*p-g*d)&&(v=M*(p/L)+b*(-d/L)+(d*S-p*_)/L,w=M*(-g/L)+b*(m/L)-(m*S-g*_)/L,M=v,b=w):(C=Kd(e),M=C.x+(~x[0].indexOf("%")?M/100*C.width:M),b=C.y+(~(x[1]||x[0]).indexOf("%")?b/100*C.height:b)),i||i!==!1&&o.smooth?(_=M-c,S=b-u,o.xOffset=h+(_*m+S*d)-_,o.yOffset=f+(_*g+S*p)-S):o.xOffset=o.yOffset=0,o.xOrigin=M,o.yOrigin=b,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[An]="0px 0px",a&&(gi(a,o,"xOrigin",c,M),gi(a,o,"yOrigin",u,b),gi(a,o,"xOffset",h,o.xOffset),gi(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",M+" "+b)},Us=function(e,t){var n=e._gsap||new Fd(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=Bn(e,An)||"0",u,h,f,m,g,d,p,_,S,x,M,b,C,L,v,w,R,W,j,N,O,q,Y,K,V,oe,se,Me,B,le,de,k;return u=h=f=d=p=_=S=x=M=0,m=g=1,n.svg=!!(e.getCTM&&$d(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[nt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[nt]!=="none"?l[nt]:"")),i.scale=i.rotate=i.translate="none"),L=Dc(e,n.svg),n.svg&&(n.uncache?(V=e.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",K=""):K=!t&&e.getAttribute("data-svg-origin"),Bl(e,K||c,!!K||n.originIsAbsolute,n.smooth!==!1,L)),b=n.xOrigin||0,C=n.yOrigin||0,L!==zs&&(W=L[0],j=L[1],N=L[2],O=L[3],u=q=L[4],h=Y=L[5],L.length===6?(m=Math.sqrt(W*W+j*j),g=Math.sqrt(O*O+N*N),d=W||j?Er(j,W)*Vi:0,S=N||O?Er(N,O)*Vi+d:0,S&&(g*=Math.abs(Math.cos(S*kr))),n.svg&&(u-=b-(b*W+C*N),h-=C-(b*j+C*O))):(k=L[6],le=L[7],se=L[8],Me=L[9],B=L[10],de=L[11],u=L[12],h=L[13],f=L[14],v=Er(k,B),p=v*Vi,v&&(w=Math.cos(-v),R=Math.sin(-v),K=q*w+se*R,V=Y*w+Me*R,oe=k*w+B*R,se=q*-R+se*w,Me=Y*-R+Me*w,B=k*-R+B*w,de=le*-R+de*w,q=K,Y=V,k=oe),v=Er(-N,B),_=v*Vi,v&&(w=Math.cos(-v),R=Math.sin(-v),K=W*w-se*R,V=j*w-Me*R,oe=N*w-B*R,de=O*R+de*w,W=K,j=V,N=oe),v=Er(j,W),d=v*Vi,v&&(w=Math.cos(v),R=Math.sin(v),K=W*w+j*R,V=q*w+Y*R,j=j*w-W*R,Y=Y*w-q*R,W=K,q=V),p&&Math.abs(p)+Math.abs(d)>359.9&&(p=d=0,_=180-_),m=st(Math.sqrt(W*W+j*j+N*N)),g=st(Math.sqrt(Y*Y+k*k)),v=Er(q,Y),S=Math.abs(v)>2e-4?v*Vi:0,M=de?1/(de<0?-de:de):0),n.svg&&(K=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Jd(Bn(e,nt)),K&&e.setAttribute("transform",K))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(m*=-1,S+=d<=0?180:-180,d+=d<=0?180:-180):(g*=-1,S+=S<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=st(m),n.scaleY=st(g),n.rotation=st(d)+o,n.rotationX=st(p)+o,n.rotationY=st(_)+o,n.skewX=S+o,n.skewY=x+o,n.transformPerspective=M+a,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[An]=Uo(c)),n.xOffset=n.yOffset=0,n.force3D=tn.force3D,n.renderTransform=n.svg?lS:Yd?Qd:aS,n.uncache=0,n},Uo=function(e){return(e=e.split(" "))[0]+" "+e[1]},nl=function(e,t,n){var i=Tt(t);return st(parseFloat(t)+parseFloat(Ei(e,"x",n+"px",i)))+i},aS=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Qd(e,t)},zi="0deg",ds="0px",Ui=") ",Qd=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,m=n.skewY,g=n.scaleX,d=n.scaleY,p=n.transformPerspective,_=n.force3D,S=n.target,x=n.zOrigin,M="",b=_==="auto"&&e&&e!==1||_===!0;if(x&&(h!==zi||u!==zi)){var C=parseFloat(u)*kr,L=Math.sin(C),v=Math.cos(C),w;C=parseFloat(h)*kr,w=Math.cos(C),a=nl(S,a,L*w*-x),o=nl(S,o,-Math.sin(C)*-x),l=nl(S,l,v*w*-x+x)}p!==ds&&(M+="perspective("+p+Ui),(i||s)&&(M+="translate("+i+"%, "+s+"%) "),(b||a!==ds||o!==ds||l!==ds)&&(M+=l!==ds||b?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Ui),c!==zi&&(M+="rotate("+c+Ui),u!==zi&&(M+="rotateY("+u+Ui),h!==zi&&(M+="rotateX("+h+Ui),(f!==zi||m!==zi)&&(M+="skew("+f+", "+m+Ui),(g!==1||d!==1)&&(M+="scale("+g+", "+d+Ui),S.style[nt]=M||"translate(0, 0)"},lS=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,m=n.target,g=n.xOrigin,d=n.yOrigin,p=n.xOffset,_=n.yOffset,S=n.forceCSS,x=parseFloat(a),M=parseFloat(o),b,C,L,v,w;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=kr,c*=kr,b=Math.cos(l)*h,C=Math.sin(l)*h,L=Math.sin(l-c)*-f,v=Math.cos(l-c)*f,c&&(u*=kr,w=Math.tan(c-u),w=Math.sqrt(1+w*w),L*=w,v*=w,u&&(w=Math.tan(u),w=Math.sqrt(1+w*w),b*=w,C*=w)),b=st(b),C=st(C),L=st(L),v=st(v)):(b=h,v=f,C=L=0),(x&&!~(a+"").indexOf("px")||M&&!~(o+"").indexOf("px"))&&(x=Ei(m,"x",a,"px"),M=Ei(m,"y",o,"px")),(g||d||p||_)&&(x=st(x+g-(g*b+d*L)+p),M=st(M+d-(g*C+d*v)+_)),(i||s)&&(w=m.getBBox(),x=st(x+i/100*w.width),M=st(M+s/100*w.height)),w="matrix("+b+","+C+","+L+","+v+","+x+","+M+")",m.setAttribute("transform",w),S&&(m.style[nt]=w)},cS=function(e,t,n,i,s){var a=360,o=vt(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Vi:1),c=l-i,u=i+c+"deg",h,f;return o&&(h=s.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*Ff)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*Ff)%a-~~(c/a)*a)),e._pt=f=new Ht(e._pt,t,n,i,c,qb),f.e=u,f.u="deg",e._props.push(n),f},Gf=function(e,t){for(var n in t)e[n]=t[n];return e},uS=function(e,t,n){var i=Gf({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,h,f,m,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[nt]=t,o=Us(n,1),Ns(n,nt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[nt],a[nt]=t,o=Us(n,1),a[nt]=c);for(l in ii)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(m=Tt(c),g=Tt(u),h=m!==g?Ei(n,l,c,g):parseFloat(c),f=parseFloat(u),e._pt=new Ht(e._pt,o,l,h,f-h,Nl),e._pt.u=g||0,e._props.push(l));Gf(o,i)};Vt("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});zo[e>1?"border"+r:r]=function(o,l,c,u,h){var f,m;if(arguments.length<4)return f=a.map(function(g){return Kn(o,g,c)}),m=f.join(" "),m.split(f[0]).length===5?f[0]:m;f=(u+"").split(" "),m={},a.forEach(function(g,d){return m[g]=f[d]=f[d]||f[(d-1)/2|0]}),o.init(l,m,h)}});var ep={name:"css",register:Ul,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,h,f,m,g,d,p,_,S,x,M,b,C,L,v;Cc||Ul(),this.styles=this.styles||jd(e),v=this.styles.props,this.tween=n;for(d in t)if(d!=="autoRound"&&(u=t[d],!($t[d]&&Nd(d,t,n,i,e,s)))){if(m=typeof u,g=zo[d],m==="function"&&(u=u.call(n,i,e,s),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=Os(u)),g)g(this,e,d,u,n)&&(L=1);else if(d.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(d)+"").trim(),u+="",Mi.lastIndex=0,Mi.test(c)||(p=Tt(c),_=Tt(u)),_?p!==_&&(c=Ei(e,d,c,_)+_):p&&(u+=p),this.add(o,"setProperty",c,u,i,s,0,0,d),a.push(d),v.push(d,0,o[d]);else if(m!=="undefined"){if(l&&d in l?(c=typeof l[d]=="function"?l[d].call(n,i,e,s):l[d],vt(c)&&~c.indexOf("random(")&&(c=Os(c)),Tt(c+"")||(c+=tn.units[d]||Tt(Kn(e,d))||""),(c+"").charAt(1)==="="&&(c=Kn(e,d))):c=Kn(e,d),f=parseFloat(c),S=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),S&&(u=u.substr(2)),h=parseFloat(u),d in Jn&&(d==="autoAlpha"&&(f===1&&Kn(e,"visibility")==="hidden"&&h&&(f=0),v.push("visibility",0,o.visibility),gi(this,o,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),d!=="scale"&&d!=="transform"&&(d=Jn[d],~d.indexOf(",")&&(d=d.split(",")[0]))),x=d in ii,x){if(this.styles.save(d),M||(b=e._gsap,b.renderTransform&&!t.parseTransform||Us(e,t.parseTransform),C=t.smoothOrigin!==!1&&b.smooth,M=this._pt=new Ht(this._pt,o,nt,0,1,b.renderTransform,b,0,-1),M.dep=1),d==="scale")this._pt=new Ht(this._pt,b,"scaleY",b.scaleY,(S?Ur(b.scaleY,S+h):h)-b.scaleY||0,Nl),this._pt.u=0,a.push("scaleY",d),d+="X";else if(d==="transformOrigin"){v.push(An,0,o[An]),u=sS(u),b.svg?Bl(e,u,0,C,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==b.zOrigin&&gi(this,b,"zOrigin",b.zOrigin,_),gi(this,o,d,Uo(c),Uo(u)));continue}else if(d==="svgOrigin"){Bl(e,u,1,C,0,this);continue}else if(d in Zd){cS(this,b,d,f,S?Ur(f,S+u):u);continue}else if(d==="smoothOrigin"){gi(this,b,"smooth",b.smooth,u);continue}else if(d==="force3D"){b[d]=u;continue}else if(d==="transform"){uS(this,u,e);continue}}else d in o||(d=Qr(d)||d);if(x||(h||h===0)&&(f||f===0)&&!Xb.test(u)&&d in o)p=(c+"").substr((f+"").length),h||(h=0),_=Tt(u)||(d in tn.units?tn.units[d]:p),p!==_&&(f=Ei(e,d,c,_)),this._pt=new Ht(this._pt,x?b:o,d,f,(S?Ur(f,S+h):h)-f,!x&&(_==="px"||d==="zIndex")&&t.autoRound!==!1?Yb:Nl),this._pt.u=_||0,p!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=jb);else if(d in o)rS.call(this,e,d,c,S?S+u:u);else if(d in e)this.add(e,d,c||e[d],S?S+u:u,i,s);else if(d!=="parseTransform"){vc(d,u);continue}x||(d in o?v.push(d,0,o[d]):v.push(d,1,c||e[d])),a.push(d)}}L&&Vd(this)},render:function(e,t){if(t.tween._time||!Pc())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Kn,aliases:Jn,getSetter:function(e,t,n){var i=Jn[t];return i&&i.indexOf(",")<0&&(t=i),t in ii&&t!==An&&(e._gsap.x||Kn(e,"x"))?n&&Of===n?t==="scale"?Jb:Zb:(Of=n||{})&&(t==="scale"?Qb:eS):e.style&&!_c(e.style[t])?Kb:~t.indexOf("-")?$b:Ec(e,t)},core:{_removeProperty:Ns,_getMatrix:Dc}};rn.utils.checkPrefix=Qr;rn.core.getStyleSaver=jd;(function(r,e,t,n){var i=Vt(r+","+e+","+t,function(s){ii[s]=1});Vt(e,function(s){tn.units[s]="deg",Zd[s]=1}),Jn[i[13]]=r+","+e,Vt(n,function(s){var a=s.split(":");Jn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Vt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){tn.units[r]="px"});rn.registerPlugin(ep);var tp=rn.registerPlugin(ep)||rn;tp.core.Tween;const Vf={type:"change"},il={type:"start"},Hf={type:"end"};class fS extends cr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:fr.ROTATE,MIDDLE:fr.DOLLY,RIGHT:fr.PAN},this.touches={ONE:hr.ROTATE,TWO:hr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",re),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",re),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Vf),n.update(),s=i.NONE},this.update=function(){const P=new U,z=new sr().setFromUnitVectors(e.up,new U(0,1,0)),_e=z.clone().invert(),me=new U,we=new sr,Ae=2*Math.PI;return function(){const Le=n.object.position;P.copy(Le).sub(n.target),P.applyQuaternion(z),o.setFromVector3(P),n.autoRotate&&s===i.NONE&&w(L()),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Be=n.minAzimuthAngle,je=n.maxAzimuthAngle;return isFinite(Be)&&isFinite(je)&&(Be<-Math.PI?Be+=Ae:Be>Math.PI&&(Be-=Ae),je<-Math.PI?je+=Ae:je>Math.PI&&(je-=Ae),Be<=je?o.theta=Math.max(Be,Math.min(je,o.theta)):o.theta=o.theta>(Be+je)/2?Math.max(Be,o.theta):Math.min(je,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),P.setFromSpherical(o),P.applyQuaternion(_e),Le.copy(n.target).add(P),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||me.distanceToSquared(n.object.position)>a||8*(1-we.dot(n.object.quaternion))>a?(n.dispatchEvent(Vf),me.copy(n.object.position),we.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",F),n.domElement.removeEventListener("pointerdown",X),n.domElement.removeEventListener("pointercancel",ae),n.domElement.removeEventListener("wheel",fe),n.domElement.removeEventListener("pointermove",te),n.domElement.removeEventListener("pointerup",J),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",re),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const a=1e-6,o=new Tf,l=new Tf;let c=1;const u=new U;let h=!1;const f=new Oe,m=new Oe,g=new Oe,d=new Oe,p=new Oe,_=new Oe,S=new Oe,x=new Oe,M=new Oe,b=[],C={};function L(){return 2*Math.PI/60/60*n.autoRotateSpeed}function v(){return Math.pow(.95,n.zoomSpeed)}function w(P){l.theta-=P}function R(P){l.phi-=P}const W=function(){const P=new U;return function(_e,me){P.setFromMatrixColumn(me,0),P.multiplyScalar(-_e),u.add(P)}}(),j=function(){const P=new U;return function(_e,me){n.screenSpacePanning===!0?P.setFromMatrixColumn(me,1):(P.setFromMatrixColumn(me,0),P.crossVectors(n.object.up,P)),P.multiplyScalar(_e),u.add(P)}}(),N=function(){const P=new U;return function(_e,me){const we=n.domElement;if(n.object.isPerspectiveCamera){const Ae=n.object.position;P.copy(Ae).sub(n.target);let ve=P.length();ve*=Math.tan(n.object.fov/2*Math.PI/180),W(2*_e*ve/we.clientHeight,n.object.matrix),j(2*me*ve/we.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(W(_e*(n.object.right-n.object.left)/n.object.zoom/we.clientWidth,n.object.matrix),j(me*(n.object.top-n.object.bottom)/n.object.zoom/we.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function O(P){n.object.isPerspectiveCamera?c/=P:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*P)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(P){n.object.isPerspectiveCamera?c*=P:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/P)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(P){f.set(P.clientX,P.clientY)}function K(P){S.set(P.clientX,P.clientY)}function V(P){d.set(P.clientX,P.clientY)}function oe(P){m.set(P.clientX,P.clientY),g.subVectors(m,f).multiplyScalar(n.rotateSpeed);const z=n.domElement;w(2*Math.PI*g.x/z.clientHeight),R(2*Math.PI*g.y/z.clientHeight),f.copy(m),n.update()}function se(P){x.set(P.clientX,P.clientY),M.subVectors(x,S),M.y>0?O(v()):M.y<0&&q(v()),S.copy(x),n.update()}function Me(P){p.set(P.clientX,P.clientY),_.subVectors(p,d).multiplyScalar(n.panSpeed),N(_.x,_.y),d.copy(p),n.update()}function B(P){P.deltaY<0?q(v()):P.deltaY>0&&O(v()),n.update()}function le(P){let z=!1;switch(P.code){case n.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?R(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(0,n.keyPanSpeed),z=!0;break;case n.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?R(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(0,-n.keyPanSpeed),z=!0;break;case n.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?w(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(n.keyPanSpeed,0),z=!0;break;case n.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?w(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(-n.keyPanSpeed,0),z=!0;break}z&&(P.preventDefault(),n.update())}function de(){if(b.length===1)f.set(b[0].pageX,b[0].pageY);else{const P=.5*(b[0].pageX+b[1].pageX),z=.5*(b[0].pageY+b[1].pageY);f.set(P,z)}}function k(){if(b.length===1)d.set(b[0].pageX,b[0].pageY);else{const P=.5*(b[0].pageX+b[1].pageX),z=.5*(b[0].pageY+b[1].pageY);d.set(P,z)}}function xe(){const P=b[0].pageX-b[1].pageX,z=b[0].pageY-b[1].pageY,_e=Math.sqrt(P*P+z*z);S.set(0,_e)}function be(){n.enableZoom&&xe(),n.enablePan&&k()}function Te(){n.enableZoom&&xe(),n.enableRotate&&de()}function ye(P){if(b.length==1)m.set(P.pageX,P.pageY);else{const _e=pe(P),me=.5*(P.pageX+_e.x),we=.5*(P.pageY+_e.y);m.set(me,we)}g.subVectors(m,f).multiplyScalar(n.rotateSpeed);const z=n.domElement;w(2*Math.PI*g.x/z.clientHeight),R(2*Math.PI*g.y/z.clientHeight),f.copy(m)}function Ce(P){if(b.length===1)p.set(P.pageX,P.pageY);else{const z=pe(P),_e=.5*(P.pageX+z.x),me=.5*(P.pageY+z.y);p.set(_e,me)}_.subVectors(p,d).multiplyScalar(n.panSpeed),N(_.x,_.y),d.copy(p)}function De(P){const z=pe(P),_e=P.pageX-z.x,me=P.pageY-z.y,we=Math.sqrt(_e*_e+me*me);x.set(0,we),M.set(0,Math.pow(x.y/S.y,n.zoomSpeed)),O(M.y),S.copy(x)}function A(P){n.enableZoom&&De(P),n.enablePan&&Ce(P)}function D(P){n.enableZoom&&De(P),n.enableRotate&&ye(P)}function X(P){n.enabled!==!1&&(b.length===0&&(n.domElement.setPointerCapture(P.pointerId),n.domElement.addEventListener("pointermove",te),n.domElement.addEventListener("pointerup",J)),$(P),P.pointerType==="touch"?T(P):ue(P))}function te(P){n.enabled!==!1&&(P.pointerType==="touch"?y(P):ie(P))}function J(P){Q(P),b.length===0&&(n.domElement.releasePointerCapture(P.pointerId),n.domElement.removeEventListener("pointermove",te),n.domElement.removeEventListener("pointerup",J)),n.dispatchEvent(Hf),s=i.NONE}function ae(P){Q(P)}function ue(P){let z;switch(P.button){case 0:z=n.mouseButtons.LEFT;break;case 1:z=n.mouseButtons.MIDDLE;break;case 2:z=n.mouseButtons.RIGHT;break;default:z=-1}switch(z){case fr.DOLLY:if(n.enableZoom===!1)return;K(P),s=i.DOLLY;break;case fr.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enablePan===!1)return;V(P),s=i.PAN}else{if(n.enableRotate===!1)return;Y(P),s=i.ROTATE}break;case fr.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enableRotate===!1)return;Y(P),s=i.ROTATE}else{if(n.enablePan===!1)return;V(P),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(il)}function ie(P){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;oe(P);break;case i.DOLLY:if(n.enableZoom===!1)return;se(P);break;case i.PAN:if(n.enablePan===!1)return;Me(P);break}}function fe(P){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(P.preventDefault(),n.dispatchEvent(il),B(P),n.dispatchEvent(Hf))}function re(P){n.enabled===!1||n.enablePan===!1||le(P)}function T(P){switch(ce(P),b.length){case 1:switch(n.touches.ONE){case hr.ROTATE:if(n.enableRotate===!1)return;de(),s=i.TOUCH_ROTATE;break;case hr.PAN:if(n.enablePan===!1)return;k(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case hr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;be(),s=i.TOUCH_DOLLY_PAN;break;case hr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Te(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(il)}function y(P){switch(ce(P),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;ye(P),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;Ce(P),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;A(P),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;D(P),n.update();break;default:s=i.NONE}}function F(P){n.enabled!==!1&&P.preventDefault()}function $(P){b.push(P)}function Q(P){delete C[P.pointerId];for(let z=0;z<b.length;z++)if(b[z].pointerId==P.pointerId){b.splice(z,1);return}}function ce(P){let z=C[P.pointerId];z===void 0&&(z=new Oe,C[P.pointerId]=z),z.set(P.pageX,P.pageY)}function pe(P){const z=P.pointerId===b[0].pointerId?b[1]:b[0];return C[z.pointerId]}n.domElement.addEventListener("contextmenu",F),n.domElement.addEventListener("pointerdown",X),n.domElement.addEventListener("pointercancel",ae),n.domElement.addEventListener("wheel",fe,{passive:!1}),this.update()}}const hS=fi("nav",null,[fi("a",{href:"/MetaMeApp"}," Sphere "),fi("ul",null,[fi("li",null,"Games"),fi("li",null,"About")])],-1),dS=fi("h1",{class:"title"}," Spin that shit ",-1),pS={__name:"App",setup(r){const e=new qM,t=new mc(2,64,64),n=new jM({color:65411}),i=new Zn(t,n);e.add(i);const s={width:window.innerWidth,height:window.innerHeight},a=new wf(16777215,1,100),o=new wf(16777215,1,100);a.position.set(0,10,10),o.position.set(0,-10,-10),e.add(a),e.add(o);const l=new Zt(45,s.width/s.height,.1,100);l.position.z=10,e.add(l);const c=document.querySelector(".webgl"),u=new pc({canvas:c});u.setSize(s.width,s.height),u.setPixelRatio(2),u.render(e,l);const h=new fS(l,c);h.enableDamping=!0,h.enablePan=!1,h.enableZoom=!1,h.autoRotate=!0,h.autoRotateSpeed=5,window.addEventListener("resize",()=>{s.width=window.innerWidth,s.height=window.innerHeight,l.aspect=s.width/s.height,l.updateProjectionMatrix(),u.setSize(s.width,s.height)});const f=()=>{h.update(),u.render(e,l),window.requestAnimationFrame(f)};f();const m=tp.timeline({defaults:{duration:1}});return m.fromTo(i.scale,{z:0,x:0,y:0},{z:1,x:1,y:1}),rc(()=>{m.fromTo("nav",{y:"-100%",opacity:"0"},{y:"0%",opacity:"1"}),m.fromTo(".title",{opacity:"0"},{opacity:"1"})}),(g,d)=>(Jm(),tg(yn,null,[hS,dS],64))}};kg(pS).mount("#app");
