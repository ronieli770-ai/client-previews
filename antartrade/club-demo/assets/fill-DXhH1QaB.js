const l=(t,...e)=>t.replace(/\{(\d+)\}/g,(g,r)=>Number(r)<e.length?String(e[Number(r)]):g);export{l as f};
