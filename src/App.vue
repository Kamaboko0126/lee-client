<script>
import { ref, provide } from "vue";
import MenuItem from "./components/DefaultItem/MenuItem.vue";
import FooterItem from "./components/DefaultItem/FooterItem.vue";
import LeftItem from "./components/DefaultItem/LeftItem.vue";
import LoaderItem from "./components/DefaultItem/LoaderItem.vue";
export default {
  name: "App",
  components: {
    MenuItem,
    FooterItem,
    LeftItem,
    LoaderItem,
  },
  setup() {
    document.title = "浮生幻景";

    //for all pages
    const isLoading = ref(true);
    provide("isLoading", isLoading);

    //for all pages
    const isMenuOpen = ref(false);
    provide("isMenuOpen", isMenuOpen);

    const showMenu = ref(false);
    provide("showMenu", showMenu);

    //for all pages
    const isMobile = ref();
    provide("isMobile", isMobile);

    const menus = ref([
      { name: "浮生幻景", url: "/" },
      { name: "作品賞析", url: "/artworkappreciation" },
      { name: "藝術家介紹", url: "/artistintroduction" },
      { name: "互動專區", url: "/interactivezone" },
      { name: "動態消息", url: "/latestnews" },
    ]);

    provide("menus", menus);

    const stagesData = [
      {
        stage: "first",
        title: "第一階段(1987-1993)：構圖與顏色的遊戲",
        introduction:
          "畫家為了能更精確的掌握各種小動物的形態，秉著｢膠彩畫之父」林之助的點撥，養鳥養魚者一時蔚成畫壇的有趣風潮，李貞慧亦不在話下。",
        artworks: [
          {
            name: "家",
            image: require("@/assets/artwork/家.png"),
            format: "水干顏料、胚布 70x90cm 1987",
            introduction:
              "這件作品裡，描寫五隻意態閑適的粉鴿，或閑步或小憩或半休眠，毛羽豐滿、色彩層次分明，於鳥隻動態、羽翼構成分佈刻畫入微，可見畫家用力於寫實技法之磨厲甚深。",
          },
          {
            name: "春山啼鳥",
            image: require("@/assets/artwork/春山啼鳥.jpg"),
            format: "水干顏料、胚布 73x61cm 1988",
            introduction:
              "描繪五隻麻雀穿梭於竹葉間爭相啼叫，活潑靈動，頗有傳統中國工筆花鳥寫生之意趣。全畫以綠葉為主色調，配合褐色鳥雀適成互補，色彩搭配得宜，無論線條或色彩，足證藝術家於傳統繪畫是下過一番功夫的。",
          },
          {
            name: "白樺",
            image: require("@/assets/artwork/白樺.png"),
            format: "礦物顏料、銀箔、紙本 117x117cm 1992",
            introduction:
              "李貞慧在赴日本求學之後，作品技法與風格有了非常大的突破，完全跳脫臺灣膠彩畫壇自1970年以來的鄉土寫實主義。儘管作品題材幾乎均以自然景觀為描寫對象，但半具象之意有所指，卻又淋漓盡致地以抽象式的表達方式，傳達其感知與生命熱力。",
          },
          {
            name: "時光流逝(五)",
            image: require("@/assets/artwork/時光流逝(五).png"),
            format: "礦物顏料、銀箔、黑箔、墨、紙本 117x117cm 1992",
            introduction:
              "李貞慧在赴日本求學之後，作品技法與風格有了非常大的突破，完全跳脫臺灣膠彩畫壇自1970年以來的鄉土寫實主義。儘管作品題材幾乎均以自然景觀為描寫對象，但半具象之意有所指，卻又淋漓盡致地以抽象式的表達方式，傳達其感知與生命熱力。",
          },
          {
            name: "寒林深秋",
            image: require("@/assets/artwork/寒林深秋.jpg"),
            format: "礦物顏料、水干顏料、箔、紙本 165x210cm 四曲一雙 1993",
            introduction:
              "是李貞慧在第一階段作品中的成熟代表作，總結其創作學習的所有試驗，並找到表達個人意念的方法。畫面色彩紛呈、恣意揮灑、潛流湧動，呈現某種暗寓氛圍；彷彿深陷於異世界空間，卻仍見光影處處安頓內心的不安，形成混沌世界裡的彩色幻境。此作之創作技法與多元媒材的運用，正式揭開李貞慧式的情景交融敘述風格之序幕。",
          },
        ],
      },
      {
        stage: "second",
        title: "第二階段(1994-2008)：生之舞曲",
        introduction:
          "此期間的李貞慧陸續完成幾個重大生命段落：結婚、生子、承擔系務，為了有力擔負，更要奮力翻轉自己！但，家事、創作、公務多頭燒的女性創作者、學術人的現象，造成這長達十四年的作品，經常予人衝突混亂、血淚斑斑之感。但藝術家往往又因其無可救藥的天生樂觀主義，儘管風雨冥晦，總也還能在畫面上為自己留一絲餘地、別開洞天！",
        artworks: [
          {
            name: "樹洞",
            image: require("@/assets/artwork/樹洞.jpg"),
            format: "礦物顏料、箔、紙本 73x73cm 1994",
            introduction:
              "運用色彩層次營造出空間感，在層層堆疊精細刻畫中，看似隨興粗獷，卻營造雄厚磅礡堅毅的氣勢，深具張力。整個作品氛圍固然神秘、隱晦、陰深，甚至淌血，但觀者仍能感受到就算在巨巖的包覆壓迫下，盤根虯然的巨樹仍奮力如泰坦巨人之昂然。",
          },
          {
            name: "風的纏綿(二)",
            image: require("@/assets/artwork/風的纏綿(二).png"),
            format: "礦物顏料 銀箔、紙本 73x73cm 1997",
            introduction:
              "是李貞慧此階段的系列代表作。半具象式的描繪一叢叢一簇簇的長草在狂風捲掃之下不知其所終又拼命掙扎抵抗；但那些看似混亂的草在風威掃蕩下並非柔弱無骨，而是崢崚頑強的活出自己的姿態！",
          },
          {
            name: "風的纏綿(四)",
            image: require("@/assets/artwork/風的纏綿(四).png"),
            format: "礦物顏料、銀箔、紙本 117x117cm 1997",
            introduction:
              "是李貞慧此階段的系列代表作。半具象式的描繪一叢叢一簇簇的長草在狂風捲掃之下不知其所終又拼命掙扎抵抗；但那些看似混亂的草在風威掃蕩下並非柔弱無骨，而是崢崚頑強的活出自己的姿態！",
          },
          {
            name: "潸然",
            image: require("@/assets/artwork/潸然.jpg"),
            format: "礦物顏料、銀箔、紙本 80x140cm 2005",
            introduction:
              "有非常強烈的陰性符碼特徵，或為藝術家的內在自覺？也有可能是此期間台灣藝壇性別意識抬頭影響下的流行現象？不管基於哪種因素，恰能詮釋作者在五位一體、身心煎熬下的濃烈情緒。",
          },
        ],
      },
      {
        stage: "third",
        title: "第三階段(2011-2022)：卻說天涼好個秋",
        introduction:
          "此期間的作品，除了大寫式的以高山巨川遼闊的草原描寫個人參悟之境外，在東海大學生活中俯拾皆是的小草、樹林，乃至校園裡的地磚無處不能入畫。依李貞慧的說法是：｢我天天在研究室種草！」這些畫幅大小不一的生活小品，如小精靈般輕盈地迴旋於光影美感中，和新疆題材的深刻厚重氛圍完全不同。也就是，同列為第三階段的作品，卻各有不同的風貌！從此之後的她，已悄然進入禪境，走過風雨人生之後，終於自我完成。",
        artworks: [
          {
            name: "芳草",
            image: require("@/assets/artwork/芳草.jpg"),
            format: "礦物顏料、箔、紙本 51x61cm 2011",
            introduction:
              "在有限的畫幅中，營造出宏闊的視野，細筆｢種下」的每株小草，猶如禪修般，締造出自然清雅、氣韻生動又兼光彩迷幻的草原之美。",
          },
          {
            name: "穹影",
            image: require("@/assets/artwork/穹影.jpg"),
            format: "礦物顏料、紙本 46x53cm 2011",
            introduction:
              "由左往右前方匍匐延伸至遠方天際的山稜，猶如巨獸般穩重而深邃，赫然便是赫曼赫塞在《流浪者之歌》中所詮釋的｢奧」境界。",
          },
          {
            name: "長流",
            image: require("@/assets/artwork/長流.png"),
            format: "礦物顏料、銀箔、紙本 152x40cm 2022",
            introduction:
              "一幅長條的大作品，接近於中國山水畫的多點透視，可以任意裁切仍能維持畫面的完整性，此亦可見作者在構圖上的深厚功力。整座山佔了畫幅的四分之三，只留四分之一給遠方的河流，山的力與河的柔，恰成對比卻又融合無間。此作運用色彩層次析理出山脈的肌理、質感、光影變化，再以暖色系層層堆疊出遠方高原的豐富地景。",
          },
          {
            name: "夢河",
            image: require("@/assets/artwork/夢河.png"),
            format: "礦物顏料、銀箔、紙本 61x51cm 2022 ",
            introduction:
              "尺幅不大，卻能無盡延伸，這是貞慧最大的本事！從近景的山頭，越過延展至天邊遠山的蜿蜒河流，這幅以深藍設色為主的作品，僅用色彩的濃淡調整，便造出玄遠幽靜之感，而時間並未在這種幽深的氛圍中靜止，反而因為靜了，因為空了，反而可以周遊穹宇四方，這已是｢莊子」的境界了。",
          },
          {
            name: "默寞",
            image: require("@/assets/artwork/默寞.jpg"),
            format: "礦物顏料、銀箔、紙本 127x50cm 2021",
            introduction:
              "李貞慧的作品風格邁入成熟、穩重、深邃，形成重大蛻變！也是其膠彩人生的重大發展與突破！這段過程源自生命實踐過程中的深刻感悟：見山是山，見水是水！須彌芥子皆見宇宙，處處皆風景，當下即安頓！",
          },
        ],
      },
    ];
    provide("stagesData", stagesData);

    return {
      isLoading,
      showMenu,
      isMobile,
    };
  },
};
</script>

