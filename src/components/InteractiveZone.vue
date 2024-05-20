<script>
import { onMounted, inject, reactive } from "vue";
import { useClipboard } from "@vueuse/core";

export default {
  setup() {
    const isMobile = inject("isMobile");
    const isLoading = inject("isLoading");
    const showMenu = inject("showMenu");

    onMounted(() => {
      isLoading.value = false;
      showMenu.value = true;
    });

    const copied = reactive({});
    const { text, copy: copyToClipboard, isSupported } = useClipboard();

    const copy = (value) => {
      copyToClipboard(value);
      copied[value] = true;
      setTimeout(() => {
        copied[value] = false;
      }, 1500);
    };

    return {
      text,
      copy,
      copied,
      isSupported,
      isMobile,
    };
  },
};
</script>

<template>
  <div class="header">
    <div class="title">
      <div>
        <h1>FLOATING FANTASY</h1>
        <h1>浮 生 幻 景</h1>
      </div>
    </div>
  </div>

  <h2>Contact us!</h2>
  <div class="content">
    <div class="letter-image" :class="{ mobile: isMobile }">
      <div class="animated-mail">
        <div class="back-fold"></div>
        <div class="letter">
          <div class="letter-border"></div>
          <div class="letter-text" @click="copy('aaa123@gmail.com')">
            <p>
              <span v-if="!copied['aaa123@gmail.com']"
                >Email: aaa123@gmail.com</span
              >
              <span v-else>Email: Copied!</span>
            </p>
          </div>
          <div class="letter-text" @click="copy('0912345678')">
            <p>
              <span v-if="!copied['0912345678']">Phone: 09-1234-5678</span>
              <span v-else>Phone: Copied!</span>
            </p>
          </div>
          <div class="letter-text"><p>李貞慧</p></div>
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
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
  display: flex;
  padding: 10vh 0 5vh 0;
  flex-direction: column;
  background: var(--main-color);
  overflow-x: hidden;
}

.title {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: start;
  color: #fff;
}

.title div h1 {
  font-family: "Playfair Display" !important;
  font-weight: 500;
  letter-spacing: 0;
  line-height: normal;
}

.title div h1:last-child {
  color: #c9a063;
  font-weight: 600;
  letter-spacing: 5px;
}

.title::before {
  content: "";
  position: relative;
  display: inline-block;
  width: 55px;
  height: 2px;
  background: #fff;
  margin-right: 10px;
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

h2 {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 0 0 0;
}

.content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  padding-bottom: 60px;
}

.letter-image {
  width: calc(200px * var(--letter-scale));
  height: calc(200px * var(--letter-scale));
}

.animated-mail {
  position: absolute;
  height: calc(150px * var(--letter-scale));
  width: calc(200px * var(--letter-scale));
  transition: 0.4s;

  .body {
    position: absolute;
    bottom: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 calc(100px * var(--letter-scale))
      calc(200px * var(--letter-scale));
    border-color: transparent transparent #e95f55 transparent;
    z-index: 2;
  }

  .top-fold {
    position: absolute;
    top: calc(50px * var(--letter-scale));
    width: 0;
    height: 0;
    border-style: solid;
    border-width: calc(50px * var(--letter-scale))
      calc(100px * var(--letter-scale)) 0 calc(100px * var(--letter-scale));
    transform-origin: 50% 0%;
    transition: transform 0.4s 0.4s, z-index 0.2s 0.4s;
    border-color: #cf4a43 transparent transparent transparent;
    z-index: 2;
  }

  .back-fold {
    position: absolute;
    bottom: 0;
    width: calc(200px * var(--letter-scale));
    height: calc(100px * var(--letter-scale));
    background: #cf4a43;
    z-index: 0;
  }

  .left-fold {
    position: absolute;
    bottom: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: calc(50px * var(--letter-scale)) 0
      calc(50px * var(--letter-scale)) calc(100px * var(--letter-scale));
    border-color: transparent transparent transparent #e15349;
    z-index: 2;
  }

  .letter {
    left: calc(20px * var(--letter-scale));
    bottom: 0px;
    position: absolute;
    width: calc(160px * var(--letter-scale));
    height: calc(60px * var(--letter-scale));
    background: white;
    z-index: 1;
    overflow: hidden;
    transition: 0.4s 0.2s;

    .letter-border {
      height: calc(10px * var(--letter-scale));
      width: 100%;
      background: repeating-linear-gradient(
        -45deg,
        #cb5a5e,
        #cb5a5e 8px,
        transparent 8px,
        transparent 18px
      );
    }

    .letter-text {
      margin-top: calc(10px * var(--letter-scale));
      margin-left: calc(5px * var(--letter-scale));
      height: calc(10px * var(--letter-scale));
      cursor: pointer;
      // width: 40%;
    }

    .letter-text span,
    .letter-text p {
      color: #cb5a5e;
      font-weight: 500;
    }

    .letter-stamp {
      margin-top: calc(10px * var(--letter-scale));
      margin-left: calc(120px * var(--letter-scale));
      border-radius: 100%;
      height: calc(30px * var(--letter-scale));
      width: calc(30px * var(--letter-scale));
      background: #cb5a5e;
      opacity: 0.3;
    }
  }
}

.shadow {
  position: relative;
  top: calc(200px * var(--letter-scale));
  left: 50%;
  width: calc(220px * var(--letter-scale));
  height: calc(30px * var(--letter-scale));
  transition: 0.4s;
  transform: translateX(-50%);

  border-radius: 100%;
  background: radial-gradient(
    rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0)
  );
}

.letter-image:hover, .letter-image.mobile {
  .animated-mail {
    transform: translateY(calc(50px * var(--letter-scale)));
  }

  .animated-mail .top-fold {
    transition: transform 0.4s, z-index 0.2s;
    transform: rotateX(180deg);
    z-index: 0;
  }

  .animated-mail .letter {
    height: calc(180px * var(--letter-scale));
  }

  .shadow {
    width: calc(150px * var(--letter-scale));
  }
}
</style>
