import{_ as b,i as $,t as B,r as m,o as y,a as N,j as H,b as o,c as a,d as e,k as v,u as g,e as p,p as k,l as S,m as I,n as w,w as C,F as T,q as Y,s as u}from"./app.7f62d93c.js";import{_ as j}from"./chunks/avatar.f0377a8e.js";const D=t=>(k("data-v-21b76bad"),t=t(),S(),t),L={class:"container relative z-10 text-white text-center translate-y-[-25px]"},U={class:"text-4xl font-bold font-Roboto tracking-tight"},V=D(()=>e("div",{class:"actions"},[e("a",{href:"/frontend/notes/"}," Blog "),e("a",{href:"https://github.com/6starlong",target:"_black"}," Github "),e("a",{href:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",target:"_black"}," Live ")],-1)),E={name:"ThemeHero",setup(t){const{frontmatter:r}=$(),{openScrollEvent:l,closeScrollEvent:h}=B(),c=m();return y(()=>{const i=document.querySelector(".VPNavBar"),s=c.value.offsetHeight;l({element:i,className:"nav-cover",offset:s/2,scrollFunc:_=>{c.value.style.transform=`translateY(${~~(_/99*33)}px)`}}),N(()=>h())}),(i,s)=>{const _=H("YiYan");return o(),a("header",{id:"hero",ref_key:"hero",ref:c},[e("div",L,[e("h2",U,v(g(r).heroText),1),p(_,{class:"mt-2 mb-6 !text-lg"}),V])],512)}}};var F=b(E,[["__scopeId","data-v-21b76bad"]]);const f=t=>(k("data-v-553624c2"),t=t(),S(),t),W={class:"main"},q={class:"max-w-screen-lg mx-auto"},G=f(()=>e("h1",{class:"blog-title"},"Posts",-1)),O={class:"posts-box"},Q=["onClick"],R={class:"figure"},z=["src"],M={class:"pt-3"},X={class:"flex items-center text-vt-2 text-xs font-medium leading-[25px]"},A=f(()=>e("div",{class:"flex items-center duration-150 hover:translate-y-[-5px]"},[e("img",{src:j,class:"w-[25px] h-[25px] rounded-full"}),e("span",{class:"ml-1 underline"},"Starlong")],-1)),J=f(()=>e("span",{class:"mx-2"},"\xB7",-1)),K={key:0},Z={class:"mt-[80px] flex justify-between font-Georgia tracking-tight"},ee={name:"ThemePosts",setup(t){const r=I(),{pageNum:l,total:h,posts:c}=w(),i=m(c),s=m(1);C(s,()=>{i.value=w(s.value).posts,window.scrollTo(0,window.innerHeight*.8-(window.innerWidth>960?55:window.innerWidth>768?0:-55))}),y(()=>{window.history.state&&(s.value=Number(sessionStorage.getItem("page")||1))});function _(x){sessionStorage.setItem("page",s.value),r.go(x.link)}return(x,d)=>(o(),a("main",W,[e("div",q,[G,e("div",O,[(o(!0),a(T,null,Y(i.value,(n,P)=>(o(),a("div",{key:P,class:"posts-card",onClick:ae=>_(n)},[e("figure",R,[n.img?(o(),a("img",{key:0,src:n.img,class:"w-full object-cover"},null,8,z)):u("",!0)]),e("div",M,[e("h2",null,v(n.text),1),e("div",X,[A,J,n.lastUpdated?(o(),a("span",K,v(new Date(n.lastUpdated).toLocaleString()),1)):u("",!0)])])],8,Q))),128))]),e("div",Z,[e("div",null,[s.value!==1?(o(),a("button",{key:0,onClick:d[0]||(d[0]=n=>s.value--)},"\u2190 Newer Posts")):u("",!0)]),e("div",null,[s.value*g(l)<g(h)?(o(),a("button",{key:0,onClick:d[1]||(d[1]=n=>s.value++)},"Older Posts \u2192")):u("",!0)])])])]))}};var te=b(ee,[["__scopeId","data-v-553624c2"]]);const se={name:"ThemeHome",setup(t){return(r,l)=>(o(),a(T,null,[p(F),p(te)],64))}},le=`{"title":"S\u1D1B\u1D00\u0280\u029F\u1D0F\u0274\u0262's Blog","titleTemplate":false,"description":"","frontmatter":{"home":true,"page":true,"title":"S\u1D1B\u1D00\u0280\u029F\u1D0F\u0274\u0262's Blog","titleTemplate":false,"heroText":"S\u1D1B\u1D00\u0280\u029F\u1D0F\u0274\u0262's Blog","tagline":"\u5FC3\u4E4B\u6240\u5411 \u7D20\u5C65\u4EE5\u5F80"},"headers":[],"relativePath":"index.md","lastUpdated":1655087969000}`,oe={},ce=Object.assign(oe,{name:"index",setup(t){return(r,l)=>(o(),a("div",null,[p(se)]))}});export{le as __pageData,ce as default};
