/* Shared view (/shared/:token) in the journal mock: the page a mentor opens from the student's share link.
   Copy word for word from Noam's SharedView.tsx; the blocks are the dashboard's own (kpis, advanced, calendar + its day window,
   equity) and the trade log's table, so the mentor sees the journal in the same language. Sample data = the mock's TRADES.
   Two share modes as on /mentor: "stats_only" (KPIs, advanced, equity) and "full" (+ account filter, calendar, trades).
   Hooks itself in like mentor.js: PAGES.shared, render()/setPage() chained, body.pg-shared, #shared opens it,
   and mock-only buttons at the end of the .demo bar. Noam's 90-day challenge block is left out for now: that page is being rethought. */
(function(){
const SV=(p,s)=>`<svg class="i" viewBox="0 0 24 24"${s?` style="${s}"`:""}>${p}</svg>`;
const FILTER='<path d="M4 6h16M7 12h10M10 18h4"/>',ALERTI='<path d="M12 4l9 16H3z"/><path d="M12 10v4M12 17h.01"/>';
try{PAGES.shared=["",""];}catch(e){}

/* the mock's own state for this page: share mode and link state (mock only), and the dashboard filter it borrows */
const V={mode:"full",link:"ok",saved:null,all:false};
const NAME="רוני אליהו";

function head(){
  let h=document.getElementById("svHead");
  if(!h){h=document.createElement("div");h.id="svHead";const k=document.getElementById("kpis");k.parentNode.insertBefore(h,k);}
  return h;
}
function filterBox(){
  if(V.mode!=="full"||S.mode==="empty"||ACCOUNTS.length<2)return "";
  const cur=S.accs.length===1?S.accs[0]:"all";
  return `<div class="sv-filter"><span class="l">${SV(FILTER)}סנן לפי חשבון:</span><div class="fld"><select class="inp" id="svAcc"><option value="all" ${cur==="all"?"selected":""}>כל החשבונות</option>${ACCOUNTS.map(a=>`<option value="${a.id}" ${cur===a.id?"selected":""}>${a.name}</option>`).join("")}</select></div></div>`;
}
function table(t){
  /* newest first; the first 20, then his own "הצג את כל {n}" pattern (from the challenge page) for the rest */
  const sorted=[...t].sort((a,b)=>b.exit-a.exit),rows=V.all?sorted:sorted.slice(0,20);
  const more=sorted.length>20&&!V.all?`<button class="btn3 sv-more" data-svall>הצג את כל ${sorted.length} העסקאות</button>`:"";
  return `<section class="blk sv-tbl"><div class="bh">${ttl("עסקאות","list","mint")}</div><div class="tbl-wrap logt"><table class="tbl log"><thead><tr><th>נכס</th><th>חשבון</th><th>כיוון</th><th>כניסה</th><th>יציאה</th><th><span class="en">P&amp;L</span></th><th>דירוג</th><th>תאריך</th></tr></thead><tbody>
  ${rows.map(x=>`<tr><td class="sym">${x.sym}</td><td class="dim">${accName(x.acc)}</td><td><span class="pill ${x.dir===1?"lg":"sh"}">${x.dir===1?"לונג":"שורט"}</span></td><td>${fmt(x.ep)}</td><td>${fmt(x.xp)}</td><td class="${cls(x.pnl)}" style="font-weight:600">${money(x.pnl)}</td><td>${x.grade?`<span class="gr ${x.grade}">${x.grade}</span>`:""}</td><td class="dim">${fdt(x.exit)}</td></tr>`).join("")}
  </tbody></table></div>
  <div class="lcards">${rows.map(x=>`<div class="lc"><div class="bd"><div class="r"><span><span class="sym">${x.sym}</span><span class="pill ${x.dir===1?"lg":"sh"}">${x.dir===1?"לונג":"שורט"}</span>${x.grade?`<span class="gr ${x.grade}">${x.grade}</span>`:""}</span><b class="${cls(x.pnl)}">${money(x.pnl)}</b></div><div class="r meta"><span>${fdt(x.exit)}</span><span>${accName(x.acc)}</span></div></div></div>`).join("")}</div>${more}</section>`;
}
const foot=`<p class="sv-foot">מופעל באמצעות <a class="en" href="https://antartrade.co.il" target="_blank" rel="noopener">AntarTrade</a></p>`;

function view(){
  const H=head(),C=$("content"),K=$("kpis");
  document.querySelectorAll(".demo [data-svmode]").forEach(b=>b.classList.toggle("on",V.link==="ok"&&b.dataset.svmode===V.mode));
  const bb=document.querySelector(".demo [data-svbad]");if(bb)bb.classList.toggle("on",V.link==="bad");
  const bar=`<div class="sv-bar"><img src="assets/logo-white.svg" alt="AntarTrade"><p>צפייה בביצועים של <b>${NAME}</b></p></div>`;
  /* loading and the broken link: no header, as on his page; his English server text under the headline is left out */
  if(S.net==="loading"){H.innerHTML="";K.hidden=true;C.innerHTML=`<div class="sv-state"><span class="sv-load"><span class="spin"></span>טוען נתונים...</span></div>`;return;}
  if(V.link==="bad"||S.net==="down"){H.innerHTML="";K.hidden=true;
    C.innerHTML=`<div class="sv-state"><img class="sv-logo" src="assets/logo-white.svg" alt="AntarTrade"><span class="ic">${SV(ALERTI)}</span><p class="t">הלינק לא תקין או שהוא בוטל</p>${S.net==="down"?'<p class="d">שגיאה בטעינת הנתונים</p>':""}</div>`;return;}
  K.hidden=false;
  H.innerHTML=bar+filterBox();
  try{enhanceForms(H);}catch(e){}
  const t=filtered();kpis(t);
  let h="";
  if(t.length){
    h+=advanced(t);
    if(V.mode==="full")h+=calendar(t);
    h+=`<section class="blk"><div class="bh">${ttl("עקומת הון","eq","sky")}</div>${equity(t)}</section>`;
    if(V.mode==="full")h+=table(t);
  }
  C.innerHTML=h+foot;
  try{bindEquity();}catch(e){}
  try{robotoDigits(H);robotoDigits(C);}catch(e){}
}
window.sharedView=view;

document.addEventListener("change",e=>{if(S.page!=="shared"||e.target.id!=="svAcc")return;S.accs=e.target.value==="all"?[]:[e.target.value];V.all=false;render();});
document.addEventListener("click",e=>{
  const q=s=>e.target.closest(s);let x;
  if(q("[data-svgo]")){e.preventDefault();setPage("shared");return;}
  if(S.page!=="shared")return;
  if(x=q("[data-svmode]")){V.mode=x.dataset.svmode;V.link="ok";if(V.mode!=="full")S.accs=[];render();return;}
  if(q("[data-svbad]")){V.link=V.link==="bad"?"ok":"bad";render();return;}
  if(q("[data-svall]")){V.all=true;render();return;}
});

/* mock-only switches at the end of the demo bar: a way in from every page, and on this page the two share modes, a broken link and a way back */
(()=>{const d=document.querySelector(".demo");if(!d||d.querySelector("[data-svgo]"))return;
  d.insertAdjacentHTML("beforeend",'<span class="sep sv-out"></span><button class="sv-out" data-svgo>תצוגה משותפת</button>'
   +'<span class="sep sv-demo"></span><button class="sv-demo" data-page="mentor">חזרה ליומן</button><button class="sv-demo" data-svmode="stats_only">סטטיסטיקות בלבד</button><button class="sv-demo" data-svmode="full">הכל</button><button class="sv-demo" data-svbad>לינק לא תקין</button>');})();

/* hook into the mock: render() and setPage(), chained onto earlier wrappers; the dashboard filter is borrowed and given back */
try{const r0=render;render=function(){if(S.page==="shared"){try{filterUi();}catch(_){}view();return;}const k=$("kpis");if(k)k.hidden=false;return r0.apply(this,arguments);};}catch(e){}
try{const s0=setPage;setPage=function(pg){
  if(pg==="shared"&&S.page!=="shared"){V.saved={accs:S.accs,type:S.type,from:S.from,to:S.to};S.accs=[];S.type="all";S.from=null;S.to=null;}
  if(pg!=="shared"&&S.page==="shared"&&V.saved){Object.assign(S,V.saved);V.saved=null;}
  document.body.classList.toggle("pg-shared",pg==="shared");
  return s0.apply(this,arguments);};}catch(e){}
if(/^#shared/.test(location.hash))setPage("shared");
})();
