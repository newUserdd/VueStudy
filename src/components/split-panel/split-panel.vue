<template>
  <div class="split-panel-wrapper" ref="outer">
    <div class="panel panel-left" :style="{width:leftOffsetPercent}">
      <slot name="left"></slot>
    </div>
    <div
      class="panel-trigger-con"
      @mousedown="handleMousedown"
      :style="{left:triggerLeft,width:triggerWidth+'px'}"
    ></div>
    <div class="panel panel-right" :style="{left: leftOffsetPercent}">
      <!-- <button @click="changeLeft">change</button> -->
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "SplitPanel",
  props: {
    value: {
      type: Number,
      default: 0.5
    },
    triggerWidth: {
      type: Number,
      default: 16
    },
    min: {
      type: Number,
      default: 0.1
    },
    max: {
      type: Number,
      default: 0.9
    }
  },
  data() {
    return {
      // value: 0.4,
      canMove: false,
      initOffset: 0
    };
  },
  computed: {
    leftOffsetPercent() {
      return `${this.value * 100}%`;
    },
    triggerLeft() {
      // console.log(`calc(${this.value * 100}%-${this.triggerWidth / 2}px)`);
      return `calc(${this.value * 100}% - ${this.triggerWidth / 2}px)`;
    }
  },
  methods: {
    handleMousemove(e) {
      if (!this.canMove) return;
      const outerRect = this.$refs.outer.getBoundingClientRect();
      let offsetPercent =
        (e.pageX - outerRect.left - this.initOffset + this.triggerWidth / 2) /
        outerRect.width;
      if (offsetPercent < this.min) {
        offsetPercent = this.min;
      }
      if (offsetPercent > this.max) {
        offsetPercent = this.max;
      }
      this.$emit("update:value", offsetPercent);
      // this.$emit('input', offsetPercent)
      // this.value = offsetPercent;
    },
    handleMouseup() {
      this.canMove = false;
    },
    handleMousedown(e) {
      // this.handleMousemove(e)
      document.addEventListener("mousemove", this.handleMousemove);
      document.addEventListener("mouseup", this.handleMouseup);
      // 时间点： 34.36'
      this.initOffset = e.pageX - event.srcElement.getBoundingClientRect().left;
      // hW:8
      // offset: 2
      this.canMove = true;
    }
  }
};
</script>

<style lang="less">
.split-panel-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  .panel {
    position: absolute;
    float: left;
    height: 100%;
    top: 0;
    bottom: 0;
    &-left {
      // width: 30%;
      background: pink;
    }
    &-right {
      // left: 30%;
      right: 0;
      background: lightblue;
    }
    &-trigger-con {
      position: absolute;
      top: 0;
      // width: 8px;
      height: 100%;
      background: red;
      z-index: 10;
      user-select: none;
      cursor: col-resize;
    }
  }
}
</style>
