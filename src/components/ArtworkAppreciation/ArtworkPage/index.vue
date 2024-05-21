<script>
/* eslint-disable no-irregular-whitespace */
import { onMounted, inject, ref } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "ArtworkPage",
  components: {},
  setup() {
    const showMenu = inject("showMenu");
    const isLoading = inject("isLoading");

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

    onMounted(() => {
      isLoading.value = true;
      showMenu.value = false;

      let images = [];

      let loadImages = images.map((image) => {
        return new Promise((resolve, reject) => {
          let img = new Image();
          img.src = image;
          img.onload = () => resolve(img);
          img.onerror = reject;
        });
      });

      Promise.all(loadImages)
        .then(() => {
          setTimeout(() => {
            isLoading.value = false;
            showMenu.value = true;
          }, 1500);
        })
        .catch((error) => {
          console.log(error);
        });
    });

    return {
      isMobile,
      currentItem,
    };
  },
};
</script>

<template>
  <div
    class="header"
    :style="{ backgroundImage: `url(${require('@/assets/banner-2.jpg')})` }"
  >
    <div class="title">
      <div>
        <h1>FLOATING FANTASY</h1>
        <h1>浮 生 幻 景</h1>
      </div>
    </div>

    <div class="content">
      <img :src="currentItem.image" />
    </div>
  </div>

  <div class="section-title">
    <h2>{{ currentItem.name }}</h2>
  </div>

  <div class="section-text">
    <p>{{ currentItem.format }}</p>
    <p>{{ currentItem.introduction }}</p>
  </div>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  padding: 10vh 0 10vh 0;
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

.header .title div h1 {
  font-family: "Playfair Display" !important;
  font-weight: 500;
  letter-spacing: 0;
  line-height: normal;
}

.header .title div h1:last-child {
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

.content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #fff;
  font-size: var(--font-main-size);
  padding: calc(var(--logo-padding-top) - 10px) 15px 0 15px;
}

.content img {
  max-width: 50%;
  max-height: 50vh;
  object-fit: contain;
}

@media (max-width: 950px) {
  .content img {
    max-width: 80%;
    max-height: 65vh;
  }
}

@media (max-width: 500px) {
  .content img {
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

.section-text {
  padding: 0 10% 50px;
}

.section-text p {
  font-weight: 300;
}
</style>
