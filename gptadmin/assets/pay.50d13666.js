var e=Object.defineProperty,a=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,t=(a,o,l)=>o in a?e(a,o,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[o]=l,n=(e,n)=>{for(var s in n||(n={}))o.call(n,s)&&t(e,s,n[s]);if(a)for(var s of a(n))l.call(n,s)&&t(e,s,n[s]);return e};import{c as s,f as r}from"./index.3226b1eb.js";import{u as p}from"./useBasicForm.6685fd70.js";import{_ as d,a as c}from"./index.5213a1a2.js";import{t as i}from"./toolbarKeys.efa257c4.js";import{d as u,r as m,o as f,h as b,i as y,c as v,f as g,w as h,b as w,u as V,g as _,E as I}from"./vendor.e53bfd87.js";const P=[{field:"channel",component:"Select",label:"支付配置",required:!0,componentProps:{options:[{label:"线下支付",value:"offline"},{label:"微信支付",value:"wechat"}]}},{field:"offline",component:"Input",label:"线下支付内容",required:!1,slot:"offline"}],j=[{field:"appid",component:"Input",label:"支付公众号AppId",required:!0,componentProps:{placeholder:"请输入公众号AppId"}},{field:"mch_id",component:"Input",label:"微信支付商户号",required:!0,componentProps:{placeholder:"请输入微信支付商户号(MCH_ID)"}},{field:"key",component:"Input",label:"微信支付密钥",required:!0,componentProps:{placeholder:"请输入微信支付密钥(API_KEY)"}}];const C={class:"cb-page open"},q={class:"cb-m-b-40"},O={class:"cb-m-l-60"},U=_("确认");var A=d(u({__name:"pay",setup(e){const a=m("7"),o=m([{value:"7",name:"支付配置"},{value:"2",name:"微信支付"}]),{register:l,validate:t,setFieldsValue:d,resetFields:u,setProps:_}=p({options:{labelCol:{span:6},wrapperCol:{span:6}},schemas:P});f((()=>{K()}));const A=e=>{u();_({schemas:{7:P,2:j}[e]}),setTimeout((()=>{K()}),50)},F=async()=>{try{const e=await t(),o={type:a.value,config:n({},e)};e.agreement&&(o.config={agreements:n({},e)});const{err_code:l}=await c().open.openConfig(o);l||I.success("保存成功")}catch(e){}},K=async()=>{try{const{data:e}=await c().open.getConfig({type:a.value});d(n({},e.config))}catch(e){}},R=async e=>await x(e),x=e=>new Promise(((a,o)=>{let l=new FileReader;l.readAsDataURL(e),l.onload=e=>{a(e.target.result)}}));return(e,t)=>{const n=b("CbTab"),p=b("el-button"),d=b("el-card");return y(),v("div",C,[g(d,{class:"open-main"},{default:h((()=>[w("div",q,[g(n,{tabs:o.value,modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=e=>a.value=e),onChange:A},null,8,["tabs","modelValue"])]),g(V(s),{onRegister:V(l)},{agreement:h((({model:e,field:a})=>[g(V(r),{modelValue:e[a],"onUpdate:modelValue":o=>e[a]=o},null,8,["modelValue","onUpdate:modelValue"])])),offline:h((({model:e,field:a})=>[g(V(r),{modelValue:e[a],"onUpdate:modelValue":o=>e[a]=o,useLibrary:!1,"http-request":R,toolbarKeys:V(i)},null,8,["modelValue","onUpdate:modelValue","toolbarKeys"])])),_:1},8,["onRegister"]),w("div",O,[g(p,{type:"primary",onClick:F},{default:h((()=>[U])),_:1})])])),_:1})])}}}),[["__scopeId","data-v-bb401742"]]);export{A as default};
