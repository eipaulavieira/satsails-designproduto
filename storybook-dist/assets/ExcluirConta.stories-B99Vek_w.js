import{j as e}from"./jsx-runtime-DiklIkkE.js";import{C as a}from"./CTAButton-DxTuTp0K.js";import"./index-DRjF_FHU.js";function o({title:x,subtitle:i,children:f,width:h=363,height:m=284,blur:n=12}){return e.jsx("div",{style:{display:"flex",width:h,height:m,flexDirection:"column",justifyContent:"center",alignItems:"center",gap:16,borderRadius:20,background:"var(--color-neutral-dark-tint, rgba(51, 51, 51, 0.34))",backdropFilter:`blur(${n}px)`,WebkitBackdropFilter:`blur(${n}px)`,boxSizing:"border-box",padding:"24px 16px"},children:e.jsxs("div",{style:{display:"flex",width:328,flexDirection:"column",alignItems:"center",gap:16},children:[e.jsx("span",{style:{fontFamily:"'Inter', sans-serif",fontSize:23,fontStyle:"normal",fontWeight:700,color:"#FFFFFF",lineHeight:"120%",textAlign:"center"},children:x}),i&&e.jsx("span",{style:{fontFamily:"'Inter', sans-serif",fontSize:16,fontStyle:"normal",fontWeight:400,color:"#D1D2D2",lineHeight:"120%",textAlign:"center"},children:i}),f]})})}o.__docgenInfo={description:"",methods:[],displayName:"NotificationPopup",props:{title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},width:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"363",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"284",computed:!1}},blur:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"12",computed:!1}}}};const C={title:"Componentes/Popups/Notificações/Excluir Conta",tags:["autodocs"],parameters:{layout:"centered",backgrounds:{default:"app",values:[{name:"app",value:"#080808"},{name:"darker",value:"#000000"}]},docs:{description:{component:`
Popup de confirmação de exclusão de conta. Reutiliza **NotificationPopup** + **CTAButton**.

---

## CSS

\`\`\`css
/* Container do popup */
display: flex;
width: 363px;
height: 284px;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 16px;
border-radius: 20px;
background: rgba(51, 51, 51, 0.34);
backdrop-filter: blur(12px);

/* Container interno (título + subtítulo + botões) */
display: flex;
width: 328px;
flex-direction: column;
align-items: center;
gap: 16px;

/* Título */
color: #FFFFFF;
font-family: Inter;
font-size: 23px;
font-weight: 700;
line-height: 120%;
text-align: center;

/* Subtítulo */
color: #D1D2D2;
font-family: Inter;
font-size: 16px;
font-weight: 400;
line-height: 120%;
text-align: center;
\`\`\`

---

## Flutter

\`\`\`dart
showDialog(
  context: context,
  builder: (context) => Dialog(
    backgroundColor: Colors.transparent,
    child: ClipRRect(
      borderRadius: BorderRadius.circular(20),
      child: BackdropFilter(
        filter: ImageFilter.blur(sigmaX: 12, sigmaY: 12),
        child: Container(
          width: 363,
          height: 284,
          decoration: BoxDecoration(
            color: const Color(0x57333333), // rgba(51,51,51,0.34)
            borderRadius: BorderRadius.circular(20),
          ),
          child: Center(
            child: SizedBox(
              width: 328,
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  const Text(
                    'Excluir carteira?',
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      fontFamily: 'Inter',
                      fontSize: 23,
                      fontWeight: FontWeight.w700,
                      color: Colors.white,
                      height: 1.2,
                    ),
                  ),
                  const SizedBox(height: 16),
                  const Text(
                    'Esta ação é irreversível. Tem certeza de que fez backup de sua frase de backup',
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      fontFamily: 'Inter',
                      fontSize: 16,
                      fontWeight: FontWeight.w400,
                      color: Color(0xFFD1D2D2),
                      height: 1.2,
                    ),
                  ),
                  const SizedBox(height: 16),
                  // Botão Cancelar
                  SizedBox(
                    width: 328,
                    height: 52,
                    child: ElevatedButton(
                      onPressed: () => Navigator.pop(context),
                      style: ElevatedButton.styleFrom(
                        backgroundColor: const Color(0xFF070506), // --Color-Gray-900
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(8),
                        ),
                        elevation: 4,
                        shadowColor: Colors.black.withOpacity(0.25),
                      ),
                      child: const Text(
                        'Cancelar',
                        style: TextStyle(
                          fontFamily: 'Inter',
                          fontSize: 14,
                          fontWeight: FontWeight.w700,
                          color: Colors.white,
                        ),
                      ),
                    ),
                  ),
                  const SizedBox(height: 8),
                  // Botão Deletar conta
                  SizedBox(
                    width: 328,
                    height: 52,
                    child: ElevatedButton(
                      onPressed: () => _deletarConta(context),
                      style: ElevatedButton.styleFrom(
                        backgroundColor: const Color(0xFFEA2415),
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(8),
                        ),
                      ),
                      child: const Text(
                        'Deletar conta',
                        style: TextStyle(
                          fontFamily: 'Inter',
                          fontSize: 14,
                          fontWeight: FontWeight.w700,
                          color: Colors.white,
                        ),
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    ),
  ),
);
\`\`\`

> **Dependência Flutter:** adicione \`import 'dart:ui';\` para usar \`ImageFilter.blur\`.
        `}}}},t={name:"Excluir conta",render:()=>e.jsxs(o,{title:"Excluir carteira?",subtitle:"Esta ação é irreversível. Tem certeza de que fez backup de sua frase de backup",children:[e.jsx(a,{label:"Cancelar",variant:"cancel",buttonState:"idle"}),e.jsx(a,{label:"Deletar conta",variant:"danger",buttonState:"idle"})]})},r={name:"Excluir conta (deletar active)",render:()=>e.jsxs(o,{title:"Excluir carteira?",subtitle:"Esta ação é irreversível. Tem certeza de que fez backup de sua frase de backup",children:[e.jsx(a,{label:"Cancelar",variant:"cancel",buttonState:"idle"}),e.jsx(a,{label:"Deletar conta",variant:"danger",buttonState:"active"})]})};var l,c,s;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Excluir conta',
  render: () => <NotificationPopup title="Excluir carteira?" subtitle="Esta ação é irreversível. Tem certeza de que fez backup de sua frase de backup">\r
      <CTAButton label="Cancelar" variant="cancel" buttonState="idle" />\r
      <CTAButton label="Deletar conta" variant="danger" buttonState="idle" />\r
    </NotificationPopup>
}`,...(s=(c=t.parameters)==null?void 0:c.docs)==null?void 0:s.source}}};var d,u,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Excluir conta (deletar active)',
  render: () => <NotificationPopup title="Excluir carteira?" subtitle="Esta ação é irreversível. Tem certeza de que fez backup de sua frase de backup">\r
      <CTAButton label="Cancelar" variant="cancel" buttonState="idle" />\r
      <CTAButton label="Deletar conta" variant="danger" buttonState="active" />\r
    </NotificationPopup>
}`,...(p=(u=r.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const v=["ExcluirConta","ExcluirContaActive"];export{t as ExcluirConta,r as ExcluirContaActive,v as __namedExportsOrder,C as default};
