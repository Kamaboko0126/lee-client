<script>
import BannerItem from "./BannerItem.vue";
import { inject, onMounted, provide, ref } from "vue";
import LoaderItem from "../DefaultItem/LoaderItem.vue"; // 導入 LoaderItem 組件

export default {
  name: "HomePage",
  components: {
    BannerItem,
    LoaderItem,
  },
  setup() {
    const showMenu = inject("showMenu");
    const isLoading = ref(true);
    const disableScroll = inject("disableScroll");
    const enableScroll = inject("enableScroll");

    const backgroundImg = ref(require("@/assets/1213.png"));
    const bannerImg = ref(require("@/assets/banner.jpg"));
    provide("bannerImg", bannerImg);
    const iconImg = ref(require("@/assets/icon.png"));
    provide("iconImg", iconImg);
    const artistImg = require("@/assets/lee(homepage).jpg");

    const imagePaths = [
      backgroundImg.value,
      bannerImg.value,
      iconImg.value,
      artistImg,
    ];

    const loadImage = (src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(src);
      });
    };

    const loadAllImages = (paths) => {
      return Promise.all(paths.map((path) => loadImage(path)));
    };

    onMounted(() => {
      showMenu.value = false;
      disableScroll();
      loadAllImages(imagePaths).then(() => {
        setTimeout(() => {
          isLoading.value = false;
          showMenu.value = true;
          enableScroll();
        }, 800);
      });
    });

    return {
      backgroundImg,
      artistImg,
      isLoading,
    };
  },
};
</script>

<template>
  <LoaderItem v-if="isLoading" />
  <template v-else>
    <BannerItem />
    <div class="section-content">
      <div
        class="section-left"
        :style="{ backgroundImage: `url(${backgroundImg})` }"
      >
        <div class="texts">
          <h1>李貞慧<span>Lee Chen Huei</span></h1>
          <!-- <h1>Exhibition concept</h1> -->
          <p>
            藝術家李貞慧。<br />
            永遠的母親、妻子、女兒。教授。創作者。<br />
            柔軔如藤、昂揚似松。<br />
            她追逐光影，調皮如精靈玩弄顏料；<br />
            她感悟生命，內觀自省、悠然自得。<br />
            其作品於一筆一畫間完成禪修般的頓悟，<br />
            自成生命第三境界。 （文/游惠遠）
          </p>
          <router-link to="/artistintroduction" class="button"
            >VIEW ALL</router-link
          >
        </div>
      </div>
      <div class="section-right">
        <img :src="artistImg" />
      </div>
    </div>
  </template>
</template>

<style scoped>
.section-content {
  display: flex;
  min-height: 100vh;
}

.section-left {
  width: 55%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding: 50px 0;
  background-repeat: no-repeat;
  background-size: cover;
}

.section-right {
  width: 45%;
}

@media (min-width: 951px) {
  .section-right {
    overflow: hidden;
  }
}

.section-right img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
}

@media (max-width: 1200px) {
  .section-left {
    width: 63%;
  }

  .section-right {
    width: 37%;
  }
}

@media (max-width: 950px) {
  .section-content {
    flex-direction: column;
  }

  .texts {
    padding: 100px 0;
  }

  .section-left,
  .section-right {
    width: 100%;
  }

  .section-right img,
  .section-right {
    overflow: hidden;
    height: 50vh;
  }
}

.texts {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex-shrink: 0;
}

.section-left h1 {
  color: #c9a063;
}

.section-left h1 span {
  color: #898989;
  margin-left: 25px;
  font-size: var(--title-second-size);
}

.section-left h1:nth-child(2) {
  color: #fff;
}

.section-left p {
  color: #fff;
}

/* .section-left h1:nth-child(2),
.section-left p {
  margin-top: 60px;
} */

.button {
  color: #898989;
  margin-top: 15px;
  font-size: var(--font-third-size);
  font-weight: 700;
  cursor: pointer;
}

.button:after {
  content: "";
  display: block;
  width: 25%;
  height: 2px;
  background: #898989;
  transition: width 0.3s;
}

.button:hover:after {
  width: 100%;
}
</style>
