<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h2>{{food}}</h2>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <button @click="handleClick">返回上一页</button>
    <button @click="pushClick">指定页面</button>
    <button @click="replaceClick">替换上一个页面</button> -->
    <button @click="_getUserInfo">获取用户信息</button>
    <!-- <img :src="userInfo.img" alt=""> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { getUserInfo } from "@/api/user";
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
  data() {
    return {
      userInfo: {}
    }
  },
  mounted() {
    this._getUserInfo()
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
    _getUserInfo() {
      getUserInfo({ userId: 12 }).then(res => {
        this.userInfo = res
        console.log(res, 'res')
      }).catch(err => {
        console.log(err, 'err')
      })
    },
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
        }
        // query: {
        //   name: "jack"
        // }
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