<template>
  <LoaderItem v-if="isLoading" />
  <MenuItem v-if="showMenu" />
  <div class="main">
    <div class="left">
      <LeftItem />
    </div>
    <div class="right">
      <router-view />
    </div>
  </div>
  <div class="footer">
    <FooterItem />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "source-han-sans-traditional", sans-serif;
  font-weight: 100;
  font-style: normal;
}

:root {
  --main-color: #3e3a39;

  --font-main-size: 15px;

  --title-main-size: 32px;
  --title-second-size: 18px;
  --title-third-size: 28px;

  --font-fourth-size: 17px;

  --leftitem-width: 75px;

  --logo-padding-top: 70px;
  --logo-padding-left: 100px;
  --logo-padding-second: 0 0 70px 130px;
  --logo-height: 200px;

  --menuicon-position-right: 150px;
  --menu-icon-size: 60px;
  --menu-font-size: 40px;
  --menu-second-font-size: 28px;

  --letter-scale: 2;
}

@media (max-width: 950px) {
  :root {
    --font-main-size: 15px;

    --leftitem-width: 0px;

    --title-main-size: 30px;
    --title-third-size: 26px;

    --menuicon-position-right: 70px;
    --menu-icon-size: 50px;
    --menu-font-size: 35px;

    --logo-padding-top: 75px;
    --logo-padding-left: 50px;
    --logo-padding-second: 0 0 60px 50px;
    --letter-scale: 1.8;
  }
}

