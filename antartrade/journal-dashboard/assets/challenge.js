/* 90-day challenge (/challenge) in the journal mock. Copy word for word from Noam's ChallengeJoin, ChallengeDashboard,
   ChallengeSnapshot, stage.ts, rules.ts and coaching.ts; numbers are sample data. Uses the mock's own helpers ($, ico, ttl, dlg, toast,
   enhanceForms, robotoDigits, newAccDlg, ACCOUNTS, TRACKS). */
(function(){
const SV=(p,s)=>`<svg class="i" viewBox="0 0 24 24"${s?` style="${s}"`:""}>${p}</svg>`;
const CI={
 flag:'<path d="M5 21V4M5 4h11l-2 4 2 4H5"/>',
 compass:'<circle cx="12" cy="12" r="8.5"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>',
 alert:'<path d="M12 4l9 16H3z"/><path d="M12 10v4M12 17h.01"/>',
 accs:'<rect x="3.5" y="5" width="17" height="14" rx="3"/><path d="M3.5 10h17M7.5 15h3"/>',
 check:'<circle cx="12" cy="12" r="8.5"/><path d="M8.5 12.2l2.4 2.4 4.6-4.8"/>',
 pen:'<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13.5 6.5l4 4"/>',
 ext:'<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
 calc:'<rect x="5" y="3" width="14" height="18" rx="3"/><path d="M8 7h8M8.5 12h.01M12 12h.01M15.5 12h.01M8.5 16h.01M12 16h.01M15.5 16h.01"/>',
 tag:'<path d="M3.5 12.5V5a1.5 1.5 0 0 1 1.5-1.5h7.5l8 8-9 9z"/><circle cx="8" cy="8" r="1.4"/>',
 up:'<path d="M12 19V5M6 11l6-6 6 6"/>',dn:'<path d="M12 5v14M6 13l6 6 6-6"/>',
 plus:'<circle cx="12" cy="12" r="8.5"/><path d="M12 8.5v7M8.5 12h7"/>',
 chev:'<path d="M6 9l6 6 6-6"/>',left:'<path d="M15 6l-6 6 6 6"/>',
 shield:'<path d="M12 3l7.5 3v5.5c0 4.5-3.2 8.2-7.5 9.5-4.3-1.3-7.5-5-7.5-9.5V6z"/>',
 count:'<path d="M5 9h14M5 15h14M10 4L8 20M16 4l-2 16"/>',
 pct:'<path d="M18 6L6 18"/><circle cx="7.5" cy="7.5" r="2.5"/><circle cx="16.5" cy="16.5" r="2.5"/>',
 scale:'<path d="M12 4v16M7 20h10M5 8h14"/><path d="M5 8l-2.5 6a2.5 2.5 0 0 0 5 0zM19 8l-2.5 6a2.5 2.5 0 0 0 5 0z"/>',
 streak:'<path d="M4 18l5-6 4 3 7-9"/><path d="M15 6h5v5"/>',
 dollar:'<path d="M12 3v18M16.5 7.5c-.6-1.6-2.4-2.5-4.5-2.5-2.5 0-4.5 1.3-4.5 3.3 0 4.5 9 2.4 9 7 0 2-2 3.3-4.5 3.3-2.1 0-3.9-.9-4.5-2.6"/>'};
const ci=(k,c)=>`<span class="ico" style="--c:var(--c-${c})">${SV(CI[k])}</span>`;
const cttl=(t,k,c)=>`<div class="ttl">${ci(k,c)}<h2>${t}</h2></div>`;
const usd=v=>(v<0?"-":"")+"$"+Math.round(Math.abs(v)).toLocaleString("en-US");
const usd2=v=>"$"+Math.abs(v).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2});
const pctf=x=>x==null?"-":Math.round(x*100)+"%";
/* a sign belongs to the number only when no Hebrew letter sits right before it ("\u05d1-30" keeps its hyphen outside) */
const nums=t=>String(t).replace(/(?<![\u0590-\u05ff])[+-]?\$?\d(?:[\d,.:]*\d)?(?:%|R|K)?|\$?\d(?:[\d,.:]*\d)?(?:%|R|K)?/g,m=>`<span class="num">${m}</span>`);
const fmtR=r=>`${r>0?"+":r<0?"-":""}${Math.abs(Math.round(r*10)/10)}R`;

/* ---- Noam's texts ---- */
const STAGES={1:{title:"\u05d4\u05d9\u05e9\u05e8\u05d3\u05d5\u05ea",goal:"\u05dc\u05d0 \u05dc\u05e9\u05e8\u05d5\u05e3 \u05d7\u05e9\u05d1\u05d5\u05df, \u05dc\u05e2\u05de\u05d5\u05d3 \u05d1\u05db\u05dc\u05dc\u05d9\u05dd \u05d5\u05dc\u05d1\u05e6\u05e2 \u05ea\u05d5\u05db\u05e0\u05d9\u05ea",days:"\u05d9\u05de\u05d9\u05dd 1-30"},2:{title:"\u05de\u05d1\u05d7\u05df \u05de\u05d9\u05de\u05d5\u05df",goal:"\u05dc\u05e2\u05d1\u05d5\u05e8 \u05de\u05d1\u05d7\u05df \u05d1\u05dc\u05d9 \u05dc\u05d4\u05d2\u05d3\u05d9\u05dc \u05e1\u05d9\u05db\u05d5\u05df",days:"\u05d9\u05de\u05d9\u05dd 31-60"},3:{title:"\u05de\u05e9\u05d9\u05db\u05d4 \u05e8\u05d0\u05e9\u05d5\u05e0\u05d4",goal:"\u05dc\u05e9\u05de\u05d5\u05e8 \u05e2\u05dc \u05d4\u05d7\u05e9\u05d1\u05d5\u05df \u05d4\u05de\u05de\u05d5\u05de\u05df \u05d5\u05dc\u05d4\u05d2\u05d9\u05e2 \u05dc\u05de\u05e9\u05d9\u05db\u05d4",days:"\u05d9\u05de\u05d9\u05dd 61-90"}};
const LINK_STATUS={active:"\u05e4\u05e2\u05d9\u05dc",failed:"\u05e0\u05e9\u05e8\u05e3",passed:"\u05e2\u05d1\u05e8 \u05de\u05d1\u05d7\u05df",closed:"\u05e0\u05e1\u05d2\u05e8"};
const PHASE={evaluation:"\u05de\u05d1\u05d7\u05df",funded:"\u05de\u05de\u05d5\u05de\u05df",personal:"\u05d0\u05d9\u05e9\u05d9"};
const VIOL={max_trades:"\u05d9\u05d5\u05ea\u05e8 \u05e2\u05e1\u05e7\u05d0\u05d5\u05ea \u05de\u05d4\u05de\u05d5\u05ea\u05e8 \u05d1\u05d9\u05d5\u05dd",after_losses:"\u05d4\u05de\u05e9\u05da \u05de\u05e1\u05d7\u05e8 \u05d0\u05d7\u05e8\u05d9 \u05d4\u05e4\u05e1\u05d3\u05d9\u05dd \u05e8\u05e6\u05d5\u05e4\u05d9\u05dd",rr_below_min:"\u05d9\u05d7\u05e1 \u05e1\u05d9\u05db\u05d5\u05df-\u05e1\u05d9\u05db\u05d5\u05d9 \u05de\u05ea\u05d7\u05ea \u05dc\u05d9\u05e2\u05d3",no_stop:"\u05e2\u05e1\u05e7\u05d4 \u05d1\u05dc\u05d9 \u05e1\u05d8\u05d5\u05e4 (\u05e1\u05d9\u05db\u05d5\u05df \u05dc\u05d0 \u05de\u05d5\u05d2\u05d3\u05e8)",over_risk:"\u05e1\u05d9\u05db\u05d5\u05df \u05de\u05e2\u05d1\u05e8 \u05dc\u05de\u05d4 \u05e9\u05d4\u05d5\u05d2\u05d3\u05e8",firm_daily_loss:"\u05d7\u05e8\u05d9\u05d2\u05d4 \u05de\u05d4\u05e1\u05d8\u05d5\u05e4 \u05d4\u05d9\u05d5\u05de\u05d9 \u05e9\u05dc \u05d4\u05d7\u05d1\u05e8\u05d4"};
const MANUAL="\u05d1\u05d0\u05ea\u05d2\u05e8 \u05de\u05d6\u05d9\u05e0\u05d9\u05dd \u05db\u05dc \u05e2\u05e1\u05e7\u05d4 \u05d9\u05d3\u05e0\u05d9\u05ea, \u05db\u05d5\u05dc\u05dc \u05e1\u05d8\u05d5\u05e4 \u05d5'\u05e2\u05d3 \u05d4\u05e1\u05d8\u05d5\u05e4'. \u05d6\u05d4 \u05d7\u05dc\u05e7 \u05de\u05d4\u05d0\u05d9\u05de\u05d5\u05df. \u05d4\u05d0\u05ea\u05d2\u05e8 \u05d0\u05d9\u05e9\u05d9, \u05d0\u05d6 \u05de\u05d6\u05d9\u05e0\u05d9\u05dd \u05d4\u05db\u05dc, \u05d2\u05dd \u05d0\u05ea \u05d4\u05de\u05e4\u05e1\u05d9\u05d3\u05d5\u05ea, \u05d0\u05d7\u05e8\u05ea \u05d4\u05e0\u05ea\u05d5\u05e0\u05d9\u05dd \u05dc\u05d0 \u05d9\u05e2\u05d6\u05e8\u05d5 \u05dc\u05da.";
const DISCOUNT="[\u05d8\u05e7\u05e1\u05d8 \u05d6\u05de\u05e0\u05d9] \u05d0\u05e4\u05e9\u05e8 \u05dc\u05e4\u05ea\u05d5\u05d7 \u05d7\u05e9\u05d1\u05d5\u05df \u05d1\u05d4\u05e0\u05d7\u05d4 \u05e2\u05dd \u05d4\u05e7\u05d5\u05d3 \u05e9\u05dc AntarTrade. \u05d4\u05e0\u05d5\u05e1\u05d7 \u05d5\u05d4\u05e7\u05d5\u05d3 \u05d4\u05de\u05d3\u05d5\u05d9\u05e7 \u05d9\u05e2\u05d5\u05d3\u05db\u05e0\u05d5 \u05d1\u05e7\u05e8\u05d5\u05d1.";
const RULE_LINES=r=>[
 `\u05d9\u05d7\u05e1 \u05e1\u05d9\u05db\u05d5\u05df-\u05e1\u05d9\u05db\u05d5\u05d9 1:${r.minRr} \u05dc\u05e4\u05d7\u05d5\u05ea \u05d1\u05db\u05dc \u05e2\u05e1\u05e7\u05d4 \u05de\u05e0\u05e6\u05d7\u05ea. \u05e2\u05e1\u05e7\u05d4 \u05d1\u05dc\u05d9 \u05e1\u05d8\u05d5\u05e4 = \u05e1\u05d9\u05db\u05d5\u05df \u05dc\u05d0 \u05de\u05d5\u05d2\u05d3\u05e8`,
 `\u05e2\u05d3 ${r.maxDailyTrades} \u05e2\u05e1\u05e7\u05d0\u05d5\u05ea \u05d1\u05d9\u05d5\u05dd`,
 `\u05d0\u05d7\u05e8\u05d9 ${r.maxConsecutiveLosses} \u05d4\u05e4\u05e1\u05d3\u05d9\u05dd \u05e8\u05e6\u05d5\u05e4\u05d9\u05dd \u05e2\u05d5\u05e6\u05e8\u05d9\u05dd \u05dc\u05d4\u05d9\u05d5\u05dd`,
 r.risk?`\u05e1\u05d9\u05db\u05d5\u05df \u05e9\u05dc \u05e2\u05d3 $${r.risk.toLocaleString("en-US")} \u05dc\u05e2\u05e1\u05e7\u05d4`:"\u05e1\u05d9\u05db\u05d5\u05df \u05dc\u05e2\u05e1\u05e7\u05d4 \u05e9\u05de\u05d5\u05d2\u05d3\u05e8 \u05de\u05e8\u05d0\u05e9",
 "\u05d1\u05ea\u05d5\u05da \u05de\u05d2\u05d1\u05dc\u05d5\u05ea \u05d4\u05d7\u05d1\u05e8\u05d4: \u05d4\u05e1\u05d8\u05d5\u05e4 \u05d4\u05d9\u05d5\u05de\u05d9 \u05d5\u05d4\u05e1\u05d8\u05d5\u05e4 \u05d4\u05db\u05dc\u05dc\u05d9 \u05e9\u05dc \u05d4\u05d7\u05e9\u05d1\u05d5\u05df",
 MANUAL,
 "\u05e2\u05e1\u05e7\u05d4 \u05de\u05e1\u05e0\u05db\u05e8\u05d5\u05df \u05d1\u05dc\u05d9 \u05e1\u05d8\u05d5\u05e4: \u05d9\u05e9 \u05e2\u05d3 \u05e1\u05d5\u05e3 \u05d9\u05d5\u05dd \u05d4\u05de\u05e1\u05d7\u05e8 \u05d4\u05d1\u05d0 \u05dc\u05d4\u05e9\u05dc\u05d9\u05dd \u05d0\u05ea \u05d4\u05e1\u05d8\u05d5\u05e4, \u05d0\u05d7\u05e8\u05ea \u05d4\u05d9\u05d0 \u05e0\u05e1\u05e4\u05e8\u05ea \u05db\u05d4\u05e4\u05e8\u05d4"];
const headline=o=>o.payouts>0?"\u05d4\u05d2\u05e2\u05ea \u05dc\u05de\u05e9\u05d9\u05db\u05d4. \u05e2\u05db\u05e9\u05d9\u05d5 \u05dc\u05e9\u05de\u05d5\u05e8 \u05e2\u05dc \u05d4\u05d7\u05e9\u05d1\u05d5\u05df \u05d5\u05dc\u05d7\u05d6\u05d5\u05e8 \u05e2\u05dc \u05d6\u05d4":o.passed>0?(o.burned===0?"\u05e2\u05d1\u05e8\u05ea \u05de\u05d1\u05d7\u05df \u05d1\u05dc\u05d9 \u05dc\u05e9\u05e8\u05d5\u05e3 \u05d7\u05e9\u05d1\u05d5\u05df. \u05de\u05e6\u05d5\u05d9\u05df":"\u05e2\u05d1\u05e8\u05ea \u05de\u05d1\u05d7\u05df. \u05de\u05de\u05e9\u05d9\u05db\u05d9\u05dd \u05dc\u05e9\u05de\u05d5\u05e8 \u05e2\u05dc \u05d4\u05db\u05dc\u05dc\u05d9\u05dd"):o.burned===0?"\u05d0\u05e3 \u05d7\u05e9\u05d1\u05d5\u05df \u05dc\u05d0 \u05e0\u05e9\u05e8\u05e3. \u05d6\u05d5 \u05d4\u05d4\u05e6\u05dc\u05d7\u05d4 \u05d4\u05e8\u05d0\u05e9\u05d5\u05e0\u05d4 \u05e9\u05dc \u05d4\u05d0\u05ea\u05d2\u05e8":"\u05d7\u05e9\u05d1\u05d5\u05df \u05e0\u05e9\u05e8\u05e3. \u05de\u05d5\u05e1\u05d9\u05e4\u05d9\u05dd \u05d7\u05e9\u05d1\u05d5\u05df \u05d7\u05d3\u05e9 \u05d5\u05de\u05de\u05e9\u05d9\u05db\u05d9\u05dd: \u05d4\u05d4\u05d9\u05e1\u05d8\u05d5\u05e8\u05d9\u05d4 \u05e0\u05e9\u05de\u05e8\u05ea \u05d5\u05e8\u05d5\u05d0\u05d9\u05dd \u05d0\u05ea \u05d4\u05e9\u05d9\u05e4\u05d5\u05e8";

/* ---- sample challenges ---- */
const RULES={maxDailyTrades:3,maxConsecutiveLosses:2,minRr:1,riskPerTrade:250};
const SAMPLES={
 d23:{day:23,stage:1,reason:"30 \u05d9\u05de\u05d9 \u05d4\u05de\u05e1\u05d7\u05e8 \u05d4\u05e8\u05d0\u05e9\u05d5\u05e0\u05d9\u05dd",endDay:"12.03.2027",av:"one",
  out:{burned:1,passed:0,payouts:0},
  stats:{trades:41,daysTraded:19,wins:22,losses:19,winRate:.54,rr:1.08,maxLossStreak:3,net:640,commissions:182},compliance:.84,
  pendingStops:[{deadline:"06.11.2026"}],missingHypo:6,daysToNext:7,periods:[],
  violations:[["03.11.2026",[["max_trades","\u05e2\u05e1\u05e7\u05d4 \u05de\u05e1\u05e4\u05e8 4 \u05d1\u05d9\u05d5\u05dd (\u05de\u05d5\u05ea\u05e8 3)","Apex 50K #1"]]],["28.10.2026",[["after_losses","\u05e0\u05e4\u05ea\u05d7\u05d4 \u05d0\u05d7\u05e8\u05d9 2 \u05d4\u05e4\u05e1\u05d3\u05d9\u05dd \u05d1\u05e8\u05e6\u05e3","Take Profit 100K"],["over_risk","\u05d4\u05e4\u05e1\u05d3 \u05e9\u05dc $310.00 (\u05d4\u05d5\u05d2\u05d3\u05e8 $250.00)","Take Profit 100K"]]],["21.10.2026",[["firm_daily_loss","\u05d4\u05e4\u05e1\u05d3 \u05d9\u05d5\u05de\u05d9 $1,040.00 (\u05de\u05d2\u05d1\u05dc\u05ea \u05d4\u05d7\u05d1\u05e8\u05d4 $1,000.00)","Apex 50K #2"]]]],
  links:[{id:"l1",name:"Apex 50K #1",phase:"evaluation",status:"active"},{id:"l2",name:"Take Profit 100K",phase:"evaluation",status:"active"},{id:"l3",name:"Apex 50K #2",phase:"evaluation",status:"failed",ended:"21.10.2026"}],
  unlinked:["Lucid 50K","Bulenox 50K"],targetRr:null},
 d64:{day:64,stage:3,reason:"\u05e2\u05d1\u05e8\u05ea \u05de\u05d1\u05d7\u05df \u05de\u05d9\u05de\u05d5\u05df",endDay:"12.03.2027",av:"clean",
  out:{burned:1,passed:1,payouts:0},
  stats:{trades:112,daysTraded:55,wins:63,losses:49,winRate:.56,rr:1.21,maxLossStreak:3,net:3240,commissions:498},compliance:.91,
  pendingStops:[],missingHypo:0,daysToNext:26,
  violations:[["29.01.2027",[["rr_below_min","\u05e8\u05d5\u05d5\u05d7 \u05e9\u05dc 0.62R (\u05d9\u05e2\u05d3 1R)","Apex 50K PA"]]],["14.01.2027",[["no_stop","\u05dc\u05d0 \u05d4\u05d5\u05d6\u05df \u05de\u05d7\u05d9\u05e8 \u05e1\u05d8\u05d5\u05e4","Take Profit 100K"]]],["06.01.2027",[["max_trades","\u05e2\u05e1\u05e7\u05d4 \u05de\u05e1\u05e4\u05e8 4 \u05d1\u05d9\u05d5\u05dd (\u05de\u05d5\u05ea\u05e8 3)","Apex 50K #1"]]],["17.12.2026",[["after_losses","\u05e0\u05e4\u05ea\u05d7\u05d4 \u05d0\u05d7\u05e8\u05d9 2 \u05d4\u05e4\u05e1\u05d3\u05d9\u05dd \u05d1\u05e8\u05e6\u05e3","Apex 50K #1"]]],["03.11.2026",[["max_trades","\u05e2\u05e1\u05e7\u05d4 \u05de\u05e1\u05e4\u05e8 4 \u05d1\u05d9\u05d5\u05dd (\u05de\u05d5\u05ea\u05e8 3)","Apex 50K #1"]]],["28.10.2026",[["after_losses","\u05e0\u05e4\u05ea\u05d7\u05d4 \u05d0\u05d7\u05e8\u05d9 2 \u05d4\u05e4\u05e1\u05d3\u05d9\u05dd \u05d1\u05e8\u05e6\u05e3","Take Profit 100K"],["over_risk","\u05d4\u05e4\u05e1\u05d3 \u05e9\u05dc $310.00 (\u05d4\u05d5\u05d2\u05d3\u05e8 $250.00)","Take Profit 100K"]]],["23.10.2026",[["no_stop","\u05dc\u05d0 \u05d4\u05d5\u05d6\u05df \u05de\u05d7\u05d9\u05e8 \u05e1\u05d8\u05d5\u05e4","Take Profit 100K"]]],["21.10.2026",[["firm_daily_loss","\u05d4\u05e4\u05e1\u05d3 \u05d9\u05d5\u05de\u05d9 $1,040.00 (\u05de\u05d2\u05d1\u05dc\u05ea \u05d4\u05d7\u05d1\u05e8\u05d4 $1,000.00)","Apex 50K #2"]]]],
  links:[{id:"l1",name:"Apex 50K #1",phase:"evaluation",status:"passed",ended:"14.12.2026"},{id:"l4",name:"Apex 50K PA",phase:"funded",status:"active"},{id:"l2",name:"Take Profit 100K",phase:"evaluation",status:"active",sug:{status:"passed",day:"02.02.2027"}},{id:"l3",name:"Apex 50K #2",phase:"evaluation",status:"failed",ended:"21.10.2026"}],
  unlinked:["Lucid 50K","Bulenox 50K"],targetRr:null,
  periods:[
   {i:0,trades:44,stats:{winRate:.52,rr:1.04,tradesPerDay:2.2,net:520},stop:.86,comp:.84,top:["\u05d4\u05de\u05e9\u05da \u05de\u05e1\u05d7\u05e8 \u05d0\u05d7\u05e8\u05d9 \u05d4\u05e4\u05e1\u05d3\u05d9\u05dd \u05e8\u05e6\u05d5\u05e4\u05d9\u05dd",3],out:{burned:1,passed:0,payouts:0,amt:0},
    wi:{missing:9,total:44,complete:35,rows:[[1,19,16,0,3,null],[1.2,16,18,1,1.2,-1.8],[1.5,12,21,2,-3,-6],[2,8,24,3,-8,-11],[3,4,27,4,-15,-18]]},hl:null,
    recs:[{id:"rules_first",title:"\u05d4\u05e9\u05dc\u05d1 \u05d4\u05d1\u05d0: \u05e8\u05e7 \u05e2\u05de\u05d9\u05d3\u05d4 \u05d1\u05db\u05dc\u05dc\u05d9\u05dd",text:"\u05e4\u05d7\u05d5\u05ea \u05e2\u05e1\u05e7\u05d0\u05d5\u05ea, \u05d0\u05d5\u05ea\u05d5 1:1. \u05d4\u05de\u05d8\u05e8\u05d4 \u05dc-30 \u05d4\u05d9\u05de\u05d9\u05dd \u05d4\u05d1\u05d0\u05d9\u05dd \u05d4\u05d9\u05d0 \u05d9\u05d5\u05dd \u05d1\u05dc\u05d9 \u05d4\u05e4\u05e8\u05d4, \u05dc\u05d0 \u05e8\u05d5\u05d5\u05d7.",because:"\u05db\u05d9 \u05d1-30 \u05d4\u05d9\u05de\u05d9\u05dd \u05d4\u05d0\u05d7\u05e8\u05d5\u05e0\u05d9\u05dd \u05e0\u05e9\u05e8\u05e3 \u05d7\u05e9\u05d1\u05d5\u05df \u05d0\u05d7\u05d3 \u05d5\u05e8\u05e7 84% \u05de\u05d4\u05d9\u05de\u05d9\u05dd \u05e2\u05d1\u05e8\u05d5 \u05d1\u05dc\u05d9 \u05d4\u05e4\u05e8\u05d4."},
          {id:"focus_dir",title:"\u05dc\u05d4\u05ea\u05de\u05e7\u05d3 \u05d1\u05dc\u05d5\u05e0\u05d2",text:"\u05dc\u05d4\u05ea\u05de\u05e7\u05d3 \u05d1\u05db\u05d9\u05d5\u05d5\u05df \u05d4\u05d7\u05d6\u05e7, \u05d0\u05d5 \u05dc\u05d4\u05e7\u05d8\u05d9\u05df \u05e1\u05d9\u05db\u05d5\u05df \u05d1\u05e9\u05d5\u05e8\u05d8.",because:"\u05db\u05d9 \u05d1-30 \u05d4\u05d9\u05de\u05d9\u05dd \u05d4\u05d0\u05d7\u05e8\u05d5\u05e0\u05d9\u05dd \u05d1\u05dc\u05d5\u05e0\u05d2: 61% \u05d4\u05e6\u05dc\u05d7\u05d4 \u05d5-$1,180, \u05d5\u05d1\u05e9\u05d5\u05e8\u05d8: 41% \u05d5--$660."}]},
   {i:1,trades:46,stats:{winRate:.59,rr:1.32,tradesPerDay:1.8,net:2460},stop:.95,comp:.96,top:["\u05d9\u05d7\u05e1 \u05e1\u05d9\u05db\u05d5\u05df-\u05e1\u05d9\u05db\u05d5\u05d9 \u05de\u05ea\u05d7\u05ea \u05dc\u05d9\u05e2\u05d3",1],out:{burned:0,passed:1,payouts:0,amt:0},
    wi:{missing:0,total:46,complete:46,rows:[[1,27,19,0,8,null],[1.2,25,20,1,10,2],[1.5,22,22,2,11,3],[2,15,27,4,3,-5],[3,8,33,5,-9,-17]]},hl:1.5,
    recs:[{id:"try_target",target:1.5,title:"\u05d0\u05e4\u05e9\u05e8 \u05dc\u05e0\u05e1\u05d5\u05ea \u05d9\u05e2\u05d3 1:1.5",text:"\u05d4\u05db\u05dc\u05dc \u05e9\u05dc \u05d4\u05d0\u05ea\u05d2\u05e8 \u05e0\u05e9\u05d0\u05e8 1:1. \u05d0\u05dd \u05ea\u05d1\u05d7\u05e8 \u05dc\u05e0\u05e1\u05d5\u05ea 1:1.5 \u05d1-30 \u05d4\u05d9\u05de\u05d9\u05dd \u05d4\u05d1\u05d0\u05d9\u05dd, \u05e0\u05d1\u05d3\u05d5\u05e7 \u05d0\u05ea \u05d6\u05d4 \u05d1\u05ea\u05de\u05d5\u05e0\u05ea \u05d4\u05de\u05e6\u05d1 \u05d4\u05d1\u05d0\u05d4.",because:"\u05db\u05d9 \u05d1-30 \u05d4\u05d9\u05de\u05d9\u05dd \u05d4\u05d0\u05d7\u05e8\u05d5\u05e0\u05d9\u05dd, \u05d1-46 \u05e2\u05e1\u05e7\u05d0\u05d5\u05ea \u05e2\u05dd \u05e0\u05ea\u05d5\u05df \"\u05e2\u05d3 \u05d4\u05e1\u05d8\u05d5\u05e4\", \u05d9\u05e2\u05d3 1:1.5 \u05d4\u05d9\u05d4 \u05e0\u05d5\u05ea\u05df +11R \u05dc\u05e2\u05d5\u05de\u05ea +8R \u05d1-1:1."},
          {id:"fewer",title:"\u05e4\u05d7\u05d5\u05ea \u05e2\u05e1\u05e7\u05d0\u05d5\u05ea, \u05d0\u05d9\u05db\u05d5\u05ea\u05d9\u05d5\u05ea \u05d9\u05d5\u05ea\u05e8",text:"\u05d4\u05e2\u05de\u05dc\u05d5\u05ea \u05d0\u05d5\u05db\u05dc\u05d5\u05ea \u05d7\u05dc\u05e7 \u05d2\u05d3\u05d5\u05dc \u05de\u05d4\u05e8\u05d5\u05d5\u05d7. \u05dc\u05d5\u05d5\u05ea\u05e8 \u05e2\u05dc \u05d4\u05e2\u05e1\u05e7\u05d0\u05d5\u05ea \u05d4\u05d1\u05d9\u05e0\u05d5\u05e0\u05d9\u05d5\u05ea.",because:"\u05db\u05d9 \u05d1-30 \u05d4\u05d9\u05de\u05d9\u05dd \u05d4\u05d0\u05d7\u05e8\u05d5\u05e0\u05d9\u05dd \u05d4\u05e2\u05de\u05dc\u05d5\u05ea \u05d4\u05d9\u05d5 $214, 8% \u05de\u05d4\u05e8\u05d5\u05d5\u05d7 \u05dc\u05e4\u05e0\u05d9 \u05e2\u05de\u05dc\u05d5\u05ea ($2,674)."}]}]}};

