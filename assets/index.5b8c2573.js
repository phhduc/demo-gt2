import{j as C,r as f,R as B,a as E}from"./vendor.9ad31691.js";const A=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}};A();const i=C.exports.jsx,m=C.exports.jsxs;function L(c){const{row:a,col:s,value:r,click:e,mine:o}=c;return i("div",{className:"node",id:c.id,onClick:u=>e(u,o),children:r})}function F(c,a,s){const r=[];for(let o=0;o<c;o++)for(let u=0;u<a;u++)r.push({x:o,y:u});const e=[];for(;s--;){let o=r.splice(Math.floor(Math.random()*r.length),1);e.push(o[0])}return e}function y(c,a,s){let r=0;for(let e=-1;e<=1;e++)for(let o=-1;o<=1;o++)Array.isArray(s)&&s[c+e]&&s[c+e][a+o]&&s[c+e][a+o]==1&&r++;return r}function N(c,a,s){const r=new Array;for(let e=0;e<c;e++)r.push(new Array(a).fill(0));return r}function M(c,a,s){const r=F(c,a,s),e=N(c,a),o=N(c,a);for(let u=0;u<s;u++)o[r[u].x][r[u].y]=1;for(let u=0;u<c;u++)for(let h=0;h<a;h++)e[u][h]=y(u,h,o);return e}function S(c){const a=c.length,s=c[0].length,r=N(a,a),e=[],o=t=>{for(let n=t;n<a;n++)for(let d=0;d<s;d++)e.push({x:n,y:d,class:"node"})},u=(t,n)=>{if(t>=a||n>=s)return!1;r[t][n]=0;let d=y(t-1,n-1,r);return d==c[t-1][n-1]?(r[t][n]=0,e.push({x:t,y:n,class:"safe"}),!0):d==c[t-1][n-1]-1?(r[t][n]=1,e.push({x:t,y:n,class:"mine"}),!0):(e.push({x:t,y:n,class:"err"}),!1)},h=()=>{o(0);let t=0;for(;r[0][t]!=0&&t<=s-1;)t++;if(t==s){for(let n=0;n<s;n++)e.push({x:0,y:n,class:"backtrack"}),e.push({x:1,y:n,class:"mine"});return!1}r[0][t]=1;for(let n=0;n<t;n++)r[0][n]=0;for(let n=0;n<s;n++)e.push({x:0,y:n,class:"backtrack"}),r[0][n]==0?e.push({x:0,y:n,class:"safe"}):e.push({x:0,y:n,class:"mine"});return!0};for(let t=0;t<s;t++)e.push({x:0,y:t,class:"backtrack"}),e.push({x:1,y:t,class:"safe"});const g=()=>{for(let t=0;t<s;t++)if(y(a-1,t,r)!=c[a-1][t])return e.push({x:a-1,y:t,class:"error"}),!1;return!0},v=t=>{if(o(t),t==0||t>a)return!1;for(let n=0;n<=1;n++){r[t][0]=n,e.push({x:t,y:0,class:"backtrack"}),n==0?e.push({x:t,y:0,class:"safe"}):e.push({x:t,y:0,class:"mine"});let d=1;for(;u(t,d);)d++;if(d==s&&y(t-1,s-1,r)!=c[t-1][s-1]&&e.push({x:t,y:d-1,class:"error"}),d==s&&y(t-1,s-1,r)==c[t-1][s-1])if(t==a-1){if(g())return!0}else return v(t+1)}return!1};do if(v(1))return{mapMine:r,cellStatus:e};while(h())}function I(){const[c,a]=f.exports.useState(1),[s,r]=f.exports.useState(5),[e,o]=f.exports.useState(5),[u,h]=f.exports.useState(13),[g,v]=f.exports.useState(M(e,s,u)),[t,n]=f.exports.useState(S(g)),[d,w]=f.exports.useState([]),R=f.exports.useCallback((l,p)=>{if(p)l.target.className+=" mine",document.getElementById("you-lose").style.display="block";else{l.target.className+=" safe";let b=[...d];b.push(l.target.id),w([...new Set(b)]),d.length===e*s-u-1&&(document.getElementById("you-won").style.display="block",w(1))}}),x=f.exports.useCallback(()=>{document.getElementById("you-lose").style.display="none",document.getElementById("you-won").style.display="none";for(let l=0;l<e;l++)for(let p=0;p<s;p++)document.getElementById(`node-${l}-${p}`).className="node"}),$=f.exports.useCallback(()=>{x();let l=M(e,s,u);n(S(l)),v(l),console.log(t.mapMine)});function j(l){return new Promise(p=>setTimeout(p,l*300))}return m("div",{children:[i("div",{className:"header",children:m("div",{className:"create-matrix",children:[m("div",{className:"input-container",children:[i("label",{htmlFor:"input-row",children:"Row"}),i("input",{type:"number",name:"input-row",id:"input-row",value:e,onChange:l=>o(l.target.value)})]}),m("div",{className:"input-container",children:[i("label",{htmlFor:"input-col",children:"Col"}),i("input",{type:"number",name:"input-col",id:"input-col",value:s,onChange:l=>r(l.target.value)})]}),m("div",{className:"input-container",children:[i("label",{htmlFor:"input-mine",children:"Mine"}),i("input",{type:"number",name:"input-mine",id:"input-mine",value:u,onChange:l=>h(l.target.value)})]}),m("div",{className:"input-container",children:[i("label",{htmlFor:"input-time",children:"Time"}),i("input",{type:"number",name:"input-time",id:"input-time",value:c,onChange:l=>a(l.target.value)})]}),i("button",{type:"submit",onClick:$,children:"New Map"}),i("button",{type:"submit",onClick:x,children:"Clear"}),i("button",{type:"submit",onClick:async()=>{for(var l of t.cellStatus)console.log(l),console.log(document.getElementById(`node-${l.x}-${l.y}`)),l.class=="node"?document.getElementById(`node-${l.x}-${l.y}`).className="node":((l.class=="mine"||l.class=="safe")&&await j(c),document.getElementById(`node-${l.x}-${l.y}`).className+=` ${l.class}`)},children:"Solve"})]})}),i("h1",{id:"you-won",children:"You Won"}),i("h1",{id:"you-lose",children:"You Lose"}),i("div",{className:"grid",children:g.map((l,p)=>i("div",{className:"row",children:l.map((b,k)=>i(L,{id:`node-${p}-${k}`,col:k,row:p,value:b,mine:t.mapMine[p][k],click:R},k))},p))}),m("div",{className:"footer",style:{marginBottom:0,display:"flex"},children:[m("div",{style:{display:"inline-block"},children:[i("div",{className:"node backtrack",style:{border:"yellow solid 2px"}}),i("span",{children:"Backtrack"}),i("br",{}),i("div",{className:"node mine"}),i("span",{children:"Has mine"})]}),i("br",{}),m("div",{style:{display:"inline-block",marginInlineStart:"20px"},children:[i("div",{className:"node safe"}),i("span",{children:"Safe"}),i("br",{}),i("div",{className:"node error",style:{border:"orange solid 2px"}}),i("span",{children:"Error"})]})]})]})}B.render(i(E.StrictMode,{children:i(I,{})}),document.getElementById("root"));
