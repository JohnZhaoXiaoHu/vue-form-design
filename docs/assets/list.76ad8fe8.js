import{d as f,r as o,o as y,c as b,p as u,w as a,y as D,t as s,q as n,C as _}from"./index.ae153a4c.js";const F=f({__name:"list",setup(g){const l=_(),r=o(),c=o({list:[{type:"input",control:{modelValue:"",placeholder:"\u8BF7\u8F93\u5165\u6D41\u7A0B\u540D\u79F0"},config:{},name:"name",item:{label:"\u6D41\u7A0B\u540D\u79F0"}},{type:"select",control:{modelValue:"",appendToBody:!0},options:[],config:{optionsType:2,optionsFun:""},name:"flow",item:{label:"\u6D41\u7A0B\u5206\u7C7B"}},{type:"button",control:{label:"\u67E5\u8BE2",type:"primary",key:"submit"},config:{}},{type:"button",control:{label:"\u91CD\u7F6E",key:"reset"},config:{}}],form:{size:"default"},config:{}}),i=o({columns:[{label:"\u591A\u9009",type:"selection"},{label:"\u6D41\u7A0B\u540D\u79F0",prop:"name"},{label:"\u6D41\u7A0B\u8868\u5355",prop:"sourceName"},{label:"\u5206\u7C7B",prop:"category",config:{dictKey:"flow"}},{label:"\u72B6\u6001",prop:"status",config:{dictKey:"status",tagList:{0:"info",1:"success"}}},{label:"\u64CD\u4F5C",prop:"__control"}],config:{},controlBtn:[{label:"\u65B0\u589E\u6D41\u7A0B",type:"primary",size:"small",icon:"plus",click:()=>{l.push({path:"/design/flow"})}},{label:"\u6279\u91CF\u5220\u9664",key:"del",type:"danger",size:"small",icon:"delete"}],operateBtn:[{label:"\u7F16\u8F91",click:e=>{l.push({path:"/design/flow",query:{id:e.id}})}},{label:"\u5220\u9664",key:"del"}]}),p=e=>(e.type=3,e);return(e,B)=>{const d=n("router-link"),m=n("ak-list");return y(),b("div",null,[u(m,{ref_key:"tableListEl",ref:r,requestUrl:"designList",deleteUrl:"designDelete",searchData:c.value,tableData:i.value,beforeRequest:p},{sourceName:a(({row:t})=>[u(d,{to:`/design/form?id=${t.source}`},{default:a(()=>[D(s(t.sourceName)+"/"+s(t.source),1)]),_:2},1032,["to"])]),_:1},8,["searchData","tableData"])])}}});export{F as default};