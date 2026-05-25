import{j as e}from"./jsx-runtime-DiklIkkE.js";import"./index-DRjF_FHU.js";function i({label:r,hint:o,error:t,leftAddon:s,rightAddon:a,id:l,disabled:n,style:d,...b}){const c=l??(r==null?void 0:r.toLowerCase().replace(/\s+/g,"-")),u=!!t;return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6,fontFamily:'"Inter", -apple-system, sans-serif'},children:[r&&e.jsx("label",{htmlFor:c,style:{fontSize:13,fontWeight:500,color:"#0C0B0D"},children:r}),e.jsxs("div",{style:{position:"relative",display:"flex",alignItems:"center"},children:[s&&e.jsx("div",{style:{position:"absolute",left:12,color:"#9ca3af",display:"flex",alignItems:"center"},children:s}),e.jsx("input",{id:c,disabled:n,...b,style:{width:"100%",height:40,padding:`0 ${a?40:12}px 0 ${s?40:12}px`,fontSize:14,color:"#0C0B0D",background:n?"#f9f9f9":"#ffffff",border:`1px solid ${u?"#CF1C0E":"#D1D2D2"}`,borderRadius:8,outline:"none",cursor:n?"not-allowed":"text",opacity:n?.6:1,fontFamily:'"Inter", -apple-system, sans-serif',transition:"border-color 0.15s, box-shadow 0.15s",...d},onFocus:p=>{p.currentTarget.style.borderColor=u?"#CF1C0E":"#F7931A",p.currentTarget.style.boxShadow=u?"0 0 0 3px rgba(207,28,14,0.10)":"0 0 0 3px rgba(247,147,26,0.12)"},onBlur:p=>{p.currentTarget.style.borderColor=u?"#CF1C0E":"#D1D2D2",p.currentTarget.style.boxShadow="none"}}),a&&e.jsx("div",{style:{position:"absolute",right:12,color:"#9ca3af",display:"flex",alignItems:"center"},children:a})]}),t&&e.jsx("p",{style:{fontSize:12,color:"#CF1C0E",margin:0},children:t}),o&&!t&&e.jsx("p",{style:{fontSize:12,color:"#9ca3af",margin:0},children:o})]})}function j({label:r,hint:o,error:t,id:s,disabled:a,...l}){const n=s??(r==null?void 0:r.toLowerCase().replace(/\s+/g,"-")),d=!!t;return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6,fontFamily:'"Inter", -apple-system, sans-serif'},children:[r&&e.jsx("label",{htmlFor:n,style:{fontSize:13,fontWeight:500,color:"#0C0B0D"},children:r}),e.jsx("textarea",{id:n,disabled:a,...l,style:{width:"100%",padding:"10px 12px",fontSize:14,color:"#0C0B0D",background:a?"#f9f9f9":"#ffffff",border:`1px solid ${d?"#CF1C0E":"#D1D2D2"}`,borderRadius:8,outline:"none",resize:"vertical",minHeight:80,fontFamily:'"Inter", -apple-system, sans-serif',lineHeight:1.5,transition:"border-color 0.15s, box-shadow 0.15s"}}),t&&e.jsx("p",{style:{fontSize:12,color:"#CF1C0E",margin:0},children:t}),o&&!t&&e.jsx("p",{style:{fontSize:12,color:"#9ca3af",margin:0},children:o})]})}function w({label:r,hint:o,error:t,options:s,id:a,disabled:l,...n}){const d=a??(r==null?void 0:r.toLowerCase().replace(/\s+/g,"-")),b=!!t;return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6,fontFamily:'"Inter", -apple-system, sans-serif'},children:[r&&e.jsx("label",{htmlFor:d,style:{fontSize:13,fontWeight:500,color:"#0C0B0D"},children:r}),e.jsxs("div",{style:{position:"relative"},children:[e.jsx("select",{id:d,disabled:l,...n,style:{width:"100%",height:40,padding:"0 36px 0 12px",fontSize:14,color:"#0C0B0D",background:l?"#f9f9f9":"#ffffff",border:`1px solid ${b?"#CF1C0E":"#D1D2D2"}`,borderRadius:8,outline:"none",appearance:"none",cursor:l?"not-allowed":"pointer",fontFamily:'"Inter", -apple-system, sans-serif'},children:s.map(c=>e.jsx("option",{value:c.value,children:c.label},c.value))}),e.jsx("svg",{style:{position:"absolute",right:12,top:"50%",transform:"translateY(-50%)",pointerEvents:"none",color:"#9ca3af"},width:16,height:16,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,children:e.jsx("path",{d:"M6 9l6 6 6-6"})})]}),t&&e.jsx("p",{style:{fontSize:12,color:"#CF1C0E",margin:0},children:t}),o&&!t&&e.jsx("p",{style:{fontSize:12,color:"#9ca3af",margin:0},children:o})]})}i.__docgenInfo={description:"",methods:[],displayName:"Input",props:{label:{required:!1,tsType:{name:"string"},description:""},hint:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},leftAddon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},rightAddon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};j.__docgenInfo={description:"",methods:[],displayName:"Textarea",props:{label:{required:!1,tsType:{name:"string"},description:""},hint:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""}}};w.__docgenInfo={description:"",methods:[],displayName:"Select",props:{label:{required:!1,tsType:{name:"string"},description:""},hint:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ value: string; label: string }",signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}],raw:"{ value: string; label: string }[]"},description:""}}};const Y={title:"Componentes/Formulários",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"**06 / Componentes** — Inputs, Textarea e Select para formulários da Satsails."}}}},h={render:()=>e.jsxs("div",{style:{width:320,display:"flex",flexDirection:"column",gap:20},children:[e.jsx(i,{label:"Endereço Bitcoin",placeholder:"bc1q…",hint:"Aceita endereços on-chain e Lightning"}),e.jsx(i,{label:"Valor (BTC)",placeholder:"0.001",type:"number"})]})},f={render:()=>e.jsx("div",{style:{width:320},children:e.jsx(i,{label:"Endereço",placeholder:"bc1q…",error:"Endereço inválido. Verifique e tente novamente.",defaultValue:"endereço-errado"})})},m={render:()=>e.jsxs("div",{style:{width:320,display:"flex",flexDirection:"column",gap:20},children:[e.jsx(i,{label:"Valor (sats)",placeholder:"1000",leftAddon:e.jsx("span",{style:{fontSize:14,fontWeight:600},children:"₿"})}),e.jsx(i,{label:"Valor em BRL",placeholder:"100,00",leftAddon:e.jsx("span",{style:{fontSize:13,fontWeight:600},children:"R$"})})]})},g={render:()=>e.jsx("div",{style:{width:320},children:e.jsx(i,{label:"ID da transação",value:"a3f8c1d2e9b4…",disabled:!0})})},x={render:()=>e.jsx("div",{style:{width:320},children:e.jsx(j,{label:"Nota da transação",placeholder:"Adicione uma nota pessoal…",hint:"Visível apenas para você",rows:4})})},y={render:()=>e.jsx("div",{style:{width:320},children:e.jsx(w,{label:"Rede",options:[{value:"onchain",label:"Bitcoin On-chain"},{value:"lightning",label:"Lightning Network"},{value:"liquid",label:"Liquid Network"},{value:"depix",label:"DePix"}],hint:"Escolha a rede de envio"})})},v={render:()=>e.jsxs("div",{style:{width:360,display:"flex",flexDirection:"column",gap:16,padding:24,border:"1px solid #e8e8e8",borderRadius:12},children:[e.jsx("h3",{style:{margin:"0 0 4px",fontSize:16,fontWeight:600,color:"#0C0B0D"},children:"Enviar Bitcoin"}),e.jsx(w,{label:"Rede",options:[{value:"onchain",label:"Bitcoin On-chain"},{value:"lightning",label:"Lightning Network"},{value:"liquid",label:"Liquid Network"}]}),e.jsx(i,{label:"Destinatário",placeholder:"Endereço ou invoice Lightning…"}),e.jsx(i,{label:"Valor",placeholder:"0.001",leftAddon:e.jsx("span",{style:{fontSize:13,fontWeight:600},children:"BTC"})}),e.jsx(j,{label:"Nota (opcional)",placeholder:"Adicione uma nota…",rows:3})]}),parameters:{layout:"centered"}};var D,S,C;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 320,
    display: 'flex',
    flexDirection: 'column',
    gap: 20
  }}>\r
      <Input label="Endereço Bitcoin" placeholder="bc1q…" hint="Aceita endereços on-chain e Lightning" />\r
      <Input label="Valor (BTC)" placeholder="0.001" type="number" />\r
    </div>
}`,...(C=(S=h.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var I,T,q;f.parameters={...f.parameters,docs:{...(I=f.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 320
  }}>\r
      <Input label="Endereço" placeholder="bc1q…" error="Endereço inválido. Verifique e tente novamente." defaultValue="endereço-errado" />\r
    </div>
}`,...(q=(T=f.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var E,F,B;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 320,
    display: 'flex',
    flexDirection: 'column',
    gap: 20
  }}>\r
      <Input label="Valor (sats)" placeholder="1000" leftAddon={<span style={{
      fontSize: 14,
      fontWeight: 600
    }}>₿</span>} />\r
      <Input label="Valor em BRL" placeholder="100,00" leftAddon={<span style={{
      fontSize: 13,
      fontWeight: 600
    }}>R$</span>} />\r
    </div>
}`,...(B=(F=m.parameters)==null?void 0:F.docs)==null?void 0:B.source}}};var R,z,N;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 320
  }}>\r
      <Input label="ID da transação" value="a3f8c1d2e9b4…" disabled />\r
    </div>
}`,...(N=(z=g.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};var L,W,k;x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 320
  }}>\r
      <Textarea label="Nota da transação" placeholder="Adicione uma nota pessoal…" hint="Visível apenas para você" rows={4} />\r
    </div>
}`,...(k=(W=x.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};var A,V,_;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 320
  }}>\r
      <Select label="Rede" options={[{
      value: 'onchain',
      label: 'Bitcoin On-chain'
    }, {
      value: 'lightning',
      label: 'Lightning Network'
    }, {
      value: 'liquid',
      label: 'Liquid Network'
    }, {
      value: 'depix',
      label: 'DePix'
    }]} hint="Escolha a rede de envio" />\r
    </div>
}`,...(_=(V=y.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var $,O,H;v.parameters={...v.parameters,docs:{...($=v.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 360,
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    padding: 24,
    border: '1px solid #e8e8e8',
    borderRadius: 12
  }}>\r
      <h3 style={{
      margin: '0 0 4px',
      fontSize: 16,
      fontWeight: 600,
      color: '#0C0B0D'
    }}>Enviar Bitcoin</h3>\r
      <Select label="Rede" options={[{
      value: 'onchain',
      label: 'Bitcoin On-chain'
    }, {
      value: 'lightning',
      label: 'Lightning Network'
    }, {
      value: 'liquid',
      label: 'Liquid Network'
    }]} />\r
      <Input label="Destinatário" placeholder="Endereço ou invoice Lightning…" />\r
      <Input label="Valor" placeholder="0.001" leftAddon={<span style={{
      fontSize: 13,
      fontWeight: 600
    }}>BTC</span>} />\r
      <Textarea label="Nota (opcional)" placeholder="Adicione uma nota…" rows={3} />\r
    </div>,
  parameters: {
    layout: 'centered'
  }
}`,...(H=(O=v.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};const G=["TextInput","WithError","WithAddon","Disabled","TextareaField","SelectField","FullForm"];export{g as Disabled,v as FullForm,y as SelectField,h as TextInput,x as TextareaField,m as WithAddon,f as WithError,G as __namedExportsOrder,Y as default};
