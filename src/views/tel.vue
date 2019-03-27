<template>
  <div>
    <h1>tel</h1>
    <p>msg:{{msg}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: ""
    };
  },
  mounted() {
    this.$bus.$on("on-click", msg => {
      this.msg = msg;
    });
  }
};
</script>

<style>
</style>