let C={ver:"game",round:1,gFin:null,gChest:null,gEq:{},gClaimed:{},gCounted:null,gPrevPts:null,wiz:0,more:null,anim:false,view:"join",noam:true,showAll:false,sel:[],risk:"",maxT:"3",maxL:"2",ok:false,oldOpen:false,menu:null,toLink:"",adopted:false};
let SMP=JSON.parse(JSON.stringify(SAMPLES));

/* ---- dashboard ---- */
function coach(v){
  if(!C.noam)return "";
  return `<div class="ch-coach"><div class="av"><img alt="\u05e0\u05d5\u05e2\u05dd" src="avatar/noam-${v.av}.webp"></div><div class="bub"><span>${headline(v.out)}</span></div></div>`;}
function progress(v){
  const st=STAGES[v.stage],segs=[1,2,3].map(n=>{
    const from=(n-1)*30,fill=Math.min(Math.max((v.day-from)/30,0),1),cur=v.stage===n;
    return `<div class="ch-seg${cur?" cur":""}${!cur&&fill>=1?" done":""}"><div class="bar"><i style="width:${fill*100}%"></i>${cur?`<span class="now" style="right:${fill*100}%"></span>`:""}</div><div class="lb"><small>\u05e9\u05dc\u05d1 ${n} \u00b7 ${STAGES[n].days}</small><b>${STAGES[n].title}</b></div></div>`;}).join("");
  const goal=v.day===0?"\u05d4\u05d0\u05ea\u05d2\u05e8 \u05de\u05ea\u05d7\u05d9\u05dc \u05d1\u05d9\u05d5\u05dd \u05d4\u05de\u05e1\u05d7\u05e8 \u05d4\u05d1\u05d0 \u05d1\u05d1\u05d5\u05e8\u05e1\u05d4 \u05d4\u05d0\u05de\u05e8\u05d9\u05e7\u05d0\u05d9\u05ea.":v.day>=90?"\u05e1\u05d9\u05d9\u05de\u05ea 90 \u05d9\u05de\u05d9 \u05de\u05e1\u05d7\u05e8.":`<span class="lbl">\u05d4\u05de\u05d8\u05e8\u05d4 \u05d1\u05e9\u05dc\u05d1 \u05d4\u05d6\u05d4:</span> ${st.goal}. <span class="lbl">\u05d4\u05d9\u05d5\u05dd \u05d4\u05d0\u05d7\u05e8\u05d5\u05df \u05e9\u05dc \u05d4\u05d0\u05ea\u05d2\u05e8:</span> <span class="num">${v.endDay}</span>.`;
  return `<section class="blk ch-prog">
   <div class="ch-ph"><div class="ch-days"><small>\u05d9\u05de\u05d9 \u05de\u05e1\u05d7\u05e8</small><b>${v.day}<em>/90</em></b></div>
    <div class="ch-stage"><small>\u05e9\u05dc\u05d1 ${v.stage} \u05de\u05ea\u05d5\u05da 3</small><b>${st.title}</b><span>${v.reason}</span></div></div>
   <div class="ch-track">${segs}</div>
   <p class="ch-goal">${goal}</p>
   ${C.noam?"":`<div class="ch-head">${headline(v.out)}</div>`}
   <div class="ch-out"><div class="tile"><span class="l">\u05d7\u05e9\u05d1\u05d5\u05e0\u05d5\u05ea \u05e9\u05e0\u05e9\u05e8\u05e4\u05d5</span><span class="v">${v.out.burned}</span></div><div class="tile"><span class="l">\u05de\u05d1\u05d7\u05e0\u05d9\u05dd \u05e9\u05e2\u05d1\u05e8\u05d5</span><span class="v">${v.out.passed}</span></div><div class="tile"><span class="l">\u05de\u05e9\u05d9\u05db\u05d5\u05ea</span><span class="v">${v.out.payouts}</span></div></div>
  </section>`;}
function warns(v){
  let h="";
  if(v.pendingStops.length)h+=`<div class="warnbox">${SV(CI.alert)}<div>\u05dc\u05d4\u05e9\u05dc\u05d9\u05dd \u05e1\u05d8\u05d5\u05e4: ${v.pendingStops.length===1?"\u05e2\u05e1\u05e7\u05d4 \u05d0\u05d7\u05ea \u05de\u05e1\u05e0\u05db\u05e8\u05d5\u05df":`${v.pendingStops.length} \u05e2\u05e1\u05e7\u05d0\u05d5\u05ea \u05de\u05e1\u05e0\u05db\u05e8\u05d5\u05df`} \u05d1\u05dc\u05d9 \u05e1\u05d8\u05d5\u05e4. \u05e2\u05d3\u05d9\u05d9\u05df \u05dc\u05d0 \u05d4\u05e4\u05e8\u05d4: \u05e2\u05e1\u05e7\u05d4 \u05db\u05d6\u05d5 \u05e0\u05e1\u05e4\u05e8\u05ea \u05db\u05d4\u05e4\u05e8\u05d4 \u05e8\u05e7 \u05d0\u05dd \u05d4\u05e1\u05d8\u05d5\u05e4 \u05dc\u05d0 \u05d4\u05d5\u05e9\u05dc\u05dd \u05e2\u05d3 \u05e1\u05d5\u05e3 \u05d9\u05d5\u05dd \u05d4\u05de\u05e1\u05d7\u05e8 \u05d4\u05d1\u05d0 (\u05d4\u05e7\u05e8\u05d5\u05d1: <span class="num">${v.pendingStops[0].deadline}</span>).</div><a class="more" href="#" data-page="log">\u05dc\u05d4\u05e9\u05dc\u05de\u05d4 \u05d1\u05d9\u05d5\u05de\u05df \u05d4\u05e2\u05e1\u05e7\u05d0\u05d5\u05ea${SV(CI.left,"width:14px;height:14px")}</a></div>`;
  if(v.missingHypo>0)h+=`<div class="warnbox">${SV(CI.alert)}<div>\u05d7\u05e1\u05e8 "\u05e2\u05d3 \u05d4\u05e1\u05d8\u05d5\u05e4" \u05d1-${v.missingHypo} \u05de\u05ea\u05d5\u05da ${v.stats.trades} \u05e2\u05e1\u05e7\u05d0\u05d5\u05ea \u05d1\u05d0\u05ea\u05d2\u05e8. \u05d1\u05dc\u05d9 \u05d4\u05e0\u05ea\u05d5\u05df \u05d4\u05d6\u05d4 \u05d0\u05d9\u05df \u05d4\u05de\u05dc\u05e6\u05d4 \u05e2\u05dc \u05d9\u05d7\u05e1 \u05e1\u05d9\u05db\u05d5\u05df-\u05e1\u05d9\u05db\u05d5\u05d9.</div><a class="more" href="#" data-page="log">\u05dc\u05d4\u05e9\u05dc\u05de\u05d4 \u05d1\u05d9\u05d5\u05de\u05df \u05d4\u05e2\u05e1\u05e7\u05d0\u05d5\u05ea${SV(CI.left,"width:14px;height:14px")}</a></div>`;
  return h?`<div class="ch-warns">${h}</div>`:"";}
function numbers(v){
  const s=v.stats;
  const T=[["\u05d0\u05d7\u05d5\u05d6 \u05e2\u05de\u05d9\u05d3\u05d4 \u05d1\u05db\u05dc\u05dc\u05d9\u05dd",pctf(v.compliance),"\u05d9\u05de\u05d9 \u05de\u05e1\u05d7\u05e8 \u05d1\u05dc\u05d9 \u05d4\u05e4\u05e8\u05d4 \u05de\u05ea\u05d5\u05da \u05db\u05dc \u05d9\u05de\u05d9 \u05d4\u05de\u05e1\u05d7\u05e8","shield","sky"],["\u05e2\u05e1\u05e7\u05d0\u05d5\u05ea",String(s.trades),`${s.daysTraded} \u05d9\u05de\u05d9\u05dd \u05e2\u05dd \u05de\u05e1\u05d7\u05e8`,"count","violet"],["\u05d0\u05d7\u05d5\u05d6 \u05d4\u05e6\u05dc\u05d7\u05d4",pctf(s.winRate),`${s.wins} \u05de\u05e0\u05e6\u05d7\u05d5\u05ea \u00b7 ${s.losses} \u05de\u05e4\u05e1\u05d9\u05d3\u05d5\u05ea`,"pct","mint"],["R:R \u05d1\u05e4\u05d5\u05e2\u05dc",s.rr==null?"-":`1:${s.rr.toFixed(2)}`,"\u05e8\u05d5\u05d5\u05d7 \u05de\u05de\u05d5\u05e6\u05e2 \u00f7 \u05d4\u05e4\u05e1\u05d3 \u05de\u05de\u05d5\u05e6\u05e2","scale","sky"],["\u05e8\u05e6\u05e3 \u05d4\u05e4\u05e1\u05d3\u05d9\u05dd \u05de\u05e7\u05e1\u05d9\u05de\u05dc\u05d9",String(s.maxLossStreak),"","streak","orchid"],["\u05ea\u05d5\u05e6\u05d0\u05d4 \u05e0\u05d8\u05d5",usd(s.net),`\u05d0\u05d7\u05e8\u05d9 ${usd(s.commissions)} \u05e2\u05de\u05dc\u05d5\u05ea`,"dollar","mint",s.net>=0?"up":"dn"]];
  return `<section class="ch-kpis">${T.map(t=>`<div class="kpi"><div class="kh"><span class="l">${t[0]}</span>${ci(t[3],t[4])}</div><div class="v ${t[5]||""}">${t[1]}</div>${t[2]?`<span class="s">${t[2]}</span>`:""}</div>`).join("")}</section>`;}
function delta(now,before,better,f){
  if(before==null||now==null)return "";const d=now-before;
  if(Math.abs(d)<1e-9)return `<span class="dlt z">\u05dc\u05dc\u05d0 \u05e9\u05d9\u05e0\u05d5\u05d9</span>`;
  const good=better==="up"?d>0:d<0;return `<span class="dlt ${good?"g":"b"}">${SV(d>0?CI.up:CI.dn)}${f(Math.abs(d))}</span>`;}
function snapshot(p,prev,latest,v){
  const first=p.i*30+1,s=p.stats,q=prev?prev.stats:null;
  const rows=[["\u05d0\u05d7\u05d5\u05d6 \u05d4\u05e6\u05dc\u05d7\u05d4",pctf(s.winRate),delta(s.winRate,q&&q.winRate,"up",x=>Math.round(x*100)+"%")],["R:R \u05d1\u05e4\u05d5\u05e2\u05dc",`1:${s.rr.toFixed(2)}`,delta(s.rr,q&&q.rr,"up",x=>x.toFixed(2))],["\u05e2\u05e1\u05e7\u05d0\u05d5\u05ea \u05dc\u05d9\u05d5\u05dd \u05de\u05e1\u05d7\u05e8",s.tradesPerDay.toFixed(1),delta(s.tradesPerDay,q&&q.tradesPerDay,"down",x=>x.toFixed(1))],["\u05e2\u05de\u05d9\u05d3\u05d4 \u05d1\u05e2\u05e6\u05d9\u05e8\u05d5\u05ea",pctf(p.stop),delta(p.stop,prev&&prev.stop,"up",x=>Math.round(x*100)+"%")],["\u05e2\u05de\u05d9\u05d3\u05d4 \u05d1\u05db\u05dc\u05dc\u05d9\u05dd",pctf(p.comp),delta(p.comp,prev&&prev.comp,"up",x=>Math.round(x*100)+"%")],["\u05ea\u05d5\u05e6\u05d0\u05d4 \u05e0\u05d8\u05d5",usd(s.net),delta(s.net,q&&q.net,"up",x=>"$"+Math.round(x).toLocaleString("en-US"))]];
  const wi=p.wi,hl=latest&&!C.adopted?p.hl:p.hl;
  const table=`<div class="ch-wi"><table class="mini"><thead><tr><th>\u05d9\u05e2\u05d3</th><th>\u05d4\u05d2\u05d9\u05e2\u05d5 \u05dc\u05d9\u05e2\u05d3</th><th>\u05e0\u05d2\u05e2\u05d5 \u05d1\u05e1\u05d8\u05d5\u05e4</th><th>\u05d1\u05dc\u05d9 \u05d4\u05db\u05e8\u05e2\u05d4</th><th>\u05e1\u05da \u05d4\u05db\u05dc</th><th>\u05de\u05d5\u05dc 1:1</th></tr></thead><tbody>${wi.rows.map(r=>`<tr>${[`<td class="c${r[0]===hl?" hl":""}">1:${r[0]}</td>`,`<td class="c${r[0]===hl?" hl":""}">${r[1]}</td>`,`<td class="c${r[0]===hl?" hl":""}">${r[2]}</td>`,`<td class="c${r[0]===hl?" hl":""}" style="color:var(--muted)">${r[3]}</td>`,`<td class="c ${r[4]>0?"up":r[4]<0?"dn":""}${r[0]===hl?" hl":""}"><span class="num">${fmtR(r[4])}</span></td>`,`<td class="c${r[0]===hl?" hl":""}">${r[5]==null?"-":`<span class="num">${fmtR(r[5])}</span>`}</td>`].join("")}</tr>`).join("")}</tbody></table>
   <p class="hint2">\u05dc\u05db\u05dc \u05d9\u05e2\u05d3: \u05e2\u05e1\u05e7\u05d0\u05d5\u05ea \u05e9\u05d4\u05d2\u05d9\u05e2\u05d5 \u05dc\u05d9\u05e2\u05d3 \u00d7 \u05d4\u05d9\u05e2\u05d3, \u05e4\u05d7\u05d5\u05ea \u05e2\u05e1\u05e7\u05d0\u05d5\u05ea \u05e9\u05e0\u05d2\u05e2\u05d5 \u05d1\u05e1\u05d8\u05d5\u05e4 \u05d4\u05de\u05e7\u05d5\u05e8\u05d9 \u05e7\u05d5\u05d3\u05dd (\u200e-1R \u05db\u05dc \u05d0\u05d7\u05ea). \u05e2\u05e1\u05e7\u05d4 \u05e9\u05d7\u05dc\u05d5\u05df \u05d4\u05de\u05e2\u05e7\u05d1 \u05e9\u05dc\u05d4 \u05e0\u05d2\u05de\u05e8 \u05d1\u05dc\u05d9 \u05d9\u05e2\u05d3 \u05d5\u05d1\u05dc\u05d9 \u05e1\u05d8\u05d5\u05e4 \u05e0\u05e1\u05e4\u05e8\u05ea 0. \u05db\u05dc \u05d4\u05e2\u05e1\u05e7\u05d0\u05d5\u05ea \u05e2\u05dd \u05e0\u05ea\u05d5\u05df "\u05e2\u05d3 \u05d4\u05e1\u05d8\u05d5\u05e4" \u05e0\u05db\u05e0\u05e1\u05d5\u05ea, \u05de\u05e0\u05e6\u05d7\u05d5\u05ea \u05d5\u05de\u05e4\u05e1\u05d9\u05d3\u05d5\u05ea (${wi.complete} \u05de\u05ea\u05d5\u05da ${wi.total}). \u05d1\u05d3\u05d9\u05e7\u05d4 \u05ea\u05d9\u05d0\u05d5\u05e8\u05d8\u05d9\u05ea, \u05dc\u05d0 \u05e8\u05d5\u05d5\u05d7 \u05e9\u05d4\u05d5\u05e9\u05d2 \u05d1\u05e4\u05d5\u05e2\u05dc.</p></div>`;
  const recs=p.recs.length?`<div class="ch-recs${C.ver==="game"?" g-recs":""}">${p.recs.map((r,i)=>`<div class="ch-rec${r.id==="try_target"&&latest?" on":""}">${C.ver==="game"?`<img class="g-recimg" alt="" src="${GI(GPW[r.id]||"power-shield")}">`:""}<div class="rh"><span class="n">${i+1}</span><b>${r.title}</b></div><p>${nums(r.text)}</p><small>${nums(r.because)}</small>${r.id==="try_target"&&latest&&!C.adopted?`<button class="btn3" data-chadopt="${r.target}">\u05d0\u05e0\u05d9 \u05e8\u05d5\u05e6\u05d4 \u05dc\u05e0\u05e1\u05d5\u05ea \u05d9\u05e2\u05d3 1:${r.target} \u05d1-30 \u05d4\u05d9\u05de\u05d9\u05dd \u05d4\u05d1\u05d0\u05d9\u05dd</button>`:""}</div>`).join("")}</div>`:`<p class="ch-small" style="margin:0">\u05d0\u05d9\u05df \u05db\u05e8\u05d2\u05e2 \u05de\u05e9\u05d4\u05d5 \u05e9\u05d1\u05d5\u05dc\u05d8 \u05d1\u05e0\u05ea\u05d5\u05e0\u05d9\u05dd. \u05de\u05de\u05e9\u05d9\u05db\u05d9\u05dd \u05dc\u05e2\u05d1\u05d5\u05d3 \u05dc\u05e4\u05d9 \u05d4\u05db\u05dc\u05dc\u05d9\u05dd.</p>`;
  const calc=latest?`<div class="ch-calc"><div>\u05d4\u05de\u05e1\u05e4\u05e8\u05d9\u05dd \u05e9\u05dc\u05da \u05dc\u05de\u05d7\u05e9\u05d1\u05d5\u05df: \u05d0\u05d7\u05d5\u05d6 \u05d4\u05e6\u05dc\u05d7\u05d4 <b class="num">${pctf(s.winRate)}</b>, R:R <b class="num">1:${s.rr.toFixed(2)}</b>, \u05e2\u05e1\u05e7\u05d0\u05d5\u05ea \u05d1\u05d9\u05d5\u05dd <b class="num">${s.tradesPerDay.toFixed(1)}</b>, \u05e1\u05d9\u05db\u05d5\u05df <b class="num">$${RULES.riskPerTrade}</b></div><a class="btn2" href="https://antartrade.co.il/calculators/payout-odds" target="_blank" rel="noopener">\u05d1\u05d3\u05d5\u05e7 \u05d0\u05ea \u05d4\u05e1\u05d9\u05db\u05d5\u05d9 \u05e9\u05dc\u05da \u05dc\u05de\u05e9\u05d9\u05db\u05d4${SV(CI.ext,"width:16px;height:16px")}</a></div>`:"";
  const inner=`<div class="tiles">${rows.map(r=>`<div class="tile"><span class="l">${r[0]}</span><span class="v">${r[2]}<span>${r[1]}</span></span></div>`).join("")}</div>
   <div class="ch-sec"><div class="ch-facts"><span>\u05d4\u05d8\u05e2\u05d5\u05ea \u05e9\u05d7\u05d5\u05d6\u05e8\u05ea \u05d4\u05db\u05d9 \u05d4\u05e8\u05d1\u05d4: <b>${p.top?`${p.top[0]} (<span class="num">${p.top[1]}</span>)`:"\u05d0\u05d9\u05df \u05d4\u05e4\u05e8\u05d5\u05ea"}</b></span><span>\u05d7\u05e9\u05d1\u05d5\u05e0\u05d5\u05ea \u05e9\u05e0\u05e9\u05e8\u05e4\u05d5: <b>${p.out.burned}</b></span><span>\u05de\u05d1\u05d7\u05e0\u05d9\u05dd \u05e9\u05e2\u05d1\u05e8\u05d5: <b>${p.out.passed}</b></span><span>\u05de\u05e9\u05d9\u05db\u05d5\u05ea: <b>${p.out.payouts}</b></span></div></div>
   <div class="ch-sec"><h3>\u05de\u05d4 \u05d0\u05dd: \u05d9\u05e2\u05d3 1:X</h3>${wi.missing>0?`<div class="warnbox">${SV(CI.alert)}<div style="font-size:14px">\u05d7\u05e1\u05e8 "\u05e2\u05d3 \u05d4\u05e1\u05d8\u05d5\u05e4" \u05d1-${wi.missing} \u05de\u05ea\u05d5\u05da ${wi.total} \u05e2\u05e1\u05e7\u05d0\u05d5\u05ea. \u05d0\u05e4\u05e9\u05e8 \u05dc\u05d4\u05e9\u05dc\u05d9\u05dd \u05d1\u05e2\u05e8\u05d9\u05db\u05ea \u05d4\u05e2\u05e1\u05e7\u05d4 \u05d1\u05d9\u05d5\u05de\u05df \u05d4\u05e2\u05e1\u05e7\u05d0\u05d5\u05ea.</div></div>`:""}${wi.complete>0?table:""}</div>
   <div class="ch-sec"><h3>\u05e2\u05dc \u05de\u05d4 \u05dc\u05d4\u05ea\u05de\u05e7\u05d3 \u05d1-30 \u05d9\u05de\u05d9 \u05d4\u05de\u05e1\u05d7\u05e8 \u05d4\u05d1\u05d0\u05d9\u05dd</h3>${recs}</div>${calc}`;
  const title=`\u05ea\u05de\u05d5\u05e0\u05ea \u05de\u05e6\u05d1: \u05d9\u05de\u05d9\u05dd ${first}-${first+29}`,sub=`${p.trades} \u05e2\u05e1\u05e7\u05d0\u05d5\u05ea${prev?" \u00b7 \u05d4\u05e9\u05d5\u05d5\u05d0\u05d4 \u05dc-30 \u05d9\u05de\u05d9 \u05d4\u05de\u05e1\u05d7\u05e8 \u05d4\u05e7\u05d5\u05d3\u05de\u05d9\u05dd":""}`;
  if(latest)return `<section class="blk ch-snap"><div class="bh">${cttl(title,"compass","sky")}<span class="hint">${sub}</span></div>${inner}</section>`;
  return `<div class="ch-old ch-snap"><div class="exp${C.oldOpen?" open":""}"><button data-chold><span class="ttl">${ci("compass","sky")}<span class="tx"><b style="font-size:20px">${title}</b><small>${sub}</small></span></span>${SV(CI.chev,"width:18px;height:18px")}</button><div class="body"${C.oldOpen?"":" hidden"}>${inner}</div></div></div>`;}
