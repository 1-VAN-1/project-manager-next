import{P as j,b as g,U as h}from"./index.64b5b789.js";import{r as c,e as v,d as w,k as P,Q as x,o as i,c as u,s as S,a,t as r,x as n,F as U,j as k}from"./index.7ffa0279.js";import"./TaskService.d31c83d9.js";function L(o){const s=c(!0),e=c([]);return v(async()=>{const t=await j.fetchProjects(o);e.value=await g.getProjectsFromIds(t),s.value=!1}),{projects:e,isLoading:s}}function b(o){const s=c(),e=c(!0);return v(async()=>{const t=await h.getUser(o);s.value=t.data.user,e.value=!1}),{user:s,isLoading:e}}const M=w({__name:"MeView",setup(o){const s=P();if(!s.credentials.user)throw new Error("User is not authorized");const{user:e}=b(s.credentials.user.id),{projects:t,isLoading:y}=L();return(B,C)=>{var l,d,p,m;const f=x("b-icon-person");return i(),u("div",null,[S(f,{class:"text-8xl"}),a("div",null,r((l=n(e))==null?void 0:l.email),1),a("div",null,r((d=n(e))==null?void 0:d.name),1),a("div",null,r((p=n(e))==null?void 0:p.surname),1),a("div",null,r((m=n(e))==null?void 0:m.skills),1),(i(!0),u(U,null,k(n(t),_=>(i(),u("div",null,r(_),1))),256))])}}});export{M as default};