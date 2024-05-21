<script>
import { inject, ref } from "vue";

export default {
  setup() {
    const isMobile = inject("isMobile");

    const stages = ref([
      {
        name: "第一階段(1987-1993)：構圖與顏色的遊戲",
        image: require("@/assets/artwork/寒林深秋.jpg"),
        url: "/threestages?stage=first",
      },
      {
        name: "第二階段(1994-2008)：生之舞曲",
        image: require("@/assets/artwork/風的纏綿(二).png"),
        url: "/threestages?stage=second",
      },
      {
        name: "第三階段(2011-2022)：卻說天涼好個秋",
        image: require("@/assets/artwork/默寞.jpg"),
        url: "/threestages?stage=third",
      },
    ]);

    return {
      stages,
      isMobile,
    };
  },
};
</script>

<template>
  <div class="title">
    <h2>作品賞析</h2>
  </div>
  <div class="cards-content">
    <div class="cards" :class="{ mobile: isMobile }">
      <div class="card" v-for="stage in stages" :key="stage.id">
        <router-link :to="stage.url">
          <img :src="stage.image" />
          <p>{{ stage.name }}</p>
        </router-link>
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
  justify-content: space-evenly;
  width: 100%;
  transform: translateX(22%);
  transition: transform 1s ease-in-out;
  padding: 5vh 0;

  &.mobile {
    flex-direction: column;
    transform: translateX(0%);
    align-items: center;
    justify-content: flex-start;

    .card {
      width: 100%;

      &:not(:first-child) {
        margin-top: 25px;
      }

      img {
        height: 50vw;
        filter: grayscale(0);
      }

      p {
        padding: 0 15px;
      }
    }
  }

  &:hover {
    transform: translateX(0%);
  }

  .card {
    width: 28%;
    display: flex;
    flex-direction: column;
    cursor: pointer;

    img {
      width: 100%;
      height: 20vw;
      object-fit: cover;
      filter: grayscale(100%);
      transition: filter 0.5s ease-in-out;

      &:hover {
        filter: grayscale(0%);
      }
    }

    p {
      color: #000;
      font-weight: 300;
    }
  }
}

@media (max-width: 700px) {
  .cards {
    flex-direction: column;
    transform: translateX(0%);
    align-items: center;
    justify-content: flex-start;

    .card {
      width: 100%;

      &:not(:first-child) {
        margin-top: 25px;
      }

      img {
        height: 50vw;
      }

      p {
        padding: 0 15px;
      }
    }
  }
}
</style>
