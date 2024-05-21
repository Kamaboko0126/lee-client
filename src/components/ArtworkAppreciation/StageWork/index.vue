<script>
/* eslint-disable no-irregular-whitespace */
import { onMounted, inject, ref, provide } from "vue";
import { useRoute } from "vue-router";
import CardItem from "./CardItem.vue";

export default {
  name: "StageWork",
  components: {
    CardItem,
  },
  setup() {
    const showMenu = inject("showMenu");
    const isLoading = inject("isLoading");
    const stagesData = inject("stagesData");

    const route = useRoute();
    const currentStage = ref(route.query.stage);
    provide("currentStage", currentStage);

    const currentStageData = ref();

    // console.log(currentStage.value);
    // console.log(stagesData);
    currentStageData.value = stagesData.find(
      (stageData) => stageData.stage === currentStage.value
    );

    provide("currentStageData", currentStageData);

    // console.log(currentStageData.value);

    onMounted(() => {
      isLoading.value = true;
      showMenu.value = false;
      const images = [];

      for (let i = 0; i < currentStageData.value.artworks.length; i++) {
        images.push(currentStageData.value.artworks[i].image);
      }

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
      currentStageData,
    };
  },
};
</script>

<template>
  <div class="body">
    <div class="title">
      <div>
        <h1>FLOATING FANTASY</h1>
        <h1>浮 生 幻 景</h1>
      </div>
    </div>

    <div class="content">
      <div>
        <p>{{ currentStageData.title }}</p>
        <p>{{ currentStageData.introduction }}</p>
      </div>
    </div>
  </div>
  <CardItem />
</template>

<style scoped>
.body {
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

.title div h1 {
  font-family: "Playfair Display" !important;
  font-weight: 500;
  letter-spacing: 0;
  line-height: normal;
}

.title div h1:last-child {
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
  padding: var(--logo-padding-top) 30px 0;
}

.content p {
  max-width: 1200px;
}

.words {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0 30px 0;
}

.words p:not(:last-child) {
  margin-right: 20px;
}
</style>
