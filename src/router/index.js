import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/components/HomePage";
import ArtistIntroduction from "@/components/ArtistIntroduction";
import ArtworkAppreciation from "@/components/ArtworkAppreciation";
import ExhibitionConcept from "@/components/ExhibitionConcept";
import InteractiveZone from "@/components/InteractiveZone";
import InterviewVideos from "@/components/InterviewVideos";
import LatestNews from "@/components/LatestNews";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/artistintroduction",
      name: "artistintroduction",
      component: ArtistIntroduction,
    },
    {
      path: "/artworkappreciation",
      name: "artworkappreciation",
      component: ArtworkAppreciation,
    },
    {
      path: "/exhibitionconcept",
      name: "exhibitionconcept",
      component: ExhibitionConcept,
    },
    {
      path: "/interactivezone",
      name: "interactivezone",
      component: InteractiveZone,
    },
    {
      path: "/interviewvideos",
      name: "interviewvideos",
      component: InterviewVideos,
    },
    {
      path: "/latestnews",
      name: "latestnews",
      component: LatestNews,
    },
  ],
});

export default router;
