<script>
import { onMounted, inject, provide, ref } from "vue";
import InformationMenu from "./InformationMenu.vue";
import LoaderItem from "../DefaultItem/LoaderItem.vue"; // 導入 LoaderItem 組件

export default {
  name: "ArtistIntroduction",
  components: {
    InformationMenu,
    LoaderItem,
  },
  setup() {
    const showMenu = inject("showMenu");
    const isLoading = ref(true);
    const disableScroll = inject("disableScroll");
    const enableScroll = inject("enableScroll");

    const introductionList = [
      {
        name: "學歷",
        value: [
          "1987 東海大學美術系文學士",
          "1993 日本國立筑波大學藝術研究所藝術學碩士",
        ],
      },
      {
        name: "經歷",
        value: [
          "1987 東海大學美術系畢業、留校任助教",
          "1993 日本國立筑波大學藝術研究所碩士",
          "1993 東海大學美術系兼任講師",
          "1994 東海大學美術系  專任講師（1994-1998）",
          "1994 國立藝術學院(國立臺北藝術大學)美術系兼任講師（1994-1998）",
          "1998 東海大學美術系  專任副教授（1998-2017）",
          "2004 東海大學美術系  系所主任（2004-2007）",
          "2007 東海大學美術系  學士學分班班主任（2007-迄今）",
          "2008 國立臺灣師範大學美術系  兼任副教授（2008-2011）",
          "2017 東海大學美術系  專任教授（2017-迄今）",
          "2019 東海大學美術系  系所主任（2019-2022）",
        ],
      },
      {
        name: "研究 / 個展 / 作品集",
        value: [
          "1993〈日本画と中国画に関する研究－屏風、障屏様式の考察〉",
          "1993《芸術研究科修士論文梗概集 1992》(筑波大学大学院修士課程芸術研究科 出版)",
          "1993《李貞慧畫展》(日本 筑波市 廣瀨畫廊)",
          "1994《李貞慧膠彩畫作展》(臺中市立文化中心/東海大學藝術中心)",
          "1997《幻遊之境—李貞慧個展》(東海大學藝術中心)",
          "1997《幻遊之境-李貞慧膠彩作品創作解析》(中臺科學技術 出版)",
          "1999 教育部人文課程改進計畫《膠彩畫的欣賞與製作》撰寫",
          "2003 東アジアにおける寺廟建造物壁画及び扉絵の復原模寫と保存修復に関する研究(中日共同研究2003-2005)",
          "2005《思考的進行式－李貞慧膠彩作品集》(臺中市文化局 展覽/出版)",
          "2005《膠彩類文物保存修護調查研究計畫-以國立臺灣歷史博物館籌備處典藏之五十件膠彩文物為例》(國立文化資產保存研究中心)",
          "2006 東アジアにおける寺廟建造物彩色．壁画の保存と修復に関する研究(中日韓共同研究2006-2009)",
          "2006《天地優遊－李貞慧膠彩創作展》(靜宜大學藝術中心  展覽/出版)",
          "2007《雲天漫遊－李貞慧－膠彩･素描》(嶺東科技大學藝術中心)",
          "2012《台灣名家美術100－膠彩‧李貞慧》(香柏文創 出版） ",
          "2014《行路－李貞慧創作個展》(臺中 107 GALLERY 展覽/出版）",
          "2015《李貞慧近作展》(新竹 啟源堂)",
          "2017《東海光．景－李貞慧創作．個展》(東海大學美術系所 展覽/出版)",
          "2017《東海光．景－風景情境與媒材可能性的創作思考 》（大古文化 出版）",
          "2017《東海光．景－李貞慧創作個展》(彰化縣立美術館）",
          "2018《行路．光景－李貞慧膠彩小品展》(臺中 KELLER GALLERY)",
          "2019《中部地區近代膠彩藝術委託研究案》(臺中市政府文化局)",
          "2020《丹青耀風華－承繼．開創．膠彩藝術》(臺中市政府文化局 展覽/出版)",
          "2022《時．光景－李貞慧創作個展》(國立彰化生活美學館 展覽/出版)",
          "2022《浮生幻景－李貞慧膠彩藝術》(臺中市立葫蘆墩文化中心 展覽/出版)",
        ],
      },
    ];
    provide("introductionList", introductionList);

    const backgroundImg = ref(require("@/assets/banner-2.jpg"));
    const artistImg = require("@/assets/lee(artist).jpg");

    const imagePaths = [backgroundImg.value, artistImg];

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
      isLoading.value = true;
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
      isLoading,
      backgroundImg,
      artistImg,
    };
  },
};
</script>

<template>
  <LoaderItem v-if="isLoading" />
  <div class="header" :style="{ backgroundImage: `url(${backgroundImg})` }">
    <div class="title">
      <router-link to="/">
        <h1>FLOATING FANTASY</h1>
        <h1>浮 生 幻 景</h1>
      </router-link>
    </div>
    <div class="content-bg">
      <div class="content">
        <div class="img-content">
          <img :src="artistImg" />
        </div>
        <div class="name-content">
          <div class="motto">
            <div>
              <h2>我天天在畫室種草！</h2>
              <h2>I plant grass in the studio every day!</h2>
            </div>
          </div>
          <div class="name">
            <p>作者</p>
            <p>李貞慧 <span>Lee Chen Huei</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <InformationMenu />
</template>

<style scoped>
.header {
  display: flex;
  padding: var(--logo-padding-top) 0 var(--logo-padding-top) 0;
  flex-direction: column;
  background-repeat: no-repeat;
  background-size: cover;
}

.title {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: start;
  color: #fff;
}

.title a h1 {
  font-family: "Playfair Display" !important;
  font-weight: 500;
  letter-spacing: 0;
  line-height: normal;
  color: #fff;
}

.title a h1:last-child {
  color: #c9a063;
  font-weight: 600;
  letter-spacing: 5px;
}

.title::before {
  content: "";
  position: relative;
  display: inline-block;
  width: 55px;
  height: 2px;
  background: #fff;
  margin-right: 10px;
}

@media (max-width: 950px) {
  .title::before {
    width: 45px;
  }
  .header {
    padding: var(--logo-padding-top) 5% var(--logo-padding-top) 5%;
  }
}

@media (max-width: 500px) {
  .title::before {
    width: 30px;
  }
}

.content-bg {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5vh;
}

.content {
  display: flex;
  min-height: 50vh;
  max-width: 1200px;
}

.name-content {
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  padding-right: 15px;
  color: #fff;
}

.motto {
  padding: 0 30px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: var(--font-second-size);
}

.name p {
  font-size: var(--font-second-size);
  font-weight: 600;
}

.name span {
  font-size: var(--font-main-size);
  font-weight: 600;
}

.name span:last-child {
  color: #c9a063;
}

.img-content {
  width: 40%;
}

.img-content img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
}

@media (max-width: 950px) {
  .body {
    padding: 10vh 0 10vh 0;
  }

  .content {
    flex-direction: column;
  }
  .name-content,
  .img-content {
    width: 100%;
    flex-direction: column;
    padding: 5vh 0 0 0;
  }

  .name-content {
    align-items: flex-start;
    padding: 0 36px;
  }

  .motto {
    padding: 0;
  }

  .motto,
  .name {
    padding-top: 30px;
  }

  .motto p,
  .name p {
    line-height: normal;
    margin: 5px 0;
  }
}
</style>
