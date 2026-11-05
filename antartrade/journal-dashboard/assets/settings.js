/* Settings page (/settings, "אזור אישי") in the journal mock. Copy word for word from Noam's Settings.tsx and
   src/components/settings/*Tab.tsx, TradovateConnectionCard.tsx and FirmPromoCard.tsx; names, emails and numbers are sample data.
   Uses the mock's own helpers ($, S, PAGES, ACCOUNTS, TRACKS, dlg, toast, enhanceForms, robotoDigits, setPage, render).
   Hooks itself in, so the master only needs <link href="assets/settings.css"> and <script src="assets/settings.js" defer>:
   it adds PAGES.settings, points the avatar menu's "אזור אישי" at it, wraps render() and setPage() (chained onto
   whatever wrapped them before) and sets body.pg-settings. #settings opens it directly. */
(function(){
const SV=(p,s)=>`<svg class="i" viewBox="0 0 24 24"${s?` style="${s}"`:""}>${p}</svg>`;
const I={
 user:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="10" r="3"/><path d="M6.5 18.5a6.5 6.5 0 0 1 11 0"/>',
 acc:'<rect x="3.5" y="6" width="17" height="13" rx="3"/><path d="M8 6V4.5h8V6M3.5 11h17"/>',
 target:'<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r=".8"/>',
 box:'<path d="M12 3.5l8 4.5v8l-8 4.5-8-4.5V8z"/><path d="M4 8l8 4.5L20 8M12 12.5V21"/>',
 link:'<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
 mail:'<rect x="3.5" y="5.5" width="17" height="13" rx="3"/><path d="M4.5 7.5l7.5 5.5 7.5-5.5"/>',
 coins:'<path d="M12 3v18M16.5 7.5c-.6-1.6-2.4-2.5-4.5-2.5-2.5 0-4.5 1.3-4.5 3.3 0 4.5 9 2.4 9 7 0 2-2 3.3-4.5 3.3-2.1 0-3.9-.9-4.5-2.6"/>',
 shield:'<path d="M12 3l7.5 3v5.5c0 4.5-3.2 8.2-7.5 9.5-4.3-1.3-7.5-5-7.5-9.5V6z"/>',
 hash:'<path d="M5 9h14M5 15h14M10 4L8 20M16 4l-2 16"/>',
 peak:'<path d="M3 19l6.5-11 4 6.5 2.5-3.5L21 19z"/>',
 eye:'<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/>',
 trash:'<path d="M4 7h16M10 11v6M14 11v6M6 7l1 12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-12M9 7V4h6v3"/>',
 redo:'<path d="M20 11a8 8 0 0 0-14.5-4.5L4 8M4 13a8 8 0 0 0 14.5 4.5L20 16"/><path d="M4 4v4h4M20 20v-4h-4"/>',
 copy:'<rect x="8" y="8" width="12" height="12" rx="2.5"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/>',
 out:'<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
 off:'<path d="M15 4h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3M10 17l-5-5 5-5M5 12h11"/>',
 check:'<path d="M5 12.5l4.5 4.5L19 7.5"/>'};
const sico=(k,c)=>`<span class="ico" style="--c:var(--c-${c})">${SV(I[k])}</span>`;
const sttl=(t,k,c)=>`<div class="ttl">${sico(k,c)}<h2>${t}</h2></div>`;
const en=t=>`<span class="en">${t}</span>`;
const money=n=>"$"+Number(n).toLocaleString("en-US");
try{PAGES.settings=["אזור אישי","נהל את הפרופיל, החשבונות, היעדים והנכסים שלך"];}catch(e){}

const TABS=[["profile","פרופיל","user"],["accounts","חשבונות","acc"],["goals","יעדים","target"],["assets","נכסים","box"],["conn","חיבורים","link"]];
/* firms that get the "צריך מבחן?" strip, and their page on the site (FirmPromoCard.tsx) */
const PROMO=[["apex","apex"],["topstep","top-step-2"],["bulenox","bulenox2"],["takeprofit","take-profit-2"],["take profit","take-profit-2"],["alpha","alpha-futures"],["lucid","lucid"]];
const promoOf=a=>{const f=(a.firm||"").toLowerCase();const p=PROMO.find(([k])=>f.includes(k));return p?p[1]:null;};
const GLOBAL=[["CL","Crude Oil","0.01","10","1000","NYMEX"],["ES","E-mini S&P 500","0.25","12.5","50","CME"],["GC","Gold","0.1","10","100","COMEX"],["MES","Micro E-mini S&P 500","0.25","1.25","5","CME"],["MNQ","Micro E-mini NASDAQ 100","0.25","0.5","2","CME"],["NQ","E-mini NASDAQ 100","0.25","5","20","CME"]];

/* the page's own state; "full" = a trader with accounts, "empty" = a new user */
const T={tab:"profile",admin:false,mode:null,name:"",acc:[],gone:new Set(),custom:[],goals:{}};
const seed=()=>{
  T.mode=S.mode;T.gone=new Set();
  const full=S.mode!=="empty";
  T.name=full?"רוני אליהו":"";
  T.acc=full?ACCOUNTS.map(a=>({id:a.id,peak:a.id==="a1"?51250:a.id==="a2"?52480:"",on:a.id!=="a6",mini:a.id==="a5"?"3.5":"",micro:a.id==="a5"?"1":""})):[];
  T.custom=full?[["MGC","Micro Gold","0.1","1","10","COMEX"],["MYM","Micro Dow","1","0.5","0.5","CBOT"]]:[];
  T.goals=full?{p:"500",l:"300",n:"5"}:{p:"",l:"",n:""};
};
const accs=()=>S.mode==="empty"?[]:ACCOUNTS.filter(a=>!T.gone.has(a.id));
const st=id=>T.acc.find(x=>x.id===id)||{};

/* ---------- tabs ---------- */
function profileTab(){
  const admin=`<section class="blk st-wide">${sttl("תצוגה מקדימה (אדמין)","eye","sky")}<p class="st-desc2" style="margin-top:14px">הצג מחדש את שאלון ה-${en("Onboarding")} כפי שמשתמש חדש רואה אותו. בסיום השאלון הנתונים שלך נשמרים כרגיל.</p>
    <div class="st-actions"><button class="btn2 ghostb" data-stonb>${SV(I.eye)}<span>הצג שאלון ${en("Onboarding")} מחדש</span></button></div></section>`;
  return `<div class="st-grid">
  <section class="blk">${sttl("פרופיל","user","sky")}<div class="frm">
    <div class="fld"><label class="st-lbl" for="stName">${SV(I.user)}שם מלא</label><input class="inp" id="stName" dir="rtl" placeholder="השם המלא שלך" value="${T.name}"></div>
    <div class="fld"><label class="st-lbl" for="stMail">${SV(I.mail)}כתובת מייל</label><input class="inp" id="stMail" dir="ltr" value="roni.trader@gmail.com" disabled><p class="st-hint">לא ניתן לשנות את כתובת המייל</p></div>
  </div><div class="st-actions"><button class="btn2" data-stsave="name" ${T.name.trim()?"":"disabled"}>שמור שינויים</button></div></section>
  <section class="blk">${sttl(`ברירת מחדל לעמלות (${en("Round Turn")})`,"coins","sun")}<p class="st-desc2" style="margin-top:14px">עמלה מלאה לחוזה (כניסה + יציאה). חל על כל החשבונות, אלא אם הוגדרה עמלה מותאמת בחשבון עצמו.</p>
    <div class="frm2" style="margin-top:16px">
      <div class="fld"><label for="stMini">חוזה רגיל / מיני</label><input class="inp" id="stMini" type="number" step="0.01" min="0" dir="ltr" placeholder="4.00" value="4"><p class="st-hint">${en("ES, NQ, CL, GC...")}</p></div>
      <div class="fld"><label for="stMicro">חוזה מיקרו</label><input class="inp" id="stMicro" type="number" step="0.01" min="0" dir="ltr" placeholder="1.20" value="1.2"><p class="st-hint">${en("MES, MNQ, MGC, MCL...")}</p></div>
    </div><div class="st-actions"><button class="btn2 ghostb" data-stsave="defcom">שמור עמלות</button></div></section>
  ${T.admin?admin:""}</div>`;
}

function accCard(a){
  const x=st(a.id),tr=a.track&&TRACKS[a.track],verified=tr&&!tr.unverifiedStop,promo=promoOf(a);
  const sub=`פרופ · ${en(tr?tr.label:a.firm)} · יתרת פתיחה: ${en(money(a.start))}`;
  const peak=verified?`<div class="tile st-peak"><span class="l">${SV(I.peak)}<span>נקודת שיא:</span></span><input class="inp" type="number" dir="ltr" placeholder="${money(a.start)}" value="${x.peak}" data-stpeakin="${a.id}"><button class="btn2 ghostb" data-stsave="peak" data-id="${a.id}">שמור</button></div>`:"";
  const com=`<div class="tile st-com"><div class="st-comhd"><span class="l">${SV(I.coins)}<span>עמלות (${en("Round Turn")} לחוזה)</span></span><span class="r">${x.on?"מופעל":"מבוטל"}<button class="st-sw" role="switch" aria-checked="${x.on}" aria-label="עמלות" data-stsw="${a.id}"></button></span></div>
    ${x.on?`<div class="frm2"><div class="fld"><label>מיני / רגיל</label><input class="inp" type="number" step="0.01" min="0" dir="ltr" placeholder="4" value="${x.mini}" data-stmini="${a.id}"></div><div class="fld"><label>מיקרו</label><input class="inp" type="number" step="0.01" min="0" dir="ltr" placeholder="1.2" value="${x.micro}" data-stmicro="${a.id}"></div></div>`:""}
    <div class="btns"><button class="btn2 ghostb" data-stsave="acccom" data-id="${a.id}">שמור עמלות</button><button class="btn3" data-strecalc="${a.id}">${SV(I.redo)}חשב מחדש עסקאות קיימות</button></div>
    <p class="st-hint">השאר ריק כדי להשתמש בברירת המחדל מהפרופיל (4$ מיני / 1.2$ מיקרו).</p></div>`;
  const pr=promo?`<div class="st-promo"><span>צריך מבחן?</span><button class="st-code" data-stcode>ANTAR${SV(I.copy)}</button><a href="https://antartrade.co.il/${promo}?utm_source=journal&utm_medium=app" target="_blank" rel="noopener">הנחה בלעדית${SV(I.out)}</a></div>`:"";
  return `<section class="blk st-acc"><div class="st-acchd">${sico("acc","sky")}<div class="tx"><b>${en(a.name)}</b><small>${sub}</small></div><button class="ib" data-stdelacc="${a.id}" aria-label="מחיקת חשבון">${SV(I.trash,"width:18px;height:18px")}</button></div>${peak}${com}${pr}</section>`;
}
function accountsTab(){
  const list=accs();
  const add=`<button class="btn2 st-add" data-page="new">${SV('<circle cx="12" cy="12" r="8.5"/><path d="M12 8.5v7M8.5 12h7"/>',"width:16px;height:16px")}הוסף חשבון חדש</button>`;
  if(!list.length)return `<section class="blk"><div class="st-empty">${SV(I.acc)}<span>אין חשבונות עדיין</span>${add}</div></section>`;
  return `<div class="st-accs">${list.map(accCard).join("")}</div>${add}`;
}

function goalsTab(){
  const g=T.goals,f=(c,k,ic,l,ph,v)=>`<div class="fld ${c}"><label class="st-lbl" for="stG${k}">${SV(I[ic])}${l}</label><input class="inp" id="stG${k}" type="number" min="0" ${k==="n"?'step="1" ':""}dir="ltr" placeholder="${ph}" value="${v}"></div>`;
  return `<section class="blk">${sttl("יעדים","target","mint")}<p class="st-desc2" style="margin-top:14px">הגדר יעדים יומיים למסחר. הנתונים ישמשו בעתיד להתראות ומעקב בדשבורד.</p>
  <div class="st-goals" style="margin-top:16px">${f("g1","p","target","יעד רווח יומי ($)","למשל: 500",g.p)}${f("g2","l","shield","מקסימום הפסד יומי ($)","למשל: 300",g.l)}${f("g3","n","hash","מקסימום עסקאות ביום","למשל: 5",g.n)}</div>
  <div class="st-actions"><button class="btn2" data-stsave="goals">שמור יעדים</button></div></section>`;
}

function assetTable(rows,del){
  const head=`<tr><th>סימבול</th><th>שם</th><th>טיק</th><th>ערך טיק</th><th>מכפיל</th><th>בורסה</th>${del?"<th></th>":""}</tr>`;
  const tbl=`<div class="st-tbl"><table class="mini"><thead>${head}</thead><tbody>${rows.map(r=>`<tr><td class="sym">${r[0]}</td><td>${en(r[1])}</td><td>${r[2]}</td><td>$${r[3]}</td><td>${r[4]}</td><td>${en(r[5])}</td>${del?`<td class="del"><button class="ib" data-stdelasset="${r[0]}" aria-label="מחיקת נכס">${SV(I.trash)}</button></td>`:""}</tr>`).join("")}</tbody></table></div>`;
  const cards=`<div class="st-cards">${rows.map(r=>`<div class="tile"><div class="tx"><div class="hd"><b>${r[0]}</b><span class="en">${r[1]}</span></div><div class="facts"><span>טיק: <b>${r[2]}</b></span><span>ערך טיק: <b>$${r[3]}</b></span><span>מכפיל: <b>${r[4]}</b></span><span>בורסה: <b class="en">${r[5]}</b></span></div></div>${del?`<button class="ib" data-stdelasset="${r[0]}" aria-label="מחיקת נכס">${SV(I.trash,"width:18px;height:18px")}</button>`:""}</div>`).join("")}</div>`;
  return tbl+cards;
}
function assetsTab(){
  return `<div class="st-grid">
  <section class="blk st-wide">${sttl("נכסים מותאמים אישית","box","sun")}<p class="st-desc2" style="margin:14px 0 16px">נכסים שהוספת בעצמך. ניתן להוסיף נכס חדש מדף "עסקה חדשה".</p>
    ${T.custom.length?assetTable(T.custom,true):`<div class="emptyline" style="min-height:90px">לא הוספת נכסים מותאמים עדיין</div>`}</section>
  <section class="blk st-wide">${sttl("נכסים גלובליים","box","sky")}<p class="st-desc2" style="margin:14px 0 16px">נכסים מוגדרים מראש הזמינים לכל המשתמשים.</p>${assetTable(GLOBAL,false)}</section></div>`;
}

function connTab(){
  const never=S.mode==="empty"||S.conn==="none",exp=!never&&S.conn==="expired";
  let card;
  if(S.net==="loading")card=`<div class="st-tv"><div class="st"><span class="spin"></span><small style="margin:0">טוען סטטוס ${en("Tradovate")}...</small></div></div>`;
  else if(never)card=`<div class="st-tv"><div class="st">${sico("link","sky")}<div><b><span>חבר את חשבון ה-${en("Tradovate")} שלך</span></b><small>התחבר פעם אחת והעסקאות יישלפו אוטומטית ליומן בכל כניסה ל-${en("Dashboard")}.</small></div></div><div class="btns"><button class="btn2" data-connect>${SV(I.link)}<span>התחבר ל-${en("Tradovate")}</span></button></div></div>`;
  else if(exp)card=`<div class="st-tv"><div class="st">${sico("link","sun")}<div><b><span>חיבור ${en("Tradovate")} פג</span></b><small>תוקף ההרשאה ל-${en("Tradovate")} פג. יש להתחבר מחדש לפני סנכרון נוסף.</small></div></div><div class="btns"><button class="btn2" data-connect>${SV(I.link)}<span>התחבר מחדש ל-${en("Tradovate")}</span></button></div></div>`;
  else card=`<div class="st-tv"><div class="st">${sico("check","mint")}<div><b><span class="live"></span><span>${en("Tradovate")} מחובר</span></b><small>${en("roni.trader")} • חובר ב-12/10/2026 • סנכרון אחרון 05/11 18:42</small></div></div><div class="btns"><button class="btn2" data-sync="0">${SV(I.redo)}סנכרן עסקאות</button><button class="btn2 ghostb" data-sync="1"><span>סנכרון מלא (90 יום)</span></button><button class="btn3" data-unsync>${SV(I.off)}נתק</button></div></div>`;
  return `<section class="blk">${sttl("חיבורי ברוקרים","link","mint")}<p class="st-desc2" style="margin:14px 0 16px">חבר את הברוקר שלך כדי למשוך עסקאות אוטומטית ליומן.</p>${card}</section>`;
}

/* loading: the journal's shimmer in the shape of the tab; down: one quiet line */
const loadingTab=()=>`<section class="blk"><div class="st-sk"><span class="sk" style="width:40%;height:22px"></span><span class="sk"></span><span class="sk"></span><span class="sk" style="width:30%;height:42px;border-radius:999px"></span></div></section>`;

function view(el){
  el=el||$("content");if(!el)return;
  if(T.mode!==S.mode)seed();
  const tabs=`<div class="seg st-tabs" role="tablist">${TABS.map(([k,l,ic])=>`<button role="tab" aria-selected="${T.tab===k}" class="${T.tab===k?"on":""}" data-sttab="${k}">${SV(I[ic])}${l}</button>`).join("")}</div>`;
  let body;
  if(S.net==="loading"&&T.tab!=="conn")body=loadingTab();
  else if(S.net==="down")body=`<section class="blk"><div class="emptyline">לא ניתן לטעון כרגע</div></section>`;
  else body=T.tab==="profile"?profileTab():T.tab==="accounts"?accountsTab():T.tab==="goals"?goalsTab():T.tab==="assets"?assetsTab():connTab();
  el.innerHTML=tabs+body;
  try{enhanceForms(el);}catch(e){}
  try{robotoDigits(el);}catch(e){}
}
window.settingsView=view;

/* save: Noam's busy word, then the button itself turns green with a V, then his toast */
function saved(btn,label,t,d){
  const txt=btn.innerHTML;btn.disabled=true;btn.textContent="שומר...";
  setTimeout(()=>{btn.classList.add("st-saved");btn.innerHTML=`${SV(I.check,"width:16px;height:16px")}נשמר!`;toast(t,d);
    setTimeout(()=>{if(!btn.isConnected)return;btn.classList.remove("st-saved");btn.innerHTML=txt;btn.disabled=false;},1600);},500);
}
const num=v=>v===""||v==null?null:Number(v);
const bad=v=>v!==null&&(isNaN(v)||v<0);

document.addEventListener("click",e=>{
  if(S.page!=="settings")return;const q=s=>e.target.closest(s);let x;
  if(x=q("[data-sttab]")){if(T.tab!==x.dataset.sttab){T.tab=x.dataset.sttab;view();}return;}
  if(x=q("[data-stsave]")){const k=x.dataset.stsave;
    if(k==="name"){const v=$("stName").value.trim();if(!v)return;T.name=v;saved(x,"","נשמר!","הפרופיל עודכן בהצלחה");return;}
    if(k==="defcom"){const a=num($("stMini").value),b=num($("stMicro").value);if(a===null||b===null||bad(a)||bad(b)){toast("ערכים לא תקינים","יש להזין מספר חיובי",true);return;}saved(x,"","נשמר!","ברירת המחדל לעמלות עודכנה");return;}
    if(k==="peak"){const i=document.querySelector(`[data-stpeakin="${x.dataset.id}"]`);st(x.dataset.id).peak=i?i.value:"";saved(x,"","נשמר!","נקודת השיא עודכנה בהצלחה");return;}
    if(k==="acccom"){const id=x.dataset.id,mi=document.querySelector(`[data-stmini="${id}"]`),mc=document.querySelector(`[data-stmicro="${id}"]`),a=mi?num(mi.value):null,b=mc?num(mc.value):null;
      if(bad(a)||bad(b)){toast("ערכים לא תקינים","",true);return;}if(mi)st(id).mini=mi.value;if(mc)st(id).micro=mc.value;saved(x,"","נשמר!","הגדרות העמלות עודכנו");return;}
    if(k==="goals"){T.goals={p:$("stGp").value,l:$("stGl").value,n:$("stGn").value};saved(x,"","נשמר!","היעדים עודכנו בהצלחה");return;}
    return;}
  if(x=q("[data-stsw]")){const s=st(x.dataset.stsw);
    document.querySelectorAll(`[data-stmini="${x.dataset.stsw}"],[data-stmicro="${x.dataset.stsw}"]`).forEach(i=>{if(i.dataset.stmini)s.mini=i.value;else s.micro=i.value;});
    s.on=!s.on;view();return;}
  if(x=q("[data-strecalc]")){const a=ACCOUNTS.find(a=>a.id===x.dataset.strecalc);
    /* his browser confirm() as a window: the question is the title, the rest of his sentence under it */
    dlg(`<div dir="rtl"><h2>לחשב מחדש עמלות לכל העסקאות בחשבון "${en(a.name)}"?</h2><p class="sub">פעולה זו תעדכן את ה-${en("PnL")} הנטו של כל העסקאות לפי ההגדרות הנוכחיות.</p>
    <div class="dangerb"><button class="btn2" data-stdorecalc>${SV(I.redo,"width:16px;height:16px")}חשב מחדש עסקאות קיימות</button><button class="btn3" data-closedlg>ביטול</button></div></div>`);return;}
  if(q("[data-stdorecalc]")){const b=q("[data-stdorecalc]");b.disabled=true;b.textContent="מחשב...";setTimeout(()=>{$("dlg").hidden=true;toast("בוצע!","עודכנו 23 עסקאות");},700);return;}
  if(x=q("[data-stdelacc]")){
    dlg(`<div dir="rtl"><h2>מחיקת חשבון</h2><p class="sub">פעולה זו תמחק את החשבון וכל העסקאות הקשורות אליו. לא ניתן לבטל פעולה זו.</p>
    <div class="dangerb"><button class="btnd" data-stdodelacc="${x.dataset.stdelacc}">מחק</button><button class="btn3" data-closedlg>ביטול</button></div></div>`);return;}
  if(x=q("[data-stdodelacc]")){x.disabled=true;x.textContent="מוחק...";const id=x.dataset.stdodelacc;setTimeout(()=>{T.gone.add(id);$("dlg").hidden=true;view();toast("נמחק!","החשבון וכל העסקאות שלו נמחקו");},600);return;}
  if(x=q("[data-stdelasset]")){
    dlg(`<div dir="rtl"><h2>מחיקת נכס</h2><p class="sub">האם למחוק את הנכס ${en(x.dataset.stdelasset)}? עסקאות קיימות שמשתמשות בנכס זה לא יושפעו.</p>
    <div class="dangerb"><button class="btnd" data-stdodelasset="${x.dataset.stdelasset}">מחק</button><button class="btn3" data-closedlg>ביטול</button></div></div>`);return;}
  if(x=q("[data-stdodelasset]")){T.custom=T.custom.filter(r=>r[0]!==x.dataset.stdodelasset);$("dlg").hidden=true;view();toast("הנכס נמחק","");return;}
  if(q("[data-stcode]")){try{navigator.clipboard.writeText("ANTAR");}catch(_){}toast("הקוד הועתק!","ANTAR");return;}
  if(q("[data-stadmin]")){T.admin=!T.admin;q("[data-stadmin]").classList.toggle("on",T.admin);T.tab="profile";view();return;}
  if(q("[data-stonb]")){const b=q("[data-stonb]");b.disabled=true;b.textContent="מעביר...";setTimeout(()=>{b.disabled=false;view();},900);return;}
});
document.addEventListener("input",e=>{
  if(S.page!=="settings")return;
  if(e.target.id==="stName"){const b=document.querySelector('[data-stsave="name"]');if(b&&!b.classList.contains("st-saved"))b.disabled=!e.target.value.trim();}
});

/* hook into the mock: the avatar menu's "אזור אישי", render() and setPage(), chained onto earlier wrappers */
/* mock-only: the admin block is Noam's (only an admin sees it), so it shows from a switch in the demo bar, on this page only */
(()=>{const d=document.querySelector(".demo");if(!d||d.querySelector("[data-stadmin]"))return;
  d.insertAdjacentHTML("beforeend",'<span class="sep st-demo"></span><button class="st-demo" data-stadmin>תצוגת אדמין</button>');})();
document.querySelectorAll("#userPop a,.umenu a").forEach(a=>{if(!a.dataset.page&&a.textContent.trim()==="אזור אישי")a.dataset.page="settings";});
try{const r0=render;render=function(){if(S.page==="settings"){try{filterUi();}catch(_){}view();return;}return r0.apply(this,arguments);};}catch(e){}
try{const s0=setPage;setPage=function(pg){const u=$("userPop");if(u)u.hidden=true;const out=s0.apply(this,arguments);document.body.classList.toggle("pg-settings",pg==="settings");return out;};}catch(e){}
if(/^#settings/.test(location.hash))setPage("settings");
})();
