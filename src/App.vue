<template>
  <loader-item v-show="isLoading"></loader-item>
  <header-item ref="headerItemRef"></header-item>
  <left-item></left-item>
  <router-view />
  <footer-item></footer-item>
</template>

<script>
import { ref, onMounted, provide } from "vue";
import HeaderItem from "./components/HeaderItem.vue";
import FooterItem from "./components/FooterItem.vue";
import LeftItem from "./components/LeftItem.vue";
import LoaderItem from "./components/LoaderItem.vue";
export default {
  name: "App",
  components: {
    HeaderItem,
    FooterItem,
    LeftItem,
    LoaderItem,
  },
  setup() {
    const headerItemRef = ref(null);
    const isLoading = ref(true)

    onMounted(() => {
      provide("closeMenu", headerItemRef.value.closeMenu);

      //等websocket載入完成後執行closeMenu
      const ws = new WebSocket("ws://localhost:8080/ws");
      ws.onopen = () => {
        isLoading.value = false;
        console.log('ws done')
        headerItemRef.value.closeMenu();
      };
      ws.onerror = (error) => {
        console.log(`WebSocket error: ${error}`);
        isLoading.value = false;
      };
    });

    return {
      headerItemRef,
      isLoading,
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Playfair Display", "Noto Serif TC", serif;
}
:root {
  --font-bigger-size: 40px;
  --font-second-size: 24px;
  --font-size: 20px;
  --font-small-size: 18px;
  --left-width: 75px;
}

@media (max-width: 950px) {
  :root {
    --font-bigger-size: 30px;
    --font-size: 18px;
    --font-second-size: 24px;
    --font-small-size: 14px;
    --left-width: 0px;
  }
}

section {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.section-content {
  width: calc(100% - var(--left-width));
  height: 100vh;
}

button {
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
}

a {
  text-decoration: none;
}
</style>
