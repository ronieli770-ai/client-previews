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
const ST={
 before:{icon:"sun",c:"sky",msg:"עוד לא נכנסת היום. התוכנית: עד 3 עסקאות, ועוצרים אחרי 2 הפסדים ברצף.",today:"p",n:9,t:0,l:0},
 one:{icon:"target",c:"mint",msg:"עסקה ראשונה בפנים, עם סטופ. נשארו לך 2 עסקאות להיום.",today:"p",n:9,t:1,l:0},
 stopped:{icon:"shield",c:"mint",msg:"עצרת אחרי 2 הפסדים, בדיוק לפי הכללים. יום מפסיד עם משמעת לא שובר את הרצף.",today:"p",n:9,t:2,l:2},
 violation:{icon:"alert",c:"sun",msg:"נפתחה היום עסקה רביעית, מעבר למקסימום של 3. מחר מתחילים רצף חדש.",today:"v",n:0,t:4,l:1},
 clean:{icon:"star",c:"sun",msg:"יום נקי, ועכשיו 10 ימים ברצף לפי הכללים. ככה עוברים מבחן.",today:"c",n:10,t:3,l:1,party:true},
 weekend:{icon:"moon",c:"sky",msg:"השוק סגור. 10 ימים נקיים ברצף, זמן טוב לעבור על השבוע.",today:"c",n:10,t:3,l:1}};
