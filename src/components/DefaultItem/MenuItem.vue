<script>
import { inject, ref, watch } from "vue";
import { useRoute } from "vue-router";

export default {
  components: {},
  setup() {
    const isMenuOpen = inject("isMenuOpen");
    const isAnimating = ref(false);
    const route = useRoute();
    const isLoading = inject("isLoading");

    const menus = inject("menus");

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

    const clickMenuItem = () => {
      isMenuOpen.value = false;
    };

    // 監視路由變化
    watch(
      () => route.path,
      () => {
        window.scrollTo(0, 0);
        isLoading.value = true;
      }
    );

    return {
      clickMenu,
      isMenuOpen,
      menus,
      clickMenuItem,
    };
  },
};
</script>

<template>
  <i
    class="material-icons"
    :style="{ color: isMenuOpen ? '#fff' : '#fff' }"
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
        <h1>FLOATING FANTASY</h1>
        <h1>FLOATING FANTASY</h1>
        <h3>- Eastern Gouache art of Lee Chen-huei -</h3>
      </div>
      <div class="menu-items">
        <div class="menu-item" v-for="menu in menus" :key="menu.id">
          <router-link :to="menu.url" @click="clickMenuItem">
            <h1 class="item-p">{{ menu.name }}</h1>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
i {
  width: 50px;
  height: 50px;
  font-size: var(--menu-icon-size);
  position: fixed;
  z-index: 99999;
  top: 90px;
  right: var(--menuicon-position-right);
  cursor: pointer;
  transition-duration: 2s;
  transition: 0.3s ease-in-out;
  background: var(--main-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 35px;
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
  overflow: auto;
}

.menu-left {
  width: var(--leftitem-width);
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
  width: calc(100% - var(--leftitem-width));
  height: 100vh;
  background: var(--main-color);
  overflow: auto;
  display: flex;
  flex-direction: column;
}

.logo {
  padding-top: var(--logo-padding-top);
  padding-left: var(--logo-padding-left);
}

.logo h1 {
  font-family: "Playfair Display" !important;
  font-weight: 500;
  letter-spacing: 0;
  line-height: normal;
  color: #fff;
}

.logo h3 {
  font-family: "Qwigley";
  line-height: normal;
  letter-spacing: 0;
  color: #fff;
}

.menu-items {
  width: 100%;
  height: calc(100vh - var(--logo-height));
  overflow: auto;
  display: flex;
  align-items: space-between;
  justify-content: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
  padding: var(--logo-padding-top) 0 calc(var(--logo-padding-top) * 1.5)
    var(--logo-padding-left);
}

a {
  display: inline-block;
}

.menu-item {
  /* padding: 40px 50px 40px 0; */
  flex-shrink: 0;
  margin-bottom: 20px;
}

@media (max-width: 950px) {
  .menu-items {
    flex-wrap: nowrap;
    padding: calc(var(--logo-padding-top) - 30px) 0 0 0;
    align-items: center;
  }
}

.item-p {
  color: #c9a063;
  font-weight: 500;
  cursor: pointer;
  position: relative;
  transition: 0.4s ease-in-out;
  text-decoration: none;
  flex-shrink: 0;
  line-height: 2;
}

.item-p:hover {
  transform: scale(1.1);
}

.item-p::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 30%;
  height: 2px;
  background: #fff;
  transition: 0.4s ease-in-out;
}

.item-p:hover::after {
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
    clip-path: circle(
      0% at calc(100% - var(--menuicon-position-right) - 35px) calc(130px)
    );
  }
  100% {
    clip-path: circle(
      150% at calc(100% - var(--menuicon-position-right) - 10px) calc(100px)
    );
  }
}

@keyframes close {
  0% {
    clip-path: circle(
      150% at calc(100% - var(--menuicon-position-right) - 10px) calc(100px)
    );
  }
  100% {
    clip-path: circle(
      0% at calc(100% - var(--menuicon-position-right) - 35px) calc(120px)
    );
  }
}
</style>
