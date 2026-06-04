import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as d}from"./index-DRjF_FHU.js";import{b as D,l as L,d as V,u as H,a as O,e as N}from"./eurx-DWDLGSoH.js";function s({children:t,width:n=390,height:i=504,blur:a=12,showHandle:r=!0,style:o}){return e.jsxs("div",{style:{display:"flex",flexDirection:"column",width:n,height:i,padding:"16px 16px 48px 16px",alignItems:"flex-start",gap:10,borderRadius:"20px 20px 0 0",background:"var(--color-neutral-dark-tint, rgba(51, 51, 51, 0.34))",backdropFilter:`blur(${a}px)`,WebkitBackdropFilter:`blur(${a}px)`,boxSizing:"border-box",position:"relative",overflow:"hidden",...o},children:[r&&e.jsx("div",{style:{width:"100%",display:"flex",justifyContent:"center",flexShrink:0},children:e.jsx("div",{style:{width:36,height:4,borderRadius:8,background:"#000000"}})}),t]})}function l({children:t}){return e.jsx("p",{style:{width:"100%",textAlign:"center",fontSize:16,fontWeight:500,color:"#ffffff",fontFamily:"Inter, sans-serif",margin:"0 0 28px",flexShrink:0},children:t})}function c({icon:t,label:n,hasChevron:i=!1,isSelected:a=!1,onClick:r}){return e.jsxs("div",{onClick:r,style:{display:"flex",alignItems:"center",gap:12,background:"#080808",borderRadius:10,padding:"0 16px",width:"100%",height:52,boxSizing:"border-box",cursor:r?"pointer":"default",flexShrink:0,opacity:a?1:.55,transition:"opacity 0.15s ease"},children:[e.jsx("img",{src:t,alt:n,style:{width:18,height:18,flexShrink:0}}),e.jsx("span",{style:{flex:1,fontSize:14,fontWeight:500,color:"#ffffff",fontFamily:"Inter, sans-serif",lineHeight:1.2},children:n}),i&&e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none","aria-hidden":!0,children:e.jsx("path",{d:"M7 4.5L11.5 9L7 13.5",stroke:"rgba(255,255,255,0.4)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})}s.__docgenInfo={description:"",methods:[],displayName:"PopupCard",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Conteúdo interno"},width:{required:!1,tsType:{name:"number"},description:"Largura em px (padrão 390 — largura do iPhone)",defaultValue:{value:"390",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"Altura em px (padrão 504)",defaultValue:{value:"504",computed:!1}},blur:{required:!1,tsType:{name:"number"},description:"Intensidade do blur em px (padrão 12)",defaultValue:{value:"12",computed:!1}},showHandle:{required:!1,tsType:{name:"boolean"},description:"Exibe a alça de arrastar no topo",defaultValue:{value:"true",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Override de estilos"}}};l.__docgenInfo={description:"",methods:[],displayName:"PopupTitle",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};c.__docgenInfo={description:"",methods:[],displayName:"CoinOption",props:{icon:{required:!0,tsType:{name:"string"},description:"Caminho para o ícone da moeda (src/assets/coins/*.svg)"},label:{required:!0,tsType:{name:"string"},description:"Nome da moeda"},hasChevron:{required:!1,tsType:{name:"boolean"},description:"Exibe chevron (indica sub-opções de rede)",defaultValue:{value:"false",computed:!1}},isSelected:{required:!1,tsType:{name:"boolean"},description:"Opção selecionada — opacidade 100%; não selecionada — 55%",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const W=({component:t,variant:n})=>e.jsxs("div",{style:{padding:"16px 24px 12px",fontFamily:"'Inter', sans-serif",fontSize:13,fontWeight:600,color:"#727272",letterSpacing:"0.02em",borderBottom:"1px solid rgba(255,255,255,0.06)"},children:[e.jsx("span",{style:{color:"#D1D2D2"},children:t}),e.jsx("span",{style:{color:"#444",margin:"0 6px"},children:"—"}),e.jsx("span",{style:{color:"#727272"},children:n})]}),b=({text:t})=>e.jsx("div",{style:{position:"absolute",top:16,left:24,fontFamily:"'Inter', sans-serif",fontSize:12,fontWeight:600,color:"#727272",letterSpacing:"0.04em",textTransform:"uppercase"},children:t}),U={title:"Componentes/Popups/PopupCard",component:s,parameters:{layout:"fullscreen",backgrounds:{default:"app",values:[{name:"app",value:"#080808"},{name:"darker",value:"#000000"}]},docs:{description:{component:"Card glass com `backdrop-filter: blur` usado em popups e bottom sheets. O conteúdo interno varia por contexto — use `PopupTitle` e `CoinOption` como building blocks ou passe qualquer JSX como children."}}},argTypes:{blur:{control:{type:"range",min:0,max:40,step:1},description:"Intensidade do blur em px"},width:{control:"number",description:"Largura em px"},height:{control:"number",description:"Altura em px"},showHandle:{control:"boolean",description:"Exibe alça de arrastar"}},tags:["autodocs"]},y=[{icon:D,label:"Bitcoin"},{icon:L,label:"Lightning Bitcoin"},{icon:V,label:"Depix"},{icon:H,label:"USDT",hasChevron:!0},{icon:O,label:"Liquid Bitcoin",hasChevron:!0},{icon:N,label:"EURx"}],u={name:"Enviar de:",args:{width:390,height:504,blur:12,showHandle:!0},render:t=>{const[n,i]=d.useState("Bitcoin");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",minHeight:"100vh",background:"#080808"},children:[e.jsx(W,{component:"PopupCard",variant:"Enviar de:"}),e.jsx("div",{style:{flex:1,display:"flex",alignItems:"flex-end",justifyContent:"center"},children:e.jsxs(s,{...t,children:[e.jsx(l,{children:"Enviar de:"}),y.map(({icon:a,label:r,hasChevron:o})=>e.jsx(c,{icon:a,label:r,hasChevron:o,isSelected:n===r,onClick:()=>i(r)},r))]})})]})}},h={name:"Receber em:",args:{width:390,height:504,blur:12,showHandle:!0},render:t=>{const[n,i]=d.useState("Bitcoin");return e.jsxs("div",{style:{height:"100vh",display:"flex",alignItems:"flex-end",justifyContent:"center",background:"#080808",position:"relative"},children:[e.jsx(b,{text:"Receber"}),e.jsxs(s,{...t,children:[e.jsx(l,{children:"Receber em:"}),y.map(({icon:a,label:r,hasChevron:o})=>e.jsx(c,{icon:a,label:r,hasChevron:o,isSelected:n===r,onClick:()=>i(r)},r))]})]})}},f={name:"Conteúdo customizado",args:{width:390,height:320,blur:12,showHandle:!0},render:t=>e.jsxs("div",{style:{height:"100vh",display:"flex",alignItems:"flex-end",justifyContent:"center",background:"#080808",position:"relative"},children:[e.jsx(b,{text:"Confirmar envio"}),e.jsxs(s,{...t,children:[e.jsx(l,{children:"Confirmar envio"}),e.jsxs("div",{style:{width:"100%",background:"#080808",borderRadius:10,padding:"16px",boxSizing:"border-box",display:"flex",flexDirection:"column",gap:8},children:[e.jsx(g,{label:"Para",value:"bc1q...3f7a"}),e.jsx(g,{label:"Valor",value:"0.001 BTC"}),e.jsx(g,{label:"Taxa",value:"~R$ 0,80"}),e.jsx(g,{label:"Total",value:"R$ 120,80",highlight:!0})]}),e.jsx("button",{style:{width:"100%",height:52,borderRadius:8,background:"#FF9800",border:"none",color:"#000",fontSize:14,fontWeight:700,fontFamily:"Inter, sans-serif",cursor:"pointer",marginTop:"auto",flexShrink:0},children:"Confirmar"})]})]})},x={name:"Vender:",args:{width:390,height:380,blur:12,showHandle:!0},render:t=>{const[n,i]=d.useState("Bitcoin"),a=[{icon:D,label:"Bitcoin"},{icon:V,label:"Depix"},{icon:H,label:"USDT"},{icon:O,label:"Liquid Bitcoin"}];return e.jsxs("div",{style:{height:"100vh",display:"flex",alignItems:"flex-end",justifyContent:"center",background:"#080808",position:"relative"},children:[e.jsx(b,{text:"Vender"}),e.jsxs(s,{...t,children:[e.jsx(l,{children:"Vender:"}),a.map(({icon:r,label:o})=>e.jsx(c,{icon:r,label:o,isSelected:n===o,onClick:()=>i(o)},o))]})]})}},m={name:"All",args:{width:390,height:560,blur:12,showHandle:!0},render:t=>{const[n,i]=d.useState("Bitcoin"),[a,r]=d.useState(!1);return e.jsx("div",{style:{height:"100vh",display:"flex",alignItems:"flex-end",justifyContent:"center",background:"#080808"},children:e.jsxs(s,{...t,children:[e.jsx(l,{children:"All"}),y.map(({icon:o,label:p})=>e.jsx(c,{icon:o,label:p,isSelected:n===p,onClick:()=>i(p)},p)),e.jsx("div",{onClick:()=>r(o=>!o),style:{display:"flex",alignItems:"center",background:a?"#080808":"rgba(8, 8, 8, 0.54)",borderRadius:10,padding:"0 16px",width:"100%",height:52,boxSizing:"border-box",flexShrink:0,cursor:"pointer"},children:e.jsx("span",{style:{fontSize:12,fontWeight:700,color:"#ffffff",fontFamily:"Inter, sans-serif"},children:"Filtrar todos"})})]})})}};function g({label:t,value:n,highlight:i=!1}){return e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:13,color:"#727272",fontFamily:"Inter, sans-serif"},children:t}),e.jsx("span",{style:{fontSize:13,fontWeight:i?700:400,color:i?"#FF9800":"#ffffff",fontFamily:"Inter, sans-serif"},children:n})]})}var v,S,C;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      background: '#080808'
    }}>\r
        <PageTitle component="PopupCard" variant="Enviar de:" />\r
        <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center'
      }}>\r
        <PopupCard {...args}>\r
          <PopupTitle>Enviar de:</PopupTitle>\r
          {COINS.map(({
            icon,
            label,
            hasChevron
          }) => <CoinOption key={label} icon={icon} label={label} hasChevron={hasChevron} isSelected={selected === label} onClick={() => setSelected(label)} />)}\r
        </PopupCard>\r
        </div>\r
      </div>;
  }
}`,...(C=(S=u.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var j,k,w;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
      background: '#080808',
      position: 'relative'
    }}>\r
        <StoryLabel text="Receber" />\r
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
}`,...(w=(k=h.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var I,T,R;f.parameters={...f.parameters,docs:{...(I=f.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
    background: '#080808',
    position: 'relative'
  }}>\r
      <StoryLabel text="Confirmar envio" />\r
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
}`,...(R=(T=f.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};var P,F,B;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
      background: '#080808',
      position: 'relative'
    }}>\r
        <StoryLabel text="Vender" />\r
        <PopupCard {...args}>\r
          <PopupTitle>Vender:</PopupTitle>\r
          {coins.map(({
          icon,
          label
        }) => <CoinOption key={label} icon={icon} label={label} isSelected={selected === label} onClick={() => setSelected(label)} />)}\r
        </PopupCard>\r
      </div>;
  }
}`,...(B=(F=x.parameters)==null?void 0:F.docs)==null?void 0:B.source}}};var q,z,E;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(E=(z=m.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};const J=["EnviarDe","ReceberEm","ConteudoCustomizado","Vender","All"];export{m as All,f as ConteudoCustomizado,u as EnviarDe,h as ReceberEm,x as Vender,J as __namedExportsOrder,U as default};
