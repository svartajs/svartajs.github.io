import{o as l,c as m,n as E,g as f,u as s,d as n,_ as o}from"./entry.448d69bc.js";const g={__name:"nuxt-error-page",props:{error:Object},setup(c){const{error:t}=c;(t.stack||"").split(`
`).splice(1).map(e=>({text:e.replace("webpack:/","").replace(".vue",".js").trim(),internal:e.includes("node_modules")&&!e.includes(".cache")||e.includes("internal")||e.includes("new Promise")})).map(e=>`<span class="stack${e.internal?" internal":""}">${e.text}</span>`).join(`
`);const r=Number(t.statusCode||500),a=r===404,u=t.statusMessage??(a?"Page Not Found":"Internal Server Error"),i=t.message||t.toString(),p=void 0,_=a?n(()=>o(()=>import("./error-404.ba11b42b.js"),["./error-404.ba11b42b.js","./entry.448d69bc.js","./entry.2eda16c6.css","./error-404.97011ca1.css"],import.meta.url).then(e=>e.default||e)):n(()=>o(()=>import("./error-500.6d75cf86.js"),["./error-500.6d75cf86.js","./entry.448d69bc.js","./entry.2eda16c6.css","./error-500.82e14f63.css"],import.meta.url).then(e=>e.default||e));return(e,d)=>(l(),m(s(_),E(f({statusCode:s(r),statusMessage:s(u),description:s(i),stack:s(p)})),null,16))}},x=g;export{x as default};
