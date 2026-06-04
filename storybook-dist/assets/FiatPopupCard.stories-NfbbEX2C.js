import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as g}from"./index-DRjF_FHU.js";function c({children:t,width:r=390,height:a=650,blur:i=12,showHandle:h=!0,style:f}){return e.jsxs("div",{style:{display:"flex",flexDirection:"column",width:r,height:a,padding:"16px 16px 48px 16px",alignItems:"flex-start",gap:10,borderRadius:"20px 20px 0 0",background:"rgba(51, 51, 51, 0.34)",backdropFilter:`blur(${i}px)`,WebkitBackdropFilter:`blur(${i}px)`,boxSizing:"border-box",position:"relative",...f},children:[h&&e.jsx("div",{style:{width:"100%",display:"flex",justifyContent:"center",flexShrink:0},children:e.jsx("div",{style:{width:36,height:4,borderRadius:8,background:"#000000"}})}),t]})}function p({children:t}){return e.jsx("p",{style:{width:"100%",textAlign:"center",fontSize:16,fontWeight:500,color:"#ffffff",fontFamily:"Inter, sans-serif",margin:0,flexShrink:0},children:t})}function s({children:t}){return e.jsx("p",{style:{width:"100%",fontSize:16,fontWeight:700,lineHeight:"120%",color:"#ffffff",fontFamily:"Inter, sans-serif",margin:0,flexShrink:0},children:t})}function l({flag:t,code:r,isSelected:a=!1,onClick:i}){return e.jsxs("div",{onClick:i,style:{display:"flex",alignItems:"center",gap:12,background:"#080808",borderRadius:10,padding:"0 16px",width:"100%",height:52,boxSizing:"border-box",cursor:i?"pointer":"default",flexShrink:0,opacity:a?1:.55,transition:"opacity 0.15s ease"},children:[e.jsx("img",{src:t,alt:r,style:{height:18,width:"auto",flexShrink:0}}),e.jsx("span",{style:{fontSize:14,fontWeight:500,color:"#ffffff",fontFamily:"Inter, sans-serif",flex:1},children:r})]})}c.__docgenInfo={description:"",methods:[],displayName:"FiatPopupCard",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},width:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"390",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"650",computed:!1}},blur:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"12",computed:!1}},showHandle:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};p.__docgenInfo={description:"",methods:[],displayName:"FiatTitle",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};s.__docgenInfo={description:"",methods:[],displayName:"SectionLabel",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};l.__docgenInfo={description:"",methods:[],displayName:"FiatOption",props:{flag:{required:!0,tsType:{name:"string"},description:"SVG ou PNG da bandeira"},code:{required:!0,tsType:{name:"string"},description:"Sigla da moeda, ex: BRL"},isSelected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const z="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='flag-icons-br'%20viewBox='0%200%20640%20480'%3e%3cg%20stroke-width='1pt'%3e%3cpath%20fill='%23229e45'%20fill-rule='evenodd'%20d='M0%200h640v480H0z'/%3e%3cpath%20fill='%23f8e509'%20fill-rule='evenodd'%20d='m321.4%20436%20301.5-195.7L319.6%2044%2017.1%20240.7%20321.4%20436z'/%3e%3cpath%20fill='%232b49a3'%20fill-rule='evenodd'%20d='M452.8%20240c0%2070.3-57.1%20127.3-127.6%20127.3A127.4%20127.4%200%201%201%20452.8%20240z'/%3e%3cpath%20fill='%23ffffef'%20fill-rule='evenodd'%20d='M444.4%20285.8a124.6%20124.6%200%200%200%205.8-19.8c-67.8-59.5-143.3-90-238.7-83.7a124.5%20124.5%200%200%200-8.5%2020.9c113-10.8%20196%2039.2%20241.4%2082.6z'/%3e%3c/g%3e%3c/svg%3e",k="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='flag-icons-us'%20viewBox='0%200%20640%20480'%3e%3cg%20fill-rule='evenodd'%3e%3cg%20stroke-width='1pt'%3e%3cpath%20fill='%23bd3d44'%20d='M0%200h912v37H0zm0%2073.9h912v37H0zm0%2073.8h912v37H0zm0%2073.8h912v37H0zm0%2074h912v36.8H0zm0%2073.7h912v37H0zM0%20443h912V480H0z'/%3e%3cpath%20fill='%23fff'%20d='M0%2037h912v36.9H0zm0%2073.8h912v36.9H0zm0%2073.8h912v37H0zm0%2073.9h912v37H0zm0%2073.8h912v37H0zm0%2073.8h912v37H0z'/%3e%3c/g%3e%3cpath%20fill='%23192f5d'%20d='M0%200h364.8v258.5H0z'/%3e%3cpath%20fill='%23fff'%20d='m30.4%2011%203.4%2010.3h10.6l-8.6%206.3%203.3%2010.3-8.7-6.4-8.6%206.3L25%2027.6l-8.7-6.3h10.9zm60.8%200%203.3%2010.3h10.8l-8.7%206.3%203.2%2010.3-8.6-6.4-8.7%206.3%203.3-10.2-8.6-6.3h10.6zm60.8%200%203.3%2010.3H166l-8.6%206.3%203.3%2010.3-8.7-6.4-8.7%206.3%203.3-10.2-8.7-6.3h10.8zm60.8%200%203.3%2010.3h10.8l-8.7%206.3%203.3%2010.3-8.7-6.4-8.7%206.3%203.4-10.2-8.8-6.3h10.7zm60.8%200%203.3%2010.3h10.7l-8.6%206.3%203.3%2010.3-8.7-6.4-8.7%206.3%203.3-10.2-8.6-6.3h10.7zm60.8%200%203.3%2010.3h10.8l-8.8%206.3%203.4%2010.3-8.7-6.4-8.7%206.3%203.4-10.2-8.8-6.3h10.8z'/%3e%3c/g%3e%3c/svg%3e",R="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20id='flag-icons-eu'%20viewBox='0%200%20640%20480'%3e%3cdefs%3e%3cg%20id='d'%3e%3cg%20id='b'%3e%3cpath%20id='a'%20d='m0-1-.3%201%20.5.1z'/%3e%3cuse%20xlink:href='%23a'%20transform='scale(-1%201)'/%3e%3c/g%3e%3cg%20id='c'%3e%3cuse%20xlink:href='%23b'%20transform='rotate(72)'/%3e%3cuse%20xlink:href='%23b'%20transform='rotate(144)'/%3e%3c/g%3e%3cuse%20xlink:href='%23c'%20transform='scale(-1%201)'/%3e%3c/g%3e%3c/defs%3e%3cpath%20fill='%23039'%20d='M0%200h640v480H0z'/%3e%3cg%20fill='%23fc0'%20transform='translate(320%20242.3)%20scale(23.7037)'%3e%3cuse%20xlink:href='%23d'%20width='100%25'%20height='100%25'%20y='-6'/%3e%3cuse%20xlink:href='%23d'%20width='100%25'%20height='100%25'%20y='6'/%3e%3cg%20id='e'%3e%3cuse%20xlink:href='%23d'%20width='100%25'%20height='100%25'%20x='-6'/%3e%3cuse%20xlink:href='%23d'%20width='100%25'%20height='100%25'%20transform='rotate(-144%20-2.3%20-2.1)'/%3e%3cuse%20xlink:href='%23d'%20width='100%25'%20height='100%25'%20transform='rotate(144%20-2.1%20-2.3)'/%3e%3cuse%20xlink:href='%23d'%20width='100%25'%20height='100%25'%20transform='rotate(72%20-4.7%20-2)'/%3e%3cuse%20xlink:href='%23d'%20width='100%25'%20height='100%25'%20transform='rotate(72%20-5%20.5)'/%3e%3c/g%3e%3cuse%20xlink:href='%23e'%20width='100%25'%20height='100%25'%20transform='scale(-1%201)'/%3e%3c/g%3e%3c/svg%3e",L="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='flag-icons-ch'%20viewBox='0%200%20640%20480'%3e%3cg%20fill-rule='evenodd'%20stroke-width='1pt'%3e%3cpath%20fill='red'%20d='M0%200h640v480H0z'/%3e%3cg%20fill='%23fff'%3e%3cpath%20d='M170%20195h300v90H170z'/%3e%3cpath%20d='M275%2090h90v300h-90z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e",F="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='flag-icons-gb'%20viewBox='0%200%20640%20480'%3e%3cpath%20fill='%23012169'%20d='M0%200h640v480H0z'/%3e%3cpath%20fill='%23FFF'%20d='m75%200%20244%20181L562%200h78v62L400%20241l240%20178v61h-80L320%20301%2081%20480H0v-60l239-178L0%2064V0h75z'/%3e%3cpath%20fill='%23C8102E'%20d='m424%20281%20216%20159v40L369%20281h55zm-184%2020%206%2035L54%20480H0l240-179zM640%200v3L391%20191l2-44L590%200h50zM0%200l239%20176h-60L0%2042V0z'/%3e%3cpath%20fill='%23FFF'%20d='M241%200v480h160V0H241zM0%20160v160h640V160H0z'/%3e%3cpath%20fill='%23C8102E'%20d='M0%20193v96h640v-96H0zM273%200v480h96V0h-96z'/%3e%3c/svg%3e",y="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2036%2036'%3e%3crect%20width='36'%20height='36'%20rx='6'%20fill='%2332BCAD'/%3e%3cg%20fill='%23fff'%20transform='translate(18%2018)'%3e%3cpath%20d='M0-9.5%20L3.8-5.7%20L0-1.9%20L-3.8-5.7Z'%20transform='rotate(0)'/%3e%3cpath%20d='M0-9.5%20L3.8-5.7%20L0-1.9%20L-3.8-5.7Z'%20transform='rotate(90)'/%3e%3cpath%20d='M0-9.5%20L3.8-5.7%20L0-1.9%20L-3.8-5.7Z'%20transform='rotate(180)'/%3e%3cpath%20d='M0-9.5%20L3.8-5.7%20L0-1.9%20L-3.8-5.7Z'%20transform='rotate(270)'/%3e%3c/g%3e%3c/svg%3e",j={title:"Componentes/Popups/FiatPopupCard",component:c,parameters:{layout:"fullscreen",backgrounds:{default:"app",values:[{name:"app",value:"#080808"},{name:"darker",value:"#000000"}]},docs:{description:{component:'Variante do PopupCard para seleção de moeda fiduciária e método de recebimento. Exibe bandeiras dos países e siglas de moeda. Dividido em duas seções: "País de origem" e "Receber por".'}}},argTypes:{blur:{control:{type:"range",min:0,max:40,step:1},description:"Intensidade do blur em px"},width:{control:"number",description:"Largura em px"},height:{control:"number",description:"Altura em px"},showHandle:{control:"boolean",description:"Exibe alça de arrastar"}},tags:["autodocs"]},S=[{flag:z,code:"BRL"},{flag:k,code:"USD"},{flag:R,code:"EUR"},{flag:L,code:"CHF"},{flag:F,code:"GBP"}],o={name:"Receber em:",args:{width:390,height:650,blur:12,showHandle:!0},render:t=>{const[r,a]=g.useState("BRL"),[i,h]=g.useState("PIX");return e.jsx("div",{style:{height:"100vh",display:"flex",alignItems:"flex-end",justifyContent:"center",background:"#080808"},children:e.jsxs(c,{...t,children:[e.jsx(p,{children:"Receber em:"}),e.jsx(s,{children:"País de origem:"}),S.map(({flag:f,code:d})=>e.jsx(l,{flag:f,code:d,isSelected:r===d,onClick:()=>a(d)},d)),e.jsx(s,{children:"Receber por:"}),e.jsx(l,{flag:y,code:"PIX",isSelected:i==="PIX",onClick:()=>h("PIX")})]})})}},n={name:"Sem seleção (referência)",args:{width:390,height:650,blur:12,showHandle:!0},render:t=>e.jsx("div",{style:{height:"100vh",display:"flex",alignItems:"flex-end",justifyContent:"center",background:"#080808"},children:e.jsxs(c,{...t,children:[e.jsx(p,{children:"Receber em:"}),e.jsx(s,{children:"País de origem:"}),S.map(({flag:r,code:a})=>e.jsx(l,{flag:r,code:a},a)),e.jsx(s,{children:"Receber por:"}),e.jsx(l,{flag:y,code:"PIX"})]})})};var m,u,x;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Receber em:',
  args: {
    width: 390,
    height: 650,
    blur: 12,
    showHandle: true
  },
  render: args => {
    const [selectedOrigin, setSelectedOrigin] = useState('BRL');
    const [selectedMethod, setSelectedMethod] = useState('PIX');
    return <div style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
      background: '#080808'
    }}>\r
        <FiatPopupCard {...args}>\r
          <FiatTitle>Receber em:</FiatTitle>\r
\r
          <SectionLabel>País de origem:</SectionLabel>\r
          {ORIGINS.map(({
          flag,
          code
        }) => <FiatOption key={code} flag={flag} code={code} isSelected={selectedOrigin === code} onClick={() => setSelectedOrigin(code)} />)}\r
\r
          <SectionLabel>Receber por:</SectionLabel>\r
          <FiatOption flag={pixIcon} code="PIX" isSelected={selectedMethod === 'PIX'} onClick={() => setSelectedMethod('PIX')} />\r
        </FiatPopupCard>\r
      </div>;
  }
}`,...(x=(u=o.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var v,b,w;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Sem seleção (referência)',
  args: {
    width: 390,
    height: 650,
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
      <FiatPopupCard {...args}>\r
        <FiatTitle>Receber em:</FiatTitle>\r
\r
        <SectionLabel>País de origem:</SectionLabel>\r
        {ORIGINS.map(({
        flag,
        code
      }) => <FiatOption key={code} flag={flag} code={code} />)}\r
\r
        <SectionLabel>Receber por:</SectionLabel>\r
        <FiatOption flag={pixIcon} code="PIX" />\r
      </FiatPopupCard>\r
    </div>
}`,...(w=(b=n.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};const M=["ReceberEm","SemSelecao"];export{o as ReceberEm,n as SemSelecao,M as __namedExportsOrder,j as default};
