import{d as V,C as $,r as c,B as z,b as A,h as r,o as t,c as a,l as C,F as d,e as v,k as q,m as h,w as s,n as D,t as u,f as m,x as k,T as F,i as M}from"./index-3679850f.js";const R={class:"layout-docs"},j=["onClick"],J=V({__name:"layout",setup(G){const T=$(),_=c(),i=c([]);T.afterEach(()=>{x()});const x=()=>{z(()=>{setTimeout(()=>{if(_.value){const n=_.value.querySelectorAll("h2,h3"),o=Array.from(n).filter(l=>!!l.innerText.trim());o.length||(i.value=[]),i.value=o.map(l=>({title:l.id,lineIndex:l.getAttribute("data-source-line"),indent:parseInt(l.tagName.replace(/h/gi,""))}))}},500)})},b=n=>{const o=document.querySelector(`[data-source-line="${n.lineIndex}"]`);o&&o.scrollIntoView({behavior:"smooth",block:"start"})},S=c([{title:"开发指南",to:"/docs"},{title:"组件",children:[{title:"ak-form",to:"/docs/form"},{title:"ak-list",to:"/docs/list"}]},{title:"接口文档",to:"/docs/api",children:[{title:"数据源设计",to:"/docs/api"},{title:"表单设计",to:"/docs/api"},{title:"列表页设计",to:"/docs/api"},{title:"数据统计",to:"/docs/api"},{title:"数据大屏",to:"/docs/api"},{title:"流程设计",to:"/docs/api"}]},{title:"使用手册",to:"/docs/use",children:[{title:"快速开始",to:"/docs/use-start"},{title:"数据源",to:"/docs/use-dataSource"},{title:"ak-form",to:"/docs/use-form"},{title:"ak-list",to:"/docs/use-list"},{title:"可视化数据大屏",to:"/docs/use-screen"}]}]),w=c("/docs"),B=(n,o)=>{console.log(n,o)};return A(()=>{x()}),(n,o)=>{var y;const l=r("el-menu-item"),I=r("el-sub-menu"),E=r("el-menu"),L=r("router-view");return t(),a("div",R,[C("div",{class:q(["sidebar",{show:(y=i.value)==null?void 0:y.length}])},[(t(!0),a(d,null,v(i.value,(e,f)=>(t(),a("a",{style:D([{cursor:"pointer"},{paddingLeft:`${(e.indent-2)*15}px`}]),onClick:p=>b(e),key:f},u(e.title),13,j))),128))],2),h(E,{"default-active":w.value,class:"nav",mode:"horizontal",router:"","active-color":"#409eff",ellipsis:!1,onSelect:B},{default:s(()=>[(t(!0),a(d,null,v(S.value,(e,f)=>{var p;return t(),a(d,{key:f},[(p=e.children)!=null&&p.length?(t(),m(I,{key:0,index:e.to||e.title},{title:s(()=>[k(u(e.title),1)]),default:s(()=>[(t(!0),a(d,null,v(e.children,(g,N)=>(t(),m(l,{index:g.to,key:N},{default:s(()=>[k(u(g.title),1)]),_:2},1032,["index"]))),128))]),_:2},1032,["index"])):(t(),m(l,{key:1,index:e.to},{default:s(()=>[k(u(e.title),1)]),_:2},1032,["index"]))],64)}),128))]),_:1},8,["default-active"]),C("div",{class:"main-content",ref_key:"articleEl",ref:_},[h(L,null,{default:s(({Component:e})=>[h(F,{name:"left-fade",mode:"out-in"},{default:s(()=>[(t(),m(M(e)))]),_:2},1024)]),_:1})],512)])}}});export{J as default};