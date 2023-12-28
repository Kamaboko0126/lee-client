<template>
  <section>
    <div class="section-content">
      <div class="menu-items">
        <div
          class="menu-item"
          v-for="menuItem in menuItems"
          :key="menuItem"
          :class="{ 'selected-item': isSelected(menuItem) }"
          @click="selectItem(menuItem)"
        >
          {{ menuItem }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const item = ref("著作");
    const menuItems = ref([
      "著作",
      "展覽/策展",
      "演講/評審",
      "學術/評論",
      "得獎及榮譽",
      "研究計畫",
    ]);

    const selectItem = (selectedItem) => {
      item.value = selectedItem;
    };

    const isSelected = (menuItem) => {
      // 新增這個函數
      return item.value === menuItem;
    };

    return {
      item,
      selectItem,
      menuItems,
      isSelected,
    };
  },
};
</script>

<style scoped>
.section-content {
  /* background: #f5f5f5; */
}

.menu-items {
  display: flex;
  justify-items: center;
  align-items: center;
  padding: 50px 30px;
}

.menu-item {
  font-size: var(--font-small-size);
  font-weight: 600;
  cursor: pointer;
  min-width: 50px;
  text-align-last: justify;
  color: #c79969;
}

.menu-item:not(:last-child) {
  margin-right: 30px;
}

.menu-item::after {
  content: "";
  display: block;
  width: 15px;
  height: 2px;
  background: #898989;
  transition: width 0.3s;
}

.menu-item:hover::after {
  width: 100%;
}

.selected-item {
  color: #291400;
}
</style>
