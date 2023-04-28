import{f as x,r as v,J as L,o as M,n as U,b as C,d as D,z as j,a7 as G,h as P,w as d,l as r,e as s,R as w,j as A,t as N,k as T,O as Y,u as q,a4 as z,y as Z,C as Q,B as X,a2 as ee,a as b,E as te,v as ae,F as se,s as oe,V,a1 as le,G as ne,L as F,m as O,Y as ie,Z as ue}from"./index.2b72f3d0.js";import{_ as re}from"./headTools.vue_vue_type_script_setup_true_lang.2d938dcb.js";import{_ as ce}from"./vueFile.vue_vue_type_script_setup_true_lang.dfeeeea6.js";const de=x({__name:"echartsInt",props:{option:null,width:{default:600},height:{default:400}},setup(_){const B=_,h=v(),p=v(),n=G(()=>{p.value=echarts.init(h.value),p.value.setOption(B.option),window.onresize=p.value},100);return L(()=>B,()=>{p.value&&(p.value.clear(),p.value.dispose()),n()},{deep:!0}),M(()=>{U(()=>{n()})}),(f,g)=>(C(),D("div",{class:"echarts",style:j({width:_.width+"px",height:_.height+"px"}),ref_key:"echartsEl",ref:h},null,4))}}),pe=["onClick"],me={key:0,class:"drag-control"},fe={class:"item-control"},ge=["onClick"],ve=["onClick"],_e=r("div",{class:"drag-move icon-move"},null,-1),he={class:"tooltip"},ye=x({__name:"echarts",props:{data:null,type:{default:2}},emits:["controlBtnClick"],setup(_,{expose:B,emit:h}){const p=_,n=v(),f=v({list:[],config:{}});L(()=>p.data,i=>{i&&(f.value=i)},{immediate:!0});const g=i=>{if(p.type!==1)return;const y=i.newIndex,o=new Date().getTime().toString(),m=f.value.list[y];!m||(delete m.label,delete m.icon,Object.assign(m,{name:m.type+o}),E(m))},E=i=>{console.log("groupClick",i),n.value=i.name,h("controlBtnClick",i)},e=(i,y,o)=>{if(p.type!==2){if(i==="clone"){const m=o.type+new Date().getTime().toString(),a=JSON.parse(JSON.stringify(o));f.value.list.splice(y,0,Object.assign(a,{name:m}))}else i==="del"&&f.value.list.splice(y,1);h("controlBtnClick","")}};return B({getData:()=>f.value,setDataList:i=>{f.value=i},setData:i=>{}}),(i,y)=>(C(),P(q(z),Y({itemKey:"id",list:f.value.list,name:"fade",class:"drag"},{group:"form",ghostClass:"ghost",animation:200,handle:".drag-move"},{onAdd:g}),{item:d(({element:o,index:m})=>[r("div",{class:T(["group",{["group-"+o.type]:!0,[o.class]:o.class,active:n.value===o.name}]),onClick:w(a=>E(o),["stop"])},[s(de,{option:o.option,width:o.width,height:o.height},null,8,["option","width","height"]),_.type===1?(C(),D("div",me,[r("div",fe,[r("i",{class:"icon-clone",onClick:w(a=>e("clone",m,o),["stop"]),title:"\u514B\u9686"},null,8,ge),r("i",{class:"icon-del",onClick:w(a=>e("del",m,o),["stop"])},null,8,ve)]),_e])):A("",!0),r("div",he,N(o.name),1)],10,pe)]),_:1},16,["list"]))}}),be={class:"design-container design-chart"},Be={class:"components-list"},Ce=r("div",{class:"title"},"\u56FE\u8868\u7C7B\u578B",-1),ke=["title"],Fe={class:"main-body"},De={class:"main-form design-form"},Ee={class:"sidebar-tools"},Ve=["innerHTML"],we={key:0,id:"editJson"},Ae={class:"dialog-footer"},Te=oe(" \u786E\u5B9A "),Se=x({__name:"index",setup(_){const B=Z(),h=Q(),p=v(),n=v({}),f=v([{icon:"line",label:"\u6298\u7EBF\u56FE",type:"line",option:{xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{data:[150,230,224,218,135,147,260],type:"line"}]}},{icon:"bar",label:"\u67F1\u72B6\u56FE",type:"bar",option:{xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{data:[120,200,150,80,70,110,130],type:"bar"}]}},{icon:"pie",label:"\u997C\u56FE",type:"pie",option:{series:[{name:"Access From",type:"pie",radius:"50%",data:[{value:1048,name:"Search Engine"},{value:735,name:"Direct"},{value:580,name:"Email"},{value:484,name:"Union Ads"},{value:300,name:"Video Ads"}]}]}}]),g=v(),E=a=>JSON.parse(JSON.stringify(a)),e=X({editor:{},loading:!1,id:h.query.id,direction:"rtl",dialogTitle:"",visible:!1,dialogType:"",name:""}),$=a=>{n.value=a},R=a=>{const t=g.value.getData();switch(a){case"del":g.value.setDataList([]),n.value="";break;case"json":S(t,{type:"export"});break;case"vue":p.value.openEcharts(t);break;case"save":y(t);break}},S=(a,t={})=>{var c,k;e.direction=t.direction||"rtl",e.visible=!0,e.dialogTitle=t.title,e.dialogType=t.type,a||(a=g.value.getData());let u=V(a,!0);switch(t.type){case"beforeRequest":(c=a.config)!=null&&c.beforeRequest?u=V(a.config.beforeRequest,!0):u=ue;break;case"afterResponse":(k=a.config)!=null&&k.afterResponse?u=V(a.config.afterResponse,!0):u=ie;break}U(()=>{e.editor=le(u)})},i=()=>{try{const a=ne(e.editor.getValue());switch(e.dialogType){case"export":g.value.setDataList(a);break;case"beforeRequest":case"afterResponse":const t=g.value.getData();t.config[e.dialogType]=a;break}e.visible=!1}catch(a){F.error(a.message)}},y=a=>{if(!e.name){F.error("\u8BF7\u8F93\u5165\u56FE\u8868\u4FDD\u5B58\u7684\u540D\u79F0");return}e.loading=!0;const t={data:V(a),id:e.id,name:e.name};O("saveEcharts",t).then(u=>{var c;console.log(u),F({message:((c=u.data)==null?void 0:c.message)||"\u4FDD\u5B58\u6210\u529F\uFF01",type:"success"}),B.push({path:"/echarts/list"}),e.loading=!1}).catch(u=>{var c;F.error(((c=u.data)==null?void 0:c.message)||"\u4FDD\u5B58\u5F02\u5E38"),e.loading=!1})},o=a=>{a()},m=()=>{e.id&&(e.loading=!0,O("echartsList",{id:e.id}).then(a=>{e.loading=!1;const t=a.data;e.name=t.name,g.value.setDataList(t.list)}).catch(a=>{var t;F.error(((t=a.data)==null?void 0:t.message)||"\u64CD\u4F5C\u5F02\u5E38"),e.loading=!1}))};return M(()=>{m()}),ee(()=>{Object.keys(e.editor).length!==0&&(e.editor.destroy(),e.editor.container.remove())}),(a,t)=>{const u=b("el-input"),c=b("el-form-item"),k=b("el-tab-pane"),J=b("el-tabs"),I=b("el-form"),K=b("el-button"),H=b("el-drawer"),W=te("loading");return ae((C(),D("div",be,[r("div",Be,[Ce,s(q(z),{itemKey:"key",tag:"ul",modelValue:f.value,"onUpdate:modelValue":t[0]||(t[0]=l=>f.value=l),group:{name:"form",pull:"clone",put:!1},"ghost-class":"ghost",sort:!1,clone:E},{item:d(({element:l})=>[r("li",{class:T([l.type])},[r("i",{class:T(`icon-${l.icon}`)},null,2),r("span",{title:l.label},N(l.label),9,ke)],2)]),_:1},8,["modelValue"])]),r("div",Fe,[s(re,{onClick:R,type:"2"}),r("div",De,[s(ye,{type:1,onControlBtnClick:$,ref_key:"echartsEl",ref:g},null,512)])]),r("div",Ee,[s(I,{size:"small"},{default:d(()=>[s(J,{modelValue:"first"},{default:d(()=>[s(k,{label:"\u56FE\u8868\u5C5E\u6027",name:"first"},{default:d(()=>[Object.keys(n.value).length?(C(),D(se,{key:0},[s(c,{label:"\u81EA\u5B9A\u4E49Class"},{default:d(()=>[s(u,{placeholder:"\u81EA\u5B9A\u4E49Class",modelValue:n.value.class,"onUpdate:modelValue":t[1]||(t[1]=l=>n.value.class=l)},null,8,["modelValue"])]),_:1}),s(c,{label:"\u5B57\u6BB5\u6807\u8BC6"},{default:d(()=>[s(u,{placeholder:"\u5B57\u6BB5\u6807\u8BC6",modelValue:n.value.name,"onUpdate:modelValue":t[2]||(t[2]=l=>n.value.name=l)},null,8,["modelValue"])]),_:1}),s(c,{label:"\u56FE\u8868\u5BBD\u5EA6"},{default:d(()=>[s(u,{placeholder:"\u56FE\u8868\u5BBD\u5EA6\uFF0C\u6570\u5B57\u7C7B\u578B",modelValue:n.value.width,"onUpdate:modelValue":t[3]||(t[3]=l=>n.value.width=l),modelModifiers:{number:!0}},null,8,["modelValue"])]),_:1}),s(c,{label:"\u56FE\u8868\u9AD8\u5EA6"},{default:d(()=>[s(u,{placeholder:"\u56FE\u8868\u9AD8\u5EA6\uFF0C\u6570\u5B57\u7C7B\u578B",modelValue:n.value.height,"onUpdate:modelValue":t[4]||(t[4]=l=>n.value.height=l),modelModifiers:{number:!0}},null,8,["modelValue"])]),_:1})],64)):A("",!0)]),_:1}),s(k,{label:"\u56FE\u8868\u914D\u7F6E",name:"two"},{default:d(()=>[s(c,{label:"\u4FDD\u5B58\u540D\u79F0"},{default:d(()=>[s(u,{placeholder:"\u4FDD\u5B58\u540D\u79F0",modelValue:e.name,"onUpdate:modelValue":t[5]||(t[5]=l=>e.name=l)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),s(H,{modelValue:e.visible,"onUpdate:modelValue":t[6]||(t[6]=l=>e.visible=l),size:"60%",direction:e.direction,"custom-class":"ace-dialog","append-to-body":!0,"before-close":o},{header:d(()=>[r("div",{innerHTML:e.dialogTitle},null,8,Ve)]),default:d(()=>[e.visible?(C(),D("div",we)):A("",!0),r("div",Ae,[s(K,{type:"primary",size:"small",onClick:i},{default:d(()=>[Te]),_:1})])]),_:1},8,["modelValue","direction"]),s(ce,{ref_key:"vueFileEl",ref:p},null,512)])),[[W,e.loading]])}}});export{Se as default};