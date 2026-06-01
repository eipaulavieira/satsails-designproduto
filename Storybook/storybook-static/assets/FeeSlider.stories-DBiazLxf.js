import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as q}from"./index-DRjF_FHU.js";const O=[{time:"~24H",rate:"1.0 sat/vb"},{time:"~6H",rate:"2.5 sat/vb"},{time:"~1H",rate:"5.0 sat/vb"},{time:"~10min",rate:"10.0 sat/vb"}],n=358,g=9;function f({fees:a=O,defaultIndex:s=1,onChange:c}){const[r,A]=q.useState(s),u=(a.length>1?r/(a.length-1):0)*n,b=a[r],C=v=>{const t=Number(v.target.value);A(t),c==null||c(a[t],t)},x={color:"#D1D2D2",fontFamily:"'Inter', sans-serif",fontSize:11,fontWeight:400,lineHeight:"120%"};return e.jsxs("div",{style:{display:"flex",width:359,flexDirection:"column",alignItems:"flex-start",gap:8},children:[e.jsxs("div",{style:{position:"relative",width:n,height:20,display:"flex",alignItems:"center"},children:[e.jsx("div",{style:{position:"absolute",left:0,top:"50%",transform:"translateY(-50%)",width:n,height:6,borderRadius:3,background:"#333"}}),u>0&&e.jsx("div",{style:{position:"absolute",left:0,top:"50%",transform:"translateY(-50%)",width:u,height:6,borderRadius:3,background:"#FF9800",pointerEvents:"none"}}),a.map((v,t)=>{const Y=t/(a.length-1)*n;return e.jsx("div",{style:{position:"absolute",left:Y-3,top:"50%",transform:"translateY(-50%)",width:6,height:6,borderRadius:"50%",background:t<=r?"#FF9800":"#555",pointerEvents:"none"}},t)}),e.jsx("div",{style:{position:"absolute",left:u-g,top:"50%",transform:"translateY(-50%)",width:g*2,height:g*2,borderRadius:"50%",background:"#FF9800",boxShadow:"0 0 0 3px rgba(255,152,0,0.22)",pointerEvents:"none"}}),e.jsx("input",{type:"range",min:0,max:a.length-1,step:1,value:r,onChange:C,style:{position:"absolute",left:0,top:0,width:"100%",height:"100%",opacity:0,cursor:"pointer",margin:0,padding:0}})]}),e.jsxs("div",{style:{display:"flex",width:n,justifyContent:"space-between",alignItems:"center"},children:[e.jsx("span",{style:x,children:"Lento"}),e.jsxs("span",{style:{...x,color:"#FFF",textAlign:"center"},children:[e.jsx("span",{style:{color:"#FF9800"},children:b.time}),": ",b.rate]}),e.jsx("span",{style:x,children:"Rápido"})]})]})}f.__docgenInfo={description:"",methods:[],displayName:"FeeSlider",props:{fees:{required:!1,tsType:{name:"Array",elements:[{name:"FeeOption"}],raw:"FeeOption[]"},description:"",defaultValue:{value:`[
  { time: '~24H',   rate: '1.0 sat/vb'  },
  { time: '~6H',    rate: '2.5 sat/vb'  },
  { time: '~1H',    rate: '5.0 sat/vb'  },
  { time: '~10min', rate: '10.0 sat/vb' },
]`,computed:!1}},defaultIndex:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(fee: FeeOption, index: number) => void",signature:{arguments:[{type:{name:"FeeOption"},name:"fee"},{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""}}};const V={title:"Componentes/Progresso/Seletor de Taxa",component:f,parameters:{layout:"centered",backgrounds:{default:"app",values:[{name:"app",value:"#080808"},{name:"darker",value:"#000000"}]},docs:{description:{component:"Barra de seleção de taxa de rede Bitcoin. Trilho cinza (6px) com preenchimento laranja (12px). O label central exibe o tempo estimado e a taxa em sat/vb conforme a posição selecionada."}}},argTypes:{defaultIndex:{control:{type:"range",min:0,max:3,step:1},description:"Posição inicial (0 = Lento, 3 = Rápido)"}},tags:["autodocs"],decorators:[a=>e.jsx("div",{style:{padding:"24px 16px",background:"#080808",borderRadius:12},children:e.jsx(a,{})})]},o={name:"Padrão (~6H)",args:{defaultIndex:1}},i={name:"Lento (~24H)",args:{defaultIndex:0}},d={name:"Normal (~1H)",args:{defaultIndex:2}},l={name:"Rápido (~10min)",args:{defaultIndex:3}},m={name:"Taxas customizadas",args:{defaultIndex:1,fees:[{time:"~48H",rate:"0.5 sat/vb"},{time:"~12H",rate:"1.5 sat/vb"},{time:"~2H",rate:"4.0 sat/vb"},{time:"~15min",rate:"8.0 sat/vb"},{time:"~5min",rate:"15.0 sat/vb"}]}},p={name:"Todas as posições",parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:32,padding:"24px 16px",background:"#080808",borderRadius:12},children:O.map((a,s)=>e.jsx(f,{defaultIndex:s},s))})};var h,y,F;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Padrão (~6H)',
  args: {
    defaultIndex: 1
  }
}`,...(F=(y=o.parameters)==null?void 0:y.docs)==null?void 0:F.source}}};var j,H,I;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Lento (~24H)',
  args: {
    defaultIndex: 0
  }
}`,...(I=(H=i.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var T,R,S;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Normal (~1H)',
  args: {
    defaultIndex: 2
  }
}`,...(S=(R=d.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};var w,E,_;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Rápido (~10min)',
  args: {
    defaultIndex: 3
  }
}`,...(_=(E=l.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var k,D,L;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Taxas customizadas',
  args: {
    defaultIndex: 1,
    fees: [{
      time: '~48H',
      rate: '0.5 sat/vb'
    }, {
      time: '~12H',
      rate: '1.5 sat/vb'
    }, {
      time: '~2H',
      rate: '4.0 sat/vb'
    }, {
      time: '~15min',
      rate: '8.0 sat/vb'
    }, {
      time: '~5min',
      rate: '15.0 sat/vb'
    }]
  }
}`,...(L=(D=m.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var P,z,N;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Todas as posições',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 32,
    padding: '24px 16px',
    background: '#080808',
    borderRadius: 12
  }}>\r
      {DEFAULT_FEES.map((_, i) => <FeeSlider key={i} defaultIndex={i} />)}\r
    </div>
}`,...(N=(z=p.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};const K=["Padrao","Lento","Normal","Rapido","TaxasCustomizadas","TodasPosicoes"];export{i as Lento,d as Normal,o as Padrao,l as Rapido,m as TaxasCustomizadas,p as TodasPosicoes,K as __namedExportsOrder,V as default};
