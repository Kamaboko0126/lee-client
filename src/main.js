import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';
import { createMetaManager } from 'vue-meta';

const app = createApp(App);

// 創建meta管理器
const metaManager = createMetaManager();

// 使用meta管理器
app.use(metaManager);

// 使用router
app.use(router);

// 掛載應用
app.mount('#app');
