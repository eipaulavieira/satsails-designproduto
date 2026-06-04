import{j as e}from"./jsx-runtime-DiklIkkE.js";import{a as R}from"./colors-irRi7ooF.js";import{a as k,b as E,c as j}from"./arrows-left-right-tFG28u1K.js";import{w as I}from"./vender-D-LfHxCf.js";import"./index-DRjF_FHU.js";const T=[{id:"receber",label:"Receber",icon:k},{id:"enviar",label:"Enviar",icon:E},{id:"converter",label:"Converter",icon:j},{id:"vender",label:"Vender",icon:I}];function w({assetName:q}){return e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"0 16px",width:"100%",boxSizing:"border-box"},children:T.map(({id:U,label:i,icon:A})=>e.jsxs("button",{style:{width:61.813,height:58.643,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:6,borderRadius:15.849,border:`1px solid ${R.borderLinear.value}`,background:"var(--dark-new, #080808)",cursor:"pointer",padding:0,flexShrink:0},children:[e.jsx("img",{src:A,width:18,height:18,alt:i,style:{display:"block"}}),e.jsx("span",{style:{color:"#727272",textAlign:"center",fontFamily:"Inter, sans-serif",fontSize:9,fontWeight:400,lineHeight:"120%",whiteSpace:"nowrap"},children:i})]},U))})}w.__docgenInfo={description:"",methods:[],displayName:"AssetQuickActions",props:{assetName:{required:!1,tsType:{name:"string"},description:""}}};const O={title:"Componentes/Ações/Quick Actions/Ativo",component:w,parameters:{layout:"centered",backgrounds:{default:"app",values:[{name:"app",value:"#080808"},{name:"darker",value:"#000000"}]},docs:{description:{component:"Variante do QuickActions específica para cada ativo. Sem o botão Depositar. Aparece na tela de detalhe/histórico do ativo — as ações (Receber, Enviar, Converter, Vender) já são contextuais ao ativo selecionado."}}},argTypes:{assetName:{control:"text",description:"Nome do ativo (para uso futuro nas ações)"}},tags:["autodocs"]},a={name:"Bitcoin",args:{assetName:"Bitcoin"}},s={name:"Lightning Bitcoin",args:{assetName:"Lightning Bitcoin"}},r={name:"USDT",args:{assetName:"USDT"}},n={name:"Depix",args:{assetName:"Depix"}},o={name:"Liquid Bitcoin",args:{assetName:"Liquid Bitcoin"}},t={name:"EURx",args:{assetName:"EURx"}};var c,m,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Bitcoin',
  args: {
    assetName: 'Bitcoin'
  }
}`,...(d=(m=a.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var p,u,l;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Lightning Bitcoin',
  args: {
    assetName: 'Lightning Bitcoin'
  }
}`,...(l=(u=s.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var g,x,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'USDT',
  args: {
    assetName: 'USDT'
  }
}`,...(h=(x=r.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var f,b,v;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Depix',
  args: {
    assetName: 'Depix'
  }
}`,...(v=(b=n.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var B,N,S;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Liquid Bitcoin',
  args: {
    assetName: 'Liquid Bitcoin'
  }
}`,...(S=(N=o.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var D,y,L;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'EURx',
  args: {
    assetName: 'EURx'
  }
}`,...(L=(y=t.parameters)==null?void 0:y.docs)==null?void 0:L.source}}};const F=["Bitcoin","LightningBitcoin","USDT","Depix","LiquidBitcoin","EURx"];export{a as Bitcoin,n as Depix,t as EURx,s as LightningBitcoin,o as LiquidBitcoin,r as USDT,F as __namedExportsOrder,O as default};
