import{I as s,r as t,b as c,c as p,d as i,g as u}from"./index.67521be0.js";const d={__name:"applyed",setup(m){const a=s(),l=t(),o=t({list:[{type:"input",control:{modelValue:"",placeholder:"\u8BF7\u8F93\u5165\u5BA1\u6279\u6807\u9898"},config:{},name:"title",item:{label:"\u5BA1\u6279\u6807\u9898"}},{type:"button",control:{label:"\u67E5\u8BE2",type:"primary",key:"submit"},config:{},name:"button1682087269238"},{type:"button",control:{label:"\u91CD\u7F6E"},config:{}}],form:{size:"default"},config:{}}),r=t({columns:[{prop:"title",label:"\u5BA1\u6279\u6807\u9898"},{prop:"creatTime",label:"\u53D1\u8D77\u65F6\u95F4",config:{formatter:"{y}-{m}-{d} {h}:{i}:{s}"}},{prop:"endTime",label:"\u5B8C\u6210\u65F6\u95F4",config:{formatter:"{y}-{m}-{d} {h}:{i}:{s}"}},{prop:"name",label:"\u5BA1\u6279\u4EBA"},{prop:"status",label:"\u6D41\u7A0B\u72B6\u6001"},{prop:"__control",label:"\u64CD\u4F5C"}],operateBtn:[{label:"\u4FEE\u6539",click:e=>{a.push({path:"/task/apply/start",query:{flowId:e.flowId,id:e.id}})}},{label:"\u64A4\u56DE"}],config:{requestUrl:"flowList",expand:!0}});return(e,b)=>{const n=c("ak-list");return p(),i("div",null,[u(n,{ref_key:"tableListEl",ref:l,requestUrl:"flowList",searchData:o.value,tableData:r.value},null,8,["searchData","tableData"])])}}};export{d as default};