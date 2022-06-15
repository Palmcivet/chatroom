<template>
  <div ref="logosRef" class="logo-cloud">
    <div ref="topRef" class="logo-cloud--top">
      <img v-for="logo in renderListTop" :key="logo" class="logo" :src="logo" />
    </div>
    <div ref="centerRef" class="logo-cloud--center">
      <img v-for="logo in renderListCenter" :key="logo" class="logo" :src="logo" />
    </div>
    <div ref="bottomRef" class="logo-cloud--bottom">
      <img v-for="logo in renderListBottom" :key="logo" class="logo" :src="logo" />
    </div>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import { shuffle } from "../utils";

const LOGO_WIDTH = 240; // logo 宽度
const LOGO_LIST = [
  new URL("../assets/baiguoyuan.png", import.meta.url).href,
  new URL("../assets/mindray.png", import.meta.url).href,
  new URL("../assets/dianxiaomi.png", import.meta.url).href,
  new URL("../assets/fankewang.png", import.meta.url).href,
  new URL("../assets/licaitong.png", import.meta.url).href,
  new URL("../assets/qq.png", import.meta.url).href,
  new URL("../assets/quanminkge.png", import.meta.url).href,
  new URL("../assets/tengyun.png", import.meta.url).href,
  new URL("../assets/tianyujiaoyu.png", import.meta.url).href,
  new URL("../assets/wechat.png", import.meta.url).href,
  new URL("../assets/xiaoetong.png", import.meta.url).href,
  new URL("../assets/yonghuichaoshi.png", import.meta.url).href,
  new URL("../assets/zhubajie.png", import.meta.url).href,
  new URL("../assets/tengxunlexiang.png", import.meta.url).href,
  new URL("../assets/tengxuntuxiaochao.png", import.meta.url).href,
  new URL("../assets/tengxunwenjuan.png", import.meta.url).href,
  new URL("../assets/tengxunwangka.png", import.meta.url).href,
  new URL("../assets/tengxunyouxi.png", import.meta.url).href,
  new URL("../assets/zhengongfu.png", import.meta.url).href,
];

// 分 3 行，每行分到多少个
const rowCount = Math.floor(LOGO_LIST.length / 3);
const LOGO_LIST_TOP = shuffle(LOGO_LIST.slice(0, rowCount));
const LOGO_LIST_CENTER = shuffle(LOGO_LIST.slice(rowCount, 2 * rowCount));
const LOGO_LIST_BOTTOM = shuffle(LOGO_LIST.slice(2 * rowCount));

const setSerialDealer = (arr, count) => {
  // [0, 1, 2, 3, 4, 5]
  const serialList = arr.map((_, k) => k);
  // [0, 1, 2, 3, 4]
  const renderLabelList = serialList.slice(0, count);
  // [5]
  const unRenderLabelList = serialList.slice(count);
  // [4, 0, 2, 1, 3]
  const sequenceLabelList = shuffle(renderLabelList);

  return {
    // 当前序列下标
    seqIndex: 0,
    // 需要变化的 DOM 元素的下标
    get elementIndex() {
      return sequenceLabelList[this.seqIndex];
    },
    // 待渲染元素的下标
    get labelIndex() {
      return unRenderLabelList[0];
    },
    deal() {
      const oldLabelIndex = renderLabelList[this.elementIndex];
      unRenderLabelList.push(oldLabelIndex);
      renderLabelList[this.elementIndex] = this.labelIndex;
      unRenderLabelList.shift();
      this.seqIndex = (this.seqIndex + 1) % count;
    },
  };
};

const renderListTop = ref(LOGO_LIST_TOP);
const renderListCenter = ref(LOGO_LIST_CENTER);
const renderListBottom = ref(LOGO_LIST_BOTTOM);

const topRef = ref(null);
const centerRef = ref(null);
const bottomRef = ref(null);
const logosRef = ref(null);

let handler = null;

function startAnimation(count) {
  const ts = setSerialDealer(LOGO_LIST_TOP, count - 1);
  const cs = setSerialDealer(LOGO_LIST_CENTER, count);
  const bs = setSerialDealer(LOGO_LIST_BOTTOM, count - 1);

  const ANIMATION_DELAY = 2000; // CSS 动画
  const ACTIVE_DELTA = 200;
  const CHANGE_DELTA = ANIMATION_DELAY / 2;
  const REMOVE_DELTA = ANIMATION_DELAY;
  const CALLBACK_DELTA = ANIMATION_DELAY + ACTIVE_DELTA;

  let startTime = null;

  const animationCallback = (time) => {
    if (!startTime) {
      startTime = time;
    }

    if (time - startTime > CALLBACK_DELTA) {
      topRef.value.children.item(ts.elementIndex).classList.add("is-active");

      setTimeout(() => {
        setTimeout(() => {
          topRef.value.children.item(ts.elementIndex).src = LOGO_LIST_TOP[ts.labelIndex];
        }, CHANGE_DELTA);

        setTimeout(() => {
          topRef.value.children.item(ts.elementIndex).classList.remove("is-active");
          ts.deal();
        }, REMOVE_DELTA);
      });

      setTimeout(() => {
        centerRef.value.children.item(cs.elementIndex).classList.add("is-active");

        setTimeout(() => {
          centerRef.value.children.item(cs.elementIndex).src =
            LOGO_LIST_CENTER[cs.labelIndex];
        }, CHANGE_DELTA);

        setTimeout(() => {
          centerRef.value.children.item(cs.elementIndex).classList.remove("is-active");
          cs.deal();
        }, REMOVE_DELTA);
      }, 500);

      setTimeout(() => {
        bottomRef.value.children.item(bs.elementIndex).classList.add("is-active");

        setTimeout(() => {
          bottomRef.value.children.item(bs.elementIndex).src =
            LOGO_LIST_BOTTOM[bs.labelIndex];
        }, CHANGE_DELTA);

        setTimeout(() => {
          bottomRef.value.children.item(bs.elementIndex).classList.remove("is-active");
          bs.deal();
        }, REMOVE_DELTA);
      }, 1000);

      startTime = time;
    }

    handler = window.requestAnimationFrame(animationCallback);
  };

  handler = window.requestAnimationFrame(animationCallback);
}

function stopAnimation() {
  window.cancelAnimationFrame(handler);
}

function handleResize() {
  const { clientWidth } = logosRef.value;
  const centerRowCount = Math.floor(clientWidth / LOGO_WIDTH);
  renderListTop.value = LOGO_LIST_TOP.slice(0, centerRowCount - 1);
  renderListCenter.value = LOGO_LIST_CENTER.slice(0, centerRowCount);
  renderListBottom.value = LOGO_LIST_BOTTOM.slice(0, centerRowCount - 1);

  stopAnimation();
  startAnimation(centerRowCount);
}

onMounted(() => {
  handleResize();
  window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
  stopAnimation();
});
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
  width: 100%;
}

.logo-cloud--top,
.logo-cloud--center,
.logo-cloud--bottom {
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  flex: none;
}

.logo {
  width: 240px;
  height: 120px;
}

.logo.is-active {
  animation: animation-breath 2s infinite;
}
</style>
