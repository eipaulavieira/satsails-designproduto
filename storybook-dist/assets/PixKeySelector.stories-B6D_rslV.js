import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as j}from"./index-DRjF_FHU.js";const W=({color:t})=>e.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:[e.jsx("circle",{cx:"9",cy:"6",r:"3",stroke:t,strokeWidth:"1.4"}),e.jsx("path",{d:"M3 16c0-3.314 2.686-6 6-6s6 2.686 6 6",stroke:t,strokeWidth:"1.4",strokeLinecap:"round"})]}),T=({color:t})=>e.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:[e.jsx("rect",{x:"2",y:"5",width:"9",height:"11",rx:"1",stroke:t,strokeWidth:"1.4"}),e.jsx("path",{d:"M11 8h3a1 1 0 0 1 1 1v7",stroke:t,strokeWidth:"1.4",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("rect",{x:"4.5",y:"8",width:"2",height:"2",stroke:t,strokeWidth:"1.1"}),e.jsx("rect",{x:"7.5",y:"8",width:"2",height:"2",stroke:t,strokeWidth:"1.1"}),e.jsx("rect",{x:"4.5",y:"11.5",width:"2",height:"2",stroke:t,strokeWidth:"1.1"}),e.jsx("rect",{x:"7.5",y:"11.5",width:"2",height:"2",stroke:t,strokeWidth:"1.1"}),e.jsx("line",{x1:"13.5",y1:"12",x2:"13.5",y2:"16",stroke:t,strokeWidth:"1.1",strokeLinecap:"round"})]}),E=({color:t})=>e.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:[e.jsx("rect",{x:"1.5",y:"4",width:"15",height:"10",rx:"2",stroke:t,strokeWidth:"1.4"}),e.jsx("path",{d:"M1.5 6.5L9 11l7.5-4.5",stroke:t,strokeWidth:"1.4",strokeLinecap:"round"})]}),z=({color:t})=>e.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:[e.jsx("rect",{x:"5",y:"1.5",width:"8",height:"15",rx:"2",stroke:t,strokeWidth:"1.4"}),e.jsx("circle",{cx:"9",cy:"13.5",r:"0.8",fill:t})]}),A=({color:t})=>e.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:[e.jsx("circle",{cx:"6.5",cy:"9",r:"3.5",stroke:t,strokeWidth:"1.4"}),e.jsx("path",{d:"M9.5 9H16M13.5 7l2 2-2 2",stroke:t,strokeWidth:"1.4",strokeLinecap:"round",strokeLinejoin:"round"})]}),B=[{id:"cpf",label:"CPF",Icon:W},{id:"cnpj",label:"CNPJ",Icon:T},{id:"email",label:"Email",Icon:E},{id:"tel",label:"Tel",Icon:z},{id:"aleatorio",label:"Aleatório",Icon:A}];function c({value:t,onChange:r}){const[F,C]=j.useState(t),b=t!==void 0?t:F,w=n=>{C(n),r==null||r(n)};return e.jsx("div",{style:{display:"inline-flex",alignItems:"center",gap:4},children:B.map(({id:n,label:I,Icon:P})=>{const o=b===n;return e.jsxs("button",{onClick:()=>w(n),style:{display:"flex",flexDirection:"column",width:64,height:60,padding:10,alignItems:"center",justifyContent:"center",gap:6,borderRadius:8,border:o?"0.8px solid #00C853":"0.8px solid transparent",background:o?"rgba(0, 200, 83, 0.25)":"#080808",cursor:"pointer",boxSizing:"border-box",transition:"background 0.15s ease, border-color 0.15s ease",flexShrink:0},children:[e.jsx(P,{color:o?"#FFFFFF":"#727272"}),e.jsx("span",{style:{fontFamily:"Inter, sans-serif",fontSize:12,fontWeight:400,lineHeight:"normal",color:o?"#FFFFFF":"#727272",whiteSpace:"nowrap",transition:"color 0.15s ease"},children:I})]},n)})})}c.__docgenInfo={description:"",methods:[],displayName:"PixKeySelector",props:{value:{required:!1,tsType:{name:"union",raw:"'cpf' | 'cnpj' | 'email' | 'tel' | 'aleatorio'",elements:[{name:"literal",value:"'cpf'"},{name:"literal",value:"'cnpj'"},{name:"literal",value:"'email'"},{name:"literal",value:"'tel'"},{name:"literal",value:"'aleatorio'"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: PixKeyType) => void",signature:{arguments:[{type:{name:"union",raw:"'cpf' | 'cnpj' | 'email' | 'tel' | 'aleatorio'",elements:[{name:"literal",value:"'cpf'"},{name:"literal",value:"'cnpj'"},{name:"literal",value:"'email'"},{name:"literal",value:"'tel'"},{name:"literal",value:"'aleatorio'"}]},name:"key"}],return:{name:"void"}}},description:""}}};const M={title:"Componentes/Ações/Pix Key Selector",component:c,tags:["autodocs"],parameters:{layout:"centered",backgrounds:{default:"app",values:[{name:"app",value:"#080808"},{name:"darker",value:"#000000"}]},docs:{description:{component:`
Seletor de tipo de chave Pix para a tela de envio. O usuário toca em uma das 5 opções para selecionar o tipo de chave.

**Estados:**
- **Normal:** fundo \`#080808\`, ícone e label \`#727272\`
- **Selecionado:** \`border: 0.8px solid #00C853\` · \`background: rgba(0,200,83,0.25)\` · ícone e label \`#FFFFFF\`

---

**CSS:**
\`\`\`css
/* Wrapper */
display: inline-flex;
align-items: center;
gap: 4px;

/* Cada item */
display: flex;
flex-direction: column;
width: 64px;
height: 60px;
padding: 10px;
align-items: center;
justify-content: center;
gap: 6px;
border-radius: 8px;

/* Estado selecionado */
border: 0.8px solid #00C853;
background: rgba(0, 200, 83, 0.25);

/* Ícone */
width: 18px;
height: 18px;
\`\`\`

---

**Flutter:**
\`\`\`dart
Row(
  mainAxisSize: MainAxisSize.min,
  spacing: 4,
  children: PixKeyType.values.map((type) {
    final isSelected = selectedType == type;
    return GestureDetector(
      onTap: () => setState(() => selectedType = type),
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 150),
        width: 64, height: 60,
        padding: const EdgeInsets.all(10),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(8),
          border: Border.all(
            color: isSelected ? const Color(0xFF00C853) : Colors.transparent,
            width: 0.8,
          ),
          color: isSelected
              ? const Color(0xFF00C853).withOpacity(0.25)
              : const Color(0xFF080808),
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(type.icon, size: 18,
              color: isSelected ? Colors.white : const Color(0xFF727272)),
            const SizedBox(height: 6),
            Text(type.label,
              style: TextStyle(
                fontFamily: 'Inter', fontSize: 12,
                color: isSelected ? Colors.white : const Color(0xFF727272),
              )),
          ],
        ),
      ),
    );
  }).toList(),
)
\`\`\`
        `}}},decorators:[t=>e.jsx("div",{style:{padding:"32px 16px",background:"#080808",borderRadius:12},children:e.jsx(t,{})})]},i={name:"Padrão (nenhum selecionado)",args:{}},a={name:"CPF selecionado",args:{value:"cpf"}},s={name:"Email selecionado",args:{value:"email"}},l={name:"Interativo",parameters:{controls:{disable:!0}},render:()=>{const[t,r]=j.useState("cpf");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,alignItems:"center"},children:[e.jsx("p",{style:{fontFamily:"Inter",fontSize:12,color:"#727272",margin:0},children:"Tipo de Chave Pix:"}),e.jsx(c,{value:t,onChange:r}),e.jsxs("p",{style:{fontFamily:"Inter",fontSize:11,color:"#00C853",margin:0},children:["Selecionado: ",e.jsx("strong",{children:t.toUpperCase()})]})]})}};var d,p,m;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Padrão (nenhum selecionado)',
  args: {}
}`,...(m=(p=i.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var x,h,u;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'CPF selecionado',
  args: {
    value: 'cpf'
  }
}`,...(u=(h=a.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var g,y,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Email selecionado',
  args: {
    value: 'email'
  }
}`,...(f=(y=s.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var k,v,S;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Interativo',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const [selected, setSelected] = useState<PixKeyType>('cpf');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      alignItems: 'center'
    }}>\r
        <p style={{
        fontFamily: 'Inter',
        fontSize: 12,
        color: '#727272',
        margin: 0
      }}>\r
          Tipo de Chave Pix:\r
        </p>\r
        <PixKeySelector value={selected} onChange={setSelected} />\r
        <p style={{
        fontFamily: 'Inter',
        fontSize: 11,
        color: '#00C853',
        margin: 0
      }}>\r
          Selecionado: <strong>{selected.toUpperCase()}</strong>\r
        </p>\r
      </div>;
  }
}`,...(S=(v=l.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};const D=["Padrao","CpfSelecionado","EmailSelecionado","Interativo"];export{a as CpfSelecionado,s as EmailSelecionado,l as Interativo,i as Padrao,D as __namedExportsOrder,M as default};
