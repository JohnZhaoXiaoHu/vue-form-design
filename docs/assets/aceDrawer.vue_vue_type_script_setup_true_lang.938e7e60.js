import{d as y,r as s,N as b,b as C,a4 as h,o as c,h as k,w as d,m as r,c as B,k as w,p as T,y as g,q as u,B as x,a3 as N}from"./index.ae153a4c.js";const E=["innerHTML"],M=["id"],z={class:"dialog-footer"},H=g(" \u786E\u5B9A "),U=y({__name:"aceDrawer",props:{modelValue:{type:Boolean},title:null,direction:null,content:{default:""},id:{default:"editJson"},codeType:null},emits:["beforeClose","confirm","update:modelValue"],setup(e,{emit:n}){const a=e,t=s({}),l=s(!1);b(()=>a.modelValue,o=>{l.value=o,o&&m()});const m=()=>{x(()=>{t.value=N(a.content,a.id,a.codeType)})},f=()=>{const o=t.value.getValue();n("confirm",o)},p=()=>{n("update:modelValue",!1),n("beforeClose")};return C(()=>{}),h(()=>{Object.keys(t.value).length!==0&&(t.value.destroy(),t.value.container.remove())}),(o,i)=>{const v=u("el-button"),V=u("el-drawer");return c(),k(V,{modelValue:l.value,"onUpdate:modelValue":i[0]||(i[0]=_=>l.value=_),size:"60%",title:e.title,direction:e.direction||"ltr","custom-class":"ace-dialog","append-to-body":!0,"before-close":p},{header:d(()=>[r("div",{innerHTML:e.title},null,8,E)]),default:d(()=>[l.value?(c(),B("div",{key:0,id:e.id},null,8,M)):w("",!0),r("div",z,[T(v,{type:"primary",size:"small",onClick:f},{default:d(()=>[H]),_:1})])]),_:1},8,["modelValue","title","direction"])}}});export{U as _};