import{j as e}from"./jsx-runtime-DiklIkkE.js";import"./index-DRjF_FHU.js";const C=()=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"18",viewBox:"0 0 10 18",fill:"none",children:e.jsx("path",{d:"M9 1L1 9L9 17",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})});function t({title:q,onBack:l}){return e.jsxs("button",{onClick:l,style:{display:"flex",alignItems:"center",gap:6,height:50,padding:"0 16px",background:"none",border:"none",cursor:l?"pointer":"default",WebkitTapHighlightColor:"transparent",flexShrink:0},children:[e.jsx(C,{}),e.jsx("span",{style:{fontFamily:"'Inter', sans-serif",fontSize:18,fontStyle:"normal",fontWeight:700,color:"#FAFDFE",lineHeight:"normal",whiteSpace:"nowrap"},children:q})]})}t.__docgenInfo={description:"",methods:[],displayName:"NavHeader",props:{title:{required:!0,tsType:{name:"string"},description:""},onBack:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const I={title:"Componentes/Navegação/NavHeader",component:t,tags:["autodocs"],parameters:{layout:"fullscreen",backgrounds:{default:"app",values:[{name:"app",value:"#080808"},{name:"darker",value:"#000000"}]},docs:{description:{component:`
Cabeçalho de navegação usado em todas as telas internas do app.
Exibe um chevron stroke esquerdo e o título da tela.

**Dimensões:** altura 50px, padding 0 16px, gap 6px entre chevron e título.

**CSS:**
\`\`\`css
display: flex;
align-items: center;
gap: 6px;
height: 50px;
padding: 0 16px;
background: none;
border: none;

/* Chevron */
width: 10px; height: 18px;
stroke: white; stroke-width: 1.8;
stroke-linecap: round; stroke-linejoin: round;

/* Título */
color: #FAFDFE;
font-family: Inter;
font-size: 18px;
font-weight: 700;
line-height: normal;
\`\`\`

**Flutter:**
\`\`\`dart
AppBar(
  backgroundColor: const Color(0xFF080808),
  elevation: 0,
  leading: IconButton(
    icon: const Icon(Icons.chevron_left, color: Colors.white, size: 24),
    onPressed: () => Navigator.pop(context),
  ),
  title: const Text(
    'Título da tela',
    style: TextStyle(
      fontFamily: 'Inter',
      fontSize: 18,
      fontWeight: FontWeight.w700,
      color: Color(0xFFFAFDFE),
    ),
  ),
  titleSpacing: 0,
)
\`\`\`
        `}}},argTypes:{title:{control:"text",description:"Título da tela"}}},r={name:"Padrão",args:{title:"Enviar"}},n={name:"Enviar",args:{title:"Enviar"}},a={name:"Lightning Bitcoin",args:{title:"Lightning Bitcoin"}},o={name:"Liquid Bitcoin",args:{title:"Liquid Bitcoin"}},i={name:"Depix",args:{title:"Depix"}},s={name:"USDT",args:{title:"USDT"}},c={name:"Todas as telas de envio",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",background:"#080808"},children:[e.jsx(t,{title:"Enviar"}),e.jsx(t,{title:"Lightning Bitcoin"}),e.jsx(t,{title:"Liquid Bitcoin"}),e.jsx(t,{title:"Depix"}),e.jsx(t,{title:"USDT"})]})};var d,p,g;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Padrão',
  args: {
    title: 'Enviar'
  }
}`,...(g=(p=r.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var m,u,x;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Enviar',
  args: {
    title: 'Enviar'
  }
}`,...(x=(u=n.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var h,v,f;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Lightning Bitcoin',
  args: {
    title: 'Lightning Bitcoin'
  }
}`,...(f=(v=a.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var S,T,D;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Liquid Bitcoin',
  args: {
    title: 'Liquid Bitcoin'
  }
}`,...(D=(T=o.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var L,y,k;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Depix',
  args: {
    title: 'Depix'
  }
}`,...(k=(y=i.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var B,F,w;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'USDT',
  args: {
    title: 'USDT'
  }
}`,...(w=(F=s.parameters)==null?void 0:F.docs)==null?void 0:w.source}}};var E,j,b;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Todas as telas de envio',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    background: '#080808'
  }}>\r
      <NavHeader title="Enviar" />\r
      <NavHeader title="Lightning Bitcoin" />\r
      <NavHeader title="Liquid Bitcoin" />\r
      <NavHeader title="Depix" />\r
      <NavHeader title="USDT" />\r
    </div>
}`,...(b=(j=c.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};const U=["Padrao","Enviar","LightningBitcoin","LiquidBitcoin","Depix","USDT","TodasAsTelas"];export{i as Depix,n as Enviar,a as LightningBitcoin,o as LiquidBitcoin,r as Padrao,c as TodasAsTelas,s as USDT,U as __namedExportsOrder,I as default};