function snapshots(v){
  if(!v.periods.length)return `<section class="blk"><div class="bh" style="margin-bottom:10px">${cttl("\u05ea\u05de\u05d5\u05e0\u05ea \u05de\u05e6\u05d1","compass","sky")}</div><p class="ch-small" style="margin:0">\u05ea\u05de\u05d5\u05e0\u05ea \u05d4\u05de\u05e6\u05d1 \u05d4\u05e8\u05d0\u05e9\u05d5\u05e0\u05d4 \u05d5\u05d4\u05d4\u05db\u05d5\u05d5\u05e0\u05d4 \u05dc-30 \u05d4\u05d9\u05de\u05d9\u05dd \u05d4\u05d1\u05d0\u05d9\u05dd \u05d9\u05d5\u05e4\u05d9\u05e2\u05d5 \u05d0\u05d7\u05e8\u05d9 30 \u05d9\u05de\u05d9 \u05de\u05e1\u05d7\u05e8 (\u05e2\u05d5\u05d3 ${v.daysToNext}).</p></section>`;
  const ps=[...v.periods].reverse();
  return ps.map((p,i)=>snapshot(p,v.periods[p.i-1]||null,i===0,v)).join("");}
function violations(v){
  const days=v.violations,shown=C.showAll?days:days.slice(0,7),multi=v.links.length>1;
  const body=days.length?`<div class="ch-vdays">${shown.map(([d,vs])=>`<div class="ch-vday"><b>${d}</b><ul>${vs.map(x=>`<li><i></i><div><span>${VIOL[x[0]]}</span><small>${nums(x[1])}${multi?` \u00b7 <span class="en" style="font-weight:400;white-space:nowrap">${x[2]}</span>`:""}</small></div></li>`).join("")}</ul></div>`).join("")}</div>${days.length>shown.length?`<button class="btn3" style="color:var(--sky);margin-top:8px;padding:0" data-chall>\u05d4\u05e6\u05d2 \u05d0\u05ea \u05db\u05dc ${days.length} \u05d4\u05d9\u05de\u05d9\u05dd</button>`:""}`:`<p class="ch-clean">${SV(CI.check)}\u05d0\u05d9\u05df \u05d4\u05e4\u05e8\u05d5\u05ea. \u05db\u05dc \u05d4\u05db\u05d1\u05d5\u05d3.</p>`;
  return `<section class="blk"><div class="bh">${cttl("\u05d4\u05e4\u05e8\u05d5\u05ea","alert","sun")}<span class="hint">\u05de\u05d4 \u05e0\u05e9\u05d1\u05e8 \u05d5\u05de\u05ea\u05d9, \u05dc\u05e4\u05d9 \u05d4\u05e2\u05e1\u05e7\u05d0\u05d5\u05ea \u05d1\u05d9\u05d5\u05de\u05df.</span></div>${body}</section>`;}
function accounts(v){
  const rows=v.links.map(l=>{
    const acts=[l.status!=="failed"&&["failed","\u05d4\u05d7\u05e9\u05d1\u05d5\u05df \u05e0\u05e9\u05e8\u05e3"],l.status!=="passed"&&l.phase==="evaluation"&&["passed","\u05e2\u05d1\u05e8\u05ea\u05d9 \u05d0\u05ea \u05d4\u05de\u05d1\u05d7\u05df"],l.status!=="closed"&&["closed","\u05e1\u05d2\u05e8\u05ea\u05d9 \u05d0\u05ea \u05d4\u05d7\u05e9\u05d1\u05d5\u05df"],l.status!=="active"&&["active","\u05d4\u05d7\u05e9\u05d1\u05d5\u05df \u05e4\u05e2\u05d9\u05dc"]].filter(Boolean);
    return `<div class="ch-acc"><div class="nm"><b>${l.name}</b><small>${PHASE[l.phase]}${l.ended?` \u00b7 \u05e2\u05d3 <span class="num">${l.ended}</span>`:""}</small></div><span class="ch-st ${l.status}">${LINK_STATUS[l.status]}</span>
     <div class="upd"><button class="pick" data-chmenu="${l.id}">\u05e2\u05d3\u05db\u05df${SV(CI.chev,"width:14px;height:14px")}</button><div class="ch-menu"${C.menu===l.id?"":" hidden"}>${acts.map(a=>`<button data-chset="${l.id}:${a[0]}">${a[1]}</button>`).join("")}</div></div>
     ${l.sug?`<div class="ch-sug warnbox">${SV(CI.alert)}<span>${l.sug.status==="failed"?`\u05dc\u05e4\u05d9 \u05d4\u05e2\u05e1\u05e7\u05d0\u05d5\u05ea, \u05d4\u05d7\u05e9\u05d1\u05d5\u05df \u05d4\u05d2\u05d9\u05e2 \u05dc\u05e1\u05d8\u05d5\u05e4 \u05d1-<span class="num">${l.sug.day}</span>.`:`\u05dc\u05e4\u05d9 \u05d4\u05e2\u05e1\u05e7\u05d0\u05d5\u05ea, \u05d4\u05d2\u05e2\u05ea \u05dc\u05d9\u05e2\u05d3 \u05d4\u05de\u05d1\u05d7\u05df \u05d1-<span class="num">${l.sug.day}</span>.`}</span><button class="btn3" data-chsug="${l.id}">${l.sug.status==="failed"?"\u05e0\u05db\u05d5\u05df, \u05d4\u05d7\u05e9\u05d1\u05d5\u05df \u05e0\u05e9\u05e8\u05e3":"\u05e0\u05db\u05d5\u05df, \u05e2\u05d1\u05e8\u05ea\u05d9"}</button></div>`:""}</div>`;}).join("");
  const add=`<div class="ch-addrow">${v.unlinked.length?`<div class="fld"><select class="inp" id="chLink"><option value="">\u05d4\u05d5\u05e1\u05e3 \u05d7\u05e9\u05d1\u05d5\u05df \u05e7\u05d9\u05d9\u05dd</option>${v.unlinked.map(n=>`<option>${n}</option>`).join("")}</select></div><button class="btn3" data-chlink>\u05d4\u05d5\u05e1\u05e3</button>`:""}<button class="btn3" data-chnew>${SV(CI.plus,"width:16px;height:16px")}<span style="margin-inline-start:6px">\u05e4\u05ea\u05d7 \u05d7\u05e9\u05d1\u05d5\u05df \u05d7\u05d3\u05e9</span></button></div>`;
  return `<section class="blk"><div class="bh">${cttl("\u05d4\u05d7\u05e9\u05d1\u05d5\u05e0\u05d5\u05ea \u05d1\u05d0\u05ea\u05d2\u05e8","accs","violet")}<span class="hint">\u05d7\u05e9\u05d1\u05d5\u05df \u05e9\u05e0\u05e9\u05e8\u05e3 \u05e0\u05e9\u05d0\u05e8 \u05d1\u05d4\u05d9\u05e1\u05d8\u05d5\u05e8\u05d9\u05d4. \u05de\u05d5\u05e1\u05d9\u05e4\u05d9\u05dd \u05d7\u05e9\u05d1\u05d5\u05df \u05d7\u05d3\u05e9 \u05d5\u05de\u05de\u05e9\u05d9\u05db\u05d9\u05dd \u05d1\u05d0\u05d5\u05ea\u05d5 \u05d0\u05ea\u05d2\u05e8.</span></div><div class="ch-accs">${rows}</div>${add}</section>`;}
function rulesBlk(v){
  const lines=RULE_LINES({...RULES,risk:RULES.riskPerTrade});if(C.adopted)lines.push(`\u05d9\u05e2\u05d3 1:1.5 \u05de-05.02.2027 (\u05de\u05d4\u05d4\u05db\u05d5\u05d5\u05e0\u05d4)`);
  return `<section class="blk"><div class="bh">${cttl("\u05d4\u05db\u05dc\u05dc\u05d9\u05dd \u05e9\u05dc\u05da","shield","sky")}</div><ul class="ch-rules">${lines.filter(l=>l!==MANUAL).map(l=>`<li>${SV(CI.check)}<span>${l}</span></li>`).join("")}</ul><div class="promo ch-key">${ci("pen","violet")}<div class="tx"><p>${MANUAL}</p></div></div></section>`;}
function dashView(){
  const v=SMP[C.view];
  return coach(v)+progress(v)+warns(v)+numbers(v)+snapshots(v)+violations(v)+accounts(v)+rulesBlk(v);}

/* ---- joining ---- */
function joinView(){
  const accs=ACCOUNTS.filter(a=>a.state!=="blown");
  const risk=Number(C.risk),sel=accs.filter(a=>C.sel.includes(a.id));
  const lims=sel.map(a=>{const t=a.track&&TRACKS[a.track];if(!t)return null;return {name:a.name,dd:t.stop,dll:a.phase==="funded"?t.daily:t.daily};}).filter(Boolean);
  const canJoin=C.sel.length>0&&risk>0&&C.ok;
  const stage=n=>`<div class="ch-stg"><span class="n">${n}</span><small>\u05e9\u05dc\u05d1 ${n} \u00b7 ${STAGES[n].days} \u05d1\u05e2\u05e8\u05da</small><b>${STAGES[n].title}</b><span>${STAGES[n].goal}</span></div>`;
  /* equity curve: day 1 on the right, day 90 on the left; stage 1 ends at x 667, stage 2 at x 333, the payout line on top */
  const EQ=[[1000,150],[960,146],[930,138],[905,143],[875,128],[845,134],[815,120],[790,124],[760,112],[730,118],[700,104],[667,100],[640,92],[612,98],[585,84],[555,90],[528,74],[500,80],[470,66],[440,72],[410,58],[380,62],[350,50],[333,48],[305,42],[278,47],[250,36],[222,40],[194,30],[166,33],[138,24],[110,27],[82,18],[54,20],[28,12],[12,10]];
  const eqD="M"+EQ.map(p=>p.join(",")).join(" L");
  const eqDot=(x,y,n)=>`<circle class="dot" cx="${x}" cy="${y}" r="16"/><text class="dt" x="${x}" y="${y+1}">${n}</text>`;
  const path=`<div class="ch-eq${C.anim?"":" anim"}"><svg viewBox="0 0 1000 175" aria-hidden="true"><defs><linearGradient id="chEqL" x1="1" x2="0"><stop offset="0" stop-color="#7DC6FF"/><stop offset=".6" stop-color="#4F6BFF"/><stop offset="1" stop-color="#f7c65a"/></linearGradient><linearGradient id="chEqA" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4F6BFF" stop-opacity=".22"/><stop offset="1" stop-color="#4F6BFF" stop-opacity="0"/></linearGradient></defs><rect class="zone" x="333" y="0" width="334" height="170" rx="10"/><line class="pay" x1="0" y1="10" x2="1000" y2="10"/><text class="pt" x="40" y="-6">\u05de\u05e9\u05d9\u05db\u05d4</text><path class="ar" d="${eqD} L12,170 L1000,170 Z"/><path class="ln" d="${eqD}"/>${eqDot(667,100,1)}${eqDot(333,48,2)}<circle class="goal" cx="12" cy="10" r="13"/></svg><div class="ch-eqst">${[1,2,3].map(n=>`<div class="ch-node"><small>\u05e9\u05dc\u05d1 ${n} \u00b7 ${STAGES[n].days} \u05d1\u05e2\u05e8\u05da</small><b>${STAGES[n].title}</b><span class="g">${STAGES[n].goal}</span></div>`).join("")}</div></div>`;
  const done=[C.sel.length>0,risk>0,C.ok],ndone=done.filter(Boolean).length;
  const CHK='<svg viewBox="0 0 24 24"><path d="M6.5 12.5l3.5 3.5 7.5-8"/></svg>';
  const num=(i)=>`<span class="n${done[i]?" ok":""}">${done[i]?CHK:i+1}</span>`;
  const STEP_T=["\u05d4\u05d7\u05e9\u05d1\u05d5\u05e0\u05d5\u05ea \u05e9\u05dc\u05da \u05d1\u05d0\u05ea\u05d2\u05e8","\u05e1\u05d9\u05db\u05d5\u05df \u05dc\u05e2\u05e1\u05e7\u05d4","\u05d4\u05db\u05dc\u05dc\u05d9\u05dd"];
  const strip=`<div class="ch-mis"><div class="ch-mis-h"><b>\u05d4\u05d4\u05e6\u05d8\u05e8\u05e4\u05d5\u05ea</b><span class="num">${ndone}/3</span></div><div class="ch-mis-r">${STEP_T.map((t,i)=>`<a href="#ch-step${i+1}" class="${done[i]?"ok":""}" data-chjump="${i+1}">${num(i)}<span>${t}</span></a>`).join("")}</div><div class="ch-mis-bar"><i style="width:${ndone/3*100}%"></i></div></div>`;
  const disc=`<div class="ch-disc">${SV(CI.tag)}<span>${DISCOUNT}</span><a href="https://antartrade.co.il/promotions" target="_blank" rel="noopener">\u05dc\u05d3\u05e3 \u05d4\u05d4\u05e0\u05d7\u05d5\u05ea${SV(CI.ext,"width:14px;height:14px")}</a></div>`;
  return `<div class="ch-join">
  ${C.noam?`<div class="ch-coach ch-invite"><div class="av"><img alt="\u05e0\u05d5\u05e2\u05dd" src="avatar/noam-flex.webp"></div><div class="bub"><span>\u05dc\u05e9\u05e8\u05d5\u05d3, \u05dc\u05e2\u05d1\u05d5\u05e8 \u05de\u05d1\u05d7\u05df \u05de\u05d9\u05de\u05d5\u05df \u05d5\u05dc\u05d4\u05d2\u05d9\u05e2 \u05dc\u05de\u05e9\u05d9\u05db\u05d4 \u05e8\u05d0\u05e9\u05d5\u05e0\u05d4. \u05db\u05dc \u05d0\u05d7\u05d3 \u05de\u05d5\u05dc \u05e2\u05e6\u05de\u05d5</span></div></div>`:""}
  <section class="blk ch-hero"><div class="bh">${cttl("\u05de\u05d4 \u05d6\u05d4 \u05d4\u05d0\u05ea\u05d2\u05e8","flag","sun")}</div>
   ${path}
   <p class="ch-desc">90 \u05d9\u05de\u05d9 \u05de\u05e1\u05d7\u05e8 (\u05db-18 \u05e9\u05d1\u05d5\u05e2\u05d5\u05ea) \u05d1\u05ea\u05d5\u05da \u05d4\u05d9\u05d5\u05de\u05df. \u05d4\u05de\u05d8\u05e8\u05d4: \u05dc\u05e9\u05e8\u05d5\u05d3, \u05dc\u05e2\u05d1\u05d5\u05e8 \u05de\u05d1\u05d7\u05df \u05de\u05d9\u05de\u05d5\u05df \u05d5\u05dc\u05d4\u05d2\u05d9\u05e2 \u05dc\u05de\u05e9\u05d9\u05db\u05d4 \u05e8\u05d0\u05e9\u05d5\u05e0\u05d4. \u05d4\u05db\u05dc \u05de\u05d7\u05d5\u05e9\u05d1 \u05de\u05d4\u05e2\u05e1\u05e7\u05d0\u05d5\u05ea \u05d1\u05d9\u05d5\u05de\u05df. \u05d0\u05d9\u05df \u05d8\u05d1\u05dc\u05ea \u05de\u05d5\u05d1\u05d9\u05dc\u05d9\u05dd: \u05db\u05dc \u05d0\u05d7\u05d3 \u05de\u05d5\u05dc \u05e2\u05e6\u05de\u05d5.</p>
   <div class="promo ch-key">${ci("pen","violet")}<div class="tx"><p>${MANUAL}</p></div></div>
   <p class="ch-small">\u05d4\u05e9\u05dc\u05d1 \u05e0\u05e7\u05d1\u05e2 \u05dc\u05e4\u05d9 \u05de\u05e6\u05d1 \u05d4\u05d7\u05e9\u05d1\u05d5\u05df: \u05de\u05d9 \u05e9\u05db\u05d1\u05e8 \u05de\u05d7\u05d6\u05d9\u05e7 \u05d7\u05e9\u05d1\u05d5\u05df \u05de\u05de\u05d5\u05de\u05df \u05de\u05ea\u05d7\u05d9\u05dc \u05d9\u05e9\u05e8 \u05d1\u05e9\u05dc\u05d1 3. \u05d9\u05d5\u05dd \u05d1\u05dc\u05d9 \u05e2\u05e1\u05e7\u05d4 \u05de\u05d5\u05ea\u05e8 \u05d5\u05e0\u05d7\u05e9\u05d1 \u05d4\u05d7\u05dc\u05d8\u05d4 \u05de\u05de\u05d5\u05e9\u05de\u05e2\u05ea. \u05d7\u05e9\u05d1\u05d5\u05df \u05e9\u05e0\u05e9\u05e8\u05e3 \u05dc\u05d0 \u05de\u05d5\u05d7\u05e7 \u05db\u05dc\u05d5\u05dd: \u05de\u05d5\u05e1\u05d9\u05e4\u05d9\u05dd \u05d7\u05e9\u05d1\u05d5\u05df \u05d7\u05d3\u05e9 \u05d5\u05de\u05de\u05e9\u05d9\u05db\u05d9\u05dd \u05d1\u05d0\u05d5\u05ea\u05d5 \u05d0\u05ea\u05d2\u05e8.</p>
  </section>
  ${strip}<section class="blk ch-step" id="ch-step1"><div class="bh"><div class="sttl">${num(0)}<div><h2>\u05d4\u05d7\u05e9\u05d1\u05d5\u05e0\u05d5\u05ea \u05e9\u05dc\u05da \u05d1\u05d0\u05ea\u05d2\u05e8</h2><p>\u05d0\u05e4\u05e9\u05e8 \u05dc\u05d1\u05d7\u05d5\u05e8 \u05db\u05de\u05d4 \u05d7\u05e9\u05d1\u05d5\u05e0\u05d5\u05ea, \u05d5\u05dc\u05d4\u05d5\u05e1\u05d9\u05e3 \u05e2\u05d5\u05d3 \u05d1\u05d4\u05de\u05e9\u05da.</p></div></div></div>
   <div class="ch-pickacc">${accs.map(a=>{const t=a.track&&TRACKS[a.track];const on=C.sel.includes(a.id);return `<label class="${on?"on":""}"><input type="checkbox" class="ck" data-chsel="${a.id}" ${on?"checked":""} aria-label="${a.name}"><span class="nm"><b>${a.name}</b><small>${t?t.label:a.firm}</small></span><span class="tag">${a.phase==="funded"?"\u05de\u05de\u05d5\u05de\u05df":"\u05de\u05d1\u05d7\u05df"}</span></label>`;}).join("")}</div>
   <div class="ch-row"><button class="btn3 ghostb" data-chnew>${SV(CI.plus,"width:16px;height:16px")}<span style="margin-inline-start:6px">\u05e4\u05ea\u05d7 \u05d7\u05e9\u05d1\u05d5\u05df \u05d7\u05d3\u05e9</span></button></div>${disc}
  </section>
  <section class="blk ch-step" id="ch-step2"><div class="bh"><div class="sttl">${num(1)}<div><h2>\u05e1\u05d9\u05db\u05d5\u05df \u05dc\u05e2\u05e1\u05e7\u05d4</h2><p>\u05db\u05de\u05d4 \u05d3\u05d5\u05dc\u05e8 \u05d0\u05ea\u05d4 \u05de\u05e1\u05db\u05df \u05d1\u05db\u05dc \u05e2\u05e1\u05e7\u05d4 (\u05de\u05d4\u05db\u05e0\u05d9\u05e1\u05d4 \u05e2\u05d3 \u05d4\u05e1\u05d8\u05d5\u05e4). \u05d0\u05d9\u05df \u05e1\u05db\u05d5\u05dd \u05d0\u05d7\u05d9\u05d3: \u05e7\u05d1\u05e2 \u05dc\u05e4\u05d9 \u05d4\u05d7\u05e9\u05d1\u05d5\u05df.</p></div></div></div>
   <div class="fld ch-riskf"><label for="chRisk">\u05e1\u05d9\u05db\u05d5\u05df \u05dc\u05e2\u05e1\u05e7\u05d4 ($)</label><input class="inp" id="chRisk" type="number" inputmode="decimal" min="1" dir="ltr" value="${C.risk}" placeholder="250"></div>
   ${lims.length?`<ul class="ch-lims">${lims.map(l=>`<li><b class="en">${l.name}</b>: \u05e1\u05d8\u05d5\u05e4 \u05db\u05dc\u05dc\u05d9 <b class="num">$${l.dd.toLocaleString("en-US")}</b>${l.dll?`, \u05e1\u05d8\u05d5\u05e4 \u05d9\u05d5\u05de\u05d9 <b class="num">$${l.dll.toLocaleString("en-US")}</b>`:""}${risk>0&&l.dll?` \u00b7 ${Math.floor(l.dll/risk)} \u05d4\u05e4\u05e1\u05d3\u05d9\u05dd \u05de\u05dc\u05d0\u05d9\u05dd \u05e2\u05d3 \u05d4\u05e1\u05d8\u05d5\u05e4 \u05d4\u05d9\u05d5\u05de\u05d9`:""}</li>`).join("")}</ul>`:""}
   <div class="ch-row"><a class="btn3 ghostb ch-ext" href="https://antartrade.co.il/calculators/payout-odds" target="_blank" rel="noopener">${SV(CI.calc,"width:16px;height:16px")}\u05d1\u05d3\u05d5\u05e7 \u05d0\u05ea \u05d4\u05e1\u05d9\u05db\u05d5\u05d9 \u05e9\u05dc\u05da \u05dc\u05de\u05e9\u05d9\u05db\u05d4${SV(CI.ext,"width:14px;height:14px")}</a></div>
  </section>
  <section class="blk ch-step" id="ch-step3"><div class="bh"><div class="sttl">${num(2)}<div><h2>\u05d4\u05db\u05dc\u05dc\u05d9\u05dd</h2><p>\u05d0\u05dc\u05d4 \u05db\u05dc\u05dc\u05d9 \u05d1\u05e8\u05d9\u05e8\u05ea \u05d4\u05de\u05d7\u05d3\u05dc. \u05d0\u05e4\u05e9\u05e8 \u05dc\u05d4\u05d7\u05de\u05d9\u05e8, \u05dc\u05d0 \u05dc\u05d4\u05e7\u05dc.</p></div></div></div>
   <ul class="ch-rules">${RULE_LINES({maxDailyTrades:+C.maxT,maxConsecutiveLosses:+C.maxL,minRr:1,risk:risk||null}).filter(l=>l!==MANUAL).map(l=>`<li>${SV(CI.check)}<span>${l}</span></li>`).join("")}</ul><div class="promo ch-key">${ci("pen","violet")}<div class="tx"><p>${MANUAL}</p></div></div>
   <div class="ch-sel2"><div class="fld"><label>\u05e2\u05e1\u05e7\u05d0\u05d5\u05ea \u05d1\u05d9\u05d5\u05dd</label><select class="inp" id="chMaxT">${["3","2","1"].map(x=>`<option value="${x}"${x===C.maxT?" selected":""}>\u05e2\u05d3 ${x}</option>`).join("")}</select></div><div class="fld"><label>\u05e2\u05e6\u05d9\u05e8\u05d4 \u05d0\u05d7\u05e8\u05d9 \u05d4\u05e4\u05e1\u05d3\u05d9\u05dd \u05e8\u05e6\u05d5\u05e4\u05d9\u05dd</label><select class="inp" id="chMaxL">${["2","1"].map(x=>`<option value="${x}"${x===C.maxL?" selected":""}>${x}</option>`).join("")}</select></div></div>
   <p class="hint2" style="margin-top:12px">\u05d9\u05d7\u05e1 \u05e1\u05d9\u05db\u05d5\u05df-\u05e1\u05d9\u05db\u05d5\u05d9 \u05e7\u05d1\u05d5\u05e2 1:1 \u05dc\u05db\u05d5\u05dc\u05dd \u05d1\u05d4\u05ea\u05d7\u05dc\u05d4. \u05d0\u05d7\u05e8\u05d9 30 \u05d9\u05de\u05d9 \u05de\u05e1\u05d7\u05e8, \u05d0\u05dd \u05d4\u05e0\u05ea\u05d5\u05e0\u05d9\u05dd \u05e9\u05dc\u05da \u05de\u05e8\u05d0\u05d9\u05dd \u05e9\u05d9\u05e2\u05d3 \u05d2\u05d1\u05d5\u05d4 \u05d9\u05d5\u05ea\u05e8 \u05e2\u05d3\u05d9\u05e3, \u05d4\u05d0\u05ea\u05d2\u05e8 \u05d9\u05e6\u05d9\u05e2 \u05d0\u05d5\u05ea\u05d5.</p>
   <label class="ch-accept"><input type="checkbox" class="ck" id="chOk" ${C.ok?"checked":""} aria-label="\u05d0\u05e0\u05d9 \u05de\u05d0\u05e9\u05e8 \u05d0\u05ea \u05d4\u05db\u05dc\u05dc\u05d9\u05dd">\u05e7\u05e8\u05d0\u05ea\u05d9 \u05d5\u05d0\u05e0\u05d9 \u05de\u05ea\u05d7\u05d9\u05d9\u05d1 \u05dc\u05db\u05dc\u05dc\u05d9 \u05d4\u05d0\u05ea\u05d2\u05e8</label>
   <div class="ch-go${canJoin?" ready":""}"><button class="btn2" data-chjoin ${canJoin?"":"disabled"}>\u05d4\u05e6\u05d8\u05e8\u05e3 \u05dc\u05d0\u05ea\u05d2\u05e8. \u05d4\u05d9\u05d5\u05dd \u05d4\u05d5\u05d0 \u05d9\u05d5\u05dd 1</button>${canJoin?"":`<small>${C.sel.length?"":"\u05d1\u05d7\u05e8 \u05dc\u05e4\u05d7\u05d5\u05ea \u05d7\u05e9\u05d1\u05d5\u05df \u05d0\u05d7\u05d3. "}${risk>0?"":"\u05d4\u05d2\u05d3\u05e8 \u05e1\u05d9\u05db\u05d5\u05df \u05dc\u05e2\u05e1\u05e7\u05d4. "}${C.ok?"":"\u05d0\u05e9\u05e8 \u05d0\u05ea \u05d4\u05db\u05dc\u05dc\u05d9\u05dd."}</small>`}</div>
  </section></div>`;}

