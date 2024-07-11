<script>
/* eslint-disable no-irregular-whitespace */
import { onMounted, inject, ref } from "vue";
import { useRoute } from "vue-router";
import LoaderItem from "../../DefaultItem/LoaderItem.vue"; // 導入 LoaderItem 組件

export default {
  name: "ArtworkPage",
  components: {
    LoaderItem,
  },
  setup() {
    const showMenu = inject("showMenu");
    const isLoading = ref(true);
    const disableScroll = inject("disableScroll");
    const enableScroll = inject("enableScroll");

    const isMobile = inject("isMobile");

    const route = useRoute();
    const name = ref(route.query.name);
    // console.log(name.value);

    const currentStage = ref(route.query.stage);

    const stagesData = inject("stagesData");
    const currentStageData = stagesData.find(
      (stageData) => stageData.stage === currentStage.value
    );

    const currentItem = currentStageData.artworks.find(
      (artwork) => artwork.name === name.value
    );

    const backgroundImg = ref(require("@/assets/banner-2.jpg"));

    const imagePaths = [backgroundImg.value, currentItem.image];

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
      currentItem,
      backgroundImg,
      isLoading,
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

    <div class="image">
      <img :src="currentItem.image" />
    </div>
  </div>

  <div class="introduction">
    <div class="section-title">
      <h2>{{ currentItem.name }}</h2>
    </div>

    <div class="section-text">
      <p>{{ currentItem.format }}</p>
      <p v-html="currentItem.introduction"></p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  padding: 10vh 0 5vh 0;
  flex-direction: column;
  background: var(--main-color);
}

.header .title {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: start;
  color: #fff;
}

.header .title a h1 {
  font-family: "Playfair Display" !important;
  font-weight: 500;
  letter-spacing: 0;
  line-height: normal;
  color: #fff;
}

.header .title a h1:last-child {
  color: #c9a063;
  font-weight: 600;
  letter-spacing: 5px;
}

.header .title::before {
  content: "";
  position: relative;
  display: inline-block;
  width: 55px;
  height: 2px;
  background: #fff;
  margin-right: 10px;
}

.image {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #fff;
  font-size: var(--font-main-size);
  padding: calc(var(--logo-padding-top) - 10px) 0 0 0;
}

img {
  max-width: 90%;
  max-height: 90vh;
  object-fit: contain;
}

@media (max-width: 950px) {
  img {
    max-width: 100%;
    max-height: 80vh;
  }
}

.section-title {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 50px 10% 10px 0;

  &::before {
    content: "";
    width: 55px;
    height: 1.5px;
    display: inline-block;
    background: #8d8c8c;
    top: 1px;
    position: relative;
    margin-right: 10px;
  }
}

.section-title h2 {
  font-weight: 500;
}

.section-text {
  padding: 0 10% 50px;
}

.section-text p {
  font-weight: 300;
}

.introduction {
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
