import{j as e}from"./jsx-runtime-DiklIkkE.js";import"./index-DRjF_FHU.js";const R={sm:16,md:24,lg:32};function i({children:s,padding:n="md",border:a=!0,shadow:r=!1,style:l}){return e.jsx("div",{style:{background:"#ffffff",borderRadius:12,padding:R[n],border:a?"1px solid #e8e8e8":"none",boxShadow:r?"0 4px 16px rgba(0,0,0,0.06)":"none",fontFamily:'"Inter", -apple-system, sans-serif',...l},children:s})}function t({label:s,value:n,change:a,changePositive:r=!0,icon:l}){return e.jsx(i,{padding:"md",children:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:12,color:"#6b7280",margin:"0 0 6px",fontWeight:500},children:s}),e.jsx("p",{style:{fontSize:24,fontWeight:700,color:"#0C0B0D",margin:0,letterSpacing:"-0.02em"},children:n}),a&&e.jsxs("p",{style:{fontSize:12,color:r?"#00C853":"#CF1C0E",margin:"4px 0 0",fontWeight:500},children:[r?"↑":"↓"," ",a]})]}),l&&e.jsx("div",{style:{width:40,height:40,borderRadius:10,background:"#FFF8F0",display:"flex",alignItems:"center",justifyContent:"center",color:"#F7931A"},children:l})]})})}function T({title:s,items:n}){return e.jsxs(i,{padding:"md",children:[s&&e.jsx("p",{style:{fontSize:13,fontWeight:600,color:"#0C0B0D",margin:"0 0 16px"},children:s}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:0},children:n.map((a,r)=>e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 0",borderBottom:r<n.length-1?"1px solid #f3f4f6":"none"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:13,color:"#0C0B0D",margin:0,fontWeight:500},children:a.label}),a.sub&&e.jsx("p",{style:{fontSize:11,color:"#9ca3af",margin:"2px 0 0"},children:a.sub})]}),e.jsx("span",{style:{fontSize:13,fontWeight:600,color:"#0C0B0D"},children:a.value})]},r))})]})}i.__docgenInfo={description:"",methods:[],displayName:"Card",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},padding:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},border:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},shadow:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};t.__docgenInfo={description:"",methods:[],displayName:"MetricCard",props:{label:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"string"},description:""},change:{required:!1,tsType:{name:"string"},description:""},changePositive:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};T.__docgenInfo={description:"",methods:[],displayName:"ListCard",props:{title:{required:!1,tsType:{name:"string"},description:""},items:{required:!0,tsType:{name:"Array",elements:[{name:"ListCardItem"}],raw:"ListCardItem[]"},description:""}}};const w={title:"Componentes/Cards/Base",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"**05 / Componentes** — Cards base, métrica e lista para a interface da Satsails."}}}},o={render:()=>e.jsxs(i,{style:{width:320},children:[e.jsx("h3",{style:{margin:"0 0 8px",fontSize:15,fontWeight:600,color:"#0C0B0D"},children:"Carteira Principal"}),e.jsx("p",{style:{margin:0,fontSize:13,color:"#6b7280",lineHeight:1.6},children:"Saldo disponível na carteira on-chain. Clique para ver transações recentes."})]})},d={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16},children:[e.jsx(t,{label:"Saldo BTC",value:"0.0842 BTC",change:"2.4% nas últimas 24h",changePositive:!0,icon:e.jsx("span",{style:{fontSize:18},children:"₿"})}),e.jsx(t,{label:"Saldo em BRL",value:"R$ 24.381",change:"1.2% hoje",changePositive:!1,icon:e.jsx("span",{style:{fontSize:18},children:"R$"})}),e.jsx(t,{label:"Transações",value:"142",change:"12 este mês",changePositive:!0}),e.jsx(t,{label:"Lightning",value:"12.500 sats",change:"Capacidade disponível",changePositive:!0,icon:e.jsx("span",{style:{fontSize:18},children:"⚡"})})]}),parameters:{layout:"padded"}},c={render:()=>e.jsx(T,{title:"Transações Recentes",items:[{label:"Recebido de Alice",value:"+0.005 BTC",sub:"Há 2 horas · On-chain"},{label:"Enviado para exchange",value:"-0.012 BTC",sub:"Há 1 dia · On-chain"},{label:"Pagamento Lightning",value:"-1.200 sats",sub:"Há 2 dias · Lightning"},{label:"PIX recebido",value:"+R$ 500",sub:"Há 3 dias · DePix"}]}),parameters:{layout:"padded"}},p={render:()=>e.jsx(i,{shadow:!0,style:{width:320},children:e.jsx("p",{style:{margin:0,fontSize:13,color:"#6b7280"},children:"Card com sombra para modais e overlays."})})};var u,m,h;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Card style={{
    width: 320
  }}>\r
      <h3 style={{
      margin: '0 0 8px',
      fontSize: 15,
      fontWeight: 600,
      color: '#0C0B0D'
    }}>Carteira Principal</h3>\r
      <p style={{
      margin: 0,
      fontSize: 13,
      color: '#6b7280',
      lineHeight: 1.6
    }}>\r
        Saldo disponível na carteira on-chain. Clique para ver transações recentes.\r
      </p>\r
    </Card>
}`,...(h=(m=o.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var g,f,y;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 16
  }}>\r
      <MetricCard label="Saldo BTC" value="0.0842 BTC" change="2.4% nas últimas 24h" changePositive icon={<span style={{
      fontSize: 18
    }}>₿</span>} />\r
      <MetricCard label="Saldo em BRL" value="R$ 24.381" change="1.2% hoje" changePositive={false} icon={<span style={{
      fontSize: 18
    }}>R$</span>} />\r
      <MetricCard label="Transações" value="142" change="12 este mês" changePositive />\r
      <MetricCard label="Lightning" value="12.500 sats" change="Capacidade disponível" changePositive icon={<span style={{
      fontSize: 18
    }}>⚡</span>} />\r
    </div>,
  parameters: {
    layout: 'padded'
  }
}`,...(y=(f=d.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var x,b,v;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <ListCard title="Transações Recentes" items={[{
    label: 'Recebido de Alice',
    value: '+0.005 BTC',
    sub: 'Há 2 horas · On-chain'
  }, {
    label: 'Enviado para exchange',
    value: '-0.012 BTC',
    sub: 'Há 1 dia · On-chain'
  }, {
    label: 'Pagamento Lightning',
    value: '-1.200 sats',
    sub: 'Há 2 dias · Lightning'
  }, {
    label: 'PIX recebido',
    value: '+R$ 500',
    sub: 'Há 3 dias · DePix'
  }]} />,
  parameters: {
    layout: 'padded'
  }
}`,...(v=(b=c.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var C,S,j;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Card shadow style={{
    width: 320
  }}>\r
      <p style={{
      margin: 0,
      fontSize: 13,
      color: '#6b7280'
    }}>Card com sombra para modais e overlays.</p>\r
    </Card>
}`,...(j=(S=p.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};const P=["Base","Metric","List","WithShadow"];export{o as Base,c as List,d as Metric,p as WithShadow,P as __namedExportsOrder,w as default};
