import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as d}from"./index-DRjF_FHU.js";function i({message:a,visible:o=!0}){return o?e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        @keyframes error-slide-down {
          from { opacity: 0; transform: translateY(-16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}),e.jsxs("div",{style:{display:"flex",width:328,height:52,padding:"0 16px",alignItems:"center",gap:16,borderRadius:8,background:"#EA2415",boxSizing:"border-box",animation:"error-slide-down 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94) both"},children:[e.jsx("span",{style:{display:"flex",alignItems:"center",flexShrink:0},children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:e.jsx("path",{d:"M9 1.6875C7.55373 1.6875 6.13993 2.11637 4.9374 2.91988C3.73486 3.72339 2.7976 4.86544 2.24413 6.20163C1.69067 7.53781 1.54586 9.00811 1.82801 10.4266C2.11017 11.8451 2.80661 13.148 3.82928 14.1707C4.85196 15.1934 6.15492 15.8898 7.57341 16.172C8.99189 16.4541 10.4622 16.3093 11.7984 15.7559C13.1346 15.2024 14.2766 14.2651 15.0801 13.0626C15.8836 11.8601 16.3125 10.4463 16.3125 9C16.3105 7.06123 15.5394 5.20246 14.1685 3.83154C12.7975 2.46063 10.9388 1.68955 9 1.6875ZM9 15.1875C7.77623 15.1875 6.57994 14.8246 5.56241 14.1447C4.54488 13.4648 3.75182 12.4985 3.2835 11.3679C2.81518 10.2372 2.69265 8.99314 2.93139 7.79288C3.17014 6.59262 3.75944 5.49011 4.62478 4.62478C5.49012 3.75944 6.59262 3.17014 7.79288 2.93139C8.99314 2.69265 10.2372 2.81518 11.3679 3.2835C12.4985 3.75181 13.4648 4.54488 14.1447 5.56241C14.8246 6.57994 15.1875 7.77623 15.1875 9C15.1856 10.6405 14.5331 12.2132 13.3732 13.3732C12.2132 14.5331 10.6405 15.1856 9 15.1875ZM10.125 12.375C10.125 12.5242 10.0657 12.6673 9.96025 12.7727C9.85476 12.8782 9.71169 12.9375 9.5625 12.9375C9.26413 12.9375 8.97799 12.819 8.76701 12.608C8.55603 12.397 8.4375 12.1109 8.4375 11.8125V9C8.28832 9 8.14524 8.94074 8.03976 8.83525C7.93427 8.72976 7.875 8.58668 7.875 8.4375C7.875 8.28832 7.93427 8.14524 8.03976 8.03975C8.14524 7.93426 8.28832 7.875 8.4375 7.875C8.73587 7.875 9.02202 7.99353 9.233 8.20451C9.44398 8.41548 9.5625 8.70163 9.5625 9V11.8125C9.71169 11.8125 9.85476 11.8718 9.96025 11.9773C10.0657 12.0827 10.125 12.2258 10.125 12.375ZM7.875 5.90625C7.875 5.73937 7.92449 5.57624 8.0172 5.43749C8.10991 5.29873 8.24169 5.19059 8.39586 5.12673C8.55004 5.06287 8.71969 5.04616 8.88336 5.07871C9.04703 5.11127 9.19737 5.19163 9.31537 5.30963C9.43337 5.42763 9.51373 5.57797 9.54629 5.74164C9.57885 5.90531 9.56214 6.07496 9.49828 6.22914C9.43441 6.38331 9.32627 6.51509 9.18752 6.6078C9.04876 6.70052 8.88563 6.75 8.71875 6.75C8.49498 6.75 8.28037 6.66111 8.12213 6.50287C7.9639 6.34464 7.875 6.13003 7.875 5.90625Z",fill:"white"})})}),e.jsx("span",{style:{fontFamily:"'Inter', sans-serif",fontSize:14,fontWeight:500,color:"#FFFFFF",lineHeight:"normal",whiteSpace:"nowrap"},children:a})]})]}):null}i.__docgenInfo={description:"",methods:[],displayName:"ErrorToast",props:{message:{required:!0,tsType:{name:"string"},description:""},visible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const T={title:"Componentes/Erros e Notificações/ErrorToast",component:i,tags:["autodocs"],parameters:{layout:"centered",backgrounds:{default:"app",values:[{name:"app",value:"#080808"},{name:"darker",value:"#000000"}]},docs:{description:{component:`
Toast de erro com animação slide-down. Aparece de cima para baixo ao tentar enviar sem preencher o campo de destinatário.

**Dimensões:** 328 × 52 px (igual ao CTAButton)

**CSS:**
\`\`\`css
display: flex;
width: 328px;
height: 52px;
padding: 0 16px;
align-items: center;
gap: 16px;
border-radius: 8px;
background: #EA2415;
animation: error-slide-down 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

@keyframes error-slide-down {
  from { opacity: 0; transform: translateY(-16px); }
  to   { opacity: 1; transform: translateY(0); }
}
\`\`\`

**Flutter:**
\`\`\`dart
AnimatedContainer(
  duration: const Duration(milliseconds: 350),
  curve: Curves.easeOut,
  // slideDown via SlideTransition + AnimationController
)
\`\`\`
        `}}},argTypes:{message:{control:"text"},visible:{control:"boolean"}}},r={name:"Endereço inválido",args:{message:"Endereço inválido",visible:!0}},t={name:"Saldo insuficiente",args:{message:"Saldo insuficiente",visible:!0}},s={name:"Erro genérico",args:{message:"Algo deu errado. Tente novamente.",visible:!0}},n={name:"Animação interativa",parameters:{layout:"fullscreen"},render:()=>{const[a,o]=d.useState(0),[S,l]=d.useState(!1),E=()=>{l(!1),setTimeout(()=>{o(k=>k+1),l(!0)},50)};return e.jsxs("div",{style:{height:"100vh",background:"#080808",display:"flex",flexDirection:"column",alignItems:"center",paddingTop:48,gap:32},children:[e.jsx("div",{style:{height:52,display:"flex",alignItems:"flex-start"},children:S&&e.jsx(i,{message:"Endereço inválido"},a)}),e.jsx("button",{onClick:E,style:{width:328,height:52,borderRadius:8,background:"#FF9800",border:"none",color:"#000",fontFamily:"'Inter', sans-serif",fontSize:14,fontWeight:700,cursor:"pointer"},children:"Simular erro de envio"})]})}};var c,m,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Endereço inválido',
  args: {
    message: 'Endereço inválido',
    visible: true
  }
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,g,f;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Saldo insuficiente',
  args: {
    message: 'Saldo insuficiente',
    visible: true
  }
}`,...(f=(g=t.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var C,h,v;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Erro genérico',
  args: {
    message: 'Algo deu errado. Tente novamente.',
    visible: true
  }
}`,...(v=(h=s.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var b,x,y;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Animação interativa',
  parameters: {
    layout: 'fullscreen'
  },
  render: () => {
    const [key, setKey] = useState(0);
    const [visible, setVisible] = useState(false);
    const trigger = () => {
      setVisible(false);
      setTimeout(() => {
        setKey(k => k + 1);
        setVisible(true);
      }, 50);
    };
    return <div style={{
      height: '100vh',
      background: '#080808',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: 48,
      gap: 32
    }}>\r
        <div style={{
        height: 52,
        display: 'flex',
        alignItems: 'flex-start'
      }}>\r
          {visible && <ErrorToast key={key} message="Endereço inválido" />}\r
        </div>\r
\r
        <button onClick={trigger} style={{
        width: 328,
        height: 52,
        borderRadius: 8,
        background: '#FF9800',
        border: 'none',
        color: '#000',
        fontFamily: "'Inter', sans-serif",
        fontSize: 14,
        fontWeight: 700,
        cursor: 'pointer'
      }}>\r
          Simular erro de envio\r
        </button>\r
      </div>;
  }
}`,...(y=(x=n.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const F=["EnderecoInvalido","SaldoInsuficiente","ErroGenerico","AnimacaoInterativa"];export{n as AnimacaoInterativa,r as EnderecoInvalido,s as ErroGenerico,t as SaldoInsuficiente,F as __namedExportsOrder,T as default};
