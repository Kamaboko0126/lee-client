<script>
import { ref } from "vue";

export default {
  setup() {
    const periods = ref([
      {
        name: "第一階段(1987-1993)：構圖與顏色的遊戲",
        image: require("@/assets/artwork/家.png"),
      },
      {
        name: "第二階段(1994-2008)：生之舞曲",
        image: require("@/assets/artwork/樹洞.jpg"),
      },
      {
        name: "第三階段(2011-2022)：卻說天涼好個秋",
        image: require("@/assets/artwork/芳草.jpg"),
      },
    ]);

    return {
      periods,
    };
  },
};
</script>

<template>
  <div class="cards-content">
    <div class="cards">
      <div class="card" v-for="period in periods" :key="period.id">
        <img :src="period.image" />
        <p>{{ period.name }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cards-content{
  width: 100%;
  overflow-x: hidden;
}

.cards {
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  width: 100%;
  transform: translateX(17%);
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
  filter: grayscale(80%);
  transition: filter 0.5s ease-in-out;
}

.card:hover img {
  filter: grayscale(0%);
}

.card p{

}
</style>
