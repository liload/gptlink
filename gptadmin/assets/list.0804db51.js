var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,r=(t,a,o)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o,l=(e,l)=>{for(var n in l||(l={}))a.call(l,n)&&r(e,n,l[n]);if(t)for(var n of t(l))o.call(l,n)&&r(e,n,l[n]);return e};import{e as n}from"./index.079657ab.js";import{d as s,bw as p,r as i,a as m,o as c,i as u,c as d,f as b,w as f,u as y}from"./vendor.e53bfd87.js";import{_ as g}from"./userSelect.6e5b1f6c.js";import{a as P}from"./index.82c1a35e.js";const _={class:"cb-page page-user"},h=s({__name:"list",setup(e){const t=p(),a=[{label:"事件名称",prop:"type",customRender:({type:e})=>({register:"新用户注册",invite:"邀请朋友",share:"每日分享"}[e])},{label:"赠送情况",prop:"num",customRender:e=>{const t=e.num&&-1!==e.num?"+"+e.num+"次":"",a=e.expired_day?"+"+e.expired_day+"天":"";return t||a}},{label:"套餐名称",prop:"package_name"},{label:"用户昵称",prop:"nickname",customRender:({user:e})=>e.nickname||"暂无"},{label:"用户手机号",prop:"mobile",customRender:({user:e})=>e.mobile||"暂无"},{label:"ID编号",prop:"id"},{label:"生成时间",prop:"created_at"}],o=i(null),r=m({with_query:["member"]}),s={style:{marginBottom:"20px"}},h=function(e){const{type:t}=e;return{labelWidth:90,submitOnReset:!0,actionColOptions:{offset:0,span:8,style:{textAlign:"left"}},baseColProps:{span:6},rowProps:{gutter:24},labelPosition:"left",schemas:[{field:"nickname",component:"Input",label:"昵称："},{field:"mobile",component:"Input",label:"手机号："},{field:"type",component:"Select",label:"类型",componentProps:{style:{width:"100%"},options:[{label:"注册",value:"register"},{label:"邀请",value:"invite"},{label:"分享",value:"share"}]},defaultValue:t},{field:"created_at",component:"DatePicker",label:"创建时间：",componentProps:{unlinkPanels:!1,type:"datetimerange",startPlaceholder:"开始日期",endPlaceholder:"结束日期",format:"YYYY-MM-DD"},defaultValue:[]}],submitButtonOptions:{text:"搜索"},resetButtonOptions:{}}}({type:t.query.type||""});c((()=>{}));const v=e=>{r.created_at=(e.created_at||[]).join("~")};return(e,t)=>(u(),d("div",_,[b(y(n),{columns:y(a),api:y(P)().chatGPT.getTaskList,onHandleSearchInfoChange:v,"form-config":y(h),"form-card-options":s,extraParams:l({},r),ref_key:"tableRef",ref:o},{"form-user_id":f((({model:e,field:t})=>[b(g,{modelValue:e[t],"onUpdate:modelValue":a=>e[t]=a},null,8,["modelValue","onUpdate:modelValue"])])),_:1},8,["columns","api","form-config","extraParams"])]))}});export{h as default};