/* ---- journey version (05.11): the goal first, then where you are and what to do today; numbers fold away at the bottom ---- */
const JI={lock:'<rect x="5" y="11" width="14" height="10" rx="3"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',ok:'<path d="M6.5 12.5l3.5 3.5 7.5-8"/>',x:'<path d="M6 6l12 12M18 6L6 18"/>'};
/* 90 days, one square each: clean, violation, no trading, today, still ahead. Built from the challenge's own counts
   (days traded, days with violations); in the real journal each square comes from that day's trades */
function dayStates(v){
  const n=v.day,past=Math.max(n-1,0),S=Array(90).fill("next");if(!n)return S;
  for(let d=0;d<past;d++)S[d]="clean";
  const put=(k,st,shift)=>{for(let i=0;i<k;i++){let d=Math.min(past-1,Math.round((i+shift)*past/(k+.6)));while(d>=0&&S[d]!=="clean")d--;if(d>=0)S[d]=st;}};
  put(Math.min(v.violations.length,past),"bad",.35);put(Math.max(past-v.stats.daysTraded,0),"off",.8);
  S[n-1]="today";return S;}
function dayGrid(v){
  const S=dayStates(v),L={clean:"\u05d9\u05d5\u05dd \u05e0\u05e7\u05d9",bad:"\u05d9\u05d5\u05dd \u05e2\u05dd \u05d4\u05e4\u05e8\u05d4",off:"\u05d9\u05d5\u05dd \u05d1\u05dc\u05d9 \u05de\u05e1\u05d7\u05e8",today:"\u05d4\u05d9\u05d5\u05dd",next:"\u05e2\u05d5\u05d3 \u05dc\u05d0 \u05d4\u05d2\u05d9\u05e2"};
  let streak=0;for(let d=v.day-2;d>=0&&S[d]!=="bad";d--)streak++;
  const grp=g=>`<div class="chj-gw"><div class="chj-grp">${S.slice(g*30,g*30+30).map((st,i)=>`<i class="d-${st}" title="\u05d9\u05d5\u05dd ${g*30+i+1} \u00b7 ${L[st]}"></i>`).join("")}</div><small>\u05e9\u05dc\u05d1 ${g+1} \u00b7 ${STAGES[g+1].title}</small></div>`;
  const clean=S.filter(x=>x==="clean"||x==="off").length;
  return `<div class="chj-days"><div class="chj-dh"><span>\u05e8\u05e6\u05e3 \u05d9\u05de\u05d9\u05dd \u05d1\u05dc\u05d9 \u05d4\u05e4\u05e8\u05d4 <b class="num">${streak}</b></span><span>\u05d9\u05de\u05d9\u05dd \u05d1\u05dc\u05d9 \u05d4\u05e4\u05e8\u05d4 <b class="num">${clean}</b> \u05de\u05ea\u05d5\u05da <b class="num">${Math.max(v.day-1,0)}</b></span></div>
   <div class="chj-grid">${grp(0)}${grp(1)}${grp(2)}</div>
   <div class="chj-lg">${["clean","bad","off","today"].map(k=>`<span><i class="d-${k}"></i>${L[k]}</span>`).join("")}</div></div>`;}
function jStages(v){
  const day=v?v.day:-1,cur=v?v.stage:0;
  return `<div class="chj-path">${[1,2,3].map(n=>{
    const st=STAGES[n],state=!v?(n===1?"now":"lock"):n<cur?"done":n===cur?"now":"lock",cls="s-"+state,inSt=Math.min(Math.max(day-(n-1)*30,0),30);
    const lbl=!v?`\u05e9\u05dc\u05d1 ${n} \u00b7 ${st.days}`:state==="done"?`\u05e9\u05dc\u05d1 ${n} \u00b7 \u05d4\u05d5\u05e9\u05dc\u05dd`:state==="now"?`\u05e2\u05db\u05e9\u05d9\u05d5 \u00b7 \u05d9\u05d5\u05dd ${Math.max(inSt,1)} \u05de\u05ea\u05d5\u05da 30`:`\u05e9\u05dc\u05d1 ${n} \u00b7 \u05e0\u05e4\u05ea\u05d7 \u05d1\u05d9\u05d5\u05dd ${(n-1)*30+1}`;
    const ic=state==="done"?JI.ok:state==="now"?CI.shield:JI.lock;
    return `<div class="chj-st ${cls}${n===3?" s-goal":""}"><span class="ic">${SV(ic)}</span><div class="tx"><small>${lbl}</small><b>${st.title}</b>${state!=="done"?`<span class="g">${st.goal}</span>`:""}${v&&state==="now"?`<div class="chj-bar"><i style="width:${inSt/30*100}%"></i></div>`:""}</div></div>`;}).join("")}</div>`;}
function jMore(key,title,inner){
  const open=C.more===key;
  return `<div class="chj-more${open?" open":""}"><button data-chmore="${key}"><span>${title}</span>${SV(CI.chev,"width:18px;height:18px")}</button>${open?`<div class="body">${inner}</div>`:""}</div>`;}
function jHow(){
  return `<p class="ch-desc">90 \u05d9\u05de\u05d9 \u05de\u05e1\u05d7\u05e8 (\u05db-18 \u05e9\u05d1\u05d5\u05e2\u05d5\u05ea) \u05d1\u05ea\u05d5\u05da \u05d4\u05d9\u05d5\u05de\u05df. \u05d4\u05de\u05d8\u05e8\u05d4: \u05dc\u05e9\u05e8\u05d5\u05d3, \u05dc\u05e2\u05d1\u05d5\u05e8 \u05de\u05d1\u05d7\u05df \u05de\u05d9\u05de\u05d5\u05df \u05d5\u05dc\u05d4\u05d2\u05d9\u05e2 \u05dc\u05de\u05e9\u05d9\u05db\u05d4 \u05e8\u05d0\u05e9\u05d5\u05e0\u05d4. \u05d4\u05db\u05dc \u05de\u05d7\u05d5\u05e9\u05d1 \u05de\u05d4\u05e2\u05e1\u05e7\u05d0\u05d5\u05ea \u05d1\u05d9\u05d5\u05de\u05df. \u05d0\u05d9\u05df \u05d8\u05d1\u05dc\u05ea \u05de\u05d5\u05d1\u05d9\u05dc\u05d9\u05dd: \u05db\u05dc \u05d0\u05d7\u05d3 \u05de\u05d5\u05dc \u05e2\u05e6\u05de\u05d5.</p>
   <p class="ch-small">\u05d4\u05e9\u05dc\u05d1 \u05e0\u05e7\u05d1\u05e2 \u05dc\u05e4\u05d9 \u05de\u05e6\u05d1 \u05d4\u05d7\u05e9\u05d1\u05d5\u05df: \u05de\u05d9 \u05e9\u05db\u05d1\u05e8 \u05de\u05d7\u05d6\u05d9\u05e7 \u05d7\u05e9\u05d1\u05d5\u05df \u05de\u05de\u05d5\u05de\u05df \u05de\u05ea\u05d7\u05d9\u05dc \u05d9\u05e9\u05e8 \u05d1\u05e9\u05dc\u05d1 3. \u05d9\u05d5\u05dd \u05d1\u05dc\u05d9 \u05e2\u05e1\u05e7\u05d4 \u05de\u05d5\u05ea\u05e8 \u05d5\u05e0\u05d7\u05e9\u05d1 \u05d4\u05d7\u05dc\u05d8\u05d4 \u05de\u05de\u05d5\u05e9\u05de\u05e2\u05ea. \u05d7\u05e9\u05d1\u05d5\u05df \u05e9\u05e0\u05e9\u05e8\u05e3 \u05dc\u05d0 \u05de\u05d5\u05d7\u05e7 \u05db\u05dc\u05d5\u05dd: \u05de\u05d5\u05e1\u05d9\u05e4\u05d9\u05dd \u05d7\u05e9\u05d1\u05d5\u05df \u05d7\u05d3\u05e9 \u05d5\u05de\u05de\u05e9\u05d9\u05db\u05d9\u05dd \u05d1\u05d0\u05d5\u05ea\u05d5 \u05d0\u05ea\u05d2\u05e8.</p>
   <ul class="ch-rules">${RULE_LINES({...RULES,risk:null}).filter(l=>l!==MANUAL).map(l=>`<li>${SV(CI.check)}<span>${l}</span></li>`).join("")}</ul>
   <div class="promo ch-key">${ci("pen","violet")}<div class="tx"><p>${MANUAL}</p></div></div>`;}
function jWizard(){
  if(!C.wiz)return "";
  const accs=ACCOUNTS.filter(a=>a.state!=="blown"),risk=Number(C.risk),s=C.wiz;
  const done=[C.sel.length>0,risk>0,C.ok],canJoin=done.every(Boolean);
  const sel=accs.filter(a=>C.sel.includes(a.id));
  const lims=sel.map(a=>{const t=a.track&&TRACKS[a.track];return t?{name:a.name,dd:t.stop,dll:t.daily}:null;}).filter(Boolean);
  const T=["\u05d4\u05d7\u05e9\u05d1\u05d5\u05e0\u05d5\u05ea \u05e9\u05dc\u05da \u05d1\u05d0\u05ea\u05d2\u05e8","\u05e1\u05d9\u05db\u05d5\u05df \u05dc\u05e2\u05e1\u05e7\u05d4","\u05d4\u05db\u05dc\u05dc\u05d9\u05dd"],D=["\u05d0\u05e4\u05e9\u05e8 \u05dc\u05d1\u05d7\u05d5\u05e8 \u05db\u05de\u05d4 \u05d7\u05e9\u05d1\u05d5\u05e0\u05d5\u05ea, \u05d5\u05dc\u05d4\u05d5\u05e1\u05d9\u05e3 \u05e2\u05d5\u05d3 \u05d1\u05d4\u05de\u05e9\u05da.","\u05db\u05de\u05d4 \u05d3\u05d5\u05dc\u05e8 \u05d0\u05ea\u05d4 \u05de\u05e1\u05db\u05df \u05d1\u05db\u05dc \u05e2\u05e1\u05e7\u05d4 (\u05de\u05d4\u05db\u05e0\u05d9\u05e1\u05d4 \u05e2\u05d3 \u05d4\u05e1\u05d8\u05d5\u05e4). \u05d0\u05d9\u05df \u05e1\u05db\u05d5\u05dd \u05d0\u05d7\u05d9\u05d3: \u05e7\u05d1\u05e2 \u05dc\u05e4\u05d9 \u05d4\u05d7\u05e9\u05d1\u05d5\u05df.","\u05d0\u05dc\u05d4 \u05db\u05dc\u05dc\u05d9 \u05d1\u05e8\u05d9\u05e8\u05ea \u05d4\u05de\u05d7\u05d3\u05dc. \u05d0\u05e4\u05e9\u05e8 \u05dc\u05d4\u05d7\u05de\u05d9\u05e8, \u05dc\u05d0 \u05dc\u05d4\u05e7\u05dc."];
  let body="";
  if(s===1)body=`<div class="ch-pickacc">${accs.map(a=>{const t=a.track&&TRACKS[a.track];const on=C.sel.includes(a.id);return `<label class="${on?"on":""}"><input type="checkbox" class="ck" data-chsel="${a.id}" ${on?"checked":""} aria-label="${a.name}"><span class="nm"><b>${a.name}</b><small>${t?t.label:a.firm}</small></span><span class="tag">${a.phase==="funded"?"\u05de\u05de\u05d5\u05de\u05df":"\u05de\u05d1\u05d7\u05df"}</span></label>`;}).join("")}</div>
   <div class="ch-row"><button class="btn3 ghostb" data-chnew>${SV(CI.plus,"width:16px;height:16px")}<span style="margin-inline-start:6px">\u05e4\u05ea\u05d7 \u05d7\u05e9\u05d1\u05d5\u05df \u05d7\u05d3\u05e9</span></button></div>`;
  if(s===2)body=`<div class="fld ch-riskf"><label for="chRisk">\u05e1\u05d9\u05db\u05d5\u05df \u05dc\u05e2\u05e1\u05e7\u05d4 ($)</label><input class="inp" id="chRisk" type="number" inputmode="decimal" min="1" dir="ltr" value="${C.risk}" placeholder="250"></div>
   ${lims.length?`<ul class="ch-lims">${lims.map(l=>`<li><b class="en">${l.name}</b>: \u05e1\u05d8\u05d5\u05e4 \u05db\u05dc\u05dc\u05d9 <b class="num">$${l.dd.toLocaleString("en-US")}</b>${l.dll?`, \u05e1\u05d8\u05d5\u05e4 \u05d9\u05d5\u05de\u05d9 <b class="num">$${l.dll.toLocaleString("en-US")}</b>`:""}${risk>0&&l.dll?` \u00b7 ${Math.floor(l.dll/risk)} \u05d4\u05e4\u05e1\u05d3\u05d9\u05dd \u05de\u05dc\u05d0\u05d9\u05dd \u05e2\u05d3 \u05d4\u05e1\u05d8\u05d5\u05e4 \u05d4\u05d9\u05d5\u05de\u05d9`:""}</li>`).join("")}</ul>`:""}
   <div class="ch-row"><a class="btn3 ghostb ch-ext" href="https://antartrade.co.il/calculators/payout-odds" target="_blank" rel="noopener">${SV(CI.calc,"width:16px;height:16px")}\u05d1\u05d3\u05d5\u05e7 \u05d0\u05ea \u05d4\u05e1\u05d9\u05db\u05d5\u05d9 \u05e9\u05dc\u05da \u05dc\u05de\u05e9\u05d9\u05db\u05d4${SV(CI.ext,"width:14px;height:14px")}</a></div>`;
  if(s===3)body=`<ul class="ch-rules">${RULE_LINES({maxDailyTrades:+C.maxT,maxConsecutiveLosses:+C.maxL,minRr:1,risk:risk||null}).filter(l=>l!==MANUAL).map(l=>`<li>${SV(CI.check)}<span>${l}</span></li>`).join("")}</ul><div class="promo ch-key">${ci("pen","violet")}<div class="tx"><p>${MANUAL}</p></div></div>
   <div class="ch-sel2"><div class="fld"><label>\u05e2\u05e1\u05e7\u05d0\u05d5\u05ea \u05d1\u05d9\u05d5\u05dd</label><select class="inp" id="chMaxT">${["3","2","1"].map(x=>`<option value="${x}"${x===C.maxT?" selected":""}>\u05e2\u05d3 ${x}</option>`).join("")}</select></div><div class="fld"><label>\u05e2\u05e6\u05d9\u05e8\u05d4 \u05d0\u05d7\u05e8\u05d9 \u05d4\u05e4\u05e1\u05d3\u05d9\u05dd \u05e8\u05e6\u05d5\u05e4\u05d9\u05dd</label><select class="inp" id="chMaxL">${["2","1"].map(x=>`<option value="${x}"${x===C.maxL?" selected":""}>${x}</option>`).join("")}</select></div></div>
   <p class="hint2" style="margin-top:12px">\u05d9\u05d7\u05e1 \u05e1\u05d9\u05db\u05d5\u05df-\u05e1\u05d9\u05db\u05d5\u05d9 \u05e7\u05d1\u05d5\u05e2 1:1 \u05dc\u05db\u05d5\u05dc\u05dd \u05d1\u05d4\u05ea\u05d7\u05dc\u05d4. \u05d0\u05d7\u05e8\u05d9 30 \u05d9\u05de\u05d9 \u05de\u05e1\u05d7\u05e8, \u05d0\u05dd \u05d4\u05e0\u05ea\u05d5\u05e0\u05d9\u05dd \u05e9\u05dc\u05da \u05de\u05e8\u05d0\u05d9\u05dd \u05e9\u05d9\u05e2\u05d3 \u05d2\u05d1\u05d5\u05d4 \u05d9\u05d5\u05ea\u05e8 \u05e2\u05d3\u05d9\u05e3, \u05d4\u05d0\u05ea\u05d2\u05e8 \u05d9\u05e6\u05d9\u05e2 \u05d0\u05d5\u05ea\u05d5.</p>
   <label class="ch-accept"><input type="checkbox" class="ck" id="chOk" ${C.ok?"checked":""} aria-label="\u05d0\u05e0\u05d9 \u05de\u05d0\u05e9\u05e8 \u05d0\u05ea \u05d4\u05db\u05dc\u05dc\u05d9\u05dd">\u05e7\u05e8\u05d0\u05ea\u05d9 \u05d5\u05d0\u05e0\u05d9 \u05de\u05ea\u05d7\u05d9\u05d9\u05d1 \u05dc\u05db\u05dc\u05dc\u05d9 \u05d4\u05d0\u05ea\u05d2\u05e8</label>`;
  const next=s<3?`<button class="btn2" data-chstep="${s+1}" ${done[s-1]?"":"disabled"}>\u05d4\u05d1\u05d0</button>`:`<div class="ch-go${canJoin?" ready":""}"><button class="btn2" data-chjoin ${canJoin?"":"disabled"}>\u05d4\u05e6\u05d8\u05e8\u05e3 \u05dc\u05d0\u05ea\u05d2\u05e8. \u05d4\u05d9\u05d5\u05dd \u05d4\u05d5\u05d0 \u05d9\u05d5\u05dd 1</button></div>`;
  return `<div class="chj-wiz" role="dialog" aria-modal="true" aria-label="\u05d4\u05e6\u05d8\u05e8\u05e4\u05d5\u05ea \u05dc\u05d0\u05ea\u05d2\u05e8"><div class="chj-wbox">
   <div class="chj-wh"><button class="chj-x" data-chwiz="0" aria-label="\u05e1\u05d2\u05d9\u05e8\u05d4">${SV(JI.x)}</button><div class="tt"><small>\u05e6\u05e2\u05d3 ${s} \u05de\u05ea\u05d5\u05da 3</small><h2>${T[s-1]}</h2><p>${D[s-1]}</p></div></div>
   <div class="chj-dots">${[1,2,3].map(n=>`<i class="${n<s||done[n-1]&&n!==s?"ok":n===s?"on":""}"></i>`).join("")}</div>
   <div class="chj-wb">${body}</div>
   <div class="chj-wf">${s>1?`<button class="btn3" data-chstep="${s-1}">\u05d7\u05d6\u05e8\u05d4</button>`:"<span></span>"}${next}</div>
  </div></div>`;}
function jJoin(){
  return `<div class="chj">
  <section class="chj-hero${C.noam?" av":""}"><div class="tx"><small>\u05d0\u05ea\u05d2\u05e8 90</small><h2>\u05de\u05e9\u05d9\u05db\u05d4 \u05e8\u05d0\u05e9\u05d5\u05e0\u05d4 \u05ea\u05d5\u05da <span class="num">90</span> \u05d9\u05de\u05d9 \u05de\u05e1\u05d7\u05e8</h2><p>\u05dc\u05e9\u05e8\u05d5\u05d3, \u05dc\u05e2\u05d1\u05d5\u05e8 \u05de\u05d1\u05d7\u05df \u05de\u05d9\u05de\u05d5\u05df \u05d5\u05dc\u05d4\u05d2\u05d9\u05e2 \u05dc\u05de\u05e9\u05d9\u05db\u05d4 \u05e8\u05d0\u05e9\u05d5\u05e0\u05d4. \u05db\u05dc \u05d0\u05d7\u05d3 \u05de\u05d5\u05dc \u05e2\u05e6\u05de\u05d5</p>
    <button class="chj-cta" data-chwiz="1">\u05dc\u05d4\u05e6\u05d8\u05e8\u05e3 \u05dc\u05d0\u05ea\u05d2\u05e8<em>3 \u05e6\u05e2\u05d3\u05d9\u05dd</em></button></div>${C.noam?`<img class="noam" alt="" src="avatar/noam-flex.webp">`:""}</section>
  <section class="blk chj-sec"><div class="bh">${cttl("\u05d4\u05d3\u05e8\u05da","flag","sun")}<span class="hint">\u05e9\u05dc\u05d5\u05e9\u05d4 \u05e9\u05dc\u05d1\u05d9\u05dd. \u05db\u05dc \u05e9\u05dc\u05d1 \u05e0\u05e4\u05ea\u05d7 \u05db\u05e9\u05de\u05d2\u05d9\u05e2\u05d9\u05dd \u05d0\u05dc\u05d9\u05d5.</span></div>${jStages(null)}</section>
  ${jMore("how","\u05d0\u05d9\u05da \u05d6\u05d4 \u05e2\u05d5\u05d1\u05d3 \u05d5\u05d4\u05db\u05dc\u05dc\u05d9\u05dd",jHow())}
  </div>`;}
function jTasks(v){
  const today=v.day===0?{trades:0,losses:0}:{trades:1,losses:0};
  const T=[[v.pendingStops.length===0,"\u05dc\u05d4\u05d6\u05d9\u05df \u05db\u05dc \u05e2\u05e1\u05e7\u05d4, \u05db\u05d5\u05dc\u05dc \u05e1\u05d8\u05d5\u05e4",v.pendingStops.length?"\u05d7\u05e1\u05e8 \u05e1\u05d8\u05d5\u05e4":"\u05d4\u05db\u05dc \u05d4\u05d5\u05d6\u05df"],
    [today.trades<RULES.maxDailyTrades,`\u05e2\u05d3 ${RULES.maxDailyTrades} \u05e2\u05e1\u05e7\u05d0\u05d5\u05ea \u05d4\u05d9\u05d5\u05dd`,`${today.trades}/${RULES.maxDailyTrades}`],
    [true,`\u05e1\u05d9\u05db\u05d5\u05df \u05e9\u05dc \u05e2\u05d3 $${RULES.riskPerTrade} \u05dc\u05e2\u05e1\u05e7\u05d4`,"\u05d1\u05ea\u05d5\u05da \u05d4\u05d2\u05d1\u05d5\u05dc"],
    [today.losses<RULES.maxConsecutiveLosses,`\u05d0\u05d7\u05e8\u05d9 ${RULES.maxConsecutiveLosses} \u05d4\u05e4\u05e1\u05d3\u05d9\u05dd \u05e8\u05e6\u05d5\u05e4\u05d9\u05dd \u05e2\u05d5\u05e6\u05e8\u05d9\u05dd`,`${today.losses}/${RULES.maxConsecutiveLosses}`]];
  return `<section class="blk chj-sec"><div class="bh">${cttl("\u05d4\u05de\u05e9\u05d9\u05de\u05d5\u05ea \u05e9\u05dc \u05d4\u05d9\u05d5\u05dd","check","mint")}<span class="hint">\u05e2\u05de\u05d9\u05d3\u05d4 \u05d1\u05db\u05dc\u05dc\u05d9\u05dd \u05d4\u05d9\u05d5\u05dd. \u05de\u05ea\u05e2\u05d3\u05db\u05df \u05de\u05d4\u05e2\u05e1\u05e7\u05d0\u05d5\u05ea \u05d1\u05d9\u05d5\u05de\u05df.</span></div>
   <div class="chj-tasks">${T.map(t=>`<div class="chj-task ${t[0]?"t-ok":"t-no"}"><i>${t[0]?SV(JI.ok):SV(CI.alert)}</i><span class="t">${t[1]}</span><small>${t[2]}</small></div>`).join("")}</div></section>`;}
