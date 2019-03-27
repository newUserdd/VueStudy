<template>
  <div>
    <h2>AShow:{{content}}</h2>
  </div>
</template>

<script>
export default {
  name: "AShow",
  props: {
    content: {
      type: [String, Number],
      default: ""
    }
  }
};
</script>

<style>
</style>
