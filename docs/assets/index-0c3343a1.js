import{d as q,x as B,r as u,a as y,b as C,o as E,c as D,l as S,m as n,w as r,y as N,u as I,a1 as L,g as R,X as U,E as j,C as F,U as M,q as c,D as z}from"./index-8ad7f075.js";const O={class:"design-flow-container"},P={class:"tools"},$=q({__name:"index",setup(Q){B().changeBreadcrumb([{label:"系统工具"},{label:"流程设计"}]);const f=u(),i=u(),d=R(),m=z(),s=u(d.query.tabs||"info"),g=u({list:[{type:"input",control:{modelValue:"",placeholder:"请输入流程名称"},config:{},name:"name",item:{label:"流程名称"},customRules:[{type:"required",message:"请输入流程名称",trigger:"blur"}]},{type:"select",control:{modelValue:"",appendToBody:!0},options:[],config:{optionsType:1,optionsFun:"designList",method:"post",debug:!0,label:"name",value:"id",beforeRequest:e=>(e.type=1,e)},name:"source",item:{label:"流程表单",rules:[{required:!0,message:"请选择流程表单",trigger:"blur"}]}},{type:"switch",control:{modelValue:1,activeValue:1,inactiveValue:0},options:[],config:{optionsType:2},name:"status",item:{label:"状态"}},{type:"component",control:{modelValue:"",colorPicker:!0},config:{componentName:"DiyIconfont"},name:"icon",item:{label:"流程图标"}},{type:"select",control:{modelValue:"",appendToBody:!0},options:[],config:{optionsType:2,optionsFun:"flow"},name:"category",item:{label:"所在分组"}},{type:"select",control:{modelValue:"",appendToBody:!0},options:[],config:{optionsType:1,optionsFun:"roleList",label:"name",value:"id"},name:"roleId",item:{label:"角色权限",showLabel:!1}},{type:"textarea",control:{modelValue:""},config:{span:24},name:"remark",item:{label:"备注说明",showLabel:!1}}],form:{class:"form-row-2",labelWidth:"110px",size:"default"}}),l=y(()=>d.query.id),_=y(()=>l.value?2:1),v=e=>{e.paneName},V=()=>{f.value.submit()},w=e=>{var t,o,a;return l.value&&(e.id=l.value),e.icon&&(e.icon=(t=e.icon)==null?void 0:t.join(",")),e.type=3,(o=i.value)!=null&&o.getValue&&(e.data=U((a=i.value)==null?void 0:a.getValue())),e},k=e=>(e.icon&&(e.icon=e.icon.split(",")),i.value.setValue(j(e.data)),e),h=(e,t)=>{if(e==="success")if(s.value==="info"){if(s.value="flow",!l.value){const o=t.data.insertId;m.push({path:"/design/flow",query:{id:o,tabs:"flow"}}),F(()=>{p()})}}else m.push({path:"/design/flow/list"});if(e==="validate"&&s.value==="flow"){let o;try{for(const a in t)if(!o){o=t[a][0].message;break}M.error(o)}catch{}}},p=()=>{l.value&&f.value.getData({id:l.value})};return C(()=>{p()}),(e,t)=>{const o=c("el-button"),a=c("ak-form"),b=c("el-tab-pane"),T=c("el-tabs");return E(),D("div",O,[S("div",P,[n(o,{type:"primary",onClick:V},{default:r(()=>[N("保存")]),_:1})]),n(T,{modelValue:s.value,"onUpdate:modelValue":t[0]||(t[0]=x=>s.value=x),class:"flow-tabs",onTabClick:v},{default:r(()=>[n(b,{label:"基础信息",name:"info",class:"tabs-info"},{default:r(()=>[n(a,{ref_key:"formEl",ref:f,formData:g.value,type:I(_),addUrl:"designSave",editUrl:"designEdit",requestUrl:"designById",beforeSubmit:w,afterSubmit:h,afterResponse:k},null,8,["formData","type"])]),_:1}),n(b,{label:"审批流程",name:"flow"},{default:r(()=>[n(L,{ref_key:"flowEl",ref:i},null,512)]),_:1})]),_:1},8,["modelValue"])])}}});export{$ as default};