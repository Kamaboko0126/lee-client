import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/components/HomePage"),
    },
    {
      path: "/artistintroduction",
      name: "artistintroduction",
      component: () => import("@/components/ArtistIntroduction"),
    },
    {
      path: "/artworkappreciation",
      name: "artworkappreciation",
      component: () => import("@/components/ArtworkAppreciation"),
    },
    {
      path: "/exhibitionconcept",
      name: "exhibitionconcept",
      component: () => import("@/components/ExhibitionConcept"),
    },
    {
      path: "/interactivezone",
      name: "interactivezone",
      component: () => import("@/components/InteractiveZone"),
    },
    {
      path: "/interviewvideos",
      name: "interviewvideos",
      component: () => import("@/components/InterviewVideos"),
    },
    {
      path: "/latestnews",
      name: "latestnews",
      component: () => import("@/components/LatestNews"),
    },
  ],
});

export default router;
