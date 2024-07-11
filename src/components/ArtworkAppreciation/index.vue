<script>
/* eslint-disable no-irregular-whitespace */
import { onMounted, inject, provide, ref } from "vue";
import CardItem from "./CardItem.vue";
import LoaderItem from "../DefaultItem/LoaderItem.vue"; // 導入 LoaderItem 組件

export default {
  name: "ArtworkAppreciation",
  components: {
    CardItem,
    LoaderItem,
  },
  setup() {
    const showMenu = inject("showMenu");
    const isLoading = ref(true);
    const disableScroll = inject("disableScroll");
    const enableScroll = inject("enableScroll");

    const isMobile = inject("isMobile");

    const stages = ref([
      {
        name: "第一階段(1987-1993)：構圖與顏色的遊戲",
        image: require("@/assets/artwork/寒林深秋.jpg"),
        url: "/threestages?stage=first",
      },
      {
        name: "第二階段(1994-2008)：生之舞曲",
        image: require("@/assets/artwork/風的纏綿(二).png"),
        url: "/threestages?stage=second",
      },
      {
        name: "第三階段(2011-2022)：卻說天涼好個秋",
        image: require("@/assets/artwork/默寞.jpg"),
        url: "/threestages?stage=third",
      },
    ]);
    provide("stages", stages);

    const backgroundImg = ref(require("@/assets/banner-2.jpg"));

    const imagePaths = [backgroundImg.value];

    stages.value.forEach((stage) => {
      imagePaths.push(stage.image);
    });

    const loadImage = (src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(src);
      });
    };

    const loadAllImages = (paths) => {
      return Promise.all(paths.map((path) => loadImage(path)));
    };

    onMounted(() => {
      isLoading.value = true;
      showMenu.value = false;
      disableScroll();
      loadAllImages(imagePaths).then(() => {
        setTimeout(() => {
          isLoading.value = false;
          showMenu.value = true;
          enableScroll();
        }, 500);
      });
    });

    return {
      isMobile,
      isLoading,
      backgroundImg,
    };
  },
};
</script>

<template>
  <LoaderItem v-if="isLoading" />
  <div class="header" :style="{ backgroundImage: `url(${backgroundImg})` }">
    <div class="title">
      <router-link to="/">
        <h1>FLOATING FANTASY</h1>
        <h1>浮 生 幻 景</h1>
      </router-link>
    </div>

    <div class="content">
      <div>
        <h2>
          李貞慧自1987-2022年間、長達三十五年的創作生涯中，作品風格可分為三大階段：
        </h2>
        <h2>
          第一階段：1987-1993 ／ 第二階段：1994-2010 ／ 第三階段：2011-2022
        </h2>
      </div>
    </div>
  </div>
  <CardItem />
</template>

<style scoped>
.header {
  display: flex;
  padding: 10vh 0 10vh 0;
  flex-direction: column;
  background: var(--main-color);
}

.title {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: start;
  color: #fff;
}

.title a h1 {
  font-family: "Playfair Display" !important;
  font-weight: 500;
  letter-spacing: 0;
  line-height: normal;
  color: #fff;
}

.title a h1:last-child {
  color: #c9a063;
  font-weight: 600;
  letter-spacing: 5px;
}

.title::before {
  content: "";
  position: relative;
  display: inline-block;
  width: 55px;
  height: 2px;
  background: #fff;
  margin-right: 10px;
}

.content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #fff;
  font-size: var(--font-main-size);
  padding: var(--logo-padding-top) 15px 0 15px;
}
</style>
