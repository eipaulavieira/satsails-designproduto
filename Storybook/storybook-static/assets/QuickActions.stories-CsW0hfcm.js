import{j as e}from"./jsx-runtime-DiklIkkE.js";import{a as h}from"./colors-BRJPZBW5.js";import{a as w,b as k,c as A}from"./arrows-left-right-tFG28u1K.js";import{w as S}from"./vender-D-LfHxCf.js";import{c as j}from"./currency-dollar-Tt3Z52wK.js";import"./index-DRjF_FHU.js";const R=[{id:"receber",label:"Receber",icon:w},{id:"enviar",label:"Enviar",icon:k},{id:"converter",label:"Converter",icon:A},{id:"vender",label:"Vender",icon:S},{id:"depositar",label:"Depositar",icon:j}];function x({onChange:r}){const y=a=>{r==null||r(a)};return e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"0 16px",width:"100%",boxSizing:"border-box"},children:R.map(({id:a,label:s,icon:f})=>{const i=a==="depositar";return e.jsxs("button",{onClick:()=>y(a),style:{width:61.813,height:58.643,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:6,borderRadius:15.849,border:`1px solid ${h.borderLinear.value}`,background:i?"#00C853":"var(--dark-new, #080808)",cursor:"pointer",padding:0,flexShrink:0},children:[e.jsx("img",{src:f,width:18,height:18,alt:s,style:{display:"block",filter:i?"brightness(0)":void 0}}),e.jsx("span",{style:{color:i?"var(--dark-new, #080808)":"#727272",textAlign:"center",fontFamily:"Inter, sans-serif",fontSize:9,fontWeight:400,lineHeight:"120%",whiteSpace:"nowrap"},children:s})]},a)})})}x.__docgenInfo={description:"",methods:[],displayName:"QuickActions",props:{onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: ActionItem) => void",signature:{arguments:[{type:{name:"union",raw:"'receber' | 'enviar' | 'converter' | 'vender' | 'depositar'",elements:[{name:"literal",value:"'receber'"},{name:"literal",value:"'enviar'"},{name:"literal",value:"'converter'"},{name:"literal",value:"'vender'"},{name:"literal",value:"'depositar'"}]},name:"item"}],return:{name:"void"}}},description:""}}};const Q={title:"Componentes/Ações/QuickActions",component:x,parameters:{layout:"centered",backgrounds:{default:"dark",values:[{name:"dark",value:"#080808"}]}},tags:["autodocs"],argTypes:{defaultActive:{control:"select",options:["receber","enviar","converter","sacar","depositar"],description:"Ação destacada por padrão"}}},t={name:"Padrão (sem seleção)",args:{},decorators:[r=>e.jsx("div",{style:{width:390,background:"#080808",padding:"16px 0",borderRadius:12},children:e.jsx(r,{})})]},o={name:"Depositar ativo",args:{defaultActive:"depositar"},decorators:[r=>e.jsx("div",{style:{width:390,background:"#080808",padding:"16px 0",borderRadius:12},children:e.jsx(r,{})})]},n={name:"Receber ativo",args:{defaultActive:"receber"},decorators:[r=>e.jsx("div",{style:{width:390,background:"#080808",padding:"16px 0",borderRadius:12},children:e.jsx(r,{})})]};var d,c,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var p,u,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(m=(u=o.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var v,g,b;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(b=(g=n.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const T=["Padrao","DepositarAtivo","ReceberAtivo"];export{o as DepositarAtivo,t as Padrao,n as ReceberAtivo,T as __namedExportsOrder,Q as default};
