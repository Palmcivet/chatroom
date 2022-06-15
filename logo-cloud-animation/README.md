# logo-cloud-animation

## 实现步骤

1. 切换 `is-active` 后，更改 `opacity`，激活 transition 动画
2. 替换 class
3. 分离切换的阶段

## 优化步骤

1. setTimeout => requestAnimationFrame 解决不同步问题
2. 纯 DOM 操作，提高性能
3. 随机性方案
