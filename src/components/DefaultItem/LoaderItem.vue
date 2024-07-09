<script>
export default {
  components: {},
  setup() {},
};
</script>

<template>
  <div class="bg">
    <div class="wrap">
      <div class="base">
        <div class="flowerpot"></div>
        <div class="blade blade-center"></div>
        <div class="blade blade-left-s"></div>
        <div class="blade blade-right-s"></div>
        <div class="blade blade-left-l"></div>
        <div class="blade blade-right-l"></div>
      </div>
    </div>
    <div class="loader"></div>
  </div>
</template>

<style scoped lang="scss">
$plant-border: #aad670;
$plant-fill: #abe07a;
$flowerpot-color1: #d1bb94;
$flowerpot-color2: #d6c8a5;
$w: 100px;

.bg {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999999;
  background: #fff;
}

.wrap {
  display: flex;
  align-items: center;
  justify-content: center;
}

.base {
  position: relative;
  display: block;
  width: 110px;
}

.flowerpot {
  position: relative;
  width: 100%;
  height: 70px;
  overflow: hidden;
  background-image: linear-gradient(
      50deg,
      white 20px,
      white 21px,
      transparent 20px
    ),
    linear-gradient(
      310deg,
      white 20px,
      $flowerpot-color1 21px,
      $flowerpot-color1 100%
    );

  &:after {
    content: " ";
    position: absolute;
    display: block;
    left: 30px;
    top: -5px;
    width: 60px;
    height: 90px;
    background: linear-gradient(
      285deg,
      $flowerpot-color1 20px,
      $flowerpot-color2 21px,
      $flowerpot-color2 100%
    );
    transform: rotate(50deg);
  }
}

.blade {
  position: absolute;
  bottom: 40px;
  overflow: hidden;
  transform-origin: 50% 100%;
  z-index: -1;

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 0;
    border-top: 0;
    border-radius: 50%;
  }
}

.blade-left-s {
  height: 60px;
  width: 50px;
  left: -15px;
  animation: wave 3s infinite ease-in-out;
  &:before {
    right: 0;
    height: 120px;
    width: 90px;
    border-right: 20px solid $plant-border;
  }

  &:after {
    top: 1px;
    right: 6px;
    height: 120px;
    width: 90px;
    transform: rotateZ(15deg);
    border-right: 18px solid $plant-fill;
  }
}

.blade-left-l {
  height: 100px;
  width: 80px;
  left: -30px;
  animation: wave2 4s infinite ease-in-out;
  &:before {
    right: 2px;
    height: 190px;
    width: 160px;
    border-right: 25px solid $plant-border;
    transform: rotateZ(20deg);
  }

  &:after {
    right: 7px;
    height: 190px;
    width: 160px;
    border-right: 18px solid $plant-fill;
    transform: rotateZ(25deg);
  }
}

.blade-right-s {
  height: 50px;
  width: 80px;
  right: -35px;
  animation: wave2 3.2s -0.5s infinite ease-in-out;
  &:before {
    left: 0;
    height: 190px;
    width: 100px;
    border-left: 22px solid $plant-border;
  }

  &:after {
    left: 15px;
    height: 190px;
    width: 100px;
    border-left: 13px solid $plant-fill;
    transform: rotateZ(-10deg);
  }
}

.blade-right-l {
  height: 75px;
  width: 80px;
  right: -22px;
  animation: wave 3.2s -1s infinite ease-in-out;
  &:before {
    left: 0;
    height: 190px;
    width: 160px;
    border-left: 26px solid $plant-border;
  }

  &:after {
    left: 6px;
    height: 190px;
    width: 160px;
    border-left: 20px solid $plant-fill;
    transform: rotateZ(-10deg);
  }
}

.blade-center {
  height: 120px;
  width: 90px;
  left: -15px;
  animation: wave 3s -1.2s infinite ease-in-out;
  &:before {
    right: 10px;
    height: 240px;
    width: 140px;
    border-right: 28px solid $plant-border;
    transform: rotateZ(15deg);
  }

  &:after {
    right: 15px;
    height: 240px;
    width: 140px;
    border-right: 17px solid $plant-fill;
    transform: rotateZ(15deg);
  }
}

@keyframes wave {
  0% {
    transform: rotateZ(3deg) translateZ(-1px);
  }
  25% {
    transform: rotateZ(-4deg) translateZ(-1px);
  }
  50% {
    transform: rotateZ(2deg) translateZ(-1px);
  }
  75% {
    transform: rotateZ(-6deg) translateZ(-1px);
  }
  100% {
    transform: rotateZ(3deg) translateZ(-1px);
  }
}

@keyframes wave2 {
  0% {
    transform: rotateZ(0deg) translateZ(-1px);
  }
  25% {
    transform: rotateZ(-3deg) translateZ(-1px);
  }
  50% {
    transform: rotateZ(3deg) translateZ(-1px);
  }
  75% {
    transform: rotateZ(-1deg) translateZ(-1px);
  }
  100% {
    transform: rotateZ(0deg) translateZ(-1px);
  }
}

.loader {
  margin-top: 20px;
  --w: 10ch;
  font-weight: bold;
  font-family: monospace;
  font-size: 30px;
  line-height: 1.4em;
  letter-spacing: var(--w);
  width: var(--w);
  overflow: hidden;
  white-space: nowrap;
  color: #0000;
  text-shadow: calc(0 * var(--w)) 0 #000, calc(-1 * var(--w)) 0 #000,
    calc(-2 * var(--w)) 0 #000, calc(-3 * var(--w)) 0 #000,
    calc(-4 * var(--w)) 0 #000, calc(-5 * var(--w)) 0 #000,
    calc(-6 * var(--w)) 0 #000, calc(-7 * var(--w)) 0 #000,
    calc(-8 * var(--w)) 0 #000, calc(-9 * var(--w)) 0 #000;
  animation: l20 2s infinite linear;
}
.loader:before {
  content: "Loading...";
}

