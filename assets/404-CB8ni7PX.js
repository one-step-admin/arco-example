import{_ as l}from"./HButton.vue_vue_type_script_setup_true_lang-DZoXmoxM.js";import{d as r,r as i,aD as u,G as _,o as d,j as f,e as o,b as t,w as x,q as m,_ as p,f as v,t as w,u as g}from"./index-DNgamTHa.js";const h={class:"absolute left-[50%] top-[50%] flex flex-col items-center justify-between lg:flex-row -translate-x-50% -translate-y-50% lg:gap-12"},B={class:"flex flex-col gap-4"},N=t("h1",{class:"m-0 text-6xl font-sans"}," 404 ",-1),b=t("div",{class:"desc mx-0 text-xl text-stone-5"}," 抱歉，你访问的页面不存在 ",-1),j=r({__name:"404",setup(k){const a=m(),e=i({inter:Number.NaN,countdown:5});u(()=>{e.value.inter&&window.clearInterval(e.value.inter)}),_(()=>{e.value.inter=window.setInterval(()=>{e.value.countdown--,e.value.countdown===0&&(e.value.inter&&window.clearInterval(e.value.inter),n())},1e3)});function n(){a.push("/")}return(I,y)=>{const s=p,c=l;return d(),f("div",h,[o(s,{name:"404",class:"text-[300px] lg:text-[400px]"}),t("div",B,[N,b,t("div",null,[o(c,{onClick:n},{default:x(()=>[v(w(g(e).countdown)+" 秒后，返回首页 ",1)]),_:1})])])])}}});export{j as default};
