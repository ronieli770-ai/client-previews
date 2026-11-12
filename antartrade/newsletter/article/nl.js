/* AntarTrade newsletter, 3 placements (Roni, 12.11) - preview mount. On the site this becomes one NewsletterSignup component with 3 variants.
   Noam's copy word for word. Submit: on the site it posts {first_name,email} to the newsletter-signup function (Noam's Claude). */
(()=>{
const BASE=(document.querySelector('link[rel="manifest"]')||{}).href?.replace(/\/site\.webmanifest$/,"")||"";
const EN=t=>t.replace(/AntarTrade/g,'<span class="en" lang="en" dir="ltr">AntarTrade</span>');
const T={title:"הצטרפו לניוזלטר של AntarTrade",sub:"עדכונים מחברות המימון, טיפים במסחר, מבצעים והגרלות על מבחנים",
  name:"שם פרטי",mail:"מייל",btn:"אני רוצה להצטרף",fine:"בלחיצה אני מאשר/ת לקבל דיוור מ-AntarTrade. אפשר להסיר את עצמכם בכל רגע.",ok:"נרשמת! בדקו את המייל, הודעת הפתיחה כבר בדרך."};
const OK='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8 12.4l2.7 2.6L16 9.6"/></svg>';
const ARR='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>';
const MARK=BASE+"/home-new/img/bg-brain-dark.svg";
const form=()=>`<form class="nl-form" novalidate><div class="nl-row"><input class="nl-in" name="first_name" type="text" autocomplete="given-name" placeholder="${T.name}" aria-label="${T.name}"><input class="nl-in" name="email" type="email" dir="auto" autocomplete="email" placeholder="${T.mail}" aria-label="${T.mail}"><button class="nl-btn" type="submit"><span>${T.btn}</span>${ARR}</button></div><p class="nl-fine">${EN(T.fine)}</p></form><div class="nl-ok" role="status">${OK}<span>${T.ok}</span></div>`;
const banner=()=>`<section class="nl-banner nl-wrap" data-theme="dark" data-nl="banner"><div class="nl-card"><div><h2>${EN(T.title)}</h2><p class="sub">${T.sub}</p></div><div class="nl-box">${form()}</div></div></section>`;
const strip=()=>`<section class="nl-strip nl-wrap" data-theme="dark" data-nl="strip"><div class="nl-card"><div><h2>${EN(T.title)}</h2><p class="sub">${T.sub}</p></div><div class="nl-box">${form()}</div></div></section>`;
const art=()=>`<aside class="nl-art nl-card nl-wrap" data-nl="article"><h3>${EN(T.title)}</h3><p class="sub">${T.sub}</p>${form()}</aside>`;
function mount(){
  /* banner: home after the deals; deals and comparison pages before their closing parts */
  const deals=document.getElementById("deals");
  if(deals&&deals.classList.contains("s-deals")&&!document.querySelector('[data-nl="banner"]'))deals.insertAdjacentHTML("afterend",banner());
  /* article box: inside the white text container, before the heading nearest the middle */
  const body=document.querySelector(".an-body");
  if(body&&!body.querySelector('[data-nl="article"]')){
    const hs=[...body.querySelectorAll("h2")];
    if(hs.length>2){const h=hs[Math.floor(hs.length/2)];h.insertAdjacentHTML("beforebegin",art());}
  }
  /* strip above the footer on every page, except where the banner already invites (one form per page) */
  const st=document.querySelector('[data-nl="strip"]');if(st&&document.querySelector('[data-nl="banner"]'))st.remove();
  const f=document.querySelector("footer.s-footer");
  if(f&&!document.querySelector('[data-nl="strip"]')&&!document.querySelector('[data-nl="banner"]'))f.insertAdjacentHTML("beforebegin",strip());
}
new MutationObserver(()=>mount()).observe(document.documentElement,{childList:true,subtree:true});
document.addEventListener("submit",e=>{const fm=e.target.closest(".nl-form");if(!fm)return;e.preventDefault();
  const n=fm.elements.first_name,m=fm.elements.email;const okN=n.value.trim().length>0,okM=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m.value.trim());
  n.classList.toggle("bad",!okN);m.classList.toggle("bad",!okM);if(!okN){n.focus();return;}if(!okM){m.focus();return;}
  fm.closest(".nl-wrap").classList.add("nl-done");});
document.addEventListener("input",e=>{if(e.target.classList&&e.target.classList.contains("nl-in"))e.target.classList.remove("bad");});
})();
