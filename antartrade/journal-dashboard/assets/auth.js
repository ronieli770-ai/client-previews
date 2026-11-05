/* Login and signup (/auth) in the journal mock. Copy word for word from Noam's Auth.tsx (login, signup, forgot password, check your email);
   the look follows the reset-password screen (#rp). Uses the mock's own helpers ($, S, setPage, toast).
   Hooks itself in: adds section#au, opens on #auth, wraps setPage() so "auth" shows this screen and any other page hides it,
   and the user menu's התנתק leads here. The master only needs <link href="assets/auth.css"> and <script src="assets/auth.js" defer>. */
(function(){
const SV=(p,s)=>`<svg class="i" viewBox="0 0 24 24"${s?` style="${s}"`:""}>${p}</svg>`;
const AI={
 trend:'<path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/>',
 bars:'<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
 target:'<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r=".8"/>',
 shield:'<path d="M12 3l7.5 3v5.5c0 4.5-3.2 8.2-7.5 9.5-4.3-1.3-7.5-5-7.5-9.5V6z"/>',
 mail:'<rect x="3.5" y="5.5" width="17" height="13" rx="3"/><path d="M4.5 7.5l7.5 5.5 7.5-5.5"/>',
 eye:'<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/>',
 eyeoff:'<path d="M3 3l18 18"/><path d="M10.6 5.6A9.7 9.7 0 0 1 12 5.5c6 0 9.5 6.5 9.5 6.5a17 17 0 0 1-3.1 3.9M6.6 6.6C3.9 8.3 2.5 12 2.5 12S6 18.5 12 18.5c1.6 0 3-.4 4.3-1.1"/><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"/>'};
const GOOGLE='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>';
const FEATS=[["trend","מעקב מדויק","חישוב P&L ברמת דיוק של טיק"],["bars","אנליטיקס מתקדם","גרפים וסטטיסטיקות בזמן אמת"],["target","תמיכה בחברות מימון","מותאם לחוקי Apex, Take Profit, Lucid Trading ועוד"],["shield","אבטחה מלאה","הנתונים שלך מוגנים ומאובטחים"]];
const HEB=/^[א-ת]+(?:[ '׳״-][א-ת]+)*$/;
const nameErr=v=>{const t=v.trim();return t.length<2||!HEB.test(t)?"יש להזין שם בעברית בלבד":null;};
const esc=v=>String(v).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

/* mode: login | signup | forgot | sent */
const A={mode:"login",email:"",pw:"",name:"",nameErr:null,terms:false,show:false,busy:false,gbusy:false};

const en=t=>t.replace(/(P&L|Apex|Take Profit|Lucid Trading|Google|AntarTrade)/g,'<span class="en">$1</span>');
function card(){
  if(A.mode==="sent") return `<div class="cbcard rpcard">
    <span class="au-mailic">${SV(AI.mail)}</span>
    <h1 class="cbt rpt">בדוק את המייל שלך</h1>
    <p class="cbp" style="margin:0">שלחנו קישור אימות לכתובת</p>
    <p class="au-addr">${esc(A.email||"your@email.com")}</p>
    <p class="cbp" style="margin:0">לחץ על הקישור במייל כדי להפעיל את החשבון שלך ולהתחיל להשתמש ביומן המסחר.</p>
    <p class="au-small">לא קיבלת מייל? בדוק את תיקיית הספאם או נסה להירשם שוב.</p>
    <button class="btn2 au-back" type="button" data-aumode="login">חזרה להתחברות</button></div>`;
  const login=A.mode==="login",signup=A.mode==="signup",forgot=A.mode==="forgot";
  const title=forgot?"שכחת סיסמה?":login?"ברוך הבא":"צור חשבון";
  const sub=forgot?"הזן את כתובת המייל שלך ונשלח לך קישור לאיפוס הסיסמה":login?"התחבר כדי להמשיך ליומן המסחר שלך":"הירשם כדי להתחיל לעקוב אחרי העסקאות שלך";
  const pwShort=signup&&A.pw.length>0&&A.pw.length<6;
  let f="";
  if(signup) f+=`<div class="fld"><label for="auName">שם מלא</label><input class="inp ${A.nameErr?"bad":""}" id="auName" type="text" placeholder="השם המלא שלך" value="${esc(A.name)}" autocomplete="name">${A.nameErr?`<p class="au-err">${A.nameErr}</p>`:""}</div>`;
  f+=`<div class="fld"><label for="auEmail">אימייל</label><input class="inp ltr" id="auEmail" type="email" placeholder="your@email.com" value="${esc(A.email)}" autocomplete="email"></div>`;
  if(!forgot) f+=`<div class="fld"><div class="au-flab"><label for="auPw">סיסמה</label>${login?`<button type="button" class="au-link" data-aumode="forgot">שכחת סיסמה?</button>`:""}</div>
    <div class="pwbox"><input class="inp ${pwShort?"bad":""}" id="auPw" dir="rtl" type="${A.show?"text":"password"}" placeholder="${signup?"לפחות 6 תווים":"••••••••"}" value="${esc(A.pw)}" autocomplete="${signup?"new-password":"current-password"}"><button type="button" class="pweye ${A.show?"on":""}" data-aueye aria-label="${A.show?"הסתר סיסמה":"הצג סיסמה"}" tabindex="-1">${SV(A.show?AI.eyeoff:AI.eye)}</button></div>
    ${pwShort?`<p class="au-err">הסיסמה חייבת להכיל לפחות 6 תווים</p>`:""}</div>`;
  if(signup) f+=`<label class="au-terms"><input type="checkbox" class="ck" id="auTerms" ${A.terms?"checked":""}><span>אני מסכים/ה ל<a href="#" data-page="terms">תנאי השימוש והתקנון</a></span></label>`;
  const goTxt=A.busy?"טוען...":forgot?"שלח קישור איפוס":login?"התחבר":"הירשם";
  const goOff=A.busy||(signup&&!A.terms);
  return `<form class="cbcard rpcard" id="auForm" novalidate>
    <span class="rpbulb"><img src="assets/bulb.svg" alt="AntarTrade"></span>
    <span class="rptag">ברוכים הבאים ל-<span class="en">AntarTrade</span></span>
    <h1 class="cbt rpt">${title}</h1>
    <p class="cbp">${sub}</p>
    <div class="rpflds">${f}</div>
    <button class="btn2 rpgo" type="submit" ${goOff?"disabled":""}>${goTxt}</button>
    ${forgot?"":`<p class="au-or">או</p><button type="button" class="au-google" data-augoogle ${A.gbusy?"disabled":""}>${GOOGLE}<span>${A.gbusy?"מתחבר...":en("התחבר עם Google")}</span></button>`}
    <p class="au-swap">${forgot?`<button type="button" class="au-link" data-aumode="login">חזרה להתחברות</button>`:`${login?"אין לך חשבון?":"כבר יש לך חשבון?"} <button type="button" class="au-link" data-aumode="${login?"signup":"login"}">${login?"הירשם":"התחבר"}</button>`}</p>
  </form>`;
}
function side(){
  return `<div class="au-side"><p class="lead">יומן המסחר המתקדם שלך. עקוב, נתח ושפר את הביצועים שלך.</p>
    ${FEATS.map(([k,t,d])=>`<div class="au-feat"><span class="ico">${SV(AI[k])}</span><div><b>${t}</b><small>${en(d)}</small></div></div>`).join("")}</div>`;
}
function draw(focusId){
  const w=$("auWrap");if(!w)return;
  w.innerHTML=card()+side();
  document.querySelectorAll("#au [data-aust]").forEach(b=>b.classList.toggle("on",b.dataset.aust===A.mode));
  if(focusId){const el=$(focusId);if(el){el.focus();const n=el.value.length;try{el.setSelectionRange(n,n);}catch(_){}}}
}
const go=m=>{A.mode=m;A.busy=A.gbusy=false;if(m!=="signup"){A.terms=false;A.nameErr=null;}draw();};

/* the screen itself, next to the reset-password one */
const mount=()=>{
  if($("au"))return;
  const html=`<section class="nf" id="au" dir="rtl" hidden>
    <div class="rpbg" aria-hidden="true"><img class="sc" src="assets/deals-bg.webp" alt=""></div>
    <a class="nflogo" href="#" data-page="dash"><img src="assets/logo-white.svg" alt="AntarTrade"></a>
    <div class="au-wrap" id="auWrap"></div>
    <div class="cbsw" aria-label="מצב תצוגה בהדמיה"><small>הדמיה:</small><button data-page="dash">חזרה</button><button data-aust="login">התחברות</button><button data-aust="signup">הרשמה</button><button data-aust="forgot">שכחת סיסמה</button><button data-aust="sent">בדוק את המייל</button><button data-aust="unverified">מייל לא אומת</button></div>
  </section>`;
  const rp=$("rp");if(rp)rp.insertAdjacentHTML("afterend",html);else document.body.insertAdjacentHTML("beforeend",html);
  draw();
};
const show=on=>{const s=$("au");if(!s)return;s.hidden=!on;document.body.classList.toggle("pg-auth",on);};

function hook(){
  mount();
  try{
    const s0=setPage;
    setPage=function(pg){
      if(pg==="auth"){
        ["nf","cb","rp","terms"].forEach(id=>{const el=$(id);if(el)el.hidden=true;});
        [...document.body.classList].filter(c=>c.startsWith("pg-")).forEach(c=>document.body.classList.remove(c));
        S.page="auth";show(true);try{history.replaceState(null,"","#auth");}catch(e){}scrollTo(0,0);return;
      }
      show(false);return s0.apply(this,arguments);
    };
  }catch(e){}
  if(location.hash==="#auth")setPage("auth");
}

/* the user menu's התנתק leads to the login screen */
document.addEventListener("click",e=>{if(!e.target.closest(".umenu .bye"))return;e.preventDefault();e.stopImmediatePropagation();const p=$("userPop");if(p)p.hidden=true;const w=$("whoBtn");if(w)w.setAttribute("aria-expanded","false");A.mode="login";A.pw="";draw();setPage("auth");},true);
document.addEventListener("click",e=>{
  const q=s=>e.target.closest(s);let x;
  if(S.page!=="auth")return;
  if(x=q("[data-aust]")){
    if(x.dataset.aust==="unverified"){go("login");if(!A.email)A.email="trader@gmail.com";if(!A.pw)A.pw="123456";draw();toast("שגיאה","המייל שלך עדיין לא אומת. בדוק את תיבת הדואר שלך ולחץ על קישור האימות.",true);return;}
    if(x.dataset.aust==="sent"&&!A.email)A.email="your@email.com";
    go(x.dataset.aust);return;}
  if(x=q("[data-aumode]")){go(x.dataset.aumode);return;}
  if(q("[data-aueye]")){A.show=!A.show;draw("auPw");return;}
  if(q("[data-augoogle]")){if(A.gbusy)return;A.gbusy=true;draw();setTimeout(()=>{A.gbusy=false;setPage("dash");},1200);return;}
});
document.addEventListener("input",e=>{
  if(S.page!=="auth")return;const t=e.target;
  if(t.id==="auEmail")A.email=t.value;
  else if(t.id==="auName"){A.name=t.value;if(A.nameErr){A.nameErr=null;draw("auName");}}
  else if(t.id==="auPw"){const was=A.pw.length>0&&A.pw.length<6;A.pw=t.value;const now=A.mode==="signup"&&A.pw.length>0&&A.pw.length<6;if(was!==now)draw("auPw");}
});
document.addEventListener("change",e=>{if(S.page==="auth"&&e.target.id==="auTerms"){A.terms=e.target.checked;draw();}});
document.addEventListener("focusout",e=>{if(S.page==="auth"&&e.target.id==="auName"){const err=nameErr(A.name);if(err!==A.nameErr){A.nameErr=err;setTimeout(()=>draw(),0);}}});
document.addEventListener("submit",e=>{
  if(e.target.id!=="auForm")return;e.preventDefault();if(A.busy)return;
  const fail=d=>toast("שגיאה",d,true);
  if(A.mode==="signup"){
    if(!A.terms){fail("יש לאשר את תנאי השימוש כדי להירשם");return;}
    const ne=nameErr(A.name);if(ne){A.nameErr=ne;draw();return;}
    if(A.pw.length<6){fail("הסיסמה חייבת להכיל לפחות 6 תווים");return;}
  }
  A.busy=true;draw();
  setTimeout(()=>{
    A.busy=false;
    if(A.mode==="forgot"){toast("נשלח בהצלחה!","בדוק את תיבת המייל שלך לקישור איפוס הסיסמה.");go("login");}
    else if(A.mode==="login"){A.pw="";setPage("dash");}
    else {A.pw="";A.terms=false;A.mode="sent";draw();}
  },900);
});

if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",hook);else hook();
})();
