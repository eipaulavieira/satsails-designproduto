import{j as a}from"./jsx-runtime-DiklIkkE.js";import{c as ua,b as Ba,a as ga}from"./arrows-left-right-tFG28u1K.js";import"./index-DRjF_FHU.js";const ya={compra:{bg:"#000000",iconSrc:ga,filter:"brightness(0) saturate(100%) invert(56%) sepia(74%) saturate(528%) hue-rotate(103deg) brightness(104%)"},venda:{bg:"#000000",iconSrc:Ba,filter:"brightness(0) saturate(100%) invert(15%) sepia(100%) saturate(6000%) hue-rotate(358deg) brightness(85%)"},conversao:{bg:"#000000",iconSrc:ua,filter:"brightness(0) saturate(100%) invert(60%) sepia(93%) saturate(1058%) hue-rotate(2deg) brightness(103%)"}};function s({assetName:e,date:t,amount:n,amountBrl:ca,type:L,isPrivate:f=!1}){const{bg:da,iconSrc:pa,filter:la}=ya[L];return a.jsxs("div",{style:{display:"flex",alignItems:"center",width:358,padding:"12px 8px",gap:8,borderRadius:8,background:"var(--dark-new, #080808)",boxSizing:"border-box"},children:[a.jsxs("div",{style:{position:"relative",width:40,height:40,flexShrink:0},children:[a.jsx("div",{style:{width:40,height:40,borderRadius:"50%",background:da}}),a.jsx("img",{src:pa,width:18,height:18,alt:L,style:{position:"absolute",top:11,left:11,display:"block",filter:la}})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",flex:1,gap:8,minWidth:0},children:[a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4,flex:1,minWidth:0},children:[a.jsx("span",{style:{fontFamily:"Inter, sans-serif",fontSize:13,fontWeight:700,color:"#ffffff",lineHeight:"120%",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:e}),a.jsx("span",{style:{fontFamily:"Inter, sans-serif",fontSize:11,fontWeight:400,color:"#D1D2D2",lineHeight:"120%"},children:t})]}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4,alignItems:"flex-end",flexShrink:0},children:[a.jsx("span",{style:{fontFamily:"Inter, sans-serif",fontSize:11,fontWeight:400,color:"#ffffff",lineHeight:"120%",textAlign:"right"},children:f?"******":n}),a.jsx("span",{style:{fontFamily:"Inter, sans-serif",fontSize:11,fontWeight:400,color:"#ffffff",lineHeight:"120%",textAlign:"right"},children:f?"*****":ca})]})]})]})}s.__docgenInfo={description:"",methods:[],displayName:"TransactionHistoryCard",props:{assetName:{required:!0,tsType:{name:"string"},description:""},date:{required:!0,tsType:{name:"string"},description:""},amount:{required:!0,tsType:{name:"string"},description:""},amountBrl:{required:!0,tsType:{name:"string"},description:""},type:{required:!0,tsType:{name:"union",raw:"'compra' | 'venda' | 'conversao'",elements:[{name:"literal",value:"'compra'"},{name:"literal",value:"'venda'"},{name:"literal",value:"'conversao'"}]},description:""},isPrivate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const va={fontFamily:"Inter, sans-serif",fontSize:11,fontStyle:"normal",fontWeight:700,lineHeight:"120%",color:"var(--white, #D1D2D2)",textTransform:"uppercase"},Ra={title:"Componentes/Histórico/TransactionHistoryCard",component:s,parameters:{layout:"centered",backgrounds:{default:"app",values:[{name:"app",value:"#111111"},{name:"darker",value:"#000000"}]},docs:{description:{component:"Card de histórico de transações. Exibe tipo (compra/venda/conversão), nome do ativo, data, valor e equivalente em BRL. Aparece ao clicar em um ativo específico ou na tela de histórico geral."}}},argTypes:{type:{control:"select",options:["compra","venda","conversao"],description:"Tipo de transação"},assetName:{control:"text",description:"Nome do ativo"},date:{control:"text",description:"Data da transação"},amount:{control:"text",description:"Quantidade (sats, USDT, etc.)"},amountBrl:{control:"text",description:"Equivalente em BRL"},isPrivate:{control:"boolean",description:"Oculta valores com ****** (toggle do olho)"}},tags:["autodocs"]},o={name:"Bitcoin — Venda",args:{assetName:"Bitcoin",date:"06/05/2026",amount:"-413.714 sats",amountBrl:"-1.484,66 BRL",type:"venda"}},r={name:"Bitcoin — Compra",args:{assetName:"Bitcoin",date:"04/05/2026",amount:"+520.000 sats",amountBrl:"+1.872,00 BRL",type:"compra"}},i={name:"Bitcoin — Conversão",args:{assetName:"Bitcoin",date:"02/05/2026",amount:"200.000 sats",amountBrl:"720,00 BRL",type:"conversao"}},m={name:"Lightning Bitcoin — Venda",args:{assetName:"Lightning Bitcoin",date:"05/05/2026",amount:"-85.000 sats",amountBrl:"-306,00 BRL",type:"venda"}},c={name:"Lightning Bitcoin — Compra",args:{assetName:"Lightning Bitcoin",date:"03/05/2026",amount:"+150.000 sats",amountBrl:"+540,00 BRL",type:"compra"}},d={name:"USDT — Compra",args:{assetName:"USDT",date:"06/05/2026",amount:"+250,00 USDT",amountBrl:"+1.375,00 BRL",type:"compra"}},p={name:"USDT — Venda",args:{assetName:"USDT",date:"01/05/2026",amount:"-180,00 USDT",amountBrl:"-990,00 BRL",type:"venda"}},l={name:"Depix — Compra",args:{assetName:"Depix",date:"05/05/2026",amount:"+500,00 BRZ",amountBrl:"+500,00 BRL",type:"compra"}},u={name:"Liquid Bitcoin — Conversão",args:{assetName:"Liquid Bitcoin",date:"04/05/2026",amount:"95.000 sats",amountBrl:"342,00 BRL",type:"conversao"}},B={name:"EURx — Compra",args:{assetName:"EURx",date:"03/05/2026",amount:"+75,00 EURx",amountBrl:"+435,00 BRL",type:"compra"}},g={name:"Dados Privados",args:{assetName:"Bitcoin",date:"06/05/2026",amount:"-413.714 sats",amountBrl:"-1.484,66 BRL",type:"venda",isPrivate:!0}},y={name:"Histórico — Bitcoin",render:()=>{const e=[{type:"venda",date:"06/05/2026",amount:"-413.714 sats",amountBrl:"-1.484,66 BRL"},{type:"compra",date:"04/05/2026",amount:"+520.000 sats",amountBrl:"+1.872,00 BRL"},{type:"conversao",date:"02/05/2026",amount:"200.000 sats",amountBrl:"720,00 BRL"},{type:"compra",date:"29/04/2026",amount:"+340.000 sats",amountBrl:"+1.224,00 BRL"},{type:"venda",date:"25/04/2026",amount:"-90.500 sats",amountBrl:"-325,80 BRL"}];return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[a.jsx("span",{style:va,children:"Onchain"}),a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4},children:e.map((t,n)=>a.jsx(s,{assetName:"Bitcoin",...t},n))})]})}},v={name:"Histórico — USDT",render:()=>{const e=[{type:"compra",date:"06/05/2026",amount:"+250,00 USDT",amountBrl:"+1.375,00 BRL"},{type:"venda",date:"03/05/2026",amount:"-180,00 USDT",amountBrl:"-990,00 BRL"},{type:"conversao",date:"01/05/2026",amount:"100,00 USDT",amountBrl:"550,00 BRL"},{type:"compra",date:"28/04/2026",amount:"+400,00 USDT",amountBrl:"+2.200,00 BRL"}];return a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4},children:e.map((t,n)=>a.jsx(s,{assetName:"USDT",...t},n))})}},x={name:"Histórico Geral (todos os ativos)",render:()=>{const e=[{assetName:"Bitcoin",type:"venda",date:"06/05/2026",amount:"-413.714 sats",amountBrl:"-1.484,66 BRL"},{assetName:"USDT",type:"compra",date:"06/05/2026",amount:"+250,00 USDT",amountBrl:"+1.375,00 BRL"},{assetName:"Lightning Bitcoin",type:"compra",date:"05/05/2026",amount:"+150.000 sats",amountBrl:"+540,00 BRL"},{assetName:"Depix",type:"compra",date:"05/05/2026",amount:"+500,00 BRZ",amountBrl:"+500,00 BRL"},{assetName:"Bitcoin",type:"compra",date:"04/05/2026",amount:"+520.000 sats",amountBrl:"+1.872,00 BRL"},{assetName:"Liquid Bitcoin",type:"conversao",date:"04/05/2026",amount:"95.000 sats",amountBrl:"342,00 BRL"},{assetName:"EURx",type:"compra",date:"03/05/2026",amount:"+75,00 EURx",amountBrl:"+435,00 BRL"},{assetName:"USDT",type:"venda",date:"03/05/2026",amount:"-180,00 USDT",amountBrl:"-990,00 BRL"},{assetName:"Bitcoin",type:"conversao",date:"02/05/2026",amount:"200.000 sats",amountBrl:"720,00 BRL"},{assetName:"Lightning Bitcoin",type:"venda",date:"05/05/2026",amount:"-85.000 sats",amountBrl:"-306,00 BRL"}];return a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4},children:e.map((t,n)=>a.jsx(s,{...t},n))})}};var R,h,D;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Bitcoin — Venda',
  args: {
    assetName: 'Bitcoin',
    date: '06/05/2026',
    amount: '-413.714 sats',
    amountBrl: '-1.484,66 BRL',
    type: 'venda'
  }
}`,...(D=(h=o.parameters)==null?void 0:h.docs)==null?void 0:D.source}}};var S,T,U;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Bitcoin — Compra',
  args: {
    assetName: 'Bitcoin',
    date: '04/05/2026',
    amount: '+520.000 sats',
    amountBrl: '+1.872,00 BRL',
    type: 'compra'
  }
}`,...(U=(T=r.parameters)==null?void 0:T.docs)==null?void 0:U.source}}};var N,C,b;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Bitcoin — Conversão',
  args: {
    assetName: 'Bitcoin',
    date: '02/05/2026',
    amount: '200.000 sats',
    amountBrl: '720,00 BRL',
    type: 'conversao'
  }
}`,...(b=(C=i.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var H,j,E;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Lightning Bitcoin — Venda',
  args: {
    assetName: 'Lightning Bitcoin',
    date: '05/05/2026',
    amount: '-85.000 sats',
    amountBrl: '-306,00 BRL',
    type: 'venda'
  }
}`,...(E=(j=m.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};var q,w,I;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Lightning Bitcoin — Compra',
  args: {
    assetName: 'Lightning Bitcoin',
    date: '03/05/2026',
    amount: '+150.000 sats',
    amountBrl: '+540,00 BRL',
    type: 'compra'
  }
}`,...(I=(w=c.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var V,k,P;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'USDT — Compra',
  args: {
    assetName: 'USDT',
    date: '06/05/2026',
    amount: '+250,00 USDT',
    amountBrl: '+1.375,00 BRL',
    type: 'compra'
  }
}`,...(P=(k=d.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};var W,z,F;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'USDT — Venda',
  args: {
    assetName: 'USDT',
    date: '01/05/2026',
    amount: '-180,00 USDT',
    amountBrl: '-990,00 BRL',
    type: 'venda'
  }
}`,...(F=(z=p.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var O,G,_;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Depix — Compra',
  args: {
    assetName: 'Depix',
    date: '05/05/2026',
    amount: '+500,00 BRZ',
    amountBrl: '+500,00 BRL',
    type: 'compra'
  }
}`,...(_=(G=l.parameters)==null?void 0:G.docs)==null?void 0:_.source}}};var Z,A,Q;u.parameters={...u.parameters,docs:{...(Z=u.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'Liquid Bitcoin — Conversão',
  args: {
    assetName: 'Liquid Bitcoin',
    date: '04/05/2026',
    amount: '95.000 sats',
    amountBrl: '342,00 BRL',
    type: 'conversao'
  }
}`,...(Q=(A=u.parameters)==null?void 0:A.docs)==null?void 0:Q.source}}};var Y,J,K;B.parameters={...B.parameters,docs:{...(Y=B.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'EURx — Compra',
  args: {
    assetName: 'EURx',
    date: '03/05/2026',
    amount: '+75,00 EURx',
    amountBrl: '+435,00 BRL',
    type: 'compra'
  }
}`,...(K=(J=B.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var M,X,$;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Dados Privados',
  args: {
    assetName: 'Bitcoin',
    date: '06/05/2026',
    amount: '-413.714 sats',
    amountBrl: '-1.484,66 BRL',
    type: 'venda',
    isPrivate: true
  }
}`,...($=(X=g.parameters)==null?void 0:X.docs)==null?void 0:$.source}}};var aa,ea,ta;y.parameters={...y.parameters,docs:{...(aa=y.parameters)==null?void 0:aa.docs,source:{originalSource:`{
  name: 'Histórico — Bitcoin',
  render: () => {
    const txs = [{
      type: 'venda' as const,
      date: '06/05/2026',
      amount: '-413.714 sats',
      amountBrl: '-1.484,66 BRL'
    }, {
      type: 'compra' as const,
      date: '04/05/2026',
      amount: '+520.000 sats',
      amountBrl: '+1.872,00 BRL'
    }, {
      type: 'conversao' as const,
      date: '02/05/2026',
      amount: '200.000 sats',
      amountBrl: '720,00 BRL'
    }, {
      type: 'compra' as const,
      date: '29/04/2026',
      amount: '+340.000 sats',
      amountBrl: '+1.224,00 BRL'
    }, {
      type: 'venda' as const,
      date: '25/04/2026',
      amount: '-90.500 sats',
      amountBrl: '-325,80 BRL'
    }];
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }}>\r
        <span style={sectionLabelStyle}>Onchain</span>\r
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 4
      }}>\r
          {txs.map((tx, i) => <TransactionHistoryCard key={i} assetName="Bitcoin" {...tx} />)}\r
        </div>\r
      </div>;
  }
}`,...(ta=(ea=y.parameters)==null?void 0:ea.docs)==null?void 0:ta.source}}};var na,sa,oa;v.parameters={...v.parameters,docs:{...(na=v.parameters)==null?void 0:na.docs,source:{originalSource:`{
  name: 'Histórico — USDT',
  render: () => {
    const txs = [{
      type: 'compra' as const,
      date: '06/05/2026',
      amount: '+250,00 USDT',
      amountBrl: '+1.375,00 BRL'
    }, {
      type: 'venda' as const,
      date: '03/05/2026',
      amount: '-180,00 USDT',
      amountBrl: '-990,00 BRL'
    }, {
      type: 'conversao' as const,
      date: '01/05/2026',
      amount: '100,00 USDT',
      amountBrl: '550,00 BRL'
    }, {
      type: 'compra' as const,
      date: '28/04/2026',
      amount: '+400,00 USDT',
      amountBrl: '+2.200,00 BRL'
    }];
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }}>\r
        {txs.map((tx, i) => <TransactionHistoryCard key={i} assetName="USDT" {...tx} />)}\r
      </div>;
  }
}`,...(oa=(sa=v.parameters)==null?void 0:sa.docs)==null?void 0:oa.source}}};var ra,ia,ma;x.parameters={...x.parameters,docs:{...(ra=x.parameters)==null?void 0:ra.docs,source:{originalSource:`{
  name: 'Histórico Geral (todos os ativos)',
  render: () => {
    const txs = [{
      assetName: 'Bitcoin',
      type: 'venda' as const,
      date: '06/05/2026',
      amount: '-413.714 sats',
      amountBrl: '-1.484,66 BRL'
    }, {
      assetName: 'USDT',
      type: 'compra' as const,
      date: '06/05/2026',
      amount: '+250,00 USDT',
      amountBrl: '+1.375,00 BRL'
    }, {
      assetName: 'Lightning Bitcoin',
      type: 'compra' as const,
      date: '05/05/2026',
      amount: '+150.000 sats',
      amountBrl: '+540,00 BRL'
    }, {
      assetName: 'Depix',
      type: 'compra' as const,
      date: '05/05/2026',
      amount: '+500,00 BRZ',
      amountBrl: '+500,00 BRL'
    }, {
      assetName: 'Bitcoin',
      type: 'compra' as const,
      date: '04/05/2026',
      amount: '+520.000 sats',
      amountBrl: '+1.872,00 BRL'
    }, {
      assetName: 'Liquid Bitcoin',
      type: 'conversao' as const,
      date: '04/05/2026',
      amount: '95.000 sats',
      amountBrl: '342,00 BRL'
    }, {
      assetName: 'EURx',
      type: 'compra' as const,
      date: '03/05/2026',
      amount: '+75,00 EURx',
      amountBrl: '+435,00 BRL'
    }, {
      assetName: 'USDT',
      type: 'venda' as const,
      date: '03/05/2026',
      amount: '-180,00 USDT',
      amountBrl: '-990,00 BRL'
    }, {
      assetName: 'Bitcoin',
      type: 'conversao' as const,
      date: '02/05/2026',
      amount: '200.000 sats',
      amountBrl: '720,00 BRL'
    }, {
      assetName: 'Lightning Bitcoin',
      type: 'venda' as const,
      date: '05/05/2026',
      amount: '-85.000 sats',
      amountBrl: '-306,00 BRL'
    }];
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }}>\r
        {txs.map((tx, i) => <TransactionHistoryCard key={i} {...tx} />)}\r
      </div>;
  }
}`,...(ma=(ia=x.parameters)==null?void 0:ia.docs)==null?void 0:ma.source}}};const ha=["BitcoinVenda","BitcoinCompra","BitcoinConversao","LightningVenda","LightningCompra","USDTCompra","USDTVenda","DepixCompra","LiquidConversao","EURxCompra","DadosPrivados","HistoricoBitcoin","HistoricoUSDT","HistoricoGeral"];export{r as BitcoinCompra,i as BitcoinConversao,o as BitcoinVenda,g as DadosPrivados,l as DepixCompra,B as EURxCompra,y as HistoricoBitcoin,x as HistoricoGeral,v as HistoricoUSDT,c as LightningCompra,m as LightningVenda,u as LiquidConversao,d as USDTCompra,p as USDTVenda,ha as __namedExportsOrder,Ra as default};
