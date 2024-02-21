<script>
export default {
  setup() {},
};
</script>

<template>
  <section class="float">
    <div class="section-content float-content">
      <div class="top">
        <div class="logo">
          <p>FLOATING FANTASY</p>
          <p>FLOATING FANTASY</p>
          <p>- Eastern Gouache art of Lee Chen-huei -</p>
        </div>
      </div>
      <div class="bottom">
        <p class="rotated-text">Eastern Gouache art of Lee Chen-huei</p>
        <p class="vertical-text">李 貞 慧 膠 彩 藝 術</p>
        <img :src="require('@/assets/icon.png')" alt="" />
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
  padding: 70px 0 0 100px;
}

.logo p:nth-child(1),
.logo p:nth-child(2) {
  font-size: 32px;
  font-weight: 500;
}

.logo p:nth-child(2) {
  color: #9a6a25;
}

.logo p:nth-child(3) {
  font-family: "Qwigley";
  font-size: 27.6px;
}

.bottom {
  height: 50vh;
  padding: 0 0 70px 130px;
  display: flex;
  align-items: center;
}

.rotated-text {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  font-size: 1.6vh;
  font-weight: 800;
  color: #232323;
}

.vertical-text {
  writing-mode: vertical-rl;
  text-orientation: upright;
  font-size: 1.9vh;
  margin: 0px 13px 0px 10px;
  font-weight: 800;
  color: #232323;
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
