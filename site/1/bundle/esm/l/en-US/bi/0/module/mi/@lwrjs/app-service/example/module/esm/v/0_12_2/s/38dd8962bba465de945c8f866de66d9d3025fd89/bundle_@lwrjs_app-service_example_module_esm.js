import{init as v,load as I}from"/1/bundle/esm/l/en-US/bi/0/module/mi/lwr%2FesmLoader%2Fv%2F0_12_2/s/c4127979a12658d94ecc484b9b53f2e616686de0/bundle_lwr_esmLoader.js";import"/1/bundle/esm/l/en-US/bi/0/module/mi/%40lwc%2Fsynthetic-shadow%2Fv%2F6_5_0/s/d59b36b50e64a2b97fc0e24c32e4acc02783a760/bundle_@lwc_synthetic-shadow.js";import{logOperationStart as s,logOperationEnd as p}from"/1/bundle/esm/l/en-US/bi/0/module/mi/lwr%2Fprofiler%2Fv%2F0_12_2/s/9e9007c2a6c84f8ab8b9e501f71ecdca59632952/bundle_lwr_profiler.js";import{hydrateComponent as E,createElement as x}from"/1/bundle/esm/l/en-US/bi/0/module/mi/lwc%2Fv%2F6_5_0/s/69029b0d57be26dc66576684350f0bf0b6d67c43/bundle_lwc.js";const l=globalThis.LWR;l.define||l.env?globalThis.LWR=Object.freeze({define:l.define,env:l.env}):delete globalThis.LWR;function S(){return l}const T="lwr.bootstrap.",w=`${T}end`,h="lwr.bootstrap.init",c="lwr.bootstrap.init.module";function A(e,n,o){E(e,n,o)}function C(e,n){return x(e,{is:n})}function g(e){return e.replace(/\/v\/[a-zA-Z0-9-_.]+$/,"").replace("/","-").replace(/([A-Z])/g,n=>`-${n.toLowerCase()}`)}const L=/-([a-z])/g;function O(e){return e.replace(L,n=>n[1].toUpperCase())}function N(e,n={}){if(typeof customElements=="undefined"||typeof document=="undefined"){s({id:w});return}s({id:h});let o=0;for(const[i,m]of e){const a=g(i);if(!document.body.querySelector(a)){s({id:c,specifier:i,specifierIndex:++o});const t=C(a,m),r=document.querySelector("[lwr-root]");r?r.appendChild(t):document.body.appendChild(t),p({id:c,specifier:i,specifierIndex:o,metadata:{renderMode:"spa"}});continue}const F=document.querySelectorAll(a);for(const t of F){s({id:c,specifier:i,specifierIndex:++o});const r=t.dataset.lwrPropsId;if(r){A(t,m,n[r]||{}),p({id:c,specifier:i,specifierIndex:o,metadata:{renderMode:"ssr"}});continue}const d=C(a,m);for(const{name:u,value:b}of t.attributes){d.setAttribute(u,b);const _=O(u);_ in d&&(d[_]=b)}for(;t.childNodes.length>0;)d.appendChild(t.childNodes[0]);const f=t.parentElement;f&&f.replaceChild(d,t),p({id:c,specifier:i,specifierIndex:o,metadata:{renderMode:"csr"}})}}p({id:h}),s({id:w})}const y=S(),{imports:P,index:R,importMappings:j,endpoints:M}=y;v({imports:P,index:R,importMappings:j,endpoints:M});const{rootComponents:U,serverData:z}=y;Promise.all(U.map(async e=>{const n=g(e);return I(e,"@lwrjs/app-service/example/module/esm/v/0_12_2").then(({default:o})=>{N([[n,o]],z)})}));