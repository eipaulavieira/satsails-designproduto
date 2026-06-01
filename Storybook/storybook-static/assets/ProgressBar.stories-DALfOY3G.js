import{j as a}from"./jsx-runtime-DiklIkkE.js";import"./index-DRjF_FHU.js";function e({label:r,fillPx:E=100}){const I=Math.min(Math.max(E,0),300);return a.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:10},children:[r&&a.jsx("span",{style:{fontSize:13,fontWeight:600,color:"#fff",letterSpacing:"0.01em",fontFamily:"'Inter', sans-serif"},children:r}),a.jsx("div",{style:{width:300,height:3,background:"#1c1c1c",borderRadius:99},children:a.jsx("div",{style:{width:I,height:3,background:"#00C853",borderRadius:99,transition:"width 0.4s ease"}})})]})}e.__docgenInfo={description:"",methods:[],displayName:"ProgressBar",props:{label:{required:!1,tsType:{name:"string"},description:""},fillPx:{required:!1,tsType:{name:"number"},description:"Largura do preenchimento em px (máx 300) — espelha o prototype diretamente",defaultValue:{value:"100",computed:!1}}}};const S={title:"Componentes/Progresso/Barra de Progresso",component:e,parameters:{layout:"centered",backgrounds:{default:"app",values:[{name:"app",value:"#080808"},{name:"darker",value:"#000000"}]},docs:{description:{component:"Barra de progresso do fluxo de configuração de conta. Trilho escuro (#1c1c1c), preenchimento verde (#00C853), 300×3px. Espelha exatamente o `.email-progress-header` do protótipo app.html."}}},argTypes:{label:{control:"text",description:"Rótulo acima da barra"},fillPx:{control:{type:"range",min:0,max:300,step:1},description:"Largura do preenchimento em px (0–300)"}},tags:["autodocs"],decorators:[r=>a.jsx("div",{style:{padding:"24px 16px",background:"#080808",borderRadius:12},children:a.jsx(r,{})})]},o={name:"Etapa 1 — Configuração de conta (50px)",args:{label:"Configuração de conta",fillPx:50}},s={name:"Etapa 2 — Inserir e-mail (100px)",args:{label:"Conta Individual",fillPx:100}},n={name:"Etapa 3 — Verificar código (200px)",args:{label:"Conta Individual",fillPx:200}},t={name:"Completa (300px)",args:{label:"Configuração de conta",fillPx:300}},l={name:"Fluxo completo (todas as etapas)",parameters:{controls:{disable:!0}},render:()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:28},children:[a.jsx(e,{label:"Configuração de conta",fillPx:50}),a.jsx(e,{label:"Conta Individual",fillPx:100}),a.jsx(e,{label:"Conta Individual",fillPx:200}),a.jsx(e,{label:"Configuração de conta",fillPx:300})]})};var i,d,c;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Etapa 1 — Configuração de conta (50px)',
  args: {
    label: 'Configuração de conta',
    fillPx: 50
  }
}`,...(c=(d=o.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,m,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Etapa 2 — Inserir e-mail (100px)',
  args: {
    label: 'Conta Individual',
    fillPx: 100
  }
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var x,g,f;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Etapa 3 — Verificar código (200px)',
  args: {
    label: 'Conta Individual',
    fillPx: 200
  }
}`,...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var C,b,P;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Completa (300px)',
  args: {
    label: 'Configuração de conta',
    fillPx: 300
  }
}`,...(P=(b=t.parameters)==null?void 0:b.docs)==null?void 0:P.source}}};var h,v,y;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Fluxo completo (todas as etapas)',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 28
  }}>\r
      <ProgressBar label="Configuração de conta" fillPx={50} />\r
      <ProgressBar label="Conta Individual" fillPx={100} />\r
      <ProgressBar label="Conta Individual" fillPx={200} />\r
      <ProgressBar label="Configuração de conta" fillPx={300} />\r
    </div>
}`,...(y=(v=l.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};const k=["Etapa1ConfiguracaoConta","Etapa2InserirEmail","Etapa3VerificarCodigo","Completa","FluxoCompleto"];export{t as Completa,o as Etapa1ConfiguracaoConta,s as Etapa2InserirEmail,n as Etapa3VerificarCodigo,l as FluxoCompleto,k as __namedExportsOrder,S as default};
