<template>
  <div>
    <ul @click="handleClick">
      <li @click.stop="handleClick" v-for="(item,index) in list" :key="`list_item_${index}`">
        <!-- {{index}}--{{item.name}} -->
        <span v-if="!render">{{item.name}}</span>
        <slot :number="-500"></slot>
        <!-- <render-dom v-else :render-func="render" :name="item.name"></render-dom> -->
      </li>
    </ul>
  </div>
</template>

<script>
import RenderDom from "./render-dom";
export default {
  name: "List",
  props: {
    list: {
      type: Array,
      default: () => []
    },
    render: {
      type: Function,
      default: () => {}
    }
  },
  components: {
    RenderDom
  },
  methods: {
    handleClick() {}
  }
};
</script>

<style>
</style>
