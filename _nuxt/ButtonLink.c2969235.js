import{k as x,l as b,m as a,r as l,q as S,o as c,c as i,w as h,s as k,h as z,t as y,u as C,v as H,x as $,y as s,b as B}from"./entry.26df19a1.js";import q from"./ContentSlot.cf0c9203.js";/* empty css                                                                                    */const w=x({__name:"ButtonLink",props:{blank:{type:Boolean,required:!1,default:!1},color:b("color","primary",!1),href:{type:String,default:""},icon:{type:String,default:""},size:{required:!1,type:[String,Object],default:"medium"},transparent:{required:!1,type:[Boolean,Object],default:!1}},setup(n){const o=n,r=a(()=>((e=o,t=s)=>t.scale("color",e.color,"600"))()),u=a(()=>((e=o,t=s)=>t.scale("color",e.color,"500"))()),p=a(()=>((e=o,t=s)=>`1px solid ${t.scale("color",e.color,"600")}`)()),d=l({size:{small:{padding:"{space.2} {space.4}",fontSize:"{text.sm.fontSize}",lineHeight:"{text.sm.lineHeight}"},medium:{padding:"{space.rem.625} {space.5}",fontSize:"{text.base.fontSize}",lineHeight:"{text.base.lineHeight}"},large:{padding:"{space.3} {space.6}",fontSize:"{text.lg.fontSize}",lineHeight:"{text.lg.lineHeight}"},giant:{padding:"{space.4} {space.8}",fontSize:"{text.lg.fontSize}",lineHeight:"{text.lg.lineHeight}"}},transparent:{true:{backgroundColor:"transparent"}}}),{$pinceau:m}=S(a(()=>o),d,l({_JXn_backgroundColor:r,_wgS_backgroundColor:u,_zaK_border:p}));return(e,t)=>{const _=H,f=q,g=$;return c(),i(g,{class:y(["button-link",[C(m)]]),to:n.href,target:n.blank?"_blank":void 0},{default:h(()=>[n.icon?(c(),i(_,{key:0,name:n.icon},null,8,["name"])):k("",!0),z(f,{use:e.$slots.default,unwrap:"p ul li"},null,8,["use"])]),_:1},8,["to","target","class"])}}}),j=B(w,[["__scopeId","data-v-a88671be"]]);export{j as default};
