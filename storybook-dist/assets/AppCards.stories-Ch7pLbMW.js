import{j as n}from"./jsx-runtime-DiklIkkE.js";import"./index-DRjF_FHU.js";const Z={title:"Componentes/Cards/Base",tags:["autodocs"],parameters:{layout:"centered",backgrounds:{default:"app",values:[{name:"app",value:"#080808"},{name:"darker",value:"#000000"},{name:"light",value:"#f5f5f5"}]},docs:{description:{component:"Cards base extraídos do protótipo. Use como referência de dimensões, padding e border-radius para implementação no app."}}}},i={name:"1 · home-balance-card",parameters:{docs:{description:{story:"**Onde:** Home, Bitcoin Detail  \n`width: 100%` · `height: 148px` · `padding: 24px 28px` · `border-radius: 16px`"}}},render:()=>n.jsx("div",{style:{width:358},children:n.jsxs("div",{style:{width:"100%",height:148,padding:"24px 28px",borderRadius:16,background:"#080808",border:"1px solid rgba(255,255,255,0.06)",boxSizing:"border-box",display:"flex",flexDirection:"column",justifyContent:"center",gap:8},children:[n.jsx("span",{style:{color:"#727272",fontFamily:"Inter",fontSize:11},children:"Saldo total"}),n.jsxs("div",{children:[n.jsx("div",{style:{color:"#fff",fontFamily:"Inter",fontSize:33,fontWeight:700},children:"R$ 68.420,00"}),n.jsx("div",{style:{color:"#727272",fontFamily:"Inter",fontSize:14},children:"≈ 0.18563 BTC"})]})]})})},d={name:"2 · asset-card",parameters:{docs:{description:{story:"**Onde:** Asset list  \n`width: 100%` · `height: auto` · `padding: 16px` · `border-radius: 8px`"}}},render:()=>n.jsx("div",{style:{width:358,display:"flex",flexDirection:"column",gap:8},children:["Bitcoin","Lightning Bitcoin","Liquid Bitcoin"].map(e=>n.jsxs("div",{style:{width:"100%",padding:16,borderRadius:8,background:"#080808",border:"1px solid #333333",boxSizing:"border-box",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[n.jsx("span",{style:{color:"#fff",fontFamily:"Inter",fontSize:14},children:e}),n.jsx("span",{style:{color:"#727272",fontFamily:"Inter",fontSize:13},children:"0.00000 BTC"})]},e))})},t={name:"3 · qa-btn",parameters:{docs:{description:{story:"**Onde:** Quick actions  \n`width: 61.813px` · `height: 58.643px` · `padding: 0` · `border-radius: 15.849px`"}}},render:()=>n.jsx("div",{style:{display:"flex",gap:12},children:["Receber","Enviar","Converter","Vender"].map(e=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[n.jsx("div",{style:{width:61.813,height:58.643,borderRadius:15.849,background:"#1A1A1A",border:"1px solid #333333",display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsx("div",{style:{width:20,height:20,borderRadius:"50%",background:"#333"}})}),n.jsx("span",{style:{color:"#727272",fontFamily:"Inter",fontSize:11},children:e})]},e))})},o={name:"4 · tx-card",parameters:{docs:{description:{story:"**Onde:** Transaction history  \n`width: 100%` · `height: auto` · `padding: 12px 8px` · `border-radius: 8px`"}}},render:()=>n.jsx("div",{style:{width:358,display:"flex",flexDirection:"column",gap:4},children:[{name:"Bitcoin",date:"06/05/2026",value:"+0.00420 BTC",type:"recebido"},{name:"Bitcoin",date:"04/05/2026",value:"-0.00100 BTC",type:"enviado"},{name:"Bitcoin",date:"02/05/2026",value:"+0.01200 BTC",type:"recebido"}].map((e,r)=>n.jsxs("div",{style:{width:"100%",padding:"12px 8px",borderRadius:8,background:"#080808",boxSizing:"border-box",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[n.jsxs("div",{children:[n.jsx("div",{style:{color:"#fff",fontFamily:"Inter",fontSize:14},children:e.name}),n.jsx("div",{style:{color:"#727272",fontFamily:"Inter",fontSize:11},children:e.date})]}),n.jsx("span",{style:{color:e.type==="recebido"?"#00C853":"#D1D2D2",fontFamily:"Inter",fontSize:13},children:e.value})]},r))})},a={name:"5 · tc-card",parameters:{docs:{description:{story:"**Onde:** Tipo de conta  \n`width: 358px` · `height: 102px` · `padding: 27px 24px` · `border-radius: 8px`"}}},render:()=>n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:["Individual","Empresa"].map(e=>n.jsxs("div",{style:{width:358,height:102,padding:"27px 24px",borderRadius:8,background:"#0C0B0D",border:"1px solid #333333",boxSizing:"border-box",display:"flex",alignItems:"center",gap:16},children:[n.jsx("div",{style:{width:24,height:24,borderRadius:"50%",background:"#333"}}),n.jsx("span",{style:{color:"#fff",fontFamily:"Inter",fontSize:16,fontWeight:500},children:e})]},e))})},s={name:"6 · tc-subcard",parameters:{docs:{description:{story:"**Onde:** Subcards de tipo de conta  \n`width: auto` · `height: 102px` · `padding: 24px` · `border-radius: 0`"}}},render:()=>n.jsx("div",{style:{display:"flex",gap:0,border:"1px solid #333",borderRadius:8,overflow:"hidden",width:358},children:["Opção A","Opção B"].map((e,r)=>n.jsx("div",{style:{flex:1,height:102,padding:24,background:r===0?"#1A1A1A":"#0C0B0D",borderRight:r===0?"1px solid #333":"none",boxSizing:"border-box",display:"flex",alignItems:"center"},children:n.jsx("span",{style:{color:"#fff",fontFamily:"Inter",fontSize:13},children:e})},e))})},p={name:"7 · email-input",parameters:{docs:{description:{story:"**Onde:** Email field  \n`width: auto` · `height: 52px` · `padding: 0 20px` · `border-radius: 8px`"}}},render:()=>n.jsx("div",{style:{width:358},children:n.jsx("div",{style:{width:"100%",height:52,padding:"0 20px",borderRadius:8,background:"#0C0B0D",border:"1px solid #333333",boxSizing:"border-box",display:"flex",alignItems:"center"},children:n.jsx("span",{style:{color:"#727272",fontFamily:"Inter",fontSize:14},children:"Digite seu e-mail"})})})},l={name:"8 · enviar-input-field",parameters:{docs:{description:{story:"**Onde:** Input fields (enviar)  \n`width: 100%` · `height: 52px` · `padding: 0 20px` · `border-radius: 8px`"}}},render:()=>n.jsx("div",{style:{width:358,display:"flex",flexDirection:"column",gap:8},children:["Endereço do destinatário","Quantidade"].map(e=>n.jsx("div",{style:{width:"100%",height:52,padding:"0 20px",borderRadius:8,background:"#0C0B0D",border:"1px solid #333333",boxSizing:"border-box",display:"flex",alignItems:"center"},children:n.jsx("span",{style:{color:"#727272",fontFamily:"Inter",fontSize:14},children:e})},e))})},c={name:"9 · tc-input-wrap",parameters:{docs:{description:{story:"**Onde:** Tipo conta inputs  \n`width: auto` · `height: 52px` · `padding: 0 20px` · `border-radius: 8px`"}}},render:()=>n.jsx("div",{style:{width:358},children:n.jsx("div",{style:{width:"100%",height:52,padding:"0 20px",borderRadius:8,background:"#0C0B0D",border:"1px solid #333333",boxSizing:"border-box",display:"flex",alignItems:"center"},children:n.jsx("span",{style:{color:"#727272",fontFamily:"Inter",fontSize:14},children:"Nome completo"})})})},x={name:"10 · vc-box",parameters:{docs:{description:{story:"**Onde:** Verify code  \n`width: 54px` · `height: 54px` · `border-radius: 14px`"}}},render:()=>n.jsx("div",{style:{display:"flex",gap:8},children:["1","2","3","4","·","·"].map((e,r)=>n.jsx("div",{style:{width:54,height:54,borderRadius:14,background:"#0C0B0D",border:`1px solid ${r<4?"#F7931A":"#333333"}`,display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsx("span",{style:{color:"#fff",fontFamily:"Inter",fontSize:20,fontWeight:500},children:e})},r))})},h={name:"11 · popup-sheet (inline enviar)",parameters:{docs:{description:{story:"**Onde:** Popup sheets  \n`width: 359px` · `height: 504px` · `padding: 16px 16px 48px 16px` · `border-radius: 20px 20px 0 0`"}}},render:()=>n.jsxs("div",{style:{width:359,height:504,padding:"16px 16px 48px 16px",borderRadius:"20px 20px 0 0",background:"#0C0B0D",border:"1px solid #333333",boxSizing:"border-box",display:"flex",flexDirection:"column",gap:16},children:[n.jsx("div",{style:{width:40,height:4,borderRadius:2,background:"#333",alignSelf:"center"}}),n.jsx("span",{style:{color:"#fff",fontFamily:"Inter",fontSize:16,fontWeight:500},children:"Enviar para:"}),n.jsx("div",{style:{flex:1,background:"#080808",borderRadius:8}})]})},m={name:"12 · phone-frame",parameters:{layout:"centered",docs:{description:{story:"**Onde:** Main container (protótipo)  \n`width: 390px` · `height: 844px` · `border-radius: 30px`"}}},render:()=>n.jsx("div",{style:{width:390,height:844,borderRadius:30,background:"#000000",border:"1px solid #333333",boxSizing:"border-box",display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsx("span",{style:{color:"#727272",fontFamily:"Inter",fontSize:13},children:"390 × 844 · radius 30px"})})};var g,u,y;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '1 · home-balance-card',
  parameters: {
    docs: {
      description: {
        story: '**Onde:** Home, Bitcoin Detail  \\n\`width: 100%\` · \`height: 148px\` · \`padding: 24px 28px\` · \`border-radius: 16px\`'
      }
    }
  },
  render: () => <div style={{
    width: 358
  }}>\r
      <div style={{
      width: '100%',
      height: 148,
      padding: '24px 28px',
      borderRadius: 16,
      background: '#080808',
      border: '1px solid rgba(255,255,255,0.06)',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 8
    }}>\r
        <span style={{
        color: '#727272',
        fontFamily: 'Inter',
        fontSize: 11
      }}>Saldo total</span>\r
        <div>\r
          <div style={{
          color: '#fff',
          fontFamily: 'Inter',
          fontSize: 33,
          fontWeight: 700
        }}>R$ 68.420,00</div>\r
          <div style={{
          color: '#727272',
          fontFamily: 'Inter',
          fontSize: 14
        }}>≈ 0.18563 BTC</div>\r
        </div>\r
      </div>\r
    </div>
}`,...(y=(u=i.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var f,b,v;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: '2 · asset-card',
  parameters: {
    docs: {
      description: {
        story: '**Onde:** Asset list  \\n\`width: 100%\` · \`height: auto\` · \`padding: 16px\` · \`border-radius: 8px\`'
      }
    }
  },
  render: () => <div style={{
    width: 358,
    display: 'flex',
    flexDirection: 'column',
    gap: 8
  }}>\r
      {['Bitcoin', 'Lightning Bitcoin', 'Liquid Bitcoin'].map(name => <div key={name} style={{
      width: '100%',
      padding: 16,
      borderRadius: 8,
      background: '#080808',
      border: '1px solid #333333',
      boxSizing: 'border-box',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>\r
          <span style={{
        color: '#fff',
        fontFamily: 'Inter',
        fontSize: 14
      }}>{name}</span>\r
          <span style={{
        color: '#727272',
        fontFamily: 'Inter',
        fontSize: 13
      }}>0.00000 BTC</span>\r
        </div>)}\r
    </div>
}`,...(v=(b=d.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var S,w,I;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: '3 · qa-btn',
  parameters: {
    docs: {
      description: {
        story: '**Onde:** Quick actions  \\n\`width: 61.813px\` · \`height: 58.643px\` · \`padding: 0\` · \`border-radius: 15.849px\`'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: 12
  }}>\r
      {['Receber', 'Enviar', 'Converter', 'Vender'].map(label => <div key={label} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6
    }}>\r
          <div style={{
        width: 61.813,
        height: 58.643,
        borderRadius: 15.849,
        background: '#1A1A1A',
        border: '1px solid #333333',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>\r
            <div style={{
          width: 20,
          height: 20,
          borderRadius: '50%',
          background: '#333'
        }} />\r
          </div>\r
          <span style={{
        color: '#727272',
        fontFamily: 'Inter',
        fontSize: 11
      }}>{label}</span>\r
        </div>)}\r
    </div>
}`,...(I=(w=t.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var j,z,C;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: '4 · tx-card',
  parameters: {
    docs: {
      description: {
        story: '**Onde:** Transaction history  \\n\`width: 100%\` · \`height: auto\` · \`padding: 12px 8px\` · \`border-radius: 8px\`'
      }
    }
  },
  render: () => <div style={{
    width: 358,
    display: 'flex',
    flexDirection: 'column',
    gap: 4
  }}>\r
      {[{
      name: 'Bitcoin',
      date: '06/05/2026',
      value: '+0.00420 BTC',
      type: 'recebido'
    }, {
      name: 'Bitcoin',
      date: '04/05/2026',
      value: '-0.00100 BTC',
      type: 'enviado'
    }, {
      name: 'Bitcoin',
      date: '02/05/2026',
      value: '+0.01200 BTC',
      type: 'recebido'
    }].map((tx, i) => <div key={i} style={{
      width: '100%',
      padding: '12px 8px',
      borderRadius: 8,
      background: '#080808',
      boxSizing: 'border-box',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>\r
          <div>\r
            <div style={{
          color: '#fff',
          fontFamily: 'Inter',
          fontSize: 14
        }}>{tx.name}</div>\r
            <div style={{
          color: '#727272',
          fontFamily: 'Inter',
          fontSize: 11
        }}>{tx.date}</div>\r
          </div>\r
          <span style={{
        color: tx.type === 'recebido' ? '#00C853' : '#D1D2D2',
        fontFamily: 'Inter',
        fontSize: 13
      }}>{tx.value}</span>\r
        </div>)}\r
    </div>
}`,...(C=(z=o.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var B,k,F;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: '5 · tc-card',
  parameters: {
    docs: {
      description: {
        story: '**Onde:** Tipo de conta  \\n\`width: 358px\` · \`height: 102px\` · \`padding: 27px 24px\` · \`border-radius: 8px\`'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 8
  }}>\r
      {['Individual', 'Empresa'].map(tipo => <div key={tipo} style={{
      width: 358,
      height: 102,
      padding: '27px 24px',
      borderRadius: 8,
      background: '#0C0B0D',
      border: '1px solid #333333',
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }}>\r
          <div style={{
        width: 24,
        height: 24,
        borderRadius: '50%',
        background: '#333'
      }} />\r
          <span style={{
        color: '#fff',
        fontFamily: 'Inter',
        fontSize: 16,
        fontWeight: 500
      }}>{tipo}</span>\r
        </div>)}\r
    </div>
}`,...(F=(k=a.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var R,D,O;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: '6 · tc-subcard',
  parameters: {
    docs: {
      description: {
        story: '**Onde:** Subcards de tipo de conta  \\n\`width: auto\` · \`height: 102px\` · \`padding: 24px\` · \`border-radius: 0\`'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: 0,
    border: '1px solid #333',
    borderRadius: 8,
    overflow: 'hidden',
    width: 358
  }}>\r
      {['Opção A', 'Opção B'].map((op, i) => <div key={op} style={{
      flex: 1,
      height: 102,
      padding: 24,
      background: i === 0 ? '#1A1A1A' : '#0C0B0D',
      borderRight: i === 0 ? '1px solid #333' : 'none',
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center'
    }}>\r
          <span style={{
        color: '#fff',
        fontFamily: 'Inter',
        fontSize: 13
      }}>{op}</span>\r
        </div>)}\r
    </div>
}`,...(O=(D=s.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var T,A,E;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: '7 · email-input',
  parameters: {
    docs: {
      description: {
        story: '**Onde:** Email field  \\n\`width: auto\` · \`height: 52px\` · \`padding: 0 20px\` · \`border-radius: 8px\`'
      }
    }
  },
  render: () => <div style={{
    width: 358
  }}>\r
      <div style={{
      width: '100%',
      height: 52,
      padding: '0 20px',
      borderRadius: 8,
      background: '#0C0B0D',
      border: '1px solid #333333',
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center'
    }}>\r
        <span style={{
        color: '#727272',
        fontFamily: 'Inter',
        fontSize: 14
      }}>Digite seu e-mail</span>\r
      </div>\r
    </div>
}`,...(E=(A=p.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var W,P,Q;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: '8 · enviar-input-field',
  parameters: {
    docs: {
      description: {
        story: '**Onde:** Input fields (enviar)  \\n\`width: 100%\` · \`height: 52px\` · \`padding: 0 20px\` · \`border-radius: 8px\`'
      }
    }
  },
  render: () => <div style={{
    width: 358,
    display: 'flex',
    flexDirection: 'column',
    gap: 8
  }}>\r
      {['Endereço do destinatário', 'Quantidade'].map(placeholder => <div key={placeholder} style={{
      width: '100%',
      height: 52,
      padding: '0 20px',
      borderRadius: 8,
      background: '#0C0B0D',
      border: '1px solid #333333',
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center'
    }}>\r
          <span style={{
        color: '#727272',
        fontFamily: 'Inter',
        fontSize: 14
      }}>{placeholder}</span>\r
        </div>)}\r
    </div>
}`,...(Q=(P=l.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};var V,q,H;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: '9 · tc-input-wrap',
  parameters: {
    docs: {
      description: {
        story: '**Onde:** Tipo conta inputs  \\n\`width: auto\` · \`height: 52px\` · \`padding: 0 20px\` · \`border-radius: 8px\`'
      }
    }
  },
  render: () => <div style={{
    width: 358
  }}>\r
      <div style={{
      width: '100%',
      height: 52,
      padding: '0 20px',
      borderRadius: 8,
      background: '#0C0B0D',
      border: '1px solid #333333',
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center'
    }}>\r
        <span style={{
        color: '#727272',
        fontFamily: 'Inter',
        fontSize: 14
      }}>Nome completo</span>\r
      </div>\r
    </div>
}`,...(H=(q=c.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var L,$,M;x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: '10 · vc-box',
  parameters: {
    docs: {
      description: {
        story: '**Onde:** Verify code  \\n\`width: 54px\` · \`height: 54px\` · \`border-radius: 14px\`'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: 8
  }}>\r
      {['1', '2', '3', '4', '·', '·'].map((digit, i) => <div key={i} style={{
      width: 54,
      height: 54,
      borderRadius: 14,
      background: '#0C0B0D',
      border: \`1px solid \${i < 4 ? '#F7931A' : '#333333'}\`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>\r
          <span style={{
        color: '#fff',
        fontFamily: 'Inter',
        fontSize: 20,
        fontWeight: 500
      }}>{digit}</span>\r
        </div>)}\r
    </div>
}`,...(M=($=x.parameters)==null?void 0:$.docs)==null?void 0:M.source}}};var N,_,U;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: '11 · popup-sheet (inline enviar)',
  parameters: {
    docs: {
      description: {
        story: '**Onde:** Popup sheets  \\n\`width: 359px\` · \`height: 504px\` · \`padding: 16px 16px 48px 16px\` · \`border-radius: 20px 20px 0 0\`'
      }
    }
  },
  render: () => <div style={{
    width: 359,
    height: 504,
    padding: '16px 16px 48px 16px',
    borderRadius: '20px 20px 0 0',
    background: '#0C0B0D',
    border: '1px solid #333333',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>\r
      <div style={{
      width: 40,
      height: 4,
      borderRadius: 2,
      background: '#333',
      alignSelf: 'center'
    }} />\r
      <span style={{
      color: '#fff',
      fontFamily: 'Inter',
      fontSize: 16,
      fontWeight: 500
    }}>Enviar para:</span>\r
      <div style={{
      flex: 1,
      background: '#080808',
      borderRadius: 8
    }} />\r
    </div>
}`,...(U=(_=h.parameters)==null?void 0:_.docs)==null?void 0:U.source}}};var G,J,K;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: '12 · phone-frame',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: '**Onde:** Main container (protótipo)  \\n\`width: 390px\` · \`height: 844px\` · \`border-radius: 30px\`'
      }
    }
  },
  render: () => <div style={{
    width: 390,
    height: 844,
    borderRadius: 30,
    background: '#000000',
    border: '1px solid #333333',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}>\r
      <span style={{
      color: '#727272',
      fontFamily: 'Inter',
      fontSize: 13
    }}>390 × 844 · radius 30px</span>\r
    </div>
}`,...(K=(J=m.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const nn=["HomeBalanceCard","AssetCard","QaBtn","TxCard","TcCard","TcSubcard","EmailInput","EnviarInputField","TcInputWrap","VcBox","PopupSheet","PhoneFrame"];export{d as AssetCard,p as EmailInput,l as EnviarInputField,i as HomeBalanceCard,m as PhoneFrame,h as PopupSheet,t as QaBtn,a as TcCard,c as TcInputWrap,s as TcSubcard,o as TxCard,x as VcBox,nn as __namedExportsOrder,Z as default};
