<template>
  <div>
    <h1>hello world.</h1>
    <h2>{{name}}</h2>
    <h3>name:{{$route.params.name}}</h3>
    <h3>nickname:{{$route.query.nickname}}</h3>
    <!-- {{routes.name}} -->
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "mary22"
    }
  },
  data() {
    return {
      msg: "hello world."
    };
  },
  mounted() {
    this.$router.back(-1)
    console.log(this.$route.query)
    console.log(this.$route.params)
  }
};
</script>

<style>
</style>
