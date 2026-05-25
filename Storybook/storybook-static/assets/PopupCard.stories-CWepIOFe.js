import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as d}from"./index-DRjF_FHU.js";function s({children:i,width:t=390,height:o=504,blur:r=12,showHandle:a=!0,style:n}){return e.jsxs("div",{style:{display:"flex",flexDirection:"column",width:t,height:o,padding:"16px 16px 48px 16px",alignItems:"flex-start",gap:10,borderRadius:"20px 20px 0 0",background:"var(--color-neutral-dark-tint, rgba(51, 51, 51, 0.34))",backdropFilter:`blur(${r}px)`,WebkitBackdropFilter:`blur(${r}px)`,boxSizing:"border-box",position:"relative",overflow:"hidden",...n},children:[a&&e.jsx("div",{style:{width:"100%",display:"flex",justifyContent:"center",flexShrink:0},children:e.jsx("div",{style:{width:36,height:4,borderRadius:8,background:"#000000"}})}),i]})}function c({children:i}){return e.jsx("p",{style:{width:"100%",textAlign:"center",fontSize:16,fontWeight:500,color:"#ffffff",fontFamily:"Inter, sans-serif",margin:0,flexShrink:0},children:i})}function u({icon:i,label:t,hasChevron:o=!1,isSelected:r=!1,onClick:a}){return e.jsxs("div",{onClick:a,style:{display:"flex",alignItems:"center",gap:12,background:"#080808",borderRadius:10,padding:"0 16px",width:"100%",height:52,boxSizing:"border-box",cursor:a?"pointer":"default",flexShrink:0,opacity:r?1:.55,transition:"opacity 0.15s ease"},children:[e.jsx("img",{src:i,alt:t,style:{width:18,height:18,flexShrink:0}}),e.jsx("span",{style:{flex:1,fontSize:14,fontWeight:500,color:"#ffffff",fontFamily:"Inter, sans-serif",lineHeight:1.2},children:t}),o&&e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none","aria-hidden":!0,children:e.jsx("path",{d:"M7 4.5L11.5 9L7 13.5",stroke:"rgba(255,255,255,0.4)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})}s.__docgenInfo={description:"",methods:[],displayName:"PopupCard",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Conteúdo interno"},width:{required:!1,tsType:{name:"number"},description:"Largura em px (padrão 390 — largura do iPhone)",defaultValue:{value:"390",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"Altura em px (padrão 504)",defaultValue:{value:"504",computed:!1}},blur:{required:!1,tsType:{name:"number"},description:"Intensidade do blur em px (padrão 12)",defaultValue:{value:"12",computed:!1}},showHandle:{required:!1,tsType:{name:"boolean"},description:"Exibe a alça de arrastar no topo",defaultValue:{value:"true",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Override de estilos"}}};c.__docgenInfo={description:"",methods:[],displayName:"PopupTitle",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};u.__docgenInfo={description:"",methods:[],displayName:"CoinOption",props:{icon:{required:!0,tsType:{name:"string"},description:"Caminho para o ícone da moeda (src/assets/coins/*.svg)"},label:{required:!0,tsType:{name:"string"},description:"Nome da moeda"},hasChevron:{required:!1,tsType:{name:"boolean"},description:"Exibe chevron (indica sub-opções de rede)",defaultValue:{value:"false",computed:!1}},isSelected:{required:!1,tsType:{name:"boolean"},description:"Opção selecionada — opacidade 100%; não selecionada — 55%",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const f="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2036%2036'%3e%3ccircle%20cx='18'%20cy='18'%20r='18'%20fill='%23F7931A'/%3e%3cpath%20d='M22.4%2016.4c.3-1.9-1.2-3-3.2-3.6l.6-2.6-1.6-.4-.6%202.5-.9-.2.6-2.5-1.6-.4-.7%202.6-.7-.2-2.2-.5-.4%201.7s1.1.3%201.1.3c.6.1.7.5.7.9l-1.7%207c-.2.4-.5.7-1%20.5%200%200-1.1-.3-1.1-.3l-.7%201.8%202.1.5.8.2-.7%202.6%201.6.4.7-2.6%201%20.2-.7%202.6%201.6.4.7-2.7c2.7.5%204.7.3%205.5-2%20.7-1.9-.1-3-1.4-3.7%201-.2%201.8-.9%202-2.6zm-3.8%205.3c-.5%202-3.7.9-4.7.7l.8-3.2c1%20.2%204.4.7%203.9%202.5zm.4-5.3c-.4%201.8-3.1.9-4%20.7l.7-2.9c.9.2%203.7.5%203.3%202.2z'%20fill='white'/%3e%3c/svg%3e",w="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAbxJREFUeAGdk7FKA0EQhv/ZnCCCkkI7kfgE6hskpYKQShAEEUQjqXwYkwiCClZiEYuAjRgr7RRrkSg2moAhqcS7Xf+9SwK5rFEc2Lu92Znv/tndETjMFJGGYJ3TNEcqdAruYTgE57KNcjxHYoAUPYcdwDCrEZqRHb7jILOHeShc0ZPEX0zQ5MjIFlV2QaES4M4F0Rpo6XEkvbYbprFglamOw6lEG0AxIrn5AqcZ5kRbAWUKyKK7ofE4gl4nltB6f8QQS9vDUSRmXatWTYJqplcr3DqNocYTtqXNudeAt9QudOBzHoF8LfgMFPxgUJWYEiuNWcA8RZLkDIwO+K3heSO2WDQezjB5szJAUi41tqSPdCVSphKECkwQhDotJHBUakG1uNNn4NjlMvwil/cF9adbaqGai3xv7/qMN17xcR0HeQwc9ViOiqrWzFYJD5PPBThNLAg4wi9mjKBxuhheTiXOkHJ0s0u8kEP662utjpGTqfBeySCoJjnMRtUabHA0fwK1D2ZCNQMQm8PmtdP/N60J+ywj+ahpe/vfcSzAcYoOq9rYLqRPUd/PbP9FrTPH93zHXQsBBsfs9mo85xub95zqWBFplQAAAABJRU5ErkJggg==",S="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAsRJREFUeAGNVE1IVUEU/mbmvleUlmiFoQiZgmGl6yBrV6to0yaiTRujTFzmoiJCd4IS7VoF0UakjdCmoDYRLWwn/SAoQqRYkdp7b+bM6Zy5vpdGiPPuZebNzDnf952fC/xnMLMhogGKlTmKgUL0MUaa9+SHsZOhDgKHqcA+ijHrSzqzruWE0wl59hN6d7Ot2eIEPhg2Nu2yPgz9w2Zjo3qd9YQ5MwVnjNEDZDUp4mR66at9++snnFx8OfoUvZfPorG9GdY5WGuQfoJj2aJ39z5zvrExsPoTZ1YdCZNxQbMvVpZQ8oRiYJTLQcwcnKz1NeUIW5HZR6yVSnj9fVksrSWuTNUYCbkbuRaDY/X1uNbShskIXGpqRd/RziQpgnJhgv3k2wJmV1f1urK7oIoyT+VhiYFNUYiCyrwRn4jHy58x+WUVBYnUbtl70NGDKKiRq4FNj/HwNzNxct3kG4KpMvNbp0au4taBI+jaWwcSgKHZ97jzaQb3OnuFGUHSKS4UXsCBIWHCLbVMWE7OVCutedmKmggo3bsdJ7EeKdnKtjinZKOyJXJtGmw2iaDJUZKxZIeCyFS8mHCcUcZZuk2ijdSkVg4SdXE6X60PjZHhvGacpNxlTvOG30QY/PgBdZJ6LZSQqihnrowlPIsKMSbLiYQqaoOeC7s3I8+wcuUMGloPJza7RMn97hMpCWpcrVGdpGgfZQW766GU/rhyplQBMaE5kdZ/sB193V3JSOUkdDWVWROQxyfGzLjRpEl6akq2L/bPvEMU+P3FIn6sl9Cwdw9SAzgtPZsMrTAqVSToUqRjx3uU1UTBFQfN32b1fnpxwb1aXgJp4MUwmaasmQ0J2nup+3C6qRnnmg/FzBZTi2xp2ij9pq2CHQ2OFoWs2rQ1o7zxClnMAx+39QA83+xk20Hsb0tDLgSuRFkH4vIcMw38+x2qjj/znqPSSECumwAAAABJRU5ErkJggg==",C="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAlVJREFUeAGlU01rU0EUPTPvo2misVgMNlEhtRV14ULiwuJCXdQ/IIJWtIVsCl2ICzcKjUVcuOg2Gw1av/0FthuzsIsqXQkVNDa1pcEYJQaCJnlvZpwZ2/SlCaHYA+8x9+OdO+/cewmaQWKTo9FiKPSSch4jnEsPwCmF6dTS3cuFodlEKtf0kdcQQpD+p+O/KWM+tIFrWWzx4rgFQkQT0Yl7w3tLoXBOBgm2AiF4+Hsukr7x8Jsy6ZqTSJLVLZPoKxC6Kgurv1CmqV69zxKuCqhzuVbB43PxthxXp+/Db/tUXS2FdPnNk3euRH66Ll1PktLi7P7DbYlcUZcGSs/Y5LWoWQz3PPEm7bA6MPrmn6vmOHgwOKLP8ekULNvW54DM8aIYCr4yXds+TRnfqCBlmvm6AIczGGLD/3blI4qCIWh3wqC0gYgKfpx6SapuDSNHBqAkN+Sr6iEqy04HLBt/nArOR4+h7FTrMcIFMb3MVebiVKRfdRGvVxawVPqB+ExK69ZhWNgX6MLggaM4I59Hn9833Ir0Td0S1CPeOmrcxa9yCcWxpLZ3J8cQ9AU04WaoqafCoPNoAZua6PT567ZqdysSBdNx0tSfL1zANtG9vDREP1xPZrlhVPCfUHs3m3iR0+OtxvzQ1E1G0LgiTG7+QM9BfX6Xz6JJSblvn4bvqoYJPRBy0kVXNhdWAW+empc5STDXikRqvEsurSLRHJsqkN7ntx0pnoE2UFJkMhMBJFAv3Dii8maLlxLmnuyXCGFumhtrYaFaTMAMY35nvtCXuTzh95Io/AU7mOlbJB9qsQAAAABJRU5ErkJggg==",v="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAhZJREFUeAGVVE1rE1EUPe/NJGBapCLFjWKkoGihiVAXdmGn+ANMiG4N2XXlpj/Bf+DG7lLXGia60IVIk01duHDqwpaCdaAuIkUsYiMkzjzvvXVKO3npx4Fh3tx578y5H2cULCj5dc9xVBVGefSY55gBAqVUEEXRy2a51kyfUSmCvOPoOp3ycDTCKI7niDAcIHrg14ux1su0HMPJsKOJ7Hm5FuwTiRKtP56CZJ+MlN1kZZqfHIuS8TOjuH7+gtznCzPDiMakFKyo4tdL0NpP77hBJEwwnhvF5x/fsRis4OHkNJ7Svfu3d2ivohRdQJdsn+LDfI38+ondfg9P7pYxDIY6rI1GwfaSU5q9NIE3X9ewuLqCR+98WS/c8ixMytNU7aKNiOvDuHNxApfPnsP2n9/40NmSlC3IuxiC+1en0NhYxXZ3FwvTHrjBuUxGYja4NHwh7ckngaTAI5ks2luboqT97QtmSVnl2hReb64PkPDU69jE7YPBxsYnKnKHvp7FfHFGUmMwWc7NYtKSmlImcB1giRirSZAVrEnHOlTcdUmL297t9+nqIaQuDhAZ1ZTJrrxaWv5v0EOQYSzeFpU8Alyv9AwRwsa96hUpdhSZmqPVgEVY3eP3b3EE2CJzvBCLiFf2Ajs4OcS0yR9AJ1F2MRuQpR5LYUyL9ybOZyjbPvEfWccoU6Cf2d7A8pjAtJQxz16Ua630mX9k8ONtyFTeWgAAAABJRU5ErkJggg==",y="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAlVJREFUeAGVVEFrE0EU/t7sJm2IkVaDYm1trOIhaE0FpWpSkrMeIh7qLXoQBC+BHDx4qCfxUs1dUMQfoOJVSNRqRMHmYLy0aoitHkSMttG0yc5zdtuE7GYp7QcLu29mvvfeN+9bggui6a9xFiLFkHEChawgoQimoiDjycvpfY+dZ6jzYzz9PaSRcV9F49gQXDaknniT3VPuIjqVXoiQQE699mFzqLJE4nV2sNgmsioRxuwWSNpkhtTGzMp080uIpqqEbCQsDZDQcGhAYDzshyaA0pd/eDvX7NzWp2lKCiBBsUwlKVk8spGwIiENN1MBTIxut5UweaOExSV74USc0KVE0iY5s0Vy7bzPIrl+dx4vPgrotIrI8IoiCXb1xyxSQvV1tDMouIarZ3px9mQ//tYZjSbjwoQXDQrgXSVoJeqGjAswInZtGLv8NVUV4VlhHnsDS9BR7+zDhYhCujPk0Ro4fngA9foqwiM7ET64G/UG4eHMH2wEwWq4OgMrvA1X7nxGT48Xvf4ALk+XMXWv3KGHS2tq6oVaeG6LCS8qv/x4WqhiMOjBudgO/Kj5oPMyTgz/VGdciJR1KJpRvmLK2eLrM3Troh/RI/arnpz6gMXlfjsPU9JS7nRmIacSxe2LUukqcOyAB6MjPkjVUqH0G3PfyCE4l1/dHtpviW0Y2iVl1llVdzu9SWLi/aeG9axBOGxuWkRPrK8ApldUwoSqqorNwzJt6w8gWlHTxQZrY85bdAUjb5q15XyrA7d9sbTyHynrQE09rQ2smYAg8iTlg5nsUN555j+7l+dIfkYO+wAAAABJRU5ErkJggg==",J={title:"Componentes/PopupCard",component:s,parameters:{layout:"fullscreen",backgrounds:{default:"app",values:[{name:"app",value:"#080808"},{name:"darker",value:"#000000"}]},docs:{description:{component:"Card glass com `backdrop-filter: blur` usado em popups e bottom sheets. O conteúdo interno varia por contexto — use `PopupTitle` e `CoinOption` como building blocks ou passe qualquer JSX como children."}}},argTypes:{blur:{control:{type:"range",min:0,max:40,step:1},description:"Intensidade do blur em px"},width:{control:"number",description:"Largura em px"},height:{control:"number",description:"Altura em px"},showHandle:{control:"boolean",description:"Exibe alça de arrastar"}},tags:["autodocs"]},A={name:"Receber em:",args:{width:390,height:504,blur:12,showHandle:!0},render:i=>{const[t,o]=d.useState("Bitcoin"),r=[{icon:f,label:"Bitcoin"},{icon:w,label:"Lightning Bitcoin"},{icon:S,label:"Depix"},{icon:C,label:"USDT",hasChevron:!0},{icon:v,label:"Liquid Bitcoin",hasChevron:!0},{icon:y,label:"EURx"}];return e.jsx("div",{style:{height:"100vh",display:"flex",alignItems:"flex-end",justifyContent:"center",background:"#080808"},children:e.jsxs(s,{...i,children:[e.jsx(c,{children:"Receber em:"}),r.map(({icon:a,label:n,hasChevron:l})=>e.jsx(u,{icon:a,label:n,hasChevron:l,isSelected:t===n,onClick:()=>o(n)},n))]})})}},h={name:"Conteúdo customizado",args:{width:390,height:320,blur:12,showHandle:!0},render:i=>e.jsx("div",{style:{height:"100vh",display:"flex",alignItems:"flex-end",justifyContent:"center",background:"#080808"},children:e.jsxs(s,{...i,children:[e.jsx(c,{children:"Confirmar envio"}),e.jsxs("div",{style:{width:"100%",background:"#080808",borderRadius:10,padding:"16px",boxSizing:"border-box",display:"flex",flexDirection:"column",gap:8},children:[e.jsx(x,{label:"Para",value:"bc1q...3f7a"}),e.jsx(x,{label:"Valor",value:"0.001 BTC"}),e.jsx(x,{label:"Taxa",value:"~R$ 0,80"}),e.jsx(x,{label:"Total",value:"R$ 120,80",highlight:!0})]}),e.jsx("button",{style:{width:"100%",height:52,borderRadius:8,background:"#FF9800",border:"none",color:"#000",fontSize:14,fontWeight:700,fontFamily:"Inter, sans-serif",cursor:"pointer",marginTop:"auto",flexShrink:0},children:"Confirmar"})]})})},g={name:"Sem blur (referência)",args:{width:390,height:504,blur:0,showHandle:!0},render:i=>{const[t,o]=d.useState("Bitcoin"),r=[{icon:f,label:"Bitcoin"},{icon:w,label:"Lightning Bitcoin"},{icon:S,label:"Depix"},{icon:C,label:"USDT",hasChevron:!0},{icon:v,label:"Liquid Bitcoin",hasChevron:!0},{icon:y,label:"EURx"}];return e.jsx("div",{style:{height:"100vh",display:"flex",alignItems:"flex-end",justifyContent:"center",background:"#080808"},children:e.jsxs(s,{...i,children:[e.jsx(c,{children:"Receber em:"}),r.map(({icon:a,label:n,hasChevron:l})=>e.jsx(u,{icon:a,label:n,hasChevron:l,isSelected:t===n,onClick:()=>o(n)},n))]})})}},b={name:"All",args:{width:390,height:560,blur:12,showHandle:!0},render:i=>{const[t,o]=d.useState("Bitcoin"),[r,a]=d.useState(!1),n=[{icon:f,label:"Bitcoin"},{icon:w,label:"Lightning Bitcoin"},{icon:S,label:"Depix"},{icon:C,label:"USDT"},{icon:v,label:"Liquid Bitcoin"},{icon:y,label:"EURx"}];return e.jsx("div",{style:{height:"100vh",display:"flex",alignItems:"flex-end",justifyContent:"center",background:"#080808"},children:e.jsxs(s,{...i,children:[e.jsx(c,{children:"All"}),n.map(({icon:l,label:p})=>e.jsx(u,{icon:l,label:p,isSelected:t===p,onClick:()=>o(p)},p)),e.jsx("div",{onClick:()=>a(l=>!l),style:{display:"flex",alignItems:"center",background:r?"#080808":"rgba(8, 8, 8, 0.54)",borderRadius:10,padding:"0 16px",width:"100%",height:52,boxSizing:"border-box",flexShrink:0,cursor:"pointer",transition:"background 0.15s ease"},children:e.jsx("span",{style:{fontSize:12,fontWeight:700,color:"#ffffff",fontFamily:"Inter, sans-serif",lineHeight:"normal"},children:"Filtrar todos"})})]})})}},m={name:"Vender:",args:{width:390,height:380,blur:12,showHandle:!0},render:i=>{const[t,o]=d.useState("Bitcoin"),r=[{icon:f,label:"Bitcoin"},{icon:S,label:"Depix"},{icon:C,label:"USDT"},{icon:v,label:"Liquid Bitcoin"}];return e.jsx("div",{style:{height:"100vh",display:"flex",alignItems:"flex-end",justifyContent:"center",background:"#080808"},children:e.jsxs(s,{...i,children:[e.jsx(c,{children:"Vender:"}),r.map(({icon:a,label:n})=>e.jsx(u,{icon:a,label:n,isSelected:t===n,onClick:()=>o(n)},n))]})})}};function x({label:i,value:t,highlight:o=!1}){return e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:13,color:"#727272",fontFamily:"Inter, sans-serif"},children:i}),e.jsx("span",{style:{fontSize:13,fontWeight:o?700:400,color:o?"#FF9800":"#ffffff",fontFamily:"Inter, sans-serif"},children:t})]})}var R,I,k;A.parameters={...A.parameters,docs:{...(R=A.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Receber em:',
  args: {
    width: 390,
    height: 504,
    blur: 12,
    showHandle: true
  },
  render: args => {
    const [selected, setSelected] = useState('Bitcoin');
    const coins = [{
      icon: bitcoinIcon,
      label: 'Bitcoin'
    }, {
      icon: lightningIcon,
      label: 'Lightning Bitcoin'
    }, {
      icon: depixIcon,
      label: 'Depix'
    }, {
      icon: usdtIcon,
      label: 'USDT',
      hasChevron: true
    }, {
      icon: liquidBitcoinIcon,
      label: 'Liquid Bitcoin',
      hasChevron: true
    }, {
      icon: eurxIcon,
      label: 'EURx'
    }];
    return <div style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
      background: '#080808'
    }}>\r
        <PopupCard {...args}>\r
          <PopupTitle>Receber em:</PopupTitle>\r
          {coins.map(({
          icon,
          label,
          hasChevron
        }) => <CoinOption key={label} icon={icon} label={label} hasChevron={hasChevron} isSelected={selected === label} onClick={() => setSelected(label)} />)}\r
        </PopupCard>\r
      </div>;
  }
}`,...(k=(I=A.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var E,B,U;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(U=(B=h.parameters)==null?void 0:B.docs)==null?void 0:U.source}}};var j,P,q;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Sem blur (referência)',
  args: {
    width: 390,
    height: 504,
    blur: 0,
    showHandle: true
  },
  render: args => {
    const [selected, setSelected] = useState('Bitcoin');
    const coins = [{
      icon: bitcoinIcon,
      label: 'Bitcoin'
    }, {
      icon: lightningIcon,
      label: 'Lightning Bitcoin'
    }, {
      icon: depixIcon,
      label: 'Depix'
    }, {
      icon: usdtIcon,
      label: 'USDT',
      hasChevron: true
    }, {
      icon: liquidBitcoinIcon,
      label: 'Liquid Bitcoin',
      hasChevron: true
    }, {
      icon: eurxIcon,
      label: 'EURx'
    }];
    return <div style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
      background: '#080808'
    }}>\r
        <PopupCard {...args}>\r
          <PopupTitle>Receber em:</PopupTitle>\r
          {coins.map(({
          icon,
          label,
          hasChevron
        }) => <CoinOption key={label} icon={icon} label={label} hasChevron={hasChevron} isSelected={selected === label} onClick={() => setSelected(label)} />)}\r
        </PopupCard>\r
      </div>;
  }
}`,...(q=(P=g.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};var T,V,Y;b.parameters={...b.parameters,docs:{...(T=b.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
    const coins = [{
      icon: bitcoinIcon,
      label: 'Bitcoin'
    }, {
      icon: lightningIcon,
      label: 'Lightning Bitcoin'
    }, {
      icon: depixIcon,
      label: 'Depix'
    }, {
      icon: usdtIcon,
      label: 'USDT'
    }, {
      icon: liquidBitcoinIcon,
      label: 'Liquid Bitcoin'
    }, {
      icon: eurxIcon,
      label: 'EURx'
    }];
    return <div style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
      background: '#080808'
    }}>\r
        <PopupCard {...args}>\r
          <PopupTitle>All</PopupTitle>\r
          {coins.map(({
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
          cursor: 'pointer',
          transition: 'background 0.15s ease'
        }}>\r
            <span style={{
            fontSize: 12,
            fontWeight: 700,
            color: '#ffffff',
            fontFamily: 'Inter, sans-serif',
            lineHeight: 'normal'
          }}>\r
              Filtrar todos\r
            </span>\r
          </div>\r
        </PopupCard>\r
      </div>;
  }
}`,...(Y=(V=b.parameters)==null?void 0:V.docs)==null?void 0:Y.source}}};var F,N,Q;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(Q=(N=m.parameters)==null?void 0:N.docs)==null?void 0:Q.source}}};const X=["ReceberEm","ConteudoCustomizado","SemBlur","All","Vender"];export{b as All,h as ConteudoCustomizado,A as ReceberEm,g as SemBlur,m as Vender,X as __namedExportsOrder,J as default};
