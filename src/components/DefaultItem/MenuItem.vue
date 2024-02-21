<script>
import { inject, ref } from "vue";
export default {
  components: {},
  setup() {
    const isMenuOpen = inject("isMenuOpen");
    const isAnimating = ref(false);

    const menus = ref([
      { name: "浮生幻景", path: "/" },
      { name: "作品賞析", path: "/artworkappreciation" },
      { name: "藝術家介紹", path: "/artistintroduction" },
      { name: "展覽理念", path: "/exhibitionconcept" },
      { name: "動態消息", path: "/latestnews" },
      { name: "互動專區", path: "/interactivezone" },
      { name: "採訪影片", path: "/interviewvideos" },
    ]);

    //click menu icon && setting menu animation
    const clickMenu = () => {
      if (isAnimating.value) {
        return;
      }
      isAnimating.value = true;
      isMenuOpen.value = !isMenuOpen.value;
      setTimeout(() => {
        isAnimating.value = false;
      }, 2000);
    };

    return {
      clickMenu,
      isMenuOpen,
      menus,
    };
  },
};
</script>

<template>
  <i
    class="material-icons"
    :style="{ color: isMenuOpen ? '#fff' : '#3e3a39' }"
    @click="clickMenu"
    >{{ !isMenuOpen ? "menu" : "close" }}</i
  >
  <div
    class="menu-content"
    :class="{
      'expand-animation': isMenuOpen,
      'close-animation': !isMenuOpen,
    }"
  >
    <div class="menu-left">
      <span>FLOATING</span>
      <span>FANTASY</span>
    </div>
    <div class="menu-right">
      <div class="logo">
        <p>FLOATING FANTASY</p>
        <p>FLOATING FANTASY</p>
        <p>- Eastern Gouache art of Lee Chen-huei -</p>
      </div>
      <div class="menu-items">
        <router-link
          class="menu-item"
          v-for="menu in menus"
          :key="menu.id"
          :to="menu.path"
          @click="isMenuOpen = false"
        >
          {{ menu.name }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
i {
  width: 50px;
  height: 50px;
  font-size: 60px;
  position: fixed;
  z-index: 99999;
  top: 90px;
  right: 150px;
  cursor: pointer;
  transition-duration: 2s;
  transition: 0.3s ease-in-out;
}

i:hover {
  transform: scale(1.1);
}

.menu-content {
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.menu-left {
  width: var(--left-width);
  height: 100%;
  background: #fff;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: width 0.5s ease-in-out;
  font-size: 18px;
  font-weight: 800;
  color: #000;
}

.menu-left span:nth-child(2) {
  color: #9a6a25;
  margin-top: 15px;
}

.menu-right {
  width: calc(100% - var(--left-width));
  height: 100%;
  background: #3e3a39;
  overflow: auto;
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

.menu-items {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}

.menu-item {
  font-size: var(--font-bigger-size);
  font-weight: 600;
  color: #c9a063;
  cursor: pointer;
  position: relative;
  transition: 0.4s ease-in-out;
  text-decoration: none;
}

.menu-item:hover {
  transform: scale(1.1);
}

.menu-item::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 30%;
  height: 1px;
  background: #fff;
  transition: 0.4s ease-in-out;
}

.menu-item:hover::after {
  width: 100%;
}

.expand-animation {
  animation: expand 1.5s cubic-bezier(0.42, 0.8, 0.58, 1) forwards; /* 你的動畫時間 */
}

.close-animation {
  animation: close 1.5s cubic-bezier(0.1, 0.8, 0.58, 1) forwards; /* 你的動畫時間 */
}

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
</style>
