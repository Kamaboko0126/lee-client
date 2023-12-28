<template>
  <div class="menu-content">
    <div class="menu-items">
      <router-link to="/" class="menu-item"
        ><span @click="callParentMethod">浮生幻景</span></router-link
      >
      <router-link to="/artworkappreciation" class="menu-item"
        ><span @click="callParentMethod">作品賞析</span></router-link
      >
    </div>
    <div class="menu-items">
      <router-link to="/artistintroduction" class="menu-item"
        ><span @click="callParentMethod">作者介紹</span></router-link
      >
      <router-link to="/exhibitionconcept" class="menu-item"
        ><span @click="callParentMethod">展覽理念</span></router-link
      >
      <router-link to="/latestnews" class="menu-item"
        ><span @click="callParentMethod">動態消息</span></router-link
      >
    </div>
    <div class="menu-items">
      <router-link to="/interactivezone" class="menu-item"
        ><span @click="callParentMethod">互動專區</span></router-link
      >
      <router-link to="/interviewvideos" class="menu-item"
        ><span @click="callParentMethod">採訪影片</span></router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  setup(_, context) {
    const callParentMethod = () => {
      context.emit("closeMenu");
    };

    return {
      callParentMethod,
    };
  },
};
</script>

<style scoped>
.menu-content {
  padding: 0 13vw;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.menu-items {
  display: flex;
  flex-direction: column;
}

.menu-item {
  font-size: var(--font-bigger-size);
  font-weight: 600;
  color: #c9a063;
  cursor: pointer;
  position: relative;
  transition: 0.4s ease-in-out;
  text-decoration: none;
}
.menu-item:not(:first-child) {
  margin-top: 100px;
}

.menu-item:hover {
  transform: scale(1.1);
}

.menu-item::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 30%;
  height: 1px;
  background: #fff;
  transition: 0.4s ease-in-out;
}

.menu-item:hover::after {
  width: 100%;
}

@media (max-width: 950px) {
  .menu-content {
    padding: 0 13vw;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
  }

  .menu-item:not(:first-child) {
    margin-top: 0;
  }
  .menu-items:not(:first-child) .menu-item,
  .menu-items:nth-child(1) .menu-item:nth-child(2) {
    margin-top: 35px;
  }

  .menu-items:last-child .menu-item:last-child {
    margin-bottom: 35px;
  }
}
</style>
