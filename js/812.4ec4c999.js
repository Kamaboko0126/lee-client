"use strict";(self["webpackChunklee_website"]=self["webpackChunklee_website"]||[]).push([[812],{9794:function(e,a,t){t.r(a),t.d(a,{default:function(){return C}});var d=t(3396),n=t(7139);const s=e=>((0,d.dD)("data-v-8baeae50"),e=e(),(0,d.Cn)(),e),l={key:1,class:"body"},r=s((()=>(0,d._)("div",{class:"title"},[(0,d._)("div",null,[(0,d._)("h1",null,"FLOATING FANTASY"),(0,d._)("h1",null,"浮 生 幻 景")])],-1))),c={class:"content"},i=["innerHTML"];function o(e,a,t,s,o,u){const v=(0,d.up)("LoaderItem"),g=(0,d.up)("CardItem");return s.isLoading?((0,d.wg)(),(0,d.j4)(v,{key:0})):((0,d.wg)(),(0,d.iD)("div",l,[r,(0,d._)("div",c,[(0,d._)("div",null,[(0,d._)("h2",null,(0,n.zw)(s.currentStageData.title),1),(0,d._)("h2",{innerHTML:s.currentStageData.introduction},null,8,i)])]),(0,d.Wm)(g)]))}var u=t(4870),v=t(2483);const g=e=>((0,d.dD)("data-v-ecc0cd34"),e=e(),(0,d.Cn)(),e),m={class:"cards-body"},b=g((()=>(0,d._)("div",{class:"title"},[(0,d._)("h2",null,"作品賞析")],-1))),f={class:"cards-content"},w=["src"];function _(e,a,t,s,l,r){const c=(0,d.up)("router-link");return(0,d.wg)(),(0,d.iD)("div",m,[b,(0,d._)("div",f,[(0,d._)("div",{class:(0,n.C_)(["cards",{mobile:s.isMobile}])},[((0,d.wg)(!0),(0,d.iD)(d.HY,null,(0,d.Ko)(s.currentStageData,(e=>((0,d.wg)(),(0,d.iD)("div",{class:"card",key:e.id},[(0,d.Wm)(c,{to:"/artwork?stage="+s.currentStage+"&name="+e.name},{default:(0,d.w5)((()=>[(0,d._)("img",{src:e.image},null,8,w),(0,d._)("p",null,(0,n.zw)(e.name+"　"+e.format),1)])),_:2},1032,["to"])])))),128))],2)])])}var p={setup(){const e=(0,d.f3)("isMobile"),a=(0,d.f3)("currentStageData").value.artworks,t=(0,d.f3)("currentStage").value;return{isMobile:e,currentStageData:a,currentStage:t}}},y=t(89);const D=(0,y.Z)(p,[["render",_],["__scopeId","data-v-ecc0cd34"]]);var h=D,S=t(9437),k={name:"StageWork",components:{CardItem:h,LoaderItem:S.Z},setup(){const e=(0,d.f3)("showMenu"),a=(0,u.iH)(!0);document.body.style.overflow="hidden",document.documentElement.style.overflow="hidden";const t=(0,d.f3)("stagesData"),n=(0,v.yj)(),s=(0,u.iH)(n.query.stage);(0,d.JJ)("currentStage",s);const l=(0,u.iH)(),r=()=>{a.value=!0,l.value=t.find((e=>e.stage===s.value)),(0,d.JJ)("currentStageData",l);const n=l.value.artworks.map((e=>e.image)),r=e=>new Promise((a=>{const t=new Image;t.src=e,t.onload=()=>a(e)})),c=e=>Promise.all(e.map((e=>r(e))));c(n).then((()=>{a.value=!1,e.value=!0,document.body.style.overflow="",document.documentElement.style.overflow=""}))};return r(),(0,d.YP)((()=>n.query.stage),(e=>{s.value=e,r()})),(0,d.bv)((()=>{e.value=!1})),{currentStageData:l,isLoading:a}}};const I=(0,y.Z)(k,[["render",o],["__scopeId","data-v-8baeae50"]]);var C=I},9437:function(e,a,t){t.d(a,{Z:function(){return u}});var d=t(3396);const n={class:"body"},s=(0,d.uE)('<div class="wrap" data-v-222ed930><div class="base" data-v-222ed930><div class="flowerpot" data-v-222ed930></div><div class="blade blade-center" data-v-222ed930></div><div class="blade blade-left-s" data-v-222ed930></div><div class="blade blade-right-s" data-v-222ed930></div><div class="blade blade-left-l" data-v-222ed930></div><div class="blade blade-right-l" data-v-222ed930></div></div></div><div class="loader" data-v-222ed930></div>',2),l=[s];function r(e,a,t,s,r,c){return(0,d.wg)(),(0,d.iD)("div",n,l)}var c={components:{},setup(){}},i=t(89);const o=(0,i.Z)(c,[["render",r],["__scopeId","data-v-222ed930"]]);var u=o}}]);
//# sourceMappingURL=812.4ec4c999.js.map