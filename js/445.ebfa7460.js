"use strict";(self["webpackChunklee_website"]=self["webpackChunklee_website"]||[]).push([[445],{445:function(e,t,a){a.r(t),a.d(t,{default:function(){return C}});var n=a(3396),r=a(7139);const s=e=>((0,n.dD)("data-v-52763e88"),e=e(),(0,n.Cn)(),e),i={key:1,class:"body"},c=s((()=>(0,n._)("div",{class:"title"},[(0,n._)("div",null,[(0,n._)("h1",null,"FLOATING FANTASY"),(0,n._)("h1",null,"浮 生 幻 景")])],-1))),u={class:"content"},d=["innerHTML"];function l(e,t,a,s,l,o){const v=(0,n.up)("LoaderItem"),g=(0,n.up)("CardItem");return s.isLoading?((0,n.wg)(),(0,n.j4)(v,{key:0})):((0,n.wg)(),(0,n.iD)("div",i,[c,(0,n._)("div",u,[(0,n._)("div",null,[(0,n._)("h2",null,(0,r.zw)(s.currentStageData.title),1),(0,n._)("h2",{innerHTML:s.currentStageData.introduction},null,8,d)])]),(0,n.Wm)(g)]))}var o=a(4870),v=a(2483);const g=e=>((0,n.dD)("data-v-ecc0cd34"),e=e(),(0,n.Cn)(),e),_={class:"cards-body"},m=g((()=>(0,n._)("div",{class:"title"},[(0,n._)("h2",null,"作品賞析")],-1))),f={class:"cards-content"},w=["src"];function D(e,t,a,s,i,c){const u=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",_,[m,(0,n._)("div",f,[(0,n._)("div",{class:(0,r.C_)(["cards",{mobile:s.isMobile}])},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(s.currentStageData,(e=>((0,n.wg)(),(0,n.iD)("div",{class:"card",key:e.id},[(0,n.Wm)(u,{to:"/artwork?stage="+s.currentStage+"&name="+e.name},{default:(0,n.w5)((()=>[(0,n._)("img",{src:e.image},null,8,w),(0,n._)("p",null,(0,r.zw)(e.name+"　"+e.format),1)])),_:2},1032,["to"])])))),128))],2)])])}var p={setup(){const e=(0,n.f3)("isMobile"),t=(0,n.f3)("currentStageData").value.artworks,a=(0,n.f3)("currentStage").value;return{isMobile:e,currentStageData:t,currentStage:a}}},b=a(89);const S=(0,b.Z)(p,[["render",D],["__scopeId","data-v-ecc0cd34"]]);var k=S,h=a(1357),y={name:"StageWork",components:{CardItem:k,LoaderItem:h.Z},setup(){const e=(0,n.f3)("showMenu"),t=(0,o.iH)(!0),a=(0,n.f3)("stagesData"),r=(0,v.yj)(),s=(0,o.iH)(r.query.stage);(0,n.JJ)("currentStage",s);const i=(0,o.iH)(),c=()=>{t.value=!0,i.value=a.find((e=>e.stage===s.value)),(0,n.JJ)("currentStageData",i);const r=i.value.artworks.map((e=>e.image)),c=e=>new Promise((t=>{const a=new Image;a.src=e,a.onload=()=>t(e)})),u=e=>Promise.all(e.map((e=>c(e))));u(r).then((()=>{t.value=!1,e.value=!0}))};return c(),(0,n.YP)((()=>r.query.stage),(e=>{s.value=e,c()})),(0,n.bv)((()=>{e.value=!1})),{currentStageData:i,isLoading:t}}};const I=(0,b.Z)(y,[["render",l],["__scopeId","data-v-52763e88"]]);var C=I},1357:function(e,t,a){a.d(t,{Z:function(){return v}});var n=a(3396);const r=e=>((0,n.dD)("data-v-48954fd0"),e=e(),(0,n.Cn)(),e),s={id:"body"},i=r((()=>(0,n._)("div",{id:"loader"},[(0,n._)("div",{id:"box"}),(0,n._)("div",{id:"hill"})],-1))),c=[i];function u(e,t){return(0,n.wg)(),(0,n.iD)("div",s,c)}var d=a(89);const l={},o=(0,d.Z)(l,[["render",u],["__scopeId","data-v-48954fd0"]]);var v=o}}]);
//# sourceMappingURL=445.ebfa7460.js.map