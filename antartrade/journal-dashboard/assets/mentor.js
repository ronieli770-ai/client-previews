/* Mentor page (/mentor and /mentor/students) in the journal mock. Copy word for word from Noam's Mentor.tsx and MentorStudents.tsx;
   the emails and student ids are sample data. Uses the mock's own helpers ($, S, PAGES, toast, robotoDigits).
   Hooks itself in, so the master only needs <link href="assets/mentor.css"> and <script src="assets/mentor.js" defer>:
   it adds PAGES.mentor, marks the מנטור link in both menus with data-page="mentor", wraps render() to draw this page
   and wraps setPage() to set body.pg-mentor. */
(function(){
const SV=(p,s)=>`<svg class="i" viewBox="0 0 24 24"${s?` style="${s}"`:""}>${p}</svg>`;
const MI={
 link:'<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
 mail:'<rect x="3.5" y="5.5" width="17" height="13" rx="3"/><path d="M4.5 7.5l7.5 5.5 7.5-5.5"/>',
 stats:'<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
 file:'<path d="M7 3.5h7l4.5 4.5v10.5a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2z"/><path d="M14 3.5V8h4.5M8.5 13h7M8.5 16.5h5"/>',
 copy:'<rect x="8" y="8" width="12" height="12" rx="2.5"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/>',
 check:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',
 trash:'<path d="M4 7h16M10 11v6M14 11v6M6 7l1 12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-12M9 7V4h6v3"/>',
 send:'<path d="M20 4L9.5 14.5M20 4l-6.5 16-4-5.5L4 10.5z"/>',
 users:'<circle cx="9" cy="8" r="3.5"/><path d="M3 19a6 6 0 0 1 12 0"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 13.5a5 5 0 0 1 3 5.5"/>'};
const mico=(k,c)=>`<span class="ico" style="--c:var(--c-${c})">${SV(MI[k])}</span>`;
const mttl=(t,k,c)=>`<div class="ttl">${mico(k,c)}<h2>${t}</h2></div>`;
try{PAGES.mentor=["מנטור","שתף את הביצועים שלך עם מנטור וקבל פידבק על העסקאות"];}catch(e){}

/* the trader's side and the mentor's side; "full" demo = a link and two invitations, "empty" = a new user */
const M={tab:"share",mode:null,share:null,invs:[],email:"",students:[],copied:false,sent:false};
const seed=()=>{
  M.mode=S.mode;M.copied=M.sent=false;M.email="";
  if(S.mode==="empty"){M.share=null;M.invs=[];M.students=[];return;}
  M.share={token:"8f3k2m9q4x7w1z5n",mode:"stats_only"};
  M.invs=[{id:1,email:"dani.mentor@gmail.com",status:"accepted"},{id:2,email:"yossi.k@gmail.com",status:"pending"}];
  M.students=[{id:"3f9a2c1b7e4d",status:"pending"},{id:"a71c0e5f92b8",status:"accepted"},{id:"c4e8b2d6105f",status:"accepted"}];
};
const url=()=>`https://journal.antartrade.co.il/shared/${M.share.token}`;

function shareBlk(){
  let b;
  if(!M.share) b=`<button class="btn2" data-mtcreate>${SV(MI.link,"width:16px;height:16px")}צור לינק שיתוף</button>`;
  else {
    const opt=(v,k,t,d)=>`<button type="button" class="mt-opt ${M.share.mode===v?"on":""}" data-mtmode="${v}" role="radio" aria-checked="${M.share.mode===v}"><span class="rd"></span><span class="tx"><b>${SV(MI[k])}${t}</b><small>${d}</small></span></button>`;
    b=`<div class="mt-box"><p class="mt-q">מה המנטור יראה?</p><div class="mt-opts" role="radiogroup">
      ${opt("stats_only","stats","סטטיסטיקות בלבד","המנטור יראה מדדים, עקומת הון, לוח שנה ופירוט סטטיסטי - ללא חשבונות ופירוט עסקאות")}
      ${opt("full","file","הכל (כולל חשבונות ועסקאות)","המנטור יראה את כל הסטטיסטיקות + כל החשבונות עם אפשרות סינון, טבלת עסקאות מלאה ולוח שנה")}
    </div></div>
    <div class="mt-row"><input class="inp" value="${url()}" readonly aria-label="לינק שיתוף"><button class="mt-ib ${M.copied?"ok":""}" data-mtcopy aria-label="העתק">${SV(M.copied?MI.check:MI.copy)}</button></div>
    <button class="btnd mt-cancel" data-mtcancel>${SV(MI.trash,"width:16px;height:16px")}בטל לינק</button>`;
  }
  return `<section class="blk"><div class="bh">${mttl("לינק שיתוף מהיר","link","sky")}</div><p class="mt-desc">צור לינק ייחודי שהמנטור יכול לפתוח בדפדפן - ללא צורך בהרשמה</p>${b}</section>`;
}
function inviteBlk(){
  const list=M.invs.length?`<p class="mt-sub">הזמנות שנשלחו:</p><div class="mt-list">${M.invs.map(i=>`<div class="mt-item"><div class="mt-who"><span class="mt-st ${i.status==="accepted"?"on":"wait"}">${i.status==="accepted"?"מחובר":"ממתין"}</span><span class="mail">${i.email}</span></div><button class="mt-del" data-mtdel="${i.id}" aria-label="מחק הזמנה">${SV(MI.trash,"width:16px;height:16px")}</button></div>`).join("")}</div>`:"";
  return `<section class="blk"><div class="bh">${mttl("הזמן מנטור","mail","violet")}</div><p class="mt-desc">הזמן מנטור באימייל - אחרי ההרשמה שלו הוא יוכל להוסיף הערות על העסקאות</p>
    <div class="mt-row"><input class="inp" id="mtEmail" type="email" placeholder="אימייל המנטור" value="${M.email}" autocomplete="off"><button class="btn2 mt-send ${M.sent?"ok":""}" data-mtsend ${M.email.trim()||M.sent?"":"disabled"}>${SV(M.sent?MI.check:MI.send,"width:16px;height:16px")}${M.sent?"נשלח":"שלח"}</button></div>${list}</section>`;
}
function studentsView(){
  if(!M.students.length) return `<section class="blk"><div class="mt-empty">${SV(MI.users)}<p style="margin:0">עדיין לא הוזמנת כמנטור על ידי אף תלמיד</p></div></section>`;
  const pend=M.students.filter(s=>s.status==="pending"),acc=M.students.filter(s=>s.status==="accepted");
  const row=(s,end)=>`<div class="mt-item"><div class="mt-who">${end}<span>תלמיד מזהה: <span class="en" dir="ltr" style="unicode-bidi:isolate">${s.id.slice(0,8)}...</span></span></div>${s.status==="pending"?`<button class="btn2" data-mtaccept="${s.id}">${SV(MI.check,"width:16px;height:16px")}אשר הזמנה</button>`:""}</div>`;
  return (pend.length?`<section class="blk"><div class="bh"><h2>הזמנות ממתינות</h2></div><div class="mt-list">${pend.map(s=>row(s,"")).join("")}</div></section>`:"")
   +(acc.length?`<section class="blk"><div class="bh"><h2>תלמידים מחוברים</h2></div><div class="mt-list">${acc.map(s=>row(s,'<span class="mt-st on">מחובר</span>')).join("")}</div></section>`:"");
}
function view(el){
  el=el||$("content");if(!el)return;
  if(M.mode!==S.mode)seed();
  const st=M.tab==="students";
  $("pgTitle").textContent=st?"התלמידים שלי":"מנטור";
  $("pgSub").textContent=st?"צפה בביצועים של התלמידים שהזמינו אותך כמנטור":"שתף את הביצועים שלך עם מנטור וקבל פידבק על העסקאות";
  const tabs=`<div class="seg mt-tabs" role="tablist"><button class="${st?"":"on"}" data-mttab="share">שיתוף עם מנטור</button><button class="${st?"on":""}" data-mttab="students">התלמידים שלי</button></div>`;
  let body;
  if(S.net==="loading") body=`<section class="blk"><div class="mt-empty">טוען...</div></section>`;
  else if(S.net==="down") body=`<section class="blk"><div class="mt-empty">לא ניתן לטעון כרגע</div></section>`;
  else body=st?studentsView():`<div class="mt-grid">${shareBlk()}${inviteBlk()}</div>`;
  el.innerHTML=tabs+body;
  try{robotoDigits(el);}catch(e){}
}
window.mentorView=view;

document.addEventListener("click",e=>{
  if(S.page!=="mentor")return;const q=s=>e.target.closest(s);let x;
  if(x=q("[data-mttab]")){M.tab=x.dataset.mttab;view();return;}
  if(q("[data-mtcreate]")){M.share={token:Math.random().toString(36).slice(2,10)+Math.random().toString(36).slice(2,10),mode:"stats_only"};view();toast("לינק שיתוף נוצר בהצלחה!");return;}
  if(x=q("[data-mtmode]")){if(M.share.mode!==x.dataset.mtmode){M.share.mode=x.dataset.mtmode;view();toast("מצב השיתוף עודכן!");}return;}
  if(q("[data-mtcopy]")){try{navigator.clipboard.writeText(url());}catch(_){}M.copied=true;view();toast("הלינק הועתק!","שלח אותו למנטור שלך");setTimeout(()=>{M.copied=false;if(S.page==="mentor")view();},1800);return;}
  if(q("[data-mtcancel]")){M.share=null;view();toast("הלינק בוטל");return;}
  if(x=q("[data-mtsend]")){const em=M.email.trim();if(!em||M.sent)return;
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)){toast("שגיאה","לא ניתן לשלוח הזמנה",true);return;}
    M.invs=[...M.invs,{id:Date.now(),email:em,status:"pending"}];M.email="";M.sent=true;view();toast("הזמנה נשלחה!",`הזמנה נשלחה ל-${em}`);
    setTimeout(()=>{M.sent=false;if(S.page==="mentor")view();},1800);return;}
  if(x=q("[data-mtdel]")){M.invs=M.invs.filter(i=>String(i.id)!==x.dataset.mtdel);view();return;}
  if(x=q("[data-mtaccept]")){const s=M.students.find(s=>s.id===x.dataset.mtaccept);if(s)s.status="accepted";view();return;}
});
document.addEventListener("input",e=>{
  if(S.page!=="mentor"||e.target.id!=="mtEmail")return;M.email=e.target.value;
  const b=document.querySelector("[data-mtsend]");if(b)b.disabled=!M.email.trim();
});
document.addEventListener("keydown",e=>{if(S.page==="mentor"&&e.target.id==="mtEmail"&&e.key==="Enter"){const b=document.querySelector("[data-mtsend]");if(b&&!b.disabled)b.click();}});
/* hook into the mock: the menus' מנטור link, render() and setPage() */
document.querySelectorAll(".side .nav a,.mnav a").forEach(a=>{if(!a.dataset.page&&a.textContent.trim()==="מנטור")a.dataset.page="mentor";});
try{const r0=render;render=function(){if(S.page==="mentor"){try{filterUi();}catch(_){}view();return;}return r0.apply(this,arguments);};}catch(e){}
try{const s0=setPage;setPage=function(pg){const out=s0.apply(this,arguments);document.body.classList.toggle("pg-mentor",pg==="mentor");return out;};}catch(e){}
if(/^#mentor/.test(location.hash))setPage("mentor");
})();
