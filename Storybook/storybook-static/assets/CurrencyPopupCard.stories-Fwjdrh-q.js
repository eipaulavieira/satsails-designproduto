import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as C}from"./index-DRjF_FHU.js";function d({children:r,width:n=390,height:a=523,blur:t=12,showHandle:g=!0,style:x}){return e.jsxs("div",{style:{display:"flex",flexDirection:"column",width:n,height:a,padding:"16px 16px 48px 16px",justifyContent:"flex-start",alignItems:"flex-start",gap:10,borderRadius:"20px 20px 0 0",background:"rgba(51, 51, 51, 0.34)",backdropFilter:`blur(${t}px)`,WebkitBackdropFilter:`blur(${t}px)`,boxSizing:"border-box",position:"relative",...x},children:[g&&e.jsx("div",{style:{width:"100%",display:"flex",justifyContent:"center",flexShrink:0},children:e.jsx("div",{style:{width:36,height:4,borderRadius:8,background:"#000000"}})}),r]})}function o({children:r}){return e.jsx("p",{style:{width:"100%",textAlign:"center",fontSize:16,fontWeight:500,color:"#ffffff",fontFamily:"Inter, sans-serif",margin:0,flexShrink:0},children:r})}function l({code:r,isSelected:n=!1,onClick:a}){return e.jsx("div",{onClick:a,style:{display:"flex",alignItems:"center",justifyContent:"space-between",background:"#080808",borderRadius:10,padding:"0 16px",width:"100%",height:52,boxSizing:"border-box",cursor:a?"pointer":"default",flexShrink:0,opacity:n?1:.55,transition:"opacity 0.15s ease"},children:e.jsx("span",{style:{fontSize:14,fontWeight:500,color:"#ffffff",fontFamily:"Inter, sans-serif"},children:r})})}d.__docgenInfo={description:"",methods:[],displayName:"CurrencyPopupCard",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},width:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"390",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"523",computed:!1}},blur:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"12",computed:!1}},showHandle:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};o.__docgenInfo={description:"",methods:[],displayName:"CurrencyTitle",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};l.__docgenInfo={description:"",methods:[],displayName:"CurrencyOption",props:{code:{required:!0,tsType:{name:"string"},description:""},isSelected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const v={title:"Componentes/CurrencyPopupCard",component:d,parameters:{layout:"fullscreen",backgrounds:{default:"app",values:[{name:"app",value:"#080808"},{name:"darker",value:"#000000"}]},docs:{description:{component:"Variante do PopupCard para seleção de moeda/unidade. Sem ícones — exibe apenas a sigla da moeda. O estado selecionado usa fundo `#080808` em 100% de opacidade com checkmark laranja."}}},argTypes:{blur:{control:{type:"range",min:0,max:40,step:1},description:"Intensidade do blur em px"},width:{control:"number",description:"Largura em px"},height:{control:"number",description:"Altura em px"},showHandle:{control:"boolean",description:"Exibe alça de arrastar"}},tags:["autodocs"]},y=["USD","BRL","EUR","CHF","GBP","SATS"],i={name:"Ver quantidade em:",args:{width:390,height:523,blur:12,showHandle:!0},render:r=>{const[n,a]=C.useState("BRL");return e.jsx("div",{style:{height:"100vh",display:"flex",alignItems:"flex-end",justifyContent:"center",background:"#080808"},children:e.jsxs(d,{...r,children:[e.jsx(o,{children:"Ver quantidade em:"}),y.map(t=>e.jsx(l,{code:t,isSelected:n===t,onClick:()=>a(t)},t))]})})}},s={name:"Sem seleção (referência)",args:{width:390,height:523,blur:12,showHandle:!0},render:r=>e.jsx("div",{style:{height:"100vh",display:"flex",alignItems:"flex-end",justifyContent:"center",background:"#080808"},children:e.jsxs(d,{...r,children:[e.jsx(o,{children:"Ver quantidade em:"}),y.map(n=>e.jsx(l,{code:n},n))]})})};var c,u,p;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Ver quantidade em:',
  args: {
    width: 390,
    height: 523,
    blur: 12,
    showHandle: true
  },
  render: args => {
    const [selected, setSelected] = useState('BRL');
    return <div style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
      background: '#080808'
    }}>\r
        <CurrencyPopupCard {...args}>\r
          <CurrencyTitle>Ver quantidade em:</CurrencyTitle>\r
          {CURRENCIES.map(code => <CurrencyOption key={code} code={code} isSelected={selected === code} onClick={() => setSelected(code)} />)}\r
        </CurrencyPopupCard>\r
      </div>;
  }
}`,...(p=(u=i.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var m,f,h;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Sem seleção (referência)',
  args: {
    width: 390,
    height: 523,
    blur: 12,
    showHandle: true
  },
  render: args => <div style={{
    height: '100vh',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    background: '#080808'
  }}>\r
      <CurrencyPopupCard {...args}>\r
        <CurrencyTitle>Ver quantidade em:</CurrencyTitle>\r
        {CURRENCIES.map(code => <CurrencyOption key={code} code={code} />)}\r
      </CurrencyPopupCard>\r
    </div>
}`,...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const j=["VerQuantidadeEm","SemSelecao"];export{s as SemSelecao,i as VerQuantidadeEm,j as __namedExportsOrder,v as default};
