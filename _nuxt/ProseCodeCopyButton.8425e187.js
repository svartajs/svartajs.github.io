import{T as f,_ as y}from"./DocsAsideTree.1a896abd.js";import"./index.a236b148.js";import{g as C,d as h}from"./Container.d2e75b0b.js";import{u as B}from"./index.37d83a56.js";import{c as w,r as k,l as t,m as v,C as l,D as x,A as b,z as i,u as r,q as I,J as z,L as S}from"./runtime-core.esm-bundler.92c6bc06.js";/* empty css                      */import"./cookie.170c482d.js";const T=o=>(z("data-v-5fa3121e"),o=o(),S(),o),g=T(()=>l("span",{class:"sr-only"},"Copy to clipboard",-1)),A={class:"icon-wrapper"},N=w({__name:"ProseCodeCopyButton",props:{content:{type:String,default:""},show:{type:Boolean,default:!1}},setup(o){const d=o,{copy:u}=B(),{prose:a}=C(),e=k("init"),m=_=>{u(d.content).then(()=>{e.value="copied",setTimeout(()=>{e.value="init"},1e3)}).catch(s=>{console.warn("Couldn't copy to clipboard!",s)})};return(_,s)=>{const n=y;return t(),v("button",{class:I([(o.show||e.value==="copied")&&"show"]),onClick:m},[g,l("span",A,[x(f,{name:"fade"},{default:b(()=>{var c,p;return[e.value==="copied"?(t(),i(n,{key:0,name:(c=r(a).copyButton)==null?void 0:c.iconCopied,size:"18",class:"copied"},null,8,["name"])):(t(),i(n,{key:1,name:(p=r(a).copyButton)==null?void 0:p.iconCopy,size:"18"},null,8,["name"]))]}),_:1})])],2)}}}),$=h(N,[["__scopeId","data-v-5fa3121e"]]);export{$ as default};