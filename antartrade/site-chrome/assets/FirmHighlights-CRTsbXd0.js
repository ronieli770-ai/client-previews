import{d as i}from"./index-CNgfCCYB.js";import{L as m}from"./CompanyOverviewSection-CsIYVUDE.js";import{S as h}from"./sparkles-BlMZl7ZS.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=i("ChartPie",[["path",{d:"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z",key:"pzmjnu"}],["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=i("Clock3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]]),r=t=>{const[a,e]=t.split(":").map(Number);return`${String((a+23)%24).padStart(2,"0")}:${String(e).padStart(2,"0")}`},$=(t,a)=>`שימו לב לשינויי שעון:
ברוב השנה שעות המסחר הן ${t}-${a} לפי שעון ישראל.
פעמיים בשנה, בגלל שישראל וארה״ב מחליפות שעון בתאריכים שונים, שעות המסחר בישראל מוקדמות בשעה:

באביב: מהיום ראשון השני של מרץ ועד יום שישי שלפני יום ראשון האחרון של מרץ.
בסתיו: מיום ראשון האחרון של אוקטובר ועד יום ראשון הראשון של נובמבר.

בתקופות האלה שעות המסחר הן ${r(t)}-${r(a)}.`,b=$("01:00","23:45"),o=t=>{const a=(t??"").trim();return a===""?void 0:a},C=({firmDisplayName:t,profitSplit:a,profitSplitDetail:e,tradingHours:c,tradingHoursDetail:n,tradingHoursTooltip:l,accounts:s,accountsDetail:p,unique:d,uniqueDetail:u})=>[{label:"חלוקת רווחים ומשיכות",icon:v,value:o(a),detail:o(e)},{label:"שעות ותנאי מסחר",icon:S,value:o(c),detail:o(n),tooltip:l===void 0?b:o(l)},{label:"חשבונות והעתק מסחר",icon:m,value:o(s),detail:o(p)},{label:/^[A-Za-z]/.test(t)?`מה מיוחד ב־⁦${t}⁩?`:`מה מיוחד ב${t}?`,icon:h,value:o(d),detail:o(u)}].filter(k=>!!k.value);export{C as b,$ as t};
