"use strict";(self["webpackChunklee_website"]=self["webpackChunklee_website"]||[]).push([[445],{445:function(e,a,t){t.r(a),t.d(a,{default:function(){return C}});var d=t(3396),n=t(7139);const s=e=>((0,d.dD)("data-v-52763e88"),e=e(),(0,d.Cn)(),e),r={key:1,class:"body"},l=s((()=>(0,d._)("div",{class:"title"},[(0,d._)("div",null,[(0,d._)("h1",null,"FLOATING FANTASY"),(0,d._)("h1",null,"浮 生 幻 景")])],-1))),i={class:"content"},c=["innerHTML"];function u(e,a,t,s,u,v){const o=(0,d.up)("LoaderItem"),g=(0,d.up)("CardItem");return s.isLoading?((0,d.wg)(),(0,d.j4)(o,{key:0})):((0,d.wg)(),(0,d.iD)("div",r,[l,(0,d._)("div",i,[(0,d._)("div",null,[(0,d._)("h2",null,(0,n.zw)(s.currentStageData.title),1),(0,d._)("h2",{innerHTML:s.currentStageData.introduction},null,8,c)])]),(0,d.Wm)(g)]))}var v=t(4870),o=t(2483);const g=e=>((0,d.dD)("data-v-ecc0cd34"),e=e(),(0,d.Cn)(),e),_={class:"cards-body"},b=g((()=>(0,d._)("div",{class:"title"},[(0,d._)("h2",null,"作品賞析")],-1))),m={class:"cards-content"},f=["src"];function w(e,a,t,s,r,l){const i=(0,d.up)("router-link");return(0,d.wg)(),(0,d.iD)("div",_,[b,(0,d._)("div",m,[(0,d._)("div",{class:(0,n.C_)(["cards",{mobile:s.isMobile}])},[((0,d.wg)(!0),(0,d.iD)(d.HY,null,(0,d.Ko)(s.currentStageData,(e=>((0,d.wg)(),(0,d.iD)("div",{class:"card",key:e.id},[(0,d.Wm)(i,{to:"/artwork?stage="+s.currentStage+"&name="+e.name},{default:(0,d.w5)((()=>[(0,d._)("img",{src:e.image},null,8,f),(0,d._)("p",null,(0,n.zw)(e.name+"　"+e.format),1)])),_:2},1032,["to"])])))),128))],2)])])}var p={setup(){const e=(0,d.f3)("isMobile"),a=(0,d.f3)("currentStageData").value.artworks,t=(0,d.f3)("currentStage").value;return{isMobile:e,currentStageData:a,currentStage:t}}},D=t(89);const S=(0,D.Z)(p,[["render",w],["__scopeId","data-v-ecc0cd34"]]);var h=S,k=t(9437),y={name:"StageWork",components:{CardItem:h,LoaderItem:k.Z},setup(){const e=(0,d.f3)("showMenu"),a=(0,v.iH)(!0),t=(0,d.f3)("stagesData"),n=(0,o.yj)(),s=(0,v.iH)(n.query.stage);(0,d.JJ)("currentStage",s);const r=(0,v.iH)(),l=()=>{a.value=!0,r.value=t.find((e=>e.stage===s.value)),(0,d.JJ)("currentStageData",r);const n=r.value.artworks.map((e=>e.image)),l=e=>new Promise((a=>{const t=new Image;t.src=e,t.onload=()=>a(e)})),i=e=>Promise.all(e.map((e=>l(e))));i(n).then((()=>{a.value=!1,e.value=!0}))};return l(),(0,d.YP)((()=>n.query.stage),(e=>{s.value=e,l()})),(0,d.bv)((()=>{e.value=!1})),{currentStageData:r,isLoading:a}}};const I=(0,D.Z)(y,[["render",u],["__scopeId","data-v-52763e88"]]);var C=I},9437:function(e,a,t){t.d(a,{Z:function(){return v}});var d=t(3396);const n={class:"body"},s=(0,d.uE)('<div class="wrap" data-v-222ed930><div class="base" data-v-222ed930><div class="flowerpot" data-v-222ed930></div><div class="blade blade-center" data-v-222ed930></div><div class="blade blade-left-s" data-v-222ed930></div><div class="blade blade-right-s" data-v-222ed930></div><div class="blade blade-left-l" data-v-222ed930></div><div class="blade blade-right-l" data-v-222ed930></div></div></div><div class="loader" data-v-222ed930></div>',2),r=[s];function l(e,a,t,s,l,i){return(0,d.wg)(),(0,d.iD)("div",n,r)}var i={components:{},setup(){}},c=t(89);const u=(0,c.Z)(i,[["render",l],["__scopeId","data-v-222ed930"]]);var v=u}}]);
//# sourceMappingURL=445.d4b7f5c8.js.map