const GOALS=[5,10,20,30,60,90];
const LET=["א","ב","ג","ד","ה","ו","ש"];
/* trading days back from today (Mon-Fri) */
const dayLetters=()=>{const out=[];const d=new Date(2026,10,5);while(out.length<14){const w=d.getDay();if(w>0&&w<6)out.unshift(LET[w]);d.setDate(d.getDate()-1);}return out;};
const LETS=dayLetters();
let cur=null;
const en=t=>t.replace(/\d+/g,n=>`<span class="en">${n}</span>`);
function set(k){
  const s=ST[k];const first=cur===null;cur=k;
  const co=$$("coach");
  if(first){co.innerHTML=`<div class="av"><img alt="נועם" src="avatar/noam-${k}.webp"></div><div class="bub"><span>${en(s.msg)}</span></div>`;}
  else{const img=co.querySelector("img"),bub=co.querySelector(".bub");img.classList.add("out");bub.classList.add("swap");
    setTimeout(()=>{img.src=`avatar/noam-${k}.webp`;bub.querySelector("span").innerHTML=en(s.msg);img.classList.remove("out");bub.classList.remove("swap");},260);}
  const n=s.n,goal=GOALS.find(g=>g>n)||90,prev=GOALS.filter(g=>g<=n).pop()||0;
  const nb=$$("stN");nb.textContent=n;$$("stW").textContent=n===1?"יום":"ימים";
  const left=goal-n;
  $$("stGoal").textContent=n===0?"כל יום נקי מקדם אותך ליעד הראשון":left===1?"עוד יום אחד ליעד הבא":`עוד ${left} ימים ליעד של ${goal}`;
  $$("stGoalN").textContent=`${n}/${goal}`;
  $$("stBar").style.width=Math.max(3,n/goal*100)+"%";
  const all=[...PAST,s.today];
  $$("stDays").innerHTML=all.map((x,i)=>`<div class="rs-d ${x}${i===13?" t":""}"><i></i><small>${i===13?"היום":LETS[i]}</small></div>`).join("");
  const pips=(id,v,max,bad)=>{$$(id).innerHTML=Array.from({length:Math.max(max,v)},(_,i)=>`<i class="${i<v?(i>=max||bad?"bad":"on"):""}"></i>`).join("");};
  $$("tdT").innerHTML=`${s.t} <em>/ 3</em>`;pips("tdTp",s.t,3,false);
  $$("tdL").innerHTML=`${s.l} <em>/ 2</em>`;pips("tdLp",s.l,2,s.l>=2);
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
document.addEventListener("click",e=>{const b=e.target.closest(".demo2 [data-st]");if(!b)return;document.querySelectorAll(".demo2 [data-st]").forEach(x=>x.classList.toggle("on",x===b));set(b.dataset.st);});
["before","one","stopped","violation","clean","weekend"].forEach(k=>{const i=new Image();i.src=`avatar/noam-${k}.webp`;});
set("before");
})();
};
const mountAll=()=>{
  if(document.getElementById("coach"))return;
  const sub=document.getElementById("pgSub"),kpis=document.getElementById("kpis");
  if(!sub||!kpis)return;
  sub.insertAdjacentHTML("beforebegin","<div class=\"coach\" id=\"coach\"></div>");
  kpis.insertAdjacentHTML("afterend","\n  <section class=\"blk streak dashonly\" id=\"streak\">\n    <div class=\"bh\"><div class=\"ttl\"><span class=\"ico\" style=\"--c:var(--c-sun)\"><svg class=\"i\" viewBox=\"0 0 24 24\"><path d=\"M12 3.5c.5 3-2.5 4.5-2.5 7.5a2.5 2.5 0 0 0 5 0c0-1-.4-1.8-1-2.5 2.6 1 4.5 3.6 4.5 6.5a6 6 0 0 1-12 0c0-4.6 4.5-7.4 6-11.5z\"/></svg></span><h2>רצף משמעת</h2></div><span class=\"hint\">ימי מסחר בלי אף חריגה מהכללים של האתגר</span></div>\n    <div class=\"rs-grid3\">\n      <div class=\"rs-cell\">\n        <span class=\"rs-l\">ימים נקיים ברצף</span>\n        <div class=\"rs-num\"><b class=\"en\" id=\"stN\">9</b><span id=\"stW\">ימים</span></div>\n        <div class=\"rs-goal\"><span id=\"stGoal\">עוד יום אחד ליעד הבא</span><span class=\"en\" id=\"stGoalN\">9/10</span></div>\n        <div class=\"rs-bar\"><i id=\"stBar\" style=\"width:90%\"></i></div>\n      </div>\n      <div class=\"rs-cell\">\n        <span class=\"rs-l\">14 ימי המסחר האחרונים</span>\n        <div class=\"rs-days\" id=\"stDays\"></div>\n        <div class=\"rs-legend\"><span class=\"c\"><i></i>יום נקי</span><span class=\"v\"><i></i>חריגה</span><span><i></i>בלי עסקאות</span></div>\n      </div>\n      <div class=\"rs-cell\">\n        <span class=\"rs-l\">היום, לפי הכללים שלך</span>\n        <div class=\"rs-today\">\n          <div class=\"rs-tc2\"><small>עסקאות</small><b id=\"tdT\">0 <em>/ 3</em></b><div class=\"rs-pips\" id=\"tdTp\"></div></div>\n          <div class=\"rs-tc2\"><small>הפסדים ברצף</small><b id=\"tdL\">0 <em>/ 2</em></b><div class=\"rs-pips\" id=\"tdLp\"></div></div>\n          <div class=\"rs-best\"><svg class=\"i\" viewBox=\"0 0 24 24\" style=\"width:16px;height:16px;color:var(--c-sun)\"><path d=\"M8 4h8v4a4 4 0 0 1-8 0zM8 6H5a2 2 0 0 0 3 3.5M16 6h3a2 2 0 0 1-3 3.5M12 12v4M8.5 20h7M10 16h4v4h-4z\"/></svg><span>השיא שלך: <b class=\"en\" id=\"stBest\">12</b> ימים נקיים</span></div>\n        </div>\n      </div>\n    </div>\n  </section>\n");
  document.body.insertAdjacentHTML("beforeend","<div class=\"demo demo2 dashonly\" dir=\"rtl\" aria-label=\"מצב היום בהדמיה\"><small>היום:</small><button class=\"on\" data-st=\"before\">לפני המסחר</button><button data-st=\"one\">אחרי עסקה</button><button data-st=\"stopped\">עצר אחרי 2 הפסדים</button><button data-st=\"violation\">חריגה</button><button data-st=\"clean\">סוף יום נקי</button><button data-st=\"weekend\">סופ\"ש</button></div>\n<canvas id=\"confetti\" hidden></canvas>");
  run();
};
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",mountAll);else mountAll();
})();