function jDash(){
  const v=SMP[C.view],st=STAGES[v.stage],left=v.stage*30-v.day;
  const nextTx=v.day===0?"\u05d4\u05d0\u05ea\u05d2\u05e8 \u05de\u05ea\u05d7\u05d9\u05dc \u05d1\u05d9\u05d5\u05dd \u05d4\u05de\u05e1\u05d7\u05e8 \u05d4\u05d1\u05d0 \u05d1\u05d1\u05d5\u05e8\u05e1\u05d4 \u05d4\u05d0\u05de\u05e8\u05d9\u05e7\u05d0\u05d9\u05ea.":v.stage<3?`\u05e2\u05d5\u05d3 <span class="num">${left}</span> \u05d9\u05de\u05d9 \u05de\u05e1\u05d7\u05e8 \u05dc\u05e9\u05dc\u05d1 ${STAGES[v.stage+1].title}.`:`\u05e2\u05d5\u05d3 <span class="num">${left}</span> \u05d9\u05de\u05d9 \u05de\u05e1\u05d7\u05e8 \u05dc\u05e1\u05d5\u05e3 \u05d4\u05d0\u05ea\u05d2\u05e8.`;
  return `<div class="chj">
  <section class="chj-hero dash${C.noam?" av":""}"><div class="tx"><small>\u05e9\u05dc\u05d1 ${v.stage} \u00b7 ${st.title}</small><div class="chj-day"><b>${v.day||1}</b><span>\u05de\u05ea\u05d5\u05da <span class="num">90</span></span></div><p>${nextTx}</p>${C.noam?`<p class="say">${headline(v.out)}</p>`:""}</div>${C.noam?`<img class="noam" alt="" src="avatar/noam-${v.av}.webp">`:""}</section>
  <section class="blk chj-sec">${dayGrid(v)}</section>
  ${warns(v)}
  ${jTasks(v)}
  <section class="blk chj-sec"><div class="bh">${cttl("\u05d4\u05d3\u05e8\u05da","flag","sun")}<span class="hint">${st.goal}</span></div>${jStages(v)}
   <div class="ch-out"><div class="tile"><span class="l">\u05d7\u05e9\u05d1\u05d5\u05e0\u05d5\u05ea \u05e9\u05e0\u05e9\u05e8\u05e4\u05d5</span><span class="v">${v.out.burned}</span></div><div class="tile"><span class="l">\u05de\u05d1\u05d7\u05e0\u05d9\u05dd \u05e9\u05e2\u05d1\u05e8\u05d5</span><span class="v">${v.out.passed}</span></div><div class="tile"><span class="l">\u05de\u05e9\u05d9\u05db\u05d5\u05ea</span><span class="v">${v.out.payouts}</span></div></div></section>
  ${jMore("data","\u05d4\u05e0\u05ea\u05d5\u05e0\u05d9\u05dd, \u05ea\u05de\u05d5\u05e0\u05d5\u05ea \u05d4\u05de\u05e6\u05d1 \u05d5\u05d4\u05d4\u05e4\u05e8\u05d5\u05ea",numbers(v)+snapshots(v)+violations(v))}
  ${jMore("accs","\u05d4\u05d7\u05e9\u05d1\u05d5\u05e0\u05d5\u05ea \u05d5\u05d4\u05db\u05dc\u05dc\u05d9\u05dd",accounts(v)+rulesBlk(v))}
  </div>`;}

/* ---- game version (08.11): the challenge as a game. Accounts are hearts, stages are worlds on a map, today's rules are
   quests with a 3D chest, milestones are collectible cards, Noam's recommendations are power cards. Points and cards only
   for keeping the rules, never for trade count or profit. 3D art lives in assets/game/ ---- */
const GI=n=>`assets/game/${n}.webp`;
const HEART='<path d="M12 21s-7.5-4.6-9.6-9.2C.9 8.5 3 4.5 6.9 4.5c2.1 0 3.6 1.1 5.1 3 1.5-1.9 3-3 5.1-3 3.9 0 6 4 4.5 7.3C19.5 16.4 12 21 12 21z"/>';
const FLAME='<path d="M12 3c1 3.5 5 5.5 5 10a5 5 0 0 1-10 0c0-2 1-3.5 2-4.5.3 1.5 1 2.5 2 3 0-3 0-5.5 1-8.5z"/>';
const STAR='<path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9 6.8 19.6l1-5.8-4.3-4.1 5.9-.9z"/>';
const GDEF='<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs><linearGradient id="gHg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#7DC6FF"/><stop offset="1" stop-color="#4F6BFF"/></linearGradient></defs></svg>';
const QPTS=[15,10,10,10];
function gStats(v){
  const S=dayStates(v);let streak=0;for(let d=v.day-2;d>=0&&S[d]!=="bad";d--)streak++;
  const clean=S.filter(x=>x==="clean"||x==="off").length+(C.gChest===C.view?1:0);
  const pts=clean*45+v.out.passed*300+v.out.payouts*600,lvl=Math.floor(pts/300)+1,into=pts%300;
  return {S,streak,clean,pts,lvl,into};}
function gTasks(v){
  const today=v.day===0?{trades:0,losses:0}:{trades:1,losses:0};
  return [[v.pendingStops.length===0,"\u05dc\u05d4\u05d6\u05d9\u05df \u05db\u05dc \u05e2\u05e1\u05e7\u05d4, \u05db\u05d5\u05dc\u05dc \u05e1\u05d8\u05d5\u05e4",v.pendingStops.length?"\u05d7\u05e1\u05e8 \u05e1\u05d8\u05d5\u05e4":"\u05d4\u05db\u05dc \u05d4\u05d5\u05d6\u05df"],
    [today.trades<RULES.maxDailyTrades,`\u05e2\u05d3 ${RULES.maxDailyTrades} \u05e2\u05e1\u05e7\u05d0\u05d5\u05ea \u05d4\u05d9\u05d5\u05dd`,`${today.trades}/${RULES.maxDailyTrades}`],
    [true,`\u05e1\u05d9\u05db\u05d5\u05df \u05e9\u05dc \u05e2\u05d3 ${RULES.riskPerTrade} \u05dc\u05e2\u05e1\u05e7\u05d4`,"\u05d1\u05ea\u05d5\u05da \u05d4\u05d2\u05d1\u05d5\u05dc"],
    [today.losses<RULES.maxConsecutiveLosses,`\u05d0\u05d7\u05e8\u05d9 ${RULES.maxConsecutiveLosses} \u05d4\u05e4\u05e1\u05d3\u05d9\u05dd \u05e8\u05e6\u05d5\u05e4\u05d9\u05dd \u05e2\u05d5\u05e6\u05e8\u05d9\u05dd`,`${today.losses}/${RULES.maxConsecutiveLosses}`]];}
function gHud(v,g){
  const hearts=v.links.filter(l=>l.status!=="closed").map(l=>`<span class="g-ht${l.status==="failed"?" off":""}" data-ght="${l.id}" title="${l.name} \u00b7 ${LINK_STATUS[l.status]}"><svg viewBox="0 0 24 24"><g class="bg">${HEART}</g><g class="fg">${HEART}</g><path class="crack" d="M12.4 7.6l-1.9 3.4 2.7 2.1-1.8 3.7"/></svg></span>`).join("");
  return `<section class="g-hud">${GDEF}
   <div class="g-day"><small>\u05d9\u05d5\u05dd</small><b class="num">${v.day||1}</b><span>\u05de\u05ea\u05d5\u05da <span class="num">90</span></span></div>
   <div class="g-cell"><div><small>\u05d7\u05d9\u05d9\u05dd \u00b7 \u05db\u05dc \u05d7\u05e9\u05d1\u05d5\u05df \u05d4\u05d5\u05d0 \u05dc\u05d1</small><div class="g-hearts">${hearts}</div></div></div>
   <div class="g-cell g-stk"><span class="g-flame">${SV(FLAME)}</span><small>\u05e8\u05e6\u05e3 \u05e0\u05e7\u05d9</small><b><span class="num">${g.streak}</span> \u05d9\u05de\u05d9\u05dd</b></div>
   <div class="g-cell g-xp"><span class="g-lvl"><span class="num">${g.lvl}</span></span><div class="g-xpt"><div class="g-pts"><b class="num" data-gpts="${g.pts}">${g.pts.toLocaleString("en-US")}</b><span>\u05e0\u05e7\u05d5\u05d3\u05d5\u05ea</span></div><small>\u05e8\u05de\u05d4 <span class="num">${g.lvl}</span> \u00b7 \u05e2\u05d5\u05d3 <span class="num">${300-g.into}</span> \u05e0\u05e7\u05d5\u05d3\u05d5\u05ea \u05dc\u05e8\u05de\u05d4 \u05d4\u05d1\u05d0\u05d4</small><span class="g-bar"><i style="width:${g.into/300*100}%"></i></span></div></div>
  </section>`;}
function gMap(v){
  const day=v?v.day:0,stage=v?v.stage:1,Y=2.7,pos=(x,y)=>`right:${(400-x)/4}%;top:${y/Y}%`;
  const N=[[370,240,1],[318,232,5],[268,213,9],[212,205,14],[156,200,18],[105,188,23],[72,166,27],[115,104,31],[185,100,38],[255,96,45],[322,72,52],[285,28,61],[225,25,70],[165,25,80]];
  let cur=-1;N.forEach((n,i)=>{if(day>=n[2])cur=i;});
  const w=gWait(v);if(w)cur=w.gate===1?6:10;
  const nodes=N.map((n,i)=>{const st=!v?"l":i<cur?"d":i===cur?"t":"l";return `<span class="g-node n-${st}" style="${pos(n[0],n[1])}">${st==="t"?`<span class="num">${day}</span>`:`<span class="num">${n[2]}</span>`}</span>`;}).join("");
  const gate=(img,x,y,open,cls)=>`<img class="g-gate${open?"":" lock"}${cls||""}" alt="" src="${GI(img)}" style="${pos(x,y)}">`;
  const lbl=(t,s,x,y)=>`<span class="g-wl" style="${pos(x,y)}"><b>${t}</b>${s}</span>`;
  return `<div class="g-map"><svg class="g-road" viewBox="0 0 400 270" preserveAspectRatio="none" aria-hidden="true">
     <path d="M370 240 C300 240 260 205 200 205 S80 190 60 150 S120 100 200 100 S340 90 340 55 S260 25 180 25 L40 25" fill="none" stroke="rgba(255,255,255,.07)" stroke-width="14" stroke-linecap="round"/>
     <path class="g-done" d="M370 240 C300 240 260 205 200 205 S80 190 60 150 S120 100 200 100 S340 90 340 55 S260 25 180 25 L40 25" fill="none" stroke="url(#gHg)" stroke-width="4" stroke-linecap="round" stroke-dasharray="0 2000"/></svg>
   ${nodes}${gate("shield-check",58,130,stage>1,w&&w.gate===1?" wait":"")}${gate("shield-target",350,48,stage>2,w&&w.gate===2?" wait":"")}
   ${w?`<span class="g-glock" style="${w.gate===1?pos(58,130):pos(350,48)}" title="${w.short.replace(/<[^>]+>/g,"")}">${SV(JI.lock,"width:14px;height:14px")}</span>`:""}${gate("shield-trophy",40,25,v&&v.out.payouts>0," final")}
   ${lbl("\u05e9\u05dc\u05d1 1",STAGES[1].title,300,246)}${lbl("\u05e9\u05dc\u05d1 2",STAGES[2].title,215,128)}${lbl("\u05e9\u05dc\u05d1 3",STAGES[3].title,120,48)}</div>`;}
/* is the user standing at a locked gate? Gate 1 opens after 30 trading days with no burned account (Noam's stage.ts);
   gate 2 opens with a passed evaluation or a funded account */
function gWait(v){
  if(!v)return null;
  if(v.stage===1&&v.day>30){const left=Math.max((v.burnDay||0)+31-v.day,1);return {gate:1,left,short:`\u05e2\u05d5\u05d3 <span class="num">${left}</span> \u05d9\u05de\u05d9\u05dd \u05e0\u05e7\u05d9\u05d9\u05dd`,
    hint:`\u05d7\u05e9\u05d1\u05d5\u05df \u05e0\u05e9\u05e8\u05e3 \u05d1-30 \u05d9\u05de\u05d9 \u05d4\u05de\u05e1\u05d7\u05e8 \u05d4\u05d0\u05d7\u05e8\u05d5\u05e0\u05d9\u05dd. \u05d4\u05e9\u05e2\u05e8 \u05e0\u05e4\u05ea\u05d7 \u05d0\u05d7\u05e8\u05d9 <span class="num">30</span> \u05d9\u05de\u05d9 \u05de\u05e1\u05d7\u05e8 \u05d1\u05dc\u05d9 \u05d7\u05e9\u05d1\u05d5\u05df \u05e9\u05e0\u05e9\u05e8\u05e3: \u05e2\u05d5\u05d3 <span class="num">${left}</span>`,
    say:`\u05d7\u05e9\u05d1\u05d5\u05df \u05e0\u05e9\u05e8\u05e3 \u05d1\u05d9\u05d5\u05dd ${v.burnDay}, \u05d0\u05d6 \u05d4\u05d4\u05d9\u05e9\u05e8\u05d3\u05d5\u05ea \u05e0\u05de\u05e9\u05db\u05ea. \u05e2\u05d5\u05d3 ${left} \u05d9\u05de\u05d9 \u05de\u05e1\u05d7\u05e8 \u05d1\u05dc\u05d9 \u05d7\u05e9\u05d1\u05d5\u05df \u05e9\u05e0\u05e9\u05e8\u05e3, \u05d5\u05d4\u05e9\u05e2\u05e8 \u05e9\u05dc ${STAGES[2].title} \u05e0\u05e4\u05ea\u05d7. \u05de\u05de\u05e9\u05d9\u05db\u05d9\u05dd \u05d1\u05d0\u05d5\u05ea\u05d5 \u05d0\u05ea\u05d2\u05e8, \u05e9\u05d5\u05dd \u05d3\u05d1\u05e8 \u05dc\u05d0 \u05e0\u05de\u05d7\u05e7.`};}
  if(v.stage===2&&v.day>60)return {gate:2,left:0,short:"\u05e0\u05e4\u05ea\u05d7 \u05db\u05e9\u05e2\u05d5\u05d1\u05e8\u05d9\u05dd \u05de\u05d1\u05d7\u05df",hint:"\u05d4\u05e9\u05e2\u05e8 \u05e9\u05dc \u05de\u05e9\u05d9\u05db\u05d4 \u05e8\u05d0\u05e9\u05d5\u05e0\u05d4 \u05e0\u05e4\u05ea\u05d7 \u05db\u05e9\u05e2\u05d5\u05d1\u05e8\u05d9\u05dd \u05de\u05d1\u05d7\u05df \u05de\u05d9\u05de\u05d5\u05df",say:`\u05d4\u05e9\u05e2\u05e8 \u05e9\u05dc ${STAGES[3].title} \u05e0\u05e4\u05ea\u05d7 \u05d1\u05e8\u05d2\u05e2 \u05e9\u05ea\u05e2\u05d1\u05d5\u05e8 \u05de\u05d1\u05d7\u05df. \u05d1\u05dc\u05d9 \u05dc\u05de\u05d4\u05e8 \u05d5\u05d1\u05dc\u05d9 \u05dc\u05d4\u05d2\u05d3\u05d9\u05dc \u05e1\u05d9\u05db\u05d5\u05df.`};
  return null;}
function gNoam(v){
  if(!C.noam)return "";
  if(C.gSay&&C.gSay.view===C.view)return `<section class="blk g-noam"><img alt="" src="avatar/noam-${C.gSay.av}.webp"><div class="g-bub"><small>${C.gSay.tag}</small>${nums(C.gSay.txt)}</div></section>`;
  const w=gWait(v);if(w&&!v.pendingStops.length)return `<section class="blk g-noam"><img alt="" src="avatar/noam-one.webp"><div class="g-bub"><small>\u05d4\u05e9\u05e2\u05e8 \u05e2\u05d5\u05d3 \u05e1\u05d2\u05d5\u05e8</small>${nums(w.say)}</div></section>`;
  const tag=v.pendingStops.length?"\u05ea\u05d6\u05db\u05d5\u05e8\u05ea \u05dc\u05d4\u05d9\u05d5\u05dd":v.day===0?"\u05d9\u05d5\u05dd 1":`\u05d9\u05d5\u05dd ${v.day}`;
  const txt=v.pendingStops.length?"\u05e2\u05e1\u05e7\u05d4 \u05d0\u05d7\u05ea \u05e2\u05d3\u05d9\u05d9\u05df \u05d1\u05dc\u05d9 \u05e1\u05d8\u05d5\u05e4. \u05de\u05e9\u05dc\u05d9\u05de\u05d9\u05dd \u05d0\u05d5\u05ea\u05d5 \u05d1\u05d9\u05d5\u05de\u05df, \u05d5\u05d4\u05de\u05e9\u05d9\u05de\u05d4 \u05e9\u05dc \u05d4\u05d9\u05d5\u05dd \u05de\u05e1\u05d5\u05de\u05e0\u05ea.":headline(v.out);
  return `<section class="blk g-noam"><img alt="" src="avatar/noam-${v.av}.webp"><div class="g-bub"><small>${tag}</small>${nums(txt)}</div></section>`;}
function gQuests(v){
  const T=gTasks(v),left=T.filter(t=>!t[0]).length,opened=C.gChest===C.view,ready=!left&&!opened;
  const head=opened?["\u05e0\u05e4\u05ea\u05d7\u05d4 \u05d4\u05d9\u05d5\u05dd",`\u05e7\u05d9\u05d1\u05dc\u05ea <span class="num">+45</span> \u05e0\u05e7\u05d5\u05d3\u05d5\u05ea \u05d5\u05d9\u05d5\u05dd \u05dc\u05e8\u05e6\u05e3`,"\u05d4\u05ea\u05d9\u05d1\u05d4 \u05d4\u05d1\u05d0\u05d4 \u05de\u05d7\u05e8, \u05d1\u05d9\u05d5\u05dd \u05d4\u05de\u05e1\u05d7\u05e8 \u05d4\u05d1\u05d0."]:ready?["\u05d4\u05ea\u05d9\u05d1\u05d4 \u05e9\u05dc \u05d4\u05d9\u05d5\u05dd","\u05db\u05dc \u05d4\u05de\u05e9\u05d9\u05de\u05d5\u05ea \u05d4\u05d5\u05e9\u05dc\u05de\u05d5","\u05dc\u05d7\u05e6\u05d9 \u05e2\u05dc \u05d4\u05ea\u05d9\u05d1\u05d4 \u05db\u05d3\u05d9 \u05dc\u05e4\u05ea\u05d5\u05d7 \u05d0\u05d5\u05ea\u05d4."]:["\u05d4\u05ea\u05d9\u05d1\u05d4 \u05e9\u05dc \u05d4\u05d9\u05d5\u05dd",left===1?"\u05e0\u05e9\u05d0\u05e8\u05d4 \u05de\u05e9\u05d9\u05de\u05d4 \u05d0\u05d7\u05ea":`\u05e0\u05e9\u05d0\u05e8\u05d5 ${left} \u05de\u05e9\u05d9\u05de\u05d5\u05ea`,"\u05db\u05e9\u05db\u05dc \u05d4\u05de\u05e9\u05d9\u05de\u05d5\u05ea \u05de\u05e1\u05d5\u05de\u05e0\u05d5\u05ea, \u05d4\u05ea\u05d9\u05d1\u05d4 \u05e0\u05e4\u05ea\u05d7\u05ea."];
  return `<section class="blk chj-sec g-quests"><div class="bh">${cttl("\u05d4\u05de\u05e9\u05d9\u05de\u05d5\u05ea \u05e9\u05dc \u05d4\u05d9\u05d5\u05dd","check","mint")}<span class="hint">\u05de\u05ea\u05de\u05dc\u05d0\u05d5\u05ea \u05dc\u05d1\u05d3 \u05de\u05d4\u05e2\u05e1\u05e7\u05d0\u05d5\u05ea \u05d1\u05d9\u05d5\u05de\u05df</span></div>
   <div class="g-qs">${T.map((t,i)=>`<div class="g-q${t[0]?" q-on":""}"><span class="ck2">${t[0]?SV(JI.ok):""}</span><span class="t">${t[1]}</span>${t[0]?"":`<small>${t[2]}</small>`}<em class="num">+${QPTS[i]}</em></div>`).join("")}</div>
   <div class="g-chest${ready?" ready":""}${opened?" opened":""}"><img alt="" src="${GI(opened?"chest-open":"chest")}" ${ready?'data-gchest role="button" tabindex="0" aria-label="\u05dc\u05e4\u05ea\u05d5\u05d7 \u05d0\u05ea \u05d4\u05ea\u05d9\u05d1\u05d4"':""}><div class="tx"><small>${head[0]}</small><b>${head[1]}</b><p>${head[2]}</p></div></div></section>`;}
const GCARDS=[["flag","\u05d9\u05d5\u05dd \u05e8\u05d0\u05e9\u05d5\u05df","\u05d4\u05e6\u05d8\u05e8\u05e4\u05ea \u05dc\u05d0\u05ea\u05d2\u05e8","\u05e8\u05d2\u05d9\u05dc",(v,g)=>v.day>=1],["check","\u05e9\u05d1\u05d5\u05e2 \u05e0\u05e7\u05d9","7 \u05d9\u05de\u05d9\u05dd \u05d1\u05dc\u05d9 \u05d4\u05e4\u05e8\u05d4","\u05e0\u05d3\u05d9\u05e8",(v,g)=>g.clean>=7],
  ["up","\u05e7\u05de\u05ea \u05de\u05e0\u05e4\u05d9\u05dc\u05d4","\u05d7\u05d6\u05e8\u05ea \u05d0\u05d7\u05e8\u05d9 \u05dc\u05d1 \u05e9\u05e0\u05e9\u05d1\u05e8","\u05e0\u05d3\u05d9\u05e8",(v,g)=>v.out.burned>0&&v.links.some(l=>l.status==="active")],["flame","\u05e8\u05e6\u05e3 14","\u05e9\u05d1\u05d5\u05e2\u05d9\u05d9\u05dd \u05d1\u05e8\u05e6\u05e3 \u05d1\u05dc\u05d9 \u05d4\u05e4\u05e8\u05d4","\u05e0\u05d3\u05d9\u05e8",(v,g)=>g.streak>=14],
  ["target","\u05e2\u05d1\u05e8\u05ea \u05de\u05d1\u05d7\u05df","\u05e2\u05d1\u05e8\u05ea \u05de\u05d1\u05d7\u05df \u05de\u05d9\u05de\u05d5\u05df","\u05d0\u05e4\u05d9",(v,g)=>v.out.passed>0],["trophy","\u05de\u05e9\u05d9\u05db\u05d4 \u05e8\u05d0\u05e9\u05d5\u05e0\u05d4","\u05d4\u05d2\u05d1\u05d9\u05e2 \u05e9\u05dc \u05d4\u05e1\u05d5\u05e3","\u05d0\u05d2\u05d3\u05d9",(v,g)=>v.out.payouts>0]];
function gCards(v,g){
  const got=GCARDS.filter(c=>v&&c[4](v,g)).length;
  return `<section class="blk chj-sec g-coll"><div class="bh">${cttl("\u05d4\u05d0\u05d5\u05e1\u05e3 \u05e9\u05dc\u05da","tag","sky")}<span class="hint">${v?`<span class="num">${got}</span> \u05de\u05ea\u05d5\u05da <span class="num">${GCARDS.length}</span> \u05e7\u05dc\u05e4\u05d9\u05dd`:"\u05e7\u05dc\u05e4\u05d9\u05dd \u05e9\u05d0\u05d5\u05e1\u05e4\u05d9\u05dd \u05d1\u05d3\u05e8\u05da"}</span></div>
   <div class="g-cards">${GCARDS.map(c=>{const on=v&&c[4](v,g);return `<div class="g-card${on?"":" lockd"}${c[3]==="\u05d0\u05d2\u05d3\u05d9"?" gold":""}"><img alt="" src="${GI("shield-"+c[0])}"><span class="rar">${c[3]}</span><b>${c[1]}</b><small>${on?c[2]:`${SV(JI.lock,"width:12px;height:12px")}${c[2]}`}</small></div>`;}).join("")}</div></section>`;}
