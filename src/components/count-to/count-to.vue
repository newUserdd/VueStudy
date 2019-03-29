<template>
  <div>
    <slot name="left"></slot>
    <span ref="number" :class="countClass" :id="eleId"></span>
    <slot name="right"></slot>
  </div>
</template>

<script>
import { CountUp } from "countup.js";
// import { setTimeout } from "timers";
// import './count-to.less' // 样式引用
export default {
  name: "CountTo",
  computed: {
    eleId() {
      return `count_up_${this._uid}`;
    },
    countClass() {
      return ["count-to-number", this.className];
    }
  },
  props: {
    className: {
      type: String,
      default: ""
    },
    delay: {
      type: Number,
      default: 1
    },
    startVal: {
      type: Number,
      default: 0
    },
    endVal: {
      type: Number,
      required: true
    },
    // 保留几位小数
    decimals: {
      type: Number,
      default: 0
    },
    // 动画时长
    duration: {
      type: Number,
      default: 1
    },
    useEasing: {
      type: Boolean,
      default: true
    },
    useGrouping: {
      type: Boolean,
      default: true
    },
    separator: {
      type: String,
      default: ","
    },
    decimal: {
      type: String,
      default: "."
    }
  },
  data() {
    return {
      counter: {}
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.counter = new CountUp(this.eleId, this.endVal, {
        startVal: this.startVal,
        decimalPlaces: this.decimals,
        duration: this.duration,
        useEasing: this.useEasing,
        useGrouping: this.useGrouping,
        separator: this.separator,
        decimal: this.decimal
      });
      setTimeout(() => {
        this.counter.start();
        this.emitEndEvent()
      }, this.delay);
    });
  },
  watch: {
    endVal(newVal, oldVal) {
      this.counter.update(newVal);
      this.emitEndEvent();
    }
  },
  methods: {
    emitEndEvent() {
      setTimeout(() => {
        this.$emit("on-animation-end", Number(this.getCount()));
      }, this.duration * 1000);
    },
    getCount() {
      // console.log(this.$refs.number.innerHTML);
      return this.$refs.number.innerHTML;
    }
    // updateNum(num) {
    //   // this.endVal = num
    //   this.counter.update(num);
    // }
  }
};
</script>

<style lang="less">
@import './count-to.less';
</style>
