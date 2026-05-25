import{j as r}from"./jsx-runtime-DiklIkkE.js";import"./index-DRjF_FHU.js";function a({children:e,blur:g=12,background:W="rgba(51, 51, 51, 0.34)",borderColor:q="rgba(255, 255, 255, 0.08)",borderRadius:V=16,padding:A="20px 24px",width:L="100%",minHeight:P,className:$}){return r.jsx("div",{className:$,style:{background:W,backdropFilter:`blur(${g}px)`,WebkitBackdropFilter:`blur(${g}px)`,border:`1px solid ${q}`,borderRadius:V,padding:A,width:L,minHeight:P,boxSizing:"border-box",position:"relative",overflow:"hidden"},children:e})}a.__docgenInfo={description:"",methods:[],displayName:"GlassCard",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Conteúdo interno do card"},blur:{required:!1,tsType:{name:"number"},description:"Intensidade do blur em px",defaultValue:{value:"12",computed:!1}},background:{required:!1,tsType:{name:"string"},description:"Cor de fundo (rgba)",defaultValue:{value:"'rgba(51, 51, 51, 0.34)'",computed:!1}},borderColor:{required:!1,tsType:{name:"string"},description:"Cor da borda",defaultValue:{value:"'rgba(255, 255, 255, 0.08)'",computed:!1}},borderRadius:{required:!1,tsType:{name:"number"},description:"Raio da borda em px",defaultValue:{value:"16",computed:!1}},padding:{required:!1,tsType:{name:"string"},description:"Padding interno",defaultValue:{value:"'20px 24px'",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Largura",defaultValue:{value:"'100%'",computed:!1}},minHeight:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Altura mínima"},className:{required:!1,tsType:{name:"string"},description:"Classe extra"}}};const N={title:"Componentes/GlassCard",component:a,parameters:{layout:"centered",backgrounds:{default:"dark",values:[{name:"dark",value:"#080808"},{name:"dark-gradient",value:"linear-gradient(135deg, #0C0B0D 0%, #1a1a2e 100%)"},{name:"light",value:"#F3F4F6"}]}},argTypes:{blur:{control:{type:"range",min:0,max:40,step:1},description:"Intensidade do blur (px)"},background:{control:"color",description:"Cor de fundo rgba"},borderColor:{control:"color",description:"Cor da borda"},borderRadius:{control:{type:"range",min:0,max:32,step:2},description:"Raio da borda (px)"},padding:{control:"text",description:"Padding interno"}},tags:["autodocs"]},n=()=>r.jsxs("div",{style:{color:"#fff",fontFamily:"Inter, sans-serif",minWidth:260},children:[r.jsx("p",{style:{fontSize:11,fontWeight:600,color:"#FF9800",letterSpacing:"0.08em",textTransform:"uppercase",margin:"0 0 8px"},children:"Saldo disponível"}),r.jsx("p",{style:{fontSize:28,fontWeight:700,margin:"0 0 4px",letterSpacing:"-0.02em"},children:"R$ 4.280,00"}),r.jsx("p",{style:{fontSize:13,color:"rgba(209,210,210,0.7)",margin:0},children:"≈ 0.00412 BTC"})]}),I=()=>r.jsxs("div",{style:{color:"#fff",fontFamily:"Inter, sans-serif",minWidth:280},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:16},children:[r.jsx("div",{style:{width:40,height:40,borderRadius:"50%",background:"rgba(255,152,0,0.18)",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:r.jsx("path",{d:"M9 2v14M2 9h14",stroke:"#FF9800",strokeWidth:"1.8",strokeLinecap:"round"})})}),r.jsxs("div",{children:[r.jsx("p",{style:{fontSize:13,fontWeight:700,margin:0},children:"Receber Bitcoin"}),r.jsx("p",{style:{fontSize:11,color:"#727272",margin:0},children:"Compartilhe seu endereço"})]})]}),r.jsx("div",{style:{height:1,background:"rgba(255,255,255,0.08)",margin:"0 0 16px"}}),r.jsx("p",{style:{fontSize:11,color:"#727272",margin:0,lineHeight:1.6},children:"Envie este QR Code ou endereço para quem vai te pagar."})]}),o={name:"Padrão",args:{blur:12,background:"rgba(51, 51, 51, 0.34)",borderColor:"rgba(255, 255, 255, 0.08)",borderRadius:16,padding:"20px 24px"},render:e=>r.jsx(a,{...e,children:r.jsx(n,{})})},d={name:"Blur Forte",args:{blur:24,background:"rgba(51, 51, 51, 0.34)",borderColor:"rgba(255, 255, 255, 0.10)",borderRadius:20,padding:"24px 28px"},render:e=>r.jsx(a,{...e,children:r.jsx(n,{})})},s={name:"Blur Suave",args:{blur:6,background:"rgba(51, 51, 51, 0.34)",borderColor:"rgba(255, 255, 255, 0.06)",borderRadius:12,padding:"20px 24px"},render:e=>r.jsx(a,{...e,children:r.jsx(n,{})})},t={name:"Com Ações",args:{blur:12,background:"rgba(51, 51, 51, 0.34)",borderColor:"rgba(255, 255, 255, 0.08)",borderRadius:16,padding:"20px 24px"},render:e=>r.jsx(a,{...e,children:r.jsx(I,{})})},i={name:"Tint Laranja",args:{blur:12,background:"rgba(255, 152, 0, 0.18)",borderColor:"rgba(255, 152, 0, 0.25)",borderRadius:16,padding:"20px 24px"},render:e=>r.jsx(a,{...e,children:r.jsx(n,{})})},l={name:"Tint Verde",args:{blur:12,background:"rgba(0, 200, 83, 0.18)",borderColor:"rgba(0, 200, 83, 0.25)",borderRadius:16,padding:"20px 24px"},render:e=>r.jsx(a,{...e,children:r.jsx(n,{})})},p={name:"Empilhados",parameters:{layout:"fullscreen"},render:()=>r.jsxs("div",{style:{minHeight:"100vh",background:"linear-gradient(135deg, #0C0B0D 0%, #1a1218 60%, #0a1628 100%)",display:"flex",flexDirection:"column",gap:12,padding:32,alignItems:"center",justifyContent:"center"},children:[r.jsx(a,{blur:12,background:"rgba(51,51,51,0.34)",borderColor:"rgba(255,255,255,0.08)",borderRadius:16,padding:"20px 24px",width:320,children:r.jsx(n,{})}),r.jsx(a,{blur:12,background:"rgba(255,152,0,0.18)",borderColor:"rgba(255,152,0,0.25)",borderRadius:16,padding:"20px 24px",width:320,children:r.jsx(I,{})}),r.jsx(a,{blur:12,background:"rgba(0,200,83,0.18)",borderColor:"rgba(0,200,83,0.25)",borderRadius:16,padding:"20px 24px",width:320,children:r.jsxs("div",{style:{color:"#fff",fontFamily:"Inter, sans-serif"},children:[r.jsx("p",{style:{fontSize:11,fontWeight:600,color:"#00C853",letterSpacing:"0.08em",textTransform:"uppercase",margin:"0 0 8px"},children:"Transação confirmada"}),r.jsx("p",{style:{fontSize:18,fontWeight:700,margin:"0 0 4px"},children:"+ R$ 150,00"}),r.jsx("p",{style:{fontSize:12,color:"#727272",margin:0},children:"há 2 minutos · Lightning"})]})})]})};var c,u,m;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(m=(u=o.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var b,x,f;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(f=(x=d.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var C,h,y;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(y=(h=s.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var j,v,k;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(k=(v=t.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var R,S,T;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(T=(S=i.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var G,F,B;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(B=(F=l.parameters)==null?void 0:F.docs)==null?void 0:B.source}}};var w,E,z;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(z=(E=p.parameters)==null?void 0:E.docs)==null?void 0:z.source}}};const _=["Padrao","BlurForte","BlurSuave","ComAcoes","TintLaranja","TintVerde","Empilhados"];export{d as BlurForte,s as BlurSuave,t as ComAcoes,p as Empilhados,o as Padrao,i as TintLaranja,l as TintVerde,_ as __namedExportsOrder,N as default};
