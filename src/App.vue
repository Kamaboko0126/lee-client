<script>
import { ref, provide } from "vue";
import MenuItem from "./components/DefaultItem/MenuItem.vue";
import FooterItem from "./components/DefaultItem/FooterItem.vue";
import LeftItem from "./components/DefaultItem/LeftItem.vue";
import LoaderItem from "./components/DefaultItem/LoaderItem.vue";
export default {
  name: "App",
  components: {
    MenuItem,
    FooterItem,
    LeftItem,
    LoaderItem,
  },
  setup() {
    document.title = "浮生幻景";

    //for all pages
    const isLoading = ref(false);
    provide("isLoading", isLoading);

    //for all pages
    const isMenuOpen = ref(false);
    provide("isMenuOpen", isMenuOpen);

    const showMenu = ref(false);
    provide("showMenu", showMenu);

    return {
      isLoading,
      showMenu,
    };
  },
};
</script>

<template>
  <LoaderItem v-if="isLoading" />
  <MenuItem v-if="showMenu" />
  <div class="main">
    <div class="left">
      <LeftItem />
    </div>
    <div class="right">
      <router-view />
    </div>
  </div>
  <FooterItem />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Playfair Display", "Noto Serif TC", serif;
}
:root {
  --font-main-size: 24px;
  --font-second-size: 35px;
  --font-third-size: 20px;
  --font-fourth-size: 17px;
  --left-width: 75px;
  --menu-right: 150px;
  --title-main-size: 32px;
  --title-second-size: 27.6px;
  --logo-padding-top: 70px;
  --logo-padding-left: 100px;
  --second-logo-padding: 0 0 70px 130px;
  --logo-height: 200px;
  --menu-icon-size: 60px;
  --menu-font-size: 40px;
  --menu-second-font-size: 28px;
  --background-color:#3e3a39;
}

@media (max-width: 950px) {
  :root {
    --font-main-size: 22px;
    --font-second-size: 27px;
    --font-third-size: 18px;
    --font-fourth-size: 15px;
    --left-width: 0px;
    --menu-right: 70px;
    --logo-padding-top: 75px;
    --logo-padding-left: 50px;
    --second-logo-padding: 0 0 60px 50px;
    --menu-icon-size: 50px;
    --menu-font-size: 35px;
  }
}

@media (max-width: 500px) {
  :root {
    --font-main-size: 18px;
    --font-second-size: 25px;
    --font-third-size: 14px;
  --font-fourth-size: 12px;
    --left-width: 0px;
    --menu-right: 40px;
    --logo-padding-top: 80px;
    --logo-padding-left: 40px;
    --second-logo-padding: 0 0 60px 50px;
    --title-main-size: 20px;
    --title-second-size: 17.5px;
    --menu-icon-size: 40px;
    --menu-font-size: 30px;
  }
}

.main {
  display: flex;
}

.left {
  width: var(--left-width);
}

.right {
  width: calc(100% - var(--left-width));
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
