import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/components/HomePage/'),
    meta: {
      title: '李貞慧膠彩藝術',
      metaTags: [
        {
          property: 'og:title',
          content: '李貞慧膠彩藝術'
        },
        {
          property: 'og:description',
          content: `藝術家李貞慧。永遠的母親、妻子、女兒。教授。創作者。柔軔如藤、昂揚似松。她追逐光影，調皮如精靈玩弄顏料；她感悟生命，內觀自省、悠然自得。其作品於一筆一畫間完成禪修般的頓悟，自成生命第三境界。(文/游惠遠)`
        },
        {
          property: 'og:image',
          content: 'https://kamaboko0126.github.io/lee-client/img/icons/icon.jpg'
        },
        {
          property: 'og:url',
          content: 'https://kamaboko0126.github.io/lee-client/'
        }
      ]
    }
  },
  {
    path: '/artistintroduction',
    name: 'artistintroduction',
    component: () => import('@/components/ArtistIntroduction/'),
    meta: {
      title: '李貞慧膠彩藝術 - 藝術家介紹',
      metaTags: [
        {
          property: 'og:title',
          content: '李貞慧膠彩藝術'
        },
        {
          property: 'og:description',
          content: '藝術家李貞慧。永遠的母親、妻子、女兒。教授。創作者。柔軔如藤、昂揚似松。她追逐光影，調皮如精靈玩弄顏料；她感悟生命，內觀自省、悠然自得。其作品於一筆一畫間完成禪修般的頓悟，自成生命第三境界。(文/游惠遠)'
        },
        {
          property: 'og:image',
          content: 'https://kamaboko0126.github.io/lee-client/img/icons/icon.jpg'
        },
        {
          property: 'og:url',
          content: 'https://kamaboko0126.github.io/lee-client/#/artistintroduction'
        }
      ]
    }
  },
  {
    path: '/artworkappreciation',
    name: 'artworkappreciation',
    component: () => import('@/components/ArtworkAppreciation'),
    meta: {
      title: '李貞慧膠彩藝術 - 作品欣賞',
      metaTags: [
        {
          property: 'og:title',
          content: '李貞慧膠彩藝術'
        },
        {
          property: 'og:description',
          content: '藝術家李貞慧。永遠的母親、妻子、女兒。教授。創作者。柔軔如藤、昂揚似松。她追逐光影，調皮如精靈玩弄顏料；她感悟生命，內觀自省、悠然自得。其作品於一筆一畫間完成禪修般的頓悟，自成生命第三境界。(文/游惠遠)'
        },
        {
          property: 'og:image',
          content: 'https://kamaboko0126.github.io/lee-client/img/icons/icon.jpg'
        },
        {
          property: 'og:url',
          content: 'https://kamaboko0126.github.io/lee-client/#/artworkappreciation'
        }
      ]
    }
  },
  {
    path: '/interactivezone',
    name: '李貞慧膠彩藝術 - 互動專區',
    component: () => import('@/components/InteractiveZone'),
    meta: {
      title: '李貞慧膠彩藝術',
      metaTags: [
        {
          property: 'og:title',
          content: 'Interactive Zone'
        },
        {
          property: 'og:description',
          content: '藝術家李貞慧。永遠的母親、妻子、女兒。教授。創作者。柔軔如藤、昂揚似松。她追逐光影，調皮如精靈玩弄顏料；她感悟生命，內觀自省、悠然自得。其作品於一筆一畫間完成禪修般的頓悟，自成生命第三境界。(文/游惠遠)'
        },
        {
          property: 'og:image',
          content: 'https://kamaboko0126.github.io/lee-client/img/icons/icon.jpg'
        },
        {
          property: 'og:url',
          content: 'https://kamaboko0126.github.io/lee-client/#/interactivezone'
        }
      ]
    }
  },
  {
    path: '/latestnews',
    name: '李貞慧膠彩藝術 - 最新消息',
    component: () => import('@/components/LatestNews'),
    meta: {
      title: 'Latest News',
      metaTags: [
        {
          property: 'og:title',
          content: '李貞慧膠彩藝術'
        },
        {
          property: 'og:description',
          content: '藝術家李貞慧。永遠的母親、妻子、女兒。教授。創作者。柔軔如藤、昂揚似松。她追逐光影，調皮如精靈玩弄顏料；她感悟生命，內觀自省、悠然自得。其作品於一筆一畫間完成禪修般的頓悟，自成生命第三境界。(文/游惠遠)'
        },
        {
          property: 'og:image',
          content: 'https://kamaboko0126.github.io/lee-client/img/icons/icon.jpg'
        },
        {
          property: 'og:url',
          content: 'https://kamaboko0126.github.io/lee-client/#/latestnews'
        }
      ]
    }
  },
  {
    path: '/threestages',
    name: '李貞慧膠彩藝術',
    component: () => import('@/components/ArtworkAppreciation/StageWork'),
    meta: {
      title: 'Three Stages',
      metaTags: [
        {
          property: 'og:title',
          content: '李貞慧膠彩藝術 - 作品賞析'
        },
        {
          property: 'og:description',
          content: '藝術家李貞慧。永遠的母親、妻子、女兒。教授。創作者。柔軔如藤、昂揚似松。她追逐光影，調皮如精靈玩弄顏料；她感悟生命，內觀自省、悠然自得。其作品於一筆一畫間完成禪修般的頓悟，自成生命第三境界。(文/游惠遠)'
        },
        {
          property: 'og:image',
          content: 'https://kamaboko0126.github.io/lee-client/img/icons/icon.jpg'
        },
        {
          property: 'og:url',
          content: 'https://kamaboko0126.github.io/lee-client/#/threestages'
        }
      ]
    }
  },
  {
    path: '/artwork',
    name: '李貞慧膠彩藝術 - 作品賞析',
    component: () => import('@/components/ArtworkAppreciation/ArtworkPage/'),
    meta: {
      title: 'Artwork',
      metaTags: [
        {
          property: 'og:title',
          content: '李貞慧膠彩藝術'
        },
        {
          property: 'og:description',
          content: '藝術家李貞慧。永遠的母親、妻子、女兒。教授。創作者。柔軔如藤、昂揚似松。她追逐光影，調皮如精靈玩弄顏料；她感悟生命，內觀自省、悠然自得。其作品於一筆一畫間完成禪修般的頓悟，自成生命第三境界。(文/游惠遠)'
        },
        {
          property: 'og:image',
          content: 'https://kamaboko0126.github.io/lee-client/img/icons/icon.jpg'
        },
        {
          property: 'og:url',
          content: 'https://kamaboko0126.github.io/lee-client/#/artwork'
        }
      ]
    }
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

// 設置導航守衛來動態更新元數據
router.beforeEach((to, from, next) => {
  // 使用document.title設置標題
  if (to.meta.title) {
    document.title = to.meta.title;
  }

  // 先移除現有的元數據標籤
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  // 添加新頁面的元數據標籤
  if (to.meta.metaTags) {
    to.meta.metaTags.map(tagDef => {
      const tag = document.createElement('meta');

      Object.keys(tagDef).forEach(key => {
        tag.setAttribute(key, tagDef[key]);
      });

      // 設置一個特殊屬性來標識由Vue Router控制的標籤，以便後續移除
      tag.setAttribute('data-vue-router-controlled', '');

      document.head.appendChild(tag);
    });
  }

  next();
});

export default router;
