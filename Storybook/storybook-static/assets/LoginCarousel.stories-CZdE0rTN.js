import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as i}from"./index-DRjF_FHU.js";function L({slides:t,interval:m=4500,notificationImage:p,onCreateWallet:w,onRecoverWallet:T}){const[l,f]=i.useState(0),[b,n]=i.useState(!1),c=i.useRef(null),D=a=>{a!==l&&(n(!0),setTimeout(()=>{f(a),n(!1)},350))};i.useEffect(()=>(c.current=setInterval(()=>{n(!0),setTimeout(()=>{f(a=>(a+1)%t.length),n(!1)},350)},m),()=>{c.current&&clearInterval(c.current)}),[t.length,m]);const d=t[l];return e.jsxs("div",{style:{position:"relative",width:390,height:844,overflow:"hidden",fontFamily:"'Inter', sans-serif",background:"#080808"},children:[e.jsx("div",{style:{position:"absolute",top:48,left:0,right:0,display:"flex",width:358,alignItems:"center",gap:11,margin:"0 auto",zIndex:20,boxSizing:"border-box"},children:t.map((a,g)=>e.jsx("div",{onClick:()=>D(g),style:{flex:"1 0 0",height:4,borderRadius:2,background:g===l?"#FF9800":"rgba(255,255,255,0.25)",transition:"background 0.35s ease",cursor:"pointer"}},g))}),e.jsx("div",{style:{position:"absolute",inset:0,backgroundImage:`url(${d.backgroundImage})`,backgroundSize:"cover",backgroundPosition:"center top",opacity:b?0:1,transition:"opacity 0.35s ease"}}),e.jsx("div",{style:{position:"absolute",bottom:0,left:0,right:0,height:420,background:"linear-gradient(to bottom, transparent, #080808)",pointerEvents:"none"}}),e.jsxs("div",{style:{position:"absolute",bottom:16,left:31,right:31,display:"flex",flexDirection:"column",alignItems:"center",gap:20,opacity:b?0:1,transition:"opacity 0.35s ease"},children:[p&&e.jsx("img",{src:p,alt:"Notificação",style:{display:"block",flexShrink:0}}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8,textAlign:"center",alignItems:"center",width:"100%"},children:[e.jsx("h1",{style:{fontSize:48,fontWeight:500,color:"#fff",letterSpacing:"-1.92px",lineHeight:1.1,margin:0},children:d.title}),e.jsx("p",{style:{fontSize:24,fontWeight:300,color:"#727272",letterSpacing:"-0.96px",lineHeight:1.1,margin:0},children:d.subtitle})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8,width:"100%"},children:[e.jsx("button",{onClick:w,style:{width:"100%",height:52,borderRadius:8,background:"#FF9800",color:"#000",border:"none",fontFamily:"'Inter', sans-serif",fontSize:14,fontWeight:700,cursor:"pointer",letterSpacing:"-0.2px",boxShadow:"0 4px 11px rgba(0,0,0,0.25)"},children:"Criar nova carteira"}),e.jsx("button",{onClick:T,style:{width:"100%",height:52,borderRadius:8,background:"transparent",color:"#fff",border:"none",fontFamily:"'Inter', sans-serif",fontSize:14,fontWeight:700,cursor:"pointer",letterSpacing:"-0.2px"},children:"Recuperar carteira"})]}),e.jsxs("p",{style:{fontSize:8,color:"#727272",textAlign:"center",lineHeight:1.5,margin:0,width:163},children:["Ao continuar, você concorda com nossos"," ",e.jsx("strong",{style:{color:"#fff",fontWeight:500},children:"Termos de Uso"})," e"," ",e.jsx("strong",{style:{color:"#fff",fontWeight:500},children:"Política de Privacidade"}),"."]})]})]})}L.__docgenInfo={description:"",methods:[],displayName:"LoginCarousel",props:{slides:{required:!0,tsType:{name:"Array",elements:[{name:"LoginSlide"}],raw:"LoginSlide[]"},description:""},interval:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"4500",computed:!1}},notificationImage:{required:!1,tsType:{name:"string"},description:""},onCreateWallet:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onRecoverWallet:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const u=[{backgroundImage:"../../assets/imagens/background-satsails.png",title:"Seja soberano com a Satsails",subtitle:"Gerencie Bitcoin e stablecoins sem depender de ninguém."},{backgroundImage:"../../assets/imagens/background-satsails.png",title:"Do PIX direto para o Bitcoin",subtitle:"Compre DePix e converta para Bitcoin sem intermediário."},{backgroundImage:"../../assets/imagens/background-satsails.png",title:"Rápido, barato e sem custódia",subtitle:"Transações via Lightning e Liquid com total privacidade."}],R={title:"Componentes/Login/LoginCarousel",component:L,tags:["autodocs"],parameters:{layout:"fullscreen",backgrounds:{default:"darker",values:[{name:"app",value:"#080808"},{name:"darker",value:"#000000"}]},docs:{description:{component:`
Carrossel de login com 3 slides. Avança automaticamente a cada intervalo e exibe dots de navegação.

**Comportamento:**
- Auto-play a cada \`interval\` ms (padrão: 4500ms)
- Fade entre slides (350ms)
- Dot ativo: laranja \`#FF9800\` com largura 24px
- Dots inativos: branco 30% opacidade com largura 6px
- Clique nos dots para navegar diretamente

**Props por slide:**
\`\`\`ts
interface LoginSlide {
  backgroundImage: string; // URL da imagem de fundo
  title: string;           // Título principal (48px)
  subtitle: string;        // Subtítulo (24px)
}
\`\`\`
        `}}},decorators:[t=>e.jsx("div",{style:{display:"flex",justifyContent:"center",background:"#000"},children:e.jsx(t,{})})],argTypes:{interval:{control:{type:"range",min:1e3,max:1e4,step:500},description:"Intervalo de auto-play em ms"}}},o={name:"Auto-play (3 slides)",args:{slides:u,interval:4500,notificationImage:"../../assets/imagens/transação-bitcoin.svg"}},r={name:"Sem notificação",args:{slides:u,interval:4500}},s={name:"Intervalo rápido (2s)",args:{slides:u,interval:2e3,notificationImage:"../../assets/imagens/transação-bitcoin.svg"}};var v,x,h;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Auto-play (3 slides)',
  args: {
    slides: SLIDES,
    interval: 4500,
    notificationImage: '../../assets/imagens/transação-bitcoin.svg'
  }
}`,...(h=(x=o.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var y,S,I;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Sem notificação',
  args: {
    slides: SLIDES,
    interval: 4500
  }
}`,...(I=(S=r.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var k,j,C;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Intervalo rápido (2s)',
  args: {
    slides: SLIDES,
    interval: 2000,
    notificationImage: '../../assets/imagens/transação-bitcoin.svg'
  }
}`,...(C=(j=s.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};const E=["AutoPlay","SemNotificacao","IntervaloCurto"];export{o as AutoPlay,s as IntervaloCurto,r as SemNotificacao,E as __namedExportsOrder,R as default};
