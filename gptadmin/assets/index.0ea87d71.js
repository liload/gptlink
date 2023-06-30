var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,n=(a,t,o)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[t]=o,p=(e,a)=>{for(var t in a||(a={}))l.call(a,t)&&n(e,t,a[t]);if(o)for(var t of o(a))r.call(a,t)&&n(e,t,a[t]);return e};import{e as s}from"./index.8ad7c599.js";import{a as i}from"./index.76f0df78.js";import{d as c,bw as d,r as m,a as u,o as b,i as f,c as P,f as g,w as _,u as y}from"./vendor.b96c6562.js";import{_ as h}from"./userSelect.6faea30d.js";const O={class:"cb-page page-user"},j=c({__name:"index",setup(e){const o=d(),l=[{label:"套餐名称",prop:"package_name"},{label:"用户昵称",prop:"nickname",customRender:({user:e})=>e.nickname||"暂无"},{label:"用户手机号",prop:"mobile",customRender:({user:e})=>e.mobile||"暂无"},{label:"订单金额",prop:"price"},{label:"订单来源",prop:"platform",customRender:({platform:e})=>({1:"gpt-link",2:"魔法书"}[e])},{label:"订单状态",prop:"status",customRender:({status:e})=>({1:"未支付",2:"已支付"}[e])},{label:"支付流水号",prop:"paid_no"},{label:"商户订单号",prop:"trade_no"},{label:"下单时间",prop:"created_at"}],r=m(null),n=u({}),c={style:{marginBottom:"20px"}},j=function(e){const{package_id:a}=e;return{labelWidth:100,submitOnReset:!0,actionColOptions:{offset:0,span:8,style:{textAlign:"left"}},baseColProps:{span:8},rowProps:{gutter:24},labelPosition:"left",schemas:[{field:"nickname",component:"Input",label:"用户昵称：",componentProps:{placeholder:"请输入用户昵称"}},{field:"mobile",component:"Input",label:"手机号：",componentProps:{placeholder:"请输入手机号"}},{field:"trade_no",component:"Input",label:"商户订单号：",componentProps:{placeholder:"请输入支付流水号"}},{field:"status",component:"Select",label:"订单状态：",componentProps:{style:{width:"100%"},options:[{label:"未支付",value:"1"},{label:"已支付",value:"2"}]}},{field:"package_id",component:"ApiSelect",label:"套餐：",componentProps:{style:{width:"100%"},api:i().chatGPT.packageList,resultField:"data",labelField:"name",valueField:"id"},defaultValue:a?Number(a):""},{field:"created_at",component:"DatePicker",label:"下单时间：",componentProps:{type:"datetimerange",startPlaceholder:"开始日期",endPlaceholder:"结束日期",format:"YYYY-MM-DD"},defaultValue:[]}],submitButtonOptions:{text:"搜索"},resetButtonOptions:{}}}({package_id:o.query.id||""});b((()=>{}));const k=e=>{n.created_at=(e.created_at||[]).join("~")};return(e,o)=>{return f(),P("div",O,[g(y(s),{columns:y(l),api:y(i)().chatGPT.orderList,onHandleSearchInfoChange:k,"form-config":y(j),"form-card-options":c,extraParams:(d=p({},n),m={with_query:["member"]},a(d,t(m))),ref_key:"tableRef",ref:r},{"form-user_id":_((({model:e,field:a})=>[g(h,{modelValue:e[a],"onUpdate:modelValue":t=>e[a]=t},null,8,["modelValue","onUpdate:modelValue"])])),_:1},8,["columns","api","form-config","extraParams"])]);var d,m}}});export{j as default};
