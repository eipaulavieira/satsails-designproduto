import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as n}from"./index-DRjF_FHU.js";const J=()=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:e.jsx("path",{d:"M12.7729 9.39828L7.14792 15.0233C7.09565 15.0755 7.03361 15.117 6.96533 15.1453C6.89704 15.1736 6.82386 15.1881 6.74995 15.1881C6.67604 15.1881 6.60285 15.1736 6.53457 15.1453C6.46628 15.117 6.40424 15.0755 6.35198 15.0233C6.29972 14.971 6.25826 14.909 6.22998 14.8407C6.20169 14.7724 6.18713 14.6992 6.18713 14.6253C6.18713 14.5514 6.20169 14.4782 6.22998 14.4099C6.25826 14.3417 6.29972 14.2796 6.35198 14.2273L11.5797 9.00031L6.35198 3.77328C6.24643 3.66773 6.18713 3.52458 6.18713 3.37531C6.18713 3.22605 6.24643 3.08289 6.35198 2.97734C6.45753 2.8718 6.60068 2.8125 6.74995 2.8125C6.89921 2.8125 7.04237 2.8718 7.14792 2.97734L12.7729 8.60234C12.8252 8.65458 12.8667 8.71662 12.895 8.78491C12.9233 8.8532 12.9379 8.92639 12.9379 9.00031C12.9379 9.07423 12.9233 9.14743 12.895 9.21572C12.8667 9.284 12.8252 9.34604 12.7729 9.39828Z",fill:"black"})}),Q=()=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:e.jsx("path",{d:"M16.1479 5.46078L7.14792 14.4608C7.09567 14.5131 7.03364 14.5546 6.96535 14.5829C6.89706 14.6112 6.82387 14.6258 6.74995 14.6258C6.67603 14.6258 6.60283 14.6112 6.53454 14.5829C6.46626 14.5546 6.40422 14.5131 6.35198 14.4608L2.41448 10.5233C2.30893 10.4177 2.24963 10.2746 2.24963 10.1253C2.24963 9.97605 2.30893 9.83289 2.41448 9.72734C2.52003 9.6218 2.66318 9.5625 2.81245 9.5625C2.96171 9.5625 3.10487 9.6218 3.21042 9.72734L6.74995 13.2676L15.352 4.66484C15.4575 4.5593 15.6007 4.5 15.7499 4.5C15.8992 4.5 16.0424 4.5593 16.1479 4.66484C16.2535 4.77039 16.3128 4.91355 16.3128 5.06281C16.3128 5.21208 16.2535 5.35523 16.1479 5.46078Z",fill:"#080808"})}),D=356,x=56,h=3,z=D-x-h*2,Y=(D-x)/2;function s({label:v="Deslize para enviar",onComplete:c}){const[i,o]=n.useState(0),[r,S]=n.useState(!1),t=n.useRef(!1),d=n.useRef(0),u=n.useRef(0),y=n.useCallback(()=>{S(!0),o(1),c==null||c()},[c]),N=()=>{S(!1),o(0)},O=a=>{r||(t.current=!0,d.current=a.clientX,u.current=i,a.preventDefault())},G=a=>{if(!t.current||r)return;const C=a.clientX-d.current,l=Math.max(0,Math.min(1,u.current+C/z));o(l),l>=.95&&y()},j=()=>{t.current&&(t.current=!1,r||o(0))},U=a=>{r||(t.current=!0,d.current=a.touches[0].clientX,u.current=i)},V=a=>{if(!t.current||r)return;const C=a.touches[0].clientX-d.current,l=Math.max(0,Math.min(1,u.current+C/z));o(l),l>=.95&&y()},Z=()=>{t.current&&(t.current=!1,r||o(0))},w=r?Y:h+i*z,H=w+x,K=Math.max(0,1-i*2.5);return e.jsxs("div",{style:{width:D,height:61,position:"relative",userSelect:"none",flexShrink:0},onMouseMove:G,onMouseUp:j,onMouseLeave:j,children:[i>0&&!r&&e.jsx("div",{style:{position:"absolute",left:0,top:h,width:H,height:55,borderRadius:40,background:"#FF9800",pointerEvents:"none"}}),!r&&e.jsx("span",{style:{position:"absolute",left:0,right:0,top:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Inter', sans-serif",fontSize:16,fontWeight:300,color:"#727272",whiteSpace:"nowrap",pointerEvents:"none",opacity:K,transition:"opacity 0.05s"},children:v}),e.jsx("div",{style:{position:"absolute",left:w,top:h,width:x,height:55,borderRadius:40,background:r?"#00C853":"#FF9800",display:"flex",alignItems:"center",justifyContent:"center",cursor:r?"pointer":"grab",transition:r?"left 0.35s cubic-bezier(0.4,0,0.2,1), background 0.25s ease":"none",zIndex:2,flexShrink:0},onMouseDown:O,onTouchStart:U,onTouchMove:V,onTouchEnd:Z,onClick:r?N:void 0,title:r?"Clique para resetar":void 0,children:r?e.jsx(Q,{}):e.jsx(J,{})})]})}s.__docgenInfo={description:"",methods:[],displayName:"SlideButton",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Deslize para enviar'",computed:!1}},onComplete:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const re={title:"Componentes/Ações/Slide Button",component:s,tags:["autodocs"],parameters:{layout:"centered",backgrounds:{default:"app",values:[{name:"app",value:"#080808"},{name:"darker",value:"#000000"}]},docs:{description:{component:`
Botão de deslize para confirmar transações. O usuário arrasta o thumb laranja da esquerda para a direita — ao atingir o fim, o botão confirma e fica verde com ✓.

**Clique no botão verde para resetar.**

---

**CSS:**
\`\`\`css
/* Container */
display: flex;
width: 356px;
height: 61px;
padding: 3px 2px 3px 0;
align-items: center;

/* Thumb (laranja) */
width: 55.552px;
height: 55px;
border-radius: 40px;
background: #FF9800; /* --Warning */

/* Thumb (confirmado) */
border-radius: 40px;
background: #00C853; /* --Success */

/* Label */
color: #727272; /* --subtitulo */
font-family: Inter;
font-size: 16px;
font-weight: 300;
\`\`\`

---

**Flutter:**
\`\`\`dart
// Pacote recomendado: slide_to_act (pub.dev)
SlideAction(
  height: 61,
  borderRadius: 40,
  elevation: 0,
  outerColor: Colors.transparent,
  innerColor: const Color(0xFFFF9800),
  sliderButtonIcon: const Icon(
    Icons.chevron_right,
    color: Colors.black,
    size: 24,
  ),
  submittedIcon: const Icon(
    Icons.check,
    color: Color(0xFF080808),
    size: 24,
  ),
  text: 'Deslize para enviar',
  textStyle: const TextStyle(
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: FontWeight.w300,
    color: Color(0xFF727272),
  ),
  onSubmit: () => _confirmarTransacao(),
)
\`\`\`

> **Alternativa manual Flutter:** use \`GestureDetector\` + \`AnimatedPositioned\` + \`AnimationController\` para controle total do comportamento.
        `}}},argTypes:{label:{control:"text",description:"Texto do botão"}},decorators:[v=>e.jsx("div",{style:{padding:"32px 16px",background:"#080808",borderRadius:12},children:e.jsx(v,{})})]},p={name:"Deslize para enviar",args:{label:"Deslize para enviar"}},m={name:"Deslize para trocar",args:{label:"Deslize para trocar"}},f={name:"Deslize para receber",args:{label:"Deslize para receber"}},b={name:"Deslize para converter",args:{label:"Deslize para converter"}},g={name:"Todos os labels",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(s,{label:"Deslize para enviar"}),e.jsx(s,{label:"Deslize para trocar"}),e.jsx(s,{label:"Deslize para receber"}),e.jsx(s,{label:"Deslize para converter"})]})};var T,F,k;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Deslize para enviar',
  args: {
    label: 'Deslize para enviar'
  }
}`,...(k=(F=p.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};var I,M,L;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Deslize para trocar',
  args: {
    label: 'Deslize para trocar'
  }
}`,...(L=(M=m.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};var R,B,_;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Deslize para receber',
  args: {
    label: 'Deslize para receber'
  }
}`,...(_=(B=f.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};var E,A,W;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Deslize para converter',
  args: {
    label: 'Deslize para converter'
  }
}`,...(W=(A=b.parameters)==null?void 0:A.docs)==null?void 0:W.source}}};var X,q,P;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'Todos os labels',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>\r
      <SlideButton label="Deslize para enviar" />\r
      <SlideButton label="Deslize para trocar" />\r
      <SlideButton label="Deslize para receber" />\r
      <SlideButton label="Deslize para converter" />\r
    </div>
}`,...(P=(q=g.parameters)==null?void 0:q.docs)==null?void 0:P.source}}};const te=["Enviar","Trocar","Receber","Converter","TodosLabels"];export{b as Converter,p as Enviar,f as Receber,g as TodosLabels,m as Trocar,te as __namedExportsOrder,re as default};
