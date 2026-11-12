/* Discipline streak + Noam's coach message (Roni, 5.11). Kept in its own file so the dashboard master can be rebuilt without losing it.
   Mounts itself: the coach under the dashboard title (before #pgSub), the streak block right after #kpis, the demo bar and the confetti canvas at the end of <body>.
   Needs: <link rel="stylesheet" href="assets/streak.css"> and <script src="assets/streak.js" defer></script>; the avatars in avatar/noam-*.webp. */
(()=>{
const run=()=>{
/* ---- streak sketch: every value here comes from data the journal already has (the challenge's rules and its violations per day) ---- */
(()=>{
const $$=id=>document.getElementById(id);
const IC={
 sun:'<path d="M12 3v2M12 19v2M5 12H3M21 12h-2M6.3 6.3l1.4 1.4M16.3 16.3l1.4 1.4M6.3 17.7l1.4-1.4M16.3 7.7l1.4-1.4"/><circle cx="12" cy="12" r="3.5"/>',
 target:'<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r=".8"/>',
 shield:'<path d="M12 3l7.5 3v5.5c0 4.5-3.2 8.2-7.5 9.5-4.3-1.3-7.5-5-7.5-9.5V6z"/><path d="M9 12l2 2 4-4"/>',
 alert:'<path d="M12 4l9 16H3z"/><path d="M12 10v4M12 17h.01"/>',
 star:'<path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.8l-5.2 2.8 1-5.8-4.3-4.1 5.9-.9z"/>',
 moon:'<path d="M19 14.5A7.5 7.5 0 0 1 9.5 5a7.5 7.5 0 1 0 9.5 9.5z"/>'};
/* the 13 trading days before today: c clean, v a violation, n no trades (neutral: it does not break the streak) */
const PAST=["c","v","c","c","n","c","c","c","c","n","c","c","c"];
/* the trading plan (Roni, 12.11, Noam's idea): build your own or take one of Noam's. The streak and Noam's lines follow it. Saved per browser. */
let PLAN=null;try{PLAN=JSON.parse(localStorage.getItem("atPlan")||"null");if(PLAN&&PLAN.v!==2)PLAN=null;}catch(e){}
const ORD=["","ראשונה","שנייה","שלישית","רביעית","חמישית","שישית","שביעית","שמינית","תשיעית","עשירית","אחת עשרה"];
const R=()=>PLAN||{t:3,l:2};
const nTrades=n=>n===1?"עסקה אחת":`${n} עסקאות`,nLoss=n=>n===1?"הפסד אחד":`${n} הפסדים`;
function states(){const p=R(),T=p.t,L=p.l;return{
 back:{icon:"sun",c:"sky",img:"before",lbl:`מאז הביקור האחרון · לפני ${since().ago} ימים`,msg:backMsg(),today:"p",n:9,t:0,l:0},
 before:{icon:"sun",c:"sky",msg:PLAN?(PLAN.line?`עוד לא נכנסת היום. תזכורת שלך: "${PLAN.line}"`:`עוד לא נכנסת היום. התוכנית: ${sumLine(PLAN).split(". ")[0]}.`):"עוד לא נכנסת היום. בנה לך תוכנית מסחר, ואני אעקוב אחריה איתך כל יום.",today:"p",n:9,t:0,l:0},
 one:{icon:"target",c:"mint",msg:T>1?`עסקה ראשונה בפנים, עם סטופ. ${T-1===1?"נשארה לך עסקה אחת":`נשארו לך ${T-1} עסקאות`} להיום.`:"עסקה ראשונה בפנים, עם סטופ. זו העסקה היחידה שלך להיום.",today:"p",n:9,t:1,l:0},
 stopped:{icon:"shield",c:"mint",msg:`עצרת אחרי ${nLoss(L)}, בדיוק לפי ${PLAN?"התוכנית":"הכללים"}. יום מפסיד עם משמעת לא שובר את הרצף.`,today:"p",n:9,t:Math.min(L,T),l:L},
 violation:{icon:"alert",c:"sun",msg:PLAN?`עסקה ${ORD[T+1]} היום, מעל התוכנית. מחר מתחילים רצף חדש.`:`נפתחה היום עסקה מעבר למקסימום של ${T}. מחר מתחילים רצף חדש.`,today:"v",n:0,t:T+1,l:1},
 clean:{icon:"star",c:"sun",msg:`יום נקי, ועכשיו 10 ימים ברצף לפי ${PLAN?"התוכנית":"הכללים"}. ככה עוברים מבחן.`,today:"c",n:10,t:T,l:Math.min(1,L-1),party:true},
 weekend:{icon:"moon",c:"sky",msg:"השוק סגור. 10 ימים נקיים ברצף, זמן טוב לעבור על השבוע.",today:"c",n:10,t:T,l:Math.min(1,L-1)}};}
const GOALS=[5,10,20,30,60,90];
const LET=["א","ב","ג","ד","ה","ו","ש"];
/* trading days back from today (Mon-Fri) */
const dayLetters=()=>{const out=[];const d=new Date(2026,10,5);while(out.length<14){const w=d.getDay();if(w>0&&w<6)out.unshift(LET[w]);d.setDate(d.getDate()-1);}return out;};
const LETS=dayLetters();
let cur=null;
const en=t=>t.replace(/-?\$?\d+(?:[.,:]\d+)*%?/g,n=>`<span class="en">${n}</span>`);
function set(k){
  const s=states()[k];const first=cur===null;cur=k;const P=R();
  const co=$$("coach");
  const im=s.img||k;
  if(first){co.innerHTML=`<div class="av"><img alt="נועם" src="avatar/noam-${im}.webp"></div><div class="bub"><small id="coLbl">${en(s.lbl||"")}</small><span>${en(s.msg)}</span><button class="planb" id="planBtn"></button></div>`;}
  else{const img=co.querySelector("img"),bub=co.querySelector(".bub");img.classList.add("out");bub.classList.add("swap");
    setTimeout(()=>{img.src=`avatar/noam-${im}.webp`;bub.querySelector(":scope>span").innerHTML=en(s.msg);$$("coLbl").innerHTML=en(s.lbl||"");img.classList.remove("out");bub.classList.remove("swap");},260);}
  planUi();
  const n=s.n,goal=GOALS.find(g=>g>n)||90,prev=GOALS.filter(g=>g<=n).pop()||0;
  const nb=$$("stN");nb.textContent=n;$$("stW").textContent=n===1?"יום":"ימים";
  const left=goal-n;
  $$("stGoal").textContent=n===0?"כל יום נקי מקדם אותך ליעד הראשון":left===1?"עוד יום אחד ליעד הבא":`עוד ${left} ימים ליעד של ${goal}`;
  $$("stGoalN").textContent=`${n}/${goal}`;
  $$("stBar").style.width=Math.max(3,n/goal*100)+"%";
  const all=[...PAST,s.today];
  $$("stDays").innerHTML=all.map((x,i)=>`<div class="rs-d ${x}${i===13?" t":""}"><i></i><small>${i===13?"היום":LETS[i]}</small></div>`).join("");
  const pips=(id,v,max,bad)=>{$$(id).innerHTML=Array.from({length:Math.max(max,v)},(_,i)=>`<i class="${i<v?(i>=max||bad?"bad":"on"):""}"></i>`).join("");};
  $$("tdT").innerHTML=`${s.t} <em>/ ${P.t}</em>`;pips("tdTp",s.t,P.t,false);
  $$("tdL").innerHTML=`${s.l} <em>/ ${P.l}</em>`;pips("tdLp",s.l,P.l,s.l>=P.l);
  if(s.party&&!first){const av=co.querySelector(".av");av.classList.remove("jump");void av.offsetWidth;av.classList.add("jump");nb.classList.add("pop");setTimeout(()=>nb.classList.remove("pop"),500);confetti();}
}
/* confetti in the site's blues with a little mint and gold, from both top corners */
function confetti(){
  if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;
  const cv=$$("confetti"),dpr=Math.min(2,devicePixelRatio||1);cv.hidden=false;
  const W=cv.width=innerWidth*dpr,H=cv.height=innerHeight*dpr,ctx=cv.getContext("2d");
  const COL=["#7DC6FF","#4F6BFF","#3fd8c2","#f7c65a","#eef3fa","#61b1f2"];
  const P=[];for(let i=0;i<170;i++){const l=i%2===0;P.push({x:(l?.08:.92)*W,y:H*.32,vx:(l?1:-1)*(4+Math.random()*9)*dpr,vy:(-11-Math.random()*9)*dpr,r:Math.random()*6.3,vr:(Math.random()-.5)*.3,w:(6+Math.random()*6)*dpr,h:(3+Math.random()*4)*dpr,c:COL[i%COL.length],o:1});}
  const t0=performance.now();
  const tick=t=>{ctx.clearRect(0,0,W,H);const el=t-t0;
    P.forEach(p=>{p.vy+=.32*dpr;p.vx*=.985;p.x+=p.vx;p.y+=p.vy;p.r+=p.vr;if(el>1800)p.o=Math.max(0,p.o-.025);
      ctx.save();ctx.globalAlpha=p.o;ctx.translate(p.x,p.y);ctx.rotate(p.r);ctx.fillStyle=p.c;ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h*Math.abs(Math.cos(p.r*2)));ctx.restore();});
    if(el<3400)requestAnimationFrame(tick);else{ctx.clearRect(0,0,W,H);cv.hidden=true;}};
  requestAnimationFrame(tick);
}
/* ---- Noam reads a day (12.11): the same rules check for the entry summary and for a day opened from the calendar ---- */
const dk=d=>d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");
const usd=v=>(v<0?"-":"")+"$"+Math.abs(v).toLocaleString("en-US");
function judge(list){
  const p=R(),T=p.t,L=p.l,risk=PLAN?PLAN.risk:0;
  const t=[...list].sort((a,b)=>a.exit-b.exit),n=t.length,pnl=t.reduce((s,x)=>s+x.pnl,0);
  let run=0,hit=-1,wr=0,wHit=-1;t.forEach((x,i)=>{run=x.pnl<0?run+1:0;wr=x.pnl>0?wr+1:0;if(run>=L&&hit<0)hit=i;if(wr>=2&&wHit<0)wHit=i;});
  const big=risk?t.find(x=>x.pnl<-risk*1.1):null;
  if(n>T)return{k:"violation",n,pnl,why:"trades"};
  if(hit>=0&&hit<n-1)return{k:"violation",n,pnl,why:"losses"};
  if(PLAN&&PLAN.w2==="stop"&&wHit>=0&&wHit<n-1)return{k:"violation",n,pnl,why:"wins"};
  if(big)return{k:"violation",n,pnl,why:"size",big:-big.pnl};
  if(hit>=0)return{k:"stopped",n,pnl};
  return{k:pnl>=0?"clean":"lossok",n,pnl};
}
function dayMsg(j){const p=R(),by=PLAN?"התוכנית":"הכללים";
  if(j.k==="violation")return j.why==="trades"?(PLAN?`עסקה ${ORD[p.t+1]} ביום הזה, מעל התוכנית. כאן הרצף נשבר.`:`ביום הזה נפתחו ${j.n} עסקאות, מעבר למקסימום של ${p.t}. כאן הרצף נשבר.`)
    :j.why==="losses"?`אחרי ${nLoss(p.l)} ברצף המשכת לסחור. לפי ${by} היה צריך לעצור כאן.`
    :j.why==="wins"?`אחרי 2 רווחים המשכת לסחור. לפי התוכנית היה צריך לעצור כאן.`
    :`ההפסד באחת העסקאות היה ${usd(j.big)}, הסיכון המתוכנן ${usd(PLAN.risk)}.`;
  if(j.k==="stopped")return `עצרת אחרי ${nLoss(p.l)}, בדיוק לפי ${by}. יום מפסיד עם משמעת לא שובר את הרצף.`;
  if(j.k==="lossok")return `יום בהפסד של ${usd(-j.pnl)}, אבל לפי ${by}. הוא עדיין נספר כיום נקי ברצף.`;
  return `יום נקי ברווח של ${usd(j.pnl)}, ${j.n===1?"בעסקה אחת":`מתוך ${j.n} עסקאות`}, הכל לפי ${by}.`;}
const IMG={violation:"violation",stopped:"stopped",lossok:"stopped",clean:"clean"};
/* entry summary: the trading days between the last visit and today */
function since(){
  const all=(typeof TRADES!=="undefined"?TRADES:[]),days={};
  const from=new Date(2026,9,31),to=new Date(2026,10,5);
  all.forEach(x=>{if(x.exit>=from&&x.exit<to){const k=dk(x.exit);(days[k]=days[k]||[]).push(x);}});
  const ks=Object.keys(days),js=ks.map(k=>judge(days[k]));
  const n=js.reduce((s,j)=>s+j.n,0),pnl=js.reduce((s,j)=>s+j.pnl,0),bad=js.filter(j=>j.k==="violation").length,up=js.filter(j=>j.pnl>0).length;
  return{ago:Math.round((to-from)/864e5),days:ks.length,n,pnl,bad,up};}
function backMsg(){const s=since();
  if(!s.n)return "מאז הביקור האחרון לא נכנסו עסקאות. כשתייבא או תסנכרן, אסכם לך כאן מה קרה.";
  return `נכנסו ${s.n} עסקאות על פני ${s.days} ימי מסחר, ${s.pnl>=0?"רווח":"הפסד"} של ${usd(Math.abs(s.pnl))} בסך הכל. `+(s.bad?`${s.bad===1?"יום אחד":`${s.bad} ימים`} עם חריגה, ושם הרצף נשבר.`:`כל הימים לפי ${PLAN?"התוכנית":"הכללים"}, והרצף לא נשבר.`);}
/* the calendar day dialog (openDay in the master) gets Noam's read of that day, as a small coach card above the trades */
document.addEventListener("click",e=>{const c=e.target.closest(".cal [data-day]");if(!c)return;const k=c.dataset.day;
  setTimeout(()=>{const body=$$("dlgBody");if(!body||body.querySelector(".coach.mini"))return;
    const list=(typeof filtered==="function"?filtered():TRADES).filter(x=>dk(x.exit)===k);if(!list.length)return;
    const j=judge(list),h=body.querySelector("h2");
    const card=`<div class="coach mini"><div class="av"><img alt="נועם" src="avatar/noam-${IMG[j.k]}.webp"></div><div class="bub"><small>על היום הזה</small><span>${en(dayMsg(j))}</span></div></div>`;
    if(h)h.insertAdjacentHTML("afterend",card);else body.insertAdjacentHTML("afterbegin",card);},0);
});
/* ---- plan button + dialog (12.11, Noam's spec): choose a path, 2 questions, rules pre-checked, advanced folded, then "התוכנית שלך" ---- */
const PEN='<svg class="i" viewBox="0 0 24 24"><path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13.5 6.5l4 4"/></svg>';
const PLUS='<svg class="i" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>';
const SVG=p=>`<svg class="i" viewBox="0 0 24 24">${p}</svg>`;
const CK='<svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 6.2L5 8.5L9.5 3.5"/></svg>';
const CHEV='<svg class="i" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>';
function planUi(){const b=$$("planBtn");if(b)b.innerHTML=PLAN?`${PEN}<span>התוכנית שלי: ${PLAN.name}</span>`:`${PLUS}<span>בנה לך תוכנית מסחר</span>`;
  const h=document.querySelector("#streak .bh .hint");if(h)h.textContent=PLAN?"ימי מסחר בלי אף חריגה מהתוכנית שלך":"ימי מסחר בלי אף חריגה מהכללים של האתגר";}
/* the draft while the dialog is open; AntarTrade = Noam's defaults in one click */
const AT={path:"at",risk:200,t:3,stopL:true,w2:"more",rr:true,news:true,brkOn:false,brk:10,line:""};
let D={...AT};
const worst=d=>d.risk*(d.stopL?Math.min(2,d.t):d.t);
const sumLine=d=>`עד ${nTrades(d.t)} ביום, $${d.risk.toLocaleString("en-US")} לעסקה${d.stopL?`, עוצר אחרי ${nLoss(Math.min(2,d.t))}`:""}. היום הכי גרוע שלך: מינוס $${worst(d).toLocaleString("en-US")}.`;
const calcRisk=(dd,t)=>Math.floor(dd/3/Math.max(1,t)/50)*50;
const pane=h=>{const b=$$("dlgBody"),p=b&&b.querySelector(".pl");if(p)p.outerHTML=h;else dlg(h,true);};
function step1(){pane(`<div class="pl" dir="rtl"><h2>בנה לך תוכנית מסחר</h2><p class="sub">עונים על 2 שאלות, והמערכת מחשבת את השאר.</p>
  <div class="pl-path">
   <button class="pl-card" data-path="at"><span class="pl-ic">${SVG(IC.shield)}</span><span class="pl-tx"><small>מומלצת</small><b>תוכנית AntarTrade</b><span>לחיצה אחת ויש תוכנית</span></span></button>
   <button class="pl-card" data-path="own"><span class="pl-ic">${PEN}</span><span class="pl-tx"><b>אבנה בעצמי</b><span>2 שאלות, והמערכת מחשבת את השאר</span></span></button>
  </div>
  <div class="pl-act">${PLAN?`<button class="btn3" id="plDel">בלי תוכנית</button>`:`<button class="btn3" id="plNo">ביטול</button>`}</div></div>`);}
const ck=(id,on,txt)=>`<label class="pl-rule"><input type="checkbox" class="ck" id="${id}" ${on?"checked":""}><span>${txt}</span></label>`;
function step2(){const d=D;pane(`<div class="pl" dir="rtl"><h2>${d.path==="at"?"תוכנית AntarTrade":"אבנה בעצמי"}</h2><p class="sub">עונים על 2 שאלות, והמערכת מחשבת את השאר.</p>
  <div class="pl-q"><label for="plRisk">כמה אתה מסכן בכל עסקה ($)?</label><div class="pl-in"><input class="inp" id="plRisk" type="text" inputmode="numeric" value="${d.risk}"><i class="en">$</i></div>
   <button class="pl-link" id="plCalcT">לא בטוח? תחשב לפי הכלל שלנו.</button>
   <div class="pl-calc" id="plCalc" hidden><label for="plDD">הדראודאון של החשבון</label><div class="pl-in"><input class="inp" id="plDD" type="text" inputmode="numeric" placeholder="2,000"><i class="en">$</i></div>
    <p id="plCalcR">שליש ממנו לסיכון יומי, חלקי ${nTrades(d.t)}.</p><button class="btn3 pl-use" id="plUse" hidden>להשתמש בסכום הזה</button></div></div>
  <div class="pl-q"><span class="pl-lbl">כמה עסקאות מקסימום ביום?</span><div class="pl-step"><button data-tn="-1" aria-label="פחות">${SVG('<path d="M5 12h14"/>')}</button><b class="en" id="plT">${d.t}</b><button data-tn="1" aria-label="יותר">${SVG('<path d="M12 5v14M5 12h14"/>')}</button></div></div>
  <span class="pl-lbl">כללים</span>
  <div class="pl-rules">
   ${ck("plStopL",d.stopL,"עוצר אחרי 2 הפסדים")}
   <div class="pl-rule pl-w2"><span>אחרי 2 רווחים</span><div class="pl-opts"><button data-w2="more" class="${d.w2==="more"?"on":""}">ממשיך לעסקה אחת נוספת עם אותו סיכון</button><button data-w2="stop" class="${d.w2==="stop"?"on":""}">עוצר</button></div></div>
   ${ck("plRR",d.rr,"יחס סיכוי-סיכון: 1:1 בהתחלה")}
   ${ck("plNews",d.news,"לא סוחר סביב חדשות אדומות, לפי הלוח הכלכלי")}
  </div>
  <button class="pl-adv-t" id="plAdvT" aria-expanded="false">מתקדם ${CHEV}</button>
  <div class="pl-rules pl-adv" id="plAdv" hidden>
   <label class="pl-rule"><input type="checkbox" class="ck" id="plBrkOn" ${d.brkOn?"checked":""}><span>הפסקה של <input class="inp pl-mini" id="plBrk" type="text" inputmode="numeric" value="${d.brk}"> דקות אחרי הפסד</span></label>
   <div class="pl-q"><label for="plLine">משפט אישי שהאווטאר מזכיר</label><input class="inp" id="plLine" type="text" value="${d.line.replace(/"/g,"&quot;")}"></div>
  </div>
  <div class="pl-act"><button class="btn2" id="plNext">המשך</button><button class="btn3" id="plBack">חזרה</button></div></div>`);}
function step3(){const d=D,tags=[d.w2==="more"?"אחרי 2 רווחים: עסקה אחת נוספת":"אחרי 2 רווחים: עוצר",d.rr?"יחס 1:1":"",d.news?"בלי חדשות אדומות":"",d.brkOn?`הפסקה של ${d.brk} דקות אחרי הפסד`:""].filter(Boolean);
  pane(`<div class="pl" dir="rtl"><h2>התוכנית שלך</h2><p class="sub">${d.path==="at"?"תוכנית AntarTrade":"תוכנית אישית"}</p>
  <div class="pl-sum"><p>${en(sumLine(d))}</p><div class="pl-ch">${tags.map(t=>`<span>${en(t)}</span>`).join("")}</div>${d.line?`<q>${d.line.replace(/</g,"&lt;")}</q>`:""}</div>
  <div class="pl-act"><button class="btn2" id="plSave">שמור תוכנית</button><button class="btn3" id="plEdit">עריכה</button></div></div>`);}
function planDlg(){D=PLAN?{...PLAN}:{...AT};step1();}
const closeDlg=()=>{const d=$$("dlg");if(d)d.hidden=true;};
const num=v=>+String(v).replace(/[^0-9]/g,"")||0;
const read=()=>{if(!$$("plRisk"))return;D.risk=num($$("plRisk").value)||D.risk;D.stopL=$$("plStopL").checked;D.rr=$$("plRR").checked;D.news=$$("plNews").checked;
  D.brkOn=$$("plBrkOn").checked;D.brk=num($$("plBrk").value)||10;D.line=$$("plLine").value.trim();};
const calc=()=>{const dd=num($$("plDD").value),r=$$("plCalcR"),u=$$("plUse");
  if(!dd){r.innerHTML=`שליש ממנו לסיכון יומי, חלקי ${nTrades(D.t)}.`;u.hidden=true;return;}
  const day=Math.floor(dd/3),v=calcRisk(dd,D.t);r.innerHTML=en(`שליש ממנו לסיכון יומי: $${day.toLocaleString("en-US")}. חלקי ${nTrades(D.t)}: $${v.toLocaleString("en-US")} לעסקה.`);u.hidden=!v;u.dataset.v=v;};
document.addEventListener("input",e=>{const id=e.target.id||"";
  if(/^pl(Risk|DD|Brk)$/.test(id)){const n=num(e.target.value);e.target.value=n?n.toLocaleString("en-US"):"";}
  if(id==="plDD")calc();});
document.addEventListener("click",e=>{
  if(e.target.closest("#planBtn")){planDlg();return;}
  if(!e.target.closest(".pl"))return;
  const pa=e.target.closest("[data-path]");if(pa){if(pa.dataset.path==="at"){D={...AT};step3();}else{D={...(PLAN&&PLAN.path==="own"?PLAN:AT),path:"own"};step2();}return;}
  if(e.target.closest("#plCalcT")){const c=$$("plCalc");c.hidden=!c.hidden;if(!c.hidden)$$("plDD").focus();return;}
  if(e.target.closest("#plUse")){$$("plRisk").value=(+$$("plUse").dataset.v).toLocaleString("en-US");$$("plCalc").hidden=true;return;}
  const tn=e.target.closest("[data-tn]");if(tn){D.t=Math.min(10,Math.max(1,D.t+ +tn.dataset.tn));$$("plT").textContent=D.t;if(!$$("plCalc").hidden)calc();return;}
  const w=e.target.closest("[data-w2]");if(w){D.w2=w.dataset.w2;document.querySelectorAll("[data-w2]").forEach(x=>x.classList.toggle("on",x===w));return;}
  if(e.target.closest("#plAdvT")){const a=$$("plAdv"),b=$$("plAdvT");a.hidden=!a.hidden;b.setAttribute("aria-expanded",String(!a.hidden));return;}
  if(e.target.closest("#plNext")){read();step3();return;}
  if(e.target.closest("#plBack")){read();step1();return;}
  if(e.target.closest("#plEdit")){step2();return;}
  if(e.target.closest("#plNo")){closeDlg();return;}
  if(e.target.closest("#plDel")){PLAN=null;try{localStorage.removeItem("atPlan")}catch(_){}closeDlg();set(cur);return;}
  if(e.target.closest("#plSave")){PLAN={...D,v:2,name:D.path==="at"?"AntarTrade":"אישית",l:D.stopL?Math.min(2,D.t):D.t};
    try{localStorage.setItem("atPlan",JSON.stringify(PLAN))}catch(_){}closeDlg();set(cur);}
});
document.addEventListener("click",e=>{const b=e.target.closest(".demo2 [data-st]");if(!b)return;document.querySelectorAll(".demo2 [data-st]").forEach(x=>x.classList.toggle("on",x===b));set(b.dataset.st);});
["before","one","stopped","violation","clean","weekend"].forEach(k=>{const i=new Image();i.src=`avatar/noam-${k}.webp`;});
set("back");
})();
};
const mountAll=()=>{
  if(document.getElementById("coach"))return;
  const sub=document.getElementById("pgSub"),kpis=document.getElementById("kpis");
  if(!sub||!kpis)return;
  sub.insertAdjacentHTML("beforebegin","<div class=\"coach\" id=\"coach\"></div>");
  kpis.insertAdjacentHTML("afterend","\n  <section class=\"blk streak dashonly\" id=\"streak\">\n    <div class=\"bh\"><div class=\"ttl\"><span class=\"ico\" style=\"--c:var(--c-sun)\"><svg class=\"i\" viewBox=\"0 0 24 24\"><path d=\"M12 3.5c.5 3-2.5 4.5-2.5 7.5a2.5 2.5 0 0 0 5 0c0-1-.4-1.8-1-2.5 2.6 1 4.5 3.6 4.5 6.5a6 6 0 0 1-12 0c0-4.6 4.5-7.4 6-11.5z\"/></svg></span><h2>רצף משמעת</h2></div><span class=\"hint\">ימי מסחר בלי אף חריגה מהכללים של האתגר</span></div>\n    <div class=\"rs-grid3\">\n      <div class=\"rs-cell\">\n        <span class=\"rs-l\">ימים נקיים ברצף</span>\n        <div class=\"rs-num\"><b class=\"en\" id=\"stN\">9</b><span id=\"stW\">ימים</span></div>\n        <div class=\"rs-goal\"><span id=\"stGoal\">עוד יום אחד ליעד הבא</span><span class=\"en\" id=\"stGoalN\">9/10</span></div>\n        <div class=\"rs-bar\"><i id=\"stBar\" style=\"width:90%\"></i></div>\n      </div>\n      <div class=\"rs-cell\">\n        <span class=\"rs-l\">14 ימי המסחר האחרונים</span>\n        <div class=\"rs-days\" id=\"stDays\"></div>\n        <div class=\"rs-legend\"><span class=\"c\"><i></i>יום נקי</span><span class=\"v\"><i></i>חריגה</span><span><i></i>בלי עסקאות</span></div>\n      </div>\n      <div class=\"rs-cell\">\n        <span class=\"rs-l\">היום, לפי הכללים שלך</span>\n        <div class=\"rs-today\">\n          <div class=\"rs-tc2\"><small>עסקאות</small><b id=\"tdT\">0 <em>/ 3</em></b><div class=\"rs-pips\" id=\"tdTp\"></div></div>\n          <div class=\"rs-tc2\"><small>הפסדים ברצף</small><b id=\"tdL\">0 <em>/ 2</em></b><div class=\"rs-pips\" id=\"tdLp\"></div></div>\n          <div class=\"rs-best\"><svg class=\"i\" viewBox=\"0 0 24 24\" style=\"width:16px;height:16px;color:var(--c-sun)\"><path d=\"M8 4h8v4a4 4 0 0 1-8 0zM8 6H5a2 2 0 0 0 3 3.5M16 6h3a2 2 0 0 1-3 3.5M12 12v4M8.5 20h7M10 16h4v4h-4z\"/></svg><span>השיא שלך: <b class=\"en\" id=\"stBest\">12</b> ימים נקיים</span></div>\n        </div>\n      </div>\n    </div>\n  </section>\n");
  document.body.insertAdjacentHTML("beforeend","<div class=\"demo demo2 dashonly\" dir=\"rtl\" aria-label=\"מצב היום בהדמיה\"><small>היום:</small><button class=\"on\" data-st=\"back\">חזרה אחרי כמה ימים</button><button data-st=\"before\">לפני המסחר</button><button data-st=\"one\">אחרי עסקה</button><button data-st=\"stopped\">עצר אחרי 2 הפסדים</button><button data-st=\"violation\">חריגה</button><button data-st=\"clean\">סוף יום נקי</button><button data-st=\"weekend\">סופ\"ש</button></div>\n<canvas id=\"confetti\" hidden></canvas>");
  run();
};
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",mountAll);else mountAll();
})();
