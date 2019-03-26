<template>
  <div class="about">
    <h1>this is about:{{food}}</h1>
  </div>
</template>
<script>
export default {
  props: {
    food: {
      type: String,
      default: "Apple"
    }
  }
};
</script>

