<template>
  <div class="body">
    <div class="title">
      <div>
        <span>FLOATING FANTASY</span>
        <p>浮 生 幻 景</p>
      </div>
    </div>
    <div class="wrod">Contact us!</div>

    <div class="content">
      <div class="letter-image">
        <div class="animated-mail">
          <div class="back-fold"></div>
          <div class="letter">
            <div class="letter-border"></div>
            <div class="letter-title"></div>
            <div class="letter-context"></div>
            <div class="letter-stamp">
              <div class="letter-stamp-inner"></div>
            </div>
          </div>
          <div class="top-fold"></div>
          <div class="body"></div>
          <div class="left-fold"></div>
        </div>
        <div class="shadow"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, inject } from "vue";
export default {
  setup() {
    onMounted(() => {
      const isLoading = inject("isLoading");
      const showMenu = inject("showMenu");

      isLoading.value = false;
      showMenu.value = true;
    });

    return {};
  },
};
</script>

<style lang="scss" scoped>
.body {
  width: 100%;
}

.title {
  font-size: var(--font-second-size);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: start;
  color: #fff;
  background: var(--background-color);
  padding: 10vh 0 5vh 0;
}

.title::before {
  content: "";
  position: relative;
  display: inline-block;
  width: 55px;
  height: 2px;
  background: #fff;
}

@media (max-width: 950px) {
  .title::before {
    width: 45px;
  }
}

@media (max-width: 500px) {
  .title::before {
    width: 30px;
  }
}

.wrod {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 0 100px;
}

@media (min-width: 900px) {
  .content {
    padding: 18vh 0 0 0;
    transform: scale(2);
  }
}

@media (min-width: 600px) {
  .content {
    padding: 13vh 0 0 0;
    transform: scale(1.5);
  }
}

.letter-image {
  position: relative;
  top: 50%;
  left: 50%;
  width: 200px;
  height: 200px;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  cursor: pointer;
}

.animated-mail {
  position: absolute;
  height: 150px;
  width: 200px;
  -webkit-transition: 0.4s;
  -moz-transition: 0.4s;
  transition: 0.4s;

  .body {
    position: absolute;
    bottom: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 100px 200px;
    border-color: transparent transparent #e95f55 transparent;
    z-index: 2;
  }

  .top-fold {
    position: absolute;
    top: 50px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 50px 100px 0 100px;
    -webkit-transform-origin: 50% 0%;
    -webkit-transition: transform 0.4s 0.4s, z-index 0.2s 0.4s;
    -moz-transform-origin: 50% 0%;
    -moz-transition: transform 0.4s 0.4s, z-index 0.2s 0.4s;
    transform-origin: 50% 0%;
    transition: transform 0.4s 0.4s, z-index 0.2s 0.4s;
    border-color: #cf4a43 transparent transparent transparent;
    z-index: 2;
  }

  .back-fold {
    position: absolute;
    bottom: 0;
    width: 200px;
    height: 100px;
    background: #cf4a43;
    z-index: 0;
  }

  .left-fold {
    position: absolute;
    bottom: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 50px 0 50px 100px;
    border-color: transparent transparent transparent #e15349;
    z-index: 2;
  }

  .letter {
    left: 20px;
    bottom: 0px;
    position: absolute;
    width: 160px;
    height: 60px;
    background: white;
    z-index: 1;
    overflow: hidden;
    -webkit-transition: 0.4s 0.2s;
    -moz-transition: 0.4s 0.2s;
    transition: 0.4s 0.2s;

    .letter-border {
      height: 10px;
      width: 100%;
      background: repeating-linear-gradient(
        -45deg,
        #cb5a5e,
        #cb5a5e 8px,
        transparent 8px,
        transparent 18px
      );
    }

    .letter-title {
      margin-top: 10px;
      margin-left: 5px;
      height: 10px;
      width: 40%;
      background: #cb5a5e;
    }
    .letter-context {
      margin-top: 10px;
      margin-left: 5px;
      height: 10px;
      width: 20%;
      background: #cb5a5e;
    }

    .letter-stamp {
      margin-top: 30px;
      margin-left: 120px;
      border-radius: 100%;
      height: 30px;
      width: 30px;
      background: #cb5a5e;
      opacity: 0.3;
    }
  }
}

.shadow {
  position: absolute;
  top: 200px;
  left: 50%;
  width: 400px;
  height: 30px;
  transition: 0.4s;
  transform: translateX(-50%);
  -webkit-transition: 0.4s;
  -webkit-transform: translateX(-50%);
  -moz-transition: 0.4s;
  -moz-transform: translateX(-50%);

  border-radius: 100%;
  background: radial-gradient(
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0)
  );
}

.letter-image:hover {
  .animated-mail {
    transform: translateY(50px);
    -webkit-transform: translateY(50px);
    -moz-transform: translateY(50px);
  }

  .animated-mail .top-fold {
    transition: transform 0.4s, z-index 0.2s;
    transform: rotateX(180deg);
    -webkit-transition: transform 0.4s, z-index 0.2s;
    -webkit-transform: rotateX(180deg);
    -moz-transition: transform 0.4s, z-index 0.2s;
    -moz-transform: rotateX(180deg);
    z-index: 0;
  }

  .animated-mail .letter {
    height: 180px;
  }

  .shadow {
    width: 250px;
  }
}
</style>
