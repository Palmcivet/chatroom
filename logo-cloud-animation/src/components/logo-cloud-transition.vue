<template>
  <div ref="logosRef" class="logo-cloud">
    <div class="logo-cloud--top">
      <img
        v-for="(logo, key) in renderListTop"
        :key="key"
        :class="['logo', { 'is-active': key === currentLogo }]"
        :src="logo.src"
      />
    </div>
    <div class="logo-cloud--center">
      <img
        v-for="(logo, key) in renderListCenter"
        :key="key"
        :class="['logo', { 'is-active': key === currentLogo }]"
        :src="logo.src"
      />
    </div>
    <div class="logo-cloud--bottom">
      <img
        v-for="(logo, key) in renderListBottom"
        :key="key"
        :class="['logo', { 'is-active': key === currentLogo }]"
        :src="logo.src"
      />
    </div>
  </div>
</template>

<script>
const LOGO_LIST = [
  { src: require("..//assets/baiguoyuan.png") },
  { src: require("..//assets/mindray.png") },
  { src: require("..//assets/dianxiaomi.png") },
  { src: require("..//assets/fankewang.png") },
  { src: require("..//assets/licaitong.png") },
  { src: require("..//assets/qq.png") },
  { src: require("..//assets/quanminkge.png") },
  { src: require("..//assets/tengyun.png") },
  { src: require("..//assets/tianyujiaoyu.png") },
  { src: require("..//assets/wechat.png") },
  { src: require("..//assets/xiaoetong.png") },
  { src: require("..//assets/yonghuichaoshi.png") },
  { src: require("..//assets/zhubajie.png") },
  { src: require("..//assets/tengxunlexiang.png") },
  { src: require("..//assets/tengxuntuxiaochao.png") },
  { src: require("..//assets/tengxunwenjuan.png") },
  { src: require("..//assets/tengxunwangka.png") },
  { src: require("..//assets/tengxunyouxi.png") },
  { src: require("..//assets/zhengongfu.png") },
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
      currentLogo: 0,

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
      const restLabelList = labelList.slice(this.centerRowCount);
      // [4, 0, 2, 1, 3]
      const seqLabelList = [...this.shuffleArray(renderLabelList)];

      let ptr = 0;

      const randomLogo = () => {
        this.currentLogo = ptr;
        const targetIndex = seqLabelList[ptr];
        ptr = (ptr + 1) % this.centerRowCount;

        restLabelList.push(renderLabelList[targetIndex]);
        renderLabelList[targetIndex] = restLabelList.shift();
      };

      const renderLogo = () => {
        this.renderListTop = [];

        renderLabelList.forEach((label) => {
          this.renderListTop.push(LOGO_LIST_TOP[label]);
        });
      };

      const RENDER_DELTA = 3000;
      let startTime = null;
      let handler = null;

      const animationCallback = (time) => {
        if (!startTime) {
          startTime = time;
        }

        if (time - startTime > RENDER_DELTA) {
          startTime = time;

          randomLogo();
          renderLogo();
        }

        handler = window.requestAnimationFrame(animationCallback);
      };

      handler = window.requestAnimationFrame(animationCallback);

      return {
        stopAnimation: () => window.cancelAnimationFrame(handler),
      };
    },

    onResize() {
      const { width } = window.getComputedStyle(document.querySelector(".logo"));
      const cardWidth = Number.parseInt(width, 10) + LOGO_GAP;
      const { clientWidth } = this.$refs.logosRef;
      this.centerRowCount = Math.floor(clientWidth / cardWidth);
    },
  },
};
</script>

<style scoped>
@keyframes animation-breath {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

.cloud-logo {
  opacity: 1;
  transition: opacity 1.49s linear;
  width: 240px;
  height: 120px;
}

.cloud-logo:nth-child(3n) {
  animation: 5s animation-breath 2s infinite;
}

.cloud-logo:nth-child(3n + 1) {
  animation: 5s animation-breath 3s infinite;
}

.cloud-logo:nth-child(3n + 2) {
  animation: 5s animation-breath 4s infinite;
}

.cloud-logo.is-active {
  opacity: 0;
  transition: opacity 1.49s linear;
}

logo-cloud--top,
logo-cloud--center,
logo-cloud--bottom {
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
}
</style>
