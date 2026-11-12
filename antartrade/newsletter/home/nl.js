/* AntarTrade newsletter, 3 placements (Roni, 12.11) - preview mount. On the site this becomes one NewsletterSignup component with 3 variants.
   Noam's copy word for word (the two error lines are ours, to confirm with Noam).
   Submit: on the site it posts {first_name,email} to the newsletter-signup function (Noam's Claude); the preview fakes the send. */
(()=>{
const EN=t=>t.replace(/AntarTrade/g,'<span class="en" lang="en" dir="ltr">AntarTrade</span>');
const T={title:"הצטרפו לניוזלטר של AntarTrade",sub:"עדכונים מחברות המימון, טיפים במסחר, מבצעים והגרלות על מבחנים",
  name:"שם פרטי",mail:"מייל",btn:"אני רוצה להצטרף",fine:"בלחיצה אני מאשר/ת לקבל דיוור מ-AntarTrade. אפשר להסיר את עצמכם בכל רגע.",
  okT:"נרשמת!",okS:"בדקו את המייל, הודעת הפתיחה כבר בדרך.",errN:"צריך למלא שם פרטי",errM:"המייל לא נראה תקין, כדאי לבדוק שוב"};
const ARR='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>';
const ALERT='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7.5v5.5M12 16.5h.01"/></svg>';
const CHECK='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 12.5l4 4L18 8"/></svg>';
const form=()=>`<form class="nl-form" novalidate><div class="nl-row"><input class="nl-in" name="first_name" type="text" autocomplete="given-name" placeholder="${T.name}" aria-label="${T.name}"><input class="nl-in" name="email" type="email" autocomplete="email" placeholder="${T.mail}" aria-label="${T.mail}"><button class="nl-btn" type="submit"><span>${T.btn}</span>${ARR}<i class="nl-spin"></i></button></div><p class="nl-err n">${ALERT}${T.errN}</p><p class="nl-err m">${ALERT}${T.errM}</p><p class="nl-fine">${EN(T.fine)}</p></form><div class="nl-ok" role="status"><div class="nl-okc">${CHECK}</div><div class="nl-okt">${T.okT}</div><span>${T.okS}</span></div>`;
const head=tag=>`<div><${tag}>${EN(T.title)}</${tag}><p class="sub">${T.sub}</p></div>`;
const banner=()=>`<section class="nl-banner nl-wrap" data-theme="dark" data-nl="banner"><div class="nl-card">${head("h2")}<div class="nl-box">${form()}</div></div></section>`;
const strip=()=>`<section class="nl-strip nl-wrap" data-theme="dark" data-nl="strip"><div class="nl-card">${head("h2")}<div class="nl-box">${form()}</div></div></section>`;
const art=()=>`<aside class="nl-art nl-card nl-wrap" data-nl="article"><h3>${EN(T.title)}</h3><p class="sub">${T.sub}</p>${form()}</aside>`;
const BIG=/\/(promotions-new|comparison-new)\/?$/;
function mount(){
  /* Roni 12.11: one version only - the tall banner, on every page. Home: right after the deals. Every other page: just before the footer. */
  if(document.querySelector('[data-nl="banner"]')){bar();return;}
  const deals=document.getElementById("deals"),f=document.querySelector("footer.s-footer");
  if(deals&&deals.classList.contains("s-deals"))deals.insertAdjacentHTML("afterend",banner());
  else if(f)f.insertAdjacentHTML("beforebegin",banner());
  bar();
}
const STATES={idle:"",name:"nl-bad-name",mail:"nl-bad-mail",send:"nl-sending",done:"nl-done"};
function show(w,k){w.classList.remove(...Object.values(STATES).filter(Boolean));if(STATES[k])w.classList.add(STATES[k]);}
new MutationObserver(()=>mount()).observe(document.documentElement,{childList:true,subtree:true});
document.addEventListener("submit",e=>{const fm=e.target.closest(".nl-form");if(!fm)return;e.preventDefault();const w=fm.closest(".nl-wrap");
  const n=fm.elements.first_name,m=fm.elements.email;
  if(!n.value.trim()){show(w,"name");n.focus();return;}
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m.value.trim())){show(w,"mail");m.focus();return;}
  show(w,"send");setTimeout(()=>show(w,"done"),1100);});
document.addEventListener("input",e=>{if(e.target.classList&&e.target.classList.contains("nl-in"))e.target.closest(".nl-wrap").classList.remove("nl-bad-name","nl-bad-mail");});
/* preview only: a small bar to flip every newsletter block on the page between its states */
function bar(){if(document.getElementById("nlDemo")||!document.querySelector("[data-nl]"))return;
  document.body.insertAdjacentHTML("beforeend",`<div id="nlDemo" dir="rtl"><small>ניוזלטר:</small>${[["idle","רגיל"],["name","בלי שם"],["mail","מייל לא תקין"],["send","שולח"],["done","נרשמת"]].map((x,i)=>`<button data-nlst="${x[0]}" class="${i?"":"on"}">${x[1]}</button>`).join("")}<button data-nlgo>לגלול אליו</button></div>`);}
document.addEventListener("click",e=>{const b=e.target.closest("[data-nlst]");
  if(b){document.querySelectorAll("[data-nlst]").forEach(x=>x.classList.toggle("on",x===b));document.querySelectorAll(".nl-wrap").forEach(w=>show(w,b.dataset.nlst));return;}
  if(e.target.closest("[data-nlgo]")){const all=[...document.querySelectorAll("[data-nl]")];const next=all.find(x=>x.getBoundingClientRect().top>120)||all[0];next&&next.scrollIntoView({behavior:"smooth",block:"center"});}});
})();
