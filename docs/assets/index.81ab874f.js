import{i as D,r as a,R as C,o as E,b as r,c as _,k as V,I as x,H as f,ah as T,M as L,d as w,g as y,w as A}from"./index.58206b0d.js";const I=D({__name:"content",props:{modelValue:null},emits:["update:modelValue"],setup(k,{emit:d}){const l=k,u=a(),i=a([]),p={children:"children",label:"name"},s=()=>{const o=u.value.getCheckedKeys(!1);d("update:modelValue",o.join(","))},t=()=>{const o=window.sessionStorage.getItem("formMenuList");o&&(i.value=JSON.parse(o))};return C(()=>l.modelValue,()=>{l.modelValue&&u.value.setCheckedKeys(l.modelValue.split(","),!1)}),E(()=>{t()}),(o,b)=>{const m=r("el-tree");return _(),V(m,{ref_key:"treeRef",ref:u,data:i.value,"show-checkbox":"","node-key":"id","highlight-current":"",props:p,onCheckChange:s},null,8,["data"])}}}),S=D({__name:"index",setup(k){const d=x(),l=a(),u=a(),i=a({list:[{type:"input",control:{modelValue:"",placeholder:"\u8BF7\u8F93\u5165\u89D2\u8272\u540D\u79F0"},config:{},name:"name",item:{label:"\u89D2\u8272\u540D\u79F0"}},{type:"select",control:{modelValue:"",appendToBody:!0},options:[],config:{optionsType:2,addAll:"\u5168\u90E8",optionsFun:"status"},name:"status",item:{label:"\u72B6\u6001"}},{type:"button",control:{label:"\u67E5\u8BE2",type:"primary",key:"submit"},config:{}},{type:"button",control:{label:"\u91CD\u7F6E",key:"reset"},config:{}}],form:{size:"default"},config:{}}),p=a({columns:[{label:"\u591A\u9009",type:"selection"},{label:"\u5E8F\u53F7",type:"index",width:"70px"},{label:"\u89D2\u8272\u540D\u79F0",prop:"name"},{label:"\u72B6\u6001",prop:"status",config:{dictKey:"status",tagList:{1:"success",0:"info"}}},{label:"\u64CD\u4F5C",prop:"__control"}],config:{expand:!0,openType:"dialog"},operateBtn:[{label:"\u5206\u914D\u7528\u6237",click:e=>{d.push({path:"/system/user",query:{role:e.id}})}},{label:"\u7F16\u8F91",key:"edit",click:e=>{f(()=>{console.log(e)})}},{label:"\u5220\u9664",key:"del"}],controlBtn:[{label:"\u65B0\u589E",key:"add",type:"primary",size:"small",icon:"plus"},{label:"\u6279\u91CF\u5220\u9664",key:"del",type:"danger",size:"small",icon:"delete"}]}),s=a({list:[{type:"input",control:{modelValue:""},config:{},name:"name",item:{label:"\u89D2\u8272\u540D\u79F0"},customRules:[{type:"required",message:"\u89D2\u8272\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]},{type:"radio",control:{modelValue:1},options:[],config:{optionsType:2,optionsFun:"status"},name:"status",item:{label:"\u72B6\u6001"}},{type:"component",control:{modelValue:""},config:{componentName:T(I)},name:"menuId",item:{label:"\u83DC\u5355\u6743\u9650"}},{type:"textarea",control:{modelValue:""},config:{},name:"remark",item:{label:"\u5907\u6CE8"}},{type:"div",control:{},config:{textAlign:"center"},list:[{type:"button",control:{label:"\u786E\u5B9A",type:"primary",key:"submit"},config:{span:0}},{type:"button",control:{label:"\u53D6\u6D88",key:"none"},config:{span:0}}]}],form:{labelWidth:80,size:"default"},config:{}}),t=L({visible:!1,title:"",formType:1,dict:{},editId:""}),o=(e,n)=>{var c;(e.key==="add"||e.key==="edit")&&(t.visible=!0,t.title=e.key==="add"?"\u65B0\u589E":"\u7F16\u8F91",t.formType=e.key==="add"?1:2,t.editId=n&&n.id,e.key==="add"&&((c=s.value.config)==null?void 0:c.addLoad)&&f(()=>{l.value.getData()}),e.key==="edit"&&f(()=>{l.value.setValue(n)}))},b=e=>(t.formType===2&&(e.id=t.editId),e),m=e=>{e==="success"&&(g(),u.value.getListData())},g=()=>{t.visible=!1,t.editId=""},h=e=>{e==="none"&&g()};return(e,n)=>{const c=r("ak-list"),v=r("ak-form"),F=r("el-dialog");return _(),w("div",null,[y(c,{ref_key:"tableListEl",ref:u,requestUrl:"roleList",deleteUrl:"roleDelete",searchData:i.value,tableData:p.value,onBtnClick:o},null,8,["searchData","tableData"]),y(F,{"destroy-on-close":"",modelValue:t.visible,"onUpdate:modelValue":n[0]||(n[0]=B=>t.visible=B),title:t.title,width:"420px"},{default:A(()=>[y(v,{ref_key:"formEl",ref:l,formData:s.value,dict:t.dict,type:t.formType,addUrl:"roleSave",editUrl:"roleEdit",beforeSubmit:b,afterSubmit:m,onBtnClick:h},null,8,["formData","dict","type"])]),_:1},8,["modelValue","title"])])}}});export{S as default};