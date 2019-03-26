import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import { setTitle } from '@/lib/util'
Vue.use(Router)

const router = new Router({
  // mode: 'hash', // 默认值 hash #  history
  routes
})
/**
 * to 即将跳转
 * from 当前将要离开
 * next 确定要做跳转
 */
const HAS_LOGINED = true

// 跳转之前
router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.title) {
    setTitle(to.meta.title)
  }
  if (to.name !== 'login') {
    if (HAS_LOGINED) next()
    else next({ name: 'login' })
  } else {
    if (HAS_LOGINED) next({ name: 'home' })
    else next()
  }
})
// router.beforeResolve((to, from, next) => {

// })

// 后置钩子
router.afterEach((to, from) => {
  // loading = false
})
/**
 * 1.  导航被触发
 * 2.  在失活的组件 (即将离开的页面组件) 里嗲用离开守卫 beforeRouterLeave
 * 3.  调用全局的前置守卫 beforeEach
 * 4.  在重用的组件 调用 beforeRouterUpdate
 * 5.  调用路由独享的守卫  beforeEnter
 * 6.  解析异步路由组件
 * 7.  在被激活的组件（即将进入的页面组件） 嗲用 beforeRouterEnter
 * 8.  调用全局的解析守卫 beforeResolve
 * 9.  导航确认
 * 10. 调用全局的后置守卫 afterEach
 * 11. 触发DOM更新
 * 12. 用创建好的实例调用beforeRouterEnter 守卫传给next()的回调函数
 *
 */
export default router