@media (max-width: 500px) {
  :root {
    --font-main-size: 15px;

    --leftitem-width: 0px;

    --title-main-size: 24px;
    --title-third-size: 21px;

    --logo-padding-top: 80px;
    --logo-padding-left: 40px;
    --logo-padding-second: 0 0 60px 50px;

    --menuicon-position-right: 40px;
    --menu-icon-size: 40px;
    --menu-font-size: 30px;
    --letter-scale: 1.65;
  }
}

p,
h1,
h2,
h3 {
  line-height: 2.4;
  font-size: var(--font-main-size);
  font-feature-settings: "palt" on;
  letter-spacing: 0.15em;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  unicode-bidi: isolate;
}

h1,
h2,
h3 {
  font-size: var(--title-main-size);
  margin-block-start: 0;
  margin-block-end: 0;
  font-weight: 300;
}

h2 {
  font-size: var(--title-second-size);
}

h3 {
  font-size: var(--title-third-size);
}

.main {
  display: flex;
  min-height: 100vh;
}

.left {
  width: var(--leftitem-width);
}

.right {
  width: calc(100% - var(--leftitem-width));
}

.footer {
  position: relative;
  left: var(--leftitem-width);
  width: calc(100% - var(--leftitem-width));
  overflow-x: hidden;
}

button {
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
}

a {
  text-decoration: none;
}
</style>
