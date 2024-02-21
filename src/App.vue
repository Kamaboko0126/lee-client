<script>
import { ref, provide } from "vue";
import HeaderItem from "./components/DefaultItem/HeaderItem.vue";
import FooterItem from "./components/DefaultItem/FooterItem.vue";
import LeftItem from "./components/DefaultItem/LeftItem.vue";
import LoaderItem from "./components/DefaultItem/LoaderItem.vue";
export default {
  name: "App",
  components: {
    HeaderItem,
    FooterItem,
    LeftItem,
    LoaderItem,
  },
  setup() {
    const isLoading = ref(false);
    provide("isLoading", isLoading);

    return {
      isLoading,
    };
  },
};
</script>

<template>
  <loader-item v-if="isLoading"></loader-item>
  <header-item></header-item>
  <left-item></left-item>
  <router-view />
  <footer-item></footer-item>
</template>

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
