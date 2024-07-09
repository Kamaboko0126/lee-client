<template>
  <div class="content">
    <p>{{ scrollPercentage100 }}</p>
    <div class="bar-content">
      <div
        class="progress-bar"
        :style="{ height: `${15 + scrollPercentage85}%` }"
      ></div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
export default {
  setup() {
    const scrollPercentage85 = ref(0);
    const scrollPercentage100 = ref(0);
    const updateScrollPercentage = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      scrollPercentage85.value = (scrollTop / windowHeight) * 85;
      scrollPercentage100.value = Math.floor((scrollTop / windowHeight) * 100);
    };

    onMounted(() => {
      window.addEventListener("scroll", updateScrollPercentage);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", updateScrollPercentage);
    });

    return {
      scrollPercentage85,
      scrollPercentage100,
    };
  },
};
</script>

<style scoped>
.content {
  width: var(--leftitem-width);
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  padding: 5vh 0;
  box-shadow: 2px 0px 1px #efeeed;
  background: #fff;
  z-index: 9999;
}

.content p {
  color: #232323;
  font-size: var(--font-small-size);
  margin-bottom: 10px;
}

.bar-content {
  width: 2px;
  height: 25%;
  background: #e3e3e3;
}

.progress-bar {
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #232323;
}

@media (max-width: 950px) {
  .content p {
    display: none;
  }
  .bar-content {
    display: none;
  }
}
</style>
