<template>
  <div>
    this is render-page
    <!-- <ul @click="handleClick">
      <li @click.stop="handleClick" v-for="(item,index) in list"
      :key="`list_item_${index}`">{{item.name}}</li>
    </ul>-->
    <list :list="list" :render="renderFunc">
      <count-to slot-scope="count" :end-val="count.number"></count-to>
    </list>
  </div>
</template>

<script>
import List from "_c/list";
import CountTo from "_c/count-to";
export default {
  data() {
    return {
      list: [
        {
          name: "jack"
        },
        {
          name: "mary"
        }
      ]
    };
  },
  components: {
    List,
    CountTo
  },
  methods: {
    handleClick() {
      console.log(event);
    },
    renderFunc(h, name) {
      // h or createElement
      // return createElement('i', {
      //   style: {
      //     color: 'red'
      //   }
      // }, name)
      // jsx
      // return (
      //   <CountTo
      //     endVal={200}
      //     nativeOn-click={this.handleClick}
      //     on-on-animation-end={this.handleEnd}
      //     on-click={this.handleClick}
      //     style={{ color: "red" }}
      //   >
      //     12{name}
      //   </CountTo>
      // );
    },
    handleEnd() {
      console.log("end");
    }
  }
};
</script>

<style>
</style>
