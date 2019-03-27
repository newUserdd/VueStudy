<template>
  <input type="text" @input="handleInput" :value="value">
</template>

<script>
export default {
  name: "AInput",
  props: {
    value: {
      type: [String, Number],
      default: ""
    }
  },
  methods: {
    handleInput(e) {
      // 这里不能直接修改 保证数据单向流动
      const val = e.target.value;
      this.$emit('input',val)
    }
  }
};
</script>

<style>
</style>
