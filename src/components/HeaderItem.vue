<template>
  <button :disabled="isAnimating" @click="clickMenu">
    <i
      class="material-icons"
      :style="{ color: isOpened ? '#fff' : '#3e3a39' }"
      >{{ icon }}</i
    >
  </button>
  <section
    v-if="!isFirstLoad"
    :class="{
      'expand-animation': isOpened && !isFirstLoad,
      'close-animation': !isOpened && !isFirstLoad,
    }"
  >
    <div class="header-left">
      <span>FLOATING</span>
      <span>FANTASY</span>
    </div>
    <div class="header-right">
      <div class="top">
        <div class="logo">
          <p>FLOATING FANTASY</p>
          <p>FLOATING FANTASY</p>
          <p>- Eastern Gouache art of Lee Chen-huei -</p>
        </div>
      </div>
      <div class="bottom">
        <!-- 呼叫closeMenu -->
        <menu-item @closeMenu="closeMenu"></menu-item>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import MenuItem from "./MenuItem.vue";
export default {
  components: {
    MenuItem,
  },
  setup() {
    const icon = ref("menu");
    const isOpened = ref(false);
    const isAnimating = ref(false);
    const isFirstLoad = ref(true);

    //click menu icon && setting menu animation
    const clickMenu = () => {
      if (isOpened.value) {
        icon.value = "menu";
      } else {
        icon.value = "close";
      }
      isAnimating.value = true;
      isFirstLoad.value = false;
      isOpened.value = !isOpened.value;
      setTimeout(() => {
        isAnimating.value = false;
      }, 2000);
    };

    //for App.vue
    const closeMenu = () => {
      icon.value = "menu";
      isFirstLoad.value = false;
      isOpened.value = false;
      setTimeout(() => {
        isAnimating.value = false;
      }, 10);
      console.log('close menu')
    };

    return {
      icon,
      clickMenu,
      isOpened,
      isAnimating,
      isFirstLoad,
      closeMenu,
    };
  },
};
</script>

<style scoped>
@keyframes expand {
  0% {
    clip-path: circle(0% at calc(100% - 170px) calc(130px));
  }
  100% {
    clip-path: circle(150% at calc(100% - 160px) calc(100px));
  }
}

@keyframes close {
  0% {
    clip-path: circle(150% at calc(100% - 160px) calc(100px));
  }
  100% {
    clip-path: circle(0% at calc(100% - 170px) calc(120px));
  }
}

.expand-animation {
  animation: expand 1.5s cubic-bezier(0.42, 0.8, 0.58, 1) forwards; /* 你的動畫時間 */
}

.close-animation {
  animation: close 1.5s cubic-bezier(0.1, 0.8, 0.58, 1) forwards; /* 你的動畫時間 */
}

section {
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

button {
  position: fixed;
  z-index: 99999;
  top: 90px;
  right: 150px;
  transition: 0.3s ease-in-out;
}

button:hover {
  transform: scale(1.1);
}

button i {
  width: 50px;
  height: 50px;
  font-size: 60px;
  cursor: pointer;
  transition-duration: 2s;
}

.header-left {
  width: var(--left-width);
  height: 100%;
  background: #fff;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: width 0.5s ease-in-out;
}

.header-left span:nth-child(1) {
  font-size: 18px;
  font-weight: 800;
  color: #000;
}

.header-left span:nth-child(2) {
  font-size: 18px;
  font-weight: 800;
  color: #9a6a25;
  margin-top: 15px;
}

.header-right {
  width: calc(100% - var(--left-width));
  height: 100%;
  background: #3e3a39;
  overflow: auto;
}

.top {
  width: 100%;
  height: 30%;
  min-height: 210px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}

.logo {
  padding: 70px 0 0 100px;
}

.logo p:nth-child(1),
.logo p:nth-child(2) {
  font-size: 32px;
  font-weight: 500;
  color: #fff;
}

.logo p:nth-child(3) {
  font-family: "Qwigley";
  font-size: 27.6px;
  color: #fff;
}

.bottom {
  width: 100%;
  height: 70%;
  min-height: 350px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
</style>
