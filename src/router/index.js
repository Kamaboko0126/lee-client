import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/components/HomePage/'),
  },
  {
    path: '/artistintroduction',
    name: 'artistintroduction',
    component: () => import('@/components/ArtistIntroduction/'),
  },
  {
    path: '/artworkappreciation',
    name: '李貞慧膠彩藝術 - 作品欣賞',
    component: () => import('@/components/ArtworkAppreciation'),
  },
  {
    path: '/interactivezone',
    name: '李貞慧膠彩藝術 - 互動專區',
    component: () => import('@/components/InteractiveZone'),
  },
  {
    path: '/latestnews',
    name: '李貞慧膠彩藝術 - 最新消息',
    component: () => import('@/components/LatestNews'),
  },
  {
    path: '/threestages',
    name: '李貞慧膠彩藝術',
    component: () => import('@/components/ArtworkAppreciation/StageWork'),
  },
  {
    path: '/artwork',
    name: '李貞慧膠彩藝術 - 作品賞析',
    component: () => import('@/components/ArtworkAppreciation/ArtworkPage/'),
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
