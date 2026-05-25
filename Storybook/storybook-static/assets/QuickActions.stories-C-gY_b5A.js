import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as j}from"./index-DRjF_FHU.js";const A="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%3e%3cpath%20d='M9%202.8125V15.1875M9%2015.1875L14.0625%2010.125M9%2015.1875L3.9375%2010.125'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",M="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%3e%3cpath%20d='M9%2015.1875V2.8125M9%202.8125L3.9375%207.875M9%202.8125L14.0625%207.875'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",S="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%3e%3cpath%20d='M2.8125%206.75H15.1875M15.1875%206.75L11.8125%203.375M15.1875%206.75L11.8125%2010.125M15.1875%2011.25H2.8125M2.8125%2011.25L6.1875%207.875M2.8125%2011.25L6.1875%2014.625'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",R="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%3e%3cpath%20d='M9%202.8125V12.375M9%2012.375L5.625%209M9%2012.375L12.375%209M4.5%2015.1875H13.5'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",I="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%3e%3cpath%20d='M9%201.6875V3M9%2015V16.3125M12%205.0625C11.5781%204.05%2010.3969%203.375%209%203.375C7.13672%203.375%205.625%204.48828%205.625%205.90625C5.625%207.32422%207.13672%208.4375%209%208.4375C10.8633%208.4375%2012.375%209.55078%2012.375%2010.9688C12.375%2012.3867%2010.8633%2013.5%209%2013.5C7.60313%2013.5%206.42188%2012.825%206%2011.8125'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",C=[{id:"receber",label:"Receber",icon:A},{id:"enviar",label:"Enviar",icon:M},{id:"converter",label:"Converter",icon:S},{id:"sacar",label:"Sacar",icon:R},{id:"depositar",label:"Depositar",icon:I}];function x({defaultActive:r,onChange:i}){const[b,k]=j.useState(r),f=t=>{k(t),i==null||i(t)};return e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"0 16px",width:"100%",boxSizing:"border-box"},children:C.map(({id:t,label:s,icon:y})=>{const d=b===t;return e.jsxs("button",{onClick:()=>f(t),style:{width:61.813,height:58.643,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:6,borderRadius:15.849,border:d?"none":"1px solid rgba(255, 255, 255, 0.32)",background:d?"#00C853":"#080808",cursor:"pointer",padding:0,transition:"background 0.15s ease, border 0.15s ease",flexShrink:0},children:[e.jsx("img",{src:y,width:18,height:18,alt:s,style:{display:"block"}}),e.jsx("span",{style:{color:"#727272",textAlign:"center",fontFamily:"Inter, sans-serif",fontSize:9,fontStyle:"normal",fontWeight:400,lineHeight:"120%",whiteSpace:"nowrap"},children:s})]},t)})})}x.__docgenInfo={description:"",methods:[],displayName:"QuickActions",props:{defaultActive:{required:!1,tsType:{name:"union",raw:"'receber' | 'enviar' | 'converter' | 'sacar' | 'depositar'",elements:[{name:"literal",value:"'receber'"},{name:"literal",value:"'enviar'"},{name:"literal",value:"'converter'"},{name:"literal",value:"'sacar'"},{name:"literal",value:"'depositar'"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: ActionItem) => void",signature:{arguments:[{type:{name:"union",raw:"'receber' | 'enviar' | 'converter' | 'sacar' | 'depositar'",elements:[{name:"literal",value:"'receber'"},{name:"literal",value:"'enviar'"},{name:"literal",value:"'converter'"},{name:"literal",value:"'sacar'"},{name:"literal",value:"'depositar'"}]},name:"item"}],return:{name:"void"}}},description:""}}};const B={title:"Components/QuickActions",component:x,parameters:{layout:"centered",backgrounds:{default:"dark",values:[{name:"dark",value:"#080808"}]}},tags:["autodocs"],argTypes:{defaultActive:{control:"select",options:["receber","enviar","converter","sacar","depositar"],description:"Ação destacada por padrão"}}},a={name:"Padrão (sem seleção)",args:{},decorators:[r=>e.jsx("div",{style:{width:390,background:"#080808",padding:"16px 0",borderRadius:12},children:e.jsx(r,{})})]},o={name:"Depositar ativo",args:{defaultActive:"depositar"},decorators:[r=>e.jsx("div",{style:{width:390,background:"#080808",padding:"16px 0",borderRadius:12},children:e.jsx(r,{})})]},n={name:"Receber ativo",args:{defaultActive:"receber"},decorators:[r=>e.jsx("div",{style:{width:390,background:"#080808",padding:"16px 0",borderRadius:12},children:e.jsx(r,{})})]};var c,l,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Padrão (sem seleção)',
  args: {},
  decorators: [Story => <div style={{
    width: 390,
    background: '#080808',
    padding: '16px 0',
    borderRadius: 12
  }}>\r
        <Story />\r
      </div>]
}`,...(p=(l=a.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var v,u,g;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Depositar ativo',
  args: {
    defaultActive: 'depositar'
  },
  decorators: [Story => <div style={{
    width: 390,
    background: '#080808',
    padding: '16px 0',
    borderRadius: 12
  }}>\r
        <Story />\r
      </div>]
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var m,w,h;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Receber ativo',
  args: {
    defaultActive: 'receber'
  },
  decorators: [Story => <div style={{
    width: 390,
    background: '#080808',
    padding: '16px 0',
    borderRadius: 12
  }}>\r
        <Story />\r
      </div>]
}`,...(h=(w=n.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};const V=["Padrao","DepositarAtivo","ReceberAtivo"];export{o as DepositarAtivo,a as Padrao,n as ReceberAtivo,V as __namedExportsOrder,B as default};
