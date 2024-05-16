<script>
/* eslint-disable no-irregular-whitespace */
import { onMounted, inject } from "vue";
import CardItem from "./CardItem.vue";

export default {
  name: "ArtworkAppreciation",
  components: {
    CardItem,
  },
  setup() {
    const showMenu = inject("showMenu");
    const isLoading = inject("isLoading");

    onMounted(() => {
      isLoading.value = true;
      showMenu.value = false;

      let images = [require("@/assets/artist.jpg")];

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

    return {};
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
        <p>
          根據作品風格，將1987-2022，共計三十五年的創作生涯，分為三大階段：
        </p>
        <p>
          第一階段：1987-1993 ／ 第二階段：1994-2010 ／ 第三階段：2011-2022
        </p>
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
  font-size: var(--font-second-size);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: start;
  color: #fff;
}

.title::before {
  content: "";
  position: relative;
  display: inline-block;
  width: 55px;
  height: 2px;
  background: #fff;
}

.content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #fff;
  font-size: var(--font-main-size);
  padding: 20px 10%;
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