const GPW={try_target:"power-target",fewer:"power-funnel",rules_first:"power-shield",focus_dir:"power-compass"};
function gPowers(v){
  const P=v.periods.length?v.periods[v.periods.length-1].recs:[];
  const eq=C.gEq[C.view]||[];
  const cards=P.length?P.map(r=>{const on=eq.includes(r.id);return `<div class="g-pw${on?" eq":""}"><img alt="" src="${GI(GPW[r.id]||"power-shield")}"><span class="g-tagp">\u05de\u05d5\u05ea\u05d0\u05dd \u05dc\u05da</span><b class="t">${nums(r.title)}</b><p>${nums(r.text)}</p><div class="why">${SV(CI.compass)}<span>${nums(r.because)}</span></div><button class="g-eqb${on?" on":""}" data-geq="${r.id}"${r.target?` data-gtarget="${r.target}"`:""}>${on?SV(JI.ok)+"\u05de\u05e6\u05d5\u05d9\u05d3":"\u05dc\u05e6\u05d9\u05d9\u05d3"}</button></div>`;}).join("")
    :`<div class="g-pw lockd"><img alt="" src="${GI("power-shield")}"><span class="g-tagp off">\u05e2\u05d5\u05d3 \u05dc\u05d0 \u05e0\u05e4\u05ea\u05d7</span><b class="t">\u05db\u05e8\u05d8\u05d9\u05e1\u05d9 \u05d4\u05db\u05d5\u05d7 \u05d4\u05e8\u05d0\u05e9\u05d5\u05e0\u05d9\u05dd</b><p>\u05d0\u05d7\u05e8\u05d9 <span class="num">30</span> \u05d9\u05de\u05d9 \u05de\u05e1\u05d7\u05e8 \u05e0\u05d5\u05e2\u05dd \u05e2\u05d5\u05d1\u05e8 \u05e2\u05dc \u05d4\u05e0\u05ea\u05d5\u05e0\u05d9\u05dd \u05e9\u05dc\u05da \u05d5\u05de\u05d7\u05dc\u05e7 \u05db\u05e8\u05d8\u05d9\u05e1\u05d9 \u05db\u05d5\u05d7 \u05e9\u05de\u05ea\u05d0\u05d9\u05de\u05d9\u05dd \u05d1\u05d3\u05d9\u05d5\u05e7 \u05dc\u05da.</p><div class="why">${SV(JI.lock)}<span>\u05e2\u05d5\u05d3 <span class="num">${v.daysToNext}</span> \u05d9\u05de\u05d9 \u05de\u05e1\u05d7\u05e8</span></div></div>`;
  const slots=[0,1,2].map(i=>{const r=P.find(p=>p.id===eq[i]);return `<span class="g-slot">${r?`<img alt="" src="${GI(GPW[r.id]||"power-shield")}">`:""}</span>`;}).join("");
  return `<section class="blk chj-sec g-pows"><div class="bh">${cttl("\u05db\u05e8\u05d8\u05d9\u05e1\u05d9 \u05db\u05d5\u05d7","compass","sky")}<span class="hint">\u05e2\u05e6\u05d5\u05ea \u05de\u05e0\u05d5\u05e2\u05dd \u05dc\u05e4\u05d9 \u05d4\u05e0\u05ea\u05d5\u05e0\u05d9\u05dd \u05e9\u05dc\u05da. \u05de\u05e6\u05d9\u05d9\u05d3\u05d9\u05dd \u05d1\u05dc\u05d7\u05d9\u05e6\u05d4.</span></div>
   <div class="g-pwg">${cards}</div><div class="g-slots"><small>\u05d4\u05e6\u05d9\u05d5\u05d3 \u05e9\u05dc\u05da</small>${slots}</div></section>`;}
/* what the points open: a discount code for the next account every 3 levels, and at level 12 Noam goes over your
   journal with you. Both are proposals for Noam (08.11); the code text is still his placeholder */
const GREW=[[3,"code","\u05e7\u05d5\u05d3 \u05d4\u05e0\u05d7\u05d4 \u05d1\u05dc\u05e2\u05d3\u05d9","\u05e8\u05e7 \u05dc\u05de\u05e9\u05ea\u05ea\u05e4\u05d9 \u05d4\u05d0\u05ea\u05d2\u05e8"],[6,"code","\u05e7\u05d5\u05d3 \u05d4\u05e0\u05d7\u05d4 \u05d1\u05dc\u05e2\u05d3\u05d9","\u05e8\u05e7 \u05dc\u05de\u05e9\u05ea\u05ea\u05e4\u05d9 \u05d4\u05d0\u05ea\u05d2\u05e8"],[9,"code","\u05e7\u05d5\u05d3 \u05d4\u05e0\u05d7\u05d4 \u05d1\u05dc\u05e2\u05d3\u05d9","\u05e8\u05e7 \u05dc\u05de\u05e9\u05ea\u05ea\u05e4\u05d9 \u05d4\u05d0\u05ea\u05d2\u05e8"],[12,"noam","\u05e0\u05d5\u05e2\u05dd \u05e2\u05d5\u05d1\u05e8 \u05e2\u05dc \u05d4\u05d9\u05d5\u05de\u05df \u05e9\u05dc\u05da","\u05e9\u05d9\u05d7\u05d4 \u05d0\u05d9\u05e9\u05d9\u05ea \u05e2\u05dc \u05d4\u05e2\u05e1\u05e7\u05d0\u05d5\u05ea \u05e9\u05dc\u05da"]];
function gRewards(v,g){
  const top=GREW[GREW.length-1][0],pct=Math.min((g.lvl-1+g.into/300)/(top-1),1)*100;
  const cards=GREW.map(([L,k,t,s])=>{const on=g.lvl>=L,need=(L-1)*300-g.pts;
    return `<div class="g-rw${on?" on":""}${k==="noam"?" g-rwn":""}"><span class="ic">${k==="noam"?`<img alt="" src="avatar/noam-flex.webp">`:`<img alt="" src="${GI(on?"chest-open":"chest")}">`}</span>
     <div class="tx"><small>\u05e8\u05de\u05d4 <span class="num">${L}</span></small><b>${t}</b><span>${s}</span></div>
     ${on?(k==="code"?(C.gClaimed[C.view+":"+L]?`<button class="g-eqb on" data-gcode="${L}">${SV(JI.ok)}\u05d4\u05e7\u05d5\u05d3 \u05e9\u05dc\u05da</button>`:`<button class="g-eqb" data-gcode="${L}">\u05dc\u05e7\u05d1\u05dc \u05d0\u05ea \u05d4\u05e7\u05d5\u05d3</button>`):`<a class="g-eqb g-wa" data-gnoamrev href="${gWaHref()}" target="_blank" rel="noopener">${SV(WA_IC)}\u05dc\u05e7\u05d1\u05d5\u05e2 \u05e9\u05d9\u05d7\u05d4</a>`):`<em>${SV(JI.lock,"width:13px;height:13px")}\u05e2\u05d5\u05d3 <span class="num">${need.toLocaleString("en-US")}</span> \u05e0\u05e7\u05d5\u05d3\u05d5\u05ea</em>`}</div>`;}).join("");
  return `<section class="blk chj-sec g-rews"><div class="bh">${cttl("\u05de\u05d4 \u05d4\u05e0\u05e7\u05d5\u05d3\u05d5\u05ea \u05e4\u05d5\u05ea\u05d7\u05d5\u05ea","tag","sun")}<span class="hint">\u05e8\u05de\u05d4 <span class="num">${g.lvl}</span> \u00b7 <span class="num">${g.pts.toLocaleString("en-US")}</span> \u05e0\u05e7\u05d5\u05d3\u05d5\u05ea</span></div>
   <div class="g-earn"><span><b class="num">45</b> \u05e0\u05e7\u05d5\u05d3\u05d5\u05ea \u05e2\u05dc \u05db\u05dc \u05d9\u05d5\u05dd \u05d1\u05dc\u05d9 \u05d4\u05e4\u05e8\u05d4</span><span><b class="num">300</b> \u05e2\u05dc \u05de\u05d1\u05d7\u05df \u05e9\u05e2\u05d1\u05e8\u05ea</span><span><b class="num">600</b> \u05e2\u05dc \u05de\u05e9\u05d9\u05db\u05d4</span></div>
   <div class="g-track"><span class="g-tbar"><i style="width:${pct}%"></i></span>${GREW.filter(([L])=>L!==g.lvl).map(([L])=>`<span class="g-tm${g.lvl>=L?" on":""}" style="right:${(L-1)/(top-1)*100}%"><span class="num">${L}</span></span>`).join("")}<span class="g-tme" style="right:${pct}%"><span class="num">${g.lvl}</span></span></div>
   <div class="g-rwg">${cards}</div></section>`;}

/* a heart breaks: scroll up to the hearts, crack, grey out, and Noam says the game goes on. A new account = a new heart */
function gHeartFx(id,kind){
  const v=SMP[C.view],l=v&&v.links.find(x=>x.id===id);if(!l)return;
  const alive=v.links.filter(x=>x.status==="active"||x.status==="passed").length;
  C.gSay=kind==="break"?{view:C.view,av:"stopped",tag:"\u05dc\u05d1 \u05e0\u05e9\u05d1\u05e8",txt:`<bdi class="en">${l.name}</bdi> \u05e0\u05e9\u05e8\u05e3. \u05d0\u05d9\u05d1\u05d3\u05ea \u05d7\u05e9\u05d1\u05d5\u05df, \u05dc\u05d0 \u05d0\u05ea \u05d4\u05d3\u05e8\u05da: ${alive===1?"\u05e0\u05e9\u05d0\u05e8 \u05dc\u05da \u05dc\u05d1 \u05d0\u05d7\u05d3":alive?`\u05e0\u05e9\u05d0\u05e8\u05d5 \u05dc\u05da ${alive} \u05dc\u05d1\u05d1\u05d5\u05ea`:"\u05e4\u05d5\u05ea\u05d7\u05d9\u05dd \u05d7\u05e9\u05d1\u05d5\u05df \u05d7\u05d3\u05e9 \u05d5\u05e0\u05d5\u05dc\u05d3 \u05dc\u05d1 \u05d7\u05d3\u05e9"}, \u05d5\u05de\u05de\u05e9\u05d9\u05db\u05d9\u05dd \u05de\u05d9\u05d5\u05dd ${v.day}.`}
    :{view:C.view,av:"clean",tag:"\u05dc\u05d1 \u05d7\u05d3\u05e9",txt:`<bdi class="en">${l.name}</bdi> \u05e0\u05db\u05e0\u05e1 \u05dc\u05d0\u05ea\u05d2\u05e8. \u05e0\u05d5\u05dc\u05d3 \u05dc\u05d1 \u05d7\u05d3\u05e9, \u05d5\u05d4\u05d9\u05d5\u05dd \u05e9\u05dc\u05da \u05d1\u05d0\u05ea\u05d2\u05e8 \u05dc\u05d0 \u05e0\u05de\u05d7\u05e7.`};
  view();
  const hud=document.querySelector(".g-hud");if(!hud)return;
  const go=()=>{const h=document.querySelector(`[data-ght="${id}"]`);if(!h)return;h.classList.add(kind==="break"?"breaking":"born");
    const r=h.getBoundingClientRect(),pop=document.createElement("div");pop.className="g-hpop "+(kind==="break"?"lose":"gain");pop.dir="rtl";
    pop.innerHTML=`<b class="num">${kind==="break"?"-1":"+1"}</b><span>\u05dc\u05d1 \u00b7 <span class="en">${l.name}</span></span>`;
    pop.style.left=(r.left+r.width/2)+"px";pop.style.top=(r.bottom+10)+"px";document.body.appendChild(pop);
    requestAnimationFrame(()=>pop.classList.add("on"));setTimeout(()=>{pop.classList.remove("on");setTimeout(()=>pop.remove(),400);},2600);};
  const y=hud.getBoundingClientRect().top;
  if(y<0||y>innerHeight*.5){scrollTo({top:scrollY+y-24,behavior:"smooth"});setTimeout(go,700);}else setTimeout(go,60);}

function gJoin(){
  return `<div class="chj g">
  <section class="chj-hero${C.noam?" av":""}"><div class="tx"><small>${C.round>1?`\u05d0\u05ea\u05d2\u05e8 90 \u00b7 \u05e1\u05d1\u05d1 <span class="num">${C.round}</span>`:"\u05d0\u05ea\u05d2\u05e8 90"}</small>${C.round>1?`<span class="g-keep">${SV(JI.ok,"width:14px;height:14px")}\u05d4\u05d0\u05d5\u05e1\u05e3, \u05d4\u05e8\u05de\u05d4 \u05d5\u05d4\u05d4\u05d9\u05e1\u05d8\u05d5\u05e8\u05d9\u05d4 \u05e9\u05dc \u05d4\u05e1\u05d1\u05d1 \u05d4\u05e7\u05d5\u05d3\u05dd \u05e0\u05e9\u05de\u05e8\u05d9\u05dd</span>`:""}<h2>\u05de\u05e9\u05d9\u05db\u05d4 \u05e8\u05d0\u05e9\u05d5\u05e0\u05d4 \u05ea\u05d5\u05da <span class="num">90</span> \u05d9\u05de\u05d9 \u05de\u05e1\u05d7\u05e8</h2><p>\u05e9\u05dc\u05d5\u05e9\u05d4 \u05e9\u05dc\u05d1\u05d9\u05dd, \u05d5\u05db\u05dc \u05d7\u05e9\u05d1\u05d5\u05df \u05d4\u05d5\u05d0 \u05dc\u05d1. \u05db\u05dc \u05d0\u05d7\u05d3 \u05de\u05d5\u05dc \u05e2\u05e6\u05de\u05d5</p>
    <button class="chj-cta" data-chwiz="1">\u05dc\u05d4\u05ea\u05d7\u05d9\u05dc \u05dc\u05e9\u05d7\u05e7<em>3 \u05e6\u05e2\u05d3\u05d9\u05dd</em></button></div>${C.noam?`<img class="noam" alt="" src="avatar/noam-flex.webp">`:""}</section>
  <section class="blk chj-sec">${GDEF}<div class="bh">${cttl("\u05d4\u05de\u05e4\u05d4","flag","sun")}<span class="hint">\u05e9\u05dc\u05d5\u05e9\u05d4 \u05e9\u05dc\u05d1\u05d9\u05dd. \u05db\u05dc \u05e9\u05e2\u05e8 \u05e0\u05e4\u05ea\u05d7 \u05db\u05e9\u05de\u05e1\u05d9\u05d9\u05de\u05d9\u05dd \u05d0\u05ea \u05d4\u05e9\u05dc\u05d1 \u05e9\u05dc\u05e4\u05e0\u05d9\u05d5.</span></div>${gMap(null)}</section>
  ${C.round>1?gCards(SMP.d90,gStats(SMP.d90)):gCards(null,null)}
  ${jMore("how","\u05d0\u05d9\u05da \u05d6\u05d4 \u05e2\u05d5\u05d1\u05d3 \u05d5\u05d4\u05db\u05dc\u05dc\u05d9\u05dd",jHow())}
  </div>`;}
function gDash(){
  const v=SMP[C.view],g=gStats(v),st=STAGES[v.stage],left=v.stage*30-v.day;
  const nextTx=v.day===0?"\u05d4\u05d0\u05ea\u05d2\u05e8 \u05de\u05ea\u05d7\u05d9\u05dc \u05d1\u05d9\u05d5\u05dd \u05d4\u05de\u05e1\u05d7\u05e8 \u05d4\u05d1\u05d0 \u05d1\u05d1\u05d5\u05e8\u05e1\u05d4 \u05d4\u05d0\u05de\u05e8\u05d9\u05e7\u05d0\u05d9\u05ea.":v.stage<3?`\u05e2\u05d5\u05d3 <span class="num">${left}</span> \u05d9\u05de\u05d9 \u05de\u05e1\u05d7\u05e8 \u05dc\u05e9\u05e2\u05e8 \u05e9\u05dc ${STAGES[v.stage+1].title}`:`\u05e2\u05d5\u05d3 <span class="num">${left}</span> \u05d9\u05de\u05d9 \u05de\u05e1\u05d7\u05e8 \u05dc\u05d2\u05d1\u05d9\u05e2`;
  const fin=gFinished(v);
  return `<div class="chj g">
  ${fin?gFinish(v,g):""}
  ${gHud(v,g)}
  <div class="g-cols"><div class="g-col">${warns(v)}${fin?gNoam(v):gQuests(v)}</div>
   <div class="g-col">${fin?"":gNoam(v)}<section class="blk chj-sec"><div class="bh">${cttl(fin?"\u05d4\u05d3\u05e8\u05da \u05e9\u05e2\u05e9\u05d9\u05ea":`\u05e9\u05dc\u05d1 ${v.stage} \u00b7 ${st.title}`,"flag","sun")}<span class="hint">${fin?"\u05e9\u05dc\u05d5\u05e9\u05d4 \u05e9\u05dc\u05d1\u05d9\u05dd, 90 \u05d9\u05de\u05d9 \u05de\u05e1\u05d7\u05e8":gWait(v)?gWait(v).hint:nextTx}</span></div>${gMap(v)}</section></div></div>
  ${fin?gCards(v,g):""}
  ${gRewards(v,g)}
  ${fin?"":gCards(v,g)}
  ${fin?"":gPowers(v)}
  ${jMore("data","\u05d4\u05e0\u05ea\u05d5\u05e0\u05d9\u05dd, \u05ea\u05de\u05d5\u05e0\u05d5\u05ea \u05d4\u05de\u05e6\u05d1 \u05d5\u05d4\u05d4\u05e4\u05e8\u05d5\u05ea",numbers(v)+snapshots(v)+violations(v))}
  ${jMore("accs","\u05d4\u05d7\u05e9\u05d1\u05d5\u05e0\u05d5\u05ea \u05d5\u05d4\u05db\u05dc\u05dc\u05d9\u05dd",accounts(v)+rulesBlk(v))}
  </div>`;}

/* the points: count up when a day is opened, and again with a "+45" when the chest pays out */
function gCount(){
  const el=document.querySelector("[data-gpts]");if(!el)return;const to=+el.dataset.gpts;
  let from=null,plus=0;
  if(C.gPrevPts!=null&&C.gPrevPts.view===C.view){from=C.gPrevPts.pts;plus=to-from;C.gPrevPts=null;}
  else if(C.gCounted!==C.view){from=Math.max(to-Math.min(to,600),0);}
  C.gCounted=C.view;if(from==null||matchMedia("(prefers-reduced-motion: reduce)").matches)return;
  const t0=performance.now(),D=plus?900:1100,fmt=n=>Math.round(n).toLocaleString("en-US");
  (function f(t){const k=Math.min((t-t0)/D,1),e=1-Math.pow(1-k,3);el.textContent=fmt(from+(to-from)*e);if(k<1)requestAnimationFrame(f);})(t0);
  if(plus>0){const b=document.createElement("span");b.className="g-ptsplus num";b.textContent="+"+plus;el.parentNode.appendChild(b);setTimeout(()=>b.remove(),1600);}}

/* claiming a reward code: a small window with the chest, the code to copy and the way to the deals page.
   Prototype: the code itself and its wording come from Noam */
function gClaim(L){
  const key=C.view+":"+L;C.gClaimed[key]=true;const code="ANTAR"+L+"0";
  const ov=document.createElement("div");ov.className="g-cdlg";ov.dir="rtl";ov.setAttribute("role","dialog");ov.setAttribute("aria-modal","true");ov.setAttribute("aria-label","\u05e7\u05d5\u05d3 \u05d4\u05e0\u05d7\u05d4 \u05d1\u05dc\u05e2\u05d3\u05d9");
  ov.innerHTML=`<div class="box"><button class="x" data-gcx aria-label="\u05e1\u05d2\u05d9\u05e8\u05d4">${SV(JI.x)}</button>
   <img class="ch" alt="" src="${GI("chest-open")}">
   <small>\u05e4\u05e8\u05e1 \u05e9\u05dc \u05e8\u05de\u05d4 <span class="num">${L}</span></small><h3>\u05e7\u05d5\u05d3 \u05d4\u05e0\u05d7\u05d4 \u05d1\u05dc\u05e2\u05d3\u05d9</h3>
   <p>\u05e7\u05d5\u05d3 \u05e9\u05dc\u05d0 \u05de\u05d5\u05e4\u05d9\u05e2 \u05d1\u05d0\u05ea\u05e8. \u05e8\u05e7 \u05de\u05d9 \u05e9\u05de\u05d2\u05d9\u05e2 \u05dc\u05e8\u05de\u05d4 \u05d4\u05d6\u05d0\u05ea \u05d1\u05d0\u05ea\u05d2\u05e8 \u05de\u05e7\u05d1\u05dc \u05d0\u05d5\u05ea\u05d5, \u05d5\u05de\u05d6\u05d9\u05e0\u05d9\u05dd \u05d0\u05d5\u05ea\u05d5 \u05d1\u05e7\u05d5\u05e4\u05d4 \u05e9\u05dc \u05d7\u05d1\u05e8\u05ea \u05d4\u05de\u05d9\u05de\u05d5\u05df \u05db\u05e9\u05e4\u05d5\u05ea\u05d7\u05d9\u05dd \u05d0\u05ea \u05d4\u05d7\u05e9\u05d1\u05d5\u05df \u05d4\u05d1\u05d0.</p>
   <div class="coupon"><span class="code">${code}</span><button class="g-eqb" data-gcopy="${code}">\u05d4\u05e2\u05ea\u05e7\u05d4</button></div>
   <div class="g-cnote">${SV(CI.tag)}<span>\u05d6\u05d5 \u05d3\u05d5\u05d2\u05de\u05d4. \u05d4\u05e7\u05d5\u05d3, \u05d4\u05d4\u05e0\u05d7\u05d4 \u05d5\u05d4\u05e0\u05d5\u05e1\u05d7 \u05d9\u05d2\u05d9\u05e2\u05d5 \u05de\u05e0\u05d5\u05e2\u05dd.</span></div>
   <div class="row"><a class="btn2" href="https://antartrade.co.il/promotions" target="_blank" rel="noopener">\u05dc\u05d3\u05e3 \u05d4\u05d4\u05e0\u05d7\u05d5\u05ea${SV(CI.ext,"width:16px;height:16px")}</a></div></div>`;
  document.body.appendChild(ov);requestAnimationFrame(()=>requestAnimationFrame(()=>ov.classList.add("on")));
  const close=()=>{ov.classList.remove("on");setTimeout(()=>ov.remove(),300);document.removeEventListener("keydown",esc);view();};
  const esc=e=>{if(e.key==="Escape")close();};document.addEventListener("keydown",esc);
  ov.addEventListener("click",e=>{const c=e.target.closest("[data-gcopy]");
    if(c){const t=c.dataset.gcopy;try{navigator.clipboard.writeText(t);}catch(_){}c.classList.add("on");c.innerHTML=`${SV(JI.ok)}\u05d4\u05d5\u05e2\u05ea\u05e7`;toast("\u05d4\u05e7\u05d5\u05d3 \u05d4\u05d5\u05e2\u05ea\u05e7",t);return;}
    if(e.target.closest("[data-gcx]")||e.target===ov)close();});}

/* ---- day 90 (08.11): the end of the challenge. In Noam's code there is one challenge per user and the count stops at 90
   with "\u05e1\u05d9\u05d9\u05de\u05ea 90 \u05d9\u05de\u05d9 \u05de\u05e1\u05d7\u05e8"; this is the proposal for what the user sees then: a finish moment, a summary in Noam's order of
   success (not burning, passing, payout), a certificate to share, and a new round that keeps the collection ---- */
SMP.d90=(()=>{const v=JSON.parse(JSON.stringify(SAMPLES.d64));
  Object.assign(v,{day:90,stage:3,reason:"\u05d4\u05d2\u05e2\u05ea \u05dc\u05de\u05e9\u05d9\u05db\u05d4",av:"flex",out:{burned:1,passed:1,payouts:1},compliance:.92,daysToNext:0,startDay:"05.11.2026",endDay:"12.03.2027",
    stats:{trades:162,daysTraded:79,wins:94,losses:68,winRate:.58,rr:1.29,maxLossStreak:3,net:5520,commissions:706}});
  const p=JSON.parse(JSON.stringify(v.periods[1]));Object.assign(p,{i:2,trades:50,stats:{winRate:.62,rr:1.41,tradesPerDay:1.6,net:2540},stop:.98,comp:.97,top:["\u05d9\u05d7\u05e1 \u05e1\u05d9\u05db\u05d5\u05df-\u05e1\u05d9\u05db\u05d5\u05d9 \u05de\u05ea\u05d7\u05ea \u05dc\u05d9\u05e2\u05d3",1],out:{burned:0,passed:0,payouts:1,amt:1850}});
  v.periods.push(p);v.links=v.links.map(l=>l.id==="l4"?{...l}:l);return v;})();
