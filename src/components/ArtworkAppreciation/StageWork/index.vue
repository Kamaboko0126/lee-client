<script>
/* eslint-disable no-irregular-whitespace */
import { onMounted, inject, ref, provide, watch } from "vue";
import { useRoute } from "vue-router";
import CardItem from "./CardItem.vue";
import LoaderItem from "../../DefaultItem/LoaderItem.vue"; // 導入 LoaderItem 組件

export default {
  name: "StageWork",
  components: {
    CardItem,
    LoaderItem,
  },
  setup() {
    const showMenu = inject("showMenu");
    const isLoading = ref(true);
    const disableScroll = inject("disableScroll");
    const enableScroll = inject("enableScroll");

    const stagesData = inject("stagesData");

    const route = useRoute();
    const currentStage = ref(route.query.stage);
    provide("currentStage", currentStage);

    const currentStageData = ref();

    const backgroundImg = ref(require("@/assets/banner-2.jpg"));

    // 更新 currentStageData 的函數
    const updateCurrentStageData = () => {
      isLoading.value = true;
      showMenu.value = false;
      disableScroll();
      currentStageData.value = stagesData.find(
        (stageData) => stageData.stage === currentStage.value
      );
      provide("currentStageData", currentStageData);

      const imagePaths = currentStageData.value.artworks.map(
        (artwork) => artwork.image
      );

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

      loadAllImages(imagePaths).then(() => {
        setTimeout(() => {
          isLoading.value = false;
          showMenu.value = true;
          enableScroll();
        }, 800);
      });
    };

    // 初始更新
    updateCurrentStageData();

    // 監聽 route.query.stage 的變化
    watch(
      () => route.query.stage,
      (newStage) => {
        currentStage.value = newStage;
        updateCurrentStageData();
      }
    );

    onMounted(() => {
      showMenu.value = false;
      isLoading.value = true;
      disableScroll();
    });

    return {
      currentStageData,
      isLoading,
      backgroundImg,
    };
  },
};
</script>

<template>
  <LoaderItem v-if="isLoading" />
  <div
    class="body"
    v-else
    :style="{ backgroundImage: `url(${backgroundImg})` }"
  >
    <div class="title">
      <router-link to="/">
        <h1>FLOATING FANTASY</h1>
        <h1>浮 生 幻 景</h1>
      </router-link>
    </div>

    <div class="content">
      <div>
        <h2>{{ currentStageData.title }}</h2>
        <h2 v-html="currentStageData.introduction"></h2>
      </div>
    </div>
    <CardItem />
  </div>
</template>

<style scoped>
.body {
  display: flex;
  padding: 10vh 0 0 0;
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
  padding: var(--logo-padding-top) 50px;
}

.content h2 {
  max-width: 1200px;
}

.words {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0 30px 0;
}

.words h2:not(:last-child) {
  margin-right: 20px;
}
</style>
