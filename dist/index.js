import{deepmerge as n}from"deepmerge-ts";import e from"./options/index.js";var l=(r={})=>{for(const o in r)Object.prototype.hasOwnProperty.call(r,o)&&r[o]===!0&&(r[o]=e()[o]);const t=n(e(),r);return t.url=t.url?.endsWith("/")?t.url:`${t.url}/`,{name:"astro-short-urls",hooks:{"astro:build:done":async()=>{}}}};export{l as default};
