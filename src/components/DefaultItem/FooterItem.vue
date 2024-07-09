<script>
import { onMounted, onUnmounted, inject } from "vue";

export default {
  setup() {
    const isMobile = inject("isMobile");

    const menus = inject("menus");

    const checkDeviceType = () => {
      isMobile.value =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          window.navigator.userAgent
        );
    };

    onMounted(() => {
      checkDeviceType();
    });

    window.addEventListener("resize", checkDeviceType);

    onUnmounted(() => {
      window.removeEventListener("resize", checkDeviceType);
    });

    return {
      isMobile,
      menus,
    };
  },
};
</script>

<template>
  <div
    class="body"
    :style="{ backgroundImage: `url(${require('@/assets/banner-2.jpg')})` }"
  >
    <!-- <p>{{ isMobile ? "行動裝置" : "電腦" }}</p> -->
    <div class="menu-items">
      <div class="menu-item" v-for="menu in menus" :key="menu.id">
        <router-link :to="menu.url">
          <h2 class="item-p">{{ menu.name }}</h2>
        </router-link>
      </div>
    </div>
    <div class="infos">
      <div class="copyright">
        <p>Copyright © 2024 Lee Chen Huei. Designed and maintained by Kamaboko Wu. All rights reserved.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.body {
  background: var(--main-color);
  width: 100%;
  padding: var(--logo-padding-top) var(--logo-padding-left);
  display: flex;
}

p {
  line-height: normal;
  color: #fff;
  margin: 0;
}

.menu-items {
  width: 30%;
  display: flex;
  flex-direction: column;
}

.menu-items a {
  color: #fff;
  cursor: pointer;
  position: relative;
  transition: 0.4s ease-in-out;
  text-decoration: none;
  flex-shrink: 0;
  line-height: 2;
  display: inline-block;
  margin-bottom: 5px;
}

.menu-items a::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 30%;
  height: 2px;
  background: #fff;
  transition: 0.4s ease-in-out;
}

.menu-items a:hover::after {
  width: 100%;
}

.infos {
  width: 70%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}

@media (max-width: 700px) {
  .body {
    flex-direction: column;
  }
  .menu-items {
    width: 100%;
    padding: 0;
  }


  .infos {
    width: 100%;
    justify-content: flex-start;
    align-items: flex-start;
    padding-top: 15px;
  }
}
</style>
