<script>
import { inject } from "vue";

export default {
  setup() {
    const isMobile = inject("isMobile");
    const filteredStagesData = inject("filteredStagesData");
    console.log(filteredStagesData[0].artworks);

    const datas = filteredStagesData[0].artworks;

    return {
      isMobile,
      filteredStagesData,
      datas,
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
      <div class="card" v-for="data in datas" :key="data.id">
        <img :src="data.image" alt="" />
        <p>{{ data.name }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 50px 10% 10px 0;

  &::before {
    content: "";
    width: 55px;
    height: 1.5px;
    display: inline-block;
    background: #8d8c8c;
    top: 1px;
    position: relative;
    margin-right: 10px;
  }
}

.cards-content {
  width: 100%;
  overflow-x: hidden;
}

.cards {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  transition: transform 1s ease-in-out;
  padding: 5vh 0;
  flex-wrap: wrap;
}

.card {
  width: 30%;
  margin-left: 2.5%;
  cursor: pointer;
  margin-bottom: 25px;
}

.card img {
  width: 100%;
  height: 18vw;
  object-fit: cover;
  filter: grayscale(100%);
  transition: 0.5s ease-in-out;
}

.card:hover img {
  filter: grayscale(0%);
}

.card p {
  line-height: normal;
  margin: 0;
}

@media (max-width: 750px) {
  .card {
    width: 44%;
    margin-left: 4%;
  }

  .card img {
    height: 25vw;
  }
}

@media (max-width: 500px) {
  .card {
    width: 100%;
    margin-left: 0%;
    margin-bottom: 35px;
  }

  .card img {
    height: 45vw;
  }

  .card p {
    padding: 0 15px;
  }
}
</style>
