import{j as e}from"./jsx-runtime-DiklIkkE.js";import"./index-DRjF_FHU.js";const y={color:"#FFF",textAlign:"center",fontFamily:"'Inter', sans-serif",fontSize:16,fontStyle:"normal",fontWeight:700,lineHeight:"normal",width:"100%",flexShrink:0},i={color:"#FFF",fontFamily:"'Inter', sans-serif",fontSize:16,fontStyle:"normal",fontWeight:400,lineHeight:"normal"};function f({title:l="Detalhes da Transação",rows:b=[],blur:s=12}){return e.jsxs("div",{style:{display:"flex",width:390,height:316,padding:"16px 16px 48px 16px",flexDirection:"column",justifyContent:"flex-start",alignItems:"flex-start",gap:10,borderRadius:"20px 20px 0 0",background:"rgba(51, 51, 51, 0.34)",backdropFilter:`blur(${s}px)`,WebkitBackdropFilter:`blur(${s}px)`,boxSizing:"border-box",position:"relative"},children:[e.jsx("div",{style:{width:"100%",display:"flex",justifyContent:"center",flexShrink:0},children:e.jsx("div",{style:{width:36,height:4,borderRadius:8,background:"#000"}})}),e.jsx("span",{style:y,children:l}),e.jsx("div",{style:{display:"flex",flexDirection:"column",width:"100%",gap:0,marginTop:28},children:b.map((o,r)=>e.jsxs("div",{children:[r>0&&e.jsx("div",{style:{width:"100%",height:1,background:"rgba(255,255,255,0.08)"}}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"14px 0"},children:[e.jsx("span",{style:i,children:o.label}),e.jsx("span",{style:i,children:o.value})]})]},r))})]})}f.__docgenInfo={description:"",methods:[],displayName:"TransactionDetailsPopup",props:{title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Detalhes da Transação'",computed:!1}},rows:{required:!1,tsType:{name:"Array",elements:[{name:"TransactionDetailRow"}],raw:"TransactionDetailRow[]"},description:"",defaultValue:{value:"[]",computed:!1}},blur:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"12",computed:!1}}}};const w={title:"Componentes/Popups/Detalhes da Transação",component:f,tags:["autodocs"],parameters:{layout:"fullscreen",backgrounds:{default:"app",values:[{name:"app",value:"#080808"},{name:"darker",value:"#000000"}]},docs:{description:{component:`
Popup de detalhes de transação. Cópia do \`CurrencyPopupCard\` com conteúdo de linhas label/valor.

**CSS:**
\`\`\`css
display: flex;
width: 390px;
height: 316px;
padding: 16px 16px 48px 16px;
justify-content: center;
align-items: flex-start;
gap: 10px;
border-radius: 20px 20px 0 0;
background: rgba(51, 51, 51, 0.34);
backdrop-filter: blur(12px);
\`\`\`

**Título:** Inter 16px / Bold 700 / \`#FFF\`

**Conteúdo:** Inter 16px / Regular 400 / \`#FFF\`
        `}}},argTypes:{title:{control:"text"},blur:{control:{type:"range",min:0,max:40,step:1}}},decorators:[l=>e.jsx("div",{style:{height:"100vh",display:"flex",alignItems:"flex-end",justifyContent:"center",background:"#080808"},children:e.jsx(l,{})})]},a={name:"Envio — Bitcoin",args:{title:"Detalhes da Transação",rows:[{label:"Quantidade:",value:"R$ 555,00"},{label:"Taxa:",value:"22 sats"}]}},t={name:"Envio — com total",args:{title:"Detalhes da Transação",rows:[{label:"Quantidade:",value:"R$ 555,00"},{label:"Taxa:",value:"22 sats"},{label:"Total:",value:"R$ 555,22"}]}},n={name:"Envio — Lightning",args:{title:"Detalhes da Transação",rows:[{label:"Quantidade:",value:"50.000 sats"},{label:"Taxa:",value:"1 sat"},{label:"Total:",value:"50.001 sats"}]}};var d,p,c;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Envio — Bitcoin',
  args: {
    title: 'Detalhes da Transação',
    rows: [{
      label: 'Quantidade:',
      value: 'R$ 555,00'
    }, {
      label: 'Taxa:',
      value: '22 sats'
    }]
  }
}`,...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var u,x,m;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Envio — com total',
  args: {
    title: 'Detalhes da Transação',
    rows: [{
      label: 'Quantidade:',
      value: 'R$ 555,00'
    }, {
      label: 'Taxa:',
      value: '22 sats'
    }, {
      label: 'Total:',
      value: 'R$ 555,22'
    }]
  }
}`,...(m=(x=t.parameters)==null?void 0:x.docs)==null?void 0:m.source}}};var g,h,v;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Envio — Lightning',
  args: {
    title: 'Detalhes da Transação',
    rows: [{
      label: 'Quantidade:',
      value: '50.000 sats'
    }, {
      label: 'Taxa:',
      value: '1 sat'
    }, {
      label: 'Total:',
      value: '50.001 sats'
    }]
  }
}`,...(v=(h=n.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};const F=["EnvioBitcoin","EnvioComTotal","EnvioLightning"];export{a as EnvioBitcoin,t as EnvioComTotal,n as EnvioLightning,F as __namedExportsOrder,w as default};
