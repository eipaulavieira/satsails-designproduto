import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as a}from"./index-DRjF_FHU.js";const ye=new Map([["bold",a.createElement(a.Fragment,null,a.createElement("path",{d:"M234.38,210a123.36,123.36,0,0,0-60.78-53.23,76,76,0,1,0-91.2,0A123.36,123.36,0,0,0,21.62,210a12,12,0,1,0,20.77,12c18.12-31.32,50.12-50,85.61-50s67.49,18.69,85.61,50a12,12,0,0,0,20.77-12ZM76,96a52,52,0,1,1,52,52A52.06,52.06,0,0,1,76,96Z"}))],["duotone",a.createElement(a.Fragment,null,a.createElement("path",{d:"M192,96a64,64,0,1,1-64-64A64,64,0,0,1,192,96Z",opacity:"0.2"}),a.createElement("path",{d:"M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"}))],["fill",a.createElement(a.Fragment,null,a.createElement("path",{d:"M230.93,220a8,8,0,0,1-6.93,4H32a8,8,0,0,1-6.92-12c15.23-26.33,38.7-45.21,66.09-54.16a72,72,0,1,1,73.66,0c27.39,8.95,50.86,27.83,66.09,54.16A8,8,0,0,1,230.93,220Z"}))],["light",a.createElement(a.Fragment,null,a.createElement("path",{d:"M229.19,213c-15.81-27.32-40.63-46.49-69.47-54.62a70,70,0,1,0-63.44,0C67.44,166.5,42.62,185.67,26.81,213a6,6,0,1,0,10.38,6C56.4,185.81,90.34,166,128,166s71.6,19.81,90.81,53a6,6,0,1,0,10.38-6ZM70,96a58,58,0,1,1,58,58A58.07,58.07,0,0,1,70,96Z"}))],["regular",a.createElement(a.Fragment,null,a.createElement("path",{d:"M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"}))],["thin",a.createElement(a.Fragment,null,a.createElement("path",{d:"M227.46,214c-16.52-28.56-43-48.06-73.68-55.09a68,68,0,1,0-51.56,0c-30.64,7-57.16,26.53-73.68,55.09a4,4,0,0,0,6.92,4C55,184.19,89.62,164,128,164s73,20.19,92.54,54a4,4,0,0,0,3.46,2,3.93,3.93,0,0,0,2-.54A4,4,0,0,0,227.46,214ZM68,96a60,60,0,1,1,60,60A60.07,60.07,0,0,1,68,96Z"}))]]),ve=a.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),de=a.forwardRef((t,n)=>{const{alt:o,color:s,size:i,weight:l,mirrored:E,children:b,weights:d,...he}=t,{color:ge="currentColor",size:j,weight:Ce="regular",mirrored:xe=!1,...fe}=a.useContext(ve);return a.createElement("svg",{ref:n,xmlns:"http://www.w3.org/2000/svg",width:i??j,height:i??j,fill:s??ge,viewBox:"0 0 256 256",transform:E||xe?"scale(-1, 1)":void 0,...fe,...he},!!o&&a.createElement("title",null,o),b,d.get(l??Ce))});de.displayName="IconBase";const le=a.forwardRef((t,n)=>a.createElement(de,{ref:n,...t,weights:ye}));le.displayName="UserIcon";const Ie=le,we={color:"#D1D2D2",fontFamily:"'Inter', sans-serif",fontSize:16,fontStyle:"normal",fontWeight:600,lineHeight:"normal"};function r({label:t,labelRight:n,icon:o,rightIcon:s,type:i="text",placeholder:l,value:E,onChange:b,disabled:d}){return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8,width:"100%"},children:[(t||n)&&e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[t&&e.jsx("span",{style:we,children:t}),n&&e.jsx("div",{style:{display:"flex",alignItems:"center"},children:n})]}),e.jsxs("div",{style:{display:"flex",height:52,padding:"0 20px",alignItems:"center",gap:10,borderRadius:8,border:"none",background:"#080808",boxShadow:"0 4px 11px 0 rgba(0,0,0,0.25)",width:"100%",boxSizing:"border-box",opacity:d?.4:1},children:[o&&e.jsx("div",{style:{flexShrink:0,display:"flex",alignItems:"center"},children:o}),e.jsx("input",{className:"app-input-field",type:i,placeholder:l,value:E,onChange:b,disabled:d,style:{background:"none",border:"none",outline:"none",color:"#fff",fontFamily:"'Inter', sans-serif",fontSize:13,fontWeight:400,flex:1,width:"100%",cursor:d?"not-allowed":"text"}}),s&&e.jsx("div",{style:{flexShrink:0,display:"flex",alignItems:"center"},children:s})]})]})}r.__docgenInfo={description:"",methods:[],displayName:"AppInput",props:{label:{required:!1,tsType:{name:"string"},description:""},labelRight:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},rightIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},type:{required:!1,tsType:{name:"ReactHTMLInputTypeAttribute",raw:"React.HTMLInputTypeAttribute"},description:"",defaultValue:{value:"'text'",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""}}};const Ae={title:"Componentes/Formulários/Inputs",component:r,parameters:{layout:"centered",backgrounds:{default:"app",values:[{name:"app",value:"#080808"},{name:"darker",value:"#000000"}]},docs:{description:{component:"Input padrão do app Satsails. Fundo preto, ícone à esquerda opcional, texto branco, placeholder cinza escuro (#3a3a3a). Altura fixa de 52px, border-radius 8px."}}},argTypes:{placeholder:{control:"text"},disabled:{control:"boolean"},type:{control:"select",options:["text","email","tel","password","number"]}},tags:["autodocs"],decorators:[t=>e.jsx("div",{style:{width:358,background:"#080808",padding:"24px 0"},children:e.jsx(t,{})})]},w=()=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:e.jsx("path",{d:"M15.75 3.375H2.25C1.836 3.375 1.5 3.711 1.5 4.125v9.75c0 .414.336.75.75.75h13.5c.414 0 .75-.336.75-.75v-9.75c0-.414-.336-.75-.75-.75zm-.75 9.75H3V5.648l5.647 4.383a.562.562 0 0 0 .706 0L15 5.648V13.125zm-6-4.14L3.92 4.875h10.16L9 8.985z",fill:"#3a3a3a"})}),ce=()=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:e.jsx("path",{d:"M17.3818 12.1309C17.3359 12.0355 17.2639 11.9549 17.1742 11.8986C17.0846 11.8422 16.9808 11.8124 16.8749 11.8124H10.1249V10.1249H15.1874C15.2963 10.1249 15.4029 10.0932 15.4942 10.0338C15.5855 9.97432 15.6576 9.88962 15.7017 9.78998C15.7458 9.69034 15.76 9.58004 15.7426 9.47249C15.7252 9.36493 15.6769 9.26475 15.6036 9.18411L10.1249 3.15762V0.562388C10.1242 0.446443 10.0878 0.333524 10.0205 0.239086C9.95326 0.144647 9.85845 0.0733035 9.74908 0.0348187C9.6397 -0.00366612 9.52111 -0.0074116 9.40952 0.0240948C9.29794 0.0556013 9.19882 0.12082 9.12572 0.210826L1.81322 9.21083C1.74712 9.29339 1.70563 9.39292 1.69352 9.49799C1.68141 9.60306 1.69917 9.70942 1.74476 9.80485C1.79035 9.90029 1.86192 9.98094 1.95126 10.0375C2.04061 10.0942 2.1441 10.1244 2.24986 10.1249H8.99986V11.8124H1.12486C1.01886 11.8123 0.914993 11.8422 0.825237 11.8986C0.735481 11.955 0.663489 12.0356 0.617557 12.1312C0.571626 12.2267 0.553626 12.3333 0.565631 12.4386C0.577636 12.5439 0.619158 12.6437 0.685411 12.7265L2.76666 15.328C2.87182 15.4599 3.00542 15.5664 3.15749 15.6394C3.30956 15.7125 3.47616 15.7502 3.64486 15.7499H14.3549C14.5236 15.7502 14.6902 15.7125 14.8422 15.6394C14.9943 15.5664 15.1279 15.4599 15.2331 15.328L17.3143 12.7265C17.3806 12.6436 17.4221 12.5438 17.434 12.4384C17.4459 12.333 17.4278 12.2264 17.3818 12.1309ZM13.9161 8.99989H10.1249V4.82965L13.9161 8.99989ZM3.43182 8.99989L8.99986 2.14653V8.99989H3.43182ZM14.3549 14.6249H3.64486L2.29486 12.9374H15.7049L14.3549 14.6249Z",fill:"#727272"})}),pe=()=>e.jsx(Ie,{size:18,color:"#727272"}),Ee="M15.6354 11.1416L12.323 9.65728L12.3138 9.65306C12.1419 9.57951 11.9543 9.54999 11.768 9.56718C11.5818 9.58437 11.4028 9.64772 11.2472 9.7515C11.2289 9.7636 11.2113 9.77675 11.1945 9.79087L9.48305 11.2499C8.39883 10.7232 7.27945 9.61228 6.75281 8.54212L8.2139 6.8047C8.22797 6.78712 8.24133 6.76955 8.25398 6.75056C8.35553 6.59538 8.41715 6.41751 8.43334 6.23276C8.44953 6.04802 8.4198 5.86213 8.3468 5.69165V5.68322L6.85828 2.36517C6.76177 2.14247 6.59582 1.95695 6.38521 1.83631C6.1746 1.71567 5.93061 1.66638 5.68969 1.6958C4.73693 1.82117 3.86239 2.28907 3.2294 3.01211C2.59642 3.73515 2.24828 4.66389 2.25 5.62486C2.25 11.2077 6.79219 15.7499 12.375 15.7499C13.336 15.7516 14.2647 15.4034 14.9877 14.7705C15.7108 14.1375 16.1787 13.2629 16.3041 12.3102C16.3335 12.0693 16.2843 11.8254 16.1638 11.6148C16.0433 11.4042 15.858 11.2382 15.6354 11.1416ZM12.375 14.6249C9.98885 14.6223 7.70118 13.6732 6.01392 11.9859C4.32665 10.2987 3.3776 8.01101 3.375 5.62486C3.37235 4.93825 3.61972 4.27415 4.07091 3.75659C4.52209 3.23903 5.14624 2.90339 5.8268 2.81236C5.82652 2.81516 5.82652 2.81799 5.8268 2.8208L7.30336 6.12548L5.85 7.86501C5.83525 7.88199 5.82185 7.90009 5.80992 7.91915C5.70411 8.08152 5.64204 8.26846 5.62972 8.46187C5.6174 8.65528 5.65525 8.84858 5.73961 9.02306C6.37664 10.326 7.68937 11.6288 9.00633 12.2652C9.18208 12.3487 9.37651 12.3853 9.57062 12.3712C9.76472 12.3572 9.95186 12.293 10.1137 12.185C10.1318 12.1729 10.1492 12.1597 10.1658 12.1456L11.8751 10.6874L15.1798 12.1674C15.1798 12.1674 15.1854 12.1674 15.1875 12.1674C15.0976 12.8489 14.7624 13.4744 14.2448 13.9267C13.7271 14.379 13.0624 14.6272 12.375 14.6249Z",me=()=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:e.jsx("path",{d:Ee,fill:"#727272"})}),c={name:"E-mail — Inserir e-mail",args:{type:"email",placeholder:"Digite seu melhor e-mail *",icon:e.jsx(w,{})}},p={name:"Afiliado — Código de afiliado",args:{type:"text",placeholder:"Digite seu código de afiliado",icon:e.jsx(ce,{})}},m={name:"Comerciante — Nome",args:{type:"text",placeholder:"Nome",icon:e.jsx(pe,{})}},u={name:"Phone — ícone 18px",args:{type:"tel",placeholder:"WhatsApp",icon:e.jsx(me,{})}},ue=()=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:e.jsx("path",{d:"M15.75 2.8125V5.625C15.75 5.77418 15.6907 5.91726 15.5852 6.02275C15.4798 6.12824 15.3367 6.1875 15.1875 6.1875C15.0383 6.1875 14.8952 6.12824 14.7898 6.02275C14.6843 5.91726 14.625 5.77418 14.625 5.625V3.375H12.375C12.2258 3.375 12.0827 3.31574 11.9773 3.21025C11.8718 3.10476 11.8125 2.96168 11.8125 2.8125C11.8125 2.66332 11.8718 2.52024 11.9773 2.41475C12.0827 2.30926 12.2258 2.25 12.375 2.25H15.1875C15.3367 2.25 15.4798 2.30926 15.5852 2.41475C15.6907 2.52024 15.75 2.66332 15.75 2.8125ZM5.625 14.625H3.375V12.375C3.375 12.2258 3.31574 12.0827 3.21025 11.9773C3.10476 11.8718 2.96168 11.8125 2.8125 11.8125C2.66332 11.8125 2.52024 11.8718 2.41475 11.9773C2.30926 12.0827 2.25 12.2258 2.25 12.375V15.1875C2.25 15.3367 2.30926 15.4798 2.41475 15.5852C2.52024 15.6907 2.66332 15.75 2.8125 15.75H5.625C5.77418 15.75 5.91726 15.6907 6.02275 15.5852C6.12824 15.4798 6.1875 15.3367 6.1875 15.1875C6.1875 15.0383 6.12824 14.8952 6.02275 14.7898C5.91726 14.6843 5.77418 14.625 5.625 14.625ZM15.1875 11.8125C15.0383 11.8125 14.8952 11.8718 14.7898 11.9773C14.6843 12.0827 14.625 12.2258 14.625 12.375V14.625H12.375C12.2258 14.625 12.0827 14.6843 11.9773 14.7898C11.8718 14.8952 11.8125 15.0383 11.8125 15.1875C11.8125 15.3367 11.8718 15.4798 11.9773 15.5852C12.0827 15.6907 12.2258 15.75 12.375 15.75H15.1875C15.3367 15.75 15.4798 15.6907 15.5852 15.5852C15.6907 15.4798 15.75 15.3367 15.75 15.1875V12.375C15.75 12.2258 15.6907 12.0827 15.5852 11.9773C15.4798 11.8718 15.3367 11.8125 15.1875 11.8125ZM2.8125 6.1875C2.96168 6.1875 3.10476 6.12824 3.21025 6.02275C3.31574 5.91726 3.375 5.77418 3.375 5.625V3.375H5.625C5.77418 3.375 5.91726 3.31574 6.02275 3.21025C6.12824 3.10476 6.1875 2.96168 6.1875 2.8125C6.1875 2.66332 6.12824 2.52024 6.02275 2.41475C5.91726 2.30926 5.77418 2.25 5.625 2.25H2.8125C2.66332 2.25 2.52024 2.30926 2.41475 2.41475C2.30926 2.52024 2.25 2.66332 2.25 2.8125V5.625C2.25 5.77418 2.30926 5.91726 2.41475 6.02275C2.52024 6.12824 2.66332 6.1875 2.8125 6.1875ZM5.625 5.0625H12.375C12.5242 5.0625 12.6673 5.12176 12.7727 5.22725C12.8782 5.33274 12.9375 5.47582 12.9375 5.625V12.375C12.9375 12.5242 12.8782 12.6673 12.7727 12.7727C12.6673 12.8782 12.5242 12.9375 12.375 12.9375H5.625C5.47582 12.9375 5.33274 12.8782 5.22725 12.7727C5.12176 12.6673 5.0625 12.5242 5.0625 12.375V5.625C5.0625 5.47582 5.12176 5.33274 5.22725 5.22725C5.33274 5.12176 5.47582 5.0625 5.625 5.0625ZM6.1875 11.8125H11.8125V6.1875H6.1875V11.8125Z",fill:"white"})}),h={name:"Envio — Endereço do destinatário",args:{label:"Endereço do destinatário",type:"text",placeholder:"Digite o endereço do destinatário",rightIcon:e.jsx(ue,{})}},g={name:"Envio — Endereço preenchido",args:{label:"Endereço do destinatário",type:"text",value:"bc1qar0srrr7xfkvy5l643lydnw9re59",rightIcon:e.jsx(ue,{})}},C={name:"Envio — Quantidade desejada",args:{label:"Quantidade",type:"text",placeholder:"Digite a quantidade desejada"}};function be(t){const n=t.replace(/\D/g,"");return n?(parseInt(n,10)/100).toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2}):""}const x={name:"Envio — Quantidade preenchida (1.000,00)",args:{label:"Quantidade",type:"text",value:"1.000,00"}},f={name:"Envio — Quantidade formatada (interativo)",parameters:{controls:{disable:!0}},render:()=>{const[t,n]=a.useState(""),o=s=>{n(be(s.target.value))};return e.jsx("div",{style:{width:358,background:"#080808",padding:"24px 0"},children:e.jsx(r,{label:"Quantidade",type:"text",placeholder:"Digite a quantidade desejada",value:t,onChange:o})})}},y={name:"Sem ícone",args:{type:"text",placeholder:"Campo de texto"}},v={name:"Desabilitado",args:{type:"text",placeholder:"Campo desabilitado",icon:e.jsx(w,{}),disabled:!0}},I={name:"Todos os inputs",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{width:358,background:"#080808",padding:"24px 16px",display:"flex",flexDirection:"column",gap:12},children:[e.jsx(r,{type:"email",placeholder:"Digite seu melhor e-mail *",icon:e.jsx(w,{})}),e.jsx(r,{type:"text",placeholder:"Digite seu código de afiliado",icon:e.jsx(ce,{})}),e.jsx(r,{type:"text",placeholder:"Nome",icon:e.jsx(pe,{})}),e.jsx(r,{type:"tel",placeholder:"WhatsApp",icon:e.jsx(me,{})}),e.jsx(r,{type:"text",placeholder:"Campo sem ícone"}),e.jsx(r,{type:"text",placeholder:"Desabilitado",icon:e.jsx(w,{}),disabled:!0})]})};var D,A,M;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'E-mail — Inserir e-mail',
  args: {
    type: 'email',
    placeholder: 'Digite seu melhor e-mail *',
    icon: <IconEmail />
  }
}`,...(M=(A=c.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var H,S,L;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Afiliado — Código de afiliado',
  args: {
    type: 'text',
    placeholder: 'Digite seu código de afiliado',
    icon: <IconAfiliado />
  }
}`,...(L=(S=p.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};var R,V,Z;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Comerciante — Nome',
  args: {
    type: 'text',
    placeholder: 'Nome',
    icon: <IconNome />
  }
}`,...(Z=(V=m.parameters)==null?void 0:V.docs)==null?void 0:Z.source}}};var T,N,Q;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Phone — ícone 18px',
  args: {
    type: 'tel',
    placeholder: 'WhatsApp',
    icon: <IconPhone18 />
  }
}`,...(Q=(N=u.parameters)==null?void 0:N.docs)==null?void 0:Q.source}}};var q,F,k;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Envio — Endereço do destinatário',
  args: {
    label: 'Endereço do destinatário',
    type: 'text',
    placeholder: 'Digite o endereço do destinatário',
    rightIcon: <IconScan />
  }
}`,...(k=(F=h.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};var P,z,B;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Envio — Endereço preenchido',
  args: {
    label: 'Endereço do destinatário',
    type: 'text',
    value: 'bc1qar0srrr7xfkvy5l643lydnw9re59',
    rightIcon: <IconScan />
  }
}`,...(B=(z=g.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var W,_,O;C.parameters={...C.parameters,docs:{...(W=C.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Envio — Quantidade desejada',
  args: {
    label: 'Quantidade',
    type: 'text',
    placeholder: 'Digite a quantidade desejada'
  }
}`,...(O=(_=C.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var U,$,G;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Envio — Quantidade preenchida (1.000,00)',
  args: {
    label: 'Quantidade',
    type: 'text',
    value: '1.000,00'
  }
}`,...(G=($=x.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var J,K,X;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'Envio — Quantidade formatada (interativo)',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const [value, setValue] = useState('');
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(formatBRL(e.target.value));
    };
    return <div style={{
      width: 358,
      background: '#080808',
      padding: '24px 0'
    }}>\r
        <AppInput label="Quantidade" type="text" placeholder="Digite a quantidade desejada" value={value} onChange={handleChange} />\r
      </div>;
  }
}`,...(X=(K=f.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var Y,ee,ae;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'Sem ícone',
  args: {
    type: 'text',
    placeholder: 'Campo de texto'
  }
}`,...(ae=(ee=y.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,ne,re;v.parameters={...v.parameters,docs:{...(te=v.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: 'Desabilitado',
  args: {
    type: 'text',
    placeholder: 'Campo desabilitado',
    icon: <IconEmail />,
    disabled: true
  }
}`,...(re=(ne=v.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var oe,se,ie;I.parameters={...I.parameters,docs:{...(oe=I.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: 'Todos os inputs',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    width: 358,
    background: '#080808',
    padding: '24px 16px',
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }}>\r
      <AppInput type="email" placeholder="Digite seu melhor e-mail *" icon={<IconEmail />} />\r
      <AppInput type="text" placeholder="Digite seu código de afiliado" icon={<IconAfiliado />} />\r
      <AppInput type="text" placeholder="Nome" icon={<IconNome />} />\r
      <AppInput type="tel" placeholder="WhatsApp" icon={<IconPhone18 />} />\r
      <AppInput type="text" placeholder="Campo sem ícone" />\r
      <AppInput type="text" placeholder="Desabilitado" icon={<IconEmail />} disabled />\r
    </div>
}`,...(ie=(se=I.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};const Me=["EmailInput","AfiliadoInput","NomeInput","PhoneInput18","EnderecoDestinatario","EnderecoPreenchido","QuantidadeDesejada","QuantidadePreenchida","QuantidadeFormatada","SemIcone","Desabilitado","TodosInputs"];export{p as AfiliadoInput,v as Desabilitado,c as EmailInput,h as EnderecoDestinatario,g as EnderecoPreenchido,m as NomeInput,u as PhoneInput18,C as QuantidadeDesejada,f as QuantidadeFormatada,x as QuantidadePreenchida,y as SemIcone,I as TodosInputs,Me as __namedExportsOrder,Ae as default};
