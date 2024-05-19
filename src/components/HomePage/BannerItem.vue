<script>
import { inject } from "vue";
export default {
  setup() {
    const bannerLoaded = inject("bannerLoaded");
    const bannerImg = require("@/assets/icon.png");
    const homepageLoaded = inject("homepageLoaded");
    const isLoading = inject("isLoading");
    const showMenu = inject("showMenu");
    const onLoad = () => {
      if (!bannerLoaded.value) {
        return;
      }
      setTimeout(() => {
        homepageLoaded.value = true;
        isLoading.value = false;
        showMenu.value = true;
      }, 3000);
    };
    return {
      bannerLoaded,
      bannerImg,
      onLoad,
    };
  },
};
</script>

<template>
  <section class="float">
    <div class="section-content float-content">
      <div class="top">
        <div class="logo">
          <h1>FLOATING FANTASY</h1>
          <h1>FLOATING FANTASY</h1>
          <h3>- Eastern Gouache art of Lee Chen-huei -</h3>
        </div>
      </div>
      <div class="bottom">
        <p class="rotated-text">Eastern Gouache art of Lee Chen-huei</p>
        <p class="vertical-text">李 貞 慧 膠 彩 藝 術</p>
        <img :src="bannerImg" @load="onLoad" />
      </div>
    </div>
  </section>
  <section>
    <div class="section-content">
      <div class="marquee">
        <div class="images">
          <img
            class="marquee-content"
            v-for="n in 3"
            :key="n"
            :src="require('@/assets/banner.jpg')"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.float {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 10;
}

.float-content {
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: flex-start;
}

.top {
  height: 50vh;
  padding-top: var(--logo-padding-top);
  padding-left: var(--logo-padding-left);
}

.logo h1 {
  font-family: "Playfair Display" !important;
  font-weight: 500;
  letter-spacing: 0;
  line-height: normal;
}

.logo h1:nth-child(2) {
  color: #9a6a25;
}

.logo h3 {
  font-family: "Qwigley";
  line-height: normal;
  letter-spacing: 0;
}

.bottom {
  height: 50vh;
  padding: var(--logo-padding-second);
  display: flex;
  align-items: center;
}

.rotated-text {
  font-family: "Playfair Display";
  writing-mode: vertical-rl;
  text-orientation: mixed;
  font-weight: 600;
  color: #232323;
}

.vertical-text {
  writing-mode: vertical-rl;
  -webkit-writing-mode: vertical-rl;
  text-orientation: upright;
  font-weight: 600;
  letter-spacing: 5px;
  color: #232323;
}

.rotated-text,
.vertical-text {
  line-height: normal;
  margin: 8px;
}

.bottom img {
  height: 100%;
}

.marquee {
  overflow-x: hidden;
  position: relative;
  width: 100%;
  height: 100vh;
}

.images {
  display: flex;
  width: 200%;
  animation: marquee 280s linear infinite;
}

.images img {
  margin-left: -1px;
  height: 100vh;
}

.images img:nth-child(2n) {
  transform: scaleX(-1);
}

@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  50% {
    transform: translateX(-90%);
  }
  100% {
    transform: translateX(0%);
  }
}
</style>
