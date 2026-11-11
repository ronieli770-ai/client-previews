/* theme switch for Noam's review: light (default) / improved dark / current dark, kept per browser.
   Light mode: the tokens flip in theme.css; the dark colours written straight into the other style files
   are found here at load and re-mapped into one generated style block, so no other file is touched. */
(function(){
  var KEY="journal-theme", m=location.search.match(/[?&]theme=(light|dark2|dark)/), th="light";
  try{th=localStorage.getItem(KEY)||th;}catch(_){}
  if(m)th=m[1];
  var NAVY="16, 32, 61";
  function mapBg(v,hover){
    return v.replace(/rgba?\((\d+), (\d+), (\d+)(?:, (0?\.?[\d.]+))?\)/g,function(all,r,g,b,al){
      r=+r;g=+g;b=+b;var av=(r+g+b)/3,mx=Math.max(r,g,b),A=al==null?1:+al;
      if(mx<=60){ if(A<1)return "rgba("+NAVY+", "+(A*.45).toFixed(3)+")";
        if(av<=18)return "rgb(241, 245, 250)"; if(av<=27)return hover?"rgb(230, 236, 244)":"rgb(238, 242, 247)"; return hover?"rgb(230, 236, 244)":"rgb(255, 255, 255)"; }
      if(r===255&&g===255&&b===255&&A<=.3)return "rgba("+NAVY+", "+Math.min(.5,A*1.3).toFixed(3)+")";
      return all;});
  }
  function pre(sel){var out=[],d=0,c="";for(var i=0;i<sel.length;i++){var ch=sel[i];if(ch==="("||ch==="[")d++;if(ch===")"||ch==="]")d--;if(ch===","&&!d){out.push(c);c="";}else c+=ch;}out.push(c);
    return out.map(function(s){s=s.trim();if(/^(:root|html)\b/.test(s))return s.replace(/^(:root|html)/,'html[data-th="light"]');return 'html[data-th="light"] '+s;}).join(",");}
  function scan(rules,acc){
    for(var i=0;i<rules.length;i++){var r=rules[i];
      if(r.cssRules&&r.media){var inner=[];scan(r.cssRules,inner);if(inner.length)acc.push("@media "+r.media.mediaText+"{"+inner.join("")+"}");continue;}
      if(!r.style||!r.selectorText)continue;
      var st=r.style,hover=/:hover|:focus/.test(r.selectorText),decl=[];
      ["background-color","background-image","border-top-color","border-bottom-color","outline-color"].forEach(function(p){var v=st.getPropertyValue(p);if(!v)return;var n=mapBg(v,hover);if(n!==v)decl.push(p+":"+n+(st.getPropertyPriority(p)?" !important":""));});
      if(!st.getPropertyValue("background-color")&&!st.getPropertyValue("background-image")){var sb=st.getPropertyValue("background");if(sb){var nb=mapBg(sb,hover);if(nb!==sb)decl.push("background:"+nb+(st.getPropertyPriority("background")?" !important":""));}}
      var bgv=st.getPropertyValue("background-color")+st.getPropertyValue("background-image")+st.getPropertyValue("background");
      var col=st.getPropertyValue("color");
      var accentBg=/rgb\((?:\d{2,3}, ){2}\d+\)/.test(bgv)&&!/rgb\((?:[0-5]?\d, ){2}[0-5]?\d\)|rgb\(255, 255, 255\)/.test(bgv)||/linear-gradient\(.*rgb\((?:1[0-9]{2}|2[0-9]{2}),/.test(bgv);
      if(col&&/^rgb\((1[18]|11), (2[2]|14), (31|20)\)$/.test(col)&&/var\(--fg\)|rgb\(2[0-9]{2}, 2[0-9]{2}, 2[0-9]{2}\)/.test(bgv+st.getPropertyValue("background")))decl.push("color:#fff");
      if(col&&!accentBg){
        if(/^rgb\(255, 255, 255\)$|^rgb\(238, 243, 250\)$/.test(col))decl.push("color:var(--fg)"+(st.getPropertyPriority("color")?" !important":""));
        else{var mm=col.match(/^rgba\((?:255, 255, 255|238, 243, 250), (0?\.\d+)\)$/);if(mm)decl.push("color:rgba("+NAVY+", "+Math.min(.85,+mm[1]+.08).toFixed(3)+")");}
      }
      var sh=st.getPropertyValue("box-shadow");if(sh&&/rgba\(0, 0, 0, 0?\.[3-9]/.test(sh))decl.push("box-shadow:"+sh.replace(/rgba\(0, 0, 0, (0?\.\d+)\)/g,function(_,a){return "rgba("+NAVY+", "+(+a*.35).toFixed(3)+")";}));
      if(decl.length)acc.push(pre(r.selectorText)+"{"+decl.join(";")+"}");
    }
  }
  var built=false;
  function buildLight(){
    var acc=[];for(var i=0;i<document.styleSheets.length;i++){var s=document.styleSheets[i];if(s.ownerNode&&(s.ownerNode.id==="th-light"||(s.ownerNode.hasAttribute&&s.ownerNode.hasAttribute("data-th-css"))))continue;try{scan(s.cssRules,acc);}catch(_){}}
    var el=document.getElementById("th-light");if(!el){el=document.createElement("style");el.id="th-light";document.head.appendChild(el);}
    el.textContent=acc.join("\n");built=true;
  }
  function set(v){th=v;document.documentElement.setAttribute("data-th",v);try{localStorage.setItem(KEY,v);}catch(_){}
    if(v==="light"&&!built)buildLight();
    var b=document.querySelectorAll(".th-sw button");for(var i=0;i<b.length;i++)b[i].classList.toggle("on",b[i].getAttribute("data-th")===v);}
  document.documentElement.setAttribute("data-th",th);
  function ui(){if(document.querySelector(".th-sw"))return;var d=document.createElement("div");d.className="th-sw";d.setAttribute("role","group");d.setAttribute("aria-label","\u05ea\u05e6\u05d5\u05d2\u05d4");
    d.innerHTML='<span>\u05ea\u05e6\u05d5\u05d2\u05d4:</span><button data-th="light">\u05d1\u05d4\u05d9\u05e8</button><button data-th="dark2">\u05db\u05d4\u05d4 \u05de\u05e9\u05d5\u05e4\u05e8</button><button data-th="dark">\u05db\u05d4\u05d4, \u05d4\u05d2\u05e8\u05e1\u05d4 \u05d4\u05e0\u05d5\u05db\u05d7\u05d9\u05ea</button>';
    d.addEventListener("click",function(e){var t=e.target.closest("button");if(t)set(t.getAttribute("data-th"));});document.body.appendChild(d);set(th);}
  function go(){ui();if(th==="light"){built=false;buildLight();}}
  if(document.readyState==="complete")go();else window.addEventListener("load",go);
})();
