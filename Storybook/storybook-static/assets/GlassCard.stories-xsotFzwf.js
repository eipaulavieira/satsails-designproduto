import{j as r}from"./jsx-runtime-DiklIkkE.js";import{G as a}from"./GlassCard-DLqtvZXq.js";import"./index-DRjF_FHU.js";const L={title:"Componentes/Cards/GlassCard",component:a,parameters:{layout:"centered",backgrounds:{default:"dark",values:[{name:"dark",value:"#080808"},{name:"dark-gradient",value:"linear-gradient(135deg, #0C0B0D 0%, #1a1a2e 100%)"},{name:"light",value:"#F3F4F6"}]}},argTypes:{blur:{control:{type:"range",min:0,max:40,step:1},description:"Intensidade do blur (px)"},background:{control:"color",description:"Cor de fundo rgba"},borderColor:{control:"color",description:"Cor da borda"},borderRadius:{control:{type:"range",min:0,max:32,step:2},description:"Raio da borda (px)"},padding:{control:"text",description:"Padding interno"}},tags:["autodocs"]},n=()=>r.jsxs("div",{style:{color:"#fff",fontFamily:"Inter, sans-serif",minWidth:260},children:[r.jsx("p",{style:{fontSize:11,fontWeight:600,color:"#FF9800",letterSpacing:"0.08em",textTransform:"uppercase",margin:"0 0 8px"},children:"Saldo disponível"}),r.jsx("p",{style:{fontSize:28,fontWeight:700,margin:"0 0 4px",letterSpacing:"-0.02em"},children:"R$ 4.280,00"}),r.jsx("p",{style:{fontSize:13,color:"rgba(209,210,210,0.7)",margin:0},children:"≈ 0.00412 BTC"})]}),W=()=>r.jsxs("div",{style:{color:"#fff",fontFamily:"Inter, sans-serif",minWidth:280},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:16},children:[r.jsx("div",{style:{width:40,height:40,borderRadius:"50%",background:"rgba(255,152,0,0.18)",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:r.jsx("path",{d:"M9 2v14M2 9h14",stroke:"#FF9800",strokeWidth:"1.8",strokeLinecap:"round"})})}),r.jsxs("div",{children:[r.jsx("p",{style:{fontSize:13,fontWeight:700,margin:0},children:"Receber Bitcoin"}),r.jsx("p",{style:{fontSize:11,color:"#727272",margin:0},children:"Compartilhe seu endereço"})]})]}),r.jsx("div",{style:{height:1,background:"rgba(255,255,255,0.08)",margin:"0 0 16px"}}),r.jsx("p",{style:{fontSize:11,color:"#727272",margin:0,lineHeight:1.6},children:"Envie este QR Code ou endereço para quem vai te pagar."})]}),o={name:"Padrão",args:{blur:12,background:"rgba(51, 51, 51, 0.34)",borderColor:"rgba(255, 255, 255, 0.08)",borderRadius:16,padding:"20px 24px"},render:e=>r.jsx(a,{...e,children:r.jsx(n,{})})},s={name:"Blur Forte",args:{blur:24,background:"rgba(51, 51, 51, 0.34)",borderColor:"rgba(255, 255, 255, 0.10)",borderRadius:20,padding:"24px 28px"},render:e=>r.jsx(a,{...e,children:r.jsx(n,{})})},d={name:"Blur Suave",args:{blur:6,background:"rgba(51, 51, 51, 0.34)",borderColor:"rgba(255, 255, 255, 0.06)",borderRadius:12,padding:"20px 24px"},render:e=>r.jsx(a,{...e,children:r.jsx(n,{})})},t={name:"Com Ações",args:{blur:12,background:"rgba(51, 51, 51, 0.34)",borderColor:"rgba(255, 255, 255, 0.08)",borderRadius:16,padding:"20px 24px"},render:e=>r.jsx(a,{...e,children:r.jsx(W,{})})},i={name:"Tint Laranja",args:{blur:12,background:"rgba(255, 152, 0, 0.18)",borderColor:"rgba(255, 152, 0, 0.25)",borderRadius:16,padding:"20px 24px"},render:e=>r.jsx(a,{...e,children:r.jsx(n,{})})},l={name:"Tint Verde",args:{blur:12,background:"rgba(0, 200, 83, 0.18)",borderColor:"rgba(0, 200, 83, 0.25)",borderRadius:16,padding:"20px 24px"},render:e=>r.jsx(a,{...e,children:r.jsx(n,{})})},g={name:"Empilhados",parameters:{layout:"fullscreen"},render:()=>r.jsxs("div",{style:{minHeight:"100vh",background:"linear-gradient(135deg, #0C0B0D 0%, #1a1218 60%, #0a1628 100%)",display:"flex",flexDirection:"column",gap:12,padding:32,alignItems:"center",justifyContent:"center"},children:[r.jsx(a,{blur:12,background:"rgba(51,51,51,0.34)",borderColor:"rgba(255,255,255,0.08)",borderRadius:16,padding:"20px 24px",width:320,children:r.jsx(n,{})}),r.jsx(a,{blur:12,background:"rgba(255,152,0,0.18)",borderColor:"rgba(255,152,0,0.25)",borderRadius:16,padding:"20px 24px",width:320,children:r.jsx(W,{})}),r.jsx(a,{blur:12,background:"rgba(0,200,83,0.18)",borderColor:"rgba(0,200,83,0.25)",borderRadius:16,padding:"20px 24px",width:320,children:r.jsxs("div",{style:{color:"#fff",fontFamily:"Inter, sans-serif"},children:[r.jsx("p",{style:{fontSize:11,fontWeight:600,color:"#00C853",letterSpacing:"0.08em",textTransform:"uppercase",margin:"0 0 8px"},children:"Transação confirmada"}),r.jsx("p",{style:{fontSize:18,fontWeight:700,margin:"0 0 4px"},children:"+ R$ 150,00"}),r.jsx("p",{style:{fontSize:12,color:"#727272",margin:0},children:"há 2 minutos · Lightning"})]})})]})};var p,c,b;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Padrão',
  args: {
    blur: 12,
    background: 'rgba(51, 51, 51, 0.34)',
    borderColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: 16,
    padding: '20px 24px'
  },
  render: args => <GlassCard {...args}>\r
      <ExampleContent />\r
    </GlassCard>
}`,...(b=(c=o.parameters)==null?void 0:c.docs)==null?void 0:b.source}}};var u,m,x;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Blur Forte',
  args: {
    blur: 24,
    background: 'rgba(51, 51, 51, 0.34)',
    borderColor: 'rgba(255, 255, 255, 0.10)',
    borderRadius: 20,
    padding: '24px 28px'
  },
  render: args => <GlassCard {...args}>\r
      <ExampleContent />\r
    </GlassCard>
}`,...(x=(m=s.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var C,h,f;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Blur Suave',
  args: {
    blur: 6,
    background: 'rgba(51, 51, 51, 0.34)',
    borderColor: 'rgba(255, 255, 255, 0.06)',
    borderRadius: 12,
    padding: '20px 24px'
  },
  render: args => <GlassCard {...args}>\r
      <ExampleContent />\r
    </GlassCard>
}`,...(f=(h=d.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var j,y,k;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Com Ações',
  args: {
    blur: 12,
    background: 'rgba(51, 51, 51, 0.34)',
    borderColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: 16,
    padding: '20px 24px'
  },
  render: args => <GlassCard {...args}>\r
      <ActionContent />\r
    </GlassCard>
}`,...(k=(y=t.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var v,S,R;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Tint Laranja',
  args: {
    blur: 12,
    background: 'rgba(255, 152, 0, 0.18)',
    borderColor: 'rgba(255, 152, 0, 0.25)',
    borderRadius: 16,
    padding: '20px 24px'
  },
  render: args => <GlassCard {...args}>\r
      <ExampleContent />\r
    </GlassCard>
}`,...(R=(S=i.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};var G,B,F;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Tint Verde',
  args: {
    blur: 12,
    background: 'rgba(0, 200, 83, 0.18)',
    borderColor: 'rgba(0, 200, 83, 0.25)',
    borderRadius: 16,
    padding: '20px 24px'
  },
  render: args => <GlassCard {...args}>\r
      <ExampleContent />\r
    </GlassCard>
}`,...(F=(B=l.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var T,E,z;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Empilhados',
  parameters: {
    layout: 'fullscreen'
  },
  render: () => <div style={{
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0C0B0D 0%, #1a1218 60%, #0a1628 100%)',
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    padding: 32,
    alignItems: 'center',
    justifyContent: 'center'
  }}>\r
      <GlassCard blur={12} background="rgba(51,51,51,0.34)" borderColor="rgba(255,255,255,0.08)" borderRadius={16} padding="20px 24px" width={320}>\r
        <ExampleContent />\r
      </GlassCard>\r
      <GlassCard blur={12} background="rgba(255,152,0,0.18)" borderColor="rgba(255,152,0,0.25)" borderRadius={16} padding="20px 24px" width={320}>\r
        <ActionContent />\r
      </GlassCard>\r
      <GlassCard blur={12} background="rgba(0,200,83,0.18)" borderColor="rgba(0,200,83,0.25)" borderRadius={16} padding="20px 24px" width={320}>\r
        <div style={{
        color: '#fff',
        fontFamily: 'Inter, sans-serif'
      }}>\r
          <p style={{
          fontSize: 11,
          fontWeight: 600,
          color: '#00C853',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          margin: '0 0 8px'
        }}>Transação confirmada</p>\r
          <p style={{
          fontSize: 18,
          fontWeight: 700,
          margin: '0 0 4px'
        }}>+ R$ 150,00</p>\r
          <p style={{
          fontSize: 12,
          color: '#727272',
          margin: 0
        }}>há 2 minutos · Lightning</p>\r
        </div>\r
      </GlassCard>\r
    </div>
}`,...(z=(E=g.parameters)==null?void 0:E.docs)==null?void 0:z.source}}};const D=["Padrao","BlurForte","BlurSuave","ComAcoes","TintLaranja","TintVerde","Empilhados"];export{s as BlurForte,d as BlurSuave,t as ComAcoes,g as Empilhados,o as Padrao,i as TintLaranja,l as TintVerde,D as __namedExportsOrder,L as default};
