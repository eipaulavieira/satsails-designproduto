import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as d}from"./index-DRjF_FHU.js";import{b as E,l as N,d as O,u as V,a as H,e as D}from"./eurx-DWDLGSoH.js";function s({children:r,width:t=390,height:i=504,blur:a=12,showHandle:n=!0,style:o}){return e.jsxs("div",{style:{display:"flex",flexDirection:"column",width:t,height:i,padding:"16px 16px 48px 16px",alignItems:"flex-start",gap:10,borderRadius:"20px 20px 0 0",background:"var(--color-neutral-dark-tint, rgba(51, 51, 51, 0.34))",backdropFilter:`blur(${a}px)`,WebkitBackdropFilter:`blur(${a}px)`,boxSizing:"border-box",position:"relative",overflow:"hidden",...o},children:[n&&e.jsx("div",{style:{width:"100%",display:"flex",justifyContent:"center",flexShrink:0},children:e.jsx("div",{style:{width:36,height:4,borderRadius:8,background:"#000000"}})}),r]})}function l({children:r}){return e.jsx("p",{style:{width:"100%",textAlign:"center",fontSize:16,fontWeight:500,color:"#ffffff",fontFamily:"Inter, sans-serif",margin:"0 0 28px",flexShrink:0},children:r})}function c({icon:r,label:t,hasChevron:i=!1,isSelected:a=!1,onClick:n}){return e.jsxs("div",{onClick:n,style:{display:"flex",alignItems:"center",gap:12,background:"#080808",borderRadius:10,padding:"0 16px",width:"100%",height:52,boxSizing:"border-box",cursor:n?"pointer":"default",flexShrink:0,opacity:a?1:.55,transition:"opacity 0.15s ease"},children:[e.jsx("img",{src:r,alt:t,style:{width:18,height:18,flexShrink:0}}),e.jsx("span",{style:{flex:1,fontSize:14,fontWeight:500,color:"#ffffff",fontFamily:"Inter, sans-serif",lineHeight:1.2},children:t}),i&&e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none","aria-hidden":!0,children:e.jsx("path",{d:"M7 4.5L11.5 9L7 13.5",stroke:"rgba(255,255,255,0.4)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})}s.__docgenInfo={description:"",methods:[],displayName:"PopupCard",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Conteúdo interno"},width:{required:!1,tsType:{name:"number"},description:"Largura em px (padrão 390 — largura do iPhone)",defaultValue:{value:"390",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"Altura em px (padrão 504)",defaultValue:{value:"504",computed:!1}},blur:{required:!1,tsType:{name:"number"},description:"Intensidade do blur em px (padrão 12)",defaultValue:{value:"12",computed:!1}},showHandle:{required:!1,tsType:{name:"boolean"},description:"Exibe a alça de arrastar no topo",defaultValue:{value:"true",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Override de estilos"}}};l.__docgenInfo={description:"",methods:[],displayName:"PopupTitle",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};c.__docgenInfo={description:"",methods:[],displayName:"CoinOption",props:{icon:{required:!0,tsType:{name:"string"},description:"Caminho para o ícone da moeda (src/assets/coins/*.svg)"},label:{required:!0,tsType:{name:"string"},description:"Nome da moeda"},hasChevron:{required:!1,tsType:{name:"boolean"},description:"Exibe chevron (indica sub-opções de rede)",defaultValue:{value:"false",computed:!1}},isSelected:{required:!1,tsType:{name:"boolean"},description:"Opção selecionada — opacidade 100%; não selecionada — 55%",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const _={title:"Componentes/Popups/PopupCard",component:s,parameters:{layout:"fullscreen",backgrounds:{default:"app",values:[{name:"app",value:"#080808"},{name:"darker",value:"#000000"}]},docs:{description:{component:"Card glass com `backdrop-filter: blur` usado em popups e bottom sheets. O conteúdo interno varia por contexto — use `PopupTitle` e `CoinOption` como building blocks ou passe qualquer JSX como children."}}},argTypes:{blur:{control:{type:"range",min:0,max:40,step:1},description:"Intensidade do blur em px"},width:{control:"number",description:"Largura em px"},height:{control:"number",description:"Altura em px"},showHandle:{control:"boolean",description:"Exibe alça de arrastar"}},tags:["autodocs"]},x=[{icon:E,label:"Bitcoin"},{icon:N,label:"Lightning Bitcoin"},{icon:O,label:"Depix"},{icon:V,label:"USDT",hasChevron:!0},{icon:H,label:"Liquid Bitcoin",hasChevron:!0},{icon:D,label:"EURx"}],p={name:"Enviar de:",args:{width:390,height:504,blur:12,showHandle:!0},render:r=>{const[t,i]=d.useState("Bitcoin");return e.jsx("div",{style:{height:"100vh",display:"flex",alignItems:"flex-end",justifyContent:"center",background:"#080808"},children:e.jsxs(s,{...r,children:[e.jsx(l,{children:"Enviar de:"}),x.map(({icon:a,label:n,hasChevron:o})=>e.jsx(c,{icon:a,label:n,hasChevron:o,isSelected:t===n,onClick:()=>i(n)},n))]})})}},h={name:"Receber em:",args:{width:390,height:504,blur:12,showHandle:!0},render:r=>{const[t,i]=d.useState("Bitcoin");return e.jsx("div",{style:{height:"100vh",display:"flex",alignItems:"flex-end",justifyContent:"center",background:"#080808"},children:e.jsxs(s,{...r,children:[e.jsx(l,{children:"Receber em:"}),x.map(({icon:a,label:n,hasChevron:o})=>e.jsx(c,{icon:a,label:n,hasChevron:o,isSelected:t===n,onClick:()=>i(n)},n))]})})}},f={name:"Conteúdo customizado",args:{width:390,height:320,blur:12,showHandle:!0},render:r=>e.jsx("div",{style:{height:"100vh",display:"flex",alignItems:"flex-end",justifyContent:"center",background:"#080808"},children:e.jsxs(s,{...r,children:[e.jsx(l,{children:"Confirmar envio"}),e.jsxs("div",{style:{width:"100%",background:"#080808",borderRadius:10,padding:"16px",boxSizing:"border-box",display:"flex",flexDirection:"column",gap:8},children:[e.jsx(b,{label:"Para",value:"bc1q...3f7a"}),e.jsx(b,{label:"Valor",value:"0.001 BTC"}),e.jsx(b,{label:"Taxa",value:"~R$ 0,80"}),e.jsx(b,{label:"Total",value:"R$ 120,80",highlight:!0})]}),e.jsx("button",{style:{width:"100%",height:52,borderRadius:8,background:"#FF9800",border:"none",color:"#000",fontSize:14,fontWeight:700,fontFamily:"Inter, sans-serif",cursor:"pointer",marginTop:"auto",flexShrink:0},children:"Confirmar"})]})})},g={name:"Vender:",args:{width:390,height:380,blur:12,showHandle:!0},render:r=>{const[t,i]=d.useState("Bitcoin"),a=[{icon:E,label:"Bitcoin"},{icon:O,label:"Depix"},{icon:V,label:"USDT"},{icon:H,label:"Liquid Bitcoin"}];return e.jsx("div",{style:{height:"100vh",display:"flex",alignItems:"flex-end",justifyContent:"center",background:"#080808"},children:e.jsxs(s,{...r,children:[e.jsx(l,{children:"Vender:"}),a.map(({icon:n,label:o})=>e.jsx(c,{icon:n,label:o,isSelected:t===o,onClick:()=>i(o)},o))]})})}},m={name:"All",args:{width:390,height:560,blur:12,showHandle:!0},render:r=>{const[t,i]=d.useState("Bitcoin"),[a,n]=d.useState(!1);return e.jsx("div",{style:{height:"100vh",display:"flex",alignItems:"flex-end",justifyContent:"center",background:"#080808"},children:e.jsxs(s,{...r,children:[e.jsx(l,{children:"All"}),x.map(({icon:o,label:u})=>e.jsx(c,{icon:o,label:u,isSelected:t===u,onClick:()=>i(u)},u)),e.jsx("div",{onClick:()=>n(o=>!o),style:{display:"flex",alignItems:"center",background:a?"#080808":"rgba(8, 8, 8, 0.54)",borderRadius:10,padding:"0 16px",width:"100%",height:52,boxSizing:"border-box",flexShrink:0,cursor:"pointer"},children:e.jsx("span",{style:{fontSize:12,fontWeight:700,color:"#ffffff",fontFamily:"Inter, sans-serif"},children:"Filtrar todos"})})]})})}};function b({label:r,value:t,highlight:i=!1}){return e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:13,color:"#727272",fontFamily:"Inter, sans-serif"},children:r}),e.jsx("span",{style:{fontSize:13,fontWeight:i?700:400,color:i?"#FF9800":"#ffffff",fontFamily:"Inter, sans-serif"},children:t})]})}var y,v,S;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Enviar de:',
  args: {
    width: 390,
    height: 504,
    blur: 12,
    showHandle: true
  },
  render: args => {
    const [selected, setSelected] = useState('Bitcoin');
    return <div style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
      background: '#080808'
    }}>\r
        <PopupCard {...args}>\r
          <PopupTitle>Enviar de:</PopupTitle>\r
          {COINS.map(({
          icon,
          label,
          hasChevron
        }) => <CoinOption key={label} icon={icon} label={label} hasChevron={hasChevron} isSelected={selected === label} onClick={() => setSelected(label)} />)}\r
        </PopupCard>\r
      </div>;
  }
}`,...(S=(v=p.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var C,j,k;h.parameters={...h.parameters,docs:{...(C=h.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Receber em:',
  args: {
    width: 390,
    height: 504,
    blur: 12,
    showHandle: true
  },
  render: args => {
    const [selected, setSelected] = useState('Bitcoin');
    return <div style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
      background: '#080808'
    }}>\r
        <PopupCard {...args}>\r
          <PopupTitle>Receber em:</PopupTitle>\r
          {COINS.map(({
          icon,
          label,
          hasChevron
        }) => <CoinOption key={label} icon={icon} label={label} hasChevron={hasChevron} isSelected={selected === label} onClick={() => setSelected(label)} />)}\r
        </PopupCard>\r
      </div>;
  }
}`,...(k=(j=h.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var w,I,T;f.parameters={...f.parameters,docs:{...(w=f.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Conteúdo customizado',
  args: {
    width: 390,
    height: 320,
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
      <PopupCard {...args}>\r
        <PopupTitle>Confirmar envio</PopupTitle>\r
        <div style={{
        width: '100%',
        background: '#080808',
        borderRadius: 10,
        padding: '16px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }}>\r
          <Row label="Para" value="bc1q...3f7a" />\r
          <Row label="Valor" value="0.001 BTC" />\r
          <Row label="Taxa" value="~R$ 0,80" />\r
          <Row label="Total" value="R$ 120,80" highlight />\r
        </div>\r
        <button style={{
        width: '100%',
        height: 52,
        borderRadius: 8,
        background: '#FF9800',
        border: 'none',
        color: '#000',
        fontSize: 14,
        fontWeight: 700,
        fontFamily: 'Inter, sans-serif',
        cursor: 'pointer',
        marginTop: 'auto',
        flexShrink: 0
      }}>\r
          Confirmar\r
        </button>\r
      </PopupCard>\r
    </div>
}`,...(T=(I=f.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var R,P,q;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Vender:',
  args: {
    width: 390,
    height: 380,
    blur: 12,
    showHandle: true
  },
  render: args => {
    const [selected, setSelected] = useState('Bitcoin');
    const coins = [{
      icon: bitcoinIcon,
      label: 'Bitcoin'
    }, {
      icon: depixIcon,
      label: 'Depix'
    }, {
      icon: usdtIcon,
      label: 'USDT'
    }, {
      icon: liquidBitcoinIcon,
      label: 'Liquid Bitcoin'
    }];
    return <div style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
      background: '#080808'
    }}>\r
        <PopupCard {...args}>\r
          <PopupTitle>Vender:</PopupTitle>\r
          {coins.map(({
          icon,
          label
        }) => <CoinOption key={label} icon={icon} label={label} isSelected={selected === label} onClick={() => setSelected(label)} />)}\r
        </PopupCard>\r
      </div>;
  }
}`,...(q=(P=g.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};var B,F,z;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'All',
  args: {
    width: 390,
    height: 560,
    blur: 12,
    showHandle: true
  },
  render: args => {
    const [selected, setSelected] = useState('Bitcoin');
    const [filterSelected, setFilterSelected] = useState(false);
    return <div style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
      background: '#080808'
    }}>\r
        <PopupCard {...args}>\r
          <PopupTitle>All</PopupTitle>\r
          {COINS.map(({
          icon,
          label
        }) => <CoinOption key={label} icon={icon} label={label} isSelected={selected === label} onClick={() => setSelected(label)} />)}\r
          <div onClick={() => setFilterSelected(s => !s)} style={{
          display: 'flex',
          alignItems: 'center',
          background: filterSelected ? '#080808' : 'rgba(8, 8, 8, 0.54)',
          borderRadius: 10,
          padding: '0 16px',
          width: '100%',
          height: 52,
          boxSizing: 'border-box',
          flexShrink: 0,
          cursor: 'pointer'
        }}>\r
            <span style={{
            fontSize: 12,
            fontWeight: 700,
            color: '#ffffff',
            fontFamily: 'Inter, sans-serif'
          }}>\r
              Filtrar todos\r
            </span>\r
          </div>\r
        </PopupCard>\r
      </div>;
  }
}`,...(z=(F=m.parameters)==null?void 0:F.docs)==null?void 0:z.source}}};const $=["EnviarDe","ReceberEm","ConteudoCustomizado","Vender","All"];export{m as All,f as ConteudoCustomizado,p as EnviarDe,h as ReceberEm,g as Vender,$ as __namedExportsOrder,_ as default};
