<script>
import { ref } from "vue";

export default {
  setup() {
    const periods = ref([
      {
        name: "第一階段(1987-1993)：構圖與顏色的遊戲",
        value: `這一階段包括李貞慧從東海大學美術系至日本筑波藝術研究所畢業這段期間的創作，可以說是初入藝術殿堂復略虧堂奧的時期。<br />
            這個階段始於汲取養份、觀摩眾家之長，最後探索出屬於自己的表現性，充分享受於構圖與色彩交織間所形成的膠彩創作世界。剛開始的寫生工筆花鳥題材，最終定調於一生繪畫生涯無時或忘的山林、樹根所韻蓄的生命能量。<br />
            大自然的力量在貞慧的創作生涯中一直扮演非常重要的角色。`,
      },
      {
        name: "第二階段(1994-2008)：生之舞曲",
        value: `這個階段對貞慧而言是生而為婦為母，最為刻苦艱困的階段。她既是老師、甚至一度擔任系主任，在為系務校務焦頭爛額之餘，仍然天天堅持為先生孩子作飯，終於練就千手觀音般的能耐，一手拿鍋鏟、一手拿畫筆，就這樣，長達十四年間，孩子拉拔長大了！自己也充分體會人世間的種種辛酸苦辣，再以畫筆一一敘說，既以解憂、亦以自歡自嗨！<br />
            1994-2002年間的構圖，延續第一階段所定調的自然題材，仍以樹林、樹根、樹洞作為生命之隱喻，其間或者風狂雨驟，或者春日和暖，無非均是生活之寫照。<br />
            2003-2008年間的某些題材與當時台灣藝壇廣為流行的性別符號略為相關，但最終仍以其個人的所思所想為主題，以抽象式的表達呈現藝術家剪不斷理還亂的內心世界。<br />
            但，無論貞慧的表現題材為何？<br />
            她的畫，就算晦暗如冥，仍少不了色彩！<br />
            如其個人生命般—永遠有光！<br />
            `,
      },
      {
        name: "第三階段(2011-2022)：卻說天涼好個秋",
        value: `進入創作第三階段的貞慧，敬謐、深刻、處處皆風景<br />
            靜謐，好似經過數千年卻依然｢我在」！<br />
            深刻，在無盡的長河裡和每一株草、每一塊石、每一座山｢對話」！<br />
            最後，哈哈一笑！原來處處生機、處處皆風景！<br />
            她成為一位無性無色無慾非人非佛卻又萬般皆是、以畫筆自在入世的創作者。<br />
            `,
      },
      //   { name: "第四階段", value: "" },
    ]);

    return {
      periods,
    };
  },
};
</script>

<template>
  <div class="cards">
    <div class="card animated" v-for="period in periods" :key="period.id">
      <div>{{ period.name }}</div>
      <div v-html="period.value"></div>
    </div>
  </div>
</template>

<style scoped>
.cards {
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.card {
  color: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-radius: 5px;
}

.animated {
  animation: floatUp 1s ease-out forwards;
  opacity: 0;
}

@keyframes floatUp {
  0% {
    transform: translateY(100px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
