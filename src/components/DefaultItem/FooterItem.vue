
<script>
import { onMounted, onUnmounted, inject } from "vue";

export default {
  setup() {
    const isMobile = inject("isMobile");

    const checkDeviceType = () => {
      isMobile.value =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          window.navigator.userAgent
        );
    };

    onMounted(() => {
      checkDeviceType();
    });

    window.addEventListener("resize", checkDeviceType);

    onUnmounted(() => {
      window.removeEventListener("resize", checkDeviceType);
    });

    return {
      isMobile,
    };
  },
};
</script>

<template>
  <div class="body">
    <p>{{ isMobile }}</p>
  </div>
</template>

<style scoped>
  .body{
    background: var(--main-color);
    width: 100%;
    padding: var(--logo-padding-top) 0;
  }

  p{
    line-height: normal;
    color: #fff;
    margin: 0;
  }
</style>