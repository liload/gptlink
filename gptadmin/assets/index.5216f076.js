var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,s=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t,n=(e,a)=>{for(var l in a||(a={}))r.call(a,l)&&s(e,l,a[l]);if(t)for(var l of t(a))o.call(a,l)&&s(e,l,a[l]);return e},u=(e,t)=>a(e,l(t));import{d,bw as c,r as p,n as m,h as i,i as b,c as f,f as g,w as v,u as _,g as k,o as y,b as h,t as w,s as x,E as P,v as j,x as I}from"./vendor.b96c6562.js";import{a as O,_ as R}from"./index.76f0df78.js";import{e as C}from"./index.8ad7c599.js";import{u as V}from"./useBasicTable.64b9ed23.js";const q=[{label:"编号",prop:"id"},{label:"套餐名称",prop:"package",customRender:e=>e.package.name},{label:"问答机会",prop:"packageNum",customRender:e=>"-1"==e.package.num?"不限次数":e.package.num},{label:"兑换码",prop:"code"},{label:"用户昵称",prop:"member",customRender:e=>e.member?e.member.nickname:""},{label:"用户手机号",prop:"member",customRender:e=>e.member?e.member.mobile:""},{label:"兑换时间",prop:"updated_at"},{label:"使用状态",prop:"status",customRender:({status:e})=>({1:"未兑换",2:"已兑换",3:"已过期"}[e])}],S=[{field:"status",component:"Select",label:"使用状态：",componentProps:{style:{width:"100%"},options:[{label:"全部",value:""},{label:"未兑换",value:"1"},{label:"已兑换",value:"2"}]}},{field:"nickname",component:"Input",label:"昵称：",componentProps:{placeholder:"请输入昵称"}},{field:"mobile",component:"Input",label:"手机号：",componentProps:{placeholder:"请输入手机号"}},{field:"code",component:"Input",label:"兑换码：",componentProps:{placeholder:"请输入兑换码"}}],U={class:"cb-page"},$=k(" 导出兑换码 "),E=d({__name:"cdkTable",props:{cdkInfo:{type:Object,default:()=>({})}},setup(e){const a=e,l=c(),t=p({}),r=m((()=>n({with_query:["package","member","group"],group_id:l.params.id},k))),{registerTable:o,setProps:s,reload:d,extraParams:k}=V({columns:q,formSchemas:S}),y=e=>{t.value=e},h=async()=>{try{const e=await O().code.cdkExport(u(n({},t.value),{with_query:["package","member","group"],is_all:!0,group_id:l.params.id}));Math.random().toString().slice(-10);w(`${l.params.id}-${a.cdkInfo.name||""}-${a.cdkInfo.num||0}个兑换码`,e)}catch(e){}},w=(e,a)=>{let l=`${e}.xls`,t=document.createElement("a");t.download=l,t.style.display="none";let r=new Blob([a],{type:"application/vnd.ms-excel"});const o=URL.createObjectURL(r);t.href=o,document.body.appendChild(t),t.click(),document.body.removeChild(t)};return(e,a)=>{const l=i("el-button");return b(),f("div",U,[g(_(C),{onRegister:_(o),api:e.$api.code.getCdkList,extraParams:_(r),onHandleSearchInfoChange:y},{"cb-table-header":v((()=>[g(l,{type:"primary",onClick:h},{default:v((()=>[$])),_:1})])),_:1},8,["onRegister","api","extraParams"])])}}});const T={class:"detail cb-page"},L={class:"cb-m-b-20"},B={key:0,class:"detail-form"},D=(e=>(j("data-v-5dfb416a"),e=e(),I(),e))((()=>h("p",{style:{color:"#ccc"}},"是否结算/收取费用/备注，由管理员手动写入存储，可修改，仅供跟进参考",-1))),F=k("保存");var H=R(d({__name:"index",setup(e){const a=c(),l=p("1"),t=p([{value:"1",name:"兑换码详情管理"},{value:"2",name:"兑换码管理"}]),r=p(null),o=p({name:"",status:"",price:"",remark:"",package:{}}),s={price:[{required:!0,message:"请输入收取费用",trigger:"blur"}],name:[{required:!0,message:"请输入分组名称",trigger:"blur"}],status:[{required:!0,message:"请输入结算状态",trigger:"blur"}],remark:[{required:!0,message:"请输入备注",trigger:"blur"}]};y((()=>{d(a.params.id)}));const d=async e=>{try{const{data:a,err_code:l}=await O().code.getCdkDetail({id:e,with_query:["package"]});l||(o.value=u(n({},a),{status:a.status+""}))}catch(a){}},m=()=>{r.value.validate((async(e,a)=>{if(e){const{name:e,status:a,price:t,remark:r,id:s}=o.value;try{const{data:l,err_code:o}=await O().code.editCdk({id:s,name:e,status:a,price:t,remark:r});o||P.success("保存成功")}catch(l){}}}))};return(e,a)=>{const n=i("CbTab"),u=i("el-form-item"),d=i("el-col"),c=i("el-row"),p=i("el-input"),_=i("el-button"),y=i("el-form"),P=i("el-card");return b(),f("div",T,[g(P,null,{default:v((()=>[h("div",L,[g(n,{tabs:t.value,modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=e=>l.value=e)},null,8,["tabs","modelValue"])]),"1"===l.value?(b(),f("div",B,[g(y,{ref_key:"ruleFormRef",ref:r,model:o.value,rules:s,class:"demo-form-inline","label-width":"100px"},{default:v((()=>[g(c,{gutter:20},{default:v((()=>[g(d,{span:12},{default:v((()=>[g(u,{label:"批次编号："},{default:v((()=>[k(w(o.value.id),1)])),_:1})])),_:1}),g(d,{span:12},{default:v((()=>[g(u,{label:"生成时间："},{default:v((()=>[k(w(o.value.created_at),1)])),_:1})])),_:1}),g(d,{span:12},{default:v((()=>[g(u,{label:"选择套餐："},{default:v((()=>[k(w(o.value.package.name),1)])),_:1})])),_:1}),g(d,{span:12},{default:v((()=>[g(u,{label:"问答机会："},{default:v((()=>[k(w("-1"==o.value.package.num?"不限次数":o.value.package.num+"次"),1)])),_:1})])),_:1}),g(d,{span:12},{default:v((()=>[g(u,{label:"套餐价格："},{default:v((()=>[k(w("￥"+o.value.package.price),1)])),_:1})])),_:1}),g(d,{span:12},{default:v((()=>[g(u,{label:"生成数量："},{default:v((()=>[k(w(o.value.num),1)])),_:1})])),_:1}),g(d,{span:12},{default:v((()=>[g(u,{label:"总价值："},{default:v((()=>[k(w("￥"+o.value.num*o.value.package.price),1)])),_:1})])),_:1})])),_:1}),g(u,{label:"分组名称：",prop:"name"},{default:v((()=>[g(p,{modelValue:o.value.name,"onUpdate:modelValue":a[1]||(a[1]=e=>o.value.name=e),placeholder:"请输入分组名称"},null,8,["modelValue"])])),_:1}),g(u,{label:"备注：",prop:"remark"},{default:v((()=>[g(p,{modelValue:o.value.remark,"onUpdate:modelValue":a[2]||(a[2]=e=>o.value.remark=e),type:"textarea",rows:3,placeholder:"请输入备注",maxlength:300},null,8,["modelValue"]),D])),_:1}),g(u,null,{default:v((()=>[g(_,{type:"primary",onClick:m},{default:v((()=>[F])),_:1})])),_:1})])),_:1},8,["model"])])):(b(),x(E,{key:1,cdkInfo:o.value},null,8,["cdkInfo"]))])),_:1})])}}}),[["__scopeId","data-v-5dfb416a"]]);export{H as default};
