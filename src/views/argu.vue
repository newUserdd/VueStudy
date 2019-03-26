<template>
  <div>
    <h1>hello world.</h1>
    <h2>{{name}}</h2>
    <h3>{{$route.params.name}}</h3>
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
  }
};
</script>

<style>
</style>
