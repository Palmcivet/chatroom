<template>
  <div ref="logosRef" class="logo-cloud">
    <div ref="topRef" class="logo-cloud--top">
      <img
        v-for="(logo, key) in renderListTop"
        :key="key"
        class="cloud-logo"
        :src="logo.src"
      />
    </div>
    <div ref="centerRef" class="logo-cloud--center">
      <img
        v-for="(logo, key) in renderListCenter"
        :key="key"
        class="cloud-logo"
        :src="logo.src"
      />
    </div>
    <div ref="bottomRef" class="logo-cloud--bottom">
      <img
        v-for="(logo, key) in renderListBottom"
        :key="key"
        class="cloud-logo"
        :src="logo.src"
      />
    </div>
  </div>
</template>

<script>
const LOGO_LIST = [
  { src: require("../assets/baiguoyuan.png") },
  { src: require("../assets/mindray.png") },
  { src: require("../assets/dianxiaomi.png") },
  { src: require("../assets/fankewang.png") },
  { src: require("../assets/licaitong.png") },
  { src: require("../assets/qq.png") },
  { src: require("../assets/quanminkge.png") },
  { src: require("../assets/tengyun.png") },
  { src: require("../assets/tianyujiaoyu.png") },
  { src: require("../assets/wechat.png") },
  { src: require("../assets/xiaoetong.png") },
  { src: require("../assets/yonghuichaoshi.png") },
  { src: require("../assets/zhubajie.png") },
  { src: require("../assets/tengxunlexiang.png") },
  { src: require("../assets/tengxuntuxiaochao.png") },
  { src: require("../assets/tengxunwenjuan.png") },
  { src: require("../assets/tengxunwangka.png") },
  { src: require("../assets/tengxunyouxi.png") },
  { src: require("../assets/zhengongfu.png") },
];

const LOGO_GAP = 24;

// 分 3 组，每行分到多少个：6
const rowCount = Math.floor(LOGO_LIST.length / 3);
const LOGO_LIST_TOP = LOGO_LIST.slice(0, rowCount);
const LOGO_LIST_CENTER = LOGO_LIST.slice(rowCount, 2 * rowCount);
const LOGO_LIST_BOTTOM = LOGO_LIST.slice(2 * rowCount);

export default {
  name: "LogoCloud",

  data() {
    return {
      centerRowCount: 0,
      renderListTop: LOGO_LIST_TOP,
      renderListCenter: LOGO_LIST_CENTER,
      renderListBottom: LOGO_LIST_BOTTOM,
    };
  },

  mounted() {
    this.onResize();

    window.addEventListener("resize", this.onResize);
    const { stopAnimation } = this.startAnimation();

    this.$once("hook:beforeDestroy", () => {
      window.removeEventListener("resize", this.onResize);
      stopAnimation();
    });
  },

  methods: {
    shuffleArray(arr) {
      return arr.sort(() => Math.random() - 0.5);
    },

    startAnimation() {
      // [0, 1, 2, 3, 4, 5]
      const labelList = LOGO_LIST_TOP.map((_, k) => k);
      // [0, 1, 2, 3, 4]
      const renderLabelList = labelList.slice(0, this.centerRowCount);
      // [5]
      const unRenderLabelList = labelList.slice(this.centerRowCount);
      // [4, 0, 2, 1, 3]
      const sequenceLabelList = this.shuffleArray(renderLabelList).slice();

      let ptr = 0;

      const { topRef, centerRef, bottomRef } = this.$refs;

      const randomLogo = () => {
        const targetIndex = sequenceLabelList[ptr];
        ptr = (ptr + 1) % this.centerRowCount;
        unRenderLabelList.push(renderLabelList[targetIndex]);
        renderLabelList[targetIndex] = unRenderLabelList.shift();
      };

      const changeLogo = () => {
        this.renderListTop = renderLabelList.map((i) => LOGO_LIST_TOP[i]);
      };

      const addAnimation = () => {
        topRef.children.item(ptr).classList.add("is-active");
      };

      const removeAnimation = () => {
        topRef.children.item(ptr).classList.remove("is-active");
      };

      const ANIMATION_DELAY = 2000; // CSS 动画
      const ACTIVE_DELTA = 500;
      const CHANGE_DELTA = ACTIVE_DELTA + ANIMATION_DELAY / 2;
      const REMOVE_DELTA = ACTIVE_DELTA + ANIMATION_DELAY;
      const CALLBACK_DELTA = ACTIVE_DELTA + ANIMATION_DELAY + ACTIVE_DELTA;
      let startTime = null;
      let handler = null;

      const animationCallback = (time) => {
        if (!startTime) {
          startTime = time;
        }

        if (time - startTime > CALLBACK_DELTA) {
          console.log(new Date().getTime() / 1000);
          randomLogo();
          addAnimation();
          setTimeout(() => changeLogo(), CHANGE_DELTA);
          setTimeout(() => removeAnimation(), REMOVE_DELTA);
          startTime = time;
        }

        handler = window.requestAnimationFrame(animationCallback);
      };

      handler = window.requestAnimationFrame(animationCallback);

      return {
        stopAnimation: () => window.cancelAnimationFrame(handler),
      };
    },

    onResize() {
      const { width } = window.getComputedStyle(document.querySelector(".cloud-logo"));
      const cardWidth = Number.parseInt(width, 10) + LOGO_GAP;
      const { clientWidth } = this.$refs.logosRef;
      this.centerRowCount = Math.floor(clientWidth / cardWidth);
      this.renderListTop = LOGO_LIST_TOP.slice(0, this.centerRowCount);
    },
  },
};
</script>

<style scoped>
@keyframes animation-breath {
  0% {
    opacity: 1;
    transform: scale(1);
  }

  50% {
    opacity: 0;
    transform: scale(0);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.logo-cloud {
  width: 240px;
  height: 120px;
}

.logo-cloud.is-active {
  animation: animation-breath 2s infinite;
}

.logo-cloud--top,
.logo-cloud--center,
.logo-cloud--bottom {
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
}
</style>
