import{j as e}from"./jsx-runtime-DiklIkkE.js";import{G as C}from"./GlassCard-DLqtvZXq.js";import{a as E}from"./colors-BRJPZBW5.js";import"./index-DRjF_FHU.js";function x({totalBalance:S,cryptoEquivalent:b,isPrivate:n=!1,blur:q=12,background:h="var(--dark-new, #080808)",borderColor:B=E.borderLinear.value}){return e.jsx(C,{width:359,minHeight:148,padding:"24px 28px",borderRadius:16,blur:q,background:h,borderColor:B,children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"flex-start",height:100},children:[e.jsx("span",{style:{color:"#FFF",fontFamily:"Inter, sans-serif",fontSize:11,fontWeight:400,lineHeight:"120%"},children:"Saldo total:"}),e.jsx("span",{style:{color:"#FFF",fontFamily:"Inter, sans-serif",fontSize:33,fontWeight:400,lineHeight:"120%"},children:n?"******":S}),e.jsx("span",{style:{color:"#FFF",fontFamily:"Inter, sans-serif",fontSize:16,fontWeight:400,lineHeight:"120%"},children:n?"*****":b})]})})}x.__docgenInfo={description:"",methods:[],displayName:"BalanceTotalCard",props:{totalBalance:{required:!0,tsType:{name:"string"},description:""},cryptoEquivalent:{required:!0,tsType:{name:"string"},description:""},isPrivate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},blur:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"12",computed:!1}},background:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'var(--dark-new, #080808)'",computed:!1}},borderColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"colors.borderLinear.value",computed:!0}}}};const $={title:"Componentes/Saldo/BalanceTotalCard",component:x,parameters:{layout:"centered",backgrounds:{default:"app",values:[{name:"app",value:"#080808"},{name:"darker",value:"#000000"}]},docs:{description:{component:'Card de saldo total da conta. Usa GlassCard como container e exibe o rótulo "Saldo total:", o valor em fiat e o equivalente em BTC.'}}},argTypes:{totalBalance:{control:"text",description:"Saldo em moeda fiat (ex: R$ 68.420,00)"},cryptoEquivalent:{control:"text",description:"Equivalente em BTC (ex: ≈ 0.18563)"},isPrivate:{control:"boolean",description:"Oculta os valores com •••"},blur:{control:{type:"range",min:0,max:40,step:1},description:"Intensidade do blur (px)"},background:{control:"color",description:"Cor de fundo rgba"},borderColor:{control:"color",description:"Cor da borda"}},tags:["autodocs"]},a={name:"Padrão",args:{totalBalance:"R$ 68.420,00",cryptoEquivalent:"≈ 0.18563"}},o={name:"Dados Privados",args:{totalBalance:"R$ 68.420,00",cryptoEquivalent:"≈ 0.18563",isPrivate:!0}},r={name:"Saldo Zerado",args:{totalBalance:"R$ 0,00",cryptoEquivalent:"≈ 0.00000"}},t={name:"Saldo Alto",args:{totalBalance:"R$ 1.240.000,00",cryptoEquivalent:"≈ 12.84321"}};var s,l,i;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: 'Padrão',
  args: {
    totalBalance: 'R$ 68.420,00',
    cryptoEquivalent: '≈ 0.18563'
  }
}`,...(i=(l=a.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var d,c,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Dados Privados',
  args: {
    totalBalance: 'R$ 68.420,00',
    cryptoEquivalent: '≈ 0.18563',
    isPrivate: true
  }
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,m,f;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Saldo Zerado',
  args: {
    totalBalance: 'R$ 0,00',
    cryptoEquivalent: '≈ 0.00000'
  }
}`,...(f=(m=r.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var g,v,y;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Saldo Alto',
  args: {
    totalBalance: 'R$ 1.240.000,00',
    cryptoEquivalent: '≈ 12.84321'
  }
}`,...(y=(v=t.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};const j=["Padrao","DadosPrivados","SaldoZerado","SaldoAlto"];export{o as DadosPrivados,a as Padrao,t as SaldoAlto,r as SaldoZerado,j as __namedExportsOrder,$ as default};
