<script>
import BannerItem from "./BannerItem.vue";
import {  } from "vue";
export default {
  name: "HomePage",
  components: {
    BannerItem,
  },
  setup() {
    //取得App.vue的closeMenu

    return {};
  },
};
</script>

<template>
  <banner-item></banner-item>
  <section>
    <div class="section-content">
      <div class="section-left">
        <h1>About<span>展覽理念</span></h1>
        <h1>Exhibition concept</h1>
        <p>
          藝術家李貞慧現任東海大學美術系主任 ,膠彩作品風格自然清雅、氣韻生動又
          兼具光彩迷幻之美。她長年觀察東海校 園景色,試圖捕捉光影的變化為其創作
          上追求的目標。光線的變化除了在作品 中展現不同的亮度和色澤外,也呼應其
          內心對時序改變及生命消逝的感嘆。
        </p>
        <router-link to="/exhibitionconcept" class="button"
          >VIEW ALL</router-link
        >
      </div>
      <div class="section-right">
        <img :src="require('@/assets/homepage.jpg')" alt="" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-content {
  display: flex;
}

.section-left {
  width: 55%;
  height: 100%;
  background: #2c2b2c;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10%;
}

.section-left h1 {
  color: #91702f;
  font-size: var(--font-second-size);
}

.section-left h1 span {
  color: #898989;
  margin-left: 25px;
  font-size: var(--font-main-size);
}

.section-left h1:nth-child(2) {
  color: #fff;
}

.section-left p {
  color: #fff;
  font-size: var(--font-main-size);
  line-height: 2;
  letter-spacing: 1px;
}

.section-left h1:nth-child(2),
.section-left p {
  margin-top: 60px;
}

.button {
  color: #898989;
  margin-top: 30px;
  font-size: var(--font-third-size);
  font-weight: 800;
  cursor: pointer;
}

.button:after {
  content: "";
  display: block;
  width: 25%;
  height: 2px;
  background: #898989;
  transition: width 0.3s;
}

.button:hover:after {
  width: 100%;
}

.section-right {
  width: 45%;
  height: 100%;
  overflow: hidden;
}

.section-right img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
}
</style>
