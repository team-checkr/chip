function k(){}function x(t,n){for(const e in n)t[e]=n[e];return t}function w(t){return t()}function M(){return Object.create(null)}function j(t){t.forEach(w)}function A(t){return typeof t=="function"}function B(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function D(t){return Object.keys(t).length===0}function v(t,...n){if(t==null){for(const o of n)o(void 0);return k}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function F(t,n,e){t.$$.on_destroy.push(v(n,e))}function P(t,n,e,o){if(t){const r=y(t,n,e,o);return t[0](r)}}function y(t,n,e,o){return t[1]&&o?x(e.ctx.slice(),t[1](o(n))):e.ctx}function S(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const l=[],f=Math.max(n.dirty.length,r.length);for(let u=0;u<f;u+=1)l[u]=n.dirty[u]|r[u];return l}return n.dirty|r}return n.dirty}function U(t,n,e,o,r,l){if(r){const f=y(n,e,o,l);t.p(f,r)}}function C(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let o=0;o<e;o++)n[o]=-1;return n}return-1}function G(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function H(t,n,e){return t.set(e),n}let i;function _(t){i=t}function b(){if(!i)throw new Error("Function called outside component initialization");return i}function I(t){b().$$.on_mount.push(t)}function J(t){b().$$.after_update.push(t)}function K(t){b().$$.on_destroy.push(t)}const a=[],g=[];let s=[];const h=[],m=Promise.resolve();let p=!1;function E(){p||(p=!0,m.then(q))}function L(){return E(),m}function O(t){s.push(t)}function N(t){h.push(t)}const d=new Set;let c=0;function q(){if(c!==0)return;const t=i;do{try{for(;c<a.length;){const n=a[c];c++,_(n),z(n.$$)}}catch(n){throw a.length=0,c=0,n}for(_(null),a.length=0,c=0;g.length;)g.pop()();for(let n=0;n<s.length;n+=1){const e=s[n];d.has(e)||(d.add(e),e())}s.length=0}while(a.length);for(;h.length;)h.pop()();p=!1,d.clear(),_(t)}function z(t){if(t.fragment!==null){t.update(),j(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(O)}}function Q(t){const n=[],e=[];s.forEach(o=>t.indexOf(o)===-1?n.push(o):e.push(o)),e.forEach(o=>o()),s=n}export{G as A,H as B,N as a,g as b,F as c,J as d,P as e,S as f,C as g,M as h,q as i,A as j,D as k,O as l,Q as m,k as n,I as o,i as p,_ as q,j as r,B as s,L as t,U as u,w as v,a as w,E as x,K as y,x as z};