SAMPLES.d90=SMP.d90;
SMP.d34=(()=>{const v=JSON.parse(JSON.stringify(SAMPLES.d23));
  Object.assign(v,{day:34,stage:1,burnDay:18,reason:"\u05d7\u05e9\u05d1\u05d5\u05df \u05e0\u05e9\u05e8\u05e3 \u05d1-30 \u05d9\u05de\u05d9 \u05d4\u05de\u05e1\u05d7\u05e8 \u05d4\u05d0\u05d7\u05e8\u05d5\u05e0\u05d9\u05dd",av:"one",pendingStops:[],missingHypo:0,daysToNext:26,
    stats:{trades:58,daysTraded:28,wins:31,losses:27,winRate:.53,rr:1.06,maxLossStreak:3,net:880,commissions:254},compliance:.85,
    periods:[JSON.parse(JSON.stringify(SAMPLES.d64.periods[0]))]});
  v.links=v.links.map(l=>l.id==="l3"?{...l,ended:"16.11.2026"}:l);return v;})();
SAMPLES.d34=SMP.d34;
/* the journey and the earlier version are off the demo bar (08.11) but kept: open the page with ?chver=new or ?chver=old */
(()=>{const m=location.search.match(/chver=(new|old|game)/);if(m)C.ver=m[1];})();
const pctN=x=>Math.round(x*100)+"%";
function gFinished(v){return v&&v.day>=90;}
function gFinish(v,g){
  const P=v.periods,a=P[0],b=P[P.length-1],o=v.out;
  const res=[[o.burned===0,"\u05dc\u05d0 \u05dc\u05e9\u05e8\u05d5\u05e3 \u05d7\u05e9\u05d1\u05d5\u05df",o.burned===0?"\u05d0\u05e3 \u05d7\u05e9\u05d1\u05d5\u05df \u05dc\u05d0 \u05e0\u05e9\u05e8\u05e3":`${o.burned===1?"\u05d7\u05e9\u05d1\u05d5\u05df \u05d0\u05d7\u05d3 \u05e0\u05e9\u05e8\u05e3":`${o.burned} \u05d7\u05e9\u05d1\u05d5\u05e0\u05d5\u05ea \u05e0\u05e9\u05e8\u05e4\u05d5`}, \u05d5\u05d7\u05d6\u05e8\u05ea`],
    [o.passed>0,"\u05dc\u05e2\u05d1\u05d5\u05e8 \u05de\u05d1\u05d7\u05df \u05de\u05d9\u05de\u05d5\u05df",o.passed>0?`\u05e2\u05d1\u05e8\u05ea ${o.passed===1?"\u05de\u05d1\u05d7\u05df \u05d0\u05d7\u05d3":`${o.passed} \u05de\u05d1\u05d7\u05e0\u05d9\u05dd`}`:"\u05e2\u05d5\u05d3 \u05dc\u05d0"],
    [o.payouts>0,"\u05dc\u05d4\u05d2\u05d9\u05e2 \u05dc\u05de\u05e9\u05d9\u05db\u05d4",o.payouts>0?`\u05de\u05e9\u05d9\u05db\u05d4 \u05e9\u05dc ${usd(b.out.amt||0)}`:"\u05e2\u05d5\u05d3 \u05dc\u05d0"]];
  const cmp=[["\u05e2\u05de\u05d9\u05d3\u05d4 \u05d1\u05db\u05dc\u05dc\u05d9\u05dd",pctN(a.comp),pctN(b.comp)],["\u05d0\u05d7\u05d5\u05d6 \u05d4\u05e6\u05dc\u05d7\u05d4",pctN(a.stats.winRate),pctN(b.stats.winRate)],["R:R \u05d1\u05e4\u05d5\u05e2\u05dc",`1:${a.stats.rr.toFixed(2)}`,`1:${b.stats.rr.toFixed(2)}`],["\u05e2\u05e1\u05e7\u05d0\u05d5\u05ea \u05dc\u05d9\u05d5\u05dd",a.stats.tradesPerDay.toFixed(1),b.stats.tradesPerDay.toFixed(1)]];
  return `<section class="g-fin"><img class="tro" alt="" src="${GI("shield-trophy")}">
   <div class="tx"><small>\u05d0\u05ea\u05d2\u05e8 90 \u00b7 \u05d4\u05d5\u05e9\u05dc\u05dd \u00b7 <span class="num">${v.startDay}</span> \u05e2\u05d3 <span class="num">${v.endDay}</span></small><h2>\u05e1\u05d9\u05d9\u05de\u05ea <span class="num">90</span> \u05d9\u05de\u05d9 \u05de\u05e1\u05d7\u05e8</h2><p>${nums(headline(o))}</p>
    <div class="acts"><button class="btn2" data-gcert>\u05ea\u05e2\u05d5\u05d3\u05ea \u05d4\u05e1\u05d9\u05d5\u05dd \u05e9\u05dc\u05da</button><button class="g-eqb on" data-gagain>\u05dc\u05d4\u05ea\u05d7\u05d9\u05dc \u05d0\u05ea\u05d2\u05e8 \u05d7\u05d3\u05e9</button></div></div></section>
  <section class="blk chj-sec"><div class="bh">${cttl("\u05d0\u05d9\u05da \u05d4\u05dc\u05da","check","mint")}<span class="hint">\u05dc\u05e4\u05d9 \u05d4\u05e1\u05d3\u05e8 \u05e9\u05dc \u05e0\u05d5\u05e2\u05dd: \u05e7\u05d5\u05d3\u05dd \u05dc\u05d0 \u05dc\u05e9\u05e8\u05d5\u05e3, \u05d0\u05d7\u05e8 \u05db\u05da \u05dc\u05e2\u05d1\u05d5\u05e8, \u05d5\u05d0\u05d6 \u05de\u05e9\u05d9\u05db\u05d4</span></div>
   <div class="g-res">${res.map((r,i)=>`<div class="g-r${r[0]?" ok":""}"><span class="n"><span class="num">${i+1}</span></span><div><small>${r[1]}</small><b>${nums(r[2])}</b></div><span class="mk">${SV(r[0]?JI.ok:CI.up)}</span></div>`).join("")}</div></section>
  <section class="blk chj-sec"><div class="bh">${cttl("\u05d0\u05d9\u05e4\u05d4 \u05d4\u05ea\u05d7\u05dc\u05ea, \u05d0\u05d9\u05e4\u05d4 \u05e1\u05d9\u05d9\u05de\u05ea","streak","sky")}<span class="hint">30 \u05d9\u05de\u05d9 \u05d4\u05de\u05e1\u05d7\u05e8 \u05d4\u05e8\u05d0\u05e9\u05d5\u05e0\u05d9\u05dd \u05de\u05d5\u05dc 30 \u05d4\u05d0\u05d7\u05e8\u05d5\u05e0\u05d9\u05dd</span></div>
   <div class="g-cmp">${cmp.map(c=>`<div class="g-c"><small>${c[0]}</small><div class="v"><span class="from num">${c[1]}</span>${SV(CI.left,"width:16px;height:16px")}<b class="num">${c[2]}</b></div></div>`).join("")}</div></section>`;}

/* the finish moment: once, the first time the day-90 screen opens */
function gFinishFx(){
  const v=SMP[C.view],comp=v.compliance||0,stars=comp>=.9?3:comp>=.75?2:1,g=gStats(v);
  const ov=document.createElement("div");ov.className="g-lu fin";ov.dir="rtl";ov.setAttribute("role","dialog");ov.setAttribute("aria-modal","true");
  ov.innerHTML=`<div class="in"><img class="tro" alt="" src="${GI("shield-trophy")}"><small>\u05d0\u05ea\u05d2\u05e8 90 \u05d4\u05d5\u05e9\u05dc\u05dd</small><h2>\u05e1\u05d9\u05d9\u05de\u05ea <span class="num">90</span> \u05d9\u05de\u05d9 \u05de\u05e1\u05d7\u05e8</h2>
   <div class="g-stars">${[0,1,2].map(i=>`<svg viewBox="0 0 24 24" class="${i<stars?"lit":""}">${STAR}</svg>`).join("")}</div>
   <div class="g-lur"><div><b><span class="num">${pctN(comp)}</span></b>\u05e2\u05de\u05d9\u05d3\u05d4 \u05d1\u05db\u05dc\u05dc\u05d9\u05dd</div><div><b><span class="num">${g.pts.toLocaleString("en-US")}</span></b>\u05e0\u05e7\u05d5\u05d3\u05d5\u05ea</div><div><b><span class="num">${GCARDS.filter(c=>c[4](v,g)).length}</span> \u05de\u05ea\u05d5\u05da <span class="num">${GCARDS.length}</span></b>\u05e7\u05dc\u05e4\u05d9\u05dd \u05d1\u05d0\u05d5\u05e1\u05e3</div></div>
   ${C.noam?`<div class="g-lun"><img alt="" src="avatar/noam-flex.webp"><div class="g-bub"><small>\u05d4\u05d2\u05d1\u05d9\u05e2 \u05e9\u05dc\u05da</small>${headline(v.out)}</div></div>`:""}
   <button class="btn2" data-gluok>\u05dc\u05e1\u05d9\u05db\u05d5\u05dd \u05e9\u05dc\u05da</button></div>`;
  document.body.appendChild(ov);requestAnimationFrame(()=>requestAnimationFrame(()=>ov.classList.add("on")));confetti();setTimeout(confetti,900);
  const close=()=>{ov.classList.remove("on");setTimeout(()=>ov.remove(),400);document.removeEventListener("keydown",esc);};
  const esc=e=>{if(e.key==="Escape")close();};document.addEventListener("keydown",esc);
  ov.addEventListener("click",e=>{if(e.target.closest("[data-gluok]"))close();});}

/* the certificate: a card to save or share in the community */
function gCert(){
  const v=SMP[C.view],o=v.out,g=gStats(v);
  const ov=document.createElement("div");ov.className="g-cdlg cert";ov.dir="rtl";ov.setAttribute("role","dialog");ov.setAttribute("aria-modal","true");ov.setAttribute("aria-label","\u05ea\u05e2\u05d5\u05d3\u05ea \u05e1\u05d9\u05d5\u05dd");
  ov.innerHTML=`<div class="box"><button class="x" data-gcx aria-label="\u05e1\u05d2\u05d9\u05e8\u05d4">${SV(JI.x)}</button>
   <div class="g-certc"><img class="lg" alt="AntarTrade" src="assets/logo-white.svg"><img class="tro" alt="" src="${GI("shield-trophy")}">
    <small>\u05ea\u05e2\u05d5\u05d3\u05ea \u05e1\u05d9\u05d5\u05dd</small><h3>\u05d0\u05ea\u05d2\u05e8 <span class="num">90</span> \u05d9\u05de\u05d9 \u05d4\u05de\u05e1\u05d7\u05e8</h3><b class="nm">\u05e8\u05d5\u05e0\u05d9</b>
    <div class="chips"><span>${o.burned===0?"\u05d1\u05dc\u05d9 \u05d7\u05e9\u05d1\u05d5\u05df \u05e9\u05e0\u05e9\u05e8\u05e3":"\u05d7\u05d6\u05e8\u05d4 \u05de\u05e0\u05e4\u05d9\u05dc\u05d4"}</span><span>\u05de\u05d1\u05d7\u05df \u05de\u05d9\u05de\u05d5\u05df</span><span>\u05de\u05e9\u05d9\u05db\u05d4 \u05e8\u05d0\u05e9\u05d5\u05e0\u05d4</span></div>
    <div class="ft"><span><span class="num">${pctN(v.compliance)}</span> \u05e2\u05de\u05d9\u05d3\u05d4 \u05d1\u05db\u05dc\u05dc\u05d9\u05dd</span><span><span class="num">${v.startDay}</span> \u05e2\u05d3 <span class="num">${v.endDay}</span></span></div></div>
   <div class="row"><button class="btn2" data-gsave>\u05dc\u05e9\u05de\u05d5\u05e8 \u05db\u05ea\u05de\u05d5\u05e0\u05d4</button><button class="g-eqb on" data-gshare>\u05dc\u05e9\u05ea\u05e3 \u05d1\u05e7\u05d4\u05d9\u05dc\u05d4</button></div></div>`;
  document.body.appendChild(ov);requestAnimationFrame(()=>requestAnimationFrame(()=>ov.classList.add("on")));
  const close=()=>{ov.classList.remove("on");setTimeout(()=>ov.remove(),300);document.removeEventListener("keydown",esc);};
  const esc=e=>{if(e.key==="Escape")close();};document.addEventListener("keydown",esc);
  ov.addEventListener("click",e=>{if(e.target.closest("[data-gsave]")){toast("\u05d4\u05ea\u05e2\u05d5\u05d3\u05d4 \u05e0\u05e9\u05de\u05e8\u05d4","\u05d1\u05d4\u05d3\u05de\u05d9\u05d4 \u05d6\u05d4 \u05e8\u05e7 \u05e1\u05d9\u05de\u05d5\u05df. \u05d1\u05d9\u05d5\u05de\u05df \u05d4\u05d0\u05de\u05d9\u05ea\u05d9 \u05ea\u05e8\u05d3 \u05ea\u05de\u05d5\u05e0\u05d4");return;}
    if(e.target.closest("[data-gshare]")){toast("\u05e0\u05e4\u05ea\u05d7 \u05e9\u05d9\u05ea\u05d5\u05e3 \u05dc\u05e7\u05d4\u05d9\u05dc\u05d4","\u05d1\u05d4\u05d3\u05de\u05d9\u05d4 \u05d6\u05d4 \u05e8\u05e7 \u05e1\u05d9\u05de\u05d5\u05df");return;}
    if(e.target.closest("[data-gcx]")||e.target===ov)close();});}

/* booking the call with Noam: a preview of the WhatsApp message with the certificate, then WhatsApp opens on Noam's number
   (the one on his course page) with the text filled in. A link cannot attach a file, so the certificate goes as a link */
const NOAM_WA="972509411555";
const WA_IC='<path d="M20.2 11.6a8.3 8.3 0 0 1-12.3 7.3L3.6 20l1.2-4.1a8.3 8.3 0 1 1 15.4-4.3z"/><path d="M9.2 8.4c.3-.3.8-.3 1 .1l.7 1.5c.1.3 0 .6-.2.8l-.5.5c.5 1.1 1.4 2 2.5 2.5l.5-.5c.2-.2.5-.3.8-.2l1.5.7c.4.2.4.7.1 1-.6.7-1.5 1-2.4.7-2.1-.7-3.8-2.4-4.5-4.5-.3-.9 0-1.8.5-2.6z"/>';
function gWaHref(){const v=SMP[C.view],fin=gFinished(v),g=gStats(v),url="antartrade.co.il/challenge/cert/r90";
  const msg=fin?`\u05d4\u05d9\u05d9 \u05e0\u05d5\u05e2\u05dd, \u05e1\u05d9\u05d9\u05de\u05ea\u05d9 \u05d0\u05ea \u05d0\u05ea\u05d2\u05e8 90 \u05d9\u05de\u05d9 \u05d4\u05de\u05e1\u05d7\u05e8! \u05d4\u05e0\u05d4 \u05ea\u05e2\u05d5\u05d3\u05ea \u05d4\u05e1\u05d9\u05d5\u05dd \u05e9\u05dc\u05d9: ${url}\n\u05d0\u05e9\u05de\u05d7 \u05dc\u05e7\u05d1\u05d5\u05e2 \u05e9\u05d9\u05d7\u05d4 \u05d0\u05d9\u05e9\u05d9\u05ea \u05d5\u05dc\u05e2\u05d1\u05d5\u05e8 \u05d9\u05d7\u05d3 \u05e2\u05dc \u05d4\u05d9\u05d5\u05de\u05df.`
    :`\u05d4\u05d9\u05d9 \u05e0\u05d5\u05e2\u05dd, \u05d4\u05d2\u05e2\u05ea\u05d9 \u05dc\u05e8\u05de\u05d4 ${g.lvl} \u05d1\u05d0\u05ea\u05d2\u05e8 90 \u05d9\u05de\u05d9 \u05d4\u05de\u05e1\u05d7\u05e8. \u05d4\u05e0\u05d4 \u05d4\u05d4\u05ea\u05e7\u05d3\u05de\u05d5\u05ea \u05e9\u05dc\u05d9: ${url}\n\u05d0\u05e9\u05de\u05d7 \u05dc\u05e7\u05d1\u05d5\u05e2 \u05e9\u05d9\u05d7\u05d4 \u05d0\u05d9\u05e9\u05d9\u05ea \u05d5\u05dc\u05e2\u05d1\u05d5\u05e8 \u05d9\u05d7\u05d3 \u05e2\u05dc \u05d4\u05d9\u05d5\u05de\u05df.`;
  return `https://wa.me/${NOAM_WA}?text=${encodeURIComponent(msg)}`;}
function gNoamCall(){
  const v=SMP[C.view],fin=gFinished(v),g=gStats(v),url="antartrade.co.il/challenge/cert/r90";
  const msg=fin?`\u05d4\u05d9\u05d9 \u05e0\u05d5\u05e2\u05dd, \u05e1\u05d9\u05d9\u05de\u05ea\u05d9 \u05d0\u05ea \u05d0\u05ea\u05d2\u05e8 90 \u05d9\u05de\u05d9 \u05d4\u05de\u05e1\u05d7\u05e8! \u05d4\u05e0\u05d4 \u05ea\u05e2\u05d5\u05d3\u05ea \u05d4\u05e1\u05d9\u05d5\u05dd \u05e9\u05dc\u05d9: ${url}\n\u05d0\u05e9\u05de\u05d7 \u05dc\u05e7\u05d1\u05d5\u05e2 \u05e9\u05d9\u05d7\u05d4 \u05d0\u05d9\u05e9\u05d9\u05ea \u05d5\u05dc\u05e2\u05d1\u05d5\u05e8 \u05d9\u05d7\u05d3 \u05e2\u05dc \u05d4\u05d9\u05d5\u05de\u05df.`
    :`\u05d4\u05d9\u05d9 \u05e0\u05d5\u05e2\u05dd, \u05d4\u05d2\u05e2\u05ea\u05d9 \u05dc\u05e8\u05de\u05d4 ${g.lvl} \u05d1\u05d0\u05ea\u05d2\u05e8 90 \u05d9\u05de\u05d9 \u05d4\u05de\u05e1\u05d7\u05e8. \u05d4\u05e0\u05d4 \u05d4\u05d4\u05ea\u05e7\u05d3\u05de\u05d5\u05ea \u05e9\u05dc\u05d9: ${url}\n\u05d0\u05e9\u05de\u05d7 \u05dc\u05e7\u05d1\u05d5\u05e2 \u05e9\u05d9\u05d7\u05d4 \u05d0\u05d9\u05e9\u05d9\u05ea \u05d5\u05dc\u05e2\u05d1\u05d5\u05e8 \u05d9\u05d7\u05d3 \u05e2\u05dc \u05d4\u05d9\u05d5\u05de\u05df.`;
  const ov=document.createElement("div");ov.className="g-cdlg call";ov.dir="rtl";ov.setAttribute("role","dialog");ov.setAttribute("aria-modal","true");ov.setAttribute("aria-label","\u05e9\u05d9\u05d7\u05d4 \u05e2\u05dd \u05e0\u05d5\u05e2\u05dd");
  ov.innerHTML=`<div class="box"><button class="x" data-gcx aria-label="\u05e1\u05d2\u05d9\u05e8\u05d4">${SV(JI.x)}</button>
   <span class="nmw"><img alt="" src="avatar/noam-clean.webp"></span>
   <small>\u05e4\u05e8\u05e1 \u05e9\u05dc \u05e8\u05de\u05d4 <span class="num">12</span></small><h3>\u05e9\u05d9\u05d7\u05d4 \u05d0\u05d9\u05e9\u05d9\u05ea \u05e2\u05dd \u05e0\u05d5\u05e2\u05dd</h3>
   <p>\u05e9\u05d5\u05dc\u05d7\u05d9\u05dd \u05dc\u05d5 \u05d4\u05d5\u05d3\u05e2\u05d4 \u05d1\u05d5\u05d5\u05d0\u05d8\u05e1\u05d0\u05e4, \u05d5\u05d4\u05d5\u05d0 \u05d7\u05d5\u05d6\u05e8 \u05d0\u05dc\u05d9\u05da \u05dc\u05e7\u05d1\u05d5\u05e2 \u05d6\u05de\u05df.</p>
   <div class="g-msg"><div class="att"><img alt="" src="${GI("shield-trophy")}"><div><b>${fin?"\u05ea\u05e2\u05d5\u05d3\u05ea \u05e1\u05d9\u05d5\u05dd":"\u05d4\u05d4\u05ea\u05e7\u05d3\u05de\u05d5\u05ea \u05e9\u05dc\u05d9"} \u00b7 \u05d0\u05ea\u05d2\u05e8 <span class="num">90</span></b><span class="en">${url}</span></div></div><p>${msg.replace(url,"").replace(": \n",".\n").replace(/\n/g,"<br>")}</p></div>
   <div class="row"><a class="btn2" data-gwa href="https://wa.me/${NOAM_WA}?text=${encodeURIComponent(msg)}" target="_blank" rel="noopener">\u05dc\u05e9\u05dc\u05d5\u05d7 \u05dc\u05e0\u05d5\u05e2\u05dd \u05d1\u05d5\u05d5\u05d0\u05d8\u05e1\u05d0\u05e4</a></div>
   <span class="g-cnote">${SV(CI.ext)}<span>\u05d5\u05d5\u05d0\u05d8\u05e1\u05d0\u05e4 \u05d9\u05d9\u05e4\u05ea\u05d7 \u05e2\u05dd \u05d4\u05d4\u05d5\u05d3\u05e2\u05d4 \u05de\u05d5\u05db\u05e0\u05d4, \u05d5\u05e6\u05e8\u05d9\u05da \u05e8\u05e7 \u05dc\u05dc\u05d7\u05d5\u05e5 \u05e2\u05dc \u05e9\u05dc\u05d9\u05d7\u05d4</span></span></div>`;
  document.body.appendChild(ov);requestAnimationFrame(()=>requestAnimationFrame(()=>ov.classList.add("on")));
  const close=()=>{ov.classList.remove("on");setTimeout(()=>ov.remove(),300);document.removeEventListener("keydown",esc);};
  const esc=e=>{if(e.key==="Escape")close();};document.addEventListener("keydown",esc);
  ov.addEventListener("click",e=>{if(e.target.closest("[data-gwa]")){setTimeout(close,300);return;}if(e.target.closest("[data-gcx]")||e.target===ov)close();});}

/* the blue road runs exactly up to today's node */
function gRoad(){document.querySelectorAll(".g-map").forEach(m=>{const p=m.querySelector(".g-done"),t=m.querySelector(".g-node.n-t");if(!p||!t)return;
  const x=400-parseFloat(t.style.right)*4,y=parseFloat(t.style.top)*2.7,L=p.getTotalLength();let best=0,bd=1e9;
  for(let i=0;i<=240;i++){const q=p.getPointAtLength(L*i/240),d=(q.x-x)**2+(q.y-y)**2;if(d<bd){bd=d;best=L*i/240;}}
  p.style.strokeDasharray=best+" "+(L+10);});}

