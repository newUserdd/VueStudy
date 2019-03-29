<template>
  <div>
    <h1>count-to</h1>
    <CountTo ref="countTo" :end-val="endVal" @on-animation-end="handleEnd">
      <span slot="left">统计：</span>
      <span slot="right">秒</span>
    </CountTo>
    <button @click="getCount">获取当前值</button>
    <button @click="updateNum">更新值</button>
  </div>
</template>

<script>
import CountTo from "_c/count-to";
export default {
  name: "count_to",
  components: {
    CountTo
  },
  data() {
    return {
      endVal: 200
    };
  },
  methods: {
    handleEnd(val) {
      console.log(val, "endval");
    },
    updateNum() {
      this.endVal += 100;
      // this.$refs.countTo.updateNum(200)
    },
    getCount() {
      this.$refs.countTo.getCount();
    }
  }
};
</script>

<style>
</style>
