import O from"./DocsAside.c25342ac.js";import R from"./ProseCodeInline.128cdb14.js";import U from"./Alert.a0564e1e.js";import G from"./DocsPageBottom.5a09b2ec.js";import K from"./DocsPrevNext.5a20c575.js";import{_ as Q}from"./DocsAsideTree.1a896abd.js";import W from"./DocsToc.56c2bfbf.js";import{e as X,c as Y,u as Z,f as oo,d as eo}from"./Container.d2e75b0b.js";import{o as to}from"./index.a236b148.js";import{c as no,e as d,r as I,M as so,o as ao,l as i,z as $,A as g,u as t,m as x,D as c,B as y,C as p,N as co,I as k,H as ro,F as lo,q as f,J as io,L as po}from"./runtime-core.esm-bundler.92c6bc06.js";/* empty css                           *//* empty css                      */import"./cookie.170c482d.js";import"./ContentSlot.d160717f.js";/* empty css                  */import"./ProseA.8e8e9dbc.js";/* empty css                   */import"./EditOnLink.vue.85834c21.js";/* empty css                           *//* empty css                         */import"./DocsTocLinks.ae1ed7ee.js";/* empty css                         *//* empty css                    */const uo=u=>(io("data-v-f7c33736"),u=u(),po(),u),_o={key:1,class:"toc"},mo={class:"toc-wrapper"},fo=uo(()=>p("span",{class:"title"},"Table of Contents",-1)),vo=no({__name:"DocsPageLayout",setup(u){const{page:s,navigation:V}=X(),{config:v}=Y(),A=to(),H=(o,e=!0)=>{var n;return typeof((n=s.value)==null?void 0:n[o])<"u"?s.value[o]:e},T=d(()=>{var o,e,n;return!s.value||((n=(e=(o=s.value)==null?void 0:o.body)==null?void 0:e.children)==null?void 0:n.length)>0}),C=d(()=>{var o,e,n,_,m;return((o=s.value)==null?void 0:o.toc)!==!1&&((m=(_=(n=(e=s.value)==null?void 0:e.body)==null?void 0:n.toc)==null?void 0:_.links)==null?void 0:m.length)>=2}),M=d(()=>{var o,e;return((o=s.value)==null?void 0:o.aside)!==!1&&((e=V.value)==null?void 0:e.length)>0}),z=d(()=>H("bottom",!0)),r=I(!1),a=I(null),h=()=>A.path.split("/").slice(0,2).join("/"),l=Z("asideScroll",()=>{var o;return{parentPath:h(),scrollTop:((o=a.value)==null?void 0:o.scrollTop)||0}});function S(){a.value&&(a.value.scrollHeight===0&&setTimeout(S,0),a.value.scrollTop=l.value.scrollTop)}return so(()=>{l.value.parentPath!==h()?(l.value.parentPath=h(),l.value.scrollTop=0):S()}),ao(()=>{a.value&&(l.value.scrollTop=a.value.scrollTop)}),(o,e)=>{var P,b,B,D,N,w;const n=O,_=R,m=U,F=G,L=K,j=Q,q=W,E=oo;return i(),$(E,{fluid:(b=(P=t(v))==null?void 0:P.main)==null?void 0:b.fluid,padded:(D=(B=t(v))==null?void 0:B.main)==null?void 0:D.padded,class:f(["docs-page-content",{fluid:(w=(N=t(v))==null?void 0:N.main)==null?void 0:w.fluid}])},{default:g(()=>[t(M)?(i(),x("aside",{key:0,ref_key:"asideNav",ref:a,class:"aside-nav"},[c(n,{class:"app-aside"})],512)):y("",!0),p("article",{class:f(["page-body",{"with-toc":t(C)}])},[t(T)?co(o.$slots,"default",{key:0},void 0,!0):(i(),$(m,{key:1,type:"info"},{default:g(()=>[k(" Start writing in "),c(_,null,{default:g(()=>[k("content/"+ro(t(s)._file),1)]),_:1}),k(" to see this page taking shape. ")]),_:1})),t(T)&&t(s)&&t(z)?(i(),x(lo,{key:2},[c(F),c(L)],64)):y("",!0)],2),t(C)?(i(),x("div",_o,[p("div",mo,[p("button",{onClick:e[0]||(e[0]=J=>r.value=!t(r))},[fo,c(j,{name:"heroicons-outline:chevron-right",class:f(["icon",[t(r)&&"rotate"]])},null,8,["class"])]),p("div",{class:f(["docs-toc-wrapper",[t(r)&&"opened"]])},[c(q,{onMove:e[1]||(e[1]=J=>r.value=!1)})],2)])])):y("",!0)]),_:3},8,["fluid","padded","class"])}}}),jo=eo(vo,[["__scopeId","data-v-f7c33736"]]);export{jo as default};
