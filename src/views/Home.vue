<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h2>this is home:{{food}}</h2>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <button @click="handleClick">返回上一页</button>
    <button @click="pushClick">指定页面</button>
    <button @click="replaceClick">替换上一个页面</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  props: {
    food: {
      type: String,
      default: "apple"
    }
  },
  // mounted() {
  //   console.log(this.$route)
  //   console.log(this.$router)
  // },
  // beforeRouterEnter(to, from, next) {
  //   next(vm => {
  //     console.log(vm);
  //   });
  // },
  // beforeRouterLeave(to, from, next) {
  //   next()
  // },
  methods: {
    handleClick() {
      this.$router.go(-1);
      // this.$router.back(-1);
    },
    pushClick() {
      // this.$router.push('/parent')
      this.$router.push({
        // path:'/' 如果是path 则params无效
        name: "argu",
        params: {
          name: "mary"
        },
        query: {
          nickname: "jack"
        }
      });
    },
    replaceClick() {
      // 替换上衣页面
      this.$router.replace({
        name: "parent"
      });
    }
  }
};
</script>