/* the chest leaves its card, opens in the middle of the screen and pays out */
function gOpenChest(img){
  const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches,done=()=>{C.gPrevPts={view:C.view,pts:gStats(SMP[C.view]).pts};C.gChest=C.view;view();toast("\u05d4\u05ea\u05d9\u05d1\u05d4 \u05e0\u05e4\u05ea\u05d7\u05d4","\u05e7\u05d9\u05d1\u05dc\u05ea 45 \u05e0\u05e7\u05d5\u05d3\u05d5\u05ea \u05d5\u05d9\u05d5\u05dd \u05dc\u05e8\u05e6\u05e3",false,true);};
  if(reduce||!img){done();return;}
  const r=img.getBoundingClientRect(),W=innerWidth<760?240:320,ov=document.createElement("div");ov.className="g-ov";ov.dir="rtl";
  ov.innerHTML=`<div class="g-glow"></div><img class="g-big" alt="" src="${GI("chest")}"><div class="g-coins"></div><div class="g-prize"><b>\u05e7\u05d9\u05d1\u05dc\u05ea <span class="num">45</span> \u05e0\u05e7\u05d5\u05d3\u05d5\u05ea</b><p>\u05d5\u05e2\u05d5\u05d3 \u05d9\u05d5\u05dd \u05dc\u05e8\u05e6\u05e3. \u05e0\u05ea\u05e8\u05d0\u05d4 \u05de\u05d7\u05e8.</p><button class="btn2" data-gprize>\u05dc\u05d0\u05e1\u05d5\u05e3</button></div>`;
  document.body.appendChild(ov);img.style.visibility="hidden";
  const big=ov.querySelector(".g-big");Object.assign(big.style,{left:r.left+"px",top:r.top+"px",width:r.width+"px"});
  requestAnimationFrame(()=>requestAnimationFrame(()=>{ov.classList.add("on");Object.assign(big.style,{left:(innerWidth-W)/2+"px",top:(innerHeight/2-W*.62)+"px",width:W+"px"});}));
  setTimeout(()=>big.classList.add("wob"),800);
  setTimeout(()=>{big.classList.remove("wob");big.src=GI("chest-open");ov.classList.add("open");
    const box=ov.querySelector(".g-coins"),cx=innerWidth/2,cy=innerHeight/2-W*.25;
    for(let i=0;i<22;i++){const e=document.createElement("i");if(i%3===2)e.className="s";e.style.left=cx+"px";e.style.top=cy+"px";box.appendChild(e);
      const a=-Math.PI*(.1+Math.random()*.8),d=140+Math.random()*200;
      e.animate([{transform:"translate(0,0) scale(.3)",opacity:1},{transform:`translate(${Math.cos(a)*d}px,${Math.sin(a)*d}px) scale(1)`,opacity:1,offset:.55},{transform:`translate(${Math.cos(a)*d*1.1}px,${Math.sin(a)*d+160}px) scale(.8)`,opacity:0}],{duration:1500+Math.random()*500,easing:"cubic-bezier(.2,.7,.4,1)",fill:"forwards"});}},1750);
  let closed=false;const close=()=>{if(closed)return;closed=true;ov.classList.remove("on");setTimeout(()=>{ov.remove();done();},350);};
  ov.addEventListener("click",e=>{if(e.target.closest("[data-gprize]"))close();});setTimeout(close,6500);}

/* finishing a world: full screen, the gate's shield, stars by clean days, Noam opens the next world */
function gLevelUp(){
  const v=SMP[C.view];if(!v)return;const n=v.stage>1?v.stage-1:1,g=gStats(v),comp=v.compliance||0,stars=comp>=.9?3:comp>=.75?2:1;
  const img=n===1?"shield-check":n===2?"shield-target":"shield-trophy",cleanW=Math.round(comp*30);
  const ov=document.createElement("div");ov.className="g-lu";ov.dir="rtl";ov.setAttribute("role","dialog");ov.setAttribute("aria-modal","true");
  ov.innerHTML=`<div class="in"><img class="tro" alt="" src="${GI(img)}"><small>\u05e9\u05dc\u05d1 ${n} \u05d4\u05d5\u05e9\u05dc\u05dd</small><h2>${n===1?`\u05e9\u05e8\u05d3\u05ea <span class="num">30</span> \u05d9\u05d5\u05dd`:n===2?"\u05e2\u05d1\u05e8\u05ea \u05d0\u05ea \u05de\u05d1\u05d7\u05df \u05d4\u05de\u05d9\u05de\u05d5\u05df":"\u05d4\u05d2\u05e2\u05ea \u05dc\u05de\u05e9\u05d9\u05db\u05d4"}</h2>
   <div class="g-stars">${[0,1,2].map(i=>`<svg viewBox="0 0 24 24" class="${i<stars?"lit":""}">${STAR}</svg>`).join("")}</div>
   <div class="g-lur"><div><b><span class="num">${cleanW}</span> \u05de\u05ea\u05d5\u05da <span class="num">30</span></b>\u05d9\u05de\u05d9\u05dd \u05d1\u05dc\u05d9 \u05d4\u05e4\u05e8\u05d4</div><div><b>\u05e8\u05de\u05d4 <span class="num">${g.lvl+1}</span></b>\u05e2\u05dc\u05d9\u05ea \u05e8\u05de\u05d4</div><div><b>\u05db\u05e8\u05d8\u05d9\u05e1 \u05db\u05d5\u05d7 \u05d7\u05d3\u05e9</b>\u05d0\u05d7\u05e8\u05d9 \u05ea\u05de\u05d5\u05e0\u05ea \u05d4\u05de\u05e6\u05d1</div></div>
   ${C.noam?`<div class="g-lun"><img alt="" src="avatar/noam-flex.webp"><div class="g-bub"><small>${n<3?`\u05e9\u05dc\u05d1 ${n+1} \u05e0\u05e4\u05ea\u05d7`:"\u05d4\u05d2\u05d1\u05d9\u05e2 \u05e9\u05dc\u05da"}</small>${n<3?`\u05e2\u05d1\u05e8\u05ea \u05d0\u05ea ${STAGES[n].title}. \u05e2\u05db\u05e9\u05d9\u05d5 \u05de\u05ea\u05d7\u05d9\u05dc\u05d9\u05dd \u05d0\u05ea ${STAGES[n+1].title}: ${STAGES[n+1].goal}.`:"\u05e2\u05e9\u05d9\u05ea \u05d0\u05ea \u05d6\u05d4. \u05e2\u05db\u05e9\u05d9\u05d5 \u05dc\u05e9\u05de\u05d5\u05e8 \u05e2\u05dc \u05d4\u05d7\u05e9\u05d1\u05d5\u05df \u05d5\u05dc\u05d7\u05d6\u05d5\u05e8 \u05e2\u05dc \u05d6\u05d4."}</div></div>`:""}
   <button class="btn2" data-gluok>${n<3?"\u05dc\u05e9\u05dc\u05d1 \u05d4\u05d1\u05d0":"\u05e1\u05d9\u05d5\u05dd"}</button></div>`;
  document.body.appendChild(ov);requestAnimationFrame(()=>requestAnimationFrame(()=>ov.classList.add("on")));confetti();
  const close=()=>{ov.classList.remove("on");setTimeout(()=>ov.remove(),400);document.removeEventListener("keydown",esc);};
  const esc=e=>{if(e.key==="Escape")close();};document.addEventListener("keydown",esc);
  ov.addEventListener("click",e=>{if(e.target.closest("[data-gluok]"))close();});}

/* confetti in the site's colours, once, on joining */
function confetti(){
  if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;
  const c=document.createElement("canvas");c.className="ch-confetti";document.body.appendChild(c);
  const x=c.getContext("2d"),dpr=devicePixelRatio||1,W=innerWidth,H=innerHeight;c.width=W*dpr;c.height=H*dpr;x.scale(dpr,dpr);
  const cols=["#7DC6FF","#4F6BFF","#f7c65a","#3fd8c2","#61b1f2","#ffffff"];
  const P=Array.from({length:150},()=>({x:W/2+(Math.random()-.5)*W*.3,y:H*.35,vx:(Math.random()-.5)*14,vy:-Math.random()*14-4,r:Math.random()*Math.PI,vr:(Math.random()-.5)*.3,w:6+Math.random()*6,h:3+Math.random()*4,c:cols[Math.floor(Math.random()*cols.length)]}));
  let t=0;(function f(){x.clearRect(0,0,W,H);P.forEach(p=>{p.vy+=.35;p.vx*=.99;p.x+=p.vx;p.y+=p.vy;p.r+=p.vr;x.save();x.translate(p.x,p.y);x.rotate(p.r);x.globalAlpha=Math.max(0,1-t/140);x.fillStyle=p.c;x.fillRect(-p.w/2,-p.h/2,p.w,p.h);x.restore();});if(++t<140)requestAnimationFrame(f);else c.remove();})();
}

/* ---- page ---- */
function view(){
  const joined=C.view!=="join";
  /* the menu's own trophy after the title, in the menu's sun */
  $("pgTitle").innerHTML=`\u05d0\u05ea\u05d2\u05e8 90 \u05d9\u05de\u05d9 \u05d4\u05de\u05e1\u05d7\u05e8<span class="ch-trophy" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 4h8v5a4 4 0 0 1-8 0V4z"/><path d="M8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4M12 13v4M9 20h6"/></svg></span>`;
  $("pgSub").textContent=joined?"\u05d4\u05de\u05e1\u05dc\u05d5\u05dc \u05e9\u05dc\u05da: \u05dc\u05e9\u05e8\u05d5\u05d3, \u05dc\u05e2\u05d1\u05d5\u05e8 \u05de\u05d1\u05d7\u05df \u05d5\u05dc\u05d4\u05d2\u05d9\u05e2 \u05dc\u05de\u05e9\u05d9\u05db\u05d4 \u05e8\u05d0\u05e9\u05d5\u05e0\u05d4":(C.noam?"":"\u05dc\u05e9\u05e8\u05d5\u05d3, \u05dc\u05e2\u05d1\u05d5\u05e8 \u05de\u05d1\u05d7\u05df \u05de\u05d9\u05de\u05d5\u05df \u05d5\u05dc\u05d4\u05d2\u05d9\u05e2 \u05dc\u05de\u05e9\u05d9\u05db\u05d4 \u05e8\u05d0\u05e9\u05d5\u05e0\u05d4. \u05db\u05dc \u05d0\u05d7\u05d3 \u05de\u05d5\u05dc \u05e2\u05e6\u05de\u05d5");$("pgSub").hidden=!joined&&(C.noam||C.ver!=="old");
  $("content").innerHTML=C.ver==="old"?(joined?dashView():joinView()):C.ver==="game"?(joined?gDash():gJoin()):(joined?jDash():jJoin());
  if(!joined&&!C.anim)setTimeout(()=>{C.anim=true;},2600);
  let wh=document.getElementById("chjWizHost");if(!wh){wh=document.createElement("div");wh.id="chjWizHost";wh.dir="rtl";document.body.appendChild(wh);}
  wh.innerHTML=C.ver!=="old"&&!joined?jWizard():"";enhanceForms(wh);if(typeof robotoDigits==="function")robotoDigits(wh);
  enhanceForms($("content"));if(typeof robotoDigits==="function")robotoDigits($("content"));
  document.querySelectorAll("[data-chv]").forEach(b=>b.classList.toggle("on",b.dataset.chv===C.view));
  document.querySelectorAll("[data-chn]").forEach(b=>b.classList.toggle("on",(b.dataset.chn==="on")===C.noam));
  document.querySelectorAll("[data-chver]").forEach(b=>b.classList.toggle("on",b.dataset.chver===C.ver));
  document.body.classList.toggle("chj-lock",!!C.wiz);
  if(C.ver==="game"&&joined){gRoad();gCount();if(C.view==="d90"&&C.gFin!=="d90"){C.gFin="d90";setTimeout(gFinishFx,350);}}
}
window.challengeView=view;

/* mock switch: before joining, day 23, day 64; with or without Noam */
const bar=document.createElement("div");bar.className="demo demo3 chonly";bar.dir="rtl";bar.setAttribute("aria-label","\u05de\u05e6\u05d1 \u05d4\u05d0\u05ea\u05d2\u05e8 \u05d1\u05d4\u05d3\u05de\u05d9\u05d4");
bar.innerHTML=`<small>\u05d0\u05ea\u05d2\u05e8:</small><button data-chv="join">\u05dc\u05e4\u05e0\u05d9 \u05d4\u05e6\u05d8\u05e8\u05e4\u05d5\u05ea</button><button data-chv="d23">\u05d9\u05d5\u05dd 23</button><button data-chv="d34">\u05d9\u05d5\u05dd 34</button><button data-chv="d64">\u05d9\u05d5\u05dd 64</button><button data-chv="d90">\u05d9\u05d5\u05dd 90</button><span class="sep"></span><button data-chn="on">\u05e2\u05dd \u05e0\u05d5\u05e2\u05dd</button><button data-chn="off">\u05d1\u05dc\u05d9 \u05e0\u05d5\u05e2\u05dd</button><span class="sep"></span><button data-glvl>\u05e8\u05d2\u05e2 \u05e2\u05dc\u05d9\u05d9\u05ea \u05e9\u05dc\u05d1</button><button data-gburn>\u05dc\u05d1 \u05e0\u05e9\u05d1\u05e8</button>`;
document.body.appendChild(bar);

document.addEventListener("click",e=>{
  if(S.page!=="challenge")return;const q=s=>e.target.closest(s);let x;
  if(x=q("[data-chver]")){C.ver=x.dataset.chver;C.wiz=0;C.more=null;view();scrollTo(0,0);return;}
  if(x=q("[data-glvl]")){if(C.view==="join"){toast("\u05e7\u05d5\u05d3\u05dd \u05de\u05e6\u05d8\u05e8\u05e4\u05d9\u05dd","\u05d1\u05d7\u05e8\u05d9 \u05d9\u05d5\u05dd 23 \u05d0\u05d5 \u05d9\u05d5\u05dd 64 \u05d1\u05e4\u05e1 \u05d4\u05d4\u05d3\u05de\u05d9\u05d4");return;}const gw=gWait(SMP[C.view]);if(gw){toast("\u05d4\u05e9\u05e2\u05e8 \u05e2\u05d5\u05d3 \u05e1\u05d2\u05d5\u05e8",gw.gate===1?"\u05e2\u05d5\u05d3 "+gw.left+" \u05d9\u05de\u05d9 \u05de\u05e1\u05d7\u05e8 \u05d1\u05dc\u05d9 \u05d7\u05e9\u05d1\u05d5\u05df \u05e9\u05e0\u05e9\u05e8\u05e3, \u05d5\u05d4\u05e9\u05e2\u05e8 \u05e0\u05e4\u05ea\u05d7":"\u05d4\u05e9\u05e2\u05e8 \u05e0\u05e4\u05ea\u05d7 \u05db\u05e9\u05e2\u05d5\u05d1\u05e8\u05d9\u05dd \u05de\u05d1\u05d7\u05df \u05de\u05d9\u05de\u05d5\u05df");return;}gLevelUp();return;}
  if(x=q("[data-gchest]")){gOpenChest(x);return;}
  if(x=q("[data-gburn]")){const v=SMP[C.view];if(!v||C.view==="join"){toast("\u05e7\u05d5\u05d3\u05dd \u05de\u05e6\u05d8\u05e8\u05e4\u05d9\u05dd","\u05d1\u05d7\u05e8\u05d9 \u05d9\u05d5\u05dd 23 \u05d0\u05d5 \u05d9\u05d5\u05dd 64 \u05d1\u05e4\u05e1 \u05d4\u05d4\u05d3\u05de\u05d9\u05d4");return;}const l=v.links.find(l=>l.status==="active");if(!l){toast("\u05d0\u05d9\u05df \u05d7\u05e9\u05d1\u05d5\u05df \u05e4\u05e2\u05d9\u05dc");return;}l.status="failed";l.ended="05.11.2026";v.out.burned++;gHeartFx(l.id,"break");return;}
  if(x=q("[data-gcert]")){gCert();return;}
  if(x=q("[data-gagain]")){C.round++;C.gFin=null;C.view="join";C.wiz=0;C.more=null;C.gSay=null;view();scrollTo(0,0);toast("\u05e1\u05d1\u05d1 "+C.round+" \u05de\u05ea\u05d7\u05d9\u05dc","\u05d4\u05d0\u05d5\u05e1\u05e3 \u05d5\u05d4\u05e8\u05de\u05d4 \u05e9\u05dc\u05da \u05e0\u05e9\u05de\u05e8\u05d9\u05dd. \u05d4\u05de\u05e4\u05d4 \u05de\u05ea\u05d7\u05d9\u05dc\u05d4 \u05de\u05d9\u05d5\u05dd 1.");return;}
  if(x=q("[data-gcode]")){gClaim(+x.dataset.gcode);return;}
  if(x=q("[data-gnoamrev]")){return;}
  if(x=q("[data-geq]")){const id=x.dataset.geq,eq=C.gEq[C.view]||(C.gEq[C.view]=[]),i=eq.indexOf(id);
    if(i>=0){eq.splice(i,1);view();toast("\u05d4\u05db\u05e8\u05d8\u05d9\u05e1 \u05d4\u05d5\u05e1\u05e8 \u05de\u05d4\u05e6\u05d9\u05d5\u05d3");return;}
    if(eq.length>=3){toast("\u05e9\u05d2\u05d9\u05d0\u05d4","\u05d9\u05e9 \u05de\u05e7\u05d5\u05dd \u05dc\u05e9\u05dc\u05d5\u05e9\u05d4 \u05db\u05e8\u05d8\u05d9\u05e1\u05d9\u05dd. \u05de\u05e1\u05d9\u05e8\u05d9\u05dd \u05d0\u05d7\u05d3 \u05e7\u05d5\u05d3\u05dd",true);return;}
    eq.push(id);if(x.dataset.gtarget)C.adopted=true;view();toast("\u05d4\u05db\u05e8\u05d8\u05d9\u05e1 \u05e0\u05db\u05e0\u05e1 \u05dc\u05e6\u05d9\u05d5\u05d3",x.dataset.gtarget?`\u05d9\u05e2\u05d3 1:${x.dataset.gtarget} \u05e0\u05e7\u05d1\u05e2. \u05d4\u05d5\u05d0 \u05e0\u05d1\u05d3\u05e7 \u05de\u05d4\u05d9\u05d5\u05dd, \u05d5\u05e0\u05e8\u05d0\u05d4 \u05d0\u05d9\u05da \u05d4\u05dc\u05da \u05d1\u05ea\u05de\u05d5\u05e0\u05ea \u05d4\u05de\u05e6\u05d1 \u05d4\u05d1\u05d0\u05d4.`:"\u05e0\u05d1\u05d3\u05d5\u05e7 \u05d0\u05d9\u05da \u05d4\u05dc\u05da \u05d1\u05ea\u05de\u05d5\u05e0\u05ea \u05d4\u05de\u05e6\u05d1 \u05d4\u05d1\u05d0\u05d4.");return;}
  if(x=q("[data-chwiz]")){C.wiz=+x.dataset.chwiz;view();return;}
  if(x=q("[data-chstep]")){if(x.disabled)return;C.wiz=+x.dataset.chstep;view();const b=document.querySelector(".chj-wbox");if(b)b.scrollTop=0;return;}
  if(x=q("[data-chmore]")){C.more=C.more===x.dataset.chmore?null:x.dataset.chmore;view();return;}
  if(x=q("[data-chv]")){C.gSay=null;C.view=x.dataset.chv;C.wiz=0;C.more=null;C.showAll=false;C.menu=null;view();scrollTo(0,0);return;}
  if(x=q("[data-chn]")){C.noam=x.dataset.chn==="on";view();return;}
  if(x=q("[data-chjump]")){e.preventDefault();const t=document.getElementById("ch-step"+x.dataset.chjump);if(t)t.scrollIntoView({behavior:"smooth",block:"start"});return;}
  if(x=q("[data-chall]")){C.showAll=true;view();return;}
  if(x=q("[data-chold]")){C.oldOpen=!C.oldOpen;view();return;}
  if(x=q("[data-chmenu]")){e.stopPropagation();C.menu=C.menu===x.dataset.chmenu?null:x.dataset.chmenu;view();return;}
  if(x=q("[data-chset]")){const [id,st]=x.dataset.chset.split(":"),l=SMP[C.view].links.find(l=>l.id===id),was=l.status;l.status=st;if(st==="failed")l.ended="05.11.2026";C.menu=null;if(C.ver==="game"&&(st==="failed"||was==="failed"&&st==="active")){gHeartFx(id,st==="failed"?"break":"born");return;}view();toast(st==="failed"?"\u05e0\u05e9\u05de\u05e8. \u05d4\u05d4\u05d9\u05e1\u05d8\u05d5\u05e8\u05d9\u05d4 \u05e9\u05dc \u05d4\u05d7\u05e9\u05d1\u05d5\u05df \u05e0\u05e9\u05d0\u05e8\u05ea \u05d1\u05d0\u05ea\u05d2\u05e8":"\u05d4\u05e1\u05d8\u05d8\u05d5\u05e1 \u05e2\u05d5\u05d3\u05db\u05df");return;}
  if(x=q("[data-chsug]")){const l=SMP[C.view].links.find(l=>l.id===x.dataset.chsug);l.status=l.sug.status;l.ended=l.sug.day;delete l.sug;if(l.status==="passed")SMP[C.view].out.passed++;view();toast("\u05d4\u05e1\u05d8\u05d8\u05d5\u05e1 \u05e2\u05d5\u05d3\u05db\u05df");return;}
  if(x=q("[data-chlink]")){const s=$("chLink"),n=s&&s.value;if(!n){toast("\u05e9\u05d2\u05d9\u05d0\u05d4","\u05d1\u05d7\u05e8 \u05d7\u05e9\u05d1\u05d5\u05df",true);return;}const v=SMP[C.view];const nid="n"+Date.now();v.links.push({id:nid,name:n,phase:"evaluation",status:"active"});v.unlinked=v.unlinked.filter(u=>u!==n);if(C.ver==="game"){gHeartFx(nid,"born");return;}view();toast("\u05d4\u05d7\u05e9\u05d1\u05d5\u05df \u05e0\u05d5\u05e1\u05e3 \u05dc\u05d0\u05ea\u05d2\u05e8");return;}
  if(x=q("[data-chnew]")){newAccDlg();const b=$("dlgBody").querySelector("h2")||$("dlg2Body").querySelector("h2");if(b){b.textContent="\u05d7\u05e9\u05d1\u05d5\u05df \u05d7\u05d3\u05e9 \u05dc\u05d0\u05ea\u05d2\u05e8";b.insertAdjacentHTML("afterend",`<div class="ch-disc" style="margin:14px 0 4px">${SV(CI.tag)}<span>${DISCOUNT}</span><a href="https://antartrade.co.il/promotions" target="_blank" rel="noopener">\u05dc\u05d3\u05e3 \u05d4\u05d4\u05e0\u05d7\u05d5\u05ea${SV(CI.ext,"width:14px;height:14px")}</a></div>`);}return;}
  if(x=q("[data-chadopt]")){C.adopted=true;view();toast(`\u05d9\u05e2\u05d3 1:${x.dataset.chadopt} \u05e0\u05e7\u05d1\u05e2`,"\u05d4\u05d5\u05d0 \u05e0\u05d1\u05d3\u05e7 \u05de\u05d4\u05d9\u05d5\u05dd, \u05d5\u05e0\u05e8\u05d0\u05d4 \u05d0\u05d9\u05da \u05d4\u05dc\u05da \u05d1\u05ea\u05de\u05d5\u05e0\u05ea \u05d4\u05de\u05e6\u05d1 \u05d4\u05d1\u05d0\u05d4.");return;}
  if(x=q("[data-chjoin]")){if(x.disabled)return;C.wiz=0;C.view="d0";SMP.d0={...JSON.parse(JSON.stringify(SAMPLES.d23)),day:0,av:"before",out:{burned:0,passed:0,payouts:0},stats:{trades:0,daysTraded:0,wins:0,losses:0,winRate:null,rr:null,maxLossStreak:0,net:0,commissions:0},compliance:null,pendingStops:[],missingHypo:0,daysToNext:30,violations:[],
    links:ACCOUNTS.filter(a=>C.sel.includes(a.id)).map(a=>({id:a.id,name:a.name,phase:a.phase==="funded"?"funded":"evaluation",status:"active"})),unlinked:ACCOUNTS.filter(a=>!C.sel.includes(a.id)&&a.state!=="blown").map(a=>a.name)};
    if(SMP.d0.links.some(l=>l.phase==="funded")){SMP.d0.stage=3;SMP.d0.reason="\u05d9\u05e9 \u05d7\u05e9\u05d1\u05d5\u05df \u05de\u05de\u05d5\u05de\u05df \u05e4\u05e2\u05d9\u05dc";}
    view();scrollTo(0,0);toast("\u05d4\u05e6\u05d8\u05e8\u05e4\u05ea \u05dc\u05d0\u05ea\u05d2\u05e8!","\u05d4\u05d9\u05d5\u05dd \u05d4\u05d5\u05d0 \u05d9\u05d5\u05dd 1. \u05d1\u05d4\u05e6\u05dc\u05d7\u05d4.",false,true);confetti();return;}
  if(C.menu&&!q(".ch-menu")){C.menu=null;view();}
},true);
document.addEventListener("change",e=>{
  if(S.page!=="challenge")return;const t=e.target;
  if(t.dataset.chsel){C.sel=t.checked?[...C.sel,t.dataset.chsel]:C.sel.filter(i=>i!==t.dataset.chsel);view();}
  else if(t.id==="chOk"){C.ok=t.checked;view();}
  else if(t.id==="chMaxT"){C.maxT=t.value;view();}
  else if(t.id==="chMaxL"){C.maxL=t.value;view();}
});
document.addEventListener("input",e=>{
  if(S.page!=="challenge"||e.target.id!=="chRisk")return;C.risk=e.target.value;
  const pos=e.target.selectionStart;view();const r=$("chRisk");if(r){r.focus();try{r.setSelectionRange(pos,pos);}catch(_){}}
});
document.addEventListener("keydown",e=>{if(S.page==="challenge"&&C.wiz&&e.key==="Escape"){C.wiz=0;view();}if(S.page==="challenge"&&(e.key==="Enter"||e.key===" ")&&e.target.matches&&e.target.matches("[data-gchest]")){e.preventDefault();gOpenChest(e.target);}});
if(S.page==="challenge")view();
})();
