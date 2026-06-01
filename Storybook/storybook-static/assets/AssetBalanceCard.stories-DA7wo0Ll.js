import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as J}from"./index-DRjF_FHU.js";import{b as f,d as B,e as x,l as v,a as y,u as h}from"./eurx-DWDLGSoH.js";function g({icon:n,assetName:t,fiatBalance:i,cryptoEquivalent:a,isPrivate:R=!1}){return e.jsxs("div",{style:{display:"flex",width:358,padding:16,justifyContent:"space-between",alignItems:"center",borderRadius:8,background:"var(--dark-new, #080808)",boxSizing:"border-box"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[e.jsx("img",{src:n,alt:t,style:{width:20,height:20,flexShrink:0}}),e.jsx("span",{style:{fontSize:14,fontWeight:500,color:"#ffffff",fontFamily:"Inter, sans-serif",lineHeight:1.2},children:t})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:2},children:[e.jsx("span",{style:{color:"var(--White, #FFF)",textAlign:"right",fontFamily:"Inter, sans-serif",fontSize:11,fontWeight:400,lineHeight:"120%"},children:R?"******":i}),e.jsx("span",{style:{color:"var(--subtitulo, #727272)",textAlign:"right",fontFamily:"Inter, sans-serif",fontSize:11,fontWeight:400,lineHeight:"120%"},children:R?"*****":a})]})]})}g.__docgenInfo={description:"",methods:[],displayName:"AssetBalanceCard",props:{icon:{required:!0,tsType:{name:"string"},description:""},assetName:{required:!0,tsType:{name:"string"},description:""},fiatBalance:{required:!0,tsType:{name:"string"},description:""},cryptoEquivalent:{required:!0,tsType:{name:"string"},description:""},isPrivate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const ee={title:"Componentes/Saldo/AssetBalanceCard",component:g,parameters:{layout:"centered",backgrounds:{default:"app",values:[{name:"app",value:"#111111"},{name:"darker",value:"#000000"}]},docs:{description:{component:"Card de saldo de ativo da conta. Exibe ícone + nome do ativo à esquerda e saldo em fiat + equivalente em cripto à direita. Suporta modo privacidade via prop `isPrivate`."}}},argTypes:{icon:{control:!1,description:"Ícone do ativo (import de imagem)"},assetName:{control:"text",description:"Nome do ativo"},fiatBalance:{control:"text",description:"Saldo em moeda fiat (ex: R$14.000)"},cryptoEquivalent:{control:"text",description:"Equivalente em cripto (ex: ≈ 0.185630 BTC)"},isPrivate:{control:"boolean",description:"Oculta os valores com ******"}},tags:["autodocs"]},s={name:"Bitcoin",args:{icon:f,assetName:"Bitcoin",fiatBalance:"R$14.000",cryptoEquivalent:"≈ 0.185630 BTC"}},o={name:"Dados Privados",args:{icon:f,assetName:"Bitcoin",fiatBalance:"R$14.000",cryptoEquivalent:"≈ 0.185630 BTC",isPrivate:!0}},r={name:"Lightning Bitcoin",args:{icon:v,assetName:"Lightning Bitcoin",fiatBalance:"R$2.500",cryptoEquivalent:"≈ 0.033120 BTC"}},c={name:"Liquid Bitcoin",args:{icon:y,assetName:"Liquid Bitcoin",fiatBalance:"R$7.200",cryptoEquivalent:"≈ 0.095400 BTC"}},l={name:"USDT",args:{icon:h,assetName:"USDT",fiatBalance:"R$3.150",cryptoEquivalent:"≈ 630.00 USDT"}},d={name:"Depix",args:{icon:B,assetName:"Depix",fiatBalance:"R$850",cryptoEquivalent:"≈ 850.00 BRZ"}},p={name:"EURx",args:{icon:x,assetName:"EURx",fiatBalance:"R$560",cryptoEquivalent:"≈ 100.00 EURx"}},u={name:"Toggle Privacidade (olho)",render:()=>{const[n,t]=J.useState(!1),i=[{icon:f,assetName:"Bitcoin",fiatBalance:"R$14.000",cryptoEquivalent:"≈ 0.185630 BTC"},{icon:v,assetName:"Lightning Bitcoin",fiatBalance:"R$2.500",cryptoEquivalent:"≈ 0.033120 BTC"},{icon:y,assetName:"Liquid Bitcoin",fiatBalance:"R$7.200",cryptoEquivalent:"≈ 0.095400 BTC"},{icon:h,assetName:"USDT",fiatBalance:"R$3.150",cryptoEquivalent:"≈ 630.00 USDT"},{icon:B,assetName:"Depix",fiatBalance:"R$850",cryptoEquivalent:"≈ 850.00 BRZ"},{icon:x,assetName:"EURx",fiatBalance:"R$560",cryptoEquivalent:"≈ 100.00 EURx"}];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[e.jsx("div",{style:{display:"flex",justifyContent:"flex-end",padding:"0 4px 8px"},children:e.jsxs("button",{onClick:()=>t(a=>!a),style:{display:"flex",alignItems:"center",gap:6,background:"none",border:"1px solid rgba(255,255,255,0.1)",borderRadius:8,padding:"6px 12px",color:n?"#727272":"#fff",fontFamily:"Inter, sans-serif",fontSize:12,cursor:"pointer",transition:"color 0.15s"},children:[n?e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 18 18",fill:"none",children:e.jsx("path",{d:"M2 2l14 14M7.4 7.5A2 2 0 0 0 9 11a2 2 0 0 0 1.5-.6M4.5 4.6C2.8 5.9 1.5 8 1.5 9c0 0 2 5 7.5 5 1.5 0 2.8-.4 3.9-1M7 3.3C7.6 3.1 8.3 3 9 3c5.5 0 7.5 6 7.5 6s-.5 1.5-1.7 2.8",stroke:"currentColor","stroke-width":"1.4","stroke-linecap":"round","stroke-linejoin":"round"})}):e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 18 18",fill:"none",children:[e.jsx("path",{d:"M1.5 9s2.5-5 7.5-5 7.5 5 7.5 5-2.5 5-7.5 5-7.5-5-7.5-5z",stroke:"currentColor","stroke-width":"1.4","stroke-linecap":"round","stroke-linejoin":"round"}),e.jsx("circle",{cx:"9",cy:"9",r:"2",stroke:"currentColor","stroke-width":"1.4"})]}),n?"Mostrar saldos":"Ocultar saldos"]})}),i.map(a=>e.jsx(g,{...a,isPrivate:n},a.assetName))]})}},K={fontFamily:"Inter, sans-serif",fontSize:11,fontWeight:700,lineHeight:"120%",color:"#333",textTransform:"uppercase",padding:"0 4px"},m={name:"Todos os Ativos (com seções)",render:()=>{const n=[{label:"Onchain",assets:[{icon:f,assetName:"Bitcoin",fiatBalance:"R$14.000",cryptoEquivalent:"≈ 0.185630 BTC"}]},{label:"Segunda Camada",assets:[{icon:v,assetName:"Lightning Bitcoin",fiatBalance:"R$2.500",cryptoEquivalent:"≈ 0.033120 BTC"}]},{label:"Sidechain",assets:[{icon:B,assetName:"Depix",fiatBalance:"R$850",cryptoEquivalent:"≈ 850.00 BRZ"},{icon:y,assetName:"Liquid Bitcoin",fiatBalance:"R$7.200",cryptoEquivalent:"≈ 0.095400 BTC"},{icon:h,assetName:"USDT",fiatBalance:"R$3.150",cryptoEquivalent:"≈ 630.00 USDT"},{icon:x,assetName:"EURx",fiatBalance:"R$560",cryptoEquivalent:"≈ 100.00 EURx"}]}];return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:n.map(({label:t,assets:i})=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[e.jsx("span",{style:K,children:t}),i.map(a=>e.jsx(g,{...a},a.assetName))]},t))})}};var q,E,T;s.parameters={...s.parameters,docs:{...(q=s.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Bitcoin',
  args: {
    icon: bitcoinIcon,
    assetName: 'Bitcoin',
    fiatBalance: 'R$14.000',
    cryptoEquivalent: '≈ 0.185630 BTC'
  }
}`,...(T=(E=s.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var C,N,S;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Dados Privados',
  args: {
    icon: bitcoinIcon,
    assetName: 'Bitcoin',
    fiatBalance: 'R$14.000',
    cryptoEquivalent: '≈ 0.185630 BTC',
    isPrivate: true
  }
}`,...(S=(N=o.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var I,$,b;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Lightning Bitcoin',
  args: {
    icon: lightningIcon,
    assetName: 'Lightning Bitcoin',
    fiatBalance: 'R$2.500',
    cryptoEquivalent: '≈ 0.033120 BTC'
  }
}`,...(b=($=r.parameters)==null?void 0:$.docs)==null?void 0:b.source}}};var D,k,U;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Liquid Bitcoin',
  args: {
    icon: liquidBitcoinIcon,
    assetName: 'Liquid Bitcoin',
    fiatBalance: 'R$7.200',
    cryptoEquivalent: '≈ 0.095400 BTC'
  }
}`,...(U=(k=c.parameters)==null?void 0:k.docs)==null?void 0:U.source}}};var j,L,P;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'USDT',
  args: {
    icon: usdtIcon,
    assetName: 'USDT',
    fiatBalance: 'R$3.150',
    cryptoEquivalent: '≈ 630.00 USDT'
  }
}`,...(P=(L=l.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var w,A,M;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Depix',
  args: {
    icon: depixIcon,
    assetName: 'Depix',
    fiatBalance: 'R$850',
    cryptoEquivalent: '≈ 850.00 BRZ'
  }
}`,...(M=(A=d.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var z,F,O;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'EURx',
  args: {
    icon: eurxIcon,
    assetName: 'EURx',
    fiatBalance: 'R$560',
    cryptoEquivalent: '≈ 100.00 EURx'
  }
}`,...(O=(F=p.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var Z,W,H;u.parameters={...u.parameters,docs:{...(Z=u.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'Toggle Privacidade (olho)',
  render: () => {
    const [isPrivate, setIsPrivate] = useState(false);
    const assets = [{
      icon: bitcoinIcon,
      assetName: 'Bitcoin',
      fiatBalance: 'R$14.000',
      cryptoEquivalent: '≈ 0.185630 BTC'
    }, {
      icon: lightningIcon,
      assetName: 'Lightning Bitcoin',
      fiatBalance: 'R$2.500',
      cryptoEquivalent: '≈ 0.033120 BTC'
    }, {
      icon: liquidBitcoinIcon,
      assetName: 'Liquid Bitcoin',
      fiatBalance: 'R$7.200',
      cryptoEquivalent: '≈ 0.095400 BTC'
    }, {
      icon: usdtIcon,
      assetName: 'USDT',
      fiatBalance: 'R$3.150',
      cryptoEquivalent: '≈ 630.00 USDT'
    }, {
      icon: depixIcon,
      assetName: 'Depix',
      fiatBalance: 'R$850',
      cryptoEquivalent: '≈ 850.00 BRZ'
    }, {
      icon: eurxIcon,
      assetName: 'EURx',
      fiatBalance: 'R$560',
      cryptoEquivalent: '≈ 100.00 EURx'
    }];
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }}>\r
        <div style={{
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '0 4px 8px'
      }}>\r
          <button onClick={() => setIsPrivate(p => !p)} style={{
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          background: 'none',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: 8,
          padding: '6px 12px',
          color: isPrivate ? '#727272' : '#fff',
          fontFamily: 'Inter, sans-serif',
          fontSize: 12,
          cursor: 'pointer',
          transition: 'color 0.15s'
        }}>\r
            {isPrivate ? <svg width="16" height="16" viewBox="0 0 18 18" fill="none">\r
                <path d="M2 2l14 14M7.4 7.5A2 2 0 0 0 9 11a2 2 0 0 0 1.5-.6M4.5 4.6C2.8 5.9 1.5 8 1.5 9c0 0 2 5 7.5 5 1.5 0 2.8-.4 3.9-1M7 3.3C7.6 3.1 8.3 3 9 3c5.5 0 7.5 6 7.5 6s-.5 1.5-1.7 2.8" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />\r
              </svg> : <svg width="16" height="16" viewBox="0 0 18 18" fill="none">\r
                <path d="M1.5 9s2.5-5 7.5-5 7.5 5 7.5 5-2.5 5-7.5 5-7.5-5-7.5-5z" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />\r
                <circle cx="9" cy="9" r="2" stroke="currentColor" stroke-width="1.4" />\r
              </svg>}\r
            {isPrivate ? 'Mostrar saldos' : 'Ocultar saldos'}\r
          </button>\r
        </div>\r
        {assets.map(asset => <AssetBalanceCard key={asset.assetName} {...asset} isPrivate={isPrivate} />)}\r
      </div>;
  }
}`,...(H=(W=u.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};var _,V,G;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Todos os Ativos (com seções)',
  render: () => {
    const sections = [{
      label: 'Onchain',
      assets: [{
        icon: bitcoinIcon,
        assetName: 'Bitcoin',
        fiatBalance: 'R$14.000',
        cryptoEquivalent: '≈ 0.185630 BTC'
      }]
    }, {
      label: 'Segunda Camada',
      assets: [{
        icon: lightningIcon,
        assetName: 'Lightning Bitcoin',
        fiatBalance: 'R$2.500',
        cryptoEquivalent: '≈ 0.033120 BTC'
      }]
    }, {
      label: 'Sidechain',
      assets: [{
        icon: depixIcon,
        assetName: 'Depix',
        fiatBalance: 'R$850',
        cryptoEquivalent: '≈ 850.00 BRZ'
      }, {
        icon: liquidBitcoinIcon,
        assetName: 'Liquid Bitcoin',
        fiatBalance: 'R$7.200',
        cryptoEquivalent: '≈ 0.095400 BTC'
      }, {
        icon: usdtIcon,
        assetName: 'USDT',
        fiatBalance: 'R$3.150',
        cryptoEquivalent: '≈ 630.00 USDT'
      }, {
        icon: eurxIcon,
        assetName: 'EURx',
        fiatBalance: 'R$560',
        cryptoEquivalent: '≈ 100.00 EURx'
      }]
    }];
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }}>\r
        {sections.map(({
        label,
        assets
      }) => <div key={label} style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 4
      }}>\r
            <span style={networkLabelStyle}>{label}</span>\r
            {assets.map(asset => <AssetBalanceCard key={asset.assetName} {...asset} />)}\r
          </div>)}\r
      </div>;
  }
}`,...(G=(V=m.parameters)==null?void 0:V.docs)==null?void 0:G.source}}};const ae=["Bitcoin","DadosPrivados","LightningBitcoin","LiquidBitcoin","USDT","Depix","EURx","TogglePrivacidade","TodosAtivos"];export{s as Bitcoin,o as DadosPrivados,d as Depix,p as EURx,r as LightningBitcoin,c as LiquidBitcoin,m as TodosAtivos,u as TogglePrivacidade,l as USDT,ae as __namedExportsOrder,ee as default};