@keyframes l20 {
  9.09% {
    text-shadow: calc(0 * var(--w)) -10px #000, calc(-1 * var(--w)) 0 #000,
      calc(-2 * var(--w)) 0 #000, calc(-3 * var(--w)) 0 #000,
      calc(-4 * var(--w)) 0 #000, calc(-5 * var(--w)) 0 #000,
      calc(-6 * var(--w)) 0 #000, calc(-7 * var(--w)) 0 #000,
      calc(-8 * var(--w)) 0 #000, calc(-9 * var(--w)) 0 #000;
  }
  18.18% {
    text-shadow: calc(0 * var(--w)) 0 #000, calc(-1 * var(--w)) -10px #000,
      calc(-2 * var(--w)) 0 #000, calc(-3 * var(--w)) 0 #000,
      calc(-4 * var(--w)) 0 #000, calc(-5 * var(--w)) 0 #000,
      calc(-6 * var(--w)) 0 #000, calc(-7 * var(--w)) 0 #000,
      calc(-8 * var(--w)) 0 #000, calc(-9 * var(--w)) 0 #000;
  }
  27.27% {
    text-shadow: calc(0 * var(--w)) 0 #000, calc(-1 * var(--w)) 0 #000,
      calc(-2 * var(--w)) -10px #000, calc(-3 * var(--w)) 0 #000,
      calc(-4 * var(--w)) 0 #000, calc(-5 * var(--w)) 0 #000,
      calc(-6 * var(--w)) 0 #000, calc(-7 * var(--w)) 0 #000,
      calc(-8 * var(--w)) 0 #000, calc(-9 * var(--w)) 0 #000;
  }
  36.36% {
    text-shadow: calc(0 * var(--w)) 0 #000, calc(-1 * var(--w)) 0 #000,
      calc(-2 * var(--w)) 0 #000, calc(-3 * var(--w)) -10px #000,
      calc(-4 * var(--w)) 0 #000, calc(-5 * var(--w)) 0 #000,
      calc(-6 * var(--w)) 0 #000, calc(-7 * var(--w)) 0 #000,
      calc(-8 * var(--w)) 0 #000, calc(-9 * var(--w)) 0 #000;
  }
  45.45% {
    text-shadow: calc(0 * var(--w)) 0 #000, calc(-1 * var(--w)) 0 #000,
      calc(-2 * var(--w)) 0 #000, calc(-3 * var(--w)) 0 #000,
      calc(-4 * var(--w)) -10px #000, calc(-5 * var(--w)) 0 #000,
      calc(-6 * var(--w)) 0 #000, calc(-7 * var(--w)) 0 #000,
      calc(-8 * var(--w)) 0 #000, calc(-9 * var(--w)) 0 #000;
  }
  54.54% {
    text-shadow: calc(0 * var(--w)) 0 #000, calc(-1 * var(--w)) 0 #000,
      calc(-2 * var(--w)) 0 #000, calc(-3 * var(--w)) 0 #000,
      calc(-4 * var(--w)) 0 #000, calc(-5 * var(--w)) -10px #000,
      calc(-6 * var(--w)) 0 #000, calc(-7 * var(--w)) 0 #000,
      calc(-8 * var(--w)) 0 #000, calc(-9 * var(--w)) 0 #000;
  }
  63.63% {
    text-shadow: calc(0 * var(--w)) 0 #000, calc(-1 * var(--w)) 0 #000,
      calc(-2 * var(--w)) 0 #000, calc(-3 * var(--w)) 0 #000,
      calc(-4 * var(--w)) 0 #000, calc(-5 * var(--w)) 0 #000,
      calc(-6 * var(--w)) -10px #000, calc(-7 * var(--w)) 0 #000,
      calc(-8 * var(--w)) 0 #000, calc(-9 * var(--w)) 0 #000;
  }
  72.72% {
    text-shadow: calc(0 * var(--w)) 0 #000, calc(-1 * var(--w)) 0 #000,
      calc(-2 * var(--w)) 0 #000, calc(-3 * var(--w)) 0 #000,
      calc(-4 * var(--w)) 0 #000, calc(-5 * var(--w)) 0 #000,
      calc(-6 * var(--w)) 0 #000, calc(-7 * var(--w)) -10px #000,
      calc(-8 * var(--w)) 0 #000, calc(-9 * var(--w)) 0 #000;
  }
  81.81% {
    text-shadow: calc(0 * var(--w)) 0 #000, calc(-1 * var(--w)) 0 #000,
      calc(-2 * var(--w)) 0 #000, calc(-3 * var(--w)) 0 #000,
      calc(-4 * var(--w)) 0 #000, calc(-5 * var(--w)) 0 #000,
      calc(-6 * var(--w)) 0 #000, calc(-7 * var(--w)) 0 #000,
      calc(-8 * var(--w)) -10px #000, calc(-9 * var(--w)) 0 #000;
  }
  90.90% {
    text-shadow: calc(0 * var(--w)) 0 #000, calc(-1 * var(--w)) 0 #000,
      calc(-2 * var(--w)) 0 #000, calc(-3 * var(--w)) 0 #000,
      calc(-4 * var(--w)) 0 #000, calc(-5 * var(--w)) 0 #000,
      calc(-6 * var(--w)) 0 #000, calc(-7 * var(--w)) 0 #000,
      calc(-8 * var(--w)) 0 #000, calc(-9 * var(--w)) -10px #000;
  }
}
</style>
