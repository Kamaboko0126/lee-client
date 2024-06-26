import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/components/HomePage/"),
    },
    {
      path: "/artistintroduction",
      name: "artistintroduction",
      component: () => import("@/components/ArtistIntroduction/"),
    },
    {
      path: "/artworkappreciation",
      name: "artworkappreciation",
      component: () => import("@/components/ArtworkAppreciation"),
    },
    {
      path: "/interactivezone",
      name: "interactivezone",
      component: () => import("@/components/InteractiveZone"),
    },
    {
      path: "/latestnews",
      name: "latestnews",
      component: () => import("@/components/LatestNews"),
    },{
      path:"/threestages",
      name:"threestages",
      component:()=>import("@/components/ArtworkAppreciation/StageWork")
    },
    {
      path:"/artwork",
      name:"artwork",
      component:()=>import("@/components/ArtworkAppreciation/ArtworkPage/")
    }
  ],
});

export default router;
