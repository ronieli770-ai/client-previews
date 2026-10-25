import{c as o}from"./index-C6W9vpMJ.js";import{L as k}from"./CompanyOverviewSection-kWtGhSfD.js";import{S as u}from"./sparkles-Bgg0nelN.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=o("ChartPie",[["path",{d:"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z",key:"pzmjnu"}],["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=o("Clock3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]]),b=`שימו לב לשינויי שעון:
ברוב השנה שעות המסחר הן 01:00-23:45 לפי שעון ישראל.
פעמיים בשנה, בגלל שישראל וארה״ב מחליפות שעון בתאריכים שונים, שעות המסחר בישראל מוקדמות בשעה:

באביב: מהיום ראשון השני של מרץ ועד יום שישי שלפני יום ראשון האחרון של מרץ.
בסתיו: מיום ראשון האחרון של אוקטובר ועד יום ראשון הראשון של נובמבר.

בתקופות האלה שעות המסחר הן 00:00-22:45.`,e=l=>{const a=(l??"").trim();return a===""?void 0:a},L=({firmDisplayName:l,profitSplit:a,profitSplitDetail:i,tradingHours:c,tradingHoursDetail:r,tradingHoursTooltip:t,accounts:n,accountsDetail:p,unique:s,uniqueDetail:m})=>[{label:"חלוקת רווחים ומשיכות",icon:v,value:e(a),detail:e(i)},{label:"שעות ותנאי מסחר",icon:y,value:e(c),detail:e(r),tooltip:t===void 0?b:e(t)},{label:"חשבונות והעתק מסחר",icon:k,value:e(n),detail:e(p)},{label:`מה מיוחד ב${l}?`,icon:u,value:e(s),detail:e(m)}].filter(d=>!!d.value);export{L as b};
