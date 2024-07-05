<script>
import { onMounted, inject } from "vue";

export default {
  name: "ArtworkAppreciation",
  components: {},
  setup() {
    const newsData = [
      {
        date: "2024.07.11 - 2024.09.02",
        value: "微光心影—李貞慧膠彩創作",
        url: "https://www.artspots-taichung.com.tw/tw/news-detail/163",
      },
      {
        date: "2023.10.14 - 2023.11.15",
        value: "夢中繁華—李貞慧個展",
      },
      {
        date: "2022.10.21 - 2022.11.20",
        value: "浮光幻景—李貞慧膠彩藝術展",
      },
      {
        date: "2022.10.15 - 2022.12.15",
        value: "生成",
        url: "https://ymspring.com.tw/2142/art-gallery/%E5%B1%95%E8%A6%BD%E4%B8%BB%E9%A1%8C%E3%80%90%E7%94%9F%E6%88%90%E3%80%91/",
      },
      {
        date: "2022.03.31 - 2022.05.01",
        value: "時‧光景—李貞慧創作個展",
        url: "https://imedia.culture.tw/channel/chcsec/zh_tw/media/131368",
      },
      {
        date: "2006.04.20 - 2006.05.25",
        value: "天地優遊—李貞慧膠彩個展",
        url: "http://art.lib.pu.edu.tw/2006-04-20/index.htm",
      },
    ];

    onMounted(() => {
      const showMenu = inject("showMenu");
      showMenu.value = true;
    });

    return {
      newsData,
    };
  },
};
</script>

<template>
  <div class="header">
    <div class="title">
      <div>
        <h1>FLOATING FANTASY</h1>
        <h1>浮 生 幻 景</h1>
      </div>
    </div>
  </div>
  <div class="second-title">
    <h2>動態消息</h2>
  </div>
  <div class="informations">
    <div class="information" v-for="data in newsData" :key="data.id">
      <a :href="data.url" target="blank">
        <div class="value">
          <p>{{ data.date }}</p>
          <p>{{ data.value }}</p>
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  padding: 10vh 0 5vh 0;
  flex-direction: column;
  background: var(--main-color);
}

.title {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: start;
  color: #fff;
}

.title div h1 {
  font-family: "Playfair Display" !important;
  font-weight: 500;
  letter-spacing: 0;
  line-height: normal;
}

.title div h1:last-child {
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

.second-title {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 50px 10% 10px 0;
}

.second-title::before {
  content: "";
  width: 55px;
  height: 1.5px;
  display: inline-block;
  background: #8d8c8c;
  top: 1px;
  position: relative;
  margin-right: 10px;
}

.informations {
  padding: 0 10% 50px;
}

.information a p,
.information a {
  color: #000;
  font-weight: 300;
}

.value {
  display: flex;
}

.value p {
  font-weight: 300;
}

.value p:last-child {
  margin-left: 15px;
}

@media (max-width: 600px) {
  .value {
    flex-direction: column;
    display: inline-block;
  }

  .value p {
    line-height: 1;
  }

  .information {
    margin-top: 20px;
  }

  .value p:last-child {
    margin-left: 0;
  }
}
</style>
