<template>
  <div>
    <h1>email</h1>
    <button @click="handleClick">按钮Email</button>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$on("on-click", msg => {
      console.log("this:" + msg);
    });

    // console.log(this.$bus, '$bus')
  },
  methods: {
    handleClick() {
      // this.$bus.$emit("on-click", "hello");
      this.$emit("on-click", "hello");
    }
  }
};
</script>

<style>
</style>
