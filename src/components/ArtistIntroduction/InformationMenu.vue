<script>
import { inject, ref } from "vue";
export default {
  setup() {
    const introductionList = inject("introductionList");
    const currentItem = ref("學歷");

    return {
      introductionList,
      currentItem,
    };
  },
};
</script>

<template>
  <div class="information-content">
    <div class="horizontal-menu">
      <div class="title">
        <h2>簡歷</h2>
      </div>
      <div class="menu-items">
        <div class="list" v-for="list in introductionList" :key="list.id">
          <p
            @click="currentItem = list.name"
            :class="currentItem == list.name ? 'current' : ''"
          >
            {{ list.name }}
          </p>
        </div>
      </div>
    </div>
    <div class="informations">
      <div class="information" v-for="list in introductionList" :key="list.id">
        <div v-if="currentItem == list.name">
          <div v-for="information in list.value" :key="information.id">
            <p class="value">{{ information }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.information-content {
  min-height: 50vh;
}

.horizontal-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: var(--font-main-size);
  padding: 50px 10% 50px 0;
}

.title {
  display: flex;
  align-items: center;
  justify-content: center;
}

.title::before {
  content: "";
  width: 55px;
  height: 1.5px;
  display: inline-block;
  background: #8d8c8c;
  top: 1px;
  position: relative;
  margin-right: 10px;
}

.menu-items {
  display: flex;
}

.list {
  cursor: pointer;
}

.list p {
  font-weight: 500;
}

.list:not(:last-child) {
  margin-right: 35px;
}

.current {
  color: #c9a063;
  border-bottom: 2px solid #c9a063;
}

.informations {
  padding: 0 10% 50px;
}

.information p{
  font-weight: 400;
}

@media (max-width: 950px) {
  .list:not(:last-child) {
    margin-right: 20px;
  }

  .title::before {
    width: 45px;
  }
}

@media (max-width: 500px) {
  .list:not(:last-child) {
    margin-right: 15px;
  }

  .title::before {
    width: 30px;
  }
}
</style>
