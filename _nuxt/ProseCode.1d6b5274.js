import{a as _,l,m as k,o as a,f as p,j as y,q as h,w,c as f,u as m,T as S,h as C,s as $,p as b,i as x,k as v,t as I,v as P,r as z}from"./entry.448d69bc.js";import{u as N,o as T}from"./index.1b8dba19.js";/* empty css                      */const V=e=>(b("data-v-4a003820"),e=e(),x(),e),A=V(()=>y("span",{class:"sr-only"},"Copy to clipboard",-1)),M={class:"icon-wrapper"},R=_({__name:"ProseCodeCopyButton",props:{content:{type:String,default:""},show:{type:Boolean,default:!1}},setup(e){const n=e,s=l(),{copy:t}=N();T(s,()=>{o.value==="copied"&&(o.value="init")});const{prose:c}=k(),o=l("init"),g=B=>{t(n.content).then(()=>{o.value="copied"}).catch(i=>{console.warn("Couldn't copy to clipboard!",i)})};return(B,i)=>{const r=$;return a(),p("button",{ref_key:"copyButtonRef",ref:s,class:C([(e.show||o.value==="copied")&&"show"]),onClick:g},[A,y("span",M,[h(S,{name:"fade"},{default:w(()=>{var u,d;return[o.value==="copied"?(a(),f(r,{key:0,name:(u=m(c).copyButton)==null?void 0:u.iconCopied,size:"18",class:"copied"},null,8,["name"])):(a(),f(r,{key:1,name:(d=m(c).copyButton)==null?void 0:d.iconCopy,size:"18"},null,8,["name"]))]}),_:1})])],2)}}}),j=v(R,[["__scopeId","data-v-4a003820"]]),q={key:0,class:"filename"},D=_({__name:"ProseCode",props:{code:{type:String,default:""},language:{type:String,default:null},filename:{type:String,default:null},highlights:{type:Array,default:()=>[]}},setup(e){const n=l(!1);return(s,t)=>{const c=j;return a(),p("div",{class:C([[`highlight-${e.language}`],"prose-code"]),onMouseenter:t[0]||(t[0]=o=>n.value=!0),onMouseleave:t[1]||(t[1]=o=>n.value=!1)},[e.filename?(a(),p("span",q,I(e.filename),1)):P("",!0),z(s.$slots,"default",{},void 0,!0),h(c,{show:n.value,content:e.code,class:"copy-button"},null,8,["show","content"])],34)}}}),G=v(D,[["__scopeId","data-v-c164ce0a"]]);export{G as default};
