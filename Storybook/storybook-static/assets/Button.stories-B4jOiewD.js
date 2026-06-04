import{j as e}from"./jsx-runtime-DiklIkkE.js";import"./index-DRjF_FHU.js";const H={display:"inline-flex",alignItems:"center",justifyContent:"center",gap:8,fontFamily:'"Inter", -apple-system, sans-serif',fontWeight:600,borderRadius:8,border:"1px solid transparent",cursor:"pointer",transition:"all 0.15s ease",whiteSpace:"nowrap",outline:"none"},J={primary:{background:"#F7931A",borderColor:"#F7931A",color:"#ffffff"},secondary:{background:"#ffffff",borderColor:"#D1D2D2",color:"#0C0B0D"},ghost:{background:"transparent",borderColor:"transparent",color:"#0C0B0D"},danger:{background:"#CF1C0E",borderColor:"#CF1C0E",color:"#ffffff"}},K={sm:{height:32,padding:"0 12px",fontSize:12},md:{height:40,padding:"0 16px",fontSize:14},lg:{height:48,padding:"0 24px",fontSize:15}};function r({variant:P="primary",size:E="md",loading:a=!1,fullWidth:W=!1,leftIcon:F,rightIcon:G,children:L,disabled:_,style:A,...O}){const m=_||a;return e.jsxs("button",{...O,disabled:m,style:{...H,...J[P],...K[E],width:W?"100%":void 0,opacity:m?.5:1,cursor:m?"not-allowed":"pointer",...A},children:[a&&e.jsxs("svg",{width:14,height:14,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2.5,style:{animation:"spin 0.8s linear infinite"},children:[e.jsx("path",{d:"M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"}),e.jsx("style",{children:"@keyframes spin { to { transform: rotate(360deg); } }"})]}),!a&&F,L,!a&&G]})}r.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'ghost' | 'danger'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'ghost'"},{name:"literal",value:"'danger'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},leftIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},rightIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const X={title:"Componentes/Ações/Botões/Base",component:r,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Botão genérico da Satsails com variantes Primary, Secondary, Ghost e Danger, e tamanhos sm/md/lg."}}},argTypes:{variant:{control:"select",options:["primary","secondary","ghost","danger"]},size:{control:"select",options:["sm","md","lg"]},loading:{control:"boolean"},fullWidth:{control:"boolean"},disabled:{control:"boolean"}}},s={args:{variant:"primary",size:"md",children:"Enviar Bitcoin"}},n={args:{variant:"secondary",size:"md",children:"Ver detalhes"}},t={args:{variant:"ghost",size:"md",children:"Cancelar"}},o={args:{variant:"danger",size:"md",children:"Remover carteira"}},i={args:{variant:"primary",size:"md",loading:!0,children:"Processando…"}},d={args:{variant:"primary",size:"md",disabled:!0,children:"Indisponível"}},l={name:"Todas as variantes",render:()=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:12,alignItems:"center"},children:[e.jsx(r,{variant:"primary",children:"Primary"}),e.jsx(r,{variant:"secondary",children:"Secondary"}),e.jsx(r,{variant:"ghost",children:"Ghost"}),e.jsx(r,{variant:"danger",children:"Danger"})]}),parameters:{controls:{disable:!0}}},c={name:"Todos os tamanhos",render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[e.jsx(r,{size:"sm",children:"Small"}),e.jsx(r,{size:"md",children:"Medium"}),e.jsx(r,{size:"lg",children:"Large"})]}),parameters:{controls:{disable:!0}}};var p,u,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Enviar Bitcoin'
  }
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,f,y;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    size: 'md',
    children: 'Ver detalhes'
  }
}`,...(y=(f=n.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var v,x,b;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    size: 'md',
    children: 'Cancelar'
  }
}`,...(b=(x=t.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var z,B,S;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    size: 'md',
    children: 'Remover carteira'
  }
}`,...(S=(B=o.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var T,j,R;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'md',
    loading: true,
    children: 'Processando…'
  }
}`,...(R=(j=i.parameters)==null?void 0:j.docs)==null?void 0:R.source}}};var C,w,D;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'md',
    disabled: true,
    children: 'Indisponível'
  }
}`,...(D=(w=d.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var I,M,V;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Todas as variantes',
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 12,
    alignItems: 'center'
  }}>\r
      <Button variant="primary">Primary</Button>\r
      <Button variant="secondary">Secondary</Button>\r
      <Button variant="ghost">Ghost</Button>\r
      <Button variant="danger">Danger</Button>\r
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(V=(M=l.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var k,q,N;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Todos os tamanhos',
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 12
  }}>\r
      <Button size="sm">Small</Button>\r
      <Button size="md">Medium</Button>\r
      <Button size="lg">Large</Button>\r
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(N=(q=c.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};const Y=["Primary","Secondary","Ghost","Danger","Loading","Disabled","TodasVariantes","TodosTamanhos"];export{o as Danger,d as Disabled,t as Ghost,i as Loading,s as Primary,n as Secondary,l as TodasVariantes,c as TodosTamanhos,Y as __namedExportsOrder,X as default};
