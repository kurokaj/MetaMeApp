(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function Pc(r,e){const t=Object.create(null),n=r.split(",");for(let i=0;i<n.length;i++)t[n[i]]=!0;return e?i=>!!t[i.toLowerCase()]:i=>!!t[i]}function Dc(r){if(Fe(r)){const e={};for(let t=0;t<r.length;t++){const n=r[t],i=At(n)?Gm(n):Dc(n);if(i)for(const s in i)e[s]=i[s]}return e}else{if(At(r))return r;if(gt(r))return r}}const Bm=/;(?![^(]*\))/g,km=/:([^]+)/,Vm=/\/\*.*?\*\//gs;function Gm(r){const e={};return r.replace(Vm,"").split(Bm).forEach(t=>{if(t){const n=t.split(km);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function Ic(r){let e="";if(At(r))e=r;else if(Fe(r))for(let t=0;t<r.length;t++){const n=Ic(r[t]);n&&(e+=n+" ")}else if(gt(r))for(const t in r)r[t]&&(e+=t+" ");return e.trim()}const Hm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Wm=Pc(Hm);function fd(r){return!!r||r===""}const rt={},Xs=[],Dn=()=>{},Xm=()=>!1,jm=/^on[^a-z]/,ya=r=>jm.test(r),Oc=r=>r.startsWith("onUpdate:"),Ft=Object.assign,Nc=(r,e)=>{const t=r.indexOf(e);t>-1&&r.splice(t,1)},qm=Object.prototype.hasOwnProperty,qe=(r,e)=>qm.call(r,e),Fe=Array.isArray,js=r=>ba(r)==="[object Map]",Ym=r=>ba(r)==="[object Set]",Be=r=>typeof r=="function",At=r=>typeof r=="string",Fc=r=>typeof r=="symbol",gt=r=>r!==null&&typeof r=="object",dd=r=>gt(r)&&Be(r.then)&&Be(r.catch),Km=Object.prototype.toString,ba=r=>Km.call(r),$m=r=>ba(r).slice(8,-1),Zm=r=>ba(r)==="[object Object]",Uc=r=>At(r)&&r!=="NaN"&&r[0]!=="-"&&""+parseInt(r,10)===r,Zo=Pc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ma=r=>{const e=Object.create(null);return t=>e[t]||(e[t]=r(t))},Jm=/-(\w)/g,is=Ma(r=>r.replace(Jm,(e,t)=>t?t.toUpperCase():"")),Qm=/\B([A-Z])/g,vs=Ma(r=>r.replace(Qm,"-$1").toLowerCase()),pd=Ma(r=>r.charAt(0).toUpperCase()+r.slice(1)),Ha=Ma(r=>r?`on${pd(r)}`:""),aa=(r,e)=>!Object.is(r,e),Wa=(r,e)=>{for(let t=0;t<r.length;t++)r[t](e)},la=(r,e,t)=>{Object.defineProperty(r,e,{configurable:!0,enumerable:!1,value:t})},eg=r=>{const e=parseFloat(r);return isNaN(e)?r:e};let Nu;const tg=()=>Nu||(Nu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ln;class ng{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ln,!e&&Ln&&(this.index=(Ln.scopes||(Ln.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=Ln;try{return Ln=this,e()}finally{Ln=t}}}on(){Ln=this}off(){Ln=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function ig(r,e=Ln){e&&e.active&&e.effects.push(r)}function rg(){return Ln}const zc=r=>{const e=new Set(r);return e.w=0,e.n=0,e},md=r=>(r.w&Ui)>0,gd=r=>(r.n&Ui)>0,sg=({deps:r})=>{if(r.length)for(let e=0;e<r.length;e++)r[e].w|=Ui},og=r=>{const{deps:e}=r;if(e.length){let t=0;for(let n=0;n<e.length;n++){const i=e[n];md(i)&&!gd(i)?i.delete(r):e[t++]=i,i.w&=~Ui,i.n&=~Ui}e.length=t}},Gl=new WeakMap;let ks=0,Ui=1;const Hl=30;let Rn;const ur=Symbol(""),Wl=Symbol("");class Bc{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,ig(this,n)}run(){if(!this.active)return this.fn();let e=Rn,t=Pi;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Rn,Rn=this,Pi=!0,Ui=1<<++ks,ks<=Hl?sg(this):Fu(this),this.fn()}finally{ks<=Hl&&og(this),Ui=1<<--ks,Rn=this.parent,Pi=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Rn===this?this.deferStop=!0:this.active&&(Fu(this),this.onStop&&this.onStop(),this.active=!1)}}function Fu(r){const{deps:e}=r;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(r);e.length=0}}let Pi=!0;const _d=[];function ys(){_d.push(Pi),Pi=!1}function bs(){const r=_d.pop();Pi=r===void 0?!0:r}function Qt(r,e,t){if(Pi&&Rn){let n=Gl.get(r);n||Gl.set(r,n=new Map);let i=n.get(t);i||n.set(t,i=zc()),xd(i)}}function xd(r,e){let t=!1;ks<=Hl?gd(r)||(r.n|=Ui,t=!md(r)):t=!r.has(Rn),t&&(r.add(Rn),Rn.deps.push(r))}function fi(r,e,t,n,i,s){const o=Gl.get(r);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Fe(r)){const l=Number(n);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Fe(r)?Uc(t)&&a.push(o.get("length")):(a.push(o.get(ur)),js(r)&&a.push(o.get(Wl)));break;case"delete":Fe(r)||(a.push(o.get(ur)),js(r)&&a.push(o.get(Wl)));break;case"set":js(r)&&a.push(o.get(ur));break}if(a.length===1)a[0]&&Xl(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Xl(zc(l))}}function Xl(r,e){const t=Fe(r)?r:[...r];for(const n of t)n.computed&&Uu(n);for(const n of t)n.computed||Uu(n)}function Uu(r,e){(r!==Rn||r.allowRecurse)&&(r.scheduler?r.scheduler():r.run())}const ag=Pc("__proto__,__v_isRef,__isVue"),vd=new Set(Object.getOwnPropertyNames(Symbol).filter(r=>r!=="arguments"&&r!=="caller").map(r=>Symbol[r]).filter(Fc)),lg=kc(),cg=kc(!1,!0),ug=kc(!0),zu=hg();function hg(){const r={};return["includes","indexOf","lastIndexOf"].forEach(e=>{r[e]=function(...t){const n=$e(this);for(let s=0,o=this.length;s<o;s++)Qt(n,"get",s+"");const i=n[e](...t);return i===-1||i===!1?n[e](...t.map($e)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{r[e]=function(...t){ys();const n=$e(this)[e].apply(this,t);return bs(),n}}),r}function fg(r){const e=$e(this);return Qt(e,"has",r),e.hasOwnProperty(r)}function kc(r=!1,e=!1){return function(n,i,s){if(i==="__v_isReactive")return!r;if(i==="__v_isReadonly")return r;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&s===(r?e?Cg:wd:e?Sd:Md).get(n))return n;const o=Fe(n);if(!r){if(o&&qe(zu,i))return Reflect.get(zu,i,s);if(i==="hasOwnProperty")return fg}const a=Reflect.get(n,i,s);return(Fc(i)?vd.has(i):ag(i))||(r||Qt(n,"get",i),e)?a:Wt(a)?o&&Uc(i)?a:a.value:gt(a)?r?Td(a):Hc(a):a}}const dg=yd(),pg=yd(!0);function yd(r=!1){return function(t,n,i,s){let o=t[n];if(Qs(o)&&Wt(o)&&!Wt(i))return!1;if(!r&&(!jl(i)&&!Qs(i)&&(o=$e(o),i=$e(i)),!Fe(t)&&Wt(o)&&!Wt(i)))return o.value=i,!0;const a=Fe(t)&&Uc(n)?Number(n)<t.length:qe(t,n),l=Reflect.set(t,n,i,s);return t===$e(s)&&(a?aa(i,o)&&fi(t,"set",n,i):fi(t,"add",n,i)),l}}function mg(r,e){const t=qe(r,e);r[e];const n=Reflect.deleteProperty(r,e);return n&&t&&fi(r,"delete",e,void 0),n}function gg(r,e){const t=Reflect.has(r,e);return(!Fc(e)||!vd.has(e))&&Qt(r,"has",e),t}function _g(r){return Qt(r,"iterate",Fe(r)?"length":ur),Reflect.ownKeys(r)}const bd={get:lg,set:dg,deleteProperty:mg,has:gg,ownKeys:_g},xg={get:ug,set(r,e){return!0},deleteProperty(r,e){return!0}},vg=Ft({},bd,{get:cg,set:pg}),Vc=r=>r,Sa=r=>Reflect.getPrototypeOf(r);function bo(r,e,t=!1,n=!1){r=r.__v_raw;const i=$e(r),s=$e(e);t||(e!==s&&Qt(i,"get",e),Qt(i,"get",s));const{has:o}=Sa(i),a=n?Vc:t?jc:Xc;if(o.call(i,e))return a(r.get(e));if(o.call(i,s))return a(r.get(s));r!==i&&r.get(e)}function Mo(r,e=!1){const t=this.__v_raw,n=$e(t),i=$e(r);return e||(r!==i&&Qt(n,"has",r),Qt(n,"has",i)),r===i?t.has(r):t.has(r)||t.has(i)}function So(r,e=!1){return r=r.__v_raw,!e&&Qt($e(r),"iterate",ur),Reflect.get(r,"size",r)}function Bu(r){r=$e(r);const e=$e(this);return Sa(e).has.call(e,r)||(e.add(r),fi(e,"add",r,r)),this}function ku(r,e){e=$e(e);const t=$e(this),{has:n,get:i}=Sa(t);let s=n.call(t,r);s||(r=$e(r),s=n.call(t,r));const o=i.call(t,r);return t.set(r,e),s?aa(e,o)&&fi(t,"set",r,e):fi(t,"add",r,e),this}function Vu(r){const e=$e(this),{has:t,get:n}=Sa(e);let i=t.call(e,r);i||(r=$e(r),i=t.call(e,r)),n&&n.call(e,r);const s=e.delete(r);return i&&fi(e,"delete",r,void 0),s}function Gu(){const r=$e(this),e=r.size!==0,t=r.clear();return e&&fi(r,"clear",void 0,void 0),t}function wo(r,e){return function(n,i){const s=this,o=s.__v_raw,a=$e(o),l=e?Vc:r?jc:Xc;return!r&&Qt(a,"iterate",ur),o.forEach((c,u)=>n.call(i,l(c),l(u),s))}}function To(r,e,t){return function(...n){const i=this.__v_raw,s=$e(i),o=js(s),a=r==="entries"||r===Symbol.iterator&&o,l=r==="keys"&&o,c=i[r](...n),u=t?Vc:e?jc:Xc;return!e&&Qt(s,"iterate",l?Wl:ur),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function _i(r){return function(...e){return r==="delete"?!1:this}}function yg(){const r={get(s){return bo(this,s)},get size(){return So(this)},has:Mo,add:Bu,set:ku,delete:Vu,clear:Gu,forEach:wo(!1,!1)},e={get(s){return bo(this,s,!1,!0)},get size(){return So(this)},has:Mo,add:Bu,set:ku,delete:Vu,clear:Gu,forEach:wo(!1,!0)},t={get(s){return bo(this,s,!0)},get size(){return So(this,!0)},has(s){return Mo.call(this,s,!0)},add:_i("add"),set:_i("set"),delete:_i("delete"),clear:_i("clear"),forEach:wo(!0,!1)},n={get(s){return bo(this,s,!0,!0)},get size(){return So(this,!0)},has(s){return Mo.call(this,s,!0)},add:_i("add"),set:_i("set"),delete:_i("delete"),clear:_i("clear"),forEach:wo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{r[s]=To(s,!1,!1),t[s]=To(s,!0,!1),e[s]=To(s,!1,!0),n[s]=To(s,!0,!0)}),[r,t,e,n]}const[bg,Mg,Sg,wg]=yg();function Gc(r,e){const t=e?r?wg:Sg:r?Mg:bg;return(n,i,s)=>i==="__v_isReactive"?!r:i==="__v_isReadonly"?r:i==="__v_raw"?n:Reflect.get(qe(t,i)&&i in n?t:n,i,s)}const Tg={get:Gc(!1,!1)},Eg={get:Gc(!1,!0)},Ag={get:Gc(!0,!1)},Md=new WeakMap,Sd=new WeakMap,wd=new WeakMap,Cg=new WeakMap;function Lg(r){switch(r){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Rg(r){return r.__v_skip||!Object.isExtensible(r)?0:Lg($m(r))}function Hc(r){return Qs(r)?r:Wc(r,!1,bd,Tg,Md)}function Pg(r){return Wc(r,!1,vg,Eg,Sd)}function Td(r){return Wc(r,!0,xg,Ag,wd)}function Wc(r,e,t,n,i){if(!gt(r)||r.__v_raw&&!(e&&r.__v_isReactive))return r;const s=i.get(r);if(s)return s;const o=Rg(r);if(o===0)return r;const a=new Proxy(r,o===2?n:t);return i.set(r,a),a}function Yr(r){return Qs(r)?Yr(r.__v_raw):!!(r&&r.__v_isReactive)}function Qs(r){return!!(r&&r.__v_isReadonly)}function jl(r){return!!(r&&r.__v_isShallow)}function Ed(r){return Yr(r)||Qs(r)}function $e(r){const e=r&&r.__v_raw;return e?$e(e):r}function Ad(r){return la(r,"__v_skip",!0),r}const Xc=r=>gt(r)?Hc(r):r,jc=r=>gt(r)?Td(r):r;function Dg(r){Pi&&Rn&&(r=$e(r),xd(r.dep||(r.dep=zc())))}function Ig(r,e){r=$e(r);const t=r.dep;t&&Xl(t)}function Wt(r){return!!(r&&r.__v_isRef===!0)}function Og(r){return Wt(r)?r.value:r}const Ng={get:(r,e,t)=>Og(Reflect.get(r,e,t)),set:(r,e,t,n)=>{const i=r[e];return Wt(i)&&!Wt(t)?(i.value=t,!0):Reflect.set(r,e,t,n)}};function Cd(r){return Yr(r)?r:new Proxy(r,Ng)}var Ld;class Fg{constructor(e,t,n,i){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[Ld]=!1,this._dirty=!0,this.effect=new Bc(e,()=>{this._dirty||(this._dirty=!0,Ig(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=n}get value(){const e=$e(this);return Dg(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Ld="__v_isReadonly";function Ug(r,e,t=!1){let n,i;const s=Be(r);return s?(n=r,i=Dn):(n=r.get,i=r.set),new Fg(n,i,s||!i,t)}function Di(r,e,t,n){let i;try{i=n?r(...n):r()}catch(s){wa(s,e,t)}return i}function wn(r,e,t,n){if(Be(r)){const s=Di(r,e,t,n);return s&&dd(s)&&s.catch(o=>{wa(o,e,t)}),s}const i=[];for(let s=0;s<r.length;s++)i.push(wn(r[s],e,t,n));return i}function wa(r,e,t,n=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](r,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Di(l,null,10,[r,o,a]);return}}zg(r,t,i,n)}function zg(r,e,t,n=!0){console.error(r)}let eo=!1,ql=!1;const Pt=[];let Hn=0;const Kr=[];let ii=null,nr=0;const Rd=Promise.resolve();let qc=null;function Bg(r){const e=qc||Rd;return r?e.then(this?r.bind(this):r):e}function kg(r){let e=Hn+1,t=Pt.length;for(;e<t;){const n=e+t>>>1;to(Pt[n])<r?e=n+1:t=n}return e}function Yc(r){(!Pt.length||!Pt.includes(r,eo&&r.allowRecurse?Hn+1:Hn))&&(r.id==null?Pt.push(r):Pt.splice(kg(r.id),0,r),Pd())}function Pd(){!eo&&!ql&&(ql=!0,qc=Rd.then(Id))}function Vg(r){const e=Pt.indexOf(r);e>Hn&&Pt.splice(e,1)}function Gg(r){Fe(r)?Kr.push(...r):(!ii||!ii.includes(r,r.allowRecurse?nr+1:nr))&&Kr.push(r),Pd()}function Hu(r,e=eo?Hn+1:0){for(;e<Pt.length;e++){const t=Pt[e];t&&t.pre&&(Pt.splice(e,1),e--,t())}}function Dd(r){if(Kr.length){const e=[...new Set(Kr)];if(Kr.length=0,ii){ii.push(...e);return}for(ii=e,ii.sort((t,n)=>to(t)-to(n)),nr=0;nr<ii.length;nr++)ii[nr]();ii=null,nr=0}}const to=r=>r.id==null?1/0:r.id,Hg=(r,e)=>{const t=to(r)-to(e);if(t===0){if(r.pre&&!e.pre)return-1;if(e.pre&&!r.pre)return 1}return t};function Id(r){ql=!1,eo=!0,Pt.sort(Hg);const e=Dn;try{for(Hn=0;Hn<Pt.length;Hn++){const t=Pt[Hn];t&&t.active!==!1&&Di(t,null,14)}}finally{Hn=0,Pt.length=0,Dd(),eo=!1,qc=null,(Pt.length||Kr.length)&&Id()}}function Wg(r,e,...t){if(r.isUnmounted)return;const n=r.vnode.props||rt;let i=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in n){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=n[u]||rt;f&&(i=t.map(p=>At(p)?p.trim():p)),h&&(i=t.map(eg))}let a,l=n[a=Ha(e)]||n[a=Ha(is(e))];!l&&s&&(l=n[a=Ha(vs(e))]),l&&wn(l,r,6,i);const c=n[a+"Once"];if(c){if(!r.emitted)r.emitted={};else if(r.emitted[a])return;r.emitted[a]=!0,wn(c,r,6,i)}}function Od(r,e,t=!1){const n=e.emitsCache,i=n.get(r);if(i!==void 0)return i;const s=r.emits;let o={},a=!1;if(!Be(r)){const l=c=>{const u=Od(c,e,!0);u&&(a=!0,Ft(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),r.extends&&l(r.extends),r.mixins&&r.mixins.forEach(l)}return!s&&!a?(gt(r)&&n.set(r,null),null):(Fe(s)?s.forEach(l=>o[l]=null):Ft(o,s),gt(r)&&n.set(r,o),o)}function Ta(r,e){return!r||!ya(e)?!1:(e=e.slice(2).replace(/Once$/,""),qe(r,e[0].toLowerCase()+e.slice(1))||qe(r,vs(e))||qe(r,e))}let Pn=null,Nd=null;function ca(r){const e=Pn;return Pn=r,Nd=r&&r.type.__scopeId||null,e}function Xg(r,e=Pn,t){if(!e||r._n)return r;const n=(...i)=>{n._d&&Ju(-1);const s=ca(e);let o;try{o=r(...i)}finally{ca(s),n._d&&Ju(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function Xa(r){const{type:e,vnode:t,proxy:n,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:p,ctx:g,inheritAttrs:d}=r;let m,_;const b=ca(r);try{if(t.shapeFlag&4){const y=i||n;m=Vn(u.call(y,y,h,s,p,f,g)),_=l}else{const y=e;m=Vn(y.length>1?y(s,{attrs:l,slots:a,emit:c}):y(s,null)),_=e.props?l:jg(l)}}catch(y){wa(y,r,1),m=Ii(ui)}let x=m;if(_&&d!==!1){const y=Object.keys(_),{shapeFlag:M}=x;y.length&&M&7&&(o&&y.some(Oc)&&(_=qg(_,o)),x=zi(x,_))}return t.dirs&&(x=zi(x),x.dirs=x.dirs?x.dirs.concat(t.dirs):t.dirs),t.transition&&(x.transition=t.transition),m=x,ca(b),m}const jg=r=>{let e;for(const t in r)(t==="class"||t==="style"||ya(t))&&((e||(e={}))[t]=r[t]);return e},qg=(r,e)=>{const t={};for(const n in r)(!Oc(n)||!(n.slice(9)in e))&&(t[n]=r[n]);return t};function Yg(r,e,t){const{props:n,children:i,component:s}=r,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?Wu(n,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==n[f]&&!Ta(c,f))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?Wu(n,o,c):!0:!!o;return!1}function Wu(r,e,t){const n=Object.keys(e);if(n.length!==Object.keys(r).length)return!0;for(let i=0;i<n.length;i++){const s=n[i];if(e[s]!==r[s]&&!Ta(t,s))return!0}return!1}function Kg({vnode:r,parent:e},t){for(;e&&e.subTree===r;)(r=e.vnode).el=t,e=e.parent}const $g=r=>r.__isSuspense;function Zg(r,e){e&&e.pendingBranch?Fe(r)?e.effects.push(...r):e.effects.push(r):Gg(r)}function Jg(r,e){if(mt){let t=mt.provides;const n=mt.parent&&mt.parent.provides;n===t&&(t=mt.provides=Object.create(n)),t[r]=e}}function Jo(r,e,t=!1){const n=mt||Pn;if(n){const i=n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(i&&r in i)return i[r];if(arguments.length>1)return t&&Be(e)?e.call(n.proxy):e}}const Eo={};function ja(r,e,t){return Fd(r,e,t)}function Fd(r,e,{immediate:t,deep:n,flush:i,onTrack:s,onTrigger:o}=rt){const a=rg()===(mt==null?void 0:mt.scope)?mt:null;let l,c=!1,u=!1;if(Wt(r)?(l=()=>r.value,c=jl(r)):Yr(r)?(l=()=>r,n=!0):Fe(r)?(u=!0,c=r.some(x=>Yr(x)||jl(x)),l=()=>r.map(x=>{if(Wt(x))return x.value;if(Yr(x))return Hr(x);if(Be(x))return Di(x,a,2)})):Be(r)?e?l=()=>Di(r,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),wn(r,a,3,[f])}:l=Dn,e&&n){const x=l;l=()=>Hr(x())}let h,f=x=>{h=_.onStop=()=>{Di(x,a,4)}},p;if(no)if(f=Dn,e?t&&wn(e,a,3,[l(),u?[]:void 0,f]):l(),i==="sync"){const x=K_();p=x.__watcherHandles||(x.__watcherHandles=[])}else return Dn;let g=u?new Array(r.length).fill(Eo):Eo;const d=()=>{if(_.active)if(e){const x=_.run();(n||c||(u?x.some((y,M)=>aa(y,g[M])):aa(x,g)))&&(h&&h(),wn(e,a,3,[x,g===Eo?void 0:u&&g[0]===Eo?[]:g,f]),g=x)}else _.run()};d.allowRecurse=!!e;let m;i==="sync"?m=d:i==="post"?m=()=>qt(d,a&&a.suspense):(d.pre=!0,a&&(d.id=a.uid),m=()=>Yc(d));const _=new Bc(l,m);e?t?d():g=_.run():i==="post"?qt(_.run.bind(_),a&&a.suspense):_.run();const b=()=>{_.stop(),a&&a.scope&&Nc(a.scope.effects,_)};return p&&p.push(b),b}function Qg(r,e,t){const n=this.proxy,i=At(r)?r.includes(".")?Ud(n,r):()=>n[r]:r.bind(n,n);let s;Be(e)?s=e:(s=e.handler,t=e);const o=mt;rs(this);const a=Fd(i,s.bind(n),t);return o?rs(o):hr(),a}function Ud(r,e){const t=e.split(".");return()=>{let n=r;for(let i=0;i<t.length&&n;i++)n=n[t[i]];return n}}function Hr(r,e){if(!gt(r)||r.__v_skip||(e=e||new Set,e.has(r)))return r;if(e.add(r),Wt(r))Hr(r.value,e);else if(Fe(r))for(let t=0;t<r.length;t++)Hr(r[t],e);else if(Ym(r)||js(r))r.forEach(t=>{Hr(t,e)});else if(Zm(r))for(const t in r)Hr(r[t],e);return r}function e_(){const r={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Kc(()=>{r.isMounted=!0}),Vd(()=>{r.isUnmounting=!0}),r}const pn=[Function,Array],t_={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:pn,onEnter:pn,onAfterEnter:pn,onEnterCancelled:pn,onBeforeLeave:pn,onLeave:pn,onAfterLeave:pn,onLeaveCancelled:pn,onBeforeAppear:pn,onAppear:pn,onAfterAppear:pn,onAppearCancelled:pn},setup(r,{slots:e}){const t=V_(),n=e_();let i;return()=>{const s=e.default&&Bd(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const d of s)if(d.type!==ui){o=d;break}}const a=$e(r),{mode:l}=a;if(n.isLeaving)return qa(o);const c=Xu(o);if(!c)return qa(o);const u=Yl(c,a,n,t);Kl(c,u);const h=t.subTree,f=h&&Xu(h);let p=!1;const{getTransitionKey:g}=c.type;if(g){const d=g();i===void 0?i=d:d!==i&&(i=d,p=!0)}if(f&&f.type!==ui&&(!ir(c,f)||p)){const d=Yl(f,a,n,t);if(Kl(f,d),l==="out-in")return n.isLeaving=!0,d.afterLeave=()=>{n.isLeaving=!1,t.update.active!==!1&&t.update()},qa(o);l==="in-out"&&c.type!==ui&&(d.delayLeave=(m,_,b)=>{const x=zd(n,f);x[String(f.key)]=f,m._leaveCb=()=>{_(),m._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=b})}return o}}},n_=t_;function zd(r,e){const{leavingVNodes:t}=r;let n=t.get(e.type);return n||(n=Object.create(null),t.set(e.type,n)),n}function Yl(r,e,t,n){const{appear:i,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:p,onLeaveCancelled:g,onBeforeAppear:d,onAppear:m,onAfterAppear:_,onAppearCancelled:b}=e,x=String(r.key),y=zd(t,r),M=(v,w)=>{v&&wn(v,n,9,w)},A=(v,w)=>{const D=w[1];M(v,w),Fe(v)?v.every(W=>W.length<=1)&&D():v.length<=1&&D()},R={mode:s,persisted:o,beforeEnter(v){let w=a;if(!t.isMounted)if(i)w=d||a;else return;v._leaveCb&&v._leaveCb(!0);const D=y[x];D&&ir(r,D)&&D.el._leaveCb&&D.el._leaveCb(),M(w,[v])},enter(v){let w=l,D=c,W=u;if(!t.isMounted)if(i)w=m||l,D=_||c,W=b||u;else return;let q=!1;const N=v._enterCb=I=>{q||(q=!0,I?M(W,[v]):M(D,[v]),R.delayedLeave&&R.delayedLeave(),v._enterCb=void 0)};w?A(w,[v,N]):N()},leave(v,w){const D=String(r.key);if(v._enterCb&&v._enterCb(!0),t.isUnmounting)return w();M(h,[v]);let W=!1;const q=v._leaveCb=N=>{W||(W=!0,w(),N?M(g,[v]):M(p,[v]),v._leaveCb=void 0,y[D]===r&&delete y[D])};y[D]=r,f?A(f,[v,q]):q()},clone(v){return Yl(v,e,t,n)}};return R}function qa(r){if(Ea(r))return r=zi(r),r.children=null,r}function Xu(r){return Ea(r)?r.children?r.children[0]:void 0:r}function Kl(r,e){r.shapeFlag&6&&r.component?Kl(r.component.subTree,e):r.shapeFlag&128?(r.ssContent.transition=e.clone(r.ssContent),r.ssFallback.transition=e.clone(r.ssFallback)):r.transition=e}function Bd(r,e=!1,t){let n=[],i=0;for(let s=0;s<r.length;s++){let o=r[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===kn?(o.patchFlag&128&&i++,n=n.concat(Bd(o.children,e,a))):(e||o.type!==ui)&&n.push(a!=null?zi(o,{key:a}):o)}if(i>1)for(let s=0;s<n.length;s++)n[s].patchFlag=-2;return n}const Qo=r=>!!r.type.__asyncLoader,Ea=r=>r.type.__isKeepAlive;function i_(r,e){kd(r,"a",e)}function r_(r,e){kd(r,"da",e)}function kd(r,e,t=mt){const n=r.__wdc||(r.__wdc=()=>{let i=t;for(;i;){if(i.isDeactivated)return;i=i.parent}return r()});if(Aa(e,n,t),t){let i=t.parent;for(;i&&i.parent;)Ea(i.parent.vnode)&&s_(n,e,t,i),i=i.parent}}function s_(r,e,t,n){const i=Aa(e,r,n,!0);Gd(()=>{Nc(n[e],i)},t)}function Aa(r,e,t=mt,n=!1){if(t){const i=t[r]||(t[r]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;ys(),rs(t);const a=wn(e,t,r,o);return hr(),bs(),a});return n?i.unshift(s):i.push(s),s}}const gi=r=>(e,t=mt)=>(!no||r==="sp")&&Aa(r,(...n)=>e(...n),t),o_=gi("bm"),Kc=gi("m"),a_=gi("bu"),l_=gi("u"),Vd=gi("bum"),Gd=gi("um"),c_=gi("sp"),u_=gi("rtg"),h_=gi("rtc");function f_(r,e=mt){Aa("ec",r,e)}function Xi(r,e,t,n){const i=r.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let l=a.dir[n];l&&(ys(),wn(l,t,8,[r.el,a,r,e]),bs())}}const d_=Symbol(),$l=r=>r?Jd(r)?eu(r)||r.proxy:$l(r.parent):null,qs=Ft(Object.create(null),{$:r=>r,$el:r=>r.vnode.el,$data:r=>r.data,$props:r=>r.props,$attrs:r=>r.attrs,$slots:r=>r.slots,$refs:r=>r.refs,$parent:r=>$l(r.parent),$root:r=>$l(r.root),$emit:r=>r.emit,$options:r=>$c(r),$forceUpdate:r=>r.f||(r.f=()=>Yc(r.update)),$nextTick:r=>r.n||(r.n=Bg.bind(r.proxy)),$watch:r=>Qg.bind(r)}),Ya=(r,e)=>r!==rt&&!r.__isScriptSetup&&qe(r,e),p_={get({_:r},e){const{ctx:t,setupState:n,data:i,props:s,accessCache:o,type:a,appContext:l}=r;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return n[e];case 2:return i[e];case 4:return t[e];case 3:return s[e]}else{if(Ya(n,e))return o[e]=1,n[e];if(i!==rt&&qe(i,e))return o[e]=2,i[e];if((c=r.propsOptions[0])&&qe(c,e))return o[e]=3,s[e];if(t!==rt&&qe(t,e))return o[e]=4,t[e];Zl&&(o[e]=0)}}const u=qs[e];let h,f;if(u)return e==="$attrs"&&Qt(r,"get",e),u(r);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==rt&&qe(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,qe(f,e))return f[e]},set({_:r},e,t){const{data:n,setupState:i,ctx:s}=r;return Ya(i,e)?(i[e]=t,!0):n!==rt&&qe(n,e)?(n[e]=t,!0):qe(r.props,e)||e[0]==="$"&&e.slice(1)in r?!1:(s[e]=t,!0)},has({_:{data:r,setupState:e,accessCache:t,ctx:n,appContext:i,propsOptions:s}},o){let a;return!!t[o]||r!==rt&&qe(r,o)||Ya(e,o)||(a=s[0])&&qe(a,o)||qe(n,o)||qe(qs,o)||qe(i.config.globalProperties,o)},defineProperty(r,e,t){return t.get!=null?r._.accessCache[e]=0:qe(t,"value")&&this.set(r,e,t.value,null),Reflect.defineProperty(r,e,t)}};let Zl=!0;function m_(r){const e=$c(r),t=r.proxy,n=r.ctx;Zl=!1,e.beforeCreate&&ju(e.beforeCreate,r,"bc");const{data:i,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:p,updated:g,activated:d,deactivated:m,beforeDestroy:_,beforeUnmount:b,destroyed:x,unmounted:y,render:M,renderTracked:A,renderTriggered:R,errorCaptured:v,serverPrefetch:w,expose:D,inheritAttrs:W,components:q,directives:N,filters:I}=e;if(c&&g_(c,n,null,r.appContext.config.unwrapInjectedRef),o)for(const K in o){const V=o[K];Be(V)&&(n[K]=V.bind(t))}if(i){const K=i.call(t,t);gt(K)&&(r.data=Hc(K))}if(Zl=!0,s)for(const K in s){const V=s[K],oe=Be(V)?V.bind(t,t):Be(V.get)?V.get.bind(t,t):Dn,se=!Be(V)&&Be(V.set)?V.set.bind(t):Dn,be=q_({get:oe,set:se});Object.defineProperty(n,K,{enumerable:!0,configurable:!0,get:()=>be.value,set:B=>be.value=B})}if(a)for(const K in a)Hd(a[K],n,t,K);if(l){const K=Be(l)?l.call(t):l;Reflect.ownKeys(K).forEach(V=>{Jg(V,K[V])})}u&&ju(u,r,"c");function Y(K,V){Fe(V)?V.forEach(oe=>K(oe.bind(t))):V&&K(V.bind(t))}if(Y(o_,h),Y(Kc,f),Y(a_,p),Y(l_,g),Y(i_,d),Y(r_,m),Y(f_,v),Y(h_,A),Y(u_,R),Y(Vd,b),Y(Gd,y),Y(c_,w),Fe(D))if(D.length){const K=r.exposed||(r.exposed={});D.forEach(V=>{Object.defineProperty(K,V,{get:()=>t[V],set:oe=>t[V]=oe})})}else r.exposed||(r.exposed={});M&&r.render===Dn&&(r.render=M),W!=null&&(r.inheritAttrs=W),q&&(r.components=q),N&&(r.directives=N)}function g_(r,e,t=Dn,n=!1){Fe(r)&&(r=Jl(r));for(const i in r){const s=r[i];let o;gt(s)?"default"in s?o=Jo(s.from||i,s.default,!0):o=Jo(s.from||i):o=Jo(s),Wt(o)&&n?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function ju(r,e,t){wn(Fe(r)?r.map(n=>n.bind(e.proxy)):r.bind(e.proxy),e,t)}function Hd(r,e,t,n){const i=n.includes(".")?Ud(t,n):()=>t[n];if(At(r)){const s=e[r];Be(s)&&ja(i,s)}else if(Be(r))ja(i,r.bind(t));else if(gt(r))if(Fe(r))r.forEach(s=>Hd(s,e,t,n));else{const s=Be(r.handler)?r.handler.bind(t):e[r.handler];Be(s)&&ja(i,s,r)}}function $c(r){const e=r.type,{mixins:t,extends:n}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=r.appContext,a=s.get(e);let l;return a?l=a:!i.length&&!t&&!n?l=e:(l={},i.length&&i.forEach(c=>ua(l,c,o,!0)),ua(l,e,o)),gt(e)&&s.set(e,l),l}function ua(r,e,t,n=!1){const{mixins:i,extends:s}=e;s&&ua(r,s,t,!0),i&&i.forEach(o=>ua(r,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const a=__[o]||t&&t[o];r[o]=a?a(r[o],e[o]):e[o]}return r}const __={data:qu,props:Ji,emits:Ji,methods:Ji,computed:Ji,beforeCreate:Vt,created:Vt,beforeMount:Vt,mounted:Vt,beforeUpdate:Vt,updated:Vt,beforeDestroy:Vt,beforeUnmount:Vt,destroyed:Vt,unmounted:Vt,activated:Vt,deactivated:Vt,errorCaptured:Vt,serverPrefetch:Vt,components:Ji,directives:Ji,watch:v_,provide:qu,inject:x_};function qu(r,e){return e?r?function(){return Ft(Be(r)?r.call(this,this):r,Be(e)?e.call(this,this):e)}:e:r}function x_(r,e){return Ji(Jl(r),Jl(e))}function Jl(r){if(Fe(r)){const e={};for(let t=0;t<r.length;t++)e[r[t]]=r[t];return e}return r}function Vt(r,e){return r?[...new Set([].concat(r,e))]:e}function Ji(r,e){return r?Ft(Ft(Object.create(null),r),e):e}function v_(r,e){if(!r)return e;if(!e)return r;const t=Ft(Object.create(null),r);for(const n in e)t[n]=Vt(r[n],e[n]);return t}function y_(r,e,t,n=!1){const i={},s={};la(s,La,1),r.propsDefaults=Object.create(null),Wd(r,e,i,s);for(const o in r.propsOptions[0])o in i||(i[o]=void 0);t?r.props=n?i:Pg(i):r.type.props?r.props=i:r.props=s,r.attrs=s}function b_(r,e,t,n){const{props:i,attrs:s,vnode:{patchFlag:o}}=r,a=$e(i),[l]=r.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=r.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Ta(r.emitsOptions,f))continue;const p=e[f];if(l)if(qe(s,f))p!==s[f]&&(s[f]=p,c=!0);else{const g=is(f);i[g]=Ql(l,a,g,p,r,!1)}else p!==s[f]&&(s[f]=p,c=!0)}}}else{Wd(r,e,i,s)&&(c=!0);let u;for(const h in a)(!e||!qe(e,h)&&((u=vs(h))===h||!qe(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(i[h]=Ql(l,a,h,void 0,r,!0)):delete i[h]);if(s!==a)for(const h in s)(!e||!qe(e,h))&&(delete s[h],c=!0)}c&&fi(r,"set","$attrs")}function Wd(r,e,t,n){const[i,s]=r.propsOptions;let o=!1,a;if(e)for(let l in e){if(Zo(l))continue;const c=e[l];let u;i&&qe(i,u=is(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:Ta(r.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(s){const l=$e(t),c=a||rt;for(let u=0;u<s.length;u++){const h=s[u];t[h]=Ql(i,l,h,c[h],r,!qe(c,h))}}return o}function Ql(r,e,t,n,i,s){const o=r[t];if(o!=null){const a=qe(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&Be(l)){const{propsDefaults:c}=i;t in c?n=c[t]:(rs(i),n=c[t]=l.call(null,e),hr())}else n=l}o[0]&&(s&&!a?n=!1:o[1]&&(n===""||n===vs(t))&&(n=!0))}return n}function Xd(r,e,t=!1){const n=e.propsCache,i=n.get(r);if(i)return i;const s=r.props,o={},a=[];let l=!1;if(!Be(r)){const u=h=>{l=!0;const[f,p]=Xd(h,e,!0);Ft(o,f),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),r.extends&&u(r.extends),r.mixins&&r.mixins.forEach(u)}if(!s&&!l)return gt(r)&&n.set(r,Xs),Xs;if(Fe(s))for(let u=0;u<s.length;u++){const h=is(s[u]);Yu(h)&&(o[h]=rt)}else if(s)for(const u in s){const h=is(u);if(Yu(h)){const f=s[u],p=o[h]=Fe(f)||Be(f)?{type:f}:Object.assign({},f);if(p){const g=Zu(Boolean,p.type),d=Zu(String,p.type);p[0]=g>-1,p[1]=d<0||g<d,(g>-1||qe(p,"default"))&&a.push(h)}}}const c=[o,a];return gt(r)&&n.set(r,c),c}function Yu(r){return r[0]!=="$"}function Ku(r){const e=r&&r.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:r===null?"null":""}function $u(r,e){return Ku(r)===Ku(e)}function Zu(r,e){return Fe(e)?e.findIndex(t=>$u(t,r)):Be(e)&&$u(e,r)?0:-1}const jd=r=>r[0]==="_"||r==="$stable",Zc=r=>Fe(r)?r.map(Vn):[Vn(r)],M_=(r,e,t)=>{if(e._n)return e;const n=Xg((...i)=>Zc(e(...i)),t);return n._c=!1,n},qd=(r,e,t)=>{const n=r._ctx;for(const i in r){if(jd(i))continue;const s=r[i];if(Be(s))e[i]=M_(i,s,n);else if(s!=null){const o=Zc(s);e[i]=()=>o}}},Yd=(r,e)=>{const t=Zc(e);r.slots.default=()=>t},S_=(r,e)=>{if(r.vnode.shapeFlag&32){const t=e._;t?(r.slots=$e(e),la(e,"_",t)):qd(e,r.slots={})}else r.slots={},e&&Yd(r,e);la(r.slots,La,1)},w_=(r,e,t)=>{const{vnode:n,slots:i}=r;let s=!0,o=rt;if(n.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(Ft(i,e),!t&&a===1&&delete i._):(s=!e.$stable,qd(e,i)),o=e}else e&&(Yd(r,e),o={default:1});if(s)for(const a in i)!jd(a)&&!(a in o)&&delete i[a]};function Kd(){return{app:null,config:{isNativeTag:Xm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let T_=0;function E_(r,e){return function(n,i=null){Be(n)||(n=Object.assign({},n)),i!=null&&!gt(i)&&(i=null);const s=Kd(),o=new Set;let a=!1;const l=s.app={_uid:T_++,_component:n,_props:i,_container:null,_context:s,_instance:null,version:$_,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&Be(c.install)?(o.add(c),c.install(l,...u)):Be(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,h){if(!a){const f=Ii(n,i);return f.appContext=s,u&&e?e(f,c):r(f,c,h),a=!0,l._container=c,c.__vue_app__=l,eu(f.component)||f.component.proxy}},unmount(){a&&(r(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function ec(r,e,t,n,i=!1){if(Fe(r)){r.forEach((f,p)=>ec(f,e&&(Fe(e)?e[p]:e),t,n,i));return}if(Qo(n)&&!i)return;const s=n.shapeFlag&4?eu(n.component)||n.component.proxy:n.el,o=i?null:s,{i:a,r:l}=r,c=e&&e.r,u=a.refs===rt?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(At(c)?(u[c]=null,qe(h,c)&&(h[c]=null)):Wt(c)&&(c.value=null)),Be(l))Di(l,a,12,[o,u]);else{const f=At(l),p=Wt(l);if(f||p){const g=()=>{if(r.f){const d=f?qe(h,l)?h[l]:u[l]:l.value;i?Fe(d)&&Nc(d,s):Fe(d)?d.includes(s)||d.push(s):f?(u[l]=[s],qe(h,l)&&(h[l]=u[l])):(l.value=[s],r.k&&(u[r.k]=l.value))}else f?(u[l]=o,qe(h,l)&&(h[l]=o)):p&&(l.value=o,r.k&&(u[r.k]=o))};o?(g.id=-1,qt(g,t)):g()}}}const qt=Zg;function A_(r){return C_(r)}function C_(r,e){const t=tg();t.__VUE__=!0;const{insert:n,remove:i,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:p=Dn,insertStaticContent:g}=r,d=(C,P,j,te=null,J=null,ae=null,ue=!1,ie=null,he=!!P.dynamicChildren)=>{if(C===P)return;C&&!ir(C,P)&&(te=Me(C),B(C,J,ae,!0),C=null),P.patchFlag===-2&&(he=!1,P.dynamicChildren=null);const{type:re,ref:T,shapeFlag:S}=P;switch(re){case Ca:m(C,P,j,te);break;case ui:_(C,P,j,te);break;case ea:C==null&&b(P,j,te,ue);break;case kn:q(C,P,j,te,J,ae,ue,ie,he);break;default:S&1?M(C,P,j,te,J,ae,ue,ie,he):S&6?N(C,P,j,te,J,ae,ue,ie,he):(S&64||S&128)&&re.process(C,P,j,te,J,ae,ue,ie,he,ye)}T!=null&&J&&ec(T,C&&C.ref,ae,P||C,!P)},m=(C,P,j,te)=>{if(C==null)n(P.el=a(P.children),j,te);else{const J=P.el=C.el;P.children!==C.children&&c(J,P.children)}},_=(C,P,j,te)=>{C==null?n(P.el=l(P.children||""),j,te):P.el=C.el},b=(C,P,j,te)=>{[C.el,C.anchor]=g(C.children,P,j,te,C.el,C.anchor)},x=({el:C,anchor:P},j,te)=>{let J;for(;C&&C!==P;)J=f(C),n(C,j,te),C=J;n(P,j,te)},y=({el:C,anchor:P})=>{let j;for(;C&&C!==P;)j=f(C),i(C),C=j;i(P)},M=(C,P,j,te,J,ae,ue,ie,he)=>{ue=ue||P.type==="svg",C==null?A(P,j,te,J,ae,ue,ie,he):w(C,P,J,ae,ue,ie,he)},A=(C,P,j,te,J,ae,ue,ie)=>{let he,re;const{type:T,props:S,shapeFlag:U,transition:$,dirs:Q}=C;if(he=C.el=o(C.type,ae,S&&S.is,S),U&8?u(he,C.children):U&16&&v(C.children,he,null,te,J,ae&&T!=="foreignObject",ue,ie),Q&&Xi(C,null,te,"created"),R(he,C,C.scopeId,ue,te),S){for(const pe in S)pe!=="value"&&!Zo(pe)&&s(he,pe,null,S[pe],ae,C.children,te,J,xe);"value"in S&&s(he,"value",null,S.value),(re=S.onVnodeBeforeMount)&&Un(re,te,C)}Q&&Xi(C,null,te,"beforeMount");const ce=(!J||J&&!J.pendingBranch)&&$&&!$.persisted;ce&&$.beforeEnter(he),n(he,P,j),((re=S&&S.onVnodeMounted)||ce||Q)&&qt(()=>{re&&Un(re,te,C),ce&&$.enter(he),Q&&Xi(C,null,te,"mounted")},J)},R=(C,P,j,te,J)=>{if(j&&p(C,j),te)for(let ae=0;ae<te.length;ae++)p(C,te[ae]);if(J){let ae=J.subTree;if(P===ae){const ue=J.vnode;R(C,ue,ue.scopeId,ue.slotScopeIds,J.parent)}}},v=(C,P,j,te,J,ae,ue,ie,he=0)=>{for(let re=he;re<C.length;re++){const T=C[re]=ie?wi(C[re]):Vn(C[re]);d(null,T,P,j,te,J,ae,ue,ie)}},w=(C,P,j,te,J,ae,ue)=>{const ie=P.el=C.el;let{patchFlag:he,dynamicChildren:re,dirs:T}=P;he|=C.patchFlag&16;const S=C.props||rt,U=P.props||rt;let $;j&&ji(j,!1),($=U.onVnodeBeforeUpdate)&&Un($,j,P,C),T&&Xi(P,C,j,"beforeUpdate"),j&&ji(j,!0);const Q=J&&P.type!=="foreignObject";if(re?D(C.dynamicChildren,re,ie,j,te,Q,ae):ue||V(C,P,ie,null,j,te,Q,ae,!1),he>0){if(he&16)W(ie,P,S,U,j,te,J);else if(he&2&&S.class!==U.class&&s(ie,"class",null,U.class,J),he&4&&s(ie,"style",S.style,U.style,J),he&8){const ce=P.dynamicProps;for(let pe=0;pe<ce.length;pe++){const L=ce[pe],z=S[L],_e=U[L];(_e!==z||L==="value")&&s(ie,L,z,_e,J,C.children,j,te,xe)}}he&1&&C.children!==P.children&&u(ie,P.children)}else!ue&&re==null&&W(ie,P,S,U,j,te,J);(($=U.onVnodeUpdated)||T)&&qt(()=>{$&&Un($,j,P,C),T&&Xi(P,C,j,"updated")},te)},D=(C,P,j,te,J,ae,ue)=>{for(let ie=0;ie<P.length;ie++){const he=C[ie],re=P[ie],T=he.el&&(he.type===kn||!ir(he,re)||he.shapeFlag&70)?h(he.el):j;d(he,re,T,null,te,J,ae,ue,!0)}},W=(C,P,j,te,J,ae,ue)=>{if(j!==te){if(j!==rt)for(const ie in j)!Zo(ie)&&!(ie in te)&&s(C,ie,j[ie],null,ue,P.children,J,ae,xe);for(const ie in te){if(Zo(ie))continue;const he=te[ie],re=j[ie];he!==re&&ie!=="value"&&s(C,ie,re,he,ue,P.children,J,ae,xe)}"value"in te&&s(C,"value",j.value,te.value)}},q=(C,P,j,te,J,ae,ue,ie,he)=>{const re=P.el=C?C.el:a(""),T=P.anchor=C?C.anchor:a("");let{patchFlag:S,dynamicChildren:U,slotScopeIds:$}=P;$&&(ie=ie?ie.concat($):$),C==null?(n(re,j,te),n(T,j,te),v(P.children,j,T,J,ae,ue,ie,he)):S>0&&S&64&&U&&C.dynamicChildren?(D(C.dynamicChildren,U,j,J,ae,ue,ie),(P.key!=null||J&&P===J.subTree)&&$d(C,P,!0)):V(C,P,j,T,J,ae,ue,ie,he)},N=(C,P,j,te,J,ae,ue,ie,he)=>{P.slotScopeIds=ie,C==null?P.shapeFlag&512?J.ctx.activate(P,j,te,ue,he):I(P,j,te,J,ae,ue,he):H(C,P,he)},I=(C,P,j,te,J,ae,ue)=>{const ie=C.component=k_(C,te,J);if(Ea(C)&&(ie.ctx.renderer=ye),G_(ie),ie.asyncDep){if(J&&J.registerDep(ie,Y),!C.el){const he=ie.subTree=Ii(ui);_(null,he,P,j)}return}Y(ie,C,P,j,J,ae,ue)},H=(C,P,j)=>{const te=P.component=C.component;if(Yg(C,P,j))if(te.asyncDep&&!te.asyncResolved){K(te,P,j);return}else te.next=P,Vg(te.update),te.update();else P.el=C.el,te.vnode=P},Y=(C,P,j,te,J,ae,ue)=>{const ie=()=>{if(C.isMounted){let{next:T,bu:S,u:U,parent:$,vnode:Q}=C,ce=T,pe;ji(C,!1),T?(T.el=Q.el,K(C,T,ue)):T=Q,S&&Wa(S),(pe=T.props&&T.props.onVnodeBeforeUpdate)&&Un(pe,$,T,Q),ji(C,!0);const L=Xa(C),z=C.subTree;C.subTree=L,d(z,L,h(z.el),Me(z),C,J,ae),T.el=L.el,ce===null&&Kg(C,L.el),U&&qt(U,J),(pe=T.props&&T.props.onVnodeUpdated)&&qt(()=>Un(pe,$,T,Q),J)}else{let T;const{el:S,props:U}=P,{bm:$,m:Q,parent:ce}=C,pe=Qo(P);if(ji(C,!1),$&&Wa($),!pe&&(T=U&&U.onVnodeBeforeMount)&&Un(T,ce,P),ji(C,!0),S&&Pe){const L=()=>{C.subTree=Xa(C),Pe(S,C.subTree,C,J,null)};pe?P.type.__asyncLoader().then(()=>!C.isUnmounted&&L()):L()}else{const L=C.subTree=Xa(C);d(null,L,j,te,C,J,ae),P.el=L.el}if(Q&&qt(Q,J),!pe&&(T=U&&U.onVnodeMounted)){const L=P;qt(()=>Un(T,ce,L),J)}(P.shapeFlag&256||ce&&Qo(ce.vnode)&&ce.vnode.shapeFlag&256)&&C.a&&qt(C.a,J),C.isMounted=!0,P=j=te=null}},he=C.effect=new Bc(ie,()=>Yc(re),C.scope),re=C.update=()=>he.run();re.id=C.uid,ji(C,!0),re()},K=(C,P,j)=>{P.component=C;const te=C.vnode.props;C.vnode=P,C.next=null,b_(C,P.props,te,j),w_(C,P.children,j),ys(),Hu(),bs()},V=(C,P,j,te,J,ae,ue,ie,he=!1)=>{const re=C&&C.children,T=C?C.shapeFlag:0,S=P.children,{patchFlag:U,shapeFlag:$}=P;if(U>0){if(U&128){se(re,S,j,te,J,ae,ue,ie,he);return}else if(U&256){oe(re,S,j,te,J,ae,ue,ie,he);return}}$&8?(T&16&&xe(re,J,ae),S!==re&&u(j,S)):T&16?$&16?se(re,S,j,te,J,ae,ue,ie,he):xe(re,J,ae,!0):(T&8&&u(j,""),$&16&&v(S,j,te,J,ae,ue,ie,he))},oe=(C,P,j,te,J,ae,ue,ie,he)=>{C=C||Xs,P=P||Xs;const re=C.length,T=P.length,S=Math.min(re,T);let U;for(U=0;U<S;U++){const $=P[U]=he?wi(P[U]):Vn(P[U]);d(C[U],$,j,null,J,ae,ue,ie,he)}re>T?xe(C,J,ae,!0,!1,S):v(P,j,te,J,ae,ue,ie,he,S)},se=(C,P,j,te,J,ae,ue,ie,he)=>{let re=0;const T=P.length;let S=C.length-1,U=T-1;for(;re<=S&&re<=U;){const $=C[re],Q=P[re]=he?wi(P[re]):Vn(P[re]);if(ir($,Q))d($,Q,j,null,J,ae,ue,ie,he);else break;re++}for(;re<=S&&re<=U;){const $=C[S],Q=P[U]=he?wi(P[U]):Vn(P[U]);if(ir($,Q))d($,Q,j,null,J,ae,ue,ie,he);else break;S--,U--}if(re>S){if(re<=U){const $=U+1,Q=$<T?P[$].el:te;for(;re<=U;)d(null,P[re]=he?wi(P[re]):Vn(P[re]),j,Q,J,ae,ue,ie,he),re++}}else if(re>U)for(;re<=S;)B(C[re],J,ae,!0),re++;else{const $=re,Q=re,ce=new Map;for(re=Q;re<=U;re++){const ve=P[re]=he?wi(P[re]):Vn(P[re]);ve.key!=null&&ce.set(ve.key,re)}let pe,L=0;const z=U-Q+1;let _e=!1,me=0;const we=new Array(z);for(re=0;re<z;re++)we[re]=0;for(re=$;re<=S;re++){const ve=C[re];if(L>=z){B(ve,J,ae,!0);continue}let Re;if(ve.key!=null)Re=ce.get(ve.key);else for(pe=Q;pe<=U;pe++)if(we[pe-Q]===0&&ir(ve,P[pe])){Re=pe;break}Re===void 0?B(ve,J,ae,!0):(we[Re-Q]=re+1,Re>=me?me=Re:_e=!0,d(ve,P[Re],j,null,J,ae,ue,ie,he),L++)}const Ae=_e?L_(we):Xs;for(pe=Ae.length-1,re=z-1;re>=0;re--){const ve=Q+re,Re=P[ve],Ve=ve+1<T?P[ve+1].el:te;we[re]===0?d(null,Re,j,Ve,J,ae,ue,ie,he):_e&&(pe<0||re!==Ae[pe]?be(Re,j,Ve,2):pe--)}}},be=(C,P,j,te,J=null)=>{const{el:ae,type:ue,transition:ie,children:he,shapeFlag:re}=C;if(re&6){be(C.component.subTree,P,j,te);return}if(re&128){C.suspense.move(P,j,te);return}if(re&64){ue.move(C,P,j,ye);return}if(ue===kn){n(ae,P,j);for(let S=0;S<he.length;S++)be(he[S],P,j,te);n(C.anchor,P,j);return}if(ue===ea){x(C,P,j);return}if(te!==2&&re&1&&ie)if(te===0)ie.beforeEnter(ae),n(ae,P,j),qt(()=>ie.enter(ae),J);else{const{leave:S,delayLeave:U,afterLeave:$}=ie,Q=()=>n(ae,P,j),ce=()=>{S(ae,()=>{Q(),$&&$()})};U?U(ae,Q,ce):ce()}else n(ae,P,j)},B=(C,P,j,te=!1,J=!1)=>{const{type:ae,props:ue,ref:ie,children:he,dynamicChildren:re,shapeFlag:T,patchFlag:S,dirs:U}=C;if(ie!=null&&ec(ie,null,j,C,!0),T&256){P.ctx.deactivate(C);return}const $=T&1&&U,Q=!Qo(C);let ce;if(Q&&(ce=ue&&ue.onVnodeBeforeUnmount)&&Un(ce,P,C),T&6)k(C.component,j,te);else{if(T&128){C.suspense.unmount(j,te);return}$&&Xi(C,null,P,"beforeUnmount"),T&64?C.type.remove(C,P,j,J,ye,te):re&&(ae!==kn||S>0&&S&64)?xe(re,P,j,!1,!0):(ae===kn&&S&384||!J&&T&16)&&xe(he,P,j),te&&le(C)}(Q&&(ce=ue&&ue.onVnodeUnmounted)||$)&&qt(()=>{ce&&Un(ce,P,C),$&&Xi(C,null,P,"unmounted")},j)},le=C=>{const{type:P,el:j,anchor:te,transition:J}=C;if(P===kn){de(j,te);return}if(P===ea){y(C);return}const ae=()=>{i(j),J&&!J.persisted&&J.afterLeave&&J.afterLeave()};if(C.shapeFlag&1&&J&&!J.persisted){const{leave:ue,delayLeave:ie}=J,he=()=>ue(j,ae);ie?ie(C.el,ae,he):he()}else ae()},de=(C,P)=>{let j;for(;C!==P;)j=f(C),i(C),C=j;i(P)},k=(C,P,j)=>{const{bum:te,scope:J,update:ae,subTree:ue,um:ie}=C;te&&Wa(te),J.stop(),ae&&(ae.active=!1,B(ue,C,P,j)),ie&&qt(ie,P),qt(()=>{C.isUnmounted=!0},P),P&&P.pendingBranch&&!P.isUnmounted&&C.asyncDep&&!C.asyncResolved&&C.suspenseId===P.pendingId&&(P.deps--,P.deps===0&&P.resolve())},xe=(C,P,j,te=!1,J=!1,ae=0)=>{for(let ue=ae;ue<C.length;ue++)B(C[ue],P,j,te,J)},Me=C=>C.shapeFlag&6?Me(C.component.subTree):C.shapeFlag&128?C.suspense.next():f(C.anchor||C.el),Te=(C,P,j)=>{C==null?P._vnode&&B(P._vnode,null,null,!0):d(P._vnode||null,C,P,null,null,null,j),Hu(),Dd(),P._vnode=C},ye={p:d,um:B,m:be,r:le,mt:I,mc:v,pc:V,pbc:D,n:Me,o:r};let Ce,Pe;return e&&([Ce,Pe]=e(ye)),{render:Te,hydrate:Ce,createApp:E_(Te,Ce)}}function ji({effect:r,update:e},t){r.allowRecurse=e.allowRecurse=t}function $d(r,e,t=!1){const n=r.children,i=e.children;if(Fe(n)&&Fe(i))for(let s=0;s<n.length;s++){const o=n[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=wi(i[s]),a.el=o.el),t||$d(o,a)),a.type===Ca&&(a.el=o.el)}}function L_(r){const e=r.slice(),t=[0];let n,i,s,o,a;const l=r.length;for(n=0;n<l;n++){const c=r[n];if(c!==0){if(i=t[t.length-1],r[i]<c){e[n]=i,t.push(n);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,r[t[a]]<c?s=a+1:o=a;c<r[t[s]]&&(s>0&&(e[n]=t[s-1]),t[s]=n)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}const R_=r=>r.__isTeleport,kn=Symbol(void 0),Ca=Symbol(void 0),ui=Symbol(void 0),ea=Symbol(void 0);let Wr=null,Jc=1;function Ju(r){Jc+=r}function P_(r){return r?r.__v_isVNode===!0:!1}function ir(r,e){return r.type===e.type&&r.key===e.key}const La="__vInternal",Zd=({key:r})=>r??null,ta=({ref:r,ref_key:e,ref_for:t})=>r!=null?At(r)||Wt(r)||Be(r)?{i:Pn,r,k:e,f:!!t}:r:null;function D_(r,e=null,t=null,n=0,i=null,s=r===kn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:r,props:e,key:e&&Zd(e),ref:e&&ta(e),scopeId:Nd,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Pn};return a?(Qc(l,t),s&128&&r.normalize(l)):t&&(l.shapeFlag|=At(t)?8:16),Jc>0&&!o&&Wr&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Wr.push(l),l}const Ii=I_;function I_(r,e=null,t=null,n=0,i=null,s=!1){if((!r||r===d_)&&(r=ui),P_(r)){const a=zi(r,e,!0);return t&&Qc(a,t),Jc>0&&!s&&Wr&&(a.shapeFlag&6?Wr[Wr.indexOf(r)]=a:Wr.push(a)),a.patchFlag|=-2,a}if(j_(r)&&(r=r.__vccOpts),e){e=O_(e);let{class:a,style:l}=e;a&&!At(a)&&(e.class=Ic(a)),gt(l)&&(Ed(l)&&!Fe(l)&&(l=Ft({},l)),e.style=Dc(l))}const o=At(r)?1:$g(r)?128:R_(r)?64:gt(r)?4:Be(r)?2:0;return D_(r,e,t,n,i,o,s,!0)}function O_(r){return r?Ed(r)||La in r?Ft({},r):r:null}function zi(r,e,t=!1){const{props:n,ref:i,patchFlag:s,children:o}=r,a=e?U_(n||{},e):n;return{__v_isVNode:!0,__v_skip:!0,type:r.type,props:a,key:a&&Zd(a),ref:e&&e.ref?t&&i?Fe(i)?i.concat(ta(e)):[i,ta(e)]:ta(e):i,scopeId:r.scopeId,slotScopeIds:r.slotScopeIds,children:o,target:r.target,targetAnchor:r.targetAnchor,staticCount:r.staticCount,shapeFlag:r.shapeFlag,patchFlag:e&&r.type!==kn?s===-1?16:s|16:s,dynamicProps:r.dynamicProps,dynamicChildren:r.dynamicChildren,appContext:r.appContext,dirs:r.dirs,transition:r.transition,component:r.component,suspense:r.suspense,ssContent:r.ssContent&&zi(r.ssContent),ssFallback:r.ssFallback&&zi(r.ssFallback),el:r.el,anchor:r.anchor,ctx:r.ctx,ce:r.ce}}function N_(r=" ",e=0){return Ii(Ca,null,r,e)}function F_(r,e){const t=Ii(ea,null,r);return t.staticCount=e,t}function Vn(r){return r==null||typeof r=="boolean"?Ii(ui):Fe(r)?Ii(kn,null,r.slice()):typeof r=="object"?wi(r):Ii(Ca,null,String(r))}function wi(r){return r.el===null&&r.patchFlag!==-1||r.memo?r:zi(r)}function Qc(r,e){let t=0;const{shapeFlag:n}=r;if(e==null)e=null;else if(Fe(e))t=16;else if(typeof e=="object")if(n&65){const i=e.default;i&&(i._c&&(i._d=!1),Qc(r,i()),i._c&&(i._d=!0));return}else{t=32;const i=e._;!i&&!(La in e)?e._ctx=Pn:i===3&&Pn&&(Pn.slots._===1?e._=1:(e._=2,r.patchFlag|=1024))}else Be(e)?(e={default:e,_ctx:Pn},t=32):(e=String(e),n&64?(t=16,e=[N_(e)]):t=8);r.children=e,r.shapeFlag|=t}function U_(...r){const e={};for(let t=0;t<r.length;t++){const n=r[t];for(const i in n)if(i==="class")e.class!==n.class&&(e.class=Ic([e.class,n.class]));else if(i==="style")e.style=Dc([e.style,n.style]);else if(ya(i)){const s=e[i],o=n[i];o&&s!==o&&!(Fe(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=n[i])}return e}function Un(r,e,t,n=null){wn(r,e,7,[t,n])}const z_=Kd();let B_=0;function k_(r,e,t){const n=r.type,i=(e?e.appContext:r.appContext)||z_,s={uid:B_++,vnode:r,type:n,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new ng(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Xd(n,i),emitsOptions:Od(n,i),emit:null,emitted:null,propsDefaults:rt,inheritAttrs:n.inheritAttrs,ctx:rt,data:rt,props:rt,attrs:rt,slots:rt,refs:rt,setupState:rt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Wg.bind(null,s),r.ce&&r.ce(s),s}let mt=null;const V_=()=>mt||Pn,rs=r=>{mt=r,r.scope.on()},hr=()=>{mt&&mt.scope.off(),mt=null};function Jd(r){return r.vnode.shapeFlag&4}let no=!1;function G_(r,e=!1){no=e;const{props:t,children:n}=r.vnode,i=Jd(r);y_(r,t,i,e),S_(r,n);const s=i?H_(r,e):void 0;return no=!1,s}function H_(r,e){const t=r.type;r.accessCache=Object.create(null),r.proxy=Ad(new Proxy(r.ctx,p_));const{setup:n}=t;if(n){const i=r.setupContext=n.length>1?X_(r):null;rs(r),ys();const s=Di(n,r,0,[r.props,i]);if(bs(),hr(),dd(s)){if(s.then(hr,hr),e)return s.then(o=>{Qu(r,o,e)}).catch(o=>{wa(o,r,0)});r.asyncDep=s}else Qu(r,s,e)}else Qd(r,e)}function Qu(r,e,t){Be(e)?r.type.__ssrInlineRender?r.ssrRender=e:r.render=e:gt(e)&&(r.setupState=Cd(e)),Qd(r,t)}let eh;function Qd(r,e,t){const n=r.type;if(!r.render){if(!e&&eh&&!n.render){const i=n.template||$c(r).template;if(i){const{isCustomElement:s,compilerOptions:o}=r.appContext.config,{delimiters:a,compilerOptions:l}=n,c=Ft(Ft({isCustomElement:s,delimiters:a},o),l);n.render=eh(i,c)}}r.render=n.render||Dn}rs(r),ys(),m_(r),bs(),hr()}function W_(r){return new Proxy(r.attrs,{get(e,t){return Qt(r,"get","$attrs"),e[t]}})}function X_(r){const e=n=>{r.exposed=n||{}};let t;return{get attrs(){return t||(t=W_(r))},slots:r.slots,emit:r.emit,expose:e}}function eu(r){if(r.exposed)return r.exposeProxy||(r.exposeProxy=new Proxy(Cd(Ad(r.exposed)),{get(e,t){if(t in e)return e[t];if(t in qs)return qs[t](r)},has(e,t){return t in e||t in qs}}))}function j_(r){return Be(r)&&"__vccOpts"in r}const q_=(r,e)=>Ug(r,e,no),Y_=Symbol(""),K_=()=>Jo(Y_),$_="3.2.47",Z_="http://www.w3.org/2000/svg",rr=typeof document<"u"?document:null,th=rr&&rr.createElement("template"),J_={insert:(r,e,t)=>{e.insertBefore(r,t||null)},remove:r=>{const e=r.parentNode;e&&e.removeChild(r)},createElement:(r,e,t,n)=>{const i=e?rr.createElementNS(Z_,r):rr.createElement(r,t?{is:t}:void 0);return r==="select"&&n&&n.multiple!=null&&i.setAttribute("multiple",n.multiple),i},createText:r=>rr.createTextNode(r),createComment:r=>rr.createComment(r),setText:(r,e)=>{r.nodeValue=e},setElementText:(r,e)=>{r.textContent=e},parentNode:r=>r.parentNode,nextSibling:r=>r.nextSibling,querySelector:r=>rr.querySelector(r),setScopeId(r,e){r.setAttribute(e,"")},insertStaticContent(r,e,t,n,i,s){const o=t?t.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),t),!(i===s||!(i=i.nextSibling)););else{th.innerHTML=n?`<svg>${r}</svg>`:r;const a=th.content;if(n){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function Q_(r,e,t){const n=r._vtc;n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?r.removeAttribute("class"):t?r.setAttribute("class",e):r.className=e}function e0(r,e,t){const n=r.style,i=At(t);if(t&&!i){if(e&&!At(e))for(const s in e)t[s]==null&&tc(n,s,"");for(const s in t)tc(n,s,t[s])}else{const s=n.display;i?e!==t&&(n.cssText=t):e&&r.removeAttribute("style"),"_vod"in r&&(n.display=s)}}const nh=/\s*!important$/;function tc(r,e,t){if(Fe(t))t.forEach(n=>tc(r,e,n));else if(t==null&&(t=""),e.startsWith("--"))r.setProperty(e,t);else{const n=t0(r,e);nh.test(t)?r.setProperty(vs(n),t.replace(nh,""),"important"):r[n]=t}}const ih=["Webkit","Moz","ms"],Ka={};function t0(r,e){const t=Ka[e];if(t)return t;let n=is(e);if(n!=="filter"&&n in r)return Ka[e]=n;n=pd(n);for(let i=0;i<ih.length;i++){const s=ih[i]+n;if(s in r)return Ka[e]=s}return e}const rh="http://www.w3.org/1999/xlink";function n0(r,e,t,n,i){if(n&&e.startsWith("xlink:"))t==null?r.removeAttributeNS(rh,e.slice(6,e.length)):r.setAttributeNS(rh,e,t);else{const s=Wm(e);t==null||s&&!fd(t)?r.removeAttribute(e):r.setAttribute(e,s?"":t)}}function i0(r,e,t,n,i,s,o){if(e==="innerHTML"||e==="textContent"){n&&o(n,i,s),r[e]=t??"";return}if(e==="value"&&r.tagName!=="PROGRESS"&&!r.tagName.includes("-")){r._value=t;const l=t??"";(r.value!==l||r.tagName==="OPTION")&&(r.value=l),t==null&&r.removeAttribute(e);return}let a=!1;if(t===""||t==null){const l=typeof r[e];l==="boolean"?t=fd(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{r[e]=t}catch{}a&&r.removeAttribute(e)}function r0(r,e,t,n){r.addEventListener(e,t,n)}function s0(r,e,t,n){r.removeEventListener(e,t,n)}function o0(r,e,t,n,i=null){const s=r._vei||(r._vei={}),o=s[e];if(n&&o)o.value=n;else{const[a,l]=a0(e);if(n){const c=s[e]=u0(n,i);r0(r,a,c,l)}else o&&(s0(r,a,o,l),s[e]=void 0)}}const sh=/(?:Once|Passive|Capture)$/;function a0(r){let e;if(sh.test(r)){e={};let n;for(;n=r.match(sh);)r=r.slice(0,r.length-n[0].length),e[n[0].toLowerCase()]=!0}return[r[2]===":"?r.slice(3):vs(r.slice(2)),e]}let $a=0;const l0=Promise.resolve(),c0=()=>$a||(l0.then(()=>$a=0),$a=Date.now());function u0(r,e){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;wn(h0(n,t.value),e,5,[n])};return t.value=r,t.attached=c0(),t}function h0(r,e){if(Fe(e)){const t=r.stopImmediatePropagation;return r.stopImmediatePropagation=()=>{t.call(r),r._stopped=!0},e.map(n=>i=>!i._stopped&&n&&n(i))}else return e}const oh=/^on[a-z]/,f0=(r,e,t,n,i=!1,s,o,a,l)=>{e==="class"?Q_(r,n,i):e==="style"?e0(r,t,n):ya(e)?Oc(e)||o0(r,e,t,n,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):d0(r,e,n,i))?i0(r,e,n,s,o,a,l):(e==="true-value"?r._trueValue=n:e==="false-value"&&(r._falseValue=n),n0(r,e,n,i))};function d0(r,e,t,n){return n?!!(e==="innerHTML"||e==="textContent"||e in r&&oh.test(e)&&Be(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&r.tagName==="INPUT"||e==="type"&&r.tagName==="TEXTAREA"||oh.test(e)&&At(t)?!1:e in r}const p0={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};n_.props;const m0=Ft({patchProp:f0},J_);let ah;function g0(){return ah||(ah=A_(m0))}const _0=(...r)=>{const e=g0().createApp(...r),{mount:t}=e;return e.mount=n=>{const i=x0(n);if(!i)return;const s=e._component;!Be(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=t(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function x0(r){return At(r)?document.querySelector(r):r}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const tu="150",Er={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ar={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},v0=0,lh=1,y0=2,ep=1,b0=2,Vs=3,di=0,ln=1,ai=2,Oi=0,$r=1,ch=2,uh=3,hh=4,M0=5,Gr=100,S0=101,w0=102,fh=103,dh=104,T0=200,E0=201,A0=202,C0=203,tp=204,np=205,L0=206,R0=207,P0=208,D0=209,I0=210,O0=0,N0=1,F0=2,nc=3,U0=4,z0=5,B0=6,k0=7,ip=0,V0=1,G0=2,hi=0,H0=1,W0=2,X0=3,j0=4,q0=5,rp=300,ss=301,os=302,ic=303,rc=304,Ra=306,as=1e3,vn=1001,ha=1002,St=1003,sc=1004,na=1005,Yt=1006,sp=1007,gr=1008,_r=1009,Y0=1010,K0=1011,op=1012,$0=1013,or=1014,Ei=1015,io=1016,Z0=1017,J0=1018,Zr=1020,Q0=1021,yn=1023,ex=1024,tx=1025,fr=1026,ls=1027,nx=1028,ix=1029,rx=1030,sx=1031,ox=1033,Za=33776,Ja=33777,Qa=33778,el=33779,ph=35840,mh=35841,gh=35842,_h=35843,ax=36196,xh=37492,vh=37496,yh=37808,bh=37809,Mh=37810,Sh=37811,wh=37812,Th=37813,Eh=37814,Ah=37815,Ch=37816,Lh=37817,Rh=37818,Ph=37819,Dh=37820,Ih=37821,tl=36492,lx=36283,Oh=36284,Nh=36285,Fh=36286,ro=2300,cs=2301,nl=2302,Uh=2400,zh=2401,Bh=2402,cx=2500,ux=0,ap=1,oc=2,xr=3e3,Ke=3001,hx=3200,fx=3201,lp=0,dx=1,Bn="srgb",so="srgb-linear",cp="display-p3",il=7680,px=519,ac=35044,kh="300 es",lc=1035;class Sr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Vh=1234567;const Ys=Math.PI/180,oo=180/Math.PI;function In(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ct[r&255]+Ct[r>>8&255]+Ct[r>>16&255]+Ct[r>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[t&63|128]+Ct[t>>8&255]+"-"+Ct[t>>16&255]+Ct[t>>24&255]+Ct[n&255]+Ct[n>>8&255]+Ct[n>>16&255]+Ct[n>>24&255]).toLowerCase()}function Rt(r,e,t){return Math.max(e,Math.min(t,r))}function nu(r,e){return(r%e+e)%e}function mx(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function gx(r,e,t){return r!==e?(t-r)/(e-r):0}function Ks(r,e,t){return(1-t)*r+t*e}function _x(r,e,t,n){return Ks(r,e,1-Math.exp(-t*n))}function xx(r,e=1){return e-Math.abs(nu(r,e*2)-e)}function vx(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function yx(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function bx(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Mx(r,e){return r+Math.random()*(e-r)}function Sx(r){return r*(.5-Math.random())}function wx(r){r!==void 0&&(Vh=r);let e=Vh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Tx(r){return r*Ys}function Ex(r){return r*oo}function cc(r){return(r&r-1)===0&&r!==0}function up(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function hp(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Ax(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),f=o((e-n)/2),p=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*h,l*f,a*c);break;case"YZY":r.set(l*f,a*u,l*h,a*c);break;case"ZXZ":r.set(l*h,l*f,a*u,a*c);break;case"XZX":r.set(a*u,l*g,l*p,a*c);break;case"YXY":r.set(l*p,a*u,l*g,a*c);break;case"ZYZ":r.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function li(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function et(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Cx={DEG2RAD:Ys,RAD2DEG:oo,generateUUID:In,clamp:Rt,euclideanModulo:nu,mapLinear:mx,inverseLerp:gx,lerp:Ks,damp:_x,pingpong:xx,smoothstep:vx,smootherstep:yx,randInt:bx,randFloat:Mx,randFloatSpread:Sx,seededRandom:wx,degToRad:Tx,radToDeg:Ex,isPowerOfTwo:cc,ceilPowerOfTwo:up,floorPowerOfTwo:hp,setQuaternionFromProperEuler:Ax,normalize:et,denormalize:li};class Ie{constructor(e=0,t=0){Ie.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xt{constructor(){Xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],g=n[8],d=i[0],m=i[3],_=i[6],b=i[1],x=i[4],y=i[7],M=i[2],A=i[5],R=i[8];return s[0]=o*d+a*b+l*M,s[3]=o*m+a*x+l*A,s[6]=o*_+a*y+l*R,s[1]=c*d+u*b+h*M,s[4]=c*m+u*x+h*A,s[7]=c*_+u*y+h*R,s[2]=f*d+p*b+g*M,s[5]=f*m+p*x+g*A,s[8]=f*_+p*y+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,p=c*s-o*l,g=t*h+n*f+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/g;return e[0]=h*d,e[1]=(i*c-u*n)*d,e[2]=(a*n-i*o)*d,e[3]=f*d,e[4]=(u*t-i*l)*d,e[5]=(i*s-a*t)*d,e[6]=p*d,e[7]=(n*l-c*t)*d,e[8]=(o*t-n*s)*d,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(rl.makeScale(e,t)),this}rotate(e){return this.premultiply(rl.makeRotation(-e)),this}translate(e,t){return this.premultiply(rl.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const rl=new Xt;function fp(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ao(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}class qn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=s[o+0],p=s[o+1],g=s[o+2],d=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=d;return}if(h!==d||l!==f||c!==p||u!==g){let m=1-a;const _=l*f+c*p+u*g+h*d,b=_>=0?1:-1,x=1-_*_;if(x>Number.EPSILON){const M=Math.sqrt(x),A=Math.atan2(M,_*b);m=Math.sin(m*A)/M,a=Math.sin(a*A)/M}const y=a*b;if(l=l*m+f*y,c=c*m+p*y,u=u*m+g*y,h=h*m+d*y,m===1-a){const M=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=M,c*=M,u*=M,h*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*p-c*f,e[t+1]=l*g+u*f+c*h-a*p,e[t+2]=c*g+u*p+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),f=l(n/2),p=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-i)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(s-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(o-i)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,n=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*i-a*n,u=l*n+a*t-s*i,h=l*i+s*n-o*t,f=-s*t-o*n-a*i;return this.x=c*l+f*-s+u*-a-h*-o,this.y=u*l+f*-o+h*-s-c*-a,this.z=h*l+f*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return sl.copy(this).projectOnVector(e),this.sub(sl)}reflect(e){return this.sub(sl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sl=new F,Gh=new qn;function Jr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ol(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Lx=new Xt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Rx=new Xt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),Ai=new F;function Px(r){return r.convertSRGBToLinear(),Ai.set(r.r,r.g,r.b).applyMatrix3(Rx),r.setRGB(Ai.x,Ai.y,Ai.z)}function Dx(r){return Ai.set(r.r,r.g,r.b).applyMatrix3(Lx),r.setRGB(Ai.x,Ai.y,Ai.z).convertLinearToSRGB()}const Ix={[so]:r=>r,[Bn]:r=>r.convertSRGBToLinear(),[cp]:Px},Ox={[so]:r=>r,[Bn]:r=>r.convertLinearToSRGB(),[cp]:Dx},Bt={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return so},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=Ix[e],i=Ox[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}};let Cr;class dp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Cr===void 0&&(Cr=ao("canvas")),Cr.width=e.width,Cr.height=e.height;const n=Cr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Cr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ao("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Jr(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Jr(t[n]/255)*255):t[n]=Jr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class pp{constructor(e=null){this.isSource=!0,this.uuid=In(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(al(i[o].image)):s.push(al(i[o]))}else s=al(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function al(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?dp.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Nx=0;class Et extends Sr{constructor(e=Et.DEFAULT_IMAGE,t=Et.DEFAULT_MAPPING,n=vn,i=vn,s=Yt,o=gr,a=yn,l=_r,c=Et.DEFAULT_ANISOTROPY,u=xr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nx++}),this.uuid=In(),this.name="",this.source=new pp(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case as:e.x=e.x-Math.floor(e.x);break;case vn:e.x=e.x<0?0:1;break;case ha:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case as:e.y=e.y-Math.floor(e.y);break;case vn:e.y=e.y<0?0:1;break;case ha:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Et.DEFAULT_IMAGE=null;Et.DEFAULT_MAPPING=rp;Et.DEFAULT_ANISOTROPY=1;class nt{constructor(e=0,t=0,n=0,i=1){nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],d=l[2],m=l[6],_=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-d)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+d)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,y=(p+1)/2,M=(_+1)/2,A=(u+f)/4,R=(h+d)/4,v=(g+m)/4;return x>y&&x>M?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=A/n,s=R/n):y>M?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=A/i,s=v/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=R/s,i=v/s),this.set(n,i,s,t),this}let b=Math.sqrt((m-g)*(m-g)+(h-d)*(h-d)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(h-d)/b,this.z=(f-u)/b,this.w=Math.acos((c+p+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vr extends Sr{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Et(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Yt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new pp(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mp extends Et{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=St,this.minFilter=St,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fx extends Et{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=St,this.minFilter=St,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ms{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],f=e[l+2];u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>s&&(s=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),f=e.getZ(l);u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>s&&(s=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=qi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)qi.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(qi)}else n.boundingBox===null&&n.computeBoundingBox(),ll.copy(n.boundingBox),ll.applyMatrix4(e.matrixWorld),this.union(ll);const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,qi),qi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cs),Ao.subVectors(this.max,Cs),Lr.subVectors(e.a,Cs),Rr.subVectors(e.b,Cs),Pr.subVectors(e.c,Cs),xi.subVectors(Rr,Lr),vi.subVectors(Pr,Rr),Yi.subVectors(Lr,Pr);let t=[0,-xi.z,xi.y,0,-vi.z,vi.y,0,-Yi.z,Yi.y,xi.z,0,-xi.x,vi.z,0,-vi.x,Yi.z,0,-Yi.x,-xi.y,xi.x,0,-vi.y,vi.x,0,-Yi.y,Yi.x,0];return!cl(t,Lr,Rr,Pr,Ao)||(t=[1,0,0,0,1,0,0,0,1],!cl(t,Lr,Rr,Pr,Ao))?!1:(Co.crossVectors(xi,vi),t=[Co.x,Co.y,Co.z],cl(t,Lr,Rr,Pr,Ao))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zn=[new F,new F,new F,new F,new F,new F,new F,new F],qi=new F,ll=new Ms,Lr=new F,Rr=new F,Pr=new F,xi=new F,vi=new F,Yi=new F,Cs=new F,Ao=new F,Co=new F,Ki=new F;function cl(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Ki.fromArray(r,s);const a=i.x*Math.abs(Ki.x)+i.y*Math.abs(Ki.y)+i.z*Math.abs(Ki.z),l=e.dot(Ki),c=t.dot(Ki),u=n.dot(Ki);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Ux=new Ms,Ls=new F,ul=new F;class Ss{constructor(e=new F,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ux.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ls.subVectors(e,this.center);const t=Ls.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ls,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ul.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ls.copy(e.center).add(ul)),this.expandByPoint(Ls.copy(e.center).sub(ul))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Jn=new F,hl=new F,Lo=new F,yi=new F,fl=new F,Ro=new F,dl=new F;class iu{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Jn.copy(this.origin).addScaledVector(this.direction,t),Jn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){hl.copy(e).add(t).multiplyScalar(.5),Lo.copy(t).sub(e).normalize(),yi.copy(this.origin).sub(hl);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Lo),a=yi.dot(this.direction),l=-yi.dot(Lo),c=yi.lengthSq(),u=Math.abs(1-o*o);let h,f,p,g;if(u>0)if(h=o*l-a,f=o*a-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const d=1/u;h*=d,f*=d,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(hl).addScaledVector(Lo,f),p}intersectSphere(e,t){Jn.subVectors(e.center,this.origin);const n=Jn.dot(this.direction),i=Jn.dot(Jn)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Jn)!==null}intersectTriangle(e,t,n,i,s){fl.subVectors(t,e),Ro.subVectors(n,e),dl.crossVectors(fl,Ro);let o=this.direction.dot(dl),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;yi.subVectors(this.origin,e);const l=a*this.direction.dot(Ro.crossVectors(yi,Ro));if(l<0)return null;const c=a*this.direction.dot(fl.cross(yi));if(c<0||l+c>o)return null;const u=-a*yi.dot(dl);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ke{constructor(){ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,o,a,l,c,u,h,f,p,g,d,m){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=s,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=u,_[10]=h,_[14]=f,_[3]=p,_[7]=g,_[11]=d,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ke().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Dr.setFromMatrixColumn(e,0).length(),s=1/Dr.setFromMatrixColumn(e,1).length(),o=1/Dr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*h,g=a*u,d=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=f-d*c,t[9]=-a*l,t[2]=d-f*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,g=c*u,d=c*h;t[0]=f+d*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=d+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,g=c*u,d=c*h;t[0]=f-d*a,t[4]=-o*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=d-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*h,g=a*u,d=a*h;t[0]=l*u,t[4]=g*c-p,t[8]=f*c+d,t[1]=l*h,t[5]=d*c+f,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,g=a*l,d=a*c;t[0]=l*u,t[4]=d-f*h,t[8]=g*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+g,t[10]=f-d*h}else if(e.order==="XZY"){const f=o*l,p=o*c,g=a*l,d=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+d,t[5]=o*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*u,t[10]=d*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zx,e,Bx)}lookAt(e,t,n){const i=this.elements;return nn.subVectors(e,t),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),bi.crossVectors(n,nn),bi.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),bi.crossVectors(n,nn)),bi.normalize(),Po.crossVectors(nn,bi),i[0]=bi.x,i[4]=Po.x,i[8]=nn.x,i[1]=bi.y,i[5]=Po.y,i[9]=nn.y,i[2]=bi.z,i[6]=Po.z,i[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],g=n[2],d=n[6],m=n[10],_=n[14],b=n[3],x=n[7],y=n[11],M=n[15],A=i[0],R=i[4],v=i[8],w=i[12],D=i[1],W=i[5],q=i[9],N=i[13],I=i[2],H=i[6],Y=i[10],K=i[14],V=i[3],oe=i[7],se=i[11],be=i[15];return s[0]=o*A+a*D+l*I+c*V,s[4]=o*R+a*W+l*H+c*oe,s[8]=o*v+a*q+l*Y+c*se,s[12]=o*w+a*N+l*K+c*be,s[1]=u*A+h*D+f*I+p*V,s[5]=u*R+h*W+f*H+p*oe,s[9]=u*v+h*q+f*Y+p*se,s[13]=u*w+h*N+f*K+p*be,s[2]=g*A+d*D+m*I+_*V,s[6]=g*R+d*W+m*H+_*oe,s[10]=g*v+d*q+m*Y+_*se,s[14]=g*w+d*N+m*K+_*be,s[3]=b*A+x*D+y*I+M*V,s[7]=b*R+x*W+y*H+M*oe,s[11]=b*v+x*q+y*Y+M*se,s[15]=b*w+x*N+y*K+M*be,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],g=e[3],d=e[7],m=e[11],_=e[15];return g*(+s*l*h-i*c*h-s*a*f+n*c*f+i*a*p-n*l*p)+d*(+t*l*p-t*c*f+s*o*f-i*o*p+i*c*u-s*l*u)+m*(+t*c*h-t*a*p-s*o*h+n*o*p+s*a*u-n*c*u)+_*(-i*a*u-t*l*h+t*a*f+i*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],g=e[12],d=e[13],m=e[14],_=e[15],b=h*m*c-d*f*c+d*l*p-a*m*p-h*l*_+a*f*_,x=g*f*c-u*m*c-g*l*p+o*m*p+u*l*_-o*f*_,y=u*d*c-g*h*c+g*a*p-o*d*p-u*a*_+o*h*_,M=g*h*l-u*d*l-g*a*f+o*d*f+u*a*m-o*h*m,A=t*b+n*x+i*y+s*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=b*R,e[1]=(d*f*s-h*m*s-d*i*p+n*m*p+h*i*_-n*f*_)*R,e[2]=(a*m*s-d*l*s+d*i*c-n*m*c-a*i*_+n*l*_)*R,e[3]=(h*l*s-a*f*s-h*i*c+n*f*c+a*i*p-n*l*p)*R,e[4]=x*R,e[5]=(u*m*s-g*f*s+g*i*p-t*m*p-u*i*_+t*f*_)*R,e[6]=(g*l*s-o*m*s-g*i*c+t*m*c+o*i*_-t*l*_)*R,e[7]=(o*f*s-u*l*s+u*i*c-t*f*c-o*i*p+t*l*p)*R,e[8]=y*R,e[9]=(g*h*s-u*d*s-g*n*p+t*d*p+u*n*_-t*h*_)*R,e[10]=(o*d*s-g*a*s+g*n*c-t*d*c-o*n*_+t*a*_)*R,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*p-t*a*p)*R,e[12]=M*R,e[13]=(u*d*i-g*h*i+g*n*f-t*d*f-u*n*m+t*h*m)*R,e[14]=(g*a*i-o*d*i-g*n*l+t*d*l+o*n*m-t*a*m)*R,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*f+t*a*f)*R,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,p=s*u,g=s*h,d=o*u,m=o*h,_=a*h,b=l*c,x=l*u,y=l*h,M=n.x,A=n.y,R=n.z;return i[0]=(1-(d+_))*M,i[1]=(p+y)*M,i[2]=(g-x)*M,i[3]=0,i[4]=(p-y)*A,i[5]=(1-(f+_))*A,i[6]=(m+b)*A,i[7]=0,i[8]=(g+x)*R,i[9]=(m-b)*R,i[10]=(1-(f+d))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Dr.set(i[0],i[1],i[2]).length();const o=Dr.set(i[4],i[5],i[6]).length(),a=Dr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],En.copy(this);const c=1/s,u=1/o,h=1/a;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=u,En.elements[5]*=u,En.elements[6]*=u,En.elements[8]*=h,En.elements[9]*=h,En.elements[10]*=h,t.setFromRotationMatrix(En),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o){const a=this.elements,l=2*s/(t-e),c=2*s/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),f=-(o+s)/(o-s),p=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,o){const a=this.elements,l=1/(t-e),c=1/(n-i),u=1/(o-s),h=(t+e)*l,f=(n+i)*c,p=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Dr=new F,En=new ke,zx=new F(0,0,0),Bx=new F(1,1,1),bi=new F,Po=new F,nn=new F,Hh=new ke,Wh=new qn;class Pa{constructor(e=0,t=0,n=0,i=Pa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Rt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Hh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wh.setFromEuler(this),this.setFromQuaternion(Wh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pa.DEFAULT_ORDER="XYZ";class gp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let kx=0;const Xh=new F,Ir=new qn,Qn=new ke,Do=new F,Rs=new F,Vx=new F,Gx=new qn,jh=new F(1,0,0),qh=new F(0,1,0),Yh=new F(0,0,1),Hx={type:"added"},Kh={type:"removed"};class at extends Sr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kx++}),this.uuid=In(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=at.DEFAULT_UP.clone();const e=new F,t=new Pa,n=new qn,i=new F(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ke},normalMatrix:{value:new Xt}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=at.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=at.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new gp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ir.setFromAxisAngle(e,t),this.quaternion.multiply(Ir),this}rotateOnWorldAxis(e,t){return Ir.setFromAxisAngle(e,t),this.quaternion.premultiply(Ir),this}rotateX(e){return this.rotateOnAxis(jh,e)}rotateY(e){return this.rotateOnAxis(qh,e)}rotateZ(e){return this.rotateOnAxis(Yh,e)}translateOnAxis(e,t){return Xh.copy(e).applyQuaternion(this.quaternion),this.position.add(Xh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(jh,e)}translateY(e){return this.translateOnAxis(qh,e)}translateZ(e){return this.translateOnAxis(Yh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Do.copy(e):Do.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(Rs,Do,this.up):Qn.lookAt(Do,Rs,this.up),this.quaternion.setFromRotationMatrix(Qn),i&&(Qn.extractRotation(i.matrixWorld),Ir.setFromRotationMatrix(Qn),this.quaternion.premultiply(Ir.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Hx)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Kh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Kh)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,e,Vx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,Gx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}at.DEFAULT_UP=new F(0,1,0);at.DEFAULT_MATRIX_AUTO_UPDATE=!0;at.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const An=new F,ei=new F,pl=new F,ti=new F,Or=new F,Nr=new F,$h=new F,ml=new F,gl=new F,_l=new F;class oi{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),An.subVectors(e,t),i.cross(An);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){An.subVectors(i,t),ei.subVectors(n,t),pl.subVectors(e,t);const o=An.dot(An),a=An.dot(ei),l=An.dot(pl),c=ei.dot(ei),u=ei.dot(pl),h=o*c-a*a;if(h===0)return s.set(-2,-1,-1);const f=1/h,p=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ti),ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getUV(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,ti),l.set(0,0),l.addScaledVector(s,ti.x),l.addScaledVector(o,ti.y),l.addScaledVector(a,ti.z),l}static isFrontFacing(e,t,n,i){return An.subVectors(n,t),ei.subVectors(e,t),An.cross(ei).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return An.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),An.cross(ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return oi.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return oi.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Or.subVectors(i,n),Nr.subVectors(s,n),ml.subVectors(e,n);const l=Or.dot(ml),c=Nr.dot(ml);if(l<=0&&c<=0)return t.copy(n);gl.subVectors(e,i);const u=Or.dot(gl),h=Nr.dot(gl);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Or,o);_l.subVectors(e,s);const p=Or.dot(_l),g=Nr.dot(_l);if(g>=0&&p<=g)return t.copy(s);const d=p*c-l*g;if(d<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Nr,a);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return $h.subVectors(s,i),a=(h-u)/(h-u+(p-g)),t.copy(i).addScaledVector($h,a);const _=1/(m+d+f);return o=d*_,a=f*_,t.copy(n).addScaledVector(Or,o).addScaledVector(Nr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Wx=0;class Xn extends Sr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wx++}),this.uuid=In(),this.name="",this.type="Material",this.blending=$r,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=tp,this.blendDst=np,this.blendEquation=Gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=nc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=px,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=il,this.stencilZFail=il,this.stencilZPass=il,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==$r&&(n.blending=this.blending),this.side!==di&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const _p={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cn={h:0,s:0,l:0},Io={h:0,s:0,l:0};function xl(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Oe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Bt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Bt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Bt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Bt.workingColorSpace){if(e=nu(e,1),t=Rt(t,0,1),n=Rt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=xl(o,s,e+1/3),this.g=xl(o,s,e),this.b=xl(o,s,e-1/3)}return Bt.toWorkingColorSpace(this,i),this}setStyle(e,t=Bn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Bt.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Bt.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,u,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Bt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Bt.toWorkingColorSpace(this,t),this;console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Bn){const n=_p[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Jr(e.r),this.g=Jr(e.g),this.b=Jr(e.b),this}copyLinearToSRGB(e){return this.r=ol(e.r),this.g=ol(e.g),this.b=ol(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bn){return Bt.fromWorkingColorSpace(Lt.copy(this),e),Rt(Lt.r*255,0,255)<<16^Rt(Lt.g*255,0,255)<<8^Rt(Lt.b*255,0,255)<<0}getHexString(e=Bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Bt.workingColorSpace){Bt.fromWorkingColorSpace(Lt.copy(this),t);const n=Lt.r,i=Lt.g,s=Lt.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Bt.workingColorSpace){return Bt.fromWorkingColorSpace(Lt.copy(this),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=Bn){Bt.fromWorkingColorSpace(Lt.copy(this),e);const t=Lt.r,n=Lt.g,i=Lt.b;return e!==Bn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${i*255|0})`}offsetHSL(e,t,n){return this.getHSL(Cn),Cn.h+=e,Cn.s+=t,Cn.l+=n,this.setHSL(Cn.h,Cn.s,Cn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Cn),e.getHSL(Io);const n=Ks(Cn.h,Io.h,t),i=Ks(Cn.s,Io.s,t),s=Ks(Cn.l,Io.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Lt=new Oe;Oe.NAMES=_p;class ar extends Xn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ip,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dt=new F,Oo=new Ie;class jt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ac,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Oo.fromBufferAttribute(this,t),Oo.applyMatrix3(e),this.setXY(t,Oo.x,Oo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix3(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix4(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyNormalMatrix(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.transformDirection(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=li(t,this.array)),t}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=li(t,this.array)),t}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=li(t,this.array)),t}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=li(t,this.array)),t}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array),s=et(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ac&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class xp extends jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class vp extends jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class It extends jt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Xx=0;const mn=new ke,vl=new at,Fr=new F,rn=new Ms,Ps=new Ms,Mt=new F;class fn extends Sr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xx++}),this.uuid=In(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fp(e)?vp:xp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Xt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mn.makeRotationFromQuaternion(e),this.applyMatrix4(mn),this}rotateX(e){return mn.makeRotationX(e),this.applyMatrix4(mn),this}rotateY(e){return mn.makeRotationY(e),this.applyMatrix4(mn),this}rotateZ(e){return mn.makeRotationZ(e),this.applyMatrix4(mn),this}translate(e,t,n){return mn.makeTranslation(e,t,n),this.applyMatrix4(mn),this}scale(e,t,n){return mn.makeScale(e,t,n),this.applyMatrix4(mn),this}lookAt(e){return vl.lookAt(e),vl.updateMatrix(),this.applyMatrix4(vl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fr).negate(),this.translate(Fr.x,Fr.y,Fr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new It(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ms);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];rn.setFromBufferAttribute(s),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ss);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(rn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ps.setFromBufferAttribute(a),this.morphTargetsRelative?(Mt.addVectors(rn.min,Ps.min),rn.expandByPoint(Mt),Mt.addVectors(rn.max,Ps.max),rn.expandByPoint(Mt)):(rn.expandByPoint(Ps.min),rn.expandByPoint(Ps.max))}rn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Mt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Mt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Mt.fromBufferAttribute(a,c),l&&(Fr.fromBufferAttribute(e,c),Mt.add(Fr)),i=Math.max(i,n.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let D=0;D<a;D++)c[D]=new F,u[D]=new F;const h=new F,f=new F,p=new F,g=new Ie,d=new Ie,m=new Ie,_=new F,b=new F;function x(D,W,q){h.fromArray(i,D*3),f.fromArray(i,W*3),p.fromArray(i,q*3),g.fromArray(o,D*2),d.fromArray(o,W*2),m.fromArray(o,q*2),f.sub(h),p.sub(h),d.sub(g),m.sub(g);const N=1/(d.x*m.y-m.x*d.y);isFinite(N)&&(_.copy(f).multiplyScalar(m.y).addScaledVector(p,-d.y).multiplyScalar(N),b.copy(p).multiplyScalar(d.x).addScaledVector(f,-m.x).multiplyScalar(N),c[D].add(_),c[W].add(_),c[q].add(_),u[D].add(b),u[W].add(b),u[q].add(b))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let D=0,W=y.length;D<W;++D){const q=y[D],N=q.start,I=q.count;for(let H=N,Y=N+I;H<Y;H+=3)x(n[H+0],n[H+1],n[H+2])}const M=new F,A=new F,R=new F,v=new F;function w(D){R.fromArray(s,D*3),v.copy(R);const W=c[D];M.copy(W),M.sub(R.multiplyScalar(R.dot(W))).normalize(),A.crossVectors(v,W);const N=A.dot(u[D])<0?-1:1;l[D*4]=M.x,l[D*4+1]=M.y,l[D*4+2]=M.z,l[D*4+3]=N}for(let D=0,W=y.length;D<W;++D){const q=y[D],N=q.start,I=q.count;for(let H=N,Y=N+I;H<Y;H+=3)w(n[H+0]),w(n[H+1]),w(n[H+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const i=new F,s=new F,o=new F,a=new F,l=new F,c=new F,u=new F,h=new F;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),d=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,d),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,d),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(d,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let d=0,m=l.length;d<m;d++){a.isInterleavedBufferAttribute?p=l[d]*a.data.stride+a.offset:p=l[d]*u;for(let _=0;_<u;_++)f[g++]=c[p++]}return new jt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new fn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zh=new ke,zn=new iu,No=new Ss,Jh=new F,Ds=new F,Is=new F,Os=new F,yl=new F,Fo=new F,Uo=new Ie,zo=new Ie,Bo=new Ie,bl=new F,ko=new F;class an extends at{constructor(e=new fn,t=new ar){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Fo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(yl.fromBufferAttribute(h,e),o?Fo.addScaledVector(yl,u):Fo.addScaledVector(yl.sub(t),u))}t.add(Fo)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),No.copy(n.boundingSphere),No.applyMatrix4(s),zn.copy(e.ray).recast(e.near),No.containsPoint(zn.origin)===!1&&(zn.intersectSphere(No,Jh)===null||zn.origin.distanceToSquared(Jh)>(e.far-e.near)**2))||(Zh.copy(s).invert(),zn.copy(e.ray).applyMatrix4(Zh),n.boundingBox!==null&&zn.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,h=n.groups,f=n.drawRange;if(a!==null)if(Array.isArray(i))for(let p=0,g=h.length;p<g;p++){const d=h[p],m=i[d.materialIndex],_=Math.max(d.start,f.start),b=Math.min(a.count,Math.min(d.start+d.count,f.start+f.count));for(let x=_,y=b;x<y;x+=3){const M=a.getX(x),A=a.getX(x+1),R=a.getX(x+2);o=Vo(this,m,e,zn,c,u,M,A,R),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=d.materialIndex,t.push(o))}}else{const p=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let d=p,m=g;d<m;d+=3){const _=a.getX(d),b=a.getX(d+1),x=a.getX(d+2);o=Vo(this,i,e,zn,c,u,_,b,x),o&&(o.faceIndex=Math.floor(d/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let p=0,g=h.length;p<g;p++){const d=h[p],m=i[d.materialIndex],_=Math.max(d.start,f.start),b=Math.min(l.count,Math.min(d.start+d.count,f.start+f.count));for(let x=_,y=b;x<y;x+=3){const M=x,A=x+1,R=x+2;o=Vo(this,m,e,zn,c,u,M,A,R),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=d.materialIndex,t.push(o))}}else{const p=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let d=p,m=g;d<m;d+=3){const _=d,b=d+1,x=d+2;o=Vo(this,i,e,zn,c,u,_,b,x),o&&(o.faceIndex=Math.floor(d/3),t.push(o))}}}}function jx(r,e,t,n,i,s,o,a){let l;if(e.side===ln?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===di,a),l===null)return null;ko.copy(a),ko.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(ko);return c<t.near||c>t.far?null:{distance:c,point:ko.clone(),object:r}}function Vo(r,e,t,n,i,s,o,a,l){r.getVertexPosition(o,Ds),r.getVertexPosition(a,Is),r.getVertexPosition(l,Os);const c=jx(r,e,t,n,Ds,Is,Os,bl);if(c){i&&(Uo.fromBufferAttribute(i,o),zo.fromBufferAttribute(i,a),Bo.fromBufferAttribute(i,l),c.uv=oi.getUV(bl,Ds,Is,Os,Uo,zo,Bo,new Ie)),s&&(Uo.fromBufferAttribute(s,o),zo.fromBufferAttribute(s,a),Bo.fromBufferAttribute(s,l),c.uv2=oi.getUV(bl,Ds,Is,Os,Uo,zo,Bo,new Ie));const u={a:o,b:a,c:l,normal:new F,materialIndex:0};oi.getNormal(Ds,Is,Os,u.normal),c.face=u}return c}class _o extends fn{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new It(c,3)),this.setAttribute("normal",new It(u,3)),this.setAttribute("uv",new It(h,2));function g(d,m,_,b,x,y,M,A,R,v,w){const D=y/R,W=M/v,q=y/2,N=M/2,I=A/2,H=R+1,Y=v+1;let K=0,V=0;const oe=new F;for(let se=0;se<Y;se++){const be=se*W-N;for(let B=0;B<H;B++){const le=B*D-q;oe[d]=le*b,oe[m]=be*x,oe[_]=I,c.push(oe.x,oe.y,oe.z),oe[d]=0,oe[m]=0,oe[_]=A>0?1:-1,u.push(oe.x,oe.y,oe.z),h.push(B/R),h.push(1-se/v),K+=1}}for(let se=0;se<v;se++)for(let be=0;be<R;be++){const B=f+be+H*se,le=f+be+H*(se+1),de=f+(be+1)+H*(se+1),k=f+(be+1)+H*se;l.push(B,le,k),l.push(le,de,k),V+=6}a.addGroup(p,V,w),p+=V,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _o(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function us(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Gt(r){const e={};for(let t=0;t<r.length;t++){const n=us(r[t]);for(const i in n)e[i]=n[i]}return e}function qx(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function yp(r){return r.getRenderTarget()===null&&r.outputEncoding===Ke?Bn:so}const Yx={clone:us,merge:Gt};var Kx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$x=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yr extends Xn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kx,this.fragmentShader=$x,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=us(e.uniforms),this.uniformsGroups=qx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class bp extends at{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ht extends bp{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=oo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ys*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return oo*2*Math.atan(Math.tan(Ys*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ys*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ur=-90,zr=1;class Zx extends at{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Ht(Ur,zr,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new Ht(Ur,zr,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new Ht(Ur,zr,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new Ht(Ur,zr,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new Ht(Ur,zr,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Ht(Ur,zr,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,a,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=hi,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Mp extends Et{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ss,super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Jx extends vr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Mp(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Yt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new _o(5,5,5),s=new yr({name:"CubemapFromEquirect",uniforms:us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ln,blending:Oi});s.uniforms.tEquirect.value=t;const o=new an(i,s),a=t.minFilter;return t.minFilter===gr&&(t.minFilter=Yt),new Zx(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const Ml=new F,Qx=new F,ev=new Xt;class Qi{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ml.subVectors(n,t).cross(Qx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ml),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ev.getNormalMatrix(e),i=this.coplanarPoint(Ml).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Br=new Ss,Go=new F;class ru{constructor(e=new Qi,t=new Qi,n=new Qi,i=new Qi,s=new Qi,o=new Qi){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],p=n[9],g=n[10],d=n[11],m=n[12],_=n[13],b=n[14],x=n[15];return t[0].setComponents(a-i,h-l,d-f,x-m).normalize(),t[1].setComponents(a+i,h+l,d+f,x+m).normalize(),t[2].setComponents(a+s,h+c,d+p,x+_).normalize(),t[3].setComponents(a-s,h-c,d-p,x-_).normalize(),t[4].setComponents(a-o,h-u,d-g,x-b).normalize(),t[5].setComponents(a+o,h+u,d+g,x+b).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Br.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Br)}intersectsSprite(e){return Br.center.set(0,0,0),Br.radius=.7071067811865476,Br.applyMatrix4(e.matrixWorld),this.intersectsSphere(Br)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Go.x=i.normal.x>0?e.max.x:e.min.x,Go.y=i.normal.y>0?e.max.y:e.min.y,Go.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Go)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Sp(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function tv(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,f=c.usage,p=r.createBuffer();r.bindBuffer(u,p),r.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const f=u.array,p=u.updateRange;r.bindBuffer(h,c),p.count===-1?r.bufferSubData(h,0,f):(t?r.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):r.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class su extends fn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,f=t/l,p=[],g=[],d=[],m=[];for(let _=0;_<u;_++){const b=_*f-o;for(let x=0;x<c;x++){const y=x*h-s;g.push(y,-b,0),d.push(0,0,1),m.push(x/a),m.push(1-_/l)}}for(let _=0;_<l;_++)for(let b=0;b<a;b++){const x=b+c*_,y=b+c*(_+1),M=b+1+c*(_+1),A=b+1+c*_;p.push(x,y,A),p.push(y,M,A)}this.setIndex(p),this.setAttribute("position",new It(g,3)),this.setAttribute("normal",new It(d,3)),this.setAttribute("uv",new It(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new su(e.width,e.height,e.widthSegments,e.heightSegments)}}var nv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,iv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rv=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,sv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ov=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,av=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lv="vec3 transformed = vec3( position );",cv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uv=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,hv=`#ifdef USE_IRIDESCENCE
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
#endif`,fv=`#ifdef USE_BUMPMAP
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
#endif`,dv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_v=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,yv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,bv=`#define PI 3.141592653589793
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
}`,Mv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Sv=`vec3 transformedNormal = objectNormal;
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
#endif`,wv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Ev=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Av=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lv=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rv=`#ifdef USE_ENVMAP
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
#endif`,Pv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Dv=`#ifdef USE_ENVMAP
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
#endif`,Iv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ov=`#ifdef USE_ENVMAP
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
#endif`,Nv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Uv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bv=`#ifdef USE_GRADIENTMAP
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
}`,kv=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Vv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wv=`uniform bool receiveShadow;
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
#endif`,Xv=`#if defined( USE_ENVMAP )
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
#endif`,jv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$v=`PhysicalMaterial material;
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
#endif`,Zv=`struct PhysicalMaterial {
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
}`,Jv=`
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
#endif`,Qv=`#if defined( RE_IndirectDiffuse )
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
#endif`,ey=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,ty=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ny=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ry=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,sy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,oy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ay=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ly=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hy=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fy=`#ifdef USE_MORPHNORMALS
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
#endif`,dy=`#ifdef USE_MORPHTARGETS
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
#endif`,py=`#ifdef USE_MORPHTARGETS
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
#endif`,my=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,gy=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,_y=`#ifndef FLAT_SHADED
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
#endif`,vy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yy=`#ifdef USE_NORMALMAP
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
#endif`,by=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,My=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Sy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,wy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ty=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ey=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ay=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ly=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ry=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Py=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dy=`#ifdef USE_ROUGHNESSMAP
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
#endif`,Oy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ny=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Fy=`float getShadowMask() {
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
}`,Uy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zy=`#ifdef USE_SKINNING
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
#endif`,By=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ky=`#ifdef USE_SKINNING
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
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xy=`#ifdef USE_TRANSMISSION
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
#endif`,jy=`#ifdef USE_TRANSMISSION
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
#endif`,qy=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Yy=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Ky=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,$y=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Zy=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Jy=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Qy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const eb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tb=`uniform sampler2D t2D;
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
}`,nb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ib=`#ifdef ENVMAP_TYPE_CUBE
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
}`,rb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ob=`#include <common>
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
}`,ab=`#if DEPTH_PACKING == 3200
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
}`,lb=`#define DISTANCE
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
}`,cb=`#define DISTANCE
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
}`,ub=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,fb=`uniform float scale;
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
}`,db=`uniform vec3 diffuse;
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
}`,pb=`#include <common>
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
}`,mb=`uniform vec3 diffuse;
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
}`,gb=`#define LAMBERT
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
}`,_b=`#define LAMBERT
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
}`,xb=`#define MATCAP
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
}`,vb=`#define MATCAP
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
}`,yb=`#define NORMAL
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
}`,bb=`#define NORMAL
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
}`,Mb=`#define PHONG
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
}`,Sb=`#define PHONG
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
}`,wb=`#define STANDARD
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
}`,Tb=`#define STANDARD
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
}`,Eb=`#define TOON
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
}`,Ab=`#define TOON
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
}`,Cb=`uniform float size;
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
}`,Lb=`uniform vec3 diffuse;
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
}`,Rb=`#include <common>
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
}`,Pb=`uniform vec3 color;
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
}`,Db=`uniform float rotation;
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
}`,Ib=`uniform vec3 diffuse;
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
}`,Ne={alphamap_fragment:nv,alphamap_pars_fragment:iv,alphatest_fragment:rv,alphatest_pars_fragment:sv,aomap_fragment:ov,aomap_pars_fragment:av,begin_vertex:lv,beginnormal_vertex:cv,bsdfs:uv,iridescence_fragment:hv,bumpmap_pars_fragment:fv,clipping_planes_fragment:dv,clipping_planes_pars_fragment:pv,clipping_planes_pars_vertex:mv,clipping_planes_vertex:gv,color_fragment:_v,color_pars_fragment:xv,color_pars_vertex:vv,color_vertex:yv,common:bv,cube_uv_reflection_fragment:Mv,defaultnormal_vertex:Sv,displacementmap_pars_vertex:wv,displacementmap_vertex:Tv,emissivemap_fragment:Ev,emissivemap_pars_fragment:Av,encodings_fragment:Cv,encodings_pars_fragment:Lv,envmap_fragment:Rv,envmap_common_pars_fragment:Pv,envmap_pars_fragment:Dv,envmap_pars_vertex:Iv,envmap_physical_pars_fragment:Xv,envmap_vertex:Ov,fog_vertex:Nv,fog_pars_vertex:Fv,fog_fragment:Uv,fog_pars_fragment:zv,gradientmap_pars_fragment:Bv,lightmap_fragment:kv,lightmap_pars_fragment:Vv,lights_lambert_fragment:Gv,lights_lambert_pars_fragment:Hv,lights_pars_begin:Wv,lights_toon_fragment:jv,lights_toon_pars_fragment:qv,lights_phong_fragment:Yv,lights_phong_pars_fragment:Kv,lights_physical_fragment:$v,lights_physical_pars_fragment:Zv,lights_fragment_begin:Jv,lights_fragment_maps:Qv,lights_fragment_end:ey,logdepthbuf_fragment:ty,logdepthbuf_pars_fragment:ny,logdepthbuf_pars_vertex:iy,logdepthbuf_vertex:ry,map_fragment:sy,map_pars_fragment:oy,map_particle_fragment:ay,map_particle_pars_fragment:ly,metalnessmap_fragment:cy,metalnessmap_pars_fragment:uy,morphcolor_vertex:hy,morphnormal_vertex:fy,morphtarget_pars_vertex:dy,morphtarget_vertex:py,normal_fragment_begin:my,normal_fragment_maps:gy,normal_pars_fragment:_y,normal_pars_vertex:xy,normal_vertex:vy,normalmap_pars_fragment:yy,clearcoat_normal_fragment_begin:by,clearcoat_normal_fragment_maps:My,clearcoat_pars_fragment:Sy,iridescence_pars_fragment:wy,output_fragment:Ty,packing:Ey,premultiplied_alpha_fragment:Ay,project_vertex:Cy,dithering_fragment:Ly,dithering_pars_fragment:Ry,roughnessmap_fragment:Py,roughnessmap_pars_fragment:Dy,shadowmap_pars_fragment:Iy,shadowmap_pars_vertex:Oy,shadowmap_vertex:Ny,shadowmask_pars_fragment:Fy,skinbase_vertex:Uy,skinning_pars_vertex:zy,skinning_vertex:By,skinnormal_vertex:ky,specularmap_fragment:Vy,specularmap_pars_fragment:Gy,tonemapping_fragment:Hy,tonemapping_pars_fragment:Wy,transmission_fragment:Xy,transmission_pars_fragment:jy,uv_pars_fragment:qy,uv_pars_vertex:Yy,uv_vertex:Ky,uv2_pars_fragment:$y,uv2_pars_vertex:Zy,uv2_vertex:Jy,worldpos_vertex:Qy,background_vert:eb,background_frag:tb,backgroundCube_vert:nb,backgroundCube_frag:ib,cube_vert:rb,cube_frag:sb,depth_vert:ob,depth_frag:ab,distanceRGBA_vert:lb,distanceRGBA_frag:cb,equirect_vert:ub,equirect_frag:hb,linedashed_vert:fb,linedashed_frag:db,meshbasic_vert:pb,meshbasic_frag:mb,meshlambert_vert:gb,meshlambert_frag:_b,meshmatcap_vert:xb,meshmatcap_frag:vb,meshnormal_vert:yb,meshnormal_frag:bb,meshphong_vert:Mb,meshphong_frag:Sb,meshphysical_vert:wb,meshphysical_frag:Tb,meshtoon_vert:Eb,meshtoon_frag:Ab,points_vert:Cb,points_frag:Lb,shadow_vert:Rb,shadow_frag:Pb,sprite_vert:Db,sprite_frag:Ib},ge={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Xt},uv2Transform:{value:new Xt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Xt}}},Gn={basic:{uniforms:Gt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:Gt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:Gt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:Gt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:Gt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:Gt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:Gt([ge.points,ge.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:Gt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:Gt([ge.common,ge.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:Gt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:Gt([ge.sprite,ge.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:Gt([ge.common,ge.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:Gt([ge.lights,ge.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};Gn.physical={uniforms:Gt([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const Ho={r:0,b:0,g:0};function Ob(r,e,t,n,i,s,o){const a=new Oe(0);let l=s===!0?0:1,c,u,h=null,f=0,p=null;function g(m,_){let b=!1,x=_.isScene===!0?_.background:null;x&&x.isTexture&&(x=(_.backgroundBlurriness>0?t:e).get(x));const y=r.xr,M=y.getSession&&y.getSession();M&&M.environmentBlendMode==="additive"&&(x=null),x===null?d(a,l):x&&x.isColor&&(d(x,1),b=!0),(r.autoClear||b)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Ra)?(u===void 0&&(u=new an(new _o(1,1,1),new yr({name:"BackgroundCubeMaterial",uniforms:us(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,R,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=x.encoding!==Ke,(h!==x||f!==x.version||p!==r.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,p=r.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new an(new su(2,2),new yr({name:"BackgroundMaterial",uniforms:us(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=x.encoding!==Ke,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,p=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function d(m,_){m.getRGB(Ho,yp(r)),n.buffers.color.setClear(Ho.r,Ho.g,Ho.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(m,_=1){a.set(m),l=_,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,d(a,l)},render:g}}function Nb(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function h(I,H,Y,K,V){let oe=!1;if(o){const se=d(K,Y,H);c!==se&&(c=se,p(c.object)),oe=_(I,K,Y,V),oe&&b(I,K,Y,V)}else{const se=H.wireframe===!0;(c.geometry!==K.id||c.program!==Y.id||c.wireframe!==se)&&(c.geometry=K.id,c.program=Y.id,c.wireframe=se,oe=!0)}V!==null&&t.update(V,34963),(oe||u)&&(u=!1,v(I,H,Y,K),V!==null&&r.bindBuffer(34963,t.get(V).buffer))}function f(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function p(I){return n.isWebGL2?r.bindVertexArray(I):s.bindVertexArrayOES(I)}function g(I){return n.isWebGL2?r.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function d(I,H,Y){const K=Y.wireframe===!0;let V=a[I.id];V===void 0&&(V={},a[I.id]=V);let oe=V[H.id];oe===void 0&&(oe={},V[H.id]=oe);let se=oe[K];return se===void 0&&(se=m(f()),oe[K]=se),se}function m(I){const H=[],Y=[],K=[];for(let V=0;V<i;V++)H[V]=0,Y[V]=0,K[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:Y,attributeDivisors:K,object:I,attributes:{},index:null}}function _(I,H,Y,K){const V=c.attributes,oe=H.attributes;let se=0;const be=Y.getAttributes();for(const B in be)if(be[B].location>=0){const de=V[B];let k=oe[B];if(k===void 0&&(B==="instanceMatrix"&&I.instanceMatrix&&(k=I.instanceMatrix),B==="instanceColor"&&I.instanceColor&&(k=I.instanceColor)),de===void 0||de.attribute!==k||k&&de.data!==k.data)return!0;se++}return c.attributesNum!==se||c.index!==K}function b(I,H,Y,K){const V={},oe=H.attributes;let se=0;const be=Y.getAttributes();for(const B in be)if(be[B].location>=0){let de=oe[B];de===void 0&&(B==="instanceMatrix"&&I.instanceMatrix&&(de=I.instanceMatrix),B==="instanceColor"&&I.instanceColor&&(de=I.instanceColor));const k={};k.attribute=de,de&&de.data&&(k.data=de.data),V[B]=k,se++}c.attributes=V,c.attributesNum=se,c.index=K}function x(){const I=c.newAttributes;for(let H=0,Y=I.length;H<Y;H++)I[H]=0}function y(I){M(I,0)}function M(I,H){const Y=c.newAttributes,K=c.enabledAttributes,V=c.attributeDivisors;Y[I]=1,K[I]===0&&(r.enableVertexAttribArray(I),K[I]=1),V[I]!==H&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,H),V[I]=H)}function A(){const I=c.newAttributes,H=c.enabledAttributes;for(let Y=0,K=H.length;Y<K;Y++)H[Y]!==I[Y]&&(r.disableVertexAttribArray(Y),H[Y]=0)}function R(I,H,Y,K,V,oe){n.isWebGL2===!0&&(Y===5124||Y===5125)?r.vertexAttribIPointer(I,H,Y,V,oe):r.vertexAttribPointer(I,H,Y,K,V,oe)}function v(I,H,Y,K){if(n.isWebGL2===!1&&(I.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const V=K.attributes,oe=Y.getAttributes(),se=H.defaultAttributeValues;for(const be in oe){const B=oe[be];if(B.location>=0){let le=V[be];if(le===void 0&&(be==="instanceMatrix"&&I.instanceMatrix&&(le=I.instanceMatrix),be==="instanceColor"&&I.instanceColor&&(le=I.instanceColor)),le!==void 0){const de=le.normalized,k=le.itemSize,xe=t.get(le);if(xe===void 0)continue;const Me=xe.buffer,Te=xe.type,ye=xe.bytesPerElement;if(le.isInterleavedBufferAttribute){const Ce=le.data,Pe=Ce.stride,C=le.offset;if(Ce.isInstancedInterleavedBuffer){for(let P=0;P<B.locationSize;P++)M(B.location+P,Ce.meshPerAttribute);I.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Ce.meshPerAttribute*Ce.count)}else for(let P=0;P<B.locationSize;P++)y(B.location+P);r.bindBuffer(34962,Me);for(let P=0;P<B.locationSize;P++)R(B.location+P,k/B.locationSize,Te,de,Pe*ye,(C+k/B.locationSize*P)*ye)}else{if(le.isInstancedBufferAttribute){for(let Ce=0;Ce<B.locationSize;Ce++)M(B.location+Ce,le.meshPerAttribute);I.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Ce=0;Ce<B.locationSize;Ce++)y(B.location+Ce);r.bindBuffer(34962,Me);for(let Ce=0;Ce<B.locationSize;Ce++)R(B.location+Ce,k/B.locationSize,Te,de,k*ye,k/B.locationSize*Ce*ye)}}else if(se!==void 0){const de=se[be];if(de!==void 0)switch(de.length){case 2:r.vertexAttrib2fv(B.location,de);break;case 3:r.vertexAttrib3fv(B.location,de);break;case 4:r.vertexAttrib4fv(B.location,de);break;default:r.vertexAttrib1fv(B.location,de)}}}}A()}function w(){q();for(const I in a){const H=a[I];for(const Y in H){const K=H[Y];for(const V in K)g(K[V].object),delete K[V];delete H[Y]}delete a[I]}}function D(I){if(a[I.id]===void 0)return;const H=a[I.id];for(const Y in H){const K=H[Y];for(const V in K)g(K[V].object),delete K[V];delete H[Y]}delete a[I.id]}function W(I){for(const H in a){const Y=a[H];if(Y[I.id]===void 0)continue;const K=Y[I.id];for(const V in K)g(K[V].object),delete K[V];delete Y[I.id]}}function q(){N(),u=!0,c!==l&&(c=l,p(c.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:q,resetDefaultState:N,dispose:w,releaseStatesOfGeometry:D,releaseStatesOfProgram:W,initAttributes:x,enableAttribute:y,disableUnusedAttributes:A}}function Fb(r,e,t,n){const i=n.isWebGL2;let s;function o(c){s=c}function a(c,u){r.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let f,p;if(i)f=r,p="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](s,c,u,h),t.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=l}function Ub(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(R){if(R==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";R="mediump"}return R==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=r.getParameter(34930),f=r.getParameter(35660),p=r.getParameter(3379),g=r.getParameter(34076),d=r.getParameter(34921),m=r.getParameter(36347),_=r.getParameter(36348),b=r.getParameter(36349),x=f>0,y=o||e.has("OES_texture_float"),M=x&&y,A=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:b,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:M,maxSamples:A}}function zb(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Qi,a=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||n!==0||i;return i=f,n=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,d=h.clipIntersection,m=h.clipShadows,_=r.get(h);if(!i||g===null||g.length===0||s&&!m)s?u(null):c();else{const b=s?0:n,x=b*4;let y=_.clippingState||null;l.value=y,y=u(g,f,x,p);for(let M=0;M!==x;++M)y[M]=t[M];_.clippingState=y,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,p,g){const d=h!==null?h.length:0;let m=null;if(d!==0){if(m=l.value,g!==!0||m===null){const _=p+d*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<_)&&(m=new Float32Array(_));for(let x=0,y=p;x!==d;++x,y+=4)o.copy(h[x]).applyMatrix4(b,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=d,e.numIntersection=0,m}}function Bb(r){let e=new WeakMap;function t(o,a){return a===ic?o.mapping=ss:a===rc&&(o.mapping=os),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===ic||a===rc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Jx(l.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class ou extends bp{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Xr=4,Qh=[.125,.215,.35,.446,.526,.582],sr=20,Sl=new ou,ef=new Oe;let wl=null;const er=(1+Math.sqrt(5))/2,kr=1/er,tf=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,er,kr),new F(0,er,-kr),new F(kr,0,er),new F(-kr,0,er),new F(er,kr,0),new F(-er,kr,0)];class nf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){wl=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=of(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(wl),e.scissorTest=!1,Wo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ss||e.mapping===os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wl=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Yt,minFilter:Yt,generateMipmaps:!1,type:io,format:yn,encoding:xr,depthBuffer:!1},i=rf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rf(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kb(s)),this._blurMaterial=Vb(s,e,t)}return i}_compileMaterial(e){const t=new an(this._lodPlanes[0],e);this._renderer.compile(t,Sl)}_sceneToCubeUV(e,t,n,i){const a=new Ht(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(ef),u.toneMapping=hi,u.autoClear=!1;const p=new ar({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),g=new an(new _o,p);let d=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,d=!0):(p.color.copy(ef),d=!0);for(let _=0;_<6;_++){const b=_%3;b===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):b===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));const x=this._cubeSize;Wo(i,b*x,_>2?x:0,x,x),u.setRenderTarget(i),d&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ss||e.mapping===os;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=of()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sf());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new an(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Wo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Sl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=tf[(i-1)%tf.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new an(this._lodPlanes[i],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*sr-1),d=s/g,m=isFinite(s)?1+Math.floor(u*d):sr;m>sr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${sr}`);const _=[];let b=0;for(let R=0;R<sr;++R){const v=R/d,w=Math.exp(-v*v/2);_.push(w),R===0?b+=w:R<m&&(b+=2*w)}for(let R=0;R<_.length;R++)_[R]=_[R]/b;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=_,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const y=this._sizeLods[i],M=3*y*(i>x-Xr?i-x+Xr:0),A=4*(this._cubeSize-y);Wo(t,M,A,3*y,2*y),l.setRenderTarget(t),l.render(h,Sl)}}function kb(r){const e=[],t=[],n=[];let i=r;const s=r-Xr+1+Qh.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-Xr?l=Qh[o-r+Xr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,d=3,m=2,_=1,b=new Float32Array(d*g*p),x=new Float32Array(m*g*p),y=new Float32Array(_*g*p);for(let A=0;A<p;A++){const R=A%3*2/3-1,v=A>2?0:-1,w=[R,v,0,R+2/3,v,0,R+2/3,v+1,0,R,v,0,R+2/3,v+1,0,R,v+1,0];b.set(w,d*g*A),x.set(f,m*g*A);const D=[A,A,A,A,A,A];y.set(D,_*g*A)}const M=new fn;M.setAttribute("position",new jt(b,d)),M.setAttribute("uv",new jt(x,m)),M.setAttribute("faceIndex",new jt(y,_)),e.push(M),i>Xr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function rf(r,e,t){const n=new vr(r,e,t);return n.texture.mapping=Ra,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Wo(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Vb(r,e,t){const n=new Float32Array(sr),i=new F(0,1,0);return new yr({name:"SphericalGaussianBlur",defines:{n:sr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:au(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function sf(){return new yr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:au(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function of(){return new yr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function au(){return`

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
	`}function Gb(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ic||l===rc,u=l===ss||l===os;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new nf(r)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new nf(r));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Hb(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Wb(r,e,t,n){const i={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete i[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],34962);const p=h.morphAttributes;for(const g in p){const d=p[g];for(let m=0,_=d.length;m<_;m++)e.update(d[m],34962)}}function c(h){const f=[],p=h.index,g=h.attributes.position;let d=0;if(p!==null){const b=p.array;d=p.version;for(let x=0,y=b.length;x<y;x+=3){const M=b[x+0],A=b[x+1],R=b[x+2];f.push(M,A,A,R,R,M)}}else{const b=g.array;d=g.version;for(let x=0,y=b.length/3-1;x<y;x+=3){const M=x+0,A=x+1,R=x+2;f.push(M,A,A,R,R,M)}}const m=new(fp(f)?vp:xp)(f,1);m.version=d;const _=s.get(h);_&&e.remove(_),s.set(h,m)}function u(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Xb(r,e,t,n){const i=n.isWebGL2;let s;function o(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,p){r.drawElements(s,p,a,f*l),t.update(p,s,1)}function h(f,p,g){if(g===0)return;let d,m;if(i)d=r,m="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,p,a,f*l,g),t.update(p,s,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function jb(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function qb(r,e){return r[0]-e[0]}function Yb(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Kb(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new nt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,d=g!==void 0?g.length:0;let m=s.get(u);if(m===void 0||m.count!==d){let H=function(){N.dispose(),s.delete(u),u.removeEventListener("dispose",H)};var p=H;m!==void 0&&m.texture.dispose();const x=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],R=u.morphAttributes.normal||[],v=u.morphAttributes.color||[];let w=0;x===!0&&(w=1),y===!0&&(w=2),M===!0&&(w=3);let D=u.attributes.position.count*w,W=1;D>e.maxTextureSize&&(W=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const q=new Float32Array(D*W*4*d),N=new mp(q,D,W,d);N.type=Ei,N.needsUpdate=!0;const I=w*4;for(let Y=0;Y<d;Y++){const K=A[Y],V=R[Y],oe=v[Y],se=D*W*4*Y;for(let be=0;be<K.count;be++){const B=be*I;x===!0&&(o.fromBufferAttribute(K,be),q[se+B+0]=o.x,q[se+B+1]=o.y,q[se+B+2]=o.z,q[se+B+3]=0),y===!0&&(o.fromBufferAttribute(V,be),q[se+B+4]=o.x,q[se+B+5]=o.y,q[se+B+6]=o.z,q[se+B+7]=0),M===!0&&(o.fromBufferAttribute(oe,be),q[se+B+8]=o.x,q[se+B+9]=o.y,q[se+B+10]=o.z,q[se+B+11]=oe.itemSize===4?o.w:1)}}m={count:d,texture:N,size:new Ie(D,W)},s.set(u,m),u.addEventListener("dispose",H)}let _=0;for(let x=0;x<f.length;x++)_+=f[x];const b=u.morphTargetsRelative?1:1-_;h.getUniforms().setValue(r,"morphTargetBaseInfluence",b),h.getUniforms().setValue(r,"morphTargetInfluences",f),h.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}else{const g=f===void 0?0:f.length;let d=n[u.id];if(d===void 0||d.length!==g){d=[];for(let y=0;y<g;y++)d[y]=[y,0];n[u.id]=d}for(let y=0;y<g;y++){const M=d[y];M[0]=y,M[1]=f[y]}d.sort(Yb);for(let y=0;y<8;y++)y<g&&d[y][1]?(a[y][0]=d[y][0],a[y][1]=d[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(qb);const m=u.morphAttributes.position,_=u.morphAttributes.normal;let b=0;for(let y=0;y<8;y++){const M=a[y],A=M[0],R=M[1];A!==Number.MAX_SAFE_INTEGER&&R?(m&&u.getAttribute("morphTarget"+y)!==m[A]&&u.setAttribute("morphTarget"+y,m[A]),_&&u.getAttribute("morphNormal"+y)!==_[A]&&u.setAttribute("morphNormal"+y,_[A]),i[y]=R,b+=R):(m&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),_&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),i[y]=0)}const x=u.morphTargetsRelative?1:1-b;h.getUniforms().setValue(r,"morphTargetBaseInfluence",x),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function $b(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const wp=new Et,Tp=new mp,Ep=new Fx,Ap=new Mp,af=[],lf=[],cf=new Float32Array(16),uf=new Float32Array(9),hf=new Float32Array(4);function ws(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=af[i];if(s===void 0&&(s=new Float32Array(i),af[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function xt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function vt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Da(r,e){let t=lf[e];t===void 0&&(t=new Int32Array(e),lf[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Zb(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Jb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;r.uniform2fv(this.addr,e),vt(t,e)}}function Qb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;r.uniform3fv(this.addr,e),vt(t,e)}}function eM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;r.uniform4fv(this.addr,e),vt(t,e)}}function tM(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(xt(t,n))return;hf.set(n),r.uniformMatrix2fv(this.addr,!1,hf),vt(t,n)}}function nM(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(xt(t,n))return;uf.set(n),r.uniformMatrix3fv(this.addr,!1,uf),vt(t,n)}}function iM(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(xt(t,n))return;cf.set(n),r.uniformMatrix4fv(this.addr,!1,cf),vt(t,n)}}function rM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function sM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;r.uniform2iv(this.addr,e),vt(t,e)}}function oM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;r.uniform3iv(this.addr,e),vt(t,e)}}function aM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;r.uniform4iv(this.addr,e),vt(t,e)}}function lM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function cM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;r.uniform2uiv(this.addr,e),vt(t,e)}}function uM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;r.uniform3uiv(this.addr,e),vt(t,e)}}function hM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;r.uniform4uiv(this.addr,e),vt(t,e)}}function fM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||wp,i)}function dM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ep,i)}function pM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Ap,i)}function mM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Tp,i)}function gM(r){switch(r){case 5126:return Zb;case 35664:return Jb;case 35665:return Qb;case 35666:return eM;case 35674:return tM;case 35675:return nM;case 35676:return iM;case 5124:case 35670:return rM;case 35667:case 35671:return sM;case 35668:case 35672:return oM;case 35669:case 35673:return aM;case 5125:return lM;case 36294:return cM;case 36295:return uM;case 36296:return hM;case 35678:case 36198:case 36298:case 36306:case 35682:return fM;case 35679:case 36299:case 36307:return dM;case 35680:case 36300:case 36308:case 36293:return pM;case 36289:case 36303:case 36311:case 36292:return mM}}function _M(r,e){r.uniform1fv(this.addr,e)}function xM(r,e){const t=ws(e,this.size,2);r.uniform2fv(this.addr,t)}function vM(r,e){const t=ws(e,this.size,3);r.uniform3fv(this.addr,t)}function yM(r,e){const t=ws(e,this.size,4);r.uniform4fv(this.addr,t)}function bM(r,e){const t=ws(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function MM(r,e){const t=ws(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function SM(r,e){const t=ws(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function wM(r,e){r.uniform1iv(this.addr,e)}function TM(r,e){r.uniform2iv(this.addr,e)}function EM(r,e){r.uniform3iv(this.addr,e)}function AM(r,e){r.uniform4iv(this.addr,e)}function CM(r,e){r.uniform1uiv(this.addr,e)}function LM(r,e){r.uniform2uiv(this.addr,e)}function RM(r,e){r.uniform3uiv(this.addr,e)}function PM(r,e){r.uniform4uiv(this.addr,e)}function DM(r,e,t){const n=this.cache,i=e.length,s=Da(t,i);xt(n,s)||(r.uniform1iv(this.addr,s),vt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||wp,s[o])}function IM(r,e,t){const n=this.cache,i=e.length,s=Da(t,i);xt(n,s)||(r.uniform1iv(this.addr,s),vt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Ep,s[o])}function OM(r,e,t){const n=this.cache,i=e.length,s=Da(t,i);xt(n,s)||(r.uniform1iv(this.addr,s),vt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Ap,s[o])}function NM(r,e,t){const n=this.cache,i=e.length,s=Da(t,i);xt(n,s)||(r.uniform1iv(this.addr,s),vt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Tp,s[o])}function FM(r){switch(r){case 5126:return _M;case 35664:return xM;case 35665:return vM;case 35666:return yM;case 35674:return bM;case 35675:return MM;case 35676:return SM;case 5124:case 35670:return wM;case 35667:case 35671:return TM;case 35668:case 35672:return EM;case 35669:case 35673:return AM;case 5125:return CM;case 36294:return LM;case 36295:return RM;case 36296:return PM;case 35678:case 36198:case 36298:case 36306:case 35682:return DM;case 35679:case 36299:case 36307:return IM;case 35680:case 36300:case 36308:case 36293:return OM;case 36289:case 36303:case 36311:case 36292:return NM}}class UM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=gM(t.type)}}class zM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=FM(t.type)}}class BM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Tl=/(\w+)(\])?(\[|\.)?/g;function ff(r,e){r.seq.push(e),r.map[e.id]=e}function kM(r,e,t){const n=r.name,i=n.length;for(Tl.lastIndex=0;;){const s=Tl.exec(n),o=Tl.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){ff(t,c===void 0?new UM(a,r,e):new zM(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new BM(a),ff(t,h)),t=h}}}class ia{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);kM(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function df(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let VM=0;function GM(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function HM(r){switch(r){case xr:return["Linear","( value )"];case Ke:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function pf(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+GM(r.getShaderSource(e),o)}else return i}function WM(r,e){const t=HM(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function XM(r,e){let t;switch(e){case H0:t="Linear";break;case W0:t="Reinhard";break;case X0:t="OptimizedCineon";break;case j0:t="ACESFilmic";break;case q0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function jM(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Gs).join(`
`)}function qM(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function YM(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Gs(r){return r!==""}function mf(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gf(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const KM=/^[ \t]*#include +<([\w\d./]+)>/gm;function uc(r){return r.replace(KM,$M)}function $M(r,e){const t=Ne[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return uc(t)}const ZM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _f(r){return r.replace(ZM,JM)}function JM(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function xf(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function QM(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===ep?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===b0?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Vs&&(e="SHADOWMAP_TYPE_VSM"),e}function eS(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ss:case os:e="ENVMAP_TYPE_CUBE";break;case Ra:e="ENVMAP_TYPE_CUBE_UV";break}return e}function tS(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case os:e="ENVMAP_MODE_REFRACTION";break}return e}function nS(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case ip:e="ENVMAP_BLENDING_MULTIPLY";break;case V0:e="ENVMAP_BLENDING_MIX";break;case G0:e="ENVMAP_BLENDING_ADD";break}return e}function iS(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function rS(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=QM(t),c=eS(t),u=tS(t),h=nS(t),f=iS(t),p=t.isWebGL2?"":jM(t),g=qM(s),d=i.createProgram();let m,_,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(Gs).join(`
`),m.length>0&&(m+=`
`),_=[p,g].filter(Gs).join(`
`),_.length>0&&(_+=`
`)):(m=[xf(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gs).join(`
`),_=[p,xf(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hi?"#define TONE_MAPPING":"",t.toneMapping!==hi?Ne.tonemapping_pars_fragment:"",t.toneMapping!==hi?XM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ne.encodings_pars_fragment,WM("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Gs).join(`
`)),o=uc(o),o=mf(o,t),o=gf(o,t),a=uc(a),a=mf(a,t),a=gf(a,t),o=_f(o),a=_f(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["#define varying in",t.glslVersion===kh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===kh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const x=b+m+o,y=b+_+a,M=df(i,35633,x),A=df(i,35632,y);if(i.attachShader(d,M),i.attachShader(d,A),t.index0AttributeName!==void 0?i.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(d,0,"position"),i.linkProgram(d),r.debug.checkShaderErrors){const w=i.getProgramInfoLog(d).trim(),D=i.getShaderInfoLog(M).trim(),W=i.getShaderInfoLog(A).trim();let q=!0,N=!0;if(i.getProgramParameter(d,35714)===!1){q=!1;const I=pf(i,M,"vertex"),H=pf(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(d,35715)+`

Program Info Log: `+w+`
`+I+`
`+H)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(D===""||W==="")&&(N=!1);N&&(this.diagnostics={runnable:q,programLog:w,vertexShader:{log:D,prefix:m},fragmentShader:{log:W,prefix:_}})}i.deleteShader(M),i.deleteShader(A);let R;this.getUniforms=function(){return R===void 0&&(R=new ia(i,d)),R};let v;return this.getAttributes=function(){return v===void 0&&(v=YM(i,d)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(d),this.program=void 0},this.name=t.shaderName,this.id=VM++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=M,this.fragmentShader=A,this}let sS=0;class oS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new aS(e),t.set(e,n)),n}}class aS{constructor(e){this.id=sS++,this.code=e,this.usedTimes=0}}function lS(r,e,t,n,i,s,o){const a=new gp,l=new oS,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(v,w,D,W,q){const N=W.fog,I=q.geometry,H=v.isMeshStandardMaterial?W.environment:null,Y=(v.isMeshStandardMaterial?t:e).get(v.envMap||H),K=Y&&Y.mapping===Ra?Y.image.height:null,V=g[v.type];v.precision!==null&&(p=i.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const oe=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,se=oe!==void 0?oe.length:0;let be=0;I.morphAttributes.position!==void 0&&(be=1),I.morphAttributes.normal!==void 0&&(be=2),I.morphAttributes.color!==void 0&&(be=3);let B,le,de,k;if(V){const Pe=Gn[V];B=Pe.vertexShader,le=Pe.fragmentShader}else B=v.vertexShader,le=v.fragmentShader,l.update(v),de=l.getVertexShaderID(v),k=l.getFragmentShaderID(v);const xe=r.getRenderTarget(),Me=v.alphaTest>0,Te=v.clearcoat>0,ye=v.iridescence>0;return{isWebGL2:u,shaderID:V,shaderName:v.type,vertexShader:B,fragmentShader:le,defines:v.defines,customVertexShaderID:de,customFragmentShaderID:k,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,instancing:q.isInstancedMesh===!0,instancingColor:q.isInstancedMesh===!0&&q.instanceColor!==null,supportsVertexTextures:f,outputEncoding:xe===null?r.outputEncoding:xe.isXRRenderTarget===!0?xe.texture.encoding:xr,map:!!v.map,matcap:!!v.matcap,envMap:!!Y,envMapMode:Y&&Y.mapping,envMapCubeUVHeight:K,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===dx,tangentSpaceNormalMap:v.normalMapType===lp,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===Ke,clearcoat:Te,clearcoatMap:Te&&!!v.clearcoatMap,clearcoatRoughnessMap:Te&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:Te&&!!v.clearcoatNormalMap,iridescence:ye,iridescenceMap:ye&&!!v.iridescenceMap,iridescenceThicknessMap:ye&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===$r,alphaMap:!!v.alphaMap,alphaTest:Me,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!I.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(v.map||v.bumpMap||v.normalMap||v.specularMap||v.alphaMap||v.emissiveMap||v.roughnessMap||v.metalnessMap||v.clearcoatNormalMap||v.iridescenceMap||v.iridescenceThicknessMap||v.transmission>0||v.transmissionMap||v.thicknessMap||v.specularIntensityMap||v.specularColorMap||v.sheen>0||v.sheenColorMap||v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!N,useFog:v.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:h,skinning:q.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:be,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:v.toneMapped?r.toneMapping:hi,useLegacyLights:r.useLegacyLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===ai,flipSided:v.side===ln,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function m(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const D in v.defines)w.push(D),w.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(_(w,v),b(w,v),w.push(r.outputEncoding)),w.push(v.customProgramCacheKey),w.join()}function _(v,w){v.push(w.precision),v.push(w.outputEncoding),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.combine),v.push(w.vertexUvs),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function b(v,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.map&&a.enable(4),w.matcap&&a.enable(5),w.envMap&&a.enable(6),w.lightMap&&a.enable(7),w.aoMap&&a.enable(8),w.emissiveMap&&a.enable(9),w.bumpMap&&a.enable(10),w.normalMap&&a.enable(11),w.objectSpaceNormalMap&&a.enable(12),w.tangentSpaceNormalMap&&a.enable(13),w.clearcoat&&a.enable(14),w.clearcoatMap&&a.enable(15),w.clearcoatRoughnessMap&&a.enable(16),w.clearcoatNormalMap&&a.enable(17),w.iridescence&&a.enable(18),w.iridescenceMap&&a.enable(19),w.iridescenceThicknessMap&&a.enable(20),w.displacementMap&&a.enable(21),w.specularMap&&a.enable(22),w.roughnessMap&&a.enable(23),w.metalnessMap&&a.enable(24),w.gradientMap&&a.enable(25),w.alphaMap&&a.enable(26),w.alphaTest&&a.enable(27),w.vertexColors&&a.enable(28),w.vertexAlphas&&a.enable(29),w.vertexUvs&&a.enable(30),w.vertexTangents&&a.enable(31),w.uvsVertexOnly&&a.enable(32),v.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.specularIntensityMap&&a.enable(15),w.specularColorMap&&a.enable(16),w.transmission&&a.enable(17),w.transmissionMap&&a.enable(18),w.thicknessMap&&a.enable(19),w.sheen&&a.enable(20),w.sheenColorMap&&a.enable(21),w.sheenRoughnessMap&&a.enable(22),w.decodeVideoTexture&&a.enable(23),w.opaque&&a.enable(24),v.push(a.mask)}function x(v){const w=g[v.type];let D;if(w){const W=Gn[w];D=Yx.clone(W.uniforms)}else D=v.uniforms;return D}function y(v,w){let D;for(let W=0,q=c.length;W<q;W++){const N=c[W];if(N.cacheKey===w){D=N,++D.usedTimes;break}}return D===void 0&&(D=new rS(r,w,v,s),c.push(D)),D}function M(v){if(--v.usedTimes===0){const w=c.indexOf(v);c[w]=c[c.length-1],c.pop(),v.destroy()}}function A(v){l.remove(v)}function R(){l.dispose()}return{getParameters:d,getProgramCacheKey:m,getUniforms:x,acquireProgram:y,releaseProgram:M,releaseShaderCache:A,programs:c,dispose:R}}function cS(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function uS(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function vf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function yf(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,p,g,d,m){let _=r[e];return _===void 0?(_={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:d,group:m},r[e]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=p,_.groupOrder=g,_.renderOrder=h.renderOrder,_.z=d,_.group=m),e++,_}function a(h,f,p,g,d,m){const _=o(h,f,p,g,d,m);p.transmission>0?n.push(_):p.transparent===!0?i.push(_):t.push(_)}function l(h,f,p,g,d,m){const _=o(h,f,p,g,d,m);p.transmission>0?n.unshift(_):p.transparent===!0?i.unshift(_):t.unshift(_)}function c(h,f){t.length>1&&t.sort(h||uS),n.length>1&&n.sort(f||vf),i.length>1&&i.sort(f||vf)}function u(){for(let h=e,f=r.length;h<f;h++){const p=r[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function hS(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new yf,r.set(n,[o])):i>=s.length?(o=new yf,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function fS(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Oe};break;case"SpotLight":t={position:new F,direction:new F,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new F,halfWidth:new F,halfHeight:new F};break}return r[e.id]=t,t}}}function dS(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let pS=0;function mS(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function gS(r,e){const t=new fS,n=dS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new F);const s=new F,o=new ke,a=new ke;function l(u,h){let f=0,p=0,g=0;for(let W=0;W<9;W++)i.probe[W].set(0,0,0);let d=0,m=0,_=0,b=0,x=0,y=0,M=0,A=0,R=0,v=0;u.sort(mS);const w=h===!0?Math.PI:1;for(let W=0,q=u.length;W<q;W++){const N=u[W],I=N.color,H=N.intensity,Y=N.distance,K=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)f+=I.r*H*w,p+=I.g*H*w,g+=I.b*H*w;else if(N.isLightProbe)for(let V=0;V<9;V++)i.probe[V].addScaledVector(N.sh.coefficients[V],H);else if(N.isDirectionalLight){const V=t.get(N);if(V.color.copy(N.color).multiplyScalar(N.intensity*w),N.castShadow){const oe=N.shadow,se=n.get(N);se.shadowBias=oe.bias,se.shadowNormalBias=oe.normalBias,se.shadowRadius=oe.radius,se.shadowMapSize=oe.mapSize,i.directionalShadow[d]=se,i.directionalShadowMap[d]=K,i.directionalShadowMatrix[d]=N.shadow.matrix,y++}i.directional[d]=V,d++}else if(N.isSpotLight){const V=t.get(N);V.position.setFromMatrixPosition(N.matrixWorld),V.color.copy(I).multiplyScalar(H*w),V.distance=Y,V.coneCos=Math.cos(N.angle),V.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),V.decay=N.decay,i.spot[_]=V;const oe=N.shadow;if(N.map&&(i.spotLightMap[R]=N.map,R++,oe.updateMatrices(N),N.castShadow&&v++),i.spotLightMatrix[_]=oe.matrix,N.castShadow){const se=n.get(N);se.shadowBias=oe.bias,se.shadowNormalBias=oe.normalBias,se.shadowRadius=oe.radius,se.shadowMapSize=oe.mapSize,i.spotShadow[_]=se,i.spotShadowMap[_]=K,A++}_++}else if(N.isRectAreaLight){const V=t.get(N);V.color.copy(I).multiplyScalar(H),V.halfWidth.set(N.width*.5,0,0),V.halfHeight.set(0,N.height*.5,0),i.rectArea[b]=V,b++}else if(N.isPointLight){const V=t.get(N);if(V.color.copy(N.color).multiplyScalar(N.intensity*w),V.distance=N.distance,V.decay=N.decay,N.castShadow){const oe=N.shadow,se=n.get(N);se.shadowBias=oe.bias,se.shadowNormalBias=oe.normalBias,se.shadowRadius=oe.radius,se.shadowMapSize=oe.mapSize,se.shadowCameraNear=oe.camera.near,se.shadowCameraFar=oe.camera.far,i.pointShadow[m]=se,i.pointShadowMap[m]=K,i.pointShadowMatrix[m]=N.shadow.matrix,M++}i.point[m]=V,m++}else if(N.isHemisphereLight){const V=t.get(N);V.skyColor.copy(N.color).multiplyScalar(H*w),V.groundColor.copy(N.groundColor).multiplyScalar(H*w),i.hemi[x]=V,x++}}b>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=g;const D=i.hash;(D.directionalLength!==d||D.pointLength!==m||D.spotLength!==_||D.rectAreaLength!==b||D.hemiLength!==x||D.numDirectionalShadows!==y||D.numPointShadows!==M||D.numSpotShadows!==A||D.numSpotMaps!==R)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=b,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=A+R-v,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=v,D.directionalLength=d,D.pointLength=m,D.spotLength=_,D.rectAreaLength=b,D.hemiLength=x,D.numDirectionalShadows=y,D.numPointShadows=M,D.numSpotShadows=A,D.numSpotMaps=R,i.version=pS++)}function c(u,h){let f=0,p=0,g=0,d=0,m=0;const _=h.matrixWorldInverse;for(let b=0,x=u.length;b<x;b++){const y=u[b];if(y.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(_),f++}else if(y.isSpotLight){const M=i.spot[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(_),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(_),g++}else if(y.isRectAreaLight){const M=i.rectArea[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(_),a.identity(),o.copy(y.matrixWorld),o.premultiply(_),a.extractRotation(o),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),d++}else if(y.isPointLight){const M=i.point[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(_),p++}else if(y.isHemisphereLight){const M=i.hemi[m];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(_),m++}}}return{setup:l,setupView:c,state:i}}function bf(r,e){const t=new gS(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function _S(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new bf(r,e),t.set(s,[l])):o>=a.length?(l=new bf(r,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class xS extends Xn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vS extends Xn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new F,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const yS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bS=`uniform sampler2D shadow_pass;
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
}`;function MS(r,e,t){let n=new ru;const i=new Ie,s=new Ie,o=new nt,a=new xS({depthPacking:fx}),l=new vS,c={},u=t.maxTextureSize,h={[di]:ln,[ln]:di,[ai]:ai},f=new yr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:yS,fragmentShader:bS}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new fn;g.setAttribute("position",new jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new an(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ep,this.render=function(y,M,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;const R=r.getRenderTarget(),v=r.getActiveCubeFace(),w=r.getActiveMipmapLevel(),D=r.state;D.setBlending(Oi),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);for(let W=0,q=y.length;W<q;W++){const N=y[W],I=N.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;i.copy(I.mapSize);const H=I.getFrameExtents();if(i.multiply(H),s.copy(I.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/H.x),i.x=s.x*H.x,I.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/H.y),i.y=s.y*H.y,I.mapSize.y=s.y)),I.map===null){const K=this.type!==Vs?{minFilter:St,magFilter:St}:{};I.map=new vr(i.x,i.y,K),I.map.texture.name=N.name+".shadowMap",I.camera.updateProjectionMatrix()}r.setRenderTarget(I.map),r.clear();const Y=I.getViewportCount();for(let K=0;K<Y;K++){const V=I.getViewport(K);o.set(s.x*V.x,s.y*V.y,s.x*V.z,s.y*V.w),D.viewport(o),I.updateMatrices(N,K),n=I.getFrustum(),x(M,A,I.camera,N,this.type)}I.isPointLightShadow!==!0&&this.type===Vs&&_(I,A),I.needsUpdate=!1}m.needsUpdate=!1,r.setRenderTarget(R,v,w)};function _(y,M){const A=e.update(d);f.defines.VSM_SAMPLES!==y.blurSamples&&(f.defines.VSM_SAMPLES=y.blurSamples,p.defines.VSM_SAMPLES=y.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new vr(i.x,i.y)),f.uniforms.shadow_pass.value=y.map.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,r.setRenderTarget(y.mapPass),r.clear(),r.renderBufferDirect(M,null,A,f,d,null),p.uniforms.shadow_pass.value=y.mapPass.texture,p.uniforms.resolution.value=y.mapSize,p.uniforms.radius.value=y.radius,r.setRenderTarget(y.map),r.clear(),r.renderBufferDirect(M,null,A,p,d,null)}function b(y,M,A,R,v,w){let D=null;const W=A.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(W!==void 0)D=W;else if(D=A.isPointLight===!0?l:a,r.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const q=D.uuid,N=M.uuid;let I=c[q];I===void 0&&(I={},c[q]=I);let H=I[N];H===void 0&&(H=D.clone(),I[N]=H),D=H}return D.visible=M.visible,D.wireframe=M.wireframe,w===Vs?D.side=M.shadowSide!==null?M.shadowSide:M.side:D.side=M.shadowSide!==null?M.shadowSide:h[M.side],D.alphaMap=M.alphaMap,D.alphaTest=M.alphaTest,D.map=M.map,D.clipShadows=M.clipShadows,D.clippingPlanes=M.clippingPlanes,D.clipIntersection=M.clipIntersection,D.displacementMap=M.displacementMap,D.displacementScale=M.displacementScale,D.displacementBias=M.displacementBias,D.wireframeLinewidth=M.wireframeLinewidth,D.linewidth=M.linewidth,A.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(D.referencePosition.setFromMatrixPosition(A.matrixWorld),D.nearDistance=R,D.farDistance=v),D}function x(y,M,A,R,v){if(y.visible===!1)return;if(y.layers.test(M.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&v===Vs)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,y.matrixWorld);const W=e.update(y),q=y.material;if(Array.isArray(q)){const N=W.groups;for(let I=0,H=N.length;I<H;I++){const Y=N[I],K=q[Y.materialIndex];if(K&&K.visible){const V=b(y,K,R,A.near,A.far,v);r.renderBufferDirect(A,null,W,V,y,Y)}}}else if(q.visible){const N=b(y,q,R,A.near,A.far,v);r.renderBufferDirect(A,null,W,N,y,null)}}const D=y.children;for(let W=0,q=D.length;W<q;W++)x(D[W],M,A,R,v)}}function SS(r,e,t){const n=t.isWebGL2;function i(){let O=!1;const ee=new nt;let fe=null;const Se=new nt(0,0,0,0);return{setMask:function(Ee){fe!==Ee&&!O&&(r.colorMask(Ee,Ee,Ee,Ee),fe=Ee)},setLocked:function(Ee){O=Ee},setClear:function(Ee,it,yt,Ut,Nn){Nn===!0&&(Ee*=Ut,it*=Ut,yt*=Ut),ee.set(Ee,it,yt,Ut),Se.equals(ee)===!1&&(r.clearColor(Ee,it,yt,Ut),Se.copy(ee))},reset:function(){O=!1,fe=null,Se.set(-1,0,0,0)}}}function s(){let O=!1,ee=null,fe=null,Se=null;return{setTest:function(Ee){Ee?Me(2929):Te(2929)},setMask:function(Ee){ee!==Ee&&!O&&(r.depthMask(Ee),ee=Ee)},setFunc:function(Ee){if(fe!==Ee){switch(Ee){case O0:r.depthFunc(512);break;case N0:r.depthFunc(519);break;case F0:r.depthFunc(513);break;case nc:r.depthFunc(515);break;case U0:r.depthFunc(514);break;case z0:r.depthFunc(518);break;case B0:r.depthFunc(516);break;case k0:r.depthFunc(517);break;default:r.depthFunc(515)}fe=Ee}},setLocked:function(Ee){O=Ee},setClear:function(Ee){Se!==Ee&&(r.clearDepth(Ee),Se=Ee)},reset:function(){O=!1,ee=null,fe=null,Se=null}}}function o(){let O=!1,ee=null,fe=null,Se=null,Ee=null,it=null,yt=null,Ut=null,Nn=null;return{setTest:function(ct){O||(ct?Me(2960):Te(2960))},setMask:function(ct){ee!==ct&&!O&&(r.stencilMask(ct),ee=ct)},setFunc:function(ct,dn,Fn){(fe!==ct||Se!==dn||Ee!==Fn)&&(r.stencilFunc(ct,dn,Fn),fe=ct,Se=dn,Ee=Fn)},setOp:function(ct,dn,Fn){(it!==ct||yt!==dn||Ut!==Fn)&&(r.stencilOp(ct,dn,Fn),it=ct,yt=dn,Ut=Fn)},setLocked:function(ct){O=ct},setClear:function(ct){Nn!==ct&&(r.clearStencil(ct),Nn=ct)},reset:function(){O=!1,ee=null,fe=null,Se=null,Ee=null,it=null,yt=null,Ut=null,Nn=null}}}const a=new i,l=new s,c=new o,u=new WeakMap,h=new WeakMap;let f={},p={},g=new WeakMap,d=[],m=null,_=!1,b=null,x=null,y=null,M=null,A=null,R=null,v=null,w=!1,D=null,W=null,q=null,N=null,I=null;const H=r.getParameter(35661);let Y=!1,K=0;const V=r.getParameter(7938);V.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(V)[1]),Y=K>=1):V.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),Y=K>=2);let oe=null,se={};const be=r.getParameter(3088),B=r.getParameter(2978),le=new nt().fromArray(be),de=new nt().fromArray(B);function k(O,ee,fe){const Se=new Uint8Array(4),Ee=r.createTexture();r.bindTexture(O,Ee),r.texParameteri(O,10241,9728),r.texParameteri(O,10240,9728);for(let it=0;it<fe;it++)r.texImage2D(ee+it,0,6408,1,1,0,6408,5121,Se);return Ee}const xe={};xe[3553]=k(3553,3553,1),xe[34067]=k(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Me(2929),l.setFunc(nc),J(!1),ae(lh),Me(2884),j(Oi);function Me(O){f[O]!==!0&&(r.enable(O),f[O]=!0)}function Te(O){f[O]!==!1&&(r.disable(O),f[O]=!1)}function ye(O,ee){return p[O]!==ee?(r.bindFramebuffer(O,ee),p[O]=ee,n&&(O===36009&&(p[36160]=ee),O===36160&&(p[36009]=ee)),!0):!1}function Ce(O,ee){let fe=d,Se=!1;if(O)if(fe=g.get(ee),fe===void 0&&(fe=[],g.set(ee,fe)),O.isWebGLMultipleRenderTargets){const Ee=O.texture;if(fe.length!==Ee.length||fe[0]!==36064){for(let it=0,yt=Ee.length;it<yt;it++)fe[it]=36064+it;fe.length=Ee.length,Se=!0}}else fe[0]!==36064&&(fe[0]=36064,Se=!0);else fe[0]!==1029&&(fe[0]=1029,Se=!0);Se&&(t.isWebGL2?r.drawBuffers(fe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(fe))}function Pe(O){return m!==O?(r.useProgram(O),m=O,!0):!1}const C={[Gr]:32774,[S0]:32778,[w0]:32779};if(n)C[fh]=32775,C[dh]=32776;else{const O=e.get("EXT_blend_minmax");O!==null&&(C[fh]=O.MIN_EXT,C[dh]=O.MAX_EXT)}const P={[T0]:0,[E0]:1,[A0]:768,[tp]:770,[I0]:776,[P0]:774,[L0]:772,[C0]:769,[np]:771,[D0]:775,[R0]:773};function j(O,ee,fe,Se,Ee,it,yt,Ut){if(O===Oi){_===!0&&(Te(3042),_=!1);return}if(_===!1&&(Me(3042),_=!0),O!==M0){if(O!==b||Ut!==w){if((x!==Gr||A!==Gr)&&(r.blendEquation(32774),x=Gr,A=Gr),Ut)switch(O){case $r:r.blendFuncSeparate(1,771,1,771);break;case ch:r.blendFunc(1,1);break;case uh:r.blendFuncSeparate(0,769,0,1);break;case hh:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case $r:r.blendFuncSeparate(770,771,1,771);break;case ch:r.blendFunc(770,1);break;case uh:r.blendFuncSeparate(0,769,0,1);break;case hh:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}y=null,M=null,R=null,v=null,b=O,w=Ut}return}Ee=Ee||ee,it=it||fe,yt=yt||Se,(ee!==x||Ee!==A)&&(r.blendEquationSeparate(C[ee],C[Ee]),x=ee,A=Ee),(fe!==y||Se!==M||it!==R||yt!==v)&&(r.blendFuncSeparate(P[fe],P[Se],P[it],P[yt]),y=fe,M=Se,R=it,v=yt),b=O,w=!1}function te(O,ee){O.side===ai?Te(2884):Me(2884);let fe=O.side===ln;ee&&(fe=!fe),J(fe),O.blending===$r&&O.transparent===!1?j(Oi):j(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),a.setMask(O.colorWrite);const Se=O.stencilWrite;c.setTest(Se),Se&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ie(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Me(32926):Te(32926)}function J(O){D!==O&&(O?r.frontFace(2304):r.frontFace(2305),D=O)}function ae(O){O!==v0?(Me(2884),O!==W&&(O===lh?r.cullFace(1029):O===y0?r.cullFace(1028):r.cullFace(1032))):Te(2884),W=O}function ue(O){O!==q&&(Y&&r.lineWidth(O),q=O)}function ie(O,ee,fe){O?(Me(32823),(N!==ee||I!==fe)&&(r.polygonOffset(ee,fe),N=ee,I=fe)):Te(32823)}function he(O){O?Me(3089):Te(3089)}function re(O){O===void 0&&(O=33984+H-1),oe!==O&&(r.activeTexture(O),oe=O)}function T(O,ee,fe){fe===void 0&&(oe===null?fe=33984+H-1:fe=oe);let Se=se[fe];Se===void 0&&(Se={type:void 0,texture:void 0},se[fe]=Se),(Se.type!==O||Se.texture!==ee)&&(oe!==fe&&(r.activeTexture(fe),oe=fe),r.bindTexture(O,ee||xe[O]),Se.type=O,Se.texture=ee)}function S(){const O=se[oe];O!==void 0&&O.type!==void 0&&(r.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function U(){try{r.compressedTexImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function $(){try{r.compressedTexImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Q(){try{r.texSubImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ce(){try{r.texSubImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pe(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function L(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function z(){try{r.texStorage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _e(){try{r.texStorage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function me(){try{r.texImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function we(){try{r.texImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ae(O){le.equals(O)===!1&&(r.scissor(O.x,O.y,O.z,O.w),le.copy(O))}function ve(O){de.equals(O)===!1&&(r.viewport(O.x,O.y,O.z,O.w),de.copy(O))}function Re(O,ee){let fe=h.get(ee);fe===void 0&&(fe=new WeakMap,h.set(ee,fe));let Se=fe.get(O);Se===void 0&&(Se=r.getUniformBlockIndex(ee,O.name),fe.set(O,Se))}function Ve(O,ee){const Se=h.get(ee).get(O);u.get(ee)!==Se&&(r.uniformBlockBinding(ee,Se,O.__bindingPointIndex),u.set(ee,Se))}function Je(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},oe=null,se={},p={},g=new WeakMap,d=[],m=null,_=!1,b=null,x=null,y=null,M=null,A=null,R=null,v=null,w=!1,D=null,W=null,q=null,N=null,I=null,le.set(0,0,r.canvas.width,r.canvas.height),de.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Me,disable:Te,bindFramebuffer:ye,drawBuffers:Ce,useProgram:Pe,setBlending:j,setMaterial:te,setFlipSided:J,setCullFace:ae,setLineWidth:ue,setPolygonOffset:ie,setScissorTest:he,activeTexture:re,bindTexture:T,unbindTexture:S,compressedTexImage2D:U,compressedTexImage3D:$,texImage2D:me,texImage3D:we,updateUBOMapping:Re,uniformBlockBinding:Ve,texStorage2D:z,texStorage3D:_e,texSubImage2D:Q,texSubImage3D:ce,compressedTexSubImage2D:pe,compressedTexSubImage3D:L,scissor:Ae,viewport:ve,reset:Je}}function wS(r,e,t,n,i,s,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let d;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(T,S){return _?new OffscreenCanvas(T,S):ao("canvas")}function x(T,S,U,$){let Q=1;if((T.width>$||T.height>$)&&(Q=$/Math.max(T.width,T.height)),Q<1||S===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const ce=S?hp:Math.floor,pe=ce(Q*T.width),L=ce(Q*T.height);d===void 0&&(d=b(pe,L));const z=U?b(pe,L):d;return z.width=pe,z.height=L,z.getContext("2d").drawImage(T,0,0,pe,L),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+pe+"x"+L+")."),z}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function y(T){return cc(T.width)&&cc(T.height)}function M(T){return a?!1:T.wrapS!==vn||T.wrapT!==vn||T.minFilter!==St&&T.minFilter!==Yt}function A(T,S){return T.generateMipmaps&&S&&T.minFilter!==St&&T.minFilter!==Yt}function R(T){r.generateMipmap(T)}function v(T,S,U,$,Q=!1){if(a===!1)return S;if(T!==null){if(r[T]!==void 0)return r[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ce=S;return S===6403&&(U===5126&&(ce=33326),U===5131&&(ce=33325),U===5121&&(ce=33321)),S===33319&&(U===5126&&(ce=33328),U===5131&&(ce=33327),U===5121&&(ce=33323)),S===6408&&(U===5126&&(ce=34836),U===5131&&(ce=34842),U===5121&&(ce=$===Ke&&Q===!1?35907:32856),U===32819&&(ce=32854),U===32820&&(ce=32855)),(ce===33325||ce===33326||ce===33327||ce===33328||ce===34842||ce===34836)&&e.get("EXT_color_buffer_float"),ce}function w(T,S,U){return A(T,U)===!0||T.isFramebufferTexture&&T.minFilter!==St&&T.minFilter!==Yt?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function D(T){return T===St||T===sc||T===na?9728:9729}function W(T){const S=T.target;S.removeEventListener("dispose",W),N(S),S.isVideoTexture&&g.delete(S)}function q(T){const S=T.target;S.removeEventListener("dispose",q),H(S)}function N(T){const S=n.get(T);if(S.__webglInit===void 0)return;const U=T.source,$=m.get(U);if($){const Q=$[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&I(T),Object.keys($).length===0&&m.delete(U)}n.remove(T)}function I(T){const S=n.get(T);r.deleteTexture(S.__webglTexture);const U=T.source,$=m.get(U);delete $[S.__cacheKey],o.memory.textures--}function H(T){const S=T.texture,U=n.get(T),$=n.get(S);if($.__webglTexture!==void 0&&(r.deleteTexture($.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++)r.deleteFramebuffer(U.__webglFramebuffer[Q]),U.__webglDepthbuffer&&r.deleteRenderbuffer(U.__webglDepthbuffer[Q]);else{if(r.deleteFramebuffer(U.__webglFramebuffer),U.__webglDepthbuffer&&r.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&r.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let Q=0;Q<U.__webglColorRenderbuffer.length;Q++)U.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(U.__webglColorRenderbuffer[Q]);U.__webglDepthRenderbuffer&&r.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let Q=0,ce=S.length;Q<ce;Q++){const pe=n.get(S[Q]);pe.__webglTexture&&(r.deleteTexture(pe.__webglTexture),o.memory.textures--),n.remove(S[Q])}n.remove(S),n.remove(T)}let Y=0;function K(){Y=0}function V(){const T=Y;return T>=l&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+l),Y+=1,T}function oe(T){const S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.wrapR||0),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.encoding),S.join()}function se(T,S){const U=n.get(T);if(T.isVideoTexture&&he(T),T.isRenderTargetTexture===!1&&T.version>0&&U.__version!==T.version){const $=T.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Te(U,T,S);return}}t.bindTexture(3553,U.__webglTexture,33984+S)}function be(T,S){const U=n.get(T);if(T.version>0&&U.__version!==T.version){Te(U,T,S);return}t.bindTexture(35866,U.__webglTexture,33984+S)}function B(T,S){const U=n.get(T);if(T.version>0&&U.__version!==T.version){Te(U,T,S);return}t.bindTexture(32879,U.__webglTexture,33984+S)}function le(T,S){const U=n.get(T);if(T.version>0&&U.__version!==T.version){ye(U,T,S);return}t.bindTexture(34067,U.__webglTexture,33984+S)}const de={[as]:10497,[vn]:33071,[ha]:33648},k={[St]:9728,[sc]:9984,[na]:9986,[Yt]:9729,[sp]:9985,[gr]:9987};function xe(T,S,U){if(U?(r.texParameteri(T,10242,de[S.wrapS]),r.texParameteri(T,10243,de[S.wrapT]),(T===32879||T===35866)&&r.texParameteri(T,32882,de[S.wrapR]),r.texParameteri(T,10240,k[S.magFilter]),r.texParameteri(T,10241,k[S.minFilter])):(r.texParameteri(T,10242,33071),r.texParameteri(T,10243,33071),(T===32879||T===35866)&&r.texParameteri(T,32882,33071),(S.wrapS!==vn||S.wrapT!==vn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(T,10240,D(S.magFilter)),r.texParameteri(T,10241,D(S.minFilter)),S.minFilter!==St&&S.minFilter!==Yt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const $=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===St||S.minFilter!==na&&S.minFilter!==gr||S.type===Ei&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===io&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(r.texParameterf(T,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function Me(T,S){let U=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",W));const $=S.source;let Q=m.get($);Q===void 0&&(Q={},m.set($,Q));const ce=oe(S);if(ce!==T.__cacheKey){Q[ce]===void 0&&(Q[ce]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,U=!0),Q[ce].usedTimes++;const pe=Q[T.__cacheKey];pe!==void 0&&(Q[T.__cacheKey].usedTimes--,pe.usedTimes===0&&I(S)),T.__cacheKey=ce,T.__webglTexture=Q[ce].texture}return U}function Te(T,S,U){let $=3553;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&($=35866),S.isData3DTexture&&($=32879);const Q=Me(T,S),ce=S.source;t.bindTexture($,T.__webglTexture,33984+U);const pe=n.get(ce);if(ce.version!==pe.__version||Q===!0){t.activeTexture(33984+U),r.pixelStorei(37440,S.flipY),r.pixelStorei(37441,S.premultiplyAlpha),r.pixelStorei(3317,S.unpackAlignment),r.pixelStorei(37443,0);const L=M(S)&&y(S.image)===!1;let z=x(S.image,L,!1,u);z=re(S,z);const _e=y(z)||a,me=s.convert(S.format,S.encoding);let we=s.convert(S.type),Ae=v(S.internalFormat,me,we,S.encoding,S.isVideoTexture);xe($,S,_e);let ve;const Re=S.mipmaps,Ve=a&&S.isVideoTexture!==!0,Je=pe.__version===void 0||Q===!0,O=w(S,z,_e);if(S.isDepthTexture)Ae=6402,a?S.type===Ei?Ae=36012:S.type===or?Ae=33190:S.type===Zr?Ae=35056:Ae=33189:S.type===Ei&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===fr&&Ae===6402&&S.type!==op&&S.type!==or&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=or,we=s.convert(S.type)),S.format===ls&&Ae===6402&&(Ae=34041,S.type!==Zr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Zr,we=s.convert(S.type))),Je&&(Ve?t.texStorage2D(3553,1,Ae,z.width,z.height):t.texImage2D(3553,0,Ae,z.width,z.height,0,me,we,null));else if(S.isDataTexture)if(Re.length>0&&_e){Ve&&Je&&t.texStorage2D(3553,O,Ae,Re[0].width,Re[0].height);for(let ee=0,fe=Re.length;ee<fe;ee++)ve=Re[ee],Ve?t.texSubImage2D(3553,ee,0,0,ve.width,ve.height,me,we,ve.data):t.texImage2D(3553,ee,Ae,ve.width,ve.height,0,me,we,ve.data);S.generateMipmaps=!1}else Ve?(Je&&t.texStorage2D(3553,O,Ae,z.width,z.height),t.texSubImage2D(3553,0,0,0,z.width,z.height,me,we,z.data)):t.texImage2D(3553,0,Ae,z.width,z.height,0,me,we,z.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ve&&Je&&t.texStorage3D(35866,O,Ae,Re[0].width,Re[0].height,z.depth);for(let ee=0,fe=Re.length;ee<fe;ee++)ve=Re[ee],S.format!==yn?me!==null?Ve?t.compressedTexSubImage3D(35866,ee,0,0,0,ve.width,ve.height,z.depth,me,ve.data,0,0):t.compressedTexImage3D(35866,ee,Ae,ve.width,ve.height,z.depth,0,ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?t.texSubImage3D(35866,ee,0,0,0,ve.width,ve.height,z.depth,me,we,ve.data):t.texImage3D(35866,ee,Ae,ve.width,ve.height,z.depth,0,me,we,ve.data)}else{Ve&&Je&&t.texStorage2D(3553,O,Ae,Re[0].width,Re[0].height);for(let ee=0,fe=Re.length;ee<fe;ee++)ve=Re[ee],S.format!==yn?me!==null?Ve?t.compressedTexSubImage2D(3553,ee,0,0,ve.width,ve.height,me,ve.data):t.compressedTexImage2D(3553,ee,Ae,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?t.texSubImage2D(3553,ee,0,0,ve.width,ve.height,me,we,ve.data):t.texImage2D(3553,ee,Ae,ve.width,ve.height,0,me,we,ve.data)}else if(S.isDataArrayTexture)Ve?(Je&&t.texStorage3D(35866,O,Ae,z.width,z.height,z.depth),t.texSubImage3D(35866,0,0,0,0,z.width,z.height,z.depth,me,we,z.data)):t.texImage3D(35866,0,Ae,z.width,z.height,z.depth,0,me,we,z.data);else if(S.isData3DTexture)Ve?(Je&&t.texStorage3D(32879,O,Ae,z.width,z.height,z.depth),t.texSubImage3D(32879,0,0,0,0,z.width,z.height,z.depth,me,we,z.data)):t.texImage3D(32879,0,Ae,z.width,z.height,z.depth,0,me,we,z.data);else if(S.isFramebufferTexture){if(Je)if(Ve)t.texStorage2D(3553,O,Ae,z.width,z.height);else{let ee=z.width,fe=z.height;for(let Se=0;Se<O;Se++)t.texImage2D(3553,Se,Ae,ee,fe,0,me,we,null),ee>>=1,fe>>=1}}else if(Re.length>0&&_e){Ve&&Je&&t.texStorage2D(3553,O,Ae,Re[0].width,Re[0].height);for(let ee=0,fe=Re.length;ee<fe;ee++)ve=Re[ee],Ve?t.texSubImage2D(3553,ee,0,0,me,we,ve):t.texImage2D(3553,ee,Ae,me,we,ve);S.generateMipmaps=!1}else Ve?(Je&&t.texStorage2D(3553,O,Ae,z.width,z.height),t.texSubImage2D(3553,0,0,0,me,we,z)):t.texImage2D(3553,0,Ae,me,we,z);A(S,_e)&&R($),pe.__version=ce.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function ye(T,S,U){if(S.image.length!==6)return;const $=Me(T,S),Q=S.source;t.bindTexture(34067,T.__webglTexture,33984+U);const ce=n.get(Q);if(Q.version!==ce.__version||$===!0){t.activeTexture(33984+U),r.pixelStorei(37440,S.flipY),r.pixelStorei(37441,S.premultiplyAlpha),r.pixelStorei(3317,S.unpackAlignment),r.pixelStorei(37443,0);const pe=S.isCompressedTexture||S.image[0].isCompressedTexture,L=S.image[0]&&S.image[0].isDataTexture,z=[];for(let ee=0;ee<6;ee++)!pe&&!L?z[ee]=x(S.image[ee],!1,!0,c):z[ee]=L?S.image[ee].image:S.image[ee],z[ee]=re(S,z[ee]);const _e=z[0],me=y(_e)||a,we=s.convert(S.format,S.encoding),Ae=s.convert(S.type),ve=v(S.internalFormat,we,Ae,S.encoding),Re=a&&S.isVideoTexture!==!0,Ve=ce.__version===void 0||$===!0;let Je=w(S,_e,me);xe(34067,S,me);let O;if(pe){Re&&Ve&&t.texStorage2D(34067,Je,ve,_e.width,_e.height);for(let ee=0;ee<6;ee++){O=z[ee].mipmaps;for(let fe=0;fe<O.length;fe++){const Se=O[fe];S.format!==yn?we!==null?Re?t.compressedTexSubImage2D(34069+ee,fe,0,0,Se.width,Se.height,we,Se.data):t.compressedTexImage2D(34069+ee,fe,ve,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?t.texSubImage2D(34069+ee,fe,0,0,Se.width,Se.height,we,Ae,Se.data):t.texImage2D(34069+ee,fe,ve,Se.width,Se.height,0,we,Ae,Se.data)}}}else{O=S.mipmaps,Re&&Ve&&(O.length>0&&Je++,t.texStorage2D(34067,Je,ve,z[0].width,z[0].height));for(let ee=0;ee<6;ee++)if(L){Re?t.texSubImage2D(34069+ee,0,0,0,z[ee].width,z[ee].height,we,Ae,z[ee].data):t.texImage2D(34069+ee,0,ve,z[ee].width,z[ee].height,0,we,Ae,z[ee].data);for(let fe=0;fe<O.length;fe++){const Ee=O[fe].image[ee].image;Re?t.texSubImage2D(34069+ee,fe+1,0,0,Ee.width,Ee.height,we,Ae,Ee.data):t.texImage2D(34069+ee,fe+1,ve,Ee.width,Ee.height,0,we,Ae,Ee.data)}}else{Re?t.texSubImage2D(34069+ee,0,0,0,we,Ae,z[ee]):t.texImage2D(34069+ee,0,ve,we,Ae,z[ee]);for(let fe=0;fe<O.length;fe++){const Se=O[fe];Re?t.texSubImage2D(34069+ee,fe+1,0,0,we,Ae,Se.image[ee]):t.texImage2D(34069+ee,fe+1,ve,we,Ae,Se.image[ee])}}}A(S,me)&&R(34067),ce.__version=Q.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function Ce(T,S,U,$,Q){const ce=s.convert(U.format,U.encoding),pe=s.convert(U.type),L=v(U.internalFormat,ce,pe,U.encoding);n.get(S).__hasExternalTextures||(Q===32879||Q===35866?t.texImage3D(Q,0,L,S.width,S.height,S.depth,0,ce,pe,null):t.texImage2D(Q,0,L,S.width,S.height,0,ce,pe,null)),t.bindFramebuffer(36160,T),ie(S)?f.framebufferTexture2DMultisampleEXT(36160,$,Q,n.get(U).__webglTexture,0,ue(S)):(Q===3553||Q>=34069&&Q<=34074)&&r.framebufferTexture2D(36160,$,Q,n.get(U).__webglTexture,0),t.bindFramebuffer(36160,null)}function Pe(T,S,U){if(r.bindRenderbuffer(36161,T),S.depthBuffer&&!S.stencilBuffer){let $=33189;if(U||ie(S)){const Q=S.depthTexture;Q&&Q.isDepthTexture&&(Q.type===Ei?$=36012:Q.type===or&&($=33190));const ce=ue(S);ie(S)?f.renderbufferStorageMultisampleEXT(36161,ce,$,S.width,S.height):r.renderbufferStorageMultisample(36161,ce,$,S.width,S.height)}else r.renderbufferStorage(36161,$,S.width,S.height);r.framebufferRenderbuffer(36160,36096,36161,T)}else if(S.depthBuffer&&S.stencilBuffer){const $=ue(S);U&&ie(S)===!1?r.renderbufferStorageMultisample(36161,$,35056,S.width,S.height):ie(S)?f.renderbufferStorageMultisampleEXT(36161,$,35056,S.width,S.height):r.renderbufferStorage(36161,34041,S.width,S.height),r.framebufferRenderbuffer(36160,33306,36161,T)}else{const $=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let Q=0;Q<$.length;Q++){const ce=$[Q],pe=s.convert(ce.format,ce.encoding),L=s.convert(ce.type),z=v(ce.internalFormat,pe,L,ce.encoding),_e=ue(S);U&&ie(S)===!1?r.renderbufferStorageMultisample(36161,_e,z,S.width,S.height):ie(S)?f.renderbufferStorageMultisampleEXT(36161,_e,z,S.width,S.height):r.renderbufferStorage(36161,z,S.width,S.height)}}r.bindRenderbuffer(36161,null)}function C(T,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),se(S.depthTexture,0);const $=n.get(S.depthTexture).__webglTexture,Q=ue(S);if(S.depthTexture.format===fr)ie(S)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,$,0,Q):r.framebufferTexture2D(36160,36096,3553,$,0);else if(S.depthTexture.format===ls)ie(S)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,$,0,Q):r.framebufferTexture2D(36160,33306,3553,$,0);else throw new Error("Unknown depthTexture format")}function P(T){const S=n.get(T),U=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!S.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");C(S.__webglFramebuffer,T)}else if(U){S.__webglDepthbuffer=[];for(let $=0;$<6;$++)t.bindFramebuffer(36160,S.__webglFramebuffer[$]),S.__webglDepthbuffer[$]=r.createRenderbuffer(),Pe(S.__webglDepthbuffer[$],T,!1)}else t.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=r.createRenderbuffer(),Pe(S.__webglDepthbuffer,T,!1);t.bindFramebuffer(36160,null)}function j(T,S,U){const $=n.get(T);S!==void 0&&Ce($.__webglFramebuffer,T,T.texture,36064,3553),U!==void 0&&P(T)}function te(T){const S=T.texture,U=n.get(T),$=n.get(S);T.addEventListener("dispose",q),T.isWebGLMultipleRenderTargets!==!0&&($.__webglTexture===void 0&&($.__webglTexture=r.createTexture()),$.__version=S.version,o.memory.textures++);const Q=T.isWebGLCubeRenderTarget===!0,ce=T.isWebGLMultipleRenderTargets===!0,pe=y(T)||a;if(Q){U.__webglFramebuffer=[];for(let L=0;L<6;L++)U.__webglFramebuffer[L]=r.createFramebuffer()}else{if(U.__webglFramebuffer=r.createFramebuffer(),ce)if(i.drawBuffers){const L=T.texture;for(let z=0,_e=L.length;z<_e;z++){const me=n.get(L[z]);me.__webglTexture===void 0&&(me.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&ie(T)===!1){const L=ce?S:[S];U.__webglMultisampledFramebuffer=r.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,U.__webglMultisampledFramebuffer);for(let z=0;z<L.length;z++){const _e=L[z];U.__webglColorRenderbuffer[z]=r.createRenderbuffer(),r.bindRenderbuffer(36161,U.__webglColorRenderbuffer[z]);const me=s.convert(_e.format,_e.encoding),we=s.convert(_e.type),Ae=v(_e.internalFormat,me,we,_e.encoding,T.isXRRenderTarget===!0),ve=ue(T);r.renderbufferStorageMultisample(36161,ve,Ae,T.width,T.height),r.framebufferRenderbuffer(36160,36064+z,36161,U.__webglColorRenderbuffer[z])}r.bindRenderbuffer(36161,null),T.depthBuffer&&(U.__webglDepthRenderbuffer=r.createRenderbuffer(),Pe(U.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(36160,null)}}if(Q){t.bindTexture(34067,$.__webglTexture),xe(34067,S,pe);for(let L=0;L<6;L++)Ce(U.__webglFramebuffer[L],T,S,36064,34069+L);A(S,pe)&&R(34067),t.unbindTexture()}else if(ce){const L=T.texture;for(let z=0,_e=L.length;z<_e;z++){const me=L[z],we=n.get(me);t.bindTexture(3553,we.__webglTexture),xe(3553,me,pe),Ce(U.__webglFramebuffer,T,me,36064+z,3553),A(me,pe)&&R(3553)}t.unbindTexture()}else{let L=3553;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?L=T.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(L,$.__webglTexture),xe(L,S,pe),Ce(U.__webglFramebuffer,T,S,36064,L),A(S,pe)&&R(L),t.unbindTexture()}T.depthBuffer&&P(T)}function J(T){const S=y(T)||a,U=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let $=0,Q=U.length;$<Q;$++){const ce=U[$];if(A(ce,S)){const pe=T.isWebGLCubeRenderTarget?34067:3553,L=n.get(ce).__webglTexture;t.bindTexture(pe,L),R(pe),t.unbindTexture()}}}function ae(T){if(a&&T.samples>0&&ie(T)===!1){const S=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],U=T.width,$=T.height;let Q=16384;const ce=[],pe=T.stencilBuffer?33306:36096,L=n.get(T),z=T.isWebGLMultipleRenderTargets===!0;if(z)for(let _e=0;_e<S.length;_e++)t.bindFramebuffer(36160,L.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+_e,36161,null),t.bindFramebuffer(36160,L.__webglFramebuffer),r.framebufferTexture2D(36009,36064+_e,3553,null,0);t.bindFramebuffer(36008,L.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,L.__webglFramebuffer);for(let _e=0;_e<S.length;_e++){ce.push(36064+_e),T.depthBuffer&&ce.push(pe);const me=L.__ignoreDepthValues!==void 0?L.__ignoreDepthValues:!1;if(me===!1&&(T.depthBuffer&&(Q|=256),T.stencilBuffer&&(Q|=1024)),z&&r.framebufferRenderbuffer(36008,36064,36161,L.__webglColorRenderbuffer[_e]),me===!0&&(r.invalidateFramebuffer(36008,[pe]),r.invalidateFramebuffer(36009,[pe])),z){const we=n.get(S[_e]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,we,0)}r.blitFramebuffer(0,0,U,$,0,0,U,$,Q,9728),p&&r.invalidateFramebuffer(36008,ce)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),z)for(let _e=0;_e<S.length;_e++){t.bindFramebuffer(36160,L.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+_e,36161,L.__webglColorRenderbuffer[_e]);const me=n.get(S[_e]).__webglTexture;t.bindFramebuffer(36160,L.__webglFramebuffer),r.framebufferTexture2D(36009,36064+_e,3553,me,0)}t.bindFramebuffer(36009,L.__webglMultisampledFramebuffer)}}function ue(T){return Math.min(h,T.samples)}function ie(T){const S=n.get(T);return a&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function he(T){const S=o.render.frame;g.get(T)!==S&&(g.set(T,S),T.update())}function re(T,S){const U=T.encoding,$=T.format,Q=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===lc||U!==xr&&(U===Ke?a===!1?e.has("EXT_sRGB")===!0&&$===yn?(T.format=lc,T.minFilter=Yt,T.generateMipmaps=!1):S=dp.sRGBToLinear(S):($!==yn||Q!==_r)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",U)),S}this.allocateTextureUnit=V,this.resetTextureUnits=K,this.setTexture2D=se,this.setTexture2DArray=be,this.setTexture3D=B,this.setTextureCube=le,this.rebindTextures=j,this.setupRenderTarget=te,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=P,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=ie}function TS(r,e,t){const n=t.isWebGL2;function i(s,o=null){let a;if(s===_r)return 5121;if(s===Z0)return 32819;if(s===J0)return 32820;if(s===Y0)return 5120;if(s===K0)return 5122;if(s===op)return 5123;if(s===$0)return 5124;if(s===or)return 5125;if(s===Ei)return 5126;if(s===io)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Q0)return 6406;if(s===yn)return 6408;if(s===ex)return 6409;if(s===tx)return 6410;if(s===fr)return 6402;if(s===ls)return 34041;if(s===lc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===nx)return 6403;if(s===ix)return 36244;if(s===rx)return 33319;if(s===sx)return 33320;if(s===ox)return 36249;if(s===Za||s===Ja||s===Qa||s===el)if(o===Ke)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Za)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ja)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Qa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===el)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Za)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ja)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Qa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===el)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ph||s===mh||s===gh||s===_h)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===ph)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===mh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===gh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===_h)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ax)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===xh||s===vh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===xh)return o===Ke?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===vh)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===yh||s===bh||s===Mh||s===Sh||s===wh||s===Th||s===Eh||s===Ah||s===Ch||s===Lh||s===Rh||s===Ph||s===Dh||s===Ih)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===yh)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===bh)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Mh)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Sh)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===wh)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Th)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Eh)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ah)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ch)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Lh)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Rh)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ph)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Dh)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ih)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===tl)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===tl)return o===Ke?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===lx||s===Oh||s===Nh||s===Fh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===tl)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Oh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Nh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Fh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Zr?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class ES extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class lr extends at{constructor(){super(),this.isGroup=!0,this.type="Group"}}const AS={type:"move"};class El{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const d of e.hand.values()){const m=t.getJointPose(d,n),_=this._getHandJoint(c,d);m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=m.radius),_.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(AS)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new lr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class CS extends Et{constructor(e,t,n,i,s,o,a,l,c,u){if(u=u!==void 0?u:fr,u!==fr&&u!==ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===fr&&(n=or),n===void 0&&u===ls&&(n=Zr),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:St,this.minFilter=l!==void 0?l:St,this.flipY=!1,this.generateMipmaps=!1}}class LS extends Sr{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,g=null;const d=t.getContextAttributes();let m=null,_=null;const b=[],x=[],y=new Set,M=new Map,A=new Ht;A.layers.enable(1),A.viewport=new nt;const R=new Ht;R.layers.enable(2),R.viewport=new nt;const v=[A,R],w=new ES;w.layers.enable(1),w.layers.enable(2);let D=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let le=b[B];return le===void 0&&(le=new El,b[B]=le),le.getTargetRaySpace()},this.getControllerGrip=function(B){let le=b[B];return le===void 0&&(le=new El,b[B]=le),le.getGripSpace()},this.getHand=function(B){let le=b[B];return le===void 0&&(le=new El,b[B]=le),le.getHandSpace()};function q(B){const le=x.indexOf(B.inputSource);if(le===-1)return;const de=b[le];de!==void 0&&de.dispatchEvent({type:B.type,data:B.inputSource})}function N(){i.removeEventListener("select",q),i.removeEventListener("selectstart",q),i.removeEventListener("selectend",q),i.removeEventListener("squeeze",q),i.removeEventListener("squeezestart",q),i.removeEventListener("squeezeend",q),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",I);for(let B=0;B<b.length;B++){const le=x[B];le!==null&&(x[B]=null,b[B].disconnect(le))}D=null,W=null,e.setRenderTarget(m),p=null,f=null,h=null,i=null,_=null,be.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(B){if(i=B,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",q),i.addEventListener("selectstart",q),i.addEventListener("selectend",q),i.addEventListener("squeeze",q),i.addEventListener("squeezestart",q),i.addEventListener("squeezeend",q),i.addEventListener("end",N),i.addEventListener("inputsourceschange",I),d.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const le={antialias:i.renderState.layers===void 0?d.antialias:!0,alpha:d.alpha,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,le),i.updateRenderState({baseLayer:p}),_=new vr(p.framebufferWidth,p.framebufferHeight,{format:yn,type:_r,encoding:e.outputEncoding,stencilBuffer:d.stencil})}else{let le=null,de=null,k=null;d.depth&&(k=d.stencil?35056:33190,le=d.stencil?ls:fr,de=d.stencil?Zr:or);const xe={colorFormat:32856,depthFormat:k,scaleFactor:s};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(xe),i.updateRenderState({layers:[f]}),_=new vr(f.textureWidth,f.textureHeight,{format:yn,type:_r,depthTexture:new CS(f.textureWidth,f.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:d.stencil,encoding:e.outputEncoding,samples:d.antialias?4:0});const Me=e.properties.get(_);Me.__ignoreDepthValues=f.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),be.setContext(i),be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function I(B){for(let le=0;le<B.removed.length;le++){const de=B.removed[le],k=x.indexOf(de);k>=0&&(x[k]=null,b[k].disconnect(de))}for(let le=0;le<B.added.length;le++){const de=B.added[le];let k=x.indexOf(de);if(k===-1){for(let Me=0;Me<b.length;Me++)if(Me>=x.length){x.push(de),k=Me;break}else if(x[Me]===null){x[Me]=de,k=Me;break}if(k===-1)break}const xe=b[k];xe&&xe.connect(de)}}const H=new F,Y=new F;function K(B,le,de){H.setFromMatrixPosition(le.matrixWorld),Y.setFromMatrixPosition(de.matrixWorld);const k=H.distanceTo(Y),xe=le.projectionMatrix.elements,Me=de.projectionMatrix.elements,Te=xe[14]/(xe[10]-1),ye=xe[14]/(xe[10]+1),Ce=(xe[9]+1)/xe[5],Pe=(xe[9]-1)/xe[5],C=(xe[8]-1)/xe[0],P=(Me[8]+1)/Me[0],j=Te*C,te=Te*P,J=k/(-C+P),ae=J*-C;le.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(ae),B.translateZ(J),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const ue=Te+J,ie=ye+J,he=j-ae,re=te+(k-ae),T=Ce*ye/ie*ue,S=Pe*ye/ie*ue;B.projectionMatrix.makePerspective(he,re,T,S,ue,ie)}function V(B,le){le===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(le.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(i===null)return;w.near=R.near=A.near=B.near,w.far=R.far=A.far=B.far,(D!==w.near||W!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),D=w.near,W=w.far);const le=B.parent,de=w.cameras;V(w,le);for(let xe=0;xe<de.length;xe++)V(de[xe],le);w.matrixWorld.decompose(w.position,w.quaternion,w.scale),B.matrix.copy(w.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale);const k=B.children;for(let xe=0,Me=k.length;xe<Me;xe++)k[xe].updateMatrixWorld(!0);de.length===2?K(w,A,R):w.projectionMatrix.copy(A.projectionMatrix)},this.getCamera=function(){return w},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(B){l=B,f!==null&&(f.fixedFoveation=B),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=B)},this.getPlanes=function(){return y};let oe=null;function se(B,le){if(u=le.getViewerPose(c||o),g=le,u!==null){const de=u.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let k=!1;de.length!==w.cameras.length&&(w.cameras.length=0,k=!0);for(let xe=0;xe<de.length;xe++){const Me=de[xe];let Te=null;if(p!==null)Te=p.getViewport(Me);else{const Ce=h.getViewSubImage(f,Me);Te=Ce.viewport,xe===0&&(e.setRenderTargetTextures(_,Ce.colorTexture,f.ignoreDepthValues?void 0:Ce.depthStencilTexture),e.setRenderTarget(_))}let ye=v[xe];ye===void 0&&(ye=new Ht,ye.layers.enable(xe),ye.viewport=new nt,v[xe]=ye),ye.matrix.fromArray(Me.transform.matrix),ye.projectionMatrix.fromArray(Me.projectionMatrix),ye.viewport.set(Te.x,Te.y,Te.width,Te.height),xe===0&&w.matrix.copy(ye.matrix),k===!0&&w.cameras.push(ye)}}for(let de=0;de<b.length;de++){const k=x[de],xe=b[de];k!==null&&xe!==void 0&&xe.update(k,le,c||o)}if(oe&&oe(B,le),le.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:le.detectedPlanes});let de=null;for(const k of y)le.detectedPlanes.has(k)||(de===null&&(de=[]),de.push(k));if(de!==null)for(const k of de)y.delete(k),M.delete(k),n.dispatchEvent({type:"planeremoved",data:k});for(const k of le.detectedPlanes)if(!y.has(k))y.add(k),M.set(k,le.lastChangedTime),n.dispatchEvent({type:"planeadded",data:k});else{const xe=M.get(k);k.lastChangedTime>xe&&(M.set(k,k.lastChangedTime),n.dispatchEvent({type:"planechanged",data:k}))}}g=null}const be=new Sp;be.setAnimationLoop(se),this.setAnimationLoop=function(B){oe=B},this.dispose=function(){}}}function RS(r,e){function t(d,m){m.color.getRGB(d.fogColor.value,yp(r)),m.isFog?(d.fogNear.value=m.near,d.fogFar.value=m.far):m.isFogExp2&&(d.fogDensity.value=m.density)}function n(d,m,_,b,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?i(d,m):m.isMeshToonMaterial?(i(d,m),u(d,m)):m.isMeshPhongMaterial?(i(d,m),c(d,m)):m.isMeshStandardMaterial?(i(d,m),h(d,m),m.isMeshPhysicalMaterial&&f(d,m,x)):m.isMeshMatcapMaterial?(i(d,m),p(d,m)):m.isMeshDepthMaterial?i(d,m):m.isMeshDistanceMaterial?(i(d,m),g(d,m)):m.isMeshNormalMaterial?i(d,m):m.isLineBasicMaterial?(s(d,m),m.isLineDashedMaterial&&o(d,m)):m.isPointsMaterial?a(d,m,_,b):m.isSpriteMaterial?l(d,m):m.isShadowMaterial?(d.color.value.copy(m.color),d.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function i(d,m){d.opacity.value=m.opacity,m.color&&d.diffuse.value.copy(m.color),m.emissive&&d.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(d.map.value=m.map),m.alphaMap&&(d.alphaMap.value=m.alphaMap),m.bumpMap&&(d.bumpMap.value=m.bumpMap,d.bumpScale.value=m.bumpScale,m.side===ln&&(d.bumpScale.value*=-1)),m.displacementMap&&(d.displacementMap.value=m.displacementMap,d.displacementScale.value=m.displacementScale,d.displacementBias.value=m.displacementBias),m.emissiveMap&&(d.emissiveMap.value=m.emissiveMap),m.normalMap&&(d.normalMap.value=m.normalMap,d.normalScale.value.copy(m.normalScale),m.side===ln&&d.normalScale.value.negate()),m.specularMap&&(d.specularMap.value=m.specularMap),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);const _=e.get(m).envMap;if(_&&(d.envMap.value=_,d.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=m.reflectivity,d.ior.value=m.ior,d.refractionRatio.value=m.refractionRatio),m.lightMap){d.lightMap.value=m.lightMap;const y=r.useLegacyLights===!0?Math.PI:1;d.lightMapIntensity.value=m.lightMapIntensity*y}m.aoMap&&(d.aoMap.value=m.aoMap,d.aoMapIntensity.value=m.aoMapIntensity);let b;m.map?b=m.map:m.specularMap?b=m.specularMap:m.displacementMap?b=m.displacementMap:m.normalMap?b=m.normalMap:m.bumpMap?b=m.bumpMap:m.roughnessMap?b=m.roughnessMap:m.metalnessMap?b=m.metalnessMap:m.alphaMap?b=m.alphaMap:m.emissiveMap?b=m.emissiveMap:m.clearcoatMap?b=m.clearcoatMap:m.clearcoatNormalMap?b=m.clearcoatNormalMap:m.clearcoatRoughnessMap?b=m.clearcoatRoughnessMap:m.iridescenceMap?b=m.iridescenceMap:m.iridescenceThicknessMap?b=m.iridescenceThicknessMap:m.specularIntensityMap?b=m.specularIntensityMap:m.specularColorMap?b=m.specularColorMap:m.transmissionMap?b=m.transmissionMap:m.thicknessMap?b=m.thicknessMap:m.sheenColorMap?b=m.sheenColorMap:m.sheenRoughnessMap&&(b=m.sheenRoughnessMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),d.uvTransform.value.copy(b.matrix));let x;m.aoMap?x=m.aoMap:m.lightMap&&(x=m.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),d.uv2Transform.value.copy(x.matrix))}function s(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity}function o(d,m){d.dashSize.value=m.dashSize,d.totalSize.value=m.dashSize+m.gapSize,d.scale.value=m.scale}function a(d,m,_,b){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.size.value=m.size*_,d.scale.value=b*.5,m.map&&(d.map.value=m.map),m.alphaMap&&(d.alphaMap.value=m.alphaMap),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);let x;m.map?x=m.map:m.alphaMap&&(x=m.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),d.uvTransform.value.copy(x.matrix))}function l(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.rotation.value=m.rotation,m.map&&(d.map.value=m.map),m.alphaMap&&(d.alphaMap.value=m.alphaMap),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);let _;m.map?_=m.map:m.alphaMap&&(_=m.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),d.uvTransform.value.copy(_.matrix))}function c(d,m){d.specular.value.copy(m.specular),d.shininess.value=Math.max(m.shininess,1e-4)}function u(d,m){m.gradientMap&&(d.gradientMap.value=m.gradientMap)}function h(d,m){d.roughness.value=m.roughness,d.metalness.value=m.metalness,m.roughnessMap&&(d.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(d.metalnessMap.value=m.metalnessMap),e.get(m).envMap&&(d.envMapIntensity.value=m.envMapIntensity)}function f(d,m,_){d.ior.value=m.ior,m.sheen>0&&(d.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),d.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(d.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(d.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(d.clearcoat.value=m.clearcoat,d.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(d.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),d.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===ln&&d.clearcoatNormalScale.value.negate())),m.iridescence>0&&(d.iridescence.value=m.iridescence,d.iridescenceIOR.value=m.iridescenceIOR,d.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(d.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(d.transmission.value=m.transmission,d.transmissionSamplerMap.value=_.texture,d.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(d.transmissionMap.value=m.transmissionMap),d.thickness.value=m.thickness,m.thicknessMap&&(d.thicknessMap.value=m.thicknessMap),d.attenuationDistance.value=m.attenuationDistance,d.attenuationColor.value.copy(m.attenuationColor)),d.specularIntensity.value=m.specularIntensity,d.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(d.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(d.specularColorMap.value=m.specularColorMap)}function p(d,m){m.matcap&&(d.matcap.value=m.matcap)}function g(d,m){d.referencePosition.value.copy(m.referencePosition),d.nearDistance.value=m.nearDistance,d.farDistance.value=m.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function PS(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(35375):0;function l(b,x){const y=x.program;n.uniformBlockBinding(b,y)}function c(b,x){let y=i[b.id];y===void 0&&(g(b),y=u(b),i[b.id]=y,b.addEventListener("dispose",m));const M=x.program;n.updateUBOMapping(b,M);const A=e.render.frame;s[b.id]!==A&&(f(b),s[b.id]=A)}function u(b){const x=h();b.__bindingPointIndex=x;const y=r.createBuffer(),M=b.__size,A=b.usage;return r.bindBuffer(35345,y),r.bufferData(35345,M,A),r.bindBuffer(35345,null),r.bindBufferBase(35345,x,y),y}function h(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const x=i[b.id],y=b.uniforms,M=b.__cache;r.bindBuffer(35345,x);for(let A=0,R=y.length;A<R;A++){const v=y[A];if(p(v,A,M)===!0){const w=v.__offset,D=Array.isArray(v.value)?v.value:[v.value];let W=0;for(let q=0;q<D.length;q++){const N=D[q],I=d(N);typeof N=="number"?(v.__data[0]=N,r.bufferSubData(35345,w+W,v.__data)):N.isMatrix3?(v.__data[0]=N.elements[0],v.__data[1]=N.elements[1],v.__data[2]=N.elements[2],v.__data[3]=N.elements[0],v.__data[4]=N.elements[3],v.__data[5]=N.elements[4],v.__data[6]=N.elements[5],v.__data[7]=N.elements[0],v.__data[8]=N.elements[6],v.__data[9]=N.elements[7],v.__data[10]=N.elements[8],v.__data[11]=N.elements[0]):(N.toArray(v.__data,W),W+=I.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(35345,w,v.__data)}}r.bindBuffer(35345,null)}function p(b,x,y){const M=b.value;if(y[x]===void 0){if(typeof M=="number")y[x]=M;else{const A=Array.isArray(M)?M:[M],R=[];for(let v=0;v<A.length;v++)R.push(A[v].clone());y[x]=R}return!0}else if(typeof M=="number"){if(y[x]!==M)return y[x]=M,!0}else{const A=Array.isArray(y[x])?y[x]:[y[x]],R=Array.isArray(M)?M:[M];for(let v=0;v<A.length;v++){const w=A[v];if(w.equals(R[v])===!1)return w.copy(R[v]),!0}}return!1}function g(b){const x=b.uniforms;let y=0;const M=16;let A=0;for(let R=0,v=x.length;R<v;R++){const w=x[R],D={boundary:0,storage:0},W=Array.isArray(w.value)?w.value:[w.value];for(let q=0,N=W.length;q<N;q++){const I=W[q],H=d(I);D.boundary+=H.boundary,D.storage+=H.storage}if(w.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=y,R>0){A=y%M;const q=M-A;A!==0&&q-D.boundary<0&&(y+=M-A,w.__offset=y)}y+=D.storage}return A=y%M,A>0&&(y+=M-A),b.__size=y,b.__cache={},this}function d(b){const x={boundary:0,storage:0};return typeof b=="number"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),x}function m(b){const x=b.target;x.removeEventListener("dispose",m);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function _(){for(const b in i)r.deleteBuffer(i[b]);o=[],i={},s={}}return{bind:l,update:c,dispose:_}}function DS(){const r=ao("canvas");return r.style.display="block",r}function lu(r={}){this.isWebGLRenderer=!0;const e=r.canvas!==void 0?r.canvas:DS(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,a=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,l=r.powerPreference!==void 0?r.powerPreference:"default",c=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=r.alpha!==void 0?r.alpha:!1;let h=null,f=null;const p=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=xr,this.useLegacyLights=!0,this.toneMapping=hi,this.toneMappingExposure=1;const d=this;let m=!1,_=0,b=0,x=null,y=-1,M=null;const A=new nt,R=new nt;let v=null,w=e.width,D=e.height,W=1,q=null,N=null;const I=new nt(0,0,w,D),H=new nt(0,0,w,D);let Y=!1;const K=new ru;let V=!1,oe=!1,se=null;const be=new ke,B=new F,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function de(){return x===null?W:1}let k=t;function xe(E,X){for(let Z=0;Z<E.length;Z++){const G=E[Z],ne=e.getContext(G,X);if(ne!==null)return ne}return null}try{const E={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${tu}`),e.addEventListener("webglcontextlost",we,!1),e.addEventListener("webglcontextrestored",Ae,!1),e.addEventListener("webglcontextcreationerror",ve,!1),k===null){const X=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&X.shift(),k=xe(X,E),k===null)throw xe(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Me,Te,ye,Ce,Pe,C,P,j,te,J,ae,ue,ie,he,re,T,S,U,$,Q,ce,pe,L,z;function _e(){Me=new Hb(k),Te=new Ub(k,Me,r),Me.init(Te),pe=new TS(k,Me,Te),ye=new SS(k,Me,Te),Ce=new jb,Pe=new cS,C=new wS(k,Me,ye,Pe,Te,pe,Ce),P=new Bb(d),j=new Gb(d),te=new tv(k,Te),L=new Nb(k,Me,te,Te),J=new Wb(k,te,Ce,L),ae=new $b(k,J,te,Ce),$=new Kb(k,Te,C),T=new zb(Pe),ue=new lS(d,P,j,Me,Te,L,T),ie=new RS(d,Pe),he=new hS,re=new _S(Me,Te),U=new Ob(d,P,j,ye,ae,u,o),S=new MS(d,ae,Te),z=new PS(k,Ce,Te,ye),Q=new Fb(k,Me,Ce,Te),ce=new Xb(k,Me,Ce,Te),Ce.programs=ue.programs,d.capabilities=Te,d.extensions=Me,d.properties=Pe,d.renderLists=he,d.shadowMap=S,d.state=ye,d.info=Ce}_e();const me=new LS(d,k);this.xr=me,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const E=Me.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Me.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(E){E!==void 0&&(W=E,this.setSize(w,D,!1))},this.getSize=function(E){return E.set(w,D)},this.setSize=function(E,X,Z=!0){if(me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}w=E,D=X,e.width=Math.floor(E*W),e.height=Math.floor(X*W),Z===!0&&(e.style.width=E+"px",e.style.height=X+"px"),this.setViewport(0,0,E,X)},this.getDrawingBufferSize=function(E){return E.set(w*W,D*W).floor()},this.setDrawingBufferSize=function(E,X,Z){w=E,D=X,W=Z,e.width=Math.floor(E*Z),e.height=Math.floor(X*Z),this.setViewport(0,0,E,X)},this.getCurrentViewport=function(E){return E.copy(A)},this.getViewport=function(E){return E.copy(I)},this.setViewport=function(E,X,Z,G){E.isVector4?I.set(E.x,E.y,E.z,E.w):I.set(E,X,Z,G),ye.viewport(A.copy(I).multiplyScalar(W).floor())},this.getScissor=function(E){return E.copy(H)},this.setScissor=function(E,X,Z,G){E.isVector4?H.set(E.x,E.y,E.z,E.w):H.set(E,X,Z,G),ye.scissor(R.copy(H).multiplyScalar(W).floor())},this.getScissorTest=function(){return Y},this.setScissorTest=function(E){ye.setScissorTest(Y=E)},this.setOpaqueSort=function(E){q=E},this.setTransparentSort=function(E){N=E},this.getClearColor=function(E){return E.copy(U.getClearColor())},this.setClearColor=function(){U.setClearColor.apply(U,arguments)},this.getClearAlpha=function(){return U.getClearAlpha()},this.setClearAlpha=function(){U.setClearAlpha.apply(U,arguments)},this.clear=function(E=!0,X=!0,Z=!0){let G=0;E&&(G|=16384),X&&(G|=256),Z&&(G|=1024),k.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",we,!1),e.removeEventListener("webglcontextrestored",Ae,!1),e.removeEventListener("webglcontextcreationerror",ve,!1),he.dispose(),re.dispose(),Pe.dispose(),P.dispose(),j.dispose(),ae.dispose(),L.dispose(),z.dispose(),ue.dispose(),me.dispose(),me.removeEventListener("sessionstart",fe),me.removeEventListener("sessionend",Se),se&&(se.dispose(),se=null),Ee.stop()};function we(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function Ae(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const E=Ce.autoReset,X=S.enabled,Z=S.autoUpdate,G=S.needsUpdate,ne=S.type;_e(),Ce.autoReset=E,S.enabled=X,S.autoUpdate=Z,S.needsUpdate=G,S.type=ne}function ve(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Re(E){const X=E.target;X.removeEventListener("dispose",Re),Ve(X)}function Ve(E){Je(E),Pe.remove(E)}function Je(E){const X=Pe.get(E).programs;X!==void 0&&(X.forEach(function(Z){ue.releaseProgram(Z)}),E.isShaderMaterial&&ue.releaseShaderCache(E))}this.renderBufferDirect=function(E,X,Z,G,ne,Le){X===null&&(X=le);const De=ne.isMesh&&ne.matrixWorld.determinant()<0,Ue=Nm(E,X,Z,G,ne);ye.setMaterial(G,De);let ze=Z.index,Ye=1;G.wireframe===!0&&(ze=J.getWireframeAttribute(Z),Ye=2);const He=Z.drawRange,We=Z.attributes.position;let ht=He.start*Ye,en=(He.start+He.count)*Ye;Le!==null&&(ht=Math.max(ht,Le.start*Ye),en=Math.min(en,(Le.start+Le.count)*Ye)),ze!==null?(ht=Math.max(ht,0),en=Math.min(en,ze.count)):We!=null&&(ht=Math.max(ht,0),en=Math.min(en,We.count));const $n=en-ht;if($n<0||$n===1/0)return;L.setup(ne,G,Ue,Z,ze);let Gi,ft=Q;if(ze!==null&&(Gi=te.get(ze),ft=ce,ft.setIndex(Gi)),ne.isMesh)G.wireframe===!0?(ye.setLineWidth(G.wireframeLinewidth*de()),ft.setMode(1)):ft.setMode(4);else if(ne.isLine){let Xe=G.linewidth;Xe===void 0&&(Xe=1),ye.setLineWidth(Xe*de()),ne.isLineSegments?ft.setMode(1):ne.isLineLoop?ft.setMode(2):ft.setMode(3)}else ne.isPoints?ft.setMode(0):ne.isSprite&&ft.setMode(4);if(ne.isInstancedMesh)ft.renderInstances(ht,$n,ne.count);else if(Z.isInstancedBufferGeometry){const Xe=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Ba=Math.min(Z.instanceCount,Xe);ft.renderInstances(ht,$n,Ba)}else ft.render(ht,$n)},this.compile=function(E,X){function Z(G,ne,Le){G.transparent===!0&&G.side===ai&&G.forceSinglePass===!1?(G.side=ln,G.needsUpdate=!0,dn(G,ne,Le),G.side=di,G.needsUpdate=!0,dn(G,ne,Le),G.side=ai):dn(G,ne,Le)}f=re.get(E),f.init(),g.push(f),E.traverseVisible(function(G){G.isLight&&G.layers.test(X.layers)&&(f.pushLight(G),G.castShadow&&f.pushShadow(G))}),f.setupLights(d.useLegacyLights),E.traverse(function(G){const ne=G.material;if(ne)if(Array.isArray(ne))for(let Le=0;Le<ne.length;Le++){const De=ne[Le];Z(De,E,G)}else Z(ne,E,G)}),g.pop(),f=null};let O=null;function ee(E){O&&O(E)}function fe(){Ee.stop()}function Se(){Ee.start()}const Ee=new Sp;Ee.setAnimationLoop(ee),typeof self<"u"&&Ee.setContext(self),this.setAnimationLoop=function(E){O=E,me.setAnimationLoop(E),E===null?Ee.stop():Ee.start()},me.addEventListener("sessionstart",fe),me.addEventListener("sessionend",Se),this.render=function(E,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(me.cameraAutoUpdate===!0&&me.updateCamera(X),X=me.getCamera()),E.isScene===!0&&E.onBeforeRender(d,E,X,x),f=re.get(E,g.length),f.init(),g.push(f),be.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),K.setFromProjectionMatrix(be),oe=this.localClippingEnabled,V=T.init(this.clippingPlanes,oe),h=he.get(E,p.length),h.init(),p.push(h),it(E,X,0,d.sortObjects),h.finish(),d.sortObjects===!0&&h.sort(q,N),V===!0&&T.beginShadows();const Z=f.state.shadowsArray;if(S.render(Z,E,X),V===!0&&T.endShadows(),this.info.autoReset===!0&&this.info.reset(),U.render(h,E),f.setupLights(d.useLegacyLights),X.isArrayCamera){const G=X.cameras;for(let ne=0,Le=G.length;ne<Le;ne++){const De=G[ne];yt(h,E,De,De.viewport)}}else yt(h,E,X);x!==null&&(C.updateMultisampleRenderTarget(x),C.updateRenderTargetMipmap(x)),E.isScene===!0&&E.onAfterRender(d,E,X),L.resetDefaultState(),y=-1,M=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,p.pop(),p.length>0?h=p[p.length-1]:h=null};function it(E,X,Z,G){if(E.visible===!1)return;if(E.layers.test(X.layers)){if(E.isGroup)Z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(X);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||K.intersectsSprite(E)){G&&B.setFromMatrixPosition(E.matrixWorld).applyMatrix4(be);const De=ae.update(E),Ue=E.material;Ue.visible&&h.push(E,De,Ue,Z,B.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==Ce.render.frame&&(E.skeleton.update(),E.skeleton.frame=Ce.render.frame),!E.frustumCulled||K.intersectsObject(E))){G&&B.setFromMatrixPosition(E.matrixWorld).applyMatrix4(be);const De=ae.update(E),Ue=E.material;if(Array.isArray(Ue)){const ze=De.groups;for(let Ye=0,He=ze.length;Ye<He;Ye++){const We=ze[Ye],ht=Ue[We.materialIndex];ht&&ht.visible&&h.push(E,De,ht,Z,B.z,We)}}else Ue.visible&&h.push(E,De,Ue,Z,B.z,null)}}const Le=E.children;for(let De=0,Ue=Le.length;De<Ue;De++)it(Le[De],X,Z,G)}function yt(E,X,Z,G){const ne=E.opaque,Le=E.transmissive,De=E.transparent;f.setupLightsView(Z),V===!0&&T.setGlobalState(d.clippingPlanes,Z),Le.length>0&&Ut(ne,X,Z),G&&ye.viewport(A.copy(G)),ne.length>0&&Nn(ne,X,Z),Le.length>0&&Nn(Le,X,Z),De.length>0&&Nn(De,X,Z),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function Ut(E,X,Z){const G=Te.isWebGL2;se===null&&(se=new vr(1024,1024,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")?io:_r,minFilter:gr,samples:G&&s===!0?4:0}));const ne=d.getRenderTarget();d.setRenderTarget(se),d.clear();const Le=d.toneMapping;d.toneMapping=hi,Nn(E,X,Z),d.toneMapping=Le,C.updateMultisampleRenderTarget(se),C.updateRenderTargetMipmap(se),d.setRenderTarget(ne)}function Nn(E,X,Z){const G=X.isScene===!0?X.overrideMaterial:null;for(let ne=0,Le=E.length;ne<Le;ne++){const De=E[ne],Ue=De.object,ze=De.geometry,Ye=G===null?De.material:G,He=De.group;Ue.layers.test(Z.layers)&&ct(Ue,X,Z,ze,Ye,He)}}function ct(E,X,Z,G,ne,Le){E.onBeforeRender(d,X,Z,G,ne,Le),E.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),ne.onBeforeRender(d,X,Z,G,E,Le),ne.transparent===!0&&ne.side===ai&&ne.forceSinglePass===!1?(ne.side=ln,ne.needsUpdate=!0,d.renderBufferDirect(Z,X,G,ne,E,Le),ne.side=di,ne.needsUpdate=!0,d.renderBufferDirect(Z,X,G,ne,E,Le),ne.side=ai):d.renderBufferDirect(Z,X,G,ne,E,Le),E.onAfterRender(d,X,Z,G,ne,Le)}function dn(E,X,Z){X.isScene!==!0&&(X=le);const G=Pe.get(E),ne=f.state.lights,Le=f.state.shadowsArray,De=ne.state.version,Ue=ue.getParameters(E,ne.state,Le,X,Z),ze=ue.getProgramCacheKey(Ue);let Ye=G.programs;G.environment=E.isMeshStandardMaterial?X.environment:null,G.fog=X.fog,G.envMap=(E.isMeshStandardMaterial?j:P).get(E.envMap||G.environment),Ye===void 0&&(E.addEventListener("dispose",Re),Ye=new Map,G.programs=Ye);let He=Ye.get(ze);if(He!==void 0){if(G.currentProgram===He&&G.lightsStateVersion===De)return Fn(E,Ue),He}else Ue.uniforms=ue.getUniforms(E),E.onBuild(Z,Ue,d),E.onBeforeCompile(Ue,d),He=ue.acquireProgram(Ue,ze),Ye.set(ze,He),G.uniforms=Ue.uniforms;const We=G.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(We.clippingPlanes=T.uniform),Fn(E,Ue),G.needsLights=Um(E),G.lightsStateVersion=De,G.needsLights&&(We.ambientLightColor.value=ne.state.ambient,We.lightProbe.value=ne.state.probe,We.directionalLights.value=ne.state.directional,We.directionalLightShadows.value=ne.state.directionalShadow,We.spotLights.value=ne.state.spot,We.spotLightShadows.value=ne.state.spotShadow,We.rectAreaLights.value=ne.state.rectArea,We.ltc_1.value=ne.state.rectAreaLTC1,We.ltc_2.value=ne.state.rectAreaLTC2,We.pointLights.value=ne.state.point,We.pointLightShadows.value=ne.state.pointShadow,We.hemisphereLights.value=ne.state.hemi,We.directionalShadowMap.value=ne.state.directionalShadowMap,We.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,We.spotShadowMap.value=ne.state.spotShadowMap,We.spotLightMatrix.value=ne.state.spotLightMatrix,We.spotLightMap.value=ne.state.spotLightMap,We.pointShadowMap.value=ne.state.pointShadowMap,We.pointShadowMatrix.value=ne.state.pointShadowMatrix);const ht=He.getUniforms(),en=ia.seqWithValue(ht.seq,We);return G.currentProgram=He,G.uniformsList=en,He}function Fn(E,X){const Z=Pe.get(E);Z.outputEncoding=X.outputEncoding,Z.instancing=X.instancing,Z.skinning=X.skinning,Z.morphTargets=X.morphTargets,Z.morphNormals=X.morphNormals,Z.morphColors=X.morphColors,Z.morphTargetsCount=X.morphTargetsCount,Z.numClippingPlanes=X.numClippingPlanes,Z.numIntersection=X.numClipIntersection,Z.vertexAlphas=X.vertexAlphas,Z.vertexTangents=X.vertexTangents,Z.toneMapping=X.toneMapping}function Nm(E,X,Z,G,ne){X.isScene!==!0&&(X=le),C.resetTextureUnits();const Le=X.fog,De=G.isMeshStandardMaterial?X.environment:null,Ue=x===null?d.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:xr,ze=(G.isMeshStandardMaterial?j:P).get(G.envMap||De),Ye=G.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,He=!!G.normalMap&&!!Z.attributes.tangent,We=!!Z.morphAttributes.position,ht=!!Z.morphAttributes.normal,en=!!Z.morphAttributes.color,$n=G.toneMapped?d.toneMapping:hi,Gi=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ft=Gi!==void 0?Gi.length:0,Xe=Pe.get(G),Ba=f.state.lights;if(V===!0&&(oe===!0||E!==M)){const tn=E===M&&G.id===y;T.setState(G,E,tn)}let bt=!1;G.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Ba.state.version||Xe.outputEncoding!==Ue||ne.isInstancedMesh&&Xe.instancing===!1||!ne.isInstancedMesh&&Xe.instancing===!0||ne.isSkinnedMesh&&Xe.skinning===!1||!ne.isSkinnedMesh&&Xe.skinning===!0||Xe.envMap!==ze||G.fog===!0&&Xe.fog!==Le||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==T.numPlanes||Xe.numIntersection!==T.numIntersection)||Xe.vertexAlphas!==Ye||Xe.vertexTangents!==He||Xe.morphTargets!==We||Xe.morphNormals!==ht||Xe.morphColors!==en||Xe.toneMapping!==$n||Te.isWebGL2===!0&&Xe.morphTargetsCount!==ft)&&(bt=!0):(bt=!0,Xe.__version=G.version);let Hi=Xe.currentProgram;bt===!0&&(Hi=dn(G,X,ne));let Iu=!1,As=!1,ka=!1;const zt=Hi.getUniforms(),Wi=Xe.uniforms;if(ye.useProgram(Hi.program)&&(Iu=!0,As=!0,ka=!0),G.id!==y&&(y=G.id,As=!0),Iu||M!==E){if(zt.setValue(k,"projectionMatrix",E.projectionMatrix),Te.logarithmicDepthBuffer&&zt.setValue(k,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),M!==E&&(M=E,As=!0,ka=!0),G.isShaderMaterial||G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshStandardMaterial||G.envMap){const tn=zt.map.cameraPosition;tn!==void 0&&tn.setValue(k,B.setFromMatrixPosition(E.matrixWorld))}(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&zt.setValue(k,"isOrthographic",E.isOrthographicCamera===!0),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial||G.isShadowMaterial||ne.isSkinnedMesh)&&zt.setValue(k,"viewMatrix",E.matrixWorldInverse)}if(ne.isSkinnedMesh){zt.setOptional(k,ne,"bindMatrix"),zt.setOptional(k,ne,"bindMatrixInverse");const tn=ne.skeleton;tn&&(Te.floatVertexTextures?(tn.boneTexture===null&&tn.computeBoneTexture(),zt.setValue(k,"boneTexture",tn.boneTexture,C),zt.setValue(k,"boneTextureSize",tn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Va=Z.morphAttributes;if((Va.position!==void 0||Va.normal!==void 0||Va.color!==void 0&&Te.isWebGL2===!0)&&$.update(ne,Z,Hi),(As||Xe.receiveShadow!==ne.receiveShadow)&&(Xe.receiveShadow=ne.receiveShadow,zt.setValue(k,"receiveShadow",ne.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Wi.envMap.value=ze,Wi.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),As&&(zt.setValue(k,"toneMappingExposure",d.toneMappingExposure),Xe.needsLights&&Fm(Wi,ka),Le&&G.fog===!0&&ie.refreshFogUniforms(Wi,Le),ie.refreshMaterialUniforms(Wi,G,W,D,se),ia.upload(k,Xe.uniformsList,Wi,C)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(ia.upload(k,Xe.uniformsList,Wi,C),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&zt.setValue(k,"center",ne.center),zt.setValue(k,"modelViewMatrix",ne.modelViewMatrix),zt.setValue(k,"normalMatrix",ne.normalMatrix),zt.setValue(k,"modelMatrix",ne.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const tn=G.uniformsGroups;for(let Ga=0,zm=tn.length;Ga<zm;Ga++)if(Te.isWebGL2){const Ou=tn[Ga];z.update(Ou,Hi),z.bind(Ou,Hi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Hi}function Fm(E,X){E.ambientLightColor.needsUpdate=X,E.lightProbe.needsUpdate=X,E.directionalLights.needsUpdate=X,E.directionalLightShadows.needsUpdate=X,E.pointLights.needsUpdate=X,E.pointLightShadows.needsUpdate=X,E.spotLights.needsUpdate=X,E.spotLightShadows.needsUpdate=X,E.rectAreaLights.needsUpdate=X,E.hemisphereLights.needsUpdate=X}function Um(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(E,X,Z){Pe.get(E.texture).__webglTexture=X,Pe.get(E.depthTexture).__webglTexture=Z;const G=Pe.get(E);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=Z===void 0,G.__autoAllocateDepthBuffer||Me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,X){const Z=Pe.get(E);Z.__webglFramebuffer=X,Z.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(E,X=0,Z=0){x=E,_=X,b=Z;let G=!0,ne=null,Le=!1,De=!1;if(E){const ze=Pe.get(E);ze.__useDefaultFramebuffer!==void 0?(ye.bindFramebuffer(36160,null),G=!1):ze.__webglFramebuffer===void 0?C.setupRenderTarget(E):ze.__hasExternalTextures&&C.rebindTextures(E,Pe.get(E.texture).__webglTexture,Pe.get(E.depthTexture).__webglTexture);const Ye=E.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(De=!0);const He=Pe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(ne=He[X],Le=!0):Te.isWebGL2&&E.samples>0&&C.useMultisampledRTT(E)===!1?ne=Pe.get(E).__webglMultisampledFramebuffer:ne=He,A.copy(E.viewport),R.copy(E.scissor),v=E.scissorTest}else A.copy(I).multiplyScalar(W).floor(),R.copy(H).multiplyScalar(W).floor(),v=Y;if(ye.bindFramebuffer(36160,ne)&&Te.drawBuffers&&G&&ye.drawBuffers(E,ne),ye.viewport(A),ye.scissor(R),ye.setScissorTest(v),Le){const ze=Pe.get(E.texture);k.framebufferTexture2D(36160,36064,34069+X,ze.__webglTexture,Z)}else if(De){const ze=Pe.get(E.texture),Ye=X||0;k.framebufferTextureLayer(36160,36064,ze.__webglTexture,Z||0,Ye)}y=-1},this.readRenderTargetPixels=function(E,X,Z,G,ne,Le,De){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=Pe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&De!==void 0&&(Ue=Ue[De]),Ue){ye.bindFramebuffer(36160,Ue);try{const ze=E.texture,Ye=ze.format,He=ze.type;if(Ye!==yn&&pe.convert(Ye)!==k.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const We=He===io&&(Me.has("EXT_color_buffer_half_float")||Te.isWebGL2&&Me.has("EXT_color_buffer_float"));if(He!==_r&&pe.convert(He)!==k.getParameter(35738)&&!(He===Ei&&(Te.isWebGL2||Me.has("OES_texture_float")||Me.has("WEBGL_color_buffer_float")))&&!We){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=E.width-G&&Z>=0&&Z<=E.height-ne&&k.readPixels(X,Z,G,ne,pe.convert(Ye),pe.convert(He),Le)}finally{const ze=x!==null?Pe.get(x).__webglFramebuffer:null;ye.bindFramebuffer(36160,ze)}}},this.copyFramebufferToTexture=function(E,X,Z=0){const G=Math.pow(2,-Z),ne=Math.floor(X.image.width*G),Le=Math.floor(X.image.height*G);C.setTexture2D(X,0),k.copyTexSubImage2D(3553,Z,0,0,E.x,E.y,ne,Le),ye.unbindTexture()},this.copyTextureToTexture=function(E,X,Z,G=0){const ne=X.image.width,Le=X.image.height,De=pe.convert(Z.format),Ue=pe.convert(Z.type);C.setTexture2D(Z,0),k.pixelStorei(37440,Z.flipY),k.pixelStorei(37441,Z.premultiplyAlpha),k.pixelStorei(3317,Z.unpackAlignment),X.isDataTexture?k.texSubImage2D(3553,G,E.x,E.y,ne,Le,De,Ue,X.image.data):X.isCompressedTexture?k.compressedTexSubImage2D(3553,G,E.x,E.y,X.mipmaps[0].width,X.mipmaps[0].height,De,X.mipmaps[0].data):k.texSubImage2D(3553,G,E.x,E.y,De,Ue,X.image),G===0&&Z.generateMipmaps&&k.generateMipmap(3553),ye.unbindTexture()},this.copyTextureToTexture3D=function(E,X,Z,G,ne=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Le=E.max.x-E.min.x+1,De=E.max.y-E.min.y+1,Ue=E.max.z-E.min.z+1,ze=pe.convert(G.format),Ye=pe.convert(G.type);let He;if(G.isData3DTexture)C.setTexture3D(G,0),He=32879;else if(G.isDataArrayTexture)C.setTexture2DArray(G,0),He=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(37440,G.flipY),k.pixelStorei(37441,G.premultiplyAlpha),k.pixelStorei(3317,G.unpackAlignment);const We=k.getParameter(3314),ht=k.getParameter(32878),en=k.getParameter(3316),$n=k.getParameter(3315),Gi=k.getParameter(32877),ft=Z.isCompressedTexture?Z.mipmaps[0]:Z.image;k.pixelStorei(3314,ft.width),k.pixelStorei(32878,ft.height),k.pixelStorei(3316,E.min.x),k.pixelStorei(3315,E.min.y),k.pixelStorei(32877,E.min.z),Z.isDataTexture||Z.isData3DTexture?k.texSubImage3D(He,ne,X.x,X.y,X.z,Le,De,Ue,ze,Ye,ft.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(He,ne,X.x,X.y,X.z,Le,De,Ue,ze,ft.data)):k.texSubImage3D(He,ne,X.x,X.y,X.z,Le,De,Ue,ze,Ye,ft),k.pixelStorei(3314,We),k.pixelStorei(32878,ht),k.pixelStorei(3316,en),k.pixelStorei(3315,$n),k.pixelStorei(32877,Gi),ne===0&&G.generateMipmaps&&k.generateMipmap(He),ye.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?C.setTextureCube(E,0):E.isData3DTexture?C.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?C.setTexture2DArray(E,0):C.setTexture2D(E,0),ye.unbindTexture()},this.resetState=function(){_=0,b=0,x=null,ye.reset(),L.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(lu.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(r){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!r}}});class IS extends lu{}IS.prototype.isWebGL1Renderer=!0;class OS extends at{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class NS{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ac,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=In()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=In()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=In()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const kt=new F;class cu{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=li(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=li(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=li(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=li(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array),s=et(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new jt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new cu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Mf=new F,Sf=new nt,wf=new nt,FS=new F,Tf=new ke;class US extends an{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new ke,this.bindMatrixInverse=new ke}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new nt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;Sf.fromBufferAttribute(i.attributes.skinIndex,e),wf.fromBufferAttribute(i.attributes.skinWeight,e),Mf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=wf.getComponent(s);if(o!==0){const a=Sf.getComponent(s);Tf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(FS.copy(Mf).applyMatrix4(Tf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Cp extends at{constructor(){super(),this.isBone=!0,this.type="Bone"}}class zS extends Et{constructor(e=null,t=1,n=1,i,s,o,a,l,c=St,u=St,h,f){super(null,o,a,l,c,u,i,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ef=new ke,BS=new ke;class uu{constructor(e=[],t=[]){this.uuid=In(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ke;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:BS;Ef.multiplyMatrices(a,t[s]),Ef.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new uu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=up(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new zS(t,e,e,yn,Ei);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Cp),this.bones.push(o),this.boneInverses.push(new ke().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Af extends jt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Cf=new ke,Lf=new ke,Xo=[],kS=new ke,Ns=new an;class VS extends an{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Af(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1;for(let i=0;i<n;i++)this.setMatrixAt(i,kS)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Ns.geometry=this.geometry,Ns.material=this.material,Ns.material!==void 0)for(let s=0;s<i;s++){this.getMatrixAt(s,Cf),Lf.multiplyMatrices(n,Cf),Ns.matrixWorld=Lf,Ns.raycast(e,Xo);for(let o=0,a=Xo.length;o<a;o++){const l=Xo[o];l.instanceId=s,l.object=this,t.push(l)}Xo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Af(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Ia extends Xn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Oe(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Rf=new F,Pf=new F,Df=new ke,Al=new iu,jo=new Ss;class hu extends at{constructor(e=new fn,t=new Ia){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Rf.fromBufferAttribute(t,i-1),Pf.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Rf.distanceTo(Pf);e.setAttribute("lineDistance",new It(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),jo.copy(n.boundingSphere),jo.applyMatrix4(i),jo.radius+=s,e.ray.intersectsSphere(jo)===!1)return;Df.copy(i).invert(),Al.copy(e.ray).applyMatrix4(Df);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new F,u=new F,h=new F,f=new F,p=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const _=Math.max(0,o.start),b=Math.min(g.count,o.start+o.count);for(let x=_,y=b-1;x<y;x+=p){const M=g.getX(x),A=g.getX(x+1);if(c.fromBufferAttribute(m,M),u.fromBufferAttribute(m,A),Al.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const v=e.ray.origin.distanceTo(f);v<e.near||v>e.far||t.push({distance:v,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,o.start),b=Math.min(m.count,o.start+o.count);for(let x=_,y=b-1;x<y;x+=p){if(c.fromBufferAttribute(m,x),u.fromBufferAttribute(m,x+1),Al.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(f);A<e.near||A>e.far||t.push({distance:A,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const If=new F,Of=new F;class fu extends hu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)If.fromBufferAttribute(t,i),Of.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+If.distanceTo(Of);e.setAttribute("lineDistance",new It(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class GS extends hu{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Lp extends Xn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Nf=new ke,hc=new iu,qo=new Ss,Yo=new F;class HS extends at{constructor(e=new fn,t=new Lp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qo.copy(n.boundingSphere),qo.applyMatrix4(i),qo.radius+=s,e.ray.intersectsSphere(qo)===!1)return;Nf.copy(i).invert(),hc.copy(e.ray).applyMatrix4(Nf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=f,d=p;g<d;g++){const m=c.getX(g);Yo.fromBufferAttribute(h,m),Ff(Yo,m,l,i,e,t,this)}}else{const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=f,d=p;g<d;g++)Yo.fromBufferAttribute(h,g),Ff(Yo,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ff(r,e,t,n,i,s,o){const a=hc.distanceSqToPoint(r);if(a<t){const l=new F;hc.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class du extends fn{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new F,f=new F,p=[],g=[],d=[],m=[];for(let _=0;_<=n;_++){const b=[],x=_/n;let y=0;_==0&&o==0?y=.5/t:_==n&&l==Math.PI&&(y=-.5/t);for(let M=0;M<=t;M++){const A=M/t;h.x=-e*Math.cos(i+A*s)*Math.sin(o+x*a),h.y=e*Math.cos(o+x*a),h.z=e*Math.sin(i+A*s)*Math.sin(o+x*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),d.push(f.x,f.y,f.z),m.push(A+y,1-x),b.push(c++)}u.push(b)}for(let _=0;_<n;_++)for(let b=0;b<t;b++){const x=u[_][b+1],y=u[_][b],M=u[_+1][b],A=u[_+1][b+1];(_!==0||o>0)&&p.push(x,y,A),(_!==n-1||l<Math.PI)&&p.push(y,M,A)}this.setIndex(p),this.setAttribute("position",new It(g,3)),this.setAttribute("normal",new It(d,3)),this.setAttribute("uv",new It(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new du(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Oa extends Xn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lp,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class wr extends Oa{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ie(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Oe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Oe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Oe(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Mi(r,e,t){return Rp(r)?new r.constructor(r.subarray(e,t!==void 0?t:r.length)):r.slice(e,t)}function Ko(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Rp(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function WS(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Uf(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function Pp(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class xo{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class XS extends xo{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Uh,endingEnd:Uh}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case zh:s=e,a=2*t-n;break;case Bh:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case zh:o=e,l=2*n-t;break;case Bh:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-t)/(i-t),d=g*g,m=d*g,_=-f*m+2*f*d-f*g,b=(1+f)*m+(-1.5-2*f)*d+(-.5+f)*g+1,x=(-1-p)*m+(1.5+p)*d+.5*g,y=p*m-p*d;for(let M=0;M!==a;++M)s[M]=_*o[u+M]+b*o[c+M]+x*o[l+M]+y*o[h+M];return s}}class jS extends xo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*h+o[l+f]*u;return s}}class qS extends xo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Kn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ko(t,this.TimeBufferType),this.values=Ko(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ko(e.times,Array),values:Ko(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new qS(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new jS(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new XS(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ro:t=this.InterpolantFactoryMethodDiscrete;break;case cs:t=this.InterpolantFactoryMethodLinear;break;case nl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ro;case this.InterpolantFactoryMethodLinear:return cs;case this.InterpolantFactoryMethodSmooth:return nl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=Mi(n,s,o),this.values=Mi(this.values,s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Rp(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=Mi(this.times),t=Mi(this.values),n=this.getValueSize(),i=this.getInterpolation()===nl,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,f=h-n,p=h+n;for(let g=0;g!==n;++g){const d=t[h+g];if(d!==t[f+g]||d!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let p=0;p!==n;++p)t[f+p]=t[h+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=Mi(e,0,o),this.values=Mi(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=Mi(this.times,0),t=Mi(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Kn.prototype.TimeBufferType=Float32Array;Kn.prototype.ValueBufferType=Float32Array;Kn.prototype.DefaultInterpolation=cs;class Ts extends Kn{}Ts.prototype.ValueTypeName="bool";Ts.prototype.ValueBufferType=Array;Ts.prototype.DefaultInterpolation=ro;Ts.prototype.InterpolantFactoryMethodLinear=void 0;Ts.prototype.InterpolantFactoryMethodSmooth=void 0;class Dp extends Kn{}Dp.prototype.ValueTypeName="color";class lo extends Kn{}lo.prototype.ValueTypeName="number";class YS extends xo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)qn.slerpFlat(s,0,o,c-a,o,c,l);return s}}class br extends Kn{InterpolantFactoryMethodLinear(e){return new YS(this.times,this.values,this.getValueSize(),e)}}br.prototype.ValueTypeName="quaternion";br.prototype.DefaultInterpolation=cs;br.prototype.InterpolantFactoryMethodSmooth=void 0;class Es extends Kn{}Es.prototype.ValueTypeName="string";Es.prototype.ValueBufferType=Array;Es.prototype.DefaultInterpolation=ro;Es.prototype.InterpolantFactoryMethodLinear=void 0;Es.prototype.InterpolantFactoryMethodSmooth=void 0;class co extends Kn{}co.prototype.ValueTypeName="vector";class KS{constructor(e,t=-1,n,i=cx){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=In(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(ZS(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(Kn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=WS(l);l=Uf(l,1,u),c=Uf(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new lo(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,p,g,d){if(p.length!==0){const m=[],_=[];Pp(p,m,_,g),m.length!==0&&d.push(new h(f,m,_))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const p={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let d=0;d<f[g].morphTargets.length;d++)p[f[g].morphTargets[d]]=-1;for(const d in p){const m=[],_=[];for(let b=0;b!==f[g].morphTargets.length;++b){const x=f[g];m.push(x.time),_.push(x.morphTarget===d?1:0)}i.push(new lo(".morphTargetInfluence["+d+"]",m,_))}l=p.length*o}else{const p=".bones["+t[h].name+"]";n(co,p+".position",f,"pos",i),n(br,p+".quaternion",f,"rot",i),n(co,p+".scale",f,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function $S(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return lo;case"vector":case"vector2":case"vector3":case"vector4":return co;case"color":return Dp;case"quaternion":return br;case"bool":case"boolean":return Ts;case"string":return Es}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function ZS(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=$S(r.type);if(r.times===void 0){const t=[],n=[];Pp(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const hs={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class JS{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const QS=new JS;class vo{constructor(e){this.manager=e!==void 0?e:QS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const ni={};class ew extends Error{constructor(e,t){super(e),this.response=t}}class Ip extends vo{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=hs.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(ni[e]!==void 0){ni[e].push({onLoad:t,onProgress:n,onError:i});return}ni[e]=[],ni[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=ni[e],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=f?parseInt(f):0,g=p!==0;let d=0;const m=new ReadableStream({start(_){b();function b(){h.read().then(({done:x,value:y})=>{if(x)_.close();else{d+=y.byteLength;const M=new ProgressEvent("progress",{lengthComputable:g,loaded:d,total:p});for(let A=0,R=u.length;A<R;A++){const v=u[A];v.onProgress&&v.onProgress(M)}_.enqueue(y),b()}})}}});return new Response(m)}else throw new ew(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{hs.add(e,c);const u=ni[e];delete ni[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=ni[e];if(u===void 0)throw this.manager.itemError(e),c;delete ni[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class tw extends vo{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=hs.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=ao("img");function l(){u(),hs.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class nw extends vo{constructor(e){super(e)}load(e,t,n,i){const s=new Et,o=new tw(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Na extends at{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Cl=new ke,zf=new F,Bf=new F;class pu{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.map=null,this.mapPass=null,this.matrix=new ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ru,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;zf.setFromMatrixPosition(e.matrixWorld),t.position.copy(zf),Bf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bf),t.updateMatrixWorld(),Cl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Cl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class iw extends pu{constructor(){super(new Ht(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=oo*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class rw extends Na{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(at.DEFAULT_UP),this.updateMatrix(),this.target=new at,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new iw}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const kf=new ke,Fs=new F,Ll=new F;class sw extends pu{constructor(){super(new Ht(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ie(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Fs.setFromMatrixPosition(e.matrixWorld),n.position.copy(Fs),Ll.copy(n.position),Ll.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ll),n.updateMatrixWorld(),i.makeTranslation(-Fs.x,-Fs.y,-Fs.z),kf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kf)}}class Op extends Na{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new sw}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ow extends pu{constructor(){super(new ou(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class aw extends Na{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(at.DEFAULT_UP),this.updateMatrix(),this.target=new at,this.shadow=new ow}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class lw extends Na{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class fc{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class cw extends vo{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=hs.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){hs.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){i&&i(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}const mu="\\[\\]\\.:\\/",uw=new RegExp("["+mu+"]","g"),gu="[^"+mu+"]",hw="[^"+mu.replace("\\.","")+"]",fw=/((?:WC+[\/:])*)/.source.replace("WC",gu),dw=/(WCOD+)?/.source.replace("WCOD",hw),pw=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gu),mw=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gu),gw=new RegExp("^"+fw+dw+pw+mw+"$"),_w=["material","materials","bones","map"];class xw{constructor(e,t,n){const i=n||Ze.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ze{constructor(e,t,n){this.path=t,this.parsedPath=n||Ze.parseTrackName(t),this.node=Ze.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ze.Composite(e,t,n):new Ze(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(uw,"")}static parseTrackName(e){const t=gw.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);_w.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Ze.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ze.Composite=xw;Ze.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ze.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ze.prototype.GetterByBindingType=[Ze.prototype._getValue_direct,Ze.prototype._getValue_array,Ze.prototype._getValue_arrayElement,Ze.prototype._getValue_toArray];Ze.prototype.SetterByBindingTypeAndVersioning=[[Ze.prototype._setValue_direct,Ze.prototype._setValue_direct_setNeedsUpdate,Ze.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_array,Ze.prototype._setValue_array_setNeedsUpdate,Ze.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_arrayElement,Ze.prototype._setValue_arrayElement_setNeedsUpdate,Ze.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_fromArray,Ze.prototype._setValue_fromArray_setNeedsUpdate,Ze.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Vf{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Rt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class vw extends fu{constructor(e=10,t=10,n=4473924,i=8947848){n=new Oe(n),i=new Oe(i);const s=t/2,o=e/t,a=e/2,l=[],c=[];for(let f=0,p=0,g=-a;f<=t;f++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const d=f===s?n:i;d.toArray(c,p),p+=3,d.toArray(c,p),p+=3,d.toArray(c,p),p+=3,d.toArray(c,p),p+=3}const u=new fn;u.setAttribute("position",new It(l,3)),u.setAttribute("color",new It(c,3));const h=new Ia({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class yw extends fu{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new fn;i.setAttribute("position",new It(t,3)),i.setAttribute("color",new It(n,3));const s=new Ia({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(e,t,n){const i=new Oe,s=this.geometry.attributes.color.array;return i.set(e),i.toArray(s,0),i.toArray(s,3),i.set(t),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tu);function ri(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Np(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var cn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},fs={duration:.5,overwrite:!1,delay:0},_u,Ot,pt,bn=1e8,tt=1/bn,dc=Math.PI*2,bw=dc/4,Mw=0,Fp=Math.sqrt,Sw=Math.cos,ww=Math.sin,wt=function(e){return typeof e=="string"},lt=function(e){return typeof e=="function"},pi=function(e){return typeof e=="number"},xu=function(e){return typeof e>"u"},Yn=function(e){return typeof e=="object"},$t=function(e){return e!==!1},Up=function(){return typeof window<"u"},$o=function(e){return lt(e)||wt(e)},zp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Nt=Array.isArray,pc=/(?:-?\.?\d|\.)+/gi,Bp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,jr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Rl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,kp=/[+-]=-?[.\d]+/,Vp=/[^,'"\[\]\s]+/gi,Tw=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,st,_n,mc,vu,un={},fa={},Gp,Hp=function(e){return(fa=Mr(e,un))&&hn},yu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},da=function(e,t){return!t&&console.warn(e)},Wp=function(e,t){return e&&(un[e]=t)&&fa&&(fa[e]=t)||un},uo=function(){return 0},Ew={suppressEvents:!0,isStart:!0,kill:!1},ra={suppressEvents:!0,kill:!1},Aw={suppressEvents:!0},bu={},Ni=[],gc={},Xp,sn={},Pl={},Gf=30,sa=[],Mu="",Su=function(e){var t=e[0],n,i;if(Yn(t)||lt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=sa.length;i--&&!sa[i].targetTest(t););n=sa[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new dm(e[i],n)))||e.splice(i,1);return e},dr=function(e){return e._gsap||Su(Mn(e))[0]._gsap},jp=function(e,t,n){return(n=e[t])&&lt(n)?e[t]():xu(n)&&e.getAttribute&&e.getAttribute(t)||n},Zt=function(e,t){return(e=e.split(",")).forEach(t)||e},ut=function(e){return Math.round(e*1e5)/1e5||0},Tt=function(e){return Math.round(e*1e7)/1e7||0},Qr=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Cw=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},pa=function(){var e=Ni.length,t=Ni.slice(0),n,i;for(gc={},Ni.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},qp=function(e,t,n,i){Ni.length&&!Ot&&pa(),e.render(t,n,i||Ot&&t<0&&(e._initted||e._startAt)),Ni.length&&!Ot&&pa()},Yp=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Vp).length<2?t:wt(e)?e.trim():e},Kp=function(e){return e},Tn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Lw=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Mr=function(e,t){for(var n in t)e[n]=t[n];return e},Hf=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Yn(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},ma=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},$s=function(e){var t=e.parent||st,n=e.keyframes?Lw(Nt(e.keyframes)):Tn;if($t(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Rw=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},$p=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Fa=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Bi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},pr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Pw=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},_c=function(e,t,n,i){return e._startAt&&(Ot?e._startAt.revert(ra):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Dw=function r(e){return!e||e._ts&&r(e.parent)},Wf=function(e){return e._repeat?ds(e._tTime,e=e.duration()+e._rDelay)*e:0},ds=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},ga=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Ua=function(e){return e._end=Tt(e._start+(e._tDur/Math.abs(e._ts||e._rts||tt)||0))},za=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Tt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Ua(e),n._dirty||pr(n,e)),e},Zp=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=ga(e.rawTime(),t),(!t._dur||yo(0,t.totalDuration(),n)-t._tTime>tt)&&t.render(n,!0)),pr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-tt}},Wn=function(e,t,n,i){return t.parent&&Bi(t),t._start=Tt((pi(n)?n:n||e!==st?gn(e,n,t):e._time)+t._delay),t._end=Tt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),$p(e,t,"_first","_last",e._sort?"_start":0),xc(t)||(e._recent=t),i||Zp(e,t),e._ts<0&&za(e,e._tTime),e},Jp=function(e,t){return(un.ScrollTrigger||yu("scrollTrigger",t))&&un.ScrollTrigger.create(t,e)},Qp=function(e,t,n,i,s){if(Tu(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Ot&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Xp!==on.frame)return Ni.push(e),e._lazy=[s,i],1},Iw=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},xc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Ow=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&Iw(e)&&!(!e._initted&&xc(e))||(e._ts<0||e._dp._ts<0)&&!xc(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=yo(0,e._tDur,t),u=ds(l,a),e._yoyo&&u&1&&(o=1-o),u!==ds(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Ot||i||e._zTime===tt||!t&&e._zTime){if(!e._initted&&Qp(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?tt:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&_c(e,t,n,!0),e._onUpdate&&!n&&Sn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Sn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Bi(e,1),!n&&!Ot&&(Sn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Nw=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},ps=function(e,t,n,i){var s=e._repeat,o=Tt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Tt(o*(s+1)+e._rDelay*s):o,a>0&&!i&&za(e,e._tTime=e._tDur*a),e.parent&&Ua(e),n||pr(e.parent,e),e},Xf=function(e){return e instanceof Kt?pr(e):ps(e,e._dur)},Fw={_start:0,endTime:uo,totalDuration:uo},gn=function r(e,t,n){var i=e.labels,s=e._recent||Fw,o=e.duration()>=bn?s.endTime(!1):e._dur,a,l,c;return wt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Nt(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Zs=function(e,t,n){var i=pi(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=$t(l.vars.inherit)&&l.parent;o.immediateRender=$t(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new _t(t[0],o,t[s+1])},Vi=function(e,t){return e||e===0?t(e):t},yo=function(e,t,n){return n<e?e:n>t?t:n},Dt=function(e,t){return!wt(e)||!(t=Tw.exec(e))?"":t[1]},Uw=function(e,t,n){return Vi(n,function(i){return yo(e,t,i)})},vc=[].slice,em=function(e,t){return e&&Yn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Yn(e[0]))&&!e.nodeType&&e!==_n},zw=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return wt(i)&&!t||em(i,1)?(s=n).push.apply(s,Mn(i)):n.push(i)})||n},Mn=function(e,t,n){return pt&&!t&&pt.selector?pt.selector(e):wt(e)&&!n&&(mc||!ms())?vc.call((t||vu).querySelectorAll(e),0):Nt(e)?zw(e,n):em(e)?vc.call(e,0):e?[e]:[]},yc=function(e){return e=Mn(e)[0]||da("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Mn(t,n.querySelectorAll?n:n===e?da("Invalid scope")||vu.createElement("div"):e)}},tm=function(e){return e.sort(function(){return .5-Math.random()})},nm=function(e){if(lt(e))return e;var t=Yn(e)?e:{each:e},n=mr(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return wt(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(f,p,g){var d=(g||t).length,m=o[d],_,b,x,y,M,A,R,v,w;if(!m){if(w=t.grid==="auto"?0:(t.grid||[1,bn])[1],!w){for(R=-bn;R<(R=g[w++].getBoundingClientRect().left)&&w<d;);w--}for(m=o[d]=[],_=l?Math.min(w,d)*u-.5:i%w,b=w===bn?0:l?d*h/w-.5:i/w|0,R=0,v=bn,A=0;A<d;A++)x=A%w-_,y=b-(A/w|0),m[A]=M=c?Math.abs(c==="y"?y:x):Fp(x*x+y*y),M>R&&(R=M),M<v&&(v=M);i==="random"&&tm(m),m.max=R-v,m.min=v,m.v=d=(parseFloat(t.amount)||parseFloat(t.each)*(w>d?d-1:c?c==="y"?d/w:w:Math.max(w,d/w))||0)*(i==="edges"?-1:1),m.b=d<0?s-d:s,m.u=Dt(t.amount||t.each)||0,n=n&&d<0?um(n):n}return d=(m[f]-m.min)/m.max||0,Tt(m.b+(n?n(d):d)*m.v)+m.u}},bc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Tt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(pi(n)?0:Dt(n))}},im=function(e,t){var n=Nt(e),i,s;return!n&&Yn(e)&&(i=n=e.radius||bn,e.values?(e=Mn(e.values),(s=!pi(e[0]))&&(i*=i)):e=bc(e.increment)),Vi(t,n?lt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=bn,u=0,h=e.length,f,p;h--;)s?(f=e[h].x-a,p=e[h].y-l,f=f*f+p*p):f=Math.abs(e[h]-a),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:o,s||u===o||pi(o)?u:u+Dt(o)}:bc(e))},rm=function(e,t,n,i){return Vi(Nt(e)?!t:n===!0?!!(n=0):!i,function(){return Nt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Bw=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},kw=function(e,t){return function(n){return e(parseFloat(n))+(t||Dt(n))}},Vw=function(e,t,n){return om(e,t,0,1,n)},sm=function(e,t,n){return Vi(n,function(i){return e[~~t(i)]})},Gw=function r(e,t,n){var i=t-e;return Nt(e)?sm(e,r(0,e.length),t):Vi(n,function(s){return(i+(s-e)%i)%i+e})},Hw=function r(e,t,n){var i=t-e,s=i*2;return Nt(e)?sm(e,r(0,e.length-1),t):Vi(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},ho=function(e){for(var t=0,n="",i,s,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",s=e.substr(i+7,o-i-7).match(a?Vp:pc),n+=e.substr(t,i-t)+rm(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},om=function(e,t,n,i,s){var o=t-e,a=i-n;return Vi(s,function(l){return n+((l-e)/o*a||0)})},Ww=function r(e,t,n,i){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=wt(e),a={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(Nt(e)&&!Nt(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(g){g*=h;var d=Math.min(f,~~g);return u[d](g-d)},n=t}else i||(e=Mr(Nt(e)?[]:{},e));if(!u){for(l in t)wu.call(a,e,l,"get",t[l]);s=function(g){return Cu(g,a)||(o?e.p:e)}}}return Vi(n,s)},jf=function(e,t,n){var i=e.labels,s=bn,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Sn=function(e,t,n){var i=e.vars,s=i[t],o=pt,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Ni.length&&pa(),a&&(pt=a),u=l?s.apply(c,l):s.call(c),pt=o,u},Hs=function(e){return Bi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Ot),e.progress()<1&&Sn(e,"onInterrupt"),e},qr,Xw=function(e){e=!e.name&&e.default||e;var t=e.name,n=lt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:uo,render:Cu,add:wu,kill:aT,modifier:oT,rawVars:0},o={targetTest:0,get:0,getSetter:Au,aliases:{},register:0};if(ms(),e!==i){if(sn[t])return;Tn(i,Tn(ma(e,s),o)),Mr(i.prototype,Mr(s,ma(e,o))),sn[i.prop=t]=i,e.targetTest&&(sa.push(i),bu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Wp(t,i),e.register&&e.register(hn,i,Jt)},Qe=255,Ws={aqua:[0,Qe,Qe],lime:[0,Qe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Qe],navy:[0,0,128],white:[Qe,Qe,Qe],olive:[128,128,0],yellow:[Qe,Qe,0],orange:[Qe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Qe,0,0],pink:[Qe,192,203],cyan:[0,Qe,Qe],transparent:[Qe,Qe,Qe,0]},Dl=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Qe+.5|0},am=function(e,t,n){var i=e?pi(e)?[e>>16,e>>8&Qe,e&Qe]:0:Ws.black,s,o,a,l,c,u,h,f,p,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ws[e])i=Ws[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Qe,i&Qe,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Qe,e&Qe]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(pc),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=Dl(l+1/3,s,o),i[1]=Dl(l,s,o),i[2]=Dl(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(Bp),n&&i.length<4&&(i[3]=1),i}else i=e.match(pc)||Ws.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/Qe,o=i[1]/Qe,a=i[2]/Qe,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(p=h-f,c=u>.5?p/(2-h-f):p/(h+f),l=h===s?(o-a)/p+(o<a?6:0):h===o?(a-s)/p+2:(s-o)/p+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},lm=function(e){var t=[],n=[],i=-1;return e.split(Fi).forEach(function(s){var o=s.match(jr)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},qf=function(e,t,n){var i="",s=(e+i).match(Fi),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=am(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=lm(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Fi,"1").split(jr),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Fi),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},Fi=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ws)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),jw=/hsl[a]?\(/,cm=function(e){var t=e.join(" "),n;if(Fi.lastIndex=0,Fi.test(t))return n=jw.test(t),e[1]=qf(e[1],n),e[0]=qf(e[0],n,lm(e[1])),!0},fo,on=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,h,f,p,g=function d(m){var _=r()-i,b=m===!0,x,y,M,A;if(_>e&&(n+=_-t),i+=_,M=i-n,x=M-o,(x>0||b)&&(A=++h.frame,f=M-h.time*1e3,h.time=M=M/1e3,o+=x+(x>=s?4:s-x),y=1),b||(l=c(d)),y)for(p=0;p<a.length;p++)a[p](M,f,A,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){Gp&&(!mc&&Up()&&(_n=mc=window,vu=_n.document||{},un.gsap=hn,(_n.gsapVersions||(_n.gsapVersions=[])).push(hn.version),Hp(fa||_n.GreenSockGlobals||!_n.gsap&&_n||{}),u=_n.requestAnimationFrame),l&&h.sleep(),c=u||function(m){return setTimeout(m,o-h.time*1e3+1|0)},fo=1,g(2))},sleep:function(){(u?_n.cancelAnimationFrame:clearTimeout)(l),fo=0,c=uo},lagSmoothing:function(m,_){e=m||1/0,t=Math.min(_||33,e)},fps:function(m){s=1e3/(m||240),o=h.time*1e3+s},add:function(m,_,b){var x=_?function(y,M,A,R){m(y,M,A,R),h.remove(x)}:m;return h.remove(m),a[b?"unshift":"push"](x),ms(),x},remove:function(m,_){~(_=a.indexOf(m))&&a.splice(_,1)&&p>=_&&p--},_listeners:a},h}(),ms=function(){return!fo&&on.wake()},Ge={},qw=/^[\d.\-M][\d.\-,\s]/,Yw=/["']/g,Kw=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(Yw,"").trim():+c,i=l.substr(a+1).trim();return t},$w=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Zw=function(e){var t=(e+"").split("("),n=Ge[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Kw(t[1])]:$w(e).split(",").map(Yp)):Ge._CE&&qw.test(e)?Ge._CE("",e):n},um=function(e){return function(t){return 1-e(1-t)}},hm=function r(e,t){for(var n=e._first,i;n;)n instanceof Kt?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},mr=function(e,t){return e&&(lt(e)?e:Ge[e]||Zw(e))||t},Tr=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return Zt(e,function(a){Ge[a]=un[a]=s,Ge[o=a.toLowerCase()]=n;for(var l in s)Ge[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ge[a+"."+l]=s[l]}),s},fm=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Il=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/dc*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*ww((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:fm(a);return s=dc/s,l.config=function(c,u){return r(e,c,u)},l},Ol=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:fm(n);return i.config=function(s){return r(e,s)},i};Zt("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Tr(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Ge.Linear.easeNone=Ge.none=Ge.Linear.easeIn;Tr("Elastic",Il("in"),Il("out"),Il());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};Tr("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Tr("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});Tr("Circ",function(r){return-(Fp(1-r*r)-1)});Tr("Sine",function(r){return r===1?1:-Sw(r*bw)+1});Tr("Back",Ol("in"),Ol("out"),Ol());Ge.SteppedEase=Ge.steps=un.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-tt;return function(a){return((i*yo(0,o,a)|0)+s)*n}}};fs.ease=Ge["quad.out"];Zt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Mu+=r+","+r+"Params,"});var dm=function(e,t){this.id=Mw++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:jp,this.set=t?t.getSetter:Au},gs=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ps(this,+t.duration,1,1),this.data=t.data,pt&&(this._ctx=pt,pt.data.push(this)),fo||on.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ps(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(ms(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(za(this,n),!s._dp||s.parent||Zp(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Wn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===tt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),qp(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Wf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Wf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?ds(this._tTime,s)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-tt?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?ga(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-tt?0:this._rts,this.totalTime(yo(-this._delay,this._tDur,i),!0),Ua(this),Pw(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ms(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==tt&&(this._tTime-=tt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Wn(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+($t(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ga(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Aw);var i=Ot;return Ot=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Ot=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Xf(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Xf(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(gn(this,n),$t(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,$t(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-tt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-tt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-tt)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(s){var o=lt(n)?n:Kp,a=function(){var c=i.then;i.then=null,lt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){Hs(this)},r}();Tn(gs.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-tt,_prom:0,_ps:!1,_rts:1});var Kt=function(r){Np(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=$t(n.sortChildren),st&&Wn(n.parent||st,ri(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Jp(ri(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return Zs(0,arguments,this),this},t.from=function(i,s,o){return Zs(1,arguments,this),this},t.fromTo=function(i,s,o,a){return Zs(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,$s(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new _t(i,s,gn(this,o),1),this},t.call=function(i,s,o){return Wn(this,_t.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new _t(i,o,gn(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,$s(o).immediateRender=$t(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,h){return a.startAt=o,$s(a).immediateRender=$t(a.immediateRender),this.staggerTo(i,s,a,l,c,u,h)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Tt(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,p,g,d,m,_,b,x,y,M,A,R;if(this!==st&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,y=this._start,x=this._ts,_=!x,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(f=Tt(u%m),u===l?(d=this._repeat,f=c):(d=~~(u/m),d&&d===u/m&&(f=c,d--),f>c&&(f=c)),M=ds(this._tTime,m),!a&&this._tTime&&M!==d&&(M=d),A&&d&1&&(f=c-f,R=1),d!==M&&!this._lock){var v=A&&M&1,w=v===(A&&d&1);if(d<M&&(v=!v),a=v?0:c,this._lock=1,this.render(a||(R?0:Tt(d*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Sn(this,"onRepeat"),this.vars.repeatRefresh&&!R&&(this.invalidate()._lock=1),a&&a!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,w&&(this._lock=2,a=v?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!R&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;hm(this,R)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=Nw(this,Tt(a),Tt(f)),b&&(u-=f-(f=b._start))),this._tTime=u,this._time=f,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&f&&!s&&(Sn(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(p=this._first;p;){if(g=p._next,(p._act||f>=p._start)&&p._ts&&b!==p){if(p.parent!==this)return this.render(i,s,o);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,s,o),f!==this._time||!this._ts&&!_){b=0,g&&(u+=this._zTime=-tt);break}}p=g}else{p=this._last;for(var D=i<0?i:f;p;){if(g=p._prev,(p._act||D<=p._end)&&p._ts&&b!==p){if(p.parent!==this)return this.render(i,s,o);if(p.render(p._ts>0?(D-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(D-p._start)*p._ts,s,o||Ot&&(p._initted||p._startAt)),f!==this._time||!this._ts&&!_){b=0,g&&(u+=this._zTime=D?-tt:tt);break}}p=g}}if(b&&!s&&(this.pause(),b.render(f>=a?0:-tt)._zTime=f>=a?1:-1,this._ts))return this._start=y,Ua(this),this.render(i,s,o);this._onUpdate&&!s&&Sn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(y===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Bi(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(Sn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(pi(s)||(s=gn(this,s,i)),!(i instanceof gs)){if(Nt(i))return i.forEach(function(a){return o.add(a,s)}),this;if(wt(i))return this.addLabel(i,s);if(lt(i))i=_t.delayedCall(0,i);else return this}return this!==i?Wn(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-bn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof _t?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return wt(i)?this.removeLabel(i):lt(i)?this.killTweensOf(i):(Fa(this,i),i===this._recent&&(this._recent=this._last),pr(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Tt(on.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=gn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=_t.delayedCall(0,s||uo,o);return a.data="isPause",this._hasPause=1,Wn(this,a,gn(this,i))},t.removePause=function(i){var s=this._first;for(i=gn(this,i);s;)s._start===i&&s.data==="isPause"&&Bi(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Ci!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=Mn(i),l=this._first,c=pi(s),u;l;)l instanceof _t?Cw(l._targets,a)&&(c?(!Ci||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=gn(o,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,p,g=_t.to(o,Tn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||tt,onStart:function(){if(o.pause(),!p){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&ps(g,m,0,1).render(g._time,!0,!0),p=1}u&&u.apply(g,h||[])}},s));return f?g.render(0):g},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,Tn({startAt:{time:gn(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),jf(this,gn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),jf(this,gn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+tt)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return pr(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),pr(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=bn,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Wn(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;ps(o,o===st&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(st._ts&&(qp(st,ga(i,st)),Xp=on.frame),on.frame>=Gf){Gf+=cn.autoSleep||120;var s=st._first;if((!s||!s._ts)&&cn.autoSleep&&on._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||on.sleep()}}},e}(gs);Tn(Kt.prototype,{_lock:0,_hasPause:0,_forcing:0});var Jw=function(e,t,n,i,s,o,a){var l=new Jt(this._pt,e,t,0,1,vm,null,s),c=0,u=0,h,f,p,g,d,m,_,b;for(l.b=n,l.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=ho(i)),o&&(b=[n,i],o(b,e,t),n=b[0],i=b[1]),f=n.match(Rl)||[];h=Rl.exec(i);)g=h[0],d=i.substring(c,h.index),p?p=(p+1)%5:d.substr(-5)==="rgba("&&(p=1),g!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:d||u===1?d:",",s:m,c:g.charAt(1)==="="?Qr(m,g)-m:parseFloat(g)-m,m:p&&p<4?Math.round:0},c=Rl.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(kp.test(i)||_)&&(l.e=0),this._pt=l,l},wu=function(e,t,n,i,s,o,a,l,c,u){lt(i)&&(i=i(s||0,e,o));var h=e[t],f=n!=="get"?n:lt(h)?c?e[t.indexOf("set")||!lt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,p=lt(h)?c?iT:_m:Eu,g;if(wt(i)&&(~i.indexOf("random(")&&(i=ho(i)),i.charAt(1)==="="&&(g=Qr(f,i)+(Dt(f)||0),(g||g===0)&&(i=g))),!u||f!==i||Mc)return!isNaN(f*i)&&i!==""?(g=new Jt(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?sT:xm,0,p),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!h&&!(t in e)&&yu(t,i),Jw.call(this,e,t,f,i,p,l||cn.stringFilter,c))},Qw=function(e,t,n,i,s){if(lt(e)&&(e=Js(e,s,t,n,i)),!Yn(e)||e.style&&e.nodeType||Nt(e)||zp(e))return wt(e)?Js(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=Js(e[a],s,t,n,i);return o},pm=function(e,t,n,i,s,o){var a,l,c,u;if(sn[e]&&(a=new sn[e]).init(s,a.rawVars?t[e]:Qw(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Jt(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==qr))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Ci,Mc,Tu=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.onUpdateParams,h=i.callbackScope,f=i.runBackwards,p=i.yoyoEase,g=i.keyframes,d=i.autoRevert,m=e._dur,_=e._startAt,b=e._targets,x=e.parent,y=x&&x.data==="nested"?x.vars.targets:b,M=e._overwrite==="auto"&&!_u,A=e.timeline,R,v,w,D,W,q,N,I,H,Y,K,V,oe;if(A&&(!g||!s)&&(s="none"),e._ease=mr(s,fs.ease),e._yEase=p?um(mr(p===!0?s:p,fs.ease)):0,p&&e._yoyo&&!e._repeat&&(p=e._yEase,e._yEase=e._ease,e._ease=p),e._from=!A&&!!i.runBackwards,!A||g&&!i.stagger){if(I=b[0]?dr(b[0]).harness:0,V=I&&i[I.prop],R=ma(i,bu),_&&(_._zTime<0&&_.progress(1),t<0&&f&&a&&!d?_.render(-1,!0):_.revert(f&&m?ra:Ew),_._lazy=0),o){if(Bi(e._startAt=_t.set(b,Tn({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!_&&$t(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:h,stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ot||!a&&!d)&&e._startAt.revert(ra),a&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(f&&m&&!_){if(t&&(a=!1),w=Tn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&$t(l),immediateRender:a,stagger:0,parent:x},R),V&&(w[I.prop]=V),Bi(e._startAt=_t.set(b,w)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ot?e._startAt.revert(ra):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,tt,tt);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&$t(l)||l&&!m,v=0;v<b.length;v++){if(W=b[v],N=W._gsap||Su(b)[v]._gsap,e._ptLookup[v]=Y={},gc[N.id]&&Ni.length&&pa(),K=y===b?v:y.indexOf(W),I&&(H=new I).init(W,V||R,e,K,y)!==!1&&(e._pt=D=new Jt(e._pt,W,H.name,0,1,H.render,H,0,H.priority),H._props.forEach(function(se){Y[se]=D}),H.priority&&(q=1)),!I||V)for(w in R)sn[w]&&(H=pm(w,R,e,K,W,y))?H.priority&&(q=1):Y[w]=D=wu.call(e,W,w,"get",R[w],K,y,0,i.stringFilter);e._op&&e._op[v]&&e.kill(W,e._op[v]),M&&e._pt&&(Ci=e,st.killTweensOf(W,Y,e.globalTime(t)),oe=!e.parent,Ci=0),e._pt&&l&&(gc[N.id]=1)}q&&ym(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!oe,g&&t<=0&&A.render(bn,!0,!0)},eT=function(e,t,n,i,s,o,a){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,h,f;if(!l)for(l=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(c=h[f][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Mc=1,e.vars[t]="+=0",Tu(e,a),Mc=0,1;l.push(c)}for(f=l.length;f--;)u=l[f],c=u._pt||u,c.s=(i||i===0)&&!s?i:c.s+(i||0)+o*c.c,c.c=n-c.s,u.e&&(u.e=ut(n)+Dt(u.e)),u.b&&(u.b=c.s+Dt(u.b))},tT=function(e,t){var n=e[0]?dr(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=Mr({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},nT=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(Nt(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Js=function(e,t,n,i,s){return lt(e)?e.call(t,n,i,s):wt(e)&&~e.indexOf("random(")?ho(e):e},mm=Mu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",gm={};Zt(mm+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return gm[r]=1});var _t=function(r){Np(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:$s(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,p=l.overwrite,g=l.keyframes,d=l.defaults,m=l.scrollTrigger,_=l.yoyoEase,b=i.parent||st,x=(Nt(n)||zp(n)?pi(n[0]):"length"in i)?[n]:Mn(n),y,M,A,R,v,w,D,W;if(a._targets=x.length?Su(x):da("GSAP target "+n+" not found. https://greensock.com",!cn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,g||f||$o(c)||$o(u)){if(i=a.vars,y=a.timeline=new Kt({data:"nested",defaults:d||{},targets:b&&b.data==="nested"?b.vars.targets:x}),y.kill(),y.parent=y._dp=ri(a),y._start=0,f||$o(c)||$o(u)){if(R=x.length,D=f&&nm(f),Yn(f))for(v in f)~mm.indexOf(v)&&(W||(W={}),W[v]=f[v]);for(M=0;M<R;M++)A=ma(i,gm),A.stagger=0,_&&(A.yoyoEase=_),W&&Mr(A,W),w=x[M],A.duration=+Js(c,ri(a),M,w,x),A.delay=(+Js(u,ri(a),M,w,x)||0)-a._delay,!f&&R===1&&A.delay&&(a._delay=u=A.delay,a._start+=u,A.delay=0),y.to(w,A,D?D(M,w,x):0),y._ease=Ge.none;y.duration()?c=u=0:a.timeline=0}else if(g){$s(Tn(y.vars.defaults,{ease:"none"})),y._ease=mr(g.ease||i.ease||"none");var q=0,N,I,H;if(Nt(g))g.forEach(function(Y){return y.to(x,Y,">")}),y.duration();else{A={};for(v in g)v==="ease"||v==="easeEach"||nT(v,g[v],A,g.easeEach);for(v in A)for(N=A[v].sort(function(Y,K){return Y.t-K.t}),q=0,M=0;M<N.length;M++)I=N[M],H={ease:I.e,duration:(I.t-(M?N[M-1].t:0))/100*c},H[v]=I.v,y.to(x,H,q),q+=H.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||a.duration(c=y.duration())}else a.timeline=0;return p===!0&&!_u&&(Ci=ri(a),st.killTweensOf(x),Ci=0),Wn(b,ri(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!g&&a._start===Tt(b._time)&&$t(h)&&Dw(ri(a))&&b.data!=="nested")&&(a._tTime=-tt,a.render(Math.max(0,-u)||0)),m&&Jp(ri(a),m),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-tt&&!u?l:i<tt?0:i,f,p,g,d,m,_,b,x,y;if(!c)Ow(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,x=this.timeline,this._repeat){if(d=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(d*100+i,s,o);if(f=Tt(h%d),h===l?(g=this._repeat,f=c):(g=~~(h/d),g&&g===h/d&&(f=c,g--),f>c&&(f=c)),_=this._yoyo&&g&1,_&&(y=this._yEase,f=c-f),m=ds(this._tTime,d),f===a&&!o&&this._initted)return this._tTime=h,this;g!==m&&(x&&this._yEase&&hm(x,_),this.vars.repeatRefresh&&!_&&!this._lock&&(this._lock=o=1,this.render(Tt(d*g),!0).invalidate()._lock=0))}if(!this._initted){if(Qp(this,u?i:f,o,s,h))return this._tTime=0,this;if(a!==this._time)return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=b=(y||this._ease)(f/c),this._from&&(this.ratio=b=1-b),f&&!a&&!s&&(Sn(this,"onStart"),this._tTime!==h))return this;for(p=this._pt;p;)p.r(b,p.d),p=p._next;x&&x.render(i<0?i:!f&&_?-tt:x._dur*x._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&_c(this,i,s,o),Sn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Sn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&_c(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Bi(this,1),!s&&!(u&&!a)&&(h||a||_)&&(Sn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a){fo||on.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Tu(this,l),c=this._ease(l/this._dur),eT(this,i,s,o,a,c,l)?this.resetTo(i,s,o,a):(za(this,0),this.parent||$p(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Hs(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Ci&&Ci.vars.overwrite!==!0)._first||Hs(this),this.parent&&o!==this.timeline.totalDuration()&&ps(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Mn(i):a,c=this._ptLookup,u=this._pt,h,f,p,g,d,m,_;if((!s||s==="all")&&Rw(a,l))return s==="all"&&(this._pt=0),Hs(this);for(h=this._op=this._op||[],s!=="all"&&(wt(s)&&(d={},Zt(s,function(b){return d[b]=1}),s=d),s=tT(a,s)),_=a.length;_--;)if(~l.indexOf(a[_])){f=c[_],s==="all"?(h[_]=s,g=f,p={}):(p=h[_]=h[_]||{},g=s);for(d in g)m=f&&f[d],m&&((!("kill"in m.d)||m.d.kill(d)===!0)&&Fa(this,m,"_pt"),delete f[d]),p!=="all"&&(p[d]=1)}return this._initted&&!this._pt&&u&&Hs(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Zs(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return Zs(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return st.killTweensOf(i,s,o)},e}(gs);Tn(_t.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Zt("staggerTo,staggerFrom,staggerFromTo",function(r){_t[r]=function(){var e=new Kt,t=vc.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Eu=function(e,t,n){return e[t]=n},_m=function(e,t,n){return e[t](n)},iT=function(e,t,n,i){return e[t](i.fp,n)},rT=function(e,t,n){return e.setAttribute(t,n)},Au=function(e,t){return lt(e[t])?_m:xu(e[t])&&e.setAttribute?rT:Eu},xm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},sT=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},vm=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Cu=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},oT=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},aT=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Fa(this,t,"_pt"):t.dep||(n=1),t=i;return!n},lT=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},ym=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},Jt=function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||xm,this.d=l||this,this.set=c||Eu,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=lT,this.m=n,this.mt=s,this.tween=i},r}();Zt(Mu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return bu[r]=1});un.TweenMax=un.TweenLite=_t;un.TimelineLite=un.TimelineMax=Kt;st=new Kt({sortChildren:!1,defaults:fs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});cn.stringFilter=cm;var _s=[],oa={},cT=[],Yf=0,Nl=function(e){return(oa[e]||cT).map(function(t){return t()})},Sc=function(){var e=Date.now(),t=[];e-Yf>2&&(Nl("matchMediaInit"),_s.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=_n.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Nl("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),Yf=e,Nl("matchMedia"))},bm=function(){function r(t,n){this.selector=n&&yc(n),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){lt(n)&&(s=i,i=n,n=lt);var o=this,a=function(){var c=pt,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=yc(s)),pt=o,h=i.apply(o,arguments),lt(h)&&o._r.push(h),pt=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===lt?a(o):n?o[n]=a:a},e.ignore=function(n){var i=pt;pt=null,n(this),pt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof _t&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n){var o=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return o.splice(o.indexOf(c),1)}))}),o.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof gs)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,s)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i){var a=_s.indexOf(this);~a&&_s.splice(a,1)}},e.revert=function(n){this.kill(n||{})},r}(),uT=function(){function r(t){this.contexts=[],this.scope=t}var e=r.prototype;return e.add=function(n,i,s){Yn(n)||(n={matches:n});var o=new bm(0,s||this.scope),a=o.conditions={},l,c,u;this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=_n.matchMedia(n[c]),l&&(_s.indexOf(o)<0&&_s.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Sc):l.addEventListener("change",Sc)));return u&&i(o),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),_a={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Xw(i)})},timeline:function(e){return new Kt(e)},getTweensOf:function(e,t){return st.getTweensOf(e,t)},getProperty:function(e,t,n,i){wt(e)&&(e=Mn(e)[0]);var s=dr(e||{}).get,o=n?Kp:Yp;return n==="native"&&(n=""),e&&(t?o((sn[t]&&sn[t].get||s)(e,t,n,i)):function(a,l,c){return o((sn[a]&&sn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=Mn(e),e.length>1){var i=e.map(function(u){return hn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var o=sn[t],a=dr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;qr._pt=0,h.init(e,n?u+n:u,qr,0,[e]),h.render(1,h),qr._pt&&Cu(1,qr)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=hn.to(e,Mr((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return st.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=mr(e.ease,fs.ease)),Hf(fs,e||{})},config:function(e){return Hf(cn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!sn[a]&&!un[a]&&da(t+" effect requires "+a+" plugin.")}),Pl[t]=function(a,l,c){return n(Mn(a),Tn(l||{},s),c)},o&&(Kt.prototype[t]=function(a,l,c){return this.add(Pl[t](a,Yn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Ge[e]=mr(t)},parseEase:function(e,t){return arguments.length?mr(e,t):Ge},getById:function(e){return st.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Kt(e),i,s;for(n.smoothChildTiming=$t(e.smoothChildTiming),st.remove(n),n._dp=0,n._time=n._tTime=st._time,i=st._first;i;)s=i._next,(t||!(!i._dur&&i instanceof _t&&i.vars.onComplete===i._targets[0]))&&Wn(n,i,i._start-i._delay),i=s;return Wn(st,n,0),n},context:function(e,t){return e?new bm(e,t):pt},matchMedia:function(e){return new uT(e)},matchMediaRefresh:function(){return _s.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Sc()},addEventListener:function(e,t){var n=oa[e]||(oa[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=oa[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Gw,wrapYoyo:Hw,distribute:nm,random:rm,snap:im,normalize:Vw,getUnit:Dt,clamp:Uw,splitColor:am,toArray:Mn,selector:yc,mapRange:om,pipe:Bw,unitize:kw,interpolate:Ww,shuffle:tm},install:Hp,effects:Pl,ticker:on,updateRoot:Kt.updateRoot,plugins:sn,globalTimeline:st,core:{PropTween:Jt,globals:Wp,Tween:_t,Timeline:Kt,Animation:gs,getCache:dr,_removeLinkedListItem:Fa,reverting:function(){return Ot},context:function(e){return e&&pt&&(pt.data.push(e),e._ctx=pt),pt},suppressOverwrites:function(e){return _u=e}}};Zt("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return _a[r]=_t[r]});on.add(Kt.updateRoot);qr=_a.to({},{duration:0});var hT=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},fT=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=hT(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},Fl=function(e,t){return{name:e,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(wt(s)&&(l={},Zt(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}fT(a,s)}}}},hn=_a.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Ot?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Fl("roundProps",bc),Fl("modifiers"),Fl("snap",im))||_a;_t.version=Kt.version=hn.version="3.11.4";Gp=1;Up()&&ms();Ge.Power0;Ge.Power1;Ge.Power2;Ge.Power3;Ge.Power4;Ge.Linear;Ge.Quad;Ge.Cubic;Ge.Quart;Ge.Quint;Ge.Strong;Ge.Elastic;Ge.Back;Ge.SteppedEase;Ge.Bounce;Ge.Sine;Ge.Expo;Ge.Circ;/*!
 * CSSPlugin 3.11.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Kf,Li,es,Lu,cr,$f,Ru,dT=function(){return typeof window<"u"},mi={},tr=180/Math.PI,ts=Math.PI/180,Vr=Math.atan2,Zf=1e8,Pu=/([A-Z])/g,pT=/(left|right|width|margin|padding|x)/i,mT=/[\s,\(]\S/,ci={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},wc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},gT=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},_T=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},xT=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Mm=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Sm=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},vT=function(e,t,n){return e.style[t]=n},yT=function(e,t,n){return e.style.setProperty(t,n)},bT=function(e,t,n){return e._gsap[t]=n},MT=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},ST=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},wT=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},ot="transform",On=ot+"Origin",TT=function(e,t){var n=this,i=this.target,s=i.style;if(e in mi){if(this.tfm=this.tfm||{},e!=="transform"&&(e=ci[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=si(i,o)}):this.tfm[e]=i._gsap.x?i._gsap[e]:si(i,e)),this.props.indexOf(ot)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(On,t,"")),e=ot}(s||t)&&this.props.push(e,t,s[e])},wm=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},ET=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].replace(Pu,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Ru(),s&&!s.isStart&&!n[ot]&&(wm(n),i.uncache=1)}},Tm=function(e,t){var n={target:e,props:[],revert:ET,save:TT};return t&&t.split(",").forEach(function(i){return n.save(i)}),n},Em,Tc=function(e,t){var n=Li.createElementNS?Li.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Li.createElement(e);return n.style?n:Li.createElement(e)},jn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Pu,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,xs(t)||t,1)||""},Jf="O,Moz,ms,Ms,Webkit".split(","),xs=function(e,t,n){var i=t||cr,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Jf[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Jf[o]:"")+e},Ec=function(){dT()&&window.document&&(Kf=window,Li=Kf.document,es=Li.documentElement,cr=Tc("div")||{style:{}},Tc("div"),ot=xs(ot),On=ot+"Origin",cr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Em=!!xs("perspective"),Ru=hn.core.reverting,Lu=1)},Ul=function r(e){var t=Tc("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,o;if(es.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),es.removeChild(t),this.style.cssText=s,o},Qf=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Am=function(e){var t;try{t=e.getBBox()}catch{t=Ul.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Ul||(t=Ul.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Qf(e,["x","cx","x1"])||0,y:+Qf(e,["y","cy","y1"])||0,width:0,height:0}:t},Cm=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Am(e))},po=function(e,t){if(t){var n=e.style;t in mi&&t!==On&&(t=ot),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(Pu,"-$1").toLowerCase())):n.removeAttribute(t)}},Ri=function(e,t,n,i,s,o){var a=new Jt(e._pt,t,n,0,1,o?Sm:Mm);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},ed={deg:1,rad:1,turn:1},AT={grid:1,flex:1},ki=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=cr.style,l=pT.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",p=i==="%",g,d,m,_;return i===o||!s||ed[i]||ed[o]?s:(o!=="px"&&!f&&(s=r(e,t,n,"px")),_=e.getCTM&&Cm(e),(p||o==="%")&&(mi[t]||~t.indexOf("adius"))?(g=_?e.getBBox()[l?"width":"height"]:e[u],ut(p?s/g*h:s/100*g)):(a[l?"width":"height"]=h+(f?o:i),d=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,_&&(d=(e.ownerSVGElement||{}).parentNode),(!d||d===Li||!d.appendChild)&&(d=Li.body),m=d._gsap,m&&p&&m.width&&l&&m.time===on.time&&!m.uncache?ut(s/m.width*h):((p||o==="%")&&!AT[jn(d,"display")]&&(a.position=jn(e,"position")),d===e&&(a.position="static"),d.appendChild(cr),g=cr[u],d.removeChild(cr),a.position="absolute",l&&p&&(m=dr(d),m.time=on.time,m.width=d[u]),ut(f?g*s/h:g&&s?h/g*s:0))))},si=function(e,t,n,i){var s;return Lu||Ec(),t in ci&&t!=="transform"&&(t=ci[t],~t.indexOf(",")&&(t=t.split(",")[0])),mi[t]&&t!=="transform"?(s=go(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:va(jn(e,On))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=xa[t]&&xa[t](e,t,n)||jn(e,t)||jp(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?ki(e,t,s,n)+n:s},CT=function(e,t,n,i){if(!n||n==="none"){var s=xs(t,e,1),o=s&&jn(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=jn(e,"borderTopColor"))}var a=new Jt(this._pt,e.style,t,0,1,vm),l=0,c=0,u,h,f,p,g,d,m,_,b,x,y,M;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=jn(e,t)||i,e.style[t]=n),u=[n,i],cm(u),n=u[0],i=u[1],f=n.match(jr)||[],M=i.match(jr)||[],M.length){for(;h=jr.exec(i);)m=h[0],b=i.substring(l,h.index),g?g=(g+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(g=1),m!==(d=f[c++]||"")&&(p=parseFloat(d)||0,y=d.substr((p+"").length),m.charAt(1)==="="&&(m=Qr(p,m)+y),_=parseFloat(m),x=m.substr((_+"").length),l=jr.lastIndex-x.length,x||(x=x||cn.units[t]||y,l===i.length&&(i+=x,a.e+=x)),y!==x&&(p=ki(e,t,d,x)||0),a._pt={_next:a._pt,p:b||c===1?b:",",s:p,c:_-p,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?Sm:Mm;return kp.test(i)&&(a.e=0),this._pt=a,a},td={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},LT=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=td[n]||n,t[1]=td[i]||i,t.join(" ")},RT=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],mi[a]&&(l=1,a=a==="transformOrigin"?On:ot),po(n,a);l&&(po(n,ot),o&&(o.svg&&n.removeAttribute("transform"),go(n,1),o.uncache=1,wm(i)))}},xa={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new Jt(e._pt,t,n,0,0,RT);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},mo=[1,0,0,1,0,0],Lm={},Rm=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},nd=function(e){var t=jn(e,ot);return Rm(t)?mo:t.substr(7).match(Bp).map(ut)},Du=function(e,t){var n=e._gsap||dr(e),i=e.style,s=nd(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?mo:s):(s===mo&&!e.offsetParent&&e!==es&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextElementSibling,es.appendChild(e)),s=nd(e),l?i.display=l:po(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):es.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Ac=function(e,t,n,i,s,o){var a=e._gsap,l=s||Du(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,p=l[0],g=l[1],d=l[2],m=l[3],_=l[4],b=l[5],x=t.split(" "),y=parseFloat(x[0])||0,M=parseFloat(x[1])||0,A,R,v,w;n?l!==mo&&(R=p*m-g*d)&&(v=y*(m/R)+M*(-d/R)+(d*b-m*_)/R,w=y*(-g/R)+M*(p/R)-(p*b-g*_)/R,y=v,M=w):(A=Am(e),y=A.x+(~x[0].indexOf("%")?y/100*A.width:y),M=A.y+(~(x[1]||x[0]).indexOf("%")?M/100*A.height:M)),i||i!==!1&&a.smooth?(_=y-c,b=M-u,a.xOffset=h+(_*p+b*d)-_,a.yOffset=f+(_*g+b*m)-b):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=M,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[On]="0px 0px",o&&(Ri(o,a,"xOrigin",c,y),Ri(o,a,"yOrigin",u,M),Ri(o,a,"xOffset",h,a.xOffset),Ri(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+M)},go=function(e,t){var n=e._gsap||new dm(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=jn(e,On)||"0",u,h,f,p,g,d,m,_,b,x,y,M,A,R,v,w,D,W,q,N,I,H,Y,K,V,oe,se,be,B,le,de,k;return u=h=f=d=m=_=b=x=y=0,p=g=1,n.svg=!!(e.getCTM&&Cm(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[ot]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ot]!=="none"?l[ot]:"")),i.scale=i.rotate=i.translate="none"),R=Du(e,n.svg),n.svg&&(n.uncache?(V=e.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",K=""):K=!t&&e.getAttribute("data-svg-origin"),Ac(e,K||c,!!K||n.originIsAbsolute,n.smooth!==!1,R)),M=n.xOrigin||0,A=n.yOrigin||0,R!==mo&&(W=R[0],q=R[1],N=R[2],I=R[3],u=H=R[4],h=Y=R[5],R.length===6?(p=Math.sqrt(W*W+q*q),g=Math.sqrt(I*I+N*N),d=W||q?Vr(q,W)*tr:0,b=N||I?Vr(N,I)*tr+d:0,b&&(g*=Math.abs(Math.cos(b*ts))),n.svg&&(u-=M-(M*W+A*N),h-=A-(M*q+A*I))):(k=R[6],le=R[7],se=R[8],be=R[9],B=R[10],de=R[11],u=R[12],h=R[13],f=R[14],v=Vr(k,B),m=v*tr,v&&(w=Math.cos(-v),D=Math.sin(-v),K=H*w+se*D,V=Y*w+be*D,oe=k*w+B*D,se=H*-D+se*w,be=Y*-D+be*w,B=k*-D+B*w,de=le*-D+de*w,H=K,Y=V,k=oe),v=Vr(-N,B),_=v*tr,v&&(w=Math.cos(-v),D=Math.sin(-v),K=W*w-se*D,V=q*w-be*D,oe=N*w-B*D,de=I*D+de*w,W=K,q=V,N=oe),v=Vr(q,W),d=v*tr,v&&(w=Math.cos(v),D=Math.sin(v),K=W*w+q*D,V=H*w+Y*D,q=q*w-W*D,Y=Y*w-H*D,W=K,H=V),m&&Math.abs(m)+Math.abs(d)>359.9&&(m=d=0,_=180-_),p=ut(Math.sqrt(W*W+q*q+N*N)),g=ut(Math.sqrt(Y*Y+k*k)),v=Vr(H,Y),b=Math.abs(v)>2e-4?v*tr:0,y=de?1/(de<0?-de:de):0),n.svg&&(K=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Rm(jn(e,ot)),K&&e.setAttribute("transform",K))),Math.abs(b)>90&&Math.abs(b)<270&&(s?(p*=-1,b+=d<=0?180:-180,d+=d<=0?180:-180):(g*=-1,b+=b<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=ut(p),n.scaleY=ut(g),n.rotation=ut(d)+a,n.rotationX=ut(m)+a,n.rotationY=ut(_)+a,n.skewX=b+a,n.skewY=x+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[On]=va(c)),n.xOffset=n.yOffset=0,n.force3D=cn.force3D,n.renderTransform=n.svg?DT:Em?Pm:PT,n.uncache=0,n},va=function(e){return(e=e.split(" "))[0]+" "+e[1]},zl=function(e,t,n){var i=Dt(t);return ut(parseFloat(t)+parseFloat(ki(e,"x",n+"px",i)))+i},PT=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Pm(e,t)},$i="0deg",Us="0px",Zi=") ",Pm=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,p=n.skewY,g=n.scaleX,d=n.scaleY,m=n.transformPerspective,_=n.force3D,b=n.target,x=n.zOrigin,y="",M=_==="auto"&&e&&e!==1||_===!0;if(x&&(h!==$i||u!==$i)){var A=parseFloat(u)*ts,R=Math.sin(A),v=Math.cos(A),w;A=parseFloat(h)*ts,w=Math.cos(A),o=zl(b,o,R*w*-x),a=zl(b,a,-Math.sin(A)*-x),l=zl(b,l,v*w*-x+x)}m!==Us&&(y+="perspective("+m+Zi),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(M||o!==Us||a!==Us||l!==Us)&&(y+=l!==Us||M?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Zi),c!==$i&&(y+="rotate("+c+Zi),u!==$i&&(y+="rotateY("+u+Zi),h!==$i&&(y+="rotateX("+h+Zi),(f!==$i||p!==$i)&&(y+="skew("+f+", "+p+Zi),(g!==1||d!==1)&&(y+="scale("+g+", "+d+Zi),b.style[ot]=y||"translate(0, 0)"},DT=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,p=n.target,g=n.xOrigin,d=n.yOrigin,m=n.xOffset,_=n.yOffset,b=n.forceCSS,x=parseFloat(o),y=parseFloat(a),M,A,R,v,w;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=ts,c*=ts,M=Math.cos(l)*h,A=Math.sin(l)*h,R=Math.sin(l-c)*-f,v=Math.cos(l-c)*f,c&&(u*=ts,w=Math.tan(c-u),w=Math.sqrt(1+w*w),R*=w,v*=w,u&&(w=Math.tan(u),w=Math.sqrt(1+w*w),M*=w,A*=w)),M=ut(M),A=ut(A),R=ut(R),v=ut(v)):(M=h,v=f,A=R=0),(x&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(x=ki(p,"x",o,"px"),y=ki(p,"y",a,"px")),(g||d||m||_)&&(x=ut(x+g-(g*M+d*R)+m),y=ut(y+d-(g*A+d*v)+_)),(i||s)&&(w=p.getBBox(),x=ut(x+i/100*w.width),y=ut(y+s/100*w.height)),w="matrix("+M+","+A+","+R+","+v+","+x+","+y+")",p.setAttribute("transform",w),b&&(p.style[ot]=w)},IT=function(e,t,n,i,s){var o=360,a=wt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?tr:1),c=l-i,u=i+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*Zf)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*Zf)%o-~~(c/o)*o)),e._pt=f=new Jt(e._pt,t,n,i,c,gT),f.e=u,f.u="deg",e._props.push(n),f},id=function(e,t){for(var n in t)e[n]=t[n];return e},OT=function(e,t,n){var i=id({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,p,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[ot]=t,a=go(n,1),po(n,ot),n.setAttribute("transform",c)):(c=getComputedStyle(n)[ot],o[ot]=t,a=go(n,1),o[ot]=c);for(l in mi)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(p=Dt(c),g=Dt(u),h=p!==g?ki(n,l,c,g):parseFloat(c),f=parseFloat(u),e._pt=new Jt(e._pt,a,l,h,f-h,wc),e._pt.u=g||0,e._props.push(l));id(a,i)};Zt("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});xa[e>1?"border"+r:r]=function(a,l,c,u,h){var f,p;if(arguments.length<4)return f=o.map(function(g){return si(a,g,c)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(u+"").split(" "),p={},o.forEach(function(g,d){return p[g]=f[d]=f[d]||f[(d-1)/2|0]}),a.init(l,p,h)}});var Dm={name:"css",register:Ec,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,f,p,g,d,m,_,b,x,y,M,A,R,v;Lu||Ec(),this.styles=this.styles||Tm(e),v=this.styles.props,this.tween=n;for(d in t)if(d!=="autoRound"&&(u=t[d],!(sn[d]&&pm(d,t,n,i,e,s)))){if(p=typeof u,g=xa[d],p==="function"&&(u=u.call(n,i,e,s),p=typeof u),p==="string"&&~u.indexOf("random(")&&(u=ho(u)),g)g(this,e,d,u,n)&&(R=1);else if(d.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(d)+"").trim(),u+="",Fi.lastIndex=0,Fi.test(c)||(m=Dt(c),_=Dt(u)),_?m!==_&&(c=ki(e,d,c,_)+_):m&&(u+=m),this.add(a,"setProperty",c,u,i,s,0,0,d),o.push(d),v.push(d,0,a[d]);else if(p!=="undefined"){if(l&&d in l?(c=typeof l[d]=="function"?l[d].call(n,i,e,s):l[d],wt(c)&&~c.indexOf("random(")&&(c=ho(c)),Dt(c+"")||(c+=cn.units[d]||Dt(si(e,d))||""),(c+"").charAt(1)==="="&&(c=si(e,d))):c=si(e,d),f=parseFloat(c),b=p==="string"&&u.charAt(1)==="="&&u.substr(0,2),b&&(u=u.substr(2)),h=parseFloat(u),d in ci&&(d==="autoAlpha"&&(f===1&&si(e,"visibility")==="hidden"&&h&&(f=0),v.push("visibility",0,a.visibility),Ri(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),d!=="scale"&&d!=="transform"&&(d=ci[d],~d.indexOf(",")&&(d=d.split(",")[0]))),x=d in mi,x){if(this.styles.save(d),y||(M=e._gsap,M.renderTransform&&!t.parseTransform||go(e,t.parseTransform),A=t.smoothOrigin!==!1&&M.smooth,y=this._pt=new Jt(this._pt,a,ot,0,1,M.renderTransform,M,0,-1),y.dep=1),d==="scale")this._pt=new Jt(this._pt,M,"scaleY",M.scaleY,(b?Qr(M.scaleY,b+h):h)-M.scaleY||0,wc),this._pt.u=0,o.push("scaleY",d),d+="X";else if(d==="transformOrigin"){v.push(On,0,a[On]),u=LT(u),M.svg?Ac(e,u,0,A,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==M.zOrigin&&Ri(this,M,"zOrigin",M.zOrigin,_),Ri(this,a,d,va(c),va(u)));continue}else if(d==="svgOrigin"){Ac(e,u,1,A,0,this);continue}else if(d in Lm){IT(this,M,d,f,b?Qr(f,b+u):u);continue}else if(d==="smoothOrigin"){Ri(this,M,"smooth",M.smooth,u);continue}else if(d==="force3D"){M[d]=u;continue}else if(d==="transform"){OT(this,u,e);continue}}else d in a||(d=xs(d)||d);if(x||(h||h===0)&&(f||f===0)&&!mT.test(u)&&d in a)m=(c+"").substr((f+"").length),h||(h=0),_=Dt(u)||(d in cn.units?cn.units[d]:m),m!==_&&(f=ki(e,d,c,_)),this._pt=new Jt(this._pt,x?M:a,d,f,(b?Qr(f,b+h):h)-f,!x&&(_==="px"||d==="zIndex")&&t.autoRound!==!1?xT:wc),this._pt.u=_||0,m!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=_T);else if(d in a)CT.call(this,e,d,c,b?b+u:u);else if(d in e)this.add(e,d,c||e[d],b?b+u:u,i,s);else if(d!=="parseTransform"){yu(d,u);continue}x||(d in a?v.push(d,0,a[d]):v.push(d,1,c||e[d])),o.push(d)}}R&&ym(this)},render:function(e,t){if(t.tween._time||!Ru())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:si,aliases:ci,getSetter:function(e,t,n){var i=ci[t];return i&&i.indexOf(",")<0&&(t=i),t in mi&&t!==On&&(e._gsap.x||si(e,"x"))?n&&$f===n?t==="scale"?MT:bT:($f=n||{})&&(t==="scale"?ST:wT):e.style&&!xu(e.style[t])?vT:~t.indexOf("-")?yT:Au(e,t)},core:{_removeProperty:po,_getMatrix:Du}};hn.utils.checkPrefix=xs;hn.core.getStyleSaver=Tm;(function(r,e,t,n){var i=Zt(r+","+e+","+t,function(s){mi[s]=1});Zt(e,function(s){cn.units[s]="deg",Lm[s]=1}),ci[i[13]]=r+","+e,Zt(n,function(s){var o=s.split(":");ci[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Zt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){cn.units[r]="px"});hn.registerPlugin(Dm);var Cc=hn.registerPlugin(Dm)||hn;Cc.core.Tween;function rd(r,e){if(e===ux)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===oc||e===ap){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===oc)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class NT extends vo{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new kT(t)}),this.register(function(t){return new qT(t)}),this.register(function(t){return new YT(t)}),this.register(function(t){return new KT(t)}),this.register(function(t){return new GT(t)}),this.register(function(t){return new HT(t)}),this.register(function(t){return new WT(t)}),this.register(function(t){return new XT(t)}),this.register(function(t){return new BT(t)}),this.register(function(t){return new jT(t)}),this.register(function(t){return new VT(t)}),this.register(function(t){return new UT(t)}),this.register(function(t){return new $T(t)}),this.register(function(t){return new ZT(t)})}load(e,t,n,i){const s=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=fc.extractUrlBase(e),this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Ip(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Im){try{o[je.KHR_BINARY_GLTF]=new JT(e)}catch(h){i&&i(h);return}s=JSON.parse(o[je.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new h1(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(h){case je.KHR_MATERIALS_UNLIT:o[h]=new zT;break;case je.KHR_DRACO_MESH_COMPRESSION:o[h]=new QT(s,this.dracoLoader);break;case je.KHR_TEXTURE_TRANSFORM:o[h]=new e1;break;case je.KHR_MESH_QUANTIZATION:o[h]=new t1;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function FT(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class UT{constructor(e){this.parser=e,this.name=je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new Oe(16777215);l.color!==void 0&&u.fromArray(l.color);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new aw(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Op(u),c.distance=h;break;case"spot":c=new rw(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Ti(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class zT{constructor(){this.name=je.KHR_MATERIALS_UNLIT}getMaterialType(){return ar}extendParams(e,t,n){const i=[];e.color=new Oe(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.fromArray(o),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Ke))}return Promise.all(i)}}class BT{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class kT{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ie(a,a)}return Promise.all(s)}}class VT{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class GT{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Oe(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];return o.sheenColorFactor!==void 0&&t.sheenColor.fromArray(o.sheenColorFactor),o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ke)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class HT{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class WT{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Oe(a[0],a[1],a[2]),Promise.all(s)}}class XT{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wr}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class jT{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Oe(a[0],a[1],a[2]),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Ke)),Promise.all(s)}}class qT{constructor(e){this.parser=e,this.name=je.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class YT{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class KT{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class $T{constructor(e){this.name=je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(p),u,h,f,i.mode,i.filter),p})})}else return null}}class ZT{constructor(e){this.name=je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==xn.TRIANGLES&&c.mode!==xn.TRIANGLE_STRIP&&c.mode!==xn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,p=[];for(const g of h){const d=new ke,m=new F,_=new qn,b=new F(1,1,1),x=new VS(g.geometry,g.material,f);for(let y=0;y<f;y++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&_.fromBufferAttribute(l.ROTATION,y),l.SCALE&&b.fromBufferAttribute(l.SCALE,y),x.setMatrixAt(y,d.compose(m,_,b));for(const y in l)y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,l[y]);at.prototype.copy.call(x,g),x.frustumCulled=!1,this.parser.assignFinalMaterial(x),p.push(x)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const Im="glTF",zs=12,sd={JSON:1313821514,BIN:5130562};class JT{constructor(e){this.name=je.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,zs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Im)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-zs,s=new DataView(e,zs);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===sd.JSON){const c=new Uint8Array(e,zs+o,a);this.content=n.decode(c)}else if(l===sd.BIN){const c=zs+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class QT{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=Lc[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=Lc[u]||u.toLowerCase();if(o[u]!==void 0){const f=n.accessors[e.attributes[u]],p=ns[f.componentType];c[h]=p.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h){i.decodeDracoFile(u,function(f){for(const p in f.attributes){const g=f.attributes[p],d=l[p];d!==void 0&&(g.normalized=d)}h(f)},a,c)})})}}class e1{constructor(){this.name=je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class t1{constructor(){this.name=je.KHR_MESH_QUANTIZATION}}class Om extends xo{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,f=h*h,p=f*h,g=e*c,d=g-c,m=-2*p+3*f,_=p-f,b=1-m,x=_-f+h;for(let y=0;y!==a;y++){const M=o[d+y+a],A=o[d+y+l]*u,R=o[g+y+a],v=o[g+y]*u;s[y]=b*M+x*A+m*R+_*v}return s}}const n1=new qn;class i1 extends Om{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return n1.fromArray(s).normalize().toArray(s),s}}const xn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ns={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},od={9728:St,9729:Yt,9984:sc,9985:sp,9986:na,9987:gr},ad={33071:vn,33648:ha,10497:as},Bl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Lc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Si={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},r1={CUBICSPLINE:void 0,LINEAR:cs,STEP:ro},kl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function s1(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Oa({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:di})),r.DefaultMaterial}function Bs(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ti(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function o1(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):r.attributes.position;o.push(f)}if(i){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):r.attributes.normal;a.push(f)}if(s){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):r.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=f),r.morphTargetsRelative=!0,r})}function a1(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function l1(r){const e=r.extensions&&r.extensions[je.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+ld(e.attributes):t=r.indices+":"+ld(r.attributes)+":"+r.mode,t}function ld(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Rc(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function c1(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const u1=new ke;class h1{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new FT,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new nw(this.options.manager):this.textureLoader=new cw(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ip(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};Bs(s,a,i),Ti(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[je.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(fc.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Bl[i.type],a=ns[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new jt(c,o,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=Bl[i.type],c=ns[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let d,m;if(p&&p!==h){const _=Math.floor(f/p),b="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+_+":"+i.count;let x=t.cache.get(b);x||(d=new c(a,_*p,i.count*p/u),x=new NS(d,p/u),t.cache.add(b,x)),m=new cu(x,l,f%p/u,g)}else a===null?d=new c(i.count*l):d=new c(a,f,i.count*l),m=new jt(d,l,g);if(i.sparse!==void 0){const _=Bl.SCALAR,b=ns[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,M=new b(o[1],x,i.sparse.count*_),A=new c(o[2],y,i.sparse.count*l);a!==null&&(m=new jt(m.array.slice(),m.itemSize,m.normalized));for(let R=0,v=M.length;R<v;R++){const w=M[R];if(m.setX(w,A[R*l]),l>=2&&m.setY(w,A[R*l+1]),l>=3&&m.setZ(w,A[R*l+2]),l>=4&&m.setW(w,A[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"";const f=(s.samplers||{})[o.sampler]||{};return u.magFilter=od[f.magFilter]||Yt,u.minFilter=od[f.minFilter]||gr,u.wrapS=ad[f.wrapS]||as,u.wrapT=ad[f.wrapT]||as,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,p){let g=f;t.isImageBitmapLoader===!0&&(g=function(d){const m=new Et(d);m.needsUpdate=!0,f(m)}),t.load(fc.resolveURL(h,s.path),g,void 0,p)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),h.userData.mimeType=o.mimeType||c1(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),s.extensions[je.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[je.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[je.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(o.encoding=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Lp,Xn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Ia,Xn.prototype.copy.call(l,n),l.color.copy(n.color),this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return Oa}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[je.KHR_MATERIALS_UNLIT]){const h=i[je.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,s,t))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new Oe(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.fromArray(f),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Ke)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=ai);const u=s.alphaMode||kl.OPAQUE;if(u===kl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===kl.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==ar&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Ie(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}return s.occlusionTexture!==void 0&&o!==ar&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==ar&&(a.emissive=new Oe().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&o!==ar&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Ke)),Promise.all(c).then(function(){const h=new o(a);return s.name&&(h.name=s.name),Ti(h,s),t.associations.set(h,{materials:e}),s.extensions&&Bs(i,h,s),h})}createUniqueName(e){const t=Ze.sanitizeNodeName(e||"");let n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return cd(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=l1(c),h=i[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[je.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=cd(new fn,c,t),i[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?s1(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let p=0,g=u.length;p<g;p++){const d=u[p],m=o[p];let _;const b=c[p];if(m.mode===xn.TRIANGLES||m.mode===xn.TRIANGLE_STRIP||m.mode===xn.TRIANGLE_FAN||m.mode===void 0)_=s.isSkinnedMesh===!0?new US(d,b):new an(d,b),_.isSkinnedMesh===!0&&_.normalizeSkinWeights(),m.mode===xn.TRIANGLE_STRIP?_.geometry=rd(_.geometry,ap):m.mode===xn.TRIANGLE_FAN&&(_.geometry=rd(_.geometry,oc));else if(m.mode===xn.LINES)_=new fu(d,b);else if(m.mode===xn.LINE_STRIP)_=new hu(d,b);else if(m.mode===xn.LINE_LOOP)_=new GS(d,b);else if(m.mode===xn.POINTS)_=new HS(d,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(_.geometry.morphAttributes).length>0&&a1(_,s),_.name=t.createUniqueName(s.name||"mesh_"+e),Ti(_,s),m.extensions&&Bs(i,_,m),t.assignFinalMaterial(_),h.push(_)}for(let p=0,g=h.length;p<g;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return h[0];const f=new lr;t.associations.set(f,{meshes:e});for(let p=0,g=h.length;p<g;p++)f.add(h[p]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ht(Cx.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new ou(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ti(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const f=new ke;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new uu(a,l)})}loadAnimation(e){const n=this.json.animations[e],i=[],s=[],o=[],a=[],l=[];for(let c=0,u=n.channels.length;c<u;c++){const h=n.channels[c],f=n.samplers[h.sampler],p=h.target,g=p.node,d=n.parameters!==void 0?n.parameters[f.input]:f.input,m=n.parameters!==void 0?n.parameters[f.output]:f.output;i.push(this.getDependency("node",g)),s.push(this.getDependency("accessor",d)),o.push(this.getDependency("accessor",m)),a.push(f),l.push(p)}return Promise.all([Promise.all(i),Promise.all(s),Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2],p=c[3],g=c[4],d=[];for(let _=0,b=u.length;_<b;_++){const x=u[_],y=h[_],M=f[_],A=p[_],R=g[_];if(x===void 0)continue;x.updateMatrix();let v;switch(Si[R.path]){case Si.weights:v=lo;break;case Si.rotation:v=br;break;case Si.position:case Si.scale:default:v=co;break}const w=x.name?x.name:x.uuid,D=A.interpolation!==void 0?r1[A.interpolation]:cs,W=[];Si[R.path]===Si.weights?x.traverse(function(N){N.morphTargetInfluences&&W.push(N.name?N.name:N.uuid)}):W.push(w);let q=M.array;if(M.normalized){const N=Rc(q.constructor),I=new Float32Array(q.length);for(let H=0,Y=q.length;H<Y;H++)I[H]=q[H]*N;q=I}for(let N=0,I=W.length;N<I;N++){const H=new v(W[N]+"."+Si[R.path],y.array,q,D);A.interpolation==="CUBICSPLINE"&&(H.createInterpolant=function(K){const V=this instanceof br?i1:Om;return new V(this.times,this.values,this.getValueSize()/3,K)},H.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),d.push(H)}}const m=n.name?n.name:"animation_"+e;return new KS(m,void 0,d)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(f,u1)});for(let p=0,g=h.length;p<g;p++)u.add(h[p]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new Cp:c.length>1?u=new lr:c.length===1?u=c[0]:u=new at,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=o),Ti(u,s),s.extensions&&Bs(n,u,s),s.matrix!==void 0){const h=new ke;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new lr;n.name&&(s.name=i.createUniqueName(n.name)),Ti(s,n),n.extensions&&Bs(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)s.add(l[u]);const c=u=>{const h=new Map;for(const[f,p]of i.associations)(f instanceof Xn||f instanceof Et)&&h.set(f,p);return u.traverse(f=>{const p=i.associations.get(f);p!=null&&h.set(f,p)}),h};return i.associations=c(s),s})}}function f1(r,e,t){const n=e.attributes,i=new Ms;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new F(l[0],l[1],l[2]),new F(c[0],c[1],c[2])),a.normalized){const u=Rc(ns[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new F,l=new F;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],p=f.min,g=f.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),f.normalized){const d=Rc(ns[f.componentType]);l.multiplyScalar(d)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new Ss;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function cd(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(const o in n){const a=Lc[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return Ti(r,e),f1(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?o1(r,e.targets,t):r})}const ud={type:"change"},Vl={type:"start"},hd={type:"end"};class d1 extends Sr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Er.ROTATE,MIDDLE:Er.DOLLY,RIGHT:Er.PAN},this.touches={ONE:Ar.ROTATE,TWO:Ar.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",re),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",re),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(ud),n.update(),s=i.NONE},this.update=function(){const L=new F,z=new qn().setFromUnitVectors(e.up,new F(0,1,0)),_e=z.clone().invert(),me=new F,we=new qn,Ae=2*Math.PI;return function(){const Re=n.object.position;L.copy(Re).sub(n.target),L.applyQuaternion(z),a.setFromVector3(L),n.autoRotate&&s===i.NONE&&w(R()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Ve=n.minAzimuthAngle,Je=n.maxAzimuthAngle;return isFinite(Ve)&&isFinite(Je)&&(Ve<-Math.PI?Ve+=Ae:Ve>Math.PI&&(Ve-=Ae),Je<-Math.PI?Je+=Ae:Je>Math.PI&&(Je-=Ae),Ve<=Je?a.theta=Math.max(Ve,Math.min(Je,a.theta)):a.theta=a.theta>(Ve+Je)/2?Math.max(Ve,a.theta):Math.min(Je,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),L.setFromSpherical(a),L.applyQuaternion(_e),Re.copy(n.target).add(L),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||me.distanceToSquared(n.object.position)>o||8*(1-we.dot(n.object.quaternion))>o?(n.dispatchEvent(ud),me.copy(n.object.position),we.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",U),n.domElement.removeEventListener("pointerdown",j),n.domElement.removeEventListener("pointercancel",ae),n.domElement.removeEventListener("wheel",he),n.domElement.removeEventListener("pointermove",te),n.domElement.removeEventListener("pointerup",J),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",re),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new Vf,l=new Vf;let c=1;const u=new F;let h=!1;const f=new Ie,p=new Ie,g=new Ie,d=new Ie,m=new Ie,_=new Ie,b=new Ie,x=new Ie,y=new Ie,M=[],A={};function R(){return 2*Math.PI/60/60*n.autoRotateSpeed}function v(){return Math.pow(.95,n.zoomSpeed)}function w(L){l.theta-=L}function D(L){l.phi-=L}const W=function(){const L=new F;return function(_e,me){L.setFromMatrixColumn(me,0),L.multiplyScalar(-_e),u.add(L)}}(),q=function(){const L=new F;return function(_e,me){n.screenSpacePanning===!0?L.setFromMatrixColumn(me,1):(L.setFromMatrixColumn(me,0),L.crossVectors(n.object.up,L)),L.multiplyScalar(_e),u.add(L)}}(),N=function(){const L=new F;return function(_e,me){const we=n.domElement;if(n.object.isPerspectiveCamera){const Ae=n.object.position;L.copy(Ae).sub(n.target);let ve=L.length();ve*=Math.tan(n.object.fov/2*Math.PI/180),W(2*_e*ve/we.clientHeight,n.object.matrix),q(2*me*ve/we.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(W(_e*(n.object.right-n.object.left)/n.object.zoom/we.clientWidth,n.object.matrix),q(me*(n.object.top-n.object.bottom)/n.object.zoom/we.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function I(L){n.object.isPerspectiveCamera?c/=L:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*L)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function H(L){n.object.isPerspectiveCamera?c*=L:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/L)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(L){f.set(L.clientX,L.clientY)}function K(L){b.set(L.clientX,L.clientY)}function V(L){d.set(L.clientX,L.clientY)}function oe(L){p.set(L.clientX,L.clientY),g.subVectors(p,f).multiplyScalar(n.rotateSpeed);const z=n.domElement;w(2*Math.PI*g.x/z.clientHeight),D(2*Math.PI*g.y/z.clientHeight),f.copy(p),n.update()}function se(L){x.set(L.clientX,L.clientY),y.subVectors(x,b),y.y>0?I(v()):y.y<0&&H(v()),b.copy(x),n.update()}function be(L){m.set(L.clientX,L.clientY),_.subVectors(m,d).multiplyScalar(n.panSpeed),N(_.x,_.y),d.copy(m),n.update()}function B(L){L.deltaY<0?H(v()):L.deltaY>0&&I(v()),n.update()}function le(L){let z=!1;switch(L.code){case n.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?D(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(0,n.keyPanSpeed),z=!0;break;case n.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?D(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(0,-n.keyPanSpeed),z=!0;break;case n.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?w(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(n.keyPanSpeed,0),z=!0;break;case n.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?w(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(-n.keyPanSpeed,0),z=!0;break}z&&(L.preventDefault(),n.update())}function de(){if(M.length===1)f.set(M[0].pageX,M[0].pageY);else{const L=.5*(M[0].pageX+M[1].pageX),z=.5*(M[0].pageY+M[1].pageY);f.set(L,z)}}function k(){if(M.length===1)d.set(M[0].pageX,M[0].pageY);else{const L=.5*(M[0].pageX+M[1].pageX),z=.5*(M[0].pageY+M[1].pageY);d.set(L,z)}}function xe(){const L=M[0].pageX-M[1].pageX,z=M[0].pageY-M[1].pageY,_e=Math.sqrt(L*L+z*z);b.set(0,_e)}function Me(){n.enableZoom&&xe(),n.enablePan&&k()}function Te(){n.enableZoom&&xe(),n.enableRotate&&de()}function ye(L){if(M.length==1)p.set(L.pageX,L.pageY);else{const _e=pe(L),me=.5*(L.pageX+_e.x),we=.5*(L.pageY+_e.y);p.set(me,we)}g.subVectors(p,f).multiplyScalar(n.rotateSpeed);const z=n.domElement;w(2*Math.PI*g.x/z.clientHeight),D(2*Math.PI*g.y/z.clientHeight),f.copy(p)}function Ce(L){if(M.length===1)m.set(L.pageX,L.pageY);else{const z=pe(L),_e=.5*(L.pageX+z.x),me=.5*(L.pageY+z.y);m.set(_e,me)}_.subVectors(m,d).multiplyScalar(n.panSpeed),N(_.x,_.y),d.copy(m)}function Pe(L){const z=pe(L),_e=L.pageX-z.x,me=L.pageY-z.y,we=Math.sqrt(_e*_e+me*me);x.set(0,we),y.set(0,Math.pow(x.y/b.y,n.zoomSpeed)),I(y.y),b.copy(x)}function C(L){n.enableZoom&&Pe(L),n.enablePan&&Ce(L)}function P(L){n.enableZoom&&Pe(L),n.enableRotate&&ye(L)}function j(L){n.enabled!==!1&&(M.length===0&&(n.domElement.setPointerCapture(L.pointerId),n.domElement.addEventListener("pointermove",te),n.domElement.addEventListener("pointerup",J)),$(L),L.pointerType==="touch"?T(L):ue(L))}function te(L){n.enabled!==!1&&(L.pointerType==="touch"?S(L):ie(L))}function J(L){Q(L),M.length===0&&(n.domElement.releasePointerCapture(L.pointerId),n.domElement.removeEventListener("pointermove",te),n.domElement.removeEventListener("pointerup",J)),n.dispatchEvent(hd),s=i.NONE}function ae(L){Q(L)}function ue(L){let z;switch(L.button){case 0:z=n.mouseButtons.LEFT;break;case 1:z=n.mouseButtons.MIDDLE;break;case 2:z=n.mouseButtons.RIGHT;break;default:z=-1}switch(z){case Er.DOLLY:if(n.enableZoom===!1)return;K(L),s=i.DOLLY;break;case Er.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enablePan===!1)return;V(L),s=i.PAN}else{if(n.enableRotate===!1)return;Y(L),s=i.ROTATE}break;case Er.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enableRotate===!1)return;Y(L),s=i.ROTATE}else{if(n.enablePan===!1)return;V(L),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Vl)}function ie(L){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;oe(L);break;case i.DOLLY:if(n.enableZoom===!1)return;se(L);break;case i.PAN:if(n.enablePan===!1)return;be(L);break}}function he(L){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(L.preventDefault(),n.dispatchEvent(Vl),B(L),n.dispatchEvent(hd))}function re(L){n.enabled===!1||n.enablePan===!1||le(L)}function T(L){switch(ce(L),M.length){case 1:switch(n.touches.ONE){case Ar.ROTATE:if(n.enableRotate===!1)return;de(),s=i.TOUCH_ROTATE;break;case Ar.PAN:if(n.enablePan===!1)return;k(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Ar.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Me(),s=i.TOUCH_DOLLY_PAN;break;case Ar.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Te(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Vl)}function S(L){switch(ce(L),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;ye(L),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;Ce(L),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;C(L),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;P(L),n.update();break;default:s=i.NONE}}function U(L){n.enabled!==!1&&L.preventDefault()}function $(L){M.push(L)}function Q(L){delete A[L.pointerId];for(let z=0;z<M.length;z++)if(M[z].pointerId==L.pointerId){M.splice(z,1);return}}function ce(L){let z=A[L.pointerId];z===void 0&&(z=new Ie,A[L.pointerId]=z),z.set(L.pageX,L.pageY)}function pe(L){const z=L.pointerId===M[0].pointerId?M[1]:M[0];return A[z.pointerId]}n.domElement.addEventListener("contextmenu",U),n.domElement.addEventListener("pointerdown",j),n.domElement.addEventListener("pointercancel",ae),n.domElement.addEventListener("wheel",he,{passive:!1}),this.update()}}const p1=(r,e)=>{const t=r.__vccOpts||r;for(const[n,i]of e)t[n]=i;return t},m1=F_('<nav data-v-261d832d><a href="/MetaMeApp" data-v-261d832d> Sphere </a><ul data-v-261d832d><li data-v-261d832d>Games</li><li data-v-261d832d>About</li></ul></nav><div class="breeding-rhombus-spinner" id="loader" data-v-261d832d><div class="rhombus child-1" data-v-261d832d></div><div class="rhombus child-2" data-v-261d832d></div><div class="rhombus child-3" data-v-261d832d></div><div class="rhombus child-4" data-v-261d832d></div><div class="rhombus child-5" data-v-261d832d></div><div class="rhombus child-6" data-v-261d832d></div><div class="rhombus child-7" data-v-261d832d></div><div class="rhombus child-8" data-v-261d832d></div><div class="rhombus big" data-v-261d832d></div></div><h1 class="title" data-v-261d832d> Spin that shit </h1>',3),g1={__name:"App",setup(r){const e=new OS,t=new du(2,10,10),n=new Oa({color:65411});new an(t,n),new NT().load("/hypercasual/scene.gltf",function(b){var x=document.getElementById("loader");x.style.display==="none"?x.style.display="block":x.style.display="none";const y=b.scene;console.log(y),b.scene.scale.set(.01,.01,.01),e.add(y),Cc.timeline({defaults:{duration:1}}).fromTo(y.scale,{z:0,x:0,y:0},{z:.01,x:.01,y:.01}),b.animations,b.scene,b.scenes,b.cameras,b.asset},function(b){console.log(b.loaded/b.total*100+"% loaded")},function(b){console.log("An error happened")});const s={width:window.innerWidth,height:window.innerHeight},o=new yw(5);e.add(o);const a=10,l=10,c=new vw(a,l);e.add(c);const u=new Op(16777215,1,100);u.position.set(5,10,10),e.add(u);const h=new lw(4210752);e.add(h);const f=new Ht(45,s.width/s.height,.1,100);f.position.z=10,f.position.y=5,f.position.x=-2,e.add(f);const p=document.querySelector(".webgl"),g=new lu({canvas:p});g.setSize(s.width,s.height),g.setPixelRatio(2),g.render(e,f);const d=new d1(f,p);d.enableDamping=!0,d.enablePan=!1,d.enableZoom=!1,d.autoRotate=!0,d.autoRotateSpeed=1,window.addEventListener("resize",()=>{s.width=window.innerWidth,s.height=window.innerHeight,f.aspect=s.width/s.height,f.updateProjectionMatrix(),g.setSize(s.width,s.height)});const m=()=>{d.update(),g.render(e,f),window.requestAnimationFrame(m)};m();const _=Cc.timeline({defaults:{duration:1}});return Kc(()=>{_.fromTo("nav",{y:"-100%",opacity:"0"},{y:"0%",opacity:"1"}),_.fromTo(".title",{opacity:"0"},{opacity:"1"})}),(b,x)=>m1}},_1=p1(g1,[["__scopeId","data-v-261d832d"]]);_0(_1).mount("#app");
