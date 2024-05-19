<script>
import { ref } from "vue";

export default {
  setup() {
    const stages = ref([
      {
        name: "第一階段(1987-1993)：構圖與顏色的遊戲",
        image: require("@/assets/artwork/家.png"),
        url: "/ThreeStages?stage=first",
      },
      {
        name: "第二階段(1994-2008)：生之舞曲",
        image: require("@/assets/artwork/樹洞.jpg"),
        url: "/ThreeStages?stage=second",
      },
      {
        name: "第三階段(2011-2022)：卻說天涼好個秋",
        image: require("@/assets/artwork/芳草.jpg"),
        url: "/ThreeStages?stage=third",
      },
    ]);

    return {
      stages,
    };
  },
};
</script>

<template>
  <div class="title">
    <h2>作品賞析</h2>
  </div>
  <div class="cards-content">
    <div class="cards">
      <div class="card" v-for="stage in stages" :key="stage.id">
        <router-link :to="stage.url">
          <img :src="stage.image" />
          <p>{{ stage.name }}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.title {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 50px 10% 10px 0;
}

.title::before {
  content: "";
  width: 55px;
  height: 1.5px;
  display: inline-block;
  background: #8d8c8c;
  top: 1px;
  position: relative;
  margin-right: 10px;
}

.cards-content {
  width: 100%;
  overflow-x: hidden;
}

.cards {
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  width: 100%;
  transform: translateX(22%);
  transition: transform 1s ease-in-out;
  padding: 5vh 0;
}

.cards:hover {
  transform: translateX(0%);
}

.card {
  width: 28%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
}

.cards img {
  width: 100%;
  height: 20vw;
  object-fit: cover;
  filter: grayscale(100%);
  transition: filter 0.5s ease-in-out;
}

.card:hover img {
  filter: grayscale(0%);
}

.card p {
  color: #000;
}
</style>
