<script>
import { onMounted, inject } from "vue";

export default {
  name: "ArtworkAppreciation",
  components: {},
  setup() {
    const showMenu = inject("showMenu");
    const isLoading = inject("isLoading");

    const newsData = [
      {
        date: "2021-09-01",
        value: "1987 東海大學美術系文學士",
        url: "",
      },
      {
        date: "2021-09-01",
        value: "1987 東海大學美術系文學士",
        url: "",
      },
      {
        date: "2021-09-01",
        value: "1987 東海大學美術系文學士",
        url: "",
      },
      {
        date: "2021-09-01",
        value: "1987 東海大學美術系文學士",
        url: "",
      },
    ];

    onMounted(() => {
      isLoading.value = true;
      showMenu.value = false;

      let images = [require("@/assets/artist.jpg")];

      let loadImages = images.map((image) => {
        return new Promise((resolve, reject) => {
          let img = new Image();
          img.src = image;
          img.onload = () => resolve(img);
          img.onerror = reject;
        });
      });

      Promise.all(loadImages)
        .then(() => {
          setTimeout(() => {
            isLoading.value = false;
            showMenu.value = true;
          }, 1500);
        })
        .catch((error) => {
          console.log(error);
        });
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
      <a :href="data.url">
        <p class="value">
          <span>{{ data.date + "," }}</span
          ><span>{{ data.value }}</span>
        </p>
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

.information p,
.information a {
  color: #000;
  font-weight: 400;
}

.value span:last-child {
  margin-left: 15px;
}
</style>
