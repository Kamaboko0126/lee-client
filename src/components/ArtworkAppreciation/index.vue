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
        <span>FLOATING FANTASY</span>
        <p>浮 生 幻 景</p>
      </div>
    </div>

    <div class="content">
      <div>
        <p>
          李貞慧針對2022年在彰化生活美學館以及台中市葫蘆墩文化中心的個展，將其作品分為四階段，分別為：
        </p>
        <p>
          第一期：1987-1993 ／ 第二期：1994-1996 ／ 第三期：2003-2008 ／
          第四期：2011-2022
        </p>
        <br />
        <p>
          筆者根據李貞慧作品風格，將其自1987-2022，共計三十五年的創作生涯，初分為三大階段。
        </p>
        <p>
          吾人相信，以貞慧之勤奮及慧眼識物之情，未來十年，必將再創藝術高峰：
        </p>
      </div>
    </div>
    <CardItem />
    <p>針對以上三大階段，本專題網頁自每個階段各選出數張作品以饗讀者：</p>
  </div>
</template>

<style scoped>
.body {
  display: flex;
  padding: 10vh 0 10vh 0;
  flex-direction: column;
  background: #3e3a39;
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
