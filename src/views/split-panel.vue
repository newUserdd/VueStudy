<template>
  <div class="split-panel-con">
    <split-panel :value.sync="offset"></split-panel>
    <!-- <split-panel v-model="offset"></split-panel> -->
    <!-- <split-panel :value="offset" @input="handleInput"></split-panel> -->
  </div>
</template>

<script>
import SplitPanel from "_c/split-panel";
export default {
  components: {
    SplitPanel
  },
  data() {
    return {
      offset: 0.8
    };
  },
  methods: {
    handleInput(val) {
      this.offset = val;
    }
  }
};
</script>

<style lang="less">
.split-panel-con {
  width: 400px;
  height: 200px;
  background: papayawhip;
}
</style>
