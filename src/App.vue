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
  font-family: "source-han-sans-traditional", sans-serif;
  font-weight: 100;
  font-style: normal;
}

:root {
  --main-color: #3e3a39;

  --font-main-size: 15px;
  
  --title-main-size: 32px;
  --title-second-size: 18px;
  --title-third-size: 28px;

  --font-fourth-size: 17px;

  --leftitem-width: 75px;
  
  --logo-padding-top: 70px;
  --logo-padding-left: 100px;
  --logo-padding-second: 0 0 70px 130px;
  --logo-height: 200px;

  --menuicon-position-right: 150px;
  --menu-icon-size: 60px;
  --menu-font-size: 40px;
  --menu-second-font-size: 28px;
}

@media (max-width: 950px) {
  :root {
    --font-main-size: 15px;


    --leftitem-width: 0px;

    --menuicon-position-right: 70px;
    --menu-icon-size: 50px;
    --menu-font-size: 35px;

    --logo-padding-top: 75px;
    --logo-padding-left: 50px;
    --logo-padding-second: 0 0 60px 50px;
  }
}

@media (max-width: 500px) {
  :root {
    --font-main-size: 15px;

    --leftitem-width: 0px;
    
    --logo-padding-top: 80px;
    --logo-padding-left: 40px;
    --logo-padding-second: 0 0 60px 50px;
        
    --menuicon-position-right: 40px;
    --menu-icon-size: 40px;
    --menu-font-size: 30px;
  }
}

p,h1,h2,h3 {
  line-height: 2.4;
  font-size: var(--font-main-size);
  font-feature-settings: "palt" on;
  letter-spacing: 0.15em;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  unicode-bidi: isolate;
}

h1,h2,h3{
  font-size: var(--title-main-size);
  margin-block-start: 0;
  margin-block-end: 0;
  font-weight: 300;
}

h2{
  font-size: var(--title-second-size);
}

h3{
  font-size: var(--title-third-size);
}

.main {
  display: flex;
}

.left {
  width: var(--leftitem-width);
}

.right {
  width: calc(100% - var(--leftitem-width));
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
