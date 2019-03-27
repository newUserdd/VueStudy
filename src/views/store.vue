<template>
  <div>
    this is store page
    <a-input @input="handleInput"/>
    <h3>{{inputValue}} ===>> {{inputValNew}}</h3>
    <h2>{{appNameWithVersion}}</h2>
    <h3>{{firstLetter}}</h3>
    <h1>{{appName}}</h1>
    <button @click="handleAppName">修改appName</button>
    <!-- <a-input v-model="inputValue"/> -->
    <!-- 这种写法相当于上面那种 -->
    <!-- <a-input :value="inputValue" @input="handleInput"/> -->
    <!-- <h2>{{inputValue}}</h2> -->
    <!-- <a-show :content="inputValue"/> -->
    <!-- <p>appName: {{appName}}</p> -->
    <!-- <p>userName: {{userName}}</p> -->
  </div>
</template>

<script>
import AInput from "_c/AInput";
import AShow from "_c/AShow";
import { mapState, mapGetters, mapMutations } from "vuex";
// import { createNamespacedHelpers } from "vuex";
// const { mapState } = createNamespacedHelpers("user");
export default {
  data() {
    return {
      inputValue: ""
    };
  },
  components: {
    AInput,
    AShow
  },
  computed: {
    // appName() {
    //   return this.$store.state.appName
    // },
    // userName() {
    //   return this.$store.state.user.userName
    // },
    // ...mapState(['appName','userName'])
    // 这种方式可以访问模块
    // ...mapState({
    //   appName: state => state.appName,
    //   userName: state => state.user.userName
    // })
    // 通过命名空间创建 mapState
    // ...mapState({
    //   userName: state => state.userName
    // })
    // import { mapState } from "vuex";
    // appNameWithVersion() {
    //   return this.$store.getters.appNameWithVersion
    // },
    testName: {
      set: function(newVal) {},
      get: function() {}
    },
    ...mapGetters(["appNameWithVersion", "firstLetter"]),
    ...mapState({
      appName: state => state.appName
    }),
    inputValNew() {
      return this.inputValue.substr(-1, 1);
    }
  },
  methods: {
    handleAppName() {
      this.SET_APP_ANME('核力量')
    },
    handleInput(val) {
      this.inputValue = val;
    },
    changeState() {
      // this.$store.commit({
      //   type:'SET_APP_ANME',
      //   appName: 'newAppName'
      // })
      this.$store.commit("SET_APP_ANME", "hello world.");
    },
    ...mapMutations(['SET_APP_ANME'])
    // registerModule() {
    //   // this.$store.registerModule(['user', 'todo'], {
    //   this.$store.registerModule("todo", {
    //     state: {
    //       todoList: ["todo 1", "todo 2"]
    //     }
    //   });
    // }
  }
};
</script>

<style>
</style>
