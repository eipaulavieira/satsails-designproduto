import{j as e}from"./jsx-runtime-DiklIkkE.js";import"./index-DRjF_FHU.js";const E={primary:{background:"#CD7C04",color:"#000000",border:"none",boxShadow:"0 4px 11px 0 rgba(0,0,0,0.25)"},secondary:{background:"#080808",color:"#ffffff",border:"1px solid #333333",boxShadow:"0 4px 11px 0 rgba(0,0,0,0.25)"},success:{background:"#00C853",color:"#000000",border:"none",boxShadow:"0 4px 11px 0 rgba(0,0,0,0.25)"},ghost:{background:"none",color:"#727272",border:"none",boxShadow:"none"}};function r({label:c,variant:a="primary",disabled:o=!1,onClick:A}){return e.jsx("button",{onClick:A,disabled:o,style:{display:"flex",width:328,height:a==="ghost"?"auto":52,padding:"0 20px",justifyContent:"center",alignItems:"center",gap:8,borderRadius:8,fontFamily:"'Inter', sans-serif",fontSize:a==="ghost"?14:15,fontWeight:a==="ghost"?400:700,letterSpacing:"-0.2px",cursor:o?"not-allowed":"pointer",opacity:o?.4:1,transition:"opacity 0.15s, transform 0.1s",boxSizing:"border-box",...E[a]},onMouseDown:u=>{o||(u.currentTarget.style.opacity="0.85")},onMouseUp:u=>{o||(u.currentTarget.style.opacity="1")},children:c})}r.__docgenInfo={description:"",methods:[],displayName:"CTAButton",props:{label:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'success' | 'ghost'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'ghost'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const I={title:"Componentes/Ações/CTAs",component:r,parameters:{layout:"centered",backgrounds:{default:"app",values:[{name:"app",value:"#080808"},{name:"darker",value:"#000000"}]},docs:{description:{component:`
Botões de Call to Action (CTA) do app Satsails.

**Especificação base (CSS):**
\`\`\`css
display: flex;
width: 328px;
height: 52px;
padding: 0 20px;
justify-content: center;
align-items: center;
gap: 8px;
border-radius: 8px;
background: var(--Color-Primary-Dark, #CD7C04);
box-shadow: 0 4px 11px 0 rgba(0, 0, 0, 0.25);
font-family: Inter;
font-size: 15px;
font-weight: 700;
color: #000;
\`\`\`

**Flutter (ElevatedButton base):**
\`\`\`dart
ElevatedButton(
  onPressed: () {},
  style: ElevatedButton.styleFrom(
    backgroundColor: const Color(0xFFCD7C04),
    foregroundColor: Colors.black,
    minimumSize: const Size(328, 52),
    padding: const EdgeInsets.symmetric(horizontal: 20),
    shape: RoundedRectangleBorder(
      borderRadius: BorderRadius.circular(8),
    ),
    elevation: 4,
    shadowColor: Colors.black.withOpacity(0.25),
  ),
  child: const Text(
    'Label',
    style: TextStyle(
      fontFamily: 'Inter',
      fontSize: 15,
      fontWeight: FontWeight.w700,
      letterSpacing: -0.2,
    ),
  ),
)
\`\`\`
        `}}},argTypes:{variant:{control:"select",options:["primary","secondary","success","ghost"]},label:{control:"text"},disabled:{control:"boolean"}},tags:["autodocs"],decorators:[c=>e.jsx("div",{style:{padding:"32px 16px",background:"#080808",borderRadius:12},children:e.jsx(c,{})})]},t={name:"Login — Criar carteira",args:{label:"Criar carteira",variant:"primary"},parameters:{docs:{description:{story:`
**Tela:** Login · **Ação:** inicia o fluxo de criação de PIN

\`\`\`css
background: #CD7C04; /* --Color-Primary-Dark */
color: #000;
\`\`\`

**Flutter:**
\`\`\`dart
ElevatedButton(
  onPressed: () => Navigator.pushNamed(context, '/criar-pin'),
  style: ElevatedButton.styleFrom(
    backgroundColor: const Color(0xFFCD7C04),
    foregroundColor: Colors.black,
    minimumSize: const Size(328, 52),
    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
    elevation: 4,
    shadowColor: Colors.black.withOpacity(0.25),
  ),
  child: const Text('Criar carteira',
    style: TextStyle(fontFamily: 'Inter', fontSize: 15, fontWeight: FontWeight.w700)),
)
\`\`\`
        `}}}},n={name:"Login — Recuperar carteira",args:{label:"Recuperar carteira",variant:"secondary"},parameters:{docs:{description:{story:`
**Tela:** Login · **Ação:** recuperação de carteira existente

\`\`\`css
background: #080808;
color: #fff;
border: 1px solid #333333;
\`\`\`

**Flutter:**
\`\`\`dart
ElevatedButton(
  onPressed: () {},
  style: ElevatedButton.styleFrom(
    backgroundColor: const Color(0xFF080808),
    foregroundColor: Colors.white,
    minimumSize: const Size(328, 52),
    shape: RoundedRectangleBorder(
      borderRadius: BorderRadius.circular(8),
      side: const BorderSide(color: Color(0xFF333333)),
    ),
    elevation: 4,
    shadowColor: Colors.black.withOpacity(0.25),
  ),
  child: const Text('Recuperar carteira',
    style: TextStyle(fontFamily: 'Inter', fontSize: 15, fontWeight: FontWeight.w700)),
)
\`\`\`
        `}}}},s={name:"E-mail — Continuar",args:{label:"Continuar",variant:"primary"},parameters:{docs:{description:{story:`
**Tela:** Inserir e-mail · **Ação:** avança para verificação de código

\`\`\`css
background: #CD7C04; /* --Color-Primary-Dark */
color: #000;
\`\`\`

**Flutter:**
\`\`\`dart
ElevatedButton(
  onPressed: () => Navigator.pushNamed(context, '/verify-code'),
  style: ElevatedButton.styleFrom(
    backgroundColor: const Color(0xFFCD7C04),
    foregroundColor: Colors.black,
    minimumSize: const Size(328, 52),
    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
    elevation: 4,
  ),
  child: const Text('Continuar',
    style: TextStyle(fontFamily: 'Inter', fontSize: 15, fontWeight: FontWeight.w700)),
)
\`\`\`
        `}}}},i={name:"Afiliado — Cadastrar agora",args:{label:"Cadastrar agora",variant:"success"},parameters:{docs:{description:{story:`
**Tela:** Afiliado · **Ação:** salva código e vai para Home

\`\`\`css
background: #00C853; /* --Color-Secondary */
color: #000;
\`\`\`

**Flutter:**
\`\`\`dart
ElevatedButton(
  onPressed: () => Navigator.pushNamed(context, '/home'),
  style: ElevatedButton.styleFrom(
    backgroundColor: const Color(0xFF00C853),
    foregroundColor: Colors.black,
    minimumSize: const Size(328, 52),
    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
    elevation: 4,
    shadowColor: Colors.black.withOpacity(0.25),
  ),
  child: const Text('Cadastrar agora',
    style: TextStyle(fontFamily: 'Inter', fontSize: 15, fontWeight: FontWeight.w700)),
)
\`\`\`
        `}}}},l={name:"Afiliado — Cadastrar depois",args:{label:"Cadastrar depois",variant:"ghost"},parameters:{docs:{description:{story:`
**Tela:** Afiliado · **Ação:** pula o código e vai para Home

\`\`\`css
background: none;
color: #727272; /* --Color-Subtitle */
font-size: 14px;
font-weight: 400;
\`\`\`

**Flutter:**
\`\`\`dart
TextButton(
  onPressed: () => Navigator.pushNamed(context, '/home'),
  style: TextButton.styleFrom(
    foregroundColor: const Color(0xFF727272),
    minimumSize: const Size(328, 44),
  ),
  child: const Text('Cadastrar depois',
    style: TextStyle(fontFamily: 'Inter', fontSize: 14, fontWeight: FontWeight.w400)),
)
\`\`\`
        `}}}},d={name:"Todos os CTAs",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,padding:"32px 16px",background:"#080808",borderRadius:12},children:[e.jsx(r,{label:"Criar carteira",variant:"primary"}),e.jsx(r,{label:"Recuperar carteira",variant:"secondary"}),e.jsx(r,{label:"Continuar",variant:"primary"}),e.jsx(r,{label:"Cadastrar agora",variant:"success"}),e.jsx(r,{label:"Cadastrar depois",variant:"ghost"})]})};var p,m,g;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Login — Criar carteira',
  args: {
    label: 'Criar carteira',
    variant: 'primary'
  },
  parameters: {
    docs: {
      description: {
        story: \`
**Tela:** Login · **Ação:** inicia o fluxo de criação de PIN

\\\`\\\`\\\`css
background: #CD7C04; /* --Color-Primary-Dark */
color: #000;
\\\`\\\`\\\`

**Flutter:**
\\\`\\\`\\\`dart
ElevatedButton(
  onPressed: () => Navigator.pushNamed(context, '/criar-pin'),
  style: ElevatedButton.styleFrom(
    backgroundColor: const Color(0xFFCD7C04),
    foregroundColor: Colors.black,
    minimumSize: const Size(328, 52),
    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
    elevation: 4,
    shadowColor: Colors.black.withOpacity(0.25),
  ),
  child: const Text('Criar carteira',
    style: TextStyle(fontFamily: 'Inter', fontSize: 15, fontWeight: FontWeight.w700)),
)
\\\`\\\`\\\`
        \`
      }
    }
  }
}`,...(g=(m=t.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var C,y,f;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Login — Recuperar carteira',
  args: {
    label: 'Recuperar carteira',
    variant: 'secondary'
  },
  parameters: {
    docs: {
      description: {
        story: \`
**Tela:** Login · **Ação:** recuperação de carteira existente

\\\`\\\`\\\`css
background: #080808;
color: #fff;
border: 1px solid #333333;
\\\`\\\`\\\`

**Flutter:**
\\\`\\\`\\\`dart
ElevatedButton(
  onPressed: () {},
  style: ElevatedButton.styleFrom(
    backgroundColor: const Color(0xFF080808),
    foregroundColor: Colors.white,
    minimumSize: const Size(328, 52),
    shape: RoundedRectangleBorder(
      borderRadius: BorderRadius.circular(8),
      side: const BorderSide(color: Color(0xFF333333)),
    ),
    elevation: 4,
    shadowColor: Colors.black.withOpacity(0.25),
  ),
  child: const Text('Recuperar carteira',
    style: TextStyle(fontFamily: 'Inter', fontSize: 15, fontWeight: FontWeight.w700)),
)
\\\`\\\`\\\`
        \`
      }
    }
  }
}`,...(f=(y=n.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var x,b,h;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'E-mail — Continuar',
  args: {
    label: 'Continuar',
    variant: 'primary'
  },
  parameters: {
    docs: {
      description: {
        story: \`
**Tela:** Inserir e-mail · **Ação:** avança para verificação de código

\\\`\\\`\\\`css
background: #CD7C04; /* --Color-Primary-Dark */
color: #000;
\\\`\\\`\\\`

**Flutter:**
\\\`\\\`\\\`dart
ElevatedButton(
  onPressed: () => Navigator.pushNamed(context, '/verify-code'),
  style: ElevatedButton.styleFrom(
    backgroundColor: const Color(0xFFCD7C04),
    foregroundColor: Colors.black,
    minimumSize: const Size(328, 52),
    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
    elevation: 4,
  ),
  child: const Text('Continuar',
    style: TextStyle(fontFamily: 'Inter', fontSize: 15, fontWeight: FontWeight.w700)),
)
\\\`\\\`\\\`
        \`
      }
    }
  }
}`,...(h=(b=s.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var v,F,S;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Afiliado — Cadastrar agora',
  args: {
    label: 'Cadastrar agora',
    variant: 'success'
  },
  parameters: {
    docs: {
      description: {
        story: \`
**Tela:** Afiliado · **Ação:** salva código e vai para Home

\\\`\\\`\\\`css
background: #00C853; /* --Color-Secondary */
color: #000;
\\\`\\\`\\\`

**Flutter:**
\\\`\\\`\\\`dart
ElevatedButton(
  onPressed: () => Navigator.pushNamed(context, '/home'),
  style: ElevatedButton.styleFrom(
    backgroundColor: const Color(0xFF00C853),
    foregroundColor: Colors.black,
    minimumSize: const Size(328, 52),
    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
    elevation: 4,
    shadowColor: Colors.black.withOpacity(0.25),
  ),
  child: const Text('Cadastrar agora',
    style: TextStyle(fontFamily: 'Inter', fontSize: 15, fontWeight: FontWeight.w700)),
)
\\\`\\\`\\\`
        \`
      }
    }
  }
}`,...(S=(F=i.parameters)==null?void 0:F.docs)==null?void 0:S.source}}};var T,B,R;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Afiliado — Cadastrar depois',
  args: {
    label: 'Cadastrar depois',
    variant: 'ghost'
  },
  parameters: {
    docs: {
      description: {
        story: \`
**Tela:** Afiliado · **Ação:** pula o código e vai para Home

\\\`\\\`\\\`css
background: none;
color: #727272; /* --Color-Subtitle */
font-size: 14px;
font-weight: 400;
\\\`\\\`\\\`

**Flutter:**
\\\`\\\`\\\`dart
TextButton(
  onPressed: () => Navigator.pushNamed(context, '/home'),
  style: TextButton.styleFrom(
    foregroundColor: const Color(0xFF727272),
    minimumSize: const Size(328, 44),
  ),
  child: const Text('Cadastrar depois',
    style: TextStyle(fontFamily: 'Inter', fontSize: 14, fontWeight: FontWeight.w400)),
)
\\\`\\\`\\\`
        \`
      }
    }
  }
}`,...(R=(B=l.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var k,w,z;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Todos os CTAs',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    padding: '32px 16px',
    background: '#080808',
    borderRadius: 12
  }}>\r
      <CTAButton label="Criar carteira" variant="primary" />\r
      <CTAButton label="Recuperar carteira" variant="secondary" />\r
      <CTAButton label="Continuar" variant="primary" />\r
      <CTAButton label="Cadastrar agora" variant="success" />\r
      <CTAButton label="Cadastrar depois" variant="ghost" />\r
    </div>
}`,...(z=(w=d.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};const N=["CriarCarteira","RecuperarCarteira","Continuar","CadastrarAgora","CadastrarDepois","TodosCTAs"];export{i as CadastrarAgora,l as CadastrarDepois,s as Continuar,t as CriarCarteira,n as RecuperarCarteira,d as TodosCTAs,N as __namedExportsOrder,I as default};
