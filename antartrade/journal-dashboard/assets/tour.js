/* Guided tour in the journal mock. The 14 steps and their wording come word for word from Noam's onboarding-tour.ts (driver.js),
   without the emoji in the titles and buttons (the journal uses no emoji). Like his, it walks the dashboard, the trade log, a new trade
   and back, and opens from "הפעל סיור מודרך". Uses the mock's own helpers ($, S, setPage).
   The master only needs <link href="assets/tour.css"> and <script src="assets/tour.js" defer>; it hooks the "הפעל סיור מודרך" buttons,
   and opens on #tour. */
(function(){
const SV=p=>`<svg class="i" viewBox="0 0 24 24" style="width:18px;height:18px">${p}</svg>`;
const vis=e=>!!e&&e.getBoundingClientRect().width>0;
const first=(...els)=>els.find(vis)||null;
const sec=t=>[...document.querySelectorAll("#content section")].find(s=>s.querySelector("h2")?.textContent.includes(t));
const nav=p=>first(document.querySelector(`.side .nav a[data-page="${p}"]`),document.querySelector(`.mnav a[data-page="${p}"]`));
const foot=t=>first([...document.querySelectorAll(".side .foot a,.side .foot button")].find(e=>e.textContent.includes(t)),$("whoBtn"));

const STEPS=[
 {page:"dash",intro:true,title:"ברוך הבא ליומן AntarTrade!",text:"ניקח חצי דקה לסיור קצר על האזורים העיקריים. אפשר לסגור עם ✕ או לבחור 'אל תציג שוב' אם לא תרצה שהוא ייפתח אוטומטית בהמשך."},
 {page:"dash",el:()=>$("kpis"),title:"סטטיסטיקות מרכזיות",text:"כאן רואים סקירה מהירה של הביצועים: רווח/הפסד כולל, אחוז הצלחה, מספר עסקאות וממוצע רווח/הפסד."},
 {page:"dash",el:()=>$("filters"),title:"פילטרים ראשיים",text:"כאן אפשר לסנן את כל הנתונים לפי טווח תאריכים, לפי חשבונות ספציפיים, או לפי סוג חשבון: כל החשבונות, רק מבחנים (Eval) או רק חשבונות ממומנים. אפשר גם לבחור חברה ספציפית כמו Apex, Take Profit, Lucid וכו׳ - והכל יתעדכן בהתאם."},
 {page:"dash",el:()=>sec("לוח שנה"),title:"יומן יומי",text:"בכל יום בחודש רואים את הרווח/הפסד היומי, מספר העסקאות וצבע ירוק/אדום לפי הביצוע. לחיצה על יום פותחת את כל העסקאות שלו."},
 {page:"dash",el:()=>sec("עקומת הון"),title:"עקומת הון",text:"מציגה את התפתחות ההון שלך לאורך הזמן. בחר חשבון בודד בפילטר למעלה כדי לראות גם את היתרה ההתחלתית."},
 {page:"dash",el:()=>nav("log"),top:true,title:"יומן עסקאות",text:"כאן רשומות כל העסקאות שלך - עם פילטרים לפי נכס, אסטרטגיה, רגש, דירוג ועוד. נעבור לשם רגע."},
 {page:"log",el:()=>first(document.querySelector("table.log")?.closest("section"),document.querySelector(".lcards")?.closest("section")),top:true,title:"מרכז יומן העסקאות",text:"זה היומן המרכזי שלך: כאן רואים את כל העסקאות, בוחנים כל עסקה לגופה, פותחים אותה לבדיקה מעמיקה, וגם אפשר מכאן לבקש סנכרון עסקאות עם Tradovate."},
 {page:"new",tab:"manual",el:()=>document.querySelector(".ntgrid .o1"),top:true,title:"עסקה חדשה - הזנה ידנית",text:"אפשר להוסיף עסקאות גם ידנית. תוך כדי הזנה אפשר ליצור חשבון חדש, לבחור אם זה חשבון מבחן (Eval) או ממומן, ולשייך אותו לחברה (Apex / Take Profit / Lucid וכו׳) - והמערכת תטען אוטומטית את כל החוקים של אותה חברה: Trailing Stop, Consistency, Green Days, Buffer Lock והכל."},
 {page:"new",tab:"manual",el:()=>[...document.querySelectorAll("button")].find(b=>vis(b)&&b.textContent.trim()==="ייבוא מקובץ"),top:true,title:"ייבוא קבצים",text:"לחיצה על הטאב הזה תפתח את מסך הייבוא - אפשר לייבא קבצי CSV מ-Rithmic (NinjaTrader) או מ-Tradovate. יש כפתורים עם סרטוני הסבר מובנים שמראים בדיוק איך מייצאים את הקובץ מכל פלטפורמה."},
 {page:"log",el:()=>document.querySelector("#content .blk.sync"),top:true,title:"חיבור Tradovate",text:"חבר פעם אחת - והעסקאות נשלפות אוטומטית כל כמה דקות, בלי לייבא קבצים. תומך בכל סוגי החשבונות, כולל חשבונות פרופ פירם."},
 {page:"log",el:()=>nav("mentor"),top:true,title:"אזור המנטור",text:"כאן אפשר ליצור לינק שיתוף ולתת למנטור שלך לראות את הנתונים. הוא יוכל להוסיף הערות אישיות לכל עסקה - מצוין ללמידה ושיפור."},
 {page:"log",el:()=>foot("AntarTrade"),top:true,title:"האתר הראשי של AntarTrade",text:"מכאן חוזרים לאתר של AntarTrade: קורסים חינמיים, השוואת חברות מימון, מאמרים, קהילה והרבה ידע חשוב. נפתח בלשונית חדשה."},
 {page:"log",el:()=>foot("סיור מודרך"),top:true,title:"צריך להיזכר?",text:"הכפתור הזה תמיד כאן - לחץ עליו בכל זמן כדי לראות את הסיור הזה שוב."},
 {page:"log",intro:true,title:"סיימת!",text:"אתה מוכן. מסחר מוצלח, ואל תהסס לפנות לתמיכה דרך הצ׳אט באתר הראשי של AntarTrade אם משהו לא ברור."}];

/* English words keep their own font and direction inside the Hebrew */
const en=t=>t.replace(/(AntarTrade|Tradovate|Rithmic|NinjaTrader|Take Profit|Trailing Stop|Consistency|Green Days|Buffer Lock|Apex|Lucid|Eval|CSV)/g,'<span class="en">$1</span>');

let T=null;
const ui=()=>{
  if($("trPop"))return;
  document.body.insertAdjacentHTML("beforeend",`<div class="tr-block" id="trBlock" hidden></div><div class="tr-spot none" id="trSpot" hidden></div>
   <div class="tr-pop hide" id="trPop" role="dialog" aria-modal="true" dir="rtl" hidden><button class="tr-x" data-tr="x" aria-label="סגור סיור">${SV('<path d="M6 6l12 12M18 6L6 18"/>')}</button>
   <span class="tr-step" id="trStep"></span><h3 id="trTitle"></h3><p id="trText"></p><div class="tr-bar"><i id="trBar"></i></div>
   <div class="tr-foot"><button class="tr-off" data-tr="off">אל תציג שוב</button><button class="tr-prev" data-tr="prev">הקודם</button><button class="btn2" data-tr="next" id="trNext">הבא</button></div></div>`);
};
const wait=ms=>new Promise(r=>setTimeout(r,ms));
async function go(i){
  const st=STEPS[i];if(!st)return end();
  T.i=i;
  const pop=$("trPop");pop.classList.add("hide");
  if(st.page&&(S.page!==st.page||(st.tab&&typeof NT!=="undefined"&&NT.tab!==st.tab))){setPage(st.page,st.tab);await wait(450);}
  let el=st.el?st.el():null;
  if(st.el&&!el){await wait(400);el=st.el();}
  T.el=el;
  if(el){
    const r=el.getBoundingClientRect(),phone=innerWidth<=900;
    const room=phone?innerHeight-300:innerHeight-40;
    let y;
    if(st.top||r.height>room)y=scrollY+r.top-(phone?84:96);
    else y=scrollY+r.top-(innerHeight-r.height)/2+(phone?-110:0);
    if(getComputedStyle(el).position!=="fixed"&&!el.closest(".side,.mnav"))scrollTo({top:Math.max(0,y),behavior:"smooth"});
    await wait(420);
  }else scrollTo({top:0,behavior:"smooth"});
  $("trStep").textContent=`שלב ${i+1} מתוך ${STEPS.length}`;
  $("trTitle").innerHTML=en(st.title);$("trText").innerHTML=en(st.text);
  $("trBar").style.width=((i+1)/STEPS.length*100)+"%";
  document.querySelector('[data-tr="prev"]').hidden=i===0;
  $("trNext").textContent=i===STEPS.length-1?"סיימתי":"הבא";
  pop.classList.toggle("intro",!!st.intro);
  place();pop.classList.remove("hide");$("trNext").focus({preventScroll:true});
}
function place(){
  if(!T)return;
  const spot=$("trSpot"),pop=$("trPop"),el=T.el,pad=8;
  if(!el){pop.classList.remove("up");spot.classList.add("none");pop.style.left=Math.round((innerWidth-pop.offsetWidth)/2)+"px";pop.style.top=Math.round((innerHeight-pop.offsetHeight)/2)+"px";return;}
  const r=el.getBoundingClientRect();
  const top=Math.max(6,r.top-pad),bot=Math.min(innerHeight-6,r.bottom+pad);
  spot.classList.remove("none");
  Object.assign(spot.style,{top:top+"px",left:(r.left-pad)+"px",width:(r.width+pad*2)+"px",height:Math.max(0,bot-top)+"px"});
  /* phones: the card is a sheet at the bottom; when the lit part sits low (the bottom menu), the sheet moves to the top */
  if(innerWidth<=900){pop.classList.toggle("up",r.bottom>innerHeight-pop.offsetHeight-28);return;}
  const pw=pop.offsetWidth,ph=pop.offsetHeight,gap=16;
  let x,y;
  if(r.width<260&&r.left>pw+gap*2){x=r.left-pw-gap;y=Math.min(Math.max(16,r.top+r.height/2-ph/2),innerHeight-ph-16);}
  else if(r.width<260&&innerWidth-r.right>pw+gap*2){x=r.right+gap;y=Math.min(Math.max(16,r.top+r.height/2-ph/2),innerHeight-ph-16);}
  else{
    x=Math.min(Math.max(16,r.left+r.width/2-pw/2),innerWidth-pw-16);
    if(innerHeight-bot>ph+gap+16)y=bot+gap;else if(top>ph+gap+16)y=top-ph-gap;else y=innerHeight-ph-24;
  }
  pop.style.left=Math.round(x)+"px";pop.style.top=Math.round(y)+"px";
}
function start(at=0){
  ui();T={i:at,el:null};document.body.classList.add("tour-on");
  ["trBlock","trSpot","trPop"].forEach(id=>$(id).hidden=false);
  const p=$("userPop");if(p)p.hidden=true;
  go(at);
}
function end(){
  if(!T)return;T=null;document.body.classList.remove("tour-on");
  ["trBlock","trSpot","trPop"].forEach(id=>{const e=$(id);if(e)e.hidden=true;});
  try{if(location.hash==="#tour")history.replaceState(null,"","#");}catch(e){}
}
window.tourStart=start;

/* "הפעל סיור מודרך" in the side menu and in the user menu */
document.addEventListener("click",e=>{
  const b=e.target.closest("button,a");
  if(b&&!T&&b.textContent.trim().includes("הפעל סיור מודרך")){e.preventDefault();e.stopImmediatePropagation();start(0);return;}
  if(!T)return;
  const x=e.target.closest("[data-tr]");
  if(x){e.preventDefault();const a=x.dataset.tr;
    if(a==="next")T.i>=STEPS.length-1?end():go(T.i+1);
    else if(a==="prev")go(Math.max(0,T.i-1));
    else if(a==="off"){end();try{localStorage.setItem("antartrade:tour-off","1");}catch(_){}toast("הסיור לא ייפתח שוב אוטומטית","אפשר תמיד להפעיל אותו מ'הפעל סיור מודרך'.");}
    else end();
    return;}
  if(e.target.closest("#trBlock")){e.preventDefault();e.stopImmediatePropagation();}
},true);
document.addEventListener("keydown",e=>{
  if(!T)return;
  if(e.key==="Escape"){end();}
  else if(e.key==="ArrowLeft"){e.preventDefault();T.i>=STEPS.length-1?end():go(T.i+1);}
  else if(e.key==="ArrowRight"){e.preventDefault();go(Math.max(0,T.i-1));}
});
addEventListener("resize",()=>T&&place());
addEventListener("scroll",()=>T&&place(),{passive:true});
const boot=()=>{if(/[?&]tourb\b/.test(location.search))setTimeout(()=>start(0),300);};
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",boot);else boot();
})();
