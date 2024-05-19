<script>
/* eslint-disable no-irregular-whitespace */
import { onMounted, inject, ref, computed } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "ArtworkAppreciation",
  components: {},
  setup() {
    const showMenu = inject("showMenu");
    const isLoading = inject("isLoading");

    const route = useRoute();
    const currentStage = ref(route.query.stage);

    const filteredStagesData = computed(() => {
      return stagesData.filter(
        (stageData) => stageData.stage === currentStage.value
      );
    });

    const stagesData = [
      {
        stage: "first",
        title: "第一階段(1987-1993)：構圖與顏色的遊戲",
        introduction: "這是關於第一階段(構圖與顏色的遊戲)的介紹",
        artworks: [
          {
            name: "家",
            image: require("@/assets/artwork/家.png"),
            url: "",
          },
          {
            name: "春山啼鳥",
            image: require("@/assets/artwork/家.png"),
            url: "",
          },
          {
            name: "白樺",
            image: require("@/assets/artwork/家.png"),
            url: "",
          },
          {
            name: "根",
            image: require("@/assets/artwork/家.png"),
            path: "",
          },
          {
            name: "寒林深秋",
            image: require("@/assets/artwork/家.png"),
            url: "",
          },
        ],
      },
      {
        stage: "second",
        title: "第二階段(1994-2008)：生之舞曲",
        introduction: "這是關於第一階段(生之舞曲)的介紹",
        artworks: [
          {
            name: "樹洞",
            image: require("@/assets/artwork/家.png"),
            url: "",
          },
          {
            name: "風的纏綿(二)",
            image: require("@/assets/artwork/家.png"),
            url: "",
          },
          {
            name: "風的纏綿(四)",
            image: require("@/assets/artwork/家.png"),
            url: "",
          },
          {
            name: "潸然",
            image: require("@/assets/artwork/家.png"),
            url: "",
          },
        ],
      },
      {
        stage: "third",
        title: "第三階段(2011-2022)：卻說天涼好個秋",
        introduction: "這是關於第一階段(卻說天涼好個秋)的介紹",
        artworks: [
          {
            name: "芳草",
            image: require("@/assets/artwork/家.png"),
            url: "",
          },
          {
            name: "穹影",
            image: require("@/assets/artwork/家.png"),
            url: "",
          },
          {
            name: "長流",
            image: require("@/assets/artwork/家.png"),
            url: "",
          },
          {
            name: "夢河",
            image: require("@/assets/artwork/家.png"),
            url: "",
          },
          {
            name: "默寞",
            image: require("@/assets/artwork/家.png"),
            url: "",
          },
        ],
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
      stagesData,
      filteredStagesData,
      currentStage,
    };
  },
};
</script>

<template>
  <div class="body">
    <div class="title">
      <div>
        <h1>FLOATING FANTASY</h1>
        <h1>浮 生 幻 景</h1>
      </div>
    </div>

    <div class="content">
      <div>
        <p v-for="stageData in filteredStagesData" :key="stageData.id">
          {{ stageData.introduction }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.body {
  display: flex;
  padding: 10vh 0 10vh 0;
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

.content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #fff;
  font-size: var(--font-main-size);
  padding-top: var(--logo-padding-top);
}

.words {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0 30px 0;
}

.words p:not(:last-child) {
  margin-right: 20px;
}
</style>
