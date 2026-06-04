import{j as a}from"./jsx-runtime-DiklIkkE.js";import{C as e}from"./CTAButton-DxTuTp0K.js";import"./index-DRjF_FHU.js";const ka={title:"Componentes/Ações/Botões/CTAs",component:e,tags:["autodocs"],parameters:{layout:"centered",backgrounds:{default:"app",values:[{name:"app",value:"#080808"},{name:"darker",value:"#000000"}]},docs:{description:{component:`
Botões de Call to Action do fluxo do app. Cada variante tem dois estados:

| Estado | Quando usar |
|---|---|
| **idle** | Usuário pode avançar — cor Medium (mais brilhante) |
| **active** | Botão pressionado ou bloqueado — cor Dark (mais escura) |

**CSS base:**
\`\`\`css
display: flex;
width: 328px;
height: 52px;
padding: 0 20px;
justify-content: center;
align-items: center;
gap: 8px;
border-radius: 8px;
box-shadow: 0 4px 11px 0 rgba(0, 0, 0, 0.25);
font-family: Inter;
font-size: 15px;
font-weight: 700;
\`\`\`
        `}}},argTypes:{variant:{control:"select",options:["primary","secondary","success","ghost","danger"]},buttonState:{control:"radio",options:["idle","active"]},label:{control:"text"},disabled:{control:"boolean"}},decorators:[h=>a.jsx("div",{style:{padding:"32px 16px",background:"#080808",borderRadius:12},children:a.jsx(h,{})})]},Ma={fontFamily:"'Inter', sans-serif",fontSize:11,fontWeight:600,color:"#727272",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:8};function t({title:h,children:La}){return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:0},children:[a.jsx("span",{style:Ma,children:h}),a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10},children:La})]})}const r=()=>a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"13",viewBox:"0 0 12 13",fill:"none",children:a.jsx("path",{d:"M11.5 2H9V1.5C9 1.10218 8.84196 0.720644 8.56066 0.43934C8.27936 0.158035 7.89782 0 7.5 0H4.5C4.10218 0 3.72064 0.158035 3.43934 0.43934C3.15804 0.720644 3 1.10218 3 1.5V2H0.5C0.367392 2 0.240215 2.05268 0.146447 2.14645C0.0526785 2.24021 0 2.36739 0 2.5C0 2.63261 0.0526785 2.75979 0.146447 2.85355C0.240215 2.94732 0.367392 3 0.5 3H1V12C1 12.2652 1.10536 12.5196 1.29289 12.7071C1.48043 12.8946 1.73478 13 2 13H10C10.2652 13 10.5196 12.8946 10.7071 12.7071C10.8946 12.5196 11 12.2652 11 12V3H11.5C11.6326 3 11.7598 2.94732 11.8536 2.85355C11.9473 2.75979 12 2.63261 12 2.5C12 2.36739 11.9473 2.24021 11.8536 2.14645C11.7598 2.05268 11.6326 2 11.5 2ZM4 1.5C4 1.36739 4.05268 1.24021 4.14645 1.14645C4.24021 1.05268 4.36739 1 4.5 1H7.5C7.63261 1 7.75979 1.05268 7.85355 1.14645C7.94732 1.24021 8 1.36739 8 1.5V2H4V1.5ZM10 12H2V3H10V12ZM5 5.5V9.5C5 9.63261 4.94732 9.75979 4.85355 9.85355C4.75979 9.94732 4.63261 10 4.5 10C4.36739 10 4.24021 9.94732 4.14645 9.85355C4.05268 9.75979 4 9.63261 4 9.5V5.5C4 5.36739 4.05268 5.24021 4.14645 5.14645C4.24021 5.05268 4.36739 5 4.5 5C4.63261 5 4.75979 5.05268 4.85355 5.14645C4.94732 5.24021 5 5.36739 5 5.5ZM8 5.5V9.5C8 9.63261 7.94732 9.75979 7.85355 9.85355C7.75979 9.94732 7.63261 10 7.5 10C7.36739 10 7.24021 9.94732 7.14645 9.85355C7.05268 9.75979 7 9.63261 7 9.5V5.5C7 5.36739 7.05268 5.24021 7.14645 5.14645C7.24021 5.05268 7.36739 5 7.5 5C7.63261 5 7.75979 5.05268 7.85355 5.14645C7.94732 5.24021 8 5.36339 8 5.5Z",fill:"white"})}),n={name:"Login — escala de estados",parameters:{controls:{disable:!0}},render:()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[a.jsxs(t,{title:"idle — pronto para clicar",children:[a.jsx(e,{label:"Criar carteira",variant:"primary",buttonState:"idle"}),a.jsx(e,{label:"Continuar",variant:"primary",buttonState:"idle"})]}),a.jsxs(t,{title:"active — selecionado / bloqueado",children:[a.jsx(e,{label:"Criar carteira",variant:"primary",buttonState:"active"}),a.jsx(e,{label:"Continuar",variant:"primary",buttonState:"active"})]})]})},o={name:"Criar carteira (idle)",args:{label:"Criar carteira",variant:"primary",buttonState:"idle"}},s={name:"Criar carteira (active)",args:{label:"Criar carteira",variant:"primary",buttonState:"active"}},l={name:"Continuar (idle)",args:{label:"Continuar",variant:"primary",buttonState:"idle"}},i={name:"Continuar (active)",args:{label:"Continuar",variant:"primary",buttonState:"active"}},c={name:"Recuperar carteira (branco)",args:{label:"Recuperar carteira",variant:"secondary"}},d={name:"Recuperar carteira (cinza)",args:{label:"Recuperar carteira",variant:"secondary-subtitle"}},u={name:"Recuperar carteira — escala",parameters:{controls:{disable:!0}},render:()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[a.jsx(e,{label:"Recuperar carteira",variant:"secondary"}),a.jsx(e,{label:"Recuperar carteira",variant:"secondary-subtitle"})]})},p={name:"Afiliado — escala de estados",parameters:{controls:{disable:!0}},render:()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[a.jsx(t,{title:"idle — pronto para clicar",children:a.jsx(e,{label:"Cadastrar agora",variant:"success",buttonState:"idle"})}),a.jsx(t,{title:"active — selecionado / bloqueado",children:a.jsx(e,{label:"Cadastrar agora",variant:"success",buttonState:"active"})}),a.jsx(t,{title:"ghost — pular etapa",children:a.jsx(e,{label:"Cadastrar depois",variant:"ghost"})})]})},m={name:"Cadastrar agora (idle)",args:{label:"Cadastrar agora",variant:"success",buttonState:"idle"}},C={name:"Cadastrar agora (active)",args:{label:"Cadastrar agora",variant:"success",buttonState:"active"}},b={name:"Cadastrar depois",args:{label:"Cadastrar depois",variant:"ghost"}},v={name:"Deletar conta — escala de estados",parameters:{controls:{disable:!0}},render:()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[a.jsx(t,{title:"com ícone — idle (#EA2415)",children:a.jsx(e,{label:"Deletar conta",variant:"danger",buttonState:"idle",leftIcon:a.jsx(r,{})})}),a.jsx(t,{title:"com ícone — active (#CF1C0E)",children:a.jsx(e,{label:"Deletar conta",variant:"danger",buttonState:"active",leftIcon:a.jsx(r,{})})}),a.jsx(t,{title:"sem ícone — idle (#EA2415)",children:a.jsx(e,{label:"Deletar conta",variant:"danger",buttonState:"idle"})}),a.jsx(t,{title:"sem ícone — active (#CF1C0E)",children:a.jsx(e,{label:"Deletar conta",variant:"danger",buttonState:"active"})})]})},g={name:"Deletar conta — com ícone (idle)",args:{label:"Deletar conta",variant:"danger",buttonState:"idle",leftIcon:a.jsx(r,{})}},S={name:"Deletar conta — com ícone (active)",args:{label:"Deletar conta",variant:"danger",buttonState:"active",leftIcon:a.jsx(r,{})}},x={name:"Deletar conta — sem ícone (idle)",args:{label:"Deletar conta",variant:"danger",buttonState:"idle"}},y={name:"Deletar conta — sem ícone (active)",args:{label:"Deletar conta",variant:"danger",buttonState:"active"}},f={name:"Cancelar — escala de estados",parameters:{controls:{disable:!0}},render:()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[a.jsx(t,{title:"idle (#070506)",children:a.jsx(e,{label:"Cancelar",variant:"cancel",buttonState:"idle"})}),a.jsx(t,{title:"active / clicável (#191818)",children:a.jsx(e,{label:"Cancelar",variant:"cancel",buttonState:"active"})})]})},j={name:"Cancelar (idle)",args:{label:"Cancelar",variant:"cancel",buttonState:"idle"}},D={name:"Cancelar (active)",args:{label:"Cancelar",variant:"cancel",buttonState:"active"}},A={name:"Todos os CTAs",parameters:{controls:{disable:!0}},render:()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:32},children:[a.jsxs(t,{title:"Primary — Login / E-mail",children:[a.jsx(e,{label:"Criar carteira (idle)",variant:"primary",buttonState:"idle"}),a.jsx(e,{label:"Criar carteira (active)",variant:"primary",buttonState:"active"}),a.jsx(e,{label:"Recuperar carteira",variant:"secondary"})]}),a.jsxs(t,{title:"Success — Afiliado / Configuração",children:[a.jsx(e,{label:"Cadastrar agora (idle)",variant:"success",buttonState:"idle"}),a.jsx(e,{label:"Cadastrar agora (active)",variant:"success",buttonState:"active"}),a.jsx(e,{label:"Cadastrar depois",variant:"ghost"})]}),a.jsxs(t,{title:"Danger — com ícone",children:[a.jsx(e,{label:"Deletar conta",variant:"danger",buttonState:"idle",leftIcon:a.jsx(r,{})}),a.jsx(e,{label:"Deletar conta",variant:"danger",buttonState:"active",leftIcon:a.jsx(r,{})})]}),a.jsxs(t,{title:"Danger — sem ícone",children:[a.jsx(e,{label:"Deletar conta",variant:"danger",buttonState:"idle"}),a.jsx(e,{label:"Deletar conta",variant:"danger",buttonState:"active"})]}),a.jsxs(t,{title:"Cancel",children:[a.jsx(e,{label:"Cancelar",variant:"cancel",buttonState:"idle"}),a.jsx(e,{label:"Cancelar",variant:"cancel",buttonState:"active"})]})]})};var T,I,B;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Login — escala de estados',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>\r
      <StateGroup title="idle — pronto para clicar">\r
        <CTAButton label="Criar carteira" variant="primary" buttonState="idle" />\r
        <CTAButton label="Continuar" variant="primary" buttonState="idle" />\r
      </StateGroup>\r
      <StateGroup title="active — selecionado / bloqueado">\r
        <CTAButton label="Criar carteira" variant="primary" buttonState="active" />\r
        <CTAButton label="Continuar" variant="primary" buttonState="active" />\r
      </StateGroup>\r
    </div>
}`,...(B=(I=n.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};var G,R,E;o.parameters={...o.parameters,docs:{...(G=o.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Criar carteira (idle)',
  args: {
    label: 'Criar carteira',
    variant: 'primary',
    buttonState: 'idle'
  }
}`,...(E=(R=o.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var V,w,H;s.parameters={...s.parameters,docs:{...(V=s.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Criar carteira (active)',
  args: {
    label: 'Criar carteira',
    variant: 'primary',
    buttonState: 'active'
  }
}`,...(H=(w=s.parameters)==null?void 0:w.docs)==null?void 0:H.source}}};var L,M,q;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Continuar (idle)',
  args: {
    label: 'Continuar',
    variant: 'primary',
    buttonState: 'idle'
  }
}`,...(q=(M=l.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};var F,Z,k;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Continuar (active)',
  args: {
    label: 'Continuar',
    variant: 'primary',
    buttonState: 'active'
  }
}`,...(k=(Z=i.parameters)==null?void 0:Z.docs)==null?void 0:k.source}}};var z,P,_;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Recuperar carteira (branco)',
  args: {
    label: 'Recuperar carteira',
    variant: 'secondary'
  }
}`,...(_=(P=c.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var O,Q,U;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Recuperar carteira (cinza)',
  args: {
    label: 'Recuperar carteira',
    variant: 'secondary-subtitle'
  }
}`,...(U=(Q=d.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var W,J,K;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Recuperar carteira — escala',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 4
  }}>\r
      <CTAButton label="Recuperar carteira" variant="secondary" />\r
      <CTAButton label="Recuperar carteira" variant="secondary-subtitle" />\r
    </div>
}`,...(K=(J=u.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var N,X,Y;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Afiliado — escala de estados',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>\r
      <StateGroup title="idle — pronto para clicar">\r
        <CTAButton label="Cadastrar agora" variant="success" buttonState="idle" />\r
      </StateGroup>\r
      <StateGroup title="active — selecionado / bloqueado">\r
        <CTAButton label="Cadastrar agora" variant="success" buttonState="active" />\r
      </StateGroup>\r
      <StateGroup title="ghost — pular etapa">\r
        <CTAButton label="Cadastrar depois" variant="ghost" />\r
      </StateGroup>\r
    </div>
}`,...(Y=(X=p.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var $,aa,ea;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Cadastrar agora (idle)',
  args: {
    label: 'Cadastrar agora',
    variant: 'success',
    buttonState: 'idle'
  }
}`,...(ea=(aa=m.parameters)==null?void 0:aa.docs)==null?void 0:ea.source}}};var ta,ra,na;C.parameters={...C.parameters,docs:{...(ta=C.parameters)==null?void 0:ta.docs,source:{originalSource:`{
  name: 'Cadastrar agora (active)',
  args: {
    label: 'Cadastrar agora',
    variant: 'success',
    buttonState: 'active'
  }
}`,...(na=(ra=C.parameters)==null?void 0:ra.docs)==null?void 0:na.source}}};var oa,sa,la;b.parameters={...b.parameters,docs:{...(oa=b.parameters)==null?void 0:oa.docs,source:{originalSource:`{
  name: 'Cadastrar depois',
  args: {
    label: 'Cadastrar depois',
    variant: 'ghost'
  }
}`,...(la=(sa=b.parameters)==null?void 0:sa.docs)==null?void 0:la.source}}};var ia,ca,da;v.parameters={...v.parameters,docs:{...(ia=v.parameters)==null?void 0:ia.docs,source:{originalSource:`{
  name: 'Deletar conta — escala de estados',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>\r
      <StateGroup title="com ícone — idle (#EA2415)">\r
        <CTAButton label="Deletar conta" variant="danger" buttonState="idle" leftIcon={<IconTrash />} />\r
      </StateGroup>\r
      <StateGroup title="com ícone — active (#CF1C0E)">\r
        <CTAButton label="Deletar conta" variant="danger" buttonState="active" leftIcon={<IconTrash />} />\r
      </StateGroup>\r
      <StateGroup title="sem ícone — idle (#EA2415)">\r
        <CTAButton label="Deletar conta" variant="danger" buttonState="idle" />\r
      </StateGroup>\r
      <StateGroup title="sem ícone — active (#CF1C0E)">\r
        <CTAButton label="Deletar conta" variant="danger" buttonState="active" />\r
      </StateGroup>\r
    </div>
}`,...(da=(ca=v.parameters)==null?void 0:ca.docs)==null?void 0:da.source}}};var ua,pa,ma;g.parameters={...g.parameters,docs:{...(ua=g.parameters)==null?void 0:ua.docs,source:{originalSource:`{
  name: 'Deletar conta — com ícone (idle)',
  args: {
    label: 'Deletar conta',
    variant: 'danger',
    buttonState: 'idle',
    leftIcon: <IconTrash />
  }
}`,...(ma=(pa=g.parameters)==null?void 0:pa.docs)==null?void 0:ma.source}}};var Ca,ba,va;S.parameters={...S.parameters,docs:{...(Ca=S.parameters)==null?void 0:Ca.docs,source:{originalSource:`{
  name: 'Deletar conta — com ícone (active)',
  args: {
    label: 'Deletar conta',
    variant: 'danger',
    buttonState: 'active',
    leftIcon: <IconTrash />
  }
}`,...(va=(ba=S.parameters)==null?void 0:ba.docs)==null?void 0:va.source}}};var ga,Sa,xa;x.parameters={...x.parameters,docs:{...(ga=x.parameters)==null?void 0:ga.docs,source:{originalSource:`{
  name: 'Deletar conta — sem ícone (idle)',
  args: {
    label: 'Deletar conta',
    variant: 'danger',
    buttonState: 'idle'
  }
}`,...(xa=(Sa=x.parameters)==null?void 0:Sa.docs)==null?void 0:xa.source}}};var ya,fa,ja;y.parameters={...y.parameters,docs:{...(ya=y.parameters)==null?void 0:ya.docs,source:{originalSource:`{
  name: 'Deletar conta — sem ícone (active)',
  args: {
    label: 'Deletar conta',
    variant: 'danger',
    buttonState: 'active'
  }
}`,...(ja=(fa=y.parameters)==null?void 0:fa.docs)==null?void 0:ja.source}}};var Da,Aa,ha;f.parameters={...f.parameters,docs:{...(Da=f.parameters)==null?void 0:Da.docs,source:{originalSource:`{
  name: 'Cancelar — escala de estados',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>\r
      <StateGroup title="idle (#070506)">\r
        <CTAButton label="Cancelar" variant="cancel" buttonState="idle" />\r
      </StateGroup>\r
      <StateGroup title="active / clicável (#191818)">\r
        <CTAButton label="Cancelar" variant="cancel" buttonState="active" />\r
      </StateGroup>\r
    </div>
}`,...(ha=(Aa=f.parameters)==null?void 0:Aa.docs)==null?void 0:ha.source}}};var Ta,Ia,Ba;j.parameters={...j.parameters,docs:{...(Ta=j.parameters)==null?void 0:Ta.docs,source:{originalSource:`{
  name: 'Cancelar (idle)',
  args: {
    label: 'Cancelar',
    variant: 'cancel',
    buttonState: 'idle'
  }
}`,...(Ba=(Ia=j.parameters)==null?void 0:Ia.docs)==null?void 0:Ba.source}}};var Ga,Ra,Ea;D.parameters={...D.parameters,docs:{...(Ga=D.parameters)==null?void 0:Ga.docs,source:{originalSource:`{
  name: 'Cancelar (active)',
  args: {
    label: 'Cancelar',
    variant: 'cancel',
    buttonState: 'active'
  }
}`,...(Ea=(Ra=D.parameters)==null?void 0:Ra.docs)==null?void 0:Ea.source}}};var Va,wa,Ha;A.parameters={...A.parameters,docs:{...(Va=A.parameters)==null?void 0:Va.docs,source:{originalSource:`{
  name: 'Todos os CTAs',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 32
  }}>\r
      <StateGroup title="Primary — Login / E-mail">\r
        <CTAButton label="Criar carteira (idle)" variant="primary" buttonState="idle" />\r
        <CTAButton label="Criar carteira (active)" variant="primary" buttonState="active" />\r
        <CTAButton label="Recuperar carteira" variant="secondary" />\r
      </StateGroup>\r
      <StateGroup title="Success — Afiliado / Configuração">\r
        <CTAButton label="Cadastrar agora (idle)" variant="success" buttonState="idle" />\r
        <CTAButton label="Cadastrar agora (active)" variant="success" buttonState="active" />\r
        <CTAButton label="Cadastrar depois" variant="ghost" />\r
      </StateGroup>\r
      <StateGroup title="Danger — com ícone">\r
        <CTAButton label="Deletar conta" variant="danger" buttonState="idle" leftIcon={<IconTrash />} />\r
        <CTAButton label="Deletar conta" variant="danger" buttonState="active" leftIcon={<IconTrash />} />\r
      </StateGroup>\r
      <StateGroup title="Danger — sem ícone">\r
        <CTAButton label="Deletar conta" variant="danger" buttonState="idle" />\r
        <CTAButton label="Deletar conta" variant="danger" buttonState="active" />\r
      </StateGroup>\r
      <StateGroup title="Cancel">\r
        <CTAButton label="Cancelar" variant="cancel" buttonState="idle" />\r
        <CTAButton label="Cancelar" variant="cancel" buttonState="active" />\r
      </StateGroup>\r
    </div>
}`,...(Ha=(wa=A.parameters)==null?void 0:wa.docs)==null?void 0:Ha.source}}};const za=["LoginEscala","CriarCarteiraIdle","CriarCarteiraActive","ContinuarIdle","ContinuarActive","RecuperarCarteira","RecuperarCarteiraSubtitle","RecuperarCarteiraEscala","AfiliadoEscala","CadastrarAgoraIdle","CadastrarAgoraActive","CadastrarDepois","DeletarContaEscala","DeletarContaIconeIdle","DeletarContaIconeActive","DeletarContaIdle","DeletarContaActive","CancelarEscala","CancelarIdle","CancelarActive","TodoosCTAs"];export{p as AfiliadoEscala,C as CadastrarAgoraActive,m as CadastrarAgoraIdle,b as CadastrarDepois,D as CancelarActive,f as CancelarEscala,j as CancelarIdle,i as ContinuarActive,l as ContinuarIdle,s as CriarCarteiraActive,o as CriarCarteiraIdle,y as DeletarContaActive,v as DeletarContaEscala,S as DeletarContaIconeActive,g as DeletarContaIconeIdle,x as DeletarContaIdle,n as LoginEscala,c as RecuperarCarteira,u as RecuperarCarteiraEscala,d as RecuperarCarteiraSubtitle,A as TodoosCTAs,za as __namedExportsOrder,ka as default};
