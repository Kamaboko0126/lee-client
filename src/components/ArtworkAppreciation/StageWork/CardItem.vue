<script>
import { inject } from "vue";

export default {
  setup() {
    const isMobile = inject("isMobile");
    const currentStageData = inject("currentStageData").value.artworks;
    const currentStage = inject("currentStage").value;

    return {
      isMobile,
      currentStageData,
      currentStage,
    };
  },
};
</script>

<template>
  <div class="cards-body">
    <div class="title">
      <h2>作品賞析</h2>
    </div>
    <div class="cards-content">
      <div class="cards" :class="{ mobile: isMobile }">
        <div
          class="card"
          v-for="stageData in currentStageData"
          :key="stageData.id"
        >
          <router-link
            :to="'/artwork?stage=' + currentStage + '&name=' + stageData.name"
          >
            <img :src="stageData.image" />
            <!-- eslint-disable-next-line no-irregular-whitespace -->
            <p>{{ stageData.name + "　" + stageData.format }}</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cards-body {
  background: #fff;
  padding-bottom: 10vh;
}

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

.title h2 {
  font-weight: 500;
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

  &.mobile {
    .card {
      width: 100%;
      margin-left: 0;
      margin-bottom: 35px;

      img {
        filter: grayscale(0);
        height: 50vw;
      }

      p {
        padding: 0 15px;
      }
    }
  }
}

.card {
  width: 30%;
  margin-left: 2.5%;
  cursor: pointer;
  margin-bottom: 25px;

  img {
    width: 100%;
    height: 18vw;
    object-fit: cover;
    filter: grayscale(100%);
    transition: 0.5s ease-in-out;
  }

  &:hover img {
    filter: grayscale(0%);
  }

  p,
  a {
    line-height: normal;
    margin: 0;
    color: #000;
    font-weight: 300;
  }

  @media (max-width: 750px) {
    width: 44%;
    margin-left: 4%;

    img {
      height: 25vw;
    }
  }

  @media (max-width: 500px) {
    width: 100%;
    margin-left: 0;
    margin-bottom: 35px;

    img {
      height: 50vw;
    }

    p {
      padding: 0 15px;
    }
  }
}
</style>
