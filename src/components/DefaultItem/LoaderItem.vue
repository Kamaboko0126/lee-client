<template>
  <section>
    <div class="section-content">
      <div class="loading">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
section {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999999;
}
.section-content {
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}


.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.dot {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #3498db;
  margin: 0 5px;
  animation: bounce 1.5s infinite ease-in-out;
}

.dot:nth-child(2) {
  animation-delay: .2s;
}

.dot:nth-child(3) {
  animation-delay: .4s;
}

@keyframes bounce {
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1.0);
  }
}

</style>